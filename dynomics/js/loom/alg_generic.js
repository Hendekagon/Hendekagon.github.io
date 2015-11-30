// Compiled by ClojureScript 1.7.170 {}
goog.provide('loom.alg_generic');
goog.require('cljs.core');
/**
 * Using a map of nodes-to-preds, traces a node's family tree back to the
 *   source. Cycles are not accounted for.
 */
loom.alg_generic.trace_path = (function loom$alg_generic$trace_path(preds,node){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,preds,node));
});
/**
 * Returns a lazy seq of all non-looping path vectors starting with
 *   [<start-node>]
 */
loom.alg_generic.paths = (function loom$alg_generic$paths(preds,path){
var this_node = cljs.core.peek.call(null,path);
return cljs.core.cons.call(null,path,cljs.core.mapcat.call(null,((function (this_node){
return (function (p1__871543_SHARP_){
return loom$alg_generic$paths.call(null,preds,cljs.core.conj.call(null,path,p1__871543_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__871542_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__871542_SHARP_], null));
});})(this_node))
,cljs.core.partition.call(null,(2),(1),path));
});})(this_node))
,preds.call(null,this_node))));
});
/**
 * Given a function and a starting node, returns all possible paths
 *   back to source. Cycles are not accounted for.
 */
loom.alg_generic.trace_paths = (function loom$alg_generic$trace_paths(preds,start){
return cljs.core.remove.call(null,(function (p1__871544_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__871544_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__871547){
var vec__871548 = p__871547;
var n = cljs.core.nth.call(null,vec__871548,(0),null);
var p = cljs.core.nth.call(null,vec__871548,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.call(null,span,p,cljs.core.conj.call(null,span.call(null,p,cljs.core.PersistentVector.EMPTY),n));
} else {
return span;
}
}),cljs.core.PersistentArrayMap.EMPTY,preds);
});
/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of nodes.
 */
loom.alg_generic.pre_traverse = (function loom$alg_generic$pre_traverse(var_args){
var args__25276__auto__ = [];
var len__25269__auto___871555 = arguments.length;
var i__25270__auto___871556 = (0);
while(true){
if((i__25270__auto___871556 < len__25269__auto___871555)){
args__25276__auto__.push((arguments[i__25270__auto___871556]));

var G__871557 = (i__25270__auto___871556 + (1));
i__25270__auto___871556 = G__871557;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((2) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((2)),(0))):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25277__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__871552){
var map__871553 = p__871552;
var map__871553__$1 = ((((!((map__871553 == null)))?((((map__871553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__871553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__871553):map__871553);
var seen = cljs.core.get.call(null,map__871553__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__871553,map__871553__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__4425__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__4425__auto__,map__871553,map__871553__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__4425__auto__,map__871553,map__871553__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__871553,map__871553__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq871549){
var G__871550 = cljs.core.first.call(null,seq871549);
var seq871549__$1 = cljs.core.next.call(null,seq871549);
var G__871551 = cljs.core.first.call(null,seq871549__$1);
var seq871549__$2 = cljs.core.next.call(null,seq871549__$1);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic(G__871550,G__871551,seq871549__$2);
});
/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.pre_edge_traverse = (function loom$alg_generic$pre_edge_traverse(var_args){
var args__25276__auto__ = [];
var len__25269__auto___871564 = arguments.length;
var i__25270__auto___871565 = (0);
while(true){
if((i__25270__auto___871565 < len__25269__auto___871564)){
args__25276__auto__.push((arguments[i__25270__auto___871565]));

var G__871566 = (i__25270__auto___871565 + (1));
i__25270__auto___871565 = G__871566;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((2) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((2)),(0))):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25277__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__871561){
var map__871562 = p__871561;
var map__871562__$1 = ((((!((map__871562 == null)))?((((map__871562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__871562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__871562):map__871562);
var seen = cljs.core.get.call(null,map__871562__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__871562,map__871562__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__4423__auto__)){
var nbr = temp__4423__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4423__auto__,map__871562,map__871562__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4423__auto__,map__871562,map__871562__$1,seen))
,null,null)));
} else {
var temp__4425__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
var G__871567 = successors__$1;
var G__871568 = parent;
var G__871569 = cljs.core.peek.call(null,nbrstack);
var G__871570 = cljs.core.pop.call(null,stack);
var G__871571 = cljs.core.pop.call(null,nbrstack);
var G__871572 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__871567;
start__$1 = G__871568;
nbrs = G__871569;
stack = G__871570;
nbrstack = G__871571;
seen__$1 = G__871572;
continue;
} else {
return null;
}
}
break;
}
});})(map__871562,map__871562__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq871558){
var G__871559 = cljs.core.first.call(null,seq871558);
var seq871558__$1 = cljs.core.next.call(null,seq871558);
var G__871560 = cljs.core.first.call(null,seq871558__$1);
var seq871558__$2 = cljs.core.next.call(null,seq871558__$1);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__871559,G__871560,seq871558__$2);
});
/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__25276__auto__ = [];
var len__25269__auto___871579 = arguments.length;
var i__25270__auto___871580 = (0);
while(true){
if((i__25270__auto___871580 < len__25269__auto___871579)){
args__25276__auto__.push((arguments[i__25270__auto___871580]));

var G__871581 = (i__25270__auto___871580 + (1));
i__25270__auto___871580 = G__871581;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((2) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((2)),(0))):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25277__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__871576){
var map__871577 = p__871576;
var map__871577__$1 = ((((!((map__871577 == null)))?((((map__871577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__871577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__871577):map__871577);
var seen = cljs.core.get.call(null,map__871577__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__871577__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
var seen__$1 = seen;
var preds = cljs.core.PersistentArrayMap.fromArray([start,null], true, false);
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_.call(null,stack)){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loom.alg_generic.preds__GT_span.call(null,preds),seen__$1], null);
} else {
return loom.alg_generic.preds__GT_span.call(null,preds);
}
} else {
var v = cljs.core.peek.call(null,stack);
var seen__$2 = cljs.core.conj.call(null,seen__$1,v);
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.remove.call(null,seen__$2,successors.call(null,v)));
if(cljs.core.truth_(temp__4423__auto__)){
var u = temp__4423__auto__;
var G__871582 = seen__$2;
var G__871583 = cljs.core.assoc.call(null,preds,u,v);
var G__871584 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__871582;
preds = G__871583;
stack = G__871584;
continue;
} else {
var G__871585 = seen__$2;
var G__871586 = preds;
var G__871587 = cljs.core.pop.call(null,stack);
seen__$1 = G__871585;
preds = G__871586;
stack = G__871587;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq871573){
var G__871574 = cljs.core.first.call(null,seq871573);
var seq871573__$1 = cljs.core.next.call(null,seq871573);
var G__871575 = cljs.core.first.call(null,seq871573__$1);
var seq871573__$2 = cljs.core.next.call(null,seq871573__$1);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(G__871574,G__871575,seq871573__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__25276__auto__ = [];
var len__25269__auto___871594 = arguments.length;
var i__25270__auto___871595 = (0);
while(true){
if((i__25270__auto___871595 < len__25269__auto___871594)){
args__25276__auto__.push((arguments[i__25270__auto___871595]));

var G__871596 = (i__25270__auto___871595 + (1));
i__25270__auto___871595 = G__871596;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((2) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((2)),(0))):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25277__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__871591){
var map__871592 = p__871591;
var map__871592__$1 = ((((!((map__871592 == null)))?((((map__871592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__871592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__871592):map__871592);
var seen = cljs.core.get.call(null,map__871592__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__871592__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
var seen__$1 = seen;
var result = cljs.core.PersistentVector.EMPTY;
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_.call(null,stack)){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,seen__$1], null);
} else {
return result;
}
} else {
var v = cljs.core.peek.call(null,stack);
var seen__$2 = cljs.core.conj.call(null,seen__$1,v);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,v));
if(cljs.core.empty_QMARK_.call(null,nbrs)){
var G__871597 = seen__$2;
var G__871598 = cljs.core.conj.call(null,result,v);
var G__871599 = cljs.core.pop.call(null,stack);
seen__$1 = G__871597;
result = G__871598;
stack = G__871599;
continue;
} else {
var G__871600 = seen__$2;
var G__871601 = result;
var G__871602 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__871600;
result = G__871601;
stack = G__871602;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq871588){
var G__871589 = cljs.core.first.call(null,seq871588);
var seq871588__$1 = cljs.core.next.call(null,seq871588);
var G__871590 = cljs.core.first.call(null,seq871588__$1);
var seq871588__$2 = cljs.core.next.call(null,seq871588__$1);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__871589,G__871590,seq871588__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.post_edge_traverse = (function loom$alg_generic$post_edge_traverse(var_args){
var args__25276__auto__ = [];
var len__25269__auto___871609 = arguments.length;
var i__25270__auto___871610 = (0);
while(true){
if((i__25270__auto___871610 < len__25269__auto___871609)){
args__25276__auto__.push((arguments[i__25270__auto___871610]));

var G__871611 = (i__25270__auto___871610 + (1));
i__25270__auto___871610 = G__871611;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((2) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((2)),(0))):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25277__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__871606){
var map__871607 = p__871606;
var map__871607__$1 = ((((!((map__871607 == null)))?((((map__871607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__871607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__871607):map__871607);
var seen = cljs.core.get.call(null,map__871607__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__871607__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
if(cljs.core.truth_(seen.call(null,start))){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,seen], null);
} else {
return null;
}
} else {
var start__$1 = start;
var nbrs = successors.call(null,start__$1);
var stack = cljs.core.PersistentVector.EMPTY;
var nbrstack = cljs.core.PersistentVector.EMPTY;
var seen__$1 = seen;
var edges = cljs.core.List.EMPTY;
while(true){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
var temp__4423__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__4423__auto__)){
var nbr = temp__4423__auto__;
if(cljs.core.truth_(seen__$2.call(null,nbr))){
var G__871612 = start__$1;
var G__871613 = cljs.core.next.call(null,nbrs);
var G__871614 = stack;
var G__871615 = nbrstack;
var G__871616 = seen__$2;
var G__871617 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__871612;
nbrs = G__871613;
stack = G__871614;
nbrstack = G__871615;
seen__$1 = G__871616;
edges = G__871617;
continue;
} else {
var G__871618 = nbr;
var G__871619 = successors.call(null,nbr);
var G__871620 = cljs.core.conj.call(null,stack,start__$1);
var G__871621 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__871622 = seen__$2;
var G__871623 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__871618;
nbrs = G__871619;
stack = G__871620;
nbrstack = G__871621;
seen__$1 = G__871622;
edges = G__871623;
continue;
}
} else {
var temp__4423__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4423__auto____$1)){
var parent = temp__4423__auto____$1;
var G__871624 = parent;
var G__871625 = cljs.core.peek.call(null,nbrstack);
var G__871626 = cljs.core.pop.call(null,stack);
var G__871627 = cljs.core.pop.call(null,nbrstack);
var G__871628 = seen__$2;
var G__871629 = edges;
start__$1 = G__871624;
nbrs = G__871625;
stack = G__871626;
nbrstack = G__871627;
seen__$1 = G__871628;
edges = G__871629;
continue;
} else {
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges,seen__$2], null);
} else {
return edges;
}
}
}
break;
}
}
});

loom.alg_generic.post_edge_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq871603){
var G__871604 = cljs.core.first.call(null,seq871603);
var seq871603__$1 = cljs.core.next.call(null,seq871603);
var G__871605 = cljs.core.first.call(null,seq871603__$1);
var seq871603__$2 = cljs.core.next.call(null,seq871603__$1);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__871604,G__871605,seq871603__$2);
});
/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var args871630 = [];
var len__25269__auto___871633 = arguments.length;
var i__25270__auto___871634 = (0);
while(true){
if((i__25270__auto___871634 < len__25269__auto___871633)){
args871630.push((arguments[i__25270__auto___871634]));

var G__871635 = (i__25270__auto___871634 + (1));
i__25270__auto___871634 = G__871635;
continue;
} else {
}
break;
}

var G__871632 = args871630.length;
switch (G__871632) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args871630.length)].join('')));

}
});

loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2 = (function (successors,start){
return loom.alg_generic.topsort_component.call(null,successors,start,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY);
});

loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4 = (function (successors,start,seen,explored){
var seen__$1 = seen;
var explored__$1 = explored;
var result = cljs.core.List.EMPTY;
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_.call(null,stack)){
return result;
} else {
var v = cljs.core.peek.call(null,stack);
var seen__$2 = cljs.core.conj.call(null,seen__$1,v);
var us = cljs.core.remove.call(null,explored__$1,successors.call(null,v));
if(cljs.core.seq.call(null,us)){
if(cljs.core.truth_(cljs.core.some.call(null,seen__$2,us))){
return null;
} else {
var G__871637 = seen__$2;
var G__871638 = explored__$1;
var G__871639 = result;
var G__871640 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__871637;
explored__$1 = G__871638;
result = G__871639;
stack = G__871640;
continue;
}
} else {
var G__871641 = seen__$2;
var G__871642 = cljs.core.conj.call(null,explored__$1,v);
var G__871643 = cljs.core.conj.call(null,result,v);
var G__871644 = cljs.core.pop.call(null,stack);
seen__$1 = G__871641;
explored__$1 = G__871642;
result = G__871643;
stack = G__871644;
continue;
}
}
break;
}
});

loom.alg_generic.topsort_component.cljs$lang$maxFixedArity = 4;
/**
 * Traverses a graph breadth-first from start, successors being a
 *   function that returns adjacent nodes. When :f is provided, returns a
 *   lazy seq of (f node predecessor-map depth) for each node traversed.
 *   Otherwise, returns a lazy seq of the nodes. When :when is provided,
 *   filters successors with (f neighbor predecessor depth).
 */
loom.alg_generic.bf_traverse = (function loom$alg_generic$bf_traverse(var_args){
var args__25276__auto__ = [];
var len__25269__auto___871679 = arguments.length;
var i__25270__auto___871680 = (0);
while(true){
if((i__25270__auto___871680 < len__25269__auto___871679)){
args__25276__auto__.push((arguments[i__25270__auto___871680]));

var G__871681 = (i__25270__auto___871680 + (1));
i__25270__auto___871680 = G__871681;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((2) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((2)),(0))):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25277__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__871652){
var map__871653 = p__871652;
var map__871653__$1 = ((((!((map__871653 == null)))?((((map__871653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__871653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__871653):map__871653);
var f = cljs.core.get.call(null,map__871653__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__871653__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__871653__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__24211__auto__ = f;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return ((function (or__24211__auto__,map__871653,map__871653__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__24211__auto__,map__871653,map__871653__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__24211__auto__ = when;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__871653,map__871653__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__4425__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__871670 = temp__4425__auto__;
var node = cljs.core.nth.call(null,vec__871670,(0),null);
var depth = cljs.core.nth.call(null,vec__871670,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__871670,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__871653,map__871653__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__871670,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__871653,map__871653__$1,f,when,seen){
return (function (p1__871646_SHARP_){
return nbr_pred.call(null,p1__871646_SHARP_,node,(depth + (1)));
});})(vec__871670,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__871653,map__871653__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__871670,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__871653,map__871653__$1,f,when,seen){
return (function (p1__871645_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__871645_SHARP_);
});})(vec__871670,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__871653,map__871653__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__24983__auto__ = ((function (nbrs,vec__871670,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__871653,map__871653__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__871671(s__871672){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__871670,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__871653,map__871653__$1,f,when,seen){
return (function (){
var s__871672__$1 = s__871672;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__871672__$1);
if(temp__4425__auto____$1){
var s__871672__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__871672__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__871672__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__871674 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__871673 = (0);
while(true){
if((i__871673 < size__24982__auto__)){
var nbr = cljs.core._nth.call(null,c__24981__auto__,i__871673);
cljs.core.chunk_append.call(null,b__871674,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__871682 = (i__871673 + (1));
i__871673 = G__871682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__871674),loom$alg_generic$step_$_iter__871671.call(null,cljs.core.chunk_rest.call(null,s__871672__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__871674),null);
}
} else {
var nbr = cljs.core.first.call(null,s__871672__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__871671.call(null,cljs.core.rest.call(null,s__871672__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__871670,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__871653,map__871653__$1,f,when,seen))
,null,null));
});})(nbrs,vec__871670,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__871653,map__871653__$1,f,when,seen))
;
return iter__24983__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__871670,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__871653,map__871653__$1,f,when,seen){
return (function (p1__871647_SHARP_,p2__871648_SHARP_){
return cljs.core.assoc.call(null,p1__871647_SHARP_,p2__871648_SHARP_,node);
});})(nbrs,vec__871670,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__871653,map__871653__$1,f,when,seen))
,preds,nbrs));
});})(vec__871670,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__871653,map__871653__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__871653,map__871653__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.fromArray([start,null], true, false),(function (){var iter__24983__auto__ = ((function (f__$1,nbr_pred,map__871653,map__871653__$1,f,when,seen){
return (function loom$alg_generic$iter__871675(s__871676){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__871653,map__871653__$1,f,when,seen){
return (function (){
var s__871676__$1 = s__871676;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__871676__$1);
if(temp__4425__auto__){
var s__871676__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__871676__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__871676__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__871678 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__871677 = (0);
while(true){
if((i__871677 < size__24982__auto__)){
var s = cljs.core._nth.call(null,c__24981__auto__,i__871677);
cljs.core.chunk_append.call(null,b__871678,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__871683 = (i__871677 + (1));
i__871677 = G__871683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__871678),loom$alg_generic$iter__871675.call(null,cljs.core.chunk_rest.call(null,s__871676__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__871678),null);
}
} else {
var s = cljs.core.first.call(null,s__871676__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__871675.call(null,cljs.core.rest.call(null,s__871676__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__871653,map__871653__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__871653,map__871653__$1,f,when,seen))
;
return iter__24983__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq871649){
var G__871650 = cljs.core.first.call(null,seq871649);
var seq871649__$1 = cljs.core.next.call(null,seq871649);
var G__871651 = cljs.core.first.call(null,seq871649__$1);
var seq871649__$2 = cljs.core.next.call(null,seq871649__$1);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__871650,G__871651,seq871649__$2);
});
/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__25276__auto__ = [];
var len__25269__auto___871690 = arguments.length;
var i__25270__auto___871691 = (0);
while(true){
if((i__25270__auto___871691 < len__25269__auto___871690)){
args__25276__auto__.push((arguments[i__25270__auto___871691]));

var G__871692 = (i__25270__auto___871691 + (1));
i__25270__auto___871691 = G__871692;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((2) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((2)),(0))):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25277__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__871687){
var map__871688 = p__871687;
var map__871688__$1 = ((((!((map__871688 == null)))?((((map__871688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__871688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__871688):map__871688);
var seen = cljs.core.get.call(null,map__871688__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__871688,map__871688__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__871688,map__871688__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq871684){
var G__871685 = cljs.core.first.call(null,seq871684);
var seq871684__$1 = cljs.core.next.call(null,seq871684);
var G__871686 = cljs.core.first.call(null,seq871684__$1);
var seq871684__$2 = cljs.core.next.call(null,seq871684__$1);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic(G__871685,G__871686,seq871684__$2);
});
/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__25276__auto__ = [];
var len__25269__auto___871702 = arguments.length;
var i__25270__auto___871703 = (0);
while(true){
if((i__25270__auto___871703 < len__25269__auto___871702)){
args__25276__auto__.push((arguments[i__25270__auto___871703]));

var G__871704 = (i__25270__auto___871703 + (1));
i__25270__auto___871703 = G__871704;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((3) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((3)),(0))):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25277__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__871697){
var map__871698 = p__871697;
var map__871698__$1 = ((((!((map__871698 == null)))?((((map__871698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__871698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__871698):map__871698);
var opts = map__871698__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__4425__auto__ = cljs.core.some.call(null,((function (opts__$1,map__871698,map__871698__$1,opts){
return (function (p__871700){
var vec__871701 = p__871700;
var _ = cljs.core.nth.call(null,vec__871701,(0),null);
var pm = cljs.core.nth.call(null,vec__871701,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__871701,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__871698,map__871698__$1,opts))
,cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__4425__auto__)){
var preds = temp__4425__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq871693){
var G__871694 = cljs.core.first.call(null,seq871693);
var seq871693__$1 = cljs.core.next.call(null,seq871693);
var G__871695 = cljs.core.first.call(null,seq871693__$1);
var seq871693__$2 = cljs.core.next.call(null,seq871693__$1);
var G__871696 = cljs.core.first.call(null,seq871693__$2);
var seq871693__$3 = cljs.core.next.call(null,seq871693__$2);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__871694,G__871695,G__871696,seq871693__$3);
});
/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__871705 = m2;
var G__871706 = m1;
m1 = G__871705;
m2 = G__871706;
continue;
} else {
return cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,m2),cljs.core.keys.call(null,m1));
}
break;
}
});
/**
 * Using a bidirectional breadth-first search, finds a path from start
 *   to end with the fewest hops (i.e. irrespective of edge weights),
 *   outgoing and predecessors being functions which return adjacent
 *   nodes. Can be much faster than a unidirectional search on certain
 *   types of graphs
 */
loom.alg_generic.bf_path_bi = (function loom$alg_generic$bf_path_bi(outgoing,predecessors,start,end){
var done_QMARK_ = cljs.core.atom.call(null,false);
var preds1 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var preds2 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var search = ((function (done_QMARK_,preds1,preds2){
return (function (nbrs,n,preds){
return cljs.core.dorun.call(null,cljs.core.take_while.call(null,((function (done_QMARK_,preds1,preds2){
return (function (_){
return cljs.core.not.call(null,cljs.core.deref.call(null,done_QMARK_));
});})(done_QMARK_,preds1,preds2))
,loom.alg_generic.bf_traverse.call(null,nbrs,n,new cljs.core.Keyword(null,"f","f",-1597136552),((function (done_QMARK_,preds1,preds2){
return (function (_,pm,___$1){
return cljs.core.reset_BANG_.call(null,preds,pm);
});})(done_QMARK_,preds1,preds2))
)));
});})(done_QMARK_,preds1,preds2))
;
var search1 = loom.alg_generic.future.call(null,search.call(null,outgoing,start,preds1));
var search2 = loom.alg_generic.future.call(null,search.call(null,predecessors,end,preds2));
var find_intersects = ((function (done_QMARK_,preds1,preds2,search,search1,search2){
return (function (){
return loom.alg_generic.shared_keys.call(null,cljs.core.deref.call(null,preds1),cljs.core.deref.call(null,preds2));
});})(done_QMARK_,preds1,preds2,search,search1,search2))
;
var intersects = find_intersects.call(null);
while(true){
if(cljs.core.truth_((function (){var or__24211__auto__ = cljs.core.seq.call(null,intersects);
if(or__24211__auto__){
return or__24211__auto__;
} else {
var or__24211__auto____$1 = loom.alg_generic.future_done_QMARK_.call(null,search1);
if(cljs.core.truth_(or__24211__auto____$1)){
return or__24211__auto____$1;
} else {
return loom.alg_generic.future_done_QMARK_.call(null,search2);
}
}
})())){
cljs.core.reset_BANG_.call(null,done_QMARK_,true);

if(cljs.core.seq.call(null,intersects)){
var intersect = cljs.core.apply.call(null,cljs.core.min_key,((function (intersects,done_QMARK_,preds1,preds2,search,search1,search2,find_intersects){
return (function (p1__871707_SHARP_){
return (cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds1),p1__871707_SHARP_)) + cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds2),p1__871707_SHARP_)));
});})(intersects,done_QMARK_,preds1,preds2,search,search1,search2,find_intersects))
,intersects);
return cljs.core.concat.call(null,cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds1),intersect)),cljs.core.rest.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds2),intersect)));
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,preds1).call(null,end))){
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds1),end));
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,preds2).call(null,start))){
return loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds2),start);
} else {
return null;
}
}
}
} else {
var G__871708 = find_intersects.call(null);
intersects = G__871708;
continue;
}
break;
}
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__24983__auto__ = (function loom$alg_generic$reverse_edges_$_iter__871715(s__871716){
return (new cljs.core.LazySeq(null,(function (){
var s__871716__$1 = s__871716;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__871716__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var node = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24979__auto__ = ((function (s__871716__$1,node,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__871715_$_iter__871717(s__871718){
return (new cljs.core.LazySeq(null,((function (s__871716__$1,node,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__871718__$1 = s__871718;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__871718__$1);
if(temp__4425__auto____$1){
var s__871718__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__871718__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__871718__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__871720 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__871719 = (0);
while(true){
if((i__871719 < size__24982__auto__)){
var nbr = cljs.core._nth.call(null,c__24981__auto__,i__871719);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
cljs.core.chunk_append.call(null,b__871720,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__871721 = (i__871719 + (1));
i__871719 = G__871721;
continue;
} else {
var G__871722 = (i__871719 + (1));
i__871719 = G__871722;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__871720),loom$alg_generic$reverse_edges_$_iter__871715_$_iter__871717.call(null,cljs.core.chunk_rest.call(null,s__871718__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__871720),null);
}
} else {
var nbr = cljs.core.first.call(null,s__871718__$2);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__871715_$_iter__871717.call(null,cljs.core.rest.call(null,s__871718__$2)));
} else {
var G__871723 = cljs.core.rest.call(null,s__871718__$2);
s__871718__$1 = G__871723;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__871716__$1,node,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__871716__$1,node,xs__4977__auto__,temp__4425__auto__))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,successor_fn.call(null,node)));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,loom$alg_generic$reverse_edges_$_iter__871715.call(null,cljs.core.rest.call(null,s__871716__$1)));
} else {
var G__871724 = cljs.core.rest.call(null,s__871716__$1);
s__871716__$1 = G__871724;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24983__auto__.call(null,nodes);
});
loom.alg_generic.conj_paths = (function loom$alg_generic$conj_paths(from_map,to_map,matches){
var iter__24983__auto__ = (function loom$alg_generic$conj_paths_$_iter__871733(s__871734){
return (new cljs.core.LazySeq(null,(function (){
var s__871734__$1 = s__871734;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__871734__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24979__auto__ = ((function (s__871734__$1,n,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$conj_paths_$_iter__871733_$_iter__871735(s__871736){
return (new cljs.core.LazySeq(null,((function (s__871734__$1,n,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__871736__$1 = s__871736;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__871736__$1);
if(temp__4425__auto____$1){
var xs__4977__auto____$1 = temp__4425__auto____$1;
var from = cljs.core.first.call(null,xs__4977__auto____$1);
var iterys__24979__auto__ = ((function (s__871736__$1,s__871734__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$conj_paths_$_iter__871733_$_iter__871735_$_iter__871737(s__871738){
return (new cljs.core.LazySeq(null,((function (s__871736__$1,s__871734__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__871738__$1 = s__871738;
while(true){
var temp__4425__auto____$2 = cljs.core.seq.call(null,s__871738__$1);
if(temp__4425__auto____$2){
var s__871738__$2 = temp__4425__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__871738__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__871738__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__871740 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__871739 = (0);
while(true){
if((i__871739 < size__24982__auto__)){
var to = cljs.core._nth.call(null,c__24981__auto__,i__871739);
cljs.core.chunk_append.call(null,b__871740,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__871741 = (i__871739 + (1));
i__871739 = G__871741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__871740),loom$alg_generic$conj_paths_$_iter__871733_$_iter__871735_$_iter__871737.call(null,cljs.core.chunk_rest.call(null,s__871738__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__871740),null);
}
} else {
var to = cljs.core.first.call(null,s__871738__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__871733_$_iter__871735_$_iter__871737.call(null,cljs.core.rest.call(null,s__871738__$2)));
}
} else {
return null;
}
break;
}
});})(s__871736__$1,s__871734__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__871736__$1,s__871734__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,loom$alg_generic$conj_paths_$_iter__871733_$_iter__871735.call(null,cljs.core.rest.call(null,s__871736__$1)));
} else {
var G__871742 = cljs.core.rest.call(null,s__871736__$1);
s__871736__$1 = G__871742;
continue;
}
} else {
return null;
}
break;
}
});})(s__871734__$1,n,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__871734__$1,n,xs__4977__auto__,temp__4425__auto__))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,loom$alg_generic$conj_paths_$_iter__871733.call(null,cljs.core.rest.call(null,s__871734__$1)));
} else {
var G__871743 = cljs.core.rest.call(null,s__871734__$1);
s__871734__$1 = G__871743;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24983__auto__.call(null,matches);
});
/**
 * Using a bidirectional breadth-first search, returns all shortest
 *   paths from start to end; predecessors is called on end and each
 *   preceding node, successors is called on start, etc.
 */
loom.alg_generic.bf_paths_bi = (function loom$alg_generic$bf_paths_bi(successors,predecessors,start,end){
var find_succs = cljs.core.partial.call(null,loom.alg_generic.reverse_edges,successors);
var find_preds = cljs.core.partial.call(null,loom.alg_generic.reverse_edges,predecessors);
var overlaps = ((function (find_succs,find_preds){
return (function (coll,q){
return cljs.core.seq.call(null,cljs.core.filter.call(null,((function (find_succs,find_preds){
return (function (p1__871744_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__871744_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__871747){
var vec__871748 = p__871747;
var key = cljs.core.nth.call(null,vec__871748,(0),null);
var val = cljs.core.nth.call(null,vec__871748,(1),null);
return cljs.core.assoc_BANG_.call(null,map__$1,key,cljs.core.conj.call(null,cljs.core.get.call(null,map__$1,key,cljs.core.PersistentHashSet.EMPTY),val));
});})(find_succs,find_preds,overlaps))
,cljs.core.transient$.call(null,map),pairs));
});})(find_succs,find_preds,overlaps))
;
var outgoing = cljs.core.PersistentArrayMap.fromArray([start,null], true, false);
var incoming = cljs.core.PersistentArrayMap.fromArray([end,null], true, false);
var q1 = cljs.core._conj.call(null,cljs.core.List.EMPTY,start);
var q2 = cljs.core._conj.call(null,cljs.core.List.EMPTY,end);
while(true){
if((cljs.core.seq.call(null,q1)) && (cljs.core.seq.call(null,q2))){
if((cljs.core.count.call(null,q1) <= cljs.core.count.call(null,q2))){
var pairs = find_succs.call(null,q1,outgoing);
var outgoing__$1 = map_set_pairs.call(null,outgoing,pairs);
var q1__$1 = cljs.core.map.call(null,cljs.core.first,pairs);
var temp__4423__auto__ = overlaps.call(null,incoming,q1__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var all = temp__4423__auto__;
return loom.alg_generic.conj_paths.call(null,outgoing__$1,incoming,cljs.core.set.call(null,all));
} else {
var G__871749 = outgoing__$1;
var G__871750 = incoming;
var G__871751 = q1__$1;
var G__871752 = q2;
outgoing = G__871749;
incoming = G__871750;
q1 = G__871751;
q2 = G__871752;
continue;
}
} else {
var pairs = find_preds.call(null,q2,incoming);
var incoming__$1 = map_set_pairs.call(null,incoming,pairs);
var q2__$1 = cljs.core.map.call(null,cljs.core.first,pairs);
var temp__4423__auto__ = overlaps.call(null,outgoing,q2__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var all = temp__4423__auto__;
return loom.alg_generic.conj_paths.call(null,outgoing,incoming__$1,cljs.core.set.call(null,all));
} else {
var G__871753 = outgoing;
var G__871754 = incoming__$1;
var G__871755 = q1;
var G__871756 = q2__$1;
outgoing = G__871753;
incoming = G__871754;
q1 = G__871755;
q2 = G__871756;
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
 * Returns a lazy-seq of [current-node state] where state is a map in the
 *   format {node [distance predecessor]}. When f is provided, returns
 *   a lazy-seq of (f node state) for each node
 */
loom.alg_generic.dijkstra_traverse = (function loom$alg_generic$dijkstra_traverse(var_args){
var args871759 = [];
var len__25269__auto___871780 = arguments.length;
var i__25270__auto___871781 = (0);
while(true){
if((i__25270__auto___871781 < len__25269__auto___871780)){
args871759.push((arguments[i__25270__auto___871781]));

var G__871782 = (i__25270__auto___871781 + (1));
i__25270__auto___871781 = G__871782;
continue;
} else {
}
break;
}

var G__871761 = args871759.length;
switch (G__871761) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args871759.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__871771){
var vec__871776 = p__871771;
var state = cljs.core.nth.call(null,vec__871776,(0),null);
var pq = cljs.core.nth.call(null,vec__871776,(1),null);
var temp__4425__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__871777 = temp__4425__auto__;
var dist_su = cljs.core.nth.call(null,vec__871777,(0),null);
var _ = cljs.core.nth.call(null,vec__871777,(1),null);
var u = cljs.core.nth.call(null,vec__871777,(2),null);
var fpq = vec__871777;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__871777,dist_su,_,u,fpq,temp__4425__auto__,vec__871776,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__871777,dist_su,_,u,fpq,temp__4425__auto__,vec__871776,state,pq){
return (function (p__871778,v){
var vec__871779 = p__871778;
var state__$1 = cljs.core.nth.call(null,vec__871779,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__871779,(1),null);
var dist_suv = (dist_su + dist.call(null,u,v));
var dist_sv = cljs.core.first.call(null,state__$1.call(null,v));
if(cljs.core.truth_((function (){var and__24199__auto__ = dist_sv;
if(cljs.core.truth_(and__24199__auto__)){
return (dist_suv >= dist_sv);
} else {
return and__24199__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,pq__$1], null);
} else {
var pq__$2 = (cljs.core.truth_(dist_sv)?cljs.core.disj.call(null,pq__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_sv,cljs.core.hash.call(null,v),v], null)):pq__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state__$1,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,u], null)),cljs.core.conj.call(null,pq__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,cljs.core.hash.call(null,v),v], null))], null);
}
});})(vec__871777,dist_su,_,u,fpq,temp__4425__auto__,vec__871776,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__871777,dist_su,_,u,fpq,temp__4425__auto__,vec__871776,state,pq))
,null,null)));
} else {
return null;
}
});
return step.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([start,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null)], true, false),cljs.core.sorted_set.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.hash.call(null,start),start], null))], null));
});

loom.alg_generic.dijkstra_traverse.cljs$lang$maxFixedArity = 4;
/**
 * Finds all shortest distances from start, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2).
 *   Returns a map in the format {node {successor distance}}
 */
loom.alg_generic.dijkstra_span = (function loom$alg_generic$dijkstra_span(successors,dist,start){
return cljs.core.reduce.call(null,(function (span,p__871787){
var vec__871788 = p__871787;
var n = cljs.core.nth.call(null,vec__871788,(0),null);
var vec__871789 = cljs.core.nth.call(null,vec__871788,(1),null);
var d = cljs.core.nth.call(null,vec__871789,(0),null);
var p = cljs.core.nth.call(null,vec__871789,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc_in.call(null,span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,n], null),d);
} else {
return span;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.second.call(null,cljs.core.last.call(null,loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start))));
});
/**
 * Finds the shortest path from start to end, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2).
 *   Returns a vector: [path distance]
 */
loom.alg_generic.dijkstra_path_dist = (function loom$alg_generic$dijkstra_path_dist(successors,dist,start,end){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__871793){
var vec__871794 = p__871793;
var node = cljs.core.nth.call(null,vec__871794,(0),null);
var _ = cljs.core.nth.call(null,vec__871794,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__871795 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__871795,(0),null);
var end_state = cljs.core.nth.call(null,vec__871795,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,cljs.core.comp.call(null,cljs.core.second,end_state),end)),cljs.core.first.call(null,end_state.call(null,end))], null);
} else {
return null;
}
});
/**
 * Finds the shortest path from start to end, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2)
 */
loom.alg_generic.dijkstra_path = (function loom$alg_generic$dijkstra_path(successors,dist,start,end){
return cljs.core.first.call(null,loom.alg_generic.dijkstra_path_dist.call(null,successors,dist,start,end));
});
loom.alg_generic.bits_per_long = cljs.core.long$.call(null,(64));
/**
 * Returns the number of longs required to store bits count bits in a bitmap.
 */
loom.alg_generic.bm_longs = (function loom$alg_generic$bm_longs(bits){
return cljs.core.long$.call(null,Math.ceil((bits / loom.alg_generic.bits_per_long)));
});
/**
 * Create new empty bitmap.
 */
loom.alg_generic.bm_new = (function loom$alg_generic$bm_new(){
return cljs.core.long_array.call(null,(1));
});
/**
 * Set boolean state of bit in 'bitmap at 'idx to true.
 */
loom.alg_generic.bm_set = (function loom$alg_generic$bm_set(bitmap,idx){
var size = (function (){var x__24542__auto__ = cljs.core.count.call(null,bitmap);
var y__24543__auto__ = loom.alg_generic.bm_longs.call(null,(idx + (1)));
return ((x__24542__auto__ > y__24543__auto__) ? x__24542__auto__ : y__24543__auto__);
})();
var n_zeros = (size - cljs.core.count.call(null,bitmap));
var new_bitmap = bitmap.slice().concat((new Array(n_zeros)).fill((0)));
var chunk = cljs.core.quot.call(null,idx,loom.alg_generic.bits_per_long);
var offset = cljs.core.mod.call(null,idx,loom.alg_generic.bits_per_long);
var mask = ((0) | (1 << offset));
var value = (new_bitmap[chunk]);
var new_value = (value | mask);
(new_bitmap[chunk] = new_value);

return new_bitmap;
});
/**
 * Get boolean state of bit in 'bitmap at 'idx.
 */
loom.alg_generic.bm_get = (function loom$alg_generic$bm_get(bitmap,idx){
if((loom.alg_generic.bm_longs.call(null,(idx + (1))) <= cljs.core.count.call(null,bitmap))){
var chunk = cljs.core.quot.call(null,idx,loom.alg_generic.bits_per_long);
var offset = cljs.core.mod.call(null,idx,loom.alg_generic.bits_per_long);
var mask = ((0) | (1 << offset));
var value = (bitmap[chunk]);
var masked_value = (value & mask);
return !((masked_value === (0)));
} else {
return null;
}
});
/**
 * Logically OR 'bitmaps together.
 */
loom.alg_generic.bm_or = (function loom$alg_generic$bm_or(var_args){
var args__25276__auto__ = [];
var len__25269__auto___871820 = arguments.length;
var i__25270__auto___871821 = (0);
while(true){
if((i__25270__auto___871821 < len__25269__auto___871820)){
args__25276__auto__.push((arguments[i__25270__auto___871821]));

var G__871822 = (i__25270__auto___871821 + (1));
i__25270__auto___871821 = G__871822;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((0) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((0)),(0))):null);
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(argseq__25277__auto__);
});

loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic = (function (bitmaps){
if(cljs.core.empty_QMARK_.call(null,bitmaps)){
return loom.alg_generic.bm_new.call(null);
} else {
var size = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,bitmaps));
var bitmap = cljs.core.first.call(null,bitmaps);
var n_zeros = (size - cljs.core.count.call(null,bitmap));
var new_bitmap = bitmap.slice().concat((new Array(n_zeros)).fill((0)));
var seq__871800_871823 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__871807_871824 = null;
var count__871808_871825 = (0);
var i__871809_871826 = (0);
while(true){
if((i__871809_871826 < count__871808_871825)){
var bitmap_871827__$1 = cljs.core._nth.call(null,chunk__871807_871824,i__871809_871826);
var seq__871810_871828 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_871827__$1));
var chunk__871812_871829 = null;
var count__871813_871830 = (0);
var i__871814_871831 = (0);
while(true){
if((i__871814_871831 < count__871813_871830)){
var vec__871816_871832 = cljs.core._nth.call(null,chunk__871812_871829,i__871814_871831);
var idx_871833 = cljs.core.nth.call(null,vec__871816_871832,(0),null);
var value_871834 = cljs.core.nth.call(null,vec__871816_871832,(1),null);
var masked_value_871835 = (value_871834 | (new_bitmap[idx_871833]));
(new_bitmap[idx_871833] = masked_value_871835);

var G__871836 = seq__871810_871828;
var G__871837 = chunk__871812_871829;
var G__871838 = count__871813_871830;
var G__871839 = (i__871814_871831 + (1));
seq__871810_871828 = G__871836;
chunk__871812_871829 = G__871837;
count__871813_871830 = G__871838;
i__871814_871831 = G__871839;
continue;
} else {
var temp__4425__auto___871840 = cljs.core.seq.call(null,seq__871810_871828);
if(temp__4425__auto___871840){
var seq__871810_871841__$1 = temp__4425__auto___871840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__871810_871841__$1)){
var c__25014__auto___871842 = cljs.core.chunk_first.call(null,seq__871810_871841__$1);
var G__871843 = cljs.core.chunk_rest.call(null,seq__871810_871841__$1);
var G__871844 = c__25014__auto___871842;
var G__871845 = cljs.core.count.call(null,c__25014__auto___871842);
var G__871846 = (0);
seq__871810_871828 = G__871843;
chunk__871812_871829 = G__871844;
count__871813_871830 = G__871845;
i__871814_871831 = G__871846;
continue;
} else {
var vec__871817_871847 = cljs.core.first.call(null,seq__871810_871841__$1);
var idx_871848 = cljs.core.nth.call(null,vec__871817_871847,(0),null);
var value_871849 = cljs.core.nth.call(null,vec__871817_871847,(1),null);
var masked_value_871850 = (value_871849 | (new_bitmap[idx_871848]));
(new_bitmap[idx_871848] = masked_value_871850);

var G__871851 = cljs.core.next.call(null,seq__871810_871841__$1);
var G__871852 = null;
var G__871853 = (0);
var G__871854 = (0);
seq__871810_871828 = G__871851;
chunk__871812_871829 = G__871852;
count__871813_871830 = G__871853;
i__871814_871831 = G__871854;
continue;
}
} else {
}
}
break;
}

var G__871855 = seq__871800_871823;
var G__871856 = chunk__871807_871824;
var G__871857 = count__871808_871825;
var G__871858 = (i__871809_871826 + (1));
seq__871800_871823 = G__871855;
chunk__871807_871824 = G__871856;
count__871808_871825 = G__871857;
i__871809_871826 = G__871858;
continue;
} else {
var temp__4425__auto___871859 = cljs.core.seq.call(null,seq__871800_871823);
if(temp__4425__auto___871859){
var seq__871800_871860__$1 = temp__4425__auto___871859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__871800_871860__$1)){
var c__25014__auto___871861 = cljs.core.chunk_first.call(null,seq__871800_871860__$1);
var G__871862 = cljs.core.chunk_rest.call(null,seq__871800_871860__$1);
var G__871863 = c__25014__auto___871861;
var G__871864 = cljs.core.count.call(null,c__25014__auto___871861);
var G__871865 = (0);
seq__871800_871823 = G__871862;
chunk__871807_871824 = G__871863;
count__871808_871825 = G__871864;
i__871809_871826 = G__871865;
continue;
} else {
var bitmap_871866__$1 = cljs.core.first.call(null,seq__871800_871860__$1);
var seq__871801_871867 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_871866__$1));
var chunk__871803_871868 = null;
var count__871804_871869 = (0);
var i__871805_871870 = (0);
while(true){
if((i__871805_871870 < count__871804_871869)){
var vec__871818_871871 = cljs.core._nth.call(null,chunk__871803_871868,i__871805_871870);
var idx_871872 = cljs.core.nth.call(null,vec__871818_871871,(0),null);
var value_871873 = cljs.core.nth.call(null,vec__871818_871871,(1),null);
var masked_value_871874 = (value_871873 | (new_bitmap[idx_871872]));
(new_bitmap[idx_871872] = masked_value_871874);

var G__871875 = seq__871801_871867;
var G__871876 = chunk__871803_871868;
var G__871877 = count__871804_871869;
var G__871878 = (i__871805_871870 + (1));
seq__871801_871867 = G__871875;
chunk__871803_871868 = G__871876;
count__871804_871869 = G__871877;
i__871805_871870 = G__871878;
continue;
} else {
var temp__4425__auto___871879__$1 = cljs.core.seq.call(null,seq__871801_871867);
if(temp__4425__auto___871879__$1){
var seq__871801_871880__$1 = temp__4425__auto___871879__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__871801_871880__$1)){
var c__25014__auto___871881 = cljs.core.chunk_first.call(null,seq__871801_871880__$1);
var G__871882 = cljs.core.chunk_rest.call(null,seq__871801_871880__$1);
var G__871883 = c__25014__auto___871881;
var G__871884 = cljs.core.count.call(null,c__25014__auto___871881);
var G__871885 = (0);
seq__871801_871867 = G__871882;
chunk__871803_871868 = G__871883;
count__871804_871869 = G__871884;
i__871805_871870 = G__871885;
continue;
} else {
var vec__871819_871886 = cljs.core.first.call(null,seq__871801_871880__$1);
var idx_871887 = cljs.core.nth.call(null,vec__871819_871886,(0),null);
var value_871888 = cljs.core.nth.call(null,vec__871819_871886,(1),null);
var masked_value_871889 = (value_871888 | (new_bitmap[idx_871887]));
(new_bitmap[idx_871887] = masked_value_871889);

var G__871890 = cljs.core.next.call(null,seq__871801_871880__$1);
var G__871891 = null;
var G__871892 = (0);
var G__871893 = (0);
seq__871801_871867 = G__871890;
chunk__871803_871868 = G__871891;
count__871804_871869 = G__871892;
i__871805_871870 = G__871893;
continue;
}
} else {
}
}
break;
}

var G__871894 = cljs.core.next.call(null,seq__871800_871860__$1);
var G__871895 = null;
var G__871896 = (0);
var G__871897 = (0);
seq__871800_871823 = G__871894;
chunk__871807_871824 = G__871895;
count__871808_871825 = G__871896;
i__871809_871826 = G__871897;
continue;
}
} else {
}
}
break;
}

return new_bitmap;
}
});

loom.alg_generic.bm_or.cljs$lang$maxFixedArity = (0);

loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq871799){
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq871799));
});
/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__24983__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__871904(s__871905){
return (new cljs.core.LazySeq(null,(function (){
var s__871905__$1 = s__871905;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__871905__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var chunk = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24979__auto__ = ((function (s__871905__$1,chunk,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__871904_$_iter__871906(s__871907){
return (new cljs.core.LazySeq(null,((function (s__871905__$1,chunk,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__871907__$1 = s__871907;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__871907__$1);
if(temp__4425__auto____$1){
var s__871907__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__871907__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__871907__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__871909 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__871908 = (0);
while(true){
if((i__871908 < size__24982__auto__)){
var offset = cljs.core._nth.call(null,c__24981__auto__,i__871908);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__871909,idx);

var G__871910 = (i__871908 + (1));
i__871908 = G__871910;
continue;
} else {
var G__871911 = (i__871908 + (1));
i__871908 = G__871911;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__871909),loom$alg_generic$bm_get_indicies_$_iter__871904_$_iter__871906.call(null,cljs.core.chunk_rest.call(null,s__871907__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__871909),null);
}
} else {
var offset = cljs.core.first.call(null,s__871907__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__871904_$_iter__871906.call(null,cljs.core.rest.call(null,s__871907__$2)));
} else {
var G__871912 = cljs.core.rest.call(null,s__871907__$2);
s__871907__$1 = G__871912;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__871905__$1,chunk,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__871905__$1,chunk,xs__4977__auto__,temp__4425__auto__))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,loom$alg_generic$bm_get_indicies_$_iter__871904.call(null,cljs.core.rest.call(null,s__871905__$1)));
} else {
var G__871913 = cljs.core.rest.call(null,s__871905__$1);
s__871905__$1 = G__871913;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24983__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,bitmap)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
loom.alg_generic.Ancestry = (function (node__GT_idx,idx__GT_node,bitmaps,__meta,__extmap,__hash){
this.node__GT_idx = node__GT_idx;
this.idx__GT_node = idx__GT_node;
this.bitmaps = bitmaps;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24825__auto__,k__24826__auto__){
var self__ = this;
var this__24825__auto____$1 = this;
return cljs.core._lookup.call(null,this__24825__auto____$1,k__24826__auto__,null);
});

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24827__auto__,k871915,else__24828__auto__){
var self__ = this;
var this__24827__auto____$1 = this;
var G__871917 = (((k871915 instanceof cljs.core.Keyword))?k871915.fqn:null);
switch (G__871917) {
case "node->idx":
return self__.node__GT_idx;

break;
case "idx->node":
return self__.idx__GT_node;

break;
case "bitmaps":
return self__.bitmaps;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k871915,else__24828__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24839__auto__,writer__24840__auto__,opts__24841__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
var pr_pair__24842__auto__ = ((function (this__24839__auto____$1){
return (function (keyval__24843__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,cljs.core.pr_writer,""," ","",opts__24841__auto__,keyval__24843__auto__);
});})(this__24839__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,pr_pair__24842__auto__,"#loom.alg-generic.Ancestry{",", ","}",opts__24841__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$ = true;

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__871914){
var self__ = this;
var G__871914__$1 = this;
return (new cljs.core.RecordIter((0),G__871914__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24823__auto__){
var self__ = this;
var this__24823__auto____$1 = this;
return self__.__meta;
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24819__auto__){
var self__ = this;
var this__24819__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24820__auto__){
var self__ = this;
var this__24820__auto____$1 = this;
var h__24646__auto__ = self__.__hash;
if(!((h__24646__auto__ == null))){
return h__24646__auto__;
} else {
var h__24646__auto____$1 = cljs.core.hash_imap.call(null,this__24820__auto____$1);
self__.__hash = h__24646__auto____$1;

return h__24646__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24821__auto__,other__24822__auto__){
var self__ = this;
var this__24821__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24199__auto__ = other__24822__auto__;
if(cljs.core.truth_(and__24199__auto__)){
var and__24199__auto____$1 = (this__24821__auto____$1.constructor === other__24822__auto__.constructor);
if(and__24199__auto____$1){
return cljs.core.equiv_map.call(null,this__24821__auto____$1,other__24822__auto__);
} else {
return and__24199__auto____$1;
}
} else {
return and__24199__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24834__auto__,k__24835__auto__){
var self__ = this;
var this__24834__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),null], null), null),k__24835__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24834__auto____$1),self__.__meta),k__24835__auto__);
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24835__auto__)),null));
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24832__auto__,k__24833__auto__,G__871914){
var self__ = this;
var this__24832__auto____$1 = this;
var pred__871918 = cljs.core.keyword_identical_QMARK_;
var expr__871919 = k__24833__auto__;
if(cljs.core.truth_(pred__871918.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__871919))){
return (new loom.alg_generic.Ancestry(G__871914,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__871918.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__871919))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__871914,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__871918.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__871919))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__871914,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24833__auto__,G__871914),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24837__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24824__auto__,G__871914){
var self__ = this;
var this__24824__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__871914,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24830__auto__,entry__24831__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24831__auto__)){
return cljs.core._assoc.call(null,this__24830__auto____$1,cljs.core._nth.call(null,entry__24831__auto__,(0)),cljs.core._nth.call(null,entry__24831__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24830__auto____$1,entry__24831__auto__);
}
});

loom.alg_generic.Ancestry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node->idx","node->idx",1793236754,null),new cljs.core.Symbol(null,"idx->node","idx->node",-842528594,null),new cljs.core.Symbol(null,"bitmaps","bitmaps",-1506736927,null)], null);
});

loom.alg_generic.Ancestry.cljs$lang$type = true;

loom.alg_generic.Ancestry.cljs$lang$ctorPrSeq = (function (this__24859__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.alg-generic/Ancestry");
});

loom.alg_generic.Ancestry.cljs$lang$ctorPrWriter = (function (this__24859__auto__,writer__24860__auto__){
return cljs.core._write.call(null,writer__24860__auto__,"loom.alg-generic/Ancestry");
});

loom.alg_generic.__GT_Ancestry = (function loom$alg_generic$__GT_Ancestry(node__GT_idx,idx__GT_node,bitmaps){
return (new loom.alg_generic.Ancestry(node__GT_idx,idx__GT_node,bitmaps,null,null,null));
});

loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__871916){
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__871916),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__871916),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__871916),null,cljs.core.dissoc.call(null,G__871916,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)),null));
});

/**
 * Create a new, empty Ancestry cache.
 */
loom.alg_generic.ancestry_new = (function loom$alg_generic$ancestry_new(){
return loom.alg_generic.__GT_Ancestry.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY);
});
/**
 * Finds if a 'node is contained in the 'ancestry cache.
 */
loom.alg_generic.ancestry_contains_QMARK_ = (function loom$alg_generic$ancestry_contains_QMARK_(ancestry,node){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry),node);
});
/**
 * Adds a 'node and its 'parents associations to the 'ancestry cache.
 */
loom.alg_generic.ancestry_add = (function loom$alg_generic$ancestry_add(var_args){
var args__25276__auto__ = [];
var len__25269__auto___871927 = arguments.length;
var i__25270__auto___871928 = (0);
while(true){
if((i__25270__auto___871928 < len__25269__auto___871927)){
args__25276__auto__.push((arguments[i__25270__auto___871928]));

var G__871929 = (i__25270__auto___871928 + (1));
i__25270__auto___871928 = G__871929;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((2) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((2)),(0))):null);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25277__auto__);
});

loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic = (function (ancestry,node,parents){
if(cljs.core.truth_(loom.alg_generic.ancestry_contains_QMARK_.call(null,ancestry,node))){
return ancestry;
} else {
var map__871925 = ancestry;
var map__871925__$1 = ((((!((map__871925 == null)))?((((map__871925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__871925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__871925):map__871925);
var node__GT_idx = cljs.core.get.call(null,map__871925__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__871925__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__871925__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var nid = cljs.core.count.call(null,node__GT_idx);
var node__GT_idx__$1 = cljs.core.assoc.call(null,node__GT_idx,node,nid);
var idx__GT_node__$1 = cljs.core.assoc.call(null,idx__GT_node,nid,node);
var pidxs = cljs.core.map.call(null,node__GT_idx__$1,parents);
var new_bitmap = ((cljs.core.empty_QMARK_.call(null,pidxs))?loom.alg_generic.bm_new.call(null):cljs.core.apply.call(null,loom.alg_generic.bm_or,cljs.core.map.call(null,bitmaps,pidxs)));
var new_bitmap__$1 = cljs.core.reduce.call(null,loom.alg_generic.bm_set,new_bitmap,pidxs);
var bitmaps__$1 = cljs.core.conj.call(null,bitmaps,new_bitmap__$1);
return loom.alg_generic.__GT_Ancestry.call(null,node__GT_idx__$1,idx__GT_node__$1,bitmaps__$1);
}
});

loom.alg_generic.ancestry_add.cljs$lang$maxFixedArity = (2);

loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq871922){
var G__871923 = cljs.core.first.call(null,seq871922);
var seq871922__$1 = cljs.core.next.call(null,seq871922);
var G__871924 = cljs.core.first.call(null,seq871922__$1);
var seq871922__$2 = cljs.core.next.call(null,seq871922__$1);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic(G__871923,G__871924,seq871922__$2);
});
/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__871932 = ancestry;
var map__871932__$1 = ((((!((map__871932 == null)))?((((map__871932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__871932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__871932):map__871932);
var node__GT_idx = cljs.core.get.call(null,map__871932__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__871932__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,childer);
var pidx = node__GT_idx.call(null,parenter);
return cljs.core.boolean$.call(null,(cljs.core.truth_((function (){var and__24199__auto__ = cidx;
if(cljs.core.truth_(and__24199__auto__)){
return pidx;
} else {
return and__24199__auto__;
}
})())?loom.alg_generic.bm_get.call(null,cljs.core.get.call(null,bitmaps,cidx),pidx):null));
});
/**
 * Returns all of the ancestors of 'child node.
 */
loom.alg_generic.ancestors = (function loom$alg_generic$ancestors(ancestry,child){
var map__871936 = ancestry;
var map__871936__$1 = ((((!((map__871936 == null)))?((((map__871936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__871936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__871936):map__871936);
var node__GT_idx = cljs.core.get.call(null,map__871936__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__871936__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__871936__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});

//# sourceMappingURL=alg_generic.js.map