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
var or__24211__auto__ = elem.textContent;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
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
var args882950 = [];
var len__25269__auto___882953 = arguments.length;
var i__25270__auto___882954 = (0);
while(true){
if((i__25270__auto___882954 < len__25269__auto___882953)){
args882950.push((arguments[i__25270__auto___882954]));

var G__882955 = (i__25270__auto___882954 + (1));
i__25270__auto___882954 = G__882955;
continue;
} else {
}
break;
}

var G__882952 = args882950.length;
switch (G__882952) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args882950.length)].join('')));

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
var args882957 = [];
var len__25269__auto___882960 = arguments.length;
var i__25270__auto___882961 = (0);
while(true){
if((i__25270__auto___882961 < len__25269__auto___882960)){
args882957.push((arguments[i__25270__auto___882961]));

var G__882962 = (i__25270__auto___882961 + (1));
i__25270__auto___882961 = G__882962;
continue;
} else {
}
break;
}

var G__882959 = args882957.length;
switch (G__882959) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args882957.length)].join('')));

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
var args882965 = [];
var len__25269__auto___882968 = arguments.length;
var i__25270__auto___882969 = (0);
while(true){
if((i__25270__auto___882969 < len__25269__auto___882968)){
args882965.push((arguments[i__25270__auto___882969]));

var G__882970 = (i__25270__auto___882969 + (1));
i__25270__auto___882969 = G__882970;
continue;
} else {
}
break;
}

var G__882967 = args882965.length;
switch (G__882967) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args882965.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__882964_SHARP_){
return !((p1__882964_SHARP_ === base));
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
var args__25276__auto__ = [];
var len__25269__auto___882980 = arguments.length;
var i__25270__auto___882981 = (0);
while(true){
if((i__25270__auto___882981 < len__25269__auto___882980)){
args__25276__auto__.push((arguments[i__25270__auto___882981]));

var G__882982 = (i__25270__auto___882981 + (1));
i__25270__auto___882981 = G__882982;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__882974_882983 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__882975_882984 = null;
var count__882976_882985 = (0);
var i__882977_882986 = (0);
while(true){
if((i__882977_882986 < count__882976_882985)){
var vec__882978_882987 = cljs.core._nth.call(null,chunk__882975_882984,i__882977_882986);
var k_882988 = cljs.core.nth.call(null,vec__882978_882987,(0),null);
var v_882989 = cljs.core.nth.call(null,vec__882978_882987,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_882988),v_882989);

var G__882990 = seq__882974_882983;
var G__882991 = chunk__882975_882984;
var G__882992 = count__882976_882985;
var G__882993 = (i__882977_882986 + (1));
seq__882974_882983 = G__882990;
chunk__882975_882984 = G__882991;
count__882976_882985 = G__882992;
i__882977_882986 = G__882993;
continue;
} else {
var temp__4425__auto___882994 = cljs.core.seq.call(null,seq__882974_882983);
if(temp__4425__auto___882994){
var seq__882974_882995__$1 = temp__4425__auto___882994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__882974_882995__$1)){
var c__25014__auto___882996 = cljs.core.chunk_first.call(null,seq__882974_882995__$1);
var G__882997 = cljs.core.chunk_rest.call(null,seq__882974_882995__$1);
var G__882998 = c__25014__auto___882996;
var G__882999 = cljs.core.count.call(null,c__25014__auto___882996);
var G__883000 = (0);
seq__882974_882983 = G__882997;
chunk__882975_882984 = G__882998;
count__882976_882985 = G__882999;
i__882977_882986 = G__883000;
continue;
} else {
var vec__882979_883001 = cljs.core.first.call(null,seq__882974_882995__$1);
var k_883002 = cljs.core.nth.call(null,vec__882979_883001,(0),null);
var v_883003 = cljs.core.nth.call(null,vec__882979_883001,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_883002),v_883003);

var G__883004 = cljs.core.next.call(null,seq__882974_882995__$1);
var G__883005 = null;
var G__883006 = (0);
var G__883007 = (0);
seq__882974_882983 = G__883004;
chunk__882975_882984 = G__883005;
count__882976_882985 = G__883006;
i__882977_882986 = G__883007;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq882972){
var G__882973 = cljs.core.first.call(null,seq882972);
var seq882972__$1 = cljs.core.next.call(null,seq882972);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__882973,seq882972__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__25276__auto__ = [];
var len__25269__auto___883014 = arguments.length;
var i__25270__auto___883015 = (0);
while(true){
if((i__25270__auto___883015 < len__25269__auto___883014)){
args__25276__auto__.push((arguments[i__25270__auto___883015]));

var G__883016 = (i__25270__auto___883015 + (1));
i__25270__auto___883015 = G__883016;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__883010_883017 = cljs.core.seq.call(null,keywords);
var chunk__883011_883018 = null;
var count__883012_883019 = (0);
var i__883013_883020 = (0);
while(true){
if((i__883013_883020 < count__883012_883019)){
var kw_883021 = cljs.core._nth.call(null,chunk__883011_883018,i__883013_883020);
style.removeProperty(dommy.utils.as_str.call(null,kw_883021));

var G__883022 = seq__883010_883017;
var G__883023 = chunk__883011_883018;
var G__883024 = count__883012_883019;
var G__883025 = (i__883013_883020 + (1));
seq__883010_883017 = G__883022;
chunk__883011_883018 = G__883023;
count__883012_883019 = G__883024;
i__883013_883020 = G__883025;
continue;
} else {
var temp__4425__auto___883026 = cljs.core.seq.call(null,seq__883010_883017);
if(temp__4425__auto___883026){
var seq__883010_883027__$1 = temp__4425__auto___883026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883010_883027__$1)){
var c__25014__auto___883028 = cljs.core.chunk_first.call(null,seq__883010_883027__$1);
var G__883029 = cljs.core.chunk_rest.call(null,seq__883010_883027__$1);
var G__883030 = c__25014__auto___883028;
var G__883031 = cljs.core.count.call(null,c__25014__auto___883028);
var G__883032 = (0);
seq__883010_883017 = G__883029;
chunk__883011_883018 = G__883030;
count__883012_883019 = G__883031;
i__883013_883020 = G__883032;
continue;
} else {
var kw_883033 = cljs.core.first.call(null,seq__883010_883027__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_883033));

var G__883034 = cljs.core.next.call(null,seq__883010_883027__$1);
var G__883035 = null;
var G__883036 = (0);
var G__883037 = (0);
seq__883010_883017 = G__883034;
chunk__883011_883018 = G__883035;
count__883012_883019 = G__883036;
i__883013_883020 = G__883037;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq883008){
var G__883009 = cljs.core.first.call(null,seq883008);
var seq883008__$1 = cljs.core.next.call(null,seq883008);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__883009,seq883008__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__25276__auto__ = [];
var len__25269__auto___883046 = arguments.length;
var i__25270__auto___883047 = (0);
while(true){
if((i__25270__auto___883047 < len__25269__auto___883046)){
args__25276__auto__.push((arguments[i__25270__auto___883047]));

var G__883048 = (i__25270__auto___883047 + (1));
i__25270__auto___883047 = G__883048;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__883040_883049 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__883041_883050 = null;
var count__883042_883051 = (0);
var i__883043_883052 = (0);
while(true){
if((i__883043_883052 < count__883042_883051)){
var vec__883044_883053 = cljs.core._nth.call(null,chunk__883041_883050,i__883043_883052);
var k_883054 = cljs.core.nth.call(null,vec__883044_883053,(0),null);
var v_883055 = cljs.core.nth.call(null,vec__883044_883053,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_883054,[cljs.core.str(v_883055),cljs.core.str("px")].join(''));

var G__883056 = seq__883040_883049;
var G__883057 = chunk__883041_883050;
var G__883058 = count__883042_883051;
var G__883059 = (i__883043_883052 + (1));
seq__883040_883049 = G__883056;
chunk__883041_883050 = G__883057;
count__883042_883051 = G__883058;
i__883043_883052 = G__883059;
continue;
} else {
var temp__4425__auto___883060 = cljs.core.seq.call(null,seq__883040_883049);
if(temp__4425__auto___883060){
var seq__883040_883061__$1 = temp__4425__auto___883060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883040_883061__$1)){
var c__25014__auto___883062 = cljs.core.chunk_first.call(null,seq__883040_883061__$1);
var G__883063 = cljs.core.chunk_rest.call(null,seq__883040_883061__$1);
var G__883064 = c__25014__auto___883062;
var G__883065 = cljs.core.count.call(null,c__25014__auto___883062);
var G__883066 = (0);
seq__883040_883049 = G__883063;
chunk__883041_883050 = G__883064;
count__883042_883051 = G__883065;
i__883043_883052 = G__883066;
continue;
} else {
var vec__883045_883067 = cljs.core.first.call(null,seq__883040_883061__$1);
var k_883068 = cljs.core.nth.call(null,vec__883045_883067,(0),null);
var v_883069 = cljs.core.nth.call(null,vec__883045_883067,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_883068,[cljs.core.str(v_883069),cljs.core.str("px")].join(''));

var G__883070 = cljs.core.next.call(null,seq__883040_883061__$1);
var G__883071 = null;
var G__883072 = (0);
var G__883073 = (0);
seq__883040_883049 = G__883070;
chunk__883041_883050 = G__883071;
count__883042_883051 = G__883072;
i__883043_883052 = G__883073;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq883038){
var G__883039 = cljs.core.first.call(null,seq883038);
var seq883038__$1 = cljs.core.next.call(null,seq883038);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__883039,seq883038__$1);
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
var args883074 = [];
var len__25269__auto___883089 = arguments.length;
var i__25270__auto___883090 = (0);
while(true){
if((i__25270__auto___883090 < len__25269__auto___883089)){
args883074.push((arguments[i__25270__auto___883090]));

var G__883091 = (i__25270__auto___883090 + (1));
i__25270__auto___883090 = G__883091;
continue;
} else {
}
break;
}

var G__883080 = args883074.length;
switch (G__883080) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25288__auto__ = (new cljs.core.IndexedSeq(args883074.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25288__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__883081 = elem;
(G__883081[k__$1] = v);

return G__883081;
} else {
var G__883082 = elem;
G__883082.setAttribute(k__$1,v);

return G__883082;
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

var seq__883083_883093 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__883084_883094 = null;
var count__883085_883095 = (0);
var i__883086_883096 = (0);
while(true){
if((i__883086_883096 < count__883085_883095)){
var vec__883087_883097 = cljs.core._nth.call(null,chunk__883084_883094,i__883086_883096);
var k_883098__$1 = cljs.core.nth.call(null,vec__883087_883097,(0),null);
var v_883099__$1 = cljs.core.nth.call(null,vec__883087_883097,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_883098__$1,v_883099__$1);

var G__883100 = seq__883083_883093;
var G__883101 = chunk__883084_883094;
var G__883102 = count__883085_883095;
var G__883103 = (i__883086_883096 + (1));
seq__883083_883093 = G__883100;
chunk__883084_883094 = G__883101;
count__883085_883095 = G__883102;
i__883086_883096 = G__883103;
continue;
} else {
var temp__4425__auto___883104 = cljs.core.seq.call(null,seq__883083_883093);
if(temp__4425__auto___883104){
var seq__883083_883105__$1 = temp__4425__auto___883104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883083_883105__$1)){
var c__25014__auto___883106 = cljs.core.chunk_first.call(null,seq__883083_883105__$1);
var G__883107 = cljs.core.chunk_rest.call(null,seq__883083_883105__$1);
var G__883108 = c__25014__auto___883106;
var G__883109 = cljs.core.count.call(null,c__25014__auto___883106);
var G__883110 = (0);
seq__883083_883093 = G__883107;
chunk__883084_883094 = G__883108;
count__883085_883095 = G__883109;
i__883086_883096 = G__883110;
continue;
} else {
var vec__883088_883111 = cljs.core.first.call(null,seq__883083_883105__$1);
var k_883112__$1 = cljs.core.nth.call(null,vec__883088_883111,(0),null);
var v_883113__$1 = cljs.core.nth.call(null,vec__883088_883111,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_883112__$1,v_883113__$1);

var G__883114 = cljs.core.next.call(null,seq__883083_883105__$1);
var G__883115 = null;
var G__883116 = (0);
var G__883117 = (0);
seq__883083_883093 = G__883114;
chunk__883084_883094 = G__883115;
count__883085_883095 = G__883116;
i__883086_883096 = G__883117;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq883075){
var G__883076 = cljs.core.first.call(null,seq883075);
var seq883075__$1 = cljs.core.next.call(null,seq883075);
var G__883077 = cljs.core.first.call(null,seq883075__$1);
var seq883075__$2 = cljs.core.next.call(null,seq883075__$1);
var G__883078 = cljs.core.first.call(null,seq883075__$2);
var seq883075__$3 = cljs.core.next.call(null,seq883075__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__883076,G__883077,G__883078,seq883075__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args883118 = [];
var len__25269__auto___883128 = arguments.length;
var i__25270__auto___883129 = (0);
while(true){
if((i__25270__auto___883129 < len__25269__auto___883128)){
args883118.push((arguments[i__25270__auto___883129]));

var G__883130 = (i__25270__auto___883129 + (1));
i__25270__auto___883129 = G__883130;
continue;
} else {
}
break;
}

var G__883123 = args883118.length;
switch (G__883123) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25288__auto__ = (new cljs.core.IndexedSeq(args883118.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25288__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_883132__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_883132__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_883132__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__883124_883133 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__883125_883134 = null;
var count__883126_883135 = (0);
var i__883127_883136 = (0);
while(true){
if((i__883127_883136 < count__883126_883135)){
var k_883137__$1 = cljs.core._nth.call(null,chunk__883125_883134,i__883127_883136);
dommy.core.remove_attr_BANG_.call(null,elem,k_883137__$1);

var G__883138 = seq__883124_883133;
var G__883139 = chunk__883125_883134;
var G__883140 = count__883126_883135;
var G__883141 = (i__883127_883136 + (1));
seq__883124_883133 = G__883138;
chunk__883125_883134 = G__883139;
count__883126_883135 = G__883140;
i__883127_883136 = G__883141;
continue;
} else {
var temp__4425__auto___883142 = cljs.core.seq.call(null,seq__883124_883133);
if(temp__4425__auto___883142){
var seq__883124_883143__$1 = temp__4425__auto___883142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883124_883143__$1)){
var c__25014__auto___883144 = cljs.core.chunk_first.call(null,seq__883124_883143__$1);
var G__883145 = cljs.core.chunk_rest.call(null,seq__883124_883143__$1);
var G__883146 = c__25014__auto___883144;
var G__883147 = cljs.core.count.call(null,c__25014__auto___883144);
var G__883148 = (0);
seq__883124_883133 = G__883145;
chunk__883125_883134 = G__883146;
count__883126_883135 = G__883147;
i__883127_883136 = G__883148;
continue;
} else {
var k_883149__$1 = cljs.core.first.call(null,seq__883124_883143__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_883149__$1);

var G__883150 = cljs.core.next.call(null,seq__883124_883143__$1);
var G__883151 = null;
var G__883152 = (0);
var G__883153 = (0);
seq__883124_883133 = G__883150;
chunk__883125_883134 = G__883151;
count__883126_883135 = G__883152;
i__883127_883136 = G__883153;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq883119){
var G__883120 = cljs.core.first.call(null,seq883119);
var seq883119__$1 = cljs.core.next.call(null,seq883119);
var G__883121 = cljs.core.first.call(null,seq883119__$1);
var seq883119__$2 = cljs.core.next.call(null,seq883119__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__883120,G__883121,seq883119__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args883154 = [];
var len__25269__auto___883157 = arguments.length;
var i__25270__auto___883158 = (0);
while(true){
if((i__25270__auto___883158 < len__25269__auto___883157)){
args883154.push((arguments[i__25270__auto___883158]));

var G__883159 = (i__25270__auto___883158 + (1));
i__25270__auto___883158 = G__883159;
continue;
} else {
}
break;
}

var G__883156 = args883154.length;
switch (G__883156) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args883154.length)].join('')));

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
var args883161 = [];
var len__25269__auto___883179 = arguments.length;
var i__25270__auto___883180 = (0);
while(true){
if((i__25270__auto___883180 < len__25269__auto___883179)){
args883161.push((arguments[i__25270__auto___883180]));

var G__883181 = (i__25270__auto___883180 + (1));
i__25270__auto___883180 = G__883181;
continue;
} else {
}
break;
}

var G__883166 = args883161.length;
switch (G__883166) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25288__auto__ = (new cljs.core.IndexedSeq(args883161.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25288__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4423__auto___883183 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___883183)){
var class_list_883184 = temp__4423__auto___883183;
var seq__883167_883185 = cljs.core.seq.call(null,classes__$1);
var chunk__883168_883186 = null;
var count__883169_883187 = (0);
var i__883170_883188 = (0);
while(true){
if((i__883170_883188 < count__883169_883187)){
var c_883189 = cljs.core._nth.call(null,chunk__883168_883186,i__883170_883188);
class_list_883184.add(c_883189);

var G__883190 = seq__883167_883185;
var G__883191 = chunk__883168_883186;
var G__883192 = count__883169_883187;
var G__883193 = (i__883170_883188 + (1));
seq__883167_883185 = G__883190;
chunk__883168_883186 = G__883191;
count__883169_883187 = G__883192;
i__883170_883188 = G__883193;
continue;
} else {
var temp__4425__auto___883194 = cljs.core.seq.call(null,seq__883167_883185);
if(temp__4425__auto___883194){
var seq__883167_883195__$1 = temp__4425__auto___883194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883167_883195__$1)){
var c__25014__auto___883196 = cljs.core.chunk_first.call(null,seq__883167_883195__$1);
var G__883197 = cljs.core.chunk_rest.call(null,seq__883167_883195__$1);
var G__883198 = c__25014__auto___883196;
var G__883199 = cljs.core.count.call(null,c__25014__auto___883196);
var G__883200 = (0);
seq__883167_883185 = G__883197;
chunk__883168_883186 = G__883198;
count__883169_883187 = G__883199;
i__883170_883188 = G__883200;
continue;
} else {
var c_883201 = cljs.core.first.call(null,seq__883167_883195__$1);
class_list_883184.add(c_883201);

var G__883202 = cljs.core.next.call(null,seq__883167_883195__$1);
var G__883203 = null;
var G__883204 = (0);
var G__883205 = (0);
seq__883167_883185 = G__883202;
chunk__883168_883186 = G__883203;
count__883169_883187 = G__883204;
i__883170_883188 = G__883205;
continue;
}
} else {
}
}
break;
}
} else {
var seq__883171_883206 = cljs.core.seq.call(null,classes__$1);
var chunk__883172_883207 = null;
var count__883173_883208 = (0);
var i__883174_883209 = (0);
while(true){
if((i__883174_883209 < count__883173_883208)){
var c_883210 = cljs.core._nth.call(null,chunk__883172_883207,i__883174_883209);
var class_name_883211 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_883211,c_883210))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_883211 === ""))?c_883210:[cljs.core.str(class_name_883211),cljs.core.str(" "),cljs.core.str(c_883210)].join('')));
}

var G__883212 = seq__883171_883206;
var G__883213 = chunk__883172_883207;
var G__883214 = count__883173_883208;
var G__883215 = (i__883174_883209 + (1));
seq__883171_883206 = G__883212;
chunk__883172_883207 = G__883213;
count__883173_883208 = G__883214;
i__883174_883209 = G__883215;
continue;
} else {
var temp__4425__auto___883216 = cljs.core.seq.call(null,seq__883171_883206);
if(temp__4425__auto___883216){
var seq__883171_883217__$1 = temp__4425__auto___883216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883171_883217__$1)){
var c__25014__auto___883218 = cljs.core.chunk_first.call(null,seq__883171_883217__$1);
var G__883219 = cljs.core.chunk_rest.call(null,seq__883171_883217__$1);
var G__883220 = c__25014__auto___883218;
var G__883221 = cljs.core.count.call(null,c__25014__auto___883218);
var G__883222 = (0);
seq__883171_883206 = G__883219;
chunk__883172_883207 = G__883220;
count__883173_883208 = G__883221;
i__883174_883209 = G__883222;
continue;
} else {
var c_883223 = cljs.core.first.call(null,seq__883171_883217__$1);
var class_name_883224 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_883224,c_883223))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_883224 === ""))?c_883223:[cljs.core.str(class_name_883224),cljs.core.str(" "),cljs.core.str(c_883223)].join('')));
}

var G__883225 = cljs.core.next.call(null,seq__883171_883217__$1);
var G__883226 = null;
var G__883227 = (0);
var G__883228 = (0);
seq__883171_883206 = G__883225;
chunk__883172_883207 = G__883226;
count__883173_883208 = G__883227;
i__883174_883209 = G__883228;
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
var seq__883175_883229 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__883176_883230 = null;
var count__883177_883231 = (0);
var i__883178_883232 = (0);
while(true){
if((i__883178_883232 < count__883177_883231)){
var c_883233 = cljs.core._nth.call(null,chunk__883176_883230,i__883178_883232);
dommy.core.add_class_BANG_.call(null,elem,c_883233);

var G__883234 = seq__883175_883229;
var G__883235 = chunk__883176_883230;
var G__883236 = count__883177_883231;
var G__883237 = (i__883178_883232 + (1));
seq__883175_883229 = G__883234;
chunk__883176_883230 = G__883235;
count__883177_883231 = G__883236;
i__883178_883232 = G__883237;
continue;
} else {
var temp__4425__auto___883238 = cljs.core.seq.call(null,seq__883175_883229);
if(temp__4425__auto___883238){
var seq__883175_883239__$1 = temp__4425__auto___883238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883175_883239__$1)){
var c__25014__auto___883240 = cljs.core.chunk_first.call(null,seq__883175_883239__$1);
var G__883241 = cljs.core.chunk_rest.call(null,seq__883175_883239__$1);
var G__883242 = c__25014__auto___883240;
var G__883243 = cljs.core.count.call(null,c__25014__auto___883240);
var G__883244 = (0);
seq__883175_883229 = G__883241;
chunk__883176_883230 = G__883242;
count__883177_883231 = G__883243;
i__883178_883232 = G__883244;
continue;
} else {
var c_883245 = cljs.core.first.call(null,seq__883175_883239__$1);
dommy.core.add_class_BANG_.call(null,elem,c_883245);

var G__883246 = cljs.core.next.call(null,seq__883175_883239__$1);
var G__883247 = null;
var G__883248 = (0);
var G__883249 = (0);
seq__883175_883229 = G__883246;
chunk__883176_883230 = G__883247;
count__883177_883231 = G__883248;
i__883178_883232 = G__883249;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq883162){
var G__883163 = cljs.core.first.call(null,seq883162);
var seq883162__$1 = cljs.core.next.call(null,seq883162);
var G__883164 = cljs.core.first.call(null,seq883162__$1);
var seq883162__$2 = cljs.core.next.call(null,seq883162__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__883163,G__883164,seq883162__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args883250 = [];
var len__25269__auto___883260 = arguments.length;
var i__25270__auto___883261 = (0);
while(true){
if((i__25270__auto___883261 < len__25269__auto___883260)){
args883250.push((arguments[i__25270__auto___883261]));

var G__883262 = (i__25270__auto___883261 + (1));
i__25270__auto___883261 = G__883262;
continue;
} else {
}
break;
}

var G__883255 = args883250.length;
switch (G__883255) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25288__auto__ = (new cljs.core.IndexedSeq(args883250.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25288__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___883264 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___883264)){
var class_list_883265 = temp__4423__auto___883264;
class_list_883265.remove(c__$1);
} else {
var class_name_883266 = dommy.core.class$.call(null,elem);
var new_class_name_883267 = dommy.utils.remove_class_str.call(null,class_name_883266,c__$1);
if((class_name_883266 === new_class_name_883267)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_883267);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__883256 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__883257 = null;
var count__883258 = (0);
var i__883259 = (0);
while(true){
if((i__883259 < count__883258)){
var c = cljs.core._nth.call(null,chunk__883257,i__883259);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__883268 = seq__883256;
var G__883269 = chunk__883257;
var G__883270 = count__883258;
var G__883271 = (i__883259 + (1));
seq__883256 = G__883268;
chunk__883257 = G__883269;
count__883258 = G__883270;
i__883259 = G__883271;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__883256);
if(temp__4425__auto__){
var seq__883256__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883256__$1)){
var c__25014__auto__ = cljs.core.chunk_first.call(null,seq__883256__$1);
var G__883272 = cljs.core.chunk_rest.call(null,seq__883256__$1);
var G__883273 = c__25014__auto__;
var G__883274 = cljs.core.count.call(null,c__25014__auto__);
var G__883275 = (0);
seq__883256 = G__883272;
chunk__883257 = G__883273;
count__883258 = G__883274;
i__883259 = G__883275;
continue;
} else {
var c = cljs.core.first.call(null,seq__883256__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__883276 = cljs.core.next.call(null,seq__883256__$1);
var G__883277 = null;
var G__883278 = (0);
var G__883279 = (0);
seq__883256 = G__883276;
chunk__883257 = G__883277;
count__883258 = G__883278;
i__883259 = G__883279;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq883251){
var G__883252 = cljs.core.first.call(null,seq883251);
var seq883251__$1 = cljs.core.next.call(null,seq883251);
var G__883253 = cljs.core.first.call(null,seq883251__$1);
var seq883251__$2 = cljs.core.next.call(null,seq883251__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__883252,G__883253,seq883251__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args883280 = [];
var len__25269__auto___883283 = arguments.length;
var i__25270__auto___883284 = (0);
while(true){
if((i__25270__auto___883284 < len__25269__auto___883283)){
args883280.push((arguments[i__25270__auto___883284]));

var G__883285 = (i__25270__auto___883284 + (1));
i__25270__auto___883284 = G__883285;
continue;
} else {
}
break;
}

var G__883282 = args883280.length;
switch (G__883282) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args883280.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___883287 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___883287)){
var class_list_883288 = temp__4423__auto___883287;
class_list_883288.toggle(c__$1);
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
var args883289 = [];
var len__25269__auto___883292 = arguments.length;
var i__25270__auto___883293 = (0);
while(true){
if((i__25270__auto___883293 < len__25269__auto___883292)){
args883289.push((arguments[i__25270__auto___883293]));

var G__883294 = (i__25270__auto___883293 + (1));
i__25270__auto___883293 = G__883294;
continue;
} else {
}
break;
}

var G__883291 = args883289.length;
switch (G__883291) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args883289.length)].join('')));

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
var args883296 = [];
var len__25269__auto___883299 = arguments.length;
var i__25270__auto___883300 = (0);
while(true){
if((i__25270__auto___883300 < len__25269__auto___883299)){
args883296.push((arguments[i__25270__auto___883300]));

var G__883301 = (i__25270__auto___883300 + (1));
i__25270__auto___883300 = G__883301;
continue;
} else {
}
break;
}

var G__883298 = args883296.length;
switch (G__883298) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args883296.length)].join('')));

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
var args883303 = [];
var len__25269__auto___883314 = arguments.length;
var i__25270__auto___883315 = (0);
while(true){
if((i__25270__auto___883315 < len__25269__auto___883314)){
args883303.push((arguments[i__25270__auto___883315]));

var G__883316 = (i__25270__auto___883315 + (1));
i__25270__auto___883315 = G__883316;
continue;
} else {
}
break;
}

var G__883308 = args883303.length;
switch (G__883308) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25288__auto__ = (new cljs.core.IndexedSeq(args883303.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25288__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__883309 = parent;
G__883309.appendChild(child);

return G__883309;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__883310_883318 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__883311_883319 = null;
var count__883312_883320 = (0);
var i__883313_883321 = (0);
while(true){
if((i__883313_883321 < count__883312_883320)){
var c_883322 = cljs.core._nth.call(null,chunk__883311_883319,i__883313_883321);
dommy.core.append_BANG_.call(null,parent,c_883322);

var G__883323 = seq__883310_883318;
var G__883324 = chunk__883311_883319;
var G__883325 = count__883312_883320;
var G__883326 = (i__883313_883321 + (1));
seq__883310_883318 = G__883323;
chunk__883311_883319 = G__883324;
count__883312_883320 = G__883325;
i__883313_883321 = G__883326;
continue;
} else {
var temp__4425__auto___883327 = cljs.core.seq.call(null,seq__883310_883318);
if(temp__4425__auto___883327){
var seq__883310_883328__$1 = temp__4425__auto___883327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883310_883328__$1)){
var c__25014__auto___883329 = cljs.core.chunk_first.call(null,seq__883310_883328__$1);
var G__883330 = cljs.core.chunk_rest.call(null,seq__883310_883328__$1);
var G__883331 = c__25014__auto___883329;
var G__883332 = cljs.core.count.call(null,c__25014__auto___883329);
var G__883333 = (0);
seq__883310_883318 = G__883330;
chunk__883311_883319 = G__883331;
count__883312_883320 = G__883332;
i__883313_883321 = G__883333;
continue;
} else {
var c_883334 = cljs.core.first.call(null,seq__883310_883328__$1);
dommy.core.append_BANG_.call(null,parent,c_883334);

var G__883335 = cljs.core.next.call(null,seq__883310_883328__$1);
var G__883336 = null;
var G__883337 = (0);
var G__883338 = (0);
seq__883310_883318 = G__883335;
chunk__883311_883319 = G__883336;
count__883312_883320 = G__883337;
i__883313_883321 = G__883338;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq883304){
var G__883305 = cljs.core.first.call(null,seq883304);
var seq883304__$1 = cljs.core.next.call(null,seq883304);
var G__883306 = cljs.core.first.call(null,seq883304__$1);
var seq883304__$2 = cljs.core.next.call(null,seq883304__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__883305,G__883306,seq883304__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args883339 = [];
var len__25269__auto___883350 = arguments.length;
var i__25270__auto___883351 = (0);
while(true){
if((i__25270__auto___883351 < len__25269__auto___883350)){
args883339.push((arguments[i__25270__auto___883351]));

var G__883352 = (i__25270__auto___883351 + (1));
i__25270__auto___883351 = G__883352;
continue;
} else {
}
break;
}

var G__883344 = args883339.length;
switch (G__883344) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25288__auto__ = (new cljs.core.IndexedSeq(args883339.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25288__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__883345 = parent;
G__883345.insertBefore(child,parent.firstChild);

return G__883345;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__883346_883354 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__883347_883355 = null;
var count__883348_883356 = (0);
var i__883349_883357 = (0);
while(true){
if((i__883349_883357 < count__883348_883356)){
var c_883358 = cljs.core._nth.call(null,chunk__883347_883355,i__883349_883357);
dommy.core.prepend_BANG_.call(null,parent,c_883358);

var G__883359 = seq__883346_883354;
var G__883360 = chunk__883347_883355;
var G__883361 = count__883348_883356;
var G__883362 = (i__883349_883357 + (1));
seq__883346_883354 = G__883359;
chunk__883347_883355 = G__883360;
count__883348_883356 = G__883361;
i__883349_883357 = G__883362;
continue;
} else {
var temp__4425__auto___883363 = cljs.core.seq.call(null,seq__883346_883354);
if(temp__4425__auto___883363){
var seq__883346_883364__$1 = temp__4425__auto___883363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883346_883364__$1)){
var c__25014__auto___883365 = cljs.core.chunk_first.call(null,seq__883346_883364__$1);
var G__883366 = cljs.core.chunk_rest.call(null,seq__883346_883364__$1);
var G__883367 = c__25014__auto___883365;
var G__883368 = cljs.core.count.call(null,c__25014__auto___883365);
var G__883369 = (0);
seq__883346_883354 = G__883366;
chunk__883347_883355 = G__883367;
count__883348_883356 = G__883368;
i__883349_883357 = G__883369;
continue;
} else {
var c_883370 = cljs.core.first.call(null,seq__883346_883364__$1);
dommy.core.prepend_BANG_.call(null,parent,c_883370);

var G__883371 = cljs.core.next.call(null,seq__883346_883364__$1);
var G__883372 = null;
var G__883373 = (0);
var G__883374 = (0);
seq__883346_883354 = G__883371;
chunk__883347_883355 = G__883372;
count__883348_883356 = G__883373;
i__883349_883357 = G__883374;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq883340){
var G__883341 = cljs.core.first.call(null,seq883340);
var seq883340__$1 = cljs.core.next.call(null,seq883340);
var G__883342 = cljs.core.first.call(null,seq883340__$1);
var seq883340__$2 = cljs.core.next.call(null,seq883340__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__883341,G__883342,seq883340__$2);
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
var temp__4423__auto___883375 = other.nextSibling;
if(cljs.core.truth_(temp__4423__auto___883375)){
var next_883376 = temp__4423__auto___883375;
dommy.core.insert_before_BANG_.call(null,elem,next_883376);
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
var args883377 = [];
var len__25269__auto___883381 = arguments.length;
var i__25270__auto___883382 = (0);
while(true){
if((i__25270__auto___883382 < len__25269__auto___883381)){
args883377.push((arguments[i__25270__auto___883382]));

var G__883383 = (i__25270__auto___883382 + (1));
i__25270__auto___883382 = G__883383;
continue;
} else {
}
break;
}

var G__883379 = args883377.length;
switch (G__883379) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args883377.length)].join('')));

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
var G__883380 = p;
G__883380.removeChild(elem);

return G__883380;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__883385){
var vec__883386 = p__883385;
var special_mouse_event = cljs.core.nth.call(null,vec__883386,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__883386,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__883386,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__883386,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__24211__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__24199__auto__ = related_target;
if(cljs.core.truth_(and__24199__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__24199__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__883386,special_mouse_event,real_mouse_event))
});})(vec__883386,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__24199__auto__ = selected_target;
if(cljs.core.truth_(and__24199__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__24199__auto__;
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
var or__24211__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__25276__auto__ = [];
var len__25269__auto___883390 = arguments.length;
var i__25270__auto___883391 = (0);
while(true){
if((i__25270__auto___883391 < len__25269__auto___883390)){
args__25276__auto__.push((arguments[i__25270__auto___883391]));

var G__883392 = (i__25270__auto___883391 + (1));
i__25270__auto___883391 = G__883392;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((2) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25277__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq883387){
var G__883388 = cljs.core.first.call(null,seq883387);
var seq883387__$1 = cljs.core.next.call(null,seq883387);
var G__883389 = cljs.core.first.call(null,seq883387__$1);
var seq883387__$2 = cljs.core.next.call(null,seq883387__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__883388,G__883389,seq883387__$2);
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
var args__25276__auto__ = [];
var len__25269__auto___883418 = arguments.length;
var i__25270__auto___883419 = (0);
while(true){
if((i__25270__auto___883419 < len__25269__auto___883418)){
args__25276__auto__.push((arguments[i__25270__auto___883419]));

var G__883420 = (i__25270__auto___883419 + (1));
i__25270__auto___883419 = G__883420;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__883395_883421 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_883422 = cljs.core.nth.call(null,vec__883395_883421,(0),null);
var selector_883423 = cljs.core.nth.call(null,vec__883395_883421,(1),null);
var seq__883396_883424 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__883403_883425 = null;
var count__883404_883426 = (0);
var i__883405_883427 = (0);
while(true){
if((i__883405_883427 < count__883404_883426)){
var vec__883412_883428 = cljs.core._nth.call(null,chunk__883403_883425,i__883405_883427);
var orig_type_883429 = cljs.core.nth.call(null,vec__883412_883428,(0),null);
var f_883430 = cljs.core.nth.call(null,vec__883412_883428,(1),null);
var seq__883406_883431 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_883429,cljs.core.PersistentArrayMap.fromArray([orig_type_883429,cljs.core.identity], true, false)));
var chunk__883408_883432 = null;
var count__883409_883433 = (0);
var i__883410_883434 = (0);
while(true){
if((i__883410_883434 < count__883409_883433)){
var vec__883413_883435 = cljs.core._nth.call(null,chunk__883408_883432,i__883410_883434);
var actual_type_883436 = cljs.core.nth.call(null,vec__883413_883435,(0),null);
var factory_883437 = cljs.core.nth.call(null,vec__883413_883435,(1),null);
var canonical_f_883438 = (cljs.core.truth_(selector_883423)?cljs.core.partial.call(null,dommy.core.live_listener,elem_883422,selector_883423):cljs.core.identity).call(null,factory_883437.call(null,f_883430));
dommy.core.update_event_listeners_BANG_.call(null,elem_883422,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_883423,actual_type_883436,f_883430], null),canonical_f_883438);

if(cljs.core.truth_(elem_883422.addEventListener)){
elem_883422.addEventListener(cljs.core.name.call(null,actual_type_883436),canonical_f_883438);
} else {
elem_883422.attachEvent(cljs.core.name.call(null,actual_type_883436),canonical_f_883438);
}

var G__883439 = seq__883406_883431;
var G__883440 = chunk__883408_883432;
var G__883441 = count__883409_883433;
var G__883442 = (i__883410_883434 + (1));
seq__883406_883431 = G__883439;
chunk__883408_883432 = G__883440;
count__883409_883433 = G__883441;
i__883410_883434 = G__883442;
continue;
} else {
var temp__4425__auto___883443 = cljs.core.seq.call(null,seq__883406_883431);
if(temp__4425__auto___883443){
var seq__883406_883444__$1 = temp__4425__auto___883443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883406_883444__$1)){
var c__25014__auto___883445 = cljs.core.chunk_first.call(null,seq__883406_883444__$1);
var G__883446 = cljs.core.chunk_rest.call(null,seq__883406_883444__$1);
var G__883447 = c__25014__auto___883445;
var G__883448 = cljs.core.count.call(null,c__25014__auto___883445);
var G__883449 = (0);
seq__883406_883431 = G__883446;
chunk__883408_883432 = G__883447;
count__883409_883433 = G__883448;
i__883410_883434 = G__883449;
continue;
} else {
var vec__883414_883450 = cljs.core.first.call(null,seq__883406_883444__$1);
var actual_type_883451 = cljs.core.nth.call(null,vec__883414_883450,(0),null);
var factory_883452 = cljs.core.nth.call(null,vec__883414_883450,(1),null);
var canonical_f_883453 = (cljs.core.truth_(selector_883423)?cljs.core.partial.call(null,dommy.core.live_listener,elem_883422,selector_883423):cljs.core.identity).call(null,factory_883452.call(null,f_883430));
dommy.core.update_event_listeners_BANG_.call(null,elem_883422,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_883423,actual_type_883451,f_883430], null),canonical_f_883453);

if(cljs.core.truth_(elem_883422.addEventListener)){
elem_883422.addEventListener(cljs.core.name.call(null,actual_type_883451),canonical_f_883453);
} else {
elem_883422.attachEvent(cljs.core.name.call(null,actual_type_883451),canonical_f_883453);
}

var G__883454 = cljs.core.next.call(null,seq__883406_883444__$1);
var G__883455 = null;
var G__883456 = (0);
var G__883457 = (0);
seq__883406_883431 = G__883454;
chunk__883408_883432 = G__883455;
count__883409_883433 = G__883456;
i__883410_883434 = G__883457;
continue;
}
} else {
}
}
break;
}

var G__883458 = seq__883396_883424;
var G__883459 = chunk__883403_883425;
var G__883460 = count__883404_883426;
var G__883461 = (i__883405_883427 + (1));
seq__883396_883424 = G__883458;
chunk__883403_883425 = G__883459;
count__883404_883426 = G__883460;
i__883405_883427 = G__883461;
continue;
} else {
var temp__4425__auto___883462 = cljs.core.seq.call(null,seq__883396_883424);
if(temp__4425__auto___883462){
var seq__883396_883463__$1 = temp__4425__auto___883462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883396_883463__$1)){
var c__25014__auto___883464 = cljs.core.chunk_first.call(null,seq__883396_883463__$1);
var G__883465 = cljs.core.chunk_rest.call(null,seq__883396_883463__$1);
var G__883466 = c__25014__auto___883464;
var G__883467 = cljs.core.count.call(null,c__25014__auto___883464);
var G__883468 = (0);
seq__883396_883424 = G__883465;
chunk__883403_883425 = G__883466;
count__883404_883426 = G__883467;
i__883405_883427 = G__883468;
continue;
} else {
var vec__883415_883469 = cljs.core.first.call(null,seq__883396_883463__$1);
var orig_type_883470 = cljs.core.nth.call(null,vec__883415_883469,(0),null);
var f_883471 = cljs.core.nth.call(null,vec__883415_883469,(1),null);
var seq__883397_883472 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_883470,cljs.core.PersistentArrayMap.fromArray([orig_type_883470,cljs.core.identity], true, false)));
var chunk__883399_883473 = null;
var count__883400_883474 = (0);
var i__883401_883475 = (0);
while(true){
if((i__883401_883475 < count__883400_883474)){
var vec__883416_883476 = cljs.core._nth.call(null,chunk__883399_883473,i__883401_883475);
var actual_type_883477 = cljs.core.nth.call(null,vec__883416_883476,(0),null);
var factory_883478 = cljs.core.nth.call(null,vec__883416_883476,(1),null);
var canonical_f_883479 = (cljs.core.truth_(selector_883423)?cljs.core.partial.call(null,dommy.core.live_listener,elem_883422,selector_883423):cljs.core.identity).call(null,factory_883478.call(null,f_883471));
dommy.core.update_event_listeners_BANG_.call(null,elem_883422,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_883423,actual_type_883477,f_883471], null),canonical_f_883479);

if(cljs.core.truth_(elem_883422.addEventListener)){
elem_883422.addEventListener(cljs.core.name.call(null,actual_type_883477),canonical_f_883479);
} else {
elem_883422.attachEvent(cljs.core.name.call(null,actual_type_883477),canonical_f_883479);
}

var G__883480 = seq__883397_883472;
var G__883481 = chunk__883399_883473;
var G__883482 = count__883400_883474;
var G__883483 = (i__883401_883475 + (1));
seq__883397_883472 = G__883480;
chunk__883399_883473 = G__883481;
count__883400_883474 = G__883482;
i__883401_883475 = G__883483;
continue;
} else {
var temp__4425__auto___883484__$1 = cljs.core.seq.call(null,seq__883397_883472);
if(temp__4425__auto___883484__$1){
var seq__883397_883485__$1 = temp__4425__auto___883484__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883397_883485__$1)){
var c__25014__auto___883486 = cljs.core.chunk_first.call(null,seq__883397_883485__$1);
var G__883487 = cljs.core.chunk_rest.call(null,seq__883397_883485__$1);
var G__883488 = c__25014__auto___883486;
var G__883489 = cljs.core.count.call(null,c__25014__auto___883486);
var G__883490 = (0);
seq__883397_883472 = G__883487;
chunk__883399_883473 = G__883488;
count__883400_883474 = G__883489;
i__883401_883475 = G__883490;
continue;
} else {
var vec__883417_883491 = cljs.core.first.call(null,seq__883397_883485__$1);
var actual_type_883492 = cljs.core.nth.call(null,vec__883417_883491,(0),null);
var factory_883493 = cljs.core.nth.call(null,vec__883417_883491,(1),null);
var canonical_f_883494 = (cljs.core.truth_(selector_883423)?cljs.core.partial.call(null,dommy.core.live_listener,elem_883422,selector_883423):cljs.core.identity).call(null,factory_883493.call(null,f_883471));
dommy.core.update_event_listeners_BANG_.call(null,elem_883422,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_883423,actual_type_883492,f_883471], null),canonical_f_883494);

if(cljs.core.truth_(elem_883422.addEventListener)){
elem_883422.addEventListener(cljs.core.name.call(null,actual_type_883492),canonical_f_883494);
} else {
elem_883422.attachEvent(cljs.core.name.call(null,actual_type_883492),canonical_f_883494);
}

var G__883495 = cljs.core.next.call(null,seq__883397_883485__$1);
var G__883496 = null;
var G__883497 = (0);
var G__883498 = (0);
seq__883397_883472 = G__883495;
chunk__883399_883473 = G__883496;
count__883400_883474 = G__883497;
i__883401_883475 = G__883498;
continue;
}
} else {
}
}
break;
}

var G__883499 = cljs.core.next.call(null,seq__883396_883463__$1);
var G__883500 = null;
var G__883501 = (0);
var G__883502 = (0);
seq__883396_883424 = G__883499;
chunk__883403_883425 = G__883500;
count__883404_883426 = G__883501;
i__883405_883427 = G__883502;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq883393){
var G__883394 = cljs.core.first.call(null,seq883393);
var seq883393__$1 = cljs.core.next.call(null,seq883393);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__883394,seq883393__$1);
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
var args__25276__auto__ = [];
var len__25269__auto___883528 = arguments.length;
var i__25270__auto___883529 = (0);
while(true){
if((i__25270__auto___883529 < len__25269__auto___883528)){
args__25276__auto__.push((arguments[i__25270__auto___883529]));

var G__883530 = (i__25270__auto___883529 + (1));
i__25270__auto___883529 = G__883530;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__883505_883531 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_883532 = cljs.core.nth.call(null,vec__883505_883531,(0),null);
var selector_883533 = cljs.core.nth.call(null,vec__883505_883531,(1),null);
var seq__883506_883534 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__883513_883535 = null;
var count__883514_883536 = (0);
var i__883515_883537 = (0);
while(true){
if((i__883515_883537 < count__883514_883536)){
var vec__883522_883538 = cljs.core._nth.call(null,chunk__883513_883535,i__883515_883537);
var orig_type_883539 = cljs.core.nth.call(null,vec__883522_883538,(0),null);
var f_883540 = cljs.core.nth.call(null,vec__883522_883538,(1),null);
var seq__883516_883541 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_883539,cljs.core.PersistentArrayMap.fromArray([orig_type_883539,cljs.core.identity], true, false)));
var chunk__883518_883542 = null;
var count__883519_883543 = (0);
var i__883520_883544 = (0);
while(true){
if((i__883520_883544 < count__883519_883543)){
var vec__883523_883545 = cljs.core._nth.call(null,chunk__883518_883542,i__883520_883544);
var actual_type_883546 = cljs.core.nth.call(null,vec__883523_883545,(0),null);
var __883547 = cljs.core.nth.call(null,vec__883523_883545,(1),null);
var keys_883548 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_883533,actual_type_883546,f_883540], null);
var canonical_f_883549 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_883532),keys_883548);
dommy.core.update_event_listeners_BANG_.call(null,elem_883532,dommy.utils.dissoc_in,keys_883548);

if(cljs.core.truth_(elem_883532.removeEventListener)){
elem_883532.removeEventListener(cljs.core.name.call(null,actual_type_883546),canonical_f_883549);
} else {
elem_883532.detachEvent(cljs.core.name.call(null,actual_type_883546),canonical_f_883549);
}

var G__883550 = seq__883516_883541;
var G__883551 = chunk__883518_883542;
var G__883552 = count__883519_883543;
var G__883553 = (i__883520_883544 + (1));
seq__883516_883541 = G__883550;
chunk__883518_883542 = G__883551;
count__883519_883543 = G__883552;
i__883520_883544 = G__883553;
continue;
} else {
var temp__4425__auto___883554 = cljs.core.seq.call(null,seq__883516_883541);
if(temp__4425__auto___883554){
var seq__883516_883555__$1 = temp__4425__auto___883554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883516_883555__$1)){
var c__25014__auto___883556 = cljs.core.chunk_first.call(null,seq__883516_883555__$1);
var G__883557 = cljs.core.chunk_rest.call(null,seq__883516_883555__$1);
var G__883558 = c__25014__auto___883556;
var G__883559 = cljs.core.count.call(null,c__25014__auto___883556);
var G__883560 = (0);
seq__883516_883541 = G__883557;
chunk__883518_883542 = G__883558;
count__883519_883543 = G__883559;
i__883520_883544 = G__883560;
continue;
} else {
var vec__883524_883561 = cljs.core.first.call(null,seq__883516_883555__$1);
var actual_type_883562 = cljs.core.nth.call(null,vec__883524_883561,(0),null);
var __883563 = cljs.core.nth.call(null,vec__883524_883561,(1),null);
var keys_883564 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_883533,actual_type_883562,f_883540], null);
var canonical_f_883565 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_883532),keys_883564);
dommy.core.update_event_listeners_BANG_.call(null,elem_883532,dommy.utils.dissoc_in,keys_883564);

if(cljs.core.truth_(elem_883532.removeEventListener)){
elem_883532.removeEventListener(cljs.core.name.call(null,actual_type_883562),canonical_f_883565);
} else {
elem_883532.detachEvent(cljs.core.name.call(null,actual_type_883562),canonical_f_883565);
}

var G__883566 = cljs.core.next.call(null,seq__883516_883555__$1);
var G__883567 = null;
var G__883568 = (0);
var G__883569 = (0);
seq__883516_883541 = G__883566;
chunk__883518_883542 = G__883567;
count__883519_883543 = G__883568;
i__883520_883544 = G__883569;
continue;
}
} else {
}
}
break;
}

var G__883570 = seq__883506_883534;
var G__883571 = chunk__883513_883535;
var G__883572 = count__883514_883536;
var G__883573 = (i__883515_883537 + (1));
seq__883506_883534 = G__883570;
chunk__883513_883535 = G__883571;
count__883514_883536 = G__883572;
i__883515_883537 = G__883573;
continue;
} else {
var temp__4425__auto___883574 = cljs.core.seq.call(null,seq__883506_883534);
if(temp__4425__auto___883574){
var seq__883506_883575__$1 = temp__4425__auto___883574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883506_883575__$1)){
var c__25014__auto___883576 = cljs.core.chunk_first.call(null,seq__883506_883575__$1);
var G__883577 = cljs.core.chunk_rest.call(null,seq__883506_883575__$1);
var G__883578 = c__25014__auto___883576;
var G__883579 = cljs.core.count.call(null,c__25014__auto___883576);
var G__883580 = (0);
seq__883506_883534 = G__883577;
chunk__883513_883535 = G__883578;
count__883514_883536 = G__883579;
i__883515_883537 = G__883580;
continue;
} else {
var vec__883525_883581 = cljs.core.first.call(null,seq__883506_883575__$1);
var orig_type_883582 = cljs.core.nth.call(null,vec__883525_883581,(0),null);
var f_883583 = cljs.core.nth.call(null,vec__883525_883581,(1),null);
var seq__883507_883584 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_883582,cljs.core.PersistentArrayMap.fromArray([orig_type_883582,cljs.core.identity], true, false)));
var chunk__883509_883585 = null;
var count__883510_883586 = (0);
var i__883511_883587 = (0);
while(true){
if((i__883511_883587 < count__883510_883586)){
var vec__883526_883588 = cljs.core._nth.call(null,chunk__883509_883585,i__883511_883587);
var actual_type_883589 = cljs.core.nth.call(null,vec__883526_883588,(0),null);
var __883590 = cljs.core.nth.call(null,vec__883526_883588,(1),null);
var keys_883591 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_883533,actual_type_883589,f_883583], null);
var canonical_f_883592 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_883532),keys_883591);
dommy.core.update_event_listeners_BANG_.call(null,elem_883532,dommy.utils.dissoc_in,keys_883591);

if(cljs.core.truth_(elem_883532.removeEventListener)){
elem_883532.removeEventListener(cljs.core.name.call(null,actual_type_883589),canonical_f_883592);
} else {
elem_883532.detachEvent(cljs.core.name.call(null,actual_type_883589),canonical_f_883592);
}

var G__883593 = seq__883507_883584;
var G__883594 = chunk__883509_883585;
var G__883595 = count__883510_883586;
var G__883596 = (i__883511_883587 + (1));
seq__883507_883584 = G__883593;
chunk__883509_883585 = G__883594;
count__883510_883586 = G__883595;
i__883511_883587 = G__883596;
continue;
} else {
var temp__4425__auto___883597__$1 = cljs.core.seq.call(null,seq__883507_883584);
if(temp__4425__auto___883597__$1){
var seq__883507_883598__$1 = temp__4425__auto___883597__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883507_883598__$1)){
var c__25014__auto___883599 = cljs.core.chunk_first.call(null,seq__883507_883598__$1);
var G__883600 = cljs.core.chunk_rest.call(null,seq__883507_883598__$1);
var G__883601 = c__25014__auto___883599;
var G__883602 = cljs.core.count.call(null,c__25014__auto___883599);
var G__883603 = (0);
seq__883507_883584 = G__883600;
chunk__883509_883585 = G__883601;
count__883510_883586 = G__883602;
i__883511_883587 = G__883603;
continue;
} else {
var vec__883527_883604 = cljs.core.first.call(null,seq__883507_883598__$1);
var actual_type_883605 = cljs.core.nth.call(null,vec__883527_883604,(0),null);
var __883606 = cljs.core.nth.call(null,vec__883527_883604,(1),null);
var keys_883607 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_883533,actual_type_883605,f_883583], null);
var canonical_f_883608 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_883532),keys_883607);
dommy.core.update_event_listeners_BANG_.call(null,elem_883532,dommy.utils.dissoc_in,keys_883607);

if(cljs.core.truth_(elem_883532.removeEventListener)){
elem_883532.removeEventListener(cljs.core.name.call(null,actual_type_883605),canonical_f_883608);
} else {
elem_883532.detachEvent(cljs.core.name.call(null,actual_type_883605),canonical_f_883608);
}

var G__883609 = cljs.core.next.call(null,seq__883507_883598__$1);
var G__883610 = null;
var G__883611 = (0);
var G__883612 = (0);
seq__883507_883584 = G__883609;
chunk__883509_883585 = G__883610;
count__883510_883586 = G__883611;
i__883511_883587 = G__883612;
continue;
}
} else {
}
}
break;
}

var G__883613 = cljs.core.next.call(null,seq__883506_883575__$1);
var G__883614 = null;
var G__883615 = (0);
var G__883616 = (0);
seq__883506_883534 = G__883613;
chunk__883513_883535 = G__883614;
count__883514_883536 = G__883615;
i__883515_883537 = G__883616;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq883503){
var G__883504 = cljs.core.first.call(null,seq883503);
var seq883503__$1 = cljs.core.next.call(null,seq883503);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__883504,seq883503__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__25276__auto__ = [];
var len__25269__auto___883626 = arguments.length;
var i__25270__auto___883627 = (0);
while(true){
if((i__25270__auto___883627 < len__25269__auto___883626)){
args__25276__auto__.push((arguments[i__25270__auto___883627]));

var G__883628 = (i__25270__auto___883627 + (1));
i__25270__auto___883627 = G__883628;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__883619_883629 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_883630 = cljs.core.nth.call(null,vec__883619_883629,(0),null);
var selector_883631 = cljs.core.nth.call(null,vec__883619_883629,(1),null);
var seq__883620_883632 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__883621_883633 = null;
var count__883622_883634 = (0);
var i__883623_883635 = (0);
while(true){
if((i__883623_883635 < count__883622_883634)){
var vec__883624_883636 = cljs.core._nth.call(null,chunk__883621_883633,i__883623_883635);
var type_883637 = cljs.core.nth.call(null,vec__883624_883636,(0),null);
var f_883638 = cljs.core.nth.call(null,vec__883624_883636,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_883637,((function (seq__883620_883632,chunk__883621_883633,count__883622_883634,i__883623_883635,vec__883624_883636,type_883637,f_883638,vec__883619_883629,elem_883630,selector_883631){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_883637,dommy$core$this_fn);

return f_883638.call(null,e);
});})(seq__883620_883632,chunk__883621_883633,count__883622_883634,i__883623_883635,vec__883624_883636,type_883637,f_883638,vec__883619_883629,elem_883630,selector_883631))
);

var G__883639 = seq__883620_883632;
var G__883640 = chunk__883621_883633;
var G__883641 = count__883622_883634;
var G__883642 = (i__883623_883635 + (1));
seq__883620_883632 = G__883639;
chunk__883621_883633 = G__883640;
count__883622_883634 = G__883641;
i__883623_883635 = G__883642;
continue;
} else {
var temp__4425__auto___883643 = cljs.core.seq.call(null,seq__883620_883632);
if(temp__4425__auto___883643){
var seq__883620_883644__$1 = temp__4425__auto___883643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__883620_883644__$1)){
var c__25014__auto___883645 = cljs.core.chunk_first.call(null,seq__883620_883644__$1);
var G__883646 = cljs.core.chunk_rest.call(null,seq__883620_883644__$1);
var G__883647 = c__25014__auto___883645;
var G__883648 = cljs.core.count.call(null,c__25014__auto___883645);
var G__883649 = (0);
seq__883620_883632 = G__883646;
chunk__883621_883633 = G__883647;
count__883622_883634 = G__883648;
i__883623_883635 = G__883649;
continue;
} else {
var vec__883625_883650 = cljs.core.first.call(null,seq__883620_883644__$1);
var type_883651 = cljs.core.nth.call(null,vec__883625_883650,(0),null);
var f_883652 = cljs.core.nth.call(null,vec__883625_883650,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_883651,((function (seq__883620_883632,chunk__883621_883633,count__883622_883634,i__883623_883635,vec__883625_883650,type_883651,f_883652,seq__883620_883644__$1,temp__4425__auto___883643,vec__883619_883629,elem_883630,selector_883631){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_883651,dommy$core$this_fn);

return f_883652.call(null,e);
});})(seq__883620_883632,chunk__883621_883633,count__883622_883634,i__883623_883635,vec__883625_883650,type_883651,f_883652,seq__883620_883644__$1,temp__4425__auto___883643,vec__883619_883629,elem_883630,selector_883631))
);

var G__883653 = cljs.core.next.call(null,seq__883620_883644__$1);
var G__883654 = null;
var G__883655 = (0);
var G__883656 = (0);
seq__883620_883632 = G__883653;
chunk__883621_883633 = G__883654;
count__883622_883634 = G__883655;
i__883623_883635 = G__883656;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq883617){
var G__883618 = cljs.core.first.call(null,seq883617);
var seq883617__$1 = cljs.core.next.call(null,seq883617);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__883618,seq883617__$1);
});

//# sourceMappingURL=core.js.map