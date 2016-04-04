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
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.nodes[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g);
} else {
var m__36056__auto____$1 = (loom.graph.nodes["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g);
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
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.edges[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g);
} else {
var m__36056__auto____$1 = (loom.graph.edges["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g);
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
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.has_node_QMARK_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g,node);
} else {
var m__36056__auto____$1 = (loom.graph.has_node_QMARK_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g,node);
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
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.has_edge_QMARK_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g,n1,n2);
} else {
var m__36056__auto____$1 = (loom.graph.has_edge_QMARK_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g,n1,n2);
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
var args285833 = [];
var len__36461__auto___285876 = arguments.length;
var i__36462__auto___285877 = (0);
while(true){
if((i__36462__auto___285877 < len__36461__auto___285876)){
args285833.push((arguments[i__36462__auto___285877]));

var G__285880 = (i__36462__auto___285877 + (1));
i__36462__auto___285877 = G__285880;
continue;
} else {
}
break;
}

var G__285835 = args285833.length;
switch (G__285835) {
case 1:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args285833.length)].join('')));

}
});

loom.graph.successors.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Graph$successors$arity$1 == null)))){
return g.loom$graph$Graph$successors$arity$1(g);
} else {
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.successors[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g);
} else {
var m__36056__auto____$1 = (loom.graph.successors["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g);
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
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.successors[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g,node);
} else {
var m__36056__auto____$1 = (loom.graph.successors["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g,node);
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
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.out_degree[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g,node);
} else {
var m__36056__auto____$1 = (loom.graph.out_degree["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g,node);
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
var args285848 = [];
var len__36461__auto___285902 = arguments.length;
var i__36462__auto___285903 = (0);
while(true){
if((i__36462__auto___285903 < len__36461__auto___285902)){
args285848.push((arguments[i__36462__auto___285903]));

var G__285907 = (i__36462__auto___285903 + (1));
i__36462__auto___285903 = G__285907;
continue;
} else {
}
break;
}

var G__285850 = args285848.length;
switch (G__285850) {
case 1:
return loom.graph.out_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.out_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args285848.length)].join('')));

}
});

loom.graph.out_edges.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Graph$out_edges$arity$1 == null)))){
return g.loom$graph$Graph$out_edges$arity$1(g);
} else {
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.out_edges[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g);
} else {
var m__36056__auto____$1 = (loom.graph.out_edges["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g);
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
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.out_edges[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g,node);
} else {
var m__36056__auto____$1 = (loom.graph.out_edges["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g,node);
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
var args285917 = [];
var len__36461__auto___285973 = arguments.length;
var i__36462__auto___285974 = (0);
while(true){
if((i__36462__auto___285974 < len__36461__auto___285973)){
args285917.push((arguments[i__36462__auto___285974]));

var G__285975 = (i__36462__auto___285974 + (1));
i__36462__auto___285974 = G__285975;
continue;
} else {
}
break;
}

var G__285934 = args285917.length;
switch (G__285934) {
case 1:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args285917.length)].join('')));

}
});

loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Digraph$predecessors$arity$1 == null)))){
return g.loom$graph$Digraph$predecessors$arity$1(g);
} else {
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.predecessors[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g);
} else {
var m__36056__auto____$1 = (loom.graph.predecessors["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g);
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
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.predecessors[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g,node);
} else {
var m__36056__auto____$1 = (loom.graph.predecessors["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g,node);
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
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.in_degree[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g,node);
} else {
var m__36056__auto____$1 = (loom.graph.in_degree["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g,node);
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
var args285962 = [];
var len__36461__auto___286001 = arguments.length;
var i__36462__auto___286002 = (0);
while(true){
if((i__36462__auto___286002 < len__36461__auto___286001)){
args285962.push((arguments[i__36462__auto___286002]));

var G__286004 = (i__36462__auto___286002 + (1));
i__36462__auto___286002 = G__286004;
continue;
} else {
}
break;
}

var G__285967 = args285962.length;
switch (G__285967) {
case 1:
return loom.graph.in_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.in_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args285962.length)].join('')));

}
});

loom.graph.in_edges.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Digraph$in_edges$arity$1 == null)))){
return g.loom$graph$Digraph$in_edges$arity$1(g);
} else {
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.in_edges[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g);
} else {
var m__36056__auto____$1 = (loom.graph.in_edges["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g);
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
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.in_edges[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g,node);
} else {
var m__36056__auto____$1 = (loom.graph.in_edges["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g,node);
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
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.transpose[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g);
} else {
var m__36056__auto____$1 = (loom.graph.transpose["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g);
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
var args286041 = [];
var len__36461__auto___286052 = arguments.length;
var i__36462__auto___286053 = (0);
while(true){
if((i__36462__auto___286053 < len__36461__auto___286052)){
args286041.push((arguments[i__36462__auto___286053]));

var G__286056 = (i__36462__auto___286053 + (1));
i__36462__auto___286053 = G__286056;
continue;
} else {
}
break;
}

var G__286043 = args286041.length;
switch (G__286043) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286041.length)].join('')));

}
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$WeightedGraph$weight$arity$1 == null)))){
return g.loom$graph$WeightedGraph$weight$arity$1(g);
} else {
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.weight[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g);
} else {
var m__36056__auto____$1 = (loom.graph.weight["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g);
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
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.weight[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g,e);
} else {
var m__36056__auto____$1 = (loom.graph.weight["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g,e);
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
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.weight[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g,n1,n2);
} else {
var m__36056__auto____$1 = (loom.graph.weight["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g,n1,n2);
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
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.add_nodes_STAR_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g,nodes);
} else {
var m__36056__auto____$1 = (loom.graph.add_nodes_STAR_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g,nodes);
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
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.add_edges_STAR_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g,edges);
} else {
var m__36056__auto____$1 = (loom.graph.add_edges_STAR_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g,edges);
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
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.remove_nodes_STAR_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g,nodes);
} else {
var m__36056__auto____$1 = (loom.graph.remove_nodes_STAR_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g,nodes);
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
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.remove_edges_STAR_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g,edges);
} else {
var m__36056__auto____$1 = (loom.graph.remove_edges_STAR_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g,edges);
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
var x__36055__auto__ = (((g == null))?null:g);
var m__36056__auto__ = (loom.graph.remove_all[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,g);
} else {
var m__36056__auto____$1 = (loom.graph.remove_all["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,g);
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
var x__36055__auto__ = (((edge == null))?null:edge);
var m__36056__auto__ = (loom.graph.src[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,edge);
} else {
var m__36056__auto____$1 = (loom.graph.src["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,edge);
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
var x__36055__auto__ = (((edge == null))?null:edge);
var m__36056__auto__ = (loom.graph.dest[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,edge);
} else {
var m__36056__auto____$1 = (loom.graph.dest["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,edge);
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
var args__36468__auto__ = [];
var len__36461__auto___286183 = arguments.length;
var i__36462__auto___286184 = (0);
while(true){
if((i__36462__auto___286184 < len__36461__auto___286183)){
args__36468__auto__.push((arguments[i__36462__auto___286184]));

var G__286185 = (i__36462__auto___286184 + (1));
i__36462__auto___286184 = G__286185;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_nodes_STAR_.call(null,g,nodes);
});

loom.graph.add_nodes.cljs$lang$maxFixedArity = (1);

loom.graph.add_nodes.cljs$lang$applyTo = (function (seq286174){
var G__286175 = cljs.core.first.call(null,seq286174);
var seq286174__$1 = cljs.core.next.call(null,seq286174);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic(G__286175,seq286174__$1);
});
/**
 * Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].
 *   For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the
 *   latter defaulting to a weight of 1
 */
loom.graph.add_edges = (function loom$graph$add_edges(var_args){
var args__36468__auto__ = [];
var len__36461__auto___286194 = arguments.length;
var i__36462__auto___286195 = (0);
while(true){
if((i__36462__auto___286195 < len__36461__auto___286194)){
args__36468__auto__.push((arguments[i__36462__auto___286195]));

var G__286198 = (i__36462__auto___286195 + (1));
i__36462__auto___286195 = G__286198;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.add_edges_STAR_.call(null,g,edges);
});

loom.graph.add_edges.cljs$lang$maxFixedArity = (1);

loom.graph.add_edges.cljs$lang$applyTo = (function (seq286192){
var G__286193 = cljs.core.first.call(null,seq286192);
var seq286192__$1 = cljs.core.next.call(null,seq286192);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic(G__286193,seq286192__$1);
});
/**
 * Removes nodes from graph g
 */
loom.graph.remove_nodes = (function loom$graph$remove_nodes(var_args){
var args__36468__auto__ = [];
var len__36461__auto___286206 = arguments.length;
var i__36462__auto___286208 = (0);
while(true){
if((i__36462__auto___286208 < len__36461__auto___286206)){
args__36468__auto__.push((arguments[i__36462__auto___286208]));

var G__286213 = (i__36462__auto___286208 + (1));
i__36462__auto___286208 = G__286213;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.remove_nodes_STAR_.call(null,g,nodes);
});

loom.graph.remove_nodes.cljs$lang$maxFixedArity = (1);

loom.graph.remove_nodes.cljs$lang$applyTo = (function (seq286200){
var G__286201 = cljs.core.first.call(null,seq286200);
var seq286200__$1 = cljs.core.next.call(null,seq286200);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic(G__286201,seq286200__$1);
});
/**
 * Removes edges from graph g. Do not include weights
 */
loom.graph.remove_edges = (function loom$graph$remove_edges(var_args){
var args__36468__auto__ = [];
var len__36461__auto___286225 = arguments.length;
var i__36462__auto___286227 = (0);
while(true){
if((i__36462__auto___286227 < len__36461__auto___286225)){
args__36468__auto__.push((arguments[i__36462__auto___286227]));

var G__286234 = (i__36462__auto___286227 + (1));
i__36462__auto___286227 = G__286234;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.remove_edges_STAR_.call(null,g,edges);
});

loom.graph.remove_edges.cljs$lang$maxFixedArity = (1);

loom.graph.remove_edges.cljs$lang$applyTo = (function (seq286219){
var G__286220 = cljs.core.first.call(null,seq286219);
var seq286219__$1 = cljs.core.next.call(null,seq286219);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic(G__286220,seq286219__$1);
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
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),(function (p1__286269_SHARP_){
return cljs.core.apply.call(null,remove_fn,p1__286269_SHARP_,nodes);
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
var iter__36172__auto__ = ((function (g__$1){
return (function loom$graph$iter__286292(s__286293){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__286293__$1 = s__286293;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__286293__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36168__auto__ = ((function (s__286293__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__286292_$_iter__286294(s__286295){
return (new cljs.core.LazySeq(null,((function (s__286293__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__286295__$1 = s__286295;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__286295__$1);
if(temp__4657__auto____$1){
var s__286295__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__286295__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__286295__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__286297 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__286296 = (0);
while(true){
if((i__286296 < size__36171__auto__)){
var e = cljs.core._nth.call(null,c__36170__auto__,i__286296);
cljs.core.chunk_append.call(null,b__286297,e);

var G__286430 = (i__286296 + (1));
i__286296 = G__286430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__286297),loom$graph$iter__286292_$_iter__286294.call(null,cljs.core.chunk_rest.call(null,s__286295__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__286297),null);
}
} else {
var e = cljs.core.first.call(null,s__286295__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__286292_$_iter__286294.call(null,cljs.core.rest.call(null,s__286295__$2)));
}
} else {
return null;
}
break;
}
});})(s__286293__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__286293__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,loom$graph$iter__286292.call(null,cljs.core.rest.call(null,s__286293__$1)));
} else {
var G__286443 = cljs.core.rest.call(null,s__286293__$1);
s__286293__$1 = G__286443;
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
return iter__36172__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36172__auto__ = ((function (g__$1){
return (function loom$graph$iter__286325(s__286326){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__286326__$1 = s__286326;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__286326__$1);
if(temp__4657__auto__){
var s__286326__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__286326__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__286326__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__286328 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__286327 = (0);
while(true){
if((i__286327 < size__36171__auto__)){
var n2 = cljs.core._nth.call(null,c__36170__auto__,i__286327);
cljs.core.chunk_append.call(null,b__286328,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__286459 = (i__286327 + (1));
i__286327 = G__286459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__286328),loom$graph$iter__286325.call(null,cljs.core.chunk_rest.call(null,s__286326__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__286328),null);
}
} else {
var n2 = cljs.core.first.call(null,s__286326__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__286325.call(null,cljs.core.rest.call(null,s__286326__$2)));
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
return iter__36172__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36014__auto__,k__36015__auto__){
var self__ = this;
var this__36014__auto____$1 = this;
return cljs.core._lookup.call(null,this__36014__auto____$1,k__36015__auto__,null);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36016__auto__,k286283,else__36017__auto__){
var self__ = this;
var this__36016__auto____$1 = this;
var G__286372 = (((k286283 instanceof cljs.core.Keyword))?k286283.fqn:null);
switch (G__286372) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k286283,else__36017__auto__);

}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36028__auto__,writer__36029__auto__,opts__36030__auto__){
var self__ = this;
var this__36028__auto____$1 = this;
var pr_pair__36031__auto__ = ((function (this__36028__auto____$1){
return (function (keyval__36032__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36029__auto__,cljs.core.pr_writer,""," ","",opts__36030__auto__,keyval__36032__auto__);
});})(this__36028__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36029__auto__,pr_pair__36031__auto__,"#loom.graph.BasicEditableGraph{",", ","}",opts__36030__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__286282){
var self__ = this;
var G__286282__$1 = this;
return (new cljs.core.RecordIter((0),G__286282__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36012__auto__){
var self__ = this;
var this__36012__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36008__auto__){
var self__ = this;
var this__36008__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36018__auto__){
var self__ = this;
var this__36018__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36009__auto__){
var self__ = this;
var this__36009__auto____$1 = this;
var h__35827__auto__ = self__.__hash;
if(!((h__35827__auto__ == null))){
return h__35827__auto__;
} else {
var h__35827__auto____$1 = cljs.core.hash_imap.call(null,this__36009__auto____$1);
self__.__hash = h__35827__auto____$1;

return h__35827__auto____$1;
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36010__auto__,other__36011__auto__){
var self__ = this;
var this__36010__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35380__auto__ = other__36011__auto__;
if(cljs.core.truth_(and__35380__auto__)){
var and__35380__auto____$1 = (this__36010__auto____$1.constructor === other__36011__auto__.constructor);
if(and__35380__auto____$1){
return cljs.core.equiv_map.call(null,this__36010__auto____$1,other__36011__auto__);
} else {
return and__35380__auto____$1;
}
} else {
return and__35380__auto__;
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
return (function (g__$2,p__286392){
var vec__286393 = p__286392;
var n1 = cljs.core.nth.call(null,vec__286393,(0),null);
var n2 = cljs.core.nth.call(null,vec__286393,(1),null);
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
return (function (g__$2,p__286395){
var vec__286396 = p__286395;
var n1 = cljs.core.nth.call(null,vec__286396,(0),null);
var n2 = cljs.core.nth.call(null,vec__286396,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36023__auto__,k__36024__auto__){
var self__ = this;
var this__36023__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__36024__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36023__auto____$1),self__.__meta),k__36024__auto__);
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36024__auto__)),null));
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36021__auto__,k__36022__auto__,G__286282){
var self__ = this;
var this__36021__auto____$1 = this;
var pred__286407 = cljs.core.keyword_identical_QMARK_;
var expr__286408 = k__36022__auto__;
if(cljs.core.truth_(pred__286407.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__286408))){
return (new loom.graph.BasicEditableGraph(G__286282,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__286407.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__286408))){
return (new loom.graph.BasicEditableGraph(self__.nodeset,G__286282,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36022__auto__,G__286282),null));
}
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36026__auto__){
var self__ = this;
var this__36026__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36013__auto__,G__286282){
var self__ = this;
var this__36013__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,G__286282,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36019__auto__,entry__36020__auto__){
var self__ = this;
var this__36019__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36020__auto__)){
return cljs.core._assoc.call(null,this__36019__auto____$1,cljs.core._nth.call(null,entry__36020__auto__,(0)),cljs.core._nth.call(null,entry__36020__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36019__auto____$1,entry__36020__auto__);
}
});

loom.graph.BasicEditableGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableGraph.cljs$lang$type = true;

loom.graph.BasicEditableGraph.cljs$lang$ctorPrSeq = (function (this__36048__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableGraph");
});

loom.graph.BasicEditableGraph.cljs$lang$ctorPrWriter = (function (this__36048__auto__,writer__36049__auto__){
return cljs.core._write.call(null,writer__36049__auto__,"loom.graph/BasicEditableGraph");
});

loom.graph.__GT_BasicEditableGraph = (function loom$graph$__GT_BasicEditableGraph(nodeset,adj){
return (new loom.graph.BasicEditableGraph(nodeset,adj,null,null,null));
});

loom.graph.map__GT_BasicEditableGraph = (function loom$graph$map__GT_BasicEditableGraph(G__286286){
return (new loom.graph.BasicEditableGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__286286),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__286286),null,cljs.core.dissoc.call(null,G__286286,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)),null));
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
var iter__36172__auto__ = ((function (g__$1){
return (function loom$graph$iter__286732(s__286733){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__286733__$1 = s__286733;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__286733__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36168__auto__ = ((function (s__286733__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__286732_$_iter__286734(s__286735){
return (new cljs.core.LazySeq(null,((function (s__286733__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__286735__$1 = s__286735;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__286735__$1);
if(temp__4657__auto____$1){
var s__286735__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__286735__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__286735__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__286737 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__286736 = (0);
while(true){
if((i__286736 < size__36171__auto__)){
var e = cljs.core._nth.call(null,c__36170__auto__,i__286736);
cljs.core.chunk_append.call(null,b__286737,e);

var G__287013 = (i__286736 + (1));
i__286736 = G__287013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__286737),loom$graph$iter__286732_$_iter__286734.call(null,cljs.core.chunk_rest.call(null,s__286735__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__286737),null);
}
} else {
var e = cljs.core.first.call(null,s__286735__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__286732_$_iter__286734.call(null,cljs.core.rest.call(null,s__286735__$2)));
}
} else {
return null;
}
break;
}
});})(s__286733__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__286733__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,loom$graph$iter__286732.call(null,cljs.core.rest.call(null,s__286733__$1)));
} else {
var G__287026 = cljs.core.rest.call(null,s__286733__$1);
s__286733__$1 = G__287026;
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
return iter__36172__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36172__auto__ = ((function (g__$1){
return (function loom$graph$iter__286788(s__286789){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__286789__$1 = s__286789;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__286789__$1);
if(temp__4657__auto__){
var s__286789__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__286789__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__286789__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__286791 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__286790 = (0);
while(true){
if((i__286790 < size__36171__auto__)){
var n2 = cljs.core._nth.call(null,c__36170__auto__,i__286790);
cljs.core.chunk_append.call(null,b__286791,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__287050 = (i__286790 + (1));
i__286790 = G__287050;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__286791),loom$graph$iter__286788.call(null,cljs.core.chunk_rest.call(null,s__286789__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__286791),null);
}
} else {
var n2 = cljs.core.first.call(null,s__286789__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__286788.call(null,cljs.core.rest.call(null,s__286789__$2)));
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
return iter__36172__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36014__auto__,k__36015__auto__){
var self__ = this;
var this__36014__auto____$1 = this;
return cljs.core._lookup.call(null,this__36014__auto____$1,k__36015__auto__,null);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36016__auto__,k286706,else__36017__auto__){
var self__ = this;
var this__36016__auto____$1 = this;
var G__286819 = (((k286706 instanceof cljs.core.Keyword))?k286706.fqn:null);
switch (G__286819) {
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
return cljs.core.get.call(null,self__.__extmap,k286706,else__36017__auto__);

}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36028__auto__,writer__36029__auto__,opts__36030__auto__){
var self__ = this;
var this__36028__auto____$1 = this;
var pr_pair__36031__auto__ = ((function (this__36028__auto____$1){
return (function (keyval__36032__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36029__auto__,cljs.core.pr_writer,""," ","",opts__36030__auto__,keyval__36032__auto__);
});})(this__36028__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36029__auto__,pr_pair__36031__auto__,"#loom.graph.BasicEditableDigraph{",", ","}",opts__36030__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__286705){
var self__ = this;
var G__286705__$1 = this;
return (new cljs.core.RecordIter((0),G__286705__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36012__auto__){
var self__ = this;
var this__36012__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36008__auto__){
var self__ = this;
var this__36008__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36018__auto__){
var self__ = this;
var this__36018__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36009__auto__){
var self__ = this;
var this__36009__auto____$1 = this;
var h__35827__auto__ = self__.__hash;
if(!((h__35827__auto__ == null))){
return h__35827__auto__;
} else {
var h__35827__auto____$1 = cljs.core.hash_imap.call(null,this__36009__auto____$1);
self__.__hash = h__35827__auto____$1;

return h__35827__auto____$1;
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36010__auto__,other__36011__auto__){
var self__ = this;
var this__36010__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35380__auto__ = other__36011__auto__;
if(cljs.core.truth_(and__35380__auto__)){
var and__35380__auto____$1 = (this__36010__auto____$1.constructor === other__36011__auto__.constructor);
if(and__35380__auto____$1){
return cljs.core.equiv_map.call(null,this__36010__auto____$1,other__36011__auto__);
} else {
return and__35380__auto____$1;
}
} else {
return and__35380__auto__;
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
return (function (g__$2,p__286855){
var vec__286857 = p__286855;
var n1 = cljs.core.nth.call(null,vec__286857,(0),null);
var n2 = cljs.core.nth.call(null,vec__286857,(1),null);
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
return (function (g__$2,p__286866){
var vec__286867 = p__286866;
var n1 = cljs.core.nth.call(null,vec__286867,(0),null);
var n2 = cljs.core.nth.call(null,vec__286867,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36023__auto__,k__36024__auto__){
var self__ = this;
var this__36023__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__36024__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36023__auto____$1),self__.__meta),k__36024__auto__);
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36024__auto__)),null));
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36021__auto__,k__36022__auto__,G__286705){
var self__ = this;
var this__36021__auto____$1 = this;
var pred__286876 = cljs.core.keyword_identical_QMARK_;
var expr__286877 = k__36022__auto__;
if(cljs.core.truth_(pred__286876.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__286877))){
return (new loom.graph.BasicEditableDigraph(G__286705,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__286876.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__286877))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,G__286705,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__286876.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__286877))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,G__286705,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36022__auto__,G__286705),null));
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
var iter__36172__auto__ = ((function (g__$1){
return (function loom$graph$iter__286908(s__286909){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__286909__$1 = s__286909;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__286909__$1);
if(temp__4657__auto__){
var s__286909__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__286909__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__286909__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__286911 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__286910 = (0);
while(true){
if((i__286910 < size__36171__auto__)){
var n2 = cljs.core._nth.call(null,c__36170__auto__,i__286910);
cljs.core.chunk_append.call(null,b__286911,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__287174 = (i__286910 + (1));
i__286910 = G__287174;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__286911),loom$graph$iter__286908.call(null,cljs.core.chunk_rest.call(null,s__286909__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__286911),null);
}
} else {
var n2 = cljs.core.first.call(null,s__286909__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__286908.call(null,cljs.core.rest.call(null,s__286909__$2)));
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
return iter__36172__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36026__auto__){
var self__ = this;
var this__36026__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36013__auto__,G__286705){
var self__ = this;
var this__36013__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,G__286705,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36019__auto__,entry__36020__auto__){
var self__ = this;
var this__36019__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36020__auto__)){
return cljs.core._assoc.call(null,this__36019__auto____$1,cljs.core._nth.call(null,entry__36020__auto__,(0)),cljs.core._nth.call(null,entry__36020__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36019__auto____$1,entry__36020__auto__);
}
});

loom.graph.BasicEditableDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableDigraph.cljs$lang$type = true;

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrSeq = (function (this__36048__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableDigraph");
});

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrWriter = (function (this__36048__auto__,writer__36049__auto__){
return cljs.core._write.call(null,writer__36049__auto__,"loom.graph/BasicEditableDigraph");
});

loom.graph.__GT_BasicEditableDigraph = (function loom$graph$__GT_BasicEditableDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableDigraph(nodeset,adj,in$,null,null,null));
});

loom.graph.map__GT_BasicEditableDigraph = (function loom$graph$map__GT_BasicEditableDigraph(G__286711){
return (new loom.graph.BasicEditableDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__286711),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__286711),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__286711),null,cljs.core.dissoc.call(null,G__286711,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)),null));
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
var iter__36172__auto__ = ((function (g__$1){
return (function loom$graph$iter__287200(s__287201){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__287201__$1 = s__287201;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__287201__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36168__auto__ = ((function (s__287201__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__287200_$_iter__287202(s__287203){
return (new cljs.core.LazySeq(null,((function (s__287201__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__287203__$1 = s__287203;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__287203__$1);
if(temp__4657__auto____$1){
var s__287203__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__287203__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__287203__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__287205 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__287204 = (0);
while(true){
if((i__287204 < size__36171__auto__)){
var e = cljs.core._nth.call(null,c__36170__auto__,i__287204);
cljs.core.chunk_append.call(null,b__287205,e);

var G__287288 = (i__287204 + (1));
i__287204 = G__287288;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__287205),loom$graph$iter__287200_$_iter__287202.call(null,cljs.core.chunk_rest.call(null,s__287203__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__287205),null);
}
} else {
var e = cljs.core.first.call(null,s__287203__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__287200_$_iter__287202.call(null,cljs.core.rest.call(null,s__287203__$2)));
}
} else {
return null;
}
break;
}
});})(s__287201__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__287201__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,loom$graph$iter__287200.call(null,cljs.core.rest.call(null,s__287201__$1)));
} else {
var G__287294 = cljs.core.rest.call(null,s__287201__$1);
s__287201__$1 = G__287294;
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
return iter__36172__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36172__auto__ = ((function (g__$1){
return (function loom$graph$iter__287228(s__287229){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__287229__$1 = s__287229;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__287229__$1);
if(temp__4657__auto__){
var s__287229__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__287229__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__287229__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__287231 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__287230 = (0);
while(true){
if((i__287230 < size__36171__auto__)){
var n2 = cljs.core._nth.call(null,c__36170__auto__,i__287230);
cljs.core.chunk_append.call(null,b__287231,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__287307 = (i__287230 + (1));
i__287230 = G__287307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__287231),loom$graph$iter__287228.call(null,cljs.core.chunk_rest.call(null,s__287229__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__287231),null);
}
} else {
var n2 = cljs.core.first.call(null,s__287229__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__287228.call(null,cljs.core.rest.call(null,s__287229__$2)));
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
return iter__36172__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36014__auto__,k__36015__auto__){
var self__ = this;
var this__36014__auto____$1 = this;
return cljs.core._lookup.call(null,this__36014__auto____$1,k__36015__auto__,null);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36016__auto__,k287198,else__36017__auto__){
var self__ = this;
var this__36016__auto____$1 = this;
var G__287243 = (((k287198 instanceof cljs.core.Keyword))?k287198.fqn:null);
switch (G__287243) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k287198,else__36017__auto__);

}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36028__auto__,writer__36029__auto__,opts__36030__auto__){
var self__ = this;
var this__36028__auto____$1 = this;
var pr_pair__36031__auto__ = ((function (this__36028__auto____$1){
return (function (keyval__36032__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36029__auto__,cljs.core.pr_writer,""," ","",opts__36030__auto__,keyval__36032__auto__);
});})(this__36028__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36029__auto__,pr_pair__36031__auto__,"#loom.graph.BasicEditableWeightedGraph{",", ","}",opts__36030__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__287197){
var self__ = this;
var G__287197__$1 = this;
return (new cljs.core.RecordIter((0),G__287197__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36012__auto__){
var self__ = this;
var this__36012__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36008__auto__){
var self__ = this;
var this__36008__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36018__auto__){
var self__ = this;
var this__36018__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36009__auto__){
var self__ = this;
var this__36009__auto____$1 = this;
var h__35827__auto__ = self__.__hash;
if(!((h__35827__auto__ == null))){
return h__35827__auto__;
} else {
var h__35827__auto____$1 = cljs.core.hash_imap.call(null,this__36009__auto____$1);
self__.__hash = h__35827__auto____$1;

return h__35827__auto____$1;
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36010__auto__,other__36011__auto__){
var self__ = this;
var this__36010__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35380__auto__ = other__36011__auto__;
if(cljs.core.truth_(and__35380__auto__)){
var and__35380__auto____$1 = (this__36010__auto____$1.constructor === other__36011__auto__.constructor);
if(and__35380__auto____$1){
return cljs.core.equiv_map.call(null,this__36010__auto____$1,other__36011__auto__);
} else {
return and__35380__auto____$1;
}
} else {
return and__35380__auto__;
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
return (function (g__$2,p__287256){
var vec__287257 = p__287256;
var n1 = cljs.core.nth.call(null,vec__287257,(0),null);
var n2 = cljs.core.nth.call(null,vec__287257,(1),null);
var vec__287258 = cljs.core.nthnext.call(null,vec__287257,(2));
var w = cljs.core.nth.call(null,vec__287258,(0),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__35392__auto__ = w;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2,n1], null),(function (){var or__35392__auto__ = w;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
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
return (function (g__$2,p__287263){
var vec__287265 = p__287263;
var n1 = cljs.core.nth.call(null,vec__287265,(0),null);
var n2 = cljs.core.nth.call(null,vec__287265,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.dissoc,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36023__auto__,k__36024__auto__){
var self__ = this;
var this__36023__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__36024__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36023__auto____$1),self__.__meta),k__36024__auto__);
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36024__auto__)),null));
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36021__auto__,k__36022__auto__,G__287197){
var self__ = this;
var this__36021__auto____$1 = this;
var pred__287269 = cljs.core.keyword_identical_QMARK_;
var expr__287270 = k__36022__auto__;
if(cljs.core.truth_(pred__287269.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__287270))){
return (new loom.graph.BasicEditableWeightedGraph(G__287197,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__287269.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__287270))){
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,G__287197,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36022__auto__,G__287197),null));
}
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36026__auto__){
var self__ = this;
var this__36026__auto____$1 = this;
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

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36013__auto__,G__287197){
var self__ = this;
var this__36013__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,G__287197,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36019__auto__,entry__36020__auto__){
var self__ = this;
var this__36019__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36020__auto__)){
return cljs.core._assoc.call(null,this__36019__auto____$1,cljs.core._nth.call(null,entry__36020__auto__,(0)),cljs.core._nth.call(null,entry__36020__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36019__auto____$1,entry__36020__auto__);
}
});

loom.graph.BasicEditableWeightedGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrSeq = (function (this__36048__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableWeightedGraph");
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrWriter = (function (this__36048__auto__,writer__36049__auto__){
return cljs.core._write.call(null,writer__36049__auto__,"loom.graph/BasicEditableWeightedGraph");
});

loom.graph.__GT_BasicEditableWeightedGraph = (function loom$graph$__GT_BasicEditableWeightedGraph(nodeset,adj){
return (new loom.graph.BasicEditableWeightedGraph(nodeset,adj,null,null,null));
});

loom.graph.map__GT_BasicEditableWeightedGraph = (function loom$graph$map__GT_BasicEditableWeightedGraph(G__287199){
return (new loom.graph.BasicEditableWeightedGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__287199),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__287199),null,cljs.core.dissoc.call(null,G__287199,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)),null));
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
var iter__36172__auto__ = ((function (g__$1){
return (function loom$graph$iter__287424(s__287425){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__287425__$1 = s__287425;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__287425__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36168__auto__ = ((function (s__287425__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__287424_$_iter__287426(s__287427){
return (new cljs.core.LazySeq(null,((function (s__287425__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__287427__$1 = s__287427;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__287427__$1);
if(temp__4657__auto____$1){
var s__287427__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__287427__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__287427__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__287429 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__287428 = (0);
while(true){
if((i__287428 < size__36171__auto__)){
var e = cljs.core._nth.call(null,c__36170__auto__,i__287428);
cljs.core.chunk_append.call(null,b__287429,e);

var G__287582 = (i__287428 + (1));
i__287428 = G__287582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__287429),loom$graph$iter__287424_$_iter__287426.call(null,cljs.core.chunk_rest.call(null,s__287427__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__287429),null);
}
} else {
var e = cljs.core.first.call(null,s__287427__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__287424_$_iter__287426.call(null,cljs.core.rest.call(null,s__287427__$2)));
}
} else {
return null;
}
break;
}
});})(s__287425__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__287425__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,loom$graph$iter__287424.call(null,cljs.core.rest.call(null,s__287425__$1)));
} else {
var G__287589 = cljs.core.rest.call(null,s__287425__$1);
s__287425__$1 = G__287589;
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
return iter__36172__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36172__auto__ = ((function (g__$1){
return (function loom$graph$iter__287444(s__287445){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__287445__$1 = s__287445;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__287445__$1);
if(temp__4657__auto__){
var s__287445__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__287445__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__287445__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__287447 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__287446 = (0);
while(true){
if((i__287446 < size__36171__auto__)){
var n2 = cljs.core._nth.call(null,c__36170__auto__,i__287446);
cljs.core.chunk_append.call(null,b__287447,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__287600 = (i__287446 + (1));
i__287446 = G__287600;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__287447),loom$graph$iter__287444.call(null,cljs.core.chunk_rest.call(null,s__287445__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__287447),null);
}
} else {
var n2 = cljs.core.first.call(null,s__287445__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__287444.call(null,cljs.core.rest.call(null,s__287445__$2)));
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
return iter__36172__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36014__auto__,k__36015__auto__){
var self__ = this;
var this__36014__auto____$1 = this;
return cljs.core._lookup.call(null,this__36014__auto____$1,k__36015__auto__,null);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36016__auto__,k287418,else__36017__auto__){
var self__ = this;
var this__36016__auto____$1 = this;
var G__287485 = (((k287418 instanceof cljs.core.Keyword))?k287418.fqn:null);
switch (G__287485) {
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
return cljs.core.get.call(null,self__.__extmap,k287418,else__36017__auto__);

}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36028__auto__,writer__36029__auto__,opts__36030__auto__){
var self__ = this;
var this__36028__auto____$1 = this;
var pr_pair__36031__auto__ = ((function (this__36028__auto____$1){
return (function (keyval__36032__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36029__auto__,cljs.core.pr_writer,""," ","",opts__36030__auto__,keyval__36032__auto__);
});})(this__36028__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36029__auto__,pr_pair__36031__auto__,"#loom.graph.BasicEditableWeightedDigraph{",", ","}",opts__36030__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__287417){
var self__ = this;
var G__287417__$1 = this;
return (new cljs.core.RecordIter((0),G__287417__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36012__auto__){
var self__ = this;
var this__36012__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36008__auto__){
var self__ = this;
var this__36008__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36018__auto__){
var self__ = this;
var this__36018__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36009__auto__){
var self__ = this;
var this__36009__auto____$1 = this;
var h__35827__auto__ = self__.__hash;
if(!((h__35827__auto__ == null))){
return h__35827__auto__;
} else {
var h__35827__auto____$1 = cljs.core.hash_imap.call(null,this__36009__auto____$1);
self__.__hash = h__35827__auto____$1;

return h__35827__auto____$1;
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36010__auto__,other__36011__auto__){
var self__ = this;
var this__36010__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35380__auto__ = other__36011__auto__;
if(cljs.core.truth_(and__35380__auto__)){
var and__35380__auto____$1 = (this__36010__auto____$1.constructor === other__36011__auto__.constructor);
if(and__35380__auto____$1){
return cljs.core.equiv_map.call(null,this__36010__auto____$1,other__36011__auto__);
} else {
return and__35380__auto____$1;
}
} else {
return and__35380__auto__;
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
return (function (g__$2,p__287497){
var vec__287499 = p__287497;
var n1 = cljs.core.nth.call(null,vec__287499,(0),null);
var n2 = cljs.core.nth.call(null,vec__287499,(1),null);
var vec__287500 = cljs.core.nthnext.call(null,vec__287499,(2));
var w = cljs.core.nth.call(null,vec__287500,(0),null);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__35392__auto__ = w;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
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
return (function (g__$2,p__287529){
var vec__287530 = p__287529;
var n1 = cljs.core.nth.call(null,vec__287530,(0),null);
var n2 = cljs.core.nth.call(null,vec__287530,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36023__auto__,k__36024__auto__){
var self__ = this;
var this__36023__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__36024__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36023__auto____$1),self__.__meta),k__36024__auto__);
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36024__auto__)),null));
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36021__auto__,k__36022__auto__,G__287417){
var self__ = this;
var this__36021__auto____$1 = this;
var pred__287534 = cljs.core.keyword_identical_QMARK_;
var expr__287535 = k__36022__auto__;
if(cljs.core.truth_(pred__287534.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__287535))){
return (new loom.graph.BasicEditableWeightedDigraph(G__287417,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__287534.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__287535))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,G__287417,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__287534.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__287535))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,G__287417,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36022__auto__,G__287417),null));
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
var iter__36172__auto__ = ((function (g__$1){
return (function loom$graph$iter__287548(s__287549){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__287549__$1 = s__287549;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__287549__$1);
if(temp__4657__auto__){
var s__287549__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__287549__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__287549__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__287551 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__287550 = (0);
while(true){
if((i__287550 < size__36171__auto__)){
var n2 = cljs.core._nth.call(null,c__36170__auto__,i__287550);
cljs.core.chunk_append.call(null,b__287551,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__287682 = (i__287550 + (1));
i__287550 = G__287682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__287551),loom$graph$iter__287548.call(null,cljs.core.chunk_rest.call(null,s__287549__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__287551),null);
}
} else {
var n2 = cljs.core.first.call(null,s__287549__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__287548.call(null,cljs.core.rest.call(null,s__287549__$2)));
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
return iter__36172__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (tg,p__287562){
var vec__287563 = p__287562;
var n1 = cljs.core.nth.call(null,vec__287563,(0),null);
var n2 = cljs.core.nth.call(null,vec__287563,(1),null);
return loom.graph.add_edges_STAR_.call(null,tg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,n1,loom.graph.weight.call(null,g__$1,n1,n2)], null)], null));
});})(g__$1))
,cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY),loom.graph.edges.call(null,g__$1));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36026__auto__){
var self__ = this;
var this__36026__auto____$1 = this;
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

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36013__auto__,G__287417){
var self__ = this;
var this__36013__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,G__287417,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36019__auto__,entry__36020__auto__){
var self__ = this;
var this__36019__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36020__auto__)){
return cljs.core._assoc.call(null,this__36019__auto____$1,cljs.core._nth.call(null,entry__36020__auto__,(0)),cljs.core._nth.call(null,entry__36020__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36019__auto____$1,entry__36020__auto__);
}
});

loom.graph.BasicEditableWeightedDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrSeq = (function (this__36048__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableWeightedDigraph");
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrWriter = (function (this__36048__auto__,writer__36049__auto__){
return cljs.core._write.call(null,writer__36049__auto__,"loom.graph/BasicEditableWeightedDigraph");
});

loom.graph.__GT_BasicEditableWeightedDigraph = (function loom$graph$__GT_BasicEditableWeightedDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableWeightedDigraph(nodeset,adj,in$,null,null,null));
});

loom.graph.map__GT_BasicEditableWeightedDigraph = (function loom$graph$map__GT_BasicEditableWeightedDigraph(G__287420){
return (new loom.graph.BasicEditableWeightedDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__287420),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__287420),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__287420),null,cljs.core.dissoc.call(null,G__287420,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)),null));
});

loom.graph.call_or_return = (function loom$graph$call_or_return(var_args){
var args__36468__auto__ = [];
var len__36461__auto___287685 = arguments.length;
var i__36462__auto___287686 = (0);
while(true){
if((i__36462__auto___287686 < len__36461__auto___287685)){
args__36468__auto__.push((arguments[i__36462__auto___287686]));

var G__287687 = (i__36462__auto___287686 + (1));
i__36462__auto___287686 = G__287687;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if((cljs.core.fn_QMARK_.call(null,f)) || (((f instanceof clojure.lang.IFn)) && (cljs.core.seq.call(null,args)))){
return cljs.core.apply.call(null,f,args);
} else {
return f;
}
});

loom.graph.call_or_return.cljs$lang$maxFixedArity = (1);

loom.graph.call_or_return.cljs$lang$applyTo = (function (seq287683){
var G__287684 = cljs.core.first.call(null,seq287683);
var seq287683__$1 = cljs.core.next.call(null,seq287683);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(G__287684,seq287683__$1);
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
if(cljs.core.truth_((function (){var or__35392__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
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
var iter__36172__auto__ = ((function (g__$1){
return (function loom$graph$iter__287783(s__287784){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__287784__$1 = s__287784;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__287784__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36168__auto__ = ((function (s__287784__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__287783_$_iter__287785(s__287786){
return (new cljs.core.LazySeq(null,((function (s__287784__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__287786__$1 = s__287786;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__287786__$1);
if(temp__4657__auto____$1){
var s__287786__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__287786__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__287786__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__287788 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__287787 = (0);
while(true){
if((i__287787 < size__36171__auto__)){
var nbr = cljs.core._nth.call(null,c__36170__auto__,i__287787);
cljs.core.chunk_append.call(null,b__287788,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__287929 = (i__287787 + (1));
i__287787 = G__287929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__287788),loom$graph$iter__287783_$_iter__287785.call(null,cljs.core.chunk_rest.call(null,s__287786__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__287788),null);
}
} else {
var nbr = cljs.core.first.call(null,s__287786__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__287783_$_iter__287785.call(null,cljs.core.rest.call(null,s__287786__$2)));
}
} else {
return null;
}
break;
}
});})(s__287784__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__287784__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,loom$graph$iter__287783.call(null,cljs.core.rest.call(null,s__287784__$1)));
} else {
var G__287930 = cljs.core.rest.call(null,s__287784__$1);
s__287784__$1 = G__287930;
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
return iter__36172__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36172__auto__ = ((function (g__$1){
return (function loom$graph$iter__287857(s__287858){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__287858__$1 = s__287858;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__287858__$1);
if(temp__4657__auto__){
var s__287858__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__287858__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__287858__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__287860 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__287859 = (0);
while(true){
if((i__287859 < size__36171__auto__)){
var n2 = cljs.core._nth.call(null,c__36170__auto__,i__287859);
cljs.core.chunk_append.call(null,b__287860,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__288066 = (i__287859 + (1));
i__287859 = G__288066;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__287860),loom$graph$iter__287857.call(null,cljs.core.chunk_rest.call(null,s__287858__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__287860),null);
}
} else {
var n2 = cljs.core.first.call(null,s__287858__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__287857.call(null,cljs.core.rest.call(null,s__287858__$2)));
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
return iter__36172__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36014__auto__,k__36015__auto__){
var self__ = this;
var this__36014__auto____$1 = this;
return cljs.core._lookup.call(null,this__36014__auto____$1,k__36015__auto__,null);
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36016__auto__,k287721,else__36017__auto__){
var self__ = this;
var this__36016__auto____$1 = this;
var G__287871 = (((k287721 instanceof cljs.core.Keyword))?k287721.fqn:null);
switch (G__287871) {
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
return cljs.core.get.call(null,self__.__extmap,k287721,else__36017__auto__);

}
});

loom.graph.FlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36028__auto__,writer__36029__auto__,opts__36030__auto__){
var self__ = this;
var this__36028__auto____$1 = this;
var pr_pair__36031__auto__ = ((function (this__36028__auto____$1){
return (function (keyval__36032__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36029__auto__,cljs.core.pr_writer,""," ","",opts__36030__auto__,keyval__36032__auto__);
});})(this__36028__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36029__auto__,pr_pair__36031__auto__,"#loom.graph.FlyGraph{",", ","}",opts__36030__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__287720){
var self__ = this;
var G__287720__$1 = this;
return (new cljs.core.RecordIter((0),G__287720__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.FlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36012__auto__){
var self__ = this;
var this__36012__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36008__auto__){
var self__ = this;
var this__36008__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36018__auto__){
var self__ = this;
var this__36018__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36009__auto__){
var self__ = this;
var this__36009__auto____$1 = this;
var h__35827__auto__ = self__.__hash;
if(!((h__35827__auto__ == null))){
return h__35827__auto__;
} else {
var h__35827__auto____$1 = cljs.core.hash_imap.call(null,this__36009__auto____$1);
self__.__hash = h__35827__auto____$1;

return h__35827__auto____$1;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36010__auto__,other__36011__auto__){
var self__ = this;
var this__36010__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35380__auto__ = other__36011__auto__;
if(cljs.core.truth_(and__35380__auto__)){
var and__35380__auto____$1 = (this__36010__auto____$1.constructor === other__36011__auto__.constructor);
if(and__35380__auto____$1){
return cljs.core.equiv_map.call(null,this__36010__auto____$1,other__36011__auto__);
} else {
return and__35380__auto____$1;
}
} else {
return and__35380__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36023__auto__,k__36024__auto__){
var self__ = this;
var this__36023__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null], null), null),k__36024__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36023__auto____$1),self__.__meta),k__36024__auto__);
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36024__auto__)),null));
}
});

loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36021__auto__,k__36022__auto__,G__287720){
var self__ = this;
var this__36021__auto____$1 = this;
var pred__287888 = cljs.core.keyword_identical_QMARK_;
var expr__287889 = k__36022__auto__;
if(cljs.core.truth_(pred__287888.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__287889))){
return (new loom.graph.FlyGraph(G__287720,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__287888.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__287889))){
return (new loom.graph.FlyGraph(self__.fnodes,G__287720,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__287888.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__287889))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,G__287720,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__287888.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__287889))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__287720,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36022__auto__,G__287720),null));
}
}
}
}
});

loom.graph.FlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36026__auto__){
var self__ = this;
var this__36026__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36013__auto__,G__287720){
var self__ = this;
var this__36013__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,G__287720,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36019__auto__,entry__36020__auto__){
var self__ = this;
var this__36019__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36020__auto__)){
return cljs.core._assoc.call(null,this__36019__auto____$1,cljs.core._nth.call(null,entry__36020__auto__,(0)),cljs.core._nth.call(null,entry__36020__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36019__auto____$1,entry__36020__auto__);
}
});

loom.graph.FlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyGraph.cljs$lang$type = true;

loom.graph.FlyGraph.cljs$lang$ctorPrSeq = (function (this__36048__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/FlyGraph");
});

loom.graph.FlyGraph.cljs$lang$ctorPrWriter = (function (this__36048__auto__,writer__36049__auto__){
return cljs.core._write.call(null,writer__36049__auto__,"loom.graph/FlyGraph");
});

loom.graph.__GT_FlyGraph = (function loom$graph$__GT_FlyGraph(fnodes,fedges,fsuccessors,start){
return (new loom.graph.FlyGraph(fnodes,fedges,fsuccessors,start,null,null,null));
});

loom.graph.map__GT_FlyGraph = (function loom$graph$map__GT_FlyGraph(G__287722){
return (new loom.graph.FlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__287722),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__287722),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__287722),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__287722),null,cljs.core.dissoc.call(null,G__287722,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__35392__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
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
var iter__36172__auto__ = ((function (g__$1){
return (function loom$graph$iter__288154(s__288155){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__288155__$1 = s__288155;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__288155__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36168__auto__ = ((function (s__288155__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__288154_$_iter__288156(s__288157){
return (new cljs.core.LazySeq(null,((function (s__288155__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__288157__$1 = s__288157;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__288157__$1);
if(temp__4657__auto____$1){
var s__288157__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__288157__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__288157__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__288159 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__288158 = (0);
while(true){
if((i__288158 < size__36171__auto__)){
var nbr = cljs.core._nth.call(null,c__36170__auto__,i__288158);
cljs.core.chunk_append.call(null,b__288159,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__288183 = (i__288158 + (1));
i__288158 = G__288183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288159),loom$graph$iter__288154_$_iter__288156.call(null,cljs.core.chunk_rest.call(null,s__288157__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288159),null);
}
} else {
var nbr = cljs.core.first.call(null,s__288157__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__288154_$_iter__288156.call(null,cljs.core.rest.call(null,s__288157__$2)));
}
} else {
return null;
}
break;
}
});})(s__288155__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__288155__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,loom$graph$iter__288154.call(null,cljs.core.rest.call(null,s__288155__$1)));
} else {
var G__288187 = cljs.core.rest.call(null,s__288155__$1);
s__288155__$1 = G__288187;
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
return iter__36172__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36172__auto__ = ((function (g__$1){
return (function loom$graph$iter__288161(s__288162){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__288162__$1 = s__288162;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__288162__$1);
if(temp__4657__auto__){
var s__288162__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__288162__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__288162__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__288164 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__288163 = (0);
while(true){
if((i__288163 < size__36171__auto__)){
var n2 = cljs.core._nth.call(null,c__36170__auto__,i__288163);
cljs.core.chunk_append.call(null,b__288164,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__288191 = (i__288163 + (1));
i__288163 = G__288191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288164),loom$graph$iter__288161.call(null,cljs.core.chunk_rest.call(null,s__288162__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288164),null);
}
} else {
var n2 = cljs.core.first.call(null,s__288162__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__288161.call(null,cljs.core.rest.call(null,s__288162__$2)));
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
return iter__36172__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36014__auto__,k__36015__auto__){
var self__ = this;
var this__36014__auto____$1 = this;
return cljs.core._lookup.call(null,this__36014__auto____$1,k__36015__auto__,null);
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36016__auto__,k288152,else__36017__auto__){
var self__ = this;
var this__36016__auto____$1 = this;
var G__288168 = (((k288152 instanceof cljs.core.Keyword))?k288152.fqn:null);
switch (G__288168) {
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
return cljs.core.get.call(null,self__.__extmap,k288152,else__36017__auto__);

}
});

loom.graph.FlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36028__auto__,writer__36029__auto__,opts__36030__auto__){
var self__ = this;
var this__36028__auto____$1 = this;
var pr_pair__36031__auto__ = ((function (this__36028__auto____$1){
return (function (keyval__36032__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36029__auto__,cljs.core.pr_writer,""," ","",opts__36030__auto__,keyval__36032__auto__);
});})(this__36028__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36029__auto__,pr_pair__36031__auto__,"#loom.graph.FlyDigraph{",", ","}",opts__36030__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__288151){
var self__ = this;
var G__288151__$1 = this;
return (new cljs.core.RecordIter((0),G__288151__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.FlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36012__auto__){
var self__ = this;
var this__36012__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36008__auto__){
var self__ = this;
var this__36008__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36018__auto__){
var self__ = this;
var this__36018__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36009__auto__){
var self__ = this;
var this__36009__auto____$1 = this;
var h__35827__auto__ = self__.__hash;
if(!((h__35827__auto__ == null))){
return h__35827__auto__;
} else {
var h__35827__auto____$1 = cljs.core.hash_imap.call(null,this__36009__auto____$1);
self__.__hash = h__35827__auto____$1;

return h__35827__auto____$1;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36010__auto__,other__36011__auto__){
var self__ = this;
var this__36010__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35380__auto__ = other__36011__auto__;
if(cljs.core.truth_(and__35380__auto__)){
var and__35380__auto____$1 = (this__36010__auto____$1.constructor === other__36011__auto__.constructor);
if(and__35380__auto____$1){
return cljs.core.equiv_map.call(null,this__36010__auto____$1,other__36011__auto__);
} else {
return and__35380__auto____$1;
}
} else {
return and__35380__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36023__auto__,k__36024__auto__){
var self__ = this;
var this__36023__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__36024__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36023__auto____$1),self__.__meta),k__36024__auto__);
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36024__auto__)),null));
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36021__auto__,k__36022__auto__,G__288151){
var self__ = this;
var this__36021__auto____$1 = this;
var pred__288172 = cljs.core.keyword_identical_QMARK_;
var expr__288173 = k__36022__auto__;
if(cljs.core.truth_(pred__288172.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__288173))){
return (new loom.graph.FlyDigraph(G__288151,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__288172.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__288173))){
return (new loom.graph.FlyDigraph(self__.fnodes,G__288151,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__288172.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__288173))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,G__288151,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__288172.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__288173))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__288151,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__288172.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__288173))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__288151,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36022__auto__,G__288151),null));
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

loom.graph.FlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36026__auto__){
var self__ = this;
var this__36026__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36013__auto__,G__288151){
var self__ = this;
var this__36013__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,G__288151,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36019__auto__,entry__36020__auto__){
var self__ = this;
var this__36019__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36020__auto__)){
return cljs.core._assoc.call(null,this__36019__auto____$1,cljs.core._nth.call(null,entry__36020__auto__,(0)),cljs.core._nth.call(null,entry__36020__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36019__auto____$1,entry__36020__auto__);
}
});

loom.graph.FlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyDigraph.cljs$lang$type = true;

loom.graph.FlyDigraph.cljs$lang$ctorPrSeq = (function (this__36048__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/FlyDigraph");
});

loom.graph.FlyDigraph.cljs$lang$ctorPrWriter = (function (this__36048__auto__,writer__36049__auto__){
return cljs.core._write.call(null,writer__36049__auto__,"loom.graph/FlyDigraph");
});

loom.graph.__GT_FlyDigraph = (function loom$graph$__GT_FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start){
return (new loom.graph.FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start,null,null,null));
});

loom.graph.map__GT_FlyDigraph = (function loom$graph$map__GT_FlyDigraph(G__288153){
return (new loom.graph.FlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__288153),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__288153),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__288153),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__288153),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__288153),null,cljs.core.dissoc.call(null,G__288153,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__35392__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
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
var iter__36172__auto__ = ((function (g__$1){
return (function loom$graph$iter__288223(s__288224){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__288224__$1 = s__288224;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__288224__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36168__auto__ = ((function (s__288224__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__288223_$_iter__288225(s__288226){
return (new cljs.core.LazySeq(null,((function (s__288224__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__288226__$1 = s__288226;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__288226__$1);
if(temp__4657__auto____$1){
var s__288226__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__288226__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__288226__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__288228 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__288227 = (0);
while(true){
if((i__288227 < size__36171__auto__)){
var nbr = cljs.core._nth.call(null,c__36170__auto__,i__288227);
cljs.core.chunk_append.call(null,b__288228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__288253 = (i__288227 + (1));
i__288227 = G__288253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288228),loom$graph$iter__288223_$_iter__288225.call(null,cljs.core.chunk_rest.call(null,s__288226__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288228),null);
}
} else {
var nbr = cljs.core.first.call(null,s__288226__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__288223_$_iter__288225.call(null,cljs.core.rest.call(null,s__288226__$2)));
}
} else {
return null;
}
break;
}
});})(s__288224__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__288224__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,loom$graph$iter__288223.call(null,cljs.core.rest.call(null,s__288224__$1)));
} else {
var G__288254 = cljs.core.rest.call(null,s__288224__$1);
s__288224__$1 = G__288254;
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
return iter__36172__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36172__auto__ = ((function (g__$1){
return (function loom$graph$iter__288236(s__288237){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__288237__$1 = s__288237;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__288237__$1);
if(temp__4657__auto__){
var s__288237__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__288237__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__288237__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__288239 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__288238 = (0);
while(true){
if((i__288238 < size__36171__auto__)){
var n2 = cljs.core._nth.call(null,c__36170__auto__,i__288238);
cljs.core.chunk_append.call(null,b__288239,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__288255 = (i__288238 + (1));
i__288238 = G__288255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288239),loom$graph$iter__288236.call(null,cljs.core.chunk_rest.call(null,s__288237__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288239),null);
}
} else {
var n2 = cljs.core.first.call(null,s__288237__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__288236.call(null,cljs.core.rest.call(null,s__288237__$2)));
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
return iter__36172__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36014__auto__,k__36015__auto__){
var self__ = this;
var this__36014__auto____$1 = this;
return cljs.core._lookup.call(null,this__36014__auto____$1,k__36015__auto__,null);
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36016__auto__,k288219,else__36017__auto__){
var self__ = this;
var this__36016__auto____$1 = this;
var G__288244 = (((k288219 instanceof cljs.core.Keyword))?k288219.fqn:null);
switch (G__288244) {
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
return cljs.core.get.call(null,self__.__extmap,k288219,else__36017__auto__);

}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36028__auto__,writer__36029__auto__,opts__36030__auto__){
var self__ = this;
var this__36028__auto____$1 = this;
var pr_pair__36031__auto__ = ((function (this__36028__auto____$1){
return (function (keyval__36032__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36029__auto__,cljs.core.pr_writer,""," ","",opts__36030__auto__,keyval__36032__auto__);
});})(this__36028__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36029__auto__,pr_pair__36031__auto__,"#loom.graph.WeightedFlyGraph{",", ","}",opts__36030__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__288218){
var self__ = this;
var G__288218__$1 = this;
return (new cljs.core.RecordIter((0),G__288218__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36012__auto__){
var self__ = this;
var this__36012__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36008__auto__){
var self__ = this;
var this__36008__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36018__auto__){
var self__ = this;
var this__36018__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36009__auto__){
var self__ = this;
var this__36009__auto____$1 = this;
var h__35827__auto__ = self__.__hash;
if(!((h__35827__auto__ == null))){
return h__35827__auto__;
} else {
var h__35827__auto____$1 = cljs.core.hash_imap.call(null,this__36009__auto____$1);
self__.__hash = h__35827__auto____$1;

return h__35827__auto____$1;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36010__auto__,other__36011__auto__){
var self__ = this;
var this__36010__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35380__auto__ = other__36011__auto__;
if(cljs.core.truth_(and__35380__auto__)){
var and__35380__auto____$1 = (this__36010__auto____$1.constructor === other__36011__auto__.constructor);
if(and__35380__auto____$1){
return cljs.core.equiv_map.call(null,this__36010__auto____$1,other__36011__auto__);
} else {
return and__35380__auto____$1;
}
} else {
return and__35380__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36023__auto__,k__36024__auto__){
var self__ = this;
var this__36023__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null], null), null),k__36024__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36023__auto____$1),self__.__meta),k__36024__auto__);
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36024__auto__)),null));
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36021__auto__,k__36022__auto__,G__288218){
var self__ = this;
var this__36021__auto____$1 = this;
var pred__288250 = cljs.core.keyword_identical_QMARK_;
var expr__288251 = k__36022__auto__;
if(cljs.core.truth_(pred__288250.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__288251))){
return (new loom.graph.WeightedFlyGraph(G__288218,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__288250.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__288251))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,G__288218,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__288250.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__288251))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,G__288218,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__288250.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__288251))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__288218,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__288250.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__288251))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,G__288218,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36022__auto__,G__288218),null));
}
}
}
}
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36026__auto__){
var self__ = this;
var this__36026__auto____$1 = this;
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

loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36013__auto__,G__288218){
var self__ = this;
var this__36013__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,G__288218,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36019__auto__,entry__36020__auto__){
var self__ = this;
var this__36019__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36020__auto__)){
return cljs.core._assoc.call(null,this__36019__auto____$1,cljs.core._nth.call(null,entry__36020__auto__,(0)),cljs.core._nth.call(null,entry__36020__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36019__auto____$1,entry__36020__auto__);
}
});

loom.graph.WeightedFlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyGraph.cljs$lang$type = true;

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrSeq = (function (this__36048__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/WeightedFlyGraph");
});

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrWriter = (function (this__36048__auto__,writer__36049__auto__){
return cljs.core._write.call(null,writer__36049__auto__,"loom.graph/WeightedFlyGraph");
});

loom.graph.__GT_WeightedFlyGraph = (function loom$graph$__GT_WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start){
return (new loom.graph.WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start,null,null,null));
});

loom.graph.map__GT_WeightedFlyGraph = (function loom$graph$map__GT_WeightedFlyGraph(G__288221){
return (new loom.graph.WeightedFlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__288221),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__288221),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__288221),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__288221),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__288221),null,cljs.core.dissoc.call(null,G__288221,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__35392__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
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
var iter__36172__auto__ = ((function (g__$1){
return (function loom$graph$iter__288396(s__288397){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__288397__$1 = s__288397;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__288397__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__36168__auto__ = ((function (s__288397__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__288396_$_iter__288398(s__288399){
return (new cljs.core.LazySeq(null,((function (s__288397__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__288399__$1 = s__288399;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__288399__$1);
if(temp__4657__auto____$1){
var s__288399__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__288399__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__288399__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__288401 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__288400 = (0);
while(true){
if((i__288400 < size__36171__auto__)){
var nbr = cljs.core._nth.call(null,c__36170__auto__,i__288400);
cljs.core.chunk_append.call(null,b__288401,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__288573 = (i__288400 + (1));
i__288400 = G__288573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288401),loom$graph$iter__288396_$_iter__288398.call(null,cljs.core.chunk_rest.call(null,s__288399__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288401),null);
}
} else {
var nbr = cljs.core.first.call(null,s__288399__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__288396_$_iter__288398.call(null,cljs.core.rest.call(null,s__288399__$2)));
}
} else {
return null;
}
break;
}
});})(s__288397__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__288397__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,loom$graph$iter__288396.call(null,cljs.core.rest.call(null,s__288397__$1)));
} else {
var G__288583 = cljs.core.rest.call(null,s__288397__$1);
s__288397__$1 = G__288583;
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
return iter__36172__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__36172__auto__ = ((function (g__$1){
return (function loom$graph$iter__288429(s__288430){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__288430__$1 = s__288430;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__288430__$1);
if(temp__4657__auto__){
var s__288430__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__288430__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__288430__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__288432 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__288431 = (0);
while(true){
if((i__288431 < size__36171__auto__)){
var n2 = cljs.core._nth.call(null,c__36170__auto__,i__288431);
cljs.core.chunk_append.call(null,b__288432,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__288602 = (i__288431 + (1));
i__288431 = G__288602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288432),loom$graph$iter__288429.call(null,cljs.core.chunk_rest.call(null,s__288430__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288432),null);
}
} else {
var n2 = cljs.core.first.call(null,s__288430__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__288429.call(null,cljs.core.rest.call(null,s__288430__$2)));
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
return iter__36172__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36014__auto__,k__36015__auto__){
var self__ = this;
var this__36014__auto____$1 = this;
return cljs.core._lookup.call(null,this__36014__auto____$1,k__36015__auto__,null);
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36016__auto__,k288385,else__36017__auto__){
var self__ = this;
var this__36016__auto____$1 = this;
var G__288442 = (((k288385 instanceof cljs.core.Keyword))?k288385.fqn:null);
switch (G__288442) {
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
return cljs.core.get.call(null,self__.__extmap,k288385,else__36017__auto__);

}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36028__auto__,writer__36029__auto__,opts__36030__auto__){
var self__ = this;
var this__36028__auto____$1 = this;
var pr_pair__36031__auto__ = ((function (this__36028__auto____$1){
return (function (keyval__36032__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36029__auto__,cljs.core.pr_writer,""," ","",opts__36030__auto__,keyval__36032__auto__);
});})(this__36028__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36029__auto__,pr_pair__36031__auto__,"#loom.graph.WeightedFlyDigraph{",", ","}",opts__36030__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__288384){
var self__ = this;
var G__288384__$1 = this;
return (new cljs.core.RecordIter((0),G__288384__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36012__auto__){
var self__ = this;
var this__36012__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36008__auto__){
var self__ = this;
var this__36008__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36018__auto__){
var self__ = this;
var this__36018__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36009__auto__){
var self__ = this;
var this__36009__auto____$1 = this;
var h__35827__auto__ = self__.__hash;
if(!((h__35827__auto__ == null))){
return h__35827__auto__;
} else {
var h__35827__auto____$1 = cljs.core.hash_imap.call(null,this__36009__auto____$1);
self__.__hash = h__35827__auto____$1;

return h__35827__auto____$1;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36010__auto__,other__36011__auto__){
var self__ = this;
var this__36010__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35380__auto__ = other__36011__auto__;
if(cljs.core.truth_(and__35380__auto__)){
var and__35380__auto____$1 = (this__36010__auto____$1.constructor === other__36011__auto__.constructor);
if(and__35380__auto____$1){
return cljs.core.equiv_map.call(null,this__36010__auto____$1,other__36011__auto__);
} else {
return and__35380__auto____$1;
}
} else {
return and__35380__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36023__auto__,k__36024__auto__){
var self__ = this;
var this__36023__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__36024__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36023__auto____$1),self__.__meta),k__36024__auto__);
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36024__auto__)),null));
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36021__auto__,k__36022__auto__,G__288384){
var self__ = this;
var this__36021__auto____$1 = this;
var pred__288453 = cljs.core.keyword_identical_QMARK_;
var expr__288454 = k__36022__auto__;
if(cljs.core.truth_(pred__288453.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__288454))){
return (new loom.graph.WeightedFlyDigraph(G__288384,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__288453.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__288454))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,G__288384,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__288453.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__288454))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,G__288384,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__288453.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__288454))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__288384,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__288453.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__288454))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__288384,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__288453.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__288454))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,G__288384,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36022__auto__,G__288384),null));
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

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36026__auto__){
var self__ = this;
var this__36026__auto____$1 = this;
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

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36013__auto__,G__288384){
var self__ = this;
var this__36013__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,G__288384,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36019__auto__,entry__36020__auto__){
var self__ = this;
var this__36019__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36020__auto__)){
return cljs.core._assoc.call(null,this__36019__auto____$1,cljs.core._nth.call(null,entry__36020__auto__,(0)),cljs.core._nth.call(null,entry__36020__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36019__auto____$1,entry__36020__auto__);
}
});

loom.graph.WeightedFlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyDigraph.cljs$lang$type = true;

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrSeq = (function (this__36048__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/WeightedFlyDigraph");
});

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrWriter = (function (this__36048__auto__,writer__36049__auto__){
return cljs.core._write.call(null,writer__36049__auto__,"loom.graph/WeightedFlyDigraph");
});

loom.graph.__GT_WeightedFlyDigraph = (function loom$graph$__GT_WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start){
return (new loom.graph.WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start,null,null,null));
});

loom.graph.map__GT_WeightedFlyDigraph = (function loom$graph$map__GT_WeightedFlyDigraph(G__288389){
return (new loom.graph.WeightedFlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__288389),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__288389),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__288389),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__288389),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__288389),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__288389),null,cljs.core.dissoc.call(null,G__288389,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
var args__36468__auto__ = [];
var len__36461__auto___288632 = arguments.length;
var i__36462__auto___288634 = (0);
while(true){
if((i__36462__auto___288634 < len__36461__auto___288632)){
args__36468__auto__.push((arguments[i__36462__auto___288634]));

var G__288636 = (i__36462__auto___288634 + (1));
i__36462__auto___288634 = G__288636;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),nodes));
});

loom.graph.add_path.cljs$lang$maxFixedArity = (1);

loom.graph.add_path.cljs$lang$applyTo = (function (seq288626){
var G__288627 = cljs.core.first.call(null,seq288626);
var seq288626__$1 = cljs.core.next.call(null,seq288626);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic(G__288627,seq288626__$1);
});
/**
 * Adds a cycle of edges connecting the given nodes in order
 */
loom.graph.add_cycle = (function loom$graph$add_cycle(var_args){
var args__36468__auto__ = [];
var len__36461__auto___288642 = arguments.length;
var i__36462__auto___288643 = (0);
while(true){
if((i__36462__auto___288643 < len__36461__auto___288642)){
args__36468__auto__.push((arguments[i__36462__auto___288643]));

var G__288644 = (i__36462__auto___288643 + (1));
i__36462__auto___288643 = G__288644;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),cljs.core.concat.call(null,nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nodes)], null))));
});

loom.graph.add_cycle.cljs$lang$maxFixedArity = (1);

loom.graph.add_cycle.cljs$lang$applyTo = (function (seq288637){
var G__288638 = cljs.core.first.call(null,seq288637);
var seq288637__$1 = cljs.core.next.call(null,seq288637);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic(G__288638,seq288637__$1);
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
var args__36468__auto__ = [];
var len__36461__auto___288954 = arguments.length;
var i__36462__auto___288955 = (0);
while(true){
if((i__36462__auto___288955 < len__36461__auto___288954)){
args__36468__auto__.push((arguments[i__36462__auto___288955]));

var G__288956 = (i__36462__auto___288955 + (1));
i__36462__auto___288955 = G__288956;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,inits){
var build = (function loom$graph$build(g__$1,init){
if(cljs.core.truth_(loom.graph.graph_QMARK_.call(null,init))){
if(cljs.core.truth_((function (){var and__35380__auto__ = loom.graph.weighted_QMARK_.call(null,g__$1);
if(cljs.core.truth_(and__35380__auto__)){
return loom.graph.weighted_QMARK_.call(null,init);
} else {
return and__35380__auto__;
}
})())){
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,loom.graph.add_edges,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),(function (){var iter__36172__auto__ = (function loom$graph$build_$_iter__288878(s__288879){
return (new cljs.core.LazySeq(null,(function (){
var s__288879__$1 = s__288879;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__288879__$1);
if(temp__4657__auto__){
var s__288879__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__288879__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__288879__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__288881 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__288880 = (0);
while(true){
if((i__288880 < size__36171__auto__)){
var vec__288892 = cljs.core._nth.call(null,c__36170__auto__,i__288880);
var n1 = cljs.core.nth.call(null,vec__288892,(0),null);
var n2 = cljs.core.nth.call(null,vec__288892,(1),null);
cljs.core.chunk_append.call(null,b__288881,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null));

var G__288957 = (i__288880 + (1));
i__288880 = G__288957;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288881),loom$graph$build_$_iter__288878.call(null,cljs.core.chunk_rest.call(null,s__288879__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288881),null);
}
} else {
var vec__288895 = cljs.core.first.call(null,s__288879__$2);
var n1 = cljs.core.nth.call(null,vec__288895,(0),null);
var n2 = cljs.core.nth.call(null,vec__288895,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null),loom$graph$build_$_iter__288878.call(null,cljs.core.rest.call(null,s__288879__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36172__auto__.call(null,loom.graph.edges.call(null,init));
})()),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
} else {
return cljs.core.assoc.call(null,loom.graph.add_edges_STAR_.call(null,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),loom.graph.edges.call(null,init)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
}
} else {
if(cljs.core.map_QMARK_.call(null,init)){
var es = ((cljs.core.map_QMARK_.call(null,cljs.core.val.call(null,cljs.core.first.call(null,init))))?(function (){var iter__36172__auto__ = (function loom$graph$build_$_iter__288898(s__288899){
return (new cljs.core.LazySeq(null,(function (){
var s__288899__$1 = s__288899;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__288899__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__288923 = cljs.core.first.call(null,xs__5205__auto__);
var n = cljs.core.nth.call(null,vec__288923,(0),null);
var nbrs = cljs.core.nth.call(null,vec__288923,(1),null);
var iterys__36168__auto__ = ((function (s__288899__$1,vec__288923,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function loom$graph$build_$_iter__288898_$_iter__288900(s__288901){
return (new cljs.core.LazySeq(null,((function (s__288899__$1,vec__288923,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__288901__$1 = s__288901;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__288901__$1);
if(temp__4657__auto____$1){
var s__288901__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__288901__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__288901__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__288903 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__288902 = (0);
while(true){
if((i__288902 < size__36171__auto__)){
var vec__288933 = cljs.core._nth.call(null,c__36170__auto__,i__288902);
var nbr = cljs.core.nth.call(null,vec__288933,(0),null);
var wt = cljs.core.nth.call(null,vec__288933,(1),null);
cljs.core.chunk_append.call(null,b__288903,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__288965 = (i__288902 + (1));
i__288902 = G__288965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288903),loom$graph$build_$_iter__288898_$_iter__288900.call(null,cljs.core.chunk_rest.call(null,s__288901__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288903),null);
}
} else {
var vec__288935 = cljs.core.first.call(null,s__288901__$2);
var nbr = cljs.core.nth.call(null,vec__288935,(0),null);
var wt = cljs.core.nth.call(null,vec__288935,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),loom$graph$build_$_iter__288898_$_iter__288900.call(null,cljs.core.rest.call(null,s__288901__$2)));
}
} else {
return null;
}
break;
}
});})(s__288899__$1,vec__288923,n,nbrs,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__288899__$1,vec__288923,n,nbrs,xs__5205__auto__,temp__4657__auto__))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,nbrs));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,loom$graph$build_$_iter__288898.call(null,cljs.core.rest.call(null,s__288899__$1)));
} else {
var G__288969 = cljs.core.rest.call(null,s__288899__$1);
s__288899__$1 = G__288969;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36172__auto__.call(null,init);
})():(function (){var iter__36172__auto__ = (function loom$graph$build_$_iter__288938(s__288939){
return (new cljs.core.LazySeq(null,(function (){
var s__288939__$1 = s__288939;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__288939__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__288953 = cljs.core.first.call(null,xs__5205__auto__);
var n = cljs.core.nth.call(null,vec__288953,(0),null);
var nbrs = cljs.core.nth.call(null,vec__288953,(1),null);
var iterys__36168__auto__ = ((function (s__288939__$1,vec__288953,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function loom$graph$build_$_iter__288938_$_iter__288940(s__288941){
return (new cljs.core.LazySeq(null,((function (s__288939__$1,vec__288953,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__288941__$1 = s__288941;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__288941__$1);
if(temp__4657__auto____$1){
var s__288941__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__288941__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__288941__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__288943 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__288942 = (0);
while(true){
if((i__288942 < size__36171__auto__)){
var nbr = cljs.core._nth.call(null,c__36170__auto__,i__288942);
cljs.core.chunk_append.call(null,b__288943,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__288976 = (i__288942 + (1));
i__288942 = G__288976;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288943),loom$graph$build_$_iter__288938_$_iter__288940.call(null,cljs.core.chunk_rest.call(null,s__288941__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__288943),null);
}
} else {
var nbr = cljs.core.first.call(null,s__288941__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$build_$_iter__288938_$_iter__288940.call(null,cljs.core.rest.call(null,s__288941__$2)));
}
} else {
return null;
}
break;
}
});})(s__288939__$1,vec__288953,n,nbrs,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__288939__$1,vec__288953,n,nbrs,xs__5205__auto__,temp__4657__auto__))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,nbrs));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,loom$graph$build_$_iter__288938.call(null,cljs.core.rest.call(null,s__288939__$1)));
} else {
var G__288977 = cljs.core.rest.call(null,s__288939__$1);
s__288939__$1 = G__288977;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36172__auto__.call(null,init);
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

loom.graph.build_graph.cljs$lang$applyTo = (function (seq288665){
var G__288666 = cljs.core.first.call(null,seq288665);
var seq288665__$1 = cljs.core.next.call(null,seq288665);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic(G__288666,seq288665__$1);
});
/**
 * Creates an unweighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.graph = (function loom$graph$graph(var_args){
var args__36468__auto__ = [];
var len__36461__auto___288983 = arguments.length;
var i__36462__auto___288984 = (0);
while(true){
if((i__36462__auto___288984 < len__36461__auto___288983)){
args__36468__auto__.push((arguments[i__36462__auto___288984]));

var G__288986 = (i__36462__auto___288984 + (1));
i__36462__auto___288984 = G__288986;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((0) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((0)),(0),null)):null);
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(argseq__36469__auto__);
});

loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.graph.cljs$lang$maxFixedArity = (0);

loom.graph.graph.cljs$lang$applyTo = (function (seq288981){
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq288981));
});
/**
 * Creates an unweighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.digraph = (function loom$graph$digraph(var_args){
var args__36468__auto__ = [];
var len__36461__auto___288991 = arguments.length;
var i__36462__auto___288992 = (0);
while(true){
if((i__36462__auto___288992 < len__36461__auto___288991)){
args__36468__auto__.push((arguments[i__36462__auto___288992]));

var G__288993 = (i__36462__auto___288992 + (1));
i__36462__auto___288992 = G__288993;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((0) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((0)),(0),null)):null);
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__36469__auto__);
});

loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.digraph.cljs$lang$maxFixedArity = (0);

loom.graph.digraph.cljs$lang$applyTo = (function (seq288988){
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq288988));
});
/**
 * Creates an weighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_graph = (function loom$graph$weighted_graph(var_args){
var args__36468__auto__ = [];
var len__36461__auto___288996 = arguments.length;
var i__36462__auto___288997 = (0);
while(true){
if((i__36462__auto___288997 < len__36461__auto___288996)){
args__36468__auto__.push((arguments[i__36462__auto___288997]));

var G__288998 = (i__36462__auto___288997 + (1));
i__36462__auto___288997 = G__288998;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((0) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__36469__auto__);
});

loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_graph.cljs$lang$maxFixedArity = (0);

loom.graph.weighted_graph.cljs$lang$applyTo = (function (seq288995){
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq288995));
});
/**
 * Creates an weighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_digraph = (function loom$graph$weighted_digraph(var_args){
var args__36468__auto__ = [];
var len__36461__auto___289004 = arguments.length;
var i__36462__auto___289005 = (0);
while(true){
if((i__36462__auto___289005 < len__36461__auto___289004)){
args__36468__auto__.push((arguments[i__36462__auto___289005]));

var G__289006 = (i__36462__auto___289005 + (1));
i__36462__auto___289005 = G__289006;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((0) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__36469__auto__);
});

loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_digraph.cljs$lang$maxFixedArity = (0);

loom.graph.weighted_digraph.cljs$lang$applyTo = (function (seq289001){
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq289001));
});
/**
 * Creates a read-only, ad-hoc graph which uses the provided functions
 *   to return values for nodes, edges, etc. If any members are not functions,
 *   they will be returned as-is. Edges can be inferred if nodes and
 *   successors are provided. Nodes and edges can be inferred if successors and
 *   start are provided.
 */
loom.graph.fly_graph = (function loom$graph$fly_graph(var_args){
var args__36468__auto__ = [];
var len__36461__auto___289016 = arguments.length;
var i__36462__auto___289017 = (0);
while(true){
if((i__36462__auto___289017 < len__36461__auto___289016)){
args__36468__auto__.push((arguments[i__36462__auto___289017]));

var G__289018 = (i__36462__auto___289017 + (1));
i__36462__auto___289017 = G__289018;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((0) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((0)),(0),null)):null);
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__36469__auto__);
});

loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = (function (p__289011){
var map__289012 = p__289011;
var map__289012__$1 = ((((!((map__289012 == null)))?((((map__289012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__289012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__289012):map__289012);
var nodes = cljs.core.get.call(null,map__289012__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__289012__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var successors = cljs.core.get.call(null,map__289012__$1,new cljs.core.Keyword(null,"successors","successors",-1239296414));
var predecessors = cljs.core.get.call(null,map__289012__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var weight = cljs.core.get.call(null,map__289012__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var start = cljs.core.get.call(null,map__289012__$1,new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.truth_((function (){var and__35380__auto__ = predecessors;
if(cljs.core.truth_(and__35380__auto__)){
return weight;
} else {
return and__35380__auto__;
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

loom.graph.fly_graph.cljs$lang$applyTo = (function (seq289009){
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq289009));
});
