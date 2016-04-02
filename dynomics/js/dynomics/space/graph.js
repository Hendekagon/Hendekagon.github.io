// Compiled by ClojureScript 1.8.40 {}
goog.provide('dynomics.space.graph');
goog.require('cljs.core');
goog.require('loom.alg');
goog.require('loom.graph');
dynomics.space.graph.__ = (function dynomics$space$graph$__(p__101576){
var vec__101578 = p__101576;
var a = cljs.core.nth.call(null,vec__101578,(0),null);
var b = cljs.core.nth.call(null,vec__101578,(1),null);
if((a < b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
}
});
dynomics.space.graph.simplify_edges = (function dynomics$space$graph$simplify_edges(edges){
return cljs.core.map.call(null,(function (p__101588){
var vec__101589 = p__101588;
var vec__101592 = cljs.core.nth.call(null,vec__101589,(0),null);
var _ = cljs.core.nth.call(null,vec__101592,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__101592,(1),null);
var nid1 = cljs.core.nth.call(null,vec__101592,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__101592,(3),null);
var cid1 = cljs.core.nth.call(null,vec__101592,(4),null);
var vec__101593 = cljs.core.nth.call(null,vec__101589,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__101593,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__101593,(1),null);
var nid2 = cljs.core.nth.call(null,vec__101593,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__101593,(3),null);
var cid2 = cljs.core.nth.call(null,vec__101593,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null);
}),edges);
});
/**
 * Returns a nested list of connections (paths to node connections)
 *   from the given edges [[node1 node2] [node3 node4]
 *   and edgez, a set of connection edges}
 */
dynomics.space.graph.as_connections = (function dynomics$space$graph$as_connections(edgez,edges){
var ebn = cljs.core.group_by.call(null,(function (p__101646){
var vec__101647 = p__101646;
var vec__101648 = cljs.core.nth.call(null,vec__101647,(0),null);
var _ = cljs.core.nth.call(null,vec__101648,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__101648,(1),null);
var nid1 = cljs.core.nth.call(null,vec__101648,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__101648,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__101648,(4),null);
var vec__101649 = cljs.core.nth.call(null,vec__101647,(1),null);
var ___$4 = cljs.core.nth.call(null,vec__101649,(0),null);
var ___$5 = cljs.core.nth.call(null,vec__101649,(1),null);
var nid2 = cljs.core.nth.call(null,vec__101649,(2),null);
var ___$6 = cljs.core.nth.call(null,vec__101649,(3),null);
var ___$7 = cljs.core.nth.call(null,vec__101649,(4),null);
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
var args101672 = [];
var len__36461__auto___101685 = arguments.length;
var i__36462__auto___101686 = (0);
while(true){
if((i__36462__auto___101686 < len__36461__auto___101685)){
args101672.push((arguments[i__36462__auto___101686]));

var G__101687 = (i__36462__auto___101686 + (1));
i__36462__auto___101686 = G__101687;
continue;
} else {
}
break;
}

var G__101676 = args101672.length;
switch (G__101676) {
case 1:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args101672.length)].join('')));

}
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$1 = (function (p__101677){
var map__101678 = p__101677;
var map__101678__$1 = ((((!((map__101678 == null)))?((((map__101678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__101678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__101678):map__101678);
var nodes = cljs.core.get.call(null,map__101678__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__101678__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return dynomics.space.graph.as_matrix.call(null,nodes,edges);
});

dynomics.space.graph.as_matrix.cljs$core$IFn$_invoke$arity$2 = (function (nodes,edges){
return cljs.core.reduce.call(null,(function (m,p__101681){
var vec__101682 = p__101681;
var vec__101683 = cljs.core.nth.call(null,vec__101682,(0),null);
var nid1 = cljs.core.nth.call(null,vec__101683,(0),null);
var nid2 = cljs.core.nth.call(null,vec__101683,(1),null);
var j = cljs.core.nth.call(null,vec__101682,(1),null);
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
var G__101696__delegate = function (x){
return cljs.core.mod.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,x),(2));
};
var G__101696 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__101697__i = 0, G__101697__a = new Array(arguments.length -  0);
while (G__101697__i < G__101697__a.length) {G__101697__a[G__101697__i] = arguments[G__101697__i + 0]; ++G__101697__i;}
  x = new cljs.core.IndexedSeq(G__101697__a,0);
} 
return G__101696__delegate.call(this,x);};
G__101696.cljs$lang$maxFixedArity = 0;
G__101696.cljs$lang$applyTo = (function (arglist__101698){
var x = cljs.core.seq(arglist__101698);
return G__101696__delegate(x);
});
G__101696.cljs$core$IFn$_invoke$arity$variadic = G__101696__delegate;
return G__101696;
})()
),m);
}
});
dynomics.space.graph.nodes_from_sum = (function dynomics$space$graph$nodes_from_sum(s){
return cljs.core.reduce.call(null,(function (r,p__101701){
var vec__101702 = p__101701;
var n = cljs.core.nth.call(null,vec__101702,(0),null);
var i = cljs.core.nth.call(null,vec__101702,(1),null);
return cljs.core.reduce.call(null,((function (vec__101702,n,i){
return (function (r__$1,j){
return cljs.core.conj.call(null,r__$1,i);
});})(vec__101702,n,i))
,r,cljs.core.range.call(null,n));
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,s,cljs.core.range.call(null)));
});
dynomics.space.graph.pairs = (function dynomics$space$graph$pairs(l){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.sort,(function (){var iter__36172__auto__ = (function dynomics$space$graph$pairs_$_iter__101714(s__101715){
return (new cljs.core.LazySeq(null,(function (){
var s__101715__$1 = s__101715;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__101715__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36168__auto__ = ((function (s__101715__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function dynomics$space$graph$pairs_$_iter__101714_$_iter__101716(s__101717){
return (new cljs.core.LazySeq(null,((function (s__101715__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__101717__$1 = s__101717;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__101717__$1);
if(temp__4657__auto____$1){
var s__101717__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__101717__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__101717__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__101719 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__101718 = (0);
while(true){
if((i__101718 < size__36171__auto__)){
var y = cljs.core._nth.call(null,c__36170__auto__,i__101718);
cljs.core.chunk_append.call(null,b__101719,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__101725 = (i__101718 + (1));
i__101718 = G__101725;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__101719),dynomics$space$graph$pairs_$_iter__101714_$_iter__101716.call(null,cljs.core.chunk_rest.call(null,s__101717__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__101719),null);
}
} else {
var y = cljs.core.first.call(null,s__101717__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),dynomics$space$graph$pairs_$_iter__101714_$_iter__101716.call(null,cljs.core.rest.call(null,s__101717__$2)));
}
} else {
return null;
}
break;
}
});})(s__101715__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__101715__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ__EQ_,x),l)));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,dynomics$space$graph$pairs_$_iter__101714.call(null,cljs.core.rest.call(null,s__101715__$1)));
} else {
var G__101729 = cljs.core.rest.call(null,s__101715__$1);
s__101715__$1 = G__101729;
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
var args101730 = [];
var len__36461__auto___101754 = arguments.length;
var i__36462__auto___101755 = (0);
while(true){
if((i__36462__auto___101755 < len__36461__auto___101754)){
args101730.push((arguments[i__36462__auto___101755]));

var G__101757 = (i__36462__auto___101755 + (1));
i__36462__auto___101755 = G__101757;
continue;
} else {
}
break;
}

var G__101736 = args101730.length;
switch (G__101736) {
case 1:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.graph.cycles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args101730.length)].join('')));

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
return (function (p__101738,path){
var map__101739 = p__101738;
var map__101739__$1 = ((((!((map__101739 == null)))?((((map__101739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__101739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__101739):map__101739);
var e = cljs.core.get.call(null,map__101739__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var n = cljs.core.get.call(null,map__101739__$1,new cljs.core.Keyword(null,"n","n",562130025));
cljs.core.println.call(null,path,e,n,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),cljs.core.apply.call(null,cljs.core.disj,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)),new cljs.core.Keyword(null,"e","e",1381269198),((!(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,n,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last).call(null,path)))))?cljs.core.apply.call(null,cljs.core.disj,e,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.reverse),cljs.core.partition.call(null,(2),(1),path))):e)], null);
});})(ntr__$1,ptr,paths))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"n","n",562130025),ntr__$1], null),paths);
});

dynomics.space.graph.cycles.cljs$lang$maxFixedArity = 2;
dynomics.space.graph.make_regions = (function dynomics$space$graph$make_regions(p__101781){
var map__101787 = p__101781;
var map__101787__$1 = ((((!((map__101787 == null)))?((((map__101787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__101787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__101787):map__101787);
var state = map__101787__$1;
var map__101788 = cljs.core.get.call(null,map__101787__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__101788__$1 = ((((!((map__101788 == null)))?((((map__101788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__101788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__101788):map__101788);
var space = map__101788__$1;
var edges = cljs.core.get.call(null,map__101788__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
cljs.core.println.call(null,"cycles ",dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space)));

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"regions","regions",-1023815958)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,dynomics.space.graph.as_connections.call(null,dynomics.space.graph.as_edges.call(null,dynomics.space.graph.cycles.call(null,dynomics.space.graph.as_matrix.call(null,space))),edges))], null));
});
