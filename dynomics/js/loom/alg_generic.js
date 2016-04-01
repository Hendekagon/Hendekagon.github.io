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
return (function (p1__85570_SHARP_){
return loom$alg_generic$paths.call(null,preds,cljs.core.conj.call(null,path,p1__85570_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__85569_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__85569_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__85577_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__85577_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__85592){
var vec__85593 = p__85592;
var n = cljs.core.nth.call(null,vec__85593,(0),null);
var p = cljs.core.nth.call(null,vec__85593,(1),null);
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
var args__36498__auto__ = [];
var len__36491__auto___85629 = arguments.length;
var i__36492__auto___85630 = (0);
while(true){
if((i__36492__auto___85630 < len__36491__auto___85629)){
args__36498__auto__.push((arguments[i__36492__auto___85630]));

var G__85631 = (i__36492__auto___85630 + (1));
i__36492__auto___85630 = G__85631;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((2) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36499__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__85617){
var map__85618 = p__85617;
var map__85618__$1 = ((((!((map__85618 == null)))?((((map__85618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85618):map__85618);
var seen = cljs.core.get.call(null,map__85618__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__85618,map__85618__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__4657__auto__,map__85618,map__85618__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__4657__auto__,map__85618,map__85618__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__85618,map__85618__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq85609){
var G__85610 = cljs.core.first.call(null,seq85609);
var seq85609__$1 = cljs.core.next.call(null,seq85609);
var G__85611 = cljs.core.first.call(null,seq85609__$1);
var seq85609__$2 = cljs.core.next.call(null,seq85609__$1);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic(G__85610,G__85611,seq85609__$2);
});
/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.pre_edge_traverse = (function loom$alg_generic$pre_edge_traverse(var_args){
var args__36498__auto__ = [];
var len__36491__auto___85661 = arguments.length;
var i__36492__auto___85663 = (0);
while(true){
if((i__36492__auto___85663 < len__36491__auto___85661)){
args__36498__auto__.push((arguments[i__36492__auto___85663]));

var G__85664 = (i__36492__auto___85663 + (1));
i__36492__auto___85663 = G__85664;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((2) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36499__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__85646){
var map__85647 = p__85646;
var map__85647__$1 = ((((!((map__85647 == null)))?((((map__85647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85647):map__85647);
var seen = cljs.core.get.call(null,map__85647__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__85647,map__85647__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__4655__auto__)){
var nbr = temp__4655__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__85647,map__85647__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__85647,map__85647__$1,seen))
,null,null)));
} else {
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__85693 = successors__$1;
var G__85694 = parent;
var G__85695 = cljs.core.peek.call(null,nbrstack);
var G__85696 = cljs.core.pop.call(null,stack);
var G__85697 = cljs.core.pop.call(null,nbrstack);
var G__85698 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__85693;
start__$1 = G__85694;
nbrs = G__85695;
stack = G__85696;
nbrstack = G__85697;
seen__$1 = G__85698;
continue;
} else {
return null;
}
}
break;
}
});})(map__85647,map__85647__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq85639){
var G__85640 = cljs.core.first.call(null,seq85639);
var seq85639__$1 = cljs.core.next.call(null,seq85639);
var G__85641 = cljs.core.first.call(null,seq85639__$1);
var seq85639__$2 = cljs.core.next.call(null,seq85639__$1);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__85640,G__85641,seq85639__$2);
});
/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__36498__auto__ = [];
var len__36491__auto___85706 = arguments.length;
var i__36492__auto___85707 = (0);
while(true){
if((i__36492__auto___85707 < len__36491__auto___85706)){
args__36498__auto__.push((arguments[i__36492__auto___85707]));

var G__85708 = (i__36492__auto___85707 + (1));
i__36492__auto___85707 = G__85708;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((2) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36499__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__85702){
var map__85703 = p__85702;
var map__85703__$1 = ((((!((map__85703 == null)))?((((map__85703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85703):map__85703);
var seen = cljs.core.get.call(null,map__85703__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__85703__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__85717 = seen__$2;
var G__85718 = cljs.core.assoc.call(null,preds,u,v);
var G__85719 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__85717;
preds = G__85718;
stack = G__85719;
continue;
} else {
var G__85720 = seen__$2;
var G__85721 = preds;
var G__85722 = cljs.core.pop.call(null,stack);
seen__$1 = G__85720;
preds = G__85721;
stack = G__85722;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq85699){
var G__85700 = cljs.core.first.call(null,seq85699);
var seq85699__$1 = cljs.core.next.call(null,seq85699);
var G__85701 = cljs.core.first.call(null,seq85699__$1);
var seq85699__$2 = cljs.core.next.call(null,seq85699__$1);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(G__85700,G__85701,seq85699__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__36498__auto__ = [];
var len__36491__auto___85736 = arguments.length;
var i__36492__auto___85737 = (0);
while(true){
if((i__36492__auto___85737 < len__36491__auto___85736)){
args__36498__auto__.push((arguments[i__36492__auto___85737]));

var G__85738 = (i__36492__auto___85737 + (1));
i__36492__auto___85737 = G__85738;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((2) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36499__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__85726){
var map__85727 = p__85726;
var map__85727__$1 = ((((!((map__85727 == null)))?((((map__85727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85727):map__85727);
var seen = cljs.core.get.call(null,map__85727__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__85727__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__85740 = seen__$2;
var G__85741 = cljs.core.conj.call(null,result,v);
var G__85742 = cljs.core.pop.call(null,stack);
seen__$1 = G__85740;
result = G__85741;
stack = G__85742;
continue;
} else {
var G__85743 = seen__$2;
var G__85744 = result;
var G__85745 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__85743;
result = G__85744;
stack = G__85745;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq85723){
var G__85724 = cljs.core.first.call(null,seq85723);
var seq85723__$1 = cljs.core.next.call(null,seq85723);
var G__85725 = cljs.core.first.call(null,seq85723__$1);
var seq85723__$2 = cljs.core.next.call(null,seq85723__$1);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__85724,G__85725,seq85723__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.post_edge_traverse = (function loom$alg_generic$post_edge_traverse(var_args){
var args__36498__auto__ = [];
var len__36491__auto___85764 = arguments.length;
var i__36492__auto___85765 = (0);
while(true){
if((i__36492__auto___85765 < len__36491__auto___85764)){
args__36498__auto__.push((arguments[i__36492__auto___85765]));

var G__85767 = (i__36492__auto___85765 + (1));
i__36492__auto___85765 = G__85767;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((2) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36499__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__85749){
var map__85750 = p__85749;
var map__85750__$1 = ((((!((map__85750 == null)))?((((map__85750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85750):map__85750);
var seen = cljs.core.get.call(null,map__85750__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__85750__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__85771 = start__$1;
var G__85772 = cljs.core.next.call(null,nbrs);
var G__85773 = stack;
var G__85774 = nbrstack;
var G__85775 = seen__$2;
var G__85776 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__85771;
nbrs = G__85772;
stack = G__85773;
nbrstack = G__85774;
seen__$1 = G__85775;
edges = G__85776;
continue;
} else {
var G__85777 = nbr;
var G__85778 = successors.call(null,nbr);
var G__85779 = cljs.core.conj.call(null,stack,start__$1);
var G__85780 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__85781 = seen__$2;
var G__85782 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__85777;
nbrs = G__85778;
stack = G__85779;
nbrstack = G__85780;
seen__$1 = G__85781;
edges = G__85782;
continue;
}
} else {
var temp__4655__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4655__auto____$1)){
var parent = temp__4655__auto____$1;
var G__85795 = parent;
var G__85796 = cljs.core.peek.call(null,nbrstack);
var G__85797 = cljs.core.pop.call(null,stack);
var G__85798 = cljs.core.pop.call(null,nbrstack);
var G__85799 = seen__$2;
var G__85800 = edges;
start__$1 = G__85795;
nbrs = G__85796;
stack = G__85797;
nbrstack = G__85798;
seen__$1 = G__85799;
edges = G__85800;
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

loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq85746){
var G__85747 = cljs.core.first.call(null,seq85746);
var seq85746__$1 = cljs.core.next.call(null,seq85746);
var G__85748 = cljs.core.first.call(null,seq85746__$1);
var seq85746__$2 = cljs.core.next.call(null,seq85746__$1);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__85747,G__85748,seq85746__$2);
});
/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var args85802 = [];
var len__36491__auto___85810 = arguments.length;
var i__36492__auto___85811 = (0);
while(true){
if((i__36492__auto___85811 < len__36491__auto___85810)){
args85802.push((arguments[i__36492__auto___85811]));

var G__85812 = (i__36492__auto___85811 + (1));
i__36492__auto___85811 = G__85812;
continue;
} else {
}
break;
}

var G__85808 = args85802.length;
switch (G__85808) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args85802.length)].join('')));

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
var G__85822 = seen__$2;
var G__85823 = explored__$1;
var G__85824 = result;
var G__85825 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__85822;
explored__$1 = G__85823;
result = G__85824;
stack = G__85825;
continue;
}
} else {
var G__85826 = seen__$2;
var G__85827 = cljs.core.conj.call(null,explored__$1,v);
var G__85828 = cljs.core.conj.call(null,result,v);
var G__85829 = cljs.core.pop.call(null,stack);
seen__$1 = G__85826;
explored__$1 = G__85827;
result = G__85828;
stack = G__85829;
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
var args__36498__auto__ = [];
var len__36491__auto___85893 = arguments.length;
var i__36492__auto___85894 = (0);
while(true){
if((i__36492__auto___85894 < len__36491__auto___85893)){
args__36498__auto__.push((arguments[i__36492__auto___85894]));

var G__85895 = (i__36492__auto___85894 + (1));
i__36492__auto___85894 = G__85895;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((2) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36499__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__85840){
var map__85841 = p__85840;
var map__85841__$1 = ((((!((map__85841 == null)))?((((map__85841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85841):map__85841);
var f = cljs.core.get.call(null,map__85841__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__85841__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__85841__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__35422__auto__ = f;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return ((function (or__35422__auto__,map__85841,map__85841__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__35422__auto__,map__85841,map__85841__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__35422__auto__ = when;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__85841,map__85841__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__4657__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__85875 = temp__4657__auto__;
var node = cljs.core.nth.call(null,vec__85875,(0),null);
var depth = cljs.core.nth.call(null,vec__85875,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__85875,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__85841,map__85841__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__85875,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__85841,map__85841__$1,f,when,seen){
return (function (p1__85831_SHARP_){
return nbr_pred.call(null,p1__85831_SHARP_,node,(depth + (1)));
});})(vec__85875,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__85841,map__85841__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__85875,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__85841,map__85841__$1,f,when,seen){
return (function (p1__85830_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__85830_SHARP_);
});})(vec__85875,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__85841,map__85841__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__36202__auto__ = ((function (nbrs,vec__85875,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__85841,map__85841__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__85876(s__85877){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__85875,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__85841,map__85841__$1,f,when,seen){
return (function (){
var s__85877__$1 = s__85877;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__85877__$1);
if(temp__4657__auto____$1){
var s__85877__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85877__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__85877__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__85879 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__85878 = (0);
while(true){
if((i__85878 < size__36201__auto__)){
var nbr = cljs.core._nth.call(null,c__36200__auto__,i__85878);
cljs.core.chunk_append.call(null,b__85879,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__85902 = (i__85878 + (1));
i__85878 = G__85902;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85879),loom$alg_generic$step_$_iter__85876.call(null,cljs.core.chunk_rest.call(null,s__85877__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85879),null);
}
} else {
var nbr = cljs.core.first.call(null,s__85877__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__85876.call(null,cljs.core.rest.call(null,s__85877__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__85875,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__85841,map__85841__$1,f,when,seen))
,null,null));
});})(nbrs,vec__85875,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__85841,map__85841__$1,f,when,seen))
;
return iter__36202__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__85875,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__85841,map__85841__$1,f,when,seen){
return (function (p1__85832_SHARP_,p2__85833_SHARP_){
return cljs.core.assoc.call(null,p1__85832_SHARP_,p2__85833_SHARP_,node);
});})(nbrs,vec__85875,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__85841,map__85841__$1,f,when,seen))
,preds,nbrs));
});})(vec__85875,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__85841,map__85841__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__85841,map__85841__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.fromArray([start,null], true, false),(function (){var iter__36202__auto__ = ((function (f__$1,nbr_pred,map__85841,map__85841__$1,f,when,seen){
return (function loom$alg_generic$iter__85881(s__85882){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__85841,map__85841__$1,f,when,seen){
return (function (){
var s__85882__$1 = s__85882;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__85882__$1);
if(temp__4657__auto__){
var s__85882__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85882__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__85882__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__85884 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__85883 = (0);
while(true){
if((i__85883 < size__36201__auto__)){
var s = cljs.core._nth.call(null,c__36200__auto__,i__85883);
cljs.core.chunk_append.call(null,b__85884,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__85909 = (i__85883 + (1));
i__85883 = G__85909;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85884),loom$alg_generic$iter__85881.call(null,cljs.core.chunk_rest.call(null,s__85882__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85884),null);
}
} else {
var s = cljs.core.first.call(null,s__85882__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__85881.call(null,cljs.core.rest.call(null,s__85882__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__85841,map__85841__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__85841,map__85841__$1,f,when,seen))
;
return iter__36202__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq85834){
var G__85835 = cljs.core.first.call(null,seq85834);
var seq85834__$1 = cljs.core.next.call(null,seq85834);
var G__85836 = cljs.core.first.call(null,seq85834__$1);
var seq85834__$2 = cljs.core.next.call(null,seq85834__$1);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__85835,G__85836,seq85834__$2);
});
/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__36498__auto__ = [];
var len__36491__auto___85925 = arguments.length;
var i__36492__auto___85926 = (0);
while(true){
if((i__36492__auto___85926 < len__36491__auto___85925)){
args__36498__auto__.push((arguments[i__36492__auto___85926]));

var G__85927 = (i__36492__auto___85926 + (1));
i__36492__auto___85926 = G__85927;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((2) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36499__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__85921){
var map__85922 = p__85921;
var map__85922__$1 = ((((!((map__85922 == null)))?((((map__85922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85922):map__85922);
var seen = cljs.core.get.call(null,map__85922__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__85922,map__85922__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__85922,map__85922__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq85917){
var G__85918 = cljs.core.first.call(null,seq85917);
var seq85917__$1 = cljs.core.next.call(null,seq85917);
var G__85919 = cljs.core.first.call(null,seq85917__$1);
var seq85917__$2 = cljs.core.next.call(null,seq85917__$1);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic(G__85918,G__85919,seq85917__$2);
});
/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__36498__auto__ = [];
var len__36491__auto___85946 = arguments.length;
var i__36492__auto___85947 = (0);
while(true){
if((i__36492__auto___85947 < len__36491__auto___85946)){
args__36498__auto__.push((arguments[i__36492__auto___85947]));

var G__85951 = (i__36492__auto___85947 + (1));
i__36492__auto___85947 = G__85951;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((3) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36499__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__85937){
var map__85938 = p__85937;
var map__85938__$1 = ((((!((map__85938 == null)))?((((map__85938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85938):map__85938);
var opts = map__85938__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__4657__auto__ = cljs.core.some.call(null,((function (opts__$1,map__85938,map__85938__$1,opts){
return (function (p__85940){
var vec__85941 = p__85940;
var _ = cljs.core.nth.call(null,vec__85941,(0),null);
var pm = cljs.core.nth.call(null,vec__85941,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__85941,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__85938,map__85938__$1,opts))
,cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__4657__auto__)){
var preds = temp__4657__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq85933){
var G__85934 = cljs.core.first.call(null,seq85933);
var seq85933__$1 = cljs.core.next.call(null,seq85933);
var G__85935 = cljs.core.first.call(null,seq85933__$1);
var seq85933__$2 = cljs.core.next.call(null,seq85933__$1);
var G__85936 = cljs.core.first.call(null,seq85933__$2);
var seq85933__$3 = cljs.core.next.call(null,seq85933__$2);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__85934,G__85935,G__85936,seq85933__$3);
});
/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__85958 = m2;
var G__85959 = m1;
m1 = G__85958;
m2 = G__85959;
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
if(cljs.core.truth_((function (){var or__35422__auto__ = cljs.core.seq.call(null,intersects);
if(or__35422__auto__){
return or__35422__auto__;
} else {
var or__35422__auto____$1 = loom.alg_generic.future_done_QMARK_.call(null,search1);
if(cljs.core.truth_(or__35422__auto____$1)){
return or__35422__auto____$1;
} else {
return loom.alg_generic.future_done_QMARK_.call(null,search2);
}
}
})())){
cljs.core.reset_BANG_.call(null,done_QMARK_,true);

if(cljs.core.seq.call(null,intersects)){
var intersect = cljs.core.apply.call(null,cljs.core.min_key,((function (intersects,done_QMARK_,preds1,preds2,search,search1,search2,find_intersects){
return (function (p1__85960_SHARP_){
return (cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds1),p1__85960_SHARP_)) + cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds2),p1__85960_SHARP_)));
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
var G__85966 = find_intersects.call(null);
intersects = G__85966;
continue;
}
break;
}
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__36202__auto__ = (function loom$alg_generic$reverse_edges_$_iter__85981(s__85982){
return (new cljs.core.LazySeq(null,(function (){
var s__85982__$1 = s__85982;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__85982__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var node = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36198__auto__ = ((function (s__85982__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__85981_$_iter__85983(s__85984){
return (new cljs.core.LazySeq(null,((function (s__85982__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__85984__$1 = s__85984;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__85984__$1);
if(temp__4657__auto____$1){
var s__85984__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85984__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__85984__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__85986 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__85985 = (0);
while(true){
if((i__85985 < size__36201__auto__)){
var nbr = cljs.core._nth.call(null,c__36200__auto__,i__85985);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
cljs.core.chunk_append.call(null,b__85986,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__86015 = (i__85985 + (1));
i__85985 = G__86015;
continue;
} else {
var G__86016 = (i__85985 + (1));
i__85985 = G__86016;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85986),loom$alg_generic$reverse_edges_$_iter__85981_$_iter__85983.call(null,cljs.core.chunk_rest.call(null,s__85984__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85986),null);
}
} else {
var nbr = cljs.core.first.call(null,s__85984__$2);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__85981_$_iter__85983.call(null,cljs.core.rest.call(null,s__85984__$2)));
} else {
var G__86032 = cljs.core.rest.call(null,s__85984__$2);
s__85984__$1 = G__86032;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__85982__$1,node,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__85982__$1,node,xs__5205__auto__,temp__4657__auto__))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,successor_fn.call(null,node)));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,loom$alg_generic$reverse_edges_$_iter__85981.call(null,cljs.core.rest.call(null,s__85982__$1)));
} else {
var G__86034 = cljs.core.rest.call(null,s__85982__$1);
s__85982__$1 = G__86034;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36202__auto__.call(null,nodes);
});
loom.alg_generic.conj_paths = (function loom$alg_generic$conj_paths(from_map,to_map,matches){
var iter__36202__auto__ = (function loom$alg_generic$conj_paths_$_iter__86076(s__86077){
return (new cljs.core.LazySeq(null,(function (){
var s__86077__$1 = s__86077;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__86077__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36198__auto__ = ((function (s__86077__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__86076_$_iter__86078(s__86079){
return (new cljs.core.LazySeq(null,((function (s__86077__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__86079__$1 = s__86079;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__86079__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var from = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__36198__auto__ = ((function (s__86079__$1,s__86077__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__86076_$_iter__86078_$_iter__86080(s__86081){
return (new cljs.core.LazySeq(null,((function (s__86079__$1,s__86077__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__86081__$1 = s__86081;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__86081__$1);
if(temp__4657__auto____$2){
var s__86081__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86081__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__86081__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__86083 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__86082 = (0);
while(true){
if((i__86082 < size__36201__auto__)){
var to = cljs.core._nth.call(null,c__36200__auto__,i__86082);
cljs.core.chunk_append.call(null,b__86083,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__86148 = (i__86082 + (1));
i__86082 = G__86148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86083),loom$alg_generic$conj_paths_$_iter__86076_$_iter__86078_$_iter__86080.call(null,cljs.core.chunk_rest.call(null,s__86081__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86083),null);
}
} else {
var to = cljs.core.first.call(null,s__86081__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__86076_$_iter__86078_$_iter__86080.call(null,cljs.core.rest.call(null,s__86081__$2)));
}
} else {
return null;
}
break;
}
});})(s__86079__$1,s__86077__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__86079__$1,s__86077__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,loom$alg_generic$conj_paths_$_iter__86076_$_iter__86078.call(null,cljs.core.rest.call(null,s__86079__$1)));
} else {
var G__86153 = cljs.core.rest.call(null,s__86079__$1);
s__86079__$1 = G__86153;
continue;
}
} else {
return null;
}
break;
}
});})(s__86077__$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__86077__$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,loom$alg_generic$conj_paths_$_iter__86076.call(null,cljs.core.rest.call(null,s__86077__$1)));
} else {
var G__86156 = cljs.core.rest.call(null,s__86077__$1);
s__86077__$1 = G__86156;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36202__auto__.call(null,matches);
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
return (function (p1__86157_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__86157_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__86166){
var vec__86167 = p__86166;
var key = cljs.core.nth.call(null,vec__86167,(0),null);
var val = cljs.core.nth.call(null,vec__86167,(1),null);
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
var G__86191 = outgoing__$1;
var G__86192 = incoming;
var G__86193 = q1__$1;
var G__86194 = q2;
outgoing = G__86191;
incoming = G__86192;
q1 = G__86193;
q2 = G__86194;
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
var G__86200 = outgoing;
var G__86201 = incoming__$1;
var G__86202 = q1;
var G__86203 = q2__$1;
outgoing = G__86200;
incoming = G__86201;
q1 = G__86202;
q2 = G__86203;
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
var args86208 = [];
var len__36491__auto___86245 = arguments.length;
var i__36492__auto___86246 = (0);
while(true){
if((i__36492__auto___86246 < len__36491__auto___86245)){
args86208.push((arguments[i__36492__auto___86246]));

var G__86247 = (i__36492__auto___86246 + (1));
i__36492__auto___86246 = G__86247;
continue;
} else {
}
break;
}

var G__86214 = args86208.length;
switch (G__86214) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86208.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__86231){
var vec__86239 = p__86231;
var state = cljs.core.nth.call(null,vec__86239,(0),null);
var pq = cljs.core.nth.call(null,vec__86239,(1),null);
var temp__4657__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__86240 = temp__4657__auto__;
var dist_su = cljs.core.nth.call(null,vec__86240,(0),null);
var _ = cljs.core.nth.call(null,vec__86240,(1),null);
var u = cljs.core.nth.call(null,vec__86240,(2),null);
var fpq = vec__86240;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__86240,dist_su,_,u,fpq,temp__4657__auto__,vec__86239,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__86240,dist_su,_,u,fpq,temp__4657__auto__,vec__86239,state,pq){
return (function (p__86241,v){
var vec__86242 = p__86241;
var state__$1 = cljs.core.nth.call(null,vec__86242,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__86242,(1),null);
var dist_suv = (dist_su + dist.call(null,u,v));
var dist_sv = cljs.core.first.call(null,state__$1.call(null,v));
if(cljs.core.truth_((function (){var and__35410__auto__ = dist_sv;
if(cljs.core.truth_(and__35410__auto__)){
return (dist_suv >= dist_sv);
} else {
return and__35410__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,pq__$1], null);
} else {
var pq__$2 = (cljs.core.truth_(dist_sv)?cljs.core.disj.call(null,pq__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_sv,cljs.core.hash.call(null,v),v], null)):pq__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state__$1,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,u], null)),cljs.core.conj.call(null,pq__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,cljs.core.hash.call(null,v),v], null))], null);
}
});})(vec__86240,dist_su,_,u,fpq,temp__4657__auto__,vec__86239,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__86240,dist_su,_,u,fpq,temp__4657__auto__,vec__86239,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__86266){
var vec__86267 = p__86266;
var n = cljs.core.nth.call(null,vec__86267,(0),null);
var vec__86268 = cljs.core.nth.call(null,vec__86267,(1),null);
var d = cljs.core.nth.call(null,vec__86268,(0),null);
var p = cljs.core.nth.call(null,vec__86268,(1),null);
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
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__86276){
var vec__86277 = p__86276;
var node = cljs.core.nth.call(null,vec__86277,(0),null);
var _ = cljs.core.nth.call(null,vec__86277,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__86278 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__86278,(0),null);
var end_state = cljs.core.nth.call(null,vec__86278,(1),null);
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
var size = (function (){var x__35753__auto__ = cljs.core.count.call(null,bitmap);
var y__35754__auto__ = loom.alg_generic.bm_longs.call(null,(idx + (1)));
return ((x__35753__auto__ > y__35754__auto__) ? x__35753__auto__ : y__35754__auto__);
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
var args__36498__auto__ = [];
var len__36491__auto___86343 = arguments.length;
var i__36492__auto___86344 = (0);
while(true){
if((i__36492__auto___86344 < len__36491__auto___86343)){
args__36498__auto__.push((arguments[i__36492__auto___86344]));

var G__86345 = (i__36492__auto___86344 + (1));
i__36492__auto___86344 = G__86345;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((0) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((0)),(0),null)):null);
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(argseq__36499__auto__);
});

loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic = (function (bitmaps){
if(cljs.core.empty_QMARK_.call(null,bitmaps)){
return loom.alg_generic.bm_new.call(null);
} else {
var size = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,bitmaps));
var bitmap = cljs.core.first.call(null,bitmaps);
var n_zeros = (size - cljs.core.count.call(null,bitmap));
var new_bitmap = bitmap.slice().concat((new Array(n_zeros)).fill((0)));
var seq__86317_86348 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__86324_86349 = null;
var count__86325_86350 = (0);
var i__86326_86351 = (0);
while(true){
if((i__86326_86351 < count__86325_86350)){
var bitmap_86354__$1 = cljs.core._nth.call(null,chunk__86324_86349,i__86326_86351);
var seq__86327_86355 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_86354__$1));
var chunk__86329_86356 = null;
var count__86330_86357 = (0);
var i__86331_86358 = (0);
while(true){
if((i__86331_86358 < count__86330_86357)){
var vec__86334_86359 = cljs.core._nth.call(null,chunk__86329_86356,i__86331_86358);
var idx_86360 = cljs.core.nth.call(null,vec__86334_86359,(0),null);
var value_86361 = cljs.core.nth.call(null,vec__86334_86359,(1),null);
var masked_value_86362 = (value_86361 | (new_bitmap[idx_86360]));
(new_bitmap[idx_86360] = masked_value_86362);

var G__86365 = seq__86327_86355;
var G__86366 = chunk__86329_86356;
var G__86367 = count__86330_86357;
var G__86368 = (i__86331_86358 + (1));
seq__86327_86355 = G__86365;
chunk__86329_86356 = G__86366;
count__86330_86357 = G__86367;
i__86331_86358 = G__86368;
continue;
} else {
var temp__4657__auto___86369 = cljs.core.seq.call(null,seq__86327_86355);
if(temp__4657__auto___86369){
var seq__86327_86370__$1 = temp__4657__auto___86369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86327_86370__$1)){
var c__36233__auto___86371 = cljs.core.chunk_first.call(null,seq__86327_86370__$1);
var G__86372 = cljs.core.chunk_rest.call(null,seq__86327_86370__$1);
var G__86373 = c__36233__auto___86371;
var G__86374 = cljs.core.count.call(null,c__36233__auto___86371);
var G__86375 = (0);
seq__86327_86355 = G__86372;
chunk__86329_86356 = G__86373;
count__86330_86357 = G__86374;
i__86331_86358 = G__86375;
continue;
} else {
var vec__86338_86376 = cljs.core.first.call(null,seq__86327_86370__$1);
var idx_86377 = cljs.core.nth.call(null,vec__86338_86376,(0),null);
var value_86378 = cljs.core.nth.call(null,vec__86338_86376,(1),null);
var masked_value_86381 = (value_86378 | (new_bitmap[idx_86377]));
(new_bitmap[idx_86377] = masked_value_86381);

var G__86382 = cljs.core.next.call(null,seq__86327_86370__$1);
var G__86383 = null;
var G__86384 = (0);
var G__86385 = (0);
seq__86327_86355 = G__86382;
chunk__86329_86356 = G__86383;
count__86330_86357 = G__86384;
i__86331_86358 = G__86385;
continue;
}
} else {
}
}
break;
}

var G__86388 = seq__86317_86348;
var G__86389 = chunk__86324_86349;
var G__86390 = count__86325_86350;
var G__86391 = (i__86326_86351 + (1));
seq__86317_86348 = G__86388;
chunk__86324_86349 = G__86389;
count__86325_86350 = G__86390;
i__86326_86351 = G__86391;
continue;
} else {
var temp__4657__auto___86393 = cljs.core.seq.call(null,seq__86317_86348);
if(temp__4657__auto___86393){
var seq__86317_86395__$1 = temp__4657__auto___86393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86317_86395__$1)){
var c__36233__auto___86396 = cljs.core.chunk_first.call(null,seq__86317_86395__$1);
var G__86397 = cljs.core.chunk_rest.call(null,seq__86317_86395__$1);
var G__86398 = c__36233__auto___86396;
var G__86399 = cljs.core.count.call(null,c__36233__auto___86396);
var G__86400 = (0);
seq__86317_86348 = G__86397;
chunk__86324_86349 = G__86398;
count__86325_86350 = G__86399;
i__86326_86351 = G__86400;
continue;
} else {
var bitmap_86404__$1 = cljs.core.first.call(null,seq__86317_86395__$1);
var seq__86318_86405 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_86404__$1));
var chunk__86320_86406 = null;
var count__86321_86407 = (0);
var i__86322_86408 = (0);
while(true){
if((i__86322_86408 < count__86321_86407)){
var vec__86339_86411 = cljs.core._nth.call(null,chunk__86320_86406,i__86322_86408);
var idx_86412 = cljs.core.nth.call(null,vec__86339_86411,(0),null);
var value_86413 = cljs.core.nth.call(null,vec__86339_86411,(1),null);
var masked_value_86415 = (value_86413 | (new_bitmap[idx_86412]));
(new_bitmap[idx_86412] = masked_value_86415);

var G__86419 = seq__86318_86405;
var G__86420 = chunk__86320_86406;
var G__86421 = count__86321_86407;
var G__86422 = (i__86322_86408 + (1));
seq__86318_86405 = G__86419;
chunk__86320_86406 = G__86420;
count__86321_86407 = G__86421;
i__86322_86408 = G__86422;
continue;
} else {
var temp__4657__auto___86423__$1 = cljs.core.seq.call(null,seq__86318_86405);
if(temp__4657__auto___86423__$1){
var seq__86318_86425__$1 = temp__4657__auto___86423__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86318_86425__$1)){
var c__36233__auto___86426 = cljs.core.chunk_first.call(null,seq__86318_86425__$1);
var G__86427 = cljs.core.chunk_rest.call(null,seq__86318_86425__$1);
var G__86428 = c__36233__auto___86426;
var G__86429 = cljs.core.count.call(null,c__36233__auto___86426);
var G__86430 = (0);
seq__86318_86405 = G__86427;
chunk__86320_86406 = G__86428;
count__86321_86407 = G__86429;
i__86322_86408 = G__86430;
continue;
} else {
var vec__86340_86433 = cljs.core.first.call(null,seq__86318_86425__$1);
var idx_86434 = cljs.core.nth.call(null,vec__86340_86433,(0),null);
var value_86435 = cljs.core.nth.call(null,vec__86340_86433,(1),null);
var masked_value_86436 = (value_86435 | (new_bitmap[idx_86434]));
(new_bitmap[idx_86434] = masked_value_86436);

var G__86437 = cljs.core.next.call(null,seq__86318_86425__$1);
var G__86438 = null;
var G__86439 = (0);
var G__86440 = (0);
seq__86318_86405 = G__86437;
chunk__86320_86406 = G__86438;
count__86321_86407 = G__86439;
i__86322_86408 = G__86440;
continue;
}
} else {
}
}
break;
}

var G__86443 = cljs.core.next.call(null,seq__86317_86395__$1);
var G__86444 = null;
var G__86445 = (0);
var G__86446 = (0);
seq__86317_86348 = G__86443;
chunk__86324_86349 = G__86444;
count__86325_86350 = G__86445;
i__86326_86351 = G__86446;
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

loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq86300){
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86300));
});
/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__36202__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__86477(s__86478){
return (new cljs.core.LazySeq(null,(function (){
var s__86478__$1 = s__86478;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__86478__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var chunk = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36198__auto__ = ((function (s__86478__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__86477_$_iter__86479(s__86480){
return (new cljs.core.LazySeq(null,((function (s__86478__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__86480__$1 = s__86480;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__86480__$1);
if(temp__4657__auto____$1){
var s__86480__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86480__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__86480__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__86482 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__86481 = (0);
while(true){
if((i__86481 < size__36201__auto__)){
var offset = cljs.core._nth.call(null,c__36200__auto__,i__86481);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__86482,idx);

var G__86506 = (i__86481 + (1));
i__86481 = G__86506;
continue;
} else {
var G__86507 = (i__86481 + (1));
i__86481 = G__86507;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86482),loom$alg_generic$bm_get_indicies_$_iter__86477_$_iter__86479.call(null,cljs.core.chunk_rest.call(null,s__86480__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86482),null);
}
} else {
var offset = cljs.core.first.call(null,s__86480__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__86477_$_iter__86479.call(null,cljs.core.rest.call(null,s__86480__$2)));
} else {
var G__86510 = cljs.core.rest.call(null,s__86480__$2);
s__86480__$1 = G__86510;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__86478__$1,chunk,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__86478__$1,chunk,xs__5205__auto__,temp__4657__auto__))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,loom$alg_generic$bm_get_indicies_$_iter__86477.call(null,cljs.core.rest.call(null,s__86478__$1)));
} else {
var G__86511 = cljs.core.rest.call(null,s__86478__$1);
s__86478__$1 = G__86511;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36202__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,bitmap)));
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
loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36044__auto__,k__36045__auto__){
var self__ = this;
var this__36044__auto____$1 = this;
return cljs.core._lookup.call(null,this__36044__auto____$1,k__36045__auto__,null);
});

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36046__auto__,k86513,else__36047__auto__){
var self__ = this;
var this__36046__auto____$1 = this;
var G__86519 = (((k86513 instanceof cljs.core.Keyword))?k86513.fqn:null);
switch (G__86519) {
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
return cljs.core.get.call(null,self__.__extmap,k86513,else__36047__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36058__auto__,writer__36059__auto__,opts__36060__auto__){
var self__ = this;
var this__36058__auto____$1 = this;
var pr_pair__36061__auto__ = ((function (this__36058__auto____$1){
return (function (keyval__36062__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36059__auto__,cljs.core.pr_writer,""," ","",opts__36060__auto__,keyval__36062__auto__);
});})(this__36058__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36059__auto__,pr_pair__36061__auto__,"#loom.alg-generic.Ancestry{",", ","}",opts__36060__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$ = true;

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__86512){
var self__ = this;
var G__86512__$1 = this;
return (new cljs.core.RecordIter((0),G__86512__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36042__auto__){
var self__ = this;
var this__36042__auto____$1 = this;
return self__.__meta;
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36038__auto__){
var self__ = this;
var this__36038__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36048__auto__){
var self__ = this;
var this__36048__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36039__auto__){
var self__ = this;
var this__36039__auto____$1 = this;
var h__35857__auto__ = self__.__hash;
if(!((h__35857__auto__ == null))){
return h__35857__auto__;
} else {
var h__35857__auto____$1 = cljs.core.hash_imap.call(null,this__36039__auto____$1);
self__.__hash = h__35857__auto____$1;

return h__35857__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36040__auto__,other__36041__auto__){
var self__ = this;
var this__36040__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35410__auto__ = other__36041__auto__;
if(cljs.core.truth_(and__35410__auto__)){
var and__35410__auto____$1 = (this__36040__auto____$1.constructor === other__36041__auto__.constructor);
if(and__35410__auto____$1){
return cljs.core.equiv_map.call(null,this__36040__auto____$1,other__36041__auto__);
} else {
return and__35410__auto____$1;
}
} else {
return and__35410__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36053__auto__,k__36054__auto__){
var self__ = this;
var this__36053__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),null], null), null),k__36054__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36053__auto____$1),self__.__meta),k__36054__auto__);
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36054__auto__)),null));
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36051__auto__,k__36052__auto__,G__86512){
var self__ = this;
var this__36051__auto____$1 = this;
var pred__86527 = cljs.core.keyword_identical_QMARK_;
var expr__86528 = k__36052__auto__;
if(cljs.core.truth_(pred__86527.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__86528))){
return (new loom.alg_generic.Ancestry(G__86512,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__86527.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__86528))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__86512,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__86527.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__86528))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__86512,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36052__auto__,G__86512),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36056__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36043__auto__,G__86512){
var self__ = this;
var this__36043__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__86512,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36049__auto__,entry__36050__auto__){
var self__ = this;
var this__36049__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36050__auto__)){
return cljs.core._assoc.call(null,this__36049__auto____$1,cljs.core._nth.call(null,entry__36050__auto__,(0)),cljs.core._nth.call(null,entry__36050__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36049__auto____$1,entry__36050__auto__);
}
});

loom.alg_generic.Ancestry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node->idx","node->idx",1793236754,null),new cljs.core.Symbol(null,"idx->node","idx->node",-842528594,null),new cljs.core.Symbol(null,"bitmaps","bitmaps",-1506736927,null)], null);
});

loom.alg_generic.Ancestry.cljs$lang$type = true;

loom.alg_generic.Ancestry.cljs$lang$ctorPrSeq = (function (this__36078__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.alg-generic/Ancestry");
});

loom.alg_generic.Ancestry.cljs$lang$ctorPrWriter = (function (this__36078__auto__,writer__36079__auto__){
return cljs.core._write.call(null,writer__36079__auto__,"loom.alg-generic/Ancestry");
});

loom.alg_generic.__GT_Ancestry = (function loom$alg_generic$__GT_Ancestry(node__GT_idx,idx__GT_node,bitmaps){
return (new loom.alg_generic.Ancestry(node__GT_idx,idx__GT_node,bitmaps,null,null,null));
});

loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__86515){
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__86515),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__86515),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__86515),null,cljs.core.dissoc.call(null,G__86515,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)),null));
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
var args__36498__auto__ = [];
var len__36491__auto___86579 = arguments.length;
var i__36492__auto___86580 = (0);
while(true){
if((i__36492__auto___86580 < len__36491__auto___86579)){
args__36498__auto__.push((arguments[i__36492__auto___86580]));

var G__86581 = (i__36492__auto___86580 + (1));
i__36492__auto___86580 = G__86581;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((2) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36499__auto__);
});

loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic = (function (ancestry,node,parents){
if(cljs.core.truth_(loom.alg_generic.ancestry_contains_QMARK_.call(null,ancestry,node))){
return ancestry;
} else {
var map__86571 = ancestry;
var map__86571__$1 = ((((!((map__86571 == null)))?((((map__86571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86571):map__86571);
var node__GT_idx = cljs.core.get.call(null,map__86571__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__86571__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__86571__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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

loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq86564){
var G__86565 = cljs.core.first.call(null,seq86564);
var seq86564__$1 = cljs.core.next.call(null,seq86564);
var G__86566 = cljs.core.first.call(null,seq86564__$1);
var seq86564__$2 = cljs.core.next.call(null,seq86564__$1);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic(G__86565,G__86566,seq86564__$2);
});
/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__86596 = ancestry;
var map__86596__$1 = ((((!((map__86596 == null)))?((((map__86596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86596):map__86596);
var node__GT_idx = cljs.core.get.call(null,map__86596__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__86596__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,childer);
var pidx = node__GT_idx.call(null,parenter);
return cljs.core.boolean$.call(null,(cljs.core.truth_((function (){var and__35410__auto__ = cidx;
if(cljs.core.truth_(and__35410__auto__)){
return pidx;
} else {
return and__35410__auto__;
}
})())?loom.alg_generic.bm_get.call(null,cljs.core.get.call(null,bitmaps,cidx),pidx):null));
});
/**
 * Returns all of the ancestors of 'child node.
 */
loom.alg_generic.ancestors = (function loom$alg_generic$ancestors(ancestry,child){
var map__86607 = ancestry;
var map__86607__$1 = ((((!((map__86607 == null)))?((((map__86607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86607):map__86607);
var node__GT_idx = cljs.core.get.call(null,map__86607__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__86607__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__86607__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});
