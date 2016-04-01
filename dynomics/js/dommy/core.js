// Compiled by ClojureScript 1.8.40 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__35422__auto__ = elem.textContent;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args91139 = [];
var len__36491__auto___91177 = arguments.length;
var i__36492__auto___91178 = (0);
while(true){
if((i__36492__auto___91178 < len__36491__auto___91177)){
args91139.push((arguments[i__36492__auto___91178]));

var G__91180 = (i__36492__auto___91178 + (1));
i__36492__auto___91178 = G__91180;
continue;
} else {
}
break;
}

var G__91152 = args91139.length;
switch (G__91152) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91139.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args91268 = [];
var len__36491__auto___91277 = arguments.length;
var i__36492__auto___91278 = (0);
while(true){
if((i__36492__auto___91278 < len__36491__auto___91277)){
args91268.push((arguments[i__36492__auto___91278]));

var G__91279 = (i__36492__auto___91278 + (1));
i__36492__auto___91278 = G__91279;
continue;
} else {
}
break;
}

var G__91274 = args91268.length;
switch (G__91274) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91268.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args91285 = [];
var len__36491__auto___91299 = arguments.length;
var i__36492__auto___91300 = (0);
while(true){
if((i__36492__auto___91300 < len__36491__auto___91299)){
args91285.push((arguments[i__36492__auto___91300]));

var G__91304 = (i__36492__auto___91300 + (1));
i__36492__auto___91300 = G__91304;
continue;
} else {
}
break;
}

var G__91298 = args91285.length;
switch (G__91298) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91285.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__91284_SHARP_){
return !((p1__91284_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__36498__auto__ = [];
var len__36491__auto___91336 = arguments.length;
var i__36492__auto___91337 = (0);
while(true){
if((i__36492__auto___91337 < len__36491__auto___91336)){
args__36498__auto__.push((arguments[i__36492__auto___91337]));

var G__91338 = (i__36492__auto___91337 + (1));
i__36492__auto___91337 = G__91338;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__91327_91339 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__91328_91340 = null;
var count__91329_91341 = (0);
var i__91330_91342 = (0);
while(true){
if((i__91330_91342 < count__91329_91341)){
var vec__91331_91343 = cljs.core._nth.call(null,chunk__91328_91340,i__91330_91342);
var k_91344 = cljs.core.nth.call(null,vec__91331_91343,(0),null);
var v_91345 = cljs.core.nth.call(null,vec__91331_91343,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_91344),v_91345);

var G__91347 = seq__91327_91339;
var G__91348 = chunk__91328_91340;
var G__91349 = count__91329_91341;
var G__91350 = (i__91330_91342 + (1));
seq__91327_91339 = G__91347;
chunk__91328_91340 = G__91348;
count__91329_91341 = G__91349;
i__91330_91342 = G__91350;
continue;
} else {
var temp__4657__auto___91354 = cljs.core.seq.call(null,seq__91327_91339);
if(temp__4657__auto___91354){
var seq__91327_91355__$1 = temp__4657__auto___91354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91327_91355__$1)){
var c__36233__auto___91356 = cljs.core.chunk_first.call(null,seq__91327_91355__$1);
var G__91359 = cljs.core.chunk_rest.call(null,seq__91327_91355__$1);
var G__91360 = c__36233__auto___91356;
var G__91361 = cljs.core.count.call(null,c__36233__auto___91356);
var G__91362 = (0);
seq__91327_91339 = G__91359;
chunk__91328_91340 = G__91360;
count__91329_91341 = G__91361;
i__91330_91342 = G__91362;
continue;
} else {
var vec__91334_91367 = cljs.core.first.call(null,seq__91327_91355__$1);
var k_91368 = cljs.core.nth.call(null,vec__91334_91367,(0),null);
var v_91369 = cljs.core.nth.call(null,vec__91334_91367,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_91368),v_91369);

var G__91380 = cljs.core.next.call(null,seq__91327_91355__$1);
var G__91381 = null;
var G__91382 = (0);
var G__91383 = (0);
seq__91327_91339 = G__91380;
chunk__91328_91340 = G__91381;
count__91329_91341 = G__91382;
i__91330_91342 = G__91383;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq91317){
var G__91318 = cljs.core.first.call(null,seq91317);
var seq91317__$1 = cljs.core.next.call(null,seq91317);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__91318,seq91317__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__36498__auto__ = [];
var len__36491__auto___91396 = arguments.length;
var i__36492__auto___91397 = (0);
while(true){
if((i__36492__auto___91397 < len__36491__auto___91396)){
args__36498__auto__.push((arguments[i__36492__auto___91397]));

var G__91398 = (i__36492__auto___91397 + (1));
i__36492__auto___91397 = G__91398;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__91392_91399 = cljs.core.seq.call(null,keywords);
var chunk__91393_91400 = null;
var count__91394_91401 = (0);
var i__91395_91402 = (0);
while(true){
if((i__91395_91402 < count__91394_91401)){
var kw_91403 = cljs.core._nth.call(null,chunk__91393_91400,i__91395_91402);
style.removeProperty(dommy.utils.as_str.call(null,kw_91403));

var G__91404 = seq__91392_91399;
var G__91405 = chunk__91393_91400;
var G__91406 = count__91394_91401;
var G__91407 = (i__91395_91402 + (1));
seq__91392_91399 = G__91404;
chunk__91393_91400 = G__91405;
count__91394_91401 = G__91406;
i__91395_91402 = G__91407;
continue;
} else {
var temp__4657__auto___91408 = cljs.core.seq.call(null,seq__91392_91399);
if(temp__4657__auto___91408){
var seq__91392_91409__$1 = temp__4657__auto___91408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91392_91409__$1)){
var c__36233__auto___91411 = cljs.core.chunk_first.call(null,seq__91392_91409__$1);
var G__91413 = cljs.core.chunk_rest.call(null,seq__91392_91409__$1);
var G__91414 = c__36233__auto___91411;
var G__91415 = cljs.core.count.call(null,c__36233__auto___91411);
var G__91416 = (0);
seq__91392_91399 = G__91413;
chunk__91393_91400 = G__91414;
count__91394_91401 = G__91415;
i__91395_91402 = G__91416;
continue;
} else {
var kw_91417 = cljs.core.first.call(null,seq__91392_91409__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_91417));

var G__91419 = cljs.core.next.call(null,seq__91392_91409__$1);
var G__91420 = null;
var G__91421 = (0);
var G__91422 = (0);
seq__91392_91399 = G__91419;
chunk__91393_91400 = G__91420;
count__91394_91401 = G__91421;
i__91395_91402 = G__91422;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq91390){
var G__91391 = cljs.core.first.call(null,seq91390);
var seq91390__$1 = cljs.core.next.call(null,seq91390);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__91391,seq91390__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__36498__auto__ = [];
var len__36491__auto___91449 = arguments.length;
var i__36492__auto___91450 = (0);
while(true){
if((i__36492__auto___91450 < len__36491__auto___91449)){
args__36498__auto__.push((arguments[i__36492__auto___91450]));

var G__91453 = (i__36492__auto___91450 + (1));
i__36492__auto___91450 = G__91453;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__91437_91465 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__91438_91466 = null;
var count__91439_91467 = (0);
var i__91440_91468 = (0);
while(true){
if((i__91440_91468 < count__91439_91467)){
var vec__91441_91475 = cljs.core._nth.call(null,chunk__91438_91466,i__91440_91468);
var k_91476 = cljs.core.nth.call(null,vec__91441_91475,(0),null);
var v_91477 = cljs.core.nth.call(null,vec__91441_91475,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_91476,[cljs.core.str(v_91477),cljs.core.str("px")].join(''));

var G__91488 = seq__91437_91465;
var G__91490 = chunk__91438_91466;
var G__91492 = count__91439_91467;
var G__91494 = (i__91440_91468 + (1));
seq__91437_91465 = G__91488;
chunk__91438_91466 = G__91490;
count__91439_91467 = G__91492;
i__91440_91468 = G__91494;
continue;
} else {
var temp__4657__auto___91496 = cljs.core.seq.call(null,seq__91437_91465);
if(temp__4657__auto___91496){
var seq__91437_91497__$1 = temp__4657__auto___91496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91437_91497__$1)){
var c__36233__auto___91498 = cljs.core.chunk_first.call(null,seq__91437_91497__$1);
var G__91500 = cljs.core.chunk_rest.call(null,seq__91437_91497__$1);
var G__91501 = c__36233__auto___91498;
var G__91502 = cljs.core.count.call(null,c__36233__auto___91498);
var G__91503 = (0);
seq__91437_91465 = G__91500;
chunk__91438_91466 = G__91501;
count__91439_91467 = G__91502;
i__91440_91468 = G__91503;
continue;
} else {
var vec__91442_91506 = cljs.core.first.call(null,seq__91437_91497__$1);
var k_91507 = cljs.core.nth.call(null,vec__91442_91506,(0),null);
var v_91508 = cljs.core.nth.call(null,vec__91442_91506,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_91507,[cljs.core.str(v_91508),cljs.core.str("px")].join(''));

var G__91510 = cljs.core.next.call(null,seq__91437_91497__$1);
var G__91511 = null;
var G__91512 = (0);
var G__91513 = (0);
seq__91437_91465 = G__91510;
chunk__91438_91466 = G__91511;
count__91439_91467 = G__91512;
i__91440_91468 = G__91513;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq91425){
var G__91426 = cljs.core.first.call(null,seq91425);
var seq91425__$1 = cljs.core.next.call(null,seq91425);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__91426,seq91425__$1);
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args91514 = [];
var len__36491__auto___91530 = arguments.length;
var i__36492__auto___91531 = (0);
while(true){
if((i__36492__auto___91531 < len__36491__auto___91530)){
args91514.push((arguments[i__36492__auto___91531]));

var G__91533 = (i__36492__auto___91531 + (1));
i__36492__auto___91531 = G__91533;
continue;
} else {
}
break;
}

var G__91520 = args91514.length;
switch (G__91520) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__36510__auto__ = (new cljs.core.IndexedSeq(args91514.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36510__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__91521 = elem;
(G__91521[k__$1] = v);

return G__91521;
} else {
var G__91522 = elem;
G__91522.setAttribute(k__$1,v);

return G__91522;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__91523_91549 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__91524_91550 = null;
var count__91525_91551 = (0);
var i__91526_91552 = (0);
while(true){
if((i__91526_91552 < count__91525_91551)){
var vec__91527_91556 = cljs.core._nth.call(null,chunk__91524_91550,i__91526_91552);
var k_91557__$1 = cljs.core.nth.call(null,vec__91527_91556,(0),null);
var v_91558__$1 = cljs.core.nth.call(null,vec__91527_91556,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_91557__$1,v_91558__$1);

var G__91564 = seq__91523_91549;
var G__91565 = chunk__91524_91550;
var G__91566 = count__91525_91551;
var G__91567 = (i__91526_91552 + (1));
seq__91523_91549 = G__91564;
chunk__91524_91550 = G__91565;
count__91525_91551 = G__91566;
i__91526_91552 = G__91567;
continue;
} else {
var temp__4657__auto___91568 = cljs.core.seq.call(null,seq__91523_91549);
if(temp__4657__auto___91568){
var seq__91523_91571__$1 = temp__4657__auto___91568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91523_91571__$1)){
var c__36233__auto___91572 = cljs.core.chunk_first.call(null,seq__91523_91571__$1);
var G__91573 = cljs.core.chunk_rest.call(null,seq__91523_91571__$1);
var G__91574 = c__36233__auto___91572;
var G__91575 = cljs.core.count.call(null,c__36233__auto___91572);
var G__91576 = (0);
seq__91523_91549 = G__91573;
chunk__91524_91550 = G__91574;
count__91525_91551 = G__91575;
i__91526_91552 = G__91576;
continue;
} else {
var vec__91528_91577 = cljs.core.first.call(null,seq__91523_91571__$1);
var k_91578__$1 = cljs.core.nth.call(null,vec__91528_91577,(0),null);
var v_91579__$1 = cljs.core.nth.call(null,vec__91528_91577,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_91578__$1,v_91579__$1);

var G__91580 = cljs.core.next.call(null,seq__91523_91571__$1);
var G__91581 = null;
var G__91582 = (0);
var G__91583 = (0);
seq__91523_91549 = G__91580;
chunk__91524_91550 = G__91581;
count__91525_91551 = G__91582;
i__91526_91552 = G__91583;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq91515){
var G__91516 = cljs.core.first.call(null,seq91515);
var seq91515__$1 = cljs.core.next.call(null,seq91515);
var G__91517 = cljs.core.first.call(null,seq91515__$1);
var seq91515__$2 = cljs.core.next.call(null,seq91515__$1);
var G__91518 = cljs.core.first.call(null,seq91515__$2);
var seq91515__$3 = cljs.core.next.call(null,seq91515__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__91516,G__91517,G__91518,seq91515__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args91584 = [];
var len__36491__auto___91599 = arguments.length;
var i__36492__auto___91600 = (0);
while(true){
if((i__36492__auto___91600 < len__36491__auto___91599)){
args91584.push((arguments[i__36492__auto___91600]));

var G__91601 = (i__36492__auto___91600 + (1));
i__36492__auto___91600 = G__91601;
continue;
} else {
}
break;
}

var G__91589 = args91584.length;
switch (G__91589) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36510__auto__ = (new cljs.core.IndexedSeq(args91584.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36510__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_91612__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_91612__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_91612__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__91595_91613 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__91596_91614 = null;
var count__91597_91615 = (0);
var i__91598_91616 = (0);
while(true){
if((i__91598_91616 < count__91597_91615)){
var k_91621__$1 = cljs.core._nth.call(null,chunk__91596_91614,i__91598_91616);
dommy.core.remove_attr_BANG_.call(null,elem,k_91621__$1);

var G__91623 = seq__91595_91613;
var G__91624 = chunk__91596_91614;
var G__91625 = count__91597_91615;
var G__91626 = (i__91598_91616 + (1));
seq__91595_91613 = G__91623;
chunk__91596_91614 = G__91624;
count__91597_91615 = G__91625;
i__91598_91616 = G__91626;
continue;
} else {
var temp__4657__auto___91631 = cljs.core.seq.call(null,seq__91595_91613);
if(temp__4657__auto___91631){
var seq__91595_91632__$1 = temp__4657__auto___91631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91595_91632__$1)){
var c__36233__auto___91635 = cljs.core.chunk_first.call(null,seq__91595_91632__$1);
var G__91636 = cljs.core.chunk_rest.call(null,seq__91595_91632__$1);
var G__91637 = c__36233__auto___91635;
var G__91638 = cljs.core.count.call(null,c__36233__auto___91635);
var G__91639 = (0);
seq__91595_91613 = G__91636;
chunk__91596_91614 = G__91637;
count__91597_91615 = G__91638;
i__91598_91616 = G__91639;
continue;
} else {
var k_91647__$1 = cljs.core.first.call(null,seq__91595_91632__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_91647__$1);

var G__91649 = cljs.core.next.call(null,seq__91595_91632__$1);
var G__91650 = null;
var G__91651 = (0);
var G__91652 = (0);
seq__91595_91613 = G__91649;
chunk__91596_91614 = G__91650;
count__91597_91615 = G__91651;
i__91598_91616 = G__91652;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq91585){
var G__91586 = cljs.core.first.call(null,seq91585);
var seq91585__$1 = cljs.core.next.call(null,seq91585);
var G__91587 = cljs.core.first.call(null,seq91585__$1);
var seq91585__$2 = cljs.core.next.call(null,seq91585__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__91586,G__91587,seq91585__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args91662 = [];
var len__36491__auto___91666 = arguments.length;
var i__36492__auto___91668 = (0);
while(true){
if((i__36492__auto___91668 < len__36491__auto___91666)){
args91662.push((arguments[i__36492__auto___91668]));

var G__91669 = (i__36492__auto___91668 + (1));
i__36492__auto___91668 = G__91669;
continue;
} else {
}
break;
}

var G__91664 = args91662.length;
switch (G__91664) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91662.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args91680 = [];
var len__36491__auto___91723 = arguments.length;
var i__36492__auto___91724 = (0);
while(true){
if((i__36492__auto___91724 < len__36491__auto___91723)){
args91680.push((arguments[i__36492__auto___91724]));

var G__91725 = (i__36492__auto___91724 + (1));
i__36492__auto___91724 = G__91725;
continue;
} else {
}
break;
}

var G__91689 = args91680.length;
switch (G__91689) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36510__auto__ = (new cljs.core.IndexedSeq(args91680.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36510__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___91735 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___91735)){
var class_list_91736 = temp__4655__auto___91735;
var seq__91695_91737 = cljs.core.seq.call(null,classes__$1);
var chunk__91696_91738 = null;
var count__91697_91739 = (0);
var i__91698_91740 = (0);
while(true){
if((i__91698_91740 < count__91697_91739)){
var c_91745 = cljs.core._nth.call(null,chunk__91696_91738,i__91698_91740);
class_list_91736.add(c_91745);

var G__91746 = seq__91695_91737;
var G__91747 = chunk__91696_91738;
var G__91748 = count__91697_91739;
var G__91749 = (i__91698_91740 + (1));
seq__91695_91737 = G__91746;
chunk__91696_91738 = G__91747;
count__91697_91739 = G__91748;
i__91698_91740 = G__91749;
continue;
} else {
var temp__4657__auto___91755 = cljs.core.seq.call(null,seq__91695_91737);
if(temp__4657__auto___91755){
var seq__91695_91756__$1 = temp__4657__auto___91755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91695_91756__$1)){
var c__36233__auto___91759 = cljs.core.chunk_first.call(null,seq__91695_91756__$1);
var G__91761 = cljs.core.chunk_rest.call(null,seq__91695_91756__$1);
var G__91762 = c__36233__auto___91759;
var G__91763 = cljs.core.count.call(null,c__36233__auto___91759);
var G__91764 = (0);
seq__91695_91737 = G__91761;
chunk__91696_91738 = G__91762;
count__91697_91739 = G__91763;
i__91698_91740 = G__91764;
continue;
} else {
var c_91773 = cljs.core.first.call(null,seq__91695_91756__$1);
class_list_91736.add(c_91773);

var G__91774 = cljs.core.next.call(null,seq__91695_91756__$1);
var G__91775 = null;
var G__91776 = (0);
var G__91777 = (0);
seq__91695_91737 = G__91774;
chunk__91696_91738 = G__91775;
count__91697_91739 = G__91776;
i__91698_91740 = G__91777;
continue;
}
} else {
}
}
break;
}
} else {
var seq__91701_91779 = cljs.core.seq.call(null,classes__$1);
var chunk__91702_91780 = null;
var count__91703_91781 = (0);
var i__91704_91782 = (0);
while(true){
if((i__91704_91782 < count__91703_91781)){
var c_91787 = cljs.core._nth.call(null,chunk__91702_91780,i__91704_91782);
var class_name_91788 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_91788,c_91787))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_91788 === ""))?c_91787:[cljs.core.str(class_name_91788),cljs.core.str(" "),cljs.core.str(c_91787)].join('')));
}

var G__91793 = seq__91701_91779;
var G__91794 = chunk__91702_91780;
var G__91795 = count__91703_91781;
var G__91796 = (i__91704_91782 + (1));
seq__91701_91779 = G__91793;
chunk__91702_91780 = G__91794;
count__91703_91781 = G__91795;
i__91704_91782 = G__91796;
continue;
} else {
var temp__4657__auto___91797 = cljs.core.seq.call(null,seq__91701_91779);
if(temp__4657__auto___91797){
var seq__91701_91798__$1 = temp__4657__auto___91797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91701_91798__$1)){
var c__36233__auto___91799 = cljs.core.chunk_first.call(null,seq__91701_91798__$1);
var G__91800 = cljs.core.chunk_rest.call(null,seq__91701_91798__$1);
var G__91801 = c__36233__auto___91799;
var G__91802 = cljs.core.count.call(null,c__36233__auto___91799);
var G__91803 = (0);
seq__91701_91779 = G__91800;
chunk__91702_91780 = G__91801;
count__91703_91781 = G__91802;
i__91704_91782 = G__91803;
continue;
} else {
var c_91804 = cljs.core.first.call(null,seq__91701_91798__$1);
var class_name_91805 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_91805,c_91804))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_91805 === ""))?c_91804:[cljs.core.str(class_name_91805),cljs.core.str(" "),cljs.core.str(c_91804)].join('')));
}

var G__91808 = cljs.core.next.call(null,seq__91701_91798__$1);
var G__91809 = null;
var G__91810 = (0);
var G__91811 = (0);
seq__91701_91779 = G__91808;
chunk__91702_91780 = G__91809;
count__91703_91781 = G__91810;
i__91704_91782 = G__91811;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__91717_91812 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__91718_91813 = null;
var count__91719_91814 = (0);
var i__91720_91815 = (0);
while(true){
if((i__91720_91815 < count__91719_91814)){
var c_91819 = cljs.core._nth.call(null,chunk__91718_91813,i__91720_91815);
dommy.core.add_class_BANG_.call(null,elem,c_91819);

var G__91820 = seq__91717_91812;
var G__91821 = chunk__91718_91813;
var G__91822 = count__91719_91814;
var G__91823 = (i__91720_91815 + (1));
seq__91717_91812 = G__91820;
chunk__91718_91813 = G__91821;
count__91719_91814 = G__91822;
i__91720_91815 = G__91823;
continue;
} else {
var temp__4657__auto___91825 = cljs.core.seq.call(null,seq__91717_91812);
if(temp__4657__auto___91825){
var seq__91717_91828__$1 = temp__4657__auto___91825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91717_91828__$1)){
var c__36233__auto___91829 = cljs.core.chunk_first.call(null,seq__91717_91828__$1);
var G__91831 = cljs.core.chunk_rest.call(null,seq__91717_91828__$1);
var G__91832 = c__36233__auto___91829;
var G__91833 = cljs.core.count.call(null,c__36233__auto___91829);
var G__91834 = (0);
seq__91717_91812 = G__91831;
chunk__91718_91813 = G__91832;
count__91719_91814 = G__91833;
i__91720_91815 = G__91834;
continue;
} else {
var c_91837 = cljs.core.first.call(null,seq__91717_91828__$1);
dommy.core.add_class_BANG_.call(null,elem,c_91837);

var G__91843 = cljs.core.next.call(null,seq__91717_91828__$1);
var G__91844 = null;
var G__91845 = (0);
var G__91846 = (0);
seq__91717_91812 = G__91843;
chunk__91718_91813 = G__91844;
count__91719_91814 = G__91845;
i__91720_91815 = G__91846;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq91681){
var G__91682 = cljs.core.first.call(null,seq91681);
var seq91681__$1 = cljs.core.next.call(null,seq91681);
var G__91683 = cljs.core.first.call(null,seq91681__$1);
var seq91681__$2 = cljs.core.next.call(null,seq91681__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__91682,G__91683,seq91681__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args91852 = [];
var len__36491__auto___91868 = arguments.length;
var i__36492__auto___91869 = (0);
while(true){
if((i__36492__auto___91869 < len__36491__auto___91868)){
args91852.push((arguments[i__36492__auto___91869]));

var G__91870 = (i__36492__auto___91869 + (1));
i__36492__auto___91869 = G__91870;
continue;
} else {
}
break;
}

var G__91858 = args91852.length;
switch (G__91858) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36510__auto__ = (new cljs.core.IndexedSeq(args91852.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36510__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___91878 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___91878)){
var class_list_91879 = temp__4655__auto___91878;
class_list_91879.remove(c__$1);
} else {
var class_name_91882 = dommy.core.class$.call(null,elem);
var new_class_name_91883 = dommy.utils.remove_class_str.call(null,class_name_91882,c__$1);
if((class_name_91882 === new_class_name_91883)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_91883);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__91859 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__91860 = null;
var count__91861 = (0);
var i__91862 = (0);
while(true){
if((i__91862 < count__91861)){
var c = cljs.core._nth.call(null,chunk__91860,i__91862);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__91886 = seq__91859;
var G__91887 = chunk__91860;
var G__91888 = count__91861;
var G__91889 = (i__91862 + (1));
seq__91859 = G__91886;
chunk__91860 = G__91887;
count__91861 = G__91888;
i__91862 = G__91889;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__91859);
if(temp__4657__auto__){
var seq__91859__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91859__$1)){
var c__36233__auto__ = cljs.core.chunk_first.call(null,seq__91859__$1);
var G__91890 = cljs.core.chunk_rest.call(null,seq__91859__$1);
var G__91891 = c__36233__auto__;
var G__91892 = cljs.core.count.call(null,c__36233__auto__);
var G__91893 = (0);
seq__91859 = G__91890;
chunk__91860 = G__91891;
count__91861 = G__91892;
i__91862 = G__91893;
continue;
} else {
var c = cljs.core.first.call(null,seq__91859__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__91898 = cljs.core.next.call(null,seq__91859__$1);
var G__91899 = null;
var G__91900 = (0);
var G__91901 = (0);
seq__91859 = G__91898;
chunk__91860 = G__91899;
count__91861 = G__91900;
i__91862 = G__91901;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq91853){
var G__91854 = cljs.core.first.call(null,seq91853);
var seq91853__$1 = cljs.core.next.call(null,seq91853);
var G__91855 = cljs.core.first.call(null,seq91853__$1);
var seq91853__$2 = cljs.core.next.call(null,seq91853__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__91854,G__91855,seq91853__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args91906 = [];
var len__36491__auto___91925 = arguments.length;
var i__36492__auto___91926 = (0);
while(true){
if((i__36492__auto___91926 < len__36491__auto___91925)){
args91906.push((arguments[i__36492__auto___91926]));

var G__91927 = (i__36492__auto___91926 + (1));
i__36492__auto___91926 = G__91927;
continue;
} else {
}
break;
}

var G__91917 = args91906.length;
switch (G__91917) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91906.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___91931 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___91931)){
var class_list_91932 = temp__4655__auto___91931;
class_list_91932.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args91940 = [];
var len__36491__auto___91950 = arguments.length;
var i__36492__auto___91951 = (0);
while(true){
if((i__36492__auto___91951 < len__36491__auto___91950)){
args91940.push((arguments[i__36492__auto___91951]));

var G__91954 = (i__36492__auto___91951 + (1));
i__36492__auto___91951 = G__91954;
continue;
} else {
}
break;
}

var G__91943 = args91940.length;
switch (G__91943) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91940.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args91977 = [];
var len__36491__auto___91986 = arguments.length;
var i__36492__auto___91987 = (0);
while(true){
if((i__36492__auto___91987 < len__36491__auto___91986)){
args91977.push((arguments[i__36492__auto___91987]));

var G__91989 = (i__36492__auto___91987 + (1));
i__36492__auto___91987 = G__91989;
continue;
} else {
}
break;
}

var G__91983 = args91977.length;
switch (G__91983) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91977.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args91991 = [];
var len__36491__auto___92014 = arguments.length;
var i__36492__auto___92015 = (0);
while(true){
if((i__36492__auto___92015 < len__36491__auto___92014)){
args91991.push((arguments[i__36492__auto___92015]));

var G__92021 = (i__36492__auto___92015 + (1));
i__36492__auto___92015 = G__92021;
continue;
} else {
}
break;
}

var G__92005 = args91991.length;
switch (G__92005) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36510__auto__ = (new cljs.core.IndexedSeq(args91991.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36510__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__92006 = parent;
G__92006.appendChild(child);

return G__92006;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__92007_92034 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__92008_92035 = null;
var count__92009_92036 = (0);
var i__92010_92037 = (0);
while(true){
if((i__92010_92037 < count__92009_92036)){
var c_92038 = cljs.core._nth.call(null,chunk__92008_92035,i__92010_92037);
dommy.core.append_BANG_.call(null,parent,c_92038);

var G__92040 = seq__92007_92034;
var G__92041 = chunk__92008_92035;
var G__92042 = count__92009_92036;
var G__92043 = (i__92010_92037 + (1));
seq__92007_92034 = G__92040;
chunk__92008_92035 = G__92041;
count__92009_92036 = G__92042;
i__92010_92037 = G__92043;
continue;
} else {
var temp__4657__auto___92045 = cljs.core.seq.call(null,seq__92007_92034);
if(temp__4657__auto___92045){
var seq__92007_92046__$1 = temp__4657__auto___92045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92007_92046__$1)){
var c__36233__auto___92047 = cljs.core.chunk_first.call(null,seq__92007_92046__$1);
var G__92048 = cljs.core.chunk_rest.call(null,seq__92007_92046__$1);
var G__92049 = c__36233__auto___92047;
var G__92050 = cljs.core.count.call(null,c__36233__auto___92047);
var G__92051 = (0);
seq__92007_92034 = G__92048;
chunk__92008_92035 = G__92049;
count__92009_92036 = G__92050;
i__92010_92037 = G__92051;
continue;
} else {
var c_92053 = cljs.core.first.call(null,seq__92007_92046__$1);
dommy.core.append_BANG_.call(null,parent,c_92053);

var G__92055 = cljs.core.next.call(null,seq__92007_92046__$1);
var G__92056 = null;
var G__92057 = (0);
var G__92058 = (0);
seq__92007_92034 = G__92055;
chunk__92008_92035 = G__92056;
count__92009_92036 = G__92057;
i__92010_92037 = G__92058;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq91992){
var G__91993 = cljs.core.first.call(null,seq91992);
var seq91992__$1 = cljs.core.next.call(null,seq91992);
var G__91994 = cljs.core.first.call(null,seq91992__$1);
var seq91992__$2 = cljs.core.next.call(null,seq91992__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__91993,G__91994,seq91992__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args92060 = [];
var len__36491__auto___92080 = arguments.length;
var i__36492__auto___92081 = (0);
while(true){
if((i__36492__auto___92081 < len__36491__auto___92080)){
args92060.push((arguments[i__36492__auto___92081]));

var G__92091 = (i__36492__auto___92081 + (1));
i__36492__auto___92081 = G__92091;
continue;
} else {
}
break;
}

var G__92069 = args92060.length;
switch (G__92069) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36510__auto__ = (new cljs.core.IndexedSeq(args92060.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36510__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__92070 = parent;
G__92070.insertBefore(child,parent.firstChild);

return G__92070;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__92071_92097 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__92072_92098 = null;
var count__92073_92099 = (0);
var i__92074_92100 = (0);
while(true){
if((i__92074_92100 < count__92073_92099)){
var c_92101 = cljs.core._nth.call(null,chunk__92072_92098,i__92074_92100);
dommy.core.prepend_BANG_.call(null,parent,c_92101);

var G__92111 = seq__92071_92097;
var G__92112 = chunk__92072_92098;
var G__92113 = count__92073_92099;
var G__92114 = (i__92074_92100 + (1));
seq__92071_92097 = G__92111;
chunk__92072_92098 = G__92112;
count__92073_92099 = G__92113;
i__92074_92100 = G__92114;
continue;
} else {
var temp__4657__auto___92115 = cljs.core.seq.call(null,seq__92071_92097);
if(temp__4657__auto___92115){
var seq__92071_92116__$1 = temp__4657__auto___92115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92071_92116__$1)){
var c__36233__auto___92117 = cljs.core.chunk_first.call(null,seq__92071_92116__$1);
var G__92118 = cljs.core.chunk_rest.call(null,seq__92071_92116__$1);
var G__92119 = c__36233__auto___92117;
var G__92120 = cljs.core.count.call(null,c__36233__auto___92117);
var G__92121 = (0);
seq__92071_92097 = G__92118;
chunk__92072_92098 = G__92119;
count__92073_92099 = G__92120;
i__92074_92100 = G__92121;
continue;
} else {
var c_92122 = cljs.core.first.call(null,seq__92071_92116__$1);
dommy.core.prepend_BANG_.call(null,parent,c_92122);

var G__92123 = cljs.core.next.call(null,seq__92071_92116__$1);
var G__92124 = null;
var G__92125 = (0);
var G__92126 = (0);
seq__92071_92097 = G__92123;
chunk__92072_92098 = G__92124;
count__92073_92099 = G__92125;
i__92074_92100 = G__92126;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq92061){
var G__92063 = cljs.core.first.call(null,seq92061);
var seq92061__$1 = cljs.core.next.call(null,seq92061);
var G__92064 = cljs.core.first.call(null,seq92061__$1);
var seq92061__$2 = cljs.core.next.call(null,seq92061__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__92063,G__92064,seq92061__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___92129 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___92129)){
var next_92130 = temp__4655__auto___92129;
dommy.core.insert_before_BANG_.call(null,elem,next_92130);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args92138 = [];
var len__36491__auto___92147 = arguments.length;
var i__36492__auto___92148 = (0);
while(true){
if((i__36492__auto___92148 < len__36491__auto___92147)){
args92138.push((arguments[i__36492__auto___92148]));

var G__92150 = (i__36492__auto___92148 + (1));
i__36492__auto___92148 = G__92150;
continue;
} else {
}
break;
}

var G__92140 = args92138.length;
switch (G__92140) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92138.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__92141 = p;
G__92141.removeChild(elem);

return G__92141;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__92165){
var vec__92166 = p__92165;
var special_mouse_event = cljs.core.nth.call(null,vec__92166,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__92166,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__92166,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__92166,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__35422__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__35410__auto__ = related_target;
if(cljs.core.truth_(and__35410__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__35410__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__92166,special_mouse_event,real_mouse_event))
});})(vec__92166,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__35410__auto__ = selected_target;
if(cljs.core.truth_(and__35410__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__35410__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__35422__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__36498__auto__ = [];
var len__36491__auto___92217 = arguments.length;
var i__36492__auto___92218 = (0);
while(true){
if((i__36492__auto___92218 < len__36491__auto___92217)){
args__36498__auto__.push((arguments[i__36492__auto___92218]));

var G__92219 = (i__36492__auto___92218 + (1));
i__36492__auto___92218 = G__92219;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((2) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36499__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq92212){
var G__92213 = cljs.core.first.call(null,seq92212);
var seq92212__$1 = cljs.core.next.call(null,seq92212);
var G__92214 = cljs.core.first.call(null,seq92212__$1);
var seq92212__$2 = cljs.core.next.call(null,seq92212__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__92213,G__92214,seq92212__$2);
});
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__36498__auto__ = [];
var len__36491__auto___92245 = arguments.length;
var i__36492__auto___92246 = (0);
while(true){
if((i__36492__auto___92246 < len__36491__auto___92245)){
args__36498__auto__.push((arguments[i__36492__auto___92246]));

var G__92247 = (i__36492__auto___92246 + (1));
i__36492__auto___92246 = G__92247;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__92222_92250 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_92251 = cljs.core.nth.call(null,vec__92222_92250,(0),null);
var selector_92252 = cljs.core.nth.call(null,vec__92222_92250,(1),null);
var seq__92223_92257 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__92230_92258 = null;
var count__92231_92259 = (0);
var i__92232_92260 = (0);
while(true){
if((i__92232_92260 < count__92231_92259)){
var vec__92239_92261 = cljs.core._nth.call(null,chunk__92230_92258,i__92232_92260);
var orig_type_92262 = cljs.core.nth.call(null,vec__92239_92261,(0),null);
var f_92263 = cljs.core.nth.call(null,vec__92239_92261,(1),null);
var seq__92233_92265 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_92262,cljs.core.PersistentArrayMap.fromArray([orig_type_92262,cljs.core.identity], true, false)));
var chunk__92235_92266 = null;
var count__92236_92267 = (0);
var i__92237_92268 = (0);
while(true){
if((i__92237_92268 < count__92236_92267)){
var vec__92240_92274 = cljs.core._nth.call(null,chunk__92235_92266,i__92237_92268);
var actual_type_92275 = cljs.core.nth.call(null,vec__92240_92274,(0),null);
var factory_92276 = cljs.core.nth.call(null,vec__92240_92274,(1),null);
var canonical_f_92278 = (cljs.core.truth_(selector_92252)?cljs.core.partial.call(null,dommy.core.live_listener,elem_92251,selector_92252):cljs.core.identity).call(null,factory_92276.call(null,f_92263));
dommy.core.update_event_listeners_BANG_.call(null,elem_92251,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92252,actual_type_92275,f_92263], null),canonical_f_92278);

if(cljs.core.truth_(elem_92251.addEventListener)){
elem_92251.addEventListener(cljs.core.name.call(null,actual_type_92275),canonical_f_92278);
} else {
elem_92251.attachEvent(cljs.core.name.call(null,actual_type_92275),canonical_f_92278);
}

var G__92282 = seq__92233_92265;
var G__92283 = chunk__92235_92266;
var G__92284 = count__92236_92267;
var G__92285 = (i__92237_92268 + (1));
seq__92233_92265 = G__92282;
chunk__92235_92266 = G__92283;
count__92236_92267 = G__92284;
i__92237_92268 = G__92285;
continue;
} else {
var temp__4657__auto___92286 = cljs.core.seq.call(null,seq__92233_92265);
if(temp__4657__auto___92286){
var seq__92233_92287__$1 = temp__4657__auto___92286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92233_92287__$1)){
var c__36233__auto___92288 = cljs.core.chunk_first.call(null,seq__92233_92287__$1);
var G__92290 = cljs.core.chunk_rest.call(null,seq__92233_92287__$1);
var G__92291 = c__36233__auto___92288;
var G__92292 = cljs.core.count.call(null,c__36233__auto___92288);
var G__92293 = (0);
seq__92233_92265 = G__92290;
chunk__92235_92266 = G__92291;
count__92236_92267 = G__92292;
i__92237_92268 = G__92293;
continue;
} else {
var vec__92241_92294 = cljs.core.first.call(null,seq__92233_92287__$1);
var actual_type_92295 = cljs.core.nth.call(null,vec__92241_92294,(0),null);
var factory_92296 = cljs.core.nth.call(null,vec__92241_92294,(1),null);
var canonical_f_92298 = (cljs.core.truth_(selector_92252)?cljs.core.partial.call(null,dommy.core.live_listener,elem_92251,selector_92252):cljs.core.identity).call(null,factory_92296.call(null,f_92263));
dommy.core.update_event_listeners_BANG_.call(null,elem_92251,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92252,actual_type_92295,f_92263], null),canonical_f_92298);

if(cljs.core.truth_(elem_92251.addEventListener)){
elem_92251.addEventListener(cljs.core.name.call(null,actual_type_92295),canonical_f_92298);
} else {
elem_92251.attachEvent(cljs.core.name.call(null,actual_type_92295),canonical_f_92298);
}

var G__92302 = cljs.core.next.call(null,seq__92233_92287__$1);
var G__92303 = null;
var G__92304 = (0);
var G__92305 = (0);
seq__92233_92265 = G__92302;
chunk__92235_92266 = G__92303;
count__92236_92267 = G__92304;
i__92237_92268 = G__92305;
continue;
}
} else {
}
}
break;
}

var G__92306 = seq__92223_92257;
var G__92307 = chunk__92230_92258;
var G__92308 = count__92231_92259;
var G__92309 = (i__92232_92260 + (1));
seq__92223_92257 = G__92306;
chunk__92230_92258 = G__92307;
count__92231_92259 = G__92308;
i__92232_92260 = G__92309;
continue;
} else {
var temp__4657__auto___92311 = cljs.core.seq.call(null,seq__92223_92257);
if(temp__4657__auto___92311){
var seq__92223_92312__$1 = temp__4657__auto___92311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92223_92312__$1)){
var c__36233__auto___92313 = cljs.core.chunk_first.call(null,seq__92223_92312__$1);
var G__92314 = cljs.core.chunk_rest.call(null,seq__92223_92312__$1);
var G__92315 = c__36233__auto___92313;
var G__92316 = cljs.core.count.call(null,c__36233__auto___92313);
var G__92317 = (0);
seq__92223_92257 = G__92314;
chunk__92230_92258 = G__92315;
count__92231_92259 = G__92316;
i__92232_92260 = G__92317;
continue;
} else {
var vec__92242_92320 = cljs.core.first.call(null,seq__92223_92312__$1);
var orig_type_92321 = cljs.core.nth.call(null,vec__92242_92320,(0),null);
var f_92322 = cljs.core.nth.call(null,vec__92242_92320,(1),null);
var seq__92224_92324 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_92321,cljs.core.PersistentArrayMap.fromArray([orig_type_92321,cljs.core.identity], true, false)));
var chunk__92226_92325 = null;
var count__92227_92326 = (0);
var i__92228_92327 = (0);
while(true){
if((i__92228_92327 < count__92227_92326)){
var vec__92243_92329 = cljs.core._nth.call(null,chunk__92226_92325,i__92228_92327);
var actual_type_92330 = cljs.core.nth.call(null,vec__92243_92329,(0),null);
var factory_92331 = cljs.core.nth.call(null,vec__92243_92329,(1),null);
var canonical_f_92332 = (cljs.core.truth_(selector_92252)?cljs.core.partial.call(null,dommy.core.live_listener,elem_92251,selector_92252):cljs.core.identity).call(null,factory_92331.call(null,f_92322));
dommy.core.update_event_listeners_BANG_.call(null,elem_92251,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92252,actual_type_92330,f_92322], null),canonical_f_92332);

if(cljs.core.truth_(elem_92251.addEventListener)){
elem_92251.addEventListener(cljs.core.name.call(null,actual_type_92330),canonical_f_92332);
} else {
elem_92251.attachEvent(cljs.core.name.call(null,actual_type_92330),canonical_f_92332);
}

var G__92337 = seq__92224_92324;
var G__92338 = chunk__92226_92325;
var G__92339 = count__92227_92326;
var G__92340 = (i__92228_92327 + (1));
seq__92224_92324 = G__92337;
chunk__92226_92325 = G__92338;
count__92227_92326 = G__92339;
i__92228_92327 = G__92340;
continue;
} else {
var temp__4657__auto___92345__$1 = cljs.core.seq.call(null,seq__92224_92324);
if(temp__4657__auto___92345__$1){
var seq__92224_92346__$1 = temp__4657__auto___92345__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92224_92346__$1)){
var c__36233__auto___92350 = cljs.core.chunk_first.call(null,seq__92224_92346__$1);
var G__92352 = cljs.core.chunk_rest.call(null,seq__92224_92346__$1);
var G__92353 = c__36233__auto___92350;
var G__92354 = cljs.core.count.call(null,c__36233__auto___92350);
var G__92355 = (0);
seq__92224_92324 = G__92352;
chunk__92226_92325 = G__92353;
count__92227_92326 = G__92354;
i__92228_92327 = G__92355;
continue;
} else {
var vec__92244_92359 = cljs.core.first.call(null,seq__92224_92346__$1);
var actual_type_92360 = cljs.core.nth.call(null,vec__92244_92359,(0),null);
var factory_92361 = cljs.core.nth.call(null,vec__92244_92359,(1),null);
var canonical_f_92362 = (cljs.core.truth_(selector_92252)?cljs.core.partial.call(null,dommy.core.live_listener,elem_92251,selector_92252):cljs.core.identity).call(null,factory_92361.call(null,f_92322));
dommy.core.update_event_listeners_BANG_.call(null,elem_92251,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92252,actual_type_92360,f_92322], null),canonical_f_92362);

if(cljs.core.truth_(elem_92251.addEventListener)){
elem_92251.addEventListener(cljs.core.name.call(null,actual_type_92360),canonical_f_92362);
} else {
elem_92251.attachEvent(cljs.core.name.call(null,actual_type_92360),canonical_f_92362);
}

var G__92363 = cljs.core.next.call(null,seq__92224_92346__$1);
var G__92364 = null;
var G__92365 = (0);
var G__92366 = (0);
seq__92224_92324 = G__92363;
chunk__92226_92325 = G__92364;
count__92227_92326 = G__92365;
i__92228_92327 = G__92366;
continue;
}
} else {
}
}
break;
}

var G__92367 = cljs.core.next.call(null,seq__92223_92312__$1);
var G__92368 = null;
var G__92369 = (0);
var G__92370 = (0);
seq__92223_92257 = G__92367;
chunk__92230_92258 = G__92368;
count__92231_92259 = G__92369;
i__92232_92260 = G__92370;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq92220){
var G__92221 = cljs.core.first.call(null,seq92220);
var seq92220__$1 = cljs.core.next.call(null,seq92220);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__92221,seq92220__$1);
});
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__36498__auto__ = [];
var len__36491__auto___92408 = arguments.length;
var i__36492__auto___92409 = (0);
while(true){
if((i__36492__auto___92409 < len__36491__auto___92408)){
args__36498__auto__.push((arguments[i__36492__auto___92409]));

var G__92412 = (i__36492__auto___92409 + (1));
i__36492__auto___92409 = G__92412;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__92373_92417 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_92418 = cljs.core.nth.call(null,vec__92373_92417,(0),null);
var selector_92419 = cljs.core.nth.call(null,vec__92373_92417,(1),null);
var seq__92374_92420 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__92381_92421 = null;
var count__92382_92422 = (0);
var i__92383_92423 = (0);
while(true){
if((i__92383_92423 < count__92382_92422)){
var vec__92390_92424 = cljs.core._nth.call(null,chunk__92381_92421,i__92383_92423);
var orig_type_92425 = cljs.core.nth.call(null,vec__92390_92424,(0),null);
var f_92426 = cljs.core.nth.call(null,vec__92390_92424,(1),null);
var seq__92384_92427 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_92425,cljs.core.PersistentArrayMap.fromArray([orig_type_92425,cljs.core.identity], true, false)));
var chunk__92386_92428 = null;
var count__92387_92429 = (0);
var i__92388_92430 = (0);
while(true){
if((i__92388_92430 < count__92387_92429)){
var vec__92391_92433 = cljs.core._nth.call(null,chunk__92386_92428,i__92388_92430);
var actual_type_92434 = cljs.core.nth.call(null,vec__92391_92433,(0),null);
var __92435 = cljs.core.nth.call(null,vec__92391_92433,(1),null);
var keys_92437 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92419,actual_type_92434,f_92426], null);
var canonical_f_92438 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_92418),keys_92437);
dommy.core.update_event_listeners_BANG_.call(null,elem_92418,dommy.utils.dissoc_in,keys_92437);

if(cljs.core.truth_(elem_92418.removeEventListener)){
elem_92418.removeEventListener(cljs.core.name.call(null,actual_type_92434),canonical_f_92438);
} else {
elem_92418.detachEvent(cljs.core.name.call(null,actual_type_92434),canonical_f_92438);
}

var G__92444 = seq__92384_92427;
var G__92445 = chunk__92386_92428;
var G__92446 = count__92387_92429;
var G__92447 = (i__92388_92430 + (1));
seq__92384_92427 = G__92444;
chunk__92386_92428 = G__92445;
count__92387_92429 = G__92446;
i__92388_92430 = G__92447;
continue;
} else {
var temp__4657__auto___92450 = cljs.core.seq.call(null,seq__92384_92427);
if(temp__4657__auto___92450){
var seq__92384_92453__$1 = temp__4657__auto___92450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92384_92453__$1)){
var c__36233__auto___92454 = cljs.core.chunk_first.call(null,seq__92384_92453__$1);
var G__92455 = cljs.core.chunk_rest.call(null,seq__92384_92453__$1);
var G__92456 = c__36233__auto___92454;
var G__92457 = cljs.core.count.call(null,c__36233__auto___92454);
var G__92458 = (0);
seq__92384_92427 = G__92455;
chunk__92386_92428 = G__92456;
count__92387_92429 = G__92457;
i__92388_92430 = G__92458;
continue;
} else {
var vec__92396_92462 = cljs.core.first.call(null,seq__92384_92453__$1);
var actual_type_92463 = cljs.core.nth.call(null,vec__92396_92462,(0),null);
var __92464 = cljs.core.nth.call(null,vec__92396_92462,(1),null);
var keys_92467 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92419,actual_type_92463,f_92426], null);
var canonical_f_92468 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_92418),keys_92467);
dommy.core.update_event_listeners_BANG_.call(null,elem_92418,dommy.utils.dissoc_in,keys_92467);

if(cljs.core.truth_(elem_92418.removeEventListener)){
elem_92418.removeEventListener(cljs.core.name.call(null,actual_type_92463),canonical_f_92468);
} else {
elem_92418.detachEvent(cljs.core.name.call(null,actual_type_92463),canonical_f_92468);
}

var G__92471 = cljs.core.next.call(null,seq__92384_92453__$1);
var G__92472 = null;
var G__92473 = (0);
var G__92474 = (0);
seq__92384_92427 = G__92471;
chunk__92386_92428 = G__92472;
count__92387_92429 = G__92473;
i__92388_92430 = G__92474;
continue;
}
} else {
}
}
break;
}

var G__92475 = seq__92374_92420;
var G__92476 = chunk__92381_92421;
var G__92477 = count__92382_92422;
var G__92478 = (i__92383_92423 + (1));
seq__92374_92420 = G__92475;
chunk__92381_92421 = G__92476;
count__92382_92422 = G__92477;
i__92383_92423 = G__92478;
continue;
} else {
var temp__4657__auto___92483 = cljs.core.seq.call(null,seq__92374_92420);
if(temp__4657__auto___92483){
var seq__92374_92484__$1 = temp__4657__auto___92483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92374_92484__$1)){
var c__36233__auto___92485 = cljs.core.chunk_first.call(null,seq__92374_92484__$1);
var G__92490 = cljs.core.chunk_rest.call(null,seq__92374_92484__$1);
var G__92491 = c__36233__auto___92485;
var G__92492 = cljs.core.count.call(null,c__36233__auto___92485);
var G__92493 = (0);
seq__92374_92420 = G__92490;
chunk__92381_92421 = G__92491;
count__92382_92422 = G__92492;
i__92383_92423 = G__92493;
continue;
} else {
var vec__92397_92498 = cljs.core.first.call(null,seq__92374_92484__$1);
var orig_type_92499 = cljs.core.nth.call(null,vec__92397_92498,(0),null);
var f_92500 = cljs.core.nth.call(null,vec__92397_92498,(1),null);
var seq__92375_92501 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_92499,cljs.core.PersistentArrayMap.fromArray([orig_type_92499,cljs.core.identity], true, false)));
var chunk__92377_92502 = null;
var count__92378_92503 = (0);
var i__92379_92504 = (0);
while(true){
if((i__92379_92504 < count__92378_92503)){
var vec__92399_92507 = cljs.core._nth.call(null,chunk__92377_92502,i__92379_92504);
var actual_type_92508 = cljs.core.nth.call(null,vec__92399_92507,(0),null);
var __92509 = cljs.core.nth.call(null,vec__92399_92507,(1),null);
var keys_92511 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92419,actual_type_92508,f_92500], null);
var canonical_f_92512 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_92418),keys_92511);
dommy.core.update_event_listeners_BANG_.call(null,elem_92418,dommy.utils.dissoc_in,keys_92511);

if(cljs.core.truth_(elem_92418.removeEventListener)){
elem_92418.removeEventListener(cljs.core.name.call(null,actual_type_92508),canonical_f_92512);
} else {
elem_92418.detachEvent(cljs.core.name.call(null,actual_type_92508),canonical_f_92512);
}

var G__92513 = seq__92375_92501;
var G__92514 = chunk__92377_92502;
var G__92515 = count__92378_92503;
var G__92516 = (i__92379_92504 + (1));
seq__92375_92501 = G__92513;
chunk__92377_92502 = G__92514;
count__92378_92503 = G__92515;
i__92379_92504 = G__92516;
continue;
} else {
var temp__4657__auto___92517__$1 = cljs.core.seq.call(null,seq__92375_92501);
if(temp__4657__auto___92517__$1){
var seq__92375_92518__$1 = temp__4657__auto___92517__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92375_92518__$1)){
var c__36233__auto___92519 = cljs.core.chunk_first.call(null,seq__92375_92518__$1);
var G__92521 = cljs.core.chunk_rest.call(null,seq__92375_92518__$1);
var G__92522 = c__36233__auto___92519;
var G__92523 = cljs.core.count.call(null,c__36233__auto___92519);
var G__92524 = (0);
seq__92375_92501 = G__92521;
chunk__92377_92502 = G__92522;
count__92378_92503 = G__92523;
i__92379_92504 = G__92524;
continue;
} else {
var vec__92401_92525 = cljs.core.first.call(null,seq__92375_92518__$1);
var actual_type_92526 = cljs.core.nth.call(null,vec__92401_92525,(0),null);
var __92527 = cljs.core.nth.call(null,vec__92401_92525,(1),null);
var keys_92528 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92419,actual_type_92526,f_92500], null);
var canonical_f_92529 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_92418),keys_92528);
dommy.core.update_event_listeners_BANG_.call(null,elem_92418,dommy.utils.dissoc_in,keys_92528);

if(cljs.core.truth_(elem_92418.removeEventListener)){
elem_92418.removeEventListener(cljs.core.name.call(null,actual_type_92526),canonical_f_92529);
} else {
elem_92418.detachEvent(cljs.core.name.call(null,actual_type_92526),canonical_f_92529);
}

var G__92531 = cljs.core.next.call(null,seq__92375_92518__$1);
var G__92532 = null;
var G__92533 = (0);
var G__92534 = (0);
seq__92375_92501 = G__92531;
chunk__92377_92502 = G__92532;
count__92378_92503 = G__92533;
i__92379_92504 = G__92534;
continue;
}
} else {
}
}
break;
}

var G__92535 = cljs.core.next.call(null,seq__92374_92484__$1);
var G__92536 = null;
var G__92537 = (0);
var G__92538 = (0);
seq__92374_92420 = G__92535;
chunk__92381_92421 = G__92536;
count__92382_92422 = G__92537;
i__92383_92423 = G__92538;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq92371){
var G__92372 = cljs.core.first.call(null,seq92371);
var seq92371__$1 = cljs.core.next.call(null,seq92371);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__92372,seq92371__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__36498__auto__ = [];
var len__36491__auto___92558 = arguments.length;
var i__36492__auto___92559 = (0);
while(true){
if((i__36492__auto___92559 < len__36491__auto___92558)){
args__36498__auto__.push((arguments[i__36492__auto___92559]));

var G__92561 = (i__36492__auto___92559 + (1));
i__36492__auto___92559 = G__92561;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__92551_92564 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_92565 = cljs.core.nth.call(null,vec__92551_92564,(0),null);
var selector_92566 = cljs.core.nth.call(null,vec__92551_92564,(1),null);
var seq__92552_92571 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__92553_92572 = null;
var count__92554_92573 = (0);
var i__92555_92574 = (0);
while(true){
if((i__92555_92574 < count__92554_92573)){
var vec__92556_92576 = cljs.core._nth.call(null,chunk__92553_92572,i__92555_92574);
var type_92577 = cljs.core.nth.call(null,vec__92556_92576,(0),null);
var f_92578 = cljs.core.nth.call(null,vec__92556_92576,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_92577,((function (seq__92552_92571,chunk__92553_92572,count__92554_92573,i__92555_92574,vec__92556_92576,type_92577,f_92578,vec__92551_92564,elem_92565,selector_92566){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_92577,dommy$core$this_fn);

return f_92578.call(null,e);
});})(seq__92552_92571,chunk__92553_92572,count__92554_92573,i__92555_92574,vec__92556_92576,type_92577,f_92578,vec__92551_92564,elem_92565,selector_92566))
);

var G__92589 = seq__92552_92571;
var G__92590 = chunk__92553_92572;
var G__92591 = count__92554_92573;
var G__92592 = (i__92555_92574 + (1));
seq__92552_92571 = G__92589;
chunk__92553_92572 = G__92590;
count__92554_92573 = G__92591;
i__92555_92574 = G__92592;
continue;
} else {
var temp__4657__auto___92594 = cljs.core.seq.call(null,seq__92552_92571);
if(temp__4657__auto___92594){
var seq__92552_92597__$1 = temp__4657__auto___92594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92552_92597__$1)){
var c__36233__auto___92598 = cljs.core.chunk_first.call(null,seq__92552_92597__$1);
var G__92599 = cljs.core.chunk_rest.call(null,seq__92552_92597__$1);
var G__92600 = c__36233__auto___92598;
var G__92601 = cljs.core.count.call(null,c__36233__auto___92598);
var G__92602 = (0);
seq__92552_92571 = G__92599;
chunk__92553_92572 = G__92600;
count__92554_92573 = G__92601;
i__92555_92574 = G__92602;
continue;
} else {
var vec__92557_92603 = cljs.core.first.call(null,seq__92552_92597__$1);
var type_92604 = cljs.core.nth.call(null,vec__92557_92603,(0),null);
var f_92605 = cljs.core.nth.call(null,vec__92557_92603,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_92604,((function (seq__92552_92571,chunk__92553_92572,count__92554_92573,i__92555_92574,vec__92557_92603,type_92604,f_92605,seq__92552_92597__$1,temp__4657__auto___92594,vec__92551_92564,elem_92565,selector_92566){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_92604,dommy$core$this_fn);

return f_92605.call(null,e);
});})(seq__92552_92571,chunk__92553_92572,count__92554_92573,i__92555_92574,vec__92557_92603,type_92604,f_92605,seq__92552_92597__$1,temp__4657__auto___92594,vec__92551_92564,elem_92565,selector_92566))
);

var G__92610 = cljs.core.next.call(null,seq__92552_92597__$1);
var G__92611 = null;
var G__92612 = (0);
var G__92613 = (0);
seq__92552_92571 = G__92610;
chunk__92553_92572 = G__92611;
count__92554_92573 = G__92612;
i__92555_92574 = G__92613;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq92547){
var G__92548 = cljs.core.first.call(null,seq92547);
var seq92547__$1 = cljs.core.next.call(null,seq92547);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__92548,seq92547__$1);
});
