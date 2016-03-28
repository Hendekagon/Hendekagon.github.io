// Compiled by ClojureScript 1.8.34 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__36267__auto__ = [];
var len__36260__auto___293308 = arguments.length;
var i__36261__auto___293309 = (0);
while(true){
if((i__36261__auto___293309 < len__36260__auto___293308)){
args__36267__auto__.push((arguments[i__36261__auto___293309]));

var G__293311 = (i__36261__auto___293309 + (1));
i__36261__auto___293309 = G__293311;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((0) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__36268__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq293303){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq293303));
});
/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__36267__auto__ = [];
var len__36260__auto___293314 = arguments.length;
var i__36261__auto___293315 = (0);
while(true){
if((i__36261__auto___293315 < len__36260__auto___293314)){
args__36267__auto__.push((arguments[i__36261__auto___293315]));

var G__293316 = (i__36261__auto___293315 + (1));
i__36261__auto___293315 = G__293316;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((0) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__36268__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq293313){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq293313));
});

//# sourceMappingURL=core.js.map?rel=1459068551535