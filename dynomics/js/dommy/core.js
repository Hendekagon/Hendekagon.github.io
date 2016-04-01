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
var or__35425__auto__ = elem.textContent;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
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
var args131475 = [];
var len__36494__auto___131481 = arguments.length;
var i__36495__auto___131482 = (0);
while(true){
if((i__36495__auto___131482 < len__36494__auto___131481)){
args131475.push((arguments[i__36495__auto___131482]));

var G__131486 = (i__36495__auto___131482 + (1));
i__36495__auto___131482 = G__131486;
continue;
} else {
}
break;
}

var G__131479 = args131475.length;
switch (G__131479) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args131475.length)].join('')));

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
var args131501 = [];
var len__36494__auto___131504 = arguments.length;
var i__36495__auto___131505 = (0);
while(true){
if((i__36495__auto___131505 < len__36494__auto___131504)){
args131501.push((arguments[i__36495__auto___131505]));

var G__131506 = (i__36495__auto___131505 + (1));
i__36495__auto___131505 = G__131506;
continue;
} else {
}
break;
}

var G__131503 = args131501.length;
switch (G__131503) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args131501.length)].join('')));

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
var args131509 = [];
var len__36494__auto___131551 = arguments.length;
var i__36495__auto___131552 = (0);
while(true){
if((i__36495__auto___131552 < len__36494__auto___131551)){
args131509.push((arguments[i__36495__auto___131552]));

var G__131554 = (i__36495__auto___131552 + (1));
i__36495__auto___131552 = G__131554;
continue;
} else {
}
break;
}

var G__131548 = args131509.length;
switch (G__131548) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args131509.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__131508_SHARP_){
return !((p1__131508_SHARP_ === base));
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
var args__36501__auto__ = [];
var len__36494__auto___131608 = arguments.length;
var i__36495__auto___131610 = (0);
while(true){
if((i__36495__auto___131610 < len__36494__auto___131608)){
args__36501__auto__.push((arguments[i__36495__auto___131610]));

var G__131611 = (i__36495__auto___131610 + (1));
i__36495__auto___131610 = G__131611;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((1) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36502__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__131574_131612 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__131575_131613 = null;
var count__131576_131614 = (0);
var i__131577_131615 = (0);
while(true){
if((i__131577_131615 < count__131576_131614)){
var vec__131578_131616 = cljs.core._nth.call(null,chunk__131575_131613,i__131577_131615);
var k_131617 = cljs.core.nth.call(null,vec__131578_131616,(0),null);
var v_131618 = cljs.core.nth.call(null,vec__131578_131616,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_131617),v_131618);

var G__131619 = seq__131574_131612;
var G__131620 = chunk__131575_131613;
var G__131621 = count__131576_131614;
var G__131622 = (i__131577_131615 + (1));
seq__131574_131612 = G__131619;
chunk__131575_131613 = G__131620;
count__131576_131614 = G__131621;
i__131577_131615 = G__131622;
continue;
} else {
var temp__4657__auto___131623 = cljs.core.seq.call(null,seq__131574_131612);
if(temp__4657__auto___131623){
var seq__131574_131624__$1 = temp__4657__auto___131623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131574_131624__$1)){
var c__36236__auto___131625 = cljs.core.chunk_first.call(null,seq__131574_131624__$1);
var G__131626 = cljs.core.chunk_rest.call(null,seq__131574_131624__$1);
var G__131627 = c__36236__auto___131625;
var G__131628 = cljs.core.count.call(null,c__36236__auto___131625);
var G__131629 = (0);
seq__131574_131612 = G__131626;
chunk__131575_131613 = G__131627;
count__131576_131614 = G__131628;
i__131577_131615 = G__131629;
continue;
} else {
var vec__131579_131630 = cljs.core.first.call(null,seq__131574_131624__$1);
var k_131631 = cljs.core.nth.call(null,vec__131579_131630,(0),null);
var v_131632 = cljs.core.nth.call(null,vec__131579_131630,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_131631),v_131632);

var G__131633 = cljs.core.next.call(null,seq__131574_131624__$1);
var G__131634 = null;
var G__131635 = (0);
var G__131636 = (0);
seq__131574_131612 = G__131633;
chunk__131575_131613 = G__131634;
count__131576_131614 = G__131635;
i__131577_131615 = G__131636;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq131572){
var G__131573 = cljs.core.first.call(null,seq131572);
var seq131572__$1 = cljs.core.next.call(null,seq131572);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__131573,seq131572__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__36501__auto__ = [];
var len__36494__auto___131692 = arguments.length;
var i__36495__auto___131693 = (0);
while(true){
if((i__36495__auto___131693 < len__36494__auto___131692)){
args__36501__auto__.push((arguments[i__36495__auto___131693]));

var G__131694 = (i__36495__auto___131693 + (1));
i__36495__auto___131693 = G__131694;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((1) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36502__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__131688_131695 = cljs.core.seq.call(null,keywords);
var chunk__131689_131696 = null;
var count__131690_131697 = (0);
var i__131691_131698 = (0);
while(true){
if((i__131691_131698 < count__131690_131697)){
var kw_131705 = cljs.core._nth.call(null,chunk__131689_131696,i__131691_131698);
style.removeProperty(dommy.utils.as_str.call(null,kw_131705));

var G__131707 = seq__131688_131695;
var G__131708 = chunk__131689_131696;
var G__131709 = count__131690_131697;
var G__131710 = (i__131691_131698 + (1));
seq__131688_131695 = G__131707;
chunk__131689_131696 = G__131708;
count__131690_131697 = G__131709;
i__131691_131698 = G__131710;
continue;
} else {
var temp__4657__auto___131712 = cljs.core.seq.call(null,seq__131688_131695);
if(temp__4657__auto___131712){
var seq__131688_131713__$1 = temp__4657__auto___131712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131688_131713__$1)){
var c__36236__auto___131714 = cljs.core.chunk_first.call(null,seq__131688_131713__$1);
var G__131715 = cljs.core.chunk_rest.call(null,seq__131688_131713__$1);
var G__131716 = c__36236__auto___131714;
var G__131717 = cljs.core.count.call(null,c__36236__auto___131714);
var G__131718 = (0);
seq__131688_131695 = G__131715;
chunk__131689_131696 = G__131716;
count__131690_131697 = G__131717;
i__131691_131698 = G__131718;
continue;
} else {
var kw_131719 = cljs.core.first.call(null,seq__131688_131713__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_131719));

var G__131720 = cljs.core.next.call(null,seq__131688_131713__$1);
var G__131721 = null;
var G__131722 = (0);
var G__131723 = (0);
seq__131688_131695 = G__131720;
chunk__131689_131696 = G__131721;
count__131690_131697 = G__131722;
i__131691_131698 = G__131723;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq131686){
var G__131687 = cljs.core.first.call(null,seq131686);
var seq131686__$1 = cljs.core.next.call(null,seq131686);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__131687,seq131686__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__36501__auto__ = [];
var len__36494__auto___131736 = arguments.length;
var i__36495__auto___131737 = (0);
while(true){
if((i__36495__auto___131737 < len__36494__auto___131736)){
args__36501__auto__.push((arguments[i__36495__auto___131737]));

var G__131740 = (i__36495__auto___131737 + (1));
i__36495__auto___131737 = G__131740;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((1) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36502__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__131730_131741 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__131731_131742 = null;
var count__131732_131743 = (0);
var i__131733_131744 = (0);
while(true){
if((i__131733_131744 < count__131732_131743)){
var vec__131734_131745 = cljs.core._nth.call(null,chunk__131731_131742,i__131733_131744);
var k_131746 = cljs.core.nth.call(null,vec__131734_131745,(0),null);
var v_131747 = cljs.core.nth.call(null,vec__131734_131745,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_131746,[cljs.core.str(v_131747),cljs.core.str("px")].join(''));

var G__131748 = seq__131730_131741;
var G__131749 = chunk__131731_131742;
var G__131750 = count__131732_131743;
var G__131751 = (i__131733_131744 + (1));
seq__131730_131741 = G__131748;
chunk__131731_131742 = G__131749;
count__131732_131743 = G__131750;
i__131733_131744 = G__131751;
continue;
} else {
var temp__4657__auto___131752 = cljs.core.seq.call(null,seq__131730_131741);
if(temp__4657__auto___131752){
var seq__131730_131753__$1 = temp__4657__auto___131752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131730_131753__$1)){
var c__36236__auto___131754 = cljs.core.chunk_first.call(null,seq__131730_131753__$1);
var G__131755 = cljs.core.chunk_rest.call(null,seq__131730_131753__$1);
var G__131756 = c__36236__auto___131754;
var G__131757 = cljs.core.count.call(null,c__36236__auto___131754);
var G__131758 = (0);
seq__131730_131741 = G__131755;
chunk__131731_131742 = G__131756;
count__131732_131743 = G__131757;
i__131733_131744 = G__131758;
continue;
} else {
var vec__131735_131759 = cljs.core.first.call(null,seq__131730_131753__$1);
var k_131760 = cljs.core.nth.call(null,vec__131735_131759,(0),null);
var v_131761 = cljs.core.nth.call(null,vec__131735_131759,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_131760,[cljs.core.str(v_131761),cljs.core.str("px")].join(''));

var G__131762 = cljs.core.next.call(null,seq__131730_131753__$1);
var G__131763 = null;
var G__131764 = (0);
var G__131765 = (0);
seq__131730_131741 = G__131762;
chunk__131731_131742 = G__131763;
count__131732_131743 = G__131764;
i__131733_131744 = G__131765;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq131727){
var G__131728 = cljs.core.first.call(null,seq131727);
var seq131727__$1 = cljs.core.next.call(null,seq131727);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__131728,seq131727__$1);
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
var args131766 = [];
var len__36494__auto___131790 = arguments.length;
var i__36495__auto___131791 = (0);
while(true){
if((i__36495__auto___131791 < len__36494__auto___131790)){
args131766.push((arguments[i__36495__auto___131791]));

var G__131796 = (i__36495__auto___131791 + (1));
i__36495__auto___131791 = G__131796;
continue;
} else {
}
break;
}

var G__131772 = args131766.length;
switch (G__131772) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__36513__auto__ = (new cljs.core.IndexedSeq(args131766.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36513__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__131777 = elem;
(G__131777[k__$1] = v);

return G__131777;
} else {
var G__131778 = elem;
G__131778.setAttribute(k__$1,v);

return G__131778;
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

var seq__131779_131810 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__131780_131811 = null;
var count__131781_131812 = (0);
var i__131782_131813 = (0);
while(true){
if((i__131782_131813 < count__131781_131812)){
var vec__131783_131814 = cljs.core._nth.call(null,chunk__131780_131811,i__131782_131813);
var k_131815__$1 = cljs.core.nth.call(null,vec__131783_131814,(0),null);
var v_131816__$1 = cljs.core.nth.call(null,vec__131783_131814,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_131815__$1,v_131816__$1);

var G__131817 = seq__131779_131810;
var G__131818 = chunk__131780_131811;
var G__131819 = count__131781_131812;
var G__131820 = (i__131782_131813 + (1));
seq__131779_131810 = G__131817;
chunk__131780_131811 = G__131818;
count__131781_131812 = G__131819;
i__131782_131813 = G__131820;
continue;
} else {
var temp__4657__auto___131821 = cljs.core.seq.call(null,seq__131779_131810);
if(temp__4657__auto___131821){
var seq__131779_131822__$1 = temp__4657__auto___131821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131779_131822__$1)){
var c__36236__auto___131823 = cljs.core.chunk_first.call(null,seq__131779_131822__$1);
var G__131824 = cljs.core.chunk_rest.call(null,seq__131779_131822__$1);
var G__131825 = c__36236__auto___131823;
var G__131826 = cljs.core.count.call(null,c__36236__auto___131823);
var G__131827 = (0);
seq__131779_131810 = G__131824;
chunk__131780_131811 = G__131825;
count__131781_131812 = G__131826;
i__131782_131813 = G__131827;
continue;
} else {
var vec__131784_131828 = cljs.core.first.call(null,seq__131779_131822__$1);
var k_131829__$1 = cljs.core.nth.call(null,vec__131784_131828,(0),null);
var v_131830__$1 = cljs.core.nth.call(null,vec__131784_131828,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_131829__$1,v_131830__$1);

var G__131837 = cljs.core.next.call(null,seq__131779_131822__$1);
var G__131838 = null;
var G__131839 = (0);
var G__131840 = (0);
seq__131779_131810 = G__131837;
chunk__131780_131811 = G__131838;
count__131781_131812 = G__131839;
i__131782_131813 = G__131840;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq131767){
var G__131768 = cljs.core.first.call(null,seq131767);
var seq131767__$1 = cljs.core.next.call(null,seq131767);
var G__131769 = cljs.core.first.call(null,seq131767__$1);
var seq131767__$2 = cljs.core.next.call(null,seq131767__$1);
var G__131770 = cljs.core.first.call(null,seq131767__$2);
var seq131767__$3 = cljs.core.next.call(null,seq131767__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__131768,G__131769,G__131770,seq131767__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args131900 = [];
var len__36494__auto___131910 = arguments.length;
var i__36495__auto___131911 = (0);
while(true){
if((i__36495__auto___131911 < len__36494__auto___131910)){
args131900.push((arguments[i__36495__auto___131911]));

var G__131912 = (i__36495__auto___131911 + (1));
i__36495__auto___131911 = G__131912;
continue;
} else {
}
break;
}

var G__131905 = args131900.length;
switch (G__131905) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36513__auto__ = (new cljs.core.IndexedSeq(args131900.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36513__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_131914__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_131914__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_131914__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__131906_131919 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__131907_131920 = null;
var count__131908_131921 = (0);
var i__131909_131922 = (0);
while(true){
if((i__131909_131922 < count__131908_131921)){
var k_131924__$1 = cljs.core._nth.call(null,chunk__131907_131920,i__131909_131922);
dommy.core.remove_attr_BANG_.call(null,elem,k_131924__$1);

var G__131925 = seq__131906_131919;
var G__131926 = chunk__131907_131920;
var G__131927 = count__131908_131921;
var G__131928 = (i__131909_131922 + (1));
seq__131906_131919 = G__131925;
chunk__131907_131920 = G__131926;
count__131908_131921 = G__131927;
i__131909_131922 = G__131928;
continue;
} else {
var temp__4657__auto___131932 = cljs.core.seq.call(null,seq__131906_131919);
if(temp__4657__auto___131932){
var seq__131906_131935__$1 = temp__4657__auto___131932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131906_131935__$1)){
var c__36236__auto___131940 = cljs.core.chunk_first.call(null,seq__131906_131935__$1);
var G__131941 = cljs.core.chunk_rest.call(null,seq__131906_131935__$1);
var G__131942 = c__36236__auto___131940;
var G__131943 = cljs.core.count.call(null,c__36236__auto___131940);
var G__131944 = (0);
seq__131906_131919 = G__131941;
chunk__131907_131920 = G__131942;
count__131908_131921 = G__131943;
i__131909_131922 = G__131944;
continue;
} else {
var k_131950__$1 = cljs.core.first.call(null,seq__131906_131935__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_131950__$1);

var G__131951 = cljs.core.next.call(null,seq__131906_131935__$1);
var G__131952 = null;
var G__131953 = (0);
var G__131954 = (0);
seq__131906_131919 = G__131951;
chunk__131907_131920 = G__131952;
count__131908_131921 = G__131953;
i__131909_131922 = G__131954;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq131901){
var G__131902 = cljs.core.first.call(null,seq131901);
var seq131901__$1 = cljs.core.next.call(null,seq131901);
var G__131903 = cljs.core.first.call(null,seq131901__$1);
var seq131901__$2 = cljs.core.next.call(null,seq131901__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__131902,G__131903,seq131901__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args131955 = [];
var len__36494__auto___131985 = arguments.length;
var i__36495__auto___131986 = (0);
while(true){
if((i__36495__auto___131986 < len__36494__auto___131985)){
args131955.push((arguments[i__36495__auto___131986]));

var G__131987 = (i__36495__auto___131986 + (1));
i__36495__auto___131986 = G__131987;
continue;
} else {
}
break;
}

var G__131984 = args131955.length;
switch (G__131984) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args131955.length)].join('')));

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
var args131989 = [];
var len__36494__auto___132015 = arguments.length;
var i__36495__auto___132016 = (0);
while(true){
if((i__36495__auto___132016 < len__36494__auto___132015)){
args131989.push((arguments[i__36495__auto___132016]));

var G__132018 = (i__36495__auto___132016 + (1));
i__36495__auto___132016 = G__132018;
continue;
} else {
}
break;
}

var G__131995 = args131989.length;
switch (G__131995) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36513__auto__ = (new cljs.core.IndexedSeq(args131989.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36513__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___132026 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___132026)){
var class_list_132027 = temp__4655__auto___132026;
var seq__131998_132028 = cljs.core.seq.call(null,classes__$1);
var chunk__131999_132029 = null;
var count__132000_132030 = (0);
var i__132001_132031 = (0);
while(true){
if((i__132001_132031 < count__132000_132030)){
var c_132036 = cljs.core._nth.call(null,chunk__131999_132029,i__132001_132031);
class_list_132027.add(c_132036);

var G__132038 = seq__131998_132028;
var G__132039 = chunk__131999_132029;
var G__132040 = count__132000_132030;
var G__132041 = (i__132001_132031 + (1));
seq__131998_132028 = G__132038;
chunk__131999_132029 = G__132039;
count__132000_132030 = G__132040;
i__132001_132031 = G__132041;
continue;
} else {
var temp__4657__auto___132048 = cljs.core.seq.call(null,seq__131998_132028);
if(temp__4657__auto___132048){
var seq__131998_132049__$1 = temp__4657__auto___132048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131998_132049__$1)){
var c__36236__auto___132051 = cljs.core.chunk_first.call(null,seq__131998_132049__$1);
var G__132053 = cljs.core.chunk_rest.call(null,seq__131998_132049__$1);
var G__132054 = c__36236__auto___132051;
var G__132055 = cljs.core.count.call(null,c__36236__auto___132051);
var G__132056 = (0);
seq__131998_132028 = G__132053;
chunk__131999_132029 = G__132054;
count__132000_132030 = G__132055;
i__132001_132031 = G__132056;
continue;
} else {
var c_132057 = cljs.core.first.call(null,seq__131998_132049__$1);
class_list_132027.add(c_132057);

var G__132058 = cljs.core.next.call(null,seq__131998_132049__$1);
var G__132059 = null;
var G__132060 = (0);
var G__132061 = (0);
seq__131998_132028 = G__132058;
chunk__131999_132029 = G__132059;
count__132000_132030 = G__132060;
i__132001_132031 = G__132061;
continue;
}
} else {
}
}
break;
}
} else {
var seq__132002_132064 = cljs.core.seq.call(null,classes__$1);
var chunk__132003_132065 = null;
var count__132004_132066 = (0);
var i__132005_132067 = (0);
while(true){
if((i__132005_132067 < count__132004_132066)){
var c_132069 = cljs.core._nth.call(null,chunk__132003_132065,i__132005_132067);
var class_name_132071 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_132071,c_132069))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_132071 === ""))?c_132069:[cljs.core.str(class_name_132071),cljs.core.str(" "),cljs.core.str(c_132069)].join('')));
}

var G__132072 = seq__132002_132064;
var G__132073 = chunk__132003_132065;
var G__132074 = count__132004_132066;
var G__132075 = (i__132005_132067 + (1));
seq__132002_132064 = G__132072;
chunk__132003_132065 = G__132073;
count__132004_132066 = G__132074;
i__132005_132067 = G__132075;
continue;
} else {
var temp__4657__auto___132076 = cljs.core.seq.call(null,seq__132002_132064);
if(temp__4657__auto___132076){
var seq__132002_132077__$1 = temp__4657__auto___132076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132002_132077__$1)){
var c__36236__auto___132078 = cljs.core.chunk_first.call(null,seq__132002_132077__$1);
var G__132079 = cljs.core.chunk_rest.call(null,seq__132002_132077__$1);
var G__132080 = c__36236__auto___132078;
var G__132081 = cljs.core.count.call(null,c__36236__auto___132078);
var G__132082 = (0);
seq__132002_132064 = G__132079;
chunk__132003_132065 = G__132080;
count__132004_132066 = G__132081;
i__132005_132067 = G__132082;
continue;
} else {
var c_132083 = cljs.core.first.call(null,seq__132002_132077__$1);
var class_name_132125 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_132125,c_132083))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_132125 === ""))?c_132083:[cljs.core.str(class_name_132125),cljs.core.str(" "),cljs.core.str(c_132083)].join('')));
}

var G__132126 = cljs.core.next.call(null,seq__132002_132077__$1);
var G__132127 = null;
var G__132128 = (0);
var G__132129 = (0);
seq__132002_132064 = G__132126;
chunk__132003_132065 = G__132127;
count__132004_132066 = G__132128;
i__132005_132067 = G__132129;
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
var seq__132010_132132 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__132011_132133 = null;
var count__132012_132134 = (0);
var i__132013_132135 = (0);
while(true){
if((i__132013_132135 < count__132012_132134)){
var c_132137 = cljs.core._nth.call(null,chunk__132011_132133,i__132013_132135);
dommy.core.add_class_BANG_.call(null,elem,c_132137);

var G__132138 = seq__132010_132132;
var G__132139 = chunk__132011_132133;
var G__132140 = count__132012_132134;
var G__132141 = (i__132013_132135 + (1));
seq__132010_132132 = G__132138;
chunk__132011_132133 = G__132139;
count__132012_132134 = G__132140;
i__132013_132135 = G__132141;
continue;
} else {
var temp__4657__auto___132148 = cljs.core.seq.call(null,seq__132010_132132);
if(temp__4657__auto___132148){
var seq__132010_132150__$1 = temp__4657__auto___132148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132010_132150__$1)){
var c__36236__auto___132152 = cljs.core.chunk_first.call(null,seq__132010_132150__$1);
var G__132153 = cljs.core.chunk_rest.call(null,seq__132010_132150__$1);
var G__132154 = c__36236__auto___132152;
var G__132155 = cljs.core.count.call(null,c__36236__auto___132152);
var G__132156 = (0);
seq__132010_132132 = G__132153;
chunk__132011_132133 = G__132154;
count__132012_132134 = G__132155;
i__132013_132135 = G__132156;
continue;
} else {
var c_132157 = cljs.core.first.call(null,seq__132010_132150__$1);
dommy.core.add_class_BANG_.call(null,elem,c_132157);

var G__132158 = cljs.core.next.call(null,seq__132010_132150__$1);
var G__132159 = null;
var G__132160 = (0);
var G__132161 = (0);
seq__132010_132132 = G__132158;
chunk__132011_132133 = G__132159;
count__132012_132134 = G__132160;
i__132013_132135 = G__132161;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq131990){
var G__131991 = cljs.core.first.call(null,seq131990);
var seq131990__$1 = cljs.core.next.call(null,seq131990);
var G__131992 = cljs.core.first.call(null,seq131990__$1);
var seq131990__$2 = cljs.core.next.call(null,seq131990__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__131991,G__131992,seq131990__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args132171 = [];
var len__36494__auto___132181 = arguments.length;
var i__36495__auto___132182 = (0);
while(true){
if((i__36495__auto___132182 < len__36494__auto___132181)){
args132171.push((arguments[i__36495__auto___132182]));

var G__132184 = (i__36495__auto___132182 + (1));
i__36495__auto___132182 = G__132184;
continue;
} else {
}
break;
}

var G__132176 = args132171.length;
switch (G__132176) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36513__auto__ = (new cljs.core.IndexedSeq(args132171.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36513__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___132222 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___132222)){
var class_list_132223 = temp__4655__auto___132222;
class_list_132223.remove(c__$1);
} else {
var class_name_132224 = dommy.core.class$.call(null,elem);
var new_class_name_132225 = dommy.utils.remove_class_str.call(null,class_name_132224,c__$1);
if((class_name_132224 === new_class_name_132225)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_132225);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__132177 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__132178 = null;
var count__132179 = (0);
var i__132180 = (0);
while(true){
if((i__132180 < count__132179)){
var c = cljs.core._nth.call(null,chunk__132178,i__132180);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__132230 = seq__132177;
var G__132231 = chunk__132178;
var G__132232 = count__132179;
var G__132233 = (i__132180 + (1));
seq__132177 = G__132230;
chunk__132178 = G__132231;
count__132179 = G__132232;
i__132180 = G__132233;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__132177);
if(temp__4657__auto__){
var seq__132177__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132177__$1)){
var c__36236__auto__ = cljs.core.chunk_first.call(null,seq__132177__$1);
var G__132234 = cljs.core.chunk_rest.call(null,seq__132177__$1);
var G__132235 = c__36236__auto__;
var G__132236 = cljs.core.count.call(null,c__36236__auto__);
var G__132237 = (0);
seq__132177 = G__132234;
chunk__132178 = G__132235;
count__132179 = G__132236;
i__132180 = G__132237;
continue;
} else {
var c = cljs.core.first.call(null,seq__132177__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__132240 = cljs.core.next.call(null,seq__132177__$1);
var G__132241 = null;
var G__132242 = (0);
var G__132243 = (0);
seq__132177 = G__132240;
chunk__132178 = G__132241;
count__132179 = G__132242;
i__132180 = G__132243;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq132172){
var G__132173 = cljs.core.first.call(null,seq132172);
var seq132172__$1 = cljs.core.next.call(null,seq132172);
var G__132174 = cljs.core.first.call(null,seq132172__$1);
var seq132172__$2 = cljs.core.next.call(null,seq132172__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__132173,G__132174,seq132172__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args132246 = [];
var len__36494__auto___132253 = arguments.length;
var i__36495__auto___132254 = (0);
while(true){
if((i__36495__auto___132254 < len__36494__auto___132253)){
args132246.push((arguments[i__36495__auto___132254]));

var G__132255 = (i__36495__auto___132254 + (1));
i__36495__auto___132254 = G__132255;
continue;
} else {
}
break;
}

var G__132252 = args132246.length;
switch (G__132252) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args132246.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___132260 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___132260)){
var class_list_132262 = temp__4655__auto___132260;
class_list_132262.toggle(c__$1);
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
var args132263 = [];
var len__36494__auto___132266 = arguments.length;
var i__36495__auto___132267 = (0);
while(true){
if((i__36495__auto___132267 < len__36494__auto___132266)){
args132263.push((arguments[i__36495__auto___132267]));

var G__132268 = (i__36495__auto___132267 + (1));
i__36495__auto___132267 = G__132268;
continue;
} else {
}
break;
}

var G__132265 = args132263.length;
switch (G__132265) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args132263.length)].join('')));

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
var args132270 = [];
var len__36494__auto___132273 = arguments.length;
var i__36495__auto___132274 = (0);
while(true){
if((i__36495__auto___132274 < len__36494__auto___132273)){
args132270.push((arguments[i__36495__auto___132274]));

var G__132275 = (i__36495__auto___132274 + (1));
i__36495__auto___132274 = G__132275;
continue;
} else {
}
break;
}

var G__132272 = args132270.length;
switch (G__132272) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args132270.length)].join('')));

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
var args132284 = [];
var len__36494__auto___132303 = arguments.length;
var i__36495__auto___132304 = (0);
while(true){
if((i__36495__auto___132304 < len__36494__auto___132303)){
args132284.push((arguments[i__36495__auto___132304]));

var G__132306 = (i__36495__auto___132304 + (1));
i__36495__auto___132304 = G__132306;
continue;
} else {
}
break;
}

var G__132291 = args132284.length;
switch (G__132291) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36513__auto__ = (new cljs.core.IndexedSeq(args132284.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36513__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__132292 = parent;
G__132292.appendChild(child);

return G__132292;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__132293_132310 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__132294_132311 = null;
var count__132295_132312 = (0);
var i__132296_132313 = (0);
while(true){
if((i__132296_132313 < count__132295_132312)){
var c_132314 = cljs.core._nth.call(null,chunk__132294_132311,i__132296_132313);
dommy.core.append_BANG_.call(null,parent,c_132314);

var G__132316 = seq__132293_132310;
var G__132317 = chunk__132294_132311;
var G__132318 = count__132295_132312;
var G__132319 = (i__132296_132313 + (1));
seq__132293_132310 = G__132316;
chunk__132294_132311 = G__132317;
count__132295_132312 = G__132318;
i__132296_132313 = G__132319;
continue;
} else {
var temp__4657__auto___132320 = cljs.core.seq.call(null,seq__132293_132310);
if(temp__4657__auto___132320){
var seq__132293_132321__$1 = temp__4657__auto___132320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132293_132321__$1)){
var c__36236__auto___132322 = cljs.core.chunk_first.call(null,seq__132293_132321__$1);
var G__132325 = cljs.core.chunk_rest.call(null,seq__132293_132321__$1);
var G__132326 = c__36236__auto___132322;
var G__132327 = cljs.core.count.call(null,c__36236__auto___132322);
var G__132328 = (0);
seq__132293_132310 = G__132325;
chunk__132294_132311 = G__132326;
count__132295_132312 = G__132327;
i__132296_132313 = G__132328;
continue;
} else {
var c_132331 = cljs.core.first.call(null,seq__132293_132321__$1);
dommy.core.append_BANG_.call(null,parent,c_132331);

var G__132332 = cljs.core.next.call(null,seq__132293_132321__$1);
var G__132333 = null;
var G__132334 = (0);
var G__132335 = (0);
seq__132293_132310 = G__132332;
chunk__132294_132311 = G__132333;
count__132295_132312 = G__132334;
i__132296_132313 = G__132335;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq132285){
var G__132286 = cljs.core.first.call(null,seq132285);
var seq132285__$1 = cljs.core.next.call(null,seq132285);
var G__132287 = cljs.core.first.call(null,seq132285__$1);
var seq132285__$2 = cljs.core.next.call(null,seq132285__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__132286,G__132287,seq132285__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args132336 = [];
var len__36494__auto___132352 = arguments.length;
var i__36495__auto___132353 = (0);
while(true){
if((i__36495__auto___132353 < len__36494__auto___132352)){
args132336.push((arguments[i__36495__auto___132353]));

var G__132357 = (i__36495__auto___132353 + (1));
i__36495__auto___132353 = G__132357;
continue;
} else {
}
break;
}

var G__132341 = args132336.length;
switch (G__132341) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36513__auto__ = (new cljs.core.IndexedSeq(args132336.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36513__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__132342 = parent;
G__132342.insertBefore(child,parent.firstChild);

return G__132342;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__132343_132368 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__132344_132369 = null;
var count__132345_132370 = (0);
var i__132346_132371 = (0);
while(true){
if((i__132346_132371 < count__132345_132370)){
var c_132374 = cljs.core._nth.call(null,chunk__132344_132369,i__132346_132371);
dommy.core.prepend_BANG_.call(null,parent,c_132374);

var G__132375 = seq__132343_132368;
var G__132376 = chunk__132344_132369;
var G__132377 = count__132345_132370;
var G__132378 = (i__132346_132371 + (1));
seq__132343_132368 = G__132375;
chunk__132344_132369 = G__132376;
count__132345_132370 = G__132377;
i__132346_132371 = G__132378;
continue;
} else {
var temp__4657__auto___132379 = cljs.core.seq.call(null,seq__132343_132368);
if(temp__4657__auto___132379){
var seq__132343_132380__$1 = temp__4657__auto___132379;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132343_132380__$1)){
var c__36236__auto___132381 = cljs.core.chunk_first.call(null,seq__132343_132380__$1);
var G__132382 = cljs.core.chunk_rest.call(null,seq__132343_132380__$1);
var G__132383 = c__36236__auto___132381;
var G__132384 = cljs.core.count.call(null,c__36236__auto___132381);
var G__132385 = (0);
seq__132343_132368 = G__132382;
chunk__132344_132369 = G__132383;
count__132345_132370 = G__132384;
i__132346_132371 = G__132385;
continue;
} else {
var c_132386 = cljs.core.first.call(null,seq__132343_132380__$1);
dommy.core.prepend_BANG_.call(null,parent,c_132386);

var G__132387 = cljs.core.next.call(null,seq__132343_132380__$1);
var G__132388 = null;
var G__132389 = (0);
var G__132390 = (0);
seq__132343_132368 = G__132387;
chunk__132344_132369 = G__132388;
count__132345_132370 = G__132389;
i__132346_132371 = G__132390;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq132337){
var G__132338 = cljs.core.first.call(null,seq132337);
var seq132337__$1 = cljs.core.next.call(null,seq132337);
var G__132339 = cljs.core.first.call(null,seq132337__$1);
var seq132337__$2 = cljs.core.next.call(null,seq132337__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__132338,G__132339,seq132337__$2);
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
var temp__4655__auto___132402 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___132402)){
var next_132403 = temp__4655__auto___132402;
dommy.core.insert_before_BANG_.call(null,elem,next_132403);
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
var args132404 = [];
var len__36494__auto___132411 = arguments.length;
var i__36495__auto___132412 = (0);
while(true){
if((i__36495__auto___132412 < len__36494__auto___132411)){
args132404.push((arguments[i__36495__auto___132412]));

var G__132413 = (i__36495__auto___132412 + (1));
i__36495__auto___132412 = G__132413;
continue;
} else {
}
break;
}

var G__132409 = args132404.length;
switch (G__132409) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args132404.length)].join('')));

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
var G__132410 = p;
G__132410.removeChild(elem);

return G__132410;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__132434){
var vec__132435 = p__132434;
var special_mouse_event = cljs.core.nth.call(null,vec__132435,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__132435,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__132435,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__132435,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__35425__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__35413__auto__ = related_target;
if(cljs.core.truth_(and__35413__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__35413__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__132435,special_mouse_event,real_mouse_event))
});})(vec__132435,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__35413__auto__ = selected_target;
if(cljs.core.truth_(and__35413__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__35413__auto__;
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
var or__35425__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__36501__auto__ = [];
var len__36494__auto___132460 = arguments.length;
var i__36495__auto___132461 = (0);
while(true){
if((i__36495__auto___132461 < len__36494__auto___132460)){
args__36501__auto__.push((arguments[i__36495__auto___132461]));

var G__132466 = (i__36495__auto___132461 + (1));
i__36495__auto___132461 = G__132466;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((2) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36502__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq132453){
var G__132454 = cljs.core.first.call(null,seq132453);
var seq132453__$1 = cljs.core.next.call(null,seq132453);
var G__132455 = cljs.core.first.call(null,seq132453__$1);
var seq132453__$2 = cljs.core.next.call(null,seq132453__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__132454,G__132455,seq132453__$2);
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
var args__36501__auto__ = [];
var len__36494__auto___132519 = arguments.length;
var i__36495__auto___132528 = (0);
while(true){
if((i__36495__auto___132528 < len__36494__auto___132519)){
args__36501__auto__.push((arguments[i__36495__auto___132528]));

var G__132529 = (i__36495__auto___132528 + (1));
i__36495__auto___132528 = G__132529;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((1) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36502__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__132476_132530 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_132531 = cljs.core.nth.call(null,vec__132476_132530,(0),null);
var selector_132532 = cljs.core.nth.call(null,vec__132476_132530,(1),null);
var seq__132477_132533 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__132484_132534 = null;
var count__132485_132535 = (0);
var i__132486_132536 = (0);
while(true){
if((i__132486_132536 < count__132485_132535)){
var vec__132493_132537 = cljs.core._nth.call(null,chunk__132484_132534,i__132486_132536);
var orig_type_132538 = cljs.core.nth.call(null,vec__132493_132537,(0),null);
var f_132539 = cljs.core.nth.call(null,vec__132493_132537,(1),null);
var seq__132487_132540 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_132538,cljs.core.PersistentArrayMap.fromArray([orig_type_132538,cljs.core.identity], true, false)));
var chunk__132489_132541 = null;
var count__132490_132542 = (0);
var i__132491_132543 = (0);
while(true){
if((i__132491_132543 < count__132490_132542)){
var vec__132494_132544 = cljs.core._nth.call(null,chunk__132489_132541,i__132491_132543);
var actual_type_132545 = cljs.core.nth.call(null,vec__132494_132544,(0),null);
var factory_132546 = cljs.core.nth.call(null,vec__132494_132544,(1),null);
var canonical_f_132547 = (cljs.core.truth_(selector_132532)?cljs.core.partial.call(null,dommy.core.live_listener,elem_132531,selector_132532):cljs.core.identity).call(null,factory_132546.call(null,f_132539));
dommy.core.update_event_listeners_BANG_.call(null,elem_132531,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_132532,actual_type_132545,f_132539], null),canonical_f_132547);

if(cljs.core.truth_(elem_132531.addEventListener)){
elem_132531.addEventListener(cljs.core.name.call(null,actual_type_132545),canonical_f_132547);
} else {
elem_132531.attachEvent(cljs.core.name.call(null,actual_type_132545),canonical_f_132547);
}

var G__132548 = seq__132487_132540;
var G__132549 = chunk__132489_132541;
var G__132550 = count__132490_132542;
var G__132551 = (i__132491_132543 + (1));
seq__132487_132540 = G__132548;
chunk__132489_132541 = G__132549;
count__132490_132542 = G__132550;
i__132491_132543 = G__132551;
continue;
} else {
var temp__4657__auto___132552 = cljs.core.seq.call(null,seq__132487_132540);
if(temp__4657__auto___132552){
var seq__132487_132553__$1 = temp__4657__auto___132552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132487_132553__$1)){
var c__36236__auto___132554 = cljs.core.chunk_first.call(null,seq__132487_132553__$1);
var G__132555 = cljs.core.chunk_rest.call(null,seq__132487_132553__$1);
var G__132556 = c__36236__auto___132554;
var G__132557 = cljs.core.count.call(null,c__36236__auto___132554);
var G__132558 = (0);
seq__132487_132540 = G__132555;
chunk__132489_132541 = G__132556;
count__132490_132542 = G__132557;
i__132491_132543 = G__132558;
continue;
} else {
var vec__132495_132559 = cljs.core.first.call(null,seq__132487_132553__$1);
var actual_type_132560 = cljs.core.nth.call(null,vec__132495_132559,(0),null);
var factory_132561 = cljs.core.nth.call(null,vec__132495_132559,(1),null);
var canonical_f_132562 = (cljs.core.truth_(selector_132532)?cljs.core.partial.call(null,dommy.core.live_listener,elem_132531,selector_132532):cljs.core.identity).call(null,factory_132561.call(null,f_132539));
dommy.core.update_event_listeners_BANG_.call(null,elem_132531,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_132532,actual_type_132560,f_132539], null),canonical_f_132562);

if(cljs.core.truth_(elem_132531.addEventListener)){
elem_132531.addEventListener(cljs.core.name.call(null,actual_type_132560),canonical_f_132562);
} else {
elem_132531.attachEvent(cljs.core.name.call(null,actual_type_132560),canonical_f_132562);
}

var G__132563 = cljs.core.next.call(null,seq__132487_132553__$1);
var G__132564 = null;
var G__132565 = (0);
var G__132566 = (0);
seq__132487_132540 = G__132563;
chunk__132489_132541 = G__132564;
count__132490_132542 = G__132565;
i__132491_132543 = G__132566;
continue;
}
} else {
}
}
break;
}

var G__132567 = seq__132477_132533;
var G__132568 = chunk__132484_132534;
var G__132569 = count__132485_132535;
var G__132570 = (i__132486_132536 + (1));
seq__132477_132533 = G__132567;
chunk__132484_132534 = G__132568;
count__132485_132535 = G__132569;
i__132486_132536 = G__132570;
continue;
} else {
var temp__4657__auto___132571 = cljs.core.seq.call(null,seq__132477_132533);
if(temp__4657__auto___132571){
var seq__132477_132572__$1 = temp__4657__auto___132571;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132477_132572__$1)){
var c__36236__auto___132573 = cljs.core.chunk_first.call(null,seq__132477_132572__$1);
var G__132578 = cljs.core.chunk_rest.call(null,seq__132477_132572__$1);
var G__132579 = c__36236__auto___132573;
var G__132580 = cljs.core.count.call(null,c__36236__auto___132573);
var G__132581 = (0);
seq__132477_132533 = G__132578;
chunk__132484_132534 = G__132579;
count__132485_132535 = G__132580;
i__132486_132536 = G__132581;
continue;
} else {
var vec__132498_132582 = cljs.core.first.call(null,seq__132477_132572__$1);
var orig_type_132583 = cljs.core.nth.call(null,vec__132498_132582,(0),null);
var f_132584 = cljs.core.nth.call(null,vec__132498_132582,(1),null);
var seq__132478_132588 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_132583,cljs.core.PersistentArrayMap.fromArray([orig_type_132583,cljs.core.identity], true, false)));
var chunk__132480_132589 = null;
var count__132481_132590 = (0);
var i__132482_132591 = (0);
while(true){
if((i__132482_132591 < count__132481_132590)){
var vec__132502_132592 = cljs.core._nth.call(null,chunk__132480_132589,i__132482_132591);
var actual_type_132593 = cljs.core.nth.call(null,vec__132502_132592,(0),null);
var factory_132594 = cljs.core.nth.call(null,vec__132502_132592,(1),null);
var canonical_f_132596 = (cljs.core.truth_(selector_132532)?cljs.core.partial.call(null,dommy.core.live_listener,elem_132531,selector_132532):cljs.core.identity).call(null,factory_132594.call(null,f_132584));
dommy.core.update_event_listeners_BANG_.call(null,elem_132531,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_132532,actual_type_132593,f_132584], null),canonical_f_132596);

if(cljs.core.truth_(elem_132531.addEventListener)){
elem_132531.addEventListener(cljs.core.name.call(null,actual_type_132593),canonical_f_132596);
} else {
elem_132531.attachEvent(cljs.core.name.call(null,actual_type_132593),canonical_f_132596);
}

var G__132597 = seq__132478_132588;
var G__132598 = chunk__132480_132589;
var G__132599 = count__132481_132590;
var G__132600 = (i__132482_132591 + (1));
seq__132478_132588 = G__132597;
chunk__132480_132589 = G__132598;
count__132481_132590 = G__132599;
i__132482_132591 = G__132600;
continue;
} else {
var temp__4657__auto___132601__$1 = cljs.core.seq.call(null,seq__132478_132588);
if(temp__4657__auto___132601__$1){
var seq__132478_132605__$1 = temp__4657__auto___132601__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132478_132605__$1)){
var c__36236__auto___132606 = cljs.core.chunk_first.call(null,seq__132478_132605__$1);
var G__132609 = cljs.core.chunk_rest.call(null,seq__132478_132605__$1);
var G__132610 = c__36236__auto___132606;
var G__132611 = cljs.core.count.call(null,c__36236__auto___132606);
var G__132612 = (0);
seq__132478_132588 = G__132609;
chunk__132480_132589 = G__132610;
count__132481_132590 = G__132611;
i__132482_132591 = G__132612;
continue;
} else {
var vec__132512_132622 = cljs.core.first.call(null,seq__132478_132605__$1);
var actual_type_132623 = cljs.core.nth.call(null,vec__132512_132622,(0),null);
var factory_132624 = cljs.core.nth.call(null,vec__132512_132622,(1),null);
var canonical_f_132626 = (cljs.core.truth_(selector_132532)?cljs.core.partial.call(null,dommy.core.live_listener,elem_132531,selector_132532):cljs.core.identity).call(null,factory_132624.call(null,f_132584));
dommy.core.update_event_listeners_BANG_.call(null,elem_132531,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_132532,actual_type_132623,f_132584], null),canonical_f_132626);

if(cljs.core.truth_(elem_132531.addEventListener)){
elem_132531.addEventListener(cljs.core.name.call(null,actual_type_132623),canonical_f_132626);
} else {
elem_132531.attachEvent(cljs.core.name.call(null,actual_type_132623),canonical_f_132626);
}

var G__132634 = cljs.core.next.call(null,seq__132478_132605__$1);
var G__132635 = null;
var G__132636 = (0);
var G__132637 = (0);
seq__132478_132588 = G__132634;
chunk__132480_132589 = G__132635;
count__132481_132590 = G__132636;
i__132482_132591 = G__132637;
continue;
}
} else {
}
}
break;
}

var G__132647 = cljs.core.next.call(null,seq__132477_132572__$1);
var G__132648 = null;
var G__132649 = (0);
var G__132650 = (0);
seq__132477_132533 = G__132647;
chunk__132484_132534 = G__132648;
count__132485_132535 = G__132649;
i__132486_132536 = G__132650;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq132474){
var G__132475 = cljs.core.first.call(null,seq132474);
var seq132474__$1 = cljs.core.next.call(null,seq132474);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__132475,seq132474__$1);
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
var args__36501__auto__ = [];
var len__36494__auto___132681 = arguments.length;
var i__36495__auto___132682 = (0);
while(true){
if((i__36495__auto___132682 < len__36494__auto___132681)){
args__36501__auto__.push((arguments[i__36495__auto___132682]));

var G__132683 = (i__36495__auto___132682 + (1));
i__36495__auto___132682 = G__132683;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((1) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36502__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__132658_132684 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_132685 = cljs.core.nth.call(null,vec__132658_132684,(0),null);
var selector_132686 = cljs.core.nth.call(null,vec__132658_132684,(1),null);
var seq__132659_132687 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__132666_132688 = null;
var count__132667_132689 = (0);
var i__132668_132690 = (0);
while(true){
if((i__132668_132690 < count__132667_132689)){
var vec__132675_132691 = cljs.core._nth.call(null,chunk__132666_132688,i__132668_132690);
var orig_type_132692 = cljs.core.nth.call(null,vec__132675_132691,(0),null);
var f_132693 = cljs.core.nth.call(null,vec__132675_132691,(1),null);
var seq__132669_132695 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_132692,cljs.core.PersistentArrayMap.fromArray([orig_type_132692,cljs.core.identity], true, false)));
var chunk__132671_132696 = null;
var count__132672_132697 = (0);
var i__132673_132698 = (0);
while(true){
if((i__132673_132698 < count__132672_132697)){
var vec__132676_132705 = cljs.core._nth.call(null,chunk__132671_132696,i__132673_132698);
var actual_type_132706 = cljs.core.nth.call(null,vec__132676_132705,(0),null);
var __132707 = cljs.core.nth.call(null,vec__132676_132705,(1),null);
var keys_132713 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_132686,actual_type_132706,f_132693], null);
var canonical_f_132714 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_132685),keys_132713);
dommy.core.update_event_listeners_BANG_.call(null,elem_132685,dommy.utils.dissoc_in,keys_132713);

if(cljs.core.truth_(elem_132685.removeEventListener)){
elem_132685.removeEventListener(cljs.core.name.call(null,actual_type_132706),canonical_f_132714);
} else {
elem_132685.detachEvent(cljs.core.name.call(null,actual_type_132706),canonical_f_132714);
}

var G__132717 = seq__132669_132695;
var G__132718 = chunk__132671_132696;
var G__132719 = count__132672_132697;
var G__132720 = (i__132673_132698 + (1));
seq__132669_132695 = G__132717;
chunk__132671_132696 = G__132718;
count__132672_132697 = G__132719;
i__132673_132698 = G__132720;
continue;
} else {
var temp__4657__auto___132721 = cljs.core.seq.call(null,seq__132669_132695);
if(temp__4657__auto___132721){
var seq__132669_132722__$1 = temp__4657__auto___132721;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132669_132722__$1)){
var c__36236__auto___132723 = cljs.core.chunk_first.call(null,seq__132669_132722__$1);
var G__132724 = cljs.core.chunk_rest.call(null,seq__132669_132722__$1);
var G__132725 = c__36236__auto___132723;
var G__132726 = cljs.core.count.call(null,c__36236__auto___132723);
var G__132727 = (0);
seq__132669_132695 = G__132724;
chunk__132671_132696 = G__132725;
count__132672_132697 = G__132726;
i__132673_132698 = G__132727;
continue;
} else {
var vec__132677_132728 = cljs.core.first.call(null,seq__132669_132722__$1);
var actual_type_132729 = cljs.core.nth.call(null,vec__132677_132728,(0),null);
var __132730 = cljs.core.nth.call(null,vec__132677_132728,(1),null);
var keys_132731 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_132686,actual_type_132729,f_132693], null);
var canonical_f_132732 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_132685),keys_132731);
dommy.core.update_event_listeners_BANG_.call(null,elem_132685,dommy.utils.dissoc_in,keys_132731);

if(cljs.core.truth_(elem_132685.removeEventListener)){
elem_132685.removeEventListener(cljs.core.name.call(null,actual_type_132729),canonical_f_132732);
} else {
elem_132685.detachEvent(cljs.core.name.call(null,actual_type_132729),canonical_f_132732);
}

var G__132735 = cljs.core.next.call(null,seq__132669_132722__$1);
var G__132736 = null;
var G__132737 = (0);
var G__132738 = (0);
seq__132669_132695 = G__132735;
chunk__132671_132696 = G__132736;
count__132672_132697 = G__132737;
i__132673_132698 = G__132738;
continue;
}
} else {
}
}
break;
}

var G__132740 = seq__132659_132687;
var G__132741 = chunk__132666_132688;
var G__132742 = count__132667_132689;
var G__132743 = (i__132668_132690 + (1));
seq__132659_132687 = G__132740;
chunk__132666_132688 = G__132741;
count__132667_132689 = G__132742;
i__132668_132690 = G__132743;
continue;
} else {
var temp__4657__auto___132744 = cljs.core.seq.call(null,seq__132659_132687);
if(temp__4657__auto___132744){
var seq__132659_132745__$1 = temp__4657__auto___132744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132659_132745__$1)){
var c__36236__auto___132746 = cljs.core.chunk_first.call(null,seq__132659_132745__$1);
var G__132749 = cljs.core.chunk_rest.call(null,seq__132659_132745__$1);
var G__132750 = c__36236__auto___132746;
var G__132751 = cljs.core.count.call(null,c__36236__auto___132746);
var G__132752 = (0);
seq__132659_132687 = G__132749;
chunk__132666_132688 = G__132750;
count__132667_132689 = G__132751;
i__132668_132690 = G__132752;
continue;
} else {
var vec__132678_132755 = cljs.core.first.call(null,seq__132659_132745__$1);
var orig_type_132756 = cljs.core.nth.call(null,vec__132678_132755,(0),null);
var f_132757 = cljs.core.nth.call(null,vec__132678_132755,(1),null);
var seq__132660_132758 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_132756,cljs.core.PersistentArrayMap.fromArray([orig_type_132756,cljs.core.identity], true, false)));
var chunk__132662_132759 = null;
var count__132663_132760 = (0);
var i__132664_132761 = (0);
while(true){
if((i__132664_132761 < count__132663_132760)){
var vec__132679_132762 = cljs.core._nth.call(null,chunk__132662_132759,i__132664_132761);
var actual_type_132763 = cljs.core.nth.call(null,vec__132679_132762,(0),null);
var __132764 = cljs.core.nth.call(null,vec__132679_132762,(1),null);
var keys_132765 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_132686,actual_type_132763,f_132757], null);
var canonical_f_132766 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_132685),keys_132765);
dommy.core.update_event_listeners_BANG_.call(null,elem_132685,dommy.utils.dissoc_in,keys_132765);

if(cljs.core.truth_(elem_132685.removeEventListener)){
elem_132685.removeEventListener(cljs.core.name.call(null,actual_type_132763),canonical_f_132766);
} else {
elem_132685.detachEvent(cljs.core.name.call(null,actual_type_132763),canonical_f_132766);
}

var G__132771 = seq__132660_132758;
var G__132772 = chunk__132662_132759;
var G__132773 = count__132663_132760;
var G__132774 = (i__132664_132761 + (1));
seq__132660_132758 = G__132771;
chunk__132662_132759 = G__132772;
count__132663_132760 = G__132773;
i__132664_132761 = G__132774;
continue;
} else {
var temp__4657__auto___132779__$1 = cljs.core.seq.call(null,seq__132660_132758);
if(temp__4657__auto___132779__$1){
var seq__132660_132783__$1 = temp__4657__auto___132779__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132660_132783__$1)){
var c__36236__auto___132784 = cljs.core.chunk_first.call(null,seq__132660_132783__$1);
var G__132786 = cljs.core.chunk_rest.call(null,seq__132660_132783__$1);
var G__132787 = c__36236__auto___132784;
var G__132788 = cljs.core.count.call(null,c__36236__auto___132784);
var G__132789 = (0);
seq__132660_132758 = G__132786;
chunk__132662_132759 = G__132787;
count__132663_132760 = G__132788;
i__132664_132761 = G__132789;
continue;
} else {
var vec__132680_132793 = cljs.core.first.call(null,seq__132660_132783__$1);
var actual_type_132794 = cljs.core.nth.call(null,vec__132680_132793,(0),null);
var __132795 = cljs.core.nth.call(null,vec__132680_132793,(1),null);
var keys_132797 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_132686,actual_type_132794,f_132757], null);
var canonical_f_132798 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_132685),keys_132797);
dommy.core.update_event_listeners_BANG_.call(null,elem_132685,dommy.utils.dissoc_in,keys_132797);

if(cljs.core.truth_(elem_132685.removeEventListener)){
elem_132685.removeEventListener(cljs.core.name.call(null,actual_type_132794),canonical_f_132798);
} else {
elem_132685.detachEvent(cljs.core.name.call(null,actual_type_132794),canonical_f_132798);
}

var G__132802 = cljs.core.next.call(null,seq__132660_132783__$1);
var G__132803 = null;
var G__132804 = (0);
var G__132805 = (0);
seq__132660_132758 = G__132802;
chunk__132662_132759 = G__132803;
count__132663_132760 = G__132804;
i__132664_132761 = G__132805;
continue;
}
} else {
}
}
break;
}

var G__132810 = cljs.core.next.call(null,seq__132659_132745__$1);
var G__132811 = null;
var G__132812 = (0);
var G__132813 = (0);
seq__132659_132687 = G__132810;
chunk__132666_132688 = G__132811;
count__132667_132689 = G__132812;
i__132668_132690 = G__132813;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq132655){
var G__132656 = cljs.core.first.call(null,seq132655);
var seq132655__$1 = cljs.core.next.call(null,seq132655);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__132656,seq132655__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__36501__auto__ = [];
var len__36494__auto___132825 = arguments.length;
var i__36495__auto___132826 = (0);
while(true){
if((i__36495__auto___132826 < len__36494__auto___132825)){
args__36501__auto__.push((arguments[i__36495__auto___132826]));

var G__132827 = (i__36495__auto___132826 + (1));
i__36495__auto___132826 = G__132827;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((1) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36502__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__132818_132832 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_132833 = cljs.core.nth.call(null,vec__132818_132832,(0),null);
var selector_132834 = cljs.core.nth.call(null,vec__132818_132832,(1),null);
var seq__132819_132835 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__132820_132836 = null;
var count__132821_132837 = (0);
var i__132822_132838 = (0);
while(true){
if((i__132822_132838 < count__132821_132837)){
var vec__132823_132839 = cljs.core._nth.call(null,chunk__132820_132836,i__132822_132838);
var type_132840 = cljs.core.nth.call(null,vec__132823_132839,(0),null);
var f_132841 = cljs.core.nth.call(null,vec__132823_132839,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_132840,((function (seq__132819_132835,chunk__132820_132836,count__132821_132837,i__132822_132838,vec__132823_132839,type_132840,f_132841,vec__132818_132832,elem_132833,selector_132834){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_132840,dommy$core$this_fn);

return f_132841.call(null,e);
});})(seq__132819_132835,chunk__132820_132836,count__132821_132837,i__132822_132838,vec__132823_132839,type_132840,f_132841,vec__132818_132832,elem_132833,selector_132834))
);

var G__132842 = seq__132819_132835;
var G__132843 = chunk__132820_132836;
var G__132844 = count__132821_132837;
var G__132845 = (i__132822_132838 + (1));
seq__132819_132835 = G__132842;
chunk__132820_132836 = G__132843;
count__132821_132837 = G__132844;
i__132822_132838 = G__132845;
continue;
} else {
var temp__4657__auto___132846 = cljs.core.seq.call(null,seq__132819_132835);
if(temp__4657__auto___132846){
var seq__132819_132849__$1 = temp__4657__auto___132846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132819_132849__$1)){
var c__36236__auto___132850 = cljs.core.chunk_first.call(null,seq__132819_132849__$1);
var G__132853 = cljs.core.chunk_rest.call(null,seq__132819_132849__$1);
var G__132854 = c__36236__auto___132850;
var G__132855 = cljs.core.count.call(null,c__36236__auto___132850);
var G__132856 = (0);
seq__132819_132835 = G__132853;
chunk__132820_132836 = G__132854;
count__132821_132837 = G__132855;
i__132822_132838 = G__132856;
continue;
} else {
var vec__132824_132857 = cljs.core.first.call(null,seq__132819_132849__$1);
var type_132858 = cljs.core.nth.call(null,vec__132824_132857,(0),null);
var f_132859 = cljs.core.nth.call(null,vec__132824_132857,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_132858,((function (seq__132819_132835,chunk__132820_132836,count__132821_132837,i__132822_132838,vec__132824_132857,type_132858,f_132859,seq__132819_132849__$1,temp__4657__auto___132846,vec__132818_132832,elem_132833,selector_132834){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_132858,dommy$core$this_fn);

return f_132859.call(null,e);
});})(seq__132819_132835,chunk__132820_132836,count__132821_132837,i__132822_132838,vec__132824_132857,type_132858,f_132859,seq__132819_132849__$1,temp__4657__auto___132846,vec__132818_132832,elem_132833,selector_132834))
);

var G__132860 = cljs.core.next.call(null,seq__132819_132849__$1);
var G__132861 = null;
var G__132862 = (0);
var G__132863 = (0);
seq__132819_132835 = G__132860;
chunk__132820_132836 = G__132861;
count__132821_132837 = G__132862;
i__132822_132838 = G__132863;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq132816){
var G__132817 = cljs.core.first.call(null,seq132816);
var seq132816__$1 = cljs.core.next.call(null,seq132816);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__132817,seq132816__$1);
});
