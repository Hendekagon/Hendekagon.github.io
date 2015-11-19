(ns dynomics.space.ui
  "
  This namespace provides components
  for making the main space UI

  Currently this is implemented with Om/React
  and SVG, because that was the fastest way
  to do it. We could move to Canvas or I'm
  thinking maybe WebGL in future.

  "
  (:require
    [dynomics.space.core :as dc]
    [dynomics.ui.svg :as svg :refer [trs]]
    [dynomics.ui.css :as uicss]
    [cljs.core.async :as async :refer [put!]]
    [dommy.core :as dommy :refer-macros [sel sel1]]
    [om.core :as om :include-macros true]
    [om.dom :as dom :refer [div img svg g path text rect circle line span canvas input a] :include-macros true]
    [panzoom :as pz]
    ))

(defn to-coords
  "Returns a function that converts local coords to
  those of the given element-id's"
  ([element-id]
   (to-coords
     (.. js/document (getElementById "space"))
     (.. js/document (getElementById element-id))))
  ([svg-element element]
   (fn [x y]
     (let [
           ctm (.. element getScreenCTM)
           p   (.. svg-element createSVGPoint)
           t   (set! (.-x p) x)
           t   (set! (.-y p) y)
           p   (.matrixTransform p (.inverse ctm))
           px  (.-x p)
           py  (.-y p)
           ]
       [px py])
     )))

(defn add-pan-zoom!
  "Adds a panzoom object to the space"
  ([pz]
  (.zoom pz 2) pz)
  ([] (add-pan-zoom!
    (js/svgPanZoom.
         "#space"
         (clj->js
           {
            :minZoom 1
            :maxZoom 100
            })))))

(defn toggle-pan-zoom! [{pz :pan-zoom}]
  (if (.isPanEnabled pz) (.disablePan pz) (.enablePan pz))
  (if (.isZoomEnabled pz) (.disableZoom pz) (.disableZoom pz)))

(defn disable-pan-zoom! [{pz :pan-zoom}]
  (.disablePan pz) (.disableZoom pz))

(defn enable-pan-zoom! [{pz :pan-zoom}]
  (.enablePan pz) (.enableZoom pz))

(defn render-to-image
  ([] (render-to-image :#prerender_svg))
  ([svg-selector]
    (let [
         up (uicss/unique-css-properties (uicss/css-rules (uicss/main-ui-style-defaults)))
         svg (sel1 svg-selector)
         svgp (.cloneNode (.-parentElement svg) true)
         canvas (sel1 :#canvas)
         ccss (.getComputedStyle js/window svg)
         ni1 (.createNodeIterator js/document svg (.-SHOW_ELEMENT js/NodeIterator) nil)
         ni2 (.createNodeIterator js/document (.-firstElementChild svgp) (.-SHOW_ELEMENT js/NodeIterator) nil)
         ]
     (println "-------")
     (doseq [[i j] (map vector (take-while identity (repeatedly #(.nextNode ni1))) (take-while identity (repeatedly #(.nextNode ni2))))]
       (.removeAttribute j "id")
       (.removeAttribute j "class")
       (.removeAttribute j "data-reactid")
       (let [ccss (.getComputedStyle js/window i)]
         (doseq [is (range (.-length ccss))]
           (let [p (.item ccss is)]
             (cond (up (keyword p))
                   (.setProperty (.-style j) p (.getPropertyValue ccss p)))))))
     (.canvg js/window canvas (.-innerHTML svgp))
     (.toDataURL canvas))))

(defn make-handler
  "Returns an event handler for the given event type,
  sending the event on the message-channel
  "
  [transform type-key {msgs :msgs current-tool :current-tool :as s}]
  (fn [e]
    (.stopPropagation e)
    (let [mp (transform (.-clientX e) (.-clientY e))]
      (put! msgs (merge s {:verb type-key :type current-tool
                   :position mp :event e})) nil)))

(defn arrowhead [trajectory]
  (let [
        [p1 p2] (subvec trajectory (dec (dec (count trajectory))) (count trajectory))
        v (map - p1 p2)
        x (dc/c* v [0 0.5])
        a1 (map + p2 x)
        a2 (map - p2 x)
        a3 (map - p2 v)
        E interpose]
        (path #js {:className "trajectory_arrowhead"
                   :d (apply str (concat "M " (E " " a1) " L " (E " " a2) " L " a3 " z"))})))

(defn make-trajectory-group
  ([with-arrowhead trajectory]
   (g #js {:className "trajectory_group"}
     (path #js
         {:className "trajectory_path"
          :d
           (apply str
             (reduce
               (fn [r p] (concat r [" L "] (interpose " " p)))
               (concat ["M "] (interpose " " (first trajectory))) (rest trajectory)))})
     (cond with-arrowhead (arrowhead (vec trajectory))))))

(defn make-type-icon
  ([type-id] (make-type-icon type-id 64 1 0.3))
  ([type-id n-points expansion rotation]
    (g #js {:id (str "dynamics_type_icon_" type-id)
            :className (str "dynamics_type_icon " (str "type_icon_" type-id)) :transform "scale(0.05)"}
      (make-trajectory-group :without-arrowhead (dc/spiral-system n-points expansion rotation)))))

; need to account for combinations of subpaths
(defn make-paths [{:keys [nodes edges regions node-scale] :as space}]
  (println "Regions " regions)
  (map
    (fn [region]
      (reduce
        (fn [beziers connection]
          (conj beziers
            (map (fn [[nid1 cid1]]
                  (let
                    [
                     [nx1 ny1] (get-in nodes [nid1 :position])
                     [cx1 cy1] (get-in nodes [nid1 :connections cid1 :position])
                     ]
                    (svg/make-bezier [[nx1 ny1] [(+ nx1 (* node-scale cx1)) (+ ny1 (* node-scale cy1))]])))
                 (map dc/simplify-connection connection))))
        [] region))
   regions))

(defn make-tools-palette-component
  "Returns a palette of tools"
  ([{:keys [current-tool tools tools-order state-updates] :as state}]
   (div #js {:className "dynamics_tool_things"}
     (div #js {:className "dynamics_tool_selectors"}
      (map
        (fn [[tk {:keys [description icon keybinding]}]]
          (div #js {:className (str "dynamics_tool_selector " (cond (= tk current-tool) "dynamics_tool_selected"))
                    :title     (str description " ( " (if (keyword? keybinding) (name keybinding) keybinding) " )")
                    :onMouseDown
                     (fn [e]
                       (put! state-updates
                         {
                          :fn     (fn [s] (assoc-in s [:ui :functions :dynamics :current-tool] tk))
                          :action {:verb :select :type :tool :dont-record true}
                          })
                       nil)} icon))
        (map (juxt identity tools) tools-order)))
     (div #js {:className "dynamics_current_tool_text" :title (get-in tools [current-tool :description])}
       (get-in tools [current-tool :name])))))

(defn make-node-types-palette-component
  "Returns a component for the node types palette"
  ([{:keys [component state-updates]}]
   (om/component
     (div #js {:className "dynamics_node_types"}
      (map
        (fn [{:keys [id stability type]}]
          (div #js {:className   (str "dynamics_node_type_selector")
                    :title       (str "Set selected nodes to " id "-" (name stability) "-" (name type))
                    :onMouseDown (fn [e]
                                   (put! state-updates
                                     {
                                      :fn     (get-in component [:tools :node-types :tools id :fn])
                                      :action {:verb :set :type :node-type :id id :description (str "Node type " id)}
                                      })
                                   nil)
                    }
             (if (sel1 :#prerender_svg)
              (img #js {:src (render-to-image)})
              (str id))
            ;(svg #js {:width "100%" :height "100%" :viewBox "-1 -1 2 2"} (make-type-icon id))
            ))
        (vals dc/node-types))))))

(defn make-edge-component
  "Returns a component for an edge"
  [{[[nid1 nid2] [nx1 ny1] [nx2 ny2] [cx1 cx2] [cy1 cy2]] :points compatable? :compatable? node-scale :node-scale}]
  ;(println "make edge component" nid1 nid2)
  (om/component
    (path #js
              {
               :key (str "edge_" nid1 "_" nid2)
               :className (str "dynamics_edge " (cond compatable? "dynamics_compatable_edge"))
               :d
               (svg/to-svg-path
                 (map svg/make-bezier
                      [[[nx1 ny1] [(+ nx1 (* node-scale cx1)) (+ ny1 (* node-scale cy1))]]
                       [[nx2 ny2] [(+ nx2 (* node-scale cx2)) (+ ny2 (* node-scale cy2))]]]))})))

(defn make-node-component
  "Returns a component for a node and its connections"
  [{{[x y] :position t :type pt :node-type id :id connections :connections} :node
    node-scale :node-scale selected-nodes :selected-nodes
    {current-tool :current-tool} :component
    msgs :msgs pz :pan-zoom}]
  (let [path [:space :nodes id]]
    (om/component
      (g #js
             {
              :id (str "node_" id)
              :transform (trs [:t x y] [:s node-scale])
              :className (str "dynamics_node_subgraph "
                              (cond (selected-nodes path) "dynamics_node_selected"))
              :onMouseOver (fn [e]
                             ;(.log js/console (.. e -target -parentElement -transform))
                             ;(set! (.. e -target -parentElement -transform) (mt :t x y :s 0.08 0.08))
                             )
              :onMouseDown
                (make-handler (to-coords "space_root") :mouse-down
                  {:msgs msgs :path path :id id :pan-zoom pz :current-tool current-tool})
              :onMouseUp (make-handler (to-coords "space_root") :mouse-up
                {:msgs msgs :path path :pan-zoom pz :current-tool current-tool})
              }
       (circle #js {:cx 0 :cy 0 :r
                    ((fn []
                       ;(println "node> " id)
                      0.3) 0)
                    :className (str "dynamics_node_selector_dot")
                    })
        (text #js {:x -4 :y 4 :transform (trs [:s 0.05]) :fill "black"} (str pt))
       (rect #js {:x         0 :y 0 :width 1 :height 1
                  :transform (trs [:t -1 -1] [:s 2 2])
                  :className (str "dynamics_node")
                  })
       (g #js {:className "dynamics_node_connections"}
         (map
           (fn [{[cx cy] :position cid :id}]
             (g #js {
                     :className "dynamics_node_connection"
                     :id        (str "node_" id "_connection_" cid)
                     }
               (line #js {:x1 0 :y1 0 :x2 cx :y2 cy :className "dynamics_node_connection_line"})
               (let [path [:space :nodes id :connections cid]]
                 (circle #js
                     {
                      :cx        0 :cy 0 :r 0.27
                      :className (str "dynamics_node_connection_dot " (cond (selected-nodes path) "dynamics_node_selected"))
                      :transform (trs [:t cx cy])
                      :onMouseDown
                                 (make-handler
                                   (to-coords "space_root") :mouse-down {:msgs msgs :path path :id cid :pan-zoom pz  :current-tool current-tool})
                      :onMouseUp
                                 (make-handler
                                   (to-coords "space_root") :mouse-up {:msgs msgs :path path :id cid :pan-zoom pz  :current-tool current-tool})
                      }))))
           connections))))))

(defn test-component [x]
  (om/component (circle #js {:cx 0 :cy 0 :r 0.2 :fill (if (> 0.5 (.random js/Math)) "orange" "green")})))

(defn make-space-component
  "Returns a component for the phase-space editor"
  ([{{:keys [nodes edges selected-nodes regions compatabilities node-scale] :as space} :space cf :cf
    {current-tool :current-tool} :component
     msgs :msgs pz :pan-zoom :as state}]
   (om/component
     (div #js {:className (str "dynamics_space " (if (= :dynamics cf) "selected_function" "hidden_function"))}
       (svg #js {
                 :className           "dynamics_space_svg"
                 :id                  "space"
                 :width               "100%" :height "100%" :viewBox "-1 -1 3 3"
                 :xmlns               "http://www.w3.org/2000/svg"
                 :xmlns:xlink         "http://www.w3.org/1999/xlink"
                 :shape-rendering     "crispEdges"
                 :preserveAspectRatio "xMidYMin"
                 :zoomAndPan false
                 }
         (g #js {:id          "space_root"
                 :onMouseMove (make-handler (to-coords "space_root") :mouse-move {:msgs msgs :pan-zoom pz :current-tool current-tool})
                 :onMouseDown (make-handler (to-coords "space_root") :mouse-down {:msgs msgs :pan-zoom pz :current-tool current-tool})
                 }
           (rect #js {:x -16 :y -16 :width 32 :height 32 :className "dynamics_space_background"})
           (rect #js {:x 0 :y 0 :width 1 :height 1 :className "dynamics_space_space"})
            (comment (cond regions
                   (map
                     (fn [region]
                       (path #js {:className "dynamics_region"
                                  :d (dc/to-closed-svg-path (mapcat identity region))}))
                        (dc/make-paths space))))
            ;(om/build test-component (select-keys state [:component]))
           (om/build-all make-edge-component
             (map
              (fn [[[_ _ nid1 _ cid1] [_ _ nid2 _ cid2]]]
              (let [
                     [nx1 ny1] (get-in nodes [nid1 :position])
                     [nx2 ny2] (get-in nodes [nid2 :position])
                     [cx1 cy1] (get-in nodes [nid1 :connections cid1 :position])
                     [cx2 cy2] (get-in nodes [nid2 :connections cid2 :position])
                     ] {:points [[nid1 nid2] [nx1 ny1] [nx2 ny2] [cx1 cx2] [cy1 cy2]]
                      :compatable? (compatabilities [nid1 nid2])
                      :node-scale node-scale})
                ) edges))
           (om/build-all make-node-component
             (map (fn [node] (merge (select-keys state [:component :msgs]) {:node node :key (str "node_" (:id node))
                               :node-scale node-scale :selected-nodes selected-nodes :pan-zoom pz}))
               (vals (apply dissoc nodes (cons :cursor (map last selected-nodes))))) {:key :key})
            (om/build-all make-node-component
             (map (fn [node] (merge (select-keys state [:component :msgs]) {:node node :key (str "node_" (:id node))
                               :node-scale node-scale :selected-nodes selected-nodes :pan-zoom pz}))
               (vals (select-keys nodes (map last selected-nodes)))) {:key :key})
           (comment (circle #js
               {
                :cx        0 :cy 0 :r 0.01
                :className (str "dynamics_cursor ")
                :transform (trs (cons :t (get-in nodes [:cursor :position])))
                }))))))))

(defn make-prerender-component
  "Returns a component for offscreen rendering"
  ([{{:keys [nodes edges selected-nodes regions node-scale] :as space} :space cf :cf
     :as state}]
   (om/component
     (div #js {:className "prerender_component"
               :id "prerender_component"}
       (svg #js {
                 :className           "dynamics_space_svg"
                 :id                  "prerender_svg"
                 :width               "100%" :height "100%" :viewBox "-1 -1 3 3"
                 :xmlns               "http://www.w3.org/2000/svg"
                 :xmlns:xlink         "http://www.w3.org/1999/xlink"
                 :shape-rendering     "crispEdges"
                 :preserveAspectRatio "xMidYMin"
                 :zoomAndPan false
                 }
         ;(map (fn [n] (make-type-icon 1 n 1 0.3)) (range 64 74))
         (make-type-icon 1 64 1 0.3)
         )))))

