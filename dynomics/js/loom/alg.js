// Compiled by ClojureScript 1.7.170 {}
goog.provide('loom.alg');
goog.require('cljs.core');
goog.require('loom.alg_generic');
goog.require('loom.graph');
goog.require('clojure.set');
goog.require('loom.flow');
goog.require('tailrecursion.priority_map');
loom.alg.traverse_all = (function loom$alg$traverse_all(nodes,traverse){
return cljs.core.persistent_BANG_.call(null,cljs.core.second.call(null,cljs.core.reduce.call(null,(function (p__196144,n){
var vec__196145 = p__196144;
var seen = cljs.core.nth.call(null,vec__196145,(0),null);
var trav = cljs.core.nth.call(null,vec__196145,(1),null);
if(cljs.core.truth_(seen.call(null,n))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,trav], null);
} else {
var ctrav = traverse.call(null,n,new cljs.core.Keyword(null,"seen","seen",-518999789),seen);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,seen,ctrav),cljs.core.reduce.call(null,cljs.core.conj_BANG_,trav,ctrav)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)], null),nodes)));
});
/**
 * Traverses graph g depth-first from start. Returns a lazy seq of nodes.
 *   When no starting node is provided, traverses the entire graph, connected
 *   or not.
 */
loom.alg.pre_traverse = (function loom$alg$pre_traverse(var_args){
var args196146 = [];
var len__25279__auto___196149 = arguments.length;
var i__25280__auto___196150 = (0);
while(true){
if((i__25280__auto___196150 < len__25279__auto___196149)){
args196146.push((arguments[i__25280__auto___196150]));

var G__196151 = (i__25280__auto___196150 + (1));
i__25280__auto___196150 = G__196151;
continue;
} else {
}
break;
}

var G__196148 = args196146.length;
switch (G__196148) {
case 1:
return loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args196146.length)].join('')));

}
});

loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$1 = (function (g){
return loom.alg.traverse_all.call(null,loom.graph.nodes.call(null,g),cljs.core.partial.call(null,loom.alg_generic.pre_traverse,loom.graph.successors.call(null,g)));
});

loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.pre_traverse.call(null,loom.graph.successors.call(null,g),start);
});

loom.alg.pre_traverse.cljs$lang$maxFixedArity = 2;
/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg.pre_span = (function loom$alg$pre_span(var_args){
var args196153 = [];
var len__25279__auto___196159 = arguments.length;
var i__25280__auto___196160 = (0);
while(true){
if((i__25280__auto___196160 < len__25279__auto___196159)){
args196153.push((arguments[i__25280__auto___196160]));

var G__196161 = (i__25280__auto___196160 + (1));
i__25280__auto___196160 = G__196161;
continue;
} else {
}
break;
}

var G__196155 = args196153.length;
switch (G__196155) {
case 1:
return loom.alg.pre_span.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.pre_span.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args196153.length)].join('')));

}
});

loom.alg.pre_span.cljs$core$IFn$_invoke$arity$1 = (function (g){
return cljs.core.second.call(null,cljs.core.reduce.call(null,(function (p__196156,n){
var vec__196157 = p__196156;
var seen = cljs.core.nth.call(null,vec__196157,(0),null);
var span = cljs.core.nth.call(null,vec__196157,(1),null);
if(cljs.core.truth_(seen.call(null,n))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,span], null);
} else {
var vec__196158 = loom.alg_generic.pre_span.call(null,loom.graph.successors.call(null,g),n,new cljs.core.Keyword(null,"seen","seen",-518999789),seen,new cljs.core.Keyword(null,"return-seen","return-seen",308792727),true);
var cspan = cljs.core.nth.call(null,vec__196158,(0),null);
var seen__$1 = cljs.core.nth.call(null,vec__196158,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen__$1,cljs.core.merge.call(null,span,cljs.core.PersistentArrayMap.fromArray([n,cljs.core.PersistentVector.EMPTY], true, false),cspan)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),loom.graph.nodes.call(null,g)));
});

loom.alg.pre_span.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.pre_span.call(null,loom.graph.successors.call(null,g),start);
});

loom.alg.pre_span.cljs$lang$maxFixedArity = 2;
/**
 * Traverses graph g depth-first, post-order from start. Returns a
 *   vector of the nodes.
 */
loom.alg.post_traverse = (function loom$alg$post_traverse(var_args){
var args196163 = [];
var len__25279__auto___196169 = arguments.length;
var i__25280__auto___196170 = (0);
while(true){
if((i__25280__auto___196170 < len__25279__auto___196169)){
args196163.push((arguments[i__25280__auto___196170]));

var G__196171 = (i__25280__auto___196170 + (1));
i__25280__auto___196170 = G__196171;
continue;
} else {
}
break;
}

var G__196168 = args196163.length;
switch (G__196168) {
case 1:
return loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__25298__auto__ = (new cljs.core.IndexedSeq(args196163.slice((2)),(0)));
return loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25298__auto__);

}
});

loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$1 = (function (g){
return loom.alg.traverse_all.call(null,loom.graph.nodes.call(null,g),cljs.core.partial.call(null,loom.alg_generic.post_traverse,loom.graph.successors.call(null,g)));
});

loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (g,start,opts){
return cljs.core.apply.call(null,loom.alg_generic.post_traverse,loom.graph.successors.call(null,g),start,opts);
});

loom.alg.post_traverse.cljs$lang$applyTo = (function (seq196164){
var G__196165 = cljs.core.first.call(null,seq196164);
var seq196164__$1 = cljs.core.next.call(null,seq196164);
var G__196166 = cljs.core.first.call(null,seq196164__$1);
var seq196164__$2 = cljs.core.next.call(null,seq196164__$1);
return loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__196165,G__196166,seq196164__$2);
});

loom.alg.post_traverse.cljs$lang$maxFixedArity = (2);
/**
 * Topological sort of a directed acyclic graph (DAG). Returns nil if
 *   g contains any cycles.
 */
loom.alg.topsort = (function loom$alg$topsort(var_args){
var args196173 = [];
var len__25279__auto___196180 = arguments.length;
var i__25280__auto___196181 = (0);
while(true){
if((i__25280__auto___196181 < len__25279__auto___196180)){
args196173.push((arguments[i__25280__auto___196181]));

var G__196182 = (i__25280__auto___196181 + (1));
i__25280__auto___196181 = G__196182;
continue;
} else {
}
break;
}

var G__196175 = args196173.length;
switch (G__196175) {
case 1:
return loom.alg.topsort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.topsort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args196173.length)].join('')));

}
});

loom.alg.topsort.cljs$core$IFn$_invoke$arity$1 = (function (g){
var seen = cljs.core.PersistentHashSet.EMPTY;
var result = cljs.core.List.EMPTY;
var G__196177 = cljs.core.seq.call(null,loom.graph.nodes.call(null,g));
var vec__196178 = G__196177;
var n = cljs.core.nth.call(null,vec__196178,(0),null);
var ns = cljs.core.nthnext.call(null,vec__196178,(1));
var seen__$1 = seen;
var result__$1 = result;
var G__196177__$1 = G__196177;
while(true){
var seen__$2 = seen__$1;
var result__$2 = result__$1;
var vec__196179 = G__196177__$1;
var n__$1 = cljs.core.nth.call(null,vec__196179,(0),null);
var ns__$1 = cljs.core.nthnext.call(null,vec__196179,(1));
if(cljs.core.not.call(null,n__$1)){
return result__$2;
} else {
if(cljs.core.truth_(seen__$2.call(null,n__$1))){
var G__196184 = seen__$2;
var G__196185 = result__$2;
var G__196186 = ns__$1;
seen__$1 = G__196184;
result__$1 = G__196185;
G__196177__$1 = G__196186;
continue;
} else {
var temp__4425__auto__ = loom.alg_generic.topsort_component.call(null,loom.graph.successors.call(null,g),n__$1,seen__$2,seen__$2);
if(cljs.core.truth_(temp__4425__auto__)){
var cresult = temp__4425__auto__;
var G__196187 = cljs.core.into.call(null,seen__$2,cresult);
var G__196188 = cljs.core.concat.call(null,cresult,result__$2);
var G__196189 = ns__$1;
seen__$1 = G__196187;
result__$1 = G__196188;
G__196177__$1 = G__196189;
continue;
} else {
return null;
}
}
}
break;
}
});

loom.alg.topsort.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.topsort_component.call(null,loom.graph.successors.call(null,g),start);
});

loom.alg.topsort.cljs$lang$maxFixedArity = 2;
/**
 * Traverses graph g breadth-first from start. When option :f is provided,
 *   returns a lazy seq of (f node predecessor-map depth) for each node traversed.
 *   Otherwise, returns a lazy seq of the nodes. When option :when is provided,
 *   filters successors with (f neighbor predecessor depth).
 */
loom.alg.bf_traverse = (function loom$alg$bf_traverse(var_args){
var args196190 = [];
var len__25279__auto___196202 = arguments.length;
var i__25280__auto___196203 = (0);
while(true){
if((i__25280__auto___196203 < len__25279__auto___196202)){
args196190.push((arguments[i__25280__auto___196203]));

var G__196204 = (i__25280__auto___196203 + (1));
i__25280__auto___196203 = G__196204;
continue;
} else {
}
break;
}

var G__196195 = args196190.length;
switch (G__196195) {
case 1:
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25298__auto__ = (new cljs.core.IndexedSeq(args196190.slice((2)),(0)));
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25298__auto__);

}
});

loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$1 = (function (g){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__196196,n){
var vec__196197 = p__196196;
var cc = cljs.core.nth.call(null,vec__196197,(0),null);
var predmap = cljs.core.nth.call(null,vec__196197,(1),null);
if(cljs.core.contains_QMARK_.call(null,predmap,n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc,predmap], null);
} else {
return cljs.core.reduce.call(null,((function (vec__196197,cc,predmap){
return (function (p__196198,p__196199){
var vec__196200 = p__196198;
var cc__$1 = cljs.core.nth.call(null,vec__196200,(0),null);
var _ = cljs.core.nth.call(null,vec__196200,(1),null);
var vec__196201 = p__196199;
var n__$1 = cljs.core.nth.call(null,vec__196201,(0),null);
var pm = cljs.core.nth.call(null,vec__196201,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__196201,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,cc__$1,n__$1),pm], null);
});})(vec__196197,cc,predmap))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc,predmap], null),loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g),n,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector,new cljs.core.Keyword(null,"seen","seen",-518999789),predmap));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),loom.graph.nodes.call(null,g)));
});

loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g),start);
});

loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (g,start,opts){
return cljs.core.apply.call(null,loom.alg_generic.bf_traverse,loom.graph.successors.call(null,g),start,opts);
});

loom.alg.bf_traverse.cljs$lang$applyTo = (function (seq196191){
var G__196192 = cljs.core.first.call(null,seq196191);
var seq196191__$1 = cljs.core.next.call(null,seq196191);
var G__196193 = cljs.core.first.call(null,seq196191__$1);
var seq196191__$2 = cljs.core.next.call(null,seq196191__$1);
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__196192,G__196193,seq196191__$2);
});

loom.alg.bf_traverse.cljs$lang$maxFixedArity = (2);
/**
 * Returns a breadth-first spanning tree of the form {node [successors]}
 */
loom.alg.bf_span = (function loom$alg$bf_span(var_args){
var args196206 = [];
var len__25279__auto___196209 = arguments.length;
var i__25280__auto___196210 = (0);
while(true){
if((i__25280__auto___196210 < len__25279__auto___196209)){
args196206.push((arguments[i__25280__auto___196210]));

var G__196211 = (i__25280__auto___196210 + (1));
i__25280__auto___196210 = G__196211;
continue;
} else {
}
break;
}

var G__196208 = args196206.length;
switch (G__196208) {
case 1:
return loom.alg.bf_span.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.bf_span.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args196206.length)].join('')));

}
});

loom.alg.bf_span.cljs$core$IFn$_invoke$arity$1 = (function (g){
return loom.alg_generic.preds__GT_span.call(null,cljs.core.reduce.call(null,(function (predmap,n){
if(cljs.core.contains_QMARK_.call(null,predmap,n)){
return predmap;
} else {
return cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g),n,new cljs.core.Keyword(null,"f","f",-1597136552),(function (_,pm,___$1){
return pm;
}),new cljs.core.Keyword(null,"seen","seen",-518999789),predmap));
}
}),cljs.core.PersistentArrayMap.EMPTY,loom.graph.nodes.call(null,g)));
});

loom.alg.bf_span.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.bf_span.call(null,loom.graph.successors.call(null,g),start);
});

loom.alg.bf_span.cljs$lang$maxFixedArity = 2;
/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights)
 */
loom.alg.bf_path = (function loom$alg$bf_path(var_args){
var args__25286__auto__ = [];
var len__25279__auto___196217 = arguments.length;
var i__25280__auto___196218 = (0);
while(true){
if((i__25280__auto___196218 < len__25279__auto___196217)){
args__25286__auto__.push((arguments[i__25280__auto___196218]));

var G__196219 = (i__25280__auto___196218 + (1));
i__25280__auto___196218 = G__196219;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((3) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((3)),(0))):null);
return loom.alg.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25287__auto__);
});

loom.alg.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,start,end,opts){
return cljs.core.apply.call(null,loom.alg_generic.bf_path,loom.graph.successors.call(null,g),start,end,opts);
});

loom.alg.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg.bf_path.cljs$lang$applyTo = (function (seq196213){
var G__196214 = cljs.core.first.call(null,seq196213);
var seq196213__$1 = cljs.core.next.call(null,seq196213);
var G__196215 = cljs.core.first.call(null,seq196213__$1);
var seq196213__$2 = cljs.core.next.call(null,seq196213__$1);
var G__196216 = cljs.core.first.call(null,seq196213__$2);
var seq196213__$3 = cljs.core.next.call(null,seq196213__$2);
return loom.alg.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__196214,G__196215,G__196216,seq196213__$3);
});
/**
 * Using a bidirectional breadth-first search, finds a path from start to
 *   end with the fewest hops (i.e. irrespective of edge weights). Can be much
 *   faster than a unidirectional search on certain types of graphs
 */
loom.alg.bf_path_bi = (function loom$alg$bf_path_bi(g,start,end){
if(cljs.core.truth_(loom.graph.directed_QMARK_.call(null,g))){
return loom.alg_generic.bf_path_bi.call(null,loom.graph.successors.call(null,g),loom.graph.predecessors.call(null,g),start,end);
} else {
return loom.alg_generic.bf_path_bi.call(null,loom.graph.successors.call(null,g),loom.graph.successors.call(null,g),start,end);
}
});
/**
 * Returns a lazy-seq of [current-node state] where state is a map in
 *   the format {node [distance predecessor]}. When f is provided,
 *   returns a lazy-seq of (f node state) for each node
 */
loom.alg.dijkstra_traverse = (function loom$alg$dijkstra_traverse(var_args){
var args196220 = [];
var len__25279__auto___196223 = arguments.length;
var i__25280__auto___196224 = (0);
while(true){
if((i__25280__auto___196224 < len__25279__auto___196223)){
args196220.push((arguments[i__25280__auto___196224]));

var G__196225 = (i__25280__auto___196224 + (1));
i__25280__auto___196224 = G__196225;
continue;
} else {
}
break;
}

var G__196222 = args196220.length;
switch (G__196222) {
case 1:
return loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args196220.length)].join('')));

}
});

loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$1 = (function (g){
return loom.alg_generic.dijkstra_traverse.call(null,loom.graph.successors.call(null,g),loom.graph.weight.call(null,g),cljs.core.first.call(null,loom.graph.nodes.call(null,g)));
});

loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.dijkstra_traverse.call(null,loom.graph.successors.call(null,g),loom.graph.weight.call(null,g),start,cljs.core.vector);
});

loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (g,start,f){
return loom.alg_generic.dijkstra_traverse.call(null,loom.graph.successors.call(null,g),loom.graph.weight.call(null,g),start,f);
});

loom.alg.dijkstra_traverse.cljs$lang$maxFixedArity = 3;
/**
 * Finds all shortest distances from start. Returns a map in the
 *   format {node {successor distance}}
 */
loom.alg.dijkstra_span = (function loom$alg$dijkstra_span(var_args){
var args196227 = [];
var len__25279__auto___196230 = arguments.length;
var i__25280__auto___196231 = (0);
while(true){
if((i__25280__auto___196231 < len__25279__auto___196230)){
args196227.push((arguments[i__25280__auto___196231]));

var G__196232 = (i__25280__auto___196231 + (1));
i__25280__auto___196231 = G__196232;
continue;
} else {
}
break;
}

var G__196229 = args196227.length;
switch (G__196229) {
case 1:
return loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args196227.length)].join('')));

}
});

loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$1 = (function (g){
return loom.alg_generic.dijkstra_span.call(null,loom.graph.successors.call(null,g),loom.graph.weight.call(null,g),cljs.core.first.call(null,loom.graph.nodes.call(null,g)));
});

loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.dijkstra_span.call(null,loom.graph.successors.call(null,g),loom.graph.weight.call(null,g),start);
});

loom.alg.dijkstra_span.cljs$lang$maxFixedArity = 2;
/**
 * Finds the shortest path from start to end. Returns a vector:
 *   [path distance]
 */
loom.alg.dijkstra_path_dist = (function loom$alg$dijkstra_path_dist(g,start,end){
return loom.alg_generic.dijkstra_path_dist.call(null,loom.graph.successors.call(null,g),loom.graph.weight.call(null,g),start,end);
});
/**
 * Finds the shortest path from start to end
 */
loom.alg.dijkstra_path = (function loom$alg$dijkstra_path(g,start,end){
return cljs.core.first.call(null,loom.alg.dijkstra_path_dist.call(null,g,start,end));
});
/**
 * Tests for whether we can improve the shortest path to v found so far
 * by going through u.
 */
loom.alg.can_relax_edge_QMARK_ = (function loom$alg$can_relax_edge_QMARK_(p__196234,weight,costs){
var vec__196236 = p__196234;
var u = cljs.core.nth.call(null,vec__196236,(0),null);
var v = cljs.core.nth.call(null,vec__196236,(1),null);
var edge = vec__196236;
var vd = cljs.core.get.call(null,costs,v);
var ud = cljs.core.get.call(null,costs,u);
var sum = (ud + weight);
return (vd > sum);
});
/**
 * If there's a shorter path from s to v via u,
 *  update our map of estimated path costs and
 * map of paths from source to vertex v
 */
loom.alg.relax_edge = (function loom$alg$relax_edge(p__196237,weight,p__196238){
var vec__196241 = p__196237;
var u = cljs.core.nth.call(null,vec__196241,(0),null);
var v = cljs.core.nth.call(null,vec__196241,(1),null);
var edge = vec__196241;
var vec__196242 = p__196238;
var costs = cljs.core.nth.call(null,vec__196242,(0),null);
var paths = cljs.core.nth.call(null,vec__196242,(1),null);
var estimates = vec__196242;
var ud = cljs.core.get.call(null,costs,u);
var sum = (ud + weight);
if(cljs.core.truth_(loom.alg.can_relax_edge_QMARK_.call(null,edge,weight,costs))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,costs,v,sum),cljs.core.assoc.call(null,paths,v,u)], null);
} else {
return estimates;
}
});
/**
 * Performs edge relaxation on all edges in weighted directed graph
 */
loom.alg.relax_edges = (function loom$alg$relax_edges(g,start,estimates){
return cljs.core.reduce.call(null,(function (estimates__$1,p__196245){
var vec__196246 = p__196245;
var u = cljs.core.nth.call(null,vec__196246,(0),null);
var v = cljs.core.nth.call(null,vec__196246,(1),null);
var edge = vec__196246;
return loom.alg.relax_edge.call(null,edge,loom.graph.weight.call(null,g,u,v),estimates__$1);
}),estimates,loom.graph.edges.call(null,g));
});
/**
 * Initializes path cost estimates and paths from source to all vertices,
 * for Bellman-Ford algorithm
 */
loom.alg.init_estimates = (function loom$alg$init_estimates(graph,start){
var nodes = cljs.core.disj.call(null,loom.graph.nodes.call(null,graph),start);
var path_costs = cljs.core.PersistentArrayMap.fromArray([start,(0)], true, false);
var paths = cljs.core.PersistentArrayMap.fromArray([start,null], true, false);
var infinities = cljs.core.repeat.call(null,Infinity);
var nils = cljs.core.repeat.call(null,null);
var init_costs = cljs.core.interleave.call(null,nodes,infinities);
var init_paths = cljs.core.interleave.call(null,nodes,nils);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.assoc,path_costs,init_costs),cljs.core.apply.call(null,cljs.core.assoc,paths,init_paths)], null);
});
/**
 * Given a weighted, directed graph G = (V, E) with source start,
 * the Bellman-Ford algorithm produces map of single source shortest
 * paths and their costs if no negative-weight cycle that is reachable
 * from the source exists, and false otherwise, indicating that no
 * solution exists.
 */
loom.alg.bellman_ford = (function loom$alg$bellman_ford(g,start){
var initial_estimates = loom.alg.init_estimates.call(null,g,start);
var vec__196251 = cljs.core.reduce.call(null,((function (initial_estimates){
return (function (estimates,_){
return loom.alg.relax_edges.call(null,g,start,estimates);
});})(initial_estimates))
,initial_estimates,cljs.core.range.call(null,(cljs.core.count.call(null,loom.graph.nodes.call(null,g)) - (1))));
var costs = cljs.core.nth.call(null,vec__196251,(0),null);
var paths = cljs.core.nth.call(null,vec__196251,(1),null);
var edges = loom.graph.edges.call(null,g);
if(cljs.core.truth_(cljs.core.some.call(null,((function (initial_estimates,vec__196251,costs,paths,edges){
return (function (p__196252){
var vec__196253 = p__196252;
var u = cljs.core.nth.call(null,vec__196253,(0),null);
var v = cljs.core.nth.call(null,vec__196253,(1),null);
var edge = vec__196253;
return loom.alg.can_relax_edge_QMARK_.call(null,edge,loom.graph.weight.call(null,g,u,v),costs);
});})(initial_estimates,vec__196251,costs,paths,edges))
,edges))){
return false;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [costs,cljs.core.reduce.call(null,((function (initial_estimates,vec__196251,costs,paths,edges){
return (function (final_paths,v){
return cljs.core.assoc.call(null,final_paths,v,(function (){var node = v;
var path = cljs.core.List.EMPTY;
while(true){
if(cljs.core.truth_(node)){
var G__196254 = cljs.core.get.call(null,paths,node);
var G__196255 = cljs.core.cons.call(null,node,path);
node = G__196254;
path = G__196255;
continue;
} else {
return path;
}
break;
}
})());
});})(initial_estimates,vec__196251,costs,paths,edges))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,((function (initial_estimates,vec__196251,costs,paths,edges){
return (function (p1__196247_SHARP_){
return cljs.core._EQ_.call(null,Infinity,cljs.core.get.call(null,costs,p1__196247_SHARP_));
});})(initial_estimates,vec__196251,costs,paths,edges))
,cljs.core.keys.call(null,paths)))], null);
}
});
/**
 * Returns true if g is a directed acyclic graph
 */
loom.alg.dag_QMARK_ = (function loom$alg$dag_QMARK_(g){
return cljs.core.boolean$.call(null,loom.alg.topsort.call(null,g));
});
/**
 * Finds the shortest path from start to end in graph g, using Dijkstra's
 *   algorithm if the graph is weighted, breadth-first search otherwise.
 */
loom.alg.shortest_path = (function loom$alg$shortest_path(g,start,end){
if(cljs.core.truth_(loom.graph.weighted_QMARK_.call(null,g))){
return loom.alg.dijkstra_path.call(null,g,start,end);
} else {
return loom.alg.bf_path.call(null,g,start,end);
}
});
/**
 * Finds the longest shortest path beginning at start, using Dijkstra's
 *   algorithm if the graph is weighted, breadth-first search otherwise.
 */
loom.alg.longest_shortest_path = (function loom$alg$longest_shortest_path(g,start){
return cljs.core.reverse.call(null,(cljs.core.truth_(loom.graph.weighted_QMARK_.call(null,g))?cljs.core.reduce.call(null,(function (path1,p__196260){
var vec__196261 = p__196260;
var n = cljs.core.nth.call(null,vec__196261,(0),null);
var state = cljs.core.nth.call(null,vec__196261,(1),null);
var path2 = loom.alg_generic.trace_path.call(null,cljs.core.comp.call(null,cljs.core.second,state),n);
if((cljs.core.count.call(null,path1) < cljs.core.count.call(null,path2))){
return path2;
} else {
return path1;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),loom.alg.dijkstra_traverse.call(null,g,start,cljs.core.vector)):cljs.core.reduce.call(null,(function (path1,p__196262){
var vec__196263 = p__196262;
var n = cljs.core.nth.call(null,vec__196263,(0),null);
var predmap = cljs.core.nth.call(null,vec__196263,(1),null);
var _ = cljs.core.nth.call(null,vec__196263,(2),null);
var path2 = loom.alg_generic.trace_path.call(null,predmap,n);
if((cljs.core.count.call(null,path1) < cljs.core.count.call(null,path2))){
return path2;
} else {
return path1;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),loom.alg.bf_traverse.call(null,g,start,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector))));
});
/**
 * Helper function for Johnson's algorithm. Uses Bellman-Ford to remove negative weights.
 */
loom.alg.bellman_ford_transform = (function loom$alg$bellman_ford_transform(wg){
var q = cljs.core.first.call(null,cljs.core.drop_while.call(null,cljs.core.partial.call(null,loom.graph.has_node_QMARK_,wg),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var es = (function (){var iter__24993__auto__ = ((function (q){
return (function loom$alg$bellman_ford_transform_$_iter__196271(s__196272){
return (new cljs.core.LazySeq(null,((function (q){
return (function (){
var s__196272__$1 = s__196272;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__196272__$1);
if(temp__4425__auto__){
var s__196272__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__196272__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__196272__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__196274 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__196273 = (0);
while(true){
if((i__196273 < size__24992__auto__)){
var v = cljs.core._nth.call(null,c__24991__auto__,i__196273);
cljs.core.chunk_append.call(null,b__196274,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,v,(0)], null));

var G__196278 = (i__196273 + (1));
i__196273 = G__196278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__196274),loom$alg$bellman_ford_transform_$_iter__196271.call(null,cljs.core.chunk_rest.call(null,s__196272__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__196274),null);
}
} else {
var v = cljs.core.first.call(null,s__196272__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,v,(0)], null),loom$alg$bellman_ford_transform_$_iter__196271.call(null,cljs.core.rest.call(null,s__196272__$2)));
}
} else {
return null;
}
break;
}
});})(q))
,null,null));
});})(q))
;
return iter__24993__auto__.call(null,loom.graph.nodes.call(null,wg));
})();
var bf_results = loom.alg.bellman_ford.call(null,loom.graph.add_edges_STAR_.call(null,wg,es),q);
if(cljs.core.truth_(bf_results)){
var vec__196275 = bf_results;
var dist_q = cljs.core.nth.call(null,vec__196275,(0),null);
var _ = cljs.core.nth.call(null,vec__196275,(1),null);
var new_es = cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.second,((function (vec__196275,dist_q,_,q,es,bf_results){
return (function (p__196276){
var vec__196277 = p__196276;
var u = cljs.core.nth.call(null,vec__196277,(0),null);
var v = cljs.core.nth.call(null,vec__196277,(1),null);
return (loom.graph.weight.call(null,wg,u,v) + (dist_q.call(null,u) - dist_q.call(null,v)));
});})(vec__196275,dist_q,_,q,es,bf_results))
),loom.graph.edges.call(null,wg));
return loom.graph.add_edges_STAR_.call(null,wg,new_es);
} else {
return false;
}
});
/**
 * Finds all-pairs shortest paths using Bellman-Ford to remove any negative edges before
 *   using Dijkstra's algorithm to find the shortest paths from each vertex to every other.
 *   This algorithm is efficient for sparse graphs.
 * 
 *   If the graph is unweighted, a default weight of 1 will be used. Note that it is more efficient
 *   to use breadth-first spans for a graph with a uniform edge weight rather than Dijkstra's algorithm.
 *   Most callers should use shortest-paths and allow the most efficient implementation be selected
 *   for the graph.
 */
loom.alg.johnson = (function loom$alg$johnson(g){
var g__$1 = (cljs.core.truth_((function (){var and__24209__auto__ = loom.graph.weighted_QMARK_.call(null,g);
if(cljs.core.truth_(and__24209__auto__)){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._GT_,(0)),cljs.core.map.call(null,loom.graph.weight.call(null,g),loom.graph.edges.call(null,g)));
} else {
return and__24209__auto__;
}
})())?loom.alg.bellman_ford_transform.call(null,g):g);
if(g__$1 === false){
return false;
} else {
var dist = (cljs.core.truth_(loom.graph.weighted_QMARK_.call(null,g__$1))?loom.graph.weight.call(null,g__$1):((function (g__$1){
return (function (u,v){
if(cljs.core.truth_(loom.graph.has_edge_QMARK_.call(null,g__$1,u,v))){
return (1);
} else {
return null;
}
});})(g__$1))
);
return cljs.core.reduce.call(null,((function (dist,g__$1){
return (function (acc,node){
return cljs.core.assoc.call(null,acc,node,loom.alg_generic.dijkstra_span.call(null,loom.graph.successors.call(null,g__$1),dist,node));
});})(dist,g__$1))
,cljs.core.PersistentArrayMap.EMPTY,loom.graph.nodes.call(null,g__$1));
}
});
/**
 * Uses bf-span on each node in the graph.
 */
loom.alg.bf_all_pairs_shortest_paths = (function loom$alg$bf_all_pairs_shortest_paths(g){
return cljs.core.reduce.call(null,(function (spans,node){
return cljs.core.assoc.call(null,spans,node,loom.alg.bf_span.call(null,g,node));
}),cljs.core.PersistentArrayMap.EMPTY,loom.graph.nodes.call(null,g));
});
/**
 * Finds all-pairs shortest paths in a graph. Uses Johnson's algorithm for weighted graphs
 *   which is efficient for sparse graphs. Breadth-first spans are used for unweighted graphs.
 */
loom.alg.all_pairs_shortest_paths = (function loom$alg$all_pairs_shortest_paths(g){
if(cljs.core.truth_(loom.graph.weighted_QMARK_.call(null,g))){
return loom.alg.johnson.call(null,g);
} else {
return loom.alg.bf_all_pairs_shortest_paths.call(null,g);
}
});
/**
 * Returns the connected components of graph g as a vector of vectors. If g
 *   is directed, returns the weakly-connected components.
 */
loom.alg.connected_components = (function loom$alg$connected_components(g){
var nb = ((cljs.core.not.call(null,loom.graph.directed_QMARK_.call(null,g)))?loom.graph.successors.call(null,g):(function (p1__196279_SHARP_){
return cljs.core.concat.call(null,loom.graph.successors.call(null,g,p1__196279_SHARP_),loom.graph.predecessors.call(null,g,p1__196279_SHARP_));
}));
return cljs.core.first.call(null,cljs.core.reduce.call(null,((function (nb){
return (function (p__196287,n){
var vec__196288 = p__196287;
var cc = cljs.core.nth.call(null,vec__196288,(0),null);
var predmap = cljs.core.nth.call(null,vec__196288,(1),null);
if(cljs.core.contains_QMARK_.call(null,predmap,n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc,predmap], null);
} else {
var vec__196289 = cljs.core.reduce.call(null,((function (vec__196288,cc,predmap,nb){
return (function (p__196290,p__196291){
var vec__196292 = p__196290;
var c = cljs.core.nth.call(null,vec__196292,(0),null);
var _ = cljs.core.nth.call(null,vec__196292,(1),null);
var vec__196293 = p__196291;
var n__$1 = cljs.core.nth.call(null,vec__196293,(0),null);
var pm = cljs.core.nth.call(null,vec__196293,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__196293,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,c,n__$1),pm], null);
});})(vec__196288,cc,predmap,nb))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null], null),loom.alg_generic.bf_traverse.call(null,nb,n,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector,new cljs.core.Keyword(null,"seen","seen",-518999789),predmap));
var c = cljs.core.nth.call(null,vec__196289,(0),null);
var pm = cljs.core.nth.call(null,vec__196289,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,cc,c),pm], null);
}
});})(nb))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),loom.graph.nodes.call(null,g)));
});
/**
 * Returns true if g is connected
 */
loom.alg.connected_QMARK_ = (function loom$alg$connected_QMARK_(g){
return (cljs.core.count.call(null,cljs.core.first.call(null,loom.alg.connected_components.call(null,g))) === cljs.core.count.call(null,loom.graph.nodes.call(null,g)));
});
/**
 * Returns the strongly-connected components of directed graph g as a vector of
 *   vectors. Uses Kosaraju's algorithm.
 */
loom.alg.scc = (function loom$alg$scc(g){
var gt = loom.graph.transpose.call(null,g);
var stack = cljs.core.reverse.call(null,loom.alg.post_traverse.call(null,g));
var seen = cljs.core.PersistentHashSet.EMPTY;
var cc = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_.call(null,stack)){
return cljs.core.persistent_BANG_.call(null,cc);
} else {
if(cljs.core.truth_(seen.call(null,cljs.core.first.call(null,stack)))){
var G__196296 = cljs.core.rest.call(null,stack);
var G__196297 = seen;
var G__196298 = cc;
stack = G__196296;
seen = G__196297;
cc = G__196298;
continue;
} else {
var vec__196295 = loom.alg.post_traverse.call(null,gt,cljs.core.first.call(null,stack),new cljs.core.Keyword(null,"seen","seen",-518999789),seen,new cljs.core.Keyword(null,"return-seen","return-seen",308792727),true);
var c = cljs.core.nth.call(null,vec__196295,(0),null);
var seen__$1 = cljs.core.nth.call(null,vec__196295,(1),null);
var G__196299 = cljs.core.rest.call(null,stack);
var G__196300 = seen__$1;
var G__196301 = cljs.core.conj_BANG_.call(null,cc,c);
stack = G__196299;
seen = G__196300;
cc = G__196301;
continue;
}
}
break;
}
});
loom.alg.strongly_connected_QMARK_ = (function loom$alg$strongly_connected_QMARK_(g){
return (cljs.core.count.call(null,cljs.core.first.call(null,loom.alg.scc.call(null,g))) === cljs.core.count.call(null,loom.graph.nodes.call(null,g)));
});
/**
 * Returns graph g with all connected components connected to each other
 */
loom.alg.connect = (function loom$alg$connect(g){
return cljs.core.reduce.call(null,loom.graph.add_edges,g,cljs.core.partition.call(null,(2),(1),cljs.core.map.call(null,cljs.core.first,loom.alg.connected_components.call(null,g))));
});
/**
 * Return the density of graph g
 */
loom.alg.density = (function loom$alg$density(var_args){
var args__25286__auto__ = [];
var len__25279__auto___196307 = arguments.length;
var i__25280__auto___196308 = (0);
while(true){
if((i__25280__auto___196308 < len__25279__auto___196307)){
args__25286__auto__.push((arguments[i__25280__auto___196308]));

var G__196309 = (i__25280__auto___196308 + (1));
i__25280__auto___196308 = G__196309;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((1) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((1)),(0))):null);
return loom.alg.density.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25287__auto__);
});

loom.alg.density.cljs$core$IFn$_invoke$arity$variadic = (function (g,p__196304){
var map__196305 = p__196304;
var map__196305__$1 = ((((!((map__196305 == null)))?((((map__196305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__196305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__196305):map__196305);
var loops = cljs.core.get.call(null,map__196305__$1,new cljs.core.Keyword(null,"loops","loops",-1766681555),false);
var order = cljs.core.count.call(null,loom.graph.nodes.call(null,g));
return (cljs.core.count.call(null,loom.graph.edges.call(null,g)) / (order * (cljs.core.truth_(loops)?order:(order - (1)))));
});

loom.alg.density.cljs$lang$maxFixedArity = (1);

loom.alg.density.cljs$lang$applyTo = (function (seq196302){
var G__196303 = cljs.core.first.call(null,seq196302);
var seq196302__$1 = cljs.core.next.call(null,seq196302);
return loom.alg.density.cljs$core$IFn$_invoke$arity$variadic(G__196303,seq196302__$1);
});
/**
 * Returns nodes with no connections to other nodes (i.e., isolated nodes)
 */
loom.alg.loners = (function loom$alg$loners(g){
var degree_total = (cljs.core.truth_(loom.graph.directed_QMARK_.call(null,g))?(function (p1__196310_SHARP_){
return (loom.graph.in_degree.call(null,g,p1__196310_SHARP_) + loom.graph.out_degree.call(null,g,p1__196310_SHARP_));
}):(function (p1__196311_SHARP_){
return loom.graph.out_degree.call(null,g,p1__196311_SHARP_);
}));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.zero_QMARK_,degree_total),loom.graph.nodes.call(null,g));
});
/**
 * Returns the distinct edges of g. Only useful for undirected graphs
 */
loom.alg.distinct_edges = (function loom$alg$distinct_edges(g){
if(cljs.core.truth_(loom.graph.directed_QMARK_.call(null,g))){
return loom.graph.edges.call(null,g);
} else {
return cljs.core.second.call(null,cljs.core.reduce.call(null,(function (p__196314,e){
var vec__196315 = p__196314;
var seen = cljs.core.nth.call(null,vec__196315,(0),null);
var es = cljs.core.nth.call(null,vec__196315,(1),null);
var eset = cljs.core.set.call(null,cljs.core.take.call(null,(2),e));
if(cljs.core.truth_(seen.call(null,eset))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,es], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,seen,eset),cljs.core.conj.call(null,es,e)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY], null),loom.graph.edges.call(null,g)));
}
});
/**
 * Attempts a two-coloring of graph g. When successful, returns a map of
 *   nodes to colors (1 or 0). Otherwise, returns nil.
 */
loom.alg.bipartite_color = (function loom$alg$bipartite_color(g){
var color_component = (function loom$alg$bipartite_color_$_color_component(coloring,start){
var coloring__$1 = cljs.core.assoc.call(null,coloring,start,(1));
var queue = cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),start);
while(true){
if(cljs.core.empty_QMARK_.call(null,queue)){
return coloring__$1;
} else {
var v = cljs.core.peek.call(null,queue);
var color = ((1) - coloring__$1.call(null,v));
var nbrs = loom.graph.successors.call(null,g,v);
if(cljs.core.truth_(cljs.core.some.call(null,((function (coloring__$1,queue,v,color,nbrs){
return (function (p1__196316_SHARP_){
var and__24209__auto__ = coloring__$1.call(null,p1__196316_SHARP_);
if(cljs.core.truth_(and__24209__auto__)){
return cljs.core._EQ_.call(null,coloring__$1.call(null,v),coloring__$1.call(null,p1__196316_SHARP_));
} else {
return and__24209__auto__;
}
});})(coloring__$1,queue,v,color,nbrs))
,nbrs))){
return null;
} else {
var nbrs__$1 = cljs.core.remove.call(null,coloring__$1,nbrs);
var G__196357 = cljs.core.into.call(null,coloring__$1,(function (){var iter__24993__auto__ = ((function (coloring__$1,queue,nbrs__$1,v,color,nbrs){
return (function loom$alg$bipartite_color_$_color_component_$_iter__196349(s__196350){
return (new cljs.core.LazySeq(null,((function (coloring__$1,queue,nbrs__$1,v,color,nbrs){
return (function (){
var s__196350__$1 = s__196350;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__196350__$1);
if(temp__4425__auto__){
var s__196350__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__196350__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__196350__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__196352 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__196351 = (0);
while(true){
if((i__196351 < size__24992__auto__)){
var nbr = cljs.core._nth.call(null,c__24991__auto__,i__196351);
cljs.core.chunk_append.call(null,b__196352,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,color], null));

var G__196359 = (i__196351 + (1));
i__196351 = G__196359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__196352),loom$alg$bipartite_color_$_color_component_$_iter__196349.call(null,cljs.core.chunk_rest.call(null,s__196350__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__196352),null);
}
} else {
var nbr = cljs.core.first.call(null,s__196350__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,color], null),loom$alg$bipartite_color_$_color_component_$_iter__196349.call(null,cljs.core.rest.call(null,s__196350__$2)));
}
} else {
return null;
}
break;
}
});})(coloring__$1,queue,nbrs__$1,v,color,nbrs))
,null,null));
});})(coloring__$1,queue,nbrs__$1,v,color,nbrs))
;
return iter__24993__auto__.call(null,nbrs__$1);
})());
var G__196358 = cljs.core.into.call(null,cljs.core.pop.call(null,queue),nbrs__$1);
coloring__$1 = G__196357;
queue = G__196358;
continue;
}
}
break;
}
});
var G__196354 = cljs.core.seq.call(null,loom.graph.nodes.call(null,g));
var vec__196355 = G__196354;
var node = cljs.core.nth.call(null,vec__196355,(0),null);
var nodes = cljs.core.nthnext.call(null,vec__196355,(1));
var coloring = cljs.core.PersistentArrayMap.EMPTY;
var G__196354__$1 = G__196354;
var coloring__$1 = coloring;
while(true){
var vec__196356 = G__196354__$1;
var node__$1 = cljs.core.nth.call(null,vec__196356,(0),null);
var nodes__$1 = cljs.core.nthnext.call(null,vec__196356,(1));
var coloring__$2 = coloring__$1;
if(cljs.core.truth_(coloring__$2)){
if((node__$1 == null)){
return coloring__$2;
} else {
if(cljs.core.truth_(coloring__$2.call(null,node__$1))){
var G__196360 = nodes__$1;
var G__196361 = coloring__$2;
G__196354__$1 = G__196360;
coloring__$1 = G__196361;
continue;
} else {
var G__196362 = nodes__$1;
var G__196363 = color_component.call(null,coloring__$2,node__$1);
G__196354__$1 = G__196362;
coloring__$1 = G__196363;
continue;
}
}
} else {
return null;
}
break;
}
});
/**
 * Returns true if g is bipartite
 */
loom.alg.bipartite_QMARK_ = (function loom$alg$bipartite_QMARK_(g){
return cljs.core.boolean$.call(null,loom.alg.bipartite_color.call(null,g));
});
/**
 * Returns two sets of nodes, one for each color of the bipartite coloring,
 *   or nil if g is not bipartite
 */
loom.alg.bipartite_sets = (function loom$alg$bipartite_sets(g){
var temp__4425__auto__ = loom.alg.bipartite_color.call(null,g);
if(cljs.core.truth_(temp__4425__auto__)){
var coloring = temp__4425__auto__;
return cljs.core.reduce.call(null,((function (coloring,temp__4425__auto__){
return (function (p__196368,p__196369){
var vec__196370 = p__196368;
var s1 = cljs.core.nth.call(null,vec__196370,(0),null);
var s2 = cljs.core.nth.call(null,vec__196370,(1),null);
var vec__196371 = p__196369;
var node = cljs.core.nth.call(null,vec__196371,(0),null);
var color = cljs.core.nth.call(null,vec__196371,(1),null);
if((color === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,s1,node),s2], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,cljs.core.conj.call(null,s2,node)], null);
}
});})(coloring,temp__4425__auto__))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),coloring);
} else {
return null;
}
});
/**
 * Given a putative coloring of a graph, returns the colors of all the
 *   neighbors of a given node.
 */
loom.alg.neighbor_colors = (function loom$alg$neighbor_colors(g,node,coloring){
var successors = loom.graph.successors.call(null,g,node);
var neighbors = ((cljs.core.not.call(null,loom.graph.directed_QMARK_.call(null,g)))?successors:cljs.core.concat.call(null,successors,loom.graph.predecessors.call(null,g,node)));
return cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (successors,neighbors){
return (function (p1__196372_SHARP_){
return cljs.core.get.call(null,coloring,p1__196372_SHARP_);
});})(successors,neighbors))
,neighbors)));
});
/**
 * Returns true if a map of nodes to colors is a proper coloring of a graph.
 */
loom.alg.coloring_QMARK_ = (function loom$alg$coloring_QMARK_(g,coloring){
var different_colors_QMARK_ = (function loom$alg$coloring_QMARK__$_different_colors_QMARK_(node){
return !(cljs.core.contains_QMARK_.call(null,loom.alg.neighbor_colors.call(null,g,node,coloring),coloring.call(null,node)));
});
return (cljs.core.every_QMARK_.call(null,different_colors_QMARK_,loom.graph.nodes.call(null,g))) && (cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__196373_SHARP_){
return cljs.core.get.call(null,coloring,p1__196373_SHARP_);
}),loom.graph.nodes.call(null,g))));
});
/**
 * Greedily color the vertices of a graph using the first-fit heuristic.
 *   Returns a map of nodes to colors (0, 1, ...).
 */
loom.alg.greedy_coloring = (function loom$alg$greedy_coloring(g){
var node_seq = loom.alg.bf_traverse.call(null,g);
var coloring = cljs.core.PersistentArrayMap.EMPTY;
var colors = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,node_seq)){
return coloring;
} else {
var node = cljs.core.first.call(null,node_seq);
var possible_colors = clojure.set.difference.call(null,colors,loom.alg.neighbor_colors.call(null,g,node,coloring));
var node_color = ((cljs.core.empty_QMARK_.call(null,possible_colors))?cljs.core.count.call(null,colors):cljs.core.apply.call(null,cljs.core.min,possible_colors));
var G__196374 = cljs.core.rest.call(null,node_seq);
var G__196375 = cljs.core.conj.call(null,coloring,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,node_color], null));
var G__196376 = cljs.core.conj.call(null,colors,node_color);
node_seq = G__196374;
coloring = G__196375;
colors = G__196376;
continue;
}
break;
}
});
/**
 * Returns [flow-map flow-value], where flow-map is a weighted adjacency map
 * representing the maximum flow.  The argument should be a weighted digraph,
 * where the edge weights are flow capacities.  Source and sink are the vertices
 * representing the flow source and sink vertices.  Optionally, pass in
 *   :method :algorithm to use.  Currently, the only option is :edmonds-karp .
 */
loom.alg.max_flow = (function loom$alg$max_flow(var_args){
var args__25286__auto__ = [];
var len__25279__auto___196386 = arguments.length;
var i__25280__auto___196387 = (0);
while(true){
if((i__25280__auto___196387 < len__25279__auto___196386)){
args__25286__auto__.push((arguments[i__25280__auto___196387]));

var G__196388 = (i__25280__auto___196387 + (1));
i__25280__auto___196387 = G__196388;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((3) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((3)),(0))):null);
return loom.alg.max_flow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25287__auto__);
});

loom.alg.max_flow.cljs$core$IFn$_invoke$arity$variadic = (function (g,source,sink,p__196381){
var map__196382 = p__196381;
var map__196382__$1 = ((((!((map__196382 == null)))?((((map__196382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__196382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__196382):map__196382);
var method = cljs.core.get.call(null,map__196382__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"edmonds-karp","edmonds-karp",-1793813821));
var method_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edmonds-karp","edmonds-karp",-1793813821),null], null), null);
var n = loom.graph.successors.call(null,g);
var i = loom.graph.predecessors.call(null,g);
var c = loom.graph.weight.call(null,g);
var s = source;
var t = sink;
var vec__196384 = (function (){var G__196385 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__196385) {
case "edmonds-karp":
return loom.flow.edmonds_karp.call(null,n,i,c,s,t);

break;
default:
throw (new java.lang.RuntimeException([cljs.core.str("Method not found.  Choose from: "),cljs.core.str(method_set)].join('')));

}
})();
var flow_map = cljs.core.nth.call(null,vec__196384,(0),null);
var flow_value = cljs.core.nth.call(null,vec__196384,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow_map,flow_value], null);
});

loom.alg.max_flow.cljs$lang$maxFixedArity = (3);

loom.alg.max_flow.cljs$lang$applyTo = (function (seq196377){
var G__196378 = cljs.core.first.call(null,seq196377);
var seq196377__$1 = cljs.core.next.call(null,seq196377);
var G__196379 = cljs.core.first.call(null,seq196377__$1);
var seq196377__$2 = cljs.core.next.call(null,seq196377__$1);
var G__196380 = cljs.core.first.call(null,seq196377__$2);
var seq196377__$3 = cljs.core.next.call(null,seq196377__$2);
return loom.alg.max_flow.cljs$core$IFn$_invoke$arity$variadic(G__196378,G__196379,G__196380,seq196377__$3);
});
/**
 * Wrapper function to return edges along with weights for a given graph.
 * For un-weighted graphs a default value of one is produced. The function
 * returns values of the form [[[u v] 10] [[x y] 20] ...]
 */
loom.alg.edge_weights = (function loom$alg$edge_weights(wg,v){
var edge_weight = (function (u,v__$1){
if(cljs.core.truth_(loom.graph.weighted_QMARK_.call(null,wg))){
return loom.graph.weight.call(null,wg,u,v__$1);
} else {
return (1);
}
});
return cljs.core.map.call(null,((function (edge_weight){
return (function (p1__196390_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__196390_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,edge_weight.call(null,v,p1__196390_SHARP_)], null)], null));
});})(edge_weight))
,loom.graph.successors.call(null,wg,v));
});
/**
 * An edge-list of an minimum spanning tree along with weights that
 *   represents an MST of the given graph. Returns the MST edge-list
 *   for un-weighted graphs.
 */
loom.alg.prim_mst_edges = (function loom$alg$prim_mst_edges(var_args){
var args196393 = [];
var len__25279__auto___196399 = arguments.length;
var i__25280__auto___196400 = (0);
while(true){
if((i__25280__auto___196400 < len__25279__auto___196399)){
args196393.push((arguments[i__25280__auto___196400]));

var G__196401 = (i__25280__auto___196400 + (1));
i__25280__auto___196400 = G__196401;
continue;
} else {
}
break;
}

var G__196395 = args196393.length;
switch (G__196395) {
case 1:
return loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 5:
return loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args196393.length)].join('')));

}
});

loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$1 = (function (wg){
if(cljs.core.truth_(loom.graph.directed_QMARK_.call(null,wg))){
throw Error("Spanning tree only defined for undirected graphs");
} else {
var mst = loom.alg.prim_mst_edges.call(null,wg,loom.graph.nodes.call(null,wg),null,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(loom.graph.weighted_QMARK_.call(null,wg))){
return mst;
} else {
return cljs.core.map.call(null,((function (mst){
return (function (p1__196391_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,p1__196391_SHARP_),cljs.core.second.call(null,p1__196391_SHARP_)], null));
});})(mst))
,mst);
}

}
});

loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$5 = (function (wg,n,h,visited,acc){
while(true){
if(cljs.core.empty_QMARK_.call(null,n)){
return acc;
} else {
if(cljs.core.empty_QMARK_.call(null,h)){
var v = cljs.core.first.call(null,n);
var h__$1 = cljs.core.into.call(null,tailrecursion.priority_map.priority_map_keyfn.call(null,cljs.core.second),loom.alg.edge_weights.call(null,wg,v));
var G__196403 = wg;
var G__196404 = cljs.core.disj.call(null,n,v);
var G__196405 = h__$1;
var G__196406 = cljs.core.conj.call(null,visited,v);
var G__196407 = acc;
wg = G__196403;
n = G__196404;
h = G__196405;
visited = G__196406;
acc = G__196407;
continue;
} else {
var next_edge = cljs.core.peek.call(null,h);
var u = cljs.core.first.call(null,cljs.core.second.call(null,next_edge));
var v = cljs.core.first.call(null,next_edge);
var update_dist = ((function (wg,n,h,visited,acc,next_edge,u,v){
return (function (h__$1,p__196396){
var vec__196397 = p__196396;
var v__$1 = cljs.core.nth.call(null,vec__196397,(0),null);
var vec__196398 = cljs.core.nth.call(null,vec__196397,(1),null);
var u__$1 = cljs.core.nth.call(null,vec__196398,(0),null);
var wt = cljs.core.nth.call(null,vec__196398,(1),null);
if((cljs.core.get.call(null,h__$1,v__$1) == null)){
return cljs.core.assoc.call(null,h__$1,v__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,wt], null));
} else {
if((cljs.core.second.call(null,cljs.core.get.call(null,h__$1,v__$1)) > wt)){
return cljs.core.assoc.call(null,h__$1,v__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,wt], null));
} else {
return h__$1;

}
}
});})(wg,n,h,visited,acc,next_edge,u,v))
;
var wt = cljs.core.second.call(null,cljs.core.second.call(null,next_edge));
var visited__$1 = cljs.core.conj.call(null,visited,v);
var h__$1 = cljs.core.reduce.call(null,update_dist,cljs.core.pop.call(null,h),cljs.core.filter.call(null,((function (wg,n,h,visited,acc,wt,visited__$1,next_edge,u,v,update_dist){
return (function (p1__196392_SHARP_){
return cljs.core.complement.call(null,visited__$1).call(null,cljs.core.first.call(null,p1__196392_SHARP_));
});})(wg,n,h,visited,acc,wt,visited__$1,next_edge,u,v,update_dist))
,loom.alg.edge_weights.call(null,wg,v)));
var G__196408 = wg;
var G__196409 = cljs.core.disj.call(null,n,v);
var G__196410 = h__$1;
var G__196411 = cljs.core.conj.call(null,visited__$1,v);
var G__196412 = cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v,wt], null));
wg = G__196408;
n = G__196409;
h = G__196410;
visited = G__196411;
acc = G__196412;
continue;

}
}
break;
}
});

loom.alg.prim_mst_edges.cljs$lang$maxFixedArity = 5;
/**
 * Minimum spanning tree of given graph. If the graph contains more than one
 * component then returns a spanning forest of minimum spanning trees.
 */
loom.alg.prim_mst = (function loom$alg$prim_mst(wg){
var mst = cljs.core.apply.call(null,loom.graph.weighted_graph,loom.alg.prim_mst_edges.call(null,wg));
if(cljs.core._EQ_.call(null,cljs.core.comp.call(null,cljs.core.count,loom.graph.nodes).call(null,wg),cljs.core.comp.call(null,cljs.core.count,loom.graph.nodes).call(null,mst))){
return mst;
} else {
return cljs.core.apply.call(null,loom.graph.add_nodes,mst,cljs.core.filter.call(null,((function (mst){
return (function (p1__196413_SHARP_){
return (loom.graph.out_degree.call(null,wg,p1__196413_SHARP_) === (0));
});})(mst))
,loom.graph.nodes.call(null,wg)));

}
});
/**
 * Returns the shortest path using A* algorithm. Returns a map of predecessors.
 */
loom.alg.astar_path = (function loom$alg$astar_path(var_args){
var args196414 = [];
var len__25279__auto___196417 = arguments.length;
var i__25280__auto___196418 = (0);
while(true){
if((i__25280__auto___196418 < len__25279__auto___196417)){
args196414.push((arguments[i__25280__auto___196418]));

var G__196419 = (i__25280__auto___196418 + (1));
i__25280__auto___196418 = G__196419;
continue;
} else {
}
break;
}

var G__196416 = args196414.length;
switch (G__196416) {
case 4:
return loom.alg.astar_path.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return loom.alg.astar_path.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args196414.length)].join('')));

}
});

loom.alg.astar_path.cljs$core$IFn$_invoke$arity$4 = (function (g,src,target,heur){
var heur__$1 = (((heur == null))?(function (x,y){
return (0);
}):heur);
var q = tailrecursion.priority_map.priority_map_keyfn.call(null,cljs.core.first,src,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null,(0),(0)], null));
var explored = cljs.core.PersistentHashMap.EMPTY;
return loom.alg.astar_path.call(null,g,src,target,heur__$1,q,explored);
});

loom.alg.astar_path.cljs$core$IFn$_invoke$arity$6 = (function (g,src,target,heur,q,explored){
while(true){
if(cljs.core.empty_QMARK_.call(null,q)){
throw (new Error("Target not reachable from source"));
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.peek.call(null,q)),target)){
var u = cljs.core.first.call(null,cljs.core.peek.call(null,q));
var parent = cljs.core.second.call(null,cljs.core.peek.call(null,q)).call(null,(1));
var explored__$1 = cljs.core.assoc.call(null,explored,target,parent);
var path = (function (){var s = target;
var acc = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((s == null)){
return acc;
} else {
if(cljs.core._EQ_.call(null,s,src)){
return cljs.core.assoc.call(null,acc,s,null);
} else {
var G__196421 = explored__$1.call(null,s);
var G__196422 = cljs.core.assoc.call(null,acc,s,explored__$1.call(null,s));
s = G__196421;
acc = G__196422;
continue;

}
}
break;
}
})();
return path;
} else {
var curr_node = cljs.core.first.call(null,cljs.core.peek.call(null,q));
var curr_dist = cljs.core.second.call(null,cljs.core.peek.call(null,q)).call(null,(2));
var explored__$1 = cljs.core.assoc.call(null,explored,curr_node,cljs.core.second.call(null,cljs.core.peek.call(null,q)).call(null,(1)));
var nbrs = cljs.core.remove.call(null,explored__$1,loom.graph.successors.call(null,g,curr_node));
var update_dist = ((function (g,src,target,heur,q,explored,curr_node,curr_dist,explored__$1,nbrs){
return (function (curr_node__$1,curr_dist__$1,q__$1,v){
var act = (curr_dist__$1 + (cljs.core.truth_(loom.graph.weighted_QMARK_.call(null,g))?loom.graph.weight.call(null,g,curr_node__$1,v):(1)));
var est = (((cljs.core.get.call(null,q__$1,v) == null))?heur.call(null,curr_node__$1,v):cljs.core.get.call(null,q__$1,v).call(null,(3)));
if(((cljs.core.get.call(null,q__$1,v) == null)) || ((cljs.core.get.call(null,q__$1,v).call(null,(2)) > act))){
return cljs.core.assoc.call(null,q__$1,v,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(act + est),curr_node__$1,act,est], null));
} else {
return q__$1;

}
});})(g,src,target,heur,q,explored,curr_node,curr_dist,explored__$1,nbrs))
;
var q__$1 = cljs.core.reduce.call(null,cljs.core.partial.call(null,update_dist,curr_node,curr_dist),cljs.core.pop.call(null,q),nbrs);
var G__196423 = g;
var G__196424 = src;
var G__196425 = target;
var G__196426 = heur;
var G__196427 = q__$1;
var G__196428 = explored__$1;
g = G__196423;
src = G__196424;
target = G__196425;
heur = G__196426;
q = G__196427;
explored = G__196428;
continue;

}
}
break;
}
});

loom.alg.astar_path.cljs$lang$maxFixedArity = 6;
/**
 * Returns the length of the shortest path between src and target using
 *  the A* algorithm
 */
loom.alg.astar_dist = (function loom$alg$astar_dist(g,src,target,heur){
var path = loom.alg.astar_path.call(null,g,src,target,heur);
var dist = cljs.core.reduce.call(null,((function (path){
return (function (c,p__196431){
var vec__196432 = p__196431;
var u = cljs.core.nth.call(null,vec__196432,(0),null);
var v = cljs.core.nth.call(null,vec__196432,(1),null);
if((v == null)){
return c;
} else {
return (c + (cljs.core.truth_(loom.graph.weighted_QMARK_.call(null,g))?loom.graph.weight.call(null,g,v,u):(1)));
}
});})(path))
,(0),path);
return dist;
});
/**
 * Returns sequence of vertices in degeneracy order.
 */
loom.alg.degeneracy_ordering = (function loom$alg$degeneracy_ordering(g){
var ordered_nodes = cljs.core.PersistentVector.EMPTY;
var node_degs = cljs.core.into.call(null,tailrecursion.priority_map.priority_map.call(null),cljs.core.zipmap.call(null,loom.graph.nodes.call(null,g),cljs.core.map.call(null,cljs.core.partial.call(null,loom.graph.out_degree,g),loom.graph.nodes.call(null,g))));
var k = (0);
while(true){
if(cljs.core.empty_QMARK_.call(null,node_degs)){
return ordered_nodes;
} else {
var vec__196436 = cljs.core.first.call(null,node_degs);
var n = cljs.core.nth.call(null,vec__196436,(0),null);
var deg = cljs.core.nth.call(null,vec__196436,(1),null);
var updated_degs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.comp.call(null,cljs.core.dec,cljs.core.second)),cljs.core.filter.call(null,cljs.core.second,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,node_degs),loom.graph.successors.call(null,g,n)))));
var G__196439 = cljs.core.conj.call(null,ordered_nodes,n);
var G__196440 = cljs.core.reduce.call(null,((function (ordered_nodes,node_degs,k,vec__196436,n,deg,updated_degs){
return (function (n_ds,p__196437){
var vec__196438 = p__196437;
var n__$1 = cljs.core.nth.call(null,vec__196438,(0),null);
var d = cljs.core.nth.call(null,vec__196438,(1),null);
return cljs.core.assoc.call(null,n_ds,n__$1,d);
});})(ordered_nodes,node_degs,k,vec__196436,n,deg,updated_degs))
,cljs.core.dissoc.call(null,node_degs,n),updated_degs);
var G__196441 = (function (){var x__24552__auto__ = k;
var y__24553__auto__ = deg;
return ((x__24552__auto__ > y__24553__auto__) ? x__24552__auto__ : y__24553__auto__);
})();
ordered_nodes = G__196439;
node_degs = G__196440;
k = G__196441;
continue;
}
break;
}
});
loom.alg.bk_gen = (function loom$alg$bk_gen(g,p__196442,stack){
var vec__196444 = p__196442;
var r = cljs.core.nth.call(null,vec__196444,(0),null);
var p = cljs.core.nth.call(null,vec__196444,(1),null);
var x = cljs.core.nth.call(null,vec__196444,(2),null);
var v_pivot = cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.max_key,cljs.core.partial.call(null,loom.graph.out_degree,g)),p);
var v = v_pivot;
var p__$1 = cljs.core.set.call(null,p);
var x__$1 = cljs.core.set.call(null,x);
var stack__$1 = stack;
while(true){
if((v == null)){
return stack__$1;
} else {
var succ_v = cljs.core.set.call(null,loom.graph.successors.call(null,g,v));
var G__196445 = cljs.core.first.call(null,clojure.set.difference.call(null,cljs.core.disj.call(null,p__$1,v),cljs.core.set.call(null,loom.graph.successors.call(null,g,v_pivot))));
var G__196446 = cljs.core.disj.call(null,p__$1,v);
var G__196447 = cljs.core.conj.call(null,x__$1,v);
var G__196448 = cljs.core.conj.call(null,stack__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,r,v),clojure.set.intersection.call(null,p__$1,succ_v),clojure.set.intersection.call(null,x__$1,succ_v)], null));
v = G__196445;
p__$1 = G__196446;
x__$1 = G__196447;
stack__$1 = G__196448;
continue;
}
break;
}
});
/**
 * An iterative implementation of Bron-Kerbosch using degeneracy ordering
 *   at the outer loop and max-degree vertex pivoting in the inner loop.
 */
loom.alg.bk = (function loom$alg$bk(g){
var vs = loom.alg.degeneracy_ordering.call(null,g);
var max_clqs = cljs.core.seq.call(null,cljs.core.PersistentVector.EMPTY);
var p = cljs.core.set.call(null,loom.graph.nodes.call(null,g));
var x = cljs.core.PersistentHashSet.EMPTY;
var stack = cljs.core.PersistentVector.EMPTY;
while(true){
if((cljs.core.empty_QMARK_.call(null,stack)) && (cljs.core.empty_QMARK_.call(null,vs))){
return max_clqs;
} else {
if(cljs.core.empty_QMARK_.call(null,stack)){
var v = cljs.core.first.call(null,vs);
var succ_v = cljs.core.set.call(null,loom.graph.successors.call(null,g,v));
var G__196451 = cljs.core.rest.call(null,vs);
var G__196452 = max_clqs;
var G__196453 = cljs.core.disj.call(null,p,v);
var G__196454 = cljs.core.conj.call(null,x,v);
var G__196455 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.fromArray([v], true),clojure.set.intersection.call(null,p,succ_v),clojure.set.intersection.call(null,x,succ_v)], null)], null);
vs = G__196451;
max_clqs = G__196452;
p = G__196453;
x = G__196454;
stack = G__196455;
continue;
} else {
var vec__196450 = cljs.core.peek.call(null,stack);
var r = cljs.core.nth.call(null,vec__196450,(0),null);
var s_p = cljs.core.nth.call(null,vec__196450,(1),null);
var s_x = cljs.core.nth.call(null,vec__196450,(2),null);
if((cljs.core.empty_QMARK_.call(null,s_p)) && (cljs.core.empty_QMARK_.call(null,s_x))){
var G__196456 = vs;
var G__196457 = cljs.core.cons.call(null,r,max_clqs);
var G__196458 = p;
var G__196459 = x;
var G__196460 = cljs.core.pop.call(null,stack);
vs = G__196456;
max_clqs = G__196457;
p = G__196458;
x = G__196459;
stack = G__196460;
continue;
} else {
if(cljs.core.empty_QMARK_.call(null,s_p)){
var G__196461 = vs;
var G__196462 = max_clqs;
var G__196463 = p;
var G__196464 = x;
var G__196465 = cljs.core.pop.call(null,stack);
vs = G__196461;
max_clqs = G__196462;
p = G__196463;
x = G__196464;
stack = G__196465;
continue;
} else {
var G__196466 = vs;
var G__196467 = max_clqs;
var G__196468 = p;
var G__196469 = x;
var G__196470 = loom.alg.bk_gen.call(null,g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,s_p,s_x], null),cljs.core.pop.call(null,stack));
vs = G__196466;
max_clqs = G__196467;
p = G__196468;
x = G__196469;
stack = G__196470;
continue;

}
}

}
}
break;
}
});
/**
 * Enumerate the maximal cliques using Bron-Kerbosch.
 */
loom.alg.maximal_cliques = (function loom$alg$maximal_cliques(g){
return loom.alg.bk.call(null,g);
});

//# sourceMappingURL=alg.js.map