// Compiled by ClojureScript 1.7.170 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__25230__auto__ = [];
var len__25223__auto___47823 = arguments.length;
var i__25224__auto___47824 = (0);
while(true){
if((i__25224__auto___47824 < len__25223__auto___47823)){
args__25230__auto__.push((arguments[i__25224__auto___47824]));

var G__47825 = (i__25224__auto___47824 + (1));
i__25224__auto___47824 = G__47825;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((0) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((0)),(0))):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__25231__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq47822){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47822));
});
/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__25230__auto__ = [];
var len__25223__auto___47827 = arguments.length;
var i__25224__auto___47828 = (0);
while(true){
if((i__25224__auto___47828 < len__25223__auto___47827)){
args__25230__auto__.push((arguments[i__25224__auto___47828]));

var G__47829 = (i__25224__auto___47828 + (1));
i__25224__auto___47828 = G__47829;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((0) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((0)),(0))):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__25231__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq47826){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47826));
});

//# sourceMappingURL=core.js.map