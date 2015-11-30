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
return (function (p1__649234_SHARP_){
return loom$alg_generic$paths.call(null,preds,cljs.core.conj.call(null,path,p1__649234_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__649233_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__649233_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__649235_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__649235_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__649238){
var vec__649239 = p__649238;
var n = cljs.core.nth.call(null,vec__649239,(0),null);
var p = cljs.core.nth.call(null,vec__649239,(1),null);
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
var len__25269__auto___649246 = arguments.length;
var i__25270__auto___649247 = (0);
while(true){
if((i__25270__auto___649247 < len__25269__auto___649246)){
args__25276__auto__.push((arguments[i__25270__auto___649247]));

var G__649248 = (i__25270__auto___649247 + (1));
i__25270__auto___649247 = G__649248;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((2) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((2)),(0))):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25277__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__649243){
var map__649244 = p__649243;
var map__649244__$1 = ((((!((map__649244 == null)))?((((map__649244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__649244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__649244):map__649244);
var seen = cljs.core.get.call(null,map__649244__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__649244,map__649244__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__4425__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__4425__auto__,map__649244,map__649244__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__4425__auto__,map__649244,map__649244__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__649244,map__649244__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq649240){
var G__649241 = cljs.core.first.call(null,seq649240);
var seq649240__$1 = cljs.core.next.call(null,seq649240);
var G__649242 = cljs.core.first.call(null,seq649240__$1);
var seq649240__$2 = cljs.core.next.call(null,seq649240__$1);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic(G__649241,G__649242,seq649240__$2);
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
var len__25269__auto___649255 = arguments.length;
var i__25270__auto___649256 = (0);
while(true){
if((i__25270__auto___649256 < len__25269__auto___649255)){
args__25276__auto__.push((arguments[i__25270__auto___649256]));

var G__649257 = (i__25270__auto___649256 + (1));
i__25270__auto___649256 = G__649257;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((2) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((2)),(0))):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25277__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__649252){
var map__649253 = p__649252;
var map__649253__$1 = ((((!((map__649253 == null)))?((((map__649253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__649253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__649253):map__649253);
var seen = cljs.core.get.call(null,map__649253__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__649253,map__649253__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__4423__auto__)){
var nbr = temp__4423__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4423__auto__,map__649253,map__649253__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4423__auto__,map__649253,map__649253__$1,seen))
,null,null)));
} else {
var temp__4425__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
var G__649258 = successors__$1;
var G__649259 = parent;
var G__649260 = cljs.core.peek.call(null,nbrstack);
var G__649261 = cljs.core.pop.call(null,stack);
var G__649262 = cljs.core.pop.call(null,nbrstack);
var G__649263 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__649258;
start__$1 = G__649259;
nbrs = G__649260;
stack = G__649261;
nbrstack = G__649262;
seen__$1 = G__649263;
continue;
} else {
return null;
}
}
break;
}
});})(map__649253,map__649253__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq649249){
var G__649250 = cljs.core.first.call(null,seq649249);
var seq649249__$1 = cljs.core.next.call(null,seq649249);
var G__649251 = cljs.core.first.call(null,seq649249__$1);
var seq649249__$2 = cljs.core.next.call(null,seq649249__$1);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__649250,G__649251,seq649249__$2);
});
/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__25276__auto__ = [];
var len__25269__auto___649270 = arguments.length;
var i__25270__auto___649271 = (0);
while(true){
if((i__25270__auto___649271 < len__25269__auto___649270)){
args__25276__auto__.push((arguments[i__25270__auto___649271]));

var G__649272 = (i__25270__auto___649271 + (1));
i__25270__auto___649271 = G__649272;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((2) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((2)),(0))):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25277__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__649267){
var map__649268 = p__649267;
var map__649268__$1 = ((((!((map__649268 == null)))?((((map__649268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__649268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__649268):map__649268);
var seen = cljs.core.get.call(null,map__649268__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__649268__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__649273 = seen__$2;
var G__649274 = cljs.core.assoc.call(null,preds,u,v);
var G__649275 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__649273;
preds = G__649274;
stack = G__649275;
continue;
} else {
var G__649276 = seen__$2;
var G__649277 = preds;
var G__649278 = cljs.core.pop.call(null,stack);
seen__$1 = G__649276;
preds = G__649277;
stack = G__649278;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq649264){
var G__649265 = cljs.core.first.call(null,seq649264);
var seq649264__$1 = cljs.core.next.call(null,seq649264);
var G__649266 = cljs.core.first.call(null,seq649264__$1);
var seq649264__$2 = cljs.core.next.call(null,seq649264__$1);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(G__649265,G__649266,seq649264__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__25276__auto__ = [];
var len__25269__auto___649285 = arguments.length;
var i__25270__auto___649286 = (0);
while(true){
if((i__25270__auto___649286 < len__25269__auto___649285)){
args__25276__auto__.push((arguments[i__25270__auto___649286]));

var G__649287 = (i__25270__auto___649286 + (1));
i__25270__auto___649286 = G__649287;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((2) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((2)),(0))):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25277__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__649282){
var map__649283 = p__649282;
var map__649283__$1 = ((((!((map__649283 == null)))?((((map__649283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__649283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__649283):map__649283);
var seen = cljs.core.get.call(null,map__649283__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__649283__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__649288 = seen__$2;
var G__649289 = cljs.core.conj.call(null,result,v);
var G__649290 = cljs.core.pop.call(null,stack);
seen__$1 = G__649288;
result = G__649289;
stack = G__649290;
continue;
} else {
var G__649291 = seen__$2;
var G__649292 = result;
var G__649293 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__649291;
result = G__649292;
stack = G__649293;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq649279){
var G__649280 = cljs.core.first.call(null,seq649279);
var seq649279__$1 = cljs.core.next.call(null,seq649279);
var G__649281 = cljs.core.first.call(null,seq649279__$1);
var seq649279__$2 = cljs.core.next.call(null,seq649279__$1);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__649280,G__649281,seq649279__$2);
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
var len__25269__auto___649300 = arguments.length;
var i__25270__auto___649301 = (0);
while(true){
if((i__25270__auto___649301 < len__25269__auto___649300)){
args__25276__auto__.push((arguments[i__25270__auto___649301]));

var G__649302 = (i__25270__auto___649301 + (1));
i__25270__auto___649301 = G__649302;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((2) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((2)),(0))):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25277__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__649297){
var map__649298 = p__649297;
var map__649298__$1 = ((((!((map__649298 == null)))?((((map__649298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__649298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__649298):map__649298);
var seen = cljs.core.get.call(null,map__649298__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__649298__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__649303 = start__$1;
var G__649304 = cljs.core.next.call(null,nbrs);
var G__649305 = stack;
var G__649306 = nbrstack;
var G__649307 = seen__$2;
var G__649308 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__649303;
nbrs = G__649304;
stack = G__649305;
nbrstack = G__649306;
seen__$1 = G__649307;
edges = G__649308;
continue;
} else {
var G__649309 = nbr;
var G__649310 = successors.call(null,nbr);
var G__649311 = cljs.core.conj.call(null,stack,start__$1);
var G__649312 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__649313 = seen__$2;
var G__649314 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__649309;
nbrs = G__649310;
stack = G__649311;
nbrstack = G__649312;
seen__$1 = G__649313;
edges = G__649314;
continue;
}
} else {
var temp__4423__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4423__auto____$1)){
var parent = temp__4423__auto____$1;
var G__649315 = parent;
var G__649316 = cljs.core.peek.call(null,nbrstack);
var G__649317 = cljs.core.pop.call(null,stack);
var G__649318 = cljs.core.pop.call(null,nbrstack);
var G__649319 = seen__$2;
var G__649320 = edges;
start__$1 = G__649315;
nbrs = G__649316;
stack = G__649317;
nbrstack = G__649318;
seen__$1 = G__649319;
edges = G__649320;
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

loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq649294){
var G__649295 = cljs.core.first.call(null,seq649294);
var seq649294__$1 = cljs.core.next.call(null,seq649294);
var G__649296 = cljs.core.first.call(null,seq649294__$1);
var seq649294__$2 = cljs.core.next.call(null,seq649294__$1);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__649295,G__649296,seq649294__$2);
});
/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var args649321 = [];
var len__25269__auto___649324 = arguments.length;
var i__25270__auto___649325 = (0);
while(true){
if((i__25270__auto___649325 < len__25269__auto___649324)){
args649321.push((arguments[i__25270__auto___649325]));

var G__649326 = (i__25270__auto___649325 + (1));
i__25270__auto___649325 = G__649326;
continue;
} else {
}
break;
}

var G__649323 = args649321.length;
switch (G__649323) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args649321.length)].join('')));

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
var G__649328 = seen__$2;
var G__649329 = explored__$1;
var G__649330 = result;
var G__649331 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__649328;
explored__$1 = G__649329;
result = G__649330;
stack = G__649331;
continue;
}
} else {
var G__649332 = seen__$2;
var G__649333 = cljs.core.conj.call(null,explored__$1,v);
var G__649334 = cljs.core.conj.call(null,result,v);
var G__649335 = cljs.core.pop.call(null,stack);
seen__$1 = G__649332;
explored__$1 = G__649333;
result = G__649334;
stack = G__649335;
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
var len__25269__auto___649370 = arguments.length;
var i__25270__auto___649371 = (0);
while(true){
if((i__25270__auto___649371 < len__25269__auto___649370)){
args__25276__auto__.push((arguments[i__25270__auto___649371]));

var G__649372 = (i__25270__auto___649371 + (1));
i__25270__auto___649371 = G__649372;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((2) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((2)),(0))):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25277__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__649343){
var map__649344 = p__649343;
var map__649344__$1 = ((((!((map__649344 == null)))?((((map__649344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__649344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__649344):map__649344);
var f = cljs.core.get.call(null,map__649344__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__649344__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__649344__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__24211__auto__ = f;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return ((function (or__24211__auto__,map__649344,map__649344__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__24211__auto__,map__649344,map__649344__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__24211__auto__ = when;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__649344,map__649344__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__4425__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__649361 = temp__4425__auto__;
var node = cljs.core.nth.call(null,vec__649361,(0),null);
var depth = cljs.core.nth.call(null,vec__649361,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__649361,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__649344,map__649344__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__649361,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__649344,map__649344__$1,f,when,seen){
return (function (p1__649337_SHARP_){
return nbr_pred.call(null,p1__649337_SHARP_,node,(depth + (1)));
});})(vec__649361,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__649344,map__649344__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__649361,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__649344,map__649344__$1,f,when,seen){
return (function (p1__649336_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__649336_SHARP_);
});})(vec__649361,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__649344,map__649344__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__24983__auto__ = ((function (nbrs,vec__649361,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__649344,map__649344__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__649362(s__649363){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__649361,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__649344,map__649344__$1,f,when,seen){
return (function (){
var s__649363__$1 = s__649363;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__649363__$1);
if(temp__4425__auto____$1){
var s__649363__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649363__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649363__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649365 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649364 = (0);
while(true){
if((i__649364 < size__24982__auto__)){
var nbr = cljs.core._nth.call(null,c__24981__auto__,i__649364);
cljs.core.chunk_append.call(null,b__649365,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__649373 = (i__649364 + (1));
i__649364 = G__649373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649365),loom$alg_generic$step_$_iter__649362.call(null,cljs.core.chunk_rest.call(null,s__649363__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649365),null);
}
} else {
var nbr = cljs.core.first.call(null,s__649363__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__649362.call(null,cljs.core.rest.call(null,s__649363__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__649361,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__649344,map__649344__$1,f,when,seen))
,null,null));
});})(nbrs,vec__649361,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__649344,map__649344__$1,f,when,seen))
;
return iter__24983__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__649361,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__649344,map__649344__$1,f,when,seen){
return (function (p1__649338_SHARP_,p2__649339_SHARP_){
return cljs.core.assoc.call(null,p1__649338_SHARP_,p2__649339_SHARP_,node);
});})(nbrs,vec__649361,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__649344,map__649344__$1,f,when,seen))
,preds,nbrs));
});})(vec__649361,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__649344,map__649344__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__649344,map__649344__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.fromArray([start,null], true, false),(function (){var iter__24983__auto__ = ((function (f__$1,nbr_pred,map__649344,map__649344__$1,f,when,seen){
return (function loom$alg_generic$iter__649366(s__649367){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__649344,map__649344__$1,f,when,seen){
return (function (){
var s__649367__$1 = s__649367;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649367__$1);
if(temp__4425__auto__){
var s__649367__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649367__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649367__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649369 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649368 = (0);
while(true){
if((i__649368 < size__24982__auto__)){
var s = cljs.core._nth.call(null,c__24981__auto__,i__649368);
cljs.core.chunk_append.call(null,b__649369,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__649374 = (i__649368 + (1));
i__649368 = G__649374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649369),loom$alg_generic$iter__649366.call(null,cljs.core.chunk_rest.call(null,s__649367__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649369),null);
}
} else {
var s = cljs.core.first.call(null,s__649367__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__649366.call(null,cljs.core.rest.call(null,s__649367__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__649344,map__649344__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__649344,map__649344__$1,f,when,seen))
;
return iter__24983__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq649340){
var G__649341 = cljs.core.first.call(null,seq649340);
var seq649340__$1 = cljs.core.next.call(null,seq649340);
var G__649342 = cljs.core.first.call(null,seq649340__$1);
var seq649340__$2 = cljs.core.next.call(null,seq649340__$1);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__649341,G__649342,seq649340__$2);
});
/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__25276__auto__ = [];
var len__25269__auto___649381 = arguments.length;
var i__25270__auto___649382 = (0);
while(true){
if((i__25270__auto___649382 < len__25269__auto___649381)){
args__25276__auto__.push((arguments[i__25270__auto___649382]));

var G__649383 = (i__25270__auto___649382 + (1));
i__25270__auto___649382 = G__649383;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((2) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((2)),(0))):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25277__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__649378){
var map__649379 = p__649378;
var map__649379__$1 = ((((!((map__649379 == null)))?((((map__649379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__649379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__649379):map__649379);
var seen = cljs.core.get.call(null,map__649379__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__649379,map__649379__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__649379,map__649379__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq649375){
var G__649376 = cljs.core.first.call(null,seq649375);
var seq649375__$1 = cljs.core.next.call(null,seq649375);
var G__649377 = cljs.core.first.call(null,seq649375__$1);
var seq649375__$2 = cljs.core.next.call(null,seq649375__$1);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic(G__649376,G__649377,seq649375__$2);
});
/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__25276__auto__ = [];
var len__25269__auto___649393 = arguments.length;
var i__25270__auto___649394 = (0);
while(true){
if((i__25270__auto___649394 < len__25269__auto___649393)){
args__25276__auto__.push((arguments[i__25270__auto___649394]));

var G__649395 = (i__25270__auto___649394 + (1));
i__25270__auto___649394 = G__649395;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((3) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((3)),(0))):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25277__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__649388){
var map__649389 = p__649388;
var map__649389__$1 = ((((!((map__649389 == null)))?((((map__649389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__649389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__649389):map__649389);
var opts = map__649389__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__4425__auto__ = cljs.core.some.call(null,((function (opts__$1,map__649389,map__649389__$1,opts){
return (function (p__649391){
var vec__649392 = p__649391;
var _ = cljs.core.nth.call(null,vec__649392,(0),null);
var pm = cljs.core.nth.call(null,vec__649392,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__649392,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__649389,map__649389__$1,opts))
,cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__4425__auto__)){
var preds = temp__4425__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq649384){
var G__649385 = cljs.core.first.call(null,seq649384);
var seq649384__$1 = cljs.core.next.call(null,seq649384);
var G__649386 = cljs.core.first.call(null,seq649384__$1);
var seq649384__$2 = cljs.core.next.call(null,seq649384__$1);
var G__649387 = cljs.core.first.call(null,seq649384__$2);
var seq649384__$3 = cljs.core.next.call(null,seq649384__$2);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__649385,G__649386,G__649387,seq649384__$3);
});
/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__649396 = m2;
var G__649397 = m1;
m1 = G__649396;
m2 = G__649397;
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
return (function (p1__649398_SHARP_){
return (cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds1),p1__649398_SHARP_)) + cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds2),p1__649398_SHARP_)));
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
var G__649399 = find_intersects.call(null);
intersects = G__649399;
continue;
}
break;
}
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__24983__auto__ = (function loom$alg_generic$reverse_edges_$_iter__649406(s__649407){
return (new cljs.core.LazySeq(null,(function (){
var s__649407__$1 = s__649407;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649407__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var node = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24979__auto__ = ((function (s__649407__$1,node,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__649406_$_iter__649408(s__649409){
return (new cljs.core.LazySeq(null,((function (s__649407__$1,node,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__649409__$1 = s__649409;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__649409__$1);
if(temp__4425__auto____$1){
var s__649409__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649409__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649409__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649411 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649410 = (0);
while(true){
if((i__649410 < size__24982__auto__)){
var nbr = cljs.core._nth.call(null,c__24981__auto__,i__649410);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
cljs.core.chunk_append.call(null,b__649411,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__649412 = (i__649410 + (1));
i__649410 = G__649412;
continue;
} else {
var G__649413 = (i__649410 + (1));
i__649410 = G__649413;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649411),loom$alg_generic$reverse_edges_$_iter__649406_$_iter__649408.call(null,cljs.core.chunk_rest.call(null,s__649409__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649411),null);
}
} else {
var nbr = cljs.core.first.call(null,s__649409__$2);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__649406_$_iter__649408.call(null,cljs.core.rest.call(null,s__649409__$2)));
} else {
var G__649414 = cljs.core.rest.call(null,s__649409__$2);
s__649409__$1 = G__649414;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__649407__$1,node,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__649407__$1,node,xs__4977__auto__,temp__4425__auto__))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,successor_fn.call(null,node)));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,loom$alg_generic$reverse_edges_$_iter__649406.call(null,cljs.core.rest.call(null,s__649407__$1)));
} else {
var G__649415 = cljs.core.rest.call(null,s__649407__$1);
s__649407__$1 = G__649415;
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
var iter__24983__auto__ = (function loom$alg_generic$conj_paths_$_iter__649424(s__649425){
return (new cljs.core.LazySeq(null,(function (){
var s__649425__$1 = s__649425;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649425__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24979__auto__ = ((function (s__649425__$1,n,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$conj_paths_$_iter__649424_$_iter__649426(s__649427){
return (new cljs.core.LazySeq(null,((function (s__649425__$1,n,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__649427__$1 = s__649427;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__649427__$1);
if(temp__4425__auto____$1){
var xs__4977__auto____$1 = temp__4425__auto____$1;
var from = cljs.core.first.call(null,xs__4977__auto____$1);
var iterys__24979__auto__ = ((function (s__649427__$1,s__649425__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$conj_paths_$_iter__649424_$_iter__649426_$_iter__649428(s__649429){
return (new cljs.core.LazySeq(null,((function (s__649427__$1,s__649425__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__649429__$1 = s__649429;
while(true){
var temp__4425__auto____$2 = cljs.core.seq.call(null,s__649429__$1);
if(temp__4425__auto____$2){
var s__649429__$2 = temp__4425__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649429__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649429__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649431 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649430 = (0);
while(true){
if((i__649430 < size__24982__auto__)){
var to = cljs.core._nth.call(null,c__24981__auto__,i__649430);
cljs.core.chunk_append.call(null,b__649431,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__649432 = (i__649430 + (1));
i__649430 = G__649432;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649431),loom$alg_generic$conj_paths_$_iter__649424_$_iter__649426_$_iter__649428.call(null,cljs.core.chunk_rest.call(null,s__649429__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649431),null);
}
} else {
var to = cljs.core.first.call(null,s__649429__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__649424_$_iter__649426_$_iter__649428.call(null,cljs.core.rest.call(null,s__649429__$2)));
}
} else {
return null;
}
break;
}
});})(s__649427__$1,s__649425__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__649427__$1,s__649425__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,loom$alg_generic$conj_paths_$_iter__649424_$_iter__649426.call(null,cljs.core.rest.call(null,s__649427__$1)));
} else {
var G__649433 = cljs.core.rest.call(null,s__649427__$1);
s__649427__$1 = G__649433;
continue;
}
} else {
return null;
}
break;
}
});})(s__649425__$1,n,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__649425__$1,n,xs__4977__auto__,temp__4425__auto__))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,loom$alg_generic$conj_paths_$_iter__649424.call(null,cljs.core.rest.call(null,s__649425__$1)));
} else {
var G__649434 = cljs.core.rest.call(null,s__649425__$1);
s__649425__$1 = G__649434;
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
return (function (p1__649435_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__649435_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__649438){
var vec__649439 = p__649438;
var key = cljs.core.nth.call(null,vec__649439,(0),null);
var val = cljs.core.nth.call(null,vec__649439,(1),null);
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
var G__649440 = outgoing__$1;
var G__649441 = incoming;
var G__649442 = q1__$1;
var G__649443 = q2;
outgoing = G__649440;
incoming = G__649441;
q1 = G__649442;
q2 = G__649443;
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
var G__649444 = outgoing;
var G__649445 = incoming__$1;
var G__649446 = q1;
var G__649447 = q2__$1;
outgoing = G__649444;
incoming = G__649445;
q1 = G__649446;
q2 = G__649447;
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
var args649450 = [];
var len__25269__auto___649471 = arguments.length;
var i__25270__auto___649472 = (0);
while(true){
if((i__25270__auto___649472 < len__25269__auto___649471)){
args649450.push((arguments[i__25270__auto___649472]));

var G__649473 = (i__25270__auto___649472 + (1));
i__25270__auto___649472 = G__649473;
continue;
} else {
}
break;
}

var G__649452 = args649450.length;
switch (G__649452) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args649450.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__649462){
var vec__649467 = p__649462;
var state = cljs.core.nth.call(null,vec__649467,(0),null);
var pq = cljs.core.nth.call(null,vec__649467,(1),null);
var temp__4425__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__649468 = temp__4425__auto__;
var dist_su = cljs.core.nth.call(null,vec__649468,(0),null);
var _ = cljs.core.nth.call(null,vec__649468,(1),null);
var u = cljs.core.nth.call(null,vec__649468,(2),null);
var fpq = vec__649468;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__649468,dist_su,_,u,fpq,temp__4425__auto__,vec__649467,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__649468,dist_su,_,u,fpq,temp__4425__auto__,vec__649467,state,pq){
return (function (p__649469,v){
var vec__649470 = p__649469;
var state__$1 = cljs.core.nth.call(null,vec__649470,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__649470,(1),null);
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
});})(vec__649468,dist_su,_,u,fpq,temp__4425__auto__,vec__649467,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__649468,dist_su,_,u,fpq,temp__4425__auto__,vec__649467,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__649478){
var vec__649479 = p__649478;
var n = cljs.core.nth.call(null,vec__649479,(0),null);
var vec__649480 = cljs.core.nth.call(null,vec__649479,(1),null);
var d = cljs.core.nth.call(null,vec__649480,(0),null);
var p = cljs.core.nth.call(null,vec__649480,(1),null);
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
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__649484){
var vec__649485 = p__649484;
var node = cljs.core.nth.call(null,vec__649485,(0),null);
var _ = cljs.core.nth.call(null,vec__649485,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__649486 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__649486,(0),null);
var end_state = cljs.core.nth.call(null,vec__649486,(1),null);
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
var len__25269__auto___649511 = arguments.length;
var i__25270__auto___649512 = (0);
while(true){
if((i__25270__auto___649512 < len__25269__auto___649511)){
args__25276__auto__.push((arguments[i__25270__auto___649512]));

var G__649513 = (i__25270__auto___649512 + (1));
i__25270__auto___649512 = G__649513;
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
var seq__649491_649514 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__649498_649515 = null;
var count__649499_649516 = (0);
var i__649500_649517 = (0);
while(true){
if((i__649500_649517 < count__649499_649516)){
var bitmap_649518__$1 = cljs.core._nth.call(null,chunk__649498_649515,i__649500_649517);
var seq__649501_649519 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_649518__$1));
var chunk__649503_649520 = null;
var count__649504_649521 = (0);
var i__649505_649522 = (0);
while(true){
if((i__649505_649522 < count__649504_649521)){
var vec__649507_649523 = cljs.core._nth.call(null,chunk__649503_649520,i__649505_649522);
var idx_649524 = cljs.core.nth.call(null,vec__649507_649523,(0),null);
var value_649525 = cljs.core.nth.call(null,vec__649507_649523,(1),null);
var masked_value_649526 = (value_649525 | (new_bitmap[idx_649524]));
(new_bitmap[idx_649524] = masked_value_649526);

var G__649527 = seq__649501_649519;
var G__649528 = chunk__649503_649520;
var G__649529 = count__649504_649521;
var G__649530 = (i__649505_649522 + (1));
seq__649501_649519 = G__649527;
chunk__649503_649520 = G__649528;
count__649504_649521 = G__649529;
i__649505_649522 = G__649530;
continue;
} else {
var temp__4425__auto___649531 = cljs.core.seq.call(null,seq__649501_649519);
if(temp__4425__auto___649531){
var seq__649501_649532__$1 = temp__4425__auto___649531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__649501_649532__$1)){
var c__25014__auto___649533 = cljs.core.chunk_first.call(null,seq__649501_649532__$1);
var G__649534 = cljs.core.chunk_rest.call(null,seq__649501_649532__$1);
var G__649535 = c__25014__auto___649533;
var G__649536 = cljs.core.count.call(null,c__25014__auto___649533);
var G__649537 = (0);
seq__649501_649519 = G__649534;
chunk__649503_649520 = G__649535;
count__649504_649521 = G__649536;
i__649505_649522 = G__649537;
continue;
} else {
var vec__649508_649538 = cljs.core.first.call(null,seq__649501_649532__$1);
var idx_649539 = cljs.core.nth.call(null,vec__649508_649538,(0),null);
var value_649540 = cljs.core.nth.call(null,vec__649508_649538,(1),null);
var masked_value_649541 = (value_649540 | (new_bitmap[idx_649539]));
(new_bitmap[idx_649539] = masked_value_649541);

var G__649542 = cljs.core.next.call(null,seq__649501_649532__$1);
var G__649543 = null;
var G__649544 = (0);
var G__649545 = (0);
seq__649501_649519 = G__649542;
chunk__649503_649520 = G__649543;
count__649504_649521 = G__649544;
i__649505_649522 = G__649545;
continue;
}
} else {
}
}
break;
}

var G__649546 = seq__649491_649514;
var G__649547 = chunk__649498_649515;
var G__649548 = count__649499_649516;
var G__649549 = (i__649500_649517 + (1));
seq__649491_649514 = G__649546;
chunk__649498_649515 = G__649547;
count__649499_649516 = G__649548;
i__649500_649517 = G__649549;
continue;
} else {
var temp__4425__auto___649550 = cljs.core.seq.call(null,seq__649491_649514);
if(temp__4425__auto___649550){
var seq__649491_649551__$1 = temp__4425__auto___649550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__649491_649551__$1)){
var c__25014__auto___649552 = cljs.core.chunk_first.call(null,seq__649491_649551__$1);
var G__649553 = cljs.core.chunk_rest.call(null,seq__649491_649551__$1);
var G__649554 = c__25014__auto___649552;
var G__649555 = cljs.core.count.call(null,c__25014__auto___649552);
var G__649556 = (0);
seq__649491_649514 = G__649553;
chunk__649498_649515 = G__649554;
count__649499_649516 = G__649555;
i__649500_649517 = G__649556;
continue;
} else {
var bitmap_649557__$1 = cljs.core.first.call(null,seq__649491_649551__$1);
var seq__649492_649558 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_649557__$1));
var chunk__649494_649559 = null;
var count__649495_649560 = (0);
var i__649496_649561 = (0);
while(true){
if((i__649496_649561 < count__649495_649560)){
var vec__649509_649562 = cljs.core._nth.call(null,chunk__649494_649559,i__649496_649561);
var idx_649563 = cljs.core.nth.call(null,vec__649509_649562,(0),null);
var value_649564 = cljs.core.nth.call(null,vec__649509_649562,(1),null);
var masked_value_649565 = (value_649564 | (new_bitmap[idx_649563]));
(new_bitmap[idx_649563] = masked_value_649565);

var G__649566 = seq__649492_649558;
var G__649567 = chunk__649494_649559;
var G__649568 = count__649495_649560;
var G__649569 = (i__649496_649561 + (1));
seq__649492_649558 = G__649566;
chunk__649494_649559 = G__649567;
count__649495_649560 = G__649568;
i__649496_649561 = G__649569;
continue;
} else {
var temp__4425__auto___649570__$1 = cljs.core.seq.call(null,seq__649492_649558);
if(temp__4425__auto___649570__$1){
var seq__649492_649571__$1 = temp__4425__auto___649570__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__649492_649571__$1)){
var c__25014__auto___649572 = cljs.core.chunk_first.call(null,seq__649492_649571__$1);
var G__649573 = cljs.core.chunk_rest.call(null,seq__649492_649571__$1);
var G__649574 = c__25014__auto___649572;
var G__649575 = cljs.core.count.call(null,c__25014__auto___649572);
var G__649576 = (0);
seq__649492_649558 = G__649573;
chunk__649494_649559 = G__649574;
count__649495_649560 = G__649575;
i__649496_649561 = G__649576;
continue;
} else {
var vec__649510_649577 = cljs.core.first.call(null,seq__649492_649571__$1);
var idx_649578 = cljs.core.nth.call(null,vec__649510_649577,(0),null);
var value_649579 = cljs.core.nth.call(null,vec__649510_649577,(1),null);
var masked_value_649580 = (value_649579 | (new_bitmap[idx_649578]));
(new_bitmap[idx_649578] = masked_value_649580);

var G__649581 = cljs.core.next.call(null,seq__649492_649571__$1);
var G__649582 = null;
var G__649583 = (0);
var G__649584 = (0);
seq__649492_649558 = G__649581;
chunk__649494_649559 = G__649582;
count__649495_649560 = G__649583;
i__649496_649561 = G__649584;
continue;
}
} else {
}
}
break;
}

var G__649585 = cljs.core.next.call(null,seq__649491_649551__$1);
var G__649586 = null;
var G__649587 = (0);
var G__649588 = (0);
seq__649491_649514 = G__649585;
chunk__649498_649515 = G__649586;
count__649499_649516 = G__649587;
i__649500_649517 = G__649588;
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

loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq649490){
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq649490));
});
/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__24983__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__649595(s__649596){
return (new cljs.core.LazySeq(null,(function (){
var s__649596__$1 = s__649596;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649596__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var chunk = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24979__auto__ = ((function (s__649596__$1,chunk,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__649595_$_iter__649597(s__649598){
return (new cljs.core.LazySeq(null,((function (s__649596__$1,chunk,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__649598__$1 = s__649598;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__649598__$1);
if(temp__4425__auto____$1){
var s__649598__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649598__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649598__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649600 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649599 = (0);
while(true){
if((i__649599 < size__24982__auto__)){
var offset = cljs.core._nth.call(null,c__24981__auto__,i__649599);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__649600,idx);

var G__649601 = (i__649599 + (1));
i__649599 = G__649601;
continue;
} else {
var G__649602 = (i__649599 + (1));
i__649599 = G__649602;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649600),loom$alg_generic$bm_get_indicies_$_iter__649595_$_iter__649597.call(null,cljs.core.chunk_rest.call(null,s__649598__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649600),null);
}
} else {
var offset = cljs.core.first.call(null,s__649598__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__649595_$_iter__649597.call(null,cljs.core.rest.call(null,s__649598__$2)));
} else {
var G__649603 = cljs.core.rest.call(null,s__649598__$2);
s__649598__$1 = G__649603;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__649596__$1,chunk,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__649596__$1,chunk,xs__4977__auto__,temp__4425__auto__))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,loom$alg_generic$bm_get_indicies_$_iter__649595.call(null,cljs.core.rest.call(null,s__649596__$1)));
} else {
var G__649604 = cljs.core.rest.call(null,s__649596__$1);
s__649596__$1 = G__649604;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24827__auto__,k649606,else__24828__auto__){
var self__ = this;
var this__24827__auto____$1 = this;
var G__649608 = (((k649606 instanceof cljs.core.Keyword))?k649606.fqn:null);
switch (G__649608) {
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
return cljs.core.get.call(null,self__.__extmap,k649606,else__24828__auto__);

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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__649605){
var self__ = this;
var G__649605__$1 = this;
return (new cljs.core.RecordIter((0),G__649605__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24832__auto__,k__24833__auto__,G__649605){
var self__ = this;
var this__24832__auto____$1 = this;
var pred__649609 = cljs.core.keyword_identical_QMARK_;
var expr__649610 = k__24833__auto__;
if(cljs.core.truth_(pred__649609.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__649610))){
return (new loom.alg_generic.Ancestry(G__649605,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649609.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__649610))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__649605,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649609.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__649610))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__649605,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24833__auto__,G__649605),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24837__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24824__auto__,G__649605){
var self__ = this;
var this__24824__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__649605,self__.__extmap,self__.__hash));
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

loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__649607){
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__649607),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__649607),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__649607),null,cljs.core.dissoc.call(null,G__649607,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)),null));
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
var len__25269__auto___649618 = arguments.length;
var i__25270__auto___649619 = (0);
while(true){
if((i__25270__auto___649619 < len__25269__auto___649618)){
args__25276__auto__.push((arguments[i__25270__auto___649619]));

var G__649620 = (i__25270__auto___649619 + (1));
i__25270__auto___649619 = G__649620;
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
var map__649616 = ancestry;
var map__649616__$1 = ((((!((map__649616 == null)))?((((map__649616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__649616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__649616):map__649616);
var node__GT_idx = cljs.core.get.call(null,map__649616__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__649616__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__649616__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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

loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq649613){
var G__649614 = cljs.core.first.call(null,seq649613);
var seq649613__$1 = cljs.core.next.call(null,seq649613);
var G__649615 = cljs.core.first.call(null,seq649613__$1);
var seq649613__$2 = cljs.core.next.call(null,seq649613__$1);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic(G__649614,G__649615,seq649613__$2);
});
/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__649623 = ancestry;
var map__649623__$1 = ((((!((map__649623 == null)))?((((map__649623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__649623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__649623):map__649623);
var node__GT_idx = cljs.core.get.call(null,map__649623__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__649623__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__649627 = ancestry;
var map__649627__$1 = ((((!((map__649627 == null)))?((((map__649627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__649627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__649627):map__649627);
var node__GT_idx = cljs.core.get.call(null,map__649627__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__649627__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__649627__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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