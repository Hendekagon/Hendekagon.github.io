(ns dynomics.ui.css
  "Generate the CSS for the app"
  (:require
    [hipo.core :as hipo]
    [garden.color :as color :refer [hsl rgb hex->rgb]]
    [garden.core :refer [css]]
    [garden.types :as gtypes]))

(def quadrant-types-colours
  ["red" "green" "purple" "rgb(255,250,0)"])

(defn inline-svg [svg]
  (let [e (hipo/create svg)]
    (str "url(\"data:image/svg+xml;utf8," (.replace (.-outerHTML e) (js/RegExp. "\"" "g") "'") "\")")))

(def rotate
  (gtypes/CSSAtRule. :keyframes
    {
      :identifier "rotate"
      :frames
        '([:from {:transform "rotate(0deg)"}]
          [:to {:transform "rotate(359deg)"}])}))

(defn main-ui-style-defaults []
  {
   :border-radius 4
   :color "rgb(255,255,255)"
   :background "rgb(32,32,32)"
   :main-ui {:background "rgb(32,32,32)"}
   :top-component {:background "rgb(32,32,32)"}
   :left-component {:background "rgb(32,32,32)"}
   :right-component {:background "rgb(32,32,32)"}
   :function-selector {:background "rgb(32,32,32)"}
   :history-selector {:background "rgb(32,32,32)"}
   })

(defn css-rules
  "Returns all the CSS rules"
  [{:keys [border-radius] :as o}]
  [
   [:body {
           :display     :flex
           :margin      0 :padding 0
           :background  (:background o)
           :font-family "Helvetica, Verdana, Sans Serif"}]
   [:div {
          :-webkit-user-select "none"
          :-moz-user-select "none"
          :user-select "none"
          :cursor "default"}]
   [:.selectable {:user-select "text" :-webkit-user-select "text" :-moz-user-select "text" :cursor "text"}]
   [:.top_component {:display         "flex" :flex-flow "row nowrap" :opacity "1.0"
                     :margin          0 :padding 0
                     :justify-content "flex-start"
                     :color           "rgb(50,80,150)" :align-items "center"
                     :background      (get-in o [:top-component :background]) :width "100%" :height "64px"
                     :position        "fixed" :top "0px" :left "0px"}]
   [:.logo {:margin-left   "1em" :font-size "2em" :font-weight "bold" :background "rgb(255,10,0)" :color "rgb(255,255,255)"
            :border-radius "8px" :padding "0.15em"}]
   [:.headertitle {:color   "rgb(0,180,255)" :font-size "0.8em"
                    :width "12em"
                   :display :flex :align-items "center" :padding "0.2em" :margin-left "1em"}]
   [:.main_ui {:display    "flex" :flex-flow "row nowrap" :justify-content "space-between" :align-items "flex-start"
               :position   "absolute" :top "64px" :width "100%"
               :background (get-in o [:main-ui :background])}]
   [:.left_component {:display "flex" :flex-flow "column nowrap" :flex-grow 0 :flex-shrink 0
                      :width "12em"
                      :padding 0 :background (get-in o [:left-component :background])}]
   [:.right_component {:display    "flex" :flex-grow 6 :flex-flow "column wrap"
                       :background (get-in o [:right-component :background]) :padding-right "0em"
                       }]
   [:.function_selector {:padding       "2em" :display "none" :flex-flow "column nowrap"
                         :border-radius "0px" :background (get-in o [:function-selector :background])}]
   [:.function_selector_item {:display         "flex" :padding "0.5em" :cursor "pointer"
                              :font-weight     "normal" :border-radius (str border-radius "px") :color "white"
                              :justify-content "center"
                              :background      "rgb(100,190,255)" :margin-top "0.5em"}]
   [:.function_selector_item:first-child {:margin-top 0}]
   [:.function_selector_item:hover {:background "rgb(100,210,255)"}]
   [:.history_selector_visible {:display :flex :flex-flow "column nowrap"}]
   [:.history_selector_hidden {:display :none}]
   [:.history_selector
    {:margin-top 0 :padding "0em" :display "flex" :flex-flow "column nowrap"
                        :cursor "pointer"
                        :background (get-in o [:history-selector :background]) :font-size "0.8em"}]
   [:.history_selector_text { :padding "1em" :justify-content "center"
                              :font-size "0.8em" :cursor "pointer"
                              :background "rgb(30,30,30)"
                              :display :flex :color :white}]
   [:.history_selector_text:hover {:background "rgb(50,50,50)"}]
   [:.history_selector:hover {:background "rgb(50,50,50)"}]
   [:.history_selector_item {:white-space "pre" :display "flex"
                             :justify-content "flex-start" :align-items "flex-start"
                             :padding     "1em" :cursor "pointer"
                             ;:background "rgb(50,50,50)"
                             :color (:color o)
                             :opacity 0.7
                             :font-size "0.5em"
                             :border      "0px solid rgb(100,100,100)" :border-top :none
                             :text-overflow "ellipsis" :overflow "hidden"}]
   [:.history_selector_item:hover {:background "rgb(50,50,50)"}]
   [:.historical {:font-style "italic"}]
   [:input:focus {:outline 0}]
   [:.pending {:font-size "1.2em" :display :flex :transition "font-size 0.1s ease"}]
   [".sequence_selector_item:nth-child(odd)" {:background "#eeffee"}]
   [".pending::before"
    {
     :margin                    "0.3em"
     :width                     "1em"
     :height                    "1em"
     :content                   (inline-svg [:svg {:width "100%" :height "100%" :xmlns "http://www.w3.org/2000/svg" :viewBox "0 0 16 16"}
                                             [:circle {:cx           8 :cy 8 :r 6 :fill "none" :stroke-dashoffset 1 :stroke-dasharray "1 2"
                                                       :stroke-width 4 :stroke "black"}]
                                             ])
     :transform-origin          "50% 50%"
     :font-size                 "1.2em"
     :animation-iteration-count "infinite" :animation-duration "0.9s"
     :animation-name            rotate :animation-timing-function :linear}]
   [:.received {:font-weight "bold" :transition "font-size 1s ease"}]
   [:.title {:font-size "1.3em" :padding-top "2em" :padding-bottom "2em" :display "flex" :background "white"
             :color     "rgb(100,100,100)"}]
   [:.function {}]
   [:.hidden_function {:display "none"}]
   [:.selected_function {:display "flex"}]
   [".tool_page" {:flex-flow      "column nowrap" :padding-left "2em"
                  :padding-bottom "2em"
                  :padding-right  "2em"
                  :background     "white"
                  }]
   [".tool_page_main" {:display         "flex" :flex-flow "row wrap"
                       :justify-content "space-between"}]
   [".tool_page_description" {:flex-basis 0 :margin-right "2rem" :font-size "0.8em" :flex-shrink 0 :flex-grow 1}]
   [".tool_page_options" {:flex-grow 3 :flex-flow "column wrap" :flex-basis 0}]
   [".tool_page>div:last-child>div>div:last-child" {:display "flex" :justify-content "flex-start"}]
   [:.tool_options_table {:display       "flex" :flex-flow "column wrap" :margin-top "2em"
                          :margin-bottom "2em"}]
   [:.tool_options_table_columns {:display         "flex" :flex-flow "row wrap"
                                  :justify-content "flex-start" :padding-bottom "0.5em"
                                  :border-bottom   "1px solid rgb(200,200,200)"}]
   [:.tool_options_table_column_name {:display "flex" :flex-grow 1 :flex-shrink 0 :flex-basis 0}]
   [:.tool_options_table_cell {:display "flex" :flex-grow 1 :flex-basis 0 :font-size "0.8em"}]
   [:.tool_options_table_row {:display      "flex" :flex-flow "row wrap" :cursor "pointer"
                              :margin-top   "0.5em" :justify-content "flex-start" :padding "0.5em"
                              :padding-left 0
                              }]
   [:.tool_options_table_row:hover {:background "rgb(100,210,255)"}]
   [:.selected_row {:background "rgb(100,210,255)"}]
   [:.tool_page_button {:cursor          "pointer" :background "rgb(100,190,255)" :color "white"
                        :padding         "0.4em"
                        :justify-content "center"
                        :align-items     "center"
                        :border-radius   (str border-radius "px")}]
   [:.tool_page_button:hover {:background "rgb(100,210,255)"}]
   [:.notes {:font-size "0.5em" :margin-top "8em"}]
   [:.bottom_component
    {:display         :flex :flex-flow "row nowrap" :z-index 2
     :position        :fixed :bottom "0px" :left "0px" :width "100%"
     :margin "0px"
     :justify-content "flex-start" :padding "0.5em" :align-items "center" :height "32px"
      :background "rgba(40,40,40,0.7)"}]
   [:.eval_input {:font-size "1em" :background "transparent" :color "white"
                  :border :none :white-space :pre :font-family "monospace"}]
   [:.eval_result {:font-size "1em" :background "transparent" :color "white"
                      :font-family "monospace"}]
   [:.offscreen {:display :absolute
    :overflow :hidden :width "64px" :height "64px"}]
   [:.trajectory_group {:opacity 1 :cursor "pointer"}]
   [:.trajectory_path {:stroke "rgba(255,255,255,1)" :stroke-width 2 :fill "none"}]
   [:.trajectory_arrowhead {:stroke "none" :fill "rgba(255,255,255,1)"}]
   [:.dynomics_space {:padding-top "0em" :cursor "default" :padding-left "0em"
                      :padding-right "0em" :height "100%" :width "93%" :position "fixed"}]
   [:.dynomics_space_space {:fill
                            ;"rgb(200,230,250)"
                              "rgb(60,60,60)"
                            }]
   [:.dynomics_space_background {:fill "rgb(50,50,50)"}]
   [:.dynomics_node {:fill "rgb(255,130,200)" :opacity 0.0 :display :none}]
   [:.dynomics_node_connections {:opacity 1}]
   [:.dynomics_node_subgraph:hover>.dynomics_node {:opacity 0}]
   [:.dynomics_node_subgraph:hover>.dynomics_node_connections {:opacity 1}]
   [:.dynomics_node_connection_line {:stroke "rgb(255,255,255)" :stroke-width 0.07}]
   [:.dynomics_node_connection_dot {:fill "rgb(255,255,255)"}]
   [:.dynomics_node_selector_dot {:opacity 0}]
   [:.dynomics_node_selected>.dynomics_node_selector_dot {:fill "rgb(255,150,70)" :opacity 1}]
   [:.dynomics_node_selected {:fill "rgb(255,150,70)" :opacity 1}]
   [:.dynomics_node_connection {:opacity 0.5}]
   [:.dynomics_node_connection:hover {:opacity 1}]
   [:.dynomics_edge {:stroke "rgb(255,255,255)" :stroke-width 0.001 :fill "none"}]
   [:.dynomics_compatible_edge {:stroke "rgb(100,150,100)" :stroke-width 0.002 :fill "none"}]
   [:.dynomics_region {:stroke "rgb(50,50,200)" :stroke-width 0.001 :fill "rgb(150,200,255)" :opacity 0.3}]
   [:.dynomics_open_region {:stroke "none"  :opacity 0.5}]
   [:.dynomics_open_region_type_1 {:fill "red"}]
   [:.dynomics_open_region_type_2 {:fill "rgb(255,250,0)"}]
   [:.dynomics_open_region_type_3 {:fill "green"}]
   [:.dynomics_open_region_type_4 {:fill "purple"}]
   [:.dynomics_toolname {:font-size "1" :white-space "pre"}]
   [:.dynomics_cursor {:fill "rgb(0,0,0)" :opacity 0.5}]
   [:.dynomics_tool_selectors {:display :flex :flex-flow "row wrap" :border :none
                               :padding "0px" :margin-left "1em"}]
   [:.dynomics_tool_things {:display :flex :flex-flow "row nowrap"}]
   [:.dynomics_node_types {:display :flex :flex-flow "row wrap" :flex-shrink 1
                           :justify-content "space-around"
                           :padding-left "0.5em"
                           :padding-right "0.5em"
                           :padding-bottom "0.5em"
                           :cursor "pointer"}]
   [:.dynomics_node_type_selector {:display :flex :font-size "1em"
                                   ;:width "32px"
                                   ;:height "32px"
                                   :padding "0em" :opacity 0.7
                                   :justify-content "center"
                                   :align-items "center"
                                   :color "white" :cursor "pointer"}]
   [:.dynomics_node_type_selector:hover {:opacity 1 :cursor "pointer" :background "rgb(100,100,100)"}]
   [:.dynomics_tool_selector  {:display :flex
                               :border :none :font-size "20px"
                               :padding "4px"
                               :color "rgb(150,150,150)"
                               :background "transparent"
                               :justify-content "center" :cursor "pointer"
                               :width "24px" :height "24px"}]
   [".dynomics_tool_selector:not(.dynomics_tool_selected):hover" {:background "rgb(100,100,100)" :color "white"}]
   [:.dynomics_tool_selected  {:background "transparent" :color "white"}]
   [:.dynomics_current_tool_text  {:display :flex :font-size "0.7em"
                                   :align-items "center"
                                   :margin-left "2em"
                                   :color "white"
                                   }]
   ])

(defn unique-css-properties [rules]
  (into #{} (mapcat (comp keys last) rules)))

(defn make-main-gui-style
  "Returns the CSS for the GUI using the given map of defaults"
  ([] (make-main-gui-style (main-ui-style-defaults)))
  ([defaults]
   (css {:vendors ["webkit" "moz"]} (cons rotate (css-rules defaults)))))

(defn make-main-gui-style-production
  "In production"
  ([]
    (make-main-gui-style
      (merge (main-ui-style-defaults)
       (reduce
         (fn [r k] (assoc-in r [k :background] "black"))
         {} '(:main-ui :left-component :right-component :function-selector :history-selector))))))
