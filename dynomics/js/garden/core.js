// Compiled by ClojureScript 1.7.170 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__25286__auto__ = [];
var len__25279__auto___201693 = arguments.length;
var i__25280__auto___201694 = (0);
while(true){
if((i__25280__auto___201694 < len__25279__auto___201693)){
args__25286__auto__.push((arguments[i__25280__auto___201694]));

var G__201695 = (i__25280__auto___201694 + (1));
i__25280__auto___201694 = G__201695;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((0) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((0)),(0))):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__25287__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq201692){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq201692));
});
/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__25286__auto__ = [];
var len__25279__auto___201697 = arguments.length;
var i__25280__auto___201698 = (0);
while(true){
if((i__25280__auto___201698 < len__25279__auto___201697)){
args__25286__auto__.push((arguments[i__25280__auto___201698]));

var G__201699 = (i__25280__auto___201698 + (1));
i__25280__auto___201698 = G__201699;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((0) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((0)),(0))):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__25287__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq201696){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq201696));
});

//# sourceMappingURL=core.js.map