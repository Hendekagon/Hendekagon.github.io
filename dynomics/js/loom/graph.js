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
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.nodes[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g);
} else {
var m__24877__auto____$1 = (loom.graph.nodes["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g);
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
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.edges[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g);
} else {
var m__24877__auto____$1 = (loom.graph.edges["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g);
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
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.has_node_QMARK_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g,node);
} else {
var m__24877__auto____$1 = (loom.graph.has_node_QMARK_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g,node);
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
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.has_edge_QMARK_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g,n1,n2);
} else {
var m__24877__auto____$1 = (loom.graph.has_edge_QMARK_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g,n1,n2);
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
var args195393 = [];
var len__25279__auto___195399 = arguments.length;
var i__25280__auto___195400 = (0);
while(true){
if((i__25280__auto___195400 < len__25279__auto___195399)){
args195393.push((arguments[i__25280__auto___195400]));

var G__195401 = (i__25280__auto___195400 + (1));
i__25280__auto___195400 = G__195401;
continue;
} else {
}
break;
}

var G__195395 = args195393.length;
switch (G__195395) {
case 1:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args195393.length)].join('')));

}
});

loom.graph.successors.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Graph$successors$arity$1 == null)))){
return g.loom$graph$Graph$successors$arity$1(g);
} else {
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.successors[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g);
} else {
var m__24877__auto____$1 = (loom.graph.successors["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g);
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
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.successors[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g,node);
} else {
var m__24877__auto____$1 = (loom.graph.successors["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g,node);
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
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.out_degree[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g,node);
} else {
var m__24877__auto____$1 = (loom.graph.out_degree["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g,node);
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
var args195396 = [];
var len__25279__auto___195403 = arguments.length;
var i__25280__auto___195404 = (0);
while(true){
if((i__25280__auto___195404 < len__25279__auto___195403)){
args195396.push((arguments[i__25280__auto___195404]));

var G__195405 = (i__25280__auto___195404 + (1));
i__25280__auto___195404 = G__195405;
continue;
} else {
}
break;
}

var G__195398 = args195396.length;
switch (G__195398) {
case 1:
return loom.graph.out_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.out_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args195396.length)].join('')));

}
});

loom.graph.out_edges.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Graph$out_edges$arity$1 == null)))){
return g.loom$graph$Graph$out_edges$arity$1(g);
} else {
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.out_edges[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g);
} else {
var m__24877__auto____$1 = (loom.graph.out_edges["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g);
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
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.out_edges[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g,node);
} else {
var m__24877__auto____$1 = (loom.graph.out_edges["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g,node);
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
var args195407 = [];
var len__25279__auto___195413 = arguments.length;
var i__25280__auto___195414 = (0);
while(true){
if((i__25280__auto___195414 < len__25279__auto___195413)){
args195407.push((arguments[i__25280__auto___195414]));

var G__195415 = (i__25280__auto___195414 + (1));
i__25280__auto___195414 = G__195415;
continue;
} else {
}
break;
}

var G__195409 = args195407.length;
switch (G__195409) {
case 1:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args195407.length)].join('')));

}
});

loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Digraph$predecessors$arity$1 == null)))){
return g.loom$graph$Digraph$predecessors$arity$1(g);
} else {
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.predecessors[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g);
} else {
var m__24877__auto____$1 = (loom.graph.predecessors["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g);
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
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.predecessors[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g,node);
} else {
var m__24877__auto____$1 = (loom.graph.predecessors["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g,node);
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
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.in_degree[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g,node);
} else {
var m__24877__auto____$1 = (loom.graph.in_degree["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g,node);
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
var args195410 = [];
var len__25279__auto___195417 = arguments.length;
var i__25280__auto___195418 = (0);
while(true){
if((i__25280__auto___195418 < len__25279__auto___195417)){
args195410.push((arguments[i__25280__auto___195418]));

var G__195419 = (i__25280__auto___195418 + (1));
i__25280__auto___195418 = G__195419;
continue;
} else {
}
break;
}

var G__195412 = args195410.length;
switch (G__195412) {
case 1:
return loom.graph.in_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.in_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args195410.length)].join('')));

}
});

loom.graph.in_edges.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Digraph$in_edges$arity$1 == null)))){
return g.loom$graph$Digraph$in_edges$arity$1(g);
} else {
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.in_edges[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g);
} else {
var m__24877__auto____$1 = (loom.graph.in_edges["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g);
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
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.in_edges[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g,node);
} else {
var m__24877__auto____$1 = (loom.graph.in_edges["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g,node);
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
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.transpose[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g);
} else {
var m__24877__auto____$1 = (loom.graph.transpose["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g);
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
var args195421 = [];
var len__25279__auto___195424 = arguments.length;
var i__25280__auto___195425 = (0);
while(true){
if((i__25280__auto___195425 < len__25279__auto___195424)){
args195421.push((arguments[i__25280__auto___195425]));

var G__195426 = (i__25280__auto___195425 + (1));
i__25280__auto___195425 = G__195426;
continue;
} else {
}
break;
}

var G__195423 = args195421.length;
switch (G__195423) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args195421.length)].join('')));

}
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$WeightedGraph$weight$arity$1 == null)))){
return g.loom$graph$WeightedGraph$weight$arity$1(g);
} else {
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.weight[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g);
} else {
var m__24877__auto____$1 = (loom.graph.weight["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g);
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
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.weight[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g,e);
} else {
var m__24877__auto____$1 = (loom.graph.weight["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g,e);
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
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.weight[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g,n1,n2);
} else {
var m__24877__auto____$1 = (loom.graph.weight["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g,n1,n2);
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
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.add_nodes_STAR_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g,nodes);
} else {
var m__24877__auto____$1 = (loom.graph.add_nodes_STAR_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g,nodes);
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
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.add_edges_STAR_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g,edges);
} else {
var m__24877__auto____$1 = (loom.graph.add_edges_STAR_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g,edges);
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
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.remove_nodes_STAR_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g,nodes);
} else {
var m__24877__auto____$1 = (loom.graph.remove_nodes_STAR_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g,nodes);
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
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.remove_edges_STAR_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g,edges);
} else {
var m__24877__auto____$1 = (loom.graph.remove_edges_STAR_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g,edges);
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
var x__24876__auto__ = (((g == null))?null:g);
var m__24877__auto__ = (loom.graph.remove_all[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,g);
} else {
var m__24877__auto____$1 = (loom.graph.remove_all["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,g);
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
var x__24876__auto__ = (((edge == null))?null:edge);
var m__24877__auto__ = (loom.graph.src[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,edge);
} else {
var m__24877__auto____$1 = (loom.graph.src["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,edge);
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
var x__24876__auto__ = (((edge == null))?null:edge);
var m__24877__auto__ = (loom.graph.dest[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,edge);
} else {
var m__24877__auto____$1 = (loom.graph.dest["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,edge);
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
var args__25286__auto__ = [];
var len__25279__auto___195430 = arguments.length;
var i__25280__auto___195431 = (0);
while(true){
if((i__25280__auto___195431 < len__25279__auto___195430)){
args__25286__auto__.push((arguments[i__25280__auto___195431]));

var G__195432 = (i__25280__auto___195431 + (1));
i__25280__auto___195431 = G__195432;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((1) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((1)),(0))):null);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25287__auto__);
});

loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_nodes_STAR_.call(null,g,nodes);
});

loom.graph.add_nodes.cljs$lang$maxFixedArity = (1);

loom.graph.add_nodes.cljs$lang$applyTo = (function (seq195428){
var G__195429 = cljs.core.first.call(null,seq195428);
var seq195428__$1 = cljs.core.next.call(null,seq195428);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic(G__195429,seq195428__$1);
});
/**
 * Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].
 *   For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the
 *   latter defaulting to a weight of 1
 */
loom.graph.add_edges = (function loom$graph$add_edges(var_args){
var args__25286__auto__ = [];
var len__25279__auto___195435 = arguments.length;
var i__25280__auto___195436 = (0);
while(true){
if((i__25280__auto___195436 < len__25279__auto___195435)){
args__25286__auto__.push((arguments[i__25280__auto___195436]));

var G__195437 = (i__25280__auto___195436 + (1));
i__25280__auto___195436 = G__195437;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((1) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((1)),(0))):null);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25287__auto__);
});

loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.add_edges_STAR_.call(null,g,edges);
});

loom.graph.add_edges.cljs$lang$maxFixedArity = (1);

loom.graph.add_edges.cljs$lang$applyTo = (function (seq195433){
var G__195434 = cljs.core.first.call(null,seq195433);
var seq195433__$1 = cljs.core.next.call(null,seq195433);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic(G__195434,seq195433__$1);
});
/**
 * Removes nodes from graph g
 */
loom.graph.remove_nodes = (function loom$graph$remove_nodes(var_args){
var args__25286__auto__ = [];
var len__25279__auto___195440 = arguments.length;
var i__25280__auto___195441 = (0);
while(true){
if((i__25280__auto___195441 < len__25279__auto___195440)){
args__25286__auto__.push((arguments[i__25280__auto___195441]));

var G__195442 = (i__25280__auto___195441 + (1));
i__25280__auto___195441 = G__195442;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((1) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((1)),(0))):null);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25287__auto__);
});

loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.remove_nodes_STAR_.call(null,g,nodes);
});

loom.graph.remove_nodes.cljs$lang$maxFixedArity = (1);

loom.graph.remove_nodes.cljs$lang$applyTo = (function (seq195438){
var G__195439 = cljs.core.first.call(null,seq195438);
var seq195438__$1 = cljs.core.next.call(null,seq195438);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic(G__195439,seq195438__$1);
});
/**
 * Removes edges from graph g. Do not include weights
 */
loom.graph.remove_edges = (function loom$graph$remove_edges(var_args){
var args__25286__auto__ = [];
var len__25279__auto___195445 = arguments.length;
var i__25280__auto___195446 = (0);
while(true){
if((i__25280__auto___195446 < len__25279__auto___195445)){
args__25286__auto__.push((arguments[i__25280__auto___195446]));

var G__195447 = (i__25280__auto___195446 + (1));
i__25280__auto___195446 = G__195447;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((1) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((1)),(0))):null);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25287__auto__);
});

loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.remove_edges_STAR_.call(null,g,edges);
});

loom.graph.remove_edges.cljs$lang$maxFixedArity = (1);

loom.graph.remove_edges.cljs$lang$applyTo = (function (seq195443){
var G__195444 = cljs.core.first.call(null,seq195443);
var seq195443__$1 = cljs.core.next.call(null,seq195443);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic(G__195444,seq195443__$1);
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
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),(function (p1__195448_SHARP_){
return cljs.core.apply.call(null,remove_fn,p1__195448_SHARP_,nodes);
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
var iter__24993__auto__ = ((function (g__$1){
return (function loom$graph$iter__195452(s__195453){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__195453__$1 = s__195453;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195453__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n1 = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24989__auto__ = ((function (s__195453__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__195452_$_iter__195454(s__195455){
return (new cljs.core.LazySeq(null,((function (s__195453__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__195455__$1 = s__195455;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195455__$1);
if(temp__4425__auto____$1){
var s__195455__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195455__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195455__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195457 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195456 = (0);
while(true){
if((i__195456 < size__24992__auto__)){
var e = cljs.core._nth.call(null,c__24991__auto__,i__195456);
cljs.core.chunk_append.call(null,b__195457,e);

var G__195470 = (i__195456 + (1));
i__195456 = G__195470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195457),loom$graph$iter__195452_$_iter__195454.call(null,cljs.core.chunk_rest.call(null,s__195455__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195457),null);
}
} else {
var e = cljs.core.first.call(null,s__195455__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__195452_$_iter__195454.call(null,cljs.core.rest.call(null,s__195455__$2)));
}
} else {
return null;
}
break;
}
});})(s__195453__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__195453__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,loom$graph$iter__195452.call(null,cljs.core.rest.call(null,s__195453__$1)));
} else {
var G__195471 = cljs.core.rest.call(null,s__195453__$1);
s__195453__$1 = G__195471;
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
return iter__24993__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24993__auto__ = ((function (g__$1){
return (function loom$graph$iter__195458(s__195459){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__195459__$1 = s__195459;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195459__$1);
if(temp__4425__auto__){
var s__195459__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195459__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195459__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195461 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195460 = (0);
while(true){
if((i__195460 < size__24992__auto__)){
var n2 = cljs.core._nth.call(null,c__24991__auto__,i__195460);
cljs.core.chunk_append.call(null,b__195461,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__195472 = (i__195460 + (1));
i__195460 = G__195472;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195461),loom$graph$iter__195458.call(null,cljs.core.chunk_rest.call(null,s__195459__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195461),null);
}
} else {
var n2 = cljs.core.first.call(null,s__195459__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__195458.call(null,cljs.core.rest.call(null,s__195459__$2)));
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
return iter__24993__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24835__auto__,k__24836__auto__){
var self__ = this;
var this__24835__auto____$1 = this;
return cljs.core._lookup.call(null,this__24835__auto____$1,k__24836__auto__,null);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24837__auto__,k195450,else__24838__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
var G__195462 = (((k195450 instanceof cljs.core.Keyword))?k195450.fqn:null);
switch (G__195462) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k195450,else__24838__auto__);

}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24849__auto__,writer__24850__auto__,opts__24851__auto__){
var self__ = this;
var this__24849__auto____$1 = this;
var pr_pair__24852__auto__ = ((function (this__24849__auto____$1){
return (function (keyval__24853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,cljs.core.pr_writer,""," ","",opts__24851__auto__,keyval__24853__auto__);
});})(this__24849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,pr_pair__24852__auto__,"#loom.graph.BasicEditableGraph{",", ","}",opts__24851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__195449){
var self__ = this;
var G__195449__$1 = this;
return (new cljs.core.RecordIter((0),G__195449__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24833__auto__){
var self__ = this;
var this__24833__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24839__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24830__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
var h__24656__auto__ = self__.__hash;
if(!((h__24656__auto__ == null))){
return h__24656__auto__;
} else {
var h__24656__auto____$1 = cljs.core.hash_imap.call(null,this__24830__auto____$1);
self__.__hash = h__24656__auto____$1;

return h__24656__auto____$1;
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24831__auto__,other__24832__auto__){
var self__ = this;
var this__24831__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24209__auto__ = other__24832__auto__;
if(cljs.core.truth_(and__24209__auto__)){
var and__24209__auto____$1 = (this__24831__auto____$1.constructor === other__24832__auto__.constructor);
if(and__24209__auto____$1){
return cljs.core.equiv_map.call(null,this__24831__auto____$1,other__24832__auto__);
} else {
return and__24209__auto____$1;
}
} else {
return and__24209__auto__;
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
return (function (g__$2,p__195463){
var vec__195464 = p__195463;
var n1 = cljs.core.nth.call(null,vec__195464,(0),null);
var n2 = cljs.core.nth.call(null,vec__195464,(1),null);
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
return (function (g__$2,p__195465){
var vec__195466 = p__195465;
var n1 = cljs.core.nth.call(null,vec__195466,(0),null);
var n2 = cljs.core.nth.call(null,vec__195466,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24844__auto__,k__24845__auto__){
var self__ = this;
var this__24844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__24845__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24844__auto____$1),self__.__meta),k__24845__auto__);
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24845__auto__)),null));
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24842__auto__,k__24843__auto__,G__195449){
var self__ = this;
var this__24842__auto____$1 = this;
var pred__195467 = cljs.core.keyword_identical_QMARK_;
var expr__195468 = k__24843__auto__;
if(cljs.core.truth_(pred__195467.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__195468))){
return (new loom.graph.BasicEditableGraph(G__195449,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195467.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__195468))){
return (new loom.graph.BasicEditableGraph(self__.nodeset,G__195449,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24843__auto__,G__195449),null));
}
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24847__auto__){
var self__ = this;
var this__24847__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24834__auto__,G__195449){
var self__ = this;
var this__24834__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,G__195449,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24840__auto__,entry__24841__auto__){
var self__ = this;
var this__24840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24841__auto__)){
return cljs.core._assoc.call(null,this__24840__auto____$1,cljs.core._nth.call(null,entry__24841__auto__,(0)),cljs.core._nth.call(null,entry__24841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24840__auto____$1,entry__24841__auto__);
}
});

loom.graph.BasicEditableGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableGraph.cljs$lang$type = true;

loom.graph.BasicEditableGraph.cljs$lang$ctorPrSeq = (function (this__24869__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableGraph");
});

loom.graph.BasicEditableGraph.cljs$lang$ctorPrWriter = (function (this__24869__auto__,writer__24870__auto__){
return cljs.core._write.call(null,writer__24870__auto__,"loom.graph/BasicEditableGraph");
});

loom.graph.__GT_BasicEditableGraph = (function loom$graph$__GT_BasicEditableGraph(nodeset,adj){
return (new loom.graph.BasicEditableGraph(nodeset,adj,null,null,null));
});

loom.graph.map__GT_BasicEditableGraph = (function loom$graph$map__GT_BasicEditableGraph(G__195451){
return (new loom.graph.BasicEditableGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__195451),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__195451),null,cljs.core.dissoc.call(null,G__195451,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)),null));
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
var iter__24993__auto__ = ((function (g__$1){
return (function loom$graph$iter__195477(s__195478){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__195478__$1 = s__195478;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195478__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n1 = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24989__auto__ = ((function (s__195478__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__195477_$_iter__195479(s__195480){
return (new cljs.core.LazySeq(null,((function (s__195478__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__195480__$1 = s__195480;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195480__$1);
if(temp__4425__auto____$1){
var s__195480__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195480__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195480__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195482 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195481 = (0);
while(true){
if((i__195481 < size__24992__auto__)){
var e = cljs.core._nth.call(null,c__24991__auto__,i__195481);
cljs.core.chunk_append.call(null,b__195482,e);

var G__195499 = (i__195481 + (1));
i__195481 = G__195499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195482),loom$graph$iter__195477_$_iter__195479.call(null,cljs.core.chunk_rest.call(null,s__195480__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195482),null);
}
} else {
var e = cljs.core.first.call(null,s__195480__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__195477_$_iter__195479.call(null,cljs.core.rest.call(null,s__195480__$2)));
}
} else {
return null;
}
break;
}
});})(s__195478__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__195478__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,loom$graph$iter__195477.call(null,cljs.core.rest.call(null,s__195478__$1)));
} else {
var G__195500 = cljs.core.rest.call(null,s__195478__$1);
s__195478__$1 = G__195500;
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
return iter__24993__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24993__auto__ = ((function (g__$1){
return (function loom$graph$iter__195483(s__195484){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__195484__$1 = s__195484;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195484__$1);
if(temp__4425__auto__){
var s__195484__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195484__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195484__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195486 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195485 = (0);
while(true){
if((i__195485 < size__24992__auto__)){
var n2 = cljs.core._nth.call(null,c__24991__auto__,i__195485);
cljs.core.chunk_append.call(null,b__195486,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__195501 = (i__195485 + (1));
i__195485 = G__195501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195486),loom$graph$iter__195483.call(null,cljs.core.chunk_rest.call(null,s__195484__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195486),null);
}
} else {
var n2 = cljs.core.first.call(null,s__195484__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__195483.call(null,cljs.core.rest.call(null,s__195484__$2)));
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
return iter__24993__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24835__auto__,k__24836__auto__){
var self__ = this;
var this__24835__auto____$1 = this;
return cljs.core._lookup.call(null,this__24835__auto____$1,k__24836__auto__,null);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24837__auto__,k195475,else__24838__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
var G__195487 = (((k195475 instanceof cljs.core.Keyword))?k195475.fqn:null);
switch (G__195487) {
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
return cljs.core.get.call(null,self__.__extmap,k195475,else__24838__auto__);

}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24849__auto__,writer__24850__auto__,opts__24851__auto__){
var self__ = this;
var this__24849__auto____$1 = this;
var pr_pair__24852__auto__ = ((function (this__24849__auto____$1){
return (function (keyval__24853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,cljs.core.pr_writer,""," ","",opts__24851__auto__,keyval__24853__auto__);
});})(this__24849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,pr_pair__24852__auto__,"#loom.graph.BasicEditableDigraph{",", ","}",opts__24851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__195474){
var self__ = this;
var G__195474__$1 = this;
return (new cljs.core.RecordIter((0),G__195474__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24833__auto__){
var self__ = this;
var this__24833__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24839__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24830__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
var h__24656__auto__ = self__.__hash;
if(!((h__24656__auto__ == null))){
return h__24656__auto__;
} else {
var h__24656__auto____$1 = cljs.core.hash_imap.call(null,this__24830__auto____$1);
self__.__hash = h__24656__auto____$1;

return h__24656__auto____$1;
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24831__auto__,other__24832__auto__){
var self__ = this;
var this__24831__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24209__auto__ = other__24832__auto__;
if(cljs.core.truth_(and__24209__auto__)){
var and__24209__auto____$1 = (this__24831__auto____$1.constructor === other__24832__auto__.constructor);
if(and__24209__auto____$1){
return cljs.core.equiv_map.call(null,this__24831__auto____$1,other__24832__auto__);
} else {
return and__24209__auto____$1;
}
} else {
return and__24209__auto__;
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
return (function (g__$2,p__195488){
var vec__195489 = p__195488;
var n1 = cljs.core.nth.call(null,vec__195489,(0),null);
var n2 = cljs.core.nth.call(null,vec__195489,(1),null);
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
return (function (g__$2,p__195490){
var vec__195491 = p__195490;
var n1 = cljs.core.nth.call(null,vec__195491,(0),null);
var n2 = cljs.core.nth.call(null,vec__195491,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24844__auto__,k__24845__auto__){
var self__ = this;
var this__24844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__24845__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24844__auto____$1),self__.__meta),k__24845__auto__);
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24845__auto__)),null));
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24842__auto__,k__24843__auto__,G__195474){
var self__ = this;
var this__24842__auto____$1 = this;
var pred__195492 = cljs.core.keyword_identical_QMARK_;
var expr__195493 = k__24843__auto__;
if(cljs.core.truth_(pred__195492.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__195493))){
return (new loom.graph.BasicEditableDigraph(G__195474,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195492.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__195493))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,G__195474,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195492.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__195493))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,G__195474,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24843__auto__,G__195474),null));
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
var iter__24993__auto__ = ((function (g__$1){
return (function loom$graph$iter__195495(s__195496){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__195496__$1 = s__195496;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195496__$1);
if(temp__4425__auto__){
var s__195496__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195496__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195496__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195498 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195497 = (0);
while(true){
if((i__195497 < size__24992__auto__)){
var n2 = cljs.core._nth.call(null,c__24991__auto__,i__195497);
cljs.core.chunk_append.call(null,b__195498,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__195503 = (i__195497 + (1));
i__195497 = G__195503;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195498),loom$graph$iter__195495.call(null,cljs.core.chunk_rest.call(null,s__195496__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195498),null);
}
} else {
var n2 = cljs.core.first.call(null,s__195496__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__195495.call(null,cljs.core.rest.call(null,s__195496__$2)));
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
return iter__24993__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24847__auto__){
var self__ = this;
var this__24847__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24834__auto__,G__195474){
var self__ = this;
var this__24834__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,G__195474,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24840__auto__,entry__24841__auto__){
var self__ = this;
var this__24840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24841__auto__)){
return cljs.core._assoc.call(null,this__24840__auto____$1,cljs.core._nth.call(null,entry__24841__auto__,(0)),cljs.core._nth.call(null,entry__24841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24840__auto____$1,entry__24841__auto__);
}
});

loom.graph.BasicEditableDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableDigraph.cljs$lang$type = true;

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrSeq = (function (this__24869__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableDigraph");
});

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrWriter = (function (this__24869__auto__,writer__24870__auto__){
return cljs.core._write.call(null,writer__24870__auto__,"loom.graph/BasicEditableDigraph");
});

loom.graph.__GT_BasicEditableDigraph = (function loom$graph$__GT_BasicEditableDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableDigraph(nodeset,adj,in$,null,null,null));
});

loom.graph.map__GT_BasicEditableDigraph = (function loom$graph$map__GT_BasicEditableDigraph(G__195476){
return (new loom.graph.BasicEditableDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__195476),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__195476),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__195476),null,cljs.core.dissoc.call(null,G__195476,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)),null));
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
var iter__24993__auto__ = ((function (g__$1){
return (function loom$graph$iter__195507(s__195508){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__195508__$1 = s__195508;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195508__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n1 = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24989__auto__ = ((function (s__195508__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__195507_$_iter__195509(s__195510){
return (new cljs.core.LazySeq(null,((function (s__195508__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__195510__$1 = s__195510;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195510__$1);
if(temp__4425__auto____$1){
var s__195510__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195510__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195510__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195512 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195511 = (0);
while(true){
if((i__195511 < size__24992__auto__)){
var e = cljs.core._nth.call(null,c__24991__auto__,i__195511);
cljs.core.chunk_append.call(null,b__195512,e);

var G__195526 = (i__195511 + (1));
i__195511 = G__195526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195512),loom$graph$iter__195507_$_iter__195509.call(null,cljs.core.chunk_rest.call(null,s__195510__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195512),null);
}
} else {
var e = cljs.core.first.call(null,s__195510__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__195507_$_iter__195509.call(null,cljs.core.rest.call(null,s__195510__$2)));
}
} else {
return null;
}
break;
}
});})(s__195508__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__195508__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,loom$graph$iter__195507.call(null,cljs.core.rest.call(null,s__195508__$1)));
} else {
var G__195527 = cljs.core.rest.call(null,s__195508__$1);
s__195508__$1 = G__195527;
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
return iter__24993__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24993__auto__ = ((function (g__$1){
return (function loom$graph$iter__195513(s__195514){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__195514__$1 = s__195514;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195514__$1);
if(temp__4425__auto__){
var s__195514__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195514__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195514__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195516 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195515 = (0);
while(true){
if((i__195515 < size__24992__auto__)){
var n2 = cljs.core._nth.call(null,c__24991__auto__,i__195515);
cljs.core.chunk_append.call(null,b__195516,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__195528 = (i__195515 + (1));
i__195515 = G__195528;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195516),loom$graph$iter__195513.call(null,cljs.core.chunk_rest.call(null,s__195514__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195516),null);
}
} else {
var n2 = cljs.core.first.call(null,s__195514__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__195513.call(null,cljs.core.rest.call(null,s__195514__$2)));
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
return iter__24993__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24835__auto__,k__24836__auto__){
var self__ = this;
var this__24835__auto____$1 = this;
return cljs.core._lookup.call(null,this__24835__auto____$1,k__24836__auto__,null);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24837__auto__,k195505,else__24838__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
var G__195517 = (((k195505 instanceof cljs.core.Keyword))?k195505.fqn:null);
switch (G__195517) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k195505,else__24838__auto__);

}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24849__auto__,writer__24850__auto__,opts__24851__auto__){
var self__ = this;
var this__24849__auto____$1 = this;
var pr_pair__24852__auto__ = ((function (this__24849__auto____$1){
return (function (keyval__24853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,cljs.core.pr_writer,""," ","",opts__24851__auto__,keyval__24853__auto__);
});})(this__24849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,pr_pair__24852__auto__,"#loom.graph.BasicEditableWeightedGraph{",", ","}",opts__24851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__195504){
var self__ = this;
var G__195504__$1 = this;
return (new cljs.core.RecordIter((0),G__195504__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24833__auto__){
var self__ = this;
var this__24833__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24839__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24830__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
var h__24656__auto__ = self__.__hash;
if(!((h__24656__auto__ == null))){
return h__24656__auto__;
} else {
var h__24656__auto____$1 = cljs.core.hash_imap.call(null,this__24830__auto____$1);
self__.__hash = h__24656__auto____$1;

return h__24656__auto____$1;
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24831__auto__,other__24832__auto__){
var self__ = this;
var this__24831__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24209__auto__ = other__24832__auto__;
if(cljs.core.truth_(and__24209__auto__)){
var and__24209__auto____$1 = (this__24831__auto____$1.constructor === other__24832__auto__.constructor);
if(and__24209__auto____$1){
return cljs.core.equiv_map.call(null,this__24831__auto____$1,other__24832__auto__);
} else {
return and__24209__auto____$1;
}
} else {
return and__24209__auto__;
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
return (function (g__$2,p__195518){
var vec__195519 = p__195518;
var n1 = cljs.core.nth.call(null,vec__195519,(0),null);
var n2 = cljs.core.nth.call(null,vec__195519,(1),null);
var vec__195520 = cljs.core.nthnext.call(null,vec__195519,(2));
var w = cljs.core.nth.call(null,vec__195520,(0),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__24221__auto__ = w;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2,n1], null),(function (){var or__24221__auto__ = w;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
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
return (function (g__$2,p__195521){
var vec__195522 = p__195521;
var n1 = cljs.core.nth.call(null,vec__195522,(0),null);
var n2 = cljs.core.nth.call(null,vec__195522,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.dissoc,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24844__auto__,k__24845__auto__){
var self__ = this;
var this__24844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__24845__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24844__auto____$1),self__.__meta),k__24845__auto__);
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24845__auto__)),null));
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24842__auto__,k__24843__auto__,G__195504){
var self__ = this;
var this__24842__auto____$1 = this;
var pred__195523 = cljs.core.keyword_identical_QMARK_;
var expr__195524 = k__24843__auto__;
if(cljs.core.truth_(pred__195523.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__195524))){
return (new loom.graph.BasicEditableWeightedGraph(G__195504,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195523.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__195524))){
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,G__195504,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24843__auto__,G__195504),null));
}
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24847__auto__){
var self__ = this;
var this__24847__auto____$1 = this;
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

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24834__auto__,G__195504){
var self__ = this;
var this__24834__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,G__195504,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24840__auto__,entry__24841__auto__){
var self__ = this;
var this__24840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24841__auto__)){
return cljs.core._assoc.call(null,this__24840__auto____$1,cljs.core._nth.call(null,entry__24841__auto__,(0)),cljs.core._nth.call(null,entry__24841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24840__auto____$1,entry__24841__auto__);
}
});

loom.graph.BasicEditableWeightedGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrSeq = (function (this__24869__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableWeightedGraph");
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrWriter = (function (this__24869__auto__,writer__24870__auto__){
return cljs.core._write.call(null,writer__24870__auto__,"loom.graph/BasicEditableWeightedGraph");
});

loom.graph.__GT_BasicEditableWeightedGraph = (function loom$graph$__GT_BasicEditableWeightedGraph(nodeset,adj){
return (new loom.graph.BasicEditableWeightedGraph(nodeset,adj,null,null,null));
});

loom.graph.map__GT_BasicEditableWeightedGraph = (function loom$graph$map__GT_BasicEditableWeightedGraph(G__195506){
return (new loom.graph.BasicEditableWeightedGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__195506),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__195506),null,cljs.core.dissoc.call(null,G__195506,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)),null));
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
var iter__24993__auto__ = ((function (g__$1){
return (function loom$graph$iter__195533(s__195534){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__195534__$1 = s__195534;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195534__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n1 = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24989__auto__ = ((function (s__195534__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__195533_$_iter__195535(s__195536){
return (new cljs.core.LazySeq(null,((function (s__195534__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__195536__$1 = s__195536;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195536__$1);
if(temp__4425__auto____$1){
var s__195536__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195536__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195536__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195538 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195537 = (0);
while(true){
if((i__195537 < size__24992__auto__)){
var e = cljs.core._nth.call(null,c__24991__auto__,i__195537);
cljs.core.chunk_append.call(null,b__195538,e);

var G__195558 = (i__195537 + (1));
i__195537 = G__195558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195538),loom$graph$iter__195533_$_iter__195535.call(null,cljs.core.chunk_rest.call(null,s__195536__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195538),null);
}
} else {
var e = cljs.core.first.call(null,s__195536__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__195533_$_iter__195535.call(null,cljs.core.rest.call(null,s__195536__$2)));
}
} else {
return null;
}
break;
}
});})(s__195534__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__195534__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,loom$graph$iter__195533.call(null,cljs.core.rest.call(null,s__195534__$1)));
} else {
var G__195559 = cljs.core.rest.call(null,s__195534__$1);
s__195534__$1 = G__195559;
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
return iter__24993__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24993__auto__ = ((function (g__$1){
return (function loom$graph$iter__195539(s__195540){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__195540__$1 = s__195540;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195540__$1);
if(temp__4425__auto__){
var s__195540__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195540__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195540__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195542 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195541 = (0);
while(true){
if((i__195541 < size__24992__auto__)){
var n2 = cljs.core._nth.call(null,c__24991__auto__,i__195541);
cljs.core.chunk_append.call(null,b__195542,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__195560 = (i__195541 + (1));
i__195541 = G__195560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195542),loom$graph$iter__195539.call(null,cljs.core.chunk_rest.call(null,s__195540__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195542),null);
}
} else {
var n2 = cljs.core.first.call(null,s__195540__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__195539.call(null,cljs.core.rest.call(null,s__195540__$2)));
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
return iter__24993__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24835__auto__,k__24836__auto__){
var self__ = this;
var this__24835__auto____$1 = this;
return cljs.core._lookup.call(null,this__24835__auto____$1,k__24836__auto__,null);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24837__auto__,k195531,else__24838__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
var G__195543 = (((k195531 instanceof cljs.core.Keyword))?k195531.fqn:null);
switch (G__195543) {
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
return cljs.core.get.call(null,self__.__extmap,k195531,else__24838__auto__);

}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24849__auto__,writer__24850__auto__,opts__24851__auto__){
var self__ = this;
var this__24849__auto____$1 = this;
var pr_pair__24852__auto__ = ((function (this__24849__auto____$1){
return (function (keyval__24853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,cljs.core.pr_writer,""," ","",opts__24851__auto__,keyval__24853__auto__);
});})(this__24849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,pr_pair__24852__auto__,"#loom.graph.BasicEditableWeightedDigraph{",", ","}",opts__24851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__195530){
var self__ = this;
var G__195530__$1 = this;
return (new cljs.core.RecordIter((0),G__195530__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24833__auto__){
var self__ = this;
var this__24833__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24839__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24830__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
var h__24656__auto__ = self__.__hash;
if(!((h__24656__auto__ == null))){
return h__24656__auto__;
} else {
var h__24656__auto____$1 = cljs.core.hash_imap.call(null,this__24830__auto____$1);
self__.__hash = h__24656__auto____$1;

return h__24656__auto____$1;
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24831__auto__,other__24832__auto__){
var self__ = this;
var this__24831__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24209__auto__ = other__24832__auto__;
if(cljs.core.truth_(and__24209__auto__)){
var and__24209__auto____$1 = (this__24831__auto____$1.constructor === other__24832__auto__.constructor);
if(and__24209__auto____$1){
return cljs.core.equiv_map.call(null,this__24831__auto____$1,other__24832__auto__);
} else {
return and__24209__auto____$1;
}
} else {
return and__24209__auto__;
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
return (function (g__$2,p__195544){
var vec__195545 = p__195544;
var n1 = cljs.core.nth.call(null,vec__195545,(0),null);
var n2 = cljs.core.nth.call(null,vec__195545,(1),null);
var vec__195546 = cljs.core.nthnext.call(null,vec__195545,(2));
var w = cljs.core.nth.call(null,vec__195546,(0),null);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__24221__auto__ = w;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
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
return (function (g__$2,p__195547){
var vec__195548 = p__195547;
var n1 = cljs.core.nth.call(null,vec__195548,(0),null);
var n2 = cljs.core.nth.call(null,vec__195548,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24844__auto__,k__24845__auto__){
var self__ = this;
var this__24844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__24845__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24844__auto____$1),self__.__meta),k__24845__auto__);
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24845__auto__)),null));
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24842__auto__,k__24843__auto__,G__195530){
var self__ = this;
var this__24842__auto____$1 = this;
var pred__195549 = cljs.core.keyword_identical_QMARK_;
var expr__195550 = k__24843__auto__;
if(cljs.core.truth_(pred__195549.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__195550))){
return (new loom.graph.BasicEditableWeightedDigraph(G__195530,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195549.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__195550))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,G__195530,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195549.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__195550))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,G__195530,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24843__auto__,G__195530),null));
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
var iter__24993__auto__ = ((function (g__$1){
return (function loom$graph$iter__195552(s__195553){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__195553__$1 = s__195553;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195553__$1);
if(temp__4425__auto__){
var s__195553__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195553__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195553__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195555 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195554 = (0);
while(true){
if((i__195554 < size__24992__auto__)){
var n2 = cljs.core._nth.call(null,c__24991__auto__,i__195554);
cljs.core.chunk_append.call(null,b__195555,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__195562 = (i__195554 + (1));
i__195554 = G__195562;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195555),loom$graph$iter__195552.call(null,cljs.core.chunk_rest.call(null,s__195553__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195555),null);
}
} else {
var n2 = cljs.core.first.call(null,s__195553__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__195552.call(null,cljs.core.rest.call(null,s__195553__$2)));
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
return iter__24993__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (tg,p__195556){
var vec__195557 = p__195556;
var n1 = cljs.core.nth.call(null,vec__195557,(0),null);
var n2 = cljs.core.nth.call(null,vec__195557,(1),null);
return loom.graph.add_edges_STAR_.call(null,tg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,n1,loom.graph.weight.call(null,g__$1,n1,n2)], null)], null));
});})(g__$1))
,cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY),loom.graph.edges.call(null,g__$1));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24847__auto__){
var self__ = this;
var this__24847__auto____$1 = this;
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

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24834__auto__,G__195530){
var self__ = this;
var this__24834__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,G__195530,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24840__auto__,entry__24841__auto__){
var self__ = this;
var this__24840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24841__auto__)){
return cljs.core._assoc.call(null,this__24840__auto____$1,cljs.core._nth.call(null,entry__24841__auto__,(0)),cljs.core._nth.call(null,entry__24841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24840__auto____$1,entry__24841__auto__);
}
});

loom.graph.BasicEditableWeightedDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrSeq = (function (this__24869__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableWeightedDigraph");
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrWriter = (function (this__24869__auto__,writer__24870__auto__){
return cljs.core._write.call(null,writer__24870__auto__,"loom.graph/BasicEditableWeightedDigraph");
});

loom.graph.__GT_BasicEditableWeightedDigraph = (function loom$graph$__GT_BasicEditableWeightedDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableWeightedDigraph(nodeset,adj,in$,null,null,null));
});

loom.graph.map__GT_BasicEditableWeightedDigraph = (function loom$graph$map__GT_BasicEditableWeightedDigraph(G__195532){
return (new loom.graph.BasicEditableWeightedDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__195532),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__195532),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__195532),null,cljs.core.dissoc.call(null,G__195532,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)),null));
});

loom.graph.call_or_return = (function loom$graph$call_or_return(var_args){
var args__25286__auto__ = [];
var len__25279__auto___195565 = arguments.length;
var i__25280__auto___195566 = (0);
while(true){
if((i__25280__auto___195566 < len__25279__auto___195565)){
args__25286__auto__.push((arguments[i__25280__auto___195566]));

var G__195567 = (i__25280__auto___195566 + (1));
i__25280__auto___195566 = G__195567;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((1) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((1)),(0))):null);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25287__auto__);
});

loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if((cljs.core.fn_QMARK_.call(null,f)) || (((f instanceof clojure.lang.IFn)) && (cljs.core.seq.call(null,args)))){
return cljs.core.apply.call(null,f,args);
} else {
return f;
}
});

loom.graph.call_or_return.cljs$lang$maxFixedArity = (1);

loom.graph.call_or_return.cljs$lang$applyTo = (function (seq195563){
var G__195564 = cljs.core.first.call(null,seq195563);
var seq195563__$1 = cljs.core.next.call(null,seq195563);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(G__195564,seq195563__$1);
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
if(cljs.core.truth_((function (){var or__24221__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
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
var iter__24993__auto__ = ((function (g__$1){
return (function loom$graph$iter__195571(s__195572){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__195572__$1 = s__195572;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195572__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24989__auto__ = ((function (s__195572__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__195571_$_iter__195573(s__195574){
return (new cljs.core.LazySeq(null,((function (s__195572__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__195574__$1 = s__195574;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195574__$1);
if(temp__4425__auto____$1){
var s__195574__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195574__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195574__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195576 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195575 = (0);
while(true){
if((i__195575 < size__24992__auto__)){
var nbr = cljs.core._nth.call(null,c__24991__auto__,i__195575);
cljs.core.chunk_append.call(null,b__195576,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__195585 = (i__195575 + (1));
i__195575 = G__195585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195576),loom$graph$iter__195571_$_iter__195573.call(null,cljs.core.chunk_rest.call(null,s__195574__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195576),null);
}
} else {
var nbr = cljs.core.first.call(null,s__195574__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__195571_$_iter__195573.call(null,cljs.core.rest.call(null,s__195574__$2)));
}
} else {
return null;
}
break;
}
});})(s__195572__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__195572__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,loom$graph$iter__195571.call(null,cljs.core.rest.call(null,s__195572__$1)));
} else {
var G__195586 = cljs.core.rest.call(null,s__195572__$1);
s__195572__$1 = G__195586;
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
return iter__24993__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24993__auto__ = ((function (g__$1){
return (function loom$graph$iter__195577(s__195578){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__195578__$1 = s__195578;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195578__$1);
if(temp__4425__auto__){
var s__195578__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195578__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195578__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195580 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195579 = (0);
while(true){
if((i__195579 < size__24992__auto__)){
var n2 = cljs.core._nth.call(null,c__24991__auto__,i__195579);
cljs.core.chunk_append.call(null,b__195580,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__195587 = (i__195579 + (1));
i__195579 = G__195587;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195580),loom$graph$iter__195577.call(null,cljs.core.chunk_rest.call(null,s__195578__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195580),null);
}
} else {
var n2 = cljs.core.first.call(null,s__195578__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__195577.call(null,cljs.core.rest.call(null,s__195578__$2)));
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
return iter__24993__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24835__auto__,k__24836__auto__){
var self__ = this;
var this__24835__auto____$1 = this;
return cljs.core._lookup.call(null,this__24835__auto____$1,k__24836__auto__,null);
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24837__auto__,k195569,else__24838__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
var G__195581 = (((k195569 instanceof cljs.core.Keyword))?k195569.fqn:null);
switch (G__195581) {
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
return cljs.core.get.call(null,self__.__extmap,k195569,else__24838__auto__);

}
});

loom.graph.FlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24849__auto__,writer__24850__auto__,opts__24851__auto__){
var self__ = this;
var this__24849__auto____$1 = this;
var pr_pair__24852__auto__ = ((function (this__24849__auto____$1){
return (function (keyval__24853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,cljs.core.pr_writer,""," ","",opts__24851__auto__,keyval__24853__auto__);
});})(this__24849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,pr_pair__24852__auto__,"#loom.graph.FlyGraph{",", ","}",opts__24851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__195568){
var self__ = this;
var G__195568__$1 = this;
return (new cljs.core.RecordIter((0),G__195568__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.FlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24833__auto__){
var self__ = this;
var this__24833__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24839__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24830__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
var h__24656__auto__ = self__.__hash;
if(!((h__24656__auto__ == null))){
return h__24656__auto__;
} else {
var h__24656__auto____$1 = cljs.core.hash_imap.call(null,this__24830__auto____$1);
self__.__hash = h__24656__auto____$1;

return h__24656__auto____$1;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24831__auto__,other__24832__auto__){
var self__ = this;
var this__24831__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24209__auto__ = other__24832__auto__;
if(cljs.core.truth_(and__24209__auto__)){
var and__24209__auto____$1 = (this__24831__auto____$1.constructor === other__24832__auto__.constructor);
if(and__24209__auto____$1){
return cljs.core.equiv_map.call(null,this__24831__auto____$1,other__24832__auto__);
} else {
return and__24209__auto____$1;
}
} else {
return and__24209__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24844__auto__,k__24845__auto__){
var self__ = this;
var this__24844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null], null), null),k__24845__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24844__auto____$1),self__.__meta),k__24845__auto__);
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24845__auto__)),null));
}
});

loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24842__auto__,k__24843__auto__,G__195568){
var self__ = this;
var this__24842__auto____$1 = this;
var pred__195582 = cljs.core.keyword_identical_QMARK_;
var expr__195583 = k__24843__auto__;
if(cljs.core.truth_(pred__195582.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__195583))){
return (new loom.graph.FlyGraph(G__195568,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195582.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__195583))){
return (new loom.graph.FlyGraph(self__.fnodes,G__195568,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195582.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__195583))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,G__195568,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195582.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__195583))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__195568,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24843__auto__,G__195568),null));
}
}
}
}
});

loom.graph.FlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24847__auto__){
var self__ = this;
var this__24847__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24834__auto__,G__195568){
var self__ = this;
var this__24834__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,G__195568,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24840__auto__,entry__24841__auto__){
var self__ = this;
var this__24840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24841__auto__)){
return cljs.core._assoc.call(null,this__24840__auto____$1,cljs.core._nth.call(null,entry__24841__auto__,(0)),cljs.core._nth.call(null,entry__24841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24840__auto____$1,entry__24841__auto__);
}
});

loom.graph.FlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyGraph.cljs$lang$type = true;

loom.graph.FlyGraph.cljs$lang$ctorPrSeq = (function (this__24869__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/FlyGraph");
});

loom.graph.FlyGraph.cljs$lang$ctorPrWriter = (function (this__24869__auto__,writer__24870__auto__){
return cljs.core._write.call(null,writer__24870__auto__,"loom.graph/FlyGraph");
});

loom.graph.__GT_FlyGraph = (function loom$graph$__GT_FlyGraph(fnodes,fedges,fsuccessors,start){
return (new loom.graph.FlyGraph(fnodes,fedges,fsuccessors,start,null,null,null));
});

loom.graph.map__GT_FlyGraph = (function loom$graph$map__GT_FlyGraph(G__195570){
return (new loom.graph.FlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__195570),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__195570),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__195570),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__195570),null,cljs.core.dissoc.call(null,G__195570,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__24221__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
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
var iter__24993__auto__ = ((function (g__$1){
return (function loom$graph$iter__195592(s__195593){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__195593__$1 = s__195593;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195593__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24989__auto__ = ((function (s__195593__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__195592_$_iter__195594(s__195595){
return (new cljs.core.LazySeq(null,((function (s__195593__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__195595__$1 = s__195595;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195595__$1);
if(temp__4425__auto____$1){
var s__195595__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195595__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195595__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195597 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195596 = (0);
while(true){
if((i__195596 < size__24992__auto__)){
var nbr = cljs.core._nth.call(null,c__24991__auto__,i__195596);
cljs.core.chunk_append.call(null,b__195597,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__195606 = (i__195596 + (1));
i__195596 = G__195606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195597),loom$graph$iter__195592_$_iter__195594.call(null,cljs.core.chunk_rest.call(null,s__195595__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195597),null);
}
} else {
var nbr = cljs.core.first.call(null,s__195595__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__195592_$_iter__195594.call(null,cljs.core.rest.call(null,s__195595__$2)));
}
} else {
return null;
}
break;
}
});})(s__195593__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__195593__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,loom$graph$iter__195592.call(null,cljs.core.rest.call(null,s__195593__$1)));
} else {
var G__195607 = cljs.core.rest.call(null,s__195593__$1);
s__195593__$1 = G__195607;
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
return iter__24993__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24993__auto__ = ((function (g__$1){
return (function loom$graph$iter__195598(s__195599){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__195599__$1 = s__195599;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195599__$1);
if(temp__4425__auto__){
var s__195599__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195599__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195599__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195601 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195600 = (0);
while(true){
if((i__195600 < size__24992__auto__)){
var n2 = cljs.core._nth.call(null,c__24991__auto__,i__195600);
cljs.core.chunk_append.call(null,b__195601,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__195608 = (i__195600 + (1));
i__195600 = G__195608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195601),loom$graph$iter__195598.call(null,cljs.core.chunk_rest.call(null,s__195599__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195601),null);
}
} else {
var n2 = cljs.core.first.call(null,s__195599__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__195598.call(null,cljs.core.rest.call(null,s__195599__$2)));
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
return iter__24993__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24835__auto__,k__24836__auto__){
var self__ = this;
var this__24835__auto____$1 = this;
return cljs.core._lookup.call(null,this__24835__auto____$1,k__24836__auto__,null);
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24837__auto__,k195590,else__24838__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
var G__195602 = (((k195590 instanceof cljs.core.Keyword))?k195590.fqn:null);
switch (G__195602) {
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
return cljs.core.get.call(null,self__.__extmap,k195590,else__24838__auto__);

}
});

loom.graph.FlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24849__auto__,writer__24850__auto__,opts__24851__auto__){
var self__ = this;
var this__24849__auto____$1 = this;
var pr_pair__24852__auto__ = ((function (this__24849__auto____$1){
return (function (keyval__24853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,cljs.core.pr_writer,""," ","",opts__24851__auto__,keyval__24853__auto__);
});})(this__24849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,pr_pair__24852__auto__,"#loom.graph.FlyDigraph{",", ","}",opts__24851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__195589){
var self__ = this;
var G__195589__$1 = this;
return (new cljs.core.RecordIter((0),G__195589__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.FlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24833__auto__){
var self__ = this;
var this__24833__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24839__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24830__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
var h__24656__auto__ = self__.__hash;
if(!((h__24656__auto__ == null))){
return h__24656__auto__;
} else {
var h__24656__auto____$1 = cljs.core.hash_imap.call(null,this__24830__auto____$1);
self__.__hash = h__24656__auto____$1;

return h__24656__auto____$1;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24831__auto__,other__24832__auto__){
var self__ = this;
var this__24831__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24209__auto__ = other__24832__auto__;
if(cljs.core.truth_(and__24209__auto__)){
var and__24209__auto____$1 = (this__24831__auto____$1.constructor === other__24832__auto__.constructor);
if(and__24209__auto____$1){
return cljs.core.equiv_map.call(null,this__24831__auto____$1,other__24832__auto__);
} else {
return and__24209__auto____$1;
}
} else {
return and__24209__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24844__auto__,k__24845__auto__){
var self__ = this;
var this__24844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__24845__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24844__auto____$1),self__.__meta),k__24845__auto__);
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24845__auto__)),null));
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24842__auto__,k__24843__auto__,G__195589){
var self__ = this;
var this__24842__auto____$1 = this;
var pred__195603 = cljs.core.keyword_identical_QMARK_;
var expr__195604 = k__24843__auto__;
if(cljs.core.truth_(pred__195603.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__195604))){
return (new loom.graph.FlyDigraph(G__195589,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195603.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__195604))){
return (new loom.graph.FlyDigraph(self__.fnodes,G__195589,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195603.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__195604))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,G__195589,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195603.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__195604))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__195589,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195603.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__195604))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__195589,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24843__auto__,G__195589),null));
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

loom.graph.FlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24847__auto__){
var self__ = this;
var this__24847__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24834__auto__,G__195589){
var self__ = this;
var this__24834__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,G__195589,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24840__auto__,entry__24841__auto__){
var self__ = this;
var this__24840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24841__auto__)){
return cljs.core._assoc.call(null,this__24840__auto____$1,cljs.core._nth.call(null,entry__24841__auto__,(0)),cljs.core._nth.call(null,entry__24841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24840__auto____$1,entry__24841__auto__);
}
});

loom.graph.FlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyDigraph.cljs$lang$type = true;

loom.graph.FlyDigraph.cljs$lang$ctorPrSeq = (function (this__24869__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/FlyDigraph");
});

loom.graph.FlyDigraph.cljs$lang$ctorPrWriter = (function (this__24869__auto__,writer__24870__auto__){
return cljs.core._write.call(null,writer__24870__auto__,"loom.graph/FlyDigraph");
});

loom.graph.__GT_FlyDigraph = (function loom$graph$__GT_FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start){
return (new loom.graph.FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start,null,null,null));
});

loom.graph.map__GT_FlyDigraph = (function loom$graph$map__GT_FlyDigraph(G__195591){
return (new loom.graph.FlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__195591),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__195591),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__195591),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__195591),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__195591),null,cljs.core.dissoc.call(null,G__195591,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__24221__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
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
var iter__24993__auto__ = ((function (g__$1){
return (function loom$graph$iter__195613(s__195614){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__195614__$1 = s__195614;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195614__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24989__auto__ = ((function (s__195614__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__195613_$_iter__195615(s__195616){
return (new cljs.core.LazySeq(null,((function (s__195614__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__195616__$1 = s__195616;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195616__$1);
if(temp__4425__auto____$1){
var s__195616__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195616__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195616__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195618 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195617 = (0);
while(true){
if((i__195617 < size__24992__auto__)){
var nbr = cljs.core._nth.call(null,c__24991__auto__,i__195617);
cljs.core.chunk_append.call(null,b__195618,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__195627 = (i__195617 + (1));
i__195617 = G__195627;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195618),loom$graph$iter__195613_$_iter__195615.call(null,cljs.core.chunk_rest.call(null,s__195616__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195618),null);
}
} else {
var nbr = cljs.core.first.call(null,s__195616__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__195613_$_iter__195615.call(null,cljs.core.rest.call(null,s__195616__$2)));
}
} else {
return null;
}
break;
}
});})(s__195614__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__195614__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,loom$graph$iter__195613.call(null,cljs.core.rest.call(null,s__195614__$1)));
} else {
var G__195628 = cljs.core.rest.call(null,s__195614__$1);
s__195614__$1 = G__195628;
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
return iter__24993__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24993__auto__ = ((function (g__$1){
return (function loom$graph$iter__195619(s__195620){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__195620__$1 = s__195620;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195620__$1);
if(temp__4425__auto__){
var s__195620__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195620__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195620__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195622 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195621 = (0);
while(true){
if((i__195621 < size__24992__auto__)){
var n2 = cljs.core._nth.call(null,c__24991__auto__,i__195621);
cljs.core.chunk_append.call(null,b__195622,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__195629 = (i__195621 + (1));
i__195621 = G__195629;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195622),loom$graph$iter__195619.call(null,cljs.core.chunk_rest.call(null,s__195620__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195622),null);
}
} else {
var n2 = cljs.core.first.call(null,s__195620__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__195619.call(null,cljs.core.rest.call(null,s__195620__$2)));
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
return iter__24993__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24835__auto__,k__24836__auto__){
var self__ = this;
var this__24835__auto____$1 = this;
return cljs.core._lookup.call(null,this__24835__auto____$1,k__24836__auto__,null);
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24837__auto__,k195611,else__24838__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
var G__195623 = (((k195611 instanceof cljs.core.Keyword))?k195611.fqn:null);
switch (G__195623) {
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
return cljs.core.get.call(null,self__.__extmap,k195611,else__24838__auto__);

}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24849__auto__,writer__24850__auto__,opts__24851__auto__){
var self__ = this;
var this__24849__auto____$1 = this;
var pr_pair__24852__auto__ = ((function (this__24849__auto____$1){
return (function (keyval__24853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,cljs.core.pr_writer,""," ","",opts__24851__auto__,keyval__24853__auto__);
});})(this__24849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,pr_pair__24852__auto__,"#loom.graph.WeightedFlyGraph{",", ","}",opts__24851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__195610){
var self__ = this;
var G__195610__$1 = this;
return (new cljs.core.RecordIter((0),G__195610__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24833__auto__){
var self__ = this;
var this__24833__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24839__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24830__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
var h__24656__auto__ = self__.__hash;
if(!((h__24656__auto__ == null))){
return h__24656__auto__;
} else {
var h__24656__auto____$1 = cljs.core.hash_imap.call(null,this__24830__auto____$1);
self__.__hash = h__24656__auto____$1;

return h__24656__auto____$1;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24831__auto__,other__24832__auto__){
var self__ = this;
var this__24831__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24209__auto__ = other__24832__auto__;
if(cljs.core.truth_(and__24209__auto__)){
var and__24209__auto____$1 = (this__24831__auto____$1.constructor === other__24832__auto__.constructor);
if(and__24209__auto____$1){
return cljs.core.equiv_map.call(null,this__24831__auto____$1,other__24832__auto__);
} else {
return and__24209__auto____$1;
}
} else {
return and__24209__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24844__auto__,k__24845__auto__){
var self__ = this;
var this__24844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null], null), null),k__24845__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24844__auto____$1),self__.__meta),k__24845__auto__);
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24845__auto__)),null));
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24842__auto__,k__24843__auto__,G__195610){
var self__ = this;
var this__24842__auto____$1 = this;
var pred__195624 = cljs.core.keyword_identical_QMARK_;
var expr__195625 = k__24843__auto__;
if(cljs.core.truth_(pred__195624.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__195625))){
return (new loom.graph.WeightedFlyGraph(G__195610,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195624.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__195625))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,G__195610,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195624.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__195625))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,G__195610,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195624.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__195625))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__195610,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195624.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__195625))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,G__195610,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24843__auto__,G__195610),null));
}
}
}
}
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24847__auto__){
var self__ = this;
var this__24847__auto____$1 = this;
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

loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24834__auto__,G__195610){
var self__ = this;
var this__24834__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,G__195610,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24840__auto__,entry__24841__auto__){
var self__ = this;
var this__24840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24841__auto__)){
return cljs.core._assoc.call(null,this__24840__auto____$1,cljs.core._nth.call(null,entry__24841__auto__,(0)),cljs.core._nth.call(null,entry__24841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24840__auto____$1,entry__24841__auto__);
}
});

loom.graph.WeightedFlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyGraph.cljs$lang$type = true;

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrSeq = (function (this__24869__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/WeightedFlyGraph");
});

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrWriter = (function (this__24869__auto__,writer__24870__auto__){
return cljs.core._write.call(null,writer__24870__auto__,"loom.graph/WeightedFlyGraph");
});

loom.graph.__GT_WeightedFlyGraph = (function loom$graph$__GT_WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start){
return (new loom.graph.WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start,null,null,null));
});

loom.graph.map__GT_WeightedFlyGraph = (function loom$graph$map__GT_WeightedFlyGraph(G__195612){
return (new loom.graph.WeightedFlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__195612),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__195612),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__195612),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__195612),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__195612),null,cljs.core.dissoc.call(null,G__195612,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__24221__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
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
var iter__24993__auto__ = ((function (g__$1){
return (function loom$graph$iter__195634(s__195635){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__195635__$1 = s__195635;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195635__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24989__auto__ = ((function (s__195635__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__195634_$_iter__195636(s__195637){
return (new cljs.core.LazySeq(null,((function (s__195635__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__195637__$1 = s__195637;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195637__$1);
if(temp__4425__auto____$1){
var s__195637__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195637__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195637__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195639 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195638 = (0);
while(true){
if((i__195638 < size__24992__auto__)){
var nbr = cljs.core._nth.call(null,c__24991__auto__,i__195638);
cljs.core.chunk_append.call(null,b__195639,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__195648 = (i__195638 + (1));
i__195638 = G__195648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195639),loom$graph$iter__195634_$_iter__195636.call(null,cljs.core.chunk_rest.call(null,s__195637__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195639),null);
}
} else {
var nbr = cljs.core.first.call(null,s__195637__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__195634_$_iter__195636.call(null,cljs.core.rest.call(null,s__195637__$2)));
}
} else {
return null;
}
break;
}
});})(s__195635__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__195635__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,loom$graph$iter__195634.call(null,cljs.core.rest.call(null,s__195635__$1)));
} else {
var G__195649 = cljs.core.rest.call(null,s__195635__$1);
s__195635__$1 = G__195649;
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
return iter__24993__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24993__auto__ = ((function (g__$1){
return (function loom$graph$iter__195640(s__195641){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__195641__$1 = s__195641;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195641__$1);
if(temp__4425__auto__){
var s__195641__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195641__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195641__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195643 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195642 = (0);
while(true){
if((i__195642 < size__24992__auto__)){
var n2 = cljs.core._nth.call(null,c__24991__auto__,i__195642);
cljs.core.chunk_append.call(null,b__195643,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__195650 = (i__195642 + (1));
i__195642 = G__195650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195643),loom$graph$iter__195640.call(null,cljs.core.chunk_rest.call(null,s__195641__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195643),null);
}
} else {
var n2 = cljs.core.first.call(null,s__195641__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__195640.call(null,cljs.core.rest.call(null,s__195641__$2)));
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
return iter__24993__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24835__auto__,k__24836__auto__){
var self__ = this;
var this__24835__auto____$1 = this;
return cljs.core._lookup.call(null,this__24835__auto____$1,k__24836__auto__,null);
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24837__auto__,k195632,else__24838__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
var G__195644 = (((k195632 instanceof cljs.core.Keyword))?k195632.fqn:null);
switch (G__195644) {
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
return cljs.core.get.call(null,self__.__extmap,k195632,else__24838__auto__);

}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24849__auto__,writer__24850__auto__,opts__24851__auto__){
var self__ = this;
var this__24849__auto____$1 = this;
var pr_pair__24852__auto__ = ((function (this__24849__auto____$1){
return (function (keyval__24853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,cljs.core.pr_writer,""," ","",opts__24851__auto__,keyval__24853__auto__);
});})(this__24849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,pr_pair__24852__auto__,"#loom.graph.WeightedFlyDigraph{",", ","}",opts__24851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__195631){
var self__ = this;
var G__195631__$1 = this;
return (new cljs.core.RecordIter((0),G__195631__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24833__auto__){
var self__ = this;
var this__24833__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24839__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24830__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
var h__24656__auto__ = self__.__hash;
if(!((h__24656__auto__ == null))){
return h__24656__auto__;
} else {
var h__24656__auto____$1 = cljs.core.hash_imap.call(null,this__24830__auto____$1);
self__.__hash = h__24656__auto____$1;

return h__24656__auto____$1;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24831__auto__,other__24832__auto__){
var self__ = this;
var this__24831__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24209__auto__ = other__24832__auto__;
if(cljs.core.truth_(and__24209__auto__)){
var and__24209__auto____$1 = (this__24831__auto____$1.constructor === other__24832__auto__.constructor);
if(and__24209__auto____$1){
return cljs.core.equiv_map.call(null,this__24831__auto____$1,other__24832__auto__);
} else {
return and__24209__auto____$1;
}
} else {
return and__24209__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24844__auto__,k__24845__auto__){
var self__ = this;
var this__24844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__24845__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24844__auto____$1),self__.__meta),k__24845__auto__);
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24845__auto__)),null));
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24842__auto__,k__24843__auto__,G__195631){
var self__ = this;
var this__24842__auto____$1 = this;
var pred__195645 = cljs.core.keyword_identical_QMARK_;
var expr__195646 = k__24843__auto__;
if(cljs.core.truth_(pred__195645.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__195646))){
return (new loom.graph.WeightedFlyDigraph(G__195631,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195645.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__195646))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,G__195631,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195645.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__195646))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,G__195631,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195645.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__195646))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__195631,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195645.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__195646))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__195631,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__195645.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__195646))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,G__195631,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24843__auto__,G__195631),null));
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

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24847__auto__){
var self__ = this;
var this__24847__auto____$1 = this;
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

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24834__auto__,G__195631){
var self__ = this;
var this__24834__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,G__195631,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24840__auto__,entry__24841__auto__){
var self__ = this;
var this__24840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24841__auto__)){
return cljs.core._assoc.call(null,this__24840__auto____$1,cljs.core._nth.call(null,entry__24841__auto__,(0)),cljs.core._nth.call(null,entry__24841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24840__auto____$1,entry__24841__auto__);
}
});

loom.graph.WeightedFlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyDigraph.cljs$lang$type = true;

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrSeq = (function (this__24869__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/WeightedFlyDigraph");
});

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrWriter = (function (this__24869__auto__,writer__24870__auto__){
return cljs.core._write.call(null,writer__24870__auto__,"loom.graph/WeightedFlyDigraph");
});

loom.graph.__GT_WeightedFlyDigraph = (function loom$graph$__GT_WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start){
return (new loom.graph.WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start,null,null,null));
});

loom.graph.map__GT_WeightedFlyDigraph = (function loom$graph$map__GT_WeightedFlyDigraph(G__195633){
return (new loom.graph.WeightedFlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__195633),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__195633),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__195633),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__195633),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__195633),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__195633),null,cljs.core.dissoc.call(null,G__195633,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
var args__25286__auto__ = [];
var len__25279__auto___195654 = arguments.length;
var i__25280__auto___195655 = (0);
while(true){
if((i__25280__auto___195655 < len__25279__auto___195654)){
args__25286__auto__.push((arguments[i__25280__auto___195655]));

var G__195656 = (i__25280__auto___195655 + (1));
i__25280__auto___195655 = G__195656;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((1) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((1)),(0))):null);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25287__auto__);
});

loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),nodes));
});

loom.graph.add_path.cljs$lang$maxFixedArity = (1);

loom.graph.add_path.cljs$lang$applyTo = (function (seq195652){
var G__195653 = cljs.core.first.call(null,seq195652);
var seq195652__$1 = cljs.core.next.call(null,seq195652);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic(G__195653,seq195652__$1);
});
/**
 * Adds a cycle of edges connecting the given nodes in order
 */
loom.graph.add_cycle = (function loom$graph$add_cycle(var_args){
var args__25286__auto__ = [];
var len__25279__auto___195659 = arguments.length;
var i__25280__auto___195660 = (0);
while(true){
if((i__25280__auto___195660 < len__25279__auto___195659)){
args__25286__auto__.push((arguments[i__25280__auto___195660]));

var G__195661 = (i__25280__auto___195660 + (1));
i__25280__auto___195660 = G__195661;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((1) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((1)),(0))):null);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25287__auto__);
});

loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),cljs.core.concat.call(null,nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nodes)], null))));
});

loom.graph.add_cycle.cljs$lang$maxFixedArity = (1);

loom.graph.add_cycle.cljs$lang$applyTo = (function (seq195657){
var G__195658 = cljs.core.first.call(null,seq195657);
var seq195657__$1 = cljs.core.next.call(null,seq195657);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic(G__195658,seq195657__$1);
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
var args__25286__auto__ = [];
var len__25279__auto___195800 = arguments.length;
var i__25280__auto___195801 = (0);
while(true){
if((i__25280__auto___195801 < len__25279__auto___195800)){
args__25286__auto__.push((arguments[i__25280__auto___195801]));

var G__195802 = (i__25280__auto___195801 + (1));
i__25280__auto___195801 = G__195802;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((1) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((1)),(0))):null);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25287__auto__);
});

loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,inits){
var build = (function loom$graph$build(g__$1,init){
if(cljs.core.truth_(loom.graph.graph_QMARK_.call(null,init))){
if(cljs.core.truth_((function (){var and__24209__auto__ = loom.graph.weighted_QMARK_.call(null,g__$1);
if(cljs.core.truth_(and__24209__auto__)){
return loom.graph.weighted_QMARK_.call(null,init);
} else {
return and__24209__auto__;
}
})())){
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,loom.graph.add_edges,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),(function (){var iter__24993__auto__ = (function loom$graph$build_$_iter__195768(s__195769){
return (new cljs.core.LazySeq(null,(function (){
var s__195769__$1 = s__195769;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195769__$1);
if(temp__4425__auto__){
var s__195769__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195769__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195769__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195771 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195770 = (0);
while(true){
if((i__195770 < size__24992__auto__)){
var vec__195774 = cljs.core._nth.call(null,c__24991__auto__,i__195770);
var n1 = cljs.core.nth.call(null,vec__195774,(0),null);
var n2 = cljs.core.nth.call(null,vec__195774,(1),null);
cljs.core.chunk_append.call(null,b__195771,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null));

var G__195803 = (i__195770 + (1));
i__195770 = G__195803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195771),loom$graph$build_$_iter__195768.call(null,cljs.core.chunk_rest.call(null,s__195769__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195771),null);
}
} else {
var vec__195775 = cljs.core.first.call(null,s__195769__$2);
var n1 = cljs.core.nth.call(null,vec__195775,(0),null);
var n2 = cljs.core.nth.call(null,vec__195775,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null),loom$graph$build_$_iter__195768.call(null,cljs.core.rest.call(null,s__195769__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24993__auto__.call(null,loom.graph.edges.call(null,init));
})()),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
} else {
return cljs.core.assoc.call(null,loom.graph.add_edges_STAR_.call(null,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),loom.graph.edges.call(null,init)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
}
} else {
if(cljs.core.map_QMARK_.call(null,init)){
var es = ((cljs.core.map_QMARK_.call(null,cljs.core.val.call(null,cljs.core.first.call(null,init))))?(function (){var iter__24993__auto__ = (function loom$graph$build_$_iter__195776(s__195777){
return (new cljs.core.LazySeq(null,(function (){
var s__195777__$1 = s__195777;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195777__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__195787 = cljs.core.first.call(null,xs__4977__auto__);
var n = cljs.core.nth.call(null,vec__195787,(0),null);
var nbrs = cljs.core.nth.call(null,vec__195787,(1),null);
var iterys__24989__auto__ = ((function (s__195777__$1,vec__195787,n,nbrs,xs__4977__auto__,temp__4425__auto__){
return (function loom$graph$build_$_iter__195776_$_iter__195778(s__195779){
return (new cljs.core.LazySeq(null,((function (s__195777__$1,vec__195787,n,nbrs,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__195779__$1 = s__195779;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195779__$1);
if(temp__4425__auto____$1){
var s__195779__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195779__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195779__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195781 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195780 = (0);
while(true){
if((i__195780 < size__24992__auto__)){
var vec__195790 = cljs.core._nth.call(null,c__24991__auto__,i__195780);
var nbr = cljs.core.nth.call(null,vec__195790,(0),null);
var wt = cljs.core.nth.call(null,vec__195790,(1),null);
cljs.core.chunk_append.call(null,b__195781,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__195804 = (i__195780 + (1));
i__195780 = G__195804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195781),loom$graph$build_$_iter__195776_$_iter__195778.call(null,cljs.core.chunk_rest.call(null,s__195779__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195781),null);
}
} else {
var vec__195791 = cljs.core.first.call(null,s__195779__$2);
var nbr = cljs.core.nth.call(null,vec__195791,(0),null);
var wt = cljs.core.nth.call(null,vec__195791,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),loom$graph$build_$_iter__195776_$_iter__195778.call(null,cljs.core.rest.call(null,s__195779__$2)));
}
} else {
return null;
}
break;
}
});})(s__195777__$1,vec__195787,n,nbrs,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__195777__$1,vec__195787,n,nbrs,xs__4977__auto__,temp__4425__auto__))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,nbrs));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,loom$graph$build_$_iter__195776.call(null,cljs.core.rest.call(null,s__195777__$1)));
} else {
var G__195805 = cljs.core.rest.call(null,s__195777__$1);
s__195777__$1 = G__195805;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24993__auto__.call(null,init);
})():(function (){var iter__24993__auto__ = (function loom$graph$build_$_iter__195792(s__195793){
return (new cljs.core.LazySeq(null,(function (){
var s__195793__$1 = s__195793;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195793__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__195799 = cljs.core.first.call(null,xs__4977__auto__);
var n = cljs.core.nth.call(null,vec__195799,(0),null);
var nbrs = cljs.core.nth.call(null,vec__195799,(1),null);
var iterys__24989__auto__ = ((function (s__195793__$1,vec__195799,n,nbrs,xs__4977__auto__,temp__4425__auto__){
return (function loom$graph$build_$_iter__195792_$_iter__195794(s__195795){
return (new cljs.core.LazySeq(null,((function (s__195793__$1,vec__195799,n,nbrs,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__195795__$1 = s__195795;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195795__$1);
if(temp__4425__auto____$1){
var s__195795__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195795__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195795__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195797 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195796 = (0);
while(true){
if((i__195796 < size__24992__auto__)){
var nbr = cljs.core._nth.call(null,c__24991__auto__,i__195796);
cljs.core.chunk_append.call(null,b__195797,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__195806 = (i__195796 + (1));
i__195796 = G__195806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195797),loom$graph$build_$_iter__195792_$_iter__195794.call(null,cljs.core.chunk_rest.call(null,s__195795__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195797),null);
}
} else {
var nbr = cljs.core.first.call(null,s__195795__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$build_$_iter__195792_$_iter__195794.call(null,cljs.core.rest.call(null,s__195795__$2)));
}
} else {
return null;
}
break;
}
});})(s__195793__$1,vec__195799,n,nbrs,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__195793__$1,vec__195799,n,nbrs,xs__4977__auto__,temp__4425__auto__))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,nbrs));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,loom$graph$build_$_iter__195792.call(null,cljs.core.rest.call(null,s__195793__$1)));
} else {
var G__195807 = cljs.core.rest.call(null,s__195793__$1);
s__195793__$1 = G__195807;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24993__auto__.call(null,init);
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

loom.graph.build_graph.cljs$lang$applyTo = (function (seq195670){
var G__195671 = cljs.core.first.call(null,seq195670);
var seq195670__$1 = cljs.core.next.call(null,seq195670);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic(G__195671,seq195670__$1);
});
/**
 * Creates an unweighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.graph = (function loom$graph$graph(var_args){
var args__25286__auto__ = [];
var len__25279__auto___195809 = arguments.length;
var i__25280__auto___195810 = (0);
while(true){
if((i__25280__auto___195810 < len__25279__auto___195809)){
args__25286__auto__.push((arguments[i__25280__auto___195810]));

var G__195811 = (i__25280__auto___195810 + (1));
i__25280__auto___195810 = G__195811;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((0) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((0)),(0))):null);
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(argseq__25287__auto__);
});

loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.graph.cljs$lang$maxFixedArity = (0);

loom.graph.graph.cljs$lang$applyTo = (function (seq195808){
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq195808));
});
/**
 * Creates an unweighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.digraph = (function loom$graph$digraph(var_args){
var args__25286__auto__ = [];
var len__25279__auto___195813 = arguments.length;
var i__25280__auto___195814 = (0);
while(true){
if((i__25280__auto___195814 < len__25279__auto___195813)){
args__25286__auto__.push((arguments[i__25280__auto___195814]));

var G__195815 = (i__25280__auto___195814 + (1));
i__25280__auto___195814 = G__195815;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((0) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((0)),(0))):null);
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__25287__auto__);
});

loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.digraph.cljs$lang$maxFixedArity = (0);

loom.graph.digraph.cljs$lang$applyTo = (function (seq195812){
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq195812));
});
/**
 * Creates an weighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_graph = (function loom$graph$weighted_graph(var_args){
var args__25286__auto__ = [];
var len__25279__auto___195817 = arguments.length;
var i__25280__auto___195818 = (0);
while(true){
if((i__25280__auto___195818 < len__25279__auto___195817)){
args__25286__auto__.push((arguments[i__25280__auto___195818]));

var G__195819 = (i__25280__auto___195818 + (1));
i__25280__auto___195818 = G__195819;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((0) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((0)),(0))):null);
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__25287__auto__);
});

loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_graph.cljs$lang$maxFixedArity = (0);

loom.graph.weighted_graph.cljs$lang$applyTo = (function (seq195816){
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq195816));
});
/**
 * Creates an weighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_digraph = (function loom$graph$weighted_digraph(var_args){
var args__25286__auto__ = [];
var len__25279__auto___195821 = arguments.length;
var i__25280__auto___195822 = (0);
while(true){
if((i__25280__auto___195822 < len__25279__auto___195821)){
args__25286__auto__.push((arguments[i__25280__auto___195822]));

var G__195823 = (i__25280__auto___195822 + (1));
i__25280__auto___195822 = G__195823;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((0) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((0)),(0))):null);
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__25287__auto__);
});

loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_digraph.cljs$lang$maxFixedArity = (0);

loom.graph.weighted_digraph.cljs$lang$applyTo = (function (seq195820){
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq195820));
});
/**
 * Creates a read-only, ad-hoc graph which uses the provided functions
 *   to return values for nodes, edges, etc. If any members are not functions,
 *   they will be returned as-is. Edges can be inferred if nodes and
 *   successors are provided. Nodes and edges can be inferred if successors and
 *   start are provided.
 */
loom.graph.fly_graph = (function loom$graph$fly_graph(var_args){
var args__25286__auto__ = [];
var len__25279__auto___195828 = arguments.length;
var i__25280__auto___195829 = (0);
while(true){
if((i__25280__auto___195829 < len__25279__auto___195828)){
args__25286__auto__.push((arguments[i__25280__auto___195829]));

var G__195830 = (i__25280__auto___195829 + (1));
i__25280__auto___195829 = G__195830;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((0) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((0)),(0))):null);
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__25287__auto__);
});

loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = (function (p__195825){
var map__195826 = p__195825;
var map__195826__$1 = ((((!((map__195826 == null)))?((((map__195826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__195826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__195826):map__195826);
var nodes = cljs.core.get.call(null,map__195826__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__195826__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var successors = cljs.core.get.call(null,map__195826__$1,new cljs.core.Keyword(null,"successors","successors",-1239296414));
var predecessors = cljs.core.get.call(null,map__195826__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var weight = cljs.core.get.call(null,map__195826__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var start = cljs.core.get.call(null,map__195826__$1,new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.truth_((function (){var and__24209__auto__ = predecessors;
if(cljs.core.truth_(and__24209__auto__)){
return weight;
} else {
return and__24209__auto__;
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

loom.graph.fly_graph.cljs$lang$applyTo = (function (seq195824){
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq195824));
});

//# sourceMappingURL=graph.js.map