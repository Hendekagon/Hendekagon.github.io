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
return (function (p1__66609_SHARP_){
return loom$alg_generic$paths.call(null,preds,cljs.core.conj.call(null,path,p1__66609_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__66608_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__66608_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__66610_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__66610_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__66613){
var vec__66614 = p__66613;
var n = cljs.core.nth.call(null,vec__66614,(0),null);
var p = cljs.core.nth.call(null,vec__66614,(1),null);
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
var len__36491__auto___66621 = arguments.length;
var i__36492__auto___66622 = (0);
while(true){
if((i__36492__auto___66622 < len__36491__auto___66621)){
args__36498__auto__.push((arguments[i__36492__auto___66622]));

var G__66623 = (i__36492__auto___66622 + (1));
i__36492__auto___66622 = G__66623;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((2) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36499__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__66618){
var map__66619 = p__66618;
var map__66619__$1 = ((((!((map__66619 == null)))?((((map__66619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66619):map__66619);
var seen = cljs.core.get.call(null,map__66619__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__66619,map__66619__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__4657__auto__,map__66619,map__66619__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__4657__auto__,map__66619,map__66619__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__66619,map__66619__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq66615){
var G__66616 = cljs.core.first.call(null,seq66615);
var seq66615__$1 = cljs.core.next.call(null,seq66615);
var G__66617 = cljs.core.first.call(null,seq66615__$1);
var seq66615__$2 = cljs.core.next.call(null,seq66615__$1);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic(G__66616,G__66617,seq66615__$2);
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
var len__36491__auto___66630 = arguments.length;
var i__36492__auto___66631 = (0);
while(true){
if((i__36492__auto___66631 < len__36491__auto___66630)){
args__36498__auto__.push((arguments[i__36492__auto___66631]));

var G__66632 = (i__36492__auto___66631 + (1));
i__36492__auto___66631 = G__66632;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((2) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36499__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__66627){
var map__66628 = p__66627;
var map__66628__$1 = ((((!((map__66628 == null)))?((((map__66628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66628):map__66628);
var seen = cljs.core.get.call(null,map__66628__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__66628,map__66628__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__4655__auto__)){
var nbr = temp__4655__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__66628,map__66628__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__66628,map__66628__$1,seen))
,null,null)));
} else {
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__66633 = successors__$1;
var G__66634 = parent;
var G__66635 = cljs.core.peek.call(null,nbrstack);
var G__66636 = cljs.core.pop.call(null,stack);
var G__66637 = cljs.core.pop.call(null,nbrstack);
var G__66638 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__66633;
start__$1 = G__66634;
nbrs = G__66635;
stack = G__66636;
nbrstack = G__66637;
seen__$1 = G__66638;
continue;
} else {
return null;
}
}
break;
}
});})(map__66628,map__66628__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq66624){
var G__66625 = cljs.core.first.call(null,seq66624);
var seq66624__$1 = cljs.core.next.call(null,seq66624);
var G__66626 = cljs.core.first.call(null,seq66624__$1);
var seq66624__$2 = cljs.core.next.call(null,seq66624__$1);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__66625,G__66626,seq66624__$2);
});
/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__36498__auto__ = [];
var len__36491__auto___66645 = arguments.length;
var i__36492__auto___66646 = (0);
while(true){
if((i__36492__auto___66646 < len__36491__auto___66645)){
args__36498__auto__.push((arguments[i__36492__auto___66646]));

var G__66647 = (i__36492__auto___66646 + (1));
i__36492__auto___66646 = G__66647;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((2) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36499__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__66642){
var map__66643 = p__66642;
var map__66643__$1 = ((((!((map__66643 == null)))?((((map__66643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66643):map__66643);
var seen = cljs.core.get.call(null,map__66643__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__66643__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__66648 = seen__$2;
var G__66649 = cljs.core.assoc.call(null,preds,u,v);
var G__66650 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__66648;
preds = G__66649;
stack = G__66650;
continue;
} else {
var G__66651 = seen__$2;
var G__66652 = preds;
var G__66653 = cljs.core.pop.call(null,stack);
seen__$1 = G__66651;
preds = G__66652;
stack = G__66653;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq66639){
var G__66640 = cljs.core.first.call(null,seq66639);
var seq66639__$1 = cljs.core.next.call(null,seq66639);
var G__66641 = cljs.core.first.call(null,seq66639__$1);
var seq66639__$2 = cljs.core.next.call(null,seq66639__$1);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(G__66640,G__66641,seq66639__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__36498__auto__ = [];
var len__36491__auto___66660 = arguments.length;
var i__36492__auto___66661 = (0);
while(true){
if((i__36492__auto___66661 < len__36491__auto___66660)){
args__36498__auto__.push((arguments[i__36492__auto___66661]));

var G__66662 = (i__36492__auto___66661 + (1));
i__36492__auto___66661 = G__66662;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((2) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36499__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__66657){
var map__66658 = p__66657;
var map__66658__$1 = ((((!((map__66658 == null)))?((((map__66658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66658):map__66658);
var seen = cljs.core.get.call(null,map__66658__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__66658__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__66663 = seen__$2;
var G__66664 = cljs.core.conj.call(null,result,v);
var G__66665 = cljs.core.pop.call(null,stack);
seen__$1 = G__66663;
result = G__66664;
stack = G__66665;
continue;
} else {
var G__66666 = seen__$2;
var G__66667 = result;
var G__66668 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__66666;
result = G__66667;
stack = G__66668;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq66654){
var G__66655 = cljs.core.first.call(null,seq66654);
var seq66654__$1 = cljs.core.next.call(null,seq66654);
var G__66656 = cljs.core.first.call(null,seq66654__$1);
var seq66654__$2 = cljs.core.next.call(null,seq66654__$1);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__66655,G__66656,seq66654__$2);
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
var len__36491__auto___66675 = arguments.length;
var i__36492__auto___66676 = (0);
while(true){
if((i__36492__auto___66676 < len__36491__auto___66675)){
args__36498__auto__.push((arguments[i__36492__auto___66676]));

var G__66677 = (i__36492__auto___66676 + (1));
i__36492__auto___66676 = G__66677;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((2) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36499__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__66672){
var map__66673 = p__66672;
var map__66673__$1 = ((((!((map__66673 == null)))?((((map__66673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66673):map__66673);
var seen = cljs.core.get.call(null,map__66673__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__66673__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__66678 = start__$1;
var G__66679 = cljs.core.next.call(null,nbrs);
var G__66680 = stack;
var G__66681 = nbrstack;
var G__66682 = seen__$2;
var G__66683 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__66678;
nbrs = G__66679;
stack = G__66680;
nbrstack = G__66681;
seen__$1 = G__66682;
edges = G__66683;
continue;
} else {
var G__66684 = nbr;
var G__66685 = successors.call(null,nbr);
var G__66686 = cljs.core.conj.call(null,stack,start__$1);
var G__66687 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__66688 = seen__$2;
var G__66689 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__66684;
nbrs = G__66685;
stack = G__66686;
nbrstack = G__66687;
seen__$1 = G__66688;
edges = G__66689;
continue;
}
} else {
var temp__4655__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4655__auto____$1)){
var parent = temp__4655__auto____$1;
var G__66690 = parent;
var G__66691 = cljs.core.peek.call(null,nbrstack);
var G__66692 = cljs.core.pop.call(null,stack);
var G__66693 = cljs.core.pop.call(null,nbrstack);
var G__66694 = seen__$2;
var G__66695 = edges;
start__$1 = G__66690;
nbrs = G__66691;
stack = G__66692;
nbrstack = G__66693;
seen__$1 = G__66694;
edges = G__66695;
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

loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq66669){
var G__66670 = cljs.core.first.call(null,seq66669);
var seq66669__$1 = cljs.core.next.call(null,seq66669);
var G__66671 = cljs.core.first.call(null,seq66669__$1);
var seq66669__$2 = cljs.core.next.call(null,seq66669__$1);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__66670,G__66671,seq66669__$2);
});
/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var args66696 = [];
var len__36491__auto___66699 = arguments.length;
var i__36492__auto___66700 = (0);
while(true){
if((i__36492__auto___66700 < len__36491__auto___66699)){
args66696.push((arguments[i__36492__auto___66700]));

var G__66701 = (i__36492__auto___66700 + (1));
i__36492__auto___66700 = G__66701;
continue;
} else {
}
break;
}

var G__66698 = args66696.length;
switch (G__66698) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66696.length)].join('')));

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
var G__66703 = seen__$2;
var G__66704 = explored__$1;
var G__66705 = result;
var G__66706 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__66703;
explored__$1 = G__66704;
result = G__66705;
stack = G__66706;
continue;
}
} else {
var G__66707 = seen__$2;
var G__66708 = cljs.core.conj.call(null,explored__$1,v);
var G__66709 = cljs.core.conj.call(null,result,v);
var G__66710 = cljs.core.pop.call(null,stack);
seen__$1 = G__66707;
explored__$1 = G__66708;
result = G__66709;
stack = G__66710;
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
var len__36491__auto___66745 = arguments.length;
var i__36492__auto___66746 = (0);
while(true){
if((i__36492__auto___66746 < len__36491__auto___66745)){
args__36498__auto__.push((arguments[i__36492__auto___66746]));

var G__66747 = (i__36492__auto___66746 + (1));
i__36492__auto___66746 = G__66747;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((2) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36499__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__66718){
var map__66719 = p__66718;
var map__66719__$1 = ((((!((map__66719 == null)))?((((map__66719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66719):map__66719);
var f = cljs.core.get.call(null,map__66719__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__66719__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__66719__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__35422__auto__ = f;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return ((function (or__35422__auto__,map__66719,map__66719__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__35422__auto__,map__66719,map__66719__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__35422__auto__ = when;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__66719,map__66719__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__4657__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__66736 = temp__4657__auto__;
var node = cljs.core.nth.call(null,vec__66736,(0),null);
var depth = cljs.core.nth.call(null,vec__66736,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__66736,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__66719,map__66719__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__66736,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__66719,map__66719__$1,f,when,seen){
return (function (p1__66712_SHARP_){
return nbr_pred.call(null,p1__66712_SHARP_,node,(depth + (1)));
});})(vec__66736,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__66719,map__66719__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__66736,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__66719,map__66719__$1,f,when,seen){
return (function (p1__66711_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__66711_SHARP_);
});})(vec__66736,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__66719,map__66719__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__36202__auto__ = ((function (nbrs,vec__66736,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__66719,map__66719__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__66737(s__66738){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__66736,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__66719,map__66719__$1,f,when,seen){
return (function (){
var s__66738__$1 = s__66738;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__66738__$1);
if(temp__4657__auto____$1){
var s__66738__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__66738__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__66738__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__66740 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__66739 = (0);
while(true){
if((i__66739 < size__36201__auto__)){
var nbr = cljs.core._nth.call(null,c__36200__auto__,i__66739);
cljs.core.chunk_append.call(null,b__66740,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__66748 = (i__66739 + (1));
i__66739 = G__66748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66740),loom$alg_generic$step_$_iter__66737.call(null,cljs.core.chunk_rest.call(null,s__66738__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66740),null);
}
} else {
var nbr = cljs.core.first.call(null,s__66738__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__66737.call(null,cljs.core.rest.call(null,s__66738__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__66736,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__66719,map__66719__$1,f,when,seen))
,null,null));
});})(nbrs,vec__66736,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__66719,map__66719__$1,f,when,seen))
;
return iter__36202__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__66736,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__66719,map__66719__$1,f,when,seen){
return (function (p1__66713_SHARP_,p2__66714_SHARP_){
return cljs.core.assoc.call(null,p1__66713_SHARP_,p2__66714_SHARP_,node);
});})(nbrs,vec__66736,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__66719,map__66719__$1,f,when,seen))
,preds,nbrs));
});})(vec__66736,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__66719,map__66719__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__66719,map__66719__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.fromArray([start,null], true, false),(function (){var iter__36202__auto__ = ((function (f__$1,nbr_pred,map__66719,map__66719__$1,f,when,seen){
return (function loom$alg_generic$iter__66741(s__66742){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__66719,map__66719__$1,f,when,seen){
return (function (){
var s__66742__$1 = s__66742;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__66742__$1);
if(temp__4657__auto__){
var s__66742__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__66742__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__66742__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__66744 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__66743 = (0);
while(true){
if((i__66743 < size__36201__auto__)){
var s = cljs.core._nth.call(null,c__36200__auto__,i__66743);
cljs.core.chunk_append.call(null,b__66744,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__66749 = (i__66743 + (1));
i__66743 = G__66749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66744),loom$alg_generic$iter__66741.call(null,cljs.core.chunk_rest.call(null,s__66742__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66744),null);
}
} else {
var s = cljs.core.first.call(null,s__66742__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__66741.call(null,cljs.core.rest.call(null,s__66742__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__66719,map__66719__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__66719,map__66719__$1,f,when,seen))
;
return iter__36202__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq66715){
var G__66716 = cljs.core.first.call(null,seq66715);
var seq66715__$1 = cljs.core.next.call(null,seq66715);
var G__66717 = cljs.core.first.call(null,seq66715__$1);
var seq66715__$2 = cljs.core.next.call(null,seq66715__$1);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__66716,G__66717,seq66715__$2);
});
/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__36498__auto__ = [];
var len__36491__auto___66756 = arguments.length;
var i__36492__auto___66757 = (0);
while(true){
if((i__36492__auto___66757 < len__36491__auto___66756)){
args__36498__auto__.push((arguments[i__36492__auto___66757]));

var G__66758 = (i__36492__auto___66757 + (1));
i__36492__auto___66757 = G__66758;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((2) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36499__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__66753){
var map__66754 = p__66753;
var map__66754__$1 = ((((!((map__66754 == null)))?((((map__66754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66754):map__66754);
var seen = cljs.core.get.call(null,map__66754__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__66754,map__66754__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__66754,map__66754__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq66750){
var G__66751 = cljs.core.first.call(null,seq66750);
var seq66750__$1 = cljs.core.next.call(null,seq66750);
var G__66752 = cljs.core.first.call(null,seq66750__$1);
var seq66750__$2 = cljs.core.next.call(null,seq66750__$1);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic(G__66751,G__66752,seq66750__$2);
});
/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__36498__auto__ = [];
var len__36491__auto___66768 = arguments.length;
var i__36492__auto___66769 = (0);
while(true){
if((i__36492__auto___66769 < len__36491__auto___66768)){
args__36498__auto__.push((arguments[i__36492__auto___66769]));

var G__66770 = (i__36492__auto___66769 + (1));
i__36492__auto___66769 = G__66770;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((3) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36499__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__66763){
var map__66764 = p__66763;
var map__66764__$1 = ((((!((map__66764 == null)))?((((map__66764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66764):map__66764);
var opts = map__66764__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__4657__auto__ = cljs.core.some.call(null,((function (opts__$1,map__66764,map__66764__$1,opts){
return (function (p__66766){
var vec__66767 = p__66766;
var _ = cljs.core.nth.call(null,vec__66767,(0),null);
var pm = cljs.core.nth.call(null,vec__66767,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__66767,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__66764,map__66764__$1,opts))
,cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__4657__auto__)){
var preds = temp__4657__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq66759){
var G__66760 = cljs.core.first.call(null,seq66759);
var seq66759__$1 = cljs.core.next.call(null,seq66759);
var G__66761 = cljs.core.first.call(null,seq66759__$1);
var seq66759__$2 = cljs.core.next.call(null,seq66759__$1);
var G__66762 = cljs.core.first.call(null,seq66759__$2);
var seq66759__$3 = cljs.core.next.call(null,seq66759__$2);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__66760,G__66761,G__66762,seq66759__$3);
});
/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__66771 = m2;
var G__66772 = m1;
m1 = G__66771;
m2 = G__66772;
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
return (function (p1__66773_SHARP_){
return (cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds1),p1__66773_SHARP_)) + cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds2),p1__66773_SHARP_)));
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
var G__66774 = find_intersects.call(null);
intersects = G__66774;
continue;
}
break;
}
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__36202__auto__ = (function loom$alg_generic$reverse_edges_$_iter__66781(s__66782){
return (new cljs.core.LazySeq(null,(function (){
var s__66782__$1 = s__66782;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__66782__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var node = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36198__auto__ = ((function (s__66782__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__66781_$_iter__66783(s__66784){
return (new cljs.core.LazySeq(null,((function (s__66782__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__66784__$1 = s__66784;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__66784__$1);
if(temp__4657__auto____$1){
var s__66784__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__66784__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__66784__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__66786 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__66785 = (0);
while(true){
if((i__66785 < size__36201__auto__)){
var nbr = cljs.core._nth.call(null,c__36200__auto__,i__66785);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
cljs.core.chunk_append.call(null,b__66786,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__66787 = (i__66785 + (1));
i__66785 = G__66787;
continue;
} else {
var G__66788 = (i__66785 + (1));
i__66785 = G__66788;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66786),loom$alg_generic$reverse_edges_$_iter__66781_$_iter__66783.call(null,cljs.core.chunk_rest.call(null,s__66784__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66786),null);
}
} else {
var nbr = cljs.core.first.call(null,s__66784__$2);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__66781_$_iter__66783.call(null,cljs.core.rest.call(null,s__66784__$2)));
} else {
var G__66789 = cljs.core.rest.call(null,s__66784__$2);
s__66784__$1 = G__66789;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__66782__$1,node,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__66782__$1,node,xs__5205__auto__,temp__4657__auto__))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,successor_fn.call(null,node)));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,loom$alg_generic$reverse_edges_$_iter__66781.call(null,cljs.core.rest.call(null,s__66782__$1)));
} else {
var G__66790 = cljs.core.rest.call(null,s__66782__$1);
s__66782__$1 = G__66790;
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
var iter__36202__auto__ = (function loom$alg_generic$conj_paths_$_iter__66799(s__66800){
return (new cljs.core.LazySeq(null,(function (){
var s__66800__$1 = s__66800;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__66800__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36198__auto__ = ((function (s__66800__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__66799_$_iter__66801(s__66802){
return (new cljs.core.LazySeq(null,((function (s__66800__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__66802__$1 = s__66802;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__66802__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var from = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__36198__auto__ = ((function (s__66802__$1,s__66800__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__66799_$_iter__66801_$_iter__66803(s__66804){
return (new cljs.core.LazySeq(null,((function (s__66802__$1,s__66800__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__66804__$1 = s__66804;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__66804__$1);
if(temp__4657__auto____$2){
var s__66804__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__66804__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__66804__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__66806 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__66805 = (0);
while(true){
if((i__66805 < size__36201__auto__)){
var to = cljs.core._nth.call(null,c__36200__auto__,i__66805);
cljs.core.chunk_append.call(null,b__66806,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__66807 = (i__66805 + (1));
i__66805 = G__66807;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66806),loom$alg_generic$conj_paths_$_iter__66799_$_iter__66801_$_iter__66803.call(null,cljs.core.chunk_rest.call(null,s__66804__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66806),null);
}
} else {
var to = cljs.core.first.call(null,s__66804__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__66799_$_iter__66801_$_iter__66803.call(null,cljs.core.rest.call(null,s__66804__$2)));
}
} else {
return null;
}
break;
}
});})(s__66802__$1,s__66800__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__66802__$1,s__66800__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,loom$alg_generic$conj_paths_$_iter__66799_$_iter__66801.call(null,cljs.core.rest.call(null,s__66802__$1)));
} else {
var G__66808 = cljs.core.rest.call(null,s__66802__$1);
s__66802__$1 = G__66808;
continue;
}
} else {
return null;
}
break;
}
});})(s__66800__$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__66800__$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,loom$alg_generic$conj_paths_$_iter__66799.call(null,cljs.core.rest.call(null,s__66800__$1)));
} else {
var G__66809 = cljs.core.rest.call(null,s__66800__$1);
s__66800__$1 = G__66809;
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
return (function (p1__66810_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__66810_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__66813){
var vec__66814 = p__66813;
var key = cljs.core.nth.call(null,vec__66814,(0),null);
var val = cljs.core.nth.call(null,vec__66814,(1),null);
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
var G__66815 = outgoing__$1;
var G__66816 = incoming;
var G__66817 = q1__$1;
var G__66818 = q2;
outgoing = G__66815;
incoming = G__66816;
q1 = G__66817;
q2 = G__66818;
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
var G__66819 = outgoing;
var G__66820 = incoming__$1;
var G__66821 = q1;
var G__66822 = q2__$1;
outgoing = G__66819;
incoming = G__66820;
q1 = G__66821;
q2 = G__66822;
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
var args66825 = [];
var len__36491__auto___66846 = arguments.length;
var i__36492__auto___66847 = (0);
while(true){
if((i__36492__auto___66847 < len__36491__auto___66846)){
args66825.push((arguments[i__36492__auto___66847]));

var G__66848 = (i__36492__auto___66847 + (1));
i__36492__auto___66847 = G__66848;
continue;
} else {
}
break;
}

var G__66827 = args66825.length;
switch (G__66827) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66825.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__66837){
var vec__66842 = p__66837;
var state = cljs.core.nth.call(null,vec__66842,(0),null);
var pq = cljs.core.nth.call(null,vec__66842,(1),null);
var temp__4657__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__66843 = temp__4657__auto__;
var dist_su = cljs.core.nth.call(null,vec__66843,(0),null);
var _ = cljs.core.nth.call(null,vec__66843,(1),null);
var u = cljs.core.nth.call(null,vec__66843,(2),null);
var fpq = vec__66843;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__66843,dist_su,_,u,fpq,temp__4657__auto__,vec__66842,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__66843,dist_su,_,u,fpq,temp__4657__auto__,vec__66842,state,pq){
return (function (p__66844,v){
var vec__66845 = p__66844;
var state__$1 = cljs.core.nth.call(null,vec__66845,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__66845,(1),null);
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
});})(vec__66843,dist_su,_,u,fpq,temp__4657__auto__,vec__66842,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__66843,dist_su,_,u,fpq,temp__4657__auto__,vec__66842,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__66853){
var vec__66854 = p__66853;
var n = cljs.core.nth.call(null,vec__66854,(0),null);
var vec__66855 = cljs.core.nth.call(null,vec__66854,(1),null);
var d = cljs.core.nth.call(null,vec__66855,(0),null);
var p = cljs.core.nth.call(null,vec__66855,(1),null);
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
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__66859){
var vec__66860 = p__66859;
var node = cljs.core.nth.call(null,vec__66860,(0),null);
var _ = cljs.core.nth.call(null,vec__66860,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__66861 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__66861,(0),null);
var end_state = cljs.core.nth.call(null,vec__66861,(1),null);
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
var len__36491__auto___66886 = arguments.length;
var i__36492__auto___66887 = (0);
while(true){
if((i__36492__auto___66887 < len__36491__auto___66886)){
args__36498__auto__.push((arguments[i__36492__auto___66887]));

var G__66888 = (i__36492__auto___66887 + (1));
i__36492__auto___66887 = G__66888;
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
var seq__66866_66889 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__66873_66890 = null;
var count__66874_66891 = (0);
var i__66875_66892 = (0);
while(true){
if((i__66875_66892 < count__66874_66891)){
var bitmap_66893__$1 = cljs.core._nth.call(null,chunk__66873_66890,i__66875_66892);
var seq__66876_66894 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_66893__$1));
var chunk__66878_66895 = null;
var count__66879_66896 = (0);
var i__66880_66897 = (0);
while(true){
if((i__66880_66897 < count__66879_66896)){
var vec__66882_66898 = cljs.core._nth.call(null,chunk__66878_66895,i__66880_66897);
var idx_66899 = cljs.core.nth.call(null,vec__66882_66898,(0),null);
var value_66900 = cljs.core.nth.call(null,vec__66882_66898,(1),null);
var masked_value_66901 = (value_66900 | (new_bitmap[idx_66899]));
(new_bitmap[idx_66899] = masked_value_66901);

var G__66902 = seq__66876_66894;
var G__66903 = chunk__66878_66895;
var G__66904 = count__66879_66896;
var G__66905 = (i__66880_66897 + (1));
seq__66876_66894 = G__66902;
chunk__66878_66895 = G__66903;
count__66879_66896 = G__66904;
i__66880_66897 = G__66905;
continue;
} else {
var temp__4657__auto___66906 = cljs.core.seq.call(null,seq__66876_66894);
if(temp__4657__auto___66906){
var seq__66876_66907__$1 = temp__4657__auto___66906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66876_66907__$1)){
var c__36233__auto___66908 = cljs.core.chunk_first.call(null,seq__66876_66907__$1);
var G__66909 = cljs.core.chunk_rest.call(null,seq__66876_66907__$1);
var G__66910 = c__36233__auto___66908;
var G__66911 = cljs.core.count.call(null,c__36233__auto___66908);
var G__66912 = (0);
seq__66876_66894 = G__66909;
chunk__66878_66895 = G__66910;
count__66879_66896 = G__66911;
i__66880_66897 = G__66912;
continue;
} else {
var vec__66883_66913 = cljs.core.first.call(null,seq__66876_66907__$1);
var idx_66914 = cljs.core.nth.call(null,vec__66883_66913,(0),null);
var value_66915 = cljs.core.nth.call(null,vec__66883_66913,(1),null);
var masked_value_66916 = (value_66915 | (new_bitmap[idx_66914]));
(new_bitmap[idx_66914] = masked_value_66916);

var G__66917 = cljs.core.next.call(null,seq__66876_66907__$1);
var G__66918 = null;
var G__66919 = (0);
var G__66920 = (0);
seq__66876_66894 = G__66917;
chunk__66878_66895 = G__66918;
count__66879_66896 = G__66919;
i__66880_66897 = G__66920;
continue;
}
} else {
}
}
break;
}

var G__66921 = seq__66866_66889;
var G__66922 = chunk__66873_66890;
var G__66923 = count__66874_66891;
var G__66924 = (i__66875_66892 + (1));
seq__66866_66889 = G__66921;
chunk__66873_66890 = G__66922;
count__66874_66891 = G__66923;
i__66875_66892 = G__66924;
continue;
} else {
var temp__4657__auto___66925 = cljs.core.seq.call(null,seq__66866_66889);
if(temp__4657__auto___66925){
var seq__66866_66926__$1 = temp__4657__auto___66925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66866_66926__$1)){
var c__36233__auto___66927 = cljs.core.chunk_first.call(null,seq__66866_66926__$1);
var G__66928 = cljs.core.chunk_rest.call(null,seq__66866_66926__$1);
var G__66929 = c__36233__auto___66927;
var G__66930 = cljs.core.count.call(null,c__36233__auto___66927);
var G__66931 = (0);
seq__66866_66889 = G__66928;
chunk__66873_66890 = G__66929;
count__66874_66891 = G__66930;
i__66875_66892 = G__66931;
continue;
} else {
var bitmap_66932__$1 = cljs.core.first.call(null,seq__66866_66926__$1);
var seq__66867_66933 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_66932__$1));
var chunk__66869_66934 = null;
var count__66870_66935 = (0);
var i__66871_66936 = (0);
while(true){
if((i__66871_66936 < count__66870_66935)){
var vec__66884_66937 = cljs.core._nth.call(null,chunk__66869_66934,i__66871_66936);
var idx_66938 = cljs.core.nth.call(null,vec__66884_66937,(0),null);
var value_66939 = cljs.core.nth.call(null,vec__66884_66937,(1),null);
var masked_value_66940 = (value_66939 | (new_bitmap[idx_66938]));
(new_bitmap[idx_66938] = masked_value_66940);

var G__66941 = seq__66867_66933;
var G__66942 = chunk__66869_66934;
var G__66943 = count__66870_66935;
var G__66944 = (i__66871_66936 + (1));
seq__66867_66933 = G__66941;
chunk__66869_66934 = G__66942;
count__66870_66935 = G__66943;
i__66871_66936 = G__66944;
continue;
} else {
var temp__4657__auto___66945__$1 = cljs.core.seq.call(null,seq__66867_66933);
if(temp__4657__auto___66945__$1){
var seq__66867_66946__$1 = temp__4657__auto___66945__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66867_66946__$1)){
var c__36233__auto___66947 = cljs.core.chunk_first.call(null,seq__66867_66946__$1);
var G__66948 = cljs.core.chunk_rest.call(null,seq__66867_66946__$1);
var G__66949 = c__36233__auto___66947;
var G__66950 = cljs.core.count.call(null,c__36233__auto___66947);
var G__66951 = (0);
seq__66867_66933 = G__66948;
chunk__66869_66934 = G__66949;
count__66870_66935 = G__66950;
i__66871_66936 = G__66951;
continue;
} else {
var vec__66885_66952 = cljs.core.first.call(null,seq__66867_66946__$1);
var idx_66953 = cljs.core.nth.call(null,vec__66885_66952,(0),null);
var value_66954 = cljs.core.nth.call(null,vec__66885_66952,(1),null);
var masked_value_66955 = (value_66954 | (new_bitmap[idx_66953]));
(new_bitmap[idx_66953] = masked_value_66955);

var G__66956 = cljs.core.next.call(null,seq__66867_66946__$1);
var G__66957 = null;
var G__66958 = (0);
var G__66959 = (0);
seq__66867_66933 = G__66956;
chunk__66869_66934 = G__66957;
count__66870_66935 = G__66958;
i__66871_66936 = G__66959;
continue;
}
} else {
}
}
break;
}

var G__66960 = cljs.core.next.call(null,seq__66866_66926__$1);
var G__66961 = null;
var G__66962 = (0);
var G__66963 = (0);
seq__66866_66889 = G__66960;
chunk__66873_66890 = G__66961;
count__66874_66891 = G__66962;
i__66875_66892 = G__66963;
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

loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq66865){
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66865));
});
/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__36202__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__66970(s__66971){
return (new cljs.core.LazySeq(null,(function (){
var s__66971__$1 = s__66971;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__66971__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var chunk = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36198__auto__ = ((function (s__66971__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__66970_$_iter__66972(s__66973){
return (new cljs.core.LazySeq(null,((function (s__66971__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__66973__$1 = s__66973;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__66973__$1);
if(temp__4657__auto____$1){
var s__66973__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__66973__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__66973__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__66975 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__66974 = (0);
while(true){
if((i__66974 < size__36201__auto__)){
var offset = cljs.core._nth.call(null,c__36200__auto__,i__66974);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__66975,idx);

var G__66976 = (i__66974 + (1));
i__66974 = G__66976;
continue;
} else {
var G__66977 = (i__66974 + (1));
i__66974 = G__66977;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66975),loom$alg_generic$bm_get_indicies_$_iter__66970_$_iter__66972.call(null,cljs.core.chunk_rest.call(null,s__66973__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66975),null);
}
} else {
var offset = cljs.core.first.call(null,s__66973__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__66970_$_iter__66972.call(null,cljs.core.rest.call(null,s__66973__$2)));
} else {
var G__66978 = cljs.core.rest.call(null,s__66973__$2);
s__66973__$1 = G__66978;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__66971__$1,chunk,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__66971__$1,chunk,xs__5205__auto__,temp__4657__auto__))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,loom$alg_generic$bm_get_indicies_$_iter__66970.call(null,cljs.core.rest.call(null,s__66971__$1)));
} else {
var G__66979 = cljs.core.rest.call(null,s__66971__$1);
s__66971__$1 = G__66979;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36046__auto__,k66981,else__36047__auto__){
var self__ = this;
var this__36046__auto____$1 = this;
var G__66983 = (((k66981 instanceof cljs.core.Keyword))?k66981.fqn:null);
switch (G__66983) {
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
return cljs.core.get.call(null,self__.__extmap,k66981,else__36047__auto__);

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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66980){
var self__ = this;
var G__66980__$1 = this;
return (new cljs.core.RecordIter((0),G__66980__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36051__auto__,k__36052__auto__,G__66980){
var self__ = this;
var this__36051__auto____$1 = this;
var pred__66984 = cljs.core.keyword_identical_QMARK_;
var expr__66985 = k__36052__auto__;
if(cljs.core.truth_(pred__66984.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__66985))){
return (new loom.alg_generic.Ancestry(G__66980,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66984.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__66985))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__66980,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66984.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__66985))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__66980,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36052__auto__,G__66980),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36056__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36043__auto__,G__66980){
var self__ = this;
var this__36043__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__66980,self__.__extmap,self__.__hash));
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

loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__66982){
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__66982),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__66982),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__66982),null,cljs.core.dissoc.call(null,G__66982,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)),null));
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
var len__36491__auto___66993 = arguments.length;
var i__36492__auto___66994 = (0);
while(true){
if((i__36492__auto___66994 < len__36491__auto___66993)){
args__36498__auto__.push((arguments[i__36492__auto___66994]));

var G__66995 = (i__36492__auto___66994 + (1));
i__36492__auto___66994 = G__66995;
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
var map__66991 = ancestry;
var map__66991__$1 = ((((!((map__66991 == null)))?((((map__66991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66991):map__66991);
var node__GT_idx = cljs.core.get.call(null,map__66991__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__66991__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__66991__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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

loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq66988){
var G__66989 = cljs.core.first.call(null,seq66988);
var seq66988__$1 = cljs.core.next.call(null,seq66988);
var G__66990 = cljs.core.first.call(null,seq66988__$1);
var seq66988__$2 = cljs.core.next.call(null,seq66988__$1);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic(G__66989,G__66990,seq66988__$2);
});
/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__66998 = ancestry;
var map__66998__$1 = ((((!((map__66998 == null)))?((((map__66998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66998):map__66998);
var node__GT_idx = cljs.core.get.call(null,map__66998__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__66998__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__67002 = ancestry;
var map__67002__$1 = ((((!((map__67002 == null)))?((((map__67002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67002):map__67002);
var node__GT_idx = cljs.core.get.call(null,map__67002__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__67002__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__67002__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});

//# sourceMappingURL=alg_generic.js.map?rel=1459533428924