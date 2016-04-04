// Compiled by ClojureScript 1.8.40 {}
goog.provide('dynomics.space.graph');
goog.require('cljs.core');
goog.require('loom.alg');
goog.require('loom.graph');
dynomics.space.graph.__ = (function dynomics$space$graph$__(p__290063){
var vec__290067 = p__290063;
var a = cljs.core.nth.call(null,vec__290067,(0),null);
var b = cljs.core.nth.call(null,vec__290067,(1),null);
if((a < b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
}
});
dynomics.space.graph.simplify_edges = (function dynomics$space$graph$simplify_edges(edges){
return cljs.core.map.call(null,(function (p__290080){
var vec__290081 = p__290080;
var vec__290082 = cljs.core.nth.call(null,vec__290081,(0),null);
var _ = cljs.core.nth.call(null,vec__290082,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__290082,(1),null);
var nid1 = cljs.core.nth.call(null,vec__290082,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__290082,(3),null);
var cid1 = cljs.core.nth.call(null,vec__290082,(4),null);
var vec__290083 = cljs.core.nth.call(null,vec__290081,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__290083,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__290083,(1),null);
var nid2 = cljs.core.nth.call(null,vec__290083,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__290083,(3),null);
var cid2 = cljs.core.nth.call(null,vec__290083,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null);
}),edges);
});
/**
 * Returns a nested list of connections (paths to node connections)
 *   from the given edges [[node1 node2] [node3 node4]
 *   and edgez, a set of connection edges}
 */
dynomics.space.graph.as_connections = (function dynomics$space$graph$as_connections(edgez,edges){
var ebn = cljs.core.group_by.call(null,(function (p__290097){
var vec__290098 = p__290097;
var vec__290099 = cljs.core.nth.call(null,vec__290098,(0),null);
var _ = cljs.core.nth.call(null,vec__290099,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__290099,(1),null);
var nid1 = cljs.core.nth.call(null,vec__290099,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__290099,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__290099,(4),null);
var vec__290100 = cljs.core.nth.call(null,vec__290098,(1),null);
var ___$4 = cljs.core.nth.call(null,vec__290100,(0),null);
var ___$5 = cljs.core.nth.call(null,vec__290100,(1),null);
var nid2 = cljs.core.nth.call(null,vec__290100,(2),null);
var ___$6 = cljs.core.nth.call(null,vec__290100,(3),null);
var ___$7 = cljs.core.nth.call(null,vec__290100,(4),null);
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
var args290109 = [];
var len__36461__auto___290119 = arguments.length;
var i__36462__auto___290120 = (0);
while(true){
if((i__36462__auto___290120 < len__36461__auto___290119)){
args290109.push((arguments[i__36462__auto___290120]));

var G__290121 = (i__36462__auto___290120 + (1));
i__36462__auto___290120 = G__290121;
continue;
} else {
}
break;
}

var G__290111 = args290109.length;
switch (G__290111) {
case 1:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args290109.length)].join('')));

}
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1 = (function (p__290112){
var map__290113 = p__290112;
var map__290113__$1 = ((((!((map__290113 == null)))?((((map__290113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290113):map__290113);
var nodes = cljs.core.get.call(null,map__290113__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__290113__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return dynomics.space.graph.as_matrix.call(null,nodes,edges);
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2 = (function (nodes,edges){
return cljs.core.reduce.call(null,(function (m,p__290116){
var vec__290117 = p__290116;
var vec__290118 = cljs.core.nth.call(null,vec__290117,(0),null);
var nid1 = cljs.core.nth.call(null,vec__290118,(0),null);
var nid2 = cljs.core.nth.call(null,vec__290118,(1),null);
var j = cljs.core.nth.call(null,vec__290117,(1),null);
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
var G__290130__delegate = function (x){
return cljs.core.mod.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,x),(2));
};
var G__290130 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__290131__i = 0, G__290131__a = new Array(arguments.length -  0);
while (G__290131__i < G__290131__a.length) {G__290131__a[G__290131__i] = arguments[G__290131__i + 0]; ++G__290131__i;}
  x = new cljs.core.IndexedSeq(G__290131__a,0);
} 
return G__290130__delegate.call(this,x);};
G__290130.cljs$lang$maxFixedArity = 0;
G__290130.cljs$lang$applyTo = (function (arglist__290132){
var x = cljs.core.seq(arglist__290132);
return G__290130__delegate(x);
});
G__290130.cljs$core$IFn$_invoke$arity$variadic = G__290130__delegate;
return G__290130;
})()
),m);
}
});
dynomics.space.graph.nodes_from_sum = (function dynomics$space$graph$nodes_from_sum(s){
return cljs.core.reduce.call(null,(function (r,p__290136){
var vec__290137 = p__290136;
var n = cljs.core.nth.call(null,vec__290137,(0),null);
var i = cljs.core.nth.call(null,vec__290137,(1),null);
return cljs.core.reduce.call(null,((function (vec__290137,n,i){
return (function (r__$1,j){
return cljs.core.conj.call(null,r__$1,i);
});})(vec__290137,n,i))
,r,cljs.core.range.call(null,n));
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,s,cljs.core.range.call(null)));
});
dynomics.space.graph.pairs = (function dynomics$space$graph$pairs(l){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.sort,(function (){var iter__36172__auto__ = (function dynomics$space$graph$pairs_$_iter__290201(s__290202){
return (new cljs.core.LazySeq(null,(function (){
var s__290202__$1 = s__290202;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__290202__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36168__auto__ = ((function (s__290202__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function dynomics$space$graph$pairs_$_iter__290201_$_iter__290203(s__290204){
return (new cljs.core.LazySeq(null,((function (s__290202__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__290204__$1 = s__290204;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__290204__$1);
if(temp__4657__auto____$1){
var s__290204__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__290204__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__290204__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__290206 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__290205 = (0);
while(true){
if((i__290205 < size__36171__auto__)){
var y = cljs.core._nth.call(null,c__36170__auto__,i__290205);
cljs.core.chunk_append.call(null,b__290206,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__290229 = (i__290205 + (1));
i__290205 = G__290229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__290206),dynomics$space$graph$pairs_$_iter__290201_$_iter__290203.call(null,cljs.core.chunk_rest.call(null,s__290204__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__290206),null);
}
} else {
var y = cljs.core.first.call(null,s__290204__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),dynomics$space$graph$pairs_$_iter__290201_$_iter__290203.call(null,cljs.core.rest.call(null,s__290204__$2)));
}
} else {
return null;
}
break;
}
});})(s__290202__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__290202__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ__EQ_,x),l)));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,dynomics$space$graph$pairs_$_iter__290201.call(null,cljs.core.rest.call(null,s__290202__$1)));
} else {
var G__290232 = cljs.core.rest.call(null,s__290202__$1);
s__290202__$1 = G__290232;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36172__auto__.call(null,l);
})()));
});
dynomics.space.graph.cycles = (function dynomics$space$graph$cycles(var_args){
var args290235 = [];
var len__36461__auto___290246 = arguments.length;
var i__36462__auto___290247 = (0);
while(true){
if((i__36462__auto___290247 < len__36461__auto___290246)){
args290235.push((arguments[i__36462__auto___290247]));

var G__290249 = (i__36462__auto___290247 + (1));
i__36462__auto___290247 = G__290249;
continue;
} else {
}
break;
}

var G__290238 = args290235.length;
switch (G__290238) {
case 1:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args290235.length)].join('')));

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
return (function (p__290241,path){
var map__290242 = p__290241;
var map__290242__$1 = ((((!((map__290242 == null)))?((((map__290242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290242):map__290242);
var e = cljs.core.get.call(null,map__290242__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var n = cljs.core.get.call(null,map__290242__$1,new cljs.core.Keyword(null,"n","n",562130025));
cljs.core.println.call(null,path,e,n,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),cljs.core.apply.call(null,cljs.core.disj,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)),new cljs.core.Keyword(null,"e","e",1381269198),((!(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)))))?cljs.core.apply.call(null,cljs.core.disj,e,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.reverse),cljs.core.partition.call(null,(2),(1),path))):e)], null);
});})(ntr__$1,ptr,paths))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"n","n",562130025),ntr__$1], null),paths);
});

dynomics.space.graph.cycles.cljs$lang$maxFixedArity = 2;
dynomics.space.graph.make_regions = (function dynomics$space$graph$make_regions(p__290260){
var map__290267 = p__290260;
var map__290267__$1 = ((((!((map__290267 == null)))?((((map__290267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290267):map__290267);
var state = map__290267__$1;
var map__290268 = cljs.core.get.call(null,map__290267__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__290268__$1 = ((((!((map__290268 == null)))?((((map__290268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290268):map__290268);
var space = map__290268__$1;
var edges = cljs.core.get.call(null,map__290268__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
cljs.core.println.call(null,"cycles ",dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space)));

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"regions","regions",-1023815958)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,dynomics.space.graph.as_connections.call(null,dynomics.space.graph.as_edges.call(null,dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space))),edges))], null));
});
