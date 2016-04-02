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
var args101856 = [];
var len__36461__auto___101872 = arguments.length;
var i__36462__auto___101874 = (0);
while(true){
if((i__36462__auto___101874 < len__36461__auto___101872)){
args101856.push((arguments[i__36462__auto___101874]));

var G__101877 = (i__36462__auto___101874 + (1));
i__36462__auto___101874 = G__101877;
continue;
} else {
}
break;
}

var G__101865 = args101856.length;
switch (G__101865) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args101856.length)].join('')));

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
var args101948 = [];
var len__36461__auto___101991 = arguments.length;
var i__36462__auto___101992 = (0);
while(true){
if((i__36462__auto___101992 < len__36461__auto___101991)){
args101948.push((arguments[i__36462__auto___101992]));

var G__101993 = (i__36462__auto___101992 + (1));
i__36462__auto___101992 = G__101993;
continue;
} else {
}
break;
}

var G__101969 = args101948.length;
switch (G__101969) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args101948.length)].join('')));

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
var args102013 = [];
var len__36461__auto___102019 = arguments.length;
var i__36462__auto___102020 = (0);
while(true){
if((i__36462__auto___102020 < len__36461__auto___102019)){
args102013.push((arguments[i__36462__auto___102020]));

var G__102022 = (i__36462__auto___102020 + (1));
i__36462__auto___102020 = G__102022;
continue;
} else {
}
break;
}

var G__102018 = args102013.length;
switch (G__102018) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args102013.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__102012_SHARP_){
return !((p1__102012_SHARP_ === base));
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
var len__36461__auto___102038 = arguments.length;
var i__36462__auto___102039 = (0);
while(true){
if((i__36462__auto___102039 < len__36461__auto___102038)){
args__36468__auto__.push((arguments[i__36462__auto___102039]));

var G__102040 = (i__36462__auto___102039 + (1));
i__36462__auto___102039 = G__102040;
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
var seq__102032_102041 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__102033_102042 = null;
var count__102034_102043 = (0);
var i__102035_102044 = (0);
while(true){
if((i__102035_102044 < count__102034_102043)){
var vec__102036_102046 = cljs.core._nth.call(null,chunk__102033_102042,i__102035_102044);
var k_102047 = cljs.core.nth.call(null,vec__102036_102046,(0),null);
var v_102048 = cljs.core.nth.call(null,vec__102036_102046,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_102047),v_102048);

var G__102050 = seq__102032_102041;
var G__102051 = chunk__102033_102042;
var G__102052 = count__102034_102043;
var G__102053 = (i__102035_102044 + (1));
seq__102032_102041 = G__102050;
chunk__102033_102042 = G__102051;
count__102034_102043 = G__102052;
i__102035_102044 = G__102053;
continue;
} else {
var temp__4657__auto___102054 = cljs.core.seq.call(null,seq__102032_102041);
if(temp__4657__auto___102054){
var seq__102032_102058__$1 = temp__4657__auto___102054;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__102032_102058__$1)){
var c__36203__auto___102059 = cljs.core.chunk_first.call(null,seq__102032_102058__$1);
var G__102060 = cljs.core.chunk_rest.call(null,seq__102032_102058__$1);
var G__102061 = c__36203__auto___102059;
var G__102062 = cljs.core.count.call(null,c__36203__auto___102059);
var G__102063 = (0);
seq__102032_102041 = G__102060;
chunk__102033_102042 = G__102061;
count__102034_102043 = G__102062;
i__102035_102044 = G__102063;
continue;
} else {
var vec__102037_102066 = cljs.core.first.call(null,seq__102032_102058__$1);
var k_102067 = cljs.core.nth.call(null,vec__102037_102066,(0),null);
var v_102068 = cljs.core.nth.call(null,vec__102037_102066,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_102067),v_102068);

var G__102069 = cljs.core.next.call(null,seq__102032_102058__$1);
var G__102070 = null;
var G__102071 = (0);
var G__102072 = (0);
seq__102032_102041 = G__102069;
chunk__102033_102042 = G__102070;
count__102034_102043 = G__102071;
i__102035_102044 = G__102072;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq102030){
var G__102031 = cljs.core.first.call(null,seq102030);
var seq102030__$1 = cljs.core.next.call(null,seq102030);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__102031,seq102030__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__36468__auto__ = [];
var len__36461__auto___102080 = arguments.length;
var i__36462__auto___102081 = (0);
while(true){
if((i__36462__auto___102081 < len__36461__auto___102080)){
args__36468__auto__.push((arguments[i__36462__auto___102081]));

var G__102083 = (i__36462__auto___102081 + (1));
i__36462__auto___102081 = G__102083;
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
var seq__102076_102085 = cljs.core.seq.call(null,keywords);
var chunk__102077_102086 = null;
var count__102078_102087 = (0);
var i__102079_102088 = (0);
while(true){
if((i__102079_102088 < count__102078_102087)){
var kw_102089 = cljs.core._nth.call(null,chunk__102077_102086,i__102079_102088);
style.removeProperty(dommy.utils.as_str.call(null,kw_102089));

var G__102090 = seq__102076_102085;
var G__102091 = chunk__102077_102086;
var G__102092 = count__102078_102087;
var G__102093 = (i__102079_102088 + (1));
seq__102076_102085 = G__102090;
chunk__102077_102086 = G__102091;
count__102078_102087 = G__102092;
i__102079_102088 = G__102093;
continue;
} else {
var temp__4657__auto___102094 = cljs.core.seq.call(null,seq__102076_102085);
if(temp__4657__auto___102094){
var seq__102076_102095__$1 = temp__4657__auto___102094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__102076_102095__$1)){
var c__36203__auto___102096 = cljs.core.chunk_first.call(null,seq__102076_102095__$1);
var G__102097 = cljs.core.chunk_rest.call(null,seq__102076_102095__$1);
var G__102098 = c__36203__auto___102096;
var G__102099 = cljs.core.count.call(null,c__36203__auto___102096);
var G__102100 = (0);
seq__102076_102085 = G__102097;
chunk__102077_102086 = G__102098;
count__102078_102087 = G__102099;
i__102079_102088 = G__102100;
continue;
} else {
var kw_102101 = cljs.core.first.call(null,seq__102076_102095__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_102101));

var G__102102 = cljs.core.next.call(null,seq__102076_102095__$1);
var G__102103 = null;
var G__102104 = (0);
var G__102105 = (0);
seq__102076_102085 = G__102102;
chunk__102077_102086 = G__102103;
count__102078_102087 = G__102104;
i__102079_102088 = G__102105;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq102073){
var G__102074 = cljs.core.first.call(null,seq102073);
var seq102073__$1 = cljs.core.next.call(null,seq102073);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__102074,seq102073__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__36468__auto__ = [];
var len__36461__auto___102137 = arguments.length;
var i__36462__auto___102138 = (0);
while(true){
if((i__36462__auto___102138 < len__36461__auto___102137)){
args__36468__auto__.push((arguments[i__36462__auto___102138]));

var G__102141 = (i__36462__auto___102138 + (1));
i__36462__auto___102138 = G__102141;
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

var seq__102120_102149 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__102121_102150 = null;
var count__102122_102151 = (0);
var i__102123_102152 = (0);
while(true){
if((i__102123_102152 < count__102122_102151)){
var vec__102128_102159 = cljs.core._nth.call(null,chunk__102121_102150,i__102123_102152);
var k_102160 = cljs.core.nth.call(null,vec__102128_102159,(0),null);
var v_102161 = cljs.core.nth.call(null,vec__102128_102159,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_102160,[cljs.core.str(v_102161),cljs.core.str("px")].join(''));

var G__102166 = seq__102120_102149;
var G__102167 = chunk__102121_102150;
var G__102168 = count__102122_102151;
var G__102169 = (i__102123_102152 + (1));
seq__102120_102149 = G__102166;
chunk__102121_102150 = G__102167;
count__102122_102151 = G__102168;
i__102123_102152 = G__102169;
continue;
} else {
var temp__4657__auto___102176 = cljs.core.seq.call(null,seq__102120_102149);
if(temp__4657__auto___102176){
var seq__102120_102177__$1 = temp__4657__auto___102176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__102120_102177__$1)){
var c__36203__auto___102178 = cljs.core.chunk_first.call(null,seq__102120_102177__$1);
var G__102179 = cljs.core.chunk_rest.call(null,seq__102120_102177__$1);
var G__102180 = c__36203__auto___102178;
var G__102181 = cljs.core.count.call(null,c__36203__auto___102178);
var G__102182 = (0);
seq__102120_102149 = G__102179;
chunk__102121_102150 = G__102180;
count__102122_102151 = G__102181;
i__102123_102152 = G__102182;
continue;
} else {
var vec__102130_102185 = cljs.core.first.call(null,seq__102120_102177__$1);
var k_102186 = cljs.core.nth.call(null,vec__102130_102185,(0),null);
var v_102187 = cljs.core.nth.call(null,vec__102130_102185,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_102186,[cljs.core.str(v_102187),cljs.core.str("px")].join(''));

var G__102189 = cljs.core.next.call(null,seq__102120_102177__$1);
var G__102190 = null;
var G__102191 = (0);
var G__102192 = (0);
seq__102120_102149 = G__102189;
chunk__102121_102150 = G__102190;
count__102122_102151 = G__102191;
i__102123_102152 = G__102192;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq102112){
var G__102113 = cljs.core.first.call(null,seq102112);
var seq102112__$1 = cljs.core.next.call(null,seq102112);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__102113,seq102112__$1);
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
var args102193 = [];
var len__36461__auto___102217 = arguments.length;
var i__36462__auto___102218 = (0);
while(true){
if((i__36462__auto___102218 < len__36461__auto___102217)){
args102193.push((arguments[i__36462__auto___102218]));

var G__102219 = (i__36462__auto___102218 + (1));
i__36462__auto___102218 = G__102219;
continue;
} else {
}
break;
}

var G__102204 = args102193.length;
switch (G__102204) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__36480__auto__ = (new cljs.core.IndexedSeq(args102193.slice((3)),(0),null));
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
var G__102209 = elem;
(G__102209[k__$1] = v);

return G__102209;
} else {
var G__102210 = elem;
G__102210.setAttribute(k__$1,v);

return G__102210;
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

var seq__102211_102226 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__102212_102227 = null;
var count__102213_102228 = (0);
var i__102214_102229 = (0);
while(true){
if((i__102214_102229 < count__102213_102228)){
var vec__102215_102233 = cljs.core._nth.call(null,chunk__102212_102227,i__102214_102229);
var k_102235__$1 = cljs.core.nth.call(null,vec__102215_102233,(0),null);
var v_102236__$1 = cljs.core.nth.call(null,vec__102215_102233,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_102235__$1,v_102236__$1);

var G__102240 = seq__102211_102226;
var G__102241 = chunk__102212_102227;
var G__102242 = count__102213_102228;
var G__102243 = (i__102214_102229 + (1));
seq__102211_102226 = G__102240;
chunk__102212_102227 = G__102241;
count__102213_102228 = G__102242;
i__102214_102229 = G__102243;
continue;
} else {
var temp__4657__auto___102247 = cljs.core.seq.call(null,seq__102211_102226);
if(temp__4657__auto___102247){
var seq__102211_102249__$1 = temp__4657__auto___102247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__102211_102249__$1)){
var c__36203__auto___102250 = cljs.core.chunk_first.call(null,seq__102211_102249__$1);
var G__102251 = cljs.core.chunk_rest.call(null,seq__102211_102249__$1);
var G__102252 = c__36203__auto___102250;
var G__102253 = cljs.core.count.call(null,c__36203__auto___102250);
var G__102254 = (0);
seq__102211_102226 = G__102251;
chunk__102212_102227 = G__102252;
count__102213_102228 = G__102253;
i__102214_102229 = G__102254;
continue;
} else {
var vec__102216_102257 = cljs.core.first.call(null,seq__102211_102249__$1);
var k_102258__$1 = cljs.core.nth.call(null,vec__102216_102257,(0),null);
var v_102259__$1 = cljs.core.nth.call(null,vec__102216_102257,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_102258__$1,v_102259__$1);

var G__102260 = cljs.core.next.call(null,seq__102211_102249__$1);
var G__102261 = null;
var G__102262 = (0);
var G__102263 = (0);
seq__102211_102226 = G__102260;
chunk__102212_102227 = G__102261;
count__102213_102228 = G__102262;
i__102214_102229 = G__102263;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq102194){
var G__102195 = cljs.core.first.call(null,seq102194);
var seq102194__$1 = cljs.core.next.call(null,seq102194);
var G__102196 = cljs.core.first.call(null,seq102194__$1);
var seq102194__$2 = cljs.core.next.call(null,seq102194__$1);
var G__102197 = cljs.core.first.call(null,seq102194__$2);
var seq102194__$3 = cljs.core.next.call(null,seq102194__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__102195,G__102196,G__102197,seq102194__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args102264 = [];
var len__36461__auto___102287 = arguments.length;
var i__36462__auto___102288 = (0);
while(true){
if((i__36462__auto___102288 < len__36461__auto___102287)){
args102264.push((arguments[i__36462__auto___102288]));

var G__102289 = (i__36462__auto___102288 + (1));
i__36462__auto___102288 = G__102289;
continue;
} else {
}
break;
}

var G__102270 = args102264.length;
switch (G__102270) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36480__auto__ = (new cljs.core.IndexedSeq(args102264.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36480__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_102295__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_102295__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_102295__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__102277_102300 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__102278_102301 = null;
var count__102279_102302 = (0);
var i__102280_102303 = (0);
while(true){
if((i__102280_102303 < count__102279_102302)){
var k_102304__$1 = cljs.core._nth.call(null,chunk__102278_102301,i__102280_102303);
dommy.core.remove_attr_BANG_.call(null,elem,k_102304__$1);

var G__102305 = seq__102277_102300;
var G__102306 = chunk__102278_102301;
var G__102307 = count__102279_102302;
var G__102308 = (i__102280_102303 + (1));
seq__102277_102300 = G__102305;
chunk__102278_102301 = G__102306;
count__102279_102302 = G__102307;
i__102280_102303 = G__102308;
continue;
} else {
var temp__4657__auto___102309 = cljs.core.seq.call(null,seq__102277_102300);
if(temp__4657__auto___102309){
var seq__102277_102314__$1 = temp__4657__auto___102309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__102277_102314__$1)){
var c__36203__auto___102316 = cljs.core.chunk_first.call(null,seq__102277_102314__$1);
var G__102317 = cljs.core.chunk_rest.call(null,seq__102277_102314__$1);
var G__102318 = c__36203__auto___102316;
var G__102319 = cljs.core.count.call(null,c__36203__auto___102316);
var G__102320 = (0);
seq__102277_102300 = G__102317;
chunk__102278_102301 = G__102318;
count__102279_102302 = G__102319;
i__102280_102303 = G__102320;
continue;
} else {
var k_102326__$1 = cljs.core.first.call(null,seq__102277_102314__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_102326__$1);

var G__102328 = cljs.core.next.call(null,seq__102277_102314__$1);
var G__102329 = null;
var G__102330 = (0);
var G__102331 = (0);
seq__102277_102300 = G__102328;
chunk__102278_102301 = G__102329;
count__102279_102302 = G__102330;
i__102280_102303 = G__102331;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq102265){
var G__102266 = cljs.core.first.call(null,seq102265);
var seq102265__$1 = cljs.core.next.call(null,seq102265);
var G__102267 = cljs.core.first.call(null,seq102265__$1);
var seq102265__$2 = cljs.core.next.call(null,seq102265__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__102266,G__102267,seq102265__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args102342 = [];
var len__36461__auto___102350 = arguments.length;
var i__36462__auto___102351 = (0);
while(true){
if((i__36462__auto___102351 < len__36461__auto___102350)){
args102342.push((arguments[i__36462__auto___102351]));

var G__102353 = (i__36462__auto___102351 + (1));
i__36462__auto___102351 = G__102353;
continue;
} else {
}
break;
}

var G__102347 = args102342.length;
switch (G__102347) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args102342.length)].join('')));

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
var args102362 = [];
var len__36461__auto___102419 = arguments.length;
var i__36462__auto___102420 = (0);
while(true){
if((i__36462__auto___102420 < len__36461__auto___102419)){
args102362.push((arguments[i__36462__auto___102420]));

var G__102421 = (i__36462__auto___102420 + (1));
i__36462__auto___102420 = G__102421;
continue;
} else {
}
break;
}

var G__102372 = args102362.length;
switch (G__102372) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36480__auto__ = (new cljs.core.IndexedSeq(args102362.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36480__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___102427 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___102427)){
var class_list_102428 = temp__4655__auto___102427;
var seq__102380_102429 = cljs.core.seq.call(null,classes__$1);
var chunk__102381_102430 = null;
var count__102382_102431 = (0);
var i__102383_102432 = (0);
while(true){
if((i__102383_102432 < count__102382_102431)){
var c_102433 = cljs.core._nth.call(null,chunk__102381_102430,i__102383_102432);
class_list_102428.add(c_102433);

var G__102434 = seq__102380_102429;
var G__102435 = chunk__102381_102430;
var G__102436 = count__102382_102431;
var G__102437 = (i__102383_102432 + (1));
seq__102380_102429 = G__102434;
chunk__102381_102430 = G__102435;
count__102382_102431 = G__102436;
i__102383_102432 = G__102437;
continue;
} else {
var temp__4657__auto___102442 = cljs.core.seq.call(null,seq__102380_102429);
if(temp__4657__auto___102442){
var seq__102380_102444__$1 = temp__4657__auto___102442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__102380_102444__$1)){
var c__36203__auto___102449 = cljs.core.chunk_first.call(null,seq__102380_102444__$1);
var G__102450 = cljs.core.chunk_rest.call(null,seq__102380_102444__$1);
var G__102451 = c__36203__auto___102449;
var G__102452 = cljs.core.count.call(null,c__36203__auto___102449);
var G__102453 = (0);
seq__102380_102429 = G__102450;
chunk__102381_102430 = G__102451;
count__102382_102431 = G__102452;
i__102383_102432 = G__102453;
continue;
} else {
var c_102456 = cljs.core.first.call(null,seq__102380_102444__$1);
class_list_102428.add(c_102456);

var G__102458 = cljs.core.next.call(null,seq__102380_102444__$1);
var G__102459 = null;
var G__102460 = (0);
var G__102461 = (0);
seq__102380_102429 = G__102458;
chunk__102381_102430 = G__102459;
count__102382_102431 = G__102460;
i__102383_102432 = G__102461;
continue;
}
} else {
}
}
break;
}
} else {
var seq__102394_102466 = cljs.core.seq.call(null,classes__$1);
var chunk__102395_102467 = null;
var count__102396_102468 = (0);
var i__102397_102469 = (0);
while(true){
if((i__102397_102469 < count__102396_102468)){
var c_102475 = cljs.core._nth.call(null,chunk__102395_102467,i__102397_102469);
var class_name_102476 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_102476,c_102475))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_102476 === ""))?c_102475:[cljs.core.str(class_name_102476),cljs.core.str(" "),cljs.core.str(c_102475)].join('')));
}

var G__102477 = seq__102394_102466;
var G__102478 = chunk__102395_102467;
var G__102479 = count__102396_102468;
var G__102480 = (i__102397_102469 + (1));
seq__102394_102466 = G__102477;
chunk__102395_102467 = G__102478;
count__102396_102468 = G__102479;
i__102397_102469 = G__102480;
continue;
} else {
var temp__4657__auto___102481 = cljs.core.seq.call(null,seq__102394_102466);
if(temp__4657__auto___102481){
var seq__102394_102482__$1 = temp__4657__auto___102481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__102394_102482__$1)){
var c__36203__auto___102483 = cljs.core.chunk_first.call(null,seq__102394_102482__$1);
var G__102485 = cljs.core.chunk_rest.call(null,seq__102394_102482__$1);
var G__102486 = c__36203__auto___102483;
var G__102487 = cljs.core.count.call(null,c__36203__auto___102483);
var G__102488 = (0);
seq__102394_102466 = G__102485;
chunk__102395_102467 = G__102486;
count__102396_102468 = G__102487;
i__102397_102469 = G__102488;
continue;
} else {
var c_102493 = cljs.core.first.call(null,seq__102394_102482__$1);
var class_name_102494 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_102494,c_102493))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_102494 === ""))?c_102493:[cljs.core.str(class_name_102494),cljs.core.str(" "),cljs.core.str(c_102493)].join('')));
}

var G__102499 = cljs.core.next.call(null,seq__102394_102482__$1);
var G__102500 = null;
var G__102501 = (0);
var G__102502 = (0);
seq__102394_102466 = G__102499;
chunk__102395_102467 = G__102500;
count__102396_102468 = G__102501;
i__102397_102469 = G__102502;
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
var seq__102408_102511 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__102409_102512 = null;
var count__102410_102513 = (0);
var i__102411_102514 = (0);
while(true){
if((i__102411_102514 < count__102410_102513)){
var c_102517 = cljs.core._nth.call(null,chunk__102409_102512,i__102411_102514);
dommy.core.add_class_BANG_.call(null,elem,c_102517);

var G__102518 = seq__102408_102511;
var G__102519 = chunk__102409_102512;
var G__102520 = count__102410_102513;
var G__102521 = (i__102411_102514 + (1));
seq__102408_102511 = G__102518;
chunk__102409_102512 = G__102519;
count__102410_102513 = G__102520;
i__102411_102514 = G__102521;
continue;
} else {
var temp__4657__auto___102523 = cljs.core.seq.call(null,seq__102408_102511);
if(temp__4657__auto___102523){
var seq__102408_102524__$1 = temp__4657__auto___102523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__102408_102524__$1)){
var c__36203__auto___102525 = cljs.core.chunk_first.call(null,seq__102408_102524__$1);
var G__102526 = cljs.core.chunk_rest.call(null,seq__102408_102524__$1);
var G__102527 = c__36203__auto___102525;
var G__102528 = cljs.core.count.call(null,c__36203__auto___102525);
var G__102529 = (0);
seq__102408_102511 = G__102526;
chunk__102409_102512 = G__102527;
count__102410_102513 = G__102528;
i__102411_102514 = G__102529;
continue;
} else {
var c_102536 = cljs.core.first.call(null,seq__102408_102524__$1);
dommy.core.add_class_BANG_.call(null,elem,c_102536);

var G__102538 = cljs.core.next.call(null,seq__102408_102524__$1);
var G__102539 = null;
var G__102540 = (0);
var G__102541 = (0);
seq__102408_102511 = G__102538;
chunk__102409_102512 = G__102539;
count__102410_102513 = G__102540;
i__102411_102514 = G__102541;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq102363){
var G__102364 = cljs.core.first.call(null,seq102363);
var seq102363__$1 = cljs.core.next.call(null,seq102363);
var G__102365 = cljs.core.first.call(null,seq102363__$1);
var seq102363__$2 = cljs.core.next.call(null,seq102363__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__102364,G__102365,seq102363__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args102547 = [];
var len__36461__auto___102565 = arguments.length;
var i__36462__auto___102566 = (0);
while(true){
if((i__36462__auto___102566 < len__36461__auto___102565)){
args102547.push((arguments[i__36462__auto___102566]));

var G__102569 = (i__36462__auto___102566 + (1));
i__36462__auto___102566 = G__102569;
continue;
} else {
}
break;
}

var G__102555 = args102547.length;
switch (G__102555) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36480__auto__ = (new cljs.core.IndexedSeq(args102547.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36480__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___102571 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___102571)){
var class_list_102572 = temp__4655__auto___102571;
class_list_102572.remove(c__$1);
} else {
var class_name_102573 = dommy.core.class$.call(null,elem);
var new_class_name_102574 = dommy.utils.remove_class_str.call(null,class_name_102573,c__$1);
if((class_name_102573 === new_class_name_102574)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_102574);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__102558 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__102559 = null;
var count__102560 = (0);
var i__102561 = (0);
while(true){
if((i__102561 < count__102560)){
var c = cljs.core._nth.call(null,chunk__102559,i__102561);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__102577 = seq__102558;
var G__102578 = chunk__102559;
var G__102579 = count__102560;
var G__102580 = (i__102561 + (1));
seq__102558 = G__102577;
chunk__102559 = G__102578;
count__102560 = G__102579;
i__102561 = G__102580;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__102558);
if(temp__4657__auto__){
var seq__102558__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__102558__$1)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,seq__102558__$1);
var G__102587 = cljs.core.chunk_rest.call(null,seq__102558__$1);
var G__102588 = c__36203__auto__;
var G__102589 = cljs.core.count.call(null,c__36203__auto__);
var G__102590 = (0);
seq__102558 = G__102587;
chunk__102559 = G__102588;
count__102560 = G__102589;
i__102561 = G__102590;
continue;
} else {
var c = cljs.core.first.call(null,seq__102558__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__102600 = cljs.core.next.call(null,seq__102558__$1);
var G__102601 = null;
var G__102602 = (0);
var G__102603 = (0);
seq__102558 = G__102600;
chunk__102559 = G__102601;
count__102560 = G__102602;
i__102561 = G__102603;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq102548){
var G__102549 = cljs.core.first.call(null,seq102548);
var seq102548__$1 = cljs.core.next.call(null,seq102548);
var G__102550 = cljs.core.first.call(null,seq102548__$1);
var seq102548__$2 = cljs.core.next.call(null,seq102548__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__102549,G__102550,seq102548__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args102608 = [];
var len__36461__auto___102615 = arguments.length;
var i__36462__auto___102617 = (0);
while(true){
if((i__36462__auto___102617 < len__36461__auto___102615)){
args102608.push((arguments[i__36462__auto___102617]));

var G__102620 = (i__36462__auto___102617 + (1));
i__36462__auto___102617 = G__102620;
continue;
} else {
}
break;
}

var G__102612 = args102608.length;
switch (G__102612) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args102608.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___102626 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___102626)){
var class_list_102630 = temp__4655__auto___102626;
class_list_102630.toggle(c__$1);
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
var args102632 = [];
var len__36461__auto___102643 = arguments.length;
var i__36462__auto___102644 = (0);
while(true){
if((i__36462__auto___102644 < len__36461__auto___102643)){
args102632.push((arguments[i__36462__auto___102644]));

var G__102645 = (i__36462__auto___102644 + (1));
i__36462__auto___102644 = G__102645;
continue;
} else {
}
break;
}

var G__102637 = args102632.length;
switch (G__102637) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args102632.length)].join('')));

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
var args102651 = [];
var len__36461__auto___102658 = arguments.length;
var i__36462__auto___102659 = (0);
while(true){
if((i__36462__auto___102659 < len__36461__auto___102658)){
args102651.push((arguments[i__36462__auto___102659]));

var G__102660 = (i__36462__auto___102659 + (1));
i__36462__auto___102659 = G__102660;
continue;
} else {
}
break;
}

var G__102657 = args102651.length;
switch (G__102657) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args102651.length)].join('')));

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
var args102668 = [];
var len__36461__auto___102692 = arguments.length;
var i__36462__auto___102693 = (0);
while(true){
if((i__36462__auto___102693 < len__36461__auto___102692)){
args102668.push((arguments[i__36462__auto___102693]));

var G__102694 = (i__36462__auto___102693 + (1));
i__36462__auto___102693 = G__102694;
continue;
} else {
}
break;
}

var G__102676 = args102668.length;
switch (G__102676) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36480__auto__ = (new cljs.core.IndexedSeq(args102668.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36480__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__102687 = parent;
G__102687.appendChild(child);

return G__102687;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__102688_102698 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__102689_102699 = null;
var count__102690_102700 = (0);
var i__102691_102701 = (0);
while(true){
if((i__102691_102701 < count__102690_102700)){
var c_102702 = cljs.core._nth.call(null,chunk__102689_102699,i__102691_102701);
dommy.core.append_BANG_.call(null,parent,c_102702);

var G__102704 = seq__102688_102698;
var G__102705 = chunk__102689_102699;
var G__102706 = count__102690_102700;
var G__102707 = (i__102691_102701 + (1));
seq__102688_102698 = G__102704;
chunk__102689_102699 = G__102705;
count__102690_102700 = G__102706;
i__102691_102701 = G__102707;
continue;
} else {
var temp__4657__auto___102709 = cljs.core.seq.call(null,seq__102688_102698);
if(temp__4657__auto___102709){
var seq__102688_102713__$1 = temp__4657__auto___102709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__102688_102713__$1)){
var c__36203__auto___102714 = cljs.core.chunk_first.call(null,seq__102688_102713__$1);
var G__102718 = cljs.core.chunk_rest.call(null,seq__102688_102713__$1);
var G__102719 = c__36203__auto___102714;
var G__102720 = cljs.core.count.call(null,c__36203__auto___102714);
var G__102721 = (0);
seq__102688_102698 = G__102718;
chunk__102689_102699 = G__102719;
count__102690_102700 = G__102720;
i__102691_102701 = G__102721;
continue;
} else {
var c_102723 = cljs.core.first.call(null,seq__102688_102713__$1);
dommy.core.append_BANG_.call(null,parent,c_102723);

var G__102727 = cljs.core.next.call(null,seq__102688_102713__$1);
var G__102728 = null;
var G__102729 = (0);
var G__102730 = (0);
seq__102688_102698 = G__102727;
chunk__102689_102699 = G__102728;
count__102690_102700 = G__102729;
i__102691_102701 = G__102730;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq102669){
var G__102670 = cljs.core.first.call(null,seq102669);
var seq102669__$1 = cljs.core.next.call(null,seq102669);
var G__102671 = cljs.core.first.call(null,seq102669__$1);
var seq102669__$2 = cljs.core.next.call(null,seq102669__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__102670,G__102671,seq102669__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args102737 = [];
var len__36461__auto___102755 = arguments.length;
var i__36462__auto___102756 = (0);
while(true){
if((i__36462__auto___102756 < len__36461__auto___102755)){
args102737.push((arguments[i__36462__auto___102756]));

var G__102757 = (i__36462__auto___102756 + (1));
i__36462__auto___102756 = G__102757;
continue;
} else {
}
break;
}

var G__102744 = args102737.length;
switch (G__102744) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36480__auto__ = (new cljs.core.IndexedSeq(args102737.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36480__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__102746 = parent;
G__102746.insertBefore(child,parent.firstChild);

return G__102746;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__102747_102759 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__102748_102760 = null;
var count__102749_102761 = (0);
var i__102750_102762 = (0);
while(true){
if((i__102750_102762 < count__102749_102761)){
var c_102763 = cljs.core._nth.call(null,chunk__102748_102760,i__102750_102762);
dommy.core.prepend_BANG_.call(null,parent,c_102763);

var G__102765 = seq__102747_102759;
var G__102766 = chunk__102748_102760;
var G__102767 = count__102749_102761;
var G__102768 = (i__102750_102762 + (1));
seq__102747_102759 = G__102765;
chunk__102748_102760 = G__102766;
count__102749_102761 = G__102767;
i__102750_102762 = G__102768;
continue;
} else {
var temp__4657__auto___102774 = cljs.core.seq.call(null,seq__102747_102759);
if(temp__4657__auto___102774){
var seq__102747_102775__$1 = temp__4657__auto___102774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__102747_102775__$1)){
var c__36203__auto___102777 = cljs.core.chunk_first.call(null,seq__102747_102775__$1);
var G__102778 = cljs.core.chunk_rest.call(null,seq__102747_102775__$1);
var G__102779 = c__36203__auto___102777;
var G__102780 = cljs.core.count.call(null,c__36203__auto___102777);
var G__102781 = (0);
seq__102747_102759 = G__102778;
chunk__102748_102760 = G__102779;
count__102749_102761 = G__102780;
i__102750_102762 = G__102781;
continue;
} else {
var c_102788 = cljs.core.first.call(null,seq__102747_102775__$1);
dommy.core.prepend_BANG_.call(null,parent,c_102788);

var G__102791 = cljs.core.next.call(null,seq__102747_102775__$1);
var G__102792 = null;
var G__102793 = (0);
var G__102794 = (0);
seq__102747_102759 = G__102791;
chunk__102748_102760 = G__102792;
count__102749_102761 = G__102793;
i__102750_102762 = G__102794;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq102738){
var G__102739 = cljs.core.first.call(null,seq102738);
var seq102738__$1 = cljs.core.next.call(null,seq102738);
var G__102740 = cljs.core.first.call(null,seq102738__$1);
var seq102738__$2 = cljs.core.next.call(null,seq102738__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__102739,G__102740,seq102738__$2);
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
var temp__4655__auto___102802 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___102802)){
var next_102803 = temp__4655__auto___102802;
dommy.core.insert_before_BANG_.call(null,elem,next_102803);
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
var args102812 = [];
var len__36461__auto___102823 = arguments.length;
var i__36462__auto___102824 = (0);
while(true){
if((i__36462__auto___102824 < len__36461__auto___102823)){
args102812.push((arguments[i__36462__auto___102824]));

var G__102825 = (i__36462__auto___102824 + (1));
i__36462__auto___102824 = G__102825;
continue;
} else {
}
break;
}

var G__102821 = args102812.length;
switch (G__102821) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args102812.length)].join('')));

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
var G__102822 = p;
G__102822.removeChild(elem);

return G__102822;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__102827){
var vec__102828 = p__102827;
var special_mouse_event = cljs.core.nth.call(null,vec__102828,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__102828,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__102828,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__102828,special_mouse_event,real_mouse_event){
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
;})(vec__102828,special_mouse_event,real_mouse_event))
});})(vec__102828,special_mouse_event,real_mouse_event))
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
var len__36461__auto___102875 = arguments.length;
var i__36462__auto___102876 = (0);
while(true){
if((i__36462__auto___102876 < len__36461__auto___102875)){
args__36468__auto__.push((arguments[i__36462__auto___102876]));

var G__102877 = (i__36462__auto___102876 + (1));
i__36462__auto___102876 = G__102877;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq102869){
var G__102870 = cljs.core.first.call(null,seq102869);
var seq102869__$1 = cljs.core.next.call(null,seq102869);
var G__102871 = cljs.core.first.call(null,seq102869__$1);
var seq102869__$2 = cljs.core.next.call(null,seq102869__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__102870,G__102871,seq102869__$2);
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
var len__36461__auto___102946 = arguments.length;
var i__36462__auto___102947 = (0);
while(true){
if((i__36462__auto___102947 < len__36461__auto___102946)){
args__36468__auto__.push((arguments[i__36462__auto___102947]));

var G__102948 = (i__36462__auto___102947 + (1));
i__36462__auto___102947 = G__102948;
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

var vec__102898_102949 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_102950 = cljs.core.nth.call(null,vec__102898_102949,(0),null);
var selector_102951 = cljs.core.nth.call(null,vec__102898_102949,(1),null);
var seq__102899_102952 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__102906_102953 = null;
var count__102907_102954 = (0);
var i__102908_102955 = (0);
while(true){
if((i__102908_102955 < count__102907_102954)){
var vec__102916_102956 = cljs.core._nth.call(null,chunk__102906_102953,i__102908_102955);
var orig_type_102957 = cljs.core.nth.call(null,vec__102916_102956,(0),null);
var f_102958 = cljs.core.nth.call(null,vec__102916_102956,(1),null);
var seq__102909_102959 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_102957,cljs.core.PersistentArrayMap.fromArray([orig_type_102957,cljs.core.identity], true, false)));
var chunk__102911_102960 = null;
var count__102912_102961 = (0);
var i__102913_102962 = (0);
while(true){
if((i__102913_102962 < count__102912_102961)){
var vec__102920_102963 = cljs.core._nth.call(null,chunk__102911_102960,i__102913_102962);
var actual_type_102964 = cljs.core.nth.call(null,vec__102920_102963,(0),null);
var factory_102965 = cljs.core.nth.call(null,vec__102920_102963,(1),null);
var canonical_f_102966 = (cljs.core.truth_(selector_102951)?cljs.core.partial.call(null,dommy.core.live_listener,elem_102950,selector_102951):cljs.core.identity).call(null,factory_102965.call(null,f_102958));
dommy.core.update_event_listeners_BANG_.call(null,elem_102950,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_102951,actual_type_102964,f_102958], null),canonical_f_102966);

if(cljs.core.truth_(elem_102950.addEventListener)){
elem_102950.addEventListener(cljs.core.name.call(null,actual_type_102964),canonical_f_102966);
} else {
elem_102950.attachEvent(cljs.core.name.call(null,actual_type_102964),canonical_f_102966);
}

var G__102967 = seq__102909_102959;
var G__102968 = chunk__102911_102960;
var G__102969 = count__102912_102961;
var G__102970 = (i__102913_102962 + (1));
seq__102909_102959 = G__102967;
chunk__102911_102960 = G__102968;
count__102912_102961 = G__102969;
i__102913_102962 = G__102970;
continue;
} else {
var temp__4657__auto___102971 = cljs.core.seq.call(null,seq__102909_102959);
if(temp__4657__auto___102971){
var seq__102909_102972__$1 = temp__4657__auto___102971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__102909_102972__$1)){
var c__36203__auto___102973 = cljs.core.chunk_first.call(null,seq__102909_102972__$1);
var G__102974 = cljs.core.chunk_rest.call(null,seq__102909_102972__$1);
var G__102975 = c__36203__auto___102973;
var G__102976 = cljs.core.count.call(null,c__36203__auto___102973);
var G__102977 = (0);
seq__102909_102959 = G__102974;
chunk__102911_102960 = G__102975;
count__102912_102961 = G__102976;
i__102913_102962 = G__102977;
continue;
} else {
var vec__102922_102982 = cljs.core.first.call(null,seq__102909_102972__$1);
var actual_type_102983 = cljs.core.nth.call(null,vec__102922_102982,(0),null);
var factory_102984 = cljs.core.nth.call(null,vec__102922_102982,(1),null);
var canonical_f_102987 = (cljs.core.truth_(selector_102951)?cljs.core.partial.call(null,dommy.core.live_listener,elem_102950,selector_102951):cljs.core.identity).call(null,factory_102984.call(null,f_102958));
dommy.core.update_event_listeners_BANG_.call(null,elem_102950,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_102951,actual_type_102983,f_102958], null),canonical_f_102987);

if(cljs.core.truth_(elem_102950.addEventListener)){
elem_102950.addEventListener(cljs.core.name.call(null,actual_type_102983),canonical_f_102987);
} else {
elem_102950.attachEvent(cljs.core.name.call(null,actual_type_102983),canonical_f_102987);
}

var G__102989 = cljs.core.next.call(null,seq__102909_102972__$1);
var G__102990 = null;
var G__102991 = (0);
var G__102992 = (0);
seq__102909_102959 = G__102989;
chunk__102911_102960 = G__102990;
count__102912_102961 = G__102991;
i__102913_102962 = G__102992;
continue;
}
} else {
}
}
break;
}

var G__102993 = seq__102899_102952;
var G__102994 = chunk__102906_102953;
var G__102995 = count__102907_102954;
var G__102996 = (i__102908_102955 + (1));
seq__102899_102952 = G__102993;
chunk__102906_102953 = G__102994;
count__102907_102954 = G__102995;
i__102908_102955 = G__102996;
continue;
} else {
var temp__4657__auto___102997 = cljs.core.seq.call(null,seq__102899_102952);
if(temp__4657__auto___102997){
var seq__102899_102998__$1 = temp__4657__auto___102997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__102899_102998__$1)){
var c__36203__auto___102999 = cljs.core.chunk_first.call(null,seq__102899_102998__$1);
var G__103000 = cljs.core.chunk_rest.call(null,seq__102899_102998__$1);
var G__103001 = c__36203__auto___102999;
var G__103002 = cljs.core.count.call(null,c__36203__auto___102999);
var G__103003 = (0);
seq__102899_102952 = G__103000;
chunk__102906_102953 = G__103001;
count__102907_102954 = G__103002;
i__102908_102955 = G__103003;
continue;
} else {
var vec__102935_103004 = cljs.core.first.call(null,seq__102899_102998__$1);
var orig_type_103005 = cljs.core.nth.call(null,vec__102935_103004,(0),null);
var f_103006 = cljs.core.nth.call(null,vec__102935_103004,(1),null);
var seq__102900_103011 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_103005,cljs.core.PersistentArrayMap.fromArray([orig_type_103005,cljs.core.identity], true, false)));
var chunk__102902_103012 = null;
var count__102903_103013 = (0);
var i__102904_103014 = (0);
while(true){
if((i__102904_103014 < count__102903_103013)){
var vec__102936_103027 = cljs.core._nth.call(null,chunk__102902_103012,i__102904_103014);
var actual_type_103028 = cljs.core.nth.call(null,vec__102936_103027,(0),null);
var factory_103029 = cljs.core.nth.call(null,vec__102936_103027,(1),null);
var canonical_f_103031 = (cljs.core.truth_(selector_102951)?cljs.core.partial.call(null,dommy.core.live_listener,elem_102950,selector_102951):cljs.core.identity).call(null,factory_103029.call(null,f_103006));
dommy.core.update_event_listeners_BANG_.call(null,elem_102950,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_102951,actual_type_103028,f_103006], null),canonical_f_103031);

if(cljs.core.truth_(elem_102950.addEventListener)){
elem_102950.addEventListener(cljs.core.name.call(null,actual_type_103028),canonical_f_103031);
} else {
elem_102950.attachEvent(cljs.core.name.call(null,actual_type_103028),canonical_f_103031);
}

var G__103034 = seq__102900_103011;
var G__103035 = chunk__102902_103012;
var G__103036 = count__102903_103013;
var G__103037 = (i__102904_103014 + (1));
seq__102900_103011 = G__103034;
chunk__102902_103012 = G__103035;
count__102903_103013 = G__103036;
i__102904_103014 = G__103037;
continue;
} else {
var temp__4657__auto___103040__$1 = cljs.core.seq.call(null,seq__102900_103011);
if(temp__4657__auto___103040__$1){
var seq__102900_103043__$1 = temp__4657__auto___103040__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__102900_103043__$1)){
var c__36203__auto___103044 = cljs.core.chunk_first.call(null,seq__102900_103043__$1);
var G__103053 = cljs.core.chunk_rest.call(null,seq__102900_103043__$1);
var G__103054 = c__36203__auto___103044;
var G__103055 = cljs.core.count.call(null,c__36203__auto___103044);
var G__103056 = (0);
seq__102900_103011 = G__103053;
chunk__102902_103012 = G__103054;
count__102903_103013 = G__103055;
i__102904_103014 = G__103056;
continue;
} else {
var vec__102941_103059 = cljs.core.first.call(null,seq__102900_103043__$1);
var actual_type_103060 = cljs.core.nth.call(null,vec__102941_103059,(0),null);
var factory_103061 = cljs.core.nth.call(null,vec__102941_103059,(1),null);
var canonical_f_103062 = (cljs.core.truth_(selector_102951)?cljs.core.partial.call(null,dommy.core.live_listener,elem_102950,selector_102951):cljs.core.identity).call(null,factory_103061.call(null,f_103006));
dommy.core.update_event_listeners_BANG_.call(null,elem_102950,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_102951,actual_type_103060,f_103006], null),canonical_f_103062);

if(cljs.core.truth_(elem_102950.addEventListener)){
elem_102950.addEventListener(cljs.core.name.call(null,actual_type_103060),canonical_f_103062);
} else {
elem_102950.attachEvent(cljs.core.name.call(null,actual_type_103060),canonical_f_103062);
}

var G__103066 = cljs.core.next.call(null,seq__102900_103043__$1);
var G__103067 = null;
var G__103068 = (0);
var G__103069 = (0);
seq__102900_103011 = G__103066;
chunk__102902_103012 = G__103067;
count__102903_103013 = G__103068;
i__102904_103014 = G__103069;
continue;
}
} else {
}
}
break;
}

var G__103071 = cljs.core.next.call(null,seq__102899_102998__$1);
var G__103072 = null;
var G__103073 = (0);
var G__103074 = (0);
seq__102899_102952 = G__103071;
chunk__102906_102953 = G__103072;
count__102907_102954 = G__103073;
i__102908_102955 = G__103074;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq102887){
var G__102888 = cljs.core.first.call(null,seq102887);
var seq102887__$1 = cljs.core.next.call(null,seq102887);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__102888,seq102887__$1);
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
var len__36461__auto___103112 = arguments.length;
var i__36462__auto___103113 = (0);
while(true){
if((i__36462__auto___103113 < len__36461__auto___103112)){
args__36468__auto__.push((arguments[i__36462__auto___103113]));

var G__103115 = (i__36462__auto___103113 + (1));
i__36462__auto___103113 = G__103115;
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

var vec__103078_103118 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_103119 = cljs.core.nth.call(null,vec__103078_103118,(0),null);
var selector_103120 = cljs.core.nth.call(null,vec__103078_103118,(1),null);
var seq__103079_103121 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__103086_103122 = null;
var count__103087_103123 = (0);
var i__103088_103124 = (0);
while(true){
if((i__103088_103124 < count__103087_103123)){
var vec__103095_103125 = cljs.core._nth.call(null,chunk__103086_103122,i__103088_103124);
var orig_type_103126 = cljs.core.nth.call(null,vec__103095_103125,(0),null);
var f_103127 = cljs.core.nth.call(null,vec__103095_103125,(1),null);
var seq__103089_103128 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_103126,cljs.core.PersistentArrayMap.fromArray([orig_type_103126,cljs.core.identity], true, false)));
var chunk__103091_103129 = null;
var count__103092_103130 = (0);
var i__103093_103131 = (0);
while(true){
if((i__103093_103131 < count__103092_103130)){
var vec__103096_103132 = cljs.core._nth.call(null,chunk__103091_103129,i__103093_103131);
var actual_type_103133 = cljs.core.nth.call(null,vec__103096_103132,(0),null);
var __103134 = cljs.core.nth.call(null,vec__103096_103132,(1),null);
var keys_103135 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_103120,actual_type_103133,f_103127], null);
var canonical_f_103136 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_103119),keys_103135);
dommy.core.update_event_listeners_BANG_.call(null,elem_103119,dommy.utils.dissoc_in,keys_103135);

if(cljs.core.truth_(elem_103119.removeEventListener)){
elem_103119.removeEventListener(cljs.core.name.call(null,actual_type_103133),canonical_f_103136);
} else {
elem_103119.detachEvent(cljs.core.name.call(null,actual_type_103133),canonical_f_103136);
}

var G__103137 = seq__103089_103128;
var G__103138 = chunk__103091_103129;
var G__103139 = count__103092_103130;
var G__103140 = (i__103093_103131 + (1));
seq__103089_103128 = G__103137;
chunk__103091_103129 = G__103138;
count__103092_103130 = G__103139;
i__103093_103131 = G__103140;
continue;
} else {
var temp__4657__auto___103141 = cljs.core.seq.call(null,seq__103089_103128);
if(temp__4657__auto___103141){
var seq__103089_103142__$1 = temp__4657__auto___103141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103089_103142__$1)){
var c__36203__auto___103143 = cljs.core.chunk_first.call(null,seq__103089_103142__$1);
var G__103145 = cljs.core.chunk_rest.call(null,seq__103089_103142__$1);
var G__103146 = c__36203__auto___103143;
var G__103147 = cljs.core.count.call(null,c__36203__auto___103143);
var G__103148 = (0);
seq__103089_103128 = G__103145;
chunk__103091_103129 = G__103146;
count__103092_103130 = G__103147;
i__103093_103131 = G__103148;
continue;
} else {
var vec__103097_103150 = cljs.core.first.call(null,seq__103089_103142__$1);
var actual_type_103151 = cljs.core.nth.call(null,vec__103097_103150,(0),null);
var __103152 = cljs.core.nth.call(null,vec__103097_103150,(1),null);
var keys_103154 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_103120,actual_type_103151,f_103127], null);
var canonical_f_103155 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_103119),keys_103154);
dommy.core.update_event_listeners_BANG_.call(null,elem_103119,dommy.utils.dissoc_in,keys_103154);

if(cljs.core.truth_(elem_103119.removeEventListener)){
elem_103119.removeEventListener(cljs.core.name.call(null,actual_type_103151),canonical_f_103155);
} else {
elem_103119.detachEvent(cljs.core.name.call(null,actual_type_103151),canonical_f_103155);
}

var G__103160 = cljs.core.next.call(null,seq__103089_103142__$1);
var G__103161 = null;
var G__103162 = (0);
var G__103163 = (0);
seq__103089_103128 = G__103160;
chunk__103091_103129 = G__103161;
count__103092_103130 = G__103162;
i__103093_103131 = G__103163;
continue;
}
} else {
}
}
break;
}

var G__103164 = seq__103079_103121;
var G__103165 = chunk__103086_103122;
var G__103166 = count__103087_103123;
var G__103167 = (i__103088_103124 + (1));
seq__103079_103121 = G__103164;
chunk__103086_103122 = G__103165;
count__103087_103123 = G__103166;
i__103088_103124 = G__103167;
continue;
} else {
var temp__4657__auto___103168 = cljs.core.seq.call(null,seq__103079_103121);
if(temp__4657__auto___103168){
var seq__103079_103169__$1 = temp__4657__auto___103168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103079_103169__$1)){
var c__36203__auto___103170 = cljs.core.chunk_first.call(null,seq__103079_103169__$1);
var G__103171 = cljs.core.chunk_rest.call(null,seq__103079_103169__$1);
var G__103172 = c__36203__auto___103170;
var G__103173 = cljs.core.count.call(null,c__36203__auto___103170);
var G__103174 = (0);
seq__103079_103121 = G__103171;
chunk__103086_103122 = G__103172;
count__103087_103123 = G__103173;
i__103088_103124 = G__103174;
continue;
} else {
var vec__103098_103176 = cljs.core.first.call(null,seq__103079_103169__$1);
var orig_type_103177 = cljs.core.nth.call(null,vec__103098_103176,(0),null);
var f_103178 = cljs.core.nth.call(null,vec__103098_103176,(1),null);
var seq__103080_103180 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_103177,cljs.core.PersistentArrayMap.fromArray([orig_type_103177,cljs.core.identity], true, false)));
var chunk__103082_103181 = null;
var count__103083_103182 = (0);
var i__103084_103183 = (0);
while(true){
if((i__103084_103183 < count__103083_103182)){
var vec__103099_103191 = cljs.core._nth.call(null,chunk__103082_103181,i__103084_103183);
var actual_type_103192 = cljs.core.nth.call(null,vec__103099_103191,(0),null);
var __103193 = cljs.core.nth.call(null,vec__103099_103191,(1),null);
var keys_103194 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_103120,actual_type_103192,f_103178], null);
var canonical_f_103195 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_103119),keys_103194);
dommy.core.update_event_listeners_BANG_.call(null,elem_103119,dommy.utils.dissoc_in,keys_103194);

if(cljs.core.truth_(elem_103119.removeEventListener)){
elem_103119.removeEventListener(cljs.core.name.call(null,actual_type_103192),canonical_f_103195);
} else {
elem_103119.detachEvent(cljs.core.name.call(null,actual_type_103192),canonical_f_103195);
}

var G__103207 = seq__103080_103180;
var G__103208 = chunk__103082_103181;
var G__103209 = count__103083_103182;
var G__103210 = (i__103084_103183 + (1));
seq__103080_103180 = G__103207;
chunk__103082_103181 = G__103208;
count__103083_103182 = G__103209;
i__103084_103183 = G__103210;
continue;
} else {
var temp__4657__auto___103215__$1 = cljs.core.seq.call(null,seq__103080_103180);
if(temp__4657__auto___103215__$1){
var seq__103080_103216__$1 = temp__4657__auto___103215__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103080_103216__$1)){
var c__36203__auto___103218 = cljs.core.chunk_first.call(null,seq__103080_103216__$1);
var G__103219 = cljs.core.chunk_rest.call(null,seq__103080_103216__$1);
var G__103220 = c__36203__auto___103218;
var G__103221 = cljs.core.count.call(null,c__36203__auto___103218);
var G__103222 = (0);
seq__103080_103180 = G__103219;
chunk__103082_103181 = G__103220;
count__103083_103182 = G__103221;
i__103084_103183 = G__103222;
continue;
} else {
var vec__103100_103223 = cljs.core.first.call(null,seq__103080_103216__$1);
var actual_type_103224 = cljs.core.nth.call(null,vec__103100_103223,(0),null);
var __103225 = cljs.core.nth.call(null,vec__103100_103223,(1),null);
var keys_103226 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_103120,actual_type_103224,f_103178], null);
var canonical_f_103227 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_103119),keys_103226);
dommy.core.update_event_listeners_BANG_.call(null,elem_103119,dommy.utils.dissoc_in,keys_103226);

if(cljs.core.truth_(elem_103119.removeEventListener)){
elem_103119.removeEventListener(cljs.core.name.call(null,actual_type_103224),canonical_f_103227);
} else {
elem_103119.detachEvent(cljs.core.name.call(null,actual_type_103224),canonical_f_103227);
}

var G__103228 = cljs.core.next.call(null,seq__103080_103216__$1);
var G__103229 = null;
var G__103230 = (0);
var G__103231 = (0);
seq__103080_103180 = G__103228;
chunk__103082_103181 = G__103229;
count__103083_103182 = G__103230;
i__103084_103183 = G__103231;
continue;
}
} else {
}
}
break;
}

var G__103232 = cljs.core.next.call(null,seq__103079_103169__$1);
var G__103233 = null;
var G__103234 = (0);
var G__103235 = (0);
seq__103079_103121 = G__103232;
chunk__103086_103122 = G__103233;
count__103087_103123 = G__103234;
i__103088_103124 = G__103235;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq103075){
var G__103076 = cljs.core.first.call(null,seq103075);
var seq103075__$1 = cljs.core.next.call(null,seq103075);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__103076,seq103075__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__36468__auto__ = [];
var len__36461__auto___103250 = arguments.length;
var i__36462__auto___103251 = (0);
while(true){
if((i__36462__auto___103251 < len__36461__auto___103250)){
args__36468__auto__.push((arguments[i__36462__auto___103251]));

var G__103252 = (i__36462__auto___103251 + (1));
i__36462__auto___103251 = G__103252;
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

var vec__103239_103261 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_103262 = cljs.core.nth.call(null,vec__103239_103261,(0),null);
var selector_103263 = cljs.core.nth.call(null,vec__103239_103261,(1),null);
var seq__103240_103268 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__103241_103269 = null;
var count__103242_103270 = (0);
var i__103243_103271 = (0);
while(true){
if((i__103243_103271 < count__103242_103270)){
var vec__103244_103276 = cljs.core._nth.call(null,chunk__103241_103269,i__103243_103271);
var type_103277 = cljs.core.nth.call(null,vec__103244_103276,(0),null);
var f_103278 = cljs.core.nth.call(null,vec__103244_103276,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_103277,((function (seq__103240_103268,chunk__103241_103269,count__103242_103270,i__103243_103271,vec__103244_103276,type_103277,f_103278,vec__103239_103261,elem_103262,selector_103263){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_103277,dommy$core$this_fn);

return f_103278.call(null,e);
});})(seq__103240_103268,chunk__103241_103269,count__103242_103270,i__103243_103271,vec__103244_103276,type_103277,f_103278,vec__103239_103261,elem_103262,selector_103263))
);

var G__103282 = seq__103240_103268;
var G__103283 = chunk__103241_103269;
var G__103284 = count__103242_103270;
var G__103285 = (i__103243_103271 + (1));
seq__103240_103268 = G__103282;
chunk__103241_103269 = G__103283;
count__103242_103270 = G__103284;
i__103243_103271 = G__103285;
continue;
} else {
var temp__4657__auto___103286 = cljs.core.seq.call(null,seq__103240_103268);
if(temp__4657__auto___103286){
var seq__103240_103287__$1 = temp__4657__auto___103286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103240_103287__$1)){
var c__36203__auto___103288 = cljs.core.chunk_first.call(null,seq__103240_103287__$1);
var G__103289 = cljs.core.chunk_rest.call(null,seq__103240_103287__$1);
var G__103290 = c__36203__auto___103288;
var G__103291 = cljs.core.count.call(null,c__36203__auto___103288);
var G__103292 = (0);
seq__103240_103268 = G__103289;
chunk__103241_103269 = G__103290;
count__103242_103270 = G__103291;
i__103243_103271 = G__103292;
continue;
} else {
var vec__103247_103293 = cljs.core.first.call(null,seq__103240_103287__$1);
var type_103294 = cljs.core.nth.call(null,vec__103247_103293,(0),null);
var f_103295 = cljs.core.nth.call(null,vec__103247_103293,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_103294,((function (seq__103240_103268,chunk__103241_103269,count__103242_103270,i__103243_103271,vec__103247_103293,type_103294,f_103295,seq__103240_103287__$1,temp__4657__auto___103286,vec__103239_103261,elem_103262,selector_103263){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_103294,dommy$core$this_fn);

return f_103295.call(null,e);
});})(seq__103240_103268,chunk__103241_103269,count__103242_103270,i__103243_103271,vec__103247_103293,type_103294,f_103295,seq__103240_103287__$1,temp__4657__auto___103286,vec__103239_103261,elem_103262,selector_103263))
);

var G__103299 = cljs.core.next.call(null,seq__103240_103287__$1);
var G__103300 = null;
var G__103301 = (0);
var G__103302 = (0);
seq__103240_103268 = G__103299;
chunk__103241_103269 = G__103300;
count__103242_103270 = G__103301;
i__103243_103271 = G__103302;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq103236){
var G__103237 = cljs.core.first.call(null,seq103236);
var seq103236__$1 = cljs.core.next.call(null,seq103236);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__103237,seq103236__$1);
});
