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
return (function (p1__41126_SHARP_){
return loom$alg_generic$paths.call(null,preds,cljs.core.conj.call(null,path,p1__41126_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__41125_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__41125_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__41127_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__41127_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__41130){
var vec__41131 = p__41130;
var n = cljs.core.nth.call(null,vec__41131,(0),null);
var p = cljs.core.nth.call(null,vec__41131,(1),null);
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
var args__25230__auto__ = [];
var len__25223__auto___41138 = arguments.length;
var i__25224__auto___41139 = (0);
while(true){
if((i__25224__auto___41139 < len__25223__auto___41138)){
args__25230__auto__.push((arguments[i__25224__auto___41139]));

var G__41140 = (i__25224__auto___41139 + (1));
i__25224__auto___41139 = G__41140;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((2) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((2)),(0))):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25231__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41135){
var map__41136 = p__41135;
var map__41136__$1 = ((((!((map__41136 == null)))?((((map__41136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41136):map__41136);
var seen = cljs.core.get.call(null,map__41136__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__41136,map__41136__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__4425__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__4425__auto__,map__41136,map__41136__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__4425__auto__,map__41136,map__41136__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__41136,map__41136__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq41132){
var G__41133 = cljs.core.first.call(null,seq41132);
var seq41132__$1 = cljs.core.next.call(null,seq41132);
var G__41134 = cljs.core.first.call(null,seq41132__$1);
var seq41132__$2 = cljs.core.next.call(null,seq41132__$1);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic(G__41133,G__41134,seq41132__$2);
});
/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.pre_edge_traverse = (function loom$alg_generic$pre_edge_traverse(var_args){
var args__25230__auto__ = [];
var len__25223__auto___41147 = arguments.length;
var i__25224__auto___41148 = (0);
while(true){
if((i__25224__auto___41148 < len__25223__auto___41147)){
args__25230__auto__.push((arguments[i__25224__auto___41148]));

var G__41149 = (i__25224__auto___41148 + (1));
i__25224__auto___41148 = G__41149;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((2) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((2)),(0))):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25231__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41144){
var map__41145 = p__41144;
var map__41145__$1 = ((((!((map__41145 == null)))?((((map__41145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41145):map__41145);
var seen = cljs.core.get.call(null,map__41145__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__41145,map__41145__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__4423__auto__)){
var nbr = temp__4423__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4423__auto__,map__41145,map__41145__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__4423__auto__,map__41145,map__41145__$1,seen))
,null,null)));
} else {
var temp__4425__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
var G__41150 = successors__$1;
var G__41151 = parent;
var G__41152 = cljs.core.peek.call(null,nbrstack);
var G__41153 = cljs.core.pop.call(null,stack);
var G__41154 = cljs.core.pop.call(null,nbrstack);
var G__41155 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__41150;
start__$1 = G__41151;
nbrs = G__41152;
stack = G__41153;
nbrstack = G__41154;
seen__$1 = G__41155;
continue;
} else {
return null;
}
}
break;
}
});})(map__41145,map__41145__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq41141){
var G__41142 = cljs.core.first.call(null,seq41141);
var seq41141__$1 = cljs.core.next.call(null,seq41141);
var G__41143 = cljs.core.first.call(null,seq41141__$1);
var seq41141__$2 = cljs.core.next.call(null,seq41141__$1);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__41142,G__41143,seq41141__$2);
});
/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__25230__auto__ = [];
var len__25223__auto___41162 = arguments.length;
var i__25224__auto___41163 = (0);
while(true){
if((i__25224__auto___41163 < len__25223__auto___41162)){
args__25230__auto__.push((arguments[i__25224__auto___41163]));

var G__41164 = (i__25224__auto___41163 + (1));
i__25224__auto___41163 = G__41164;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((2) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((2)),(0))):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25231__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41159){
var map__41160 = p__41159;
var map__41160__$1 = ((((!((map__41160 == null)))?((((map__41160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41160):map__41160);
var seen = cljs.core.get.call(null,map__41160__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__41160__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__41165 = seen__$2;
var G__41166 = cljs.core.assoc.call(null,preds,u,v);
var G__41167 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__41165;
preds = G__41166;
stack = G__41167;
continue;
} else {
var G__41168 = seen__$2;
var G__41169 = preds;
var G__41170 = cljs.core.pop.call(null,stack);
seen__$1 = G__41168;
preds = G__41169;
stack = G__41170;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq41156){
var G__41157 = cljs.core.first.call(null,seq41156);
var seq41156__$1 = cljs.core.next.call(null,seq41156);
var G__41158 = cljs.core.first.call(null,seq41156__$1);
var seq41156__$2 = cljs.core.next.call(null,seq41156__$1);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(G__41157,G__41158,seq41156__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__25230__auto__ = [];
var len__25223__auto___41177 = arguments.length;
var i__25224__auto___41178 = (0);
while(true){
if((i__25224__auto___41178 < len__25223__auto___41177)){
args__25230__auto__.push((arguments[i__25224__auto___41178]));

var G__41179 = (i__25224__auto___41178 + (1));
i__25224__auto___41178 = G__41179;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((2) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((2)),(0))):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25231__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41174){
var map__41175 = p__41174;
var map__41175__$1 = ((((!((map__41175 == null)))?((((map__41175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41175):map__41175);
var seen = cljs.core.get.call(null,map__41175__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__41175__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__41180 = seen__$2;
var G__41181 = cljs.core.conj.call(null,result,v);
var G__41182 = cljs.core.pop.call(null,stack);
seen__$1 = G__41180;
result = G__41181;
stack = G__41182;
continue;
} else {
var G__41183 = seen__$2;
var G__41184 = result;
var G__41185 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__41183;
result = G__41184;
stack = G__41185;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq41171){
var G__41172 = cljs.core.first.call(null,seq41171);
var seq41171__$1 = cljs.core.next.call(null,seq41171);
var G__41173 = cljs.core.first.call(null,seq41171__$1);
var seq41171__$2 = cljs.core.next.call(null,seq41171__$1);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic(G__41172,G__41173,seq41171__$2);
});
/**
 * Traverses a graph depth-first postorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.post_edge_traverse = (function loom$alg_generic$post_edge_traverse(var_args){
var args__25230__auto__ = [];
var len__25223__auto___41192 = arguments.length;
var i__25224__auto___41193 = (0);
while(true){
if((i__25224__auto___41193 < len__25223__auto___41192)){
args__25230__auto__.push((arguments[i__25224__auto___41193]));

var G__41194 = (i__25224__auto___41193 + (1));
i__25224__auto___41193 = G__41194;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((2) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((2)),(0))):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25231__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41189){
var map__41190 = p__41189;
var map__41190__$1 = ((((!((map__41190 == null)))?((((map__41190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41190):map__41190);
var seen = cljs.core.get.call(null,map__41190__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__41190__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__41195 = start__$1;
var G__41196 = cljs.core.next.call(null,nbrs);
var G__41197 = stack;
var G__41198 = nbrstack;
var G__41199 = seen__$2;
var G__41200 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__41195;
nbrs = G__41196;
stack = G__41197;
nbrstack = G__41198;
seen__$1 = G__41199;
edges = G__41200;
continue;
} else {
var G__41201 = nbr;
var G__41202 = successors.call(null,nbr);
var G__41203 = cljs.core.conj.call(null,stack,start__$1);
var G__41204 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__41205 = seen__$2;
var G__41206 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__41201;
nbrs = G__41202;
stack = G__41203;
nbrstack = G__41204;
seen__$1 = G__41205;
edges = G__41206;
continue;
}
} else {
var temp__4423__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__4423__auto____$1)){
var parent = temp__4423__auto____$1;
var G__41207 = parent;
var G__41208 = cljs.core.peek.call(null,nbrstack);
var G__41209 = cljs.core.pop.call(null,stack);
var G__41210 = cljs.core.pop.call(null,nbrstack);
var G__41211 = seen__$2;
var G__41212 = edges;
start__$1 = G__41207;
nbrs = G__41208;
stack = G__41209;
nbrstack = G__41210;
seen__$1 = G__41211;
edges = G__41212;
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

loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq41186){
var G__41187 = cljs.core.first.call(null,seq41186);
var seq41186__$1 = cljs.core.next.call(null,seq41186);
var G__41188 = cljs.core.first.call(null,seq41186__$1);
var seq41186__$2 = cljs.core.next.call(null,seq41186__$1);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic(G__41187,G__41188,seq41186__$2);
});
/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var args41213 = [];
var len__25223__auto___41216 = arguments.length;
var i__25224__auto___41217 = (0);
while(true){
if((i__25224__auto___41217 < len__25223__auto___41216)){
args41213.push((arguments[i__25224__auto___41217]));

var G__41218 = (i__25224__auto___41217 + (1));
i__25224__auto___41217 = G__41218;
continue;
} else {
}
break;
}

var G__41215 = args41213.length;
switch (G__41215) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41213.length)].join('')));

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
var G__41220 = seen__$2;
var G__41221 = explored__$1;
var G__41222 = result;
var G__41223 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__41220;
explored__$1 = G__41221;
result = G__41222;
stack = G__41223;
continue;
}
} else {
var G__41224 = seen__$2;
var G__41225 = cljs.core.conj.call(null,explored__$1,v);
var G__41226 = cljs.core.conj.call(null,result,v);
var G__41227 = cljs.core.pop.call(null,stack);
seen__$1 = G__41224;
explored__$1 = G__41225;
result = G__41226;
stack = G__41227;
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
var args__25230__auto__ = [];
var len__25223__auto___41262 = arguments.length;
var i__25224__auto___41263 = (0);
while(true){
if((i__25224__auto___41263 < len__25223__auto___41262)){
args__25230__auto__.push((arguments[i__25224__auto___41263]));

var G__41264 = (i__25224__auto___41263 + (1));
i__25224__auto___41263 = G__41264;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((2) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((2)),(0))):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25231__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41235){
var map__41236 = p__41235;
var map__41236__$1 = ((((!((map__41236 == null)))?((((map__41236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41236):map__41236);
var f = cljs.core.get.call(null,map__41236__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__41236__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__41236__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__24165__auto__ = f;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return ((function (or__24165__auto__,map__41236,map__41236__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__24165__auto__,map__41236,map__41236__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__24165__auto__ = when;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__41236,map__41236__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__4425__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__41253 = temp__4425__auto__;
var node = cljs.core.nth.call(null,vec__41253,(0),null);
var depth = cljs.core.nth.call(null,vec__41253,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__41253,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__41236,map__41236__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__41253,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__41236,map__41236__$1,f,when,seen){
return (function (p1__41229_SHARP_){
return nbr_pred.call(null,p1__41229_SHARP_,node,(depth + (1)));
});})(vec__41253,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__41236,map__41236__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__41253,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__41236,map__41236__$1,f,when,seen){
return (function (p1__41228_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__41228_SHARP_);
});})(vec__41253,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__41236,map__41236__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__24937__auto__ = ((function (nbrs,vec__41253,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__41236,map__41236__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__41254(s__41255){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__41253,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__41236,map__41236__$1,f,when,seen){
return (function (){
var s__41255__$1 = s__41255;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__41255__$1);
if(temp__4425__auto____$1){
var s__41255__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41255__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41255__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41257 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41256 = (0);
while(true){
if((i__41256 < size__24936__auto__)){
var nbr = cljs.core._nth.call(null,c__24935__auto__,i__41256);
cljs.core.chunk_append.call(null,b__41257,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__41265 = (i__41256 + (1));
i__41256 = G__41265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41257),loom$alg_generic$step_$_iter__41254.call(null,cljs.core.chunk_rest.call(null,s__41255__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41257),null);
}
} else {
var nbr = cljs.core.first.call(null,s__41255__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__41254.call(null,cljs.core.rest.call(null,s__41255__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__41253,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__41236,map__41236__$1,f,when,seen))
,null,null));
});})(nbrs,vec__41253,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__41236,map__41236__$1,f,when,seen))
;
return iter__24937__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__41253,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__41236,map__41236__$1,f,when,seen){
return (function (p1__41230_SHARP_,p2__41231_SHARP_){
return cljs.core.assoc.call(null,p1__41230_SHARP_,p2__41231_SHARP_,node);
});})(nbrs,vec__41253,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__41236,map__41236__$1,f,when,seen))
,preds,nbrs));
});})(vec__41253,node,depth,temp__4425__auto__,f__$1,nbr_pred,map__41236,map__41236__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__41236,map__41236__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.fromArray([start,null], true, false),(function (){var iter__24937__auto__ = ((function (f__$1,nbr_pred,map__41236,map__41236__$1,f,when,seen){
return (function loom$alg_generic$iter__41258(s__41259){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__41236,map__41236__$1,f,when,seen){
return (function (){
var s__41259__$1 = s__41259;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41259__$1);
if(temp__4425__auto__){
var s__41259__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41259__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41259__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41261 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41260 = (0);
while(true){
if((i__41260 < size__24936__auto__)){
var s = cljs.core._nth.call(null,c__24935__auto__,i__41260);
cljs.core.chunk_append.call(null,b__41261,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__41266 = (i__41260 + (1));
i__41260 = G__41266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41261),loom$alg_generic$iter__41258.call(null,cljs.core.chunk_rest.call(null,s__41259__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41261),null);
}
} else {
var s = cljs.core.first.call(null,s__41259__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__41258.call(null,cljs.core.rest.call(null,s__41259__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__41236,map__41236__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__41236,map__41236__$1,f,when,seen))
;
return iter__24937__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq41232){
var G__41233 = cljs.core.first.call(null,seq41232);
var seq41232__$1 = cljs.core.next.call(null,seq41232);
var G__41234 = cljs.core.first.call(null,seq41232__$1);
var seq41232__$2 = cljs.core.next.call(null,seq41232__$1);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(G__41233,G__41234,seq41232__$2);
});
/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__25230__auto__ = [];
var len__25223__auto___41273 = arguments.length;
var i__25224__auto___41274 = (0);
while(true){
if((i__25224__auto___41274 < len__25223__auto___41273)){
args__25230__auto__.push((arguments[i__25224__auto___41274]));

var G__41275 = (i__25224__auto___41274 + (1));
i__25224__auto___41274 = G__41275;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((2) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((2)),(0))):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25231__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__41270){
var map__41271 = p__41270;
var map__41271__$1 = ((((!((map__41271 == null)))?((((map__41271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41271):map__41271);
var seen = cljs.core.get.call(null,map__41271__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__41271,map__41271__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__41271,map__41271__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq41267){
var G__41268 = cljs.core.first.call(null,seq41267);
var seq41267__$1 = cljs.core.next.call(null,seq41267);
var G__41269 = cljs.core.first.call(null,seq41267__$1);
var seq41267__$2 = cljs.core.next.call(null,seq41267__$1);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic(G__41268,G__41269,seq41267__$2);
});
/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__25230__auto__ = [];
var len__25223__auto___41285 = arguments.length;
var i__25224__auto___41286 = (0);
while(true){
if((i__25224__auto___41286 < len__25223__auto___41285)){
args__25230__auto__.push((arguments[i__25224__auto___41286]));

var G__41287 = (i__25224__auto___41286 + (1));
i__25224__auto___41286 = G__41287;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((3) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((3)),(0))):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25231__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__41280){
var map__41281 = p__41280;
var map__41281__$1 = ((((!((map__41281 == null)))?((((map__41281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41281):map__41281);
var opts = map__41281__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__4425__auto__ = cljs.core.some.call(null,((function (opts__$1,map__41281,map__41281__$1,opts){
return (function (p__41283){
var vec__41284 = p__41283;
var _ = cljs.core.nth.call(null,vec__41284,(0),null);
var pm = cljs.core.nth.call(null,vec__41284,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__41284,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__41281,map__41281__$1,opts))
,cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__4425__auto__)){
var preds = temp__4425__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq41276){
var G__41277 = cljs.core.first.call(null,seq41276);
var seq41276__$1 = cljs.core.next.call(null,seq41276);
var G__41278 = cljs.core.first.call(null,seq41276__$1);
var seq41276__$2 = cljs.core.next.call(null,seq41276__$1);
var G__41279 = cljs.core.first.call(null,seq41276__$2);
var seq41276__$3 = cljs.core.next.call(null,seq41276__$2);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic(G__41277,G__41278,G__41279,seq41276__$3);
});
/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__41288 = m2;
var G__41289 = m1;
m1 = G__41288;
m2 = G__41289;
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
if(cljs.core.truth_((function (){var or__24165__auto__ = cljs.core.seq.call(null,intersects);
if(or__24165__auto__){
return or__24165__auto__;
} else {
var or__24165__auto____$1 = loom.alg_generic.future_done_QMARK_.call(null,search1);
if(cljs.core.truth_(or__24165__auto____$1)){
return or__24165__auto____$1;
} else {
return loom.alg_generic.future_done_QMARK_.call(null,search2);
}
}
})())){
cljs.core.reset_BANG_.call(null,done_QMARK_,true);

if(cljs.core.seq.call(null,intersects)){
var intersect = cljs.core.apply.call(null,cljs.core.min_key,((function (intersects,done_QMARK_,preds1,preds2,search,search1,search2,find_intersects){
return (function (p1__41290_SHARP_){
return (cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds1),p1__41290_SHARP_)) + cljs.core.count.call(null,loom.alg_generic.trace_path.call(null,cljs.core.deref.call(null,preds2),p1__41290_SHARP_)));
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
var G__41291 = find_intersects.call(null);
intersects = G__41291;
continue;
}
break;
}
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__24937__auto__ = (function loom$alg_generic$reverse_edges_$_iter__41298(s__41299){
return (new cljs.core.LazySeq(null,(function (){
var s__41299__$1 = s__41299;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41299__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var node = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24933__auto__ = ((function (s__41299__$1,node,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__41298_$_iter__41300(s__41301){
return (new cljs.core.LazySeq(null,((function (s__41299__$1,node,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__41301__$1 = s__41301;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__41301__$1);
if(temp__4425__auto____$1){
var s__41301__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41301__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41301__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41303 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41302 = (0);
while(true){
if((i__41302 < size__24936__auto__)){
var nbr = cljs.core._nth.call(null,c__24935__auto__,i__41302);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
cljs.core.chunk_append.call(null,b__41303,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__41304 = (i__41302 + (1));
i__41302 = G__41304;
continue;
} else {
var G__41305 = (i__41302 + (1));
i__41302 = G__41305;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41303),loom$alg_generic$reverse_edges_$_iter__41298_$_iter__41300.call(null,cljs.core.chunk_rest.call(null,s__41301__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41303),null);
}
} else {
var nbr = cljs.core.first.call(null,s__41301__$2);
if(!(cljs.core.contains_QMARK_.call(null,coll,nbr))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__41298_$_iter__41300.call(null,cljs.core.rest.call(null,s__41301__$2)));
} else {
var G__41306 = cljs.core.rest.call(null,s__41301__$2);
s__41301__$1 = G__41306;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__41299__$1,node,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__41299__$1,node,xs__4977__auto__,temp__4425__auto__))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,successor_fn.call(null,node)));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,loom$alg_generic$reverse_edges_$_iter__41298.call(null,cljs.core.rest.call(null,s__41299__$1)));
} else {
var G__41307 = cljs.core.rest.call(null,s__41299__$1);
s__41299__$1 = G__41307;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24937__auto__.call(null,nodes);
});
loom.alg_generic.conj_paths = (function loom$alg_generic$conj_paths(from_map,to_map,matches){
var iter__24937__auto__ = (function loom$alg_generic$conj_paths_$_iter__41316(s__41317){
return (new cljs.core.LazySeq(null,(function (){
var s__41317__$1 = s__41317;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41317__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24933__auto__ = ((function (s__41317__$1,n,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$conj_paths_$_iter__41316_$_iter__41318(s__41319){
return (new cljs.core.LazySeq(null,((function (s__41317__$1,n,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__41319__$1 = s__41319;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__41319__$1);
if(temp__4425__auto____$1){
var xs__4977__auto____$1 = temp__4425__auto____$1;
var from = cljs.core.first.call(null,xs__4977__auto____$1);
var iterys__24933__auto__ = ((function (s__41319__$1,s__41317__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$conj_paths_$_iter__41316_$_iter__41318_$_iter__41320(s__41321){
return (new cljs.core.LazySeq(null,((function (s__41319__$1,s__41317__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__41321__$1 = s__41321;
while(true){
var temp__4425__auto____$2 = cljs.core.seq.call(null,s__41321__$1);
if(temp__4425__auto____$2){
var s__41321__$2 = temp__4425__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41321__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41321__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41323 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41322 = (0);
while(true){
if((i__41322 < size__24936__auto__)){
var to = cljs.core._nth.call(null,c__24935__auto__,i__41322);
cljs.core.chunk_append.call(null,b__41323,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__41324 = (i__41322 + (1));
i__41322 = G__41324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41323),loom$alg_generic$conj_paths_$_iter__41316_$_iter__41318_$_iter__41320.call(null,cljs.core.chunk_rest.call(null,s__41321__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41323),null);
}
} else {
var to = cljs.core.first.call(null,s__41321__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__41316_$_iter__41318_$_iter__41320.call(null,cljs.core.rest.call(null,s__41321__$2)));
}
} else {
return null;
}
break;
}
});})(s__41319__$1,s__41317__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__41319__$1,s__41317__$1,from,xs__4977__auto____$1,temp__4425__auto____$1,n,xs__4977__auto__,temp__4425__auto__))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,loom$alg_generic$conj_paths_$_iter__41316_$_iter__41318.call(null,cljs.core.rest.call(null,s__41319__$1)));
} else {
var G__41325 = cljs.core.rest.call(null,s__41319__$1);
s__41319__$1 = G__41325;
continue;
}
} else {
return null;
}
break;
}
});})(s__41317__$1,n,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__41317__$1,n,xs__4977__auto__,temp__4425__auto__))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,loom$alg_generic$conj_paths_$_iter__41316.call(null,cljs.core.rest.call(null,s__41317__$1)));
} else {
var G__41326 = cljs.core.rest.call(null,s__41317__$1);
s__41317__$1 = G__41326;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24937__auto__.call(null,matches);
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
return (function (p1__41327_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__41327_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__41330){
var vec__41331 = p__41330;
var key = cljs.core.nth.call(null,vec__41331,(0),null);
var val = cljs.core.nth.call(null,vec__41331,(1),null);
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
var G__41332 = outgoing__$1;
var G__41333 = incoming;
var G__41334 = q1__$1;
var G__41335 = q2;
outgoing = G__41332;
incoming = G__41333;
q1 = G__41334;
q2 = G__41335;
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
var G__41336 = outgoing;
var G__41337 = incoming__$1;
var G__41338 = q1;
var G__41339 = q2__$1;
outgoing = G__41336;
incoming = G__41337;
q1 = G__41338;
q2 = G__41339;
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
var args41342 = [];
var len__25223__auto___41363 = arguments.length;
var i__25224__auto___41364 = (0);
while(true){
if((i__25224__auto___41364 < len__25223__auto___41363)){
args41342.push((arguments[i__25224__auto___41364]));

var G__41365 = (i__25224__auto___41364 + (1));
i__25224__auto___41364 = G__41365;
continue;
} else {
}
break;
}

var G__41344 = args41342.length;
switch (G__41344) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41342.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__41354){
var vec__41359 = p__41354;
var state = cljs.core.nth.call(null,vec__41359,(0),null);
var pq = cljs.core.nth.call(null,vec__41359,(1),null);
var temp__4425__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__41360 = temp__4425__auto__;
var dist_su = cljs.core.nth.call(null,vec__41360,(0),null);
var _ = cljs.core.nth.call(null,vec__41360,(1),null);
var u = cljs.core.nth.call(null,vec__41360,(2),null);
var fpq = vec__41360;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__41360,dist_su,_,u,fpq,temp__4425__auto__,vec__41359,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__41360,dist_su,_,u,fpq,temp__4425__auto__,vec__41359,state,pq){
return (function (p__41361,v){
var vec__41362 = p__41361;
var state__$1 = cljs.core.nth.call(null,vec__41362,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__41362,(1),null);
var dist_suv = (dist_su + dist.call(null,u,v));
var dist_sv = cljs.core.first.call(null,state__$1.call(null,v));
if(cljs.core.truth_((function (){var and__24153__auto__ = dist_sv;
if(cljs.core.truth_(and__24153__auto__)){
return (dist_suv >= dist_sv);
} else {
return and__24153__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,pq__$1], null);
} else {
var pq__$2 = (cljs.core.truth_(dist_sv)?cljs.core.disj.call(null,pq__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_sv,cljs.core.hash.call(null,v),v], null)):pq__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state__$1,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,u], null)),cljs.core.conj.call(null,pq__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,cljs.core.hash.call(null,v),v], null))], null);
}
});})(vec__41360,dist_su,_,u,fpq,temp__4425__auto__,vec__41359,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__41360,dist_su,_,u,fpq,temp__4425__auto__,vec__41359,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__41370){
var vec__41371 = p__41370;
var n = cljs.core.nth.call(null,vec__41371,(0),null);
var vec__41372 = cljs.core.nth.call(null,vec__41371,(1),null);
var d = cljs.core.nth.call(null,vec__41372,(0),null);
var p = cljs.core.nth.call(null,vec__41372,(1),null);
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
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__41376){
var vec__41377 = p__41376;
var node = cljs.core.nth.call(null,vec__41377,(0),null);
var _ = cljs.core.nth.call(null,vec__41377,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__41378 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__41378,(0),null);
var end_state = cljs.core.nth.call(null,vec__41378,(1),null);
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
var size = (function (){var x__24496__auto__ = cljs.core.count.call(null,bitmap);
var y__24497__auto__ = loom.alg_generic.bm_longs.call(null,(idx + (1)));
return ((x__24496__auto__ > y__24497__auto__) ? x__24496__auto__ : y__24497__auto__);
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
var args__25230__auto__ = [];
var len__25223__auto___41403 = arguments.length;
var i__25224__auto___41404 = (0);
while(true){
if((i__25224__auto___41404 < len__25223__auto___41403)){
args__25230__auto__.push((arguments[i__25224__auto___41404]));

var G__41405 = (i__25224__auto___41404 + (1));
i__25224__auto___41404 = G__41405;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((0) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((0)),(0))):null);
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(argseq__25231__auto__);
});

loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic = (function (bitmaps){
if(cljs.core.empty_QMARK_.call(null,bitmaps)){
return loom.alg_generic.bm_new.call(null);
} else {
var size = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,bitmaps));
var bitmap = cljs.core.first.call(null,bitmaps);
var n_zeros = (size - cljs.core.count.call(null,bitmap));
var new_bitmap = bitmap.slice().concat((new Array(n_zeros)).fill((0)));
var seq__41383_41406 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__41390_41407 = null;
var count__41391_41408 = (0);
var i__41392_41409 = (0);
while(true){
if((i__41392_41409 < count__41391_41408)){
var bitmap_41410__$1 = cljs.core._nth.call(null,chunk__41390_41407,i__41392_41409);
var seq__41393_41411 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_41410__$1));
var chunk__41395_41412 = null;
var count__41396_41413 = (0);
var i__41397_41414 = (0);
while(true){
if((i__41397_41414 < count__41396_41413)){
var vec__41399_41415 = cljs.core._nth.call(null,chunk__41395_41412,i__41397_41414);
var idx_41416 = cljs.core.nth.call(null,vec__41399_41415,(0),null);
var value_41417 = cljs.core.nth.call(null,vec__41399_41415,(1),null);
var masked_value_41418 = (value_41417 | (new_bitmap[idx_41416]));
(new_bitmap[idx_41416] = masked_value_41418);

var G__41419 = seq__41393_41411;
var G__41420 = chunk__41395_41412;
var G__41421 = count__41396_41413;
var G__41422 = (i__41397_41414 + (1));
seq__41393_41411 = G__41419;
chunk__41395_41412 = G__41420;
count__41396_41413 = G__41421;
i__41397_41414 = G__41422;
continue;
} else {
var temp__4425__auto___41423 = cljs.core.seq.call(null,seq__41393_41411);
if(temp__4425__auto___41423){
var seq__41393_41424__$1 = temp__4425__auto___41423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41393_41424__$1)){
var c__24968__auto___41425 = cljs.core.chunk_first.call(null,seq__41393_41424__$1);
var G__41426 = cljs.core.chunk_rest.call(null,seq__41393_41424__$1);
var G__41427 = c__24968__auto___41425;
var G__41428 = cljs.core.count.call(null,c__24968__auto___41425);
var G__41429 = (0);
seq__41393_41411 = G__41426;
chunk__41395_41412 = G__41427;
count__41396_41413 = G__41428;
i__41397_41414 = G__41429;
continue;
} else {
var vec__41400_41430 = cljs.core.first.call(null,seq__41393_41424__$1);
var idx_41431 = cljs.core.nth.call(null,vec__41400_41430,(0),null);
var value_41432 = cljs.core.nth.call(null,vec__41400_41430,(1),null);
var masked_value_41433 = (value_41432 | (new_bitmap[idx_41431]));
(new_bitmap[idx_41431] = masked_value_41433);

var G__41434 = cljs.core.next.call(null,seq__41393_41424__$1);
var G__41435 = null;
var G__41436 = (0);
var G__41437 = (0);
seq__41393_41411 = G__41434;
chunk__41395_41412 = G__41435;
count__41396_41413 = G__41436;
i__41397_41414 = G__41437;
continue;
}
} else {
}
}
break;
}

var G__41438 = seq__41383_41406;
var G__41439 = chunk__41390_41407;
var G__41440 = count__41391_41408;
var G__41441 = (i__41392_41409 + (1));
seq__41383_41406 = G__41438;
chunk__41390_41407 = G__41439;
count__41391_41408 = G__41440;
i__41392_41409 = G__41441;
continue;
} else {
var temp__4425__auto___41442 = cljs.core.seq.call(null,seq__41383_41406);
if(temp__4425__auto___41442){
var seq__41383_41443__$1 = temp__4425__auto___41442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41383_41443__$1)){
var c__24968__auto___41444 = cljs.core.chunk_first.call(null,seq__41383_41443__$1);
var G__41445 = cljs.core.chunk_rest.call(null,seq__41383_41443__$1);
var G__41446 = c__24968__auto___41444;
var G__41447 = cljs.core.count.call(null,c__24968__auto___41444);
var G__41448 = (0);
seq__41383_41406 = G__41445;
chunk__41390_41407 = G__41446;
count__41391_41408 = G__41447;
i__41392_41409 = G__41448;
continue;
} else {
var bitmap_41449__$1 = cljs.core.first.call(null,seq__41383_41443__$1);
var seq__41384_41450 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_41449__$1));
var chunk__41386_41451 = null;
var count__41387_41452 = (0);
var i__41388_41453 = (0);
while(true){
if((i__41388_41453 < count__41387_41452)){
var vec__41401_41454 = cljs.core._nth.call(null,chunk__41386_41451,i__41388_41453);
var idx_41455 = cljs.core.nth.call(null,vec__41401_41454,(0),null);
var value_41456 = cljs.core.nth.call(null,vec__41401_41454,(1),null);
var masked_value_41457 = (value_41456 | (new_bitmap[idx_41455]));
(new_bitmap[idx_41455] = masked_value_41457);

var G__41458 = seq__41384_41450;
var G__41459 = chunk__41386_41451;
var G__41460 = count__41387_41452;
var G__41461 = (i__41388_41453 + (1));
seq__41384_41450 = G__41458;
chunk__41386_41451 = G__41459;
count__41387_41452 = G__41460;
i__41388_41453 = G__41461;
continue;
} else {
var temp__4425__auto___41462__$1 = cljs.core.seq.call(null,seq__41384_41450);
if(temp__4425__auto___41462__$1){
var seq__41384_41463__$1 = temp__4425__auto___41462__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41384_41463__$1)){
var c__24968__auto___41464 = cljs.core.chunk_first.call(null,seq__41384_41463__$1);
var G__41465 = cljs.core.chunk_rest.call(null,seq__41384_41463__$1);
var G__41466 = c__24968__auto___41464;
var G__41467 = cljs.core.count.call(null,c__24968__auto___41464);
var G__41468 = (0);
seq__41384_41450 = G__41465;
chunk__41386_41451 = G__41466;
count__41387_41452 = G__41467;
i__41388_41453 = G__41468;
continue;
} else {
var vec__41402_41469 = cljs.core.first.call(null,seq__41384_41463__$1);
var idx_41470 = cljs.core.nth.call(null,vec__41402_41469,(0),null);
var value_41471 = cljs.core.nth.call(null,vec__41402_41469,(1),null);
var masked_value_41472 = (value_41471 | (new_bitmap[idx_41470]));
(new_bitmap[idx_41470] = masked_value_41472);

var G__41473 = cljs.core.next.call(null,seq__41384_41463__$1);
var G__41474 = null;
var G__41475 = (0);
var G__41476 = (0);
seq__41384_41450 = G__41473;
chunk__41386_41451 = G__41474;
count__41387_41452 = G__41475;
i__41388_41453 = G__41476;
continue;
}
} else {
}
}
break;
}

var G__41477 = cljs.core.next.call(null,seq__41383_41443__$1);
var G__41478 = null;
var G__41479 = (0);
var G__41480 = (0);
seq__41383_41406 = G__41477;
chunk__41390_41407 = G__41478;
count__41391_41408 = G__41479;
i__41392_41409 = G__41480;
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

loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq41382){
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41382));
});
/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__24937__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__41487(s__41488){
return (new cljs.core.LazySeq(null,(function (){
var s__41488__$1 = s__41488;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41488__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var chunk = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24933__auto__ = ((function (s__41488__$1,chunk,xs__4977__auto__,temp__4425__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__41487_$_iter__41489(s__41490){
return (new cljs.core.LazySeq(null,((function (s__41488__$1,chunk,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__41490__$1 = s__41490;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__41490__$1);
if(temp__4425__auto____$1){
var s__41490__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41490__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41490__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41492 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41491 = (0);
while(true){
if((i__41491 < size__24936__auto__)){
var offset = cljs.core._nth.call(null,c__24935__auto__,i__41491);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__41492,idx);

var G__41493 = (i__41491 + (1));
i__41491 = G__41493;
continue;
} else {
var G__41494 = (i__41491 + (1));
i__41491 = G__41494;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41492),loom$alg_generic$bm_get_indicies_$_iter__41487_$_iter__41489.call(null,cljs.core.chunk_rest.call(null,s__41490__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41492),null);
}
} else {
var offset = cljs.core.first.call(null,s__41490__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__41487_$_iter__41489.call(null,cljs.core.rest.call(null,s__41490__$2)));
} else {
var G__41495 = cljs.core.rest.call(null,s__41490__$2);
s__41490__$1 = G__41495;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__41488__$1,chunk,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__41488__$1,chunk,xs__4977__auto__,temp__4425__auto__))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,loom$alg_generic$bm_get_indicies_$_iter__41487.call(null,cljs.core.rest.call(null,s__41488__$1)));
} else {
var G__41496 = cljs.core.rest.call(null,s__41488__$1);
s__41488__$1 = G__41496;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24937__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,bitmap)));
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
loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24779__auto__,k__24780__auto__){
var self__ = this;
var this__24779__auto____$1 = this;
return cljs.core._lookup.call(null,this__24779__auto____$1,k__24780__auto__,null);
});

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24781__auto__,k41498,else__24782__auto__){
var self__ = this;
var this__24781__auto____$1 = this;
var G__41500 = (((k41498 instanceof cljs.core.Keyword))?k41498.fqn:null);
switch (G__41500) {
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
return cljs.core.get.call(null,self__.__extmap,k41498,else__24782__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24793__auto__,writer__24794__auto__,opts__24795__auto__){
var self__ = this;
var this__24793__auto____$1 = this;
var pr_pair__24796__auto__ = ((function (this__24793__auto____$1){
return (function (keyval__24797__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24794__auto__,cljs.core.pr_writer,""," ","",opts__24795__auto__,keyval__24797__auto__);
});})(this__24793__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24794__auto__,pr_pair__24796__auto__,"#loom.alg-generic.Ancestry{",", ","}",opts__24795__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$ = true;

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41497){
var self__ = this;
var G__41497__$1 = this;
return (new cljs.core.RecordIter((0),G__41497__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24777__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
return self__.__meta;
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24773__auto__){
var self__ = this;
var this__24773__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24783__auto__){
var self__ = this;
var this__24783__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24774__auto__){
var self__ = this;
var this__24774__auto____$1 = this;
var h__24600__auto__ = self__.__hash;
if(!((h__24600__auto__ == null))){
return h__24600__auto__;
} else {
var h__24600__auto____$1 = cljs.core.hash_imap.call(null,this__24774__auto____$1);
self__.__hash = h__24600__auto____$1;

return h__24600__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24775__auto__,other__24776__auto__){
var self__ = this;
var this__24775__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24153__auto__ = other__24776__auto__;
if(cljs.core.truth_(and__24153__auto__)){
var and__24153__auto____$1 = (this__24775__auto____$1.constructor === other__24776__auto__.constructor);
if(and__24153__auto____$1){
return cljs.core.equiv_map.call(null,this__24775__auto____$1,other__24776__auto__);
} else {
return and__24153__auto____$1;
}
} else {
return and__24153__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24788__auto__,k__24789__auto__){
var self__ = this;
var this__24788__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),null], null), null),k__24789__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24788__auto____$1),self__.__meta),k__24789__auto__);
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24789__auto__)),null));
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24786__auto__,k__24787__auto__,G__41497){
var self__ = this;
var this__24786__auto____$1 = this;
var pred__41501 = cljs.core.keyword_identical_QMARK_;
var expr__41502 = k__24787__auto__;
if(cljs.core.truth_(pred__41501.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__41502))){
return (new loom.alg_generic.Ancestry(G__41497,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41501.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__41502))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__41497,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41501.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__41502))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__41497,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24787__auto__,G__41497),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24791__auto__){
var self__ = this;
var this__24791__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24778__auto__,G__41497){
var self__ = this;
var this__24778__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__41497,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24784__auto__,entry__24785__auto__){
var self__ = this;
var this__24784__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24785__auto__)){
return cljs.core._assoc.call(null,this__24784__auto____$1,cljs.core._nth.call(null,entry__24785__auto__,(0)),cljs.core._nth.call(null,entry__24785__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24784__auto____$1,entry__24785__auto__);
}
});

loom.alg_generic.Ancestry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node->idx","node->idx",1793236754,null),new cljs.core.Symbol(null,"idx->node","idx->node",-842528594,null),new cljs.core.Symbol(null,"bitmaps","bitmaps",-1506736927,null)], null);
});

loom.alg_generic.Ancestry.cljs$lang$type = true;

loom.alg_generic.Ancestry.cljs$lang$ctorPrSeq = (function (this__24813__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.alg-generic/Ancestry");
});

loom.alg_generic.Ancestry.cljs$lang$ctorPrWriter = (function (this__24813__auto__,writer__24814__auto__){
return cljs.core._write.call(null,writer__24814__auto__,"loom.alg-generic/Ancestry");
});

loom.alg_generic.__GT_Ancestry = (function loom$alg_generic$__GT_Ancestry(node__GT_idx,idx__GT_node,bitmaps){
return (new loom.alg_generic.Ancestry(node__GT_idx,idx__GT_node,bitmaps,null,null,null));
});

loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__41499){
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__41499),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__41499),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__41499),null,cljs.core.dissoc.call(null,G__41499,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)),null));
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
var args__25230__auto__ = [];
var len__25223__auto___41510 = arguments.length;
var i__25224__auto___41511 = (0);
while(true){
if((i__25224__auto___41511 < len__25223__auto___41510)){
args__25230__auto__.push((arguments[i__25224__auto___41511]));

var G__41512 = (i__25224__auto___41511 + (1));
i__25224__auto___41511 = G__41512;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((2) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((2)),(0))):null);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25231__auto__);
});

loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic = (function (ancestry,node,parents){
if(cljs.core.truth_(loom.alg_generic.ancestry_contains_QMARK_.call(null,ancestry,node))){
return ancestry;
} else {
var map__41508 = ancestry;
var map__41508__$1 = ((((!((map__41508 == null)))?((((map__41508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41508):map__41508);
var node__GT_idx = cljs.core.get.call(null,map__41508__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__41508__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__41508__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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

loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq41505){
var G__41506 = cljs.core.first.call(null,seq41505);
var seq41505__$1 = cljs.core.next.call(null,seq41505);
var G__41507 = cljs.core.first.call(null,seq41505__$1);
var seq41505__$2 = cljs.core.next.call(null,seq41505__$1);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic(G__41506,G__41507,seq41505__$2);
});
/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__41515 = ancestry;
var map__41515__$1 = ((((!((map__41515 == null)))?((((map__41515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41515):map__41515);
var node__GT_idx = cljs.core.get.call(null,map__41515__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__41515__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,childer);
var pidx = node__GT_idx.call(null,parenter);
return cljs.core.boolean$.call(null,(cljs.core.truth_((function (){var and__24153__auto__ = cidx;
if(cljs.core.truth_(and__24153__auto__)){
return pidx;
} else {
return and__24153__auto__;
}
})())?loom.alg_generic.bm_get.call(null,cljs.core.get.call(null,bitmaps,cidx),pidx):null));
});
/**
 * Returns all of the ancestors of 'child node.
 */
loom.alg_generic.ancestors = (function loom$alg_generic$ancestors(ancestry,child){
var map__41519 = ancestry;
var map__41519__$1 = ((((!((map__41519 == null)))?((((map__41519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41519):map__41519);
var node__GT_idx = cljs.core.get.call(null,map__41519__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__41519__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__41519__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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