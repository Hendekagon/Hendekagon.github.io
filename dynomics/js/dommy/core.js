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
var or__24211__auto__ = elem.textContent;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
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
var args648524 = [];
var len__25269__auto___648527 = arguments.length;
var i__25270__auto___648528 = (0);
while(true){
if((i__25270__auto___648528 < len__25269__auto___648527)){
args648524.push((arguments[i__25270__auto___648528]));

var G__648529 = (i__25270__auto___648528 + (1));
i__25270__auto___648528 = G__648529;
continue;
} else {
}
break;
}

var G__648526 = args648524.length;
switch (G__648526) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args648524.length)].join('')));

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
var args648531 = [];
var len__25269__auto___648534 = arguments.length;
var i__25270__auto___648535 = (0);
while(true){
if((i__25270__auto___648535 < len__25269__auto___648534)){
args648531.push((arguments[i__25270__auto___648535]));

var G__648536 = (i__25270__auto___648535 + (1));
i__25270__auto___648535 = G__648536;
continue;
} else {
}
break;
}

var G__648533 = args648531.length;
switch (G__648533) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args648531.length)].join('')));

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
var args648539 = [];
var len__25269__auto___648542 = arguments.length;
var i__25270__auto___648543 = (0);
while(true){
if((i__25270__auto___648543 < len__25269__auto___648542)){
args648539.push((arguments[i__25270__auto___648543]));

var G__648544 = (i__25270__auto___648543 + (1));
i__25270__auto___648543 = G__648544;
continue;
} else {
}
break;
}

var G__648541 = args648539.length;
switch (G__648541) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args648539.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__648538_SHARP_){
return !((p1__648538_SHARP_ === base));
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
var args__25276__auto__ = [];
var len__25269__auto___648554 = arguments.length;
var i__25270__auto___648555 = (0);
while(true){
if((i__25270__auto___648555 < len__25269__auto___648554)){
args__25276__auto__.push((arguments[i__25270__auto___648555]));

var G__648556 = (i__25270__auto___648555 + (1));
i__25270__auto___648555 = G__648556;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__648548_648557 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__648549_648558 = null;
var count__648550_648559 = (0);
var i__648551_648560 = (0);
while(true){
if((i__648551_648560 < count__648550_648559)){
var vec__648552_648561 = cljs.core._nth.call(null,chunk__648549_648558,i__648551_648560);
var k_648562 = cljs.core.nth.call(null,vec__648552_648561,(0),null);
var v_648563 = cljs.core.nth.call(null,vec__648552_648561,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_648562),v_648563);

var G__648564 = seq__648548_648557;
var G__648565 = chunk__648549_648558;
var G__648566 = count__648550_648559;
var G__648567 = (i__648551_648560 + (1));
seq__648548_648557 = G__648564;
chunk__648549_648558 = G__648565;
count__648550_648559 = G__648566;
i__648551_648560 = G__648567;
continue;
} else {
var temp__4425__auto___648568 = cljs.core.seq.call(null,seq__648548_648557);
if(temp__4425__auto___648568){
var seq__648548_648569__$1 = temp__4425__auto___648568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__648548_648569__$1)){
var c__25014__auto___648570 = cljs.core.chunk_first.call(null,seq__648548_648569__$1);
var G__648571 = cljs.core.chunk_rest.call(null,seq__648548_648569__$1);
var G__648572 = c__25014__auto___648570;
var G__648573 = cljs.core.count.call(null,c__25014__auto___648570);
var G__648574 = (0);
seq__648548_648557 = G__648571;
chunk__648549_648558 = G__648572;
count__648550_648559 = G__648573;
i__648551_648560 = G__648574;
continue;
} else {
var vec__648553_648575 = cljs.core.first.call(null,seq__648548_648569__$1);
var k_648576 = cljs.core.nth.call(null,vec__648553_648575,(0),null);
var v_648577 = cljs.core.nth.call(null,vec__648553_648575,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_648576),v_648577);

var G__648578 = cljs.core.next.call(null,seq__648548_648569__$1);
var G__648579 = null;
var G__648580 = (0);
var G__648581 = (0);
seq__648548_648557 = G__648578;
chunk__648549_648558 = G__648579;
count__648550_648559 = G__648580;
i__648551_648560 = G__648581;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq648546){
var G__648547 = cljs.core.first.call(null,seq648546);
var seq648546__$1 = cljs.core.next.call(null,seq648546);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__648547,seq648546__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__25276__auto__ = [];
var len__25269__auto___648588 = arguments.length;
var i__25270__auto___648589 = (0);
while(true){
if((i__25270__auto___648589 < len__25269__auto___648588)){
args__25276__auto__.push((arguments[i__25270__auto___648589]));

var G__648590 = (i__25270__auto___648589 + (1));
i__25270__auto___648589 = G__648590;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__648584_648591 = cljs.core.seq.call(null,keywords);
var chunk__648585_648592 = null;
var count__648586_648593 = (0);
var i__648587_648594 = (0);
while(true){
if((i__648587_648594 < count__648586_648593)){
var kw_648595 = cljs.core._nth.call(null,chunk__648585_648592,i__648587_648594);
style.removeProperty(dommy.utils.as_str.call(null,kw_648595));

var G__648596 = seq__648584_648591;
var G__648597 = chunk__648585_648592;
var G__648598 = count__648586_648593;
var G__648599 = (i__648587_648594 + (1));
seq__648584_648591 = G__648596;
chunk__648585_648592 = G__648597;
count__648586_648593 = G__648598;
i__648587_648594 = G__648599;
continue;
} else {
var temp__4425__auto___648600 = cljs.core.seq.call(null,seq__648584_648591);
if(temp__4425__auto___648600){
var seq__648584_648601__$1 = temp__4425__auto___648600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__648584_648601__$1)){
var c__25014__auto___648602 = cljs.core.chunk_first.call(null,seq__648584_648601__$1);
var G__648603 = cljs.core.chunk_rest.call(null,seq__648584_648601__$1);
var G__648604 = c__25014__auto___648602;
var G__648605 = cljs.core.count.call(null,c__25014__auto___648602);
var G__648606 = (0);
seq__648584_648591 = G__648603;
chunk__648585_648592 = G__648604;
count__648586_648593 = G__648605;
i__648587_648594 = G__648606;
continue;
} else {
var kw_648607 = cljs.core.first.call(null,seq__648584_648601__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_648607));

var G__648608 = cljs.core.next.call(null,seq__648584_648601__$1);
var G__648609 = null;
var G__648610 = (0);
var G__648611 = (0);
seq__648584_648591 = G__648608;
chunk__648585_648592 = G__648609;
count__648586_648593 = G__648610;
i__648587_648594 = G__648611;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq648582){
var G__648583 = cljs.core.first.call(null,seq648582);
var seq648582__$1 = cljs.core.next.call(null,seq648582);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__648583,seq648582__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__25276__auto__ = [];
var len__25269__auto___648620 = arguments.length;
var i__25270__auto___648621 = (0);
while(true){
if((i__25270__auto___648621 < len__25269__auto___648620)){
args__25276__auto__.push((arguments[i__25270__auto___648621]));

var G__648622 = (i__25270__auto___648621 + (1));
i__25270__auto___648621 = G__648622;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__648614_648623 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__648615_648624 = null;
var count__648616_648625 = (0);
var i__648617_648626 = (0);
while(true){
if((i__648617_648626 < count__648616_648625)){
var vec__648618_648627 = cljs.core._nth.call(null,chunk__648615_648624,i__648617_648626);
var k_648628 = cljs.core.nth.call(null,vec__648618_648627,(0),null);
var v_648629 = cljs.core.nth.call(null,vec__648618_648627,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_648628,[cljs.core.str(v_648629),cljs.core.str("px")].join(''));

var G__648630 = seq__648614_648623;
var G__648631 = chunk__648615_648624;
var G__648632 = count__648616_648625;
var G__648633 = (i__648617_648626 + (1));
seq__648614_648623 = G__648630;
chunk__648615_648624 = G__648631;
count__648616_648625 = G__648632;
i__648617_648626 = G__648633;
continue;
} else {
var temp__4425__auto___648634 = cljs.core.seq.call(null,seq__648614_648623);
if(temp__4425__auto___648634){
var seq__648614_648635__$1 = temp__4425__auto___648634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__648614_648635__$1)){
var c__25014__auto___648636 = cljs.core.chunk_first.call(null,seq__648614_648635__$1);
var G__648637 = cljs.core.chunk_rest.call(null,seq__648614_648635__$1);
var G__648638 = c__25014__auto___648636;
var G__648639 = cljs.core.count.call(null,c__25014__auto___648636);
var G__648640 = (0);
seq__648614_648623 = G__648637;
chunk__648615_648624 = G__648638;
count__648616_648625 = G__648639;
i__648617_648626 = G__648640;
continue;
} else {
var vec__648619_648641 = cljs.core.first.call(null,seq__648614_648635__$1);
var k_648642 = cljs.core.nth.call(null,vec__648619_648641,(0),null);
var v_648643 = cljs.core.nth.call(null,vec__648619_648641,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_648642,[cljs.core.str(v_648643),cljs.core.str("px")].join(''));

var G__648644 = cljs.core.next.call(null,seq__648614_648635__$1);
var G__648645 = null;
var G__648646 = (0);
var G__648647 = (0);
seq__648614_648623 = G__648644;
chunk__648615_648624 = G__648645;
count__648616_648625 = G__648646;
i__648617_648626 = G__648647;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq648612){
var G__648613 = cljs.core.first.call(null,seq648612);
var seq648612__$1 = cljs.core.next.call(null,seq648612);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__648613,seq648612__$1);
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
var args648648 = [];
var len__25269__auto___648663 = arguments.length;
var i__25270__auto___648664 = (0);
while(true){
if((i__25270__auto___648664 < len__25269__auto___648663)){
args648648.push((arguments[i__25270__auto___648664]));

var G__648665 = (i__25270__auto___648664 + (1));
i__25270__auto___648664 = G__648665;
continue;
} else {
}
break;
}

var G__648654 = args648648.length;
switch (G__648654) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25288__auto__ = (new cljs.core.IndexedSeq(args648648.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25288__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__648655 = elem;
(G__648655[k__$1] = v);

return G__648655;
} else {
var G__648656 = elem;
G__648656.setAttribute(k__$1,v);

return G__648656;
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

var seq__648657_648667 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__648658_648668 = null;
var count__648659_648669 = (0);
var i__648660_648670 = (0);
while(true){
if((i__648660_648670 < count__648659_648669)){
var vec__648661_648671 = cljs.core._nth.call(null,chunk__648658_648668,i__648660_648670);
var k_648672__$1 = cljs.core.nth.call(null,vec__648661_648671,(0),null);
var v_648673__$1 = cljs.core.nth.call(null,vec__648661_648671,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_648672__$1,v_648673__$1);

var G__648674 = seq__648657_648667;
var G__648675 = chunk__648658_648668;
var G__648676 = count__648659_648669;
var G__648677 = (i__648660_648670 + (1));
seq__648657_648667 = G__648674;
chunk__648658_648668 = G__648675;
count__648659_648669 = G__648676;
i__648660_648670 = G__648677;
continue;
} else {
var temp__4425__auto___648678 = cljs.core.seq.call(null,seq__648657_648667);
if(temp__4425__auto___648678){
var seq__648657_648679__$1 = temp__4425__auto___648678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__648657_648679__$1)){
var c__25014__auto___648680 = cljs.core.chunk_first.call(null,seq__648657_648679__$1);
var G__648681 = cljs.core.chunk_rest.call(null,seq__648657_648679__$1);
var G__648682 = c__25014__auto___648680;
var G__648683 = cljs.core.count.call(null,c__25014__auto___648680);
var G__648684 = (0);
seq__648657_648667 = G__648681;
chunk__648658_648668 = G__648682;
count__648659_648669 = G__648683;
i__648660_648670 = G__648684;
continue;
} else {
var vec__648662_648685 = cljs.core.first.call(null,seq__648657_648679__$1);
var k_648686__$1 = cljs.core.nth.call(null,vec__648662_648685,(0),null);
var v_648687__$1 = cljs.core.nth.call(null,vec__648662_648685,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_648686__$1,v_648687__$1);

var G__648688 = cljs.core.next.call(null,seq__648657_648679__$1);
var G__648689 = null;
var G__648690 = (0);
var G__648691 = (0);
seq__648657_648667 = G__648688;
chunk__648658_648668 = G__648689;
count__648659_648669 = G__648690;
i__648660_648670 = G__648691;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq648649){
var G__648650 = cljs.core.first.call(null,seq648649);
var seq648649__$1 = cljs.core.next.call(null,seq648649);
var G__648651 = cljs.core.first.call(null,seq648649__$1);
var seq648649__$2 = cljs.core.next.call(null,seq648649__$1);
var G__648652 = cljs.core.first.call(null,seq648649__$2);
var seq648649__$3 = cljs.core.next.call(null,seq648649__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__648650,G__648651,G__648652,seq648649__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args648692 = [];
var len__25269__auto___648702 = arguments.length;
var i__25270__auto___648703 = (0);
while(true){
if((i__25270__auto___648703 < len__25269__auto___648702)){
args648692.push((arguments[i__25270__auto___648703]));

var G__648704 = (i__25270__auto___648703 + (1));
i__25270__auto___648703 = G__648704;
continue;
} else {
}
break;
}

var G__648697 = args648692.length;
switch (G__648697) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25288__auto__ = (new cljs.core.IndexedSeq(args648692.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25288__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_648706__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_648706__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_648706__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__648698_648707 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__648699_648708 = null;
var count__648700_648709 = (0);
var i__648701_648710 = (0);
while(true){
if((i__648701_648710 < count__648700_648709)){
var k_648711__$1 = cljs.core._nth.call(null,chunk__648699_648708,i__648701_648710);
dommy.core.remove_attr_BANG_.call(null,elem,k_648711__$1);

var G__648712 = seq__648698_648707;
var G__648713 = chunk__648699_648708;
var G__648714 = count__648700_648709;
var G__648715 = (i__648701_648710 + (1));
seq__648698_648707 = G__648712;
chunk__648699_648708 = G__648713;
count__648700_648709 = G__648714;
i__648701_648710 = G__648715;
continue;
} else {
var temp__4425__auto___648716 = cljs.core.seq.call(null,seq__648698_648707);
if(temp__4425__auto___648716){
var seq__648698_648717__$1 = temp__4425__auto___648716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__648698_648717__$1)){
var c__25014__auto___648718 = cljs.core.chunk_first.call(null,seq__648698_648717__$1);
var G__648719 = cljs.core.chunk_rest.call(null,seq__648698_648717__$1);
var G__648720 = c__25014__auto___648718;
var G__648721 = cljs.core.count.call(null,c__25014__auto___648718);
var G__648722 = (0);
seq__648698_648707 = G__648719;
chunk__648699_648708 = G__648720;
count__648700_648709 = G__648721;
i__648701_648710 = G__648722;
continue;
} else {
var k_648723__$1 = cljs.core.first.call(null,seq__648698_648717__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_648723__$1);

var G__648724 = cljs.core.next.call(null,seq__648698_648717__$1);
var G__648725 = null;
var G__648726 = (0);
var G__648727 = (0);
seq__648698_648707 = G__648724;
chunk__648699_648708 = G__648725;
count__648700_648709 = G__648726;
i__648701_648710 = G__648727;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq648693){
var G__648694 = cljs.core.first.call(null,seq648693);
var seq648693__$1 = cljs.core.next.call(null,seq648693);
var G__648695 = cljs.core.first.call(null,seq648693__$1);
var seq648693__$2 = cljs.core.next.call(null,seq648693__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__648694,G__648695,seq648693__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args648728 = [];
var len__25269__auto___648731 = arguments.length;
var i__25270__auto___648732 = (0);
while(true){
if((i__25270__auto___648732 < len__25269__auto___648731)){
args648728.push((arguments[i__25270__auto___648732]));

var G__648733 = (i__25270__auto___648732 + (1));
i__25270__auto___648732 = G__648733;
continue;
} else {
}
break;
}

var G__648730 = args648728.length;
switch (G__648730) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args648728.length)].join('')));

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
var args648735 = [];
var len__25269__auto___648753 = arguments.length;
var i__25270__auto___648754 = (0);
while(true){
if((i__25270__auto___648754 < len__25269__auto___648753)){
args648735.push((arguments[i__25270__auto___648754]));

var G__648755 = (i__25270__auto___648754 + (1));
i__25270__auto___648754 = G__648755;
continue;
} else {
}
break;
}

var G__648740 = args648735.length;
switch (G__648740) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25288__auto__ = (new cljs.core.IndexedSeq(args648735.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25288__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4423__auto___648757 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___648757)){
var class_list_648758 = temp__4423__auto___648757;
var seq__648741_648759 = cljs.core.seq.call(null,classes__$1);
var chunk__648742_648760 = null;
var count__648743_648761 = (0);
var i__648744_648762 = (0);
while(true){
if((i__648744_648762 < count__648743_648761)){
var c_648763 = cljs.core._nth.call(null,chunk__648742_648760,i__648744_648762);
class_list_648758.add(c_648763);

var G__648764 = seq__648741_648759;
var G__648765 = chunk__648742_648760;
var G__648766 = count__648743_648761;
var G__648767 = (i__648744_648762 + (1));
seq__648741_648759 = G__648764;
chunk__648742_648760 = G__648765;
count__648743_648761 = G__648766;
i__648744_648762 = G__648767;
continue;
} else {
var temp__4425__auto___648768 = cljs.core.seq.call(null,seq__648741_648759);
if(temp__4425__auto___648768){
var seq__648741_648769__$1 = temp__4425__auto___648768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__648741_648769__$1)){
var c__25014__auto___648770 = cljs.core.chunk_first.call(null,seq__648741_648769__$1);
var G__648771 = cljs.core.chunk_rest.call(null,seq__648741_648769__$1);
var G__648772 = c__25014__auto___648770;
var G__648773 = cljs.core.count.call(null,c__25014__auto___648770);
var G__648774 = (0);
seq__648741_648759 = G__648771;
chunk__648742_648760 = G__648772;
count__648743_648761 = G__648773;
i__648744_648762 = G__648774;
continue;
} else {
var c_648775 = cljs.core.first.call(null,seq__648741_648769__$1);
class_list_648758.add(c_648775);

var G__648776 = cljs.core.next.call(null,seq__648741_648769__$1);
var G__648777 = null;
var G__648778 = (0);
var G__648779 = (0);
seq__648741_648759 = G__648776;
chunk__648742_648760 = G__648777;
count__648743_648761 = G__648778;
i__648744_648762 = G__648779;
continue;
}
} else {
}
}
break;
}
} else {
var seq__648745_648780 = cljs.core.seq.call(null,classes__$1);
var chunk__648746_648781 = null;
var count__648747_648782 = (0);
var i__648748_648783 = (0);
while(true){
if((i__648748_648783 < count__648747_648782)){
var c_648784 = cljs.core._nth.call(null,chunk__648746_648781,i__648748_648783);
var class_name_648785 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_648785,c_648784))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_648785 === ""))?c_648784:[cljs.core.str(class_name_648785),cljs.core.str(" "),cljs.core.str(c_648784)].join('')));
}

var G__648786 = seq__648745_648780;
var G__648787 = chunk__648746_648781;
var G__648788 = count__648747_648782;
var G__648789 = (i__648748_648783 + (1));
seq__648745_648780 = G__648786;
chunk__648746_648781 = G__648787;
count__648747_648782 = G__648788;
i__648748_648783 = G__648789;
continue;
} else {
var temp__4425__auto___648790 = cljs.core.seq.call(null,seq__648745_648780);
if(temp__4425__auto___648790){
var seq__648745_648791__$1 = temp__4425__auto___648790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__648745_648791__$1)){
var c__25014__auto___648792 = cljs.core.chunk_first.call(null,seq__648745_648791__$1);
var G__648793 = cljs.core.chunk_rest.call(null,seq__648745_648791__$1);
var G__648794 = c__25014__auto___648792;
var G__648795 = cljs.core.count.call(null,c__25014__auto___648792);
var G__648796 = (0);
seq__648745_648780 = G__648793;
chunk__648746_648781 = G__648794;
count__648747_648782 = G__648795;
i__648748_648783 = G__648796;
continue;
} else {
var c_648797 = cljs.core.first.call(null,seq__648745_648791__$1);
var class_name_648798 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_648798,c_648797))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_648798 === ""))?c_648797:[cljs.core.str(class_name_648798),cljs.core.str(" "),cljs.core.str(c_648797)].join('')));
}

var G__648799 = cljs.core.next.call(null,seq__648745_648791__$1);
var G__648800 = null;
var G__648801 = (0);
var G__648802 = (0);
seq__648745_648780 = G__648799;
chunk__648746_648781 = G__648800;
count__648747_648782 = G__648801;
i__648748_648783 = G__648802;
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
var seq__648749_648803 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__648750_648804 = null;
var count__648751_648805 = (0);
var i__648752_648806 = (0);
while(true){
if((i__648752_648806 < count__648751_648805)){
var c_648807 = cljs.core._nth.call(null,chunk__648750_648804,i__648752_648806);
dommy.core.add_class_BANG_.call(null,elem,c_648807);

var G__648808 = seq__648749_648803;
var G__648809 = chunk__648750_648804;
var G__648810 = count__648751_648805;
var G__648811 = (i__648752_648806 + (1));
seq__648749_648803 = G__648808;
chunk__648750_648804 = G__648809;
count__648751_648805 = G__648810;
i__648752_648806 = G__648811;
continue;
} else {
var temp__4425__auto___648812 = cljs.core.seq.call(null,seq__648749_648803);
if(temp__4425__auto___648812){
var seq__648749_648813__$1 = temp__4425__auto___648812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__648749_648813__$1)){
var c__25014__auto___648814 = cljs.core.chunk_first.call(null,seq__648749_648813__$1);
var G__648815 = cljs.core.chunk_rest.call(null,seq__648749_648813__$1);
var G__648816 = c__25014__auto___648814;
var G__648817 = cljs.core.count.call(null,c__25014__auto___648814);
var G__648818 = (0);
seq__648749_648803 = G__648815;
chunk__648750_648804 = G__648816;
count__648751_648805 = G__648817;
i__648752_648806 = G__648818;
continue;
} else {
var c_648819 = cljs.core.first.call(null,seq__648749_648813__$1);
dommy.core.add_class_BANG_.call(null,elem,c_648819);

var G__648820 = cljs.core.next.call(null,seq__648749_648813__$1);
var G__648821 = null;
var G__648822 = (0);
var G__648823 = (0);
seq__648749_648803 = G__648820;
chunk__648750_648804 = G__648821;
count__648751_648805 = G__648822;
i__648752_648806 = G__648823;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq648736){
var G__648737 = cljs.core.first.call(null,seq648736);
var seq648736__$1 = cljs.core.next.call(null,seq648736);
var G__648738 = cljs.core.first.call(null,seq648736__$1);
var seq648736__$2 = cljs.core.next.call(null,seq648736__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__648737,G__648738,seq648736__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args648824 = [];
var len__25269__auto___648834 = arguments.length;
var i__25270__auto___648835 = (0);
while(true){
if((i__25270__auto___648835 < len__25269__auto___648834)){
args648824.push((arguments[i__25270__auto___648835]));

var G__648836 = (i__25270__auto___648835 + (1));
i__25270__auto___648835 = G__648836;
continue;
} else {
}
break;
}

var G__648829 = args648824.length;
switch (G__648829) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25288__auto__ = (new cljs.core.IndexedSeq(args648824.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25288__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___648838 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___648838)){
var class_list_648839 = temp__4423__auto___648838;
class_list_648839.remove(c__$1);
} else {
var class_name_648840 = dommy.core.class$.call(null,elem);
var new_class_name_648841 = dommy.utils.remove_class_str.call(null,class_name_648840,c__$1);
if((class_name_648840 === new_class_name_648841)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_648841);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__648830 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__648831 = null;
var count__648832 = (0);
var i__648833 = (0);
while(true){
if((i__648833 < count__648832)){
var c = cljs.core._nth.call(null,chunk__648831,i__648833);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__648842 = seq__648830;
var G__648843 = chunk__648831;
var G__648844 = count__648832;
var G__648845 = (i__648833 + (1));
seq__648830 = G__648842;
chunk__648831 = G__648843;
count__648832 = G__648844;
i__648833 = G__648845;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__648830);
if(temp__4425__auto__){
var seq__648830__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__648830__$1)){
var c__25014__auto__ = cljs.core.chunk_first.call(null,seq__648830__$1);
var G__648846 = cljs.core.chunk_rest.call(null,seq__648830__$1);
var G__648847 = c__25014__auto__;
var G__648848 = cljs.core.count.call(null,c__25014__auto__);
var G__648849 = (0);
seq__648830 = G__648846;
chunk__648831 = G__648847;
count__648832 = G__648848;
i__648833 = G__648849;
continue;
} else {
var c = cljs.core.first.call(null,seq__648830__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__648850 = cljs.core.next.call(null,seq__648830__$1);
var G__648851 = null;
var G__648852 = (0);
var G__648853 = (0);
seq__648830 = G__648850;
chunk__648831 = G__648851;
count__648832 = G__648852;
i__648833 = G__648853;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq648825){
var G__648826 = cljs.core.first.call(null,seq648825);
var seq648825__$1 = cljs.core.next.call(null,seq648825);
var G__648827 = cljs.core.first.call(null,seq648825__$1);
var seq648825__$2 = cljs.core.next.call(null,seq648825__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__648826,G__648827,seq648825__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args648854 = [];
var len__25269__auto___648857 = arguments.length;
var i__25270__auto___648858 = (0);
while(true){
if((i__25270__auto___648858 < len__25269__auto___648857)){
args648854.push((arguments[i__25270__auto___648858]));

var G__648859 = (i__25270__auto___648858 + (1));
i__25270__auto___648858 = G__648859;
continue;
} else {
}
break;
}

var G__648856 = args648854.length;
switch (G__648856) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args648854.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___648861 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___648861)){
var class_list_648862 = temp__4423__auto___648861;
class_list_648862.toggle(c__$1);
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
var args648863 = [];
var len__25269__auto___648866 = arguments.length;
var i__25270__auto___648867 = (0);
while(true){
if((i__25270__auto___648867 < len__25269__auto___648866)){
args648863.push((arguments[i__25270__auto___648867]));

var G__648868 = (i__25270__auto___648867 + (1));
i__25270__auto___648867 = G__648868;
continue;
} else {
}
break;
}

var G__648865 = args648863.length;
switch (G__648865) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args648863.length)].join('')));

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
var args648870 = [];
var len__25269__auto___648873 = arguments.length;
var i__25270__auto___648874 = (0);
while(true){
if((i__25270__auto___648874 < len__25269__auto___648873)){
args648870.push((arguments[i__25270__auto___648874]));

var G__648875 = (i__25270__auto___648874 + (1));
i__25270__auto___648874 = G__648875;
continue;
} else {
}
break;
}

var G__648872 = args648870.length;
switch (G__648872) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args648870.length)].join('')));

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
var args648877 = [];
var len__25269__auto___648888 = arguments.length;
var i__25270__auto___648889 = (0);
while(true){
if((i__25270__auto___648889 < len__25269__auto___648888)){
args648877.push((arguments[i__25270__auto___648889]));

var G__648890 = (i__25270__auto___648889 + (1));
i__25270__auto___648889 = G__648890;
continue;
} else {
}
break;
}

var G__648882 = args648877.length;
switch (G__648882) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25288__auto__ = (new cljs.core.IndexedSeq(args648877.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25288__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__648883 = parent;
G__648883.appendChild(child);

return G__648883;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__648884_648892 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__648885_648893 = null;
var count__648886_648894 = (0);
var i__648887_648895 = (0);
while(true){
if((i__648887_648895 < count__648886_648894)){
var c_648896 = cljs.core._nth.call(null,chunk__648885_648893,i__648887_648895);
dommy.core.append_BANG_.call(null,parent,c_648896);

var G__648897 = seq__648884_648892;
var G__648898 = chunk__648885_648893;
var G__648899 = count__648886_648894;
var G__648900 = (i__648887_648895 + (1));
seq__648884_648892 = G__648897;
chunk__648885_648893 = G__648898;
count__648886_648894 = G__648899;
i__648887_648895 = G__648900;
continue;
} else {
var temp__4425__auto___648901 = cljs.core.seq.call(null,seq__648884_648892);
if(temp__4425__auto___648901){
var seq__648884_648902__$1 = temp__4425__auto___648901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__648884_648902__$1)){
var c__25014__auto___648903 = cljs.core.chunk_first.call(null,seq__648884_648902__$1);
var G__648904 = cljs.core.chunk_rest.call(null,seq__648884_648902__$1);
var G__648905 = c__25014__auto___648903;
var G__648906 = cljs.core.count.call(null,c__25014__auto___648903);
var G__648907 = (0);
seq__648884_648892 = G__648904;
chunk__648885_648893 = G__648905;
count__648886_648894 = G__648906;
i__648887_648895 = G__648907;
continue;
} else {
var c_648908 = cljs.core.first.call(null,seq__648884_648902__$1);
dommy.core.append_BANG_.call(null,parent,c_648908);

var G__648909 = cljs.core.next.call(null,seq__648884_648902__$1);
var G__648910 = null;
var G__648911 = (0);
var G__648912 = (0);
seq__648884_648892 = G__648909;
chunk__648885_648893 = G__648910;
count__648886_648894 = G__648911;
i__648887_648895 = G__648912;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq648878){
var G__648879 = cljs.core.first.call(null,seq648878);
var seq648878__$1 = cljs.core.next.call(null,seq648878);
var G__648880 = cljs.core.first.call(null,seq648878__$1);
var seq648878__$2 = cljs.core.next.call(null,seq648878__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__648879,G__648880,seq648878__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args648913 = [];
var len__25269__auto___648924 = arguments.length;
var i__25270__auto___648925 = (0);
while(true){
if((i__25270__auto___648925 < len__25269__auto___648924)){
args648913.push((arguments[i__25270__auto___648925]));

var G__648926 = (i__25270__auto___648925 + (1));
i__25270__auto___648925 = G__648926;
continue;
} else {
}
break;
}

var G__648918 = args648913.length;
switch (G__648918) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25288__auto__ = (new cljs.core.IndexedSeq(args648913.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25288__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__648919 = parent;
G__648919.insertBefore(child,parent.firstChild);

return G__648919;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__648920_648928 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__648921_648929 = null;
var count__648922_648930 = (0);
var i__648923_648931 = (0);
while(true){
if((i__648923_648931 < count__648922_648930)){
var c_648932 = cljs.core._nth.call(null,chunk__648921_648929,i__648923_648931);
dommy.core.prepend_BANG_.call(null,parent,c_648932);

var G__648933 = seq__648920_648928;
var G__648934 = chunk__648921_648929;
var G__648935 = count__648922_648930;
var G__648936 = (i__648923_648931 + (1));
seq__648920_648928 = G__648933;
chunk__648921_648929 = G__648934;
count__648922_648930 = G__648935;
i__648923_648931 = G__648936;
continue;
} else {
var temp__4425__auto___648937 = cljs.core.seq.call(null,seq__648920_648928);
if(temp__4425__auto___648937){
var seq__648920_648938__$1 = temp__4425__auto___648937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__648920_648938__$1)){
var c__25014__auto___648939 = cljs.core.chunk_first.call(null,seq__648920_648938__$1);
var G__648940 = cljs.core.chunk_rest.call(null,seq__648920_648938__$1);
var G__648941 = c__25014__auto___648939;
var G__648942 = cljs.core.count.call(null,c__25014__auto___648939);
var G__648943 = (0);
seq__648920_648928 = G__648940;
chunk__648921_648929 = G__648941;
count__648922_648930 = G__648942;
i__648923_648931 = G__648943;
continue;
} else {
var c_648944 = cljs.core.first.call(null,seq__648920_648938__$1);
dommy.core.prepend_BANG_.call(null,parent,c_648944);

var G__648945 = cljs.core.next.call(null,seq__648920_648938__$1);
var G__648946 = null;
var G__648947 = (0);
var G__648948 = (0);
seq__648920_648928 = G__648945;
chunk__648921_648929 = G__648946;
count__648922_648930 = G__648947;
i__648923_648931 = G__648948;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq648914){
var G__648915 = cljs.core.first.call(null,seq648914);
var seq648914__$1 = cljs.core.next.call(null,seq648914);
var G__648916 = cljs.core.first.call(null,seq648914__$1);
var seq648914__$2 = cljs.core.next.call(null,seq648914__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__648915,G__648916,seq648914__$2);
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
var temp__4423__auto___648949 = other.nextSibling;
if(cljs.core.truth_(temp__4423__auto___648949)){
var next_648950 = temp__4423__auto___648949;
dommy.core.insert_before_BANG_.call(null,elem,next_648950);
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
var args648951 = [];
var len__25269__auto___648955 = arguments.length;
var i__25270__auto___648956 = (0);
while(true){
if((i__25270__auto___648956 < len__25269__auto___648955)){
args648951.push((arguments[i__25270__auto___648956]));

var G__648957 = (i__25270__auto___648956 + (1));
i__25270__auto___648956 = G__648957;
continue;
} else {
}
break;
}

var G__648953 = args648951.length;
switch (G__648953) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args648951.length)].join('')));

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
var G__648954 = p;
G__648954.removeChild(elem);

return G__648954;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__648959){
var vec__648960 = p__648959;
var special_mouse_event = cljs.core.nth.call(null,vec__648960,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__648960,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__648960,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__648960,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__24211__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__24199__auto__ = related_target;
if(cljs.core.truth_(and__24199__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__24199__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__648960,special_mouse_event,real_mouse_event))
});})(vec__648960,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__24199__auto__ = selected_target;
if(cljs.core.truth_(and__24199__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__24199__auto__;
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
var or__24211__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__25276__auto__ = [];
var len__25269__auto___648964 = arguments.length;
var i__25270__auto___648965 = (0);
while(true){
if((i__25270__auto___648965 < len__25269__auto___648964)){
args__25276__auto__.push((arguments[i__25270__auto___648965]));

var G__648966 = (i__25270__auto___648965 + (1));
i__25270__auto___648965 = G__648966;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((2) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25277__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq648961){
var G__648962 = cljs.core.first.call(null,seq648961);
var seq648961__$1 = cljs.core.next.call(null,seq648961);
var G__648963 = cljs.core.first.call(null,seq648961__$1);
var seq648961__$2 = cljs.core.next.call(null,seq648961__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__648962,G__648963,seq648961__$2);
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
var args__25276__auto__ = [];
var len__25269__auto___648992 = arguments.length;
var i__25270__auto___648993 = (0);
while(true){
if((i__25270__auto___648993 < len__25269__auto___648992)){
args__25276__auto__.push((arguments[i__25270__auto___648993]));

var G__648994 = (i__25270__auto___648993 + (1));
i__25270__auto___648993 = G__648994;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__648969_648995 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_648996 = cljs.core.nth.call(null,vec__648969_648995,(0),null);
var selector_648997 = cljs.core.nth.call(null,vec__648969_648995,(1),null);
var seq__648970_648998 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__648977_648999 = null;
var count__648978_649000 = (0);
var i__648979_649001 = (0);
while(true){
if((i__648979_649001 < count__648978_649000)){
var vec__648986_649002 = cljs.core._nth.call(null,chunk__648977_648999,i__648979_649001);
var orig_type_649003 = cljs.core.nth.call(null,vec__648986_649002,(0),null);
var f_649004 = cljs.core.nth.call(null,vec__648986_649002,(1),null);
var seq__648980_649005 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_649003,cljs.core.PersistentArrayMap.fromArray([orig_type_649003,cljs.core.identity], true, false)));
var chunk__648982_649006 = null;
var count__648983_649007 = (0);
var i__648984_649008 = (0);
while(true){
if((i__648984_649008 < count__648983_649007)){
var vec__648987_649009 = cljs.core._nth.call(null,chunk__648982_649006,i__648984_649008);
var actual_type_649010 = cljs.core.nth.call(null,vec__648987_649009,(0),null);
var factory_649011 = cljs.core.nth.call(null,vec__648987_649009,(1),null);
var canonical_f_649012 = (cljs.core.truth_(selector_648997)?cljs.core.partial.call(null,dommy.core.live_listener,elem_648996,selector_648997):cljs.core.identity).call(null,factory_649011.call(null,f_649004));
dommy.core.update_event_listeners_BANG_.call(null,elem_648996,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_648997,actual_type_649010,f_649004], null),canonical_f_649012);

if(cljs.core.truth_(elem_648996.addEventListener)){
elem_648996.addEventListener(cljs.core.name.call(null,actual_type_649010),canonical_f_649012);
} else {
elem_648996.attachEvent(cljs.core.name.call(null,actual_type_649010),canonical_f_649012);
}

var G__649013 = seq__648980_649005;
var G__649014 = chunk__648982_649006;
var G__649015 = count__648983_649007;
var G__649016 = (i__648984_649008 + (1));
seq__648980_649005 = G__649013;
chunk__648982_649006 = G__649014;
count__648983_649007 = G__649015;
i__648984_649008 = G__649016;
continue;
} else {
var temp__4425__auto___649017 = cljs.core.seq.call(null,seq__648980_649005);
if(temp__4425__auto___649017){
var seq__648980_649018__$1 = temp__4425__auto___649017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__648980_649018__$1)){
var c__25014__auto___649019 = cljs.core.chunk_first.call(null,seq__648980_649018__$1);
var G__649020 = cljs.core.chunk_rest.call(null,seq__648980_649018__$1);
var G__649021 = c__25014__auto___649019;
var G__649022 = cljs.core.count.call(null,c__25014__auto___649019);
var G__649023 = (0);
seq__648980_649005 = G__649020;
chunk__648982_649006 = G__649021;
count__648983_649007 = G__649022;
i__648984_649008 = G__649023;
continue;
} else {
var vec__648988_649024 = cljs.core.first.call(null,seq__648980_649018__$1);
var actual_type_649025 = cljs.core.nth.call(null,vec__648988_649024,(0),null);
var factory_649026 = cljs.core.nth.call(null,vec__648988_649024,(1),null);
var canonical_f_649027 = (cljs.core.truth_(selector_648997)?cljs.core.partial.call(null,dommy.core.live_listener,elem_648996,selector_648997):cljs.core.identity).call(null,factory_649026.call(null,f_649004));
dommy.core.update_event_listeners_BANG_.call(null,elem_648996,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_648997,actual_type_649025,f_649004], null),canonical_f_649027);

if(cljs.core.truth_(elem_648996.addEventListener)){
elem_648996.addEventListener(cljs.core.name.call(null,actual_type_649025),canonical_f_649027);
} else {
elem_648996.attachEvent(cljs.core.name.call(null,actual_type_649025),canonical_f_649027);
}

var G__649028 = cljs.core.next.call(null,seq__648980_649018__$1);
var G__649029 = null;
var G__649030 = (0);
var G__649031 = (0);
seq__648980_649005 = G__649028;
chunk__648982_649006 = G__649029;
count__648983_649007 = G__649030;
i__648984_649008 = G__649031;
continue;
}
} else {
}
}
break;
}

var G__649032 = seq__648970_648998;
var G__649033 = chunk__648977_648999;
var G__649034 = count__648978_649000;
var G__649035 = (i__648979_649001 + (1));
seq__648970_648998 = G__649032;
chunk__648977_648999 = G__649033;
count__648978_649000 = G__649034;
i__648979_649001 = G__649035;
continue;
} else {
var temp__4425__auto___649036 = cljs.core.seq.call(null,seq__648970_648998);
if(temp__4425__auto___649036){
var seq__648970_649037__$1 = temp__4425__auto___649036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__648970_649037__$1)){
var c__25014__auto___649038 = cljs.core.chunk_first.call(null,seq__648970_649037__$1);
var G__649039 = cljs.core.chunk_rest.call(null,seq__648970_649037__$1);
var G__649040 = c__25014__auto___649038;
var G__649041 = cljs.core.count.call(null,c__25014__auto___649038);
var G__649042 = (0);
seq__648970_648998 = G__649039;
chunk__648977_648999 = G__649040;
count__648978_649000 = G__649041;
i__648979_649001 = G__649042;
continue;
} else {
var vec__648989_649043 = cljs.core.first.call(null,seq__648970_649037__$1);
var orig_type_649044 = cljs.core.nth.call(null,vec__648989_649043,(0),null);
var f_649045 = cljs.core.nth.call(null,vec__648989_649043,(1),null);
var seq__648971_649046 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_649044,cljs.core.PersistentArrayMap.fromArray([orig_type_649044,cljs.core.identity], true, false)));
var chunk__648973_649047 = null;
var count__648974_649048 = (0);
var i__648975_649049 = (0);
while(true){
if((i__648975_649049 < count__648974_649048)){
var vec__648990_649050 = cljs.core._nth.call(null,chunk__648973_649047,i__648975_649049);
var actual_type_649051 = cljs.core.nth.call(null,vec__648990_649050,(0),null);
var factory_649052 = cljs.core.nth.call(null,vec__648990_649050,(1),null);
var canonical_f_649053 = (cljs.core.truth_(selector_648997)?cljs.core.partial.call(null,dommy.core.live_listener,elem_648996,selector_648997):cljs.core.identity).call(null,factory_649052.call(null,f_649045));
dommy.core.update_event_listeners_BANG_.call(null,elem_648996,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_648997,actual_type_649051,f_649045], null),canonical_f_649053);

if(cljs.core.truth_(elem_648996.addEventListener)){
elem_648996.addEventListener(cljs.core.name.call(null,actual_type_649051),canonical_f_649053);
} else {
elem_648996.attachEvent(cljs.core.name.call(null,actual_type_649051),canonical_f_649053);
}

var G__649054 = seq__648971_649046;
var G__649055 = chunk__648973_649047;
var G__649056 = count__648974_649048;
var G__649057 = (i__648975_649049 + (1));
seq__648971_649046 = G__649054;
chunk__648973_649047 = G__649055;
count__648974_649048 = G__649056;
i__648975_649049 = G__649057;
continue;
} else {
var temp__4425__auto___649058__$1 = cljs.core.seq.call(null,seq__648971_649046);
if(temp__4425__auto___649058__$1){
var seq__648971_649059__$1 = temp__4425__auto___649058__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__648971_649059__$1)){
var c__25014__auto___649060 = cljs.core.chunk_first.call(null,seq__648971_649059__$1);
var G__649061 = cljs.core.chunk_rest.call(null,seq__648971_649059__$1);
var G__649062 = c__25014__auto___649060;
var G__649063 = cljs.core.count.call(null,c__25014__auto___649060);
var G__649064 = (0);
seq__648971_649046 = G__649061;
chunk__648973_649047 = G__649062;
count__648974_649048 = G__649063;
i__648975_649049 = G__649064;
continue;
} else {
var vec__648991_649065 = cljs.core.first.call(null,seq__648971_649059__$1);
var actual_type_649066 = cljs.core.nth.call(null,vec__648991_649065,(0),null);
var factory_649067 = cljs.core.nth.call(null,vec__648991_649065,(1),null);
var canonical_f_649068 = (cljs.core.truth_(selector_648997)?cljs.core.partial.call(null,dommy.core.live_listener,elem_648996,selector_648997):cljs.core.identity).call(null,factory_649067.call(null,f_649045));
dommy.core.update_event_listeners_BANG_.call(null,elem_648996,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_648997,actual_type_649066,f_649045], null),canonical_f_649068);

if(cljs.core.truth_(elem_648996.addEventListener)){
elem_648996.addEventListener(cljs.core.name.call(null,actual_type_649066),canonical_f_649068);
} else {
elem_648996.attachEvent(cljs.core.name.call(null,actual_type_649066),canonical_f_649068);
}

var G__649069 = cljs.core.next.call(null,seq__648971_649059__$1);
var G__649070 = null;
var G__649071 = (0);
var G__649072 = (0);
seq__648971_649046 = G__649069;
chunk__648973_649047 = G__649070;
count__648974_649048 = G__649071;
i__648975_649049 = G__649072;
continue;
}
} else {
}
}
break;
}

var G__649073 = cljs.core.next.call(null,seq__648970_649037__$1);
var G__649074 = null;
var G__649075 = (0);
var G__649076 = (0);
seq__648970_648998 = G__649073;
chunk__648977_648999 = G__649074;
count__648978_649000 = G__649075;
i__648979_649001 = G__649076;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq648967){
var G__648968 = cljs.core.first.call(null,seq648967);
var seq648967__$1 = cljs.core.next.call(null,seq648967);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__648968,seq648967__$1);
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
var args__25276__auto__ = [];
var len__25269__auto___649102 = arguments.length;
var i__25270__auto___649103 = (0);
while(true){
if((i__25270__auto___649103 < len__25269__auto___649102)){
args__25276__auto__.push((arguments[i__25270__auto___649103]));

var G__649104 = (i__25270__auto___649103 + (1));
i__25270__auto___649103 = G__649104;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__649079_649105 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_649106 = cljs.core.nth.call(null,vec__649079_649105,(0),null);
var selector_649107 = cljs.core.nth.call(null,vec__649079_649105,(1),null);
var seq__649080_649108 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__649087_649109 = null;
var count__649088_649110 = (0);
var i__649089_649111 = (0);
while(true){
if((i__649089_649111 < count__649088_649110)){
var vec__649096_649112 = cljs.core._nth.call(null,chunk__649087_649109,i__649089_649111);
var orig_type_649113 = cljs.core.nth.call(null,vec__649096_649112,(0),null);
var f_649114 = cljs.core.nth.call(null,vec__649096_649112,(1),null);
var seq__649090_649115 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_649113,cljs.core.PersistentArrayMap.fromArray([orig_type_649113,cljs.core.identity], true, false)));
var chunk__649092_649116 = null;
var count__649093_649117 = (0);
var i__649094_649118 = (0);
while(true){
if((i__649094_649118 < count__649093_649117)){
var vec__649097_649119 = cljs.core._nth.call(null,chunk__649092_649116,i__649094_649118);
var actual_type_649120 = cljs.core.nth.call(null,vec__649097_649119,(0),null);
var __649121 = cljs.core.nth.call(null,vec__649097_649119,(1),null);
var keys_649122 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_649107,actual_type_649120,f_649114], null);
var canonical_f_649123 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_649106),keys_649122);
dommy.core.update_event_listeners_BANG_.call(null,elem_649106,dommy.utils.dissoc_in,keys_649122);

if(cljs.core.truth_(elem_649106.removeEventListener)){
elem_649106.removeEventListener(cljs.core.name.call(null,actual_type_649120),canonical_f_649123);
} else {
elem_649106.detachEvent(cljs.core.name.call(null,actual_type_649120),canonical_f_649123);
}

var G__649124 = seq__649090_649115;
var G__649125 = chunk__649092_649116;
var G__649126 = count__649093_649117;
var G__649127 = (i__649094_649118 + (1));
seq__649090_649115 = G__649124;
chunk__649092_649116 = G__649125;
count__649093_649117 = G__649126;
i__649094_649118 = G__649127;
continue;
} else {
var temp__4425__auto___649128 = cljs.core.seq.call(null,seq__649090_649115);
if(temp__4425__auto___649128){
var seq__649090_649129__$1 = temp__4425__auto___649128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__649090_649129__$1)){
var c__25014__auto___649130 = cljs.core.chunk_first.call(null,seq__649090_649129__$1);
var G__649131 = cljs.core.chunk_rest.call(null,seq__649090_649129__$1);
var G__649132 = c__25014__auto___649130;
var G__649133 = cljs.core.count.call(null,c__25014__auto___649130);
var G__649134 = (0);
seq__649090_649115 = G__649131;
chunk__649092_649116 = G__649132;
count__649093_649117 = G__649133;
i__649094_649118 = G__649134;
continue;
} else {
var vec__649098_649135 = cljs.core.first.call(null,seq__649090_649129__$1);
var actual_type_649136 = cljs.core.nth.call(null,vec__649098_649135,(0),null);
var __649137 = cljs.core.nth.call(null,vec__649098_649135,(1),null);
var keys_649138 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_649107,actual_type_649136,f_649114], null);
var canonical_f_649139 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_649106),keys_649138);
dommy.core.update_event_listeners_BANG_.call(null,elem_649106,dommy.utils.dissoc_in,keys_649138);

if(cljs.core.truth_(elem_649106.removeEventListener)){
elem_649106.removeEventListener(cljs.core.name.call(null,actual_type_649136),canonical_f_649139);
} else {
elem_649106.detachEvent(cljs.core.name.call(null,actual_type_649136),canonical_f_649139);
}

var G__649140 = cljs.core.next.call(null,seq__649090_649129__$1);
var G__649141 = null;
var G__649142 = (0);
var G__649143 = (0);
seq__649090_649115 = G__649140;
chunk__649092_649116 = G__649141;
count__649093_649117 = G__649142;
i__649094_649118 = G__649143;
continue;
}
} else {
}
}
break;
}

var G__649144 = seq__649080_649108;
var G__649145 = chunk__649087_649109;
var G__649146 = count__649088_649110;
var G__649147 = (i__649089_649111 + (1));
seq__649080_649108 = G__649144;
chunk__649087_649109 = G__649145;
count__649088_649110 = G__649146;
i__649089_649111 = G__649147;
continue;
} else {
var temp__4425__auto___649148 = cljs.core.seq.call(null,seq__649080_649108);
if(temp__4425__auto___649148){
var seq__649080_649149__$1 = temp__4425__auto___649148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__649080_649149__$1)){
var c__25014__auto___649150 = cljs.core.chunk_first.call(null,seq__649080_649149__$1);
var G__649151 = cljs.core.chunk_rest.call(null,seq__649080_649149__$1);
var G__649152 = c__25014__auto___649150;
var G__649153 = cljs.core.count.call(null,c__25014__auto___649150);
var G__649154 = (0);
seq__649080_649108 = G__649151;
chunk__649087_649109 = G__649152;
count__649088_649110 = G__649153;
i__649089_649111 = G__649154;
continue;
} else {
var vec__649099_649155 = cljs.core.first.call(null,seq__649080_649149__$1);
var orig_type_649156 = cljs.core.nth.call(null,vec__649099_649155,(0),null);
var f_649157 = cljs.core.nth.call(null,vec__649099_649155,(1),null);
var seq__649081_649158 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_649156,cljs.core.PersistentArrayMap.fromArray([orig_type_649156,cljs.core.identity], true, false)));
var chunk__649083_649159 = null;
var count__649084_649160 = (0);
var i__649085_649161 = (0);
while(true){
if((i__649085_649161 < count__649084_649160)){
var vec__649100_649162 = cljs.core._nth.call(null,chunk__649083_649159,i__649085_649161);
var actual_type_649163 = cljs.core.nth.call(null,vec__649100_649162,(0),null);
var __649164 = cljs.core.nth.call(null,vec__649100_649162,(1),null);
var keys_649165 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_649107,actual_type_649163,f_649157], null);
var canonical_f_649166 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_649106),keys_649165);
dommy.core.update_event_listeners_BANG_.call(null,elem_649106,dommy.utils.dissoc_in,keys_649165);

if(cljs.core.truth_(elem_649106.removeEventListener)){
elem_649106.removeEventListener(cljs.core.name.call(null,actual_type_649163),canonical_f_649166);
} else {
elem_649106.detachEvent(cljs.core.name.call(null,actual_type_649163),canonical_f_649166);
}

var G__649167 = seq__649081_649158;
var G__649168 = chunk__649083_649159;
var G__649169 = count__649084_649160;
var G__649170 = (i__649085_649161 + (1));
seq__649081_649158 = G__649167;
chunk__649083_649159 = G__649168;
count__649084_649160 = G__649169;
i__649085_649161 = G__649170;
continue;
} else {
var temp__4425__auto___649171__$1 = cljs.core.seq.call(null,seq__649081_649158);
if(temp__4425__auto___649171__$1){
var seq__649081_649172__$1 = temp__4425__auto___649171__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__649081_649172__$1)){
var c__25014__auto___649173 = cljs.core.chunk_first.call(null,seq__649081_649172__$1);
var G__649174 = cljs.core.chunk_rest.call(null,seq__649081_649172__$1);
var G__649175 = c__25014__auto___649173;
var G__649176 = cljs.core.count.call(null,c__25014__auto___649173);
var G__649177 = (0);
seq__649081_649158 = G__649174;
chunk__649083_649159 = G__649175;
count__649084_649160 = G__649176;
i__649085_649161 = G__649177;
continue;
} else {
var vec__649101_649178 = cljs.core.first.call(null,seq__649081_649172__$1);
var actual_type_649179 = cljs.core.nth.call(null,vec__649101_649178,(0),null);
var __649180 = cljs.core.nth.call(null,vec__649101_649178,(1),null);
var keys_649181 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_649107,actual_type_649179,f_649157], null);
var canonical_f_649182 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_649106),keys_649181);
dommy.core.update_event_listeners_BANG_.call(null,elem_649106,dommy.utils.dissoc_in,keys_649181);

if(cljs.core.truth_(elem_649106.removeEventListener)){
elem_649106.removeEventListener(cljs.core.name.call(null,actual_type_649179),canonical_f_649182);
} else {
elem_649106.detachEvent(cljs.core.name.call(null,actual_type_649179),canonical_f_649182);
}

var G__649183 = cljs.core.next.call(null,seq__649081_649172__$1);
var G__649184 = null;
var G__649185 = (0);
var G__649186 = (0);
seq__649081_649158 = G__649183;
chunk__649083_649159 = G__649184;
count__649084_649160 = G__649185;
i__649085_649161 = G__649186;
continue;
}
} else {
}
}
break;
}

var G__649187 = cljs.core.next.call(null,seq__649080_649149__$1);
var G__649188 = null;
var G__649189 = (0);
var G__649190 = (0);
seq__649080_649108 = G__649187;
chunk__649087_649109 = G__649188;
count__649088_649110 = G__649189;
i__649089_649111 = G__649190;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq649077){
var G__649078 = cljs.core.first.call(null,seq649077);
var seq649077__$1 = cljs.core.next.call(null,seq649077);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__649078,seq649077__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__25276__auto__ = [];
var len__25269__auto___649200 = arguments.length;
var i__25270__auto___649201 = (0);
while(true){
if((i__25270__auto___649201 < len__25269__auto___649200)){
args__25276__auto__.push((arguments[i__25270__auto___649201]));

var G__649202 = (i__25270__auto___649201 + (1));
i__25270__auto___649201 = G__649202;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__649193_649203 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_649204 = cljs.core.nth.call(null,vec__649193_649203,(0),null);
var selector_649205 = cljs.core.nth.call(null,vec__649193_649203,(1),null);
var seq__649194_649206 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__649195_649207 = null;
var count__649196_649208 = (0);
var i__649197_649209 = (0);
while(true){
if((i__649197_649209 < count__649196_649208)){
var vec__649198_649210 = cljs.core._nth.call(null,chunk__649195_649207,i__649197_649209);
var type_649211 = cljs.core.nth.call(null,vec__649198_649210,(0),null);
var f_649212 = cljs.core.nth.call(null,vec__649198_649210,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_649211,((function (seq__649194_649206,chunk__649195_649207,count__649196_649208,i__649197_649209,vec__649198_649210,type_649211,f_649212,vec__649193_649203,elem_649204,selector_649205){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_649211,dommy$core$this_fn);

return f_649212.call(null,e);
});})(seq__649194_649206,chunk__649195_649207,count__649196_649208,i__649197_649209,vec__649198_649210,type_649211,f_649212,vec__649193_649203,elem_649204,selector_649205))
);

var G__649213 = seq__649194_649206;
var G__649214 = chunk__649195_649207;
var G__649215 = count__649196_649208;
var G__649216 = (i__649197_649209 + (1));
seq__649194_649206 = G__649213;
chunk__649195_649207 = G__649214;
count__649196_649208 = G__649215;
i__649197_649209 = G__649216;
continue;
} else {
var temp__4425__auto___649217 = cljs.core.seq.call(null,seq__649194_649206);
if(temp__4425__auto___649217){
var seq__649194_649218__$1 = temp__4425__auto___649217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__649194_649218__$1)){
var c__25014__auto___649219 = cljs.core.chunk_first.call(null,seq__649194_649218__$1);
var G__649220 = cljs.core.chunk_rest.call(null,seq__649194_649218__$1);
var G__649221 = c__25014__auto___649219;
var G__649222 = cljs.core.count.call(null,c__25014__auto___649219);
var G__649223 = (0);
seq__649194_649206 = G__649220;
chunk__649195_649207 = G__649221;
count__649196_649208 = G__649222;
i__649197_649209 = G__649223;
continue;
} else {
var vec__649199_649224 = cljs.core.first.call(null,seq__649194_649218__$1);
var type_649225 = cljs.core.nth.call(null,vec__649199_649224,(0),null);
var f_649226 = cljs.core.nth.call(null,vec__649199_649224,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_649225,((function (seq__649194_649206,chunk__649195_649207,count__649196_649208,i__649197_649209,vec__649199_649224,type_649225,f_649226,seq__649194_649218__$1,temp__4425__auto___649217,vec__649193_649203,elem_649204,selector_649205){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_649225,dommy$core$this_fn);

return f_649226.call(null,e);
});})(seq__649194_649206,chunk__649195_649207,count__649196_649208,i__649197_649209,vec__649199_649224,type_649225,f_649226,seq__649194_649218__$1,temp__4425__auto___649217,vec__649193_649203,elem_649204,selector_649205))
);

var G__649227 = cljs.core.next.call(null,seq__649194_649218__$1);
var G__649228 = null;
var G__649229 = (0);
var G__649230 = (0);
seq__649194_649206 = G__649227;
chunk__649195_649207 = G__649228;
count__649196_649208 = G__649229;
i__649197_649209 = G__649230;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq649191){
var G__649192 = cljs.core.first.call(null,seq649191);
var seq649191__$1 = cljs.core.next.call(null,seq649191);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__649192,seq649191__$1);
});

//# sourceMappingURL=core.js.map