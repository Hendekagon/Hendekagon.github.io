// Compiled by ClojureScript 1.8.40 {}
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
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.nodes[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g);
} else {
var m__36089__auto____$1 = (loom.graph.nodes["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g);
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
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.edges[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g);
} else {
var m__36089__auto____$1 = (loom.graph.edges["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g);
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
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.has_node_QMARK_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g,node);
} else {
var m__36089__auto____$1 = (loom.graph.has_node_QMARK_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g,node);
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
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.has_edge_QMARK_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g,n1,n2);
} else {
var m__36089__auto____$1 = (loom.graph.has_edge_QMARK_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g,n1,n2);
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
var args127164 = [];
var len__36494__auto___127297 = arguments.length;
var i__36495__auto___127298 = (0);
while(true){
if((i__36495__auto___127298 < len__36494__auto___127297)){
args127164.push((arguments[i__36495__auto___127298]));

var G__127300 = (i__36495__auto___127298 + (1));
i__36495__auto___127298 = G__127300;
continue;
} else {
}
break;
}

var G__127169 = args127164.length;
switch (G__127169) {
case 1:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args127164.length)].join('')));

}
});

loom.graph.successors.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Graph$successors$arity$1 == null)))){
return g.loom$graph$Graph$successors$arity$1(g);
} else {
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.successors[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g);
} else {
var m__36089__auto____$1 = (loom.graph.successors["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g);
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
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.successors[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g,node);
} else {
var m__36089__auto____$1 = (loom.graph.successors["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g,node);
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
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.out_degree[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g,node);
} else {
var m__36089__auto____$1 = (loom.graph.out_degree["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g,node);
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
var args127186 = [];
var len__36494__auto___127381 = arguments.length;
var i__36495__auto___127382 = (0);
while(true){
if((i__36495__auto___127382 < len__36494__auto___127381)){
args127186.push((arguments[i__36495__auto___127382]));

var G__127383 = (i__36495__auto___127382 + (1));
i__36495__auto___127382 = G__127383;
continue;
} else {
}
break;
}

var G__127218 = args127186.length;
switch (G__127218) {
case 1:
return loom.graph.out_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.out_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args127186.length)].join('')));

}
});

loom.graph.out_edges.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Graph$out_edges$arity$1 == null)))){
return g.loom$graph$Graph$out_edges$arity$1(g);
} else {
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.out_edges[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g);
} else {
var m__36089__auto____$1 = (loom.graph.out_edges["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g);
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
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.out_edges[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g,node);
} else {
var m__36089__auto____$1 = (loom.graph.out_edges["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g,node);
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
var args127419 = [];
var len__36494__auto___127483 = arguments.length;
var i__36495__auto___127486 = (0);
while(true){
if((i__36495__auto___127486 < len__36494__auto___127483)){
args127419.push((arguments[i__36495__auto___127486]));

var G__127488 = (i__36495__auto___127486 + (1));
i__36495__auto___127486 = G__127488;
continue;
} else {
}
break;
}

var G__127424 = args127419.length;
switch (G__127424) {
case 1:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args127419.length)].join('')));

}
});

loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Digraph$predecessors$arity$1 == null)))){
return g.loom$graph$Digraph$predecessors$arity$1(g);
} else {
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.predecessors[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g);
} else {
var m__36089__auto____$1 = (loom.graph.predecessors["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g);
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
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.predecessors[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g,node);
} else {
var m__36089__auto____$1 = (loom.graph.predecessors["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g,node);
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
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.in_degree[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g,node);
} else {
var m__36089__auto____$1 = (loom.graph.in_degree["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g,node);
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
var args127455 = [];
var len__36494__auto___127523 = arguments.length;
var i__36495__auto___127525 = (0);
while(true){
if((i__36495__auto___127525 < len__36494__auto___127523)){
args127455.push((arguments[i__36495__auto___127525]));

var G__127527 = (i__36495__auto___127525 + (1));
i__36495__auto___127525 = G__127527;
continue;
} else {
}
break;
}

var G__127459 = args127455.length;
switch (G__127459) {
case 1:
return loom.graph.in_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.in_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args127455.length)].join('')));

}
});

loom.graph.in_edges.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Digraph$in_edges$arity$1 == null)))){
return g.loom$graph$Digraph$in_edges$arity$1(g);
} else {
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.in_edges[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g);
} else {
var m__36089__auto____$1 = (loom.graph.in_edges["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g);
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
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.in_edges[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g,node);
} else {
var m__36089__auto____$1 = (loom.graph.in_edges["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g,node);
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
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.transpose[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g);
} else {
var m__36089__auto____$1 = (loom.graph.transpose["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g);
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
var args127545 = [];
var len__36494__auto___127592 = arguments.length;
var i__36495__auto___127594 = (0);
while(true){
if((i__36495__auto___127594 < len__36494__auto___127592)){
args127545.push((arguments[i__36495__auto___127594]));

var G__127595 = (i__36495__auto___127594 + (1));
i__36495__auto___127594 = G__127595;
continue;
} else {
}
break;
}

var G__127588 = args127545.length;
switch (G__127588) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args127545.length)].join('')));

}
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$WeightedGraph$weight$arity$1 == null)))){
return g.loom$graph$WeightedGraph$weight$arity$1(g);
} else {
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.weight[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g);
} else {
var m__36089__auto____$1 = (loom.graph.weight["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g);
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
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.weight[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g,e);
} else {
var m__36089__auto____$1 = (loom.graph.weight["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g,e);
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
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.weight[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g,n1,n2);
} else {
var m__36089__auto____$1 = (loom.graph.weight["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g,n1,n2);
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
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.add_nodes_STAR_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g,nodes);
} else {
var m__36089__auto____$1 = (loom.graph.add_nodes_STAR_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g,nodes);
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
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.add_edges_STAR_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g,edges);
} else {
var m__36089__auto____$1 = (loom.graph.add_edges_STAR_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g,edges);
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
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.remove_nodes_STAR_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g,nodes);
} else {
var m__36089__auto____$1 = (loom.graph.remove_nodes_STAR_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g,nodes);
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
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.remove_edges_STAR_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g,edges);
} else {
var m__36089__auto____$1 = (loom.graph.remove_edges_STAR_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g,edges);
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
var x__36088__auto__ = (((g == null))?null:g);
var m__36089__auto__ = (loom.graph.remove_all[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,g);
} else {
var m__36089__auto____$1 = (loom.graph.remove_all["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,g);
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
var x__36088__auto__ = (((edge == null))?null:edge);
var m__36089__auto__ = (loom.graph.src[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,edge);
} else {
var m__36089__auto____$1 = (loom.graph.src["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,edge);
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
var x__36088__auto__ = (((edge == null))?null:edge);
var m__36089__auto__ = (loom.graph.dest[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,edge);
} else {
var m__36089__auto____$1 = (loom.graph.dest["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,edge);
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
var args__36501__auto__ = [];
var len__36494__auto___127995 = arguments.length;
var i__36495__auto___127997 = (0);
while(true){
if((i__36495__auto___127997 < len__36494__auto___127995)){
args__36501__auto__.push((arguments[i__36495__auto___127997]));

var G__127998 = (i__36495__auto___127997 + (1));
i__36495__auto___127997 = G__127998;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((1) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((1)),(0),null)):null);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36502__auto__);
});

loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_nodes_STAR_.call(null,g,nodes);
});

loom.graph.add_nodes.cljs$lang$maxFixedArity = (1);

loom.graph.add_nodes.cljs$lang$applyTo = (function (seq127982){
var G__127983 = cljs.core.first.call(null,seq127982);
var seq127982__$1 = cljs.core.next.call(null,seq127982);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic(G__127983,seq127982__$1);
});
/**
 * Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].
 *   For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the
 *   latter defaulting to a weight of 1
 */
loom.graph.add_edges = (function loom$graph$add_edges(var_args){
var args__36501__auto__ = [];
var len__36494__auto___128014 = arguments.length;
var i__36495__auto___128015 = (0);
while(true){
if((i__36495__auto___128015 < len__36494__auto___128014)){
args__36501__auto__.push((arguments[i__36495__auto___128015]));

var G__128018 = (i__36495__auto___128015 + (1));
i__36495__auto___128015 = G__128018;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((1) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((1)),(0),null)):null);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36502__auto__);
});

loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.add_edges_STAR_.call(null,g,edges);
});

loom.graph.add_edges.cljs$lang$maxFixedArity = (1);

loom.graph.add_edges.cljs$lang$applyTo = (function (seq128002){
var G__128003 = cljs.core.first.call(null,seq128002);
var seq128002__$1 = cljs.core.next.call(null,seq128002);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic(G__128003,seq128002__$1);
});
/**
 * Removes nodes from graph g
 */
loom.graph.remove_nodes = (function loom$graph$remove_nodes(var_args){
var args__36501__auto__ = [];
var len__36494__auto___128032 = arguments.length;
var i__36495__auto___128033 = (0);
while(true){
if((i__36495__auto___128033 < len__36494__auto___128032)){
args__36501__auto__.push((arguments[i__36495__auto___128033]));

var G__128034 = (i__36495__auto___128033 + (1));
i__36495__auto___128033 = G__128034;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((1) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36502__auto__);
});

loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.remove_nodes_STAR_.call(null,g,nodes);
});

loom.graph.remove_nodes.cljs$lang$maxFixedArity = (1);

loom.graph.remove_nodes.cljs$lang$applyTo = (function (seq128024){
var G__128025 = cljs.core.first.call(null,seq128024);
var seq128024__$1 = cljs.core.next.call(null,seq128024);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic(G__128025,seq128024__$1);
});
/**
 * Removes edges from graph g. Do not include weights
 */
loom.graph.remove_edges = (function loom$graph$remove_edges(var_args){
var args__36501__auto__ = [];
var len__36494__auto___128039 = arguments.length;
var i__36495__auto___128040 = (0);
while(true){
if((i__36495__auto___128040 < len__36494__auto___128039)){
args__36501__auto__.push((arguments[i__36495__auto___128040]));

var G__128041 = (i__36495__auto___128040 + (1));
i__36495__auto___128040 = G__128041;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((1) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36502__auto__);
});

loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.remove_edges_STAR_.call(null,g,edges);
});

loom.graph.remove_edges.cljs$lang$maxFixedArity = (1);

loom.graph.remove_edges.cljs$lang$applyTo = (function (seq128036){
var G__128037 = cljs.core.first.call(null,seq128036);
var seq128036__$1 = cljs.core.next.call(null,seq128036);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic(G__128037,seq128036__$1);
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
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),(function (p1__128132_SHARP_){
return cljs.core.apply.call(null,remove_fn,p1__128132_SHARP_,nodes);
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
var iter__36205__auto__ = ((function (g__$1){
return (function loom$graph$iter__128144(s__128145){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__128145__$1 = s__128145;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__128145__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36201__auto__ = ((function (s__128145__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__128144_$_iter__128146(s__128147){
return (new cljs.core.LazySeq(null,((function (s__128145__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__128147__$1 = s__128147;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__128147__$1);
if(temp__4657__auto____$1){
var s__128147__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__128147__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__128147__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__128149 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__128148 = (0);
while(true){
if((i__128148 < size__36204__auto__)){
var e = cljs.core._nth.call(null,c__36203__auto__,i__128148);
cljs.core.chunk_append.call(null,b__128149,e);

var G__128196 = (i__128148 + (1));
i__128148 = G__128196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128149),loom$graph$iter__128144_$_iter__128146.call(null,cljs.core.chunk_rest.call(null,s__128147__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128149),null);
}
} else {
var e = cljs.core.first.call(null,s__128147__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__128144_$_iter__128146.call(null,cljs.core.rest.call(null,s__128147__$2)));
}
} else {
return null;
}
break;
}
});})(s__128145__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__128145__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,loom$graph$iter__128144.call(null,cljs.core.rest.call(null,s__128145__$1)));
} else {
var G__128199 = cljs.core.rest.call(null,s__128145__$1);
s__128145__$1 = G__128199;
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
return iter__36205__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36205__auto__ = ((function (g__$1){
return (function loom$graph$iter__128163(s__128164){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__128164__$1 = s__128164;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__128164__$1);
if(temp__4657__auto__){
var s__128164__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__128164__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__128164__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__128166 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__128165 = (0);
while(true){
if((i__128165 < size__36204__auto__)){
var n2 = cljs.core._nth.call(null,c__36203__auto__,i__128165);
cljs.core.chunk_append.call(null,b__128166,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__128206 = (i__128165 + (1));
i__128165 = G__128206;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128166),loom$graph$iter__128163.call(null,cljs.core.chunk_rest.call(null,s__128164__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128166),null);
}
} else {
var n2 = cljs.core.first.call(null,s__128164__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__128163.call(null,cljs.core.rest.call(null,s__128164__$2)));
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
return iter__36205__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36047__auto__,k__36048__auto__){
var self__ = this;
var this__36047__auto____$1 = this;
return cljs.core._lookup.call(null,this__36047__auto____$1,k__36048__auto__,null);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36049__auto__,k128135,else__36050__auto__){
var self__ = this;
var this__36049__auto____$1 = this;
var G__128169 = (((k128135 instanceof cljs.core.Keyword))?k128135.fqn:null);
switch (G__128169) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k128135,else__36050__auto__);

}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36061__auto__,writer__36062__auto__,opts__36063__auto__){
var self__ = this;
var this__36061__auto____$1 = this;
var pr_pair__36064__auto__ = ((function (this__36061__auto____$1){
return (function (keyval__36065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36062__auto__,cljs.core.pr_writer,""," ","",opts__36063__auto__,keyval__36065__auto__);
});})(this__36061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36062__auto__,pr_pair__36064__auto__,"#loom.graph.BasicEditableGraph{",", ","}",opts__36063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__128134){
var self__ = this;
var G__128134__$1 = this;
return (new cljs.core.RecordIter((0),G__128134__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36045__auto__){
var self__ = this;
var this__36045__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36041__auto__){
var self__ = this;
var this__36041__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36051__auto__){
var self__ = this;
var this__36051__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36042__auto__){
var self__ = this;
var this__36042__auto____$1 = this;
var h__35860__auto__ = self__.__hash;
if(!((h__35860__auto__ == null))){
return h__35860__auto__;
} else {
var h__35860__auto____$1 = cljs.core.hash_imap.call(null,this__36042__auto____$1);
self__.__hash = h__35860__auto____$1;

return h__35860__auto____$1;
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36043__auto__,other__36044__auto__){
var self__ = this;
var this__36043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35413__auto__ = other__36044__auto__;
if(cljs.core.truth_(and__35413__auto__)){
var and__35413__auto____$1 = (this__36043__auto____$1.constructor === other__36044__auto__.constructor);
if(and__35413__auto____$1){
return cljs.core.equiv_map.call(null,this__36043__auto____$1,other__36044__auto__);
} else {
return and__35413__auto____$1;
}
} else {
return and__35413__auto__;
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
return (function (g__$2,p__128175){
var vec__128176 = p__128175;
var n1 = cljs.core.nth.call(null,vec__128176,(0),null);
var n2 = cljs.core.nth.call(null,vec__128176,(1),null);
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
return (function (g__$2,p__128185){
var vec__128186 = p__128185;
var n1 = cljs.core.nth.call(null,vec__128186,(0),null);
var n2 = cljs.core.nth.call(null,vec__128186,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36056__auto__,k__36057__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__36057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36056__auto____$1),self__.__meta),k__36057__auto__);
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36057__auto__)),null));
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36054__auto__,k__36055__auto__,G__128134){
var self__ = this;
var this__36054__auto____$1 = this;
var pred__128187 = cljs.core.keyword_identical_QMARK_;
var expr__128188 = k__36055__auto__;
if(cljs.core.truth_(pred__128187.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__128188))){
return (new loom.graph.BasicEditableGraph(G__128134,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__128187.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__128188))){
return (new loom.graph.BasicEditableGraph(self__.nodeset,G__128134,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36055__auto__,G__128134),null));
}
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36059__auto__){
var self__ = this;
var this__36059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36046__auto__,G__128134){
var self__ = this;
var this__36046__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,G__128134,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36052__auto__,entry__36053__auto__){
var self__ = this;
var this__36052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36053__auto__)){
return cljs.core._assoc.call(null,this__36052__auto____$1,cljs.core._nth.call(null,entry__36053__auto__,(0)),cljs.core._nth.call(null,entry__36053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36052__auto____$1,entry__36053__auto__);
}
});

loom.graph.BasicEditableGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableGraph.cljs$lang$type = true;

loom.graph.BasicEditableGraph.cljs$lang$ctorPrSeq = (function (this__36081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableGraph");
});

loom.graph.BasicEditableGraph.cljs$lang$ctorPrWriter = (function (this__36081__auto__,writer__36082__auto__){
return cljs.core._write.call(null,writer__36082__auto__,"loom.graph/BasicEditableGraph");
});

loom.graph.__GT_BasicEditableGraph = (function loom$graph$__GT_BasicEditableGraph(nodeset,adj){
return (new loom.graph.BasicEditableGraph(nodeset,adj,null,null,null));
});

loom.graph.map__GT_BasicEditableGraph = (function loom$graph$map__GT_BasicEditableGraph(G__128136){
return (new loom.graph.BasicEditableGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__128136),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__128136),null,cljs.core.dissoc.call(null,G__128136,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)),null));
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
var iter__36205__auto__ = ((function (g__$1){
return (function loom$graph$iter__128251(s__128252){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__128252__$1 = s__128252;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__128252__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36201__auto__ = ((function (s__128252__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__128251_$_iter__128253(s__128254){
return (new cljs.core.LazySeq(null,((function (s__128252__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__128254__$1 = s__128254;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__128254__$1);
if(temp__4657__auto____$1){
var s__128254__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__128254__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__128254__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__128256 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__128255 = (0);
while(true){
if((i__128255 < size__36204__auto__)){
var e = cljs.core._nth.call(null,c__36203__auto__,i__128255);
cljs.core.chunk_append.call(null,b__128256,e);

var G__128342 = (i__128255 + (1));
i__128255 = G__128342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128256),loom$graph$iter__128251_$_iter__128253.call(null,cljs.core.chunk_rest.call(null,s__128254__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128256),null);
}
} else {
var e = cljs.core.first.call(null,s__128254__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__128251_$_iter__128253.call(null,cljs.core.rest.call(null,s__128254__$2)));
}
} else {
return null;
}
break;
}
});})(s__128252__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__128252__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,loom$graph$iter__128251.call(null,cljs.core.rest.call(null,s__128252__$1)));
} else {
var G__128368 = cljs.core.rest.call(null,s__128252__$1);
s__128252__$1 = G__128368;
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
return iter__36205__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36205__auto__ = ((function (g__$1){
return (function loom$graph$iter__128265(s__128266){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__128266__$1 = s__128266;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__128266__$1);
if(temp__4657__auto__){
var s__128266__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__128266__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__128266__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__128268 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__128267 = (0);
while(true){
if((i__128267 < size__36204__auto__)){
var n2 = cljs.core._nth.call(null,c__36203__auto__,i__128267);
cljs.core.chunk_append.call(null,b__128268,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__128394 = (i__128267 + (1));
i__128267 = G__128394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128268),loom$graph$iter__128265.call(null,cljs.core.chunk_rest.call(null,s__128266__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128268),null);
}
} else {
var n2 = cljs.core.first.call(null,s__128266__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__128265.call(null,cljs.core.rest.call(null,s__128266__$2)));
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
return iter__36205__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36047__auto__,k__36048__auto__){
var self__ = this;
var this__36047__auto____$1 = this;
return cljs.core._lookup.call(null,this__36047__auto____$1,k__36048__auto__,null);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36049__auto__,k128246,else__36050__auto__){
var self__ = this;
var this__36049__auto____$1 = this;
var G__128275 = (((k128246 instanceof cljs.core.Keyword))?k128246.fqn:null);
switch (G__128275) {
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
return cljs.core.get.call(null,self__.__extmap,k128246,else__36050__auto__);

}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36061__auto__,writer__36062__auto__,opts__36063__auto__){
var self__ = this;
var this__36061__auto____$1 = this;
var pr_pair__36064__auto__ = ((function (this__36061__auto____$1){
return (function (keyval__36065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36062__auto__,cljs.core.pr_writer,""," ","",opts__36063__auto__,keyval__36065__auto__);
});})(this__36061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36062__auto__,pr_pair__36064__auto__,"#loom.graph.BasicEditableDigraph{",", ","}",opts__36063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__128245){
var self__ = this;
var G__128245__$1 = this;
return (new cljs.core.RecordIter((0),G__128245__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36045__auto__){
var self__ = this;
var this__36045__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36041__auto__){
var self__ = this;
var this__36041__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36051__auto__){
var self__ = this;
var this__36051__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36042__auto__){
var self__ = this;
var this__36042__auto____$1 = this;
var h__35860__auto__ = self__.__hash;
if(!((h__35860__auto__ == null))){
return h__35860__auto__;
} else {
var h__35860__auto____$1 = cljs.core.hash_imap.call(null,this__36042__auto____$1);
self__.__hash = h__35860__auto____$1;

return h__35860__auto____$1;
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36043__auto__,other__36044__auto__){
var self__ = this;
var this__36043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35413__auto__ = other__36044__auto__;
if(cljs.core.truth_(and__35413__auto__)){
var and__35413__auto____$1 = (this__36043__auto____$1.constructor === other__36044__auto__.constructor);
if(and__35413__auto____$1){
return cljs.core.equiv_map.call(null,this__36043__auto____$1,other__36044__auto__);
} else {
return and__35413__auto____$1;
}
} else {
return and__35413__auto__;
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
return (function (g__$2,p__128278){
var vec__128279 = p__128278;
var n1 = cljs.core.nth.call(null,vec__128279,(0),null);
var n2 = cljs.core.nth.call(null,vec__128279,(1),null);
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
return (function (g__$2,p__128281){
var vec__128282 = p__128281;
var n1 = cljs.core.nth.call(null,vec__128282,(0),null);
var n2 = cljs.core.nth.call(null,vec__128282,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36056__auto__,k__36057__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__36057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36056__auto____$1),self__.__meta),k__36057__auto__);
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36057__auto__)),null));
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36054__auto__,k__36055__auto__,G__128245){
var self__ = this;
var this__36054__auto____$1 = this;
var pred__128284 = cljs.core.keyword_identical_QMARK_;
var expr__128285 = k__36055__auto__;
if(cljs.core.truth_(pred__128284.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__128285))){
return (new loom.graph.BasicEditableDigraph(G__128245,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__128284.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__128285))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,G__128245,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__128284.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__128285))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,G__128245,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36055__auto__,G__128245),null));
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
var iter__36205__auto__ = ((function (g__$1){
return (function loom$graph$iter__128290(s__128291){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__128291__$1 = s__128291;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__128291__$1);
if(temp__4657__auto__){
var s__128291__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__128291__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__128291__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__128293 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__128292 = (0);
while(true){
if((i__128292 < size__36204__auto__)){
var n2 = cljs.core._nth.call(null,c__36203__auto__,i__128292);
cljs.core.chunk_append.call(null,b__128293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__128472 = (i__128292 + (1));
i__128292 = G__128472;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128293),loom$graph$iter__128290.call(null,cljs.core.chunk_rest.call(null,s__128291__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128293),null);
}
} else {
var n2 = cljs.core.first.call(null,s__128291__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__128290.call(null,cljs.core.rest.call(null,s__128291__$2)));
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
return iter__36205__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36059__auto__){
var self__ = this;
var this__36059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36046__auto__,G__128245){
var self__ = this;
var this__36046__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,G__128245,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36052__auto__,entry__36053__auto__){
var self__ = this;
var this__36052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36053__auto__)){
return cljs.core._assoc.call(null,this__36052__auto____$1,cljs.core._nth.call(null,entry__36053__auto__,(0)),cljs.core._nth.call(null,entry__36053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36052__auto____$1,entry__36053__auto__);
}
});

loom.graph.BasicEditableDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableDigraph.cljs$lang$type = true;

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrSeq = (function (this__36081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableDigraph");
});

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrWriter = (function (this__36081__auto__,writer__36082__auto__){
return cljs.core._write.call(null,writer__36082__auto__,"loom.graph/BasicEditableDigraph");
});

loom.graph.__GT_BasicEditableDigraph = (function loom$graph$__GT_BasicEditableDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableDigraph(nodeset,adj,in$,null,null,null));
});

loom.graph.map__GT_BasicEditableDigraph = (function loom$graph$map__GT_BasicEditableDigraph(G__128247){
return (new loom.graph.BasicEditableDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__128247),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__128247),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__128247),null,cljs.core.dissoc.call(null,G__128247,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)),null));
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
var iter__36205__auto__ = ((function (g__$1){
return (function loom$graph$iter__128524(s__128525){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__128525__$1 = s__128525;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__128525__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36201__auto__ = ((function (s__128525__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__128524_$_iter__128526(s__128527){
return (new cljs.core.LazySeq(null,((function (s__128525__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__128527__$1 = s__128527;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__128527__$1);
if(temp__4657__auto____$1){
var s__128527__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__128527__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__128527__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__128529 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__128528 = (0);
while(true){
if((i__128528 < size__36204__auto__)){
var e = cljs.core._nth.call(null,c__36203__auto__,i__128528);
cljs.core.chunk_append.call(null,b__128529,e);

var G__128626 = (i__128528 + (1));
i__128528 = G__128626;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128529),loom$graph$iter__128524_$_iter__128526.call(null,cljs.core.chunk_rest.call(null,s__128527__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128529),null);
}
} else {
var e = cljs.core.first.call(null,s__128527__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__128524_$_iter__128526.call(null,cljs.core.rest.call(null,s__128527__$2)));
}
} else {
return null;
}
break;
}
});})(s__128525__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__128525__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,loom$graph$iter__128524.call(null,cljs.core.rest.call(null,s__128525__$1)));
} else {
var G__128634 = cljs.core.rest.call(null,s__128525__$1);
s__128525__$1 = G__128634;
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
return iter__36205__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36205__auto__ = ((function (g__$1){
return (function loom$graph$iter__128566(s__128567){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__128567__$1 = s__128567;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__128567__$1);
if(temp__4657__auto__){
var s__128567__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__128567__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__128567__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__128569 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__128568 = (0);
while(true){
if((i__128568 < size__36204__auto__)){
var n2 = cljs.core._nth.call(null,c__36203__auto__,i__128568);
cljs.core.chunk_append.call(null,b__128569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__128664 = (i__128568 + (1));
i__128568 = G__128664;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128569),loom$graph$iter__128566.call(null,cljs.core.chunk_rest.call(null,s__128567__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128569),null);
}
} else {
var n2 = cljs.core.first.call(null,s__128567__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__128566.call(null,cljs.core.rest.call(null,s__128567__$2)));
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
return iter__36205__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36047__auto__,k__36048__auto__){
var self__ = this;
var this__36047__auto____$1 = this;
return cljs.core._lookup.call(null,this__36047__auto____$1,k__36048__auto__,null);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36049__auto__,k128519,else__36050__auto__){
var self__ = this;
var this__36049__auto____$1 = this;
var G__128584 = (((k128519 instanceof cljs.core.Keyword))?k128519.fqn:null);
switch (G__128584) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k128519,else__36050__auto__);

}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36061__auto__,writer__36062__auto__,opts__36063__auto__){
var self__ = this;
var this__36061__auto____$1 = this;
var pr_pair__36064__auto__ = ((function (this__36061__auto____$1){
return (function (keyval__36065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36062__auto__,cljs.core.pr_writer,""," ","",opts__36063__auto__,keyval__36065__auto__);
});})(this__36061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36062__auto__,pr_pair__36064__auto__,"#loom.graph.BasicEditableWeightedGraph{",", ","}",opts__36063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__128518){
var self__ = this;
var G__128518__$1 = this;
return (new cljs.core.RecordIter((0),G__128518__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36045__auto__){
var self__ = this;
var this__36045__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36041__auto__){
var self__ = this;
var this__36041__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36051__auto__){
var self__ = this;
var this__36051__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36042__auto__){
var self__ = this;
var this__36042__auto____$1 = this;
var h__35860__auto__ = self__.__hash;
if(!((h__35860__auto__ == null))){
return h__35860__auto__;
} else {
var h__35860__auto____$1 = cljs.core.hash_imap.call(null,this__36042__auto____$1);
self__.__hash = h__35860__auto____$1;

return h__35860__auto____$1;
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36043__auto__,other__36044__auto__){
var self__ = this;
var this__36043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35413__auto__ = other__36044__auto__;
if(cljs.core.truth_(and__35413__auto__)){
var and__35413__auto____$1 = (this__36043__auto____$1.constructor === other__36044__auto__.constructor);
if(and__35413__auto____$1){
return cljs.core.equiv_map.call(null,this__36043__auto____$1,other__36044__auto__);
} else {
return and__35413__auto____$1;
}
} else {
return and__35413__auto__;
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
return (function (g__$2,p__128594){
var vec__128595 = p__128594;
var n1 = cljs.core.nth.call(null,vec__128595,(0),null);
var n2 = cljs.core.nth.call(null,vec__128595,(1),null);
var vec__128596 = cljs.core.nthnext.call(null,vec__128595,(2));
var w = cljs.core.nth.call(null,vec__128596,(0),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__35425__auto__ = w;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2,n1], null),(function (){var or__35425__auto__ = w;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
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
return (function (g__$2,p__128601){
var vec__128603 = p__128601;
var n1 = cljs.core.nth.call(null,vec__128603,(0),null);
var n2 = cljs.core.nth.call(null,vec__128603,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.dissoc,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36056__auto__,k__36057__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__36057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36056__auto____$1),self__.__meta),k__36057__auto__);
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36057__auto__)),null));
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36054__auto__,k__36055__auto__,G__128518){
var self__ = this;
var this__36054__auto____$1 = this;
var pred__128605 = cljs.core.keyword_identical_QMARK_;
var expr__128606 = k__36055__auto__;
if(cljs.core.truth_(pred__128605.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__128606))){
return (new loom.graph.BasicEditableWeightedGraph(G__128518,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__128605.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__128606))){
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,G__128518,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36055__auto__,G__128518),null));
}
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36059__auto__){
var self__ = this;
var this__36059__auto____$1 = this;
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

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36046__auto__,G__128518){
var self__ = this;
var this__36046__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,G__128518,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36052__auto__,entry__36053__auto__){
var self__ = this;
var this__36052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36053__auto__)){
return cljs.core._assoc.call(null,this__36052__auto____$1,cljs.core._nth.call(null,entry__36053__auto__,(0)),cljs.core._nth.call(null,entry__36053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36052__auto____$1,entry__36053__auto__);
}
});

loom.graph.BasicEditableWeightedGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrSeq = (function (this__36081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableWeightedGraph");
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrWriter = (function (this__36081__auto__,writer__36082__auto__){
return cljs.core._write.call(null,writer__36082__auto__,"loom.graph/BasicEditableWeightedGraph");
});

loom.graph.__GT_BasicEditableWeightedGraph = (function loom$graph$__GT_BasicEditableWeightedGraph(nodeset,adj){
return (new loom.graph.BasicEditableWeightedGraph(nodeset,adj,null,null,null));
});

loom.graph.map__GT_BasicEditableWeightedGraph = (function loom$graph$map__GT_BasicEditableWeightedGraph(G__128522){
return (new loom.graph.BasicEditableWeightedGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__128522),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__128522),null,cljs.core.dissoc.call(null,G__128522,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)),null));
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
var iter__36205__auto__ = ((function (g__$1){
return (function loom$graph$iter__128712(s__128713){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__128713__$1 = s__128713;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__128713__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36201__auto__ = ((function (s__128713__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__128712_$_iter__128714(s__128715){
return (new cljs.core.LazySeq(null,((function (s__128713__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__128715__$1 = s__128715;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__128715__$1);
if(temp__4657__auto____$1){
var s__128715__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__128715__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__128715__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__128717 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__128716 = (0);
while(true){
if((i__128716 < size__36204__auto__)){
var e = cljs.core._nth.call(null,c__36203__auto__,i__128716);
cljs.core.chunk_append.call(null,b__128717,e);

var G__128897 = (i__128716 + (1));
i__128716 = G__128897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128717),loom$graph$iter__128712_$_iter__128714.call(null,cljs.core.chunk_rest.call(null,s__128715__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128717),null);
}
} else {
var e = cljs.core.first.call(null,s__128715__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__128712_$_iter__128714.call(null,cljs.core.rest.call(null,s__128715__$2)));
}
} else {
return null;
}
break;
}
});})(s__128713__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__128713__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,loom$graph$iter__128712.call(null,cljs.core.rest.call(null,s__128713__$1)));
} else {
var G__128906 = cljs.core.rest.call(null,s__128713__$1);
s__128713__$1 = G__128906;
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
return iter__36205__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36205__auto__ = ((function (g__$1){
return (function loom$graph$iter__128718(s__128719){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__128719__$1 = s__128719;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__128719__$1);
if(temp__4657__auto__){
var s__128719__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__128719__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__128719__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__128721 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__128720 = (0);
while(true){
if((i__128720 < size__36204__auto__)){
var n2 = cljs.core._nth.call(null,c__36203__auto__,i__128720);
cljs.core.chunk_append.call(null,b__128721,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__128928 = (i__128720 + (1));
i__128720 = G__128928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128721),loom$graph$iter__128718.call(null,cljs.core.chunk_rest.call(null,s__128719__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128721),null);
}
} else {
var n2 = cljs.core.first.call(null,s__128719__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__128718.call(null,cljs.core.rest.call(null,s__128719__$2)));
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
return iter__36205__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36047__auto__,k__36048__auto__){
var self__ = this;
var this__36047__auto____$1 = this;
return cljs.core._lookup.call(null,this__36047__auto____$1,k__36048__auto__,null);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36049__auto__,k128710,else__36050__auto__){
var self__ = this;
var this__36049__auto____$1 = this;
var G__128722 = (((k128710 instanceof cljs.core.Keyword))?k128710.fqn:null);
switch (G__128722) {
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
return cljs.core.get.call(null,self__.__extmap,k128710,else__36050__auto__);

}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36061__auto__,writer__36062__auto__,opts__36063__auto__){
var self__ = this;
var this__36061__auto____$1 = this;
var pr_pair__36064__auto__ = ((function (this__36061__auto____$1){
return (function (keyval__36065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36062__auto__,cljs.core.pr_writer,""," ","",opts__36063__auto__,keyval__36065__auto__);
});})(this__36061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36062__auto__,pr_pair__36064__auto__,"#loom.graph.BasicEditableWeightedDigraph{",", ","}",opts__36063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__128709){
var self__ = this;
var G__128709__$1 = this;
return (new cljs.core.RecordIter((0),G__128709__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36045__auto__){
var self__ = this;
var this__36045__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36041__auto__){
var self__ = this;
var this__36041__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36051__auto__){
var self__ = this;
var this__36051__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36042__auto__){
var self__ = this;
var this__36042__auto____$1 = this;
var h__35860__auto__ = self__.__hash;
if(!((h__35860__auto__ == null))){
return h__35860__auto__;
} else {
var h__35860__auto____$1 = cljs.core.hash_imap.call(null,this__36042__auto____$1);
self__.__hash = h__35860__auto____$1;

return h__35860__auto____$1;
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36043__auto__,other__36044__auto__){
var self__ = this;
var this__36043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35413__auto__ = other__36044__auto__;
if(cljs.core.truth_(and__35413__auto__)){
var and__35413__auto____$1 = (this__36043__auto____$1.constructor === other__36044__auto__.constructor);
if(and__35413__auto____$1){
return cljs.core.equiv_map.call(null,this__36043__auto____$1,other__36044__auto__);
} else {
return and__35413__auto____$1;
}
} else {
return and__35413__auto__;
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
return (function (g__$2,p__128726){
var vec__128727 = p__128726;
var n1 = cljs.core.nth.call(null,vec__128727,(0),null);
var n2 = cljs.core.nth.call(null,vec__128727,(1),null);
var vec__128728 = cljs.core.nthnext.call(null,vec__128727,(2));
var w = cljs.core.nth.call(null,vec__128728,(0),null);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__35425__auto__ = w;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
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
return (function (g__$2,p__128729){
var vec__128730 = p__128729;
var n1 = cljs.core.nth.call(null,vec__128730,(0),null);
var n2 = cljs.core.nth.call(null,vec__128730,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36056__auto__,k__36057__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__36057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36056__auto____$1),self__.__meta),k__36057__auto__);
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36057__auto__)),null));
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36054__auto__,k__36055__auto__,G__128709){
var self__ = this;
var this__36054__auto____$1 = this;
var pred__128746 = cljs.core.keyword_identical_QMARK_;
var expr__128747 = k__36055__auto__;
if(cljs.core.truth_(pred__128746.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__128747))){
return (new loom.graph.BasicEditableWeightedDigraph(G__128709,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__128746.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__128747))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,G__128709,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__128746.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__128747))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,G__128709,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36055__auto__,G__128709),null));
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
var iter__36205__auto__ = ((function (g__$1){
return (function loom$graph$iter__128797(s__128798){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__128798__$1 = s__128798;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__128798__$1);
if(temp__4657__auto__){
var s__128798__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__128798__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__128798__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__128800 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__128799 = (0);
while(true){
if((i__128799 < size__36204__auto__)){
var n2 = cljs.core._nth.call(null,c__36203__auto__,i__128799);
cljs.core.chunk_append.call(null,b__128800,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__129149 = (i__128799 + (1));
i__128799 = G__129149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128800),loom$graph$iter__128797.call(null,cljs.core.chunk_rest.call(null,s__128798__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__128800),null);
}
} else {
var n2 = cljs.core.first.call(null,s__128798__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__128797.call(null,cljs.core.rest.call(null,s__128798__$2)));
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
return iter__36205__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (tg,p__128856){
var vec__128858 = p__128856;
var n1 = cljs.core.nth.call(null,vec__128858,(0),null);
var n2 = cljs.core.nth.call(null,vec__128858,(1),null);
return loom.graph.add_edges_STAR_.call(null,tg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,n1,loom.graph.weight.call(null,g__$1,n1,n2)], null)], null));
});})(g__$1))
,cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY),loom.graph.edges.call(null,g__$1));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36059__auto__){
var self__ = this;
var this__36059__auto____$1 = this;
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

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36046__auto__,G__128709){
var self__ = this;
var this__36046__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,G__128709,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36052__auto__,entry__36053__auto__){
var self__ = this;
var this__36052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36053__auto__)){
return cljs.core._assoc.call(null,this__36052__auto____$1,cljs.core._nth.call(null,entry__36053__auto__,(0)),cljs.core._nth.call(null,entry__36053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36052__auto____$1,entry__36053__auto__);
}
});

loom.graph.BasicEditableWeightedDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrSeq = (function (this__36081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableWeightedDigraph");
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrWriter = (function (this__36081__auto__,writer__36082__auto__){
return cljs.core._write.call(null,writer__36082__auto__,"loom.graph/BasicEditableWeightedDigraph");
});

loom.graph.__GT_BasicEditableWeightedDigraph = (function loom$graph$__GT_BasicEditableWeightedDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableWeightedDigraph(nodeset,adj,in$,null,null,null));
});

loom.graph.map__GT_BasicEditableWeightedDigraph = (function loom$graph$map__GT_BasicEditableWeightedDigraph(G__128711){
return (new loom.graph.BasicEditableWeightedDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__128711),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__128711),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__128711),null,cljs.core.dissoc.call(null,G__128711,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)),null));
});

loom.graph.call_or_return = (function loom$graph$call_or_return(var_args){
var args__36501__auto__ = [];
var len__36494__auto___129186 = arguments.length;
var i__36495__auto___129187 = (0);
while(true){
if((i__36495__auto___129187 < len__36494__auto___129186)){
args__36501__auto__.push((arguments[i__36495__auto___129187]));

var G__129188 = (i__36495__auto___129187 + (1));
i__36495__auto___129187 = G__129188;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((1) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((1)),(0),null)):null);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36502__auto__);
});

loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if((cljs.core.fn_QMARK_.call(null,f)) || (((f instanceof clojure.lang.IFn)) && (cljs.core.seq.call(null,args)))){
return cljs.core.apply.call(null,f,args);
} else {
return f;
}
});

loom.graph.call_or_return.cljs$lang$maxFixedArity = (1);

loom.graph.call_or_return.cljs$lang$applyTo = (function (seq129184){
var G__129185 = cljs.core.first.call(null,seq129184);
var seq129184__$1 = cljs.core.next.call(null,seq129184);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(G__129185,seq129184__$1);
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
if(cljs.core.truth_((function (){var or__35425__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
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
var iter__36205__auto__ = ((function (g__$1){
return (function loom$graph$iter__129203(s__129204){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__129204__$1 = s__129204;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__129204__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36201__auto__ = ((function (s__129204__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__129203_$_iter__129205(s__129206){
return (new cljs.core.LazySeq(null,((function (s__129204__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__129206__$1 = s__129206;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__129206__$1);
if(temp__4657__auto____$1){
var s__129206__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__129206__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__129206__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__129208 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__129207 = (0);
while(true){
if((i__129207 < size__36204__auto__)){
var nbr = cljs.core._nth.call(null,c__36203__auto__,i__129207);
cljs.core.chunk_append.call(null,b__129208,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__129231 = (i__129207 + (1));
i__129207 = G__129231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__129208),loom$graph$iter__129203_$_iter__129205.call(null,cljs.core.chunk_rest.call(null,s__129206__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__129208),null);
}
} else {
var nbr = cljs.core.first.call(null,s__129206__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__129203_$_iter__129205.call(null,cljs.core.rest.call(null,s__129206__$2)));
}
} else {
return null;
}
break;
}
});})(s__129204__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__129204__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,loom$graph$iter__129203.call(null,cljs.core.rest.call(null,s__129204__$1)));
} else {
var G__129235 = cljs.core.rest.call(null,s__129204__$1);
s__129204__$1 = G__129235;
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
return iter__36205__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36205__auto__ = ((function (g__$1){
return (function loom$graph$iter__129212(s__129213){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__129213__$1 = s__129213;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__129213__$1);
if(temp__4657__auto__){
var s__129213__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__129213__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__129213__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__129215 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__129214 = (0);
while(true){
if((i__129214 < size__36204__auto__)){
var n2 = cljs.core._nth.call(null,c__36203__auto__,i__129214);
cljs.core.chunk_append.call(null,b__129215,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__129242 = (i__129214 + (1));
i__129214 = G__129242;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__129215),loom$graph$iter__129212.call(null,cljs.core.chunk_rest.call(null,s__129213__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__129215),null);
}
} else {
var n2 = cljs.core.first.call(null,s__129213__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__129212.call(null,cljs.core.rest.call(null,s__129213__$2)));
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
return iter__36205__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36047__auto__,k__36048__auto__){
var self__ = this;
var this__36047__auto____$1 = this;
return cljs.core._lookup.call(null,this__36047__auto____$1,k__36048__auto__,null);
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36049__auto__,k129198,else__36050__auto__){
var self__ = this;
var this__36049__auto____$1 = this;
var G__129217 = (((k129198 instanceof cljs.core.Keyword))?k129198.fqn:null);
switch (G__129217) {
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
return cljs.core.get.call(null,self__.__extmap,k129198,else__36050__auto__);

}
});

loom.graph.FlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36061__auto__,writer__36062__auto__,opts__36063__auto__){
var self__ = this;
var this__36061__auto____$1 = this;
var pr_pair__36064__auto__ = ((function (this__36061__auto____$1){
return (function (keyval__36065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36062__auto__,cljs.core.pr_writer,""," ","",opts__36063__auto__,keyval__36065__auto__);
});})(this__36061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36062__auto__,pr_pair__36064__auto__,"#loom.graph.FlyGraph{",", ","}",opts__36063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__129197){
var self__ = this;
var G__129197__$1 = this;
return (new cljs.core.RecordIter((0),G__129197__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.FlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36045__auto__){
var self__ = this;
var this__36045__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36041__auto__){
var self__ = this;
var this__36041__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36051__auto__){
var self__ = this;
var this__36051__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36042__auto__){
var self__ = this;
var this__36042__auto____$1 = this;
var h__35860__auto__ = self__.__hash;
if(!((h__35860__auto__ == null))){
return h__35860__auto__;
} else {
var h__35860__auto____$1 = cljs.core.hash_imap.call(null,this__36042__auto____$1);
self__.__hash = h__35860__auto____$1;

return h__35860__auto____$1;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36043__auto__,other__36044__auto__){
var self__ = this;
var this__36043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35413__auto__ = other__36044__auto__;
if(cljs.core.truth_(and__35413__auto__)){
var and__35413__auto____$1 = (this__36043__auto____$1.constructor === other__36044__auto__.constructor);
if(and__35413__auto____$1){
return cljs.core.equiv_map.call(null,this__36043__auto____$1,other__36044__auto__);
} else {
return and__35413__auto____$1;
}
} else {
return and__35413__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36056__auto__,k__36057__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null], null), null),k__36057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36056__auto____$1),self__.__meta),k__36057__auto__);
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36057__auto__)),null));
}
});

loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36054__auto__,k__36055__auto__,G__129197){
var self__ = this;
var this__36054__auto____$1 = this;
var pred__129223 = cljs.core.keyword_identical_QMARK_;
var expr__129224 = k__36055__auto__;
if(cljs.core.truth_(pred__129223.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__129224))){
return (new loom.graph.FlyGraph(G__129197,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__129223.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__129224))){
return (new loom.graph.FlyGraph(self__.fnodes,G__129197,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__129223.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__129224))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,G__129197,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__129223.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__129224))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__129197,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36055__auto__,G__129197),null));
}
}
}
}
});

loom.graph.FlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36059__auto__){
var self__ = this;
var this__36059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36046__auto__,G__129197){
var self__ = this;
var this__36046__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,G__129197,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36052__auto__,entry__36053__auto__){
var self__ = this;
var this__36052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36053__auto__)){
return cljs.core._assoc.call(null,this__36052__auto____$1,cljs.core._nth.call(null,entry__36053__auto__,(0)),cljs.core._nth.call(null,entry__36053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36052__auto____$1,entry__36053__auto__);
}
});

loom.graph.FlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyGraph.cljs$lang$type = true;

loom.graph.FlyGraph.cljs$lang$ctorPrSeq = (function (this__36081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/FlyGraph");
});

loom.graph.FlyGraph.cljs$lang$ctorPrWriter = (function (this__36081__auto__,writer__36082__auto__){
return cljs.core._write.call(null,writer__36082__auto__,"loom.graph/FlyGraph");
});

loom.graph.__GT_FlyGraph = (function loom$graph$__GT_FlyGraph(fnodes,fedges,fsuccessors,start){
return (new loom.graph.FlyGraph(fnodes,fedges,fsuccessors,start,null,null,null));
});

loom.graph.map__GT_FlyGraph = (function loom$graph$map__GT_FlyGraph(G__129200){
return (new loom.graph.FlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__129200),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__129200),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__129200),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__129200),null,cljs.core.dissoc.call(null,G__129200,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__35425__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
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
var iter__36205__auto__ = ((function (g__$1){
return (function loom$graph$iter__129272(s__129273){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__129273__$1 = s__129273;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__129273__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36201__auto__ = ((function (s__129273__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__129272_$_iter__129274(s__129275){
return (new cljs.core.LazySeq(null,((function (s__129273__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__129275__$1 = s__129275;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__129275__$1);
if(temp__4657__auto____$1){
var s__129275__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__129275__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__129275__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__129277 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__129276 = (0);
while(true){
if((i__129276 < size__36204__auto__)){
var nbr = cljs.core._nth.call(null,c__36203__auto__,i__129276);
cljs.core.chunk_append.call(null,b__129277,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__129298 = (i__129276 + (1));
i__129276 = G__129298;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__129277),loom$graph$iter__129272_$_iter__129274.call(null,cljs.core.chunk_rest.call(null,s__129275__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__129277),null);
}
} else {
var nbr = cljs.core.first.call(null,s__129275__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__129272_$_iter__129274.call(null,cljs.core.rest.call(null,s__129275__$2)));
}
} else {
return null;
}
break;
}
});})(s__129273__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__129273__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,loom$graph$iter__129272.call(null,cljs.core.rest.call(null,s__129273__$1)));
} else {
var G__129305 = cljs.core.rest.call(null,s__129273__$1);
s__129273__$1 = G__129305;
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
return iter__36205__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36205__auto__ = ((function (g__$1){
return (function loom$graph$iter__129283(s__129284){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__129284__$1 = s__129284;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__129284__$1);
if(temp__4657__auto__){
var s__129284__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__129284__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__129284__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__129286 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__129285 = (0);
while(true){
if((i__129285 < size__36204__auto__)){
var n2 = cljs.core._nth.call(null,c__36203__auto__,i__129285);
cljs.core.chunk_append.call(null,b__129286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__129309 = (i__129285 + (1));
i__129285 = G__129309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__129286),loom$graph$iter__129283.call(null,cljs.core.chunk_rest.call(null,s__129284__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__129286),null);
}
} else {
var n2 = cljs.core.first.call(null,s__129284__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__129283.call(null,cljs.core.rest.call(null,s__129284__$2)));
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
return iter__36205__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36047__auto__,k__36048__auto__){
var self__ = this;
var this__36047__auto____$1 = this;
return cljs.core._lookup.call(null,this__36047__auto____$1,k__36048__auto__,null);
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36049__auto__,k129268,else__36050__auto__){
var self__ = this;
var this__36049__auto____$1 = this;
var G__129287 = (((k129268 instanceof cljs.core.Keyword))?k129268.fqn:null);
switch (G__129287) {
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
return cljs.core.get.call(null,self__.__extmap,k129268,else__36050__auto__);

}
});

loom.graph.FlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36061__auto__,writer__36062__auto__,opts__36063__auto__){
var self__ = this;
var this__36061__auto____$1 = this;
var pr_pair__36064__auto__ = ((function (this__36061__auto____$1){
return (function (keyval__36065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36062__auto__,cljs.core.pr_writer,""," ","",opts__36063__auto__,keyval__36065__auto__);
});})(this__36061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36062__auto__,pr_pair__36064__auto__,"#loom.graph.FlyDigraph{",", ","}",opts__36063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__129267){
var self__ = this;
var G__129267__$1 = this;
return (new cljs.core.RecordIter((0),G__129267__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.FlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36045__auto__){
var self__ = this;
var this__36045__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36041__auto__){
var self__ = this;
var this__36041__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36051__auto__){
var self__ = this;
var this__36051__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36042__auto__){
var self__ = this;
var this__36042__auto____$1 = this;
var h__35860__auto__ = self__.__hash;
if(!((h__35860__auto__ == null))){
return h__35860__auto__;
} else {
var h__35860__auto____$1 = cljs.core.hash_imap.call(null,this__36042__auto____$1);
self__.__hash = h__35860__auto____$1;

return h__35860__auto____$1;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36043__auto__,other__36044__auto__){
var self__ = this;
var this__36043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35413__auto__ = other__36044__auto__;
if(cljs.core.truth_(and__35413__auto__)){
var and__35413__auto____$1 = (this__36043__auto____$1.constructor === other__36044__auto__.constructor);
if(and__35413__auto____$1){
return cljs.core.equiv_map.call(null,this__36043__auto____$1,other__36044__auto__);
} else {
return and__35413__auto____$1;
}
} else {
return and__35413__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36056__auto__,k__36057__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__36057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36056__auto____$1),self__.__meta),k__36057__auto__);
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36057__auto__)),null));
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36054__auto__,k__36055__auto__,G__129267){
var self__ = this;
var this__36054__auto____$1 = this;
var pred__129288 = cljs.core.keyword_identical_QMARK_;
var expr__129289 = k__36055__auto__;
if(cljs.core.truth_(pred__129288.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__129289))){
return (new loom.graph.FlyDigraph(G__129267,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__129288.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__129289))){
return (new loom.graph.FlyDigraph(self__.fnodes,G__129267,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__129288.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__129289))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,G__129267,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__129288.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__129289))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__129267,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__129288.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__129289))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__129267,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36055__auto__,G__129267),null));
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

loom.graph.FlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36059__auto__){
var self__ = this;
var this__36059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36046__auto__,G__129267){
var self__ = this;
var this__36046__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,G__129267,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36052__auto__,entry__36053__auto__){
var self__ = this;
var this__36052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36053__auto__)){
return cljs.core._assoc.call(null,this__36052__auto____$1,cljs.core._nth.call(null,entry__36053__auto__,(0)),cljs.core._nth.call(null,entry__36053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36052__auto____$1,entry__36053__auto__);
}
});

loom.graph.FlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyDigraph.cljs$lang$type = true;

loom.graph.FlyDigraph.cljs$lang$ctorPrSeq = (function (this__36081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/FlyDigraph");
});

loom.graph.FlyDigraph.cljs$lang$ctorPrWriter = (function (this__36081__auto__,writer__36082__auto__){
return cljs.core._write.call(null,writer__36082__auto__,"loom.graph/FlyDigraph");
});

loom.graph.__GT_FlyDigraph = (function loom$graph$__GT_FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start){
return (new loom.graph.FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start,null,null,null));
});

loom.graph.map__GT_FlyDigraph = (function loom$graph$map__GT_FlyDigraph(G__129269){
return (new loom.graph.FlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__129269),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__129269),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__129269),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__129269),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__129269),null,cljs.core.dissoc.call(null,G__129269,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__35425__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
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
var iter__36205__auto__ = ((function (g__$1){
return (function loom$graph$iter__129469(s__129470){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__129470__$1 = s__129470;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__129470__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36201__auto__ = ((function (s__129470__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__129469_$_iter__129471(s__129472){
return (new cljs.core.LazySeq(null,((function (s__129470__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__129472__$1 = s__129472;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__129472__$1);
if(temp__4657__auto____$1){
var s__129472__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__129472__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__129472__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__129474 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__129473 = (0);
while(true){
if((i__129473 < size__36204__auto__)){
var nbr = cljs.core._nth.call(null,c__36203__auto__,i__129473);
cljs.core.chunk_append.call(null,b__129474,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__129650 = (i__129473 + (1));
i__129473 = G__129650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__129474),loom$graph$iter__129469_$_iter__129471.call(null,cljs.core.chunk_rest.call(null,s__129472__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__129474),null);
}
} else {
var nbr = cljs.core.first.call(null,s__129472__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__129469_$_iter__129471.call(null,cljs.core.rest.call(null,s__129472__$2)));
}
} else {
return null;
}
break;
}
});})(s__129470__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__129470__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,loom$graph$iter__129469.call(null,cljs.core.rest.call(null,s__129470__$1)));
} else {
var G__129655 = cljs.core.rest.call(null,s__129470__$1);
s__129470__$1 = G__129655;
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
return iter__36205__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36205__auto__ = ((function (g__$1){
return (function loom$graph$iter__129548(s__129549){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__129549__$1 = s__129549;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__129549__$1);
if(temp__4657__auto__){
var s__129549__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__129549__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__129549__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__129551 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__129550 = (0);
while(true){
if((i__129550 < size__36204__auto__)){
var n2 = cljs.core._nth.call(null,c__36203__auto__,i__129550);
cljs.core.chunk_append.call(null,b__129551,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__129656 = (i__129550 + (1));
i__129550 = G__129656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__129551),loom$graph$iter__129548.call(null,cljs.core.chunk_rest.call(null,s__129549__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__129551),null);
}
} else {
var n2 = cljs.core.first.call(null,s__129549__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__129548.call(null,cljs.core.rest.call(null,s__129549__$2)));
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
return iter__36205__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36047__auto__,k__36048__auto__){
var self__ = this;
var this__36047__auto____$1 = this;
return cljs.core._lookup.call(null,this__36047__auto____$1,k__36048__auto__,null);
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36049__auto__,k129460,else__36050__auto__){
var self__ = this;
var this__36049__auto____$1 = this;
var G__129592 = (((k129460 instanceof cljs.core.Keyword))?k129460.fqn:null);
switch (G__129592) {
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
return cljs.core.get.call(null,self__.__extmap,k129460,else__36050__auto__);

}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36061__auto__,writer__36062__auto__,opts__36063__auto__){
var self__ = this;
var this__36061__auto____$1 = this;
var pr_pair__36064__auto__ = ((function (this__36061__auto____$1){
return (function (keyval__36065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36062__auto__,cljs.core.pr_writer,""," ","",opts__36063__auto__,keyval__36065__auto__);
});})(this__36061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36062__auto__,pr_pair__36064__auto__,"#loom.graph.WeightedFlyGraph{",", ","}",opts__36063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__129459){
var self__ = this;
var G__129459__$1 = this;
return (new cljs.core.RecordIter((0),G__129459__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36045__auto__){
var self__ = this;
var this__36045__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36041__auto__){
var self__ = this;
var this__36041__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36051__auto__){
var self__ = this;
var this__36051__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36042__auto__){
var self__ = this;
var this__36042__auto____$1 = this;
var h__35860__auto__ = self__.__hash;
if(!((h__35860__auto__ == null))){
return h__35860__auto__;
} else {
var h__35860__auto____$1 = cljs.core.hash_imap.call(null,this__36042__auto____$1);
self__.__hash = h__35860__auto____$1;

return h__35860__auto____$1;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36043__auto__,other__36044__auto__){
var self__ = this;
var this__36043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35413__auto__ = other__36044__auto__;
if(cljs.core.truth_(and__35413__auto__)){
var and__35413__auto____$1 = (this__36043__auto____$1.constructor === other__36044__auto__.constructor);
if(and__35413__auto____$1){
return cljs.core.equiv_map.call(null,this__36043__auto____$1,other__36044__auto__);
} else {
return and__35413__auto____$1;
}
} else {
return and__35413__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36056__auto__,k__36057__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null], null), null),k__36057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36056__auto____$1),self__.__meta),k__36057__auto__);
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36057__auto__)),null));
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36054__auto__,k__36055__auto__,G__129459){
var self__ = this;
var this__36054__auto____$1 = this;
var pred__129610 = cljs.core.keyword_identical_QMARK_;
var expr__129611 = k__36055__auto__;
if(cljs.core.truth_(pred__129610.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__129611))){
return (new loom.graph.WeightedFlyGraph(G__129459,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__129610.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__129611))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,G__129459,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__129610.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__129611))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,G__129459,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__129610.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__129611))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__129459,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__129610.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__129611))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,G__129459,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36055__auto__,G__129459),null));
}
}
}
}
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36059__auto__){
var self__ = this;
var this__36059__auto____$1 = this;
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

loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36046__auto__,G__129459){
var self__ = this;
var this__36046__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,G__129459,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36052__auto__,entry__36053__auto__){
var self__ = this;
var this__36052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36053__auto__)){
return cljs.core._assoc.call(null,this__36052__auto____$1,cljs.core._nth.call(null,entry__36053__auto__,(0)),cljs.core._nth.call(null,entry__36053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36052__auto____$1,entry__36053__auto__);
}
});

loom.graph.WeightedFlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyGraph.cljs$lang$type = true;

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrSeq = (function (this__36081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/WeightedFlyGraph");
});

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrWriter = (function (this__36081__auto__,writer__36082__auto__){
return cljs.core._write.call(null,writer__36082__auto__,"loom.graph/WeightedFlyGraph");
});

loom.graph.__GT_WeightedFlyGraph = (function loom$graph$__GT_WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start){
return (new loom.graph.WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start,null,null,null));
});

loom.graph.map__GT_WeightedFlyGraph = (function loom$graph$map__GT_WeightedFlyGraph(G__129462){
return (new loom.graph.WeightedFlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__129462),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__129462),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__129462),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__129462),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__129462),null,cljs.core.dissoc.call(null,G__129462,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__35425__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
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
var iter__36205__auto__ = ((function (g__$1){
return (function loom$graph$iter__129678(s__129679){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__129679__$1 = s__129679;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__129679__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36201__auto__ = ((function (s__129679__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__129678_$_iter__129680(s__129681){
return (new cljs.core.LazySeq(null,((function (s__129679__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__129681__$1 = s__129681;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__129681__$1);
if(temp__4657__auto____$1){
var s__129681__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__129681__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__129681__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__129683 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__129682 = (0);
while(true){
if((i__129682 < size__36204__auto__)){
var nbr = cljs.core._nth.call(null,c__36203__auto__,i__129682);
cljs.core.chunk_append.call(null,b__129683,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__129721 = (i__129682 + (1));
i__129682 = G__129721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__129683),loom$graph$iter__129678_$_iter__129680.call(null,cljs.core.chunk_rest.call(null,s__129681__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__129683),null);
}
} else {
var nbr = cljs.core.first.call(null,s__129681__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__129678_$_iter__129680.call(null,cljs.core.rest.call(null,s__129681__$2)));
}
} else {
return null;
}
break;
}
});})(s__129679__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__129679__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,loom$graph$iter__129678.call(null,cljs.core.rest.call(null,s__129679__$1)));
} else {
var G__129723 = cljs.core.rest.call(null,s__129679__$1);
s__129679__$1 = G__129723;
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
return iter__36205__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36205__auto__ = ((function (g__$1){
return (function loom$graph$iter__129692(s__129693){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__129693__$1 = s__129693;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__129693__$1);
if(temp__4657__auto__){
var s__129693__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__129693__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__129693__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__129695 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__129694 = (0);
while(true){
if((i__129694 < size__36204__auto__)){
var n2 = cljs.core._nth.call(null,c__36203__auto__,i__129694);
cljs.core.chunk_append.call(null,b__129695,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__129726 = (i__129694 + (1));
i__129694 = G__129726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__129695),loom$graph$iter__129692.call(null,cljs.core.chunk_rest.call(null,s__129693__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__129695),null);
}
} else {
var n2 = cljs.core.first.call(null,s__129693__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__129692.call(null,cljs.core.rest.call(null,s__129693__$2)));
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
return iter__36205__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36047__auto__,k__36048__auto__){
var self__ = this;
var this__36047__auto____$1 = this;
return cljs.core._lookup.call(null,this__36047__auto____$1,k__36048__auto__,null);
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36049__auto__,k129671,else__36050__auto__){
var self__ = this;
var this__36049__auto____$1 = this;
var G__129698 = (((k129671 instanceof cljs.core.Keyword))?k129671.fqn:null);
switch (G__129698) {
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
return cljs.core.get.call(null,self__.__extmap,k129671,else__36050__auto__);

}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36061__auto__,writer__36062__auto__,opts__36063__auto__){
var self__ = this;
var this__36061__auto____$1 = this;
var pr_pair__36064__auto__ = ((function (this__36061__auto____$1){
return (function (keyval__36065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36062__auto__,cljs.core.pr_writer,""," ","",opts__36063__auto__,keyval__36065__auto__);
});})(this__36061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36062__auto__,pr_pair__36064__auto__,"#loom.graph.WeightedFlyDigraph{",", ","}",opts__36063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__129670){
var self__ = this;
var G__129670__$1 = this;
return (new cljs.core.RecordIter((0),G__129670__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36045__auto__){
var self__ = this;
var this__36045__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36041__auto__){
var self__ = this;
var this__36041__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36051__auto__){
var self__ = this;
var this__36051__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36042__auto__){
var self__ = this;
var this__36042__auto____$1 = this;
var h__35860__auto__ = self__.__hash;
if(!((h__35860__auto__ == null))){
return h__35860__auto__;
} else {
var h__35860__auto____$1 = cljs.core.hash_imap.call(null,this__36042__auto____$1);
self__.__hash = h__35860__auto____$1;

return h__35860__auto____$1;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36043__auto__,other__36044__auto__){
var self__ = this;
var this__36043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35413__auto__ = other__36044__auto__;
if(cljs.core.truth_(and__35413__auto__)){
var and__35413__auto____$1 = (this__36043__auto____$1.constructor === other__36044__auto__.constructor);
if(and__35413__auto____$1){
return cljs.core.equiv_map.call(null,this__36043__auto____$1,other__36044__auto__);
} else {
return and__35413__auto____$1;
}
} else {
return and__35413__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36056__auto__,k__36057__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__36057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36056__auto____$1),self__.__meta),k__36057__auto__);
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36057__auto__)),null));
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36054__auto__,k__36055__auto__,G__129670){
var self__ = this;
var this__36054__auto____$1 = this;
var pred__129706 = cljs.core.keyword_identical_QMARK_;
var expr__129707 = k__36055__auto__;
if(cljs.core.truth_(pred__129706.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__129707))){
return (new loom.graph.WeightedFlyDigraph(G__129670,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__129706.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__129707))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,G__129670,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__129706.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__129707))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,G__129670,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__129706.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__129707))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__129670,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__129706.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__129707))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__129670,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__129706.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__129707))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,G__129670,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36055__auto__,G__129670),null));
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

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36059__auto__){
var self__ = this;
var this__36059__auto____$1 = this;
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

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36046__auto__,G__129670){
var self__ = this;
var this__36046__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,G__129670,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36052__auto__,entry__36053__auto__){
var self__ = this;
var this__36052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36053__auto__)){
return cljs.core._assoc.call(null,this__36052__auto____$1,cljs.core._nth.call(null,entry__36053__auto__,(0)),cljs.core._nth.call(null,entry__36053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36052__auto____$1,entry__36053__auto__);
}
});

loom.graph.WeightedFlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyDigraph.cljs$lang$type = true;

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrSeq = (function (this__36081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/WeightedFlyDigraph");
});

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrWriter = (function (this__36081__auto__,writer__36082__auto__){
return cljs.core._write.call(null,writer__36082__auto__,"loom.graph/WeightedFlyDigraph");
});

loom.graph.__GT_WeightedFlyDigraph = (function loom$graph$__GT_WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start){
return (new loom.graph.WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start,null,null,null));
});

loom.graph.map__GT_WeightedFlyDigraph = (function loom$graph$map__GT_WeightedFlyDigraph(G__129672){
return (new loom.graph.WeightedFlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__129672),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__129672),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__129672),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__129672),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__129672),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__129672),null,cljs.core.dissoc.call(null,G__129672,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
var args__36501__auto__ = [];
var len__36494__auto___129832 = arguments.length;
var i__36495__auto___129834 = (0);
while(true){
if((i__36495__auto___129834 < len__36494__auto___129832)){
args__36501__auto__.push((arguments[i__36495__auto___129834]));

var G__129837 = (i__36495__auto___129834 + (1));
i__36495__auto___129834 = G__129837;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((1) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((1)),(0),null)):null);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36502__auto__);
});

loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),nodes));
});

loom.graph.add_path.cljs$lang$maxFixedArity = (1);

loom.graph.add_path.cljs$lang$applyTo = (function (seq129821){
var G__129823 = cljs.core.first.call(null,seq129821);
var seq129821__$1 = cljs.core.next.call(null,seq129821);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic(G__129823,seq129821__$1);
});
/**
 * Adds a cycle of edges connecting the given nodes in order
 */
loom.graph.add_cycle = (function loom$graph$add_cycle(var_args){
var args__36501__auto__ = [];
var len__36494__auto___129857 = arguments.length;
var i__36495__auto___129858 = (0);
while(true){
if((i__36495__auto___129858 < len__36494__auto___129857)){
args__36501__auto__.push((arguments[i__36495__auto___129858]));

var G__129861 = (i__36495__auto___129858 + (1));
i__36495__auto___129858 = G__129861;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((1) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((1)),(0),null)):null);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36502__auto__);
});

loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),cljs.core.concat.call(null,nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nodes)], null))));
});

loom.graph.add_cycle.cljs$lang$maxFixedArity = (1);

loom.graph.add_cycle.cljs$lang$applyTo = (function (seq129845){
var G__129846 = cljs.core.first.call(null,seq129845);
var seq129845__$1 = cljs.core.next.call(null,seq129845);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic(G__129846,seq129845__$1);
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
var args__36501__auto__ = [];
var len__36494__auto___130103 = arguments.length;
var i__36495__auto___130104 = (0);
while(true){
if((i__36495__auto___130104 < len__36494__auto___130103)){
args__36501__auto__.push((arguments[i__36495__auto___130104]));

var G__130108 = (i__36495__auto___130104 + (1));
i__36495__auto___130104 = G__130108;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((1) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((1)),(0),null)):null);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36502__auto__);
});

loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,inits){
var build = (function loom$graph$build(g__$1,init){
if(cljs.core.truth_(loom.graph.graph_QMARK_.call(null,init))){
if(cljs.core.truth_((function (){var and__35413__auto__ = loom.graph.weighted_QMARK_.call(null,g__$1);
if(cljs.core.truth_(and__35413__auto__)){
return loom.graph.weighted_QMARK_.call(null,init);
} else {
return and__35413__auto__;
}
})())){
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,loom.graph.add_edges,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),(function (){var iter__36205__auto__ = (function loom$graph$build_$_iter__130018(s__130019){
return (new cljs.core.LazySeq(null,(function (){
var s__130019__$1 = s__130019;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__130019__$1);
if(temp__4657__auto__){
var s__130019__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__130019__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__130019__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__130021 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__130020 = (0);
while(true){
if((i__130020 < size__36204__auto__)){
var vec__130025 = cljs.core._nth.call(null,c__36203__auto__,i__130020);
var n1 = cljs.core.nth.call(null,vec__130025,(0),null);
var n2 = cljs.core.nth.call(null,vec__130025,(1),null);
cljs.core.chunk_append.call(null,b__130021,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null));

var G__130120 = (i__130020 + (1));
i__130020 = G__130120;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130021),loom$graph$build_$_iter__130018.call(null,cljs.core.chunk_rest.call(null,s__130019__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130021),null);
}
} else {
var vec__130026 = cljs.core.first.call(null,s__130019__$2);
var n1 = cljs.core.nth.call(null,vec__130026,(0),null);
var n2 = cljs.core.nth.call(null,vec__130026,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null),loom$graph$build_$_iter__130018.call(null,cljs.core.rest.call(null,s__130019__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36205__auto__.call(null,loom.graph.edges.call(null,init));
})()),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
} else {
return cljs.core.assoc.call(null,loom.graph.add_edges_STAR_.call(null,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),loom.graph.edges.call(null,init)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
}
} else {
if(cljs.core.map_QMARK_.call(null,init)){
var es = ((cljs.core.map_QMARK_.call(null,cljs.core.val.call(null,cljs.core.first.call(null,init))))?(function (){var iter__36205__auto__ = (function loom$graph$build_$_iter__130028(s__130029){
return (new cljs.core.LazySeq(null,(function (){
var s__130029__$1 = s__130029;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__130029__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__130045 = cljs.core.first.call(null,xs__5205__auto__);
var n = cljs.core.nth.call(null,vec__130045,(0),null);
var nbrs = cljs.core.nth.call(null,vec__130045,(1),null);
var iterys__36201__auto__ = ((function (s__130029__$1,vec__130045,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function loom$graph$build_$_iter__130028_$_iter__130030(s__130031){
return (new cljs.core.LazySeq(null,((function (s__130029__$1,vec__130045,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__130031__$1 = s__130031;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__130031__$1);
if(temp__4657__auto____$1){
var s__130031__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__130031__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__130031__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__130033 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__130032 = (0);
while(true){
if((i__130032 < size__36204__auto__)){
var vec__130049 = cljs.core._nth.call(null,c__36203__auto__,i__130032);
var nbr = cljs.core.nth.call(null,vec__130049,(0),null);
var wt = cljs.core.nth.call(null,vec__130049,(1),null);
cljs.core.chunk_append.call(null,b__130033,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__130138 = (i__130032 + (1));
i__130032 = G__130138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130033),loom$graph$build_$_iter__130028_$_iter__130030.call(null,cljs.core.chunk_rest.call(null,s__130031__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130033),null);
}
} else {
var vec__130051 = cljs.core.first.call(null,s__130031__$2);
var nbr = cljs.core.nth.call(null,vec__130051,(0),null);
var wt = cljs.core.nth.call(null,vec__130051,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),loom$graph$build_$_iter__130028_$_iter__130030.call(null,cljs.core.rest.call(null,s__130031__$2)));
}
} else {
return null;
}
break;
}
});})(s__130029__$1,vec__130045,n,nbrs,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__130029__$1,vec__130045,n,nbrs,xs__5205__auto__,temp__4657__auto__))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,nbrs));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,loom$graph$build_$_iter__130028.call(null,cljs.core.rest.call(null,s__130029__$1)));
} else {
var G__130141 = cljs.core.rest.call(null,s__130029__$1);
s__130029__$1 = G__130141;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36205__auto__.call(null,init);
})():(function (){var iter__36205__auto__ = (function loom$graph$build_$_iter__130052(s__130053){
return (new cljs.core.LazySeq(null,(function (){
var s__130053__$1 = s__130053;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__130053__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__130066 = cljs.core.first.call(null,xs__5205__auto__);
var n = cljs.core.nth.call(null,vec__130066,(0),null);
var nbrs = cljs.core.nth.call(null,vec__130066,(1),null);
var iterys__36201__auto__ = ((function (s__130053__$1,vec__130066,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function loom$graph$build_$_iter__130052_$_iter__130054(s__130055){
return (new cljs.core.LazySeq(null,((function (s__130053__$1,vec__130066,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__130055__$1 = s__130055;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__130055__$1);
if(temp__4657__auto____$1){
var s__130055__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__130055__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__130055__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__130057 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__130056 = (0);
while(true){
if((i__130056 < size__36204__auto__)){
var nbr = cljs.core._nth.call(null,c__36203__auto__,i__130056);
cljs.core.chunk_append.call(null,b__130057,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__130149 = (i__130056 + (1));
i__130056 = G__130149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130057),loom$graph$build_$_iter__130052_$_iter__130054.call(null,cljs.core.chunk_rest.call(null,s__130055__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__130057),null);
}
} else {
var nbr = cljs.core.first.call(null,s__130055__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$build_$_iter__130052_$_iter__130054.call(null,cljs.core.rest.call(null,s__130055__$2)));
}
} else {
return null;
}
break;
}
});})(s__130053__$1,vec__130066,n,nbrs,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__130053__$1,vec__130066,n,nbrs,xs__5205__auto__,temp__4657__auto__))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,nbrs));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,loom$graph$build_$_iter__130052.call(null,cljs.core.rest.call(null,s__130053__$1)));
} else {
var G__130151 = cljs.core.rest.call(null,s__130053__$1);
s__130053__$1 = G__130151;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36205__auto__.call(null,init);
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

loom.graph.build_graph.cljs$lang$applyTo = (function (seq129883){
var G__129884 = cljs.core.first.call(null,seq129883);
var seq129883__$1 = cljs.core.next.call(null,seq129883);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic(G__129884,seq129883__$1);
});
/**
 * Creates an unweighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.graph = (function loom$graph$graph(var_args){
var args__36501__auto__ = [];
var len__36494__auto___130156 = arguments.length;
var i__36495__auto___130157 = (0);
while(true){
if((i__36495__auto___130157 < len__36494__auto___130156)){
args__36501__auto__.push((arguments[i__36495__auto___130157]));

var G__130158 = (i__36495__auto___130157 + (1));
i__36495__auto___130157 = G__130158;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((0) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((0)),(0),null)):null);
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(argseq__36502__auto__);
});

loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.graph.cljs$lang$maxFixedArity = (0);

loom.graph.graph.cljs$lang$applyTo = (function (seq130154){
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq130154));
});
/**
 * Creates an unweighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.digraph = (function loom$graph$digraph(var_args){
var args__36501__auto__ = [];
var len__36494__auto___130163 = arguments.length;
var i__36495__auto___130164 = (0);
while(true){
if((i__36495__auto___130164 < len__36494__auto___130163)){
args__36501__auto__.push((arguments[i__36495__auto___130164]));

var G__130165 = (i__36495__auto___130164 + (1));
i__36495__auto___130164 = G__130165;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((0) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((0)),(0),null)):null);
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__36502__auto__);
});

loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.digraph.cljs$lang$maxFixedArity = (0);

loom.graph.digraph.cljs$lang$applyTo = (function (seq130161){
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq130161));
});
/**
 * Creates an weighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_graph = (function loom$graph$weighted_graph(var_args){
var args__36501__auto__ = [];
var len__36494__auto___130173 = arguments.length;
var i__36495__auto___130176 = (0);
while(true){
if((i__36495__auto___130176 < len__36494__auto___130173)){
args__36501__auto__.push((arguments[i__36495__auto___130176]));

var G__130183 = (i__36495__auto___130176 + (1));
i__36495__auto___130176 = G__130183;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((0) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__36502__auto__);
});

loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_graph.cljs$lang$maxFixedArity = (0);

loom.graph.weighted_graph.cljs$lang$applyTo = (function (seq130167){
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq130167));
});
/**
 * Creates an weighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_digraph = (function loom$graph$weighted_digraph(var_args){
var args__36501__auto__ = [];
var len__36494__auto___130214 = arguments.length;
var i__36495__auto___130215 = (0);
while(true){
if((i__36495__auto___130215 < len__36494__auto___130214)){
args__36501__auto__.push((arguments[i__36495__auto___130215]));

var G__130218 = (i__36495__auto___130215 + (1));
i__36495__auto___130215 = G__130218;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((0) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__36502__auto__);
});

loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_digraph.cljs$lang$maxFixedArity = (0);

loom.graph.weighted_digraph.cljs$lang$applyTo = (function (seq130206){
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq130206));
});
/**
 * Creates a read-only, ad-hoc graph which uses the provided functions
 *   to return values for nodes, edges, etc. If any members are not functions,
 *   they will be returned as-is. Edges can be inferred if nodes and
 *   successors are provided. Nodes and edges can be inferred if successors and
 *   start are provided.
 */
loom.graph.fly_graph = (function loom$graph$fly_graph(var_args){
var args__36501__auto__ = [];
var len__36494__auto___130236 = arguments.length;
var i__36495__auto___130237 = (0);
while(true){
if((i__36495__auto___130237 < len__36494__auto___130236)){
args__36501__auto__.push((arguments[i__36495__auto___130237]));

var G__130240 = (i__36495__auto___130237 + (1));
i__36495__auto___130237 = G__130240;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((0) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((0)),(0),null)):null);
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__36502__auto__);
});

loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = (function (p__130228){
var map__130229 = p__130228;
var map__130229__$1 = ((((!((map__130229 == null)))?((((map__130229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__130229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__130229):map__130229);
var nodes = cljs.core.get.call(null,map__130229__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__130229__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var successors = cljs.core.get.call(null,map__130229__$1,new cljs.core.Keyword(null,"successors","successors",-1239296414));
var predecessors = cljs.core.get.call(null,map__130229__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var weight = cljs.core.get.call(null,map__130229__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var start = cljs.core.get.call(null,map__130229__$1,new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.truth_((function (){var and__35413__auto__ = predecessors;
if(cljs.core.truth_(and__35413__auto__)){
return weight;
} else {
return and__35413__auto__;
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

loom.graph.fly_graph.cljs$lang$applyTo = (function (seq130222){
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq130222));
});
