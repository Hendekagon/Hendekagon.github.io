// Compiled by ClojureScript 1.7.170 {}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.dom');
goog.require('hipo.fast');
goog.require('hipo.hiccup');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,n,ov,nv){
if(cljs.core.truth_(hipo.hiccup.listener_name_QMARK_.call(null,n))){
if(cljs.core.truth_(ov)){
el.removeEventListener(hipo.hiccup.listener_name__GT_event_name.call(null,n),ov);
} else {
}

if(cljs.core.truth_(nv)){
return el.addEventListener(hipo.hiccup.listener_name__GT_event_name.call(null,n),nv);
} else {
return null;
}
} else {
if(cljs.core.truth_(nv)){
if(cljs.core._EQ_.call(null,n,"id")){
return el.id = nv;
} else {
return el.setAttribute(n,nv);
}
} else {
return el.removeAttribute(n);
}
}
});
hipo.interpreter.create_child;
hipo.interpreter.append_child_BANG_ = (function hipo$interpreter$append_child_BANG_(el,o){
return el.appendChild(hipo.interpreter.create_child.call(null,o));
});
hipo.interpreter.append_children_BANG_ = (function hipo$interpreter$append_children_BANG_(el,v){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var v__$1 = hipo.hiccup.flatten_children.call(null,v);
while(true){
if(cljs.core.truth_(hipo.fast.emptyv_QMARK_.call(null,v__$1))){
return null;
} else {
var temp__4423__auto___199913 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4423__auto___199913)){
var h_199914 = temp__4423__auto___199913;
hipo.interpreter.append_child_BANG_.call(null,el,h_199914);
} else {
}

var G__199915 = cljs.core.rest.call(null,v__$1);
v__$1 = G__199915;
continue;
}
break;
}
});
hipo.interpreter.create_vector = (function hipo$interpreter$create_vector(h){
if(cljs.core.vector_QMARK_.call(null,h)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"h","h",-1544777029,null))))].join('')));
}

var tag = hipo.hiccup.tag.call(null,h);
var attrs = hipo.hiccup.attributes.call(null,h);
var children = hipo.hiccup.children.call(null,h);
var el = hipo.dom.create_element.call(null,hipo.hiccup.tag__GT_ns.call(null,tag),tag);
var seq__199922_199928 = cljs.core.seq.call(null,attrs);
var chunk__199923_199929 = null;
var count__199924_199930 = (0);
var i__199925_199931 = (0);
while(true){
if((i__199925_199931 < count__199924_199930)){
var vec__199926_199932 = cljs.core._nth.call(null,chunk__199923_199929,i__199925_199931);
var k_199933 = cljs.core.nth.call(null,vec__199926_199932,(0),null);
var v_199934 = cljs.core.nth.call(null,vec__199926_199932,(1),null);
if(cljs.core.truth_(v_199934)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_199933),null,v_199934);
} else {
}

var G__199935 = seq__199922_199928;
var G__199936 = chunk__199923_199929;
var G__199937 = count__199924_199930;
var G__199938 = (i__199925_199931 + (1));
seq__199922_199928 = G__199935;
chunk__199923_199929 = G__199936;
count__199924_199930 = G__199937;
i__199925_199931 = G__199938;
continue;
} else {
var temp__4425__auto___199939 = cljs.core.seq.call(null,seq__199922_199928);
if(temp__4425__auto___199939){
var seq__199922_199940__$1 = temp__4425__auto___199939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199922_199940__$1)){
var c__25024__auto___199941 = cljs.core.chunk_first.call(null,seq__199922_199940__$1);
var G__199942 = cljs.core.chunk_rest.call(null,seq__199922_199940__$1);
var G__199943 = c__25024__auto___199941;
var G__199944 = cljs.core.count.call(null,c__25024__auto___199941);
var G__199945 = (0);
seq__199922_199928 = G__199942;
chunk__199923_199929 = G__199943;
count__199924_199930 = G__199944;
i__199925_199931 = G__199945;
continue;
} else {
var vec__199927_199946 = cljs.core.first.call(null,seq__199922_199940__$1);
var k_199947 = cljs.core.nth.call(null,vec__199927_199946,(0),null);
var v_199948 = cljs.core.nth.call(null,vec__199927_199946,(1),null);
if(cljs.core.truth_(v_199948)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_199947),null,v_199948);
} else {
}

var G__199949 = cljs.core.next.call(null,seq__199922_199940__$1);
var G__199950 = null;
var G__199951 = (0);
var G__199952 = (0);
seq__199922_199928 = G__199949;
chunk__199923_199929 = G__199950;
count__199924_199930 = G__199951;
i__199925_199931 = G__199952;
continue;
}
} else {
}
}
break;
}

hipo.interpreter.append_children_BANG_.call(null,el,children);

return el;
});
hipo.interpreter.mark_as_partially_compiled_BANG_ = (function hipo$interpreter$mark_as_partially_compiled_BANG_(el){
while(true){
var temp__4423__auto__ = el.parentElement;
if(cljs.core.truth_(temp__4423__auto__)){
var pel = temp__4423__auto__;
var G__199953 = pel;
el = G__199953;
continue;
} else {
(el["hipo-partially-compiled"] = true);

return el;
}
break;
}
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o){
if(cljs.core.truth_((function (){var or__24221__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return cljs.core.vector_QMARK_.call(null,o);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("hic","literal?","hic/literal?",1992923056,null),new cljs.core.Symbol(null,"o","o",290524299,null)),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"o","o",290524299,null)))))].join('')));
}

if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,o))){
return document.createTextNode(o);
} else {
return hipo.interpreter.create_vector.call(null,o);
}
});
hipo.interpreter.append_to_parent = (function hipo$interpreter$append_to_parent(el,o){
if(!((o == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"o","o",290524299,null)))))].join('')));
}

hipo.interpreter.mark_as_partially_compiled_BANG_.call(null,el);

if(cljs.core.seq_QMARK_.call(null,o)){
return hipo.interpreter.append_children_BANG_.call(null,el,cljs.core.vec.call(null,o));
} else {
return hipo.interpreter.append_child_BANG_.call(null,el,o);
}
});
hipo.interpreter.create = (function hipo$interpreter$create(o){
if(!((o == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"o","o",290524299,null)))))].join('')));
}

return hipo.interpreter.mark_as_partially_compiled_BANG_.call(null,((cljs.core.seq_QMARK_.call(null,o))?(function (){var f = document.createDocumentFragment();
hipo.interpreter.append_children_BANG_.call(null,f,cljs.core.vec.call(null,o));

return f;
})():hipo.interpreter.create_child.call(null,o)));
});
hipo.interpreter.update_attributes_BANG_ = (function hipo$interpreter$update_attributes_BANG_(el,om,nm,int$){
var seq__199968_199982 = cljs.core.seq.call(null,nm);
var chunk__199970_199983 = null;
var count__199971_199984 = (0);
var i__199972_199985 = (0);
while(true){
if((i__199972_199985 < count__199971_199984)){
var vec__199974_199986 = cljs.core._nth.call(null,chunk__199970_199983,i__199972_199985);
var nk_199987 = cljs.core.nth.call(null,vec__199974_199986,(0),null);
var nv_199988 = cljs.core.nth.call(null,vec__199974_199986,(1),null);
var ov_199989 = nk_199987.call(null,om);
var n_199990 = cljs.core.name.call(null,nk_199987);
if(!((ov_199989 === nv_199988))){
if(cljs.core.truth_(nv_199988)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_199990,ov_199989,nv_199988);
} else {
var o__30596__auto___199991 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_199990,new cljs.core.Keyword(null,"value","value",305978217),nv_199988], null));
if(!(o__30596__auto___199991 === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto___199991)){
o__30596__auto___199991.call(null,((function (seq__199968_199982,chunk__199970_199983,count__199971_199984,i__199972_199985,o__30596__auto___199991,ov_199989,n_199990,vec__199974_199986,nk_199987,nv_199988){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_199990,ov_199989,nv_199988);
});})(seq__199968_199982,chunk__199970_199983,count__199971_199984,i__199972_199985,o__30596__auto___199991,ov_199989,n_199990,vec__199974_199986,nk_199987,nv_199988))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_199990,ov_199989,nv_199988);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_199990,ov_199989,null);
} else {
var o__30596__auto___199992 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_199990], null));
if(!(o__30596__auto___199992 === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto___199992)){
o__30596__auto___199992.call(null,((function (seq__199968_199982,chunk__199970_199983,count__199971_199984,i__199972_199985,o__30596__auto___199992,ov_199989,n_199990,vec__199974_199986,nk_199987,nv_199988){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_199990,ov_199989,null);
});})(seq__199968_199982,chunk__199970_199983,count__199971_199984,i__199972_199985,o__30596__auto___199992,ov_199989,n_199990,vec__199974_199986,nk_199987,nv_199988))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_199990,ov_199989,null);
}
} else {
}
}
}
} else {
}

var G__199993 = seq__199968_199982;
var G__199994 = chunk__199970_199983;
var G__199995 = count__199971_199984;
var G__199996 = (i__199972_199985 + (1));
seq__199968_199982 = G__199993;
chunk__199970_199983 = G__199994;
count__199971_199984 = G__199995;
i__199972_199985 = G__199996;
continue;
} else {
var temp__4425__auto___199997 = cljs.core.seq.call(null,seq__199968_199982);
if(temp__4425__auto___199997){
var seq__199968_199998__$1 = temp__4425__auto___199997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199968_199998__$1)){
var c__25024__auto___199999 = cljs.core.chunk_first.call(null,seq__199968_199998__$1);
var G__200000 = cljs.core.chunk_rest.call(null,seq__199968_199998__$1);
var G__200001 = c__25024__auto___199999;
var G__200002 = cljs.core.count.call(null,c__25024__auto___199999);
var G__200003 = (0);
seq__199968_199982 = G__200000;
chunk__199970_199983 = G__200001;
count__199971_199984 = G__200002;
i__199972_199985 = G__200003;
continue;
} else {
var vec__199975_200004 = cljs.core.first.call(null,seq__199968_199998__$1);
var nk_200005 = cljs.core.nth.call(null,vec__199975_200004,(0),null);
var nv_200006 = cljs.core.nth.call(null,vec__199975_200004,(1),null);
var ov_200007 = nk_200005.call(null,om);
var n_200008 = cljs.core.name.call(null,nk_200005);
if(!((ov_200007 === nv_200006))){
if(cljs.core.truth_(nv_200006)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_200008,ov_200007,nv_200006);
} else {
var o__30596__auto___200009 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_200008,new cljs.core.Keyword(null,"value","value",305978217),nv_200006], null));
if(!(o__30596__auto___200009 === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto___200009)){
o__30596__auto___200009.call(null,((function (seq__199968_199982,chunk__199970_199983,count__199971_199984,i__199972_199985,o__30596__auto___200009,ov_200007,n_200008,vec__199975_200004,nk_200005,nv_200006,seq__199968_199998__$1,temp__4425__auto___199997){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_200008,ov_200007,nv_200006);
});})(seq__199968_199982,chunk__199970_199983,count__199971_199984,i__199972_199985,o__30596__auto___200009,ov_200007,n_200008,vec__199975_200004,nk_200005,nv_200006,seq__199968_199998__$1,temp__4425__auto___199997))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_200008,ov_200007,nv_200006);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_200008,ov_200007,null);
} else {
var o__30596__auto___200010 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_200008], null));
if(!(o__30596__auto___200010 === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto___200010)){
o__30596__auto___200010.call(null,((function (seq__199968_199982,chunk__199970_199983,count__199971_199984,i__199972_199985,o__30596__auto___200010,ov_200007,n_200008,vec__199975_200004,nk_200005,nv_200006,seq__199968_199998__$1,temp__4425__auto___199997){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_200008,ov_200007,null);
});})(seq__199968_199982,chunk__199970_199983,count__199971_199984,i__199972_199985,o__30596__auto___200010,ov_200007,n_200008,vec__199975_200004,nk_200005,nv_200006,seq__199968_199998__$1,temp__4425__auto___199997))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_200008,ov_200007,null);
}
} else {
}
}
}
} else {
}

var G__200011 = cljs.core.next.call(null,seq__199968_199998__$1);
var G__200012 = null;
var G__200013 = (0);
var G__200014 = (0);
seq__199968_199982 = G__200011;
chunk__199970_199983 = G__200012;
count__199971_199984 = G__200013;
i__199972_199985 = G__200014;
continue;
}
} else {
}
}
break;
}

var seq__199976 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__199978 = null;
var count__199979 = (0);
var i__199980 = (0);
while(true){
if((i__199980 < count__199979)){
var k = cljs.core._nth.call(null,chunk__199978,i__199980);
var n_200015 = cljs.core.name.call(null,k);
var ov_200016 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_200015,ov_200016,null);
} else {
var o__30596__auto___200017 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_200015], null));
if(!(o__30596__auto___200017 === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto___200017)){
o__30596__auto___200017.call(null,((function (seq__199976,chunk__199978,count__199979,i__199980,o__30596__auto___200017,n_200015,ov_200016,k){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_200015,ov_200016,null);
});})(seq__199976,chunk__199978,count__199979,i__199980,o__30596__auto___200017,n_200015,ov_200016,k))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_200015,ov_200016,null);
}
} else {
}
}

var G__200018 = seq__199976;
var G__200019 = chunk__199978;
var G__200020 = count__199979;
var G__200021 = (i__199980 + (1));
seq__199976 = G__200018;
chunk__199978 = G__200019;
count__199979 = G__200020;
i__199980 = G__200021;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__199976);
if(temp__4425__auto__){
var seq__199976__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199976__$1)){
var c__25024__auto__ = cljs.core.chunk_first.call(null,seq__199976__$1);
var G__200022 = cljs.core.chunk_rest.call(null,seq__199976__$1);
var G__200023 = c__25024__auto__;
var G__200024 = cljs.core.count.call(null,c__25024__auto__);
var G__200025 = (0);
seq__199976 = G__200022;
chunk__199978 = G__200023;
count__199979 = G__200024;
i__199980 = G__200025;
continue;
} else {
var k = cljs.core.first.call(null,seq__199976__$1);
var n_200026 = cljs.core.name.call(null,k);
var ov_200027 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_200026,ov_200027,null);
} else {
var o__30596__auto___200028 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_200026], null));
if(!(o__30596__auto___200028 === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto___200028)){
o__30596__auto___200028.call(null,((function (seq__199976,chunk__199978,count__199979,i__199980,o__30596__auto___200028,n_200026,ov_200027,k,seq__199976__$1,temp__4425__auto__){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_200026,ov_200027,null);
});})(seq__199976,chunk__199978,count__199979,i__199980,o__30596__auto___200028,n_200026,ov_200027,k,seq__199976__$1,temp__4425__auto__))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_200026,ov_200027,null);
}
} else {
}
}

var G__200029 = cljs.core.next.call(null,seq__199976__$1);
var G__200030 = null;
var G__200031 = (0);
var G__200032 = (0);
seq__199976 = G__200029;
chunk__199978 = G__200030;
count__199979 = G__200031;
i__199980 = G__200032;
continue;
}
} else {
return null;
}
}
break;
}
});
hipo.interpreter.update_BANG_;
hipo.interpreter.child_key = (function hipo$interpreter$child_key(h){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,h));
});
hipo.interpreter.keyed_children__GT_map = (function hipo$interpreter$keyed_children__GT_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__24993__auto__ = (function hipo$interpreter$keyed_children__GT_map_$_iter__200037(s__200038){
return (new cljs.core.LazySeq(null,(function (){
var s__200038__$1 = s__200038;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__200038__$1);
if(temp__4425__auto__){
var s__200038__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__200038__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__200038__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__200040 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__200039 = (0);
while(true){
if((i__200039 < size__24992__auto__)){
var h = cljs.core._nth.call(null,c__24991__auto__,i__200039);
cljs.core.chunk_append.call(null,b__200040,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null));

var G__200041 = (i__200039 + (1));
i__200039 = G__200041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__200040),hipo$interpreter$keyed_children__GT_map_$_iter__200037.call(null,cljs.core.chunk_rest.call(null,s__200038__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__200040),null);
}
} else {
var h = cljs.core.first.call(null,s__200038__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null),hipo$interpreter$keyed_children__GT_map_$_iter__200037.call(null,cljs.core.rest.call(null,s__200038__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24993__auto__.call(null,v);
})());
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__24993__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__200046(s__200047){
return (new cljs.core.LazySeq(null,(function (){
var s__200047__$1 = s__200047;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__200047__$1);
if(temp__4425__auto__){
var s__200047__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__200047__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__200047__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__200049 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__200048 = (0);
while(true){
if((i__200048 < size__24992__auto__)){
var ih = cljs.core._nth.call(null,c__24991__auto__,i__200048);
cljs.core.chunk_append.call(null,b__200049,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__200050 = (i__200048 + (1));
i__200048 = G__200050;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__200049),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__200046.call(null,cljs.core.chunk_rest.call(null,s__200047__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__200049),null);
}
} else {
var ih = cljs.core.first.call(null,s__200047__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__200046.call(null,cljs.core.rest.call(null,s__200047__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24993__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__24993__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__24993__auto__))
,v));
})());
});
hipo.interpreter.update_keyed_children_BANG_ = (function hipo$interpreter$update_keyed_children_BANG_(el,och,nch,int$){
var om = hipo.interpreter.keyed_children__GT_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__200059_200067 = cljs.core.seq.call(null,nm);
var chunk__200060_200068 = null;
var count__200061_200069 = (0);
var i__200062_200070 = (0);
while(true){
if((i__200062_200070 < count__200061_200069)){
var vec__200063_200071 = cljs.core._nth.call(null,chunk__200060_200068,i__200062_200070);
var i_200072 = cljs.core.nth.call(null,vec__200063_200071,(0),null);
var vec__200064_200073 = cljs.core.nth.call(null,vec__200063_200071,(1),null);
var ii_200074 = cljs.core.nth.call(null,vec__200064_200073,(0),null);
var h_200075 = cljs.core.nth.call(null,vec__200064_200073,(1),null);
var temp__4423__auto___200076 = cljs.core.get.call(null,om,i_200072);
if(cljs.core.truth_(temp__4423__auto___200076)){
var oh_200077 = temp__4423__auto___200076;
if(cljs.core.not.call(null,int$)){
if((oh_200077 === h_200075)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_200074,cljs.core.nth.call(null,cs,i_200072));
} else {
var ncel_200078 = el.removeChild(cljs.core.nth.call(null,cs,i_200072));
hipo.interpreter.update_BANG_.call(null,ncel_200078,oh_200077,h_200075,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_200074,ncel_200078);
}
} else {
var o__30596__auto___200079 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_200075,new cljs.core.Keyword(null,"index","index",-1531685915),ii_200074], null));
if(!(o__30596__auto___200079 === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto___200079)){
o__30596__auto___200079.call(null,((function (seq__200059_200067,chunk__200060_200068,count__200061_200069,i__200062_200070,o__30596__auto___200079,oh_200077,temp__4423__auto___200076,vec__200063_200071,i_200072,vec__200064_200073,ii_200074,h_200075,om,nm,cs){
return (function (){
if((oh_200077 === h_200075)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_200074,cljs.core.nth.call(null,cs,i_200072));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_200072));
hipo.interpreter.update_BANG_.call(null,ncel,oh_200077,h_200075,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_200074,ncel);
}
});})(seq__200059_200067,chunk__200060_200068,count__200061_200069,i__200062_200070,o__30596__auto___200079,oh_200077,temp__4423__auto___200076,vec__200063_200071,i_200072,vec__200064_200073,ii_200074,h_200075,om,nm,cs))
);
} else {
if((oh_200077 === h_200075)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_200074,cljs.core.nth.call(null,cs,i_200072));
} else {
var ncel_200080 = el.removeChild(cljs.core.nth.call(null,cs,i_200072));
hipo.interpreter.update_BANG_.call(null,ncel_200080,oh_200077,h_200075,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_200074,ncel_200080);
}
}
} else {
}
}
} else {
var nel_200081 = hipo.interpreter.create_child.call(null,h_200075);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_200074,nel_200081);
} else {
var o__30596__auto___200082 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_200081,new cljs.core.Keyword(null,"index","index",-1531685915),ii_200074], null));
if(!(o__30596__auto___200082 === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto___200082)){
o__30596__auto___200082.call(null,((function (seq__200059_200067,chunk__200060_200068,count__200061_200069,i__200062_200070,o__30596__auto___200082,nel_200081,temp__4423__auto___200076,vec__200063_200071,i_200072,vec__200064_200073,ii_200074,h_200075,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_200074,nel_200081);
});})(seq__200059_200067,chunk__200060_200068,count__200061_200069,i__200062_200070,o__30596__auto___200082,nel_200081,temp__4423__auto___200076,vec__200063_200071,i_200072,vec__200064_200073,ii_200074,h_200075,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_200074,nel_200081);
}
} else {
}
}
}

var G__200083 = seq__200059_200067;
var G__200084 = chunk__200060_200068;
var G__200085 = count__200061_200069;
var G__200086 = (i__200062_200070 + (1));
seq__200059_200067 = G__200083;
chunk__200060_200068 = G__200084;
count__200061_200069 = G__200085;
i__200062_200070 = G__200086;
continue;
} else {
var temp__4425__auto___200087 = cljs.core.seq.call(null,seq__200059_200067);
if(temp__4425__auto___200087){
var seq__200059_200088__$1 = temp__4425__auto___200087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__200059_200088__$1)){
var c__25024__auto___200089 = cljs.core.chunk_first.call(null,seq__200059_200088__$1);
var G__200090 = cljs.core.chunk_rest.call(null,seq__200059_200088__$1);
var G__200091 = c__25024__auto___200089;
var G__200092 = cljs.core.count.call(null,c__25024__auto___200089);
var G__200093 = (0);
seq__200059_200067 = G__200090;
chunk__200060_200068 = G__200091;
count__200061_200069 = G__200092;
i__200062_200070 = G__200093;
continue;
} else {
var vec__200065_200094 = cljs.core.first.call(null,seq__200059_200088__$1);
var i_200095 = cljs.core.nth.call(null,vec__200065_200094,(0),null);
var vec__200066_200096 = cljs.core.nth.call(null,vec__200065_200094,(1),null);
var ii_200097 = cljs.core.nth.call(null,vec__200066_200096,(0),null);
var h_200098 = cljs.core.nth.call(null,vec__200066_200096,(1),null);
var temp__4423__auto___200099 = cljs.core.get.call(null,om,i_200095);
if(cljs.core.truth_(temp__4423__auto___200099)){
var oh_200100 = temp__4423__auto___200099;
if(cljs.core.not.call(null,int$)){
if((oh_200100 === h_200098)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_200097,cljs.core.nth.call(null,cs,i_200095));
} else {
var ncel_200101 = el.removeChild(cljs.core.nth.call(null,cs,i_200095));
hipo.interpreter.update_BANG_.call(null,ncel_200101,oh_200100,h_200098,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_200097,ncel_200101);
}
} else {
var o__30596__auto___200102 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_200098,new cljs.core.Keyword(null,"index","index",-1531685915),ii_200097], null));
if(!(o__30596__auto___200102 === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto___200102)){
o__30596__auto___200102.call(null,((function (seq__200059_200067,chunk__200060_200068,count__200061_200069,i__200062_200070,o__30596__auto___200102,oh_200100,temp__4423__auto___200099,vec__200065_200094,i_200095,vec__200066_200096,ii_200097,h_200098,seq__200059_200088__$1,temp__4425__auto___200087,om,nm,cs){
return (function (){
if((oh_200100 === h_200098)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_200097,cljs.core.nth.call(null,cs,i_200095));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_200095));
hipo.interpreter.update_BANG_.call(null,ncel,oh_200100,h_200098,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_200097,ncel);
}
});})(seq__200059_200067,chunk__200060_200068,count__200061_200069,i__200062_200070,o__30596__auto___200102,oh_200100,temp__4423__auto___200099,vec__200065_200094,i_200095,vec__200066_200096,ii_200097,h_200098,seq__200059_200088__$1,temp__4425__auto___200087,om,nm,cs))
);
} else {
if((oh_200100 === h_200098)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_200097,cljs.core.nth.call(null,cs,i_200095));
} else {
var ncel_200103 = el.removeChild(cljs.core.nth.call(null,cs,i_200095));
hipo.interpreter.update_BANG_.call(null,ncel_200103,oh_200100,h_200098,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_200097,ncel_200103);
}
}
} else {
}
}
} else {
var nel_200104 = hipo.interpreter.create_child.call(null,h_200098);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_200097,nel_200104);
} else {
var o__30596__auto___200105 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_200104,new cljs.core.Keyword(null,"index","index",-1531685915),ii_200097], null));
if(!(o__30596__auto___200105 === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto___200105)){
o__30596__auto___200105.call(null,((function (seq__200059_200067,chunk__200060_200068,count__200061_200069,i__200062_200070,o__30596__auto___200105,nel_200104,temp__4423__auto___200099,vec__200065_200094,i_200095,vec__200066_200096,ii_200097,h_200098,seq__200059_200088__$1,temp__4425__auto___200087,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_200097,nel_200104);
});})(seq__200059_200067,chunk__200060_200068,count__200061_200069,i__200062_200070,o__30596__auto___200105,nel_200104,temp__4423__auto___200099,vec__200065_200094,i_200095,vec__200066_200096,ii_200097,h_200098,seq__200059_200088__$1,temp__4425__auto___200087,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_200097,nel_200104);
}
} else {
}
}
}

var G__200106 = cljs.core.next.call(null,seq__200059_200088__$1);
var G__200107 = null;
var G__200108 = (0);
var G__200109 = (0);
seq__200059_200067 = G__200106;
chunk__200060_200068 = G__200107;
count__200061_200069 = G__200108;
i__200062_200070 = G__200109;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
if(cljs.core.not.call(null,int$)){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
} else {
var o__30596__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__30596__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto__)){
return o__30596__auto__.call(null,((function (o__30596__auto__,d,om,nm,cs){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__30596__auto__,d,om,nm,cs))
);
} else {
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
}
} else {
return null;
}
}
});
hipo.interpreter.update_non_keyed_children_BANG_ = (function hipo$interpreter$update_non_keyed_children_BANG_(el,och,nch,int$){
var oc = cljs.core.count.call(null,och);
var nc = cljs.core.count.call(null,nch);
var d = (oc - nc);
if((d > (0))){
if(cljs.core.not.call(null,int$)){
hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
} else {
var o__30596__auto___200110 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__30596__auto___200110 === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto___200110)){
o__30596__auto___200110.call(null,((function (o__30596__auto___200110,oc,nc,d){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__30596__auto___200110,oc,nc,d))
);
} else {
hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
}
} else {
}
}
} else {
}

var n__25124__auto___200111 = (function (){var x__24559__auto__ = oc;
var y__24560__auto__ = nc;
return ((x__24559__auto__ < y__24560__auto__) ? x__24559__auto__ : y__24560__auto__);
})();
var i_200112 = (0);
while(true){
if((i_200112 < n__25124__auto___200111)){
var ov_200113 = cljs.core.nth.call(null,och,i_200112);
var nv_200114 = cljs.core.nth.call(null,nch,i_200112);
if(!((ov_200113 === nv_200114))){
var temp__4423__auto___200115 = hipo.dom.child_at.call(null,el,i_200112);
if(cljs.core.truth_(temp__4423__auto___200115)){
var cel_200116 = temp__4423__auto___200115;
hipo.interpreter.update_BANG_.call(null,cel_200116,ov_200113,nv_200114,int$);
} else {
}
} else {
}

var G__200117 = (i_200112 + (1));
i_200112 = G__200117;
continue;
} else {
}
break;
}

if((d < (0))){
if(((-1) === d)){
var h = cljs.core.peek.call(null,nch);
if(cljs.core.not.call(null,int$)){
return hipo.interpreter.append_child_BANG_.call(null,el,h);
} else {
var o__30596__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
if(!(o__30596__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto__)){
return o__30596__auto__.call(null,((function (o__30596__auto__,h,oc,nc,d){
return (function (){
return hipo.interpreter.append_child_BANG_.call(null,el,h);
});})(o__30596__auto__,h,oc,nc,d))
);
} else {
return hipo.interpreter.append_child_BANG_.call(null,el,h);
}
} else {
return null;
}
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.call(null,nch,oc));
if(cljs.core.not.call(null,int$)){
hipo.interpreter.append_children_BANG_.call(null,f,cs);
} else {
var o__30596__auto___200118 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
if(!(o__30596__auto___200118 === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto___200118)){
o__30596__auto___200118.call(null,((function (o__30596__auto___200118,f,cs,oc,nc,d){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs);
});})(o__30596__auto___200118,f,cs,oc,nc,d))
);
} else {
hipo.interpreter.append_children_BANG_.call(null,f,cs);
}
} else {
}
}

return el.appendChild(f);
}
} else {
return null;
}
});
hipo.interpreter.keyed_children_QMARK_ = (function hipo$interpreter$keyed_children_QMARK_(v){
return !((hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,v,(0))) == null));
});
hipo.interpreter.update_children_BANG_ = (function hipo$interpreter$update_children_BANG_(el,och,nch,int$){
if(cljs.core.truth_(hipo.fast.emptyv_QMARK_.call(null,nch))){
if(cljs.core.not.call(null,int$)){
return hipo.dom.clear_BANG_.call(null,el);
} else {
var o__30596__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__30596__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto__)){
return o__30596__auto__.call(null,((function (o__30596__auto__){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(o__30596__auto__))
);
} else {
return hipo.dom.clear_BANG_.call(null,el);
}
} else {
return null;
}
}
} else {
if(cljs.core.truth_(hipo.interpreter.keyed_children_QMARK_.call(null,nch))){
return hipo.interpreter.update_keyed_children_BANG_.call(null,el,och,nch,int$);
} else {
return hipo.interpreter.update_non_keyed_children_BANG_.call(null,el,och,nch,int$);
}
}
});
hipo.interpreter.update_vector_BANG_ = (function hipo$interpreter$update_vector_BANG_(el,oh,nh,int$){
if(cljs.core.vector_QMARK_.call(null,oh)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"oh","oh",-129769339,null))))].join('')));
}

if(cljs.core.vector_QMARK_.call(null,nh)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"nh","nh",1280017554,null))))].join('')));
}

if(!((hipo.hiccup.tag.call(null,nh) === hipo.hiccup.tag.call(null,oh)))){
var nel = hipo.interpreter.create.call(null,nh);
if(cljs.core.not.call(null,int$)){
return hipo.dom.replace_BANG_.call(null,el,nel);
} else {
var o__30596__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel], null));
if(!(o__30596__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto__)){
return o__30596__auto__.call(null,((function (o__30596__auto__,nel){
return (function (){
return hipo.dom.replace_BANG_.call(null,el,nel);
});})(o__30596__auto__,nel))
);
} else {
return hipo.dom.replace_BANG_.call(null,el,nel);
}
} else {
return null;
}
}
} else {
var om = hipo.hiccup.attributes.call(null,oh);
var nm = hipo.hiccup.attributes.call(null,nh);
var och = hipo.hiccup.children.call(null,oh);
var nch = hipo.hiccup.children.call(null,nh);
if(!((och === nch))){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.update_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),int$);
} else {
var o__30596__auto___200119 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-children","update-children",1871853561),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__30596__auto___200119 === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto___200119)){
o__30596__auto___200119.call(null,((function (o__30596__auto___200119,om,nm,och,nch){
return (function (){
return hipo.interpreter.update_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),int$);
});})(o__30596__auto___200119,om,nm,och,nch))
);
} else {
hipo.interpreter.update_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),int$);
}
} else {
}
}
} else {
}

if(!((om === nm))){
return hipo.interpreter.update_attributes_BANG_.call(null,el,om,nm,int$);
} else {
return null;
}
}
});
hipo.interpreter.update_BANG_ = (function hipo$interpreter$update_BANG_(el,ph,h,int$){
if(cljs.core.truth_((function (){var or__24221__auto__ = cljs.core.vector_QMARK_.call(null,h);
if(or__24221__auto__){
return or__24221__auto__;
} else {
return hipo.hiccup.literal_QMARK_.call(null,h);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)),cljs.core.list(new cljs.core.Symbol("hic","literal?","hic/literal?",1992923056,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)))))].join('')));
}

if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,h))){
if(!((ph === h))){
if(cljs.core.not.call(null,int$)){
return hipo.dom.replace_text_BANG_.call(null,el,h);
} else {
var o__30596__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
if(!(o__30596__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto__)){
return o__30596__auto__.call(null,((function (o__30596__auto__){
return (function (){
return hipo.dom.replace_text_BANG_.call(null,el,h);
});})(o__30596__auto__))
);
} else {
return hipo.dom.replace_text_BANG_.call(null,el,h);
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return hipo.interpreter.update_vector_BANG_.call(null,el,ph,h,int$);
}
});
hipo.interpreter.create_for_update = (function hipo$interpreter$create_for_update(el,oh){
var a = cljs.core.atom.call(null,oh);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,((function (a){
return (function() { 
var G__200124__delegate = function (nh,p__200122){
var vec__200123 = p__200122;
var m = cljs.core.nth.call(null,vec__200123,(0),null);
var int$ = new cljs.core.Keyword(null,"interceptor","interceptor",1127739076).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
} else {
var o__30596__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__30596__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__30596__auto__)){
return o__30596__auto__.call(null,((function (o__30596__auto__,int$,vec__200123,m,a){
return (function (){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
});})(o__30596__auto__,int$,vec__200123,m,a))
);
} else {
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
}
} else {
return null;
}
}
};
var G__200124 = function (nh,var_args){
var p__200122 = null;
if (arguments.length > 1) {
var G__200125__i = 0, G__200125__a = new Array(arguments.length -  1);
while (G__200125__i < G__200125__a.length) {G__200125__a[G__200125__i] = arguments[G__200125__i + 1]; ++G__200125__i;}
  p__200122 = new cljs.core.IndexedSeq(G__200125__a,0);
} 
return G__200124__delegate.call(this,nh,p__200122);};
G__200124.cljs$lang$maxFixedArity = 1;
G__200124.cljs$lang$applyTo = (function (arglist__200126){
var nh = cljs.core.first(arglist__200126);
var p__200122 = cljs.core.rest(arglist__200126);
return G__200124__delegate(nh,p__200122);
});
G__200124.cljs$core$IFn$_invoke$arity$variadic = G__200124__delegate;
return G__200124;
})()
;})(a))
], null);
});

//# sourceMappingURL=interpreter.js.map