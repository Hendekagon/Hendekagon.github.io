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
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.nodes[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g);
} else {
var m__36086__auto____$1 = (loom.graph.nodes["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g);
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
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.edges[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g);
} else {
var m__36086__auto____$1 = (loom.graph.edges["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g);
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
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.has_node_QMARK_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g,node);
} else {
var m__36086__auto____$1 = (loom.graph.has_node_QMARK_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g,node);
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
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.has_edge_QMARK_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g,n1,n2);
} else {
var m__36086__auto____$1 = (loom.graph.has_edge_QMARK_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g,n1,n2);
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
var args86640 = [];
var len__36491__auto___86682 = arguments.length;
var i__36492__auto___86683 = (0);
while(true){
if((i__36492__auto___86683 < len__36491__auto___86682)){
args86640.push((arguments[i__36492__auto___86683]));

var G__86684 = (i__36492__auto___86683 + (1));
i__36492__auto___86683 = G__86684;
continue;
} else {
}
break;
}

var G__86645 = args86640.length;
switch (G__86645) {
case 1:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86640.length)].join('')));

}
});

loom.graph.successors.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Graph$successors$arity$1 == null)))){
return g.loom$graph$Graph$successors$arity$1(g);
} else {
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.successors[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g);
} else {
var m__36086__auto____$1 = (loom.graph.successors["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g);
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
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.successors[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g,node);
} else {
var m__36086__auto____$1 = (loom.graph.successors["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g,node);
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
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.out_degree[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g,node);
} else {
var m__36086__auto____$1 = (loom.graph.out_degree["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g,node);
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
var args86652 = [];
var len__36491__auto___86702 = arguments.length;
var i__36492__auto___86703 = (0);
while(true){
if((i__36492__auto___86703 < len__36491__auto___86702)){
args86652.push((arguments[i__36492__auto___86703]));

var G__86706 = (i__36492__auto___86703 + (1));
i__36492__auto___86703 = G__86706;
continue;
} else {
}
break;
}

var G__86667 = args86652.length;
switch (G__86667) {
case 1:
return loom.graph.out_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.out_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86652.length)].join('')));

}
});

loom.graph.out_edges.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Graph$out_edges$arity$1 == null)))){
return g.loom$graph$Graph$out_edges$arity$1(g);
} else {
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.out_edges[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g);
} else {
var m__36086__auto____$1 = (loom.graph.out_edges["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g);
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
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.out_edges[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g,node);
} else {
var m__36086__auto____$1 = (loom.graph.out_edges["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g,node);
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
var args86721 = [];
var len__36491__auto___86762 = arguments.length;
var i__36492__auto___86763 = (0);
while(true){
if((i__36492__auto___86763 < len__36491__auto___86762)){
args86721.push((arguments[i__36492__auto___86763]));

var G__86764 = (i__36492__auto___86763 + (1));
i__36492__auto___86763 = G__86764;
continue;
} else {
}
break;
}

var G__86725 = args86721.length;
switch (G__86725) {
case 1:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86721.length)].join('')));

}
});

loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Digraph$predecessors$arity$1 == null)))){
return g.loom$graph$Digraph$predecessors$arity$1(g);
} else {
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.predecessors[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g);
} else {
var m__36086__auto____$1 = (loom.graph.predecessors["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g);
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
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.predecessors[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g,node);
} else {
var m__36086__auto____$1 = (loom.graph.predecessors["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g,node);
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
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.in_degree[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g,node);
} else {
var m__36086__auto____$1 = (loom.graph.in_degree["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g,node);
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
var args86729 = [];
var len__36491__auto___86775 = arguments.length;
var i__36492__auto___86776 = (0);
while(true){
if((i__36492__auto___86776 < len__36491__auto___86775)){
args86729.push((arguments[i__36492__auto___86776]));

var G__86779 = (i__36492__auto___86776 + (1));
i__36492__auto___86776 = G__86779;
continue;
} else {
}
break;
}

var G__86745 = args86729.length;
switch (G__86745) {
case 1:
return loom.graph.in_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.in_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86729.length)].join('')));

}
});

loom.graph.in_edges.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Digraph$in_edges$arity$1 == null)))){
return g.loom$graph$Digraph$in_edges$arity$1(g);
} else {
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.in_edges[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g);
} else {
var m__36086__auto____$1 = (loom.graph.in_edges["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g);
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
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.in_edges[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g,node);
} else {
var m__36086__auto____$1 = (loom.graph.in_edges["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g,node);
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
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.transpose[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g);
} else {
var m__36086__auto____$1 = (loom.graph.transpose["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g);
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
var args86793 = [];
var len__36491__auto___86800 = arguments.length;
var i__36492__auto___86801 = (0);
while(true){
if((i__36492__auto___86801 < len__36491__auto___86800)){
args86793.push((arguments[i__36492__auto___86801]));

var G__86803 = (i__36492__auto___86801 + (1));
i__36492__auto___86801 = G__86803;
continue;
} else {
}
break;
}

var G__86795 = args86793.length;
switch (G__86795) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86793.length)].join('')));

}
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$WeightedGraph$weight$arity$1 == null)))){
return g.loom$graph$WeightedGraph$weight$arity$1(g);
} else {
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.weight[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g);
} else {
var m__36086__auto____$1 = (loom.graph.weight["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g);
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
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.weight[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g,e);
} else {
var m__36086__auto____$1 = (loom.graph.weight["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g,e);
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
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.weight[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g,n1,n2);
} else {
var m__36086__auto____$1 = (loom.graph.weight["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g,n1,n2);
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
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.add_nodes_STAR_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g,nodes);
} else {
var m__36086__auto____$1 = (loom.graph.add_nodes_STAR_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g,nodes);
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
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.add_edges_STAR_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g,edges);
} else {
var m__36086__auto____$1 = (loom.graph.add_edges_STAR_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g,edges);
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
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.remove_nodes_STAR_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g,nodes);
} else {
var m__36086__auto____$1 = (loom.graph.remove_nodes_STAR_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g,nodes);
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
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.remove_edges_STAR_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g,edges);
} else {
var m__36086__auto____$1 = (loom.graph.remove_edges_STAR_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g,edges);
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
var x__36085__auto__ = (((g == null))?null:g);
var m__36086__auto__ = (loom.graph.remove_all[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,g);
} else {
var m__36086__auto____$1 = (loom.graph.remove_all["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,g);
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
var x__36085__auto__ = (((edge == null))?null:edge);
var m__36086__auto__ = (loom.graph.src[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,edge);
} else {
var m__36086__auto____$1 = (loom.graph.src["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,edge);
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
var x__36085__auto__ = (((edge == null))?null:edge);
var m__36086__auto__ = (loom.graph.dest[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,edge);
} else {
var m__36086__auto____$1 = (loom.graph.dest["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,edge);
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
var args__36498__auto__ = [];
var len__36491__auto___86924 = arguments.length;
var i__36492__auto___86925 = (0);
while(true){
if((i__36492__auto___86925 < len__36491__auto___86924)){
args__36498__auto__.push((arguments[i__36492__auto___86925]));

var G__86926 = (i__36492__auto___86925 + (1));
i__36492__auto___86925 = G__86926;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_nodes_STAR_.call(null,g,nodes);
});

loom.graph.add_nodes.cljs$lang$maxFixedArity = (1);

loom.graph.add_nodes.cljs$lang$applyTo = (function (seq86919){
var G__86920 = cljs.core.first.call(null,seq86919);
var seq86919__$1 = cljs.core.next.call(null,seq86919);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic(G__86920,seq86919__$1);
});
/**
 * Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].
 *   For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the
 *   latter defaulting to a weight of 1
 */
loom.graph.add_edges = (function loom$graph$add_edges(var_args){
var args__36498__auto__ = [];
var len__36491__auto___86935 = arguments.length;
var i__36492__auto___86936 = (0);
while(true){
if((i__36492__auto___86936 < len__36491__auto___86935)){
args__36498__auto__.push((arguments[i__36492__auto___86936]));

var G__86937 = (i__36492__auto___86936 + (1));
i__36492__auto___86936 = G__86937;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.add_edges_STAR_.call(null,g,edges);
});

loom.graph.add_edges.cljs$lang$maxFixedArity = (1);

loom.graph.add_edges.cljs$lang$applyTo = (function (seq86930){
var G__86931 = cljs.core.first.call(null,seq86930);
var seq86930__$1 = cljs.core.next.call(null,seq86930);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic(G__86931,seq86930__$1);
});
/**
 * Removes nodes from graph g
 */
loom.graph.remove_nodes = (function loom$graph$remove_nodes(var_args){
var args__36498__auto__ = [];
var len__36491__auto___86945 = arguments.length;
var i__36492__auto___86946 = (0);
while(true){
if((i__36492__auto___86946 < len__36491__auto___86945)){
args__36498__auto__.push((arguments[i__36492__auto___86946]));

var G__86947 = (i__36492__auto___86946 + (1));
i__36492__auto___86946 = G__86947;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.remove_nodes_STAR_.call(null,g,nodes);
});

loom.graph.remove_nodes.cljs$lang$maxFixedArity = (1);

loom.graph.remove_nodes.cljs$lang$applyTo = (function (seq86941){
var G__86942 = cljs.core.first.call(null,seq86941);
var seq86941__$1 = cljs.core.next.call(null,seq86941);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic(G__86942,seq86941__$1);
});
/**
 * Removes edges from graph g. Do not include weights
 */
loom.graph.remove_edges = (function loom$graph$remove_edges(var_args){
var args__36498__auto__ = [];
var len__36491__auto___86956 = arguments.length;
var i__36492__auto___86957 = (0);
while(true){
if((i__36492__auto___86957 < len__36491__auto___86956)){
args__36498__auto__.push((arguments[i__36492__auto___86957]));

var G__86959 = (i__36492__auto___86957 + (1));
i__36492__auto___86957 = G__86959;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.remove_edges_STAR_.call(null,g,edges);
});

loom.graph.remove_edges.cljs$lang$maxFixedArity = (1);

loom.graph.remove_edges.cljs$lang$applyTo = (function (seq86949){
var G__86950 = cljs.core.first.call(null,seq86949);
var seq86949__$1 = cljs.core.next.call(null,seq86949);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic(G__86950,seq86949__$1);
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
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),(function (p1__86996_SHARP_){
return cljs.core.apply.call(null,remove_fn,p1__86996_SHARP_,nodes);
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
var iter__36202__auto__ = ((function (g__$1){
return (function loom$graph$iter__87051(s__87052){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__87052__$1 = s__87052;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__87052__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36198__auto__ = ((function (s__87052__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__87051_$_iter__87053(s__87054){
return (new cljs.core.LazySeq(null,((function (s__87052__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__87054__$1 = s__87054;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__87054__$1);
if(temp__4657__auto____$1){
var s__87054__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87054__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__87054__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__87056 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__87055 = (0);
while(true){
if((i__87055 < size__36201__auto__)){
var e = cljs.core._nth.call(null,c__36200__auto__,i__87055);
cljs.core.chunk_append.call(null,b__87056,e);

var G__87166 = (i__87055 + (1));
i__87055 = G__87166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87056),loom$graph$iter__87051_$_iter__87053.call(null,cljs.core.chunk_rest.call(null,s__87054__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87056),null);
}
} else {
var e = cljs.core.first.call(null,s__87054__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__87051_$_iter__87053.call(null,cljs.core.rest.call(null,s__87054__$2)));
}
} else {
return null;
}
break;
}
});})(s__87052__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__87052__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,loom$graph$iter__87051.call(null,cljs.core.rest.call(null,s__87052__$1)));
} else {
var G__87182 = cljs.core.rest.call(null,s__87052__$1);
s__87052__$1 = G__87182;
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
return iter__36202__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36202__auto__ = ((function (g__$1){
return (function loom$graph$iter__87095(s__87096){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__87096__$1 = s__87096;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__87096__$1);
if(temp__4657__auto__){
var s__87096__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87096__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__87096__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__87098 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__87097 = (0);
while(true){
if((i__87097 < size__36201__auto__)){
var n2 = cljs.core._nth.call(null,c__36200__auto__,i__87097);
cljs.core.chunk_append.call(null,b__87098,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__87220 = (i__87097 + (1));
i__87097 = G__87220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87098),loom$graph$iter__87095.call(null,cljs.core.chunk_rest.call(null,s__87096__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87098),null);
}
} else {
var n2 = cljs.core.first.call(null,s__87096__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__87095.call(null,cljs.core.rest.call(null,s__87096__$2)));
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
return iter__36202__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36044__auto__,k__36045__auto__){
var self__ = this;
var this__36044__auto____$1 = this;
return cljs.core._lookup.call(null,this__36044__auto____$1,k__36045__auto__,null);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36046__auto__,k87018,else__36047__auto__){
var self__ = this;
var this__36046__auto____$1 = this;
var G__87111 = (((k87018 instanceof cljs.core.Keyword))?k87018.fqn:null);
switch (G__87111) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k87018,else__36047__auto__);

}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36058__auto__,writer__36059__auto__,opts__36060__auto__){
var self__ = this;
var this__36058__auto____$1 = this;
var pr_pair__36061__auto__ = ((function (this__36058__auto____$1){
return (function (keyval__36062__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36059__auto__,cljs.core.pr_writer,""," ","",opts__36060__auto__,keyval__36062__auto__);
});})(this__36058__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36059__auto__,pr_pair__36061__auto__,"#loom.graph.BasicEditableGraph{",", ","}",opts__36060__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__87017){
var self__ = this;
var G__87017__$1 = this;
return (new cljs.core.RecordIter((0),G__87017__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36042__auto__){
var self__ = this;
var this__36042__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36038__auto__){
var self__ = this;
var this__36038__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36048__auto__){
var self__ = this;
var this__36048__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36039__auto__){
var self__ = this;
var this__36039__auto____$1 = this;
var h__35857__auto__ = self__.__hash;
if(!((h__35857__auto__ == null))){
return h__35857__auto__;
} else {
var h__35857__auto____$1 = cljs.core.hash_imap.call(null,this__36039__auto____$1);
self__.__hash = h__35857__auto____$1;

return h__35857__auto____$1;
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36040__auto__,other__36041__auto__){
var self__ = this;
var this__36040__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35410__auto__ = other__36041__auto__;
if(cljs.core.truth_(and__35410__auto__)){
var and__35410__auto____$1 = (this__36040__auto____$1.constructor === other__36041__auto__.constructor);
if(and__35410__auto____$1){
return cljs.core.equiv_map.call(null,this__36040__auto____$1,other__36041__auto__);
} else {
return and__35410__auto____$1;
}
} else {
return and__35410__auto__;
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
return (function (g__$2,p__87124){
var vec__87125 = p__87124;
var n1 = cljs.core.nth.call(null,vec__87125,(0),null);
var n2 = cljs.core.nth.call(null,vec__87125,(1),null);
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
return (function (g__$2,p__87130){
var vec__87132 = p__87130;
var n1 = cljs.core.nth.call(null,vec__87132,(0),null);
var n2 = cljs.core.nth.call(null,vec__87132,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36053__auto__,k__36054__auto__){
var self__ = this;
var this__36053__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__36054__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36053__auto____$1),self__.__meta),k__36054__auto__);
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36054__auto__)),null));
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36051__auto__,k__36052__auto__,G__87017){
var self__ = this;
var this__36051__auto____$1 = this;
var pred__87139 = cljs.core.keyword_identical_QMARK_;
var expr__87140 = k__36052__auto__;
if(cljs.core.truth_(pred__87139.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__87140))){
return (new loom.graph.BasicEditableGraph(G__87017,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87139.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__87140))){
return (new loom.graph.BasicEditableGraph(self__.nodeset,G__87017,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36052__auto__,G__87017),null));
}
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36056__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36043__auto__,G__87017){
var self__ = this;
var this__36043__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,G__87017,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36049__auto__,entry__36050__auto__){
var self__ = this;
var this__36049__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36050__auto__)){
return cljs.core._assoc.call(null,this__36049__auto____$1,cljs.core._nth.call(null,entry__36050__auto__,(0)),cljs.core._nth.call(null,entry__36050__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36049__auto____$1,entry__36050__auto__);
}
});

loom.graph.BasicEditableGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableGraph.cljs$lang$type = true;

loom.graph.BasicEditableGraph.cljs$lang$ctorPrSeq = (function (this__36078__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableGraph");
});

loom.graph.BasicEditableGraph.cljs$lang$ctorPrWriter = (function (this__36078__auto__,writer__36079__auto__){
return cljs.core._write.call(null,writer__36079__auto__,"loom.graph/BasicEditableGraph");
});

loom.graph.__GT_BasicEditableGraph = (function loom$graph$__GT_BasicEditableGraph(nodeset,adj){
return (new loom.graph.BasicEditableGraph(nodeset,adj,null,null,null));
});

loom.graph.map__GT_BasicEditableGraph = (function loom$graph$map__GT_BasicEditableGraph(G__87039){
return (new loom.graph.BasicEditableGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__87039),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__87039),null,cljs.core.dissoc.call(null,G__87039,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)),null));
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
var iter__36202__auto__ = ((function (g__$1){
return (function loom$graph$iter__87483(s__87484){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__87484__$1 = s__87484;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__87484__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36198__auto__ = ((function (s__87484__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__87483_$_iter__87486(s__87487){
return (new cljs.core.LazySeq(null,((function (s__87484__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__87487__$1 = s__87487;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__87487__$1);
if(temp__4657__auto____$1){
var s__87487__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87487__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__87487__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__87489 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__87488 = (0);
while(true){
if((i__87488 < size__36201__auto__)){
var e = cljs.core._nth.call(null,c__36200__auto__,i__87488);
cljs.core.chunk_append.call(null,b__87489,e);

var G__87728 = (i__87488 + (1));
i__87488 = G__87728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87489),loom$graph$iter__87483_$_iter__87486.call(null,cljs.core.chunk_rest.call(null,s__87487__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87489),null);
}
} else {
var e = cljs.core.first.call(null,s__87487__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__87483_$_iter__87486.call(null,cljs.core.rest.call(null,s__87487__$2)));
}
} else {
return null;
}
break;
}
});})(s__87484__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__87484__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,loom$graph$iter__87483.call(null,cljs.core.rest.call(null,s__87484__$1)));
} else {
var G__87743 = cljs.core.rest.call(null,s__87484__$1);
s__87484__$1 = G__87743;
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
return iter__36202__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36202__auto__ = ((function (g__$1){
return (function loom$graph$iter__87565(s__87566){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__87566__$1 = s__87566;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__87566__$1);
if(temp__4657__auto__){
var s__87566__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87566__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__87566__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__87568 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__87567 = (0);
while(true){
if((i__87567 < size__36201__auto__)){
var n2 = cljs.core._nth.call(null,c__36200__auto__,i__87567);
cljs.core.chunk_append.call(null,b__87568,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__87757 = (i__87567 + (1));
i__87567 = G__87757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87568),loom$graph$iter__87565.call(null,cljs.core.chunk_rest.call(null,s__87566__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87568),null);
}
} else {
var n2 = cljs.core.first.call(null,s__87566__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__87565.call(null,cljs.core.rest.call(null,s__87566__$2)));
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
return iter__36202__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36044__auto__,k__36045__auto__){
var self__ = this;
var this__36044__auto____$1 = this;
return cljs.core._lookup.call(null,this__36044__auto____$1,k__36045__auto__,null);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36046__auto__,k87466,else__36047__auto__){
var self__ = this;
var this__36046__auto____$1 = this;
var G__87589 = (((k87466 instanceof cljs.core.Keyword))?k87466.fqn:null);
switch (G__87589) {
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
return cljs.core.get.call(null,self__.__extmap,k87466,else__36047__auto__);

}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36058__auto__,writer__36059__auto__,opts__36060__auto__){
var self__ = this;
var this__36058__auto____$1 = this;
var pr_pair__36061__auto__ = ((function (this__36058__auto____$1){
return (function (keyval__36062__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36059__auto__,cljs.core.pr_writer,""," ","",opts__36060__auto__,keyval__36062__auto__);
});})(this__36058__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36059__auto__,pr_pair__36061__auto__,"#loom.graph.BasicEditableDigraph{",", ","}",opts__36060__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__87465){
var self__ = this;
var G__87465__$1 = this;
return (new cljs.core.RecordIter((0),G__87465__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36042__auto__){
var self__ = this;
var this__36042__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36038__auto__){
var self__ = this;
var this__36038__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36048__auto__){
var self__ = this;
var this__36048__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36039__auto__){
var self__ = this;
var this__36039__auto____$1 = this;
var h__35857__auto__ = self__.__hash;
if(!((h__35857__auto__ == null))){
return h__35857__auto__;
} else {
var h__35857__auto____$1 = cljs.core.hash_imap.call(null,this__36039__auto____$1);
self__.__hash = h__35857__auto____$1;

return h__35857__auto____$1;
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36040__auto__,other__36041__auto__){
var self__ = this;
var this__36040__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35410__auto__ = other__36041__auto__;
if(cljs.core.truth_(and__35410__auto__)){
var and__35410__auto____$1 = (this__36040__auto____$1.constructor === other__36041__auto__.constructor);
if(and__35410__auto____$1){
return cljs.core.equiv_map.call(null,this__36040__auto____$1,other__36041__auto__);
} else {
return and__35410__auto____$1;
}
} else {
return and__35410__auto__;
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
return (function (g__$2,p__87622){
var vec__87623 = p__87622;
var n1 = cljs.core.nth.call(null,vec__87623,(0),null);
var n2 = cljs.core.nth.call(null,vec__87623,(1),null);
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
return (function (g__$2,p__87673){
var vec__87674 = p__87673;
var n1 = cljs.core.nth.call(null,vec__87674,(0),null);
var n2 = cljs.core.nth.call(null,vec__87674,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36053__auto__,k__36054__auto__){
var self__ = this;
var this__36053__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__36054__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36053__auto____$1),self__.__meta),k__36054__auto__);
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36054__auto__)),null));
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36051__auto__,k__36052__auto__,G__87465){
var self__ = this;
var this__36051__auto____$1 = this;
var pred__87680 = cljs.core.keyword_identical_QMARK_;
var expr__87681 = k__36052__auto__;
if(cljs.core.truth_(pred__87680.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__87681))){
return (new loom.graph.BasicEditableDigraph(G__87465,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87680.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__87681))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,G__87465,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87680.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__87681))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,G__87465,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36052__auto__,G__87465),null));
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
var iter__36202__auto__ = ((function (g__$1){
return (function loom$graph$iter__87693(s__87694){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__87694__$1 = s__87694;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__87694__$1);
if(temp__4657__auto__){
var s__87694__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87694__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__87694__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__87696 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__87695 = (0);
while(true){
if((i__87695 < size__36201__auto__)){
var n2 = cljs.core._nth.call(null,c__36200__auto__,i__87695);
cljs.core.chunk_append.call(null,b__87696,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__87856 = (i__87695 + (1));
i__87695 = G__87856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87696),loom$graph$iter__87693.call(null,cljs.core.chunk_rest.call(null,s__87694__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87696),null);
}
} else {
var n2 = cljs.core.first.call(null,s__87694__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__87693.call(null,cljs.core.rest.call(null,s__87694__$2)));
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
return iter__36202__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36056__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36043__auto__,G__87465){
var self__ = this;
var this__36043__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,G__87465,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36049__auto__,entry__36050__auto__){
var self__ = this;
var this__36049__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36050__auto__)){
return cljs.core._assoc.call(null,this__36049__auto____$1,cljs.core._nth.call(null,entry__36050__auto__,(0)),cljs.core._nth.call(null,entry__36050__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36049__auto____$1,entry__36050__auto__);
}
});

loom.graph.BasicEditableDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableDigraph.cljs$lang$type = true;

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrSeq = (function (this__36078__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableDigraph");
});

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrWriter = (function (this__36078__auto__,writer__36079__auto__){
return cljs.core._write.call(null,writer__36079__auto__,"loom.graph/BasicEditableDigraph");
});

loom.graph.__GT_BasicEditableDigraph = (function loom$graph$__GT_BasicEditableDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableDigraph(nodeset,adj,in$,null,null,null));
});

loom.graph.map__GT_BasicEditableDigraph = (function loom$graph$map__GT_BasicEditableDigraph(G__87471){
return (new loom.graph.BasicEditableDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__87471),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__87471),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__87471),null,cljs.core.dissoc.call(null,G__87471,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)),null));
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
var iter__36202__auto__ = ((function (g__$1){
return (function loom$graph$iter__87885(s__87886){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__87886__$1 = s__87886;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__87886__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36198__auto__ = ((function (s__87886__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__87885_$_iter__87887(s__87888){
return (new cljs.core.LazySeq(null,((function (s__87886__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__87888__$1 = s__87888;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__87888__$1);
if(temp__4657__auto____$1){
var s__87888__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87888__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__87888__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__87890 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__87889 = (0);
while(true){
if((i__87889 < size__36201__auto__)){
var e = cljs.core._nth.call(null,c__36200__auto__,i__87889);
cljs.core.chunk_append.call(null,b__87890,e);

var G__88015 = (i__87889 + (1));
i__87889 = G__88015;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87890),loom$graph$iter__87885_$_iter__87887.call(null,cljs.core.chunk_rest.call(null,s__87888__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87890),null);
}
} else {
var e = cljs.core.first.call(null,s__87888__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__87885_$_iter__87887.call(null,cljs.core.rest.call(null,s__87888__$2)));
}
} else {
return null;
}
break;
}
});})(s__87886__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__87886__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,loom$graph$iter__87885.call(null,cljs.core.rest.call(null,s__87886__$1)));
} else {
var G__88025 = cljs.core.rest.call(null,s__87886__$1);
s__87886__$1 = G__88025;
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
return iter__36202__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36202__auto__ = ((function (g__$1){
return (function loom$graph$iter__87950(s__87951){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__87951__$1 = s__87951;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__87951__$1);
if(temp__4657__auto__){
var s__87951__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87951__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__87951__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__87953 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__87952 = (0);
while(true){
if((i__87952 < size__36201__auto__)){
var n2 = cljs.core._nth.call(null,c__36200__auto__,i__87952);
cljs.core.chunk_append.call(null,b__87953,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__88033 = (i__87952 + (1));
i__87952 = G__88033;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87953),loom$graph$iter__87950.call(null,cljs.core.chunk_rest.call(null,s__87951__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87953),null);
}
} else {
var n2 = cljs.core.first.call(null,s__87951__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__87950.call(null,cljs.core.rest.call(null,s__87951__$2)));
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
return iter__36202__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36044__auto__,k__36045__auto__){
var self__ = this;
var this__36044__auto____$1 = this;
return cljs.core._lookup.call(null,this__36044__auto____$1,k__36045__auto__,null);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36046__auto__,k87878,else__36047__auto__){
var self__ = this;
var this__36046__auto____$1 = this;
var G__87958 = (((k87878 instanceof cljs.core.Keyword))?k87878.fqn:null);
switch (G__87958) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k87878,else__36047__auto__);

}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36058__auto__,writer__36059__auto__,opts__36060__auto__){
var self__ = this;
var this__36058__auto____$1 = this;
var pr_pair__36061__auto__ = ((function (this__36058__auto____$1){
return (function (keyval__36062__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36059__auto__,cljs.core.pr_writer,""," ","",opts__36060__auto__,keyval__36062__auto__);
});})(this__36058__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36059__auto__,pr_pair__36061__auto__,"#loom.graph.BasicEditableWeightedGraph{",", ","}",opts__36060__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__87877){
var self__ = this;
var G__87877__$1 = this;
return (new cljs.core.RecordIter((0),G__87877__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36042__auto__){
var self__ = this;
var this__36042__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36038__auto__){
var self__ = this;
var this__36038__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36048__auto__){
var self__ = this;
var this__36048__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36039__auto__){
var self__ = this;
var this__36039__auto____$1 = this;
var h__35857__auto__ = self__.__hash;
if(!((h__35857__auto__ == null))){
return h__35857__auto__;
} else {
var h__35857__auto____$1 = cljs.core.hash_imap.call(null,this__36039__auto____$1);
self__.__hash = h__35857__auto____$1;

return h__35857__auto____$1;
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36040__auto__,other__36041__auto__){
var self__ = this;
var this__36040__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35410__auto__ = other__36041__auto__;
if(cljs.core.truth_(and__35410__auto__)){
var and__35410__auto____$1 = (this__36040__auto____$1.constructor === other__36041__auto__.constructor);
if(and__35410__auto____$1){
return cljs.core.equiv_map.call(null,this__36040__auto____$1,other__36041__auto__);
} else {
return and__35410__auto____$1;
}
} else {
return and__35410__auto__;
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
return (function (g__$2,p__87978){
var vec__87979 = p__87978;
var n1 = cljs.core.nth.call(null,vec__87979,(0),null);
var n2 = cljs.core.nth.call(null,vec__87979,(1),null);
var vec__87980 = cljs.core.nthnext.call(null,vec__87979,(2));
var w = cljs.core.nth.call(null,vec__87980,(0),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__35422__auto__ = w;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2,n1], null),(function (){var or__35422__auto__ = w;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
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
return (function (g__$2,p__87984){
var vec__87985 = p__87984;
var n1 = cljs.core.nth.call(null,vec__87985,(0),null);
var n2 = cljs.core.nth.call(null,vec__87985,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.dissoc,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36053__auto__,k__36054__auto__){
var self__ = this;
var this__36053__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__36054__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36053__auto____$1),self__.__meta),k__36054__auto__);
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36054__auto__)),null));
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36051__auto__,k__36052__auto__,G__87877){
var self__ = this;
var this__36051__auto____$1 = this;
var pred__87986 = cljs.core.keyword_identical_QMARK_;
var expr__87987 = k__36052__auto__;
if(cljs.core.truth_(pred__87986.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__87987))){
return (new loom.graph.BasicEditableWeightedGraph(G__87877,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87986.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__87987))){
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,G__87877,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36052__auto__,G__87877),null));
}
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36056__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
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

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36043__auto__,G__87877){
var self__ = this;
var this__36043__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,G__87877,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36049__auto__,entry__36050__auto__){
var self__ = this;
var this__36049__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36050__auto__)){
return cljs.core._assoc.call(null,this__36049__auto____$1,cljs.core._nth.call(null,entry__36050__auto__,(0)),cljs.core._nth.call(null,entry__36050__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36049__auto____$1,entry__36050__auto__);
}
});

loom.graph.BasicEditableWeightedGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrSeq = (function (this__36078__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableWeightedGraph");
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrWriter = (function (this__36078__auto__,writer__36079__auto__){
return cljs.core._write.call(null,writer__36079__auto__,"loom.graph/BasicEditableWeightedGraph");
});

loom.graph.__GT_BasicEditableWeightedGraph = (function loom$graph$__GT_BasicEditableWeightedGraph(nodeset,adj){
return (new loom.graph.BasicEditableWeightedGraph(nodeset,adj,null,null,null));
});

loom.graph.map__GT_BasicEditableWeightedGraph = (function loom$graph$map__GT_BasicEditableWeightedGraph(G__87880){
return (new loom.graph.BasicEditableWeightedGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__87880),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__87880),null,cljs.core.dissoc.call(null,G__87880,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)),null));
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
var iter__36202__auto__ = ((function (g__$1){
return (function loom$graph$iter__88203(s__88204){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__88204__$1 = s__88204;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88204__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36198__auto__ = ((function (s__88204__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__88203_$_iter__88205(s__88206){
return (new cljs.core.LazySeq(null,((function (s__88204__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__88206__$1 = s__88206;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__88206__$1);
if(temp__4657__auto____$1){
var s__88206__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88206__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__88206__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__88208 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__88207 = (0);
while(true){
if((i__88207 < size__36201__auto__)){
var e = cljs.core._nth.call(null,c__36200__auto__,i__88207);
cljs.core.chunk_append.call(null,b__88208,e);

var G__88353 = (i__88207 + (1));
i__88207 = G__88353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88208),loom$graph$iter__88203_$_iter__88205.call(null,cljs.core.chunk_rest.call(null,s__88206__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88208),null);
}
} else {
var e = cljs.core.first.call(null,s__88206__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__88203_$_iter__88205.call(null,cljs.core.rest.call(null,s__88206__$2)));
}
} else {
return null;
}
break;
}
});})(s__88204__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__88204__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,loom$graph$iter__88203.call(null,cljs.core.rest.call(null,s__88204__$1)));
} else {
var G__88364 = cljs.core.rest.call(null,s__88204__$1);
s__88204__$1 = G__88364;
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
return iter__36202__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36202__auto__ = ((function (g__$1){
return (function loom$graph$iter__88253(s__88254){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__88254__$1 = s__88254;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88254__$1);
if(temp__4657__auto__){
var s__88254__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88254__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__88254__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__88256 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__88255 = (0);
while(true){
if((i__88255 < size__36201__auto__)){
var n2 = cljs.core._nth.call(null,c__36200__auto__,i__88255);
cljs.core.chunk_append.call(null,b__88256,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__88377 = (i__88255 + (1));
i__88255 = G__88377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88256),loom$graph$iter__88253.call(null,cljs.core.chunk_rest.call(null,s__88254__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88256),null);
}
} else {
var n2 = cljs.core.first.call(null,s__88254__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__88253.call(null,cljs.core.rest.call(null,s__88254__$2)));
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
return iter__36202__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36044__auto__,k__36045__auto__){
var self__ = this;
var this__36044__auto____$1 = this;
return cljs.core._lookup.call(null,this__36044__auto____$1,k__36045__auto__,null);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36046__auto__,k88184,else__36047__auto__){
var self__ = this;
var this__36046__auto____$1 = this;
var G__88264 = (((k88184 instanceof cljs.core.Keyword))?k88184.fqn:null);
switch (G__88264) {
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
return cljs.core.get.call(null,self__.__extmap,k88184,else__36047__auto__);

}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36058__auto__,writer__36059__auto__,opts__36060__auto__){
var self__ = this;
var this__36058__auto____$1 = this;
var pr_pair__36061__auto__ = ((function (this__36058__auto____$1){
return (function (keyval__36062__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36059__auto__,cljs.core.pr_writer,""," ","",opts__36060__auto__,keyval__36062__auto__);
});})(this__36058__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36059__auto__,pr_pair__36061__auto__,"#loom.graph.BasicEditableWeightedDigraph{",", ","}",opts__36060__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__88183){
var self__ = this;
var G__88183__$1 = this;
return (new cljs.core.RecordIter((0),G__88183__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36042__auto__){
var self__ = this;
var this__36042__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36038__auto__){
var self__ = this;
var this__36038__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36048__auto__){
var self__ = this;
var this__36048__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36039__auto__){
var self__ = this;
var this__36039__auto____$1 = this;
var h__35857__auto__ = self__.__hash;
if(!((h__35857__auto__ == null))){
return h__35857__auto__;
} else {
var h__35857__auto____$1 = cljs.core.hash_imap.call(null,this__36039__auto____$1);
self__.__hash = h__35857__auto____$1;

return h__35857__auto____$1;
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36040__auto__,other__36041__auto__){
var self__ = this;
var this__36040__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35410__auto__ = other__36041__auto__;
if(cljs.core.truth_(and__35410__auto__)){
var and__35410__auto____$1 = (this__36040__auto____$1.constructor === other__36041__auto__.constructor);
if(and__35410__auto____$1){
return cljs.core.equiv_map.call(null,this__36040__auto____$1,other__36041__auto__);
} else {
return and__35410__auto____$1;
}
} else {
return and__35410__auto__;
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
return (function (g__$2,p__88271){
var vec__88273 = p__88271;
var n1 = cljs.core.nth.call(null,vec__88273,(0),null);
var n2 = cljs.core.nth.call(null,vec__88273,(1),null);
var vec__88274 = cljs.core.nthnext.call(null,vec__88273,(2));
var w = cljs.core.nth.call(null,vec__88274,(0),null);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__35422__auto__ = w;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
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
return (function (g__$2,p__88279){
var vec__88280 = p__88279;
var n1 = cljs.core.nth.call(null,vec__88280,(0),null);
var n2 = cljs.core.nth.call(null,vec__88280,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36053__auto__,k__36054__auto__){
var self__ = this;
var this__36053__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__36054__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36053__auto____$1),self__.__meta),k__36054__auto__);
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36054__auto__)),null));
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36051__auto__,k__36052__auto__,G__88183){
var self__ = this;
var this__36051__auto____$1 = this;
var pred__88284 = cljs.core.keyword_identical_QMARK_;
var expr__88285 = k__36052__auto__;
if(cljs.core.truth_(pred__88284.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__88285))){
return (new loom.graph.BasicEditableWeightedDigraph(G__88183,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88284.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__88285))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,G__88183,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88284.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__88285))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,G__88183,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36052__auto__,G__88183),null));
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
var iter__36202__auto__ = ((function (g__$1){
return (function loom$graph$iter__88289(s__88290){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__88290__$1 = s__88290;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88290__$1);
if(temp__4657__auto__){
var s__88290__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88290__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__88290__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__88292 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__88291 = (0);
while(true){
if((i__88291 < size__36201__auto__)){
var n2 = cljs.core._nth.call(null,c__36200__auto__,i__88291);
cljs.core.chunk_append.call(null,b__88292,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__88420 = (i__88291 + (1));
i__88291 = G__88420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88292),loom$graph$iter__88289.call(null,cljs.core.chunk_rest.call(null,s__88290__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88292),null);
}
} else {
var n2 = cljs.core.first.call(null,s__88290__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__88289.call(null,cljs.core.rest.call(null,s__88290__$2)));
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
return iter__36202__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (tg,p__88299){
var vec__88300 = p__88299;
var n1 = cljs.core.nth.call(null,vec__88300,(0),null);
var n2 = cljs.core.nth.call(null,vec__88300,(1),null);
return loom.graph.add_edges_STAR_.call(null,tg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,n1,loom.graph.weight.call(null,g__$1,n1,n2)], null)], null));
});})(g__$1))
,cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY),loom.graph.edges.call(null,g__$1));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36056__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
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

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36043__auto__,G__88183){
var self__ = this;
var this__36043__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,G__88183,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36049__auto__,entry__36050__auto__){
var self__ = this;
var this__36049__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36050__auto__)){
return cljs.core._assoc.call(null,this__36049__auto____$1,cljs.core._nth.call(null,entry__36050__auto__,(0)),cljs.core._nth.call(null,entry__36050__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36049__auto____$1,entry__36050__auto__);
}
});

loom.graph.BasicEditableWeightedDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrSeq = (function (this__36078__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableWeightedDigraph");
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrWriter = (function (this__36078__auto__,writer__36079__auto__){
return cljs.core._write.call(null,writer__36079__auto__,"loom.graph/BasicEditableWeightedDigraph");
});

loom.graph.__GT_BasicEditableWeightedDigraph = (function loom$graph$__GT_BasicEditableWeightedDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableWeightedDigraph(nodeset,adj,in$,null,null,null));
});

loom.graph.map__GT_BasicEditableWeightedDigraph = (function loom$graph$map__GT_BasicEditableWeightedDigraph(G__88187){
return (new loom.graph.BasicEditableWeightedDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__88187),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__88187),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__88187),null,cljs.core.dissoc.call(null,G__88187,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)),null));
});

loom.graph.call_or_return = (function loom$graph$call_or_return(var_args){
var args__36498__auto__ = [];
var len__36491__auto___88516 = arguments.length;
var i__36492__auto___88518 = (0);
while(true){
if((i__36492__auto___88518 < len__36491__auto___88516)){
args__36498__auto__.push((arguments[i__36492__auto___88518]));

var G__88526 = (i__36492__auto___88518 + (1));
i__36492__auto___88518 = G__88526;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if((cljs.core.fn_QMARK_.call(null,f)) || (((f instanceof clojure.lang.IFn)) && (cljs.core.seq.call(null,args)))){
return cljs.core.apply.call(null,f,args);
} else {
return f;
}
});

loom.graph.call_or_return.cljs$lang$maxFixedArity = (1);

loom.graph.call_or_return.cljs$lang$applyTo = (function (seq88440){
var G__88441 = cljs.core.first.call(null,seq88440);
var seq88440__$1 = cljs.core.next.call(null,seq88440);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(G__88441,seq88440__$1);
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
if(cljs.core.truth_((function (){var or__35422__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
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
var iter__36202__auto__ = ((function (g__$1){
return (function loom$graph$iter__88606(s__88607){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__88607__$1 = s__88607;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88607__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36198__auto__ = ((function (s__88607__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__88606_$_iter__88608(s__88609){
return (new cljs.core.LazySeq(null,((function (s__88607__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__88609__$1 = s__88609;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__88609__$1);
if(temp__4657__auto____$1){
var s__88609__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88609__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__88609__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__88611 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__88610 = (0);
while(true){
if((i__88610 < size__36201__auto__)){
var nbr = cljs.core._nth.call(null,c__36200__auto__,i__88610);
cljs.core.chunk_append.call(null,b__88611,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__88832 = (i__88610 + (1));
i__88610 = G__88832;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88611),loom$graph$iter__88606_$_iter__88608.call(null,cljs.core.chunk_rest.call(null,s__88609__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88611),null);
}
} else {
var nbr = cljs.core.first.call(null,s__88609__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__88606_$_iter__88608.call(null,cljs.core.rest.call(null,s__88609__$2)));
}
} else {
return null;
}
break;
}
});})(s__88607__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__88607__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,loom$graph$iter__88606.call(null,cljs.core.rest.call(null,s__88607__$1)));
} else {
var G__88841 = cljs.core.rest.call(null,s__88607__$1);
s__88607__$1 = G__88841;
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
return iter__36202__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36202__auto__ = ((function (g__$1){
return (function loom$graph$iter__88636(s__88637){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__88637__$1 = s__88637;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88637__$1);
if(temp__4657__auto__){
var s__88637__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88637__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__88637__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__88639 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__88638 = (0);
while(true){
if((i__88638 < size__36201__auto__)){
var n2 = cljs.core._nth.call(null,c__36200__auto__,i__88638);
cljs.core.chunk_append.call(null,b__88639,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__88854 = (i__88638 + (1));
i__88638 = G__88854;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88639),loom$graph$iter__88636.call(null,cljs.core.chunk_rest.call(null,s__88637__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88639),null);
}
} else {
var n2 = cljs.core.first.call(null,s__88637__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__88636.call(null,cljs.core.rest.call(null,s__88637__$2)));
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
return iter__36202__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36044__auto__,k__36045__auto__){
var self__ = this;
var this__36044__auto____$1 = this;
return cljs.core._lookup.call(null,this__36044__auto____$1,k__36045__auto__,null);
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36046__auto__,k88596,else__36047__auto__){
var self__ = this;
var this__36046__auto____$1 = this;
var G__88656 = (((k88596 instanceof cljs.core.Keyword))?k88596.fqn:null);
switch (G__88656) {
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
return cljs.core.get.call(null,self__.__extmap,k88596,else__36047__auto__);

}
});

loom.graph.FlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36058__auto__,writer__36059__auto__,opts__36060__auto__){
var self__ = this;
var this__36058__auto____$1 = this;
var pr_pair__36061__auto__ = ((function (this__36058__auto____$1){
return (function (keyval__36062__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36059__auto__,cljs.core.pr_writer,""," ","",opts__36060__auto__,keyval__36062__auto__);
});})(this__36058__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36059__auto__,pr_pair__36061__auto__,"#loom.graph.FlyGraph{",", ","}",opts__36060__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__88595){
var self__ = this;
var G__88595__$1 = this;
return (new cljs.core.RecordIter((0),G__88595__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.FlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36042__auto__){
var self__ = this;
var this__36042__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36038__auto__){
var self__ = this;
var this__36038__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36048__auto__){
var self__ = this;
var this__36048__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36039__auto__){
var self__ = this;
var this__36039__auto____$1 = this;
var h__35857__auto__ = self__.__hash;
if(!((h__35857__auto__ == null))){
return h__35857__auto__;
} else {
var h__35857__auto____$1 = cljs.core.hash_imap.call(null,this__36039__auto____$1);
self__.__hash = h__35857__auto____$1;

return h__35857__auto____$1;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36040__auto__,other__36041__auto__){
var self__ = this;
var this__36040__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35410__auto__ = other__36041__auto__;
if(cljs.core.truth_(and__35410__auto__)){
var and__35410__auto____$1 = (this__36040__auto____$1.constructor === other__36041__auto__.constructor);
if(and__35410__auto____$1){
return cljs.core.equiv_map.call(null,this__36040__auto____$1,other__36041__auto__);
} else {
return and__35410__auto____$1;
}
} else {
return and__35410__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36053__auto__,k__36054__auto__){
var self__ = this;
var this__36053__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null], null), null),k__36054__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36053__auto____$1),self__.__meta),k__36054__auto__);
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36054__auto__)),null));
}
});

loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36051__auto__,k__36052__auto__,G__88595){
var self__ = this;
var this__36051__auto____$1 = this;
var pred__88681 = cljs.core.keyword_identical_QMARK_;
var expr__88683 = k__36052__auto__;
if(cljs.core.truth_(pred__88681.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__88683))){
return (new loom.graph.FlyGraph(G__88595,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88681.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__88683))){
return (new loom.graph.FlyGraph(self__.fnodes,G__88595,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88681.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__88683))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,G__88595,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88681.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__88683))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__88595,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36052__auto__,G__88595),null));
}
}
}
}
});

loom.graph.FlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36056__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36043__auto__,G__88595){
var self__ = this;
var this__36043__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,G__88595,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36049__auto__,entry__36050__auto__){
var self__ = this;
var this__36049__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36050__auto__)){
return cljs.core._assoc.call(null,this__36049__auto____$1,cljs.core._nth.call(null,entry__36050__auto__,(0)),cljs.core._nth.call(null,entry__36050__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36049__auto____$1,entry__36050__auto__);
}
});

loom.graph.FlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyGraph.cljs$lang$type = true;

loom.graph.FlyGraph.cljs$lang$ctorPrSeq = (function (this__36078__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/FlyGraph");
});

loom.graph.FlyGraph.cljs$lang$ctorPrWriter = (function (this__36078__auto__,writer__36079__auto__){
return cljs.core._write.call(null,writer__36079__auto__,"loom.graph/FlyGraph");
});

loom.graph.__GT_FlyGraph = (function loom$graph$__GT_FlyGraph(fnodes,fedges,fsuccessors,start){
return (new loom.graph.FlyGraph(fnodes,fedges,fsuccessors,start,null,null,null));
});

loom.graph.map__GT_FlyGraph = (function loom$graph$map__GT_FlyGraph(G__88599){
return (new loom.graph.FlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__88599),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__88599),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__88599),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__88599),null,cljs.core.dissoc.call(null,G__88599,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__35422__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
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
var iter__36202__auto__ = ((function (g__$1){
return (function loom$graph$iter__88899(s__88900){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__88900__$1 = s__88900;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88900__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36198__auto__ = ((function (s__88900__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__88899_$_iter__88901(s__88902){
return (new cljs.core.LazySeq(null,((function (s__88900__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__88902__$1 = s__88902;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__88902__$1);
if(temp__4657__auto____$1){
var s__88902__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88902__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__88902__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__88904 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__88903 = (0);
while(true){
if((i__88903 < size__36201__auto__)){
var nbr = cljs.core._nth.call(null,c__36200__auto__,i__88903);
cljs.core.chunk_append.call(null,b__88904,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__88929 = (i__88903 + (1));
i__88903 = G__88929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88904),loom$graph$iter__88899_$_iter__88901.call(null,cljs.core.chunk_rest.call(null,s__88902__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88904),null);
}
} else {
var nbr = cljs.core.first.call(null,s__88902__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__88899_$_iter__88901.call(null,cljs.core.rest.call(null,s__88902__$2)));
}
} else {
return null;
}
break;
}
});})(s__88900__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__88900__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,loom$graph$iter__88899.call(null,cljs.core.rest.call(null,s__88900__$1)));
} else {
var G__88932 = cljs.core.rest.call(null,s__88900__$1);
s__88900__$1 = G__88932;
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
return iter__36202__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36202__auto__ = ((function (g__$1){
return (function loom$graph$iter__88910(s__88911){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__88911__$1 = s__88911;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88911__$1);
if(temp__4657__auto__){
var s__88911__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88911__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__88911__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__88913 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__88912 = (0);
while(true){
if((i__88912 < size__36201__auto__)){
var n2 = cljs.core._nth.call(null,c__36200__auto__,i__88912);
cljs.core.chunk_append.call(null,b__88913,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__88936 = (i__88912 + (1));
i__88912 = G__88936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88913),loom$graph$iter__88910.call(null,cljs.core.chunk_rest.call(null,s__88911__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88913),null);
}
} else {
var n2 = cljs.core.first.call(null,s__88911__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__88910.call(null,cljs.core.rest.call(null,s__88911__$2)));
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
return iter__36202__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36044__auto__,k__36045__auto__){
var self__ = this;
var this__36044__auto____$1 = this;
return cljs.core._lookup.call(null,this__36044__auto____$1,k__36045__auto__,null);
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36046__auto__,k88894,else__36047__auto__){
var self__ = this;
var this__36046__auto____$1 = this;
var G__88916 = (((k88894 instanceof cljs.core.Keyword))?k88894.fqn:null);
switch (G__88916) {
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
return cljs.core.get.call(null,self__.__extmap,k88894,else__36047__auto__);

}
});

loom.graph.FlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36058__auto__,writer__36059__auto__,opts__36060__auto__){
var self__ = this;
var this__36058__auto____$1 = this;
var pr_pair__36061__auto__ = ((function (this__36058__auto____$1){
return (function (keyval__36062__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36059__auto__,cljs.core.pr_writer,""," ","",opts__36060__auto__,keyval__36062__auto__);
});})(this__36058__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36059__auto__,pr_pair__36061__auto__,"#loom.graph.FlyDigraph{",", ","}",opts__36060__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__88893){
var self__ = this;
var G__88893__$1 = this;
return (new cljs.core.RecordIter((0),G__88893__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.FlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36042__auto__){
var self__ = this;
var this__36042__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36038__auto__){
var self__ = this;
var this__36038__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36048__auto__){
var self__ = this;
var this__36048__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36039__auto__){
var self__ = this;
var this__36039__auto____$1 = this;
var h__35857__auto__ = self__.__hash;
if(!((h__35857__auto__ == null))){
return h__35857__auto__;
} else {
var h__35857__auto____$1 = cljs.core.hash_imap.call(null,this__36039__auto____$1);
self__.__hash = h__35857__auto____$1;

return h__35857__auto____$1;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36040__auto__,other__36041__auto__){
var self__ = this;
var this__36040__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35410__auto__ = other__36041__auto__;
if(cljs.core.truth_(and__35410__auto__)){
var and__35410__auto____$1 = (this__36040__auto____$1.constructor === other__36041__auto__.constructor);
if(and__35410__auto____$1){
return cljs.core.equiv_map.call(null,this__36040__auto____$1,other__36041__auto__);
} else {
return and__35410__auto____$1;
}
} else {
return and__35410__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36053__auto__,k__36054__auto__){
var self__ = this;
var this__36053__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__36054__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36053__auto____$1),self__.__meta),k__36054__auto__);
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36054__auto__)),null));
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36051__auto__,k__36052__auto__,G__88893){
var self__ = this;
var this__36051__auto____$1 = this;
var pred__88918 = cljs.core.keyword_identical_QMARK_;
var expr__88919 = k__36052__auto__;
if(cljs.core.truth_(pred__88918.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__88919))){
return (new loom.graph.FlyDigraph(G__88893,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88918.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__88919))){
return (new loom.graph.FlyDigraph(self__.fnodes,G__88893,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88918.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__88919))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,G__88893,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88918.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__88919))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__88893,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88918.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__88919))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__88893,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36052__auto__,G__88893),null));
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

loom.graph.FlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36056__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36043__auto__,G__88893){
var self__ = this;
var this__36043__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,G__88893,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36049__auto__,entry__36050__auto__){
var self__ = this;
var this__36049__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36050__auto__)){
return cljs.core._assoc.call(null,this__36049__auto____$1,cljs.core._nth.call(null,entry__36050__auto__,(0)),cljs.core._nth.call(null,entry__36050__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36049__auto____$1,entry__36050__auto__);
}
});

loom.graph.FlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyDigraph.cljs$lang$type = true;

loom.graph.FlyDigraph.cljs$lang$ctorPrSeq = (function (this__36078__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/FlyDigraph");
});

loom.graph.FlyDigraph.cljs$lang$ctorPrWriter = (function (this__36078__auto__,writer__36079__auto__){
return cljs.core._write.call(null,writer__36079__auto__,"loom.graph/FlyDigraph");
});

loom.graph.__GT_FlyDigraph = (function loom$graph$__GT_FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start){
return (new loom.graph.FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start,null,null,null));
});

loom.graph.map__GT_FlyDigraph = (function loom$graph$map__GT_FlyDigraph(G__88895){
return (new loom.graph.FlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__88895),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__88895),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__88895),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__88895),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__88895),null,cljs.core.dissoc.call(null,G__88895,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__35422__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
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
var iter__36202__auto__ = ((function (g__$1){
return (function loom$graph$iter__88970(s__88971){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__88971__$1 = s__88971;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88971__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36198__auto__ = ((function (s__88971__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__88970_$_iter__88972(s__88973){
return (new cljs.core.LazySeq(null,((function (s__88971__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__88973__$1 = s__88973;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__88973__$1);
if(temp__4657__auto____$1){
var s__88973__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88973__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__88973__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__88975 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__88974 = (0);
while(true){
if((i__88974 < size__36201__auto__)){
var nbr = cljs.core._nth.call(null,c__36200__auto__,i__88974);
cljs.core.chunk_append.call(null,b__88975,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__88991 = (i__88974 + (1));
i__88974 = G__88991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88975),loom$graph$iter__88970_$_iter__88972.call(null,cljs.core.chunk_rest.call(null,s__88973__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88975),null);
}
} else {
var nbr = cljs.core.first.call(null,s__88973__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__88970_$_iter__88972.call(null,cljs.core.rest.call(null,s__88973__$2)));
}
} else {
return null;
}
break;
}
});})(s__88971__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__88971__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,loom$graph$iter__88970.call(null,cljs.core.rest.call(null,s__88971__$1)));
} else {
var G__88992 = cljs.core.rest.call(null,s__88971__$1);
s__88971__$1 = G__88992;
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
return iter__36202__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36202__auto__ = ((function (g__$1){
return (function loom$graph$iter__88983(s__88984){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__88984__$1 = s__88984;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88984__$1);
if(temp__4657__auto__){
var s__88984__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88984__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__88984__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__88986 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__88985 = (0);
while(true){
if((i__88985 < size__36201__auto__)){
var n2 = cljs.core._nth.call(null,c__36200__auto__,i__88985);
cljs.core.chunk_append.call(null,b__88986,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__89006 = (i__88985 + (1));
i__88985 = G__89006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88986),loom$graph$iter__88983.call(null,cljs.core.chunk_rest.call(null,s__88984__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88986),null);
}
} else {
var n2 = cljs.core.first.call(null,s__88984__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__88983.call(null,cljs.core.rest.call(null,s__88984__$2)));
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
return iter__36202__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36044__auto__,k__36045__auto__){
var self__ = this;
var this__36044__auto____$1 = this;
return cljs.core._lookup.call(null,this__36044__auto____$1,k__36045__auto__,null);
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36046__auto__,k88966,else__36047__auto__){
var self__ = this;
var this__36046__auto____$1 = this;
var G__88987 = (((k88966 instanceof cljs.core.Keyword))?k88966.fqn:null);
switch (G__88987) {
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
return cljs.core.get.call(null,self__.__extmap,k88966,else__36047__auto__);

}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36058__auto__,writer__36059__auto__,opts__36060__auto__){
var self__ = this;
var this__36058__auto____$1 = this;
var pr_pair__36061__auto__ = ((function (this__36058__auto____$1){
return (function (keyval__36062__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36059__auto__,cljs.core.pr_writer,""," ","",opts__36060__auto__,keyval__36062__auto__);
});})(this__36058__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36059__auto__,pr_pair__36061__auto__,"#loom.graph.WeightedFlyGraph{",", ","}",opts__36060__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__88965){
var self__ = this;
var G__88965__$1 = this;
return (new cljs.core.RecordIter((0),G__88965__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36042__auto__){
var self__ = this;
var this__36042__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36038__auto__){
var self__ = this;
var this__36038__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36048__auto__){
var self__ = this;
var this__36048__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36039__auto__){
var self__ = this;
var this__36039__auto____$1 = this;
var h__35857__auto__ = self__.__hash;
if(!((h__35857__auto__ == null))){
return h__35857__auto__;
} else {
var h__35857__auto____$1 = cljs.core.hash_imap.call(null,this__36039__auto____$1);
self__.__hash = h__35857__auto____$1;

return h__35857__auto____$1;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36040__auto__,other__36041__auto__){
var self__ = this;
var this__36040__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35410__auto__ = other__36041__auto__;
if(cljs.core.truth_(and__35410__auto__)){
var and__35410__auto____$1 = (this__36040__auto____$1.constructor === other__36041__auto__.constructor);
if(and__35410__auto____$1){
return cljs.core.equiv_map.call(null,this__36040__auto____$1,other__36041__auto__);
} else {
return and__35410__auto____$1;
}
} else {
return and__35410__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36053__auto__,k__36054__auto__){
var self__ = this;
var this__36053__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null], null), null),k__36054__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36053__auto____$1),self__.__meta),k__36054__auto__);
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36054__auto__)),null));
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36051__auto__,k__36052__auto__,G__88965){
var self__ = this;
var this__36051__auto____$1 = this;
var pred__88988 = cljs.core.keyword_identical_QMARK_;
var expr__88989 = k__36052__auto__;
if(cljs.core.truth_(pred__88988.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__88989))){
return (new loom.graph.WeightedFlyGraph(G__88965,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88988.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__88989))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,G__88965,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88988.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__88989))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,G__88965,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88988.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__88989))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__88965,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88988.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__88989))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,G__88965,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36052__auto__,G__88965),null));
}
}
}
}
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36056__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
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

loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36043__auto__,G__88965){
var self__ = this;
var this__36043__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,G__88965,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36049__auto__,entry__36050__auto__){
var self__ = this;
var this__36049__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36050__auto__)){
return cljs.core._assoc.call(null,this__36049__auto____$1,cljs.core._nth.call(null,entry__36050__auto__,(0)),cljs.core._nth.call(null,entry__36050__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36049__auto____$1,entry__36050__auto__);
}
});

loom.graph.WeightedFlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyGraph.cljs$lang$type = true;

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrSeq = (function (this__36078__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/WeightedFlyGraph");
});

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrWriter = (function (this__36078__auto__,writer__36079__auto__){
return cljs.core._write.call(null,writer__36079__auto__,"loom.graph/WeightedFlyGraph");
});

loom.graph.__GT_WeightedFlyGraph = (function loom$graph$__GT_WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start){
return (new loom.graph.WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start,null,null,null));
});

loom.graph.map__GT_WeightedFlyGraph = (function loom$graph$map__GT_WeightedFlyGraph(G__88967){
return (new loom.graph.WeightedFlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__88967),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__88967),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__88967),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__88967),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__88967),null,cljs.core.dissoc.call(null,G__88967,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__35422__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
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
var iter__36202__auto__ = ((function (g__$1){
return (function loom$graph$iter__89160(s__89161){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__89161__$1 = s__89161;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89161__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36198__auto__ = ((function (s__89161__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__89160_$_iter__89162(s__89163){
return (new cljs.core.LazySeq(null,((function (s__89161__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__89163__$1 = s__89163;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__89163__$1);
if(temp__4657__auto____$1){
var s__89163__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89163__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__89163__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__89165 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__89164 = (0);
while(true){
if((i__89164 < size__36201__auto__)){
var nbr = cljs.core._nth.call(null,c__36200__auto__,i__89164);
cljs.core.chunk_append.call(null,b__89165,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__89326 = (i__89164 + (1));
i__89164 = G__89326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89165),loom$graph$iter__89160_$_iter__89162.call(null,cljs.core.chunk_rest.call(null,s__89163__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89165),null);
}
} else {
var nbr = cljs.core.first.call(null,s__89163__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__89160_$_iter__89162.call(null,cljs.core.rest.call(null,s__89163__$2)));
}
} else {
return null;
}
break;
}
});})(s__89161__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__89161__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,loom$graph$iter__89160.call(null,cljs.core.rest.call(null,s__89161__$1)));
} else {
var G__89336 = cljs.core.rest.call(null,s__89161__$1);
s__89161__$1 = G__89336;
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
return iter__36202__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36202__auto__ = ((function (g__$1){
return (function loom$graph$iter__89186(s__89187){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__89187__$1 = s__89187;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89187__$1);
if(temp__4657__auto__){
var s__89187__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89187__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__89187__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__89189 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__89188 = (0);
while(true){
if((i__89188 < size__36201__auto__)){
var n2 = cljs.core._nth.call(null,c__36200__auto__,i__89188);
cljs.core.chunk_append.call(null,b__89189,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__89352 = (i__89188 + (1));
i__89188 = G__89352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89189),loom$graph$iter__89186.call(null,cljs.core.chunk_rest.call(null,s__89187__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89189),null);
}
} else {
var n2 = cljs.core.first.call(null,s__89187__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__89186.call(null,cljs.core.rest.call(null,s__89187__$2)));
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
return iter__36202__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36044__auto__,k__36045__auto__){
var self__ = this;
var this__36044__auto____$1 = this;
return cljs.core._lookup.call(null,this__36044__auto____$1,k__36045__auto__,null);
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36046__auto__,k89147,else__36047__auto__){
var self__ = this;
var this__36046__auto____$1 = this;
var G__89190 = (((k89147 instanceof cljs.core.Keyword))?k89147.fqn:null);
switch (G__89190) {
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
return cljs.core.get.call(null,self__.__extmap,k89147,else__36047__auto__);

}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36058__auto__,writer__36059__auto__,opts__36060__auto__){
var self__ = this;
var this__36058__auto____$1 = this;
var pr_pair__36061__auto__ = ((function (this__36058__auto____$1){
return (function (keyval__36062__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36059__auto__,cljs.core.pr_writer,""," ","",opts__36060__auto__,keyval__36062__auto__);
});})(this__36058__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36059__auto__,pr_pair__36061__auto__,"#loom.graph.WeightedFlyDigraph{",", ","}",opts__36060__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__89146){
var self__ = this;
var G__89146__$1 = this;
return (new cljs.core.RecordIter((0),G__89146__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36042__auto__){
var self__ = this;
var this__36042__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36038__auto__){
var self__ = this;
var this__36038__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36048__auto__){
var self__ = this;
var this__36048__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36039__auto__){
var self__ = this;
var this__36039__auto____$1 = this;
var h__35857__auto__ = self__.__hash;
if(!((h__35857__auto__ == null))){
return h__35857__auto__;
} else {
var h__35857__auto____$1 = cljs.core.hash_imap.call(null,this__36039__auto____$1);
self__.__hash = h__35857__auto____$1;

return h__35857__auto____$1;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36040__auto__,other__36041__auto__){
var self__ = this;
var this__36040__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35410__auto__ = other__36041__auto__;
if(cljs.core.truth_(and__35410__auto__)){
var and__35410__auto____$1 = (this__36040__auto____$1.constructor === other__36041__auto__.constructor);
if(and__35410__auto____$1){
return cljs.core.equiv_map.call(null,this__36040__auto____$1,other__36041__auto__);
} else {
return and__35410__auto____$1;
}
} else {
return and__35410__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36053__auto__,k__36054__auto__){
var self__ = this;
var this__36053__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__36054__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36053__auto____$1),self__.__meta),k__36054__auto__);
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36054__auto__)),null));
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36051__auto__,k__36052__auto__,G__89146){
var self__ = this;
var this__36051__auto____$1 = this;
var pred__89249 = cljs.core.keyword_identical_QMARK_;
var expr__89250 = k__36052__auto__;
if(cljs.core.truth_(pred__89249.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__89250))){
return (new loom.graph.WeightedFlyDigraph(G__89146,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89249.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__89250))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,G__89146,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89249.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__89250))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,G__89146,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89249.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__89250))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__89146,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89249.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__89250))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__89146,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89249.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__89250))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,G__89146,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36052__auto__,G__89146),null));
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

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36056__auto__){
var self__ = this;
var this__36056__auto____$1 = this;
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

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36043__auto__,G__89146){
var self__ = this;
var this__36043__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,G__89146,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36049__auto__,entry__36050__auto__){
var self__ = this;
var this__36049__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36050__auto__)){
return cljs.core._assoc.call(null,this__36049__auto____$1,cljs.core._nth.call(null,entry__36050__auto__,(0)),cljs.core._nth.call(null,entry__36050__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36049__auto____$1,entry__36050__auto__);
}
});

loom.graph.WeightedFlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyDigraph.cljs$lang$type = true;

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrSeq = (function (this__36078__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/WeightedFlyDigraph");
});

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrWriter = (function (this__36078__auto__,writer__36079__auto__){
return cljs.core._write.call(null,writer__36079__auto__,"loom.graph/WeightedFlyDigraph");
});

loom.graph.__GT_WeightedFlyDigraph = (function loom$graph$__GT_WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start){
return (new loom.graph.WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start,null,null,null));
});

loom.graph.map__GT_WeightedFlyDigraph = (function loom$graph$map__GT_WeightedFlyDigraph(G__89150){
return (new loom.graph.WeightedFlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__89150),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__89150),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__89150),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__89150),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__89150),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__89150),null,cljs.core.dissoc.call(null,G__89150,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
var args__36498__auto__ = [];
var len__36491__auto___89372 = arguments.length;
var i__36492__auto___89373 = (0);
while(true){
if((i__36492__auto___89373 < len__36491__auto___89372)){
args__36498__auto__.push((arguments[i__36492__auto___89373]));

var G__89375 = (i__36492__auto___89373 + (1));
i__36492__auto___89373 = G__89375;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),nodes));
});

loom.graph.add_path.cljs$lang$maxFixedArity = (1);

loom.graph.add_path.cljs$lang$applyTo = (function (seq89368){
var G__89369 = cljs.core.first.call(null,seq89368);
var seq89368__$1 = cljs.core.next.call(null,seq89368);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic(G__89369,seq89368__$1);
});
/**
 * Adds a cycle of edges connecting the given nodes in order
 */
loom.graph.add_cycle = (function loom$graph$add_cycle(var_args){
var args__36498__auto__ = [];
var len__36491__auto___89382 = arguments.length;
var i__36492__auto___89383 = (0);
while(true){
if((i__36492__auto___89383 < len__36491__auto___89382)){
args__36498__auto__.push((arguments[i__36492__auto___89383]));

var G__89384 = (i__36492__auto___89383 + (1));
i__36492__auto___89383 = G__89384;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),cljs.core.concat.call(null,nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nodes)], null))));
});

loom.graph.add_cycle.cljs$lang$maxFixedArity = (1);

loom.graph.add_cycle.cljs$lang$applyTo = (function (seq89378){
var G__89379 = cljs.core.first.call(null,seq89378);
var seq89378__$1 = cljs.core.next.call(null,seq89378);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic(G__89379,seq89378__$1);
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
var args__36498__auto__ = [];
var len__36491__auto___89692 = arguments.length;
var i__36492__auto___89693 = (0);
while(true){
if((i__36492__auto___89693 < len__36491__auto___89692)){
args__36498__auto__.push((arguments[i__36492__auto___89693]));

var G__89694 = (i__36492__auto___89693 + (1));
i__36492__auto___89693 = G__89694;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,inits){
var build = (function loom$graph$build(g__$1,init){
if(cljs.core.truth_(loom.graph.graph_QMARK_.call(null,init))){
if(cljs.core.truth_((function (){var and__35410__auto__ = loom.graph.weighted_QMARK_.call(null,g__$1);
if(cljs.core.truth_(and__35410__auto__)){
return loom.graph.weighted_QMARK_.call(null,init);
} else {
return and__35410__auto__;
}
})())){
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,loom.graph.add_edges,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),(function (){var iter__36202__auto__ = (function loom$graph$build_$_iter__89631(s__89632){
return (new cljs.core.LazySeq(null,(function (){
var s__89632__$1 = s__89632;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89632__$1);
if(temp__4657__auto__){
var s__89632__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89632__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__89632__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__89634 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__89633 = (0);
while(true){
if((i__89633 < size__36201__auto__)){
var vec__89642 = cljs.core._nth.call(null,c__36200__auto__,i__89633);
var n1 = cljs.core.nth.call(null,vec__89642,(0),null);
var n2 = cljs.core.nth.call(null,vec__89642,(1),null);
cljs.core.chunk_append.call(null,b__89634,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null));

var G__89699 = (i__89633 + (1));
i__89633 = G__89699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89634),loom$graph$build_$_iter__89631.call(null,cljs.core.chunk_rest.call(null,s__89632__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89634),null);
}
} else {
var vec__89645 = cljs.core.first.call(null,s__89632__$2);
var n1 = cljs.core.nth.call(null,vec__89645,(0),null);
var n2 = cljs.core.nth.call(null,vec__89645,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null),loom$graph$build_$_iter__89631.call(null,cljs.core.rest.call(null,s__89632__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36202__auto__.call(null,loom.graph.edges.call(null,init));
})()),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
} else {
return cljs.core.assoc.call(null,loom.graph.add_edges_STAR_.call(null,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),loom.graph.edges.call(null,init)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
}
} else {
if(cljs.core.map_QMARK_.call(null,init)){
var es = ((cljs.core.map_QMARK_.call(null,cljs.core.val.call(null,cljs.core.first.call(null,init))))?(function (){var iter__36202__auto__ = (function loom$graph$build_$_iter__89652(s__89653){
return (new cljs.core.LazySeq(null,(function (){
var s__89653__$1 = s__89653;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89653__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__89675 = cljs.core.first.call(null,xs__5205__auto__);
var n = cljs.core.nth.call(null,vec__89675,(0),null);
var nbrs = cljs.core.nth.call(null,vec__89675,(1),null);
var iterys__36198__auto__ = ((function (s__89653__$1,vec__89675,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function loom$graph$build_$_iter__89652_$_iter__89654(s__89655){
return (new cljs.core.LazySeq(null,((function (s__89653__$1,vec__89675,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__89655__$1 = s__89655;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__89655__$1);
if(temp__4657__auto____$1){
var s__89655__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89655__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__89655__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__89657 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__89656 = (0);
while(true){
if((i__89656 < size__36201__auto__)){
var vec__89682 = cljs.core._nth.call(null,c__36200__auto__,i__89656);
var nbr = cljs.core.nth.call(null,vec__89682,(0),null);
var wt = cljs.core.nth.call(null,vec__89682,(1),null);
cljs.core.chunk_append.call(null,b__89657,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__89714 = (i__89656 + (1));
i__89656 = G__89714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89657),loom$graph$build_$_iter__89652_$_iter__89654.call(null,cljs.core.chunk_rest.call(null,s__89655__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89657),null);
}
} else {
var vec__89683 = cljs.core.first.call(null,s__89655__$2);
var nbr = cljs.core.nth.call(null,vec__89683,(0),null);
var wt = cljs.core.nth.call(null,vec__89683,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),loom$graph$build_$_iter__89652_$_iter__89654.call(null,cljs.core.rest.call(null,s__89655__$2)));
}
} else {
return null;
}
break;
}
});})(s__89653__$1,vec__89675,n,nbrs,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__89653__$1,vec__89675,n,nbrs,xs__5205__auto__,temp__4657__auto__))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,nbrs));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,loom$graph$build_$_iter__89652.call(null,cljs.core.rest.call(null,s__89653__$1)));
} else {
var G__89716 = cljs.core.rest.call(null,s__89653__$1);
s__89653__$1 = G__89716;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36202__auto__.call(null,init);
})():(function (){var iter__36202__auto__ = (function loom$graph$build_$_iter__89684(s__89685){
return (new cljs.core.LazySeq(null,(function (){
var s__89685__$1 = s__89685;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89685__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__89691 = cljs.core.first.call(null,xs__5205__auto__);
var n = cljs.core.nth.call(null,vec__89691,(0),null);
var nbrs = cljs.core.nth.call(null,vec__89691,(1),null);
var iterys__36198__auto__ = ((function (s__89685__$1,vec__89691,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function loom$graph$build_$_iter__89684_$_iter__89686(s__89687){
return (new cljs.core.LazySeq(null,((function (s__89685__$1,vec__89691,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__89687__$1 = s__89687;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__89687__$1);
if(temp__4657__auto____$1){
var s__89687__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89687__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__89687__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__89689 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__89688 = (0);
while(true){
if((i__89688 < size__36201__auto__)){
var nbr = cljs.core._nth.call(null,c__36200__auto__,i__89688);
cljs.core.chunk_append.call(null,b__89689,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__89722 = (i__89688 + (1));
i__89688 = G__89722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89689),loom$graph$build_$_iter__89684_$_iter__89686.call(null,cljs.core.chunk_rest.call(null,s__89687__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89689),null);
}
} else {
var nbr = cljs.core.first.call(null,s__89687__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$build_$_iter__89684_$_iter__89686.call(null,cljs.core.rest.call(null,s__89687__$2)));
}
} else {
return null;
}
break;
}
});})(s__89685__$1,vec__89691,n,nbrs,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__89685__$1,vec__89691,n,nbrs,xs__5205__auto__,temp__4657__auto__))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,nbrs));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,loom$graph$build_$_iter__89684.call(null,cljs.core.rest.call(null,s__89685__$1)));
} else {
var G__89724 = cljs.core.rest.call(null,s__89685__$1);
s__89685__$1 = G__89724;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36202__auto__.call(null,init);
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

loom.graph.build_graph.cljs$lang$applyTo = (function (seq89407){
var G__89408 = cljs.core.first.call(null,seq89407);
var seq89407__$1 = cljs.core.next.call(null,seq89407);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic(G__89408,seq89407__$1);
});
/**
 * Creates an unweighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.graph = (function loom$graph$graph(var_args){
var args__36498__auto__ = [];
var len__36491__auto___89729 = arguments.length;
var i__36492__auto___89730 = (0);
while(true){
if((i__36492__auto___89730 < len__36491__auto___89729)){
args__36498__auto__.push((arguments[i__36492__auto___89730]));

var G__89732 = (i__36492__auto___89730 + (1));
i__36492__auto___89730 = G__89732;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((0) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((0)),(0),null)):null);
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(argseq__36499__auto__);
});

loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.graph.cljs$lang$maxFixedArity = (0);

loom.graph.graph.cljs$lang$applyTo = (function (seq89726){
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89726));
});
/**
 * Creates an unweighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.digraph = (function loom$graph$digraph(var_args){
var args__36498__auto__ = [];
var len__36491__auto___89736 = arguments.length;
var i__36492__auto___89737 = (0);
while(true){
if((i__36492__auto___89737 < len__36491__auto___89736)){
args__36498__auto__.push((arguments[i__36492__auto___89737]));

var G__89738 = (i__36492__auto___89737 + (1));
i__36492__auto___89737 = G__89738;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((0) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((0)),(0),null)):null);
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__36499__auto__);
});

loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.digraph.cljs$lang$maxFixedArity = (0);

loom.graph.digraph.cljs$lang$applyTo = (function (seq89733){
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89733));
});
/**
 * Creates an weighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_graph = (function loom$graph$weighted_graph(var_args){
var args__36498__auto__ = [];
var len__36491__auto___89743 = arguments.length;
var i__36492__auto___89744 = (0);
while(true){
if((i__36492__auto___89744 < len__36491__auto___89743)){
args__36498__auto__.push((arguments[i__36492__auto___89744]));

var G__89745 = (i__36492__auto___89744 + (1));
i__36492__auto___89744 = G__89745;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((0) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__36499__auto__);
});

loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_graph.cljs$lang$maxFixedArity = (0);

loom.graph.weighted_graph.cljs$lang$applyTo = (function (seq89741){
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89741));
});
/**
 * Creates an weighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_digraph = (function loom$graph$weighted_digraph(var_args){
var args__36498__auto__ = [];
var len__36491__auto___89751 = arguments.length;
var i__36492__auto___89752 = (0);
while(true){
if((i__36492__auto___89752 < len__36491__auto___89751)){
args__36498__auto__.push((arguments[i__36492__auto___89752]));

var G__89753 = (i__36492__auto___89752 + (1));
i__36492__auto___89752 = G__89753;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((0) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__36499__auto__);
});

loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_digraph.cljs$lang$maxFixedArity = (0);

loom.graph.weighted_digraph.cljs$lang$applyTo = (function (seq89750){
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89750));
});
/**
 * Creates a read-only, ad-hoc graph which uses the provided functions
 *   to return values for nodes, edges, etc. If any members are not functions,
 *   they will be returned as-is. Edges can be inferred if nodes and
 *   successors are provided. Nodes and edges can be inferred if successors and
 *   start are provided.
 */
loom.graph.fly_graph = (function loom$graph$fly_graph(var_args){
var args__36498__auto__ = [];
var len__36491__auto___89764 = arguments.length;
var i__36492__auto___89766 = (0);
while(true){
if((i__36492__auto___89766 < len__36491__auto___89764)){
args__36498__auto__.push((arguments[i__36492__auto___89766]));

var G__89767 = (i__36492__auto___89766 + (1));
i__36492__auto___89766 = G__89767;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((0) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((0)),(0),null)):null);
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__36499__auto__);
});

loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = (function (p__89758){
var map__89759 = p__89758;
var map__89759__$1 = ((((!((map__89759 == null)))?((((map__89759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89759):map__89759);
var nodes = cljs.core.get.call(null,map__89759__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__89759__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var successors = cljs.core.get.call(null,map__89759__$1,new cljs.core.Keyword(null,"successors","successors",-1239296414));
var predecessors = cljs.core.get.call(null,map__89759__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var weight = cljs.core.get.call(null,map__89759__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var start = cljs.core.get.call(null,map__89759__$1,new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.truth_((function (){var and__35410__auto__ = predecessors;
if(cljs.core.truth_(and__35410__auto__)){
return weight;
} else {
return and__35410__auto__;
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

loom.graph.fly_graph.cljs$lang$applyTo = (function (seq89756){
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89756));
});
