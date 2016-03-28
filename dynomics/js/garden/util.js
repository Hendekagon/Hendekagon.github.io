// Compiled by ClojureScript 1.8.34 {}
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__36267__auto__ = [];
var len__36260__auto___448913 = arguments.length;
var i__36261__auto___448914 = (0);
while(true){
if((i__36261__auto___448914 < len__36260__auto___448913)){
args__36267__auto__.push((arguments[i__36261__auto___448914]));

var G__448915 = (i__36261__auto___448914 + (1));
i__36261__auto___448914 = G__448915;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

garden.util.format.cljs$lang$applyTo = (function (seq448911){
var G__448912 = cljs.core.first.call(null,seq448911);
var seq448911__$1 = cljs.core.next.call(null,seq448911);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__448912,seq448911__$1);
});

/**
 * @interface
 */
garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((!((this$ == null))) && (!((this$.garden$util$ToString$to_str$arity$1 == null)))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
var x__35854__auto__ = (((this$ == null))?null:this$);
var m__35855__auto__ = (garden.util.to_str[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,this$);
} else {
var m__35855__auto____$1 = (garden.util.to_str["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.garden$util$ToString$ = true;

cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

(garden.util.ToString["_"] = true);

(garden.util.to_str["_"] = (function (this$){
return [cljs.core.str(this$)].join('');
}));

(garden.util.ToString["null"] = true);

(garden.util.to_str["null"] = (function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__36267__auto__ = [];
var len__36260__auto___448925 = arguments.length;
var i__36261__auto___448926 = (0);
while(true){
if((i__36261__auto___448926 < len__36260__auto___448925)){
args__36267__auto__.push((arguments[i__36261__auto___448926]));

var G__448927 = (i__36261__auto___448926 + (1));
i__36261__auto___448926 = G__448927;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((0) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__36268__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

garden.util.as_str.cljs$lang$applyTo = (function (seq448924){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq448924));
});
/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__36267__auto__ = [];
var len__36260__auto___448943 = arguments.length;
var i__36261__auto___448945 = (0);
while(true){
if((i__36261__auto___448945 < len__36260__auto___448943)){
args__36267__auto__.push((arguments[i__36261__auto___448945]));

var G__448946 = (i__36261__auto___448945 + (1));
i__36261__auto___448945 = G__448946;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__448937){
var vec__448938 = p__448937;
var radix = cljs.core.nth.call(null,vec__448938,(0),null);
var radix__$1 = (function (){var or__35191__auto__ = radix;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

garden.util.string__GT_int.cljs$lang$applyTo = (function (seq448928){
var G__448929 = cljs.core.first.call(null,seq448928);
var seq448928__$1 = cljs.core.next.call(null,seq448928);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__448929,seq448928__$1);
});
/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__36267__auto__ = [];
var len__36260__auto___448957 = arguments.length;
var i__36261__auto___448958 = (0);
while(true){
if((i__36261__auto___448958 < len__36260__auto___448957)){
args__36267__auto__.push((arguments[i__36261__auto___448958]));

var G__448959 = (i__36261__auto___448958 + (1));
i__36261__auto___448958 = G__448959;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__448955){
var vec__448956 = p__448955;
var radix = cljs.core.nth.call(null,vec__448956,(0),null);
var radix__$1 = (function (){var or__35191__auto__ = radix;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

garden.util.int__GT_string.cljs$lang$applyTo = (function (seq448948){
var G__448949 = cljs.core.first.call(null,seq448948);
var seq448948__$1 = cljs.core.next.call(null,seq448948);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__448949,seq448948__$1);
});
/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__35971__auto__ = (function garden$util$comma_join_$_iter__448976(s__448977){
return (new cljs.core.LazySeq(null,(function (){
var s__448977__$1 = s__448977;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__448977__$1);
if(temp__4657__auto__){
var s__448977__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__448977__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__448977__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__448979 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__448978 = (0);
while(true){
if((i__448978 < size__35970__auto__)){
var x = cljs.core._nth.call(null,c__35969__auto__,i__448978);
cljs.core.chunk_append.call(null,b__448979,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)));

var G__448993 = (i__448978 + (1));
i__448978 = G__448993;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__448979),garden$util$comma_join_$_iter__448976.call(null,cljs.core.chunk_rest.call(null,s__448977__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__448979),null);
}
} else {
var x = cljs.core.first.call(null,s__448977__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)),garden$util$comma_join_$_iter__448976.call(null,cljs.core.rest.call(null,s__448977__$2)));
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
return clojure.string.join.call(null,", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (!(cljs.core.record_QMARK_.call(null,x)));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
var and__35179__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__35179__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403));
} else {
return and__35179__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
var and__35179__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__35179__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
} else {
return and__35179__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
var and__35179__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__35179__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709));
} else {
return and__35179__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1))){
return [cljs.core.str(p__$1),cljs.core.str(s)].join('');
} else {
return [cljs.core.str(p__$1),cljs.core.str("-"),cljs.core.str(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1))){
return garden.util.prefix.call(null,p__$1,s);
} else {
return garden.util.prefix.call(null,[cljs.core.str("-"),cljs.core.str(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return (cljs.core.integer_QMARK_.call(null,n)) && ((n > (0)));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__35529__auto__ = a;
var y__35530__auto__ = b;
return ((x__35529__auto__ < y__35530__auto__) ? x__35529__auto__ : y__35530__auto__);
})();
var top = (function (){var x__35522__auto__ = a;
var y__35523__auto__ = b;
return ((x__35522__auto__ > y__35523__auto__) ? x__35522__auto__ : y__35523__auto__);
})();
return ((n >= bottom)) && ((n <= top));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__449025 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__449025,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__449025,(1),null);
var x__35522__auto__ = a__$1;
var y__35523__auto__ = (function (){var x__35529__auto__ = b__$1;
var y__35530__auto__ = n;
return ((x__35529__auto__ < y__35530__auto__) ? x__35529__auto__ : y__35530__auto__);
})();
return ((x__35522__auto__ > y__35523__auto__) ? x__35522__auto__ : y__35523__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__36267__auto__ = [];
var len__36260__auto___449031 = arguments.length;
var i__36261__auto___449032 = (0);
while(true){
if((i__36261__auto___449032 < len__36260__auto___449031)){
args__36267__auto__.push((arguments[i__36261__auto___449032]));

var G__449033 = (i__36261__auto___449032 + (1));
i__36261__auto___449032 = G__449033;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

garden.util.average.cljs$lang$applyTo = (function (seq449028){
var G__449029 = cljs.core.first.call(null,seq449028);
var seq449028__$1 = cljs.core.next.call(null,seq449028);
var G__449030 = cljs.core.first.call(null,seq449028__$1);
var seq449028__$2 = cljs.core.next.call(null,seq449028__$1);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__449029,G__449030,seq449028__$2);
});
/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__36267__auto__ = [];
var len__36260__auto___449043 = arguments.length;
var i__36261__auto___449044 = (0);
while(true){
if((i__36261__auto___449044 < len__36260__auto___449043)){
args__36267__auto__.push((arguments[i__36261__auto___449044]));

var G__449045 = (i__36261__auto___449044 + (1));
i__36261__auto___449044 = G__449045;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((0) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__36268__auto__);
});

garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__4655__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__4655__auto__){
var rst = temp__4655__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__449052 = (i - (1));
var G__449053 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__449052;
v_seqs__$2 = G__449053;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return garden$util$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

garden.util.cartesian_product.cljs$lang$applyTo = (function (seq449037){
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq449037));
});
