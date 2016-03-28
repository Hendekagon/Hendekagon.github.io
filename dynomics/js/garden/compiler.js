// Compiled by ClojureScript 1.8.34 {}
goog.provide('garden.compiler');
goog.require('cljs.core');
goog.require('garden.units');
goog.require('garden.types');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.selectors');
goog.require('garden.compression');
goog.require('clojure.string');
/**
 * The current compiler flags.
 */
garden.compiler._STAR_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),true,new cljs.core.Keyword(null,"preamble","preamble",1641040241),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"output-to","output-to",-965533968),null,new cljs.core.Keyword(null,"vendors","vendors",-153040496),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null);
/**
 * Retun a function to call when rendering a media expression.
 *   The returned function accepts two arguments: the media
 *   expression being evaluated and the current media expression context.
 *   Both arguments are maps. This is used to provide semantics for nested
 *   media queries.
 */
garden.compiler.media_expression_behavior = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (expr,context){
return cljs.core.merge.call(null,context,expr);
}),new cljs.core.Keyword(null,"default","default",-1987822328),(function (expr,_){
return expr;
})], null);
/**
 * The current parent selector context.
 */
garden.compiler._STAR_selector_context_STAR_ = null;
/**
 * The current media query context.
 */
garden.compiler._STAR_media_query_context_STAR_ = null;
garden.compiler.with_selector_context = (function garden$compiler$with_selector_context(var_args){
var args__36267__auto__ = [];
var len__36260__auto___369917 = arguments.length;
var i__36261__auto___369918 = (0);
while(true){
if((i__36261__auto___369918 < len__36260__auto___369917)){
args__36267__auto__.push((arguments[i__36261__auto___369918]));

var G__369919 = (i__36261__auto___369918 + (1));
i__36261__auto___369918 = G__369919;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((3) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((3)),(0),null)):null);
return garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36268__auto__);
});

garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("garden.compiler","*selector-context*","garden.compiler/*selector-context*",1030088346,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,selector_context)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))))));
});

garden.compiler.with_selector_context.cljs$lang$maxFixedArity = (3);

garden.compiler.with_selector_context.cljs$lang$applyTo = (function (seq369907){
var G__369908 = cljs.core.first.call(null,seq369907);
var seq369907__$1 = cljs.core.next.call(null,seq369907);
var G__369909 = cljs.core.first.call(null,seq369907__$1);
var seq369907__$2 = cljs.core.next.call(null,seq369907__$1);
var G__369910 = cljs.core.first.call(null,seq369907__$2);
var seq369907__$3 = cljs.core.next.call(null,seq369907__$2);
return garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic(G__369908,G__369909,G__369910,seq369907__$3);
});

garden.compiler.with_selector_context.cljs$lang$macro = true;
garden.compiler.with_media_query_context = (function garden$compiler$with_media_query_context(var_args){
var args__36267__auto__ = [];
var len__36260__auto___369936 = arguments.length;
var i__36261__auto___369937 = (0);
while(true){
if((i__36261__auto___369937 < len__36260__auto___369936)){
args__36267__auto__.push((arguments[i__36261__auto___369937]));

var G__369940 = (i__36261__auto___369937 + (1));
i__36261__auto___369937 = G__369940;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((3) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((3)),(0),null)):null);
return garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36268__auto__);
});

garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("garden.compiler","*media-query-context*","garden.compiler/*media-query-context*",-1783105708,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,selector_context)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))))));
});

garden.compiler.with_media_query_context.cljs$lang$maxFixedArity = (3);

garden.compiler.with_media_query_context.cljs$lang$applyTo = (function (seq369927){
var G__369928 = cljs.core.first.call(null,seq369927);
var seq369927__$1 = cljs.core.next.call(null,seq369927);
var G__369929 = cljs.core.first.call(null,seq369927__$1);
var seq369927__$2 = cljs.core.next.call(null,seq369927__$1);
var G__369930 = cljs.core.first.call(null,seq369927__$2);
var seq369927__$3 = cljs.core.next.call(null,seq369927__$2);
return garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic(G__369928,G__369929,G__369930,seq369927__$3);
});

garden.compiler.with_media_query_context.cljs$lang$macro = true;
/**
 * Return the current list of browser vendors specified in `*flags*`.
 */
garden.compiler.vendors = (function garden$compiler$vendors(){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(garden.compiler._STAR_flags_STAR_));
});
/**
 * Return the current list of auto-prefixed properties specified in `*flags*`.
 */
garden.compiler.auto_prefixed_properties = (function garden$compiler$auto_prefixed_properties(){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.name,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466).cljs$core$IFn$_invoke$arity$1(garden.compiler._STAR_flags_STAR_)));
});
garden.compiler.auto_prefix_QMARK_ = (function garden$compiler$auto_prefix_QMARK_(property){
return cljs.core.contains_QMARK_.call(null,garden.compiler.auto_prefixed_properties.call(null),property);
});
garden.compiler.top_level_expression_QMARK_ = (function garden$compiler$top_level_expression_QMARK_(x){
var or__35191__auto__ = garden.util.rule_QMARK_.call(null,x);
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
var or__35191__auto____$1 = garden.util.at_import_QMARK_.call(null,x);
if(cljs.core.truth_(or__35191__auto____$1)){
return or__35191__auto____$1;
} else {
var or__35191__auto____$2 = garden.util.at_media_QMARK_.call(null,x);
if(cljs.core.truth_(or__35191__auto____$2)){
return or__35191__auto____$2;
} else {
return garden.util.at_keyframes_QMARK_.call(null,x);
}
}
}
});
/**
 * Return a vector of [(filter pred coll) (remove pred coll)].
 */
garden.compiler.divide_vec = (function garden$compiler$divide_vec(pred,coll){
return cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,pred,coll);
});

/**
 * @interface
 */
garden.compiler.IExpandable = function(){};

/**
 * Return a list containing the expanded form of `this`.
 */
garden.compiler.expand = (function garden$compiler$expand(this$){
if((!((this$ == null))) && (!((this$.garden$compiler$IExpandable$expand$arity$1 == null)))){
return this$.garden$compiler$IExpandable$expand$arity$1(this$);
} else {
var x__35854__auto__ = (((this$ == null))?null:this$);
var m__35855__auto__ = (garden.compiler.expand[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,this$);
} else {
var m__35855__auto____$1 = (garden.compiler.expand["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IExpandable.expand",this$);
}
}
}
});

/**
 * Like flatten but only affects seqs.
 */
garden.compiler.expand_seqs = (function garden$compiler$expand_seqs(coll){
return cljs.core.mapcat.call(null,(function (x){
if(cljs.core.seq_QMARK_.call(null,x)){
return garden$compiler$expand_seqs.call(null,x);
} else {
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x);
}
}),coll);
});
garden.compiler.expand_declaration_1 = (function garden$compiler$expand_declaration_1(d){
var prefix = (function (p1__369964_SHARP_,p2__369965_SHARP_){
return garden.util.as_str.call(null,p1__369964_SHARP_,"-",p2__369965_SHARP_);
});
return cljs.core.reduce.call(null,((function (prefix){
return (function (m,p__369970){
var vec__369971 = p__369970;
var k = cljs.core.nth.call(null,vec__369971,(0),null);
var v = cljs.core.nth.call(null,vec__369971,(1),null);
if(cljs.core.truth_(garden.util.hash_map_QMARK_.call(null,v))){
return cljs.core.reduce.call(null,((function (vec__369971,k,v,prefix){
return (function (m1,p__369972){
var vec__369973 = p__369972;
var k1 = cljs.core.nth.call(null,vec__369973,(0),null);
var v1 = cljs.core.nth.call(null,vec__369973,(1),null);
return cljs.core.assoc.call(null,m1,prefix.call(null,k,k1),v1);
});})(vec__369971,k,v,prefix))
,m,garden$compiler$expand_declaration_1.call(null,v));
} else {
return cljs.core.assoc.call(null,m,garden.util.to_str.call(null,k),v);
}
});})(prefix))
,cljs.core.PersistentArrayMap.EMPTY,d);
});
garden.compiler.expand_declaration = (function garden$compiler$expand_declaration(d){
if(cljs.core.seq.call(null,d)){
return cljs.core.with_meta.call(null,garden.compiler.expand_declaration_1.call(null,d),cljs.core.meta.call(null,d));
} else {
return null;
}
});
/**
 * Matches a single "&" or "&" follow by one or more 
 *   non-whitespace characters.
 */
garden.compiler.parent_selector_re = /^&(?:\S+)?$/;
/**
 * Extract the selector portion of a parent selector reference.
 */
garden.compiler.extract_reference = (function garden$compiler$extract_reference(selector){
var temp__4657__auto__ = cljs.core.re_find.call(null,garden.compiler.parent_selector_re,garden.util.to_str.call(null,cljs.core.last.call(null,selector)));
if(cljs.core.truth_(temp__4657__auto__)){
var reference = temp__4657__auto__;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,reference));
} else {
return null;
}
});
garden.compiler.expand_selector_reference = (function garden$compiler$expand_selector_reference(selector){
var temp__4655__auto__ = garden.compiler.extract_reference.call(null,selector);
if(cljs.core.truth_(temp__4655__auto__)){
var reference = temp__4655__auto__;
var parent = cljs.core.butlast.call(null,selector);
return cljs.core.concat.call(null,cljs.core.butlast.call(null,parent),cljs.core._conj.call(null,cljs.core.List.EMPTY,garden.util.as_str.call(null,cljs.core.last.call(null,parent),reference)));
} else {
return selector;
}
});
garden.compiler.expand_selector = (function garden$compiler$expand_selector(selector,parent){
var selector__$1 = cljs.core.map.call(null,garden.selectors.css_selector,selector);
var selector__$2 = ((cljs.core.seq.call(null,parent))?cljs.core.map.call(null,cljs.core.flatten,garden.util.cartesian_product.call(null,parent,selector__$1)):cljs.core.map.call(null,cljs.core.list,selector__$1));
return cljs.core.map.call(null,garden.compiler.expand_selector_reference,selector__$2);
});
garden.compiler.expand_rule = (function garden$compiler$expand_rule(rule){
var vec__369988 = cljs.core.split_with.call(null,garden.selectors.selector_QMARK_,rule);
var selector = cljs.core.nth.call(null,vec__369988,(0),null);
var children = cljs.core.nth.call(null,vec__369988,(1),null);
var selector__$1 = garden.compiler.expand_selector.call(null,selector,garden.compiler._STAR_selector_context_STAR_);
var children__$1 = garden.compiler.expand.call(null,children);
var vec__369989 = garden.compiler.divide_vec.call(null,garden.util.declaration_QMARK_,children__$1);
var declarations = cljs.core.nth.call(null,vec__369989,(0),null);
var xs = cljs.core.nth.call(null,vec__369989,(1),null);
var ys = (function (){var _STAR_selector_context_STAR_369991 = garden.compiler._STAR_selector_context_STAR_;
garden.compiler._STAR_selector_context_STAR_ = ((cljs.core.seq.call(null,selector__$1))?selector__$1:garden.compiler._STAR_selector_context_STAR_);

try{return cljs.core.doall.call(null,cljs.core.mapcat.call(null,garden.compiler.expand,xs));
}finally {garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR_369991;
}})();
return cljs.core.conj.call(null,ys,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector__$1], null),cljs.core.mapcat.call(null,garden.compiler.expand,declarations)));
});
if(typeof garden.compiler.expand_at_rule !== 'undefined'){
} else {
garden.compiler.expand_at_rule = (function (){var method_table__36115__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__36116__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__36117__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__36118__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__36119__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"garden.compiler","expand-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__36119__auto__,method_table__36115__auto__,prefer_table__36116__auto__,method_cache__36117__auto__,cached_hierarchy__36118__auto__));
})();
}
cljs.core._add_method.call(null,garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (at_rule){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,at_rule);
}));
cljs.core._add_method.call(null,garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__370010){
var map__370011 = p__370010;
var map__370011__$1 = ((((!((map__370011 == null)))?((((map__370011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370011):map__370011);
var value = cljs.core.get.call(null,map__370011__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__370013 = value;
var map__370013__$1 = ((((!((map__370013 == null)))?((((map__370013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370013):map__370013);
var identifier = cljs.core.get.call(null,map__370013__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.call(null,map__370013__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,(new garden.types.CSSAtRule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),garden.util.to_str.call(null,identifier),new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.mapcat.call(null,garden.compiler.expand,frames)], null),null,null,null)));
}));
garden.compiler.expand_media_query_expression = (function garden$compiler$expand_media_query_expression(expression){
var temp__4655__auto__ = garden.compiler.media_expression_behavior.call(null,cljs.core.get_in.call(null,garden.compiler._STAR_flags_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755)], null)));
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,expression,garden.compiler._STAR_media_query_context_STAR_);
} else {
return expression;
}
});
cljs.core._add_method.call(null,garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__370024){
var map__370025 = p__370024;
var map__370025__$1 = ((((!((map__370025 == null)))?((((map__370025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370025):map__370025);
var value = cljs.core.get.call(null,map__370025__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__370030 = value;
var map__370030__$1 = ((((!((map__370030 == null)))?((((map__370030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370030):map__370030);
var media_queries = cljs.core.get.call(null,map__370030__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.call(null,map__370030__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var media_queries__$1 = garden.compiler.expand_media_query_expression.call(null,media_queries);
var xs = (function (){var _STAR_media_query_context_STAR_370033 = garden.compiler._STAR_media_query_context_STAR_;
garden.compiler._STAR_media_query_context_STAR_ = media_queries__$1;

try{return cljs.core.doall.call(null,cljs.core.mapcat.call(null,garden.compiler.expand,garden.compiler.expand.call(null,rules)));
}finally {garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR_370033;
}})();
var vec__370031 = garden.compiler.divide_vec.call(null,garden.util.at_media_QMARK_,xs);
var subqueries = cljs.core.nth.call(null,vec__370031,(0),null);
var rules__$1 = cljs.core.nth.call(null,vec__370031,(1),null);
return cljs.core.cons.call(null,(new garden.types.CSSAtRule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries__$1,new cljs.core.Keyword(null,"rules","rules",1198912366),rules__$1], null),null,null,null)),subqueries);
}));
garden.compiler.expand_stylesheet = (function garden$compiler$expand_stylesheet(xs){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,garden.compiler.expand,garden.compiler.expand.call(null,xs)));
});
(garden.compiler.IExpandable["null"] = true);

(garden.compiler.expand["null"] = (function (this$){
return null;
}));

cljs.core.IndexedSeq.prototype.garden$compiler$IExpandable$ = true;

cljs.core.IndexedSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.LazySeq.prototype.garden$compiler$IExpandable$ = true;

cljs.core.LazySeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.NodeSeq.prototype.garden$compiler$IExpandable$ = true;

cljs.core.NodeSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.BlackNode.prototype.garden$compiler$IExpandable$ = true;

cljs.core.BlackNode.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$IExpandable$ = true;

cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.garden$compiler$IExpandable$ = true;

cljs.core.ChunkedSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.Cons.prototype.garden$compiler$IExpandable$ = true;

cljs.core.Cons.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.RSeq.prototype.garden$compiler$IExpandable$ = true;

cljs.core.RSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

garden.types.CSSFunction.prototype.garden$compiler$IExpandable$ = true;

garden.types.CSSFunction.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,this$__$1);
});

cljs.core.PersistentHashMap.prototype.garden$compiler$IExpandable$ = true;

cljs.core.PersistentHashMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,garden.compiler.expand_declaration.call(null,this$__$1));
});

cljs.core.ArrayNodeSeq.prototype.garden$compiler$IExpandable$ = true;

cljs.core.ArrayNodeSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.Subvec.prototype.garden$compiler$IExpandable$ = true;

cljs.core.Subvec.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule.call(null,this$__$1);
});

(garden.compiler.IExpandable["_"] = true);

(garden.compiler.expand["_"] = (function (this$){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,this$);
}));

cljs.core.PersistentTreeMap.prototype.garden$compiler$IExpandable$ = true;

cljs.core.PersistentTreeMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,garden.compiler.expand_declaration.call(null,this$__$1));
});

cljs.core.ChunkedCons.prototype.garden$compiler$IExpandable$ = true;

cljs.core.ChunkedCons.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

garden.types.CSSAtRule.prototype.garden$compiler$IExpandable$ = true;

garden.types.CSSAtRule.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_at_rule.call(null,this$__$1);
});

cljs.core.RedNode.prototype.garden$compiler$IExpandable$ = true;

cljs.core.RedNode.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.garden$compiler$IExpandable$ = true;

cljs.core.PersistentVector.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.garden$compiler$IExpandable$ = true;

cljs.core.PersistentArrayMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,garden.compiler.expand_declaration.call(null,this$__$1));
});

garden.color.CSSColor.prototype.garden$compiler$IExpandable$ = true;

garden.color.CSSColor.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,this$__$1);
});

cljs.core.List.prototype.garden$compiler$IExpandable$ = true;

cljs.core.List.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

/**
 * @interface
 */
garden.compiler.CSSRenderer = function(){};

/**
 * Convert a Clojure data type in to a string of CSS.
 */
garden.compiler.render_css = (function garden$compiler$render_css(this$){
if((!((this$ == null))) && (!((this$.garden$compiler$CSSRenderer$render_css$arity$1 == null)))){
return this$.garden$compiler$CSSRenderer$render_css$arity$1(this$);
} else {
var x__35854__auto__ = (((this$ == null))?null:this$);
var m__35855__auto__ = (garden.compiler.render_css[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,this$);
} else {
var m__35855__auto____$1 = (garden.compiler.render_css["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"CSSRenderer.render-css",this$);
}
}
}
});

garden.compiler.comma = ", ";
garden.compiler.colon = ": ";
garden.compiler.semicolon = ";";
garden.compiler.l_brace = " {\n";
garden.compiler.r_brace = "\n}";
garden.compiler.l_brace_1 = " {\n\n";
garden.compiler.r_brace_1 = "\n\n}";
garden.compiler.rule_sep = "\n\n";
garden.compiler.indent = "  ";
/**
 * Return a space separated list of values.
 */
garden.compiler.space_separated_list = (function garden$compiler$space_separated_list(var_args){
var args370115 = [];
var len__36260__auto___370125 = arguments.length;
var i__36261__auto___370126 = (0);
while(true){
if((i__36261__auto___370126 < len__36260__auto___370125)){
args370115.push((arguments[i__36261__auto___370126]));

var G__370128 = (i__36261__auto___370126 + (1));
i__36261__auto___370126 = G__370128;
continue;
} else {
}
break;
}

var G__370118 = args370115.length;
switch (G__370118) {
case 1:
return garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args370115.length)].join('')));

}
});

garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return garden.compiler.space_separated_list.call(null,garden.compiler.render_css,xs);
});

garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,f,xs));
});

garden.compiler.space_separated_list.cljs$lang$maxFixedArity = 2;
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.compiler.comma_separated_list = (function garden$compiler$comma_separated_list(var_args){
var args370141 = [];
var len__36260__auto___370169 = arguments.length;
var i__36261__auto___370170 = (0);
while(true){
if((i__36261__auto___370170 < len__36260__auto___370169)){
args370141.push((arguments[i__36261__auto___370170]));

var G__370171 = (i__36261__auto___370170 + (1));
i__36261__auto___370170 = G__370171;
continue;
} else {
}
break;
}

var G__370150 = args370141.length;
switch (G__370150) {
case 1:
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args370141.length)].join('')));

}
});

garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return garden.compiler.comma_separated_list.call(null,garden.compiler.render_css,xs);
});

garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
var ys = (function (){var iter__35971__auto__ = (function garden$compiler$iter__370154(s__370155){
return (new cljs.core.LazySeq(null,(function (){
var s__370155__$1 = s__370155;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__370155__$1);
if(temp__4657__auto__){
var s__370155__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__370155__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__370155__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__370157 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__370156 = (0);
while(true){
if((i__370156 < size__35970__auto__)){
var x = cljs.core._nth.call(null,c__35969__auto__,i__370156);
cljs.core.chunk_append.call(null,b__370157,((cljs.core.sequential_QMARK_.call(null,x))?garden.compiler.space_separated_list.call(null,f,x):f.call(null,x)));

var G__370180 = (i__370156 + (1));
i__370156 = G__370180;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370157),garden$compiler$iter__370154.call(null,cljs.core.chunk_rest.call(null,s__370155__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370157),null);
}
} else {
var x = cljs.core.first.call(null,s__370155__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?garden.compiler.space_separated_list.call(null,f,x):f.call(null,x)),garden$compiler$iter__370154.call(null,cljs.core.rest.call(null,s__370155__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35971__auto__.call(null,xs);
})();
return clojure.string.join.call(null,garden.compiler.comma,ys);
});

garden.compiler.comma_separated_list.cljs$lang$maxFixedArity = 2;
garden.compiler.rule_join = (function garden$compiler$rule_join(xs){
return clojure.string.join.call(null,garden.compiler.rule_sep,xs);
});
/**
 * Match the start of a line if the characters immediately
 *   after it are spaces or used in a CSS id (#), class (.), or tag name.
 */
garden.compiler.indent_loc_re = (new RegExp("(?=[ A-Za-z#.}-]+)^","gm"));
garden.compiler.indent_str = (function garden$compiler$indent_str(s){
return s.replace(garden.compiler.indent_loc_re,garden.compiler.indent);
});
/**
 * Render the value portion of a declaration.
 */
garden.compiler.render_value = (function garden$compiler$render_value(x){
if(cljs.core.truth_(garden.util.at_keyframes_QMARK_.call(null,x))){
return garden.util.to_str.call(null,cljs.core.get_in.call(null,x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"identifier","identifier",-805503498)], null)));
} else {
return garden.compiler.render_css.call(null,x);
}
});
garden.compiler.render_property_and_value = (function garden$compiler$render_property_and_value(p__370198){
var vec__370200 = p__370198;
var prop = cljs.core.nth.call(null,vec__370200,(0),null);
var val = cljs.core.nth.call(null,vec__370200,(1),null);
if(cljs.core.set_QMARK_.call(null,val)){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,garden$compiler$render_property_and_value,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.repeat.call(null,prop),val))));
} else {
var val__$1 = ((cljs.core.sequential_QMARK_.call(null,val))?garden.compiler.comma_separated_list.call(null,garden.compiler.render_value,val):garden.compiler.render_value.call(null,val));
return garden.util.as_str.call(null,prop,garden.compiler.colon,val__$1,garden.compiler.semicolon);
}
});
/**
 * For each block in `declaration`, add sequence of blocks
 * returned from calling `f` on the block.
 */
garden.compiler.add_blocks = (function garden$compiler$add_blocks(f,declaration){
return cljs.core.mapcat.call(null,(function (p1__370204_SHARP_){
return cljs.core.cons.call(null,p1__370204_SHARP_,f.call(null,p1__370204_SHARP_));
}),declaration);
});
/**
 * Sequence of blocks with their properties prefixed by
 * each vendor in `vendors`.
 */
garden.compiler.prefixed_blocks = (function garden$compiler$prefixed_blocks(vendors,p__370212){
var vec__370220 = p__370212;
var p = cljs.core.nth.call(null,vec__370220,(0),null);
var v = cljs.core.nth.call(null,vec__370220,(1),null);
var iter__35971__auto__ = ((function (vec__370220,p,v){
return (function garden$compiler$prefixed_blocks_$_iter__370221(s__370222){
return (new cljs.core.LazySeq(null,((function (vec__370220,p,v){
return (function (){
var s__370222__$1 = s__370222;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__370222__$1);
if(temp__4657__auto__){
var s__370222__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__370222__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__370222__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__370224 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__370223 = (0);
while(true){
if((i__370223 < size__35970__auto__)){
var vendor = cljs.core._nth.call(null,c__35969__auto__,i__370223);
cljs.core.chunk_append.call(null,b__370224,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.util.vendor_prefix.call(null,vendor,cljs.core.name.call(null,p)),v], null));

var G__370234 = (i__370223 + (1));
i__370223 = G__370234;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370224),garden$compiler$prefixed_blocks_$_iter__370221.call(null,cljs.core.chunk_rest.call(null,s__370222__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370224),null);
}
} else {
var vendor = cljs.core.first.call(null,s__370222__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.util.vendor_prefix.call(null,vendor,cljs.core.name.call(null,p)),v], null),garden$compiler$prefixed_blocks_$_iter__370221.call(null,cljs.core.rest.call(null,s__370222__$2)));
}
} else {
return null;
}
break;
}
});})(vec__370220,p,v))
,null,null));
});})(vec__370220,p,v))
;
return iter__35971__auto__.call(null,vendors);
});
/**
 * Add prefixes to all blocks in `declaration` using
 * vendor prefixes in `vendors`.
 */
garden.compiler.prefix_all_properties = (function garden$compiler$prefix_all_properties(vendors,declaration){
return garden.compiler.add_blocks.call(null,cljs.core.partial.call(null,garden.compiler.prefixed_blocks,vendors),declaration);
});
/**
 * Add prefixes to all blocks in `declaration` when property
 * is in the `:auto-prefix` set.
 */
garden.compiler.prefix_auto_properties = (function garden$compiler$prefix_auto_properties(vendors,declaration){
return garden.compiler.add_blocks.call(null,(function (block){
var vec__370244 = block;
var p = cljs.core.nth.call(null,vec__370244,(0),null);
var _ = cljs.core.nth.call(null,vec__370244,(1),null);
if(cljs.core.truth_(garden.compiler.auto_prefix_QMARK_.call(null,cljs.core.name.call(null,p)))){
return garden.compiler.prefixed_blocks.call(null,vendors,block);
} else {
return null;
}
}),declaration);
});
/**
 * Prefix properties within a `declaration` if `{:prefix true}` is
 * set in its meta, or if a property is in the `:auto-prefix` set.
 */
garden.compiler.prefix_declaration = (function garden$compiler$prefix_declaration(declaration){
var vendors = (function (){var or__35191__auto__ = new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declaration));
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return garden.compiler.vendors.call(null);
}
})();
var prefix_fn = (cljs.core.truth_(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declaration)))?garden.compiler.prefix_all_properties:garden.compiler.prefix_auto_properties);
return prefix_fn.call(null,vendors,declaration);
});
garden.compiler.render_declaration = (function garden$compiler$render_declaration(declaration){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,garden.compiler.render_property_and_value,garden.compiler.prefix_declaration.call(null,declaration)));
});
garden.compiler.render_selector = (function garden$compiler$render_selector(selector){
return garden.compiler.comma_separated_list.call(null,selector);
});
/**
 * Convert a vector to a CSS rule string. The vector is expected to be
 *   fully expanded.
 */
garden.compiler.render_rule = (function garden$compiler$render_rule(p__370253){
var vec__370257 = p__370253;
var selector = cljs.core.nth.call(null,vec__370257,(0),null);
var declarations = cljs.core.nth.call(null,vec__370257,(1),null);
var rule = vec__370257;
if((cljs.core.seq.call(null,rule)) && (cljs.core.every_QMARK_.call(null,cljs.core.seq,rule))){
return [cljs.core.str(garden.compiler.render_selector.call(null,selector)),cljs.core.str(garden.compiler.l_brace),cljs.core.str(garden.compiler.indent_str.call(null,clojure.string.join.call(null,"\n",cljs.core.map.call(null,garden.compiler.render_css,declarations)))),cljs.core.str(garden.compiler.r_brace)].join('');
} else {
return null;
}
});
/**
 * Render the individual components of a media expression.
 */
garden.compiler.render_media_expr_part = (function garden$compiler$render_media_expr_part(p__370258){
var vec__370261 = p__370258;
var k = cljs.core.nth.call(null,vec__370261,(0),null);
var v = cljs.core.nth.call(null,vec__370261,(1),null);
var vec__370262 = cljs.core.map.call(null,garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var sk = cljs.core.nth.call(null,vec__370262,(0),null);
var sv = cljs.core.nth.call(null,vec__370262,(1),null);
if(v === true){
return sk;
} else {
if(v === false){
return [cljs.core.str("not "),cljs.core.str(sk)].join('');
} else {
if(cljs.core._EQ_.call(null,"only",sv)){
return [cljs.core.str("only "),cljs.core.str(sk)].join('');
} else {
if(cljs.core.truth_((function (){var and__35179__auto__ = v;
if(cljs.core.truth_(and__35179__auto__)){
return cljs.core.seq.call(null,sv);
} else {
return and__35179__auto__;
}
})())){
return [cljs.core.str("("),cljs.core.str(sk),cljs.core.str(garden.compiler.colon),cljs.core.str(sv),cljs.core.str(")")].join('');
} else {
return [cljs.core.str("("),cljs.core.str(sk),cljs.core.str(")")].join('');
}

}
}
}
});
/**
 * Make a media query expession from one or more maps. Keys are not
 *   validated but values have the following semantics:
 *   
 *  `true`  as in `{:screen true}`  == "screen"
 *  `false` as in `{:screen false}` == "not screen"
 *  `:only` as in `{:screen :only}  == "only screen"
 */
garden.compiler.render_media_expr = (function garden$compiler$render_media_expr(expr){
if(cljs.core.sequential_QMARK_.call(null,expr)){
return garden.compiler.comma_separated_list.call(null,cljs.core.map.call(null,garden$compiler$render_media_expr,expr));
} else {
return clojure.string.join.call(null," and ",cljs.core.map.call(null,garden.compiler.render_media_expr_part,expr));
}
});
/**
 * Render a CSSUnit.
 */
garden.compiler.render_unit = (function garden$compiler$render_unit(css_unit){
var map__370283 = css_unit;
var map__370283__$1 = ((((!((map__370283 == null)))?((((map__370283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370283):map__370283);
var magnitude = cljs.core.get.call(null,map__370283__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var unit = cljs.core.get.call(null,map__370283__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var magnitude__$1 = magnitude;
return [cljs.core.str(magnitude__$1),cljs.core.str(cljs.core.name.call(null,unit))].join('');
});
/**
 * Render a CSS function.
 */
garden.compiler.render_function = (function garden$compiler$render_function(css_function){
var map__370289 = css_function;
var map__370289__$1 = ((((!((map__370289 == null)))?((((map__370289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370289):map__370289);
var function$ = cljs.core.get.call(null,map__370289__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var args = cljs.core.get.call(null,map__370289__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var args__$1 = ((cljs.core.sequential_QMARK_.call(null,args))?garden.compiler.comma_separated_list.call(null,args):garden.util.to_str.call(null,args));
return garden.util.format.call(null,"%s(%s)",garden.util.to_str.call(null,function$),args__$1);
});
garden.compiler.render_color = (function garden$compiler$render_color(c){
var temp__4655__auto__ = new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(temp__4655__auto__)){
var a = temp__4655__auto__;
var map__370301 = garden.color.as_hsl.call(null,c);
var map__370301__$1 = ((((!((map__370301 == null)))?((((map__370301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370301):map__370301);
var hue = cljs.core.get.call(null,map__370301__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.call(null,map__370301__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.call(null,map__370301__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
var vec__370302 = cljs.core.map.call(null,garden.units.percent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [saturation,lightness], null));
var s = cljs.core.nth.call(null,vec__370302,(0),null);
var l = cljs.core.nth.call(null,vec__370302,(1),null);
return garden.util.format.call(null,"hsla(%s)",garden.compiler.comma_separated_list.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,s,l,a], null)));
} else {
return garden.color.as_hex.call(null,c);
}
});
if(typeof garden.compiler.render_at_rule !== 'undefined'){
} else {
/**
 * Render a CSS at-rule
 */
garden.compiler.render_at_rule = (function (){var method_table__36115__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__36116__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__36117__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__36118__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__36119__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"garden.compiler","render-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__36119__auto__,method_table__36115__auto__,prefer_table__36116__auto__,method_cache__36117__auto__,cached_hierarchy__36118__auto__));
})();
}
cljs.core._add_method.call(null,garden.compiler.render_at_rule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
cljs.core._add_method.call(null,garden.compiler.render_at_rule,new cljs.core.Keyword(null,"import","import",-1399500709),(function (p__370308){
var map__370309 = p__370308;
var map__370309__$1 = ((((!((map__370309 == null)))?((((map__370309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370309):map__370309);
var value = cljs.core.get.call(null,map__370309__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__370311 = value;
var map__370311__$1 = ((((!((map__370311 == null)))?((((map__370311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370311):map__370311);
var url = cljs.core.get.call(null,map__370311__$1,new cljs.core.Keyword(null,"url","url",276297046));
var media_queries = cljs.core.get.call(null,map__370311__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var url__$1 = ((typeof url === 'string')?garden.util.wrap_quotes.call(null,url):garden.compiler.render_css.call(null,url));
var queries = (cljs.core.truth_(media_queries)?garden.compiler.render_media_expr.call(null,media_queries):null);
return [cljs.core.str("@import "),cljs.core.str((cljs.core.truth_(queries)?[cljs.core.str(url__$1),cljs.core.str(" "),cljs.core.str(queries)].join(''):url__$1)),cljs.core.str(garden.compiler.semicolon)].join('');
}));
cljs.core._add_method.call(null,garden.compiler.render_at_rule,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__370314){
var map__370315 = p__370314;
var map__370315__$1 = ((((!((map__370315 == null)))?((((map__370315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370315):map__370315);
var value = cljs.core.get.call(null,map__370315__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__370317 = value;
var map__370317__$1 = ((((!((map__370317 == null)))?((((map__370317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370317):map__370317);
var identifier = cljs.core.get.call(null,map__370317__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.call(null,map__370317__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.seq.call(null,frames)){
var body = [cljs.core.str(garden.util.to_str.call(null,identifier)),cljs.core.str(garden.compiler.l_brace_1),cljs.core.str(garden.compiler.indent_str.call(null,garden.compiler.rule_join.call(null,cljs.core.map.call(null,garden.compiler.render_css,frames)))),cljs.core.str(garden.compiler.r_brace_1)].join('');
var prefix = ((function (body,map__370317,map__370317__$1,identifier,frames,map__370315,map__370315__$1,value){
return (function (vendor){
return [cljs.core.str("@"),cljs.core.str(garden.util.vendor_prefix.call(null,vendor,"keyframes "))].join('');
});})(body,map__370317,map__370317__$1,identifier,frames,map__370315,map__370315__$1,value))
;
return garden.compiler.rule_join.call(null,cljs.core.map.call(null,((function (body,prefix,map__370317,map__370317__$1,identifier,frames,map__370315,map__370315__$1,value){
return (function (p1__370313_SHARP_){
return [cljs.core.str(p1__370313_SHARP_),cljs.core.str(body)].join('');
});})(body,prefix,map__370317,map__370317__$1,identifier,frames,map__370315,map__370315__$1,value))
,cljs.core.cons.call(null,"@keyframes ",cljs.core.map.call(null,prefix,garden.compiler.vendors.call(null)))));
} else {
return null;
}
}));
cljs.core._add_method.call(null,garden.compiler.render_at_rule,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__370319){
var map__370320 = p__370319;
var map__370320__$1 = ((((!((map__370320 == null)))?((((map__370320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370320):map__370320);
var value = cljs.core.get.call(null,map__370320__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__370322 = value;
var map__370322__$1 = ((((!((map__370322 == null)))?((((map__370322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370322):map__370322);
var media_queries = cljs.core.get.call(null,map__370322__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.call(null,map__370322__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.seq.call(null,rules)){
return [cljs.core.str("@media "),cljs.core.str(garden.compiler.render_media_expr.call(null,media_queries)),cljs.core.str(garden.compiler.l_brace_1),cljs.core.str(garden.compiler.indent_str.call(null,garden.compiler.rule_join.call(null,cljs.core.map.call(null,garden.compiler.render_css,rules)))),cljs.core.str(garden.compiler.r_brace_1)].join('');
} else {
return null;
}
}));
(garden.compiler.CSSRenderer["null"] = true);

(garden.compiler.render_css["null"] = (function (this$){
return "";
}));

garden.color.CSSColor.prototype.garden$compiler$CSSRenderer$ = true;

garden.color.CSSColor.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_color.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.IndexedSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

cljs.core.LazySeq.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.LazySeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

cljs.core.NodeSeq.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.NodeSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

cljs.core.BlackNode.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.BlackNode.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

garden.types.CSSUnit.prototype.garden$compiler$CSSRenderer$ = true;

garden.types.CSSUnit.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_unit.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.ChunkedSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

cljs.core.Cons.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.Cons.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

cljs.core.RSeq.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.RSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

(garden.compiler.CSSRenderer["number"] = true);

(garden.compiler.render_css["number"] = (function (this$){
return [cljs.core.str(this$)].join('');
}));

garden.types.CSSFunction.prototype.garden$compiler$CSSRenderer$ = true;

garden.types.CSSFunction.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_function.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.PersistentHashMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.ArrayNodeSeq.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.ArrayNodeSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

cljs.core.Subvec.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.Subvec.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule.call(null,this$__$1);
});

(garden.compiler.CSSRenderer["_"] = true);

(garden.compiler.render_css["_"] = (function (this$){
return [cljs.core.str(this$)].join('');
}));

cljs.core.PersistentTreeMap.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.PersistentTreeMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.ChunkedCons.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.ChunkedCons.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

garden.types.CSSAtRule.prototype.garden$compiler$CSSRenderer$ = true;

garden.types.CSSAtRule.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_at_rule.call(null,this$__$1);
});

cljs.core.RedNode.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.RedNode.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.PersistentVector.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.Keyword.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.Keyword.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.PersistentArrayMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.List.prototype.garden$compiler$CSSRenderer$ = true;

cljs.core.List.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});
/**
 * Convert a sequence of maps into CSS for use with the HTML style
 * attribute.
 */
garden.compiler.compile_style = (function garden$compiler$compile_style(ms){
return cljs.core.first.call(null,garden.compiler.render_css.call(null,garden.compiler.expand.call(null,cljs.core.reduce.call(null,cljs.core.merge,cljs.core.filter.call(null,garden.util.declaration_QMARK_,ms)))));
});
/**
 * Return a string of CSS.
 */
garden.compiler.do_compile = (function garden$compiler$do_compile(flags,rules){
var _STAR_flags_STAR_370355 = garden.compiler._STAR_flags_STAR_;
garden.compiler._STAR_flags_STAR_ = flags;

try{return garden.compiler.rule_join.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,garden.compiler.render_css,cljs.core.filter.call(null,garden.compiler.top_level_expression_QMARK_,garden.compiler.expand_stylesheet.call(null,rules)))));
}finally {garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR_370355;
}});
/**
 * Prefix stylesheet with files in preamble. Not available in
 *   ClojureScript.
 */
garden.compiler.do_preamble = (function garden$compiler$do_preamble(p__370356,stylesheet){
var map__370360 = p__370356;
var map__370360__$1 = ((((!((map__370360 == null)))?((((map__370360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370360):map__370360);
var preamble = cljs.core.get.call(null,map__370360__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
return stylesheet;
});
/**
 * Compress CSS if the pretty-print(?) flag is true.
 */
garden.compiler.do_compression = (function garden$compiler$do_compression(p__370362,stylesheet){
var map__370365 = p__370362;
var map__370365__$1 = ((((!((map__370365 == null)))?((((map__370365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370365):map__370365);
var pretty_print_QMARK_ = cljs.core.get.call(null,map__370365__$1,new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158));
var pretty_print = cljs.core.get.call(null,map__370365__$1,new cljs.core.Keyword(null,"pretty-print","pretty-print",-1314067013));
if(cljs.core.truth_((function (){var or__35191__auto__ = pretty_print_QMARK_;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return pretty_print;
}
})())){
return stylesheet;
} else {
return garden.compression.compress_stylesheet.call(null,stylesheet);
}
});
/**
 * Write contents of stylesheet to disk.
 */
garden.compiler.do_output_to = (function garden$compiler$do_output_to(p__370377,stylesheet){
var map__370380 = p__370377;
var map__370380__$1 = ((((!((map__370380 == null)))?((((map__370380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370380):map__370380);
var output_to = cljs.core.get.call(null,map__370380__$1,new cljs.core.Keyword(null,"output-to","output-to",-965533968));
return stylesheet;
});
/**
 * Convert any number of Clojure data structures to CSS.
 */
garden.compiler.compile_css = (function garden$compiler$compile_css(var_args){
var args__36267__auto__ = [];
var len__36260__auto___370386 = arguments.length;
var i__36261__auto___370387 = (0);
while(true){
if((i__36261__auto___370387 < len__36260__auto___370386)){
args__36267__auto__.push((arguments[i__36261__auto___370387]));

var G__370388 = (i__36261__auto___370387 + (1));
i__36261__auto___370387 = G__370388;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic = (function (flags,rules){
var vec__370385 = (cljs.core.truth_((function (){var and__35179__auto__ = garden.util.hash_map_QMARK_.call(null,flags);
if(cljs.core.truth_(and__35179__auto__)){
return cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,flags)),cljs.core.keys.call(null,garden.compiler._STAR_flags_STAR_));
} else {
return and__35179__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,garden.compiler._STAR_flags_STAR_,flags),rules], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.compiler._STAR_flags_STAR_,cljs.core.cons.call(null,flags,rules)], null));
var flags__$1 = cljs.core.nth.call(null,vec__370385,(0),null);
var rules__$1 = cljs.core.nth.call(null,vec__370385,(1),null);
return garden.compiler.do_output_to.call(null,flags__$1,garden.compiler.do_compression.call(null,flags__$1,garden.compiler.do_preamble.call(null,flags__$1,garden.compiler.do_compile.call(null,flags__$1,rules__$1))));
});

garden.compiler.compile_css.cljs$lang$maxFixedArity = (1);

garden.compiler.compile_css.cljs$lang$applyTo = (function (seq370382){
var G__370383 = cljs.core.first.call(null,seq370382);
var seq370382__$1 = cljs.core.next.call(null,seq370382);
return garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic(G__370383,seq370382__$1);
});
