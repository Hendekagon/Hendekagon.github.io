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
return (function (p1__374955_SHARP_){
return loom$alg_generic$paths.call(null,preds,cljs.core.conj.call(null,path,p1__374955_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__374954_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__374954_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__374956_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__374956_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__374959){
var vec__374960 = p__374959;
var n = cljs.core.nth.call(null,vec__374960,(0),null);
var p = cljs.core.nth.call(null,vec__374960,(1),null);
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
var len__25219__auto___374967 = arguments.length;
var i__25220__auto___374968 = (0);
while(true){
if((i__25220__auto___374968 < len__25219__auto___374967)){
args__25226__auto__.push((arguments[i__25220__auto___374968]));

var G__374969 = (i__25220__auto___374968 + (1));
i__25220__auto___374968 = G__374969;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((2) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((2)),(0))):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25227__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__374964){
var map__374965 = p__374964;
var map__374965__$1 = ((((!((map__374965 == null)))?((((map__374965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__374965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__374965):map__374965);
var seen = cljs.core.get.call(null,map__374965__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__374965,map__374965__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__4425__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__4425__auto__,map__374965,map__374965__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__4425__auto__,map__374965,map__374965__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__374965,map__374965__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq374961){
var G__374962 = cljs.core.first.call(null,seq374961);
var seq374961__$1 = cljs.core.next.call(null,seq374961);
var G__374963 = cljs.core.first.call(null,seq374961__$1);
var seq374961__$2 = cljs.core.next.call(null,seq374961__$1);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic(G__374962,G__374963,seq374961__$2);
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
var len__25219__auto___374976 = arguments.length;
var i__25220__auto___374977 = (0);
while(true){
if((i__25220__auto___374977 < len__25219__auto___374976)){
args__25226__auto__.push((arguments[i__25220__auto___374977]));

var G__374978 = (i__25220__auto___374977 + (1));
i__25220__auto___374977 = G__374978;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((2) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((2)),(0))):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25227__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__374973){
var map__374974 = p__374973;
var map__374974__$1 = ((((!((map__374974 == null)))?((((map__374974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__374974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__374974):map__374974);
var seen = cljs.core.get.call(null,map__374974__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__374974,map__374974__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__4423__auto__)){
var nbr = temp__4423__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4423__auto__,map__374974,map__374974__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4423__auto__,map__374974,map__374974__$1,seen))
,null,null)));
} else {
var temp__4425__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
var G__374979 = successors__$1;
var G__374980 = parent;
var G__374981 = cljs.core.peek.call(null,nbrstack);
var G__374982 = cljs.core.pop.call(null,stack);
var G__374983 = cljs.core.pop.call(null,nbrstack);
var G__374984 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__374979;
start__$1 = G__374980;
nbrs = G__374981;
stack = G__374982;
nbrstack = G__374983;
seen__$1 = G__374984;
continue;
} else {
return null;
}
}
break;
}
});})(map__374974,map__374974__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq374970){
var G__374971 = cljs.core.first.call(null,seq374970);
var seq374970__$1 = cljs.core.next.call(null,seq374970);
var G__374972 = cljs.core.first.call(null,seq374970__$1);
var seq374970__$2 = cljs.core.next.call(null,seq374970__$1);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__374971,G__374972,seq374970__$2);
});
/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__25226__auto__ = [];
var len__25219__auto___374991 = arguments.length;
var i__25220__auto___374992 = (0);
while(true){
if((i__25220__auto___374992 < len__25219__auto___374991)){
args__25226__auto__.push((arguments[i__25220__auto___374992]));

var G__374993 = (i__25220__auto___374992 + (1));
i__25220__auto___374992 = G__374993;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((2) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((2)),(0))):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25227__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__374988){
var map__374989 = p__374988;
var map__374989__$1 = ((((!((map__374989 == null)))?((((map__374989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__374989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__374989):map__374989);
var seen = cljs.core.get.call(null,map__374989__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__374989__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__374994 = seen__$2;
var G__374995 = cljs.core.assoc.call(null,preds,u,v);
var G__374996 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__374994;
preds = G__374995;
stack = G__374996;
continue;
} else {
var G__374997 = seen__$2;
var G__374998 = preds;
var G__374999 = cljs.core.pop.call(null,stack);
seen__$1 = G__374997;
preds = G__374998;
stack = G__374999;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq374985){
var G__374986 = cljs.core.first.call(null,seq374985);
var seq374985__$1 = cljs.core.next.call(null,seq374985);
var G__374987 = cljs.core.first.call(null,seq374985__$1);
var seq374985__$2 = cljs.core.next.call(null,seq374985__$1);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(G__374986,G__374987,seq374985__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__25226__auto__ = [];
var len__25219__auto___375006 = arguments.length;
var i__25220__auto___375007 = (0);
while(true){
if((i__25220__auto___375007 < len__25219__auto___375006)){
args__25226__auto__.push((arguments[i__25220__auto___375007]));

var G__375008 = (i__25220__auto___375007 + (1));
i__25220__auto___375007 = G__375008;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((2) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((2)),(0))):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25227__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__375003){
var map__375004 = p__375003;
var map__375004__$1 = ((((!((map__375004 == null)))?((((map__375004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375004):map__375004);
var seen = cljs.core.get.call(null,map__375004__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__375004__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__375009 = seen__$2;
var G__375010 = cljs.core.conj.call(null,result,v);
var G__375011 = cljs.core.pop.call(null,stack);
seen__$1 = G__375009;
result = G__375010;
stack = G__375011;
continue;
} else {
var G__375012 = seen__$2;
var G__375013 = result;
var G__375014 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__375012;
result = G__375013;
stack = G__375014;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq375000){
var G__375001 = cljs.core.first.call(null,seq375000);
var seq375000__$1 = cljs.core.next.call(null,seq375000);
var G__375002 = cljs.core.first.call(null,seq375000__$1);
var seq375000__$2 = cljs.core.next.call(null,seq375000__$1);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__375001,G__375002,seq375000__$2);
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
var len__25219__auto___375021 = arguments.length;
var i__25220__auto___375022 = (0);
while(true){
if((i__25220__auto___375022 < len__25219__auto___375021)){
args__25226__auto__.push((arguments[i__25220__auto___375022]));

var G__375023 = (i__25220__auto___375022 + (1));
i__25220__auto___375022 = G__375023;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((2) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((2)),(0))):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25227__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__375018){
var map__375019 = p__375018;
var map__375019__$1 = ((((!((map__375019 == null)))?((((map__375019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375019):map__375019);
var seen = cljs.core.get.call(null,map__375019__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__375019__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__375024 = start__$1;
var G__375025 = cljs.core.next.call(null,nbrs);
var G__375026 = stack;
var G__375027 = nbrstack;
var G__375028 = seen__$2;
var G__375029 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__375024;
nbrs = G__375025;
stack = G__375026;
nbrstack = G__375027;
seen__$1 = G__375028;
edges = G__375029;
continue;
} else {
var G__375030 = nbr;
var G__375031 = successors.call(null,nbr);
var G__375032 = cljs.core.conj.call(null,stack,start__$1);
var G__375033 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__375034 = seen__$2;
var G__375035 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__375030;
nbrs = G__375031;
stack = G__375032;
nbrstack = G__375033;
seen__$1 = G__375034;
edges = G__375035;
continue;
}
} else {
var temp__4423__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4423__auto____$1)){
var parent = temp__4423__auto____$1;
var G__375036 = parent;
var G__375037 = cljs.core.peek.call(null,nbrstack);
var G__375038 = cljs.core.pop.call(null,stack);
var G__375039 = cljs.core.pop.call(null,nbrstack);
var G__375040 = seen__$2;
var G__375041 = edges;
start__$1 = G__375036;
nbrs = G__375037;
stack = G__375038;
nbrstack = G__375039;
seen__$1 = G__375040;
edges = G__375041;
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

loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq375015){
var G__375016 = cljs.core.first.call(null,seq375015);
var seq375015__$1 = cljs.core.next.call(null,seq375015);
var G__375017 = cljs.core.first.call(null,seq375015__$1);
var seq375015__$2 = cljs.core.next.call(null,seq375015__$1);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__375016,G__375017,seq375015__$2);
});
/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var args375042 = [];
var len__25219__auto___375045 = arguments.length;
var i__25220__auto___375046 = (0);
while(true){
if((i__25220__auto___375046 < len__25219__auto___375045)){
args375042.push((arguments[i__25220__auto___375046]));

var G__375047 = (i__25220__auto___375046 + (1));
i__25220__auto___375046 = G__375047;
continue;
} else {
}
break;
}

var G__375044 = args375042.length;
switch (G__375044) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args375042.length)].join('')));

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
var G__375049 = seen__$2;
var G__375050 = explored__$1;
var G__375051 = result;
var G__375052 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__375049;
explored__$1 = G__375050;
result = G__375051;
stack = G__375052;
continue;
}
} else {
var G__375053 = seen__$2;
var G__375054 = cljs.core.conj.call(null,explored__$1,v);
var G__375055 = cljs.core.conj.call(null,result,v);
var G__375056 = cljs.core.pop.call(null,stack);
seen__$1 = G__375053;
explored__$1 = G__375054;
result = G__375055;
stack = G__375056;
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
var len__25219__auto___375091 = arguments.length;
var i__25220__auto___375092 = (0);
while(true){
if((i__25220__auto___375092 < len__25219__auto___375091)){
args__25226__auto__.push((arguments[i__25220__auto___375092]));

var G__375093 = (i__25220__auto___375092 + (1));
i__25220__auto___375092 = G__375093;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((2) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((2)),(0))):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25227__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__375064){
var map__375065 = p__375064;
var map__375065__$1 = ((((!((map__375065 == null)))?((((map__375065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375065):map__375065);
var f = cljs.core.get.call(null,map__375065__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__375065__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__375065__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__24161__auto__ = f;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return ((function (or__24161__auto__,map__375065,map__375065__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__24161__auto__,map__375065,map__375065__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__24161__auto__ = when;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__375065,map__375065__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__4425__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__375082 = temp__4425__auto__;
var node = cljs.core.nth.call(null,vec__375082,(0),null);
var depth = cljs.core.nth.call(null,vec__375082,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__375082,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__375065,map__375065__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__375082,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__375065,map__375065__$1,f,when,seen){
return (function (p1__375058_SHARP_){
return nbr_pred.call(null,p1__375058_SHARP_,node,(depth + (1)));
});})(vec__375082,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__375065,map__375065__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__375082,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__375065,map__375065__$1,f,when,seen){
return (function (p1__375057_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__375057_SHARP_);
});})(vec__375082,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__375065,map__375065__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__24933__auto__ = ((function (nbrs,vec__375082,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__375065,map__375065__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__375083(s__375084){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__375082,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__375065,map__375065__$1,f,when,seen){
return (function (){
var s__375084__$1 = s__375084;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__375084__$1);
if(temp__4425__auto____$1){
var s__375084__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__375084__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__375084__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__375086 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__375085 = (0);
while(true){
if((i__375085 < size__24932__auto__)){
var nbr = cljs.core._nth.call(null,c__24931__auto__,i__375085);
cljs.core.chunk_append.call(null,b__375086,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__375094 = (i__375085 + (1));
i__375085 = G__375094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375086),loom$alg_generic$step_$_iter__375083.call(null,cljs.core.chunk_rest.call(null,s__375084__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375086),null);
}
} else {
var nbr = cljs.core.first.call(null,s__375084__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__375083.call(null,cljs.core.rest.call(null,s__375084__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__375082,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__375065,map__375065__$1,f,when,seen))
,null,null));
});})(nbrs,vec__375082,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__375065,map__375065__$1,f,when,seen))
;
return iter__24933__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__375082,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__375065,map__375065__$1,f,when,seen){
return (function (p1__375059_SHARP_,p2__375060_SHARP_){
return cljs.core.assoc.call(null,p1__375059_SHARP_,p2__375060_SHARP_,node);
});})(nbrs,vec__375082,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__375065,map__375065__$1,f,when,seen))
,preds,nbrs));
});})(vec__375082,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__375065,map__375065__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__375065,map__375065__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.fromArray([start,null], true, false),(function (){var iter__24933__auto__ = ((function (f__$1,nbr_pred,map__375065,map__375065__$1,f,when,seen){
return (function loom$alg_generic$iter__375087(s__375088){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__375065,map__375065__$1,f,when,seen){
return (function (){
var s__375088__$1 = s__375088;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__375088__$1);
if(temp__4425__auto__){
var s__375088__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__375088__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__375088__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__375090 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__375089 = (0);
while(true){
if((i__375089 < size__24932__auto__)){
var s = cljs.core._nth.call(null,c__24931__auto__,i__375089);
cljs.core.chunk_append.call(null,b__375090,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__375095 = (i__375089 + (1));
i__375089 = G__375095;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375090),loom$alg_generic$iter__375087.call(null,cljs.core.chunk_rest.call(null,s__375088__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375090),null);
}
} else {
var s = cljs.core.first.call(null,s__375088__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__375087.call(null,cljs.core.rest.call(null,s__375088__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__375065,map__375065__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__375065,map__375065__$1,f,when,seen))
;
return iter__24933__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq375061){
var G__375062 = cljs.core.first.call(null,seq375061);
var seq375061__$1 = cljs.core.next.call(null,seq375061);
var G__375063 = cljs.core.first.call(null,seq375061__$1);
var seq375061__$2 = cljs.core.next.call(null,seq375061__$1);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__375062,G__375063,seq375061__$2);
});
/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__25226__auto__ = [];
var len__25219__auto___375102 = arguments.length;
var i__25220__auto___375103 = (0);
while(true){
if((i__25220__auto___375103 < len__25219__auto___375102)){
args__25226__auto__.push((arguments[i__25220__auto___375103]));

var G__375104 = (i__25220__auto___375103 + (1));
i__25220__auto___375103 = G__375104;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((2) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((2)),(0))):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25227__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__375099){
var map__375100 = p__375099;
var map__375100__$1 = ((((!((map__375100 == null)))?((((map__375100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375100):map__375100);
var seen = cljs.core.get.call(null,map__375100__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__375100,map__375100__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__375100,map__375100__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq375096){
var G__375097 = cljs.core.first.call(null,seq375096);
var seq375096__$1 = cljs.core.next.call(null,seq375096);
var G__375098 = cljs.core.first.call(null,seq375096__$1);
var seq375096__$2 = cljs.core.next.call(null,seq375096__$1);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic(G__375097,G__375098,seq375096__$2);
});
/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__25226__auto__ = [];
var len__25219__auto___375114 = arguments.length;
var i__25220__auto___375115 = (0);
while(true){
if((i__25220__auto___375115 < len__25219__auto___375114)){
args__25226__auto__.push((arguments[i__25220__auto___375115]));

var G__375116 = (i__25220__auto___375115 + (1));
i__25220__auto___375115 = G__375116;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((3) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((3)),(0))):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25227__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__375109){
var map__375110 = p__375109;
var map__375110__$1 = ((((!((map__375110 == null)))?((((map__375110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375110):map__375110);
var opts = map__375110__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__4425__auto__ = cljs.core.some.call(null,((function (opts__$1,map__375110,map__375110__$1,opts){
return (function (p__375112){
var vec__375113 = p__375112;
var _ = cljs.core.nth.call(null,vec__375113,(0),null);
var pm = cljs.core.nth.call(null,vec__375113,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__375113,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__375110,map__375110__$1,opts))
,cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__4425__auto__)){
var preds = temp__4425__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq375105){
var G__375106 = cljs.core.first.call(null,seq375105);
var seq375105__$1 = cljs.core.next.call(null,seq375105);
var G__375107 = cljs.core.first.call(null,seq375105__$1);
var seq375105__$2 = cljs.core.next.call(null,seq375105__$1);
var G__375108 = cljs.core.first.call(null,seq375105__$2);
var seq375105__$3 = cljs.core.next.call(null,seq375105__$2);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__375106,G__375107,G__375108,seq375105__$3);
});
/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__375117 = m2;
var G__375118 = m1;
m1 = G__375117;
m2 = G__375118;
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
return (function (p1__375119_SHARP_){
return (cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds1),p1__375119_SHARP_)) + cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds2),p1__375119_SHARP_)));
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
var G__375120 = find_intersects.call(null);
intersects = G__375120;
continue;
}
break;
}
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__24933__auto__ = (function loom$alg_generic$reverse_edges_$_iter__375127(s__375128){
return (new cljs.core.LazySeq(null,(function (){
var s__375128__$1 = s__375128;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__375128__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var node = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24929__auto__ = ((function (s__375128__$1,node,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__375127_$_iter__375129(s__375130){
return (new cljs.core.LazySeq(null,((function (s__375128__$1,node,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__375130__$1 = s__375130;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__375130__$1);
if(temp__4425__auto____$1){
var s__375130__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__375130__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__375130__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__375132 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__375131 = (0);
while(true){
if((i__375131 < size__24932__auto__)){
var nbr = cljs.core._nth.call(null,c__24931__auto__,i__375131);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
cljs.core.chunk_append.call(null,b__375132,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__375133 = (i__375131 + (1));
i__375131 = G__375133;
continue;
} else {
var G__375134 = (i__375131 + (1));
i__375131 = G__375134;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375132),loom$alg_generic$reverse_edges_$_iter__375127_$_iter__375129.call(null,cljs.core.chunk_rest.call(null,s__375130__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375132),null);
}
} else {
var nbr = cljs.core.first.call(null,s__375130__$2);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__375127_$_iter__375129.call(null,cljs.core.rest.call(null,s__375130__$2)));
} else {
var G__375135 = cljs.core.rest.call(null,s__375130__$2);
s__375130__$1 = G__375135;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__375128__$1,node,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__375128__$1,node,xs__4977__auto__,temp__4425__auto__))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,successor_fn.call(null,node)));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,loom$alg_generic$reverse_edges_$_iter__375127.call(null,cljs.core.rest.call(null,s__375128__$1)));
} else {
var G__375136 = cljs.core.rest.call(null,s__375128__$1);
s__375128__$1 = G__375136;
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
var iter__24933__auto__ = (function loom$alg_generic$conj_paths_$_iter__375145(s__375146){
return (new cljs.core.LazySeq(null,(function (){
var s__375146__$1 = s__375146;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__375146__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24929__auto__ = ((function (s__375146__$1,n,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$conj_paths_$_iter__375145_$_iter__375147(s__375148){
return (new cljs.core.LazySeq(null,((function (s__375146__$1,n,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__375148__$1 = s__375148;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__375148__$1);
if(temp__4425__auto____$1){
var xs__4977__auto____$1 = temp__4425__auto____$1;
var from = cljs.core.first.call(null,xs__4977__auto____$1);
var iterys__24929__auto__ = ((function (s__375148__$1,s__375146__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$conj_paths_$_iter__375145_$_iter__375147_$_iter__375149(s__375150){
return (new cljs.core.LazySeq(null,((function (s__375148__$1,s__375146__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__375150__$1 = s__375150;
while(true){
var temp__4425__auto____$2 = cljs.core.seq.call(null,s__375150__$1);
if(temp__4425__auto____$2){
var s__375150__$2 = temp__4425__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__375150__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__375150__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__375152 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__375151 = (0);
while(true){
if((i__375151 < size__24932__auto__)){
var to = cljs.core._nth.call(null,c__24931__auto__,i__375151);
cljs.core.chunk_append.call(null,b__375152,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__375153 = (i__375151 + (1));
i__375151 = G__375153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375152),loom$alg_generic$conj_paths_$_iter__375145_$_iter__375147_$_iter__375149.call(null,cljs.core.chunk_rest.call(null,s__375150__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375152),null);
}
} else {
var to = cljs.core.first.call(null,s__375150__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__375145_$_iter__375147_$_iter__375149.call(null,cljs.core.rest.call(null,s__375150__$2)));
}
} else {
return null;
}
break;
}
});})(s__375148__$1,s__375146__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__375148__$1,s__375146__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,loom$alg_generic$conj_paths_$_iter__375145_$_iter__375147.call(null,cljs.core.rest.call(null,s__375148__$1)));
} else {
var G__375154 = cljs.core.rest.call(null,s__375148__$1);
s__375148__$1 = G__375154;
continue;
}
} else {
return null;
}
break;
}
});})(s__375146__$1,n,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__375146__$1,n,xs__4977__auto__,temp__4425__auto__))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,loom$alg_generic$conj_paths_$_iter__375145.call(null,cljs.core.rest.call(null,s__375146__$1)));
} else {
var G__375155 = cljs.core.rest.call(null,s__375146__$1);
s__375146__$1 = G__375155;
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
return (function (p1__375156_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__375156_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__375159){
var vec__375160 = p__375159;
var key = cljs.core.nth.call(null,vec__375160,(0),null);
var val = cljs.core.nth.call(null,vec__375160,(1),null);
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
var G__375161 = outgoing__$1;
var G__375162 = incoming;
var G__375163 = q1__$1;
var G__375164 = q2;
outgoing = G__375161;
incoming = G__375162;
q1 = G__375163;
q2 = G__375164;
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
var G__375165 = outgoing;
var G__375166 = incoming__$1;
var G__375167 = q1;
var G__375168 = q2__$1;
outgoing = G__375165;
incoming = G__375166;
q1 = G__375167;
q2 = G__375168;
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
var args375171 = [];
var len__25219__auto___375192 = arguments.length;
var i__25220__auto___375193 = (0);
while(true){
if((i__25220__auto___375193 < len__25219__auto___375192)){
args375171.push((arguments[i__25220__auto___375193]));

var G__375194 = (i__25220__auto___375193 + (1));
i__25220__auto___375193 = G__375194;
continue;
} else {
}
break;
}

var G__375173 = args375171.length;
switch (G__375173) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args375171.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__375183){
var vec__375188 = p__375183;
var state = cljs.core.nth.call(null,vec__375188,(0),null);
var pq = cljs.core.nth.call(null,vec__375188,(1),null);
var temp__4425__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__375189 = temp__4425__auto__;
var dist_su = cljs.core.nth.call(null,vec__375189,(0),null);
var _ = cljs.core.nth.call(null,vec__375189,(1),null);
var u = cljs.core.nth.call(null,vec__375189,(2),null);
var fpq = vec__375189;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__375189,dist_su,_,u,fpq,temp__4425__auto__,vec__375188,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__375189,dist_su,_,u,fpq,temp__4425__auto__,vec__375188,state,pq){
return (function (p__375190,v){
var vec__375191 = p__375190;
var state__$1 = cljs.core.nth.call(null,vec__375191,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__375191,(1),null);
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
});})(vec__375189,dist_su,_,u,fpq,temp__4425__auto__,vec__375188,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__375189,dist_su,_,u,fpq,temp__4425__auto__,vec__375188,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__375199){
var vec__375200 = p__375199;
var n = cljs.core.nth.call(null,vec__375200,(0),null);
var vec__375201 = cljs.core.nth.call(null,vec__375200,(1),null);
var d = cljs.core.nth.call(null,vec__375201,(0),null);
var p = cljs.core.nth.call(null,vec__375201,(1),null);
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
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__375205){
var vec__375206 = p__375205;
var node = cljs.core.nth.call(null,vec__375206,(0),null);
var _ = cljs.core.nth.call(null,vec__375206,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__375207 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__375207,(0),null);
var end_state = cljs.core.nth.call(null,vec__375207,(1),null);
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
var len__25219__auto___375232 = arguments.length;
var i__25220__auto___375233 = (0);
while(true){
if((i__25220__auto___375233 < len__25219__auto___375232)){
args__25226__auto__.push((arguments[i__25220__auto___375233]));

var G__375234 = (i__25220__auto___375233 + (1));
i__25220__auto___375233 = G__375234;
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
var seq__375212_375235 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__375219_375236 = null;
var count__375220_375237 = (0);
var i__375221_375238 = (0);
while(true){
if((i__375221_375238 < count__375220_375237)){
var bitmap_375239__$1 = cljs.core._nth.call(null,chunk__375219_375236,i__375221_375238);
var seq__375222_375240 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_375239__$1));
var chunk__375224_375241 = null;
var count__375225_375242 = (0);
var i__375226_375243 = (0);
while(true){
if((i__375226_375243 < count__375225_375242)){
var vec__375228_375244 = cljs.core._nth.call(null,chunk__375224_375241,i__375226_375243);
var idx_375245 = cljs.core.nth.call(null,vec__375228_375244,(0),null);
var value_375246 = cljs.core.nth.call(null,vec__375228_375244,(1),null);
var masked_value_375247 = (value_375246 | (new_bitmap[idx_375245]));
(new_bitmap[idx_375245] = masked_value_375247);

var G__375248 = seq__375222_375240;
var G__375249 = chunk__375224_375241;
var G__375250 = count__375225_375242;
var G__375251 = (i__375226_375243 + (1));
seq__375222_375240 = G__375248;
chunk__375224_375241 = G__375249;
count__375225_375242 = G__375250;
i__375226_375243 = G__375251;
continue;
} else {
var temp__4425__auto___375252 = cljs.core.seq.call(null,seq__375222_375240);
if(temp__4425__auto___375252){
var seq__375222_375253__$1 = temp__4425__auto___375252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__375222_375253__$1)){
var c__24964__auto___375254 = cljs.core.chunk_first.call(null,seq__375222_375253__$1);
var G__375255 = cljs.core.chunk_rest.call(null,seq__375222_375253__$1);
var G__375256 = c__24964__auto___375254;
var G__375257 = cljs.core.count.call(null,c__24964__auto___375254);
var G__375258 = (0);
seq__375222_375240 = G__375255;
chunk__375224_375241 = G__375256;
count__375225_375242 = G__375257;
i__375226_375243 = G__375258;
continue;
} else {
var vec__375229_375259 = cljs.core.first.call(null,seq__375222_375253__$1);
var idx_375260 = cljs.core.nth.call(null,vec__375229_375259,(0),null);
var value_375261 = cljs.core.nth.call(null,vec__375229_375259,(1),null);
var masked_value_375262 = (value_375261 | (new_bitmap[idx_375260]));
(new_bitmap[idx_375260] = masked_value_375262);

var G__375263 = cljs.core.next.call(null,seq__375222_375253__$1);
var G__375264 = null;
var G__375265 = (0);
var G__375266 = (0);
seq__375222_375240 = G__375263;
chunk__375224_375241 = G__375264;
count__375225_375242 = G__375265;
i__375226_375243 = G__375266;
continue;
}
} else {
}
}
break;
}

var G__375267 = seq__375212_375235;
var G__375268 = chunk__375219_375236;
var G__375269 = count__375220_375237;
var G__375270 = (i__375221_375238 + (1));
seq__375212_375235 = G__375267;
chunk__375219_375236 = G__375268;
count__375220_375237 = G__375269;
i__375221_375238 = G__375270;
continue;
} else {
var temp__4425__auto___375271 = cljs.core.seq.call(null,seq__375212_375235);
if(temp__4425__auto___375271){
var seq__375212_375272__$1 = temp__4425__auto___375271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__375212_375272__$1)){
var c__24964__auto___375273 = cljs.core.chunk_first.call(null,seq__375212_375272__$1);
var G__375274 = cljs.core.chunk_rest.call(null,seq__375212_375272__$1);
var G__375275 = c__24964__auto___375273;
var G__375276 = cljs.core.count.call(null,c__24964__auto___375273);
var G__375277 = (0);
seq__375212_375235 = G__375274;
chunk__375219_375236 = G__375275;
count__375220_375237 = G__375276;
i__375221_375238 = G__375277;
continue;
} else {
var bitmap_375278__$1 = cljs.core.first.call(null,seq__375212_375272__$1);
var seq__375213_375279 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_375278__$1));
var chunk__375215_375280 = null;
var count__375216_375281 = (0);
var i__375217_375282 = (0);
while(true){
if((i__375217_375282 < count__375216_375281)){
var vec__375230_375283 = cljs.core._nth.call(null,chunk__375215_375280,i__375217_375282);
var idx_375284 = cljs.core.nth.call(null,vec__375230_375283,(0),null);
var value_375285 = cljs.core.nth.call(null,vec__375230_375283,(1),null);
var masked_value_375286 = (value_375285 | (new_bitmap[idx_375284]));
(new_bitmap[idx_375284] = masked_value_375286);

var G__375287 = seq__375213_375279;
var G__375288 = chunk__375215_375280;
var G__375289 = count__375216_375281;
var G__375290 = (i__375217_375282 + (1));
seq__375213_375279 = G__375287;
chunk__375215_375280 = G__375288;
count__375216_375281 = G__375289;
i__375217_375282 = G__375290;
continue;
} else {
var temp__4425__auto___375291__$1 = cljs.core.seq.call(null,seq__375213_375279);
if(temp__4425__auto___375291__$1){
var seq__375213_375292__$1 = temp__4425__auto___375291__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__375213_375292__$1)){
var c__24964__auto___375293 = cljs.core.chunk_first.call(null,seq__375213_375292__$1);
var G__375294 = cljs.core.chunk_rest.call(null,seq__375213_375292__$1);
var G__375295 = c__24964__auto___375293;
var G__375296 = cljs.core.count.call(null,c__24964__auto___375293);
var G__375297 = (0);
seq__375213_375279 = G__375294;
chunk__375215_375280 = G__375295;
count__375216_375281 = G__375296;
i__375217_375282 = G__375297;
continue;
} else {
var vec__375231_375298 = cljs.core.first.call(null,seq__375213_375292__$1);
var idx_375299 = cljs.core.nth.call(null,vec__375231_375298,(0),null);
var value_375300 = cljs.core.nth.call(null,vec__375231_375298,(1),null);
var masked_value_375301 = (value_375300 | (new_bitmap[idx_375299]));
(new_bitmap[idx_375299] = masked_value_375301);

var G__375302 = cljs.core.next.call(null,seq__375213_375292__$1);
var G__375303 = null;
var G__375304 = (0);
var G__375305 = (0);
seq__375213_375279 = G__375302;
chunk__375215_375280 = G__375303;
count__375216_375281 = G__375304;
i__375217_375282 = G__375305;
continue;
}
} else {
}
}
break;
}

var G__375306 = cljs.core.next.call(null,seq__375212_375272__$1);
var G__375307 = null;
var G__375308 = (0);
var G__375309 = (0);
seq__375212_375235 = G__375306;
chunk__375219_375236 = G__375307;
count__375220_375237 = G__375308;
i__375221_375238 = G__375309;
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

loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq375211){
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq375211));
});
/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__24933__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__375316(s__375317){
return (new cljs.core.LazySeq(null,(function (){
var s__375317__$1 = s__375317;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__375317__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var chunk = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24929__auto__ = ((function (s__375317__$1,chunk,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__375316_$_iter__375318(s__375319){
return (new cljs.core.LazySeq(null,((function (s__375317__$1,chunk,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__375319__$1 = s__375319;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__375319__$1);
if(temp__4425__auto____$1){
var s__375319__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__375319__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__375319__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__375321 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__375320 = (0);
while(true){
if((i__375320 < size__24932__auto__)){
var offset = cljs.core._nth.call(null,c__24931__auto__,i__375320);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__375321,idx);

var G__375322 = (i__375320 + (1));
i__375320 = G__375322;
continue;
} else {
var G__375323 = (i__375320 + (1));
i__375320 = G__375323;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375321),loom$alg_generic$bm_get_indicies_$_iter__375316_$_iter__375318.call(null,cljs.core.chunk_rest.call(null,s__375319__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375321),null);
}
} else {
var offset = cljs.core.first.call(null,s__375319__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__375316_$_iter__375318.call(null,cljs.core.rest.call(null,s__375319__$2)));
} else {
var G__375324 = cljs.core.rest.call(null,s__375319__$2);
s__375319__$1 = G__375324;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__375317__$1,chunk,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__375317__$1,chunk,xs__4977__auto__,temp__4425__auto__))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,loom$alg_generic$bm_get_indicies_$_iter__375316.call(null,cljs.core.rest.call(null,s__375317__$1)));
} else {
var G__375325 = cljs.core.rest.call(null,s__375317__$1);
s__375317__$1 = G__375325;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24777__auto__,k375327,else__24778__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
var G__375329 = (((k375327 instanceof cljs.core.Keyword))?k375327.fqn:null);
switch (G__375329) {
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
return cljs.core.get.call(null,self__.__extmap,k375327,else__24778__auto__);

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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__375326){
var self__ = this;
var G__375326__$1 = this;
return (new cljs.core.RecordIter((0),G__375326__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24782__auto__,k__24783__auto__,G__375326){
var self__ = this;
var this__24782__auto____$1 = this;
var pred__375330 = cljs.core.keyword_identical_QMARK_;
var expr__375331 = k__24783__auto__;
if(cljs.core.truth_(pred__375330.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__375331))){
return (new loom.alg_generic.Ancestry(G__375326,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__375330.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__375331))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__375326,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__375330.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__375331))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__375326,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24783__auto__,G__375326),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24787__auto__){
var self__ = this;
var this__24787__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24774__auto__,G__375326){
var self__ = this;
var this__24774__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__375326,self__.__extmap,self__.__hash));
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

loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__375328){
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__375328),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__375328),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__375328),null,cljs.core.dissoc.call(null,G__375328,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)),null));
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
var len__25219__auto___375339 = arguments.length;
var i__25220__auto___375340 = (0);
while(true){
if((i__25220__auto___375340 < len__25219__auto___375339)){
args__25226__auto__.push((arguments[i__25220__auto___375340]));

var G__375341 = (i__25220__auto___375340 + (1));
i__25220__auto___375340 = G__375341;
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
var map__375337 = ancestry;
var map__375337__$1 = ((((!((map__375337 == null)))?((((map__375337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375337):map__375337);
var node__GT_idx = cljs.core.get.call(null,map__375337__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__375337__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__375337__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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

loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq375334){
var G__375335 = cljs.core.first.call(null,seq375334);
var seq375334__$1 = cljs.core.next.call(null,seq375334);
var G__375336 = cljs.core.first.call(null,seq375334__$1);
var seq375334__$2 = cljs.core.next.call(null,seq375334__$1);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic(G__375335,G__375336,seq375334__$2);
});
/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__375344 = ancestry;
var map__375344__$1 = ((((!((map__375344 == null)))?((((map__375344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375344):map__375344);
var node__GT_idx = cljs.core.get.call(null,map__375344__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__375344__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__375348 = ancestry;
var map__375348__$1 = ((((!((map__375348 == null)))?((((map__375348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375348):map__375348);
var node__GT_idx = cljs.core.get.call(null,map__375348__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__375348__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__375348__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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