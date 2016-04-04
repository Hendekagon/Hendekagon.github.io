// Compiled by ClojureScript 1.8.40 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__36468__auto__ = [];
var len__36461__auto___285322 = arguments.length;
var i__36462__auto___285323 = (0);
while(true){
if((i__36462__auto___285323 < len__36461__auto___285322)){
args__36468__auto__.push((arguments[i__36462__auto___285323]));

var G__285325 = (i__36462__auto___285323 + (1));
i__36462__auto___285323 = G__285325;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((0) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__36469__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq285316){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq285316));
});
/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__36468__auto__ = [];
var len__36461__auto___285331 = arguments.length;
var i__36462__auto___285332 = (0);
while(true){
if((i__36462__auto___285332 < len__36461__auto___285331)){
args__36468__auto__.push((arguments[i__36462__auto___285332]));

var G__285333 = (i__36462__auto___285332 + (1));
i__36462__auto___285332 = G__285333;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((0) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__36469__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq285328){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq285328));
});
