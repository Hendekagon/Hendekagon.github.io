// Compiled by ClojureScript 1.7.170 {}
goog.provide('loom.graph');
goog.require('cljs.core');
goog.require('loom.alg_generic');

/**
 * @interface
 */
loom.graph.Graph = function(){};

/**
 * Returns a collection of the nodes in graph g
 */
loom.graph.nodes = (function loom$graph$nodes(g){
if((!((g == null))) && (!((g.loom$graph$Graph$nodes$arity$1 == null)))){
return g.loom$graph$Graph$nodes$arity$1(g);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.nodes[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g);
} else {
var m__24817__auto____$1 = (loom.graph.nodes["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.nodes",g);
}
}
}
});

/**
 * Edges in g. May return each edge twice in an undirected graph
 */
loom.graph.edges = (function loom$graph$edges(g){
if((!((g == null))) && (!((g.loom$graph$Graph$edges$arity$1 == null)))){
return g.loom$graph$Graph$edges$arity$1(g);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.edges[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g);
} else {
var m__24817__auto____$1 = (loom.graph.edges["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.edges",g);
}
}
}
});

/**
 * Returns true when node is in g
 */
loom.graph.has_node_QMARK_ = (function loom$graph$has_node_QMARK_(g,node){
if((!((g == null))) && (!((g.loom$graph$Graph$has_node_QMARK_$arity$2 == null)))){
return g.loom$graph$Graph$has_node_QMARK_$arity$2(g,node);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.has_node_QMARK_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g,node);
} else {
var m__24817__auto____$1 = (loom.graph.has_node_QMARK_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.has-node?",g);
}
}
}
});

/**
 * Returns true when edge [n1 n2] is in g
 */
loom.graph.has_edge_QMARK_ = (function loom$graph$has_edge_QMARK_(g,n1,n2){
if((!((g == null))) && (!((g.loom$graph$Graph$has_edge_QMARK_$arity$3 == null)))){
return g.loom$graph$Graph$has_edge_QMARK_$arity$3(g,n1,n2);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.has_edge_QMARK_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g,n1,n2);
} else {
var m__24817__auto____$1 = (loom.graph.has_edge_QMARK_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g,n1,n2);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.has-edge?",g);
}
}
}
});

/**
 * Returns direct successors of node, or (partial successors g)
 */
loom.graph.successors = (function loom$graph$successors(var_args){
var args1884091 = [];
var len__25219__auto___1884097 = arguments.length;
var i__25220__auto___1884098 = (0);
while(true){
if((i__25220__auto___1884098 < len__25219__auto___1884097)){
args1884091.push((arguments[i__25220__auto___1884098]));

var G__1884099 = (i__25220__auto___1884098 + (1));
i__25220__auto___1884098 = G__1884099;
continue;
} else {
}
break;
}

var G__1884093 = args1884091.length;
switch (G__1884093) {
case 1:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1884091.length)].join('')));

}
});

loom.graph.successors.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Graph$successors$arity$1 == null)))){
return g.loom$graph$Graph$successors$arity$1(g);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.successors[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g);
} else {
var m__24817__auto____$1 = (loom.graph.successors["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.successors",g);
}
}
}
});

loom.graph.successors.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
if((!((g == null))) && (!((g.loom$graph$Graph$successors$arity$2 == null)))){
return g.loom$graph$Graph$successors$arity$2(g,node);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.successors[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g,node);
} else {
var m__24817__auto____$1 = (loom.graph.successors["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.successors",g);
}
}
}
});

loom.graph.successors.cljs$lang$maxFixedArity = 2;

/**
 * Returns the number of outgoing edges of node
 */
loom.graph.out_degree = (function loom$graph$out_degree(g,node){
if((!((g == null))) && (!((g.loom$graph$Graph$out_degree$arity$2 == null)))){
return g.loom$graph$Graph$out_degree$arity$2(g,node);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.out_degree[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g,node);
} else {
var m__24817__auto____$1 = (loom.graph.out_degree["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.out-degree",g);
}
}
}
});

/**
 * Returns all the outgoing edges of node
 */
loom.graph.out_edges = (function loom$graph$out_edges(var_args){
var args1884094 = [];
var len__25219__auto___1884101 = arguments.length;
var i__25220__auto___1884102 = (0);
while(true){
if((i__25220__auto___1884102 < len__25219__auto___1884101)){
args1884094.push((arguments[i__25220__auto___1884102]));

var G__1884103 = (i__25220__auto___1884102 + (1));
i__25220__auto___1884102 = G__1884103;
continue;
} else {
}
break;
}

var G__1884096 = args1884094.length;
switch (G__1884096) {
case 1:
return loom.graph.out_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.out_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1884094.length)].join('')));

}
});

loom.graph.out_edges.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Graph$out_edges$arity$1 == null)))){
return g.loom$graph$Graph$out_edges$arity$1(g);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.out_edges[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g);
} else {
var m__24817__auto____$1 = (loom.graph.out_edges["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.out-edges",g);
}
}
}
});

loom.graph.out_edges.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
if((!((g == null))) && (!((g.loom$graph$Graph$out_edges$arity$2 == null)))){
return g.loom$graph$Graph$out_edges$arity$2(g,node);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.out_edges[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g,node);
} else {
var m__24817__auto____$1 = (loom.graph.out_edges["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.out-edges",g);
}
}
}
});

loom.graph.out_edges.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
loom.graph.Digraph = function(){};

/**
 * Returns direct predecessors of node, or (partial predecessors g)
 */
loom.graph.predecessors = (function loom$graph$predecessors(var_args){
var args1884105 = [];
var len__25219__auto___1884111 = arguments.length;
var i__25220__auto___1884112 = (0);
while(true){
if((i__25220__auto___1884112 < len__25219__auto___1884111)){
args1884105.push((arguments[i__25220__auto___1884112]));

var G__1884113 = (i__25220__auto___1884112 + (1));
i__25220__auto___1884112 = G__1884113;
continue;
} else {
}
break;
}

var G__1884107 = args1884105.length;
switch (G__1884107) {
case 1:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1884105.length)].join('')));

}
});

loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Digraph$predecessors$arity$1 == null)))){
return g.loom$graph$Digraph$predecessors$arity$1(g);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.predecessors[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g);
} else {
var m__24817__auto____$1 = (loom.graph.predecessors["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"Digraph.predecessors",g);
}
}
}
});

loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
if((!((g == null))) && (!((g.loom$graph$Digraph$predecessors$arity$2 == null)))){
return g.loom$graph$Digraph$predecessors$arity$2(g,node);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.predecessors[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g,node);
} else {
var m__24817__auto____$1 = (loom.graph.predecessors["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Digraph.predecessors",g);
}
}
}
});

loom.graph.predecessors.cljs$lang$maxFixedArity = 2;

/**
 * Returns the number of direct predecessors to node
 */
loom.graph.in_degree = (function loom$graph$in_degree(g,node){
if((!((g == null))) && (!((g.loom$graph$Digraph$in_degree$arity$2 == null)))){
return g.loom$graph$Digraph$in_degree$arity$2(g,node);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.in_degree[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g,node);
} else {
var m__24817__auto____$1 = (loom.graph.in_degree["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Digraph.in-degree",g);
}
}
}
});

/**
 * Returns all the incoming edges of node
 */
loom.graph.in_edges = (function loom$graph$in_edges(var_args){
var args1884108 = [];
var len__25219__auto___1884115 = arguments.length;
var i__25220__auto___1884116 = (0);
while(true){
if((i__25220__auto___1884116 < len__25219__auto___1884115)){
args1884108.push((arguments[i__25220__auto___1884116]));

var G__1884117 = (i__25220__auto___1884116 + (1));
i__25220__auto___1884116 = G__1884117;
continue;
} else {
}
break;
}

var G__1884110 = args1884108.length;
switch (G__1884110) {
case 1:
return loom.graph.in_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.in_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1884108.length)].join('')));

}
});

loom.graph.in_edges.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Digraph$in_edges$arity$1 == null)))){
return g.loom$graph$Digraph$in_edges$arity$1(g);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.in_edges[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g);
} else {
var m__24817__auto____$1 = (loom.graph.in_edges["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"Digraph.in-edges",g);
}
}
}
});

loom.graph.in_edges.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
if((!((g == null))) && (!((g.loom$graph$Digraph$in_edges$arity$2 == null)))){
return g.loom$graph$Digraph$in_edges$arity$2(g,node);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.in_edges[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g,node);
} else {
var m__24817__auto____$1 = (loom.graph.in_edges["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Digraph.in-edges",g);
}
}
}
});

loom.graph.in_edges.cljs$lang$maxFixedArity = 2;

/**
 * Returns a graph with all edges reversed
 */
loom.graph.transpose = (function loom$graph$transpose(g){
if((!((g == null))) && (!((g.loom$graph$Digraph$transpose$arity$1 == null)))){
return g.loom$graph$Digraph$transpose$arity$1(g);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.transpose[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g);
} else {
var m__24817__auto____$1 = (loom.graph.transpose["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"Digraph.transpose",g);
}
}
}
});


/**
 * @interface
 */
loom.graph.WeightedGraph = function(){};

/**
 * Returns the weight of edge e or edge [n1 n2] or (partial weight g)
 */
loom.graph.weight = (function loom$graph$weight(var_args){
var args1884119 = [];
var len__25219__auto___1884122 = arguments.length;
var i__25220__auto___1884123 = (0);
while(true){
if((i__25220__auto___1884123 < len__25219__auto___1884122)){
args1884119.push((arguments[i__25220__auto___1884123]));

var G__1884124 = (i__25220__auto___1884123 + (1));
i__25220__auto___1884123 = G__1884124;
continue;
} else {
}
break;
}

var G__1884121 = args1884119.length;
switch (G__1884121) {
case 1:
return loom.graph.weight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.weight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1884119.length)].join('')));

}
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$WeightedGraph$weight$arity$1 == null)))){
return g.loom$graph$WeightedGraph$weight$arity$1(g);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.weight[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g);
} else {
var m__24817__auto____$1 = (loom.graph.weight["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"WeightedGraph.weight",g);
}
}
}
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$2 = (function (g,e){
if((!((g == null))) && (!((g.loom$graph$WeightedGraph$weight$arity$2 == null)))){
return g.loom$graph$WeightedGraph$weight$arity$2(g,e);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.weight[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g,e);
} else {
var m__24817__auto____$1 = (loom.graph.weight["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g,e);
} else {
throw cljs.core.missing_protocol.call(null,"WeightedGraph.weight",g);
}
}
}
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$3 = (function (g,n1,n2){
if((!((g == null))) && (!((g.loom$graph$WeightedGraph$weight$arity$3 == null)))){
return g.loom$graph$WeightedGraph$weight$arity$3(g,n1,n2);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.weight[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g,n1,n2);
} else {
var m__24817__auto____$1 = (loom.graph.weight["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g,n1,n2);
} else {
throw cljs.core.missing_protocol.call(null,"WeightedGraph.weight",g);
}
}
}
});

loom.graph.weight.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
loom.graph.EditableGraph = function(){};

/**
 * Add nodes to graph g. See add-nodes
 */
loom.graph.add_nodes_STAR_ = (function loom$graph$add_nodes_STAR_(g,nodes){
if((!((g == null))) && (!((g.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 == null)))){
return g.loom$graph$EditableGraph$add_nodes_STAR_$arity$2(g,nodes);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.add_nodes_STAR_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g,nodes);
} else {
var m__24817__auto____$1 = (loom.graph.add_nodes_STAR_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g,nodes);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.add-nodes*",g);
}
}
}
});

/**
 * Add edges to graph g. See add-edges
 */
loom.graph.add_edges_STAR_ = (function loom$graph$add_edges_STAR_(g,edges){
if((!((g == null))) && (!((g.loom$graph$EditableGraph$add_edges_STAR_$arity$2 == null)))){
return g.loom$graph$EditableGraph$add_edges_STAR_$arity$2(g,edges);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.add_edges_STAR_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g,edges);
} else {
var m__24817__auto____$1 = (loom.graph.add_edges_STAR_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g,edges);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.add-edges*",g);
}
}
}
});

/**
 * Remove nodes from graph g. See remove-nodes
 */
loom.graph.remove_nodes_STAR_ = (function loom$graph$remove_nodes_STAR_(g,nodes){
if((!((g == null))) && (!((g.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 == null)))){
return g.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2(g,nodes);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.remove_nodes_STAR_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g,nodes);
} else {
var m__24817__auto____$1 = (loom.graph.remove_nodes_STAR_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g,nodes);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.remove-nodes*",g);
}
}
}
});

/**
 * Removes edges from graph g. See remove-edges
 */
loom.graph.remove_edges_STAR_ = (function loom$graph$remove_edges_STAR_(g,edges){
if((!((g == null))) && (!((g.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 == null)))){
return g.loom$graph$EditableGraph$remove_edges_STAR_$arity$2(g,edges);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.remove_edges_STAR_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g,edges);
} else {
var m__24817__auto____$1 = (loom.graph.remove_edges_STAR_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g,edges);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.remove-edges*",g);
}
}
}
});

/**
 * Removes all nodes and edges from graph g
 */
loom.graph.remove_all = (function loom$graph$remove_all(g){
if((!((g == null))) && (!((g.loom$graph$EditableGraph$remove_all$arity$1 == null)))){
return g.loom$graph$EditableGraph$remove_all$arity$1(g);
} else {
var x__24816__auto__ = (((g == null))?null:g);
var m__24817__auto__ = (loom.graph.remove_all[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,g);
} else {
var m__24817__auto____$1 = (loom.graph.remove_all["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.remove-all",g);
}
}
}
});


/**
 * @interface
 */
loom.graph.Edge = function(){};

/**
 * Returns the source node of the edge
 */
loom.graph.src = (function loom$graph$src(edge){
if((!((edge == null))) && (!((edge.loom$graph$Edge$src$arity$1 == null)))){
return edge.loom$graph$Edge$src$arity$1(edge);
} else {
var x__24816__auto__ = (((edge == null))?null:edge);
var m__24817__auto__ = (loom.graph.src[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,edge);
} else {
var m__24817__auto____$1 = (loom.graph.src["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,edge);
} else {
throw cljs.core.missing_protocol.call(null,"Edge.src",edge);
}
}
}
});

/**
 * Returns the dest node of the edge
 */
loom.graph.dest = (function loom$graph$dest(edge){
if((!((edge == null))) && (!((edge.loom$graph$Edge$dest$arity$1 == null)))){
return edge.loom$graph$Edge$dest$arity$1(edge);
} else {
var x__24816__auto__ = (((edge == null))?null:edge);
var m__24817__auto__ = (loom.graph.dest[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,edge);
} else {
var m__24817__auto____$1 = (loom.graph.dest["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,edge);
} else {
throw cljs.core.missing_protocol.call(null,"Edge.dest",edge);
}
}
}
});

cljs.core.PersistentVector.prototype.loom$graph$Edge$ = true;

cljs.core.PersistentVector.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.get.call(null,edge__$1,(0));
});

cljs.core.PersistentVector.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.get.call(null,edge__$1,(1));
});
cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$ = true;

cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
});

cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
});
cljs.core.PersistentHashMap.prototype.loom$graph$Edge$ = true;

cljs.core.PersistentHashMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
});

cljs.core.PersistentHashMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
});
/**
 * Adds nodes to graph g. Nodes can be any type of object
 */
loom.graph.add_nodes = (function loom$graph$add_nodes(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1884128 = arguments.length;
var i__25220__auto___1884129 = (0);
while(true){
if((i__25220__auto___1884129 < len__25219__auto___1884128)){
args__25226__auto__.push((arguments[i__25220__auto___1884129]));

var G__1884130 = (i__25220__auto___1884129 + (1));
i__25220__auto___1884129 = G__1884130;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((1) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((1)),(0))):null);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25227__auto__);
});

loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_nodes_STAR_.call(null,g,nodes);
});

loom.graph.add_nodes.cljs$lang$maxFixedArity = (1);

loom.graph.add_nodes.cljs$lang$applyTo = (function (seq1884126){
var G__1884127 = cljs.core.first.call(null,seq1884126);
var seq1884126__$1 = cljs.core.next.call(null,seq1884126);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic(G__1884127,seq1884126__$1);
});
/**
 * Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].
 *   For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the
 *   latter defaulting to a weight of 1
 */
loom.graph.add_edges = (function loom$graph$add_edges(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1884133 = arguments.length;
var i__25220__auto___1884134 = (0);
while(true){
if((i__25220__auto___1884134 < len__25219__auto___1884133)){
args__25226__auto__.push((arguments[i__25220__auto___1884134]));

var G__1884135 = (i__25220__auto___1884134 + (1));
i__25220__auto___1884134 = G__1884135;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((1) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((1)),(0))):null);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25227__auto__);
});

loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.add_edges_STAR_.call(null,g,edges);
});

loom.graph.add_edges.cljs$lang$maxFixedArity = (1);

loom.graph.add_edges.cljs$lang$applyTo = (function (seq1884131){
var G__1884132 = cljs.core.first.call(null,seq1884131);
var seq1884131__$1 = cljs.core.next.call(null,seq1884131);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic(G__1884132,seq1884131__$1);
});
/**
 * Removes nodes from graph g
 */
loom.graph.remove_nodes = (function loom$graph$remove_nodes(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1884138 = arguments.length;
var i__25220__auto___1884139 = (0);
while(true){
if((i__25220__auto___1884139 < len__25219__auto___1884138)){
args__25226__auto__.push((arguments[i__25220__auto___1884139]));

var G__1884140 = (i__25220__auto___1884139 + (1));
i__25220__auto___1884139 = G__1884140;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((1) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((1)),(0))):null);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25227__auto__);
});

loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.remove_nodes_STAR_.call(null,g,nodes);
});

loom.graph.remove_nodes.cljs$lang$maxFixedArity = (1);

loom.graph.remove_nodes.cljs$lang$applyTo = (function (seq1884136){
var G__1884137 = cljs.core.first.call(null,seq1884136);
var seq1884136__$1 = cljs.core.next.call(null,seq1884136);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic(G__1884137,seq1884136__$1);
});
/**
 * Removes edges from graph g. Do not include weights
 */
loom.graph.remove_edges = (function loom$graph$remove_edges(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1884143 = arguments.length;
var i__25220__auto___1884144 = (0);
while(true){
if((i__25220__auto___1884144 < len__25219__auto___1884143)){
args__25226__auto__.push((arguments[i__25220__auto___1884144]));

var G__1884145 = (i__25220__auto___1884144 + (1));
i__25220__auto___1884144 = G__1884145;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((1) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((1)),(0))):null);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25227__auto__);
});

loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.remove_edges_STAR_.call(null,g,edges);
});

loom.graph.remove_edges.cljs$lang$maxFixedArity = (1);

loom.graph.remove_edges.cljs$lang$applyTo = (function (seq1884141){
var G__1884142 = cljs.core.first.call(null,seq1884141);
var seq1884141__$1 = cljs.core.next.call(null,seq1884141);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic(G__1884142,seq1884141__$1);
});
/**
 * Weight used when none is given for edges in weighted graphs
 */
loom.graph._STAR_default_weight_STAR_ = (1);
loom.graph.default_graph_impls = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null)], null),cljs.core.list(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Symbol(null,"g","g",-916345864,null))),new cljs.core.Keyword(null,"edges","edges",-694791395),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null)], null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n1","n1",-47149660,null),cljs.core.list(new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"g","g",-916345864,null)),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol(null,"out-edges","out-edges",170502459,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null))], null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),new cljs.core.Keyword(null,"has-node?","has-node?",723558202),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Symbol(null,"g","g",-916345864,null)),new cljs.core.Symbol(null,"node","node",-2073234571,null))),new cljs.core.Keyword(null,"has-edge?","has-edge?",-1917667900),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null)], null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Symbol(null,"n1","n1",-47149660,null)], null)),new cljs.core.Symbol(null,"n2","n2",-1172545453,null))),new cljs.core.Keyword(null,"out-degree","out-degree",669706144),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null)))),new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null)], null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"out-edges","out-edges",170502459,null),new cljs.core.Symbol(null,"g","g",-916345864,null))),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n2","n2",-1172545453,null),cljs.core.list(new cljs.core.Symbol(null,"successors","successors",401235113,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"node","node",-2073234571,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null)], null))))], null),new cljs.core.Keyword(null,"unweighted","unweighted",1330462592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"add-nodes*","add-nodes*",-657799391),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"g","g",-916345864,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Symbol(null,"n","n",-2092305744,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Symbol(null,"g","g",-916345864,null)),new cljs.core.Symbol(null,"n","n",-2092305744,null)),cljs.core.PersistentHashSet.EMPTY)))),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null))),new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null)], null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"successors","successors",401235113,null),new cljs.core.Symbol(null,"g","g",-916345864,null))),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null))))], null),new cljs.core.Keyword(null,"weighted","weighted",-1404778316),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"add-nodes*","add-nodes*",-657799391),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"g","g",-916345864,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Symbol(null,"n","n",-2092305744,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(cljs.core.list(new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Symbol(null,"g","g",-916345864,null)),new cljs.core.Symbol(null,"n","n",-2092305744,null)),cljs.core.PersistentArrayMap.EMPTY)))),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null))),new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null)], null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"successors","successors",401235113,null),new cljs.core.Symbol(null,"g","g",-916345864,null))),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null)))))], null)], null);
loom.graph.default_digraph_impl = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"predecessors","predecessors",229913357),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null)], null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"predecessors","predecessors",1870444884,null),new cljs.core.Symbol(null,"g","g",-916345864,null))),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null)))),new cljs.core.Keyword(null,"in-degree","in-degree",-519033808),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null)))),new cljs.core.Keyword(null,"in-edges","in-edges",221484951),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null)], null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"in-edges","in-edges",1862016478,null),new cljs.core.Symbol(null,"g","g",-916345864,null))),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n2","n2",-1172545453,null),cljs.core.list(new cljs.core.Symbol(null,"predecessors","predecessors",1870444884,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"node","node",-2073234571,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n2","n2",-1172545453,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null))))], null);
loom.graph.default_weighted_graph_impl = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weight","weight",-1262796205),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null)], null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"g","g",-916345864,null))),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"g","g",-916345864,null),cljs.core.list(new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),cljs.core.list(new cljs.core.Symbol(null,"dest","dest",1605962050,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null)], null))))], null);
loom.graph.remove_adj_nodes = (function loom$graph$remove_adj_nodes(m,nodes,adjacents,remove_fn){
return cljs.core.reduce.call(null,(function (m__$1,n){
if(cljs.core.truth_(m__$1.call(null,n))){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),(function (p1__1884146_SHARP_){
return cljs.core.apply.call(null,remove_fn,p1__1884146_SHARP_,nodes);
}));
} else {
return m__$1;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,m,nodes),adjacents);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {loom.graph.EditableGraph}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {loom.graph.Graph}
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
loom.graph.BasicEditableGraph = (function (nodeset,adj,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$ = true;

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
var iter__24933__auto__ = ((function (g__$1){
return (function loom$graph$iter__1884150(s__1884151){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__1884151__$1 = s__1884151;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884151__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n1 = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24929__auto__ = ((function (s__1884151__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__1884150_$_iter__1884152(s__1884153){
return (new cljs.core.LazySeq(null,((function (s__1884151__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__1884153__$1 = s__1884153;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1884153__$1);
if(temp__4425__auto____$1){
var s__1884153__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884153__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884153__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884155 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884154 = (0);
while(true){
if((i__1884154 < size__24932__auto__)){
var e = cljs.core._nth.call(null,c__24931__auto__,i__1884154);
cljs.core.chunk_append.call(null,b__1884155,e);

var G__1884168 = (i__1884154 + (1));
i__1884154 = G__1884168;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884155),loom$graph$iter__1884150_$_iter__1884152.call(null,cljs.core.chunk_rest.call(null,s__1884153__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884155),null);
}
} else {
var e = cljs.core.first.call(null,s__1884153__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__1884150_$_iter__1884152.call(null,cljs.core.rest.call(null,s__1884153__$2)));
}
} else {
return null;
}
break;
}
});})(s__1884151__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__1884151__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,loom$graph$iter__1884150.call(null,cljs.core.rest.call(null,s__1884151__$1)));
} else {
var G__1884169 = cljs.core.rest.call(null,s__1884151__$1);
s__1884151__$1 = G__1884169;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__24933__auto__.call(null,loom.graph.nodes.call(null,g__$1));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var self__ = this;
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_edges$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.out_edges,g__$1);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
var iter__24933__auto__ = ((function (g__$1){
return (function loom$graph$iter__1884156(s__1884157){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__1884157__$1 = s__1884157;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884157__$1);
if(temp__4425__auto__){
var s__1884157__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884157__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884157__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884159 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884158 = (0);
while(true){
if((i__1884158 < size__24932__auto__)){
var n2 = cljs.core._nth.call(null,c__24931__auto__,i__1884158);
cljs.core.chunk_append.call(null,b__1884159,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__1884170 = (i__1884158 + (1));
i__1884158 = G__1884170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884159),loom$graph$iter__1884156.call(null,cljs.core.chunk_rest.call(null,s__1884157__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884159),null);
}
} else {
var n2 = cljs.core.first.call(null,s__1884157__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__1884156.call(null,cljs.core.rest.call(null,s__1884157__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__24933__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$successors$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.successors,g__$1);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$successors$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24775__auto__,k__24776__auto__){
var self__ = this;
var this__24775__auto____$1 = this;
return cljs.core._lookup.call(null,this__24775__auto____$1,k__24776__auto__,null);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24777__auto__,k1884148,else__24778__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
var G__1884160 = (((k1884148 instanceof cljs.core.Keyword))?k1884148.fqn:null);
switch (G__1884160) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1884148,else__24778__auto__);

}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24789__auto__,writer__24790__auto__,opts__24791__auto__){
var self__ = this;
var this__24789__auto____$1 = this;
var pr_pair__24792__auto__ = ((function (this__24789__auto____$1){
return (function (keyval__24793__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24790__auto__,cljs.core.pr_writer,""," ","",opts__24791__auto__,keyval__24793__auto__);
});})(this__24789__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24790__auto__,pr_pair__24792__auto__,"#loom.graph.BasicEditableGraph{",", ","}",opts__24791__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1884147){
var self__ = this;
var G__1884147__$1 = this;
return (new cljs.core.RecordIter((0),G__1884147__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24773__auto__){
var self__ = this;
var this__24773__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24769__auto__){
var self__ = this;
var this__24769__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24779__auto__){
var self__ = this;
var this__24779__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24770__auto__){
var self__ = this;
var this__24770__auto____$1 = this;
var h__24596__auto__ = self__.__hash;
if(!((h__24596__auto__ == null))){
return h__24596__auto__;
} else {
var h__24596__auto____$1 = cljs.core.hash_imap.call(null,this__24770__auto____$1);
self__.__hash = h__24596__auto____$1;

return h__24596__auto____$1;
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24771__auto__,other__24772__auto__){
var self__ = this;
var this__24771__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24149__auto__ = other__24772__auto__;
if(cljs.core.truth_(and__24149__auto__)){
var and__24149__auto____$1 = (this__24771__auto____$1.constructor === other__24772__auto__.constructor);
if(and__24149__auto____$1){
return cljs.core.equiv_map.call(null,this__24771__auto____$1,other__24772__auto__);
} else {
return and__24149__auto____$1;
}
} else {
return and__24149__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$ = true;

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__1884161){
var vec__1884162 = p__1884161;
var n1 = cljs.core.nth.call(null,vec__1884162,(0),null);
var n2 = cljs.core.nth.call(null,vec__1884162,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var self__ = this;
var g__$1 = this;
var nbrs = cljs.core.mapcat.call(null,((function (g__$1){
return (function (p1__66951_SHARP_){
return loom.graph.successors.call(null,g__$1,p1__66951_SHARP_);
});})(g__$1))
,nodes);
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),((function (nbrs,g__$1){
return (function (p1__66952_SHARP_){
return cljs.core.apply.call(null,cljs.core.disj,p1__66952_SHARP_,nodes);
});})(nbrs,g__$1))
),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,nbrs,cljs.core.disj));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__1884163){
var vec__1884164 = p__1884163;
var n1 = cljs.core.nth.call(null,vec__1884164,(0),null);
var n2 = cljs.core.nth.call(null,vec__1884164,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24784__auto__,k__24785__auto__){
var self__ = this;
var this__24784__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__24785__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24784__auto____$1),self__.__meta),k__24785__auto__);
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24785__auto__)),null));
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24782__auto__,k__24783__auto__,G__1884147){
var self__ = this;
var this__24782__auto____$1 = this;
var pred__1884165 = cljs.core.keyword_identical_QMARK_;
var expr__1884166 = k__24783__auto__;
if(cljs.core.truth_(pred__1884165.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__1884166))){
return (new loom.graph.BasicEditableGraph(G__1884147,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884165.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__1884166))){
return (new loom.graph.BasicEditableGraph(self__.nodeset,G__1884147,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24783__auto__,G__1884147),null));
}
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24787__auto__){
var self__ = this;
var this__24787__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24774__auto__,G__1884147){
var self__ = this;
var this__24774__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,G__1884147,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24780__auto__,entry__24781__auto__){
var self__ = this;
var this__24780__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24781__auto__)){
return cljs.core._assoc.call(null,this__24780__auto____$1,cljs.core._nth.call(null,entry__24781__auto__,(0)),cljs.core._nth.call(null,entry__24781__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24780__auto____$1,entry__24781__auto__);
}
});

loom.graph.BasicEditableGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableGraph.cljs$lang$type = true;

loom.graph.BasicEditableGraph.cljs$lang$ctorPrSeq = (function (this__24809__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableGraph");
});

loom.graph.BasicEditableGraph.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"loom.graph/BasicEditableGraph");
});

loom.graph.__GT_BasicEditableGraph = (function loom$graph$__GT_BasicEditableGraph(nodeset,adj){
return (new loom.graph.BasicEditableGraph(nodeset,adj,null,null,null));
});

loom.graph.map__GT_BasicEditableGraph = (function loom$graph$map__GT_BasicEditableGraph(G__1884149){
return (new loom.graph.BasicEditableGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__1884149),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__1884149),null,cljs.core.dissoc.call(null,G__1884149,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {loom.graph.EditableGraph}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {loom.graph.Graph}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {loom.graph.Digraph}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
loom.graph.BasicEditableDigraph = (function (nodeset,adj,in$,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.in$ = in$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$ = true;

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
var iter__24933__auto__ = ((function (g__$1){
return (function loom$graph$iter__1884175(s__1884176){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__1884176__$1 = s__1884176;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884176__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n1 = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24929__auto__ = ((function (s__1884176__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__1884175_$_iter__1884177(s__1884178){
return (new cljs.core.LazySeq(null,((function (s__1884176__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__1884178__$1 = s__1884178;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1884178__$1);
if(temp__4425__auto____$1){
var s__1884178__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884178__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884178__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884180 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884179 = (0);
while(true){
if((i__1884179 < size__24932__auto__)){
var e = cljs.core._nth.call(null,c__24931__auto__,i__1884179);
cljs.core.chunk_append.call(null,b__1884180,e);

var G__1884197 = (i__1884179 + (1));
i__1884179 = G__1884197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884180),loom$graph$iter__1884175_$_iter__1884177.call(null,cljs.core.chunk_rest.call(null,s__1884178__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884180),null);
}
} else {
var e = cljs.core.first.call(null,s__1884178__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__1884175_$_iter__1884177.call(null,cljs.core.rest.call(null,s__1884178__$2)));
}
} else {
return null;
}
break;
}
});})(s__1884176__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__1884176__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,loom$graph$iter__1884175.call(null,cljs.core.rest.call(null,s__1884176__$1)));
} else {
var G__1884198 = cljs.core.rest.call(null,s__1884176__$1);
s__1884176__$1 = G__1884198;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__24933__auto__.call(null,loom.graph.nodes.call(null,g__$1));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var self__ = this;
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_edges$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.out_edges,g__$1);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
var iter__24933__auto__ = ((function (g__$1){
return (function loom$graph$iter__1884181(s__1884182){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__1884182__$1 = s__1884182;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884182__$1);
if(temp__4425__auto__){
var s__1884182__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884182__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884182__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884184 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884183 = (0);
while(true){
if((i__1884183 < size__24932__auto__)){
var n2 = cljs.core._nth.call(null,c__24931__auto__,i__1884183);
cljs.core.chunk_append.call(null,b__1884184,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__1884199 = (i__1884183 + (1));
i__1884183 = G__1884199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884184),loom$graph$iter__1884181.call(null,cljs.core.chunk_rest.call(null,s__1884182__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884184),null);
}
} else {
var n2 = cljs.core.first.call(null,s__1884182__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__1884181.call(null,cljs.core.rest.call(null,s__1884182__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__24933__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$successors$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.successors,g__$1);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$successors$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24775__auto__,k__24776__auto__){
var self__ = this;
var this__24775__auto____$1 = this;
return cljs.core._lookup.call(null,this__24775__auto____$1,k__24776__auto__,null);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24777__auto__,k1884173,else__24778__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
var G__1884185 = (((k1884173 instanceof cljs.core.Keyword))?k1884173.fqn:null);
switch (G__1884185) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
case "in":
return self__.in$;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1884173,else__24778__auto__);

}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24789__auto__,writer__24790__auto__,opts__24791__auto__){
var self__ = this;
var this__24789__auto____$1 = this;
var pr_pair__24792__auto__ = ((function (this__24789__auto____$1){
return (function (keyval__24793__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24790__auto__,cljs.core.pr_writer,""," ","",opts__24791__auto__,keyval__24793__auto__);
});})(this__24789__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24790__auto__,pr_pair__24792__auto__,"#loom.graph.BasicEditableDigraph{",", ","}",opts__24791__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1884172){
var self__ = this;
var G__1884172__$1 = this;
return (new cljs.core.RecordIter((0),G__1884172__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24773__auto__){
var self__ = this;
var this__24773__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24769__auto__){
var self__ = this;
var this__24769__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24779__auto__){
var self__ = this;
var this__24779__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24770__auto__){
var self__ = this;
var this__24770__auto____$1 = this;
var h__24596__auto__ = self__.__hash;
if(!((h__24596__auto__ == null))){
return h__24596__auto__;
} else {
var h__24596__auto____$1 = cljs.core.hash_imap.call(null,this__24770__auto____$1);
self__.__hash = h__24596__auto____$1;

return h__24596__auto____$1;
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24771__auto__,other__24772__auto__){
var self__ = this;
var this__24771__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24149__auto__ = other__24772__auto__;
if(cljs.core.truth_(and__24149__auto__)){
var and__24149__auto____$1 = (this__24771__auto____$1.constructor === other__24772__auto__.constructor);
if(and__24149__auto____$1){
return cljs.core.equiv_map.call(null,this__24771__auto____$1,other__24772__auto__);
} else {
return and__24149__auto____$1;
}
} else {
return and__24149__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$ = true;

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__1884186){
var vec__1884187 = p__1884186;
var n1 = cljs.core.nth.call(null,vec__1884187,(0),null);
var n2 = cljs.core.nth.call(null,vec__1884187,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var self__ = this;
var g__$1 = this;
var ins = cljs.core.mapcat.call(null,((function (g__$1){
return (function (p1__69718_SHARP_){
return loom.graph.predecessors.call(null,g__$1,p1__69718_SHARP_);
});})(g__$1))
,nodes);
var outs = cljs.core.mapcat.call(null,((function (ins,g__$1){
return (function (p1__69719_SHARP_){
return loom.graph.successors.call(null,g__$1,p1__69719_SHARP_);
});})(ins,g__$1))
,nodes);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),((function (ins,outs,g__$1){
return (function (p1__69720_SHARP_){
return cljs.core.apply.call(null,cljs.core.disj,p1__69720_SHARP_,nodes);
});})(ins,outs,g__$1))
),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,ins,cljs.core.disj)),new cljs.core.Keyword(null,"in","in",-1531184865),loom.graph.remove_adj_nodes.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,outs,cljs.core.disj));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__1884188){
var vec__1884189 = p__1884188;
var n1 = cljs.core.nth.call(null,vec__1884189,(0),null);
var n2 = cljs.core.nth.call(null,vec__1884189,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24784__auto__,k__24785__auto__){
var self__ = this;
var this__24784__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__24785__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24784__auto____$1),self__.__meta),k__24785__auto__);
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24785__auto__)),null));
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24782__auto__,k__24783__auto__,G__1884172){
var self__ = this;
var this__24782__auto____$1 = this;
var pred__1884190 = cljs.core.keyword_identical_QMARK_;
var expr__1884191 = k__24783__auto__;
if(cljs.core.truth_(pred__1884190.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__1884191))){
return (new loom.graph.BasicEditableDigraph(G__1884172,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884190.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__1884191))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,G__1884172,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884190.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__1884191))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,G__1884172,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24783__auto__,G__1884172),null));
}
}
}
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$ = true;

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$predecessors$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.predecessors,g__$1);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$predecessors$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null)));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_edges$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.in_edges,g__$1);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
var iter__24933__auto__ = ((function (g__$1){
return (function loom$graph$iter__1884193(s__1884194){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__1884194__$1 = s__1884194;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884194__$1);
if(temp__4425__auto__){
var s__1884194__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884194__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884194__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884196 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884195 = (0);
while(true){
if((i__1884195 < size__24932__auto__)){
var n2 = cljs.core._nth.call(null,c__24931__auto__,i__1884195);
cljs.core.chunk_append.call(null,b__1884196,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__1884201 = (i__1884195 + (1));
i__1884195 = G__1884201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884196),loom$graph$iter__1884193.call(null,cljs.core.chunk_rest.call(null,s__1884194__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884196),null);
}
} else {
var n2 = cljs.core.first.call(null,s__1884194__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__1884193.call(null,cljs.core.rest.call(null,s__1884194__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__24933__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24787__auto__){
var self__ = this;
var this__24787__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24774__auto__,G__1884172){
var self__ = this;
var this__24774__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,G__1884172,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24780__auto__,entry__24781__auto__){
var self__ = this;
var this__24780__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24781__auto__)){
return cljs.core._assoc.call(null,this__24780__auto____$1,cljs.core._nth.call(null,entry__24781__auto__,(0)),cljs.core._nth.call(null,entry__24781__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24780__auto____$1,entry__24781__auto__);
}
});

loom.graph.BasicEditableDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableDigraph.cljs$lang$type = true;

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrSeq = (function (this__24809__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableDigraph");
});

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"loom.graph/BasicEditableDigraph");
});

loom.graph.__GT_BasicEditableDigraph = (function loom$graph$__GT_BasicEditableDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableDigraph(nodeset,adj,in$,null,null,null));
});

loom.graph.map__GT_BasicEditableDigraph = (function loom$graph$map__GT_BasicEditableDigraph(G__1884174){
return (new loom.graph.BasicEditableDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__1884174),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__1884174),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__1884174),null,cljs.core.dissoc.call(null,G__1884174,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {loom.graph.EditableGraph}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {loom.graph.Graph}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {loom.graph.WeightedGraph}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
loom.graph.BasicEditableWeightedGraph = (function (nodeset,adj,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$ = true;

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
var iter__24933__auto__ = ((function (g__$1){
return (function loom$graph$iter__1884205(s__1884206){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__1884206__$1 = s__1884206;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884206__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n1 = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24929__auto__ = ((function (s__1884206__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__1884205_$_iter__1884207(s__1884208){
return (new cljs.core.LazySeq(null,((function (s__1884206__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__1884208__$1 = s__1884208;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1884208__$1);
if(temp__4425__auto____$1){
var s__1884208__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884208__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884208__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884210 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884209 = (0);
while(true){
if((i__1884209 < size__24932__auto__)){
var e = cljs.core._nth.call(null,c__24931__auto__,i__1884209);
cljs.core.chunk_append.call(null,b__1884210,e);

var G__1884224 = (i__1884209 + (1));
i__1884209 = G__1884224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884210),loom$graph$iter__1884205_$_iter__1884207.call(null,cljs.core.chunk_rest.call(null,s__1884208__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884210),null);
}
} else {
var e = cljs.core.first.call(null,s__1884208__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__1884205_$_iter__1884207.call(null,cljs.core.rest.call(null,s__1884208__$2)));
}
} else {
return null;
}
break;
}
});})(s__1884206__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__1884206__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,loom$graph$iter__1884205.call(null,cljs.core.rest.call(null,s__1884206__$1)));
} else {
var G__1884225 = cljs.core.rest.call(null,s__1884206__$1);
s__1884206__$1 = G__1884225;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__24933__auto__.call(null,loom.graph.nodes.call(null,g__$1));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var self__ = this;
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_edges$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.out_edges,g__$1);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
var iter__24933__auto__ = ((function (g__$1){
return (function loom$graph$iter__1884211(s__1884212){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__1884212__$1 = s__1884212;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884212__$1);
if(temp__4425__auto__){
var s__1884212__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884212__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884212__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884214 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884213 = (0);
while(true){
if((i__1884213 < size__24932__auto__)){
var n2 = cljs.core._nth.call(null,c__24931__auto__,i__1884213);
cljs.core.chunk_append.call(null,b__1884214,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__1884226 = (i__1884213 + (1));
i__1884213 = G__1884226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884214),loom$graph$iter__1884211.call(null,cljs.core.chunk_rest.call(null,s__1884212__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884214),null);
}
} else {
var n2 = cljs.core.first.call(null,s__1884212__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__1884211.call(null,cljs.core.rest.call(null,s__1884212__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__24933__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$successors$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.successors,g__$1);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$successors$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.keys.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24775__auto__,k__24776__auto__){
var self__ = this;
var this__24775__auto____$1 = this;
return cljs.core._lookup.call(null,this__24775__auto____$1,k__24776__auto__,null);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24777__auto__,k1884203,else__24778__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
var G__1884215 = (((k1884203 instanceof cljs.core.Keyword))?k1884203.fqn:null);
switch (G__1884215) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1884203,else__24778__auto__);

}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24789__auto__,writer__24790__auto__,opts__24791__auto__){
var self__ = this;
var this__24789__auto____$1 = this;
var pr_pair__24792__auto__ = ((function (this__24789__auto____$1){
return (function (keyval__24793__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24790__auto__,cljs.core.pr_writer,""," ","",opts__24791__auto__,keyval__24793__auto__);
});})(this__24789__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24790__auto__,pr_pair__24792__auto__,"#loom.graph.BasicEditableWeightedGraph{",", ","}",opts__24791__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1884202){
var self__ = this;
var G__1884202__$1 = this;
return (new cljs.core.RecordIter((0),G__1884202__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24773__auto__){
var self__ = this;
var this__24773__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24769__auto__){
var self__ = this;
var this__24769__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24779__auto__){
var self__ = this;
var this__24779__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24770__auto__){
var self__ = this;
var this__24770__auto____$1 = this;
var h__24596__auto__ = self__.__hash;
if(!((h__24596__auto__ == null))){
return h__24596__auto__;
} else {
var h__24596__auto____$1 = cljs.core.hash_imap.call(null,this__24770__auto____$1);
self__.__hash = h__24596__auto____$1;

return h__24596__auto____$1;
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24771__auto__,other__24772__auto__){
var self__ = this;
var this__24771__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24149__auto__ = other__24772__auto__;
if(cljs.core.truth_(and__24149__auto__)){
var and__24149__auto____$1 = (this__24771__auto____$1.constructor === other__24772__auto__.constructor);
if(and__24149__auto____$1){
return cljs.core.equiv_map.call(null,this__24771__auto____$1,other__24772__auto__);
} else {
return and__24149__auto____$1;
}
} else {
return and__24149__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$ = true;

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__1884216){
var vec__1884217 = p__1884216;
var n1 = cljs.core.nth.call(null,vec__1884217,(0),null);
var n2 = cljs.core.nth.call(null,vec__1884217,(1),null);
var vec__1884218 = cljs.core.nthnext.call(null,vec__1884217,(2));
var w = cljs.core.nth.call(null,vec__1884218,(0),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__24161__auto__ = w;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2,n1], null),(function (){var or__24161__auto__ = w;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})());
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var self__ = this;
var g__$1 = this;
var nbrs = cljs.core.mapcat.call(null,((function (g__$1){
return (function (p1__70923_SHARP_){
return loom.graph.successors.call(null,g__$1,p1__70923_SHARP_);
});})(g__$1))
,nodes);
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),((function (nbrs,g__$1){
return (function (p1__70924_SHARP_){
return cljs.core.apply.call(null,cljs.core.disj,p1__70924_SHARP_,nodes);
});})(nbrs,g__$1))
),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,nbrs,cljs.core.dissoc));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__1884219){
var vec__1884220 = p__1884219;
var n1 = cljs.core.nth.call(null,vec__1884220,(0),null);
var n2 = cljs.core.nth.call(null,vec__1884220,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.dissoc,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24784__auto__,k__24785__auto__){
var self__ = this;
var this__24784__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__24785__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24784__auto____$1),self__.__meta),k__24785__auto__);
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24785__auto__)),null));
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24782__auto__,k__24783__auto__,G__1884202){
var self__ = this;
var this__24782__auto____$1 = this;
var pred__1884221 = cljs.core.keyword_identical_QMARK_;
var expr__1884222 = k__24783__auto__;
if(cljs.core.truth_(pred__1884221.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__1884222))){
return (new loom.graph.BasicEditableWeightedGraph(G__1884202,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884221.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__1884222))){
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,G__1884202,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24783__auto__,G__1884202),null));
}
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24787__auto__){
var self__ = this;
var this__24787__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$ = true;

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.weight,g__$1);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight$arity$2 = (function (g,e){
var self__ = this;
var g__$1 = this;
return loom.graph.weight.call(null,g__$1,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight$arity$3 = (function (g,n1,n2){
var self__ = this;
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24774__auto__,G__1884202){
var self__ = this;
var this__24774__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,G__1884202,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24780__auto__,entry__24781__auto__){
var self__ = this;
var this__24780__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24781__auto__)){
return cljs.core._assoc.call(null,this__24780__auto____$1,cljs.core._nth.call(null,entry__24781__auto__,(0)),cljs.core._nth.call(null,entry__24781__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24780__auto____$1,entry__24781__auto__);
}
});

loom.graph.BasicEditableWeightedGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrSeq = (function (this__24809__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableWeightedGraph");
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"loom.graph/BasicEditableWeightedGraph");
});

loom.graph.__GT_BasicEditableWeightedGraph = (function loom$graph$__GT_BasicEditableWeightedGraph(nodeset,adj){
return (new loom.graph.BasicEditableWeightedGraph(nodeset,adj,null,null,null));
});

loom.graph.map__GT_BasicEditableWeightedGraph = (function loom$graph$map__GT_BasicEditableWeightedGraph(G__1884204){
return (new loom.graph.BasicEditableWeightedGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__1884204),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__1884204),null,cljs.core.dissoc.call(null,G__1884204,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {loom.graph.EditableGraph}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {loom.graph.Graph}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {loom.graph.Digraph}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {loom.graph.WeightedGraph}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
loom.graph.BasicEditableWeightedDigraph = (function (nodeset,adj,in$,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.in$ = in$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$ = true;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
var iter__24933__auto__ = ((function (g__$1){
return (function loom$graph$iter__1884231(s__1884232){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__1884232__$1 = s__1884232;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884232__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n1 = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24929__auto__ = ((function (s__1884232__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__1884231_$_iter__1884233(s__1884234){
return (new cljs.core.LazySeq(null,((function (s__1884232__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__1884234__$1 = s__1884234;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1884234__$1);
if(temp__4425__auto____$1){
var s__1884234__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884234__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884234__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884236 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884235 = (0);
while(true){
if((i__1884235 < size__24932__auto__)){
var e = cljs.core._nth.call(null,c__24931__auto__,i__1884235);
cljs.core.chunk_append.call(null,b__1884236,e);

var G__1884256 = (i__1884235 + (1));
i__1884235 = G__1884256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884236),loom$graph$iter__1884231_$_iter__1884233.call(null,cljs.core.chunk_rest.call(null,s__1884234__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884236),null);
}
} else {
var e = cljs.core.first.call(null,s__1884234__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__1884231_$_iter__1884233.call(null,cljs.core.rest.call(null,s__1884234__$2)));
}
} else {
return null;
}
break;
}
});})(s__1884232__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__1884232__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,loom$graph$iter__1884231.call(null,cljs.core.rest.call(null,s__1884232__$1)));
} else {
var G__1884257 = cljs.core.rest.call(null,s__1884232__$1);
s__1884232__$1 = G__1884257;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__24933__auto__.call(null,loom.graph.nodes.call(null,g__$1));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var self__ = this;
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_edges$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.out_edges,g__$1);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
var iter__24933__auto__ = ((function (g__$1){
return (function loom$graph$iter__1884237(s__1884238){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__1884238__$1 = s__1884238;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884238__$1);
if(temp__4425__auto__){
var s__1884238__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884238__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884238__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884240 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884239 = (0);
while(true){
if((i__1884239 < size__24932__auto__)){
var n2 = cljs.core._nth.call(null,c__24931__auto__,i__1884239);
cljs.core.chunk_append.call(null,b__1884240,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__1884258 = (i__1884239 + (1));
i__1884239 = G__1884258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884240),loom$graph$iter__1884237.call(null,cljs.core.chunk_rest.call(null,s__1884238__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884240),null);
}
} else {
var n2 = cljs.core.first.call(null,s__1884238__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__1884237.call(null,cljs.core.rest.call(null,s__1884238__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__24933__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$successors$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.successors,g__$1);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$successors$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.keys.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24775__auto__,k__24776__auto__){
var self__ = this;
var this__24775__auto____$1 = this;
return cljs.core._lookup.call(null,this__24775__auto____$1,k__24776__auto__,null);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24777__auto__,k1884229,else__24778__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
var G__1884241 = (((k1884229 instanceof cljs.core.Keyword))?k1884229.fqn:null);
switch (G__1884241) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
case "in":
return self__.in$;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1884229,else__24778__auto__);

}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24789__auto__,writer__24790__auto__,opts__24791__auto__){
var self__ = this;
var this__24789__auto____$1 = this;
var pr_pair__24792__auto__ = ((function (this__24789__auto____$1){
return (function (keyval__24793__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24790__auto__,cljs.core.pr_writer,""," ","",opts__24791__auto__,keyval__24793__auto__);
});})(this__24789__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24790__auto__,pr_pair__24792__auto__,"#loom.graph.BasicEditableWeightedDigraph{",", ","}",opts__24791__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1884228){
var self__ = this;
var G__1884228__$1 = this;
return (new cljs.core.RecordIter((0),G__1884228__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24773__auto__){
var self__ = this;
var this__24773__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24769__auto__){
var self__ = this;
var this__24769__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24779__auto__){
var self__ = this;
var this__24779__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24770__auto__){
var self__ = this;
var this__24770__auto____$1 = this;
var h__24596__auto__ = self__.__hash;
if(!((h__24596__auto__ == null))){
return h__24596__auto__;
} else {
var h__24596__auto____$1 = cljs.core.hash_imap.call(null,this__24770__auto____$1);
self__.__hash = h__24596__auto____$1;

return h__24596__auto____$1;
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24771__auto__,other__24772__auto__){
var self__ = this;
var this__24771__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24149__auto__ = other__24772__auto__;
if(cljs.core.truth_(and__24149__auto__)){
var and__24149__auto____$1 = (this__24771__auto____$1.constructor === other__24772__auto__.constructor);
if(and__24149__auto____$1){
return cljs.core.equiv_map.call(null,this__24771__auto____$1,other__24772__auto__);
} else {
return and__24149__auto____$1;
}
} else {
return and__24149__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$ = true;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__1884242){
var vec__1884243 = p__1884242;
var n1 = cljs.core.nth.call(null,vec__1884243,(0),null);
var n2 = cljs.core.nth.call(null,vec__1884243,(1),null);
var vec__1884244 = cljs.core.nthnext.call(null,vec__1884243,(2));
var w = cljs.core.nth.call(null,vec__1884244,(0),null);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__24161__auto__ = w;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var self__ = this;
var g__$1 = this;
var ins = cljs.core.mapcat.call(null,((function (g__$1){
return (function (p1__72122_SHARP_){
return loom.graph.predecessors.call(null,g__$1,p1__72122_SHARP_);
});})(g__$1))
,nodes);
var outs = cljs.core.mapcat.call(null,((function (ins,g__$1){
return (function (p1__72123_SHARP_){
return loom.graph.successors.call(null,g__$1,p1__72123_SHARP_);
});})(ins,g__$1))
,nodes);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),((function (ins,outs,g__$1){
return (function (p1__72124_SHARP_){
return cljs.core.apply.call(null,cljs.core.disj,p1__72124_SHARP_,nodes);
});})(ins,outs,g__$1))
),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,ins,cljs.core.dissoc)),new cljs.core.Keyword(null,"in","in",-1531184865),loom.graph.remove_adj_nodes.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,outs,cljs.core.disj));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__1884245){
var vec__1884246 = p__1884245;
var n1 = cljs.core.nth.call(null,vec__1884246,(0),null);
var n2 = cljs.core.nth.call(null,vec__1884246,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24784__auto__,k__24785__auto__){
var self__ = this;
var this__24784__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__24785__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24784__auto____$1),self__.__meta),k__24785__auto__);
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24785__auto__)),null));
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24782__auto__,k__24783__auto__,G__1884228){
var self__ = this;
var this__24782__auto____$1 = this;
var pred__1884247 = cljs.core.keyword_identical_QMARK_;
var expr__1884248 = k__24783__auto__;
if(cljs.core.truth_(pred__1884247.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__1884248))){
return (new loom.graph.BasicEditableWeightedDigraph(G__1884228,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884247.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__1884248))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,G__1884228,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884247.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__1884248))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,G__1884228,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24783__auto__,G__1884228),null));
}
}
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$ = true;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$predecessors$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.predecessors,g__$1);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$predecessors$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_edges$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.in_edges,g__$1);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
var iter__24933__auto__ = ((function (g__$1){
return (function loom$graph$iter__1884250(s__1884251){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__1884251__$1 = s__1884251;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884251__$1);
if(temp__4425__auto__){
var s__1884251__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884251__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884251__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884253 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884252 = (0);
while(true){
if((i__1884252 < size__24932__auto__)){
var n2 = cljs.core._nth.call(null,c__24931__auto__,i__1884252);
cljs.core.chunk_append.call(null,b__1884253,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__1884260 = (i__1884252 + (1));
i__1884252 = G__1884260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884253),loom$graph$iter__1884250.call(null,cljs.core.chunk_rest.call(null,s__1884251__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884253),null);
}
} else {
var n2 = cljs.core.first.call(null,s__1884251__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__1884250.call(null,cljs.core.rest.call(null,s__1884251__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__24933__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (tg,p__1884254){
var vec__1884255 = p__1884254;
var n1 = cljs.core.nth.call(null,vec__1884255,(0),null);
var n2 = cljs.core.nth.call(null,vec__1884255,(1),null);
return loom.graph.add_edges_STAR_.call(null,tg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,n1,loom.graph.weight.call(null,g__$1,n1,n2)], null)], null));
});})(g__$1))
,cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY),loom.graph.edges.call(null,g__$1));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24787__auto__){
var self__ = this;
var this__24787__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$ = true;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.weight,g__$1);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight$arity$2 = (function (g,e){
var self__ = this;
var g__$1 = this;
return loom.graph.weight.call(null,g__$1,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight$arity$3 = (function (g,n1,n2){
var self__ = this;
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24774__auto__,G__1884228){
var self__ = this;
var this__24774__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,G__1884228,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24780__auto__,entry__24781__auto__){
var self__ = this;
var this__24780__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24781__auto__)){
return cljs.core._assoc.call(null,this__24780__auto____$1,cljs.core._nth.call(null,entry__24781__auto__,(0)),cljs.core._nth.call(null,entry__24781__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24780__auto____$1,entry__24781__auto__);
}
});

loom.graph.BasicEditableWeightedDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrSeq = (function (this__24809__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableWeightedDigraph");
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"loom.graph/BasicEditableWeightedDigraph");
});

loom.graph.__GT_BasicEditableWeightedDigraph = (function loom$graph$__GT_BasicEditableWeightedDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableWeightedDigraph(nodeset,adj,in$,null,null,null));
});

loom.graph.map__GT_BasicEditableWeightedDigraph = (function loom$graph$map__GT_BasicEditableWeightedDigraph(G__1884230){
return (new loom.graph.BasicEditableWeightedDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__1884230),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__1884230),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__1884230),null,cljs.core.dissoc.call(null,G__1884230,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)),null));
});

loom.graph.call_or_return = (function loom$graph$call_or_return(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1884263 = arguments.length;
var i__25220__auto___1884264 = (0);
while(true){
if((i__25220__auto___1884264 < len__25219__auto___1884263)){
args__25226__auto__.push((arguments[i__25220__auto___1884264]));

var G__1884265 = (i__25220__auto___1884264 + (1));
i__25220__auto___1884264 = G__1884265;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((1) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((1)),(0))):null);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25227__auto__);
});

loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if((cljs.core.fn_QMARK_.call(null,f)) || (((f instanceof clojure.lang.IFn)) && (cljs.core.seq.call(null,args)))){
return cljs.core.apply.call(null,f,args);
} else {
return f;
}
});

loom.graph.call_or_return.cljs$lang$maxFixedArity = (1);

loom.graph.call_or_return.cljs$lang$applyTo = (function (seq1884261){
var G__1884262 = cljs.core.first.call(null,seq1884261);
var seq1884261__$1 = cljs.core.next.call(null,seq1884261);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(G__1884262,seq1884261__$1);
});
loom.graph.default_flygraph_graph_impl = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Symbol(null,"g","g",-916345864,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"g","g",-916345864,null)))),cljs.core.list(new cljs.core.Symbol(null,"call-or-return","call-or-return",2042705661,null),cljs.core.list(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Symbol(null,"g","g",-916345864,null))),cljs.core.list(new cljs.core.Symbol(null,"bf-traverse","bf-traverse",-1074971653,null),cljs.core.list(new cljs.core.Symbol(null,"successors","successors",401235113,null),new cljs.core.Symbol(null,"g","g",-916345864,null)),cljs.core.list(new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"g","g",-916345864,null))))),new cljs.core.Keyword(null,"edges","edges",-694791395),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Symbol(null,"g","g",-916345864,null)),cljs.core.list(new cljs.core.Symbol(null,"call-or-return","call-or-return",2042705661,null),cljs.core.list(new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Symbol(null,"g","g",-916345864,null))),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),cljs.core.list(new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"g","g",-916345864,null)),new cljs.core.Symbol(null,"nbr","nbr",-1618248259,null),cljs.core.list(new cljs.core.Symbol(null,"successors","successors",401235113,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"nbr","nbr",-1618248259,null)], null)))),new cljs.core.Keyword(null,"successors","successors",-1239296414),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null)], null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"successors","successors",401235113,null),new cljs.core.Symbol(null,"g","g",-916345864,null))),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"call-or-return","call-or-return",2042705661,null),cljs.core.list(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Symbol(null,"g","g",-916345864,null)),new cljs.core.Symbol(null,"node","node",-2073234571,null)))),new cljs.core.Keyword(null,"out-degree","out-degree",669706144),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"successors","successors",401235113,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)))),new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068),cljs.core.get_in.call(null,loom.graph.default_graph_impls,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"out-edges","out-edges",-1470029068)], null)),new cljs.core.Keyword(null,"has-node?","has-node?",723558202),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"node","node",-2073234571,null),null], null), null),cljs.core.list(new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"g","g",-916345864,null))))], null);
loom.graph.default_flygraph_digraph_impl = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"predecessors","predecessors",229913357),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"call-or-return","call-or-return",2042705661,null),cljs.core.list(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Symbol(null,"g","g",-916345864,null)),new cljs.core.Symbol(null,"node","node",-2073234571,null))),new cljs.core.Keyword(null,"in-degree","in-degree",-519033808),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"predecessors","predecessors",1870444884,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)))),new cljs.core.Keyword(null,"in-edges","in-edges",221484951),cljs.core.get_in.call(null,loom.graph.default_digraph_impl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"in-edges","in-edges",221484951)], null))], null);
loom.graph.default_flygraph_weighted_impl = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weight","weight",-1262796205),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null)], null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"g","g",-916345864,null))),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"g","g",-916345864,null),cljs.core.list(new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),cljs.core.list(new cljs.core.Symbol(null,"dest","dest",1605962050,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null)], null),cljs.core.list(new cljs.core.Symbol(null,"call-or-return","call-or-return",2042705661,null),cljs.core.list(new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Symbol(null,"g","g",-916345864,null)),new cljs.core.Symbol(null,"n1","n1",-47149660,null),new cljs.core.Symbol(null,"n2","n2",-1172545453,null))))], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {loom.graph.Graph}
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
loom.graph.FlyGraph = (function (fnodes,fedges,fsuccessors,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
loom.graph.FlyGraph.prototype.loom$graph$Graph$ = true;

loom.graph.FlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
if(cljs.core.truth_((function (){var or__24161__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g__$1),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__24933__auto__ = ((function (g__$1){
return (function loom$graph$iter__1884269(s__1884270){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__1884270__$1 = s__1884270;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884270__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24929__auto__ = ((function (s__1884270__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__1884269_$_iter__1884271(s__1884272){
return (new cljs.core.LazySeq(null,((function (s__1884270__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__1884272__$1 = s__1884272;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1884272__$1);
if(temp__4425__auto____$1){
var s__1884272__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884272__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884272__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884274 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884273 = (0);
while(true){
if((i__1884273 < size__24932__auto__)){
var nbr = cljs.core._nth.call(null,c__24931__auto__,i__1884273);
cljs.core.chunk_append.call(null,b__1884274,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__1884283 = (i__1884273 + (1));
i__1884273 = G__1884283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884274),loom$graph$iter__1884269_$_iter__1884271.call(null,cljs.core.chunk_rest.call(null,s__1884272__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884274),null);
}
} else {
var nbr = cljs.core.first.call(null,s__1884272__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__1884269_$_iter__1884271.call(null,cljs.core.rest.call(null,s__1884272__$2)));
}
} else {
return null;
}
break;
}
});})(s__1884270__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__1884270__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,loom$graph$iter__1884269.call(null,cljs.core.rest.call(null,s__1884270__$1)));
} else {
var G__1884284 = cljs.core.rest.call(null,s__1884270__$1);
s__1884270__$1 = G__1884284;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__24933__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$successors$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.successors,g__$1);
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$successors$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$out_edges$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.out_edges,g__$1);
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
var iter__24933__auto__ = ((function (g__$1){
return (function loom$graph$iter__1884275(s__1884276){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__1884276__$1 = s__1884276;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884276__$1);
if(temp__4425__auto__){
var s__1884276__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884276__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884276__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884278 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884277 = (0);
while(true){
if((i__1884277 < size__24932__auto__)){
var n2 = cljs.core._nth.call(null,c__24931__auto__,i__1884277);
cljs.core.chunk_append.call(null,b__1884278,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__1884285 = (i__1884277 + (1));
i__1884277 = G__1884285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884278),loom$graph$iter__1884275.call(null,cljs.core.chunk_rest.call(null,s__1884276__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884278),null);
}
} else {
var n2 = cljs.core.first.call(null,s__1884276__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__1884275.call(null,cljs.core.rest.call(null,s__1884276__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__24933__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24775__auto__,k__24776__auto__){
var self__ = this;
var this__24775__auto____$1 = this;
return cljs.core._lookup.call(null,this__24775__auto____$1,k__24776__auto__,null);
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24777__auto__,k1884267,else__24778__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
var G__1884279 = (((k1884267 instanceof cljs.core.Keyword))?k1884267.fqn:null);
switch (G__1884279) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1884267,else__24778__auto__);

}
});

loom.graph.FlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24789__auto__,writer__24790__auto__,opts__24791__auto__){
var self__ = this;
var this__24789__auto____$1 = this;
var pr_pair__24792__auto__ = ((function (this__24789__auto____$1){
return (function (keyval__24793__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24790__auto__,cljs.core.pr_writer,""," ","",opts__24791__auto__,keyval__24793__auto__);
});})(this__24789__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24790__auto__,pr_pair__24792__auto__,"#loom.graph.FlyGraph{",", ","}",opts__24791__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1884266){
var self__ = this;
var G__1884266__$1 = this;
return (new cljs.core.RecordIter((0),G__1884266__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.FlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24773__auto__){
var self__ = this;
var this__24773__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24769__auto__){
var self__ = this;
var this__24769__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24779__auto__){
var self__ = this;
var this__24779__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24770__auto__){
var self__ = this;
var this__24770__auto____$1 = this;
var h__24596__auto__ = self__.__hash;
if(!((h__24596__auto__ == null))){
return h__24596__auto__;
} else {
var h__24596__auto____$1 = cljs.core.hash_imap.call(null,this__24770__auto____$1);
self__.__hash = h__24596__auto____$1;

return h__24596__auto____$1;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24771__auto__,other__24772__auto__){
var self__ = this;
var this__24771__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24149__auto__ = other__24772__auto__;
if(cljs.core.truth_(and__24149__auto__)){
var and__24149__auto____$1 = (this__24771__auto____$1.constructor === other__24772__auto__.constructor);
if(and__24149__auto____$1){
return cljs.core.equiv_map.call(null,this__24771__auto____$1,other__24772__auto__);
} else {
return and__24149__auto____$1;
}
} else {
return and__24149__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24784__auto__,k__24785__auto__){
var self__ = this;
var this__24784__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null], null), null),k__24785__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24784__auto____$1),self__.__meta),k__24785__auto__);
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24785__auto__)),null));
}
});

loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24782__auto__,k__24783__auto__,G__1884266){
var self__ = this;
var this__24782__auto____$1 = this;
var pred__1884280 = cljs.core.keyword_identical_QMARK_;
var expr__1884281 = k__24783__auto__;
if(cljs.core.truth_(pred__1884280.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__1884281))){
return (new loom.graph.FlyGraph(G__1884266,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884280.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__1884281))){
return (new loom.graph.FlyGraph(self__.fnodes,G__1884266,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884280.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__1884281))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,G__1884266,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884280.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__1884281))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__1884266,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24783__auto__,G__1884266),null));
}
}
}
}
});

loom.graph.FlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24787__auto__){
var self__ = this;
var this__24787__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24774__auto__,G__1884266){
var self__ = this;
var this__24774__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,G__1884266,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24780__auto__,entry__24781__auto__){
var self__ = this;
var this__24780__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24781__auto__)){
return cljs.core._assoc.call(null,this__24780__auto____$1,cljs.core._nth.call(null,entry__24781__auto__,(0)),cljs.core._nth.call(null,entry__24781__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24780__auto____$1,entry__24781__auto__);
}
});

loom.graph.FlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyGraph.cljs$lang$type = true;

loom.graph.FlyGraph.cljs$lang$ctorPrSeq = (function (this__24809__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/FlyGraph");
});

loom.graph.FlyGraph.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"loom.graph/FlyGraph");
});

loom.graph.__GT_FlyGraph = (function loom$graph$__GT_FlyGraph(fnodes,fedges,fsuccessors,start){
return (new loom.graph.FlyGraph(fnodes,fedges,fsuccessors,start,null,null,null));
});

loom.graph.map__GT_FlyGraph = (function loom$graph$map__GT_FlyGraph(G__1884268){
return (new loom.graph.FlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__1884268),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__1884268),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__1884268),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__1884268),null,cljs.core.dissoc.call(null,G__1884268,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {loom.graph.Graph}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {loom.graph.Digraph}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
loom.graph.FlyDigraph = (function (fnodes,fedges,fsuccessors,fpredecessors,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.fpredecessors = fpredecessors;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
loom.graph.FlyDigraph.prototype.loom$graph$Graph$ = true;

loom.graph.FlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
if(cljs.core.truth_((function (){var or__24161__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g__$1),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__24933__auto__ = ((function (g__$1){
return (function loom$graph$iter__1884290(s__1884291){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__1884291__$1 = s__1884291;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884291__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24929__auto__ = ((function (s__1884291__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__1884290_$_iter__1884292(s__1884293){
return (new cljs.core.LazySeq(null,((function (s__1884291__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__1884293__$1 = s__1884293;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1884293__$1);
if(temp__4425__auto____$1){
var s__1884293__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884293__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884293__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884295 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884294 = (0);
while(true){
if((i__1884294 < size__24932__auto__)){
var nbr = cljs.core._nth.call(null,c__24931__auto__,i__1884294);
cljs.core.chunk_append.call(null,b__1884295,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__1884304 = (i__1884294 + (1));
i__1884294 = G__1884304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884295),loom$graph$iter__1884290_$_iter__1884292.call(null,cljs.core.chunk_rest.call(null,s__1884293__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884295),null);
}
} else {
var nbr = cljs.core.first.call(null,s__1884293__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__1884290_$_iter__1884292.call(null,cljs.core.rest.call(null,s__1884293__$2)));
}
} else {
return null;
}
break;
}
});})(s__1884291__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__1884291__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,loom$graph$iter__1884290.call(null,cljs.core.rest.call(null,s__1884291__$1)));
} else {
var G__1884305 = cljs.core.rest.call(null,s__1884291__$1);
s__1884291__$1 = G__1884305;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__24933__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$successors$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.successors,g__$1);
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$successors$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_edges$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.out_edges,g__$1);
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
var iter__24933__auto__ = ((function (g__$1){
return (function loom$graph$iter__1884296(s__1884297){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__1884297__$1 = s__1884297;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884297__$1);
if(temp__4425__auto__){
var s__1884297__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884297__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884297__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884299 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884298 = (0);
while(true){
if((i__1884298 < size__24932__auto__)){
var n2 = cljs.core._nth.call(null,c__24931__auto__,i__1884298);
cljs.core.chunk_append.call(null,b__1884299,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__1884306 = (i__1884298 + (1));
i__1884298 = G__1884306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884299),loom$graph$iter__1884296.call(null,cljs.core.chunk_rest.call(null,s__1884297__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884299),null);
}
} else {
var n2 = cljs.core.first.call(null,s__1884297__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__1884296.call(null,cljs.core.rest.call(null,s__1884297__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__24933__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24775__auto__,k__24776__auto__){
var self__ = this;
var this__24775__auto____$1 = this;
return cljs.core._lookup.call(null,this__24775__auto____$1,k__24776__auto__,null);
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24777__auto__,k1884288,else__24778__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
var G__1884300 = (((k1884288 instanceof cljs.core.Keyword))?k1884288.fqn:null);
switch (G__1884300) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "fpredecessors":
return self__.fpredecessors;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1884288,else__24778__auto__);

}
});

loom.graph.FlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24789__auto__,writer__24790__auto__,opts__24791__auto__){
var self__ = this;
var this__24789__auto____$1 = this;
var pr_pair__24792__auto__ = ((function (this__24789__auto____$1){
return (function (keyval__24793__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24790__auto__,cljs.core.pr_writer,""," ","",opts__24791__auto__,keyval__24793__auto__);
});})(this__24789__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24790__auto__,pr_pair__24792__auto__,"#loom.graph.FlyDigraph{",", ","}",opts__24791__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1884287){
var self__ = this;
var G__1884287__$1 = this;
return (new cljs.core.RecordIter((0),G__1884287__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.FlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24773__auto__){
var self__ = this;
var this__24773__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24769__auto__){
var self__ = this;
var this__24769__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24779__auto__){
var self__ = this;
var this__24779__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24770__auto__){
var self__ = this;
var this__24770__auto____$1 = this;
var h__24596__auto__ = self__.__hash;
if(!((h__24596__auto__ == null))){
return h__24596__auto__;
} else {
var h__24596__auto____$1 = cljs.core.hash_imap.call(null,this__24770__auto____$1);
self__.__hash = h__24596__auto____$1;

return h__24596__auto____$1;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24771__auto__,other__24772__auto__){
var self__ = this;
var this__24771__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24149__auto__ = other__24772__auto__;
if(cljs.core.truth_(and__24149__auto__)){
var and__24149__auto____$1 = (this__24771__auto____$1.constructor === other__24772__auto__.constructor);
if(and__24149__auto____$1){
return cljs.core.equiv_map.call(null,this__24771__auto____$1,other__24772__auto__);
} else {
return and__24149__auto____$1;
}
} else {
return and__24149__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24784__auto__,k__24785__auto__){
var self__ = this;
var this__24784__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__24785__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24784__auto____$1),self__.__meta),k__24785__auto__);
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24785__auto__)),null));
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24782__auto__,k__24783__auto__,G__1884287){
var self__ = this;
var this__24782__auto____$1 = this;
var pred__1884301 = cljs.core.keyword_identical_QMARK_;
var expr__1884302 = k__24783__auto__;
if(cljs.core.truth_(pred__1884301.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__1884302))){
return (new loom.graph.FlyDigraph(G__1884287,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884301.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__1884302))){
return (new loom.graph.FlyDigraph(self__.fnodes,G__1884287,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884301.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__1884302))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,G__1884287,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884301.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__1884302))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__1884287,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884301.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__1884302))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__1884287,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24783__auto__,G__1884287),null));
}
}
}
}
}
});

loom.graph.FlyDigraph.prototype.loom$graph$Digraph$ = true;

loom.graph.FlyDigraph.prototype.loom$graph$Digraph$predecessors$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.FlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24787__auto__){
var self__ = this;
var this__24787__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24774__auto__,G__1884287){
var self__ = this;
var this__24774__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,G__1884287,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24780__auto__,entry__24781__auto__){
var self__ = this;
var this__24780__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24781__auto__)){
return cljs.core._assoc.call(null,this__24780__auto____$1,cljs.core._nth.call(null,entry__24781__auto__,(0)),cljs.core._nth.call(null,entry__24781__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24780__auto____$1,entry__24781__auto__);
}
});

loom.graph.FlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyDigraph.cljs$lang$type = true;

loom.graph.FlyDigraph.cljs$lang$ctorPrSeq = (function (this__24809__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/FlyDigraph");
});

loom.graph.FlyDigraph.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"loom.graph/FlyDigraph");
});

loom.graph.__GT_FlyDigraph = (function loom$graph$__GT_FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start){
return (new loom.graph.FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start,null,null,null));
});

loom.graph.map__GT_FlyDigraph = (function loom$graph$map__GT_FlyDigraph(G__1884289){
return (new loom.graph.FlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__1884289),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__1884289),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__1884289),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__1884289),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__1884289),null,cljs.core.dissoc.call(null,G__1884289,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {loom.graph.Graph}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {loom.graph.WeightedGraph}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
loom.graph.WeightedFlyGraph = (function (fnodes,fedges,fsuccessors,fweight,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.fweight = fweight;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$ = true;

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
if(cljs.core.truth_((function (){var or__24161__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g__$1),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__24933__auto__ = ((function (g__$1){
return (function loom$graph$iter__1884311(s__1884312){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__1884312__$1 = s__1884312;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884312__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24929__auto__ = ((function (s__1884312__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__1884311_$_iter__1884313(s__1884314){
return (new cljs.core.LazySeq(null,((function (s__1884312__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__1884314__$1 = s__1884314;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1884314__$1);
if(temp__4425__auto____$1){
var s__1884314__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884314__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884314__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884316 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884315 = (0);
while(true){
if((i__1884315 < size__24932__auto__)){
var nbr = cljs.core._nth.call(null,c__24931__auto__,i__1884315);
cljs.core.chunk_append.call(null,b__1884316,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__1884325 = (i__1884315 + (1));
i__1884315 = G__1884325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884316),loom$graph$iter__1884311_$_iter__1884313.call(null,cljs.core.chunk_rest.call(null,s__1884314__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884316),null);
}
} else {
var nbr = cljs.core.first.call(null,s__1884314__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__1884311_$_iter__1884313.call(null,cljs.core.rest.call(null,s__1884314__$2)));
}
} else {
return null;
}
break;
}
});})(s__1884312__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__1884312__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,loom$graph$iter__1884311.call(null,cljs.core.rest.call(null,s__1884312__$1)));
} else {
var G__1884326 = cljs.core.rest.call(null,s__1884312__$1);
s__1884312__$1 = G__1884326;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__24933__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$successors$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.successors,g__$1);
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$successors$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_edges$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.out_edges,g__$1);
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
var iter__24933__auto__ = ((function (g__$1){
return (function loom$graph$iter__1884317(s__1884318){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__1884318__$1 = s__1884318;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884318__$1);
if(temp__4425__auto__){
var s__1884318__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884318__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884318__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884320 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884319 = (0);
while(true){
if((i__1884319 < size__24932__auto__)){
var n2 = cljs.core._nth.call(null,c__24931__auto__,i__1884319);
cljs.core.chunk_append.call(null,b__1884320,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__1884327 = (i__1884319 + (1));
i__1884319 = G__1884327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884320),loom$graph$iter__1884317.call(null,cljs.core.chunk_rest.call(null,s__1884318__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884320),null);
}
} else {
var n2 = cljs.core.first.call(null,s__1884318__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__1884317.call(null,cljs.core.rest.call(null,s__1884318__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__24933__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24775__auto__,k__24776__auto__){
var self__ = this;
var this__24775__auto____$1 = this;
return cljs.core._lookup.call(null,this__24775__auto____$1,k__24776__auto__,null);
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24777__auto__,k1884309,else__24778__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
var G__1884321 = (((k1884309 instanceof cljs.core.Keyword))?k1884309.fqn:null);
switch (G__1884321) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "fweight":
return self__.fweight;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1884309,else__24778__auto__);

}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24789__auto__,writer__24790__auto__,opts__24791__auto__){
var self__ = this;
var this__24789__auto____$1 = this;
var pr_pair__24792__auto__ = ((function (this__24789__auto____$1){
return (function (keyval__24793__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24790__auto__,cljs.core.pr_writer,""," ","",opts__24791__auto__,keyval__24793__auto__);
});})(this__24789__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24790__auto__,pr_pair__24792__auto__,"#loom.graph.WeightedFlyGraph{",", ","}",opts__24791__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1884308){
var self__ = this;
var G__1884308__$1 = this;
return (new cljs.core.RecordIter((0),G__1884308__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24773__auto__){
var self__ = this;
var this__24773__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24769__auto__){
var self__ = this;
var this__24769__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24779__auto__){
var self__ = this;
var this__24779__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24770__auto__){
var self__ = this;
var this__24770__auto____$1 = this;
var h__24596__auto__ = self__.__hash;
if(!((h__24596__auto__ == null))){
return h__24596__auto__;
} else {
var h__24596__auto____$1 = cljs.core.hash_imap.call(null,this__24770__auto____$1);
self__.__hash = h__24596__auto____$1;

return h__24596__auto____$1;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24771__auto__,other__24772__auto__){
var self__ = this;
var this__24771__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24149__auto__ = other__24772__auto__;
if(cljs.core.truth_(and__24149__auto__)){
var and__24149__auto____$1 = (this__24771__auto____$1.constructor === other__24772__auto__.constructor);
if(and__24149__auto____$1){
return cljs.core.equiv_map.call(null,this__24771__auto____$1,other__24772__auto__);
} else {
return and__24149__auto____$1;
}
} else {
return and__24149__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24784__auto__,k__24785__auto__){
var self__ = this;
var this__24784__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null], null), null),k__24785__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24784__auto____$1),self__.__meta),k__24785__auto__);
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24785__auto__)),null));
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24782__auto__,k__24783__auto__,G__1884308){
var self__ = this;
var this__24782__auto____$1 = this;
var pred__1884322 = cljs.core.keyword_identical_QMARK_;
var expr__1884323 = k__24783__auto__;
if(cljs.core.truth_(pred__1884322.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__1884323))){
return (new loom.graph.WeightedFlyGraph(G__1884308,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884322.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__1884323))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,G__1884308,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884322.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__1884323))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,G__1884308,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884322.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__1884323))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__1884308,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884322.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__1884323))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,G__1884308,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24783__auto__,G__1884308),null));
}
}
}
}
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24787__auto__){
var self__ = this;
var this__24787__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$ = true;

loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.weight,g__$1);
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight$arity$2 = (function (g,e){
var self__ = this;
var g__$1 = this;
return loom.graph.weight.call(null,g__$1,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight$arity$3 = (function (g,n1,n2){
var self__ = this;
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(g__$1),n1,n2);
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24774__auto__,G__1884308){
var self__ = this;
var this__24774__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,G__1884308,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24780__auto__,entry__24781__auto__){
var self__ = this;
var this__24780__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24781__auto__)){
return cljs.core._assoc.call(null,this__24780__auto____$1,cljs.core._nth.call(null,entry__24781__auto__,(0)),cljs.core._nth.call(null,entry__24781__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24780__auto____$1,entry__24781__auto__);
}
});

loom.graph.WeightedFlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyGraph.cljs$lang$type = true;

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrSeq = (function (this__24809__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/WeightedFlyGraph");
});

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"loom.graph/WeightedFlyGraph");
});

loom.graph.__GT_WeightedFlyGraph = (function loom$graph$__GT_WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start){
return (new loom.graph.WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start,null,null,null));
});

loom.graph.map__GT_WeightedFlyGraph = (function loom$graph$map__GT_WeightedFlyGraph(G__1884310){
return (new loom.graph.WeightedFlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__1884310),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__1884310),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__1884310),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__1884310),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__1884310),null,cljs.core.dissoc.call(null,G__1884310,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {loom.graph.Graph}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {loom.graph.Digraph}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {loom.graph.WeightedGraph}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
loom.graph.WeightedFlyDigraph = (function (fnodes,fedges,fsuccessors,fpredecessors,fweight,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.fpredecessors = fpredecessors;
this.fweight = fweight;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$ = true;

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
if(cljs.core.truth_((function (){var or__24161__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g__$1),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__24933__auto__ = ((function (g__$1){
return (function loom$graph$iter__1884332(s__1884333){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__1884333__$1 = s__1884333;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884333__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24929__auto__ = ((function (s__1884333__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__1884332_$_iter__1884334(s__1884335){
return (new cljs.core.LazySeq(null,((function (s__1884333__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__1884335__$1 = s__1884335;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1884335__$1);
if(temp__4425__auto____$1){
var s__1884335__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884335__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884335__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884337 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884336 = (0);
while(true){
if((i__1884336 < size__24932__auto__)){
var nbr = cljs.core._nth.call(null,c__24931__auto__,i__1884336);
cljs.core.chunk_append.call(null,b__1884337,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__1884346 = (i__1884336 + (1));
i__1884336 = G__1884346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884337),loom$graph$iter__1884332_$_iter__1884334.call(null,cljs.core.chunk_rest.call(null,s__1884335__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884337),null);
}
} else {
var nbr = cljs.core.first.call(null,s__1884335__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__1884332_$_iter__1884334.call(null,cljs.core.rest.call(null,s__1884335__$2)));
}
} else {
return null;
}
break;
}
});})(s__1884333__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__1884333__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,loom$graph$iter__1884332.call(null,cljs.core.rest.call(null,s__1884333__$1)));
} else {
var G__1884347 = cljs.core.rest.call(null,s__1884333__$1);
s__1884333__$1 = G__1884347;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__24933__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$successors$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.successors,g__$1);
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$successors$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_edges$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.out_edges,g__$1);
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
var iter__24933__auto__ = ((function (g__$1){
return (function loom$graph$iter__1884338(s__1884339){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__1884339__$1 = s__1884339;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884339__$1);
if(temp__4425__auto__){
var s__1884339__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884339__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884339__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884341 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884340 = (0);
while(true){
if((i__1884340 < size__24932__auto__)){
var n2 = cljs.core._nth.call(null,c__24931__auto__,i__1884340);
cljs.core.chunk_append.call(null,b__1884341,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__1884348 = (i__1884340 + (1));
i__1884340 = G__1884348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884341),loom$graph$iter__1884338.call(null,cljs.core.chunk_rest.call(null,s__1884339__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884341),null);
}
} else {
var n2 = cljs.core.first.call(null,s__1884339__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__1884338.call(null,cljs.core.rest.call(null,s__1884339__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__24933__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24775__auto__,k__24776__auto__){
var self__ = this;
var this__24775__auto____$1 = this;
return cljs.core._lookup.call(null,this__24775__auto____$1,k__24776__auto__,null);
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24777__auto__,k1884330,else__24778__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
var G__1884342 = (((k1884330 instanceof cljs.core.Keyword))?k1884330.fqn:null);
switch (G__1884342) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "fpredecessors":
return self__.fpredecessors;

break;
case "fweight":
return self__.fweight;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1884330,else__24778__auto__);

}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24789__auto__,writer__24790__auto__,opts__24791__auto__){
var self__ = this;
var this__24789__auto____$1 = this;
var pr_pair__24792__auto__ = ((function (this__24789__auto____$1){
return (function (keyval__24793__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24790__auto__,cljs.core.pr_writer,""," ","",opts__24791__auto__,keyval__24793__auto__);
});})(this__24789__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24790__auto__,pr_pair__24792__auto__,"#loom.graph.WeightedFlyDigraph{",", ","}",opts__24791__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1884329){
var self__ = this;
var G__1884329__$1 = this;
return (new cljs.core.RecordIter((0),G__1884329__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24773__auto__){
var self__ = this;
var this__24773__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24769__auto__){
var self__ = this;
var this__24769__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24779__auto__){
var self__ = this;
var this__24779__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24770__auto__){
var self__ = this;
var this__24770__auto____$1 = this;
var h__24596__auto__ = self__.__hash;
if(!((h__24596__auto__ == null))){
return h__24596__auto__;
} else {
var h__24596__auto____$1 = cljs.core.hash_imap.call(null,this__24770__auto____$1);
self__.__hash = h__24596__auto____$1;

return h__24596__auto____$1;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24771__auto__,other__24772__auto__){
var self__ = this;
var this__24771__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24149__auto__ = other__24772__auto__;
if(cljs.core.truth_(and__24149__auto__)){
var and__24149__auto____$1 = (this__24771__auto____$1.constructor === other__24772__auto__.constructor);
if(and__24149__auto____$1){
return cljs.core.equiv_map.call(null,this__24771__auto____$1,other__24772__auto__);
} else {
return and__24149__auto____$1;
}
} else {
return and__24149__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24784__auto__,k__24785__auto__){
var self__ = this;
var this__24784__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__24785__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24784__auto____$1),self__.__meta),k__24785__auto__);
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24785__auto__)),null));
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24782__auto__,k__24783__auto__,G__1884329){
var self__ = this;
var this__24782__auto____$1 = this;
var pred__1884343 = cljs.core.keyword_identical_QMARK_;
var expr__1884344 = k__24783__auto__;
if(cljs.core.truth_(pred__1884343.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__1884344))){
return (new loom.graph.WeightedFlyDigraph(G__1884329,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884343.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__1884344))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,G__1884329,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884343.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__1884344))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,G__1884329,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884343.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__1884344))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__1884329,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884343.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__1884344))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__1884329,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1884343.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__1884344))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,G__1884329,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24783__auto__,G__1884329),null));
}
}
}
}
}
}
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$ = true;

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$predecessors$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24787__auto__){
var self__ = this;
var this__24787__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$ = true;

loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.partial.call(null,loom.graph.weight,g__$1);
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight$arity$2 = (function (g,e){
var self__ = this;
var g__$1 = this;
return loom.graph.weight.call(null,g__$1,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight$arity$3 = (function (g,n1,n2){
var self__ = this;
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(g__$1),n1,n2);
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24774__auto__,G__1884329){
var self__ = this;
var this__24774__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,G__1884329,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24780__auto__,entry__24781__auto__){
var self__ = this;
var this__24780__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24781__auto__)){
return cljs.core._assoc.call(null,this__24780__auto____$1,cljs.core._nth.call(null,entry__24781__auto__,(0)),cljs.core._nth.call(null,entry__24781__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24780__auto____$1,entry__24781__auto__);
}
});

loom.graph.WeightedFlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyDigraph.cljs$lang$type = true;

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrSeq = (function (this__24809__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/WeightedFlyDigraph");
});

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"loom.graph/WeightedFlyDigraph");
});

loom.graph.__GT_WeightedFlyDigraph = (function loom$graph$__GT_WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start){
return (new loom.graph.WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start,null,null,null));
});

loom.graph.map__GT_WeightedFlyDigraph = (function loom$graph$map__GT_WeightedFlyDigraph(G__1884331){
return (new loom.graph.WeightedFlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__1884331),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__1884331),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__1884331),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__1884331),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__1884331),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__1884331),null,cljs.core.dissoc.call(null,G__1884331,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)),null));
});

/**
 * Returns a graph with only the given nodes
 */
loom.graph.subgraph = (function loom$graph$subgraph(g,ns){
return loom.graph.remove_nodes_STAR_.call(null,g,cljs.core.remove.call(null,cljs.core.set.call(null,ns),loom.graph.nodes.call(null,g)));
});
/**
 * Adds a path of edges connecting the given nodes in order
 */
loom.graph.add_path = (function loom$graph$add_path(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1884352 = arguments.length;
var i__25220__auto___1884353 = (0);
while(true){
if((i__25220__auto___1884353 < len__25219__auto___1884352)){
args__25226__auto__.push((arguments[i__25220__auto___1884353]));

var G__1884354 = (i__25220__auto___1884353 + (1));
i__25220__auto___1884353 = G__1884354;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((1) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((1)),(0))):null);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25227__auto__);
});

loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),nodes));
});

loom.graph.add_path.cljs$lang$maxFixedArity = (1);

loom.graph.add_path.cljs$lang$applyTo = (function (seq1884350){
var G__1884351 = cljs.core.first.call(null,seq1884350);
var seq1884350__$1 = cljs.core.next.call(null,seq1884350);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic(G__1884351,seq1884350__$1);
});
/**
 * Adds a cycle of edges connecting the given nodes in order
 */
loom.graph.add_cycle = (function loom$graph$add_cycle(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1884357 = arguments.length;
var i__25220__auto___1884358 = (0);
while(true){
if((i__25220__auto___1884358 < len__25219__auto___1884357)){
args__25226__auto__.push((arguments[i__25220__auto___1884358]));

var G__1884359 = (i__25220__auto___1884358 + (1));
i__25220__auto___1884358 = G__1884359;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((1) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((1)),(0))):null);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25227__auto__);
});

loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),cljs.core.concat.call(null,nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nodes)], null))));
});

loom.graph.add_cycle.cljs$lang$maxFixedArity = (1);

loom.graph.add_cycle.cljs$lang$applyTo = (function (seq1884355){
var G__1884356 = cljs.core.first.call(null,seq1884355);
var seq1884355__$1 = cljs.core.next.call(null,seq1884355);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic(G__1884356,seq1884355__$1);
});
/**
 * Returns true if g satisfies the Graph protocol
 */
loom.graph.graph_QMARK_ = (function loom$graph$graph_QMARK_(g){
if(!((g == null))){
if((false) || (g.loom$graph$Graph$)){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.Graph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.Graph,g);
}
});
/**
 * Returns true if g satisfies the Digraph protocol
 */
loom.graph.directed_QMARK_ = (function loom$graph$directed_QMARK_(g){
if(!((g == null))){
if((false) || (g.loom$graph$Digraph$)){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.Digraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.Digraph,g);
}
});
/**
 * Returns true if g satisfies the WeightedGraph protocol
 */
loom.graph.weighted_QMARK_ = (function loom$graph$weighted_QMARK_(g){
if(!((g == null))){
if((false) || (g.loom$graph$WeightedGraph$)){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.WeightedGraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.WeightedGraph,g);
}
});
/**
 * Returns true if g satisfies the EditableGraph protocol
 */
loom.graph.editable_QMARK_ = (function loom$graph$editable_QMARK_(g){
if(!((g == null))){
if((false) || (g.loom$graph$EditableGraph$)){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.EditableGraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.EditableGraph,g);
}
});
/**
 * Builds up a graph (i.e. adds edges and nodes) from any combination of
 *   other graphs, adjacency maps, edges, or nodes.
 */
loom.graph.build_graph = (function loom$graph$build_graph(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1884498 = arguments.length;
var i__25220__auto___1884499 = (0);
while(true){
if((i__25220__auto___1884499 < len__25219__auto___1884498)){
args__25226__auto__.push((arguments[i__25220__auto___1884499]));

var G__1884500 = (i__25220__auto___1884499 + (1));
i__25220__auto___1884499 = G__1884500;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((1) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((1)),(0))):null);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25227__auto__);
});

loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,inits){
var build = (function loom$graph$build(g__$1,init){
if(cljs.core.truth_(loom.graph.graph_QMARK_.call(null,init))){
if(cljs.core.truth_((function (){var and__24149__auto__ = loom.graph.weighted_QMARK_.call(null,g__$1);
if(cljs.core.truth_(and__24149__auto__)){
return loom.graph.weighted_QMARK_.call(null,init);
} else {
return and__24149__auto__;
}
})())){
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,loom.graph.add_edges,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),(function (){var iter__24933__auto__ = (function loom$graph$build_$_iter__1884466(s__1884467){
return (new cljs.core.LazySeq(null,(function (){
var s__1884467__$1 = s__1884467;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884467__$1);
if(temp__4425__auto__){
var s__1884467__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884467__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884467__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884469 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884468 = (0);
while(true){
if((i__1884468 < size__24932__auto__)){
var vec__1884472 = cljs.core._nth.call(null,c__24931__auto__,i__1884468);
var n1 = cljs.core.nth.call(null,vec__1884472,(0),null);
var n2 = cljs.core.nth.call(null,vec__1884472,(1),null);
cljs.core.chunk_append.call(null,b__1884469,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null));

var G__1884501 = (i__1884468 + (1));
i__1884468 = G__1884501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884469),loom$graph$build_$_iter__1884466.call(null,cljs.core.chunk_rest.call(null,s__1884467__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884469),null);
}
} else {
var vec__1884473 = cljs.core.first.call(null,s__1884467__$2);
var n1 = cljs.core.nth.call(null,vec__1884473,(0),null);
var n2 = cljs.core.nth.call(null,vec__1884473,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null),loom$graph$build_$_iter__1884466.call(null,cljs.core.rest.call(null,s__1884467__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24933__auto__.call(null,loom.graph.edges.call(null,init));
})()),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
} else {
return cljs.core.assoc.call(null,loom.graph.add_edges_STAR_.call(null,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),loom.graph.edges.call(null,init)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
}
} else {
if(cljs.core.map_QMARK_.call(null,init)){
var es = ((cljs.core.map_QMARK_.call(null,cljs.core.val.call(null,cljs.core.first.call(null,init))))?(function (){var iter__24933__auto__ = (function loom$graph$build_$_iter__1884474(s__1884475){
return (new cljs.core.LazySeq(null,(function (){
var s__1884475__$1 = s__1884475;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884475__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__1884485 = cljs.core.first.call(null,xs__4977__auto__);
var n = cljs.core.nth.call(null,vec__1884485,(0),null);
var nbrs = cljs.core.nth.call(null,vec__1884485,(1),null);
var iterys__24929__auto__ = ((function (s__1884475__$1,vec__1884485,n,nbrs,xs__4977__auto__,temp__4425__auto__){
return (function loom$graph$build_$_iter__1884474_$_iter__1884476(s__1884477){
return (new cljs.core.LazySeq(null,((function (s__1884475__$1,vec__1884485,n,nbrs,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__1884477__$1 = s__1884477;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1884477__$1);
if(temp__4425__auto____$1){
var s__1884477__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884477__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884477__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884479 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884478 = (0);
while(true){
if((i__1884478 < size__24932__auto__)){
var vec__1884488 = cljs.core._nth.call(null,c__24931__auto__,i__1884478);
var nbr = cljs.core.nth.call(null,vec__1884488,(0),null);
var wt = cljs.core.nth.call(null,vec__1884488,(1),null);
cljs.core.chunk_append.call(null,b__1884479,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__1884502 = (i__1884478 + (1));
i__1884478 = G__1884502;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884479),loom$graph$build_$_iter__1884474_$_iter__1884476.call(null,cljs.core.chunk_rest.call(null,s__1884477__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884479),null);
}
} else {
var vec__1884489 = cljs.core.first.call(null,s__1884477__$2);
var nbr = cljs.core.nth.call(null,vec__1884489,(0),null);
var wt = cljs.core.nth.call(null,vec__1884489,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),loom$graph$build_$_iter__1884474_$_iter__1884476.call(null,cljs.core.rest.call(null,s__1884477__$2)));
}
} else {
return null;
}
break;
}
});})(s__1884475__$1,vec__1884485,n,nbrs,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__1884475__$1,vec__1884485,n,nbrs,xs__4977__auto__,temp__4425__auto__))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,nbrs));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,loom$graph$build_$_iter__1884474.call(null,cljs.core.rest.call(null,s__1884475__$1)));
} else {
var G__1884503 = cljs.core.rest.call(null,s__1884475__$1);
s__1884475__$1 = G__1884503;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24933__auto__.call(null,init);
})():(function (){var iter__24933__auto__ = (function loom$graph$build_$_iter__1884490(s__1884491){
return (new cljs.core.LazySeq(null,(function (){
var s__1884491__$1 = s__1884491;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884491__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__1884497 = cljs.core.first.call(null,xs__4977__auto__);
var n = cljs.core.nth.call(null,vec__1884497,(0),null);
var nbrs = cljs.core.nth.call(null,vec__1884497,(1),null);
var iterys__24929__auto__ = ((function (s__1884491__$1,vec__1884497,n,nbrs,xs__4977__auto__,temp__4425__auto__){
return (function loom$graph$build_$_iter__1884490_$_iter__1884492(s__1884493){
return (new cljs.core.LazySeq(null,((function (s__1884491__$1,vec__1884497,n,nbrs,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__1884493__$1 = s__1884493;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1884493__$1);
if(temp__4425__auto____$1){
var s__1884493__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884493__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884493__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884495 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884494 = (0);
while(true){
if((i__1884494 < size__24932__auto__)){
var nbr = cljs.core._nth.call(null,c__24931__auto__,i__1884494);
cljs.core.chunk_append.call(null,b__1884495,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__1884504 = (i__1884494 + (1));
i__1884494 = G__1884504;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884495),loom$graph$build_$_iter__1884490_$_iter__1884492.call(null,cljs.core.chunk_rest.call(null,s__1884493__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884495),null);
}
} else {
var nbr = cljs.core.first.call(null,s__1884493__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$build_$_iter__1884490_$_iter__1884492.call(null,cljs.core.rest.call(null,s__1884493__$2)));
}
} else {
return null;
}
break;
}
});})(s__1884491__$1,vec__1884497,n,nbrs,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__1884491__$1,vec__1884497,n,nbrs,xs__4977__auto__,temp__4425__auto__))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,nbrs));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,loom$graph$build_$_iter__1884490.call(null,cljs.core.rest.call(null,s__1884491__$1)));
} else {
var G__1884505 = cljs.core.rest.call(null,s__1884491__$1);
s__1884491__$1 = G__1884505;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24933__auto__.call(null,init);
})());
return loom.graph.add_edges_STAR_.call(null,loom.graph.add_nodes_STAR_.call(null,g__$1,cljs.core.keys.call(null,init)),es);
} else {
if(cljs.core.sequential_QMARK_.call(null,init)){
return loom.graph.add_edges.call(null,g__$1,init);
} else {
return loom.graph.add_nodes.call(null,g__$1,init);

}
}
}
});
return cljs.core.reduce.call(null,build,g,inits);
});

loom.graph.build_graph.cljs$lang$maxFixedArity = (1);

loom.graph.build_graph.cljs$lang$applyTo = (function (seq1884368){
var G__1884369 = cljs.core.first.call(null,seq1884368);
var seq1884368__$1 = cljs.core.next.call(null,seq1884368);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic(G__1884369,seq1884368__$1);
});
/**
 * Creates an unweighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.graph = (function loom$graph$graph(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1884507 = arguments.length;
var i__25220__auto___1884508 = (0);
while(true){
if((i__25220__auto___1884508 < len__25219__auto___1884507)){
args__25226__auto__.push((arguments[i__25220__auto___1884508]));

var G__1884509 = (i__25220__auto___1884508 + (1));
i__25220__auto___1884508 = G__1884509;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((0) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((0)),(0))):null);
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(argseq__25227__auto__);
});

loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.graph.cljs$lang$maxFixedArity = (0);

loom.graph.graph.cljs$lang$applyTo = (function (seq1884506){
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1884506));
});
/**
 * Creates an unweighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.digraph = (function loom$graph$digraph(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1884511 = arguments.length;
var i__25220__auto___1884512 = (0);
while(true){
if((i__25220__auto___1884512 < len__25219__auto___1884511)){
args__25226__auto__.push((arguments[i__25220__auto___1884512]));

var G__1884513 = (i__25220__auto___1884512 + (1));
i__25220__auto___1884512 = G__1884513;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((0) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((0)),(0))):null);
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__25227__auto__);
});

loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.digraph.cljs$lang$maxFixedArity = (0);

loom.graph.digraph.cljs$lang$applyTo = (function (seq1884510){
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1884510));
});
/**
 * Creates an weighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_graph = (function loom$graph$weighted_graph(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1884515 = arguments.length;
var i__25220__auto___1884516 = (0);
while(true){
if((i__25220__auto___1884516 < len__25219__auto___1884515)){
args__25226__auto__.push((arguments[i__25220__auto___1884516]));

var G__1884517 = (i__25220__auto___1884516 + (1));
i__25220__auto___1884516 = G__1884517;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((0) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((0)),(0))):null);
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__25227__auto__);
});

loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_graph.cljs$lang$maxFixedArity = (0);

loom.graph.weighted_graph.cljs$lang$applyTo = (function (seq1884514){
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1884514));
});
/**
 * Creates an weighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_digraph = (function loom$graph$weighted_digraph(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1884519 = arguments.length;
var i__25220__auto___1884520 = (0);
while(true){
if((i__25220__auto___1884520 < len__25219__auto___1884519)){
args__25226__auto__.push((arguments[i__25220__auto___1884520]));

var G__1884521 = (i__25220__auto___1884520 + (1));
i__25220__auto___1884520 = G__1884521;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((0) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((0)),(0))):null);
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__25227__auto__);
});

loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_digraph.cljs$lang$maxFixedArity = (0);

loom.graph.weighted_digraph.cljs$lang$applyTo = (function (seq1884518){
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1884518));
});
/**
 * Creates a read-only, ad-hoc graph which uses the provided functions
 *   to return values for nodes, edges, etc. If any members are not functions,
 *   they will be returned as-is. Edges can be inferred if nodes and
 *   successors are provided. Nodes and edges can be inferred if successors and
 *   start are provided.
 */
loom.graph.fly_graph = (function loom$graph$fly_graph(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1884526 = arguments.length;
var i__25220__auto___1884527 = (0);
while(true){
if((i__25220__auto___1884527 < len__25219__auto___1884526)){
args__25226__auto__.push((arguments[i__25220__auto___1884527]));

var G__1884528 = (i__25220__auto___1884527 + (1));
i__25220__auto___1884527 = G__1884528;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((0) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((0)),(0))):null);
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__25227__auto__);
});

loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = (function (p__1884523){
var map__1884524 = p__1884523;
var map__1884524__$1 = ((((!((map__1884524 == null)))?((((map__1884524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1884524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1884524):map__1884524);
var nodes = cljs.core.get.call(null,map__1884524__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__1884524__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var successors = cljs.core.get.call(null,map__1884524__$1,new cljs.core.Keyword(null,"successors","successors",-1239296414));
var predecessors = cljs.core.get.call(null,map__1884524__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var weight = cljs.core.get.call(null,map__1884524__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var start = cljs.core.get.call(null,map__1884524__$1,new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.truth_((function (){var and__24149__auto__ = predecessors;
if(cljs.core.truth_(and__24149__auto__)){
return weight;
} else {
return and__24149__auto__;
}
})())){
return (new loom.graph.WeightedFlyDigraph(nodes,edges,successors,predecessors,weight,start,null,null,null));
} else {
if(cljs.core.truth_(predecessors)){
return (new loom.graph.FlyDigraph(nodes,edges,successors,predecessors,start,null,null,null));
} else {
if(cljs.core.truth_(weight)){
return (new loom.graph.WeightedFlyGraph(nodes,edges,successors,weight,start,null,null,null));
} else {
return (new loom.graph.FlyGraph(nodes,edges,successors,start,null,null,null));

}
}
}
});

loom.graph.fly_graph.cljs$lang$maxFixedArity = (0);

loom.graph.fly_graph.cljs$lang$applyTo = (function (seq1884522){
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1884522));
});

//# sourceMappingURL=graph.js.map