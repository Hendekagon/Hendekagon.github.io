(ns dynomics.ui.ui
  "
  Here is the main UI

  It's built with Om/React for rendering state to the DOM
  and core.asyc for user interaction, state updates
  and IO

  Everything is built in the browser including the CSS

  "
  (:require
    [clojure.browser.repl :as repl]
    [cljs.tools.reader :refer [read-string]]
    [cljs.js :refer [empty-state eval js-eval]]
    [canvg]
    [goog.style]
    [dynomics.ui.core :as rc]
    [dynomics.ui.messaging :as m]
    [dynomics.space.core :as dc :refer [round]]
    [dynomics.space.ui :as du]
    [dynomics.ui.css :as uicss]
    [dynomics.ui.persistence :as ps]
    [cljs.core.async :as async :refer [put!]]
    [om.core :as om :include-macros true]
    [om.dom :as dom :refer [div svg g rect circle span canvas input a] :include-macros true]
    [dommy.core :as dommy :refer-macros [sel sel1]]
    [hipo.core :as hipo]
    [garden.color :as color :refer [hsl rgb hex->rgb]]
    [garden.core :refer [css]]
    [garden.types :as gtypes]))

;(def my-state (atom {}))

(enable-console-print!)

(def animation-frame
  (or
   (.-requestAnimationFrame js/window)
   (.-webkitRequestAnimationFrame js/window)
   (.-mozRequestAnimationFrame js/window)
   (.-msRequestAnimationFrame js/window)
   (.-oRequestAnimationFrame js/window)))

(comment
"
_dispatchIDs: _dispatchListeners: altKey: bubbles: button: buttons: cancelable: clientX: clientY: ctrlKey: currentTarget: defaultPrevented: detail: dispatchConfig: dispatchMarker: eventPhase: getModifierState: isDefaultPrevented: () {isPropagationStopped: () {isTrusted: metaKey: nativeEvent: pageX: pageY: relatedTarget: screenX: screenY: shiftKey: target: timeStamp: type: view: 
")

(defn is-modifier [keycode] (#{16 17 18 91 93 20} keycode))

(def isnt-modifier (complement is-modifier))

(defn keydown [state e]
  ;(. e preventDefault)
  ;(println "key: " (keycode-to-keyword (.-keyCode e)))
  (rc/update-state state {:key (rc/keycode-to-keyword (.-keyCode e)) :keycode (.-keyCode e) :event :keydown}))

(defn keyup [state e]
  (rc/update-state state {:key (rc/keycode-to-keyword (.-keyCode e)) :keycode (.-keyCode e) :event :keyup}))

(defn evt-to-keyword [e] (rc/keycode-to-keyword (.-keyCode e)))

(defn mousemoves [state]
  (fn [e] (om/transact! state
    (fn [s]
      (update-in s [:ui :mouse]
       (fn [{:keys [vx vy x y]}]
         {:vx (- x (.-clientX e)) :vy (- y (.-clientY e)) :x (.-clientX e) :y (.-clientY e)})))) nil))

; maybe better via state-updates ?
(defn add-events!
  ([state]
    (set! (.-onkeydown js/window) (fn [e] (om/transact! state (fn [s] (keydown s e))) nil))
    (set! (.-onkeyup js/window) (fn [e] (om/transact! state (fn [s] (keyup s e))) nil))
    (set! (.-onfocus js/window) (fn [e] (om/transact! state (fn [s] (rc/reset-keypath s))) nil))
    (set! (.-onblur   js/window) (fn [e] (om/transact! state (fn [s] (rc/reset-keypath s))) nil))
    ;(set! (.-onmousemove   js/window) (mousemoves state))
    state
  )
)

(defn parse-px [v]
  (.parseFloat js/Number (. v (substr 0 (- (.-length v) 2)))))

(defn make-function-selector-view
  "Returns a component for selecting the current function"
  ([state owner]
   (let
     [
      functions (reverse (dissoc (get-in state [:ui :functions]) :function-selector :header :history))
      state-updates (get-in state [:messaging :state-updates])
      ]
     (om/component
       (div #js {:className "function_selector"}
        (map
          (fn [[k {naym :name description :description}]]
            (div #js
             {:className "function_selector_item"
              :id        (str (name k))
              :onClick   (fn [e]
                           (put! state-updates
                                 {
                                  :fn     (fn [s] (assoc-in s [:ui :current-function] k))
                                  :action {:verb :select :type :function :id k :description naym}
                                  }) nil)
              } naym))
          functions))))))

(defn make-history-selector-view
  "Return a component to display a list
  of historical states which select a historical
  state on mouseover"
  ([{{:keys [state-updates]} :messaging :as state} owner]
    (om/component
      (div #js {:className "history_selector"}
        (map
          (fn [{:keys [action version] :as history-item}]
            (let
              [
                previous-action  (:action (get (:history history-item) (dec (count (:history history-item)))))
                previous-version (:version (last (:history history-item)))
              ]
              (div #js
                {
                  :className (str "history_selector_item "
                    (if (= :history-item (:type previous-action)) "historical" ""))
                  :id        (str "history_version_" previous-version)
                  :onMouseOver
                    (fn [e] (put! state-updates
                      {
                      :fn     (fn [s] (merge (om/value history-item) (select-keys s (conj (:dont-record s) :history))))
                      :action {:desccription (str (:description previous-action))
                      :verb :select :type :history-item :id version}
                      }) nil)
                  ; see https://github.com/reagent-project/reagent/issues/78
                  ; for why that handler returns nil
                }
                (:description previous-action)
              )))
        (filter (fn [hi] (:description (:action (get (:history hi) (dec (count (:history hi)))))))
          (reverse (conj (:history state) state))))))))

(defn make-header-view
  "Returns a component for the top header"
  [{:keys [logo-text app-name app-version] :as state}]
  (om/component
    (div #js {:className "top_component"}
      (du/make-tools-palette-component state)
      (cond logo-text (div #js {:className "logo"} logo-text))
      (cond app-name (div #js {:className "headertitle"} (str app-name " " app-version))))))

(defn evaluate [s sexp f]
  (eval (empty-state)
        sexp
       {:eval js-eval
        :source-map true
        :context :expr}
        f))

(defn make-footer-view [{{:keys [state-updates]} :messaging
  {last-result :result last-exps :exps} :eval :as state}]
  (om/component
    (div #js {:className "bottom_component"}
      (input #js {:className "eval_input"
                  :type "text"
                  :size 64
                  :onKeyDown
                  (fn [e]
                    (.stopPropagation e)
                    (cond (= :enter (evt-to-keyword e))
                          (let [exps (.-value (.-target e))]
                            (evaluate state (read-string exps)
                                      (fn [result]
                                        (println (get-in result [:error :message] result))
                                        (put! state-updates
                                              {
                                               :fn (fn [s] (assoc s :eval
                                                {:exps exps :result
                                                (if (:error result) (get-in result [:error :message]) result)}))
                                               :action {:verb :eval :type :state :description "Evaluate"}
                                               }))))) nil)})
        (div #js {:className "eval_result"} (str "> " last-result)))))

(defn add-components [state]
  (doseq [component (filter :subscriptions (vals (dissoc (get-in state [:ui :functions]))))]
    (m/subscribe! state component))
  state)

(defn set-current-tool [tool-key state]
  (println "set current tool to " tool-key)
  (assoc-in state [:ui :functions :dynamics :current-tool] tool-key))

(defn make-kb-path [kb]
  (if (keyword? kb)
    [:keymap kb kb]
    kb))

(defn add-keybindings
  ([state] (add-keybindings state (get-in state [:ui :functions :dynamics :tools])))
  ([state tools]
    (reduce
      (fn [r [k {f :fn kb :keybinding naym :name tools :tools}]]
        ;(println "add kb " (make-kb-path kb) naym)
        (if f
          (assoc-in r (make-kb-path kb) (fn [s] (println naym) (f s)))
          (if tools
            (add-keybindings r tools)
            (assoc-in r (make-kb-path kb) (partial set-current-tool k))
            )))
      state tools)))

(defn add-messaging [s]
  (assoc s :messaging (m/make-channels)))

(defn add-browser-info [s]
  (assoc-in s [:browser :screen]
    {:width (.-availWidth js/screen) :height (.-availHeight js/screen)}))

(defn be-first [s] (assoc s :action {:description "-start-"}))

(defn select-node [s path mp]
  (if path
    (assoc-in
     (update-in s [:space :selected-nodes]
       (fn [sn] (if (sn path) (disj sn path) (conj sn path))))
     (conj path :move-offset) mp) s))

(defn add-functions
  "
  Returns the given state map with UI functions added.

  Each component is represented by a map with:

  * an id
  * a name
  * the name of the Om builder fn to make its UI component
  * a query of the state that returns everything the UI component will need
  * a subscriptions fn that returns a list of messages it wants of subscribe to

  and anything else it needs

  "
  [state]
  (assoc-in state [:ui :functions]
    {
     :header
     {
      :id         :header
      :name       "Header"
      :om-builder make-header-view
      :query
                  (fn [state]
                    {
                     :app-name      (:app-name state)
                     :app-version   (:app-version state)
                     :logo-text     (:logo-text state)
                     :dt            (:dt state)
                     :current-tool  (get-in state [:ui :functions :dynamics :current-tool])
                     :tools         (get-in state [:ui :functions :dynamics :tools])
                     :tools-order   (get-in state [:ui :functions :dynamics :tools-order])
                     :state-updates (get-in state [:messaging :state-updates])
                     })
      }
     :dynamics
     {
      :id           :dynamics
      :name         "Dynamics"
      :om-builder   dynomics.space.ui/make-space-component
      :query
                    (fn [state]
                      {
                       :state-updates   (get-in state [:messaging :state-updates])
                       :msgs            (get-in state [:messaging :message-channel])
                       :space           (:space state)
                       :cf              (get-in state [:ui :current-function])
                       :component       (get-in state [:ui :functions :dynamics])
                       :pan-zoom        (:pan-zoom state)
                       :last-node-added (:last-node-added state)
                       })
      :subscriptions
                    (fn [{{:keys [state-updates msgs write-channel]} :messaging}]
                      [
                       {
                        :topic [:mouse-move :move-nodes]
                        :handler
                               (fn [{[x y] :position}]
                                 (put! state-updates
                                   {:fn
                                            (fn [{{:keys [selected-nodes] :as space} :space :as s}]
                                              (reduce
                                                (fn [r path]
                                                  (let [tfn (if (== 3 (count path)) (fn [p _ _] [[path p]]) dc/mirror-node)]
                                                    (reduce
                                                      (fn [r [cpath cpoint]]
                                                        (assoc-in r (conj cpath :position) cpoint))
                                                      r (tfn [x y] path space))))
                                                s selected-nodes))
                                    :action {:verb :move :type :phase-space-node :dont-record true}
                                    }) nil)}
                       {
                        :topic [:mouse-down :move-nodes]
                        :handler
                               (fn [{[x y] :position id :id path :path :as ss}]
                                 (println "Select node to move " path [x y])
                                 (cond path (du/disable-pan-zoom! ss))
                                 (cond path
                                       (put! state-updates
                                         {
                                          :fn     (fn [{{selected-nodes :selected-nodes} :space :as s}]
                                                    (assoc-in
                                                      (if path (update-in s [:space :selected-nodes] conj path) s)
                                                      (conj path :move-offset)
                                                      [x y]))
                                          :action {:verb :select :type :phase-space-node :path path}
                                          })) nil)
                        }
                       {
                        :topic [:mouse-up :move-nodes]
                        :handler
                               (fn [{[x y] :position path :path :as ss}]
                                 (println "Unselect node " path)
                                 (du/enable-pan-zoom! ss)
                                 (put! state-updates
                                   {
                                    :fn     (fn [s] (update-in s [:space :selected-nodes] disj path))
                                    :action {:verb        :unselect :type :phase-space-node :path path
                                             :description (str "Move " (get path 2) ":" (last path))}
                                    }) nil)
                        }
                       {
                        :topic [:mouse-down :add-nodes]
                        :handler
                               (fn [{[x y] :position}]
                                 (println "Add node ")
                                 (put! state-updates
                                   {
                                    :fn     (fn [s] (dc/add-node (assoc s :mouse-position [x y])))
                                    :action {:verb        :add :type :phase-space-node
                                             :description (str "Add node")}
                                    }) nil)
                        }
                       {
                        :topic [:mouse-up :connect-nodes]
                        :handler
                               (fn [{[x y] :position id :id path :path}]
                                 (println "Connect node " path)
                                 (put! state-updates
                                   {
                                    :fn     (fn [s]
                                              (dc/make-connections
                                                (update-in s [:space :selected-nodes] conj path)))
                                    :action {:verb        :select :type :phase-space-node :path path
                                             :description (str "Connect " id)}
                                    }) nil)
                        }
                       {
                        :topic [:mouse-down :select-nodes]
                        :handler
                               (fn [{mp :position path :path}]
                                 (println "Select node " path)
                                 (put! state-updates
                                   {
                                    :fn     (fn [s] (select-node s path mp))
                                    :action {:verb :select :type :phase-space-node :path path}
                                    }) nil)
                        }
                       ])
      :current-tool :nothing
      :tools-order  [:add-nodes :connect-nodes :select-nodes :move-nodes :deselect-all :remove-selected :save :load]
      :tools
                    {
                     :move-nodes
                     {
                      :name        "Move nodes"
                      :description "Move the selected nodes"
                      :icon        "⬉"
                      :keybinding  :f
                      }
                     :connect-nodes
                     {
                      :name        "Connect nodes"
                      :description "Connect nodes to make curves ⌒"
                      :icon        "∾"
                      :keybinding  :g
                      }
                     :select-nodes
                     {
                      :name        "Select nodes"
                      :description "Select nodes"
                      :icon        "⨃"
                      :keybinding  :h
                      }
                     :add-nodes
                     {
                      :name        "Add nodes"
                      :description "Add some nodes"
                      :icon        "+"
                      :keybinding  :j
                      }
                     :save
                     {
                      :name        "Save space"
                      :description "Saves the space in your browser for later (sorry I will swap this icon for the familiar
                                    floppy-disk icon when I find it"
                      :icon        "⛁"
                      :keybinding  :q
                      :fn          ps/persist!
                      }
                     :load
                     {
                      :name        "Load space"
                      :description "Restores the last saved space"
                      :icon        "⛃"
                      :keybinding  :w
                      :fn          ps/get-state!
                      }
                     :deselect-all
                     {
                      :name        "Deselect all"
                      :description "Deselects all selected nodes"
                      :icon        "∅"
                      :keybinding  :d
                      :fn          dc/deselect-all
                      }
                     :remove-selected
                     {
                      :name        "Remove selected"
                      :description "Removes selected nodes"
                      :icon        "☒"
                      :keybinding  :minus
                      :fn          (comp dc/deselect-all dc/remove-selected-nodes)
                      }
                     :node-types
                     {
                      :name        "Node types"
                      :description "Choose the type of the selected nodes"
                      :tools
                                   (reduce
                                     (fn [r {:keys [id]}]
                                       (assoc r id
                                                {
                                                 :name        (str "Node type " id)
                                                 :description (str "Set the node type of the selected nodes to " id)
                                                 :icon        (str id)
                                                 :keybinding  [:keymap :t (keyword (str id)) (keyword (str id))]
                                                 :fn          (dc/set-node-type id)
                                                 }))
                                     {} (vals dc/node-types))
                      }
                     }
      }
     }))

(defn left-right-top-view [state]
  (om/component
    (div #js {:className "ui"}
         (comment (div #js {:className "offscreen"}
                       (canvas #js {:id "canvas" :width 32 :height 32})
                       (om/build du/make-prerender-component state)))
         (div #js {:className "main_ui"}
              (div #js {:className "left_component"}
                   (om/build make-function-selector-view state)
                   (om/build du/make-node-types-palette-component
                             ((get-in state [:ui :functions :dynamics :query]) state))
                   (om/build make-history-selector-view state))
              (div #js {:className "right_component selectable"}
                   (map (fn [[id component]]
                          (om/build (:om-builder component) ((:query component) state)))
                        (filter (comp (partial every? identity) (juxt :query :om-builder) val)
                                (dissoc (get-in state [:ui :functions]) :function-selector :header :history)))))
         (om/build make-header-view ((get-in state [:ui :functions :header :query]) state))
         ;(om/build make-footer-view state)
         )))

(defn main-view []
  (fn [state owner]
    (reify
      om/IWillMount
      (will-mount [_]
        (goog.style/installStyles (uicss/make-main-gui-style))
        (add-events! state)
        (m/setup-updates
          (get-in state [:messaging :state-updates])
          (fn [{f :fn a :action}]
            (try (om/transact! state
               (fn [s]
                 (let [ss (rc/update-state (assoc s :action (or a {})) {} f)]
                   ;(reset! my-state ss)
                   (cond a (put! (get-in s [:messaging :message-channel]) a))
                   ss))) (catch js/Error e (println e)))))
        ;(m/connect! state)
        )
      om/IRender
      (render [_] (om/build left-right-top-view state))
      om/IDidMount
      (did-mount [it]
        (om/transact! state
          (fn [s] (assoc s :pan-zoom (du/add-pan-zoom!))))))))

(defn start
  "Start the application!"
  ([]
    (start
      (-> (rc/make-state)
          add-browser-info
          add-messaging
          add-functions
          add-keybindings
          add-components)))
  ([state]
    ;(repl/connect "http://localhost:9000/repl")
    (om/root (main-view) state
      {:target (sel1 :body)
       ;:tx-listen (fn [tx-data root-cursor] (println ":: " (:path tx-data) (keys root-cursor)))
       })))
