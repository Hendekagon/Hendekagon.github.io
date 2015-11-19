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
var args380730 = [];
var len__25219__auto___380733 = arguments.length;
var i__25220__auto___380734 = (0);
while(true){
if((i__25220__auto___380734 < len__25219__auto___380733)){
args380730.push((arguments[i__25220__auto___380734]));

var G__380735 = (i__25220__auto___380734 + (1));
i__25220__auto___380734 = G__380735;
continue;
} else {
}
break;
}

var G__380732 = args380730.length;
switch (G__380732) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args380730.length)].join('')));

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
var args380737 = [];
var len__25219__auto___380740 = arguments.length;
var i__25220__auto___380741 = (0);
while(true){
if((i__25220__auto___380741 < len__25219__auto___380740)){
args380737.push((arguments[i__25220__auto___380741]));

var G__380742 = (i__25220__auto___380741 + (1));
i__25220__auto___380741 = G__380742;
continue;
} else {
}
break;
}

var G__380739 = args380737.length;
switch (G__380739) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args380737.length)].join('')));

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
var args380745 = [];
var len__25219__auto___380748 = arguments.length;
var i__25220__auto___380749 = (0);
while(true){
if((i__25220__auto___380749 < len__25219__auto___380748)){
args380745.push((arguments[i__25220__auto___380749]));

var G__380750 = (i__25220__auto___380749 + (1));
i__25220__auto___380749 = G__380750;
continue;
} else {
}
break;
}

var G__380747 = args380745.length;
switch (G__380747) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args380745.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__380744_SHARP_){
return !((p1__380744_SHARP_ === base));
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
var len__25219__auto___380760 = arguments.length;
var i__25220__auto___380761 = (0);
while(true){
if((i__25220__auto___380761 < len__25219__auto___380760)){
args__25226__auto__.push((arguments[i__25220__auto___380761]));

var G__380762 = (i__25220__auto___380761 + (1));
i__25220__auto___380761 = G__380762;
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
var seq__380754_380763 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__380755_380764 = null;
var count__380756_380765 = (0);
var i__380757_380766 = (0);
while(true){
if((i__380757_380766 < count__380756_380765)){
var vec__380758_380767 = cljs.core._nth.call(null,chunk__380755_380764,i__380757_380766);
var k_380768 = cljs.core.nth.call(null,vec__380758_380767,(0),null);
var v_380769 = cljs.core.nth.call(null,vec__380758_380767,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_380768),v_380769);

var G__380770 = seq__380754_380763;
var G__380771 = chunk__380755_380764;
var G__380772 = count__380756_380765;
var G__380773 = (i__380757_380766 + (1));
seq__380754_380763 = G__380770;
chunk__380755_380764 = G__380771;
count__380756_380765 = G__380772;
i__380757_380766 = G__380773;
continue;
} else {
var temp__4425__auto___380774 = cljs.core.seq.call(null,seq__380754_380763);
if(temp__4425__auto___380774){
var seq__380754_380775__$1 = temp__4425__auto___380774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__380754_380775__$1)){
var c__24964__auto___380776 = cljs.core.chunk_first.call(null,seq__380754_380775__$1);
var G__380777 = cljs.core.chunk_rest.call(null,seq__380754_380775__$1);
var G__380778 = c__24964__auto___380776;
var G__380779 = cljs.core.count.call(null,c__24964__auto___380776);
var G__380780 = (0);
seq__380754_380763 = G__380777;
chunk__380755_380764 = G__380778;
count__380756_380765 = G__380779;
i__380757_380766 = G__380780;
continue;
} else {
var vec__380759_380781 = cljs.core.first.call(null,seq__380754_380775__$1);
var k_380782 = cljs.core.nth.call(null,vec__380759_380781,(0),null);
var v_380783 = cljs.core.nth.call(null,vec__380759_380781,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_380782),v_380783);

var G__380784 = cljs.core.next.call(null,seq__380754_380775__$1);
var G__380785 = null;
var G__380786 = (0);
var G__380787 = (0);
seq__380754_380763 = G__380784;
chunk__380755_380764 = G__380785;
count__380756_380765 = G__380786;
i__380757_380766 = G__380787;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq380752){
var G__380753 = cljs.core.first.call(null,seq380752);
var seq380752__$1 = cljs.core.next.call(null,seq380752);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__380753,seq380752__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__25226__auto__ = [];
var len__25219__auto___380794 = arguments.length;
var i__25220__auto___380795 = (0);
while(true){
if((i__25220__auto___380795 < len__25219__auto___380794)){
args__25226__auto__.push((arguments[i__25220__auto___380795]));

var G__380796 = (i__25220__auto___380795 + (1));
i__25220__auto___380795 = G__380796;
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
var seq__380790_380797 = cljs.core.seq.call(null,keywords);
var chunk__380791_380798 = null;
var count__380792_380799 = (0);
var i__380793_380800 = (0);
while(true){
if((i__380793_380800 < count__380792_380799)){
var kw_380801 = cljs.core._nth.call(null,chunk__380791_380798,i__380793_380800);
style.removeProperty(dommy.utils.as_str.call(null,kw_380801));

var G__380802 = seq__380790_380797;
var G__380803 = chunk__380791_380798;
var G__380804 = count__380792_380799;
var G__380805 = (i__380793_380800 + (1));
seq__380790_380797 = G__380802;
chunk__380791_380798 = G__380803;
count__380792_380799 = G__380804;
i__380793_380800 = G__380805;
continue;
} else {
var temp__4425__auto___380806 = cljs.core.seq.call(null,seq__380790_380797);
if(temp__4425__auto___380806){
var seq__380790_380807__$1 = temp__4425__auto___380806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__380790_380807__$1)){
var c__24964__auto___380808 = cljs.core.chunk_first.call(null,seq__380790_380807__$1);
var G__380809 = cljs.core.chunk_rest.call(null,seq__380790_380807__$1);
var G__380810 = c__24964__auto___380808;
var G__380811 = cljs.core.count.call(null,c__24964__auto___380808);
var G__380812 = (0);
seq__380790_380797 = G__380809;
chunk__380791_380798 = G__380810;
count__380792_380799 = G__380811;
i__380793_380800 = G__380812;
continue;
} else {
var kw_380813 = cljs.core.first.call(null,seq__380790_380807__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_380813));

var G__380814 = cljs.core.next.call(null,seq__380790_380807__$1);
var G__380815 = null;
var G__380816 = (0);
var G__380817 = (0);
seq__380790_380797 = G__380814;
chunk__380791_380798 = G__380815;
count__380792_380799 = G__380816;
i__380793_380800 = G__380817;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq380788){
var G__380789 = cljs.core.first.call(null,seq380788);
var seq380788__$1 = cljs.core.next.call(null,seq380788);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__380789,seq380788__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__25226__auto__ = [];
var len__25219__auto___380826 = arguments.length;
var i__25220__auto___380827 = (0);
while(true){
if((i__25220__auto___380827 < len__25219__auto___380826)){
args__25226__auto__.push((arguments[i__25220__auto___380827]));

var G__380828 = (i__25220__auto___380827 + (1));
i__25220__auto___380827 = G__380828;
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

var seq__380820_380829 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__380821_380830 = null;
var count__380822_380831 = (0);
var i__380823_380832 = (0);
while(true){
if((i__380823_380832 < count__380822_380831)){
var vec__380824_380833 = cljs.core._nth.call(null,chunk__380821_380830,i__380823_380832);
var k_380834 = cljs.core.nth.call(null,vec__380824_380833,(0),null);
var v_380835 = cljs.core.nth.call(null,vec__380824_380833,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_380834,[cljs.core.str(v_380835),cljs.core.str("px")].join(''));

var G__380836 = seq__380820_380829;
var G__380837 = chunk__380821_380830;
var G__380838 = count__380822_380831;
var G__380839 = (i__380823_380832 + (1));
seq__380820_380829 = G__380836;
chunk__380821_380830 = G__380837;
count__380822_380831 = G__380838;
i__380823_380832 = G__380839;
continue;
} else {
var temp__4425__auto___380840 = cljs.core.seq.call(null,seq__380820_380829);
if(temp__4425__auto___380840){
var seq__380820_380841__$1 = temp__4425__auto___380840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__380820_380841__$1)){
var c__24964__auto___380842 = cljs.core.chunk_first.call(null,seq__380820_380841__$1);
var G__380843 = cljs.core.chunk_rest.call(null,seq__380820_380841__$1);
var G__380844 = c__24964__auto___380842;
var G__380845 = cljs.core.count.call(null,c__24964__auto___380842);
var G__380846 = (0);
seq__380820_380829 = G__380843;
chunk__380821_380830 = G__380844;
count__380822_380831 = G__380845;
i__380823_380832 = G__380846;
continue;
} else {
var vec__380825_380847 = cljs.core.first.call(null,seq__380820_380841__$1);
var k_380848 = cljs.core.nth.call(null,vec__380825_380847,(0),null);
var v_380849 = cljs.core.nth.call(null,vec__380825_380847,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_380848,[cljs.core.str(v_380849),cljs.core.str("px")].join(''));

var G__380850 = cljs.core.next.call(null,seq__380820_380841__$1);
var G__380851 = null;
var G__380852 = (0);
var G__380853 = (0);
seq__380820_380829 = G__380850;
chunk__380821_380830 = G__380851;
count__380822_380831 = G__380852;
i__380823_380832 = G__380853;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq380818){
var G__380819 = cljs.core.first.call(null,seq380818);
var seq380818__$1 = cljs.core.next.call(null,seq380818);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__380819,seq380818__$1);
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
var args380854 = [];
var len__25219__auto___380869 = arguments.length;
var i__25220__auto___380870 = (0);
while(true){
if((i__25220__auto___380870 < len__25219__auto___380869)){
args380854.push((arguments[i__25220__auto___380870]));

var G__380871 = (i__25220__auto___380870 + (1));
i__25220__auto___380870 = G__380871;
continue;
} else {
}
break;
}

var G__380860 = args380854.length;
switch (G__380860) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25238__auto__ = (new cljs.core.IndexedSeq(args380854.slice((3)),(0)));
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
var G__380861 = elem;
(G__380861[k__$1] = v);

return G__380861;
} else {
var G__380862 = elem;
G__380862.setAttribute(k__$1,v);

return G__380862;
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

var seq__380863_380873 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__380864_380874 = null;
var count__380865_380875 = (0);
var i__380866_380876 = (0);
while(true){
if((i__380866_380876 < count__380865_380875)){
var vec__380867_380877 = cljs.core._nth.call(null,chunk__380864_380874,i__380866_380876);
var k_380878__$1 = cljs.core.nth.call(null,vec__380867_380877,(0),null);
var v_380879__$1 = cljs.core.nth.call(null,vec__380867_380877,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_380878__$1,v_380879__$1);

var G__380880 = seq__380863_380873;
var G__380881 = chunk__380864_380874;
var G__380882 = count__380865_380875;
var G__380883 = (i__380866_380876 + (1));
seq__380863_380873 = G__380880;
chunk__380864_380874 = G__380881;
count__380865_380875 = G__380882;
i__380866_380876 = G__380883;
continue;
} else {
var temp__4425__auto___380884 = cljs.core.seq.call(null,seq__380863_380873);
if(temp__4425__auto___380884){
var seq__380863_380885__$1 = temp__4425__auto___380884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__380863_380885__$1)){
var c__24964__auto___380886 = cljs.core.chunk_first.call(null,seq__380863_380885__$1);
var G__380887 = cljs.core.chunk_rest.call(null,seq__380863_380885__$1);
var G__380888 = c__24964__auto___380886;
var G__380889 = cljs.core.count.call(null,c__24964__auto___380886);
var G__380890 = (0);
seq__380863_380873 = G__380887;
chunk__380864_380874 = G__380888;
count__380865_380875 = G__380889;
i__380866_380876 = G__380890;
continue;
} else {
var vec__380868_380891 = cljs.core.first.call(null,seq__380863_380885__$1);
var k_380892__$1 = cljs.core.nth.call(null,vec__380868_380891,(0),null);
var v_380893__$1 = cljs.core.nth.call(null,vec__380868_380891,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_380892__$1,v_380893__$1);

var G__380894 = cljs.core.next.call(null,seq__380863_380885__$1);
var G__380895 = null;
var G__380896 = (0);
var G__380897 = (0);
seq__380863_380873 = G__380894;
chunk__380864_380874 = G__380895;
count__380865_380875 = G__380896;
i__380866_380876 = G__380897;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq380855){
var G__380856 = cljs.core.first.call(null,seq380855);
var seq380855__$1 = cljs.core.next.call(null,seq380855);
var G__380857 = cljs.core.first.call(null,seq380855__$1);
var seq380855__$2 = cljs.core.next.call(null,seq380855__$1);
var G__380858 = cljs.core.first.call(null,seq380855__$2);
var seq380855__$3 = cljs.core.next.call(null,seq380855__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__380856,G__380857,G__380858,seq380855__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args380898 = [];
var len__25219__auto___380908 = arguments.length;
var i__25220__auto___380909 = (0);
while(true){
if((i__25220__auto___380909 < len__25219__auto___380908)){
args380898.push((arguments[i__25220__auto___380909]));

var G__380910 = (i__25220__auto___380909 + (1));
i__25220__auto___380909 = G__380910;
continue;
} else {
}
break;
}

var G__380903 = args380898.length;
switch (G__380903) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25238__auto__ = (new cljs.core.IndexedSeq(args380898.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25238__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_380912__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_380912__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_380912__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__380904_380913 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__380905_380914 = null;
var count__380906_380915 = (0);
var i__380907_380916 = (0);
while(true){
if((i__380907_380916 < count__380906_380915)){
var k_380917__$1 = cljs.core._nth.call(null,chunk__380905_380914,i__380907_380916);
dommy.core.remove_attr_BANG_.call(null,elem,k_380917__$1);

var G__380918 = seq__380904_380913;
var G__380919 = chunk__380905_380914;
var G__380920 = count__380906_380915;
var G__380921 = (i__380907_380916 + (1));
seq__380904_380913 = G__380918;
chunk__380905_380914 = G__380919;
count__380906_380915 = G__380920;
i__380907_380916 = G__380921;
continue;
} else {
var temp__4425__auto___380922 = cljs.core.seq.call(null,seq__380904_380913);
if(temp__4425__auto___380922){
var seq__380904_380923__$1 = temp__4425__auto___380922;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__380904_380923__$1)){
var c__24964__auto___380924 = cljs.core.chunk_first.call(null,seq__380904_380923__$1);
var G__380925 = cljs.core.chunk_rest.call(null,seq__380904_380923__$1);
var G__380926 = c__24964__auto___380924;
var G__380927 = cljs.core.count.call(null,c__24964__auto___380924);
var G__380928 = (0);
seq__380904_380913 = G__380925;
chunk__380905_380914 = G__380926;
count__380906_380915 = G__380927;
i__380907_380916 = G__380928;
continue;
} else {
var k_380929__$1 = cljs.core.first.call(null,seq__380904_380923__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_380929__$1);

var G__380930 = cljs.core.next.call(null,seq__380904_380923__$1);
var G__380931 = null;
var G__380932 = (0);
var G__380933 = (0);
seq__380904_380913 = G__380930;
chunk__380905_380914 = G__380931;
count__380906_380915 = G__380932;
i__380907_380916 = G__380933;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq380899){
var G__380900 = cljs.core.first.call(null,seq380899);
var seq380899__$1 = cljs.core.next.call(null,seq380899);
var G__380901 = cljs.core.first.call(null,seq380899__$1);
var seq380899__$2 = cljs.core.next.call(null,seq380899__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__380900,G__380901,seq380899__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args380934 = [];
var len__25219__auto___380937 = arguments.length;
var i__25220__auto___380938 = (0);
while(true){
if((i__25220__auto___380938 < len__25219__auto___380937)){
args380934.push((arguments[i__25220__auto___380938]));

var G__380939 = (i__25220__auto___380938 + (1));
i__25220__auto___380938 = G__380939;
continue;
} else {
}
break;
}

var G__380936 = args380934.length;
switch (G__380936) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args380934.length)].join('')));

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
var args380941 = [];
var len__25219__auto___380959 = arguments.length;
var i__25220__auto___380960 = (0);
while(true){
if((i__25220__auto___380960 < len__25219__auto___380959)){
args380941.push((arguments[i__25220__auto___380960]));

var G__380961 = (i__25220__auto___380960 + (1));
i__25220__auto___380960 = G__380961;
continue;
} else {
}
break;
}

var G__380946 = args380941.length;
switch (G__380946) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25238__auto__ = (new cljs.core.IndexedSeq(args380941.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25238__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4423__auto___380963 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___380963)){
var class_list_380964 = temp__4423__auto___380963;
var seq__380947_380965 = cljs.core.seq.call(null,classes__$1);
var chunk__380948_380966 = null;
var count__380949_380967 = (0);
var i__380950_380968 = (0);
while(true){
if((i__380950_380968 < count__380949_380967)){
var c_380969 = cljs.core._nth.call(null,chunk__380948_380966,i__380950_380968);
class_list_380964.add(c_380969);

var G__380970 = seq__380947_380965;
var G__380971 = chunk__380948_380966;
var G__380972 = count__380949_380967;
var G__380973 = (i__380950_380968 + (1));
seq__380947_380965 = G__380970;
chunk__380948_380966 = G__380971;
count__380949_380967 = G__380972;
i__380950_380968 = G__380973;
continue;
} else {
var temp__4425__auto___380974 = cljs.core.seq.call(null,seq__380947_380965);
if(temp__4425__auto___380974){
var seq__380947_380975__$1 = temp__4425__auto___380974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__380947_380975__$1)){
var c__24964__auto___380976 = cljs.core.chunk_first.call(null,seq__380947_380975__$1);
var G__380977 = cljs.core.chunk_rest.call(null,seq__380947_380975__$1);
var G__380978 = c__24964__auto___380976;
var G__380979 = cljs.core.count.call(null,c__24964__auto___380976);
var G__380980 = (0);
seq__380947_380965 = G__380977;
chunk__380948_380966 = G__380978;
count__380949_380967 = G__380979;
i__380950_380968 = G__380980;
continue;
} else {
var c_380981 = cljs.core.first.call(null,seq__380947_380975__$1);
class_list_380964.add(c_380981);

var G__380982 = cljs.core.next.call(null,seq__380947_380975__$1);
var G__380983 = null;
var G__380984 = (0);
var G__380985 = (0);
seq__380947_380965 = G__380982;
chunk__380948_380966 = G__380983;
count__380949_380967 = G__380984;
i__380950_380968 = G__380985;
continue;
}
} else {
}
}
break;
}
} else {
var seq__380951_380986 = cljs.core.seq.call(null,classes__$1);
var chunk__380952_380987 = null;
var count__380953_380988 = (0);
var i__380954_380989 = (0);
while(true){
if((i__380954_380989 < count__380953_380988)){
var c_380990 = cljs.core._nth.call(null,chunk__380952_380987,i__380954_380989);
var class_name_380991 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_380991,c_380990))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_380991 === ""))?c_380990:[cljs.core.str(class_name_380991),cljs.core.str(" "),cljs.core.str(c_380990)].join('')));
}

var G__380992 = seq__380951_380986;
var G__380993 = chunk__380952_380987;
var G__380994 = count__380953_380988;
var G__380995 = (i__380954_380989 + (1));
seq__380951_380986 = G__380992;
chunk__380952_380987 = G__380993;
count__380953_380988 = G__380994;
i__380954_380989 = G__380995;
continue;
} else {
var temp__4425__auto___380996 = cljs.core.seq.call(null,seq__380951_380986);
if(temp__4425__auto___380996){
var seq__380951_380997__$1 = temp__4425__auto___380996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__380951_380997__$1)){
var c__24964__auto___380998 = cljs.core.chunk_first.call(null,seq__380951_380997__$1);
var G__380999 = cljs.core.chunk_rest.call(null,seq__380951_380997__$1);
var G__381000 = c__24964__auto___380998;
var G__381001 = cljs.core.count.call(null,c__24964__auto___380998);
var G__381002 = (0);
seq__380951_380986 = G__380999;
chunk__380952_380987 = G__381000;
count__380953_380988 = G__381001;
i__380954_380989 = G__381002;
continue;
} else {
var c_381003 = cljs.core.first.call(null,seq__380951_380997__$1);
var class_name_381004 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_381004,c_381003))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_381004 === ""))?c_381003:[cljs.core.str(class_name_381004),cljs.core.str(" "),cljs.core.str(c_381003)].join('')));
}

var G__381005 = cljs.core.next.call(null,seq__380951_380997__$1);
var G__381006 = null;
var G__381007 = (0);
var G__381008 = (0);
seq__380951_380986 = G__381005;
chunk__380952_380987 = G__381006;
count__380953_380988 = G__381007;
i__380954_380989 = G__381008;
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
var seq__380955_381009 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__380956_381010 = null;
var count__380957_381011 = (0);
var i__380958_381012 = (0);
while(true){
if((i__380958_381012 < count__380957_381011)){
var c_381013 = cljs.core._nth.call(null,chunk__380956_381010,i__380958_381012);
dommy.core.add_class_BANG_.call(null,elem,c_381013);

var G__381014 = seq__380955_381009;
var G__381015 = chunk__380956_381010;
var G__381016 = count__380957_381011;
var G__381017 = (i__380958_381012 + (1));
seq__380955_381009 = G__381014;
chunk__380956_381010 = G__381015;
count__380957_381011 = G__381016;
i__380958_381012 = G__381017;
continue;
} else {
var temp__4425__auto___381018 = cljs.core.seq.call(null,seq__380955_381009);
if(temp__4425__auto___381018){
var seq__380955_381019__$1 = temp__4425__auto___381018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__380955_381019__$1)){
var c__24964__auto___381020 = cljs.core.chunk_first.call(null,seq__380955_381019__$1);
var G__381021 = cljs.core.chunk_rest.call(null,seq__380955_381019__$1);
var G__381022 = c__24964__auto___381020;
var G__381023 = cljs.core.count.call(null,c__24964__auto___381020);
var G__381024 = (0);
seq__380955_381009 = G__381021;
chunk__380956_381010 = G__381022;
count__380957_381011 = G__381023;
i__380958_381012 = G__381024;
continue;
} else {
var c_381025 = cljs.core.first.call(null,seq__380955_381019__$1);
dommy.core.add_class_BANG_.call(null,elem,c_381025);

var G__381026 = cljs.core.next.call(null,seq__380955_381019__$1);
var G__381027 = null;
var G__381028 = (0);
var G__381029 = (0);
seq__380955_381009 = G__381026;
chunk__380956_381010 = G__381027;
count__380957_381011 = G__381028;
i__380958_381012 = G__381029;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq380942){
var G__380943 = cljs.core.first.call(null,seq380942);
var seq380942__$1 = cljs.core.next.call(null,seq380942);
var G__380944 = cljs.core.first.call(null,seq380942__$1);
var seq380942__$2 = cljs.core.next.call(null,seq380942__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__380943,G__380944,seq380942__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args381030 = [];
var len__25219__auto___381040 = arguments.length;
var i__25220__auto___381041 = (0);
while(true){
if((i__25220__auto___381041 < len__25219__auto___381040)){
args381030.push((arguments[i__25220__auto___381041]));

var G__381042 = (i__25220__auto___381041 + (1));
i__25220__auto___381041 = G__381042;
continue;
} else {
}
break;
}

var G__381035 = args381030.length;
switch (G__381035) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25238__auto__ = (new cljs.core.IndexedSeq(args381030.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25238__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___381044 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___381044)){
var class_list_381045 = temp__4423__auto___381044;
class_list_381045.remove(c__$1);
} else {
var class_name_381046 = dommy.core.class$.call(null,elem);
var new_class_name_381047 = dommy.utils.remove_class_str.call(null,class_name_381046,c__$1);
if((class_name_381046 === new_class_name_381047)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_381047);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__381036 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__381037 = null;
var count__381038 = (0);
var i__381039 = (0);
while(true){
if((i__381039 < count__381038)){
var c = cljs.core._nth.call(null,chunk__381037,i__381039);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__381048 = seq__381036;
var G__381049 = chunk__381037;
var G__381050 = count__381038;
var G__381051 = (i__381039 + (1));
seq__381036 = G__381048;
chunk__381037 = G__381049;
count__381038 = G__381050;
i__381039 = G__381051;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__381036);
if(temp__4425__auto__){
var seq__381036__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__381036__$1)){
var c__24964__auto__ = cljs.core.chunk_first.call(null,seq__381036__$1);
var G__381052 = cljs.core.chunk_rest.call(null,seq__381036__$1);
var G__381053 = c__24964__auto__;
var G__381054 = cljs.core.count.call(null,c__24964__auto__);
var G__381055 = (0);
seq__381036 = G__381052;
chunk__381037 = G__381053;
count__381038 = G__381054;
i__381039 = G__381055;
continue;
} else {
var c = cljs.core.first.call(null,seq__381036__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__381056 = cljs.core.next.call(null,seq__381036__$1);
var G__381057 = null;
var G__381058 = (0);
var G__381059 = (0);
seq__381036 = G__381056;
chunk__381037 = G__381057;
count__381038 = G__381058;
i__381039 = G__381059;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq381031){
var G__381032 = cljs.core.first.call(null,seq381031);
var seq381031__$1 = cljs.core.next.call(null,seq381031);
var G__381033 = cljs.core.first.call(null,seq381031__$1);
var seq381031__$2 = cljs.core.next.call(null,seq381031__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__381032,G__381033,seq381031__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args381060 = [];
var len__25219__auto___381063 = arguments.length;
var i__25220__auto___381064 = (0);
while(true){
if((i__25220__auto___381064 < len__25219__auto___381063)){
args381060.push((arguments[i__25220__auto___381064]));

var G__381065 = (i__25220__auto___381064 + (1));
i__25220__auto___381064 = G__381065;
continue;
} else {
}
break;
}

var G__381062 = args381060.length;
switch (G__381062) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args381060.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___381067 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___381067)){
var class_list_381068 = temp__4423__auto___381067;
class_list_381068.toggle(c__$1);
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
var args381069 = [];
var len__25219__auto___381072 = arguments.length;
var i__25220__auto___381073 = (0);
while(true){
if((i__25220__auto___381073 < len__25219__auto___381072)){
args381069.push((arguments[i__25220__auto___381073]));

var G__381074 = (i__25220__auto___381073 + (1));
i__25220__auto___381073 = G__381074;
continue;
} else {
}
break;
}

var G__381071 = args381069.length;
switch (G__381071) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args381069.length)].join('')));

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
var args381076 = [];
var len__25219__auto___381079 = arguments.length;
var i__25220__auto___381080 = (0);
while(true){
if((i__25220__auto___381080 < len__25219__auto___381079)){
args381076.push((arguments[i__25220__auto___381080]));

var G__381081 = (i__25220__auto___381080 + (1));
i__25220__auto___381080 = G__381081;
continue;
} else {
}
break;
}

var G__381078 = args381076.length;
switch (G__381078) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args381076.length)].join('')));

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
var args381083 = [];
var len__25219__auto___381094 = arguments.length;
var i__25220__auto___381095 = (0);
while(true){
if((i__25220__auto___381095 < len__25219__auto___381094)){
args381083.push((arguments[i__25220__auto___381095]));

var G__381096 = (i__25220__auto___381095 + (1));
i__25220__auto___381095 = G__381096;
continue;
} else {
}
break;
}

var G__381088 = args381083.length;
switch (G__381088) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25238__auto__ = (new cljs.core.IndexedSeq(args381083.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25238__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__381089 = parent;
G__381089.appendChild(child);

return G__381089;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__381090_381098 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__381091_381099 = null;
var count__381092_381100 = (0);
var i__381093_381101 = (0);
while(true){
if((i__381093_381101 < count__381092_381100)){
var c_381102 = cljs.core._nth.call(null,chunk__381091_381099,i__381093_381101);
dommy.core.append_BANG_.call(null,parent,c_381102);

var G__381103 = seq__381090_381098;
var G__381104 = chunk__381091_381099;
var G__381105 = count__381092_381100;
var G__381106 = (i__381093_381101 + (1));
seq__381090_381098 = G__381103;
chunk__381091_381099 = G__381104;
count__381092_381100 = G__381105;
i__381093_381101 = G__381106;
continue;
} else {
var temp__4425__auto___381107 = cljs.core.seq.call(null,seq__381090_381098);
if(temp__4425__auto___381107){
var seq__381090_381108__$1 = temp__4425__auto___381107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__381090_381108__$1)){
var c__24964__auto___381109 = cljs.core.chunk_first.call(null,seq__381090_381108__$1);
var G__381110 = cljs.core.chunk_rest.call(null,seq__381090_381108__$1);
var G__381111 = c__24964__auto___381109;
var G__381112 = cljs.core.count.call(null,c__24964__auto___381109);
var G__381113 = (0);
seq__381090_381098 = G__381110;
chunk__381091_381099 = G__381111;
count__381092_381100 = G__381112;
i__381093_381101 = G__381113;
continue;
} else {
var c_381114 = cljs.core.first.call(null,seq__381090_381108__$1);
dommy.core.append_BANG_.call(null,parent,c_381114);

var G__381115 = cljs.core.next.call(null,seq__381090_381108__$1);
var G__381116 = null;
var G__381117 = (0);
var G__381118 = (0);
seq__381090_381098 = G__381115;
chunk__381091_381099 = G__381116;
count__381092_381100 = G__381117;
i__381093_381101 = G__381118;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq381084){
var G__381085 = cljs.core.first.call(null,seq381084);
var seq381084__$1 = cljs.core.next.call(null,seq381084);
var G__381086 = cljs.core.first.call(null,seq381084__$1);
var seq381084__$2 = cljs.core.next.call(null,seq381084__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__381085,G__381086,seq381084__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args381119 = [];
var len__25219__auto___381130 = arguments.length;
var i__25220__auto___381131 = (0);
while(true){
if((i__25220__auto___381131 < len__25219__auto___381130)){
args381119.push((arguments[i__25220__auto___381131]));

var G__381132 = (i__25220__auto___381131 + (1));
i__25220__auto___381131 = G__381132;
continue;
} else {
}
break;
}

var G__381124 = args381119.length;
switch (G__381124) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25238__auto__ = (new cljs.core.IndexedSeq(args381119.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25238__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__381125 = parent;
G__381125.insertBefore(child,parent.firstChild);

return G__381125;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__381126_381134 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__381127_381135 = null;
var count__381128_381136 = (0);
var i__381129_381137 = (0);
while(true){
if((i__381129_381137 < count__381128_381136)){
var c_381138 = cljs.core._nth.call(null,chunk__381127_381135,i__381129_381137);
dommy.core.prepend_BANG_.call(null,parent,c_381138);

var G__381139 = seq__381126_381134;
var G__381140 = chunk__381127_381135;
var G__381141 = count__381128_381136;
var G__381142 = (i__381129_381137 + (1));
seq__381126_381134 = G__381139;
chunk__381127_381135 = G__381140;
count__381128_381136 = G__381141;
i__381129_381137 = G__381142;
continue;
} else {
var temp__4425__auto___381143 = cljs.core.seq.call(null,seq__381126_381134);
if(temp__4425__auto___381143){
var seq__381126_381144__$1 = temp__4425__auto___381143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__381126_381144__$1)){
var c__24964__auto___381145 = cljs.core.chunk_first.call(null,seq__381126_381144__$1);
var G__381146 = cljs.core.chunk_rest.call(null,seq__381126_381144__$1);
var G__381147 = c__24964__auto___381145;
var G__381148 = cljs.core.count.call(null,c__24964__auto___381145);
var G__381149 = (0);
seq__381126_381134 = G__381146;
chunk__381127_381135 = G__381147;
count__381128_381136 = G__381148;
i__381129_381137 = G__381149;
continue;
} else {
var c_381150 = cljs.core.first.call(null,seq__381126_381144__$1);
dommy.core.prepend_BANG_.call(null,parent,c_381150);

var G__381151 = cljs.core.next.call(null,seq__381126_381144__$1);
var G__381152 = null;
var G__381153 = (0);
var G__381154 = (0);
seq__381126_381134 = G__381151;
chunk__381127_381135 = G__381152;
count__381128_381136 = G__381153;
i__381129_381137 = G__381154;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq381120){
var G__381121 = cljs.core.first.call(null,seq381120);
var seq381120__$1 = cljs.core.next.call(null,seq381120);
var G__381122 = cljs.core.first.call(null,seq381120__$1);
var seq381120__$2 = cljs.core.next.call(null,seq381120__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__381121,G__381122,seq381120__$2);
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
var temp__4423__auto___381155 = other.nextSibling;
if(cljs.core.truth_(temp__4423__auto___381155)){
var next_381156 = temp__4423__auto___381155;
dommy.core.insert_before_BANG_.call(null,elem,next_381156);
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
var args381157 = [];
var len__25219__auto___381161 = arguments.length;
var i__25220__auto___381162 = (0);
while(true){
if((i__25220__auto___381162 < len__25219__auto___381161)){
args381157.push((arguments[i__25220__auto___381162]));

var G__381163 = (i__25220__auto___381162 + (1));
i__25220__auto___381162 = G__381163;
continue;
} else {
}
break;
}

var G__381159 = args381157.length;
switch (G__381159) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args381157.length)].join('')));

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
var G__381160 = p;
G__381160.removeChild(elem);

return G__381160;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__381165){
var vec__381166 = p__381165;
var special_mouse_event = cljs.core.nth.call(null,vec__381166,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__381166,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__381166,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__381166,special_mouse_event,real_mouse_event){
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
;})(vec__381166,special_mouse_event,real_mouse_event))
});})(vec__381166,special_mouse_event,real_mouse_event))
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
var len__25219__auto___381170 = arguments.length;
var i__25220__auto___381171 = (0);
while(true){
if((i__25220__auto___381171 < len__25219__auto___381170)){
args__25226__auto__.push((arguments[i__25220__auto___381171]));

var G__381172 = (i__25220__auto___381171 + (1));
i__25220__auto___381171 = G__381172;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq381167){
var G__381168 = cljs.core.first.call(null,seq381167);
var seq381167__$1 = cljs.core.next.call(null,seq381167);
var G__381169 = cljs.core.first.call(null,seq381167__$1);
var seq381167__$2 = cljs.core.next.call(null,seq381167__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__381168,G__381169,seq381167__$2);
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
var len__25219__auto___381198 = arguments.length;
var i__25220__auto___381199 = (0);
while(true){
if((i__25220__auto___381199 < len__25219__auto___381198)){
args__25226__auto__.push((arguments[i__25220__auto___381199]));

var G__381200 = (i__25220__auto___381199 + (1));
i__25220__auto___381199 = G__381200;
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

var vec__381175_381201 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_381202 = cljs.core.nth.call(null,vec__381175_381201,(0),null);
var selector_381203 = cljs.core.nth.call(null,vec__381175_381201,(1),null);
var seq__381176_381204 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__381183_381205 = null;
var count__381184_381206 = (0);
var i__381185_381207 = (0);
while(true){
if((i__381185_381207 < count__381184_381206)){
var vec__381192_381208 = cljs.core._nth.call(null,chunk__381183_381205,i__381185_381207);
var orig_type_381209 = cljs.core.nth.call(null,vec__381192_381208,(0),null);
var f_381210 = cljs.core.nth.call(null,vec__381192_381208,(1),null);
var seq__381186_381211 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_381209,cljs.core.PersistentArrayMap.fromArray([orig_type_381209,cljs.core.identity], true, false)));
var chunk__381188_381212 = null;
var count__381189_381213 = (0);
var i__381190_381214 = (0);
while(true){
if((i__381190_381214 < count__381189_381213)){
var vec__381193_381215 = cljs.core._nth.call(null,chunk__381188_381212,i__381190_381214);
var actual_type_381216 = cljs.core.nth.call(null,vec__381193_381215,(0),null);
var factory_381217 = cljs.core.nth.call(null,vec__381193_381215,(1),null);
var canonical_f_381218 = (cljs.core.truth_(selector_381203)?cljs.core.partial.call(null,dommy.core.live_listener,elem_381202,selector_381203):cljs.core.identity).call(null,factory_381217.call(null,f_381210));
dommy.core.update_event_listeners_BANG_.call(null,elem_381202,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_381203,actual_type_381216,f_381210], null),canonical_f_381218);

if(cljs.core.truth_(elem_381202.addEventListener)){
elem_381202.addEventListener(cljs.core.name.call(null,actual_type_381216),canonical_f_381218);
} else {
elem_381202.attachEvent(cljs.core.name.call(null,actual_type_381216),canonical_f_381218);
}

var G__381219 = seq__381186_381211;
var G__381220 = chunk__381188_381212;
var G__381221 = count__381189_381213;
var G__381222 = (i__381190_381214 + (1));
seq__381186_381211 = G__381219;
chunk__381188_381212 = G__381220;
count__381189_381213 = G__381221;
i__381190_381214 = G__381222;
continue;
} else {
var temp__4425__auto___381223 = cljs.core.seq.call(null,seq__381186_381211);
if(temp__4425__auto___381223){
var seq__381186_381224__$1 = temp__4425__auto___381223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__381186_381224__$1)){
var c__24964__auto___381225 = cljs.core.chunk_first.call(null,seq__381186_381224__$1);
var G__381226 = cljs.core.chunk_rest.call(null,seq__381186_381224__$1);
var G__381227 = c__24964__auto___381225;
var G__381228 = cljs.core.count.call(null,c__24964__auto___381225);
var G__381229 = (0);
seq__381186_381211 = G__381226;
chunk__381188_381212 = G__381227;
count__381189_381213 = G__381228;
i__381190_381214 = G__381229;
continue;
} else {
var vec__381194_381230 = cljs.core.first.call(null,seq__381186_381224__$1);
var actual_type_381231 = cljs.core.nth.call(null,vec__381194_381230,(0),null);
var factory_381232 = cljs.core.nth.call(null,vec__381194_381230,(1),null);
var canonical_f_381233 = (cljs.core.truth_(selector_381203)?cljs.core.partial.call(null,dommy.core.live_listener,elem_381202,selector_381203):cljs.core.identity).call(null,factory_381232.call(null,f_381210));
dommy.core.update_event_listeners_BANG_.call(null,elem_381202,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_381203,actual_type_381231,f_381210], null),canonical_f_381233);

if(cljs.core.truth_(elem_381202.addEventListener)){
elem_381202.addEventListener(cljs.core.name.call(null,actual_type_381231),canonical_f_381233);
} else {
elem_381202.attachEvent(cljs.core.name.call(null,actual_type_381231),canonical_f_381233);
}

var G__381234 = cljs.core.next.call(null,seq__381186_381224__$1);
var G__381235 = null;
var G__381236 = (0);
var G__381237 = (0);
seq__381186_381211 = G__381234;
chunk__381188_381212 = G__381235;
count__381189_381213 = G__381236;
i__381190_381214 = G__381237;
continue;
}
} else {
}
}
break;
}

var G__381238 = seq__381176_381204;
var G__381239 = chunk__381183_381205;
var G__381240 = count__381184_381206;
var G__381241 = (i__381185_381207 + (1));
seq__381176_381204 = G__381238;
chunk__381183_381205 = G__381239;
count__381184_381206 = G__381240;
i__381185_381207 = G__381241;
continue;
} else {
var temp__4425__auto___381242 = cljs.core.seq.call(null,seq__381176_381204);
if(temp__4425__auto___381242){
var seq__381176_381243__$1 = temp__4425__auto___381242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__381176_381243__$1)){
var c__24964__auto___381244 = cljs.core.chunk_first.call(null,seq__381176_381243__$1);
var G__381245 = cljs.core.chunk_rest.call(null,seq__381176_381243__$1);
var G__381246 = c__24964__auto___381244;
var G__381247 = cljs.core.count.call(null,c__24964__auto___381244);
var G__381248 = (0);
seq__381176_381204 = G__381245;
chunk__381183_381205 = G__381246;
count__381184_381206 = G__381247;
i__381185_381207 = G__381248;
continue;
} else {
var vec__381195_381249 = cljs.core.first.call(null,seq__381176_381243__$1);
var orig_type_381250 = cljs.core.nth.call(null,vec__381195_381249,(0),null);
var f_381251 = cljs.core.nth.call(null,vec__381195_381249,(1),null);
var seq__381177_381252 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_381250,cljs.core.PersistentArrayMap.fromArray([orig_type_381250,cljs.core.identity], true, false)));
var chunk__381179_381253 = null;
var count__381180_381254 = (0);
var i__381181_381255 = (0);
while(true){
if((i__381181_381255 < count__381180_381254)){
var vec__381196_381256 = cljs.core._nth.call(null,chunk__381179_381253,i__381181_381255);
var actual_type_381257 = cljs.core.nth.call(null,vec__381196_381256,(0),null);
var factory_381258 = cljs.core.nth.call(null,vec__381196_381256,(1),null);
var canonical_f_381259 = (cljs.core.truth_(selector_381203)?cljs.core.partial.call(null,dommy.core.live_listener,elem_381202,selector_381203):cljs.core.identity).call(null,factory_381258.call(null,f_381251));
dommy.core.update_event_listeners_BANG_.call(null,elem_381202,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_381203,actual_type_381257,f_381251], null),canonical_f_381259);

if(cljs.core.truth_(elem_381202.addEventListener)){
elem_381202.addEventListener(cljs.core.name.call(null,actual_type_381257),canonical_f_381259);
} else {
elem_381202.attachEvent(cljs.core.name.call(null,actual_type_381257),canonical_f_381259);
}

var G__381260 = seq__381177_381252;
var G__381261 = chunk__381179_381253;
var G__381262 = count__381180_381254;
var G__381263 = (i__381181_381255 + (1));
seq__381177_381252 = G__381260;
chunk__381179_381253 = G__381261;
count__381180_381254 = G__381262;
i__381181_381255 = G__381263;
continue;
} else {
var temp__4425__auto___381264__$1 = cljs.core.seq.call(null,seq__381177_381252);
if(temp__4425__auto___381264__$1){
var seq__381177_381265__$1 = temp__4425__auto___381264__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__381177_381265__$1)){
var c__24964__auto___381266 = cljs.core.chunk_first.call(null,seq__381177_381265__$1);
var G__381267 = cljs.core.chunk_rest.call(null,seq__381177_381265__$1);
var G__381268 = c__24964__auto___381266;
var G__381269 = cljs.core.count.call(null,c__24964__auto___381266);
var G__381270 = (0);
seq__381177_381252 = G__381267;
chunk__381179_381253 = G__381268;
count__381180_381254 = G__381269;
i__381181_381255 = G__381270;
continue;
} else {
var vec__381197_381271 = cljs.core.first.call(null,seq__381177_381265__$1);
var actual_type_381272 = cljs.core.nth.call(null,vec__381197_381271,(0),null);
var factory_381273 = cljs.core.nth.call(null,vec__381197_381271,(1),null);
var canonical_f_381274 = (cljs.core.truth_(selector_381203)?cljs.core.partial.call(null,dommy.core.live_listener,elem_381202,selector_381203):cljs.core.identity).call(null,factory_381273.call(null,f_381251));
dommy.core.update_event_listeners_BANG_.call(null,elem_381202,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_381203,actual_type_381272,f_381251], null),canonical_f_381274);

if(cljs.core.truth_(elem_381202.addEventListener)){
elem_381202.addEventListener(cljs.core.name.call(null,actual_type_381272),canonical_f_381274);
} else {
elem_381202.attachEvent(cljs.core.name.call(null,actual_type_381272),canonical_f_381274);
}

var G__381275 = cljs.core.next.call(null,seq__381177_381265__$1);
var G__381276 = null;
var G__381277 = (0);
var G__381278 = (0);
seq__381177_381252 = G__381275;
chunk__381179_381253 = G__381276;
count__381180_381254 = G__381277;
i__381181_381255 = G__381278;
continue;
}
} else {
}
}
break;
}

var G__381279 = cljs.core.next.call(null,seq__381176_381243__$1);
var G__381280 = null;
var G__381281 = (0);
var G__381282 = (0);
seq__381176_381204 = G__381279;
chunk__381183_381205 = G__381280;
count__381184_381206 = G__381281;
i__381185_381207 = G__381282;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq381173){
var G__381174 = cljs.core.first.call(null,seq381173);
var seq381173__$1 = cljs.core.next.call(null,seq381173);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__381174,seq381173__$1);
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
var len__25219__auto___381308 = arguments.length;
var i__25220__auto___381309 = (0);
while(true){
if((i__25220__auto___381309 < len__25219__auto___381308)){
args__25226__auto__.push((arguments[i__25220__auto___381309]));

var G__381310 = (i__25220__auto___381309 + (1));
i__25220__auto___381309 = G__381310;
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

var vec__381285_381311 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_381312 = cljs.core.nth.call(null,vec__381285_381311,(0),null);
var selector_381313 = cljs.core.nth.call(null,vec__381285_381311,(1),null);
var seq__381286_381314 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__381293_381315 = null;
var count__381294_381316 = (0);
var i__381295_381317 = (0);
while(true){
if((i__381295_381317 < count__381294_381316)){
var vec__381302_381318 = cljs.core._nth.call(null,chunk__381293_381315,i__381295_381317);
var orig_type_381319 = cljs.core.nth.call(null,vec__381302_381318,(0),null);
var f_381320 = cljs.core.nth.call(null,vec__381302_381318,(1),null);
var seq__381296_381321 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_381319,cljs.core.PersistentArrayMap.fromArray([orig_type_381319,cljs.core.identity], true, false)));
var chunk__381298_381322 = null;
var count__381299_381323 = (0);
var i__381300_381324 = (0);
while(true){
if((i__381300_381324 < count__381299_381323)){
var vec__381303_381325 = cljs.core._nth.call(null,chunk__381298_381322,i__381300_381324);
var actual_type_381326 = cljs.core.nth.call(null,vec__381303_381325,(0),null);
var __381327 = cljs.core.nth.call(null,vec__381303_381325,(1),null);
var keys_381328 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_381313,actual_type_381326,f_381320], null);
var canonical_f_381329 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_381312),keys_381328);
dommy.core.update_event_listeners_BANG_.call(null,elem_381312,dommy.utils.dissoc_in,keys_381328);

if(cljs.core.truth_(elem_381312.removeEventListener)){
elem_381312.removeEventListener(cljs.core.name.call(null,actual_type_381326),canonical_f_381329);
} else {
elem_381312.detachEvent(cljs.core.name.call(null,actual_type_381326),canonical_f_381329);
}

var G__381330 = seq__381296_381321;
var G__381331 = chunk__381298_381322;
var G__381332 = count__381299_381323;
var G__381333 = (i__381300_381324 + (1));
seq__381296_381321 = G__381330;
chunk__381298_381322 = G__381331;
count__381299_381323 = G__381332;
i__381300_381324 = G__381333;
continue;
} else {
var temp__4425__auto___381334 = cljs.core.seq.call(null,seq__381296_381321);
if(temp__4425__auto___381334){
var seq__381296_381335__$1 = temp__4425__auto___381334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__381296_381335__$1)){
var c__24964__auto___381336 = cljs.core.chunk_first.call(null,seq__381296_381335__$1);
var G__381337 = cljs.core.chunk_rest.call(null,seq__381296_381335__$1);
var G__381338 = c__24964__auto___381336;
var G__381339 = cljs.core.count.call(null,c__24964__auto___381336);
var G__381340 = (0);
seq__381296_381321 = G__381337;
chunk__381298_381322 = G__381338;
count__381299_381323 = G__381339;
i__381300_381324 = G__381340;
continue;
} else {
var vec__381304_381341 = cljs.core.first.call(null,seq__381296_381335__$1);
var actual_type_381342 = cljs.core.nth.call(null,vec__381304_381341,(0),null);
var __381343 = cljs.core.nth.call(null,vec__381304_381341,(1),null);
var keys_381344 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_381313,actual_type_381342,f_381320], null);
var canonical_f_381345 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_381312),keys_381344);
dommy.core.update_event_listeners_BANG_.call(null,elem_381312,dommy.utils.dissoc_in,keys_381344);

if(cljs.core.truth_(elem_381312.removeEventListener)){
elem_381312.removeEventListener(cljs.core.name.call(null,actual_type_381342),canonical_f_381345);
} else {
elem_381312.detachEvent(cljs.core.name.call(null,actual_type_381342),canonical_f_381345);
}

var G__381346 = cljs.core.next.call(null,seq__381296_381335__$1);
var G__381347 = null;
var G__381348 = (0);
var G__381349 = (0);
seq__381296_381321 = G__381346;
chunk__381298_381322 = G__381347;
count__381299_381323 = G__381348;
i__381300_381324 = G__381349;
continue;
}
} else {
}
}
break;
}

var G__381350 = seq__381286_381314;
var G__381351 = chunk__381293_381315;
var G__381352 = count__381294_381316;
var G__381353 = (i__381295_381317 + (1));
seq__381286_381314 = G__381350;
chunk__381293_381315 = G__381351;
count__381294_381316 = G__381352;
i__381295_381317 = G__381353;
continue;
} else {
var temp__4425__auto___381354 = cljs.core.seq.call(null,seq__381286_381314);
if(temp__4425__auto___381354){
var seq__381286_381355__$1 = temp__4425__auto___381354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__381286_381355__$1)){
var c__24964__auto___381356 = cljs.core.chunk_first.call(null,seq__381286_381355__$1);
var G__381357 = cljs.core.chunk_rest.call(null,seq__381286_381355__$1);
var G__381358 = c__24964__auto___381356;
var G__381359 = cljs.core.count.call(null,c__24964__auto___381356);
var G__381360 = (0);
seq__381286_381314 = G__381357;
chunk__381293_381315 = G__381358;
count__381294_381316 = G__381359;
i__381295_381317 = G__381360;
continue;
} else {
var vec__381305_381361 = cljs.core.first.call(null,seq__381286_381355__$1);
var orig_type_381362 = cljs.core.nth.call(null,vec__381305_381361,(0),null);
var f_381363 = cljs.core.nth.call(null,vec__381305_381361,(1),null);
var seq__381287_381364 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_381362,cljs.core.PersistentArrayMap.fromArray([orig_type_381362,cljs.core.identity], true, false)));
var chunk__381289_381365 = null;
var count__381290_381366 = (0);
var i__381291_381367 = (0);
while(true){
if((i__381291_381367 < count__381290_381366)){
var vec__381306_381368 = cljs.core._nth.call(null,chunk__381289_381365,i__381291_381367);
var actual_type_381369 = cljs.core.nth.call(null,vec__381306_381368,(0),null);
var __381370 = cljs.core.nth.call(null,vec__381306_381368,(1),null);
var keys_381371 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_381313,actual_type_381369,f_381363], null);
var canonical_f_381372 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_381312),keys_381371);
dommy.core.update_event_listeners_BANG_.call(null,elem_381312,dommy.utils.dissoc_in,keys_381371);

if(cljs.core.truth_(elem_381312.removeEventListener)){
elem_381312.removeEventListener(cljs.core.name.call(null,actual_type_381369),canonical_f_381372);
} else {
elem_381312.detachEvent(cljs.core.name.call(null,actual_type_381369),canonical_f_381372);
}

var G__381373 = seq__381287_381364;
var G__381374 = chunk__381289_381365;
var G__381375 = count__381290_381366;
var G__381376 = (i__381291_381367 + (1));
seq__381287_381364 = G__381373;
chunk__381289_381365 = G__381374;
count__381290_381366 = G__381375;
i__381291_381367 = G__381376;
continue;
} else {
var temp__4425__auto___381377__$1 = cljs.core.seq.call(null,seq__381287_381364);
if(temp__4425__auto___381377__$1){
var seq__381287_381378__$1 = temp__4425__auto___381377__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__381287_381378__$1)){
var c__24964__auto___381379 = cljs.core.chunk_first.call(null,seq__381287_381378__$1);
var G__381380 = cljs.core.chunk_rest.call(null,seq__381287_381378__$1);
var G__381381 = c__24964__auto___381379;
var G__381382 = cljs.core.count.call(null,c__24964__auto___381379);
var G__381383 = (0);
seq__381287_381364 = G__381380;
chunk__381289_381365 = G__381381;
count__381290_381366 = G__381382;
i__381291_381367 = G__381383;
continue;
} else {
var vec__381307_381384 = cljs.core.first.call(null,seq__381287_381378__$1);
var actual_type_381385 = cljs.core.nth.call(null,vec__381307_381384,(0),null);
var __381386 = cljs.core.nth.call(null,vec__381307_381384,(1),null);
var keys_381387 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_381313,actual_type_381385,f_381363], null);
var canonical_f_381388 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_381312),keys_381387);
dommy.core.update_event_listeners_BANG_.call(null,elem_381312,dommy.utils.dissoc_in,keys_381387);

if(cljs.core.truth_(elem_381312.removeEventListener)){
elem_381312.removeEventListener(cljs.core.name.call(null,actual_type_381385),canonical_f_381388);
} else {
elem_381312.detachEvent(cljs.core.name.call(null,actual_type_381385),canonical_f_381388);
}

var G__381389 = cljs.core.next.call(null,seq__381287_381378__$1);
var G__381390 = null;
var G__381391 = (0);
var G__381392 = (0);
seq__381287_381364 = G__381389;
chunk__381289_381365 = G__381390;
count__381290_381366 = G__381391;
i__381291_381367 = G__381392;
continue;
}
} else {
}
}
break;
}

var G__381393 = cljs.core.next.call(null,seq__381286_381355__$1);
var G__381394 = null;
var G__381395 = (0);
var G__381396 = (0);
seq__381286_381314 = G__381393;
chunk__381293_381315 = G__381394;
count__381294_381316 = G__381395;
i__381295_381317 = G__381396;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq381283){
var G__381284 = cljs.core.first.call(null,seq381283);
var seq381283__$1 = cljs.core.next.call(null,seq381283);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__381284,seq381283__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__25226__auto__ = [];
var len__25219__auto___381406 = arguments.length;
var i__25220__auto___381407 = (0);
while(true){
if((i__25220__auto___381407 < len__25219__auto___381406)){
args__25226__auto__.push((arguments[i__25220__auto___381407]));

var G__381408 = (i__25220__auto___381407 + (1));
i__25220__auto___381407 = G__381408;
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

var vec__381399_381409 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_381410 = cljs.core.nth.call(null,vec__381399_381409,(0),null);
var selector_381411 = cljs.core.nth.call(null,vec__381399_381409,(1),null);
var seq__381400_381412 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__381401_381413 = null;
var count__381402_381414 = (0);
var i__381403_381415 = (0);
while(true){
if((i__381403_381415 < count__381402_381414)){
var vec__381404_381416 = cljs.core._nth.call(null,chunk__381401_381413,i__381403_381415);
var type_381417 = cljs.core.nth.call(null,vec__381404_381416,(0),null);
var f_381418 = cljs.core.nth.call(null,vec__381404_381416,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_381417,((function (seq__381400_381412,chunk__381401_381413,count__381402_381414,i__381403_381415,vec__381404_381416,type_381417,f_381418,vec__381399_381409,elem_381410,selector_381411){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_381417,dommy$core$this_fn);

return f_381418.call(null,e);
});})(seq__381400_381412,chunk__381401_381413,count__381402_381414,i__381403_381415,vec__381404_381416,type_381417,f_381418,vec__381399_381409,elem_381410,selector_381411))
);

var G__381419 = seq__381400_381412;
var G__381420 = chunk__381401_381413;
var G__381421 = count__381402_381414;
var G__381422 = (i__381403_381415 + (1));
seq__381400_381412 = G__381419;
chunk__381401_381413 = G__381420;
count__381402_381414 = G__381421;
i__381403_381415 = G__381422;
continue;
} else {
var temp__4425__auto___381423 = cljs.core.seq.call(null,seq__381400_381412);
if(temp__4425__auto___381423){
var seq__381400_381424__$1 = temp__4425__auto___381423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__381400_381424__$1)){
var c__24964__auto___381425 = cljs.core.chunk_first.call(null,seq__381400_381424__$1);
var G__381426 = cljs.core.chunk_rest.call(null,seq__381400_381424__$1);
var G__381427 = c__24964__auto___381425;
var G__381428 = cljs.core.count.call(null,c__24964__auto___381425);
var G__381429 = (0);
seq__381400_381412 = G__381426;
chunk__381401_381413 = G__381427;
count__381402_381414 = G__381428;
i__381403_381415 = G__381429;
continue;
} else {
var vec__381405_381430 = cljs.core.first.call(null,seq__381400_381424__$1);
var type_381431 = cljs.core.nth.call(null,vec__381405_381430,(0),null);
var f_381432 = cljs.core.nth.call(null,vec__381405_381430,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_381431,((function (seq__381400_381412,chunk__381401_381413,count__381402_381414,i__381403_381415,vec__381405_381430,type_381431,f_381432,seq__381400_381424__$1,temp__4425__auto___381423,vec__381399_381409,elem_381410,selector_381411){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_381431,dommy$core$this_fn);

return f_381432.call(null,e);
});})(seq__381400_381412,chunk__381401_381413,count__381402_381414,i__381403_381415,vec__381405_381430,type_381431,f_381432,seq__381400_381424__$1,temp__4425__auto___381423,vec__381399_381409,elem_381410,selector_381411))
);

var G__381433 = cljs.core.next.call(null,seq__381400_381424__$1);
var G__381434 = null;
var G__381435 = (0);
var G__381436 = (0);
seq__381400_381412 = G__381433;
chunk__381401_381413 = G__381434;
count__381402_381414 = G__381435;
i__381403_381415 = G__381436;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq381397){
var G__381398 = cljs.core.first.call(null,seq381397);
var seq381397__$1 = cljs.core.next.call(null,seq381397);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__381398,seq381397__$1);
});

//# sourceMappingURL=core.js.map