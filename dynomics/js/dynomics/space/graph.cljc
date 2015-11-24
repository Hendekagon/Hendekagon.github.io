(ns dynomics.space.graph
  "Functions for querying and manipulating the underlying graph"
  (:require [loom.alg :as la]
            [loom.graph :as lg]))


(defn -- [[a b]] (if (< a b) [a b] [b a]))

; TODO change the representation of connections, don't like this at all.
(defn simplify-edges [edges]
  (map (fn [[[_ _ nid1 _ cid1] [_ _ nid2 _ cid2]]] [nid1 nid2]) edges))

(defn as-connections
  "Returns a nested list of connections (paths to node connections)
  from the given edges [[node1 node2] [node3 node4]
  and edgez, a set of connection edges}"
  [edges edgez]
  (let
    [ebn (group-by (fn [[[_ _ nid1 _ _] [_ _ nid2 _ _]]] (vec (sort [nid1 nid2]))) edgez)]
    (remove nil? (map (comp ebn vec sort) edges))))

(defn as-edges [m]
  (map
    (comp
      vec
      (partial map
        (fn [x] #?(:clj  (dec (Math/abs (long x)))
                   :cljs (dec (.abs js/Math x)))))
      sort
      (partial remove zero?)
      (fn [v]
       (map * v (range 1 (inc (count v))))))
    m)
)

(defn as-matrix
  "
  Returns an adjacency matrix representation of the given graph
  in undirected form.
  Assumes nodes are numbered from 0-n
  "
  ([{:keys [nodes edges]}] (as-matrix nodes edges))
  ([nodes edges]
   (reduce
     (fn [m [[nid1 nid2] j]]
       (assoc-in
         (assoc-in m
          [j nid1] +1)
          [j nid2] +1))
     (vec (repeatedly (count edges) #(vec (repeat (count nodes) 0))))
     (map vector edges (range)))))

(defn sum-graph [m]
  (if (empty? m)
    []
    (reduce (partial map (fn [& x] (mod (reduce + x) 2))) m)))

(defn nodes-from-sum [s]
  (reduce
    (fn [r [n i]]
      (reduce (fn [r j] (conj r i)) r (range n)))
    [] (map vector s (range))))

(defn pairs [l]
  (into #{}
    (map sort
      (for [x l y (remove (partial == x) l)] [x y]))))

(defn cycles
  ([g] (cycles g (nodes-from-sum (sum-graph (as-matrix g)))))
  ([g ntr]
   (let [
         ntr (into #{} ntr)
         ptr (pairs ntr)
         paths (sort-by count (map (partial apply la/bf-path (:graph g)) ptr))]
     (reduce
       (fn [{e :e n :n} path]
         (println path e n (map n ((juxt first last) path)))
         {:n (apply disj n ((juxt first last) path))
          :e (if (not (every? nil? (map n ((juxt first last) path))))
               (apply disj e
                 (mapcat (juxt identity reverse)
                   (partition 2 1 path)))
               e)})
       {:e (:edges g) :n ntr} paths)
     )))

; simple [from-node to-node] edges
(defn make-regions [{{edges :edges :as space} :space :as state}]
  (println "cycles " (cycles (as-matrix space)))
  (assoc-in state [:space :regions]
    [(map first (as-connections (as-edges (cycles (as-matrix space))) edges))]))