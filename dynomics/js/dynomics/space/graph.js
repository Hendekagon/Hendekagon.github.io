// Compiled by ClojureScript 1.8.34 {}
goog.provide('dynomics.space.graph');
goog.require('cljs.core');
goog.require('loom.alg');
goog.require('loom.graph');
dynomics.space.graph.__ = (function dynomics$space$graph$__(p__298139){
var vec__298141 = p__298139;
var a = cljs.core.nth.call(null,vec__298141,(0),null);
var b = cljs.core.nth.call(null,vec__298141,(1),null);
if((a < b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
}
});
dynomics.space.graph.simplify_edges = (function dynomics$space$graph$simplify_edges(edges){
return cljs.core.map.call(null,(function (p__298146){
var vec__298147 = p__298146;
var vec__298148 = cljs.core.nth.call(null,vec__298147,(0),null);
var _ = cljs.core.nth.call(null,vec__298148,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__298148,(1),null);
var nid1 = cljs.core.nth.call(null,vec__298148,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__298148,(3),null);
var cid1 = cljs.core.nth.call(null,vec__298148,(4),null);
var vec__298149 = cljs.core.nth.call(null,vec__298147,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__298149,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__298149,(1),null);
var nid2 = cljs.core.nth.call(null,vec__298149,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__298149,(3),null);
var cid2 = cljs.core.nth.call(null,vec__298149,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null);
}),edges);
});
/**
 * Returns a nested list of connections (paths to node connections)
 *   from the given edges [[node1 node2] [node3 node4]
 *   and edgez, a set of connection edges}
 */
dynomics.space.graph.as_connections = (function dynomics$space$graph$as_connections(edgez,edges){
var ebn = cljs.core.group_by.call(null,(function (p__298154){
var vec__298155 = p__298154;
var vec__298156 = cljs.core.nth.call(null,vec__298155,(0),null);
var _ = cljs.core.nth.call(null,vec__298156,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__298156,(1),null);
var nid1 = cljs.core.nth.call(null,vec__298156,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__298156,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__298156,(4),null);
var vec__298157 = cljs.core.nth.call(null,vec__298155,(1),null);
var ___$4 = cljs.core.nth.call(null,vec__298157,(0),null);
var ___$5 = cljs.core.nth.call(null,vec__298157,(1),null);
var nid2 = cljs.core.nth.call(null,vec__298157,(2),null);
var ___$6 = cljs.core.nth.call(null,vec__298157,(3),null);
var ___$7 = cljs.core.nth.call(null,vec__298157,(4),null);
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
var args298158 = [];
var len__36260__auto___298167 = arguments.length;
var i__36261__auto___298168 = (0);
while(true){
if((i__36261__auto___298168 < len__36260__auto___298167)){
args298158.push((arguments[i__36261__auto___298168]));

var G__298169 = (i__36261__auto___298168 + (1));
i__36261__auto___298168 = G__298169;
continue;
} else {
}
break;
}

var G__298160 = args298158.length;
switch (G__298160) {
case 1:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args298158.length)].join('')));

}
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1 = (function (p__298161){
var map__298162 = p__298161;
var map__298162__$1 = ((((!((map__298162 == null)))?((((map__298162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__298162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__298162):map__298162);
var nodes = cljs.core.get.call(null,map__298162__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__298162__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return dynomics.space.graph.as_matrix.call(null,nodes,edges);
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2 = (function (nodes,edges){
return cljs.core.reduce.call(null,(function (m,p__298164){
var vec__298165 = p__298164;
var vec__298166 = cljs.core.nth.call(null,vec__298165,(0),null);
var nid1 = cljs.core.nth.call(null,vec__298166,(0),null);
var nid2 = cljs.core.nth.call(null,vec__298166,(1),null);
var j = cljs.core.nth.call(null,vec__298165,(1),null);
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
var G__298171__delegate = function (x){
return cljs.core.mod.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,x),(2));
};
var G__298171 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__298172__i = 0, G__298172__a = new Array(arguments.length -  0);
while (G__298172__i < G__298172__a.length) {G__298172__a[G__298172__i] = arguments[G__298172__i + 0]; ++G__298172__i;}
  x = new cljs.core.IndexedSeq(G__298172__a,0);
} 
return G__298171__delegate.call(this,x);};
G__298171.cljs$lang$maxFixedArity = 0;
G__298171.cljs$lang$applyTo = (function (arglist__298173){
var x = cljs.core.seq(arglist__298173);
return G__298171__delegate(x);
});
G__298171.cljs$core$IFn$_invoke$arity$variadic = G__298171__delegate;
return G__298171;
})()
),m);
}
});
dynomics.space.graph.nodes_from_sum = (function dynomics$space$graph$nodes_from_sum(s){
return cljs.core.reduce.call(null,(function (r,p__298176){
var vec__298177 = p__298176;
var n = cljs.core.nth.call(null,vec__298177,(0),null);
var i = cljs.core.nth.call(null,vec__298177,(1),null);
return cljs.core.reduce.call(null,((function (vec__298177,n,i){
return (function (r__$1,j){
return cljs.core.conj.call(null,r__$1,i);
});})(vec__298177,n,i))
,r,cljs.core.range.call(null,n));
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,s,cljs.core.range.call(null)));
});
dynomics.space.graph.pairs = (function dynomics$space$graph$pairs(l){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.sort,(function (){var iter__35971__auto__ = (function dynomics$space$graph$pairs_$_iter__298189(s__298190){
return (new cljs.core.LazySeq(null,(function (){
var s__298190__$1 = s__298190;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__298190__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__298190__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function dynomics$space$graph$pairs_$_iter__298189_$_iter__298191(s__298192){
return (new cljs.core.LazySeq(null,((function (s__298190__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__298192__$1 = s__298192;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__298192__$1);
if(temp__4657__auto____$1){
var s__298192__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__298192__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__298192__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__298194 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__298193 = (0);
while(true){
if((i__298193 < size__35970__auto__)){
var y = cljs.core._nth.call(null,c__35969__auto__,i__298193);
cljs.core.chunk_append.call(null,b__298194,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__298236 = (i__298193 + (1));
i__298193 = G__298236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__298194),dynomics$space$graph$pairs_$_iter__298189_$_iter__298191.call(null,cljs.core.chunk_rest.call(null,s__298192__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__298194),null);
}
} else {
var y = cljs.core.first.call(null,s__298192__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),dynomics$space$graph$pairs_$_iter__298189_$_iter__298191.call(null,cljs.core.rest.call(null,s__298192__$2)));
}
} else {
return null;
}
break;
}
});})(s__298190__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__298190__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ__EQ_,x),l)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,dynomics$space$graph$pairs_$_iter__298189.call(null,cljs.core.rest.call(null,s__298190__$1)));
} else {
var G__298239 = cljs.core.rest.call(null,s__298190__$1);
s__298190__$1 = G__298239;
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
var args298241 = [];
var len__36260__auto___298249 = arguments.length;
var i__36261__auto___298250 = (0);
while(true){
if((i__36261__auto___298250 < len__36260__auto___298249)){
args298241.push((arguments[i__36261__auto___298250]));

var G__298251 = (i__36261__auto___298250 + (1));
i__36261__auto___298250 = G__298251;
continue;
} else {
}
break;
}

var G__298244 = args298241.length;
switch (G__298244) {
case 1:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args298241.length)].join('')));

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
return (function (p__298245,path){
var map__298246 = p__298245;
var map__298246__$1 = ((((!((map__298246 == null)))?((((map__298246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__298246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__298246):map__298246);
var e = cljs.core.get.call(null,map__298246__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var n = cljs.core.get.call(null,map__298246__$1,new cljs.core.Keyword(null,"n","n",562130025));
cljs.core.println.call(null,path,e,n,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),cljs.core.apply.call(null,cljs.core.disj,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)),new cljs.core.Keyword(null,"e","e",1381269198),((!(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)))))?cljs.core.apply.call(null,cljs.core.disj,e,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.reverse),cljs.core.partition.call(null,(2),(1),path))):e)], null);
});})(ntr__$1,ptr,paths))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"n","n",562130025),ntr__$1], null),paths);
});

dynomics.space.graph.cycles.cljs$lang$maxFixedArity = 2;
dynomics.space.graph.make_regions = (function dynomics$space$graph$make_regions(p__298274){
var map__298280 = p__298274;
var map__298280__$1 = ((((!((map__298280 == null)))?((((map__298280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__298280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__298280):map__298280);
var state = map__298280__$1;
var map__298281 = cljs.core.get.call(null,map__298280__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__298281__$1 = ((((!((map__298281 == null)))?((((map__298281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__298281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__298281):map__298281);
var space = map__298281__$1;
var edges = cljs.core.get.call(null,map__298281__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
cljs.core.println.call(null,"cycles ",dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space)));

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"regions","regions",-1023815958)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,dynomics.space.graph.as_connections.call(null,dynomics.space.graph.as_edges.call(null,dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space))),edges))], null));
});

//# sourceMappingURL=graph.js.map?rel=1459068555015