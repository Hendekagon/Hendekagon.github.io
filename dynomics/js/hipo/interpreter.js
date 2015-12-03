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
var temp__4423__auto___46043 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4423__auto___46043)){
var h_46044 = temp__4423__auto___46043;
hipo.interpreter.append_child_BANG_.call(null,el,h_46044);
} else {
}

var G__46045 = cljs.core.rest.call(null,v__$1);
v__$1 = G__46045;
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
var seq__46052_46058 = cljs.core.seq.call(null,attrs);
var chunk__46053_46059 = null;
var count__46054_46060 = (0);
var i__46055_46061 = (0);
while(true){
if((i__46055_46061 < count__46054_46060)){
var vec__46056_46062 = cljs.core._nth.call(null,chunk__46053_46059,i__46055_46061);
var k_46063 = cljs.core.nth.call(null,vec__46056_46062,(0),null);
var v_46064 = cljs.core.nth.call(null,vec__46056_46062,(1),null);
if(cljs.core.truth_(v_46064)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_46063),null,v_46064);
} else {
}

var G__46065 = seq__46052_46058;
var G__46066 = chunk__46053_46059;
var G__46067 = count__46054_46060;
var G__46068 = (i__46055_46061 + (1));
seq__46052_46058 = G__46065;
chunk__46053_46059 = G__46066;
count__46054_46060 = G__46067;
i__46055_46061 = G__46068;
continue;
} else {
var temp__4425__auto___46069 = cljs.core.seq.call(null,seq__46052_46058);
if(temp__4425__auto___46069){
var seq__46052_46070__$1 = temp__4425__auto___46069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46052_46070__$1)){
var c__24968__auto___46071 = cljs.core.chunk_first.call(null,seq__46052_46070__$1);
var G__46072 = cljs.core.chunk_rest.call(null,seq__46052_46070__$1);
var G__46073 = c__24968__auto___46071;
var G__46074 = cljs.core.count.call(null,c__24968__auto___46071);
var G__46075 = (0);
seq__46052_46058 = G__46072;
chunk__46053_46059 = G__46073;
count__46054_46060 = G__46074;
i__46055_46061 = G__46075;
continue;
} else {
var vec__46057_46076 = cljs.core.first.call(null,seq__46052_46070__$1);
var k_46077 = cljs.core.nth.call(null,vec__46057_46076,(0),null);
var v_46078 = cljs.core.nth.call(null,vec__46057_46076,(1),null);
if(cljs.core.truth_(v_46078)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_46077),null,v_46078);
} else {
}

var G__46079 = cljs.core.next.call(null,seq__46052_46070__$1);
var G__46080 = null;
var G__46081 = (0);
var G__46082 = (0);
seq__46052_46058 = G__46079;
chunk__46053_46059 = G__46080;
count__46054_46060 = G__46081;
i__46055_46061 = G__46082;
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
var G__46083 = pel;
el = G__46083;
continue;
} else {
(el["hipo-partially-compiled"] = true);

return el;
}
break;
}
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o){
if(cljs.core.truth_((function (){var or__24165__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
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
var seq__46098_46112 = cljs.core.seq.call(null,nm);
var chunk__46100_46113 = null;
var count__46101_46114 = (0);
var i__46102_46115 = (0);
while(true){
if((i__46102_46115 < count__46101_46114)){
var vec__46104_46116 = cljs.core._nth.call(null,chunk__46100_46113,i__46102_46115);
var nk_46117 = cljs.core.nth.call(null,vec__46104_46116,(0),null);
var nv_46118 = cljs.core.nth.call(null,vec__46104_46116,(1),null);
var ov_46119 = nk_46117.call(null,om);
var n_46120 = cljs.core.name.call(null,nk_46117);
if(!((ov_46119 === nv_46118))){
if(cljs.core.truth_(nv_46118)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_46120,ov_46119,nv_46118);
} else {
var o__25368__auto___46121 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_46120,new cljs.core.Keyword(null,"value","value",305978217),nv_46118], null));
if(!(o__25368__auto___46121 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto___46121)){
o__25368__auto___46121.call(null,((function (seq__46098_46112,chunk__46100_46113,count__46101_46114,i__46102_46115,o__25368__auto___46121,ov_46119,n_46120,vec__46104_46116,nk_46117,nv_46118){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_46120,ov_46119,nv_46118);
});})(seq__46098_46112,chunk__46100_46113,count__46101_46114,i__46102_46115,o__25368__auto___46121,ov_46119,n_46120,vec__46104_46116,nk_46117,nv_46118))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_46120,ov_46119,nv_46118);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_46120,ov_46119,null);
} else {
var o__25368__auto___46122 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_46120], null));
if(!(o__25368__auto___46122 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto___46122)){
o__25368__auto___46122.call(null,((function (seq__46098_46112,chunk__46100_46113,count__46101_46114,i__46102_46115,o__25368__auto___46122,ov_46119,n_46120,vec__46104_46116,nk_46117,nv_46118){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_46120,ov_46119,null);
});})(seq__46098_46112,chunk__46100_46113,count__46101_46114,i__46102_46115,o__25368__auto___46122,ov_46119,n_46120,vec__46104_46116,nk_46117,nv_46118))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_46120,ov_46119,null);
}
} else {
}
}
}
} else {
}

var G__46123 = seq__46098_46112;
var G__46124 = chunk__46100_46113;
var G__46125 = count__46101_46114;
var G__46126 = (i__46102_46115 + (1));
seq__46098_46112 = G__46123;
chunk__46100_46113 = G__46124;
count__46101_46114 = G__46125;
i__46102_46115 = G__46126;
continue;
} else {
var temp__4425__auto___46127 = cljs.core.seq.call(null,seq__46098_46112);
if(temp__4425__auto___46127){
var seq__46098_46128__$1 = temp__4425__auto___46127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46098_46128__$1)){
var c__24968__auto___46129 = cljs.core.chunk_first.call(null,seq__46098_46128__$1);
var G__46130 = cljs.core.chunk_rest.call(null,seq__46098_46128__$1);
var G__46131 = c__24968__auto___46129;
var G__46132 = cljs.core.count.call(null,c__24968__auto___46129);
var G__46133 = (0);
seq__46098_46112 = G__46130;
chunk__46100_46113 = G__46131;
count__46101_46114 = G__46132;
i__46102_46115 = G__46133;
continue;
} else {
var vec__46105_46134 = cljs.core.first.call(null,seq__46098_46128__$1);
var nk_46135 = cljs.core.nth.call(null,vec__46105_46134,(0),null);
var nv_46136 = cljs.core.nth.call(null,vec__46105_46134,(1),null);
var ov_46137 = nk_46135.call(null,om);
var n_46138 = cljs.core.name.call(null,nk_46135);
if(!((ov_46137 === nv_46136))){
if(cljs.core.truth_(nv_46136)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_46138,ov_46137,nv_46136);
} else {
var o__25368__auto___46139 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_46138,new cljs.core.Keyword(null,"value","value",305978217),nv_46136], null));
if(!(o__25368__auto___46139 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto___46139)){
o__25368__auto___46139.call(null,((function (seq__46098_46112,chunk__46100_46113,count__46101_46114,i__46102_46115,o__25368__auto___46139,ov_46137,n_46138,vec__46105_46134,nk_46135,nv_46136,seq__46098_46128__$1,temp__4425__auto___46127){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_46138,ov_46137,nv_46136);
});})(seq__46098_46112,chunk__46100_46113,count__46101_46114,i__46102_46115,o__25368__auto___46139,ov_46137,n_46138,vec__46105_46134,nk_46135,nv_46136,seq__46098_46128__$1,temp__4425__auto___46127))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_46138,ov_46137,nv_46136);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_46138,ov_46137,null);
} else {
var o__25368__auto___46140 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_46138], null));
if(!(o__25368__auto___46140 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto___46140)){
o__25368__auto___46140.call(null,((function (seq__46098_46112,chunk__46100_46113,count__46101_46114,i__46102_46115,o__25368__auto___46140,ov_46137,n_46138,vec__46105_46134,nk_46135,nv_46136,seq__46098_46128__$1,temp__4425__auto___46127){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_46138,ov_46137,null);
});})(seq__46098_46112,chunk__46100_46113,count__46101_46114,i__46102_46115,o__25368__auto___46140,ov_46137,n_46138,vec__46105_46134,nk_46135,nv_46136,seq__46098_46128__$1,temp__4425__auto___46127))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_46138,ov_46137,null);
}
} else {
}
}
}
} else {
}

var G__46141 = cljs.core.next.call(null,seq__46098_46128__$1);
var G__46142 = null;
var G__46143 = (0);
var G__46144 = (0);
seq__46098_46112 = G__46141;
chunk__46100_46113 = G__46142;
count__46101_46114 = G__46143;
i__46102_46115 = G__46144;
continue;
}
} else {
}
}
break;
}

var seq__46106 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__46108 = null;
var count__46109 = (0);
var i__46110 = (0);
while(true){
if((i__46110 < count__46109)){
var k = cljs.core._nth.call(null,chunk__46108,i__46110);
var n_46145 = cljs.core.name.call(null,k);
var ov_46146 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_46145,ov_46146,null);
} else {
var o__25368__auto___46147 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_46145], null));
if(!(o__25368__auto___46147 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto___46147)){
o__25368__auto___46147.call(null,((function (seq__46106,chunk__46108,count__46109,i__46110,o__25368__auto___46147,n_46145,ov_46146,k){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_46145,ov_46146,null);
});})(seq__46106,chunk__46108,count__46109,i__46110,o__25368__auto___46147,n_46145,ov_46146,k))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_46145,ov_46146,null);
}
} else {
}
}

var G__46148 = seq__46106;
var G__46149 = chunk__46108;
var G__46150 = count__46109;
var G__46151 = (i__46110 + (1));
seq__46106 = G__46148;
chunk__46108 = G__46149;
count__46109 = G__46150;
i__46110 = G__46151;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__46106);
if(temp__4425__auto__){
var seq__46106__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46106__$1)){
var c__24968__auto__ = cljs.core.chunk_first.call(null,seq__46106__$1);
var G__46152 = cljs.core.chunk_rest.call(null,seq__46106__$1);
var G__46153 = c__24968__auto__;
var G__46154 = cljs.core.count.call(null,c__24968__auto__);
var G__46155 = (0);
seq__46106 = G__46152;
chunk__46108 = G__46153;
count__46109 = G__46154;
i__46110 = G__46155;
continue;
} else {
var k = cljs.core.first.call(null,seq__46106__$1);
var n_46156 = cljs.core.name.call(null,k);
var ov_46157 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_46156,ov_46157,null);
} else {
var o__25368__auto___46158 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_46156], null));
if(!(o__25368__auto___46158 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto___46158)){
o__25368__auto___46158.call(null,((function (seq__46106,chunk__46108,count__46109,i__46110,o__25368__auto___46158,n_46156,ov_46157,k,seq__46106__$1,temp__4425__auto__){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_46156,ov_46157,null);
});})(seq__46106,chunk__46108,count__46109,i__46110,o__25368__auto___46158,n_46156,ov_46157,k,seq__46106__$1,temp__4425__auto__))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_46156,ov_46157,null);
}
} else {
}
}

var G__46159 = cljs.core.next.call(null,seq__46106__$1);
var G__46160 = null;
var G__46161 = (0);
var G__46162 = (0);
seq__46106 = G__46159;
chunk__46108 = G__46160;
count__46109 = G__46161;
i__46110 = G__46162;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__24937__auto__ = (function hipo$interpreter$keyed_children__GT_map_$_iter__46167(s__46168){
return (new cljs.core.LazySeq(null,(function (){
var s__46168__$1 = s__46168;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__46168__$1);
if(temp__4425__auto__){
var s__46168__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46168__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__46168__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__46170 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__46169 = (0);
while(true){
if((i__46169 < size__24936__auto__)){
var h = cljs.core._nth.call(null,c__24935__auto__,i__46169);
cljs.core.chunk_append.call(null,b__46170,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null));

var G__46171 = (i__46169 + (1));
i__46169 = G__46171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46170),hipo$interpreter$keyed_children__GT_map_$_iter__46167.call(null,cljs.core.chunk_rest.call(null,s__46168__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46170),null);
}
} else {
var h = cljs.core.first.call(null,s__46168__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null),hipo$interpreter$keyed_children__GT_map_$_iter__46167.call(null,cljs.core.rest.call(null,s__46168__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24937__auto__.call(null,v);
})());
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__24937__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__46176(s__46177){
return (new cljs.core.LazySeq(null,(function (){
var s__46177__$1 = s__46177;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__46177__$1);
if(temp__4425__auto__){
var s__46177__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46177__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__46177__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__46179 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__46178 = (0);
while(true){
if((i__46178 < size__24936__auto__)){
var ih = cljs.core._nth.call(null,c__24935__auto__,i__46178);
cljs.core.chunk_append.call(null,b__46179,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__46180 = (i__46178 + (1));
i__46178 = G__46180;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46179),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__46176.call(null,cljs.core.chunk_rest.call(null,s__46177__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46179),null);
}
} else {
var ih = cljs.core.first.call(null,s__46177__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__46176.call(null,cljs.core.rest.call(null,s__46177__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24937__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__24937__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__24937__auto__))
,v));
})());
});
hipo.interpreter.update_keyed_children_BANG_ = (function hipo$interpreter$update_keyed_children_BANG_(el,och,nch,int$){
var om = hipo.interpreter.keyed_children__GT_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__46189_46197 = cljs.core.seq.call(null,nm);
var chunk__46190_46198 = null;
var count__46191_46199 = (0);
var i__46192_46200 = (0);
while(true){
if((i__46192_46200 < count__46191_46199)){
var vec__46193_46201 = cljs.core._nth.call(null,chunk__46190_46198,i__46192_46200);
var i_46202 = cljs.core.nth.call(null,vec__46193_46201,(0),null);
var vec__46194_46203 = cljs.core.nth.call(null,vec__46193_46201,(1),null);
var ii_46204 = cljs.core.nth.call(null,vec__46194_46203,(0),null);
var h_46205 = cljs.core.nth.call(null,vec__46194_46203,(1),null);
var temp__4423__auto___46206 = cljs.core.get.call(null,om,i_46202);
if(cljs.core.truth_(temp__4423__auto___46206)){
var oh_46207 = temp__4423__auto___46206;
if(cljs.core.not.call(null,int$)){
if((oh_46207 === h_46205)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_46204,cljs.core.nth.call(null,cs,i_46202));
} else {
var ncel_46208 = el.removeChild(cljs.core.nth.call(null,cs,i_46202));
hipo.interpreter.update_BANG_.call(null,ncel_46208,oh_46207,h_46205,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_46204,ncel_46208);
}
} else {
var o__25368__auto___46209 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_46205,new cljs.core.Keyword(null,"index","index",-1531685915),ii_46204], null));
if(!(o__25368__auto___46209 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto___46209)){
o__25368__auto___46209.call(null,((function (seq__46189_46197,chunk__46190_46198,count__46191_46199,i__46192_46200,o__25368__auto___46209,oh_46207,temp__4423__auto___46206,vec__46193_46201,i_46202,vec__46194_46203,ii_46204,h_46205,om,nm,cs){
return (function (){
if((oh_46207 === h_46205)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_46204,cljs.core.nth.call(null,cs,i_46202));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_46202));
hipo.interpreter.update_BANG_.call(null,ncel,oh_46207,h_46205,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_46204,ncel);
}
});})(seq__46189_46197,chunk__46190_46198,count__46191_46199,i__46192_46200,o__25368__auto___46209,oh_46207,temp__4423__auto___46206,vec__46193_46201,i_46202,vec__46194_46203,ii_46204,h_46205,om,nm,cs))
);
} else {
if((oh_46207 === h_46205)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_46204,cljs.core.nth.call(null,cs,i_46202));
} else {
var ncel_46210 = el.removeChild(cljs.core.nth.call(null,cs,i_46202));
hipo.interpreter.update_BANG_.call(null,ncel_46210,oh_46207,h_46205,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_46204,ncel_46210);
}
}
} else {
}
}
} else {
var nel_46211 = hipo.interpreter.create_child.call(null,h_46205);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_46204,nel_46211);
} else {
var o__25368__auto___46212 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_46211,new cljs.core.Keyword(null,"index","index",-1531685915),ii_46204], null));
if(!(o__25368__auto___46212 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto___46212)){
o__25368__auto___46212.call(null,((function (seq__46189_46197,chunk__46190_46198,count__46191_46199,i__46192_46200,o__25368__auto___46212,nel_46211,temp__4423__auto___46206,vec__46193_46201,i_46202,vec__46194_46203,ii_46204,h_46205,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_46204,nel_46211);
});})(seq__46189_46197,chunk__46190_46198,count__46191_46199,i__46192_46200,o__25368__auto___46212,nel_46211,temp__4423__auto___46206,vec__46193_46201,i_46202,vec__46194_46203,ii_46204,h_46205,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_46204,nel_46211);
}
} else {
}
}
}

var G__46213 = seq__46189_46197;
var G__46214 = chunk__46190_46198;
var G__46215 = count__46191_46199;
var G__46216 = (i__46192_46200 + (1));
seq__46189_46197 = G__46213;
chunk__46190_46198 = G__46214;
count__46191_46199 = G__46215;
i__46192_46200 = G__46216;
continue;
} else {
var temp__4425__auto___46217 = cljs.core.seq.call(null,seq__46189_46197);
if(temp__4425__auto___46217){
var seq__46189_46218__$1 = temp__4425__auto___46217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46189_46218__$1)){
var c__24968__auto___46219 = cljs.core.chunk_first.call(null,seq__46189_46218__$1);
var G__46220 = cljs.core.chunk_rest.call(null,seq__46189_46218__$1);
var G__46221 = c__24968__auto___46219;
var G__46222 = cljs.core.count.call(null,c__24968__auto___46219);
var G__46223 = (0);
seq__46189_46197 = G__46220;
chunk__46190_46198 = G__46221;
count__46191_46199 = G__46222;
i__46192_46200 = G__46223;
continue;
} else {
var vec__46195_46224 = cljs.core.first.call(null,seq__46189_46218__$1);
var i_46225 = cljs.core.nth.call(null,vec__46195_46224,(0),null);
var vec__46196_46226 = cljs.core.nth.call(null,vec__46195_46224,(1),null);
var ii_46227 = cljs.core.nth.call(null,vec__46196_46226,(0),null);
var h_46228 = cljs.core.nth.call(null,vec__46196_46226,(1),null);
var temp__4423__auto___46229 = cljs.core.get.call(null,om,i_46225);
if(cljs.core.truth_(temp__4423__auto___46229)){
var oh_46230 = temp__4423__auto___46229;
if(cljs.core.not.call(null,int$)){
if((oh_46230 === h_46228)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_46227,cljs.core.nth.call(null,cs,i_46225));
} else {
var ncel_46231 = el.removeChild(cljs.core.nth.call(null,cs,i_46225));
hipo.interpreter.update_BANG_.call(null,ncel_46231,oh_46230,h_46228,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_46227,ncel_46231);
}
} else {
var o__25368__auto___46232 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_46228,new cljs.core.Keyword(null,"index","index",-1531685915),ii_46227], null));
if(!(o__25368__auto___46232 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto___46232)){
o__25368__auto___46232.call(null,((function (seq__46189_46197,chunk__46190_46198,count__46191_46199,i__46192_46200,o__25368__auto___46232,oh_46230,temp__4423__auto___46229,vec__46195_46224,i_46225,vec__46196_46226,ii_46227,h_46228,seq__46189_46218__$1,temp__4425__auto___46217,om,nm,cs){
return (function (){
if((oh_46230 === h_46228)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_46227,cljs.core.nth.call(null,cs,i_46225));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_46225));
hipo.interpreter.update_BANG_.call(null,ncel,oh_46230,h_46228,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_46227,ncel);
}
});})(seq__46189_46197,chunk__46190_46198,count__46191_46199,i__46192_46200,o__25368__auto___46232,oh_46230,temp__4423__auto___46229,vec__46195_46224,i_46225,vec__46196_46226,ii_46227,h_46228,seq__46189_46218__$1,temp__4425__auto___46217,om,nm,cs))
);
} else {
if((oh_46230 === h_46228)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_46227,cljs.core.nth.call(null,cs,i_46225));
} else {
var ncel_46233 = el.removeChild(cljs.core.nth.call(null,cs,i_46225));
hipo.interpreter.update_BANG_.call(null,ncel_46233,oh_46230,h_46228,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_46227,ncel_46233);
}
}
} else {
}
}
} else {
var nel_46234 = hipo.interpreter.create_child.call(null,h_46228);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_46227,nel_46234);
} else {
var o__25368__auto___46235 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_46234,new cljs.core.Keyword(null,"index","index",-1531685915),ii_46227], null));
if(!(o__25368__auto___46235 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto___46235)){
o__25368__auto___46235.call(null,((function (seq__46189_46197,chunk__46190_46198,count__46191_46199,i__46192_46200,o__25368__auto___46235,nel_46234,temp__4423__auto___46229,vec__46195_46224,i_46225,vec__46196_46226,ii_46227,h_46228,seq__46189_46218__$1,temp__4425__auto___46217,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_46227,nel_46234);
});})(seq__46189_46197,chunk__46190_46198,count__46191_46199,i__46192_46200,o__25368__auto___46235,nel_46234,temp__4423__auto___46229,vec__46195_46224,i_46225,vec__46196_46226,ii_46227,h_46228,seq__46189_46218__$1,temp__4425__auto___46217,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_46227,nel_46234);
}
} else {
}
}
}

var G__46236 = cljs.core.next.call(null,seq__46189_46218__$1);
var G__46237 = null;
var G__46238 = (0);
var G__46239 = (0);
seq__46189_46197 = G__46236;
chunk__46190_46198 = G__46237;
count__46191_46199 = G__46238;
i__46192_46200 = G__46239;
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
var o__25368__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__25368__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto__)){
return o__25368__auto__.call(null,((function (o__25368__auto__,d,om,nm,cs){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__25368__auto__,d,om,nm,cs))
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
var o__25368__auto___46240 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__25368__auto___46240 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto___46240)){
o__25368__auto___46240.call(null,((function (o__25368__auto___46240,oc,nc,d){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__25368__auto___46240,oc,nc,d))
);
} else {
hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
}
} else {
}
}
} else {
}

var n__25068__auto___46241 = (function (){var x__24503__auto__ = oc;
var y__24504__auto__ = nc;
return ((x__24503__auto__ < y__24504__auto__) ? x__24503__auto__ : y__24504__auto__);
})();
var i_46242 = (0);
while(true){
if((i_46242 < n__25068__auto___46241)){
var ov_46243 = cljs.core.nth.call(null,och,i_46242);
var nv_46244 = cljs.core.nth.call(null,nch,i_46242);
if(!((ov_46243 === nv_46244))){
var temp__4423__auto___46245 = hipo.dom.child_at.call(null,el,i_46242);
if(cljs.core.truth_(temp__4423__auto___46245)){
var cel_46246 = temp__4423__auto___46245;
hipo.interpreter.update_BANG_.call(null,cel_46246,ov_46243,nv_46244,int$);
} else {
}
} else {
}

var G__46247 = (i_46242 + (1));
i_46242 = G__46247;
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
var o__25368__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
if(!(o__25368__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto__)){
return o__25368__auto__.call(null,((function (o__25368__auto__,h,oc,nc,d){
return (function (){
return hipo.interpreter.append_child_BANG_.call(null,el,h);
});})(o__25368__auto__,h,oc,nc,d))
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
var o__25368__auto___46248 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
if(!(o__25368__auto___46248 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto___46248)){
o__25368__auto___46248.call(null,((function (o__25368__auto___46248,f,cs,oc,nc,d){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs);
});})(o__25368__auto___46248,f,cs,oc,nc,d))
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
var o__25368__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__25368__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto__)){
return o__25368__auto__.call(null,((function (o__25368__auto__){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(o__25368__auto__))
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
var o__25368__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel], null));
if(!(o__25368__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto__)){
return o__25368__auto__.call(null,((function (o__25368__auto__,nel){
return (function (){
return hipo.dom.replace_BANG_.call(null,el,nel);
});})(o__25368__auto__,nel))
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
var o__25368__auto___46249 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-children","update-children",1871853561),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__25368__auto___46249 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto___46249)){
o__25368__auto___46249.call(null,((function (o__25368__auto___46249,om,nm,och,nch){
return (function (){
return hipo.interpreter.update_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),int$);
});})(o__25368__auto___46249,om,nm,och,nch))
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
if(cljs.core.truth_((function (){var or__24165__auto__ = cljs.core.vector_QMARK_.call(null,h);
if(or__24165__auto__){
return or__24165__auto__;
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
var o__25368__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
if(!(o__25368__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto__)){
return o__25368__auto__.call(null,((function (o__25368__auto__){
return (function (){
return hipo.dom.replace_text_BANG_.call(null,el,h);
});})(o__25368__auto__))
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
var G__46254__delegate = function (nh,p__46252){
var vec__46253 = p__46252;
var m = cljs.core.nth.call(null,vec__46253,(0),null);
var int$ = new cljs.core.Keyword(null,"interceptor","interceptor",1127739076).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
} else {
var o__25368__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__25368__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__25368__auto__)){
return o__25368__auto__.call(null,((function (o__25368__auto__,int$,vec__46253,m,a){
return (function (){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
});})(o__25368__auto__,int$,vec__46253,m,a))
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
var G__46254 = function (nh,var_args){
var p__46252 = null;
if (arguments.length > 1) {
var G__46255__i = 0, G__46255__a = new Array(arguments.length -  1);
while (G__46255__i < G__46255__a.length) {G__46255__a[G__46255__i] = arguments[G__46255__i + 1]; ++G__46255__i;}
  p__46252 = new cljs.core.IndexedSeq(G__46255__a,0);
} 
return G__46254__delegate.call(this,nh,p__46252);};
G__46254.cljs$lang$maxFixedArity = 1;
G__46254.cljs$lang$applyTo = (function (arglist__46256){
var nh = cljs.core.first(arglist__46256);
var p__46252 = cljs.core.rest(arglist__46256);
return G__46254__delegate(nh,p__46252);
});
G__46254.cljs$core$IFn$_invoke$arity$variadic = G__46254__delegate;
return G__46254;
})()
;})(a))
], null);
});

//# sourceMappingURL=interpreter.js.map