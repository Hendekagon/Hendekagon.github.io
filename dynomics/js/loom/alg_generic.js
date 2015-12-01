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
return (function (p1__194996_SHARP_){
return loom$alg_generic$paths.call(null,preds,cljs.core.conj.call(null,path,p1__194996_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__194995_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__194995_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__194997_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__194997_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__195000){
var vec__195001 = p__195000;
var n = cljs.core.nth.call(null,vec__195001,(0),null);
var p = cljs.core.nth.call(null,vec__195001,(1),null);
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
var args__25286__auto__ = [];
var len__25279__auto___195008 = arguments.length;
var i__25280__auto___195009 = (0);
while(true){
if((i__25280__auto___195009 < len__25279__auto___195008)){
args__25286__auto__.push((arguments[i__25280__auto___195009]));

var G__195010 = (i__25280__auto___195009 + (1));
i__25280__auto___195009 = G__195010;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((2) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((2)),(0))):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25287__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__195005){
var map__195006 = p__195005;
var map__195006__$1 = ((((!((map__195006 == null)))?((((map__195006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__195006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__195006):map__195006);
var seen = cljs.core.get.call(null,map__195006__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__195006,map__195006__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__4425__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__4425__auto__,map__195006,map__195006__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__4425__auto__,map__195006,map__195006__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__195006,map__195006__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq195002){
var G__195003 = cljs.core.first.call(null,seq195002);
var seq195002__$1 = cljs.core.next.call(null,seq195002);
var G__195004 = cljs.core.first.call(null,seq195002__$1);
var seq195002__$2 = cljs.core.next.call(null,seq195002__$1);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic(G__195003,G__195004,seq195002__$2);
});
/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.pre_edge_traverse = (function loom$alg_generic$pre_edge_traverse(var_args){
var args__25286__auto__ = [];
var len__25279__auto___195017 = arguments.length;
var i__25280__auto___195018 = (0);
while(true){
if((i__25280__auto___195018 < len__25279__auto___195017)){
args__25286__auto__.push((arguments[i__25280__auto___195018]));

var G__195019 = (i__25280__auto___195018 + (1));
i__25280__auto___195018 = G__195019;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((2) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((2)),(0))):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25287__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__195014){
var map__195015 = p__195014;
var map__195015__$1 = ((((!((map__195015 == null)))?((((map__195015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__195015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__195015):map__195015);
var seen = cljs.core.get.call(null,map__195015__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__195015,map__195015__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__4423__auto__)){
var nbr = temp__4423__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4423__auto__,map__195015,map__195015__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4423__auto__,map__195015,map__195015__$1,seen))
,null,null)));
} else {
var temp__4425__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
var G__195020 = successors__$1;
var G__195021 = parent;
var G__195022 = cljs.core.peek.call(null,nbrstack);
var G__195023 = cljs.core.pop.call(null,stack);
var G__195024 = cljs.core.pop.call(null,nbrstack);
var G__195025 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__195020;
start__$1 = G__195021;
nbrs = G__195022;
stack = G__195023;
nbrstack = G__195024;
seen__$1 = G__195025;
continue;
} else {
return null;
}
}
break;
}
});})(map__195015,map__195015__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq195011){
var G__195012 = cljs.core.first.call(null,seq195011);
var seq195011__$1 = cljs.core.next.call(null,seq195011);
var G__195013 = cljs.core.first.call(null,seq195011__$1);
var seq195011__$2 = cljs.core.next.call(null,seq195011__$1);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__195012,G__195013,seq195011__$2);
});
/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__25286__auto__ = [];
var len__25279__auto___195032 = arguments.length;
var i__25280__auto___195033 = (0);
while(true){
if((i__25280__auto___195033 < len__25279__auto___195032)){
args__25286__auto__.push((arguments[i__25280__auto___195033]));

var G__195034 = (i__25280__auto___195033 + (1));
i__25280__auto___195033 = G__195034;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((2) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((2)),(0))):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25287__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__195029){
var map__195030 = p__195029;
var map__195030__$1 = ((((!((map__195030 == null)))?((((map__195030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__195030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__195030):map__195030);
var seen = cljs.core.get.call(null,map__195030__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__195030__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__195035 = seen__$2;
var G__195036 = cljs.core.assoc.call(null,preds,u,v);
var G__195037 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__195035;
preds = G__195036;
stack = G__195037;
continue;
} else {
var G__195038 = seen__$2;
var G__195039 = preds;
var G__195040 = cljs.core.pop.call(null,stack);
seen__$1 = G__195038;
preds = G__195039;
stack = G__195040;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq195026){
var G__195027 = cljs.core.first.call(null,seq195026);
var seq195026__$1 = cljs.core.next.call(null,seq195026);
var G__195028 = cljs.core.first.call(null,seq195026__$1);
var seq195026__$2 = cljs.core.next.call(null,seq195026__$1);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(G__195027,G__195028,seq195026__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__25286__auto__ = [];
var len__25279__auto___195047 = arguments.length;
var i__25280__auto___195048 = (0);
while(true){
if((i__25280__auto___195048 < len__25279__auto___195047)){
args__25286__auto__.push((arguments[i__25280__auto___195048]));

var G__195049 = (i__25280__auto___195048 + (1));
i__25280__auto___195048 = G__195049;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((2) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((2)),(0))):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25287__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__195044){
var map__195045 = p__195044;
var map__195045__$1 = ((((!((map__195045 == null)))?((((map__195045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__195045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__195045):map__195045);
var seen = cljs.core.get.call(null,map__195045__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__195045__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__195050 = seen__$2;
var G__195051 = cljs.core.conj.call(null,result,v);
var G__195052 = cljs.core.pop.call(null,stack);
seen__$1 = G__195050;
result = G__195051;
stack = G__195052;
continue;
} else {
var G__195053 = seen__$2;
var G__195054 = result;
var G__195055 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__195053;
result = G__195054;
stack = G__195055;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq195041){
var G__195042 = cljs.core.first.call(null,seq195041);
var seq195041__$1 = cljs.core.next.call(null,seq195041);
var G__195043 = cljs.core.first.call(null,seq195041__$1);
var seq195041__$2 = cljs.core.next.call(null,seq195041__$1);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__195042,G__195043,seq195041__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.post_edge_traverse = (function loom$alg_generic$post_edge_traverse(var_args){
var args__25286__auto__ = [];
var len__25279__auto___195062 = arguments.length;
var i__25280__auto___195063 = (0);
while(true){
if((i__25280__auto___195063 < len__25279__auto___195062)){
args__25286__auto__.push((arguments[i__25280__auto___195063]));

var G__195064 = (i__25280__auto___195063 + (1));
i__25280__auto___195063 = G__195064;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((2) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((2)),(0))):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25287__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__195059){
var map__195060 = p__195059;
var map__195060__$1 = ((((!((map__195060 == null)))?((((map__195060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__195060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__195060):map__195060);
var seen = cljs.core.get.call(null,map__195060__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__195060__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__195065 = start__$1;
var G__195066 = cljs.core.next.call(null,nbrs);
var G__195067 = stack;
var G__195068 = nbrstack;
var G__195069 = seen__$2;
var G__195070 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__195065;
nbrs = G__195066;
stack = G__195067;
nbrstack = G__195068;
seen__$1 = G__195069;
edges = G__195070;
continue;
} else {
var G__195071 = nbr;
var G__195072 = successors.call(null,nbr);
var G__195073 = cljs.core.conj.call(null,stack,start__$1);
var G__195074 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__195075 = seen__$2;
var G__195076 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__195071;
nbrs = G__195072;
stack = G__195073;
nbrstack = G__195074;
seen__$1 = G__195075;
edges = G__195076;
continue;
}
} else {
var temp__4423__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4423__auto____$1)){
var parent = temp__4423__auto____$1;
var G__195077 = parent;
var G__195078 = cljs.core.peek.call(null,nbrstack);
var G__195079 = cljs.core.pop.call(null,stack);
var G__195080 = cljs.core.pop.call(null,nbrstack);
var G__195081 = seen__$2;
var G__195082 = edges;
start__$1 = G__195077;
nbrs = G__195078;
stack = G__195079;
nbrstack = G__195080;
seen__$1 = G__195081;
edges = G__195082;
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

loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq195056){
var G__195057 = cljs.core.first.call(null,seq195056);
var seq195056__$1 = cljs.core.next.call(null,seq195056);
var G__195058 = cljs.core.first.call(null,seq195056__$1);
var seq195056__$2 = cljs.core.next.call(null,seq195056__$1);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__195057,G__195058,seq195056__$2);
});
/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var args195083 = [];
var len__25279__auto___195086 = arguments.length;
var i__25280__auto___195087 = (0);
while(true){
if((i__25280__auto___195087 < len__25279__auto___195086)){
args195083.push((arguments[i__25280__auto___195087]));

var G__195088 = (i__25280__auto___195087 + (1));
i__25280__auto___195087 = G__195088;
continue;
} else {
}
break;
}

var G__195085 = args195083.length;
switch (G__195085) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args195083.length)].join('')));

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
var G__195090 = seen__$2;
var G__195091 = explored__$1;
var G__195092 = result;
var G__195093 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__195090;
explored__$1 = G__195091;
result = G__195092;
stack = G__195093;
continue;
}
} else {
var G__195094 = seen__$2;
var G__195095 = cljs.core.conj.call(null,explored__$1,v);
var G__195096 = cljs.core.conj.call(null,result,v);
var G__195097 = cljs.core.pop.call(null,stack);
seen__$1 = G__195094;
explored__$1 = G__195095;
result = G__195096;
stack = G__195097;
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
var args__25286__auto__ = [];
var len__25279__auto___195132 = arguments.length;
var i__25280__auto___195133 = (0);
while(true){
if((i__25280__auto___195133 < len__25279__auto___195132)){
args__25286__auto__.push((arguments[i__25280__auto___195133]));

var G__195134 = (i__25280__auto___195133 + (1));
i__25280__auto___195133 = G__195134;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((2) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((2)),(0))):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25287__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__195105){
var map__195106 = p__195105;
var map__195106__$1 = ((((!((map__195106 == null)))?((((map__195106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__195106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__195106):map__195106);
var f = cljs.core.get.call(null,map__195106__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__195106__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__195106__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__24221__auto__ = f;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return ((function (or__24221__auto__,map__195106,map__195106__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__24221__auto__,map__195106,map__195106__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__24221__auto__ = when;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__195106,map__195106__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__4425__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__195123 = temp__4425__auto__;
var node = cljs.core.nth.call(null,vec__195123,(0),null);
var depth = cljs.core.nth.call(null,vec__195123,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__195123,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__195106,map__195106__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__195123,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__195106,map__195106__$1,f,when,seen){
return (function (p1__195099_SHARP_){
return nbr_pred.call(null,p1__195099_SHARP_,node,(depth + (1)));
});})(vec__195123,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__195106,map__195106__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__195123,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__195106,map__195106__$1,f,when,seen){
return (function (p1__195098_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__195098_SHARP_);
});})(vec__195123,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__195106,map__195106__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__24993__auto__ = ((function (nbrs,vec__195123,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__195106,map__195106__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__195124(s__195125){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__195123,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__195106,map__195106__$1,f,when,seen){
return (function (){
var s__195125__$1 = s__195125;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195125__$1);
if(temp__4425__auto____$1){
var s__195125__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195125__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195125__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195127 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195126 = (0);
while(true){
if((i__195126 < size__24992__auto__)){
var nbr = cljs.core._nth.call(null,c__24991__auto__,i__195126);
cljs.core.chunk_append.call(null,b__195127,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__195135 = (i__195126 + (1));
i__195126 = G__195135;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195127),loom$alg_generic$step_$_iter__195124.call(null,cljs.core.chunk_rest.call(null,s__195125__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195127),null);
}
} else {
var nbr = cljs.core.first.call(null,s__195125__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__195124.call(null,cljs.core.rest.call(null,s__195125__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__195123,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__195106,map__195106__$1,f,when,seen))
,null,null));
});})(nbrs,vec__195123,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__195106,map__195106__$1,f,when,seen))
;
return iter__24993__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__195123,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__195106,map__195106__$1,f,when,seen){
return (function (p1__195100_SHARP_,p2__195101_SHARP_){
return cljs.core.assoc.call(null,p1__195100_SHARP_,p2__195101_SHARP_,node);
});})(nbrs,vec__195123,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__195106,map__195106__$1,f,when,seen))
,preds,nbrs));
});})(vec__195123,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__195106,map__195106__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__195106,map__195106__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.fromArray([start,null], true, false),(function (){var iter__24993__auto__ = ((function (f__$1,nbr_pred,map__195106,map__195106__$1,f,when,seen){
return (function loom$alg_generic$iter__195128(s__195129){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__195106,map__195106__$1,f,when,seen){
return (function (){
var s__195129__$1 = s__195129;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195129__$1);
if(temp__4425__auto__){
var s__195129__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195129__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195129__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195131 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195130 = (0);
while(true){
if((i__195130 < size__24992__auto__)){
var s = cljs.core._nth.call(null,c__24991__auto__,i__195130);
cljs.core.chunk_append.call(null,b__195131,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__195136 = (i__195130 + (1));
i__195130 = G__195136;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195131),loom$alg_generic$iter__195128.call(null,cljs.core.chunk_rest.call(null,s__195129__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195131),null);
}
} else {
var s = cljs.core.first.call(null,s__195129__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__195128.call(null,cljs.core.rest.call(null,s__195129__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__195106,map__195106__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__195106,map__195106__$1,f,when,seen))
;
return iter__24993__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq195102){
var G__195103 = cljs.core.first.call(null,seq195102);
var seq195102__$1 = cljs.core.next.call(null,seq195102);
var G__195104 = cljs.core.first.call(null,seq195102__$1);
var seq195102__$2 = cljs.core.next.call(null,seq195102__$1);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__195103,G__195104,seq195102__$2);
});
/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__25286__auto__ = [];
var len__25279__auto___195143 = arguments.length;
var i__25280__auto___195144 = (0);
while(true){
if((i__25280__auto___195144 < len__25279__auto___195143)){
args__25286__auto__.push((arguments[i__25280__auto___195144]));

var G__195145 = (i__25280__auto___195144 + (1));
i__25280__auto___195144 = G__195145;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((2) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((2)),(0))):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25287__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__195140){
var map__195141 = p__195140;
var map__195141__$1 = ((((!((map__195141 == null)))?((((map__195141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__195141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__195141):map__195141);
var seen = cljs.core.get.call(null,map__195141__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__195141,map__195141__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__195141,map__195141__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq195137){
var G__195138 = cljs.core.first.call(null,seq195137);
var seq195137__$1 = cljs.core.next.call(null,seq195137);
var G__195139 = cljs.core.first.call(null,seq195137__$1);
var seq195137__$2 = cljs.core.next.call(null,seq195137__$1);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic(G__195138,G__195139,seq195137__$2);
});
/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__25286__auto__ = [];
var len__25279__auto___195155 = arguments.length;
var i__25280__auto___195156 = (0);
while(true){
if((i__25280__auto___195156 < len__25279__auto___195155)){
args__25286__auto__.push((arguments[i__25280__auto___195156]));

var G__195157 = (i__25280__auto___195156 + (1));
i__25280__auto___195156 = G__195157;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((3) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((3)),(0))):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25287__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__195150){
var map__195151 = p__195150;
var map__195151__$1 = ((((!((map__195151 == null)))?((((map__195151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__195151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__195151):map__195151);
var opts = map__195151__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__4425__auto__ = cljs.core.some.call(null,((function (opts__$1,map__195151,map__195151__$1,opts){
return (function (p__195153){
var vec__195154 = p__195153;
var _ = cljs.core.nth.call(null,vec__195154,(0),null);
var pm = cljs.core.nth.call(null,vec__195154,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__195154,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__195151,map__195151__$1,opts))
,cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__4425__auto__)){
var preds = temp__4425__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq195146){
var G__195147 = cljs.core.first.call(null,seq195146);
var seq195146__$1 = cljs.core.next.call(null,seq195146);
var G__195148 = cljs.core.first.call(null,seq195146__$1);
var seq195146__$2 = cljs.core.next.call(null,seq195146__$1);
var G__195149 = cljs.core.first.call(null,seq195146__$2);
var seq195146__$3 = cljs.core.next.call(null,seq195146__$2);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__195147,G__195148,G__195149,seq195146__$3);
});
/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__195158 = m2;
var G__195159 = m1;
m1 = G__195158;
m2 = G__195159;
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
if(cljs.core.truth_((function (){var or__24221__auto__ = cljs.core.seq.call(null,intersects);
if(or__24221__auto__){
return or__24221__auto__;
} else {
var or__24221__auto____$1 = loom.alg_generic.future_done_QMARK_.call(null,search1);
if(cljs.core.truth_(or__24221__auto____$1)){
return or__24221__auto____$1;
} else {
return loom.alg_generic.future_done_QMARK_.call(null,search2);
}
}
})())){
cljs.core.reset_BANG_.call(null,done_QMARK_,true);

if(cljs.core.seq.call(null,intersects)){
var intersect = cljs.core.apply.call(null,cljs.core.min_key,((function (intersects,done_QMARK_,preds1,preds2,search,search1,search2,find_intersects){
return (function (p1__195160_SHARP_){
return (cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds1),p1__195160_SHARP_)) + cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds2),p1__195160_SHARP_)));
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
var G__195161 = find_intersects.call(null);
intersects = G__195161;
continue;
}
break;
}
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__24993__auto__ = (function loom$alg_generic$reverse_edges_$_iter__195168(s__195169){
return (new cljs.core.LazySeq(null,(function (){
var s__195169__$1 = s__195169;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195169__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var node = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24989__auto__ = ((function (s__195169__$1,node,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__195168_$_iter__195170(s__195171){
return (new cljs.core.LazySeq(null,((function (s__195169__$1,node,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__195171__$1 = s__195171;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195171__$1);
if(temp__4425__auto____$1){
var s__195171__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195171__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195171__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195173 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195172 = (0);
while(true){
if((i__195172 < size__24992__auto__)){
var nbr = cljs.core._nth.call(null,c__24991__auto__,i__195172);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
cljs.core.chunk_append.call(null,b__195173,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__195174 = (i__195172 + (1));
i__195172 = G__195174;
continue;
} else {
var G__195175 = (i__195172 + (1));
i__195172 = G__195175;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195173),loom$alg_generic$reverse_edges_$_iter__195168_$_iter__195170.call(null,cljs.core.chunk_rest.call(null,s__195171__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195173),null);
}
} else {
var nbr = cljs.core.first.call(null,s__195171__$2);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__195168_$_iter__195170.call(null,cljs.core.rest.call(null,s__195171__$2)));
} else {
var G__195176 = cljs.core.rest.call(null,s__195171__$2);
s__195171__$1 = G__195176;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__195169__$1,node,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__195169__$1,node,xs__4977__auto__,temp__4425__auto__))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,successor_fn.call(null,node)));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,loom$alg_generic$reverse_edges_$_iter__195168.call(null,cljs.core.rest.call(null,s__195169__$1)));
} else {
var G__195177 = cljs.core.rest.call(null,s__195169__$1);
s__195169__$1 = G__195177;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24993__auto__.call(null,nodes);
});
loom.alg_generic.conj_paths = (function loom$alg_generic$conj_paths(from_map,to_map,matches){
var iter__24993__auto__ = (function loom$alg_generic$conj_paths_$_iter__195186(s__195187){
return (new cljs.core.LazySeq(null,(function (){
var s__195187__$1 = s__195187;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195187__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24989__auto__ = ((function (s__195187__$1,n,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$conj_paths_$_iter__195186_$_iter__195188(s__195189){
return (new cljs.core.LazySeq(null,((function (s__195187__$1,n,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__195189__$1 = s__195189;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195189__$1);
if(temp__4425__auto____$1){
var xs__4977__auto____$1 = temp__4425__auto____$1;
var from = cljs.core.first.call(null,xs__4977__auto____$1);
var iterys__24989__auto__ = ((function (s__195189__$1,s__195187__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$conj_paths_$_iter__195186_$_iter__195188_$_iter__195190(s__195191){
return (new cljs.core.LazySeq(null,((function (s__195189__$1,s__195187__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__195191__$1 = s__195191;
while(true){
var temp__4425__auto____$2 = cljs.core.seq.call(null,s__195191__$1);
if(temp__4425__auto____$2){
var s__195191__$2 = temp__4425__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195191__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195191__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195193 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195192 = (0);
while(true){
if((i__195192 < size__24992__auto__)){
var to = cljs.core._nth.call(null,c__24991__auto__,i__195192);
cljs.core.chunk_append.call(null,b__195193,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__195194 = (i__195192 + (1));
i__195192 = G__195194;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195193),loom$alg_generic$conj_paths_$_iter__195186_$_iter__195188_$_iter__195190.call(null,cljs.core.chunk_rest.call(null,s__195191__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195193),null);
}
} else {
var to = cljs.core.first.call(null,s__195191__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__195186_$_iter__195188_$_iter__195190.call(null,cljs.core.rest.call(null,s__195191__$2)));
}
} else {
return null;
}
break;
}
});})(s__195189__$1,s__195187__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__195189__$1,s__195187__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,loom$alg_generic$conj_paths_$_iter__195186_$_iter__195188.call(null,cljs.core.rest.call(null,s__195189__$1)));
} else {
var G__195195 = cljs.core.rest.call(null,s__195189__$1);
s__195189__$1 = G__195195;
continue;
}
} else {
return null;
}
break;
}
});})(s__195187__$1,n,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__195187__$1,n,xs__4977__auto__,temp__4425__auto__))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,loom$alg_generic$conj_paths_$_iter__195186.call(null,cljs.core.rest.call(null,s__195187__$1)));
} else {
var G__195196 = cljs.core.rest.call(null,s__195187__$1);
s__195187__$1 = G__195196;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24993__auto__.call(null,matches);
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
return (function (p1__195197_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__195197_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__195200){
var vec__195201 = p__195200;
var key = cljs.core.nth.call(null,vec__195201,(0),null);
var val = cljs.core.nth.call(null,vec__195201,(1),null);
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
var G__195202 = outgoing__$1;
var G__195203 = incoming;
var G__195204 = q1__$1;
var G__195205 = q2;
outgoing = G__195202;
incoming = G__195203;
q1 = G__195204;
q2 = G__195205;
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
var G__195206 = outgoing;
var G__195207 = incoming__$1;
var G__195208 = q1;
var G__195209 = q2__$1;
outgoing = G__195206;
incoming = G__195207;
q1 = G__195208;
q2 = G__195209;
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
var args195212 = [];
var len__25279__auto___195233 = arguments.length;
var i__25280__auto___195234 = (0);
while(true){
if((i__25280__auto___195234 < len__25279__auto___195233)){
args195212.push((arguments[i__25280__auto___195234]));

var G__195235 = (i__25280__auto___195234 + (1));
i__25280__auto___195234 = G__195235;
continue;
} else {
}
break;
}

var G__195214 = args195212.length;
switch (G__195214) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args195212.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__195224){
var vec__195229 = p__195224;
var state = cljs.core.nth.call(null,vec__195229,(0),null);
var pq = cljs.core.nth.call(null,vec__195229,(1),null);
var temp__4425__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__195230 = temp__4425__auto__;
var dist_su = cljs.core.nth.call(null,vec__195230,(0),null);
var _ = cljs.core.nth.call(null,vec__195230,(1),null);
var u = cljs.core.nth.call(null,vec__195230,(2),null);
var fpq = vec__195230;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__195230,dist_su,_,u,fpq,temp__4425__auto__,vec__195229,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__195230,dist_su,_,u,fpq,temp__4425__auto__,vec__195229,state,pq){
return (function (p__195231,v){
var vec__195232 = p__195231;
var state__$1 = cljs.core.nth.call(null,vec__195232,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__195232,(1),null);
var dist_suv = (dist_su + dist.call(null,u,v));
var dist_sv = cljs.core.first.call(null,state__$1.call(null,v));
if(cljs.core.truth_((function (){var and__24209__auto__ = dist_sv;
if(cljs.core.truth_(and__24209__auto__)){
return (dist_suv >= dist_sv);
} else {
return and__24209__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,pq__$1], null);
} else {
var pq__$2 = (cljs.core.truth_(dist_sv)?cljs.core.disj.call(null,pq__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_sv,cljs.core.hash.call(null,v),v], null)):pq__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state__$1,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,u], null)),cljs.core.conj.call(null,pq__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,cljs.core.hash.call(null,v),v], null))], null);
}
});})(vec__195230,dist_su,_,u,fpq,temp__4425__auto__,vec__195229,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__195230,dist_su,_,u,fpq,temp__4425__auto__,vec__195229,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__195240){
var vec__195241 = p__195240;
var n = cljs.core.nth.call(null,vec__195241,(0),null);
var vec__195242 = cljs.core.nth.call(null,vec__195241,(1),null);
var d = cljs.core.nth.call(null,vec__195242,(0),null);
var p = cljs.core.nth.call(null,vec__195242,(1),null);
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
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__195246){
var vec__195247 = p__195246;
var node = cljs.core.nth.call(null,vec__195247,(0),null);
var _ = cljs.core.nth.call(null,vec__195247,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__195248 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__195248,(0),null);
var end_state = cljs.core.nth.call(null,vec__195248,(1),null);
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
var size = (function (){var x__24552__auto__ = cljs.core.count.call(null,bitmap);
var y__24553__auto__ = loom.alg_generic.bm_longs.call(null,(idx + (1)));
return ((x__24552__auto__ > y__24553__auto__) ? x__24552__auto__ : y__24553__auto__);
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
var args__25286__auto__ = [];
var len__25279__auto___195273 = arguments.length;
var i__25280__auto___195274 = (0);
while(true){
if((i__25280__auto___195274 < len__25279__auto___195273)){
args__25286__auto__.push((arguments[i__25280__auto___195274]));

var G__195275 = (i__25280__auto___195274 + (1));
i__25280__auto___195274 = G__195275;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((0) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((0)),(0))):null);
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(argseq__25287__auto__);
});

loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic = (function (bitmaps){
if(cljs.core.empty_QMARK_.call(null,bitmaps)){
return loom.alg_generic.bm_new.call(null);
} else {
var size = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,bitmaps));
var bitmap = cljs.core.first.call(null,bitmaps);
var n_zeros = (size - cljs.core.count.call(null,bitmap));
var new_bitmap = bitmap.slice().concat((new Array(n_zeros)).fill((0)));
var seq__195253_195276 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__195260_195277 = null;
var count__195261_195278 = (0);
var i__195262_195279 = (0);
while(true){
if((i__195262_195279 < count__195261_195278)){
var bitmap_195280__$1 = cljs.core._nth.call(null,chunk__195260_195277,i__195262_195279);
var seq__195263_195281 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_195280__$1));
var chunk__195265_195282 = null;
var count__195266_195283 = (0);
var i__195267_195284 = (0);
while(true){
if((i__195267_195284 < count__195266_195283)){
var vec__195269_195285 = cljs.core._nth.call(null,chunk__195265_195282,i__195267_195284);
var idx_195286 = cljs.core.nth.call(null,vec__195269_195285,(0),null);
var value_195287 = cljs.core.nth.call(null,vec__195269_195285,(1),null);
var masked_value_195288 = (value_195287 | (new_bitmap[idx_195286]));
(new_bitmap[idx_195286] = masked_value_195288);

var G__195289 = seq__195263_195281;
var G__195290 = chunk__195265_195282;
var G__195291 = count__195266_195283;
var G__195292 = (i__195267_195284 + (1));
seq__195263_195281 = G__195289;
chunk__195265_195282 = G__195290;
count__195266_195283 = G__195291;
i__195267_195284 = G__195292;
continue;
} else {
var temp__4425__auto___195293 = cljs.core.seq.call(null,seq__195263_195281);
if(temp__4425__auto___195293){
var seq__195263_195294__$1 = temp__4425__auto___195293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__195263_195294__$1)){
var c__25024__auto___195295 = cljs.core.chunk_first.call(null,seq__195263_195294__$1);
var G__195296 = cljs.core.chunk_rest.call(null,seq__195263_195294__$1);
var G__195297 = c__25024__auto___195295;
var G__195298 = cljs.core.count.call(null,c__25024__auto___195295);
var G__195299 = (0);
seq__195263_195281 = G__195296;
chunk__195265_195282 = G__195297;
count__195266_195283 = G__195298;
i__195267_195284 = G__195299;
continue;
} else {
var vec__195270_195300 = cljs.core.first.call(null,seq__195263_195294__$1);
var idx_195301 = cljs.core.nth.call(null,vec__195270_195300,(0),null);
var value_195302 = cljs.core.nth.call(null,vec__195270_195300,(1),null);
var masked_value_195303 = (value_195302 | (new_bitmap[idx_195301]));
(new_bitmap[idx_195301] = masked_value_195303);

var G__195304 = cljs.core.next.call(null,seq__195263_195294__$1);
var G__195305 = null;
var G__195306 = (0);
var G__195307 = (0);
seq__195263_195281 = G__195304;
chunk__195265_195282 = G__195305;
count__195266_195283 = G__195306;
i__195267_195284 = G__195307;
continue;
}
} else {
}
}
break;
}

var G__195308 = seq__195253_195276;
var G__195309 = chunk__195260_195277;
var G__195310 = count__195261_195278;
var G__195311 = (i__195262_195279 + (1));
seq__195253_195276 = G__195308;
chunk__195260_195277 = G__195309;
count__195261_195278 = G__195310;
i__195262_195279 = G__195311;
continue;
} else {
var temp__4425__auto___195312 = cljs.core.seq.call(null,seq__195253_195276);
if(temp__4425__auto___195312){
var seq__195253_195313__$1 = temp__4425__auto___195312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__195253_195313__$1)){
var c__25024__auto___195314 = cljs.core.chunk_first.call(null,seq__195253_195313__$1);
var G__195315 = cljs.core.chunk_rest.call(null,seq__195253_195313__$1);
var G__195316 = c__25024__auto___195314;
var G__195317 = cljs.core.count.call(null,c__25024__auto___195314);
var G__195318 = (0);
seq__195253_195276 = G__195315;
chunk__195260_195277 = G__195316;
count__195261_195278 = G__195317;
i__195262_195279 = G__195318;
continue;
} else {
var bitmap_195319__$1 = cljs.core.first.call(null,seq__195253_195313__$1);
var seq__195254_195320 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_195319__$1));
var chunk__195256_195321 = null;
var count__195257_195322 = (0);
var i__195258_195323 = (0);
while(true){
if((i__195258_195323 < count__195257_195322)){
var vec__195271_195324 = cljs.core._nth.call(null,chunk__195256_195321,i__195258_195323);
var idx_195325 = cljs.core.nth.call(null,vec__195271_195324,(0),null);
var value_195326 = cljs.core.nth.call(null,vec__195271_195324,(1),null);
var masked_value_195327 = (value_195326 | (new_bitmap[idx_195325]));
(new_bitmap[idx_195325] = masked_value_195327);

var G__195328 = seq__195254_195320;
var G__195329 = chunk__195256_195321;
var G__195330 = count__195257_195322;
var G__195331 = (i__195258_195323 + (1));
seq__195254_195320 = G__195328;
chunk__195256_195321 = G__195329;
count__195257_195322 = G__195330;
i__195258_195323 = G__195331;
continue;
} else {
var temp__4425__auto___195332__$1 = cljs.core.seq.call(null,seq__195254_195320);
if(temp__4425__auto___195332__$1){
var seq__195254_195333__$1 = temp__4425__auto___195332__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__195254_195333__$1)){
var c__25024__auto___195334 = cljs.core.chunk_first.call(null,seq__195254_195333__$1);
var G__195335 = cljs.core.chunk_rest.call(null,seq__195254_195333__$1);
var G__195336 = c__25024__auto___195334;
var G__195337 = cljs.core.count.call(null,c__25024__auto___195334);
var G__195338 = (0);
seq__195254_195320 = G__195335;
chunk__195256_195321 = G__195336;
count__195257_195322 = G__195337;
i__195258_195323 = G__195338;
continue;
} else {
var vec__195272_195339 = cljs.core.first.call(null,seq__195254_195333__$1);
var idx_195340 = cljs.core.nth.call(null,vec__195272_195339,(0),null);
var value_195341 = cljs.core.nth.call(null,vec__195272_195339,(1),null);
var masked_value_195342 = (value_195341 | (new_bitmap[idx_195340]));
(new_bitmap[idx_195340] = masked_value_195342);

var G__195343 = cljs.core.next.call(null,seq__195254_195333__$1);
var G__195344 = null;
var G__195345 = (0);
var G__195346 = (0);
seq__195254_195320 = G__195343;
chunk__195256_195321 = G__195344;
count__195257_195322 = G__195345;
i__195258_195323 = G__195346;
continue;
}
} else {
}
}
break;
}

var G__195347 = cljs.core.next.call(null,seq__195253_195313__$1);
var G__195348 = null;
var G__195349 = (0);
var G__195350 = (0);
seq__195253_195276 = G__195347;
chunk__195260_195277 = G__195348;
count__195261_195278 = G__195349;
i__195262_195279 = G__195350;
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

loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq195252){
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq195252));
});
/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__24993__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__195357(s__195358){
return (new cljs.core.LazySeq(null,(function (){
var s__195358__$1 = s__195358;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195358__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var chunk = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24989__auto__ = ((function (s__195358__$1,chunk,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__195357_$_iter__195359(s__195360){
return (new cljs.core.LazySeq(null,((function (s__195358__$1,chunk,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__195360__$1 = s__195360;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195360__$1);
if(temp__4425__auto____$1){
var s__195360__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195360__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195360__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195362 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195361 = (0);
while(true){
if((i__195361 < size__24992__auto__)){
var offset = cljs.core._nth.call(null,c__24991__auto__,i__195361);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__195362,idx);

var G__195363 = (i__195361 + (1));
i__195361 = G__195363;
continue;
} else {
var G__195364 = (i__195361 + (1));
i__195361 = G__195364;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195362),loom$alg_generic$bm_get_indicies_$_iter__195357_$_iter__195359.call(null,cljs.core.chunk_rest.call(null,s__195360__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195362),null);
}
} else {
var offset = cljs.core.first.call(null,s__195360__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__195357_$_iter__195359.call(null,cljs.core.rest.call(null,s__195360__$2)));
} else {
var G__195365 = cljs.core.rest.call(null,s__195360__$2);
s__195360__$1 = G__195365;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__195358__$1,chunk,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__195358__$1,chunk,xs__4977__auto__,temp__4425__auto__))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,loom$alg_generic$bm_get_indicies_$_iter__195357.call(null,cljs.core.rest.call(null,s__195358__$1)));
} else {
var G__195366 = cljs.core.rest.call(null,s__195358__$1);
s__195358__$1 = G__195366;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24993__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,bitmap)));
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
loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24835__auto__,k__24836__auto__){
var self__ = this;
var this__24835__auto____$1 = this;
return cljs.core._lookup.call(null,this__24835__auto____$1,k__24836__auto__,null);
});

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24837__auto__,k195368,else__24838__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
var G__195370 = (((k195368 instanceof cljs.core.Keyword))?k195368.fqn:null);
switch (G__195370) {
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
return cljs.core.get.call(null,self__.__extmap,k195368,else__24838__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24849__auto__,writer__24850__auto__,opts__24851__auto__){
var self__ = this;
var this__24849__auto____$1 = this;
var pr_pair__24852__auto__ = ((function (this__24849__auto____$1){
return (function (keyval__24853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,cljs.core.pr_writer,""," ","",opts__24851__auto__,keyval__24853__auto__);
});})(this__24849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,pr_pair__24852__auto__,"#loom.alg-generic.Ancestry{",", ","}",opts__24851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$ = true;

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__195367){
var self__ = this;
var G__195367__$1 = this;
return (new cljs.core.RecordIter((0),G__195367__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24833__auto__){
var self__ = this;
var this__24833__auto____$1 = this;
return self__.__meta;
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24839__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24830__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
var h__24656__auto__ = self__.__hash;
if(!((h__24656__auto__ == null))){
return h__24656__auto__;
} else {
var h__24656__auto____$1 = cljs.core.hash_imap.call(null,this__24830__auto____$1);
self__.__hash = h__24656__auto____$1;

return h__24656__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24831__auto__,other__24832__auto__){
var self__ = this;
var this__24831__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24209__auto__ = other__24832__auto__;
if(cljs.core.truth_(and__24209__auto__)){
var and__24209__auto____$1 = (this__24831__auto____$1.constructor === other__24832__auto__.constructor);
if(and__24209__auto____$1){
return cljs.core.equiv_map.call(null,this__24831__auto____$1,other__24832__auto__);
} else {
return and__24209__auto____$1;
}
} else {
return and__24209__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24844__auto__,k__24845__auto__){
var self__ = this;
var this__24844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),null], null), null),k__24845__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24844__auto____$1),self__.__meta),k__24845__auto__);
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24845__auto__)),null));
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24842__auto__,k__24843__auto__,G__195367){
var self__ = this;
var this__24842__auto____$1 = this;
var pred__195371 = cljs.core.keyword_identical_QMARK_;
var expr__195372 = k__24843__auto__;
if(cljs.core.truth_(pred__195371.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__195372))){
return (new loom.alg_generic.Ancestry(G__195367,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195371.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__195372))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__195367,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195371.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__195372))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__195367,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24843__auto__,G__195367),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24847__auto__){
var self__ = this;
var this__24847__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24834__auto__,G__195367){
var self__ = this;
var this__24834__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__195367,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24840__auto__,entry__24841__auto__){
var self__ = this;
var this__24840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24841__auto__)){
return cljs.core._assoc.call(null,this__24840__auto____$1,cljs.core._nth.call(null,entry__24841__auto__,(0)),cljs.core._nth.call(null,entry__24841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24840__auto____$1,entry__24841__auto__);
}
});

loom.alg_generic.Ancestry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node->idx","node->idx",1793236754,null),new cljs.core.Symbol(null,"idx->node","idx->node",-842528594,null),new cljs.core.Symbol(null,"bitmaps","bitmaps",-1506736927,null)], null);
});

loom.alg_generic.Ancestry.cljs$lang$type = true;

loom.alg_generic.Ancestry.cljs$lang$ctorPrSeq = (function (this__24869__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.alg-generic/Ancestry");
});

loom.alg_generic.Ancestry.cljs$lang$ctorPrWriter = (function (this__24869__auto__,writer__24870__auto__){
return cljs.core._write.call(null,writer__24870__auto__,"loom.alg-generic/Ancestry");
});

loom.alg_generic.__GT_Ancestry = (function loom$alg_generic$__GT_Ancestry(node__GT_idx,idx__GT_node,bitmaps){
return (new loom.alg_generic.Ancestry(node__GT_idx,idx__GT_node,bitmaps,null,null,null));
});

loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__195369){
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__195369),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__195369),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__195369),null,cljs.core.dissoc.call(null,G__195369,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)),null));
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
var args__25286__auto__ = [];
var len__25279__auto___195380 = arguments.length;
var i__25280__auto___195381 = (0);
while(true){
if((i__25280__auto___195381 < len__25279__auto___195380)){
args__25286__auto__.push((arguments[i__25280__auto___195381]));

var G__195382 = (i__25280__auto___195381 + (1));
i__25280__auto___195381 = G__195382;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((2) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((2)),(0))):null);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25287__auto__);
});

loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic = (function (ancestry,node,parents){
if(cljs.core.truth_(loom.alg_generic.ancestry_contains_QMARK_.call(null,ancestry,node))){
return ancestry;
} else {
var map__195378 = ancestry;
var map__195378__$1 = ((((!((map__195378 == null)))?((((map__195378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__195378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__195378):map__195378);
var node__GT_idx = cljs.core.get.call(null,map__195378__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__195378__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__195378__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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

loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq195375){
var G__195376 = cljs.core.first.call(null,seq195375);
var seq195375__$1 = cljs.core.next.call(null,seq195375);
var G__195377 = cljs.core.first.call(null,seq195375__$1);
var seq195375__$2 = cljs.core.next.call(null,seq195375__$1);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic(G__195376,G__195377,seq195375__$2);
});
/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__195385 = ancestry;
var map__195385__$1 = ((((!((map__195385 == null)))?((((map__195385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__195385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__195385):map__195385);
var node__GT_idx = cljs.core.get.call(null,map__195385__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__195385__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,childer);
var pidx = node__GT_idx.call(null,parenter);
return cljs.core.boolean$.call(null,(cljs.core.truth_((function (){var and__24209__auto__ = cidx;
if(cljs.core.truth_(and__24209__auto__)){
return pidx;
} else {
return and__24209__auto__;
}
})())?loom.alg_generic.bm_get.call(null,cljs.core.get.call(null,bitmaps,cidx),pidx):null));
});
/**
 * Returns all of the ancestors of 'child node.
 */
loom.alg_generic.ancestors = (function loom$alg_generic$ancestors(ancestry,child){
var map__195389 = ancestry;
var map__195389__$1 = ((((!((map__195389 == null)))?((((map__195389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__195389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__195389):map__195389);
var node__GT_idx = cljs.core.get.call(null,map__195389__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__195389__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__195389__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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