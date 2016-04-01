// Compiled by ClojureScript 1.8.40 {}
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
return (function (p1__85788_SHARP_){
return loom$alg_generic$paths.call(null,preds,cljs.core.conj.call(null,path,p1__85788_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__85787_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__85787_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__85789_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__85789_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__85794){
var vec__85795 = p__85794;
var n = cljs.core.nth.call(null,vec__85795,(0),null);
var p = cljs.core.nth.call(null,vec__85795,(1),null);
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
var args__26903__auto__ = [];
var len__26896__auto___85841 = arguments.length;
var i__26897__auto___85842 = (0);
while(true){
if((i__26897__auto___85842 < len__26896__auto___85841)){
args__26903__auto__.push((arguments[i__26897__auto___85842]));

var G__85843 = (i__26897__auto___85842 + (1));
i__26897__auto___85842 = G__85843;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((2) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26904__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__85827){
var map__85829 = p__85827;
var map__85829__$1 = ((((!((map__85829 == null)))?((((map__85829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85829):map__85829);
var seen = cljs.core.get.call(null,map__85829__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__85829,map__85829__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__4657__auto__,map__85829,map__85829__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__4657__auto__,map__85829,map__85829__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__85829,map__85829__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq85812){
var G__85813 = cljs.core.first.call(null,seq85812);
var seq85812__$1 = cljs.core.next.call(null,seq85812);
var G__85814 = cljs.core.first.call(null,seq85812__$1);
var seq85812__$2 = cljs.core.next.call(null,seq85812__$1);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic(G__85813,G__85814,seq85812__$2);
});
/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.pre_edge_traverse = (function loom$alg_generic$pre_edge_traverse(var_args){
var args__26903__auto__ = [];
var len__26896__auto___85877 = arguments.length;
var i__26897__auto___85878 = (0);
while(true){
if((i__26897__auto___85878 < len__26896__auto___85877)){
args__26903__auto__.push((arguments[i__26897__auto___85878]));

var G__85879 = (i__26897__auto___85878 + (1));
i__26897__auto___85878 = G__85879;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((2) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26904__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__85874){
var map__85875 = p__85874;
var map__85875__$1 = ((((!((map__85875 == null)))?((((map__85875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85875):map__85875);
var seen = cljs.core.get.call(null,map__85875__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__85875,map__85875__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__4655__auto__)){
var nbr = temp__4655__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__85875,map__85875__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__85875,map__85875__$1,seen))
,null,null)));
} else {
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__85886 = successors__$1;
var G__85887 = parent;
var G__85888 = cljs.core.peek.call(null,nbrstack);
var G__85889 = cljs.core.pop.call(null,stack);
var G__85890 = cljs.core.pop.call(null,nbrstack);
var G__85891 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__85886;
start__$1 = G__85887;
nbrs = G__85888;
stack = G__85889;
nbrstack = G__85890;
seen__$1 = G__85891;
continue;
} else {
return null;
}
}
break;
}
});})(map__85875,map__85875__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq85871){
var G__85872 = cljs.core.first.call(null,seq85871);
var seq85871__$1 = cljs.core.next.call(null,seq85871);
var G__85873 = cljs.core.first.call(null,seq85871__$1);
var seq85871__$2 = cljs.core.next.call(null,seq85871__$1);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__85872,G__85873,seq85871__$2);
});
/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__26903__auto__ = [];
var len__26896__auto___85899 = arguments.length;
var i__26897__auto___85900 = (0);
while(true){
if((i__26897__auto___85900 < len__26896__auto___85899)){
args__26903__auto__.push((arguments[i__26897__auto___85900]));

var G__85901 = (i__26897__auto___85900 + (1));
i__26897__auto___85900 = G__85901;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((2) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26904__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__85895){
var map__85896 = p__85895;
var map__85896__$1 = ((((!((map__85896 == null)))?((((map__85896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85896):map__85896);
var seen = cljs.core.get.call(null,map__85896__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__85896__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__85902 = seen__$2;
var G__85903 = cljs.core.assoc.call(null,preds,u,v);
var G__85904 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__85902;
preds = G__85903;
stack = G__85904;
continue;
} else {
var G__85905 = seen__$2;
var G__85906 = preds;
var G__85907 = cljs.core.pop.call(null,stack);
seen__$1 = G__85905;
preds = G__85906;
stack = G__85907;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq85892){
var G__85893 = cljs.core.first.call(null,seq85892);
var seq85892__$1 = cljs.core.next.call(null,seq85892);
var G__85894 = cljs.core.first.call(null,seq85892__$1);
var seq85892__$2 = cljs.core.next.call(null,seq85892__$1);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(G__85893,G__85894,seq85892__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__26903__auto__ = [];
var len__26896__auto___85920 = arguments.length;
var i__26897__auto___85921 = (0);
while(true){
if((i__26897__auto___85921 < len__26896__auto___85920)){
args__26903__auto__.push((arguments[i__26897__auto___85921]));

var G__85922 = (i__26897__auto___85921 + (1));
i__26897__auto___85921 = G__85922;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((2) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26904__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__85913){
var map__85914 = p__85913;
var map__85914__$1 = ((((!((map__85914 == null)))?((((map__85914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85914):map__85914);
var seen = cljs.core.get.call(null,map__85914__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__85914__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__85936 = seen__$2;
var G__85937 = cljs.core.conj.call(null,result,v);
var G__85938 = cljs.core.pop.call(null,stack);
seen__$1 = G__85936;
result = G__85937;
stack = G__85938;
continue;
} else {
var G__85940 = seen__$2;
var G__85941 = result;
var G__85942 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__85940;
result = G__85941;
stack = G__85942;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq85910){
var G__85911 = cljs.core.first.call(null,seq85910);
var seq85910__$1 = cljs.core.next.call(null,seq85910);
var G__85912 = cljs.core.first.call(null,seq85910__$1);
var seq85910__$2 = cljs.core.next.call(null,seq85910__$1);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__85911,G__85912,seq85910__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.post_edge_traverse = (function loom$alg_generic$post_edge_traverse(var_args){
var args__26903__auto__ = [];
var len__26896__auto___85958 = arguments.length;
var i__26897__auto___85959 = (0);
while(true){
if((i__26897__auto___85959 < len__26896__auto___85958)){
args__26903__auto__.push((arguments[i__26897__auto___85959]));

var G__85966 = (i__26897__auto___85959 + (1));
i__26897__auto___85959 = G__85966;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((2) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26904__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__85951){
var map__85952 = p__85951;
var map__85952__$1 = ((((!((map__85952 == null)))?((((map__85952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85952):map__85952);
var seen = cljs.core.get.call(null,map__85952__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__85952__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__85970 = start__$1;
var G__85971 = cljs.core.next.call(null,nbrs);
var G__85972 = stack;
var G__85973 = nbrstack;
var G__85974 = seen__$2;
var G__85975 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__85970;
nbrs = G__85971;
stack = G__85972;
nbrstack = G__85973;
seen__$1 = G__85974;
edges = G__85975;
continue;
} else {
var G__85976 = nbr;
var G__85977 = successors.call(null,nbr);
var G__85978 = cljs.core.conj.call(null,stack,start__$1);
var G__85979 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__85980 = seen__$2;
var G__85981 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__85976;
nbrs = G__85977;
stack = G__85978;
nbrstack = G__85979;
seen__$1 = G__85980;
edges = G__85981;
continue;
}
} else {
var temp__4655__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4655__auto____$1)){
var parent = temp__4655__auto____$1;
var G__85982 = parent;
var G__85983 = cljs.core.peek.call(null,nbrstack);
var G__85984 = cljs.core.pop.call(null,stack);
var G__85985 = cljs.core.pop.call(null,nbrstack);
var G__85986 = seen__$2;
var G__85987 = edges;
start__$1 = G__85982;
nbrs = G__85983;
stack = G__85984;
nbrstack = G__85985;
seen__$1 = G__85986;
edges = G__85987;
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

loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq85947){
var G__85948 = cljs.core.first.call(null,seq85947);
var seq85947__$1 = cljs.core.next.call(null,seq85947);
var G__85949 = cljs.core.first.call(null,seq85947__$1);
var seq85947__$2 = cljs.core.next.call(null,seq85947__$1);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__85948,G__85949,seq85947__$2);
});
/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var args85991 = [];
var len__26896__auto___86002 = arguments.length;
var i__26897__auto___86003 = (0);
while(true){
if((i__26897__auto___86003 < len__26896__auto___86002)){
args85991.push((arguments[i__26897__auto___86003]));

var G__86004 = (i__26897__auto___86003 + (1));
i__26897__auto___86003 = G__86004;
continue;
} else {
}
break;
}

var G__86000 = args85991.length;
switch (G__86000) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args85991.length)].join('')));

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
var G__86013 = seen__$2;
var G__86014 = explored__$1;
var G__86015 = result;
var G__86016 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__86013;
explored__$1 = G__86014;
result = G__86015;
stack = G__86016;
continue;
}
} else {
var G__86017 = seen__$2;
var G__86018 = cljs.core.conj.call(null,explored__$1,v);
var G__86019 = cljs.core.conj.call(null,result,v);
var G__86020 = cljs.core.pop.call(null,stack);
seen__$1 = G__86017;
explored__$1 = G__86018;
result = G__86019;
stack = G__86020;
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
var args__26903__auto__ = [];
var len__26896__auto___86095 = arguments.length;
var i__26897__auto___86096 = (0);
while(true){
if((i__26897__auto___86096 < len__26896__auto___86095)){
args__26903__auto__.push((arguments[i__26897__auto___86096]));

var G__86097 = (i__26897__auto___86096 + (1));
i__26897__auto___86096 = G__86097;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((2) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26904__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__86040){
var map__86042 = p__86040;
var map__86042__$1 = ((((!((map__86042 == null)))?((((map__86042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86042):map__86042);
var f = cljs.core.get.call(null,map__86042__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__86042__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__86042__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__25827__auto__ = f;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return ((function (or__25827__auto__,map__86042,map__86042__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__25827__auto__,map__86042,map__86042__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__25827__auto__ = when;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__86042,map__86042__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__4657__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__86072 = temp__4657__auto__;
var node = cljs.core.nth.call(null,vec__86072,(0),null);
var depth = cljs.core.nth.call(null,vec__86072,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__86072,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__86042,map__86042__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__86072,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__86042,map__86042__$1,f,when,seen){
return (function (p1__86034_SHARP_){
return nbr_pred.call(null,p1__86034_SHARP_,node,(depth + (1)));
});})(vec__86072,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__86042,map__86042__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__86072,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__86042,map__86042__$1,f,when,seen){
return (function (p1__86033_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__86033_SHARP_);
});})(vec__86072,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__86042,map__86042__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__26607__auto__ = ((function (nbrs,vec__86072,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__86042,map__86042__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__86074(s__86075){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__86072,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__86042,map__86042__$1,f,when,seen){
return (function (){
var s__86075__$1 = s__86075;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__86075__$1);
if(temp__4657__auto____$1){
var s__86075__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86075__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__86075__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__86077 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__86076 = (0);
while(true){
if((i__86076 < size__26606__auto__)){
var nbr = cljs.core._nth.call(null,c__26605__auto__,i__86076);
cljs.core.chunk_append.call(null,b__86077,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__86109 = (i__86076 + (1));
i__86076 = G__86109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86077),loom$alg_generic$step_$_iter__86074.call(null,cljs.core.chunk_rest.call(null,s__86075__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86077),null);
}
} else {
var nbr = cljs.core.first.call(null,s__86075__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__86074.call(null,cljs.core.rest.call(null,s__86075__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__86072,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__86042,map__86042__$1,f,when,seen))
,null,null));
});})(nbrs,vec__86072,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__86042,map__86042__$1,f,when,seen))
;
return iter__26607__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__86072,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__86042,map__86042__$1,f,when,seen){
return (function (p1__86035_SHARP_,p2__86036_SHARP_){
return cljs.core.assoc.call(null,p1__86035_SHARP_,p2__86036_SHARP_,node);
});})(nbrs,vec__86072,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__86042,map__86042__$1,f,when,seen))
,preds,nbrs));
});})(vec__86072,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__86042,map__86042__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__86042,map__86042__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.fromArray([start,null], true, false),(function (){var iter__26607__auto__ = ((function (f__$1,nbr_pred,map__86042,map__86042__$1,f,when,seen){
return (function loom$alg_generic$iter__86086(s__86087){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__86042,map__86042__$1,f,when,seen){
return (function (){
var s__86087__$1 = s__86087;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__86087__$1);
if(temp__4657__auto__){
var s__86087__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86087__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__86087__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__86089 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__86088 = (0);
while(true){
if((i__86088 < size__26606__auto__)){
var s = cljs.core._nth.call(null,c__26605__auto__,i__86088);
cljs.core.chunk_append.call(null,b__86089,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__86115 = (i__86088 + (1));
i__86088 = G__86115;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86089),loom$alg_generic$iter__86086.call(null,cljs.core.chunk_rest.call(null,s__86087__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86089),null);
}
} else {
var s = cljs.core.first.call(null,s__86087__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__86086.call(null,cljs.core.rest.call(null,s__86087__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__86042,map__86042__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__86042,map__86042__$1,f,when,seen))
;
return iter__26607__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq86037){
var G__86038 = cljs.core.first.call(null,seq86037);
var seq86037__$1 = cljs.core.next.call(null,seq86037);
var G__86039 = cljs.core.first.call(null,seq86037__$1);
var seq86037__$2 = cljs.core.next.call(null,seq86037__$1);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__86038,G__86039,seq86037__$2);
});
/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__26903__auto__ = [];
var len__26896__auto___86135 = arguments.length;
var i__26897__auto___86136 = (0);
while(true){
if((i__26897__auto___86136 < len__26896__auto___86135)){
args__26903__auto__.push((arguments[i__26897__auto___86136]));

var G__86137 = (i__26897__auto___86136 + (1));
i__26897__auto___86136 = G__86137;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((2) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26904__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__86130){
var map__86131 = p__86130;
var map__86131__$1 = ((((!((map__86131 == null)))?((((map__86131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86131):map__86131);
var seen = cljs.core.get.call(null,map__86131__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__86131,map__86131__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__86131,map__86131__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq86122){
var G__86123 = cljs.core.first.call(null,seq86122);
var seq86122__$1 = cljs.core.next.call(null,seq86122);
var G__86124 = cljs.core.first.call(null,seq86122__$1);
var seq86122__$2 = cljs.core.next.call(null,seq86122__$1);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic(G__86123,G__86124,seq86122__$2);
});
/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__26903__auto__ = [];
var len__26896__auto___86152 = arguments.length;
var i__26897__auto___86153 = (0);
while(true){
if((i__26897__auto___86153 < len__26896__auto___86152)){
args__26903__auto__.push((arguments[i__26897__auto___86153]));

var G__86154 = (i__26897__auto___86153 + (1));
i__26897__auto___86153 = G__86154;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((3) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26904__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__86147){
var map__86148 = p__86147;
var map__86148__$1 = ((((!((map__86148 == null)))?((((map__86148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86148):map__86148);
var opts = map__86148__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__4657__auto__ = cljs.core.some.call(null,((function (opts__$1,map__86148,map__86148__$1,opts){
return (function (p__86150){
var vec__86151 = p__86150;
var _ = cljs.core.nth.call(null,vec__86151,(0),null);
var pm = cljs.core.nth.call(null,vec__86151,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__86151,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__86148,map__86148__$1,opts))
,cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__4657__auto__)){
var preds = temp__4657__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq86141){
var G__86142 = cljs.core.first.call(null,seq86141);
var seq86141__$1 = cljs.core.next.call(null,seq86141);
var G__86143 = cljs.core.first.call(null,seq86141__$1);
var seq86141__$2 = cljs.core.next.call(null,seq86141__$1);
var G__86144 = cljs.core.first.call(null,seq86141__$2);
var seq86141__$3 = cljs.core.next.call(null,seq86141__$2);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__86142,G__86143,G__86144,seq86141__$3);
});
/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__86158 = m2;
var G__86159 = m1;
m1 = G__86158;
m2 = G__86159;
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
if(cljs.core.truth_((function (){var or__25827__auto__ = cljs.core.seq.call(null,intersects);
if(or__25827__auto__){
return or__25827__auto__;
} else {
var or__25827__auto____$1 = loom.alg_generic.future_done_QMARK_.call(null,search1);
if(cljs.core.truth_(or__25827__auto____$1)){
return or__25827__auto____$1;
} else {
return loom.alg_generic.future_done_QMARK_.call(null,search2);
}
}
})())){
cljs.core.reset_BANG_.call(null,done_QMARK_,true);

if(cljs.core.seq.call(null,intersects)){
var intersect = cljs.core.apply.call(null,cljs.core.min_key,((function (intersects,done_QMARK_,preds1,preds2,search,search1,search2,find_intersects){
return (function (p1__86161_SHARP_){
return (cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds1),p1__86161_SHARP_)) + cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds2),p1__86161_SHARP_)));
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
var G__86165 = find_intersects.call(null);
intersects = G__86165;
continue;
}
break;
}
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__26607__auto__ = (function loom$alg_generic$reverse_edges_$_iter__86185(s__86186){
return (new cljs.core.LazySeq(null,(function (){
var s__86186__$1 = s__86186;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__86186__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var node = cljs.core.first.call(null,xs__5205__auto__);
var iterys__26603__auto__ = ((function (s__86186__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__86185_$_iter__86187(s__86188){
return (new cljs.core.LazySeq(null,((function (s__86186__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__86188__$1 = s__86188;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__86188__$1);
if(temp__4657__auto____$1){
var s__86188__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86188__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__86188__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__86190 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__86189 = (0);
while(true){
if((i__86189 < size__26606__auto__)){
var nbr = cljs.core._nth.call(null,c__26605__auto__,i__86189);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
cljs.core.chunk_append.call(null,b__86190,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__86217 = (i__86189 + (1));
i__86189 = G__86217;
continue;
} else {
var G__86218 = (i__86189 + (1));
i__86189 = G__86218;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86190),loom$alg_generic$reverse_edges_$_iter__86185_$_iter__86187.call(null,cljs.core.chunk_rest.call(null,s__86188__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86190),null);
}
} else {
var nbr = cljs.core.first.call(null,s__86188__$2);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__86185_$_iter__86187.call(null,cljs.core.rest.call(null,s__86188__$2)));
} else {
var G__86220 = cljs.core.rest.call(null,s__86188__$2);
s__86188__$1 = G__86220;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__86186__$1,node,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__86186__$1,node,xs__5205__auto__,temp__4657__auto__))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,successor_fn.call(null,node)));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,loom$alg_generic$reverse_edges_$_iter__86185.call(null,cljs.core.rest.call(null,s__86186__$1)));
} else {
var G__86223 = cljs.core.rest.call(null,s__86186__$1);
s__86186__$1 = G__86223;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26607__auto__.call(null,nodes);
});
loom.alg_generic.conj_paths = (function loom$alg_generic$conj_paths(from_map,to_map,matches){
var iter__26607__auto__ = (function loom$alg_generic$conj_paths_$_iter__86267(s__86268){
return (new cljs.core.LazySeq(null,(function (){
var s__86268__$1 = s__86268;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__86268__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__26603__auto__ = ((function (s__86268__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__86267_$_iter__86269(s__86270){
return (new cljs.core.LazySeq(null,((function (s__86268__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__86270__$1 = s__86270;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__86270__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var from = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__26603__auto__ = ((function (s__86270__$1,s__86268__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__86267_$_iter__86269_$_iter__86271(s__86272){
return (new cljs.core.LazySeq(null,((function (s__86270__$1,s__86268__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__86272__$1 = s__86272;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__86272__$1);
if(temp__4657__auto____$2){
var s__86272__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86272__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__86272__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__86274 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__86273 = (0);
while(true){
if((i__86273 < size__26606__auto__)){
var to = cljs.core._nth.call(null,c__26605__auto__,i__86273);
cljs.core.chunk_append.call(null,b__86274,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__86287 = (i__86273 + (1));
i__86273 = G__86287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86274),loom$alg_generic$conj_paths_$_iter__86267_$_iter__86269_$_iter__86271.call(null,cljs.core.chunk_rest.call(null,s__86272__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86274),null);
}
} else {
var to = cljs.core.first.call(null,s__86272__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__86267_$_iter__86269_$_iter__86271.call(null,cljs.core.rest.call(null,s__86272__$2)));
}
} else {
return null;
}
break;
}
});})(s__86270__$1,s__86268__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__86270__$1,s__86268__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,loom$alg_generic$conj_paths_$_iter__86267_$_iter__86269.call(null,cljs.core.rest.call(null,s__86270__$1)));
} else {
var G__86292 = cljs.core.rest.call(null,s__86270__$1);
s__86270__$1 = G__86292;
continue;
}
} else {
return null;
}
break;
}
});})(s__86268__$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__86268__$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,loom$alg_generic$conj_paths_$_iter__86267.call(null,cljs.core.rest.call(null,s__86268__$1)));
} else {
var G__86295 = cljs.core.rest.call(null,s__86268__$1);
s__86268__$1 = G__86295;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26607__auto__.call(null,matches);
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
return (function (p1__86296_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__86296_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__86310){
var vec__86311 = p__86310;
var key = cljs.core.nth.call(null,vec__86311,(0),null);
var val = cljs.core.nth.call(null,vec__86311,(1),null);
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
var G__86325 = outgoing__$1;
var G__86326 = incoming;
var G__86327 = q1__$1;
var G__86328 = q2;
outgoing = G__86325;
incoming = G__86326;
q1 = G__86327;
q2 = G__86328;
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
var G__86336 = outgoing;
var G__86337 = incoming__$1;
var G__86338 = q1;
var G__86339 = q2__$1;
outgoing = G__86336;
incoming = G__86337;
q1 = G__86338;
q2 = G__86339;
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
var args86344 = [];
var len__26896__auto___86385 = arguments.length;
var i__26897__auto___86387 = (0);
while(true){
if((i__26897__auto___86387 < len__26896__auto___86385)){
args86344.push((arguments[i__26897__auto___86387]));

var G__86388 = (i__26897__auto___86387 + (1));
i__26897__auto___86387 = G__86388;
continue;
} else {
}
break;
}

var G__86350 = args86344.length;
switch (G__86350) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86344.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__86367){
var vec__86375 = p__86367;
var state = cljs.core.nth.call(null,vec__86375,(0),null);
var pq = cljs.core.nth.call(null,vec__86375,(1),null);
var temp__4657__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__86377 = temp__4657__auto__;
var dist_su = cljs.core.nth.call(null,vec__86377,(0),null);
var _ = cljs.core.nth.call(null,vec__86377,(1),null);
var u = cljs.core.nth.call(null,vec__86377,(2),null);
var fpq = vec__86377;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__86377,dist_su,_,u,fpq,temp__4657__auto__,vec__86375,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__86377,dist_su,_,u,fpq,temp__4657__auto__,vec__86375,state,pq){
return (function (p__86379,v){
var vec__86380 = p__86379;
var state__$1 = cljs.core.nth.call(null,vec__86380,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__86380,(1),null);
var dist_suv = (dist_su + dist.call(null,u,v));
var dist_sv = cljs.core.first.call(null,state__$1.call(null,v));
if(cljs.core.truth_((function (){var and__25815__auto__ = dist_sv;
if(cljs.core.truth_(and__25815__auto__)){
return (dist_suv >= dist_sv);
} else {
return and__25815__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,pq__$1], null);
} else {
var pq__$2 = (cljs.core.truth_(dist_sv)?cljs.core.disj.call(null,pq__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_sv,cljs.core.hash.call(null,v),v], null)):pq__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state__$1,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,u], null)),cljs.core.conj.call(null,pq__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,cljs.core.hash.call(null,v),v], null))], null);
}
});})(vec__86377,dist_su,_,u,fpq,temp__4657__auto__,vec__86375,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__86377,dist_su,_,u,fpq,temp__4657__auto__,vec__86375,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__86408){
var vec__86409 = p__86408;
var n = cljs.core.nth.call(null,vec__86409,(0),null);
var vec__86410 = cljs.core.nth.call(null,vec__86409,(1),null);
var d = cljs.core.nth.call(null,vec__86410,(0),null);
var p = cljs.core.nth.call(null,vec__86410,(1),null);
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
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__86418){
var vec__86419 = p__86418;
var node = cljs.core.nth.call(null,vec__86419,(0),null);
var _ = cljs.core.nth.call(null,vec__86419,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__86422 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__86422,(0),null);
var end_state = cljs.core.nth.call(null,vec__86422,(1),null);
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
var size = (function (){var x__26158__auto__ = cljs.core.count.call(null,bitmap);
var y__26159__auto__ = loom.alg_generic.bm_longs.call(null,(idx + (1)));
return ((x__26158__auto__ > y__26159__auto__) ? x__26158__auto__ : y__26159__auto__);
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
var args__26903__auto__ = [];
var len__26896__auto___86489 = arguments.length;
var i__26897__auto___86490 = (0);
while(true){
if((i__26897__auto___86490 < len__26896__auto___86489)){
args__26903__auto__.push((arguments[i__26897__auto___86490]));

var G__86491 = (i__26897__auto___86490 + (1));
i__26897__auto___86490 = G__86491;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((0) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((0)),(0),null)):null);
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(argseq__26904__auto__);
});

loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic = (function (bitmaps){
if(cljs.core.empty_QMARK_.call(null,bitmaps)){
return loom.alg_generic.bm_new.call(null);
} else {
var size = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,bitmaps));
var bitmap = cljs.core.first.call(null,bitmaps);
var n_zeros = (size - cljs.core.count.call(null,bitmap));
var new_bitmap = bitmap.slice().concat((new Array(n_zeros)).fill((0)));
var seq__86463_86496 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__86470_86497 = null;
var count__86471_86498 = (0);
var i__86472_86499 = (0);
while(true){
if((i__86472_86499 < count__86471_86498)){
var bitmap_86500__$1 = cljs.core._nth.call(null,chunk__86470_86497,i__86472_86499);
var seq__86473_86501 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_86500__$1));
var chunk__86475_86502 = null;
var count__86476_86503 = (0);
var i__86477_86504 = (0);
while(true){
if((i__86477_86504 < count__86476_86503)){
var vec__86481_86505 = cljs.core._nth.call(null,chunk__86475_86502,i__86477_86504);
var idx_86506 = cljs.core.nth.call(null,vec__86481_86505,(0),null);
var value_86507 = cljs.core.nth.call(null,vec__86481_86505,(1),null);
var masked_value_86508 = (value_86507 | (new_bitmap[idx_86506]));
(new_bitmap[idx_86506] = masked_value_86508);

var G__86511 = seq__86473_86501;
var G__86512 = chunk__86475_86502;
var G__86513 = count__86476_86503;
var G__86514 = (i__86477_86504 + (1));
seq__86473_86501 = G__86511;
chunk__86475_86502 = G__86512;
count__86476_86503 = G__86513;
i__86477_86504 = G__86514;
continue;
} else {
var temp__4657__auto___86515 = cljs.core.seq.call(null,seq__86473_86501);
if(temp__4657__auto___86515){
var seq__86473_86516__$1 = temp__4657__auto___86515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86473_86516__$1)){
var c__26638__auto___86517 = cljs.core.chunk_first.call(null,seq__86473_86516__$1);
var G__86518 = cljs.core.chunk_rest.call(null,seq__86473_86516__$1);
var G__86519 = c__26638__auto___86517;
var G__86520 = cljs.core.count.call(null,c__26638__auto___86517);
var G__86521 = (0);
seq__86473_86501 = G__86518;
chunk__86475_86502 = G__86519;
count__86476_86503 = G__86520;
i__86477_86504 = G__86521;
continue;
} else {
var vec__86482_86526 = cljs.core.first.call(null,seq__86473_86516__$1);
var idx_86527 = cljs.core.nth.call(null,vec__86482_86526,(0),null);
var value_86528 = cljs.core.nth.call(null,vec__86482_86526,(1),null);
var masked_value_86535 = (value_86528 | (new_bitmap[idx_86527]));
(new_bitmap[idx_86527] = masked_value_86535);

var G__86537 = cljs.core.next.call(null,seq__86473_86516__$1);
var G__86538 = null;
var G__86539 = (0);
var G__86540 = (0);
seq__86473_86501 = G__86537;
chunk__86475_86502 = G__86538;
count__86476_86503 = G__86539;
i__86477_86504 = G__86540;
continue;
}
} else {
}
}
break;
}

var G__86542 = seq__86463_86496;
var G__86543 = chunk__86470_86497;
var G__86544 = count__86471_86498;
var G__86545 = (i__86472_86499 + (1));
seq__86463_86496 = G__86542;
chunk__86470_86497 = G__86543;
count__86471_86498 = G__86544;
i__86472_86499 = G__86545;
continue;
} else {
var temp__4657__auto___86547 = cljs.core.seq.call(null,seq__86463_86496);
if(temp__4657__auto___86547){
var seq__86463_86548__$1 = temp__4657__auto___86547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86463_86548__$1)){
var c__26638__auto___86552 = cljs.core.chunk_first.call(null,seq__86463_86548__$1);
var G__86553 = cljs.core.chunk_rest.call(null,seq__86463_86548__$1);
var G__86554 = c__26638__auto___86552;
var G__86555 = cljs.core.count.call(null,c__26638__auto___86552);
var G__86556 = (0);
seq__86463_86496 = G__86553;
chunk__86470_86497 = G__86554;
count__86471_86498 = G__86555;
i__86472_86499 = G__86556;
continue;
} else {
var bitmap_86557__$1 = cljs.core.first.call(null,seq__86463_86548__$1);
var seq__86464_86558 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_86557__$1));
var chunk__86466_86559 = null;
var count__86467_86560 = (0);
var i__86468_86561 = (0);
while(true){
if((i__86468_86561 < count__86467_86560)){
var vec__86483_86562 = cljs.core._nth.call(null,chunk__86466_86559,i__86468_86561);
var idx_86563 = cljs.core.nth.call(null,vec__86483_86562,(0),null);
var value_86564 = cljs.core.nth.call(null,vec__86483_86562,(1),null);
var masked_value_86567 = (value_86564 | (new_bitmap[idx_86563]));
(new_bitmap[idx_86563] = masked_value_86567);

var G__86568 = seq__86464_86558;
var G__86569 = chunk__86466_86559;
var G__86570 = count__86467_86560;
var G__86571 = (i__86468_86561 + (1));
seq__86464_86558 = G__86568;
chunk__86466_86559 = G__86569;
count__86467_86560 = G__86570;
i__86468_86561 = G__86571;
continue;
} else {
var temp__4657__auto___86572__$1 = cljs.core.seq.call(null,seq__86464_86558);
if(temp__4657__auto___86572__$1){
var seq__86464_86573__$1 = temp__4657__auto___86572__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86464_86573__$1)){
var c__26638__auto___86574 = cljs.core.chunk_first.call(null,seq__86464_86573__$1);
var G__86577 = cljs.core.chunk_rest.call(null,seq__86464_86573__$1);
var G__86578 = c__26638__auto___86574;
var G__86579 = cljs.core.count.call(null,c__26638__auto___86574);
var G__86580 = (0);
seq__86464_86558 = G__86577;
chunk__86466_86559 = G__86578;
count__86467_86560 = G__86579;
i__86468_86561 = G__86580;
continue;
} else {
var vec__86486_86581 = cljs.core.first.call(null,seq__86464_86573__$1);
var idx_86582 = cljs.core.nth.call(null,vec__86486_86581,(0),null);
var value_86583 = cljs.core.nth.call(null,vec__86486_86581,(1),null);
var masked_value_86586 = (value_86583 | (new_bitmap[idx_86582]));
(new_bitmap[idx_86582] = masked_value_86586);

var G__86587 = cljs.core.next.call(null,seq__86464_86573__$1);
var G__86588 = null;
var G__86589 = (0);
var G__86590 = (0);
seq__86464_86558 = G__86587;
chunk__86466_86559 = G__86588;
count__86467_86560 = G__86589;
i__86468_86561 = G__86590;
continue;
}
} else {
}
}
break;
}

var G__86592 = cljs.core.next.call(null,seq__86463_86548__$1);
var G__86593 = null;
var G__86594 = (0);
var G__86595 = (0);
seq__86463_86496 = G__86592;
chunk__86470_86497 = G__86593;
count__86471_86498 = G__86594;
i__86472_86499 = G__86595;
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

loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq86459){
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86459));
});
/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__26607__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__86625(s__86626){
return (new cljs.core.LazySeq(null,(function (){
var s__86626__$1 = s__86626;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__86626__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var chunk = cljs.core.first.call(null,xs__5205__auto__);
var iterys__26603__auto__ = ((function (s__86626__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__86625_$_iter__86627(s__86628){
return (new cljs.core.LazySeq(null,((function (s__86626__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__86628__$1 = s__86628;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__86628__$1);
if(temp__4657__auto____$1){
var s__86628__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86628__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__86628__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__86630 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__86629 = (0);
while(true){
if((i__86629 < size__26606__auto__)){
var offset = cljs.core._nth.call(null,c__26605__auto__,i__86629);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__86630,idx);

var G__86648 = (i__86629 + (1));
i__86629 = G__86648;
continue;
} else {
var G__86649 = (i__86629 + (1));
i__86629 = G__86649;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86630),loom$alg_generic$bm_get_indicies_$_iter__86625_$_iter__86627.call(null,cljs.core.chunk_rest.call(null,s__86628__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86630),null);
}
} else {
var offset = cljs.core.first.call(null,s__86628__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__86625_$_iter__86627.call(null,cljs.core.rest.call(null,s__86628__$2)));
} else {
var G__86652 = cljs.core.rest.call(null,s__86628__$2);
s__86628__$1 = G__86652;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__86626__$1,chunk,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__86626__$1,chunk,xs__5205__auto__,temp__4657__auto__))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,loom$alg_generic$bm_get_indicies_$_iter__86625.call(null,cljs.core.rest.call(null,s__86626__$1)));
} else {
var G__86656 = cljs.core.rest.call(null,s__86626__$1);
s__86626__$1 = G__86656;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26607__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,bitmap)));
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
loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26449__auto__,k__26450__auto__){
var self__ = this;
var this__26449__auto____$1 = this;
return cljs.core._lookup.call(null,this__26449__auto____$1,k__26450__auto__,null);
});

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26451__auto__,k86659,else__26452__auto__){
var self__ = this;
var this__26451__auto____$1 = this;
var G__86669 = (((k86659 instanceof cljs.core.Keyword))?k86659.fqn:null);
switch (G__86669) {
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
return cljs.core.get.call(null,self__.__extmap,k86659,else__26452__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26463__auto__,writer__26464__auto__,opts__26465__auto__){
var self__ = this;
var this__26463__auto____$1 = this;
var pr_pair__26466__auto__ = ((function (this__26463__auto____$1){
return (function (keyval__26467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26464__auto__,cljs.core.pr_writer,""," ","",opts__26465__auto__,keyval__26467__auto__);
});})(this__26463__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26464__auto__,pr_pair__26466__auto__,"#loom.alg-generic.Ancestry{",", ","}",opts__26465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$ = true;

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__86658){
var self__ = this;
var G__86658__$1 = this;
return (new cljs.core.RecordIter((0),G__86658__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26447__auto__){
var self__ = this;
var this__26447__auto____$1 = this;
return self__.__meta;
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26443__auto__){
var self__ = this;
var this__26443__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26453__auto__){
var self__ = this;
var this__26453__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26444__auto__){
var self__ = this;
var this__26444__auto____$1 = this;
var h__26262__auto__ = self__.__hash;
if(!((h__26262__auto__ == null))){
return h__26262__auto__;
} else {
var h__26262__auto____$1 = cljs.core.hash_imap.call(null,this__26444__auto____$1);
self__.__hash = h__26262__auto____$1;

return h__26262__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26445__auto__,other__26446__auto__){
var self__ = this;
var this__26445__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25815__auto__ = other__26446__auto__;
if(cljs.core.truth_(and__25815__auto__)){
var and__25815__auto____$1 = (this__26445__auto____$1.constructor === other__26446__auto__.constructor);
if(and__25815__auto____$1){
return cljs.core.equiv_map.call(null,this__26445__auto____$1,other__26446__auto__);
} else {
return and__25815__auto____$1;
}
} else {
return and__25815__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26458__auto__,k__26459__auto__){
var self__ = this;
var this__26458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),null], null), null),k__26459__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26458__auto____$1),self__.__meta),k__26459__auto__);
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26459__auto__)),null));
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26456__auto__,k__26457__auto__,G__86658){
var self__ = this;
var this__26456__auto____$1 = this;
var pred__86684 = cljs.core.keyword_identical_QMARK_;
var expr__86685 = k__26457__auto__;
if(cljs.core.truth_(pred__86684.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__86685))){
return (new loom.alg_generic.Ancestry(G__86658,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__86684.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__86685))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__86658,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__86684.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__86685))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__86658,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26457__auto__,G__86658),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26461__auto__){
var self__ = this;
var this__26461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26448__auto__,G__86658){
var self__ = this;
var this__26448__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__86658,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26454__auto__,entry__26455__auto__){
var self__ = this;
var this__26454__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26455__auto__)){
return cljs.core._assoc.call(null,this__26454__auto____$1,cljs.core._nth.call(null,entry__26455__auto__,(0)),cljs.core._nth.call(null,entry__26455__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26454__auto____$1,entry__26455__auto__);
}
});

loom.alg_generic.Ancestry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node->idx","node->idx",1793236754,null),new cljs.core.Symbol(null,"idx->node","idx->node",-842528594,null),new cljs.core.Symbol(null,"bitmaps","bitmaps",-1506736927,null)], null);
});

loom.alg_generic.Ancestry.cljs$lang$type = true;

loom.alg_generic.Ancestry.cljs$lang$ctorPrSeq = (function (this__26483__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.alg-generic/Ancestry");
});

loom.alg_generic.Ancestry.cljs$lang$ctorPrWriter = (function (this__26483__auto__,writer__26484__auto__){
return cljs.core._write.call(null,writer__26484__auto__,"loom.alg-generic/Ancestry");
});

loom.alg_generic.__GT_Ancestry = (function loom$alg_generic$__GT_Ancestry(node__GT_idx,idx__GT_node,bitmaps){
return (new loom.alg_generic.Ancestry(node__GT_idx,idx__GT_node,bitmaps,null,null,null));
});

loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__86662){
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__86662),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__86662),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__86662),null,cljs.core.dissoc.call(null,G__86662,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)),null));
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
var args__26903__auto__ = [];
var len__26896__auto___86729 = arguments.length;
var i__26897__auto___86730 = (0);
while(true){
if((i__26897__auto___86730 < len__26896__auto___86729)){
args__26903__auto__.push((arguments[i__26897__auto___86730]));

var G__86731 = (i__26897__auto___86730 + (1));
i__26897__auto___86730 = G__86731;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((2) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26904__auto__);
});

loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic = (function (ancestry,node,parents){
if(cljs.core.truth_(loom.alg_generic.ancestry_contains_QMARK_.call(null,ancestry,node))){
return ancestry;
} else {
var map__86725 = ancestry;
var map__86725__$1 = ((((!((map__86725 == null)))?((((map__86725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86725):map__86725);
var node__GT_idx = cljs.core.get.call(null,map__86725__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__86725__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__86725__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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

loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq86720){
var G__86721 = cljs.core.first.call(null,seq86720);
var seq86720__$1 = cljs.core.next.call(null,seq86720);
var G__86722 = cljs.core.first.call(null,seq86720__$1);
var seq86720__$2 = cljs.core.next.call(null,seq86720__$1);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic(G__86721,G__86722,seq86720__$2);
});
/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__86748 = ancestry;
var map__86748__$1 = ((((!((map__86748 == null)))?((((map__86748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86748):map__86748);
var node__GT_idx = cljs.core.get.call(null,map__86748__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__86748__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,childer);
var pidx = node__GT_idx.call(null,parenter);
return cljs.core.boolean$.call(null,(cljs.core.truth_((function (){var and__25815__auto__ = cidx;
if(cljs.core.truth_(and__25815__auto__)){
return pidx;
} else {
return and__25815__auto__;
}
})())?loom.alg_generic.bm_get.call(null,cljs.core.get.call(null,bitmaps,cidx),pidx):null));
});
/**
 * Returns all of the ancestors of 'child node.
 */
loom.alg_generic.ancestors = (function loom$alg_generic$ancestors(ancestry,child){
var map__86760 = ancestry;
var map__86760__$1 = ((((!((map__86760 == null)))?((((map__86760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86760):map__86760);
var node__GT_idx = cljs.core.get.call(null,map__86760__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__86760__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__86760__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});
