// Compiled by ClojureScript 1.8.40 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__36501__auto__ = [];
var len__36494__auto___126104 = arguments.length;
var i__36495__auto___126105 = (0);
while(true){
if((i__36495__auto___126105 < len__36494__auto___126104)){
args__36501__auto__.push((arguments[i__36495__auto___126105]));

var G__126107 = (i__36495__auto___126105 + (1));
i__36495__auto___126105 = G__126107;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((0) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__36502__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq126103){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq126103));
});
/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__36501__auto__ = [];
var len__36494__auto___126109 = arguments.length;
var i__36495__auto___126110 = (0);
while(true){
if((i__36495__auto___126110 < len__36494__auto___126109)){
args__36501__auto__.push((arguments[i__36495__auto___126110]));

var G__126111 = (i__36495__auto___126110 + (1));
i__36495__auto___126110 = G__126111;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((0) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__36502__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq126108){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq126108));
});
