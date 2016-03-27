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
return (function (p1__283032_SHARP_){
return loom$alg_generic$paths.call(null,preds,cljs.core.conj.call(null,path,p1__283032_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__283031_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__283031_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__283033_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__283033_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__283038){
var vec__283039 = p__283038;
var n = cljs.core.nth.call(null,vec__283039,(0),null);
var p = cljs.core.nth.call(null,vec__283039,(1),null);
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
var len__36260__auto___283056 = arguments.length;
var i__36261__auto___283057 = (0);
while(true){
if((i__36261__auto___283057 < len__36260__auto___283056)){
args__36267__auto__.push((arguments[i__36261__auto___283057]));

var G__283058 = (i__36261__auto___283057 + (1));
i__36261__auto___283057 = G__283058;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__283045){
var map__283046 = p__283045;
var map__283046__$1 = ((((!((map__283046 == null)))?((((map__283046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__283046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__283046):map__283046);
var seen = cljs.core.get.call(null,map__283046__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__283046,map__283046__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__4657__auto__,map__283046,map__283046__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__4657__auto__,map__283046,map__283046__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__283046,map__283046__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq283040){
var G__283041 = cljs.core.first.call(null,seq283040);
var seq283040__$1 = cljs.core.next.call(null,seq283040);
var G__283042 = cljs.core.first.call(null,seq283040__$1);
var seq283040__$2 = cljs.core.next.call(null,seq283040__$1);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic(G__283041,G__283042,seq283040__$2);
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
var len__36260__auto___283080 = arguments.length;
var i__36261__auto___283081 = (0);
while(true){
if((i__36261__auto___283081 < len__36260__auto___283080)){
args__36267__auto__.push((arguments[i__36261__auto___283081]));

var G__283082 = (i__36261__auto___283081 + (1));
i__36261__auto___283081 = G__283082;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__283074){
var map__283075 = p__283074;
var map__283075__$1 = ((((!((map__283075 == null)))?((((map__283075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__283075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__283075):map__283075);
var seen = cljs.core.get.call(null,map__283075__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__283075,map__283075__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__4655__auto__)){
var nbr = temp__4655__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__283075,map__283075__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__283075,map__283075__$1,seen))
,null,null)));
} else {
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__283095 = successors__$1;
var G__283096 = parent;
var G__283097 = cljs.core.peek.call(null,nbrstack);
var G__283098 = cljs.core.pop.call(null,stack);
var G__283099 = cljs.core.pop.call(null,nbrstack);
var G__283100 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__283095;
start__$1 = G__283096;
nbrs = G__283097;
stack = G__283098;
nbrstack = G__283099;
seen__$1 = G__283100;
continue;
} else {
return null;
}
}
break;
}
});})(map__283075,map__283075__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq283071){
var G__283072 = cljs.core.first.call(null,seq283071);
var seq283071__$1 = cljs.core.next.call(null,seq283071);
var G__283073 = cljs.core.first.call(null,seq283071__$1);
var seq283071__$2 = cljs.core.next.call(null,seq283071__$1);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__283072,G__283073,seq283071__$2);
});
/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__36267__auto__ = [];
var len__36260__auto___283119 = arguments.length;
var i__36261__auto___283120 = (0);
while(true){
if((i__36261__auto___283120 < len__36260__auto___283119)){
args__36267__auto__.push((arguments[i__36261__auto___283120]));

var G__283121 = (i__36261__auto___283120 + (1));
i__36261__auto___283120 = G__283121;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__283114){
var map__283115 = p__283114;
var map__283115__$1 = ((((!((map__283115 == null)))?((((map__283115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__283115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__283115):map__283115);
var seen = cljs.core.get.call(null,map__283115__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__283115__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__283125 = seen__$2;
var G__283126 = cljs.core.assoc.call(null,preds,u,v);
var G__283127 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__283125;
preds = G__283126;
stack = G__283127;
continue;
} else {
var G__283128 = seen__$2;
var G__283129 = preds;
var G__283130 = cljs.core.pop.call(null,stack);
seen__$1 = G__283128;
preds = G__283129;
stack = G__283130;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq283111){
var G__283112 = cljs.core.first.call(null,seq283111);
var seq283111__$1 = cljs.core.next.call(null,seq283111);
var G__283113 = cljs.core.first.call(null,seq283111__$1);
var seq283111__$2 = cljs.core.next.call(null,seq283111__$1);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(G__283112,G__283113,seq283111__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__36267__auto__ = [];
var len__36260__auto___283147 = arguments.length;
var i__36261__auto___283148 = (0);
while(true){
if((i__36261__auto___283148 < len__36260__auto___283147)){
args__36267__auto__.push((arguments[i__36261__auto___283148]));

var G__283149 = (i__36261__auto___283148 + (1));
i__36261__auto___283148 = G__283149;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__283144){
var map__283145 = p__283144;
var map__283145__$1 = ((((!((map__283145 == null)))?((((map__283145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__283145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__283145):map__283145);
var seen = cljs.core.get.call(null,map__283145__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__283145__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__283161 = seen__$2;
var G__283162 = cljs.core.conj.call(null,result,v);
var G__283163 = cljs.core.pop.call(null,stack);
seen__$1 = G__283161;
result = G__283162;
stack = G__283163;
continue;
} else {
var G__283168 = seen__$2;
var G__283169 = result;
var G__283170 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__283168;
result = G__283169;
stack = G__283170;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq283140){
var G__283141 = cljs.core.first.call(null,seq283140);
var seq283140__$1 = cljs.core.next.call(null,seq283140);
var G__283142 = cljs.core.first.call(null,seq283140__$1);
var seq283140__$2 = cljs.core.next.call(null,seq283140__$1);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__283141,G__283142,seq283140__$2);
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
var len__36260__auto___283205 = arguments.length;
var i__36261__auto___283206 = (0);
while(true){
if((i__36261__auto___283206 < len__36260__auto___283205)){
args__36267__auto__.push((arguments[i__36261__auto___283206]));

var G__283207 = (i__36261__auto___283206 + (1));
i__36261__auto___283206 = G__283207;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__283194){
var map__283195 = p__283194;
var map__283195__$1 = ((((!((map__283195 == null)))?((((map__283195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__283195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__283195):map__283195);
var seen = cljs.core.get.call(null,map__283195__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__283195__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__283210 = start__$1;
var G__283211 = cljs.core.next.call(null,nbrs);
var G__283212 = stack;
var G__283213 = nbrstack;
var G__283214 = seen__$2;
var G__283215 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__283210;
nbrs = G__283211;
stack = G__283212;
nbrstack = G__283213;
seen__$1 = G__283214;
edges = G__283215;
continue;
} else {
var G__283216 = nbr;
var G__283217 = successors.call(null,nbr);
var G__283218 = cljs.core.conj.call(null,stack,start__$1);
var G__283219 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__283220 = seen__$2;
var G__283221 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__283216;
nbrs = G__283217;
stack = G__283218;
nbrstack = G__283219;
seen__$1 = G__283220;
edges = G__283221;
continue;
}
} else {
var temp__4655__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4655__auto____$1)){
var parent = temp__4655__auto____$1;
var G__283224 = parent;
var G__283225 = cljs.core.peek.call(null,nbrstack);
var G__283226 = cljs.core.pop.call(null,stack);
var G__283227 = cljs.core.pop.call(null,nbrstack);
var G__283228 = seen__$2;
var G__283229 = edges;
start__$1 = G__283224;
nbrs = G__283225;
stack = G__283226;
nbrstack = G__283227;
seen__$1 = G__283228;
edges = G__283229;
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

loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq283180){
var G__283181 = cljs.core.first.call(null,seq283180);
var seq283180__$1 = cljs.core.next.call(null,seq283180);
var G__283182 = cljs.core.first.call(null,seq283180__$1);
var seq283180__$2 = cljs.core.next.call(null,seq283180__$1);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__283181,G__283182,seq283180__$2);
});
/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var args283234 = [];
var len__36260__auto___283238 = arguments.length;
var i__36261__auto___283239 = (0);
while(true){
if((i__36261__auto___283239 < len__36260__auto___283238)){
args283234.push((arguments[i__36261__auto___283239]));

var G__283240 = (i__36261__auto___283239 + (1));
i__36261__auto___283239 = G__283240;
continue;
} else {
}
break;
}

var G__283237 = args283234.length;
switch (G__283237) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args283234.length)].join('')));

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
var G__283242 = seen__$2;
var G__283243 = explored__$1;
var G__283244 = result;
var G__283245 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__283242;
explored__$1 = G__283243;
result = G__283244;
stack = G__283245;
continue;
}
} else {
var G__283246 = seen__$2;
var G__283247 = cljs.core.conj.call(null,explored__$1,v);
var G__283248 = cljs.core.conj.call(null,result,v);
var G__283249 = cljs.core.pop.call(null,stack);
seen__$1 = G__283246;
explored__$1 = G__283247;
result = G__283248;
stack = G__283249;
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
var len__36260__auto___283320 = arguments.length;
var i__36261__auto___283321 = (0);
while(true){
if((i__36261__auto___283321 < len__36260__auto___283320)){
args__36267__auto__.push((arguments[i__36261__auto___283321]));

var G__283322 = (i__36261__auto___283321 + (1));
i__36261__auto___283321 = G__283322;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__283258){
var map__283259 = p__283258;
var map__283259__$1 = ((((!((map__283259 == null)))?((((map__283259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__283259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__283259):map__283259);
var f = cljs.core.get.call(null,map__283259__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__283259__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__283259__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__35191__auto__ = f;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return ((function (or__35191__auto__,map__283259,map__283259__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__35191__auto__,map__283259,map__283259__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__35191__auto__ = when;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__283259,map__283259__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__4657__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__283298 = temp__4657__auto__;
var node = cljs.core.nth.call(null,vec__283298,(0),null);
var depth = cljs.core.nth.call(null,vec__283298,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__283298,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__283259,map__283259__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__283298,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__283259,map__283259__$1,f,when,seen){
return (function (p1__283251_SHARP_){
return nbr_pred.call(null,p1__283251_SHARP_,node,(depth + (1)));
});})(vec__283298,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__283259,map__283259__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__283298,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__283259,map__283259__$1,f,when,seen){
return (function (p1__283250_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__283250_SHARP_);
});})(vec__283298,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__283259,map__283259__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__35971__auto__ = ((function (nbrs,vec__283298,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__283259,map__283259__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__283303(s__283304){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__283298,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__283259,map__283259__$1,f,when,seen){
return (function (){
var s__283304__$1 = s__283304;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__283304__$1);
if(temp__4657__auto____$1){
var s__283304__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__283304__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__283304__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__283306 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__283305 = (0);
while(true){
if((i__283305 < size__35970__auto__)){
var nbr = cljs.core._nth.call(null,c__35969__auto__,i__283305);
cljs.core.chunk_append.call(null,b__283306,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__283347 = (i__283305 + (1));
i__283305 = G__283347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283306),loom$alg_generic$step_$_iter__283303.call(null,cljs.core.chunk_rest.call(null,s__283304__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283306),null);
}
} else {
var nbr = cljs.core.first.call(null,s__283304__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__283303.call(null,cljs.core.rest.call(null,s__283304__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__283298,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__283259,map__283259__$1,f,when,seen))
,null,null));
});})(nbrs,vec__283298,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__283259,map__283259__$1,f,when,seen))
;
return iter__35971__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__283298,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__283259,map__283259__$1,f,when,seen){
return (function (p1__283252_SHARP_,p2__283253_SHARP_){
return cljs.core.assoc.call(null,p1__283252_SHARP_,p2__283253_SHARP_,node);
});})(nbrs,vec__283298,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__283259,map__283259__$1,f,when,seen))
,preds,nbrs));
});})(vec__283298,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__283259,map__283259__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__283259,map__283259__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.fromArray([start,null], true, false),(function (){var iter__35971__auto__ = ((function (f__$1,nbr_pred,map__283259,map__283259__$1,f,when,seen){
return (function loom$alg_generic$iter__283309(s__283310){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__283259,map__283259__$1,f,when,seen){
return (function (){
var s__283310__$1 = s__283310;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__283310__$1);
if(temp__4657__auto__){
var s__283310__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__283310__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__283310__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__283312 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__283311 = (0);
while(true){
if((i__283311 < size__35970__auto__)){
var s = cljs.core._nth.call(null,c__35969__auto__,i__283311);
cljs.core.chunk_append.call(null,b__283312,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__283356 = (i__283311 + (1));
i__283311 = G__283356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283312),loom$alg_generic$iter__283309.call(null,cljs.core.chunk_rest.call(null,s__283310__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283312),null);
}
} else {
var s = cljs.core.first.call(null,s__283310__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__283309.call(null,cljs.core.rest.call(null,s__283310__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__283259,map__283259__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__283259,map__283259__$1,f,when,seen))
;
return iter__35971__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq283254){
var G__283255 = cljs.core.first.call(null,seq283254);
var seq283254__$1 = cljs.core.next.call(null,seq283254);
var G__283256 = cljs.core.first.call(null,seq283254__$1);
var seq283254__$2 = cljs.core.next.call(null,seq283254__$1);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__283255,G__283256,seq283254__$2);
});
/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__36267__auto__ = [];
var len__36260__auto___283366 = arguments.length;
var i__36261__auto___283367 = (0);
while(true){
if((i__36261__auto___283367 < len__36260__auto___283366)){
args__36267__auto__.push((arguments[i__36261__auto___283367]));

var G__283368 = (i__36261__auto___283367 + (1));
i__36261__auto___283367 = G__283368;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__283363){
var map__283364 = p__283363;
var map__283364__$1 = ((((!((map__283364 == null)))?((((map__283364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__283364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__283364):map__283364);
var seen = cljs.core.get.call(null,map__283364__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__283364,map__283364__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__283364,map__283364__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq283358){
var G__283359 = cljs.core.first.call(null,seq283358);
var seq283358__$1 = cljs.core.next.call(null,seq283358);
var G__283360 = cljs.core.first.call(null,seq283358__$1);
var seq283358__$2 = cljs.core.next.call(null,seq283358__$1);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic(G__283359,G__283360,seq283358__$2);
});
/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__36267__auto__ = [];
var len__36260__auto___283400 = arguments.length;
var i__36261__auto___283401 = (0);
while(true){
if((i__36261__auto___283401 < len__36260__auto___283400)){
args__36267__auto__.push((arguments[i__36261__auto___283401]));

var G__283403 = (i__36261__auto___283401 + (1));
i__36261__auto___283401 = G__283403;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((3) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36268__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__283389){
var map__283390 = p__283389;
var map__283390__$1 = ((((!((map__283390 == null)))?((((map__283390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__283390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__283390):map__283390);
var opts = map__283390__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__4657__auto__ = cljs.core.some.call(null,((function (opts__$1,map__283390,map__283390__$1,opts){
return (function (p__283392){
var vec__283393 = p__283392;
var _ = cljs.core.nth.call(null,vec__283393,(0),null);
var pm = cljs.core.nth.call(null,vec__283393,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__283393,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__283390,map__283390__$1,opts))
,cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__4657__auto__)){
var preds = temp__4657__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq283380){
var G__283381 = cljs.core.first.call(null,seq283380);
var seq283380__$1 = cljs.core.next.call(null,seq283380);
var G__283382 = cljs.core.first.call(null,seq283380__$1);
var seq283380__$2 = cljs.core.next.call(null,seq283380__$1);
var G__283383 = cljs.core.first.call(null,seq283380__$2);
var seq283380__$3 = cljs.core.next.call(null,seq283380__$2);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__283381,G__283382,G__283383,seq283380__$3);
});
/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__283420 = m2;
var G__283421 = m1;
m1 = G__283420;
m2 = G__283421;
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
return (function (p1__283425_SHARP_){
return (cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds1),p1__283425_SHARP_)) + cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds2),p1__283425_SHARP_)));
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
var G__283441 = find_intersects.call(null);
intersects = G__283441;
continue;
}
break;
}
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__35971__auto__ = (function loom$alg_generic$reverse_edges_$_iter__283454(s__283455){
return (new cljs.core.LazySeq(null,(function (){
var s__283455__$1 = s__283455;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__283455__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var node = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__283455__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__283454_$_iter__283456(s__283457){
return (new cljs.core.LazySeq(null,((function (s__283455__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__283457__$1 = s__283457;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__283457__$1);
if(temp__4657__auto____$1){
var s__283457__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__283457__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__283457__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__283459 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__283458 = (0);
while(true){
if((i__283458 < size__35970__auto__)){
var nbr = cljs.core._nth.call(null,c__35969__auto__,i__283458);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
cljs.core.chunk_append.call(null,b__283459,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__283463 = (i__283458 + (1));
i__283458 = G__283463;
continue;
} else {
var G__283464 = (i__283458 + (1));
i__283458 = G__283464;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283459),loom$alg_generic$reverse_edges_$_iter__283454_$_iter__283456.call(null,cljs.core.chunk_rest.call(null,s__283457__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283459),null);
}
} else {
var nbr = cljs.core.first.call(null,s__283457__$2);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__283454_$_iter__283456.call(null,cljs.core.rest.call(null,s__283457__$2)));
} else {
var G__283465 = cljs.core.rest.call(null,s__283457__$2);
s__283457__$1 = G__283465;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__283455__$1,node,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__283455__$1,node,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,successor_fn.call(null,node)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$alg_generic$reverse_edges_$_iter__283454.call(null,cljs.core.rest.call(null,s__283455__$1)));
} else {
var G__283466 = cljs.core.rest.call(null,s__283455__$1);
s__283455__$1 = G__283466;
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
var iter__35971__auto__ = (function loom$alg_generic$conj_paths_$_iter__283492(s__283493){
return (new cljs.core.LazySeq(null,(function (){
var s__283493__$1 = s__283493;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__283493__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__283493__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__283492_$_iter__283494(s__283495){
return (new cljs.core.LazySeq(null,((function (s__283493__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__283495__$1 = s__283495;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__283495__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var from = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__35967__auto__ = ((function (s__283495__$1,s__283493__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__283492_$_iter__283494_$_iter__283496(s__283497){
return (new cljs.core.LazySeq(null,((function (s__283495__$1,s__283493__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__283497__$1 = s__283497;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__283497__$1);
if(temp__4657__auto____$2){
var s__283497__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__283497__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__283497__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__283499 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__283498 = (0);
while(true){
if((i__283498 < size__35970__auto__)){
var to = cljs.core._nth.call(null,c__35969__auto__,i__283498);
cljs.core.chunk_append.call(null,b__283499,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__283515 = (i__283498 + (1));
i__283498 = G__283515;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283499),loom$alg_generic$conj_paths_$_iter__283492_$_iter__283494_$_iter__283496.call(null,cljs.core.chunk_rest.call(null,s__283497__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283499),null);
}
} else {
var to = cljs.core.first.call(null,s__283497__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__283492_$_iter__283494_$_iter__283496.call(null,cljs.core.rest.call(null,s__283497__$2)));
}
} else {
return null;
}
break;
}
});})(s__283495__$1,s__283493__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__283495__$1,s__283493__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$alg_generic$conj_paths_$_iter__283492_$_iter__283494.call(null,cljs.core.rest.call(null,s__283495__$1)));
} else {
var G__283517 = cljs.core.rest.call(null,s__283495__$1);
s__283495__$1 = G__283517;
continue;
}
} else {
return null;
}
break;
}
});})(s__283493__$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__283493__$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$alg_generic$conj_paths_$_iter__283492.call(null,cljs.core.rest.call(null,s__283493__$1)));
} else {
var G__283519 = cljs.core.rest.call(null,s__283493__$1);
s__283493__$1 = G__283519;
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
return (function (p1__283521_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__283521_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__283535){
var vec__283536 = p__283535;
var key = cljs.core.nth.call(null,vec__283536,(0),null);
var val = cljs.core.nth.call(null,vec__283536,(1),null);
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
var G__283549 = outgoing__$1;
var G__283550 = incoming;
var G__283551 = q1__$1;
var G__283552 = q2;
outgoing = G__283549;
incoming = G__283550;
q1 = G__283551;
q2 = G__283552;
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
var G__283557 = outgoing;
var G__283558 = incoming__$1;
var G__283559 = q1;
var G__283560 = q2__$1;
outgoing = G__283557;
incoming = G__283558;
q1 = G__283559;
q2 = G__283560;
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
var args283567 = [];
var len__36260__auto___283601 = arguments.length;
var i__36261__auto___283602 = (0);
while(true){
if((i__36261__auto___283602 < len__36260__auto___283601)){
args283567.push((arguments[i__36261__auto___283602]));

var G__283603 = (i__36261__auto___283602 + (1));
i__36261__auto___283602 = G__283603;
continue;
} else {
}
break;
}

var G__283569 = args283567.length;
switch (G__283569) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args283567.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__283587){
var vec__283592 = p__283587;
var state = cljs.core.nth.call(null,vec__283592,(0),null);
var pq = cljs.core.nth.call(null,vec__283592,(1),null);
var temp__4657__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__283595 = temp__4657__auto__;
var dist_su = cljs.core.nth.call(null,vec__283595,(0),null);
var _ = cljs.core.nth.call(null,vec__283595,(1),null);
var u = cljs.core.nth.call(null,vec__283595,(2),null);
var fpq = vec__283595;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__283595,dist_su,_,u,fpq,temp__4657__auto__,vec__283592,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__283595,dist_su,_,u,fpq,temp__4657__auto__,vec__283592,state,pq){
return (function (p__283597,v){
var vec__283598 = p__283597;
var state__$1 = cljs.core.nth.call(null,vec__283598,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__283598,(1),null);
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
});})(vec__283595,dist_su,_,u,fpq,temp__4657__auto__,vec__283592,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__283595,dist_su,_,u,fpq,temp__4657__auto__,vec__283592,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__283625){
var vec__283626 = p__283625;
var n = cljs.core.nth.call(null,vec__283626,(0),null);
var vec__283627 = cljs.core.nth.call(null,vec__283626,(1),null);
var d = cljs.core.nth.call(null,vec__283627,(0),null);
var p = cljs.core.nth.call(null,vec__283627,(1),null);
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
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__283639){
var vec__283640 = p__283639;
var node = cljs.core.nth.call(null,vec__283640,(0),null);
var _ = cljs.core.nth.call(null,vec__283640,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__283641 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__283641,(0),null);
var end_state = cljs.core.nth.call(null,vec__283641,(1),null);
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
var len__36260__auto___283698 = arguments.length;
var i__36261__auto___283699 = (0);
while(true){
if((i__36261__auto___283699 < len__36260__auto___283698)){
args__36267__auto__.push((arguments[i__36261__auto___283699]));

var G__283700 = (i__36261__auto___283699 + (1));
i__36261__auto___283699 = G__283700;
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
var seq__283670_283706 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__283677_283707 = null;
var count__283678_283708 = (0);
var i__283679_283709 = (0);
while(true){
if((i__283679_283709 < count__283678_283708)){
var bitmap_283714__$1 = cljs.core._nth.call(null,chunk__283677_283707,i__283679_283709);
var seq__283680_283715 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_283714__$1));
var chunk__283682_283716 = null;
var count__283683_283717 = (0);
var i__283684_283718 = (0);
while(true){
if((i__283684_283718 < count__283683_283717)){
var vec__283686_283723 = cljs.core._nth.call(null,chunk__283682_283716,i__283684_283718);
var idx_283724 = cljs.core.nth.call(null,vec__283686_283723,(0),null);
var value_283725 = cljs.core.nth.call(null,vec__283686_283723,(1),null);
var masked_value_283726 = (value_283725 | (new_bitmap[idx_283724]));
(new_bitmap[idx_283724] = masked_value_283726);

var G__283727 = seq__283680_283715;
var G__283728 = chunk__283682_283716;
var G__283729 = count__283683_283717;
var G__283730 = (i__283684_283718 + (1));
seq__283680_283715 = G__283727;
chunk__283682_283716 = G__283728;
count__283683_283717 = G__283729;
i__283684_283718 = G__283730;
continue;
} else {
var temp__4657__auto___283733 = cljs.core.seq.call(null,seq__283680_283715);
if(temp__4657__auto___283733){
var seq__283680_283735__$1 = temp__4657__auto___283733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__283680_283735__$1)){
var c__36002__auto___283737 = cljs.core.chunk_first.call(null,seq__283680_283735__$1);
var G__283738 = cljs.core.chunk_rest.call(null,seq__283680_283735__$1);
var G__283739 = c__36002__auto___283737;
var G__283740 = cljs.core.count.call(null,c__36002__auto___283737);
var G__283741 = (0);
seq__283680_283715 = G__283738;
chunk__283682_283716 = G__283739;
count__283683_283717 = G__283740;
i__283684_283718 = G__283741;
continue;
} else {
var vec__283687_283742 = cljs.core.first.call(null,seq__283680_283735__$1);
var idx_283743 = cljs.core.nth.call(null,vec__283687_283742,(0),null);
var value_283744 = cljs.core.nth.call(null,vec__283687_283742,(1),null);
var masked_value_283747 = (value_283744 | (new_bitmap[idx_283743]));
(new_bitmap[idx_283743] = masked_value_283747);

var G__283748 = cljs.core.next.call(null,seq__283680_283735__$1);
var G__283749 = null;
var G__283750 = (0);
var G__283751 = (0);
seq__283680_283715 = G__283748;
chunk__283682_283716 = G__283749;
count__283683_283717 = G__283750;
i__283684_283718 = G__283751;
continue;
}
} else {
}
}
break;
}

var G__283752 = seq__283670_283706;
var G__283753 = chunk__283677_283707;
var G__283754 = count__283678_283708;
var G__283755 = (i__283679_283709 + (1));
seq__283670_283706 = G__283752;
chunk__283677_283707 = G__283753;
count__283678_283708 = G__283754;
i__283679_283709 = G__283755;
continue;
} else {
var temp__4657__auto___283766 = cljs.core.seq.call(null,seq__283670_283706);
if(temp__4657__auto___283766){
var seq__283670_283767__$1 = temp__4657__auto___283766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__283670_283767__$1)){
var c__36002__auto___283768 = cljs.core.chunk_first.call(null,seq__283670_283767__$1);
var G__283769 = cljs.core.chunk_rest.call(null,seq__283670_283767__$1);
var G__283770 = c__36002__auto___283768;
var G__283771 = cljs.core.count.call(null,c__36002__auto___283768);
var G__283772 = (0);
seq__283670_283706 = G__283769;
chunk__283677_283707 = G__283770;
count__283678_283708 = G__283771;
i__283679_283709 = G__283772;
continue;
} else {
var bitmap_283773__$1 = cljs.core.first.call(null,seq__283670_283767__$1);
var seq__283671_283774 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_283773__$1));
var chunk__283673_283775 = null;
var count__283674_283776 = (0);
var i__283675_283777 = (0);
while(true){
if((i__283675_283777 < count__283674_283776)){
var vec__283694_283780 = cljs.core._nth.call(null,chunk__283673_283775,i__283675_283777);
var idx_283781 = cljs.core.nth.call(null,vec__283694_283780,(0),null);
var value_283782 = cljs.core.nth.call(null,vec__283694_283780,(1),null);
var masked_value_283783 = (value_283782 | (new_bitmap[idx_283781]));
(new_bitmap[idx_283781] = masked_value_283783);

var G__283784 = seq__283671_283774;
var G__283785 = chunk__283673_283775;
var G__283786 = count__283674_283776;
var G__283787 = (i__283675_283777 + (1));
seq__283671_283774 = G__283784;
chunk__283673_283775 = G__283785;
count__283674_283776 = G__283786;
i__283675_283777 = G__283787;
continue;
} else {
var temp__4657__auto___283790__$1 = cljs.core.seq.call(null,seq__283671_283774);
if(temp__4657__auto___283790__$1){
var seq__283671_283791__$1 = temp__4657__auto___283790__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__283671_283791__$1)){
var c__36002__auto___283792 = cljs.core.chunk_first.call(null,seq__283671_283791__$1);
var G__283793 = cljs.core.chunk_rest.call(null,seq__283671_283791__$1);
var G__283794 = c__36002__auto___283792;
var G__283795 = cljs.core.count.call(null,c__36002__auto___283792);
var G__283796 = (0);
seq__283671_283774 = G__283793;
chunk__283673_283775 = G__283794;
count__283674_283776 = G__283795;
i__283675_283777 = G__283796;
continue;
} else {
var vec__283696_283797 = cljs.core.first.call(null,seq__283671_283791__$1);
var idx_283798 = cljs.core.nth.call(null,vec__283696_283797,(0),null);
var value_283799 = cljs.core.nth.call(null,vec__283696_283797,(1),null);
var masked_value_283802 = (value_283799 | (new_bitmap[idx_283798]));
(new_bitmap[idx_283798] = masked_value_283802);

var G__283804 = cljs.core.next.call(null,seq__283671_283791__$1);
var G__283805 = null;
var G__283806 = (0);
var G__283807 = (0);
seq__283671_283774 = G__283804;
chunk__283673_283775 = G__283805;
count__283674_283776 = G__283806;
i__283675_283777 = G__283807;
continue;
}
} else {
}
}
break;
}

var G__283809 = cljs.core.next.call(null,seq__283670_283767__$1);
var G__283810 = null;
var G__283811 = (0);
var G__283812 = (0);
seq__283670_283706 = G__283809;
chunk__283677_283707 = G__283810;
count__283678_283708 = G__283811;
i__283679_283709 = G__283812;
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

loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq283667){
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq283667));
});
/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__35971__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__283856(s__283857){
return (new cljs.core.LazySeq(null,(function (){
var s__283857__$1 = s__283857;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__283857__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var chunk = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__283857__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__283856_$_iter__283858(s__283859){
return (new cljs.core.LazySeq(null,((function (s__283857__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__283859__$1 = s__283859;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__283859__$1);
if(temp__4657__auto____$1){
var s__283859__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__283859__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__283859__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__283861 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__283860 = (0);
while(true){
if((i__283860 < size__35970__auto__)){
var offset = cljs.core._nth.call(null,c__35969__auto__,i__283860);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__283861,idx);

var G__283885 = (i__283860 + (1));
i__283860 = G__283885;
continue;
} else {
var G__283886 = (i__283860 + (1));
i__283860 = G__283886;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283861),loom$alg_generic$bm_get_indicies_$_iter__283856_$_iter__283858.call(null,cljs.core.chunk_rest.call(null,s__283859__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283861),null);
}
} else {
var offset = cljs.core.first.call(null,s__283859__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__283856_$_iter__283858.call(null,cljs.core.rest.call(null,s__283859__$2)));
} else {
var G__283893 = cljs.core.rest.call(null,s__283859__$2);
s__283859__$1 = G__283893;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__283857__$1,chunk,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__283857__$1,chunk,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$alg_generic$bm_get_indicies_$_iter__283856.call(null,cljs.core.rest.call(null,s__283857__$1)));
} else {
var G__283896 = cljs.core.rest.call(null,s__283857__$1);
s__283857__$1 = G__283896;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35815__auto__,k283899,else__35816__auto__){
var self__ = this;
var this__35815__auto____$1 = this;
var G__283904 = (((k283899 instanceof cljs.core.Keyword))?k283899.fqn:null);
switch (G__283904) {
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
return cljs.core.get.call(null,self__.__extmap,k283899,else__35816__auto__);

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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__283898){
var self__ = this;
var G__283898__$1 = this;
return (new cljs.core.RecordIter((0),G__283898__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35820__auto__,k__35821__auto__,G__283898){
var self__ = this;
var this__35820__auto____$1 = this;
var pred__283915 = cljs.core.keyword_identical_QMARK_;
var expr__283916 = k__35821__auto__;
if(cljs.core.truth_(pred__283915.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__283916))){
return (new loom.alg_generic.Ancestry(G__283898,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__283915.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__283916))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__283898,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__283915.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__283916))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__283898,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35821__auto__,G__283898),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35825__auto__){
var self__ = this;
var this__35825__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35812__auto__,G__283898){
var self__ = this;
var this__35812__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__283898,self__.__extmap,self__.__hash));
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

loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__283901){
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__283901),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__283901),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__283901),null,cljs.core.dissoc.call(null,G__283901,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)),null));
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
var len__36260__auto___283985 = arguments.length;
var i__36261__auto___283986 = (0);
while(true){
if((i__36261__auto___283986 < len__36260__auto___283985)){
args__36267__auto__.push((arguments[i__36261__auto___283986]));

var G__283987 = (i__36261__auto___283986 + (1));
i__36261__auto___283986 = G__283987;
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
var map__283977 = ancestry;
var map__283977__$1 = ((((!((map__283977 == null)))?((((map__283977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__283977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__283977):map__283977);
var node__GT_idx = cljs.core.get.call(null,map__283977__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__283977__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__283977__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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

loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq283970){
var G__283972 = cljs.core.first.call(null,seq283970);
var seq283970__$1 = cljs.core.next.call(null,seq283970);
var G__283973 = cljs.core.first.call(null,seq283970__$1);
var seq283970__$2 = cljs.core.next.call(null,seq283970__$1);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic(G__283972,G__283973,seq283970__$2);
});
/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__283998 = ancestry;
var map__283998__$1 = ((((!((map__283998 == null)))?((((map__283998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__283998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__283998):map__283998);
var node__GT_idx = cljs.core.get.call(null,map__283998__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__283998__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__284007 = ancestry;
var map__284007__$1 = ((((!((map__284007 == null)))?((((map__284007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284007):map__284007);
var node__GT_idx = cljs.core.get.call(null,map__284007__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__284007__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__284007__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});
