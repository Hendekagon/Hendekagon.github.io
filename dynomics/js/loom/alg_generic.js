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
return (function (p1__1883694_SHARP_){
return loom$alg_generic$paths.call(null,preds,cljs.core.conj.call(null,path,p1__1883694_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__1883693_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__1883693_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__1883695_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__1883695_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__1883698){
var vec__1883699 = p__1883698;
var n = cljs.core.nth.call(null,vec__1883699,(0),null);
var p = cljs.core.nth.call(null,vec__1883699,(1),null);
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
var args__25226__auto__ = [];
var len__25219__auto___1883706 = arguments.length;
var i__25220__auto___1883707 = (0);
while(true){
if((i__25220__auto___1883707 < len__25219__auto___1883706)){
args__25226__auto__.push((arguments[i__25220__auto___1883707]));

var G__1883708 = (i__25220__auto___1883707 + (1));
i__25220__auto___1883707 = G__1883708;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((2) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((2)),(0))):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25227__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__1883703){
var map__1883704 = p__1883703;
var map__1883704__$1 = ((((!((map__1883704 == null)))?((((map__1883704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1883704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1883704):map__1883704);
var seen = cljs.core.get.call(null,map__1883704__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__1883704,map__1883704__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__4425__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__4425__auto__,map__1883704,map__1883704__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__4425__auto__,map__1883704,map__1883704__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__1883704,map__1883704__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq1883700){
var G__1883701 = cljs.core.first.call(null,seq1883700);
var seq1883700__$1 = cljs.core.next.call(null,seq1883700);
var G__1883702 = cljs.core.first.call(null,seq1883700__$1);
var seq1883700__$2 = cljs.core.next.call(null,seq1883700__$1);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic(G__1883701,G__1883702,seq1883700__$2);
});
/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.pre_edge_traverse = (function loom$alg_generic$pre_edge_traverse(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1883715 = arguments.length;
var i__25220__auto___1883716 = (0);
while(true){
if((i__25220__auto___1883716 < len__25219__auto___1883715)){
args__25226__auto__.push((arguments[i__25220__auto___1883716]));

var G__1883717 = (i__25220__auto___1883716 + (1));
i__25220__auto___1883716 = G__1883717;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((2) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((2)),(0))):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25227__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__1883712){
var map__1883713 = p__1883712;
var map__1883713__$1 = ((((!((map__1883713 == null)))?((((map__1883713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1883713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1883713):map__1883713);
var seen = cljs.core.get.call(null,map__1883713__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__1883713,map__1883713__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__4423__auto__)){
var nbr = temp__4423__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4423__auto__,map__1883713,map__1883713__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4423__auto__,map__1883713,map__1883713__$1,seen))
,null,null)));
} else {
var temp__4425__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
var G__1883718 = successors__$1;
var G__1883719 = parent;
var G__1883720 = cljs.core.peek.call(null,nbrstack);
var G__1883721 = cljs.core.pop.call(null,stack);
var G__1883722 = cljs.core.pop.call(null,nbrstack);
var G__1883723 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__1883718;
start__$1 = G__1883719;
nbrs = G__1883720;
stack = G__1883721;
nbrstack = G__1883722;
seen__$1 = G__1883723;
continue;
} else {
return null;
}
}
break;
}
});})(map__1883713,map__1883713__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq1883709){
var G__1883710 = cljs.core.first.call(null,seq1883709);
var seq1883709__$1 = cljs.core.next.call(null,seq1883709);
var G__1883711 = cljs.core.first.call(null,seq1883709__$1);
var seq1883709__$2 = cljs.core.next.call(null,seq1883709__$1);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__1883710,G__1883711,seq1883709__$2);
});
/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1883730 = arguments.length;
var i__25220__auto___1883731 = (0);
while(true){
if((i__25220__auto___1883731 < len__25219__auto___1883730)){
args__25226__auto__.push((arguments[i__25220__auto___1883731]));

var G__1883732 = (i__25220__auto___1883731 + (1));
i__25220__auto___1883731 = G__1883732;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((2) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((2)),(0))):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25227__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__1883727){
var map__1883728 = p__1883727;
var map__1883728__$1 = ((((!((map__1883728 == null)))?((((map__1883728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1883728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1883728):map__1883728);
var seen = cljs.core.get.call(null,map__1883728__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__1883728__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__1883733 = seen__$2;
var G__1883734 = cljs.core.assoc.call(null,preds,u,v);
var G__1883735 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__1883733;
preds = G__1883734;
stack = G__1883735;
continue;
} else {
var G__1883736 = seen__$2;
var G__1883737 = preds;
var G__1883738 = cljs.core.pop.call(null,stack);
seen__$1 = G__1883736;
preds = G__1883737;
stack = G__1883738;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq1883724){
var G__1883725 = cljs.core.first.call(null,seq1883724);
var seq1883724__$1 = cljs.core.next.call(null,seq1883724);
var G__1883726 = cljs.core.first.call(null,seq1883724__$1);
var seq1883724__$2 = cljs.core.next.call(null,seq1883724__$1);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(G__1883725,G__1883726,seq1883724__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1883745 = arguments.length;
var i__25220__auto___1883746 = (0);
while(true){
if((i__25220__auto___1883746 < len__25219__auto___1883745)){
args__25226__auto__.push((arguments[i__25220__auto___1883746]));

var G__1883747 = (i__25220__auto___1883746 + (1));
i__25220__auto___1883746 = G__1883747;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((2) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((2)),(0))):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25227__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__1883742){
var map__1883743 = p__1883742;
var map__1883743__$1 = ((((!((map__1883743 == null)))?((((map__1883743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1883743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1883743):map__1883743);
var seen = cljs.core.get.call(null,map__1883743__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__1883743__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__1883748 = seen__$2;
var G__1883749 = cljs.core.conj.call(null,result,v);
var G__1883750 = cljs.core.pop.call(null,stack);
seen__$1 = G__1883748;
result = G__1883749;
stack = G__1883750;
continue;
} else {
var G__1883751 = seen__$2;
var G__1883752 = result;
var G__1883753 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__1883751;
result = G__1883752;
stack = G__1883753;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq1883739){
var G__1883740 = cljs.core.first.call(null,seq1883739);
var seq1883739__$1 = cljs.core.next.call(null,seq1883739);
var G__1883741 = cljs.core.first.call(null,seq1883739__$1);
var seq1883739__$2 = cljs.core.next.call(null,seq1883739__$1);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__1883740,G__1883741,seq1883739__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.post_edge_traverse = (function loom$alg_generic$post_edge_traverse(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1883760 = arguments.length;
var i__25220__auto___1883761 = (0);
while(true){
if((i__25220__auto___1883761 < len__25219__auto___1883760)){
args__25226__auto__.push((arguments[i__25220__auto___1883761]));

var G__1883762 = (i__25220__auto___1883761 + (1));
i__25220__auto___1883761 = G__1883762;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((2) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((2)),(0))):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25227__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__1883757){
var map__1883758 = p__1883757;
var map__1883758__$1 = ((((!((map__1883758 == null)))?((((map__1883758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1883758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1883758):map__1883758);
var seen = cljs.core.get.call(null,map__1883758__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__1883758__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__1883763 = start__$1;
var G__1883764 = cljs.core.next.call(null,nbrs);
var G__1883765 = stack;
var G__1883766 = nbrstack;
var G__1883767 = seen__$2;
var G__1883768 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__1883763;
nbrs = G__1883764;
stack = G__1883765;
nbrstack = G__1883766;
seen__$1 = G__1883767;
edges = G__1883768;
continue;
} else {
var G__1883769 = nbr;
var G__1883770 = successors.call(null,nbr);
var G__1883771 = cljs.core.conj.call(null,stack,start__$1);
var G__1883772 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__1883773 = seen__$2;
var G__1883774 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__1883769;
nbrs = G__1883770;
stack = G__1883771;
nbrstack = G__1883772;
seen__$1 = G__1883773;
edges = G__1883774;
continue;
}
} else {
var temp__4423__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4423__auto____$1)){
var parent = temp__4423__auto____$1;
var G__1883775 = parent;
var G__1883776 = cljs.core.peek.call(null,nbrstack);
var G__1883777 = cljs.core.pop.call(null,stack);
var G__1883778 = cljs.core.pop.call(null,nbrstack);
var G__1883779 = seen__$2;
var G__1883780 = edges;
start__$1 = G__1883775;
nbrs = G__1883776;
stack = G__1883777;
nbrstack = G__1883778;
seen__$1 = G__1883779;
edges = G__1883780;
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

loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq1883754){
var G__1883755 = cljs.core.first.call(null,seq1883754);
var seq1883754__$1 = cljs.core.next.call(null,seq1883754);
var G__1883756 = cljs.core.first.call(null,seq1883754__$1);
var seq1883754__$2 = cljs.core.next.call(null,seq1883754__$1);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__1883755,G__1883756,seq1883754__$2);
});
/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var args1883781 = [];
var len__25219__auto___1883784 = arguments.length;
var i__25220__auto___1883785 = (0);
while(true){
if((i__25220__auto___1883785 < len__25219__auto___1883784)){
args1883781.push((arguments[i__25220__auto___1883785]));

var G__1883786 = (i__25220__auto___1883785 + (1));
i__25220__auto___1883785 = G__1883786;
continue;
} else {
}
break;
}

var G__1883783 = args1883781.length;
switch (G__1883783) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1883781.length)].join('')));

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
var G__1883788 = seen__$2;
var G__1883789 = explored__$1;
var G__1883790 = result;
var G__1883791 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__1883788;
explored__$1 = G__1883789;
result = G__1883790;
stack = G__1883791;
continue;
}
} else {
var G__1883792 = seen__$2;
var G__1883793 = cljs.core.conj.call(null,explored__$1,v);
var G__1883794 = cljs.core.conj.call(null,result,v);
var G__1883795 = cljs.core.pop.call(null,stack);
seen__$1 = G__1883792;
explored__$1 = G__1883793;
result = G__1883794;
stack = G__1883795;
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
var args__25226__auto__ = [];
var len__25219__auto___1883830 = arguments.length;
var i__25220__auto___1883831 = (0);
while(true){
if((i__25220__auto___1883831 < len__25219__auto___1883830)){
args__25226__auto__.push((arguments[i__25220__auto___1883831]));

var G__1883832 = (i__25220__auto___1883831 + (1));
i__25220__auto___1883831 = G__1883832;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((2) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((2)),(0))):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25227__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__1883803){
var map__1883804 = p__1883803;
var map__1883804__$1 = ((((!((map__1883804 == null)))?((((map__1883804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1883804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1883804):map__1883804);
var f = cljs.core.get.call(null,map__1883804__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__1883804__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__1883804__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__24161__auto__ = f;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return ((function (or__24161__auto__,map__1883804,map__1883804__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__24161__auto__,map__1883804,map__1883804__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__24161__auto__ = when;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__1883804,map__1883804__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__4425__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__1883821 = temp__4425__auto__;
var node = cljs.core.nth.call(null,vec__1883821,(0),null);
var depth = cljs.core.nth.call(null,vec__1883821,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__1883821,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__1883804,map__1883804__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__1883821,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__1883804,map__1883804__$1,f,when,seen){
return (function (p1__1883797_SHARP_){
return nbr_pred.call(null,p1__1883797_SHARP_,node,(depth + (1)));
});})(vec__1883821,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__1883804,map__1883804__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__1883821,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__1883804,map__1883804__$1,f,when,seen){
return (function (p1__1883796_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__1883796_SHARP_);
});})(vec__1883821,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__1883804,map__1883804__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__24933__auto__ = ((function (nbrs,vec__1883821,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__1883804,map__1883804__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__1883822(s__1883823){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__1883821,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__1883804,map__1883804__$1,f,when,seen){
return (function (){
var s__1883823__$1 = s__1883823;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1883823__$1);
if(temp__4425__auto____$1){
var s__1883823__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1883823__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1883823__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1883825 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1883824 = (0);
while(true){
if((i__1883824 < size__24932__auto__)){
var nbr = cljs.core._nth.call(null,c__24931__auto__,i__1883824);
cljs.core.chunk_append.call(null,b__1883825,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__1883833 = (i__1883824 + (1));
i__1883824 = G__1883833;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1883825),loom$alg_generic$step_$_iter__1883822.call(null,cljs.core.chunk_rest.call(null,s__1883823__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1883825),null);
}
} else {
var nbr = cljs.core.first.call(null,s__1883823__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__1883822.call(null,cljs.core.rest.call(null,s__1883823__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__1883821,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__1883804,map__1883804__$1,f,when,seen))
,null,null));
});})(nbrs,vec__1883821,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__1883804,map__1883804__$1,f,when,seen))
;
return iter__24933__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__1883821,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__1883804,map__1883804__$1,f,when,seen){
return (function (p1__1883798_SHARP_,p2__1883799_SHARP_){
return cljs.core.assoc.call(null,p1__1883798_SHARP_,p2__1883799_SHARP_,node);
});})(nbrs,vec__1883821,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__1883804,map__1883804__$1,f,when,seen))
,preds,nbrs));
});})(vec__1883821,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__1883804,map__1883804__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__1883804,map__1883804__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.fromArray([start,null], true, false),(function (){var iter__24933__auto__ = ((function (f__$1,nbr_pred,map__1883804,map__1883804__$1,f,when,seen){
return (function loom$alg_generic$iter__1883826(s__1883827){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__1883804,map__1883804__$1,f,when,seen){
return (function (){
var s__1883827__$1 = s__1883827;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1883827__$1);
if(temp__4425__auto__){
var s__1883827__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1883827__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1883827__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1883829 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1883828 = (0);
while(true){
if((i__1883828 < size__24932__auto__)){
var s = cljs.core._nth.call(null,c__24931__auto__,i__1883828);
cljs.core.chunk_append.call(null,b__1883829,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__1883834 = (i__1883828 + (1));
i__1883828 = G__1883834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1883829),loom$alg_generic$iter__1883826.call(null,cljs.core.chunk_rest.call(null,s__1883827__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1883829),null);
}
} else {
var s = cljs.core.first.call(null,s__1883827__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__1883826.call(null,cljs.core.rest.call(null,s__1883827__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__1883804,map__1883804__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__1883804,map__1883804__$1,f,when,seen))
;
return iter__24933__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq1883800){
var G__1883801 = cljs.core.first.call(null,seq1883800);
var seq1883800__$1 = cljs.core.next.call(null,seq1883800);
var G__1883802 = cljs.core.first.call(null,seq1883800__$1);
var seq1883800__$2 = cljs.core.next.call(null,seq1883800__$1);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__1883801,G__1883802,seq1883800__$2);
});
/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1883841 = arguments.length;
var i__25220__auto___1883842 = (0);
while(true){
if((i__25220__auto___1883842 < len__25219__auto___1883841)){
args__25226__auto__.push((arguments[i__25220__auto___1883842]));

var G__1883843 = (i__25220__auto___1883842 + (1));
i__25220__auto___1883842 = G__1883843;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((2) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((2)),(0))):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25227__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__1883838){
var map__1883839 = p__1883838;
var map__1883839__$1 = ((((!((map__1883839 == null)))?((((map__1883839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1883839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1883839):map__1883839);
var seen = cljs.core.get.call(null,map__1883839__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__1883839,map__1883839__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__1883839,map__1883839__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq1883835){
var G__1883836 = cljs.core.first.call(null,seq1883835);
var seq1883835__$1 = cljs.core.next.call(null,seq1883835);
var G__1883837 = cljs.core.first.call(null,seq1883835__$1);
var seq1883835__$2 = cljs.core.next.call(null,seq1883835__$1);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic(G__1883836,G__1883837,seq1883835__$2);
});
/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1883853 = arguments.length;
var i__25220__auto___1883854 = (0);
while(true){
if((i__25220__auto___1883854 < len__25219__auto___1883853)){
args__25226__auto__.push((arguments[i__25220__auto___1883854]));

var G__1883855 = (i__25220__auto___1883854 + (1));
i__25220__auto___1883854 = G__1883855;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((3) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((3)),(0))):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25227__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__1883848){
var map__1883849 = p__1883848;
var map__1883849__$1 = ((((!((map__1883849 == null)))?((((map__1883849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1883849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1883849):map__1883849);
var opts = map__1883849__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__4425__auto__ = cljs.core.some.call(null,((function (opts__$1,map__1883849,map__1883849__$1,opts){
return (function (p__1883851){
var vec__1883852 = p__1883851;
var _ = cljs.core.nth.call(null,vec__1883852,(0),null);
var pm = cljs.core.nth.call(null,vec__1883852,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__1883852,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__1883849,map__1883849__$1,opts))
,cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__4425__auto__)){
var preds = temp__4425__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq1883844){
var G__1883845 = cljs.core.first.call(null,seq1883844);
var seq1883844__$1 = cljs.core.next.call(null,seq1883844);
var G__1883846 = cljs.core.first.call(null,seq1883844__$1);
var seq1883844__$2 = cljs.core.next.call(null,seq1883844__$1);
var G__1883847 = cljs.core.first.call(null,seq1883844__$2);
var seq1883844__$3 = cljs.core.next.call(null,seq1883844__$2);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__1883845,G__1883846,G__1883847,seq1883844__$3);
});
/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__1883856 = m2;
var G__1883857 = m1;
m1 = G__1883856;
m2 = G__1883857;
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
if(cljs.core.truth_((function (){var or__24161__auto__ = cljs.core.seq.call(null,intersects);
if(or__24161__auto__){
return or__24161__auto__;
} else {
var or__24161__auto____$1 = loom.alg_generic.future_done_QMARK_.call(null,search1);
if(cljs.core.truth_(or__24161__auto____$1)){
return or__24161__auto____$1;
} else {
return loom.alg_generic.future_done_QMARK_.call(null,search2);
}
}
})())){
cljs.core.reset_BANG_.call(null,done_QMARK_,true);

if(cljs.core.seq.call(null,intersects)){
var intersect = cljs.core.apply.call(null,cljs.core.min_key,((function (intersects,done_QMARK_,preds1,preds2,search,search1,search2,find_intersects){
return (function (p1__1883858_SHARP_){
return (cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds1),p1__1883858_SHARP_)) + cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds2),p1__1883858_SHARP_)));
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
var G__1883859 = find_intersects.call(null);
intersects = G__1883859;
continue;
}
break;
}
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__24933__auto__ = (function loom$alg_generic$reverse_edges_$_iter__1883866(s__1883867){
return (new cljs.core.LazySeq(null,(function (){
var s__1883867__$1 = s__1883867;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1883867__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var node = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24929__auto__ = ((function (s__1883867__$1,node,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__1883866_$_iter__1883868(s__1883869){
return (new cljs.core.LazySeq(null,((function (s__1883867__$1,node,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__1883869__$1 = s__1883869;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1883869__$1);
if(temp__4425__auto____$1){
var s__1883869__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1883869__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1883869__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1883871 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1883870 = (0);
while(true){
if((i__1883870 < size__24932__auto__)){
var nbr = cljs.core._nth.call(null,c__24931__auto__,i__1883870);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
cljs.core.chunk_append.call(null,b__1883871,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__1883872 = (i__1883870 + (1));
i__1883870 = G__1883872;
continue;
} else {
var G__1883873 = (i__1883870 + (1));
i__1883870 = G__1883873;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1883871),loom$alg_generic$reverse_edges_$_iter__1883866_$_iter__1883868.call(null,cljs.core.chunk_rest.call(null,s__1883869__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1883871),null);
}
} else {
var nbr = cljs.core.first.call(null,s__1883869__$2);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__1883866_$_iter__1883868.call(null,cljs.core.rest.call(null,s__1883869__$2)));
} else {
var G__1883874 = cljs.core.rest.call(null,s__1883869__$2);
s__1883869__$1 = G__1883874;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__1883867__$1,node,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__1883867__$1,node,xs__4977__auto__,temp__4425__auto__))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,successor_fn.call(null,node)));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,loom$alg_generic$reverse_edges_$_iter__1883866.call(null,cljs.core.rest.call(null,s__1883867__$1)));
} else {
var G__1883875 = cljs.core.rest.call(null,s__1883867__$1);
s__1883867__$1 = G__1883875;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24933__auto__.call(null,nodes);
});
loom.alg_generic.conj_paths = (function loom$alg_generic$conj_paths(from_map,to_map,matches){
var iter__24933__auto__ = (function loom$alg_generic$conj_paths_$_iter__1883884(s__1883885){
return (new cljs.core.LazySeq(null,(function (){
var s__1883885__$1 = s__1883885;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1883885__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24929__auto__ = ((function (s__1883885__$1,n,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$conj_paths_$_iter__1883884_$_iter__1883886(s__1883887){
return (new cljs.core.LazySeq(null,((function (s__1883885__$1,n,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__1883887__$1 = s__1883887;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1883887__$1);
if(temp__4425__auto____$1){
var xs__4977__auto____$1 = temp__4425__auto____$1;
var from = cljs.core.first.call(null,xs__4977__auto____$1);
var iterys__24929__auto__ = ((function (s__1883887__$1,s__1883885__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$conj_paths_$_iter__1883884_$_iter__1883886_$_iter__1883888(s__1883889){
return (new cljs.core.LazySeq(null,((function (s__1883887__$1,s__1883885__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__1883889__$1 = s__1883889;
while(true){
var temp__4425__auto____$2 = cljs.core.seq.call(null,s__1883889__$1);
if(temp__4425__auto____$2){
var s__1883889__$2 = temp__4425__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1883889__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1883889__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1883891 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1883890 = (0);
while(true){
if((i__1883890 < size__24932__auto__)){
var to = cljs.core._nth.call(null,c__24931__auto__,i__1883890);
cljs.core.chunk_append.call(null,b__1883891,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__1883892 = (i__1883890 + (1));
i__1883890 = G__1883892;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1883891),loom$alg_generic$conj_paths_$_iter__1883884_$_iter__1883886_$_iter__1883888.call(null,cljs.core.chunk_rest.call(null,s__1883889__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1883891),null);
}
} else {
var to = cljs.core.first.call(null,s__1883889__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__1883884_$_iter__1883886_$_iter__1883888.call(null,cljs.core.rest.call(null,s__1883889__$2)));
}
} else {
return null;
}
break;
}
});})(s__1883887__$1,s__1883885__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__1883887__$1,s__1883885__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,loom$alg_generic$conj_paths_$_iter__1883884_$_iter__1883886.call(null,cljs.core.rest.call(null,s__1883887__$1)));
} else {
var G__1883893 = cljs.core.rest.call(null,s__1883887__$1);
s__1883887__$1 = G__1883893;
continue;
}
} else {
return null;
}
break;
}
});})(s__1883885__$1,n,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__1883885__$1,n,xs__4977__auto__,temp__4425__auto__))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,loom$alg_generic$conj_paths_$_iter__1883884.call(null,cljs.core.rest.call(null,s__1883885__$1)));
} else {
var G__1883894 = cljs.core.rest.call(null,s__1883885__$1);
s__1883885__$1 = G__1883894;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24933__auto__.call(null,matches);
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
return (function (p1__1883895_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__1883895_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__1883898){
var vec__1883899 = p__1883898;
var key = cljs.core.nth.call(null,vec__1883899,(0),null);
var val = cljs.core.nth.call(null,vec__1883899,(1),null);
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
var G__1883900 = outgoing__$1;
var G__1883901 = incoming;
var G__1883902 = q1__$1;
var G__1883903 = q2;
outgoing = G__1883900;
incoming = G__1883901;
q1 = G__1883902;
q2 = G__1883903;
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
var G__1883904 = outgoing;
var G__1883905 = incoming__$1;
var G__1883906 = q1;
var G__1883907 = q2__$1;
outgoing = G__1883904;
incoming = G__1883905;
q1 = G__1883906;
q2 = G__1883907;
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
var args1883910 = [];
var len__25219__auto___1883931 = arguments.length;
var i__25220__auto___1883932 = (0);
while(true){
if((i__25220__auto___1883932 < len__25219__auto___1883931)){
args1883910.push((arguments[i__25220__auto___1883932]));

var G__1883933 = (i__25220__auto___1883932 + (1));
i__25220__auto___1883932 = G__1883933;
continue;
} else {
}
break;
}

var G__1883912 = args1883910.length;
switch (G__1883912) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1883910.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__1883922){
var vec__1883927 = p__1883922;
var state = cljs.core.nth.call(null,vec__1883927,(0),null);
var pq = cljs.core.nth.call(null,vec__1883927,(1),null);
var temp__4425__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__1883928 = temp__4425__auto__;
var dist_su = cljs.core.nth.call(null,vec__1883928,(0),null);
var _ = cljs.core.nth.call(null,vec__1883928,(1),null);
var u = cljs.core.nth.call(null,vec__1883928,(2),null);
var fpq = vec__1883928;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__1883928,dist_su,_,u,fpq,temp__4425__auto__,vec__1883927,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__1883928,dist_su,_,u,fpq,temp__4425__auto__,vec__1883927,state,pq){
return (function (p__1883929,v){
var vec__1883930 = p__1883929;
var state__$1 = cljs.core.nth.call(null,vec__1883930,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__1883930,(1),null);
var dist_suv = (dist_su + dist.call(null,u,v));
var dist_sv = cljs.core.first.call(null,state__$1.call(null,v));
if(cljs.core.truth_((function (){var and__24149__auto__ = dist_sv;
if(cljs.core.truth_(and__24149__auto__)){
return (dist_suv >= dist_sv);
} else {
return and__24149__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,pq__$1], null);
} else {
var pq__$2 = (cljs.core.truth_(dist_sv)?cljs.core.disj.call(null,pq__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_sv,cljs.core.hash.call(null,v),v], null)):pq__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state__$1,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,u], null)),cljs.core.conj.call(null,pq__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,cljs.core.hash.call(null,v),v], null))], null);
}
});})(vec__1883928,dist_su,_,u,fpq,temp__4425__auto__,vec__1883927,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__1883928,dist_su,_,u,fpq,temp__4425__auto__,vec__1883927,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__1883938){
var vec__1883939 = p__1883938;
var n = cljs.core.nth.call(null,vec__1883939,(0),null);
var vec__1883940 = cljs.core.nth.call(null,vec__1883939,(1),null);
var d = cljs.core.nth.call(null,vec__1883940,(0),null);
var p = cljs.core.nth.call(null,vec__1883940,(1),null);
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
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__1883944){
var vec__1883945 = p__1883944;
var node = cljs.core.nth.call(null,vec__1883945,(0),null);
var _ = cljs.core.nth.call(null,vec__1883945,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__1883946 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__1883946,(0),null);
var end_state = cljs.core.nth.call(null,vec__1883946,(1),null);
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
var size = (function (){var x__24492__auto__ = cljs.core.count.call(null,bitmap);
var y__24493__auto__ = loom.alg_generic.bm_longs.call(null,(idx + (1)));
return ((x__24492__auto__ > y__24493__auto__) ? x__24492__auto__ : y__24493__auto__);
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
var args__25226__auto__ = [];
var len__25219__auto___1883971 = arguments.length;
var i__25220__auto___1883972 = (0);
while(true){
if((i__25220__auto___1883972 < len__25219__auto___1883971)){
args__25226__auto__.push((arguments[i__25220__auto___1883972]));

var G__1883973 = (i__25220__auto___1883972 + (1));
i__25220__auto___1883972 = G__1883973;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((0) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((0)),(0))):null);
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(argseq__25227__auto__);
});

loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic = (function (bitmaps){
if(cljs.core.empty_QMARK_.call(null,bitmaps)){
return loom.alg_generic.bm_new.call(null);
} else {
var size = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,bitmaps));
var bitmap = cljs.core.first.call(null,bitmaps);
var n_zeros = (size - cljs.core.count.call(null,bitmap));
var new_bitmap = bitmap.slice().concat((new Array(n_zeros)).fill((0)));
var seq__1883951_1883974 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__1883958_1883975 = null;
var count__1883959_1883976 = (0);
var i__1883960_1883977 = (0);
while(true){
if((i__1883960_1883977 < count__1883959_1883976)){
var bitmap_1883978__$1 = cljs.core._nth.call(null,chunk__1883958_1883975,i__1883960_1883977);
var seq__1883961_1883979 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_1883978__$1));
var chunk__1883963_1883980 = null;
var count__1883964_1883981 = (0);
var i__1883965_1883982 = (0);
while(true){
if((i__1883965_1883982 < count__1883964_1883981)){
var vec__1883967_1883983 = cljs.core._nth.call(null,chunk__1883963_1883980,i__1883965_1883982);
var idx_1883984 = cljs.core.nth.call(null,vec__1883967_1883983,(0),null);
var value_1883985 = cljs.core.nth.call(null,vec__1883967_1883983,(1),null);
var masked_value_1883986 = (value_1883985 | (new_bitmap[idx_1883984]));
(new_bitmap[idx_1883984] = masked_value_1883986);

var G__1883987 = seq__1883961_1883979;
var G__1883988 = chunk__1883963_1883980;
var G__1883989 = count__1883964_1883981;
var G__1883990 = (i__1883965_1883982 + (1));
seq__1883961_1883979 = G__1883987;
chunk__1883963_1883980 = G__1883988;
count__1883964_1883981 = G__1883989;
i__1883965_1883982 = G__1883990;
continue;
} else {
var temp__4425__auto___1883991 = cljs.core.seq.call(null,seq__1883961_1883979);
if(temp__4425__auto___1883991){
var seq__1883961_1883992__$1 = temp__4425__auto___1883991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1883961_1883992__$1)){
var c__24964__auto___1883993 = cljs.core.chunk_first.call(null,seq__1883961_1883992__$1);
var G__1883994 = cljs.core.chunk_rest.call(null,seq__1883961_1883992__$1);
var G__1883995 = c__24964__auto___1883993;
var G__1883996 = cljs.core.count.call(null,c__24964__auto___1883993);
var G__1883997 = (0);
seq__1883961_1883979 = G__1883994;
chunk__1883963_1883980 = G__1883995;
count__1883964_1883981 = G__1883996;
i__1883965_1883982 = G__1883997;
continue;
} else {
var vec__1883968_1883998 = cljs.core.first.call(null,seq__1883961_1883992__$1);
var idx_1883999 = cljs.core.nth.call(null,vec__1883968_1883998,(0),null);
var value_1884000 = cljs.core.nth.call(null,vec__1883968_1883998,(1),null);
var masked_value_1884001 = (value_1884000 | (new_bitmap[idx_1883999]));
(new_bitmap[idx_1883999] = masked_value_1884001);

var G__1884002 = cljs.core.next.call(null,seq__1883961_1883992__$1);
var G__1884003 = null;
var G__1884004 = (0);
var G__1884005 = (0);
seq__1883961_1883979 = G__1884002;
chunk__1883963_1883980 = G__1884003;
count__1883964_1883981 = G__1884004;
i__1883965_1883982 = G__1884005;
continue;
}
} else {
}
}
break;
}

var G__1884006 = seq__1883951_1883974;
var G__1884007 = chunk__1883958_1883975;
var G__1884008 = count__1883959_1883976;
var G__1884009 = (i__1883960_1883977 + (1));
seq__1883951_1883974 = G__1884006;
chunk__1883958_1883975 = G__1884007;
count__1883959_1883976 = G__1884008;
i__1883960_1883977 = G__1884009;
continue;
} else {
var temp__4425__auto___1884010 = cljs.core.seq.call(null,seq__1883951_1883974);
if(temp__4425__auto___1884010){
var seq__1883951_1884011__$1 = temp__4425__auto___1884010;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1883951_1884011__$1)){
var c__24964__auto___1884012 = cljs.core.chunk_first.call(null,seq__1883951_1884011__$1);
var G__1884013 = cljs.core.chunk_rest.call(null,seq__1883951_1884011__$1);
var G__1884014 = c__24964__auto___1884012;
var G__1884015 = cljs.core.count.call(null,c__24964__auto___1884012);
var G__1884016 = (0);
seq__1883951_1883974 = G__1884013;
chunk__1883958_1883975 = G__1884014;
count__1883959_1883976 = G__1884015;
i__1883960_1883977 = G__1884016;
continue;
} else {
var bitmap_1884017__$1 = cljs.core.first.call(null,seq__1883951_1884011__$1);
var seq__1883952_1884018 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_1884017__$1));
var chunk__1883954_1884019 = null;
var count__1883955_1884020 = (0);
var i__1883956_1884021 = (0);
while(true){
if((i__1883956_1884021 < count__1883955_1884020)){
var vec__1883969_1884022 = cljs.core._nth.call(null,chunk__1883954_1884019,i__1883956_1884021);
var idx_1884023 = cljs.core.nth.call(null,vec__1883969_1884022,(0),null);
var value_1884024 = cljs.core.nth.call(null,vec__1883969_1884022,(1),null);
var masked_value_1884025 = (value_1884024 | (new_bitmap[idx_1884023]));
(new_bitmap[idx_1884023] = masked_value_1884025);

var G__1884026 = seq__1883952_1884018;
var G__1884027 = chunk__1883954_1884019;
var G__1884028 = count__1883955_1884020;
var G__1884029 = (i__1883956_1884021 + (1));
seq__1883952_1884018 = G__1884026;
chunk__1883954_1884019 = G__1884027;
count__1883955_1884020 = G__1884028;
i__1883956_1884021 = G__1884029;
continue;
} else {
var temp__4425__auto___1884030__$1 = cljs.core.seq.call(null,seq__1883952_1884018);
if(temp__4425__auto___1884030__$1){
var seq__1883952_1884031__$1 = temp__4425__auto___1884030__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1883952_1884031__$1)){
var c__24964__auto___1884032 = cljs.core.chunk_first.call(null,seq__1883952_1884031__$1);
var G__1884033 = cljs.core.chunk_rest.call(null,seq__1883952_1884031__$1);
var G__1884034 = c__24964__auto___1884032;
var G__1884035 = cljs.core.count.call(null,c__24964__auto___1884032);
var G__1884036 = (0);
seq__1883952_1884018 = G__1884033;
chunk__1883954_1884019 = G__1884034;
count__1883955_1884020 = G__1884035;
i__1883956_1884021 = G__1884036;
continue;
} else {
var vec__1883970_1884037 = cljs.core.first.call(null,seq__1883952_1884031__$1);
var idx_1884038 = cljs.core.nth.call(null,vec__1883970_1884037,(0),null);
var value_1884039 = cljs.core.nth.call(null,vec__1883970_1884037,(1),null);
var masked_value_1884040 = (value_1884039 | (new_bitmap[idx_1884038]));
(new_bitmap[idx_1884038] = masked_value_1884040);

var G__1884041 = cljs.core.next.call(null,seq__1883952_1884031__$1);
var G__1884042 = null;
var G__1884043 = (0);
var G__1884044 = (0);
seq__1883952_1884018 = G__1884041;
chunk__1883954_1884019 = G__1884042;
count__1883955_1884020 = G__1884043;
i__1883956_1884021 = G__1884044;
continue;
}
} else {
}
}
break;
}

var G__1884045 = cljs.core.next.call(null,seq__1883951_1884011__$1);
var G__1884046 = null;
var G__1884047 = (0);
var G__1884048 = (0);
seq__1883951_1883974 = G__1884045;
chunk__1883958_1883975 = G__1884046;
count__1883959_1883976 = G__1884047;
i__1883960_1883977 = G__1884048;
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

loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq1883950){
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1883950));
});
/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__24933__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__1884055(s__1884056){
return (new cljs.core.LazySeq(null,(function (){
var s__1884056__$1 = s__1884056;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884056__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var chunk = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24929__auto__ = ((function (s__1884056__$1,chunk,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__1884055_$_iter__1884057(s__1884058){
return (new cljs.core.LazySeq(null,((function (s__1884056__$1,chunk,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__1884058__$1 = s__1884058;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1884058__$1);
if(temp__4425__auto____$1){
var s__1884058__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884058__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884058__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884060 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884059 = (0);
while(true){
if((i__1884059 < size__24932__auto__)){
var offset = cljs.core._nth.call(null,c__24931__auto__,i__1884059);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__1884060,idx);

var G__1884061 = (i__1884059 + (1));
i__1884059 = G__1884061;
continue;
} else {
var G__1884062 = (i__1884059 + (1));
i__1884059 = G__1884062;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884060),loom$alg_generic$bm_get_indicies_$_iter__1884055_$_iter__1884057.call(null,cljs.core.chunk_rest.call(null,s__1884058__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884060),null);
}
} else {
var offset = cljs.core.first.call(null,s__1884058__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__1884055_$_iter__1884057.call(null,cljs.core.rest.call(null,s__1884058__$2)));
} else {
var G__1884063 = cljs.core.rest.call(null,s__1884058__$2);
s__1884058__$1 = G__1884063;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__1884056__$1,chunk,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__1884056__$1,chunk,xs__4977__auto__,temp__4425__auto__))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,loom$alg_generic$bm_get_indicies_$_iter__1884055.call(null,cljs.core.rest.call(null,s__1884056__$1)));
} else {
var G__1884064 = cljs.core.rest.call(null,s__1884056__$1);
s__1884056__$1 = G__1884064;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24933__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,bitmap)));
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
loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24775__auto__,k__24776__auto__){
var self__ = this;
var this__24775__auto____$1 = this;
return cljs.core._lookup.call(null,this__24775__auto____$1,k__24776__auto__,null);
});

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24777__auto__,k1884066,else__24778__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
var G__1884068 = (((k1884066 instanceof cljs.core.Keyword))?k1884066.fqn:null);
switch (G__1884068) {
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
return cljs.core.get.call(null,self__.__extmap,k1884066,else__24778__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24789__auto__,writer__24790__auto__,opts__24791__auto__){
var self__ = this;
var this__24789__auto____$1 = this;
var pr_pair__24792__auto__ = ((function (this__24789__auto____$1){
return (function (keyval__24793__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24790__auto__,cljs.core.pr_writer,""," ","",opts__24791__auto__,keyval__24793__auto__);
});})(this__24789__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24790__auto__,pr_pair__24792__auto__,"#loom.alg-generic.Ancestry{",", ","}",opts__24791__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$ = true;

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1884065){
var self__ = this;
var G__1884065__$1 = this;
return (new cljs.core.RecordIter((0),G__1884065__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24773__auto__){
var self__ = this;
var this__24773__auto____$1 = this;
return self__.__meta;
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24769__auto__){
var self__ = this;
var this__24769__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24779__auto__){
var self__ = this;
var this__24779__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24770__auto__){
var self__ = this;
var this__24770__auto____$1 = this;
var h__24596__auto__ = self__.__hash;
if(!((h__24596__auto__ == null))){
return h__24596__auto__;
} else {
var h__24596__auto____$1 = cljs.core.hash_imap.call(null,this__24770__auto____$1);
self__.__hash = h__24596__auto____$1;

return h__24596__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24771__auto__,other__24772__auto__){
var self__ = this;
var this__24771__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24149__auto__ = other__24772__auto__;
if(cljs.core.truth_(and__24149__auto__)){
var and__24149__auto____$1 = (this__24771__auto____$1.constructor === other__24772__auto__.constructor);
if(and__24149__auto____$1){
return cljs.core.equiv_map.call(null,this__24771__auto____$1,other__24772__auto__);
} else {
return and__24149__auto____$1;
}
} else {
return and__24149__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24784__auto__,k__24785__auto__){
var self__ = this;
var this__24784__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),null], null), null),k__24785__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24784__auto____$1),self__.__meta),k__24785__auto__);
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24785__auto__)),null));
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24782__auto__,k__24783__auto__,G__1884065){
var self__ = this;
var this__24782__auto____$1 = this;
var pred__1884069 = cljs.core.keyword_identical_QMARK_;
var expr__1884070 = k__24783__auto__;
if(cljs.core.truth_(pred__1884069.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__1884070))){
return (new loom.alg_generic.Ancestry(G__1884065,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884069.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__1884070))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__1884065,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884069.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__1884070))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__1884065,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24783__auto__,G__1884065),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24787__auto__){
var self__ = this;
var this__24787__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24774__auto__,G__1884065){
var self__ = this;
var this__24774__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__1884065,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24780__auto__,entry__24781__auto__){
var self__ = this;
var this__24780__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24781__auto__)){
return cljs.core._assoc.call(null,this__24780__auto____$1,cljs.core._nth.call(null,entry__24781__auto__,(0)),cljs.core._nth.call(null,entry__24781__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24780__auto____$1,entry__24781__auto__);
}
});

loom.alg_generic.Ancestry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node->idx","node->idx",1793236754,null),new cljs.core.Symbol(null,"idx->node","idx->node",-842528594,null),new cljs.core.Symbol(null,"bitmaps","bitmaps",-1506736927,null)], null);
});

loom.alg_generic.Ancestry.cljs$lang$type = true;

loom.alg_generic.Ancestry.cljs$lang$ctorPrSeq = (function (this__24809__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.alg-generic/Ancestry");
});

loom.alg_generic.Ancestry.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"loom.alg-generic/Ancestry");
});

loom.alg_generic.__GT_Ancestry = (function loom$alg_generic$__GT_Ancestry(node__GT_idx,idx__GT_node,bitmaps){
return (new loom.alg_generic.Ancestry(node__GT_idx,idx__GT_node,bitmaps,null,null,null));
});

loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__1884067){
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__1884067),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__1884067),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__1884067),null,cljs.core.dissoc.call(null,G__1884067,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)),null));
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
var args__25226__auto__ = [];
var len__25219__auto___1884078 = arguments.length;
var i__25220__auto___1884079 = (0);
while(true){
if((i__25220__auto___1884079 < len__25219__auto___1884078)){
args__25226__auto__.push((arguments[i__25220__auto___1884079]));

var G__1884080 = (i__25220__auto___1884079 + (1));
i__25220__auto___1884079 = G__1884080;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((2) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((2)),(0))):null);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25227__auto__);
});

loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic = (function (ancestry,node,parents){
if(cljs.core.truth_(loom.alg_generic.ancestry_contains_QMARK_.call(null,ancestry,node))){
return ancestry;
} else {
var map__1884076 = ancestry;
var map__1884076__$1 = ((((!((map__1884076 == null)))?((((map__1884076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1884076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1884076):map__1884076);
var node__GT_idx = cljs.core.get.call(null,map__1884076__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__1884076__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__1884076__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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

loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq1884073){
var G__1884074 = cljs.core.first.call(null,seq1884073);
var seq1884073__$1 = cljs.core.next.call(null,seq1884073);
var G__1884075 = cljs.core.first.call(null,seq1884073__$1);
var seq1884073__$2 = cljs.core.next.call(null,seq1884073__$1);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic(G__1884074,G__1884075,seq1884073__$2);
});
/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__1884083 = ancestry;
var map__1884083__$1 = ((((!((map__1884083 == null)))?((((map__1884083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1884083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1884083):map__1884083);
var node__GT_idx = cljs.core.get.call(null,map__1884083__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__1884083__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,childer);
var pidx = node__GT_idx.call(null,parenter);
return cljs.core.boolean$.call(null,(cljs.core.truth_((function (){var and__24149__auto__ = cidx;
if(cljs.core.truth_(and__24149__auto__)){
return pidx;
} else {
return and__24149__auto__;
}
})())?loom.alg_generic.bm_get.call(null,cljs.core.get.call(null,bitmaps,cidx),pidx):null));
});
/**
 * Returns all of the ancestors of 'child node.
 */
loom.alg_generic.ancestors = (function loom$alg_generic$ancestors(ancestry,child){
var map__1884087 = ancestry;
var map__1884087__$1 = ((((!((map__1884087 == null)))?((((map__1884087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1884087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1884087):map__1884087);
var node__GT_idx = cljs.core.get.call(null,map__1884087__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__1884087__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__1884087__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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