// Compiled by ClojureScript 1.7.170 {}
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"element?","element?",-134836339,null),new cljs.core.Symbol(null,"el","el",22330409,null))))].join('')));
}

if(!((i < (0)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol(null,"i","i",253690212,null)))))].join('')));
}

return (el.childNodes[i]);
});
hipo.dom.children = (function hipo$dom$children(var_args){
var args1881367 = [];
var len__25219__auto___1881370 = arguments.length;
var i__25220__auto___1881371 = (0);
while(true){
if((i__25220__auto___1881371 < len__25219__auto___1881370)){
args1881367.push((arguments[i__25220__auto___1881371]));

var G__1881372 = (i__25220__auto___1881371 + (1));
i__25220__auto___1881371 = G__1881372;
continue;
} else {
}
break;
}

var G__1881369 = args1881367.length;
switch (G__1881369) {
case 1:
return hipo.dom.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hipo.dom.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1881367.length)].join('')));

}
});

hipo.dom.children.cljs$core$IFn$_invoke$arity$1 = (function (el){
return hipo.dom.children.call(null,el,(0));
});

hipo.dom.children.cljs$core$IFn$_invoke$arity$2 = (function (el,i){
if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,el))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"element?","element?",-134836339,null),new cljs.core.Symbol(null,"el","el",22330409,null))))].join('')));
}

if(!((i < (0)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol(null,"i","i",253690212,null)))))].join('')));
}

var fel = el.firstChild;
if(cljs.core.truth_(fel)){
var cel = fel;
var acc = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cel], null);
while(true){
var nel = cel.nextSibling;
if(cljs.core.truth_((function (){var and__24149__auto__ = !(((cljs.core.count.call(null,acc) - (i + (1))) === (0)));
if(and__24149__auto__){
return nel;
} else {
return and__24149__auto__;
}
})())){
var G__1881374 = nel;
var G__1881375 = cljs.core.conj.call(null,acc,nel);
cel = G__1881374;
acc = G__1881375;
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"element?","element?",-134836339,null),new cljs.core.Symbol(null,"el","el",22330409,null))))].join('')));
}

if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,nel))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"element?","element?",-134836339,null),new cljs.core.Symbol(null,"nel","nel",-1869920571,null))))].join('')));
}

if(!((el.parentElement == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol(null,".-parentElement",".-parentElement",407983630,null),new cljs.core.Symbol(null,"el","el",22330409,null))))))].join('')));
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"element?","element?",-134836339,null),new cljs.core.Symbol(null,"el","el",22330409,null))))].join('')));
}

return el.innerHTML = "";
});
hipo.dom.remove_trailing_children_BANG_ = (function hipo$dom$remove_trailing_children_BANG_(el,n){
if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,el))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"element?","element?",-134836339,null),new cljs.core.Symbol(null,"el","el",22330409,null))))].join('')));
}

if(!((n < (0)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))].join('')));
}

var n__25064__auto__ = n;
var _ = (0);
while(true){
if((_ < n__25064__auto__)){
if(typeof el.remove !== 'undefined'){
el.lastChild.remove();
} else {
el.removeChild(el.lastChild);
}

var G__1881376 = (_ + (1));
_ = G__1881376;
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"element?","element?",-134836339,null),new cljs.core.Symbol(null,"el","el",22330409,null))))].join('')));
}

if(!((i < (0)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol(null,"i","i",253690212,null)))))].join('')));
}

if(cljs.core.truth_(hipo.dom.element_QMARK_.call(null,nel))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"element?","element?",-134836339,null),new cljs.core.Symbol(null,"nel","nel",-1869920571,null))))].join('')));
}

return el.insertBefore(nel,hipo.dom.child_at.call(null,el,i));
});

//# sourceMappingURL=dom.js.map