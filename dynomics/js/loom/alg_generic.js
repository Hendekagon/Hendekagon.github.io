// Compiled by ClojureScript 1.8.34 {}
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
return (function (p1__369924_SHARP_){
return loom$alg_generic$paths.call(null,preds,cljs.core.conj.call(null,path,p1__369924_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__369923_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__369923_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__369933_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__369933_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__369941){
var vec__369942 = p__369941;
var n = cljs.core.nth.call(null,vec__369942,(0),null);
var p = cljs.core.nth.call(null,vec__369942,(1),null);
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
var args__36267__auto__ = [];
var len__36260__auto___369949 = arguments.length;
var i__36261__auto___369950 = (0);
while(true){
if((i__36261__auto___369950 < len__36260__auto___369949)){
args__36267__auto__.push((arguments[i__36261__auto___369950]));

var G__369951 = (i__36261__auto___369950 + (1));
i__36261__auto___369950 = G__369951;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__369946){
var map__369947 = p__369946;
var map__369947__$1 = ((((!((map__369947 == null)))?((((map__369947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__369947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__369947):map__369947);
var seen = cljs.core.get.call(null,map__369947__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__369947,map__369947__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__4657__auto__,map__369947,map__369947__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__4657__auto__,map__369947,map__369947__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__369947,map__369947__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq369943){
var G__369944 = cljs.core.first.call(null,seq369943);
var seq369943__$1 = cljs.core.next.call(null,seq369943);
var G__369945 = cljs.core.first.call(null,seq369943__$1);
var seq369943__$2 = cljs.core.next.call(null,seq369943__$1);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic(G__369944,G__369945,seq369943__$2);
});
/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.pre_edge_traverse = (function loom$alg_generic$pre_edge_traverse(var_args){
var args__36267__auto__ = [];
var len__36260__auto___369982 = arguments.length;
var i__36261__auto___369983 = (0);
while(true){
if((i__36261__auto___369983 < len__36260__auto___369982)){
args__36267__auto__.push((arguments[i__36261__auto___369983]));

var G__369984 = (i__36261__auto___369983 + (1));
i__36261__auto___369983 = G__369984;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__369977){
var map__369978 = p__369977;
var map__369978__$1 = ((((!((map__369978 == null)))?((((map__369978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__369978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__369978):map__369978);
var seen = cljs.core.get.call(null,map__369978__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__369978,map__369978__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__4655__auto__)){
var nbr = temp__4655__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__369978,map__369978__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__369978,map__369978__$1,seen))
,null,null)));
} else {
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__369993 = successors__$1;
var G__369994 = parent;
var G__369995 = cljs.core.peek.call(null,nbrstack);
var G__369996 = cljs.core.pop.call(null,stack);
var G__369997 = cljs.core.pop.call(null,nbrstack);
var G__369998 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__369993;
start__$1 = G__369994;
nbrs = G__369995;
stack = G__369996;
nbrstack = G__369997;
seen__$1 = G__369998;
continue;
} else {
return null;
}
}
break;
}
});})(map__369978,map__369978__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq369974){
var G__369975 = cljs.core.first.call(null,seq369974);
var seq369974__$1 = cljs.core.next.call(null,seq369974);
var G__369976 = cljs.core.first.call(null,seq369974__$1);
var seq369974__$2 = cljs.core.next.call(null,seq369974__$1);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__369975,G__369976,seq369974__$2);
});
/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__36267__auto__ = [];
var len__36260__auto___370015 = arguments.length;
var i__36261__auto___370016 = (0);
while(true){
if((i__36261__auto___370016 < len__36260__auto___370015)){
args__36267__auto__.push((arguments[i__36261__auto___370016]));

var G__370017 = (i__36261__auto___370016 + (1));
i__36261__auto___370016 = G__370017;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__370007){
var map__370008 = p__370007;
var map__370008__$1 = ((((!((map__370008 == null)))?((((map__370008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370008):map__370008);
var seen = cljs.core.get.call(null,map__370008__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__370008__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.remove.call(null,seen__$2,successors.call(null,v)));
if(cljs.core.truth_(temp__4655__auto__)){
var u = temp__4655__auto__;
var G__370018 = seen__$2;
var G__370019 = cljs.core.assoc.call(null,preds,u,v);
var G__370020 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__370018;
preds = G__370019;
stack = G__370020;
continue;
} else {
var G__370021 = seen__$2;
var G__370022 = preds;
var G__370023 = cljs.core.pop.call(null,stack);
seen__$1 = G__370021;
preds = G__370022;
stack = G__370023;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq370004){
var G__370005 = cljs.core.first.call(null,seq370004);
var seq370004__$1 = cljs.core.next.call(null,seq370004);
var G__370006 = cljs.core.first.call(null,seq370004__$1);
var seq370004__$2 = cljs.core.next.call(null,seq370004__$1);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(G__370005,G__370006,seq370004__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__36267__auto__ = [];
var len__36260__auto___370047 = arguments.length;
var i__36261__auto___370048 = (0);
while(true){
if((i__36261__auto___370048 < len__36260__auto___370047)){
args__36267__auto__.push((arguments[i__36261__auto___370048]));

var G__370049 = (i__36261__auto___370048 + (1));
i__36261__auto___370048 = G__370049;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__370034){
var map__370036 = p__370034;
var map__370036__$1 = ((((!((map__370036 == null)))?((((map__370036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370036):map__370036);
var seen = cljs.core.get.call(null,map__370036__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__370036__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__370071 = seen__$2;
var G__370072 = cljs.core.conj.call(null,result,v);
var G__370073 = cljs.core.pop.call(null,stack);
seen__$1 = G__370071;
result = G__370072;
stack = G__370073;
continue;
} else {
var G__370076 = seen__$2;
var G__370077 = result;
var G__370078 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__370076;
result = G__370077;
stack = G__370078;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq370026){
var G__370027 = cljs.core.first.call(null,seq370026);
var seq370026__$1 = cljs.core.next.call(null,seq370026);
var G__370028 = cljs.core.first.call(null,seq370026__$1);
var seq370026__$2 = cljs.core.next.call(null,seq370026__$1);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__370027,G__370028,seq370026__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.post_edge_traverse = (function loom$alg_generic$post_edge_traverse(var_args){
var args__36267__auto__ = [];
var len__36260__auto___370092 = arguments.length;
var i__36261__auto___370093 = (0);
while(true){
if((i__36261__auto___370093 < len__36260__auto___370092)){
args__36267__auto__.push((arguments[i__36261__auto___370093]));

var G__370094 = (i__36261__auto___370093 + (1));
i__36261__auto___370093 = G__370094;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__370084){
var map__370085 = p__370084;
var map__370085__$1 = ((((!((map__370085 == null)))?((((map__370085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370085):map__370085);
var seen = cljs.core.get.call(null,map__370085__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__370085__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var temp__4655__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__4655__auto__)){
var nbr = temp__4655__auto__;
if(cljs.core.truth_(seen__$2.call(null,nbr))){
var G__370095 = start__$1;
var G__370096 = cljs.core.next.call(null,nbrs);
var G__370097 = stack;
var G__370098 = nbrstack;
var G__370099 = seen__$2;
var G__370100 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__370095;
nbrs = G__370096;
stack = G__370097;
nbrstack = G__370098;
seen__$1 = G__370099;
edges = G__370100;
continue;
} else {
var G__370101 = nbr;
var G__370102 = successors.call(null,nbr);
var G__370103 = cljs.core.conj.call(null,stack,start__$1);
var G__370104 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__370105 = seen__$2;
var G__370106 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__370101;
nbrs = G__370102;
stack = G__370103;
nbrstack = G__370104;
seen__$1 = G__370105;
edges = G__370106;
continue;
}
} else {
var temp__4655__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4655__auto____$1)){
var parent = temp__4655__auto____$1;
var G__370107 = parent;
var G__370108 = cljs.core.peek.call(null,nbrstack);
var G__370109 = cljs.core.pop.call(null,stack);
var G__370110 = cljs.core.pop.call(null,nbrstack);
var G__370111 = seen__$2;
var G__370112 = edges;
start__$1 = G__370107;
nbrs = G__370108;
stack = G__370109;
nbrstack = G__370110;
seen__$1 = G__370111;
edges = G__370112;
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

loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq370079){
var G__370080 = cljs.core.first.call(null,seq370079);
var seq370079__$1 = cljs.core.next.call(null,seq370079);
var G__370081 = cljs.core.first.call(null,seq370079__$1);
var seq370079__$2 = cljs.core.next.call(null,seq370079__$1);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__370080,G__370081,seq370079__$2);
});
/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var args370113 = [];
var len__36260__auto___370120 = arguments.length;
var i__36261__auto___370121 = (0);
while(true){
if((i__36261__auto___370121 < len__36260__auto___370120)){
args370113.push((arguments[i__36261__auto___370121]));

var G__370124 = (i__36261__auto___370121 + (1));
i__36261__auto___370121 = G__370124;
continue;
} else {
}
break;
}

var G__370117 = args370113.length;
switch (G__370117) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args370113.length)].join('')));

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
var G__370130 = seen__$2;
var G__370131 = explored__$1;
var G__370132 = result;
var G__370133 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__370130;
explored__$1 = G__370131;
result = G__370132;
stack = G__370133;
continue;
}
} else {
var G__370136 = seen__$2;
var G__370137 = cljs.core.conj.call(null,explored__$1,v);
var G__370138 = cljs.core.conj.call(null,result,v);
var G__370139 = cljs.core.pop.call(null,stack);
seen__$1 = G__370136;
explored__$1 = G__370137;
result = G__370138;
stack = G__370139;
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
var args__36267__auto__ = [];
var len__36260__auto___370202 = arguments.length;
var i__36261__auto___370203 = (0);
while(true){
if((i__36261__auto___370203 < len__36260__auto___370202)){
args__36267__auto__.push((arguments[i__36261__auto___370203]));

var G__370205 = (i__36261__auto___370203 + (1));
i__36261__auto___370203 = G__370205;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__370151){
var map__370152 = p__370151;
var map__370152__$1 = ((((!((map__370152 == null)))?((((map__370152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370152):map__370152);
var f = cljs.core.get.call(null,map__370152__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__370152__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__370152__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__35191__auto__ = f;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return ((function (or__35191__auto__,map__370152,map__370152__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__35191__auto__,map__370152,map__370152__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__35191__auto__ = when;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__370152,map__370152__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__4657__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__370182 = temp__4657__auto__;
var node = cljs.core.nth.call(null,vec__370182,(0),null);
var depth = cljs.core.nth.call(null,vec__370182,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__370182,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__370152,map__370152__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__370182,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__370152,map__370152__$1,f,when,seen){
return (function (p1__370144_SHARP_){
return nbr_pred.call(null,p1__370144_SHARP_,node,(depth + (1)));
});})(vec__370182,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__370152,map__370152__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__370182,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__370152,map__370152__$1,f,when,seen){
return (function (p1__370143_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__370143_SHARP_);
});})(vec__370182,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__370152,map__370152__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__35971__auto__ = ((function (nbrs,vec__370182,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__370152,map__370152__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__370183(s__370184){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__370182,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__370152,map__370152__$1,f,when,seen){
return (function (){
var s__370184__$1 = s__370184;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__370184__$1);
if(temp__4657__auto____$1){
var s__370184__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__370184__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__370184__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__370186 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__370185 = (0);
while(true){
if((i__370185 < size__35970__auto__)){
var nbr = cljs.core._nth.call(null,c__35969__auto__,i__370185);
cljs.core.chunk_append.call(null,b__370186,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__370232 = (i__370185 + (1));
i__370185 = G__370232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370186),loom$alg_generic$step_$_iter__370183.call(null,cljs.core.chunk_rest.call(null,s__370184__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370186),null);
}
} else {
var nbr = cljs.core.first.call(null,s__370184__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__370183.call(null,cljs.core.rest.call(null,s__370184__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__370182,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__370152,map__370152__$1,f,when,seen))
,null,null));
});})(nbrs,vec__370182,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__370152,map__370152__$1,f,when,seen))
;
return iter__35971__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__370182,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__370152,map__370152__$1,f,when,seen){
return (function (p1__370145_SHARP_,p2__370146_SHARP_){
return cljs.core.assoc.call(null,p1__370145_SHARP_,p2__370146_SHARP_,node);
});})(nbrs,vec__370182,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__370152,map__370152__$1,f,when,seen))
,preds,nbrs));
});})(vec__370182,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__370152,map__370152__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__370152,map__370152__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.fromArray([start,null], true, false),(function (){var iter__35971__auto__ = ((function (f__$1,nbr_pred,map__370152,map__370152__$1,f,when,seen){
return (function loom$alg_generic$iter__370194(s__370195){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__370152,map__370152__$1,f,when,seen){
return (function (){
var s__370195__$1 = s__370195;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__370195__$1);
if(temp__4657__auto__){
var s__370195__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__370195__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__370195__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__370197 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__370196 = (0);
while(true){
if((i__370196 < size__35970__auto__)){
var s = cljs.core._nth.call(null,c__35969__auto__,i__370196);
cljs.core.chunk_append.call(null,b__370197,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__370235 = (i__370196 + (1));
i__370196 = G__370235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370197),loom$alg_generic$iter__370194.call(null,cljs.core.chunk_rest.call(null,s__370195__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370197),null);
}
} else {
var s = cljs.core.first.call(null,s__370195__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__370194.call(null,cljs.core.rest.call(null,s__370195__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__370152,map__370152__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__370152,map__370152__$1,f,when,seen))
;
return iter__35971__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq370147){
var G__370148 = cljs.core.first.call(null,seq370147);
var seq370147__$1 = cljs.core.next.call(null,seq370147);
var G__370149 = cljs.core.first.call(null,seq370147__$1);
var seq370147__$2 = cljs.core.next.call(null,seq370147__$1);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__370148,G__370149,seq370147__$2);
});
/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__36267__auto__ = [];
var len__36260__auto___370251 = arguments.length;
var i__36261__auto___370252 = (0);
while(true){
if((i__36261__auto___370252 < len__36260__auto___370251)){
args__36267__auto__.push((arguments[i__36261__auto___370252]));

var G__370255 = (i__36261__auto___370252 + (1));
i__36261__auto___370252 = G__370255;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__370248){
var map__370249 = p__370248;
var map__370249__$1 = ((((!((map__370249 == null)))?((((map__370249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370249):map__370249);
var seen = cljs.core.get.call(null,map__370249__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__370249,map__370249__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__370249,map__370249__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq370245){
var G__370246 = cljs.core.first.call(null,seq370245);
var seq370245__$1 = cljs.core.next.call(null,seq370245);
var G__370247 = cljs.core.first.call(null,seq370245__$1);
var seq370245__$2 = cljs.core.next.call(null,seq370245__$1);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic(G__370246,G__370247,seq370245__$2);
});
/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__36267__auto__ = [];
var len__36260__auto___370281 = arguments.length;
var i__36261__auto___370282 = (0);
while(true){
if((i__36261__auto___370282 < len__36260__auto___370281)){
args__36267__auto__.push((arguments[i__36261__auto___370282]));

var G__370285 = (i__36261__auto___370282 + (1));
i__36261__auto___370282 = G__370285;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((3) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36268__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__370267){
var map__370268 = p__370267;
var map__370268__$1 = ((((!((map__370268 == null)))?((((map__370268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370268):map__370268);
var opts = map__370268__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__4657__auto__ = cljs.core.some.call(null,((function (opts__$1,map__370268,map__370268__$1,opts){
return (function (p__370277){
var vec__370278 = p__370277;
var _ = cljs.core.nth.call(null,vec__370278,(0),null);
var pm = cljs.core.nth.call(null,vec__370278,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__370278,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__370268,map__370268__$1,opts))
,cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__4657__auto__)){
var preds = temp__4657__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq370263){
var G__370264 = cljs.core.first.call(null,seq370263);
var seq370263__$1 = cljs.core.next.call(null,seq370263);
var G__370265 = cljs.core.first.call(null,seq370263__$1);
var seq370263__$2 = cljs.core.next.call(null,seq370263__$1);
var G__370266 = cljs.core.first.call(null,seq370263__$2);
var seq370263__$3 = cljs.core.next.call(null,seq370263__$2);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__370264,G__370265,G__370266,seq370263__$3);
});
/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__370304 = m2;
var G__370305 = m1;
m1 = G__370304;
m2 = G__370305;
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
if(cljs.core.truth_((function (){var or__35191__auto__ = cljs.core.seq.call(null,intersects);
if(or__35191__auto__){
return or__35191__auto__;
} else {
var or__35191__auto____$1 = loom.alg_generic.future_done_QMARK_.call(null,search1);
if(cljs.core.truth_(or__35191__auto____$1)){
return or__35191__auto____$1;
} else {
return loom.alg_generic.future_done_QMARK_.call(null,search2);
}
}
})())){
cljs.core.reset_BANG_.call(null,done_QMARK_,true);

if(cljs.core.seq.call(null,intersects)){
var intersect = cljs.core.apply.call(null,cljs.core.min_key,((function (intersects,done_QMARK_,preds1,preds2,search,search1,search2,find_intersects){
return (function (p1__370306_SHARP_){
return (cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds1),p1__370306_SHARP_)) + cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds2),p1__370306_SHARP_)));
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
var G__370324 = find_intersects.call(null);
intersects = G__370324;
continue;
}
break;
}
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__35971__auto__ = (function loom$alg_generic$reverse_edges_$_iter__370332(s__370333){
return (new cljs.core.LazySeq(null,(function (){
var s__370333__$1 = s__370333;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__370333__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var node = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__370333__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__370332_$_iter__370334(s__370335){
return (new cljs.core.LazySeq(null,((function (s__370333__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__370335__$1 = s__370335;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__370335__$1);
if(temp__4657__auto____$1){
var s__370335__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__370335__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__370335__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__370337 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__370336 = (0);
while(true){
if((i__370336 < size__35970__auto__)){
var nbr = cljs.core._nth.call(null,c__35969__auto__,i__370336);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
cljs.core.chunk_append.call(null,b__370337,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__370341 = (i__370336 + (1));
i__370336 = G__370341;
continue;
} else {
var G__370342 = (i__370336 + (1));
i__370336 = G__370342;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370337),loom$alg_generic$reverse_edges_$_iter__370332_$_iter__370334.call(null,cljs.core.chunk_rest.call(null,s__370335__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370337),null);
}
} else {
var nbr = cljs.core.first.call(null,s__370335__$2);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__370332_$_iter__370334.call(null,cljs.core.rest.call(null,s__370335__$2)));
} else {
var G__370343 = cljs.core.rest.call(null,s__370335__$2);
s__370335__$1 = G__370343;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__370333__$1,node,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__370333__$1,node,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,successor_fn.call(null,node)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$alg_generic$reverse_edges_$_iter__370332.call(null,cljs.core.rest.call(null,s__370333__$1)));
} else {
var G__370344 = cljs.core.rest.call(null,s__370333__$1);
s__370333__$1 = G__370344;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35971__auto__.call(null,nodes);
});
loom.alg_generic.conj_paths = (function loom$alg_generic$conj_paths(from_map,to_map,matches){
var iter__35971__auto__ = (function loom$alg_generic$conj_paths_$_iter__370368(s__370369){
return (new cljs.core.LazySeq(null,(function (){
var s__370369__$1 = s__370369;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__370369__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__370369__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__370368_$_iter__370370(s__370371){
return (new cljs.core.LazySeq(null,((function (s__370369__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__370371__$1 = s__370371;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__370371__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var from = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__35967__auto__ = ((function (s__370371__$1,s__370369__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__370368_$_iter__370370_$_iter__370372(s__370373){
return (new cljs.core.LazySeq(null,((function (s__370371__$1,s__370369__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__370373__$1 = s__370373;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__370373__$1);
if(temp__4657__auto____$2){
var s__370373__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__370373__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__370373__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__370375 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__370374 = (0);
while(true){
if((i__370374 < size__35970__auto__)){
var to = cljs.core._nth.call(null,c__35969__auto__,i__370374);
cljs.core.chunk_append.call(null,b__370375,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__370398 = (i__370374 + (1));
i__370374 = G__370398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370375),loom$alg_generic$conj_paths_$_iter__370368_$_iter__370370_$_iter__370372.call(null,cljs.core.chunk_rest.call(null,s__370373__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370375),null);
}
} else {
var to = cljs.core.first.call(null,s__370373__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__370368_$_iter__370370_$_iter__370372.call(null,cljs.core.rest.call(null,s__370373__$2)));
}
} else {
return null;
}
break;
}
});})(s__370371__$1,s__370369__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__370371__$1,s__370369__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$alg_generic$conj_paths_$_iter__370368_$_iter__370370.call(null,cljs.core.rest.call(null,s__370371__$1)));
} else {
var G__370403 = cljs.core.rest.call(null,s__370371__$1);
s__370371__$1 = G__370403;
continue;
}
} else {
return null;
}
break;
}
});})(s__370369__$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__370369__$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$alg_generic$conj_paths_$_iter__370368.call(null,cljs.core.rest.call(null,s__370369__$1)));
} else {
var G__370405 = cljs.core.rest.call(null,s__370369__$1);
s__370369__$1 = G__370405;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35971__auto__.call(null,matches);
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
return (function (p1__370406_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__370406_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__370409){
var vec__370410 = p__370409;
var key = cljs.core.nth.call(null,vec__370410,(0),null);
var val = cljs.core.nth.call(null,vec__370410,(1),null);
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
var temp__4655__auto__ = overlaps.call(null,incoming,q1__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var all = temp__4655__auto__;
return loom.alg_generic.conj_paths.call(null,outgoing__$1,incoming,cljs.core.set.call(null,all));
} else {
var G__370420 = outgoing__$1;
var G__370421 = incoming;
var G__370422 = q1__$1;
var G__370423 = q2;
outgoing = G__370420;
incoming = G__370421;
q1 = G__370422;
q2 = G__370423;
continue;
}
} else {
var pairs = find_preds.call(null,q2,incoming);
var incoming__$1 = map_set_pairs.call(null,incoming,pairs);
var q2__$1 = cljs.core.map.call(null,cljs.core.first,pairs);
var temp__4655__auto__ = overlaps.call(null,outgoing,q2__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var all = temp__4655__auto__;
return loom.alg_generic.conj_paths.call(null,outgoing,incoming__$1,cljs.core.set.call(null,all));
} else {
var G__370425 = outgoing;
var G__370426 = incoming__$1;
var G__370427 = q1;
var G__370428 = q2__$1;
outgoing = G__370425;
incoming = G__370426;
q1 = G__370427;
q2 = G__370428;
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
var args370431 = [];
var len__36260__auto___370471 = arguments.length;
var i__36261__auto___370472 = (0);
while(true){
if((i__36261__auto___370472 < len__36260__auto___370471)){
args370431.push((arguments[i__36261__auto___370472]));

var G__370473 = (i__36261__auto___370472 + (1));
i__36261__auto___370472 = G__370473;
continue;
} else {
}
break;
}

var G__370437 = args370431.length;
switch (G__370437) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args370431.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__370454){
var vec__370464 = p__370454;
var state = cljs.core.nth.call(null,vec__370464,(0),null);
var pq = cljs.core.nth.call(null,vec__370464,(1),null);
var temp__4657__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__370466 = temp__4657__auto__;
var dist_su = cljs.core.nth.call(null,vec__370466,(0),null);
var _ = cljs.core.nth.call(null,vec__370466,(1),null);
var u = cljs.core.nth.call(null,vec__370466,(2),null);
var fpq = vec__370466;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__370466,dist_su,_,u,fpq,temp__4657__auto__,vec__370464,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__370466,dist_su,_,u,fpq,temp__4657__auto__,vec__370464,state,pq){
return (function (p__370467,v){
var vec__370468 = p__370467;
var state__$1 = cljs.core.nth.call(null,vec__370468,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__370468,(1),null);
var dist_suv = (dist_su + dist.call(null,u,v));
var dist_sv = cljs.core.first.call(null,state__$1.call(null,v));
if(cljs.core.truth_((function (){var and__35179__auto__ = dist_sv;
if(cljs.core.truth_(and__35179__auto__)){
return (dist_suv >= dist_sv);
} else {
return and__35179__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,pq__$1], null);
} else {
var pq__$2 = (cljs.core.truth_(dist_sv)?cljs.core.disj.call(null,pq__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_sv,cljs.core.hash.call(null,v),v], null)):pq__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state__$1,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,u], null)),cljs.core.conj.call(null,pq__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,cljs.core.hash.call(null,v),v], null))], null);
}
});})(vec__370466,dist_su,_,u,fpq,temp__4657__auto__,vec__370464,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__370466,dist_su,_,u,fpq,temp__4657__auto__,vec__370464,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__370495){
var vec__370496 = p__370495;
var n = cljs.core.nth.call(null,vec__370496,(0),null);
var vec__370497 = cljs.core.nth.call(null,vec__370496,(1),null);
var d = cljs.core.nth.call(null,vec__370497,(0),null);
var p = cljs.core.nth.call(null,vec__370497,(1),null);
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
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__370501){
var vec__370502 = p__370501;
var node = cljs.core.nth.call(null,vec__370502,(0),null);
var _ = cljs.core.nth.call(null,vec__370502,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__370503 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__370503,(0),null);
var end_state = cljs.core.nth.call(null,vec__370503,(1),null);
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
var size = (function (){var x__35522__auto__ = cljs.core.count.call(null,bitmap);
var y__35523__auto__ = loom.alg_generic.bm_longs.call(null,(idx + (1)));
return ((x__35522__auto__ > y__35523__auto__) ? x__35522__auto__ : y__35523__auto__);
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
var args__36267__auto__ = [];
var len__36260__auto___370548 = arguments.length;
var i__36261__auto___370549 = (0);
while(true){
if((i__36261__auto___370549 < len__36260__auto___370548)){
args__36267__auto__.push((arguments[i__36261__auto___370549]));

var G__370550 = (i__36261__auto___370549 + (1));
i__36261__auto___370549 = G__370550;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((0) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((0)),(0),null)):null);
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(argseq__36268__auto__);
});

loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic = (function (bitmaps){
if(cljs.core.empty_QMARK_.call(null,bitmaps)){
return loom.alg_generic.bm_new.call(null);
} else {
var size = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,bitmaps));
var bitmap = cljs.core.first.call(null,bitmaps);
var n_zeros = (size - cljs.core.count.call(null,bitmap));
var new_bitmap = bitmap.slice().concat((new Array(n_zeros)).fill((0)));
var seq__370524_370555 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__370531_370556 = null;
var count__370532_370557 = (0);
var i__370533_370558 = (0);
while(true){
if((i__370533_370558 < count__370532_370557)){
var bitmap_370559__$1 = cljs.core._nth.call(null,chunk__370531_370556,i__370533_370558);
var seq__370534_370560 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_370559__$1));
var chunk__370536_370561 = null;
var count__370537_370562 = (0);
var i__370538_370563 = (0);
while(true){
if((i__370538_370563 < count__370537_370562)){
var vec__370540_370564 = cljs.core._nth.call(null,chunk__370536_370561,i__370538_370563);
var idx_370565 = cljs.core.nth.call(null,vec__370540_370564,(0),null);
var value_370566 = cljs.core.nth.call(null,vec__370540_370564,(1),null);
var masked_value_370569 = (value_370566 | (new_bitmap[idx_370565]));
(new_bitmap[idx_370565] = masked_value_370569);

var G__370570 = seq__370534_370560;
var G__370571 = chunk__370536_370561;
var G__370572 = count__370537_370562;
var G__370573 = (i__370538_370563 + (1));
seq__370534_370560 = G__370570;
chunk__370536_370561 = G__370571;
count__370537_370562 = G__370572;
i__370538_370563 = G__370573;
continue;
} else {
var temp__4657__auto___370574 = cljs.core.seq.call(null,seq__370534_370560);
if(temp__4657__auto___370574){
var seq__370534_370575__$1 = temp__4657__auto___370574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__370534_370575__$1)){
var c__36002__auto___370576 = cljs.core.chunk_first.call(null,seq__370534_370575__$1);
var G__370577 = cljs.core.chunk_rest.call(null,seq__370534_370575__$1);
var G__370578 = c__36002__auto___370576;
var G__370579 = cljs.core.count.call(null,c__36002__auto___370576);
var G__370580 = (0);
seq__370534_370560 = G__370577;
chunk__370536_370561 = G__370578;
count__370537_370562 = G__370579;
i__370538_370563 = G__370580;
continue;
} else {
var vec__370543_370583 = cljs.core.first.call(null,seq__370534_370575__$1);
var idx_370584 = cljs.core.nth.call(null,vec__370543_370583,(0),null);
var value_370585 = cljs.core.nth.call(null,vec__370543_370583,(1),null);
var masked_value_370586 = (value_370585 | (new_bitmap[idx_370584]));
(new_bitmap[idx_370584] = masked_value_370586);

var G__370587 = cljs.core.next.call(null,seq__370534_370575__$1);
var G__370588 = null;
var G__370589 = (0);
var G__370590 = (0);
seq__370534_370560 = G__370587;
chunk__370536_370561 = G__370588;
count__370537_370562 = G__370589;
i__370538_370563 = G__370590;
continue;
}
} else {
}
}
break;
}

var G__370593 = seq__370524_370555;
var G__370594 = chunk__370531_370556;
var G__370595 = count__370532_370557;
var G__370596 = (i__370533_370558 + (1));
seq__370524_370555 = G__370593;
chunk__370531_370556 = G__370594;
count__370532_370557 = G__370595;
i__370533_370558 = G__370596;
continue;
} else {
var temp__4657__auto___370597 = cljs.core.seq.call(null,seq__370524_370555);
if(temp__4657__auto___370597){
var seq__370524_370598__$1 = temp__4657__auto___370597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__370524_370598__$1)){
var c__36002__auto___370599 = cljs.core.chunk_first.call(null,seq__370524_370598__$1);
var G__370600 = cljs.core.chunk_rest.call(null,seq__370524_370598__$1);
var G__370601 = c__36002__auto___370599;
var G__370602 = cljs.core.count.call(null,c__36002__auto___370599);
var G__370603 = (0);
seq__370524_370555 = G__370600;
chunk__370531_370556 = G__370601;
count__370532_370557 = G__370602;
i__370533_370558 = G__370603;
continue;
} else {
var bitmap_370606__$1 = cljs.core.first.call(null,seq__370524_370598__$1);
var seq__370525_370607 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_370606__$1));
var chunk__370527_370608 = null;
var count__370528_370609 = (0);
var i__370529_370610 = (0);
while(true){
if((i__370529_370610 < count__370528_370609)){
var vec__370544_370611 = cljs.core._nth.call(null,chunk__370527_370608,i__370529_370610);
var idx_370612 = cljs.core.nth.call(null,vec__370544_370611,(0),null);
var value_370613 = cljs.core.nth.call(null,vec__370544_370611,(1),null);
var masked_value_370616 = (value_370613 | (new_bitmap[idx_370612]));
(new_bitmap[idx_370612] = masked_value_370616);

var G__370618 = seq__370525_370607;
var G__370619 = chunk__370527_370608;
var G__370620 = count__370528_370609;
var G__370621 = (i__370529_370610 + (1));
seq__370525_370607 = G__370618;
chunk__370527_370608 = G__370619;
count__370528_370609 = G__370620;
i__370529_370610 = G__370621;
continue;
} else {
var temp__4657__auto___370625__$1 = cljs.core.seq.call(null,seq__370525_370607);
if(temp__4657__auto___370625__$1){
var seq__370525_370626__$1 = temp__4657__auto___370625__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__370525_370626__$1)){
var c__36002__auto___370627 = cljs.core.chunk_first.call(null,seq__370525_370626__$1);
var G__370629 = cljs.core.chunk_rest.call(null,seq__370525_370626__$1);
var G__370630 = c__36002__auto___370627;
var G__370631 = cljs.core.count.call(null,c__36002__auto___370627);
var G__370632 = (0);
seq__370525_370607 = G__370629;
chunk__370527_370608 = G__370630;
count__370528_370609 = G__370631;
i__370529_370610 = G__370632;
continue;
} else {
var vec__370547_370635 = cljs.core.first.call(null,seq__370525_370626__$1);
var idx_370636 = cljs.core.nth.call(null,vec__370547_370635,(0),null);
var value_370637 = cljs.core.nth.call(null,vec__370547_370635,(1),null);
var masked_value_370638 = (value_370637 | (new_bitmap[idx_370636]));
(new_bitmap[idx_370636] = masked_value_370638);

var G__370639 = cljs.core.next.call(null,seq__370525_370626__$1);
var G__370640 = null;
var G__370641 = (0);
var G__370642 = (0);
seq__370525_370607 = G__370639;
chunk__370527_370608 = G__370640;
count__370528_370609 = G__370641;
i__370529_370610 = G__370642;
continue;
}
} else {
}
}
break;
}

var G__370643 = cljs.core.next.call(null,seq__370524_370598__$1);
var G__370644 = null;
var G__370645 = (0);
var G__370646 = (0);
seq__370524_370555 = G__370643;
chunk__370531_370556 = G__370644;
count__370532_370557 = G__370645;
i__370533_370558 = G__370646;
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

loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq370521){
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq370521));
});
/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__35971__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__370675(s__370676){
return (new cljs.core.LazySeq(null,(function (){
var s__370676__$1 = s__370676;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__370676__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var chunk = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__370676__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__370675_$_iter__370677(s__370678){
return (new cljs.core.LazySeq(null,((function (s__370676__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__370678__$1 = s__370678;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__370678__$1);
if(temp__4657__auto____$1){
var s__370678__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__370678__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__370678__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__370680 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__370679 = (0);
while(true){
if((i__370679 < size__35970__auto__)){
var offset = cljs.core._nth.call(null,c__35969__auto__,i__370679);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__370680,idx);

var G__370705 = (i__370679 + (1));
i__370679 = G__370705;
continue;
} else {
var G__370707 = (i__370679 + (1));
i__370679 = G__370707;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370680),loom$alg_generic$bm_get_indicies_$_iter__370675_$_iter__370677.call(null,cljs.core.chunk_rest.call(null,s__370678__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370680),null);
}
} else {
var offset = cljs.core.first.call(null,s__370678__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__370675_$_iter__370677.call(null,cljs.core.rest.call(null,s__370678__$2)));
} else {
var G__370713 = cljs.core.rest.call(null,s__370678__$2);
s__370678__$1 = G__370713;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__370676__$1,chunk,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__370676__$1,chunk,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$alg_generic$bm_get_indicies_$_iter__370675.call(null,cljs.core.rest.call(null,s__370676__$1)));
} else {
var G__370718 = cljs.core.rest.call(null,s__370676__$1);
s__370676__$1 = G__370718;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35971__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,bitmap)));
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
loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35813__auto__,k__35814__auto__){
var self__ = this;
var this__35813__auto____$1 = this;
return cljs.core._lookup.call(null,this__35813__auto____$1,k__35814__auto__,null);
});

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35815__auto__,k370720,else__35816__auto__){
var self__ = this;
var this__35815__auto____$1 = this;
var G__370725 = (((k370720 instanceof cljs.core.Keyword))?k370720.fqn:null);
switch (G__370725) {
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
return cljs.core.get.call(null,self__.__extmap,k370720,else__35816__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35827__auto__,writer__35828__auto__,opts__35829__auto__){
var self__ = this;
var this__35827__auto____$1 = this;
var pr_pair__35830__auto__ = ((function (this__35827__auto____$1){
return (function (keyval__35831__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,cljs.core.pr_writer,""," ","",opts__35829__auto__,keyval__35831__auto__);
});})(this__35827__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,pr_pair__35830__auto__,"#loom.alg-generic.Ancestry{",", ","}",opts__35829__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$ = true;

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__370719){
var self__ = this;
var G__370719__$1 = this;
return (new cljs.core.RecordIter((0),G__370719__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35811__auto__){
var self__ = this;
var this__35811__auto____$1 = this;
return self__.__meta;
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35807__auto__){
var self__ = this;
var this__35807__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35817__auto__){
var self__ = this;
var this__35817__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35808__auto__){
var self__ = this;
var this__35808__auto____$1 = this;
var h__35626__auto__ = self__.__hash;
if(!((h__35626__auto__ == null))){
return h__35626__auto__;
} else {
var h__35626__auto____$1 = cljs.core.hash_imap.call(null,this__35808__auto____$1);
self__.__hash = h__35626__auto____$1;

return h__35626__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35809__auto__,other__35810__auto__){
var self__ = this;
var this__35809__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35179__auto__ = other__35810__auto__;
if(cljs.core.truth_(and__35179__auto__)){
var and__35179__auto____$1 = (this__35809__auto____$1.constructor === other__35810__auto__.constructor);
if(and__35179__auto____$1){
return cljs.core.equiv_map.call(null,this__35809__auto____$1,other__35810__auto__);
} else {
return and__35179__auto____$1;
}
} else {
return and__35179__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35822__auto__,k__35823__auto__){
var self__ = this;
var this__35822__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),null], null), null),k__35823__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35822__auto____$1),self__.__meta),k__35823__auto__);
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35823__auto__)),null));
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35820__auto__,k__35821__auto__,G__370719){
var self__ = this;
var this__35820__auto____$1 = this;
var pred__370734 = cljs.core.keyword_identical_QMARK_;
var expr__370735 = k__35821__auto__;
if(cljs.core.truth_(pred__370734.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__370735))){
return (new loom.alg_generic.Ancestry(G__370719,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__370734.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__370735))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__370719,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__370734.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__370735))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__370719,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35821__auto__,G__370719),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35825__auto__){
var self__ = this;
var this__35825__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35812__auto__,G__370719){
var self__ = this;
var this__35812__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__370719,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35818__auto__,entry__35819__auto__){
var self__ = this;
var this__35818__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35819__auto__)){
return cljs.core._assoc.call(null,this__35818__auto____$1,cljs.core._nth.call(null,entry__35819__auto__,(0)),cljs.core._nth.call(null,entry__35819__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35818__auto____$1,entry__35819__auto__);
}
});

loom.alg_generic.Ancestry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node->idx","node->idx",1793236754,null),new cljs.core.Symbol(null,"idx->node","idx->node",-842528594,null),new cljs.core.Symbol(null,"bitmaps","bitmaps",-1506736927,null)], null);
});

loom.alg_generic.Ancestry.cljs$lang$type = true;

loom.alg_generic.Ancestry.cljs$lang$ctorPrSeq = (function (this__35847__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.alg-generic/Ancestry");
});

loom.alg_generic.Ancestry.cljs$lang$ctorPrWriter = (function (this__35847__auto__,writer__35848__auto__){
return cljs.core._write.call(null,writer__35848__auto__,"loom.alg-generic/Ancestry");
});

loom.alg_generic.__GT_Ancestry = (function loom$alg_generic$__GT_Ancestry(node__GT_idx,idx__GT_node,bitmaps){
return (new loom.alg_generic.Ancestry(node__GT_idx,idx__GT_node,bitmaps,null,null,null));
});

loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__370721){
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__370721),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__370721),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__370721),null,cljs.core.dissoc.call(null,G__370721,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)),null));
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
var args__36267__auto__ = [];
var len__36260__auto___370776 = arguments.length;
var i__36261__auto___370777 = (0);
while(true){
if((i__36261__auto___370777 < len__36260__auto___370776)){
args__36267__auto__.push((arguments[i__36261__auto___370777]));

var G__370778 = (i__36261__auto___370777 + (1));
i__36261__auto___370777 = G__370778;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic = (function (ancestry,node,parents){
if(cljs.core.truth_(loom.alg_generic.ancestry_contains_QMARK_.call(null,ancestry,node))){
return ancestry;
} else {
var map__370770 = ancestry;
var map__370770__$1 = ((((!((map__370770 == null)))?((((map__370770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370770):map__370770);
var node__GT_idx = cljs.core.get.call(null,map__370770__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__370770__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__370770__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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

loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq370765){
var G__370766 = cljs.core.first.call(null,seq370765);
var seq370765__$1 = cljs.core.next.call(null,seq370765);
var G__370767 = cljs.core.first.call(null,seq370765__$1);
var seq370765__$2 = cljs.core.next.call(null,seq370765__$1);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic(G__370766,G__370767,seq370765__$2);
});
/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__370801 = ancestry;
var map__370801__$1 = ((((!((map__370801 == null)))?((((map__370801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370801):map__370801);
var node__GT_idx = cljs.core.get.call(null,map__370801__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__370801__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,childer);
var pidx = node__GT_idx.call(null,parenter);
return cljs.core.boolean$.call(null,(cljs.core.truth_((function (){var and__35179__auto__ = cidx;
if(cljs.core.truth_(and__35179__auto__)){
return pidx;
} else {
return and__35179__auto__;
}
})())?loom.alg_generic.bm_get.call(null,cljs.core.get.call(null,bitmaps,cidx),pidx):null));
});
/**
 * Returns all of the ancestors of 'child node.
 */
loom.alg_generic.ancestors = (function loom$alg_generic$ancestors(ancestry,child){
var map__370807 = ancestry;
var map__370807__$1 = ((((!((map__370807 == null)))?((((map__370807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370807):map__370807);
var node__GT_idx = cljs.core.get.call(null,map__370807__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__370807__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__370807__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});
