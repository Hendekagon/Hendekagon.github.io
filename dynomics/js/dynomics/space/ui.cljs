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
    [dynomics.ui.css :as uicss :refer [quadrant-types-colours]]
    [cljs.core.async :as async :refer [put!]]
    [dommy.core :as dommy :refer-macros [sel sel1]]
    [om.core :as om :include-macros true]
    [om.dom :as dom :refer [div img svg defs linearGradient radialGradient stop g path text rect circle line span canvas input a] :include-macros true]
    [panzoom :as pz])
    )

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
  ([] (render-to-image "all"))
  ([id]
    (let [
         up (uicss/unique-css-properties (uicss/css-rules (uicss/main-ui-style-defaults)))
         svg (sel1 (str "#prerender_svg_" id))
         svgp (.cloneNode (.-parentElement svg) true)
         canvas (sel1 (str "#prerender_canvas_" id))
         ccss (.getComputedStyle js/window svg)
         ni1 (.createNodeIterator js/document svg (.-SHOW_ELEMENT js/NodeIterator) nil)
         ni2 (.createNodeIterator js/document (.-firstElementChild svgp) (.-SHOW_ELEMENT js/NodeIterator) nil)
         ]
     (doseq [[i j]
      (map vector
        (take-while identity
          (repeatedly #(.nextNode ni1)))
        (take-while identity
          (repeatedly #(.nextNode ni2))))]
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
        [ox oy] p2
        v (map - p1 p2)
        a (* dc/r2d (- dc/PI2 (dc/angle v)))
        a1 [-1 0]
        a2 [+1 0]
        a3 [0 -2]
        E interpose]
        (path #js {:className "trajectory_arrowhead"
                   :transform (trs  [:t ox oy] [:s 4] [:r a])
                   :d         (apply str (concat "M " (E " " a1) " L " (E " " a2) " L " (E " " a3) " z"))})))

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

(defn saddle-2
  ([start init-points samples]
    (dc/ds-evolution samples
      {
       :f (fn [[x y]] (map + [x y] (map * [0.04 0.04] [(* -1 x) y])))
       :points
        [[24 0] [-24 0] [0 8] [0 -8] [24 12] [-24 12] [-24 -12] [24 -12]]})))

(defn saddle-3
  ([start init-points samples]
    (dc/ds-evolution samples
      {
       :f (fn [[x y]] (map + [x y] (map * [0.04 0.04] [x (* -1 y)])))
       :points
        [[8 0] [-8 0] [0 24] [0 -24] [12 24] [-12 24] [-12 -24] [12 -24]]})))

(defn saddle-4
  ([start init-points samples]
    (dc/ds-evolution samples
      {
       :f (fn [[x y]] (map + [x y] (map * [0.04 0.04] [y x])))
       :points
        [[24 -12] [-24 12] [-12 24] [12 -24]
        [8 8] [-8 -8] [-16 16] [16 -16]]})))

(defn saddle-5
  ([start init-points samples]
    (dc/ds-evolution samples
      {
       :f (fn [[x y]] (map + [x y] (map * [-0.04 -0.04] [y x])))
       :points
        [[24 12] [-24 -12] [12 24] [-12 -24]
        [16 16] [-16 -16] [-8 8] [8 -8]]
        })))

(defn spiral
  ([samples expansion rotation] (spiral [1 0] 1 samples expansion rotation))
  ([start init-points samples expansion rotation]
   (dc/ds-evolution samples
     (assoc (dc/make-ds (dc/p2c [expansion rotation]))
       :points
       (first (dc/ds-evolution init-points
                (assoc (dc/make-ds (dc/p2c [1 dc/PIb4]))
                  :points [start])))))))

(defn get-icon-fn [type-id]
  (get {
        0 (partial spiral [32 0] 8 16 0.97 0)
        1 (partial spiral [10 0] 8 16 1.045 0)
        2 (partial saddle-2 [24 0] 8 20)
        3 (partial saddle-3 [24 0] 8 20)
        4 (partial saddle-4 [24 0] 8 20)
        5 (partial saddle-5 [24 0] 8 20)
        6 (partial spiral 32 1.1 -0.50)
        7 (partial spiral 32 1.1 0.50)
        8 (partial spiral [32 0] 1 32 0.97 -0.42)
        9 (partial spiral [32 0] 1 32 0.97 0.42)
        }
        type-id (partial spiral 155 1.02 0.1)))

(defn make-type-icon
  ([type-id]
    (println "icon for type " type-id)
    (rect :js {:x -1 :y -1 :width 3 :height 3 :fill "red"})
    (g #js {:id (str "dynomics_type_icon_" type-id)
            :className (str "dynomics_type_icon " (str "type_icon_" type-id))
            :transform (trs [:t 0.5 0.5] [:s 0.05])}
      (map (partial make-trajectory-group true) ((get-icon-fn type-id))))))

(defn make-prerender-icon
  [id type]
  (div
    #js {}
    (canvas #js {:id (str "prerender_canvas_" id) :width 32 :height 32})
    (div #js {:classsName "dynomics_node_type_selector"
             :id (str "prerender_svg_box_" id)}
        (svg #js {
                  :classsName "dynomics_space_svg"
                  :id (str "prerender_svg_" id)
                  :width "32px" :height "32px" :viewBox "-1 -1 3 3"
                  :xmlns "http://www.w3.org/2000/svg"
                  :xmlns:xlink "http://www.w3.org/1999/xlink"
                  :shape-rendering "crispEdges"
                  :preserveAspectRatio "xMidYMin"
                  :zoomAndPan false
                  }
             (make-type-icon id)))))

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
   (div #js {:className "dynomics_tool_things"}
     (div #js {:className "dynomics_tool_selectors"}
      (map
        (fn [[tk {:keys [description icon keybinding]}]]
          (div #js {:className (str "dynomics_tool_selector " (cond (= tk current-tool) "dynomics_tool_selected"))
                    :title     (str description " ( " (if (keyword? keybinding) (name keybinding) keybinding) " )")
                    :onMouseDown
                     (fn [e]
                       (put! state-updates
                         {
                          :fn     (fn [s] (assoc-in s [:ui :functions :dynomics :current-tool] tk))
                          :action {:verb :select :type :tool :dont-record true}
                          })
                       nil)} icon))
        (map (juxt identity tools) tools-order)))
     (div #js {:className "dynomics_current_tool_text" :title (get-in tools [current-tool :description])}
       (get-in tools [current-tool :name])))))

(defn make-node-types-cached-component
  "Returns a node-type component for the node types palette,
  which can prerender its SVG to a canvas & therefore
  cache the resulting image, to save on components in the DOM if need be."
  ([{:keys [id type]} owner]
   (reify
     om/IInitState
     (init-state [this]
       (if-let [d (js/localStorage.getItem (str "dataurl_" id))]
        {:dataurl d}
        {:dataurl nil}))
     om/IRender
     (render [this]
       (if-let [dataurl (:dataurl (om/get-state owner))]
         (img #js {:width 32 :height 32 :src dataurl})
         (make-prerender-icon id type)))
     om/IDidMount
     (did-mount [this]
       (cond (not (:dataurl (om/get-state owner)))
        (let [dataurl (render-to-image id)]
          (om/set-state! owner {:dataurl dataurl})
          (js/localStorage.setItem (str "dataurl_" id) dataurl)))))))

(defn make-node-types-palette-component
  "Returns a component for the node types palette"
  ([{:keys [component state-updates] :as state}]
   (reify
     om/IRender
     (render [this]
      (div #js {:className "dynomics_node_types"}
           (map
             (fn [{:keys [id stability type]}]
               (div #js {:className (str "dynomics_node_type_selector")
                         :title (str "Set selected nodes to " id "-" (name stability) "-" (name type))
                         :onMouseDown (fn [e]
                                        (put! state-updates
                                              {
                                               :fn (get-in component [:tools :node-types :tools id :fn])
                                               :action {:verb :set :type :node-type :id id :description (str "Node type " id)}
                                               })
                                        nil)
                         }
                    (om/build make-node-types-cached-component {:id id :type type :key (str "ntp" id)} {:key :key})))
             (vals dc/node-types)))))))

(defn make-edge-component
  "Returns a component for an edge"
  [{[[nid1 nid2] [nx1 ny1] [nx2 ny2] [cx1 cx2] [cy1 cy2]] :points compatible? :compatible? node-scale :node-scale}]
  ;(println "make edge component" nid1 nid2)
  (om/component
    (path #js
              {
               :key (str "edge_" nid1 "_" nid2)
               :className (str "dynomics_edge " (cond compatible? "dynomics_compatible_edge"))
               :d
               (svg/to-svg-path
                 (map svg/make-bezier
                      [[[nx1 ny1] [(+ nx1 (* node-scale cx1)) (+ ny1 (* node-scale cy1))]]
                       [[nx2 ny2] [(+ nx2 (* node-scale cx2)) (+ ny2 (* node-scale cy2))]]]))})))

(defn make-open-region-component
  ([{node-id :node-id quadrant-type :quadrant-type [qx qy] :quadrant-vector
    [p1 p2 {[x y] :point [[cx cy]] :control-points :as p3} p4] :points}]
    ;(println "  or " node-id "type" quadrant-type " > " [qx qy])
    (om/component
      (g #js {}
         (comment (defs #js {}
                (radialGradient #js
                                    {:id (str "qg_" node-id "_" quadrant-type)
                                     :gradientUnits "userSpaceOnUse"
                                     :cx x :cy y :r 0.04
                                     }
                                (stop #js {:offset "0" :stopColor (get quadrant-types-colours quadrant-type) :stopOpacity "1"})
                                (stop #js {:offset "0.5" :stopColor (get quadrant-types-colours quadrant-type) :stopOpacity "0.25"})
                                (stop #js {:offset "0.75" :stopColor (get quadrant-types-colours quadrant-type) :stopOpacity "0.125"})
                                (stop #js {:offset "1" :stopColor (get quadrant-types-colours quadrant-type) :stopOpacity "0"}))))
        (path #js {:className (str "dynomics_open_region " (str "dynomics_open_region_type_" quadrant-type))
                   ;:fill (str "url(#" (str "qg_" node-id  "_" quadrant-type) ")")
                  :d (str (svg/to-svg-path [p1 p2]) (svg/to-svg-path [(assoc p3 :ml "L") p4]) "z")})))))

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
              :className (str "dynomics_node_subgraph "
                          (cond (selected-nodes path) "dynomics_node_selected"))
              :onMouseDown
                (make-handler (to-coords "space_root") :mouse-down
                  {:msgs msgs :path path :id id :pan-zoom pz :current-tool current-tool})
              :onMouseUp (make-handler (to-coords "space_root") :mouse-up
                {:msgs msgs :path path :pan-zoom pz :current-tool current-tool})
              }
       (circle #js {:cx 0 :cy 0 :r 0.3
                    :className (str "dynomics_node_selector_dot")
                    })
        (text #js {:x -4 :y 4 :transform (trs [:s 0.05]) :fill "black"} (str pt))
       (rect #js {:x         0 :y 0 :width 1 :height 1
                  :transform (trs [:t -1 -1] [:s 2 2])
                  :className (str "dynomics_node")
                  })
       (g #js {:className "dynomics_node_connections"}
         (map
           (fn [{[cx cy] :position cid :id}]
             (g #js {
                     :className "dynomics_node_connection"
                     :id        (str "node_" id "_connection_" cid)
                     }
               (line #js {:x1 0 :y1 0 :x2 cx :y2 cy :className "dynomics_node_connection_line"})
               (let [path [:space :nodes id :connections cid]]
                 (circle #js
                     {
                      :cx        0 :cy 0 :r 0.27
                      :className (str "dynomics_node_connection_dot " (cond (selected-nodes path) "dynomics_node_selected"))
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
   ([{{:keys [nodes edges selected-nodes regions compatibilities graph node-scale] :as space} :space cf :cf
    {current-tool :current-tool} :component
     msgs :msgs pz :pan-zoom :as state}]
   (om/component
     (div #js {:className (str "dynomics_space " (if (= :dynomics cf) "selected_function" "hidden_function"))}
       (svg #js {
                 :className           "dynomics_space_svg"
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
           (rect #js {:x -16 :y -16 :width 32 :height 32 :className "dynomics_space_background"})
           (rect #js {:x 0 :y 0 :width 1 :height 1 :className "dynomics_space_space"})
           (comment (svg #js {
                      :className           "dynomics_space_svg"
                      :id                  "prerender_svg"
                      :width               "1" :height "1" :viewBox "-1 -1 3 3"
                      :xmlns               "http://www.w3.org/2000/svg"
                      :xmlns:xlink         "http://www.w3.org/1999/xlink"
                      :shape-rendering     "crispEdges"
                      :preserveAspectRatio "xMidYMin"
                      :zoomAndPan          false
                      }
              (make-type-icon 1 64 1.05 0)))
            (comment (cond regions
                   (map
                     (fn [region]
                       (path #js {:className "dynomics_region"
                                  :d (dc/to-closed-svg-path (mapcat identity region))}))
                        (dc/make-paths space))))
            ;(om/build test-component (select-keys state [:component]))
            (om/build-all make-open-region-component
                          (mapcat (partial dc/make-open-regions node-scale) (dc/edge-pairs-by-node space)))
            (om/build-all make-edge-component
                          (map (fn [e]
                                  (assoc (dc/with-compatibilities e compatibilities)
                                    :node-scale node-scale))
                                     (map (partial dc/edge-points nodes) edges)))
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
                :className (str "dynomics_cursor ")
                :transform (trs (cons :t (get-in nodes [:cursor :position])))
                }))))))))

(defn make-prerender-component
  "Returns a component for offscreen rendering"
  ([{{:keys [nodes edges selected-nodes regions node-scale] :as space} :space cf :cf :as state}]
   (om/component
     (div #js {:className "prerender_component"
               :id "prerender_component_all"}
       (canvas #js {:id "prerender_canvas_all" :width 64 :height 64})
       (svg #js {
                 :className           "dynomics_space_svg"
                 :id                  "prerender_svg_all"
                 :width               "100%" :height "100%" :viewBox "-1 -1 3 3"
                 :xmlns               "http://www.w3.org/2000/svg"
                 :xmlns:xlink         "http://www.w3.org/1999/xlink"
                 :shape-rendering     "crispEdges"
                 :preserveAspectRatio "xMidYMin"
                 :zoomAndPan false
                 }
         (make-type-icon 1)
         )))))

