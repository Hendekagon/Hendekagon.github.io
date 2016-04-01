// Compiled by ClojureScript 1.8.40 {}
goog.provide('dynomics.space.graph');
goog.require('cljs.core');
goog.require('loom.alg');
goog.require('loom.graph');
dynomics.space.graph.__ = (function dynomics$space$graph$__(p__90834){
var vec__90836 = p__90834;
var a = cljs.core.nth.call(null,vec__90836,(0),null);
var b = cljs.core.nth.call(null,vec__90836,(1),null);
if((a < b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
}
});
dynomics.space.graph.simplify_edges = (function dynomics$space$graph$simplify_edges(edges){
return cljs.core.map.call(null,(function (p__90842){
var vec__90843 = p__90842;
var vec__90844 = cljs.core.nth.call(null,vec__90843,(0),null);
var _ = cljs.core.nth.call(null,vec__90844,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__90844,(1),null);
var nid1 = cljs.core.nth.call(null,vec__90844,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__90844,(3),null);
var cid1 = cljs.core.nth.call(null,vec__90844,(4),null);
var vec__90845 = cljs.core.nth.call(null,vec__90843,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__90845,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__90845,(1),null);
var nid2 = cljs.core.nth.call(null,vec__90845,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__90845,(3),null);
var cid2 = cljs.core.nth.call(null,vec__90845,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null);
}),edges);
});
/**
 * Returns a nested list of connections (paths to node connections)
 *   from the given edges [[node1 node2] [node3 node4]
 *   and edgez, a set of connection edges}
 */
dynomics.space.graph.as_connections = (function dynomics$space$graph$as_connections(edgez,edges){
var ebn = cljs.core.group_by.call(null,(function (p__90863){
var vec__90865 = p__90863;
var vec__90866 = cljs.core.nth.call(null,vec__90865,(0),null);
var _ = cljs.core.nth.call(null,vec__90866,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__90866,(1),null);
var nid1 = cljs.core.nth.call(null,vec__90866,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__90866,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__90866,(4),null);
var vec__90867 = cljs.core.nth.call(null,vec__90865,(1),null);
var ___$4 = cljs.core.nth.call(null,vec__90867,(0),null);
var ___$5 = cljs.core.nth.call(null,vec__90867,(1),null);
var nid2 = cljs.core.nth.call(null,vec__90867,(2),null);
var ___$6 = cljs.core.nth.call(null,vec__90867,(3),null);
var ___$7 = cljs.core.nth.call(null,vec__90867,(4),null);
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
var args90922 = [];
var len__36491__auto___90942 = arguments.length;
var i__36492__auto___90943 = (0);
while(true){
if((i__36492__auto___90943 < len__36491__auto___90942)){
args90922.push((arguments[i__36492__auto___90943]));

var G__90944 = (i__36492__auto___90943 + (1));
i__36492__auto___90943 = G__90944;
continue;
} else {
}
break;
}

var G__90930 = args90922.length;
switch (G__90930) {
case 1:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90922.length)].join('')));

}
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1 = (function (p__90931){
var map__90932 = p__90931;
var map__90932__$1 = ((((!((map__90932 == null)))?((((map__90932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90932):map__90932);
var nodes = cljs.core.get.call(null,map__90932__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__90932__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return dynomics.space.graph.as_matrix.call(null,nodes,edges);
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2 = (function (nodes,edges){
return cljs.core.reduce.call(null,(function (m,p__90936){
var vec__90937 = p__90936;
var vec__90938 = cljs.core.nth.call(null,vec__90937,(0),null);
var nid1 = cljs.core.nth.call(null,vec__90938,(0),null);
var nid2 = cljs.core.nth.call(null,vec__90938,(1),null);
var j = cljs.core.nth.call(null,vec__90937,(1),null);
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
var G__90951__delegate = function (x){
return cljs.core.mod.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,x),(2));
};
var G__90951 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__90952__i = 0, G__90952__a = new Array(arguments.length -  0);
while (G__90952__i < G__90952__a.length) {G__90952__a[G__90952__i] = arguments[G__90952__i + 0]; ++G__90952__i;}
  x = new cljs.core.IndexedSeq(G__90952__a,0);
} 
return G__90951__delegate.call(this,x);};
G__90951.cljs$lang$maxFixedArity = 0;
G__90951.cljs$lang$applyTo = (function (arglist__90954){
var x = cljs.core.seq(arglist__90954);
return G__90951__delegate(x);
});
G__90951.cljs$core$IFn$_invoke$arity$variadic = G__90951__delegate;
return G__90951;
})()
),m);
}
});
dynomics.space.graph.nodes_from_sum = (function dynomics$space$graph$nodes_from_sum(s){
return cljs.core.reduce.call(null,(function (r,p__90958){
var vec__90959 = p__90958;
var n = cljs.core.nth.call(null,vec__90959,(0),null);
var i = cljs.core.nth.call(null,vec__90959,(1),null);
return cljs.core.reduce.call(null,((function (vec__90959,n,i){
return (function (r__$1,j){
return cljs.core.conj.call(null,r__$1,i);
});})(vec__90959,n,i))
,r,cljs.core.range.call(null,n));
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,s,cljs.core.range.call(null)));
});
dynomics.space.graph.pairs = (function dynomics$space$graph$pairs(l){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.sort,(function (){var iter__36202__auto__ = (function dynomics$space$graph$pairs_$_iter__90968(s__90969){
return (new cljs.core.LazySeq(null,(function (){
var s__90969__$1 = s__90969;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__90969__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36198__auto__ = ((function (s__90969__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function dynomics$space$graph$pairs_$_iter__90968_$_iter__90970(s__90971){
return (new cljs.core.LazySeq(null,((function (s__90969__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__90971__$1 = s__90971;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__90971__$1);
if(temp__4657__auto____$1){
var s__90971__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__90971__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__90971__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__90973 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__90972 = (0);
while(true){
if((i__90972 < size__36201__auto__)){
var y = cljs.core._nth.call(null,c__36200__auto__,i__90972);
cljs.core.chunk_append.call(null,b__90973,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__90974 = (i__90972 + (1));
i__90972 = G__90974;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__90973),dynomics$space$graph$pairs_$_iter__90968_$_iter__90970.call(null,cljs.core.chunk_rest.call(null,s__90971__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__90973),null);
}
} else {
var y = cljs.core.first.call(null,s__90971__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),dynomics$space$graph$pairs_$_iter__90968_$_iter__90970.call(null,cljs.core.rest.call(null,s__90971__$2)));
}
} else {
return null;
}
break;
}
});})(s__90969__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__90969__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ__EQ_,x),l)));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,dynomics$space$graph$pairs_$_iter__90968.call(null,cljs.core.rest.call(null,s__90969__$1)));
} else {
var G__90975 = cljs.core.rest.call(null,s__90969__$1);
s__90969__$1 = G__90975;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36202__auto__.call(null,l);
})()));
});
dynomics.space.graph.cycles = (function dynomics$space$graph$cycles(var_args){
var args90976 = [];
var len__36491__auto___90983 = arguments.length;
var i__36492__auto___90984 = (0);
while(true){
if((i__36492__auto___90984 < len__36491__auto___90983)){
args90976.push((arguments[i__36492__auto___90984]));

var G__90985 = (i__36492__auto___90984 + (1));
i__36492__auto___90984 = G__90985;
continue;
} else {
}
break;
}

var G__90978 = args90976.length;
switch (G__90978) {
case 1:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90976.length)].join('')));

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
return (function (p__90980,path){
var map__90981 = p__90980;
var map__90981__$1 = ((((!((map__90981 == null)))?((((map__90981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90981):map__90981);
var e = cljs.core.get.call(null,map__90981__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var n = cljs.core.get.call(null,map__90981__$1,new cljs.core.Keyword(null,"n","n",562130025));
cljs.core.println.call(null,path,e,n,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),cljs.core.apply.call(null,cljs.core.disj,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)),new cljs.core.Keyword(null,"e","e",1381269198),((!(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)))))?cljs.core.apply.call(null,cljs.core.disj,e,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.reverse),cljs.core.partition.call(null,(2),(1),path))):e)], null);
});})(ntr__$1,ptr,paths))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"n","n",562130025),ntr__$1], null),paths);
});

dynomics.space.graph.cycles.cljs$lang$maxFixedArity = 2;
dynomics.space.graph.make_regions = (function dynomics$space$graph$make_regions(p__90991){
var map__90997 = p__90991;
var map__90997__$1 = ((((!((map__90997 == null)))?((((map__90997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90997):map__90997);
var state = map__90997__$1;
var map__90999 = cljs.core.get.call(null,map__90997__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__90999__$1 = ((((!((map__90999 == null)))?((((map__90999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__90999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90999):map__90999);
var space = map__90999__$1;
var edges = cljs.core.get.call(null,map__90999__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
cljs.core.println.call(null,"cycles ",dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space)));

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"regions","regions",-1023815958)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,dynomics.space.graph.as_connections.call(null,dynomics.space.graph.as_edges.call(null,dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space))),edges))], null));
});
