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
var len__36260__auto___370393 = arguments.length;
var i__36261__auto___370395 = (0);
while(true){
if((i__36261__auto___370395 < len__36260__auto___370393)){
args__36267__auto__.push((arguments[i__36261__auto___370395]));

var G__370396 = (i__36261__auto___370395 + (1));
i__36261__auto___370395 = G__370396;
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

garden.core.css.cljs$lang$applyTo = (function (seq370392){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq370392));
});
/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__36267__auto__ = [];
var len__36260__auto___370399 = arguments.length;
var i__36261__auto___370400 = (0);
while(true){
if((i__36261__auto___370400 < len__36260__auto___370399)){
args__36267__auto__.push((arguments[i__36261__auto___370400]));

var G__370401 = (i__36261__auto___370400 + (1));
i__36261__auto___370400 = G__370401;
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

garden.core.style.cljs$lang$applyTo = (function (seq370397){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq370397));
});
