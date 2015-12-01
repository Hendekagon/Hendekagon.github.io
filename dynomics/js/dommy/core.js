// Compiled by ClojureScript 1.7.170 {}
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
var or__24221__auto__ = elem.textContent;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
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
var args206403 = [];
var len__25279__auto___206406 = arguments.length;
var i__25280__auto___206407 = (0);
while(true){
if((i__25280__auto___206407 < len__25279__auto___206406)){
args206403.push((arguments[i__25280__auto___206407]));

var G__206408 = (i__25280__auto___206407 + (1));
i__25280__auto___206407 = G__206408;
continue;
} else {
}
break;
}

var G__206405 = args206403.length;
switch (G__206405) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args206403.length)].join('')));

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
var temp__4423__auto__ = elem.classList;
if(cljs.core.truth_(temp__4423__auto__)){
var class_list = temp__4423__auto__;
return class_list.contains(c__$1);
} else {
var temp__4425__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4425__auto__)){
var class_name = temp__4425__auto__;
var temp__4425__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4425__auto____$1)){
var i = temp__4425__auto____$1;
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
var args206410 = [];
var len__25279__auto___206413 = arguments.length;
var i__25280__auto___206414 = (0);
while(true){
if((i__25280__auto___206414 < len__25279__auto___206413)){
args206410.push((arguments[i__25280__auto___206414]));

var G__206415 = (i__25280__auto___206414 + (1));
i__25280__auto___206414 = G__206415;
continue;
} else {
}
break;
}

var G__206412 = args206410.length;
switch (G__206412) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args206410.length)].join('')));

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
var args206418 = [];
var len__25279__auto___206421 = arguments.length;
var i__25280__auto___206422 = (0);
while(true){
if((i__25280__auto___206422 < len__25279__auto___206421)){
args206418.push((arguments[i__25280__auto___206422]));

var G__206423 = (i__25280__auto___206422 + (1));
i__25280__auto___206422 = G__206423;
continue;
} else {
}
break;
}

var G__206420 = args206418.length;
switch (G__206420) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args206418.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__206417_SHARP_){
return !((p1__206417_SHARP_ === base));
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
var args__25286__auto__ = [];
var len__25279__auto___206433 = arguments.length;
var i__25280__auto___206434 = (0);
while(true){
if((i__25280__auto___206434 < len__25279__auto___206433)){
args__25286__auto__.push((arguments[i__25280__auto___206434]));

var G__206435 = (i__25280__auto___206434 + (1));
i__25280__auto___206434 = G__206435;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((1) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25287__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__206427_206436 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__206428_206437 = null;
var count__206429_206438 = (0);
var i__206430_206439 = (0);
while(true){
if((i__206430_206439 < count__206429_206438)){
var vec__206431_206440 = cljs.core._nth.call(null,chunk__206428_206437,i__206430_206439);
var k_206441 = cljs.core.nth.call(null,vec__206431_206440,(0),null);
var v_206442 = cljs.core.nth.call(null,vec__206431_206440,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_206441),v_206442);

var G__206443 = seq__206427_206436;
var G__206444 = chunk__206428_206437;
var G__206445 = count__206429_206438;
var G__206446 = (i__206430_206439 + (1));
seq__206427_206436 = G__206443;
chunk__206428_206437 = G__206444;
count__206429_206438 = G__206445;
i__206430_206439 = G__206446;
continue;
} else {
var temp__4425__auto___206447 = cljs.core.seq.call(null,seq__206427_206436);
if(temp__4425__auto___206447){
var seq__206427_206448__$1 = temp__4425__auto___206447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__206427_206448__$1)){
var c__25024__auto___206449 = cljs.core.chunk_first.call(null,seq__206427_206448__$1);
var G__206450 = cljs.core.chunk_rest.call(null,seq__206427_206448__$1);
var G__206451 = c__25024__auto___206449;
var G__206452 = cljs.core.count.call(null,c__25024__auto___206449);
var G__206453 = (0);
seq__206427_206436 = G__206450;
chunk__206428_206437 = G__206451;
count__206429_206438 = G__206452;
i__206430_206439 = G__206453;
continue;
} else {
var vec__206432_206454 = cljs.core.first.call(null,seq__206427_206448__$1);
var k_206455 = cljs.core.nth.call(null,vec__206432_206454,(0),null);
var v_206456 = cljs.core.nth.call(null,vec__206432_206454,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_206455),v_206456);

var G__206457 = cljs.core.next.call(null,seq__206427_206448__$1);
var G__206458 = null;
var G__206459 = (0);
var G__206460 = (0);
seq__206427_206436 = G__206457;
chunk__206428_206437 = G__206458;
count__206429_206438 = G__206459;
i__206430_206439 = G__206460;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq206425){
var G__206426 = cljs.core.first.call(null,seq206425);
var seq206425__$1 = cljs.core.next.call(null,seq206425);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__206426,seq206425__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__25286__auto__ = [];
var len__25279__auto___206467 = arguments.length;
var i__25280__auto___206468 = (0);
while(true){
if((i__25280__auto___206468 < len__25279__auto___206467)){
args__25286__auto__.push((arguments[i__25280__auto___206468]));

var G__206469 = (i__25280__auto___206468 + (1));
i__25280__auto___206468 = G__206469;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((1) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25287__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__206463_206470 = cljs.core.seq.call(null,keywords);
var chunk__206464_206471 = null;
var count__206465_206472 = (0);
var i__206466_206473 = (0);
while(true){
if((i__206466_206473 < count__206465_206472)){
var kw_206474 = cljs.core._nth.call(null,chunk__206464_206471,i__206466_206473);
style.removeProperty(dommy.utils.as_str.call(null,kw_206474));

var G__206475 = seq__206463_206470;
var G__206476 = chunk__206464_206471;
var G__206477 = count__206465_206472;
var G__206478 = (i__206466_206473 + (1));
seq__206463_206470 = G__206475;
chunk__206464_206471 = G__206476;
count__206465_206472 = G__206477;
i__206466_206473 = G__206478;
continue;
} else {
var temp__4425__auto___206479 = cljs.core.seq.call(null,seq__206463_206470);
if(temp__4425__auto___206479){
var seq__206463_206480__$1 = temp__4425__auto___206479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__206463_206480__$1)){
var c__25024__auto___206481 = cljs.core.chunk_first.call(null,seq__206463_206480__$1);
var G__206482 = cljs.core.chunk_rest.call(null,seq__206463_206480__$1);
var G__206483 = c__25024__auto___206481;
var G__206484 = cljs.core.count.call(null,c__25024__auto___206481);
var G__206485 = (0);
seq__206463_206470 = G__206482;
chunk__206464_206471 = G__206483;
count__206465_206472 = G__206484;
i__206466_206473 = G__206485;
continue;
} else {
var kw_206486 = cljs.core.first.call(null,seq__206463_206480__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_206486));

var G__206487 = cljs.core.next.call(null,seq__206463_206480__$1);
var G__206488 = null;
var G__206489 = (0);
var G__206490 = (0);
seq__206463_206470 = G__206487;
chunk__206464_206471 = G__206488;
count__206465_206472 = G__206489;
i__206466_206473 = G__206490;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq206461){
var G__206462 = cljs.core.first.call(null,seq206461);
var seq206461__$1 = cljs.core.next.call(null,seq206461);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__206462,seq206461__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__25286__auto__ = [];
var len__25279__auto___206499 = arguments.length;
var i__25280__auto___206500 = (0);
while(true){
if((i__25280__auto___206500 < len__25279__auto___206499)){
args__25286__auto__.push((arguments[i__25280__auto___206500]));

var G__206501 = (i__25280__auto___206500 + (1));
i__25280__auto___206500 = G__206501;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((1) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25287__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__206493_206502 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__206494_206503 = null;
var count__206495_206504 = (0);
var i__206496_206505 = (0);
while(true){
if((i__206496_206505 < count__206495_206504)){
var vec__206497_206506 = cljs.core._nth.call(null,chunk__206494_206503,i__206496_206505);
var k_206507 = cljs.core.nth.call(null,vec__206497_206506,(0),null);
var v_206508 = cljs.core.nth.call(null,vec__206497_206506,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_206507,[cljs.core.str(v_206508),cljs.core.str("px")].join(''));

var G__206509 = seq__206493_206502;
var G__206510 = chunk__206494_206503;
var G__206511 = count__206495_206504;
var G__206512 = (i__206496_206505 + (1));
seq__206493_206502 = G__206509;
chunk__206494_206503 = G__206510;
count__206495_206504 = G__206511;
i__206496_206505 = G__206512;
continue;
} else {
var temp__4425__auto___206513 = cljs.core.seq.call(null,seq__206493_206502);
if(temp__4425__auto___206513){
var seq__206493_206514__$1 = temp__4425__auto___206513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__206493_206514__$1)){
var c__25024__auto___206515 = cljs.core.chunk_first.call(null,seq__206493_206514__$1);
var G__206516 = cljs.core.chunk_rest.call(null,seq__206493_206514__$1);
var G__206517 = c__25024__auto___206515;
var G__206518 = cljs.core.count.call(null,c__25024__auto___206515);
var G__206519 = (0);
seq__206493_206502 = G__206516;
chunk__206494_206503 = G__206517;
count__206495_206504 = G__206518;
i__206496_206505 = G__206519;
continue;
} else {
var vec__206498_206520 = cljs.core.first.call(null,seq__206493_206514__$1);
var k_206521 = cljs.core.nth.call(null,vec__206498_206520,(0),null);
var v_206522 = cljs.core.nth.call(null,vec__206498_206520,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_206521,[cljs.core.str(v_206522),cljs.core.str("px")].join(''));

var G__206523 = cljs.core.next.call(null,seq__206493_206514__$1);
var G__206524 = null;
var G__206525 = (0);
var G__206526 = (0);
seq__206493_206502 = G__206523;
chunk__206494_206503 = G__206524;
count__206495_206504 = G__206525;
i__206496_206505 = G__206526;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq206491){
var G__206492 = cljs.core.first.call(null,seq206491);
var seq206491__$1 = cljs.core.next.call(null,seq206491);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__206492,seq206491__$1);
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
var args206527 = [];
var len__25279__auto___206542 = arguments.length;
var i__25280__auto___206543 = (0);
while(true){
if((i__25280__auto___206543 < len__25279__auto___206542)){
args206527.push((arguments[i__25280__auto___206543]));

var G__206544 = (i__25280__auto___206543 + (1));
i__25280__auto___206543 = G__206544;
continue;
} else {
}
break;
}

var G__206533 = args206527.length;
switch (G__206533) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25298__auto__ = (new cljs.core.IndexedSeq(args206527.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25298__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__206534 = elem;
(G__206534[k__$1] = v);

return G__206534;
} else {
var G__206535 = elem;
G__206535.setAttribute(k__$1,v);

return G__206535;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__206536_206546 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__206537_206547 = null;
var count__206538_206548 = (0);
var i__206539_206549 = (0);
while(true){
if((i__206539_206549 < count__206538_206548)){
var vec__206540_206550 = cljs.core._nth.call(null,chunk__206537_206547,i__206539_206549);
var k_206551__$1 = cljs.core.nth.call(null,vec__206540_206550,(0),null);
var v_206552__$1 = cljs.core.nth.call(null,vec__206540_206550,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_206551__$1,v_206552__$1);

var G__206553 = seq__206536_206546;
var G__206554 = chunk__206537_206547;
var G__206555 = count__206538_206548;
var G__206556 = (i__206539_206549 + (1));
seq__206536_206546 = G__206553;
chunk__206537_206547 = G__206554;
count__206538_206548 = G__206555;
i__206539_206549 = G__206556;
continue;
} else {
var temp__4425__auto___206557 = cljs.core.seq.call(null,seq__206536_206546);
if(temp__4425__auto___206557){
var seq__206536_206558__$1 = temp__4425__auto___206557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__206536_206558__$1)){
var c__25024__auto___206559 = cljs.core.chunk_first.call(null,seq__206536_206558__$1);
var G__206560 = cljs.core.chunk_rest.call(null,seq__206536_206558__$1);
var G__206561 = c__25024__auto___206559;
var G__206562 = cljs.core.count.call(null,c__25024__auto___206559);
var G__206563 = (0);
seq__206536_206546 = G__206560;
chunk__206537_206547 = G__206561;
count__206538_206548 = G__206562;
i__206539_206549 = G__206563;
continue;
} else {
var vec__206541_206564 = cljs.core.first.call(null,seq__206536_206558__$1);
var k_206565__$1 = cljs.core.nth.call(null,vec__206541_206564,(0),null);
var v_206566__$1 = cljs.core.nth.call(null,vec__206541_206564,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_206565__$1,v_206566__$1);

var G__206567 = cljs.core.next.call(null,seq__206536_206558__$1);
var G__206568 = null;
var G__206569 = (0);
var G__206570 = (0);
seq__206536_206546 = G__206567;
chunk__206537_206547 = G__206568;
count__206538_206548 = G__206569;
i__206539_206549 = G__206570;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq206528){
var G__206529 = cljs.core.first.call(null,seq206528);
var seq206528__$1 = cljs.core.next.call(null,seq206528);
var G__206530 = cljs.core.first.call(null,seq206528__$1);
var seq206528__$2 = cljs.core.next.call(null,seq206528__$1);
var G__206531 = cljs.core.first.call(null,seq206528__$2);
var seq206528__$3 = cljs.core.next.call(null,seq206528__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__206529,G__206530,G__206531,seq206528__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args206571 = [];
var len__25279__auto___206581 = arguments.length;
var i__25280__auto___206582 = (0);
while(true){
if((i__25280__auto___206582 < len__25279__auto___206581)){
args206571.push((arguments[i__25280__auto___206582]));

var G__206583 = (i__25280__auto___206582 + (1));
i__25280__auto___206582 = G__206583;
continue;
} else {
}
break;
}

var G__206576 = args206571.length;
switch (G__206576) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25298__auto__ = (new cljs.core.IndexedSeq(args206571.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25298__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_206585__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_206585__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_206585__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__206577_206586 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__206578_206587 = null;
var count__206579_206588 = (0);
var i__206580_206589 = (0);
while(true){
if((i__206580_206589 < count__206579_206588)){
var k_206590__$1 = cljs.core._nth.call(null,chunk__206578_206587,i__206580_206589);
dommy.core.remove_attr_BANG_.call(null,elem,k_206590__$1);

var G__206591 = seq__206577_206586;
var G__206592 = chunk__206578_206587;
var G__206593 = count__206579_206588;
var G__206594 = (i__206580_206589 + (1));
seq__206577_206586 = G__206591;
chunk__206578_206587 = G__206592;
count__206579_206588 = G__206593;
i__206580_206589 = G__206594;
continue;
} else {
var temp__4425__auto___206595 = cljs.core.seq.call(null,seq__206577_206586);
if(temp__4425__auto___206595){
var seq__206577_206596__$1 = temp__4425__auto___206595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__206577_206596__$1)){
var c__25024__auto___206597 = cljs.core.chunk_first.call(null,seq__206577_206596__$1);
var G__206598 = cljs.core.chunk_rest.call(null,seq__206577_206596__$1);
var G__206599 = c__25024__auto___206597;
var G__206600 = cljs.core.count.call(null,c__25024__auto___206597);
var G__206601 = (0);
seq__206577_206586 = G__206598;
chunk__206578_206587 = G__206599;
count__206579_206588 = G__206600;
i__206580_206589 = G__206601;
continue;
} else {
var k_206602__$1 = cljs.core.first.call(null,seq__206577_206596__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_206602__$1);

var G__206603 = cljs.core.next.call(null,seq__206577_206596__$1);
var G__206604 = null;
var G__206605 = (0);
var G__206606 = (0);
seq__206577_206586 = G__206603;
chunk__206578_206587 = G__206604;
count__206579_206588 = G__206605;
i__206580_206589 = G__206606;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq206572){
var G__206573 = cljs.core.first.call(null,seq206572);
var seq206572__$1 = cljs.core.next.call(null,seq206572);
var G__206574 = cljs.core.first.call(null,seq206572__$1);
var seq206572__$2 = cljs.core.next.call(null,seq206572__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__206573,G__206574,seq206572__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args206607 = [];
var len__25279__auto___206610 = arguments.length;
var i__25280__auto___206611 = (0);
while(true){
if((i__25280__auto___206611 < len__25279__auto___206610)){
args206607.push((arguments[i__25280__auto___206611]));

var G__206612 = (i__25280__auto___206611 + (1));
i__25280__auto___206611 = G__206612;
continue;
} else {
}
break;
}

var G__206609 = args206607.length;
switch (G__206609) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args206607.length)].join('')));

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
var args206614 = [];
var len__25279__auto___206632 = arguments.length;
var i__25280__auto___206633 = (0);
while(true){
if((i__25280__auto___206633 < len__25279__auto___206632)){
args206614.push((arguments[i__25280__auto___206633]));

var G__206634 = (i__25280__auto___206633 + (1));
i__25280__auto___206633 = G__206634;
continue;
} else {
}
break;
}

var G__206619 = args206614.length;
switch (G__206619) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25298__auto__ = (new cljs.core.IndexedSeq(args206614.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25298__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4423__auto___206636 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___206636)){
var class_list_206637 = temp__4423__auto___206636;
var seq__206620_206638 = cljs.core.seq.call(null,classes__$1);
var chunk__206621_206639 = null;
var count__206622_206640 = (0);
var i__206623_206641 = (0);
while(true){
if((i__206623_206641 < count__206622_206640)){
var c_206642 = cljs.core._nth.call(null,chunk__206621_206639,i__206623_206641);
class_list_206637.add(c_206642);

var G__206643 = seq__206620_206638;
var G__206644 = chunk__206621_206639;
var G__206645 = count__206622_206640;
var G__206646 = (i__206623_206641 + (1));
seq__206620_206638 = G__206643;
chunk__206621_206639 = G__206644;
count__206622_206640 = G__206645;
i__206623_206641 = G__206646;
continue;
} else {
var temp__4425__auto___206647 = cljs.core.seq.call(null,seq__206620_206638);
if(temp__4425__auto___206647){
var seq__206620_206648__$1 = temp__4425__auto___206647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__206620_206648__$1)){
var c__25024__auto___206649 = cljs.core.chunk_first.call(null,seq__206620_206648__$1);
var G__206650 = cljs.core.chunk_rest.call(null,seq__206620_206648__$1);
var G__206651 = c__25024__auto___206649;
var G__206652 = cljs.core.count.call(null,c__25024__auto___206649);
var G__206653 = (0);
seq__206620_206638 = G__206650;
chunk__206621_206639 = G__206651;
count__206622_206640 = G__206652;
i__206623_206641 = G__206653;
continue;
} else {
var c_206654 = cljs.core.first.call(null,seq__206620_206648__$1);
class_list_206637.add(c_206654);

var G__206655 = cljs.core.next.call(null,seq__206620_206648__$1);
var G__206656 = null;
var G__206657 = (0);
var G__206658 = (0);
seq__206620_206638 = G__206655;
chunk__206621_206639 = G__206656;
count__206622_206640 = G__206657;
i__206623_206641 = G__206658;
continue;
}
} else {
}
}
break;
}
} else {
var seq__206624_206659 = cljs.core.seq.call(null,classes__$1);
var chunk__206625_206660 = null;
var count__206626_206661 = (0);
var i__206627_206662 = (0);
while(true){
if((i__206627_206662 < count__206626_206661)){
var c_206663 = cljs.core._nth.call(null,chunk__206625_206660,i__206627_206662);
var class_name_206664 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_206664,c_206663))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_206664 === ""))?c_206663:[cljs.core.str(class_name_206664),cljs.core.str(" "),cljs.core.str(c_206663)].join('')));
}

var G__206665 = seq__206624_206659;
var G__206666 = chunk__206625_206660;
var G__206667 = count__206626_206661;
var G__206668 = (i__206627_206662 + (1));
seq__206624_206659 = G__206665;
chunk__206625_206660 = G__206666;
count__206626_206661 = G__206667;
i__206627_206662 = G__206668;
continue;
} else {
var temp__4425__auto___206669 = cljs.core.seq.call(null,seq__206624_206659);
if(temp__4425__auto___206669){
var seq__206624_206670__$1 = temp__4425__auto___206669;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__206624_206670__$1)){
var c__25024__auto___206671 = cljs.core.chunk_first.call(null,seq__206624_206670__$1);
var G__206672 = cljs.core.chunk_rest.call(null,seq__206624_206670__$1);
var G__206673 = c__25024__auto___206671;
var G__206674 = cljs.core.count.call(null,c__25024__auto___206671);
var G__206675 = (0);
seq__206624_206659 = G__206672;
chunk__206625_206660 = G__206673;
count__206626_206661 = G__206674;
i__206627_206662 = G__206675;
continue;
} else {
var c_206676 = cljs.core.first.call(null,seq__206624_206670__$1);
var class_name_206677 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_206677,c_206676))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_206677 === ""))?c_206676:[cljs.core.str(class_name_206677),cljs.core.str(" "),cljs.core.str(c_206676)].join('')));
}

var G__206678 = cljs.core.next.call(null,seq__206624_206670__$1);
var G__206679 = null;
var G__206680 = (0);
var G__206681 = (0);
seq__206624_206659 = G__206678;
chunk__206625_206660 = G__206679;
count__206626_206661 = G__206680;
i__206627_206662 = G__206681;
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
var seq__206628_206682 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__206629_206683 = null;
var count__206630_206684 = (0);
var i__206631_206685 = (0);
while(true){
if((i__206631_206685 < count__206630_206684)){
var c_206686 = cljs.core._nth.call(null,chunk__206629_206683,i__206631_206685);
dommy.core.add_class_BANG_.call(null,elem,c_206686);

var G__206687 = seq__206628_206682;
var G__206688 = chunk__206629_206683;
var G__206689 = count__206630_206684;
var G__206690 = (i__206631_206685 + (1));
seq__206628_206682 = G__206687;
chunk__206629_206683 = G__206688;
count__206630_206684 = G__206689;
i__206631_206685 = G__206690;
continue;
} else {
var temp__4425__auto___206691 = cljs.core.seq.call(null,seq__206628_206682);
if(temp__4425__auto___206691){
var seq__206628_206692__$1 = temp__4425__auto___206691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__206628_206692__$1)){
var c__25024__auto___206693 = cljs.core.chunk_first.call(null,seq__206628_206692__$1);
var G__206694 = cljs.core.chunk_rest.call(null,seq__206628_206692__$1);
var G__206695 = c__25024__auto___206693;
var G__206696 = cljs.core.count.call(null,c__25024__auto___206693);
var G__206697 = (0);
seq__206628_206682 = G__206694;
chunk__206629_206683 = G__206695;
count__206630_206684 = G__206696;
i__206631_206685 = G__206697;
continue;
} else {
var c_206698 = cljs.core.first.call(null,seq__206628_206692__$1);
dommy.core.add_class_BANG_.call(null,elem,c_206698);

var G__206699 = cljs.core.next.call(null,seq__206628_206692__$1);
var G__206700 = null;
var G__206701 = (0);
var G__206702 = (0);
seq__206628_206682 = G__206699;
chunk__206629_206683 = G__206700;
count__206630_206684 = G__206701;
i__206631_206685 = G__206702;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq206615){
var G__206616 = cljs.core.first.call(null,seq206615);
var seq206615__$1 = cljs.core.next.call(null,seq206615);
var G__206617 = cljs.core.first.call(null,seq206615__$1);
var seq206615__$2 = cljs.core.next.call(null,seq206615__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__206616,G__206617,seq206615__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args206703 = [];
var len__25279__auto___206713 = arguments.length;
var i__25280__auto___206714 = (0);
while(true){
if((i__25280__auto___206714 < len__25279__auto___206713)){
args206703.push((arguments[i__25280__auto___206714]));

var G__206715 = (i__25280__auto___206714 + (1));
i__25280__auto___206714 = G__206715;
continue;
} else {
}
break;
}

var G__206708 = args206703.length;
switch (G__206708) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25298__auto__ = (new cljs.core.IndexedSeq(args206703.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25298__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___206717 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___206717)){
var class_list_206718 = temp__4423__auto___206717;
class_list_206718.remove(c__$1);
} else {
var class_name_206719 = dommy.core.class$.call(null,elem);
var new_class_name_206720 = dommy.utils.remove_class_str.call(null,class_name_206719,c__$1);
if((class_name_206719 === new_class_name_206720)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_206720);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__206709 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__206710 = null;
var count__206711 = (0);
var i__206712 = (0);
while(true){
if((i__206712 < count__206711)){
var c = cljs.core._nth.call(null,chunk__206710,i__206712);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__206721 = seq__206709;
var G__206722 = chunk__206710;
var G__206723 = count__206711;
var G__206724 = (i__206712 + (1));
seq__206709 = G__206721;
chunk__206710 = G__206722;
count__206711 = G__206723;
i__206712 = G__206724;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__206709);
if(temp__4425__auto__){
var seq__206709__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__206709__$1)){
var c__25024__auto__ = cljs.core.chunk_first.call(null,seq__206709__$1);
var G__206725 = cljs.core.chunk_rest.call(null,seq__206709__$1);
var G__206726 = c__25024__auto__;
var G__206727 = cljs.core.count.call(null,c__25024__auto__);
var G__206728 = (0);
seq__206709 = G__206725;
chunk__206710 = G__206726;
count__206711 = G__206727;
i__206712 = G__206728;
continue;
} else {
var c = cljs.core.first.call(null,seq__206709__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__206729 = cljs.core.next.call(null,seq__206709__$1);
var G__206730 = null;
var G__206731 = (0);
var G__206732 = (0);
seq__206709 = G__206729;
chunk__206710 = G__206730;
count__206711 = G__206731;
i__206712 = G__206732;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq206704){
var G__206705 = cljs.core.first.call(null,seq206704);
var seq206704__$1 = cljs.core.next.call(null,seq206704);
var G__206706 = cljs.core.first.call(null,seq206704__$1);
var seq206704__$2 = cljs.core.next.call(null,seq206704__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__206705,G__206706,seq206704__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args206733 = [];
var len__25279__auto___206736 = arguments.length;
var i__25280__auto___206737 = (0);
while(true){
if((i__25280__auto___206737 < len__25279__auto___206736)){
args206733.push((arguments[i__25280__auto___206737]));

var G__206738 = (i__25280__auto___206737 + (1));
i__25280__auto___206737 = G__206738;
continue;
} else {
}
break;
}

var G__206735 = args206733.length;
switch (G__206735) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args206733.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___206740 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___206740)){
var class_list_206741 = temp__4423__auto___206740;
class_list_206741.toggle(c__$1);
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
var args206742 = [];
var len__25279__auto___206745 = arguments.length;
var i__25280__auto___206746 = (0);
while(true){
if((i__25280__auto___206746 < len__25279__auto___206745)){
args206742.push((arguments[i__25280__auto___206746]));

var G__206747 = (i__25280__auto___206746 + (1));
i__25280__auto___206746 = G__206747;
continue;
} else {
}
break;
}

var G__206744 = args206742.length;
switch (G__206744) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args206742.length)].join('')));

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
var args206749 = [];
var len__25279__auto___206752 = arguments.length;
var i__25280__auto___206753 = (0);
while(true){
if((i__25280__auto___206753 < len__25279__auto___206752)){
args206749.push((arguments[i__25280__auto___206753]));

var G__206754 = (i__25280__auto___206753 + (1));
i__25280__auto___206753 = G__206754;
continue;
} else {
}
break;
}

var G__206751 = args206749.length;
switch (G__206751) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args206749.length)].join('')));

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
var args206756 = [];
var len__25279__auto___206767 = arguments.length;
var i__25280__auto___206768 = (0);
while(true){
if((i__25280__auto___206768 < len__25279__auto___206767)){
args206756.push((arguments[i__25280__auto___206768]));

var G__206769 = (i__25280__auto___206768 + (1));
i__25280__auto___206768 = G__206769;
continue;
} else {
}
break;
}

var G__206761 = args206756.length;
switch (G__206761) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25298__auto__ = (new cljs.core.IndexedSeq(args206756.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25298__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__206762 = parent;
G__206762.appendChild(child);

return G__206762;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__206763_206771 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__206764_206772 = null;
var count__206765_206773 = (0);
var i__206766_206774 = (0);
while(true){
if((i__206766_206774 < count__206765_206773)){
var c_206775 = cljs.core._nth.call(null,chunk__206764_206772,i__206766_206774);
dommy.core.append_BANG_.call(null,parent,c_206775);

var G__206776 = seq__206763_206771;
var G__206777 = chunk__206764_206772;
var G__206778 = count__206765_206773;
var G__206779 = (i__206766_206774 + (1));
seq__206763_206771 = G__206776;
chunk__206764_206772 = G__206777;
count__206765_206773 = G__206778;
i__206766_206774 = G__206779;
continue;
} else {
var temp__4425__auto___206780 = cljs.core.seq.call(null,seq__206763_206771);
if(temp__4425__auto___206780){
var seq__206763_206781__$1 = temp__4425__auto___206780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__206763_206781__$1)){
var c__25024__auto___206782 = cljs.core.chunk_first.call(null,seq__206763_206781__$1);
var G__206783 = cljs.core.chunk_rest.call(null,seq__206763_206781__$1);
var G__206784 = c__25024__auto___206782;
var G__206785 = cljs.core.count.call(null,c__25024__auto___206782);
var G__206786 = (0);
seq__206763_206771 = G__206783;
chunk__206764_206772 = G__206784;
count__206765_206773 = G__206785;
i__206766_206774 = G__206786;
continue;
} else {
var c_206787 = cljs.core.first.call(null,seq__206763_206781__$1);
dommy.core.append_BANG_.call(null,parent,c_206787);

var G__206788 = cljs.core.next.call(null,seq__206763_206781__$1);
var G__206789 = null;
var G__206790 = (0);
var G__206791 = (0);
seq__206763_206771 = G__206788;
chunk__206764_206772 = G__206789;
count__206765_206773 = G__206790;
i__206766_206774 = G__206791;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq206757){
var G__206758 = cljs.core.first.call(null,seq206757);
var seq206757__$1 = cljs.core.next.call(null,seq206757);
var G__206759 = cljs.core.first.call(null,seq206757__$1);
var seq206757__$2 = cljs.core.next.call(null,seq206757__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__206758,G__206759,seq206757__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args206792 = [];
var len__25279__auto___206803 = arguments.length;
var i__25280__auto___206804 = (0);
while(true){
if((i__25280__auto___206804 < len__25279__auto___206803)){
args206792.push((arguments[i__25280__auto___206804]));

var G__206805 = (i__25280__auto___206804 + (1));
i__25280__auto___206804 = G__206805;
continue;
} else {
}
break;
}

var G__206797 = args206792.length;
switch (G__206797) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25298__auto__ = (new cljs.core.IndexedSeq(args206792.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25298__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__206798 = parent;
G__206798.insertBefore(child,parent.firstChild);

return G__206798;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__206799_206807 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__206800_206808 = null;
var count__206801_206809 = (0);
var i__206802_206810 = (0);
while(true){
if((i__206802_206810 < count__206801_206809)){
var c_206811 = cljs.core._nth.call(null,chunk__206800_206808,i__206802_206810);
dommy.core.prepend_BANG_.call(null,parent,c_206811);

var G__206812 = seq__206799_206807;
var G__206813 = chunk__206800_206808;
var G__206814 = count__206801_206809;
var G__206815 = (i__206802_206810 + (1));
seq__206799_206807 = G__206812;
chunk__206800_206808 = G__206813;
count__206801_206809 = G__206814;
i__206802_206810 = G__206815;
continue;
} else {
var temp__4425__auto___206816 = cljs.core.seq.call(null,seq__206799_206807);
if(temp__4425__auto___206816){
var seq__206799_206817__$1 = temp__4425__auto___206816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__206799_206817__$1)){
var c__25024__auto___206818 = cljs.core.chunk_first.call(null,seq__206799_206817__$1);
var G__206819 = cljs.core.chunk_rest.call(null,seq__206799_206817__$1);
var G__206820 = c__25024__auto___206818;
var G__206821 = cljs.core.count.call(null,c__25024__auto___206818);
var G__206822 = (0);
seq__206799_206807 = G__206819;
chunk__206800_206808 = G__206820;
count__206801_206809 = G__206821;
i__206802_206810 = G__206822;
continue;
} else {
var c_206823 = cljs.core.first.call(null,seq__206799_206817__$1);
dommy.core.prepend_BANG_.call(null,parent,c_206823);

var G__206824 = cljs.core.next.call(null,seq__206799_206817__$1);
var G__206825 = null;
var G__206826 = (0);
var G__206827 = (0);
seq__206799_206807 = G__206824;
chunk__206800_206808 = G__206825;
count__206801_206809 = G__206826;
i__206802_206810 = G__206827;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq206793){
var G__206794 = cljs.core.first.call(null,seq206793);
var seq206793__$1 = cljs.core.next.call(null,seq206793);
var G__206795 = cljs.core.first.call(null,seq206793__$1);
var seq206793__$2 = cljs.core.next.call(null,seq206793__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__206794,G__206795,seq206793__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4423__auto___206828 = other.nextSibling;
if(cljs.core.truth_(temp__4423__auto___206828)){
var next_206829 = temp__4423__auto___206828;
dommy.core.insert_before_BANG_.call(null,elem,next_206829);
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
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
var args206830 = [];
var len__25279__auto___206834 = arguments.length;
var i__25280__auto___206835 = (0);
while(true){
if((i__25280__auto___206835 < len__25279__auto___206834)){
args206830.push((arguments[i__25280__auto___206835]));

var G__206836 = (i__25280__auto___206835 + (1));
i__25280__auto___206835 = G__206836;
continue;
} else {
}
break;
}

var G__206832 = args206830.length;
switch (G__206832) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args206830.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__206833 = p;
G__206833.removeChild(elem);

return G__206833;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__206838){
var vec__206839 = p__206838;
var special_mouse_event = cljs.core.nth.call(null,vec__206839,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__206839,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__206839,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__206839,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__24221__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__24209__auto__ = related_target;
if(cljs.core.truth_(and__24209__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__24209__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__206839,special_mouse_event,real_mouse_event))
});})(vec__206839,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__24209__auto__ = selected_target;
if(cljs.core.truth_(and__24209__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__24209__auto__;
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
var or__24221__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__25286__auto__ = [];
var len__25279__auto___206843 = arguments.length;
var i__25280__auto___206844 = (0);
while(true){
if((i__25280__auto___206844 < len__25279__auto___206843)){
args__25286__auto__.push((arguments[i__25280__auto___206844]));

var G__206845 = (i__25280__auto___206844 + (1));
i__25280__auto___206844 = G__206845;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((2) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25287__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq206840){
var G__206841 = cljs.core.first.call(null,seq206840);
var seq206840__$1 = cljs.core.next.call(null,seq206840);
var G__206842 = cljs.core.first.call(null,seq206840__$1);
var seq206840__$2 = cljs.core.next.call(null,seq206840__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__206841,G__206842,seq206840__$2);
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
var args__25286__auto__ = [];
var len__25279__auto___206871 = arguments.length;
var i__25280__auto___206872 = (0);
while(true){
if((i__25280__auto___206872 < len__25279__auto___206871)){
args__25286__auto__.push((arguments[i__25280__auto___206872]));

var G__206873 = (i__25280__auto___206872 + (1));
i__25280__auto___206872 = G__206873;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((1) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25287__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__206848_206874 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_206875 = cljs.core.nth.call(null,vec__206848_206874,(0),null);
var selector_206876 = cljs.core.nth.call(null,vec__206848_206874,(1),null);
var seq__206849_206877 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__206856_206878 = null;
var count__206857_206879 = (0);
var i__206858_206880 = (0);
while(true){
if((i__206858_206880 < count__206857_206879)){
var vec__206865_206881 = cljs.core._nth.call(null,chunk__206856_206878,i__206858_206880);
var orig_type_206882 = cljs.core.nth.call(null,vec__206865_206881,(0),null);
var f_206883 = cljs.core.nth.call(null,vec__206865_206881,(1),null);
var seq__206859_206884 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_206882,cljs.core.PersistentArrayMap.fromArray([orig_type_206882,cljs.core.identity], true, false)));
var chunk__206861_206885 = null;
var count__206862_206886 = (0);
var i__206863_206887 = (0);
while(true){
if((i__206863_206887 < count__206862_206886)){
var vec__206866_206888 = cljs.core._nth.call(null,chunk__206861_206885,i__206863_206887);
var actual_type_206889 = cljs.core.nth.call(null,vec__206866_206888,(0),null);
var factory_206890 = cljs.core.nth.call(null,vec__206866_206888,(1),null);
var canonical_f_206891 = (cljs.core.truth_(selector_206876)?cljs.core.partial.call(null,dommy.core.live_listener,elem_206875,selector_206876):cljs.core.identity).call(null,factory_206890.call(null,f_206883));
dommy.core.update_event_listeners_BANG_.call(null,elem_206875,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_206876,actual_type_206889,f_206883], null),canonical_f_206891);

if(cljs.core.truth_(elem_206875.addEventListener)){
elem_206875.addEventListener(cljs.core.name.call(null,actual_type_206889),canonical_f_206891);
} else {
elem_206875.attachEvent(cljs.core.name.call(null,actual_type_206889),canonical_f_206891);
}

var G__206892 = seq__206859_206884;
var G__206893 = chunk__206861_206885;
var G__206894 = count__206862_206886;
var G__206895 = (i__206863_206887 + (1));
seq__206859_206884 = G__206892;
chunk__206861_206885 = G__206893;
count__206862_206886 = G__206894;
i__206863_206887 = G__206895;
continue;
} else {
var temp__4425__auto___206896 = cljs.core.seq.call(null,seq__206859_206884);
if(temp__4425__auto___206896){
var seq__206859_206897__$1 = temp__4425__auto___206896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__206859_206897__$1)){
var c__25024__auto___206898 = cljs.core.chunk_first.call(null,seq__206859_206897__$1);
var G__206899 = cljs.core.chunk_rest.call(null,seq__206859_206897__$1);
var G__206900 = c__25024__auto___206898;
var G__206901 = cljs.core.count.call(null,c__25024__auto___206898);
var G__206902 = (0);
seq__206859_206884 = G__206899;
chunk__206861_206885 = G__206900;
count__206862_206886 = G__206901;
i__206863_206887 = G__206902;
continue;
} else {
var vec__206867_206903 = cljs.core.first.call(null,seq__206859_206897__$1);
var actual_type_206904 = cljs.core.nth.call(null,vec__206867_206903,(0),null);
var factory_206905 = cljs.core.nth.call(null,vec__206867_206903,(1),null);
var canonical_f_206906 = (cljs.core.truth_(selector_206876)?cljs.core.partial.call(null,dommy.core.live_listener,elem_206875,selector_206876):cljs.core.identity).call(null,factory_206905.call(null,f_206883));
dommy.core.update_event_listeners_BANG_.call(null,elem_206875,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_206876,actual_type_206904,f_206883], null),canonical_f_206906);

if(cljs.core.truth_(elem_206875.addEventListener)){
elem_206875.addEventListener(cljs.core.name.call(null,actual_type_206904),canonical_f_206906);
} else {
elem_206875.attachEvent(cljs.core.name.call(null,actual_type_206904),canonical_f_206906);
}

var G__206907 = cljs.core.next.call(null,seq__206859_206897__$1);
var G__206908 = null;
var G__206909 = (0);
var G__206910 = (0);
seq__206859_206884 = G__206907;
chunk__206861_206885 = G__206908;
count__206862_206886 = G__206909;
i__206863_206887 = G__206910;
continue;
}
} else {
}
}
break;
}

var G__206911 = seq__206849_206877;
var G__206912 = chunk__206856_206878;
var G__206913 = count__206857_206879;
var G__206914 = (i__206858_206880 + (1));
seq__206849_206877 = G__206911;
chunk__206856_206878 = G__206912;
count__206857_206879 = G__206913;
i__206858_206880 = G__206914;
continue;
} else {
var temp__4425__auto___206915 = cljs.core.seq.call(null,seq__206849_206877);
if(temp__4425__auto___206915){
var seq__206849_206916__$1 = temp__4425__auto___206915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__206849_206916__$1)){
var c__25024__auto___206917 = cljs.core.chunk_first.call(null,seq__206849_206916__$1);
var G__206918 = cljs.core.chunk_rest.call(null,seq__206849_206916__$1);
var G__206919 = c__25024__auto___206917;
var G__206920 = cljs.core.count.call(null,c__25024__auto___206917);
var G__206921 = (0);
seq__206849_206877 = G__206918;
chunk__206856_206878 = G__206919;
count__206857_206879 = G__206920;
i__206858_206880 = G__206921;
continue;
} else {
var vec__206868_206922 = cljs.core.first.call(null,seq__206849_206916__$1);
var orig_type_206923 = cljs.core.nth.call(null,vec__206868_206922,(0),null);
var f_206924 = cljs.core.nth.call(null,vec__206868_206922,(1),null);
var seq__206850_206925 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_206923,cljs.core.PersistentArrayMap.fromArray([orig_type_206923,cljs.core.identity], true, false)));
var chunk__206852_206926 = null;
var count__206853_206927 = (0);
var i__206854_206928 = (0);
while(true){
if((i__206854_206928 < count__206853_206927)){
var vec__206869_206929 = cljs.core._nth.call(null,chunk__206852_206926,i__206854_206928);
var actual_type_206930 = cljs.core.nth.call(null,vec__206869_206929,(0),null);
var factory_206931 = cljs.core.nth.call(null,vec__206869_206929,(1),null);
var canonical_f_206932 = (cljs.core.truth_(selector_206876)?cljs.core.partial.call(null,dommy.core.live_listener,elem_206875,selector_206876):cljs.core.identity).call(null,factory_206931.call(null,f_206924));
dommy.core.update_event_listeners_BANG_.call(null,elem_206875,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_206876,actual_type_206930,f_206924], null),canonical_f_206932);

if(cljs.core.truth_(elem_206875.addEventListener)){
elem_206875.addEventListener(cljs.core.name.call(null,actual_type_206930),canonical_f_206932);
} else {
elem_206875.attachEvent(cljs.core.name.call(null,actual_type_206930),canonical_f_206932);
}

var G__206933 = seq__206850_206925;
var G__206934 = chunk__206852_206926;
var G__206935 = count__206853_206927;
var G__206936 = (i__206854_206928 + (1));
seq__206850_206925 = G__206933;
chunk__206852_206926 = G__206934;
count__206853_206927 = G__206935;
i__206854_206928 = G__206936;
continue;
} else {
var temp__4425__auto___206937__$1 = cljs.core.seq.call(null,seq__206850_206925);
if(temp__4425__auto___206937__$1){
var seq__206850_206938__$1 = temp__4425__auto___206937__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__206850_206938__$1)){
var c__25024__auto___206939 = cljs.core.chunk_first.call(null,seq__206850_206938__$1);
var G__206940 = cljs.core.chunk_rest.call(null,seq__206850_206938__$1);
var G__206941 = c__25024__auto___206939;
var G__206942 = cljs.core.count.call(null,c__25024__auto___206939);
var G__206943 = (0);
seq__206850_206925 = G__206940;
chunk__206852_206926 = G__206941;
count__206853_206927 = G__206942;
i__206854_206928 = G__206943;
continue;
} else {
var vec__206870_206944 = cljs.core.first.call(null,seq__206850_206938__$1);
var actual_type_206945 = cljs.core.nth.call(null,vec__206870_206944,(0),null);
var factory_206946 = cljs.core.nth.call(null,vec__206870_206944,(1),null);
var canonical_f_206947 = (cljs.core.truth_(selector_206876)?cljs.core.partial.call(null,dommy.core.live_listener,elem_206875,selector_206876):cljs.core.identity).call(null,factory_206946.call(null,f_206924));
dommy.core.update_event_listeners_BANG_.call(null,elem_206875,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_206876,actual_type_206945,f_206924], null),canonical_f_206947);

if(cljs.core.truth_(elem_206875.addEventListener)){
elem_206875.addEventListener(cljs.core.name.call(null,actual_type_206945),canonical_f_206947);
} else {
elem_206875.attachEvent(cljs.core.name.call(null,actual_type_206945),canonical_f_206947);
}

var G__206948 = cljs.core.next.call(null,seq__206850_206938__$1);
var G__206949 = null;
var G__206950 = (0);
var G__206951 = (0);
seq__206850_206925 = G__206948;
chunk__206852_206926 = G__206949;
count__206853_206927 = G__206950;
i__206854_206928 = G__206951;
continue;
}
} else {
}
}
break;
}

var G__206952 = cljs.core.next.call(null,seq__206849_206916__$1);
var G__206953 = null;
var G__206954 = (0);
var G__206955 = (0);
seq__206849_206877 = G__206952;
chunk__206856_206878 = G__206953;
count__206857_206879 = G__206954;
i__206858_206880 = G__206955;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq206846){
var G__206847 = cljs.core.first.call(null,seq206846);
var seq206846__$1 = cljs.core.next.call(null,seq206846);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__206847,seq206846__$1);
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
var args__25286__auto__ = [];
var len__25279__auto___206981 = arguments.length;
var i__25280__auto___206982 = (0);
while(true){
if((i__25280__auto___206982 < len__25279__auto___206981)){
args__25286__auto__.push((arguments[i__25280__auto___206982]));

var G__206983 = (i__25280__auto___206982 + (1));
i__25280__auto___206982 = G__206983;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((1) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25287__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__206958_206984 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_206985 = cljs.core.nth.call(null,vec__206958_206984,(0),null);
var selector_206986 = cljs.core.nth.call(null,vec__206958_206984,(1),null);
var seq__206959_206987 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__206966_206988 = null;
var count__206967_206989 = (0);
var i__206968_206990 = (0);
while(true){
if((i__206968_206990 < count__206967_206989)){
var vec__206975_206991 = cljs.core._nth.call(null,chunk__206966_206988,i__206968_206990);
var orig_type_206992 = cljs.core.nth.call(null,vec__206975_206991,(0),null);
var f_206993 = cljs.core.nth.call(null,vec__206975_206991,(1),null);
var seq__206969_206994 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_206992,cljs.core.PersistentArrayMap.fromArray([orig_type_206992,cljs.core.identity], true, false)));
var chunk__206971_206995 = null;
var count__206972_206996 = (0);
var i__206973_206997 = (0);
while(true){
if((i__206973_206997 < count__206972_206996)){
var vec__206976_206998 = cljs.core._nth.call(null,chunk__206971_206995,i__206973_206997);
var actual_type_206999 = cljs.core.nth.call(null,vec__206976_206998,(0),null);
var __207000 = cljs.core.nth.call(null,vec__206976_206998,(1),null);
var keys_207001 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_206986,actual_type_206999,f_206993], null);
var canonical_f_207002 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_206985),keys_207001);
dommy.core.update_event_listeners_BANG_.call(null,elem_206985,dommy.utils.dissoc_in,keys_207001);

if(cljs.core.truth_(elem_206985.removeEventListener)){
elem_206985.removeEventListener(cljs.core.name.call(null,actual_type_206999),canonical_f_207002);
} else {
elem_206985.detachEvent(cljs.core.name.call(null,actual_type_206999),canonical_f_207002);
}

var G__207003 = seq__206969_206994;
var G__207004 = chunk__206971_206995;
var G__207005 = count__206972_206996;
var G__207006 = (i__206973_206997 + (1));
seq__206969_206994 = G__207003;
chunk__206971_206995 = G__207004;
count__206972_206996 = G__207005;
i__206973_206997 = G__207006;
continue;
} else {
var temp__4425__auto___207007 = cljs.core.seq.call(null,seq__206969_206994);
if(temp__4425__auto___207007){
var seq__206969_207008__$1 = temp__4425__auto___207007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__206969_207008__$1)){
var c__25024__auto___207009 = cljs.core.chunk_first.call(null,seq__206969_207008__$1);
var G__207010 = cljs.core.chunk_rest.call(null,seq__206969_207008__$1);
var G__207011 = c__25024__auto___207009;
var G__207012 = cljs.core.count.call(null,c__25024__auto___207009);
var G__207013 = (0);
seq__206969_206994 = G__207010;
chunk__206971_206995 = G__207011;
count__206972_206996 = G__207012;
i__206973_206997 = G__207013;
continue;
} else {
var vec__206977_207014 = cljs.core.first.call(null,seq__206969_207008__$1);
var actual_type_207015 = cljs.core.nth.call(null,vec__206977_207014,(0),null);
var __207016 = cljs.core.nth.call(null,vec__206977_207014,(1),null);
var keys_207017 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_206986,actual_type_207015,f_206993], null);
var canonical_f_207018 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_206985),keys_207017);
dommy.core.update_event_listeners_BANG_.call(null,elem_206985,dommy.utils.dissoc_in,keys_207017);

if(cljs.core.truth_(elem_206985.removeEventListener)){
elem_206985.removeEventListener(cljs.core.name.call(null,actual_type_207015),canonical_f_207018);
} else {
elem_206985.detachEvent(cljs.core.name.call(null,actual_type_207015),canonical_f_207018);
}

var G__207019 = cljs.core.next.call(null,seq__206969_207008__$1);
var G__207020 = null;
var G__207021 = (0);
var G__207022 = (0);
seq__206969_206994 = G__207019;
chunk__206971_206995 = G__207020;
count__206972_206996 = G__207021;
i__206973_206997 = G__207022;
continue;
}
} else {
}
}
break;
}

var G__207023 = seq__206959_206987;
var G__207024 = chunk__206966_206988;
var G__207025 = count__206967_206989;
var G__207026 = (i__206968_206990 + (1));
seq__206959_206987 = G__207023;
chunk__206966_206988 = G__207024;
count__206967_206989 = G__207025;
i__206968_206990 = G__207026;
continue;
} else {
var temp__4425__auto___207027 = cljs.core.seq.call(null,seq__206959_206987);
if(temp__4425__auto___207027){
var seq__206959_207028__$1 = temp__4425__auto___207027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__206959_207028__$1)){
var c__25024__auto___207029 = cljs.core.chunk_first.call(null,seq__206959_207028__$1);
var G__207030 = cljs.core.chunk_rest.call(null,seq__206959_207028__$1);
var G__207031 = c__25024__auto___207029;
var G__207032 = cljs.core.count.call(null,c__25024__auto___207029);
var G__207033 = (0);
seq__206959_206987 = G__207030;
chunk__206966_206988 = G__207031;
count__206967_206989 = G__207032;
i__206968_206990 = G__207033;
continue;
} else {
var vec__206978_207034 = cljs.core.first.call(null,seq__206959_207028__$1);
var orig_type_207035 = cljs.core.nth.call(null,vec__206978_207034,(0),null);
var f_207036 = cljs.core.nth.call(null,vec__206978_207034,(1),null);
var seq__206960_207037 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_207035,cljs.core.PersistentArrayMap.fromArray([orig_type_207035,cljs.core.identity], true, false)));
var chunk__206962_207038 = null;
var count__206963_207039 = (0);
var i__206964_207040 = (0);
while(true){
if((i__206964_207040 < count__206963_207039)){
var vec__206979_207041 = cljs.core._nth.call(null,chunk__206962_207038,i__206964_207040);
var actual_type_207042 = cljs.core.nth.call(null,vec__206979_207041,(0),null);
var __207043 = cljs.core.nth.call(null,vec__206979_207041,(1),null);
var keys_207044 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_206986,actual_type_207042,f_207036], null);
var canonical_f_207045 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_206985),keys_207044);
dommy.core.update_event_listeners_BANG_.call(null,elem_206985,dommy.utils.dissoc_in,keys_207044);

if(cljs.core.truth_(elem_206985.removeEventListener)){
elem_206985.removeEventListener(cljs.core.name.call(null,actual_type_207042),canonical_f_207045);
} else {
elem_206985.detachEvent(cljs.core.name.call(null,actual_type_207042),canonical_f_207045);
}

var G__207046 = seq__206960_207037;
var G__207047 = chunk__206962_207038;
var G__207048 = count__206963_207039;
var G__207049 = (i__206964_207040 + (1));
seq__206960_207037 = G__207046;
chunk__206962_207038 = G__207047;
count__206963_207039 = G__207048;
i__206964_207040 = G__207049;
continue;
} else {
var temp__4425__auto___207050__$1 = cljs.core.seq.call(null,seq__206960_207037);
if(temp__4425__auto___207050__$1){
var seq__206960_207051__$1 = temp__4425__auto___207050__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__206960_207051__$1)){
var c__25024__auto___207052 = cljs.core.chunk_first.call(null,seq__206960_207051__$1);
var G__207053 = cljs.core.chunk_rest.call(null,seq__206960_207051__$1);
var G__207054 = c__25024__auto___207052;
var G__207055 = cljs.core.count.call(null,c__25024__auto___207052);
var G__207056 = (0);
seq__206960_207037 = G__207053;
chunk__206962_207038 = G__207054;
count__206963_207039 = G__207055;
i__206964_207040 = G__207056;
continue;
} else {
var vec__206980_207057 = cljs.core.first.call(null,seq__206960_207051__$1);
var actual_type_207058 = cljs.core.nth.call(null,vec__206980_207057,(0),null);
var __207059 = cljs.core.nth.call(null,vec__206980_207057,(1),null);
var keys_207060 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_206986,actual_type_207058,f_207036], null);
var canonical_f_207061 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_206985),keys_207060);
dommy.core.update_event_listeners_BANG_.call(null,elem_206985,dommy.utils.dissoc_in,keys_207060);

if(cljs.core.truth_(elem_206985.removeEventListener)){
elem_206985.removeEventListener(cljs.core.name.call(null,actual_type_207058),canonical_f_207061);
} else {
elem_206985.detachEvent(cljs.core.name.call(null,actual_type_207058),canonical_f_207061);
}

var G__207062 = cljs.core.next.call(null,seq__206960_207051__$1);
var G__207063 = null;
var G__207064 = (0);
var G__207065 = (0);
seq__206960_207037 = G__207062;
chunk__206962_207038 = G__207063;
count__206963_207039 = G__207064;
i__206964_207040 = G__207065;
continue;
}
} else {
}
}
break;
}

var G__207066 = cljs.core.next.call(null,seq__206959_207028__$1);
var G__207067 = null;
var G__207068 = (0);
var G__207069 = (0);
seq__206959_206987 = G__207066;
chunk__206966_206988 = G__207067;
count__206967_206989 = G__207068;
i__206968_206990 = G__207069;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq206956){
var G__206957 = cljs.core.first.call(null,seq206956);
var seq206956__$1 = cljs.core.next.call(null,seq206956);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__206957,seq206956__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__25286__auto__ = [];
var len__25279__auto___207079 = arguments.length;
var i__25280__auto___207080 = (0);
while(true){
if((i__25280__auto___207080 < len__25279__auto___207079)){
args__25286__auto__.push((arguments[i__25280__auto___207080]));

var G__207081 = (i__25280__auto___207080 + (1));
i__25280__auto___207080 = G__207081;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((1) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25287__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__207072_207082 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_207083 = cljs.core.nth.call(null,vec__207072_207082,(0),null);
var selector_207084 = cljs.core.nth.call(null,vec__207072_207082,(1),null);
var seq__207073_207085 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__207074_207086 = null;
var count__207075_207087 = (0);
var i__207076_207088 = (0);
while(true){
if((i__207076_207088 < count__207075_207087)){
var vec__207077_207089 = cljs.core._nth.call(null,chunk__207074_207086,i__207076_207088);
var type_207090 = cljs.core.nth.call(null,vec__207077_207089,(0),null);
var f_207091 = cljs.core.nth.call(null,vec__207077_207089,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_207090,((function (seq__207073_207085,chunk__207074_207086,count__207075_207087,i__207076_207088,vec__207077_207089,type_207090,f_207091,vec__207072_207082,elem_207083,selector_207084){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_207090,dommy$core$this_fn);

return f_207091.call(null,e);
});})(seq__207073_207085,chunk__207074_207086,count__207075_207087,i__207076_207088,vec__207077_207089,type_207090,f_207091,vec__207072_207082,elem_207083,selector_207084))
);

var G__207092 = seq__207073_207085;
var G__207093 = chunk__207074_207086;
var G__207094 = count__207075_207087;
var G__207095 = (i__207076_207088 + (1));
seq__207073_207085 = G__207092;
chunk__207074_207086 = G__207093;
count__207075_207087 = G__207094;
i__207076_207088 = G__207095;
continue;
} else {
var temp__4425__auto___207096 = cljs.core.seq.call(null,seq__207073_207085);
if(temp__4425__auto___207096){
var seq__207073_207097__$1 = temp__4425__auto___207096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__207073_207097__$1)){
var c__25024__auto___207098 = cljs.core.chunk_first.call(null,seq__207073_207097__$1);
var G__207099 = cljs.core.chunk_rest.call(null,seq__207073_207097__$1);
var G__207100 = c__25024__auto___207098;
var G__207101 = cljs.core.count.call(null,c__25024__auto___207098);
var G__207102 = (0);
seq__207073_207085 = G__207099;
chunk__207074_207086 = G__207100;
count__207075_207087 = G__207101;
i__207076_207088 = G__207102;
continue;
} else {
var vec__207078_207103 = cljs.core.first.call(null,seq__207073_207097__$1);
var type_207104 = cljs.core.nth.call(null,vec__207078_207103,(0),null);
var f_207105 = cljs.core.nth.call(null,vec__207078_207103,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_207104,((function (seq__207073_207085,chunk__207074_207086,count__207075_207087,i__207076_207088,vec__207078_207103,type_207104,f_207105,seq__207073_207097__$1,temp__4425__auto___207096,vec__207072_207082,elem_207083,selector_207084){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_207104,dommy$core$this_fn);

return f_207105.call(null,e);
});})(seq__207073_207085,chunk__207074_207086,count__207075_207087,i__207076_207088,vec__207078_207103,type_207104,f_207105,seq__207073_207097__$1,temp__4425__auto___207096,vec__207072_207082,elem_207083,selector_207084))
);

var G__207106 = cljs.core.next.call(null,seq__207073_207097__$1);
var G__207107 = null;
var G__207108 = (0);
var G__207109 = (0);
seq__207073_207085 = G__207106;
chunk__207074_207086 = G__207107;
count__207075_207087 = G__207108;
i__207076_207088 = G__207109;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq207070){
var G__207071 = cljs.core.first.call(null,seq207070);
var seq207070__$1 = cljs.core.next.call(null,seq207070);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__207071,seq207070__$1);
});

//# sourceMappingURL=core.js.map