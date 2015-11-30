// Compiled by ClojureScript 1.7.170 {}
goog.provide('hipo.hiccup');
goog.require('cljs.core');
goog.require('hipo.fast');
hipo.hiccup.svg_ns = "http://www.w3.org/2000/svg";
hipo.hiccup.svg_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["path",null,"svg",null,"text",null,"line",null,"polygon",null,"textPath",null,"polyline",null,"g",null,"clipPath",null,"rect",null,"circle",null], null), null);
hipo.hiccup.id_separator = "#";
hipo.hiccup.class_separator = ".";
hipo.hiccup.tag__GT_ns = (function hipo$hiccup$tag__GT_ns(s){
if(cljs.core.truth_(hipo.hiccup.svg_tags.call(null,s))){
return hipo.hiccup.svg_ns;
} else {
return null;
}
});
hipo.hiccup.parse_tag_name = (function hipo$hiccup$parse_tag_name(s){
var i = s.indexOf(hipo.hiccup.id_separator);
if((i > (0))){
return cljs.core.subs.call(null,s,(0),i);
} else {
var j = s.indexOf(hipo.hiccup.class_separator);
if((j > (0))){
return cljs.core.subs.call(null,s,(0),j);
} else {
return s;
}
}
});
hipo.hiccup.parse_id = (function hipo$hiccup$parse_id(s){
var i = s.indexOf(hipo.hiccup.id_separator);
if((i > (0))){
var j = s.indexOf(hipo.hiccup.class_separator);
if((j > (0))){
return cljs.core.subs.call(null,s,(i + (1)),j);
} else {
return cljs.core.subs.call(null,s,(i + (1)));
}
} else {
return null;
}
});
hipo.hiccup.parse_classes = (function hipo$hiccup$parse_classes(s){
var i = s.indexOf(hipo.hiccup.class_separator);
if((i > (0))){
var cs = cljs.core.subs.call(null,s,(i + (1)));
var s__$1 = cs;
while(true){
var i__$1 = s__$1.indexOf(hipo.hiccup.class_separator);
if((i__$1 > (0))){
var G__876221 = s__$1.replace(hipo.hiccup.class_separator," ");
s__$1 = G__876221;
continue;
} else {
return s__$1;
}
break;
}
} else {
return null;
}
});
hipo.hiccup.literal_QMARK_ = (function hipo$hiccup$literal_QMARK_(o){
return (typeof o === 'string') || (typeof o === 'number') || (o === true) || (o === false);
});
hipo.hiccup.node = (function hipo$hiccup$node(v){
return cljs.core.name.call(null,cljs.core.nth.call(null,v,(0)));
});
hipo.hiccup.tag = (function hipo$hiccup$tag(v){
return hipo.hiccup.parse_tag_name.call(null,hipo.hiccup.node.call(null,v));
});
hipo.hiccup.attributes = (function hipo$hiccup$attributes(v){
var n = hipo.hiccup.node.call(null,v);
var id = hipo.hiccup.parse_id.call(null,n);
var cs = hipo.hiccup.parse_classes.call(null,n);
var m_QMARK_ = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,m_QMARK_)){
if(cljs.core.truth_((function (){var and__24199__auto__ = id;
if(cljs.core.truth_(and__24199__auto__)){
return cljs.core.contains_QMARK_.call(null,m_QMARK_,new cljs.core.Keyword(null,"id","id",-1388402092));
} else {
return and__24199__auto__;
}
})())){
throw cljs.core.ex_info.call(null,"Cannot define id multiple times",cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core.truth_((function (){var or__24211__auto__ = id;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cs;
}
})())){
return cljs.core.merge.call(null,m_QMARK_,(cljs.core.truth_(id)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null):null),(cljs.core.truth_(cs)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m_QMARK_);
if(cljs.core.truth_(temp__4423__auto__)){
var c = temp__4423__auto__;
if(cljs.core.truth_(cs)){
return [cljs.core.str(cs),cljs.core.str(" "),cljs.core.str(c)].join('');
} else {
return [cljs.core.str(c)].join('');
}
} else {
return cs;
}
})()], null):null));
} else {
return m_QMARK_;
}
}
} else {
if(cljs.core.truth_((function (){var or__24211__auto__ = id;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cs;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),cs], null);
} else {
return null;
}
}
});
hipo.hiccup.children = (function hipo$hiccup$children(v){
if(cljs.core.map_QMARK_.call(null,cljs.core.nth.call(null,v,(1),null))){
return cljs.core.subvec.call(null,v,(2));
} else {
return cljs.core.subvec.call(null,v,(1));
}
});
hipo.hiccup.flattened_QMARK_ = (function hipo$hiccup$flattened_QMARK_(v){
if(((v == null)) || (cljs.core.vector_QMARK_.call(null,v))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"v","v",1661996586,null)),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))))].join('')));
}

if(cljs.core.truth_(hipo.fast.emptyv_QMARK_.call(null,v))){
return true;
} else {
var c = (cljs.core.count.call(null,v) - (1));
var i = (0);
while(true){
var o = cljs.core.nth.call(null,v,i);
if(cljs.core.truth_((function (){var or__24211__auto__ = (o == null);
if(or__24211__auto__){
return or__24211__auto__;
} else {
var or__24211__auto____$1 = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__24211__auto____$1)){
return or__24211__auto____$1;
} else {
return cljs.core.vector_QMARK_.call(null,o);
}
}
})())){
if(cljs.core._EQ_.call(null,c,i)){
return true;
} else {
var G__876222 = (i + (1));
i = G__876222;
continue;
}
} else {
return false;
}
break;
}
}
});
hipo.hiccup.flatten_children = (function hipo$hiccup$flatten_children(v){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var _PERCENT_ = (cljs.core.truth_(hipo.hiccup.flattened_QMARK_.call(null,v))?v:(function (){var acc = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var v__$1 = v;
while(true){
var f = ((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,v__$1)))?null:cljs.core.nth.call(null,v__$1,(0)));
if((f == null)){
return cljs.core.persistent_BANG_.call(null,acc);
} else {
var G__876223 = ((cljs.core.seq_QMARK_.call(null,f))?hipo.fast.conjs_BANG_.call(null,acc,f):cljs.core.conj_BANG_.call(null,acc,f));
var G__876224 = cljs.core.subvec.call(null,v__$1,(1));
acc = G__876223;
v__$1 = G__876224;
continue;
}
break;
}
})());
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

return _PERCENT_;
});
hipo.hiccup.listener_name_QMARK_ = (function hipo$hiccup$listener_name_QMARK_(s){
return ((0) === s.indexOf("on-"));
});
hipo.hiccup.listener_name__GT_event_name = (function hipo$hiccup$listener_name__GT_event_name(s){
if(cljs.core.truth_(hipo.hiccup.listener_name_QMARK_.call(null,s))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"listener-name?","listener-name?",30471643,null),new cljs.core.Symbol(null,"s","s",-948495851,null))))].join('')));
}

return cljs.core.subs.call(null,s,(3));
});

//# sourceMappingURL=hiccup.js.map