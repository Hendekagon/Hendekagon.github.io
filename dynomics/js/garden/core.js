// Compiled by ClojureScript 1.7.170 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__25276__auto__ = [];
var len__25269__auto___644343 = arguments.length;
var i__25270__auto___644344 = (0);
while(true){
if((i__25270__auto___644344 < len__25269__auto___644343)){
args__25276__auto__.push((arguments[i__25270__auto___644344]));

var G__644345 = (i__25270__auto___644344 + (1));
i__25270__auto___644344 = G__644345;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((0) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((0)),(0))):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__25277__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq644342){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq644342));
});
/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__25276__auto__ = [];
var len__25269__auto___644347 = arguments.length;
var i__25270__auto___644348 = (0);
while(true){
if((i__25270__auto___644348 < len__25269__auto___644347)){
args__25276__auto__.push((arguments[i__25270__auto___644348]));

var G__644349 = (i__25270__auto___644348 + (1));
i__25270__auto___644348 = G__644349;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((0) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((0)),(0))):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__25277__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq644346){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq644346));
});

//# sourceMappingURL=core.js.map