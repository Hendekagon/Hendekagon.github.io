// Compiled by ClojureScript 1.8.34 {}
goog.provide('dynomics.space.graph');
goog.require('cljs.core');
goog.require('loom.alg');
goog.require('loom.graph');
dynomics.space.graph.__ = (function dynomics$space$graph$__(p__375279){
var vec__375282 = p__375279;
var a = cljs.core.nth.call(null,vec__375282,(0),null);
var b = cljs.core.nth.call(null,vec__375282,(1),null);
if((a < b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
}
});
dynomics.space.graph.simplify_edges = (function dynomics$space$graph$simplify_edges(edges){
return cljs.core.map.call(null,(function (p__375301){
var vec__375302 = p__375301;
var vec__375303 = cljs.core.nth.call(null,vec__375302,(0),null);
var _ = cljs.core.nth.call(null,vec__375303,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__375303,(1),null);
var nid1 = cljs.core.nth.call(null,vec__375303,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__375303,(3),null);
var cid1 = cljs.core.nth.call(null,vec__375303,(4),null);
var vec__375304 = cljs.core.nth.call(null,vec__375302,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__375304,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__375304,(1),null);
var nid2 = cljs.core.nth.call(null,vec__375304,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__375304,(3),null);
var cid2 = cljs.core.nth.call(null,vec__375304,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null);
}),edges);
});
/**
 * Returns a nested list of connections (paths to node connections)
 *   from the given edges [[node1 node2] [node3 node4]
 *   and edgez, a set of connection edges}
 */
dynomics.space.graph.as_connections = (function dynomics$space$graph$as_connections(edgez,edges){
var ebn = cljs.core.group_by.call(null,(function (p__375330){
var vec__375331 = p__375330;
var vec__375332 = cljs.core.nth.call(null,vec__375331,(0),null);
var _ = cljs.core.nth.call(null,vec__375332,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__375332,(1),null);
var nid1 = cljs.core.nth.call(null,vec__375332,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__375332,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__375332,(4),null);
var vec__375333 = cljs.core.nth.call(null,vec__375331,(1),null);
var ___$4 = cljs.core.nth.call(null,vec__375333,(0),null);
var ___$5 = cljs.core.nth.call(null,vec__375333,(1),null);
var nid2 = cljs.core.nth.call(null,vec__375333,(2),null);
var ___$6 = cljs.core.nth.call(null,vec__375333,(3),null);
var ___$7 = cljs.core.nth.call(null,vec__375333,(4),null);
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
var args375340 = [];
var len__36260__auto___375356 = arguments.length;
var i__36261__auto___375358 = (0);
while(true){
if((i__36261__auto___375358 < len__36260__auto___375356)){
args375340.push((arguments[i__36261__auto___375358]));

var G__375360 = (i__36261__auto___375358 + (1));
i__36261__auto___375358 = G__375360;
continue;
} else {
}
break;
}

var G__375345 = args375340.length;
switch (G__375345) {
case 1:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args375340.length)].join('')));

}
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1 = (function (p__375346){
var map__375347 = p__375346;
var map__375347__$1 = ((((!((map__375347 == null)))?((((map__375347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375347):map__375347);
var nodes = cljs.core.get.call(null,map__375347__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__375347__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return dynomics.space.graph.as_matrix.call(null,nodes,edges);
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2 = (function (nodes,edges){
return cljs.core.reduce.call(null,(function (m,p__375351){
var vec__375352 = p__375351;
var vec__375353 = cljs.core.nth.call(null,vec__375352,(0),null);
var nid1 = cljs.core.nth.call(null,vec__375353,(0),null);
var nid2 = cljs.core.nth.call(null,vec__375353,(1),null);
var j = cljs.core.nth.call(null,vec__375352,(1),null);
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
var G__375388__delegate = function (x){
return cljs.core.mod.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,x),(2));
};
var G__375388 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__375391__i = 0, G__375391__a = new Array(arguments.length -  0);
while (G__375391__i < G__375391__a.length) {G__375391__a[G__375391__i] = arguments[G__375391__i + 0]; ++G__375391__i;}
  x = new cljs.core.IndexedSeq(G__375391__a,0);
} 
return G__375388__delegate.call(this,x);};
G__375388.cljs$lang$maxFixedArity = 0;
G__375388.cljs$lang$applyTo = (function (arglist__375393){
var x = cljs.core.seq(arglist__375393);
return G__375388__delegate(x);
});
G__375388.cljs$core$IFn$_invoke$arity$variadic = G__375388__delegate;
return G__375388;
})()
),m);
}
});
dynomics.space.graph.nodes_from_sum = (function dynomics$space$graph$nodes_from_sum(s){
return cljs.core.reduce.call(null,(function (r,p__375400){
var vec__375404 = p__375400;
var n = cljs.core.nth.call(null,vec__375404,(0),null);
var i = cljs.core.nth.call(null,vec__375404,(1),null);
return cljs.core.reduce.call(null,((function (vec__375404,n,i){
return (function (r__$1,j){
return cljs.core.conj.call(null,r__$1,i);
});})(vec__375404,n,i))
,r,cljs.core.range.call(null,n));
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,s,cljs.core.range.call(null)));
});
dynomics.space.graph.pairs = (function dynomics$space$graph$pairs(l){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.sort,(function (){var iter__35971__auto__ = (function dynomics$space$graph$pairs_$_iter__375441(s__375442){
return (new cljs.core.LazySeq(null,(function (){
var s__375442__$1 = s__375442;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__375442__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__375442__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function dynomics$space$graph$pairs_$_iter__375441_$_iter__375443(s__375444){
return (new cljs.core.LazySeq(null,((function (s__375442__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__375444__$1 = s__375444;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__375444__$1);
if(temp__4657__auto____$1){
var s__375444__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__375444__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__375444__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__375446 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__375445 = (0);
while(true){
if((i__375445 < size__35970__auto__)){
var y = cljs.core._nth.call(null,c__35969__auto__,i__375445);
cljs.core.chunk_append.call(null,b__375446,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__375480 = (i__375445 + (1));
i__375445 = G__375480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375446),dynomics$space$graph$pairs_$_iter__375441_$_iter__375443.call(null,cljs.core.chunk_rest.call(null,s__375444__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375446),null);
}
} else {
var y = cljs.core.first.call(null,s__375444__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),dynomics$space$graph$pairs_$_iter__375441_$_iter__375443.call(null,cljs.core.rest.call(null,s__375444__$2)));
}
} else {
return null;
}
break;
}
});})(s__375442__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__375442__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ__EQ_,x),l)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,dynomics$space$graph$pairs_$_iter__375441.call(null,cljs.core.rest.call(null,s__375442__$1)));
} else {
var G__375499 = cljs.core.rest.call(null,s__375442__$1);
s__375442__$1 = G__375499;
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
var args375515 = [];
var len__36260__auto___375553 = arguments.length;
var i__36261__auto___375554 = (0);
while(true){
if((i__36261__auto___375554 < len__36260__auto___375553)){
args375515.push((arguments[i__36261__auto___375554]));

var G__375556 = (i__36261__auto___375554 + (1));
i__36261__auto___375554 = G__375556;
continue;
} else {
}
break;
}

var G__375531 = args375515.length;
switch (G__375531) {
case 1:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args375515.length)].join('')));

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
return (function (p__375535,path){
var map__375536 = p__375535;
var map__375536__$1 = ((((!((map__375536 == null)))?((((map__375536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375536):map__375536);
var e = cljs.core.get.call(null,map__375536__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var n = cljs.core.get.call(null,map__375536__$1,new cljs.core.Keyword(null,"n","n",562130025));
cljs.core.println.call(null,path,e,n,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),cljs.core.apply.call(null,cljs.core.disj,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)),new cljs.core.Keyword(null,"e","e",1381269198),((!(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)))))?cljs.core.apply.call(null,cljs.core.disj,e,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.reverse),cljs.core.partition.call(null,(2),(1),path))):e)], null);
});})(ntr__$1,ptr,paths))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"n","n",562130025),ntr__$1], null),paths);
});

dynomics.space.graph.cycles.cljs$lang$maxFixedArity = 2;
dynomics.space.graph.make_regions = (function dynomics$space$graph$make_regions(p__375582){
var map__375593 = p__375582;
var map__375593__$1 = ((((!((map__375593 == null)))?((((map__375593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375593):map__375593);
var state = map__375593__$1;
var map__375594 = cljs.core.get.call(null,map__375593__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__375594__$1 = ((((!((map__375594 == null)))?((((map__375594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375594):map__375594);
var space = map__375594__$1;
var edges = cljs.core.get.call(null,map__375594__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
cljs.core.println.call(null,"cycles ",dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space)));

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"regions","regions",-1023815958)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,dynomics.space.graph.as_connections.call(null,dynomics.space.graph.as_edges.call(null,dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space))),edges))], null));
});
