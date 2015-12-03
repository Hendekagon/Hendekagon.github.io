// Compiled by ClojureScript 1.7.170 {}
goog.provide('loom.alg');
goog.require('cljs.core');
goog.require('loom.alg_generic');
goog.require('loom.graph');
goog.require('clojure.set');
goog.require('loom.flow');
goog.require('tailrecursion.priority_map');
loom.alg.traverse_all = (function loom$alg$traverse_all(nodes,traverse){
return cljs.core.persistent_BANG_.call(null,cljs.core.second.call(null,cljs.core.reduce.call(null,(function (p__42274,n){
var vec__42275 = p__42274;
var seen = cljs.core.nth.call(null,vec__42275,(0),null);
var trav = cljs.core.nth.call(null,vec__42275,(1),null);
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
var args42276 = [];
var len__25223__auto___42279 = arguments.length;
var i__25224__auto___42280 = (0);
while(true){
if((i__25224__auto___42280 < len__25223__auto___42279)){
args42276.push((arguments[i__25224__auto___42280]));

var G__42281 = (i__25224__auto___42280 + (1));
i__25224__auto___42280 = G__42281;
continue;
} else {
}
break;
}

var G__42278 = args42276.length;
switch (G__42278) {
case 1:
return loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42276.length)].join('')));

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
var args42283 = [];
var len__25223__auto___42289 = arguments.length;
var i__25224__auto___42290 = (0);
while(true){
if((i__25224__auto___42290 < len__25223__auto___42289)){
args42283.push((arguments[i__25224__auto___42290]));

var G__42291 = (i__25224__auto___42290 + (1));
i__25224__auto___42290 = G__42291;
continue;
} else {
}
break;
}

var G__42285 = args42283.length;
switch (G__42285) {
case 1:
return loom.alg.pre_span.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.pre_span.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42283.length)].join('')));

}
});

loom.alg.pre_span.cljs$core$IFn$_invoke$arity$1 = (function (g){
return cljs.core.second.call(null,cljs.core.reduce.call(null,(function (p__42286,n){
var vec__42287 = p__42286;
var seen = cljs.core.nth.call(null,vec__42287,(0),null);
var span = cljs.core.nth.call(null,vec__42287,(1),null);
if(cljs.core.truth_(seen.call(null,n))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,span], null);
} else {
var vec__42288 = loom.alg_generic.pre_span.call(null,loom.graph.successors.call(null,g),n,new cljs.core.Keyword(null,"seen","seen",-518999789),seen,new cljs.core.Keyword(null,"return-seen","return-seen",308792727),true);
var cspan = cljs.core.nth.call(null,vec__42288,(0),null);
var seen__$1 = cljs.core.nth.call(null,vec__42288,(1),null);
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
var args42293 = [];
var len__25223__auto___42299 = arguments.length;
var i__25224__auto___42300 = (0);
while(true){
if((i__25224__auto___42300 < len__25223__auto___42299)){
args42293.push((arguments[i__25224__auto___42300]));

var G__42301 = (i__25224__auto___42300 + (1));
i__25224__auto___42300 = G__42301;
continue;
} else {
}
break;
}

var G__42298 = args42293.length;
switch (G__42298) {
case 1:
return loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__25242__auto__ = (new cljs.core.IndexedSeq(args42293.slice((2)),(0)));
return loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25242__auto__);

}
});

loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$1 = (function (g){
return loom.alg.traverse_all.call(null,loom.graph.nodes.call(null,g),cljs.core.partial.call(null,loom.alg_generic.post_traverse,loom.graph.successors.call(null,g)));
});

loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (g,start,opts){
return cljs.core.apply.call(null,loom.alg_generic.post_traverse,loom.graph.successors.call(null,g),start,opts);
});

loom.alg.post_traverse.cljs$lang$applyTo = (function (seq42294){
var G__42295 = cljs.core.first.call(null,seq42294);
var seq42294__$1 = cljs.core.next.call(null,seq42294);
var G__42296 = cljs.core.first.call(null,seq42294__$1);
var seq42294__$2 = cljs.core.next.call(null,seq42294__$1);
return loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__42295,G__42296,seq42294__$2);
});

loom.alg.post_traverse.cljs$lang$maxFixedArity = (2);
/**
 * Topological sort of a directed acyclic graph (DAG). Returns nil if
 *   g contains any cycles.
 */
loom.alg.topsort = (function loom$alg$topsort(var_args){
var args42303 = [];
var len__25223__auto___42310 = arguments.length;
var i__25224__auto___42311 = (0);
while(true){
if((i__25224__auto___42311 < len__25223__auto___42310)){
args42303.push((arguments[i__25224__auto___42311]));

var G__42312 = (i__25224__auto___42311 + (1));
i__25224__auto___42311 = G__42312;
continue;
} else {
}
break;
}

var G__42305 = args42303.length;
switch (G__42305) {
case 1:
return loom.alg.topsort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.topsort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42303.length)].join('')));

}
});

loom.alg.topsort.cljs$core$IFn$_invoke$arity$1 = (function (g){
var seen = cljs.core.PersistentHashSet.EMPTY;
var result = cljs.core.List.EMPTY;
var G__42307 = cljs.core.seq.call(null,loom.graph.nodes.call(null,g));
var vec__42308 = G__42307;
var n = cljs.core.nth.call(null,vec__42308,(0),null);
var ns = cljs.core.nthnext.call(null,vec__42308,(1));
var seen__$1 = seen;
var result__$1 = result;
var G__42307__$1 = G__42307;
while(true){
var seen__$2 = seen__$1;
var result__$2 = result__$1;
var vec__42309 = G__42307__$1;
var n__$1 = cljs.core.nth.call(null,vec__42309,(0),null);
var ns__$1 = cljs.core.nthnext.call(null,vec__42309,(1));
if(cljs.core.not.call(null,n__$1)){
return result__$2;
} else {
if(cljs.core.truth_(seen__$2.call(null,n__$1))){
var G__42314 = seen__$2;
var G__42315 = result__$2;
var G__42316 = ns__$1;
seen__$1 = G__42314;
result__$1 = G__42315;
G__42307__$1 = G__42316;
continue;
} else {
var temp__4425__auto__ = loom.alg_generic.topsort_component.call(null,loom.graph.successors.call(null,g),n__$1,seen__$2,seen__$2);
if(cljs.core.truth_(temp__4425__auto__)){
var cresult = temp__4425__auto__;
var G__42317 = cljs.core.into.call(null,seen__$2,cresult);
var G__42318 = cljs.core.concat.call(null,cresult,result__$2);
var G__42319 = ns__$1;
seen__$1 = G__42317;
result__$1 = G__42318;
G__42307__$1 = G__42319;
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
var args42320 = [];
var len__25223__auto___42332 = arguments.length;
var i__25224__auto___42333 = (0);
while(true){
if((i__25224__auto___42333 < len__25223__auto___42332)){
args42320.push((arguments[i__25224__auto___42333]));

var G__42334 = (i__25224__auto___42333 + (1));
i__25224__auto___42333 = G__42334;
continue;
} else {
}
break;
}

var G__42325 = args42320.length;
switch (G__42325) {
case 1:
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25242__auto__ = (new cljs.core.IndexedSeq(args42320.slice((2)),(0)));
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25242__auto__);

}
});

loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$1 = (function (g){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__42326,n){
var vec__42327 = p__42326;
var cc = cljs.core.nth.call(null,vec__42327,(0),null);
var predmap = cljs.core.nth.call(null,vec__42327,(1),null);
if(cljs.core.contains_QMARK_.call(null,predmap,n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc,predmap], null);
} else {
return cljs.core.reduce.call(null,((function (vec__42327,cc,predmap){
return (function (p__42328,p__42329){
var vec__42330 = p__42328;
var cc__$1 = cljs.core.nth.call(null,vec__42330,(0),null);
var _ = cljs.core.nth.call(null,vec__42330,(1),null);
var vec__42331 = p__42329;
var n__$1 = cljs.core.nth.call(null,vec__42331,(0),null);
var pm = cljs.core.nth.call(null,vec__42331,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__42331,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,cc__$1,n__$1),pm], null);
});})(vec__42327,cc,predmap))
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

loom.alg.bf_traverse.cljs$lang$applyTo = (function (seq42321){
var G__42322 = cljs.core.first.call(null,seq42321);
var seq42321__$1 = cljs.core.next.call(null,seq42321);
var G__42323 = cljs.core.first.call(null,seq42321__$1);
var seq42321__$2 = cljs.core.next.call(null,seq42321__$1);
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__42322,G__42323,seq42321__$2);
});

loom.alg.bf_traverse.cljs$lang$maxFixedArity = (2);
/**
 * Returns a breadth-first spanning tree of the form {node [successors]}
 */
loom.alg.bf_span = (function loom$alg$bf_span(var_args){
var args42336 = [];
var len__25223__auto___42339 = arguments.length;
var i__25224__auto___42340 = (0);
while(true){
if((i__25224__auto___42340 < len__25223__auto___42339)){
args42336.push((arguments[i__25224__auto___42340]));

var G__42341 = (i__25224__auto___42340 + (1));
i__25224__auto___42340 = G__42341;
continue;
} else {
}
break;
}

var G__42338 = args42336.length;
switch (G__42338) {
case 1:
return loom.alg.bf_span.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.bf_span.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42336.length)].join('')));

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
var args__25230__auto__ = [];
var len__25223__auto___42347 = arguments.length;
var i__25224__auto___42348 = (0);
while(true){
if((i__25224__auto___42348 < len__25223__auto___42347)){
args__25230__auto__.push((arguments[i__25224__auto___42348]));

var G__42349 = (i__25224__auto___42348 + (1));
i__25224__auto___42348 = G__42349;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((3) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((3)),(0))):null);
return loom.alg.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25231__auto__);
});

loom.alg.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,start,end,opts){
return cljs.core.apply.call(null,loom.alg_generic.bf_path,loom.graph.successors.call(null,g),start,end,opts);
});

loom.alg.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg.bf_path.cljs$lang$applyTo = (function (seq42343){
var G__42344 = cljs.core.first.call(null,seq42343);
var seq42343__$1 = cljs.core.next.call(null,seq42343);
var G__42345 = cljs.core.first.call(null,seq42343__$1);
var seq42343__$2 = cljs.core.next.call(null,seq42343__$1);
var G__42346 = cljs.core.first.call(null,seq42343__$2);
var seq42343__$3 = cljs.core.next.call(null,seq42343__$2);
return loom.alg.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__42344,G__42345,G__42346,seq42343__$3);
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
var args42350 = [];
var len__25223__auto___42353 = arguments.length;
var i__25224__auto___42354 = (0);
while(true){
if((i__25224__auto___42354 < len__25223__auto___42353)){
args42350.push((arguments[i__25224__auto___42354]));

var G__42355 = (i__25224__auto___42354 + (1));
i__25224__auto___42354 = G__42355;
continue;
} else {
}
break;
}

var G__42352 = args42350.length;
switch (G__42352) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42350.length)].join('')));

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
var args42357 = [];
var len__25223__auto___42360 = arguments.length;
var i__25224__auto___42361 = (0);
while(true){
if((i__25224__auto___42361 < len__25223__auto___42360)){
args42357.push((arguments[i__25224__auto___42361]));

var G__42362 = (i__25224__auto___42361 + (1));
i__25224__auto___42361 = G__42362;
continue;
} else {
}
break;
}

var G__42359 = args42357.length;
switch (G__42359) {
case 1:
return loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42357.length)].join('')));

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
loom.alg.can_relax_edge_QMARK_ = (function loom$alg$can_relax_edge_QMARK_(p__42364,weight,costs){
var vec__42366 = p__42364;
var u = cljs.core.nth.call(null,vec__42366,(0),null);
var v = cljs.core.nth.call(null,vec__42366,(1),null);
var edge = vec__42366;
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
loom.alg.relax_edge = (function loom$alg$relax_edge(p__42367,weight,p__42368){
var vec__42371 = p__42367;
var u = cljs.core.nth.call(null,vec__42371,(0),null);
var v = cljs.core.nth.call(null,vec__42371,(1),null);
var edge = vec__42371;
var vec__42372 = p__42368;
var costs = cljs.core.nth.call(null,vec__42372,(0),null);
var paths = cljs.core.nth.call(null,vec__42372,(1),null);
var estimates = vec__42372;
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
return cljs.core.reduce.call(null,(function (estimates__$1,p__42375){
var vec__42376 = p__42375;
var u = cljs.core.nth.call(null,vec__42376,(0),null);
var v = cljs.core.nth.call(null,vec__42376,(1),null);
var edge = vec__42376;
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
var vec__42381 = cljs.core.reduce.call(null,((function (initial_estimates){
return (function (estimates,_){
return loom.alg.relax_edges.call(null,g,start,estimates);
});})(initial_estimates))
,initial_estimates,cljs.core.range.call(null,(cljs.core.count.call(null,loom.graph.nodes.call(null,g)) - (1))));
var costs = cljs.core.nth.call(null,vec__42381,(0),null);
var paths = cljs.core.nth.call(null,vec__42381,(1),null);
var edges = loom.graph.edges.call(null,g);
if(cljs.core.truth_(cljs.core.some.call(null,((function (initial_estimates,vec__42381,costs,paths,edges){
return (function (p__42382){
var vec__42383 = p__42382;
var u = cljs.core.nth.call(null,vec__42383,(0),null);
var v = cljs.core.nth.call(null,vec__42383,(1),null);
var edge = vec__42383;
return loom.alg.can_relax_edge_QMARK_.call(null,edge,loom.graph.weight.call(null,g,u,v),costs);
});})(initial_estimates,vec__42381,costs,paths,edges))
,edges))){
return false;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [costs,cljs.core.reduce.call(null,((function (initial_estimates,vec__42381,costs,paths,edges){
return (function (final_paths,v){
return cljs.core.assoc.call(null,final_paths,v,(function (){var node = v;
var path = cljs.core.List.EMPTY;
while(true){
if(cljs.core.truth_(node)){
var G__42384 = cljs.core.get.call(null,paths,node);
var G__42385 = cljs.core.cons.call(null,node,path);
node = G__42384;
path = G__42385;
continue;
} else {
return path;
}
break;
}
})());
});})(initial_estimates,vec__42381,costs,paths,edges))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,((function (initial_estimates,vec__42381,costs,paths,edges){
return (function (p1__42377_SHARP_){
return cljs.core._EQ_.call(null,Infinity,cljs.core.get.call(null,costs,p1__42377_SHARP_));
});})(initial_estimates,vec__42381,costs,paths,edges))
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
return cljs.core.reverse.call(null,(cljs.core.truth_(loom.graph.weighted_QMARK_.call(null,g))?cljs.core.reduce.call(null,(function (path1,p__42390){
var vec__42391 = p__42390;
var n = cljs.core.nth.call(null,vec__42391,(0),null);
var state = cljs.core.nth.call(null,vec__42391,(1),null);
var path2 = loom.alg_generic.trace_path.call(null,cljs.core.comp.call(null,cljs.core.second,state),n);
if((cljs.core.count.call(null,path1) < cljs.core.count.call(null,path2))){
return path2;
} else {
return path1;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),loom.alg.dijkstra_traverse.call(null,g,start,cljs.core.vector)):cljs.core.reduce.call(null,(function (path1,p__42392){
var vec__42393 = p__42392;
var n = cljs.core.nth.call(null,vec__42393,(0),null);
var predmap = cljs.core.nth.call(null,vec__42393,(1),null);
var _ = cljs.core.nth.call(null,vec__42393,(2),null);
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
var es = (function (){var iter__24937__auto__ = ((function (q){
return (function loom$alg$bellman_ford_transform_$_iter__42401(s__42402){
return (new cljs.core.LazySeq(null,((function (q){
return (function (){
var s__42402__$1 = s__42402;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__42402__$1);
if(temp__4425__auto__){
var s__42402__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42402__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__42402__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__42404 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__42403 = (0);
while(true){
if((i__42403 < size__24936__auto__)){
var v = cljs.core._nth.call(null,c__24935__auto__,i__42403);
cljs.core.chunk_append.call(null,b__42404,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,v,(0)], null));

var G__42408 = (i__42403 + (1));
i__42403 = G__42408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42404),loom$alg$bellman_ford_transform_$_iter__42401.call(null,cljs.core.chunk_rest.call(null,s__42402__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42404),null);
}
} else {
var v = cljs.core.first.call(null,s__42402__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,v,(0)], null),loom$alg$bellman_ford_transform_$_iter__42401.call(null,cljs.core.rest.call(null,s__42402__$2)));
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
return iter__24937__auto__.call(null,loom.graph.nodes.call(null,wg));
})();
var bf_results = loom.alg.bellman_ford.call(null,loom.graph.add_edges_STAR_.call(null,wg,es),q);
if(cljs.core.truth_(bf_results)){
var vec__42405 = bf_results;
var dist_q = cljs.core.nth.call(null,vec__42405,(0),null);
var _ = cljs.core.nth.call(null,vec__42405,(1),null);
var new_es = cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.second,((function (vec__42405,dist_q,_,q,es,bf_results){
return (function (p__42406){
var vec__42407 = p__42406;
var u = cljs.core.nth.call(null,vec__42407,(0),null);
var v = cljs.core.nth.call(null,vec__42407,(1),null);
return (loom.graph.weight.call(null,wg,u,v) + (dist_q.call(null,u) - dist_q.call(null,v)));
});})(vec__42405,dist_q,_,q,es,bf_results))
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
var g__$1 = (cljs.core.truth_((function (){var and__24153__auto__ = loom.graph.weighted_QMARK_.call(null,g);
if(cljs.core.truth_(and__24153__auto__)){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._GT_,(0)),cljs.core.map.call(null,loom.graph.weight.call(null,g),loom.graph.edges.call(null,g)));
} else {
return and__24153__auto__;
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
var nb = ((cljs.core.not.call(null,loom.graph.directed_QMARK_.call(null,g)))?loom.graph.successors.call(null,g):(function (p1__42409_SHARP_){
return cljs.core.concat.call(null,loom.graph.successors.call(null,g,p1__42409_SHARP_),loom.graph.predecessors.call(null,g,p1__42409_SHARP_));
}));
return cljs.core.first.call(null,cljs.core.reduce.call(null,((function (nb){
return (function (p__42417,n){
var vec__42418 = p__42417;
var cc = cljs.core.nth.call(null,vec__42418,(0),null);
var predmap = cljs.core.nth.call(null,vec__42418,(1),null);
if(cljs.core.contains_QMARK_.call(null,predmap,n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc,predmap], null);
} else {
var vec__42419 = cljs.core.reduce.call(null,((function (vec__42418,cc,predmap,nb){
return (function (p__42420,p__42421){
var vec__42422 = p__42420;
var c = cljs.core.nth.call(null,vec__42422,(0),null);
var _ = cljs.core.nth.call(null,vec__42422,(1),null);
var vec__42423 = p__42421;
var n__$1 = cljs.core.nth.call(null,vec__42423,(0),null);
var pm = cljs.core.nth.call(null,vec__42423,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__42423,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,c,n__$1),pm], null);
});})(vec__42418,cc,predmap,nb))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null], null),loom.alg_generic.bf_traverse.call(null,nb,n,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector,new cljs.core.Keyword(null,"seen","seen",-518999789),predmap));
var c = cljs.core.nth.call(null,vec__42419,(0),null);
var pm = cljs.core.nth.call(null,vec__42419,(1),null);
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
var G__42426 = cljs.core.rest.call(null,stack);
var G__42427 = seen;
var G__42428 = cc;
stack = G__42426;
seen = G__42427;
cc = G__42428;
continue;
} else {
var vec__42425 = loom.alg.post_traverse.call(null,gt,cljs.core.first.call(null,stack),new cljs.core.Keyword(null,"seen","seen",-518999789),seen,new cljs.core.Keyword(null,"return-seen","return-seen",308792727),true);
var c = cljs.core.nth.call(null,vec__42425,(0),null);
var seen__$1 = cljs.core.nth.call(null,vec__42425,(1),null);
var G__42429 = cljs.core.rest.call(null,stack);
var G__42430 = seen__$1;
var G__42431 = cljs.core.conj_BANG_.call(null,cc,c);
stack = G__42429;
seen = G__42430;
cc = G__42431;
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
var args__25230__auto__ = [];
var len__25223__auto___42437 = arguments.length;
var i__25224__auto___42438 = (0);
while(true){
if((i__25224__auto___42438 < len__25223__auto___42437)){
args__25230__auto__.push((arguments[i__25224__auto___42438]));

var G__42439 = (i__25224__auto___42438 + (1));
i__25224__auto___42438 = G__42439;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((1) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((1)),(0))):null);
return loom.alg.density.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25231__auto__);
});

loom.alg.density.cljs$core$IFn$_invoke$arity$variadic = (function (g,p__42434){
var map__42435 = p__42434;
var map__42435__$1 = ((((!((map__42435 == null)))?((((map__42435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42435):map__42435);
var loops = cljs.core.get.call(null,map__42435__$1,new cljs.core.Keyword(null,"loops","loops",-1766681555),false);
var order = cljs.core.count.call(null,loom.graph.nodes.call(null,g));
return (cljs.core.count.call(null,loom.graph.edges.call(null,g)) / (order * (cljs.core.truth_(loops)?order:(order - (1)))));
});

loom.alg.density.cljs$lang$maxFixedArity = (1);

loom.alg.density.cljs$lang$applyTo = (function (seq42432){
var G__42433 = cljs.core.first.call(null,seq42432);
var seq42432__$1 = cljs.core.next.call(null,seq42432);
return loom.alg.density.cljs$core$IFn$_invoke$arity$variadic(G__42433,seq42432__$1);
});
/**
 * Returns nodes with no connections to other nodes (i.e., isolated nodes)
 */
loom.alg.loners = (function loom$alg$loners(g){
var degree_total = (cljs.core.truth_(loom.graph.directed_QMARK_.call(null,g))?(function (p1__42440_SHARP_){
return (loom.graph.in_degree.call(null,g,p1__42440_SHARP_) + loom.graph.out_degree.call(null,g,p1__42440_SHARP_));
}):(function (p1__42441_SHARP_){
return loom.graph.out_degree.call(null,g,p1__42441_SHARP_);
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
return cljs.core.second.call(null,cljs.core.reduce.call(null,(function (p__42444,e){
var vec__42445 = p__42444;
var seen = cljs.core.nth.call(null,vec__42445,(0),null);
var es = cljs.core.nth.call(null,vec__42445,(1),null);
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
return (function (p1__42446_SHARP_){
var and__24153__auto__ = coloring__$1.call(null,p1__42446_SHARP_);
if(cljs.core.truth_(and__24153__auto__)){
return cljs.core._EQ_.call(null,coloring__$1.call(null,v),coloring__$1.call(null,p1__42446_SHARP_));
} else {
return and__24153__auto__;
}
});})(coloring__$1,queue,v,color,nbrs))
,nbrs))){
return null;
} else {
var nbrs__$1 = cljs.core.remove.call(null,coloring__$1,nbrs);
var G__42487 = cljs.core.into.call(null,coloring__$1,(function (){var iter__24937__auto__ = ((function (coloring__$1,queue,nbrs__$1,v,color,nbrs){
return (function loom$alg$bipartite_color_$_color_component_$_iter__42479(s__42480){
return (new cljs.core.LazySeq(null,((function (coloring__$1,queue,nbrs__$1,v,color,nbrs){
return (function (){
var s__42480__$1 = s__42480;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__42480__$1);
if(temp__4425__auto__){
var s__42480__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42480__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__42480__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__42482 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__42481 = (0);
while(true){
if((i__42481 < size__24936__auto__)){
var nbr = cljs.core._nth.call(null,c__24935__auto__,i__42481);
cljs.core.chunk_append.call(null,b__42482,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,color], null));

var G__42489 = (i__42481 + (1));
i__42481 = G__42489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42482),loom$alg$bipartite_color_$_color_component_$_iter__42479.call(null,cljs.core.chunk_rest.call(null,s__42480__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42482),null);
}
} else {
var nbr = cljs.core.first.call(null,s__42480__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,color], null),loom$alg$bipartite_color_$_color_component_$_iter__42479.call(null,cljs.core.rest.call(null,s__42480__$2)));
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
return iter__24937__auto__.call(null,nbrs__$1);
})());
var G__42488 = cljs.core.into.call(null,cljs.core.pop.call(null,queue),nbrs__$1);
coloring__$1 = G__42487;
queue = G__42488;
continue;
}
}
break;
}
});
var G__42484 = cljs.core.seq.call(null,loom.graph.nodes.call(null,g));
var vec__42485 = G__42484;
var node = cljs.core.nth.call(null,vec__42485,(0),null);
var nodes = cljs.core.nthnext.call(null,vec__42485,(1));
var coloring = cljs.core.PersistentArrayMap.EMPTY;
var G__42484__$1 = G__42484;
var coloring__$1 = coloring;
while(true){
var vec__42486 = G__42484__$1;
var node__$1 = cljs.core.nth.call(null,vec__42486,(0),null);
var nodes__$1 = cljs.core.nthnext.call(null,vec__42486,(1));
var coloring__$2 = coloring__$1;
if(cljs.core.truth_(coloring__$2)){
if((node__$1 == null)){
return coloring__$2;
} else {
if(cljs.core.truth_(coloring__$2.call(null,node__$1))){
var G__42490 = nodes__$1;
var G__42491 = coloring__$2;
G__42484__$1 = G__42490;
coloring__$1 = G__42491;
continue;
} else {
var G__42492 = nodes__$1;
var G__42493 = color_component.call(null,coloring__$2,node__$1);
G__42484__$1 = G__42492;
coloring__$1 = G__42493;
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
return (function (p__42498,p__42499){
var vec__42500 = p__42498;
var s1 = cljs.core.nth.call(null,vec__42500,(0),null);
var s2 = cljs.core.nth.call(null,vec__42500,(1),null);
var vec__42501 = p__42499;
var node = cljs.core.nth.call(null,vec__42501,(0),null);
var color = cljs.core.nth.call(null,vec__42501,(1),null);
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
return (function (p1__42502_SHARP_){
return cljs.core.get.call(null,coloring,p1__42502_SHARP_);
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
return (cljs.core.every_QMARK_.call(null,different_colors_QMARK_,loom.graph.nodes.call(null,g))) && (cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__42503_SHARP_){
return cljs.core.get.call(null,coloring,p1__42503_SHARP_);
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
var G__42504 = cljs.core.rest.call(null,node_seq);
var G__42505 = cljs.core.conj.call(null,coloring,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,node_color], null));
var G__42506 = cljs.core.conj.call(null,colors,node_color);
node_seq = G__42504;
coloring = G__42505;
colors = G__42506;
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
var args__25230__auto__ = [];
var len__25223__auto___42516 = arguments.length;
var i__25224__auto___42517 = (0);
while(true){
if((i__25224__auto___42517 < len__25223__auto___42516)){
args__25230__auto__.push((arguments[i__25224__auto___42517]));

var G__42518 = (i__25224__auto___42517 + (1));
i__25224__auto___42517 = G__42518;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((3) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((3)),(0))):null);
return loom.alg.max_flow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25231__auto__);
});

loom.alg.max_flow.cljs$core$IFn$_invoke$arity$variadic = (function (g,source,sink,p__42511){
var map__42512 = p__42511;
var map__42512__$1 = ((((!((map__42512 == null)))?((((map__42512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42512):map__42512);
var method = cljs.core.get.call(null,map__42512__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"edmonds-karp","edmonds-karp",-1793813821));
var method_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edmonds-karp","edmonds-karp",-1793813821),null], null), null);
var n = loom.graph.successors.call(null,g);
var i = loom.graph.predecessors.call(null,g);
var c = loom.graph.weight.call(null,g);
var s = source;
var t = sink;
var vec__42514 = (function (){var G__42515 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__42515) {
case "edmonds-karp":
return loom.flow.edmonds_karp.call(null,n,i,c,s,t);

break;
default:
throw (new java.lang.RuntimeException([cljs.core.str("Method not found.  Choose from: "),cljs.core.str(method_set)].join('')));

}
})();
var flow_map = cljs.core.nth.call(null,vec__42514,(0),null);
var flow_value = cljs.core.nth.call(null,vec__42514,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow_map,flow_value], null);
});

loom.alg.max_flow.cljs$lang$maxFixedArity = (3);

loom.alg.max_flow.cljs$lang$applyTo = (function (seq42507){
var G__42508 = cljs.core.first.call(null,seq42507);
var seq42507__$1 = cljs.core.next.call(null,seq42507);
var G__42509 = cljs.core.first.call(null,seq42507__$1);
var seq42507__$2 = cljs.core.next.call(null,seq42507__$1);
var G__42510 = cljs.core.first.call(null,seq42507__$2);
var seq42507__$3 = cljs.core.next.call(null,seq42507__$2);
return loom.alg.max_flow.cljs$core$IFn$_invoke$arity$variadic(G__42508,G__42509,G__42510,seq42507__$3);
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
return (function (p1__42520_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42520_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,edge_weight.call(null,v,p1__42520_SHARP_)], null)], null));
});})(edge_weight))
,loom.graph.successors.call(null,wg,v));
});
/**
 * An edge-list of an minimum spanning tree along with weights that
 *   represents an MST of the given graph. Returns the MST edge-list
 *   for un-weighted graphs.
 */
loom.alg.prim_mst_edges = (function loom$alg$prim_mst_edges(var_args){
var args42523 = [];
var len__25223__auto___42529 = arguments.length;
var i__25224__auto___42530 = (0);
while(true){
if((i__25224__auto___42530 < len__25223__auto___42529)){
args42523.push((arguments[i__25224__auto___42530]));

var G__42531 = (i__25224__auto___42530 + (1));
i__25224__auto___42530 = G__42531;
continue;
} else {
}
break;
}

var G__42525 = args42523.length;
switch (G__42525) {
case 1:
return loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 5:
return loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42523.length)].join('')));

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
return (function (p1__42521_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,p1__42521_SHARP_),cljs.core.second.call(null,p1__42521_SHARP_)], null));
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
var G__42533 = wg;
var G__42534 = cljs.core.disj.call(null,n,v);
var G__42535 = h__$1;
var G__42536 = cljs.core.conj.call(null,visited,v);
var G__42537 = acc;
wg = G__42533;
n = G__42534;
h = G__42535;
visited = G__42536;
acc = G__42537;
continue;
} else {
var next_edge = cljs.core.peek.call(null,h);
var u = cljs.core.first.call(null,cljs.core.second.call(null,next_edge));
var v = cljs.core.first.call(null,next_edge);
var update_dist = ((function (wg,n,h,visited,acc,next_edge,u,v){
return (function (h__$1,p__42526){
var vec__42527 = p__42526;
var v__$1 = cljs.core.nth.call(null,vec__42527,(0),null);
var vec__42528 = cljs.core.nth.call(null,vec__42527,(1),null);
var u__$1 = cljs.core.nth.call(null,vec__42528,(0),null);
var wt = cljs.core.nth.call(null,vec__42528,(1),null);
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
return (function (p1__42522_SHARP_){
return cljs.core.complement.call(null,visited__$1).call(null,cljs.core.first.call(null,p1__42522_SHARP_));
});})(wg,n,h,visited,acc,wt,visited__$1,next_edge,u,v,update_dist))
,loom.alg.edge_weights.call(null,wg,v)));
var G__42538 = wg;
var G__42539 = cljs.core.disj.call(null,n,v);
var G__42540 = h__$1;
var G__42541 = cljs.core.conj.call(null,visited__$1,v);
var G__42542 = cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v,wt], null));
wg = G__42538;
n = G__42539;
h = G__42540;
visited = G__42541;
acc = G__42542;
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
return (function (p1__42543_SHARP_){
return (loom.graph.out_degree.call(null,wg,p1__42543_SHARP_) === (0));
});})(mst))
,loom.graph.nodes.call(null,wg)));

}
});
/**
 * Returns the shortest path using A* algorithm. Returns a map of predecessors.
 */
loom.alg.astar_path = (function loom$alg$astar_path(var_args){
var args42544 = [];
var len__25223__auto___42547 = arguments.length;
var i__25224__auto___42548 = (0);
while(true){
if((i__25224__auto___42548 < len__25223__auto___42547)){
args42544.push((arguments[i__25224__auto___42548]));

var G__42549 = (i__25224__auto___42548 + (1));
i__25224__auto___42548 = G__42549;
continue;
} else {
}
break;
}

var G__42546 = args42544.length;
switch (G__42546) {
case 4:
return loom.alg.astar_path.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return loom.alg.astar_path.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42544.length)].join('')));

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
var G__42551 = explored__$1.call(null,s);
var G__42552 = cljs.core.assoc.call(null,acc,s,explored__$1.call(null,s));
s = G__42551;
acc = G__42552;
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
var G__42553 = g;
var G__42554 = src;
var G__42555 = target;
var G__42556 = heur;
var G__42557 = q__$1;
var G__42558 = explored__$1;
g = G__42553;
src = G__42554;
target = G__42555;
heur = G__42556;
q = G__42557;
explored = G__42558;
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
return (function (c,p__42561){
var vec__42562 = p__42561;
var u = cljs.core.nth.call(null,vec__42562,(0),null);
var v = cljs.core.nth.call(null,vec__42562,(1),null);
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
var vec__42566 = cljs.core.first.call(null,node_degs);
var n = cljs.core.nth.call(null,vec__42566,(0),null);
var deg = cljs.core.nth.call(null,vec__42566,(1),null);
var updated_degs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.comp.call(null,cljs.core.dec,cljs.core.second)),cljs.core.filter.call(null,cljs.core.second,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,node_degs),loom.graph.successors.call(null,g,n)))));
var G__42569 = cljs.core.conj.call(null,ordered_nodes,n);
var G__42570 = cljs.core.reduce.call(null,((function (ordered_nodes,node_degs,k,vec__42566,n,deg,updated_degs){
return (function (n_ds,p__42567){
var vec__42568 = p__42567;
var n__$1 = cljs.core.nth.call(null,vec__42568,(0),null);
var d = cljs.core.nth.call(null,vec__42568,(1),null);
return cljs.core.assoc.call(null,n_ds,n__$1,d);
});})(ordered_nodes,node_degs,k,vec__42566,n,deg,updated_degs))
,cljs.core.dissoc.call(null,node_degs,n),updated_degs);
var G__42571 = (function (){var x__24496__auto__ = k;
var y__24497__auto__ = deg;
return ((x__24496__auto__ > y__24497__auto__) ? x__24496__auto__ : y__24497__auto__);
})();
ordered_nodes = G__42569;
node_degs = G__42570;
k = G__42571;
continue;
}
break;
}
});
loom.alg.bk_gen = (function loom$alg$bk_gen(g,p__42572,stack){
var vec__42574 = p__42572;
var r = cljs.core.nth.call(null,vec__42574,(0),null);
var p = cljs.core.nth.call(null,vec__42574,(1),null);
var x = cljs.core.nth.call(null,vec__42574,(2),null);
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
var G__42575 = cljs.core.first.call(null,clojure.set.difference.call(null,cljs.core.disj.call(null,p__$1,v),cljs.core.set.call(null,loom.graph.successors.call(null,g,v_pivot))));
var G__42576 = cljs.core.disj.call(null,p__$1,v);
var G__42577 = cljs.core.conj.call(null,x__$1,v);
var G__42578 = cljs.core.conj.call(null,stack__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,r,v),clojure.set.intersection.call(null,p__$1,succ_v),clojure.set.intersection.call(null,x__$1,succ_v)], null));
v = G__42575;
p__$1 = G__42576;
x__$1 = G__42577;
stack__$1 = G__42578;
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
var G__42581 = cljs.core.rest.call(null,vs);
var G__42582 = max_clqs;
var G__42583 = cljs.core.disj.call(null,p,v);
var G__42584 = cljs.core.conj.call(null,x,v);
var G__42585 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.fromArray([v], true),clojure.set.intersection.call(null,p,succ_v),clojure.set.intersection.call(null,x,succ_v)], null)], null);
vs = G__42581;
max_clqs = G__42582;
p = G__42583;
x = G__42584;
stack = G__42585;
continue;
} else {
var vec__42580 = cljs.core.peek.call(null,stack);
var r = cljs.core.nth.call(null,vec__42580,(0),null);
var s_p = cljs.core.nth.call(null,vec__42580,(1),null);
var s_x = cljs.core.nth.call(null,vec__42580,(2),null);
if((cljs.core.empty_QMARK_.call(null,s_p)) && (cljs.core.empty_QMARK_.call(null,s_x))){
var G__42586 = vs;
var G__42587 = cljs.core.cons.call(null,r,max_clqs);
var G__42588 = p;
var G__42589 = x;
var G__42590 = cljs.core.pop.call(null,stack);
vs = G__42586;
max_clqs = G__42587;
p = G__42588;
x = G__42589;
stack = G__42590;
continue;
} else {
if(cljs.core.empty_QMARK_.call(null,s_p)){
var G__42591 = vs;
var G__42592 = max_clqs;
var G__42593 = p;
var G__42594 = x;
var G__42595 = cljs.core.pop.call(null,stack);
vs = G__42591;
max_clqs = G__42592;
p = G__42593;
x = G__42594;
stack = G__42595;
continue;
} else {
var G__42596 = vs;
var G__42597 = max_clqs;
var G__42598 = p;
var G__42599 = x;
var G__42600 = loom.alg.bk_gen.call(null,g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,s_p,s_x], null),cljs.core.pop.call(null,stack));
vs = G__42596;
max_clqs = G__42597;
p = G__42598;
x = G__42599;
stack = G__42600;
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