// Compiled by ClojureScript 1.7.170 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1883159 = arguments.length;
var i__25220__auto___1883160 = (0);
while(true){
if((i__25220__auto___1883160 < len__25219__auto___1883159)){
args__25226__auto__.push((arguments[i__25220__auto___1883160]));

var G__1883161 = (i__25220__auto___1883160 + (1));
i__25220__auto___1883160 = G__1883161;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((0) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((0)),(0))):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__25227__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq1883158){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1883158));
});
/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1883163 = arguments.length;
var i__25220__auto___1883164 = (0);
while(true){
if((i__25220__auto___1883164 < len__25219__auto___1883163)){
args__25226__auto__.push((arguments[i__25220__auto___1883164]));

var G__1883165 = (i__25220__auto___1883164 + (1));
i__25220__auto___1883164 = G__1883165;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((0) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((0)),(0))):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__25227__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq1883162){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1883162));
});

//# sourceMappingURL=core.js.map