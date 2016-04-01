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
return (function (p1__125976_SHARP_){
return loom$alg_generic$paths.call(null,preds,cljs.core.conj.call(null,path,p1__125976_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__125975_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__125975_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__125998_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__125998_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__126010){
var vec__126011 = p__126010;
var n = cljs.core.nth.call(null,vec__126011,(0),null);
var p = cljs.core.nth.call(null,vec__126011,(1),null);
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
var args__36501__auto__ = [];
var len__36494__auto___126045 = arguments.length;
var i__36495__auto___126046 = (0);
while(true){
if((i__36495__auto___126046 < len__36494__auto___126045)){
args__36501__auto__.push((arguments[i__36495__auto___126046]));

var G__126047 = (i__36495__auto___126046 + (1));
i__36495__auto___126046 = G__126047;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((2) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36502__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__126022){
var map__126023 = p__126022;
var map__126023__$1 = ((((!((map__126023 == null)))?((((map__126023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__126023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__126023):map__126023);
var seen = cljs.core.get.call(null,map__126023__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__126023,map__126023__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__4657__auto__,map__126023,map__126023__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__4657__auto__,map__126023,map__126023__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__126023,map__126023__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq126014){
var G__126015 = cljs.core.first.call(null,seq126014);
var seq126014__$1 = cljs.core.next.call(null,seq126014);
var G__126016 = cljs.core.first.call(null,seq126014__$1);
var seq126014__$2 = cljs.core.next.call(null,seq126014__$1);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic(G__126015,G__126016,seq126014__$2);
});
/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.pre_edge_traverse = (function loom$alg_generic$pre_edge_traverse(var_args){
var args__36501__auto__ = [];
var len__36494__auto___126123 = arguments.length;
var i__36495__auto___126124 = (0);
while(true){
if((i__36495__auto___126124 < len__36494__auto___126123)){
args__36501__auto__.push((arguments[i__36495__auto___126124]));

var G__126125 = (i__36495__auto___126124 + (1));
i__36495__auto___126124 = G__126125;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((2) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36502__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__126091){
var map__126092 = p__126091;
var map__126092__$1 = ((((!((map__126092 == null)))?((((map__126092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__126092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__126092):map__126092);
var seen = cljs.core.get.call(null,map__126092__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__126092,map__126092__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__4655__auto__)){
var nbr = temp__4655__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__126092,map__126092__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4655__auto__,map__126092,map__126092__$1,seen))
,null,null)));
} else {
var temp__4657__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__126134 = successors__$1;
var G__126135 = parent;
var G__126136 = cljs.core.peek.call(null,nbrstack);
var G__126137 = cljs.core.pop.call(null,stack);
var G__126138 = cljs.core.pop.call(null,nbrstack);
var G__126139 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__126134;
start__$1 = G__126135;
nbrs = G__126136;
stack = G__126137;
nbrstack = G__126138;
seen__$1 = G__126139;
continue;
} else {
return null;
}
}
break;
}
});})(map__126092,map__126092__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq126082){
var G__126083 = cljs.core.first.call(null,seq126082);
var seq126082__$1 = cljs.core.next.call(null,seq126082);
var G__126084 = cljs.core.first.call(null,seq126082__$1);
var seq126082__$2 = cljs.core.next.call(null,seq126082__$1);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__126083,G__126084,seq126082__$2);
});
/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__36501__auto__ = [];
var len__36494__auto___126168 = arguments.length;
var i__36495__auto___126169 = (0);
while(true){
if((i__36495__auto___126169 < len__36494__auto___126168)){
args__36501__auto__.push((arguments[i__36495__auto___126169]));

var G__126170 = (i__36495__auto___126169 + (1));
i__36495__auto___126169 = G__126170;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((2) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36502__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__126155){
var map__126156 = p__126155;
var map__126156__$1 = ((((!((map__126156 == null)))?((((map__126156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__126156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__126156):map__126156);
var seen = cljs.core.get.call(null,map__126156__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__126156__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__126172 = seen__$2;
var G__126173 = cljs.core.assoc.call(null,preds,u,v);
var G__126174 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__126172;
preds = G__126173;
stack = G__126174;
continue;
} else {
var G__126175 = seen__$2;
var G__126176 = preds;
var G__126177 = cljs.core.pop.call(null,stack);
seen__$1 = G__126175;
preds = G__126176;
stack = G__126177;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq126151){
var G__126152 = cljs.core.first.call(null,seq126151);
var seq126151__$1 = cljs.core.next.call(null,seq126151);
var G__126153 = cljs.core.first.call(null,seq126151__$1);
var seq126151__$2 = cljs.core.next.call(null,seq126151__$1);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(G__126152,G__126153,seq126151__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__36501__auto__ = [];
var len__36494__auto___126198 = arguments.length;
var i__36495__auto___126199 = (0);
while(true){
if((i__36495__auto___126199 < len__36494__auto___126198)){
args__36501__auto__.push((arguments[i__36495__auto___126199]));

var G__126200 = (i__36495__auto___126199 + (1));
i__36495__auto___126199 = G__126200;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((2) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36502__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__126192){
var map__126193 = p__126192;
var map__126193__$1 = ((((!((map__126193 == null)))?((((map__126193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__126193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__126193):map__126193);
var seen = cljs.core.get.call(null,map__126193__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__126193__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__126201 = seen__$2;
var G__126202 = cljs.core.conj.call(null,result,v);
var G__126203 = cljs.core.pop.call(null,stack);
seen__$1 = G__126201;
result = G__126202;
stack = G__126203;
continue;
} else {
var G__126204 = seen__$2;
var G__126205 = result;
var G__126206 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__126204;
result = G__126205;
stack = G__126206;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq126189){
var G__126190 = cljs.core.first.call(null,seq126189);
var seq126189__$1 = cljs.core.next.call(null,seq126189);
var G__126191 = cljs.core.first.call(null,seq126189__$1);
var seq126189__$2 = cljs.core.next.call(null,seq126189__$1);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__126190,G__126191,seq126189__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.post_edge_traverse = (function loom$alg_generic$post_edge_traverse(var_args){
var args__36501__auto__ = [];
var len__36494__auto___126221 = arguments.length;
var i__36495__auto___126222 = (0);
while(true){
if((i__36495__auto___126222 < len__36494__auto___126221)){
args__36501__auto__.push((arguments[i__36495__auto___126222]));

var G__126223 = (i__36495__auto___126222 + (1));
i__36495__auto___126222 = G__126223;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((2) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36502__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__126218){
var map__126219 = p__126218;
var map__126219__$1 = ((((!((map__126219 == null)))?((((map__126219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__126219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__126219):map__126219);
var seen = cljs.core.get.call(null,map__126219__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__126219__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__126227 = start__$1;
var G__126228 = cljs.core.next.call(null,nbrs);
var G__126229 = stack;
var G__126230 = nbrstack;
var G__126231 = seen__$2;
var G__126232 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__126227;
nbrs = G__126228;
stack = G__126229;
nbrstack = G__126230;
seen__$1 = G__126231;
edges = G__126232;
continue;
} else {
var G__126233 = nbr;
var G__126234 = successors.call(null,nbr);
var G__126235 = cljs.core.conj.call(null,stack,start__$1);
var G__126236 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__126237 = seen__$2;
var G__126238 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__126233;
nbrs = G__126234;
stack = G__126235;
nbrstack = G__126236;
seen__$1 = G__126237;
edges = G__126238;
continue;
}
} else {
var temp__4655__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4655__auto____$1)){
var parent = temp__4655__auto____$1;
var G__126239 = parent;
var G__126240 = cljs.core.peek.call(null,nbrstack);
var G__126241 = cljs.core.pop.call(null,stack);
var G__126242 = cljs.core.pop.call(null,nbrstack);
var G__126243 = seen__$2;
var G__126244 = edges;
start__$1 = G__126239;
nbrs = G__126240;
stack = G__126241;
nbrstack = G__126242;
seen__$1 = G__126243;
edges = G__126244;
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

loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq126207){
var G__126208 = cljs.core.first.call(null,seq126207);
var seq126207__$1 = cljs.core.next.call(null,seq126207);
var G__126209 = cljs.core.first.call(null,seq126207__$1);
var seq126207__$2 = cljs.core.next.call(null,seq126207__$1);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__126208,G__126209,seq126207__$2);
});
/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var args126246 = [];
var len__36494__auto___126252 = arguments.length;
var i__36495__auto___126253 = (0);
while(true){
if((i__36495__auto___126253 < len__36494__auto___126252)){
args126246.push((arguments[i__36495__auto___126253]));

var G__126255 = (i__36495__auto___126253 + (1));
i__36495__auto___126253 = G__126255;
continue;
} else {
}
break;
}

var G__126248 = args126246.length;
switch (G__126248) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args126246.length)].join('')));

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
var G__126262 = seen__$2;
var G__126263 = explored__$1;
var G__126264 = result;
var G__126265 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__126262;
explored__$1 = G__126263;
result = G__126264;
stack = G__126265;
continue;
}
} else {
var G__126266 = seen__$2;
var G__126267 = cljs.core.conj.call(null,explored__$1,v);
var G__126268 = cljs.core.conj.call(null,result,v);
var G__126269 = cljs.core.pop.call(null,stack);
seen__$1 = G__126266;
explored__$1 = G__126267;
result = G__126268;
stack = G__126269;
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
var args__36501__auto__ = [];
var len__36494__auto___126324 = arguments.length;
var i__36495__auto___126325 = (0);
while(true){
if((i__36495__auto___126325 < len__36494__auto___126324)){
args__36501__auto__.push((arguments[i__36495__auto___126325]));

var G__126328 = (i__36495__auto___126325 + (1));
i__36495__auto___126325 = G__126328;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((2) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36502__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__126278){
var map__126279 = p__126278;
var map__126279__$1 = ((((!((map__126279 == null)))?((((map__126279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__126279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__126279):map__126279);
var f = cljs.core.get.call(null,map__126279__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__126279__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__126279__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__35425__auto__ = f;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return ((function (or__35425__auto__,map__126279,map__126279__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__35425__auto__,map__126279,map__126279__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__35425__auto__ = when;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__126279,map__126279__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__4657__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__126308 = temp__4657__auto__;
var node = cljs.core.nth.call(null,vec__126308,(0),null);
var depth = cljs.core.nth.call(null,vec__126308,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__126308,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__126279,map__126279__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__126308,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__126279,map__126279__$1,f,when,seen){
return (function (p1__126271_SHARP_){
return nbr_pred.call(null,p1__126271_SHARP_,node,(depth + (1)));
});})(vec__126308,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__126279,map__126279__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__126308,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__126279,map__126279__$1,f,when,seen){
return (function (p1__126270_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__126270_SHARP_);
});})(vec__126308,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__126279,map__126279__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__36205__auto__ = ((function (nbrs,vec__126308,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__126279,map__126279__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__126309(s__126310){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__126308,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__126279,map__126279__$1,f,when,seen){
return (function (){
var s__126310__$1 = s__126310;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__126310__$1);
if(temp__4657__auto____$1){
var s__126310__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__126310__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__126310__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__126312 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__126311 = (0);
while(true){
if((i__126311 < size__36204__auto__)){
var nbr = cljs.core._nth.call(null,c__36203__auto__,i__126311);
cljs.core.chunk_append.call(null,b__126312,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__126349 = (i__126311 + (1));
i__126311 = G__126349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126312),loom$alg_generic$step_$_iter__126309.call(null,cljs.core.chunk_rest.call(null,s__126310__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126312),null);
}
} else {
var nbr = cljs.core.first.call(null,s__126310__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__126309.call(null,cljs.core.rest.call(null,s__126310__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__126308,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__126279,map__126279__$1,f,when,seen))
,null,null));
});})(nbrs,vec__126308,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__126279,map__126279__$1,f,when,seen))
;
return iter__36205__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__126308,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__126279,map__126279__$1,f,when,seen){
return (function (p1__126272_SHARP_,p2__126273_SHARP_){
return cljs.core.assoc.call(null,p1__126272_SHARP_,p2__126273_SHARP_,node);
});})(nbrs,vec__126308,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__126279,map__126279__$1,f,when,seen))
,preds,nbrs));
});})(vec__126308,node,depth,temp__4657__auto__,f__$1,nbr_pred,map__126279,map__126279__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__126279,map__126279__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.fromArray([start,null], true, false),(function (){var iter__36205__auto__ = ((function (f__$1,nbr_pred,map__126279,map__126279__$1,f,when,seen){
return (function loom$alg_generic$iter__126318(s__126319){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__126279,map__126279__$1,f,when,seen){
return (function (){
var s__126319__$1 = s__126319;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__126319__$1);
if(temp__4657__auto__){
var s__126319__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__126319__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__126319__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__126321 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__126320 = (0);
while(true){
if((i__126320 < size__36204__auto__)){
var s = cljs.core._nth.call(null,c__36203__auto__,i__126320);
cljs.core.chunk_append.call(null,b__126321,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__126366 = (i__126320 + (1));
i__126320 = G__126366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126321),loom$alg_generic$iter__126318.call(null,cljs.core.chunk_rest.call(null,s__126319__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126321),null);
}
} else {
var s = cljs.core.first.call(null,s__126319__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__126318.call(null,cljs.core.rest.call(null,s__126319__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__126279,map__126279__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__126279,map__126279__$1,f,when,seen))
;
return iter__36205__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq126274){
var G__126275 = cljs.core.first.call(null,seq126274);
var seq126274__$1 = cljs.core.next.call(null,seq126274);
var G__126276 = cljs.core.first.call(null,seq126274__$1);
var seq126274__$2 = cljs.core.next.call(null,seq126274__$1);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__126275,G__126276,seq126274__$2);
});
/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__36501__auto__ = [];
var len__36494__auto___126383 = arguments.length;
var i__36495__auto___126384 = (0);
while(true){
if((i__36495__auto___126384 < len__36494__auto___126383)){
args__36501__auto__.push((arguments[i__36495__auto___126384]));

var G__126387 = (i__36495__auto___126384 + (1));
i__36495__auto___126384 = G__126387;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((2) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36502__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__126380){
var map__126381 = p__126380;
var map__126381__$1 = ((((!((map__126381 == null)))?((((map__126381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__126381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__126381):map__126381);
var seen = cljs.core.get.call(null,map__126381__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__126381,map__126381__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__126381,map__126381__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq126375){
var G__126376 = cljs.core.first.call(null,seq126375);
var seq126375__$1 = cljs.core.next.call(null,seq126375);
var G__126377 = cljs.core.first.call(null,seq126375__$1);
var seq126375__$2 = cljs.core.next.call(null,seq126375__$1);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic(G__126376,G__126377,seq126375__$2);
});
/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__36501__auto__ = [];
var len__36494__auto___126405 = arguments.length;
var i__36495__auto___126406 = (0);
while(true){
if((i__36495__auto___126406 < len__36494__auto___126405)){
args__36501__auto__.push((arguments[i__36495__auto___126406]));

var G__126407 = (i__36495__auto___126406 + (1));
i__36495__auto___126406 = G__126407;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((3) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36502__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__126398){
var map__126399 = p__126398;
var map__126399__$1 = ((((!((map__126399 == null)))?((((map__126399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__126399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__126399):map__126399);
var opts = map__126399__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__4657__auto__ = cljs.core.some.call(null,((function (opts__$1,map__126399,map__126399__$1,opts){
return (function (p__126401){
var vec__126402 = p__126401;
var _ = cljs.core.nth.call(null,vec__126402,(0),null);
var pm = cljs.core.nth.call(null,vec__126402,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__126402,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__126399,map__126399__$1,opts))
,cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__4657__auto__)){
var preds = temp__4657__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq126392){
var G__126393 = cljs.core.first.call(null,seq126392);
var seq126392__$1 = cljs.core.next.call(null,seq126392);
var G__126394 = cljs.core.first.call(null,seq126392__$1);
var seq126392__$2 = cljs.core.next.call(null,seq126392__$1);
var G__126395 = cljs.core.first.call(null,seq126392__$2);
var seq126392__$3 = cljs.core.next.call(null,seq126392__$2);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__126393,G__126394,G__126395,seq126392__$3);
});
/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__126421 = m2;
var G__126422 = m1;
m1 = G__126421;
m2 = G__126422;
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
if(cljs.core.truth_((function (){var or__35425__auto__ = cljs.core.seq.call(null,intersects);
if(or__35425__auto__){
return or__35425__auto__;
} else {
var or__35425__auto____$1 = loom.alg_generic.future_done_QMARK_.call(null,search1);
if(cljs.core.truth_(or__35425__auto____$1)){
return or__35425__auto____$1;
} else {
return loom.alg_generic.future_done_QMARK_.call(null,search2);
}
}
})())){
cljs.core.reset_BANG_.call(null,done_QMARK_,true);

if(cljs.core.seq.call(null,intersects)){
var intersect = cljs.core.apply.call(null,cljs.core.min_key,((function (intersects,done_QMARK_,preds1,preds2,search,search1,search2,find_intersects){
return (function (p1__126425_SHARP_){
return (cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds1),p1__126425_SHARP_)) + cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds2),p1__126425_SHARP_)));
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
var G__126458 = find_intersects.call(null);
intersects = G__126458;
continue;
}
break;
}
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__36205__auto__ = (function loom$alg_generic$reverse_edges_$_iter__126475(s__126476){
return (new cljs.core.LazySeq(null,(function (){
var s__126476__$1 = s__126476;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__126476__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var node = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36201__auto__ = ((function (s__126476__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__126475_$_iter__126477(s__126478){
return (new cljs.core.LazySeq(null,((function (s__126476__$1,node,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__126478__$1 = s__126478;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__126478__$1);
if(temp__4657__auto____$1){
var s__126478__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__126478__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__126478__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__126480 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__126479 = (0);
while(true){
if((i__126479 < size__36204__auto__)){
var nbr = cljs.core._nth.call(null,c__36203__auto__,i__126479);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
cljs.core.chunk_append.call(null,b__126480,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__126501 = (i__126479 + (1));
i__126479 = G__126501;
continue;
} else {
var G__126502 = (i__126479 + (1));
i__126479 = G__126502;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126480),loom$alg_generic$reverse_edges_$_iter__126475_$_iter__126477.call(null,cljs.core.chunk_rest.call(null,s__126478__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126480),null);
}
} else {
var nbr = cljs.core.first.call(null,s__126478__$2);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__126475_$_iter__126477.call(null,cljs.core.rest.call(null,s__126478__$2)));
} else {
var G__126505 = cljs.core.rest.call(null,s__126478__$2);
s__126478__$1 = G__126505;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__126476__$1,node,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__126476__$1,node,xs__5205__auto__,temp__4657__auto__))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,successor_fn.call(null,node)));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,loom$alg_generic$reverse_edges_$_iter__126475.call(null,cljs.core.rest.call(null,s__126476__$1)));
} else {
var G__126511 = cljs.core.rest.call(null,s__126476__$1);
s__126476__$1 = G__126511;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36205__auto__.call(null,nodes);
});
loom.alg_generic.conj_paths = (function loom$alg_generic$conj_paths(from_map,to_map,matches){
var iter__36205__auto__ = (function loom$alg_generic$conj_paths_$_iter__126541(s__126542){
return (new cljs.core.LazySeq(null,(function (){
var s__126542__$1 = s__126542;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__126542__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36201__auto__ = ((function (s__126542__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__126541_$_iter__126543(s__126544){
return (new cljs.core.LazySeq(null,((function (s__126542__$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__126544__$1 = s__126544;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__126544__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var from = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__36201__auto__ = ((function (s__126544__$1,s__126542__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$conj_paths_$_iter__126541_$_iter__126543_$_iter__126545(s__126546){
return (new cljs.core.LazySeq(null,((function (s__126544__$1,s__126542__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__126546__$1 = s__126546;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__126546__$1);
if(temp__4657__auto____$2){
var s__126546__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__126546__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__126546__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__126548 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__126547 = (0);
while(true){
if((i__126547 < size__36204__auto__)){
var to = cljs.core._nth.call(null,c__36203__auto__,i__126547);
cljs.core.chunk_append.call(null,b__126548,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__126571 = (i__126547 + (1));
i__126547 = G__126571;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126548),loom$alg_generic$conj_paths_$_iter__126541_$_iter__126543_$_iter__126545.call(null,cljs.core.chunk_rest.call(null,s__126546__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126548),null);
}
} else {
var to = cljs.core.first.call(null,s__126546__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__126541_$_iter__126543_$_iter__126545.call(null,cljs.core.rest.call(null,s__126546__$2)));
}
} else {
return null;
}
break;
}
});})(s__126544__$1,s__126542__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__126544__$1,s__126542__$1,from,xs__5205__auto____$1,temp__4657__auto____$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,loom$alg_generic$conj_paths_$_iter__126541_$_iter__126543.call(null,cljs.core.rest.call(null,s__126544__$1)));
} else {
var G__126576 = cljs.core.rest.call(null,s__126544__$1);
s__126544__$1 = G__126576;
continue;
}
} else {
return null;
}
break;
}
});})(s__126542__$1,n,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__126542__$1,n,xs__5205__auto__,temp__4657__auto__))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,loom$alg_generic$conj_paths_$_iter__126541.call(null,cljs.core.rest.call(null,s__126542__$1)));
} else {
var G__126582 = cljs.core.rest.call(null,s__126542__$1);
s__126542__$1 = G__126582;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36205__auto__.call(null,matches);
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
return (function (p1__126583_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__126583_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__126595){
var vec__126596 = p__126595;
var key = cljs.core.nth.call(null,vec__126596,(0),null);
var val = cljs.core.nth.call(null,vec__126596,(1),null);
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
var G__126607 = outgoing__$1;
var G__126608 = incoming;
var G__126609 = q1__$1;
var G__126610 = q2;
outgoing = G__126607;
incoming = G__126608;
q1 = G__126609;
q2 = G__126610;
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
var G__126615 = outgoing;
var G__126616 = incoming__$1;
var G__126617 = q1;
var G__126618 = q2__$1;
outgoing = G__126615;
incoming = G__126616;
q1 = G__126617;
q2 = G__126618;
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
var args126625 = [];
var len__36494__auto___126662 = arguments.length;
var i__36495__auto___126663 = (0);
while(true){
if((i__36495__auto___126663 < len__36494__auto___126662)){
args126625.push((arguments[i__36495__auto___126663]));

var G__126665 = (i__36495__auto___126663 + (1));
i__36495__auto___126663 = G__126665;
continue;
} else {
}
break;
}

var G__126630 = args126625.length;
switch (G__126630) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args126625.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__126649){
var vec__126656 = p__126649;
var state = cljs.core.nth.call(null,vec__126656,(0),null);
var pq = cljs.core.nth.call(null,vec__126656,(1),null);
var temp__4657__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__126657 = temp__4657__auto__;
var dist_su = cljs.core.nth.call(null,vec__126657,(0),null);
var _ = cljs.core.nth.call(null,vec__126657,(1),null);
var u = cljs.core.nth.call(null,vec__126657,(2),null);
var fpq = vec__126657;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__126657,dist_su,_,u,fpq,temp__4657__auto__,vec__126656,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__126657,dist_su,_,u,fpq,temp__4657__auto__,vec__126656,state,pq){
return (function (p__126658,v){
var vec__126659 = p__126658;
var state__$1 = cljs.core.nth.call(null,vec__126659,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__126659,(1),null);
var dist_suv = (dist_su + dist.call(null,u,v));
var dist_sv = cljs.core.first.call(null,state__$1.call(null,v));
if(cljs.core.truth_((function (){var and__35413__auto__ = dist_sv;
if(cljs.core.truth_(and__35413__auto__)){
return (dist_suv >= dist_sv);
} else {
return and__35413__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,pq__$1], null);
} else {
var pq__$2 = (cljs.core.truth_(dist_sv)?cljs.core.disj.call(null,pq__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_sv,cljs.core.hash.call(null,v),v], null)):pq__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state__$1,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,u], null)),cljs.core.conj.call(null,pq__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,cljs.core.hash.call(null,v),v], null))], null);
}
});})(vec__126657,dist_su,_,u,fpq,temp__4657__auto__,vec__126656,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__126657,dist_su,_,u,fpq,temp__4657__auto__,vec__126656,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__126697){
var vec__126698 = p__126697;
var n = cljs.core.nth.call(null,vec__126698,(0),null);
var vec__126699 = cljs.core.nth.call(null,vec__126698,(1),null);
var d = cljs.core.nth.call(null,vec__126699,(0),null);
var p = cljs.core.nth.call(null,vec__126699,(1),null);
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
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__126712){
var vec__126713 = p__126712;
var node = cljs.core.nth.call(null,vec__126713,(0),null);
var _ = cljs.core.nth.call(null,vec__126713,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__126714 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__126714,(0),null);
var end_state = cljs.core.nth.call(null,vec__126714,(1),null);
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
var size = (function (){var x__35756__auto__ = cljs.core.count.call(null,bitmap);
var y__35757__auto__ = loom.alg_generic.bm_longs.call(null,(idx + (1)));
return ((x__35756__auto__ > y__35757__auto__) ? x__35756__auto__ : y__35757__auto__);
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
var args__36501__auto__ = [];
var len__36494__auto___126777 = arguments.length;
var i__36495__auto___126778 = (0);
while(true){
if((i__36495__auto___126778 < len__36494__auto___126777)){
args__36501__auto__.push((arguments[i__36495__auto___126778]));

var G__126779 = (i__36495__auto___126778 + (1));
i__36495__auto___126778 = G__126779;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((0) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((0)),(0),null)):null);
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(argseq__36502__auto__);
});

loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic = (function (bitmaps){
if(cljs.core.empty_QMARK_.call(null,bitmaps)){
return loom.alg_generic.bm_new.call(null);
} else {
var size = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,bitmaps));
var bitmap = cljs.core.first.call(null,bitmaps);
var n_zeros = (size - cljs.core.count.call(null,bitmap));
var new_bitmap = bitmap.slice().concat((new Array(n_zeros)).fill((0)));
var seq__126748_126782 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__126755_126783 = null;
var count__126756_126784 = (0);
var i__126757_126785 = (0);
while(true){
if((i__126757_126785 < count__126756_126784)){
var bitmap_126786__$1 = cljs.core._nth.call(null,chunk__126755_126783,i__126757_126785);
var seq__126758_126789 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_126786__$1));
var chunk__126760_126790 = null;
var count__126761_126791 = (0);
var i__126762_126792 = (0);
while(true){
if((i__126762_126792 < count__126761_126791)){
var vec__126767_126793 = cljs.core._nth.call(null,chunk__126760_126790,i__126762_126792);
var idx_126794 = cljs.core.nth.call(null,vec__126767_126793,(0),null);
var value_126795 = cljs.core.nth.call(null,vec__126767_126793,(1),null);
var masked_value_126796 = (value_126795 | (new_bitmap[idx_126794]));
(new_bitmap[idx_126794] = masked_value_126796);

var G__126797 = seq__126758_126789;
var G__126798 = chunk__126760_126790;
var G__126799 = count__126761_126791;
var G__126800 = (i__126762_126792 + (1));
seq__126758_126789 = G__126797;
chunk__126760_126790 = G__126798;
count__126761_126791 = G__126799;
i__126762_126792 = G__126800;
continue;
} else {
var temp__4657__auto___126803 = cljs.core.seq.call(null,seq__126758_126789);
if(temp__4657__auto___126803){
var seq__126758_126804__$1 = temp__4657__auto___126803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__126758_126804__$1)){
var c__36236__auto___126805 = cljs.core.chunk_first.call(null,seq__126758_126804__$1);
var G__126806 = cljs.core.chunk_rest.call(null,seq__126758_126804__$1);
var G__126807 = c__36236__auto___126805;
var G__126808 = cljs.core.count.call(null,c__36236__auto___126805);
var G__126809 = (0);
seq__126758_126789 = G__126806;
chunk__126760_126790 = G__126807;
count__126761_126791 = G__126808;
i__126762_126792 = G__126809;
continue;
} else {
var vec__126770_126810 = cljs.core.first.call(null,seq__126758_126804__$1);
var idx_126811 = cljs.core.nth.call(null,vec__126770_126810,(0),null);
var value_126812 = cljs.core.nth.call(null,vec__126770_126810,(1),null);
var masked_value_126815 = (value_126812 | (new_bitmap[idx_126811]));
(new_bitmap[idx_126811] = masked_value_126815);

var G__126816 = cljs.core.next.call(null,seq__126758_126804__$1);
var G__126817 = null;
var G__126818 = (0);
var G__126819 = (0);
seq__126758_126789 = G__126816;
chunk__126760_126790 = G__126817;
count__126761_126791 = G__126818;
i__126762_126792 = G__126819;
continue;
}
} else {
}
}
break;
}

var G__126820 = seq__126748_126782;
var G__126821 = chunk__126755_126783;
var G__126822 = count__126756_126784;
var G__126823 = (i__126757_126785 + (1));
seq__126748_126782 = G__126820;
chunk__126755_126783 = G__126821;
count__126756_126784 = G__126822;
i__126757_126785 = G__126823;
continue;
} else {
var temp__4657__auto___126824 = cljs.core.seq.call(null,seq__126748_126782);
if(temp__4657__auto___126824){
var seq__126748_126827__$1 = temp__4657__auto___126824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__126748_126827__$1)){
var c__36236__auto___126828 = cljs.core.chunk_first.call(null,seq__126748_126827__$1);
var G__126829 = cljs.core.chunk_rest.call(null,seq__126748_126827__$1);
var G__126830 = c__36236__auto___126828;
var G__126831 = cljs.core.count.call(null,c__36236__auto___126828);
var G__126832 = (0);
seq__126748_126782 = G__126829;
chunk__126755_126783 = G__126830;
count__126756_126784 = G__126831;
i__126757_126785 = G__126832;
continue;
} else {
var bitmap_126833__$1 = cljs.core.first.call(null,seq__126748_126827__$1);
var seq__126749_126834 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_126833__$1));
var chunk__126751_126835 = null;
var count__126752_126836 = (0);
var i__126753_126837 = (0);
while(true){
if((i__126753_126837 < count__126752_126836)){
var vec__126773_126840 = cljs.core._nth.call(null,chunk__126751_126835,i__126753_126837);
var idx_126841 = cljs.core.nth.call(null,vec__126773_126840,(0),null);
var value_126842 = cljs.core.nth.call(null,vec__126773_126840,(1),null);
var masked_value_126846 = (value_126842 | (new_bitmap[idx_126841]));
(new_bitmap[idx_126841] = masked_value_126846);

var G__126848 = seq__126749_126834;
var G__126849 = chunk__126751_126835;
var G__126850 = count__126752_126836;
var G__126851 = (i__126753_126837 + (1));
seq__126749_126834 = G__126848;
chunk__126751_126835 = G__126849;
count__126752_126836 = G__126850;
i__126753_126837 = G__126851;
continue;
} else {
var temp__4657__auto___126854__$1 = cljs.core.seq.call(null,seq__126749_126834);
if(temp__4657__auto___126854__$1){
var seq__126749_126856__$1 = temp__4657__auto___126854__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__126749_126856__$1)){
var c__36236__auto___126857 = cljs.core.chunk_first.call(null,seq__126749_126856__$1);
var G__126858 = cljs.core.chunk_rest.call(null,seq__126749_126856__$1);
var G__126859 = c__36236__auto___126857;
var G__126860 = cljs.core.count.call(null,c__36236__auto___126857);
var G__126861 = (0);
seq__126749_126834 = G__126858;
chunk__126751_126835 = G__126859;
count__126752_126836 = G__126860;
i__126753_126837 = G__126861;
continue;
} else {
var vec__126776_126865 = cljs.core.first.call(null,seq__126749_126856__$1);
var idx_126866 = cljs.core.nth.call(null,vec__126776_126865,(0),null);
var value_126867 = cljs.core.nth.call(null,vec__126776_126865,(1),null);
var masked_value_126868 = (value_126867 | (new_bitmap[idx_126866]));
(new_bitmap[idx_126866] = masked_value_126868);

var G__126871 = cljs.core.next.call(null,seq__126749_126856__$1);
var G__126872 = null;
var G__126873 = (0);
var G__126874 = (0);
seq__126749_126834 = G__126871;
chunk__126751_126835 = G__126872;
count__126752_126836 = G__126873;
i__126753_126837 = G__126874;
continue;
}
} else {
}
}
break;
}

var G__126875 = cljs.core.next.call(null,seq__126748_126827__$1);
var G__126876 = null;
var G__126877 = (0);
var G__126878 = (0);
seq__126748_126782 = G__126875;
chunk__126755_126783 = G__126876;
count__126756_126784 = G__126877;
i__126757_126785 = G__126878;
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

loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq126741){
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq126741));
});
/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__36205__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__126901(s__126902){
return (new cljs.core.LazySeq(null,(function (){
var s__126902__$1 = s__126902;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__126902__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var chunk = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36201__auto__ = ((function (s__126902__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__126901_$_iter__126903(s__126904){
return (new cljs.core.LazySeq(null,((function (s__126902__$1,chunk,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__126904__$1 = s__126904;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__126904__$1);
if(temp__4657__auto____$1){
var s__126904__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__126904__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__126904__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__126906 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__126905 = (0);
while(true){
if((i__126905 < size__36204__auto__)){
var offset = cljs.core._nth.call(null,c__36203__auto__,i__126905);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__126906,idx);

var G__126929 = (i__126905 + (1));
i__126905 = G__126929;
continue;
} else {
var G__126932 = (i__126905 + (1));
i__126905 = G__126932;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126906),loom$alg_generic$bm_get_indicies_$_iter__126901_$_iter__126903.call(null,cljs.core.chunk_rest.call(null,s__126904__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126906),null);
}
} else {
var offset = cljs.core.first.call(null,s__126904__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__126901_$_iter__126903.call(null,cljs.core.rest.call(null,s__126904__$2)));
} else {
var G__126937 = cljs.core.rest.call(null,s__126904__$2);
s__126904__$1 = G__126937;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__126902__$1,chunk,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__126902__$1,chunk,xs__5205__auto__,temp__4657__auto__))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,loom$alg_generic$bm_get_indicies_$_iter__126901.call(null,cljs.core.rest.call(null,s__126902__$1)));
} else {
var G__126940 = cljs.core.rest.call(null,s__126902__$1);
s__126902__$1 = G__126940;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36205__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,bitmap)));
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
loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36047__auto__,k__36048__auto__){
var self__ = this;
var this__36047__auto____$1 = this;
return cljs.core._lookup.call(null,this__36047__auto____$1,k__36048__auto__,null);
});

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36049__auto__,k126942,else__36050__auto__){
var self__ = this;
var this__36049__auto____$1 = this;
var G__126948 = (((k126942 instanceof cljs.core.Keyword))?k126942.fqn:null);
switch (G__126948) {
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
return cljs.core.get.call(null,self__.__extmap,k126942,else__36050__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36061__auto__,writer__36062__auto__,opts__36063__auto__){
var self__ = this;
var this__36061__auto____$1 = this;
var pr_pair__36064__auto__ = ((function (this__36061__auto____$1){
return (function (keyval__36065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36062__auto__,cljs.core.pr_writer,""," ","",opts__36063__auto__,keyval__36065__auto__);
});})(this__36061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36062__auto__,pr_pair__36064__auto__,"#loom.alg-generic.Ancestry{",", ","}",opts__36063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$ = true;

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__126941){
var self__ = this;
var G__126941__$1 = this;
return (new cljs.core.RecordIter((0),G__126941__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36045__auto__){
var self__ = this;
var this__36045__auto____$1 = this;
return self__.__meta;
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36041__auto__){
var self__ = this;
var this__36041__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36051__auto__){
var self__ = this;
var this__36051__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36042__auto__){
var self__ = this;
var this__36042__auto____$1 = this;
var h__35860__auto__ = self__.__hash;
if(!((h__35860__auto__ == null))){
return h__35860__auto__;
} else {
var h__35860__auto____$1 = cljs.core.hash_imap.call(null,this__36042__auto____$1);
self__.__hash = h__35860__auto____$1;

return h__35860__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36043__auto__,other__36044__auto__){
var self__ = this;
var this__36043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35413__auto__ = other__36044__auto__;
if(cljs.core.truth_(and__35413__auto__)){
var and__35413__auto____$1 = (this__36043__auto____$1.constructor === other__36044__auto__.constructor);
if(and__35413__auto____$1){
return cljs.core.equiv_map.call(null,this__36043__auto____$1,other__36044__auto__);
} else {
return and__35413__auto____$1;
}
} else {
return and__35413__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36056__auto__,k__36057__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),null], null), null),k__36057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36056__auto____$1),self__.__meta),k__36057__auto__);
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36057__auto__)),null));
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36054__auto__,k__36055__auto__,G__126941){
var self__ = this;
var this__36054__auto____$1 = this;
var pred__126958 = cljs.core.keyword_identical_QMARK_;
var expr__126959 = k__36055__auto__;
if(cljs.core.truth_(pred__126958.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__126959))){
return (new loom.alg_generic.Ancestry(G__126941,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__126958.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__126959))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__126941,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__126958.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__126959))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__126941,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36055__auto__,G__126941),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36059__auto__){
var self__ = this;
var this__36059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36046__auto__,G__126941){
var self__ = this;
var this__36046__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__126941,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36052__auto__,entry__36053__auto__){
var self__ = this;
var this__36052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36053__auto__)){
return cljs.core._assoc.call(null,this__36052__auto____$1,cljs.core._nth.call(null,entry__36053__auto__,(0)),cljs.core._nth.call(null,entry__36053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36052__auto____$1,entry__36053__auto__);
}
});

loom.alg_generic.Ancestry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node->idx","node->idx",1793236754,null),new cljs.core.Symbol(null,"idx->node","idx->node",-842528594,null),new cljs.core.Symbol(null,"bitmaps","bitmaps",-1506736927,null)], null);
});

loom.alg_generic.Ancestry.cljs$lang$type = true;

loom.alg_generic.Ancestry.cljs$lang$ctorPrSeq = (function (this__36081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.alg-generic/Ancestry");
});

loom.alg_generic.Ancestry.cljs$lang$ctorPrWriter = (function (this__36081__auto__,writer__36082__auto__){
return cljs.core._write.call(null,writer__36082__auto__,"loom.alg-generic/Ancestry");
});

loom.alg_generic.__GT_Ancestry = (function loom$alg_generic$__GT_Ancestry(node__GT_idx,idx__GT_node,bitmaps){
return (new loom.alg_generic.Ancestry(node__GT_idx,idx__GT_node,bitmaps,null,null,null));
});

loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__126945){
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__126945),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__126945),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__126945),null,cljs.core.dissoc.call(null,G__126945,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)),null));
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
var args__36501__auto__ = [];
var len__36494__auto___127017 = arguments.length;
var i__36495__auto___127019 = (0);
while(true){
if((i__36495__auto___127019 < len__36494__auto___127017)){
args__36501__auto__.push((arguments[i__36495__auto___127019]));

var G__127020 = (i__36495__auto___127019 + (1));
i__36495__auto___127019 = G__127020;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((2) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36502__auto__);
});

loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic = (function (ancestry,node,parents){
if(cljs.core.truth_(loom.alg_generic.ancestry_contains_QMARK_.call(null,ancestry,node))){
return ancestry;
} else {
var map__127013 = ancestry;
var map__127013__$1 = ((((!((map__127013 == null)))?((((map__127013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__127013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__127013):map__127013);
var node__GT_idx = cljs.core.get.call(null,map__127013__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__127013__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__127013__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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

loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq127007){
var G__127008 = cljs.core.first.call(null,seq127007);
var seq127007__$1 = cljs.core.next.call(null,seq127007);
var G__127009 = cljs.core.first.call(null,seq127007__$1);
var seq127007__$2 = cljs.core.next.call(null,seq127007__$1);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic(G__127008,G__127009,seq127007__$2);
});
/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__127035 = ancestry;
var map__127035__$1 = ((((!((map__127035 == null)))?((((map__127035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__127035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__127035):map__127035);
var node__GT_idx = cljs.core.get.call(null,map__127035__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__127035__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,childer);
var pidx = node__GT_idx.call(null,parenter);
return cljs.core.boolean$.call(null,(cljs.core.truth_((function (){var and__35413__auto__ = cidx;
if(cljs.core.truth_(and__35413__auto__)){
return pidx;
} else {
return and__35413__auto__;
}
})())?loom.alg_generic.bm_get.call(null,cljs.core.get.call(null,bitmaps,cidx),pidx):null));
});
/**
 * Returns all of the ancestors of 'child node.
 */
loom.alg_generic.ancestors = (function loom$alg_generic$ancestors(ancestry,child){
var map__127047 = ancestry;
var map__127047__$1 = ((((!((map__127047 == null)))?((((map__127047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__127047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__127047):map__127047);
var node__GT_idx = cljs.core.get.call(null,map__127047__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__127047__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__127047__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});
