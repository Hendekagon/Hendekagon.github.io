// Compiled by ClojureScript 1.8.40 {}
goog.provide('hipo.dom');
goog.require('cljs.core');
hipo.dom.create_element = (function hipo$dom$create_element(namespace_uri,tag){
if(cljs.core.truth_(namespace_uri)){
return document.createElementNS(namespace_uri,tag);
} else {
return document.createElement(tag);
}
});
hipo.dom.element_QMARK_ = (function hipo$dom$element_QMARK_(el){
if(cljs.core.truth_(el)){
return ((1) === el.nodeType);
} else {
return null;
}
});
hipo.dom.text_element_QMARK_ = (function hipo$dom$text_element_QMARK_(el){
if(cljs.core.truth_(el)){
return ((3) === el.nodeType);
} else {
return null;
}
});
hipo.dom.child_at = (function hipo$dom$child_at(el,i){
if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,el))){
} else {
throw (new Error("Assert failed: (element? el)"));
}

if(!((i < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? i))"));
}

return (el.childNodes[i]);
});
hipo.dom.children = (function hipo$dom$children(var_args){
var args84904 = [];
var len__26896__auto___84913 = arguments.length;
var i__26897__auto___84914 = (0);
while(true){
if((i__26897__auto___84914 < len__26896__auto___84913)){
args84904.push((arguments[i__26897__auto___84914]));

var G__84915 = (i__26897__auto___84914 + (1));
i__26897__auto___84914 = G__84915;
continue;
} else {
}
break;
}

var G__84912 = args84904.length;
switch (G__84912) {
case 1:
return hipo.dom.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hipo.dom.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args84904.length)].join('')));

}
});

hipo.dom.children.cljs$core$IFn$_invoke$arity$1 = (function (el){
return hipo.dom.children.call(null,el,(0));
});

hipo.dom.children.cljs$core$IFn$_invoke$arity$2 = (function (el,i){
if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,el))){
} else {
throw (new Error("Assert failed: (element? el)"));
}

if(!((i < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? i))"));
}

var fel = el.firstChild;
if(cljs.core.truth_(fel)){
var cel = fel;
var acc = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cel], null);
while(true){
var nel = cel.nextSibling;
if(cljs.core.truth_((function (){var and__25815__auto__ = !(((cljs.core.count.call(null,acc) - (i + (1))) === (0)));
if(and__25815__auto__){
return nel;
} else {
return and__25815__auto__;
}
})())){
var G__84924 = nel;
var G__84925 = cljs.core.conj.call(null,acc,nel);
cel = G__84924;
acc = G__84925;
continue;
} else {
return acc;
}
break;
}
} else {
return null;
}
});

hipo.dom.children.cljs$lang$maxFixedArity = 2;
hipo.dom.replace_BANG_ = (function hipo$dom$replace_BANG_(el,nel){
if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,el))){
} else {
throw (new Error("Assert failed: (element? el)"));
}

if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,nel))){
} else {
throw (new Error("Assert failed: (element? nel)"));
}

if(!((el.parentElement == null))){
} else {
throw (new Error("Assert failed: (not (nil? (.-parentElement el)))"));
}

return el.parentElement.replaceChild(nel,el);
});
hipo.dom.replace_text_BANG_ = (function hipo$dom$replace_text_BANG_(el,s){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.dom.element_QMARK_.call(null,el),typeof s === 'string'], null)], null);

if(cljs.core.truth_(hipo.dom.text_element_QMARK_.call(null,el))){
return el.textContent = s;
} else {
return hipo.dom.replace_BANG_.call(null,el,document.createTextNode(s));
}
});
hipo.dom.clear_BANG_ = (function hipo$dom$clear_BANG_(el){
if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,el))){
} else {
throw (new Error("Assert failed: (element? el)"));
}

return el.innerHTML = "";
});
hipo.dom.remove_trailing_children_BANG_ = (function hipo$dom$remove_trailing_children_BANG_(el,n){
if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,el))){
} else {
throw (new Error("Assert failed: (element? el)"));
}

if(!((n < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var n__26741__auto__ = n;
var _ = (0);
while(true){
if((_ < n__26741__auto__)){
if(typeof el.remove !== 'undefined'){
el.lastChild.remove();
} else {
el.removeChild(el.lastChild);
}

var G__84947 = (_ + (1));
_ = G__84947;
continue;
} else {
return null;
}
break;
}
});
hipo.dom.insert_child_at_BANG_ = (function hipo$dom$insert_child_at_BANG_(el,i,nel){
if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,el))){
} else {
throw (new Error("Assert failed: (element? el)"));
}

if(!((i < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? i))"));
}

if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,nel))){
} else {
throw (new Error("Assert failed: (element? nel)"));
}

return el.insertBefore(nel,hipo.dom.child_at.call(null,el,i));
});
