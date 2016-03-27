// Compiled by ClojureScript 1.8.34 {}
goog.provide('dynomics.space.graph');
goog.require('cljs.core');
goog.require('loom.alg');
goog.require('loom.graph');
dynomics.space.graph.__ = (function dynomics$space$graph$__(p__288385){
var vec__288387 = p__288385;
var a = cljs.core.nth.call(null,vec__288387,(0),null);
var b = cljs.core.nth.call(null,vec__288387,(1),null);
if((a < b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
}
});
dynomics.space.graph.simplify_edges = (function dynomics$space$graph$simplify_edges(edges){
return cljs.core.map.call(null,(function (p__288394){
var vec__288395 = p__288394;
var vec__288396 = cljs.core.nth.call(null,vec__288395,(0),null);
var _ = cljs.core.nth.call(null,vec__288396,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__288396,(1),null);
var nid1 = cljs.core.nth.call(null,vec__288396,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__288396,(3),null);
var cid1 = cljs.core.nth.call(null,vec__288396,(4),null);
var vec__288397 = cljs.core.nth.call(null,vec__288395,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__288397,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__288397,(1),null);
var nid2 = cljs.core.nth.call(null,vec__288397,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__288397,(3),null);
var cid2 = cljs.core.nth.call(null,vec__288397,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null);
}),edges);
});
/**
 * Returns a nested list of connections (paths to node connections)
 *   from the given edges [[node1 node2] [node3 node4]
 *   and edgez, a set of connection edges}
 */
dynomics.space.graph.as_connections = (function dynomics$space$graph$as_connections(edgez,edges){
var ebn = cljs.core.group_by.call(null,(function (p__288405){
var vec__288406 = p__288405;
var vec__288407 = cljs.core.nth.call(null,vec__288406,(0),null);
var _ = cljs.core.nth.call(null,vec__288407,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__288407,(1),null);
var nid1 = cljs.core.nth.call(null,vec__288407,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__288407,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__288407,(4),null);
var vec__288408 = cljs.core.nth.call(null,vec__288406,(1),null);
var ___$4 = cljs.core.nth.call(null,vec__288408,(0),null);
var ___$5 = cljs.core.nth.call(null,vec__288408,(1),null);
var nid2 = cljs.core.nth.call(null,vec__288408,(2),null);
var ___$6 = cljs.core.nth.call(null,vec__288408,(3),null);
var ___$7 = cljs.core.nth.call(null,vec__288408,(4),null);
return cljs.core.vec.call(null,cljs.core.sort.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null)));
}),edgez);
return cljs.core.distinct.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.first,ebn,cljs.core.vec,cljs.core.sort),edges)));
});
dynomics.space.graph.as_edges = (function dynomics$space$graph$as_edges(m){
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.partial.call(null,cljs.core.map,(function (x){
return (Math.abs(x) - (1));
})),cljs.core.sort,cljs.core.partial.call(null,cljs.core.remove,cljs.core.zero_QMARK_),(function (v){
return cljs.core.map.call(null,cljs.core._STAR_,v,cljs.core.range.call(null,(1),(cljs.core.count.call(null,v) + (1))));
})),m);
});
/**
 * 
 *   Returns an adjacency matrix representation of the given graph
 *   in undirected form.
 *   Assumes nodes are numbered from 0-n
 *   
 */
dynomics.space.graph.as_matrix = (function dynomics$space$graph$as_matrix(var_args){
var args288414 = [];
var len__36260__auto___288430 = arguments.length;
var i__36261__auto___288431 = (0);
while(true){
if((i__36261__auto___288431 < len__36260__auto___288430)){
args288414.push((arguments[i__36261__auto___288431]));

var G__288434 = (i__36261__auto___288431 + (1));
i__36261__auto___288431 = G__288434;
continue;
} else {
}
break;
}

var G__288418 = args288414.length;
switch (G__288418) {
case 1:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args288414.length)].join('')));

}
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1 = (function (p__288421){
var map__288422 = p__288421;
var map__288422__$1 = ((((!((map__288422 == null)))?((((map__288422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__288422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__288422):map__288422);
var nodes = cljs.core.get.call(null,map__288422__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__288422__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return dynomics.space.graph.as_matrix.call(null,nodes,edges);
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2 = (function (nodes,edges){
return cljs.core.reduce.call(null,(function (m,p__288425){
var vec__288427 = p__288425;
var vec__288428 = cljs.core.nth.call(null,vec__288427,(0),null);
var nid1 = cljs.core.nth.call(null,vec__288428,(0),null);
var nid2 = cljs.core.nth.call(null,vec__288428,(1),null);
var j = cljs.core.nth.call(null,vec__288427,(1),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,nid1], null),(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,nid2], null),(1));
}),cljs.core.vec.call(null,cljs.core.repeatedly.call(null,cljs.core.count.call(null,edges),(function (){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,nodes),(0)));
}))),cljs.core.map.call(null,cljs.core.vector,edges,cljs.core.range.call(null)));
});

dynomics.space.graph.as_matrix.cljs$lang$maxFixedArity = 2;
dynomics.space.graph.sum_graph = (function dynomics$space$graph$sum_graph(m){
if(cljs.core.empty_QMARK_.call(null,m)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.map,(function() { 
var G__288467__delegate = function (x){
return cljs.core.mod.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,x),(2));
};
var G__288467 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__288470__i = 0, G__288470__a = new Array(arguments.length -  0);
while (G__288470__i < G__288470__a.length) {G__288470__a[G__288470__i] = arguments[G__288470__i + 0]; ++G__288470__i;}
  x = new cljs.core.IndexedSeq(G__288470__a,0);
} 
return G__288467__delegate.call(this,x);};
G__288467.cljs$lang$maxFixedArity = 0;
G__288467.cljs$lang$applyTo = (function (arglist__288471){
var x = cljs.core.seq(arglist__288471);
return G__288467__delegate(x);
});
G__288467.cljs$core$IFn$_invoke$arity$variadic = G__288467__delegate;
return G__288467;
})()
),m);
}
});
dynomics.space.graph.nodes_from_sum = (function dynomics$space$graph$nodes_from_sum(s){
return cljs.core.reduce.call(null,(function (r,p__288475){
var vec__288476 = p__288475;
var n = cljs.core.nth.call(null,vec__288476,(0),null);
var i = cljs.core.nth.call(null,vec__288476,(1),null);
return cljs.core.reduce.call(null,((function (vec__288476,n,i){
return (function (r__$1,j){
return cljs.core.conj.call(null,r__$1,i);
});})(vec__288476,n,i))
,r,cljs.core.range.call(null,n));
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,s,cljs.core.range.call(null)));
});
dynomics.space.graph.pairs = (function dynomics$space$graph$pairs(l){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.sort,(function (){var iter__35971__auto__ = (function dynomics$space$graph$pairs_$_iter__288490(s__288491){
return (new cljs.core.LazySeq(null,(function (){
var s__288491__$1 = s__288491;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__288491__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__288491__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function dynomics$space$graph$pairs_$_iter__288490_$_iter__288492(s__288493){
return (new cljs.core.LazySeq(null,((function (s__288491__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__288493__$1 = s__288493;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__288493__$1);
if(temp__4657__auto____$1){
var s__288493__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__288493__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__288493__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__288495 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__288494 = (0);
while(true){
if((i__288494 < size__35970__auto__)){
var y = cljs.core._nth.call(null,c__35969__auto__,i__288494);
cljs.core.chunk_append.call(null,b__288495,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__288531 = (i__288494 + (1));
i__288494 = G__288531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288495),dynomics$space$graph$pairs_$_iter__288490_$_iter__288492.call(null,cljs.core.chunk_rest.call(null,s__288493__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288495),null);
}
} else {
var y = cljs.core.first.call(null,s__288493__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),dynomics$space$graph$pairs_$_iter__288490_$_iter__288492.call(null,cljs.core.rest.call(null,s__288493__$2)));
}
} else {
return null;
}
break;
}
});})(s__288491__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__288491__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ__EQ_,x),l)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,dynomics$space$graph$pairs_$_iter__288490.call(null,cljs.core.rest.call(null,s__288491__$1)));
} else {
var G__288547 = cljs.core.rest.call(null,s__288491__$1);
s__288491__$1 = G__288547;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35971__auto__.call(null,l);
})()));
});
dynomics.space.graph.cycles = (function dynomics$space$graph$cycles(var_args){
var args288554 = [];
var len__36260__auto___288571 = arguments.length;
var i__36261__auto___288573 = (0);
while(true){
if((i__36261__auto___288573 < len__36260__auto___288571)){
args288554.push((arguments[i__36261__auto___288573]));

var G__288577 = (i__36261__auto___288573 + (1));
i__36261__auto___288573 = G__288577;
continue;
} else {
}
break;
}

var G__288562 = args288554.length;
switch (G__288562) {
case 1:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args288554.length)].join('')));

}
});

dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$1 = (function (g){
return dynomics.space.graph.cycles.call(null,g,dynomics.space.graph.nodes_from_sum.call(null,dynomics.space.graph.sum_graph.call(null,dynomics.space.graph.as_matrix.call(null,g))));
});

dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$2 = (function (g,ntr){
var ntr__$1 = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,ntr);
var ptr = dynomics.space.graph.pairs.call(null,ntr__$1);
var paths = cljs.core.sort_by.call(null,cljs.core.count,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,loom.alg.bf_path,new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(g)),ptr));
return cljs.core.reduce.call(null,((function (ntr__$1,ptr,paths){
return (function (p__288565,path){
var map__288566 = p__288565;
var map__288566__$1 = ((((!((map__288566 == null)))?((((map__288566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__288566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__288566):map__288566);
var e = cljs.core.get.call(null,map__288566__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var n = cljs.core.get.call(null,map__288566__$1,new cljs.core.Keyword(null,"n","n",562130025));
cljs.core.println.call(null,path,e,n,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),cljs.core.apply.call(null,cljs.core.disj,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)),new cljs.core.Keyword(null,"e","e",1381269198),((!(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)))))?cljs.core.apply.call(null,cljs.core.disj,e,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.reverse),cljs.core.partition.call(null,(2),(1),path))):e)], null);
});})(ntr__$1,ptr,paths))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"n","n",562130025),ntr__$1], null),paths);
});

dynomics.space.graph.cycles.cljs$lang$maxFixedArity = 2;
dynomics.space.graph.make_regions = (function dynomics$space$graph$make_regions(p__288605){
var map__288610 = p__288605;
var map__288610__$1 = ((((!((map__288610 == null)))?((((map__288610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__288610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__288610):map__288610);
var state = map__288610__$1;
var map__288611 = cljs.core.get.call(null,map__288610__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__288611__$1 = ((((!((map__288611 == null)))?((((map__288611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__288611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__288611):map__288611);
var space = map__288611__$1;
var edges = cljs.core.get.call(null,map__288611__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
cljs.core.println.call(null,"cycles ",dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space)));

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"regions","regions",-1023815958)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,dynomics.space.graph.as_connections.call(null,dynomics.space.graph.as_edges.call(null,dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space))),edges))], null));
});
