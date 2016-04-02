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
return (function (p1__96309_SHARP_){
return loom$alg_generic$paths.call(null,preds,cljs.core.conj.call(null,path,p1__96309_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__96308_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__96308_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__96319_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__96319_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__96326){
var vec__96327 = p__96326;
var n = cljs.core.nth.call(null,vec__96327,(0),null);
var p = cljs.core.nth.call(null,vec__96327,(1),null);
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
var len__36461__auto___96393 = arguments.length;
var i__36462__auto___96394 = (0);
while(true){
if((i__36462__auto___96394 < len__36461__auto___96393)){
args__36468__auto__.push((arguments[i__36462__auto___96394]));

var G__96395 = (i__36462__auto___96394 + (1));
i__36462__auto___96394 = G__96395;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((2) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36469__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__96334){
var map__96335 = p__96334;
var map__96335__$1 = ((((!((map__96335 == null)))?((((map__96335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96335):map__96335);
var seen = cljs.core.get.call(null,map__96335__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__96335,map__96335__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__4657__auto__,map__96335,map__96335__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__4657__auto__,map__96335,map__96335__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__96335,map__96335__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq96329){
var G__96331 = cljs.core.first.call(null,seq96329);
var seq96329__$1 = cljs.core.next.call(null,seq96329);
var G__96332 = cljs.core.first.call(null,seq96329__$1);
var seq96329__$2 = cljs.core.next.call(null,seq96329__$1);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic(G__96331,G__96332,seq96329__$2);
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
var len__36461__auto___96421 = arguments.length;
var i__36462__auto___96422 = (0);
while(true){
if((i__36462__auto___96422 < len__36461__auto___96421)){
args__36468__auto__.push((arguments[i__36462__auto___96422]));

var G__96423 = (i__36462__auto___96422 + (1));
i__36462__auto___96422 = G__96423;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((2) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36469__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__96404){
var map__96405 = p__96404;
var map__96405__$1 = ((((!((map__96405 == null)))?((((map__96405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96405):map__96405);
var seen = cljs.core.get.call(null,map__96405__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__96405,map__96405__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__4655__auto__)){
var nbr = temp__4655__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__96405,map__96405__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__96405,map__96405__$1,seen))
,null,null)));
} else {
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__96424 = successors__$1;
var G__96425 = parent;
var G__96426 = cljs.core.peek.call(null,nbrstack);
var G__96427 = cljs.core.pop.call(null,stack);
var G__96428 = cljs.core.pop.call(null,nbrstack);
var G__96429 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__96424;
start__$1 = G__96425;
nbrs = G__96426;
stack = G__96427;
nbrstack = G__96428;
seen__$1 = G__96429;
continue;
} else {
return null;
}
}
break;
}
});})(map__96405,map__96405__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq96401){
var G__96402 = cljs.core.first.call(null,seq96401);
var seq96401__$1 = cljs.core.next.call(null,seq96401);
var G__96403 = cljs.core.first.call(null,seq96401__$1);
var seq96401__$2 = cljs.core.next.call(null,seq96401__$1);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__96402,G__96403,seq96401__$2);
});
/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__36468__auto__ = [];
var len__36461__auto___96436 = arguments.length;
var i__36462__auto___96437 = (0);
while(true){
if((i__36462__auto___96437 < len__36461__auto___96436)){
args__36468__auto__.push((arguments[i__36462__auto___96437]));

var G__96438 = (i__36462__auto___96437 + (1));
i__36462__auto___96437 = G__96438;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((2) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36469__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__96433){
var map__96434 = p__96433;
var map__96434__$1 = ((((!((map__96434 == null)))?((((map__96434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96434):map__96434);
var seen = cljs.core.get.call(null,map__96434__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__96434__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__96457 = seen__$2;
var G__96458 = cljs.core.assoc.call(null,preds,u,v);
var G__96459 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__96457;
preds = G__96458;
stack = G__96459;
continue;
} else {
var G__96460 = seen__$2;
var G__96461 = preds;
var G__96462 = cljs.core.pop.call(null,stack);
seen__$1 = G__96460;
preds = G__96461;
stack = G__96462;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq96430){
var G__96431 = cljs.core.first.call(null,seq96430);
var seq96430__$1 = cljs.core.next.call(null,seq96430);
var G__96432 = cljs.core.first.call(null,seq96430__$1);
var seq96430__$2 = cljs.core.next.call(null,seq96430__$1);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(G__96431,G__96432,seq96430__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__36468__auto__ = [];
var len__36461__auto___96469 = arguments.length;
var i__36462__auto___96470 = (0);
while(true){
if((i__36462__auto___96470 < len__36461__auto___96469)){
args__36468__auto__.push((arguments[i__36462__auto___96470]));

var G__96471 = (i__36462__auto___96470 + (1));
i__36462__auto___96470 = G__96471;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((2) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36469__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__96466){
var map__96467 = p__96466;
var map__96467__$1 = ((((!((map__96467 == null)))?((((map__96467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96467):map__96467);
var seen = cljs.core.get.call(null,map__96467__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__96467__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__96474 = seen__$2;
var G__96475 = cljs.core.conj.call(null,result,v);
var G__96476 = cljs.core.pop.call(null,stack);
seen__$1 = G__96474;
result = G__96475;
stack = G__96476;
continue;
} else {
var G__96477 = seen__$2;
var G__96478 = result;
var G__96479 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__96477;
result = G__96478;
stack = G__96479;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq96463){
var G__96464 = cljs.core.first.call(null,seq96463);
var seq96463__$1 = cljs.core.next.call(null,seq96463);
var G__96465 = cljs.core.first.call(null,seq96463__$1);
var seq96463__$2 = cljs.core.next.call(null,seq96463__$1);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__96464,G__96465,seq96463__$2);
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
var len__36461__auto___96507 = arguments.length;
var i__36462__auto___96508 = (0);
while(true){
if((i__36462__auto___96508 < len__36461__auto___96507)){
args__36468__auto__.push((arguments[i__36462__auto___96508]));

var G__96509 = (i__36462__auto___96508 + (1));
i__36462__auto___96508 = G__96509;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((2) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36469__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__96504){
var map__96505 = p__96504;
var map__96505__$1 = ((((!((map__96505 == null)))?((((map__96505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96505):map__96505);
var seen = cljs.core.get.call(null,map__96505__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__96505__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__96514 = start__$1;
var G__96515 = cljs.core.next.call(null,nbrs);
var G__96516 = stack;
var G__96517 = nbrstack;
var G__96518 = seen__$2;
var G__96519 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__96514;
nbrs = G__96515;
stack = G__96516;
nbrstack = G__96517;
seen__$1 = G__96518;
edges = G__96519;
continue;
} else {
var G__96526 = nbr;
var G__96527 = successors.call(null,nbr);
var G__96528 = cljs.core.conj.call(null,stack,start__$1);
var G__96529 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__96530 = seen__$2;
var G__96531 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__96526;
nbrs = G__96527;
stack = G__96528;
nbrstack = G__96529;
seen__$1 = G__96530;
edges = G__96531;
continue;
}
} else {
var temp__4655__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4655__auto____$1)){
var parent = temp__4655__auto____$1;
var G__96533 = parent;
var G__96534 = cljs.core.peek.call(null,nbrstack);
var G__96535 = cljs.core.pop.call(null,stack);
var G__96536 = cljs.core.pop.call(null,nbrstack);
var G__96537 = seen__$2;
var G__96538 = edges;
start__$1 = G__96533;
nbrs = G__96534;
stack = G__96535;
nbrstack = G__96536;
seen__$1 = G__96537;
edges = G__96538;
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

loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq96486){
var G__96487 = cljs.core.first.call(null,seq96486);
var seq96486__$1 = cljs.core.next.call(null,seq96486);
var G__96488 = cljs.core.first.call(null,seq96486__$1);
var seq96486__$2 = cljs.core.next.call(null,seq96486__$1);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__96487,G__96488,seq96486__$2);
});
/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var args96539 = [];
var len__36461__auto___96543 = arguments.length;
var i__36462__auto___96544 = (0);
while(true){
if((i__36462__auto___96544 < len__36461__auto___96543)){
args96539.push((arguments[i__36462__auto___96544]));

var G__96545 = (i__36462__auto___96544 + (1));
i__36462__auto___96544 = G__96545;
continue;
} else {
}
break;
}

var G__96542 = args96539.length;
switch (G__96542) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args96539.length)].join('')));

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
var G__96554 = seen__$2;
var G__96555 = explored__$1;
var G__96556 = result;
var G__96557 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__96554;
explored__$1 = G__96555;
result = G__96556;
stack = G__96557;
continue;
}
} else {
var G__96558 = seen__$2;
var G__96559 = cljs.core.conj.call(null,explored__$1,v);
var G__96560 = cljs.core.conj.call(null,result,v);
var G__96561 = cljs.core.pop.call(null,stack);
seen__$1 = G__96558;
explored__$1 = G__96559;
result = G__96560;
stack = G__96561;
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
var len__36461__auto___96644 = arguments.length;
var i__36462__auto___96645 = (0);
while(true){
if((i__36462__auto___96645 < len__36461__auto___96644)){
args__36468__auto__.push((arguments[i__36462__auto___96645]));

var G__96646 = (i__36462__auto___96645 + (1));
i__36462__auto___96645 = G__96646;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((2) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36469__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__96595){
var map__96596 = p__96595;
var map__96596__$1 = ((((!((map__96596 == null)))?((((map__96596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96596):map__96596);
var f = cljs.core.get.call(null,map__96596__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__96596__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__96596__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__35392__auto__ = f;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return ((function (or__35392__auto__,map__96596,map__96596__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__35392__auto__,map__96596,map__96596__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__35392__auto__ = when;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__96596,map__96596__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__4657__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__96618 = temp__4657__auto__;
var node = cljs.core.nth.call(null,vec__96618,(0),null);
var depth = cljs.core.nth.call(null,vec__96618,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__96618,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__96596,map__96596__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__96618,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__96596,map__96596__$1,f,when,seen){
return (function (p1__96563_SHARP_){
return nbr_pred.call(null,p1__96563_SHARP_,node,(depth + (1)));
});})(vec__96618,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__96596,map__96596__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__96618,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__96596,map__96596__$1,f,when,seen){
return (function (p1__96562_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__96562_SHARP_);
});})(vec__96618,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__96596,map__96596__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__36172__auto__ = ((function (nbrs,vec__96618,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__96596,map__96596__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__96620(s__96621){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__96618,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__96596,map__96596__$1,f,when,seen){
return (function (){
var s__96621__$1 = s__96621;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__96621__$1);
if(temp__4657__auto____$1){
var s__96621__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__96621__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__96621__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__96623 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__96622 = (0);
while(true){
if((i__96622 < size__36171__auto__)){
var nbr = cljs.core._nth.call(null,c__36170__auto__,i__96622);
cljs.core.chunk_append.call(null,b__96623,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__96653 = (i__96622 + (1));
i__96622 = G__96653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96623),loom$alg_generic$step_$_iter__96620.call(null,cljs.core.chunk_rest.call(null,s__96621__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96623),null);
}
} else {
var nbr = cljs.core.first.call(null,s__96621__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__96620.call(null,cljs.core.rest.call(null,s__96621__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__96618,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__96596,map__96596__$1,f,when,seen))
,null,null));
});})(nbrs,vec__96618,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__96596,map__96596__$1,f,when,seen))
;
return iter__36172__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__96618,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__96596,map__96596__$1,f,when,seen){
return (function (p1__96564_SHARP_,p2__96565_SHARP_){
return cljs.core.assoc.call(null,p1__96564_SHARP_,p2__96565_SHARP_,node);
});})(nbrs,vec__96618,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__96596,map__96596__$1,f,when,seen))
,preds,nbrs));
});})(vec__96618,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__96596,map__96596__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__96596,map__96596__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.fromArray([start,null], true, false),(function (){var iter__36172__auto__ = ((function (f__$1,nbr_pred,map__96596,map__96596__$1,f,when,seen){
return (function loom$alg_generic$iter__96636(s__96637){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__96596,map__96596__$1,f,when,seen){
return (function (){
var s__96637__$1 = s__96637;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__96637__$1);
if(temp__4657__auto__){
var s__96637__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__96637__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__96637__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__96639 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__96638 = (0);
while(true){
if((i__96638 < size__36171__auto__)){
var s = cljs.core._nth.call(null,c__36170__auto__,i__96638);
cljs.core.chunk_append.call(null,b__96639,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__96654 = (i__96638 + (1));
i__96638 = G__96654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96639),loom$alg_generic$iter__96636.call(null,cljs.core.chunk_rest.call(null,s__96637__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96639),null);
}
} else {
var s = cljs.core.first.call(null,s__96637__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__96636.call(null,cljs.core.rest.call(null,s__96637__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__96596,map__96596__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__96596,map__96596__$1,f,when,seen))
;
return iter__36172__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq96566){
var G__96567 = cljs.core.first.call(null,seq96566);
var seq96566__$1 = cljs.core.next.call(null,seq96566);
var G__96568 = cljs.core.first.call(null,seq96566__$1);
var seq96566__$2 = cljs.core.next.call(null,seq96566__$1);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__96567,G__96568,seq96566__$2);
});
/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__36468__auto__ = [];
var len__36461__auto___96666 = arguments.length;
var i__36462__auto___96667 = (0);
while(true){
if((i__36462__auto___96667 < len__36461__auto___96666)){
args__36468__auto__.push((arguments[i__36462__auto___96667]));

var G__96668 = (i__36462__auto___96667 + (1));
i__36462__auto___96667 = G__96668;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((2) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36469__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__96661){
var map__96663 = p__96661;
var map__96663__$1 = ((((!((map__96663 == null)))?((((map__96663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96663):map__96663);
var seen = cljs.core.get.call(null,map__96663__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__96663,map__96663__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__96663,map__96663__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq96655){
var G__96656 = cljs.core.first.call(null,seq96655);
var seq96655__$1 = cljs.core.next.call(null,seq96655);
var G__96657 = cljs.core.first.call(null,seq96655__$1);
var seq96655__$2 = cljs.core.next.call(null,seq96655__$1);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic(G__96656,G__96657,seq96655__$2);
});
/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__36468__auto__ = [];
var len__36461__auto___96694 = arguments.length;
var i__36462__auto___96695 = (0);
while(true){
if((i__36462__auto___96695 < len__36461__auto___96694)){
args__36468__auto__.push((arguments[i__36462__auto___96695]));

var G__96696 = (i__36462__auto___96695 + (1));
i__36462__auto___96695 = G__96696;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((3) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36469__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__96682){
var map__96683 = p__96682;
var map__96683__$1 = ((((!((map__96683 == null)))?((((map__96683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96683):map__96683);
var opts = map__96683__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__4657__auto__ = cljs.core.some.call(null,((function (opts__$1,map__96683,map__96683__$1,opts){
return (function (p__96689){
var vec__96690 = p__96689;
var _ = cljs.core.nth.call(null,vec__96690,(0),null);
var pm = cljs.core.nth.call(null,vec__96690,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__96690,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__96683,map__96683__$1,opts))
,cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__4657__auto__)){
var preds = temp__4657__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq96669){
var G__96670 = cljs.core.first.call(null,seq96669);
var seq96669__$1 = cljs.core.next.call(null,seq96669);
var G__96671 = cljs.core.first.call(null,seq96669__$1);
var seq96669__$2 = cljs.core.next.call(null,seq96669__$1);
var G__96672 = cljs.core.first.call(null,seq96669__$2);
var seq96669__$3 = cljs.core.next.call(null,seq96669__$2);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__96670,G__96671,G__96672,seq96669__$3);
});
/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__96699 = m2;
var G__96700 = m1;
m1 = G__96699;
m2 = G__96700;
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
return (function (p1__96701_SHARP_){
return (cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds1),p1__96701_SHARP_)) + cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds2),p1__96701_SHARP_)));
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
var G__96711 = find_intersects.call(null);
intersects = G__96711;
continue;
}
break;
}
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__36172__auto__ = (function loom$alg_generic$reverse_edges_$_iter__96724(s__96725){
return (new cljs.core.LazySeq(null,(function (){
var s__96725__$1 = s__96725;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__96725__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var node = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36168__auto__ = ((function (s__96725__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__96724_$_iter__96726(s__96727){
return (new cljs.core.LazySeq(null,((function (s__96725__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__96727__$1 = s__96727;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__96727__$1);
if(temp__4657__auto____$1){
var s__96727__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__96727__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__96727__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__96729 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__96728 = (0);
while(true){
if((i__96728 < size__36171__auto__)){
var nbr = cljs.core._nth.call(null,c__36170__auto__,i__96728);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
cljs.core.chunk_append.call(null,b__96729,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__96767 = (i__96728 + (1));
i__96728 = G__96767;
continue;
} else {
var G__96768 = (i__96728 + (1));
i__96728 = G__96768;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96729),loom$alg_generic$reverse_edges_$_iter__96724_$_iter__96726.call(null,cljs.core.chunk_rest.call(null,s__96727__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96729),null);
}
} else {
var nbr = cljs.core.first.call(null,s__96727__$2);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__96724_$_iter__96726.call(null,cljs.core.rest.call(null,s__96727__$2)));
} else {
var G__96787 = cljs.core.rest.call(null,s__96727__$2);
s__96727__$1 = G__96787;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__96725__$1,node,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__96725__$1,node,xs__5205__auto__,temp__4657__auto__))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,successor_fn.call(null,node)));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,loom$alg_generic$reverse_edges_$_iter__96724.call(null,cljs.core.rest.call(null,s__96725__$1)));
} else {
var G__96788 = cljs.core.rest.call(null,s__96725__$1);
s__96725__$1 = G__96788;
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
var iter__36172__auto__ = (function loom$alg_generic$conj_paths_$_iter__96856(s__96857){
return (new cljs.core.LazySeq(null,(function (){
var s__96857__$1 = s__96857;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__96857__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36168__auto__ = ((function (s__96857__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__96856_$_iter__96858(s__96859){
return (new cljs.core.LazySeq(null,((function (s__96857__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__96859__$1 = s__96859;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__96859__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var from = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__36168__auto__ = ((function (s__96859__$1,s__96857__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__96856_$_iter__96858_$_iter__96860(s__96861){
return (new cljs.core.LazySeq(null,((function (s__96859__$1,s__96857__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__96861__$1 = s__96861;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__96861__$1);
if(temp__4657__auto____$2){
var s__96861__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__96861__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__96861__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__96863 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__96862 = (0);
while(true){
if((i__96862 < size__36171__auto__)){
var to = cljs.core._nth.call(null,c__36170__auto__,i__96862);
cljs.core.chunk_append.call(null,b__96863,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__96883 = (i__96862 + (1));
i__96862 = G__96883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96863),loom$alg_generic$conj_paths_$_iter__96856_$_iter__96858_$_iter__96860.call(null,cljs.core.chunk_rest.call(null,s__96861__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96863),null);
}
} else {
var to = cljs.core.first.call(null,s__96861__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__96856_$_iter__96858_$_iter__96860.call(null,cljs.core.rest.call(null,s__96861__$2)));
}
} else {
return null;
}
break;
}
});})(s__96859__$1,s__96857__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__96859__$1,s__96857__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,loom$alg_generic$conj_paths_$_iter__96856_$_iter__96858.call(null,cljs.core.rest.call(null,s__96859__$1)));
} else {
var G__96890 = cljs.core.rest.call(null,s__96859__$1);
s__96859__$1 = G__96890;
continue;
}
} else {
return null;
}
break;
}
});})(s__96857__$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__96857__$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,loom$alg_generic$conj_paths_$_iter__96856.call(null,cljs.core.rest.call(null,s__96857__$1)));
} else {
var G__96891 = cljs.core.rest.call(null,s__96857__$1);
s__96857__$1 = G__96891;
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
return (function (p1__96901_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__96901_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__96907){
var vec__96908 = p__96907;
var key = cljs.core.nth.call(null,vec__96908,(0),null);
var val = cljs.core.nth.call(null,vec__96908,(1),null);
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
var G__96935 = outgoing__$1;
var G__96936 = incoming;
var G__96937 = q1__$1;
var G__96938 = q2;
outgoing = G__96935;
incoming = G__96936;
q1 = G__96937;
q2 = G__96938;
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
var G__96939 = outgoing;
var G__96940 = incoming__$1;
var G__96941 = q1;
var G__96942 = q2__$1;
outgoing = G__96939;
incoming = G__96940;
q1 = G__96941;
q2 = G__96942;
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
var args96947 = [];
var len__36461__auto___96972 = arguments.length;
var i__36462__auto___96973 = (0);
while(true){
if((i__36462__auto___96973 < len__36461__auto___96972)){
args96947.push((arguments[i__36462__auto___96973]));

var G__96974 = (i__36462__auto___96973 + (1));
i__36462__auto___96973 = G__96974;
continue;
} else {
}
break;
}

var G__96949 = args96947.length;
switch (G__96949) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args96947.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__96961){
var vec__96966 = p__96961;
var state = cljs.core.nth.call(null,vec__96966,(0),null);
var pq = cljs.core.nth.call(null,vec__96966,(1),null);
var temp__4657__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__96967 = temp__4657__auto__;
var dist_su = cljs.core.nth.call(null,vec__96967,(0),null);
var _ = cljs.core.nth.call(null,vec__96967,(1),null);
var u = cljs.core.nth.call(null,vec__96967,(2),null);
var fpq = vec__96967;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__96967,dist_su,_,u,fpq,temp__4657__auto__,vec__96966,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__96967,dist_su,_,u,fpq,temp__4657__auto__,vec__96966,state,pq){
return (function (p__96968,v){
var vec__96969 = p__96968;
var state__$1 = cljs.core.nth.call(null,vec__96969,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__96969,(1),null);
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
});})(vec__96967,dist_su,_,u,fpq,temp__4657__auto__,vec__96966,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__96967,dist_su,_,u,fpq,temp__4657__auto__,vec__96966,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__96991){
var vec__96992 = p__96991;
var n = cljs.core.nth.call(null,vec__96992,(0),null);
var vec__96993 = cljs.core.nth.call(null,vec__96992,(1),null);
var d = cljs.core.nth.call(null,vec__96993,(0),null);
var p = cljs.core.nth.call(null,vec__96993,(1),null);
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
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__97004){
var vec__97005 = p__97004;
var node = cljs.core.nth.call(null,vec__97005,(0),null);
var _ = cljs.core.nth.call(null,vec__97005,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__97006 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__97006,(0),null);
var end_state = cljs.core.nth.call(null,vec__97006,(1),null);
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
var len__36461__auto___97059 = arguments.length;
var i__36462__auto___97064 = (0);
while(true){
if((i__36462__auto___97064 < len__36461__auto___97059)){
args__36468__auto__.push((arguments[i__36462__auto___97064]));

var G__97065 = (i__36462__auto___97064 + (1));
i__36462__auto___97064 = G__97065;
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
var seq__97032_97071 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__97039_97072 = null;
var count__97040_97073 = (0);
var i__97041_97074 = (0);
while(true){
if((i__97041_97074 < count__97040_97073)){
var bitmap_97075__$1 = cljs.core._nth.call(null,chunk__97039_97072,i__97041_97074);
var seq__97042_97076 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_97075__$1));
var chunk__97044_97077 = null;
var count__97045_97078 = (0);
var i__97046_97079 = (0);
while(true){
if((i__97046_97079 < count__97045_97078)){
var vec__97050_97080 = cljs.core._nth.call(null,chunk__97044_97077,i__97046_97079);
var idx_97081 = cljs.core.nth.call(null,vec__97050_97080,(0),null);
var value_97082 = cljs.core.nth.call(null,vec__97050_97080,(1),null);
var masked_value_97083 = (value_97082 | (new_bitmap[idx_97081]));
(new_bitmap[idx_97081] = masked_value_97083);

var G__97084 = seq__97042_97076;
var G__97085 = chunk__97044_97077;
var G__97086 = count__97045_97078;
var G__97087 = (i__97046_97079 + (1));
seq__97042_97076 = G__97084;
chunk__97044_97077 = G__97085;
count__97045_97078 = G__97086;
i__97046_97079 = G__97087;
continue;
} else {
var temp__4657__auto___97088 = cljs.core.seq.call(null,seq__97042_97076);
if(temp__4657__auto___97088){
var seq__97042_97091__$1 = temp__4657__auto___97088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__97042_97091__$1)){
var c__36203__auto___97092 = cljs.core.chunk_first.call(null,seq__97042_97091__$1);
var G__97093 = cljs.core.chunk_rest.call(null,seq__97042_97091__$1);
var G__97094 = c__36203__auto___97092;
var G__97095 = cljs.core.count.call(null,c__36203__auto___97092);
var G__97096 = (0);
seq__97042_97076 = G__97093;
chunk__97044_97077 = G__97094;
count__97045_97078 = G__97095;
i__97046_97079 = G__97096;
continue;
} else {
var vec__97053_97097 = cljs.core.first.call(null,seq__97042_97091__$1);
var idx_97098 = cljs.core.nth.call(null,vec__97053_97097,(0),null);
var value_97099 = cljs.core.nth.call(null,vec__97053_97097,(1),null);
var masked_value_97100 = (value_97099 | (new_bitmap[idx_97098]));
(new_bitmap[idx_97098] = masked_value_97100);

var G__97101 = cljs.core.next.call(null,seq__97042_97091__$1);
var G__97102 = null;
var G__97103 = (0);
var G__97104 = (0);
seq__97042_97076 = G__97101;
chunk__97044_97077 = G__97102;
count__97045_97078 = G__97103;
i__97046_97079 = G__97104;
continue;
}
} else {
}
}
break;
}

var G__97105 = seq__97032_97071;
var G__97106 = chunk__97039_97072;
var G__97107 = count__97040_97073;
var G__97108 = (i__97041_97074 + (1));
seq__97032_97071 = G__97105;
chunk__97039_97072 = G__97106;
count__97040_97073 = G__97107;
i__97041_97074 = G__97108;
continue;
} else {
var temp__4657__auto___97109 = cljs.core.seq.call(null,seq__97032_97071);
if(temp__4657__auto___97109){
var seq__97032_97112__$1 = temp__4657__auto___97109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__97032_97112__$1)){
var c__36203__auto___97113 = cljs.core.chunk_first.call(null,seq__97032_97112__$1);
var G__97114 = cljs.core.chunk_rest.call(null,seq__97032_97112__$1);
var G__97115 = c__36203__auto___97113;
var G__97116 = cljs.core.count.call(null,c__36203__auto___97113);
var G__97117 = (0);
seq__97032_97071 = G__97114;
chunk__97039_97072 = G__97115;
count__97040_97073 = G__97116;
i__97041_97074 = G__97117;
continue;
} else {
var bitmap_97118__$1 = cljs.core.first.call(null,seq__97032_97112__$1);
var seq__97033_97119 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_97118__$1));
var chunk__97035_97120 = null;
var count__97036_97121 = (0);
var i__97037_97122 = (0);
while(true){
if((i__97037_97122 < count__97036_97121)){
var vec__97054_97123 = cljs.core._nth.call(null,chunk__97035_97120,i__97037_97122);
var idx_97124 = cljs.core.nth.call(null,vec__97054_97123,(0),null);
var value_97125 = cljs.core.nth.call(null,vec__97054_97123,(1),null);
var masked_value_97126 = (value_97125 | (new_bitmap[idx_97124]));
(new_bitmap[idx_97124] = masked_value_97126);

var G__97127 = seq__97033_97119;
var G__97128 = chunk__97035_97120;
var G__97129 = count__97036_97121;
var G__97130 = (i__97037_97122 + (1));
seq__97033_97119 = G__97127;
chunk__97035_97120 = G__97128;
count__97036_97121 = G__97129;
i__97037_97122 = G__97130;
continue;
} else {
var temp__4657__auto___97133__$1 = cljs.core.seq.call(null,seq__97033_97119);
if(temp__4657__auto___97133__$1){
var seq__97033_97134__$1 = temp__4657__auto___97133__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__97033_97134__$1)){
var c__36203__auto___97135 = cljs.core.chunk_first.call(null,seq__97033_97134__$1);
var G__97136 = cljs.core.chunk_rest.call(null,seq__97033_97134__$1);
var G__97137 = c__36203__auto___97135;
var G__97138 = cljs.core.count.call(null,c__36203__auto___97135);
var G__97139 = (0);
seq__97033_97119 = G__97136;
chunk__97035_97120 = G__97137;
count__97036_97121 = G__97138;
i__97037_97122 = G__97139;
continue;
} else {
var vec__97056_97140 = cljs.core.first.call(null,seq__97033_97134__$1);
var idx_97141 = cljs.core.nth.call(null,vec__97056_97140,(0),null);
var value_97142 = cljs.core.nth.call(null,vec__97056_97140,(1),null);
var masked_value_97143 = (value_97142 | (new_bitmap[idx_97141]));
(new_bitmap[idx_97141] = masked_value_97143);

var G__97144 = cljs.core.next.call(null,seq__97033_97134__$1);
var G__97145 = null;
var G__97146 = (0);
var G__97147 = (0);
seq__97033_97119 = G__97144;
chunk__97035_97120 = G__97145;
count__97036_97121 = G__97146;
i__97037_97122 = G__97147;
continue;
}
} else {
}
}
break;
}

var G__97148 = cljs.core.next.call(null,seq__97032_97112__$1);
var G__97149 = null;
var G__97150 = (0);
var G__97151 = (0);
seq__97032_97071 = G__97148;
chunk__97039_97072 = G__97149;
count__97040_97073 = G__97150;
i__97041_97074 = G__97151;
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

loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq97029){
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq97029));
});
/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__36172__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__97186(s__97187){
return (new cljs.core.LazySeq(null,(function (){
var s__97187__$1 = s__97187;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__97187__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var chunk = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36168__auto__ = ((function (s__97187__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__97186_$_iter__97188(s__97189){
return (new cljs.core.LazySeq(null,((function (s__97187__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__97189__$1 = s__97189;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__97189__$1);
if(temp__4657__auto____$1){
var s__97189__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__97189__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__97189__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__97191 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__97190 = (0);
while(true){
if((i__97190 < size__36171__auto__)){
var offset = cljs.core._nth.call(null,c__36170__auto__,i__97190);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__97191,idx);

var G__97214 = (i__97190 + (1));
i__97190 = G__97214;
continue;
} else {
var G__97215 = (i__97190 + (1));
i__97190 = G__97215;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97191),loom$alg_generic$bm_get_indicies_$_iter__97186_$_iter__97188.call(null,cljs.core.chunk_rest.call(null,s__97189__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97191),null);
}
} else {
var offset = cljs.core.first.call(null,s__97189__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__97186_$_iter__97188.call(null,cljs.core.rest.call(null,s__97189__$2)));
} else {
var G__97229 = cljs.core.rest.call(null,s__97189__$2);
s__97189__$1 = G__97229;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__97187__$1,chunk,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__97187__$1,chunk,xs__5205__auto__,temp__4657__auto__))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,loom$alg_generic$bm_get_indicies_$_iter__97186.call(null,cljs.core.rest.call(null,s__97187__$1)));
} else {
var G__97230 = cljs.core.rest.call(null,s__97187__$1);
s__97187__$1 = G__97230;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36016__auto__,k97234,else__36017__auto__){
var self__ = this;
var this__36016__auto____$1 = this;
var G__97240 = (((k97234 instanceof cljs.core.Keyword))?k97234.fqn:null);
switch (G__97240) {
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
return cljs.core.get.call(null,self__.__extmap,k97234,else__36017__auto__);

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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__97233){
var self__ = this;
var G__97233__$1 = this;
return (new cljs.core.RecordIter((0),G__97233__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36021__auto__,k__36022__auto__,G__97233){
var self__ = this;
var this__36021__auto____$1 = this;
var pred__97247 = cljs.core.keyword_identical_QMARK_;
var expr__97248 = k__36022__auto__;
if(cljs.core.truth_(pred__97247.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__97248))){
return (new loom.alg_generic.Ancestry(G__97233,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__97247.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__97248))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__97233,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__97247.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__97248))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__97233,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36022__auto__,G__97233),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36026__auto__){
var self__ = this;
var this__36026__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36013__auto__,G__97233){
var self__ = this;
var this__36013__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__97233,self__.__extmap,self__.__hash));
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

loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__97237){
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__97237),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__97237),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__97237),null,cljs.core.dissoc.call(null,G__97237,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)),null));
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
var len__36461__auto___97290 = arguments.length;
var i__36462__auto___97293 = (0);
while(true){
if((i__36462__auto___97293 < len__36461__auto___97290)){
args__36468__auto__.push((arguments[i__36462__auto___97293]));

var G__97294 = (i__36462__auto___97293 + (1));
i__36462__auto___97293 = G__97294;
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
var map__97286 = ancestry;
var map__97286__$1 = ((((!((map__97286 == null)))?((((map__97286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__97286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97286):map__97286);
var node__GT_idx = cljs.core.get.call(null,map__97286__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__97286__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__97286__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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

loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq97281){
var G__97282 = cljs.core.first.call(null,seq97281);
var seq97281__$1 = cljs.core.next.call(null,seq97281);
var G__97283 = cljs.core.first.call(null,seq97281__$1);
var seq97281__$2 = cljs.core.next.call(null,seq97281__$1);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic(G__97282,G__97283,seq97281__$2);
});
/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__97309 = ancestry;
var map__97309__$1 = ((((!((map__97309 == null)))?((((map__97309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__97309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97309):map__97309);
var node__GT_idx = cljs.core.get.call(null,map__97309__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__97309__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__97321 = ancestry;
var map__97321__$1 = ((((!((map__97321 == null)))?((((map__97321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__97321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97321):map__97321);
var node__GT_idx = cljs.core.get.call(null,map__97321__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__97321__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__97321__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});
