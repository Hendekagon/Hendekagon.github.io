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
var args298268 = [];
var len__36260__auto___298283 = arguments.length;
var i__36261__auto___298284 = (0);
while(true){
if((i__36261__auto___298284 < len__36260__auto___298283)){
args298268.push((arguments[i__36261__auto___298284]));

var G__298290 = (i__36261__auto___298284 + (1));
i__36261__auto___298284 = G__298290;
continue;
} else {
}
break;
}

var G__298278 = args298268.length;
switch (G__298278) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args298268.length)].join('')));

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
var args298344 = [];
var len__36260__auto___298351 = arguments.length;
var i__36261__auto___298352 = (0);
while(true){
if((i__36261__auto___298352 < len__36260__auto___298351)){
args298344.push((arguments[i__36261__auto___298352]));

var G__298354 = (i__36261__auto___298352 + (1));
i__36261__auto___298352 = G__298354;
continue;
} else {
}
break;
}

var G__298347 = args298344.length;
switch (G__298347) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args298344.length)].join('')));

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
var args298369 = [];
var len__36260__auto___298374 = arguments.length;
var i__36261__auto___298375 = (0);
while(true){
if((i__36261__auto___298375 < len__36260__auto___298374)){
args298369.push((arguments[i__36261__auto___298375]));

var G__298377 = (i__36261__auto___298375 + (1));
i__36261__auto___298375 = G__298377;
continue;
} else {
}
break;
}

var G__298371 = args298369.length;
switch (G__298371) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args298369.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__298368_SHARP_){
return !((p1__298368_SHARP_ === base));
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
var len__36260__auto___298505 = arguments.length;
var i__36261__auto___298506 = (0);
while(true){
if((i__36261__auto___298506 < len__36260__auto___298505)){
args__36267__auto__.push((arguments[i__36261__auto___298506]));

var G__298507 = (i__36261__auto___298506 + (1));
i__36261__auto___298506 = G__298507;
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
var seq__298499_298508 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__298500_298509 = null;
var count__298501_298510 = (0);
var i__298502_298511 = (0);
while(true){
if((i__298502_298511 < count__298501_298510)){
var vec__298503_298512 = cljs.core._nth.call(null,chunk__298500_298509,i__298502_298511);
var k_298513 = cljs.core.nth.call(null,vec__298503_298512,(0),null);
var v_298514 = cljs.core.nth.call(null,vec__298503_298512,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_298513),v_298514);

var G__298518 = seq__298499_298508;
var G__298519 = chunk__298500_298509;
var G__298520 = count__298501_298510;
var G__298521 = (i__298502_298511 + (1));
seq__298499_298508 = G__298518;
chunk__298500_298509 = G__298519;
count__298501_298510 = G__298520;
i__298502_298511 = G__298521;
continue;
} else {
var temp__4657__auto___298522 = cljs.core.seq.call(null,seq__298499_298508);
if(temp__4657__auto___298522){
var seq__298499_298523__$1 = temp__4657__auto___298522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__298499_298523__$1)){
var c__36002__auto___298524 = cljs.core.chunk_first.call(null,seq__298499_298523__$1);
var G__298525 = cljs.core.chunk_rest.call(null,seq__298499_298523__$1);
var G__298526 = c__36002__auto___298524;
var G__298527 = cljs.core.count.call(null,c__36002__auto___298524);
var G__298528 = (0);
seq__298499_298508 = G__298525;
chunk__298500_298509 = G__298526;
count__298501_298510 = G__298527;
i__298502_298511 = G__298528;
continue;
} else {
var vec__298504_298529 = cljs.core.first.call(null,seq__298499_298523__$1);
var k_298530 = cljs.core.nth.call(null,vec__298504_298529,(0),null);
var v_298531 = cljs.core.nth.call(null,vec__298504_298529,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_298530),v_298531);

var G__298532 = cljs.core.next.call(null,seq__298499_298523__$1);
var G__298533 = null;
var G__298534 = (0);
var G__298535 = (0);
seq__298499_298508 = G__298532;
chunk__298500_298509 = G__298533;
count__298501_298510 = G__298534;
i__298502_298511 = G__298535;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq298477){
var G__298478 = cljs.core.first.call(null,seq298477);
var seq298477__$1 = cljs.core.next.call(null,seq298477);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__298478,seq298477__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__36267__auto__ = [];
var len__36260__auto___298548 = arguments.length;
var i__36261__auto___298549 = (0);
while(true){
if((i__36261__auto___298549 < len__36260__auto___298548)){
args__36267__auto__.push((arguments[i__36261__auto___298549]));

var G__298550 = (i__36261__auto___298549 + (1));
i__36261__auto___298549 = G__298550;
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
var seq__298544_298551 = cljs.core.seq.call(null,keywords);
var chunk__298545_298552 = null;
var count__298546_298553 = (0);
var i__298547_298554 = (0);
while(true){
if((i__298547_298554 < count__298546_298553)){
var kw_298555 = cljs.core._nth.call(null,chunk__298545_298552,i__298547_298554);
style.removeProperty(dommy.utils.as_str.call(null,kw_298555));

var G__298556 = seq__298544_298551;
var G__298557 = chunk__298545_298552;
var G__298558 = count__298546_298553;
var G__298559 = (i__298547_298554 + (1));
seq__298544_298551 = G__298556;
chunk__298545_298552 = G__298557;
count__298546_298553 = G__298558;
i__298547_298554 = G__298559;
continue;
} else {
var temp__4657__auto___298560 = cljs.core.seq.call(null,seq__298544_298551);
if(temp__4657__auto___298560){
var seq__298544_298564__$1 = temp__4657__auto___298560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__298544_298564__$1)){
var c__36002__auto___298565 = cljs.core.chunk_first.call(null,seq__298544_298564__$1);
var G__298566 = cljs.core.chunk_rest.call(null,seq__298544_298564__$1);
var G__298567 = c__36002__auto___298565;
var G__298568 = cljs.core.count.call(null,c__36002__auto___298565);
var G__298569 = (0);
seq__298544_298551 = G__298566;
chunk__298545_298552 = G__298567;
count__298546_298553 = G__298568;
i__298547_298554 = G__298569;
continue;
} else {
var kw_298572 = cljs.core.first.call(null,seq__298544_298564__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_298572));

var G__298573 = cljs.core.next.call(null,seq__298544_298564__$1);
var G__298574 = null;
var G__298575 = (0);
var G__298576 = (0);
seq__298544_298551 = G__298573;
chunk__298545_298552 = G__298574;
count__298546_298553 = G__298575;
i__298547_298554 = G__298576;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq298542){
var G__298543 = cljs.core.first.call(null,seq298542);
var seq298542__$1 = cljs.core.next.call(null,seq298542);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__298543,seq298542__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__36267__auto__ = [];
var len__36260__auto___298598 = arguments.length;
var i__36261__auto___298599 = (0);
while(true){
if((i__36261__auto___298599 < len__36260__auto___298598)){
args__36267__auto__.push((arguments[i__36261__auto___298599]));

var G__298601 = (i__36261__auto___298599 + (1));
i__36261__auto___298599 = G__298601;
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

var seq__298587_298613 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__298588_298614 = null;
var count__298589_298615 = (0);
var i__298590_298616 = (0);
while(true){
if((i__298590_298616 < count__298589_298615)){
var vec__298591_298617 = cljs.core._nth.call(null,chunk__298588_298614,i__298590_298616);
var k_298618 = cljs.core.nth.call(null,vec__298591_298617,(0),null);
var v_298619 = cljs.core.nth.call(null,vec__298591_298617,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_298618,[cljs.core.str(v_298619),cljs.core.str("px")].join(''));

var G__298621 = seq__298587_298613;
var G__298622 = chunk__298588_298614;
var G__298623 = count__298589_298615;
var G__298624 = (i__298590_298616 + (1));
seq__298587_298613 = G__298621;
chunk__298588_298614 = G__298622;
count__298589_298615 = G__298623;
i__298590_298616 = G__298624;
continue;
} else {
var temp__4657__auto___298630 = cljs.core.seq.call(null,seq__298587_298613);
if(temp__4657__auto___298630){
var seq__298587_298631__$1 = temp__4657__auto___298630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__298587_298631__$1)){
var c__36002__auto___298632 = cljs.core.chunk_first.call(null,seq__298587_298631__$1);
var G__298633 = cljs.core.chunk_rest.call(null,seq__298587_298631__$1);
var G__298634 = c__36002__auto___298632;
var G__298635 = cljs.core.count.call(null,c__36002__auto___298632);
var G__298636 = (0);
seq__298587_298613 = G__298633;
chunk__298588_298614 = G__298634;
count__298589_298615 = G__298635;
i__298590_298616 = G__298636;
continue;
} else {
var vec__298596_298639 = cljs.core.first.call(null,seq__298587_298631__$1);
var k_298640 = cljs.core.nth.call(null,vec__298596_298639,(0),null);
var v_298641 = cljs.core.nth.call(null,vec__298596_298639,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_298640,[cljs.core.str(v_298641),cljs.core.str("px")].join(''));

var G__298649 = cljs.core.next.call(null,seq__298587_298631__$1);
var G__298650 = null;
var G__298651 = (0);
var G__298652 = (0);
seq__298587_298613 = G__298649;
chunk__298588_298614 = G__298650;
count__298589_298615 = G__298651;
i__298590_298616 = G__298652;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq298581){
var G__298582 = cljs.core.first.call(null,seq298581);
var seq298581__$1 = cljs.core.next.call(null,seq298581);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__298582,seq298581__$1);
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
var args298653 = [];
var len__36260__auto___298679 = arguments.length;
var i__36261__auto___298680 = (0);
while(true){
if((i__36261__auto___298680 < len__36260__auto___298679)){
args298653.push((arguments[i__36261__auto___298680]));

var G__298682 = (i__36261__auto___298680 + (1));
i__36261__auto___298680 = G__298682;
continue;
} else {
}
break;
}

var G__298663 = args298653.length;
switch (G__298663) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args298653.slice((3)),(0),null));
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
var G__298667 = elem;
(G__298667[k__$1] = v);

return G__298667;
} else {
var G__298668 = elem;
G__298668.setAttribute(k__$1,v);

return G__298668;
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

var seq__298669_298691 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__298670_298692 = null;
var count__298671_298693 = (0);
var i__298672_298694 = (0);
while(true){
if((i__298672_298694 < count__298671_298693)){
var vec__298673_298695 = cljs.core._nth.call(null,chunk__298670_298692,i__298672_298694);
var k_298696__$1 = cljs.core.nth.call(null,vec__298673_298695,(0),null);
var v_298697__$1 = cljs.core.nth.call(null,vec__298673_298695,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_298696__$1,v_298697__$1);

var G__298702 = seq__298669_298691;
var G__298703 = chunk__298670_298692;
var G__298704 = count__298671_298693;
var G__298705 = (i__298672_298694 + (1));
seq__298669_298691 = G__298702;
chunk__298670_298692 = G__298703;
count__298671_298693 = G__298704;
i__298672_298694 = G__298705;
continue;
} else {
var temp__4657__auto___298706 = cljs.core.seq.call(null,seq__298669_298691);
if(temp__4657__auto___298706){
var seq__298669_298707__$1 = temp__4657__auto___298706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__298669_298707__$1)){
var c__36002__auto___298708 = cljs.core.chunk_first.call(null,seq__298669_298707__$1);
var G__298709 = cljs.core.chunk_rest.call(null,seq__298669_298707__$1);
var G__298710 = c__36002__auto___298708;
var G__298711 = cljs.core.count.call(null,c__36002__auto___298708);
var G__298712 = (0);
seq__298669_298691 = G__298709;
chunk__298670_298692 = G__298710;
count__298671_298693 = G__298711;
i__298672_298694 = G__298712;
continue;
} else {
var vec__298674_298713 = cljs.core.first.call(null,seq__298669_298707__$1);
var k_298714__$1 = cljs.core.nth.call(null,vec__298674_298713,(0),null);
var v_298715__$1 = cljs.core.nth.call(null,vec__298674_298713,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_298714__$1,v_298715__$1);

var G__298718 = cljs.core.next.call(null,seq__298669_298707__$1);
var G__298719 = null;
var G__298720 = (0);
var G__298721 = (0);
seq__298669_298691 = G__298718;
chunk__298670_298692 = G__298719;
count__298671_298693 = G__298720;
i__298672_298694 = G__298721;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq298654){
var G__298655 = cljs.core.first.call(null,seq298654);
var seq298654__$1 = cljs.core.next.call(null,seq298654);
var G__298656 = cljs.core.first.call(null,seq298654__$1);
var seq298654__$2 = cljs.core.next.call(null,seq298654__$1);
var G__298657 = cljs.core.first.call(null,seq298654__$2);
var seq298654__$3 = cljs.core.next.call(null,seq298654__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__298655,G__298656,G__298657,seq298654__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args298731 = [];
var len__36260__auto___298741 = arguments.length;
var i__36261__auto___298742 = (0);
while(true){
if((i__36261__auto___298742 < len__36260__auto___298741)){
args298731.push((arguments[i__36261__auto___298742]));

var G__298743 = (i__36261__auto___298742 + (1));
i__36261__auto___298742 = G__298743;
continue;
} else {
}
break;
}

var G__298736 = args298731.length;
switch (G__298736) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args298731.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_298746__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_298746__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_298746__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__298737_298747 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__298738_298748 = null;
var count__298739_298749 = (0);
var i__298740_298750 = (0);
while(true){
if((i__298740_298750 < count__298739_298749)){
var k_298752__$1 = cljs.core._nth.call(null,chunk__298738_298748,i__298740_298750);
dommy.core.remove_attr_BANG_.call(null,elem,k_298752__$1);

var G__298753 = seq__298737_298747;
var G__298754 = chunk__298738_298748;
var G__298755 = count__298739_298749;
var G__298756 = (i__298740_298750 + (1));
seq__298737_298747 = G__298753;
chunk__298738_298748 = G__298754;
count__298739_298749 = G__298755;
i__298740_298750 = G__298756;
continue;
} else {
var temp__4657__auto___298757 = cljs.core.seq.call(null,seq__298737_298747);
if(temp__4657__auto___298757){
var seq__298737_298758__$1 = temp__4657__auto___298757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__298737_298758__$1)){
var c__36002__auto___298759 = cljs.core.chunk_first.call(null,seq__298737_298758__$1);
var G__298760 = cljs.core.chunk_rest.call(null,seq__298737_298758__$1);
var G__298761 = c__36002__auto___298759;
var G__298762 = cljs.core.count.call(null,c__36002__auto___298759);
var G__298763 = (0);
seq__298737_298747 = G__298760;
chunk__298738_298748 = G__298761;
count__298739_298749 = G__298762;
i__298740_298750 = G__298763;
continue;
} else {
var k_298764__$1 = cljs.core.first.call(null,seq__298737_298758__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_298764__$1);

var G__298765 = cljs.core.next.call(null,seq__298737_298758__$1);
var G__298766 = null;
var G__298767 = (0);
var G__298768 = (0);
seq__298737_298747 = G__298765;
chunk__298738_298748 = G__298766;
count__298739_298749 = G__298767;
i__298740_298750 = G__298768;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq298732){
var G__298733 = cljs.core.first.call(null,seq298732);
var seq298732__$1 = cljs.core.next.call(null,seq298732);
var G__298734 = cljs.core.first.call(null,seq298732__$1);
var seq298732__$2 = cljs.core.next.call(null,seq298732__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__298733,G__298734,seq298732__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args298769 = [];
var len__36260__auto___298790 = arguments.length;
var i__36261__auto___298791 = (0);
while(true){
if((i__36261__auto___298791 < len__36260__auto___298790)){
args298769.push((arguments[i__36261__auto___298791]));

var G__298793 = (i__36261__auto___298791 + (1));
i__36261__auto___298791 = G__298793;
continue;
} else {
}
break;
}

var G__298771 = args298769.length;
switch (G__298771) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args298769.length)].join('')));

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
var args298799 = [];
var len__36260__auto___298825 = arguments.length;
var i__36261__auto___298826 = (0);
while(true){
if((i__36261__auto___298826 < len__36260__auto___298825)){
args298799.push((arguments[i__36261__auto___298826]));

var G__298829 = (i__36261__auto___298826 + (1));
i__36261__auto___298826 = G__298829;
continue;
} else {
}
break;
}

var G__298809 = args298799.length;
switch (G__298809) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args298799.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___298840 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___298840)){
var class_list_298841 = temp__4655__auto___298840;
var seq__298812_298842 = cljs.core.seq.call(null,classes__$1);
var chunk__298813_298843 = null;
var count__298814_298844 = (0);
var i__298815_298845 = (0);
while(true){
if((i__298815_298845 < count__298814_298844)){
var c_298847 = cljs.core._nth.call(null,chunk__298813_298843,i__298815_298845);
class_list_298841.add(c_298847);

var G__298848 = seq__298812_298842;
var G__298849 = chunk__298813_298843;
var G__298850 = count__298814_298844;
var G__298851 = (i__298815_298845 + (1));
seq__298812_298842 = G__298848;
chunk__298813_298843 = G__298849;
count__298814_298844 = G__298850;
i__298815_298845 = G__298851;
continue;
} else {
var temp__4657__auto___298854 = cljs.core.seq.call(null,seq__298812_298842);
if(temp__4657__auto___298854){
var seq__298812_298855__$1 = temp__4657__auto___298854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__298812_298855__$1)){
var c__36002__auto___298857 = cljs.core.chunk_first.call(null,seq__298812_298855__$1);
var G__298859 = cljs.core.chunk_rest.call(null,seq__298812_298855__$1);
var G__298860 = c__36002__auto___298857;
var G__298861 = cljs.core.count.call(null,c__36002__auto___298857);
var G__298862 = (0);
seq__298812_298842 = G__298859;
chunk__298813_298843 = G__298860;
count__298814_298844 = G__298861;
i__298815_298845 = G__298862;
continue;
} else {
var c_298863 = cljs.core.first.call(null,seq__298812_298855__$1);
class_list_298841.add(c_298863);

var G__298864 = cljs.core.next.call(null,seq__298812_298855__$1);
var G__298865 = null;
var G__298866 = (0);
var G__298867 = (0);
seq__298812_298842 = G__298864;
chunk__298813_298843 = G__298865;
count__298814_298844 = G__298866;
i__298815_298845 = G__298867;
continue;
}
} else {
}
}
break;
}
} else {
var seq__298816_298868 = cljs.core.seq.call(null,classes__$1);
var chunk__298817_298869 = null;
var count__298818_298870 = (0);
var i__298819_298871 = (0);
while(true){
if((i__298819_298871 < count__298818_298870)){
var c_298901 = cljs.core._nth.call(null,chunk__298817_298869,i__298819_298871);
var class_name_298904 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_298904,c_298901))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_298904 === ""))?c_298901:[cljs.core.str(class_name_298904),cljs.core.str(" "),cljs.core.str(c_298901)].join('')));
}

var G__298907 = seq__298816_298868;
var G__298908 = chunk__298817_298869;
var G__298909 = count__298818_298870;
var G__298910 = (i__298819_298871 + (1));
seq__298816_298868 = G__298907;
chunk__298817_298869 = G__298908;
count__298818_298870 = G__298909;
i__298819_298871 = G__298910;
continue;
} else {
var temp__4657__auto___298911 = cljs.core.seq.call(null,seq__298816_298868);
if(temp__4657__auto___298911){
var seq__298816_298912__$1 = temp__4657__auto___298911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__298816_298912__$1)){
var c__36002__auto___298913 = cljs.core.chunk_first.call(null,seq__298816_298912__$1);
var G__298914 = cljs.core.chunk_rest.call(null,seq__298816_298912__$1);
var G__298915 = c__36002__auto___298913;
var G__298916 = cljs.core.count.call(null,c__36002__auto___298913);
var G__298917 = (0);
seq__298816_298868 = G__298914;
chunk__298817_298869 = G__298915;
count__298818_298870 = G__298916;
i__298819_298871 = G__298917;
continue;
} else {
var c_298920 = cljs.core.first.call(null,seq__298816_298912__$1);
var class_name_298922 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_298922,c_298920))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_298922 === ""))?c_298920:[cljs.core.str(class_name_298922),cljs.core.str(" "),cljs.core.str(c_298920)].join('')));
}

var G__298928 = cljs.core.next.call(null,seq__298816_298912__$1);
var G__298929 = null;
var G__298930 = (0);
var G__298931 = (0);
seq__298816_298868 = G__298928;
chunk__298817_298869 = G__298929;
count__298818_298870 = G__298930;
i__298819_298871 = G__298931;
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
var seq__298820_298932 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__298821_298933 = null;
var count__298822_298934 = (0);
var i__298823_298935 = (0);
while(true){
if((i__298823_298935 < count__298822_298934)){
var c_298955 = cljs.core._nth.call(null,chunk__298821_298933,i__298823_298935);
dommy.core.add_class_BANG_.call(null,elem,c_298955);

var G__298961 = seq__298820_298932;
var G__298962 = chunk__298821_298933;
var G__298963 = count__298822_298934;
var G__298964 = (i__298823_298935 + (1));
seq__298820_298932 = G__298961;
chunk__298821_298933 = G__298962;
count__298822_298934 = G__298963;
i__298823_298935 = G__298964;
continue;
} else {
var temp__4657__auto___298966 = cljs.core.seq.call(null,seq__298820_298932);
if(temp__4657__auto___298966){
var seq__298820_298971__$1 = temp__4657__auto___298966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__298820_298971__$1)){
var c__36002__auto___298972 = cljs.core.chunk_first.call(null,seq__298820_298971__$1);
var G__298973 = cljs.core.chunk_rest.call(null,seq__298820_298971__$1);
var G__298974 = c__36002__auto___298972;
var G__298975 = cljs.core.count.call(null,c__36002__auto___298972);
var G__298976 = (0);
seq__298820_298932 = G__298973;
chunk__298821_298933 = G__298974;
count__298822_298934 = G__298975;
i__298823_298935 = G__298976;
continue;
} else {
var c_298977 = cljs.core.first.call(null,seq__298820_298971__$1);
dommy.core.add_class_BANG_.call(null,elem,c_298977);

var G__298978 = cljs.core.next.call(null,seq__298820_298971__$1);
var G__298979 = null;
var G__298980 = (0);
var G__298981 = (0);
seq__298820_298932 = G__298978;
chunk__298821_298933 = G__298979;
count__298822_298934 = G__298980;
i__298823_298935 = G__298981;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq298800){
var G__298801 = cljs.core.first.call(null,seq298800);
var seq298800__$1 = cljs.core.next.call(null,seq298800);
var G__298802 = cljs.core.first.call(null,seq298800__$1);
var seq298800__$2 = cljs.core.next.call(null,seq298800__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__298801,G__298802,seq298800__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args298982 = [];
var len__36260__auto___299014 = arguments.length;
var i__36261__auto___299015 = (0);
while(true){
if((i__36261__auto___299015 < len__36260__auto___299014)){
args298982.push((arguments[i__36261__auto___299015]));

var G__299017 = (i__36261__auto___299015 + (1));
i__36261__auto___299015 = G__299017;
continue;
} else {
}
break;
}

var G__298993 = args298982.length;
switch (G__298993) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args298982.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___299026 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___299026)){
var class_list_299027 = temp__4655__auto___299026;
class_list_299027.remove(c__$1);
} else {
var class_name_299028 = dommy.core.class$.call(null,elem);
var new_class_name_299029 = dommy.utils.remove_class_str.call(null,class_name_299028,c__$1);
if((class_name_299028 === new_class_name_299029)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_299029);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__299001 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__299002 = null;
var count__299003 = (0);
var i__299004 = (0);
while(true){
if((i__299004 < count__299003)){
var c = cljs.core._nth.call(null,chunk__299002,i__299004);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__299039 = seq__299001;
var G__299040 = chunk__299002;
var G__299041 = count__299003;
var G__299042 = (i__299004 + (1));
seq__299001 = G__299039;
chunk__299002 = G__299040;
count__299003 = G__299041;
i__299004 = G__299042;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__299001);
if(temp__4657__auto__){
var seq__299001__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__299001__$1)){
var c__36002__auto__ = cljs.core.chunk_first.call(null,seq__299001__$1);
var G__299044 = cljs.core.chunk_rest.call(null,seq__299001__$1);
var G__299045 = c__36002__auto__;
var G__299046 = cljs.core.count.call(null,c__36002__auto__);
var G__299047 = (0);
seq__299001 = G__299044;
chunk__299002 = G__299045;
count__299003 = G__299046;
i__299004 = G__299047;
continue;
} else {
var c = cljs.core.first.call(null,seq__299001__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__299052 = cljs.core.next.call(null,seq__299001__$1);
var G__299053 = null;
var G__299054 = (0);
var G__299055 = (0);
seq__299001 = G__299052;
chunk__299002 = G__299053;
count__299003 = G__299054;
i__299004 = G__299055;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq298983){
var G__298984 = cljs.core.first.call(null,seq298983);
var seq298983__$1 = cljs.core.next.call(null,seq298983);
var G__298985 = cljs.core.first.call(null,seq298983__$1);
var seq298983__$2 = cljs.core.next.call(null,seq298983__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__298984,G__298985,seq298983__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args299057 = [];
var len__36260__auto___299061 = arguments.length;
var i__36261__auto___299062 = (0);
while(true){
if((i__36261__auto___299062 < len__36260__auto___299061)){
args299057.push((arguments[i__36261__auto___299062]));

var G__299063 = (i__36261__auto___299062 + (1));
i__36261__auto___299062 = G__299063;
continue;
} else {
}
break;
}

var G__299060 = args299057.length;
switch (G__299060) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args299057.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___299067 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___299067)){
var class_list_299069 = temp__4655__auto___299067;
class_list_299069.toggle(c__$1);
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
var args299078 = [];
var len__36260__auto___299099 = arguments.length;
var i__36261__auto___299100 = (0);
while(true){
if((i__36261__auto___299100 < len__36260__auto___299099)){
args299078.push((arguments[i__36261__auto___299100]));

var G__299102 = (i__36261__auto___299100 + (1));
i__36261__auto___299100 = G__299102;
continue;
} else {
}
break;
}

var G__299095 = args299078.length;
switch (G__299095) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args299078.length)].join('')));

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
var args299131 = [];
var len__36260__auto___299138 = arguments.length;
var i__36261__auto___299139 = (0);
while(true){
if((i__36261__auto___299139 < len__36260__auto___299138)){
args299131.push((arguments[i__36261__auto___299139]));

var G__299141 = (i__36261__auto___299139 + (1));
i__36261__auto___299139 = G__299141;
continue;
} else {
}
break;
}

var G__299136 = args299131.length;
switch (G__299136) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args299131.length)].join('')));

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
var args299150 = [];
var len__36260__auto___299167 = arguments.length;
var i__36261__auto___299168 = (0);
while(true){
if((i__36261__auto___299168 < len__36260__auto___299167)){
args299150.push((arguments[i__36261__auto___299168]));

var G__299169 = (i__36261__auto___299168 + (1));
i__36261__auto___299168 = G__299169;
continue;
} else {
}
break;
}

var G__299161 = args299150.length;
switch (G__299161) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args299150.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__299162 = parent;
G__299162.appendChild(child);

return G__299162;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__299163_299171 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__299164_299172 = null;
var count__299165_299173 = (0);
var i__299166_299174 = (0);
while(true){
if((i__299166_299174 < count__299165_299173)){
var c_299175 = cljs.core._nth.call(null,chunk__299164_299172,i__299166_299174);
dommy.core.append_BANG_.call(null,parent,c_299175);

var G__299176 = seq__299163_299171;
var G__299177 = chunk__299164_299172;
var G__299178 = count__299165_299173;
var G__299179 = (i__299166_299174 + (1));
seq__299163_299171 = G__299176;
chunk__299164_299172 = G__299177;
count__299165_299173 = G__299178;
i__299166_299174 = G__299179;
continue;
} else {
var temp__4657__auto___299184 = cljs.core.seq.call(null,seq__299163_299171);
if(temp__4657__auto___299184){
var seq__299163_299185__$1 = temp__4657__auto___299184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__299163_299185__$1)){
var c__36002__auto___299186 = cljs.core.chunk_first.call(null,seq__299163_299185__$1);
var G__299187 = cljs.core.chunk_rest.call(null,seq__299163_299185__$1);
var G__299188 = c__36002__auto___299186;
var G__299189 = cljs.core.count.call(null,c__36002__auto___299186);
var G__299190 = (0);
seq__299163_299171 = G__299187;
chunk__299164_299172 = G__299188;
count__299165_299173 = G__299189;
i__299166_299174 = G__299190;
continue;
} else {
var c_299191 = cljs.core.first.call(null,seq__299163_299185__$1);
dommy.core.append_BANG_.call(null,parent,c_299191);

var G__299194 = cljs.core.next.call(null,seq__299163_299185__$1);
var G__299195 = null;
var G__299196 = (0);
var G__299197 = (0);
seq__299163_299171 = G__299194;
chunk__299164_299172 = G__299195;
count__299165_299173 = G__299196;
i__299166_299174 = G__299197;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq299151){
var G__299152 = cljs.core.first.call(null,seq299151);
var seq299151__$1 = cljs.core.next.call(null,seq299151);
var G__299153 = cljs.core.first.call(null,seq299151__$1);
var seq299151__$2 = cljs.core.next.call(null,seq299151__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__299152,G__299153,seq299151__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args299201 = [];
var len__36260__auto___299222 = arguments.length;
var i__36261__auto___299223 = (0);
while(true){
if((i__36261__auto___299223 < len__36260__auto___299222)){
args299201.push((arguments[i__36261__auto___299223]));

var G__299225 = (i__36261__auto___299223 + (1));
i__36261__auto___299223 = G__299225;
continue;
} else {
}
break;
}

var G__299209 = args299201.length;
switch (G__299209) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args299201.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__299211 = parent;
G__299211.insertBefore(child,parent.firstChild);

return G__299211;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__299213_299244 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__299214_299245 = null;
var count__299215_299246 = (0);
var i__299216_299247 = (0);
while(true){
if((i__299216_299247 < count__299215_299246)){
var c_299248 = cljs.core._nth.call(null,chunk__299214_299245,i__299216_299247);
dommy.core.prepend_BANG_.call(null,parent,c_299248);

var G__299249 = seq__299213_299244;
var G__299250 = chunk__299214_299245;
var G__299251 = count__299215_299246;
var G__299252 = (i__299216_299247 + (1));
seq__299213_299244 = G__299249;
chunk__299214_299245 = G__299250;
count__299215_299246 = G__299251;
i__299216_299247 = G__299252;
continue;
} else {
var temp__4657__auto___299253 = cljs.core.seq.call(null,seq__299213_299244);
if(temp__4657__auto___299253){
var seq__299213_299254__$1 = temp__4657__auto___299253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__299213_299254__$1)){
var c__36002__auto___299255 = cljs.core.chunk_first.call(null,seq__299213_299254__$1);
var G__299256 = cljs.core.chunk_rest.call(null,seq__299213_299254__$1);
var G__299257 = c__36002__auto___299255;
var G__299258 = cljs.core.count.call(null,c__36002__auto___299255);
var G__299259 = (0);
seq__299213_299244 = G__299256;
chunk__299214_299245 = G__299257;
count__299215_299246 = G__299258;
i__299216_299247 = G__299259;
continue;
} else {
var c_299265 = cljs.core.first.call(null,seq__299213_299254__$1);
dommy.core.prepend_BANG_.call(null,parent,c_299265);

var G__299267 = cljs.core.next.call(null,seq__299213_299254__$1);
var G__299268 = null;
var G__299269 = (0);
var G__299270 = (0);
seq__299213_299244 = G__299267;
chunk__299214_299245 = G__299268;
count__299215_299246 = G__299269;
i__299216_299247 = G__299270;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq299203){
var G__299204 = cljs.core.first.call(null,seq299203);
var seq299203__$1 = cljs.core.next.call(null,seq299203);
var G__299205 = cljs.core.first.call(null,seq299203__$1);
var seq299203__$2 = cljs.core.next.call(null,seq299203__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__299204,G__299205,seq299203__$2);
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
var temp__4655__auto___299279 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___299279)){
var next_299284 = temp__4655__auto___299279;
dommy.core.insert_before_BANG_.call(null,elem,next_299284);
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
var args299293 = [];
var len__36260__auto___299302 = arguments.length;
var i__36261__auto___299304 = (0);
while(true){
if((i__36261__auto___299304 < len__36260__auto___299302)){
args299293.push((arguments[i__36261__auto___299304]));

var G__299309 = (i__36261__auto___299304 + (1));
i__36261__auto___299304 = G__299309;
continue;
} else {
}
break;
}

var G__299295 = args299293.length;
switch (G__299295) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args299293.length)].join('')));

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
var G__299301 = p;
G__299301.removeChild(elem);

return G__299301;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__299311){
var vec__299312 = p__299311;
var special_mouse_event = cljs.core.nth.call(null,vec__299312,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__299312,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__299312,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__299312,special_mouse_event,real_mouse_event){
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
;})(vec__299312,special_mouse_event,real_mouse_event))
});})(vec__299312,special_mouse_event,real_mouse_event))
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
var len__36260__auto___299335 = arguments.length;
var i__36261__auto___299336 = (0);
while(true){
if((i__36261__auto___299336 < len__36260__auto___299335)){
args__36267__auto__.push((arguments[i__36261__auto___299336]));

var G__299338 = (i__36261__auto___299336 + (1));
i__36261__auto___299336 = G__299338;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq299331){
var G__299332 = cljs.core.first.call(null,seq299331);
var seq299331__$1 = cljs.core.next.call(null,seq299331);
var G__299333 = cljs.core.first.call(null,seq299331__$1);
var seq299331__$2 = cljs.core.next.call(null,seq299331__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__299332,G__299333,seq299331__$2);
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
var len__36260__auto___299391 = arguments.length;
var i__36261__auto___299392 = (0);
while(true){
if((i__36261__auto___299392 < len__36260__auto___299391)){
args__36267__auto__.push((arguments[i__36261__auto___299392]));

var G__299393 = (i__36261__auto___299392 + (1));
i__36261__auto___299392 = G__299393;
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

var vec__299354_299394 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_299395 = cljs.core.nth.call(null,vec__299354_299394,(0),null);
var selector_299396 = cljs.core.nth.call(null,vec__299354_299394,(1),null);
var seq__299355_299397 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__299362_299398 = null;
var count__299363_299399 = (0);
var i__299364_299400 = (0);
while(true){
if((i__299364_299400 < count__299363_299399)){
var vec__299376_299401 = cljs.core._nth.call(null,chunk__299362_299398,i__299364_299400);
var orig_type_299402 = cljs.core.nth.call(null,vec__299376_299401,(0),null);
var f_299403 = cljs.core.nth.call(null,vec__299376_299401,(1),null);
var seq__299365_299404 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_299402,cljs.core.PersistentArrayMap.fromArray([orig_type_299402,cljs.core.identity], true, false)));
var chunk__299367_299405 = null;
var count__299368_299406 = (0);
var i__299369_299407 = (0);
while(true){
if((i__299369_299407 < count__299368_299406)){
var vec__299377_299408 = cljs.core._nth.call(null,chunk__299367_299405,i__299369_299407);
var actual_type_299409 = cljs.core.nth.call(null,vec__299377_299408,(0),null);
var factory_299410 = cljs.core.nth.call(null,vec__299377_299408,(1),null);
var canonical_f_299411 = (cljs.core.truth_(selector_299396)?cljs.core.partial.call(null,dommy.core.live_listener,elem_299395,selector_299396):cljs.core.identity).call(null,factory_299410.call(null,f_299403));
dommy.core.update_event_listeners_BANG_.call(null,elem_299395,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_299396,actual_type_299409,f_299403], null),canonical_f_299411);

if(cljs.core.truth_(elem_299395.addEventListener)){
elem_299395.addEventListener(cljs.core.name.call(null,actual_type_299409),canonical_f_299411);
} else {
elem_299395.attachEvent(cljs.core.name.call(null,actual_type_299409),canonical_f_299411);
}

var G__299426 = seq__299365_299404;
var G__299427 = chunk__299367_299405;
var G__299428 = count__299368_299406;
var G__299429 = (i__299369_299407 + (1));
seq__299365_299404 = G__299426;
chunk__299367_299405 = G__299427;
count__299368_299406 = G__299428;
i__299369_299407 = G__299429;
continue;
} else {
var temp__4657__auto___299430 = cljs.core.seq.call(null,seq__299365_299404);
if(temp__4657__auto___299430){
var seq__299365_299432__$1 = temp__4657__auto___299430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__299365_299432__$1)){
var c__36002__auto___299436 = cljs.core.chunk_first.call(null,seq__299365_299432__$1);
var G__299437 = cljs.core.chunk_rest.call(null,seq__299365_299432__$1);
var G__299438 = c__36002__auto___299436;
var G__299439 = cljs.core.count.call(null,c__36002__auto___299436);
var G__299440 = (0);
seq__299365_299404 = G__299437;
chunk__299367_299405 = G__299438;
count__299368_299406 = G__299439;
i__299369_299407 = G__299440;
continue;
} else {
var vec__299381_299449 = cljs.core.first.call(null,seq__299365_299432__$1);
var actual_type_299450 = cljs.core.nth.call(null,vec__299381_299449,(0),null);
var factory_299451 = cljs.core.nth.call(null,vec__299381_299449,(1),null);
var canonical_f_299453 = (cljs.core.truth_(selector_299396)?cljs.core.partial.call(null,dommy.core.live_listener,elem_299395,selector_299396):cljs.core.identity).call(null,factory_299451.call(null,f_299403));
dommy.core.update_event_listeners_BANG_.call(null,elem_299395,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_299396,actual_type_299450,f_299403], null),canonical_f_299453);

if(cljs.core.truth_(elem_299395.addEventListener)){
elem_299395.addEventListener(cljs.core.name.call(null,actual_type_299450),canonical_f_299453);
} else {
elem_299395.attachEvent(cljs.core.name.call(null,actual_type_299450),canonical_f_299453);
}

var G__299454 = cljs.core.next.call(null,seq__299365_299432__$1);
var G__299455 = null;
var G__299456 = (0);
var G__299457 = (0);
seq__299365_299404 = G__299454;
chunk__299367_299405 = G__299455;
count__299368_299406 = G__299456;
i__299369_299407 = G__299457;
continue;
}
} else {
}
}
break;
}

var G__299458 = seq__299355_299397;
var G__299459 = chunk__299362_299398;
var G__299460 = count__299363_299399;
var G__299461 = (i__299364_299400 + (1));
seq__299355_299397 = G__299458;
chunk__299362_299398 = G__299459;
count__299363_299399 = G__299460;
i__299364_299400 = G__299461;
continue;
} else {
var temp__4657__auto___299462 = cljs.core.seq.call(null,seq__299355_299397);
if(temp__4657__auto___299462){
var seq__299355_299463__$1 = temp__4657__auto___299462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__299355_299463__$1)){
var c__36002__auto___299464 = cljs.core.chunk_first.call(null,seq__299355_299463__$1);
var G__299465 = cljs.core.chunk_rest.call(null,seq__299355_299463__$1);
var G__299466 = c__36002__auto___299464;
var G__299467 = cljs.core.count.call(null,c__36002__auto___299464);
var G__299468 = (0);
seq__299355_299397 = G__299465;
chunk__299362_299398 = G__299466;
count__299363_299399 = G__299467;
i__299364_299400 = G__299468;
continue;
} else {
var vec__299387_299469 = cljs.core.first.call(null,seq__299355_299463__$1);
var orig_type_299470 = cljs.core.nth.call(null,vec__299387_299469,(0),null);
var f_299471 = cljs.core.nth.call(null,vec__299387_299469,(1),null);
var seq__299356_299472 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_299470,cljs.core.PersistentArrayMap.fromArray([orig_type_299470,cljs.core.identity], true, false)));
var chunk__299358_299473 = null;
var count__299359_299474 = (0);
var i__299360_299475 = (0);
while(true){
if((i__299360_299475 < count__299359_299474)){
var vec__299388_299476 = cljs.core._nth.call(null,chunk__299358_299473,i__299360_299475);
var actual_type_299477 = cljs.core.nth.call(null,vec__299388_299476,(0),null);
var factory_299478 = cljs.core.nth.call(null,vec__299388_299476,(1),null);
var canonical_f_299481 = (cljs.core.truth_(selector_299396)?cljs.core.partial.call(null,dommy.core.live_listener,elem_299395,selector_299396):cljs.core.identity).call(null,factory_299478.call(null,f_299471));
dommy.core.update_event_listeners_BANG_.call(null,elem_299395,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_299396,actual_type_299477,f_299471], null),canonical_f_299481);

if(cljs.core.truth_(elem_299395.addEventListener)){
elem_299395.addEventListener(cljs.core.name.call(null,actual_type_299477),canonical_f_299481);
} else {
elem_299395.attachEvent(cljs.core.name.call(null,actual_type_299477),canonical_f_299481);
}

var G__299489 = seq__299356_299472;
var G__299490 = chunk__299358_299473;
var G__299491 = count__299359_299474;
var G__299492 = (i__299360_299475 + (1));
seq__299356_299472 = G__299489;
chunk__299358_299473 = G__299490;
count__299359_299474 = G__299491;
i__299360_299475 = G__299492;
continue;
} else {
var temp__4657__auto___299494__$1 = cljs.core.seq.call(null,seq__299356_299472);
if(temp__4657__auto___299494__$1){
var seq__299356_299495__$1 = temp__4657__auto___299494__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__299356_299495__$1)){
var c__36002__auto___299496 = cljs.core.chunk_first.call(null,seq__299356_299495__$1);
var G__299497 = cljs.core.chunk_rest.call(null,seq__299356_299495__$1);
var G__299498 = c__36002__auto___299496;
var G__299499 = cljs.core.count.call(null,c__36002__auto___299496);
var G__299500 = (0);
seq__299356_299472 = G__299497;
chunk__299358_299473 = G__299498;
count__299359_299474 = G__299499;
i__299360_299475 = G__299500;
continue;
} else {
var vec__299389_299501 = cljs.core.first.call(null,seq__299356_299495__$1);
var actual_type_299502 = cljs.core.nth.call(null,vec__299389_299501,(0),null);
var factory_299503 = cljs.core.nth.call(null,vec__299389_299501,(1),null);
var canonical_f_299504 = (cljs.core.truth_(selector_299396)?cljs.core.partial.call(null,dommy.core.live_listener,elem_299395,selector_299396):cljs.core.identity).call(null,factory_299503.call(null,f_299471));
dommy.core.update_event_listeners_BANG_.call(null,elem_299395,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_299396,actual_type_299502,f_299471], null),canonical_f_299504);

if(cljs.core.truth_(elem_299395.addEventListener)){
elem_299395.addEventListener(cljs.core.name.call(null,actual_type_299502),canonical_f_299504);
} else {
elem_299395.attachEvent(cljs.core.name.call(null,actual_type_299502),canonical_f_299504);
}

var G__299505 = cljs.core.next.call(null,seq__299356_299495__$1);
var G__299506 = null;
var G__299507 = (0);
var G__299508 = (0);
seq__299356_299472 = G__299505;
chunk__299358_299473 = G__299506;
count__299359_299474 = G__299507;
i__299360_299475 = G__299508;
continue;
}
} else {
}
}
break;
}

var G__299509 = cljs.core.next.call(null,seq__299355_299463__$1);
var G__299510 = null;
var G__299511 = (0);
var G__299512 = (0);
seq__299355_299397 = G__299509;
chunk__299362_299398 = G__299510;
count__299363_299399 = G__299511;
i__299364_299400 = G__299512;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq299348){
var G__299349 = cljs.core.first.call(null,seq299348);
var seq299348__$1 = cljs.core.next.call(null,seq299348);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__299349,seq299348__$1);
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
var len__36260__auto___299575 = arguments.length;
var i__36261__auto___299576 = (0);
while(true){
if((i__36261__auto___299576 < len__36260__auto___299575)){
args__36267__auto__.push((arguments[i__36261__auto___299576]));

var G__299581 = (i__36261__auto___299576 + (1));
i__36261__auto___299576 = G__299581;
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

var vec__299523_299597 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_299598 = cljs.core.nth.call(null,vec__299523_299597,(0),null);
var selector_299599 = cljs.core.nth.call(null,vec__299523_299597,(1),null);
var seq__299524_299600 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__299531_299601 = null;
var count__299532_299602 = (0);
var i__299533_299603 = (0);
while(true){
if((i__299533_299603 < count__299532_299602)){
var vec__299540_299604 = cljs.core._nth.call(null,chunk__299531_299601,i__299533_299603);
var orig_type_299605 = cljs.core.nth.call(null,vec__299540_299604,(0),null);
var f_299606 = cljs.core.nth.call(null,vec__299540_299604,(1),null);
var seq__299534_299607 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_299605,cljs.core.PersistentArrayMap.fromArray([orig_type_299605,cljs.core.identity], true, false)));
var chunk__299536_299608 = null;
var count__299537_299609 = (0);
var i__299538_299610 = (0);
while(true){
if((i__299538_299610 < count__299537_299609)){
var vec__299541_299612 = cljs.core._nth.call(null,chunk__299536_299608,i__299538_299610);
var actual_type_299613 = cljs.core.nth.call(null,vec__299541_299612,(0),null);
var __299614 = cljs.core.nth.call(null,vec__299541_299612,(1),null);
var keys_299615 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_299599,actual_type_299613,f_299606], null);
var canonical_f_299616 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_299598),keys_299615);
dommy.core.update_event_listeners_BANG_.call(null,elem_299598,dommy.utils.dissoc_in,keys_299615);

if(cljs.core.truth_(elem_299598.removeEventListener)){
elem_299598.removeEventListener(cljs.core.name.call(null,actual_type_299613),canonical_f_299616);
} else {
elem_299598.detachEvent(cljs.core.name.call(null,actual_type_299613),canonical_f_299616);
}

var G__299618 = seq__299534_299607;
var G__299619 = chunk__299536_299608;
var G__299620 = count__299537_299609;
var G__299621 = (i__299538_299610 + (1));
seq__299534_299607 = G__299618;
chunk__299536_299608 = G__299619;
count__299537_299609 = G__299620;
i__299538_299610 = G__299621;
continue;
} else {
var temp__4657__auto___299622 = cljs.core.seq.call(null,seq__299534_299607);
if(temp__4657__auto___299622){
var seq__299534_299623__$1 = temp__4657__auto___299622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__299534_299623__$1)){
var c__36002__auto___299624 = cljs.core.chunk_first.call(null,seq__299534_299623__$1);
var G__299625 = cljs.core.chunk_rest.call(null,seq__299534_299623__$1);
var G__299626 = c__36002__auto___299624;
var G__299627 = cljs.core.count.call(null,c__36002__auto___299624);
var G__299628 = (0);
seq__299534_299607 = G__299625;
chunk__299536_299608 = G__299626;
count__299537_299609 = G__299627;
i__299538_299610 = G__299628;
continue;
} else {
var vec__299542_299630 = cljs.core.first.call(null,seq__299534_299623__$1);
var actual_type_299631 = cljs.core.nth.call(null,vec__299542_299630,(0),null);
var __299632 = cljs.core.nth.call(null,vec__299542_299630,(1),null);
var keys_299633 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_299599,actual_type_299631,f_299606], null);
var canonical_f_299634 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_299598),keys_299633);
dommy.core.update_event_listeners_BANG_.call(null,elem_299598,dommy.utils.dissoc_in,keys_299633);

if(cljs.core.truth_(elem_299598.removeEventListener)){
elem_299598.removeEventListener(cljs.core.name.call(null,actual_type_299631),canonical_f_299634);
} else {
elem_299598.detachEvent(cljs.core.name.call(null,actual_type_299631),canonical_f_299634);
}

var G__299635 = cljs.core.next.call(null,seq__299534_299623__$1);
var G__299636 = null;
var G__299637 = (0);
var G__299638 = (0);
seq__299534_299607 = G__299635;
chunk__299536_299608 = G__299636;
count__299537_299609 = G__299637;
i__299538_299610 = G__299638;
continue;
}
} else {
}
}
break;
}

var G__299639 = seq__299524_299600;
var G__299640 = chunk__299531_299601;
var G__299641 = count__299532_299602;
var G__299642 = (i__299533_299603 + (1));
seq__299524_299600 = G__299639;
chunk__299531_299601 = G__299640;
count__299532_299602 = G__299641;
i__299533_299603 = G__299642;
continue;
} else {
var temp__4657__auto___299643 = cljs.core.seq.call(null,seq__299524_299600);
if(temp__4657__auto___299643){
var seq__299524_299644__$1 = temp__4657__auto___299643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__299524_299644__$1)){
var c__36002__auto___299645 = cljs.core.chunk_first.call(null,seq__299524_299644__$1);
var G__299646 = cljs.core.chunk_rest.call(null,seq__299524_299644__$1);
var G__299647 = c__36002__auto___299645;
var G__299648 = cljs.core.count.call(null,c__36002__auto___299645);
var G__299649 = (0);
seq__299524_299600 = G__299646;
chunk__299531_299601 = G__299647;
count__299532_299602 = G__299648;
i__299533_299603 = G__299649;
continue;
} else {
var vec__299543_299650 = cljs.core.first.call(null,seq__299524_299644__$1);
var orig_type_299651 = cljs.core.nth.call(null,vec__299543_299650,(0),null);
var f_299652 = cljs.core.nth.call(null,vec__299543_299650,(1),null);
var seq__299525_299657 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_299651,cljs.core.PersistentArrayMap.fromArray([orig_type_299651,cljs.core.identity], true, false)));
var chunk__299527_299658 = null;
var count__299528_299659 = (0);
var i__299529_299660 = (0);
while(true){
if((i__299529_299660 < count__299528_299659)){
var vec__299551_299669 = cljs.core._nth.call(null,chunk__299527_299658,i__299529_299660);
var actual_type_299670 = cljs.core.nth.call(null,vec__299551_299669,(0),null);
var __299671 = cljs.core.nth.call(null,vec__299551_299669,(1),null);
var keys_299674 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_299599,actual_type_299670,f_299652], null);
var canonical_f_299675 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_299598),keys_299674);
dommy.core.update_event_listeners_BANG_.call(null,elem_299598,dommy.utils.dissoc_in,keys_299674);

if(cljs.core.truth_(elem_299598.removeEventListener)){
elem_299598.removeEventListener(cljs.core.name.call(null,actual_type_299670),canonical_f_299675);
} else {
elem_299598.detachEvent(cljs.core.name.call(null,actual_type_299670),canonical_f_299675);
}

var G__299676 = seq__299525_299657;
var G__299677 = chunk__299527_299658;
var G__299678 = count__299528_299659;
var G__299679 = (i__299529_299660 + (1));
seq__299525_299657 = G__299676;
chunk__299527_299658 = G__299677;
count__299528_299659 = G__299678;
i__299529_299660 = G__299679;
continue;
} else {
var temp__4657__auto___299680__$1 = cljs.core.seq.call(null,seq__299525_299657);
if(temp__4657__auto___299680__$1){
var seq__299525_299681__$1 = temp__4657__auto___299680__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__299525_299681__$1)){
var c__36002__auto___299682 = cljs.core.chunk_first.call(null,seq__299525_299681__$1);
var G__299683 = cljs.core.chunk_rest.call(null,seq__299525_299681__$1);
var G__299684 = c__36002__auto___299682;
var G__299685 = cljs.core.count.call(null,c__36002__auto___299682);
var G__299686 = (0);
seq__299525_299657 = G__299683;
chunk__299527_299658 = G__299684;
count__299528_299659 = G__299685;
i__299529_299660 = G__299686;
continue;
} else {
var vec__299563_299689 = cljs.core.first.call(null,seq__299525_299681__$1);
var actual_type_299690 = cljs.core.nth.call(null,vec__299563_299689,(0),null);
var __299691 = cljs.core.nth.call(null,vec__299563_299689,(1),null);
var keys_299693 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_299599,actual_type_299690,f_299652], null);
var canonical_f_299694 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_299598),keys_299693);
dommy.core.update_event_listeners_BANG_.call(null,elem_299598,dommy.utils.dissoc_in,keys_299693);

if(cljs.core.truth_(elem_299598.removeEventListener)){
elem_299598.removeEventListener(cljs.core.name.call(null,actual_type_299690),canonical_f_299694);
} else {
elem_299598.detachEvent(cljs.core.name.call(null,actual_type_299690),canonical_f_299694);
}

var G__299697 = cljs.core.next.call(null,seq__299525_299681__$1);
var G__299698 = null;
var G__299699 = (0);
var G__299700 = (0);
seq__299525_299657 = G__299697;
chunk__299527_299658 = G__299698;
count__299528_299659 = G__299699;
i__299529_299660 = G__299700;
continue;
}
} else {
}
}
break;
}

var G__299701 = cljs.core.next.call(null,seq__299524_299644__$1);
var G__299702 = null;
var G__299703 = (0);
var G__299704 = (0);
seq__299524_299600 = G__299701;
chunk__299531_299601 = G__299702;
count__299532_299602 = G__299703;
i__299533_299603 = G__299704;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq299521){
var G__299522 = cljs.core.first.call(null,seq299521);
var seq299521__$1 = cljs.core.next.call(null,seq299521);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__299522,seq299521__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__36267__auto__ = [];
var len__36260__auto___299719 = arguments.length;
var i__36261__auto___299720 = (0);
while(true){
if((i__36261__auto___299720 < len__36260__auto___299719)){
args__36267__auto__.push((arguments[i__36261__auto___299720]));

var G__299721 = (i__36261__auto___299720 + (1));
i__36261__auto___299720 = G__299721;
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

var vec__299712_299724 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_299725 = cljs.core.nth.call(null,vec__299712_299724,(0),null);
var selector_299726 = cljs.core.nth.call(null,vec__299712_299724,(1),null);
var seq__299713_299727 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__299714_299728 = null;
var count__299715_299729 = (0);
var i__299716_299730 = (0);
while(true){
if((i__299716_299730 < count__299715_299729)){
var vec__299717_299731 = cljs.core._nth.call(null,chunk__299714_299728,i__299716_299730);
var type_299732 = cljs.core.nth.call(null,vec__299717_299731,(0),null);
var f_299733 = cljs.core.nth.call(null,vec__299717_299731,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_299732,((function (seq__299713_299727,chunk__299714_299728,count__299715_299729,i__299716_299730,vec__299717_299731,type_299732,f_299733,vec__299712_299724,elem_299725,selector_299726){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_299732,dommy$core$this_fn);

return f_299733.call(null,e);
});})(seq__299713_299727,chunk__299714_299728,count__299715_299729,i__299716_299730,vec__299717_299731,type_299732,f_299733,vec__299712_299724,elem_299725,selector_299726))
);

var G__299734 = seq__299713_299727;
var G__299735 = chunk__299714_299728;
var G__299736 = count__299715_299729;
var G__299737 = (i__299716_299730 + (1));
seq__299713_299727 = G__299734;
chunk__299714_299728 = G__299735;
count__299715_299729 = G__299736;
i__299716_299730 = G__299737;
continue;
} else {
var temp__4657__auto___299738 = cljs.core.seq.call(null,seq__299713_299727);
if(temp__4657__auto___299738){
var seq__299713_299739__$1 = temp__4657__auto___299738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__299713_299739__$1)){
var c__36002__auto___299740 = cljs.core.chunk_first.call(null,seq__299713_299739__$1);
var G__299741 = cljs.core.chunk_rest.call(null,seq__299713_299739__$1);
var G__299742 = c__36002__auto___299740;
var G__299743 = cljs.core.count.call(null,c__36002__auto___299740);
var G__299744 = (0);
seq__299713_299727 = G__299741;
chunk__299714_299728 = G__299742;
count__299715_299729 = G__299743;
i__299716_299730 = G__299744;
continue;
} else {
var vec__299718_299747 = cljs.core.first.call(null,seq__299713_299739__$1);
var type_299748 = cljs.core.nth.call(null,vec__299718_299747,(0),null);
var f_299749 = cljs.core.nth.call(null,vec__299718_299747,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_299748,((function (seq__299713_299727,chunk__299714_299728,count__299715_299729,i__299716_299730,vec__299718_299747,type_299748,f_299749,seq__299713_299739__$1,temp__4657__auto___299738,vec__299712_299724,elem_299725,selector_299726){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_299748,dommy$core$this_fn);

return f_299749.call(null,e);
});})(seq__299713_299727,chunk__299714_299728,count__299715_299729,i__299716_299730,vec__299718_299747,type_299748,f_299749,seq__299713_299739__$1,temp__4657__auto___299738,vec__299712_299724,elem_299725,selector_299726))
);

var G__299752 = cljs.core.next.call(null,seq__299713_299739__$1);
var G__299753 = null;
var G__299754 = (0);
var G__299755 = (0);
seq__299713_299727 = G__299752;
chunk__299714_299728 = G__299753;
count__299715_299729 = G__299754;
i__299716_299730 = G__299755;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq299710){
var G__299711 = cljs.core.first.call(null,seq299710);
var seq299710__$1 = cljs.core.next.call(null,seq299710);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__299711,seq299710__$1);
});

//# sourceMappingURL=core.js.map?rel=1459068555922