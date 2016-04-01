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
var or__25827__auto__ = elem.textContent;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
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
var args91212 = [];
var len__26896__auto___91223 = arguments.length;
var i__26897__auto___91224 = (0);
while(true){
if((i__26897__auto___91224 < len__26896__auto___91223)){
args91212.push((arguments[i__26897__auto___91224]));

var G__91225 = (i__26897__auto___91224 + (1));
i__26897__auto___91224 = G__91225;
continue;
} else {
}
break;
}

var G__91216 = args91212.length;
switch (G__91216) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91212.length)].join('')));

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
var args91293 = [];
var len__26896__auto___91364 = arguments.length;
var i__26897__auto___91369 = (0);
while(true){
if((i__26897__auto___91369 < len__26896__auto___91364)){
args91293.push((arguments[i__26897__auto___91369]));

var G__91372 = (i__26897__auto___91369 + (1));
i__26897__auto___91369 = G__91372;
continue;
} else {
}
break;
}

var G__91296 = args91293.length;
switch (G__91296) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91293.length)].join('')));

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
var args91398 = [];
var len__26896__auto___91406 = arguments.length;
var i__26897__auto___91408 = (0);
while(true){
if((i__26897__auto___91408 < len__26896__auto___91406)){
args91398.push((arguments[i__26897__auto___91408]));

var G__91410 = (i__26897__auto___91408 + (1));
i__26897__auto___91408 = G__91410;
continue;
} else {
}
break;
}

var G__91402 = args91398.length;
switch (G__91402) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91398.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__91396_SHARP_){
return !((p1__91396_SHARP_ === base));
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
var args__26903__auto__ = [];
var len__26896__auto___91444 = arguments.length;
var i__26897__auto___91445 = (0);
while(true){
if((i__26897__auto___91445 < len__26896__auto___91444)){
args__26903__auto__.push((arguments[i__26897__auto___91445]));

var G__91446 = (i__26897__auto___91445 + (1));
i__26897__auto___91445 = G__91446;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((1) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26904__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__91437_91453 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__91438_91454 = null;
var count__91439_91455 = (0);
var i__91440_91456 = (0);
while(true){
if((i__91440_91456 < count__91439_91455)){
var vec__91441_91458 = cljs.core._nth.call(null,chunk__91438_91454,i__91440_91456);
var k_91459 = cljs.core.nth.call(null,vec__91441_91458,(0),null);
var v_91460 = cljs.core.nth.call(null,vec__91441_91458,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_91459),v_91460);

var G__91462 = seq__91437_91453;
var G__91463 = chunk__91438_91454;
var G__91464 = count__91439_91455;
var G__91465 = (i__91440_91456 + (1));
seq__91437_91453 = G__91462;
chunk__91438_91454 = G__91463;
count__91439_91455 = G__91464;
i__91440_91456 = G__91465;
continue;
} else {
var temp__4657__auto___91470 = cljs.core.seq.call(null,seq__91437_91453);
if(temp__4657__auto___91470){
var seq__91437_91472__$1 = temp__4657__auto___91470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91437_91472__$1)){
var c__26638__auto___91475 = cljs.core.chunk_first.call(null,seq__91437_91472__$1);
var G__91477 = cljs.core.chunk_rest.call(null,seq__91437_91472__$1);
var G__91478 = c__26638__auto___91475;
var G__91479 = cljs.core.count.call(null,c__26638__auto___91475);
var G__91480 = (0);
seq__91437_91453 = G__91477;
chunk__91438_91454 = G__91478;
count__91439_91455 = G__91479;
i__91440_91456 = G__91480;
continue;
} else {
var vec__91442_91484 = cljs.core.first.call(null,seq__91437_91472__$1);
var k_91485 = cljs.core.nth.call(null,vec__91442_91484,(0),null);
var v_91486 = cljs.core.nth.call(null,vec__91442_91484,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_91485),v_91486);

var G__91491 = cljs.core.next.call(null,seq__91437_91472__$1);
var G__91492 = null;
var G__91493 = (0);
var G__91494 = (0);
seq__91437_91453 = G__91491;
chunk__91438_91454 = G__91492;
count__91439_91455 = G__91493;
i__91440_91456 = G__91494;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq91434){
var G__91435 = cljs.core.first.call(null,seq91434);
var seq91434__$1 = cljs.core.next.call(null,seq91434);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__91435,seq91434__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__26903__auto__ = [];
var len__26896__auto___91507 = arguments.length;
var i__26897__auto___91508 = (0);
while(true){
if((i__26897__auto___91508 < len__26896__auto___91507)){
args__26903__auto__.push((arguments[i__26897__auto___91508]));

var G__91509 = (i__26897__auto___91508 + (1));
i__26897__auto___91508 = G__91509;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((1) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26904__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__91503_91510 = cljs.core.seq.call(null,keywords);
var chunk__91504_91511 = null;
var count__91505_91512 = (0);
var i__91506_91513 = (0);
while(true){
if((i__91506_91513 < count__91505_91512)){
var kw_91514 = cljs.core._nth.call(null,chunk__91504_91511,i__91506_91513);
style.removeProperty(dommy.utils.as_str.call(null,kw_91514));

var G__91515 = seq__91503_91510;
var G__91516 = chunk__91504_91511;
var G__91517 = count__91505_91512;
var G__91518 = (i__91506_91513 + (1));
seq__91503_91510 = G__91515;
chunk__91504_91511 = G__91516;
count__91505_91512 = G__91517;
i__91506_91513 = G__91518;
continue;
} else {
var temp__4657__auto___91519 = cljs.core.seq.call(null,seq__91503_91510);
if(temp__4657__auto___91519){
var seq__91503_91520__$1 = temp__4657__auto___91519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91503_91520__$1)){
var c__26638__auto___91521 = cljs.core.chunk_first.call(null,seq__91503_91520__$1);
var G__91522 = cljs.core.chunk_rest.call(null,seq__91503_91520__$1);
var G__91523 = c__26638__auto___91521;
var G__91524 = cljs.core.count.call(null,c__26638__auto___91521);
var G__91525 = (0);
seq__91503_91510 = G__91522;
chunk__91504_91511 = G__91523;
count__91505_91512 = G__91524;
i__91506_91513 = G__91525;
continue;
} else {
var kw_91526 = cljs.core.first.call(null,seq__91503_91520__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_91526));

var G__91527 = cljs.core.next.call(null,seq__91503_91520__$1);
var G__91528 = null;
var G__91529 = (0);
var G__91530 = (0);
seq__91503_91510 = G__91527;
chunk__91504_91511 = G__91528;
count__91505_91512 = G__91529;
i__91506_91513 = G__91530;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq91495){
var G__91496 = cljs.core.first.call(null,seq91495);
var seq91495__$1 = cljs.core.next.call(null,seq91495);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__91496,seq91495__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__26903__auto__ = [];
var len__26896__auto___91543 = arguments.length;
var i__26897__auto___91544 = (0);
while(true){
if((i__26897__auto___91544 < len__26896__auto___91543)){
args__26903__auto__.push((arguments[i__26897__auto___91544]));

var G__91549 = (i__26897__auto___91544 + (1));
i__26897__auto___91544 = G__91549;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((1) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26904__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__91533_91554 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__91534_91555 = null;
var count__91535_91556 = (0);
var i__91536_91557 = (0);
while(true){
if((i__91536_91557 < count__91535_91556)){
var vec__91537_91560 = cljs.core._nth.call(null,chunk__91534_91555,i__91536_91557);
var k_91561 = cljs.core.nth.call(null,vec__91537_91560,(0),null);
var v_91562 = cljs.core.nth.call(null,vec__91537_91560,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_91561,[cljs.core.str(v_91562),cljs.core.str("px")].join(''));

var G__91568 = seq__91533_91554;
var G__91569 = chunk__91534_91555;
var G__91570 = count__91535_91556;
var G__91571 = (i__91536_91557 + (1));
seq__91533_91554 = G__91568;
chunk__91534_91555 = G__91569;
count__91535_91556 = G__91570;
i__91536_91557 = G__91571;
continue;
} else {
var temp__4657__auto___91574 = cljs.core.seq.call(null,seq__91533_91554);
if(temp__4657__auto___91574){
var seq__91533_91579__$1 = temp__4657__auto___91574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91533_91579__$1)){
var c__26638__auto___91580 = cljs.core.chunk_first.call(null,seq__91533_91579__$1);
var G__91582 = cljs.core.chunk_rest.call(null,seq__91533_91579__$1);
var G__91583 = c__26638__auto___91580;
var G__91584 = cljs.core.count.call(null,c__26638__auto___91580);
var G__91585 = (0);
seq__91533_91554 = G__91582;
chunk__91534_91555 = G__91583;
count__91535_91556 = G__91584;
i__91536_91557 = G__91585;
continue;
} else {
var vec__91538_91594 = cljs.core.first.call(null,seq__91533_91579__$1);
var k_91595 = cljs.core.nth.call(null,vec__91538_91594,(0),null);
var v_91596 = cljs.core.nth.call(null,vec__91538_91594,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_91595,[cljs.core.str(v_91596),cljs.core.str("px")].join(''));

var G__91599 = cljs.core.next.call(null,seq__91533_91579__$1);
var G__91600 = null;
var G__91601 = (0);
var G__91602 = (0);
seq__91533_91554 = G__91599;
chunk__91534_91555 = G__91600;
count__91535_91556 = G__91601;
i__91536_91557 = G__91602;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq91531){
var G__91532 = cljs.core.first.call(null,seq91531);
var seq91531__$1 = cljs.core.next.call(null,seq91531);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__91532,seq91531__$1);
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
var args91604 = [];
var len__26896__auto___91630 = arguments.length;
var i__26897__auto___91631 = (0);
while(true){
if((i__26897__auto___91631 < len__26896__auto___91630)){
args91604.push((arguments[i__26897__auto___91631]));

var G__91632 = (i__26897__auto___91631 + (1));
i__26897__auto___91631 = G__91632;
continue;
} else {
}
break;
}

var G__91612 = args91604.length;
switch (G__91612) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__26915__auto__ = (new cljs.core.IndexedSeq(args91604.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26915__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__91615 = elem;
(G__91615[k__$1] = v);

return G__91615;
} else {
var G__91616 = elem;
G__91616.setAttribute(k__$1,v);

return G__91616;
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

var seq__91617_91644 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__91618_91645 = null;
var count__91619_91646 = (0);
var i__91620_91647 = (0);
while(true){
if((i__91620_91647 < count__91619_91646)){
var vec__91623_91650 = cljs.core._nth.call(null,chunk__91618_91645,i__91620_91647);
var k_91651__$1 = cljs.core.nth.call(null,vec__91623_91650,(0),null);
var v_91652__$1 = cljs.core.nth.call(null,vec__91623_91650,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_91651__$1,v_91652__$1);

var G__91654 = seq__91617_91644;
var G__91655 = chunk__91618_91645;
var G__91656 = count__91619_91646;
var G__91657 = (i__91620_91647 + (1));
seq__91617_91644 = G__91654;
chunk__91618_91645 = G__91655;
count__91619_91646 = G__91656;
i__91620_91647 = G__91657;
continue;
} else {
var temp__4657__auto___91658 = cljs.core.seq.call(null,seq__91617_91644);
if(temp__4657__auto___91658){
var seq__91617_91659__$1 = temp__4657__auto___91658;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91617_91659__$1)){
var c__26638__auto___91660 = cljs.core.chunk_first.call(null,seq__91617_91659__$1);
var G__91661 = cljs.core.chunk_rest.call(null,seq__91617_91659__$1);
var G__91662 = c__26638__auto___91660;
var G__91663 = cljs.core.count.call(null,c__26638__auto___91660);
var G__91664 = (0);
seq__91617_91644 = G__91661;
chunk__91618_91645 = G__91662;
count__91619_91646 = G__91663;
i__91620_91647 = G__91664;
continue;
} else {
var vec__91627_91665 = cljs.core.first.call(null,seq__91617_91659__$1);
var k_91666__$1 = cljs.core.nth.call(null,vec__91627_91665,(0),null);
var v_91667__$1 = cljs.core.nth.call(null,vec__91627_91665,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_91666__$1,v_91667__$1);

var G__91672 = cljs.core.next.call(null,seq__91617_91659__$1);
var G__91673 = null;
var G__91674 = (0);
var G__91675 = (0);
seq__91617_91644 = G__91672;
chunk__91618_91645 = G__91673;
count__91619_91646 = G__91674;
i__91620_91647 = G__91675;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq91605){
var G__91606 = cljs.core.first.call(null,seq91605);
var seq91605__$1 = cljs.core.next.call(null,seq91605);
var G__91607 = cljs.core.first.call(null,seq91605__$1);
var seq91605__$2 = cljs.core.next.call(null,seq91605__$1);
var G__91608 = cljs.core.first.call(null,seq91605__$2);
var seq91605__$3 = cljs.core.next.call(null,seq91605__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__91606,G__91607,G__91608,seq91605__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args91694 = [];
var len__26896__auto___91716 = arguments.length;
var i__26897__auto___91717 = (0);
while(true){
if((i__26897__auto___91717 < len__26896__auto___91716)){
args91694.push((arguments[i__26897__auto___91717]));

var G__91718 = (i__26897__auto___91717 + (1));
i__26897__auto___91717 = G__91718;
continue;
} else {
}
break;
}

var G__91706 = args91694.length;
switch (G__91706) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26915__auto__ = (new cljs.core.IndexedSeq(args91694.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26915__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_91720__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_91720__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_91720__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__91708_91725 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__91709_91726 = null;
var count__91710_91727 = (0);
var i__91711_91728 = (0);
while(true){
if((i__91711_91728 < count__91710_91727)){
var k_91730__$1 = cljs.core._nth.call(null,chunk__91709_91726,i__91711_91728);
dommy.core.remove_attr_BANG_.call(null,elem,k_91730__$1);

var G__91735 = seq__91708_91725;
var G__91736 = chunk__91709_91726;
var G__91737 = count__91710_91727;
var G__91738 = (i__91711_91728 + (1));
seq__91708_91725 = G__91735;
chunk__91709_91726 = G__91736;
count__91710_91727 = G__91737;
i__91711_91728 = G__91738;
continue;
} else {
var temp__4657__auto___91743 = cljs.core.seq.call(null,seq__91708_91725);
if(temp__4657__auto___91743){
var seq__91708_91744__$1 = temp__4657__auto___91743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91708_91744__$1)){
var c__26638__auto___91745 = cljs.core.chunk_first.call(null,seq__91708_91744__$1);
var G__91746 = cljs.core.chunk_rest.call(null,seq__91708_91744__$1);
var G__91747 = c__26638__auto___91745;
var G__91748 = cljs.core.count.call(null,c__26638__auto___91745);
var G__91749 = (0);
seq__91708_91725 = G__91746;
chunk__91709_91726 = G__91747;
count__91710_91727 = G__91748;
i__91711_91728 = G__91749;
continue;
} else {
var k_91750__$1 = cljs.core.first.call(null,seq__91708_91744__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_91750__$1);

var G__91755 = cljs.core.next.call(null,seq__91708_91744__$1);
var G__91756 = null;
var G__91757 = (0);
var G__91758 = (0);
seq__91708_91725 = G__91755;
chunk__91709_91726 = G__91756;
count__91710_91727 = G__91757;
i__91711_91728 = G__91758;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq91695){
var G__91696 = cljs.core.first.call(null,seq91695);
var seq91695__$1 = cljs.core.next.call(null,seq91695);
var G__91697 = cljs.core.first.call(null,seq91695__$1);
var seq91695__$2 = cljs.core.next.call(null,seq91695__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__91696,G__91697,seq91695__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args91773 = [];
var len__26896__auto___91792 = arguments.length;
var i__26897__auto___91793 = (0);
while(true){
if((i__26897__auto___91793 < len__26896__auto___91792)){
args91773.push((arguments[i__26897__auto___91793]));

var G__91794 = (i__26897__auto___91793 + (1));
i__26897__auto___91793 = G__91794;
continue;
} else {
}
break;
}

var G__91785 = args91773.length;
switch (G__91785) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91773.length)].join('')));

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
var args91804 = [];
var len__26896__auto___91843 = arguments.length;
var i__26897__auto___91844 = (0);
while(true){
if((i__26897__auto___91844 < len__26896__auto___91843)){
args91804.push((arguments[i__26897__auto___91844]));

var G__91846 = (i__26897__auto___91844 + (1));
i__26897__auto___91844 = G__91846;
continue;
} else {
}
break;
}

var G__91814 = args91804.length;
switch (G__91814) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26915__auto__ = (new cljs.core.IndexedSeq(args91804.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26915__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___91850 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___91850)){
var class_list_91851 = temp__4655__auto___91850;
var seq__91819_91853 = cljs.core.seq.call(null,classes__$1);
var chunk__91820_91854 = null;
var count__91821_91855 = (0);
var i__91822_91856 = (0);
while(true){
if((i__91822_91856 < count__91821_91855)){
var c_91859 = cljs.core._nth.call(null,chunk__91820_91854,i__91822_91856);
class_list_91851.add(c_91859);

var G__91861 = seq__91819_91853;
var G__91862 = chunk__91820_91854;
var G__91863 = count__91821_91855;
var G__91864 = (i__91822_91856 + (1));
seq__91819_91853 = G__91861;
chunk__91820_91854 = G__91862;
count__91821_91855 = G__91863;
i__91822_91856 = G__91864;
continue;
} else {
var temp__4657__auto___91865 = cljs.core.seq.call(null,seq__91819_91853);
if(temp__4657__auto___91865){
var seq__91819_91867__$1 = temp__4657__auto___91865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91819_91867__$1)){
var c__26638__auto___91869 = cljs.core.chunk_first.call(null,seq__91819_91867__$1);
var G__91870 = cljs.core.chunk_rest.call(null,seq__91819_91867__$1);
var G__91871 = c__26638__auto___91869;
var G__91872 = cljs.core.count.call(null,c__26638__auto___91869);
var G__91873 = (0);
seq__91819_91853 = G__91870;
chunk__91820_91854 = G__91871;
count__91821_91855 = G__91872;
i__91822_91856 = G__91873;
continue;
} else {
var c_91876 = cljs.core.first.call(null,seq__91819_91867__$1);
class_list_91851.add(c_91876);

var G__91877 = cljs.core.next.call(null,seq__91819_91867__$1);
var G__91878 = null;
var G__91879 = (0);
var G__91880 = (0);
seq__91819_91853 = G__91877;
chunk__91820_91854 = G__91878;
count__91821_91855 = G__91879;
i__91822_91856 = G__91880;
continue;
}
} else {
}
}
break;
}
} else {
var seq__91826_91882 = cljs.core.seq.call(null,classes__$1);
var chunk__91827_91883 = null;
var count__91828_91884 = (0);
var i__91829_91885 = (0);
while(true){
if((i__91829_91885 < count__91828_91884)){
var c_91889 = cljs.core._nth.call(null,chunk__91827_91883,i__91829_91885);
var class_name_91894 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_91894,c_91889))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_91894 === ""))?c_91889:[cljs.core.str(class_name_91894),cljs.core.str(" "),cljs.core.str(c_91889)].join('')));
}

var G__91909 = seq__91826_91882;
var G__91910 = chunk__91827_91883;
var G__91911 = count__91828_91884;
var G__91912 = (i__91829_91885 + (1));
seq__91826_91882 = G__91909;
chunk__91827_91883 = G__91910;
count__91828_91884 = G__91911;
i__91829_91885 = G__91912;
continue;
} else {
var temp__4657__auto___91916 = cljs.core.seq.call(null,seq__91826_91882);
if(temp__4657__auto___91916){
var seq__91826_91918__$1 = temp__4657__auto___91916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91826_91918__$1)){
var c__26638__auto___91921 = cljs.core.chunk_first.call(null,seq__91826_91918__$1);
var G__91923 = cljs.core.chunk_rest.call(null,seq__91826_91918__$1);
var G__91924 = c__26638__auto___91921;
var G__91925 = cljs.core.count.call(null,c__26638__auto___91921);
var G__91926 = (0);
seq__91826_91882 = G__91923;
chunk__91827_91883 = G__91924;
count__91828_91884 = G__91925;
i__91829_91885 = G__91926;
continue;
} else {
var c_91928 = cljs.core.first.call(null,seq__91826_91918__$1);
var class_name_91930 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_91930,c_91928))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_91930 === ""))?c_91928:[cljs.core.str(class_name_91930),cljs.core.str(" "),cljs.core.str(c_91928)].join('')));
}

var G__91933 = cljs.core.next.call(null,seq__91826_91918__$1);
var G__91934 = null;
var G__91935 = (0);
var G__91936 = (0);
seq__91826_91882 = G__91933;
chunk__91827_91883 = G__91934;
count__91828_91884 = G__91935;
i__91829_91885 = G__91936;
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
var seq__91839_91937 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__91840_91938 = null;
var count__91841_91939 = (0);
var i__91842_91940 = (0);
while(true){
if((i__91842_91940 < count__91841_91939)){
var c_91941 = cljs.core._nth.call(null,chunk__91840_91938,i__91842_91940);
dommy.core.add_class_BANG_.call(null,elem,c_91941);

var G__91942 = seq__91839_91937;
var G__91943 = chunk__91840_91938;
var G__91944 = count__91841_91939;
var G__91945 = (i__91842_91940 + (1));
seq__91839_91937 = G__91942;
chunk__91840_91938 = G__91943;
count__91841_91939 = G__91944;
i__91842_91940 = G__91945;
continue;
} else {
var temp__4657__auto___91946 = cljs.core.seq.call(null,seq__91839_91937);
if(temp__4657__auto___91946){
var seq__91839_91947__$1 = temp__4657__auto___91946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91839_91947__$1)){
var c__26638__auto___91948 = cljs.core.chunk_first.call(null,seq__91839_91947__$1);
var G__91949 = cljs.core.chunk_rest.call(null,seq__91839_91947__$1);
var G__91950 = c__26638__auto___91948;
var G__91951 = cljs.core.count.call(null,c__26638__auto___91948);
var G__91952 = (0);
seq__91839_91937 = G__91949;
chunk__91840_91938 = G__91950;
count__91841_91939 = G__91951;
i__91842_91940 = G__91952;
continue;
} else {
var c_91954 = cljs.core.first.call(null,seq__91839_91947__$1);
dommy.core.add_class_BANG_.call(null,elem,c_91954);

var G__91955 = cljs.core.next.call(null,seq__91839_91947__$1);
var G__91956 = null;
var G__91957 = (0);
var G__91958 = (0);
seq__91839_91937 = G__91955;
chunk__91840_91938 = G__91956;
count__91841_91939 = G__91957;
i__91842_91940 = G__91958;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq91805){
var G__91806 = cljs.core.first.call(null,seq91805);
var seq91805__$1 = cljs.core.next.call(null,seq91805);
var G__91807 = cljs.core.first.call(null,seq91805__$1);
var seq91805__$2 = cljs.core.next.call(null,seq91805__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__91806,G__91807,seq91805__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args91960 = [];
var len__26896__auto___91982 = arguments.length;
var i__26897__auto___91983 = (0);
while(true){
if((i__26897__auto___91983 < len__26896__auto___91982)){
args91960.push((arguments[i__26897__auto___91983]));

var G__91986 = (i__26897__auto___91983 + (1));
i__26897__auto___91983 = G__91986;
continue;
} else {
}
break;
}

var G__91965 = args91960.length;
switch (G__91965) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26915__auto__ = (new cljs.core.IndexedSeq(args91960.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26915__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___91994 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___91994)){
var class_list_91995 = temp__4655__auto___91994;
class_list_91995.remove(c__$1);
} else {
var class_name_92000 = dommy.core.class$.call(null,elem);
var new_class_name_92001 = dommy.utils.remove_class_str.call(null,class_name_92000,c__$1);
if((class_name_92000 === new_class_name_92001)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_92001);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__91972 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__91973 = null;
var count__91974 = (0);
var i__91975 = (0);
while(true){
if((i__91975 < count__91974)){
var c = cljs.core._nth.call(null,chunk__91973,i__91975);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__92013 = seq__91972;
var G__92014 = chunk__91973;
var G__92015 = count__91974;
var G__92016 = (i__91975 + (1));
seq__91972 = G__92013;
chunk__91973 = G__92014;
count__91974 = G__92015;
i__91975 = G__92016;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__91972);
if(temp__4657__auto__){
var seq__91972__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91972__$1)){
var c__26638__auto__ = cljs.core.chunk_first.call(null,seq__91972__$1);
var G__92025 = cljs.core.chunk_rest.call(null,seq__91972__$1);
var G__92026 = c__26638__auto__;
var G__92027 = cljs.core.count.call(null,c__26638__auto__);
var G__92028 = (0);
seq__91972 = G__92025;
chunk__91973 = G__92026;
count__91974 = G__92027;
i__91975 = G__92028;
continue;
} else {
var c = cljs.core.first.call(null,seq__91972__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__92036 = cljs.core.next.call(null,seq__91972__$1);
var G__92037 = null;
var G__92038 = (0);
var G__92039 = (0);
seq__91972 = G__92036;
chunk__91973 = G__92037;
count__91974 = G__92038;
i__91975 = G__92039;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq91961){
var G__91962 = cljs.core.first.call(null,seq91961);
var seq91961__$1 = cljs.core.next.call(null,seq91961);
var G__91963 = cljs.core.first.call(null,seq91961__$1);
var seq91961__$2 = cljs.core.next.call(null,seq91961__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__91962,G__91963,seq91961__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args92044 = [];
var len__26896__auto___92053 = arguments.length;
var i__26897__auto___92055 = (0);
while(true){
if((i__26897__auto___92055 < len__26896__auto___92053)){
args92044.push((arguments[i__26897__auto___92055]));

var G__92059 = (i__26897__auto___92055 + (1));
i__26897__auto___92055 = G__92059;
continue;
} else {
}
break;
}

var G__92048 = args92044.length;
switch (G__92048) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92044.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___92063 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___92063)){
var class_list_92064 = temp__4655__auto___92063;
class_list_92064.toggle(c__$1);
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
var args92071 = [];
var len__26896__auto___92079 = arguments.length;
var i__26897__auto___92081 = (0);
while(true){
if((i__26897__auto___92081 < len__26896__auto___92079)){
args92071.push((arguments[i__26897__auto___92081]));

var G__92084 = (i__26897__auto___92081 + (1));
i__26897__auto___92081 = G__92084;
continue;
} else {
}
break;
}

var G__92077 = args92071.length;
switch (G__92077) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92071.length)].join('')));

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
var args92093 = [];
var len__26896__auto___92099 = arguments.length;
var i__26897__auto___92100 = (0);
while(true){
if((i__26897__auto___92100 < len__26896__auto___92099)){
args92093.push((arguments[i__26897__auto___92100]));

var G__92103 = (i__26897__auto___92100 + (1));
i__26897__auto___92100 = G__92103;
continue;
} else {
}
break;
}

var G__92097 = args92093.length;
switch (G__92097) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92093.length)].join('')));

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
var args92114 = [];
var len__26896__auto___92135 = arguments.length;
var i__26897__auto___92136 = (0);
while(true){
if((i__26897__auto___92136 < len__26896__auto___92135)){
args92114.push((arguments[i__26897__auto___92136]));

var G__92137 = (i__26897__auto___92136 + (1));
i__26897__auto___92136 = G__92137;
continue;
} else {
}
break;
}

var G__92124 = args92114.length;
switch (G__92124) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26915__auto__ = (new cljs.core.IndexedSeq(args92114.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26915__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__92126 = parent;
G__92126.appendChild(child);

return G__92126;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__92129_92149 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__92130_92150 = null;
var count__92131_92151 = (0);
var i__92132_92152 = (0);
while(true){
if((i__92132_92152 < count__92131_92151)){
var c_92156 = cljs.core._nth.call(null,chunk__92130_92150,i__92132_92152);
dommy.core.append_BANG_.call(null,parent,c_92156);

var G__92157 = seq__92129_92149;
var G__92158 = chunk__92130_92150;
var G__92159 = count__92131_92151;
var G__92160 = (i__92132_92152 + (1));
seq__92129_92149 = G__92157;
chunk__92130_92150 = G__92158;
count__92131_92151 = G__92159;
i__92132_92152 = G__92160;
continue;
} else {
var temp__4657__auto___92162 = cljs.core.seq.call(null,seq__92129_92149);
if(temp__4657__auto___92162){
var seq__92129_92163__$1 = temp__4657__auto___92162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92129_92163__$1)){
var c__26638__auto___92164 = cljs.core.chunk_first.call(null,seq__92129_92163__$1);
var G__92168 = cljs.core.chunk_rest.call(null,seq__92129_92163__$1);
var G__92169 = c__26638__auto___92164;
var G__92170 = cljs.core.count.call(null,c__26638__auto___92164);
var G__92171 = (0);
seq__92129_92149 = G__92168;
chunk__92130_92150 = G__92169;
count__92131_92151 = G__92170;
i__92132_92152 = G__92171;
continue;
} else {
var c_92175 = cljs.core.first.call(null,seq__92129_92163__$1);
dommy.core.append_BANG_.call(null,parent,c_92175);

var G__92178 = cljs.core.next.call(null,seq__92129_92163__$1);
var G__92179 = null;
var G__92180 = (0);
var G__92181 = (0);
seq__92129_92149 = G__92178;
chunk__92130_92150 = G__92179;
count__92131_92151 = G__92180;
i__92132_92152 = G__92181;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq92119){
var G__92120 = cljs.core.first.call(null,seq92119);
var seq92119__$1 = cljs.core.next.call(null,seq92119);
var G__92121 = cljs.core.first.call(null,seq92119__$1);
var seq92119__$2 = cljs.core.next.call(null,seq92119__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__92120,G__92121,seq92119__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args92185 = [];
var len__26896__auto___92200 = arguments.length;
var i__26897__auto___92201 = (0);
while(true){
if((i__26897__auto___92201 < len__26896__auto___92200)){
args92185.push((arguments[i__26897__auto___92201]));

var G__92202 = (i__26897__auto___92201 + (1));
i__26897__auto___92201 = G__92202;
continue;
} else {
}
break;
}

var G__92190 = args92185.length;
switch (G__92190) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26915__auto__ = (new cljs.core.IndexedSeq(args92185.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26915__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__92192 = parent;
G__92192.insertBefore(child,parent.firstChild);

return G__92192;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__92194_92208 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__92195_92209 = null;
var count__92196_92210 = (0);
var i__92197_92211 = (0);
while(true){
if((i__92197_92211 < count__92196_92210)){
var c_92216 = cljs.core._nth.call(null,chunk__92195_92209,i__92197_92211);
dommy.core.prepend_BANG_.call(null,parent,c_92216);

var G__92218 = seq__92194_92208;
var G__92220 = chunk__92195_92209;
var G__92221 = count__92196_92210;
var G__92223 = (i__92197_92211 + (1));
seq__92194_92208 = G__92218;
chunk__92195_92209 = G__92220;
count__92196_92210 = G__92221;
i__92197_92211 = G__92223;
continue;
} else {
var temp__4657__auto___92225 = cljs.core.seq.call(null,seq__92194_92208);
if(temp__4657__auto___92225){
var seq__92194_92228__$1 = temp__4657__auto___92225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92194_92228__$1)){
var c__26638__auto___92231 = cljs.core.chunk_first.call(null,seq__92194_92228__$1);
var G__92232 = cljs.core.chunk_rest.call(null,seq__92194_92228__$1);
var G__92233 = c__26638__auto___92231;
var G__92234 = cljs.core.count.call(null,c__26638__auto___92231);
var G__92235 = (0);
seq__92194_92208 = G__92232;
chunk__92195_92209 = G__92233;
count__92196_92210 = G__92234;
i__92197_92211 = G__92235;
continue;
} else {
var c_92237 = cljs.core.first.call(null,seq__92194_92228__$1);
dommy.core.prepend_BANG_.call(null,parent,c_92237);

var G__92238 = cljs.core.next.call(null,seq__92194_92228__$1);
var G__92239 = null;
var G__92240 = (0);
var G__92241 = (0);
seq__92194_92208 = G__92238;
chunk__92195_92209 = G__92239;
count__92196_92210 = G__92240;
i__92197_92211 = G__92241;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq92186){
var G__92187 = cljs.core.first.call(null,seq92186);
var seq92186__$1 = cljs.core.next.call(null,seq92186);
var G__92188 = cljs.core.first.call(null,seq92186__$1);
var seq92186__$2 = cljs.core.next.call(null,seq92186__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__92187,G__92188,seq92186__$2);
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
var temp__4655__auto___92250 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___92250)){
var next_92251 = temp__4655__auto___92250;
dommy.core.insert_before_BANG_.call(null,elem,next_92251);
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
var args92252 = [];
var len__26896__auto___92261 = arguments.length;
var i__26897__auto___92263 = (0);
while(true){
if((i__26897__auto___92263 < len__26896__auto___92261)){
args92252.push((arguments[i__26897__auto___92263]));

var G__92267 = (i__26897__auto___92263 + (1));
i__26897__auto___92263 = G__92267;
continue;
} else {
}
break;
}

var G__92259 = args92252.length;
switch (G__92259) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92252.length)].join('')));

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
var G__92260 = p;
G__92260.removeChild(elem);

return G__92260;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__92272){
var vec__92273 = p__92272;
var special_mouse_event = cljs.core.nth.call(null,vec__92273,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__92273,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__92273,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__92273,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__25827__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__25815__auto__ = related_target;
if(cljs.core.truth_(and__25815__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__25815__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__92273,special_mouse_event,real_mouse_event))
});})(vec__92273,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__25815__auto__ = selected_target;
if(cljs.core.truth_(and__25815__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__25815__auto__;
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
var or__25827__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__26903__auto__ = [];
var len__26896__auto___92298 = arguments.length;
var i__26897__auto___92299 = (0);
while(true){
if((i__26897__auto___92299 < len__26896__auto___92298)){
args__26903__auto__.push((arguments[i__26897__auto___92299]));

var G__92300 = (i__26897__auto___92299 + (1));
i__26897__auto___92299 = G__92300;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((2) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26904__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq92294){
var G__92295 = cljs.core.first.call(null,seq92294);
var seq92294__$1 = cljs.core.next.call(null,seq92294);
var G__92296 = cljs.core.first.call(null,seq92294__$1);
var seq92294__$2 = cljs.core.next.call(null,seq92294__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__92295,G__92296,seq92294__$2);
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
var args__26903__auto__ = [];
var len__26896__auto___92350 = arguments.length;
var i__26897__auto___92351 = (0);
while(true){
if((i__26897__auto___92351 < len__26896__auto___92350)){
args__26903__auto__.push((arguments[i__26897__auto___92351]));

var G__92352 = (i__26897__auto___92351 + (1));
i__26897__auto___92351 = G__92352;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((1) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26904__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__92323_92353 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_92354 = cljs.core.nth.call(null,vec__92323_92353,(0),null);
var selector_92355 = cljs.core.nth.call(null,vec__92323_92353,(1),null);
var seq__92324_92357 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__92331_92358 = null;
var count__92332_92359 = (0);
var i__92333_92360 = (0);
while(true){
if((i__92333_92360 < count__92332_92359)){
var vec__92344_92362 = cljs.core._nth.call(null,chunk__92331_92358,i__92333_92360);
var orig_type_92363 = cljs.core.nth.call(null,vec__92344_92362,(0),null);
var f_92364 = cljs.core.nth.call(null,vec__92344_92362,(1),null);
var seq__92334_92372 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_92363,cljs.core.PersistentArrayMap.fromArray([orig_type_92363,cljs.core.identity], true, false)));
var chunk__92336_92373 = null;
var count__92337_92374 = (0);
var i__92338_92375 = (0);
while(true){
if((i__92338_92375 < count__92337_92374)){
var vec__92345_92389 = cljs.core._nth.call(null,chunk__92336_92373,i__92338_92375);
var actual_type_92390 = cljs.core.nth.call(null,vec__92345_92389,(0),null);
var factory_92391 = cljs.core.nth.call(null,vec__92345_92389,(1),null);
var canonical_f_92393 = (cljs.core.truth_(selector_92355)?cljs.core.partial.call(null,dommy.core.live_listener,elem_92354,selector_92355):cljs.core.identity).call(null,factory_92391.call(null,f_92364));
dommy.core.update_event_listeners_BANG_.call(null,elem_92354,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92355,actual_type_92390,f_92364], null),canonical_f_92393);

if(cljs.core.truth_(elem_92354.addEventListener)){
elem_92354.addEventListener(cljs.core.name.call(null,actual_type_92390),canonical_f_92393);
} else {
elem_92354.attachEvent(cljs.core.name.call(null,actual_type_92390),canonical_f_92393);
}

var G__92408 = seq__92334_92372;
var G__92409 = chunk__92336_92373;
var G__92410 = count__92337_92374;
var G__92411 = (i__92338_92375 + (1));
seq__92334_92372 = G__92408;
chunk__92336_92373 = G__92409;
count__92337_92374 = G__92410;
i__92338_92375 = G__92411;
continue;
} else {
var temp__4657__auto___92412 = cljs.core.seq.call(null,seq__92334_92372);
if(temp__4657__auto___92412){
var seq__92334_92413__$1 = temp__4657__auto___92412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92334_92413__$1)){
var c__26638__auto___92414 = cljs.core.chunk_first.call(null,seq__92334_92413__$1);
var G__92415 = cljs.core.chunk_rest.call(null,seq__92334_92413__$1);
var G__92416 = c__26638__auto___92414;
var G__92417 = cljs.core.count.call(null,c__26638__auto___92414);
var G__92418 = (0);
seq__92334_92372 = G__92415;
chunk__92336_92373 = G__92416;
count__92337_92374 = G__92417;
i__92338_92375 = G__92418;
continue;
} else {
var vec__92346_92419 = cljs.core.first.call(null,seq__92334_92413__$1);
var actual_type_92420 = cljs.core.nth.call(null,vec__92346_92419,(0),null);
var factory_92421 = cljs.core.nth.call(null,vec__92346_92419,(1),null);
var canonical_f_92422 = (cljs.core.truth_(selector_92355)?cljs.core.partial.call(null,dommy.core.live_listener,elem_92354,selector_92355):cljs.core.identity).call(null,factory_92421.call(null,f_92364));
dommy.core.update_event_listeners_BANG_.call(null,elem_92354,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92355,actual_type_92420,f_92364], null),canonical_f_92422);

if(cljs.core.truth_(elem_92354.addEventListener)){
elem_92354.addEventListener(cljs.core.name.call(null,actual_type_92420),canonical_f_92422);
} else {
elem_92354.attachEvent(cljs.core.name.call(null,actual_type_92420),canonical_f_92422);
}

var G__92423 = cljs.core.next.call(null,seq__92334_92413__$1);
var G__92424 = null;
var G__92425 = (0);
var G__92426 = (0);
seq__92334_92372 = G__92423;
chunk__92336_92373 = G__92424;
count__92337_92374 = G__92425;
i__92338_92375 = G__92426;
continue;
}
} else {
}
}
break;
}

var G__92428 = seq__92324_92357;
var G__92429 = chunk__92331_92358;
var G__92430 = count__92332_92359;
var G__92431 = (i__92333_92360 + (1));
seq__92324_92357 = G__92428;
chunk__92331_92358 = G__92429;
count__92332_92359 = G__92430;
i__92333_92360 = G__92431;
continue;
} else {
var temp__4657__auto___92432 = cljs.core.seq.call(null,seq__92324_92357);
if(temp__4657__auto___92432){
var seq__92324_92433__$1 = temp__4657__auto___92432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92324_92433__$1)){
var c__26638__auto___92434 = cljs.core.chunk_first.call(null,seq__92324_92433__$1);
var G__92435 = cljs.core.chunk_rest.call(null,seq__92324_92433__$1);
var G__92436 = c__26638__auto___92434;
var G__92437 = cljs.core.count.call(null,c__26638__auto___92434);
var G__92438 = (0);
seq__92324_92357 = G__92435;
chunk__92331_92358 = G__92436;
count__92332_92359 = G__92437;
i__92333_92360 = G__92438;
continue;
} else {
var vec__92347_92439 = cljs.core.first.call(null,seq__92324_92433__$1);
var orig_type_92440 = cljs.core.nth.call(null,vec__92347_92439,(0),null);
var f_92441 = cljs.core.nth.call(null,vec__92347_92439,(1),null);
var seq__92325_92442 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_92440,cljs.core.PersistentArrayMap.fromArray([orig_type_92440,cljs.core.identity], true, false)));
var chunk__92327_92443 = null;
var count__92328_92444 = (0);
var i__92329_92445 = (0);
while(true){
if((i__92329_92445 < count__92328_92444)){
var vec__92348_92446 = cljs.core._nth.call(null,chunk__92327_92443,i__92329_92445);
var actual_type_92447 = cljs.core.nth.call(null,vec__92348_92446,(0),null);
var factory_92448 = cljs.core.nth.call(null,vec__92348_92446,(1),null);
var canonical_f_92453 = (cljs.core.truth_(selector_92355)?cljs.core.partial.call(null,dommy.core.live_listener,elem_92354,selector_92355):cljs.core.identity).call(null,factory_92448.call(null,f_92441));
dommy.core.update_event_listeners_BANG_.call(null,elem_92354,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92355,actual_type_92447,f_92441], null),canonical_f_92453);

if(cljs.core.truth_(elem_92354.addEventListener)){
elem_92354.addEventListener(cljs.core.name.call(null,actual_type_92447),canonical_f_92453);
} else {
elem_92354.attachEvent(cljs.core.name.call(null,actual_type_92447),canonical_f_92453);
}

var G__92464 = seq__92325_92442;
var G__92465 = chunk__92327_92443;
var G__92466 = count__92328_92444;
var G__92467 = (i__92329_92445 + (1));
seq__92325_92442 = G__92464;
chunk__92327_92443 = G__92465;
count__92328_92444 = G__92466;
i__92329_92445 = G__92467;
continue;
} else {
var temp__4657__auto___92471__$1 = cljs.core.seq.call(null,seq__92325_92442);
if(temp__4657__auto___92471__$1){
var seq__92325_92474__$1 = temp__4657__auto___92471__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92325_92474__$1)){
var c__26638__auto___92475 = cljs.core.chunk_first.call(null,seq__92325_92474__$1);
var G__92476 = cljs.core.chunk_rest.call(null,seq__92325_92474__$1);
var G__92477 = c__26638__auto___92475;
var G__92478 = cljs.core.count.call(null,c__26638__auto___92475);
var G__92479 = (0);
seq__92325_92442 = G__92476;
chunk__92327_92443 = G__92477;
count__92328_92444 = G__92478;
i__92329_92445 = G__92479;
continue;
} else {
var vec__92349_92483 = cljs.core.first.call(null,seq__92325_92474__$1);
var actual_type_92484 = cljs.core.nth.call(null,vec__92349_92483,(0),null);
var factory_92485 = cljs.core.nth.call(null,vec__92349_92483,(1),null);
var canonical_f_92486 = (cljs.core.truth_(selector_92355)?cljs.core.partial.call(null,dommy.core.live_listener,elem_92354,selector_92355):cljs.core.identity).call(null,factory_92485.call(null,f_92441));
dommy.core.update_event_listeners_BANG_.call(null,elem_92354,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92355,actual_type_92484,f_92441], null),canonical_f_92486);

if(cljs.core.truth_(elem_92354.addEventListener)){
elem_92354.addEventListener(cljs.core.name.call(null,actual_type_92484),canonical_f_92486);
} else {
elem_92354.attachEvent(cljs.core.name.call(null,actual_type_92484),canonical_f_92486);
}

var G__92488 = cljs.core.next.call(null,seq__92325_92474__$1);
var G__92489 = null;
var G__92490 = (0);
var G__92491 = (0);
seq__92325_92442 = G__92488;
chunk__92327_92443 = G__92489;
count__92328_92444 = G__92490;
i__92329_92445 = G__92491;
continue;
}
} else {
}
}
break;
}

var G__92495 = cljs.core.next.call(null,seq__92324_92433__$1);
var G__92496 = null;
var G__92497 = (0);
var G__92498 = (0);
seq__92324_92357 = G__92495;
chunk__92331_92358 = G__92496;
count__92332_92359 = G__92497;
i__92333_92360 = G__92498;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq92310){
var G__92311 = cljs.core.first.call(null,seq92310);
var seq92310__$1 = cljs.core.next.call(null,seq92310);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__92311,seq92310__$1);
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
var args__26903__auto__ = [];
var len__26896__auto___92556 = arguments.length;
var i__26897__auto___92557 = (0);
while(true){
if((i__26897__auto___92557 < len__26896__auto___92556)){
args__26903__auto__.push((arguments[i__26897__auto___92557]));

var G__92558 = (i__26897__auto___92557 + (1));
i__26897__auto___92557 = G__92558;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((1) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26904__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__92521_92559 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_92560 = cljs.core.nth.call(null,vec__92521_92559,(0),null);
var selector_92561 = cljs.core.nth.call(null,vec__92521_92559,(1),null);
var seq__92530_92562 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__92537_92563 = null;
var count__92538_92564 = (0);
var i__92539_92565 = (0);
while(true){
if((i__92539_92565 < count__92538_92564)){
var vec__92546_92566 = cljs.core._nth.call(null,chunk__92537_92563,i__92539_92565);
var orig_type_92567 = cljs.core.nth.call(null,vec__92546_92566,(0),null);
var f_92568 = cljs.core.nth.call(null,vec__92546_92566,(1),null);
var seq__92540_92569 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_92567,cljs.core.PersistentArrayMap.fromArray([orig_type_92567,cljs.core.identity], true, false)));
var chunk__92542_92570 = null;
var count__92543_92571 = (0);
var i__92544_92572 = (0);
while(true){
if((i__92544_92572 < count__92543_92571)){
var vec__92548_92573 = cljs.core._nth.call(null,chunk__92542_92570,i__92544_92572);
var actual_type_92574 = cljs.core.nth.call(null,vec__92548_92573,(0),null);
var __92575 = cljs.core.nth.call(null,vec__92548_92573,(1),null);
var keys_92576 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92561,actual_type_92574,f_92568], null);
var canonical_f_92577 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_92560),keys_92576);
dommy.core.update_event_listeners_BANG_.call(null,elem_92560,dommy.utils.dissoc_in,keys_92576);

if(cljs.core.truth_(elem_92560.removeEventListener)){
elem_92560.removeEventListener(cljs.core.name.call(null,actual_type_92574),canonical_f_92577);
} else {
elem_92560.detachEvent(cljs.core.name.call(null,actual_type_92574),canonical_f_92577);
}

var G__92578 = seq__92540_92569;
var G__92579 = chunk__92542_92570;
var G__92580 = count__92543_92571;
var G__92581 = (i__92544_92572 + (1));
seq__92540_92569 = G__92578;
chunk__92542_92570 = G__92579;
count__92543_92571 = G__92580;
i__92544_92572 = G__92581;
continue;
} else {
var temp__4657__auto___92582 = cljs.core.seq.call(null,seq__92540_92569);
if(temp__4657__auto___92582){
var seq__92540_92583__$1 = temp__4657__auto___92582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92540_92583__$1)){
var c__26638__auto___92584 = cljs.core.chunk_first.call(null,seq__92540_92583__$1);
var G__92585 = cljs.core.chunk_rest.call(null,seq__92540_92583__$1);
var G__92586 = c__26638__auto___92584;
var G__92587 = cljs.core.count.call(null,c__26638__auto___92584);
var G__92588 = (0);
seq__92540_92569 = G__92585;
chunk__92542_92570 = G__92586;
count__92543_92571 = G__92587;
i__92544_92572 = G__92588;
continue;
} else {
var vec__92551_92589 = cljs.core.first.call(null,seq__92540_92583__$1);
var actual_type_92590 = cljs.core.nth.call(null,vec__92551_92589,(0),null);
var __92591 = cljs.core.nth.call(null,vec__92551_92589,(1),null);
var keys_92598 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92561,actual_type_92590,f_92568], null);
var canonical_f_92599 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_92560),keys_92598);
dommy.core.update_event_listeners_BANG_.call(null,elem_92560,dommy.utils.dissoc_in,keys_92598);

if(cljs.core.truth_(elem_92560.removeEventListener)){
elem_92560.removeEventListener(cljs.core.name.call(null,actual_type_92590),canonical_f_92599);
} else {
elem_92560.detachEvent(cljs.core.name.call(null,actual_type_92590),canonical_f_92599);
}

var G__92608 = cljs.core.next.call(null,seq__92540_92583__$1);
var G__92609 = null;
var G__92610 = (0);
var G__92611 = (0);
seq__92540_92569 = G__92608;
chunk__92542_92570 = G__92609;
count__92543_92571 = G__92610;
i__92544_92572 = G__92611;
continue;
}
} else {
}
}
break;
}

var G__92614 = seq__92530_92562;
var G__92615 = chunk__92537_92563;
var G__92616 = count__92538_92564;
var G__92617 = (i__92539_92565 + (1));
seq__92530_92562 = G__92614;
chunk__92537_92563 = G__92615;
count__92538_92564 = G__92616;
i__92539_92565 = G__92617;
continue;
} else {
var temp__4657__auto___92618 = cljs.core.seq.call(null,seq__92530_92562);
if(temp__4657__auto___92618){
var seq__92530_92619__$1 = temp__4657__auto___92618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92530_92619__$1)){
var c__26638__auto___92620 = cljs.core.chunk_first.call(null,seq__92530_92619__$1);
var G__92622 = cljs.core.chunk_rest.call(null,seq__92530_92619__$1);
var G__92623 = c__26638__auto___92620;
var G__92624 = cljs.core.count.call(null,c__26638__auto___92620);
var G__92625 = (0);
seq__92530_92562 = G__92622;
chunk__92537_92563 = G__92623;
count__92538_92564 = G__92624;
i__92539_92565 = G__92625;
continue;
} else {
var vec__92553_92626 = cljs.core.first.call(null,seq__92530_92619__$1);
var orig_type_92627 = cljs.core.nth.call(null,vec__92553_92626,(0),null);
var f_92628 = cljs.core.nth.call(null,vec__92553_92626,(1),null);
var seq__92531_92629 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_92627,cljs.core.PersistentArrayMap.fromArray([orig_type_92627,cljs.core.identity], true, false)));
var chunk__92533_92630 = null;
var count__92534_92631 = (0);
var i__92535_92632 = (0);
while(true){
if((i__92535_92632 < count__92534_92631)){
var vec__92554_92633 = cljs.core._nth.call(null,chunk__92533_92630,i__92535_92632);
var actual_type_92634 = cljs.core.nth.call(null,vec__92554_92633,(0),null);
var __92635 = cljs.core.nth.call(null,vec__92554_92633,(1),null);
var keys_92637 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92561,actual_type_92634,f_92628], null);
var canonical_f_92638 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_92560),keys_92637);
dommy.core.update_event_listeners_BANG_.call(null,elem_92560,dommy.utils.dissoc_in,keys_92637);

if(cljs.core.truth_(elem_92560.removeEventListener)){
elem_92560.removeEventListener(cljs.core.name.call(null,actual_type_92634),canonical_f_92638);
} else {
elem_92560.detachEvent(cljs.core.name.call(null,actual_type_92634),canonical_f_92638);
}

var G__92643 = seq__92531_92629;
var G__92644 = chunk__92533_92630;
var G__92645 = count__92534_92631;
var G__92646 = (i__92535_92632 + (1));
seq__92531_92629 = G__92643;
chunk__92533_92630 = G__92644;
count__92534_92631 = G__92645;
i__92535_92632 = G__92646;
continue;
} else {
var temp__4657__auto___92647__$1 = cljs.core.seq.call(null,seq__92531_92629);
if(temp__4657__auto___92647__$1){
var seq__92531_92648__$1 = temp__4657__auto___92647__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92531_92648__$1)){
var c__26638__auto___92651 = cljs.core.chunk_first.call(null,seq__92531_92648__$1);
var G__92652 = cljs.core.chunk_rest.call(null,seq__92531_92648__$1);
var G__92653 = c__26638__auto___92651;
var G__92654 = cljs.core.count.call(null,c__26638__auto___92651);
var G__92655 = (0);
seq__92531_92629 = G__92652;
chunk__92533_92630 = G__92653;
count__92534_92631 = G__92654;
i__92535_92632 = G__92655;
continue;
} else {
var vec__92555_92658 = cljs.core.first.call(null,seq__92531_92648__$1);
var actual_type_92659 = cljs.core.nth.call(null,vec__92555_92658,(0),null);
var __92660 = cljs.core.nth.call(null,vec__92555_92658,(1),null);
var keys_92661 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92561,actual_type_92659,f_92628], null);
var canonical_f_92662 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_92560),keys_92661);
dommy.core.update_event_listeners_BANG_.call(null,elem_92560,dommy.utils.dissoc_in,keys_92661);

if(cljs.core.truth_(elem_92560.removeEventListener)){
elem_92560.removeEventListener(cljs.core.name.call(null,actual_type_92659),canonical_f_92662);
} else {
elem_92560.detachEvent(cljs.core.name.call(null,actual_type_92659),canonical_f_92662);
}

var G__92663 = cljs.core.next.call(null,seq__92531_92648__$1);
var G__92664 = null;
var G__92665 = (0);
var G__92666 = (0);
seq__92531_92629 = G__92663;
chunk__92533_92630 = G__92664;
count__92534_92631 = G__92665;
i__92535_92632 = G__92666;
continue;
}
} else {
}
}
break;
}

var G__92667 = cljs.core.next.call(null,seq__92530_92619__$1);
var G__92668 = null;
var G__92669 = (0);
var G__92670 = (0);
seq__92530_92562 = G__92667;
chunk__92537_92563 = G__92668;
count__92538_92564 = G__92669;
i__92539_92565 = G__92670;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq92512){
var G__92513 = cljs.core.first.call(null,seq92512);
var seq92512__$1 = cljs.core.next.call(null,seq92512);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__92513,seq92512__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__26903__auto__ = [];
var len__26896__auto___92695 = arguments.length;
var i__26897__auto___92696 = (0);
while(true){
if((i__26897__auto___92696 < len__26896__auto___92695)){
args__26903__auto__.push((arguments[i__26897__auto___92696]));

var G__92697 = (i__26897__auto___92696 + (1));
i__26897__auto___92696 = G__92697;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((1) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26904__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__92688_92698 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_92699 = cljs.core.nth.call(null,vec__92688_92698,(0),null);
var selector_92700 = cljs.core.nth.call(null,vec__92688_92698,(1),null);
var seq__92689_92701 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__92690_92702 = null;
var count__92691_92703 = (0);
var i__92692_92704 = (0);
while(true){
if((i__92692_92704 < count__92691_92703)){
var vec__92693_92705 = cljs.core._nth.call(null,chunk__92690_92702,i__92692_92704);
var type_92706 = cljs.core.nth.call(null,vec__92693_92705,(0),null);
var f_92707 = cljs.core.nth.call(null,vec__92693_92705,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_92706,((function (seq__92689_92701,chunk__92690_92702,count__92691_92703,i__92692_92704,vec__92693_92705,type_92706,f_92707,vec__92688_92698,elem_92699,selector_92700){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_92706,dommy$core$this_fn);

return f_92707.call(null,e);
});})(seq__92689_92701,chunk__92690_92702,count__92691_92703,i__92692_92704,vec__92693_92705,type_92706,f_92707,vec__92688_92698,elem_92699,selector_92700))
);

var G__92708 = seq__92689_92701;
var G__92709 = chunk__92690_92702;
var G__92710 = count__92691_92703;
var G__92711 = (i__92692_92704 + (1));
seq__92689_92701 = G__92708;
chunk__92690_92702 = G__92709;
count__92691_92703 = G__92710;
i__92692_92704 = G__92711;
continue;
} else {
var temp__4657__auto___92712 = cljs.core.seq.call(null,seq__92689_92701);
if(temp__4657__auto___92712){
var seq__92689_92714__$1 = temp__4657__auto___92712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92689_92714__$1)){
var c__26638__auto___92717 = cljs.core.chunk_first.call(null,seq__92689_92714__$1);
var G__92718 = cljs.core.chunk_rest.call(null,seq__92689_92714__$1);
var G__92719 = c__26638__auto___92717;
var G__92720 = cljs.core.count.call(null,c__26638__auto___92717);
var G__92721 = (0);
seq__92689_92701 = G__92718;
chunk__92690_92702 = G__92719;
count__92691_92703 = G__92720;
i__92692_92704 = G__92721;
continue;
} else {
var vec__92694_92724 = cljs.core.first.call(null,seq__92689_92714__$1);
var type_92725 = cljs.core.nth.call(null,vec__92694_92724,(0),null);
var f_92726 = cljs.core.nth.call(null,vec__92694_92724,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_92725,((function (seq__92689_92701,chunk__92690_92702,count__92691_92703,i__92692_92704,vec__92694_92724,type_92725,f_92726,seq__92689_92714__$1,temp__4657__auto___92712,vec__92688_92698,elem_92699,selector_92700){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_92725,dommy$core$this_fn);

return f_92726.call(null,e);
});})(seq__92689_92701,chunk__92690_92702,count__92691_92703,i__92692_92704,vec__92694_92724,type_92725,f_92726,seq__92689_92714__$1,temp__4657__auto___92712,vec__92688_92698,elem_92699,selector_92700))
);

var G__92727 = cljs.core.next.call(null,seq__92689_92714__$1);
var G__92728 = null;
var G__92729 = (0);
var G__92730 = (0);
seq__92689_92701 = G__92727;
chunk__92690_92702 = G__92728;
count__92691_92703 = G__92729;
i__92692_92704 = G__92730;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq92674){
var G__92675 = cljs.core.first.call(null,seq92674);
var seq92674__$1 = cljs.core.next.call(null,seq92674);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__92675,seq92674__$1);
});
