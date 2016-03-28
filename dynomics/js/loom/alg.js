// Compiled by ClojureScript 1.8.34 {}
goog.provide('loom.alg');
goog.require('cljs.core');
goog.require('loom.alg_generic');
goog.require('loom.graph');
goog.require('clojure.set');
goog.require('loom.flow');
goog.require('tailrecursion.priority_map');
loom.alg.traverse_all = (function loom$alg$traverse_all(nodes,traverse){
return cljs.core.persistent_BANG_.call(null,cljs.core.second.call(null,cljs.core.reduce.call(null,(function (p__454239,n){
var vec__454240 = p__454239;
var seen = cljs.core.nth.call(null,vec__454240,(0),null);
var trav = cljs.core.nth.call(null,vec__454240,(1),null);
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
var args454244 = [];
var len__36260__auto___454249 = arguments.length;
var i__36261__auto___454250 = (0);
while(true){
if((i__36261__auto___454250 < len__36260__auto___454249)){
args454244.push((arguments[i__36261__auto___454250]));

var G__454251 = (i__36261__auto___454250 + (1));
i__36261__auto___454250 = G__454251;
continue;
} else {
}
break;
}

var G__454247 = args454244.length;
switch (G__454247) {
case 1:
return loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args454244.length)].join('')));

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
var args454255 = [];
var len__36260__auto___454265 = arguments.length;
var i__36261__auto___454266 = (0);
while(true){
if((i__36261__auto___454266 < len__36260__auto___454265)){
args454255.push((arguments[i__36261__auto___454266]));

var G__454267 = (i__36261__auto___454266 + (1));
i__36261__auto___454266 = G__454267;
continue;
} else {
}
break;
}

var G__454260 = args454255.length;
switch (G__454260) {
case 1:
return loom.alg.pre_span.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.pre_span.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args454255.length)].join('')));

}
});

loom.alg.pre_span.cljs$core$IFn$_invoke$arity$1 = (function (g){
return cljs.core.second.call(null,cljs.core.reduce.call(null,(function (p__454261,n){
var vec__454262 = p__454261;
var seen = cljs.core.nth.call(null,vec__454262,(0),null);
var span = cljs.core.nth.call(null,vec__454262,(1),null);
if(cljs.core.truth_(seen.call(null,n))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,span], null);
} else {
var vec__454264 = loom.alg_generic.pre_span.call(null,loom.graph.successors.call(null,g),n,new cljs.core.Keyword(null,"seen","seen",-518999789),seen,new cljs.core.Keyword(null,"return-seen","return-seen",308792727),true);
var cspan = cljs.core.nth.call(null,vec__454264,(0),null);
var seen__$1 = cljs.core.nth.call(null,vec__454264,(1),null);
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
var args454275 = [];
var len__36260__auto___454284 = arguments.length;
var i__36261__auto___454285 = (0);
while(true){
if((i__36261__auto___454285 < len__36260__auto___454284)){
args454275.push((arguments[i__36261__auto___454285]));

var G__454286 = (i__36261__auto___454285 + (1));
i__36261__auto___454285 = G__454286;
continue;
} else {
}
break;
}

var G__454280 = args454275.length;
switch (G__454280) {
case 1:
return loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args454275.slice((2)),(0),null));
return loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$1 = (function (g){
return loom.alg.traverse_all.call(null,loom.graph.nodes.call(null,g),cljs.core.partial.call(null,loom.alg_generic.post_traverse,loom.graph.successors.call(null,g)));
});

loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (g,start,opts){
return cljs.core.apply.call(null,loom.alg_generic.post_traverse,loom.graph.successors.call(null,g),start,opts);
});

loom.alg.post_traverse.cljs$lang$applyTo = (function (seq454276){
var G__454277 = cljs.core.first.call(null,seq454276);
var seq454276__$1 = cljs.core.next.call(null,seq454276);
var G__454278 = cljs.core.first.call(null,seq454276__$1);
var seq454276__$2 = cljs.core.next.call(null,seq454276__$1);
return loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__454277,G__454278,seq454276__$2);
});

loom.alg.post_traverse.cljs$lang$maxFixedArity = (2);
/**
 * Topological sort of a directed acyclic graph (DAG). Returns nil if
 *   g contains any cycles.
 */
loom.alg.topsort = (function loom$alg$topsort(var_args){
var args454294 = [];
var len__36260__auto___454301 = arguments.length;
var i__36261__auto___454302 = (0);
while(true){
if((i__36261__auto___454302 < len__36260__auto___454301)){
args454294.push((arguments[i__36261__auto___454302]));

var G__454303 = (i__36261__auto___454302 + (1));
i__36261__auto___454302 = G__454303;
continue;
} else {
}
break;
}

var G__454296 = args454294.length;
switch (G__454296) {
case 1:
return loom.alg.topsort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.topsort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args454294.length)].join('')));

}
});

loom.alg.topsort.cljs$core$IFn$_invoke$arity$1 = (function (g){
var seen = cljs.core.PersistentHashSet.EMPTY;
var result = cljs.core.List.EMPTY;
var G__454298 = cljs.core.seq.call(null,loom.graph.nodes.call(null,g));
var vec__454299 = G__454298;
var n = cljs.core.nth.call(null,vec__454299,(0),null);
var ns = cljs.core.nthnext.call(null,vec__454299,(1));
var seen__$1 = seen;
var result__$1 = result;
var G__454298__$1 = G__454298;
while(true){
var seen__$2 = seen__$1;
var result__$2 = result__$1;
var vec__454300 = G__454298__$1;
var n__$1 = cljs.core.nth.call(null,vec__454300,(0),null);
var ns__$1 = cljs.core.nthnext.call(null,vec__454300,(1));
if(cljs.core.not.call(null,n__$1)){
return result__$2;
} else {
if(cljs.core.truth_(seen__$2.call(null,n__$1))){
var G__454305 = seen__$2;
var G__454306 = result__$2;
var G__454307 = ns__$1;
seen__$1 = G__454305;
result__$1 = G__454306;
G__454298__$1 = G__454307;
continue;
} else {
var temp__4657__auto__ = loom.alg_generic.topsort_component.call(null,loom.graph.successors.call(null,g),n__$1,seen__$2,seen__$2);
if(cljs.core.truth_(temp__4657__auto__)){
var cresult = temp__4657__auto__;
var G__454308 = cljs.core.into.call(null,seen__$2,cresult);
var G__454309 = cljs.core.concat.call(null,cresult,result__$2);
var G__454310 = ns__$1;
seen__$1 = G__454308;
result__$1 = G__454309;
G__454298__$1 = G__454310;
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
var args454311 = [];
var len__36260__auto___454323 = arguments.length;
var i__36261__auto___454324 = (0);
while(true){
if((i__36261__auto___454324 < len__36260__auto___454323)){
args454311.push((arguments[i__36261__auto___454324]));

var G__454325 = (i__36261__auto___454324 + (1));
i__36261__auto___454324 = G__454325;
continue;
} else {
}
break;
}

var G__454316 = args454311.length;
switch (G__454316) {
case 1:
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args454311.slice((2)),(0),null));
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$1 = (function (g){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__454317,n){
var vec__454318 = p__454317;
var cc = cljs.core.nth.call(null,vec__454318,(0),null);
var predmap = cljs.core.nth.call(null,vec__454318,(1),null);
if(cljs.core.contains_QMARK_.call(null,predmap,n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc,predmap], null);
} else {
return cljs.core.reduce.call(null,((function (vec__454318,cc,predmap){
return (function (p__454319,p__454320){
var vec__454321 = p__454319;
var cc__$1 = cljs.core.nth.call(null,vec__454321,(0),null);
var _ = cljs.core.nth.call(null,vec__454321,(1),null);
var vec__454322 = p__454320;
var n__$1 = cljs.core.nth.call(null,vec__454322,(0),null);
var pm = cljs.core.nth.call(null,vec__454322,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__454322,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,cc__$1,n__$1),pm], null);
});})(vec__454318,cc,predmap))
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

loom.alg.bf_traverse.cljs$lang$applyTo = (function (seq454312){
var G__454313 = cljs.core.first.call(null,seq454312);
var seq454312__$1 = cljs.core.next.call(null,seq454312);
var G__454314 = cljs.core.first.call(null,seq454312__$1);
var seq454312__$2 = cljs.core.next.call(null,seq454312__$1);
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__454313,G__454314,seq454312__$2);
});

loom.alg.bf_traverse.cljs$lang$maxFixedArity = (2);
/**
 * Returns a breadth-first spanning tree of the form {node [successors]}
 */
loom.alg.bf_span = (function loom$alg$bf_span(var_args){
var args454333 = [];
var len__36260__auto___454336 = arguments.length;
var i__36261__auto___454337 = (0);
while(true){
if((i__36261__auto___454337 < len__36260__auto___454336)){
args454333.push((arguments[i__36261__auto___454337]));

var G__454338 = (i__36261__auto___454337 + (1));
i__36261__auto___454337 = G__454338;
continue;
} else {
}
break;
}

var G__454335 = args454333.length;
switch (G__454335) {
case 1:
return loom.alg.bf_span.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.bf_span.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args454333.length)].join('')));

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
var args__36267__auto__ = [];
var len__36260__auto___454347 = arguments.length;
var i__36261__auto___454348 = (0);
while(true){
if((i__36261__auto___454348 < len__36260__auto___454347)){
args__36267__auto__.push((arguments[i__36261__auto___454348]));

var G__454349 = (i__36261__auto___454348 + (1));
i__36261__auto___454348 = G__454349;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((3) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((3)),(0),null)):null);
return loom.alg.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36268__auto__);
});

loom.alg.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,start,end,opts){
return cljs.core.apply.call(null,loom.alg_generic.bf_path,loom.graph.successors.call(null,g),start,end,opts);
});

loom.alg.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg.bf_path.cljs$lang$applyTo = (function (seq454340){
var G__454341 = cljs.core.first.call(null,seq454340);
var seq454340__$1 = cljs.core.next.call(null,seq454340);
var G__454342 = cljs.core.first.call(null,seq454340__$1);
var seq454340__$2 = cljs.core.next.call(null,seq454340__$1);
var G__454343 = cljs.core.first.call(null,seq454340__$2);
var seq454340__$3 = cljs.core.next.call(null,seq454340__$2);
return loom.alg.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__454341,G__454342,G__454343,seq454340__$3);
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
var args454353 = [];
var len__36260__auto___454356 = arguments.length;
var i__36261__auto___454357 = (0);
while(true){
if((i__36261__auto___454357 < len__36260__auto___454356)){
args454353.push((arguments[i__36261__auto___454357]));

var G__454358 = (i__36261__auto___454357 + (1));
i__36261__auto___454357 = G__454358;
continue;
} else {
}
break;
}

var G__454355 = args454353.length;
switch (G__454355) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args454353.length)].join('')));

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
var args454363 = [];
var len__36260__auto___454392 = arguments.length;
var i__36261__auto___454394 = (0);
while(true){
if((i__36261__auto___454394 < len__36260__auto___454392)){
args454363.push((arguments[i__36261__auto___454394]));

var G__454397 = (i__36261__auto___454394 + (1));
i__36261__auto___454394 = G__454397;
continue;
} else {
}
break;
}

var G__454387 = args454363.length;
switch (G__454387) {
case 1:
return loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args454363.length)].join('')));

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
loom.alg.can_relax_edge_QMARK_ = (function loom$alg$can_relax_edge_QMARK_(p__454414,weight,costs){
var vec__454417 = p__454414;
var u = cljs.core.nth.call(null,vec__454417,(0),null);
var v = cljs.core.nth.call(null,vec__454417,(1),null);
var edge = vec__454417;
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
loom.alg.relax_edge = (function loom$alg$relax_edge(p__454419,weight,p__454420){
var vec__454425 = p__454419;
var u = cljs.core.nth.call(null,vec__454425,(0),null);
var v = cljs.core.nth.call(null,vec__454425,(1),null);
var edge = vec__454425;
var vec__454426 = p__454420;
var costs = cljs.core.nth.call(null,vec__454426,(0),null);
var paths = cljs.core.nth.call(null,vec__454426,(1),null);
var estimates = vec__454426;
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
return cljs.core.reduce.call(null,(function (estimates__$1,p__454434){
var vec__454435 = p__454434;
var u = cljs.core.nth.call(null,vec__454435,(0),null);
var v = cljs.core.nth.call(null,vec__454435,(1),null);
var edge = vec__454435;
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
var vec__454446 = cljs.core.reduce.call(null,((function (initial_estimates){
return (function (estimates,_){
return loom.alg.relax_edges.call(null,g,start,estimates);
});})(initial_estimates))
,initial_estimates,cljs.core.range.call(null,(cljs.core.count.call(null,loom.graph.nodes.call(null,g)) - (1))));
var costs = cljs.core.nth.call(null,vec__454446,(0),null);
var paths = cljs.core.nth.call(null,vec__454446,(1),null);
var edges = loom.graph.edges.call(null,g);
if(cljs.core.truth_(cljs.core.some.call(null,((function (initial_estimates,vec__454446,costs,paths,edges){
return (function (p__454448){
var vec__454449 = p__454448;
var u = cljs.core.nth.call(null,vec__454449,(0),null);
var v = cljs.core.nth.call(null,vec__454449,(1),null);
var edge = vec__454449;
return loom.alg.can_relax_edge_QMARK_.call(null,edge,loom.graph.weight.call(null,g,u,v),costs);
});})(initial_estimates,vec__454446,costs,paths,edges))
,edges))){
return false;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [costs,cljs.core.reduce.call(null,((function (initial_estimates,vec__454446,costs,paths,edges){
return (function (final_paths,v){
return cljs.core.assoc.call(null,final_paths,v,(function (){var node = v;
var path = cljs.core.List.EMPTY;
while(true){
if(cljs.core.truth_(node)){
var G__454483 = cljs.core.get.call(null,paths,node);
var G__454484 = cljs.core.cons.call(null,node,path);
node = G__454483;
path = G__454484;
continue;
} else {
return path;
}
break;
}
})());
});})(initial_estimates,vec__454446,costs,paths,edges))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,((function (initial_estimates,vec__454446,costs,paths,edges){
return (function (p1__454440_SHARP_){
return cljs.core._EQ_.call(null,Infinity,cljs.core.get.call(null,costs,p1__454440_SHARP_));
});})(initial_estimates,vec__454446,costs,paths,edges))
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
return cljs.core.reverse.call(null,(cljs.core.truth_(loom.graph.weighted_QMARK_.call(null,g))?cljs.core.reduce.call(null,(function (path1,p__454541){
var vec__454542 = p__454541;
var n = cljs.core.nth.call(null,vec__454542,(0),null);
var state = cljs.core.nth.call(null,vec__454542,(1),null);
var path2 = loom.alg_generic.trace_path.call(null,cljs.core.comp.call(null,cljs.core.second,state),n);
if((cljs.core.count.call(null,path1) < cljs.core.count.call(null,path2))){
return path2;
} else {
return path1;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),loom.alg.dijkstra_traverse.call(null,g,start,cljs.core.vector)):cljs.core.reduce.call(null,(function (path1,p__454545){
var vec__454546 = p__454545;
var n = cljs.core.nth.call(null,vec__454546,(0),null);
var predmap = cljs.core.nth.call(null,vec__454546,(1),null);
var _ = cljs.core.nth.call(null,vec__454546,(2),null);
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
var es = (function (){var iter__35971__auto__ = ((function (q){
return (function loom$alg$bellman_ford_transform_$_iter__454640(s__454641){
return (new cljs.core.LazySeq(null,((function (q){
return (function (){
var s__454641__$1 = s__454641;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__454641__$1);
if(temp__4657__auto__){
var s__454641__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__454641__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__454641__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__454643 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__454642 = (0);
while(true){
if((i__454642 < size__35970__auto__)){
var v = cljs.core._nth.call(null,c__35969__auto__,i__454642);
cljs.core.chunk_append.call(null,b__454643,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,v,(0)], null));

var G__454673 = (i__454642 + (1));
i__454642 = G__454673;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__454643),loom$alg$bellman_ford_transform_$_iter__454640.call(null,cljs.core.chunk_rest.call(null,s__454641__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__454643),null);
}
} else {
var v = cljs.core.first.call(null,s__454641__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,v,(0)], null),loom$alg$bellman_ford_transform_$_iter__454640.call(null,cljs.core.rest.call(null,s__454641__$2)));
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
return iter__35971__auto__.call(null,loom.graph.nodes.call(null,wg));
})();
var bf_results = loom.alg.bellman_ford.call(null,loom.graph.add_edges_STAR_.call(null,wg,es),q);
if(cljs.core.truth_(bf_results)){
var vec__454656 = bf_results;
var dist_q = cljs.core.nth.call(null,vec__454656,(0),null);
var _ = cljs.core.nth.call(null,vec__454656,(1),null);
var new_es = cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.second,((function (vec__454656,dist_q,_,q,es,bf_results){
return (function (p__454658){
var vec__454659 = p__454658;
var u = cljs.core.nth.call(null,vec__454659,(0),null);
var v = cljs.core.nth.call(null,vec__454659,(1),null);
return (loom.graph.weight.call(null,wg,u,v) + (dist_q.call(null,u) - dist_q.call(null,v)));
});})(vec__454656,dist_q,_,q,es,bf_results))
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
var g__$1 = (cljs.core.truth_((function (){var and__35179__auto__ = loom.graph.weighted_QMARK_.call(null,g);
if(cljs.core.truth_(and__35179__auto__)){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._GT_,(0)),cljs.core.map.call(null,loom.graph.weight.call(null,g),loom.graph.edges.call(null,g)));
} else {
return and__35179__auto__;
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
var nb = ((cljs.core.not.call(null,loom.graph.directed_QMARK_.call(null,g)))?loom.graph.successors.call(null,g):(function (p1__454695_SHARP_){
return cljs.core.concat.call(null,loom.graph.successors.call(null,g,p1__454695_SHARP_),loom.graph.predecessors.call(null,g,p1__454695_SHARP_));
}));
return cljs.core.first.call(null,cljs.core.reduce.call(null,((function (nb){
return (function (p__454705,n){
var vec__454706 = p__454705;
var cc = cljs.core.nth.call(null,vec__454706,(0),null);
var predmap = cljs.core.nth.call(null,vec__454706,(1),null);
if(cljs.core.contains_QMARK_.call(null,predmap,n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc,predmap], null);
} else {
var vec__454707 = cljs.core.reduce.call(null,((function (vec__454706,cc,predmap,nb){
return (function (p__454708,p__454709){
var vec__454710 = p__454708;
var c = cljs.core.nth.call(null,vec__454710,(0),null);
var _ = cljs.core.nth.call(null,vec__454710,(1),null);
var vec__454711 = p__454709;
var n__$1 = cljs.core.nth.call(null,vec__454711,(0),null);
var pm = cljs.core.nth.call(null,vec__454711,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__454711,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,c,n__$1),pm], null);
});})(vec__454706,cc,predmap,nb))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null], null),loom.alg_generic.bf_traverse.call(null,nb,n,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector,new cljs.core.Keyword(null,"seen","seen",-518999789),predmap));
var c = cljs.core.nth.call(null,vec__454707,(0),null);
var pm = cljs.core.nth.call(null,vec__454707,(1),null);
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
var G__454724 = cljs.core.rest.call(null,stack);
var G__454725 = seen;
var G__454726 = cc;
stack = G__454724;
seen = G__454725;
cc = G__454726;
continue;
} else {
var vec__454721 = loom.alg.post_traverse.call(null,gt,cljs.core.first.call(null,stack),new cljs.core.Keyword(null,"seen","seen",-518999789),seen,new cljs.core.Keyword(null,"return-seen","return-seen",308792727),true);
var c = cljs.core.nth.call(null,vec__454721,(0),null);
var seen__$1 = cljs.core.nth.call(null,vec__454721,(1),null);
var G__454730 = cljs.core.rest.call(null,stack);
var G__454731 = seen__$1;
var G__454732 = cljs.core.conj_BANG_.call(null,cc,c);
stack = G__454730;
seen = G__454731;
cc = G__454732;
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
var args__36267__auto__ = [];
var len__36260__auto___454742 = arguments.length;
var i__36261__auto___454743 = (0);
while(true){
if((i__36261__auto___454743 < len__36260__auto___454742)){
args__36267__auto__.push((arguments[i__36261__auto___454743]));

var G__454744 = (i__36261__auto___454743 + (1));
i__36261__auto___454743 = G__454744;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return loom.alg.density.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

loom.alg.density.cljs$core$IFn$_invoke$arity$variadic = (function (g,p__454737){
var map__454738 = p__454737;
var map__454738__$1 = ((((!((map__454738 == null)))?((((map__454738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__454738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__454738):map__454738);
var loops = cljs.core.get.call(null,map__454738__$1,new cljs.core.Keyword(null,"loops","loops",-1766681555),false);
var order = cljs.core.count.call(null,loom.graph.nodes.call(null,g));
return (cljs.core.count.call(null,loom.graph.edges.call(null,g)) / (order * (cljs.core.truth_(loops)?order:(order - (1)))));
});

loom.alg.density.cljs$lang$maxFixedArity = (1);

loom.alg.density.cljs$lang$applyTo = (function (seq454735){
var G__454736 = cljs.core.first.call(null,seq454735);
var seq454735__$1 = cljs.core.next.call(null,seq454735);
return loom.alg.density.cljs$core$IFn$_invoke$arity$variadic(G__454736,seq454735__$1);
});
/**
 * Returns nodes with no connections to other nodes (i.e., isolated nodes)
 */
loom.alg.loners = (function loom$alg$loners(g){
var degree_total = (cljs.core.truth_(loom.graph.directed_QMARK_.call(null,g))?(function (p1__454751_SHARP_){
return (loom.graph.in_degree.call(null,g,p1__454751_SHARP_) + loom.graph.out_degree.call(null,g,p1__454751_SHARP_));
}):(function (p1__454752_SHARP_){
return loom.graph.out_degree.call(null,g,p1__454752_SHARP_);
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
return cljs.core.second.call(null,cljs.core.reduce.call(null,(function (p__454759,e){
var vec__454760 = p__454759;
var seen = cljs.core.nth.call(null,vec__454760,(0),null);
var es = cljs.core.nth.call(null,vec__454760,(1),null);
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
return (function (p1__454765_SHARP_){
var and__35179__auto__ = coloring__$1.call(null,p1__454765_SHARP_);
if(cljs.core.truth_(and__35179__auto__)){
return cljs.core._EQ_.call(null,coloring__$1.call(null,v),coloring__$1.call(null,p1__454765_SHARP_));
} else {
return and__35179__auto__;
}
});})(coloring__$1,queue,v,color,nbrs))
,nbrs))){
return null;
} else {
var nbrs__$1 = cljs.core.remove.call(null,coloring__$1,nbrs);
var G__454916 = cljs.core.into.call(null,coloring__$1,(function (){var iter__35971__auto__ = ((function (coloring__$1,queue,nbrs__$1,v,color,nbrs){
return (function loom$alg$bipartite_color_$_color_component_$_iter__454864(s__454865){
return (new cljs.core.LazySeq(null,((function (coloring__$1,queue,nbrs__$1,v,color,nbrs){
return (function (){
var s__454865__$1 = s__454865;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__454865__$1);
if(temp__4657__auto__){
var s__454865__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__454865__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__454865__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__454867 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__454866 = (0);
while(true){
if((i__454866 < size__35970__auto__)){
var nbr = cljs.core._nth.call(null,c__35969__auto__,i__454866);
cljs.core.chunk_append.call(null,b__454867,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,color], null));

var G__454928 = (i__454866 + (1));
i__454866 = G__454928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__454867),loom$alg$bipartite_color_$_color_component_$_iter__454864.call(null,cljs.core.chunk_rest.call(null,s__454865__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__454867),null);
}
} else {
var nbr = cljs.core.first.call(null,s__454865__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,color], null),loom$alg$bipartite_color_$_color_component_$_iter__454864.call(null,cljs.core.rest.call(null,s__454865__$2)));
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
return iter__35971__auto__.call(null,nbrs__$1);
})());
var G__454917 = cljs.core.into.call(null,cljs.core.pop.call(null,queue),nbrs__$1);
coloring__$1 = G__454916;
queue = G__454917;
continue;
}
}
break;
}
});
var G__454871 = cljs.core.seq.call(null,loom.graph.nodes.call(null,g));
var vec__454872 = G__454871;
var node = cljs.core.nth.call(null,vec__454872,(0),null);
var nodes = cljs.core.nthnext.call(null,vec__454872,(1));
var coloring = cljs.core.PersistentArrayMap.EMPTY;
var G__454871__$1 = G__454871;
var coloring__$1 = coloring;
while(true){
var vec__454873 = G__454871__$1;
var node__$1 = cljs.core.nth.call(null,vec__454873,(0),null);
var nodes__$1 = cljs.core.nthnext.call(null,vec__454873,(1));
var coloring__$2 = coloring__$1;
if(cljs.core.truth_(coloring__$2)){
if((node__$1 == null)){
return coloring__$2;
} else {
if(cljs.core.truth_(coloring__$2.call(null,node__$1))){
var G__454946 = nodes__$1;
var G__454947 = coloring__$2;
G__454871__$1 = G__454946;
coloring__$1 = G__454947;
continue;
} else {
var G__454949 = nodes__$1;
var G__454950 = color_component.call(null,coloring__$2,node__$1);
G__454871__$1 = G__454949;
coloring__$1 = G__454950;
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
var temp__4657__auto__ = loom.alg.bipartite_color.call(null,g);
if(cljs.core.truth_(temp__4657__auto__)){
var coloring = temp__4657__auto__;
return cljs.core.reduce.call(null,((function (coloring,temp__4657__auto__){
return (function (p__454959,p__454960){
var vec__454961 = p__454959;
var s1 = cljs.core.nth.call(null,vec__454961,(0),null);
var s2 = cljs.core.nth.call(null,vec__454961,(1),null);
var vec__454962 = p__454960;
var node = cljs.core.nth.call(null,vec__454962,(0),null);
var color = cljs.core.nth.call(null,vec__454962,(1),null);
if((color === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,s1,node),s2], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,cljs.core.conj.call(null,s2,node)], null);
}
});})(coloring,temp__4657__auto__))
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
return (function (p1__454966_SHARP_){
return cljs.core.get.call(null,coloring,p1__454966_SHARP_);
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
return (cljs.core.every_QMARK_.call(null,different_colors_QMARK_,loom.graph.nodes.call(null,g))) && (cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__454972_SHARP_){
return cljs.core.get.call(null,coloring,p1__454972_SHARP_);
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
var G__454978 = cljs.core.rest.call(null,node_seq);
var G__454979 = cljs.core.conj.call(null,coloring,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,node_color], null));
var G__454980 = cljs.core.conj.call(null,colors,node_color);
node_seq = G__454978;
coloring = G__454979;
colors = G__454980;
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
var args__36267__auto__ = [];
var len__36260__auto___454993 = arguments.length;
var i__36261__auto___454994 = (0);
while(true){
if((i__36261__auto___454994 < len__36260__auto___454993)){
args__36267__auto__.push((arguments[i__36261__auto___454994]));

var G__454996 = (i__36261__auto___454994 + (1));
i__36261__auto___454994 = G__454996;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((3) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((3)),(0),null)):null);
return loom.alg.max_flow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36268__auto__);
});

loom.alg.max_flow.cljs$core$IFn$_invoke$arity$variadic = (function (g,source,sink,p__454987){
var map__454988 = p__454987;
var map__454988__$1 = ((((!((map__454988 == null)))?((((map__454988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__454988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__454988):map__454988);
var method = cljs.core.get.call(null,map__454988__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"edmonds-karp","edmonds-karp",-1793813821));
var method_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edmonds-karp","edmonds-karp",-1793813821),null], null), null);
var n = loom.graph.successors.call(null,g);
var i = loom.graph.predecessors.call(null,g);
var c = loom.graph.weight.call(null,g);
var s = source;
var t = sink;
var vec__454990 = (function (){var G__454991 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__454991) {
case "edmonds-karp":
return loom.flow.edmonds_karp.call(null,n,i,c,s,t);

break;
default:
throw (new java.lang.RuntimeException([cljs.core.str("Method not found.  Choose from: "),cljs.core.str(method_set)].join('')));

}
})();
var flow_map = cljs.core.nth.call(null,vec__454990,(0),null);
var flow_value = cljs.core.nth.call(null,vec__454990,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow_map,flow_value], null);
});

loom.alg.max_flow.cljs$lang$maxFixedArity = (3);

loom.alg.max_flow.cljs$lang$applyTo = (function (seq454982){
var G__454983 = cljs.core.first.call(null,seq454982);
var seq454982__$1 = cljs.core.next.call(null,seq454982);
var G__454984 = cljs.core.first.call(null,seq454982__$1);
var seq454982__$2 = cljs.core.next.call(null,seq454982__$1);
var G__454985 = cljs.core.first.call(null,seq454982__$2);
var seq454982__$3 = cljs.core.next.call(null,seq454982__$2);
return loom.alg.max_flow.cljs$core$IFn$_invoke$arity$variadic(G__454983,G__454984,G__454985,seq454982__$3);
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
return (function (p1__455049_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__455049_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,edge_weight.call(null,v,p1__455049_SHARP_)], null)], null));
});})(edge_weight))
,loom.graph.successors.call(null,wg,v));
});
/**
 * An edge-list of an minimum spanning tree along with weights that
 *   represents an MST of the given graph. Returns the MST edge-list
 *   for un-weighted graphs.
 */
loom.alg.prim_mst_edges = (function loom$alg$prim_mst_edges(var_args){
var args455063 = [];
var len__36260__auto___455085 = arguments.length;
var i__36261__auto___455086 = (0);
while(true){
if((i__36261__auto___455086 < len__36260__auto___455085)){
args455063.push((arguments[i__36261__auto___455086]));

var G__455087 = (i__36261__auto___455086 + (1));
i__36261__auto___455086 = G__455087;
continue;
} else {
}
break;
}

var G__455070 = args455063.length;
switch (G__455070) {
case 1:
return loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 5:
return loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args455063.length)].join('')));

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
return (function (p1__455057_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,p1__455057_SHARP_),cljs.core.second.call(null,p1__455057_SHARP_)], null));
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
var G__455092 = wg;
var G__455093 = cljs.core.disj.call(null,n,v);
var G__455094 = h__$1;
var G__455095 = cljs.core.conj.call(null,visited,v);
var G__455096 = acc;
wg = G__455092;
n = G__455093;
h = G__455094;
visited = G__455095;
acc = G__455096;
continue;
} else {
var next_edge = cljs.core.peek.call(null,h);
var u = cljs.core.first.call(null,cljs.core.second.call(null,next_edge));
var v = cljs.core.first.call(null,next_edge);
var update_dist = ((function (wg,n,h,visited,acc,next_edge,u,v){
return (function (h__$1,p__455077){
var vec__455078 = p__455077;
var v__$1 = cljs.core.nth.call(null,vec__455078,(0),null);
var vec__455079 = cljs.core.nth.call(null,vec__455078,(1),null);
var u__$1 = cljs.core.nth.call(null,vec__455079,(0),null);
var wt = cljs.core.nth.call(null,vec__455079,(1),null);
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
return (function (p1__455061_SHARP_){
return cljs.core.complement.call(null,visited__$1).call(null,cljs.core.first.call(null,p1__455061_SHARP_));
});})(wg,n,h,visited,acc,wt,visited__$1,next_edge,u,v,update_dist))
,loom.alg.edge_weights.call(null,wg,v)));
var G__455103 = wg;
var G__455104 = cljs.core.disj.call(null,n,v);
var G__455105 = h__$1;
var G__455106 = cljs.core.conj.call(null,visited__$1,v);
var G__455107 = cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v,wt], null));
wg = G__455103;
n = G__455104;
h = G__455105;
visited = G__455106;
acc = G__455107;
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
return (function (p1__455108_SHARP_){
return (loom.graph.out_degree.call(null,wg,p1__455108_SHARP_) === (0));
});})(mst))
,loom.graph.nodes.call(null,wg)));

}
});
/**
 * Returns the shortest path using A* algorithm. Returns a map of predecessors.
 */
loom.alg.astar_path = (function loom$alg$astar_path(var_args){
var args455112 = [];
var len__36260__auto___455119 = arguments.length;
var i__36261__auto___455120 = (0);
while(true){
if((i__36261__auto___455120 < len__36260__auto___455119)){
args455112.push((arguments[i__36261__auto___455120]));

var G__455121 = (i__36261__auto___455120 + (1));
i__36261__auto___455120 = G__455121;
continue;
} else {
}
break;
}

var G__455116 = args455112.length;
switch (G__455116) {
case 4:
return loom.alg.astar_path.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return loom.alg.astar_path.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args455112.length)].join('')));

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
var G__455124 = explored__$1.call(null,s);
var G__455125 = cljs.core.assoc.call(null,acc,s,explored__$1.call(null,s));
s = G__455124;
acc = G__455125;
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
var G__455135 = g;
var G__455136 = src;
var G__455137 = target;
var G__455138 = heur;
var G__455139 = q__$1;
var G__455140 = explored__$1;
g = G__455135;
src = G__455136;
target = G__455137;
heur = G__455138;
q = G__455139;
explored = G__455140;
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
return (function (c,p__455154){
var vec__455155 = p__455154;
var u = cljs.core.nth.call(null,vec__455155,(0),null);
var v = cljs.core.nth.call(null,vec__455155,(1),null);
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
var vec__455174 = cljs.core.first.call(null,node_degs);
var n = cljs.core.nth.call(null,vec__455174,(0),null);
var deg = cljs.core.nth.call(null,vec__455174,(1),null);
var updated_degs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.comp.call(null,cljs.core.dec,cljs.core.second)),cljs.core.filter.call(null,cljs.core.second,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,node_degs),loom.graph.successors.call(null,g,n)))));
var G__455184 = cljs.core.conj.call(null,ordered_nodes,n);
var G__455185 = cljs.core.reduce.call(null,((function (ordered_nodes,node_degs,k,vec__455174,n,deg,updated_degs){
return (function (n_ds,p__455175){
var vec__455176 = p__455175;
var n__$1 = cljs.core.nth.call(null,vec__455176,(0),null);
var d = cljs.core.nth.call(null,vec__455176,(1),null);
return cljs.core.assoc.call(null,n_ds,n__$1,d);
});})(ordered_nodes,node_degs,k,vec__455174,n,deg,updated_degs))
,cljs.core.dissoc.call(null,node_degs,n),updated_degs);
var G__455186 = (function (){var x__35522__auto__ = k;
var y__35523__auto__ = deg;
return ((x__35522__auto__ > y__35523__auto__) ? x__35522__auto__ : y__35523__auto__);
})();
ordered_nodes = G__455184;
node_degs = G__455185;
k = G__455186;
continue;
}
break;
}
});
loom.alg.bk_gen = (function loom$alg$bk_gen(g,p__455189,stack){
var vec__455191 = p__455189;
var r = cljs.core.nth.call(null,vec__455191,(0),null);
var p = cljs.core.nth.call(null,vec__455191,(1),null);
var x = cljs.core.nth.call(null,vec__455191,(2),null);
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
var G__455194 = cljs.core.first.call(null,clojure.set.difference.call(null,cljs.core.disj.call(null,p__$1,v),cljs.core.set.call(null,loom.graph.successors.call(null,g,v_pivot))));
var G__455195 = cljs.core.disj.call(null,p__$1,v);
var G__455196 = cljs.core.conj.call(null,x__$1,v);
var G__455197 = cljs.core.conj.call(null,stack__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,r,v),clojure.set.intersection.call(null,p__$1,succ_v),clojure.set.intersection.call(null,x__$1,succ_v)], null));
v = G__455194;
p__$1 = G__455195;
x__$1 = G__455196;
stack__$1 = G__455197;
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
var G__455223 = cljs.core.rest.call(null,vs);
var G__455224 = max_clqs;
var G__455225 = cljs.core.disj.call(null,p,v);
var G__455226 = cljs.core.conj.call(null,x,v);
var G__455227 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.fromArray([v], true),clojure.set.intersection.call(null,p,succ_v),clojure.set.intersection.call(null,x,succ_v)], null)], null);
vs = G__455223;
max_clqs = G__455224;
p = G__455225;
x = G__455226;
stack = G__455227;
continue;
} else {
var vec__455207 = cljs.core.peek.call(null,stack);
var r = cljs.core.nth.call(null,vec__455207,(0),null);
var s_p = cljs.core.nth.call(null,vec__455207,(1),null);
var s_x = cljs.core.nth.call(null,vec__455207,(2),null);
if((cljs.core.empty_QMARK_.call(null,s_p)) && (cljs.core.empty_QMARK_.call(null,s_x))){
var G__455236 = vs;
var G__455237 = cljs.core.cons.call(null,r,max_clqs);
var G__455238 = p;
var G__455239 = x;
var G__455240 = cljs.core.pop.call(null,stack);
vs = G__455236;
max_clqs = G__455237;
p = G__455238;
x = G__455239;
stack = G__455240;
continue;
} else {
if(cljs.core.empty_QMARK_.call(null,s_p)){
var G__455252 = vs;
var G__455253 = max_clqs;
var G__455254 = p;
var G__455255 = x;
var G__455256 = cljs.core.pop.call(null,stack);
vs = G__455252;
max_clqs = G__455253;
p = G__455254;
x = G__455255;
stack = G__455256;
continue;
} else {
var G__455261 = vs;
var G__455262 = max_clqs;
var G__455263 = p;
var G__455264 = x;
var G__455265 = loom.alg.bk_gen.call(null,g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,s_p,s_x], null),cljs.core.pop.call(null,stack));
vs = G__455261;
max_clqs = G__455262;
p = G__455263;
x = G__455264;
stack = G__455265;
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
