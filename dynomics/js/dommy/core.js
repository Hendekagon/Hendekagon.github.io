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
var args375342 = [];
var len__36260__auto___375354 = arguments.length;
var i__36261__auto___375355 = (0);
while(true){
if((i__36261__auto___375355 < len__36260__auto___375354)){
args375342.push((arguments[i__36261__auto___375355]));

var G__375357 = (i__36261__auto___375355 + (1));
i__36261__auto___375355 = G__375357;
continue;
} else {
}
break;
}

var G__375348 = args375342.length;
switch (G__375348) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args375342.length)].join('')));

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
var args375414 = [];
var len__36260__auto___375430 = arguments.length;
var i__36261__auto___375431 = (0);
while(true){
if((i__36261__auto___375431 < len__36260__auto___375430)){
args375414.push((arguments[i__36261__auto___375431]));

var G__375432 = (i__36261__auto___375431 + (1));
i__36261__auto___375431 = G__375432;
continue;
} else {
}
break;
}

var G__375422 = args375414.length;
switch (G__375422) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args375414.length)].join('')));

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
var args375437 = [];
var len__36260__auto___375448 = arguments.length;
var i__36261__auto___375449 = (0);
while(true){
if((i__36261__auto___375449 < len__36260__auto___375448)){
args375437.push((arguments[i__36261__auto___375449]));

var G__375450 = (i__36261__auto___375449 + (1));
i__36261__auto___375449 = G__375450;
continue;
} else {
}
break;
}

var G__375439 = args375437.length;
switch (G__375439) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args375437.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__375436_SHARP_){
return !((p1__375436_SHARP_ === base));
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
var len__36260__auto___375496 = arguments.length;
var i__36261__auto___375497 = (0);
while(true){
if((i__36261__auto___375497 < len__36260__auto___375496)){
args__36267__auto__.push((arguments[i__36261__auto___375497]));

var G__375500 = (i__36261__auto___375497 + (1));
i__36261__auto___375497 = G__375500;
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
var seq__375482_375520 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__375483_375521 = null;
var count__375484_375522 = (0);
var i__375485_375523 = (0);
while(true){
if((i__375485_375523 < count__375484_375522)){
var vec__375488_375528 = cljs.core._nth.call(null,chunk__375483_375521,i__375485_375523);
var k_375529 = cljs.core.nth.call(null,vec__375488_375528,(0),null);
var v_375530 = cljs.core.nth.call(null,vec__375488_375528,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_375529),v_375530);

var G__375537 = seq__375482_375520;
var G__375538 = chunk__375483_375521;
var G__375539 = count__375484_375522;
var G__375540 = (i__375485_375523 + (1));
seq__375482_375520 = G__375537;
chunk__375483_375521 = G__375538;
count__375484_375522 = G__375539;
i__375485_375523 = G__375540;
continue;
} else {
var temp__4657__auto___375543 = cljs.core.seq.call(null,seq__375482_375520);
if(temp__4657__auto___375543){
var seq__375482_375544__$1 = temp__4657__auto___375543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__375482_375544__$1)){
var c__36002__auto___375547 = cljs.core.chunk_first.call(null,seq__375482_375544__$1);
var G__375549 = cljs.core.chunk_rest.call(null,seq__375482_375544__$1);
var G__375550 = c__36002__auto___375547;
var G__375551 = cljs.core.count.call(null,c__36002__auto___375547);
var G__375552 = (0);
seq__375482_375520 = G__375549;
chunk__375483_375521 = G__375550;
count__375484_375522 = G__375551;
i__375485_375523 = G__375552;
continue;
} else {
var vec__375492_375557 = cljs.core.first.call(null,seq__375482_375544__$1);
var k_375558 = cljs.core.nth.call(null,vec__375492_375557,(0),null);
var v_375559 = cljs.core.nth.call(null,vec__375492_375557,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_375558),v_375559);

var G__375561 = cljs.core.next.call(null,seq__375482_375544__$1);
var G__375562 = null;
var G__375563 = (0);
var G__375564 = (0);
seq__375482_375520 = G__375561;
chunk__375483_375521 = G__375562;
count__375484_375522 = G__375563;
i__375485_375523 = G__375564;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq375464){
var G__375465 = cljs.core.first.call(null,seq375464);
var seq375464__$1 = cljs.core.next.call(null,seq375464);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__375465,seq375464__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__36267__auto__ = [];
var len__36260__auto___375579 = arguments.length;
var i__36261__auto___375580 = (0);
while(true){
if((i__36261__auto___375580 < len__36260__auto___375579)){
args__36267__auto__.push((arguments[i__36261__auto___375580]));

var G__375581 = (i__36261__auto___375580 + (1));
i__36261__auto___375580 = G__375581;
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
var seq__375570_375587 = cljs.core.seq.call(null,keywords);
var chunk__375571_375588 = null;
var count__375572_375589 = (0);
var i__375573_375590 = (0);
while(true){
if((i__375573_375590 < count__375572_375589)){
var kw_375592 = cljs.core._nth.call(null,chunk__375571_375588,i__375573_375590);
style.removeProperty(dommy.utils.as_str.call(null,kw_375592));

var G__375596 = seq__375570_375587;
var G__375597 = chunk__375571_375588;
var G__375598 = count__375572_375589;
var G__375599 = (i__375573_375590 + (1));
seq__375570_375587 = G__375596;
chunk__375571_375588 = G__375597;
count__375572_375589 = G__375598;
i__375573_375590 = G__375599;
continue;
} else {
var temp__4657__auto___375601 = cljs.core.seq.call(null,seq__375570_375587);
if(temp__4657__auto___375601){
var seq__375570_375602__$1 = temp__4657__auto___375601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__375570_375602__$1)){
var c__36002__auto___375603 = cljs.core.chunk_first.call(null,seq__375570_375602__$1);
var G__375605 = cljs.core.chunk_rest.call(null,seq__375570_375602__$1);
var G__375606 = c__36002__auto___375603;
var G__375607 = cljs.core.count.call(null,c__36002__auto___375603);
var G__375608 = (0);
seq__375570_375587 = G__375605;
chunk__375571_375588 = G__375606;
count__375572_375589 = G__375607;
i__375573_375590 = G__375608;
continue;
} else {
var kw_375611 = cljs.core.first.call(null,seq__375570_375602__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_375611));

var G__375612 = cljs.core.next.call(null,seq__375570_375602__$1);
var G__375613 = null;
var G__375614 = (0);
var G__375615 = (0);
seq__375570_375587 = G__375612;
chunk__375571_375588 = G__375613;
count__375572_375589 = G__375614;
i__375573_375590 = G__375615;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq375568){
var G__375569 = cljs.core.first.call(null,seq375568);
var seq375568__$1 = cljs.core.next.call(null,seq375568);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__375569,seq375568__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__36267__auto__ = [];
var len__36260__auto___375634 = arguments.length;
var i__36261__auto___375635 = (0);
while(true){
if((i__36261__auto___375635 < len__36260__auto___375634)){
args__36267__auto__.push((arguments[i__36261__auto___375635]));

var G__375636 = (i__36261__auto___375635 + (1));
i__36261__auto___375635 = G__375636;
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

var seq__375627_375638 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__375628_375639 = null;
var count__375629_375640 = (0);
var i__375630_375641 = (0);
while(true){
if((i__375630_375641 < count__375629_375640)){
var vec__375631_375642 = cljs.core._nth.call(null,chunk__375628_375639,i__375630_375641);
var k_375643 = cljs.core.nth.call(null,vec__375631_375642,(0),null);
var v_375644 = cljs.core.nth.call(null,vec__375631_375642,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_375643,[cljs.core.str(v_375644),cljs.core.str("px")].join(''));

var G__375645 = seq__375627_375638;
var G__375646 = chunk__375628_375639;
var G__375647 = count__375629_375640;
var G__375648 = (i__375630_375641 + (1));
seq__375627_375638 = G__375645;
chunk__375628_375639 = G__375646;
count__375629_375640 = G__375647;
i__375630_375641 = G__375648;
continue;
} else {
var temp__4657__auto___375650 = cljs.core.seq.call(null,seq__375627_375638);
if(temp__4657__auto___375650){
var seq__375627_375651__$1 = temp__4657__auto___375650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__375627_375651__$1)){
var c__36002__auto___375653 = cljs.core.chunk_first.call(null,seq__375627_375651__$1);
var G__375654 = cljs.core.chunk_rest.call(null,seq__375627_375651__$1);
var G__375655 = c__36002__auto___375653;
var G__375656 = cljs.core.count.call(null,c__36002__auto___375653);
var G__375657 = (0);
seq__375627_375638 = G__375654;
chunk__375628_375639 = G__375655;
count__375629_375640 = G__375656;
i__375630_375641 = G__375657;
continue;
} else {
var vec__375633_375658 = cljs.core.first.call(null,seq__375627_375651__$1);
var k_375659 = cljs.core.nth.call(null,vec__375633_375658,(0),null);
var v_375660 = cljs.core.nth.call(null,vec__375633_375658,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_375659,[cljs.core.str(v_375660),cljs.core.str("px")].join(''));

var G__375664 = cljs.core.next.call(null,seq__375627_375651__$1);
var G__375665 = null;
var G__375666 = (0);
var G__375667 = (0);
seq__375627_375638 = G__375664;
chunk__375628_375639 = G__375665;
count__375629_375640 = G__375666;
i__375630_375641 = G__375667;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq375618){
var G__375619 = cljs.core.first.call(null,seq375618);
var seq375618__$1 = cljs.core.next.call(null,seq375618);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__375619,seq375618__$1);
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
var args375671 = [];
var len__36260__auto___375700 = arguments.length;
var i__36261__auto___375703 = (0);
while(true){
if((i__36261__auto___375703 < len__36260__auto___375700)){
args375671.push((arguments[i__36261__auto___375703]));

var G__375704 = (i__36261__auto___375703 + (1));
i__36261__auto___375703 = G__375704;
continue;
} else {
}
break;
}

var G__375685 = args375671.length;
switch (G__375685) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args375671.slice((3)),(0),null));
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
var G__375690 = elem;
(G__375690[k__$1] = v);

return G__375690;
} else {
var G__375691 = elem;
G__375691.setAttribute(k__$1,v);

return G__375691;
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

var seq__375692_375725 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__375693_375726 = null;
var count__375694_375727 = (0);
var i__375695_375728 = (0);
while(true){
if((i__375695_375728 < count__375694_375727)){
var vec__375697_375736 = cljs.core._nth.call(null,chunk__375693_375726,i__375695_375728);
var k_375737__$1 = cljs.core.nth.call(null,vec__375697_375736,(0),null);
var v_375738__$1 = cljs.core.nth.call(null,vec__375697_375736,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_375737__$1,v_375738__$1);

var G__375743 = seq__375692_375725;
var G__375744 = chunk__375693_375726;
var G__375745 = count__375694_375727;
var G__375746 = (i__375695_375728 + (1));
seq__375692_375725 = G__375743;
chunk__375693_375726 = G__375744;
count__375694_375727 = G__375745;
i__375695_375728 = G__375746;
continue;
} else {
var temp__4657__auto___375756 = cljs.core.seq.call(null,seq__375692_375725);
if(temp__4657__auto___375756){
var seq__375692_375759__$1 = temp__4657__auto___375756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__375692_375759__$1)){
var c__36002__auto___375761 = cljs.core.chunk_first.call(null,seq__375692_375759__$1);
var G__375768 = cljs.core.chunk_rest.call(null,seq__375692_375759__$1);
var G__375769 = c__36002__auto___375761;
var G__375770 = cljs.core.count.call(null,c__36002__auto___375761);
var G__375771 = (0);
seq__375692_375725 = G__375768;
chunk__375693_375726 = G__375769;
count__375694_375727 = G__375770;
i__375695_375728 = G__375771;
continue;
} else {
var vec__375698_375776 = cljs.core.first.call(null,seq__375692_375759__$1);
var k_375777__$1 = cljs.core.nth.call(null,vec__375698_375776,(0),null);
var v_375778__$1 = cljs.core.nth.call(null,vec__375698_375776,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_375777__$1,v_375778__$1);

var G__375782 = cljs.core.next.call(null,seq__375692_375759__$1);
var G__375783 = null;
var G__375784 = (0);
var G__375785 = (0);
seq__375692_375725 = G__375782;
chunk__375693_375726 = G__375783;
count__375694_375727 = G__375784;
i__375695_375728 = G__375785;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq375672){
var G__375673 = cljs.core.first.call(null,seq375672);
var seq375672__$1 = cljs.core.next.call(null,seq375672);
var G__375674 = cljs.core.first.call(null,seq375672__$1);
var seq375672__$2 = cljs.core.next.call(null,seq375672__$1);
var G__375675 = cljs.core.first.call(null,seq375672__$2);
var seq375672__$3 = cljs.core.next.call(null,seq375672__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__375673,G__375674,G__375675,seq375672__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args375787 = [];
var len__36260__auto___375799 = arguments.length;
var i__36261__auto___375801 = (0);
while(true){
if((i__36261__auto___375801 < len__36260__auto___375799)){
args375787.push((arguments[i__36261__auto___375801]));

var G__375802 = (i__36261__auto___375801 + (1));
i__36261__auto___375801 = G__375802;
continue;
} else {
}
break;
}

var G__375792 = args375787.length;
switch (G__375792) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args375787.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_375810__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_375810__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_375810__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__375793_375816 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__375794_375817 = null;
var count__375795_375818 = (0);
var i__375796_375819 = (0);
while(true){
if((i__375796_375819 < count__375795_375818)){
var k_375822__$1 = cljs.core._nth.call(null,chunk__375794_375817,i__375796_375819);
dommy.core.remove_attr_BANG_.call(null,elem,k_375822__$1);

var G__375828 = seq__375793_375816;
var G__375829 = chunk__375794_375817;
var G__375830 = count__375795_375818;
var G__375831 = (i__375796_375819 + (1));
seq__375793_375816 = G__375828;
chunk__375794_375817 = G__375829;
count__375795_375818 = G__375830;
i__375796_375819 = G__375831;
continue;
} else {
var temp__4657__auto___375834 = cljs.core.seq.call(null,seq__375793_375816);
if(temp__4657__auto___375834){
var seq__375793_375835__$1 = temp__4657__auto___375834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__375793_375835__$1)){
var c__36002__auto___375836 = cljs.core.chunk_first.call(null,seq__375793_375835__$1);
var G__375837 = cljs.core.chunk_rest.call(null,seq__375793_375835__$1);
var G__375838 = c__36002__auto___375836;
var G__375839 = cljs.core.count.call(null,c__36002__auto___375836);
var G__375840 = (0);
seq__375793_375816 = G__375837;
chunk__375794_375817 = G__375838;
count__375795_375818 = G__375839;
i__375796_375819 = G__375840;
continue;
} else {
var k_375846__$1 = cljs.core.first.call(null,seq__375793_375835__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_375846__$1);

var G__375850 = cljs.core.next.call(null,seq__375793_375835__$1);
var G__375851 = null;
var G__375852 = (0);
var G__375853 = (0);
seq__375793_375816 = G__375850;
chunk__375794_375817 = G__375851;
count__375795_375818 = G__375852;
i__375796_375819 = G__375853;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq375788){
var G__375789 = cljs.core.first.call(null,seq375788);
var seq375788__$1 = cljs.core.next.call(null,seq375788);
var G__375790 = cljs.core.first.call(null,seq375788__$1);
var seq375788__$2 = cljs.core.next.call(null,seq375788__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__375789,G__375790,seq375788__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args375855 = [];
var len__36260__auto___375860 = arguments.length;
var i__36261__auto___375861 = (0);
while(true){
if((i__36261__auto___375861 < len__36260__auto___375860)){
args375855.push((arguments[i__36261__auto___375861]));

var G__375862 = (i__36261__auto___375861 + (1));
i__36261__auto___375861 = G__375862;
continue;
} else {
}
break;
}

var G__375859 = args375855.length;
switch (G__375859) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args375855.length)].join('')));

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
var args375864 = [];
var len__36260__auto___375886 = arguments.length;
var i__36261__auto___375887 = (0);
while(true){
if((i__36261__auto___375887 < len__36260__auto___375886)){
args375864.push((arguments[i__36261__auto___375887]));

var G__375888 = (i__36261__auto___375887 + (1));
i__36261__auto___375887 = G__375888;
continue;
} else {
}
break;
}

var G__375869 = args375864.length;
switch (G__375869) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args375864.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___375895 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___375895)){
var class_list_375900 = temp__4655__auto___375895;
var seq__375870_375901 = cljs.core.seq.call(null,classes__$1);
var chunk__375871_375902 = null;
var count__375872_375903 = (0);
var i__375873_375904 = (0);
while(true){
if((i__375873_375904 < count__375872_375903)){
var c_375906 = cljs.core._nth.call(null,chunk__375871_375902,i__375873_375904);
class_list_375900.add(c_375906);

var G__375913 = seq__375870_375901;
var G__375914 = chunk__375871_375902;
var G__375915 = count__375872_375903;
var G__375916 = (i__375873_375904 + (1));
seq__375870_375901 = G__375913;
chunk__375871_375902 = G__375914;
count__375872_375903 = G__375915;
i__375873_375904 = G__375916;
continue;
} else {
var temp__4657__auto___375918 = cljs.core.seq.call(null,seq__375870_375901);
if(temp__4657__auto___375918){
var seq__375870_375919__$1 = temp__4657__auto___375918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__375870_375919__$1)){
var c__36002__auto___375924 = cljs.core.chunk_first.call(null,seq__375870_375919__$1);
var G__375925 = cljs.core.chunk_rest.call(null,seq__375870_375919__$1);
var G__375926 = c__36002__auto___375924;
var G__375927 = cljs.core.count.call(null,c__36002__auto___375924);
var G__375928 = (0);
seq__375870_375901 = G__375925;
chunk__375871_375902 = G__375926;
count__375872_375903 = G__375927;
i__375873_375904 = G__375928;
continue;
} else {
var c_375929 = cljs.core.first.call(null,seq__375870_375919__$1);
class_list_375900.add(c_375929);

var G__375933 = cljs.core.next.call(null,seq__375870_375919__$1);
var G__375934 = null;
var G__375935 = (0);
var G__375936 = (0);
seq__375870_375901 = G__375933;
chunk__375871_375902 = G__375934;
count__375872_375903 = G__375935;
i__375873_375904 = G__375936;
continue;
}
} else {
}
}
break;
}
} else {
var seq__375874_375937 = cljs.core.seq.call(null,classes__$1);
var chunk__375875_375938 = null;
var count__375876_375939 = (0);
var i__375877_375940 = (0);
while(true){
if((i__375877_375940 < count__375876_375939)){
var c_375943 = cljs.core._nth.call(null,chunk__375875_375938,i__375877_375940);
var class_name_375944 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_375944,c_375943))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_375944 === ""))?c_375943:[cljs.core.str(class_name_375944),cljs.core.str(" "),cljs.core.str(c_375943)].join('')));
}

var G__375945 = seq__375874_375937;
var G__375946 = chunk__375875_375938;
var G__375947 = count__375876_375939;
var G__375948 = (i__375877_375940 + (1));
seq__375874_375937 = G__375945;
chunk__375875_375938 = G__375946;
count__375876_375939 = G__375947;
i__375877_375940 = G__375948;
continue;
} else {
var temp__4657__auto___375949 = cljs.core.seq.call(null,seq__375874_375937);
if(temp__4657__auto___375949){
var seq__375874_375950__$1 = temp__4657__auto___375949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__375874_375950__$1)){
var c__36002__auto___375951 = cljs.core.chunk_first.call(null,seq__375874_375950__$1);
var G__375952 = cljs.core.chunk_rest.call(null,seq__375874_375950__$1);
var G__375953 = c__36002__auto___375951;
var G__375954 = cljs.core.count.call(null,c__36002__auto___375951);
var G__375955 = (0);
seq__375874_375937 = G__375952;
chunk__375875_375938 = G__375953;
count__375876_375939 = G__375954;
i__375877_375940 = G__375955;
continue;
} else {
var c_375956 = cljs.core.first.call(null,seq__375874_375950__$1);
var class_name_375957 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_375957,c_375956))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_375957 === ""))?c_375956:[cljs.core.str(class_name_375957),cljs.core.str(" "),cljs.core.str(c_375956)].join('')));
}

var G__375962 = cljs.core.next.call(null,seq__375874_375950__$1);
var G__375963 = null;
var G__375964 = (0);
var G__375965 = (0);
seq__375874_375937 = G__375962;
chunk__375875_375938 = G__375963;
count__375876_375939 = G__375964;
i__375877_375940 = G__375965;
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
var seq__375878_375970 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__375879_375971 = null;
var count__375880_375972 = (0);
var i__375881_375973 = (0);
while(true){
if((i__375881_375973 < count__375880_375972)){
var c_375975 = cljs.core._nth.call(null,chunk__375879_375971,i__375881_375973);
dommy.core.add_class_BANG_.call(null,elem,c_375975);

var G__375980 = seq__375878_375970;
var G__375981 = chunk__375879_375971;
var G__375982 = count__375880_375972;
var G__375983 = (i__375881_375973 + (1));
seq__375878_375970 = G__375980;
chunk__375879_375971 = G__375981;
count__375880_375972 = G__375982;
i__375881_375973 = G__375983;
continue;
} else {
var temp__4657__auto___375986 = cljs.core.seq.call(null,seq__375878_375970);
if(temp__4657__auto___375986){
var seq__375878_375988__$1 = temp__4657__auto___375986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__375878_375988__$1)){
var c__36002__auto___375993 = cljs.core.chunk_first.call(null,seq__375878_375988__$1);
var G__375994 = cljs.core.chunk_rest.call(null,seq__375878_375988__$1);
var G__375995 = c__36002__auto___375993;
var G__375996 = cljs.core.count.call(null,c__36002__auto___375993);
var G__375997 = (0);
seq__375878_375970 = G__375994;
chunk__375879_375971 = G__375995;
count__375880_375972 = G__375996;
i__375881_375973 = G__375997;
continue;
} else {
var c_376003 = cljs.core.first.call(null,seq__375878_375988__$1);
dommy.core.add_class_BANG_.call(null,elem,c_376003);

var G__376004 = cljs.core.next.call(null,seq__375878_375988__$1);
var G__376005 = null;
var G__376006 = (0);
var G__376007 = (0);
seq__375878_375970 = G__376004;
chunk__375879_375971 = G__376005;
count__375880_375972 = G__376006;
i__375881_375973 = G__376007;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq375865){
var G__375866 = cljs.core.first.call(null,seq375865);
var seq375865__$1 = cljs.core.next.call(null,seq375865);
var G__375867 = cljs.core.first.call(null,seq375865__$1);
var seq375865__$2 = cljs.core.next.call(null,seq375865__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__375866,G__375867,seq375865__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args376014 = [];
var len__36260__auto___376047 = arguments.length;
var i__36261__auto___376048 = (0);
while(true){
if((i__36261__auto___376048 < len__36260__auto___376047)){
args376014.push((arguments[i__36261__auto___376048]));

var G__376050 = (i__36261__auto___376048 + (1));
i__36261__auto___376048 = G__376050;
continue;
} else {
}
break;
}

var G__376020 = args376014.length;
switch (G__376020) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args376014.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___376060 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___376060)){
var class_list_376061 = temp__4655__auto___376060;
class_list_376061.remove(c__$1);
} else {
var class_name_376062 = dommy.core.class$.call(null,elem);
var new_class_name_376063 = dommy.utils.remove_class_str.call(null,class_name_376062,c__$1);
if((class_name_376062 === new_class_name_376063)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_376063);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__376027 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__376028 = null;
var count__376029 = (0);
var i__376030 = (0);
while(true){
if((i__376030 < count__376029)){
var c = cljs.core._nth.call(null,chunk__376028,i__376030);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__376067 = seq__376027;
var G__376068 = chunk__376028;
var G__376069 = count__376029;
var G__376070 = (i__376030 + (1));
seq__376027 = G__376067;
chunk__376028 = G__376068;
count__376029 = G__376069;
i__376030 = G__376070;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__376027);
if(temp__4657__auto__){
var seq__376027__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__376027__$1)){
var c__36002__auto__ = cljs.core.chunk_first.call(null,seq__376027__$1);
var G__376072 = cljs.core.chunk_rest.call(null,seq__376027__$1);
var G__376073 = c__36002__auto__;
var G__376074 = cljs.core.count.call(null,c__36002__auto__);
var G__376075 = (0);
seq__376027 = G__376072;
chunk__376028 = G__376073;
count__376029 = G__376074;
i__376030 = G__376075;
continue;
} else {
var c = cljs.core.first.call(null,seq__376027__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__376083 = cljs.core.next.call(null,seq__376027__$1);
var G__376084 = null;
var G__376085 = (0);
var G__376086 = (0);
seq__376027 = G__376083;
chunk__376028 = G__376084;
count__376029 = G__376085;
i__376030 = G__376086;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq376015){
var G__376016 = cljs.core.first.call(null,seq376015);
var seq376015__$1 = cljs.core.next.call(null,seq376015);
var G__376017 = cljs.core.first.call(null,seq376015__$1);
var seq376015__$2 = cljs.core.next.call(null,seq376015__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__376016,G__376017,seq376015__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args376098 = [];
var len__36260__auto___376106 = arguments.length;
var i__36261__auto___376107 = (0);
while(true){
if((i__36261__auto___376107 < len__36260__auto___376106)){
args376098.push((arguments[i__36261__auto___376107]));

var G__376108 = (i__36261__auto___376107 + (1));
i__36261__auto___376107 = G__376108;
continue;
} else {
}
break;
}

var G__376101 = args376098.length;
switch (G__376101) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376098.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___376110 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___376110)){
var class_list_376111 = temp__4655__auto___376110;
class_list_376111.toggle(c__$1);
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
var args376116 = [];
var len__36260__auto___376124 = arguments.length;
var i__36261__auto___376125 = (0);
while(true){
if((i__36261__auto___376125 < len__36260__auto___376124)){
args376116.push((arguments[i__36261__auto___376125]));

var G__376126 = (i__36261__auto___376125 + (1));
i__36261__auto___376125 = G__376126;
continue;
} else {
}
break;
}

var G__376122 = args376116.length;
switch (G__376122) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376116.length)].join('')));

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
var args376138 = [];
var len__36260__auto___376155 = arguments.length;
var i__36261__auto___376156 = (0);
while(true){
if((i__36261__auto___376156 < len__36260__auto___376155)){
args376138.push((arguments[i__36261__auto___376156]));

var G__376158 = (i__36261__auto___376156 + (1));
i__36261__auto___376156 = G__376158;
continue;
} else {
}
break;
}

var G__376149 = args376138.length;
switch (G__376149) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376138.length)].join('')));

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
var args376167 = [];
var len__36260__auto___376184 = arguments.length;
var i__36261__auto___376185 = (0);
while(true){
if((i__36261__auto___376185 < len__36260__auto___376184)){
args376167.push((arguments[i__36261__auto___376185]));

var G__376187 = (i__36261__auto___376185 + (1));
i__36261__auto___376185 = G__376187;
continue;
} else {
}
break;
}

var G__376175 = args376167.length;
switch (G__376175) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args376167.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__376176 = parent;
G__376176.appendChild(child);

return G__376176;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__376177_376191 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__376178_376192 = null;
var count__376179_376193 = (0);
var i__376180_376194 = (0);
while(true){
if((i__376180_376194 < count__376179_376193)){
var c_376196 = cljs.core._nth.call(null,chunk__376178_376192,i__376180_376194);
dommy.core.append_BANG_.call(null,parent,c_376196);

var G__376199 = seq__376177_376191;
var G__376200 = chunk__376178_376192;
var G__376201 = count__376179_376193;
var G__376202 = (i__376180_376194 + (1));
seq__376177_376191 = G__376199;
chunk__376178_376192 = G__376200;
count__376179_376193 = G__376201;
i__376180_376194 = G__376202;
continue;
} else {
var temp__4657__auto___376203 = cljs.core.seq.call(null,seq__376177_376191);
if(temp__4657__auto___376203){
var seq__376177_376204__$1 = temp__4657__auto___376203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__376177_376204__$1)){
var c__36002__auto___376207 = cljs.core.chunk_first.call(null,seq__376177_376204__$1);
var G__376208 = cljs.core.chunk_rest.call(null,seq__376177_376204__$1);
var G__376209 = c__36002__auto___376207;
var G__376210 = cljs.core.count.call(null,c__36002__auto___376207);
var G__376211 = (0);
seq__376177_376191 = G__376208;
chunk__376178_376192 = G__376209;
count__376179_376193 = G__376210;
i__376180_376194 = G__376211;
continue;
} else {
var c_376214 = cljs.core.first.call(null,seq__376177_376204__$1);
dommy.core.append_BANG_.call(null,parent,c_376214);

var G__376216 = cljs.core.next.call(null,seq__376177_376204__$1);
var G__376217 = null;
var G__376218 = (0);
var G__376219 = (0);
seq__376177_376191 = G__376216;
chunk__376178_376192 = G__376217;
count__376179_376193 = G__376218;
i__376180_376194 = G__376219;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq376168){
var G__376169 = cljs.core.first.call(null,seq376168);
var seq376168__$1 = cljs.core.next.call(null,seq376168);
var G__376170 = cljs.core.first.call(null,seq376168__$1);
var seq376168__$2 = cljs.core.next.call(null,seq376168__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__376169,G__376170,seq376168__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args376223 = [];
var len__36260__auto___376251 = arguments.length;
var i__36261__auto___376253 = (0);
while(true){
if((i__36261__auto___376253 < len__36260__auto___376251)){
args376223.push((arguments[i__36261__auto___376253]));

var G__376255 = (i__36261__auto___376253 + (1));
i__36261__auto___376253 = G__376255;
continue;
} else {
}
break;
}

var G__376233 = args376223.length;
switch (G__376233) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args376223.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__376236 = parent;
G__376236.insertBefore(child,parent.firstChild);

return G__376236;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__376238_376264 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__376239_376265 = null;
var count__376240_376266 = (0);
var i__376241_376267 = (0);
while(true){
if((i__376241_376267 < count__376240_376266)){
var c_376268 = cljs.core._nth.call(null,chunk__376239_376265,i__376241_376267);
dommy.core.prepend_BANG_.call(null,parent,c_376268);

var G__376269 = seq__376238_376264;
var G__376270 = chunk__376239_376265;
var G__376271 = count__376240_376266;
var G__376272 = (i__376241_376267 + (1));
seq__376238_376264 = G__376269;
chunk__376239_376265 = G__376270;
count__376240_376266 = G__376271;
i__376241_376267 = G__376272;
continue;
} else {
var temp__4657__auto___376274 = cljs.core.seq.call(null,seq__376238_376264);
if(temp__4657__auto___376274){
var seq__376238_376275__$1 = temp__4657__auto___376274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__376238_376275__$1)){
var c__36002__auto___376277 = cljs.core.chunk_first.call(null,seq__376238_376275__$1);
var G__376278 = cljs.core.chunk_rest.call(null,seq__376238_376275__$1);
var G__376279 = c__36002__auto___376277;
var G__376280 = cljs.core.count.call(null,c__36002__auto___376277);
var G__376281 = (0);
seq__376238_376264 = G__376278;
chunk__376239_376265 = G__376279;
count__376240_376266 = G__376280;
i__376241_376267 = G__376281;
continue;
} else {
var c_376283 = cljs.core.first.call(null,seq__376238_376275__$1);
dommy.core.prepend_BANG_.call(null,parent,c_376283);

var G__376284 = cljs.core.next.call(null,seq__376238_376275__$1);
var G__376285 = null;
var G__376286 = (0);
var G__376287 = (0);
seq__376238_376264 = G__376284;
chunk__376239_376265 = G__376285;
count__376240_376266 = G__376286;
i__376241_376267 = G__376287;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq376224){
var G__376225 = cljs.core.first.call(null,seq376224);
var seq376224__$1 = cljs.core.next.call(null,seq376224);
var G__376226 = cljs.core.first.call(null,seq376224__$1);
var seq376224__$2 = cljs.core.next.call(null,seq376224__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__376225,G__376226,seq376224__$2);
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
var temp__4655__auto___376294 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___376294)){
var next_376295 = temp__4655__auto___376294;
dommy.core.insert_before_BANG_.call(null,elem,next_376295);
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
var args376306 = [];
var len__36260__auto___376325 = arguments.length;
var i__36261__auto___376326 = (0);
while(true){
if((i__36261__auto___376326 < len__36260__auto___376325)){
args376306.push((arguments[i__36261__auto___376326]));

var G__376328 = (i__36261__auto___376326 + (1));
i__36261__auto___376326 = G__376328;
continue;
} else {
}
break;
}

var G__376314 = args376306.length;
switch (G__376314) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376306.length)].join('')));

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
var G__376319 = p;
G__376319.removeChild(elem);

return G__376319;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__376331){
var vec__376332 = p__376331;
var special_mouse_event = cljs.core.nth.call(null,vec__376332,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__376332,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__376332,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__376332,special_mouse_event,real_mouse_event){
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
;})(vec__376332,special_mouse_event,real_mouse_event))
});})(vec__376332,special_mouse_event,real_mouse_event))
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
var len__36260__auto___376350 = arguments.length;
var i__36261__auto___376351 = (0);
while(true){
if((i__36261__auto___376351 < len__36260__auto___376350)){
args__36267__auto__.push((arguments[i__36261__auto___376351]));

var G__376352 = (i__36261__auto___376351 + (1));
i__36261__auto___376351 = G__376352;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq376345){
var G__376346 = cljs.core.first.call(null,seq376345);
var seq376345__$1 = cljs.core.next.call(null,seq376345);
var G__376347 = cljs.core.first.call(null,seq376345__$1);
var seq376345__$2 = cljs.core.next.call(null,seq376345__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__376346,G__376347,seq376345__$2);
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
var len__36260__auto___376416 = arguments.length;
var i__36261__auto___376417 = (0);
while(true){
if((i__36261__auto___376417 < len__36260__auto___376416)){
args__36267__auto__.push((arguments[i__36261__auto___376417]));

var G__376421 = (i__36261__auto___376417 + (1));
i__36261__auto___376417 = G__376421;
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

var vec__376374_376422 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_376423 = cljs.core.nth.call(null,vec__376374_376422,(0),null);
var selector_376424 = cljs.core.nth.call(null,vec__376374_376422,(1),null);
var seq__376375_376425 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__376382_376426 = null;
var count__376383_376427 = (0);
var i__376384_376428 = (0);
while(true){
if((i__376384_376428 < count__376383_376427)){
var vec__376391_376437 = cljs.core._nth.call(null,chunk__376382_376426,i__376384_376428);
var orig_type_376438 = cljs.core.nth.call(null,vec__376391_376437,(0),null);
var f_376439 = cljs.core.nth.call(null,vec__376391_376437,(1),null);
var seq__376385_376440 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_376438,cljs.core.PersistentArrayMap.fromArray([orig_type_376438,cljs.core.identity], true, false)));
var chunk__376387_376441 = null;
var count__376388_376442 = (0);
var i__376389_376443 = (0);
while(true){
if((i__376389_376443 < count__376388_376442)){
var vec__376397_376452 = cljs.core._nth.call(null,chunk__376387_376441,i__376389_376443);
var actual_type_376453 = cljs.core.nth.call(null,vec__376397_376452,(0),null);
var factory_376454 = cljs.core.nth.call(null,vec__376397_376452,(1),null);
var canonical_f_376455 = (cljs.core.truth_(selector_376424)?cljs.core.partial.call(null,dommy.core.live_listener,elem_376423,selector_376424):cljs.core.identity).call(null,factory_376454.call(null,f_376439));
dommy.core.update_event_listeners_BANG_.call(null,elem_376423,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_376424,actual_type_376453,f_376439], null),canonical_f_376455);

if(cljs.core.truth_(elem_376423.addEventListener)){
elem_376423.addEventListener(cljs.core.name.call(null,actual_type_376453),canonical_f_376455);
} else {
elem_376423.attachEvent(cljs.core.name.call(null,actual_type_376453),canonical_f_376455);
}

var G__376460 = seq__376385_376440;
var G__376461 = chunk__376387_376441;
var G__376462 = count__376388_376442;
var G__376463 = (i__376389_376443 + (1));
seq__376385_376440 = G__376460;
chunk__376387_376441 = G__376461;
count__376388_376442 = G__376462;
i__376389_376443 = G__376463;
continue;
} else {
var temp__4657__auto___376466 = cljs.core.seq.call(null,seq__376385_376440);
if(temp__4657__auto___376466){
var seq__376385_376467__$1 = temp__4657__auto___376466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__376385_376467__$1)){
var c__36002__auto___376470 = cljs.core.chunk_first.call(null,seq__376385_376467__$1);
var G__376471 = cljs.core.chunk_rest.call(null,seq__376385_376467__$1);
var G__376472 = c__36002__auto___376470;
var G__376473 = cljs.core.count.call(null,c__36002__auto___376470);
var G__376474 = (0);
seq__376385_376440 = G__376471;
chunk__376387_376441 = G__376472;
count__376388_376442 = G__376473;
i__376389_376443 = G__376474;
continue;
} else {
var vec__376404_376475 = cljs.core.first.call(null,seq__376385_376467__$1);
var actual_type_376476 = cljs.core.nth.call(null,vec__376404_376475,(0),null);
var factory_376477 = cljs.core.nth.call(null,vec__376404_376475,(1),null);
var canonical_f_376478 = (cljs.core.truth_(selector_376424)?cljs.core.partial.call(null,dommy.core.live_listener,elem_376423,selector_376424):cljs.core.identity).call(null,factory_376477.call(null,f_376439));
dommy.core.update_event_listeners_BANG_.call(null,elem_376423,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_376424,actual_type_376476,f_376439], null),canonical_f_376478);

if(cljs.core.truth_(elem_376423.addEventListener)){
elem_376423.addEventListener(cljs.core.name.call(null,actual_type_376476),canonical_f_376478);
} else {
elem_376423.attachEvent(cljs.core.name.call(null,actual_type_376476),canonical_f_376478);
}

var G__376481 = cljs.core.next.call(null,seq__376385_376467__$1);
var G__376482 = null;
var G__376483 = (0);
var G__376484 = (0);
seq__376385_376440 = G__376481;
chunk__376387_376441 = G__376482;
count__376388_376442 = G__376483;
i__376389_376443 = G__376484;
continue;
}
} else {
}
}
break;
}

var G__376486 = seq__376375_376425;
var G__376487 = chunk__376382_376426;
var G__376488 = count__376383_376427;
var G__376489 = (i__376384_376428 + (1));
seq__376375_376425 = G__376486;
chunk__376382_376426 = G__376487;
count__376383_376427 = G__376488;
i__376384_376428 = G__376489;
continue;
} else {
var temp__4657__auto___376492 = cljs.core.seq.call(null,seq__376375_376425);
if(temp__4657__auto___376492){
var seq__376375_376493__$1 = temp__4657__auto___376492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__376375_376493__$1)){
var c__36002__auto___376495 = cljs.core.chunk_first.call(null,seq__376375_376493__$1);
var G__376497 = cljs.core.chunk_rest.call(null,seq__376375_376493__$1);
var G__376498 = c__36002__auto___376495;
var G__376499 = cljs.core.count.call(null,c__36002__auto___376495);
var G__376500 = (0);
seq__376375_376425 = G__376497;
chunk__376382_376426 = G__376498;
count__376383_376427 = G__376499;
i__376384_376428 = G__376500;
continue;
} else {
var vec__376408_376501 = cljs.core.first.call(null,seq__376375_376493__$1);
var orig_type_376502 = cljs.core.nth.call(null,vec__376408_376501,(0),null);
var f_376503 = cljs.core.nth.call(null,vec__376408_376501,(1),null);
var seq__376376_376504 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_376502,cljs.core.PersistentArrayMap.fromArray([orig_type_376502,cljs.core.identity], true, false)));
var chunk__376378_376505 = null;
var count__376379_376506 = (0);
var i__376380_376507 = (0);
while(true){
if((i__376380_376507 < count__376379_376506)){
var vec__376410_376508 = cljs.core._nth.call(null,chunk__376378_376505,i__376380_376507);
var actual_type_376509 = cljs.core.nth.call(null,vec__376410_376508,(0),null);
var factory_376510 = cljs.core.nth.call(null,vec__376410_376508,(1),null);
var canonical_f_376512 = (cljs.core.truth_(selector_376424)?cljs.core.partial.call(null,dommy.core.live_listener,elem_376423,selector_376424):cljs.core.identity).call(null,factory_376510.call(null,f_376503));
dommy.core.update_event_listeners_BANG_.call(null,elem_376423,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_376424,actual_type_376509,f_376503], null),canonical_f_376512);

if(cljs.core.truth_(elem_376423.addEventListener)){
elem_376423.addEventListener(cljs.core.name.call(null,actual_type_376509),canonical_f_376512);
} else {
elem_376423.attachEvent(cljs.core.name.call(null,actual_type_376509),canonical_f_376512);
}

var G__376518 = seq__376376_376504;
var G__376519 = chunk__376378_376505;
var G__376520 = count__376379_376506;
var G__376521 = (i__376380_376507 + (1));
seq__376376_376504 = G__376518;
chunk__376378_376505 = G__376519;
count__376379_376506 = G__376520;
i__376380_376507 = G__376521;
continue;
} else {
var temp__4657__auto___376523__$1 = cljs.core.seq.call(null,seq__376376_376504);
if(temp__4657__auto___376523__$1){
var seq__376376_376524__$1 = temp__4657__auto___376523__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__376376_376524__$1)){
var c__36002__auto___376525 = cljs.core.chunk_first.call(null,seq__376376_376524__$1);
var G__376528 = cljs.core.chunk_rest.call(null,seq__376376_376524__$1);
var G__376529 = c__36002__auto___376525;
var G__376530 = cljs.core.count.call(null,c__36002__auto___376525);
var G__376531 = (0);
seq__376376_376504 = G__376528;
chunk__376378_376505 = G__376529;
count__376379_376506 = G__376530;
i__376380_376507 = G__376531;
continue;
} else {
var vec__376413_376535 = cljs.core.first.call(null,seq__376376_376524__$1);
var actual_type_376536 = cljs.core.nth.call(null,vec__376413_376535,(0),null);
var factory_376537 = cljs.core.nth.call(null,vec__376413_376535,(1),null);
var canonical_f_376539 = (cljs.core.truth_(selector_376424)?cljs.core.partial.call(null,dommy.core.live_listener,elem_376423,selector_376424):cljs.core.identity).call(null,factory_376537.call(null,f_376503));
dommy.core.update_event_listeners_BANG_.call(null,elem_376423,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_376424,actual_type_376536,f_376503], null),canonical_f_376539);

if(cljs.core.truth_(elem_376423.addEventListener)){
elem_376423.addEventListener(cljs.core.name.call(null,actual_type_376536),canonical_f_376539);
} else {
elem_376423.attachEvent(cljs.core.name.call(null,actual_type_376536),canonical_f_376539);
}

var G__376542 = cljs.core.next.call(null,seq__376376_376524__$1);
var G__376543 = null;
var G__376544 = (0);
var G__376545 = (0);
seq__376376_376504 = G__376542;
chunk__376378_376505 = G__376543;
count__376379_376506 = G__376544;
i__376380_376507 = G__376545;
continue;
}
} else {
}
}
break;
}

var G__376546 = cljs.core.next.call(null,seq__376375_376493__$1);
var G__376547 = null;
var G__376548 = (0);
var G__376549 = (0);
seq__376375_376425 = G__376546;
chunk__376382_376426 = G__376547;
count__376383_376427 = G__376548;
i__376384_376428 = G__376549;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq376367){
var G__376368 = cljs.core.first.call(null,seq376367);
var seq376367__$1 = cljs.core.next.call(null,seq376367);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__376368,seq376367__$1);
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
var len__36260__auto___376588 = arguments.length;
var i__36261__auto___376589 = (0);
while(true){
if((i__36261__auto___376589 < len__36260__auto___376588)){
args__36267__auto__.push((arguments[i__36261__auto___376589]));

var G__376590 = (i__36261__auto___376589 + (1));
i__36261__auto___376589 = G__376590;
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

var vec__376554_376591 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_376592 = cljs.core.nth.call(null,vec__376554_376591,(0),null);
var selector_376593 = cljs.core.nth.call(null,vec__376554_376591,(1),null);
var seq__376555_376594 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__376562_376595 = null;
var count__376563_376596 = (0);
var i__376564_376597 = (0);
while(true){
if((i__376564_376597 < count__376563_376596)){
var vec__376571_376598 = cljs.core._nth.call(null,chunk__376562_376595,i__376564_376597);
var orig_type_376599 = cljs.core.nth.call(null,vec__376571_376598,(0),null);
var f_376600 = cljs.core.nth.call(null,vec__376571_376598,(1),null);
var seq__376565_376601 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_376599,cljs.core.PersistentArrayMap.fromArray([orig_type_376599,cljs.core.identity], true, false)));
var chunk__376567_376602 = null;
var count__376568_376603 = (0);
var i__376569_376604 = (0);
while(true){
if((i__376569_376604 < count__376568_376603)){
var vec__376576_376605 = cljs.core._nth.call(null,chunk__376567_376602,i__376569_376604);
var actual_type_376606 = cljs.core.nth.call(null,vec__376576_376605,(0),null);
var __376607 = cljs.core.nth.call(null,vec__376576_376605,(1),null);
var keys_376608 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_376593,actual_type_376606,f_376600], null);
var canonical_f_376609 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_376592),keys_376608);
dommy.core.update_event_listeners_BANG_.call(null,elem_376592,dommy.utils.dissoc_in,keys_376608);

if(cljs.core.truth_(elem_376592.removeEventListener)){
elem_376592.removeEventListener(cljs.core.name.call(null,actual_type_376606),canonical_f_376609);
} else {
elem_376592.detachEvent(cljs.core.name.call(null,actual_type_376606),canonical_f_376609);
}

var G__376610 = seq__376565_376601;
var G__376611 = chunk__376567_376602;
var G__376612 = count__376568_376603;
var G__376613 = (i__376569_376604 + (1));
seq__376565_376601 = G__376610;
chunk__376567_376602 = G__376611;
count__376568_376603 = G__376612;
i__376569_376604 = G__376613;
continue;
} else {
var temp__4657__auto___376614 = cljs.core.seq.call(null,seq__376565_376601);
if(temp__4657__auto___376614){
var seq__376565_376615__$1 = temp__4657__auto___376614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__376565_376615__$1)){
var c__36002__auto___376616 = cljs.core.chunk_first.call(null,seq__376565_376615__$1);
var G__376617 = cljs.core.chunk_rest.call(null,seq__376565_376615__$1);
var G__376618 = c__36002__auto___376616;
var G__376619 = cljs.core.count.call(null,c__36002__auto___376616);
var G__376620 = (0);
seq__376565_376601 = G__376617;
chunk__376567_376602 = G__376618;
count__376568_376603 = G__376619;
i__376569_376604 = G__376620;
continue;
} else {
var vec__376578_376623 = cljs.core.first.call(null,seq__376565_376615__$1);
var actual_type_376624 = cljs.core.nth.call(null,vec__376578_376623,(0),null);
var __376625 = cljs.core.nth.call(null,vec__376578_376623,(1),null);
var keys_376627 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_376593,actual_type_376624,f_376600], null);
var canonical_f_376628 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_376592),keys_376627);
dommy.core.update_event_listeners_BANG_.call(null,elem_376592,dommy.utils.dissoc_in,keys_376627);

if(cljs.core.truth_(elem_376592.removeEventListener)){
elem_376592.removeEventListener(cljs.core.name.call(null,actual_type_376624),canonical_f_376628);
} else {
elem_376592.detachEvent(cljs.core.name.call(null,actual_type_376624),canonical_f_376628);
}

var G__376633 = cljs.core.next.call(null,seq__376565_376615__$1);
var G__376634 = null;
var G__376635 = (0);
var G__376636 = (0);
seq__376565_376601 = G__376633;
chunk__376567_376602 = G__376634;
count__376568_376603 = G__376635;
i__376569_376604 = G__376636;
continue;
}
} else {
}
}
break;
}

var G__376641 = seq__376555_376594;
var G__376642 = chunk__376562_376595;
var G__376643 = count__376563_376596;
var G__376644 = (i__376564_376597 + (1));
seq__376555_376594 = G__376641;
chunk__376562_376595 = G__376642;
count__376563_376596 = G__376643;
i__376564_376597 = G__376644;
continue;
} else {
var temp__4657__auto___376648 = cljs.core.seq.call(null,seq__376555_376594);
if(temp__4657__auto___376648){
var seq__376555_376649__$1 = temp__4657__auto___376648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__376555_376649__$1)){
var c__36002__auto___376654 = cljs.core.chunk_first.call(null,seq__376555_376649__$1);
var G__376655 = cljs.core.chunk_rest.call(null,seq__376555_376649__$1);
var G__376656 = c__36002__auto___376654;
var G__376657 = cljs.core.count.call(null,c__36002__auto___376654);
var G__376658 = (0);
seq__376555_376594 = G__376655;
chunk__376562_376595 = G__376656;
count__376563_376596 = G__376657;
i__376564_376597 = G__376658;
continue;
} else {
var vec__376580_376659 = cljs.core.first.call(null,seq__376555_376649__$1);
var orig_type_376660 = cljs.core.nth.call(null,vec__376580_376659,(0),null);
var f_376661 = cljs.core.nth.call(null,vec__376580_376659,(1),null);
var seq__376556_376662 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_376660,cljs.core.PersistentArrayMap.fromArray([orig_type_376660,cljs.core.identity], true, false)));
var chunk__376558_376663 = null;
var count__376559_376664 = (0);
var i__376560_376665 = (0);
while(true){
if((i__376560_376665 < count__376559_376664)){
var vec__376584_376666 = cljs.core._nth.call(null,chunk__376558_376663,i__376560_376665);
var actual_type_376667 = cljs.core.nth.call(null,vec__376584_376666,(0),null);
var __376668 = cljs.core.nth.call(null,vec__376584_376666,(1),null);
var keys_376669 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_376593,actual_type_376667,f_376661], null);
var canonical_f_376670 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_376592),keys_376669);
dommy.core.update_event_listeners_BANG_.call(null,elem_376592,dommy.utils.dissoc_in,keys_376669);

if(cljs.core.truth_(elem_376592.removeEventListener)){
elem_376592.removeEventListener(cljs.core.name.call(null,actual_type_376667),canonical_f_376670);
} else {
elem_376592.detachEvent(cljs.core.name.call(null,actual_type_376667),canonical_f_376670);
}

var G__376671 = seq__376556_376662;
var G__376672 = chunk__376558_376663;
var G__376673 = count__376559_376664;
var G__376674 = (i__376560_376665 + (1));
seq__376556_376662 = G__376671;
chunk__376558_376663 = G__376672;
count__376559_376664 = G__376673;
i__376560_376665 = G__376674;
continue;
} else {
var temp__4657__auto___376675__$1 = cljs.core.seq.call(null,seq__376556_376662);
if(temp__4657__auto___376675__$1){
var seq__376556_376676__$1 = temp__4657__auto___376675__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__376556_376676__$1)){
var c__36002__auto___376677 = cljs.core.chunk_first.call(null,seq__376556_376676__$1);
var G__376678 = cljs.core.chunk_rest.call(null,seq__376556_376676__$1);
var G__376679 = c__36002__auto___376677;
var G__376680 = cljs.core.count.call(null,c__36002__auto___376677);
var G__376681 = (0);
seq__376556_376662 = G__376678;
chunk__376558_376663 = G__376679;
count__376559_376664 = G__376680;
i__376560_376665 = G__376681;
continue;
} else {
var vec__376587_376682 = cljs.core.first.call(null,seq__376556_376676__$1);
var actual_type_376683 = cljs.core.nth.call(null,vec__376587_376682,(0),null);
var __376684 = cljs.core.nth.call(null,vec__376587_376682,(1),null);
var keys_376687 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_376593,actual_type_376683,f_376661], null);
var canonical_f_376688 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_376592),keys_376687);
dommy.core.update_event_listeners_BANG_.call(null,elem_376592,dommy.utils.dissoc_in,keys_376687);

if(cljs.core.truth_(elem_376592.removeEventListener)){
elem_376592.removeEventListener(cljs.core.name.call(null,actual_type_376683),canonical_f_376688);
} else {
elem_376592.detachEvent(cljs.core.name.call(null,actual_type_376683),canonical_f_376688);
}

var G__376695 = cljs.core.next.call(null,seq__376556_376676__$1);
var G__376696 = null;
var G__376697 = (0);
var G__376698 = (0);
seq__376556_376662 = G__376695;
chunk__376558_376663 = G__376696;
count__376559_376664 = G__376697;
i__376560_376665 = G__376698;
continue;
}
} else {
}
}
break;
}

var G__376700 = cljs.core.next.call(null,seq__376555_376649__$1);
var G__376701 = null;
var G__376702 = (0);
var G__376703 = (0);
seq__376555_376594 = G__376700;
chunk__376562_376595 = G__376701;
count__376563_376596 = G__376702;
i__376564_376597 = G__376703;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq376550){
var G__376551 = cljs.core.first.call(null,seq376550);
var seq376550__$1 = cljs.core.next.call(null,seq376550);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__376551,seq376550__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__36267__auto__ = [];
var len__36260__auto___376723 = arguments.length;
var i__36261__auto___376724 = (0);
while(true){
if((i__36261__auto___376724 < len__36260__auto___376723)){
args__36267__auto__.push((arguments[i__36261__auto___376724]));

var G__376726 = (i__36261__auto___376724 + (1));
i__36261__auto___376724 = G__376726;
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

var vec__376712_376735 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_376736 = cljs.core.nth.call(null,vec__376712_376735,(0),null);
var selector_376737 = cljs.core.nth.call(null,vec__376712_376735,(1),null);
var seq__376713_376741 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__376714_376742 = null;
var count__376715_376743 = (0);
var i__376716_376744 = (0);
while(true){
if((i__376716_376744 < count__376715_376743)){
var vec__376717_376749 = cljs.core._nth.call(null,chunk__376714_376742,i__376716_376744);
var type_376750 = cljs.core.nth.call(null,vec__376717_376749,(0),null);
var f_376751 = cljs.core.nth.call(null,vec__376717_376749,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_376750,((function (seq__376713_376741,chunk__376714_376742,count__376715_376743,i__376716_376744,vec__376717_376749,type_376750,f_376751,vec__376712_376735,elem_376736,selector_376737){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_376750,dommy$core$this_fn);

return f_376751.call(null,e);
});})(seq__376713_376741,chunk__376714_376742,count__376715_376743,i__376716_376744,vec__376717_376749,type_376750,f_376751,vec__376712_376735,elem_376736,selector_376737))
);

var G__376752 = seq__376713_376741;
var G__376753 = chunk__376714_376742;
var G__376754 = count__376715_376743;
var G__376755 = (i__376716_376744 + (1));
seq__376713_376741 = G__376752;
chunk__376714_376742 = G__376753;
count__376715_376743 = G__376754;
i__376716_376744 = G__376755;
continue;
} else {
var temp__4657__auto___376756 = cljs.core.seq.call(null,seq__376713_376741);
if(temp__4657__auto___376756){
var seq__376713_376761__$1 = temp__4657__auto___376756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__376713_376761__$1)){
var c__36002__auto___376762 = cljs.core.chunk_first.call(null,seq__376713_376761__$1);
var G__376763 = cljs.core.chunk_rest.call(null,seq__376713_376761__$1);
var G__376764 = c__36002__auto___376762;
var G__376765 = cljs.core.count.call(null,c__36002__auto___376762);
var G__376766 = (0);
seq__376713_376741 = G__376763;
chunk__376714_376742 = G__376764;
count__376715_376743 = G__376765;
i__376716_376744 = G__376766;
continue;
} else {
var vec__376722_376767 = cljs.core.first.call(null,seq__376713_376761__$1);
var type_376768 = cljs.core.nth.call(null,vec__376722_376767,(0),null);
var f_376769 = cljs.core.nth.call(null,vec__376722_376767,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_376768,((function (seq__376713_376741,chunk__376714_376742,count__376715_376743,i__376716_376744,vec__376722_376767,type_376768,f_376769,seq__376713_376761__$1,temp__4657__auto___376756,vec__376712_376735,elem_376736,selector_376737){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_376768,dommy$core$this_fn);

return f_376769.call(null,e);
});})(seq__376713_376741,chunk__376714_376742,count__376715_376743,i__376716_376744,vec__376722_376767,type_376768,f_376769,seq__376713_376761__$1,temp__4657__auto___376756,vec__376712_376735,elem_376736,selector_376737))
);

var G__376774 = cljs.core.next.call(null,seq__376713_376761__$1);
var G__376775 = null;
var G__376776 = (0);
var G__376777 = (0);
seq__376713_376741 = G__376774;
chunk__376714_376742 = G__376775;
count__376715_376743 = G__376776;
i__376716_376744 = G__376777;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq376710){
var G__376711 = cljs.core.first.call(null,seq376710);
var seq376710__$1 = cljs.core.next.call(null,seq376710);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__376711,seq376710__$1);
});
