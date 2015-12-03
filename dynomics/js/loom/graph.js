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
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.nodes[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g);
} else {
var m__24821__auto____$1 = (loom.graph.nodes["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g);
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
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.edges[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g);
} else {
var m__24821__auto____$1 = (loom.graph.edges["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g);
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
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.has_node_QMARK_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g,node);
} else {
var m__24821__auto____$1 = (loom.graph.has_node_QMARK_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g,node);
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
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.has_edge_QMARK_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g,n1,n2);
} else {
var m__24821__auto____$1 = (loom.graph.has_edge_QMARK_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g,n1,n2);
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
var args41523 = [];
var len__25223__auto___41529 = arguments.length;
var i__25224__auto___41530 = (0);
while(true){
if((i__25224__auto___41530 < len__25223__auto___41529)){
args41523.push((arguments[i__25224__auto___41530]));

var G__41531 = (i__25224__auto___41530 + (1));
i__25224__auto___41530 = G__41531;
continue;
} else {
}
break;
}

var G__41525 = args41523.length;
switch (G__41525) {
case 1:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41523.length)].join('')));

}
});

loom.graph.successors.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Graph$successors$arity$1 == null)))){
return g.loom$graph$Graph$successors$arity$1(g);
} else {
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.successors[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g);
} else {
var m__24821__auto____$1 = (loom.graph.successors["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g);
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
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.successors[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g,node);
} else {
var m__24821__auto____$1 = (loom.graph.successors["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g,node);
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
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.out_degree[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g,node);
} else {
var m__24821__auto____$1 = (loom.graph.out_degree["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g,node);
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
var args41526 = [];
var len__25223__auto___41533 = arguments.length;
var i__25224__auto___41534 = (0);
while(true){
if((i__25224__auto___41534 < len__25223__auto___41533)){
args41526.push((arguments[i__25224__auto___41534]));

var G__41535 = (i__25224__auto___41534 + (1));
i__25224__auto___41534 = G__41535;
continue;
} else {
}
break;
}

var G__41528 = args41526.length;
switch (G__41528) {
case 1:
return loom.graph.out_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.out_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41526.length)].join('')));

}
});

loom.graph.out_edges.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Graph$out_edges$arity$1 == null)))){
return g.loom$graph$Graph$out_edges$arity$1(g);
} else {
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.out_edges[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g);
} else {
var m__24821__auto____$1 = (loom.graph.out_edges["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g);
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
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.out_edges[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g,node);
} else {
var m__24821__auto____$1 = (loom.graph.out_edges["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g,node);
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
var args41537 = [];
var len__25223__auto___41543 = arguments.length;
var i__25224__auto___41544 = (0);
while(true){
if((i__25224__auto___41544 < len__25223__auto___41543)){
args41537.push((arguments[i__25224__auto___41544]));

var G__41545 = (i__25224__auto___41544 + (1));
i__25224__auto___41544 = G__41545;
continue;
} else {
}
break;
}

var G__41539 = args41537.length;
switch (G__41539) {
case 1:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41537.length)].join('')));

}
});

loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Digraph$predecessors$arity$1 == null)))){
return g.loom$graph$Digraph$predecessors$arity$1(g);
} else {
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.predecessors[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g);
} else {
var m__24821__auto____$1 = (loom.graph.predecessors["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g);
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
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.predecessors[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g,node);
} else {
var m__24821__auto____$1 = (loom.graph.predecessors["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g,node);
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
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.in_degree[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g,node);
} else {
var m__24821__auto____$1 = (loom.graph.in_degree["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g,node);
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
var args41540 = [];
var len__25223__auto___41547 = arguments.length;
var i__25224__auto___41548 = (0);
while(true){
if((i__25224__auto___41548 < len__25223__auto___41547)){
args41540.push((arguments[i__25224__auto___41548]));

var G__41549 = (i__25224__auto___41548 + (1));
i__25224__auto___41548 = G__41549;
continue;
} else {
}
break;
}

var G__41542 = args41540.length;
switch (G__41542) {
case 1:
return loom.graph.in_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.in_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41540.length)].join('')));

}
});

loom.graph.in_edges.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Digraph$in_edges$arity$1 == null)))){
return g.loom$graph$Digraph$in_edges$arity$1(g);
} else {
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.in_edges[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g);
} else {
var m__24821__auto____$1 = (loom.graph.in_edges["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g);
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
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.in_edges[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g,node);
} else {
var m__24821__auto____$1 = (loom.graph.in_edges["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g,node);
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
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.transpose[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g);
} else {
var m__24821__auto____$1 = (loom.graph.transpose["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g);
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
var args41551 = [];
var len__25223__auto___41554 = arguments.length;
var i__25224__auto___41555 = (0);
while(true){
if((i__25224__auto___41555 < len__25223__auto___41554)){
args41551.push((arguments[i__25224__auto___41555]));

var G__41556 = (i__25224__auto___41555 + (1));
i__25224__auto___41555 = G__41556;
continue;
} else {
}
break;
}

var G__41553 = args41551.length;
switch (G__41553) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41551.length)].join('')));

}
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$WeightedGraph$weight$arity$1 == null)))){
return g.loom$graph$WeightedGraph$weight$arity$1(g);
} else {
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.weight[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g);
} else {
var m__24821__auto____$1 = (loom.graph.weight["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g);
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
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.weight[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g,e);
} else {
var m__24821__auto____$1 = (loom.graph.weight["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g,e);
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
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.weight[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g,n1,n2);
} else {
var m__24821__auto____$1 = (loom.graph.weight["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g,n1,n2);
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
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.add_nodes_STAR_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g,nodes);
} else {
var m__24821__auto____$1 = (loom.graph.add_nodes_STAR_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g,nodes);
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
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.add_edges_STAR_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g,edges);
} else {
var m__24821__auto____$1 = (loom.graph.add_edges_STAR_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g,edges);
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
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.remove_nodes_STAR_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g,nodes);
} else {
var m__24821__auto____$1 = (loom.graph.remove_nodes_STAR_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g,nodes);
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
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.remove_edges_STAR_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g,edges);
} else {
var m__24821__auto____$1 = (loom.graph.remove_edges_STAR_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g,edges);
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
var x__24820__auto__ = (((g == null))?null:g);
var m__24821__auto__ = (loom.graph.remove_all[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,g);
} else {
var m__24821__auto____$1 = (loom.graph.remove_all["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,g);
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
var x__24820__auto__ = (((edge == null))?null:edge);
var m__24821__auto__ = (loom.graph.src[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,edge);
} else {
var m__24821__auto____$1 = (loom.graph.src["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,edge);
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
var x__24820__auto__ = (((edge == null))?null:edge);
var m__24821__auto__ = (loom.graph.dest[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,edge);
} else {
var m__24821__auto____$1 = (loom.graph.dest["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,edge);
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
var args__25230__auto__ = [];
var len__25223__auto___41560 = arguments.length;
var i__25224__auto___41561 = (0);
while(true){
if((i__25224__auto___41561 < len__25223__auto___41560)){
args__25230__auto__.push((arguments[i__25224__auto___41561]));

var G__41562 = (i__25224__auto___41561 + (1));
i__25224__auto___41561 = G__41562;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((1) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((1)),(0))):null);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25231__auto__);
});

loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_nodes_STAR_.call(null,g,nodes);
});

loom.graph.add_nodes.cljs$lang$maxFixedArity = (1);

loom.graph.add_nodes.cljs$lang$applyTo = (function (seq41558){
var G__41559 = cljs.core.first.call(null,seq41558);
var seq41558__$1 = cljs.core.next.call(null,seq41558);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic(G__41559,seq41558__$1);
});
/**
 * Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].
 *   For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the
 *   latter defaulting to a weight of 1
 */
loom.graph.add_edges = (function loom$graph$add_edges(var_args){
var args__25230__auto__ = [];
var len__25223__auto___41565 = arguments.length;
var i__25224__auto___41566 = (0);
while(true){
if((i__25224__auto___41566 < len__25223__auto___41565)){
args__25230__auto__.push((arguments[i__25224__auto___41566]));

var G__41567 = (i__25224__auto___41566 + (1));
i__25224__auto___41566 = G__41567;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((1) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((1)),(0))):null);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25231__auto__);
});

loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.add_edges_STAR_.call(null,g,edges);
});

loom.graph.add_edges.cljs$lang$maxFixedArity = (1);

loom.graph.add_edges.cljs$lang$applyTo = (function (seq41563){
var G__41564 = cljs.core.first.call(null,seq41563);
var seq41563__$1 = cljs.core.next.call(null,seq41563);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic(G__41564,seq41563__$1);
});
/**
 * Removes nodes from graph g
 */
loom.graph.remove_nodes = (function loom$graph$remove_nodes(var_args){
var args__25230__auto__ = [];
var len__25223__auto___41570 = arguments.length;
var i__25224__auto___41571 = (0);
while(true){
if((i__25224__auto___41571 < len__25223__auto___41570)){
args__25230__auto__.push((arguments[i__25224__auto___41571]));

var G__41572 = (i__25224__auto___41571 + (1));
i__25224__auto___41571 = G__41572;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((1) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((1)),(0))):null);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25231__auto__);
});

loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.remove_nodes_STAR_.call(null,g,nodes);
});

loom.graph.remove_nodes.cljs$lang$maxFixedArity = (1);

loom.graph.remove_nodes.cljs$lang$applyTo = (function (seq41568){
var G__41569 = cljs.core.first.call(null,seq41568);
var seq41568__$1 = cljs.core.next.call(null,seq41568);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic(G__41569,seq41568__$1);
});
/**
 * Removes edges from graph g. Do not include weights
 */
loom.graph.remove_edges = (function loom$graph$remove_edges(var_args){
var args__25230__auto__ = [];
var len__25223__auto___41575 = arguments.length;
var i__25224__auto___41576 = (0);
while(true){
if((i__25224__auto___41576 < len__25223__auto___41575)){
args__25230__auto__.push((arguments[i__25224__auto___41576]));

var G__41577 = (i__25224__auto___41576 + (1));
i__25224__auto___41576 = G__41577;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((1) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((1)),(0))):null);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25231__auto__);
});

loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.remove_edges_STAR_.call(null,g,edges);
});

loom.graph.remove_edges.cljs$lang$maxFixedArity = (1);

loom.graph.remove_edges.cljs$lang$applyTo = (function (seq41573){
var G__41574 = cljs.core.first.call(null,seq41573);
var seq41573__$1 = cljs.core.next.call(null,seq41573);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic(G__41574,seq41573__$1);
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
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),(function (p1__41578_SHARP_){
return cljs.core.apply.call(null,remove_fn,p1__41578_SHARP_,nodes);
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
var iter__24937__auto__ = ((function (g__$1){
return (function loom$graph$iter__41582(s__41583){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__41583__$1 = s__41583;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41583__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n1 = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24933__auto__ = ((function (s__41583__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__41582_$_iter__41584(s__41585){
return (new cljs.core.LazySeq(null,((function (s__41583__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__41585__$1 = s__41585;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__41585__$1);
if(temp__4425__auto____$1){
var s__41585__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41585__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41585__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41587 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41586 = (0);
while(true){
if((i__41586 < size__24936__auto__)){
var e = cljs.core._nth.call(null,c__24935__auto__,i__41586);
cljs.core.chunk_append.call(null,b__41587,e);

var G__41600 = (i__41586 + (1));
i__41586 = G__41600;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41587),loom$graph$iter__41582_$_iter__41584.call(null,cljs.core.chunk_rest.call(null,s__41585__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41587),null);
}
} else {
var e = cljs.core.first.call(null,s__41585__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__41582_$_iter__41584.call(null,cljs.core.rest.call(null,s__41585__$2)));
}
} else {
return null;
}
break;
}
});})(s__41583__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__41583__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,loom$graph$iter__41582.call(null,cljs.core.rest.call(null,s__41583__$1)));
} else {
var G__41601 = cljs.core.rest.call(null,s__41583__$1);
s__41583__$1 = G__41601;
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
return iter__24937__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24937__auto__ = ((function (g__$1){
return (function loom$graph$iter__41588(s__41589){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__41589__$1 = s__41589;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41589__$1);
if(temp__4425__auto__){
var s__41589__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41589__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41589__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41591 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41590 = (0);
while(true){
if((i__41590 < size__24936__auto__)){
var n2 = cljs.core._nth.call(null,c__24935__auto__,i__41590);
cljs.core.chunk_append.call(null,b__41591,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__41602 = (i__41590 + (1));
i__41590 = G__41602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41591),loom$graph$iter__41588.call(null,cljs.core.chunk_rest.call(null,s__41589__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41591),null);
}
} else {
var n2 = cljs.core.first.call(null,s__41589__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__41588.call(null,cljs.core.rest.call(null,s__41589__$2)));
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
return iter__24937__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24779__auto__,k__24780__auto__){
var self__ = this;
var this__24779__auto____$1 = this;
return cljs.core._lookup.call(null,this__24779__auto____$1,k__24780__auto__,null);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24781__auto__,k41580,else__24782__auto__){
var self__ = this;
var this__24781__auto____$1 = this;
var G__41592 = (((k41580 instanceof cljs.core.Keyword))?k41580.fqn:null);
switch (G__41592) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41580,else__24782__auto__);

}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24793__auto__,writer__24794__auto__,opts__24795__auto__){
var self__ = this;
var this__24793__auto____$1 = this;
var pr_pair__24796__auto__ = ((function (this__24793__auto____$1){
return (function (keyval__24797__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24794__auto__,cljs.core.pr_writer,""," ","",opts__24795__auto__,keyval__24797__auto__);
});})(this__24793__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24794__auto__,pr_pair__24796__auto__,"#loom.graph.BasicEditableGraph{",", ","}",opts__24795__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41579){
var self__ = this;
var G__41579__$1 = this;
return (new cljs.core.RecordIter((0),G__41579__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24777__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24773__auto__){
var self__ = this;
var this__24773__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24783__auto__){
var self__ = this;
var this__24783__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24774__auto__){
var self__ = this;
var this__24774__auto____$1 = this;
var h__24600__auto__ = self__.__hash;
if(!((h__24600__auto__ == null))){
return h__24600__auto__;
} else {
var h__24600__auto____$1 = cljs.core.hash_imap.call(null,this__24774__auto____$1);
self__.__hash = h__24600__auto____$1;

return h__24600__auto____$1;
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24775__auto__,other__24776__auto__){
var self__ = this;
var this__24775__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24153__auto__ = other__24776__auto__;
if(cljs.core.truth_(and__24153__auto__)){
var and__24153__auto____$1 = (this__24775__auto____$1.constructor === other__24776__auto__.constructor);
if(and__24153__auto____$1){
return cljs.core.equiv_map.call(null,this__24775__auto____$1,other__24776__auto__);
} else {
return and__24153__auto____$1;
}
} else {
return and__24153__auto__;
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
return (function (g__$2,p__41593){
var vec__41594 = p__41593;
var n1 = cljs.core.nth.call(null,vec__41594,(0),null);
var n2 = cljs.core.nth.call(null,vec__41594,(1),null);
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
return (function (g__$2,p__41595){
var vec__41596 = p__41595;
var n1 = cljs.core.nth.call(null,vec__41596,(0),null);
var n2 = cljs.core.nth.call(null,vec__41596,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24788__auto__,k__24789__auto__){
var self__ = this;
var this__24788__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__24789__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24788__auto____$1),self__.__meta),k__24789__auto__);
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24789__auto__)),null));
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24786__auto__,k__24787__auto__,G__41579){
var self__ = this;
var this__24786__auto____$1 = this;
var pred__41597 = cljs.core.keyword_identical_QMARK_;
var expr__41598 = k__24787__auto__;
if(cljs.core.truth_(pred__41597.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__41598))){
return (new loom.graph.BasicEditableGraph(G__41579,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41597.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__41598))){
return (new loom.graph.BasicEditableGraph(self__.nodeset,G__41579,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24787__auto__,G__41579),null));
}
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24791__auto__){
var self__ = this;
var this__24791__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24778__auto__,G__41579){
var self__ = this;
var this__24778__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,G__41579,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24784__auto__,entry__24785__auto__){
var self__ = this;
var this__24784__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24785__auto__)){
return cljs.core._assoc.call(null,this__24784__auto____$1,cljs.core._nth.call(null,entry__24785__auto__,(0)),cljs.core._nth.call(null,entry__24785__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24784__auto____$1,entry__24785__auto__);
}
});

loom.graph.BasicEditableGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableGraph.cljs$lang$type = true;

loom.graph.BasicEditableGraph.cljs$lang$ctorPrSeq = (function (this__24813__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableGraph");
});

loom.graph.BasicEditableGraph.cljs$lang$ctorPrWriter = (function (this__24813__auto__,writer__24814__auto__){
return cljs.core._write.call(null,writer__24814__auto__,"loom.graph/BasicEditableGraph");
});

loom.graph.__GT_BasicEditableGraph = (function loom$graph$__GT_BasicEditableGraph(nodeset,adj){
return (new loom.graph.BasicEditableGraph(nodeset,adj,null,null,null));
});

loom.graph.map__GT_BasicEditableGraph = (function loom$graph$map__GT_BasicEditableGraph(G__41581){
return (new loom.graph.BasicEditableGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__41581),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__41581),null,cljs.core.dissoc.call(null,G__41581,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)),null));
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
var iter__24937__auto__ = ((function (g__$1){
return (function loom$graph$iter__41607(s__41608){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__41608__$1 = s__41608;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41608__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n1 = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24933__auto__ = ((function (s__41608__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__41607_$_iter__41609(s__41610){
return (new cljs.core.LazySeq(null,((function (s__41608__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__41610__$1 = s__41610;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__41610__$1);
if(temp__4425__auto____$1){
var s__41610__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41610__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41610__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41612 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41611 = (0);
while(true){
if((i__41611 < size__24936__auto__)){
var e = cljs.core._nth.call(null,c__24935__auto__,i__41611);
cljs.core.chunk_append.call(null,b__41612,e);

var G__41629 = (i__41611 + (1));
i__41611 = G__41629;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41612),loom$graph$iter__41607_$_iter__41609.call(null,cljs.core.chunk_rest.call(null,s__41610__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41612),null);
}
} else {
var e = cljs.core.first.call(null,s__41610__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__41607_$_iter__41609.call(null,cljs.core.rest.call(null,s__41610__$2)));
}
} else {
return null;
}
break;
}
});})(s__41608__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__41608__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,loom$graph$iter__41607.call(null,cljs.core.rest.call(null,s__41608__$1)));
} else {
var G__41630 = cljs.core.rest.call(null,s__41608__$1);
s__41608__$1 = G__41630;
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
return iter__24937__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24937__auto__ = ((function (g__$1){
return (function loom$graph$iter__41613(s__41614){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__41614__$1 = s__41614;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41614__$1);
if(temp__4425__auto__){
var s__41614__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41614__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41614__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41616 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41615 = (0);
while(true){
if((i__41615 < size__24936__auto__)){
var n2 = cljs.core._nth.call(null,c__24935__auto__,i__41615);
cljs.core.chunk_append.call(null,b__41616,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__41631 = (i__41615 + (1));
i__41615 = G__41631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41616),loom$graph$iter__41613.call(null,cljs.core.chunk_rest.call(null,s__41614__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41616),null);
}
} else {
var n2 = cljs.core.first.call(null,s__41614__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__41613.call(null,cljs.core.rest.call(null,s__41614__$2)));
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
return iter__24937__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24779__auto__,k__24780__auto__){
var self__ = this;
var this__24779__auto____$1 = this;
return cljs.core._lookup.call(null,this__24779__auto____$1,k__24780__auto__,null);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24781__auto__,k41605,else__24782__auto__){
var self__ = this;
var this__24781__auto____$1 = this;
var G__41617 = (((k41605 instanceof cljs.core.Keyword))?k41605.fqn:null);
switch (G__41617) {
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
return cljs.core.get.call(null,self__.__extmap,k41605,else__24782__auto__);

}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24793__auto__,writer__24794__auto__,opts__24795__auto__){
var self__ = this;
var this__24793__auto____$1 = this;
var pr_pair__24796__auto__ = ((function (this__24793__auto____$1){
return (function (keyval__24797__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24794__auto__,cljs.core.pr_writer,""," ","",opts__24795__auto__,keyval__24797__auto__);
});})(this__24793__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24794__auto__,pr_pair__24796__auto__,"#loom.graph.BasicEditableDigraph{",", ","}",opts__24795__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41604){
var self__ = this;
var G__41604__$1 = this;
return (new cljs.core.RecordIter((0),G__41604__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24777__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24773__auto__){
var self__ = this;
var this__24773__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24783__auto__){
var self__ = this;
var this__24783__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24774__auto__){
var self__ = this;
var this__24774__auto____$1 = this;
var h__24600__auto__ = self__.__hash;
if(!((h__24600__auto__ == null))){
return h__24600__auto__;
} else {
var h__24600__auto____$1 = cljs.core.hash_imap.call(null,this__24774__auto____$1);
self__.__hash = h__24600__auto____$1;

return h__24600__auto____$1;
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24775__auto__,other__24776__auto__){
var self__ = this;
var this__24775__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24153__auto__ = other__24776__auto__;
if(cljs.core.truth_(and__24153__auto__)){
var and__24153__auto____$1 = (this__24775__auto____$1.constructor === other__24776__auto__.constructor);
if(and__24153__auto____$1){
return cljs.core.equiv_map.call(null,this__24775__auto____$1,other__24776__auto__);
} else {
return and__24153__auto____$1;
}
} else {
return and__24153__auto__;
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
return (function (g__$2,p__41618){
var vec__41619 = p__41618;
var n1 = cljs.core.nth.call(null,vec__41619,(0),null);
var n2 = cljs.core.nth.call(null,vec__41619,(1),null);
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
return (function (g__$2,p__41620){
var vec__41621 = p__41620;
var n1 = cljs.core.nth.call(null,vec__41621,(0),null);
var n2 = cljs.core.nth.call(null,vec__41621,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24788__auto__,k__24789__auto__){
var self__ = this;
var this__24788__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__24789__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24788__auto____$1),self__.__meta),k__24789__auto__);
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24789__auto__)),null));
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24786__auto__,k__24787__auto__,G__41604){
var self__ = this;
var this__24786__auto____$1 = this;
var pred__41622 = cljs.core.keyword_identical_QMARK_;
var expr__41623 = k__24787__auto__;
if(cljs.core.truth_(pred__41622.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__41623))){
return (new loom.graph.BasicEditableDigraph(G__41604,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41622.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__41623))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,G__41604,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41622.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__41623))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,G__41604,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24787__auto__,G__41604),null));
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
var iter__24937__auto__ = ((function (g__$1){
return (function loom$graph$iter__41625(s__41626){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__41626__$1 = s__41626;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41626__$1);
if(temp__4425__auto__){
var s__41626__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41626__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41626__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41628 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41627 = (0);
while(true){
if((i__41627 < size__24936__auto__)){
var n2 = cljs.core._nth.call(null,c__24935__auto__,i__41627);
cljs.core.chunk_append.call(null,b__41628,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__41633 = (i__41627 + (1));
i__41627 = G__41633;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41628),loom$graph$iter__41625.call(null,cljs.core.chunk_rest.call(null,s__41626__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41628),null);
}
} else {
var n2 = cljs.core.first.call(null,s__41626__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__41625.call(null,cljs.core.rest.call(null,s__41626__$2)));
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
return iter__24937__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24791__auto__){
var self__ = this;
var this__24791__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24778__auto__,G__41604){
var self__ = this;
var this__24778__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,G__41604,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24784__auto__,entry__24785__auto__){
var self__ = this;
var this__24784__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24785__auto__)){
return cljs.core._assoc.call(null,this__24784__auto____$1,cljs.core._nth.call(null,entry__24785__auto__,(0)),cljs.core._nth.call(null,entry__24785__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24784__auto____$1,entry__24785__auto__);
}
});

loom.graph.BasicEditableDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableDigraph.cljs$lang$type = true;

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrSeq = (function (this__24813__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableDigraph");
});

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrWriter = (function (this__24813__auto__,writer__24814__auto__){
return cljs.core._write.call(null,writer__24814__auto__,"loom.graph/BasicEditableDigraph");
});

loom.graph.__GT_BasicEditableDigraph = (function loom$graph$__GT_BasicEditableDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableDigraph(nodeset,adj,in$,null,null,null));
});

loom.graph.map__GT_BasicEditableDigraph = (function loom$graph$map__GT_BasicEditableDigraph(G__41606){
return (new loom.graph.BasicEditableDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__41606),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__41606),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__41606),null,cljs.core.dissoc.call(null,G__41606,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)),null));
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
var iter__24937__auto__ = ((function (g__$1){
return (function loom$graph$iter__41637(s__41638){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__41638__$1 = s__41638;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41638__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n1 = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24933__auto__ = ((function (s__41638__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__41637_$_iter__41639(s__41640){
return (new cljs.core.LazySeq(null,((function (s__41638__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__41640__$1 = s__41640;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__41640__$1);
if(temp__4425__auto____$1){
var s__41640__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41640__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41640__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41642 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41641 = (0);
while(true){
if((i__41641 < size__24936__auto__)){
var e = cljs.core._nth.call(null,c__24935__auto__,i__41641);
cljs.core.chunk_append.call(null,b__41642,e);

var G__41656 = (i__41641 + (1));
i__41641 = G__41656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41642),loom$graph$iter__41637_$_iter__41639.call(null,cljs.core.chunk_rest.call(null,s__41640__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41642),null);
}
} else {
var e = cljs.core.first.call(null,s__41640__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__41637_$_iter__41639.call(null,cljs.core.rest.call(null,s__41640__$2)));
}
} else {
return null;
}
break;
}
});})(s__41638__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__41638__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,loom$graph$iter__41637.call(null,cljs.core.rest.call(null,s__41638__$1)));
} else {
var G__41657 = cljs.core.rest.call(null,s__41638__$1);
s__41638__$1 = G__41657;
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
return iter__24937__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24937__auto__ = ((function (g__$1){
return (function loom$graph$iter__41643(s__41644){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__41644__$1 = s__41644;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41644__$1);
if(temp__4425__auto__){
var s__41644__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41644__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41644__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41646 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41645 = (0);
while(true){
if((i__41645 < size__24936__auto__)){
var n2 = cljs.core._nth.call(null,c__24935__auto__,i__41645);
cljs.core.chunk_append.call(null,b__41646,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__41658 = (i__41645 + (1));
i__41645 = G__41658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41646),loom$graph$iter__41643.call(null,cljs.core.chunk_rest.call(null,s__41644__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41646),null);
}
} else {
var n2 = cljs.core.first.call(null,s__41644__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__41643.call(null,cljs.core.rest.call(null,s__41644__$2)));
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
return iter__24937__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24779__auto__,k__24780__auto__){
var self__ = this;
var this__24779__auto____$1 = this;
return cljs.core._lookup.call(null,this__24779__auto____$1,k__24780__auto__,null);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24781__auto__,k41635,else__24782__auto__){
var self__ = this;
var this__24781__auto____$1 = this;
var G__41647 = (((k41635 instanceof cljs.core.Keyword))?k41635.fqn:null);
switch (G__41647) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41635,else__24782__auto__);

}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24793__auto__,writer__24794__auto__,opts__24795__auto__){
var self__ = this;
var this__24793__auto____$1 = this;
var pr_pair__24796__auto__ = ((function (this__24793__auto____$1){
return (function (keyval__24797__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24794__auto__,cljs.core.pr_writer,""," ","",opts__24795__auto__,keyval__24797__auto__);
});})(this__24793__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24794__auto__,pr_pair__24796__auto__,"#loom.graph.BasicEditableWeightedGraph{",", ","}",opts__24795__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41634){
var self__ = this;
var G__41634__$1 = this;
return (new cljs.core.RecordIter((0),G__41634__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24777__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24773__auto__){
var self__ = this;
var this__24773__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24783__auto__){
var self__ = this;
var this__24783__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24774__auto__){
var self__ = this;
var this__24774__auto____$1 = this;
var h__24600__auto__ = self__.__hash;
if(!((h__24600__auto__ == null))){
return h__24600__auto__;
} else {
var h__24600__auto____$1 = cljs.core.hash_imap.call(null,this__24774__auto____$1);
self__.__hash = h__24600__auto____$1;

return h__24600__auto____$1;
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24775__auto__,other__24776__auto__){
var self__ = this;
var this__24775__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24153__auto__ = other__24776__auto__;
if(cljs.core.truth_(and__24153__auto__)){
var and__24153__auto____$1 = (this__24775__auto____$1.constructor === other__24776__auto__.constructor);
if(and__24153__auto____$1){
return cljs.core.equiv_map.call(null,this__24775__auto____$1,other__24776__auto__);
} else {
return and__24153__auto____$1;
}
} else {
return and__24153__auto__;
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
return (function (g__$2,p__41648){
var vec__41649 = p__41648;
var n1 = cljs.core.nth.call(null,vec__41649,(0),null);
var n2 = cljs.core.nth.call(null,vec__41649,(1),null);
var vec__41650 = cljs.core.nthnext.call(null,vec__41649,(2));
var w = cljs.core.nth.call(null,vec__41650,(0),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__24165__auto__ = w;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2,n1], null),(function (){var or__24165__auto__ = w;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
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
return (function (g__$2,p__41651){
var vec__41652 = p__41651;
var n1 = cljs.core.nth.call(null,vec__41652,(0),null);
var n2 = cljs.core.nth.call(null,vec__41652,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.dissoc,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24788__auto__,k__24789__auto__){
var self__ = this;
var this__24788__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__24789__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24788__auto____$1),self__.__meta),k__24789__auto__);
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24789__auto__)),null));
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24786__auto__,k__24787__auto__,G__41634){
var self__ = this;
var this__24786__auto____$1 = this;
var pred__41653 = cljs.core.keyword_identical_QMARK_;
var expr__41654 = k__24787__auto__;
if(cljs.core.truth_(pred__41653.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__41654))){
return (new loom.graph.BasicEditableWeightedGraph(G__41634,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41653.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__41654))){
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,G__41634,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24787__auto__,G__41634),null));
}
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24791__auto__){
var self__ = this;
var this__24791__auto____$1 = this;
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

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24778__auto__,G__41634){
var self__ = this;
var this__24778__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,G__41634,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24784__auto__,entry__24785__auto__){
var self__ = this;
var this__24784__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24785__auto__)){
return cljs.core._assoc.call(null,this__24784__auto____$1,cljs.core._nth.call(null,entry__24785__auto__,(0)),cljs.core._nth.call(null,entry__24785__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24784__auto____$1,entry__24785__auto__);
}
});

loom.graph.BasicEditableWeightedGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrSeq = (function (this__24813__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableWeightedGraph");
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrWriter = (function (this__24813__auto__,writer__24814__auto__){
return cljs.core._write.call(null,writer__24814__auto__,"loom.graph/BasicEditableWeightedGraph");
});

loom.graph.__GT_BasicEditableWeightedGraph = (function loom$graph$__GT_BasicEditableWeightedGraph(nodeset,adj){
return (new loom.graph.BasicEditableWeightedGraph(nodeset,adj,null,null,null));
});

loom.graph.map__GT_BasicEditableWeightedGraph = (function loom$graph$map__GT_BasicEditableWeightedGraph(G__41636){
return (new loom.graph.BasicEditableWeightedGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__41636),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__41636),null,cljs.core.dissoc.call(null,G__41636,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)),null));
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
var iter__24937__auto__ = ((function (g__$1){
return (function loom$graph$iter__41663(s__41664){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__41664__$1 = s__41664;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41664__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n1 = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24933__auto__ = ((function (s__41664__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__41663_$_iter__41665(s__41666){
return (new cljs.core.LazySeq(null,((function (s__41664__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__41666__$1 = s__41666;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__41666__$1);
if(temp__4425__auto____$1){
var s__41666__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41666__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41666__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41668 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41667 = (0);
while(true){
if((i__41667 < size__24936__auto__)){
var e = cljs.core._nth.call(null,c__24935__auto__,i__41667);
cljs.core.chunk_append.call(null,b__41668,e);

var G__41688 = (i__41667 + (1));
i__41667 = G__41688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41668),loom$graph$iter__41663_$_iter__41665.call(null,cljs.core.chunk_rest.call(null,s__41666__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41668),null);
}
} else {
var e = cljs.core.first.call(null,s__41666__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__41663_$_iter__41665.call(null,cljs.core.rest.call(null,s__41666__$2)));
}
} else {
return null;
}
break;
}
});})(s__41664__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__41664__$1,n1,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,loom$graph$iter__41663.call(null,cljs.core.rest.call(null,s__41664__$1)));
} else {
var G__41689 = cljs.core.rest.call(null,s__41664__$1);
s__41664__$1 = G__41689;
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
return iter__24937__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24937__auto__ = ((function (g__$1){
return (function loom$graph$iter__41669(s__41670){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__41670__$1 = s__41670;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41670__$1);
if(temp__4425__auto__){
var s__41670__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41670__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41670__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41672 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41671 = (0);
while(true){
if((i__41671 < size__24936__auto__)){
var n2 = cljs.core._nth.call(null,c__24935__auto__,i__41671);
cljs.core.chunk_append.call(null,b__41672,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__41690 = (i__41671 + (1));
i__41671 = G__41690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41672),loom$graph$iter__41669.call(null,cljs.core.chunk_rest.call(null,s__41670__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41672),null);
}
} else {
var n2 = cljs.core.first.call(null,s__41670__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__41669.call(null,cljs.core.rest.call(null,s__41670__$2)));
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
return iter__24937__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24779__auto__,k__24780__auto__){
var self__ = this;
var this__24779__auto____$1 = this;
return cljs.core._lookup.call(null,this__24779__auto____$1,k__24780__auto__,null);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24781__auto__,k41661,else__24782__auto__){
var self__ = this;
var this__24781__auto____$1 = this;
var G__41673 = (((k41661 instanceof cljs.core.Keyword))?k41661.fqn:null);
switch (G__41673) {
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
return cljs.core.get.call(null,self__.__extmap,k41661,else__24782__auto__);

}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24793__auto__,writer__24794__auto__,opts__24795__auto__){
var self__ = this;
var this__24793__auto____$1 = this;
var pr_pair__24796__auto__ = ((function (this__24793__auto____$1){
return (function (keyval__24797__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24794__auto__,cljs.core.pr_writer,""," ","",opts__24795__auto__,keyval__24797__auto__);
});})(this__24793__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24794__auto__,pr_pair__24796__auto__,"#loom.graph.BasicEditableWeightedDigraph{",", ","}",opts__24795__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41660){
var self__ = this;
var G__41660__$1 = this;
return (new cljs.core.RecordIter((0),G__41660__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24777__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24773__auto__){
var self__ = this;
var this__24773__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24783__auto__){
var self__ = this;
var this__24783__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24774__auto__){
var self__ = this;
var this__24774__auto____$1 = this;
var h__24600__auto__ = self__.__hash;
if(!((h__24600__auto__ == null))){
return h__24600__auto__;
} else {
var h__24600__auto____$1 = cljs.core.hash_imap.call(null,this__24774__auto____$1);
self__.__hash = h__24600__auto____$1;

return h__24600__auto____$1;
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24775__auto__,other__24776__auto__){
var self__ = this;
var this__24775__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24153__auto__ = other__24776__auto__;
if(cljs.core.truth_(and__24153__auto__)){
var and__24153__auto____$1 = (this__24775__auto____$1.constructor === other__24776__auto__.constructor);
if(and__24153__auto____$1){
return cljs.core.equiv_map.call(null,this__24775__auto____$1,other__24776__auto__);
} else {
return and__24153__auto____$1;
}
} else {
return and__24153__auto__;
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
return (function (g__$2,p__41674){
var vec__41675 = p__41674;
var n1 = cljs.core.nth.call(null,vec__41675,(0),null);
var n2 = cljs.core.nth.call(null,vec__41675,(1),null);
var vec__41676 = cljs.core.nthnext.call(null,vec__41675,(2));
var w = cljs.core.nth.call(null,vec__41676,(0),null);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__24165__auto__ = w;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
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
return (function (g__$2,p__41677){
var vec__41678 = p__41677;
var n1 = cljs.core.nth.call(null,vec__41678,(0),null);
var n2 = cljs.core.nth.call(null,vec__41678,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24788__auto__,k__24789__auto__){
var self__ = this;
var this__24788__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__24789__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24788__auto____$1),self__.__meta),k__24789__auto__);
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24789__auto__)),null));
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24786__auto__,k__24787__auto__,G__41660){
var self__ = this;
var this__24786__auto____$1 = this;
var pred__41679 = cljs.core.keyword_identical_QMARK_;
var expr__41680 = k__24787__auto__;
if(cljs.core.truth_(pred__41679.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__41680))){
return (new loom.graph.BasicEditableWeightedDigraph(G__41660,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41679.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__41680))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,G__41660,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41679.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__41680))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,G__41660,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24787__auto__,G__41660),null));
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
var iter__24937__auto__ = ((function (g__$1){
return (function loom$graph$iter__41682(s__41683){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__41683__$1 = s__41683;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41683__$1);
if(temp__4425__auto__){
var s__41683__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41683__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41683__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41685 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41684 = (0);
while(true){
if((i__41684 < size__24936__auto__)){
var n2 = cljs.core._nth.call(null,c__24935__auto__,i__41684);
cljs.core.chunk_append.call(null,b__41685,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__41692 = (i__41684 + (1));
i__41684 = G__41692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41685),loom$graph$iter__41682.call(null,cljs.core.chunk_rest.call(null,s__41683__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41685),null);
}
} else {
var n2 = cljs.core.first.call(null,s__41683__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__41682.call(null,cljs.core.rest.call(null,s__41683__$2)));
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
return iter__24937__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (tg,p__41686){
var vec__41687 = p__41686;
var n1 = cljs.core.nth.call(null,vec__41687,(0),null);
var n2 = cljs.core.nth.call(null,vec__41687,(1),null);
return loom.graph.add_edges_STAR_.call(null,tg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,n1,loom.graph.weight.call(null,g__$1,n1,n2)], null)], null));
});})(g__$1))
,cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY),loom.graph.edges.call(null,g__$1));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24791__auto__){
var self__ = this;
var this__24791__auto____$1 = this;
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

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24778__auto__,G__41660){
var self__ = this;
var this__24778__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,G__41660,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24784__auto__,entry__24785__auto__){
var self__ = this;
var this__24784__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24785__auto__)){
return cljs.core._assoc.call(null,this__24784__auto____$1,cljs.core._nth.call(null,entry__24785__auto__,(0)),cljs.core._nth.call(null,entry__24785__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24784__auto____$1,entry__24785__auto__);
}
});

loom.graph.BasicEditableWeightedDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrSeq = (function (this__24813__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableWeightedDigraph");
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrWriter = (function (this__24813__auto__,writer__24814__auto__){
return cljs.core._write.call(null,writer__24814__auto__,"loom.graph/BasicEditableWeightedDigraph");
});

loom.graph.__GT_BasicEditableWeightedDigraph = (function loom$graph$__GT_BasicEditableWeightedDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableWeightedDigraph(nodeset,adj,in$,null,null,null));
});

loom.graph.map__GT_BasicEditableWeightedDigraph = (function loom$graph$map__GT_BasicEditableWeightedDigraph(G__41662){
return (new loom.graph.BasicEditableWeightedDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__41662),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__41662),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__41662),null,cljs.core.dissoc.call(null,G__41662,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)),null));
});

loom.graph.call_or_return = (function loom$graph$call_or_return(var_args){
var args__25230__auto__ = [];
var len__25223__auto___41695 = arguments.length;
var i__25224__auto___41696 = (0);
while(true){
if((i__25224__auto___41696 < len__25223__auto___41695)){
args__25230__auto__.push((arguments[i__25224__auto___41696]));

var G__41697 = (i__25224__auto___41696 + (1));
i__25224__auto___41696 = G__41697;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((1) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((1)),(0))):null);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25231__auto__);
});

loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if((cljs.core.fn_QMARK_.call(null,f)) || (((f instanceof clojure.lang.IFn)) && (cljs.core.seq.call(null,args)))){
return cljs.core.apply.call(null,f,args);
} else {
return f;
}
});

loom.graph.call_or_return.cljs$lang$maxFixedArity = (1);

loom.graph.call_or_return.cljs$lang$applyTo = (function (seq41693){
var G__41694 = cljs.core.first.call(null,seq41693);
var seq41693__$1 = cljs.core.next.call(null,seq41693);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(G__41694,seq41693__$1);
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
if(cljs.core.truth_((function (){var or__24165__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
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
var iter__24937__auto__ = ((function (g__$1){
return (function loom$graph$iter__41701(s__41702){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__41702__$1 = s__41702;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41702__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24933__auto__ = ((function (s__41702__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__41701_$_iter__41703(s__41704){
return (new cljs.core.LazySeq(null,((function (s__41702__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__41704__$1 = s__41704;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__41704__$1);
if(temp__4425__auto____$1){
var s__41704__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41704__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41704__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41706 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41705 = (0);
while(true){
if((i__41705 < size__24936__auto__)){
var nbr = cljs.core._nth.call(null,c__24935__auto__,i__41705);
cljs.core.chunk_append.call(null,b__41706,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__41715 = (i__41705 + (1));
i__41705 = G__41715;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41706),loom$graph$iter__41701_$_iter__41703.call(null,cljs.core.chunk_rest.call(null,s__41704__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41706),null);
}
} else {
var nbr = cljs.core.first.call(null,s__41704__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__41701_$_iter__41703.call(null,cljs.core.rest.call(null,s__41704__$2)));
}
} else {
return null;
}
break;
}
});})(s__41702__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__41702__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,loom$graph$iter__41701.call(null,cljs.core.rest.call(null,s__41702__$1)));
} else {
var G__41716 = cljs.core.rest.call(null,s__41702__$1);
s__41702__$1 = G__41716;
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
return iter__24937__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24937__auto__ = ((function (g__$1){
return (function loom$graph$iter__41707(s__41708){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__41708__$1 = s__41708;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41708__$1);
if(temp__4425__auto__){
var s__41708__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41708__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41708__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41710 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41709 = (0);
while(true){
if((i__41709 < size__24936__auto__)){
var n2 = cljs.core._nth.call(null,c__24935__auto__,i__41709);
cljs.core.chunk_append.call(null,b__41710,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__41717 = (i__41709 + (1));
i__41709 = G__41717;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41710),loom$graph$iter__41707.call(null,cljs.core.chunk_rest.call(null,s__41708__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41710),null);
}
} else {
var n2 = cljs.core.first.call(null,s__41708__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__41707.call(null,cljs.core.rest.call(null,s__41708__$2)));
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
return iter__24937__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24779__auto__,k__24780__auto__){
var self__ = this;
var this__24779__auto____$1 = this;
return cljs.core._lookup.call(null,this__24779__auto____$1,k__24780__auto__,null);
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24781__auto__,k41699,else__24782__auto__){
var self__ = this;
var this__24781__auto____$1 = this;
var G__41711 = (((k41699 instanceof cljs.core.Keyword))?k41699.fqn:null);
switch (G__41711) {
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
return cljs.core.get.call(null,self__.__extmap,k41699,else__24782__auto__);

}
});

loom.graph.FlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24793__auto__,writer__24794__auto__,opts__24795__auto__){
var self__ = this;
var this__24793__auto____$1 = this;
var pr_pair__24796__auto__ = ((function (this__24793__auto____$1){
return (function (keyval__24797__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24794__auto__,cljs.core.pr_writer,""," ","",opts__24795__auto__,keyval__24797__auto__);
});})(this__24793__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24794__auto__,pr_pair__24796__auto__,"#loom.graph.FlyGraph{",", ","}",opts__24795__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41698){
var self__ = this;
var G__41698__$1 = this;
return (new cljs.core.RecordIter((0),G__41698__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.FlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24777__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24773__auto__){
var self__ = this;
var this__24773__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24783__auto__){
var self__ = this;
var this__24783__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24774__auto__){
var self__ = this;
var this__24774__auto____$1 = this;
var h__24600__auto__ = self__.__hash;
if(!((h__24600__auto__ == null))){
return h__24600__auto__;
} else {
var h__24600__auto____$1 = cljs.core.hash_imap.call(null,this__24774__auto____$1);
self__.__hash = h__24600__auto____$1;

return h__24600__auto____$1;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24775__auto__,other__24776__auto__){
var self__ = this;
var this__24775__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24153__auto__ = other__24776__auto__;
if(cljs.core.truth_(and__24153__auto__)){
var and__24153__auto____$1 = (this__24775__auto____$1.constructor === other__24776__auto__.constructor);
if(and__24153__auto____$1){
return cljs.core.equiv_map.call(null,this__24775__auto____$1,other__24776__auto__);
} else {
return and__24153__auto____$1;
}
} else {
return and__24153__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24788__auto__,k__24789__auto__){
var self__ = this;
var this__24788__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null], null), null),k__24789__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24788__auto____$1),self__.__meta),k__24789__auto__);
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24789__auto__)),null));
}
});

loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24786__auto__,k__24787__auto__,G__41698){
var self__ = this;
var this__24786__auto____$1 = this;
var pred__41712 = cljs.core.keyword_identical_QMARK_;
var expr__41713 = k__24787__auto__;
if(cljs.core.truth_(pred__41712.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__41713))){
return (new loom.graph.FlyGraph(G__41698,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41712.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__41713))){
return (new loom.graph.FlyGraph(self__.fnodes,G__41698,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41712.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__41713))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,G__41698,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41712.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__41713))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__41698,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24787__auto__,G__41698),null));
}
}
}
}
});

loom.graph.FlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24791__auto__){
var self__ = this;
var this__24791__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24778__auto__,G__41698){
var self__ = this;
var this__24778__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,G__41698,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24784__auto__,entry__24785__auto__){
var self__ = this;
var this__24784__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24785__auto__)){
return cljs.core._assoc.call(null,this__24784__auto____$1,cljs.core._nth.call(null,entry__24785__auto__,(0)),cljs.core._nth.call(null,entry__24785__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24784__auto____$1,entry__24785__auto__);
}
});

loom.graph.FlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyGraph.cljs$lang$type = true;

loom.graph.FlyGraph.cljs$lang$ctorPrSeq = (function (this__24813__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/FlyGraph");
});

loom.graph.FlyGraph.cljs$lang$ctorPrWriter = (function (this__24813__auto__,writer__24814__auto__){
return cljs.core._write.call(null,writer__24814__auto__,"loom.graph/FlyGraph");
});

loom.graph.__GT_FlyGraph = (function loom$graph$__GT_FlyGraph(fnodes,fedges,fsuccessors,start){
return (new loom.graph.FlyGraph(fnodes,fedges,fsuccessors,start,null,null,null));
});

loom.graph.map__GT_FlyGraph = (function loom$graph$map__GT_FlyGraph(G__41700){
return (new loom.graph.FlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__41700),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__41700),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__41700),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__41700),null,cljs.core.dissoc.call(null,G__41700,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__24165__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
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
var iter__24937__auto__ = ((function (g__$1){
return (function loom$graph$iter__41722(s__41723){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__41723__$1 = s__41723;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41723__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24933__auto__ = ((function (s__41723__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__41722_$_iter__41724(s__41725){
return (new cljs.core.LazySeq(null,((function (s__41723__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__41725__$1 = s__41725;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__41725__$1);
if(temp__4425__auto____$1){
var s__41725__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41725__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41725__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41727 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41726 = (0);
while(true){
if((i__41726 < size__24936__auto__)){
var nbr = cljs.core._nth.call(null,c__24935__auto__,i__41726);
cljs.core.chunk_append.call(null,b__41727,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__41736 = (i__41726 + (1));
i__41726 = G__41736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41727),loom$graph$iter__41722_$_iter__41724.call(null,cljs.core.chunk_rest.call(null,s__41725__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41727),null);
}
} else {
var nbr = cljs.core.first.call(null,s__41725__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__41722_$_iter__41724.call(null,cljs.core.rest.call(null,s__41725__$2)));
}
} else {
return null;
}
break;
}
});})(s__41723__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__41723__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,loom$graph$iter__41722.call(null,cljs.core.rest.call(null,s__41723__$1)));
} else {
var G__41737 = cljs.core.rest.call(null,s__41723__$1);
s__41723__$1 = G__41737;
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
return iter__24937__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24937__auto__ = ((function (g__$1){
return (function loom$graph$iter__41728(s__41729){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__41729__$1 = s__41729;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41729__$1);
if(temp__4425__auto__){
var s__41729__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41729__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41729__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41731 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41730 = (0);
while(true){
if((i__41730 < size__24936__auto__)){
var n2 = cljs.core._nth.call(null,c__24935__auto__,i__41730);
cljs.core.chunk_append.call(null,b__41731,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__41738 = (i__41730 + (1));
i__41730 = G__41738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41731),loom$graph$iter__41728.call(null,cljs.core.chunk_rest.call(null,s__41729__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41731),null);
}
} else {
var n2 = cljs.core.first.call(null,s__41729__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__41728.call(null,cljs.core.rest.call(null,s__41729__$2)));
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
return iter__24937__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24779__auto__,k__24780__auto__){
var self__ = this;
var this__24779__auto____$1 = this;
return cljs.core._lookup.call(null,this__24779__auto____$1,k__24780__auto__,null);
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24781__auto__,k41720,else__24782__auto__){
var self__ = this;
var this__24781__auto____$1 = this;
var G__41732 = (((k41720 instanceof cljs.core.Keyword))?k41720.fqn:null);
switch (G__41732) {
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
return cljs.core.get.call(null,self__.__extmap,k41720,else__24782__auto__);

}
});

loom.graph.FlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24793__auto__,writer__24794__auto__,opts__24795__auto__){
var self__ = this;
var this__24793__auto____$1 = this;
var pr_pair__24796__auto__ = ((function (this__24793__auto____$1){
return (function (keyval__24797__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24794__auto__,cljs.core.pr_writer,""," ","",opts__24795__auto__,keyval__24797__auto__);
});})(this__24793__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24794__auto__,pr_pair__24796__auto__,"#loom.graph.FlyDigraph{",", ","}",opts__24795__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41719){
var self__ = this;
var G__41719__$1 = this;
return (new cljs.core.RecordIter((0),G__41719__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.FlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24777__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24773__auto__){
var self__ = this;
var this__24773__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24783__auto__){
var self__ = this;
var this__24783__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24774__auto__){
var self__ = this;
var this__24774__auto____$1 = this;
var h__24600__auto__ = self__.__hash;
if(!((h__24600__auto__ == null))){
return h__24600__auto__;
} else {
var h__24600__auto____$1 = cljs.core.hash_imap.call(null,this__24774__auto____$1);
self__.__hash = h__24600__auto____$1;

return h__24600__auto____$1;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24775__auto__,other__24776__auto__){
var self__ = this;
var this__24775__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24153__auto__ = other__24776__auto__;
if(cljs.core.truth_(and__24153__auto__)){
var and__24153__auto____$1 = (this__24775__auto____$1.constructor === other__24776__auto__.constructor);
if(and__24153__auto____$1){
return cljs.core.equiv_map.call(null,this__24775__auto____$1,other__24776__auto__);
} else {
return and__24153__auto____$1;
}
} else {
return and__24153__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24788__auto__,k__24789__auto__){
var self__ = this;
var this__24788__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__24789__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24788__auto____$1),self__.__meta),k__24789__auto__);
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24789__auto__)),null));
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24786__auto__,k__24787__auto__,G__41719){
var self__ = this;
var this__24786__auto____$1 = this;
var pred__41733 = cljs.core.keyword_identical_QMARK_;
var expr__41734 = k__24787__auto__;
if(cljs.core.truth_(pred__41733.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__41734))){
return (new loom.graph.FlyDigraph(G__41719,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41733.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__41734))){
return (new loom.graph.FlyDigraph(self__.fnodes,G__41719,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41733.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__41734))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,G__41719,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41733.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__41734))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__41719,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41733.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__41734))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__41719,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24787__auto__,G__41719),null));
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

loom.graph.FlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24791__auto__){
var self__ = this;
var this__24791__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24778__auto__,G__41719){
var self__ = this;
var this__24778__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,G__41719,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24784__auto__,entry__24785__auto__){
var self__ = this;
var this__24784__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24785__auto__)){
return cljs.core._assoc.call(null,this__24784__auto____$1,cljs.core._nth.call(null,entry__24785__auto__,(0)),cljs.core._nth.call(null,entry__24785__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24784__auto____$1,entry__24785__auto__);
}
});

loom.graph.FlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyDigraph.cljs$lang$type = true;

loom.graph.FlyDigraph.cljs$lang$ctorPrSeq = (function (this__24813__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/FlyDigraph");
});

loom.graph.FlyDigraph.cljs$lang$ctorPrWriter = (function (this__24813__auto__,writer__24814__auto__){
return cljs.core._write.call(null,writer__24814__auto__,"loom.graph/FlyDigraph");
});

loom.graph.__GT_FlyDigraph = (function loom$graph$__GT_FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start){
return (new loom.graph.FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start,null,null,null));
});

loom.graph.map__GT_FlyDigraph = (function loom$graph$map__GT_FlyDigraph(G__41721){
return (new loom.graph.FlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__41721),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__41721),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__41721),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__41721),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__41721),null,cljs.core.dissoc.call(null,G__41721,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__24165__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
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
var iter__24937__auto__ = ((function (g__$1){
return (function loom$graph$iter__41743(s__41744){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__41744__$1 = s__41744;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41744__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24933__auto__ = ((function (s__41744__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__41743_$_iter__41745(s__41746){
return (new cljs.core.LazySeq(null,((function (s__41744__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__41746__$1 = s__41746;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__41746__$1);
if(temp__4425__auto____$1){
var s__41746__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41746__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41746__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41748 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41747 = (0);
while(true){
if((i__41747 < size__24936__auto__)){
var nbr = cljs.core._nth.call(null,c__24935__auto__,i__41747);
cljs.core.chunk_append.call(null,b__41748,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__41757 = (i__41747 + (1));
i__41747 = G__41757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41748),loom$graph$iter__41743_$_iter__41745.call(null,cljs.core.chunk_rest.call(null,s__41746__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41748),null);
}
} else {
var nbr = cljs.core.first.call(null,s__41746__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__41743_$_iter__41745.call(null,cljs.core.rest.call(null,s__41746__$2)));
}
} else {
return null;
}
break;
}
});})(s__41744__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__41744__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,loom$graph$iter__41743.call(null,cljs.core.rest.call(null,s__41744__$1)));
} else {
var G__41758 = cljs.core.rest.call(null,s__41744__$1);
s__41744__$1 = G__41758;
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
return iter__24937__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24937__auto__ = ((function (g__$1){
return (function loom$graph$iter__41749(s__41750){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__41750__$1 = s__41750;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41750__$1);
if(temp__4425__auto__){
var s__41750__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41750__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41750__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41752 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41751 = (0);
while(true){
if((i__41751 < size__24936__auto__)){
var n2 = cljs.core._nth.call(null,c__24935__auto__,i__41751);
cljs.core.chunk_append.call(null,b__41752,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__41759 = (i__41751 + (1));
i__41751 = G__41759;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41752),loom$graph$iter__41749.call(null,cljs.core.chunk_rest.call(null,s__41750__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41752),null);
}
} else {
var n2 = cljs.core.first.call(null,s__41750__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__41749.call(null,cljs.core.rest.call(null,s__41750__$2)));
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
return iter__24937__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24779__auto__,k__24780__auto__){
var self__ = this;
var this__24779__auto____$1 = this;
return cljs.core._lookup.call(null,this__24779__auto____$1,k__24780__auto__,null);
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24781__auto__,k41741,else__24782__auto__){
var self__ = this;
var this__24781__auto____$1 = this;
var G__41753 = (((k41741 instanceof cljs.core.Keyword))?k41741.fqn:null);
switch (G__41753) {
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
return cljs.core.get.call(null,self__.__extmap,k41741,else__24782__auto__);

}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24793__auto__,writer__24794__auto__,opts__24795__auto__){
var self__ = this;
var this__24793__auto____$1 = this;
var pr_pair__24796__auto__ = ((function (this__24793__auto____$1){
return (function (keyval__24797__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24794__auto__,cljs.core.pr_writer,""," ","",opts__24795__auto__,keyval__24797__auto__);
});})(this__24793__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24794__auto__,pr_pair__24796__auto__,"#loom.graph.WeightedFlyGraph{",", ","}",opts__24795__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41740){
var self__ = this;
var G__41740__$1 = this;
return (new cljs.core.RecordIter((0),G__41740__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24777__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24773__auto__){
var self__ = this;
var this__24773__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24783__auto__){
var self__ = this;
var this__24783__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24774__auto__){
var self__ = this;
var this__24774__auto____$1 = this;
var h__24600__auto__ = self__.__hash;
if(!((h__24600__auto__ == null))){
return h__24600__auto__;
} else {
var h__24600__auto____$1 = cljs.core.hash_imap.call(null,this__24774__auto____$1);
self__.__hash = h__24600__auto____$1;

return h__24600__auto____$1;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24775__auto__,other__24776__auto__){
var self__ = this;
var this__24775__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24153__auto__ = other__24776__auto__;
if(cljs.core.truth_(and__24153__auto__)){
var and__24153__auto____$1 = (this__24775__auto____$1.constructor === other__24776__auto__.constructor);
if(and__24153__auto____$1){
return cljs.core.equiv_map.call(null,this__24775__auto____$1,other__24776__auto__);
} else {
return and__24153__auto____$1;
}
} else {
return and__24153__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24788__auto__,k__24789__auto__){
var self__ = this;
var this__24788__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null], null), null),k__24789__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24788__auto____$1),self__.__meta),k__24789__auto__);
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24789__auto__)),null));
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24786__auto__,k__24787__auto__,G__41740){
var self__ = this;
var this__24786__auto____$1 = this;
var pred__41754 = cljs.core.keyword_identical_QMARK_;
var expr__41755 = k__24787__auto__;
if(cljs.core.truth_(pred__41754.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__41755))){
return (new loom.graph.WeightedFlyGraph(G__41740,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41754.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__41755))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,G__41740,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41754.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__41755))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,G__41740,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41754.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__41755))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__41740,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41754.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__41755))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,G__41740,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24787__auto__,G__41740),null));
}
}
}
}
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24791__auto__){
var self__ = this;
var this__24791__auto____$1 = this;
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

loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24778__auto__,G__41740){
var self__ = this;
var this__24778__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,G__41740,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24784__auto__,entry__24785__auto__){
var self__ = this;
var this__24784__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24785__auto__)){
return cljs.core._assoc.call(null,this__24784__auto____$1,cljs.core._nth.call(null,entry__24785__auto__,(0)),cljs.core._nth.call(null,entry__24785__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24784__auto____$1,entry__24785__auto__);
}
});

loom.graph.WeightedFlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyGraph.cljs$lang$type = true;

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrSeq = (function (this__24813__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/WeightedFlyGraph");
});

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrWriter = (function (this__24813__auto__,writer__24814__auto__){
return cljs.core._write.call(null,writer__24814__auto__,"loom.graph/WeightedFlyGraph");
});

loom.graph.__GT_WeightedFlyGraph = (function loom$graph$__GT_WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start){
return (new loom.graph.WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start,null,null,null));
});

loom.graph.map__GT_WeightedFlyGraph = (function loom$graph$map__GT_WeightedFlyGraph(G__41742){
return (new loom.graph.WeightedFlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__41742),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__41742),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__41742),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__41742),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__41742),null,cljs.core.dissoc.call(null,G__41742,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__24165__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
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
var iter__24937__auto__ = ((function (g__$1){
return (function loom$graph$iter__41764(s__41765){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__41765__$1 = s__41765;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41765__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var n = cljs.core.first.call(null,xs__4977__auto__);
var iterys__24933__auto__ = ((function (s__41765__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function loom$graph$iter__41764_$_iter__41766(s__41767){
return (new cljs.core.LazySeq(null,((function (s__41765__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1){
return (function (){
var s__41767__$1 = s__41767;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__41767__$1);
if(temp__4425__auto____$1){
var s__41767__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41767__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41767__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41769 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41768 = (0);
while(true){
if((i__41768 < size__24936__auto__)){
var nbr = cljs.core._nth.call(null,c__24935__auto__,i__41768);
cljs.core.chunk_append.call(null,b__41769,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__41778 = (i__41768 + (1));
i__41768 = G__41778;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41769),loom$graph$iter__41764_$_iter__41766.call(null,cljs.core.chunk_rest.call(null,s__41767__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41769),null);
}
} else {
var nbr = cljs.core.first.call(null,s__41767__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__41764_$_iter__41766.call(null,cljs.core.rest.call(null,s__41767__$2)));
}
} else {
return null;
}
break;
}
});})(s__41765__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
,null,null));
});})(s__41765__$1,n,xs__4977__auto__,temp__4425__auto__,g__$1))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,loom$graph$iter__41764.call(null,cljs.core.rest.call(null,s__41765__$1)));
} else {
var G__41779 = cljs.core.rest.call(null,s__41765__$1);
s__41765__$1 = G__41779;
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
return iter__24937__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__24937__auto__ = ((function (g__$1){
return (function loom$graph$iter__41770(s__41771){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__41771__$1 = s__41771;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41771__$1);
if(temp__4425__auto__){
var s__41771__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41771__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41771__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41773 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41772 = (0);
while(true){
if((i__41772 < size__24936__auto__)){
var n2 = cljs.core._nth.call(null,c__24935__auto__,i__41772);
cljs.core.chunk_append.call(null,b__41773,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__41780 = (i__41772 + (1));
i__41772 = G__41780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41773),loom$graph$iter__41770.call(null,cljs.core.chunk_rest.call(null,s__41771__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41773),null);
}
} else {
var n2 = cljs.core.first.call(null,s__41771__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__41770.call(null,cljs.core.rest.call(null,s__41771__$2)));
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
return iter__24937__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24779__auto__,k__24780__auto__){
var self__ = this;
var this__24779__auto____$1 = this;
return cljs.core._lookup.call(null,this__24779__auto____$1,k__24780__auto__,null);
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24781__auto__,k41762,else__24782__auto__){
var self__ = this;
var this__24781__auto____$1 = this;
var G__41774 = (((k41762 instanceof cljs.core.Keyword))?k41762.fqn:null);
switch (G__41774) {
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
return cljs.core.get.call(null,self__.__extmap,k41762,else__24782__auto__);

}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24793__auto__,writer__24794__auto__,opts__24795__auto__){
var self__ = this;
var this__24793__auto____$1 = this;
var pr_pair__24796__auto__ = ((function (this__24793__auto____$1){
return (function (keyval__24797__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24794__auto__,cljs.core.pr_writer,""," ","",opts__24795__auto__,keyval__24797__auto__);
});})(this__24793__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24794__auto__,pr_pair__24796__auto__,"#loom.graph.WeightedFlyDigraph{",", ","}",opts__24795__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41761){
var self__ = this;
var G__41761__$1 = this;
return (new cljs.core.RecordIter((0),G__41761__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24777__auto__){
var self__ = this;
var this__24777__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24773__auto__){
var self__ = this;
var this__24773__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24783__auto__){
var self__ = this;
var this__24783__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24774__auto__){
var self__ = this;
var this__24774__auto____$1 = this;
var h__24600__auto__ = self__.__hash;
if(!((h__24600__auto__ == null))){
return h__24600__auto__;
} else {
var h__24600__auto____$1 = cljs.core.hash_imap.call(null,this__24774__auto____$1);
self__.__hash = h__24600__auto____$1;

return h__24600__auto____$1;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24775__auto__,other__24776__auto__){
var self__ = this;
var this__24775__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24153__auto__ = other__24776__auto__;
if(cljs.core.truth_(and__24153__auto__)){
var and__24153__auto____$1 = (this__24775__auto____$1.constructor === other__24776__auto__.constructor);
if(and__24153__auto____$1){
return cljs.core.equiv_map.call(null,this__24775__auto____$1,other__24776__auto__);
} else {
return and__24153__auto____$1;
}
} else {
return and__24153__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24788__auto__,k__24789__auto__){
var self__ = this;
var this__24788__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__24789__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24788__auto____$1),self__.__meta),k__24789__auto__);
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24789__auto__)),null));
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24786__auto__,k__24787__auto__,G__41761){
var self__ = this;
var this__24786__auto____$1 = this;
var pred__41775 = cljs.core.keyword_identical_QMARK_;
var expr__41776 = k__24787__auto__;
if(cljs.core.truth_(pred__41775.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__41776))){
return (new loom.graph.WeightedFlyDigraph(G__41761,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41775.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__41776))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,G__41761,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41775.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__41776))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,G__41761,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41775.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__41776))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__41761,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41775.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__41776))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__41761,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41775.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__41776))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,G__41761,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24787__auto__,G__41761),null));
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

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24791__auto__){
var self__ = this;
var this__24791__auto____$1 = this;
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

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24778__auto__,G__41761){
var self__ = this;
var this__24778__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,G__41761,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24784__auto__,entry__24785__auto__){
var self__ = this;
var this__24784__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24785__auto__)){
return cljs.core._assoc.call(null,this__24784__auto____$1,cljs.core._nth.call(null,entry__24785__auto__,(0)),cljs.core._nth.call(null,entry__24785__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24784__auto____$1,entry__24785__auto__);
}
});

loom.graph.WeightedFlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyDigraph.cljs$lang$type = true;

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrSeq = (function (this__24813__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/WeightedFlyDigraph");
});

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrWriter = (function (this__24813__auto__,writer__24814__auto__){
return cljs.core._write.call(null,writer__24814__auto__,"loom.graph/WeightedFlyDigraph");
});

loom.graph.__GT_WeightedFlyDigraph = (function loom$graph$__GT_WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start){
return (new loom.graph.WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start,null,null,null));
});

loom.graph.map__GT_WeightedFlyDigraph = (function loom$graph$map__GT_WeightedFlyDigraph(G__41763){
return (new loom.graph.WeightedFlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__41763),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__41763),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__41763),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__41763),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__41763),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__41763),null,cljs.core.dissoc.call(null,G__41763,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
var args__25230__auto__ = [];
var len__25223__auto___41784 = arguments.length;
var i__25224__auto___41785 = (0);
while(true){
if((i__25224__auto___41785 < len__25223__auto___41784)){
args__25230__auto__.push((arguments[i__25224__auto___41785]));

var G__41786 = (i__25224__auto___41785 + (1));
i__25224__auto___41785 = G__41786;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((1) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((1)),(0))):null);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25231__auto__);
});

loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),nodes));
});

loom.graph.add_path.cljs$lang$maxFixedArity = (1);

loom.graph.add_path.cljs$lang$applyTo = (function (seq41782){
var G__41783 = cljs.core.first.call(null,seq41782);
var seq41782__$1 = cljs.core.next.call(null,seq41782);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic(G__41783,seq41782__$1);
});
/**
 * Adds a cycle of edges connecting the given nodes in order
 */
loom.graph.add_cycle = (function loom$graph$add_cycle(var_args){
var args__25230__auto__ = [];
var len__25223__auto___41789 = arguments.length;
var i__25224__auto___41790 = (0);
while(true){
if((i__25224__auto___41790 < len__25223__auto___41789)){
args__25230__auto__.push((arguments[i__25224__auto___41790]));

var G__41791 = (i__25224__auto___41790 + (1));
i__25224__auto___41790 = G__41791;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((1) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((1)),(0))):null);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25231__auto__);
});

loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),cljs.core.concat.call(null,nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nodes)], null))));
});

loom.graph.add_cycle.cljs$lang$maxFixedArity = (1);

loom.graph.add_cycle.cljs$lang$applyTo = (function (seq41787){
var G__41788 = cljs.core.first.call(null,seq41787);
var seq41787__$1 = cljs.core.next.call(null,seq41787);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic(G__41788,seq41787__$1);
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
var args__25230__auto__ = [];
var len__25223__auto___41930 = arguments.length;
var i__25224__auto___41931 = (0);
while(true){
if((i__25224__auto___41931 < len__25223__auto___41930)){
args__25230__auto__.push((arguments[i__25224__auto___41931]));

var G__41932 = (i__25224__auto___41931 + (1));
i__25224__auto___41931 = G__41932;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((1) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((1)),(0))):null);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25231__auto__);
});

loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,inits){
var build = (function loom$graph$build(g__$1,init){
if(cljs.core.truth_(loom.graph.graph_QMARK_.call(null,init))){
if(cljs.core.truth_((function (){var and__24153__auto__ = loom.graph.weighted_QMARK_.call(null,g__$1);
if(cljs.core.truth_(and__24153__auto__)){
return loom.graph.weighted_QMARK_.call(null,init);
} else {
return and__24153__auto__;
}
})())){
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,loom.graph.add_edges,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),(function (){var iter__24937__auto__ = (function loom$graph$build_$_iter__41898(s__41899){
return (new cljs.core.LazySeq(null,(function (){
var s__41899__$1 = s__41899;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41899__$1);
if(temp__4425__auto__){
var s__41899__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41899__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41899__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41901 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41900 = (0);
while(true){
if((i__41900 < size__24936__auto__)){
var vec__41904 = cljs.core._nth.call(null,c__24935__auto__,i__41900);
var n1 = cljs.core.nth.call(null,vec__41904,(0),null);
var n2 = cljs.core.nth.call(null,vec__41904,(1),null);
cljs.core.chunk_append.call(null,b__41901,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null));

var G__41933 = (i__41900 + (1));
i__41900 = G__41933;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41901),loom$graph$build_$_iter__41898.call(null,cljs.core.chunk_rest.call(null,s__41899__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41901),null);
}
} else {
var vec__41905 = cljs.core.first.call(null,s__41899__$2);
var n1 = cljs.core.nth.call(null,vec__41905,(0),null);
var n2 = cljs.core.nth.call(null,vec__41905,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null),loom$graph$build_$_iter__41898.call(null,cljs.core.rest.call(null,s__41899__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24937__auto__.call(null,loom.graph.edges.call(null,init));
})()),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
} else {
return cljs.core.assoc.call(null,loom.graph.add_edges_STAR_.call(null,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),loom.graph.edges.call(null,init)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
}
} else {
if(cljs.core.map_QMARK_.call(null,init)){
var es = ((cljs.core.map_QMARK_.call(null,cljs.core.val.call(null,cljs.core.first.call(null,init))))?(function (){var iter__24937__auto__ = (function loom$graph$build_$_iter__41906(s__41907){
return (new cljs.core.LazySeq(null,(function (){
var s__41907__$1 = s__41907;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41907__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__41917 = cljs.core.first.call(null,xs__4977__auto__);
var n = cljs.core.nth.call(null,vec__41917,(0),null);
var nbrs = cljs.core.nth.call(null,vec__41917,(1),null);
var iterys__24933__auto__ = ((function (s__41907__$1,vec__41917,n,nbrs,xs__4977__auto__,temp__4425__auto__){
return (function loom$graph$build_$_iter__41906_$_iter__41908(s__41909){
return (new cljs.core.LazySeq(null,((function (s__41907__$1,vec__41917,n,nbrs,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__41909__$1 = s__41909;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__41909__$1);
if(temp__4425__auto____$1){
var s__41909__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41909__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41909__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41911 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41910 = (0);
while(true){
if((i__41910 < size__24936__auto__)){
var vec__41920 = cljs.core._nth.call(null,c__24935__auto__,i__41910);
var nbr = cljs.core.nth.call(null,vec__41920,(0),null);
var wt = cljs.core.nth.call(null,vec__41920,(1),null);
cljs.core.chunk_append.call(null,b__41911,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__41934 = (i__41910 + (1));
i__41910 = G__41934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41911),loom$graph$build_$_iter__41906_$_iter__41908.call(null,cljs.core.chunk_rest.call(null,s__41909__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41911),null);
}
} else {
var vec__41921 = cljs.core.first.call(null,s__41909__$2);
var nbr = cljs.core.nth.call(null,vec__41921,(0),null);
var wt = cljs.core.nth.call(null,vec__41921,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),loom$graph$build_$_iter__41906_$_iter__41908.call(null,cljs.core.rest.call(null,s__41909__$2)));
}
} else {
return null;
}
break;
}
});})(s__41907__$1,vec__41917,n,nbrs,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__41907__$1,vec__41917,n,nbrs,xs__4977__auto__,temp__4425__auto__))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,nbrs));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,loom$graph$build_$_iter__41906.call(null,cljs.core.rest.call(null,s__41907__$1)));
} else {
var G__41935 = cljs.core.rest.call(null,s__41907__$1);
s__41907__$1 = G__41935;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24937__auto__.call(null,init);
})():(function (){var iter__24937__auto__ = (function loom$graph$build_$_iter__41922(s__41923){
return (new cljs.core.LazySeq(null,(function (){
var s__41923__$1 = s__41923;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41923__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__41929 = cljs.core.first.call(null,xs__4977__auto__);
var n = cljs.core.nth.call(null,vec__41929,(0),null);
var nbrs = cljs.core.nth.call(null,vec__41929,(1),null);
var iterys__24933__auto__ = ((function (s__41923__$1,vec__41929,n,nbrs,xs__4977__auto__,temp__4425__auto__){
return (function loom$graph$build_$_iter__41922_$_iter__41924(s__41925){
return (new cljs.core.LazySeq(null,((function (s__41923__$1,vec__41929,n,nbrs,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__41925__$1 = s__41925;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__41925__$1);
if(temp__4425__auto____$1){
var s__41925__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41925__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__41925__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__41927 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__41926 = (0);
while(true){
if((i__41926 < size__24936__auto__)){
var nbr = cljs.core._nth.call(null,c__24935__auto__,i__41926);
cljs.core.chunk_append.call(null,b__41927,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__41936 = (i__41926 + (1));
i__41926 = G__41936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41927),loom$graph$build_$_iter__41922_$_iter__41924.call(null,cljs.core.chunk_rest.call(null,s__41925__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41927),null);
}
} else {
var nbr = cljs.core.first.call(null,s__41925__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$build_$_iter__41922_$_iter__41924.call(null,cljs.core.rest.call(null,s__41925__$2)));
}
} else {
return null;
}
break;
}
});})(s__41923__$1,vec__41929,n,nbrs,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__41923__$1,vec__41929,n,nbrs,xs__4977__auto__,temp__4425__auto__))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,nbrs));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,loom$graph$build_$_iter__41922.call(null,cljs.core.rest.call(null,s__41923__$1)));
} else {
var G__41937 = cljs.core.rest.call(null,s__41923__$1);
s__41923__$1 = G__41937;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24937__auto__.call(null,init);
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

loom.graph.build_graph.cljs$lang$applyTo = (function (seq41800){
var G__41801 = cljs.core.first.call(null,seq41800);
var seq41800__$1 = cljs.core.next.call(null,seq41800);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic(G__41801,seq41800__$1);
});
/**
 * Creates an unweighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.graph = (function loom$graph$graph(var_args){
var args__25230__auto__ = [];
var len__25223__auto___41939 = arguments.length;
var i__25224__auto___41940 = (0);
while(true){
if((i__25224__auto___41940 < len__25223__auto___41939)){
args__25230__auto__.push((arguments[i__25224__auto___41940]));

var G__41941 = (i__25224__auto___41940 + (1));
i__25224__auto___41940 = G__41941;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((0) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((0)),(0))):null);
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(argseq__25231__auto__);
});

loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.graph.cljs$lang$maxFixedArity = (0);

loom.graph.graph.cljs$lang$applyTo = (function (seq41938){
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41938));
});
/**
 * Creates an unweighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.digraph = (function loom$graph$digraph(var_args){
var args__25230__auto__ = [];
var len__25223__auto___41943 = arguments.length;
var i__25224__auto___41944 = (0);
while(true){
if((i__25224__auto___41944 < len__25223__auto___41943)){
args__25230__auto__.push((arguments[i__25224__auto___41944]));

var G__41945 = (i__25224__auto___41944 + (1));
i__25224__auto___41944 = G__41945;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((0) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((0)),(0))):null);
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__25231__auto__);
});

loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.digraph.cljs$lang$maxFixedArity = (0);

loom.graph.digraph.cljs$lang$applyTo = (function (seq41942){
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41942));
});
/**
 * Creates an weighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_graph = (function loom$graph$weighted_graph(var_args){
var args__25230__auto__ = [];
var len__25223__auto___41947 = arguments.length;
var i__25224__auto___41948 = (0);
while(true){
if((i__25224__auto___41948 < len__25223__auto___41947)){
args__25230__auto__.push((arguments[i__25224__auto___41948]));

var G__41949 = (i__25224__auto___41948 + (1));
i__25224__auto___41948 = G__41949;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((0) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((0)),(0))):null);
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__25231__auto__);
});

loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_graph.cljs$lang$maxFixedArity = (0);

loom.graph.weighted_graph.cljs$lang$applyTo = (function (seq41946){
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41946));
});
/**
 * Creates an weighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_digraph = (function loom$graph$weighted_digraph(var_args){
var args__25230__auto__ = [];
var len__25223__auto___41951 = arguments.length;
var i__25224__auto___41952 = (0);
while(true){
if((i__25224__auto___41952 < len__25223__auto___41951)){
args__25230__auto__.push((arguments[i__25224__auto___41952]));

var G__41953 = (i__25224__auto___41952 + (1));
i__25224__auto___41952 = G__41953;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((0) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((0)),(0))):null);
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__25231__auto__);
});

loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_digraph.cljs$lang$maxFixedArity = (0);

loom.graph.weighted_digraph.cljs$lang$applyTo = (function (seq41950){
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41950));
});
/**
 * Creates a read-only, ad-hoc graph which uses the provided functions
 *   to return values for nodes, edges, etc. If any members are not functions,
 *   they will be returned as-is. Edges can be inferred if nodes and
 *   successors are provided. Nodes and edges can be inferred if successors and
 *   start are provided.
 */
loom.graph.fly_graph = (function loom$graph$fly_graph(var_args){
var args__25230__auto__ = [];
var len__25223__auto___41958 = arguments.length;
var i__25224__auto___41959 = (0);
while(true){
if((i__25224__auto___41959 < len__25223__auto___41958)){
args__25230__auto__.push((arguments[i__25224__auto___41959]));

var G__41960 = (i__25224__auto___41959 + (1));
i__25224__auto___41959 = G__41960;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((0) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((0)),(0))):null);
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__25231__auto__);
});

loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = (function (p__41955){
var map__41956 = p__41955;
var map__41956__$1 = ((((!((map__41956 == null)))?((((map__41956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41956):map__41956);
var nodes = cljs.core.get.call(null,map__41956__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__41956__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var successors = cljs.core.get.call(null,map__41956__$1,new cljs.core.Keyword(null,"successors","successors",-1239296414));
var predecessors = cljs.core.get.call(null,map__41956__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var weight = cljs.core.get.call(null,map__41956__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var start = cljs.core.get.call(null,map__41956__$1,new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.truth_((function (){var and__24153__auto__ = predecessors;
if(cljs.core.truth_(and__24153__auto__)){
return weight;
} else {
return and__24153__auto__;
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

loom.graph.fly_graph.cljs$lang$applyTo = (function (seq41954){
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41954));
});

//# sourceMappingURL=graph.js.map