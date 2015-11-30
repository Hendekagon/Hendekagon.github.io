// Compiled by ClojureScript 1.7.170 {}
goog.provide('dynomics.space.graph');
goog.require('cljs.core');
goog.require('loom.alg');
goog.require('loom.graph');
dynomics.space.graph.__ = (function dynomics$space$graph$__(p__873118){
var vec__873120 = p__873118;
var a = cljs.core.nth.call(null,vec__873120,(0),null);
var b = cljs.core.nth.call(null,vec__873120,(1),null);
if((a < b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
}
});
dynomics.space.graph.simplify_edges = (function dynomics$space$graph$simplify_edges(edges){
return cljs.core.map.call(null,(function (p__873125){
var vec__873126 = p__873125;
var vec__873127 = cljs.core.nth.call(null,vec__873126,(0),null);
var _ = cljs.core.nth.call(null,vec__873127,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__873127,(1),null);
var nid1 = cljs.core.nth.call(null,vec__873127,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__873127,(3),null);
var cid1 = cljs.core.nth.call(null,vec__873127,(4),null);
var vec__873128 = cljs.core.nth.call(null,vec__873126,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__873128,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__873128,(1),null);
var nid2 = cljs.core.nth.call(null,vec__873128,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__873128,(3),null);
var cid2 = cljs.core.nth.call(null,vec__873128,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null);
}),edges);
});
/**
 * Returns a nested list of connections (paths to node connections)
 *   from the given edges [[node1 node2] [node3 node4]
 *   and edgez, a set of connection edges}
 */
dynomics.space.graph.as_connections = (function dynomics$space$graph$as_connections(edgez,edges){
var ebn = cljs.core.group_by.call(null,(function (p__873133){
var vec__873134 = p__873133;
var vec__873135 = cljs.core.nth.call(null,vec__873134,(0),null);
var _ = cljs.core.nth.call(null,vec__873135,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__873135,(1),null);
var nid1 = cljs.core.nth.call(null,vec__873135,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__873135,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__873135,(4),null);
var vec__873136 = cljs.core.nth.call(null,vec__873134,(1),null);
var ___$4 = cljs.core.nth.call(null,vec__873136,(0),null);
var ___$5 = cljs.core.nth.call(null,vec__873136,(1),null);
var nid2 = cljs.core.nth.call(null,vec__873136,(2),null);
var ___$6 = cljs.core.nth.call(null,vec__873136,(3),null);
var ___$7 = cljs.core.nth.call(null,vec__873136,(4),null);
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
var args873137 = [];
var len__25269__auto___873146 = arguments.length;
var i__25270__auto___873147 = (0);
while(true){
if((i__25270__auto___873147 < len__25269__auto___873146)){
args873137.push((arguments[i__25270__auto___873147]));

var G__873148 = (i__25270__auto___873147 + (1));
i__25270__auto___873147 = G__873148;
continue;
} else {
}
break;
}

var G__873139 = args873137.length;
switch (G__873139) {
case 1:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args873137.length)].join('')));

}
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1 = (function (p__873140){
var map__873141 = p__873140;
var map__873141__$1 = ((((!((map__873141 == null)))?((((map__873141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__873141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__873141):map__873141);
var nodes = cljs.core.get.call(null,map__873141__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__873141__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return dynomics.space.graph.as_matrix.call(null,nodes,edges);
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2 = (function (nodes,edges){
return cljs.core.reduce.call(null,(function (m,p__873143){
var vec__873144 = p__873143;
var vec__873145 = cljs.core.nth.call(null,vec__873144,(0),null);
var nid1 = cljs.core.nth.call(null,vec__873145,(0),null);
var nid2 = cljs.core.nth.call(null,vec__873145,(1),null);
var j = cljs.core.nth.call(null,vec__873144,(1),null);
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
var G__873150__delegate = function (x){
return cljs.core.mod.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,x),(2));
};
var G__873150 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__873151__i = 0, G__873151__a = new Array(arguments.length -  0);
while (G__873151__i < G__873151__a.length) {G__873151__a[G__873151__i] = arguments[G__873151__i + 0]; ++G__873151__i;}
  x = new cljs.core.IndexedSeq(G__873151__a,0);
} 
return G__873150__delegate.call(this,x);};
G__873150.cljs$lang$maxFixedArity = 0;
G__873150.cljs$lang$applyTo = (function (arglist__873152){
var x = cljs.core.seq(arglist__873152);
return G__873150__delegate(x);
});
G__873150.cljs$core$IFn$_invoke$arity$variadic = G__873150__delegate;
return G__873150;
})()
),m);
}
});
dynomics.space.graph.nodes_from_sum = (function dynomics$space$graph$nodes_from_sum(s){
return cljs.core.reduce.call(null,(function (r,p__873155){
var vec__873156 = p__873155;
var n = cljs.core.nth.call(null,vec__873156,(0),null);
var i = cljs.core.nth.call(null,vec__873156,(1),null);
return cljs.core.reduce.call(null,((function (vec__873156,n,i){
return (function (r__$1,j){
return cljs.core.conj.call(null,r__$1,i);
});})(vec__873156,n,i))
,r,cljs.core.range.call(null,n));
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,s,cljs.core.range.call(null)));
});
dynomics.space.graph.pairs = (function dynomics$space$graph$pairs(l){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.sort,(function (){var iter__24983__auto__ = (function dynomics$space$graph$pairs_$_iter__873163(s__873164){
return (new cljs.core.LazySeq(null,(function (){
var s__873164__$1 = s__873164;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__873164__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24979__auto__ = ((function (s__873164__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function dynomics$space$graph$pairs_$_iter__873163_$_iter__873165(s__873166){
return (new cljs.core.LazySeq(null,((function (s__873164__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__873166__$1 = s__873166;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__873166__$1);
if(temp__4425__auto____$1){
var s__873166__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__873166__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__873166__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__873168 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__873167 = (0);
while(true){
if((i__873167 < size__24982__auto__)){
var y = cljs.core._nth.call(null,c__24981__auto__,i__873167);
cljs.core.chunk_append.call(null,b__873168,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__873169 = (i__873167 + (1));
i__873167 = G__873169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__873168),dynomics$space$graph$pairs_$_iter__873163_$_iter__873165.call(null,cljs.core.chunk_rest.call(null,s__873166__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__873168),null);
}
} else {
var y = cljs.core.first.call(null,s__873166__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),dynomics$space$graph$pairs_$_iter__873163_$_iter__873165.call(null,cljs.core.rest.call(null,s__873166__$2)));
}
} else {
return null;
}
break;
}
});})(s__873164__$1,x,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__873164__$1,x,xs__4977__auto__,temp__4425__auto__))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ__EQ_,x),l)));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,dynomics$space$graph$pairs_$_iter__873163.call(null,cljs.core.rest.call(null,s__873164__$1)));
} else {
var G__873170 = cljs.core.rest.call(null,s__873164__$1);
s__873164__$1 = G__873170;
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
var args873171 = [];
var len__25269__auto___873177 = arguments.length;
var i__25270__auto___873178 = (0);
while(true){
if((i__25270__auto___873178 < len__25269__auto___873177)){
args873171.push((arguments[i__25270__auto___873178]));

var G__873179 = (i__25270__auto___873178 + (1));
i__25270__auto___873178 = G__873179;
continue;
} else {
}
break;
}

var G__873173 = args873171.length;
switch (G__873173) {
case 1:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args873171.length)].join('')));

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
return (function (p__873174,path){
var map__873175 = p__873174;
var map__873175__$1 = ((((!((map__873175 == null)))?((((map__873175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__873175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__873175):map__873175);
var e = cljs.core.get.call(null,map__873175__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var n = cljs.core.get.call(null,map__873175__$1,new cljs.core.Keyword(null,"n","n",562130025));
cljs.core.println.call(null,path,e,n,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),cljs.core.apply.call(null,cljs.core.disj,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)),new cljs.core.Keyword(null,"e","e",1381269198),((!(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)))))?cljs.core.apply.call(null,cljs.core.disj,e,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.reverse),cljs.core.partition.call(null,(2),(1),path))):e)], null);
});})(ntr__$1,ptr,paths))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"n","n",562130025),ntr__$1], null),paths);
});

dynomics.space.graph.cycles.cljs$lang$maxFixedArity = 2;
dynomics.space.graph.make_regions = (function dynomics$space$graph$make_regions(p__873181){
var map__873186 = p__873181;
var map__873186__$1 = ((((!((map__873186 == null)))?((((map__873186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__873186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__873186):map__873186);
var state = map__873186__$1;
var map__873187 = cljs.core.get.call(null,map__873186__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__873187__$1 = ((((!((map__873187 == null)))?((((map__873187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__873187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__873187):map__873187);
var space = map__873187__$1;
var edges = cljs.core.get.call(null,map__873187__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
cljs.core.println.call(null,"cycles ",dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space)));

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"regions","regions",-1023815958)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,dynomics.space.graph.as_connections.call(null,dynomics.space.graph.as_edges.call(null,dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space))),edges))], null));
});

//# sourceMappingURL=graph.js.map