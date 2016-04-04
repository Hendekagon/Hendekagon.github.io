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
var or__35392__auto__ = elem.textContent;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
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
var args290364 = [];
var len__36461__auto___290378 = arguments.length;
var i__36462__auto___290380 = (0);
while(true){
if((i__36462__auto___290380 < len__36461__auto___290378)){
args290364.push((arguments[i__36462__auto___290380]));

var G__290382 = (i__36462__auto___290380 + (1));
i__36462__auto___290380 = G__290382;
continue;
} else {
}
break;
}

var G__290372 = args290364.length;
switch (G__290372) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args290364.length)].join('')));

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
var args290460 = [];
var len__36461__auto___290473 = arguments.length;
var i__36462__auto___290474 = (0);
while(true){
if((i__36462__auto___290474 < len__36461__auto___290473)){
args290460.push((arguments[i__36462__auto___290474]));

var G__290479 = (i__36462__auto___290474 + (1));
i__36462__auto___290474 = G__290479;
continue;
} else {
}
break;
}

var G__290464 = args290460.length;
switch (G__290464) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args290460.length)].join('')));

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
var args290492 = [];
var len__36461__auto___290496 = arguments.length;
var i__36462__auto___290497 = (0);
while(true){
if((i__36462__auto___290497 < len__36461__auto___290496)){
args290492.push((arguments[i__36462__auto___290497]));

var G__290498 = (i__36462__auto___290497 + (1));
i__36462__auto___290497 = G__290498;
continue;
} else {
}
break;
}

var G__290495 = args290492.length;
switch (G__290495) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args290492.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__290490_SHARP_){
return !((p1__290490_SHARP_ === base));
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
var args__36468__auto__ = [];
var len__36461__auto___290556 = arguments.length;
var i__36462__auto___290557 = (0);
while(true){
if((i__36462__auto___290557 < len__36461__auto___290556)){
args__36468__auto__.push((arguments[i__36462__auto___290557]));

var G__290559 = (i__36462__auto___290557 + (1));
i__36462__auto___290557 = G__290559;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__290547_290560 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__290548_290561 = null;
var count__290549_290562 = (0);
var i__290550_290563 = (0);
while(true){
if((i__290550_290563 < count__290549_290562)){
var vec__290551_290564 = cljs.core._nth.call(null,chunk__290548_290561,i__290550_290563);
var k_290565 = cljs.core.nth.call(null,vec__290551_290564,(0),null);
var v_290566 = cljs.core.nth.call(null,vec__290551_290564,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_290565),v_290566);

var G__290567 = seq__290547_290560;
var G__290568 = chunk__290548_290561;
var G__290569 = count__290549_290562;
var G__290570 = (i__290550_290563 + (1));
seq__290547_290560 = G__290567;
chunk__290548_290561 = G__290568;
count__290549_290562 = G__290569;
i__290550_290563 = G__290570;
continue;
} else {
var temp__4657__auto___290571 = cljs.core.seq.call(null,seq__290547_290560);
if(temp__4657__auto___290571){
var seq__290547_290572__$1 = temp__4657__auto___290571;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__290547_290572__$1)){
var c__36203__auto___290576 = cljs.core.chunk_first.call(null,seq__290547_290572__$1);
var G__290577 = cljs.core.chunk_rest.call(null,seq__290547_290572__$1);
var G__290578 = c__36203__auto___290576;
var G__290579 = cljs.core.count.call(null,c__36203__auto___290576);
var G__290580 = (0);
seq__290547_290560 = G__290577;
chunk__290548_290561 = G__290578;
count__290549_290562 = G__290579;
i__290550_290563 = G__290580;
continue;
} else {
var vec__290552_290582 = cljs.core.first.call(null,seq__290547_290572__$1);
var k_290583 = cljs.core.nth.call(null,vec__290552_290582,(0),null);
var v_290584 = cljs.core.nth.call(null,vec__290552_290582,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_290583),v_290584);

var G__290586 = cljs.core.next.call(null,seq__290547_290572__$1);
var G__290587 = null;
var G__290588 = (0);
var G__290589 = (0);
seq__290547_290560 = G__290586;
chunk__290548_290561 = G__290587;
count__290549_290562 = G__290588;
i__290550_290563 = G__290589;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq290538){
var G__290540 = cljs.core.first.call(null,seq290538);
var seq290538__$1 = cljs.core.next.call(null,seq290538);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__290540,seq290538__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__36468__auto__ = [];
var len__36461__auto___290598 = arguments.length;
var i__36462__auto___290600 = (0);
while(true){
if((i__36462__auto___290600 < len__36461__auto___290598)){
args__36468__auto__.push((arguments[i__36462__auto___290600]));

var G__290601 = (i__36462__auto___290600 + (1));
i__36462__auto___290600 = G__290601;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__290594_290603 = cljs.core.seq.call(null,keywords);
var chunk__290595_290604 = null;
var count__290596_290605 = (0);
var i__290597_290606 = (0);
while(true){
if((i__290597_290606 < count__290596_290605)){
var kw_290607 = cljs.core._nth.call(null,chunk__290595_290604,i__290597_290606);
style.removeProperty(dommy.utils.as_str.call(null,kw_290607));

var G__290608 = seq__290594_290603;
var G__290609 = chunk__290595_290604;
var G__290610 = count__290596_290605;
var G__290611 = (i__290597_290606 + (1));
seq__290594_290603 = G__290608;
chunk__290595_290604 = G__290609;
count__290596_290605 = G__290610;
i__290597_290606 = G__290611;
continue;
} else {
var temp__4657__auto___290613 = cljs.core.seq.call(null,seq__290594_290603);
if(temp__4657__auto___290613){
var seq__290594_290614__$1 = temp__4657__auto___290613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__290594_290614__$1)){
var c__36203__auto___290615 = cljs.core.chunk_first.call(null,seq__290594_290614__$1);
var G__290616 = cljs.core.chunk_rest.call(null,seq__290594_290614__$1);
var G__290617 = c__36203__auto___290615;
var G__290618 = cljs.core.count.call(null,c__36203__auto___290615);
var G__290619 = (0);
seq__290594_290603 = G__290616;
chunk__290595_290604 = G__290617;
count__290596_290605 = G__290618;
i__290597_290606 = G__290619;
continue;
} else {
var kw_290620 = cljs.core.first.call(null,seq__290594_290614__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_290620));

var G__290622 = cljs.core.next.call(null,seq__290594_290614__$1);
var G__290623 = null;
var G__290624 = (0);
var G__290625 = (0);
seq__290594_290603 = G__290622;
chunk__290595_290604 = G__290623;
count__290596_290605 = G__290624;
i__290597_290606 = G__290625;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq290591){
var G__290592 = cljs.core.first.call(null,seq290591);
var seq290591__$1 = cljs.core.next.call(null,seq290591);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__290592,seq290591__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__36468__auto__ = [];
var len__36461__auto___290644 = arguments.length;
var i__36462__auto___290645 = (0);
while(true){
if((i__36462__auto___290645 < len__36461__auto___290644)){
args__36468__auto__.push((arguments[i__36462__auto___290645]));

var G__290647 = (i__36462__auto___290645 + (1));
i__36462__auto___290645 = G__290647;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__290633_290649 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__290634_290650 = null;
var count__290635_290651 = (0);
var i__290636_290652 = (0);
while(true){
if((i__290636_290652 < count__290635_290651)){
var vec__290637_290653 = cljs.core._nth.call(null,chunk__290634_290650,i__290636_290652);
var k_290654 = cljs.core.nth.call(null,vec__290637_290653,(0),null);
var v_290655 = cljs.core.nth.call(null,vec__290637_290653,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_290654,[cljs.core.str(v_290655),cljs.core.str("px")].join(''));

var G__290660 = seq__290633_290649;
var G__290661 = chunk__290634_290650;
var G__290662 = count__290635_290651;
var G__290663 = (i__290636_290652 + (1));
seq__290633_290649 = G__290660;
chunk__290634_290650 = G__290661;
count__290635_290651 = G__290662;
i__290636_290652 = G__290663;
continue;
} else {
var temp__4657__auto___290664 = cljs.core.seq.call(null,seq__290633_290649);
if(temp__4657__auto___290664){
var seq__290633_290667__$1 = temp__4657__auto___290664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__290633_290667__$1)){
var c__36203__auto___290668 = cljs.core.chunk_first.call(null,seq__290633_290667__$1);
var G__290670 = cljs.core.chunk_rest.call(null,seq__290633_290667__$1);
var G__290671 = c__36203__auto___290668;
var G__290672 = cljs.core.count.call(null,c__36203__auto___290668);
var G__290673 = (0);
seq__290633_290649 = G__290670;
chunk__290634_290650 = G__290671;
count__290635_290651 = G__290672;
i__290636_290652 = G__290673;
continue;
} else {
var vec__290639_290676 = cljs.core.first.call(null,seq__290633_290667__$1);
var k_290677 = cljs.core.nth.call(null,vec__290639_290676,(0),null);
var v_290678 = cljs.core.nth.call(null,vec__290639_290676,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_290677,[cljs.core.str(v_290678),cljs.core.str("px")].join(''));

var G__290679 = cljs.core.next.call(null,seq__290633_290667__$1);
var G__290680 = null;
var G__290681 = (0);
var G__290682 = (0);
seq__290633_290649 = G__290679;
chunk__290634_290650 = G__290680;
count__290635_290651 = G__290681;
i__290636_290652 = G__290682;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq290628){
var G__290629 = cljs.core.first.call(null,seq290628);
var seq290628__$1 = cljs.core.next.call(null,seq290628);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__290629,seq290628__$1);
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
var args290686 = [];
var len__36461__auto___290707 = arguments.length;
var i__36462__auto___290708 = (0);
while(true){
if((i__36462__auto___290708 < len__36461__auto___290707)){
args290686.push((arguments[i__36462__auto___290708]));

var G__290709 = (i__36462__auto___290708 + (1));
i__36462__auto___290708 = G__290709;
continue;
} else {
}
break;
}

var G__290697 = args290686.length;
switch (G__290697) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__36480__auto__ = (new cljs.core.IndexedSeq(args290686.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36480__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__290699 = elem;
(G__290699[k__$1] = v);

return G__290699;
} else {
var G__290700 = elem;
G__290700.setAttribute(k__$1,v);

return G__290700;
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

var seq__290701_290711 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__290702_290712 = null;
var count__290703_290713 = (0);
var i__290704_290714 = (0);
while(true){
if((i__290704_290714 < count__290703_290713)){
var vec__290705_290719 = cljs.core._nth.call(null,chunk__290702_290712,i__290704_290714);
var k_290720__$1 = cljs.core.nth.call(null,vec__290705_290719,(0),null);
var v_290721__$1 = cljs.core.nth.call(null,vec__290705_290719,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_290720__$1,v_290721__$1);

var G__290727 = seq__290701_290711;
var G__290728 = chunk__290702_290712;
var G__290729 = count__290703_290713;
var G__290730 = (i__290704_290714 + (1));
seq__290701_290711 = G__290727;
chunk__290702_290712 = G__290728;
count__290703_290713 = G__290729;
i__290704_290714 = G__290730;
continue;
} else {
var temp__4657__auto___290735 = cljs.core.seq.call(null,seq__290701_290711);
if(temp__4657__auto___290735){
var seq__290701_290736__$1 = temp__4657__auto___290735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__290701_290736__$1)){
var c__36203__auto___290741 = cljs.core.chunk_first.call(null,seq__290701_290736__$1);
var G__290742 = cljs.core.chunk_rest.call(null,seq__290701_290736__$1);
var G__290743 = c__36203__auto___290741;
var G__290744 = cljs.core.count.call(null,c__36203__auto___290741);
var G__290745 = (0);
seq__290701_290711 = G__290742;
chunk__290702_290712 = G__290743;
count__290703_290713 = G__290744;
i__290704_290714 = G__290745;
continue;
} else {
var vec__290706_290746 = cljs.core.first.call(null,seq__290701_290736__$1);
var k_290747__$1 = cljs.core.nth.call(null,vec__290706_290746,(0),null);
var v_290748__$1 = cljs.core.nth.call(null,vec__290706_290746,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_290747__$1,v_290748__$1);

var G__290753 = cljs.core.next.call(null,seq__290701_290736__$1);
var G__290754 = null;
var G__290755 = (0);
var G__290756 = (0);
seq__290701_290711 = G__290753;
chunk__290702_290712 = G__290754;
count__290703_290713 = G__290755;
i__290704_290714 = G__290756;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq290688){
var G__290689 = cljs.core.first.call(null,seq290688);
var seq290688__$1 = cljs.core.next.call(null,seq290688);
var G__290690 = cljs.core.first.call(null,seq290688__$1);
var seq290688__$2 = cljs.core.next.call(null,seq290688__$1);
var G__290691 = cljs.core.first.call(null,seq290688__$2);
var seq290688__$3 = cljs.core.next.call(null,seq290688__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__290689,G__290690,G__290691,seq290688__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args290771 = [];
var len__36461__auto___290799 = arguments.length;
var i__36462__auto___290800 = (0);
while(true){
if((i__36462__auto___290800 < len__36461__auto___290799)){
args290771.push((arguments[i__36462__auto___290800]));

var G__290803 = (i__36462__auto___290800 + (1));
i__36462__auto___290800 = G__290803;
continue;
} else {
}
break;
}

var G__290784 = args290771.length;
switch (G__290784) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36480__auto__ = (new cljs.core.IndexedSeq(args290771.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36480__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_290808__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_290808__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_290808__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__290790_290810 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__290791_290811 = null;
var count__290792_290812 = (0);
var i__290793_290813 = (0);
while(true){
if((i__290793_290813 < count__290792_290812)){
var k_290814__$1 = cljs.core._nth.call(null,chunk__290791_290811,i__290793_290813);
dommy.core.remove_attr_BANG_.call(null,elem,k_290814__$1);

var G__290815 = seq__290790_290810;
var G__290816 = chunk__290791_290811;
var G__290817 = count__290792_290812;
var G__290818 = (i__290793_290813 + (1));
seq__290790_290810 = G__290815;
chunk__290791_290811 = G__290816;
count__290792_290812 = G__290817;
i__290793_290813 = G__290818;
continue;
} else {
var temp__4657__auto___290819 = cljs.core.seq.call(null,seq__290790_290810);
if(temp__4657__auto___290819){
var seq__290790_290820__$1 = temp__4657__auto___290819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__290790_290820__$1)){
var c__36203__auto___290821 = cljs.core.chunk_first.call(null,seq__290790_290820__$1);
var G__290822 = cljs.core.chunk_rest.call(null,seq__290790_290820__$1);
var G__290823 = c__36203__auto___290821;
var G__290824 = cljs.core.count.call(null,c__36203__auto___290821);
var G__290825 = (0);
seq__290790_290810 = G__290822;
chunk__290791_290811 = G__290823;
count__290792_290812 = G__290824;
i__290793_290813 = G__290825;
continue;
} else {
var k_290826__$1 = cljs.core.first.call(null,seq__290790_290820__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_290826__$1);

var G__290827 = cljs.core.next.call(null,seq__290790_290820__$1);
var G__290828 = null;
var G__290829 = (0);
var G__290830 = (0);
seq__290790_290810 = G__290827;
chunk__290791_290811 = G__290828;
count__290792_290812 = G__290829;
i__290793_290813 = G__290830;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq290772){
var G__290773 = cljs.core.first.call(null,seq290772);
var seq290772__$1 = cljs.core.next.call(null,seq290772);
var G__290774 = cljs.core.first.call(null,seq290772__$1);
var seq290772__$2 = cljs.core.next.call(null,seq290772__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__290773,G__290774,seq290772__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args290832 = [];
var len__36461__auto___290842 = arguments.length;
var i__36462__auto___290843 = (0);
while(true){
if((i__36462__auto___290843 < len__36461__auto___290842)){
args290832.push((arguments[i__36462__auto___290843]));

var G__290846 = (i__36462__auto___290843 + (1));
i__36462__auto___290843 = G__290846;
continue;
} else {
}
break;
}

var G__290839 = args290832.length;
switch (G__290839) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args290832.length)].join('')));

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
var args290857 = [];
var len__36461__auto___290903 = arguments.length;
var i__36462__auto___290905 = (0);
while(true){
if((i__36462__auto___290905 < len__36461__auto___290903)){
args290857.push((arguments[i__36462__auto___290905]));

var G__290906 = (i__36462__auto___290905 + (1));
i__36462__auto___290905 = G__290906;
continue;
} else {
}
break;
}

var G__290865 = args290857.length;
switch (G__290865) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36480__auto__ = (new cljs.core.IndexedSeq(args290857.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36480__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___290909 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___290909)){
var class_list_290910 = temp__4655__auto___290909;
var seq__290875_290911 = cljs.core.seq.call(null,classes__$1);
var chunk__290876_290912 = null;
var count__290877_290913 = (0);
var i__290878_290914 = (0);
while(true){
if((i__290878_290914 < count__290877_290913)){
var c_290915 = cljs.core._nth.call(null,chunk__290876_290912,i__290878_290914);
class_list_290910.add(c_290915);

var G__290916 = seq__290875_290911;
var G__290917 = chunk__290876_290912;
var G__290918 = count__290877_290913;
var G__290919 = (i__290878_290914 + (1));
seq__290875_290911 = G__290916;
chunk__290876_290912 = G__290917;
count__290877_290913 = G__290918;
i__290878_290914 = G__290919;
continue;
} else {
var temp__4657__auto___290922 = cljs.core.seq.call(null,seq__290875_290911);
if(temp__4657__auto___290922){
var seq__290875_290924__$1 = temp__4657__auto___290922;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__290875_290924__$1)){
var c__36203__auto___290926 = cljs.core.chunk_first.call(null,seq__290875_290924__$1);
var G__290927 = cljs.core.chunk_rest.call(null,seq__290875_290924__$1);
var G__290928 = c__36203__auto___290926;
var G__290929 = cljs.core.count.call(null,c__36203__auto___290926);
var G__290930 = (0);
seq__290875_290911 = G__290927;
chunk__290876_290912 = G__290928;
count__290877_290913 = G__290929;
i__290878_290914 = G__290930;
continue;
} else {
var c_290935 = cljs.core.first.call(null,seq__290875_290924__$1);
class_list_290910.add(c_290935);

var G__290936 = cljs.core.next.call(null,seq__290875_290924__$1);
var G__290937 = null;
var G__290938 = (0);
var G__290939 = (0);
seq__290875_290911 = G__290936;
chunk__290876_290912 = G__290937;
count__290877_290913 = G__290938;
i__290878_290914 = G__290939;
continue;
}
} else {
}
}
break;
}
} else {
var seq__290882_290940 = cljs.core.seq.call(null,classes__$1);
var chunk__290883_290941 = null;
var count__290884_290942 = (0);
var i__290885_290943 = (0);
while(true){
if((i__290885_290943 < count__290884_290942)){
var c_290945 = cljs.core._nth.call(null,chunk__290883_290941,i__290885_290943);
var class_name_290951 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_290951,c_290945))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_290951 === ""))?c_290945:[cljs.core.str(class_name_290951),cljs.core.str(" "),cljs.core.str(c_290945)].join('')));
}

var G__290958 = seq__290882_290940;
var G__290959 = chunk__290883_290941;
var G__290960 = count__290884_290942;
var G__290961 = (i__290885_290943 + (1));
seq__290882_290940 = G__290958;
chunk__290883_290941 = G__290959;
count__290884_290942 = G__290960;
i__290885_290943 = G__290961;
continue;
} else {
var temp__4657__auto___290964 = cljs.core.seq.call(null,seq__290882_290940);
if(temp__4657__auto___290964){
var seq__290882_290972__$1 = temp__4657__auto___290964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__290882_290972__$1)){
var c__36203__auto___290974 = cljs.core.chunk_first.call(null,seq__290882_290972__$1);
var G__290975 = cljs.core.chunk_rest.call(null,seq__290882_290972__$1);
var G__290976 = c__36203__auto___290974;
var G__290977 = cljs.core.count.call(null,c__36203__auto___290974);
var G__290978 = (0);
seq__290882_290940 = G__290975;
chunk__290883_290941 = G__290976;
count__290884_290942 = G__290977;
i__290885_290943 = G__290978;
continue;
} else {
var c_290987 = cljs.core.first.call(null,seq__290882_290972__$1);
var class_name_290990 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_290990,c_290987))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_290990 === ""))?c_290987:[cljs.core.str(class_name_290990),cljs.core.str(" "),cljs.core.str(c_290987)].join('')));
}

var G__290992 = cljs.core.next.call(null,seq__290882_290972__$1);
var G__290993 = null;
var G__290994 = (0);
var G__290995 = (0);
seq__290882_290940 = G__290992;
chunk__290883_290941 = G__290993;
count__290884_290942 = G__290994;
i__290885_290943 = G__290995;
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
var seq__290894_290998 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__290895_290999 = null;
var count__290896_291000 = (0);
var i__290897_291001 = (0);
while(true){
if((i__290897_291001 < count__290896_291000)){
var c_291004 = cljs.core._nth.call(null,chunk__290895_290999,i__290897_291001);
dommy.core.add_class_BANG_.call(null,elem,c_291004);

var G__291005 = seq__290894_290998;
var G__291006 = chunk__290895_290999;
var G__291007 = count__290896_291000;
var G__291008 = (i__290897_291001 + (1));
seq__290894_290998 = G__291005;
chunk__290895_290999 = G__291006;
count__290896_291000 = G__291007;
i__290897_291001 = G__291008;
continue;
} else {
var temp__4657__auto___291009 = cljs.core.seq.call(null,seq__290894_290998);
if(temp__4657__auto___291009){
var seq__290894_291010__$1 = temp__4657__auto___291009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__290894_291010__$1)){
var c__36203__auto___291022 = cljs.core.chunk_first.call(null,seq__290894_291010__$1);
var G__291027 = cljs.core.chunk_rest.call(null,seq__290894_291010__$1);
var G__291028 = c__36203__auto___291022;
var G__291029 = cljs.core.count.call(null,c__36203__auto___291022);
var G__291030 = (0);
seq__290894_290998 = G__291027;
chunk__290895_290999 = G__291028;
count__290896_291000 = G__291029;
i__290897_291001 = G__291030;
continue;
} else {
var c_291031 = cljs.core.first.call(null,seq__290894_291010__$1);
dommy.core.add_class_BANG_.call(null,elem,c_291031);

var G__291032 = cljs.core.next.call(null,seq__290894_291010__$1);
var G__291033 = null;
var G__291034 = (0);
var G__291035 = (0);
seq__290894_290998 = G__291032;
chunk__290895_290999 = G__291033;
count__290896_291000 = G__291034;
i__290897_291001 = G__291035;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq290858){
var G__290859 = cljs.core.first.call(null,seq290858);
var seq290858__$1 = cljs.core.next.call(null,seq290858);
var G__290860 = cljs.core.first.call(null,seq290858__$1);
var seq290858__$2 = cljs.core.next.call(null,seq290858__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__290859,G__290860,seq290858__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args291048 = [];
var len__36461__auto___291076 = arguments.length;
var i__36462__auto___291077 = (0);
while(true){
if((i__36462__auto___291077 < len__36461__auto___291076)){
args291048.push((arguments[i__36462__auto___291077]));

var G__291085 = (i__36462__auto___291077 + (1));
i__36462__auto___291077 = G__291085;
continue;
} else {
}
break;
}

var G__291067 = args291048.length;
switch (G__291067) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36480__auto__ = (new cljs.core.IndexedSeq(args291048.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36480__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___291089 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___291089)){
var class_list_291090 = temp__4655__auto___291089;
class_list_291090.remove(c__$1);
} else {
var class_name_291091 = dommy.core.class$.call(null,elem);
var new_class_name_291092 = dommy.utils.remove_class_str.call(null,class_name_291091,c__$1);
if((class_name_291091 === new_class_name_291092)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_291092);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__291072 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__291073 = null;
var count__291074 = (0);
var i__291075 = (0);
while(true){
if((i__291075 < count__291074)){
var c = cljs.core._nth.call(null,chunk__291073,i__291075);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__291093 = seq__291072;
var G__291094 = chunk__291073;
var G__291095 = count__291074;
var G__291096 = (i__291075 + (1));
seq__291072 = G__291093;
chunk__291073 = G__291094;
count__291074 = G__291095;
i__291075 = G__291096;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__291072);
if(temp__4657__auto__){
var seq__291072__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__291072__$1)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,seq__291072__$1);
var G__291106 = cljs.core.chunk_rest.call(null,seq__291072__$1);
var G__291107 = c__36203__auto__;
var G__291108 = cljs.core.count.call(null,c__36203__auto__);
var G__291109 = (0);
seq__291072 = G__291106;
chunk__291073 = G__291107;
count__291074 = G__291108;
i__291075 = G__291109;
continue;
} else {
var c = cljs.core.first.call(null,seq__291072__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__291110 = cljs.core.next.call(null,seq__291072__$1);
var G__291111 = null;
var G__291112 = (0);
var G__291113 = (0);
seq__291072 = G__291110;
chunk__291073 = G__291111;
count__291074 = G__291112;
i__291075 = G__291113;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq291059){
var G__291060 = cljs.core.first.call(null,seq291059);
var seq291059__$1 = cljs.core.next.call(null,seq291059);
var G__291061 = cljs.core.first.call(null,seq291059__$1);
var seq291059__$2 = cljs.core.next.call(null,seq291059__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__291060,G__291061,seq291059__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args291119 = [];
var len__36461__auto___291122 = arguments.length;
var i__36462__auto___291123 = (0);
while(true){
if((i__36462__auto___291123 < len__36461__auto___291122)){
args291119.push((arguments[i__36462__auto___291123]));

var G__291124 = (i__36462__auto___291123 + (1));
i__36462__auto___291123 = G__291124;
continue;
} else {
}
break;
}

var G__291121 = args291119.length;
switch (G__291121) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args291119.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___291130 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___291130)){
var class_list_291131 = temp__4655__auto___291130;
class_list_291131.toggle(c__$1);
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
var args291137 = [];
var len__36461__auto___291190 = arguments.length;
var i__36462__auto___291191 = (0);
while(true){
if((i__36462__auto___291191 < len__36461__auto___291190)){
args291137.push((arguments[i__36462__auto___291191]));

var G__291192 = (i__36462__auto___291191 + (1));
i__36462__auto___291191 = G__291192;
continue;
} else {
}
break;
}

var G__291185 = args291137.length;
switch (G__291185) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args291137.length)].join('')));

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
var args291215 = [];
var len__36461__auto___291218 = arguments.length;
var i__36462__auto___291219 = (0);
while(true){
if((i__36462__auto___291219 < len__36461__auto___291218)){
args291215.push((arguments[i__36462__auto___291219]));

var G__291220 = (i__36462__auto___291219 + (1));
i__36462__auto___291219 = G__291220;
continue;
} else {
}
break;
}

var G__291217 = args291215.length;
switch (G__291217) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args291215.length)].join('')));

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
var args291226 = [];
var len__36461__auto___291262 = arguments.length;
var i__36462__auto___291267 = (0);
while(true){
if((i__36462__auto___291267 < len__36461__auto___291262)){
args291226.push((arguments[i__36462__auto___291267]));

var G__291268 = (i__36462__auto___291267 + (1));
i__36462__auto___291267 = G__291268;
continue;
} else {
}
break;
}

var G__291231 = args291226.length;
switch (G__291231) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36480__auto__ = (new cljs.core.IndexedSeq(args291226.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36480__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__291232 = parent;
G__291232.appendChild(child);

return G__291232;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__291233_291274 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__291234_291275 = null;
var count__291235_291276 = (0);
var i__291236_291277 = (0);
while(true){
if((i__291236_291277 < count__291235_291276)){
var c_291280 = cljs.core._nth.call(null,chunk__291234_291275,i__291236_291277);
dommy.core.append_BANG_.call(null,parent,c_291280);

var G__291281 = seq__291233_291274;
var G__291282 = chunk__291234_291275;
var G__291283 = count__291235_291276;
var G__291284 = (i__291236_291277 + (1));
seq__291233_291274 = G__291281;
chunk__291234_291275 = G__291282;
count__291235_291276 = G__291283;
i__291236_291277 = G__291284;
continue;
} else {
var temp__4657__auto___291285 = cljs.core.seq.call(null,seq__291233_291274);
if(temp__4657__auto___291285){
var seq__291233_291286__$1 = temp__4657__auto___291285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__291233_291286__$1)){
var c__36203__auto___291287 = cljs.core.chunk_first.call(null,seq__291233_291286__$1);
var G__291288 = cljs.core.chunk_rest.call(null,seq__291233_291286__$1);
var G__291289 = c__36203__auto___291287;
var G__291290 = cljs.core.count.call(null,c__36203__auto___291287);
var G__291291 = (0);
seq__291233_291274 = G__291288;
chunk__291234_291275 = G__291289;
count__291235_291276 = G__291290;
i__291236_291277 = G__291291;
continue;
} else {
var c_291292 = cljs.core.first.call(null,seq__291233_291286__$1);
dommy.core.append_BANG_.call(null,parent,c_291292);

var G__291293 = cljs.core.next.call(null,seq__291233_291286__$1);
var G__291294 = null;
var G__291295 = (0);
var G__291296 = (0);
seq__291233_291274 = G__291293;
chunk__291234_291275 = G__291294;
count__291235_291276 = G__291295;
i__291236_291277 = G__291296;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq291227){
var G__291228 = cljs.core.first.call(null,seq291227);
var seq291227__$1 = cljs.core.next.call(null,seq291227);
var G__291229 = cljs.core.first.call(null,seq291227__$1);
var seq291227__$2 = cljs.core.next.call(null,seq291227__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__291228,G__291229,seq291227__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args291297 = [];
var len__36461__auto___291314 = arguments.length;
var i__36462__auto___291315 = (0);
while(true){
if((i__36462__auto___291315 < len__36461__auto___291314)){
args291297.push((arguments[i__36462__auto___291315]));

var G__291317 = (i__36462__auto___291315 + (1));
i__36462__auto___291315 = G__291317;
continue;
} else {
}
break;
}

var G__291306 = args291297.length;
switch (G__291306) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36480__auto__ = (new cljs.core.IndexedSeq(args291297.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36480__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__291307 = parent;
G__291307.insertBefore(child,parent.firstChild);

return G__291307;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__291308_291319 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__291309_291320 = null;
var count__291310_291321 = (0);
var i__291311_291322 = (0);
while(true){
if((i__291311_291322 < count__291310_291321)){
var c_291323 = cljs.core._nth.call(null,chunk__291309_291320,i__291311_291322);
dommy.core.prepend_BANG_.call(null,parent,c_291323);

var G__291325 = seq__291308_291319;
var G__291326 = chunk__291309_291320;
var G__291327 = count__291310_291321;
var G__291328 = (i__291311_291322 + (1));
seq__291308_291319 = G__291325;
chunk__291309_291320 = G__291326;
count__291310_291321 = G__291327;
i__291311_291322 = G__291328;
continue;
} else {
var temp__4657__auto___291329 = cljs.core.seq.call(null,seq__291308_291319);
if(temp__4657__auto___291329){
var seq__291308_291330__$1 = temp__4657__auto___291329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__291308_291330__$1)){
var c__36203__auto___291331 = cljs.core.chunk_first.call(null,seq__291308_291330__$1);
var G__291332 = cljs.core.chunk_rest.call(null,seq__291308_291330__$1);
var G__291333 = c__36203__auto___291331;
var G__291334 = cljs.core.count.call(null,c__36203__auto___291331);
var G__291335 = (0);
seq__291308_291319 = G__291332;
chunk__291309_291320 = G__291333;
count__291310_291321 = G__291334;
i__291311_291322 = G__291335;
continue;
} else {
var c_291337 = cljs.core.first.call(null,seq__291308_291330__$1);
dommy.core.prepend_BANG_.call(null,parent,c_291337);

var G__291338 = cljs.core.next.call(null,seq__291308_291330__$1);
var G__291339 = null;
var G__291340 = (0);
var G__291341 = (0);
seq__291308_291319 = G__291338;
chunk__291309_291320 = G__291339;
count__291310_291321 = G__291340;
i__291311_291322 = G__291341;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq291298){
var G__291299 = cljs.core.first.call(null,seq291298);
var seq291298__$1 = cljs.core.next.call(null,seq291298);
var G__291300 = cljs.core.first.call(null,seq291298__$1);
var seq291298__$2 = cljs.core.next.call(null,seq291298__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__291299,G__291300,seq291298__$2);
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
var temp__4655__auto___291357 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___291357)){
var next_291358 = temp__4655__auto___291357;
dommy.core.insert_before_BANG_.call(null,elem,next_291358);
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
var args291359 = [];
var len__36461__auto___291363 = arguments.length;
var i__36462__auto___291364 = (0);
while(true){
if((i__36462__auto___291364 < len__36461__auto___291363)){
args291359.push((arguments[i__36462__auto___291364]));

var G__291365 = (i__36462__auto___291364 + (1));
i__36462__auto___291364 = G__291365;
continue;
} else {
}
break;
}

var G__291361 = args291359.length;
switch (G__291361) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args291359.length)].join('')));

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
var G__291362 = p;
G__291362.removeChild(elem);

return G__291362;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__291367){
var vec__291368 = p__291367;
var special_mouse_event = cljs.core.nth.call(null,vec__291368,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__291368,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__291368,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__291368,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__35392__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__35380__auto__ = related_target;
if(cljs.core.truth_(and__35380__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__35380__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__291368,special_mouse_event,real_mouse_event))
});})(vec__291368,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__35380__auto__ = selected_target;
if(cljs.core.truth_(and__35380__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__35380__auto__;
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
var or__35392__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__36468__auto__ = [];
var len__36461__auto___291410 = arguments.length;
var i__36462__auto___291411 = (0);
while(true){
if((i__36462__auto___291411 < len__36461__auto___291410)){
args__36468__auto__.push((arguments[i__36462__auto___291411]));

var G__291412 = (i__36462__auto___291411 + (1));
i__36462__auto___291411 = G__291412;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((2) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36469__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq291391){
var G__291392 = cljs.core.first.call(null,seq291391);
var seq291391__$1 = cljs.core.next.call(null,seq291391);
var G__291393 = cljs.core.first.call(null,seq291391__$1);
var seq291391__$2 = cljs.core.next.call(null,seq291391__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__291392,G__291393,seq291391__$2);
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
var args__36468__auto__ = [];
var len__36461__auto___291478 = arguments.length;
var i__36462__auto___291479 = (0);
while(true){
if((i__36462__auto___291479 < len__36461__auto___291478)){
args__36468__auto__.push((arguments[i__36462__auto___291479]));

var G__291480 = (i__36462__auto___291479 + (1));
i__36462__auto___291479 = G__291480;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__291421_291481 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_291482 = cljs.core.nth.call(null,vec__291421_291481,(0),null);
var selector_291483 = cljs.core.nth.call(null,vec__291421_291481,(1),null);
var seq__291422_291485 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__291432_291486 = null;
var count__291433_291487 = (0);
var i__291434_291488 = (0);
while(true){
if((i__291434_291488 < count__291433_291487)){
var vec__291442_291489 = cljs.core._nth.call(null,chunk__291432_291486,i__291434_291488);
var orig_type_291490 = cljs.core.nth.call(null,vec__291442_291489,(0),null);
var f_291491 = cljs.core.nth.call(null,vec__291442_291489,(1),null);
var seq__291435_291492 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_291490,cljs.core.PersistentArrayMap.fromArray([orig_type_291490,cljs.core.identity], true, false)));
var chunk__291437_291493 = null;
var count__291438_291494 = (0);
var i__291439_291495 = (0);
while(true){
if((i__291439_291495 < count__291438_291494)){
var vec__291443_291497 = cljs.core._nth.call(null,chunk__291437_291493,i__291439_291495);
var actual_type_291498 = cljs.core.nth.call(null,vec__291443_291497,(0),null);
var factory_291499 = cljs.core.nth.call(null,vec__291443_291497,(1),null);
var canonical_f_291500 = (cljs.core.truth_(selector_291483)?cljs.core.partial.call(null,dommy.core.live_listener,elem_291482,selector_291483):cljs.core.identity).call(null,factory_291499.call(null,f_291491));
dommy.core.update_event_listeners_BANG_.call(null,elem_291482,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_291483,actual_type_291498,f_291491], null),canonical_f_291500);

if(cljs.core.truth_(elem_291482.addEventListener)){
elem_291482.addEventListener(cljs.core.name.call(null,actual_type_291498),canonical_f_291500);
} else {
elem_291482.attachEvent(cljs.core.name.call(null,actual_type_291498),canonical_f_291500);
}

var G__291507 = seq__291435_291492;
var G__291508 = chunk__291437_291493;
var G__291509 = count__291438_291494;
var G__291510 = (i__291439_291495 + (1));
seq__291435_291492 = G__291507;
chunk__291437_291493 = G__291508;
count__291438_291494 = G__291509;
i__291439_291495 = G__291510;
continue;
} else {
var temp__4657__auto___291520 = cljs.core.seq.call(null,seq__291435_291492);
if(temp__4657__auto___291520){
var seq__291435_291521__$1 = temp__4657__auto___291520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__291435_291521__$1)){
var c__36203__auto___291522 = cljs.core.chunk_first.call(null,seq__291435_291521__$1);
var G__291523 = cljs.core.chunk_rest.call(null,seq__291435_291521__$1);
var G__291524 = c__36203__auto___291522;
var G__291525 = cljs.core.count.call(null,c__36203__auto___291522);
var G__291526 = (0);
seq__291435_291492 = G__291523;
chunk__291437_291493 = G__291524;
count__291438_291494 = G__291525;
i__291439_291495 = G__291526;
continue;
} else {
var vec__291444_291527 = cljs.core.first.call(null,seq__291435_291521__$1);
var actual_type_291528 = cljs.core.nth.call(null,vec__291444_291527,(0),null);
var factory_291529 = cljs.core.nth.call(null,vec__291444_291527,(1),null);
var canonical_f_291534 = (cljs.core.truth_(selector_291483)?cljs.core.partial.call(null,dommy.core.live_listener,elem_291482,selector_291483):cljs.core.identity).call(null,factory_291529.call(null,f_291491));
dommy.core.update_event_listeners_BANG_.call(null,elem_291482,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_291483,actual_type_291528,f_291491], null),canonical_f_291534);

if(cljs.core.truth_(elem_291482.addEventListener)){
elem_291482.addEventListener(cljs.core.name.call(null,actual_type_291528),canonical_f_291534);
} else {
elem_291482.attachEvent(cljs.core.name.call(null,actual_type_291528),canonical_f_291534);
}

var G__291544 = cljs.core.next.call(null,seq__291435_291521__$1);
var G__291545 = null;
var G__291546 = (0);
var G__291547 = (0);
seq__291435_291492 = G__291544;
chunk__291437_291493 = G__291545;
count__291438_291494 = G__291546;
i__291439_291495 = G__291547;
continue;
}
} else {
}
}
break;
}

var G__291548 = seq__291422_291485;
var G__291549 = chunk__291432_291486;
var G__291550 = count__291433_291487;
var G__291551 = (i__291434_291488 + (1));
seq__291422_291485 = G__291548;
chunk__291432_291486 = G__291549;
count__291433_291487 = G__291550;
i__291434_291488 = G__291551;
continue;
} else {
var temp__4657__auto___291552 = cljs.core.seq.call(null,seq__291422_291485);
if(temp__4657__auto___291552){
var seq__291422_291553__$1 = temp__4657__auto___291552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__291422_291553__$1)){
var c__36203__auto___291554 = cljs.core.chunk_first.call(null,seq__291422_291553__$1);
var G__291555 = cljs.core.chunk_rest.call(null,seq__291422_291553__$1);
var G__291556 = c__36203__auto___291554;
var G__291557 = cljs.core.count.call(null,c__36203__auto___291554);
var G__291558 = (0);
seq__291422_291485 = G__291555;
chunk__291432_291486 = G__291556;
count__291433_291487 = G__291557;
i__291434_291488 = G__291558;
continue;
} else {
var vec__291449_291559 = cljs.core.first.call(null,seq__291422_291553__$1);
var orig_type_291560 = cljs.core.nth.call(null,vec__291449_291559,(0),null);
var f_291561 = cljs.core.nth.call(null,vec__291449_291559,(1),null);
var seq__291423_291562 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_291560,cljs.core.PersistentArrayMap.fromArray([orig_type_291560,cljs.core.identity], true, false)));
var chunk__291426_291563 = null;
var count__291427_291564 = (0);
var i__291428_291565 = (0);
while(true){
if((i__291428_291565 < count__291427_291564)){
var vec__291450_291566 = cljs.core._nth.call(null,chunk__291426_291563,i__291428_291565);
var actual_type_291567 = cljs.core.nth.call(null,vec__291450_291566,(0),null);
var factory_291568 = cljs.core.nth.call(null,vec__291450_291566,(1),null);
var canonical_f_291569 = (cljs.core.truth_(selector_291483)?cljs.core.partial.call(null,dommy.core.live_listener,elem_291482,selector_291483):cljs.core.identity).call(null,factory_291568.call(null,f_291561));
dommy.core.update_event_listeners_BANG_.call(null,elem_291482,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_291483,actual_type_291567,f_291561], null),canonical_f_291569);

if(cljs.core.truth_(elem_291482.addEventListener)){
elem_291482.addEventListener(cljs.core.name.call(null,actual_type_291567),canonical_f_291569);
} else {
elem_291482.attachEvent(cljs.core.name.call(null,actual_type_291567),canonical_f_291569);
}

var G__291570 = seq__291423_291562;
var G__291571 = chunk__291426_291563;
var G__291572 = count__291427_291564;
var G__291573 = (i__291428_291565 + (1));
seq__291423_291562 = G__291570;
chunk__291426_291563 = G__291571;
count__291427_291564 = G__291572;
i__291428_291565 = G__291573;
continue;
} else {
var temp__4657__auto___291575__$1 = cljs.core.seq.call(null,seq__291423_291562);
if(temp__4657__auto___291575__$1){
var seq__291423_291576__$1 = temp__4657__auto___291575__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__291423_291576__$1)){
var c__36203__auto___291578 = cljs.core.chunk_first.call(null,seq__291423_291576__$1);
var G__291579 = cljs.core.chunk_rest.call(null,seq__291423_291576__$1);
var G__291580 = c__36203__auto___291578;
var G__291581 = cljs.core.count.call(null,c__36203__auto___291578);
var G__291582 = (0);
seq__291423_291562 = G__291579;
chunk__291426_291563 = G__291580;
count__291427_291564 = G__291581;
i__291428_291565 = G__291582;
continue;
} else {
var vec__291463_291583 = cljs.core.first.call(null,seq__291423_291576__$1);
var actual_type_291584 = cljs.core.nth.call(null,vec__291463_291583,(0),null);
var factory_291585 = cljs.core.nth.call(null,vec__291463_291583,(1),null);
var canonical_f_291586 = (cljs.core.truth_(selector_291483)?cljs.core.partial.call(null,dommy.core.live_listener,elem_291482,selector_291483):cljs.core.identity).call(null,factory_291585.call(null,f_291561));
dommy.core.update_event_listeners_BANG_.call(null,elem_291482,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_291483,actual_type_291584,f_291561], null),canonical_f_291586);

if(cljs.core.truth_(elem_291482.addEventListener)){
elem_291482.addEventListener(cljs.core.name.call(null,actual_type_291584),canonical_f_291586);
} else {
elem_291482.attachEvent(cljs.core.name.call(null,actual_type_291584),canonical_f_291586);
}

var G__291592 = cljs.core.next.call(null,seq__291423_291576__$1);
var G__291593 = null;
var G__291594 = (0);
var G__291595 = (0);
seq__291423_291562 = G__291592;
chunk__291426_291563 = G__291593;
count__291427_291564 = G__291594;
i__291428_291565 = G__291595;
continue;
}
} else {
}
}
break;
}

var G__291596 = cljs.core.next.call(null,seq__291422_291553__$1);
var G__291597 = null;
var G__291598 = (0);
var G__291599 = (0);
seq__291422_291485 = G__291596;
chunk__291432_291486 = G__291597;
count__291433_291487 = G__291598;
i__291434_291488 = G__291599;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq291414){
var G__291415 = cljs.core.first.call(null,seq291414);
var seq291414__$1 = cljs.core.next.call(null,seq291414);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__291415,seq291414__$1);
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
var args__36468__auto__ = [];
var len__36461__auto___291645 = arguments.length;
var i__36462__auto___291646 = (0);
while(true){
if((i__36462__auto___291646 < len__36461__auto___291645)){
args__36468__auto__.push((arguments[i__36462__auto___291646]));

var G__291647 = (i__36462__auto___291646 + (1));
i__36462__auto___291646 = G__291647;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__291605_291652 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_291653 = cljs.core.nth.call(null,vec__291605_291652,(0),null);
var selector_291654 = cljs.core.nth.call(null,vec__291605_291652,(1),null);
var seq__291606_291657 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__291613_291658 = null;
var count__291614_291659 = (0);
var i__291615_291660 = (0);
while(true){
if((i__291615_291660 < count__291614_291659)){
var vec__291622_291670 = cljs.core._nth.call(null,chunk__291613_291658,i__291615_291660);
var orig_type_291671 = cljs.core.nth.call(null,vec__291622_291670,(0),null);
var f_291672 = cljs.core.nth.call(null,vec__291622_291670,(1),null);
var seq__291616_291674 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_291671,cljs.core.PersistentArrayMap.fromArray([orig_type_291671,cljs.core.identity], true, false)));
var chunk__291618_291675 = null;
var count__291619_291676 = (0);
var i__291620_291677 = (0);
while(true){
if((i__291620_291677 < count__291619_291676)){
var vec__291623_291678 = cljs.core._nth.call(null,chunk__291618_291675,i__291620_291677);
var actual_type_291679 = cljs.core.nth.call(null,vec__291623_291678,(0),null);
var __291680 = cljs.core.nth.call(null,vec__291623_291678,(1),null);
var keys_291683 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_291654,actual_type_291679,f_291672], null);
var canonical_f_291684 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_291653),keys_291683);
dommy.core.update_event_listeners_BANG_.call(null,elem_291653,dommy.utils.dissoc_in,keys_291683);

if(cljs.core.truth_(elem_291653.removeEventListener)){
elem_291653.removeEventListener(cljs.core.name.call(null,actual_type_291679),canonical_f_291684);
} else {
elem_291653.detachEvent(cljs.core.name.call(null,actual_type_291679),canonical_f_291684);
}

var G__291685 = seq__291616_291674;
var G__291686 = chunk__291618_291675;
var G__291687 = count__291619_291676;
var G__291688 = (i__291620_291677 + (1));
seq__291616_291674 = G__291685;
chunk__291618_291675 = G__291686;
count__291619_291676 = G__291687;
i__291620_291677 = G__291688;
continue;
} else {
var temp__4657__auto___291689 = cljs.core.seq.call(null,seq__291616_291674);
if(temp__4657__auto___291689){
var seq__291616_291690__$1 = temp__4657__auto___291689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__291616_291690__$1)){
var c__36203__auto___291691 = cljs.core.chunk_first.call(null,seq__291616_291690__$1);
var G__291692 = cljs.core.chunk_rest.call(null,seq__291616_291690__$1);
var G__291693 = c__36203__auto___291691;
var G__291694 = cljs.core.count.call(null,c__36203__auto___291691);
var G__291695 = (0);
seq__291616_291674 = G__291692;
chunk__291618_291675 = G__291693;
count__291619_291676 = G__291694;
i__291620_291677 = G__291695;
continue;
} else {
var vec__291626_291696 = cljs.core.first.call(null,seq__291616_291690__$1);
var actual_type_291697 = cljs.core.nth.call(null,vec__291626_291696,(0),null);
var __291698 = cljs.core.nth.call(null,vec__291626_291696,(1),null);
var keys_291699 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_291654,actual_type_291697,f_291672], null);
var canonical_f_291700 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_291653),keys_291699);
dommy.core.update_event_listeners_BANG_.call(null,elem_291653,dommy.utils.dissoc_in,keys_291699);

if(cljs.core.truth_(elem_291653.removeEventListener)){
elem_291653.removeEventListener(cljs.core.name.call(null,actual_type_291697),canonical_f_291700);
} else {
elem_291653.detachEvent(cljs.core.name.call(null,actual_type_291697),canonical_f_291700);
}

var G__291701 = cljs.core.next.call(null,seq__291616_291690__$1);
var G__291702 = null;
var G__291703 = (0);
var G__291704 = (0);
seq__291616_291674 = G__291701;
chunk__291618_291675 = G__291702;
count__291619_291676 = G__291703;
i__291620_291677 = G__291704;
continue;
}
} else {
}
}
break;
}

var G__291705 = seq__291606_291657;
var G__291706 = chunk__291613_291658;
var G__291707 = count__291614_291659;
var G__291708 = (i__291615_291660 + (1));
seq__291606_291657 = G__291705;
chunk__291613_291658 = G__291706;
count__291614_291659 = G__291707;
i__291615_291660 = G__291708;
continue;
} else {
var temp__4657__auto___291709 = cljs.core.seq.call(null,seq__291606_291657);
if(temp__4657__auto___291709){
var seq__291606_291710__$1 = temp__4657__auto___291709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__291606_291710__$1)){
var c__36203__auto___291712 = cljs.core.chunk_first.call(null,seq__291606_291710__$1);
var G__291713 = cljs.core.chunk_rest.call(null,seq__291606_291710__$1);
var G__291714 = c__36203__auto___291712;
var G__291715 = cljs.core.count.call(null,c__36203__auto___291712);
var G__291716 = (0);
seq__291606_291657 = G__291713;
chunk__291613_291658 = G__291714;
count__291614_291659 = G__291715;
i__291615_291660 = G__291716;
continue;
} else {
var vec__291627_291717 = cljs.core.first.call(null,seq__291606_291710__$1);
var orig_type_291718 = cljs.core.nth.call(null,vec__291627_291717,(0),null);
var f_291719 = cljs.core.nth.call(null,vec__291627_291717,(1),null);
var seq__291607_291720 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_291718,cljs.core.PersistentArrayMap.fromArray([orig_type_291718,cljs.core.identity], true, false)));
var chunk__291609_291721 = null;
var count__291610_291722 = (0);
var i__291611_291723 = (0);
while(true){
if((i__291611_291723 < count__291610_291722)){
var vec__291631_291724 = cljs.core._nth.call(null,chunk__291609_291721,i__291611_291723);
var actual_type_291725 = cljs.core.nth.call(null,vec__291631_291724,(0),null);
var __291726 = cljs.core.nth.call(null,vec__291631_291724,(1),null);
var keys_291727 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_291654,actual_type_291725,f_291719], null);
var canonical_f_291728 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_291653),keys_291727);
dommy.core.update_event_listeners_BANG_.call(null,elem_291653,dommy.utils.dissoc_in,keys_291727);

if(cljs.core.truth_(elem_291653.removeEventListener)){
elem_291653.removeEventListener(cljs.core.name.call(null,actual_type_291725),canonical_f_291728);
} else {
elem_291653.detachEvent(cljs.core.name.call(null,actual_type_291725),canonical_f_291728);
}

var G__291737 = seq__291607_291720;
var G__291738 = chunk__291609_291721;
var G__291739 = count__291610_291722;
var G__291740 = (i__291611_291723 + (1));
seq__291607_291720 = G__291737;
chunk__291609_291721 = G__291738;
count__291610_291722 = G__291739;
i__291611_291723 = G__291740;
continue;
} else {
var temp__4657__auto___291746__$1 = cljs.core.seq.call(null,seq__291607_291720);
if(temp__4657__auto___291746__$1){
var seq__291607_291747__$1 = temp__4657__auto___291746__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__291607_291747__$1)){
var c__36203__auto___291750 = cljs.core.chunk_first.call(null,seq__291607_291747__$1);
var G__291751 = cljs.core.chunk_rest.call(null,seq__291607_291747__$1);
var G__291752 = c__36203__auto___291750;
var G__291753 = cljs.core.count.call(null,c__36203__auto___291750);
var G__291754 = (0);
seq__291607_291720 = G__291751;
chunk__291609_291721 = G__291752;
count__291610_291722 = G__291753;
i__291611_291723 = G__291754;
continue;
} else {
var vec__291634_291755 = cljs.core.first.call(null,seq__291607_291747__$1);
var actual_type_291756 = cljs.core.nth.call(null,vec__291634_291755,(0),null);
var __291757 = cljs.core.nth.call(null,vec__291634_291755,(1),null);
var keys_291758 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_291654,actual_type_291756,f_291719], null);
var canonical_f_291759 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_291653),keys_291758);
dommy.core.update_event_listeners_BANG_.call(null,elem_291653,dommy.utils.dissoc_in,keys_291758);

if(cljs.core.truth_(elem_291653.removeEventListener)){
elem_291653.removeEventListener(cljs.core.name.call(null,actual_type_291756),canonical_f_291759);
} else {
elem_291653.detachEvent(cljs.core.name.call(null,actual_type_291756),canonical_f_291759);
}

var G__291760 = cljs.core.next.call(null,seq__291607_291747__$1);
var G__291761 = null;
var G__291762 = (0);
var G__291763 = (0);
seq__291607_291720 = G__291760;
chunk__291609_291721 = G__291761;
count__291610_291722 = G__291762;
i__291611_291723 = G__291763;
continue;
}
} else {
}
}
break;
}

var G__291764 = cljs.core.next.call(null,seq__291606_291710__$1);
var G__291765 = null;
var G__291766 = (0);
var G__291767 = (0);
seq__291606_291657 = G__291764;
chunk__291613_291658 = G__291765;
count__291614_291659 = G__291766;
i__291615_291660 = G__291767;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq291603){
var G__291604 = cljs.core.first.call(null,seq291603);
var seq291603__$1 = cljs.core.next.call(null,seq291603);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__291604,seq291603__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__36468__auto__ = [];
var len__36461__auto___291784 = arguments.length;
var i__36462__auto___291785 = (0);
while(true){
if((i__36462__auto___291785 < len__36461__auto___291784)){
args__36468__auto__.push((arguments[i__36462__auto___291785]));

var G__291786 = (i__36462__auto___291785 + (1));
i__36462__auto___291785 = G__291786;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__291773_291787 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_291788 = cljs.core.nth.call(null,vec__291773_291787,(0),null);
var selector_291789 = cljs.core.nth.call(null,vec__291773_291787,(1),null);
var seq__291774_291790 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__291775_291791 = null;
var count__291776_291792 = (0);
var i__291777_291793 = (0);
while(true){
if((i__291777_291793 < count__291776_291792)){
var vec__291778_291794 = cljs.core._nth.call(null,chunk__291775_291791,i__291777_291793);
var type_291795 = cljs.core.nth.call(null,vec__291778_291794,(0),null);
var f_291796 = cljs.core.nth.call(null,vec__291778_291794,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_291795,((function (seq__291774_291790,chunk__291775_291791,count__291776_291792,i__291777_291793,vec__291778_291794,type_291795,f_291796,vec__291773_291787,elem_291788,selector_291789){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_291795,dommy$core$this_fn);

return f_291796.call(null,e);
});})(seq__291774_291790,chunk__291775_291791,count__291776_291792,i__291777_291793,vec__291778_291794,type_291795,f_291796,vec__291773_291787,elem_291788,selector_291789))
);

var G__291805 = seq__291774_291790;
var G__291806 = chunk__291775_291791;
var G__291807 = count__291776_291792;
var G__291808 = (i__291777_291793 + (1));
seq__291774_291790 = G__291805;
chunk__291775_291791 = G__291806;
count__291776_291792 = G__291807;
i__291777_291793 = G__291808;
continue;
} else {
var temp__4657__auto___291812 = cljs.core.seq.call(null,seq__291774_291790);
if(temp__4657__auto___291812){
var seq__291774_291814__$1 = temp__4657__auto___291812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__291774_291814__$1)){
var c__36203__auto___291815 = cljs.core.chunk_first.call(null,seq__291774_291814__$1);
var G__291819 = cljs.core.chunk_rest.call(null,seq__291774_291814__$1);
var G__291820 = c__36203__auto___291815;
var G__291821 = cljs.core.count.call(null,c__36203__auto___291815);
var G__291822 = (0);
seq__291774_291790 = G__291819;
chunk__291775_291791 = G__291820;
count__291776_291792 = G__291821;
i__291777_291793 = G__291822;
continue;
} else {
var vec__291783_291823 = cljs.core.first.call(null,seq__291774_291814__$1);
var type_291824 = cljs.core.nth.call(null,vec__291783_291823,(0),null);
var f_291825 = cljs.core.nth.call(null,vec__291783_291823,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_291824,((function (seq__291774_291790,chunk__291775_291791,count__291776_291792,i__291777_291793,vec__291783_291823,type_291824,f_291825,seq__291774_291814__$1,temp__4657__auto___291812,vec__291773_291787,elem_291788,selector_291789){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_291824,dommy$core$this_fn);

return f_291825.call(null,e);
});})(seq__291774_291790,chunk__291775_291791,count__291776_291792,i__291777_291793,vec__291783_291823,type_291824,f_291825,seq__291774_291814__$1,temp__4657__auto___291812,vec__291773_291787,elem_291788,selector_291789))
);

var G__291826 = cljs.core.next.call(null,seq__291774_291814__$1);
var G__291827 = null;
var G__291828 = (0);
var G__291829 = (0);
seq__291774_291790 = G__291826;
chunk__291775_291791 = G__291827;
count__291776_291792 = G__291828;
i__291777_291793 = G__291829;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq291770){
var G__291771 = cljs.core.first.call(null,seq291770);
var seq291770__$1 = cljs.core.next.call(null,seq291770);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__291771,seq291770__$1);
});
