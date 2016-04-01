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
var or__35422__auto__ = elem.textContent;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
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
var args73111 = [];
var len__36491__auto___73114 = arguments.length;
var i__36492__auto___73115 = (0);
while(true){
if((i__36492__auto___73115 < len__36491__auto___73114)){
args73111.push((arguments[i__36492__auto___73115]));

var G__73116 = (i__36492__auto___73115 + (1));
i__36492__auto___73115 = G__73116;
continue;
} else {
}
break;
}

var G__73113 = args73111.length;
switch (G__73113) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73111.length)].join('')));

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
var args73118 = [];
var len__36491__auto___73121 = arguments.length;
var i__36492__auto___73122 = (0);
while(true){
if((i__36492__auto___73122 < len__36491__auto___73121)){
args73118.push((arguments[i__36492__auto___73122]));

var G__73123 = (i__36492__auto___73122 + (1));
i__36492__auto___73122 = G__73123;
continue;
} else {
}
break;
}

var G__73120 = args73118.length;
switch (G__73120) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73118.length)].join('')));

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
var args73126 = [];
var len__36491__auto___73129 = arguments.length;
var i__36492__auto___73130 = (0);
while(true){
if((i__36492__auto___73130 < len__36491__auto___73129)){
args73126.push((arguments[i__36492__auto___73130]));

var G__73131 = (i__36492__auto___73130 + (1));
i__36492__auto___73130 = G__73131;
continue;
} else {
}
break;
}

var G__73128 = args73126.length;
switch (G__73128) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73126.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__73125_SHARP_){
return !((p1__73125_SHARP_ === base));
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
var args__36498__auto__ = [];
var len__36491__auto___73141 = arguments.length;
var i__36492__auto___73142 = (0);
while(true){
if((i__36492__auto___73142 < len__36491__auto___73141)){
args__36498__auto__.push((arguments[i__36492__auto___73142]));

var G__73143 = (i__36492__auto___73142 + (1));
i__36492__auto___73142 = G__73143;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__73135_73144 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__73136_73145 = null;
var count__73137_73146 = (0);
var i__73138_73147 = (0);
while(true){
if((i__73138_73147 < count__73137_73146)){
var vec__73139_73148 = cljs.core._nth.call(null,chunk__73136_73145,i__73138_73147);
var k_73149 = cljs.core.nth.call(null,vec__73139_73148,(0),null);
var v_73150 = cljs.core.nth.call(null,vec__73139_73148,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_73149),v_73150);

var G__73151 = seq__73135_73144;
var G__73152 = chunk__73136_73145;
var G__73153 = count__73137_73146;
var G__73154 = (i__73138_73147 + (1));
seq__73135_73144 = G__73151;
chunk__73136_73145 = G__73152;
count__73137_73146 = G__73153;
i__73138_73147 = G__73154;
continue;
} else {
var temp__4657__auto___73155 = cljs.core.seq.call(null,seq__73135_73144);
if(temp__4657__auto___73155){
var seq__73135_73156__$1 = temp__4657__auto___73155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73135_73156__$1)){
var c__36233__auto___73157 = cljs.core.chunk_first.call(null,seq__73135_73156__$1);
var G__73158 = cljs.core.chunk_rest.call(null,seq__73135_73156__$1);
var G__73159 = c__36233__auto___73157;
var G__73160 = cljs.core.count.call(null,c__36233__auto___73157);
var G__73161 = (0);
seq__73135_73144 = G__73158;
chunk__73136_73145 = G__73159;
count__73137_73146 = G__73160;
i__73138_73147 = G__73161;
continue;
} else {
var vec__73140_73162 = cljs.core.first.call(null,seq__73135_73156__$1);
var k_73163 = cljs.core.nth.call(null,vec__73140_73162,(0),null);
var v_73164 = cljs.core.nth.call(null,vec__73140_73162,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_73163),v_73164);

var G__73165 = cljs.core.next.call(null,seq__73135_73156__$1);
var G__73166 = null;
var G__73167 = (0);
var G__73168 = (0);
seq__73135_73144 = G__73165;
chunk__73136_73145 = G__73166;
count__73137_73146 = G__73167;
i__73138_73147 = G__73168;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq73133){
var G__73134 = cljs.core.first.call(null,seq73133);
var seq73133__$1 = cljs.core.next.call(null,seq73133);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__73134,seq73133__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__36498__auto__ = [];
var len__36491__auto___73175 = arguments.length;
var i__36492__auto___73176 = (0);
while(true){
if((i__36492__auto___73176 < len__36491__auto___73175)){
args__36498__auto__.push((arguments[i__36492__auto___73176]));

var G__73177 = (i__36492__auto___73176 + (1));
i__36492__auto___73176 = G__73177;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__73171_73178 = cljs.core.seq.call(null,keywords);
var chunk__73172_73179 = null;
var count__73173_73180 = (0);
var i__73174_73181 = (0);
while(true){
if((i__73174_73181 < count__73173_73180)){
var kw_73182 = cljs.core._nth.call(null,chunk__73172_73179,i__73174_73181);
style.removeProperty(dommy.utils.as_str.call(null,kw_73182));

var G__73183 = seq__73171_73178;
var G__73184 = chunk__73172_73179;
var G__73185 = count__73173_73180;
var G__73186 = (i__73174_73181 + (1));
seq__73171_73178 = G__73183;
chunk__73172_73179 = G__73184;
count__73173_73180 = G__73185;
i__73174_73181 = G__73186;
continue;
} else {
var temp__4657__auto___73187 = cljs.core.seq.call(null,seq__73171_73178);
if(temp__4657__auto___73187){
var seq__73171_73188__$1 = temp__4657__auto___73187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73171_73188__$1)){
var c__36233__auto___73189 = cljs.core.chunk_first.call(null,seq__73171_73188__$1);
var G__73190 = cljs.core.chunk_rest.call(null,seq__73171_73188__$1);
var G__73191 = c__36233__auto___73189;
var G__73192 = cljs.core.count.call(null,c__36233__auto___73189);
var G__73193 = (0);
seq__73171_73178 = G__73190;
chunk__73172_73179 = G__73191;
count__73173_73180 = G__73192;
i__73174_73181 = G__73193;
continue;
} else {
var kw_73194 = cljs.core.first.call(null,seq__73171_73188__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_73194));

var G__73195 = cljs.core.next.call(null,seq__73171_73188__$1);
var G__73196 = null;
var G__73197 = (0);
var G__73198 = (0);
seq__73171_73178 = G__73195;
chunk__73172_73179 = G__73196;
count__73173_73180 = G__73197;
i__73174_73181 = G__73198;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq73169){
var G__73170 = cljs.core.first.call(null,seq73169);
var seq73169__$1 = cljs.core.next.call(null,seq73169);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__73170,seq73169__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__36498__auto__ = [];
var len__36491__auto___73207 = arguments.length;
var i__36492__auto___73208 = (0);
while(true){
if((i__36492__auto___73208 < len__36491__auto___73207)){
args__36498__auto__.push((arguments[i__36492__auto___73208]));

var G__73209 = (i__36492__auto___73208 + (1));
i__36492__auto___73208 = G__73209;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__73201_73210 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__73202_73211 = null;
var count__73203_73212 = (0);
var i__73204_73213 = (0);
while(true){
if((i__73204_73213 < count__73203_73212)){
var vec__73205_73214 = cljs.core._nth.call(null,chunk__73202_73211,i__73204_73213);
var k_73215 = cljs.core.nth.call(null,vec__73205_73214,(0),null);
var v_73216 = cljs.core.nth.call(null,vec__73205_73214,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_73215,[cljs.core.str(v_73216),cljs.core.str("px")].join(''));

var G__73217 = seq__73201_73210;
var G__73218 = chunk__73202_73211;
var G__73219 = count__73203_73212;
var G__73220 = (i__73204_73213 + (1));
seq__73201_73210 = G__73217;
chunk__73202_73211 = G__73218;
count__73203_73212 = G__73219;
i__73204_73213 = G__73220;
continue;
} else {
var temp__4657__auto___73221 = cljs.core.seq.call(null,seq__73201_73210);
if(temp__4657__auto___73221){
var seq__73201_73222__$1 = temp__4657__auto___73221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73201_73222__$1)){
var c__36233__auto___73223 = cljs.core.chunk_first.call(null,seq__73201_73222__$1);
var G__73224 = cljs.core.chunk_rest.call(null,seq__73201_73222__$1);
var G__73225 = c__36233__auto___73223;
var G__73226 = cljs.core.count.call(null,c__36233__auto___73223);
var G__73227 = (0);
seq__73201_73210 = G__73224;
chunk__73202_73211 = G__73225;
count__73203_73212 = G__73226;
i__73204_73213 = G__73227;
continue;
} else {
var vec__73206_73228 = cljs.core.first.call(null,seq__73201_73222__$1);
var k_73229 = cljs.core.nth.call(null,vec__73206_73228,(0),null);
var v_73230 = cljs.core.nth.call(null,vec__73206_73228,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_73229,[cljs.core.str(v_73230),cljs.core.str("px")].join(''));

var G__73231 = cljs.core.next.call(null,seq__73201_73222__$1);
var G__73232 = null;
var G__73233 = (0);
var G__73234 = (0);
seq__73201_73210 = G__73231;
chunk__73202_73211 = G__73232;
count__73203_73212 = G__73233;
i__73204_73213 = G__73234;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq73199){
var G__73200 = cljs.core.first.call(null,seq73199);
var seq73199__$1 = cljs.core.next.call(null,seq73199);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__73200,seq73199__$1);
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
var args73235 = [];
var len__36491__auto___73250 = arguments.length;
var i__36492__auto___73251 = (0);
while(true){
if((i__36492__auto___73251 < len__36491__auto___73250)){
args73235.push((arguments[i__36492__auto___73251]));

var G__73252 = (i__36492__auto___73251 + (1));
i__36492__auto___73251 = G__73252;
continue;
} else {
}
break;
}

var G__73241 = args73235.length;
switch (G__73241) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__36510__auto__ = (new cljs.core.IndexedSeq(args73235.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36510__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__73242 = elem;
(G__73242[k__$1] = v);

return G__73242;
} else {
var G__73243 = elem;
G__73243.setAttribute(k__$1,v);

return G__73243;
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

var seq__73244_73254 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__73245_73255 = null;
var count__73246_73256 = (0);
var i__73247_73257 = (0);
while(true){
if((i__73247_73257 < count__73246_73256)){
var vec__73248_73258 = cljs.core._nth.call(null,chunk__73245_73255,i__73247_73257);
var k_73259__$1 = cljs.core.nth.call(null,vec__73248_73258,(0),null);
var v_73260__$1 = cljs.core.nth.call(null,vec__73248_73258,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_73259__$1,v_73260__$1);

var G__73261 = seq__73244_73254;
var G__73262 = chunk__73245_73255;
var G__73263 = count__73246_73256;
var G__73264 = (i__73247_73257 + (1));
seq__73244_73254 = G__73261;
chunk__73245_73255 = G__73262;
count__73246_73256 = G__73263;
i__73247_73257 = G__73264;
continue;
} else {
var temp__4657__auto___73265 = cljs.core.seq.call(null,seq__73244_73254);
if(temp__4657__auto___73265){
var seq__73244_73266__$1 = temp__4657__auto___73265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73244_73266__$1)){
var c__36233__auto___73267 = cljs.core.chunk_first.call(null,seq__73244_73266__$1);
var G__73268 = cljs.core.chunk_rest.call(null,seq__73244_73266__$1);
var G__73269 = c__36233__auto___73267;
var G__73270 = cljs.core.count.call(null,c__36233__auto___73267);
var G__73271 = (0);
seq__73244_73254 = G__73268;
chunk__73245_73255 = G__73269;
count__73246_73256 = G__73270;
i__73247_73257 = G__73271;
continue;
} else {
var vec__73249_73272 = cljs.core.first.call(null,seq__73244_73266__$1);
var k_73273__$1 = cljs.core.nth.call(null,vec__73249_73272,(0),null);
var v_73274__$1 = cljs.core.nth.call(null,vec__73249_73272,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_73273__$1,v_73274__$1);

var G__73275 = cljs.core.next.call(null,seq__73244_73266__$1);
var G__73276 = null;
var G__73277 = (0);
var G__73278 = (0);
seq__73244_73254 = G__73275;
chunk__73245_73255 = G__73276;
count__73246_73256 = G__73277;
i__73247_73257 = G__73278;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq73236){
var G__73237 = cljs.core.first.call(null,seq73236);
var seq73236__$1 = cljs.core.next.call(null,seq73236);
var G__73238 = cljs.core.first.call(null,seq73236__$1);
var seq73236__$2 = cljs.core.next.call(null,seq73236__$1);
var G__73239 = cljs.core.first.call(null,seq73236__$2);
var seq73236__$3 = cljs.core.next.call(null,seq73236__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__73237,G__73238,G__73239,seq73236__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args73279 = [];
var len__36491__auto___73289 = arguments.length;
var i__36492__auto___73290 = (0);
while(true){
if((i__36492__auto___73290 < len__36491__auto___73289)){
args73279.push((arguments[i__36492__auto___73290]));

var G__73291 = (i__36492__auto___73290 + (1));
i__36492__auto___73290 = G__73291;
continue;
} else {
}
break;
}

var G__73284 = args73279.length;
switch (G__73284) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36510__auto__ = (new cljs.core.IndexedSeq(args73279.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36510__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_73293__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_73293__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_73293__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__73285_73294 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__73286_73295 = null;
var count__73287_73296 = (0);
var i__73288_73297 = (0);
while(true){
if((i__73288_73297 < count__73287_73296)){
var k_73298__$1 = cljs.core._nth.call(null,chunk__73286_73295,i__73288_73297);
dommy.core.remove_attr_BANG_.call(null,elem,k_73298__$1);

var G__73299 = seq__73285_73294;
var G__73300 = chunk__73286_73295;
var G__73301 = count__73287_73296;
var G__73302 = (i__73288_73297 + (1));
seq__73285_73294 = G__73299;
chunk__73286_73295 = G__73300;
count__73287_73296 = G__73301;
i__73288_73297 = G__73302;
continue;
} else {
var temp__4657__auto___73303 = cljs.core.seq.call(null,seq__73285_73294);
if(temp__4657__auto___73303){
var seq__73285_73304__$1 = temp__4657__auto___73303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73285_73304__$1)){
var c__36233__auto___73305 = cljs.core.chunk_first.call(null,seq__73285_73304__$1);
var G__73306 = cljs.core.chunk_rest.call(null,seq__73285_73304__$1);
var G__73307 = c__36233__auto___73305;
var G__73308 = cljs.core.count.call(null,c__36233__auto___73305);
var G__73309 = (0);
seq__73285_73294 = G__73306;
chunk__73286_73295 = G__73307;
count__73287_73296 = G__73308;
i__73288_73297 = G__73309;
continue;
} else {
var k_73310__$1 = cljs.core.first.call(null,seq__73285_73304__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_73310__$1);

var G__73311 = cljs.core.next.call(null,seq__73285_73304__$1);
var G__73312 = null;
var G__73313 = (0);
var G__73314 = (0);
seq__73285_73294 = G__73311;
chunk__73286_73295 = G__73312;
count__73287_73296 = G__73313;
i__73288_73297 = G__73314;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq73280){
var G__73281 = cljs.core.first.call(null,seq73280);
var seq73280__$1 = cljs.core.next.call(null,seq73280);
var G__73282 = cljs.core.first.call(null,seq73280__$1);
var seq73280__$2 = cljs.core.next.call(null,seq73280__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__73281,G__73282,seq73280__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args73315 = [];
var len__36491__auto___73318 = arguments.length;
var i__36492__auto___73319 = (0);
while(true){
if((i__36492__auto___73319 < len__36491__auto___73318)){
args73315.push((arguments[i__36492__auto___73319]));

var G__73320 = (i__36492__auto___73319 + (1));
i__36492__auto___73319 = G__73320;
continue;
} else {
}
break;
}

var G__73317 = args73315.length;
switch (G__73317) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73315.length)].join('')));

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
var args73322 = [];
var len__36491__auto___73340 = arguments.length;
var i__36492__auto___73341 = (0);
while(true){
if((i__36492__auto___73341 < len__36491__auto___73340)){
args73322.push((arguments[i__36492__auto___73341]));

var G__73342 = (i__36492__auto___73341 + (1));
i__36492__auto___73341 = G__73342;
continue;
} else {
}
break;
}

var G__73327 = args73322.length;
switch (G__73327) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36510__auto__ = (new cljs.core.IndexedSeq(args73322.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36510__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___73344 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___73344)){
var class_list_73345 = temp__4655__auto___73344;
var seq__73328_73346 = cljs.core.seq.call(null,classes__$1);
var chunk__73329_73347 = null;
var count__73330_73348 = (0);
var i__73331_73349 = (0);
while(true){
if((i__73331_73349 < count__73330_73348)){
var c_73350 = cljs.core._nth.call(null,chunk__73329_73347,i__73331_73349);
class_list_73345.add(c_73350);

var G__73351 = seq__73328_73346;
var G__73352 = chunk__73329_73347;
var G__73353 = count__73330_73348;
var G__73354 = (i__73331_73349 + (1));
seq__73328_73346 = G__73351;
chunk__73329_73347 = G__73352;
count__73330_73348 = G__73353;
i__73331_73349 = G__73354;
continue;
} else {
var temp__4657__auto___73355 = cljs.core.seq.call(null,seq__73328_73346);
if(temp__4657__auto___73355){
var seq__73328_73356__$1 = temp__4657__auto___73355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73328_73356__$1)){
var c__36233__auto___73357 = cljs.core.chunk_first.call(null,seq__73328_73356__$1);
var G__73358 = cljs.core.chunk_rest.call(null,seq__73328_73356__$1);
var G__73359 = c__36233__auto___73357;
var G__73360 = cljs.core.count.call(null,c__36233__auto___73357);
var G__73361 = (0);
seq__73328_73346 = G__73358;
chunk__73329_73347 = G__73359;
count__73330_73348 = G__73360;
i__73331_73349 = G__73361;
continue;
} else {
var c_73362 = cljs.core.first.call(null,seq__73328_73356__$1);
class_list_73345.add(c_73362);

var G__73363 = cljs.core.next.call(null,seq__73328_73356__$1);
var G__73364 = null;
var G__73365 = (0);
var G__73366 = (0);
seq__73328_73346 = G__73363;
chunk__73329_73347 = G__73364;
count__73330_73348 = G__73365;
i__73331_73349 = G__73366;
continue;
}
} else {
}
}
break;
}
} else {
var seq__73332_73367 = cljs.core.seq.call(null,classes__$1);
var chunk__73333_73368 = null;
var count__73334_73369 = (0);
var i__73335_73370 = (0);
while(true){
if((i__73335_73370 < count__73334_73369)){
var c_73371 = cljs.core._nth.call(null,chunk__73333_73368,i__73335_73370);
var class_name_73372 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_73372,c_73371))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_73372 === ""))?c_73371:[cljs.core.str(class_name_73372),cljs.core.str(" "),cljs.core.str(c_73371)].join('')));
}

var G__73373 = seq__73332_73367;
var G__73374 = chunk__73333_73368;
var G__73375 = count__73334_73369;
var G__73376 = (i__73335_73370 + (1));
seq__73332_73367 = G__73373;
chunk__73333_73368 = G__73374;
count__73334_73369 = G__73375;
i__73335_73370 = G__73376;
continue;
} else {
var temp__4657__auto___73377 = cljs.core.seq.call(null,seq__73332_73367);
if(temp__4657__auto___73377){
var seq__73332_73378__$1 = temp__4657__auto___73377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73332_73378__$1)){
var c__36233__auto___73379 = cljs.core.chunk_first.call(null,seq__73332_73378__$1);
var G__73380 = cljs.core.chunk_rest.call(null,seq__73332_73378__$1);
var G__73381 = c__36233__auto___73379;
var G__73382 = cljs.core.count.call(null,c__36233__auto___73379);
var G__73383 = (0);
seq__73332_73367 = G__73380;
chunk__73333_73368 = G__73381;
count__73334_73369 = G__73382;
i__73335_73370 = G__73383;
continue;
} else {
var c_73384 = cljs.core.first.call(null,seq__73332_73378__$1);
var class_name_73385 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_73385,c_73384))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_73385 === ""))?c_73384:[cljs.core.str(class_name_73385),cljs.core.str(" "),cljs.core.str(c_73384)].join('')));
}

var G__73386 = cljs.core.next.call(null,seq__73332_73378__$1);
var G__73387 = null;
var G__73388 = (0);
var G__73389 = (0);
seq__73332_73367 = G__73386;
chunk__73333_73368 = G__73387;
count__73334_73369 = G__73388;
i__73335_73370 = G__73389;
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
var seq__73336_73390 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__73337_73391 = null;
var count__73338_73392 = (0);
var i__73339_73393 = (0);
while(true){
if((i__73339_73393 < count__73338_73392)){
var c_73394 = cljs.core._nth.call(null,chunk__73337_73391,i__73339_73393);
dommy.core.add_class_BANG_.call(null,elem,c_73394);

var G__73395 = seq__73336_73390;
var G__73396 = chunk__73337_73391;
var G__73397 = count__73338_73392;
var G__73398 = (i__73339_73393 + (1));
seq__73336_73390 = G__73395;
chunk__73337_73391 = G__73396;
count__73338_73392 = G__73397;
i__73339_73393 = G__73398;
continue;
} else {
var temp__4657__auto___73399 = cljs.core.seq.call(null,seq__73336_73390);
if(temp__4657__auto___73399){
var seq__73336_73400__$1 = temp__4657__auto___73399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73336_73400__$1)){
var c__36233__auto___73401 = cljs.core.chunk_first.call(null,seq__73336_73400__$1);
var G__73402 = cljs.core.chunk_rest.call(null,seq__73336_73400__$1);
var G__73403 = c__36233__auto___73401;
var G__73404 = cljs.core.count.call(null,c__36233__auto___73401);
var G__73405 = (0);
seq__73336_73390 = G__73402;
chunk__73337_73391 = G__73403;
count__73338_73392 = G__73404;
i__73339_73393 = G__73405;
continue;
} else {
var c_73406 = cljs.core.first.call(null,seq__73336_73400__$1);
dommy.core.add_class_BANG_.call(null,elem,c_73406);

var G__73407 = cljs.core.next.call(null,seq__73336_73400__$1);
var G__73408 = null;
var G__73409 = (0);
var G__73410 = (0);
seq__73336_73390 = G__73407;
chunk__73337_73391 = G__73408;
count__73338_73392 = G__73409;
i__73339_73393 = G__73410;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq73323){
var G__73324 = cljs.core.first.call(null,seq73323);
var seq73323__$1 = cljs.core.next.call(null,seq73323);
var G__73325 = cljs.core.first.call(null,seq73323__$1);
var seq73323__$2 = cljs.core.next.call(null,seq73323__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__73324,G__73325,seq73323__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args73411 = [];
var len__36491__auto___73421 = arguments.length;
var i__36492__auto___73422 = (0);
while(true){
if((i__36492__auto___73422 < len__36491__auto___73421)){
args73411.push((arguments[i__36492__auto___73422]));

var G__73423 = (i__36492__auto___73422 + (1));
i__36492__auto___73422 = G__73423;
continue;
} else {
}
break;
}

var G__73416 = args73411.length;
switch (G__73416) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36510__auto__ = (new cljs.core.IndexedSeq(args73411.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36510__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___73425 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___73425)){
var class_list_73426 = temp__4655__auto___73425;
class_list_73426.remove(c__$1);
} else {
var class_name_73427 = dommy.core.class$.call(null,elem);
var new_class_name_73428 = dommy.utils.remove_class_str.call(null,class_name_73427,c__$1);
if((class_name_73427 === new_class_name_73428)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_73428);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__73417 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__73418 = null;
var count__73419 = (0);
var i__73420 = (0);
while(true){
if((i__73420 < count__73419)){
var c = cljs.core._nth.call(null,chunk__73418,i__73420);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__73429 = seq__73417;
var G__73430 = chunk__73418;
var G__73431 = count__73419;
var G__73432 = (i__73420 + (1));
seq__73417 = G__73429;
chunk__73418 = G__73430;
count__73419 = G__73431;
i__73420 = G__73432;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__73417);
if(temp__4657__auto__){
var seq__73417__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73417__$1)){
var c__36233__auto__ = cljs.core.chunk_first.call(null,seq__73417__$1);
var G__73433 = cljs.core.chunk_rest.call(null,seq__73417__$1);
var G__73434 = c__36233__auto__;
var G__73435 = cljs.core.count.call(null,c__36233__auto__);
var G__73436 = (0);
seq__73417 = G__73433;
chunk__73418 = G__73434;
count__73419 = G__73435;
i__73420 = G__73436;
continue;
} else {
var c = cljs.core.first.call(null,seq__73417__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__73437 = cljs.core.next.call(null,seq__73417__$1);
var G__73438 = null;
var G__73439 = (0);
var G__73440 = (0);
seq__73417 = G__73437;
chunk__73418 = G__73438;
count__73419 = G__73439;
i__73420 = G__73440;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq73412){
var G__73413 = cljs.core.first.call(null,seq73412);
var seq73412__$1 = cljs.core.next.call(null,seq73412);
var G__73414 = cljs.core.first.call(null,seq73412__$1);
var seq73412__$2 = cljs.core.next.call(null,seq73412__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__73413,G__73414,seq73412__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args73441 = [];
var len__36491__auto___73444 = arguments.length;
var i__36492__auto___73445 = (0);
while(true){
if((i__36492__auto___73445 < len__36491__auto___73444)){
args73441.push((arguments[i__36492__auto___73445]));

var G__73446 = (i__36492__auto___73445 + (1));
i__36492__auto___73445 = G__73446;
continue;
} else {
}
break;
}

var G__73443 = args73441.length;
switch (G__73443) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73441.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___73448 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___73448)){
var class_list_73449 = temp__4655__auto___73448;
class_list_73449.toggle(c__$1);
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
var args73450 = [];
var len__36491__auto___73453 = arguments.length;
var i__36492__auto___73454 = (0);
while(true){
if((i__36492__auto___73454 < len__36491__auto___73453)){
args73450.push((arguments[i__36492__auto___73454]));

var G__73455 = (i__36492__auto___73454 + (1));
i__36492__auto___73454 = G__73455;
continue;
} else {
}
break;
}

var G__73452 = args73450.length;
switch (G__73452) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73450.length)].join('')));

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
var args73457 = [];
var len__36491__auto___73460 = arguments.length;
var i__36492__auto___73461 = (0);
while(true){
if((i__36492__auto___73461 < len__36491__auto___73460)){
args73457.push((arguments[i__36492__auto___73461]));

var G__73462 = (i__36492__auto___73461 + (1));
i__36492__auto___73461 = G__73462;
continue;
} else {
}
break;
}

var G__73459 = args73457.length;
switch (G__73459) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73457.length)].join('')));

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
var args73464 = [];
var len__36491__auto___73475 = arguments.length;
var i__36492__auto___73476 = (0);
while(true){
if((i__36492__auto___73476 < len__36491__auto___73475)){
args73464.push((arguments[i__36492__auto___73476]));

var G__73477 = (i__36492__auto___73476 + (1));
i__36492__auto___73476 = G__73477;
continue;
} else {
}
break;
}

var G__73469 = args73464.length;
switch (G__73469) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36510__auto__ = (new cljs.core.IndexedSeq(args73464.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36510__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__73470 = parent;
G__73470.appendChild(child);

return G__73470;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__73471_73479 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__73472_73480 = null;
var count__73473_73481 = (0);
var i__73474_73482 = (0);
while(true){
if((i__73474_73482 < count__73473_73481)){
var c_73483 = cljs.core._nth.call(null,chunk__73472_73480,i__73474_73482);
dommy.core.append_BANG_.call(null,parent,c_73483);

var G__73484 = seq__73471_73479;
var G__73485 = chunk__73472_73480;
var G__73486 = count__73473_73481;
var G__73487 = (i__73474_73482 + (1));
seq__73471_73479 = G__73484;
chunk__73472_73480 = G__73485;
count__73473_73481 = G__73486;
i__73474_73482 = G__73487;
continue;
} else {
var temp__4657__auto___73488 = cljs.core.seq.call(null,seq__73471_73479);
if(temp__4657__auto___73488){
var seq__73471_73489__$1 = temp__4657__auto___73488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73471_73489__$1)){
var c__36233__auto___73490 = cljs.core.chunk_first.call(null,seq__73471_73489__$1);
var G__73491 = cljs.core.chunk_rest.call(null,seq__73471_73489__$1);
var G__73492 = c__36233__auto___73490;
var G__73493 = cljs.core.count.call(null,c__36233__auto___73490);
var G__73494 = (0);
seq__73471_73479 = G__73491;
chunk__73472_73480 = G__73492;
count__73473_73481 = G__73493;
i__73474_73482 = G__73494;
continue;
} else {
var c_73495 = cljs.core.first.call(null,seq__73471_73489__$1);
dommy.core.append_BANG_.call(null,parent,c_73495);

var G__73496 = cljs.core.next.call(null,seq__73471_73489__$1);
var G__73497 = null;
var G__73498 = (0);
var G__73499 = (0);
seq__73471_73479 = G__73496;
chunk__73472_73480 = G__73497;
count__73473_73481 = G__73498;
i__73474_73482 = G__73499;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq73465){
var G__73466 = cljs.core.first.call(null,seq73465);
var seq73465__$1 = cljs.core.next.call(null,seq73465);
var G__73467 = cljs.core.first.call(null,seq73465__$1);
var seq73465__$2 = cljs.core.next.call(null,seq73465__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__73466,G__73467,seq73465__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args73500 = [];
var len__36491__auto___73511 = arguments.length;
var i__36492__auto___73512 = (0);
while(true){
if((i__36492__auto___73512 < len__36491__auto___73511)){
args73500.push((arguments[i__36492__auto___73512]));

var G__73513 = (i__36492__auto___73512 + (1));
i__36492__auto___73512 = G__73513;
continue;
} else {
}
break;
}

var G__73505 = args73500.length;
switch (G__73505) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36510__auto__ = (new cljs.core.IndexedSeq(args73500.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36510__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__73506 = parent;
G__73506.insertBefore(child,parent.firstChild);

return G__73506;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__73507_73515 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__73508_73516 = null;
var count__73509_73517 = (0);
var i__73510_73518 = (0);
while(true){
if((i__73510_73518 < count__73509_73517)){
var c_73519 = cljs.core._nth.call(null,chunk__73508_73516,i__73510_73518);
dommy.core.prepend_BANG_.call(null,parent,c_73519);

var G__73520 = seq__73507_73515;
var G__73521 = chunk__73508_73516;
var G__73522 = count__73509_73517;
var G__73523 = (i__73510_73518 + (1));
seq__73507_73515 = G__73520;
chunk__73508_73516 = G__73521;
count__73509_73517 = G__73522;
i__73510_73518 = G__73523;
continue;
} else {
var temp__4657__auto___73524 = cljs.core.seq.call(null,seq__73507_73515);
if(temp__4657__auto___73524){
var seq__73507_73525__$1 = temp__4657__auto___73524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73507_73525__$1)){
var c__36233__auto___73526 = cljs.core.chunk_first.call(null,seq__73507_73525__$1);
var G__73527 = cljs.core.chunk_rest.call(null,seq__73507_73525__$1);
var G__73528 = c__36233__auto___73526;
var G__73529 = cljs.core.count.call(null,c__36233__auto___73526);
var G__73530 = (0);
seq__73507_73515 = G__73527;
chunk__73508_73516 = G__73528;
count__73509_73517 = G__73529;
i__73510_73518 = G__73530;
continue;
} else {
var c_73531 = cljs.core.first.call(null,seq__73507_73525__$1);
dommy.core.prepend_BANG_.call(null,parent,c_73531);

var G__73532 = cljs.core.next.call(null,seq__73507_73525__$1);
var G__73533 = null;
var G__73534 = (0);
var G__73535 = (0);
seq__73507_73515 = G__73532;
chunk__73508_73516 = G__73533;
count__73509_73517 = G__73534;
i__73510_73518 = G__73535;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq73501){
var G__73502 = cljs.core.first.call(null,seq73501);
var seq73501__$1 = cljs.core.next.call(null,seq73501);
var G__73503 = cljs.core.first.call(null,seq73501__$1);
var seq73501__$2 = cljs.core.next.call(null,seq73501__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__73502,G__73503,seq73501__$2);
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
var temp__4655__auto___73536 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___73536)){
var next_73537 = temp__4655__auto___73536;
dommy.core.insert_before_BANG_.call(null,elem,next_73537);
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
var args73538 = [];
var len__36491__auto___73542 = arguments.length;
var i__36492__auto___73543 = (0);
while(true){
if((i__36492__auto___73543 < len__36491__auto___73542)){
args73538.push((arguments[i__36492__auto___73543]));

var G__73544 = (i__36492__auto___73543 + (1));
i__36492__auto___73543 = G__73544;
continue;
} else {
}
break;
}

var G__73540 = args73538.length;
switch (G__73540) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73538.length)].join('')));

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
var G__73541 = p;
G__73541.removeChild(elem);

return G__73541;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__73546){
var vec__73547 = p__73546;
var special_mouse_event = cljs.core.nth.call(null,vec__73547,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__73547,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__73547,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__73547,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__35422__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__35410__auto__ = related_target;
if(cljs.core.truth_(and__35410__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__35410__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__73547,special_mouse_event,real_mouse_event))
});})(vec__73547,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__35410__auto__ = selected_target;
if(cljs.core.truth_(and__35410__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__35410__auto__;
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
var or__35422__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__36498__auto__ = [];
var len__36491__auto___73551 = arguments.length;
var i__36492__auto___73552 = (0);
while(true){
if((i__36492__auto___73552 < len__36491__auto___73551)){
args__36498__auto__.push((arguments[i__36492__auto___73552]));

var G__73553 = (i__36492__auto___73552 + (1));
i__36492__auto___73552 = G__73553;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((2) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36499__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq73548){
var G__73549 = cljs.core.first.call(null,seq73548);
var seq73548__$1 = cljs.core.next.call(null,seq73548);
var G__73550 = cljs.core.first.call(null,seq73548__$1);
var seq73548__$2 = cljs.core.next.call(null,seq73548__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__73549,G__73550,seq73548__$2);
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
var args__36498__auto__ = [];
var len__36491__auto___73579 = arguments.length;
var i__36492__auto___73580 = (0);
while(true){
if((i__36492__auto___73580 < len__36491__auto___73579)){
args__36498__auto__.push((arguments[i__36492__auto___73580]));

var G__73581 = (i__36492__auto___73580 + (1));
i__36492__auto___73580 = G__73581;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__73556_73582 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_73583 = cljs.core.nth.call(null,vec__73556_73582,(0),null);
var selector_73584 = cljs.core.nth.call(null,vec__73556_73582,(1),null);
var seq__73557_73585 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__73564_73586 = null;
var count__73565_73587 = (0);
var i__73566_73588 = (0);
while(true){
if((i__73566_73588 < count__73565_73587)){
var vec__73573_73589 = cljs.core._nth.call(null,chunk__73564_73586,i__73566_73588);
var orig_type_73590 = cljs.core.nth.call(null,vec__73573_73589,(0),null);
var f_73591 = cljs.core.nth.call(null,vec__73573_73589,(1),null);
var seq__73567_73592 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_73590,cljs.core.PersistentArrayMap.fromArray([orig_type_73590,cljs.core.identity], true, false)));
var chunk__73569_73593 = null;
var count__73570_73594 = (0);
var i__73571_73595 = (0);
while(true){
if((i__73571_73595 < count__73570_73594)){
var vec__73574_73596 = cljs.core._nth.call(null,chunk__73569_73593,i__73571_73595);
var actual_type_73597 = cljs.core.nth.call(null,vec__73574_73596,(0),null);
var factory_73598 = cljs.core.nth.call(null,vec__73574_73596,(1),null);
var canonical_f_73599 = (cljs.core.truth_(selector_73584)?cljs.core.partial.call(null,dommy.core.live_listener,elem_73583,selector_73584):cljs.core.identity).call(null,factory_73598.call(null,f_73591));
dommy.core.update_event_listeners_BANG_.call(null,elem_73583,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_73584,actual_type_73597,f_73591], null),canonical_f_73599);

if(cljs.core.truth_(elem_73583.addEventListener)){
elem_73583.addEventListener(cljs.core.name.call(null,actual_type_73597),canonical_f_73599);
} else {
elem_73583.attachEvent(cljs.core.name.call(null,actual_type_73597),canonical_f_73599);
}

var G__73600 = seq__73567_73592;
var G__73601 = chunk__73569_73593;
var G__73602 = count__73570_73594;
var G__73603 = (i__73571_73595 + (1));
seq__73567_73592 = G__73600;
chunk__73569_73593 = G__73601;
count__73570_73594 = G__73602;
i__73571_73595 = G__73603;
continue;
} else {
var temp__4657__auto___73604 = cljs.core.seq.call(null,seq__73567_73592);
if(temp__4657__auto___73604){
var seq__73567_73605__$1 = temp__4657__auto___73604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73567_73605__$1)){
var c__36233__auto___73606 = cljs.core.chunk_first.call(null,seq__73567_73605__$1);
var G__73607 = cljs.core.chunk_rest.call(null,seq__73567_73605__$1);
var G__73608 = c__36233__auto___73606;
var G__73609 = cljs.core.count.call(null,c__36233__auto___73606);
var G__73610 = (0);
seq__73567_73592 = G__73607;
chunk__73569_73593 = G__73608;
count__73570_73594 = G__73609;
i__73571_73595 = G__73610;
continue;
} else {
var vec__73575_73611 = cljs.core.first.call(null,seq__73567_73605__$1);
var actual_type_73612 = cljs.core.nth.call(null,vec__73575_73611,(0),null);
var factory_73613 = cljs.core.nth.call(null,vec__73575_73611,(1),null);
var canonical_f_73614 = (cljs.core.truth_(selector_73584)?cljs.core.partial.call(null,dommy.core.live_listener,elem_73583,selector_73584):cljs.core.identity).call(null,factory_73613.call(null,f_73591));
dommy.core.update_event_listeners_BANG_.call(null,elem_73583,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_73584,actual_type_73612,f_73591], null),canonical_f_73614);

if(cljs.core.truth_(elem_73583.addEventListener)){
elem_73583.addEventListener(cljs.core.name.call(null,actual_type_73612),canonical_f_73614);
} else {
elem_73583.attachEvent(cljs.core.name.call(null,actual_type_73612),canonical_f_73614);
}

var G__73615 = cljs.core.next.call(null,seq__73567_73605__$1);
var G__73616 = null;
var G__73617 = (0);
var G__73618 = (0);
seq__73567_73592 = G__73615;
chunk__73569_73593 = G__73616;
count__73570_73594 = G__73617;
i__73571_73595 = G__73618;
continue;
}
} else {
}
}
break;
}

var G__73619 = seq__73557_73585;
var G__73620 = chunk__73564_73586;
var G__73621 = count__73565_73587;
var G__73622 = (i__73566_73588 + (1));
seq__73557_73585 = G__73619;
chunk__73564_73586 = G__73620;
count__73565_73587 = G__73621;
i__73566_73588 = G__73622;
continue;
} else {
var temp__4657__auto___73623 = cljs.core.seq.call(null,seq__73557_73585);
if(temp__4657__auto___73623){
var seq__73557_73624__$1 = temp__4657__auto___73623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73557_73624__$1)){
var c__36233__auto___73625 = cljs.core.chunk_first.call(null,seq__73557_73624__$1);
var G__73626 = cljs.core.chunk_rest.call(null,seq__73557_73624__$1);
var G__73627 = c__36233__auto___73625;
var G__73628 = cljs.core.count.call(null,c__36233__auto___73625);
var G__73629 = (0);
seq__73557_73585 = G__73626;
chunk__73564_73586 = G__73627;
count__73565_73587 = G__73628;
i__73566_73588 = G__73629;
continue;
} else {
var vec__73576_73630 = cljs.core.first.call(null,seq__73557_73624__$1);
var orig_type_73631 = cljs.core.nth.call(null,vec__73576_73630,(0),null);
var f_73632 = cljs.core.nth.call(null,vec__73576_73630,(1),null);
var seq__73558_73633 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_73631,cljs.core.PersistentArrayMap.fromArray([orig_type_73631,cljs.core.identity], true, false)));
var chunk__73560_73634 = null;
var count__73561_73635 = (0);
var i__73562_73636 = (0);
while(true){
if((i__73562_73636 < count__73561_73635)){
var vec__73577_73637 = cljs.core._nth.call(null,chunk__73560_73634,i__73562_73636);
var actual_type_73638 = cljs.core.nth.call(null,vec__73577_73637,(0),null);
var factory_73639 = cljs.core.nth.call(null,vec__73577_73637,(1),null);
var canonical_f_73640 = (cljs.core.truth_(selector_73584)?cljs.core.partial.call(null,dommy.core.live_listener,elem_73583,selector_73584):cljs.core.identity).call(null,factory_73639.call(null,f_73632));
dommy.core.update_event_listeners_BANG_.call(null,elem_73583,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_73584,actual_type_73638,f_73632], null),canonical_f_73640);

if(cljs.core.truth_(elem_73583.addEventListener)){
elem_73583.addEventListener(cljs.core.name.call(null,actual_type_73638),canonical_f_73640);
} else {
elem_73583.attachEvent(cljs.core.name.call(null,actual_type_73638),canonical_f_73640);
}

var G__73641 = seq__73558_73633;
var G__73642 = chunk__73560_73634;
var G__73643 = count__73561_73635;
var G__73644 = (i__73562_73636 + (1));
seq__73558_73633 = G__73641;
chunk__73560_73634 = G__73642;
count__73561_73635 = G__73643;
i__73562_73636 = G__73644;
continue;
} else {
var temp__4657__auto___73645__$1 = cljs.core.seq.call(null,seq__73558_73633);
if(temp__4657__auto___73645__$1){
var seq__73558_73646__$1 = temp__4657__auto___73645__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73558_73646__$1)){
var c__36233__auto___73647 = cljs.core.chunk_first.call(null,seq__73558_73646__$1);
var G__73648 = cljs.core.chunk_rest.call(null,seq__73558_73646__$1);
var G__73649 = c__36233__auto___73647;
var G__73650 = cljs.core.count.call(null,c__36233__auto___73647);
var G__73651 = (0);
seq__73558_73633 = G__73648;
chunk__73560_73634 = G__73649;
count__73561_73635 = G__73650;
i__73562_73636 = G__73651;
continue;
} else {
var vec__73578_73652 = cljs.core.first.call(null,seq__73558_73646__$1);
var actual_type_73653 = cljs.core.nth.call(null,vec__73578_73652,(0),null);
var factory_73654 = cljs.core.nth.call(null,vec__73578_73652,(1),null);
var canonical_f_73655 = (cljs.core.truth_(selector_73584)?cljs.core.partial.call(null,dommy.core.live_listener,elem_73583,selector_73584):cljs.core.identity).call(null,factory_73654.call(null,f_73632));
dommy.core.update_event_listeners_BANG_.call(null,elem_73583,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_73584,actual_type_73653,f_73632], null),canonical_f_73655);

if(cljs.core.truth_(elem_73583.addEventListener)){
elem_73583.addEventListener(cljs.core.name.call(null,actual_type_73653),canonical_f_73655);
} else {
elem_73583.attachEvent(cljs.core.name.call(null,actual_type_73653),canonical_f_73655);
}

var G__73656 = cljs.core.next.call(null,seq__73558_73646__$1);
var G__73657 = null;
var G__73658 = (0);
var G__73659 = (0);
seq__73558_73633 = G__73656;
chunk__73560_73634 = G__73657;
count__73561_73635 = G__73658;
i__73562_73636 = G__73659;
continue;
}
} else {
}
}
break;
}

var G__73660 = cljs.core.next.call(null,seq__73557_73624__$1);
var G__73661 = null;
var G__73662 = (0);
var G__73663 = (0);
seq__73557_73585 = G__73660;
chunk__73564_73586 = G__73661;
count__73565_73587 = G__73662;
i__73566_73588 = G__73663;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq73554){
var G__73555 = cljs.core.first.call(null,seq73554);
var seq73554__$1 = cljs.core.next.call(null,seq73554);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__73555,seq73554__$1);
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
var args__36498__auto__ = [];
var len__36491__auto___73689 = arguments.length;
var i__36492__auto___73690 = (0);
while(true){
if((i__36492__auto___73690 < len__36491__auto___73689)){
args__36498__auto__.push((arguments[i__36492__auto___73690]));

var G__73691 = (i__36492__auto___73690 + (1));
i__36492__auto___73690 = G__73691;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__73666_73692 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_73693 = cljs.core.nth.call(null,vec__73666_73692,(0),null);
var selector_73694 = cljs.core.nth.call(null,vec__73666_73692,(1),null);
var seq__73667_73695 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__73674_73696 = null;
var count__73675_73697 = (0);
var i__73676_73698 = (0);
while(true){
if((i__73676_73698 < count__73675_73697)){
var vec__73683_73699 = cljs.core._nth.call(null,chunk__73674_73696,i__73676_73698);
var orig_type_73700 = cljs.core.nth.call(null,vec__73683_73699,(0),null);
var f_73701 = cljs.core.nth.call(null,vec__73683_73699,(1),null);
var seq__73677_73702 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_73700,cljs.core.PersistentArrayMap.fromArray([orig_type_73700,cljs.core.identity], true, false)));
var chunk__73679_73703 = null;
var count__73680_73704 = (0);
var i__73681_73705 = (0);
while(true){
if((i__73681_73705 < count__73680_73704)){
var vec__73684_73706 = cljs.core._nth.call(null,chunk__73679_73703,i__73681_73705);
var actual_type_73707 = cljs.core.nth.call(null,vec__73684_73706,(0),null);
var __73708 = cljs.core.nth.call(null,vec__73684_73706,(1),null);
var keys_73709 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_73694,actual_type_73707,f_73701], null);
var canonical_f_73710 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_73693),keys_73709);
dommy.core.update_event_listeners_BANG_.call(null,elem_73693,dommy.utils.dissoc_in,keys_73709);

if(cljs.core.truth_(elem_73693.removeEventListener)){
elem_73693.removeEventListener(cljs.core.name.call(null,actual_type_73707),canonical_f_73710);
} else {
elem_73693.detachEvent(cljs.core.name.call(null,actual_type_73707),canonical_f_73710);
}

var G__73711 = seq__73677_73702;
var G__73712 = chunk__73679_73703;
var G__73713 = count__73680_73704;
var G__73714 = (i__73681_73705 + (1));
seq__73677_73702 = G__73711;
chunk__73679_73703 = G__73712;
count__73680_73704 = G__73713;
i__73681_73705 = G__73714;
continue;
} else {
var temp__4657__auto___73715 = cljs.core.seq.call(null,seq__73677_73702);
if(temp__4657__auto___73715){
var seq__73677_73716__$1 = temp__4657__auto___73715;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73677_73716__$1)){
var c__36233__auto___73717 = cljs.core.chunk_first.call(null,seq__73677_73716__$1);
var G__73718 = cljs.core.chunk_rest.call(null,seq__73677_73716__$1);
var G__73719 = c__36233__auto___73717;
var G__73720 = cljs.core.count.call(null,c__36233__auto___73717);
var G__73721 = (0);
seq__73677_73702 = G__73718;
chunk__73679_73703 = G__73719;
count__73680_73704 = G__73720;
i__73681_73705 = G__73721;
continue;
} else {
var vec__73685_73722 = cljs.core.first.call(null,seq__73677_73716__$1);
var actual_type_73723 = cljs.core.nth.call(null,vec__73685_73722,(0),null);
var __73724 = cljs.core.nth.call(null,vec__73685_73722,(1),null);
var keys_73725 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_73694,actual_type_73723,f_73701], null);
var canonical_f_73726 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_73693),keys_73725);
dommy.core.update_event_listeners_BANG_.call(null,elem_73693,dommy.utils.dissoc_in,keys_73725);

if(cljs.core.truth_(elem_73693.removeEventListener)){
elem_73693.removeEventListener(cljs.core.name.call(null,actual_type_73723),canonical_f_73726);
} else {
elem_73693.detachEvent(cljs.core.name.call(null,actual_type_73723),canonical_f_73726);
}

var G__73727 = cljs.core.next.call(null,seq__73677_73716__$1);
var G__73728 = null;
var G__73729 = (0);
var G__73730 = (0);
seq__73677_73702 = G__73727;
chunk__73679_73703 = G__73728;
count__73680_73704 = G__73729;
i__73681_73705 = G__73730;
continue;
}
} else {
}
}
break;
}

var G__73731 = seq__73667_73695;
var G__73732 = chunk__73674_73696;
var G__73733 = count__73675_73697;
var G__73734 = (i__73676_73698 + (1));
seq__73667_73695 = G__73731;
chunk__73674_73696 = G__73732;
count__73675_73697 = G__73733;
i__73676_73698 = G__73734;
continue;
} else {
var temp__4657__auto___73735 = cljs.core.seq.call(null,seq__73667_73695);
if(temp__4657__auto___73735){
var seq__73667_73736__$1 = temp__4657__auto___73735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73667_73736__$1)){
var c__36233__auto___73737 = cljs.core.chunk_first.call(null,seq__73667_73736__$1);
var G__73738 = cljs.core.chunk_rest.call(null,seq__73667_73736__$1);
var G__73739 = c__36233__auto___73737;
var G__73740 = cljs.core.count.call(null,c__36233__auto___73737);
var G__73741 = (0);
seq__73667_73695 = G__73738;
chunk__73674_73696 = G__73739;
count__73675_73697 = G__73740;
i__73676_73698 = G__73741;
continue;
} else {
var vec__73686_73742 = cljs.core.first.call(null,seq__73667_73736__$1);
var orig_type_73743 = cljs.core.nth.call(null,vec__73686_73742,(0),null);
var f_73744 = cljs.core.nth.call(null,vec__73686_73742,(1),null);
var seq__73668_73745 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_73743,cljs.core.PersistentArrayMap.fromArray([orig_type_73743,cljs.core.identity], true, false)));
var chunk__73670_73746 = null;
var count__73671_73747 = (0);
var i__73672_73748 = (0);
while(true){
if((i__73672_73748 < count__73671_73747)){
var vec__73687_73749 = cljs.core._nth.call(null,chunk__73670_73746,i__73672_73748);
var actual_type_73750 = cljs.core.nth.call(null,vec__73687_73749,(0),null);
var __73751 = cljs.core.nth.call(null,vec__73687_73749,(1),null);
var keys_73752 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_73694,actual_type_73750,f_73744], null);
var canonical_f_73753 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_73693),keys_73752);
dommy.core.update_event_listeners_BANG_.call(null,elem_73693,dommy.utils.dissoc_in,keys_73752);

if(cljs.core.truth_(elem_73693.removeEventListener)){
elem_73693.removeEventListener(cljs.core.name.call(null,actual_type_73750),canonical_f_73753);
} else {
elem_73693.detachEvent(cljs.core.name.call(null,actual_type_73750),canonical_f_73753);
}

var G__73754 = seq__73668_73745;
var G__73755 = chunk__73670_73746;
var G__73756 = count__73671_73747;
var G__73757 = (i__73672_73748 + (1));
seq__73668_73745 = G__73754;
chunk__73670_73746 = G__73755;
count__73671_73747 = G__73756;
i__73672_73748 = G__73757;
continue;
} else {
var temp__4657__auto___73758__$1 = cljs.core.seq.call(null,seq__73668_73745);
if(temp__4657__auto___73758__$1){
var seq__73668_73759__$1 = temp__4657__auto___73758__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73668_73759__$1)){
var c__36233__auto___73760 = cljs.core.chunk_first.call(null,seq__73668_73759__$1);
var G__73761 = cljs.core.chunk_rest.call(null,seq__73668_73759__$1);
var G__73762 = c__36233__auto___73760;
var G__73763 = cljs.core.count.call(null,c__36233__auto___73760);
var G__73764 = (0);
seq__73668_73745 = G__73761;
chunk__73670_73746 = G__73762;
count__73671_73747 = G__73763;
i__73672_73748 = G__73764;
continue;
} else {
var vec__73688_73765 = cljs.core.first.call(null,seq__73668_73759__$1);
var actual_type_73766 = cljs.core.nth.call(null,vec__73688_73765,(0),null);
var __73767 = cljs.core.nth.call(null,vec__73688_73765,(1),null);
var keys_73768 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_73694,actual_type_73766,f_73744], null);
var canonical_f_73769 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_73693),keys_73768);
dommy.core.update_event_listeners_BANG_.call(null,elem_73693,dommy.utils.dissoc_in,keys_73768);

if(cljs.core.truth_(elem_73693.removeEventListener)){
elem_73693.removeEventListener(cljs.core.name.call(null,actual_type_73766),canonical_f_73769);
} else {
elem_73693.detachEvent(cljs.core.name.call(null,actual_type_73766),canonical_f_73769);
}

var G__73770 = cljs.core.next.call(null,seq__73668_73759__$1);
var G__73771 = null;
var G__73772 = (0);
var G__73773 = (0);
seq__73668_73745 = G__73770;
chunk__73670_73746 = G__73771;
count__73671_73747 = G__73772;
i__73672_73748 = G__73773;
continue;
}
} else {
}
}
break;
}

var G__73774 = cljs.core.next.call(null,seq__73667_73736__$1);
var G__73775 = null;
var G__73776 = (0);
var G__73777 = (0);
seq__73667_73695 = G__73774;
chunk__73674_73696 = G__73775;
count__73675_73697 = G__73776;
i__73676_73698 = G__73777;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq73664){
var G__73665 = cljs.core.first.call(null,seq73664);
var seq73664__$1 = cljs.core.next.call(null,seq73664);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__73665,seq73664__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__36498__auto__ = [];
var len__36491__auto___73787 = arguments.length;
var i__36492__auto___73788 = (0);
while(true){
if((i__36492__auto___73788 < len__36491__auto___73787)){
args__36498__auto__.push((arguments[i__36492__auto___73788]));

var G__73789 = (i__36492__auto___73788 + (1));
i__36492__auto___73788 = G__73789;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__73780_73790 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_73791 = cljs.core.nth.call(null,vec__73780_73790,(0),null);
var selector_73792 = cljs.core.nth.call(null,vec__73780_73790,(1),null);
var seq__73781_73793 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__73782_73794 = null;
var count__73783_73795 = (0);
var i__73784_73796 = (0);
while(true){
if((i__73784_73796 < count__73783_73795)){
var vec__73785_73797 = cljs.core._nth.call(null,chunk__73782_73794,i__73784_73796);
var type_73798 = cljs.core.nth.call(null,vec__73785_73797,(0),null);
var f_73799 = cljs.core.nth.call(null,vec__73785_73797,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_73798,((function (seq__73781_73793,chunk__73782_73794,count__73783_73795,i__73784_73796,vec__73785_73797,type_73798,f_73799,vec__73780_73790,elem_73791,selector_73792){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_73798,dommy$core$this_fn);

return f_73799.call(null,e);
});})(seq__73781_73793,chunk__73782_73794,count__73783_73795,i__73784_73796,vec__73785_73797,type_73798,f_73799,vec__73780_73790,elem_73791,selector_73792))
);

var G__73800 = seq__73781_73793;
var G__73801 = chunk__73782_73794;
var G__73802 = count__73783_73795;
var G__73803 = (i__73784_73796 + (1));
seq__73781_73793 = G__73800;
chunk__73782_73794 = G__73801;
count__73783_73795 = G__73802;
i__73784_73796 = G__73803;
continue;
} else {
var temp__4657__auto___73804 = cljs.core.seq.call(null,seq__73781_73793);
if(temp__4657__auto___73804){
var seq__73781_73805__$1 = temp__4657__auto___73804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73781_73805__$1)){
var c__36233__auto___73806 = cljs.core.chunk_first.call(null,seq__73781_73805__$1);
var G__73807 = cljs.core.chunk_rest.call(null,seq__73781_73805__$1);
var G__73808 = c__36233__auto___73806;
var G__73809 = cljs.core.count.call(null,c__36233__auto___73806);
var G__73810 = (0);
seq__73781_73793 = G__73807;
chunk__73782_73794 = G__73808;
count__73783_73795 = G__73809;
i__73784_73796 = G__73810;
continue;
} else {
var vec__73786_73811 = cljs.core.first.call(null,seq__73781_73805__$1);
var type_73812 = cljs.core.nth.call(null,vec__73786_73811,(0),null);
var f_73813 = cljs.core.nth.call(null,vec__73786_73811,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_73812,((function (seq__73781_73793,chunk__73782_73794,count__73783_73795,i__73784_73796,vec__73786_73811,type_73812,f_73813,seq__73781_73805__$1,temp__4657__auto___73804,vec__73780_73790,elem_73791,selector_73792){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_73812,dommy$core$this_fn);

return f_73813.call(null,e);
});})(seq__73781_73793,chunk__73782_73794,count__73783_73795,i__73784_73796,vec__73786_73811,type_73812,f_73813,seq__73781_73805__$1,temp__4657__auto___73804,vec__73780_73790,elem_73791,selector_73792))
);

var G__73814 = cljs.core.next.call(null,seq__73781_73805__$1);
var G__73815 = null;
var G__73816 = (0);
var G__73817 = (0);
seq__73781_73793 = G__73814;
chunk__73782_73794 = G__73815;
count__73783_73795 = G__73816;
i__73784_73796 = G__73817;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq73778){
var G__73779 = cljs.core.first.call(null,seq73778);
var seq73778__$1 = cljs.core.next.call(null,seq73778);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__73779,seq73778__$1);
});

//# sourceMappingURL=core.js.map?rel=1459533436817