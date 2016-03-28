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
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.nodes[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g);
} else {
var m__26491__auto____$1 = (loom.graph.nodes["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g);
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
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.edges[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g);
} else {
var m__26491__auto____$1 = (loom.graph.edges["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g);
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
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.has_node_QMARK_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g,node);
} else {
var m__26491__auto____$1 = (loom.graph.has_node_QMARK_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g,node);
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
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.has_edge_QMARK_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g,n1,n2);
} else {
var m__26491__auto____$1 = (loom.graph.has_edge_QMARK_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g,n1,n2);
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
var args86811 = [];
var len__26896__auto___86857 = arguments.length;
var i__26897__auto___86858 = (0);
while(true){
if((i__26897__auto___86858 < len__26896__auto___86857)){
args86811.push((arguments[i__26897__auto___86858]));

var G__86859 = (i__26897__auto___86858 + (1));
i__26897__auto___86858 = G__86859;
continue;
} else {
}
break;
}

var G__86816 = args86811.length;
switch (G__86816) {
case 1:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86811.length)].join('')));

}
});

loom.graph.successors.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Graph$successors$arity$1 == null)))){
return g.loom$graph$Graph$successors$arity$1(g);
} else {
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.successors[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g);
} else {
var m__26491__auto____$1 = (loom.graph.successors["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g);
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
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.successors[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g,node);
} else {
var m__26491__auto____$1 = (loom.graph.successors["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g,node);
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
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.out_degree[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g,node);
} else {
var m__26491__auto____$1 = (loom.graph.out_degree["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g,node);
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
var args86822 = [];
var len__26896__auto___86868 = arguments.length;
var i__26897__auto___86869 = (0);
while(true){
if((i__26897__auto___86869 < len__26896__auto___86868)){
args86822.push((arguments[i__26897__auto___86869]));

var G__86871 = (i__26897__auto___86869 + (1));
i__26897__auto___86869 = G__86871;
continue;
} else {
}
break;
}

var G__86826 = args86822.length;
switch (G__86826) {
case 1:
return loom.graph.out_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.out_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86822.length)].join('')));

}
});

loom.graph.out_edges.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Graph$out_edges$arity$1 == null)))){
return g.loom$graph$Graph$out_edges$arity$1(g);
} else {
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.out_edges[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g);
} else {
var m__26491__auto____$1 = (loom.graph.out_edges["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g);
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
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.out_edges[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g,node);
} else {
var m__26491__auto____$1 = (loom.graph.out_edges["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g,node);
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
var args86915 = [];
var len__26896__auto___86961 = arguments.length;
var i__26897__auto___86962 = (0);
while(true){
if((i__26897__auto___86962 < len__26896__auto___86961)){
args86915.push((arguments[i__26897__auto___86962]));

var G__86963 = (i__26897__auto___86962 + (1));
i__26897__auto___86962 = G__86963;
continue;
} else {
}
break;
}

var G__86923 = args86915.length;
switch (G__86923) {
case 1:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86915.length)].join('')));

}
});

loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Digraph$predecessors$arity$1 == null)))){
return g.loom$graph$Digraph$predecessors$arity$1(g);
} else {
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.predecessors[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g);
} else {
var m__26491__auto____$1 = (loom.graph.predecessors["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g);
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
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.predecessors[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g,node);
} else {
var m__26491__auto____$1 = (loom.graph.predecessors["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g,node);
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
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.in_degree[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g,node);
} else {
var m__26491__auto____$1 = (loom.graph.in_degree["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g,node);
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
var args86933 = [];
var len__26896__auto___86969 = arguments.length;
var i__26897__auto___86970 = (0);
while(true){
if((i__26897__auto___86970 < len__26896__auto___86969)){
args86933.push((arguments[i__26897__auto___86970]));

var G__86976 = (i__26897__auto___86970 + (1));
i__26897__auto___86970 = G__86976;
continue;
} else {
}
break;
}

var G__86937 = args86933.length;
switch (G__86937) {
case 1:
return loom.graph.in_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.in_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86933.length)].join('')));

}
});

loom.graph.in_edges.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Digraph$in_edges$arity$1 == null)))){
return g.loom$graph$Digraph$in_edges$arity$1(g);
} else {
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.in_edges[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g);
} else {
var m__26491__auto____$1 = (loom.graph.in_edges["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g);
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
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.in_edges[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g,node);
} else {
var m__26491__auto____$1 = (loom.graph.in_edges["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g,node);
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
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.transpose[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g);
} else {
var m__26491__auto____$1 = (loom.graph.transpose["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g);
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
var args87000 = [];
var len__26896__auto___87008 = arguments.length;
var i__26897__auto___87009 = (0);
while(true){
if((i__26897__auto___87009 < len__26896__auto___87008)){
args87000.push((arguments[i__26897__auto___87009]));

var G__87010 = (i__26897__auto___87009 + (1));
i__26897__auto___87009 = G__87010;
continue;
} else {
}
break;
}

var G__87003 = args87000.length;
switch (G__87003) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87000.length)].join('')));

}
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$WeightedGraph$weight$arity$1 == null)))){
return g.loom$graph$WeightedGraph$weight$arity$1(g);
} else {
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.weight[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g);
} else {
var m__26491__auto____$1 = (loom.graph.weight["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g);
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
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.weight[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g,e);
} else {
var m__26491__auto____$1 = (loom.graph.weight["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g,e);
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
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.weight[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g,n1,n2);
} else {
var m__26491__auto____$1 = (loom.graph.weight["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g,n1,n2);
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
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.add_nodes_STAR_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g,nodes);
} else {
var m__26491__auto____$1 = (loom.graph.add_nodes_STAR_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g,nodes);
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
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.add_edges_STAR_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g,edges);
} else {
var m__26491__auto____$1 = (loom.graph.add_edges_STAR_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g,edges);
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
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.remove_nodes_STAR_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g,nodes);
} else {
var m__26491__auto____$1 = (loom.graph.remove_nodes_STAR_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g,nodes);
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
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.remove_edges_STAR_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g,edges);
} else {
var m__26491__auto____$1 = (loom.graph.remove_edges_STAR_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g,edges);
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
var x__26490__auto__ = (((g == null))?null:g);
var m__26491__auto__ = (loom.graph.remove_all[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,g);
} else {
var m__26491__auto____$1 = (loom.graph.remove_all["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,g);
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
var x__26490__auto__ = (((edge == null))?null:edge);
var m__26491__auto__ = (loom.graph.src[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,edge);
} else {
var m__26491__auto____$1 = (loom.graph.src["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,edge);
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
var x__26490__auto__ = (((edge == null))?null:edge);
var m__26491__auto__ = (loom.graph.dest[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,edge);
} else {
var m__26491__auto____$1 = (loom.graph.dest["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,edge);
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
var args__26903__auto__ = [];
var len__26896__auto___87148 = arguments.length;
var i__26897__auto___87149 = (0);
while(true){
if((i__26897__auto___87149 < len__26896__auto___87148)){
args__26903__auto__.push((arguments[i__26897__auto___87149]));

var G__87150 = (i__26897__auto___87149 + (1));
i__26897__auto___87149 = G__87150;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((1) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((1)),(0),null)):null);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26904__auto__);
});

loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_nodes_STAR_.call(null,g,nodes);
});

loom.graph.add_nodes.cljs$lang$maxFixedArity = (1);

loom.graph.add_nodes.cljs$lang$applyTo = (function (seq87143){
var G__87144 = cljs.core.first.call(null,seq87143);
var seq87143__$1 = cljs.core.next.call(null,seq87143);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic(G__87144,seq87143__$1);
});
/**
 * Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].
 *   For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the
 *   latter defaulting to a weight of 1
 */
loom.graph.add_edges = (function loom$graph$add_edges(var_args){
var args__26903__auto__ = [];
var len__26896__auto___87159 = arguments.length;
var i__26897__auto___87160 = (0);
while(true){
if((i__26897__auto___87160 < len__26896__auto___87159)){
args__26903__auto__.push((arguments[i__26897__auto___87160]));

var G__87161 = (i__26897__auto___87160 + (1));
i__26897__auto___87160 = G__87161;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((1) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((1)),(0),null)):null);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26904__auto__);
});

loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.add_edges_STAR_.call(null,g,edges);
});

loom.graph.add_edges.cljs$lang$maxFixedArity = (1);

loom.graph.add_edges.cljs$lang$applyTo = (function (seq87154){
var G__87155 = cljs.core.first.call(null,seq87154);
var seq87154__$1 = cljs.core.next.call(null,seq87154);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic(G__87155,seq87154__$1);
});
/**
 * Removes nodes from graph g
 */
loom.graph.remove_nodes = (function loom$graph$remove_nodes(var_args){
var args__26903__auto__ = [];
var len__26896__auto___87171 = arguments.length;
var i__26897__auto___87172 = (0);
while(true){
if((i__26897__auto___87172 < len__26896__auto___87171)){
args__26903__auto__.push((arguments[i__26897__auto___87172]));

var G__87173 = (i__26897__auto___87172 + (1));
i__26897__auto___87172 = G__87173;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((1) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26904__auto__);
});

loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.remove_nodes_STAR_.call(null,g,nodes);
});

loom.graph.remove_nodes.cljs$lang$maxFixedArity = (1);

loom.graph.remove_nodes.cljs$lang$applyTo = (function (seq87167){
var G__87168 = cljs.core.first.call(null,seq87167);
var seq87167__$1 = cljs.core.next.call(null,seq87167);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic(G__87168,seq87167__$1);
});
/**
 * Removes edges from graph g. Do not include weights
 */
loom.graph.remove_edges = (function loom$graph$remove_edges(var_args){
var args__26903__auto__ = [];
var len__26896__auto___87181 = arguments.length;
var i__26897__auto___87182 = (0);
while(true){
if((i__26897__auto___87182 < len__26896__auto___87181)){
args__26903__auto__.push((arguments[i__26897__auto___87182]));

var G__87184 = (i__26897__auto___87182 + (1));
i__26897__auto___87182 = G__87184;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((1) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26904__auto__);
});

loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.remove_edges_STAR_.call(null,g,edges);
});

loom.graph.remove_edges.cljs$lang$maxFixedArity = (1);

loom.graph.remove_edges.cljs$lang$applyTo = (function (seq87176){
var G__87177 = cljs.core.first.call(null,seq87176);
var seq87176__$1 = cljs.core.next.call(null,seq87176);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic(G__87177,seq87176__$1);
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
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),(function (p1__87235_SHARP_){
return cljs.core.apply.call(null,remove_fn,p1__87235_SHARP_,nodes);
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
var iter__26607__auto__ = ((function (g__$1){
return (function loom$graph$iter__87265(s__87266){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__87266__$1 = s__87266;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__87266__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__26603__auto__ = ((function (s__87266__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__87265_$_iter__87267(s__87268){
return (new cljs.core.LazySeq(null,((function (s__87266__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__87268__$1 = s__87268;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__87268__$1);
if(temp__4657__auto____$1){
var s__87268__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87268__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__87268__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__87270 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__87269 = (0);
while(true){
if((i__87269 < size__26606__auto__)){
var e = cljs.core._nth.call(null,c__26605__auto__,i__87269);
cljs.core.chunk_append.call(null,b__87270,e);

var G__87431 = (i__87269 + (1));
i__87269 = G__87431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87270),loom$graph$iter__87265_$_iter__87267.call(null,cljs.core.chunk_rest.call(null,s__87268__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87270),null);
}
} else {
var e = cljs.core.first.call(null,s__87268__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__87265_$_iter__87267.call(null,cljs.core.rest.call(null,s__87268__$2)));
}
} else {
return null;
}
break;
}
});})(s__87266__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__87266__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,loom$graph$iter__87265.call(null,cljs.core.rest.call(null,s__87266__$1)));
} else {
var G__87440 = cljs.core.rest.call(null,s__87266__$1);
s__87266__$1 = G__87440;
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
return iter__26607__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__26607__auto__ = ((function (g__$1){
return (function loom$graph$iter__87306(s__87307){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__87307__$1 = s__87307;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__87307__$1);
if(temp__4657__auto__){
var s__87307__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87307__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__87307__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__87309 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__87308 = (0);
while(true){
if((i__87308 < size__26606__auto__)){
var n2 = cljs.core._nth.call(null,c__26605__auto__,i__87308);
cljs.core.chunk_append.call(null,b__87309,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__87469 = (i__87308 + (1));
i__87308 = G__87469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87309),loom$graph$iter__87306.call(null,cljs.core.chunk_rest.call(null,s__87307__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87309),null);
}
} else {
var n2 = cljs.core.first.call(null,s__87307__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__87306.call(null,cljs.core.rest.call(null,s__87307__$2)));
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
return iter__26607__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26449__auto__,k__26450__auto__){
var self__ = this;
var this__26449__auto____$1 = this;
return cljs.core._lookup.call(null,this__26449__auto____$1,k__26450__auto__,null);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26451__auto__,k87257,else__26452__auto__){
var self__ = this;
var this__26451__auto____$1 = this;
var G__87328 = (((k87257 instanceof cljs.core.Keyword))?k87257.fqn:null);
switch (G__87328) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k87257,else__26452__auto__);

}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26463__auto__,writer__26464__auto__,opts__26465__auto__){
var self__ = this;
var this__26463__auto____$1 = this;
var pr_pair__26466__auto__ = ((function (this__26463__auto____$1){
return (function (keyval__26467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26464__auto__,cljs.core.pr_writer,""," ","",opts__26465__auto__,keyval__26467__auto__);
});})(this__26463__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26464__auto__,pr_pair__26466__auto__,"#loom.graph.BasicEditableGraph{",", ","}",opts__26465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__87256){
var self__ = this;
var G__87256__$1 = this;
return (new cljs.core.RecordIter((0),G__87256__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26447__auto__){
var self__ = this;
var this__26447__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26443__auto__){
var self__ = this;
var this__26443__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26453__auto__){
var self__ = this;
var this__26453__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26444__auto__){
var self__ = this;
var this__26444__auto____$1 = this;
var h__26262__auto__ = self__.__hash;
if(!((h__26262__auto__ == null))){
return h__26262__auto__;
} else {
var h__26262__auto____$1 = cljs.core.hash_imap.call(null,this__26444__auto____$1);
self__.__hash = h__26262__auto____$1;

return h__26262__auto____$1;
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26445__auto__,other__26446__auto__){
var self__ = this;
var this__26445__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25815__auto__ = other__26446__auto__;
if(cljs.core.truth_(and__25815__auto__)){
var and__25815__auto____$1 = (this__26445__auto____$1.constructor === other__26446__auto__.constructor);
if(and__25815__auto____$1){
return cljs.core.equiv_map.call(null,this__26445__auto____$1,other__26446__auto__);
} else {
return and__25815__auto____$1;
}
} else {
return and__25815__auto__;
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
return (function (g__$2,p__87351){
var vec__87352 = p__87351;
var n1 = cljs.core.nth.call(null,vec__87352,(0),null);
var n2 = cljs.core.nth.call(null,vec__87352,(1),null);
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
return (function (g__$2,p__87357){
var vec__87358 = p__87357;
var n1 = cljs.core.nth.call(null,vec__87358,(0),null);
var n2 = cljs.core.nth.call(null,vec__87358,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26458__auto__,k__26459__auto__){
var self__ = this;
var this__26458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__26459__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26458__auto____$1),self__.__meta),k__26459__auto__);
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26459__auto__)),null));
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26456__auto__,k__26457__auto__,G__87256){
var self__ = this;
var this__26456__auto____$1 = this;
var pred__87362 = cljs.core.keyword_identical_QMARK_;
var expr__87363 = k__26457__auto__;
if(cljs.core.truth_(pred__87362.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__87363))){
return (new loom.graph.BasicEditableGraph(G__87256,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87362.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__87363))){
return (new loom.graph.BasicEditableGraph(self__.nodeset,G__87256,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26457__auto__,G__87256),null));
}
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26461__auto__){
var self__ = this;
var this__26461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26448__auto__,G__87256){
var self__ = this;
var this__26448__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,G__87256,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26454__auto__,entry__26455__auto__){
var self__ = this;
var this__26454__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26455__auto__)){
return cljs.core._assoc.call(null,this__26454__auto____$1,cljs.core._nth.call(null,entry__26455__auto__,(0)),cljs.core._nth.call(null,entry__26455__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26454__auto____$1,entry__26455__auto__);
}
});

loom.graph.BasicEditableGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableGraph.cljs$lang$type = true;

loom.graph.BasicEditableGraph.cljs$lang$ctorPrSeq = (function (this__26483__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableGraph");
});

loom.graph.BasicEditableGraph.cljs$lang$ctorPrWriter = (function (this__26483__auto__,writer__26484__auto__){
return cljs.core._write.call(null,writer__26484__auto__,"loom.graph/BasicEditableGraph");
});

loom.graph.__GT_BasicEditableGraph = (function loom$graph$__GT_BasicEditableGraph(nodeset,adj){
return (new loom.graph.BasicEditableGraph(nodeset,adj,null,null,null));
});

loom.graph.map__GT_BasicEditableGraph = (function loom$graph$map__GT_BasicEditableGraph(G__87260){
return (new loom.graph.BasicEditableGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__87260),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__87260),null,cljs.core.dissoc.call(null,G__87260,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)),null));
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
var iter__26607__auto__ = ((function (g__$1){
return (function loom$graph$iter__87689(s__87691){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__87691__$1 = s__87691;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__87691__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__26603__auto__ = ((function (s__87691__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__87689_$_iter__87692(s__87693){
return (new cljs.core.LazySeq(null,((function (s__87691__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__87693__$1 = s__87693;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__87693__$1);
if(temp__4657__auto____$1){
var s__87693__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87693__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__87693__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__87695 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__87694 = (0);
while(true){
if((i__87694 < size__26606__auto__)){
var e = cljs.core._nth.call(null,c__26605__auto__,i__87694);
cljs.core.chunk_append.call(null,b__87695,e);

var G__87851 = (i__87694 + (1));
i__87694 = G__87851;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87695),loom$graph$iter__87689_$_iter__87692.call(null,cljs.core.chunk_rest.call(null,s__87693__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87695),null);
}
} else {
var e = cljs.core.first.call(null,s__87693__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__87689_$_iter__87692.call(null,cljs.core.rest.call(null,s__87693__$2)));
}
} else {
return null;
}
break;
}
});})(s__87691__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__87691__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,loom$graph$iter__87689.call(null,cljs.core.rest.call(null,s__87691__$1)));
} else {
var G__87859 = cljs.core.rest.call(null,s__87691__$1);
s__87691__$1 = G__87859;
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
return iter__26607__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__26607__auto__ = ((function (g__$1){
return (function loom$graph$iter__87755(s__87756){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__87756__$1 = s__87756;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__87756__$1);
if(temp__4657__auto__){
var s__87756__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87756__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__87756__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__87758 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__87757 = (0);
while(true){
if((i__87757 < size__26606__auto__)){
var n2 = cljs.core._nth.call(null,c__26605__auto__,i__87757);
cljs.core.chunk_append.call(null,b__87758,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__87877 = (i__87757 + (1));
i__87757 = G__87877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87758),loom$graph$iter__87755.call(null,cljs.core.chunk_rest.call(null,s__87756__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87758),null);
}
} else {
var n2 = cljs.core.first.call(null,s__87756__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__87755.call(null,cljs.core.rest.call(null,s__87756__$2)));
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
return iter__26607__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26449__auto__,k__26450__auto__){
var self__ = this;
var this__26449__auto____$1 = this;
return cljs.core._lookup.call(null,this__26449__auto____$1,k__26450__auto__,null);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26451__auto__,k87660,else__26452__auto__){
var self__ = this;
var this__26451__auto____$1 = this;
var G__87770 = (((k87660 instanceof cljs.core.Keyword))?k87660.fqn:null);
switch (G__87770) {
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
return cljs.core.get.call(null,self__.__extmap,k87660,else__26452__auto__);

}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26463__auto__,writer__26464__auto__,opts__26465__auto__){
var self__ = this;
var this__26463__auto____$1 = this;
var pr_pair__26466__auto__ = ((function (this__26463__auto____$1){
return (function (keyval__26467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26464__auto__,cljs.core.pr_writer,""," ","",opts__26465__auto__,keyval__26467__auto__);
});})(this__26463__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26464__auto__,pr_pair__26466__auto__,"#loom.graph.BasicEditableDigraph{",", ","}",opts__26465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__87659){
var self__ = this;
var G__87659__$1 = this;
return (new cljs.core.RecordIter((0),G__87659__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26447__auto__){
var self__ = this;
var this__26447__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26443__auto__){
var self__ = this;
var this__26443__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26453__auto__){
var self__ = this;
var this__26453__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26444__auto__){
var self__ = this;
var this__26444__auto____$1 = this;
var h__26262__auto__ = self__.__hash;
if(!((h__26262__auto__ == null))){
return h__26262__auto__;
} else {
var h__26262__auto____$1 = cljs.core.hash_imap.call(null,this__26444__auto____$1);
self__.__hash = h__26262__auto____$1;

return h__26262__auto____$1;
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26445__auto__,other__26446__auto__){
var self__ = this;
var this__26445__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25815__auto__ = other__26446__auto__;
if(cljs.core.truth_(and__25815__auto__)){
var and__25815__auto____$1 = (this__26445__auto____$1.constructor === other__26446__auto__.constructor);
if(and__25815__auto____$1){
return cljs.core.equiv_map.call(null,this__26445__auto____$1,other__26446__auto__);
} else {
return and__25815__auto____$1;
}
} else {
return and__25815__auto__;
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
return (function (g__$2,p__87782){
var vec__87783 = p__87782;
var n1 = cljs.core.nth.call(null,vec__87783,(0),null);
var n2 = cljs.core.nth.call(null,vec__87783,(1),null);
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
return (function (g__$2,p__87792){
var vec__87793 = p__87792;
var n1 = cljs.core.nth.call(null,vec__87793,(0),null);
var n2 = cljs.core.nth.call(null,vec__87793,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26458__auto__,k__26459__auto__){
var self__ = this;
var this__26458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__26459__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26458__auto____$1),self__.__meta),k__26459__auto__);
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26459__auto__)),null));
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26456__auto__,k__26457__auto__,G__87659){
var self__ = this;
var this__26456__auto____$1 = this;
var pred__87795 = cljs.core.keyword_identical_QMARK_;
var expr__87796 = k__26457__auto__;
if(cljs.core.truth_(pred__87795.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__87796))){
return (new loom.graph.BasicEditableDigraph(G__87659,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87795.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__87796))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,G__87659,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__87795.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__87796))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,G__87659,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26457__auto__,G__87659),null));
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
var iter__26607__auto__ = ((function (g__$1){
return (function loom$graph$iter__87807(s__87808){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__87808__$1 = s__87808;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__87808__$1);
if(temp__4657__auto__){
var s__87808__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__87808__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__87808__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__87810 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__87809 = (0);
while(true){
if((i__87809 < size__26606__auto__)){
var n2 = cljs.core._nth.call(null,c__26605__auto__,i__87809);
cljs.core.chunk_append.call(null,b__87810,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__87976 = (i__87809 + (1));
i__87809 = G__87976;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87810),loom$graph$iter__87807.call(null,cljs.core.chunk_rest.call(null,s__87808__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87810),null);
}
} else {
var n2 = cljs.core.first.call(null,s__87808__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__87807.call(null,cljs.core.rest.call(null,s__87808__$2)));
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
return iter__26607__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26461__auto__){
var self__ = this;
var this__26461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26448__auto__,G__87659){
var self__ = this;
var this__26448__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,G__87659,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26454__auto__,entry__26455__auto__){
var self__ = this;
var this__26454__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26455__auto__)){
return cljs.core._assoc.call(null,this__26454__auto____$1,cljs.core._nth.call(null,entry__26455__auto__,(0)),cljs.core._nth.call(null,entry__26455__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26454__auto____$1,entry__26455__auto__);
}
});

loom.graph.BasicEditableDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableDigraph.cljs$lang$type = true;

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrSeq = (function (this__26483__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableDigraph");
});

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrWriter = (function (this__26483__auto__,writer__26484__auto__){
return cljs.core._write.call(null,writer__26484__auto__,"loom.graph/BasicEditableDigraph");
});

loom.graph.__GT_BasicEditableDigraph = (function loom$graph$__GT_BasicEditableDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableDigraph(nodeset,adj,in$,null,null,null));
});

loom.graph.map__GT_BasicEditableDigraph = (function loom$graph$map__GT_BasicEditableDigraph(G__87661){
return (new loom.graph.BasicEditableDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__87661),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__87661),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__87661),null,cljs.core.dissoc.call(null,G__87661,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)),null));
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
var iter__26607__auto__ = ((function (g__$1){
return (function loom$graph$iter__88024(s__88025){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__88025__$1 = s__88025;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88025__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__26603__auto__ = ((function (s__88025__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__88024_$_iter__88026(s__88027){
return (new cljs.core.LazySeq(null,((function (s__88025__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__88027__$1 = s__88027;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__88027__$1);
if(temp__4657__auto____$1){
var s__88027__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88027__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__88027__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__88029 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__88028 = (0);
while(true){
if((i__88028 < size__26606__auto__)){
var e = cljs.core._nth.call(null,c__26605__auto__,i__88028);
cljs.core.chunk_append.call(null,b__88029,e);

var G__88172 = (i__88028 + (1));
i__88028 = G__88172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88029),loom$graph$iter__88024_$_iter__88026.call(null,cljs.core.chunk_rest.call(null,s__88027__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88029),null);
}
} else {
var e = cljs.core.first.call(null,s__88027__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__88024_$_iter__88026.call(null,cljs.core.rest.call(null,s__88027__$2)));
}
} else {
return null;
}
break;
}
});})(s__88025__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__88025__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,loom$graph$iter__88024.call(null,cljs.core.rest.call(null,s__88025__$1)));
} else {
var G__88180 = cljs.core.rest.call(null,s__88025__$1);
s__88025__$1 = G__88180;
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
return iter__26607__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__26607__auto__ = ((function (g__$1){
return (function loom$graph$iter__88051(s__88052){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__88052__$1 = s__88052;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88052__$1);
if(temp__4657__auto__){
var s__88052__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88052__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__88052__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__88054 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__88053 = (0);
while(true){
if((i__88053 < size__26606__auto__)){
var n2 = cljs.core._nth.call(null,c__26605__auto__,i__88053);
cljs.core.chunk_append.call(null,b__88054,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__88195 = (i__88053 + (1));
i__88053 = G__88195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88054),loom$graph$iter__88051.call(null,cljs.core.chunk_rest.call(null,s__88052__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88054),null);
}
} else {
var n2 = cljs.core.first.call(null,s__88052__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__88051.call(null,cljs.core.rest.call(null,s__88052__$2)));
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
return iter__26607__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26449__auto__,k__26450__auto__){
var self__ = this;
var this__26449__auto____$1 = this;
return cljs.core._lookup.call(null,this__26449__auto____$1,k__26450__auto__,null);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26451__auto__,k88013,else__26452__auto__){
var self__ = this;
var this__26451__auto____$1 = this;
var G__88066 = (((k88013 instanceof cljs.core.Keyword))?k88013.fqn:null);
switch (G__88066) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k88013,else__26452__auto__);

}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26463__auto__,writer__26464__auto__,opts__26465__auto__){
var self__ = this;
var this__26463__auto____$1 = this;
var pr_pair__26466__auto__ = ((function (this__26463__auto____$1){
return (function (keyval__26467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26464__auto__,cljs.core.pr_writer,""," ","",opts__26465__auto__,keyval__26467__auto__);
});})(this__26463__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26464__auto__,pr_pair__26466__auto__,"#loom.graph.BasicEditableWeightedGraph{",", ","}",opts__26465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__88012){
var self__ = this;
var G__88012__$1 = this;
return (new cljs.core.RecordIter((0),G__88012__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26447__auto__){
var self__ = this;
var this__26447__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26443__auto__){
var self__ = this;
var this__26443__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26453__auto__){
var self__ = this;
var this__26453__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26444__auto__){
var self__ = this;
var this__26444__auto____$1 = this;
var h__26262__auto__ = self__.__hash;
if(!((h__26262__auto__ == null))){
return h__26262__auto__;
} else {
var h__26262__auto____$1 = cljs.core.hash_imap.call(null,this__26444__auto____$1);
self__.__hash = h__26262__auto____$1;

return h__26262__auto____$1;
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26445__auto__,other__26446__auto__){
var self__ = this;
var this__26445__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25815__auto__ = other__26446__auto__;
if(cljs.core.truth_(and__25815__auto__)){
var and__25815__auto____$1 = (this__26445__auto____$1.constructor === other__26446__auto__.constructor);
if(and__25815__auto____$1){
return cljs.core.equiv_map.call(null,this__26445__auto____$1,other__26446__auto__);
} else {
return and__25815__auto____$1;
}
} else {
return and__25815__auto__;
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
return (function (g__$2,p__88080){
var vec__88081 = p__88080;
var n1 = cljs.core.nth.call(null,vec__88081,(0),null);
var n2 = cljs.core.nth.call(null,vec__88081,(1),null);
var vec__88082 = cljs.core.nthnext.call(null,vec__88081,(2));
var w = cljs.core.nth.call(null,vec__88082,(0),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__25827__auto__ = w;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2,n1], null),(function (){var or__25827__auto__ = w;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
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
return (function (g__$2,p__88089){
var vec__88090 = p__88089;
var n1 = cljs.core.nth.call(null,vec__88090,(0),null);
var n2 = cljs.core.nth.call(null,vec__88090,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.dissoc,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26458__auto__,k__26459__auto__){
var self__ = this;
var this__26458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__26459__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26458__auto____$1),self__.__meta),k__26459__auto__);
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26459__auto__)),null));
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26456__auto__,k__26457__auto__,G__88012){
var self__ = this;
var this__26456__auto____$1 = this;
var pred__88094 = cljs.core.keyword_identical_QMARK_;
var expr__88095 = k__26457__auto__;
if(cljs.core.truth_(pred__88094.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__88095))){
return (new loom.graph.BasicEditableWeightedGraph(G__88012,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88094.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__88095))){
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,G__88012,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26457__auto__,G__88012),null));
}
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26461__auto__){
var self__ = this;
var this__26461__auto____$1 = this;
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

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26448__auto__,G__88012){
var self__ = this;
var this__26448__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,G__88012,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26454__auto__,entry__26455__auto__){
var self__ = this;
var this__26454__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26455__auto__)){
return cljs.core._assoc.call(null,this__26454__auto____$1,cljs.core._nth.call(null,entry__26455__auto__,(0)),cljs.core._nth.call(null,entry__26455__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26454__auto____$1,entry__26455__auto__);
}
});

loom.graph.BasicEditableWeightedGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrSeq = (function (this__26483__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableWeightedGraph");
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrWriter = (function (this__26483__auto__,writer__26484__auto__){
return cljs.core._write.call(null,writer__26484__auto__,"loom.graph/BasicEditableWeightedGraph");
});

loom.graph.__GT_BasicEditableWeightedGraph = (function loom$graph$__GT_BasicEditableWeightedGraph(nodeset,adj){
return (new loom.graph.BasicEditableWeightedGraph(nodeset,adj,null,null,null));
});

loom.graph.map__GT_BasicEditableWeightedGraph = (function loom$graph$map__GT_BasicEditableWeightedGraph(G__88018){
return (new loom.graph.BasicEditableWeightedGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__88018),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__88018),null,cljs.core.dissoc.call(null,G__88018,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)),null));
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
var iter__26607__auto__ = ((function (g__$1){
return (function loom$graph$iter__88345(s__88346){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__88346__$1 = s__88346;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88346__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__26603__auto__ = ((function (s__88346__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__88345_$_iter__88347(s__88348){
return (new cljs.core.LazySeq(null,((function (s__88346__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__88348__$1 = s__88348;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__88348__$1);
if(temp__4657__auto____$1){
var s__88348__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88348__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__88348__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__88350 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__88349 = (0);
while(true){
if((i__88349 < size__26606__auto__)){
var e = cljs.core._nth.call(null,c__26605__auto__,i__88349);
cljs.core.chunk_append.call(null,b__88350,e);

var G__88464 = (i__88349 + (1));
i__88349 = G__88464;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88350),loom$graph$iter__88345_$_iter__88347.call(null,cljs.core.chunk_rest.call(null,s__88348__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88350),null);
}
} else {
var e = cljs.core.first.call(null,s__88348__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__88345_$_iter__88347.call(null,cljs.core.rest.call(null,s__88348__$2)));
}
} else {
return null;
}
break;
}
});})(s__88346__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__88346__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,loom$graph$iter__88345.call(null,cljs.core.rest.call(null,s__88346__$1)));
} else {
var G__88468 = cljs.core.rest.call(null,s__88346__$1);
s__88346__$1 = G__88468;
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
return iter__26607__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__26607__auto__ = ((function (g__$1){
return (function loom$graph$iter__88394(s__88395){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__88395__$1 = s__88395;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88395__$1);
if(temp__4657__auto__){
var s__88395__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88395__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__88395__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__88397 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__88396 = (0);
while(true){
if((i__88396 < size__26606__auto__)){
var n2 = cljs.core._nth.call(null,c__26605__auto__,i__88396);
cljs.core.chunk_append.call(null,b__88397,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__88480 = (i__88396 + (1));
i__88396 = G__88480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88397),loom$graph$iter__88394.call(null,cljs.core.chunk_rest.call(null,s__88395__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88397),null);
}
} else {
var n2 = cljs.core.first.call(null,s__88395__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__88394.call(null,cljs.core.rest.call(null,s__88395__$2)));
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
return iter__26607__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26449__auto__,k__26450__auto__){
var self__ = this;
var this__26449__auto____$1 = this;
return cljs.core._lookup.call(null,this__26449__auto____$1,k__26450__auto__,null);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26451__auto__,k88338,else__26452__auto__){
var self__ = this;
var this__26451__auto____$1 = this;
var G__88412 = (((k88338 instanceof cljs.core.Keyword))?k88338.fqn:null);
switch (G__88412) {
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
return cljs.core.get.call(null,self__.__extmap,k88338,else__26452__auto__);

}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26463__auto__,writer__26464__auto__,opts__26465__auto__){
var self__ = this;
var this__26463__auto____$1 = this;
var pr_pair__26466__auto__ = ((function (this__26463__auto____$1){
return (function (keyval__26467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26464__auto__,cljs.core.pr_writer,""," ","",opts__26465__auto__,keyval__26467__auto__);
});})(this__26463__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26464__auto__,pr_pair__26466__auto__,"#loom.graph.BasicEditableWeightedDigraph{",", ","}",opts__26465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__88337){
var self__ = this;
var G__88337__$1 = this;
return (new cljs.core.RecordIter((0),G__88337__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26447__auto__){
var self__ = this;
var this__26447__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26443__auto__){
var self__ = this;
var this__26443__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26453__auto__){
var self__ = this;
var this__26453__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26444__auto__){
var self__ = this;
var this__26444__auto____$1 = this;
var h__26262__auto__ = self__.__hash;
if(!((h__26262__auto__ == null))){
return h__26262__auto__;
} else {
var h__26262__auto____$1 = cljs.core.hash_imap.call(null,this__26444__auto____$1);
self__.__hash = h__26262__auto____$1;

return h__26262__auto____$1;
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26445__auto__,other__26446__auto__){
var self__ = this;
var this__26445__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25815__auto__ = other__26446__auto__;
if(cljs.core.truth_(and__25815__auto__)){
var and__25815__auto____$1 = (this__26445__auto____$1.constructor === other__26446__auto__.constructor);
if(and__25815__auto____$1){
return cljs.core.equiv_map.call(null,this__26445__auto____$1,other__26446__auto__);
} else {
return and__25815__auto____$1;
}
} else {
return and__25815__auto__;
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
return (function (g__$2,p__88423){
var vec__88424 = p__88423;
var n1 = cljs.core.nth.call(null,vec__88424,(0),null);
var n2 = cljs.core.nth.call(null,vec__88424,(1),null);
var vec__88425 = cljs.core.nthnext.call(null,vec__88424,(2));
var w = cljs.core.nth.call(null,vec__88425,(0),null);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__25827__auto__ = w;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
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
return (function (g__$2,p__88430){
var vec__88431 = p__88430;
var n1 = cljs.core.nth.call(null,vec__88431,(0),null);
var n2 = cljs.core.nth.call(null,vec__88431,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26458__auto__,k__26459__auto__){
var self__ = this;
var this__26458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__26459__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26458__auto____$1),self__.__meta),k__26459__auto__);
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26459__auto__)),null));
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26456__auto__,k__26457__auto__,G__88337){
var self__ = this;
var this__26456__auto____$1 = this;
var pred__88433 = cljs.core.keyword_identical_QMARK_;
var expr__88434 = k__26457__auto__;
if(cljs.core.truth_(pred__88433.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__88434))){
return (new loom.graph.BasicEditableWeightedDigraph(G__88337,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88433.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__88434))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,G__88337,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88433.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__88434))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,G__88337,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26457__auto__,G__88337),null));
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
var iter__26607__auto__ = ((function (g__$1){
return (function loom$graph$iter__88439(s__88440){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__88440__$1 = s__88440;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88440__$1);
if(temp__4657__auto__){
var s__88440__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88440__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__88440__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__88442 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__88441 = (0);
while(true){
if((i__88441 < size__26606__auto__)){
var n2 = cljs.core._nth.call(null,c__26605__auto__,i__88441);
cljs.core.chunk_append.call(null,b__88442,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__88656 = (i__88441 + (1));
i__88441 = G__88656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88442),loom$graph$iter__88439.call(null,cljs.core.chunk_rest.call(null,s__88440__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88442),null);
}
} else {
var n2 = cljs.core.first.call(null,s__88440__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__88439.call(null,cljs.core.rest.call(null,s__88440__$2)));
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
return iter__26607__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (tg,p__88446){
var vec__88447 = p__88446;
var n1 = cljs.core.nth.call(null,vec__88447,(0),null);
var n2 = cljs.core.nth.call(null,vec__88447,(1),null);
return loom.graph.add_edges_STAR_.call(null,tg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,n1,loom.graph.weight.call(null,g__$1,n1,n2)], null)], null));
});})(g__$1))
,cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY),loom.graph.edges.call(null,g__$1));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26461__auto__){
var self__ = this;
var this__26461__auto____$1 = this;
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

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26448__auto__,G__88337){
var self__ = this;
var this__26448__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,G__88337,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26454__auto__,entry__26455__auto__){
var self__ = this;
var this__26454__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26455__auto__)){
return cljs.core._assoc.call(null,this__26454__auto____$1,cljs.core._nth.call(null,entry__26455__auto__,(0)),cljs.core._nth.call(null,entry__26455__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26454__auto____$1,entry__26455__auto__);
}
});

loom.graph.BasicEditableWeightedDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrSeq = (function (this__26483__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableWeightedDigraph");
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrWriter = (function (this__26483__auto__,writer__26484__auto__){
return cljs.core._write.call(null,writer__26484__auto__,"loom.graph/BasicEditableWeightedDigraph");
});

loom.graph.__GT_BasicEditableWeightedDigraph = (function loom$graph$__GT_BasicEditableWeightedDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableWeightedDigraph(nodeset,adj,in$,null,null,null));
});

loom.graph.map__GT_BasicEditableWeightedDigraph = (function loom$graph$map__GT_BasicEditableWeightedDigraph(G__88341){
return (new loom.graph.BasicEditableWeightedDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__88341),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__88341),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__88341),null,cljs.core.dissoc.call(null,G__88341,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)),null));
});

loom.graph.call_or_return = (function loom$graph$call_or_return(var_args){
var args__26903__auto__ = [];
var len__26896__auto___88733 = arguments.length;
var i__26897__auto___88734 = (0);
while(true){
if((i__26897__auto___88734 < len__26896__auto___88733)){
args__26903__auto__.push((arguments[i__26897__auto___88734]));

var G__88739 = (i__26897__auto___88734 + (1));
i__26897__auto___88734 = G__88739;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((1) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((1)),(0),null)):null);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26904__auto__);
});

loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if((cljs.core.fn_QMARK_.call(null,f)) || (((f instanceof clojure.lang.IFn)) && (cljs.core.seq.call(null,args)))){
return cljs.core.apply.call(null,f,args);
} else {
return f;
}
});

loom.graph.call_or_return.cljs$lang$maxFixedArity = (1);

loom.graph.call_or_return.cljs$lang$applyTo = (function (seq88714){
var G__88715 = cljs.core.first.call(null,seq88714);
var seq88714__$1 = cljs.core.next.call(null,seq88714);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(G__88715,seq88714__$1);
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
if(cljs.core.truth_((function (){var or__25827__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
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
var iter__26607__auto__ = ((function (g__$1){
return (function loom$graph$iter__88892(s__88893){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__88893__$1 = s__88893;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88893__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__26603__auto__ = ((function (s__88893__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__88892_$_iter__88894(s__88895){
return (new cljs.core.LazySeq(null,((function (s__88893__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__88895__$1 = s__88895;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__88895__$1);
if(temp__4657__auto____$1){
var s__88895__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88895__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__88895__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__88897 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__88896 = (0);
while(true){
if((i__88896 < size__26606__auto__)){
var nbr = cljs.core._nth.call(null,c__26605__auto__,i__88896);
cljs.core.chunk_append.call(null,b__88897,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__89031 = (i__88896 + (1));
i__88896 = G__89031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88897),loom$graph$iter__88892_$_iter__88894.call(null,cljs.core.chunk_rest.call(null,s__88895__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88897),null);
}
} else {
var nbr = cljs.core.first.call(null,s__88895__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__88892_$_iter__88894.call(null,cljs.core.rest.call(null,s__88895__$2)));
}
} else {
return null;
}
break;
}
});})(s__88893__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__88893__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,loom$graph$iter__88892.call(null,cljs.core.rest.call(null,s__88893__$1)));
} else {
var G__89032 = cljs.core.rest.call(null,s__88893__$1);
s__88893__$1 = G__89032;
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
return iter__26607__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__26607__auto__ = ((function (g__$1){
return (function loom$graph$iter__88939(s__88940){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__88940__$1 = s__88940;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__88940__$1);
if(temp__4657__auto__){
var s__88940__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__88940__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__88940__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__88942 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__88941 = (0);
while(true){
if((i__88941 < size__26606__auto__)){
var n2 = cljs.core._nth.call(null,c__26605__auto__,i__88941);
cljs.core.chunk_append.call(null,b__88942,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__89040 = (i__88941 + (1));
i__88941 = G__89040;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88942),loom$graph$iter__88939.call(null,cljs.core.chunk_rest.call(null,s__88940__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88942),null);
}
} else {
var n2 = cljs.core.first.call(null,s__88940__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__88939.call(null,cljs.core.rest.call(null,s__88940__$2)));
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
return iter__26607__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26449__auto__,k__26450__auto__){
var self__ = this;
var this__26449__auto____$1 = this;
return cljs.core._lookup.call(null,this__26449__auto____$1,k__26450__auto__,null);
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26451__auto__,k88862,else__26452__auto__){
var self__ = this;
var this__26451__auto____$1 = this;
var G__88962 = (((k88862 instanceof cljs.core.Keyword))?k88862.fqn:null);
switch (G__88962) {
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
return cljs.core.get.call(null,self__.__extmap,k88862,else__26452__auto__);

}
});

loom.graph.FlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26463__auto__,writer__26464__auto__,opts__26465__auto__){
var self__ = this;
var this__26463__auto____$1 = this;
var pr_pair__26466__auto__ = ((function (this__26463__auto____$1){
return (function (keyval__26467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26464__auto__,cljs.core.pr_writer,""," ","",opts__26465__auto__,keyval__26467__auto__);
});})(this__26463__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26464__auto__,pr_pair__26466__auto__,"#loom.graph.FlyGraph{",", ","}",opts__26465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__88861){
var self__ = this;
var G__88861__$1 = this;
return (new cljs.core.RecordIter((0),G__88861__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.FlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26447__auto__){
var self__ = this;
var this__26447__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26443__auto__){
var self__ = this;
var this__26443__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26453__auto__){
var self__ = this;
var this__26453__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26444__auto__){
var self__ = this;
var this__26444__auto____$1 = this;
var h__26262__auto__ = self__.__hash;
if(!((h__26262__auto__ == null))){
return h__26262__auto__;
} else {
var h__26262__auto____$1 = cljs.core.hash_imap.call(null,this__26444__auto____$1);
self__.__hash = h__26262__auto____$1;

return h__26262__auto____$1;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26445__auto__,other__26446__auto__){
var self__ = this;
var this__26445__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25815__auto__ = other__26446__auto__;
if(cljs.core.truth_(and__25815__auto__)){
var and__25815__auto____$1 = (this__26445__auto____$1.constructor === other__26446__auto__.constructor);
if(and__25815__auto____$1){
return cljs.core.equiv_map.call(null,this__26445__auto____$1,other__26446__auto__);
} else {
return and__25815__auto____$1;
}
} else {
return and__25815__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26458__auto__,k__26459__auto__){
var self__ = this;
var this__26458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null], null), null),k__26459__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26458__auto____$1),self__.__meta),k__26459__auto__);
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26459__auto__)),null));
}
});

loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26456__auto__,k__26457__auto__,G__88861){
var self__ = this;
var this__26456__auto____$1 = this;
var pred__88989 = cljs.core.keyword_identical_QMARK_;
var expr__88990 = k__26457__auto__;
if(cljs.core.truth_(pred__88989.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__88990))){
return (new loom.graph.FlyGraph(G__88861,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88989.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__88990))){
return (new loom.graph.FlyGraph(self__.fnodes,G__88861,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88989.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__88990))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,G__88861,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__88989.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__88990))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__88861,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26457__auto__,G__88861),null));
}
}
}
}
});

loom.graph.FlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26461__auto__){
var self__ = this;
var this__26461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26448__auto__,G__88861){
var self__ = this;
var this__26448__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,G__88861,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26454__auto__,entry__26455__auto__){
var self__ = this;
var this__26454__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26455__auto__)){
return cljs.core._assoc.call(null,this__26454__auto____$1,cljs.core._nth.call(null,entry__26455__auto__,(0)),cljs.core._nth.call(null,entry__26455__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26454__auto____$1,entry__26455__auto__);
}
});

loom.graph.FlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyGraph.cljs$lang$type = true;

loom.graph.FlyGraph.cljs$lang$ctorPrSeq = (function (this__26483__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/FlyGraph");
});

loom.graph.FlyGraph.cljs$lang$ctorPrWriter = (function (this__26483__auto__,writer__26484__auto__){
return cljs.core._write.call(null,writer__26484__auto__,"loom.graph/FlyGraph");
});

loom.graph.__GT_FlyGraph = (function loom$graph$__GT_FlyGraph(fnodes,fedges,fsuccessors,start){
return (new loom.graph.FlyGraph(fnodes,fedges,fsuccessors,start,null,null,null));
});

loom.graph.map__GT_FlyGraph = (function loom$graph$map__GT_FlyGraph(G__88875){
return (new loom.graph.FlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__88875),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__88875),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__88875),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__88875),null,cljs.core.dissoc.call(null,G__88875,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__25827__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
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
var iter__26607__auto__ = ((function (g__$1){
return (function loom$graph$iter__89080(s__89081){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__89081__$1 = s__89081;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89081__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__26603__auto__ = ((function (s__89081__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__89080_$_iter__89082(s__89083){
return (new cljs.core.LazySeq(null,((function (s__89081__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__89083__$1 = s__89083;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__89083__$1);
if(temp__4657__auto____$1){
var s__89083__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89083__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__89083__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__89085 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__89084 = (0);
while(true){
if((i__89084 < size__26606__auto__)){
var nbr = cljs.core._nth.call(null,c__26605__auto__,i__89084);
cljs.core.chunk_append.call(null,b__89085,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__89117 = (i__89084 + (1));
i__89084 = G__89117;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89085),loom$graph$iter__89080_$_iter__89082.call(null,cljs.core.chunk_rest.call(null,s__89083__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89085),null);
}
} else {
var nbr = cljs.core.first.call(null,s__89083__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__89080_$_iter__89082.call(null,cljs.core.rest.call(null,s__89083__$2)));
}
} else {
return null;
}
break;
}
});})(s__89081__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__89081__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,loom$graph$iter__89080.call(null,cljs.core.rest.call(null,s__89081__$1)));
} else {
var G__89121 = cljs.core.rest.call(null,s__89081__$1);
s__89081__$1 = G__89121;
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
return iter__26607__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__26607__auto__ = ((function (g__$1){
return (function loom$graph$iter__89091(s__89092){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__89092__$1 = s__89092;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89092__$1);
if(temp__4657__auto__){
var s__89092__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89092__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__89092__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__89094 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__89093 = (0);
while(true){
if((i__89093 < size__26606__auto__)){
var n2 = cljs.core._nth.call(null,c__26605__auto__,i__89093);
cljs.core.chunk_append.call(null,b__89094,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__89127 = (i__89093 + (1));
i__89093 = G__89127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89094),loom$graph$iter__89091.call(null,cljs.core.chunk_rest.call(null,s__89092__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89094),null);
}
} else {
var n2 = cljs.core.first.call(null,s__89092__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__89091.call(null,cljs.core.rest.call(null,s__89092__$2)));
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
return iter__26607__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26449__auto__,k__26450__auto__){
var self__ = this;
var this__26449__auto____$1 = this;
return cljs.core._lookup.call(null,this__26449__auto____$1,k__26450__auto__,null);
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26451__auto__,k89077,else__26452__auto__){
var self__ = this;
var this__26451__auto____$1 = this;
var G__89100 = (((k89077 instanceof cljs.core.Keyword))?k89077.fqn:null);
switch (G__89100) {
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
return cljs.core.get.call(null,self__.__extmap,k89077,else__26452__auto__);

}
});

loom.graph.FlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26463__auto__,writer__26464__auto__,opts__26465__auto__){
var self__ = this;
var this__26463__auto____$1 = this;
var pr_pair__26466__auto__ = ((function (this__26463__auto____$1){
return (function (keyval__26467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26464__auto__,cljs.core.pr_writer,""," ","",opts__26465__auto__,keyval__26467__auto__);
});})(this__26463__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26464__auto__,pr_pair__26466__auto__,"#loom.graph.FlyDigraph{",", ","}",opts__26465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__89076){
var self__ = this;
var G__89076__$1 = this;
return (new cljs.core.RecordIter((0),G__89076__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.FlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26447__auto__){
var self__ = this;
var this__26447__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26443__auto__){
var self__ = this;
var this__26443__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26453__auto__){
var self__ = this;
var this__26453__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26444__auto__){
var self__ = this;
var this__26444__auto____$1 = this;
var h__26262__auto__ = self__.__hash;
if(!((h__26262__auto__ == null))){
return h__26262__auto__;
} else {
var h__26262__auto____$1 = cljs.core.hash_imap.call(null,this__26444__auto____$1);
self__.__hash = h__26262__auto____$1;

return h__26262__auto____$1;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26445__auto__,other__26446__auto__){
var self__ = this;
var this__26445__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25815__auto__ = other__26446__auto__;
if(cljs.core.truth_(and__25815__auto__)){
var and__25815__auto____$1 = (this__26445__auto____$1.constructor === other__26446__auto__.constructor);
if(and__25815__auto____$1){
return cljs.core.equiv_map.call(null,this__26445__auto____$1,other__26446__auto__);
} else {
return and__25815__auto____$1;
}
} else {
return and__25815__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26458__auto__,k__26459__auto__){
var self__ = this;
var this__26458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__26459__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26458__auto____$1),self__.__meta),k__26459__auto__);
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26459__auto__)),null));
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26456__auto__,k__26457__auto__,G__89076){
var self__ = this;
var this__26456__auto____$1 = this;
var pred__89104 = cljs.core.keyword_identical_QMARK_;
var expr__89105 = k__26457__auto__;
if(cljs.core.truth_(pred__89104.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__89105))){
return (new loom.graph.FlyDigraph(G__89076,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89104.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__89105))){
return (new loom.graph.FlyDigraph(self__.fnodes,G__89076,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89104.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__89105))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,G__89076,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89104.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__89105))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__89076,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89104.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__89105))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__89076,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26457__auto__,G__89076),null));
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

loom.graph.FlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26461__auto__){
var self__ = this;
var this__26461__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26448__auto__,G__89076){
var self__ = this;
var this__26448__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,G__89076,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26454__auto__,entry__26455__auto__){
var self__ = this;
var this__26454__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26455__auto__)){
return cljs.core._assoc.call(null,this__26454__auto____$1,cljs.core._nth.call(null,entry__26455__auto__,(0)),cljs.core._nth.call(null,entry__26455__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26454__auto____$1,entry__26455__auto__);
}
});

loom.graph.FlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyDigraph.cljs$lang$type = true;

loom.graph.FlyDigraph.cljs$lang$ctorPrSeq = (function (this__26483__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/FlyDigraph");
});

loom.graph.FlyDigraph.cljs$lang$ctorPrWriter = (function (this__26483__auto__,writer__26484__auto__){
return cljs.core._write.call(null,writer__26484__auto__,"loom.graph/FlyDigraph");
});

loom.graph.__GT_FlyDigraph = (function loom$graph$__GT_FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start){
return (new loom.graph.FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start,null,null,null));
});

loom.graph.map__GT_FlyDigraph = (function loom$graph$map__GT_FlyDigraph(G__89078){
return (new loom.graph.FlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__89078),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__89078),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__89078),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__89078),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__89078),null,cljs.core.dissoc.call(null,G__89078,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__25827__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
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
var iter__26607__auto__ = ((function (g__$1){
return (function loom$graph$iter__89144(s__89145){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__89145__$1 = s__89145;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89145__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__26603__auto__ = ((function (s__89145__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__89144_$_iter__89146(s__89147){
return (new cljs.core.LazySeq(null,((function (s__89145__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__89147__$1 = s__89147;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__89147__$1);
if(temp__4657__auto____$1){
var s__89147__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89147__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__89147__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__89149 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__89148 = (0);
while(true){
if((i__89148 < size__26606__auto__)){
var nbr = cljs.core._nth.call(null,c__26605__auto__,i__89148);
cljs.core.chunk_append.call(null,b__89149,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__89236 = (i__89148 + (1));
i__89148 = G__89236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89149),loom$graph$iter__89144_$_iter__89146.call(null,cljs.core.chunk_rest.call(null,s__89147__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89149),null);
}
} else {
var nbr = cljs.core.first.call(null,s__89147__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__89144_$_iter__89146.call(null,cljs.core.rest.call(null,s__89147__$2)));
}
} else {
return null;
}
break;
}
});})(s__89145__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__89145__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,loom$graph$iter__89144.call(null,cljs.core.rest.call(null,s__89145__$1)));
} else {
var G__89277 = cljs.core.rest.call(null,s__89145__$1);
s__89145__$1 = G__89277;
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
return iter__26607__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__26607__auto__ = ((function (g__$1){
return (function loom$graph$iter__89154(s__89155){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__89155__$1 = s__89155;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89155__$1);
if(temp__4657__auto__){
var s__89155__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89155__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__89155__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__89157 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__89156 = (0);
while(true){
if((i__89156 < size__26606__auto__)){
var n2 = cljs.core._nth.call(null,c__26605__auto__,i__89156);
cljs.core.chunk_append.call(null,b__89157,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__89303 = (i__89156 + (1));
i__89156 = G__89303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89157),loom$graph$iter__89154.call(null,cljs.core.chunk_rest.call(null,s__89155__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89157),null);
}
} else {
var n2 = cljs.core.first.call(null,s__89155__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__89154.call(null,cljs.core.rest.call(null,s__89155__$2)));
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
return iter__26607__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26449__auto__,k__26450__auto__){
var self__ = this;
var this__26449__auto____$1 = this;
return cljs.core._lookup.call(null,this__26449__auto____$1,k__26450__auto__,null);
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26451__auto__,k89142,else__26452__auto__){
var self__ = this;
var this__26451__auto____$1 = this;
var G__89166 = (((k89142 instanceof cljs.core.Keyword))?k89142.fqn:null);
switch (G__89166) {
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
return cljs.core.get.call(null,self__.__extmap,k89142,else__26452__auto__);

}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26463__auto__,writer__26464__auto__,opts__26465__auto__){
var self__ = this;
var this__26463__auto____$1 = this;
var pr_pair__26466__auto__ = ((function (this__26463__auto____$1){
return (function (keyval__26467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26464__auto__,cljs.core.pr_writer,""," ","",opts__26465__auto__,keyval__26467__auto__);
});})(this__26463__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26464__auto__,pr_pair__26466__auto__,"#loom.graph.WeightedFlyGraph{",", ","}",opts__26465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__89141){
var self__ = this;
var G__89141__$1 = this;
return (new cljs.core.RecordIter((0),G__89141__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26447__auto__){
var self__ = this;
var this__26447__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26443__auto__){
var self__ = this;
var this__26443__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26453__auto__){
var self__ = this;
var this__26453__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26444__auto__){
var self__ = this;
var this__26444__auto____$1 = this;
var h__26262__auto__ = self__.__hash;
if(!((h__26262__auto__ == null))){
return h__26262__auto__;
} else {
var h__26262__auto____$1 = cljs.core.hash_imap.call(null,this__26444__auto____$1);
self__.__hash = h__26262__auto____$1;

return h__26262__auto____$1;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26445__auto__,other__26446__auto__){
var self__ = this;
var this__26445__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25815__auto__ = other__26446__auto__;
if(cljs.core.truth_(and__25815__auto__)){
var and__25815__auto____$1 = (this__26445__auto____$1.constructor === other__26446__auto__.constructor);
if(and__25815__auto____$1){
return cljs.core.equiv_map.call(null,this__26445__auto____$1,other__26446__auto__);
} else {
return and__25815__auto____$1;
}
} else {
return and__25815__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26458__auto__,k__26459__auto__){
var self__ = this;
var this__26458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null], null), null),k__26459__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26458__auto____$1),self__.__meta),k__26459__auto__);
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26459__auto__)),null));
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26456__auto__,k__26457__auto__,G__89141){
var self__ = this;
var this__26456__auto____$1 = this;
var pred__89171 = cljs.core.keyword_identical_QMARK_;
var expr__89172 = k__26457__auto__;
if(cljs.core.truth_(pred__89171.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__89172))){
return (new loom.graph.WeightedFlyGraph(G__89141,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89171.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__89172))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,G__89141,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89171.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__89172))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,G__89141,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89171.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__89172))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__89141,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89171.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__89172))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,G__89141,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26457__auto__,G__89141),null));
}
}
}
}
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26461__auto__){
var self__ = this;
var this__26461__auto____$1 = this;
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

loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26448__auto__,G__89141){
var self__ = this;
var this__26448__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,G__89141,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26454__auto__,entry__26455__auto__){
var self__ = this;
var this__26454__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26455__auto__)){
return cljs.core._assoc.call(null,this__26454__auto____$1,cljs.core._nth.call(null,entry__26455__auto__,(0)),cljs.core._nth.call(null,entry__26455__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26454__auto____$1,entry__26455__auto__);
}
});

loom.graph.WeightedFlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyGraph.cljs$lang$type = true;

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrSeq = (function (this__26483__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/WeightedFlyGraph");
});

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrWriter = (function (this__26483__auto__,writer__26484__auto__){
return cljs.core._write.call(null,writer__26484__auto__,"loom.graph/WeightedFlyGraph");
});

loom.graph.__GT_WeightedFlyGraph = (function loom$graph$__GT_WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start){
return (new loom.graph.WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start,null,null,null));
});

loom.graph.map__GT_WeightedFlyGraph = (function loom$graph$map__GT_WeightedFlyGraph(G__89143){
return (new loom.graph.WeightedFlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__89143),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__89143),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__89143),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__89143),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__89143),null,cljs.core.dissoc.call(null,G__89143,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__25827__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
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
var iter__26607__auto__ = ((function (g__$1){
return (function loom$graph$iter__89481(s__89482){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__89482__$1 = s__89482;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89482__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__26603__auto__ = ((function (s__89482__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__89481_$_iter__89483(s__89484){
return (new cljs.core.LazySeq(null,((function (s__89482__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__89484__$1 = s__89484;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__89484__$1);
if(temp__4657__auto____$1){
var s__89484__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89484__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__89484__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__89486 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__89485 = (0);
while(true){
if((i__89485 < size__26606__auto__)){
var nbr = cljs.core._nth.call(null,c__26605__auto__,i__89485);
cljs.core.chunk_append.call(null,b__89486,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__89521 = (i__89485 + (1));
i__89485 = G__89521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89486),loom$graph$iter__89481_$_iter__89483.call(null,cljs.core.chunk_rest.call(null,s__89484__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89486),null);
}
} else {
var nbr = cljs.core.first.call(null,s__89484__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__89481_$_iter__89483.call(null,cljs.core.rest.call(null,s__89484__$2)));
}
} else {
return null;
}
break;
}
});})(s__89482__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__89482__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,loom$graph$iter__89481.call(null,cljs.core.rest.call(null,s__89482__$1)));
} else {
var G__89522 = cljs.core.rest.call(null,s__89482__$1);
s__89482__$1 = G__89522;
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
return iter__26607__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__26607__auto__ = ((function (g__$1){
return (function loom$graph$iter__89512(s__89513){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__89513__$1 = s__89513;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89513__$1);
if(temp__4657__auto__){
var s__89513__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89513__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__89513__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__89515 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__89514 = (0);
while(true){
if((i__89514 < size__26606__auto__)){
var n2 = cljs.core._nth.call(null,c__26605__auto__,i__89514);
cljs.core.chunk_append.call(null,b__89515,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__89527 = (i__89514 + (1));
i__89514 = G__89527;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89515),loom$graph$iter__89512.call(null,cljs.core.chunk_rest.call(null,s__89513__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89515),null);
}
} else {
var n2 = cljs.core.first.call(null,s__89513__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__89512.call(null,cljs.core.rest.call(null,s__89513__$2)));
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
return iter__26607__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26449__auto__,k__26450__auto__){
var self__ = this;
var this__26449__auto____$1 = this;
return cljs.core._lookup.call(null,this__26449__auto____$1,k__26450__auto__,null);
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26451__auto__,k89470,else__26452__auto__){
var self__ = this;
var this__26451__auto____$1 = this;
var G__89517 = (((k89470 instanceof cljs.core.Keyword))?k89470.fqn:null);
switch (G__89517) {
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
return cljs.core.get.call(null,self__.__extmap,k89470,else__26452__auto__);

}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26463__auto__,writer__26464__auto__,opts__26465__auto__){
var self__ = this;
var this__26463__auto____$1 = this;
var pr_pair__26466__auto__ = ((function (this__26463__auto____$1){
return (function (keyval__26467__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26464__auto__,cljs.core.pr_writer,""," ","",opts__26465__auto__,keyval__26467__auto__);
});})(this__26463__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26464__auto__,pr_pair__26466__auto__,"#loom.graph.WeightedFlyDigraph{",", ","}",opts__26465__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__89469){
var self__ = this;
var G__89469__$1 = this;
return (new cljs.core.RecordIter((0),G__89469__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26447__auto__){
var self__ = this;
var this__26447__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26443__auto__){
var self__ = this;
var this__26443__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26453__auto__){
var self__ = this;
var this__26453__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26444__auto__){
var self__ = this;
var this__26444__auto____$1 = this;
var h__26262__auto__ = self__.__hash;
if(!((h__26262__auto__ == null))){
return h__26262__auto__;
} else {
var h__26262__auto____$1 = cljs.core.hash_imap.call(null,this__26444__auto____$1);
self__.__hash = h__26262__auto____$1;

return h__26262__auto____$1;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26445__auto__,other__26446__auto__){
var self__ = this;
var this__26445__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25815__auto__ = other__26446__auto__;
if(cljs.core.truth_(and__25815__auto__)){
var and__25815__auto____$1 = (this__26445__auto____$1.constructor === other__26446__auto__.constructor);
if(and__25815__auto____$1){
return cljs.core.equiv_map.call(null,this__26445__auto____$1,other__26446__auto__);
} else {
return and__25815__auto____$1;
}
} else {
return and__25815__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26458__auto__,k__26459__auto__){
var self__ = this;
var this__26458__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__26459__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26458__auto____$1),self__.__meta),k__26459__auto__);
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26459__auto__)),null));
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26456__auto__,k__26457__auto__,G__89469){
var self__ = this;
var this__26456__auto____$1 = this;
var pred__89518 = cljs.core.keyword_identical_QMARK_;
var expr__89519 = k__26457__auto__;
if(cljs.core.truth_(pred__89518.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__89519))){
return (new loom.graph.WeightedFlyDigraph(G__89469,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89518.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__89519))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,G__89469,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89518.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__89519))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,G__89469,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89518.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__89519))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__89469,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89518.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__89519))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__89469,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89518.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__89519))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,G__89469,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26457__auto__,G__89469),null));
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

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26461__auto__){
var self__ = this;
var this__26461__auto____$1 = this;
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

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26448__auto__,G__89469){
var self__ = this;
var this__26448__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,G__89469,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26454__auto__,entry__26455__auto__){
var self__ = this;
var this__26454__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26455__auto__)){
return cljs.core._assoc.call(null,this__26454__auto____$1,cljs.core._nth.call(null,entry__26455__auto__,(0)),cljs.core._nth.call(null,entry__26455__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26454__auto____$1,entry__26455__auto__);
}
});

loom.graph.WeightedFlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyDigraph.cljs$lang$type = true;

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrSeq = (function (this__26483__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/WeightedFlyDigraph");
});

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrWriter = (function (this__26483__auto__,writer__26484__auto__){
return cljs.core._write.call(null,writer__26484__auto__,"loom.graph/WeightedFlyDigraph");
});

loom.graph.__GT_WeightedFlyDigraph = (function loom$graph$__GT_WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start){
return (new loom.graph.WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start,null,null,null));
});

loom.graph.map__GT_WeightedFlyDigraph = (function loom$graph$map__GT_WeightedFlyDigraph(G__89473){
return (new loom.graph.WeightedFlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__89473),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__89473),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__89473),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__89473),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__89473),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__89473),null,cljs.core.dissoc.call(null,G__89473,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
var args__26903__auto__ = [];
var len__26896__auto___89570 = arguments.length;
var i__26897__auto___89571 = (0);
while(true){
if((i__26897__auto___89571 < len__26896__auto___89570)){
args__26903__auto__.push((arguments[i__26897__auto___89571]));

var G__89572 = (i__26897__auto___89571 + (1));
i__26897__auto___89571 = G__89572;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((1) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((1)),(0),null)):null);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26904__auto__);
});

loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),nodes));
});

loom.graph.add_path.cljs$lang$maxFixedArity = (1);

loom.graph.add_path.cljs$lang$applyTo = (function (seq89567){
var G__89568 = cljs.core.first.call(null,seq89567);
var seq89567__$1 = cljs.core.next.call(null,seq89567);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic(G__89568,seq89567__$1);
});
/**
 * Adds a cycle of edges connecting the given nodes in order
 */
loom.graph.add_cycle = (function loom$graph$add_cycle(var_args){
var args__26903__auto__ = [];
var len__26896__auto___89579 = arguments.length;
var i__26897__auto___89580 = (0);
while(true){
if((i__26897__auto___89580 < len__26896__auto___89579)){
args__26903__auto__.push((arguments[i__26897__auto___89580]));

var G__89581 = (i__26897__auto___89580 + (1));
i__26897__auto___89580 = G__89581;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((1) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((1)),(0),null)):null);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26904__auto__);
});

loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),cljs.core.concat.call(null,nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nodes)], null))));
});

loom.graph.add_cycle.cljs$lang$maxFixedArity = (1);

loom.graph.add_cycle.cljs$lang$applyTo = (function (seq89575){
var G__89576 = cljs.core.first.call(null,seq89575);
var seq89575__$1 = cljs.core.next.call(null,seq89575);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic(G__89576,seq89575__$1);
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
var args__26903__auto__ = [];
var len__26896__auto___89864 = arguments.length;
var i__26897__auto___89865 = (0);
while(true){
if((i__26897__auto___89865 < len__26896__auto___89864)){
args__26903__auto__.push((arguments[i__26897__auto___89865]));

var G__89868 = (i__26897__auto___89865 + (1));
i__26897__auto___89865 = G__89868;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((1) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((1)),(0),null)):null);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26904__auto__);
});

loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,inits){
var build = (function loom$graph$build(g__$1,init){
if(cljs.core.truth_(loom.graph.graph_QMARK_.call(null,init))){
if(cljs.core.truth_((function (){var and__25815__auto__ = loom.graph.weighted_QMARK_.call(null,g__$1);
if(cljs.core.truth_(and__25815__auto__)){
return loom.graph.weighted_QMARK_.call(null,init);
} else {
return and__25815__auto__;
}
})())){
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,loom.graph.add_edges,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),(function (){var iter__26607__auto__ = (function loom$graph$build_$_iter__89825(s__89826){
return (new cljs.core.LazySeq(null,(function (){
var s__89826__$1 = s__89826;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89826__$1);
if(temp__4657__auto__){
var s__89826__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89826__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__89826__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__89828 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__89827 = (0);
while(true){
if((i__89827 < size__26606__auto__)){
var vec__89833 = cljs.core._nth.call(null,c__26605__auto__,i__89827);
var n1 = cljs.core.nth.call(null,vec__89833,(0),null);
var n2 = cljs.core.nth.call(null,vec__89833,(1),null);
cljs.core.chunk_append.call(null,b__89828,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null));

var G__89875 = (i__89827 + (1));
i__89827 = G__89875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89828),loom$graph$build_$_iter__89825.call(null,cljs.core.chunk_rest.call(null,s__89826__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89828),null);
}
} else {
var vec__89834 = cljs.core.first.call(null,s__89826__$2);
var n1 = cljs.core.nth.call(null,vec__89834,(0),null);
var n2 = cljs.core.nth.call(null,vec__89834,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null),loom$graph$build_$_iter__89825.call(null,cljs.core.rest.call(null,s__89826__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26607__auto__.call(null,loom.graph.edges.call(null,init));
})()),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
} else {
return cljs.core.assoc.call(null,loom.graph.add_edges_STAR_.call(null,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),loom.graph.edges.call(null,init)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
}
} else {
if(cljs.core.map_QMARK_.call(null,init)){
var es = ((cljs.core.map_QMARK_.call(null,cljs.core.val.call(null,cljs.core.first.call(null,init))))?(function (){var iter__26607__auto__ = (function loom$graph$build_$_iter__89835(s__89836){
return (new cljs.core.LazySeq(null,(function (){
var s__89836__$1 = s__89836;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89836__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__89846 = cljs.core.first.call(null,xs__5205__auto__);
var n = cljs.core.nth.call(null,vec__89846,(0),null);
var nbrs = cljs.core.nth.call(null,vec__89846,(1),null);
var iterys__26603__auto__ = ((function (s__89836__$1,vec__89846,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function loom$graph$build_$_iter__89835_$_iter__89837(s__89838){
return (new cljs.core.LazySeq(null,((function (s__89836__$1,vec__89846,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__89838__$1 = s__89838;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__89838__$1);
if(temp__4657__auto____$1){
var s__89838__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89838__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__89838__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__89840 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__89839 = (0);
while(true){
if((i__89839 < size__26606__auto__)){
var vec__89849 = cljs.core._nth.call(null,c__26605__auto__,i__89839);
var nbr = cljs.core.nth.call(null,vec__89849,(0),null);
var wt = cljs.core.nth.call(null,vec__89849,(1),null);
cljs.core.chunk_append.call(null,b__89840,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__89882 = (i__89839 + (1));
i__89839 = G__89882;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89840),loom$graph$build_$_iter__89835_$_iter__89837.call(null,cljs.core.chunk_rest.call(null,s__89838__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89840),null);
}
} else {
var vec__89850 = cljs.core.first.call(null,s__89838__$2);
var nbr = cljs.core.nth.call(null,vec__89850,(0),null);
var wt = cljs.core.nth.call(null,vec__89850,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),loom$graph$build_$_iter__89835_$_iter__89837.call(null,cljs.core.rest.call(null,s__89838__$2)));
}
} else {
return null;
}
break;
}
});})(s__89836__$1,vec__89846,n,nbrs,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__89836__$1,vec__89846,n,nbrs,xs__5205__auto__,temp__4657__auto__))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,nbrs));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,loom$graph$build_$_iter__89835.call(null,cljs.core.rest.call(null,s__89836__$1)));
} else {
var G__89886 = cljs.core.rest.call(null,s__89836__$1);
s__89836__$1 = G__89886;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26607__auto__.call(null,init);
})():(function (){var iter__26607__auto__ = (function loom$graph$build_$_iter__89851(s__89852){
return (new cljs.core.LazySeq(null,(function (){
var s__89852__$1 = s__89852;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__89852__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__89859 = cljs.core.first.call(null,xs__5205__auto__);
var n = cljs.core.nth.call(null,vec__89859,(0),null);
var nbrs = cljs.core.nth.call(null,vec__89859,(1),null);
var iterys__26603__auto__ = ((function (s__89852__$1,vec__89859,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function loom$graph$build_$_iter__89851_$_iter__89853(s__89854){
return (new cljs.core.LazySeq(null,((function (s__89852__$1,vec__89859,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__89854__$1 = s__89854;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__89854__$1);
if(temp__4657__auto____$1){
var s__89854__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89854__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__89854__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__89856 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__89855 = (0);
while(true){
if((i__89855 < size__26606__auto__)){
var nbr = cljs.core._nth.call(null,c__26605__auto__,i__89855);
cljs.core.chunk_append.call(null,b__89856,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__89890 = (i__89855 + (1));
i__89855 = G__89890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89856),loom$graph$build_$_iter__89851_$_iter__89853.call(null,cljs.core.chunk_rest.call(null,s__89854__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89856),null);
}
} else {
var nbr = cljs.core.first.call(null,s__89854__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$build_$_iter__89851_$_iter__89853.call(null,cljs.core.rest.call(null,s__89854__$2)));
}
} else {
return null;
}
break;
}
});})(s__89852__$1,vec__89859,n,nbrs,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__89852__$1,vec__89859,n,nbrs,xs__5205__auto__,temp__4657__auto__))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,nbrs));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,loom$graph$build_$_iter__89851.call(null,cljs.core.rest.call(null,s__89852__$1)));
} else {
var G__89891 = cljs.core.rest.call(null,s__89852__$1);
s__89852__$1 = G__89891;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26607__auto__.call(null,init);
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

loom.graph.build_graph.cljs$lang$applyTo = (function (seq89592){
var G__89593 = cljs.core.first.call(null,seq89592);
var seq89592__$1 = cljs.core.next.call(null,seq89592);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic(G__89593,seq89592__$1);
});
/**
 * Creates an unweighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.graph = (function loom$graph$graph(var_args){
var args__26903__auto__ = [];
var len__26896__auto___89897 = arguments.length;
var i__26897__auto___89898 = (0);
while(true){
if((i__26897__auto___89898 < len__26896__auto___89897)){
args__26903__auto__.push((arguments[i__26897__auto___89898]));

var G__89899 = (i__26897__auto___89898 + (1));
i__26897__auto___89898 = G__89899;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((0) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((0)),(0),null)):null);
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(argseq__26904__auto__);
});

loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.graph.cljs$lang$maxFixedArity = (0);

loom.graph.graph.cljs$lang$applyTo = (function (seq89894){
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89894));
});
/**
 * Creates an unweighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.digraph = (function loom$graph$digraph(var_args){
var args__26903__auto__ = [];
var len__26896__auto___89905 = arguments.length;
var i__26897__auto___89906 = (0);
while(true){
if((i__26897__auto___89906 < len__26896__auto___89905)){
args__26903__auto__.push((arguments[i__26897__auto___89906]));

var G__89908 = (i__26897__auto___89906 + (1));
i__26897__auto___89906 = G__89908;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((0) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((0)),(0),null)):null);
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__26904__auto__);
});

loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.digraph.cljs$lang$maxFixedArity = (0);

loom.graph.digraph.cljs$lang$applyTo = (function (seq89902){
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89902));
});
/**
 * Creates an weighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_graph = (function loom$graph$weighted_graph(var_args){
var args__26903__auto__ = [];
var len__26896__auto___89914 = arguments.length;
var i__26897__auto___89915 = (0);
while(true){
if((i__26897__auto___89915 < len__26896__auto___89914)){
args__26903__auto__.push((arguments[i__26897__auto___89915]));

var G__89916 = (i__26897__auto___89915 + (1));
i__26897__auto___89915 = G__89916;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((0) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__26904__auto__);
});

loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_graph.cljs$lang$maxFixedArity = (0);

loom.graph.weighted_graph.cljs$lang$applyTo = (function (seq89912){
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89912));
});
/**
 * Creates an weighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_digraph = (function loom$graph$weighted_digraph(var_args){
var args__26903__auto__ = [];
var len__26896__auto___89925 = arguments.length;
var i__26897__auto___89926 = (0);
while(true){
if((i__26897__auto___89926 < len__26896__auto___89925)){
args__26903__auto__.push((arguments[i__26897__auto___89926]));

var G__89927 = (i__26897__auto___89926 + (1));
i__26897__auto___89926 = G__89927;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((0) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__26904__auto__);
});

loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_digraph.cljs$lang$maxFixedArity = (0);

loom.graph.weighted_digraph.cljs$lang$applyTo = (function (seq89919){
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89919));
});
/**
 * Creates a read-only, ad-hoc graph which uses the provided functions
 *   to return values for nodes, edges, etc. If any members are not functions,
 *   they will be returned as-is. Edges can be inferred if nodes and
 *   successors are provided. Nodes and edges can be inferred if successors and
 *   start are provided.
 */
loom.graph.fly_graph = (function loom$graph$fly_graph(var_args){
var args__26903__auto__ = [];
var len__26896__auto___89943 = arguments.length;
var i__26897__auto___89946 = (0);
while(true){
if((i__26897__auto___89946 < len__26896__auto___89943)){
args__26903__auto__.push((arguments[i__26897__auto___89946]));

var G__89960 = (i__26897__auto___89946 + (1));
i__26897__auto___89946 = G__89960;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((0) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((0)),(0),null)):null);
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__26904__auto__);
});

loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = (function (p__89932){
var map__89933 = p__89932;
var map__89933__$1 = ((((!((map__89933 == null)))?((((map__89933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89933):map__89933);
var nodes = cljs.core.get.call(null,map__89933__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__89933__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var successors = cljs.core.get.call(null,map__89933__$1,new cljs.core.Keyword(null,"successors","successors",-1239296414));
var predecessors = cljs.core.get.call(null,map__89933__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var weight = cljs.core.get.call(null,map__89933__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var start = cljs.core.get.call(null,map__89933__$1,new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.truth_((function (){var and__25815__auto__ = predecessors;
if(cljs.core.truth_(and__25815__auto__)){
return weight;
} else {
return and__25815__auto__;
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

loom.graph.fly_graph.cljs$lang$applyTo = (function (seq89930){
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89930));
});
