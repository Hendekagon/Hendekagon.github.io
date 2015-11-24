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
var or__24161__auto__ = elem.textContent;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
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
var args1889580 = [];
var len__25219__auto___1889583 = arguments.length;
var i__25220__auto___1889584 = (0);
while(true){
if((i__25220__auto___1889584 < len__25219__auto___1889583)){
args1889580.push((arguments[i__25220__auto___1889584]));

var G__1889585 = (i__25220__auto___1889584 + (1));
i__25220__auto___1889584 = G__1889585;
continue;
} else {
}
break;
}

var G__1889582 = args1889580.length;
switch (G__1889582) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1889580.length)].join('')));

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
var args1889587 = [];
var len__25219__auto___1889590 = arguments.length;
var i__25220__auto___1889591 = (0);
while(true){
if((i__25220__auto___1889591 < len__25219__auto___1889590)){
args1889587.push((arguments[i__25220__auto___1889591]));

var G__1889592 = (i__25220__auto___1889591 + (1));
i__25220__auto___1889591 = G__1889592;
continue;
} else {
}
break;
}

var G__1889589 = args1889587.length;
switch (G__1889589) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1889587.length)].join('')));

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
var args1889595 = [];
var len__25219__auto___1889598 = arguments.length;
var i__25220__auto___1889599 = (0);
while(true){
if((i__25220__auto___1889599 < len__25219__auto___1889598)){
args1889595.push((arguments[i__25220__auto___1889599]));

var G__1889600 = (i__25220__auto___1889599 + (1));
i__25220__auto___1889599 = G__1889600;
continue;
} else {
}
break;
}

var G__1889597 = args1889595.length;
switch (G__1889597) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1889595.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__1889594_SHARP_){
return !((p1__1889594_SHARP_ === base));
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
var args__25226__auto__ = [];
var len__25219__auto___1889610 = arguments.length;
var i__25220__auto___1889611 = (0);
while(true){
if((i__25220__auto___1889611 < len__25219__auto___1889610)){
args__25226__auto__.push((arguments[i__25220__auto___1889611]));

var G__1889612 = (i__25220__auto___1889611 + (1));
i__25220__auto___1889611 = G__1889612;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((1) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25227__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__1889604_1889613 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__1889605_1889614 = null;
var count__1889606_1889615 = (0);
var i__1889607_1889616 = (0);
while(true){
if((i__1889607_1889616 < count__1889606_1889615)){
var vec__1889608_1889617 = cljs.core._nth.call(null,chunk__1889605_1889614,i__1889607_1889616);
var k_1889618 = cljs.core.nth.call(null,vec__1889608_1889617,(0),null);
var v_1889619 = cljs.core.nth.call(null,vec__1889608_1889617,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_1889618),v_1889619);

var G__1889620 = seq__1889604_1889613;
var G__1889621 = chunk__1889605_1889614;
var G__1889622 = count__1889606_1889615;
var G__1889623 = (i__1889607_1889616 + (1));
seq__1889604_1889613 = G__1889620;
chunk__1889605_1889614 = G__1889621;
count__1889606_1889615 = G__1889622;
i__1889607_1889616 = G__1889623;
continue;
} else {
var temp__4425__auto___1889624 = cljs.core.seq.call(null,seq__1889604_1889613);
if(temp__4425__auto___1889624){
var seq__1889604_1889625__$1 = temp__4425__auto___1889624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1889604_1889625__$1)){
var c__24964__auto___1889626 = cljs.core.chunk_first.call(null,seq__1889604_1889625__$1);
var G__1889627 = cljs.core.chunk_rest.call(null,seq__1889604_1889625__$1);
var G__1889628 = c__24964__auto___1889626;
var G__1889629 = cljs.core.count.call(null,c__24964__auto___1889626);
var G__1889630 = (0);
seq__1889604_1889613 = G__1889627;
chunk__1889605_1889614 = G__1889628;
count__1889606_1889615 = G__1889629;
i__1889607_1889616 = G__1889630;
continue;
} else {
var vec__1889609_1889631 = cljs.core.first.call(null,seq__1889604_1889625__$1);
var k_1889632 = cljs.core.nth.call(null,vec__1889609_1889631,(0),null);
var v_1889633 = cljs.core.nth.call(null,vec__1889609_1889631,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_1889632),v_1889633);

var G__1889634 = cljs.core.next.call(null,seq__1889604_1889625__$1);
var G__1889635 = null;
var G__1889636 = (0);
var G__1889637 = (0);
seq__1889604_1889613 = G__1889634;
chunk__1889605_1889614 = G__1889635;
count__1889606_1889615 = G__1889636;
i__1889607_1889616 = G__1889637;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq1889602){
var G__1889603 = cljs.core.first.call(null,seq1889602);
var seq1889602__$1 = cljs.core.next.call(null,seq1889602);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1889603,seq1889602__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1889644 = arguments.length;
var i__25220__auto___1889645 = (0);
while(true){
if((i__25220__auto___1889645 < len__25219__auto___1889644)){
args__25226__auto__.push((arguments[i__25220__auto___1889645]));

var G__1889646 = (i__25220__auto___1889645 + (1));
i__25220__auto___1889645 = G__1889646;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((1) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25227__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__1889640_1889647 = cljs.core.seq.call(null,keywords);
var chunk__1889641_1889648 = null;
var count__1889642_1889649 = (0);
var i__1889643_1889650 = (0);
while(true){
if((i__1889643_1889650 < count__1889642_1889649)){
var kw_1889651 = cljs.core._nth.call(null,chunk__1889641_1889648,i__1889643_1889650);
style.removeProperty(dommy.utils.as_str.call(null,kw_1889651));

var G__1889652 = seq__1889640_1889647;
var G__1889653 = chunk__1889641_1889648;
var G__1889654 = count__1889642_1889649;
var G__1889655 = (i__1889643_1889650 + (1));
seq__1889640_1889647 = G__1889652;
chunk__1889641_1889648 = G__1889653;
count__1889642_1889649 = G__1889654;
i__1889643_1889650 = G__1889655;
continue;
} else {
var temp__4425__auto___1889656 = cljs.core.seq.call(null,seq__1889640_1889647);
if(temp__4425__auto___1889656){
var seq__1889640_1889657__$1 = temp__4425__auto___1889656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1889640_1889657__$1)){
var c__24964__auto___1889658 = cljs.core.chunk_first.call(null,seq__1889640_1889657__$1);
var G__1889659 = cljs.core.chunk_rest.call(null,seq__1889640_1889657__$1);
var G__1889660 = c__24964__auto___1889658;
var G__1889661 = cljs.core.count.call(null,c__24964__auto___1889658);
var G__1889662 = (0);
seq__1889640_1889647 = G__1889659;
chunk__1889641_1889648 = G__1889660;
count__1889642_1889649 = G__1889661;
i__1889643_1889650 = G__1889662;
continue;
} else {
var kw_1889663 = cljs.core.first.call(null,seq__1889640_1889657__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_1889663));

var G__1889664 = cljs.core.next.call(null,seq__1889640_1889657__$1);
var G__1889665 = null;
var G__1889666 = (0);
var G__1889667 = (0);
seq__1889640_1889647 = G__1889664;
chunk__1889641_1889648 = G__1889665;
count__1889642_1889649 = G__1889666;
i__1889643_1889650 = G__1889667;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq1889638){
var G__1889639 = cljs.core.first.call(null,seq1889638);
var seq1889638__$1 = cljs.core.next.call(null,seq1889638);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1889639,seq1889638__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1889676 = arguments.length;
var i__25220__auto___1889677 = (0);
while(true){
if((i__25220__auto___1889677 < len__25219__auto___1889676)){
args__25226__auto__.push((arguments[i__25220__auto___1889677]));

var G__1889678 = (i__25220__auto___1889677 + (1));
i__25220__auto___1889677 = G__1889678;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((1) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25227__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__1889670_1889679 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__1889671_1889680 = null;
var count__1889672_1889681 = (0);
var i__1889673_1889682 = (0);
while(true){
if((i__1889673_1889682 < count__1889672_1889681)){
var vec__1889674_1889683 = cljs.core._nth.call(null,chunk__1889671_1889680,i__1889673_1889682);
var k_1889684 = cljs.core.nth.call(null,vec__1889674_1889683,(0),null);
var v_1889685 = cljs.core.nth.call(null,vec__1889674_1889683,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_1889684,[cljs.core.str(v_1889685),cljs.core.str("px")].join(''));

var G__1889686 = seq__1889670_1889679;
var G__1889687 = chunk__1889671_1889680;
var G__1889688 = count__1889672_1889681;
var G__1889689 = (i__1889673_1889682 + (1));
seq__1889670_1889679 = G__1889686;
chunk__1889671_1889680 = G__1889687;
count__1889672_1889681 = G__1889688;
i__1889673_1889682 = G__1889689;
continue;
} else {
var temp__4425__auto___1889690 = cljs.core.seq.call(null,seq__1889670_1889679);
if(temp__4425__auto___1889690){
var seq__1889670_1889691__$1 = temp__4425__auto___1889690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1889670_1889691__$1)){
var c__24964__auto___1889692 = cljs.core.chunk_first.call(null,seq__1889670_1889691__$1);
var G__1889693 = cljs.core.chunk_rest.call(null,seq__1889670_1889691__$1);
var G__1889694 = c__24964__auto___1889692;
var G__1889695 = cljs.core.count.call(null,c__24964__auto___1889692);
var G__1889696 = (0);
seq__1889670_1889679 = G__1889693;
chunk__1889671_1889680 = G__1889694;
count__1889672_1889681 = G__1889695;
i__1889673_1889682 = G__1889696;
continue;
} else {
var vec__1889675_1889697 = cljs.core.first.call(null,seq__1889670_1889691__$1);
var k_1889698 = cljs.core.nth.call(null,vec__1889675_1889697,(0),null);
var v_1889699 = cljs.core.nth.call(null,vec__1889675_1889697,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_1889698,[cljs.core.str(v_1889699),cljs.core.str("px")].join(''));

var G__1889700 = cljs.core.next.call(null,seq__1889670_1889691__$1);
var G__1889701 = null;
var G__1889702 = (0);
var G__1889703 = (0);
seq__1889670_1889679 = G__1889700;
chunk__1889671_1889680 = G__1889701;
count__1889672_1889681 = G__1889702;
i__1889673_1889682 = G__1889703;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq1889668){
var G__1889669 = cljs.core.first.call(null,seq1889668);
var seq1889668__$1 = cljs.core.next.call(null,seq1889668);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1889669,seq1889668__$1);
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
var args1889704 = [];
var len__25219__auto___1889719 = arguments.length;
var i__25220__auto___1889720 = (0);
while(true){
if((i__25220__auto___1889720 < len__25219__auto___1889719)){
args1889704.push((arguments[i__25220__auto___1889720]));

var G__1889721 = (i__25220__auto___1889720 + (1));
i__25220__auto___1889720 = G__1889721;
continue;
} else {
}
break;
}

var G__1889710 = args1889704.length;
switch (G__1889710) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25238__auto__ = (new cljs.core.IndexedSeq(args1889704.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25238__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__1889711 = elem;
(G__1889711[k__$1] = v);

return G__1889711;
} else {
var G__1889712 = elem;
G__1889712.setAttribute(k__$1,v);

return G__1889712;
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

var seq__1889713_1889723 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__1889714_1889724 = null;
var count__1889715_1889725 = (0);
var i__1889716_1889726 = (0);
while(true){
if((i__1889716_1889726 < count__1889715_1889725)){
var vec__1889717_1889727 = cljs.core._nth.call(null,chunk__1889714_1889724,i__1889716_1889726);
var k_1889728__$1 = cljs.core.nth.call(null,vec__1889717_1889727,(0),null);
var v_1889729__$1 = cljs.core.nth.call(null,vec__1889717_1889727,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_1889728__$1,v_1889729__$1);

var G__1889730 = seq__1889713_1889723;
var G__1889731 = chunk__1889714_1889724;
var G__1889732 = count__1889715_1889725;
var G__1889733 = (i__1889716_1889726 + (1));
seq__1889713_1889723 = G__1889730;
chunk__1889714_1889724 = G__1889731;
count__1889715_1889725 = G__1889732;
i__1889716_1889726 = G__1889733;
continue;
} else {
var temp__4425__auto___1889734 = cljs.core.seq.call(null,seq__1889713_1889723);
if(temp__4425__auto___1889734){
var seq__1889713_1889735__$1 = temp__4425__auto___1889734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1889713_1889735__$1)){
var c__24964__auto___1889736 = cljs.core.chunk_first.call(null,seq__1889713_1889735__$1);
var G__1889737 = cljs.core.chunk_rest.call(null,seq__1889713_1889735__$1);
var G__1889738 = c__24964__auto___1889736;
var G__1889739 = cljs.core.count.call(null,c__24964__auto___1889736);
var G__1889740 = (0);
seq__1889713_1889723 = G__1889737;
chunk__1889714_1889724 = G__1889738;
count__1889715_1889725 = G__1889739;
i__1889716_1889726 = G__1889740;
continue;
} else {
var vec__1889718_1889741 = cljs.core.first.call(null,seq__1889713_1889735__$1);
var k_1889742__$1 = cljs.core.nth.call(null,vec__1889718_1889741,(0),null);
var v_1889743__$1 = cljs.core.nth.call(null,vec__1889718_1889741,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_1889742__$1,v_1889743__$1);

var G__1889744 = cljs.core.next.call(null,seq__1889713_1889735__$1);
var G__1889745 = null;
var G__1889746 = (0);
var G__1889747 = (0);
seq__1889713_1889723 = G__1889744;
chunk__1889714_1889724 = G__1889745;
count__1889715_1889725 = G__1889746;
i__1889716_1889726 = G__1889747;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq1889705){
var G__1889706 = cljs.core.first.call(null,seq1889705);
var seq1889705__$1 = cljs.core.next.call(null,seq1889705);
var G__1889707 = cljs.core.first.call(null,seq1889705__$1);
var seq1889705__$2 = cljs.core.next.call(null,seq1889705__$1);
var G__1889708 = cljs.core.first.call(null,seq1889705__$2);
var seq1889705__$3 = cljs.core.next.call(null,seq1889705__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1889706,G__1889707,G__1889708,seq1889705__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args1889748 = [];
var len__25219__auto___1889758 = arguments.length;
var i__25220__auto___1889759 = (0);
while(true){
if((i__25220__auto___1889759 < len__25219__auto___1889758)){
args1889748.push((arguments[i__25220__auto___1889759]));

var G__1889760 = (i__25220__auto___1889759 + (1));
i__25220__auto___1889759 = G__1889760;
continue;
} else {
}
break;
}

var G__1889753 = args1889748.length;
switch (G__1889753) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25238__auto__ = (new cljs.core.IndexedSeq(args1889748.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25238__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_1889762__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_1889762__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_1889762__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__1889754_1889763 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__1889755_1889764 = null;
var count__1889756_1889765 = (0);
var i__1889757_1889766 = (0);
while(true){
if((i__1889757_1889766 < count__1889756_1889765)){
var k_1889767__$1 = cljs.core._nth.call(null,chunk__1889755_1889764,i__1889757_1889766);
dommy.core.remove_attr_BANG_.call(null,elem,k_1889767__$1);

var G__1889768 = seq__1889754_1889763;
var G__1889769 = chunk__1889755_1889764;
var G__1889770 = count__1889756_1889765;
var G__1889771 = (i__1889757_1889766 + (1));
seq__1889754_1889763 = G__1889768;
chunk__1889755_1889764 = G__1889769;
count__1889756_1889765 = G__1889770;
i__1889757_1889766 = G__1889771;
continue;
} else {
var temp__4425__auto___1889772 = cljs.core.seq.call(null,seq__1889754_1889763);
if(temp__4425__auto___1889772){
var seq__1889754_1889773__$1 = temp__4425__auto___1889772;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1889754_1889773__$1)){
var c__24964__auto___1889774 = cljs.core.chunk_first.call(null,seq__1889754_1889773__$1);
var G__1889775 = cljs.core.chunk_rest.call(null,seq__1889754_1889773__$1);
var G__1889776 = c__24964__auto___1889774;
var G__1889777 = cljs.core.count.call(null,c__24964__auto___1889774);
var G__1889778 = (0);
seq__1889754_1889763 = G__1889775;
chunk__1889755_1889764 = G__1889776;
count__1889756_1889765 = G__1889777;
i__1889757_1889766 = G__1889778;
continue;
} else {
var k_1889779__$1 = cljs.core.first.call(null,seq__1889754_1889773__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_1889779__$1);

var G__1889780 = cljs.core.next.call(null,seq__1889754_1889773__$1);
var G__1889781 = null;
var G__1889782 = (0);
var G__1889783 = (0);
seq__1889754_1889763 = G__1889780;
chunk__1889755_1889764 = G__1889781;
count__1889756_1889765 = G__1889782;
i__1889757_1889766 = G__1889783;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq1889749){
var G__1889750 = cljs.core.first.call(null,seq1889749);
var seq1889749__$1 = cljs.core.next.call(null,seq1889749);
var G__1889751 = cljs.core.first.call(null,seq1889749__$1);
var seq1889749__$2 = cljs.core.next.call(null,seq1889749__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1889750,G__1889751,seq1889749__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args1889784 = [];
var len__25219__auto___1889787 = arguments.length;
var i__25220__auto___1889788 = (0);
while(true){
if((i__25220__auto___1889788 < len__25219__auto___1889787)){
args1889784.push((arguments[i__25220__auto___1889788]));

var G__1889789 = (i__25220__auto___1889788 + (1));
i__25220__auto___1889788 = G__1889789;
continue;
} else {
}
break;
}

var G__1889786 = args1889784.length;
switch (G__1889786) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1889784.length)].join('')));

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
var args1889791 = [];
var len__25219__auto___1889809 = arguments.length;
var i__25220__auto___1889810 = (0);
while(true){
if((i__25220__auto___1889810 < len__25219__auto___1889809)){
args1889791.push((arguments[i__25220__auto___1889810]));

var G__1889811 = (i__25220__auto___1889810 + (1));
i__25220__auto___1889810 = G__1889811;
continue;
} else {
}
break;
}

var G__1889796 = args1889791.length;
switch (G__1889796) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25238__auto__ = (new cljs.core.IndexedSeq(args1889791.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25238__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4423__auto___1889813 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___1889813)){
var class_list_1889814 = temp__4423__auto___1889813;
var seq__1889797_1889815 = cljs.core.seq.call(null,classes__$1);
var chunk__1889798_1889816 = null;
var count__1889799_1889817 = (0);
var i__1889800_1889818 = (0);
while(true){
if((i__1889800_1889818 < count__1889799_1889817)){
var c_1889819 = cljs.core._nth.call(null,chunk__1889798_1889816,i__1889800_1889818);
class_list_1889814.add(c_1889819);

var G__1889820 = seq__1889797_1889815;
var G__1889821 = chunk__1889798_1889816;
var G__1889822 = count__1889799_1889817;
var G__1889823 = (i__1889800_1889818 + (1));
seq__1889797_1889815 = G__1889820;
chunk__1889798_1889816 = G__1889821;
count__1889799_1889817 = G__1889822;
i__1889800_1889818 = G__1889823;
continue;
} else {
var temp__4425__auto___1889824 = cljs.core.seq.call(null,seq__1889797_1889815);
if(temp__4425__auto___1889824){
var seq__1889797_1889825__$1 = temp__4425__auto___1889824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1889797_1889825__$1)){
var c__24964__auto___1889826 = cljs.core.chunk_first.call(null,seq__1889797_1889825__$1);
var G__1889827 = cljs.core.chunk_rest.call(null,seq__1889797_1889825__$1);
var G__1889828 = c__24964__auto___1889826;
var G__1889829 = cljs.core.count.call(null,c__24964__auto___1889826);
var G__1889830 = (0);
seq__1889797_1889815 = G__1889827;
chunk__1889798_1889816 = G__1889828;
count__1889799_1889817 = G__1889829;
i__1889800_1889818 = G__1889830;
continue;
} else {
var c_1889831 = cljs.core.first.call(null,seq__1889797_1889825__$1);
class_list_1889814.add(c_1889831);

var G__1889832 = cljs.core.next.call(null,seq__1889797_1889825__$1);
var G__1889833 = null;
var G__1889834 = (0);
var G__1889835 = (0);
seq__1889797_1889815 = G__1889832;
chunk__1889798_1889816 = G__1889833;
count__1889799_1889817 = G__1889834;
i__1889800_1889818 = G__1889835;
continue;
}
} else {
}
}
break;
}
} else {
var seq__1889801_1889836 = cljs.core.seq.call(null,classes__$1);
var chunk__1889802_1889837 = null;
var count__1889803_1889838 = (0);
var i__1889804_1889839 = (0);
while(true){
if((i__1889804_1889839 < count__1889803_1889838)){
var c_1889840 = cljs.core._nth.call(null,chunk__1889802_1889837,i__1889804_1889839);
var class_name_1889841 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_1889841,c_1889840))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_1889841 === ""))?c_1889840:[cljs.core.str(class_name_1889841),cljs.core.str(" "),cljs.core.str(c_1889840)].join('')));
}

var G__1889842 = seq__1889801_1889836;
var G__1889843 = chunk__1889802_1889837;
var G__1889844 = count__1889803_1889838;
var G__1889845 = (i__1889804_1889839 + (1));
seq__1889801_1889836 = G__1889842;
chunk__1889802_1889837 = G__1889843;
count__1889803_1889838 = G__1889844;
i__1889804_1889839 = G__1889845;
continue;
} else {
var temp__4425__auto___1889846 = cljs.core.seq.call(null,seq__1889801_1889836);
if(temp__4425__auto___1889846){
var seq__1889801_1889847__$1 = temp__4425__auto___1889846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1889801_1889847__$1)){
var c__24964__auto___1889848 = cljs.core.chunk_first.call(null,seq__1889801_1889847__$1);
var G__1889849 = cljs.core.chunk_rest.call(null,seq__1889801_1889847__$1);
var G__1889850 = c__24964__auto___1889848;
var G__1889851 = cljs.core.count.call(null,c__24964__auto___1889848);
var G__1889852 = (0);
seq__1889801_1889836 = G__1889849;
chunk__1889802_1889837 = G__1889850;
count__1889803_1889838 = G__1889851;
i__1889804_1889839 = G__1889852;
continue;
} else {
var c_1889853 = cljs.core.first.call(null,seq__1889801_1889847__$1);
var class_name_1889854 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_1889854,c_1889853))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_1889854 === ""))?c_1889853:[cljs.core.str(class_name_1889854),cljs.core.str(" "),cljs.core.str(c_1889853)].join('')));
}

var G__1889855 = cljs.core.next.call(null,seq__1889801_1889847__$1);
var G__1889856 = null;
var G__1889857 = (0);
var G__1889858 = (0);
seq__1889801_1889836 = G__1889855;
chunk__1889802_1889837 = G__1889856;
count__1889803_1889838 = G__1889857;
i__1889804_1889839 = G__1889858;
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
var seq__1889805_1889859 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__1889806_1889860 = null;
var count__1889807_1889861 = (0);
var i__1889808_1889862 = (0);
while(true){
if((i__1889808_1889862 < count__1889807_1889861)){
var c_1889863 = cljs.core._nth.call(null,chunk__1889806_1889860,i__1889808_1889862);
dommy.core.add_class_BANG_.call(null,elem,c_1889863);

var G__1889864 = seq__1889805_1889859;
var G__1889865 = chunk__1889806_1889860;
var G__1889866 = count__1889807_1889861;
var G__1889867 = (i__1889808_1889862 + (1));
seq__1889805_1889859 = G__1889864;
chunk__1889806_1889860 = G__1889865;
count__1889807_1889861 = G__1889866;
i__1889808_1889862 = G__1889867;
continue;
} else {
var temp__4425__auto___1889868 = cljs.core.seq.call(null,seq__1889805_1889859);
if(temp__4425__auto___1889868){
var seq__1889805_1889869__$1 = temp__4425__auto___1889868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1889805_1889869__$1)){
var c__24964__auto___1889870 = cljs.core.chunk_first.call(null,seq__1889805_1889869__$1);
var G__1889871 = cljs.core.chunk_rest.call(null,seq__1889805_1889869__$1);
var G__1889872 = c__24964__auto___1889870;
var G__1889873 = cljs.core.count.call(null,c__24964__auto___1889870);
var G__1889874 = (0);
seq__1889805_1889859 = G__1889871;
chunk__1889806_1889860 = G__1889872;
count__1889807_1889861 = G__1889873;
i__1889808_1889862 = G__1889874;
continue;
} else {
var c_1889875 = cljs.core.first.call(null,seq__1889805_1889869__$1);
dommy.core.add_class_BANG_.call(null,elem,c_1889875);

var G__1889876 = cljs.core.next.call(null,seq__1889805_1889869__$1);
var G__1889877 = null;
var G__1889878 = (0);
var G__1889879 = (0);
seq__1889805_1889859 = G__1889876;
chunk__1889806_1889860 = G__1889877;
count__1889807_1889861 = G__1889878;
i__1889808_1889862 = G__1889879;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq1889792){
var G__1889793 = cljs.core.first.call(null,seq1889792);
var seq1889792__$1 = cljs.core.next.call(null,seq1889792);
var G__1889794 = cljs.core.first.call(null,seq1889792__$1);
var seq1889792__$2 = cljs.core.next.call(null,seq1889792__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1889793,G__1889794,seq1889792__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args1889880 = [];
var len__25219__auto___1889890 = arguments.length;
var i__25220__auto___1889891 = (0);
while(true){
if((i__25220__auto___1889891 < len__25219__auto___1889890)){
args1889880.push((arguments[i__25220__auto___1889891]));

var G__1889892 = (i__25220__auto___1889891 + (1));
i__25220__auto___1889891 = G__1889892;
continue;
} else {
}
break;
}

var G__1889885 = args1889880.length;
switch (G__1889885) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25238__auto__ = (new cljs.core.IndexedSeq(args1889880.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25238__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___1889894 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___1889894)){
var class_list_1889895 = temp__4423__auto___1889894;
class_list_1889895.remove(c__$1);
} else {
var class_name_1889896 = dommy.core.class$.call(null,elem);
var new_class_name_1889897 = dommy.utils.remove_class_str.call(null,class_name_1889896,c__$1);
if((class_name_1889896 === new_class_name_1889897)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_1889897);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__1889886 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__1889887 = null;
var count__1889888 = (0);
var i__1889889 = (0);
while(true){
if((i__1889889 < count__1889888)){
var c = cljs.core._nth.call(null,chunk__1889887,i__1889889);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__1889898 = seq__1889886;
var G__1889899 = chunk__1889887;
var G__1889900 = count__1889888;
var G__1889901 = (i__1889889 + (1));
seq__1889886 = G__1889898;
chunk__1889887 = G__1889899;
count__1889888 = G__1889900;
i__1889889 = G__1889901;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__1889886);
if(temp__4425__auto__){
var seq__1889886__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1889886__$1)){
var c__24964__auto__ = cljs.core.chunk_first.call(null,seq__1889886__$1);
var G__1889902 = cljs.core.chunk_rest.call(null,seq__1889886__$1);
var G__1889903 = c__24964__auto__;
var G__1889904 = cljs.core.count.call(null,c__24964__auto__);
var G__1889905 = (0);
seq__1889886 = G__1889902;
chunk__1889887 = G__1889903;
count__1889888 = G__1889904;
i__1889889 = G__1889905;
continue;
} else {
var c = cljs.core.first.call(null,seq__1889886__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__1889906 = cljs.core.next.call(null,seq__1889886__$1);
var G__1889907 = null;
var G__1889908 = (0);
var G__1889909 = (0);
seq__1889886 = G__1889906;
chunk__1889887 = G__1889907;
count__1889888 = G__1889908;
i__1889889 = G__1889909;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq1889881){
var G__1889882 = cljs.core.first.call(null,seq1889881);
var seq1889881__$1 = cljs.core.next.call(null,seq1889881);
var G__1889883 = cljs.core.first.call(null,seq1889881__$1);
var seq1889881__$2 = cljs.core.next.call(null,seq1889881__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1889882,G__1889883,seq1889881__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args1889910 = [];
var len__25219__auto___1889913 = arguments.length;
var i__25220__auto___1889914 = (0);
while(true){
if((i__25220__auto___1889914 < len__25219__auto___1889913)){
args1889910.push((arguments[i__25220__auto___1889914]));

var G__1889915 = (i__25220__auto___1889914 + (1));
i__25220__auto___1889914 = G__1889915;
continue;
} else {
}
break;
}

var G__1889912 = args1889910.length;
switch (G__1889912) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1889910.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___1889917 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___1889917)){
var class_list_1889918 = temp__4423__auto___1889917;
class_list_1889918.toggle(c__$1);
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
var args1889919 = [];
var len__25219__auto___1889922 = arguments.length;
var i__25220__auto___1889923 = (0);
while(true){
if((i__25220__auto___1889923 < len__25219__auto___1889922)){
args1889919.push((arguments[i__25220__auto___1889923]));

var G__1889924 = (i__25220__auto___1889923 + (1));
i__25220__auto___1889923 = G__1889924;
continue;
} else {
}
break;
}

var G__1889921 = args1889919.length;
switch (G__1889921) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1889919.length)].join('')));

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
var args1889926 = [];
var len__25219__auto___1889929 = arguments.length;
var i__25220__auto___1889930 = (0);
while(true){
if((i__25220__auto___1889930 < len__25219__auto___1889929)){
args1889926.push((arguments[i__25220__auto___1889930]));

var G__1889931 = (i__25220__auto___1889930 + (1));
i__25220__auto___1889930 = G__1889931;
continue;
} else {
}
break;
}

var G__1889928 = args1889926.length;
switch (G__1889928) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1889926.length)].join('')));

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
var args1889933 = [];
var len__25219__auto___1889944 = arguments.length;
var i__25220__auto___1889945 = (0);
while(true){
if((i__25220__auto___1889945 < len__25219__auto___1889944)){
args1889933.push((arguments[i__25220__auto___1889945]));

var G__1889946 = (i__25220__auto___1889945 + (1));
i__25220__auto___1889945 = G__1889946;
continue;
} else {
}
break;
}

var G__1889938 = args1889933.length;
switch (G__1889938) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25238__auto__ = (new cljs.core.IndexedSeq(args1889933.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25238__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__1889939 = parent;
G__1889939.appendChild(child);

return G__1889939;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__1889940_1889948 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__1889941_1889949 = null;
var count__1889942_1889950 = (0);
var i__1889943_1889951 = (0);
while(true){
if((i__1889943_1889951 < count__1889942_1889950)){
var c_1889952 = cljs.core._nth.call(null,chunk__1889941_1889949,i__1889943_1889951);
dommy.core.append_BANG_.call(null,parent,c_1889952);

var G__1889953 = seq__1889940_1889948;
var G__1889954 = chunk__1889941_1889949;
var G__1889955 = count__1889942_1889950;
var G__1889956 = (i__1889943_1889951 + (1));
seq__1889940_1889948 = G__1889953;
chunk__1889941_1889949 = G__1889954;
count__1889942_1889950 = G__1889955;
i__1889943_1889951 = G__1889956;
continue;
} else {
var temp__4425__auto___1889957 = cljs.core.seq.call(null,seq__1889940_1889948);
if(temp__4425__auto___1889957){
var seq__1889940_1889958__$1 = temp__4425__auto___1889957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1889940_1889958__$1)){
var c__24964__auto___1889959 = cljs.core.chunk_first.call(null,seq__1889940_1889958__$1);
var G__1889960 = cljs.core.chunk_rest.call(null,seq__1889940_1889958__$1);
var G__1889961 = c__24964__auto___1889959;
var G__1889962 = cljs.core.count.call(null,c__24964__auto___1889959);
var G__1889963 = (0);
seq__1889940_1889948 = G__1889960;
chunk__1889941_1889949 = G__1889961;
count__1889942_1889950 = G__1889962;
i__1889943_1889951 = G__1889963;
continue;
} else {
var c_1889964 = cljs.core.first.call(null,seq__1889940_1889958__$1);
dommy.core.append_BANG_.call(null,parent,c_1889964);

var G__1889965 = cljs.core.next.call(null,seq__1889940_1889958__$1);
var G__1889966 = null;
var G__1889967 = (0);
var G__1889968 = (0);
seq__1889940_1889948 = G__1889965;
chunk__1889941_1889949 = G__1889966;
count__1889942_1889950 = G__1889967;
i__1889943_1889951 = G__1889968;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq1889934){
var G__1889935 = cljs.core.first.call(null,seq1889934);
var seq1889934__$1 = cljs.core.next.call(null,seq1889934);
var G__1889936 = cljs.core.first.call(null,seq1889934__$1);
var seq1889934__$2 = cljs.core.next.call(null,seq1889934__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1889935,G__1889936,seq1889934__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args1889969 = [];
var len__25219__auto___1889980 = arguments.length;
var i__25220__auto___1889981 = (0);
while(true){
if((i__25220__auto___1889981 < len__25219__auto___1889980)){
args1889969.push((arguments[i__25220__auto___1889981]));

var G__1889982 = (i__25220__auto___1889981 + (1));
i__25220__auto___1889981 = G__1889982;
continue;
} else {
}
break;
}

var G__1889974 = args1889969.length;
switch (G__1889974) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25238__auto__ = (new cljs.core.IndexedSeq(args1889969.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25238__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__1889975 = parent;
G__1889975.insertBefore(child,parent.firstChild);

return G__1889975;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__1889976_1889984 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__1889977_1889985 = null;
var count__1889978_1889986 = (0);
var i__1889979_1889987 = (0);
while(true){
if((i__1889979_1889987 < count__1889978_1889986)){
var c_1889988 = cljs.core._nth.call(null,chunk__1889977_1889985,i__1889979_1889987);
dommy.core.prepend_BANG_.call(null,parent,c_1889988);

var G__1889989 = seq__1889976_1889984;
var G__1889990 = chunk__1889977_1889985;
var G__1889991 = count__1889978_1889986;
var G__1889992 = (i__1889979_1889987 + (1));
seq__1889976_1889984 = G__1889989;
chunk__1889977_1889985 = G__1889990;
count__1889978_1889986 = G__1889991;
i__1889979_1889987 = G__1889992;
continue;
} else {
var temp__4425__auto___1889993 = cljs.core.seq.call(null,seq__1889976_1889984);
if(temp__4425__auto___1889993){
var seq__1889976_1889994__$1 = temp__4425__auto___1889993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1889976_1889994__$1)){
var c__24964__auto___1889995 = cljs.core.chunk_first.call(null,seq__1889976_1889994__$1);
var G__1889996 = cljs.core.chunk_rest.call(null,seq__1889976_1889994__$1);
var G__1889997 = c__24964__auto___1889995;
var G__1889998 = cljs.core.count.call(null,c__24964__auto___1889995);
var G__1889999 = (0);
seq__1889976_1889984 = G__1889996;
chunk__1889977_1889985 = G__1889997;
count__1889978_1889986 = G__1889998;
i__1889979_1889987 = G__1889999;
continue;
} else {
var c_1890000 = cljs.core.first.call(null,seq__1889976_1889994__$1);
dommy.core.prepend_BANG_.call(null,parent,c_1890000);

var G__1890001 = cljs.core.next.call(null,seq__1889976_1889994__$1);
var G__1890002 = null;
var G__1890003 = (0);
var G__1890004 = (0);
seq__1889976_1889984 = G__1890001;
chunk__1889977_1889985 = G__1890002;
count__1889978_1889986 = G__1890003;
i__1889979_1889987 = G__1890004;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq1889970){
var G__1889971 = cljs.core.first.call(null,seq1889970);
var seq1889970__$1 = cljs.core.next.call(null,seq1889970);
var G__1889972 = cljs.core.first.call(null,seq1889970__$1);
var seq1889970__$2 = cljs.core.next.call(null,seq1889970__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1889971,G__1889972,seq1889970__$2);
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
var temp__4423__auto___1890005 = other.nextSibling;
if(cljs.core.truth_(temp__4423__auto___1890005)){
var next_1890006 = temp__4423__auto___1890005;
dommy.core.insert_before_BANG_.call(null,elem,next_1890006);
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
var args1890007 = [];
var len__25219__auto___1890011 = arguments.length;
var i__25220__auto___1890012 = (0);
while(true){
if((i__25220__auto___1890012 < len__25219__auto___1890011)){
args1890007.push((arguments[i__25220__auto___1890012]));

var G__1890013 = (i__25220__auto___1890012 + (1));
i__25220__auto___1890012 = G__1890013;
continue;
} else {
}
break;
}

var G__1890009 = args1890007.length;
switch (G__1890009) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1890007.length)].join('')));

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
var G__1890010 = p;
G__1890010.removeChild(elem);

return G__1890010;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__1890015){
var vec__1890016 = p__1890015;
var special_mouse_event = cljs.core.nth.call(null,vec__1890016,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__1890016,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__1890016,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__1890016,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__24161__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__24149__auto__ = related_target;
if(cljs.core.truth_(and__24149__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__24149__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__1890016,special_mouse_event,real_mouse_event))
});})(vec__1890016,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__24149__auto__ = selected_target;
if(cljs.core.truth_(and__24149__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__24149__auto__;
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
var or__24161__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1890020 = arguments.length;
var i__25220__auto___1890021 = (0);
while(true){
if((i__25220__auto___1890021 < len__25219__auto___1890020)){
args__25226__auto__.push((arguments[i__25220__auto___1890021]));

var G__1890022 = (i__25220__auto___1890021 + (1));
i__25220__auto___1890021 = G__1890022;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((2) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25227__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq1890017){
var G__1890018 = cljs.core.first.call(null,seq1890017);
var seq1890017__$1 = cljs.core.next.call(null,seq1890017);
var G__1890019 = cljs.core.first.call(null,seq1890017__$1);
var seq1890017__$2 = cljs.core.next.call(null,seq1890017__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1890018,G__1890019,seq1890017__$2);
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
var args__25226__auto__ = [];
var len__25219__auto___1890048 = arguments.length;
var i__25220__auto___1890049 = (0);
while(true){
if((i__25220__auto___1890049 < len__25219__auto___1890048)){
args__25226__auto__.push((arguments[i__25220__auto___1890049]));

var G__1890050 = (i__25220__auto___1890049 + (1));
i__25220__auto___1890049 = G__1890050;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((1) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25227__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__1890025_1890051 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_1890052 = cljs.core.nth.call(null,vec__1890025_1890051,(0),null);
var selector_1890053 = cljs.core.nth.call(null,vec__1890025_1890051,(1),null);
var seq__1890026_1890054 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__1890033_1890055 = null;
var count__1890034_1890056 = (0);
var i__1890035_1890057 = (0);
while(true){
if((i__1890035_1890057 < count__1890034_1890056)){
var vec__1890042_1890058 = cljs.core._nth.call(null,chunk__1890033_1890055,i__1890035_1890057);
var orig_type_1890059 = cljs.core.nth.call(null,vec__1890042_1890058,(0),null);
var f_1890060 = cljs.core.nth.call(null,vec__1890042_1890058,(1),null);
var seq__1890036_1890061 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_1890059,cljs.core.PersistentArrayMap.fromArray([orig_type_1890059,cljs.core.identity], true, false)));
var chunk__1890038_1890062 = null;
var count__1890039_1890063 = (0);
var i__1890040_1890064 = (0);
while(true){
if((i__1890040_1890064 < count__1890039_1890063)){
var vec__1890043_1890065 = cljs.core._nth.call(null,chunk__1890038_1890062,i__1890040_1890064);
var actual_type_1890066 = cljs.core.nth.call(null,vec__1890043_1890065,(0),null);
var factory_1890067 = cljs.core.nth.call(null,vec__1890043_1890065,(1),null);
var canonical_f_1890068 = (cljs.core.truth_(selector_1890053)?cljs.core.partial.call(null,dommy.core.live_listener,elem_1890052,selector_1890053):cljs.core.identity).call(null,factory_1890067.call(null,f_1890060));
dommy.core.update_event_listeners_BANG_.call(null,elem_1890052,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_1890053,actual_type_1890066,f_1890060], null),canonical_f_1890068);

if(cljs.core.truth_(elem_1890052.addEventListener)){
elem_1890052.addEventListener(cljs.core.name.call(null,actual_type_1890066),canonical_f_1890068);
} else {
elem_1890052.attachEvent(cljs.core.name.call(null,actual_type_1890066),canonical_f_1890068);
}

var G__1890069 = seq__1890036_1890061;
var G__1890070 = chunk__1890038_1890062;
var G__1890071 = count__1890039_1890063;
var G__1890072 = (i__1890040_1890064 + (1));
seq__1890036_1890061 = G__1890069;
chunk__1890038_1890062 = G__1890070;
count__1890039_1890063 = G__1890071;
i__1890040_1890064 = G__1890072;
continue;
} else {
var temp__4425__auto___1890073 = cljs.core.seq.call(null,seq__1890036_1890061);
if(temp__4425__auto___1890073){
var seq__1890036_1890074__$1 = temp__4425__auto___1890073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1890036_1890074__$1)){
var c__24964__auto___1890075 = cljs.core.chunk_first.call(null,seq__1890036_1890074__$1);
var G__1890076 = cljs.core.chunk_rest.call(null,seq__1890036_1890074__$1);
var G__1890077 = c__24964__auto___1890075;
var G__1890078 = cljs.core.count.call(null,c__24964__auto___1890075);
var G__1890079 = (0);
seq__1890036_1890061 = G__1890076;
chunk__1890038_1890062 = G__1890077;
count__1890039_1890063 = G__1890078;
i__1890040_1890064 = G__1890079;
continue;
} else {
var vec__1890044_1890080 = cljs.core.first.call(null,seq__1890036_1890074__$1);
var actual_type_1890081 = cljs.core.nth.call(null,vec__1890044_1890080,(0),null);
var factory_1890082 = cljs.core.nth.call(null,vec__1890044_1890080,(1),null);
var canonical_f_1890083 = (cljs.core.truth_(selector_1890053)?cljs.core.partial.call(null,dommy.core.live_listener,elem_1890052,selector_1890053):cljs.core.identity).call(null,factory_1890082.call(null,f_1890060));
dommy.core.update_event_listeners_BANG_.call(null,elem_1890052,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_1890053,actual_type_1890081,f_1890060], null),canonical_f_1890083);

if(cljs.core.truth_(elem_1890052.addEventListener)){
elem_1890052.addEventListener(cljs.core.name.call(null,actual_type_1890081),canonical_f_1890083);
} else {
elem_1890052.attachEvent(cljs.core.name.call(null,actual_type_1890081),canonical_f_1890083);
}

var G__1890084 = cljs.core.next.call(null,seq__1890036_1890074__$1);
var G__1890085 = null;
var G__1890086 = (0);
var G__1890087 = (0);
seq__1890036_1890061 = G__1890084;
chunk__1890038_1890062 = G__1890085;
count__1890039_1890063 = G__1890086;
i__1890040_1890064 = G__1890087;
continue;
}
} else {
}
}
break;
}

var G__1890088 = seq__1890026_1890054;
var G__1890089 = chunk__1890033_1890055;
var G__1890090 = count__1890034_1890056;
var G__1890091 = (i__1890035_1890057 + (1));
seq__1890026_1890054 = G__1890088;
chunk__1890033_1890055 = G__1890089;
count__1890034_1890056 = G__1890090;
i__1890035_1890057 = G__1890091;
continue;
} else {
var temp__4425__auto___1890092 = cljs.core.seq.call(null,seq__1890026_1890054);
if(temp__4425__auto___1890092){
var seq__1890026_1890093__$1 = temp__4425__auto___1890092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1890026_1890093__$1)){
var c__24964__auto___1890094 = cljs.core.chunk_first.call(null,seq__1890026_1890093__$1);
var G__1890095 = cljs.core.chunk_rest.call(null,seq__1890026_1890093__$1);
var G__1890096 = c__24964__auto___1890094;
var G__1890097 = cljs.core.count.call(null,c__24964__auto___1890094);
var G__1890098 = (0);
seq__1890026_1890054 = G__1890095;
chunk__1890033_1890055 = G__1890096;
count__1890034_1890056 = G__1890097;
i__1890035_1890057 = G__1890098;
continue;
} else {
var vec__1890045_1890099 = cljs.core.first.call(null,seq__1890026_1890093__$1);
var orig_type_1890100 = cljs.core.nth.call(null,vec__1890045_1890099,(0),null);
var f_1890101 = cljs.core.nth.call(null,vec__1890045_1890099,(1),null);
var seq__1890027_1890102 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_1890100,cljs.core.PersistentArrayMap.fromArray([orig_type_1890100,cljs.core.identity], true, false)));
var chunk__1890029_1890103 = null;
var count__1890030_1890104 = (0);
var i__1890031_1890105 = (0);
while(true){
if((i__1890031_1890105 < count__1890030_1890104)){
var vec__1890046_1890106 = cljs.core._nth.call(null,chunk__1890029_1890103,i__1890031_1890105);
var actual_type_1890107 = cljs.core.nth.call(null,vec__1890046_1890106,(0),null);
var factory_1890108 = cljs.core.nth.call(null,vec__1890046_1890106,(1),null);
var canonical_f_1890109 = (cljs.core.truth_(selector_1890053)?cljs.core.partial.call(null,dommy.core.live_listener,elem_1890052,selector_1890053):cljs.core.identity).call(null,factory_1890108.call(null,f_1890101));
dommy.core.update_event_listeners_BANG_.call(null,elem_1890052,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_1890053,actual_type_1890107,f_1890101], null),canonical_f_1890109);

if(cljs.core.truth_(elem_1890052.addEventListener)){
elem_1890052.addEventListener(cljs.core.name.call(null,actual_type_1890107),canonical_f_1890109);
} else {
elem_1890052.attachEvent(cljs.core.name.call(null,actual_type_1890107),canonical_f_1890109);
}

var G__1890110 = seq__1890027_1890102;
var G__1890111 = chunk__1890029_1890103;
var G__1890112 = count__1890030_1890104;
var G__1890113 = (i__1890031_1890105 + (1));
seq__1890027_1890102 = G__1890110;
chunk__1890029_1890103 = G__1890111;
count__1890030_1890104 = G__1890112;
i__1890031_1890105 = G__1890113;
continue;
} else {
var temp__4425__auto___1890114__$1 = cljs.core.seq.call(null,seq__1890027_1890102);
if(temp__4425__auto___1890114__$1){
var seq__1890027_1890115__$1 = temp__4425__auto___1890114__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1890027_1890115__$1)){
var c__24964__auto___1890116 = cljs.core.chunk_first.call(null,seq__1890027_1890115__$1);
var G__1890117 = cljs.core.chunk_rest.call(null,seq__1890027_1890115__$1);
var G__1890118 = c__24964__auto___1890116;
var G__1890119 = cljs.core.count.call(null,c__24964__auto___1890116);
var G__1890120 = (0);
seq__1890027_1890102 = G__1890117;
chunk__1890029_1890103 = G__1890118;
count__1890030_1890104 = G__1890119;
i__1890031_1890105 = G__1890120;
continue;
} else {
var vec__1890047_1890121 = cljs.core.first.call(null,seq__1890027_1890115__$1);
var actual_type_1890122 = cljs.core.nth.call(null,vec__1890047_1890121,(0),null);
var factory_1890123 = cljs.core.nth.call(null,vec__1890047_1890121,(1),null);
var canonical_f_1890124 = (cljs.core.truth_(selector_1890053)?cljs.core.partial.call(null,dommy.core.live_listener,elem_1890052,selector_1890053):cljs.core.identity).call(null,factory_1890123.call(null,f_1890101));
dommy.core.update_event_listeners_BANG_.call(null,elem_1890052,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_1890053,actual_type_1890122,f_1890101], null),canonical_f_1890124);

if(cljs.core.truth_(elem_1890052.addEventListener)){
elem_1890052.addEventListener(cljs.core.name.call(null,actual_type_1890122),canonical_f_1890124);
} else {
elem_1890052.attachEvent(cljs.core.name.call(null,actual_type_1890122),canonical_f_1890124);
}

var G__1890125 = cljs.core.next.call(null,seq__1890027_1890115__$1);
var G__1890126 = null;
var G__1890127 = (0);
var G__1890128 = (0);
seq__1890027_1890102 = G__1890125;
chunk__1890029_1890103 = G__1890126;
count__1890030_1890104 = G__1890127;
i__1890031_1890105 = G__1890128;
continue;
}
} else {
}
}
break;
}

var G__1890129 = cljs.core.next.call(null,seq__1890026_1890093__$1);
var G__1890130 = null;
var G__1890131 = (0);
var G__1890132 = (0);
seq__1890026_1890054 = G__1890129;
chunk__1890033_1890055 = G__1890130;
count__1890034_1890056 = G__1890131;
i__1890035_1890057 = G__1890132;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq1890023){
var G__1890024 = cljs.core.first.call(null,seq1890023);
var seq1890023__$1 = cljs.core.next.call(null,seq1890023);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1890024,seq1890023__$1);
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
var args__25226__auto__ = [];
var len__25219__auto___1890158 = arguments.length;
var i__25220__auto___1890159 = (0);
while(true){
if((i__25220__auto___1890159 < len__25219__auto___1890158)){
args__25226__auto__.push((arguments[i__25220__auto___1890159]));

var G__1890160 = (i__25220__auto___1890159 + (1));
i__25220__auto___1890159 = G__1890160;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((1) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25227__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__1890135_1890161 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_1890162 = cljs.core.nth.call(null,vec__1890135_1890161,(0),null);
var selector_1890163 = cljs.core.nth.call(null,vec__1890135_1890161,(1),null);
var seq__1890136_1890164 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__1890143_1890165 = null;
var count__1890144_1890166 = (0);
var i__1890145_1890167 = (0);
while(true){
if((i__1890145_1890167 < count__1890144_1890166)){
var vec__1890152_1890168 = cljs.core._nth.call(null,chunk__1890143_1890165,i__1890145_1890167);
var orig_type_1890169 = cljs.core.nth.call(null,vec__1890152_1890168,(0),null);
var f_1890170 = cljs.core.nth.call(null,vec__1890152_1890168,(1),null);
var seq__1890146_1890171 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_1890169,cljs.core.PersistentArrayMap.fromArray([orig_type_1890169,cljs.core.identity], true, false)));
var chunk__1890148_1890172 = null;
var count__1890149_1890173 = (0);
var i__1890150_1890174 = (0);
while(true){
if((i__1890150_1890174 < count__1890149_1890173)){
var vec__1890153_1890175 = cljs.core._nth.call(null,chunk__1890148_1890172,i__1890150_1890174);
var actual_type_1890176 = cljs.core.nth.call(null,vec__1890153_1890175,(0),null);
var __1890177 = cljs.core.nth.call(null,vec__1890153_1890175,(1),null);
var keys_1890178 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_1890163,actual_type_1890176,f_1890170], null);
var canonical_f_1890179 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_1890162),keys_1890178);
dommy.core.update_event_listeners_BANG_.call(null,elem_1890162,dommy.utils.dissoc_in,keys_1890178);

if(cljs.core.truth_(elem_1890162.removeEventListener)){
elem_1890162.removeEventListener(cljs.core.name.call(null,actual_type_1890176),canonical_f_1890179);
} else {
elem_1890162.detachEvent(cljs.core.name.call(null,actual_type_1890176),canonical_f_1890179);
}

var G__1890180 = seq__1890146_1890171;
var G__1890181 = chunk__1890148_1890172;
var G__1890182 = count__1890149_1890173;
var G__1890183 = (i__1890150_1890174 + (1));
seq__1890146_1890171 = G__1890180;
chunk__1890148_1890172 = G__1890181;
count__1890149_1890173 = G__1890182;
i__1890150_1890174 = G__1890183;
continue;
} else {
var temp__4425__auto___1890184 = cljs.core.seq.call(null,seq__1890146_1890171);
if(temp__4425__auto___1890184){
var seq__1890146_1890185__$1 = temp__4425__auto___1890184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1890146_1890185__$1)){
var c__24964__auto___1890186 = cljs.core.chunk_first.call(null,seq__1890146_1890185__$1);
var G__1890187 = cljs.core.chunk_rest.call(null,seq__1890146_1890185__$1);
var G__1890188 = c__24964__auto___1890186;
var G__1890189 = cljs.core.count.call(null,c__24964__auto___1890186);
var G__1890190 = (0);
seq__1890146_1890171 = G__1890187;
chunk__1890148_1890172 = G__1890188;
count__1890149_1890173 = G__1890189;
i__1890150_1890174 = G__1890190;
continue;
} else {
var vec__1890154_1890191 = cljs.core.first.call(null,seq__1890146_1890185__$1);
var actual_type_1890192 = cljs.core.nth.call(null,vec__1890154_1890191,(0),null);
var __1890193 = cljs.core.nth.call(null,vec__1890154_1890191,(1),null);
var keys_1890194 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_1890163,actual_type_1890192,f_1890170], null);
var canonical_f_1890195 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_1890162),keys_1890194);
dommy.core.update_event_listeners_BANG_.call(null,elem_1890162,dommy.utils.dissoc_in,keys_1890194);

if(cljs.core.truth_(elem_1890162.removeEventListener)){
elem_1890162.removeEventListener(cljs.core.name.call(null,actual_type_1890192),canonical_f_1890195);
} else {
elem_1890162.detachEvent(cljs.core.name.call(null,actual_type_1890192),canonical_f_1890195);
}

var G__1890196 = cljs.core.next.call(null,seq__1890146_1890185__$1);
var G__1890197 = null;
var G__1890198 = (0);
var G__1890199 = (0);
seq__1890146_1890171 = G__1890196;
chunk__1890148_1890172 = G__1890197;
count__1890149_1890173 = G__1890198;
i__1890150_1890174 = G__1890199;
continue;
}
} else {
}
}
break;
}

var G__1890200 = seq__1890136_1890164;
var G__1890201 = chunk__1890143_1890165;
var G__1890202 = count__1890144_1890166;
var G__1890203 = (i__1890145_1890167 + (1));
seq__1890136_1890164 = G__1890200;
chunk__1890143_1890165 = G__1890201;
count__1890144_1890166 = G__1890202;
i__1890145_1890167 = G__1890203;
continue;
} else {
var temp__4425__auto___1890204 = cljs.core.seq.call(null,seq__1890136_1890164);
if(temp__4425__auto___1890204){
var seq__1890136_1890205__$1 = temp__4425__auto___1890204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1890136_1890205__$1)){
var c__24964__auto___1890206 = cljs.core.chunk_first.call(null,seq__1890136_1890205__$1);
var G__1890207 = cljs.core.chunk_rest.call(null,seq__1890136_1890205__$1);
var G__1890208 = c__24964__auto___1890206;
var G__1890209 = cljs.core.count.call(null,c__24964__auto___1890206);
var G__1890210 = (0);
seq__1890136_1890164 = G__1890207;
chunk__1890143_1890165 = G__1890208;
count__1890144_1890166 = G__1890209;
i__1890145_1890167 = G__1890210;
continue;
} else {
var vec__1890155_1890211 = cljs.core.first.call(null,seq__1890136_1890205__$1);
var orig_type_1890212 = cljs.core.nth.call(null,vec__1890155_1890211,(0),null);
var f_1890213 = cljs.core.nth.call(null,vec__1890155_1890211,(1),null);
var seq__1890137_1890214 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_1890212,cljs.core.PersistentArrayMap.fromArray([orig_type_1890212,cljs.core.identity], true, false)));
var chunk__1890139_1890215 = null;
var count__1890140_1890216 = (0);
var i__1890141_1890217 = (0);
while(true){
if((i__1890141_1890217 < count__1890140_1890216)){
var vec__1890156_1890218 = cljs.core._nth.call(null,chunk__1890139_1890215,i__1890141_1890217);
var actual_type_1890219 = cljs.core.nth.call(null,vec__1890156_1890218,(0),null);
var __1890220 = cljs.core.nth.call(null,vec__1890156_1890218,(1),null);
var keys_1890221 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_1890163,actual_type_1890219,f_1890213], null);
var canonical_f_1890222 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_1890162),keys_1890221);
dommy.core.update_event_listeners_BANG_.call(null,elem_1890162,dommy.utils.dissoc_in,keys_1890221);

if(cljs.core.truth_(elem_1890162.removeEventListener)){
elem_1890162.removeEventListener(cljs.core.name.call(null,actual_type_1890219),canonical_f_1890222);
} else {
elem_1890162.detachEvent(cljs.core.name.call(null,actual_type_1890219),canonical_f_1890222);
}

var G__1890223 = seq__1890137_1890214;
var G__1890224 = chunk__1890139_1890215;
var G__1890225 = count__1890140_1890216;
var G__1890226 = (i__1890141_1890217 + (1));
seq__1890137_1890214 = G__1890223;
chunk__1890139_1890215 = G__1890224;
count__1890140_1890216 = G__1890225;
i__1890141_1890217 = G__1890226;
continue;
} else {
var temp__4425__auto___1890227__$1 = cljs.core.seq.call(null,seq__1890137_1890214);
if(temp__4425__auto___1890227__$1){
var seq__1890137_1890228__$1 = temp__4425__auto___1890227__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1890137_1890228__$1)){
var c__24964__auto___1890229 = cljs.core.chunk_first.call(null,seq__1890137_1890228__$1);
var G__1890230 = cljs.core.chunk_rest.call(null,seq__1890137_1890228__$1);
var G__1890231 = c__24964__auto___1890229;
var G__1890232 = cljs.core.count.call(null,c__24964__auto___1890229);
var G__1890233 = (0);
seq__1890137_1890214 = G__1890230;
chunk__1890139_1890215 = G__1890231;
count__1890140_1890216 = G__1890232;
i__1890141_1890217 = G__1890233;
continue;
} else {
var vec__1890157_1890234 = cljs.core.first.call(null,seq__1890137_1890228__$1);
var actual_type_1890235 = cljs.core.nth.call(null,vec__1890157_1890234,(0),null);
var __1890236 = cljs.core.nth.call(null,vec__1890157_1890234,(1),null);
var keys_1890237 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_1890163,actual_type_1890235,f_1890213], null);
var canonical_f_1890238 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_1890162),keys_1890237);
dommy.core.update_event_listeners_BANG_.call(null,elem_1890162,dommy.utils.dissoc_in,keys_1890237);

if(cljs.core.truth_(elem_1890162.removeEventListener)){
elem_1890162.removeEventListener(cljs.core.name.call(null,actual_type_1890235),canonical_f_1890238);
} else {
elem_1890162.detachEvent(cljs.core.name.call(null,actual_type_1890235),canonical_f_1890238);
}

var G__1890239 = cljs.core.next.call(null,seq__1890137_1890228__$1);
var G__1890240 = null;
var G__1890241 = (0);
var G__1890242 = (0);
seq__1890137_1890214 = G__1890239;
chunk__1890139_1890215 = G__1890240;
count__1890140_1890216 = G__1890241;
i__1890141_1890217 = G__1890242;
continue;
}
} else {
}
}
break;
}

var G__1890243 = cljs.core.next.call(null,seq__1890136_1890205__$1);
var G__1890244 = null;
var G__1890245 = (0);
var G__1890246 = (0);
seq__1890136_1890164 = G__1890243;
chunk__1890143_1890165 = G__1890244;
count__1890144_1890166 = G__1890245;
i__1890145_1890167 = G__1890246;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq1890133){
var G__1890134 = cljs.core.first.call(null,seq1890133);
var seq1890133__$1 = cljs.core.next.call(null,seq1890133);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1890134,seq1890133__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1890256 = arguments.length;
var i__25220__auto___1890257 = (0);
while(true){
if((i__25220__auto___1890257 < len__25219__auto___1890256)){
args__25226__auto__.push((arguments[i__25220__auto___1890257]));

var G__1890258 = (i__25220__auto___1890257 + (1));
i__25220__auto___1890257 = G__1890258;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((1) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25227__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__1890249_1890259 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_1890260 = cljs.core.nth.call(null,vec__1890249_1890259,(0),null);
var selector_1890261 = cljs.core.nth.call(null,vec__1890249_1890259,(1),null);
var seq__1890250_1890262 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__1890251_1890263 = null;
var count__1890252_1890264 = (0);
var i__1890253_1890265 = (0);
while(true){
if((i__1890253_1890265 < count__1890252_1890264)){
var vec__1890254_1890266 = cljs.core._nth.call(null,chunk__1890251_1890263,i__1890253_1890265);
var type_1890267 = cljs.core.nth.call(null,vec__1890254_1890266,(0),null);
var f_1890268 = cljs.core.nth.call(null,vec__1890254_1890266,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_1890267,((function (seq__1890250_1890262,chunk__1890251_1890263,count__1890252_1890264,i__1890253_1890265,vec__1890254_1890266,type_1890267,f_1890268,vec__1890249_1890259,elem_1890260,selector_1890261){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_1890267,dommy$core$this_fn);

return f_1890268.call(null,e);
});})(seq__1890250_1890262,chunk__1890251_1890263,count__1890252_1890264,i__1890253_1890265,vec__1890254_1890266,type_1890267,f_1890268,vec__1890249_1890259,elem_1890260,selector_1890261))
);

var G__1890269 = seq__1890250_1890262;
var G__1890270 = chunk__1890251_1890263;
var G__1890271 = count__1890252_1890264;
var G__1890272 = (i__1890253_1890265 + (1));
seq__1890250_1890262 = G__1890269;
chunk__1890251_1890263 = G__1890270;
count__1890252_1890264 = G__1890271;
i__1890253_1890265 = G__1890272;
continue;
} else {
var temp__4425__auto___1890273 = cljs.core.seq.call(null,seq__1890250_1890262);
if(temp__4425__auto___1890273){
var seq__1890250_1890274__$1 = temp__4425__auto___1890273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1890250_1890274__$1)){
var c__24964__auto___1890275 = cljs.core.chunk_first.call(null,seq__1890250_1890274__$1);
var G__1890276 = cljs.core.chunk_rest.call(null,seq__1890250_1890274__$1);
var G__1890277 = c__24964__auto___1890275;
var G__1890278 = cljs.core.count.call(null,c__24964__auto___1890275);
var G__1890279 = (0);
seq__1890250_1890262 = G__1890276;
chunk__1890251_1890263 = G__1890277;
count__1890252_1890264 = G__1890278;
i__1890253_1890265 = G__1890279;
continue;
} else {
var vec__1890255_1890280 = cljs.core.first.call(null,seq__1890250_1890274__$1);
var type_1890281 = cljs.core.nth.call(null,vec__1890255_1890280,(0),null);
var f_1890282 = cljs.core.nth.call(null,vec__1890255_1890280,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_1890281,((function (seq__1890250_1890262,chunk__1890251_1890263,count__1890252_1890264,i__1890253_1890265,vec__1890255_1890280,type_1890281,f_1890282,seq__1890250_1890274__$1,temp__4425__auto___1890273,vec__1890249_1890259,elem_1890260,selector_1890261){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_1890281,dommy$core$this_fn);

return f_1890282.call(null,e);
});})(seq__1890250_1890262,chunk__1890251_1890263,count__1890252_1890264,i__1890253_1890265,vec__1890255_1890280,type_1890281,f_1890282,seq__1890250_1890274__$1,temp__4425__auto___1890273,vec__1890249_1890259,elem_1890260,selector_1890261))
);

var G__1890283 = cljs.core.next.call(null,seq__1890250_1890274__$1);
var G__1890284 = null;
var G__1890285 = (0);
var G__1890286 = (0);
seq__1890250_1890262 = G__1890283;
chunk__1890251_1890263 = G__1890284;
count__1890252_1890264 = G__1890285;
i__1890253_1890265 = G__1890286;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq1890247){
var G__1890248 = cljs.core.first.call(null,seq1890247);
var seq1890247__$1 = cljs.core.next.call(null,seq1890247);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1890248,seq1890247__$1);
});

//# sourceMappingURL=core.js.map