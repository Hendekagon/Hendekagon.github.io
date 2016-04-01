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
var len__36491__auto___66393 = arguments.length;
var i__36492__auto___66394 = (0);
while(true){
if((i__36492__auto___66394 < len__36491__auto___66393)){
args__36498__auto__.push((arguments[i__36492__auto___66394]));

var G__66395 = (i__36492__auto___66394 + (1));
i__36492__auto___66394 = G__66395;
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

garden.core.css.cljs$lang$applyTo = (function (seq66392){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66392));
});
/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__36498__auto__ = [];
var len__36491__auto___66397 = arguments.length;
var i__36492__auto___66398 = (0);
while(true){
if((i__36492__auto___66398 < len__36491__auto___66397)){
args__36498__auto__.push((arguments[i__36492__auto___66398]));

var G__66399 = (i__36492__auto___66398 + (1));
i__36492__auto___66398 = G__66399;
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

garden.core.style.cljs$lang$applyTo = (function (seq66396){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66396));
});

//# sourceMappingURL=core.js.map?rel=1459533427886