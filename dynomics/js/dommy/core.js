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
var args288496 = [];
var len__36260__auto___288499 = arguments.length;
var i__36261__auto___288500 = (0);
while(true){
if((i__36261__auto___288500 < len__36260__auto___288499)){
args288496.push((arguments[i__36261__auto___288500]));

var G__288501 = (i__36261__auto___288500 + (1));
i__36261__auto___288500 = G__288501;
continue;
} else {
}
break;
}

var G__288498 = args288496.length;
switch (G__288498) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args288496.length)].join('')));

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
var args288563 = [];
var len__36260__auto___288574 = arguments.length;
var i__36261__auto___288576 = (0);
while(true){
if((i__36261__auto___288576 < len__36260__auto___288574)){
args288563.push((arguments[i__36261__auto___288576]));

var G__288580 = (i__36261__auto___288576 + (1));
i__36261__auto___288576 = G__288580;
continue;
} else {
}
break;
}

var G__288569 = args288563.length;
switch (G__288569) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args288563.length)].join('')));

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
var args288585 = [];
var len__36260__auto___288594 = arguments.length;
var i__36261__auto___288596 = (0);
while(true){
if((i__36261__auto___288596 < len__36260__auto___288594)){
args288585.push((arguments[i__36261__auto___288596]));

var G__288598 = (i__36261__auto___288596 + (1));
i__36261__auto___288596 = G__288598;
continue;
} else {
}
break;
}

var G__288588 = args288585.length;
switch (G__288588) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args288585.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__288583_SHARP_){
return !((p1__288583_SHARP_ === base));
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
var len__36260__auto___288667 = arguments.length;
var i__36261__auto___288668 = (0);
while(true){
if((i__36261__auto___288668 < len__36260__auto___288667)){
args__36267__auto__.push((arguments[i__36261__auto___288668]));

var G__288671 = (i__36261__auto___288668 + (1));
i__36261__auto___288668 = G__288671;
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
var seq__288647_288680 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__288648_288681 = null;
var count__288649_288682 = (0);
var i__288650_288683 = (0);
while(true){
if((i__288650_288683 < count__288649_288682)){
var vec__288652_288687 = cljs.core._nth.call(null,chunk__288648_288681,i__288650_288683);
var k_288688 = cljs.core.nth.call(null,vec__288652_288687,(0),null);
var v_288689 = cljs.core.nth.call(null,vec__288652_288687,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_288688),v_288689);

var G__288693 = seq__288647_288680;
var G__288694 = chunk__288648_288681;
var G__288695 = count__288649_288682;
var G__288696 = (i__288650_288683 + (1));
seq__288647_288680 = G__288693;
chunk__288648_288681 = G__288694;
count__288649_288682 = G__288695;
i__288650_288683 = G__288696;
continue;
} else {
var temp__4657__auto___288698 = cljs.core.seq.call(null,seq__288647_288680);
if(temp__4657__auto___288698){
var seq__288647_288699__$1 = temp__4657__auto___288698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__288647_288699__$1)){
var c__36002__auto___288700 = cljs.core.chunk_first.call(null,seq__288647_288699__$1);
var G__288701 = cljs.core.chunk_rest.call(null,seq__288647_288699__$1);
var G__288702 = c__36002__auto___288700;
var G__288703 = cljs.core.count.call(null,c__36002__auto___288700);
var G__288704 = (0);
seq__288647_288680 = G__288701;
chunk__288648_288681 = G__288702;
count__288649_288682 = G__288703;
i__288650_288683 = G__288704;
continue;
} else {
var vec__288661_288705 = cljs.core.first.call(null,seq__288647_288699__$1);
var k_288706 = cljs.core.nth.call(null,vec__288661_288705,(0),null);
var v_288707 = cljs.core.nth.call(null,vec__288661_288705,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_288706),v_288707);

var G__288713 = cljs.core.next.call(null,seq__288647_288699__$1);
var G__288714 = null;
var G__288715 = (0);
var G__288716 = (0);
seq__288647_288680 = G__288713;
chunk__288648_288681 = G__288714;
count__288649_288682 = G__288715;
i__288650_288683 = G__288716;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq288634){
var G__288635 = cljs.core.first.call(null,seq288634);
var seq288634__$1 = cljs.core.next.call(null,seq288634);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__288635,seq288634__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__36267__auto__ = [];
var len__36260__auto___288731 = arguments.length;
var i__36261__auto___288732 = (0);
while(true){
if((i__36261__auto___288732 < len__36260__auto___288731)){
args__36267__auto__.push((arguments[i__36261__auto___288732]));

var G__288733 = (i__36261__auto___288732 + (1));
i__36261__auto___288732 = G__288733;
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
var seq__288727_288735 = cljs.core.seq.call(null,keywords);
var chunk__288728_288736 = null;
var count__288729_288737 = (0);
var i__288730_288738 = (0);
while(true){
if((i__288730_288738 < count__288729_288737)){
var kw_288742 = cljs.core._nth.call(null,chunk__288728_288736,i__288730_288738);
style.removeProperty(dommy.utils.as_str.call(null,kw_288742));

var G__288744 = seq__288727_288735;
var G__288745 = chunk__288728_288736;
var G__288746 = count__288729_288737;
var G__288747 = (i__288730_288738 + (1));
seq__288727_288735 = G__288744;
chunk__288728_288736 = G__288745;
count__288729_288737 = G__288746;
i__288730_288738 = G__288747;
continue;
} else {
var temp__4657__auto___288749 = cljs.core.seq.call(null,seq__288727_288735);
if(temp__4657__auto___288749){
var seq__288727_288750__$1 = temp__4657__auto___288749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__288727_288750__$1)){
var c__36002__auto___288751 = cljs.core.chunk_first.call(null,seq__288727_288750__$1);
var G__288752 = cljs.core.chunk_rest.call(null,seq__288727_288750__$1);
var G__288753 = c__36002__auto___288751;
var G__288754 = cljs.core.count.call(null,c__36002__auto___288751);
var G__288755 = (0);
seq__288727_288735 = G__288752;
chunk__288728_288736 = G__288753;
count__288729_288737 = G__288754;
i__288730_288738 = G__288755;
continue;
} else {
var kw_288757 = cljs.core.first.call(null,seq__288727_288750__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_288757));

var G__288758 = cljs.core.next.call(null,seq__288727_288750__$1);
var G__288759 = null;
var G__288760 = (0);
var G__288761 = (0);
seq__288727_288735 = G__288758;
chunk__288728_288736 = G__288759;
count__288729_288737 = G__288760;
i__288730_288738 = G__288761;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq288718){
var G__288719 = cljs.core.first.call(null,seq288718);
var seq288718__$1 = cljs.core.next.call(null,seq288718);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__288719,seq288718__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__36267__auto__ = [];
var len__36260__auto___288776 = arguments.length;
var i__36261__auto___288777 = (0);
while(true){
if((i__36261__auto___288777 < len__36260__auto___288776)){
args__36267__auto__.push((arguments[i__36261__auto___288777]));

var G__288778 = (i__36261__auto___288777 + (1));
i__36261__auto___288777 = G__288778;
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

var seq__288766_288782 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__288767_288783 = null;
var count__288768_288784 = (0);
var i__288769_288785 = (0);
while(true){
if((i__288769_288785 < count__288768_288784)){
var vec__288773_288787 = cljs.core._nth.call(null,chunk__288767_288783,i__288769_288785);
var k_288788 = cljs.core.nth.call(null,vec__288773_288787,(0),null);
var v_288789 = cljs.core.nth.call(null,vec__288773_288787,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_288788,[cljs.core.str(v_288789),cljs.core.str("px")].join(''));

var G__288793 = seq__288766_288782;
var G__288794 = chunk__288767_288783;
var G__288795 = count__288768_288784;
var G__288796 = (i__288769_288785 + (1));
seq__288766_288782 = G__288793;
chunk__288767_288783 = G__288794;
count__288768_288784 = G__288795;
i__288769_288785 = G__288796;
continue;
} else {
var temp__4657__auto___288799 = cljs.core.seq.call(null,seq__288766_288782);
if(temp__4657__auto___288799){
var seq__288766_288800__$1 = temp__4657__auto___288799;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__288766_288800__$1)){
var c__36002__auto___288802 = cljs.core.chunk_first.call(null,seq__288766_288800__$1);
var G__288803 = cljs.core.chunk_rest.call(null,seq__288766_288800__$1);
var G__288804 = c__36002__auto___288802;
var G__288805 = cljs.core.count.call(null,c__36002__auto___288802);
var G__288806 = (0);
seq__288766_288782 = G__288803;
chunk__288767_288783 = G__288804;
count__288768_288784 = G__288805;
i__288769_288785 = G__288806;
continue;
} else {
var vec__288775_288808 = cljs.core.first.call(null,seq__288766_288800__$1);
var k_288809 = cljs.core.nth.call(null,vec__288775_288808,(0),null);
var v_288810 = cljs.core.nth.call(null,vec__288775_288808,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_288809,[cljs.core.str(v_288810),cljs.core.str("px")].join(''));

var G__288812 = cljs.core.next.call(null,seq__288766_288800__$1);
var G__288813 = null;
var G__288814 = (0);
var G__288815 = (0);
seq__288766_288782 = G__288812;
chunk__288767_288783 = G__288813;
count__288768_288784 = G__288814;
i__288769_288785 = G__288815;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq288764){
var G__288765 = cljs.core.first.call(null,seq288764);
var seq288764__$1 = cljs.core.next.call(null,seq288764);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__288765,seq288764__$1);
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
var args288824 = [];
var len__36260__auto___288851 = arguments.length;
var i__36261__auto___288853 = (0);
while(true){
if((i__36261__auto___288853 < len__36260__auto___288851)){
args288824.push((arguments[i__36261__auto___288853]));

var G__288854 = (i__36261__auto___288853 + (1));
i__36261__auto___288853 = G__288854;
continue;
} else {
}
break;
}

var G__288837 = args288824.length;
switch (G__288837) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args288824.slice((3)),(0),null));
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
var G__288841 = elem;
(G__288841[k__$1] = v);

return G__288841;
} else {
var G__288842 = elem;
G__288842.setAttribute(k__$1,v);

return G__288842;
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

var seq__288843_288866 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__288844_288867 = null;
var count__288845_288868 = (0);
var i__288846_288869 = (0);
while(true){
if((i__288846_288869 < count__288845_288868)){
var vec__288847_288870 = cljs.core._nth.call(null,chunk__288844_288867,i__288846_288869);
var k_288871__$1 = cljs.core.nth.call(null,vec__288847_288870,(0),null);
var v_288872__$1 = cljs.core.nth.call(null,vec__288847_288870,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_288871__$1,v_288872__$1);

var G__288873 = seq__288843_288866;
var G__288874 = chunk__288844_288867;
var G__288875 = count__288845_288868;
var G__288876 = (i__288846_288869 + (1));
seq__288843_288866 = G__288873;
chunk__288844_288867 = G__288874;
count__288845_288868 = G__288875;
i__288846_288869 = G__288876;
continue;
} else {
var temp__4657__auto___288882 = cljs.core.seq.call(null,seq__288843_288866);
if(temp__4657__auto___288882){
var seq__288843_288885__$1 = temp__4657__auto___288882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__288843_288885__$1)){
var c__36002__auto___288886 = cljs.core.chunk_first.call(null,seq__288843_288885__$1);
var G__288887 = cljs.core.chunk_rest.call(null,seq__288843_288885__$1);
var G__288888 = c__36002__auto___288886;
var G__288889 = cljs.core.count.call(null,c__36002__auto___288886);
var G__288890 = (0);
seq__288843_288866 = G__288887;
chunk__288844_288867 = G__288888;
count__288845_288868 = G__288889;
i__288846_288869 = G__288890;
continue;
} else {
var vec__288849_288894 = cljs.core.first.call(null,seq__288843_288885__$1);
var k_288895__$1 = cljs.core.nth.call(null,vec__288849_288894,(0),null);
var v_288896__$1 = cljs.core.nth.call(null,vec__288849_288894,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_288895__$1,v_288896__$1);

var G__288899 = cljs.core.next.call(null,seq__288843_288885__$1);
var G__288900 = null;
var G__288901 = (0);
var G__288902 = (0);
seq__288843_288866 = G__288899;
chunk__288844_288867 = G__288900;
count__288845_288868 = G__288901;
i__288846_288869 = G__288902;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq288825){
var G__288826 = cljs.core.first.call(null,seq288825);
var seq288825__$1 = cljs.core.next.call(null,seq288825);
var G__288827 = cljs.core.first.call(null,seq288825__$1);
var seq288825__$2 = cljs.core.next.call(null,seq288825__$1);
var G__288828 = cljs.core.first.call(null,seq288825__$2);
var seq288825__$3 = cljs.core.next.call(null,seq288825__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__288826,G__288827,G__288828,seq288825__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args288915 = [];
var len__36260__auto___288940 = arguments.length;
var i__36261__auto___288941 = (0);
while(true){
if((i__36261__auto___288941 < len__36260__auto___288940)){
args288915.push((arguments[i__36261__auto___288941]));

var G__288946 = (i__36261__auto___288941 + (1));
i__36261__auto___288941 = G__288946;
continue;
} else {
}
break;
}

var G__288926 = args288915.length;
switch (G__288926) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args288915.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_288948__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_288948__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_288948__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__288928_288949 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__288929_288950 = null;
var count__288930_288951 = (0);
var i__288931_288952 = (0);
while(true){
if((i__288931_288952 < count__288930_288951)){
var k_288953__$1 = cljs.core._nth.call(null,chunk__288929_288950,i__288931_288952);
dommy.core.remove_attr_BANG_.call(null,elem,k_288953__$1);

var G__288954 = seq__288928_288949;
var G__288955 = chunk__288929_288950;
var G__288956 = count__288930_288951;
var G__288957 = (i__288931_288952 + (1));
seq__288928_288949 = G__288954;
chunk__288929_288950 = G__288955;
count__288930_288951 = G__288956;
i__288931_288952 = G__288957;
continue;
} else {
var temp__4657__auto___288958 = cljs.core.seq.call(null,seq__288928_288949);
if(temp__4657__auto___288958){
var seq__288928_288959__$1 = temp__4657__auto___288958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__288928_288959__$1)){
var c__36002__auto___288960 = cljs.core.chunk_first.call(null,seq__288928_288959__$1);
var G__288961 = cljs.core.chunk_rest.call(null,seq__288928_288959__$1);
var G__288962 = c__36002__auto___288960;
var G__288963 = cljs.core.count.call(null,c__36002__auto___288960);
var G__288964 = (0);
seq__288928_288949 = G__288961;
chunk__288929_288950 = G__288962;
count__288930_288951 = G__288963;
i__288931_288952 = G__288964;
continue;
} else {
var k_288965__$1 = cljs.core.first.call(null,seq__288928_288959__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_288965__$1);

var G__288966 = cljs.core.next.call(null,seq__288928_288959__$1);
var G__288967 = null;
var G__288968 = (0);
var G__288969 = (0);
seq__288928_288949 = G__288966;
chunk__288929_288950 = G__288967;
count__288930_288951 = G__288968;
i__288931_288952 = G__288969;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq288916){
var G__288917 = cljs.core.first.call(null,seq288916);
var seq288916__$1 = cljs.core.next.call(null,seq288916);
var G__288918 = cljs.core.first.call(null,seq288916__$1);
var seq288916__$2 = cljs.core.next.call(null,seq288916__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__288917,G__288918,seq288916__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args288970 = [];
var len__36260__auto___288976 = arguments.length;
var i__36261__auto___288977 = (0);
while(true){
if((i__36261__auto___288977 < len__36260__auto___288976)){
args288970.push((arguments[i__36261__auto___288977]));

var G__288978 = (i__36261__auto___288977 + (1));
i__36261__auto___288977 = G__288978;
continue;
} else {
}
break;
}

var G__288973 = args288970.length;
switch (G__288973) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args288970.length)].join('')));

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
var args288987 = [];
var len__36260__auto___289014 = arguments.length;
var i__36261__auto___289015 = (0);
while(true){
if((i__36261__auto___289015 < len__36260__auto___289014)){
args288987.push((arguments[i__36261__auto___289015]));

var G__289016 = (i__36261__auto___289015 + (1));
i__36261__auto___289015 = G__289016;
continue;
} else {
}
break;
}

var G__288994 = args288987.length;
switch (G__288994) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args288987.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___289026 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___289026)){
var class_list_289027 = temp__4655__auto___289026;
var seq__288995_289028 = cljs.core.seq.call(null,classes__$1);
var chunk__288996_289029 = null;
var count__288997_289030 = (0);
var i__288998_289031 = (0);
while(true){
if((i__288998_289031 < count__288997_289030)){
var c_289032 = cljs.core._nth.call(null,chunk__288996_289029,i__288998_289031);
class_list_289027.add(c_289032);

var G__289033 = seq__288995_289028;
var G__289034 = chunk__288996_289029;
var G__289035 = count__288997_289030;
var G__289036 = (i__288998_289031 + (1));
seq__288995_289028 = G__289033;
chunk__288996_289029 = G__289034;
count__288997_289030 = G__289035;
i__288998_289031 = G__289036;
continue;
} else {
var temp__4657__auto___289041 = cljs.core.seq.call(null,seq__288995_289028);
if(temp__4657__auto___289041){
var seq__288995_289044__$1 = temp__4657__auto___289041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__288995_289044__$1)){
var c__36002__auto___289048 = cljs.core.chunk_first.call(null,seq__288995_289044__$1);
var G__289053 = cljs.core.chunk_rest.call(null,seq__288995_289044__$1);
var G__289054 = c__36002__auto___289048;
var G__289055 = cljs.core.count.call(null,c__36002__auto___289048);
var G__289056 = (0);
seq__288995_289028 = G__289053;
chunk__288996_289029 = G__289054;
count__288997_289030 = G__289055;
i__288998_289031 = G__289056;
continue;
} else {
var c_289057 = cljs.core.first.call(null,seq__288995_289044__$1);
class_list_289027.add(c_289057);

var G__289060 = cljs.core.next.call(null,seq__288995_289044__$1);
var G__289061 = null;
var G__289062 = (0);
var G__289063 = (0);
seq__288995_289028 = G__289060;
chunk__288996_289029 = G__289061;
count__288997_289030 = G__289062;
i__288998_289031 = G__289063;
continue;
}
} else {
}
}
break;
}
} else {
var seq__289001_289070 = cljs.core.seq.call(null,classes__$1);
var chunk__289002_289071 = null;
var count__289003_289072 = (0);
var i__289004_289073 = (0);
while(true){
if((i__289004_289073 < count__289003_289072)){
var c_289077 = cljs.core._nth.call(null,chunk__289002_289071,i__289004_289073);
var class_name_289078 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_289078,c_289077))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_289078 === ""))?c_289077:[cljs.core.str(class_name_289078),cljs.core.str(" "),cljs.core.str(c_289077)].join('')));
}

var G__289083 = seq__289001_289070;
var G__289084 = chunk__289002_289071;
var G__289085 = count__289003_289072;
var G__289086 = (i__289004_289073 + (1));
seq__289001_289070 = G__289083;
chunk__289002_289071 = G__289084;
count__289003_289072 = G__289085;
i__289004_289073 = G__289086;
continue;
} else {
var temp__4657__auto___289087 = cljs.core.seq.call(null,seq__289001_289070);
if(temp__4657__auto___289087){
var seq__289001_289088__$1 = temp__4657__auto___289087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289001_289088__$1)){
var c__36002__auto___289089 = cljs.core.chunk_first.call(null,seq__289001_289088__$1);
var G__289090 = cljs.core.chunk_rest.call(null,seq__289001_289088__$1);
var G__289091 = c__36002__auto___289089;
var G__289092 = cljs.core.count.call(null,c__36002__auto___289089);
var G__289093 = (0);
seq__289001_289070 = G__289090;
chunk__289002_289071 = G__289091;
count__289003_289072 = G__289092;
i__289004_289073 = G__289093;
continue;
} else {
var c_289099 = cljs.core.first.call(null,seq__289001_289088__$1);
var class_name_289100 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_289100,c_289099))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_289100 === ""))?c_289099:[cljs.core.str(class_name_289100),cljs.core.str(" "),cljs.core.str(c_289099)].join('')));
}

var G__289104 = cljs.core.next.call(null,seq__289001_289088__$1);
var G__289105 = null;
var G__289106 = (0);
var G__289107 = (0);
seq__289001_289070 = G__289104;
chunk__289002_289071 = G__289105;
count__289003_289072 = G__289106;
i__289004_289073 = G__289107;
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
var seq__289005_289109 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__289006_289110 = null;
var count__289007_289111 = (0);
var i__289008_289112 = (0);
while(true){
if((i__289008_289112 < count__289007_289111)){
var c_289113 = cljs.core._nth.call(null,chunk__289006_289110,i__289008_289112);
dommy.core.add_class_BANG_.call(null,elem,c_289113);

var G__289114 = seq__289005_289109;
var G__289115 = chunk__289006_289110;
var G__289116 = count__289007_289111;
var G__289117 = (i__289008_289112 + (1));
seq__289005_289109 = G__289114;
chunk__289006_289110 = G__289115;
count__289007_289111 = G__289116;
i__289008_289112 = G__289117;
continue;
} else {
var temp__4657__auto___289122 = cljs.core.seq.call(null,seq__289005_289109);
if(temp__4657__auto___289122){
var seq__289005_289123__$1 = temp__4657__auto___289122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289005_289123__$1)){
var c__36002__auto___289124 = cljs.core.chunk_first.call(null,seq__289005_289123__$1);
var G__289125 = cljs.core.chunk_rest.call(null,seq__289005_289123__$1);
var G__289126 = c__36002__auto___289124;
var G__289127 = cljs.core.count.call(null,c__36002__auto___289124);
var G__289128 = (0);
seq__289005_289109 = G__289125;
chunk__289006_289110 = G__289126;
count__289007_289111 = G__289127;
i__289008_289112 = G__289128;
continue;
} else {
var c_289129 = cljs.core.first.call(null,seq__289005_289123__$1);
dommy.core.add_class_BANG_.call(null,elem,c_289129);

var G__289134 = cljs.core.next.call(null,seq__289005_289123__$1);
var G__289135 = null;
var G__289136 = (0);
var G__289137 = (0);
seq__289005_289109 = G__289134;
chunk__289006_289110 = G__289135;
count__289007_289111 = G__289136;
i__289008_289112 = G__289137;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq288988){
var G__288989 = cljs.core.first.call(null,seq288988);
var seq288988__$1 = cljs.core.next.call(null,seq288988);
var G__288990 = cljs.core.first.call(null,seq288988__$1);
var seq288988__$2 = cljs.core.next.call(null,seq288988__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__288989,G__288990,seq288988__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args289150 = [];
var len__36260__auto___289174 = arguments.length;
var i__36261__auto___289175 = (0);
while(true){
if((i__36261__auto___289175 < len__36260__auto___289174)){
args289150.push((arguments[i__36261__auto___289175]));

var G__289176 = (i__36261__auto___289175 + (1));
i__36261__auto___289175 = G__289176;
continue;
} else {
}
break;
}

var G__289164 = args289150.length;
switch (G__289164) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args289150.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___289182 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___289182)){
var class_list_289183 = temp__4655__auto___289182;
class_list_289183.remove(c__$1);
} else {
var class_name_289184 = dommy.core.class$.call(null,elem);
var new_class_name_289185 = dommy.utils.remove_class_str.call(null,class_name_289184,c__$1);
if((class_name_289184 === new_class_name_289185)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_289185);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__289166 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__289167 = null;
var count__289168 = (0);
var i__289169 = (0);
while(true){
if((i__289169 < count__289168)){
var c = cljs.core._nth.call(null,chunk__289167,i__289169);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__289198 = seq__289166;
var G__289199 = chunk__289167;
var G__289200 = count__289168;
var G__289201 = (i__289169 + (1));
seq__289166 = G__289198;
chunk__289167 = G__289199;
count__289168 = G__289200;
i__289169 = G__289201;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__289166);
if(temp__4657__auto__){
var seq__289166__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289166__$1)){
var c__36002__auto__ = cljs.core.chunk_first.call(null,seq__289166__$1);
var G__289211 = cljs.core.chunk_rest.call(null,seq__289166__$1);
var G__289212 = c__36002__auto__;
var G__289213 = cljs.core.count.call(null,c__36002__auto__);
var G__289214 = (0);
seq__289166 = G__289211;
chunk__289167 = G__289212;
count__289168 = G__289213;
i__289169 = G__289214;
continue;
} else {
var c = cljs.core.first.call(null,seq__289166__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__289228 = cljs.core.next.call(null,seq__289166__$1);
var G__289229 = null;
var G__289230 = (0);
var G__289231 = (0);
seq__289166 = G__289228;
chunk__289167 = G__289229;
count__289168 = G__289230;
i__289169 = G__289231;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq289151){
var G__289152 = cljs.core.first.call(null,seq289151);
var seq289151__$1 = cljs.core.next.call(null,seq289151);
var G__289153 = cljs.core.first.call(null,seq289151__$1);
var seq289151__$2 = cljs.core.next.call(null,seq289151__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__289152,G__289153,seq289151__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args289237 = [];
var len__36260__auto___289252 = arguments.length;
var i__36261__auto___289253 = (0);
while(true){
if((i__36261__auto___289253 < len__36260__auto___289252)){
args289237.push((arguments[i__36261__auto___289253]));

var G__289254 = (i__36261__auto___289253 + (1));
i__36261__auto___289253 = G__289254;
continue;
} else {
}
break;
}

var G__289241 = args289237.length;
switch (G__289241) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args289237.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___289260 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___289260)){
var class_list_289261 = temp__4655__auto___289260;
class_list_289261.toggle(c__$1);
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
var args289262 = [];
var len__36260__auto___289267 = arguments.length;
var i__36261__auto___289268 = (0);
while(true){
if((i__36261__auto___289268 < len__36260__auto___289267)){
args289262.push((arguments[i__36261__auto___289268]));

var G__289269 = (i__36261__auto___289268 + (1));
i__36261__auto___289268 = G__289269;
continue;
} else {
}
break;
}

var G__289266 = args289262.length;
switch (G__289266) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args289262.length)].join('')));

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
var args289284 = [];
var len__36260__auto___289294 = arguments.length;
var i__36261__auto___289296 = (0);
while(true){
if((i__36261__auto___289296 < len__36260__auto___289294)){
args289284.push((arguments[i__36261__auto___289296]));

var G__289301 = (i__36261__auto___289296 + (1));
i__36261__auto___289296 = G__289301;
continue;
} else {
}
break;
}

var G__289292 = args289284.length;
switch (G__289292) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args289284.length)].join('')));

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
var args289324 = [];
var len__36260__auto___289346 = arguments.length;
var i__36261__auto___289347 = (0);
while(true){
if((i__36261__auto___289347 < len__36260__auto___289346)){
args289324.push((arguments[i__36261__auto___289347]));

var G__289352 = (i__36261__auto___289347 + (1));
i__36261__auto___289347 = G__289352;
continue;
} else {
}
break;
}

var G__289334 = args289324.length;
switch (G__289334) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args289324.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__289339 = parent;
G__289339.appendChild(child);

return G__289339;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__289341_289356 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__289342_289357 = null;
var count__289343_289358 = (0);
var i__289344_289359 = (0);
while(true){
if((i__289344_289359 < count__289343_289358)){
var c_289364 = cljs.core._nth.call(null,chunk__289342_289357,i__289344_289359);
dommy.core.append_BANG_.call(null,parent,c_289364);

var G__289367 = seq__289341_289356;
var G__289368 = chunk__289342_289357;
var G__289369 = count__289343_289358;
var G__289370 = (i__289344_289359 + (1));
seq__289341_289356 = G__289367;
chunk__289342_289357 = G__289368;
count__289343_289358 = G__289369;
i__289344_289359 = G__289370;
continue;
} else {
var temp__4657__auto___289373 = cljs.core.seq.call(null,seq__289341_289356);
if(temp__4657__auto___289373){
var seq__289341_289374__$1 = temp__4657__auto___289373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289341_289374__$1)){
var c__36002__auto___289375 = cljs.core.chunk_first.call(null,seq__289341_289374__$1);
var G__289376 = cljs.core.chunk_rest.call(null,seq__289341_289374__$1);
var G__289377 = c__36002__auto___289375;
var G__289378 = cljs.core.count.call(null,c__36002__auto___289375);
var G__289379 = (0);
seq__289341_289356 = G__289376;
chunk__289342_289357 = G__289377;
count__289343_289358 = G__289378;
i__289344_289359 = G__289379;
continue;
} else {
var c_289380 = cljs.core.first.call(null,seq__289341_289374__$1);
dommy.core.append_BANG_.call(null,parent,c_289380);

var G__289381 = cljs.core.next.call(null,seq__289341_289374__$1);
var G__289382 = null;
var G__289383 = (0);
var G__289384 = (0);
seq__289341_289356 = G__289381;
chunk__289342_289357 = G__289382;
count__289343_289358 = G__289383;
i__289344_289359 = G__289384;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq289325){
var G__289326 = cljs.core.first.call(null,seq289325);
var seq289325__$1 = cljs.core.next.call(null,seq289325);
var G__289327 = cljs.core.first.call(null,seq289325__$1);
var seq289325__$2 = cljs.core.next.call(null,seq289325__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__289326,G__289327,seq289325__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args289387 = [];
var len__36260__auto___289418 = arguments.length;
var i__36261__auto___289419 = (0);
while(true){
if((i__36261__auto___289419 < len__36260__auto___289418)){
args289387.push((arguments[i__36261__auto___289419]));

var G__289421 = (i__36261__auto___289419 + (1));
i__36261__auto___289419 = G__289421;
continue;
} else {
}
break;
}

var G__289394 = args289387.length;
switch (G__289394) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args289387.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__289396 = parent;
G__289396.insertBefore(child,parent.firstChild);

return G__289396;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__289401_289426 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__289402_289427 = null;
var count__289403_289428 = (0);
var i__289404_289429 = (0);
while(true){
if((i__289404_289429 < count__289403_289428)){
var c_289430 = cljs.core._nth.call(null,chunk__289402_289427,i__289404_289429);
dommy.core.prepend_BANG_.call(null,parent,c_289430);

var G__289431 = seq__289401_289426;
var G__289432 = chunk__289402_289427;
var G__289433 = count__289403_289428;
var G__289434 = (i__289404_289429 + (1));
seq__289401_289426 = G__289431;
chunk__289402_289427 = G__289432;
count__289403_289428 = G__289433;
i__289404_289429 = G__289434;
continue;
} else {
var temp__4657__auto___289435 = cljs.core.seq.call(null,seq__289401_289426);
if(temp__4657__auto___289435){
var seq__289401_289436__$1 = temp__4657__auto___289435;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289401_289436__$1)){
var c__36002__auto___289437 = cljs.core.chunk_first.call(null,seq__289401_289436__$1);
var G__289438 = cljs.core.chunk_rest.call(null,seq__289401_289436__$1);
var G__289439 = c__36002__auto___289437;
var G__289440 = cljs.core.count.call(null,c__36002__auto___289437);
var G__289441 = (0);
seq__289401_289426 = G__289438;
chunk__289402_289427 = G__289439;
count__289403_289428 = G__289440;
i__289404_289429 = G__289441;
continue;
} else {
var c_289442 = cljs.core.first.call(null,seq__289401_289436__$1);
dommy.core.prepend_BANG_.call(null,parent,c_289442);

var G__289443 = cljs.core.next.call(null,seq__289401_289436__$1);
var G__289444 = null;
var G__289445 = (0);
var G__289446 = (0);
seq__289401_289426 = G__289443;
chunk__289402_289427 = G__289444;
count__289403_289428 = G__289445;
i__289404_289429 = G__289446;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq289388){
var G__289389 = cljs.core.first.call(null,seq289388);
var seq289388__$1 = cljs.core.next.call(null,seq289388);
var G__289390 = cljs.core.first.call(null,seq289388__$1);
var seq289388__$2 = cljs.core.next.call(null,seq289388__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__289389,G__289390,seq289388__$2);
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
var temp__4655__auto___289452 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___289452)){
var next_289453 = temp__4655__auto___289452;
dommy.core.insert_before_BANG_.call(null,elem,next_289453);
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
var args289466 = [];
var len__36260__auto___289480 = arguments.length;
var i__36261__auto___289481 = (0);
while(true){
if((i__36261__auto___289481 < len__36260__auto___289480)){
args289466.push((arguments[i__36261__auto___289481]));

var G__289485 = (i__36261__auto___289481 + (1));
i__36261__auto___289481 = G__289485;
continue;
} else {
}
break;
}

var G__289471 = args289466.length;
switch (G__289471) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args289466.length)].join('')));

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
var G__289473 = p;
G__289473.removeChild(elem);

return G__289473;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__289494){
var vec__289495 = p__289494;
var special_mouse_event = cljs.core.nth.call(null,vec__289495,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__289495,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__289495,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__289495,special_mouse_event,real_mouse_event){
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
;})(vec__289495,special_mouse_event,real_mouse_event))
});})(vec__289495,special_mouse_event,real_mouse_event))
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
var len__36260__auto___289517 = arguments.length;
var i__36261__auto___289518 = (0);
while(true){
if((i__36261__auto___289518 < len__36260__auto___289517)){
args__36267__auto__.push((arguments[i__36261__auto___289518]));

var G__289519 = (i__36261__auto___289518 + (1));
i__36261__auto___289518 = G__289519;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq289506){
var G__289507 = cljs.core.first.call(null,seq289506);
var seq289506__$1 = cljs.core.next.call(null,seq289506);
var G__289508 = cljs.core.first.call(null,seq289506__$1);
var seq289506__$2 = cljs.core.next.call(null,seq289506__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__289507,G__289508,seq289506__$2);
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
var len__36260__auto___289565 = arguments.length;
var i__36261__auto___289566 = (0);
while(true){
if((i__36261__auto___289566 < len__36260__auto___289565)){
args__36267__auto__.push((arguments[i__36261__auto___289566]));

var G__289567 = (i__36261__auto___289566 + (1));
i__36261__auto___289566 = G__289567;
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

var vec__289538_289569 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_289570 = cljs.core.nth.call(null,vec__289538_289569,(0),null);
var selector_289571 = cljs.core.nth.call(null,vec__289538_289569,(1),null);
var seq__289539_289573 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__289546_289574 = null;
var count__289547_289575 = (0);
var i__289548_289576 = (0);
while(true){
if((i__289548_289576 < count__289547_289575)){
var vec__289555_289578 = cljs.core._nth.call(null,chunk__289546_289574,i__289548_289576);
var orig_type_289579 = cljs.core.nth.call(null,vec__289555_289578,(0),null);
var f_289580 = cljs.core.nth.call(null,vec__289555_289578,(1),null);
var seq__289549_289584 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_289579,cljs.core.PersistentArrayMap.fromArray([orig_type_289579,cljs.core.identity], true, false)));
var chunk__289551_289585 = null;
var count__289552_289586 = (0);
var i__289553_289587 = (0);
while(true){
if((i__289553_289587 < count__289552_289586)){
var vec__289556_289589 = cljs.core._nth.call(null,chunk__289551_289585,i__289553_289587);
var actual_type_289590 = cljs.core.nth.call(null,vec__289556_289589,(0),null);
var factory_289591 = cljs.core.nth.call(null,vec__289556_289589,(1),null);
var canonical_f_289592 = (cljs.core.truth_(selector_289571)?cljs.core.partial.call(null,dommy.core.live_listener,elem_289570,selector_289571):cljs.core.identity).call(null,factory_289591.call(null,f_289580));
dommy.core.update_event_listeners_BANG_.call(null,elem_289570,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_289571,actual_type_289590,f_289580], null),canonical_f_289592);

if(cljs.core.truth_(elem_289570.addEventListener)){
elem_289570.addEventListener(cljs.core.name.call(null,actual_type_289590),canonical_f_289592);
} else {
elem_289570.attachEvent(cljs.core.name.call(null,actual_type_289590),canonical_f_289592);
}

var G__289593 = seq__289549_289584;
var G__289594 = chunk__289551_289585;
var G__289595 = count__289552_289586;
var G__289596 = (i__289553_289587 + (1));
seq__289549_289584 = G__289593;
chunk__289551_289585 = G__289594;
count__289552_289586 = G__289595;
i__289553_289587 = G__289596;
continue;
} else {
var temp__4657__auto___289597 = cljs.core.seq.call(null,seq__289549_289584);
if(temp__4657__auto___289597){
var seq__289549_289598__$1 = temp__4657__auto___289597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289549_289598__$1)){
var c__36002__auto___289600 = cljs.core.chunk_first.call(null,seq__289549_289598__$1);
var G__289604 = cljs.core.chunk_rest.call(null,seq__289549_289598__$1);
var G__289605 = c__36002__auto___289600;
var G__289606 = cljs.core.count.call(null,c__36002__auto___289600);
var G__289607 = (0);
seq__289549_289584 = G__289604;
chunk__289551_289585 = G__289605;
count__289552_289586 = G__289606;
i__289553_289587 = G__289607;
continue;
} else {
var vec__289557_289609 = cljs.core.first.call(null,seq__289549_289598__$1);
var actual_type_289610 = cljs.core.nth.call(null,vec__289557_289609,(0),null);
var factory_289611 = cljs.core.nth.call(null,vec__289557_289609,(1),null);
var canonical_f_289612 = (cljs.core.truth_(selector_289571)?cljs.core.partial.call(null,dommy.core.live_listener,elem_289570,selector_289571):cljs.core.identity).call(null,factory_289611.call(null,f_289580));
dommy.core.update_event_listeners_BANG_.call(null,elem_289570,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_289571,actual_type_289610,f_289580], null),canonical_f_289612);

if(cljs.core.truth_(elem_289570.addEventListener)){
elem_289570.addEventListener(cljs.core.name.call(null,actual_type_289610),canonical_f_289612);
} else {
elem_289570.attachEvent(cljs.core.name.call(null,actual_type_289610),canonical_f_289612);
}

var G__289621 = cljs.core.next.call(null,seq__289549_289598__$1);
var G__289622 = null;
var G__289623 = (0);
var G__289624 = (0);
seq__289549_289584 = G__289621;
chunk__289551_289585 = G__289622;
count__289552_289586 = G__289623;
i__289553_289587 = G__289624;
continue;
}
} else {
}
}
break;
}

var G__289625 = seq__289539_289573;
var G__289626 = chunk__289546_289574;
var G__289627 = count__289547_289575;
var G__289628 = (i__289548_289576 + (1));
seq__289539_289573 = G__289625;
chunk__289546_289574 = G__289626;
count__289547_289575 = G__289627;
i__289548_289576 = G__289628;
continue;
} else {
var temp__4657__auto___289631 = cljs.core.seq.call(null,seq__289539_289573);
if(temp__4657__auto___289631){
var seq__289539_289632__$1 = temp__4657__auto___289631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289539_289632__$1)){
var c__36002__auto___289633 = cljs.core.chunk_first.call(null,seq__289539_289632__$1);
var G__289634 = cljs.core.chunk_rest.call(null,seq__289539_289632__$1);
var G__289635 = c__36002__auto___289633;
var G__289636 = cljs.core.count.call(null,c__36002__auto___289633);
var G__289637 = (0);
seq__289539_289573 = G__289634;
chunk__289546_289574 = G__289635;
count__289547_289575 = G__289636;
i__289548_289576 = G__289637;
continue;
} else {
var vec__289558_289638 = cljs.core.first.call(null,seq__289539_289632__$1);
var orig_type_289639 = cljs.core.nth.call(null,vec__289558_289638,(0),null);
var f_289640 = cljs.core.nth.call(null,vec__289558_289638,(1),null);
var seq__289540_289641 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_289639,cljs.core.PersistentArrayMap.fromArray([orig_type_289639,cljs.core.identity], true, false)));
var chunk__289542_289642 = null;
var count__289543_289643 = (0);
var i__289544_289644 = (0);
while(true){
if((i__289544_289644 < count__289543_289643)){
var vec__289561_289646 = cljs.core._nth.call(null,chunk__289542_289642,i__289544_289644);
var actual_type_289647 = cljs.core.nth.call(null,vec__289561_289646,(0),null);
var factory_289648 = cljs.core.nth.call(null,vec__289561_289646,(1),null);
var canonical_f_289649 = (cljs.core.truth_(selector_289571)?cljs.core.partial.call(null,dommy.core.live_listener,elem_289570,selector_289571):cljs.core.identity).call(null,factory_289648.call(null,f_289640));
dommy.core.update_event_listeners_BANG_.call(null,elem_289570,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_289571,actual_type_289647,f_289640], null),canonical_f_289649);

if(cljs.core.truth_(elem_289570.addEventListener)){
elem_289570.addEventListener(cljs.core.name.call(null,actual_type_289647),canonical_f_289649);
} else {
elem_289570.attachEvent(cljs.core.name.call(null,actual_type_289647),canonical_f_289649);
}

var G__289651 = seq__289540_289641;
var G__289652 = chunk__289542_289642;
var G__289653 = count__289543_289643;
var G__289654 = (i__289544_289644 + (1));
seq__289540_289641 = G__289651;
chunk__289542_289642 = G__289652;
count__289543_289643 = G__289653;
i__289544_289644 = G__289654;
continue;
} else {
var temp__4657__auto___289655__$1 = cljs.core.seq.call(null,seq__289540_289641);
if(temp__4657__auto___289655__$1){
var seq__289540_289656__$1 = temp__4657__auto___289655__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289540_289656__$1)){
var c__36002__auto___289657 = cljs.core.chunk_first.call(null,seq__289540_289656__$1);
var G__289658 = cljs.core.chunk_rest.call(null,seq__289540_289656__$1);
var G__289659 = c__36002__auto___289657;
var G__289660 = cljs.core.count.call(null,c__36002__auto___289657);
var G__289661 = (0);
seq__289540_289641 = G__289658;
chunk__289542_289642 = G__289659;
count__289543_289643 = G__289660;
i__289544_289644 = G__289661;
continue;
} else {
var vec__289564_289662 = cljs.core.first.call(null,seq__289540_289656__$1);
var actual_type_289663 = cljs.core.nth.call(null,vec__289564_289662,(0),null);
var factory_289664 = cljs.core.nth.call(null,vec__289564_289662,(1),null);
var canonical_f_289669 = (cljs.core.truth_(selector_289571)?cljs.core.partial.call(null,dommy.core.live_listener,elem_289570,selector_289571):cljs.core.identity).call(null,factory_289664.call(null,f_289640));
dommy.core.update_event_listeners_BANG_.call(null,elem_289570,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_289571,actual_type_289663,f_289640], null),canonical_f_289669);

if(cljs.core.truth_(elem_289570.addEventListener)){
elem_289570.addEventListener(cljs.core.name.call(null,actual_type_289663),canonical_f_289669);
} else {
elem_289570.attachEvent(cljs.core.name.call(null,actual_type_289663),canonical_f_289669);
}

var G__289672 = cljs.core.next.call(null,seq__289540_289656__$1);
var G__289673 = null;
var G__289674 = (0);
var G__289675 = (0);
seq__289540_289641 = G__289672;
chunk__289542_289642 = G__289673;
count__289543_289643 = G__289674;
i__289544_289644 = G__289675;
continue;
}
} else {
}
}
break;
}

var G__289680 = cljs.core.next.call(null,seq__289539_289632__$1);
var G__289681 = null;
var G__289682 = (0);
var G__289683 = (0);
seq__289539_289573 = G__289680;
chunk__289546_289574 = G__289681;
count__289547_289575 = G__289682;
i__289548_289576 = G__289683;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq289536){
var G__289537 = cljs.core.first.call(null,seq289536);
var seq289536__$1 = cljs.core.next.call(null,seq289536);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__289537,seq289536__$1);
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
var len__36260__auto___289717 = arguments.length;
var i__36261__auto___289718 = (0);
while(true){
if((i__36261__auto___289718 < len__36260__auto___289717)){
args__36267__auto__.push((arguments[i__36261__auto___289718]));

var G__289719 = (i__36261__auto___289718 + (1));
i__36261__auto___289718 = G__289719;
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

var vec__289687_289731 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_289732 = cljs.core.nth.call(null,vec__289687_289731,(0),null);
var selector_289733 = cljs.core.nth.call(null,vec__289687_289731,(1),null);
var seq__289688_289734 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__289695_289735 = null;
var count__289696_289736 = (0);
var i__289697_289737 = (0);
while(true){
if((i__289697_289737 < count__289696_289736)){
var vec__289704_289738 = cljs.core._nth.call(null,chunk__289695_289735,i__289697_289737);
var orig_type_289739 = cljs.core.nth.call(null,vec__289704_289738,(0),null);
var f_289740 = cljs.core.nth.call(null,vec__289704_289738,(1),null);
var seq__289698_289741 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_289739,cljs.core.PersistentArrayMap.fromArray([orig_type_289739,cljs.core.identity], true, false)));
var chunk__289700_289742 = null;
var count__289701_289743 = (0);
var i__289702_289744 = (0);
while(true){
if((i__289702_289744 < count__289701_289743)){
var vec__289705_289745 = cljs.core._nth.call(null,chunk__289700_289742,i__289702_289744);
var actual_type_289746 = cljs.core.nth.call(null,vec__289705_289745,(0),null);
var __289747 = cljs.core.nth.call(null,vec__289705_289745,(1),null);
var keys_289748 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_289733,actual_type_289746,f_289740], null);
var canonical_f_289749 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_289732),keys_289748);
dommy.core.update_event_listeners_BANG_.call(null,elem_289732,dommy.utils.dissoc_in,keys_289748);

if(cljs.core.truth_(elem_289732.removeEventListener)){
elem_289732.removeEventListener(cljs.core.name.call(null,actual_type_289746),canonical_f_289749);
} else {
elem_289732.detachEvent(cljs.core.name.call(null,actual_type_289746),canonical_f_289749);
}

var G__289756 = seq__289698_289741;
var G__289757 = chunk__289700_289742;
var G__289758 = count__289701_289743;
var G__289759 = (i__289702_289744 + (1));
seq__289698_289741 = G__289756;
chunk__289700_289742 = G__289757;
count__289701_289743 = G__289758;
i__289702_289744 = G__289759;
continue;
} else {
var temp__4657__auto___289765 = cljs.core.seq.call(null,seq__289698_289741);
if(temp__4657__auto___289765){
var seq__289698_289766__$1 = temp__4657__auto___289765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289698_289766__$1)){
var c__36002__auto___289768 = cljs.core.chunk_first.call(null,seq__289698_289766__$1);
var G__289769 = cljs.core.chunk_rest.call(null,seq__289698_289766__$1);
var G__289770 = c__36002__auto___289768;
var G__289771 = cljs.core.count.call(null,c__36002__auto___289768);
var G__289772 = (0);
seq__289698_289741 = G__289769;
chunk__289700_289742 = G__289770;
count__289701_289743 = G__289771;
i__289702_289744 = G__289772;
continue;
} else {
var vec__289708_289774 = cljs.core.first.call(null,seq__289698_289766__$1);
var actual_type_289775 = cljs.core.nth.call(null,vec__289708_289774,(0),null);
var __289776 = cljs.core.nth.call(null,vec__289708_289774,(1),null);
var keys_289785 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_289733,actual_type_289775,f_289740], null);
var canonical_f_289786 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_289732),keys_289785);
dommy.core.update_event_listeners_BANG_.call(null,elem_289732,dommy.utils.dissoc_in,keys_289785);

if(cljs.core.truth_(elem_289732.removeEventListener)){
elem_289732.removeEventListener(cljs.core.name.call(null,actual_type_289775),canonical_f_289786);
} else {
elem_289732.detachEvent(cljs.core.name.call(null,actual_type_289775),canonical_f_289786);
}

var G__289799 = cljs.core.next.call(null,seq__289698_289766__$1);
var G__289800 = null;
var G__289801 = (0);
var G__289802 = (0);
seq__289698_289741 = G__289799;
chunk__289700_289742 = G__289800;
count__289701_289743 = G__289801;
i__289702_289744 = G__289802;
continue;
}
} else {
}
}
break;
}

var G__289804 = seq__289688_289734;
var G__289805 = chunk__289695_289735;
var G__289806 = count__289696_289736;
var G__289807 = (i__289697_289737 + (1));
seq__289688_289734 = G__289804;
chunk__289695_289735 = G__289805;
count__289696_289736 = G__289806;
i__289697_289737 = G__289807;
continue;
} else {
var temp__4657__auto___289808 = cljs.core.seq.call(null,seq__289688_289734);
if(temp__4657__auto___289808){
var seq__289688_289809__$1 = temp__4657__auto___289808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289688_289809__$1)){
var c__36002__auto___289810 = cljs.core.chunk_first.call(null,seq__289688_289809__$1);
var G__289811 = cljs.core.chunk_rest.call(null,seq__289688_289809__$1);
var G__289812 = c__36002__auto___289810;
var G__289813 = cljs.core.count.call(null,c__36002__auto___289810);
var G__289814 = (0);
seq__289688_289734 = G__289811;
chunk__289695_289735 = G__289812;
count__289696_289736 = G__289813;
i__289697_289737 = G__289814;
continue;
} else {
var vec__289710_289815 = cljs.core.first.call(null,seq__289688_289809__$1);
var orig_type_289816 = cljs.core.nth.call(null,vec__289710_289815,(0),null);
var f_289817 = cljs.core.nth.call(null,vec__289710_289815,(1),null);
var seq__289689_289818 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_289816,cljs.core.PersistentArrayMap.fromArray([orig_type_289816,cljs.core.identity], true, false)));
var chunk__289691_289819 = null;
var count__289692_289820 = (0);
var i__289693_289821 = (0);
while(true){
if((i__289693_289821 < count__289692_289820)){
var vec__289711_289822 = cljs.core._nth.call(null,chunk__289691_289819,i__289693_289821);
var actual_type_289823 = cljs.core.nth.call(null,vec__289711_289822,(0),null);
var __289824 = cljs.core.nth.call(null,vec__289711_289822,(1),null);
var keys_289825 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_289733,actual_type_289823,f_289817], null);
var canonical_f_289826 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_289732),keys_289825);
dommy.core.update_event_listeners_BANG_.call(null,elem_289732,dommy.utils.dissoc_in,keys_289825);

if(cljs.core.truth_(elem_289732.removeEventListener)){
elem_289732.removeEventListener(cljs.core.name.call(null,actual_type_289823),canonical_f_289826);
} else {
elem_289732.detachEvent(cljs.core.name.call(null,actual_type_289823),canonical_f_289826);
}

var G__289828 = seq__289689_289818;
var G__289829 = chunk__289691_289819;
var G__289830 = count__289692_289820;
var G__289831 = (i__289693_289821 + (1));
seq__289689_289818 = G__289828;
chunk__289691_289819 = G__289829;
count__289692_289820 = G__289830;
i__289693_289821 = G__289831;
continue;
} else {
var temp__4657__auto___289832__$1 = cljs.core.seq.call(null,seq__289689_289818);
if(temp__4657__auto___289832__$1){
var seq__289689_289833__$1 = temp__4657__auto___289832__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289689_289833__$1)){
var c__36002__auto___289834 = cljs.core.chunk_first.call(null,seq__289689_289833__$1);
var G__289835 = cljs.core.chunk_rest.call(null,seq__289689_289833__$1);
var G__289836 = c__36002__auto___289834;
var G__289837 = cljs.core.count.call(null,c__36002__auto___289834);
var G__289838 = (0);
seq__289689_289818 = G__289835;
chunk__289691_289819 = G__289836;
count__289692_289820 = G__289837;
i__289693_289821 = G__289838;
continue;
} else {
var vec__289716_289839 = cljs.core.first.call(null,seq__289689_289833__$1);
var actual_type_289840 = cljs.core.nth.call(null,vec__289716_289839,(0),null);
var __289841 = cljs.core.nth.call(null,vec__289716_289839,(1),null);
var keys_289847 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_289733,actual_type_289840,f_289817], null);
var canonical_f_289848 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_289732),keys_289847);
dommy.core.update_event_listeners_BANG_.call(null,elem_289732,dommy.utils.dissoc_in,keys_289847);

if(cljs.core.truth_(elem_289732.removeEventListener)){
elem_289732.removeEventListener(cljs.core.name.call(null,actual_type_289840),canonical_f_289848);
} else {
elem_289732.detachEvent(cljs.core.name.call(null,actual_type_289840),canonical_f_289848);
}

var G__289883 = cljs.core.next.call(null,seq__289689_289833__$1);
var G__289884 = null;
var G__289885 = (0);
var G__289886 = (0);
seq__289689_289818 = G__289883;
chunk__289691_289819 = G__289884;
count__289692_289820 = G__289885;
i__289693_289821 = G__289886;
continue;
}
} else {
}
}
break;
}

var G__289889 = cljs.core.next.call(null,seq__289688_289809__$1);
var G__289890 = null;
var G__289891 = (0);
var G__289892 = (0);
seq__289688_289734 = G__289889;
chunk__289695_289735 = G__289890;
count__289696_289736 = G__289891;
i__289697_289737 = G__289892;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq289685){
var G__289686 = cljs.core.first.call(null,seq289685);
var seq289685__$1 = cljs.core.next.call(null,seq289685);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__289686,seq289685__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__36267__auto__ = [];
var len__36260__auto___289905 = arguments.length;
var i__36261__auto___289906 = (0);
while(true){
if((i__36261__auto___289906 < len__36260__auto___289905)){
args__36267__auto__.push((arguments[i__36261__auto___289906]));

var G__289907 = (i__36261__auto___289906 + (1));
i__36261__auto___289906 = G__289907;
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

var vec__289897_289908 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_289909 = cljs.core.nth.call(null,vec__289897_289908,(0),null);
var selector_289910 = cljs.core.nth.call(null,vec__289897_289908,(1),null);
var seq__289898_289911 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__289899_289912 = null;
var count__289900_289913 = (0);
var i__289901_289914 = (0);
while(true){
if((i__289901_289914 < count__289900_289913)){
var vec__289902_289915 = cljs.core._nth.call(null,chunk__289899_289912,i__289901_289914);
var type_289916 = cljs.core.nth.call(null,vec__289902_289915,(0),null);
var f_289917 = cljs.core.nth.call(null,vec__289902_289915,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_289916,((function (seq__289898_289911,chunk__289899_289912,count__289900_289913,i__289901_289914,vec__289902_289915,type_289916,f_289917,vec__289897_289908,elem_289909,selector_289910){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_289916,dommy$core$this_fn);

return f_289917.call(null,e);
});})(seq__289898_289911,chunk__289899_289912,count__289900_289913,i__289901_289914,vec__289902_289915,type_289916,f_289917,vec__289897_289908,elem_289909,selector_289910))
);

var G__289919 = seq__289898_289911;
var G__289920 = chunk__289899_289912;
var G__289921 = count__289900_289913;
var G__289922 = (i__289901_289914 + (1));
seq__289898_289911 = G__289919;
chunk__289899_289912 = G__289920;
count__289900_289913 = G__289921;
i__289901_289914 = G__289922;
continue;
} else {
var temp__4657__auto___289923 = cljs.core.seq.call(null,seq__289898_289911);
if(temp__4657__auto___289923){
var seq__289898_289924__$1 = temp__4657__auto___289923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289898_289924__$1)){
var c__36002__auto___289925 = cljs.core.chunk_first.call(null,seq__289898_289924__$1);
var G__289926 = cljs.core.chunk_rest.call(null,seq__289898_289924__$1);
var G__289927 = c__36002__auto___289925;
var G__289928 = cljs.core.count.call(null,c__36002__auto___289925);
var G__289929 = (0);
seq__289898_289911 = G__289926;
chunk__289899_289912 = G__289927;
count__289900_289913 = G__289928;
i__289901_289914 = G__289929;
continue;
} else {
var vec__289903_289930 = cljs.core.first.call(null,seq__289898_289924__$1);
var type_289931 = cljs.core.nth.call(null,vec__289903_289930,(0),null);
var f_289932 = cljs.core.nth.call(null,vec__289903_289930,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_289931,((function (seq__289898_289911,chunk__289899_289912,count__289900_289913,i__289901_289914,vec__289903_289930,type_289931,f_289932,seq__289898_289924__$1,temp__4657__auto___289923,vec__289897_289908,elem_289909,selector_289910){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_289931,dommy$core$this_fn);

return f_289932.call(null,e);
});})(seq__289898_289911,chunk__289899_289912,count__289900_289913,i__289901_289914,vec__289903_289930,type_289931,f_289932,seq__289898_289924__$1,temp__4657__auto___289923,vec__289897_289908,elem_289909,selector_289910))
);

var G__289937 = cljs.core.next.call(null,seq__289898_289924__$1);
var G__289938 = null;
var G__289939 = (0);
var G__289940 = (0);
seq__289898_289911 = G__289937;
chunk__289899_289912 = G__289938;
count__289900_289913 = G__289939;
i__289901_289914 = G__289940;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq289894){
var G__289895 = cljs.core.first.call(null,seq289894);
var seq289894__$1 = cljs.core.next.call(null,seq289894);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__289895,seq289894__$1);
});
