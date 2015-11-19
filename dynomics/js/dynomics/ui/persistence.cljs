(ns dynomics.ui.persistence
  "This namespace provides functions for saving
  and loading the state of the application to&from
  localstorage"
  (:require
    [dynomics.space.core :as dc]
    [cognitect.transit :as t]))

(defn filter-state [state]
  {
   :space (dissoc (:space state) :graph)
   ;:history (vec (map filter-state (:history state)))
   :action (:action state)
   })

(defn merge-state [state ps]
  (println "Merge loaded state " (count (:history ps)))
  (assoc state
    :space (dc/add-graph (:space ps))
    ))

(defn persist! [state]
  (js/localStorage.setItem "space/state"
    (t/write (t/writer :json) (filter-state state))))

(defn get-state! [state]
  (merge-state state
   (t/read (t/reader :json)
    (js/localStorage.getItem "space/state"))))