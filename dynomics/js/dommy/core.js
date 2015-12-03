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
var or__24165__auto__ = elem.textContent;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
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
var args52533 = [];
var len__25223__auto___52536 = arguments.length;
var i__25224__auto___52537 = (0);
while(true){
if((i__25224__auto___52537 < len__25223__auto___52536)){
args52533.push((arguments[i__25224__auto___52537]));

var G__52538 = (i__25224__auto___52537 + (1));
i__25224__auto___52537 = G__52538;
continue;
} else {
}
break;
}

var G__52535 = args52533.length;
switch (G__52535) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52533.length)].join('')));

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
var args52540 = [];
var len__25223__auto___52543 = arguments.length;
var i__25224__auto___52544 = (0);
while(true){
if((i__25224__auto___52544 < len__25223__auto___52543)){
args52540.push((arguments[i__25224__auto___52544]));

var G__52545 = (i__25224__auto___52544 + (1));
i__25224__auto___52544 = G__52545;
continue;
} else {
}
break;
}

var G__52542 = args52540.length;
switch (G__52542) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52540.length)].join('')));

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
var args52548 = [];
var len__25223__auto___52551 = arguments.length;
var i__25224__auto___52552 = (0);
while(true){
if((i__25224__auto___52552 < len__25223__auto___52551)){
args52548.push((arguments[i__25224__auto___52552]));

var G__52553 = (i__25224__auto___52552 + (1));
i__25224__auto___52552 = G__52553;
continue;
} else {
}
break;
}

var G__52550 = args52548.length;
switch (G__52550) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52548.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__52547_SHARP_){
return !((p1__52547_SHARP_ === base));
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
var args__25230__auto__ = [];
var len__25223__auto___52563 = arguments.length;
var i__25224__auto___52564 = (0);
while(true){
if((i__25224__auto___52564 < len__25223__auto___52563)){
args__25230__auto__.push((arguments[i__25224__auto___52564]));

var G__52565 = (i__25224__auto___52564 + (1));
i__25224__auto___52564 = G__52565;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((1) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25231__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__52557_52566 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__52558_52567 = null;
var count__52559_52568 = (0);
var i__52560_52569 = (0);
while(true){
if((i__52560_52569 < count__52559_52568)){
var vec__52561_52570 = cljs.core._nth.call(null,chunk__52558_52567,i__52560_52569);
var k_52571 = cljs.core.nth.call(null,vec__52561_52570,(0),null);
var v_52572 = cljs.core.nth.call(null,vec__52561_52570,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_52571),v_52572);

var G__52573 = seq__52557_52566;
var G__52574 = chunk__52558_52567;
var G__52575 = count__52559_52568;
var G__52576 = (i__52560_52569 + (1));
seq__52557_52566 = G__52573;
chunk__52558_52567 = G__52574;
count__52559_52568 = G__52575;
i__52560_52569 = G__52576;
continue;
} else {
var temp__4425__auto___52577 = cljs.core.seq.call(null,seq__52557_52566);
if(temp__4425__auto___52577){
var seq__52557_52578__$1 = temp__4425__auto___52577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52557_52578__$1)){
var c__24968__auto___52579 = cljs.core.chunk_first.call(null,seq__52557_52578__$1);
var G__52580 = cljs.core.chunk_rest.call(null,seq__52557_52578__$1);
var G__52581 = c__24968__auto___52579;
var G__52582 = cljs.core.count.call(null,c__24968__auto___52579);
var G__52583 = (0);
seq__52557_52566 = G__52580;
chunk__52558_52567 = G__52581;
count__52559_52568 = G__52582;
i__52560_52569 = G__52583;
continue;
} else {
var vec__52562_52584 = cljs.core.first.call(null,seq__52557_52578__$1);
var k_52585 = cljs.core.nth.call(null,vec__52562_52584,(0),null);
var v_52586 = cljs.core.nth.call(null,vec__52562_52584,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_52585),v_52586);

var G__52587 = cljs.core.next.call(null,seq__52557_52578__$1);
var G__52588 = null;
var G__52589 = (0);
var G__52590 = (0);
seq__52557_52566 = G__52587;
chunk__52558_52567 = G__52588;
count__52559_52568 = G__52589;
i__52560_52569 = G__52590;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq52555){
var G__52556 = cljs.core.first.call(null,seq52555);
var seq52555__$1 = cljs.core.next.call(null,seq52555);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52556,seq52555__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__25230__auto__ = [];
var len__25223__auto___52597 = arguments.length;
var i__25224__auto___52598 = (0);
while(true){
if((i__25224__auto___52598 < len__25223__auto___52597)){
args__25230__auto__.push((arguments[i__25224__auto___52598]));

var G__52599 = (i__25224__auto___52598 + (1));
i__25224__auto___52598 = G__52599;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((1) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25231__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__52593_52600 = cljs.core.seq.call(null,keywords);
var chunk__52594_52601 = null;
var count__52595_52602 = (0);
var i__52596_52603 = (0);
while(true){
if((i__52596_52603 < count__52595_52602)){
var kw_52604 = cljs.core._nth.call(null,chunk__52594_52601,i__52596_52603);
style.removeProperty(dommy.utils.as_str.call(null,kw_52604));

var G__52605 = seq__52593_52600;
var G__52606 = chunk__52594_52601;
var G__52607 = count__52595_52602;
var G__52608 = (i__52596_52603 + (1));
seq__52593_52600 = G__52605;
chunk__52594_52601 = G__52606;
count__52595_52602 = G__52607;
i__52596_52603 = G__52608;
continue;
} else {
var temp__4425__auto___52609 = cljs.core.seq.call(null,seq__52593_52600);
if(temp__4425__auto___52609){
var seq__52593_52610__$1 = temp__4425__auto___52609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52593_52610__$1)){
var c__24968__auto___52611 = cljs.core.chunk_first.call(null,seq__52593_52610__$1);
var G__52612 = cljs.core.chunk_rest.call(null,seq__52593_52610__$1);
var G__52613 = c__24968__auto___52611;
var G__52614 = cljs.core.count.call(null,c__24968__auto___52611);
var G__52615 = (0);
seq__52593_52600 = G__52612;
chunk__52594_52601 = G__52613;
count__52595_52602 = G__52614;
i__52596_52603 = G__52615;
continue;
} else {
var kw_52616 = cljs.core.first.call(null,seq__52593_52610__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_52616));

var G__52617 = cljs.core.next.call(null,seq__52593_52610__$1);
var G__52618 = null;
var G__52619 = (0);
var G__52620 = (0);
seq__52593_52600 = G__52617;
chunk__52594_52601 = G__52618;
count__52595_52602 = G__52619;
i__52596_52603 = G__52620;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq52591){
var G__52592 = cljs.core.first.call(null,seq52591);
var seq52591__$1 = cljs.core.next.call(null,seq52591);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52592,seq52591__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__25230__auto__ = [];
var len__25223__auto___52629 = arguments.length;
var i__25224__auto___52630 = (0);
while(true){
if((i__25224__auto___52630 < len__25223__auto___52629)){
args__25230__auto__.push((arguments[i__25224__auto___52630]));

var G__52631 = (i__25224__auto___52630 + (1));
i__25224__auto___52630 = G__52631;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((1) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25231__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__52623_52632 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__52624_52633 = null;
var count__52625_52634 = (0);
var i__52626_52635 = (0);
while(true){
if((i__52626_52635 < count__52625_52634)){
var vec__52627_52636 = cljs.core._nth.call(null,chunk__52624_52633,i__52626_52635);
var k_52637 = cljs.core.nth.call(null,vec__52627_52636,(0),null);
var v_52638 = cljs.core.nth.call(null,vec__52627_52636,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_52637,[cljs.core.str(v_52638),cljs.core.str("px")].join(''));

var G__52639 = seq__52623_52632;
var G__52640 = chunk__52624_52633;
var G__52641 = count__52625_52634;
var G__52642 = (i__52626_52635 + (1));
seq__52623_52632 = G__52639;
chunk__52624_52633 = G__52640;
count__52625_52634 = G__52641;
i__52626_52635 = G__52642;
continue;
} else {
var temp__4425__auto___52643 = cljs.core.seq.call(null,seq__52623_52632);
if(temp__4425__auto___52643){
var seq__52623_52644__$1 = temp__4425__auto___52643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52623_52644__$1)){
var c__24968__auto___52645 = cljs.core.chunk_first.call(null,seq__52623_52644__$1);
var G__52646 = cljs.core.chunk_rest.call(null,seq__52623_52644__$1);
var G__52647 = c__24968__auto___52645;
var G__52648 = cljs.core.count.call(null,c__24968__auto___52645);
var G__52649 = (0);
seq__52623_52632 = G__52646;
chunk__52624_52633 = G__52647;
count__52625_52634 = G__52648;
i__52626_52635 = G__52649;
continue;
} else {
var vec__52628_52650 = cljs.core.first.call(null,seq__52623_52644__$1);
var k_52651 = cljs.core.nth.call(null,vec__52628_52650,(0),null);
var v_52652 = cljs.core.nth.call(null,vec__52628_52650,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_52651,[cljs.core.str(v_52652),cljs.core.str("px")].join(''));

var G__52653 = cljs.core.next.call(null,seq__52623_52644__$1);
var G__52654 = null;
var G__52655 = (0);
var G__52656 = (0);
seq__52623_52632 = G__52653;
chunk__52624_52633 = G__52654;
count__52625_52634 = G__52655;
i__52626_52635 = G__52656;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq52621){
var G__52622 = cljs.core.first.call(null,seq52621);
var seq52621__$1 = cljs.core.next.call(null,seq52621);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52622,seq52621__$1);
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
var args52657 = [];
var len__25223__auto___52672 = arguments.length;
var i__25224__auto___52673 = (0);
while(true){
if((i__25224__auto___52673 < len__25223__auto___52672)){
args52657.push((arguments[i__25224__auto___52673]));

var G__52674 = (i__25224__auto___52673 + (1));
i__25224__auto___52673 = G__52674;
continue;
} else {
}
break;
}

var G__52663 = args52657.length;
switch (G__52663) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25242__auto__ = (new cljs.core.IndexedSeq(args52657.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25242__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__52664 = elem;
(G__52664[k__$1] = v);

return G__52664;
} else {
var G__52665 = elem;
G__52665.setAttribute(k__$1,v);

return G__52665;
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

var seq__52666_52676 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__52667_52677 = null;
var count__52668_52678 = (0);
var i__52669_52679 = (0);
while(true){
if((i__52669_52679 < count__52668_52678)){
var vec__52670_52680 = cljs.core._nth.call(null,chunk__52667_52677,i__52669_52679);
var k_52681__$1 = cljs.core.nth.call(null,vec__52670_52680,(0),null);
var v_52682__$1 = cljs.core.nth.call(null,vec__52670_52680,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_52681__$1,v_52682__$1);

var G__52683 = seq__52666_52676;
var G__52684 = chunk__52667_52677;
var G__52685 = count__52668_52678;
var G__52686 = (i__52669_52679 + (1));
seq__52666_52676 = G__52683;
chunk__52667_52677 = G__52684;
count__52668_52678 = G__52685;
i__52669_52679 = G__52686;
continue;
} else {
var temp__4425__auto___52687 = cljs.core.seq.call(null,seq__52666_52676);
if(temp__4425__auto___52687){
var seq__52666_52688__$1 = temp__4425__auto___52687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52666_52688__$1)){
var c__24968__auto___52689 = cljs.core.chunk_first.call(null,seq__52666_52688__$1);
var G__52690 = cljs.core.chunk_rest.call(null,seq__52666_52688__$1);
var G__52691 = c__24968__auto___52689;
var G__52692 = cljs.core.count.call(null,c__24968__auto___52689);
var G__52693 = (0);
seq__52666_52676 = G__52690;
chunk__52667_52677 = G__52691;
count__52668_52678 = G__52692;
i__52669_52679 = G__52693;
continue;
} else {
var vec__52671_52694 = cljs.core.first.call(null,seq__52666_52688__$1);
var k_52695__$1 = cljs.core.nth.call(null,vec__52671_52694,(0),null);
var v_52696__$1 = cljs.core.nth.call(null,vec__52671_52694,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_52695__$1,v_52696__$1);

var G__52697 = cljs.core.next.call(null,seq__52666_52688__$1);
var G__52698 = null;
var G__52699 = (0);
var G__52700 = (0);
seq__52666_52676 = G__52697;
chunk__52667_52677 = G__52698;
count__52668_52678 = G__52699;
i__52669_52679 = G__52700;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq52658){
var G__52659 = cljs.core.first.call(null,seq52658);
var seq52658__$1 = cljs.core.next.call(null,seq52658);
var G__52660 = cljs.core.first.call(null,seq52658__$1);
var seq52658__$2 = cljs.core.next.call(null,seq52658__$1);
var G__52661 = cljs.core.first.call(null,seq52658__$2);
var seq52658__$3 = cljs.core.next.call(null,seq52658__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52659,G__52660,G__52661,seq52658__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args52701 = [];
var len__25223__auto___52711 = arguments.length;
var i__25224__auto___52712 = (0);
while(true){
if((i__25224__auto___52712 < len__25223__auto___52711)){
args52701.push((arguments[i__25224__auto___52712]));

var G__52713 = (i__25224__auto___52712 + (1));
i__25224__auto___52712 = G__52713;
continue;
} else {
}
break;
}

var G__52706 = args52701.length;
switch (G__52706) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25242__auto__ = (new cljs.core.IndexedSeq(args52701.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25242__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_52715__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_52715__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_52715__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__52707_52716 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__52708_52717 = null;
var count__52709_52718 = (0);
var i__52710_52719 = (0);
while(true){
if((i__52710_52719 < count__52709_52718)){
var k_52720__$1 = cljs.core._nth.call(null,chunk__52708_52717,i__52710_52719);
dommy.core.remove_attr_BANG_.call(null,elem,k_52720__$1);

var G__52721 = seq__52707_52716;
var G__52722 = chunk__52708_52717;
var G__52723 = count__52709_52718;
var G__52724 = (i__52710_52719 + (1));
seq__52707_52716 = G__52721;
chunk__52708_52717 = G__52722;
count__52709_52718 = G__52723;
i__52710_52719 = G__52724;
continue;
} else {
var temp__4425__auto___52725 = cljs.core.seq.call(null,seq__52707_52716);
if(temp__4425__auto___52725){
var seq__52707_52726__$1 = temp__4425__auto___52725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52707_52726__$1)){
var c__24968__auto___52727 = cljs.core.chunk_first.call(null,seq__52707_52726__$1);
var G__52728 = cljs.core.chunk_rest.call(null,seq__52707_52726__$1);
var G__52729 = c__24968__auto___52727;
var G__52730 = cljs.core.count.call(null,c__24968__auto___52727);
var G__52731 = (0);
seq__52707_52716 = G__52728;
chunk__52708_52717 = G__52729;
count__52709_52718 = G__52730;
i__52710_52719 = G__52731;
continue;
} else {
var k_52732__$1 = cljs.core.first.call(null,seq__52707_52726__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_52732__$1);

var G__52733 = cljs.core.next.call(null,seq__52707_52726__$1);
var G__52734 = null;
var G__52735 = (0);
var G__52736 = (0);
seq__52707_52716 = G__52733;
chunk__52708_52717 = G__52734;
count__52709_52718 = G__52735;
i__52710_52719 = G__52736;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq52702){
var G__52703 = cljs.core.first.call(null,seq52702);
var seq52702__$1 = cljs.core.next.call(null,seq52702);
var G__52704 = cljs.core.first.call(null,seq52702__$1);
var seq52702__$2 = cljs.core.next.call(null,seq52702__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52703,G__52704,seq52702__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args52737 = [];
var len__25223__auto___52740 = arguments.length;
var i__25224__auto___52741 = (0);
while(true){
if((i__25224__auto___52741 < len__25223__auto___52740)){
args52737.push((arguments[i__25224__auto___52741]));

var G__52742 = (i__25224__auto___52741 + (1));
i__25224__auto___52741 = G__52742;
continue;
} else {
}
break;
}

var G__52739 = args52737.length;
switch (G__52739) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52737.length)].join('')));

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
var args52744 = [];
var len__25223__auto___52762 = arguments.length;
var i__25224__auto___52763 = (0);
while(true){
if((i__25224__auto___52763 < len__25223__auto___52762)){
args52744.push((arguments[i__25224__auto___52763]));

var G__52764 = (i__25224__auto___52763 + (1));
i__25224__auto___52763 = G__52764;
continue;
} else {
}
break;
}

var G__52749 = args52744.length;
switch (G__52749) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25242__auto__ = (new cljs.core.IndexedSeq(args52744.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25242__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4423__auto___52766 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___52766)){
var class_list_52767 = temp__4423__auto___52766;
var seq__52750_52768 = cljs.core.seq.call(null,classes__$1);
var chunk__52751_52769 = null;
var count__52752_52770 = (0);
var i__52753_52771 = (0);
while(true){
if((i__52753_52771 < count__52752_52770)){
var c_52772 = cljs.core._nth.call(null,chunk__52751_52769,i__52753_52771);
class_list_52767.add(c_52772);

var G__52773 = seq__52750_52768;
var G__52774 = chunk__52751_52769;
var G__52775 = count__52752_52770;
var G__52776 = (i__52753_52771 + (1));
seq__52750_52768 = G__52773;
chunk__52751_52769 = G__52774;
count__52752_52770 = G__52775;
i__52753_52771 = G__52776;
continue;
} else {
var temp__4425__auto___52777 = cljs.core.seq.call(null,seq__52750_52768);
if(temp__4425__auto___52777){
var seq__52750_52778__$1 = temp__4425__auto___52777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52750_52778__$1)){
var c__24968__auto___52779 = cljs.core.chunk_first.call(null,seq__52750_52778__$1);
var G__52780 = cljs.core.chunk_rest.call(null,seq__52750_52778__$1);
var G__52781 = c__24968__auto___52779;
var G__52782 = cljs.core.count.call(null,c__24968__auto___52779);
var G__52783 = (0);
seq__52750_52768 = G__52780;
chunk__52751_52769 = G__52781;
count__52752_52770 = G__52782;
i__52753_52771 = G__52783;
continue;
} else {
var c_52784 = cljs.core.first.call(null,seq__52750_52778__$1);
class_list_52767.add(c_52784);

var G__52785 = cljs.core.next.call(null,seq__52750_52778__$1);
var G__52786 = null;
var G__52787 = (0);
var G__52788 = (0);
seq__52750_52768 = G__52785;
chunk__52751_52769 = G__52786;
count__52752_52770 = G__52787;
i__52753_52771 = G__52788;
continue;
}
} else {
}
}
break;
}
} else {
var seq__52754_52789 = cljs.core.seq.call(null,classes__$1);
var chunk__52755_52790 = null;
var count__52756_52791 = (0);
var i__52757_52792 = (0);
while(true){
if((i__52757_52792 < count__52756_52791)){
var c_52793 = cljs.core._nth.call(null,chunk__52755_52790,i__52757_52792);
var class_name_52794 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_52794,c_52793))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_52794 === ""))?c_52793:[cljs.core.str(class_name_52794),cljs.core.str(" "),cljs.core.str(c_52793)].join('')));
}

var G__52795 = seq__52754_52789;
var G__52796 = chunk__52755_52790;
var G__52797 = count__52756_52791;
var G__52798 = (i__52757_52792 + (1));
seq__52754_52789 = G__52795;
chunk__52755_52790 = G__52796;
count__52756_52791 = G__52797;
i__52757_52792 = G__52798;
continue;
} else {
var temp__4425__auto___52799 = cljs.core.seq.call(null,seq__52754_52789);
if(temp__4425__auto___52799){
var seq__52754_52800__$1 = temp__4425__auto___52799;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52754_52800__$1)){
var c__24968__auto___52801 = cljs.core.chunk_first.call(null,seq__52754_52800__$1);
var G__52802 = cljs.core.chunk_rest.call(null,seq__52754_52800__$1);
var G__52803 = c__24968__auto___52801;
var G__52804 = cljs.core.count.call(null,c__24968__auto___52801);
var G__52805 = (0);
seq__52754_52789 = G__52802;
chunk__52755_52790 = G__52803;
count__52756_52791 = G__52804;
i__52757_52792 = G__52805;
continue;
} else {
var c_52806 = cljs.core.first.call(null,seq__52754_52800__$1);
var class_name_52807 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_52807,c_52806))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_52807 === ""))?c_52806:[cljs.core.str(class_name_52807),cljs.core.str(" "),cljs.core.str(c_52806)].join('')));
}

var G__52808 = cljs.core.next.call(null,seq__52754_52800__$1);
var G__52809 = null;
var G__52810 = (0);
var G__52811 = (0);
seq__52754_52789 = G__52808;
chunk__52755_52790 = G__52809;
count__52756_52791 = G__52810;
i__52757_52792 = G__52811;
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
var seq__52758_52812 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__52759_52813 = null;
var count__52760_52814 = (0);
var i__52761_52815 = (0);
while(true){
if((i__52761_52815 < count__52760_52814)){
var c_52816 = cljs.core._nth.call(null,chunk__52759_52813,i__52761_52815);
dommy.core.add_class_BANG_.call(null,elem,c_52816);

var G__52817 = seq__52758_52812;
var G__52818 = chunk__52759_52813;
var G__52819 = count__52760_52814;
var G__52820 = (i__52761_52815 + (1));
seq__52758_52812 = G__52817;
chunk__52759_52813 = G__52818;
count__52760_52814 = G__52819;
i__52761_52815 = G__52820;
continue;
} else {
var temp__4425__auto___52821 = cljs.core.seq.call(null,seq__52758_52812);
if(temp__4425__auto___52821){
var seq__52758_52822__$1 = temp__4425__auto___52821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52758_52822__$1)){
var c__24968__auto___52823 = cljs.core.chunk_first.call(null,seq__52758_52822__$1);
var G__52824 = cljs.core.chunk_rest.call(null,seq__52758_52822__$1);
var G__52825 = c__24968__auto___52823;
var G__52826 = cljs.core.count.call(null,c__24968__auto___52823);
var G__52827 = (0);
seq__52758_52812 = G__52824;
chunk__52759_52813 = G__52825;
count__52760_52814 = G__52826;
i__52761_52815 = G__52827;
continue;
} else {
var c_52828 = cljs.core.first.call(null,seq__52758_52822__$1);
dommy.core.add_class_BANG_.call(null,elem,c_52828);

var G__52829 = cljs.core.next.call(null,seq__52758_52822__$1);
var G__52830 = null;
var G__52831 = (0);
var G__52832 = (0);
seq__52758_52812 = G__52829;
chunk__52759_52813 = G__52830;
count__52760_52814 = G__52831;
i__52761_52815 = G__52832;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq52745){
var G__52746 = cljs.core.first.call(null,seq52745);
var seq52745__$1 = cljs.core.next.call(null,seq52745);
var G__52747 = cljs.core.first.call(null,seq52745__$1);
var seq52745__$2 = cljs.core.next.call(null,seq52745__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52746,G__52747,seq52745__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args52833 = [];
var len__25223__auto___52843 = arguments.length;
var i__25224__auto___52844 = (0);
while(true){
if((i__25224__auto___52844 < len__25223__auto___52843)){
args52833.push((arguments[i__25224__auto___52844]));

var G__52845 = (i__25224__auto___52844 + (1));
i__25224__auto___52844 = G__52845;
continue;
} else {
}
break;
}

var G__52838 = args52833.length;
switch (G__52838) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25242__auto__ = (new cljs.core.IndexedSeq(args52833.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25242__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___52847 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___52847)){
var class_list_52848 = temp__4423__auto___52847;
class_list_52848.remove(c__$1);
} else {
var class_name_52849 = dommy.core.class$.call(null,elem);
var new_class_name_52850 = dommy.utils.remove_class_str.call(null,class_name_52849,c__$1);
if((class_name_52849 === new_class_name_52850)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_52850);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__52839 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__52840 = null;
var count__52841 = (0);
var i__52842 = (0);
while(true){
if((i__52842 < count__52841)){
var c = cljs.core._nth.call(null,chunk__52840,i__52842);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__52851 = seq__52839;
var G__52852 = chunk__52840;
var G__52853 = count__52841;
var G__52854 = (i__52842 + (1));
seq__52839 = G__52851;
chunk__52840 = G__52852;
count__52841 = G__52853;
i__52842 = G__52854;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__52839);
if(temp__4425__auto__){
var seq__52839__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52839__$1)){
var c__24968__auto__ = cljs.core.chunk_first.call(null,seq__52839__$1);
var G__52855 = cljs.core.chunk_rest.call(null,seq__52839__$1);
var G__52856 = c__24968__auto__;
var G__52857 = cljs.core.count.call(null,c__24968__auto__);
var G__52858 = (0);
seq__52839 = G__52855;
chunk__52840 = G__52856;
count__52841 = G__52857;
i__52842 = G__52858;
continue;
} else {
var c = cljs.core.first.call(null,seq__52839__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__52859 = cljs.core.next.call(null,seq__52839__$1);
var G__52860 = null;
var G__52861 = (0);
var G__52862 = (0);
seq__52839 = G__52859;
chunk__52840 = G__52860;
count__52841 = G__52861;
i__52842 = G__52862;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq52834){
var G__52835 = cljs.core.first.call(null,seq52834);
var seq52834__$1 = cljs.core.next.call(null,seq52834);
var G__52836 = cljs.core.first.call(null,seq52834__$1);
var seq52834__$2 = cljs.core.next.call(null,seq52834__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52835,G__52836,seq52834__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args52863 = [];
var len__25223__auto___52866 = arguments.length;
var i__25224__auto___52867 = (0);
while(true){
if((i__25224__auto___52867 < len__25223__auto___52866)){
args52863.push((arguments[i__25224__auto___52867]));

var G__52868 = (i__25224__auto___52867 + (1));
i__25224__auto___52867 = G__52868;
continue;
} else {
}
break;
}

var G__52865 = args52863.length;
switch (G__52865) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52863.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___52870 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___52870)){
var class_list_52871 = temp__4423__auto___52870;
class_list_52871.toggle(c__$1);
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
var args52872 = [];
var len__25223__auto___52875 = arguments.length;
var i__25224__auto___52876 = (0);
while(true){
if((i__25224__auto___52876 < len__25223__auto___52875)){
args52872.push((arguments[i__25224__auto___52876]));

var G__52877 = (i__25224__auto___52876 + (1));
i__25224__auto___52876 = G__52877;
continue;
} else {
}
break;
}

var G__52874 = args52872.length;
switch (G__52874) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52872.length)].join('')));

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
var args52879 = [];
var len__25223__auto___52882 = arguments.length;
var i__25224__auto___52883 = (0);
while(true){
if((i__25224__auto___52883 < len__25223__auto___52882)){
args52879.push((arguments[i__25224__auto___52883]));

var G__52884 = (i__25224__auto___52883 + (1));
i__25224__auto___52883 = G__52884;
continue;
} else {
}
break;
}

var G__52881 = args52879.length;
switch (G__52881) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52879.length)].join('')));

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
var args52886 = [];
var len__25223__auto___52897 = arguments.length;
var i__25224__auto___52898 = (0);
while(true){
if((i__25224__auto___52898 < len__25223__auto___52897)){
args52886.push((arguments[i__25224__auto___52898]));

var G__52899 = (i__25224__auto___52898 + (1));
i__25224__auto___52898 = G__52899;
continue;
} else {
}
break;
}

var G__52891 = args52886.length;
switch (G__52891) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25242__auto__ = (new cljs.core.IndexedSeq(args52886.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25242__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__52892 = parent;
G__52892.appendChild(child);

return G__52892;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__52893_52901 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__52894_52902 = null;
var count__52895_52903 = (0);
var i__52896_52904 = (0);
while(true){
if((i__52896_52904 < count__52895_52903)){
var c_52905 = cljs.core._nth.call(null,chunk__52894_52902,i__52896_52904);
dommy.core.append_BANG_.call(null,parent,c_52905);

var G__52906 = seq__52893_52901;
var G__52907 = chunk__52894_52902;
var G__52908 = count__52895_52903;
var G__52909 = (i__52896_52904 + (1));
seq__52893_52901 = G__52906;
chunk__52894_52902 = G__52907;
count__52895_52903 = G__52908;
i__52896_52904 = G__52909;
continue;
} else {
var temp__4425__auto___52910 = cljs.core.seq.call(null,seq__52893_52901);
if(temp__4425__auto___52910){
var seq__52893_52911__$1 = temp__4425__auto___52910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52893_52911__$1)){
var c__24968__auto___52912 = cljs.core.chunk_first.call(null,seq__52893_52911__$1);
var G__52913 = cljs.core.chunk_rest.call(null,seq__52893_52911__$1);
var G__52914 = c__24968__auto___52912;
var G__52915 = cljs.core.count.call(null,c__24968__auto___52912);
var G__52916 = (0);
seq__52893_52901 = G__52913;
chunk__52894_52902 = G__52914;
count__52895_52903 = G__52915;
i__52896_52904 = G__52916;
continue;
} else {
var c_52917 = cljs.core.first.call(null,seq__52893_52911__$1);
dommy.core.append_BANG_.call(null,parent,c_52917);

var G__52918 = cljs.core.next.call(null,seq__52893_52911__$1);
var G__52919 = null;
var G__52920 = (0);
var G__52921 = (0);
seq__52893_52901 = G__52918;
chunk__52894_52902 = G__52919;
count__52895_52903 = G__52920;
i__52896_52904 = G__52921;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq52887){
var G__52888 = cljs.core.first.call(null,seq52887);
var seq52887__$1 = cljs.core.next.call(null,seq52887);
var G__52889 = cljs.core.first.call(null,seq52887__$1);
var seq52887__$2 = cljs.core.next.call(null,seq52887__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52888,G__52889,seq52887__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args52922 = [];
var len__25223__auto___52933 = arguments.length;
var i__25224__auto___52934 = (0);
while(true){
if((i__25224__auto___52934 < len__25223__auto___52933)){
args52922.push((arguments[i__25224__auto___52934]));

var G__52935 = (i__25224__auto___52934 + (1));
i__25224__auto___52934 = G__52935;
continue;
} else {
}
break;
}

var G__52927 = args52922.length;
switch (G__52927) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25242__auto__ = (new cljs.core.IndexedSeq(args52922.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25242__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__52928 = parent;
G__52928.insertBefore(child,parent.firstChild);

return G__52928;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__52929_52937 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__52930_52938 = null;
var count__52931_52939 = (0);
var i__52932_52940 = (0);
while(true){
if((i__52932_52940 < count__52931_52939)){
var c_52941 = cljs.core._nth.call(null,chunk__52930_52938,i__52932_52940);
dommy.core.prepend_BANG_.call(null,parent,c_52941);

var G__52942 = seq__52929_52937;
var G__52943 = chunk__52930_52938;
var G__52944 = count__52931_52939;
var G__52945 = (i__52932_52940 + (1));
seq__52929_52937 = G__52942;
chunk__52930_52938 = G__52943;
count__52931_52939 = G__52944;
i__52932_52940 = G__52945;
continue;
} else {
var temp__4425__auto___52946 = cljs.core.seq.call(null,seq__52929_52937);
if(temp__4425__auto___52946){
var seq__52929_52947__$1 = temp__4425__auto___52946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52929_52947__$1)){
var c__24968__auto___52948 = cljs.core.chunk_first.call(null,seq__52929_52947__$1);
var G__52949 = cljs.core.chunk_rest.call(null,seq__52929_52947__$1);
var G__52950 = c__24968__auto___52948;
var G__52951 = cljs.core.count.call(null,c__24968__auto___52948);
var G__52952 = (0);
seq__52929_52937 = G__52949;
chunk__52930_52938 = G__52950;
count__52931_52939 = G__52951;
i__52932_52940 = G__52952;
continue;
} else {
var c_52953 = cljs.core.first.call(null,seq__52929_52947__$1);
dommy.core.prepend_BANG_.call(null,parent,c_52953);

var G__52954 = cljs.core.next.call(null,seq__52929_52947__$1);
var G__52955 = null;
var G__52956 = (0);
var G__52957 = (0);
seq__52929_52937 = G__52954;
chunk__52930_52938 = G__52955;
count__52931_52939 = G__52956;
i__52932_52940 = G__52957;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq52923){
var G__52924 = cljs.core.first.call(null,seq52923);
var seq52923__$1 = cljs.core.next.call(null,seq52923);
var G__52925 = cljs.core.first.call(null,seq52923__$1);
var seq52923__$2 = cljs.core.next.call(null,seq52923__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52924,G__52925,seq52923__$2);
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
var temp__4423__auto___52958 = other.nextSibling;
if(cljs.core.truth_(temp__4423__auto___52958)){
var next_52959 = temp__4423__auto___52958;
dommy.core.insert_before_BANG_.call(null,elem,next_52959);
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
var args52960 = [];
var len__25223__auto___52964 = arguments.length;
var i__25224__auto___52965 = (0);
while(true){
if((i__25224__auto___52965 < len__25223__auto___52964)){
args52960.push((arguments[i__25224__auto___52965]));

var G__52966 = (i__25224__auto___52965 + (1));
i__25224__auto___52965 = G__52966;
continue;
} else {
}
break;
}

var G__52962 = args52960.length;
switch (G__52962) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52960.length)].join('')));

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
var G__52963 = p;
G__52963.removeChild(elem);

return G__52963;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__52968){
var vec__52969 = p__52968;
var special_mouse_event = cljs.core.nth.call(null,vec__52969,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__52969,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__52969,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__52969,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__24165__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__24153__auto__ = related_target;
if(cljs.core.truth_(and__24153__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__24153__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__52969,special_mouse_event,real_mouse_event))
});})(vec__52969,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__24153__auto__ = selected_target;
if(cljs.core.truth_(and__24153__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__24153__auto__;
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
var or__24165__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__25230__auto__ = [];
var len__25223__auto___52973 = arguments.length;
var i__25224__auto___52974 = (0);
while(true){
if((i__25224__auto___52974 < len__25223__auto___52973)){
args__25230__auto__.push((arguments[i__25224__auto___52974]));

var G__52975 = (i__25224__auto___52974 + (1));
i__25224__auto___52974 = G__52975;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((2) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25231__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq52970){
var G__52971 = cljs.core.first.call(null,seq52970);
var seq52970__$1 = cljs.core.next.call(null,seq52970);
var G__52972 = cljs.core.first.call(null,seq52970__$1);
var seq52970__$2 = cljs.core.next.call(null,seq52970__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52971,G__52972,seq52970__$2);
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
var args__25230__auto__ = [];
var len__25223__auto___53001 = arguments.length;
var i__25224__auto___53002 = (0);
while(true){
if((i__25224__auto___53002 < len__25223__auto___53001)){
args__25230__auto__.push((arguments[i__25224__auto___53002]));

var G__53003 = (i__25224__auto___53002 + (1));
i__25224__auto___53002 = G__53003;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((1) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25231__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__52978_53004 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_53005 = cljs.core.nth.call(null,vec__52978_53004,(0),null);
var selector_53006 = cljs.core.nth.call(null,vec__52978_53004,(1),null);
var seq__52979_53007 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__52986_53008 = null;
var count__52987_53009 = (0);
var i__52988_53010 = (0);
while(true){
if((i__52988_53010 < count__52987_53009)){
var vec__52995_53011 = cljs.core._nth.call(null,chunk__52986_53008,i__52988_53010);
var orig_type_53012 = cljs.core.nth.call(null,vec__52995_53011,(0),null);
var f_53013 = cljs.core.nth.call(null,vec__52995_53011,(1),null);
var seq__52989_53014 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_53012,cljs.core.PersistentArrayMap.fromArray([orig_type_53012,cljs.core.identity], true, false)));
var chunk__52991_53015 = null;
var count__52992_53016 = (0);
var i__52993_53017 = (0);
while(true){
if((i__52993_53017 < count__52992_53016)){
var vec__52996_53018 = cljs.core._nth.call(null,chunk__52991_53015,i__52993_53017);
var actual_type_53019 = cljs.core.nth.call(null,vec__52996_53018,(0),null);
var factory_53020 = cljs.core.nth.call(null,vec__52996_53018,(1),null);
var canonical_f_53021 = (cljs.core.truth_(selector_53006)?cljs.core.partial.call(null,dommy.core.live_listener,elem_53005,selector_53006):cljs.core.identity).call(null,factory_53020.call(null,f_53013));
dommy.core.update_event_listeners_BANG_.call(null,elem_53005,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53006,actual_type_53019,f_53013], null),canonical_f_53021);

if(cljs.core.truth_(elem_53005.addEventListener)){
elem_53005.addEventListener(cljs.core.name.call(null,actual_type_53019),canonical_f_53021);
} else {
elem_53005.attachEvent(cljs.core.name.call(null,actual_type_53019),canonical_f_53021);
}

var G__53022 = seq__52989_53014;
var G__53023 = chunk__52991_53015;
var G__53024 = count__52992_53016;
var G__53025 = (i__52993_53017 + (1));
seq__52989_53014 = G__53022;
chunk__52991_53015 = G__53023;
count__52992_53016 = G__53024;
i__52993_53017 = G__53025;
continue;
} else {
var temp__4425__auto___53026 = cljs.core.seq.call(null,seq__52989_53014);
if(temp__4425__auto___53026){
var seq__52989_53027__$1 = temp__4425__auto___53026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52989_53027__$1)){
var c__24968__auto___53028 = cljs.core.chunk_first.call(null,seq__52989_53027__$1);
var G__53029 = cljs.core.chunk_rest.call(null,seq__52989_53027__$1);
var G__53030 = c__24968__auto___53028;
var G__53031 = cljs.core.count.call(null,c__24968__auto___53028);
var G__53032 = (0);
seq__52989_53014 = G__53029;
chunk__52991_53015 = G__53030;
count__52992_53016 = G__53031;
i__52993_53017 = G__53032;
continue;
} else {
var vec__52997_53033 = cljs.core.first.call(null,seq__52989_53027__$1);
var actual_type_53034 = cljs.core.nth.call(null,vec__52997_53033,(0),null);
var factory_53035 = cljs.core.nth.call(null,vec__52997_53033,(1),null);
var canonical_f_53036 = (cljs.core.truth_(selector_53006)?cljs.core.partial.call(null,dommy.core.live_listener,elem_53005,selector_53006):cljs.core.identity).call(null,factory_53035.call(null,f_53013));
dommy.core.update_event_listeners_BANG_.call(null,elem_53005,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53006,actual_type_53034,f_53013], null),canonical_f_53036);

if(cljs.core.truth_(elem_53005.addEventListener)){
elem_53005.addEventListener(cljs.core.name.call(null,actual_type_53034),canonical_f_53036);
} else {
elem_53005.attachEvent(cljs.core.name.call(null,actual_type_53034),canonical_f_53036);
}

var G__53037 = cljs.core.next.call(null,seq__52989_53027__$1);
var G__53038 = null;
var G__53039 = (0);
var G__53040 = (0);
seq__52989_53014 = G__53037;
chunk__52991_53015 = G__53038;
count__52992_53016 = G__53039;
i__52993_53017 = G__53040;
continue;
}
} else {
}
}
break;
}

var G__53041 = seq__52979_53007;
var G__53042 = chunk__52986_53008;
var G__53043 = count__52987_53009;
var G__53044 = (i__52988_53010 + (1));
seq__52979_53007 = G__53041;
chunk__52986_53008 = G__53042;
count__52987_53009 = G__53043;
i__52988_53010 = G__53044;
continue;
} else {
var temp__4425__auto___53045 = cljs.core.seq.call(null,seq__52979_53007);
if(temp__4425__auto___53045){
var seq__52979_53046__$1 = temp__4425__auto___53045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52979_53046__$1)){
var c__24968__auto___53047 = cljs.core.chunk_first.call(null,seq__52979_53046__$1);
var G__53048 = cljs.core.chunk_rest.call(null,seq__52979_53046__$1);
var G__53049 = c__24968__auto___53047;
var G__53050 = cljs.core.count.call(null,c__24968__auto___53047);
var G__53051 = (0);
seq__52979_53007 = G__53048;
chunk__52986_53008 = G__53049;
count__52987_53009 = G__53050;
i__52988_53010 = G__53051;
continue;
} else {
var vec__52998_53052 = cljs.core.first.call(null,seq__52979_53046__$1);
var orig_type_53053 = cljs.core.nth.call(null,vec__52998_53052,(0),null);
var f_53054 = cljs.core.nth.call(null,vec__52998_53052,(1),null);
var seq__52980_53055 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_53053,cljs.core.PersistentArrayMap.fromArray([orig_type_53053,cljs.core.identity], true, false)));
var chunk__52982_53056 = null;
var count__52983_53057 = (0);
var i__52984_53058 = (0);
while(true){
if((i__52984_53058 < count__52983_53057)){
var vec__52999_53059 = cljs.core._nth.call(null,chunk__52982_53056,i__52984_53058);
var actual_type_53060 = cljs.core.nth.call(null,vec__52999_53059,(0),null);
var factory_53061 = cljs.core.nth.call(null,vec__52999_53059,(1),null);
var canonical_f_53062 = (cljs.core.truth_(selector_53006)?cljs.core.partial.call(null,dommy.core.live_listener,elem_53005,selector_53006):cljs.core.identity).call(null,factory_53061.call(null,f_53054));
dommy.core.update_event_listeners_BANG_.call(null,elem_53005,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53006,actual_type_53060,f_53054], null),canonical_f_53062);

if(cljs.core.truth_(elem_53005.addEventListener)){
elem_53005.addEventListener(cljs.core.name.call(null,actual_type_53060),canonical_f_53062);
} else {
elem_53005.attachEvent(cljs.core.name.call(null,actual_type_53060),canonical_f_53062);
}

var G__53063 = seq__52980_53055;
var G__53064 = chunk__52982_53056;
var G__53065 = count__52983_53057;
var G__53066 = (i__52984_53058 + (1));
seq__52980_53055 = G__53063;
chunk__52982_53056 = G__53064;
count__52983_53057 = G__53065;
i__52984_53058 = G__53066;
continue;
} else {
var temp__4425__auto___53067__$1 = cljs.core.seq.call(null,seq__52980_53055);
if(temp__4425__auto___53067__$1){
var seq__52980_53068__$1 = temp__4425__auto___53067__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52980_53068__$1)){
var c__24968__auto___53069 = cljs.core.chunk_first.call(null,seq__52980_53068__$1);
var G__53070 = cljs.core.chunk_rest.call(null,seq__52980_53068__$1);
var G__53071 = c__24968__auto___53069;
var G__53072 = cljs.core.count.call(null,c__24968__auto___53069);
var G__53073 = (0);
seq__52980_53055 = G__53070;
chunk__52982_53056 = G__53071;
count__52983_53057 = G__53072;
i__52984_53058 = G__53073;
continue;
} else {
var vec__53000_53074 = cljs.core.first.call(null,seq__52980_53068__$1);
var actual_type_53075 = cljs.core.nth.call(null,vec__53000_53074,(0),null);
var factory_53076 = cljs.core.nth.call(null,vec__53000_53074,(1),null);
var canonical_f_53077 = (cljs.core.truth_(selector_53006)?cljs.core.partial.call(null,dommy.core.live_listener,elem_53005,selector_53006):cljs.core.identity).call(null,factory_53076.call(null,f_53054));
dommy.core.update_event_listeners_BANG_.call(null,elem_53005,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53006,actual_type_53075,f_53054], null),canonical_f_53077);

if(cljs.core.truth_(elem_53005.addEventListener)){
elem_53005.addEventListener(cljs.core.name.call(null,actual_type_53075),canonical_f_53077);
} else {
elem_53005.attachEvent(cljs.core.name.call(null,actual_type_53075),canonical_f_53077);
}

var G__53078 = cljs.core.next.call(null,seq__52980_53068__$1);
var G__53079 = null;
var G__53080 = (0);
var G__53081 = (0);
seq__52980_53055 = G__53078;
chunk__52982_53056 = G__53079;
count__52983_53057 = G__53080;
i__52984_53058 = G__53081;
continue;
}
} else {
}
}
break;
}

var G__53082 = cljs.core.next.call(null,seq__52979_53046__$1);
var G__53083 = null;
var G__53084 = (0);
var G__53085 = (0);
seq__52979_53007 = G__53082;
chunk__52986_53008 = G__53083;
count__52987_53009 = G__53084;
i__52988_53010 = G__53085;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq52976){
var G__52977 = cljs.core.first.call(null,seq52976);
var seq52976__$1 = cljs.core.next.call(null,seq52976);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52977,seq52976__$1);
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
var args__25230__auto__ = [];
var len__25223__auto___53111 = arguments.length;
var i__25224__auto___53112 = (0);
while(true){
if((i__25224__auto___53112 < len__25223__auto___53111)){
args__25230__auto__.push((arguments[i__25224__auto___53112]));

var G__53113 = (i__25224__auto___53112 + (1));
i__25224__auto___53112 = G__53113;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((1) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25231__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__53088_53114 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_53115 = cljs.core.nth.call(null,vec__53088_53114,(0),null);
var selector_53116 = cljs.core.nth.call(null,vec__53088_53114,(1),null);
var seq__53089_53117 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__53096_53118 = null;
var count__53097_53119 = (0);
var i__53098_53120 = (0);
while(true){
if((i__53098_53120 < count__53097_53119)){
var vec__53105_53121 = cljs.core._nth.call(null,chunk__53096_53118,i__53098_53120);
var orig_type_53122 = cljs.core.nth.call(null,vec__53105_53121,(0),null);
var f_53123 = cljs.core.nth.call(null,vec__53105_53121,(1),null);
var seq__53099_53124 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_53122,cljs.core.PersistentArrayMap.fromArray([orig_type_53122,cljs.core.identity], true, false)));
var chunk__53101_53125 = null;
var count__53102_53126 = (0);
var i__53103_53127 = (0);
while(true){
if((i__53103_53127 < count__53102_53126)){
var vec__53106_53128 = cljs.core._nth.call(null,chunk__53101_53125,i__53103_53127);
var actual_type_53129 = cljs.core.nth.call(null,vec__53106_53128,(0),null);
var __53130 = cljs.core.nth.call(null,vec__53106_53128,(1),null);
var keys_53131 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53116,actual_type_53129,f_53123], null);
var canonical_f_53132 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_53115),keys_53131);
dommy.core.update_event_listeners_BANG_.call(null,elem_53115,dommy.utils.dissoc_in,keys_53131);

if(cljs.core.truth_(elem_53115.removeEventListener)){
elem_53115.removeEventListener(cljs.core.name.call(null,actual_type_53129),canonical_f_53132);
} else {
elem_53115.detachEvent(cljs.core.name.call(null,actual_type_53129),canonical_f_53132);
}

var G__53133 = seq__53099_53124;
var G__53134 = chunk__53101_53125;
var G__53135 = count__53102_53126;
var G__53136 = (i__53103_53127 + (1));
seq__53099_53124 = G__53133;
chunk__53101_53125 = G__53134;
count__53102_53126 = G__53135;
i__53103_53127 = G__53136;
continue;
} else {
var temp__4425__auto___53137 = cljs.core.seq.call(null,seq__53099_53124);
if(temp__4425__auto___53137){
var seq__53099_53138__$1 = temp__4425__auto___53137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53099_53138__$1)){
var c__24968__auto___53139 = cljs.core.chunk_first.call(null,seq__53099_53138__$1);
var G__53140 = cljs.core.chunk_rest.call(null,seq__53099_53138__$1);
var G__53141 = c__24968__auto___53139;
var G__53142 = cljs.core.count.call(null,c__24968__auto___53139);
var G__53143 = (0);
seq__53099_53124 = G__53140;
chunk__53101_53125 = G__53141;
count__53102_53126 = G__53142;
i__53103_53127 = G__53143;
continue;
} else {
var vec__53107_53144 = cljs.core.first.call(null,seq__53099_53138__$1);
var actual_type_53145 = cljs.core.nth.call(null,vec__53107_53144,(0),null);
var __53146 = cljs.core.nth.call(null,vec__53107_53144,(1),null);
var keys_53147 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53116,actual_type_53145,f_53123], null);
var canonical_f_53148 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_53115),keys_53147);
dommy.core.update_event_listeners_BANG_.call(null,elem_53115,dommy.utils.dissoc_in,keys_53147);

if(cljs.core.truth_(elem_53115.removeEventListener)){
elem_53115.removeEventListener(cljs.core.name.call(null,actual_type_53145),canonical_f_53148);
} else {
elem_53115.detachEvent(cljs.core.name.call(null,actual_type_53145),canonical_f_53148);
}

var G__53149 = cljs.core.next.call(null,seq__53099_53138__$1);
var G__53150 = null;
var G__53151 = (0);
var G__53152 = (0);
seq__53099_53124 = G__53149;
chunk__53101_53125 = G__53150;
count__53102_53126 = G__53151;
i__53103_53127 = G__53152;
continue;
}
} else {
}
}
break;
}

var G__53153 = seq__53089_53117;
var G__53154 = chunk__53096_53118;
var G__53155 = count__53097_53119;
var G__53156 = (i__53098_53120 + (1));
seq__53089_53117 = G__53153;
chunk__53096_53118 = G__53154;
count__53097_53119 = G__53155;
i__53098_53120 = G__53156;
continue;
} else {
var temp__4425__auto___53157 = cljs.core.seq.call(null,seq__53089_53117);
if(temp__4425__auto___53157){
var seq__53089_53158__$1 = temp__4425__auto___53157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53089_53158__$1)){
var c__24968__auto___53159 = cljs.core.chunk_first.call(null,seq__53089_53158__$1);
var G__53160 = cljs.core.chunk_rest.call(null,seq__53089_53158__$1);
var G__53161 = c__24968__auto___53159;
var G__53162 = cljs.core.count.call(null,c__24968__auto___53159);
var G__53163 = (0);
seq__53089_53117 = G__53160;
chunk__53096_53118 = G__53161;
count__53097_53119 = G__53162;
i__53098_53120 = G__53163;
continue;
} else {
var vec__53108_53164 = cljs.core.first.call(null,seq__53089_53158__$1);
var orig_type_53165 = cljs.core.nth.call(null,vec__53108_53164,(0),null);
var f_53166 = cljs.core.nth.call(null,vec__53108_53164,(1),null);
var seq__53090_53167 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_53165,cljs.core.PersistentArrayMap.fromArray([orig_type_53165,cljs.core.identity], true, false)));
var chunk__53092_53168 = null;
var count__53093_53169 = (0);
var i__53094_53170 = (0);
while(true){
if((i__53094_53170 < count__53093_53169)){
var vec__53109_53171 = cljs.core._nth.call(null,chunk__53092_53168,i__53094_53170);
var actual_type_53172 = cljs.core.nth.call(null,vec__53109_53171,(0),null);
var __53173 = cljs.core.nth.call(null,vec__53109_53171,(1),null);
var keys_53174 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53116,actual_type_53172,f_53166], null);
var canonical_f_53175 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_53115),keys_53174);
dommy.core.update_event_listeners_BANG_.call(null,elem_53115,dommy.utils.dissoc_in,keys_53174);

if(cljs.core.truth_(elem_53115.removeEventListener)){
elem_53115.removeEventListener(cljs.core.name.call(null,actual_type_53172),canonical_f_53175);
} else {
elem_53115.detachEvent(cljs.core.name.call(null,actual_type_53172),canonical_f_53175);
}

var G__53176 = seq__53090_53167;
var G__53177 = chunk__53092_53168;
var G__53178 = count__53093_53169;
var G__53179 = (i__53094_53170 + (1));
seq__53090_53167 = G__53176;
chunk__53092_53168 = G__53177;
count__53093_53169 = G__53178;
i__53094_53170 = G__53179;
continue;
} else {
var temp__4425__auto___53180__$1 = cljs.core.seq.call(null,seq__53090_53167);
if(temp__4425__auto___53180__$1){
var seq__53090_53181__$1 = temp__4425__auto___53180__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53090_53181__$1)){
var c__24968__auto___53182 = cljs.core.chunk_first.call(null,seq__53090_53181__$1);
var G__53183 = cljs.core.chunk_rest.call(null,seq__53090_53181__$1);
var G__53184 = c__24968__auto___53182;
var G__53185 = cljs.core.count.call(null,c__24968__auto___53182);
var G__53186 = (0);
seq__53090_53167 = G__53183;
chunk__53092_53168 = G__53184;
count__53093_53169 = G__53185;
i__53094_53170 = G__53186;
continue;
} else {
var vec__53110_53187 = cljs.core.first.call(null,seq__53090_53181__$1);
var actual_type_53188 = cljs.core.nth.call(null,vec__53110_53187,(0),null);
var __53189 = cljs.core.nth.call(null,vec__53110_53187,(1),null);
var keys_53190 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_53116,actual_type_53188,f_53166], null);
var canonical_f_53191 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_53115),keys_53190);
dommy.core.update_event_listeners_BANG_.call(null,elem_53115,dommy.utils.dissoc_in,keys_53190);

if(cljs.core.truth_(elem_53115.removeEventListener)){
elem_53115.removeEventListener(cljs.core.name.call(null,actual_type_53188),canonical_f_53191);
} else {
elem_53115.detachEvent(cljs.core.name.call(null,actual_type_53188),canonical_f_53191);
}

var G__53192 = cljs.core.next.call(null,seq__53090_53181__$1);
var G__53193 = null;
var G__53194 = (0);
var G__53195 = (0);
seq__53090_53167 = G__53192;
chunk__53092_53168 = G__53193;
count__53093_53169 = G__53194;
i__53094_53170 = G__53195;
continue;
}
} else {
}
}
break;
}

var G__53196 = cljs.core.next.call(null,seq__53089_53158__$1);
var G__53197 = null;
var G__53198 = (0);
var G__53199 = (0);
seq__53089_53117 = G__53196;
chunk__53096_53118 = G__53197;
count__53097_53119 = G__53198;
i__53098_53120 = G__53199;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq53086){
var G__53087 = cljs.core.first.call(null,seq53086);
var seq53086__$1 = cljs.core.next.call(null,seq53086);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__53087,seq53086__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__25230__auto__ = [];
var len__25223__auto___53209 = arguments.length;
var i__25224__auto___53210 = (0);
while(true){
if((i__25224__auto___53210 < len__25223__auto___53209)){
args__25230__auto__.push((arguments[i__25224__auto___53210]));

var G__53211 = (i__25224__auto___53210 + (1));
i__25224__auto___53210 = G__53211;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((1) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25231__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__53202_53212 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_53213 = cljs.core.nth.call(null,vec__53202_53212,(0),null);
var selector_53214 = cljs.core.nth.call(null,vec__53202_53212,(1),null);
var seq__53203_53215 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__53204_53216 = null;
var count__53205_53217 = (0);
var i__53206_53218 = (0);
while(true){
if((i__53206_53218 < count__53205_53217)){
var vec__53207_53219 = cljs.core._nth.call(null,chunk__53204_53216,i__53206_53218);
var type_53220 = cljs.core.nth.call(null,vec__53207_53219,(0),null);
var f_53221 = cljs.core.nth.call(null,vec__53207_53219,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_53220,((function (seq__53203_53215,chunk__53204_53216,count__53205_53217,i__53206_53218,vec__53207_53219,type_53220,f_53221,vec__53202_53212,elem_53213,selector_53214){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_53220,dommy$core$this_fn);

return f_53221.call(null,e);
});})(seq__53203_53215,chunk__53204_53216,count__53205_53217,i__53206_53218,vec__53207_53219,type_53220,f_53221,vec__53202_53212,elem_53213,selector_53214))
);

var G__53222 = seq__53203_53215;
var G__53223 = chunk__53204_53216;
var G__53224 = count__53205_53217;
var G__53225 = (i__53206_53218 + (1));
seq__53203_53215 = G__53222;
chunk__53204_53216 = G__53223;
count__53205_53217 = G__53224;
i__53206_53218 = G__53225;
continue;
} else {
var temp__4425__auto___53226 = cljs.core.seq.call(null,seq__53203_53215);
if(temp__4425__auto___53226){
var seq__53203_53227__$1 = temp__4425__auto___53226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53203_53227__$1)){
var c__24968__auto___53228 = cljs.core.chunk_first.call(null,seq__53203_53227__$1);
var G__53229 = cljs.core.chunk_rest.call(null,seq__53203_53227__$1);
var G__53230 = c__24968__auto___53228;
var G__53231 = cljs.core.count.call(null,c__24968__auto___53228);
var G__53232 = (0);
seq__53203_53215 = G__53229;
chunk__53204_53216 = G__53230;
count__53205_53217 = G__53231;
i__53206_53218 = G__53232;
continue;
} else {
var vec__53208_53233 = cljs.core.first.call(null,seq__53203_53227__$1);
var type_53234 = cljs.core.nth.call(null,vec__53208_53233,(0),null);
var f_53235 = cljs.core.nth.call(null,vec__53208_53233,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_53234,((function (seq__53203_53215,chunk__53204_53216,count__53205_53217,i__53206_53218,vec__53208_53233,type_53234,f_53235,seq__53203_53227__$1,temp__4425__auto___53226,vec__53202_53212,elem_53213,selector_53214){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_53234,dommy$core$this_fn);

return f_53235.call(null,e);
});})(seq__53203_53215,chunk__53204_53216,count__53205_53217,i__53206_53218,vec__53208_53233,type_53234,f_53235,seq__53203_53227__$1,temp__4425__auto___53226,vec__53202_53212,elem_53213,selector_53214))
);

var G__53236 = cljs.core.next.call(null,seq__53203_53227__$1);
var G__53237 = null;
var G__53238 = (0);
var G__53239 = (0);
seq__53203_53215 = G__53236;
chunk__53204_53216 = G__53237;
count__53205_53217 = G__53238;
i__53206_53218 = G__53239;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq53200){
var G__53201 = cljs.core.first.call(null,seq53200);
var seq53200__$1 = cljs.core.next.call(null,seq53200);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__53201,seq53200__$1);
});

//# sourceMappingURL=core.js.map