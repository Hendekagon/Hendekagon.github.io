// Compiled by ClojureScript 1.8.34 {}
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
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.nodes[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g);
} else {
var m__35855__auto____$1 = (loom.graph.nodes["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g);
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
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.edges[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g);
} else {
var m__35855__auto____$1 = (loom.graph.edges["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g);
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
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.has_node_QMARK_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g,node);
} else {
var m__35855__auto____$1 = (loom.graph.has_node_QMARK_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g,node);
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
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.has_edge_QMARK_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g,n1,n2);
} else {
var m__35855__auto____$1 = (loom.graph.has_edge_QMARK_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g,n1,n2);
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
var args450812 = [];
var len__36260__auto___450845 = arguments.length;
var i__36261__auto___450846 = (0);
while(true){
if((i__36261__auto___450846 < len__36260__auto___450845)){
args450812.push((arguments[i__36261__auto___450846]));

var G__450853 = (i__36261__auto___450846 + (1));
i__36261__auto___450846 = G__450853;
continue;
} else {
}
break;
}

var G__450815 = args450812.length;
switch (G__450815) {
case 1:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args450812.length)].join('')));

}
});

loom.graph.successors.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Graph$successors$arity$1 == null)))){
return g.loom$graph$Graph$successors$arity$1(g);
} else {
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.successors[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g);
} else {
var m__35855__auto____$1 = (loom.graph.successors["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g);
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
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.successors[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g,node);
} else {
var m__35855__auto____$1 = (loom.graph.successors["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g,node);
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
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.out_degree[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g,node);
} else {
var m__35855__auto____$1 = (loom.graph.out_degree["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g,node);
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
var args450820 = [];
var len__36260__auto___450866 = arguments.length;
var i__36261__auto___450867 = (0);
while(true){
if((i__36261__auto___450867 < len__36260__auto___450866)){
args450820.push((arguments[i__36261__auto___450867]));

var G__450868 = (i__36261__auto___450867 + (1));
i__36261__auto___450867 = G__450868;
continue;
} else {
}
break;
}

var G__450826 = args450820.length;
switch (G__450826) {
case 1:
return loom.graph.out_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.out_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args450820.length)].join('')));

}
});

loom.graph.out_edges.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Graph$out_edges$arity$1 == null)))){
return g.loom$graph$Graph$out_edges$arity$1(g);
} else {
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.out_edges[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g);
} else {
var m__35855__auto____$1 = (loom.graph.out_edges["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g);
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
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.out_edges[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g,node);
} else {
var m__35855__auto____$1 = (loom.graph.out_edges["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g,node);
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
var args450878 = [];
var len__36260__auto___450919 = arguments.length;
var i__36261__auto___450920 = (0);
while(true){
if((i__36261__auto___450920 < len__36260__auto___450919)){
args450878.push((arguments[i__36261__auto___450920]));

var G__450921 = (i__36261__auto___450920 + (1));
i__36261__auto___450920 = G__450921;
continue;
} else {
}
break;
}

var G__450884 = args450878.length;
switch (G__450884) {
case 1:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args450878.length)].join('')));

}
});

loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Digraph$predecessors$arity$1 == null)))){
return g.loom$graph$Digraph$predecessors$arity$1(g);
} else {
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.predecessors[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g);
} else {
var m__35855__auto____$1 = (loom.graph.predecessors["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g);
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
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.predecessors[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g,node);
} else {
var m__35855__auto____$1 = (loom.graph.predecessors["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g,node);
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
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.in_degree[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g,node);
} else {
var m__35855__auto____$1 = (loom.graph.in_degree["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g,node);
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
var args450891 = [];
var len__36260__auto___450947 = arguments.length;
var i__36261__auto___450948 = (0);
while(true){
if((i__36261__auto___450948 < len__36260__auto___450947)){
args450891.push((arguments[i__36261__auto___450948]));

var G__450952 = (i__36261__auto___450948 + (1));
i__36261__auto___450948 = G__450952;
continue;
} else {
}
break;
}

var G__450899 = args450891.length;
switch (G__450899) {
case 1:
return loom.graph.in_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.in_edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args450891.length)].join('')));

}
});

loom.graph.in_edges.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$Digraph$in_edges$arity$1 == null)))){
return g.loom$graph$Digraph$in_edges$arity$1(g);
} else {
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.in_edges[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g);
} else {
var m__35855__auto____$1 = (loom.graph.in_edges["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g);
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
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.in_edges[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g,node);
} else {
var m__35855__auto____$1 = (loom.graph.in_edges["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g,node);
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
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.transpose[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g);
} else {
var m__35855__auto____$1 = (loom.graph.transpose["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g);
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
var args450999 = [];
var len__36260__auto___451015 = arguments.length;
var i__36261__auto___451016 = (0);
while(true){
if((i__36261__auto___451016 < len__36260__auto___451015)){
args450999.push((arguments[i__36261__auto___451016]));

var G__451017 = (i__36261__auto___451016 + (1));
i__36261__auto___451016 = G__451017;
continue;
} else {
}
break;
}

var G__451004 = args450999.length;
switch (G__451004) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args450999.length)].join('')));

}
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$1 = (function (g){
if((!((g == null))) && (!((g.loom$graph$WeightedGraph$weight$arity$1 == null)))){
return g.loom$graph$WeightedGraph$weight$arity$1(g);
} else {
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.weight[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g);
} else {
var m__35855__auto____$1 = (loom.graph.weight["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g);
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
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.weight[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g,e);
} else {
var m__35855__auto____$1 = (loom.graph.weight["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g,e);
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
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.weight[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g,n1,n2);
} else {
var m__35855__auto____$1 = (loom.graph.weight["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g,n1,n2);
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
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.add_nodes_STAR_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g,nodes);
} else {
var m__35855__auto____$1 = (loom.graph.add_nodes_STAR_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g,nodes);
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
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.add_edges_STAR_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g,edges);
} else {
var m__35855__auto____$1 = (loom.graph.add_edges_STAR_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g,edges);
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
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.remove_nodes_STAR_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g,nodes);
} else {
var m__35855__auto____$1 = (loom.graph.remove_nodes_STAR_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g,nodes);
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
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.remove_edges_STAR_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g,edges);
} else {
var m__35855__auto____$1 = (loom.graph.remove_edges_STAR_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g,edges);
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
var x__35854__auto__ = (((g == null))?null:g);
var m__35855__auto__ = (loom.graph.remove_all[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,g);
} else {
var m__35855__auto____$1 = (loom.graph.remove_all["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,g);
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
var x__35854__auto__ = (((edge == null))?null:edge);
var m__35855__auto__ = (loom.graph.src[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,edge);
} else {
var m__35855__auto____$1 = (loom.graph.src["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,edge);
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
var x__35854__auto__ = (((edge == null))?null:edge);
var m__35855__auto__ = (loom.graph.dest[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,edge);
} else {
var m__35855__auto____$1 = (loom.graph.dest["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,edge);
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
var args__36267__auto__ = [];
var len__36260__auto___451167 = arguments.length;
var i__36261__auto___451170 = (0);
while(true){
if((i__36261__auto___451170 < len__36260__auto___451167)){
args__36267__auto__.push((arguments[i__36261__auto___451170]));

var G__451172 = (i__36261__auto___451170 + (1));
i__36261__auto___451170 = G__451172;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_nodes_STAR_.call(null,g,nodes);
});

loom.graph.add_nodes.cljs$lang$maxFixedArity = (1);

loom.graph.add_nodes.cljs$lang$applyTo = (function (seq451158){
var G__451159 = cljs.core.first.call(null,seq451158);
var seq451158__$1 = cljs.core.next.call(null,seq451158);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic(G__451159,seq451158__$1);
});
/**
 * Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].
 *   For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the
 *   latter defaulting to a weight of 1
 */
loom.graph.add_edges = (function loom$graph$add_edges(var_args){
var args__36267__auto__ = [];
var len__36260__auto___451184 = arguments.length;
var i__36261__auto___451185 = (0);
while(true){
if((i__36261__auto___451185 < len__36260__auto___451184)){
args__36267__auto__.push((arguments[i__36261__auto___451185]));

var G__451188 = (i__36261__auto___451185 + (1));
i__36261__auto___451185 = G__451188;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.add_edges_STAR_.call(null,g,edges);
});

loom.graph.add_edges.cljs$lang$maxFixedArity = (1);

loom.graph.add_edges.cljs$lang$applyTo = (function (seq451179){
var G__451180 = cljs.core.first.call(null,seq451179);
var seq451179__$1 = cljs.core.next.call(null,seq451179);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic(G__451180,seq451179__$1);
});
/**
 * Removes nodes from graph g
 */
loom.graph.remove_nodes = (function loom$graph$remove_nodes(var_args){
var args__36267__auto__ = [];
var len__36260__auto___451224 = arguments.length;
var i__36261__auto___451226 = (0);
while(true){
if((i__36261__auto___451226 < len__36260__auto___451224)){
args__36267__auto__.push((arguments[i__36261__auto___451226]));

var G__451228 = (i__36261__auto___451226 + (1));
i__36261__auto___451226 = G__451228;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.remove_nodes_STAR_.call(null,g,nodes);
});

loom.graph.remove_nodes.cljs$lang$maxFixedArity = (1);

loom.graph.remove_nodes.cljs$lang$applyTo = (function (seq451193){
var G__451194 = cljs.core.first.call(null,seq451193);
var seq451193__$1 = cljs.core.next.call(null,seq451193);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic(G__451194,seq451193__$1);
});
/**
 * Removes edges from graph g. Do not include weights
 */
loom.graph.remove_edges = (function loom$graph$remove_edges(var_args){
var args__36267__auto__ = [];
var len__36260__auto___451255 = arguments.length;
var i__36261__auto___451256 = (0);
while(true){
if((i__36261__auto___451256 < len__36260__auto___451255)){
args__36267__auto__.push((arguments[i__36261__auto___451256]));

var G__451258 = (i__36261__auto___451256 + (1));
i__36261__auto___451256 = G__451258;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.remove_edges_STAR_.call(null,g,edges);
});

loom.graph.remove_edges.cljs$lang$maxFixedArity = (1);

loom.graph.remove_edges.cljs$lang$applyTo = (function (seq451242){
var G__451243 = cljs.core.first.call(null,seq451242);
var seq451242__$1 = cljs.core.next.call(null,seq451242);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic(G__451243,seq451242__$1);
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
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),(function (p1__451302_SHARP_){
return cljs.core.apply.call(null,remove_fn,p1__451302_SHARP_,nodes);
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
var iter__35971__auto__ = ((function (g__$1){
return (function loom$graph$iter__451326(s__451327){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__451327__$1 = s__451327;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__451327__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__451327__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__451326_$_iter__451328(s__451329){
return (new cljs.core.LazySeq(null,((function (s__451327__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__451329__$1 = s__451329;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__451329__$1);
if(temp__4657__auto____$1){
var s__451329__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451329__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__451329__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__451331 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__451330 = (0);
while(true){
if((i__451330 < size__35970__auto__)){
var e = cljs.core._nth.call(null,c__35969__auto__,i__451330);
cljs.core.chunk_append.call(null,b__451331,e);

var G__451544 = (i__451330 + (1));
i__451330 = G__451544;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451331),loom$graph$iter__451326_$_iter__451328.call(null,cljs.core.chunk_rest.call(null,s__451329__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451331),null);
}
} else {
var e = cljs.core.first.call(null,s__451329__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__451326_$_iter__451328.call(null,cljs.core.rest.call(null,s__451329__$2)));
}
} else {
return null;
}
break;
}
});})(s__451327__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__451327__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$graph$iter__451326.call(null,cljs.core.rest.call(null,s__451327__$1)));
} else {
var G__451559 = cljs.core.rest.call(null,s__451327__$1);
s__451327__$1 = G__451559;
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
return iter__35971__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__35971__auto__ = ((function (g__$1){
return (function loom$graph$iter__451394(s__451395){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__451395__$1 = s__451395;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__451395__$1);
if(temp__4657__auto__){
var s__451395__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451395__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__451395__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__451397 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__451396 = (0);
while(true){
if((i__451396 < size__35970__auto__)){
var n2 = cljs.core._nth.call(null,c__35969__auto__,i__451396);
cljs.core.chunk_append.call(null,b__451397,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__451593 = (i__451396 + (1));
i__451396 = G__451593;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451397),loom$graph$iter__451394.call(null,cljs.core.chunk_rest.call(null,s__451395__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451397),null);
}
} else {
var n2 = cljs.core.first.call(null,s__451395__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__451394.call(null,cljs.core.rest.call(null,s__451395__$2)));
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
return iter__35971__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35813__auto__,k__35814__auto__){
var self__ = this;
var this__35813__auto____$1 = this;
return cljs.core._lookup.call(null,this__35813__auto____$1,k__35814__auto__,null);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35815__auto__,k451312,else__35816__auto__){
var self__ = this;
var this__35815__auto____$1 = this;
var G__451412 = (((k451312 instanceof cljs.core.Keyword))?k451312.fqn:null);
switch (G__451412) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k451312,else__35816__auto__);

}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35827__auto__,writer__35828__auto__,opts__35829__auto__){
var self__ = this;
var this__35827__auto____$1 = this;
var pr_pair__35830__auto__ = ((function (this__35827__auto____$1){
return (function (keyval__35831__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,cljs.core.pr_writer,""," ","",opts__35829__auto__,keyval__35831__auto__);
});})(this__35827__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,pr_pair__35830__auto__,"#loom.graph.BasicEditableGraph{",", ","}",opts__35829__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__451311){
var self__ = this;
var G__451311__$1 = this;
return (new cljs.core.RecordIter((0),G__451311__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35811__auto__){
var self__ = this;
var this__35811__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35807__auto__){
var self__ = this;
var this__35807__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35817__auto__){
var self__ = this;
var this__35817__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35808__auto__){
var self__ = this;
var this__35808__auto____$1 = this;
var h__35626__auto__ = self__.__hash;
if(!((h__35626__auto__ == null))){
return h__35626__auto__;
} else {
var h__35626__auto____$1 = cljs.core.hash_imap.call(null,this__35808__auto____$1);
self__.__hash = h__35626__auto____$1;

return h__35626__auto____$1;
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35809__auto__,other__35810__auto__){
var self__ = this;
var this__35809__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35179__auto__ = other__35810__auto__;
if(cljs.core.truth_(and__35179__auto__)){
var and__35179__auto____$1 = (this__35809__auto____$1.constructor === other__35810__auto__.constructor);
if(and__35179__auto____$1){
return cljs.core.equiv_map.call(null,this__35809__auto____$1,other__35810__auto__);
} else {
return and__35179__auto____$1;
}
} else {
return and__35179__auto__;
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
return (function (g__$2,p__451449){
var vec__451451 = p__451449;
var n1 = cljs.core.nth.call(null,vec__451451,(0),null);
var n2 = cljs.core.nth.call(null,vec__451451,(1),null);
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
return (function (g__$2,p__451457){
var vec__451458 = p__451457;
var n1 = cljs.core.nth.call(null,vec__451458,(0),null);
var n2 = cljs.core.nth.call(null,vec__451458,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35822__auto__,k__35823__auto__){
var self__ = this;
var this__35822__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__35823__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35822__auto____$1),self__.__meta),k__35823__auto__);
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35823__auto__)),null));
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35820__auto__,k__35821__auto__,G__451311){
var self__ = this;
var this__35820__auto____$1 = this;
var pred__451464 = cljs.core.keyword_identical_QMARK_;
var expr__451465 = k__35821__auto__;
if(cljs.core.truth_(pred__451464.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__451465))){
return (new loom.graph.BasicEditableGraph(G__451311,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__451464.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__451465))){
return (new loom.graph.BasicEditableGraph(self__.nodeset,G__451311,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35821__auto__,G__451311),null));
}
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35825__auto__){
var self__ = this;
var this__35825__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35812__auto__,G__451311){
var self__ = this;
var this__35812__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,G__451311,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35818__auto__,entry__35819__auto__){
var self__ = this;
var this__35818__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35819__auto__)){
return cljs.core._assoc.call(null,this__35818__auto____$1,cljs.core._nth.call(null,entry__35819__auto__,(0)),cljs.core._nth.call(null,entry__35819__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35818__auto____$1,entry__35819__auto__);
}
});

loom.graph.BasicEditableGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableGraph.cljs$lang$type = true;

loom.graph.BasicEditableGraph.cljs$lang$ctorPrSeq = (function (this__35847__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableGraph");
});

loom.graph.BasicEditableGraph.cljs$lang$ctorPrWriter = (function (this__35847__auto__,writer__35848__auto__){
return cljs.core._write.call(null,writer__35848__auto__,"loom.graph/BasicEditableGraph");
});

loom.graph.__GT_BasicEditableGraph = (function loom$graph$__GT_BasicEditableGraph(nodeset,adj){
return (new loom.graph.BasicEditableGraph(nodeset,adj,null,null,null));
});

loom.graph.map__GT_BasicEditableGraph = (function loom$graph$map__GT_BasicEditableGraph(G__451317){
return (new loom.graph.BasicEditableGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__451317),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__451317),null,cljs.core.dissoc.call(null,G__451317,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)),null));
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
var iter__35971__auto__ = ((function (g__$1){
return (function loom$graph$iter__451831(s__451832){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__451832__$1 = s__451832;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__451832__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__451832__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__451831_$_iter__451833(s__451834){
return (new cljs.core.LazySeq(null,((function (s__451832__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__451834__$1 = s__451834;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__451834__$1);
if(temp__4657__auto____$1){
var s__451834__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451834__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__451834__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__451836 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__451835 = (0);
while(true){
if((i__451835 < size__35970__auto__)){
var e = cljs.core._nth.call(null,c__35969__auto__,i__451835);
cljs.core.chunk_append.call(null,b__451836,e);

var G__451954 = (i__451835 + (1));
i__451835 = G__451954;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451836),loom$graph$iter__451831_$_iter__451833.call(null,cljs.core.chunk_rest.call(null,s__451834__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451836),null);
}
} else {
var e = cljs.core.first.call(null,s__451834__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__451831_$_iter__451833.call(null,cljs.core.rest.call(null,s__451834__$2)));
}
} else {
return null;
}
break;
}
});})(s__451832__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__451832__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$graph$iter__451831.call(null,cljs.core.rest.call(null,s__451832__$1)));
} else {
var G__451963 = cljs.core.rest.call(null,s__451832__$1);
s__451832__$1 = G__451963;
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
return iter__35971__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__35971__auto__ = ((function (g__$1){
return (function loom$graph$iter__451860(s__451861){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__451861__$1 = s__451861;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__451861__$1);
if(temp__4657__auto__){
var s__451861__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451861__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__451861__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__451863 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__451862 = (0);
while(true){
if((i__451862 < size__35970__auto__)){
var n2 = cljs.core._nth.call(null,c__35969__auto__,i__451862);
cljs.core.chunk_append.call(null,b__451863,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__451984 = (i__451862 + (1));
i__451862 = G__451984;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451863),loom$graph$iter__451860.call(null,cljs.core.chunk_rest.call(null,s__451861__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451863),null);
}
} else {
var n2 = cljs.core.first.call(null,s__451861__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__451860.call(null,cljs.core.rest.call(null,s__451861__$2)));
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
return iter__35971__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35813__auto__,k__35814__auto__){
var self__ = this;
var this__35813__auto____$1 = this;
return cljs.core._lookup.call(null,this__35813__auto____$1,k__35814__auto__,null);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35815__auto__,k451827,else__35816__auto__){
var self__ = this;
var this__35815__auto____$1 = this;
var G__451872 = (((k451827 instanceof cljs.core.Keyword))?k451827.fqn:null);
switch (G__451872) {
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
return cljs.core.get.call(null,self__.__extmap,k451827,else__35816__auto__);

}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35827__auto__,writer__35828__auto__,opts__35829__auto__){
var self__ = this;
var this__35827__auto____$1 = this;
var pr_pair__35830__auto__ = ((function (this__35827__auto____$1){
return (function (keyval__35831__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,cljs.core.pr_writer,""," ","",opts__35829__auto__,keyval__35831__auto__);
});})(this__35827__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,pr_pair__35830__auto__,"#loom.graph.BasicEditableDigraph{",", ","}",opts__35829__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__451826){
var self__ = this;
var G__451826__$1 = this;
return (new cljs.core.RecordIter((0),G__451826__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35811__auto__){
var self__ = this;
var this__35811__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35807__auto__){
var self__ = this;
var this__35807__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35817__auto__){
var self__ = this;
var this__35817__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35808__auto__){
var self__ = this;
var this__35808__auto____$1 = this;
var h__35626__auto__ = self__.__hash;
if(!((h__35626__auto__ == null))){
return h__35626__auto__;
} else {
var h__35626__auto____$1 = cljs.core.hash_imap.call(null,this__35808__auto____$1);
self__.__hash = h__35626__auto____$1;

return h__35626__auto____$1;
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35809__auto__,other__35810__auto__){
var self__ = this;
var this__35809__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35179__auto__ = other__35810__auto__;
if(cljs.core.truth_(and__35179__auto__)){
var and__35179__auto____$1 = (this__35809__auto____$1.constructor === other__35810__auto__.constructor);
if(and__35179__auto____$1){
return cljs.core.equiv_map.call(null,this__35809__auto____$1,other__35810__auto__);
} else {
return and__35179__auto____$1;
}
} else {
return and__35179__auto__;
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
return (function (g__$2,p__451887){
var vec__451888 = p__451887;
var n1 = cljs.core.nth.call(null,vec__451888,(0),null);
var n2 = cljs.core.nth.call(null,vec__451888,(1),null);
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
return (function (g__$2,p__451893){
var vec__451894 = p__451893;
var n1 = cljs.core.nth.call(null,vec__451894,(0),null);
var n2 = cljs.core.nth.call(null,vec__451894,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35822__auto__,k__35823__auto__){
var self__ = this;
var this__35822__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__35823__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35822__auto____$1),self__.__meta),k__35823__auto__);
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35823__auto__)),null));
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35820__auto__,k__35821__auto__,G__451826){
var self__ = this;
var this__35820__auto____$1 = this;
var pred__451900 = cljs.core.keyword_identical_QMARK_;
var expr__451901 = k__35821__auto__;
if(cljs.core.truth_(pred__451900.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__451901))){
return (new loom.graph.BasicEditableDigraph(G__451826,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__451900.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__451901))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,G__451826,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__451900.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__451901))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,G__451826,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35821__auto__,G__451826),null));
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
var iter__35971__auto__ = ((function (g__$1){
return (function loom$graph$iter__451909(s__451910){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__451910__$1 = s__451910;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__451910__$1);
if(temp__4657__auto__){
var s__451910__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__451910__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__451910__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__451912 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__451911 = (0);
while(true){
if((i__451911 < size__35970__auto__)){
var n2 = cljs.core._nth.call(null,c__35969__auto__,i__451911);
cljs.core.chunk_append.call(null,b__451912,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__452089 = (i__451911 + (1));
i__451911 = G__452089;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451912),loom$graph$iter__451909.call(null,cljs.core.chunk_rest.call(null,s__451910__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__451912),null);
}
} else {
var n2 = cljs.core.first.call(null,s__451910__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__451909.call(null,cljs.core.rest.call(null,s__451910__$2)));
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
return iter__35971__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35825__auto__){
var self__ = this;
var this__35825__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35812__auto__,G__451826){
var self__ = this;
var this__35812__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,G__451826,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35818__auto__,entry__35819__auto__){
var self__ = this;
var this__35818__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35819__auto__)){
return cljs.core._assoc.call(null,this__35818__auto____$1,cljs.core._nth.call(null,entry__35819__auto__,(0)),cljs.core._nth.call(null,entry__35819__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35818__auto____$1,entry__35819__auto__);
}
});

loom.graph.BasicEditableDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableDigraph.cljs$lang$type = true;

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrSeq = (function (this__35847__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableDigraph");
});

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrWriter = (function (this__35847__auto__,writer__35848__auto__){
return cljs.core._write.call(null,writer__35848__auto__,"loom.graph/BasicEditableDigraph");
});

loom.graph.__GT_BasicEditableDigraph = (function loom$graph$__GT_BasicEditableDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableDigraph(nodeset,adj,in$,null,null,null));
});

loom.graph.map__GT_BasicEditableDigraph = (function loom$graph$map__GT_BasicEditableDigraph(G__451828){
return (new loom.graph.BasicEditableDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__451828),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__451828),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__451828),null,cljs.core.dissoc.call(null,G__451828,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)),null));
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
var iter__35971__auto__ = ((function (g__$1){
return (function loom$graph$iter__452132(s__452133){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__452133__$1 = s__452133;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__452133__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__452133__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__452132_$_iter__452134(s__452135){
return (new cljs.core.LazySeq(null,((function (s__452133__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__452135__$1 = s__452135;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__452135__$1);
if(temp__4657__auto____$1){
var s__452135__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__452135__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__452135__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__452137 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__452136 = (0);
while(true){
if((i__452136 < size__35970__auto__)){
var e = cljs.core._nth.call(null,c__35969__auto__,i__452136);
cljs.core.chunk_append.call(null,b__452137,e);

var G__452287 = (i__452136 + (1));
i__452136 = G__452287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__452137),loom$graph$iter__452132_$_iter__452134.call(null,cljs.core.chunk_rest.call(null,s__452135__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__452137),null);
}
} else {
var e = cljs.core.first.call(null,s__452135__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__452132_$_iter__452134.call(null,cljs.core.rest.call(null,s__452135__$2)));
}
} else {
return null;
}
break;
}
});})(s__452133__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__452133__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$graph$iter__452132.call(null,cljs.core.rest.call(null,s__452133__$1)));
} else {
var G__452296 = cljs.core.rest.call(null,s__452133__$1);
s__452133__$1 = G__452296;
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
return iter__35971__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__35971__auto__ = ((function (g__$1){
return (function loom$graph$iter__452171(s__452172){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__452172__$1 = s__452172;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__452172__$1);
if(temp__4657__auto__){
var s__452172__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__452172__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__452172__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__452174 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__452173 = (0);
while(true){
if((i__452173 < size__35970__auto__)){
var n2 = cljs.core._nth.call(null,c__35969__auto__,i__452173);
cljs.core.chunk_append.call(null,b__452174,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__452327 = (i__452173 + (1));
i__452173 = G__452327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__452174),loom$graph$iter__452171.call(null,cljs.core.chunk_rest.call(null,s__452172__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__452174),null);
}
} else {
var n2 = cljs.core.first.call(null,s__452172__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__452171.call(null,cljs.core.rest.call(null,s__452172__$2)));
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
return iter__35971__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35813__auto__,k__35814__auto__){
var self__ = this;
var this__35813__auto____$1 = this;
return cljs.core._lookup.call(null,this__35813__auto____$1,k__35814__auto__,null);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35815__auto__,k452123,else__35816__auto__){
var self__ = this;
var this__35815__auto____$1 = this;
var G__452211 = (((k452123 instanceof cljs.core.Keyword))?k452123.fqn:null);
switch (G__452211) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k452123,else__35816__auto__);

}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35827__auto__,writer__35828__auto__,opts__35829__auto__){
var self__ = this;
var this__35827__auto____$1 = this;
var pr_pair__35830__auto__ = ((function (this__35827__auto____$1){
return (function (keyval__35831__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,cljs.core.pr_writer,""," ","",opts__35829__auto__,keyval__35831__auto__);
});})(this__35827__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,pr_pair__35830__auto__,"#loom.graph.BasicEditableWeightedGraph{",", ","}",opts__35829__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__452122){
var self__ = this;
var G__452122__$1 = this;
return (new cljs.core.RecordIter((0),G__452122__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35811__auto__){
var self__ = this;
var this__35811__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35807__auto__){
var self__ = this;
var this__35807__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35817__auto__){
var self__ = this;
var this__35817__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35808__auto__){
var self__ = this;
var this__35808__auto____$1 = this;
var h__35626__auto__ = self__.__hash;
if(!((h__35626__auto__ == null))){
return h__35626__auto__;
} else {
var h__35626__auto____$1 = cljs.core.hash_imap.call(null,this__35808__auto____$1);
self__.__hash = h__35626__auto____$1;

return h__35626__auto____$1;
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35809__auto__,other__35810__auto__){
var self__ = this;
var this__35809__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35179__auto__ = other__35810__auto__;
if(cljs.core.truth_(and__35179__auto__)){
var and__35179__auto____$1 = (this__35809__auto____$1.constructor === other__35810__auto__.constructor);
if(and__35179__auto____$1){
return cljs.core.equiv_map.call(null,this__35809__auto____$1,other__35810__auto__);
} else {
return and__35179__auto____$1;
}
} else {
return and__35179__auto__;
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
return (function (g__$2,p__452233){
var vec__452234 = p__452233;
var n1 = cljs.core.nth.call(null,vec__452234,(0),null);
var n2 = cljs.core.nth.call(null,vec__452234,(1),null);
var vec__452235 = cljs.core.nthnext.call(null,vec__452234,(2));
var w = cljs.core.nth.call(null,vec__452235,(0),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__35191__auto__ = w;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2,n1], null),(function (){var or__35191__auto__ = w;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
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
return (function (g__$2,p__452245){
var vec__452246 = p__452245;
var n1 = cljs.core.nth.call(null,vec__452246,(0),null);
var n2 = cljs.core.nth.call(null,vec__452246,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.dissoc,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35822__auto__,k__35823__auto__){
var self__ = this;
var this__35822__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__35823__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35822__auto____$1),self__.__meta),k__35823__auto__);
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35823__auto__)),null));
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35820__auto__,k__35821__auto__,G__452122){
var self__ = this;
var this__35820__auto____$1 = this;
var pred__452249 = cljs.core.keyword_identical_QMARK_;
var expr__452250 = k__35821__auto__;
if(cljs.core.truth_(pred__452249.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__452250))){
return (new loom.graph.BasicEditableWeightedGraph(G__452122,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__452249.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__452250))){
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,G__452122,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35821__auto__,G__452122),null));
}
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35825__auto__){
var self__ = this;
var this__35825__auto____$1 = this;
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

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35812__auto__,G__452122){
var self__ = this;
var this__35812__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,G__452122,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35818__auto__,entry__35819__auto__){
var self__ = this;
var this__35818__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35819__auto__)){
return cljs.core._assoc.call(null,this__35818__auto____$1,cljs.core._nth.call(null,entry__35819__auto__,(0)),cljs.core._nth.call(null,entry__35819__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35818__auto____$1,entry__35819__auto__);
}
});

loom.graph.BasicEditableWeightedGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrSeq = (function (this__35847__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableWeightedGraph");
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrWriter = (function (this__35847__auto__,writer__35848__auto__){
return cljs.core._write.call(null,writer__35848__auto__,"loom.graph/BasicEditableWeightedGraph");
});

loom.graph.__GT_BasicEditableWeightedGraph = (function loom$graph$__GT_BasicEditableWeightedGraph(nodeset,adj){
return (new loom.graph.BasicEditableWeightedGraph(nodeset,adj,null,null,null));
});

loom.graph.map__GT_BasicEditableWeightedGraph = (function loom$graph$map__GT_BasicEditableWeightedGraph(G__452127){
return (new loom.graph.BasicEditableWeightedGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__452127),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__452127),null,cljs.core.dissoc.call(null,G__452127,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)),null));
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
var iter__35971__auto__ = ((function (g__$1){
return (function loom$graph$iter__452518(s__452519){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__452519__$1 = s__452519;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__452519__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__452519__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__452518_$_iter__452520(s__452521){
return (new cljs.core.LazySeq(null,((function (s__452519__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__452521__$1 = s__452521;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__452521__$1);
if(temp__4657__auto____$1){
var s__452521__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__452521__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__452521__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__452523 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__452522 = (0);
while(true){
if((i__452522 < size__35970__auto__)){
var e = cljs.core._nth.call(null,c__35969__auto__,i__452522);
cljs.core.chunk_append.call(null,b__452523,e);

var G__452600 = (i__452522 + (1));
i__452522 = G__452600;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__452523),loom$graph$iter__452518_$_iter__452520.call(null,cljs.core.chunk_rest.call(null,s__452521__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__452523),null);
}
} else {
var e = cljs.core.first.call(null,s__452521__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__452518_$_iter__452520.call(null,cljs.core.rest.call(null,s__452521__$2)));
}
} else {
return null;
}
break;
}
});})(s__452519__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__452519__$1,n1,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$graph$iter__452518.call(null,cljs.core.rest.call(null,s__452519__$1)));
} else {
var G__452607 = cljs.core.rest.call(null,s__452519__$1);
s__452519__$1 = G__452607;
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
return iter__35971__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__35971__auto__ = ((function (g__$1){
return (function loom$graph$iter__452553(s__452554){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__452554__$1 = s__452554;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__452554__$1);
if(temp__4657__auto__){
var s__452554__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__452554__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__452554__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__452556 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__452555 = (0);
while(true){
if((i__452555 < size__35970__auto__)){
var n2 = cljs.core._nth.call(null,c__35969__auto__,i__452555);
cljs.core.chunk_append.call(null,b__452556,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__452744 = (i__452555 + (1));
i__452555 = G__452744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__452556),loom$graph$iter__452553.call(null,cljs.core.chunk_rest.call(null,s__452554__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__452556),null);
}
} else {
var n2 = cljs.core.first.call(null,s__452554__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__452553.call(null,cljs.core.rest.call(null,s__452554__$2)));
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
return iter__35971__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
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

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35813__auto__,k__35814__auto__){
var self__ = this;
var this__35813__auto____$1 = this;
return cljs.core._lookup.call(null,this__35813__auto____$1,k__35814__auto__,null);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35815__auto__,k452510,else__35816__auto__){
var self__ = this;
var this__35815__auto____$1 = this;
var G__452562 = (((k452510 instanceof cljs.core.Keyword))?k452510.fqn:null);
switch (G__452562) {
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
return cljs.core.get.call(null,self__.__extmap,k452510,else__35816__auto__);

}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35827__auto__,writer__35828__auto__,opts__35829__auto__){
var self__ = this;
var this__35827__auto____$1 = this;
var pr_pair__35830__auto__ = ((function (this__35827__auto____$1){
return (function (keyval__35831__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,cljs.core.pr_writer,""," ","",opts__35829__auto__,keyval__35831__auto__);
});})(this__35827__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,pr_pair__35830__auto__,"#loom.graph.BasicEditableWeightedDigraph{",", ","}",opts__35829__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__452509){
var self__ = this;
var G__452509__$1 = this;
return (new cljs.core.RecordIter((0),G__452509__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35811__auto__){
var self__ = this;
var this__35811__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35807__auto__){
var self__ = this;
var this__35807__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35817__auto__){
var self__ = this;
var this__35817__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35808__auto__){
var self__ = this;
var this__35808__auto____$1 = this;
var h__35626__auto__ = self__.__hash;
if(!((h__35626__auto__ == null))){
return h__35626__auto__;
} else {
var h__35626__auto____$1 = cljs.core.hash_imap.call(null,this__35808__auto____$1);
self__.__hash = h__35626__auto____$1;

return h__35626__auto____$1;
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35809__auto__,other__35810__auto__){
var self__ = this;
var this__35809__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35179__auto__ = other__35810__auto__;
if(cljs.core.truth_(and__35179__auto__)){
var and__35179__auto____$1 = (this__35809__auto____$1.constructor === other__35810__auto__.constructor);
if(and__35179__auto____$1){
return cljs.core.equiv_map.call(null,this__35809__auto____$1,other__35810__auto__);
} else {
return and__35179__auto____$1;
}
} else {
return and__35179__auto__;
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
return (function (g__$2,p__452568){
var vec__452569 = p__452568;
var n1 = cljs.core.nth.call(null,vec__452569,(0),null);
var n2 = cljs.core.nth.call(null,vec__452569,(1),null);
var vec__452570 = cljs.core.nthnext.call(null,vec__452569,(2));
var w = cljs.core.nth.call(null,vec__452570,(0),null);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__35191__auto__ = w;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
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
return (function (g__$2,p__452572){
var vec__452573 = p__452572;
var n1 = cljs.core.nth.call(null,vec__452573,(0),null);
var n2 = cljs.core.nth.call(null,vec__452573,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35822__auto__,k__35823__auto__){
var self__ = this;
var this__35822__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__35823__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35822__auto____$1),self__.__meta),k__35823__auto__);
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35823__auto__)),null));
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35820__auto__,k__35821__auto__,G__452509){
var self__ = this;
var this__35820__auto____$1 = this;
var pred__452576 = cljs.core.keyword_identical_QMARK_;
var expr__452577 = k__35821__auto__;
if(cljs.core.truth_(pred__452576.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__452577))){
return (new loom.graph.BasicEditableWeightedDigraph(G__452509,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__452576.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__452577))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,G__452509,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__452576.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__452577))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,G__452509,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35821__auto__,G__452509),null));
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
var iter__35971__auto__ = ((function (g__$1){
return (function loom$graph$iter__452582(s__452583){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__452583__$1 = s__452583;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__452583__$1);
if(temp__4657__auto__){
var s__452583__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__452583__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__452583__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__452585 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__452584 = (0);
while(true){
if((i__452584 < size__35970__auto__)){
var n2 = cljs.core._nth.call(null,c__35969__auto__,i__452584);
cljs.core.chunk_append.call(null,b__452585,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__453054 = (i__452584 + (1));
i__452584 = G__453054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__452585),loom$graph$iter__452582.call(null,cljs.core.chunk_rest.call(null,s__452583__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__452585),null);
}
} else {
var n2 = cljs.core.first.call(null,s__452583__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__452582.call(null,cljs.core.rest.call(null,s__452583__$2)));
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
return iter__35971__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (tg,p__452589){
var vec__452590 = p__452589;
var n1 = cljs.core.nth.call(null,vec__452590,(0),null);
var n2 = cljs.core.nth.call(null,vec__452590,(1),null);
return loom.graph.add_edges_STAR_.call(null,tg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,n1,loom.graph.weight.call(null,g__$1,n1,n2)], null)], null));
});})(g__$1))
,cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY),loom.graph.edges.call(null,g__$1));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35825__auto__){
var self__ = this;
var this__35825__auto____$1 = this;
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

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35812__auto__,G__452509){
var self__ = this;
var this__35812__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,G__452509,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35818__auto__,entry__35819__auto__){
var self__ = this;
var this__35818__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35819__auto__)){
return cljs.core._assoc.call(null,this__35818__auto____$1,cljs.core._nth.call(null,entry__35819__auto__,(0)),cljs.core._nth.call(null,entry__35819__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35818__auto____$1,entry__35819__auto__);
}
});

loom.graph.BasicEditableWeightedDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrSeq = (function (this__35847__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/BasicEditableWeightedDigraph");
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrWriter = (function (this__35847__auto__,writer__35848__auto__){
return cljs.core._write.call(null,writer__35848__auto__,"loom.graph/BasicEditableWeightedDigraph");
});

loom.graph.__GT_BasicEditableWeightedDigraph = (function loom$graph$__GT_BasicEditableWeightedDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableWeightedDigraph(nodeset,adj,in$,null,null,null));
});

loom.graph.map__GT_BasicEditableWeightedDigraph = (function loom$graph$map__GT_BasicEditableWeightedDigraph(G__452511){
return (new loom.graph.BasicEditableWeightedDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__452511),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__452511),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__452511),null,cljs.core.dissoc.call(null,G__452511,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)),null));
});

loom.graph.call_or_return = (function loom$graph$call_or_return(var_args){
var args__36267__auto__ = [];
var len__36260__auto___453112 = arguments.length;
var i__36261__auto___453113 = (0);
while(true){
if((i__36261__auto___453113 < len__36260__auto___453112)){
args__36267__auto__.push((arguments[i__36261__auto___453113]));

var G__453114 = (i__36261__auto___453113 + (1));
i__36261__auto___453113 = G__453114;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if((cljs.core.fn_QMARK_.call(null,f)) || (((f instanceof clojure.lang.IFn)) && (cljs.core.seq.call(null,args)))){
return cljs.core.apply.call(null,f,args);
} else {
return f;
}
});

loom.graph.call_or_return.cljs$lang$maxFixedArity = (1);

loom.graph.call_or_return.cljs$lang$applyTo = (function (seq453110){
var G__453111 = cljs.core.first.call(null,seq453110);
var seq453110__$1 = cljs.core.next.call(null,seq453110);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(G__453111,seq453110__$1);
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
if(cljs.core.truth_((function (){var or__35191__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
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
var iter__35971__auto__ = ((function (g__$1){
return (function loom$graph$iter__453123(s__453124){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__453124__$1 = s__453124;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__453124__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__453124__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__453123_$_iter__453125(s__453126){
return (new cljs.core.LazySeq(null,((function (s__453124__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__453126__$1 = s__453126;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__453126__$1);
if(temp__4657__auto____$1){
var s__453126__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__453126__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__453126__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__453128 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__453127 = (0);
while(true){
if((i__453127 < size__35970__auto__)){
var nbr = cljs.core._nth.call(null,c__35969__auto__,i__453127);
cljs.core.chunk_append.call(null,b__453128,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__453157 = (i__453127 + (1));
i__453127 = G__453157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__453128),loom$graph$iter__453123_$_iter__453125.call(null,cljs.core.chunk_rest.call(null,s__453126__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__453128),null);
}
} else {
var nbr = cljs.core.first.call(null,s__453126__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__453123_$_iter__453125.call(null,cljs.core.rest.call(null,s__453126__$2)));
}
} else {
return null;
}
break;
}
});})(s__453124__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__453124__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$graph$iter__453123.call(null,cljs.core.rest.call(null,s__453124__$1)));
} else {
var G__453158 = cljs.core.rest.call(null,s__453124__$1);
s__453124__$1 = G__453158;
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
return iter__35971__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__35971__auto__ = ((function (g__$1){
return (function loom$graph$iter__453135(s__453136){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__453136__$1 = s__453136;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__453136__$1);
if(temp__4657__auto__){
var s__453136__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__453136__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__453136__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__453138 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__453137 = (0);
while(true){
if((i__453137 < size__35970__auto__)){
var n2 = cljs.core._nth.call(null,c__35969__auto__,i__453137);
cljs.core.chunk_append.call(null,b__453138,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__453166 = (i__453137 + (1));
i__453137 = G__453166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__453138),loom$graph$iter__453135.call(null,cljs.core.chunk_rest.call(null,s__453136__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__453138),null);
}
} else {
var n2 = cljs.core.first.call(null,s__453136__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__453135.call(null,cljs.core.rest.call(null,s__453136__$2)));
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
return iter__35971__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35813__auto__,k__35814__auto__){
var self__ = this;
var this__35813__auto____$1 = this;
return cljs.core._lookup.call(null,this__35813__auto____$1,k__35814__auto__,null);
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35815__auto__,k453119,else__35816__auto__){
var self__ = this;
var this__35815__auto____$1 = this;
var G__453142 = (((k453119 instanceof cljs.core.Keyword))?k453119.fqn:null);
switch (G__453142) {
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
return cljs.core.get.call(null,self__.__extmap,k453119,else__35816__auto__);

}
});

loom.graph.FlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35827__auto__,writer__35828__auto__,opts__35829__auto__){
var self__ = this;
var this__35827__auto____$1 = this;
var pr_pair__35830__auto__ = ((function (this__35827__auto____$1){
return (function (keyval__35831__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,cljs.core.pr_writer,""," ","",opts__35829__auto__,keyval__35831__auto__);
});})(this__35827__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,pr_pair__35830__auto__,"#loom.graph.FlyGraph{",", ","}",opts__35829__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__453117){
var self__ = this;
var G__453117__$1 = this;
return (new cljs.core.RecordIter((0),G__453117__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.FlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35811__auto__){
var self__ = this;
var this__35811__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35807__auto__){
var self__ = this;
var this__35807__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35817__auto__){
var self__ = this;
var this__35817__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35808__auto__){
var self__ = this;
var this__35808__auto____$1 = this;
var h__35626__auto__ = self__.__hash;
if(!((h__35626__auto__ == null))){
return h__35626__auto__;
} else {
var h__35626__auto____$1 = cljs.core.hash_imap.call(null,this__35808__auto____$1);
self__.__hash = h__35626__auto____$1;

return h__35626__auto____$1;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35809__auto__,other__35810__auto__){
var self__ = this;
var this__35809__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35179__auto__ = other__35810__auto__;
if(cljs.core.truth_(and__35179__auto__)){
var and__35179__auto____$1 = (this__35809__auto____$1.constructor === other__35810__auto__.constructor);
if(and__35179__auto____$1){
return cljs.core.equiv_map.call(null,this__35809__auto____$1,other__35810__auto__);
} else {
return and__35179__auto____$1;
}
} else {
return and__35179__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35822__auto__,k__35823__auto__){
var self__ = this;
var this__35822__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null], null), null),k__35823__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35822__auto____$1),self__.__meta),k__35823__auto__);
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35823__auto__)),null));
}
});

loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35820__auto__,k__35821__auto__,G__453117){
var self__ = this;
var this__35820__auto____$1 = this;
var pred__453145 = cljs.core.keyword_identical_QMARK_;
var expr__453146 = k__35821__auto__;
if(cljs.core.truth_(pred__453145.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__453146))){
return (new loom.graph.FlyGraph(G__453117,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__453145.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__453146))){
return (new loom.graph.FlyGraph(self__.fnodes,G__453117,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__453145.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__453146))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,G__453117,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__453145.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__453146))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__453117,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35821__auto__,G__453117),null));
}
}
}
}
});

loom.graph.FlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35825__auto__){
var self__ = this;
var this__35825__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35812__auto__,G__453117){
var self__ = this;
var this__35812__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,G__453117,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35818__auto__,entry__35819__auto__){
var self__ = this;
var this__35818__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35819__auto__)){
return cljs.core._assoc.call(null,this__35818__auto____$1,cljs.core._nth.call(null,entry__35819__auto__,(0)),cljs.core._nth.call(null,entry__35819__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35818__auto____$1,entry__35819__auto__);
}
});

loom.graph.FlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyGraph.cljs$lang$type = true;

loom.graph.FlyGraph.cljs$lang$ctorPrSeq = (function (this__35847__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/FlyGraph");
});

loom.graph.FlyGraph.cljs$lang$ctorPrWriter = (function (this__35847__auto__,writer__35848__auto__){
return cljs.core._write.call(null,writer__35848__auto__,"loom.graph/FlyGraph");
});

loom.graph.__GT_FlyGraph = (function loom$graph$__GT_FlyGraph(fnodes,fedges,fsuccessors,start){
return (new loom.graph.FlyGraph(fnodes,fedges,fsuccessors,start,null,null,null));
});

loom.graph.map__GT_FlyGraph = (function loom$graph$map__GT_FlyGraph(G__453121){
return (new loom.graph.FlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__453121),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__453121),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__453121),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__453121),null,cljs.core.dissoc.call(null,G__453121,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__35191__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
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
var iter__35971__auto__ = ((function (g__$1){
return (function loom$graph$iter__453195(s__453196){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__453196__$1 = s__453196;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__453196__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__453196__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__453195_$_iter__453197(s__453198){
return (new cljs.core.LazySeq(null,((function (s__453196__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__453198__$1 = s__453198;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__453198__$1);
if(temp__4657__auto____$1){
var s__453198__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__453198__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__453198__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__453200 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__453199 = (0);
while(true){
if((i__453199 < size__35970__auto__)){
var nbr = cljs.core._nth.call(null,c__35969__auto__,i__453199);
cljs.core.chunk_append.call(null,b__453200,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__453217 = (i__453199 + (1));
i__453199 = G__453217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__453200),loom$graph$iter__453195_$_iter__453197.call(null,cljs.core.chunk_rest.call(null,s__453198__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__453200),null);
}
} else {
var nbr = cljs.core.first.call(null,s__453198__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__453195_$_iter__453197.call(null,cljs.core.rest.call(null,s__453198__$2)));
}
} else {
return null;
}
break;
}
});})(s__453196__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__453196__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$graph$iter__453195.call(null,cljs.core.rest.call(null,s__453196__$1)));
} else {
var G__453222 = cljs.core.rest.call(null,s__453196__$1);
s__453196__$1 = G__453222;
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
return iter__35971__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__35971__auto__ = ((function (g__$1){
return (function loom$graph$iter__453209(s__453210){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__453210__$1 = s__453210;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__453210__$1);
if(temp__4657__auto__){
var s__453210__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__453210__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__453210__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__453212 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__453211 = (0);
while(true){
if((i__453211 < size__35970__auto__)){
var n2 = cljs.core._nth.call(null,c__35969__auto__,i__453211);
cljs.core.chunk_append.call(null,b__453212,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__453232 = (i__453211 + (1));
i__453211 = G__453232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__453212),loom$graph$iter__453209.call(null,cljs.core.chunk_rest.call(null,s__453210__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__453212),null);
}
} else {
var n2 = cljs.core.first.call(null,s__453210__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__453209.call(null,cljs.core.rest.call(null,s__453210__$2)));
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
return iter__35971__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35813__auto__,k__35814__auto__){
var self__ = this;
var this__35813__auto____$1 = this;
return cljs.core._lookup.call(null,this__35813__auto____$1,k__35814__auto__,null);
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35815__auto__,k453192,else__35816__auto__){
var self__ = this;
var this__35815__auto____$1 = this;
var G__453213 = (((k453192 instanceof cljs.core.Keyword))?k453192.fqn:null);
switch (G__453213) {
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
return cljs.core.get.call(null,self__.__extmap,k453192,else__35816__auto__);

}
});

loom.graph.FlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35827__auto__,writer__35828__auto__,opts__35829__auto__){
var self__ = this;
var this__35827__auto____$1 = this;
var pr_pair__35830__auto__ = ((function (this__35827__auto____$1){
return (function (keyval__35831__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,cljs.core.pr_writer,""," ","",opts__35829__auto__,keyval__35831__auto__);
});})(this__35827__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,pr_pair__35830__auto__,"#loom.graph.FlyDigraph{",", ","}",opts__35829__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__453191){
var self__ = this;
var G__453191__$1 = this;
return (new cljs.core.RecordIter((0),G__453191__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.FlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35811__auto__){
var self__ = this;
var this__35811__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35807__auto__){
var self__ = this;
var this__35807__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35817__auto__){
var self__ = this;
var this__35817__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35808__auto__){
var self__ = this;
var this__35808__auto____$1 = this;
var h__35626__auto__ = self__.__hash;
if(!((h__35626__auto__ == null))){
return h__35626__auto__;
} else {
var h__35626__auto____$1 = cljs.core.hash_imap.call(null,this__35808__auto____$1);
self__.__hash = h__35626__auto____$1;

return h__35626__auto____$1;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35809__auto__,other__35810__auto__){
var self__ = this;
var this__35809__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35179__auto__ = other__35810__auto__;
if(cljs.core.truth_(and__35179__auto__)){
var and__35179__auto____$1 = (this__35809__auto____$1.constructor === other__35810__auto__.constructor);
if(and__35179__auto____$1){
return cljs.core.equiv_map.call(null,this__35809__auto____$1,other__35810__auto__);
} else {
return and__35179__auto____$1;
}
} else {
return and__35179__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35822__auto__,k__35823__auto__){
var self__ = this;
var this__35822__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__35823__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35822__auto____$1),self__.__meta),k__35823__auto__);
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35823__auto__)),null));
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35820__auto__,k__35821__auto__,G__453191){
var self__ = this;
var this__35820__auto____$1 = this;
var pred__453214 = cljs.core.keyword_identical_QMARK_;
var expr__453215 = k__35821__auto__;
if(cljs.core.truth_(pred__453214.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__453215))){
return (new loom.graph.FlyDigraph(G__453191,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__453214.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__453215))){
return (new loom.graph.FlyDigraph(self__.fnodes,G__453191,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__453214.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__453215))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,G__453191,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__453214.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__453215))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__453191,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__453214.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__453215))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__453191,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35821__auto__,G__453191),null));
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

loom.graph.FlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35825__auto__){
var self__ = this;
var this__35825__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35812__auto__,G__453191){
var self__ = this;
var this__35812__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,G__453191,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35818__auto__,entry__35819__auto__){
var self__ = this;
var this__35818__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35819__auto__)){
return cljs.core._assoc.call(null,this__35818__auto____$1,cljs.core._nth.call(null,entry__35819__auto__,(0)),cljs.core._nth.call(null,entry__35819__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35818__auto____$1,entry__35819__auto__);
}
});

loom.graph.FlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyDigraph.cljs$lang$type = true;

loom.graph.FlyDigraph.cljs$lang$ctorPrSeq = (function (this__35847__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/FlyDigraph");
});

loom.graph.FlyDigraph.cljs$lang$ctorPrWriter = (function (this__35847__auto__,writer__35848__auto__){
return cljs.core._write.call(null,writer__35848__auto__,"loom.graph/FlyDigraph");
});

loom.graph.__GT_FlyDigraph = (function loom$graph$__GT_FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start){
return (new loom.graph.FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start,null,null,null));
});

loom.graph.map__GT_FlyDigraph = (function loom$graph$map__GT_FlyDigraph(G__453193){
return (new loom.graph.FlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__453193),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__453193),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__453193),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__453193),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__453193),null,cljs.core.dissoc.call(null,G__453193,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__35191__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
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
var iter__35971__auto__ = ((function (g__$1){
return (function loom$graph$iter__453389(s__453390){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__453390__$1 = s__453390;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__453390__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__453390__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__453389_$_iter__453391(s__453392){
return (new cljs.core.LazySeq(null,((function (s__453390__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__453392__$1 = s__453392;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__453392__$1);
if(temp__4657__auto____$1){
var s__453392__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__453392__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__453392__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__453394 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__453393 = (0);
while(true){
if((i__453393 < size__35970__auto__)){
var nbr = cljs.core._nth.call(null,c__35969__auto__,i__453393);
cljs.core.chunk_append.call(null,b__453394,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__453568 = (i__453393 + (1));
i__453393 = G__453568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__453394),loom$graph$iter__453389_$_iter__453391.call(null,cljs.core.chunk_rest.call(null,s__453392__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__453394),null);
}
} else {
var nbr = cljs.core.first.call(null,s__453392__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__453389_$_iter__453391.call(null,cljs.core.rest.call(null,s__453392__$2)));
}
} else {
return null;
}
break;
}
});})(s__453390__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__453390__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$graph$iter__453389.call(null,cljs.core.rest.call(null,s__453390__$1)));
} else {
var G__453577 = cljs.core.rest.call(null,s__453390__$1);
s__453390__$1 = G__453577;
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
return iter__35971__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__35971__auto__ = ((function (g__$1){
return (function loom$graph$iter__453412(s__453413){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__453413__$1 = s__453413;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__453413__$1);
if(temp__4657__auto__){
var s__453413__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__453413__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__453413__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__453415 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__453414 = (0);
while(true){
if((i__453414 < size__35970__auto__)){
var n2 = cljs.core._nth.call(null,c__35969__auto__,i__453414);
cljs.core.chunk_append.call(null,b__453415,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__453582 = (i__453414 + (1));
i__453414 = G__453582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__453415),loom$graph$iter__453412.call(null,cljs.core.chunk_rest.call(null,s__453413__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__453415),null);
}
} else {
var n2 = cljs.core.first.call(null,s__453413__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__453412.call(null,cljs.core.rest.call(null,s__453413__$2)));
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
return iter__35971__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35813__auto__,k__35814__auto__){
var self__ = this;
var this__35813__auto____$1 = this;
return cljs.core._lookup.call(null,this__35813__auto____$1,k__35814__auto__,null);
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35815__auto__,k453379,else__35816__auto__){
var self__ = this;
var this__35815__auto____$1 = this;
var G__453440 = (((k453379 instanceof cljs.core.Keyword))?k453379.fqn:null);
switch (G__453440) {
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
return cljs.core.get.call(null,self__.__extmap,k453379,else__35816__auto__);

}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35827__auto__,writer__35828__auto__,opts__35829__auto__){
var self__ = this;
var this__35827__auto____$1 = this;
var pr_pair__35830__auto__ = ((function (this__35827__auto____$1){
return (function (keyval__35831__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,cljs.core.pr_writer,""," ","",opts__35829__auto__,keyval__35831__auto__);
});})(this__35827__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,pr_pair__35830__auto__,"#loom.graph.WeightedFlyGraph{",", ","}",opts__35829__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$ = true;

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__453378){
var self__ = this;
var G__453378__$1 = this;
return (new cljs.core.RecordIter((0),G__453378__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35811__auto__){
var self__ = this;
var this__35811__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35807__auto__){
var self__ = this;
var this__35807__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35817__auto__){
var self__ = this;
var this__35817__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35808__auto__){
var self__ = this;
var this__35808__auto____$1 = this;
var h__35626__auto__ = self__.__hash;
if(!((h__35626__auto__ == null))){
return h__35626__auto__;
} else {
var h__35626__auto____$1 = cljs.core.hash_imap.call(null,this__35808__auto____$1);
self__.__hash = h__35626__auto____$1;

return h__35626__auto____$1;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35809__auto__,other__35810__auto__){
var self__ = this;
var this__35809__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35179__auto__ = other__35810__auto__;
if(cljs.core.truth_(and__35179__auto__)){
var and__35179__auto____$1 = (this__35809__auto____$1.constructor === other__35810__auto__.constructor);
if(and__35179__auto____$1){
return cljs.core.equiv_map.call(null,this__35809__auto____$1,other__35810__auto__);
} else {
return and__35179__auto____$1;
}
} else {
return and__35179__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35822__auto__,k__35823__auto__){
var self__ = this;
var this__35822__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null], null), null),k__35823__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35822__auto____$1),self__.__meta),k__35823__auto__);
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35823__auto__)),null));
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35820__auto__,k__35821__auto__,G__453378){
var self__ = this;
var this__35820__auto____$1 = this;
var pred__453521 = cljs.core.keyword_identical_QMARK_;
var expr__453522 = k__35821__auto__;
if(cljs.core.truth_(pred__453521.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__453522))){
return (new loom.graph.WeightedFlyGraph(G__453378,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__453521.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__453522))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,G__453378,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__453521.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__453522))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,G__453378,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__453521.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__453522))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__453378,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__453521.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__453522))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,G__453378,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35821__auto__,G__453378),null));
}
}
}
}
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35825__auto__){
var self__ = this;
var this__35825__auto____$1 = this;
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

loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35812__auto__,G__453378){
var self__ = this;
var this__35812__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,G__453378,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35818__auto__,entry__35819__auto__){
var self__ = this;
var this__35818__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35819__auto__)){
return cljs.core._assoc.call(null,this__35818__auto____$1,cljs.core._nth.call(null,entry__35819__auto__,(0)),cljs.core._nth.call(null,entry__35819__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35818__auto____$1,entry__35819__auto__);
}
});

loom.graph.WeightedFlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyGraph.cljs$lang$type = true;

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrSeq = (function (this__35847__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/WeightedFlyGraph");
});

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrWriter = (function (this__35847__auto__,writer__35848__auto__){
return cljs.core._write.call(null,writer__35848__auto__,"loom.graph/WeightedFlyGraph");
});

loom.graph.__GT_WeightedFlyGraph = (function loom$graph$__GT_WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start){
return (new loom.graph.WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start,null,null,null));
});

loom.graph.map__GT_WeightedFlyGraph = (function loom$graph$map__GT_WeightedFlyGraph(G__453382){
return (new loom.graph.WeightedFlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__453382),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__453382),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__453382),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__453382),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__453382),null,cljs.core.dissoc.call(null,G__453382,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
if(cljs.core.truth_((function (){var or__35191__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
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
var iter__35971__auto__ = ((function (g__$1){
return (function loom$graph$iter__453601(s__453602){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__453602__$1 = s__453602;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__453602__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var n = cljs.core.first.call(null,xs__5205__auto__);
var iterys__35967__auto__ = ((function (s__453602__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function loom$graph$iter__453601_$_iter__453603(s__453604){
return (new cljs.core.LazySeq(null,((function (s__453602__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1){
return (function (){
var s__453604__$1 = s__453604;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__453604__$1);
if(temp__4657__auto____$1){
var s__453604__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__453604__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__453604__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__453606 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__453605 = (0);
while(true){
if((i__453605 < size__35970__auto__)){
var nbr = cljs.core._nth.call(null,c__35969__auto__,i__453605);
cljs.core.chunk_append.call(null,b__453606,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__453647 = (i__453605 + (1));
i__453605 = G__453647;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__453606),loom$graph$iter__453601_$_iter__453603.call(null,cljs.core.chunk_rest.call(null,s__453604__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__453606),null);
}
} else {
var nbr = cljs.core.first.call(null,s__453604__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__453601_$_iter__453603.call(null,cljs.core.rest.call(null,s__453604__$2)));
}
} else {
return null;
}
break;
}
});})(s__453602__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
,null,null));
});})(s__453602__$1,n,xs__5205__auto__,temp__4657__auto__,g__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$graph$iter__453601.call(null,cljs.core.rest.call(null,s__453602__$1)));
} else {
var G__453649 = cljs.core.rest.call(null,s__453602__$1);
s__453602__$1 = G__453649;
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
return iter__35971__auto__.call(null,loom.graph.nodes.call(null,g__$1));
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
var iter__35971__auto__ = ((function (g__$1){
return (function loom$graph$iter__453616(s__453617){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__453617__$1 = s__453617;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__453617__$1);
if(temp__4657__auto__){
var s__453617__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__453617__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__453617__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__453619 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__453618 = (0);
while(true){
if((i__453618 < size__35970__auto__)){
var n2 = cljs.core._nth.call(null,c__35969__auto__,i__453618);
cljs.core.chunk_append.call(null,b__453619,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__453652 = (i__453618 + (1));
i__453618 = G__453652;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__453619),loom$graph$iter__453616.call(null,cljs.core.chunk_rest.call(null,s__453617__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__453619),null);
}
} else {
var n2 = cljs.core.first.call(null,s__453617__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__453616.call(null,cljs.core.rest.call(null,s__453617__$2)));
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
return iter__35971__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var self__ = this;
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35813__auto__,k__35814__auto__){
var self__ = this;
var this__35813__auto____$1 = this;
return cljs.core._lookup.call(null,this__35813__auto____$1,k__35814__auto__,null);
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35815__auto__,k453597,else__35816__auto__){
var self__ = this;
var this__35815__auto____$1 = this;
var G__453624 = (((k453597 instanceof cljs.core.Keyword))?k453597.fqn:null);
switch (G__453624) {
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
return cljs.core.get.call(null,self__.__extmap,k453597,else__35816__auto__);

}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35827__auto__,writer__35828__auto__,opts__35829__auto__){
var self__ = this;
var this__35827__auto____$1 = this;
var pr_pair__35830__auto__ = ((function (this__35827__auto____$1){
return (function (keyval__35831__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,cljs.core.pr_writer,""," ","",opts__35829__auto__,keyval__35831__auto__);
});})(this__35827__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,pr_pair__35830__auto__,"#loom.graph.WeightedFlyDigraph{",", ","}",opts__35829__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$ = true;

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__453596){
var self__ = this;
var G__453596__$1 = this;
return (new cljs.core.RecordIter((0),G__453596__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35811__auto__){
var self__ = this;
var this__35811__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35807__auto__){
var self__ = this;
var this__35807__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35817__auto__){
var self__ = this;
var this__35817__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35808__auto__){
var self__ = this;
var this__35808__auto____$1 = this;
var h__35626__auto__ = self__.__hash;
if(!((h__35626__auto__ == null))){
return h__35626__auto__;
} else {
var h__35626__auto____$1 = cljs.core.hash_imap.call(null,this__35808__auto____$1);
self__.__hash = h__35626__auto____$1;

return h__35626__auto____$1;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35809__auto__,other__35810__auto__){
var self__ = this;
var this__35809__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35179__auto__ = other__35810__auto__;
if(cljs.core.truth_(and__35179__auto__)){
var and__35179__auto____$1 = (this__35809__auto____$1.constructor === other__35810__auto__.constructor);
if(and__35179__auto____$1){
return cljs.core.equiv_map.call(null,this__35809__auto____$1,other__35810__auto__);
} else {
return and__35179__auto____$1;
}
} else {
return and__35179__auto__;
}
})())){
return true;
} else {
return false;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35822__auto__,k__35823__auto__){
var self__ = this;
var this__35822__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__35823__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35822__auto____$1),self__.__meta),k__35823__auto__);
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35823__auto__)),null));
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35820__auto__,k__35821__auto__,G__453596){
var self__ = this;
var this__35820__auto____$1 = this;
var pred__453631 = cljs.core.keyword_identical_QMARK_;
var expr__453632 = k__35821__auto__;
if(cljs.core.truth_(pred__453631.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__453632))){
return (new loom.graph.WeightedFlyDigraph(G__453596,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__453631.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__453632))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,G__453596,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__453631.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__453632))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,G__453596,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__453631.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__453632))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__453596,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__453631.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__453632))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__453596,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__453631.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__453632))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,G__453596,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35821__auto__,G__453596),null));
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

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35825__auto__){
var self__ = this;
var this__35825__auto____$1 = this;
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

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35812__auto__,G__453596){
var self__ = this;
var this__35812__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,G__453596,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35818__auto__,entry__35819__auto__){
var self__ = this;
var this__35818__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35819__auto__)){
return cljs.core._assoc.call(null,this__35818__auto____$1,cljs.core._nth.call(null,entry__35819__auto__,(0)),cljs.core._nth.call(null,entry__35819__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35818__auto____$1,entry__35819__auto__);
}
});

loom.graph.WeightedFlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyDigraph.cljs$lang$type = true;

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrSeq = (function (this__35847__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"loom.graph/WeightedFlyDigraph");
});

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrWriter = (function (this__35847__auto__,writer__35848__auto__){
return cljs.core._write.call(null,writer__35848__auto__,"loom.graph/WeightedFlyDigraph");
});

loom.graph.__GT_WeightedFlyDigraph = (function loom$graph$__GT_WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start){
return (new loom.graph.WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start,null,null,null));
});

loom.graph.map__GT_WeightedFlyDigraph = (function loom$graph$map__GT_WeightedFlyDigraph(G__453598){
return (new loom.graph.WeightedFlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__453598),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__453598),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__453598),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__453598),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__453598),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__453598),null,cljs.core.dissoc.call(null,G__453598,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)),null));
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
var args__36267__auto__ = [];
var len__36260__auto___453757 = arguments.length;
var i__36261__auto___453759 = (0);
while(true){
if((i__36261__auto___453759 < len__36260__auto___453757)){
args__36267__auto__.push((arguments[i__36261__auto___453759]));

var G__453762 = (i__36261__auto___453759 + (1));
i__36261__auto___453759 = G__453762;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),nodes));
});

loom.graph.add_path.cljs$lang$maxFixedArity = (1);

loom.graph.add_path.cljs$lang$applyTo = (function (seq453745){
var G__453746 = cljs.core.first.call(null,seq453745);
var seq453745__$1 = cljs.core.next.call(null,seq453745);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic(G__453746,seq453745__$1);
});
/**
 * Adds a cycle of edges connecting the given nodes in order
 */
loom.graph.add_cycle = (function loom$graph$add_cycle(var_args){
var args__36267__auto__ = [];
var len__36260__auto___453782 = arguments.length;
var i__36261__auto___453783 = (0);
while(true){
if((i__36261__auto___453783 < len__36260__auto___453782)){
args__36267__auto__.push((arguments[i__36261__auto___453783]));

var G__453785 = (i__36261__auto___453783 + (1));
i__36261__auto___453783 = G__453785;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),cljs.core.concat.call(null,nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nodes)], null))));
});

loom.graph.add_cycle.cljs$lang$maxFixedArity = (1);

loom.graph.add_cycle.cljs$lang$applyTo = (function (seq453768){
var G__453769 = cljs.core.first.call(null,seq453768);
var seq453768__$1 = cljs.core.next.call(null,seq453768);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic(G__453769,seq453768__$1);
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
var args__36267__auto__ = [];
var len__36260__auto___454062 = arguments.length;
var i__36261__auto___454063 = (0);
while(true){
if((i__36261__auto___454063 < len__36260__auto___454062)){
args__36267__auto__.push((arguments[i__36261__auto___454063]));

var G__454064 = (i__36261__auto___454063 + (1));
i__36261__auto___454063 = G__454064;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,inits){
var build = (function loom$graph$build(g__$1,init){
if(cljs.core.truth_(loom.graph.graph_QMARK_.call(null,init))){
if(cljs.core.truth_((function (){var and__35179__auto__ = loom.graph.weighted_QMARK_.call(null,g__$1);
if(cljs.core.truth_(and__35179__auto__)){
return loom.graph.weighted_QMARK_.call(null,init);
} else {
return and__35179__auto__;
}
})())){
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,loom.graph.add_edges,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),(function (){var iter__35971__auto__ = (function loom$graph$build_$_iter__453955(s__453956){
return (new cljs.core.LazySeq(null,(function (){
var s__453956__$1 = s__453956;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__453956__$1);
if(temp__4657__auto__){
var s__453956__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__453956__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__453956__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__453958 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__453957 = (0);
while(true){
if((i__453957 < size__35970__auto__)){
var vec__454001 = cljs.core._nth.call(null,c__35969__auto__,i__453957);
var n1 = cljs.core.nth.call(null,vec__454001,(0),null);
var n2 = cljs.core.nth.call(null,vec__454001,(1),null);
cljs.core.chunk_append.call(null,b__453958,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null));

var G__454072 = (i__453957 + (1));
i__453957 = G__454072;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__453958),loom$graph$build_$_iter__453955.call(null,cljs.core.chunk_rest.call(null,s__453956__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__453958),null);
}
} else {
var vec__454004 = cljs.core.first.call(null,s__453956__$2);
var n1 = cljs.core.nth.call(null,vec__454004,(0),null);
var n2 = cljs.core.nth.call(null,vec__454004,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null),loom$graph$build_$_iter__453955.call(null,cljs.core.rest.call(null,s__453956__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35971__auto__.call(null,loom.graph.edges.call(null,init));
})()),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
} else {
return cljs.core.assoc.call(null,loom.graph.add_edges_STAR_.call(null,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),loom.graph.edges.call(null,init)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
}
} else {
if(cljs.core.map_QMARK_.call(null,init)){
var es = ((cljs.core.map_QMARK_.call(null,cljs.core.val.call(null,cljs.core.first.call(null,init))))?(function (){var iter__35971__auto__ = (function loom$graph$build_$_iter__454009(s__454010){
return (new cljs.core.LazySeq(null,(function (){
var s__454010__$1 = s__454010;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__454010__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__454034 = cljs.core.first.call(null,xs__5205__auto__);
var n = cljs.core.nth.call(null,vec__454034,(0),null);
var nbrs = cljs.core.nth.call(null,vec__454034,(1),null);
var iterys__35967__auto__ = ((function (s__454010__$1,vec__454034,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function loom$graph$build_$_iter__454009_$_iter__454011(s__454012){
return (new cljs.core.LazySeq(null,((function (s__454010__$1,vec__454034,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__454012__$1 = s__454012;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__454012__$1);
if(temp__4657__auto____$1){
var s__454012__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__454012__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__454012__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__454014 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__454013 = (0);
while(true){
if((i__454013 < size__35970__auto__)){
var vec__454044 = cljs.core._nth.call(null,c__35969__auto__,i__454013);
var nbr = cljs.core.nth.call(null,vec__454044,(0),null);
var wt = cljs.core.nth.call(null,vec__454044,(1),null);
cljs.core.chunk_append.call(null,b__454014,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__454078 = (i__454013 + (1));
i__454013 = G__454078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__454014),loom$graph$build_$_iter__454009_$_iter__454011.call(null,cljs.core.chunk_rest.call(null,s__454012__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__454014),null);
}
} else {
var vec__454046 = cljs.core.first.call(null,s__454012__$2);
var nbr = cljs.core.nth.call(null,vec__454046,(0),null);
var wt = cljs.core.nth.call(null,vec__454046,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),loom$graph$build_$_iter__454009_$_iter__454011.call(null,cljs.core.rest.call(null,s__454012__$2)));
}
} else {
return null;
}
break;
}
});})(s__454010__$1,vec__454034,n,nbrs,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__454010__$1,vec__454034,n,nbrs,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,nbrs));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$graph$build_$_iter__454009.call(null,cljs.core.rest.call(null,s__454010__$1)));
} else {
var G__454080 = cljs.core.rest.call(null,s__454010__$1);
s__454010__$1 = G__454080;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35971__auto__.call(null,init);
})():(function (){var iter__35971__auto__ = (function loom$graph$build_$_iter__454049(s__454050){
return (new cljs.core.LazySeq(null,(function (){
var s__454050__$1 = s__454050;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__454050__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__454058 = cljs.core.first.call(null,xs__5205__auto__);
var n = cljs.core.nth.call(null,vec__454058,(0),null);
var nbrs = cljs.core.nth.call(null,vec__454058,(1),null);
var iterys__35967__auto__ = ((function (s__454050__$1,vec__454058,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function loom$graph$build_$_iter__454049_$_iter__454051(s__454052){
return (new cljs.core.LazySeq(null,((function (s__454050__$1,vec__454058,n,nbrs,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__454052__$1 = s__454052;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__454052__$1);
if(temp__4657__auto____$1){
var s__454052__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__454052__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__454052__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__454054 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__454053 = (0);
while(true){
if((i__454053 < size__35970__auto__)){
var nbr = cljs.core._nth.call(null,c__35969__auto__,i__454053);
cljs.core.chunk_append.call(null,b__454054,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__454087 = (i__454053 + (1));
i__454053 = G__454087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__454054),loom$graph$build_$_iter__454049_$_iter__454051.call(null,cljs.core.chunk_rest.call(null,s__454052__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__454054),null);
}
} else {
var nbr = cljs.core.first.call(null,s__454052__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$build_$_iter__454049_$_iter__454051.call(null,cljs.core.rest.call(null,s__454052__$2)));
}
} else {
return null;
}
break;
}
});})(s__454050__$1,vec__454058,n,nbrs,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__454050__$1,vec__454058,n,nbrs,xs__5205__auto__,temp__4657__auto__))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,nbrs));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,loom$graph$build_$_iter__454049.call(null,cljs.core.rest.call(null,s__454050__$1)));
} else {
var G__454119 = cljs.core.rest.call(null,s__454050__$1);
s__454050__$1 = G__454119;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35971__auto__.call(null,init);
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

loom.graph.build_graph.cljs$lang$applyTo = (function (seq453809){
var G__453810 = cljs.core.first.call(null,seq453809);
var seq453809__$1 = cljs.core.next.call(null,seq453809);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic(G__453810,seq453809__$1);
});
/**
 * Creates an unweighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.graph = (function loom$graph$graph(var_args){
var args__36267__auto__ = [];
var len__36260__auto___454139 = arguments.length;
var i__36261__auto___454140 = (0);
while(true){
if((i__36261__auto___454140 < len__36260__auto___454139)){
args__36267__auto__.push((arguments[i__36261__auto___454140]));

var G__454142 = (i__36261__auto___454140 + (1));
i__36261__auto___454140 = G__454142;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((0) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((0)),(0),null)):null);
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(argseq__36268__auto__);
});

loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.graph.cljs$lang$maxFixedArity = (0);

loom.graph.graph.cljs$lang$applyTo = (function (seq454131){
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq454131));
});
/**
 * Creates an unweighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.digraph = (function loom$graph$digraph(var_args){
var args__36267__auto__ = [];
var len__36260__auto___454152 = arguments.length;
var i__36261__auto___454153 = (0);
while(true){
if((i__36261__auto___454153 < len__36260__auto___454152)){
args__36267__auto__.push((arguments[i__36261__auto___454153]));

var G__454154 = (i__36261__auto___454153 + (1));
i__36261__auto___454153 = G__454154;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((0) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((0)),(0),null)):null);
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__36268__auto__);
});

loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.digraph.cljs$lang$maxFixedArity = (0);

loom.graph.digraph.cljs$lang$applyTo = (function (seq454149){
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq454149));
});
/**
 * Creates an weighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_graph = (function loom$graph$weighted_graph(var_args){
var args__36267__auto__ = [];
var len__36260__auto___454159 = arguments.length;
var i__36261__auto___454160 = (0);
while(true){
if((i__36261__auto___454160 < len__36260__auto___454159)){
args__36267__auto__.push((arguments[i__36261__auto___454160]));

var G__454162 = (i__36261__auto___454160 + (1));
i__36261__auto___454160 = G__454162;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((0) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__36268__auto__);
});

loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_graph.cljs$lang$maxFixedArity = (0);

loom.graph.weighted_graph.cljs$lang$applyTo = (function (seq454156){
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq454156));
});
/**
 * Creates an weighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_digraph = (function loom$graph$weighted_digraph(var_args){
var args__36267__auto__ = [];
var len__36260__auto___454167 = arguments.length;
var i__36261__auto___454168 = (0);
while(true){
if((i__36261__auto___454168 < len__36260__auto___454167)){
args__36267__auto__.push((arguments[i__36261__auto___454168]));

var G__454169 = (i__36261__auto___454168 + (1));
i__36261__auto___454168 = G__454169;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((0) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__36268__auto__);
});

loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_digraph.cljs$lang$maxFixedArity = (0);

loom.graph.weighted_digraph.cljs$lang$applyTo = (function (seq454164){
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq454164));
});
/**
 * Creates a read-only, ad-hoc graph which uses the provided functions
 *   to return values for nodes, edges, etc. If any members are not functions,
 *   they will be returned as-is. Edges can be inferred if nodes and
 *   successors are provided. Nodes and edges can be inferred if successors and
 *   start are provided.
 */
loom.graph.fly_graph = (function loom$graph$fly_graph(var_args){
var args__36267__auto__ = [];
var len__36260__auto___454177 = arguments.length;
var i__36261__auto___454178 = (0);
while(true){
if((i__36261__auto___454178 < len__36260__auto___454177)){
args__36267__auto__.push((arguments[i__36261__auto___454178]));

var G__454179 = (i__36261__auto___454178 + (1));
i__36261__auto___454178 = G__454179;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((0) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((0)),(0),null)):null);
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__36268__auto__);
});

loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = (function (p__454173){
var map__454174 = p__454173;
var map__454174__$1 = ((((!((map__454174 == null)))?((((map__454174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__454174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__454174):map__454174);
var nodes = cljs.core.get.call(null,map__454174__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__454174__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var successors = cljs.core.get.call(null,map__454174__$1,new cljs.core.Keyword(null,"successors","successors",-1239296414));
var predecessors = cljs.core.get.call(null,map__454174__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var weight = cljs.core.get.call(null,map__454174__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var start = cljs.core.get.call(null,map__454174__$1,new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.truth_((function (){var and__35179__auto__ = predecessors;
if(cljs.core.truth_(and__35179__auto__)){
return weight;
} else {
return and__35179__auto__;
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

loom.graph.fly_graph.cljs$lang$applyTo = (function (seq454172){
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq454172));
});
