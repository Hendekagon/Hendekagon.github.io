// Compiled by ClojureScript 1.8.34 {}
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
var or__35191__auto__ = elem.textContent;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
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
var args455379 = [];
var len__36260__auto___455389 = arguments.length;
var i__36261__auto___455390 = (0);
while(true){
if((i__36261__auto___455390 < len__36260__auto___455389)){
args455379.push((arguments[i__36261__auto___455390]));

var G__455391 = (i__36261__auto___455390 + (1));
i__36261__auto___455390 = G__455391;
continue;
} else {
}
break;
}

var G__455384 = args455379.length;
switch (G__455384) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args455379.length)].join('')));

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
var args455413 = [];
var len__36260__auto___455420 = arguments.length;
var i__36261__auto___455421 = (0);
while(true){
if((i__36261__auto___455421 < len__36260__auto___455420)){
args455413.push((arguments[i__36261__auto___455421]));

var G__455424 = (i__36261__auto___455421 + (1));
i__36261__auto___455421 = G__455424;
continue;
} else {
}
break;
}

var G__455416 = args455413.length;
switch (G__455416) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args455413.length)].join('')));

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
var args455427 = [];
var len__36260__auto___455434 = arguments.length;
var i__36261__auto___455435 = (0);
while(true){
if((i__36261__auto___455435 < len__36260__auto___455434)){
args455427.push((arguments[i__36261__auto___455435]));

var G__455437 = (i__36261__auto___455435 + (1));
i__36261__auto___455435 = G__455437;
continue;
} else {
}
break;
}

var G__455432 = args455427.length;
switch (G__455432) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args455427.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__455426_SHARP_){
return !((p1__455426_SHARP_ === base));
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
var args__36267__auto__ = [];
var len__36260__auto___455466 = arguments.length;
var i__36261__auto___455467 = (0);
while(true){
if((i__36261__auto___455467 < len__36260__auto___455466)){
args__36267__auto__.push((arguments[i__36261__auto___455467]));

var G__455468 = (i__36261__auto___455467 + (1));
i__36261__auto___455467 = G__455468;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__455458_455478 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__455459_455479 = null;
var count__455460_455480 = (0);
var i__455461_455481 = (0);
while(true){
if((i__455461_455481 < count__455460_455480)){
var vec__455463_455485 = cljs.core._nth.call(null,chunk__455459_455479,i__455461_455481);
var k_455486 = cljs.core.nth.call(null,vec__455463_455485,(0),null);
var v_455487 = cljs.core.nth.call(null,vec__455463_455485,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_455486),v_455487);

var G__455489 = seq__455458_455478;
var G__455490 = chunk__455459_455479;
var G__455491 = count__455460_455480;
var G__455492 = (i__455461_455481 + (1));
seq__455458_455478 = G__455489;
chunk__455459_455479 = G__455490;
count__455460_455480 = G__455491;
i__455461_455481 = G__455492;
continue;
} else {
var temp__4657__auto___455493 = cljs.core.seq.call(null,seq__455458_455478);
if(temp__4657__auto___455493){
var seq__455458_455494__$1 = temp__4657__auto___455493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__455458_455494__$1)){
var c__36002__auto___455495 = cljs.core.chunk_first.call(null,seq__455458_455494__$1);
var G__455496 = cljs.core.chunk_rest.call(null,seq__455458_455494__$1);
var G__455497 = c__36002__auto___455495;
var G__455498 = cljs.core.count.call(null,c__36002__auto___455495);
var G__455499 = (0);
seq__455458_455478 = G__455496;
chunk__455459_455479 = G__455497;
count__455460_455480 = G__455498;
i__455461_455481 = G__455499;
continue;
} else {
var vec__455464_455500 = cljs.core.first.call(null,seq__455458_455494__$1);
var k_455501 = cljs.core.nth.call(null,vec__455464_455500,(0),null);
var v_455502 = cljs.core.nth.call(null,vec__455464_455500,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_455501),v_455502);

var G__455503 = cljs.core.next.call(null,seq__455458_455494__$1);
var G__455504 = null;
var G__455505 = (0);
var G__455506 = (0);
seq__455458_455478 = G__455503;
chunk__455459_455479 = G__455504;
count__455460_455480 = G__455505;
i__455461_455481 = G__455506;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq455455){
var G__455456 = cljs.core.first.call(null,seq455455);
var seq455455__$1 = cljs.core.next.call(null,seq455455);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__455456,seq455455__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__36267__auto__ = [];
var len__36260__auto___455515 = arguments.length;
var i__36261__auto___455516 = (0);
while(true){
if((i__36261__auto___455516 < len__36260__auto___455515)){
args__36267__auto__.push((arguments[i__36261__auto___455516]));

var G__455517 = (i__36261__auto___455516 + (1));
i__36261__auto___455516 = G__455517;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__455511_455520 = cljs.core.seq.call(null,keywords);
var chunk__455512_455521 = null;
var count__455513_455522 = (0);
var i__455514_455523 = (0);
while(true){
if((i__455514_455523 < count__455513_455522)){
var kw_455524 = cljs.core._nth.call(null,chunk__455512_455521,i__455514_455523);
style.removeProperty(dommy.utils.as_str.call(null,kw_455524));

var G__455525 = seq__455511_455520;
var G__455526 = chunk__455512_455521;
var G__455527 = count__455513_455522;
var G__455528 = (i__455514_455523 + (1));
seq__455511_455520 = G__455525;
chunk__455512_455521 = G__455526;
count__455513_455522 = G__455527;
i__455514_455523 = G__455528;
continue;
} else {
var temp__4657__auto___455529 = cljs.core.seq.call(null,seq__455511_455520);
if(temp__4657__auto___455529){
var seq__455511_455530__$1 = temp__4657__auto___455529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__455511_455530__$1)){
var c__36002__auto___455531 = cljs.core.chunk_first.call(null,seq__455511_455530__$1);
var G__455532 = cljs.core.chunk_rest.call(null,seq__455511_455530__$1);
var G__455533 = c__36002__auto___455531;
var G__455534 = cljs.core.count.call(null,c__36002__auto___455531);
var G__455535 = (0);
seq__455511_455520 = G__455532;
chunk__455512_455521 = G__455533;
count__455513_455522 = G__455534;
i__455514_455523 = G__455535;
continue;
} else {
var kw_455536 = cljs.core.first.call(null,seq__455511_455530__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_455536));

var G__455537 = cljs.core.next.call(null,seq__455511_455530__$1);
var G__455538 = null;
var G__455539 = (0);
var G__455540 = (0);
seq__455511_455520 = G__455537;
chunk__455512_455521 = G__455538;
count__455513_455522 = G__455539;
i__455514_455523 = G__455540;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq455509){
var G__455510 = cljs.core.first.call(null,seq455509);
var seq455509__$1 = cljs.core.next.call(null,seq455509);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__455510,seq455509__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__36267__auto__ = [];
var len__36260__auto___455563 = arguments.length;
var i__36261__auto___455564 = (0);
while(true){
if((i__36261__auto___455564 < len__36260__auto___455563)){
args__36267__auto__.push((arguments[i__36261__auto___455564]));

var G__455569 = (i__36261__auto___455564 + (1));
i__36261__auto___455564 = G__455569;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__455550_455582 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__455551_455583 = null;
var count__455552_455584 = (0);
var i__455553_455585 = (0);
while(true){
if((i__455553_455585 < count__455552_455584)){
var vec__455554_455588 = cljs.core._nth.call(null,chunk__455551_455583,i__455553_455585);
var k_455589 = cljs.core.nth.call(null,vec__455554_455588,(0),null);
var v_455590 = cljs.core.nth.call(null,vec__455554_455588,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_455589,[cljs.core.str(v_455590),cljs.core.str("px")].join(''));

var G__455596 = seq__455550_455582;
var G__455597 = chunk__455551_455583;
var G__455598 = count__455552_455584;
var G__455599 = (i__455553_455585 + (1));
seq__455550_455582 = G__455596;
chunk__455551_455583 = G__455597;
count__455552_455584 = G__455598;
i__455553_455585 = G__455599;
continue;
} else {
var temp__4657__auto___455602 = cljs.core.seq.call(null,seq__455550_455582);
if(temp__4657__auto___455602){
var seq__455550_455607__$1 = temp__4657__auto___455602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__455550_455607__$1)){
var c__36002__auto___455608 = cljs.core.chunk_first.call(null,seq__455550_455607__$1);
var G__455609 = cljs.core.chunk_rest.call(null,seq__455550_455607__$1);
var G__455610 = c__36002__auto___455608;
var G__455611 = cljs.core.count.call(null,c__36002__auto___455608);
var G__455612 = (0);
seq__455550_455582 = G__455609;
chunk__455551_455583 = G__455610;
count__455552_455584 = G__455611;
i__455553_455585 = G__455612;
continue;
} else {
var vec__455561_455613 = cljs.core.first.call(null,seq__455550_455607__$1);
var k_455614 = cljs.core.nth.call(null,vec__455561_455613,(0),null);
var v_455615 = cljs.core.nth.call(null,vec__455561_455613,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_455614,[cljs.core.str(v_455615),cljs.core.str("px")].join(''));

var G__455616 = cljs.core.next.call(null,seq__455550_455607__$1);
var G__455617 = null;
var G__455618 = (0);
var G__455619 = (0);
seq__455550_455582 = G__455616;
chunk__455551_455583 = G__455617;
count__455552_455584 = G__455618;
i__455553_455585 = G__455619;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq455541){
var G__455542 = cljs.core.first.call(null,seq455541);
var seq455541__$1 = cljs.core.next.call(null,seq455541);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__455542,seq455541__$1);
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
var args455624 = [];
var len__36260__auto___455640 = arguments.length;
var i__36261__auto___455641 = (0);
while(true){
if((i__36261__auto___455641 < len__36260__auto___455640)){
args455624.push((arguments[i__36261__auto___455641]));

var G__455642 = (i__36261__auto___455641 + (1));
i__36261__auto___455641 = G__455642;
continue;
} else {
}
break;
}

var G__455630 = args455624.length;
switch (G__455630) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args455624.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36279__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__455631 = elem;
(G__455631[k__$1] = v);

return G__455631;
} else {
var G__455632 = elem;
G__455632.setAttribute(k__$1,v);

return G__455632;
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

var seq__455633_455656 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__455634_455657 = null;
var count__455635_455658 = (0);
var i__455636_455659 = (0);
while(true){
if((i__455636_455659 < count__455635_455658)){
var vec__455637_455662 = cljs.core._nth.call(null,chunk__455634_455657,i__455636_455659);
var k_455663__$1 = cljs.core.nth.call(null,vec__455637_455662,(0),null);
var v_455664__$1 = cljs.core.nth.call(null,vec__455637_455662,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_455663__$1,v_455664__$1);

var G__455673 = seq__455633_455656;
var G__455674 = chunk__455634_455657;
var G__455675 = count__455635_455658;
var G__455676 = (i__455636_455659 + (1));
seq__455633_455656 = G__455673;
chunk__455634_455657 = G__455674;
count__455635_455658 = G__455675;
i__455636_455659 = G__455676;
continue;
} else {
var temp__4657__auto___455679 = cljs.core.seq.call(null,seq__455633_455656);
if(temp__4657__auto___455679){
var seq__455633_455680__$1 = temp__4657__auto___455679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__455633_455680__$1)){
var c__36002__auto___455681 = cljs.core.chunk_first.call(null,seq__455633_455680__$1);
var G__455682 = cljs.core.chunk_rest.call(null,seq__455633_455680__$1);
var G__455683 = c__36002__auto___455681;
var G__455684 = cljs.core.count.call(null,c__36002__auto___455681);
var G__455685 = (0);
seq__455633_455656 = G__455682;
chunk__455634_455657 = G__455683;
count__455635_455658 = G__455684;
i__455636_455659 = G__455685;
continue;
} else {
var vec__455639_455687 = cljs.core.first.call(null,seq__455633_455680__$1);
var k_455688__$1 = cljs.core.nth.call(null,vec__455639_455687,(0),null);
var v_455689__$1 = cljs.core.nth.call(null,vec__455639_455687,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_455688__$1,v_455689__$1);

var G__455691 = cljs.core.next.call(null,seq__455633_455680__$1);
var G__455692 = null;
var G__455693 = (0);
var G__455694 = (0);
seq__455633_455656 = G__455691;
chunk__455634_455657 = G__455692;
count__455635_455658 = G__455693;
i__455636_455659 = G__455694;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq455625){
var G__455626 = cljs.core.first.call(null,seq455625);
var seq455625__$1 = cljs.core.next.call(null,seq455625);
var G__455627 = cljs.core.first.call(null,seq455625__$1);
var seq455625__$2 = cljs.core.next.call(null,seq455625__$1);
var G__455628 = cljs.core.first.call(null,seq455625__$2);
var seq455625__$3 = cljs.core.next.call(null,seq455625__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__455626,G__455627,G__455628,seq455625__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args455709 = [];
var len__36260__auto___455723 = arguments.length;
var i__36261__auto___455724 = (0);
while(true){
if((i__36261__auto___455724 < len__36260__auto___455723)){
args455709.push((arguments[i__36261__auto___455724]));

var G__455725 = (i__36261__auto___455724 + (1));
i__36261__auto___455724 = G__455725;
continue;
} else {
}
break;
}

var G__455718 = args455709.length;
switch (G__455718) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args455709.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_455741__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_455741__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_455741__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__455719_455748 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__455720_455749 = null;
var count__455721_455750 = (0);
var i__455722_455751 = (0);
while(true){
if((i__455722_455751 < count__455721_455750)){
var k_455759__$1 = cljs.core._nth.call(null,chunk__455720_455749,i__455722_455751);
dommy.core.remove_attr_BANG_.call(null,elem,k_455759__$1);

var G__455766 = seq__455719_455748;
var G__455767 = chunk__455720_455749;
var G__455768 = count__455721_455750;
var G__455769 = (i__455722_455751 + (1));
seq__455719_455748 = G__455766;
chunk__455720_455749 = G__455767;
count__455721_455750 = G__455768;
i__455722_455751 = G__455769;
continue;
} else {
var temp__4657__auto___455777 = cljs.core.seq.call(null,seq__455719_455748);
if(temp__4657__auto___455777){
var seq__455719_455779__$1 = temp__4657__auto___455777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__455719_455779__$1)){
var c__36002__auto___455782 = cljs.core.chunk_first.call(null,seq__455719_455779__$1);
var G__455783 = cljs.core.chunk_rest.call(null,seq__455719_455779__$1);
var G__455784 = c__36002__auto___455782;
var G__455785 = cljs.core.count.call(null,c__36002__auto___455782);
var G__455786 = (0);
seq__455719_455748 = G__455783;
chunk__455720_455749 = G__455784;
count__455721_455750 = G__455785;
i__455722_455751 = G__455786;
continue;
} else {
var k_455787__$1 = cljs.core.first.call(null,seq__455719_455779__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_455787__$1);

var G__455788 = cljs.core.next.call(null,seq__455719_455779__$1);
var G__455789 = null;
var G__455790 = (0);
var G__455791 = (0);
seq__455719_455748 = G__455788;
chunk__455720_455749 = G__455789;
count__455721_455750 = G__455790;
i__455722_455751 = G__455791;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq455710){
var G__455711 = cljs.core.first.call(null,seq455710);
var seq455710__$1 = cljs.core.next.call(null,seq455710);
var G__455712 = cljs.core.first.call(null,seq455710__$1);
var seq455710__$2 = cljs.core.next.call(null,seq455710__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__455711,G__455712,seq455710__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args455792 = [];
var len__36260__auto___455799 = arguments.length;
var i__36261__auto___455800 = (0);
while(true){
if((i__36261__auto___455800 < len__36260__auto___455799)){
args455792.push((arguments[i__36261__auto___455800]));

var G__455801 = (i__36261__auto___455800 + (1));
i__36261__auto___455800 = G__455801;
continue;
} else {
}
break;
}

var G__455794 = args455792.length;
switch (G__455794) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args455792.length)].join('')));

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
var args455814 = [];
var len__36260__auto___455846 = arguments.length;
var i__36261__auto___455847 = (0);
while(true){
if((i__36261__auto___455847 < len__36260__auto___455846)){
args455814.push((arguments[i__36261__auto___455847]));

var G__455848 = (i__36261__auto___455847 + (1));
i__36261__auto___455847 = G__455848;
continue;
} else {
}
break;
}

var G__455825 = args455814.length;
switch (G__455825) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args455814.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___455860 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___455860)){
var class_list_455862 = temp__4655__auto___455860;
var seq__455830_455863 = cljs.core.seq.call(null,classes__$1);
var chunk__455831_455864 = null;
var count__455832_455865 = (0);
var i__455833_455866 = (0);
while(true){
if((i__455833_455866 < count__455832_455865)){
var c_455872 = cljs.core._nth.call(null,chunk__455831_455864,i__455833_455866);
class_list_455862.add(c_455872);

var G__455874 = seq__455830_455863;
var G__455875 = chunk__455831_455864;
var G__455876 = count__455832_455865;
var G__455877 = (i__455833_455866 + (1));
seq__455830_455863 = G__455874;
chunk__455831_455864 = G__455875;
count__455832_455865 = G__455876;
i__455833_455866 = G__455877;
continue;
} else {
var temp__4657__auto___455882 = cljs.core.seq.call(null,seq__455830_455863);
if(temp__4657__auto___455882){
var seq__455830_455883__$1 = temp__4657__auto___455882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__455830_455883__$1)){
var c__36002__auto___455884 = cljs.core.chunk_first.call(null,seq__455830_455883__$1);
var G__455885 = cljs.core.chunk_rest.call(null,seq__455830_455883__$1);
var G__455886 = c__36002__auto___455884;
var G__455887 = cljs.core.count.call(null,c__36002__auto___455884);
var G__455888 = (0);
seq__455830_455863 = G__455885;
chunk__455831_455864 = G__455886;
count__455832_455865 = G__455887;
i__455833_455866 = G__455888;
continue;
} else {
var c_455889 = cljs.core.first.call(null,seq__455830_455883__$1);
class_list_455862.add(c_455889);

var G__455890 = cljs.core.next.call(null,seq__455830_455883__$1);
var G__455891 = null;
var G__455892 = (0);
var G__455893 = (0);
seq__455830_455863 = G__455890;
chunk__455831_455864 = G__455891;
count__455832_455865 = G__455892;
i__455833_455866 = G__455893;
continue;
}
} else {
}
}
break;
}
} else {
var seq__455834_455896 = cljs.core.seq.call(null,classes__$1);
var chunk__455835_455897 = null;
var count__455836_455898 = (0);
var i__455837_455899 = (0);
while(true){
if((i__455837_455899 < count__455836_455898)){
var c_455901 = cljs.core._nth.call(null,chunk__455835_455897,i__455837_455899);
var class_name_455904 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_455904,c_455901))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_455904 === ""))?c_455901:[cljs.core.str(class_name_455904),cljs.core.str(" "),cljs.core.str(c_455901)].join('')));
}

var G__455905 = seq__455834_455896;
var G__455906 = chunk__455835_455897;
var G__455907 = count__455836_455898;
var G__455908 = (i__455837_455899 + (1));
seq__455834_455896 = G__455905;
chunk__455835_455897 = G__455906;
count__455836_455898 = G__455907;
i__455837_455899 = G__455908;
continue;
} else {
var temp__4657__auto___455909 = cljs.core.seq.call(null,seq__455834_455896);
if(temp__4657__auto___455909){
var seq__455834_455910__$1 = temp__4657__auto___455909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__455834_455910__$1)){
var c__36002__auto___455912 = cljs.core.chunk_first.call(null,seq__455834_455910__$1);
var G__455913 = cljs.core.chunk_rest.call(null,seq__455834_455910__$1);
var G__455914 = c__36002__auto___455912;
var G__455915 = cljs.core.count.call(null,c__36002__auto___455912);
var G__455916 = (0);
seq__455834_455896 = G__455913;
chunk__455835_455897 = G__455914;
count__455836_455898 = G__455915;
i__455837_455899 = G__455916;
continue;
} else {
var c_455918 = cljs.core.first.call(null,seq__455834_455910__$1);
var class_name_455920 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_455920,c_455918))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_455920 === ""))?c_455918:[cljs.core.str(class_name_455920),cljs.core.str(" "),cljs.core.str(c_455918)].join('')));
}

var G__455921 = cljs.core.next.call(null,seq__455834_455910__$1);
var G__455922 = null;
var G__455923 = (0);
var G__455924 = (0);
seq__455834_455896 = G__455921;
chunk__455835_455897 = G__455922;
count__455836_455898 = G__455923;
i__455837_455899 = G__455924;
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
var seq__455842_455931 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__455843_455932 = null;
var count__455844_455933 = (0);
var i__455845_455934 = (0);
while(true){
if((i__455845_455934 < count__455844_455933)){
var c_455936 = cljs.core._nth.call(null,chunk__455843_455932,i__455845_455934);
dommy.core.add_class_BANG_.call(null,elem,c_455936);

var G__455938 = seq__455842_455931;
var G__455939 = chunk__455843_455932;
var G__455940 = count__455844_455933;
var G__455941 = (i__455845_455934 + (1));
seq__455842_455931 = G__455938;
chunk__455843_455932 = G__455939;
count__455844_455933 = G__455940;
i__455845_455934 = G__455941;
continue;
} else {
var temp__4657__auto___455945 = cljs.core.seq.call(null,seq__455842_455931);
if(temp__4657__auto___455945){
var seq__455842_455946__$1 = temp__4657__auto___455945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__455842_455946__$1)){
var c__36002__auto___455948 = cljs.core.chunk_first.call(null,seq__455842_455946__$1);
var G__455949 = cljs.core.chunk_rest.call(null,seq__455842_455946__$1);
var G__455950 = c__36002__auto___455948;
var G__455951 = cljs.core.count.call(null,c__36002__auto___455948);
var G__455952 = (0);
seq__455842_455931 = G__455949;
chunk__455843_455932 = G__455950;
count__455844_455933 = G__455951;
i__455845_455934 = G__455952;
continue;
} else {
var c_455953 = cljs.core.first.call(null,seq__455842_455946__$1);
dommy.core.add_class_BANG_.call(null,elem,c_455953);

var G__455954 = cljs.core.next.call(null,seq__455842_455946__$1);
var G__455955 = null;
var G__455956 = (0);
var G__455957 = (0);
seq__455842_455931 = G__455954;
chunk__455843_455932 = G__455955;
count__455844_455933 = G__455956;
i__455845_455934 = G__455957;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq455815){
var G__455816 = cljs.core.first.call(null,seq455815);
var seq455815__$1 = cljs.core.next.call(null,seq455815);
var G__455817 = cljs.core.first.call(null,seq455815__$1);
var seq455815__$2 = cljs.core.next.call(null,seq455815__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__455816,G__455817,seq455815__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args455958 = [];
var len__36260__auto___455973 = arguments.length;
var i__36261__auto___455974 = (0);
while(true){
if((i__36261__auto___455974 < len__36260__auto___455973)){
args455958.push((arguments[i__36261__auto___455974]));

var G__455975 = (i__36261__auto___455974 + (1));
i__36261__auto___455974 = G__455975;
continue;
} else {
}
break;
}

var G__455965 = args455958.length;
switch (G__455965) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args455958.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___455999 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___455999)){
var class_list_456000 = temp__4655__auto___455999;
class_list_456000.remove(c__$1);
} else {
var class_name_456002 = dommy.core.class$.call(null,elem);
var new_class_name_456003 = dommy.utils.remove_class_str.call(null,class_name_456002,c__$1);
if((class_name_456002 === new_class_name_456003)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_456003);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__455967 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__455968 = null;
var count__455969 = (0);
var i__455970 = (0);
while(true){
if((i__455970 < count__455969)){
var c = cljs.core._nth.call(null,chunk__455968,i__455970);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__456005 = seq__455967;
var G__456006 = chunk__455968;
var G__456007 = count__455969;
var G__456008 = (i__455970 + (1));
seq__455967 = G__456005;
chunk__455968 = G__456006;
count__455969 = G__456007;
i__455970 = G__456008;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__455967);
if(temp__4657__auto__){
var seq__455967__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__455967__$1)){
var c__36002__auto__ = cljs.core.chunk_first.call(null,seq__455967__$1);
var G__456015 = cljs.core.chunk_rest.call(null,seq__455967__$1);
var G__456017 = c__36002__auto__;
var G__456018 = cljs.core.count.call(null,c__36002__auto__);
var G__456019 = (0);
seq__455967 = G__456015;
chunk__455968 = G__456017;
count__455969 = G__456018;
i__455970 = G__456019;
continue;
} else {
var c = cljs.core.first.call(null,seq__455967__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__456027 = cljs.core.next.call(null,seq__455967__$1);
var G__456028 = null;
var G__456029 = (0);
var G__456030 = (0);
seq__455967 = G__456027;
chunk__455968 = G__456028;
count__455969 = G__456029;
i__455970 = G__456030;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq455959){
var G__455960 = cljs.core.first.call(null,seq455959);
var seq455959__$1 = cljs.core.next.call(null,seq455959);
var G__455961 = cljs.core.first.call(null,seq455959__$1);
var seq455959__$2 = cljs.core.next.call(null,seq455959__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__455960,G__455961,seq455959__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args456031 = [];
var len__36260__auto___456038 = arguments.length;
var i__36261__auto___456039 = (0);
while(true){
if((i__36261__auto___456039 < len__36260__auto___456038)){
args456031.push((arguments[i__36261__auto___456039]));

var G__456040 = (i__36261__auto___456039 + (1));
i__36261__auto___456039 = G__456040;
continue;
} else {
}
break;
}

var G__456037 = args456031.length;
switch (G__456037) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args456031.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___456042 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___456042)){
var class_list_456043 = temp__4655__auto___456042;
class_list_456043.toggle(c__$1);
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
var args456049 = [];
var len__36260__auto___456059 = arguments.length;
var i__36261__auto___456060 = (0);
while(true){
if((i__36261__auto___456060 < len__36260__auto___456059)){
args456049.push((arguments[i__36261__auto___456060]));

var G__456065 = (i__36261__auto___456060 + (1));
i__36261__auto___456060 = G__456065;
continue;
} else {
}
break;
}

var G__456056 = args456049.length;
switch (G__456056) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args456049.length)].join('')));

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
var args456077 = [];
var len__36260__auto___456080 = arguments.length;
var i__36261__auto___456081 = (0);
while(true){
if((i__36261__auto___456081 < len__36260__auto___456080)){
args456077.push((arguments[i__36261__auto___456081]));

var G__456082 = (i__36261__auto___456081 + (1));
i__36261__auto___456081 = G__456082;
continue;
} else {
}
break;
}

var G__456079 = args456077.length;
switch (G__456079) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args456077.length)].join('')));

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
var args456086 = [];
var len__36260__auto___456104 = arguments.length;
var i__36261__auto___456105 = (0);
while(true){
if((i__36261__auto___456105 < len__36260__auto___456104)){
args456086.push((arguments[i__36261__auto___456105]));

var G__456106 = (i__36261__auto___456105 + (1));
i__36261__auto___456105 = G__456106;
continue;
} else {
}
break;
}

var G__456093 = args456086.length;
switch (G__456093) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args456086.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__456095 = parent;
G__456095.appendChild(child);

return G__456095;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__456096_456116 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__456097_456117 = null;
var count__456098_456118 = (0);
var i__456099_456119 = (0);
while(true){
if((i__456099_456119 < count__456098_456118)){
var c_456128 = cljs.core._nth.call(null,chunk__456097_456117,i__456099_456119);
dommy.core.append_BANG_.call(null,parent,c_456128);

var G__456130 = seq__456096_456116;
var G__456131 = chunk__456097_456117;
var G__456132 = count__456098_456118;
var G__456133 = (i__456099_456119 + (1));
seq__456096_456116 = G__456130;
chunk__456097_456117 = G__456131;
count__456098_456118 = G__456132;
i__456099_456119 = G__456133;
continue;
} else {
var temp__4657__auto___456138 = cljs.core.seq.call(null,seq__456096_456116);
if(temp__4657__auto___456138){
var seq__456096_456140__$1 = temp__4657__auto___456138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__456096_456140__$1)){
var c__36002__auto___456141 = cljs.core.chunk_first.call(null,seq__456096_456140__$1);
var G__456142 = cljs.core.chunk_rest.call(null,seq__456096_456140__$1);
var G__456143 = c__36002__auto___456141;
var G__456144 = cljs.core.count.call(null,c__36002__auto___456141);
var G__456145 = (0);
seq__456096_456116 = G__456142;
chunk__456097_456117 = G__456143;
count__456098_456118 = G__456144;
i__456099_456119 = G__456145;
continue;
} else {
var c_456146 = cljs.core.first.call(null,seq__456096_456140__$1);
dommy.core.append_BANG_.call(null,parent,c_456146);

var G__456147 = cljs.core.next.call(null,seq__456096_456140__$1);
var G__456148 = null;
var G__456149 = (0);
var G__456150 = (0);
seq__456096_456116 = G__456147;
chunk__456097_456117 = G__456148;
count__456098_456118 = G__456149;
i__456099_456119 = G__456150;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq456087){
var G__456088 = cljs.core.first.call(null,seq456087);
var seq456087__$1 = cljs.core.next.call(null,seq456087);
var G__456089 = cljs.core.first.call(null,seq456087__$1);
var seq456087__$2 = cljs.core.next.call(null,seq456087__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__456088,G__456089,seq456087__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args456156 = [];
var len__36260__auto___456172 = arguments.length;
var i__36261__auto___456173 = (0);
while(true){
if((i__36261__auto___456173 < len__36260__auto___456172)){
args456156.push((arguments[i__36261__auto___456173]));

var G__456175 = (i__36261__auto___456173 + (1));
i__36261__auto___456173 = G__456175;
continue;
} else {
}
break;
}

var G__456164 = args456156.length;
switch (G__456164) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args456156.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__456165 = parent;
G__456165.insertBefore(child,parent.firstChild);

return G__456165;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__456166_456190 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__456167_456191 = null;
var count__456168_456192 = (0);
var i__456169_456193 = (0);
while(true){
if((i__456169_456193 < count__456168_456192)){
var c_456202 = cljs.core._nth.call(null,chunk__456167_456191,i__456169_456193);
dommy.core.prepend_BANG_.call(null,parent,c_456202);

var G__456203 = seq__456166_456190;
var G__456204 = chunk__456167_456191;
var G__456205 = count__456168_456192;
var G__456206 = (i__456169_456193 + (1));
seq__456166_456190 = G__456203;
chunk__456167_456191 = G__456204;
count__456168_456192 = G__456205;
i__456169_456193 = G__456206;
continue;
} else {
var temp__4657__auto___456207 = cljs.core.seq.call(null,seq__456166_456190);
if(temp__4657__auto___456207){
var seq__456166_456209__$1 = temp__4657__auto___456207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__456166_456209__$1)){
var c__36002__auto___456210 = cljs.core.chunk_first.call(null,seq__456166_456209__$1);
var G__456212 = cljs.core.chunk_rest.call(null,seq__456166_456209__$1);
var G__456213 = c__36002__auto___456210;
var G__456214 = cljs.core.count.call(null,c__36002__auto___456210);
var G__456215 = (0);
seq__456166_456190 = G__456212;
chunk__456167_456191 = G__456213;
count__456168_456192 = G__456214;
i__456169_456193 = G__456215;
continue;
} else {
var c_456216 = cljs.core.first.call(null,seq__456166_456209__$1);
dommy.core.prepend_BANG_.call(null,parent,c_456216);

var G__456218 = cljs.core.next.call(null,seq__456166_456209__$1);
var G__456219 = null;
var G__456220 = (0);
var G__456221 = (0);
seq__456166_456190 = G__456218;
chunk__456167_456191 = G__456219;
count__456168_456192 = G__456220;
i__456169_456193 = G__456221;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq456157){
var G__456159 = cljs.core.first.call(null,seq456157);
var seq456157__$1 = cljs.core.next.call(null,seq456157);
var G__456160 = cljs.core.first.call(null,seq456157__$1);
var seq456157__$2 = cljs.core.next.call(null,seq456157__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__456159,G__456160,seq456157__$2);
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
var temp__4655__auto___456231 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___456231)){
var next_456232 = temp__4655__auto___456231;
dommy.core.insert_before_BANG_.call(null,elem,next_456232);
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
var args456242 = [];
var len__36260__auto___456247 = arguments.length;
var i__36261__auto___456248 = (0);
while(true){
if((i__36261__auto___456248 < len__36260__auto___456247)){
args456242.push((arguments[i__36261__auto___456248]));

var G__456250 = (i__36261__auto___456248 + (1));
i__36261__auto___456248 = G__456250;
continue;
} else {
}
break;
}

var G__456245 = args456242.length;
switch (G__456245) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args456242.length)].join('')));

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
var G__456246 = p;
G__456246.removeChild(elem);

return G__456246;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__456257){
var vec__456258 = p__456257;
var special_mouse_event = cljs.core.nth.call(null,vec__456258,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__456258,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__456258,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__456258,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__35191__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__35179__auto__ = related_target;
if(cljs.core.truth_(and__35179__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__35179__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__456258,special_mouse_event,real_mouse_event))
});})(vec__456258,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__35179__auto__ = selected_target;
if(cljs.core.truth_(and__35179__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__35179__auto__;
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
var or__35191__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__36267__auto__ = [];
var len__36260__auto___456270 = arguments.length;
var i__36261__auto___456271 = (0);
while(true){
if((i__36261__auto___456271 < len__36260__auto___456270)){
args__36267__auto__.push((arguments[i__36261__auto___456271]));

var G__456272 = (i__36261__auto___456271 + (1));
i__36261__auto___456271 = G__456272;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq456264){
var G__456266 = cljs.core.first.call(null,seq456264);
var seq456264__$1 = cljs.core.next.call(null,seq456264);
var G__456267 = cljs.core.first.call(null,seq456264__$1);
var seq456264__$2 = cljs.core.next.call(null,seq456264__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__456266,G__456267,seq456264__$2);
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
var args__36267__auto__ = [];
var len__36260__auto___456332 = arguments.length;
var i__36261__auto___456335 = (0);
while(true){
if((i__36261__auto___456335 < len__36260__auto___456332)){
args__36267__auto__.push((arguments[i__36261__auto___456335]));

var G__456338 = (i__36261__auto___456335 + (1));
i__36261__auto___456335 = G__456338;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__456288_456340 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_456341 = cljs.core.nth.call(null,vec__456288_456340,(0),null);
var selector_456342 = cljs.core.nth.call(null,vec__456288_456340,(1),null);
var seq__456289_456343 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__456296_456344 = null;
var count__456297_456345 = (0);
var i__456298_456346 = (0);
while(true){
if((i__456298_456346 < count__456297_456345)){
var vec__456305_456347 = cljs.core._nth.call(null,chunk__456296_456344,i__456298_456346);
var orig_type_456348 = cljs.core.nth.call(null,vec__456305_456347,(0),null);
var f_456349 = cljs.core.nth.call(null,vec__456305_456347,(1),null);
var seq__456299_456354 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_456348,cljs.core.PersistentArrayMap.fromArray([orig_type_456348,cljs.core.identity], true, false)));
var chunk__456301_456355 = null;
var count__456302_456356 = (0);
var i__456303_456357 = (0);
while(true){
if((i__456303_456357 < count__456302_456356)){
var vec__456311_456362 = cljs.core._nth.call(null,chunk__456301_456355,i__456303_456357);
var actual_type_456363 = cljs.core.nth.call(null,vec__456311_456362,(0),null);
var factory_456364 = cljs.core.nth.call(null,vec__456311_456362,(1),null);
var canonical_f_456365 = (cljs.core.truth_(selector_456342)?cljs.core.partial.call(null,dommy.core.live_listener,elem_456341,selector_456342):cljs.core.identity).call(null,factory_456364.call(null,f_456349));
dommy.core.update_event_listeners_BANG_.call(null,elem_456341,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_456342,actual_type_456363,f_456349], null),canonical_f_456365);

if(cljs.core.truth_(elem_456341.addEventListener)){
elem_456341.addEventListener(cljs.core.name.call(null,actual_type_456363),canonical_f_456365);
} else {
elem_456341.attachEvent(cljs.core.name.call(null,actual_type_456363),canonical_f_456365);
}

var G__456372 = seq__456299_456354;
var G__456373 = chunk__456301_456355;
var G__456374 = count__456302_456356;
var G__456375 = (i__456303_456357 + (1));
seq__456299_456354 = G__456372;
chunk__456301_456355 = G__456373;
count__456302_456356 = G__456374;
i__456303_456357 = G__456375;
continue;
} else {
var temp__4657__auto___456380 = cljs.core.seq.call(null,seq__456299_456354);
if(temp__4657__auto___456380){
var seq__456299_456382__$1 = temp__4657__auto___456380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__456299_456382__$1)){
var c__36002__auto___456383 = cljs.core.chunk_first.call(null,seq__456299_456382__$1);
var G__456384 = cljs.core.chunk_rest.call(null,seq__456299_456382__$1);
var G__456385 = c__36002__auto___456383;
var G__456386 = cljs.core.count.call(null,c__36002__auto___456383);
var G__456387 = (0);
seq__456299_456354 = G__456384;
chunk__456301_456355 = G__456385;
count__456302_456356 = G__456386;
i__456303_456357 = G__456387;
continue;
} else {
var vec__456318_456388 = cljs.core.first.call(null,seq__456299_456382__$1);
var actual_type_456389 = cljs.core.nth.call(null,vec__456318_456388,(0),null);
var factory_456390 = cljs.core.nth.call(null,vec__456318_456388,(1),null);
var canonical_f_456394 = (cljs.core.truth_(selector_456342)?cljs.core.partial.call(null,dommy.core.live_listener,elem_456341,selector_456342):cljs.core.identity).call(null,factory_456390.call(null,f_456349));
dommy.core.update_event_listeners_BANG_.call(null,elem_456341,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_456342,actual_type_456389,f_456349], null),canonical_f_456394);

if(cljs.core.truth_(elem_456341.addEventListener)){
elem_456341.addEventListener(cljs.core.name.call(null,actual_type_456389),canonical_f_456394);
} else {
elem_456341.attachEvent(cljs.core.name.call(null,actual_type_456389),canonical_f_456394);
}

var G__456396 = cljs.core.next.call(null,seq__456299_456382__$1);
var G__456397 = null;
var G__456398 = (0);
var G__456399 = (0);
seq__456299_456354 = G__456396;
chunk__456301_456355 = G__456397;
count__456302_456356 = G__456398;
i__456303_456357 = G__456399;
continue;
}
} else {
}
}
break;
}

var G__456400 = seq__456289_456343;
var G__456401 = chunk__456296_456344;
var G__456402 = count__456297_456345;
var G__456403 = (i__456298_456346 + (1));
seq__456289_456343 = G__456400;
chunk__456296_456344 = G__456401;
count__456297_456345 = G__456402;
i__456298_456346 = G__456403;
continue;
} else {
var temp__4657__auto___456404 = cljs.core.seq.call(null,seq__456289_456343);
if(temp__4657__auto___456404){
var seq__456289_456405__$1 = temp__4657__auto___456404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__456289_456405__$1)){
var c__36002__auto___456406 = cljs.core.chunk_first.call(null,seq__456289_456405__$1);
var G__456407 = cljs.core.chunk_rest.call(null,seq__456289_456405__$1);
var G__456408 = c__36002__auto___456406;
var G__456409 = cljs.core.count.call(null,c__36002__auto___456406);
var G__456410 = (0);
seq__456289_456343 = G__456407;
chunk__456296_456344 = G__456408;
count__456297_456345 = G__456409;
i__456298_456346 = G__456410;
continue;
} else {
var vec__456321_456411 = cljs.core.first.call(null,seq__456289_456405__$1);
var orig_type_456412 = cljs.core.nth.call(null,vec__456321_456411,(0),null);
var f_456413 = cljs.core.nth.call(null,vec__456321_456411,(1),null);
var seq__456290_456414 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_456412,cljs.core.PersistentArrayMap.fromArray([orig_type_456412,cljs.core.identity], true, false)));
var chunk__456292_456415 = null;
var count__456293_456416 = (0);
var i__456294_456417 = (0);
while(true){
if((i__456294_456417 < count__456293_456416)){
var vec__456322_456422 = cljs.core._nth.call(null,chunk__456292_456415,i__456294_456417);
var actual_type_456423 = cljs.core.nth.call(null,vec__456322_456422,(0),null);
var factory_456424 = cljs.core.nth.call(null,vec__456322_456422,(1),null);
var canonical_f_456426 = (cljs.core.truth_(selector_456342)?cljs.core.partial.call(null,dommy.core.live_listener,elem_456341,selector_456342):cljs.core.identity).call(null,factory_456424.call(null,f_456413));
dommy.core.update_event_listeners_BANG_.call(null,elem_456341,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_456342,actual_type_456423,f_456413], null),canonical_f_456426);

if(cljs.core.truth_(elem_456341.addEventListener)){
elem_456341.addEventListener(cljs.core.name.call(null,actual_type_456423),canonical_f_456426);
} else {
elem_456341.attachEvent(cljs.core.name.call(null,actual_type_456423),canonical_f_456426);
}

var G__456431 = seq__456290_456414;
var G__456432 = chunk__456292_456415;
var G__456433 = count__456293_456416;
var G__456434 = (i__456294_456417 + (1));
seq__456290_456414 = G__456431;
chunk__456292_456415 = G__456432;
count__456293_456416 = G__456433;
i__456294_456417 = G__456434;
continue;
} else {
var temp__4657__auto___456438__$1 = cljs.core.seq.call(null,seq__456290_456414);
if(temp__4657__auto___456438__$1){
var seq__456290_456439__$1 = temp__4657__auto___456438__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__456290_456439__$1)){
var c__36002__auto___456440 = cljs.core.chunk_first.call(null,seq__456290_456439__$1);
var G__456442 = cljs.core.chunk_rest.call(null,seq__456290_456439__$1);
var G__456443 = c__36002__auto___456440;
var G__456444 = cljs.core.count.call(null,c__36002__auto___456440);
var G__456445 = (0);
seq__456290_456414 = G__456442;
chunk__456292_456415 = G__456443;
count__456293_456416 = G__456444;
i__456294_456417 = G__456445;
continue;
} else {
var vec__456328_456446 = cljs.core.first.call(null,seq__456290_456439__$1);
var actual_type_456447 = cljs.core.nth.call(null,vec__456328_456446,(0),null);
var factory_456448 = cljs.core.nth.call(null,vec__456328_456446,(1),null);
var canonical_f_456451 = (cljs.core.truth_(selector_456342)?cljs.core.partial.call(null,dommy.core.live_listener,elem_456341,selector_456342):cljs.core.identity).call(null,factory_456448.call(null,f_456413));
dommy.core.update_event_listeners_BANG_.call(null,elem_456341,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_456342,actual_type_456447,f_456413], null),canonical_f_456451);

if(cljs.core.truth_(elem_456341.addEventListener)){
elem_456341.addEventListener(cljs.core.name.call(null,actual_type_456447),canonical_f_456451);
} else {
elem_456341.attachEvent(cljs.core.name.call(null,actual_type_456447),canonical_f_456451);
}

var G__456452 = cljs.core.next.call(null,seq__456290_456439__$1);
var G__456453 = null;
var G__456454 = (0);
var G__456455 = (0);
seq__456290_456414 = G__456452;
chunk__456292_456415 = G__456453;
count__456293_456416 = G__456454;
i__456294_456417 = G__456455;
continue;
}
} else {
}
}
break;
}

var G__456456 = cljs.core.next.call(null,seq__456289_456405__$1);
var G__456457 = null;
var G__456458 = (0);
var G__456459 = (0);
seq__456289_456343 = G__456456;
chunk__456296_456344 = G__456457;
count__456297_456345 = G__456458;
i__456298_456346 = G__456459;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq456284){
var G__456285 = cljs.core.first.call(null,seq456284);
var seq456284__$1 = cljs.core.next.call(null,seq456284);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__456285,seq456284__$1);
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
var args__36267__auto__ = [];
var len__36260__auto___456498 = arguments.length;
var i__36261__auto___456499 = (0);
while(true){
if((i__36261__auto___456499 < len__36260__auto___456498)){
args__36267__auto__.push((arguments[i__36261__auto___456499]));

var G__456500 = (i__36261__auto___456499 + (1));
i__36261__auto___456499 = G__456500;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__456468_456501 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_456502 = cljs.core.nth.call(null,vec__456468_456501,(0),null);
var selector_456503 = cljs.core.nth.call(null,vec__456468_456501,(1),null);
var seq__456469_456504 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__456476_456505 = null;
var count__456477_456506 = (0);
var i__456478_456507 = (0);
while(true){
if((i__456478_456507 < count__456477_456506)){
var vec__456489_456508 = cljs.core._nth.call(null,chunk__456476_456505,i__456478_456507);
var orig_type_456509 = cljs.core.nth.call(null,vec__456489_456508,(0),null);
var f_456510 = cljs.core.nth.call(null,vec__456489_456508,(1),null);
var seq__456479_456511 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_456509,cljs.core.PersistentArrayMap.fromArray([orig_type_456509,cljs.core.identity], true, false)));
var chunk__456481_456512 = null;
var count__456482_456513 = (0);
var i__456483_456514 = (0);
while(true){
if((i__456483_456514 < count__456482_456513)){
var vec__456491_456517 = cljs.core._nth.call(null,chunk__456481_456512,i__456483_456514);
var actual_type_456518 = cljs.core.nth.call(null,vec__456491_456517,(0),null);
var __456519 = cljs.core.nth.call(null,vec__456491_456517,(1),null);
var keys_456521 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_456503,actual_type_456518,f_456510], null);
var canonical_f_456522 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_456502),keys_456521);
dommy.core.update_event_listeners_BANG_.call(null,elem_456502,dommy.utils.dissoc_in,keys_456521);

if(cljs.core.truth_(elem_456502.removeEventListener)){
elem_456502.removeEventListener(cljs.core.name.call(null,actual_type_456518),canonical_f_456522);
} else {
elem_456502.detachEvent(cljs.core.name.call(null,actual_type_456518),canonical_f_456522);
}

var G__456523 = seq__456479_456511;
var G__456524 = chunk__456481_456512;
var G__456525 = count__456482_456513;
var G__456526 = (i__456483_456514 + (1));
seq__456479_456511 = G__456523;
chunk__456481_456512 = G__456524;
count__456482_456513 = G__456525;
i__456483_456514 = G__456526;
continue;
} else {
var temp__4657__auto___456527 = cljs.core.seq.call(null,seq__456479_456511);
if(temp__4657__auto___456527){
var seq__456479_456532__$1 = temp__4657__auto___456527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__456479_456532__$1)){
var c__36002__auto___456533 = cljs.core.chunk_first.call(null,seq__456479_456532__$1);
var G__456538 = cljs.core.chunk_rest.call(null,seq__456479_456532__$1);
var G__456539 = c__36002__auto___456533;
var G__456540 = cljs.core.count.call(null,c__36002__auto___456533);
var G__456541 = (0);
seq__456479_456511 = G__456538;
chunk__456481_456512 = G__456539;
count__456482_456513 = G__456540;
i__456483_456514 = G__456541;
continue;
} else {
var vec__456493_456544 = cljs.core.first.call(null,seq__456479_456532__$1);
var actual_type_456545 = cljs.core.nth.call(null,vec__456493_456544,(0),null);
var __456546 = cljs.core.nth.call(null,vec__456493_456544,(1),null);
var keys_456548 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_456503,actual_type_456545,f_456510], null);
var canonical_f_456549 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_456502),keys_456548);
dommy.core.update_event_listeners_BANG_.call(null,elem_456502,dommy.utils.dissoc_in,keys_456548);

if(cljs.core.truth_(elem_456502.removeEventListener)){
elem_456502.removeEventListener(cljs.core.name.call(null,actual_type_456545),canonical_f_456549);
} else {
elem_456502.detachEvent(cljs.core.name.call(null,actual_type_456545),canonical_f_456549);
}

var G__456554 = cljs.core.next.call(null,seq__456479_456532__$1);
var G__456555 = null;
var G__456556 = (0);
var G__456557 = (0);
seq__456479_456511 = G__456554;
chunk__456481_456512 = G__456555;
count__456482_456513 = G__456556;
i__456483_456514 = G__456557;
continue;
}
} else {
}
}
break;
}

var G__456558 = seq__456469_456504;
var G__456559 = chunk__456476_456505;
var G__456560 = count__456477_456506;
var G__456561 = (i__456478_456507 + (1));
seq__456469_456504 = G__456558;
chunk__456476_456505 = G__456559;
count__456477_456506 = G__456560;
i__456478_456507 = G__456561;
continue;
} else {
var temp__4657__auto___456562 = cljs.core.seq.call(null,seq__456469_456504);
if(temp__4657__auto___456562){
var seq__456469_456563__$1 = temp__4657__auto___456562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__456469_456563__$1)){
var c__36002__auto___456564 = cljs.core.chunk_first.call(null,seq__456469_456563__$1);
var G__456565 = cljs.core.chunk_rest.call(null,seq__456469_456563__$1);
var G__456566 = c__36002__auto___456564;
var G__456567 = cljs.core.count.call(null,c__36002__auto___456564);
var G__456568 = (0);
seq__456469_456504 = G__456565;
chunk__456476_456505 = G__456566;
count__456477_456506 = G__456567;
i__456478_456507 = G__456568;
continue;
} else {
var vec__456494_456569 = cljs.core.first.call(null,seq__456469_456563__$1);
var orig_type_456570 = cljs.core.nth.call(null,vec__456494_456569,(0),null);
var f_456571 = cljs.core.nth.call(null,vec__456494_456569,(1),null);
var seq__456470_456572 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_456570,cljs.core.PersistentArrayMap.fromArray([orig_type_456570,cljs.core.identity], true, false)));
var chunk__456472_456573 = null;
var count__456473_456574 = (0);
var i__456474_456575 = (0);
while(true){
if((i__456474_456575 < count__456473_456574)){
var vec__456495_456576 = cljs.core._nth.call(null,chunk__456472_456573,i__456474_456575);
var actual_type_456577 = cljs.core.nth.call(null,vec__456495_456576,(0),null);
var __456578 = cljs.core.nth.call(null,vec__456495_456576,(1),null);
var keys_456579 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_456503,actual_type_456577,f_456571], null);
var canonical_f_456580 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_456502),keys_456579);
dommy.core.update_event_listeners_BANG_.call(null,elem_456502,dommy.utils.dissoc_in,keys_456579);

if(cljs.core.truth_(elem_456502.removeEventListener)){
elem_456502.removeEventListener(cljs.core.name.call(null,actual_type_456577),canonical_f_456580);
} else {
elem_456502.detachEvent(cljs.core.name.call(null,actual_type_456577),canonical_f_456580);
}

var G__456586 = seq__456470_456572;
var G__456587 = chunk__456472_456573;
var G__456588 = count__456473_456574;
var G__456589 = (i__456474_456575 + (1));
seq__456470_456572 = G__456586;
chunk__456472_456573 = G__456587;
count__456473_456574 = G__456588;
i__456474_456575 = G__456589;
continue;
} else {
var temp__4657__auto___456595__$1 = cljs.core.seq.call(null,seq__456470_456572);
if(temp__4657__auto___456595__$1){
var seq__456470_456596__$1 = temp__4657__auto___456595__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__456470_456596__$1)){
var c__36002__auto___456598 = cljs.core.chunk_first.call(null,seq__456470_456596__$1);
var G__456599 = cljs.core.chunk_rest.call(null,seq__456470_456596__$1);
var G__456600 = c__36002__auto___456598;
var G__456601 = cljs.core.count.call(null,c__36002__auto___456598);
var G__456602 = (0);
seq__456470_456572 = G__456599;
chunk__456472_456573 = G__456600;
count__456473_456574 = G__456601;
i__456474_456575 = G__456602;
continue;
} else {
var vec__456497_456604 = cljs.core.first.call(null,seq__456470_456596__$1);
var actual_type_456605 = cljs.core.nth.call(null,vec__456497_456604,(0),null);
var __456606 = cljs.core.nth.call(null,vec__456497_456604,(1),null);
var keys_456616 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_456503,actual_type_456605,f_456571], null);
var canonical_f_456617 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_456502),keys_456616);
dommy.core.update_event_listeners_BANG_.call(null,elem_456502,dommy.utils.dissoc_in,keys_456616);

if(cljs.core.truth_(elem_456502.removeEventListener)){
elem_456502.removeEventListener(cljs.core.name.call(null,actual_type_456605),canonical_f_456617);
} else {
elem_456502.detachEvent(cljs.core.name.call(null,actual_type_456605),canonical_f_456617);
}

var G__456627 = cljs.core.next.call(null,seq__456470_456596__$1);
var G__456628 = null;
var G__456629 = (0);
var G__456630 = (0);
seq__456470_456572 = G__456627;
chunk__456472_456573 = G__456628;
count__456473_456574 = G__456629;
i__456474_456575 = G__456630;
continue;
}
} else {
}
}
break;
}

var G__456635 = cljs.core.next.call(null,seq__456469_456563__$1);
var G__456636 = null;
var G__456637 = (0);
var G__456638 = (0);
seq__456469_456504 = G__456635;
chunk__456476_456505 = G__456636;
count__456477_456506 = G__456637;
i__456478_456507 = G__456638;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq456460){
var G__456462 = cljs.core.first.call(null,seq456460);
var seq456460__$1 = cljs.core.next.call(null,seq456460);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__456462,seq456460__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__36267__auto__ = [];
var len__36260__auto___456648 = arguments.length;
var i__36261__auto___456649 = (0);
while(true){
if((i__36261__auto___456649 < len__36260__auto___456648)){
args__36267__auto__.push((arguments[i__36261__auto___456649]));

var G__456650 = (i__36261__auto___456649 + (1));
i__36261__auto___456649 = G__456650;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__456641_456652 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_456653 = cljs.core.nth.call(null,vec__456641_456652,(0),null);
var selector_456654 = cljs.core.nth.call(null,vec__456641_456652,(1),null);
var seq__456642_456655 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__456643_456656 = null;
var count__456644_456657 = (0);
var i__456645_456658 = (0);
while(true){
if((i__456645_456658 < count__456644_456657)){
var vec__456646_456661 = cljs.core._nth.call(null,chunk__456643_456656,i__456645_456658);
var type_456662 = cljs.core.nth.call(null,vec__456646_456661,(0),null);
var f_456663 = cljs.core.nth.call(null,vec__456646_456661,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_456662,((function (seq__456642_456655,chunk__456643_456656,count__456644_456657,i__456645_456658,vec__456646_456661,type_456662,f_456663,vec__456641_456652,elem_456653,selector_456654){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_456662,dommy$core$this_fn);

return f_456663.call(null,e);
});})(seq__456642_456655,chunk__456643_456656,count__456644_456657,i__456645_456658,vec__456646_456661,type_456662,f_456663,vec__456641_456652,elem_456653,selector_456654))
);

var G__456680 = seq__456642_456655;
var G__456682 = chunk__456643_456656;
var G__456683 = count__456644_456657;
var G__456684 = (i__456645_456658 + (1));
seq__456642_456655 = G__456680;
chunk__456643_456656 = G__456682;
count__456644_456657 = G__456683;
i__456645_456658 = G__456684;
continue;
} else {
var temp__4657__auto___456689 = cljs.core.seq.call(null,seq__456642_456655);
if(temp__4657__auto___456689){
var seq__456642_456690__$1 = temp__4657__auto___456689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__456642_456690__$1)){
var c__36002__auto___456691 = cljs.core.chunk_first.call(null,seq__456642_456690__$1);
var G__456696 = cljs.core.chunk_rest.call(null,seq__456642_456690__$1);
var G__456697 = c__36002__auto___456691;
var G__456698 = cljs.core.count.call(null,c__36002__auto___456691);
var G__456699 = (0);
seq__456642_456655 = G__456696;
chunk__456643_456656 = G__456697;
count__456644_456657 = G__456698;
i__456645_456658 = G__456699;
continue;
} else {
var vec__456647_456700 = cljs.core.first.call(null,seq__456642_456690__$1);
var type_456701 = cljs.core.nth.call(null,vec__456647_456700,(0),null);
var f_456702 = cljs.core.nth.call(null,vec__456647_456700,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_456701,((function (seq__456642_456655,chunk__456643_456656,count__456644_456657,i__456645_456658,vec__456647_456700,type_456701,f_456702,seq__456642_456690__$1,temp__4657__auto___456689,vec__456641_456652,elem_456653,selector_456654){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_456701,dommy$core$this_fn);

return f_456702.call(null,e);
});})(seq__456642_456655,chunk__456643_456656,count__456644_456657,i__456645_456658,vec__456647_456700,type_456701,f_456702,seq__456642_456690__$1,temp__4657__auto___456689,vec__456641_456652,elem_456653,selector_456654))
);

var G__456718 = cljs.core.next.call(null,seq__456642_456690__$1);
var G__456719 = null;
var G__456720 = (0);
var G__456721 = (0);
seq__456642_456655 = G__456718;
chunk__456643_456656 = G__456719;
count__456644_456657 = G__456720;
i__456645_456658 = G__456721;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq456639){
var G__456640 = cljs.core.first.call(null,seq456639);
var seq456639__$1 = cljs.core.next.call(null,seq456639);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__456640,seq456639__$1);
});
