// Compiled by ClojureScript 1.8.40 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__36498__auto__ = [];
var len__36491__auto___86049 = arguments.length;
var i__36492__auto___86050 = (0);
while(true){
if((i__36492__auto___86050 < len__36491__auto___86049)){
args__36498__auto__.push((arguments[i__36492__auto___86050]));

var G__86051 = (i__36492__auto___86050 + (1));
i__36492__auto___86050 = G__86051;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((0) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__36499__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq86048){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86048));
});
/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__36498__auto__ = [];
var len__36491__auto___86053 = arguments.length;
var i__36492__auto___86054 = (0);
while(true){
if((i__36492__auto___86054 < len__36491__auto___86053)){
args__36498__auto__.push((arguments[i__36492__auto___86054]));

var G__86055 = (i__36492__auto___86054 + (1));
i__36492__auto___86054 = G__86055;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((0) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__36499__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq86052){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86052));
});
