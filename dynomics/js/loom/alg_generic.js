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
return (function (p1__449848_SHARP_){
return loom$alg_generic$paths.call(null,preds,cljs.core.conj.call(null,path,p1__449848_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__449847_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__449847_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__449859_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__449859_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__449863){
var vec__449864 = p__449863;
var n = cljs.core.nth.call(null,vec__449864,(0),null);
var p = cljs.core.nth.call(null,vec__449864,(1),null);
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
var len__36260__auto___449873 = arguments.length;
var i__36261__auto___449875 = (0);
while(true){
if((i__36261__auto___449875 < len__36260__auto___449873)){
args__36267__auto__.push((arguments[i__36261__auto___449875]));

var G__449876 = (i__36261__auto___449875 + (1));
i__36261__auto___449875 = G__449876;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__449868){
var map__449869 = p__449868;
var map__449869__$1 = ((((!((map__449869 == null)))?((((map__449869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__449869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__449869):map__449869);
var seen = cljs.core.get.call(null,map__449869__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__449869,map__449869__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__4657__auto__,map__449869,map__449869__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__4657__auto__,map__449869,map__449869__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__449869,map__449869__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq449865){
var G__449866 = cljs.core.first.call(null,seq449865);
var seq449865__$1 = cljs.core.next.call(null,seq449865);
var G__449867 = cljs.core.first.call(null,seq449865__$1);
var seq449865__$2 = cljs.core.next.call(null,seq449865__$1);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic(G__449866,G__449867,seq449865__$2);
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
var len__36260__auto___449913 = arguments.length;
var i__36261__auto___449914 = (0);
while(true){
if((i__36261__auto___449914 < len__36260__auto___449913)){
args__36267__auto__.push((arguments[i__36261__auto___449914]));

var G__449916 = (i__36261__auto___449914 + (1));
i__36261__auto___449914 = G__449916;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__449896){
var map__449897 = p__449896;
var map__449897__$1 = ((((!((map__449897 == null)))?((((map__449897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__449897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__449897):map__449897);
var seen = cljs.core.get.call(null,map__449897__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__449897,map__449897__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__4655__auto__)){
var nbr = temp__4655__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__449897,map__449897__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__449897,map__449897__$1,seen))
,null,null)));
} else {
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__449939 = successors__$1;
var G__449940 = parent;
var G__449941 = cljs.core.peek.call(null,nbrstack);
var G__449942 = cljs.core.pop.call(null,stack);
var G__449943 = cljs.core.pop.call(null,nbrstack);
var G__449944 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__449939;
start__$1 = G__449940;
nbrs = G__449941;
stack = G__449942;
nbrstack = G__449943;
seen__$1 = G__449944;
continue;
} else {
return null;
}
}
break;
}
});})(map__449897,map__449897__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq449893){
var G__449894 = cljs.core.first.call(null,seq449893);
var seq449893__$1 = cljs.core.next.call(null,seq449893);
var G__449895 = cljs.core.first.call(null,seq449893__$1);
var seq449893__$2 = cljs.core.next.call(null,seq449893__$1);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__449894,G__449895,seq449893__$2);
});
/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__36267__auto__ = [];
var len__36260__auto___449961 = arguments.length;
var i__36261__auto___449962 = (0);
while(true){
if((i__36261__auto___449962 < len__36260__auto___449961)){
args__36267__auto__.push((arguments[i__36261__auto___449962]));

var G__449964 = (i__36261__auto___449962 + (1));
i__36261__auto___449962 = G__449964;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__449950){
var map__449951 = p__449950;
var map__449951__$1 = ((((!((map__449951 == null)))?((((map__449951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__449951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__449951):map__449951);
var seen = cljs.core.get.call(null,map__449951__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__449951__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__449968 = seen__$2;
var G__449969 = cljs.core.assoc.call(null,preds,u,v);
var G__449970 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__449968;
preds = G__449969;
stack = G__449970;
continue;
} else {
var G__449974 = seen__$2;
var G__449975 = preds;
var G__449976 = cljs.core.pop.call(null,stack);
seen__$1 = G__449974;
preds = G__449975;
stack = G__449976;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq449947){
var G__449948 = cljs.core.first.call(null,seq449947);
var seq449947__$1 = cljs.core.next.call(null,seq449947);
var G__449949 = cljs.core.first.call(null,seq449947__$1);
var seq449947__$2 = cljs.core.next.call(null,seq449947__$1);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(G__449948,G__449949,seq449947__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__36267__auto__ = [];
var len__36260__auto___449987 = arguments.length;
var i__36261__auto___449988 = (0);
while(true){
if((i__36261__auto___449988 < len__36260__auto___449987)){
args__36267__auto__.push((arguments[i__36261__auto___449988]));

var G__449989 = (i__36261__auto___449988 + (1));
i__36261__auto___449988 = G__449989;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__449984){
var map__449985 = p__449984;
var map__449985__$1 = ((((!((map__449985 == null)))?((((map__449985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__449985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__449985):map__449985);
var seen = cljs.core.get.call(null,map__449985__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__449985__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__449993 = seen__$2;
var G__449994 = cljs.core.conj.call(null,result,v);
var G__449995 = cljs.core.pop.call(null,stack);
seen__$1 = G__449993;
result = G__449994;
stack = G__449995;
continue;
} else {
var G__449997 = seen__$2;
var G__449998 = result;
var G__449999 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__449997;
result = G__449998;
stack = G__449999;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq449981){
var G__449982 = cljs.core.first.call(null,seq449981);
var seq449981__$1 = cljs.core.next.call(null,seq449981);
var G__449983 = cljs.core.first.call(null,seq449981__$1);
var seq449981__$2 = cljs.core.next.call(null,seq449981__$1);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__449982,G__449983,seq449981__$2);
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
var len__36260__auto___450009 = arguments.length;
var i__36261__auto___450010 = (0);
while(true){
if((i__36261__auto___450010 < len__36260__auto___450009)){
args__36267__auto__.push((arguments[i__36261__auto___450010]));

var G__450011 = (i__36261__auto___450010 + (1));
i__36261__auto___450010 = G__450011;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__450005){
var map__450006 = p__450005;
var map__450006__$1 = ((((!((map__450006 == null)))?((((map__450006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__450006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__450006):map__450006);
var seen = cljs.core.get.call(null,map__450006__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__450006__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__450012 = start__$1;
var G__450013 = cljs.core.next.call(null,nbrs);
var G__450014 = stack;
var G__450015 = nbrstack;
var G__450016 = seen__$2;
var G__450017 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__450012;
nbrs = G__450013;
stack = G__450014;
nbrstack = G__450015;
seen__$1 = G__450016;
edges = G__450017;
continue;
} else {
var G__450020 = nbr;
var G__450021 = successors.call(null,nbr);
var G__450022 = cljs.core.conj.call(null,stack,start__$1);
var G__450023 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__450024 = seen__$2;
var G__450025 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__450020;
nbrs = G__450021;
stack = G__450022;
nbrstack = G__450023;
seen__$1 = G__450024;
edges = G__450025;
continue;
}
} else {
var temp__4655__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4655__auto____$1)){
var parent = temp__4655__auto____$1;
var G__450026 = parent;
var G__450027 = cljs.core.peek.call(null,nbrstack);
var G__450028 = cljs.core.pop.call(null,stack);
var G__450029 = cljs.core.pop.call(null,nbrstack);
var G__450030 = seen__$2;
var G__450031 = edges;
start__$1 = G__450026;
nbrs = G__450027;
stack = G__450028;
nbrstack = G__450029;
seen__$1 = G__450030;
edges = G__450031;
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

loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq450002){
var G__450003 = cljs.core.first.call(null,seq450002);
var seq450002__$1 = cljs.core.next.call(null,seq450002);
var G__450004 = cljs.core.first.call(null,seq450002__$1);
var seq450002__$2 = cljs.core.next.call(null,seq450002__$1);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__450003,G__450004,seq450002__$2);
});
/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var args450033 = [];
var len__36260__auto___450045 = arguments.length;
var i__36261__auto___450046 = (0);
while(true){
if((i__36261__auto___450046 < len__36260__auto___450045)){
args450033.push((arguments[i__36261__auto___450046]));

var G__450048 = (i__36261__auto___450046 + (1));
i__36261__auto___450046 = G__450048;
continue;
} else {
}
break;
}

var G__450042 = args450033.length;
switch (G__450042) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args450033.length)].join('')));

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
var G__450055 = seen__$2;
var G__450056 = explored__$1;
var G__450057 = result;
var G__450058 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__450055;
explored__$1 = G__450056;
result = G__450057;
stack = G__450058;
continue;
}
} else {
var G__450059 = seen__$2;
var G__450060 = cljs.core.conj.call(null,explored__$1,v);
var G__450061 = cljs.core.conj.call(null,result,v);
var G__450062 = cljs.core.pop.call(null,stack);
seen__$1 = G__450059;
explored__$1 = G__450060;
result = G__450061;
stack = G__450062;
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
var len__36260__auto___450148 = arguments.length;
var i__36261__auto___450149 = (0);
while(true){
if((i__36261__auto___450149 < len__36260__auto___450148)){
args__36267__auto__.push((arguments[i__36261__auto___450149]));

var G__450150 = (i__36261__auto___450149 + (1));
i__36261__auto___450149 = G__450150;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__450079){
var map__450080 = p__450079;
var map__450080__$1 = ((((!((map__450080 == null)))?((((map__450080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__450080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__450080):map__450080);
var f = cljs.core.get.call(null,map__450080__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__450080__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__450080__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__35191__auto__ = f;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return ((function (or__35191__auto__,map__450080,map__450080__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__35191__auto__,map__450080,map__450080__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__35191__auto__ = when;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__450080,map__450080__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__4657__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__450120 = temp__4657__auto__;
var node = cljs.core.nth.call(null,vec__450120,(0),null);
var depth = cljs.core.nth.call(null,vec__450120,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__450120,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__450080,map__450080__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__450120,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__450080,map__450080__$1,f,when,seen){
return (function (p1__450064_SHARP_){
return nbr_pred.call(null,p1__450064_SHARP_,node,(depth + (1)));
});})(vec__450120,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__450080,map__450080__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__450120,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__450080,map__450080__$1,f,when,seen){
return (function (p1__450063_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__450063_SHARP_);
});})(vec__450120,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__450080,map__450080__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__35971__auto__ = ((function (nbrs,vec__450120,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__450080,map__450080__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__450121(s__450122){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__450120,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__450080,map__450080__$1,f,when,seen){
return (function (){
var s__450122__$1 = s__450122;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__450122__$1);
if(temp__4657__auto____$1){
var s__450122__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__450122__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__450122__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__450124 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__450123 = (0);
while(true){
if((i__450123 < size__35970__auto__)){
var nbr = cljs.core._nth.call(null,c__35969__auto__,i__450123);
cljs.core.chunk_append.call(null,b__450124,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__450167 = (i__450123 + (1));
i__450123 = G__450167;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450124),loom$alg_generic$step_$_iter__450121.call(null,cljs.core.chunk_rest.call(null,s__450122__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450124),null);
}
} else {
var nbr = cljs.core.first.call(null,s__450122__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__450121.call(null,cljs.core.rest.call(null,s__450122__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__450120,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__450080,map__450080__$1,f,when,seen))
,null,null));
});})(nbrs,vec__450120,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__450080,map__450080__$1,f,when,seen))
;
return iter__35971__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__450120,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__450080,map__450080__$1,f,when,seen){
return (function (p1__450065_SHARP_,p2__450066_SHARP_){
return cljs.core.assoc.call(null,p1__450065_SHARP_,p2__450066_SHARP_,node);
});})(nbrs,vec__450120,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__450080,map__450080__$1,f,when,seen))
,preds,nbrs));
});})(vec__450120,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__450080,map__450080__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__450080,map__450080__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.fromArray([start,null], true, false),(function (){var iter__35971__auto__ = ((function (f__$1,nbr_pred,map__450080,map__450080__$1,f,when,seen){
return (function loom$alg_generic$iter__450138(s__450139){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__450080,map__450080__$1,f,when,seen){
return (function (){
var s__450139__$1 = s__450139;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__450139__$1);
if(temp__4657__auto__){
var s__450139__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__450139__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__450139__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__450141 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__450140 = (0);
while(true){
if((i__450140 < size__35970__auto__)){
var s = cljs.core._nth.call(null,c__35969__auto__,i__450140);
cljs.core.chunk_append.call(null,b__450141,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__450171 = (i__450140 + (1));
i__450140 = G__450171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450141),loom$alg_generic$iter__450138.call(null,cljs.core.chunk_rest.call(null,s__450139__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450141),null);
}
} else {
var s = cljs.core.first.call(null,s__450139__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__450138.call(null,cljs.core.rest.call(null,s__450139__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__450080,map__450080__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__450080,map__450080__$1,f,when,seen))
;
return iter__35971__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq450068){
var G__450069 = cljs.core.first.call(null,seq450068);
var seq450068__$1 = cljs.core.next.call(null,seq450068);
var G__450070 = cljs.core.first.call(null,seq450068__$1);
var seq450068__$2 = cljs.core.next.call(null,seq450068__$1);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__450069,G__450070,seq450068__$2);
});
/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__36267__auto__ = [];
var len__36260__auto___450186 = arguments.length;
var i__36261__auto___450187 = (0);
while(true){
if((i__36261__auto___450187 < len__36260__auto___450186)){
args__36267__auto__.push((arguments[i__36261__auto___450187]));

var G__450188 = (i__36261__auto___450187 + (1));
i__36261__auto___450187 = G__450188;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__450181){
var map__450182 = p__450181;
var map__450182__$1 = ((((!((map__450182 == null)))?((((map__450182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__450182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__450182):map__450182);
var seen = cljs.core.get.call(null,map__450182__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__450182,map__450182__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__450182,map__450182__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq450175){
var G__450176 = cljs.core.first.call(null,seq450175);
var seq450175__$1 = cljs.core.next.call(null,seq450175);
var G__450177 = cljs.core.first.call(null,seq450175__$1);
var seq450175__$2 = cljs.core.next.call(null,seq450175__$1);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic(G__450176,G__450177,seq450175__$2);
});
/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__36267__auto__ = [];
var len__36260__auto___450202 = arguments.length;
var i__36261__auto___450203 = (0);
while(true){
if((i__36261__auto___450203 < len__36260__auto___450202)){
args__36267__auto__.push((arguments[i__36261__auto___450203]));

var G__450204 = (i__36261__auto___450203 + (1));
i__36261__auto___450203 = G__450204;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((3) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36268__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__450193){
var map__450194 = p__450193;
var map__450194__$1 = ((((!((map__450194 == null)))?((((map__450194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__450194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__450194):map__450194);
var opts = map__450194__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__4657__auto__ = cljs.core.some.call(null,((function (opts__$1,map__450194,map__450194__$1,opts){
return (function (p__450198){
var vec__450199 = p__450198;
var _ = cljs.core.nth.call(null,vec__450199,(0),null);
var pm = cljs.core.nth.call(null,vec__450199,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__450199,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__450194,map__450194__$1,opts))
,cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__4657__auto__)){
var preds = temp__4657__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq450189){
var G__450190 = cljs.core.first.call(null,seq450189);
var seq450189__$1 = cljs.core.next.call(null,seq450189);
var G__450191 = cljs.core.first.call(null,seq450189__$1);
var seq450189__$2 = cljs.core.next.call(null,seq450189__$1);
var G__450192 = cljs.core.first.call(null,seq450189__$2);
var seq450189__$3 = cljs.core.next.call(null,seq450189__$2);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__450190,G__450191,G__450192,seq450189__$3);
});
/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__450210 = m2;
var G__450211 = m1;
m1 = G__450210;
m2 = G__450211;
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
return (function (p1__450216_SHARP_){
return (cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds1),p1__450216_SHARP_)) + cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds2),p1__450216_SHARP_)));
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
var G__450234 = find_intersects.call(null);
intersects = G__450234;
continue;
}
break;
}
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__35971__auto__ = (function loom$alg_generic$reverse_edges_$_iter__450248(s__450249){
return (new cljs.core.LazySeq(null,(function (){
var s__450249__$1 = s__450249;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__450249__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var node = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__450249__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__450248_$_iter__450250(s__450251){
return (new cljs.core.LazySeq(null,((function (s__450249__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__450251__$1 = s__450251;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__450251__$1);
if(temp__4657__auto____$1){
var s__450251__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__450251__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__450251__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__450253 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__450252 = (0);
while(true){
if((i__450252 < size__35970__auto__)){
var nbr = cljs.core._nth.call(null,c__35969__auto__,i__450252);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
cljs.core.chunk_append.call(null,b__450253,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__450256 = (i__450252 + (1));
i__450252 = G__450256;
continue;
} else {
var G__450257 = (i__450252 + (1));
i__450252 = G__450257;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450253),loom$alg_generic$reverse_edges_$_iter__450248_$_iter__450250.call(null,cljs.core.chunk_rest.call(null,s__450251__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450253),null);
}
} else {
var nbr = cljs.core.first.call(null,s__450251__$2);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__450248_$_iter__450250.call(null,cljs.core.rest.call(null,s__450251__$2)));
} else {
var G__450258 = cljs.core.rest.call(null,s__450251__$2);
s__450251__$1 = G__450258;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__450249__$1,node,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__450249__$1,node,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,successor_fn.call(null,node)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$alg_generic$reverse_edges_$_iter__450248.call(null,cljs.core.rest.call(null,s__450249__$1)));
} else {
var G__450259 = cljs.core.rest.call(null,s__450249__$1);
s__450249__$1 = G__450259;
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
var iter__35971__auto__ = (function loom$alg_generic$conj_paths_$_iter__450302(s__450303){
return (new cljs.core.LazySeq(null,(function (){
var s__450303__$1 = s__450303;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__450303__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__450303__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__450302_$_iter__450304(s__450305){
return (new cljs.core.LazySeq(null,((function (s__450303__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__450305__$1 = s__450305;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__450305__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var from = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__35967__auto__ = ((function (s__450305__$1,s__450303__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__450302_$_iter__450304_$_iter__450306(s__450307){
return (new cljs.core.LazySeq(null,((function (s__450305__$1,s__450303__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__450307__$1 = s__450307;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__450307__$1);
if(temp__4657__auto____$2){
var s__450307__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__450307__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__450307__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__450309 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__450308 = (0);
while(true){
if((i__450308 < size__35970__auto__)){
var to = cljs.core._nth.call(null,c__35969__auto__,i__450308);
cljs.core.chunk_append.call(null,b__450309,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__450343 = (i__450308 + (1));
i__450308 = G__450343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450309),loom$alg_generic$conj_paths_$_iter__450302_$_iter__450304_$_iter__450306.call(null,cljs.core.chunk_rest.call(null,s__450307__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450309),null);
}
} else {
var to = cljs.core.first.call(null,s__450307__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__450302_$_iter__450304_$_iter__450306.call(null,cljs.core.rest.call(null,s__450307__$2)));
}
} else {
return null;
}
break;
}
});})(s__450305__$1,s__450303__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__450305__$1,s__450303__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$alg_generic$conj_paths_$_iter__450302_$_iter__450304.call(null,cljs.core.rest.call(null,s__450305__$1)));
} else {
var G__450349 = cljs.core.rest.call(null,s__450305__$1);
s__450305__$1 = G__450349;
continue;
}
} else {
return null;
}
break;
}
});})(s__450303__$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__450303__$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$alg_generic$conj_paths_$_iter__450302.call(null,cljs.core.rest.call(null,s__450303__$1)));
} else {
var G__450350 = cljs.core.rest.call(null,s__450303__$1);
s__450303__$1 = G__450350;
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
return (function (p1__450351_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__450351_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__450360){
var vec__450361 = p__450360;
var key = cljs.core.nth.call(null,vec__450361,(0),null);
var val = cljs.core.nth.call(null,vec__450361,(1),null);
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
var G__450374 = outgoing__$1;
var G__450375 = incoming;
var G__450376 = q1__$1;
var G__450377 = q2;
outgoing = G__450374;
incoming = G__450375;
q1 = G__450376;
q2 = G__450377;
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
var G__450380 = outgoing;
var G__450381 = incoming__$1;
var G__450382 = q1;
var G__450383 = q2__$1;
outgoing = G__450380;
incoming = G__450381;
q1 = G__450382;
q2 = G__450383;
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
var args450389 = [];
var len__36260__auto___450422 = arguments.length;
var i__36261__auto___450425 = (0);
while(true){
if((i__36261__auto___450425 < len__36260__auto___450422)){
args450389.push((arguments[i__36261__auto___450425]));

var G__450426 = (i__36261__auto___450425 + (1));
i__36261__auto___450425 = G__450426;
continue;
} else {
}
break;
}

var G__450393 = args450389.length;
switch (G__450393) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args450389.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__450407){
var vec__450416 = p__450407;
var state = cljs.core.nth.call(null,vec__450416,(0),null);
var pq = cljs.core.nth.call(null,vec__450416,(1),null);
var temp__4657__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__450417 = temp__4657__auto__;
var dist_su = cljs.core.nth.call(null,vec__450417,(0),null);
var _ = cljs.core.nth.call(null,vec__450417,(1),null);
var u = cljs.core.nth.call(null,vec__450417,(2),null);
var fpq = vec__450417;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__450417,dist_su,_,u,fpq,temp__4657__auto__,vec__450416,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__450417,dist_su,_,u,fpq,temp__4657__auto__,vec__450416,state,pq){
return (function (p__450418,v){
var vec__450419 = p__450418;
var state__$1 = cljs.core.nth.call(null,vec__450419,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__450419,(1),null);
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
});})(vec__450417,dist_su,_,u,fpq,temp__4657__auto__,vec__450416,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__450417,dist_su,_,u,fpq,temp__4657__auto__,vec__450416,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__450441){
var vec__450442 = p__450441;
var n = cljs.core.nth.call(null,vec__450442,(0),null);
var vec__450443 = cljs.core.nth.call(null,vec__450442,(1),null);
var d = cljs.core.nth.call(null,vec__450443,(0),null);
var p = cljs.core.nth.call(null,vec__450443,(1),null);
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
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__450455){
var vec__450456 = p__450455;
var node = cljs.core.nth.call(null,vec__450456,(0),null);
var _ = cljs.core.nth.call(null,vec__450456,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__450457 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__450457,(0),null);
var end_state = cljs.core.nth.call(null,vec__450457,(1),null);
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
var len__36260__auto___450521 = arguments.length;
var i__36261__auto___450522 = (0);
while(true){
if((i__36261__auto___450522 < len__36260__auto___450521)){
args__36267__auto__.push((arguments[i__36261__auto___450522]));

var G__450523 = (i__36261__auto___450522 + (1));
i__36261__auto___450522 = G__450523;
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
var seq__450491_450526 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__450498_450527 = null;
var count__450499_450528 = (0);
var i__450500_450529 = (0);
while(true){
if((i__450500_450529 < count__450499_450528)){
var bitmap_450530__$1 = cljs.core._nth.call(null,chunk__450498_450527,i__450500_450529);
var seq__450501_450531 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_450530__$1));
var chunk__450503_450532 = null;
var count__450504_450533 = (0);
var i__450505_450534 = (0);
while(true){
if((i__450505_450534 < count__450504_450533)){
var vec__450507_450537 = cljs.core._nth.call(null,chunk__450503_450532,i__450505_450534);
var idx_450538 = cljs.core.nth.call(null,vec__450507_450537,(0),null);
var value_450539 = cljs.core.nth.call(null,vec__450507_450537,(1),null);
var masked_value_450540 = (value_450539 | (new_bitmap[idx_450538]));
(new_bitmap[idx_450538] = masked_value_450540);

var G__450541 = seq__450501_450531;
var G__450542 = chunk__450503_450532;
var G__450543 = count__450504_450533;
var G__450544 = (i__450505_450534 + (1));
seq__450501_450531 = G__450541;
chunk__450503_450532 = G__450542;
count__450504_450533 = G__450543;
i__450505_450534 = G__450544;
continue;
} else {
var temp__4657__auto___450547 = cljs.core.seq.call(null,seq__450501_450531);
if(temp__4657__auto___450547){
var seq__450501_450548__$1 = temp__4657__auto___450547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__450501_450548__$1)){
var c__36002__auto___450549 = cljs.core.chunk_first.call(null,seq__450501_450548__$1);
var G__450550 = cljs.core.chunk_rest.call(null,seq__450501_450548__$1);
var G__450551 = c__36002__auto___450549;
var G__450552 = cljs.core.count.call(null,c__36002__auto___450549);
var G__450553 = (0);
seq__450501_450531 = G__450550;
chunk__450503_450532 = G__450551;
count__450504_450533 = G__450552;
i__450505_450534 = G__450553;
continue;
} else {
var vec__450508_450555 = cljs.core.first.call(null,seq__450501_450548__$1);
var idx_450556 = cljs.core.nth.call(null,vec__450508_450555,(0),null);
var value_450557 = cljs.core.nth.call(null,vec__450508_450555,(1),null);
var masked_value_450559 = (value_450557 | (new_bitmap[idx_450556]));
(new_bitmap[idx_450556] = masked_value_450559);

var G__450560 = cljs.core.next.call(null,seq__450501_450548__$1);
var G__450561 = null;
var G__450562 = (0);
var G__450563 = (0);
seq__450501_450531 = G__450560;
chunk__450503_450532 = G__450561;
count__450504_450533 = G__450562;
i__450505_450534 = G__450563;
continue;
}
} else {
}
}
break;
}

var G__450566 = seq__450491_450526;
var G__450567 = chunk__450498_450527;
var G__450568 = count__450499_450528;
var G__450569 = (i__450500_450529 + (1));
seq__450491_450526 = G__450566;
chunk__450498_450527 = G__450567;
count__450499_450528 = G__450568;
i__450500_450529 = G__450569;
continue;
} else {
var temp__4657__auto___450570 = cljs.core.seq.call(null,seq__450491_450526);
if(temp__4657__auto___450570){
var seq__450491_450571__$1 = temp__4657__auto___450570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__450491_450571__$1)){
var c__36002__auto___450573 = cljs.core.chunk_first.call(null,seq__450491_450571__$1);
var G__450574 = cljs.core.chunk_rest.call(null,seq__450491_450571__$1);
var G__450575 = c__36002__auto___450573;
var G__450576 = cljs.core.count.call(null,c__36002__auto___450573);
var G__450577 = (0);
seq__450491_450526 = G__450574;
chunk__450498_450527 = G__450575;
count__450499_450528 = G__450576;
i__450500_450529 = G__450577;
continue;
} else {
var bitmap_450579__$1 = cljs.core.first.call(null,seq__450491_450571__$1);
var seq__450492_450582 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_450579__$1));
var chunk__450494_450583 = null;
var count__450495_450584 = (0);
var i__450496_450585 = (0);
while(true){
if((i__450496_450585 < count__450495_450584)){
var vec__450514_450588 = cljs.core._nth.call(null,chunk__450494_450583,i__450496_450585);
var idx_450589 = cljs.core.nth.call(null,vec__450514_450588,(0),null);
var value_450590 = cljs.core.nth.call(null,vec__450514_450588,(1),null);
var masked_value_450591 = (value_450590 | (new_bitmap[idx_450589]));
(new_bitmap[idx_450589] = masked_value_450591);

var G__450593 = seq__450492_450582;
var G__450594 = chunk__450494_450583;
var G__450595 = count__450495_450584;
var G__450596 = (i__450496_450585 + (1));
seq__450492_450582 = G__450593;
chunk__450494_450583 = G__450594;
count__450495_450584 = G__450595;
i__450496_450585 = G__450596;
continue;
} else {
var temp__4657__auto___450597__$1 = cljs.core.seq.call(null,seq__450492_450582);
if(temp__4657__auto___450597__$1){
var seq__450492_450598__$1 = temp__4657__auto___450597__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__450492_450598__$1)){
var c__36002__auto___450599 = cljs.core.chunk_first.call(null,seq__450492_450598__$1);
var G__450601 = cljs.core.chunk_rest.call(null,seq__450492_450598__$1);
var G__450602 = c__36002__auto___450599;
var G__450603 = cljs.core.count.call(null,c__36002__auto___450599);
var G__450604 = (0);
seq__450492_450582 = G__450601;
chunk__450494_450583 = G__450602;
count__450495_450584 = G__450603;
i__450496_450585 = G__450604;
continue;
} else {
var vec__450515_450605 = cljs.core.first.call(null,seq__450492_450598__$1);
var idx_450606 = cljs.core.nth.call(null,vec__450515_450605,(0),null);
var value_450607 = cljs.core.nth.call(null,vec__450515_450605,(1),null);
var masked_value_450610 = (value_450607 | (new_bitmap[idx_450606]));
(new_bitmap[idx_450606] = masked_value_450610);

var G__450612 = cljs.core.next.call(null,seq__450492_450598__$1);
var G__450613 = null;
var G__450614 = (0);
var G__450615 = (0);
seq__450492_450582 = G__450612;
chunk__450494_450583 = G__450613;
count__450495_450584 = G__450614;
i__450496_450585 = G__450615;
continue;
}
} else {
}
}
break;
}

var G__450617 = cljs.core.next.call(null,seq__450491_450571__$1);
var G__450618 = null;
var G__450619 = (0);
var G__450620 = (0);
seq__450491_450526 = G__450617;
chunk__450498_450527 = G__450618;
count__450499_450528 = G__450619;
i__450500_450529 = G__450620;
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

loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq450486){
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq450486));
});
/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__35971__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__450641(s__450642){
return (new cljs.core.LazySeq(null,(function (){
var s__450642__$1 = s__450642;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__450642__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var chunk = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__450642__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__450641_$_iter__450643(s__450644){
return (new cljs.core.LazySeq(null,((function (s__450642__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__450644__$1 = s__450644;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__450644__$1);
if(temp__4657__auto____$1){
var s__450644__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__450644__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__450644__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__450646 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__450645 = (0);
while(true){
if((i__450645 < size__35970__auto__)){
var offset = cljs.core._nth.call(null,c__35969__auto__,i__450645);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__450646,idx);

var G__450663 = (i__450645 + (1));
i__450645 = G__450663;
continue;
} else {
var G__450666 = (i__450645 + (1));
i__450645 = G__450666;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450646),loom$alg_generic$bm_get_indicies_$_iter__450641_$_iter__450643.call(null,cljs.core.chunk_rest.call(null,s__450644__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450646),null);
}
} else {
var offset = cljs.core.first.call(null,s__450644__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__450641_$_iter__450643.call(null,cljs.core.rest.call(null,s__450644__$2)));
} else {
var G__450667 = cljs.core.rest.call(null,s__450644__$2);
s__450644__$1 = G__450667;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__450642__$1,chunk,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__450642__$1,chunk,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$alg_generic$bm_get_indicies_$_iter__450641.call(null,cljs.core.rest.call(null,s__450642__$1)));
} else {
var G__450668 = cljs.core.rest.call(null,s__450642__$1);
s__450642__$1 = G__450668;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35815__auto__,k450672,else__35816__auto__){
var self__ = this;
var this__35815__auto____$1 = this;
var G__450674 = (((k450672 instanceof cljs.core.Keyword))?k450672.fqn:null);
switch (G__450674) {
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
return cljs.core.get.call(null,self__.__extmap,k450672,else__35816__auto__);

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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__450671){
var self__ = this;
var G__450671__$1 = this;
return (new cljs.core.RecordIter((0),G__450671__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35820__auto__,k__35821__auto__,G__450671){
var self__ = this;
var this__35820__auto____$1 = this;
var pred__450679 = cljs.core.keyword_identical_QMARK_;
var expr__450680 = k__35821__auto__;
if(cljs.core.truth_(pred__450679.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__450680))){
return (new loom.alg_generic.Ancestry(G__450671,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__450679.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__450680))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__450671,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__450679.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__450680))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__450671,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35821__auto__,G__450671),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35825__auto__){
var self__ = this;
var this__35825__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35812__auto__,G__450671){
var self__ = this;
var this__35812__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__450671,self__.__extmap,self__.__hash));
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

loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__450673){
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__450673),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__450673),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__450673),null,cljs.core.dissoc.call(null,G__450673,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)),null));
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
var len__36260__auto___450730 = arguments.length;
var i__36261__auto___450731 = (0);
while(true){
if((i__36261__auto___450731 < len__36260__auto___450730)){
args__36267__auto__.push((arguments[i__36261__auto___450731]));

var G__450732 = (i__36261__auto___450731 + (1));
i__36261__auto___450731 = G__450732;
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
var map__450726 = ancestry;
var map__450726__$1 = ((((!((map__450726 == null)))?((((map__450726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__450726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__450726):map__450726);
var node__GT_idx = cljs.core.get.call(null,map__450726__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__450726__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__450726__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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

loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq450723){
var G__450724 = cljs.core.first.call(null,seq450723);
var seq450723__$1 = cljs.core.next.call(null,seq450723);
var G__450725 = cljs.core.first.call(null,seq450723__$1);
var seq450723__$2 = cljs.core.next.call(null,seq450723__$1);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic(G__450724,G__450725,seq450723__$2);
});
/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__450753 = ancestry;
var map__450753__$1 = ((((!((map__450753 == null)))?((((map__450753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__450753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__450753):map__450753);
var node__GT_idx = cljs.core.get.call(null,map__450753__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__450753__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__450766 = ancestry;
var map__450766__$1 = ((((!((map__450766 == null)))?((((map__450766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__450766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__450766):map__450766);
var node__GT_idx = cljs.core.get.call(null,map__450766__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__450766__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__450766__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});
