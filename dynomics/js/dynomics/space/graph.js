// Compiled by ClojureScript 1.7.170 {}
goog.provide('dynomics.space.graph');
goog.require('cljs.core');
goog.require('loom.alg');
goog.require('loom.graph');
dynomics.space.graph.__ = (function dynomics$space$graph$__(p__650535){
var vec__650537 = p__650535;
var a = cljs.core.nth.call(null,vec__650537,(0),null);
var b = cljs.core.nth.call(null,vec__650537,(1),null);
if((a < b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
}
});
dynomics.space.graph.simplify_edges = (function dynomics$space$graph$simplify_edges(edges){
return cljs.core.map.call(null,(function (p__650542){
var vec__650543 = p__650542;
var vec__650544 = cljs.core.nth.call(null,vec__650543,(0),null);
var _ = cljs.core.nth.call(null,vec__650544,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__650544,(1),null);
var nid1 = cljs.core.nth.call(null,vec__650544,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__650544,(3),null);
var cid1 = cljs.core.nth.call(null,vec__650544,(4),null);
var vec__650545 = cljs.core.nth.call(null,vec__650543,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__650545,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__650545,(1),null);
var nid2 = cljs.core.nth.call(null,vec__650545,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__650545,(3),null);
var cid2 = cljs.core.nth.call(null,vec__650545,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null);
}),edges);
});
/**
 * Returns a nested list of connections (paths to node connections)
 *   from the given edges [[node1 node2] [node3 node4]
 *   and edgez, a set of connection edges}
 */
dynomics.space.graph.as_connections = (function dynomics$space$graph$as_connections(edgez,edges){
var ebn = cljs.core.group_by.call(null,(function (p__650550){
var vec__650551 = p__650550;
var vec__650552 = cljs.core.nth.call(null,vec__650551,(0),null);
var _ = cljs.core.nth.call(null,vec__650552,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__650552,(1),null);
var nid1 = cljs.core.nth.call(null,vec__650552,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__650552,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__650552,(4),null);
var vec__650553 = cljs.core.nth.call(null,vec__650551,(1),null);
var ___$4 = cljs.core.nth.call(null,vec__650553,(0),null);
var ___$5 = cljs.core.nth.call(null,vec__650553,(1),null);
var nid2 = cljs.core.nth.call(null,vec__650553,(2),null);
var ___$6 = cljs.core.nth.call(null,vec__650553,(3),null);
var ___$7 = cljs.core.nth.call(null,vec__650553,(4),null);
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
var args650554 = [];
var len__25269__auto___650563 = arguments.length;
var i__25270__auto___650564 = (0);
while(true){
if((i__25270__auto___650564 < len__25269__auto___650563)){
args650554.push((arguments[i__25270__auto___650564]));

var G__650565 = (i__25270__auto___650564 + (1));
i__25270__auto___650564 = G__650565;
continue;
} else {
}
break;
}

var G__650556 = args650554.length;
switch (G__650556) {
case 1:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args650554.length)].join('')));

}
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1 = (function (p__650557){
var map__650558 = p__650557;
var map__650558__$1 = ((((!((map__650558 == null)))?((((map__650558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650558):map__650558);
var nodes = cljs.core.get.call(null,map__650558__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__650558__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return dynomics.space.graph.as_matrix.call(null,nodes,edges);
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2 = (function (nodes,edges){
return cljs.core.reduce.call(null,(function (m,p__650560){
var vec__650561 = p__650560;
var vec__650562 = cljs.core.nth.call(null,vec__650561,(0),null);
var nid1 = cljs.core.nth.call(null,vec__650562,(0),null);
var nid2 = cljs.core.nth.call(null,vec__650562,(1),null);
var j = cljs.core.nth.call(null,vec__650561,(1),null);
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
var G__650567__delegate = function (x){
return cljs.core.mod.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,x),(2));
};
var G__650567 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__650568__i = 0, G__650568__a = new Array(arguments.length -  0);
while (G__650568__i < G__650568__a.length) {G__650568__a[G__650568__i] = arguments[G__650568__i + 0]; ++G__650568__i;}
  x = new cljs.core.IndexedSeq(G__650568__a,0);
} 
return G__650567__delegate.call(this,x);};
G__650567.cljs$lang$maxFixedArity = 0;
G__650567.cljs$lang$applyTo = (function (arglist__650569){
var x = cljs.core.seq(arglist__650569);
return G__650567__delegate(x);
});
G__650567.cljs$core$IFn$_invoke$arity$variadic = G__650567__delegate;
return G__650567;
})()
),m);
}
});
dynomics.space.graph.nodes_from_sum = (function dynomics$space$graph$nodes_from_sum(s){
return cljs.core.reduce.call(null,(function (r,p__650572){
var vec__650573 = p__650572;
var n = cljs.core.nth.call(null,vec__650573,(0),null);
var i = cljs.core.nth.call(null,vec__650573,(1),null);
return cljs.core.reduce.call(null,((function (vec__650573,n,i){
return (function (r__$1,j){
return cljs.core.conj.call(null,r__$1,i);
});})(vec__650573,n,i))
,r,cljs.core.range.call(null,n));
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,s,cljs.core.range.call(null)));
});
dynomics.space.graph.pairs = (function dynomics$space$graph$pairs(l){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.sort,(function (){var iter__24983__auto__ = (function dynomics$space$graph$pairs_$_iter__650580(s__650581){
return (new cljs.core.LazySeq(null,(function (){
var s__650581__$1 = s__650581;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__650581__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24979__auto__ = ((function (s__650581__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function dynomics$space$graph$pairs_$_iter__650580_$_iter__650582(s__650583){
return (new cljs.core.LazySeq(null,((function (s__650581__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__650583__$1 = s__650583;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__650583__$1);
if(temp__4425__auto____$1){
var s__650583__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__650583__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__650583__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__650585 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__650584 = (0);
while(true){
if((i__650584 < size__24982__auto__)){
var y = cljs.core._nth.call(null,c__24981__auto__,i__650584);
cljs.core.chunk_append.call(null,b__650585,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__650586 = (i__650584 + (1));
i__650584 = G__650586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650585),dynomics$space$graph$pairs_$_iter__650580_$_iter__650582.call(null,cljs.core.chunk_rest.call(null,s__650583__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650585),null);
}
} else {
var y = cljs.core.first.call(null,s__650583__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),dynomics$space$graph$pairs_$_iter__650580_$_iter__650582.call(null,cljs.core.rest.call(null,s__650583__$2)));
}
} else {
return null;
}
break;
}
});})(s__650581__$1,x,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__650581__$1,x,xs__4977__auto__,temp__4425__auto__))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ__EQ_,x),l)));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,dynomics$space$graph$pairs_$_iter__650580.call(null,cljs.core.rest.call(null,s__650581__$1)));
} else {
var G__650587 = cljs.core.rest.call(null,s__650581__$1);
s__650581__$1 = G__650587;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24983__auto__.call(null,l);
})()));
});
dynomics.space.graph.cycles = (function dynomics$space$graph$cycles(var_args){
var args650588 = [];
var len__25269__auto___650594 = arguments.length;
var i__25270__auto___650595 = (0);
while(true){
if((i__25270__auto___650595 < len__25269__auto___650594)){
args650588.push((arguments[i__25270__auto___650595]));

var G__650596 = (i__25270__auto___650595 + (1));
i__25270__auto___650595 = G__650596;
continue;
} else {
}
break;
}

var G__650590 = args650588.length;
switch (G__650590) {
case 1:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args650588.length)].join('')));

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
return (function (p__650591,path){
var map__650592 = p__650591;
var map__650592__$1 = ((((!((map__650592 == null)))?((((map__650592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650592):map__650592);
var e = cljs.core.get.call(null,map__650592__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var n = cljs.core.get.call(null,map__650592__$1,new cljs.core.Keyword(null,"n","n",562130025));
cljs.core.println.call(null,path,e,n,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),cljs.core.apply.call(null,cljs.core.disj,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)),new cljs.core.Keyword(null,"e","e",1381269198),((!(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)))))?cljs.core.apply.call(null,cljs.core.disj,e,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.reverse),cljs.core.partition.call(null,(2),(1),path))):e)], null);
});})(ntr__$1,ptr,paths))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"n","n",562130025),ntr__$1], null),paths);
});

dynomics.space.graph.cycles.cljs$lang$maxFixedArity = 2;
dynomics.space.graph.make_regions = (function dynomics$space$graph$make_regions(p__650598){
var map__650603 = p__650598;
var map__650603__$1 = ((((!((map__650603 == null)))?((((map__650603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650603):map__650603);
var state = map__650603__$1;
var map__650604 = cljs.core.get.call(null,map__650603__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__650604__$1 = ((((!((map__650604 == null)))?((((map__650604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650604):map__650604);
var space = map__650604__$1;
var edges = cljs.core.get.call(null,map__650604__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
cljs.core.println.call(null,"cycles ",dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space)));

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"regions","regions",-1023815958)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,dynomics.space.graph.as_connections.call(null,dynomics.space.graph.as_edges.call(null,dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space))),edges))], null));
});

//# sourceMappingURL=graph.js.map