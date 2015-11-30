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
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.nodes[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g);
} else {
var m__24867__auto____$1 = (loom.graph.nodes["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g);
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
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.edges[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g);
} else {
var m__24867__auto____$1 = (loom.graph.edges["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g);
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
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.has_node_QMARK_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g,node);
} else {
var m__24867__auto____$1 = (loom.graph.has_node_QMARK_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g,node);
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
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.has_edge_QMARK_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g,n1,n2);
} else {
var m__24867__auto____$1 = (loom.graph.has_edge_QMARK_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g,n1,n2);
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
var args649631 = [];
var len__25269__auto___649637 = arguments.length;
var i__25270__auto___649638 = (0);
while(true){
if((i__25270__auto___649638 < len__25269__auto___649637)){
args649631.push((arguments[i__25270__auto___649638]));

var G__649639 = (i__25270__auto___649638 + (1));
i__25270__auto___649638 = G__649639;
continue;
} else {
}
break;
}

var G__649633 = args649631.length;
switch (G__649633) {
case 1:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args649631.length)].join('')));

}
});

loom.graph.successors.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Graph$successors$arity$1 == null)))){
return g.loom$graph$Graph$successors$arity$1(g);
} else {
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.successors[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g);
} else {
var m__24867__auto____$1 = (loom.graph.successors["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g);
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
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.successors[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g,node);
} else {
var m__24867__auto____$1 = (loom.graph.successors["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g,node);
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
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.out_degree[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g,node);
} else {
var m__24867__auto____$1 = (loom.graph.out_degree["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g,node);
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
var args649634 = [];
var len__25269__auto___649641 = arguments.length;
var i__25270__auto___649642 = (0);
while(true){
if((i__25270__auto___649642 < len__25269__auto___649641)){
args649634.push((arguments[i__25270__auto___649642]));

var G__649643 = (i__25270__auto___649642 + (1));
i__25270__auto___649642 = G__649643;
continue;
} else {
}
break;
}

var G__649636 = args649634.length;
switch (G__649636) {
case 1:
return loom.graph.out_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.out_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args649634.length)].join('')));

}
});

loom.graph.out_edges.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Graph$out_edges$arity$1 == null)))){
return g.loom$graph$Graph$out_edges$arity$1(g);
} else {
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.out_edges[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g);
} else {
var m__24867__auto____$1 = (loom.graph.out_edges["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g);
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
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.out_edges[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g,node);
} else {
var m__24867__auto____$1 = (loom.graph.out_edges["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g,node);
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
var args649645 = [];
var len__25269__auto___649651 = arguments.length;
var i__25270__auto___649652 = (0);
while(true){
if((i__25270__auto___649652 < len__25269__auto___649651)){
args649645.push((arguments[i__25270__auto___649652]));

var G__649653 = (i__25270__auto___649652 + (1));
i__25270__auto___649652 = G__649653;
continue;
} else {
}
break;
}

var G__649647 = args649645.length;
switch (G__649647) {
case 1:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args649645.length)].join('')));

}
});

loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Digraph$predecessors$arity$1 == null)))){
return g.loom$graph$Digraph$predecessors$arity$1(g);
} else {
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.predecessors[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g);
} else {
var m__24867__auto____$1 = (loom.graph.predecessors["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g);
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
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.predecessors[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g,node);
} else {
var m__24867__auto____$1 = (loom.graph.predecessors["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g,node);
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
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.in_degree[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g,node);
} else {
var m__24867__auto____$1 = (loom.graph.in_degree["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g,node);
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
var args649648 = [];
var len__25269__auto___649655 = arguments.length;
var i__25270__auto___649656 = (0);
while(true){
if((i__25270__auto___649656 < len__25269__auto___649655)){
args649648.push((arguments[i__25270__auto___649656]));

var G__649657 = (i__25270__auto___649656 + (1));
i__25270__auto___649656 = G__649657;
continue;
} else {
}
break;
}

var G__649650 = args649648.length;
switch (G__649650) {
case 1:
return loom.graph.in_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.in_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args649648.length)].join('')));

}
});

loom.graph.in_edges.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Digraph$in_edges$arity$1 == null)))){
return g.loom$graph$Digraph$in_edges$arity$1(g);
} else {
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.in_edges[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g);
} else {
var m__24867__auto____$1 = (loom.graph.in_edges["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g);
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
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.in_edges[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g,node);
} else {
var m__24867__auto____$1 = (loom.graph.in_edges["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g,node);
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
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.transpose[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g);
} else {
var m__24867__auto____$1 = (loom.graph.transpose["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g);
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
var args649659 = [];
var len__25269__auto___649662 = arguments.length;
var i__25270__auto___649663 = (0);
while(true){
if((i__25270__auto___649663 < len__25269__auto___649662)){
args649659.push((arguments[i__25270__auto___649663]));

var G__649664 = (i__25270__auto___649663 + (1));
i__25270__auto___649663 = G__649664;
continue;
} else {
}
break;
}

var G__649661 = args649659.length;
switch (G__649661) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args649659.length)].join('')));

}
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$WeightedGraph$weight$arity$1 == null)))){
return g.loom$graph$WeightedGraph$weight$arity$1(g);
} else {
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.weight[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g);
} else {
var m__24867__auto____$1 = (loom.graph.weight["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g);
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
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.weight[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g,e);
} else {
var m__24867__auto____$1 = (loom.graph.weight["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g,e);
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
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.weight[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g,n1,n2);
} else {
var m__24867__auto____$1 = (loom.graph.weight["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g,n1,n2);
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
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.add_nodes_STAR_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g,nodes);
} else {
var m__24867__auto____$1 = (loom.graph.add_nodes_STAR_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g,nodes);
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
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.add_edges_STAR_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g,edges);
} else {
var m__24867__auto____$1 = (loom.graph.add_edges_STAR_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g,edges);
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
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.remove_nodes_STAR_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g,nodes);
} else {
var m__24867__auto____$1 = (loom.graph.remove_nodes_STAR_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g,nodes);
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
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.remove_edges_STAR_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g,edges);
} else {
var m__24867__auto____$1 = (loom.graph.remove_edges_STAR_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g,edges);
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
var x__24866__auto__ = (((g == null))?null:g);
var m__24867__auto__ = (loom.graph.remove_all[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,g);
} else {
var m__24867__auto____$1 = (loom.graph.remove_all["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,g);
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
var x__24866__auto__ = (((edge == null))?null:edge);
var m__24867__auto__ = (loom.graph.src[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,edge);
} else {
var m__24867__auto____$1 = (loom.graph.src["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,edge);
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
var x__24866__auto__ = (((edge == null))?null:edge);
var m__24867__auto__ = (loom.graph.dest[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,edge);
} else {
var m__24867__auto____$1 = (loom.graph.dest["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,edge);
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
var args__25276__auto__ = [];
var len__25269__auto___649668 = arguments.length;
var i__25270__auto___649669 = (0);
while(true){
if((i__25270__auto___649669 < len__25269__auto___649668)){
args__25276__auto__.push((arguments[i__25270__auto___649669]));

var G__649670 = (i__25270__auto___649669 + (1));
i__25270__auto___649669 = G__649670;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_nodes_STAR_.call(null,g,nodes);
});

loom.graph.add_nodes.cljs$lang$maxFixedArity = (1);

loom.graph.add_nodes.cljs$lang$applyTo = (function (seq649666){
var G__649667 = cljs.core.first.call(null,seq649666);
var seq649666__$1 = cljs.core.next.call(null,seq649666);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic(G__649667,seq649666__$1);
});
/**
 * Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].
 *   For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the
 *   latter defaulting to a weight of 1
 */
loom.graph.add_edges = (function loom$graph$add_edges(var_args){
var args__25276__auto__ = [];
var len__25269__auto___649673 = arguments.length;
var i__25270__auto___649674 = (0);
while(true){
if((i__25270__auto___649674 < len__25269__auto___649673)){
args__25276__auto__.push((arguments[i__25270__auto___649674]));

var G__649675 = (i__25270__auto___649674 + (1));
i__25270__auto___649674 = G__649675;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.add_edges_STAR_.call(null,g,edges);
});

loom.graph.add_edges.cljs$lang$maxFixedArity = (1);

loom.graph.add_edges.cljs$lang$applyTo = (function (seq649671){
var G__649672 = cljs.core.first.call(null,seq649671);
var seq649671__$1 = cljs.core.next.call(null,seq649671);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic(G__649672,seq649671__$1);
});
/**
 * Removes nodes from graph g
 */
loom.graph.remove_nodes = (function loom$graph$remove_nodes(var_args){
var args__25276__auto__ = [];
var len__25269__auto___649678 = arguments.length;
var i__25270__auto___649679 = (0);
while(true){
if((i__25270__auto___649679 < len__25269__auto___649678)){
args__25276__auto__.push((arguments[i__25270__auto___649679]));

var G__649680 = (i__25270__auto___649679 + (1));
i__25270__auto___649679 = G__649680;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.remove_nodes_STAR_.call(null,g,nodes);
});

loom.graph.remove_nodes.cljs$lang$maxFixedArity = (1);

loom.graph.remove_nodes.cljs$lang$applyTo = (function (seq649676){
var G__649677 = cljs.core.first.call(null,seq649676);
var seq649676__$1 = cljs.core.next.call(null,seq649676);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic(G__649677,seq649676__$1);
});
/**
 * Removes edges from graph g. Do not include weights
 */
loom.graph.remove_edges = (function loom$graph$remove_edges(var_args){
var args__25276__auto__ = [];
var len__25269__auto___649683 = arguments.length;
var i__25270__auto___649684 = (0);
while(true){
if((i__25270__auto___649684 < len__25269__auto___649683)){
args__25276__auto__.push((arguments[i__25270__auto___649684]));

var G__649685 = (i__25270__auto___649684 + (1));
i__25270__auto___649684 = G__649685;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.remove_edges_STAR_.call(null,g,edges);
});

loom.graph.remove_edges.cljs$lang$maxFixedArity = (1);

loom.graph.remove_edges.cljs$lang$applyTo = (function (seq649681){
var G__649682 = cljs.core.first.call(null,seq649681);
var seq649681__$1 = cljs.core.next.call(null,seq649681);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic(G__649682,seq649681__$1);
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
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),(function (p1__649686_SHARP_){
return cljs.core.apply.call(null,remove_fn,p1__649686_SHARP_,nodes);
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
var iter__24983__auto__ = ((function (g__$1){
return (function loom$graph$iter__649690(s__649691){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__649691__$1 = s__649691;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649691__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n1 = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24979__auto__ = ((function (s__649691__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__649690_$_iter__649692(s__649693){
return (new cljs.core.LazySeq(null,((function (s__649691__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__649693__$1 = s__649693;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__649693__$1);
if(temp__4425__auto____$1){
var s__649693__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649693__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649693__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649695 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649694 = (0);
while(true){
if((i__649694 < size__24982__auto__)){
var e = cljs.core._nth.call(null,c__24981__auto__,i__649694);
cljs.core.chunk_append.call(null,b__649695,e);

var G__649708 = (i__649694 + (1));
i__649694 = G__649708;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649695),loom$graph$iter__649690_$_iter__649692.call(null,cljs.core.chunk_rest.call(null,s__649693__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649695),null);
}
} else {
var e = cljs.core.first.call(null,s__649693__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__649690_$_iter__649692.call(null,cljs.core.rest.call(null,s__649693__$2)));
}
} else {
return null;
}
break;
}
});})(s__649691__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__649691__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,loom$graph$iter__649690.call(null,cljs.core.rest.call(null,s__649691__$1)));
} else {
var G__649709 = cljs.core.rest.call(null,s__649691__$1);
s__649691__$1 = G__649709;
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
return iter__24983__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24983__auto__ = ((function (g__$1){
return (function loom$graph$iter__649696(s__649697){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__649697__$1 = s__649697;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649697__$1);
if(temp__4425__auto__){
var s__649697__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649697__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649697__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649699 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649698 = (0);
while(true){
if((i__649698 < size__24982__auto__)){
var n2 = cljs.core._nth.call(null,c__24981__auto__,i__649698);
cljs.core.chunk_append.call(null,b__649699,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__649710 = (i__649698 + (1));
i__649698 = G__649710;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649699),loom$graph$iter__649696.call(null,cljs.core.chunk_rest.call(null,s__649697__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649699),null);
}
} else {
var n2 = cljs.core.first.call(null,s__649697__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__649696.call(null,cljs.core.rest.call(null,s__649697__$2)));
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
return iter__24983__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24825__auto__,k__24826__auto__){
var self__ = this;
var this__24825__auto____$1 = this;
return cljs.core._lookup.call(null,this__24825__auto____$1,k__24826__auto__,null);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24827__auto__,k649688,else__24828__auto__){
var self__ = this;
var this__24827__auto____$1 = this;
var G__649700 = (((k649688 instanceof cljs.core.Keyword))?k649688.fqn:null);
switch (G__649700) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k649688,else__24828__auto__);

}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24839__auto__,writer__24840__auto__,opts__24841__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
var pr_pair__24842__auto__ = ((function (this__24839__auto____$1){
return (function (keyval__24843__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,cljs.core.pr_writer,""," ","",opts__24841__auto__,keyval__24843__auto__);
});})(this__24839__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,pr_pair__24842__auto__,"#loom.graph.BasicEditableGraph{",", ","}",opts__24841__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__649687){
var self__ = this;
var G__649687__$1 = this;
return (new cljs.core.RecordIter((0),G__649687__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24823__auto__){
var self__ = this;
var this__24823__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24819__auto__){
var self__ = this;
var this__24819__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24820__auto__){
var self__ = this;
var this__24820__auto____$1 = this;
var h__24646__auto__ = self__.__hash;
if(!((h__24646__auto__ == null))){
return h__24646__auto__;
} else {
var h__24646__auto____$1 = cljs.core.hash_imap.call(null,this__24820__auto____$1);
self__.__hash = h__24646__auto____$1;

return h__24646__auto____$1;
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24821__auto__,other__24822__auto__){
var self__ = this;
var this__24821__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24199__auto__ = other__24822__auto__;
if(cljs.core.truth_(and__24199__auto__)){
var and__24199__auto____$1 = (this__24821__auto____$1.constructor === other__24822__auto__.constructor);
if(and__24199__auto____$1){
return cljs.core.equiv_map.call(null,this__24821__auto____$1,other__24822__auto__);
} else {
return and__24199__auto____$1;
}
} else {
return and__24199__auto__;
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
return (function (g__$2,p__649701){
var vec__649702 = p__649701;
var n1 = cljs.core.nth.call(null,vec__649702,(0),null);
var n2 = cljs.core.nth.call(null,vec__649702,(1),null);
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
return (function (g__$2,p__649703){
var vec__649704 = p__649703;
var n1 = cljs.core.nth.call(null,vec__649704,(0),null);
var n2 = cljs.core.nth.call(null,vec__649704,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24834__auto__,k__24835__auto__){
var self__ = this;
var this__24834__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__24835__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24834__auto____$1),self__.__meta),k__24835__auto__);
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24835__auto__)),null));
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24832__auto__,k__24833__auto__,G__649687){
var self__ = this;
var this__24832__auto____$1 = this;
var pred__649705 = cljs.core.keyword_identical_QMARK_;
var expr__649706 = k__24833__auto__;
if(cljs.core.truth_(pred__649705.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__649706))){
return (new loom.graph.BasicEditableGraph(G__649687,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649705.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__649706))){
return (new loom.graph.BasicEditableGraph(self__.nodeset,G__649687,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24833__auto__,G__649687),null));
}
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24837__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24824__auto__,G__649687){
var self__ = this;
var this__24824__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,G__649687,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24830__auto__,entry__24831__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24831__auto__)){
return cljs.core._assoc.call(null,this__24830__auto____$1,cljs.core._nth.call(null,entry__24831__auto__,(0)),cljs.core._nth.call(null,entry__24831__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24830__auto____$1,entry__24831__auto__);
}
});

loom.graph.BasicEditableGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableGraph.cljs$lang$type = true;

loom.graph.BasicEditableGraph.cljs$lang$ctorPrSeq = (function (this__24859__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableGraph");
});

loom.graph.BasicEditableGraph.cljs$lang$ctorPrWriter = (function (this__24859__auto__,writer__24860__auto__){
return cljs.core._write.call(null,writer__24860__auto__,"loom.graph/BasicEditableGraph");
});

loom.graph.__GT_BasicEditableGraph = (function loom$graph$__GT_BasicEditableGraph(nodeset,adj){
return (new loom.graph.BasicEditableGraph(nodeset,adj,null,null,null));
});

loom.graph.map__GT_BasicEditableGraph = (function loom$graph$map__GT_BasicEditableGraph(G__649689){
return (new loom.graph.BasicEditableGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__649689),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__649689),null,cljs.core.dissoc.call(null,G__649689,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)),null));
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
var iter__24983__auto__ = ((function (g__$1){
return (function loom$graph$iter__649715(s__649716){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__649716__$1 = s__649716;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649716__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n1 = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24979__auto__ = ((function (s__649716__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__649715_$_iter__649717(s__649718){
return (new cljs.core.LazySeq(null,((function (s__649716__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__649718__$1 = s__649718;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__649718__$1);
if(temp__4425__auto____$1){
var s__649718__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649718__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649718__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649720 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649719 = (0);
while(true){
if((i__649719 < size__24982__auto__)){
var e = cljs.core._nth.call(null,c__24981__auto__,i__649719);
cljs.core.chunk_append.call(null,b__649720,e);

var G__649737 = (i__649719 + (1));
i__649719 = G__649737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649720),loom$graph$iter__649715_$_iter__649717.call(null,cljs.core.chunk_rest.call(null,s__649718__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649720),null);
}
} else {
var e = cljs.core.first.call(null,s__649718__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__649715_$_iter__649717.call(null,cljs.core.rest.call(null,s__649718__$2)));
}
} else {
return null;
}
break;
}
});})(s__649716__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__649716__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,loom$graph$iter__649715.call(null,cljs.core.rest.call(null,s__649716__$1)));
} else {
var G__649738 = cljs.core.rest.call(null,s__649716__$1);
s__649716__$1 = G__649738;
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
return iter__24983__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24983__auto__ = ((function (g__$1){
return (function loom$graph$iter__649721(s__649722){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__649722__$1 = s__649722;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649722__$1);
if(temp__4425__auto__){
var s__649722__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649722__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649722__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649724 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649723 = (0);
while(true){
if((i__649723 < size__24982__auto__)){
var n2 = cljs.core._nth.call(null,c__24981__auto__,i__649723);
cljs.core.chunk_append.call(null,b__649724,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__649739 = (i__649723 + (1));
i__649723 = G__649739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649724),loom$graph$iter__649721.call(null,cljs.core.chunk_rest.call(null,s__649722__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649724),null);
}
} else {
var n2 = cljs.core.first.call(null,s__649722__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__649721.call(null,cljs.core.rest.call(null,s__649722__$2)));
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
return iter__24983__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24825__auto__,k__24826__auto__){
var self__ = this;
var this__24825__auto____$1 = this;
return cljs.core._lookup.call(null,this__24825__auto____$1,k__24826__auto__,null);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24827__auto__,k649713,else__24828__auto__){
var self__ = this;
var this__24827__auto____$1 = this;
var G__649725 = (((k649713 instanceof cljs.core.Keyword))?k649713.fqn:null);
switch (G__649725) {
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
return cljs.core.get.call(null,self__.__extmap,k649713,else__24828__auto__);

}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24839__auto__,writer__24840__auto__,opts__24841__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
var pr_pair__24842__auto__ = ((function (this__24839__auto____$1){
return (function (keyval__24843__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,cljs.core.pr_writer,""," ","",opts__24841__auto__,keyval__24843__auto__);
});})(this__24839__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,pr_pair__24842__auto__,"#loom.graph.BasicEditableDigraph{",", ","}",opts__24841__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__649712){
var self__ = this;
var G__649712__$1 = this;
return (new cljs.core.RecordIter((0),G__649712__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24823__auto__){
var self__ = this;
var this__24823__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24819__auto__){
var self__ = this;
var this__24819__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24820__auto__){
var self__ = this;
var this__24820__auto____$1 = this;
var h__24646__auto__ = self__.__hash;
if(!((h__24646__auto__ == null))){
return h__24646__auto__;
} else {
var h__24646__auto____$1 = cljs.core.hash_imap.call(null,this__24820__auto____$1);
self__.__hash = h__24646__auto____$1;

return h__24646__auto____$1;
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24821__auto__,other__24822__auto__){
var self__ = this;
var this__24821__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24199__auto__ = other__24822__auto__;
if(cljs.core.truth_(and__24199__auto__)){
var and__24199__auto____$1 = (this__24821__auto____$1.constructor === other__24822__auto__.constructor);
if(and__24199__auto____$1){
return cljs.core.equiv_map.call(null,this__24821__auto____$1,other__24822__auto__);
} else {
return and__24199__auto____$1;
}
} else {
return and__24199__auto__;
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
return (function (g__$2,p__649726){
var vec__649727 = p__649726;
var n1 = cljs.core.nth.call(null,vec__649727,(0),null);
var n2 = cljs.core.nth.call(null,vec__649727,(1),null);
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
return (function (g__$2,p__649728){
var vec__649729 = p__649728;
var n1 = cljs.core.nth.call(null,vec__649729,(0),null);
var n2 = cljs.core.nth.call(null,vec__649729,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24834__auto__,k__24835__auto__){
var self__ = this;
var this__24834__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__24835__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24834__auto____$1),self__.__meta),k__24835__auto__);
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24835__auto__)),null));
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24832__auto__,k__24833__auto__,G__649712){
var self__ = this;
var this__24832__auto____$1 = this;
var pred__649730 = cljs.core.keyword_identical_QMARK_;
var expr__649731 = k__24833__auto__;
if(cljs.core.truth_(pred__649730.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__649731))){
return (new loom.graph.BasicEditableDigraph(G__649712,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649730.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__649731))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,G__649712,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649730.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__649731))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,G__649712,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24833__auto__,G__649712),null));
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
var iter__24983__auto__ = ((function (g__$1){
return (function loom$graph$iter__649733(s__649734){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__649734__$1 = s__649734;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649734__$1);
if(temp__4425__auto__){
var s__649734__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649734__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649734__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649736 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649735 = (0);
while(true){
if((i__649735 < size__24982__auto__)){
var n2 = cljs.core._nth.call(null,c__24981__auto__,i__649735);
cljs.core.chunk_append.call(null,b__649736,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__649741 = (i__649735 + (1));
i__649735 = G__649741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649736),loom$graph$iter__649733.call(null,cljs.core.chunk_rest.call(null,s__649734__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649736),null);
}
} else {
var n2 = cljs.core.first.call(null,s__649734__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__649733.call(null,cljs.core.rest.call(null,s__649734__$2)));
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
return iter__24983__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24837__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24824__auto__,G__649712){
var self__ = this;
var this__24824__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,G__649712,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24830__auto__,entry__24831__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24831__auto__)){
return cljs.core._assoc.call(null,this__24830__auto____$1,cljs.core._nth.call(null,entry__24831__auto__,(0)),cljs.core._nth.call(null,entry__24831__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24830__auto____$1,entry__24831__auto__);
}
});

loom.graph.BasicEditableDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableDigraph.cljs$lang$type = true;

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrSeq = (function (this__24859__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableDigraph");
});

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrWriter = (function (this__24859__auto__,writer__24860__auto__){
return cljs.core._write.call(null,writer__24860__auto__,"loom.graph/BasicEditableDigraph");
});

loom.graph.__GT_BasicEditableDigraph = (function loom$graph$__GT_BasicEditableDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableDigraph(nodeset,adj,in$,null,null,null));
});

loom.graph.map__GT_BasicEditableDigraph = (function loom$graph$map__GT_BasicEditableDigraph(G__649714){
return (new loom.graph.BasicEditableDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__649714),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__649714),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__649714),null,cljs.core.dissoc.call(null,G__649714,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)),null));
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
var iter__24983__auto__ = ((function (g__$1){
return (function loom$graph$iter__649745(s__649746){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__649746__$1 = s__649746;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649746__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n1 = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24979__auto__ = ((function (s__649746__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__649745_$_iter__649747(s__649748){
return (new cljs.core.LazySeq(null,((function (s__649746__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__649748__$1 = s__649748;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__649748__$1);
if(temp__4425__auto____$1){
var s__649748__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649748__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649748__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649750 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649749 = (0);
while(true){
if((i__649749 < size__24982__auto__)){
var e = cljs.core._nth.call(null,c__24981__auto__,i__649749);
cljs.core.chunk_append.call(null,b__649750,e);

var G__649764 = (i__649749 + (1));
i__649749 = G__649764;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649750),loom$graph$iter__649745_$_iter__649747.call(null,cljs.core.chunk_rest.call(null,s__649748__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649750),null);
}
} else {
var e = cljs.core.first.call(null,s__649748__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__649745_$_iter__649747.call(null,cljs.core.rest.call(null,s__649748__$2)));
}
} else {
return null;
}
break;
}
});})(s__649746__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__649746__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,loom$graph$iter__649745.call(null,cljs.core.rest.call(null,s__649746__$1)));
} else {
var G__649765 = cljs.core.rest.call(null,s__649746__$1);
s__649746__$1 = G__649765;
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
return iter__24983__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24983__auto__ = ((function (g__$1){
return (function loom$graph$iter__649751(s__649752){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__649752__$1 = s__649752;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649752__$1);
if(temp__4425__auto__){
var s__649752__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649752__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649752__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649754 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649753 = (0);
while(true){
if((i__649753 < size__24982__auto__)){
var n2 = cljs.core._nth.call(null,c__24981__auto__,i__649753);
cljs.core.chunk_append.call(null,b__649754,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__649766 = (i__649753 + (1));
i__649753 = G__649766;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649754),loom$graph$iter__649751.call(null,cljs.core.chunk_rest.call(null,s__649752__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649754),null);
}
} else {
var n2 = cljs.core.first.call(null,s__649752__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__649751.call(null,cljs.core.rest.call(null,s__649752__$2)));
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
return iter__24983__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24825__auto__,k__24826__auto__){
var self__ = this;
var this__24825__auto____$1 = this;
return cljs.core._lookup.call(null,this__24825__auto____$1,k__24826__auto__,null);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24827__auto__,k649743,else__24828__auto__){
var self__ = this;
var this__24827__auto____$1 = this;
var G__649755 = (((k649743 instanceof cljs.core.Keyword))?k649743.fqn:null);
switch (G__649755) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k649743,else__24828__auto__);

}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24839__auto__,writer__24840__auto__,opts__24841__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
var pr_pair__24842__auto__ = ((function (this__24839__auto____$1){
return (function (keyval__24843__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,cljs.core.pr_writer,""," ","",opts__24841__auto__,keyval__24843__auto__);
});})(this__24839__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,pr_pair__24842__auto__,"#loom.graph.BasicEditableWeightedGraph{",", ","}",opts__24841__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__649742){
var self__ = this;
var G__649742__$1 = this;
return (new cljs.core.RecordIter((0),G__649742__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24823__auto__){
var self__ = this;
var this__24823__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24819__auto__){
var self__ = this;
var this__24819__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24820__auto__){
var self__ = this;
var this__24820__auto____$1 = this;
var h__24646__auto__ = self__.__hash;
if(!((h__24646__auto__ == null))){
return h__24646__auto__;
} else {
var h__24646__auto____$1 = cljs.core.hash_imap.call(null,this__24820__auto____$1);
self__.__hash = h__24646__auto____$1;

return h__24646__auto____$1;
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24821__auto__,other__24822__auto__){
var self__ = this;
var this__24821__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24199__auto__ = other__24822__auto__;
if(cljs.core.truth_(and__24199__auto__)){
var and__24199__auto____$1 = (this__24821__auto____$1.constructor === other__24822__auto__.constructor);
if(and__24199__auto____$1){
return cljs.core.equiv_map.call(null,this__24821__auto____$1,other__24822__auto__);
} else {
return and__24199__auto____$1;
}
} else {
return and__24199__auto__;
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
return (function (g__$2,p__649756){
var vec__649757 = p__649756;
var n1 = cljs.core.nth.call(null,vec__649757,(0),null);
var n2 = cljs.core.nth.call(null,vec__649757,(1),null);
var vec__649758 = cljs.core.nthnext.call(null,vec__649757,(2));
var w = cljs.core.nth.call(null,vec__649758,(0),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__24211__auto__ = w;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2,n1], null),(function (){var or__24211__auto__ = w;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
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
return (function (g__$2,p__649759){
var vec__649760 = p__649759;
var n1 = cljs.core.nth.call(null,vec__649760,(0),null);
var n2 = cljs.core.nth.call(null,vec__649760,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.dissoc,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24834__auto__,k__24835__auto__){
var self__ = this;
var this__24834__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__24835__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24834__auto____$1),self__.__meta),k__24835__auto__);
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24835__auto__)),null));
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24832__auto__,k__24833__auto__,G__649742){
var self__ = this;
var this__24832__auto____$1 = this;
var pred__649761 = cljs.core.keyword_identical_QMARK_;
var expr__649762 = k__24833__auto__;
if(cljs.core.truth_(pred__649761.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__649762))){
return (new loom.graph.BasicEditableWeightedGraph(G__649742,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649761.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__649762))){
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,G__649742,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24833__auto__,G__649742),null));
}
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24837__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
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

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24824__auto__,G__649742){
var self__ = this;
var this__24824__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,G__649742,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24830__auto__,entry__24831__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24831__auto__)){
return cljs.core._assoc.call(null,this__24830__auto____$1,cljs.core._nth.call(null,entry__24831__auto__,(0)),cljs.core._nth.call(null,entry__24831__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24830__auto____$1,entry__24831__auto__);
}
});

loom.graph.BasicEditableWeightedGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrSeq = (function (this__24859__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableWeightedGraph");
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrWriter = (function (this__24859__auto__,writer__24860__auto__){
return cljs.core._write.call(null,writer__24860__auto__,"loom.graph/BasicEditableWeightedGraph");
});

loom.graph.__GT_BasicEditableWeightedGraph = (function loom$graph$__GT_BasicEditableWeightedGraph(nodeset,adj){
return (new loom.graph.BasicEditableWeightedGraph(nodeset,adj,null,null,null));
});

loom.graph.map__GT_BasicEditableWeightedGraph = (function loom$graph$map__GT_BasicEditableWeightedGraph(G__649744){
return (new loom.graph.BasicEditableWeightedGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__649744),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__649744),null,cljs.core.dissoc.call(null,G__649744,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)),null));
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
var iter__24983__auto__ = ((function (g__$1){
return (function loom$graph$iter__649771(s__649772){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__649772__$1 = s__649772;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649772__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n1 = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24979__auto__ = ((function (s__649772__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__649771_$_iter__649773(s__649774){
return (new cljs.core.LazySeq(null,((function (s__649772__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__649774__$1 = s__649774;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__649774__$1);
if(temp__4425__auto____$1){
var s__649774__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649774__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649774__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649776 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649775 = (0);
while(true){
if((i__649775 < size__24982__auto__)){
var e = cljs.core._nth.call(null,c__24981__auto__,i__649775);
cljs.core.chunk_append.call(null,b__649776,e);

var G__649796 = (i__649775 + (1));
i__649775 = G__649796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649776),loom$graph$iter__649771_$_iter__649773.call(null,cljs.core.chunk_rest.call(null,s__649774__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649776),null);
}
} else {
var e = cljs.core.first.call(null,s__649774__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__649771_$_iter__649773.call(null,cljs.core.rest.call(null,s__649774__$2)));
}
} else {
return null;
}
break;
}
});})(s__649772__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__649772__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,loom$graph$iter__649771.call(null,cljs.core.rest.call(null,s__649772__$1)));
} else {
var G__649797 = cljs.core.rest.call(null,s__649772__$1);
s__649772__$1 = G__649797;
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
return iter__24983__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24983__auto__ = ((function (g__$1){
return (function loom$graph$iter__649777(s__649778){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__649778__$1 = s__649778;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649778__$1);
if(temp__4425__auto__){
var s__649778__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649778__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649778__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649780 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649779 = (0);
while(true){
if((i__649779 < size__24982__auto__)){
var n2 = cljs.core._nth.call(null,c__24981__auto__,i__649779);
cljs.core.chunk_append.call(null,b__649780,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__649798 = (i__649779 + (1));
i__649779 = G__649798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649780),loom$graph$iter__649777.call(null,cljs.core.chunk_rest.call(null,s__649778__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649780),null);
}
} else {
var n2 = cljs.core.first.call(null,s__649778__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__649777.call(null,cljs.core.rest.call(null,s__649778__$2)));
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
return iter__24983__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24825__auto__,k__24826__auto__){
var self__ = this;
var this__24825__auto____$1 = this;
return cljs.core._lookup.call(null,this__24825__auto____$1,k__24826__auto__,null);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24827__auto__,k649769,else__24828__auto__){
var self__ = this;
var this__24827__auto____$1 = this;
var G__649781 = (((k649769 instanceof cljs.core.Keyword))?k649769.fqn:null);
switch (G__649781) {
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
return cljs.core.get.call(null,self__.__extmap,k649769,else__24828__auto__);

}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24839__auto__,writer__24840__auto__,opts__24841__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
var pr_pair__24842__auto__ = ((function (this__24839__auto____$1){
return (function (keyval__24843__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,cljs.core.pr_writer,""," ","",opts__24841__auto__,keyval__24843__auto__);
});})(this__24839__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,pr_pair__24842__auto__,"#loom.graph.BasicEditableWeightedDigraph{",", ","}",opts__24841__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__649768){
var self__ = this;
var G__649768__$1 = this;
return (new cljs.core.RecordIter((0),G__649768__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24823__auto__){
var self__ = this;
var this__24823__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24819__auto__){
var self__ = this;
var this__24819__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24820__auto__){
var self__ = this;
var this__24820__auto____$1 = this;
var h__24646__auto__ = self__.__hash;
if(!((h__24646__auto__ == null))){
return h__24646__auto__;
} else {
var h__24646__auto____$1 = cljs.core.hash_imap.call(null,this__24820__auto____$1);
self__.__hash = h__24646__auto____$1;

return h__24646__auto____$1;
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24821__auto__,other__24822__auto__){
var self__ = this;
var this__24821__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24199__auto__ = other__24822__auto__;
if(cljs.core.truth_(and__24199__auto__)){
var and__24199__auto____$1 = (this__24821__auto____$1.constructor === other__24822__auto__.constructor);
if(and__24199__auto____$1){
return cljs.core.equiv_map.call(null,this__24821__auto____$1,other__24822__auto__);
} else {
return and__24199__auto____$1;
}
} else {
return and__24199__auto__;
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
return (function (g__$2,p__649782){
var vec__649783 = p__649782;
var n1 = cljs.core.nth.call(null,vec__649783,(0),null);
var n2 = cljs.core.nth.call(null,vec__649783,(1),null);
var vec__649784 = cljs.core.nthnext.call(null,vec__649783,(2));
var w = cljs.core.nth.call(null,vec__649784,(0),null);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__24211__auto__ = w;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
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
return (function (g__$2,p__649785){
var vec__649786 = p__649785;
var n1 = cljs.core.nth.call(null,vec__649786,(0),null);
var n2 = cljs.core.nth.call(null,vec__649786,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24834__auto__,k__24835__auto__){
var self__ = this;
var this__24834__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__24835__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24834__auto____$1),self__.__meta),k__24835__auto__);
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24835__auto__)),null));
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24832__auto__,k__24833__auto__,G__649768){
var self__ = this;
var this__24832__auto____$1 = this;
var pred__649787 = cljs.core.keyword_identical_QMARK_;
var expr__649788 = k__24833__auto__;
if(cljs.core.truth_(pred__649787.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__649788))){
return (new loom.graph.BasicEditableWeightedDigraph(G__649768,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649787.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__649788))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,G__649768,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649787.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__649788))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,G__649768,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24833__auto__,G__649768),null));
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
var iter__24983__auto__ = ((function (g__$1){
return (function loom$graph$iter__649790(s__649791){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__649791__$1 = s__649791;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649791__$1);
if(temp__4425__auto__){
var s__649791__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649791__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649791__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649793 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649792 = (0);
while(true){
if((i__649792 < size__24982__auto__)){
var n2 = cljs.core._nth.call(null,c__24981__auto__,i__649792);
cljs.core.chunk_append.call(null,b__649793,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__649800 = (i__649792 + (1));
i__649792 = G__649800;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649793),loom$graph$iter__649790.call(null,cljs.core.chunk_rest.call(null,s__649791__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649793),null);
}
} else {
var n2 = cljs.core.first.call(null,s__649791__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__649790.call(null,cljs.core.rest.call(null,s__649791__$2)));
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
return iter__24983__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (tg,p__649794){
var vec__649795 = p__649794;
var n1 = cljs.core.nth.call(null,vec__649795,(0),null);
var n2 = cljs.core.nth.call(null,vec__649795,(1),null);
return loom.graph.add_edges_STAR_.call(null,tg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,n1,loom.graph.weight.call(null,g__$1,n1,n2)], null)], null));
});})(g__$1))
,cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY),loom.graph.edges.call(null,g__$1));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24837__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
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

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24824__auto__,G__649768){
var self__ = this;
var this__24824__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,G__649768,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24830__auto__,entry__24831__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24831__auto__)){
return cljs.core._assoc.call(null,this__24830__auto____$1,cljs.core._nth.call(null,entry__24831__auto__,(0)),cljs.core._nth.call(null,entry__24831__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24830__auto____$1,entry__24831__auto__);
}
});

loom.graph.BasicEditableWeightedDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrSeq = (function (this__24859__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableWeightedDigraph");
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrWriter = (function (this__24859__auto__,writer__24860__auto__){
return cljs.core._write.call(null,writer__24860__auto__,"loom.graph/BasicEditableWeightedDigraph");
});

loom.graph.__GT_BasicEditableWeightedDigraph = (function loom$graph$__GT_BasicEditableWeightedDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableWeightedDigraph(nodeset,adj,in$,null,null,null));
});

loom.graph.map__GT_BasicEditableWeightedDigraph = (function loom$graph$map__GT_BasicEditableWeightedDigraph(G__649770){
return (new loom.graph.BasicEditableWeightedDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__649770),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__649770),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__649770),null,cljs.core.dissoc.call(null,G__649770,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)),null));
});

loom.graph.call_or_return = (function loom$graph$call_or_return(var_args){
var args__25276__auto__ = [];
var len__25269__auto___649803 = arguments.length;
var i__25270__auto___649804 = (0);
while(true){
if((i__25270__auto___649804 < len__25269__auto___649803)){
args__25276__auto__.push((arguments[i__25270__auto___649804]));

var G__649805 = (i__25270__auto___649804 + (1));
i__25270__auto___649804 = G__649805;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if((cljs.core.fn_QMARK_.call(null,f)) || (((f instanceof clojure.lang.IFn)) && (cljs.core.seq.call(null,args)))){
return cljs.core.apply.call(null,f,args);
} else {
return f;
}
});

loom.graph.call_or_return.cljs$lang$maxFixedArity = (1);

loom.graph.call_or_return.cljs$lang$applyTo = (function (seq649801){
var G__649802 = cljs.core.first.call(null,seq649801);
var seq649801__$1 = cljs.core.next.call(null,seq649801);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(G__649802,seq649801__$1);
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
if(cljs.core.truth_((function (){var or__24211__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
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
var iter__24983__auto__ = ((function (g__$1){
return (function loom$graph$iter__649809(s__649810){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__649810__$1 = s__649810;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649810__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24979__auto__ = ((function (s__649810__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__649809_$_iter__649811(s__649812){
return (new cljs.core.LazySeq(null,((function (s__649810__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__649812__$1 = s__649812;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__649812__$1);
if(temp__4425__auto____$1){
var s__649812__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649812__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649812__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649814 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649813 = (0);
while(true){
if((i__649813 < size__24982__auto__)){
var nbr = cljs.core._nth.call(null,c__24981__auto__,i__649813);
cljs.core.chunk_append.call(null,b__649814,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__649823 = (i__649813 + (1));
i__649813 = G__649823;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649814),loom$graph$iter__649809_$_iter__649811.call(null,cljs.core.chunk_rest.call(null,s__649812__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649814),null);
}
} else {
var nbr = cljs.core.first.call(null,s__649812__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__649809_$_iter__649811.call(null,cljs.core.rest.call(null,s__649812__$2)));
}
} else {
return null;
}
break;
}
});})(s__649810__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__649810__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,loom$graph$iter__649809.call(null,cljs.core.rest.call(null,s__649810__$1)));
} else {
var G__649824 = cljs.core.rest.call(null,s__649810__$1);
s__649810__$1 = G__649824;
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
return iter__24983__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24983__auto__ = ((function (g__$1){
return (function loom$graph$iter__649815(s__649816){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__649816__$1 = s__649816;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649816__$1);
if(temp__4425__auto__){
var s__649816__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649816__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649816__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649818 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649817 = (0);
while(true){
if((i__649817 < size__24982__auto__)){
var n2 = cljs.core._nth.call(null,c__24981__auto__,i__649817);
cljs.core.chunk_append.call(null,b__649818,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__649825 = (i__649817 + (1));
i__649817 = G__649825;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649818),loom$graph$iter__649815.call(null,cljs.core.chunk_rest.call(null,s__649816__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649818),null);
}
} else {
var n2 = cljs.core.first.call(null,s__649816__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__649815.call(null,cljs.core.rest.call(null,s__649816__$2)));
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
return iter__24983__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24825__auto__,k__24826__auto__){
var self__ = this;
var this__24825__auto____$1 = this;
return cljs.core._lookup.call(null,this__24825__auto____$1,k__24826__auto__,null);
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24827__auto__,k649807,else__24828__auto__){
var self__ = this;
var this__24827__auto____$1 = this;
var G__649819 = (((k649807 instanceof cljs.core.Keyword))?k649807.fqn:null);
switch (G__649819) {
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
return cljs.core.get.call(null,self__.__extmap,k649807,else__24828__auto__);

}
});

loom.graph.FlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24839__auto__,writer__24840__auto__,opts__24841__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
var pr_pair__24842__auto__ = ((function (this__24839__auto____$1){
return (function (keyval__24843__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,cljs.core.pr_writer,""," ","",opts__24841__auto__,keyval__24843__auto__);
});})(this__24839__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,pr_pair__24842__auto__,"#loom.graph.FlyGraph{",", ","}",opts__24841__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__649806){
var self__ = this;
var G__649806__$1 = this;
return (new cljs.core.RecordIter((0),G__649806__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.FlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24823__auto__){
var self__ = this;
var this__24823__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24819__auto__){
var self__ = this;
var this__24819__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24820__auto__){
var self__ = this;
var this__24820__auto____$1 = this;
var h__24646__auto__ = self__.__hash;
if(!((h__24646__auto__ == null))){
return h__24646__auto__;
} else {
var h__24646__auto____$1 = cljs.core.hash_imap.call(null,this__24820__auto____$1);
self__.__hash = h__24646__auto____$1;

return h__24646__auto____$1;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24821__auto__,other__24822__auto__){
var self__ = this;
var this__24821__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24199__auto__ = other__24822__auto__;
if(cljs.core.truth_(and__24199__auto__)){
var and__24199__auto____$1 = (this__24821__auto____$1.constructor === other__24822__auto__.constructor);
if(and__24199__auto____$1){
return cljs.core.equiv_map.call(null,this__24821__auto____$1,other__24822__auto__);
} else {
return and__24199__auto____$1;
}
} else {
return and__24199__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24834__auto__,k__24835__auto__){
var self__ = this;
var this__24834__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null], null), null),k__24835__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24834__auto____$1),self__.__meta),k__24835__auto__);
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24835__auto__)),null));
}
});

loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24832__auto__,k__24833__auto__,G__649806){
var self__ = this;
var this__24832__auto____$1 = this;
var pred__649820 = cljs.core.keyword_identical_QMARK_;
var expr__649821 = k__24833__auto__;
if(cljs.core.truth_(pred__649820.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__649821))){
return (new loom.graph.FlyGraph(G__649806,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649820.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__649821))){
return (new loom.graph.FlyGraph(self__.fnodes,G__649806,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649820.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__649821))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,G__649806,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649820.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__649821))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__649806,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24833__auto__,G__649806),null));
}
}
}
}
});

loom.graph.FlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24837__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24824__auto__,G__649806){
var self__ = this;
var this__24824__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,G__649806,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24830__auto__,entry__24831__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24831__auto__)){
return cljs.core._assoc.call(null,this__24830__auto____$1,cljs.core._nth.call(null,entry__24831__auto__,(0)),cljs.core._nth.call(null,entry__24831__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24830__auto____$1,entry__24831__auto__);
}
});

loom.graph.FlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyGraph.cljs$lang$type = true;

loom.graph.FlyGraph.cljs$lang$ctorPrSeq = (function (this__24859__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/FlyGraph");
});

loom.graph.FlyGraph.cljs$lang$ctorPrWriter = (function (this__24859__auto__,writer__24860__auto__){
return cljs.core._write.call(null,writer__24860__auto__,"loom.graph/FlyGraph");
});

loom.graph.__GT_FlyGraph = (function loom$graph$__GT_FlyGraph(fnodes,fedges,fsuccessors,start){
return (new loom.graph.FlyGraph(fnodes,fedges,fsuccessors,start,null,null,null));
});

loom.graph.map__GT_FlyGraph = (function loom$graph$map__GT_FlyGraph(G__649808){
return (new loom.graph.FlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__649808),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__649808),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__649808),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__649808),null,cljs.core.dissoc.call(null,G__649808,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__24211__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
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
var iter__24983__auto__ = ((function (g__$1){
return (function loom$graph$iter__649830(s__649831){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__649831__$1 = s__649831;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649831__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24979__auto__ = ((function (s__649831__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__649830_$_iter__649832(s__649833){
return (new cljs.core.LazySeq(null,((function (s__649831__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__649833__$1 = s__649833;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__649833__$1);
if(temp__4425__auto____$1){
var s__649833__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649833__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649833__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649835 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649834 = (0);
while(true){
if((i__649834 < size__24982__auto__)){
var nbr = cljs.core._nth.call(null,c__24981__auto__,i__649834);
cljs.core.chunk_append.call(null,b__649835,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__649844 = (i__649834 + (1));
i__649834 = G__649844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649835),loom$graph$iter__649830_$_iter__649832.call(null,cljs.core.chunk_rest.call(null,s__649833__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649835),null);
}
} else {
var nbr = cljs.core.first.call(null,s__649833__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__649830_$_iter__649832.call(null,cljs.core.rest.call(null,s__649833__$2)));
}
} else {
return null;
}
break;
}
});})(s__649831__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__649831__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,loom$graph$iter__649830.call(null,cljs.core.rest.call(null,s__649831__$1)));
} else {
var G__649845 = cljs.core.rest.call(null,s__649831__$1);
s__649831__$1 = G__649845;
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
return iter__24983__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24983__auto__ = ((function (g__$1){
return (function loom$graph$iter__649836(s__649837){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__649837__$1 = s__649837;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649837__$1);
if(temp__4425__auto__){
var s__649837__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649837__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649837__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649839 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649838 = (0);
while(true){
if((i__649838 < size__24982__auto__)){
var n2 = cljs.core._nth.call(null,c__24981__auto__,i__649838);
cljs.core.chunk_append.call(null,b__649839,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__649846 = (i__649838 + (1));
i__649838 = G__649846;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649839),loom$graph$iter__649836.call(null,cljs.core.chunk_rest.call(null,s__649837__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649839),null);
}
} else {
var n2 = cljs.core.first.call(null,s__649837__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__649836.call(null,cljs.core.rest.call(null,s__649837__$2)));
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
return iter__24983__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24825__auto__,k__24826__auto__){
var self__ = this;
var this__24825__auto____$1 = this;
return cljs.core._lookup.call(null,this__24825__auto____$1,k__24826__auto__,null);
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24827__auto__,k649828,else__24828__auto__){
var self__ = this;
var this__24827__auto____$1 = this;
var G__649840 = (((k649828 instanceof cljs.core.Keyword))?k649828.fqn:null);
switch (G__649840) {
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
return cljs.core.get.call(null,self__.__extmap,k649828,else__24828__auto__);

}
});

loom.graph.FlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24839__auto__,writer__24840__auto__,opts__24841__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
var pr_pair__24842__auto__ = ((function (this__24839__auto____$1){
return (function (keyval__24843__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,cljs.core.pr_writer,""," ","",opts__24841__auto__,keyval__24843__auto__);
});})(this__24839__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,pr_pair__24842__auto__,"#loom.graph.FlyDigraph{",", ","}",opts__24841__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__649827){
var self__ = this;
var G__649827__$1 = this;
return (new cljs.core.RecordIter((0),G__649827__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.FlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24823__auto__){
var self__ = this;
var this__24823__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24819__auto__){
var self__ = this;
var this__24819__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24820__auto__){
var self__ = this;
var this__24820__auto____$1 = this;
var h__24646__auto__ = self__.__hash;
if(!((h__24646__auto__ == null))){
return h__24646__auto__;
} else {
var h__24646__auto____$1 = cljs.core.hash_imap.call(null,this__24820__auto____$1);
self__.__hash = h__24646__auto____$1;

return h__24646__auto____$1;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24821__auto__,other__24822__auto__){
var self__ = this;
var this__24821__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24199__auto__ = other__24822__auto__;
if(cljs.core.truth_(and__24199__auto__)){
var and__24199__auto____$1 = (this__24821__auto____$1.constructor === other__24822__auto__.constructor);
if(and__24199__auto____$1){
return cljs.core.equiv_map.call(null,this__24821__auto____$1,other__24822__auto__);
} else {
return and__24199__auto____$1;
}
} else {
return and__24199__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24834__auto__,k__24835__auto__){
var self__ = this;
var this__24834__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__24835__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24834__auto____$1),self__.__meta),k__24835__auto__);
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24835__auto__)),null));
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24832__auto__,k__24833__auto__,G__649827){
var self__ = this;
var this__24832__auto____$1 = this;
var pred__649841 = cljs.core.keyword_identical_QMARK_;
var expr__649842 = k__24833__auto__;
if(cljs.core.truth_(pred__649841.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__649842))){
return (new loom.graph.FlyDigraph(G__649827,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649841.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__649842))){
return (new loom.graph.FlyDigraph(self__.fnodes,G__649827,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649841.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__649842))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,G__649827,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649841.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__649842))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__649827,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649841.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__649842))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__649827,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24833__auto__,G__649827),null));
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

loom.graph.FlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24837__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24824__auto__,G__649827){
var self__ = this;
var this__24824__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,G__649827,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24830__auto__,entry__24831__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24831__auto__)){
return cljs.core._assoc.call(null,this__24830__auto____$1,cljs.core._nth.call(null,entry__24831__auto__,(0)),cljs.core._nth.call(null,entry__24831__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24830__auto____$1,entry__24831__auto__);
}
});

loom.graph.FlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyDigraph.cljs$lang$type = true;

loom.graph.FlyDigraph.cljs$lang$ctorPrSeq = (function (this__24859__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/FlyDigraph");
});

loom.graph.FlyDigraph.cljs$lang$ctorPrWriter = (function (this__24859__auto__,writer__24860__auto__){
return cljs.core._write.call(null,writer__24860__auto__,"loom.graph/FlyDigraph");
});

loom.graph.__GT_FlyDigraph = (function loom$graph$__GT_FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start){
return (new loom.graph.FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start,null,null,null));
});

loom.graph.map__GT_FlyDigraph = (function loom$graph$map__GT_FlyDigraph(G__649829){
return (new loom.graph.FlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__649829),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__649829),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__649829),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__649829),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__649829),null,cljs.core.dissoc.call(null,G__649829,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__24211__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
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
var iter__24983__auto__ = ((function (g__$1){
return (function loom$graph$iter__649851(s__649852){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__649852__$1 = s__649852;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649852__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24979__auto__ = ((function (s__649852__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__649851_$_iter__649853(s__649854){
return (new cljs.core.LazySeq(null,((function (s__649852__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__649854__$1 = s__649854;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__649854__$1);
if(temp__4425__auto____$1){
var s__649854__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649854__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649854__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649856 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649855 = (0);
while(true){
if((i__649855 < size__24982__auto__)){
var nbr = cljs.core._nth.call(null,c__24981__auto__,i__649855);
cljs.core.chunk_append.call(null,b__649856,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__649865 = (i__649855 + (1));
i__649855 = G__649865;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649856),loom$graph$iter__649851_$_iter__649853.call(null,cljs.core.chunk_rest.call(null,s__649854__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649856),null);
}
} else {
var nbr = cljs.core.first.call(null,s__649854__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__649851_$_iter__649853.call(null,cljs.core.rest.call(null,s__649854__$2)));
}
} else {
return null;
}
break;
}
});})(s__649852__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__649852__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,loom$graph$iter__649851.call(null,cljs.core.rest.call(null,s__649852__$1)));
} else {
var G__649866 = cljs.core.rest.call(null,s__649852__$1);
s__649852__$1 = G__649866;
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
return iter__24983__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24983__auto__ = ((function (g__$1){
return (function loom$graph$iter__649857(s__649858){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__649858__$1 = s__649858;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649858__$1);
if(temp__4425__auto__){
var s__649858__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649858__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649858__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649860 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649859 = (0);
while(true){
if((i__649859 < size__24982__auto__)){
var n2 = cljs.core._nth.call(null,c__24981__auto__,i__649859);
cljs.core.chunk_append.call(null,b__649860,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__649867 = (i__649859 + (1));
i__649859 = G__649867;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649860),loom$graph$iter__649857.call(null,cljs.core.chunk_rest.call(null,s__649858__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649860),null);
}
} else {
var n2 = cljs.core.first.call(null,s__649858__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__649857.call(null,cljs.core.rest.call(null,s__649858__$2)));
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
return iter__24983__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24825__auto__,k__24826__auto__){
var self__ = this;
var this__24825__auto____$1 = this;
return cljs.core._lookup.call(null,this__24825__auto____$1,k__24826__auto__,null);
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24827__auto__,k649849,else__24828__auto__){
var self__ = this;
var this__24827__auto____$1 = this;
var G__649861 = (((k649849 instanceof cljs.core.Keyword))?k649849.fqn:null);
switch (G__649861) {
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
return cljs.core.get.call(null,self__.__extmap,k649849,else__24828__auto__);

}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24839__auto__,writer__24840__auto__,opts__24841__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
var pr_pair__24842__auto__ = ((function (this__24839__auto____$1){
return (function (keyval__24843__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,cljs.core.pr_writer,""," ","",opts__24841__auto__,keyval__24843__auto__);
});})(this__24839__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,pr_pair__24842__auto__,"#loom.graph.WeightedFlyGraph{",", ","}",opts__24841__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__649848){
var self__ = this;
var G__649848__$1 = this;
return (new cljs.core.RecordIter((0),G__649848__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24823__auto__){
var self__ = this;
var this__24823__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24819__auto__){
var self__ = this;
var this__24819__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24820__auto__){
var self__ = this;
var this__24820__auto____$1 = this;
var h__24646__auto__ = self__.__hash;
if(!((h__24646__auto__ == null))){
return h__24646__auto__;
} else {
var h__24646__auto____$1 = cljs.core.hash_imap.call(null,this__24820__auto____$1);
self__.__hash = h__24646__auto____$1;

return h__24646__auto____$1;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24821__auto__,other__24822__auto__){
var self__ = this;
var this__24821__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24199__auto__ = other__24822__auto__;
if(cljs.core.truth_(and__24199__auto__)){
var and__24199__auto____$1 = (this__24821__auto____$1.constructor === other__24822__auto__.constructor);
if(and__24199__auto____$1){
return cljs.core.equiv_map.call(null,this__24821__auto____$1,other__24822__auto__);
} else {
return and__24199__auto____$1;
}
} else {
return and__24199__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24834__auto__,k__24835__auto__){
var self__ = this;
var this__24834__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null], null), null),k__24835__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24834__auto____$1),self__.__meta),k__24835__auto__);
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24835__auto__)),null));
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24832__auto__,k__24833__auto__,G__649848){
var self__ = this;
var this__24832__auto____$1 = this;
var pred__649862 = cljs.core.keyword_identical_QMARK_;
var expr__649863 = k__24833__auto__;
if(cljs.core.truth_(pred__649862.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__649863))){
return (new loom.graph.WeightedFlyGraph(G__649848,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649862.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__649863))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,G__649848,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649862.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__649863))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,G__649848,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649862.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__649863))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__649848,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649862.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__649863))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,G__649848,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24833__auto__,G__649848),null));
}
}
}
}
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24837__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
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

loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24824__auto__,G__649848){
var self__ = this;
var this__24824__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,G__649848,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24830__auto__,entry__24831__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24831__auto__)){
return cljs.core._assoc.call(null,this__24830__auto____$1,cljs.core._nth.call(null,entry__24831__auto__,(0)),cljs.core._nth.call(null,entry__24831__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24830__auto____$1,entry__24831__auto__);
}
});

loom.graph.WeightedFlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyGraph.cljs$lang$type = true;

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrSeq = (function (this__24859__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/WeightedFlyGraph");
});

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrWriter = (function (this__24859__auto__,writer__24860__auto__){
return cljs.core._write.call(null,writer__24860__auto__,"loom.graph/WeightedFlyGraph");
});

loom.graph.__GT_WeightedFlyGraph = (function loom$graph$__GT_WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start){
return (new loom.graph.WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start,null,null,null));
});

loom.graph.map__GT_WeightedFlyGraph = (function loom$graph$map__GT_WeightedFlyGraph(G__649850){
return (new loom.graph.WeightedFlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__649850),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__649850),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__649850),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__649850),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__649850),null,cljs.core.dissoc.call(null,G__649850,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__24211__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
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
var iter__24983__auto__ = ((function (g__$1){
return (function loom$graph$iter__649872(s__649873){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__649873__$1 = s__649873;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649873__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24979__auto__ = ((function (s__649873__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__649872_$_iter__649874(s__649875){
return (new cljs.core.LazySeq(null,((function (s__649873__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__649875__$1 = s__649875;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__649875__$1);
if(temp__4425__auto____$1){
var s__649875__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649875__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649875__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649877 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649876 = (0);
while(true){
if((i__649876 < size__24982__auto__)){
var nbr = cljs.core._nth.call(null,c__24981__auto__,i__649876);
cljs.core.chunk_append.call(null,b__649877,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__649886 = (i__649876 + (1));
i__649876 = G__649886;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649877),loom$graph$iter__649872_$_iter__649874.call(null,cljs.core.chunk_rest.call(null,s__649875__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649877),null);
}
} else {
var nbr = cljs.core.first.call(null,s__649875__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__649872_$_iter__649874.call(null,cljs.core.rest.call(null,s__649875__$2)));
}
} else {
return null;
}
break;
}
});})(s__649873__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__649873__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,loom$graph$iter__649872.call(null,cljs.core.rest.call(null,s__649873__$1)));
} else {
var G__649887 = cljs.core.rest.call(null,s__649873__$1);
s__649873__$1 = G__649887;
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
return iter__24983__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24983__auto__ = ((function (g__$1){
return (function loom$graph$iter__649878(s__649879){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__649879__$1 = s__649879;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__649879__$1);
if(temp__4425__auto__){
var s__649879__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__649879__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__649879__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__649881 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__649880 = (0);
while(true){
if((i__649880 < size__24982__auto__)){
var n2 = cljs.core._nth.call(null,c__24981__auto__,i__649880);
cljs.core.chunk_append.call(null,b__649881,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__649888 = (i__649880 + (1));
i__649880 = G__649888;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649881),loom$graph$iter__649878.call(null,cljs.core.chunk_rest.call(null,s__649879__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__649881),null);
}
} else {
var n2 = cljs.core.first.call(null,s__649879__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__649878.call(null,cljs.core.rest.call(null,s__649879__$2)));
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
return iter__24983__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24825__auto__,k__24826__auto__){
var self__ = this;
var this__24825__auto____$1 = this;
return cljs.core._lookup.call(null,this__24825__auto____$1,k__24826__auto__,null);
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24827__auto__,k649870,else__24828__auto__){
var self__ = this;
var this__24827__auto____$1 = this;
var G__649882 = (((k649870 instanceof cljs.core.Keyword))?k649870.fqn:null);
switch (G__649882) {
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
return cljs.core.get.call(null,self__.__extmap,k649870,else__24828__auto__);

}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24839__auto__,writer__24840__auto__,opts__24841__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
var pr_pair__24842__auto__ = ((function (this__24839__auto____$1){
return (function (keyval__24843__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,cljs.core.pr_writer,""," ","",opts__24841__auto__,keyval__24843__auto__);
});})(this__24839__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,pr_pair__24842__auto__,"#loom.graph.WeightedFlyDigraph{",", ","}",opts__24841__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__649869){
var self__ = this;
var G__649869__$1 = this;
return (new cljs.core.RecordIter((0),G__649869__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24823__auto__){
var self__ = this;
var this__24823__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24819__auto__){
var self__ = this;
var this__24819__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24820__auto__){
var self__ = this;
var this__24820__auto____$1 = this;
var h__24646__auto__ = self__.__hash;
if(!((h__24646__auto__ == null))){
return h__24646__auto__;
} else {
var h__24646__auto____$1 = cljs.core.hash_imap.call(null,this__24820__auto____$1);
self__.__hash = h__24646__auto____$1;

return h__24646__auto____$1;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24821__auto__,other__24822__auto__){
var self__ = this;
var this__24821__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24199__auto__ = other__24822__auto__;
if(cljs.core.truth_(and__24199__auto__)){
var and__24199__auto____$1 = (this__24821__auto____$1.constructor === other__24822__auto__.constructor);
if(and__24199__auto____$1){
return cljs.core.equiv_map.call(null,this__24821__auto____$1,other__24822__auto__);
} else {
return and__24199__auto____$1;
}
} else {
return and__24199__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24834__auto__,k__24835__auto__){
var self__ = this;
var this__24834__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__24835__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24834__auto____$1),self__.__meta),k__24835__auto__);
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24835__auto__)),null));
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24832__auto__,k__24833__auto__,G__649869){
var self__ = this;
var this__24832__auto____$1 = this;
var pred__649883 = cljs.core.keyword_identical_QMARK_;
var expr__649884 = k__24833__auto__;
if(cljs.core.truth_(pred__649883.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__649884))){
return (new loom.graph.WeightedFlyDigraph(G__649869,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649883.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__649884))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,G__649869,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649883.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__649884))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,G__649869,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649883.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__649884))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__649869,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649883.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__649884))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__649869,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__649883.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__649884))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,G__649869,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24833__auto__,G__649869),null));
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

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24837__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
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

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24824__auto__,G__649869){
var self__ = this;
var this__24824__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,G__649869,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24830__auto__,entry__24831__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24831__auto__)){
return cljs.core._assoc.call(null,this__24830__auto____$1,cljs.core._nth.call(null,entry__24831__auto__,(0)),cljs.core._nth.call(null,entry__24831__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24830__auto____$1,entry__24831__auto__);
}
});

loom.graph.WeightedFlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyDigraph.cljs$lang$type = true;

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrSeq = (function (this__24859__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/WeightedFlyDigraph");
});

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrWriter = (function (this__24859__auto__,writer__24860__auto__){
return cljs.core._write.call(null,writer__24860__auto__,"loom.graph/WeightedFlyDigraph");
});

loom.graph.__GT_WeightedFlyDigraph = (function loom$graph$__GT_WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start){
return (new loom.graph.WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start,null,null,null));
});

loom.graph.map__GT_WeightedFlyDigraph = (function loom$graph$map__GT_WeightedFlyDigraph(G__649871){
return (new loom.graph.WeightedFlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__649871),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__649871),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__649871),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__649871),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__649871),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__649871),null,cljs.core.dissoc.call(null,G__649871,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
var args__25276__auto__ = [];
var len__25269__auto___649892 = arguments.length;
var i__25270__auto___649893 = (0);
while(true){
if((i__25270__auto___649893 < len__25269__auto___649892)){
args__25276__auto__.push((arguments[i__25270__auto___649893]));

var G__649894 = (i__25270__auto___649893 + (1));
i__25270__auto___649893 = G__649894;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),nodes));
});

loom.graph.add_path.cljs$lang$maxFixedArity = (1);

loom.graph.add_path.cljs$lang$applyTo = (function (seq649890){
var G__649891 = cljs.core.first.call(null,seq649890);
var seq649890__$1 = cljs.core.next.call(null,seq649890);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic(G__649891,seq649890__$1);
});
/**
 * Adds a cycle of edges connecting the given nodes in order
 */
loom.graph.add_cycle = (function loom$graph$add_cycle(var_args){
var args__25276__auto__ = [];
var len__25269__auto___649897 = arguments.length;
var i__25270__auto___649898 = (0);
while(true){
if((i__25270__auto___649898 < len__25269__auto___649897)){
args__25276__auto__.push((arguments[i__25270__auto___649898]));

var G__649899 = (i__25270__auto___649898 + (1));
i__25270__auto___649898 = G__649899;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),cljs.core.concat.call(null,nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nodes)], null))));
});

loom.graph.add_cycle.cljs$lang$maxFixedArity = (1);

loom.graph.add_cycle.cljs$lang$applyTo = (function (seq649895){
var G__649896 = cljs.core.first.call(null,seq649895);
var seq649895__$1 = cljs.core.next.call(null,seq649895);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic(G__649896,seq649895__$1);
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
var args__25276__auto__ = [];
var len__25269__auto___650038 = arguments.length;
var i__25270__auto___650039 = (0);
while(true){
if((i__25270__auto___650039 < len__25269__auto___650038)){
args__25276__auto__.push((arguments[i__25270__auto___650039]));

var G__650040 = (i__25270__auto___650039 + (1));
i__25270__auto___650039 = G__650040;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,inits){
var build = (function loom$graph$build(g__$1,init){
if(cljs.core.truth_(loom.graph.graph_QMARK_.call(null,init))){
if(cljs.core.truth_((function (){var and__24199__auto__ = loom.graph.weighted_QMARK_.call(null,g__$1);
if(cljs.core.truth_(and__24199__auto__)){
return loom.graph.weighted_QMARK_.call(null,init);
} else {
return and__24199__auto__;
}
})())){
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,loom.graph.add_edges,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),(function (){var iter__24983__auto__ = (function loom$graph$build_$_iter__650006(s__650007){
return (new cljs.core.LazySeq(null,(function (){
var s__650007__$1 = s__650007;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__650007__$1);
if(temp__4425__auto__){
var s__650007__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__650007__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__650007__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__650009 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__650008 = (0);
while(true){
if((i__650008 < size__24982__auto__)){
var vec__650012 = cljs.core._nth.call(null,c__24981__auto__,i__650008);
var n1 = cljs.core.nth.call(null,vec__650012,(0),null);
var n2 = cljs.core.nth.call(null,vec__650012,(1),null);
cljs.core.chunk_append.call(null,b__650009,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null));

var G__650041 = (i__650008 + (1));
i__650008 = G__650041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650009),loom$graph$build_$_iter__650006.call(null,cljs.core.chunk_rest.call(null,s__650007__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650009),null);
}
} else {
var vec__650013 = cljs.core.first.call(null,s__650007__$2);
var n1 = cljs.core.nth.call(null,vec__650013,(0),null);
var n2 = cljs.core.nth.call(null,vec__650013,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null),loom$graph$build_$_iter__650006.call(null,cljs.core.rest.call(null,s__650007__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24983__auto__.call(null,loom.graph.edges.call(null,init));
})()),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
} else {
return cljs.core.assoc.call(null,loom.graph.add_edges_STAR_.call(null,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),loom.graph.edges.call(null,init)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
}
} else {
if(cljs.core.map_QMARK_.call(null,init)){
var es = ((cljs.core.map_QMARK_.call(null,cljs.core.val.call(null,cljs.core.first.call(null,init))))?(function (){var iter__24983__auto__ = (function loom$graph$build_$_iter__650014(s__650015){
return (new cljs.core.LazySeq(null,(function (){
var s__650015__$1 = s__650015;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__650015__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__650025 = cljs.core.first.call(null,xs__4977__auto__);
var n = cljs.core.nth.call(null,vec__650025,(0),null);
var nbrs = cljs.core.nth.call(null,vec__650025,(1),null);
var iterys__24979__auto__ = ((function (s__650015__$1,vec__650025,n,nbrs,xs__4977__auto__,temp__4425__auto__){
return (function loom$graph$build_$_iter__650014_$_iter__650016(s__650017){
return (new cljs.core.LazySeq(null,((function (s__650015__$1,vec__650025,n,nbrs,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__650017__$1 = s__650017;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__650017__$1);
if(temp__4425__auto____$1){
var s__650017__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__650017__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__650017__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__650019 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__650018 = (0);
while(true){
if((i__650018 < size__24982__auto__)){
var vec__650028 = cljs.core._nth.call(null,c__24981__auto__,i__650018);
var nbr = cljs.core.nth.call(null,vec__650028,(0),null);
var wt = cljs.core.nth.call(null,vec__650028,(1),null);
cljs.core.chunk_append.call(null,b__650019,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__650042 = (i__650018 + (1));
i__650018 = G__650042;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650019),loom$graph$build_$_iter__650014_$_iter__650016.call(null,cljs.core.chunk_rest.call(null,s__650017__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650019),null);
}
} else {
var vec__650029 = cljs.core.first.call(null,s__650017__$2);
var nbr = cljs.core.nth.call(null,vec__650029,(0),null);
var wt = cljs.core.nth.call(null,vec__650029,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),loom$graph$build_$_iter__650014_$_iter__650016.call(null,cljs.core.rest.call(null,s__650017__$2)));
}
} else {
return null;
}
break;
}
});})(s__650015__$1,vec__650025,n,nbrs,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__650015__$1,vec__650025,n,nbrs,xs__4977__auto__,temp__4425__auto__))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,nbrs));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,loom$graph$build_$_iter__650014.call(null,cljs.core.rest.call(null,s__650015__$1)));
} else {
var G__650043 = cljs.core.rest.call(null,s__650015__$1);
s__650015__$1 = G__650043;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24983__auto__.call(null,init);
})():(function (){var iter__24983__auto__ = (function loom$graph$build_$_iter__650030(s__650031){
return (new cljs.core.LazySeq(null,(function (){
var s__650031__$1 = s__650031;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__650031__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__650037 = cljs.core.first.call(null,xs__4977__auto__);
var n = cljs.core.nth.call(null,vec__650037,(0),null);
var nbrs = cljs.core.nth.call(null,vec__650037,(1),null);
var iterys__24979__auto__ = ((function (s__650031__$1,vec__650037,n,nbrs,xs__4977__auto__,temp__4425__auto__){
return (function loom$graph$build_$_iter__650030_$_iter__650032(s__650033){
return (new cljs.core.LazySeq(null,((function (s__650031__$1,vec__650037,n,nbrs,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__650033__$1 = s__650033;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__650033__$1);
if(temp__4425__auto____$1){
var s__650033__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__650033__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__650033__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__650035 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__650034 = (0);
while(true){
if((i__650034 < size__24982__auto__)){
var nbr = cljs.core._nth.call(null,c__24981__auto__,i__650034);
cljs.core.chunk_append.call(null,b__650035,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__650044 = (i__650034 + (1));
i__650034 = G__650044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650035),loom$graph$build_$_iter__650030_$_iter__650032.call(null,cljs.core.chunk_rest.call(null,s__650033__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650035),null);
}
} else {
var nbr = cljs.core.first.call(null,s__650033__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$build_$_iter__650030_$_iter__650032.call(null,cljs.core.rest.call(null,s__650033__$2)));
}
} else {
return null;
}
break;
}
});})(s__650031__$1,vec__650037,n,nbrs,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__650031__$1,vec__650037,n,nbrs,xs__4977__auto__,temp__4425__auto__))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,nbrs));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,loom$graph$build_$_iter__650030.call(null,cljs.core.rest.call(null,s__650031__$1)));
} else {
var G__650045 = cljs.core.rest.call(null,s__650031__$1);
s__650031__$1 = G__650045;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24983__auto__.call(null,init);
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

loom.graph.build_graph.cljs$lang$applyTo = (function (seq649908){
var G__649909 = cljs.core.first.call(null,seq649908);
var seq649908__$1 = cljs.core.next.call(null,seq649908);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic(G__649909,seq649908__$1);
});
/**
 * Creates an unweighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.graph = (function loom$graph$graph(var_args){
var args__25276__auto__ = [];
var len__25269__auto___650047 = arguments.length;
var i__25270__auto___650048 = (0);
while(true){
if((i__25270__auto___650048 < len__25269__auto___650047)){
args__25276__auto__.push((arguments[i__25270__auto___650048]));

var G__650049 = (i__25270__auto___650048 + (1));
i__25270__auto___650048 = G__650049;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((0) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((0)),(0))):null);
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(argseq__25277__auto__);
});

loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.graph.cljs$lang$maxFixedArity = (0);

loom.graph.graph.cljs$lang$applyTo = (function (seq650046){
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq650046));
});
/**
 * Creates an unweighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.digraph = (function loom$graph$digraph(var_args){
var args__25276__auto__ = [];
var len__25269__auto___650051 = arguments.length;
var i__25270__auto___650052 = (0);
while(true){
if((i__25270__auto___650052 < len__25269__auto___650051)){
args__25276__auto__.push((arguments[i__25270__auto___650052]));

var G__650053 = (i__25270__auto___650052 + (1));
i__25270__auto___650052 = G__650053;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((0) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((0)),(0))):null);
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__25277__auto__);
});

loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.digraph.cljs$lang$maxFixedArity = (0);

loom.graph.digraph.cljs$lang$applyTo = (function (seq650050){
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq650050));
});
/**
 * Creates an weighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_graph = (function loom$graph$weighted_graph(var_args){
var args__25276__auto__ = [];
var len__25269__auto___650055 = arguments.length;
var i__25270__auto___650056 = (0);
while(true){
if((i__25270__auto___650056 < len__25269__auto___650055)){
args__25276__auto__.push((arguments[i__25270__auto___650056]));

var G__650057 = (i__25270__auto___650056 + (1));
i__25270__auto___650056 = G__650057;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((0) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((0)),(0))):null);
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__25277__auto__);
});

loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_graph.cljs$lang$maxFixedArity = (0);

loom.graph.weighted_graph.cljs$lang$applyTo = (function (seq650054){
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq650054));
});
/**
 * Creates an weighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_digraph = (function loom$graph$weighted_digraph(var_args){
var args__25276__auto__ = [];
var len__25269__auto___650059 = arguments.length;
var i__25270__auto___650060 = (0);
while(true){
if((i__25270__auto___650060 < len__25269__auto___650059)){
args__25276__auto__.push((arguments[i__25270__auto___650060]));

var G__650061 = (i__25270__auto___650060 + (1));
i__25270__auto___650060 = G__650061;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((0) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((0)),(0))):null);
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__25277__auto__);
});

loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_digraph.cljs$lang$maxFixedArity = (0);

loom.graph.weighted_digraph.cljs$lang$applyTo = (function (seq650058){
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq650058));
});
/**
 * Creates a read-only, ad-hoc graph which uses the provided functions
 *   to return values for nodes, edges, etc. If any members are not functions,
 *   they will be returned as-is. Edges can be inferred if nodes and
 *   successors are provided. Nodes and edges can be inferred if successors and
 *   start are provided.
 */
loom.graph.fly_graph = (function loom$graph$fly_graph(var_args){
var args__25276__auto__ = [];
var len__25269__auto___650066 = arguments.length;
var i__25270__auto___650067 = (0);
while(true){
if((i__25270__auto___650067 < len__25269__auto___650066)){
args__25276__auto__.push((arguments[i__25270__auto___650067]));

var G__650068 = (i__25270__auto___650067 + (1));
i__25270__auto___650067 = G__650068;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((0) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((0)),(0))):null);
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__25277__auto__);
});

loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = (function (p__650063){
var map__650064 = p__650063;
var map__650064__$1 = ((((!((map__650064 == null)))?((((map__650064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650064):map__650064);
var nodes = cljs.core.get.call(null,map__650064__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__650064__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var successors = cljs.core.get.call(null,map__650064__$1,new cljs.core.Keyword(null,"successors","successors",-1239296414));
var predecessors = cljs.core.get.call(null,map__650064__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var weight = cljs.core.get.call(null,map__650064__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var start = cljs.core.get.call(null,map__650064__$1,new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.truth_((function (){var and__24199__auto__ = predecessors;
if(cljs.core.truth_(and__24199__auto__)){
return weight;
} else {
return and__24199__auto__;
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

loom.graph.fly_graph.cljs$lang$applyTo = (function (seq650062){
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq650062));
});

//# sourceMappingURL=graph.js.map