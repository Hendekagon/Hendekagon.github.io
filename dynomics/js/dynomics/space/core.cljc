(ns dynomics.space.core

  "This namespace contains functions for manipulating
  the state of the phase space and its associated objects"

  (:require
    [loom.graph :as lg]
    [loom.alg :as la]
    [dynomics.space.graph :refer [as-connections]]
    [clojure.set :as cs]))

(def P partial)

(defn F [f y] (fn [x] (f x y)))

(def C comp)

(def J juxt)

(def I identity)

(defn round [x] (#?(:clj Math/round :cljs js/Math.round) x))

(defn cos [x] (#?(:clj Math/cos :cljs js/Math.cos) x))

(defn sin [x] (#?(:clj Math/sin :cljs js/Math.sin) x))

(defn unit [x] (if (< x 0) (max x -1) (min x 1)))

(defn abs [x] (#?(:clj Math/abs :cljs js/Math.abs) x))

(def PI #?(:clj Math/PI :cljs js/Math.PI))

(def PI2 (* 2 PI))

(def PIb4 (* 0.25 PI))

(def r2d (/ 180 PI))

(defn angle [[x y]] (#?(:clj Math/atan2 :cljs js/Math.atan2) x y))

(defn p2c [[r theta]] (map (P * r) [(cos theta) (sin theta)]))

(defn c* [[ar ai] [br bi]]
  [(- (* ar br) (* ai bi)) (+ (* ai br) (* ar bi))])

(defn c+ [a b] (map + a b))

(defn dmp [points]
  (map (fn [[p1 p2]] (map (partial * 0.5) (map + p1 p2))) (partition 2 1 points)))

(defn dot [& x] (reduce + (apply map * x)))

(defn to-local
  ([[x y] [_ _ nid _ cid] {node-scale :node-scale :as space}]
   (let
    [
      [nx ny] (get-in space [:nodes nid :position])
    ]
     [[(/ (- x nx) node-scale) (/ (- y ny) node-scale)]])))

(defn mirror-node
  "Returns the pair of control points with
  mirrored positions for the given control point"
  ([[x y] path {node-scale :node-scale :as space}]
   (let
    [
      [_ _ nid _ cid] path
      cp [:space :nodes nid :connections (mod (+ cid 2) 4)]
      [nx ny] (get-in space [:nodes nid :position])
      p [(/ (- x nx) node-scale) (/ (- y ny) node-scale)]
      x (if (odd? cid) [0 1] [1 0])
    ]
     [[path p] [cp (c* p [-1 0])]])))

;TODO the octants
(def node-types
  (zipmap (range)
  [
    {
     :stability :stable
     :type :attractor
     :id 0
     :octants {[-1 0] -1 [-1 1] +1 [0 1] -1 [1 1] -1 [1 0] -1 [1 -1] +1 [0 -1] +1 [-1 -1] +1}
     :quadrants {[-1 -1] 0 [-1 +1] 1 [+1 -1] 2 [+1 +1] 3}
     }
    {
     :stability :unstable
     :type :repellor
     :id 1
     :octants {[-1 0] -1 [-1 1] +1 [0 1] -1 [1 1] -1 [1 0] -1 [1 -1] +1 [0 -1] +1 [-1 -1] +1}
     :quadrants {[-1 -1] 2 [-1 +1] 3 [+1 -1] 0 [+1 +1] 1}
     }
    {
     :stability :unstable
     :type :saddle
     :id 2
     :octants {[-1 0] -1 [-1 1] +1 [0 1] -1 [1 1] -1 [1 0] -1 [1 -1] +1 [0 -1] +1 [-1 -1] +1}
     :quadrants {[-1 -1] 1 [-1 +1] 0 [+1 -1] 3 [+1 +1] 2}
     }
    {
     :stability :unstable
     :type :saddle
     :id 3
     :octants {[-1 0] -1 [-1 1] +1 [0 1] -1 [1 1] -1 [1 0] -1 [1 -1] +1 [0 -1] +1 [-1 -1] +1}
     :quadrants {[-1 -1] 3 [-1 +1] 2 [+1 -1] 1 [+1 +1] 0}
     }
    {
     :stability :unstable
     :type :saddle
     :id 4
     :octants {[-1 0] -1 [-1 1] +1 [0 1] -1 [1 1] -1 [1 0] -1 [1 -1] +1 [0 -1] +1 [-1 -1] +1}
     :quadrants {[-1 -1] 2 [-1 +1] 1 [+1 -1] 0 [+1 +1] 3}
     }
    {
     :stability :unstable
     :type :saddle
     :id 5
     :octants {[-1 0] -1 [-1 1] +1 [0 1] -1 [1 1] -1 [1 0] -1 [1 -1] +1 [0 -1] +1 [-1 -1] +1}
     :quadrants {[-1 -1] 0 [-1 +1] 3 [+1 -1] 2 [+1 +1] 1}
     }
    {
     :stability :unstable
     :type :spiral
     :rotation :anticlockwise
     :id 6
     :octants {[-1 0] -1 [-1 1] +1 [0 1] -1 [1 1] -1 [1 0] -1 [1 -1] +1 [0 -1] +1 [-1 -1] +1}
     :quadrants {[-1 -1] 1 [-1 +1] 2 [+1 -1] 3 [+1 +1] 0}
     }
    {
     :stability :unstable
     :type :spiral
     :rotation :clockwise
     :id 7
     :octants {[-1 0] -1 [-1 1] +1 [0 1] -1 [1 1] -1 [1 0] -1 [1 -1] +1 [0 -1] +1 [-1 -1] +1}
     :quadrants {[-1 -1] 3 [-1 +1] 0 [+1 -1] 1 [+1 +1] 2}
     }
    {
     :stability :stable
     :type :spiral
     :rotation :anticlockwise
     :id 8
     :octants {[-1 0] -1 [-1 1] +1 [0 1] -1 [1 1] -1 [1 0] -1 [1 -1] +1 [0 -1] +1 [-1 -1] +1}
     :quadrants {[-1 -1] 1 [-1 +1] 2 [+1 -1] 3 [+1 +1] 0}
     }
    {
     :stability :stable
     :type :spiral
     :rotation :clockwise
     :id 9
     :octants {[-1 0] -1 [-1 1] +1 [0 1] -1 [1 1] -1 [1 0] -1 [1 -1] +1 [0 -1] +1 [-1 -1] +1}
     :quadrants {[-1 -1] 3 [-1 +1] 0 [+1 -1] 1 [+1 +1] 2}
     }
    ]))

(defn quadrants-types-by-position
  "
  Returns the quadrant types of the given vectors
  e.g. (quadrants-types-by-position {:node-type 10 :position [1 0]} {:node-type 5 :position [-1 0]})
  => ((1 2) (1 2))

  TODO need to return the types in the right order, as this
  will give a false-positive when 2 nodes of the same type are
  connected by the same connectors, as it doesn't take into account
  that the nodes themselves are above and below eachother
  "
  ([{r1 :node-type p1 :position} {r2 :node-type p2 :position}]
   (map map
    (map (fn [i] (get-in node-types [i :quadrants])) [r1 r2])
    (map (J (P c* [1 -1]) (P c* [1 1])) (map (P map (C unit round double)) [p1 p2])))))

; hey as well as just a boolean, we should also provide the kind of match
; need a check for [nil nil] here
;
(defn compare-quadrants [qs]
  (apply = (map vec qs)))

(def connections-by-vector
  {[0 -1] 0, [1 0] 1, [0 1] 2, [-1 0] 3})

(def default-connections
  (vec (map (fn [[p id]] {:id id :position p :type :connection})
        connections-by-vector)))

(defn make-intersection-node
  "Returns a node of the given type"
  ([type-id] (make-intersection-node type-id [(* 0.5 (mod type-id (* 2 (inc (mod (inc type-id) 2))))) (* 0.5 (mod (inc type-id) 2))]))
  ([type-id position]
    {
      :position    position
      :move-offset [0 0]
      :type        :intersection
      :node-type   type-id
      :connections default-connections
    }))

(defn add-node
  "Adds a new node at the given mouse position"
  [{{:keys [nodes max-node-id]} :space p :mouse-position :as state}]
  (let [
        new-id (inc (if max-node-id max-node-id (if (empty? nodes) 0 (apply max (map :id (vals nodes))))))
        new-node (assoc (make-intersection-node 3) :id new-id :position p)
        ]
    (assoc (update-in (assoc-in state [:space :nodes new-id] new-node)
       [:space :graph] (fn [g] (lg/add-nodes g new-node)))
      :last-node-added new-id)
    ))

(defn deselect-all [state]
  (assoc-in state [:space :selected-nodes] #{}))

(defn remove-edges
  "Returns the state with the given edges removed"
  [{{:keys [selected-nodes]} :space :as state}]
  (update-in state [:space :edges]
    (fn [edges]
      (into #{}
        (remove
          (fn [[[_ _ nid1 & _] [_ _ nid2 & _]]]
            (or (selected-nodes [:space :nodes nid1]) (selected-nodes [:space :nodes nid2])))
          edges)))))

(defn remove-selected-nodes
  "Removes the selected nodes and their edges"
  [{{:keys [selected-nodes]} :space :as state}]
  (println "Remove " selected-nodes)
    (remove-edges
      (assoc (update-in
        (update-in state [:space :nodes]
          (fn [nodes] (apply dissoc nodes (map last selected-nodes))))
            [:space :graph] (fn [g] (lg/remove-nodes g selected-nodes)))
     :action {:verb :remove :type :nodes :description "Remove nodes"})))

(defn add-graph [{edges :edges :as space}]
  (assoc space :graph (apply lg/graph edges)))

(defn update-ds
  ([{:keys [f] :as s}]
    (update-in s [:points]
      (fn [points] (map f points)))))

(defn random-points
  ([n] (repeatedly n (fn [] [(rand) (rand)]))))

(defn grid-points
  ([n])
  ([nx ny]))

(defn make-ds
  ([] (make-ds (p2c [1 PI])))
  ([v]
   {
     :f      (fn [p] (c* p v))
     :points [[1 0]]}))

(defn make-ds2
  ([f n-points]
    {
     :f f
     :points (random-points n-points)
     }))

(defn ds-evolution
  ([n-time-points expansion rotation]
    (ds-evolution n-time-points (make-ds [expansion rotation])))
  ([n-time-points system]
   (apply map list (take n-time-points
      (map :points (iterate update-ds system))))))

(defn make-some-nodes [n]
  (zipmap (range)
   (map (fn [id node] (assoc node :id id))
    (range) (repeatedly n (partial make-intersection-node 3)))))

(defn make-phase-space
  ([]
   (add-graph
     {
      :nodes {}
      :edges #{}
      :selected-nodes #{}
      :node-scale 0.02
      })))

(defn just-ids [nodes] (vec (map (fn [[_ _ id]] id) nodes)))

(defn quadrant-info [nodez nodes]
  (map (fn [[_ _ nid _ cid]]
    {:node-type (get-in nodes [nid :node-type])
     :position (get-in nodes [nid :connections cid :position])}) nodez))

(defn add-compatibility-info
  "
  Returns the given state with a map of node-node compatibilities added,
  of the form {[nodeid1 nodeid2] true [nodeid4 nodeid5] false}
  "
  [{{:keys [nodes selected-nodes]} :space :as state}]
  (assoc-in state [:space :compatibilities (just-ids selected-nodes)]
    (compare-quadrants
      (apply quadrants-types-by-position
        (quadrant-info selected-nodes nodes)))))

(defn make-connections
  "Returns the given state with any connections that need to be
  made added to the edges map. Only connect nodes if there are two
  selected. Note that the connection is undirected"
  [{{:keys [nodes selected-nodes]} :space :as state}]
  (println "Connect " selected-nodes)
  (if (== 2 (count selected-nodes))
    (update-in
      (assoc-in
        (update-in (add-compatibility-info state)
          [:space :edges] conj (vec selected-nodes))
       [:space :selected-nodes] #{})
       [:space :graph]
        (fn [g] (lg/add-edges g (vec (map (fn [[_ _ nid _ _]] nid) selected-nodes)))))
     state))

; TODO use graph traversal on selected-nodes to save on connected-nodes
(defn update-compatibility-info
  "Following a node-type change, update the
  compatibility info for its connections"
  ([{{:keys [selected-nodes]} :space :as state}]
    (reduce update-compatibility-info state (just-ids selected-nodes)))
  ([{{:keys [graph edges nodes]} :space :as state} id]
    (reduce
      (fn [s edge]
        (assoc-in s [:space :compatibilities (just-ids edge)]
          (compare-quadrants
            (apply quadrants-types-by-position
              (quadrant-info edge nodes)))))
      state (remove (C nil? last)
              (map (juxt identity (C first (P lg/successors graph)))
               (map (fn [c] [:space :nodes id :connections c]) (range 4)))))))

(defn set-node-type
  "Returns a function to set the given selected nodes
  to the given node type id"
  [id]
  (fn [{{:keys [selected-nodes]} :space :as state}]
    (println "Set node type of " selected-nodes " to " id)
    (let [r (update-compatibility-info
            (assoc
              (reduce
                (fn [r path]
                  (assoc-in r (conj path :node-type) id))
                state selected-nodes)
              :action {:verb :set :type :node-type :id id :description (str "Node type" id)}))]
      (println "  updated " (get-in r [:space :compatibilities]))
      r)))

; don't like this...
(defn simplify-connection [[_ _ nid _ cid]] [nid cid])

(defn simplify-connections [[{:keys [nodes edges]}]]
  {:edges (map (fn [[[_ _ nid1 _ cid1] [_ _ nid2 _ cid2]]] [nid1 nid2]) edges) :nodes nodes})

(defn insert-in [v i x]
  (vec (concat (conj (subvec v 0 i) x) (subvec v i))))