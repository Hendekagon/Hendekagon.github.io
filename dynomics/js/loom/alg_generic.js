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
return (function (p1__284821_SHARP_){
return loom$alg_generic$paths.call(null,preds,cljs.core.conj.call(null,path,p1__284821_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__284820_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__284820_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__284826_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__284826_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__284836){
var vec__284837 = p__284836;
var n = cljs.core.nth.call(null,vec__284837,(0),null);
var p = cljs.core.nth.call(null,vec__284837,(1),null);
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
var args__36468__auto__ = [];
var len__36461__auto___284855 = arguments.length;
var i__36462__auto___284856 = (0);
while(true){
if((i__36462__auto___284856 < len__36461__auto___284855)){
args__36468__auto__.push((arguments[i__36462__auto___284856]));

var G__284857 = (i__36462__auto___284856 + (1));
i__36462__auto___284856 = G__284857;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((2) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36469__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__284848){
var map__284849 = p__284848;
var map__284849__$1 = ((((!((map__284849 == null)))?((((map__284849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284849):map__284849);
var seen = cljs.core.get.call(null,map__284849__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__284849,map__284849__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__4657__auto__,map__284849,map__284849__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__4657__auto__,map__284849,map__284849__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__284849,map__284849__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq284842){
var G__284843 = cljs.core.first.call(null,seq284842);
var seq284842__$1 = cljs.core.next.call(null,seq284842);
var G__284844 = cljs.core.first.call(null,seq284842__$1);
var seq284842__$2 = cljs.core.next.call(null,seq284842__$1);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic(G__284843,G__284844,seq284842__$2);
});
/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.pre_edge_traverse = (function loom$alg_generic$pre_edge_traverse(var_args){
var args__36468__auto__ = [];
var len__36461__auto___284898 = arguments.length;
var i__36462__auto___284899 = (0);
while(true){
if((i__36462__auto___284899 < len__36461__auto___284898)){
args__36468__auto__.push((arguments[i__36462__auto___284899]));

var G__284900 = (i__36462__auto___284899 + (1));
i__36462__auto___284899 = G__284900;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((2) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36469__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__284879){
var map__284880 = p__284879;
var map__284880__$1 = ((((!((map__284880 == null)))?((((map__284880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284880):map__284880);
var seen = cljs.core.get.call(null,map__284880__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__284880,map__284880__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__4655__auto__)){
var nbr = temp__4655__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__284880,map__284880__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__284880,map__284880__$1,seen))
,null,null)));
} else {
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__284916 = successors__$1;
var G__284917 = parent;
var G__284918 = cljs.core.peek.call(null,nbrstack);
var G__284919 = cljs.core.pop.call(null,stack);
var G__284920 = cljs.core.pop.call(null,nbrstack);
var G__284921 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__284916;
start__$1 = G__284917;
nbrs = G__284918;
stack = G__284919;
nbrstack = G__284920;
seen__$1 = G__284921;
continue;
} else {
return null;
}
}
break;
}
});})(map__284880,map__284880__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq284871){
var G__284872 = cljs.core.first.call(null,seq284871);
var seq284871__$1 = cljs.core.next.call(null,seq284871);
var G__284873 = cljs.core.first.call(null,seq284871__$1);
var seq284871__$2 = cljs.core.next.call(null,seq284871__$1);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__284872,G__284873,seq284871__$2);
});
/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__36468__auto__ = [];
var len__36461__auto___284932 = arguments.length;
var i__36462__auto___284933 = (0);
while(true){
if((i__36462__auto___284933 < len__36461__auto___284932)){
args__36468__auto__.push((arguments[i__36462__auto___284933]));

var G__284934 = (i__36462__auto___284933 + (1));
i__36462__auto___284933 = G__284934;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((2) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36469__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__284929){
var map__284930 = p__284929;
var map__284930__$1 = ((((!((map__284930 == null)))?((((map__284930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284930):map__284930);
var seen = cljs.core.get.call(null,map__284930__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__284930__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__284937 = seen__$2;
var G__284938 = cljs.core.assoc.call(null,preds,u,v);
var G__284939 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__284937;
preds = G__284938;
stack = G__284939;
continue;
} else {
var G__284941 = seen__$2;
var G__284942 = preds;
var G__284943 = cljs.core.pop.call(null,stack);
seen__$1 = G__284941;
preds = G__284942;
stack = G__284943;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq284926){
var G__284927 = cljs.core.first.call(null,seq284926);
var seq284926__$1 = cljs.core.next.call(null,seq284926);
var G__284928 = cljs.core.first.call(null,seq284926__$1);
var seq284926__$2 = cljs.core.next.call(null,seq284926__$1);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(G__284927,G__284928,seq284926__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__36468__auto__ = [];
var len__36461__auto___284959 = arguments.length;
var i__36462__auto___284960 = (0);
while(true){
if((i__36462__auto___284960 < len__36461__auto___284959)){
args__36468__auto__.push((arguments[i__36462__auto___284960]));

var G__284961 = (i__36462__auto___284960 + (1));
i__36462__auto___284960 = G__284961;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((2) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36469__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__284953){
var map__284954 = p__284953;
var map__284954__$1 = ((((!((map__284954 == null)))?((((map__284954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284954):map__284954);
var seen = cljs.core.get.call(null,map__284954__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__284954__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__284967 = seen__$2;
var G__284968 = cljs.core.conj.call(null,result,v);
var G__284969 = cljs.core.pop.call(null,stack);
seen__$1 = G__284967;
result = G__284968;
stack = G__284969;
continue;
} else {
var G__284970 = seen__$2;
var G__284971 = result;
var G__284972 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__284970;
result = G__284971;
stack = G__284972;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq284947){
var G__284948 = cljs.core.first.call(null,seq284947);
var seq284947__$1 = cljs.core.next.call(null,seq284947);
var G__284949 = cljs.core.first.call(null,seq284947__$1);
var seq284947__$2 = cljs.core.next.call(null,seq284947__$1);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__284948,G__284949,seq284947__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.post_edge_traverse = (function loom$alg_generic$post_edge_traverse(var_args){
var args__36468__auto__ = [];
var len__36461__auto___284987 = arguments.length;
var i__36462__auto___284988 = (0);
while(true){
if((i__36462__auto___284988 < len__36461__auto___284987)){
args__36468__auto__.push((arguments[i__36462__auto___284988]));

var G__284989 = (i__36462__auto___284988 + (1));
i__36462__auto___284988 = G__284989;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((2) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36469__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__284983){
var map__284984 = p__284983;
var map__284984__$1 = ((((!((map__284984 == null)))?((((map__284984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284984):map__284984);
var seen = cljs.core.get.call(null,map__284984__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__284984__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__284993 = start__$1;
var G__284994 = cljs.core.next.call(null,nbrs);
var G__284995 = stack;
var G__284996 = nbrstack;
var G__284997 = seen__$2;
var G__284998 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__284993;
nbrs = G__284994;
stack = G__284995;
nbrstack = G__284996;
seen__$1 = G__284997;
edges = G__284998;
continue;
} else {
var G__284999 = nbr;
var G__285000 = successors.call(null,nbr);
var G__285001 = cljs.core.conj.call(null,stack,start__$1);
var G__285002 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__285003 = seen__$2;
var G__285004 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__284999;
nbrs = G__285000;
stack = G__285001;
nbrstack = G__285002;
seen__$1 = G__285003;
edges = G__285004;
continue;
}
} else {
var temp__4655__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4655__auto____$1)){
var parent = temp__4655__auto____$1;
var G__285011 = parent;
var G__285012 = cljs.core.peek.call(null,nbrstack);
var G__285013 = cljs.core.pop.call(null,stack);
var G__285014 = cljs.core.pop.call(null,nbrstack);
var G__285015 = seen__$2;
var G__285016 = edges;
start__$1 = G__285011;
nbrs = G__285012;
stack = G__285013;
nbrstack = G__285014;
seen__$1 = G__285015;
edges = G__285016;
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

loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq284974){
var G__284975 = cljs.core.first.call(null,seq284974);
var seq284974__$1 = cljs.core.next.call(null,seq284974);
var G__284976 = cljs.core.first.call(null,seq284974__$1);
var seq284974__$2 = cljs.core.next.call(null,seq284974__$1);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__284975,G__284976,seq284974__$2);
});
/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var args285018 = [];
var len__36461__auto___285028 = arguments.length;
var i__36462__auto___285029 = (0);
while(true){
if((i__36462__auto___285029 < len__36461__auto___285028)){
args285018.push((arguments[i__36462__auto___285029]));

var G__285031 = (i__36462__auto___285029 + (1));
i__36462__auto___285029 = G__285031;
continue;
} else {
}
break;
}

var G__285021 = args285018.length;
switch (G__285021) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args285018.length)].join('')));

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
var G__285033 = seen__$2;
var G__285034 = explored__$1;
var G__285035 = result;
var G__285036 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__285033;
explored__$1 = G__285034;
result = G__285035;
stack = G__285036;
continue;
}
} else {
var G__285038 = seen__$2;
var G__285039 = cljs.core.conj.call(null,explored__$1,v);
var G__285040 = cljs.core.conj.call(null,result,v);
var G__285041 = cljs.core.pop.call(null,stack);
seen__$1 = G__285038;
explored__$1 = G__285039;
result = G__285040;
stack = G__285041;
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
var args__36468__auto__ = [];
var len__36461__auto___285118 = arguments.length;
var i__36462__auto___285119 = (0);
while(true){
if((i__36462__auto___285119 < len__36461__auto___285118)){
args__36468__auto__.push((arguments[i__36462__auto___285119]));

var G__285120 = (i__36462__auto___285119 + (1));
i__36462__auto___285119 = G__285120;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((2) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36469__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__285049){
var map__285050 = p__285049;
var map__285050__$1 = ((((!((map__285050 == null)))?((((map__285050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285050):map__285050);
var f = cljs.core.get.call(null,map__285050__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__285050__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__285050__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__35392__auto__ = f;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return ((function (or__35392__auto__,map__285050,map__285050__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__35392__auto__,map__285050,map__285050__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__35392__auto__ = when;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__285050,map__285050__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__4657__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__285097 = temp__4657__auto__;
var node = cljs.core.nth.call(null,vec__285097,(0),null);
var depth = cljs.core.nth.call(null,vec__285097,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__285097,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__285050,map__285050__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__285097,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__285050,map__285050__$1,f,when,seen){
return (function (p1__285043_SHARP_){
return nbr_pred.call(null,p1__285043_SHARP_,node,(depth + (1)));
});})(vec__285097,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__285050,map__285050__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__285097,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__285050,map__285050__$1,f,when,seen){
return (function (p1__285042_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__285042_SHARP_);
});})(vec__285097,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__285050,map__285050__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__36172__auto__ = ((function (nbrs,vec__285097,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__285050,map__285050__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__285098(s__285099){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__285097,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__285050,map__285050__$1,f,when,seen){
return (function (){
var s__285099__$1 = s__285099;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__285099__$1);
if(temp__4657__auto____$1){
var s__285099__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__285099__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__285099__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__285101 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__285100 = (0);
while(true){
if((i__285100 < size__36171__auto__)){
var nbr = cljs.core._nth.call(null,c__36170__auto__,i__285100);
cljs.core.chunk_append.call(null,b__285101,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__285140 = (i__285100 + (1));
i__285100 = G__285140;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285101),loom$alg_generic$step_$_iter__285098.call(null,cljs.core.chunk_rest.call(null,s__285099__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285101),null);
}
} else {
var nbr = cljs.core.first.call(null,s__285099__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__285098.call(null,cljs.core.rest.call(null,s__285099__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__285097,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__285050,map__285050__$1,f,when,seen))
,null,null));
});})(nbrs,vec__285097,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__285050,map__285050__$1,f,when,seen))
;
return iter__36172__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__285097,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__285050,map__285050__$1,f,when,seen){
return (function (p1__285044_SHARP_,p2__285045_SHARP_){
return cljs.core.assoc.call(null,p1__285044_SHARP_,p2__285045_SHARP_,node);
});})(nbrs,vec__285097,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__285050,map__285050__$1,f,when,seen))
,preds,nbrs));
});})(vec__285097,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__285050,map__285050__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__285050,map__285050__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.fromArray([start,null], true, false),(function (){var iter__36172__auto__ = ((function (f__$1,nbr_pred,map__285050,map__285050__$1,f,when,seen){
return (function loom$alg_generic$iter__285106(s__285107){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__285050,map__285050__$1,f,when,seen){
return (function (){
var s__285107__$1 = s__285107;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__285107__$1);
if(temp__4657__auto__){
var s__285107__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__285107__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__285107__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__285109 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__285108 = (0);
while(true){
if((i__285108 < size__36171__auto__)){
var s = cljs.core._nth.call(null,c__36170__auto__,i__285108);
cljs.core.chunk_append.call(null,b__285109,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__285146 = (i__285108 + (1));
i__285108 = G__285146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285109),loom$alg_generic$iter__285106.call(null,cljs.core.chunk_rest.call(null,s__285107__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285109),null);
}
} else {
var s = cljs.core.first.call(null,s__285107__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__285106.call(null,cljs.core.rest.call(null,s__285107__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__285050,map__285050__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__285050,map__285050__$1,f,when,seen))
;
return iter__36172__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq285046){
var G__285047 = cljs.core.first.call(null,seq285046);
var seq285046__$1 = cljs.core.next.call(null,seq285046);
var G__285048 = cljs.core.first.call(null,seq285046__$1);
var seq285046__$2 = cljs.core.next.call(null,seq285046__$1);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__285047,G__285048,seq285046__$2);
});
/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__36468__auto__ = [];
var len__36461__auto___285158 = arguments.length;
var i__36462__auto___285159 = (0);
while(true){
if((i__36462__auto___285159 < len__36461__auto___285158)){
args__36468__auto__.push((arguments[i__36462__auto___285159]));

var G__285160 = (i__36462__auto___285159 + (1));
i__36462__auto___285159 = G__285160;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((2) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36469__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__285155){
var map__285156 = p__285155;
var map__285156__$1 = ((((!((map__285156 == null)))?((((map__285156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285156):map__285156);
var seen = cljs.core.get.call(null,map__285156__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__285156,map__285156__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__285156,map__285156__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq285149){
var G__285150 = cljs.core.first.call(null,seq285149);
var seq285149__$1 = cljs.core.next.call(null,seq285149);
var G__285151 = cljs.core.first.call(null,seq285149__$1);
var seq285149__$2 = cljs.core.next.call(null,seq285149__$1);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic(G__285150,G__285151,seq285149__$2);
});
/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__36468__auto__ = [];
var len__36461__auto___285175 = arguments.length;
var i__36462__auto___285176 = (0);
while(true){
if((i__36462__auto___285176 < len__36461__auto___285175)){
args__36468__auto__.push((arguments[i__36462__auto___285176]));

var G__285179 = (i__36462__auto___285176 + (1));
i__36462__auto___285176 = G__285179;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((3) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36469__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__285170){
var map__285171 = p__285170;
var map__285171__$1 = ((((!((map__285171 == null)))?((((map__285171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285171):map__285171);
var opts = map__285171__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__4657__auto__ = cljs.core.some.call(null,((function (opts__$1,map__285171,map__285171__$1,opts){
return (function (p__285173){
var vec__285174 = p__285173;
var _ = cljs.core.nth.call(null,vec__285174,(0),null);
var pm = cljs.core.nth.call(null,vec__285174,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__285174,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__285171,map__285171__$1,opts))
,cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__4657__auto__)){
var preds = temp__4657__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq285162){
var G__285163 = cljs.core.first.call(null,seq285162);
var seq285162__$1 = cljs.core.next.call(null,seq285162);
var G__285164 = cljs.core.first.call(null,seq285162__$1);
var seq285162__$2 = cljs.core.next.call(null,seq285162__$1);
var G__285165 = cljs.core.first.call(null,seq285162__$2);
var seq285162__$3 = cljs.core.next.call(null,seq285162__$2);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__285163,G__285164,G__285165,seq285162__$3);
});
/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__285183 = m2;
var G__285184 = m1;
m1 = G__285183;
m2 = G__285184;
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
if(cljs.core.truth_((function (){var or__35392__auto__ = cljs.core.seq.call(null,intersects);
if(or__35392__auto__){
return or__35392__auto__;
} else {
var or__35392__auto____$1 = loom.alg_generic.future_done_QMARK_.call(null,search1);
if(cljs.core.truth_(or__35392__auto____$1)){
return or__35392__auto____$1;
} else {
return loom.alg_generic.future_done_QMARK_.call(null,search2);
}
}
})())){
cljs.core.reset_BANG_.call(null,done_QMARK_,true);

if(cljs.core.seq.call(null,intersects)){
var intersect = cljs.core.apply.call(null,cljs.core.min_key,((function (intersects,done_QMARK_,preds1,preds2,search,search1,search2,find_intersects){
return (function (p1__285187_SHARP_){
return (cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds1),p1__285187_SHARP_)) + cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds2),p1__285187_SHARP_)));
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
var G__285207 = find_intersects.call(null);
intersects = G__285207;
continue;
}
break;
}
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__36172__auto__ = (function loom$alg_generic$reverse_edges_$_iter__285223(s__285224){
return (new cljs.core.LazySeq(null,(function (){
var s__285224__$1 = s__285224;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__285224__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var node = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36168__auto__ = ((function (s__285224__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__285223_$_iter__285225(s__285226){
return (new cljs.core.LazySeq(null,((function (s__285224__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__285226__$1 = s__285226;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__285226__$1);
if(temp__4657__auto____$1){
var s__285226__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__285226__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__285226__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__285228 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__285227 = (0);
while(true){
if((i__285227 < size__36171__auto__)){
var nbr = cljs.core._nth.call(null,c__36170__auto__,i__285227);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
cljs.core.chunk_append.call(null,b__285228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__285236 = (i__285227 + (1));
i__285227 = G__285236;
continue;
} else {
var G__285237 = (i__285227 + (1));
i__285227 = G__285237;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285228),loom$alg_generic$reverse_edges_$_iter__285223_$_iter__285225.call(null,cljs.core.chunk_rest.call(null,s__285226__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285228),null);
}
} else {
var nbr = cljs.core.first.call(null,s__285226__$2);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__285223_$_iter__285225.call(null,cljs.core.rest.call(null,s__285226__$2)));
} else {
var G__285239 = cljs.core.rest.call(null,s__285226__$2);
s__285226__$1 = G__285239;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__285224__$1,node,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__285224__$1,node,xs__5205__auto__,temp__4657__auto__))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,successor_fn.call(null,node)));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,loom$alg_generic$reverse_edges_$_iter__285223.call(null,cljs.core.rest.call(null,s__285224__$1)));
} else {
var G__285240 = cljs.core.rest.call(null,s__285224__$1);
s__285224__$1 = G__285240;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36172__auto__.call(null,nodes);
});
loom.alg_generic.conj_paths = (function loom$alg_generic$conj_paths(from_map,to_map,matches){
var iter__36172__auto__ = (function loom$alg_generic$conj_paths_$_iter__285258(s__285259){
return (new cljs.core.LazySeq(null,(function (){
var s__285259__$1 = s__285259;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__285259__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36168__auto__ = ((function (s__285259__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__285258_$_iter__285260(s__285261){
return (new cljs.core.LazySeq(null,((function (s__285259__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__285261__$1 = s__285261;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__285261__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var from = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__36168__auto__ = ((function (s__285261__$1,s__285259__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__285258_$_iter__285260_$_iter__285262(s__285263){
return (new cljs.core.LazySeq(null,((function (s__285261__$1,s__285259__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__285263__$1 = s__285263;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__285263__$1);
if(temp__4657__auto____$2){
var s__285263__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__285263__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__285263__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__285265 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__285264 = (0);
while(true){
if((i__285264 < size__36171__auto__)){
var to = cljs.core._nth.call(null,c__36170__auto__,i__285264);
cljs.core.chunk_append.call(null,b__285265,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__285311 = (i__285264 + (1));
i__285264 = G__285311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285265),loom$alg_generic$conj_paths_$_iter__285258_$_iter__285260_$_iter__285262.call(null,cljs.core.chunk_rest.call(null,s__285263__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285265),null);
}
} else {
var to = cljs.core.first.call(null,s__285263__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__285258_$_iter__285260_$_iter__285262.call(null,cljs.core.rest.call(null,s__285263__$2)));
}
} else {
return null;
}
break;
}
});})(s__285261__$1,s__285259__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__285261__$1,s__285259__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,loom$alg_generic$conj_paths_$_iter__285258_$_iter__285260.call(null,cljs.core.rest.call(null,s__285261__$1)));
} else {
var G__285318 = cljs.core.rest.call(null,s__285261__$1);
s__285261__$1 = G__285318;
continue;
}
} else {
return null;
}
break;
}
});})(s__285259__$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__285259__$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,loom$alg_generic$conj_paths_$_iter__285258.call(null,cljs.core.rest.call(null,s__285259__$1)));
} else {
var G__285321 = cljs.core.rest.call(null,s__285259__$1);
s__285259__$1 = G__285321;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36172__auto__.call(null,matches);
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
return (function (p1__285324_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__285324_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__285329){
var vec__285330 = p__285329;
var key = cljs.core.nth.call(null,vec__285330,(0),null);
var val = cljs.core.nth.call(null,vec__285330,(1),null);
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
var G__285338 = outgoing__$1;
var G__285339 = incoming;
var G__285340 = q1__$1;
var G__285341 = q2;
outgoing = G__285338;
incoming = G__285339;
q1 = G__285340;
q2 = G__285341;
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
var G__285345 = outgoing;
var G__285346 = incoming__$1;
var G__285347 = q1;
var G__285348 = q2__$1;
outgoing = G__285345;
incoming = G__285346;
q1 = G__285347;
q2 = G__285348;
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
var args285354 = [];
var len__36461__auto___285389 = arguments.length;
var i__36462__auto___285390 = (0);
while(true){
if((i__36462__auto___285390 < len__36461__auto___285389)){
args285354.push((arguments[i__36462__auto___285390]));

var G__285393 = (i__36462__auto___285390 + (1));
i__36462__auto___285390 = G__285393;
continue;
} else {
}
break;
}

var G__285358 = args285354.length;
switch (G__285358) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args285354.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__285374){
var vec__285379 = p__285374;
var state = cljs.core.nth.call(null,vec__285379,(0),null);
var pq = cljs.core.nth.call(null,vec__285379,(1),null);
var temp__4657__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__285382 = temp__4657__auto__;
var dist_su = cljs.core.nth.call(null,vec__285382,(0),null);
var _ = cljs.core.nth.call(null,vec__285382,(1),null);
var u = cljs.core.nth.call(null,vec__285382,(2),null);
var fpq = vec__285382;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__285382,dist_su,_,u,fpq,temp__4657__auto__,vec__285379,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__285382,dist_su,_,u,fpq,temp__4657__auto__,vec__285379,state,pq){
return (function (p__285383,v){
var vec__285384 = p__285383;
var state__$1 = cljs.core.nth.call(null,vec__285384,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__285384,(1),null);
var dist_suv = (dist_su + dist.call(null,u,v));
var dist_sv = cljs.core.first.call(null,state__$1.call(null,v));
if(cljs.core.truth_((function (){var and__35380__auto__ = dist_sv;
if(cljs.core.truth_(and__35380__auto__)){
return (dist_suv >= dist_sv);
} else {
return and__35380__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,pq__$1], null);
} else {
var pq__$2 = (cljs.core.truth_(dist_sv)?cljs.core.disj.call(null,pq__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_sv,cljs.core.hash.call(null,v),v], null)):pq__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state__$1,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,u], null)),cljs.core.conj.call(null,pq__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,cljs.core.hash.call(null,v),v], null))], null);
}
});})(vec__285382,dist_su,_,u,fpq,temp__4657__auto__,vec__285379,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__285382,dist_su,_,u,fpq,temp__4657__auto__,vec__285379,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__285415){
var vec__285416 = p__285415;
var n = cljs.core.nth.call(null,vec__285416,(0),null);
var vec__285417 = cljs.core.nth.call(null,vec__285416,(1),null);
var d = cljs.core.nth.call(null,vec__285417,(0),null);
var p = cljs.core.nth.call(null,vec__285417,(1),null);
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
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__285425){
var vec__285426 = p__285425;
var node = cljs.core.nth.call(null,vec__285426,(0),null);
var _ = cljs.core.nth.call(null,vec__285426,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__285427 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__285427,(0),null);
var end_state = cljs.core.nth.call(null,vec__285427,(1),null);
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
var size = (function (){var x__35723__auto__ = cljs.core.count.call(null,bitmap);
var y__35724__auto__ = loom.alg_generic.bm_longs.call(null,(idx + (1)));
return ((x__35723__auto__ > y__35724__auto__) ? x__35723__auto__ : y__35724__auto__);
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
var args__36468__auto__ = [];
var len__36461__auto___285511 = arguments.length;
var i__36462__auto___285512 = (0);
while(true){
if((i__36462__auto___285512 < len__36461__auto___285511)){
args__36468__auto__.push((arguments[i__36462__auto___285512]));

var G__285513 = (i__36462__auto___285512 + (1));
i__36462__auto___285512 = G__285513;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((0) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((0)),(0),null)):null);
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(argseq__36469__auto__);
});

loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic = (function (bitmaps){
if(cljs.core.empty_QMARK_.call(null,bitmaps)){
return loom.alg_generic.bm_new.call(null);
} else {
var size = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,bitmaps));
var bitmap = cljs.core.first.call(null,bitmaps);
var n_zeros = (size - cljs.core.count.call(null,bitmap));
var new_bitmap = bitmap.slice().concat((new Array(n_zeros)).fill((0)));
var seq__285477_285519 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__285484_285520 = null;
var count__285485_285521 = (0);
var i__285486_285522 = (0);
while(true){
if((i__285486_285522 < count__285485_285521)){
var bitmap_285526__$1 = cljs.core._nth.call(null,chunk__285484_285520,i__285486_285522);
var seq__285487_285527 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_285526__$1));
var chunk__285489_285528 = null;
var count__285490_285529 = (0);
var i__285491_285530 = (0);
while(true){
if((i__285491_285530 < count__285490_285529)){
var vec__285496_285533 = cljs.core._nth.call(null,chunk__285489_285528,i__285491_285530);
var idx_285534 = cljs.core.nth.call(null,vec__285496_285533,(0),null);
var value_285535 = cljs.core.nth.call(null,vec__285496_285533,(1),null);
var masked_value_285538 = (value_285535 | (new_bitmap[idx_285534]));
(new_bitmap[idx_285534] = masked_value_285538);

var G__285540 = seq__285487_285527;
var G__285541 = chunk__285489_285528;
var G__285542 = count__285490_285529;
var G__285543 = (i__285491_285530 + (1));
seq__285487_285527 = G__285540;
chunk__285489_285528 = G__285541;
count__285490_285529 = G__285542;
i__285491_285530 = G__285543;
continue;
} else {
var temp__4657__auto___285547 = cljs.core.seq.call(null,seq__285487_285527);
if(temp__4657__auto___285547){
var seq__285487_285548__$1 = temp__4657__auto___285547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__285487_285548__$1)){
var c__36203__auto___285549 = cljs.core.chunk_first.call(null,seq__285487_285548__$1);
var G__285551 = cljs.core.chunk_rest.call(null,seq__285487_285548__$1);
var G__285552 = c__36203__auto___285549;
var G__285553 = cljs.core.count.call(null,c__36203__auto___285549);
var G__285554 = (0);
seq__285487_285527 = G__285551;
chunk__285489_285528 = G__285552;
count__285490_285529 = G__285553;
i__285491_285530 = G__285554;
continue;
} else {
var vec__285499_285555 = cljs.core.first.call(null,seq__285487_285548__$1);
var idx_285556 = cljs.core.nth.call(null,vec__285499_285555,(0),null);
var value_285557 = cljs.core.nth.call(null,vec__285499_285555,(1),null);
var masked_value_285559 = (value_285557 | (new_bitmap[idx_285556]));
(new_bitmap[idx_285556] = masked_value_285559);

var G__285562 = cljs.core.next.call(null,seq__285487_285548__$1);
var G__285563 = null;
var G__285564 = (0);
var G__285565 = (0);
seq__285487_285527 = G__285562;
chunk__285489_285528 = G__285563;
count__285490_285529 = G__285564;
i__285491_285530 = G__285565;
continue;
}
} else {
}
}
break;
}

var G__285567 = seq__285477_285519;
var G__285568 = chunk__285484_285520;
var G__285569 = count__285485_285521;
var G__285570 = (i__285486_285522 + (1));
seq__285477_285519 = G__285567;
chunk__285484_285520 = G__285568;
count__285485_285521 = G__285569;
i__285486_285522 = G__285570;
continue;
} else {
var temp__4657__auto___285572 = cljs.core.seq.call(null,seq__285477_285519);
if(temp__4657__auto___285572){
var seq__285477_285574__$1 = temp__4657__auto___285572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__285477_285574__$1)){
var c__36203__auto___285576 = cljs.core.chunk_first.call(null,seq__285477_285574__$1);
var G__285579 = cljs.core.chunk_rest.call(null,seq__285477_285574__$1);
var G__285580 = c__36203__auto___285576;
var G__285581 = cljs.core.count.call(null,c__36203__auto___285576);
var G__285582 = (0);
seq__285477_285519 = G__285579;
chunk__285484_285520 = G__285580;
count__285485_285521 = G__285581;
i__285486_285522 = G__285582;
continue;
} else {
var bitmap_285584__$1 = cljs.core.first.call(null,seq__285477_285574__$1);
var seq__285478_285585 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_285584__$1));
var chunk__285480_285586 = null;
var count__285481_285587 = (0);
var i__285482_285588 = (0);
while(true){
if((i__285482_285588 < count__285481_285587)){
var vec__285505_285590 = cljs.core._nth.call(null,chunk__285480_285586,i__285482_285588);
var idx_285591 = cljs.core.nth.call(null,vec__285505_285590,(0),null);
var value_285592 = cljs.core.nth.call(null,vec__285505_285590,(1),null);
var masked_value_285595 = (value_285592 | (new_bitmap[idx_285591]));
(new_bitmap[idx_285591] = masked_value_285595);

var G__285596 = seq__285478_285585;
var G__285597 = chunk__285480_285586;
var G__285598 = count__285481_285587;
var G__285599 = (i__285482_285588 + (1));
seq__285478_285585 = G__285596;
chunk__285480_285586 = G__285597;
count__285481_285587 = G__285598;
i__285482_285588 = G__285599;
continue;
} else {
var temp__4657__auto___285602__$1 = cljs.core.seq.call(null,seq__285478_285585);
if(temp__4657__auto___285602__$1){
var seq__285478_285603__$1 = temp__4657__auto___285602__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__285478_285603__$1)){
var c__36203__auto___285605 = cljs.core.chunk_first.call(null,seq__285478_285603__$1);
var G__285606 = cljs.core.chunk_rest.call(null,seq__285478_285603__$1);
var G__285607 = c__36203__auto___285605;
var G__285608 = cljs.core.count.call(null,c__36203__auto___285605);
var G__285609 = (0);
seq__285478_285585 = G__285606;
chunk__285480_285586 = G__285607;
count__285481_285587 = G__285608;
i__285482_285588 = G__285609;
continue;
} else {
var vec__285508_285613 = cljs.core.first.call(null,seq__285478_285603__$1);
var idx_285614 = cljs.core.nth.call(null,vec__285508_285613,(0),null);
var value_285615 = cljs.core.nth.call(null,vec__285508_285613,(1),null);
var masked_value_285616 = (value_285615 | (new_bitmap[idx_285614]));
(new_bitmap[idx_285614] = masked_value_285616);

var G__285617 = cljs.core.next.call(null,seq__285478_285603__$1);
var G__285618 = null;
var G__285619 = (0);
var G__285620 = (0);
seq__285478_285585 = G__285617;
chunk__285480_285586 = G__285618;
count__285481_285587 = G__285619;
i__285482_285588 = G__285620;
continue;
}
} else {
}
}
break;
}

var G__285623 = cljs.core.next.call(null,seq__285477_285574__$1);
var G__285624 = null;
var G__285625 = (0);
var G__285626 = (0);
seq__285477_285519 = G__285623;
chunk__285484_285520 = G__285624;
count__285485_285521 = G__285625;
i__285486_285522 = G__285626;
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

loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq285472){
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq285472));
});
/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__36172__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__285647(s__285648){
return (new cljs.core.LazySeq(null,(function (){
var s__285648__$1 = s__285648;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__285648__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var chunk = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36168__auto__ = ((function (s__285648__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__285647_$_iter__285649(s__285650){
return (new cljs.core.LazySeq(null,((function (s__285648__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__285650__$1 = s__285650;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__285650__$1);
if(temp__4657__auto____$1){
var s__285650__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__285650__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__285650__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__285652 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__285651 = (0);
while(true){
if((i__285651 < size__36171__auto__)){
var offset = cljs.core._nth.call(null,c__36170__auto__,i__285651);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__285652,idx);

var G__285665 = (i__285651 + (1));
i__285651 = G__285665;
continue;
} else {
var G__285666 = (i__285651 + (1));
i__285651 = G__285666;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285652),loom$alg_generic$bm_get_indicies_$_iter__285647_$_iter__285649.call(null,cljs.core.chunk_rest.call(null,s__285650__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285652),null);
}
} else {
var offset = cljs.core.first.call(null,s__285650__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__285647_$_iter__285649.call(null,cljs.core.rest.call(null,s__285650__$2)));
} else {
var G__285669 = cljs.core.rest.call(null,s__285650__$2);
s__285650__$1 = G__285669;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__285648__$1,chunk,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__285648__$1,chunk,xs__5205__auto__,temp__4657__auto__))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,loom$alg_generic$bm_get_indicies_$_iter__285647.call(null,cljs.core.rest.call(null,s__285648__$1)));
} else {
var G__285670 = cljs.core.rest.call(null,s__285648__$1);
s__285648__$1 = G__285670;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36172__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,bitmap)));
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
loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36014__auto__,k__36015__auto__){
var self__ = this;
var this__36014__auto____$1 = this;
return cljs.core._lookup.call(null,this__36014__auto____$1,k__36015__auto__,null);
});

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36016__auto__,k285672,else__36017__auto__){
var self__ = this;
var this__36016__auto____$1 = this;
var G__285676 = (((k285672 instanceof cljs.core.Keyword))?k285672.fqn:null);
switch (G__285676) {
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
return cljs.core.get.call(null,self__.__extmap,k285672,else__36017__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36028__auto__,writer__36029__auto__,opts__36030__auto__){
var self__ = this;
var this__36028__auto____$1 = this;
var pr_pair__36031__auto__ = ((function (this__36028__auto____$1){
return (function (keyval__36032__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36029__auto__,cljs.core.pr_writer,""," ","",opts__36030__auto__,keyval__36032__auto__);
});})(this__36028__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36029__auto__,pr_pair__36031__auto__,"#loom.alg-generic.Ancestry{",", ","}",opts__36030__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$ = true;

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__285671){
var self__ = this;
var G__285671__$1 = this;
return (new cljs.core.RecordIter((0),G__285671__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36012__auto__){
var self__ = this;
var this__36012__auto____$1 = this;
return self__.__meta;
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36008__auto__){
var self__ = this;
var this__36008__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36018__auto__){
var self__ = this;
var this__36018__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36009__auto__){
var self__ = this;
var this__36009__auto____$1 = this;
var h__35827__auto__ = self__.__hash;
if(!((h__35827__auto__ == null))){
return h__35827__auto__;
} else {
var h__35827__auto____$1 = cljs.core.hash_imap.call(null,this__36009__auto____$1);
self__.__hash = h__35827__auto____$1;

return h__35827__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36010__auto__,other__36011__auto__){
var self__ = this;
var this__36010__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35380__auto__ = other__36011__auto__;
if(cljs.core.truth_(and__35380__auto__)){
var and__35380__auto____$1 = (this__36010__auto____$1.constructor === other__36011__auto__.constructor);
if(and__35380__auto____$1){
return cljs.core.equiv_map.call(null,this__36010__auto____$1,other__36011__auto__);
} else {
return and__35380__auto____$1;
}
} else {
return and__35380__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36023__auto__,k__36024__auto__){
var self__ = this;
var this__36023__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),null], null), null),k__36024__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36023__auto____$1),self__.__meta),k__36024__auto__);
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36024__auto__)),null));
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36021__auto__,k__36022__auto__,G__285671){
var self__ = this;
var this__36021__auto____$1 = this;
var pred__285683 = cljs.core.keyword_identical_QMARK_;
var expr__285684 = k__36022__auto__;
if(cljs.core.truth_(pred__285683.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__285684))){
return (new loom.alg_generic.Ancestry(G__285671,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__285683.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__285684))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__285671,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__285683.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__285684))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__285671,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36022__auto__,G__285671),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36026__auto__){
var self__ = this;
var this__36026__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36013__auto__,G__285671){
var self__ = this;
var this__36013__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__285671,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36019__auto__,entry__36020__auto__){
var self__ = this;
var this__36019__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36020__auto__)){
return cljs.core._assoc.call(null,this__36019__auto____$1,cljs.core._nth.call(null,entry__36020__auto__,(0)),cljs.core._nth.call(null,entry__36020__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36019__auto____$1,entry__36020__auto__);
}
});

loom.alg_generic.Ancestry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node->idx","node->idx",1793236754,null),new cljs.core.Symbol(null,"idx->node","idx->node",-842528594,null),new cljs.core.Symbol(null,"bitmaps","bitmaps",-1506736927,null)], null);
});

loom.alg_generic.Ancestry.cljs$lang$type = true;

loom.alg_generic.Ancestry.cljs$lang$ctorPrSeq = (function (this__36048__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.alg-generic/Ancestry");
});

loom.alg_generic.Ancestry.cljs$lang$ctorPrWriter = (function (this__36048__auto__,writer__36049__auto__){
return cljs.core._write.call(null,writer__36049__auto__,"loom.alg-generic/Ancestry");
});

loom.alg_generic.__GT_Ancestry = (function loom$alg_generic$__GT_Ancestry(node__GT_idx,idx__GT_node,bitmaps){
return (new loom.alg_generic.Ancestry(node__GT_idx,idx__GT_node,bitmaps,null,null,null));
});

loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__285675){
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__285675),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__285675),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__285675),null,cljs.core.dissoc.call(null,G__285675,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)),null));
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
var args__36468__auto__ = [];
var len__36461__auto___285758 = arguments.length;
var i__36462__auto___285759 = (0);
while(true){
if((i__36462__auto___285759 < len__36461__auto___285758)){
args__36468__auto__.push((arguments[i__36462__auto___285759]));

var G__285760 = (i__36462__auto___285759 + (1));
i__36462__auto___285759 = G__285760;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((2) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36469__auto__);
});

loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic = (function (ancestry,node,parents){
if(cljs.core.truth_(loom.alg_generic.ancestry_contains_QMARK_.call(null,ancestry,node))){
return ancestry;
} else {
var map__285751 = ancestry;
var map__285751__$1 = ((((!((map__285751 == null)))?((((map__285751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285751):map__285751);
var node__GT_idx = cljs.core.get.call(null,map__285751__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__285751__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__285751__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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

loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq285744){
var G__285745 = cljs.core.first.call(null,seq285744);
var seq285744__$1 = cljs.core.next.call(null,seq285744);
var G__285746 = cljs.core.first.call(null,seq285744__$1);
var seq285744__$2 = cljs.core.next.call(null,seq285744__$1);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic(G__285745,G__285746,seq285744__$2);
});
/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__285778 = ancestry;
var map__285778__$1 = ((((!((map__285778 == null)))?((((map__285778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285778):map__285778);
var node__GT_idx = cljs.core.get.call(null,map__285778__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__285778__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,childer);
var pidx = node__GT_idx.call(null,parenter);
return cljs.core.boolean$.call(null,(cljs.core.truth_((function (){var and__35380__auto__ = cidx;
if(cljs.core.truth_(and__35380__auto__)){
return pidx;
} else {
return and__35380__auto__;
}
})())?loom.alg_generic.bm_get.call(null,cljs.core.get.call(null,bitmaps,cidx),pidx):null));
});
/**
 * Returns all of the ancestors of 'child node.
 */
loom.alg_generic.ancestors = (function loom$alg_generic$ancestors(ancestry,child){
var map__285790 = ancestry;
var map__285790__$1 = ((((!((map__285790 == null)))?((((map__285790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285790):map__285790);
var node__GT_idx = cljs.core.get.call(null,map__285790__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__285790__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__285790__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});
