// Compiled by ClojureScript 1.7.170 {}
goog.provide('dynomics.space.graph');
goog.require('cljs.core');
goog.require('loom.alg');
goog.require('loom.graph');
/**
 * Returns a nested list of connections (paths to node connections)
 *   from the given edges [[node1 node2] [node3 node4]
 *   and edgez, a set of connection edges}
 */
dynomics.space.graph.as_connections = (function dynomics$space$graph$as_connections(edges,edgez){
var ebn = cljs.core.group_by.call(null,(function (p__382120){
var vec__382121 = p__382120;
var vec__382122 = cljs.core.nth.call(null,vec__382121,(0),null);
var _ = cljs.core.nth.call(null,vec__382122,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__382122,(1),null);
var nid1 = cljs.core.nth.call(null,vec__382122,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__382122,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__382122,(4),null);
var vec__382123 = cljs.core.nth.call(null,vec__382121,(1),null);
var ___$4 = cljs.core.nth.call(null,vec__382123,(0),null);
var ___$5 = cljs.core.nth.call(null,vec__382123,(1),null);
var nid2 = cljs.core.nth.call(null,vec__382123,(2),null);
var ___$6 = cljs.core.nth.call(null,vec__382123,(3),null);
var ___$7 = cljs.core.nth.call(null,vec__382123,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null);
}),edgez);
return cljs.core.map.call(null,ebn,edges);
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
var args382124 = [];
var len__25219__auto___382133 = arguments.length;
var i__25220__auto___382134 = (0);
while(true){
if((i__25220__auto___382134 < len__25219__auto___382133)){
args382124.push((arguments[i__25220__auto___382134]));

var G__382135 = (i__25220__auto___382134 + (1));
i__25220__auto___382134 = G__382135;
continue;
} else {
}
break;
}

var G__382126 = args382124.length;
switch (G__382126) {
case 1:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args382124.length)].join('')));

}
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1 = (function (p__382127){
var map__382128 = p__382127;
var map__382128__$1 = ((((!((map__382128 == null)))?((((map__382128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__382128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__382128):map__382128);
var nodes = cljs.core.get.call(null,map__382128__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__382128__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return dynomics.space.graph.as_matrix.call(null,nodes,edges);
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2 = (function (nodes,edges){
return cljs.core.reduce.call(null,(function (m,p__382130){
var vec__382131 = p__382130;
var vec__382132 = cljs.core.nth.call(null,vec__382131,(0),null);
var nid1 = cljs.core.nth.call(null,vec__382132,(0),null);
var nid2 = cljs.core.nth.call(null,vec__382132,(1),null);
var j = cljs.core.nth.call(null,vec__382131,(1),null);
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
var G__382137__delegate = function (x){
return cljs.core.mod.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,x),(2));
};
var G__382137 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__382138__i = 0, G__382138__a = new Array(arguments.length -  0);
while (G__382138__i < G__382138__a.length) {G__382138__a[G__382138__i] = arguments[G__382138__i + 0]; ++G__382138__i;}
  x = new cljs.core.IndexedSeq(G__382138__a,0);
} 
return G__382137__delegate.call(this,x);};
G__382137.cljs$lang$maxFixedArity = 0;
G__382137.cljs$lang$applyTo = (function (arglist__382139){
var x = cljs.core.seq(arglist__382139);
return G__382137__delegate(x);
});
G__382137.cljs$core$IFn$_invoke$arity$variadic = G__382137__delegate;
return G__382137;
})()
),m);
}
});
dynomics.space.graph.nodes_from_sum = (function dynomics$space$graph$nodes_from_sum(s){
return cljs.core.reduce.call(null,(function (r,p__382142){
var vec__382143 = p__382142;
var n = cljs.core.nth.call(null,vec__382143,(0),null);
var i = cljs.core.nth.call(null,vec__382143,(1),null);
return cljs.core.reduce.call(null,((function (vec__382143,n,i){
return (function (r__$1,j){
return cljs.core.conj.call(null,r__$1,i);
});})(vec__382143,n,i))
,r,cljs.core.range.call(null,n));
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,s,cljs.core.range.call(null)));
});
dynomics.space.graph.pairs = (function dynomics$space$graph$pairs(l){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.sort,(function (){var iter__24933__auto__ = (function dynomics$space$graph$pairs_$_iter__382150(s__382151){
return (new cljs.core.LazySeq(null,(function (){
var s__382151__$1 = s__382151;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__382151__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24929__auto__ = ((function (s__382151__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function dynomics$space$graph$pairs_$_iter__382150_$_iter__382152(s__382153){
return (new cljs.core.LazySeq(null,((function (s__382151__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__382153__$1 = s__382153;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__382153__$1);
if(temp__4425__auto____$1){
var s__382153__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__382153__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__382153__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__382155 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__382154 = (0);
while(true){
if((i__382154 < size__24932__auto__)){
var y = cljs.core._nth.call(null,c__24931__auto__,i__382154);
cljs.core.chunk_append.call(null,b__382155,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__382156 = (i__382154 + (1));
i__382154 = G__382156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__382155),dynomics$space$graph$pairs_$_iter__382150_$_iter__382152.call(null,cljs.core.chunk_rest.call(null,s__382153__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__382155),null);
}
} else {
var y = cljs.core.first.call(null,s__382153__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),dynomics$space$graph$pairs_$_iter__382150_$_iter__382152.call(null,cljs.core.rest.call(null,s__382153__$2)));
}
} else {
return null;
}
break;
}
});})(s__382151__$1,x,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__382151__$1,x,xs__4977__auto__,temp__4425__auto__))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ__EQ_,x),l)));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,dynomics$space$graph$pairs_$_iter__382150.call(null,cljs.core.rest.call(null,s__382151__$1)));
} else {
var G__382157 = cljs.core.rest.call(null,s__382151__$1);
s__382151__$1 = G__382157;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24933__auto__.call(null,l);
})()));
});
dynomics.space.graph.cycles = (function dynomics$space$graph$cycles(var_args){
var args382158 = [];
var len__25219__auto___382164 = arguments.length;
var i__25220__auto___382165 = (0);
while(true){
if((i__25220__auto___382165 < len__25219__auto___382164)){
args382158.push((arguments[i__25220__auto___382165]));

var G__382166 = (i__25220__auto___382165 + (1));
i__25220__auto___382165 = G__382166;
continue;
} else {
}
break;
}

var G__382160 = args382158.length;
switch (G__382160) {
case 1:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args382158.length)].join('')));

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
return (function (p__382161,path){
var map__382162 = p__382161;
var map__382162__$1 = ((((!((map__382162 == null)))?((((map__382162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__382162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__382162):map__382162);
var e = cljs.core.get.call(null,map__382162__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var n = cljs.core.get.call(null,map__382162__$1,new cljs.core.Keyword(null,"n","n",562130025));
cljs.core.println.call(null,path,e,n,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),cljs.core.apply.call(null,cljs.core.disj,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)),new cljs.core.Keyword(null,"e","e",1381269198),((!(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)))))?cljs.core.apply.call(null,cljs.core.disj,e,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.reverse),cljs.core.partition.call(null,(2),(1),path))):e)], null);
});})(ntr__$1,ptr,paths))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"n","n",562130025),ntr__$1], null),paths);
});

dynomics.space.graph.cycles.cljs$lang$maxFixedArity = 2;
dynomics.space.graph.make_regions = (function dynomics$space$graph$make_regions(p__382168){
var map__382173 = p__382168;
var map__382173__$1 = ((((!((map__382173 == null)))?((((map__382173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__382173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__382173):map__382173);
var state = map__382173__$1;
var map__382174 = cljs.core.get.call(null,map__382173__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__382174__$1 = ((((!((map__382174 == null)))?((((map__382174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__382174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__382174):map__382174);
var space = map__382174__$1;
var edges = cljs.core.get.call(null,map__382174__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
cljs.core.println.call(null,"cycles ",dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space)));

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"regions","regions",-1023815958)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,dynomics.space.graph.as_connections.call(null,dynomics.space.graph.as_edges.call(null,dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space))),edges))], null));
});

//# sourceMappingURL=graph.js.map