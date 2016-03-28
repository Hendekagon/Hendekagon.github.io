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
return (function (p1__292785_SHARP_){
return loom$alg_generic$paths.call(null,preds,cljs.core.conj.call(null,path,p1__292785_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__292784_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__292784_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__292792_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__292792_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__292798){
var vec__292799 = p__292798;
var n = cljs.core.nth.call(null,vec__292799,(0),null);
var p = cljs.core.nth.call(null,vec__292799,(1),null);
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
var len__36260__auto___292817 = arguments.length;
var i__36261__auto___292818 = (0);
while(true){
if((i__36261__auto___292818 < len__36260__auto___292817)){
args__36267__auto__.push((arguments[i__36261__auto___292818]));

var G__292819 = (i__36261__auto___292818 + (1));
i__36261__auto___292818 = G__292819;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__292810){
var map__292811 = p__292810;
var map__292811__$1 = ((((!((map__292811 == null)))?((((map__292811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292811):map__292811);
var seen = cljs.core.get.call(null,map__292811__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__292811,map__292811__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__4657__auto__,map__292811,map__292811__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__4657__auto__,map__292811,map__292811__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__292811,map__292811__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq292805){
var G__292806 = cljs.core.first.call(null,seq292805);
var seq292805__$1 = cljs.core.next.call(null,seq292805);
var G__292807 = cljs.core.first.call(null,seq292805__$1);
var seq292805__$2 = cljs.core.next.call(null,seq292805__$1);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic(G__292806,G__292807,seq292805__$2);
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
var len__36260__auto___292841 = arguments.length;
var i__36261__auto___292842 = (0);
while(true){
if((i__36261__auto___292842 < len__36260__auto___292841)){
args__36267__auto__.push((arguments[i__36261__auto___292842]));

var G__292843 = (i__36261__auto___292842 + (1));
i__36261__auto___292842 = G__292843;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__292828){
var map__292829 = p__292828;
var map__292829__$1 = ((((!((map__292829 == null)))?((((map__292829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292829):map__292829);
var seen = cljs.core.get.call(null,map__292829__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__292829,map__292829__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__4655__auto__)){
var nbr = temp__4655__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__292829,map__292829__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__292829,map__292829__$1,seen))
,null,null)));
} else {
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__292852 = successors__$1;
var G__292853 = parent;
var G__292854 = cljs.core.peek.call(null,nbrstack);
var G__292855 = cljs.core.pop.call(null,stack);
var G__292856 = cljs.core.pop.call(null,nbrstack);
var G__292857 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__292852;
start__$1 = G__292853;
nbrs = G__292854;
stack = G__292855;
nbrstack = G__292856;
seen__$1 = G__292857;
continue;
} else {
return null;
}
}
break;
}
});})(map__292829,map__292829__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq292823){
var G__292824 = cljs.core.first.call(null,seq292823);
var seq292823__$1 = cljs.core.next.call(null,seq292823);
var G__292825 = cljs.core.first.call(null,seq292823__$1);
var seq292823__$2 = cljs.core.next.call(null,seq292823__$1);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__292824,G__292825,seq292823__$2);
});
/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__36267__auto__ = [];
var len__36260__auto___292868 = arguments.length;
var i__36261__auto___292869 = (0);
while(true){
if((i__36261__auto___292869 < len__36260__auto___292868)){
args__36267__auto__.push((arguments[i__36261__auto___292869]));

var G__292870 = (i__36261__auto___292869 + (1));
i__36261__auto___292869 = G__292870;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__292863){
var map__292864 = p__292863;
var map__292864__$1 = ((((!((map__292864 == null)))?((((map__292864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292864):map__292864);
var seen = cljs.core.get.call(null,map__292864__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__292864__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__292872 = seen__$2;
var G__292873 = cljs.core.assoc.call(null,preds,u,v);
var G__292874 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__292872;
preds = G__292873;
stack = G__292874;
continue;
} else {
var G__292887 = seen__$2;
var G__292888 = preds;
var G__292889 = cljs.core.pop.call(null,stack);
seen__$1 = G__292887;
preds = G__292888;
stack = G__292889;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq292860){
var G__292861 = cljs.core.first.call(null,seq292860);
var seq292860__$1 = cljs.core.next.call(null,seq292860);
var G__292862 = cljs.core.first.call(null,seq292860__$1);
var seq292860__$2 = cljs.core.next.call(null,seq292860__$1);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(G__292861,G__292862,seq292860__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__36267__auto__ = [];
var len__36260__auto___292896 = arguments.length;
var i__36261__auto___292897 = (0);
while(true){
if((i__36261__auto___292897 < len__36260__auto___292896)){
args__36267__auto__.push((arguments[i__36261__auto___292897]));

var G__292901 = (i__36261__auto___292897 + (1));
i__36261__auto___292897 = G__292901;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__292893){
var map__292894 = p__292893;
var map__292894__$1 = ((((!((map__292894 == null)))?((((map__292894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292894):map__292894);
var seen = cljs.core.get.call(null,map__292894__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__292894__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__292904 = seen__$2;
var G__292905 = cljs.core.conj.call(null,result,v);
var G__292906 = cljs.core.pop.call(null,stack);
seen__$1 = G__292904;
result = G__292905;
stack = G__292906;
continue;
} else {
var G__292907 = seen__$2;
var G__292908 = result;
var G__292909 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__292907;
result = G__292908;
stack = G__292909;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq292890){
var G__292891 = cljs.core.first.call(null,seq292890);
var seq292890__$1 = cljs.core.next.call(null,seq292890);
var G__292892 = cljs.core.first.call(null,seq292890__$1);
var seq292890__$2 = cljs.core.next.call(null,seq292890__$1);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__292891,G__292892,seq292890__$2);
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
var len__36260__auto___292923 = arguments.length;
var i__36261__auto___292924 = (0);
while(true){
if((i__36261__auto___292924 < len__36260__auto___292923)){
args__36267__auto__.push((arguments[i__36261__auto___292924]));

var G__292925 = (i__36261__auto___292924 + (1));
i__36261__auto___292924 = G__292925;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__292920){
var map__292921 = p__292920;
var map__292921__$1 = ((((!((map__292921 == null)))?((((map__292921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292921):map__292921);
var seen = cljs.core.get.call(null,map__292921__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__292921__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__292926 = start__$1;
var G__292927 = cljs.core.next.call(null,nbrs);
var G__292928 = stack;
var G__292929 = nbrstack;
var G__292930 = seen__$2;
var G__292931 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__292926;
nbrs = G__292927;
stack = G__292928;
nbrstack = G__292929;
seen__$1 = G__292930;
edges = G__292931;
continue;
} else {
var G__292932 = nbr;
var G__292933 = successors.call(null,nbr);
var G__292934 = cljs.core.conj.call(null,stack,start__$1);
var G__292935 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__292936 = seen__$2;
var G__292937 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__292932;
nbrs = G__292933;
stack = G__292934;
nbrstack = G__292935;
seen__$1 = G__292936;
edges = G__292937;
continue;
}
} else {
var temp__4655__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4655__auto____$1)){
var parent = temp__4655__auto____$1;
var G__292938 = parent;
var G__292939 = cljs.core.peek.call(null,nbrstack);
var G__292940 = cljs.core.pop.call(null,stack);
var G__292941 = cljs.core.pop.call(null,nbrstack);
var G__292942 = seen__$2;
var G__292943 = edges;
start__$1 = G__292938;
nbrs = G__292939;
stack = G__292940;
nbrstack = G__292941;
seen__$1 = G__292942;
edges = G__292943;
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

loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq292910){
var G__292911 = cljs.core.first.call(null,seq292910);
var seq292910__$1 = cljs.core.next.call(null,seq292910);
var G__292912 = cljs.core.first.call(null,seq292910__$1);
var seq292910__$2 = cljs.core.next.call(null,seq292910__$1);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__292911,G__292912,seq292910__$2);
});
/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var args292946 = [];
var len__36260__auto___292962 = arguments.length;
var i__36261__auto___292963 = (0);
while(true){
if((i__36261__auto___292963 < len__36260__auto___292962)){
args292946.push((arguments[i__36261__auto___292963]));

var G__292968 = (i__36261__auto___292963 + (1));
i__36261__auto___292963 = G__292968;
continue;
} else {
}
break;
}

var G__292956 = args292946.length;
switch (G__292956) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args292946.length)].join('')));

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
var G__292982 = seen__$2;
var G__292983 = explored__$1;
var G__292984 = result;
var G__292985 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__292982;
explored__$1 = G__292983;
result = G__292984;
stack = G__292985;
continue;
}
} else {
var G__292986 = seen__$2;
var G__292987 = cljs.core.conj.call(null,explored__$1,v);
var G__292988 = cljs.core.conj.call(null,result,v);
var G__292989 = cljs.core.pop.call(null,stack);
seen__$1 = G__292986;
explored__$1 = G__292987;
result = G__292988;
stack = G__292989;
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
var len__36260__auto___293047 = arguments.length;
var i__36261__auto___293048 = (0);
while(true){
if((i__36261__auto___293048 < len__36260__auto___293047)){
args__36267__auto__.push((arguments[i__36261__auto___293048]));

var G__293051 = (i__36261__auto___293048 + (1));
i__36261__auto___293048 = G__293051;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__292999){
var map__293000 = p__292999;
var map__293000__$1 = ((((!((map__293000 == null)))?((((map__293000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293000):map__293000);
var f = cljs.core.get.call(null,map__293000__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__293000__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__293000__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__35191__auto__ = f;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return ((function (or__35191__auto__,map__293000,map__293000__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__35191__auto__,map__293000,map__293000__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__35191__auto__ = when;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__293000,map__293000__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__4657__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__293023 = temp__4657__auto__;
var node = cljs.core.nth.call(null,vec__293023,(0),null);
var depth = cljs.core.nth.call(null,vec__293023,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__293023,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__293000,map__293000__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__293023,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__293000,map__293000__$1,f,when,seen){
return (function (p1__292991_SHARP_){
return nbr_pred.call(null,p1__292991_SHARP_,node,(depth + (1)));
});})(vec__293023,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__293000,map__293000__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__293023,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__293000,map__293000__$1,f,when,seen){
return (function (p1__292990_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__292990_SHARP_);
});})(vec__293023,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__293000,map__293000__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__35971__auto__ = ((function (nbrs,vec__293023,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__293000,map__293000__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__293027(s__293028){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__293023,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__293000,map__293000__$1,f,when,seen){
return (function (){
var s__293028__$1 = s__293028;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__293028__$1);
if(temp__4657__auto____$1){
var s__293028__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__293028__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__293028__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__293030 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__293029 = (0);
while(true){
if((i__293029 < size__35970__auto__)){
var nbr = cljs.core._nth.call(null,c__35969__auto__,i__293029);
cljs.core.chunk_append.call(null,b__293030,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__293065 = (i__293029 + (1));
i__293029 = G__293065;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293030),loom$alg_generic$step_$_iter__293027.call(null,cljs.core.chunk_rest.call(null,s__293028__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293030),null);
}
} else {
var nbr = cljs.core.first.call(null,s__293028__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__293027.call(null,cljs.core.rest.call(null,s__293028__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__293023,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__293000,map__293000__$1,f,when,seen))
,null,null));
});})(nbrs,vec__293023,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__293000,map__293000__$1,f,when,seen))
;
return iter__35971__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__293023,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__293000,map__293000__$1,f,when,seen){
return (function (p1__292992_SHARP_,p2__292993_SHARP_){
return cljs.core.assoc.call(null,p1__292992_SHARP_,p2__292993_SHARP_,node);
});})(nbrs,vec__293023,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__293000,map__293000__$1,f,when,seen))
,preds,nbrs));
});})(vec__293023,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__293000,map__293000__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__293000,map__293000__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.fromArray([start,null], true, false),(function (){var iter__35971__auto__ = ((function (f__$1,nbr_pred,map__293000,map__293000__$1,f,when,seen){
return (function loom$alg_generic$iter__293038(s__293039){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__293000,map__293000__$1,f,when,seen){
return (function (){
var s__293039__$1 = s__293039;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__293039__$1);
if(temp__4657__auto__){
var s__293039__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__293039__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__293039__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__293041 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__293040 = (0);
while(true){
if((i__293040 < size__35970__auto__)){
var s = cljs.core._nth.call(null,c__35969__auto__,i__293040);
cljs.core.chunk_append.call(null,b__293041,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__293078 = (i__293040 + (1));
i__293040 = G__293078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293041),loom$alg_generic$iter__293038.call(null,cljs.core.chunk_rest.call(null,s__293039__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293041),null);
}
} else {
var s = cljs.core.first.call(null,s__293039__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__293038.call(null,cljs.core.rest.call(null,s__293039__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__293000,map__293000__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__293000,map__293000__$1,f,when,seen))
;
return iter__35971__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq292994){
var G__292995 = cljs.core.first.call(null,seq292994);
var seq292994__$1 = cljs.core.next.call(null,seq292994);
var G__292996 = cljs.core.first.call(null,seq292994__$1);
var seq292994__$2 = cljs.core.next.call(null,seq292994__$1);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__292995,G__292996,seq292994__$2);
});
/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__36267__auto__ = [];
var len__36260__auto___293088 = arguments.length;
var i__36261__auto___293089 = (0);
while(true){
if((i__36261__auto___293089 < len__36260__auto___293088)){
args__36267__auto__.push((arguments[i__36261__auto___293089]));

var G__293090 = (i__36261__auto___293089 + (1));
i__36261__auto___293089 = G__293090;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__293084){
var map__293085 = p__293084;
var map__293085__$1 = ((((!((map__293085 == null)))?((((map__293085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293085):map__293085);
var seen = cljs.core.get.call(null,map__293085__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__293085,map__293085__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__293085,map__293085__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq293080){
var G__293081 = cljs.core.first.call(null,seq293080);
var seq293080__$1 = cljs.core.next.call(null,seq293080);
var G__293082 = cljs.core.first.call(null,seq293080__$1);
var seq293080__$2 = cljs.core.next.call(null,seq293080__$1);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic(G__293081,G__293082,seq293080__$2);
});
/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__36267__auto__ = [];
var len__36260__auto___293113 = arguments.length;
var i__36261__auto___293114 = (0);
while(true){
if((i__36261__auto___293114 < len__36260__auto___293113)){
args__36267__auto__.push((arguments[i__36261__auto___293114]));

var G__293115 = (i__36261__auto___293114 + (1));
i__36261__auto___293114 = G__293115;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((3) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36268__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__293100){
var map__293101 = p__293100;
var map__293101__$1 = ((((!((map__293101 == null)))?((((map__293101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293101):map__293101);
var opts = map__293101__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__4657__auto__ = cljs.core.some.call(null,((function (opts__$1,map__293101,map__293101__$1,opts){
return (function (p__293104){
var vec__293105 = p__293104;
var _ = cljs.core.nth.call(null,vec__293105,(0),null);
var pm = cljs.core.nth.call(null,vec__293105,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__293105,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__293101,map__293101__$1,opts))
,cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__4657__auto__)){
var preds = temp__4657__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq293094){
var G__293095 = cljs.core.first.call(null,seq293094);
var seq293094__$1 = cljs.core.next.call(null,seq293094);
var G__293096 = cljs.core.first.call(null,seq293094__$1);
var seq293094__$2 = cljs.core.next.call(null,seq293094__$1);
var G__293097 = cljs.core.first.call(null,seq293094__$2);
var seq293094__$3 = cljs.core.next.call(null,seq293094__$2);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__293095,G__293096,G__293097,seq293094__$3);
});
/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__293132 = m2;
var G__293133 = m1;
m1 = G__293132;
m2 = G__293133;
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
return (function (p1__293136_SHARP_){
return (cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds1),p1__293136_SHARP_)) + cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds2),p1__293136_SHARP_)));
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
var G__293167 = find_intersects.call(null);
intersects = G__293167;
continue;
}
break;
}
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__35971__auto__ = (function loom$alg_generic$reverse_edges_$_iter__293181(s__293182){
return (new cljs.core.LazySeq(null,(function (){
var s__293182__$1 = s__293182;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__293182__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var node = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__293182__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__293181_$_iter__293183(s__293184){
return (new cljs.core.LazySeq(null,((function (s__293182__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__293184__$1 = s__293184;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__293184__$1);
if(temp__4657__auto____$1){
var s__293184__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__293184__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__293184__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__293186 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__293185 = (0);
while(true){
if((i__293185 < size__35970__auto__)){
var nbr = cljs.core._nth.call(null,c__35969__auto__,i__293185);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
cljs.core.chunk_append.call(null,b__293186,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__293208 = (i__293185 + (1));
i__293185 = G__293208;
continue;
} else {
var G__293209 = (i__293185 + (1));
i__293185 = G__293209;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293186),loom$alg_generic$reverse_edges_$_iter__293181_$_iter__293183.call(null,cljs.core.chunk_rest.call(null,s__293184__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293186),null);
}
} else {
var nbr = cljs.core.first.call(null,s__293184__$2);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__293181_$_iter__293183.call(null,cljs.core.rest.call(null,s__293184__$2)));
} else {
var G__293210 = cljs.core.rest.call(null,s__293184__$2);
s__293184__$1 = G__293210;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__293182__$1,node,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__293182__$1,node,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,successor_fn.call(null,node)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$alg_generic$reverse_edges_$_iter__293181.call(null,cljs.core.rest.call(null,s__293182__$1)));
} else {
var G__293211 = cljs.core.rest.call(null,s__293182__$1);
s__293182__$1 = G__293211;
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
var iter__35971__auto__ = (function loom$alg_generic$conj_paths_$_iter__293221(s__293222){
return (new cljs.core.LazySeq(null,(function (){
var s__293222__$1 = s__293222;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__293222__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__293222__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__293221_$_iter__293223(s__293224){
return (new cljs.core.LazySeq(null,((function (s__293222__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__293224__$1 = s__293224;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__293224__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var from = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__35967__auto__ = ((function (s__293224__$1,s__293222__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__293221_$_iter__293223_$_iter__293225(s__293226){
return (new cljs.core.LazySeq(null,((function (s__293224__$1,s__293222__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__293226__$1 = s__293226;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__293226__$1);
if(temp__4657__auto____$2){
var s__293226__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__293226__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__293226__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__293228 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__293227 = (0);
while(true){
if((i__293227 < size__35970__auto__)){
var to = cljs.core._nth.call(null,c__35969__auto__,i__293227);
cljs.core.chunk_append.call(null,b__293228,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__293257 = (i__293227 + (1));
i__293227 = G__293257;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293228),loom$alg_generic$conj_paths_$_iter__293221_$_iter__293223_$_iter__293225.call(null,cljs.core.chunk_rest.call(null,s__293226__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293228),null);
}
} else {
var to = cljs.core.first.call(null,s__293226__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__293221_$_iter__293223_$_iter__293225.call(null,cljs.core.rest.call(null,s__293226__$2)));
}
} else {
return null;
}
break;
}
});})(s__293224__$1,s__293222__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__293224__$1,s__293222__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$alg_generic$conj_paths_$_iter__293221_$_iter__293223.call(null,cljs.core.rest.call(null,s__293224__$1)));
} else {
var G__293258 = cljs.core.rest.call(null,s__293224__$1);
s__293224__$1 = G__293258;
continue;
}
} else {
return null;
}
break;
}
});})(s__293222__$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__293222__$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$alg_generic$conj_paths_$_iter__293221.call(null,cljs.core.rest.call(null,s__293222__$1)));
} else {
var G__293259 = cljs.core.rest.call(null,s__293222__$1);
s__293222__$1 = G__293259;
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
return (function (p1__293260_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__293260_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__293265){
var vec__293266 = p__293265;
var key = cljs.core.nth.call(null,vec__293266,(0),null);
var val = cljs.core.nth.call(null,vec__293266,(1),null);
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
var G__293268 = outgoing__$1;
var G__293269 = incoming;
var G__293270 = q1__$1;
var G__293271 = q2;
outgoing = G__293268;
incoming = G__293269;
q1 = G__293270;
q2 = G__293271;
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
var G__293272 = outgoing;
var G__293273 = incoming__$1;
var G__293274 = q1;
var G__293275 = q2__$1;
outgoing = G__293272;
incoming = G__293273;
q1 = G__293274;
q2 = G__293275;
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
var args293278 = [];
var len__36260__auto___293305 = arguments.length;
var i__36261__auto___293306 = (0);
while(true){
if((i__36261__auto___293306 < len__36260__auto___293305)){
args293278.push((arguments[i__36261__auto___293306]));

var G__293307 = (i__36261__auto___293306 + (1));
i__36261__auto___293306 = G__293307;
continue;
} else {
}
break;
}

var G__293281 = args293278.length;
switch (G__293281) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args293278.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__293292){
var vec__293297 = p__293292;
var state = cljs.core.nth.call(null,vec__293297,(0),null);
var pq = cljs.core.nth.call(null,vec__293297,(1),null);
var temp__4657__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__293298 = temp__4657__auto__;
var dist_su = cljs.core.nth.call(null,vec__293298,(0),null);
var _ = cljs.core.nth.call(null,vec__293298,(1),null);
var u = cljs.core.nth.call(null,vec__293298,(2),null);
var fpq = vec__293298;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__293298,dist_su,_,u,fpq,temp__4657__auto__,vec__293297,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__293298,dist_su,_,u,fpq,temp__4657__auto__,vec__293297,state,pq){
return (function (p__293299,v){
var vec__293300 = p__293299;
var state__$1 = cljs.core.nth.call(null,vec__293300,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__293300,(1),null);
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
});})(vec__293298,dist_su,_,u,fpq,temp__4657__auto__,vec__293297,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__293298,dist_su,_,u,fpq,temp__4657__auto__,vec__293297,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__293327){
var vec__293328 = p__293327;
var n = cljs.core.nth.call(null,vec__293328,(0),null);
var vec__293329 = cljs.core.nth.call(null,vec__293328,(1),null);
var d = cljs.core.nth.call(null,vec__293329,(0),null);
var p = cljs.core.nth.call(null,vec__293329,(1),null);
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
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__293339){
var vec__293340 = p__293339;
var node = cljs.core.nth.call(null,vec__293340,(0),null);
var _ = cljs.core.nth.call(null,vec__293340,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__293341 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__293341,(0),null);
var end_state = cljs.core.nth.call(null,vec__293341,(1),null);
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
var len__36260__auto___293397 = arguments.length;
var i__36261__auto___293398 = (0);
while(true){
if((i__36261__auto___293398 < len__36260__auto___293397)){
args__36267__auto__.push((arguments[i__36261__auto___293398]));

var G__293399 = (i__36261__auto___293398 + (1));
i__36261__auto___293398 = G__293399;
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
var seq__293372_293402 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__293379_293403 = null;
var count__293380_293404 = (0);
var i__293381_293405 = (0);
while(true){
if((i__293381_293405 < count__293380_293404)){
var bitmap_293406__$1 = cljs.core._nth.call(null,chunk__293379_293403,i__293381_293405);
var seq__293382_293407 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_293406__$1));
var chunk__293384_293408 = null;
var count__293385_293409 = (0);
var i__293386_293410 = (0);
while(true){
if((i__293386_293410 < count__293385_293409)){
var vec__293390_293411 = cljs.core._nth.call(null,chunk__293384_293408,i__293386_293410);
var idx_293412 = cljs.core.nth.call(null,vec__293390_293411,(0),null);
var value_293413 = cljs.core.nth.call(null,vec__293390_293411,(1),null);
var masked_value_293414 = (value_293413 | (new_bitmap[idx_293412]));
(new_bitmap[idx_293412] = masked_value_293414);

var G__293415 = seq__293382_293407;
var G__293416 = chunk__293384_293408;
var G__293417 = count__293385_293409;
var G__293418 = (i__293386_293410 + (1));
seq__293382_293407 = G__293415;
chunk__293384_293408 = G__293416;
count__293385_293409 = G__293417;
i__293386_293410 = G__293418;
continue;
} else {
var temp__4657__auto___293419 = cljs.core.seq.call(null,seq__293382_293407);
if(temp__4657__auto___293419){
var seq__293382_293420__$1 = temp__4657__auto___293419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__293382_293420__$1)){
var c__36002__auto___293421 = cljs.core.chunk_first.call(null,seq__293382_293420__$1);
var G__293422 = cljs.core.chunk_rest.call(null,seq__293382_293420__$1);
var G__293423 = c__36002__auto___293421;
var G__293424 = cljs.core.count.call(null,c__36002__auto___293421);
var G__293425 = (0);
seq__293382_293407 = G__293422;
chunk__293384_293408 = G__293423;
count__293385_293409 = G__293424;
i__293386_293410 = G__293425;
continue;
} else {
var vec__293392_293426 = cljs.core.first.call(null,seq__293382_293420__$1);
var idx_293427 = cljs.core.nth.call(null,vec__293392_293426,(0),null);
var value_293428 = cljs.core.nth.call(null,vec__293392_293426,(1),null);
var masked_value_293429 = (value_293428 | (new_bitmap[idx_293427]));
(new_bitmap[idx_293427] = masked_value_293429);

var G__293430 = cljs.core.next.call(null,seq__293382_293420__$1);
var G__293431 = null;
var G__293432 = (0);
var G__293433 = (0);
seq__293382_293407 = G__293430;
chunk__293384_293408 = G__293431;
count__293385_293409 = G__293432;
i__293386_293410 = G__293433;
continue;
}
} else {
}
}
break;
}

var G__293434 = seq__293372_293402;
var G__293435 = chunk__293379_293403;
var G__293436 = count__293380_293404;
var G__293437 = (i__293381_293405 + (1));
seq__293372_293402 = G__293434;
chunk__293379_293403 = G__293435;
count__293380_293404 = G__293436;
i__293381_293405 = G__293437;
continue;
} else {
var temp__4657__auto___293438 = cljs.core.seq.call(null,seq__293372_293402);
if(temp__4657__auto___293438){
var seq__293372_293439__$1 = temp__4657__auto___293438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__293372_293439__$1)){
var c__36002__auto___293440 = cljs.core.chunk_first.call(null,seq__293372_293439__$1);
var G__293441 = cljs.core.chunk_rest.call(null,seq__293372_293439__$1);
var G__293442 = c__36002__auto___293440;
var G__293443 = cljs.core.count.call(null,c__36002__auto___293440);
var G__293444 = (0);
seq__293372_293402 = G__293441;
chunk__293379_293403 = G__293442;
count__293380_293404 = G__293443;
i__293381_293405 = G__293444;
continue;
} else {
var bitmap_293445__$1 = cljs.core.first.call(null,seq__293372_293439__$1);
var seq__293373_293446 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_293445__$1));
var chunk__293375_293447 = null;
var count__293376_293448 = (0);
var i__293377_293449 = (0);
while(true){
if((i__293377_293449 < count__293376_293448)){
var vec__293393_293450 = cljs.core._nth.call(null,chunk__293375_293447,i__293377_293449);
var idx_293451 = cljs.core.nth.call(null,vec__293393_293450,(0),null);
var value_293452 = cljs.core.nth.call(null,vec__293393_293450,(1),null);
var masked_value_293454 = (value_293452 | (new_bitmap[idx_293451]));
(new_bitmap[idx_293451] = masked_value_293454);

var G__293456 = seq__293373_293446;
var G__293457 = chunk__293375_293447;
var G__293458 = count__293376_293448;
var G__293459 = (i__293377_293449 + (1));
seq__293373_293446 = G__293456;
chunk__293375_293447 = G__293457;
count__293376_293448 = G__293458;
i__293377_293449 = G__293459;
continue;
} else {
var temp__4657__auto___293460__$1 = cljs.core.seq.call(null,seq__293373_293446);
if(temp__4657__auto___293460__$1){
var seq__293373_293463__$1 = temp__4657__auto___293460__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__293373_293463__$1)){
var c__36002__auto___293464 = cljs.core.chunk_first.call(null,seq__293373_293463__$1);
var G__293465 = cljs.core.chunk_rest.call(null,seq__293373_293463__$1);
var G__293466 = c__36002__auto___293464;
var G__293467 = cljs.core.count.call(null,c__36002__auto___293464);
var G__293468 = (0);
seq__293373_293446 = G__293465;
chunk__293375_293447 = G__293466;
count__293376_293448 = G__293467;
i__293377_293449 = G__293468;
continue;
} else {
var vec__293396_293469 = cljs.core.first.call(null,seq__293373_293463__$1);
var idx_293470 = cljs.core.nth.call(null,vec__293396_293469,(0),null);
var value_293471 = cljs.core.nth.call(null,vec__293396_293469,(1),null);
var masked_value_293474 = (value_293471 | (new_bitmap[idx_293470]));
(new_bitmap[idx_293470] = masked_value_293474);

var G__293475 = cljs.core.next.call(null,seq__293373_293463__$1);
var G__293476 = null;
var G__293477 = (0);
var G__293478 = (0);
seq__293373_293446 = G__293475;
chunk__293375_293447 = G__293476;
count__293376_293448 = G__293477;
i__293377_293449 = G__293478;
continue;
}
} else {
}
}
break;
}

var G__293479 = cljs.core.next.call(null,seq__293372_293439__$1);
var G__293480 = null;
var G__293481 = (0);
var G__293482 = (0);
seq__293372_293402 = G__293479;
chunk__293379_293403 = G__293480;
count__293380_293404 = G__293481;
i__293381_293405 = G__293482;
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

loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq293368){
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq293368));
});
/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__35971__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__293499(s__293500){
return (new cljs.core.LazySeq(null,(function (){
var s__293500__$1 = s__293500;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__293500__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var chunk = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__293500__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__293499_$_iter__293501(s__293502){
return (new cljs.core.LazySeq(null,((function (s__293500__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__293502__$1 = s__293502;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__293502__$1);
if(temp__4657__auto____$1){
var s__293502__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__293502__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__293502__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__293504 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__293503 = (0);
while(true){
if((i__293503 < size__35970__auto__)){
var offset = cljs.core._nth.call(null,c__35969__auto__,i__293503);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__293504,idx);

var G__293521 = (i__293503 + (1));
i__293503 = G__293521;
continue;
} else {
var G__293524 = (i__293503 + (1));
i__293503 = G__293524;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293504),loom$alg_generic$bm_get_indicies_$_iter__293499_$_iter__293501.call(null,cljs.core.chunk_rest.call(null,s__293502__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293504),null);
}
} else {
var offset = cljs.core.first.call(null,s__293502__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__293499_$_iter__293501.call(null,cljs.core.rest.call(null,s__293502__$2)));
} else {
var G__293525 = cljs.core.rest.call(null,s__293502__$2);
s__293502__$1 = G__293525;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__293500__$1,chunk,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__293500__$1,chunk,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$alg_generic$bm_get_indicies_$_iter__293499.call(null,cljs.core.rest.call(null,s__293500__$1)));
} else {
var G__293530 = cljs.core.rest.call(null,s__293500__$1);
s__293500__$1 = G__293530;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35815__auto__,k293532,else__35816__auto__){
var self__ = this;
var this__35815__auto____$1 = this;
var G__293536 = (((k293532 instanceof cljs.core.Keyword))?k293532.fqn:null);
switch (G__293536) {
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
return cljs.core.get.call(null,self__.__extmap,k293532,else__35816__auto__);

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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__293531){
var self__ = this;
var G__293531__$1 = this;
return (new cljs.core.RecordIter((0),G__293531__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35820__auto__,k__35821__auto__,G__293531){
var self__ = this;
var this__35820__auto____$1 = this;
var pred__293547 = cljs.core.keyword_identical_QMARK_;
var expr__293548 = k__35821__auto__;
if(cljs.core.truth_(pred__293547.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__293548))){
return (new loom.alg_generic.Ancestry(G__293531,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__293547.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__293548))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__293531,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__293547.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__293548))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__293531,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35821__auto__,G__293531),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35825__auto__){
var self__ = this;
var this__35825__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35812__auto__,G__293531){
var self__ = this;
var this__35812__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__293531,self__.__extmap,self__.__hash));
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

loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__293533){
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__293533),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__293533),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__293533),null,cljs.core.dissoc.call(null,G__293533,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)),null));
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
var len__36260__auto___293603 = arguments.length;
var i__36261__auto___293605 = (0);
while(true){
if((i__36261__auto___293605 < len__36260__auto___293603)){
args__36267__auto__.push((arguments[i__36261__auto___293605]));

var G__293606 = (i__36261__auto___293605 + (1));
i__36261__auto___293605 = G__293606;
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
var map__293595 = ancestry;
var map__293595__$1 = ((((!((map__293595 == null)))?((((map__293595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293595):map__293595);
var node__GT_idx = cljs.core.get.call(null,map__293595__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__293595__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__293595__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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

loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq293590){
var G__293591 = cljs.core.first.call(null,seq293590);
var seq293590__$1 = cljs.core.next.call(null,seq293590);
var G__293592 = cljs.core.first.call(null,seq293590__$1);
var seq293590__$2 = cljs.core.next.call(null,seq293590__$1);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic(G__293591,G__293592,seq293590__$2);
});
/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__293630 = ancestry;
var map__293630__$1 = ((((!((map__293630 == null)))?((((map__293630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293630):map__293630);
var node__GT_idx = cljs.core.get.call(null,map__293630__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__293630__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__293641 = ancestry;
var map__293641__$1 = ((((!((map__293641 == null)))?((((map__293641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293641):map__293641);
var node__GT_idx = cljs.core.get.call(null,map__293641__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__293641__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__293641__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});

//# sourceMappingURL=alg_generic.js.map?rel=1459068551808