// Compiled by ClojureScript 1.8.34 {}
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
hipo.interpreter.append_child_BANG_ = (function hipo$interpreter$append_child_BANG_(el,o){
return el.appendChild(hipo.interpreter.create_child.call(null,o));
});
hipo.interpreter.append_children_BANG_ = (function hipo$interpreter$append_children_BANG_(el,v){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

var v__$1 = hipo.hiccup.flatten_children.call(null,v);
while(true){
if(cljs.core.truth_(hipo.fast.emptyv_QMARK_.call(null,v__$1))){
return null;
} else {
var temp__4655__auto___292060 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___292060)){
var h_292061 = temp__4655__auto___292060;
hipo.interpreter.append_child_BANG_.call(null,el,h_292061);
} else {
}

var G__292062 = cljs.core.rest.call(null,v__$1);
v__$1 = G__292062;
continue;
}
break;
}
});
hipo.interpreter.create_vector = (function hipo$interpreter$create_vector(h){
if(cljs.core.vector_QMARK_.call(null,h)){
} else {
throw (new Error("Assert failed: (vector? h)"));
}

var tag = hipo.hiccup.tag.call(null,h);
var attrs = hipo.hiccup.attributes.call(null,h);
var children = hipo.hiccup.children.call(null,h);
var el = hipo.dom.create_element.call(null,hipo.hiccup.tag__GT_ns.call(null,tag),tag);
var seq__292072_292083 = cljs.core.seq.call(null,attrs);
var chunk__292073_292084 = null;
var count__292074_292085 = (0);
var i__292075_292086 = (0);
while(true){
if((i__292075_292086 < count__292074_292085)){
var vec__292076_292087 = cljs.core._nth.call(null,chunk__292073_292084,i__292075_292086);
var k_292088 = cljs.core.nth.call(null,vec__292076_292087,(0),null);
var v_292089 = cljs.core.nth.call(null,vec__292076_292087,(1),null);
if(cljs.core.truth_(v_292089)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_292088),null,v_292089);
} else {
}

var G__292090 = seq__292072_292083;
var G__292091 = chunk__292073_292084;
var G__292092 = count__292074_292085;
var G__292093 = (i__292075_292086 + (1));
seq__292072_292083 = G__292090;
chunk__292073_292084 = G__292091;
count__292074_292085 = G__292092;
i__292075_292086 = G__292093;
continue;
} else {
var temp__4657__auto___292094 = cljs.core.seq.call(null,seq__292072_292083);
if(temp__4657__auto___292094){
var seq__292072_292095__$1 = temp__4657__auto___292094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292072_292095__$1)){
var c__36002__auto___292096 = cljs.core.chunk_first.call(null,seq__292072_292095__$1);
var G__292097 = cljs.core.chunk_rest.call(null,seq__292072_292095__$1);
var G__292098 = c__36002__auto___292096;
var G__292099 = cljs.core.count.call(null,c__36002__auto___292096);
var G__292100 = (0);
seq__292072_292083 = G__292097;
chunk__292073_292084 = G__292098;
count__292074_292085 = G__292099;
i__292075_292086 = G__292100;
continue;
} else {
var vec__292077_292102 = cljs.core.first.call(null,seq__292072_292095__$1);
var k_292103 = cljs.core.nth.call(null,vec__292077_292102,(0),null);
var v_292104 = cljs.core.nth.call(null,vec__292077_292102,(1),null);
if(cljs.core.truth_(v_292104)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_292103),null,v_292104);
} else {
}

var G__292106 = cljs.core.next.call(null,seq__292072_292095__$1);
var G__292107 = null;
var G__292108 = (0);
var G__292109 = (0);
seq__292072_292083 = G__292106;
chunk__292073_292084 = G__292107;
count__292074_292085 = G__292108;
i__292075_292086 = G__292109;
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
var temp__4655__auto__ = el.parentElement;
if(cljs.core.truth_(temp__4655__auto__)){
var pel = temp__4655__auto__;
var G__292110 = pel;
el = G__292110;
continue;
} else {
(el["hipo-partially-compiled"] = true);

return el;
}
break;
}
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o){
if(cljs.core.truth_((function (){var or__35191__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return cljs.core.vector_QMARK_.call(null,o);
}
})())){
} else {
throw (new Error("Assert failed: (or (hic/literal? o) (vector? o))"));
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
throw (new Error("Assert failed: (not (nil? o))"));
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
throw (new Error("Assert failed: (not (nil? o))"));
}

return hipo.interpreter.mark_as_partially_compiled_BANG_.call(null,((cljs.core.seq_QMARK_.call(null,o))?(function (){var f = document.createDocumentFragment();
hipo.interpreter.append_children_BANG_.call(null,f,cljs.core.vec.call(null,o));

return f;
})():hipo.interpreter.create_child.call(null,o)));
});
hipo.interpreter.update_attributes_BANG_ = (function hipo$interpreter$update_attributes_BANG_(el,om,nm,int$){
var seq__292128_292144 = cljs.core.seq.call(null,nm);
var chunk__292130_292145 = null;
var count__292131_292146 = (0);
var i__292132_292147 = (0);
while(true){
if((i__292132_292147 < count__292131_292146)){
var vec__292134_292148 = cljs.core._nth.call(null,chunk__292130_292145,i__292132_292147);
var nk_292149 = cljs.core.nth.call(null,vec__292134_292148,(0),null);
var nv_292150 = cljs.core.nth.call(null,vec__292134_292148,(1),null);
var ov_292151 = nk_292149.call(null,om);
var n_292152 = cljs.core.name.call(null,nk_292149);
if(!((ov_292151 === nv_292150))){
if(cljs.core.truth_(nv_292150)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_292152,ov_292151,nv_292150);
} else {
var o__36322__auto___292154 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_292152,new cljs.core.Keyword(null,"value","value",305978217),nv_292150], null));
if(!(o__36322__auto___292154 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___292154)){
o__36322__auto___292154.call(null,((function (seq__292128_292144,chunk__292130_292145,count__292131_292146,i__292132_292147,o__36322__auto___292154,ov_292151,n_292152,vec__292134_292148,nk_292149,nv_292150){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_292152,ov_292151,nv_292150);
});})(seq__292128_292144,chunk__292130_292145,count__292131_292146,i__292132_292147,o__36322__auto___292154,ov_292151,n_292152,vec__292134_292148,nk_292149,nv_292150))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_292152,ov_292151,nv_292150);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_292152,ov_292151,null);
} else {
var o__36322__auto___292161 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_292152], null));
if(!(o__36322__auto___292161 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___292161)){
o__36322__auto___292161.call(null,((function (seq__292128_292144,chunk__292130_292145,count__292131_292146,i__292132_292147,o__36322__auto___292161,ov_292151,n_292152,vec__292134_292148,nk_292149,nv_292150){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_292152,ov_292151,null);
});})(seq__292128_292144,chunk__292130_292145,count__292131_292146,i__292132_292147,o__36322__auto___292161,ov_292151,n_292152,vec__292134_292148,nk_292149,nv_292150))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_292152,ov_292151,null);
}
} else {
}
}
}
} else {
}

var G__292166 = seq__292128_292144;
var G__292167 = chunk__292130_292145;
var G__292168 = count__292131_292146;
var G__292169 = (i__292132_292147 + (1));
seq__292128_292144 = G__292166;
chunk__292130_292145 = G__292167;
count__292131_292146 = G__292168;
i__292132_292147 = G__292169;
continue;
} else {
var temp__4657__auto___292172 = cljs.core.seq.call(null,seq__292128_292144);
if(temp__4657__auto___292172){
var seq__292128_292178__$1 = temp__4657__auto___292172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292128_292178__$1)){
var c__36002__auto___292179 = cljs.core.chunk_first.call(null,seq__292128_292178__$1);
var G__292180 = cljs.core.chunk_rest.call(null,seq__292128_292178__$1);
var G__292181 = c__36002__auto___292179;
var G__292182 = cljs.core.count.call(null,c__36002__auto___292179);
var G__292183 = (0);
seq__292128_292144 = G__292180;
chunk__292130_292145 = G__292181;
count__292131_292146 = G__292182;
i__292132_292147 = G__292183;
continue;
} else {
var vec__292135_292185 = cljs.core.first.call(null,seq__292128_292178__$1);
var nk_292186 = cljs.core.nth.call(null,vec__292135_292185,(0),null);
var nv_292187 = cljs.core.nth.call(null,vec__292135_292185,(1),null);
var ov_292192 = nk_292186.call(null,om);
var n_292193 = cljs.core.name.call(null,nk_292186);
if(!((ov_292192 === nv_292187))){
if(cljs.core.truth_(nv_292187)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_292193,ov_292192,nv_292187);
} else {
var o__36322__auto___292194 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_292193,new cljs.core.Keyword(null,"value","value",305978217),nv_292187], null));
if(!(o__36322__auto___292194 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___292194)){
o__36322__auto___292194.call(null,((function (seq__292128_292144,chunk__292130_292145,count__292131_292146,i__292132_292147,o__36322__auto___292194,ov_292192,n_292193,vec__292135_292185,nk_292186,nv_292187,seq__292128_292178__$1,temp__4657__auto___292172){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_292193,ov_292192,nv_292187);
});})(seq__292128_292144,chunk__292130_292145,count__292131_292146,i__292132_292147,o__36322__auto___292194,ov_292192,n_292193,vec__292135_292185,nk_292186,nv_292187,seq__292128_292178__$1,temp__4657__auto___292172))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_292193,ov_292192,nv_292187);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_292193,ov_292192,null);
} else {
var o__36322__auto___292211 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_292193], null));
if(!(o__36322__auto___292211 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___292211)){
o__36322__auto___292211.call(null,((function (seq__292128_292144,chunk__292130_292145,count__292131_292146,i__292132_292147,o__36322__auto___292211,ov_292192,n_292193,vec__292135_292185,nk_292186,nv_292187,seq__292128_292178__$1,temp__4657__auto___292172){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_292193,ov_292192,null);
});})(seq__292128_292144,chunk__292130_292145,count__292131_292146,i__292132_292147,o__36322__auto___292211,ov_292192,n_292193,vec__292135_292185,nk_292186,nv_292187,seq__292128_292178__$1,temp__4657__auto___292172))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_292193,ov_292192,null);
}
} else {
}
}
}
} else {
}

var G__292223 = cljs.core.next.call(null,seq__292128_292178__$1);
var G__292224 = null;
var G__292225 = (0);
var G__292226 = (0);
seq__292128_292144 = G__292223;
chunk__292130_292145 = G__292224;
count__292131_292146 = G__292225;
i__292132_292147 = G__292226;
continue;
}
} else {
}
}
break;
}

var seq__292136 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__292138 = null;
var count__292139 = (0);
var i__292140 = (0);
while(true){
if((i__292140 < count__292139)){
var k = cljs.core._nth.call(null,chunk__292138,i__292140);
var n_292236 = cljs.core.name.call(null,k);
var ov_292237 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_292236,ov_292237,null);
} else {
var o__36322__auto___292241 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_292236], null));
if(!(o__36322__auto___292241 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___292241)){
o__36322__auto___292241.call(null,((function (seq__292136,chunk__292138,count__292139,i__292140,o__36322__auto___292241,n_292236,ov_292237,k){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_292236,ov_292237,null);
});})(seq__292136,chunk__292138,count__292139,i__292140,o__36322__auto___292241,n_292236,ov_292237,k))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_292236,ov_292237,null);
}
} else {
}
}

var G__292250 = seq__292136;
var G__292251 = chunk__292138;
var G__292252 = count__292139;
var G__292253 = (i__292140 + (1));
seq__292136 = G__292250;
chunk__292138 = G__292251;
count__292139 = G__292252;
i__292140 = G__292253;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__292136);
if(temp__4657__auto__){
var seq__292136__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292136__$1)){
var c__36002__auto__ = cljs.core.chunk_first.call(null,seq__292136__$1);
var G__292261 = cljs.core.chunk_rest.call(null,seq__292136__$1);
var G__292262 = c__36002__auto__;
var G__292263 = cljs.core.count.call(null,c__36002__auto__);
var G__292264 = (0);
seq__292136 = G__292261;
chunk__292138 = G__292262;
count__292139 = G__292263;
i__292140 = G__292264;
continue;
} else {
var k = cljs.core.first.call(null,seq__292136__$1);
var n_292269 = cljs.core.name.call(null,k);
var ov_292270 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_292269,ov_292270,null);
} else {
var o__36322__auto___292271 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_292269], null));
if(!(o__36322__auto___292271 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___292271)){
o__36322__auto___292271.call(null,((function (seq__292136,chunk__292138,count__292139,i__292140,o__36322__auto___292271,n_292269,ov_292270,k,seq__292136__$1,temp__4657__auto__){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_292269,ov_292270,null);
});})(seq__292136,chunk__292138,count__292139,i__292140,o__36322__auto___292271,n_292269,ov_292270,k,seq__292136__$1,temp__4657__auto__))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_292269,ov_292270,null);
}
} else {
}
}

var G__292272 = cljs.core.next.call(null,seq__292136__$1);
var G__292273 = null;
var G__292274 = (0);
var G__292275 = (0);
seq__292136 = G__292272;
chunk__292138 = G__292273;
count__292139 = G__292274;
i__292140 = G__292275;
continue;
}
} else {
return null;
}
}
break;
}
});
hipo.interpreter.child_key = (function hipo$interpreter$child_key(h){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,h));
});
hipo.interpreter.keyed_children__GT_map = (function hipo$interpreter$keyed_children__GT_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__35971__auto__ = (function hipo$interpreter$keyed_children__GT_map_$_iter__292280(s__292281){
return (new cljs.core.LazySeq(null,(function (){
var s__292281__$1 = s__292281;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__292281__$1);
if(temp__4657__auto__){
var s__292281__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__292281__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__292281__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__292283 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__292282 = (0);
while(true){
if((i__292282 < size__35970__auto__)){
var h = cljs.core._nth.call(null,c__35969__auto__,i__292282);
cljs.core.chunk_append.call(null,b__292283,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null));

var G__292284 = (i__292282 + (1));
i__292282 = G__292284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292283),hipo$interpreter$keyed_children__GT_map_$_iter__292280.call(null,cljs.core.chunk_rest.call(null,s__292281__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292283),null);
}
} else {
var h = cljs.core.first.call(null,s__292281__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null),hipo$interpreter$keyed_children__GT_map_$_iter__292280.call(null,cljs.core.rest.call(null,s__292281__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35971__auto__.call(null,v);
})());
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__35971__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__292291(s__292292){
return (new cljs.core.LazySeq(null,(function (){
var s__292292__$1 = s__292292;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__292292__$1);
if(temp__4657__auto__){
var s__292292__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__292292__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__292292__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__292294 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__292293 = (0);
while(true){
if((i__292293 < size__35970__auto__)){
var ih = cljs.core._nth.call(null,c__35969__auto__,i__292293);
cljs.core.chunk_append.call(null,b__292294,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__292298 = (i__292293 + (1));
i__292293 = G__292298;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292294),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__292291.call(null,cljs.core.chunk_rest.call(null,s__292292__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__292294),null);
}
} else {
var ih = cljs.core.first.call(null,s__292292__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__292291.call(null,cljs.core.rest.call(null,s__292292__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35971__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__35971__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__35971__auto__))
,v));
})());
});
hipo.interpreter.update_keyed_children_BANG_ = (function hipo$interpreter$update_keyed_children_BANG_(el,och,nch,int$){
var om = hipo.interpreter.keyed_children__GT_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__292322_292346 = cljs.core.seq.call(null,nm);
var chunk__292323_292347 = null;
var count__292324_292348 = (0);
var i__292325_292349 = (0);
while(true){
if((i__292325_292349 < count__292324_292348)){
var vec__292327_292350 = cljs.core._nth.call(null,chunk__292323_292347,i__292325_292349);
var i_292351 = cljs.core.nth.call(null,vec__292327_292350,(0),null);
var vec__292328_292352 = cljs.core.nth.call(null,vec__292327_292350,(1),null);
var ii_292353 = cljs.core.nth.call(null,vec__292328_292352,(0),null);
var h_292354 = cljs.core.nth.call(null,vec__292328_292352,(1),null);
var temp__4655__auto___292360 = cljs.core.get.call(null,om,i_292351);
if(cljs.core.truth_(temp__4655__auto___292360)){
var oh_292362 = temp__4655__auto___292360;
if(cljs.core.not.call(null,int$)){
if((oh_292362 === h_292354)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_292353,cljs.core.nth.call(null,cs,i_292351));
} else {
var ncel_292363 = el.removeChild(cljs.core.nth.call(null,cs,i_292351));
hipo.interpreter.update_BANG_.call(null,ncel_292363,oh_292362,h_292354,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_292353,ncel_292363);
}
} else {
var o__36322__auto___292366 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_292354,new cljs.core.Keyword(null,"index","index",-1531685915),ii_292353], null));
if(!(o__36322__auto___292366 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___292366)){
o__36322__auto___292366.call(null,((function (seq__292322_292346,chunk__292323_292347,count__292324_292348,i__292325_292349,o__36322__auto___292366,oh_292362,temp__4655__auto___292360,vec__292327_292350,i_292351,vec__292328_292352,ii_292353,h_292354,om,nm,cs){
return (function (){
if((oh_292362 === h_292354)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_292353,cljs.core.nth.call(null,cs,i_292351));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_292351));
hipo.interpreter.update_BANG_.call(null,ncel,oh_292362,h_292354,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_292353,ncel);
}
});})(seq__292322_292346,chunk__292323_292347,count__292324_292348,i__292325_292349,o__36322__auto___292366,oh_292362,temp__4655__auto___292360,vec__292327_292350,i_292351,vec__292328_292352,ii_292353,h_292354,om,nm,cs))
);
} else {
if((oh_292362 === h_292354)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_292353,cljs.core.nth.call(null,cs,i_292351));
} else {
var ncel_292374 = el.removeChild(cljs.core.nth.call(null,cs,i_292351));
hipo.interpreter.update_BANG_.call(null,ncel_292374,oh_292362,h_292354,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_292353,ncel_292374);
}
}
} else {
}
}
} else {
var nel_292375 = hipo.interpreter.create_child.call(null,h_292354);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_292353,nel_292375);
} else {
var o__36322__auto___292376 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_292375,new cljs.core.Keyword(null,"index","index",-1531685915),ii_292353], null));
if(!(o__36322__auto___292376 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___292376)){
o__36322__auto___292376.call(null,((function (seq__292322_292346,chunk__292323_292347,count__292324_292348,i__292325_292349,o__36322__auto___292376,nel_292375,temp__4655__auto___292360,vec__292327_292350,i_292351,vec__292328_292352,ii_292353,h_292354,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_292353,nel_292375);
});})(seq__292322_292346,chunk__292323_292347,count__292324_292348,i__292325_292349,o__36322__auto___292376,nel_292375,temp__4655__auto___292360,vec__292327_292350,i_292351,vec__292328_292352,ii_292353,h_292354,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_292353,nel_292375);
}
} else {
}
}
}

var G__292380 = seq__292322_292346;
var G__292381 = chunk__292323_292347;
var G__292382 = count__292324_292348;
var G__292383 = (i__292325_292349 + (1));
seq__292322_292346 = G__292380;
chunk__292323_292347 = G__292381;
count__292324_292348 = G__292382;
i__292325_292349 = G__292383;
continue;
} else {
var temp__4657__auto___292384 = cljs.core.seq.call(null,seq__292322_292346);
if(temp__4657__auto___292384){
var seq__292322_292385__$1 = temp__4657__auto___292384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292322_292385__$1)){
var c__36002__auto___292386 = cljs.core.chunk_first.call(null,seq__292322_292385__$1);
var G__292389 = cljs.core.chunk_rest.call(null,seq__292322_292385__$1);
var G__292390 = c__36002__auto___292386;
var G__292391 = cljs.core.count.call(null,c__36002__auto___292386);
var G__292392 = (0);
seq__292322_292346 = G__292389;
chunk__292323_292347 = G__292390;
count__292324_292348 = G__292391;
i__292325_292349 = G__292392;
continue;
} else {
var vec__292331_292394 = cljs.core.first.call(null,seq__292322_292385__$1);
var i_292395 = cljs.core.nth.call(null,vec__292331_292394,(0),null);
var vec__292332_292396 = cljs.core.nth.call(null,vec__292331_292394,(1),null);
var ii_292397 = cljs.core.nth.call(null,vec__292332_292396,(0),null);
var h_292398 = cljs.core.nth.call(null,vec__292332_292396,(1),null);
var temp__4655__auto___292402 = cljs.core.get.call(null,om,i_292395);
if(cljs.core.truth_(temp__4655__auto___292402)){
var oh_292403 = temp__4655__auto___292402;
if(cljs.core.not.call(null,int$)){
if((oh_292403 === h_292398)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_292397,cljs.core.nth.call(null,cs,i_292395));
} else {
var ncel_292404 = el.removeChild(cljs.core.nth.call(null,cs,i_292395));
hipo.interpreter.update_BANG_.call(null,ncel_292404,oh_292403,h_292398,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_292397,ncel_292404);
}
} else {
var o__36322__auto___292415 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_292398,new cljs.core.Keyword(null,"index","index",-1531685915),ii_292397], null));
if(!(o__36322__auto___292415 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___292415)){
o__36322__auto___292415.call(null,((function (seq__292322_292346,chunk__292323_292347,count__292324_292348,i__292325_292349,o__36322__auto___292415,oh_292403,temp__4655__auto___292402,vec__292331_292394,i_292395,vec__292332_292396,ii_292397,h_292398,seq__292322_292385__$1,temp__4657__auto___292384,om,nm,cs){
return (function (){
if((oh_292403 === h_292398)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_292397,cljs.core.nth.call(null,cs,i_292395));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_292395));
hipo.interpreter.update_BANG_.call(null,ncel,oh_292403,h_292398,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_292397,ncel);
}
});})(seq__292322_292346,chunk__292323_292347,count__292324_292348,i__292325_292349,o__36322__auto___292415,oh_292403,temp__4655__auto___292402,vec__292331_292394,i_292395,vec__292332_292396,ii_292397,h_292398,seq__292322_292385__$1,temp__4657__auto___292384,om,nm,cs))
);
} else {
if((oh_292403 === h_292398)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_292397,cljs.core.nth.call(null,cs,i_292395));
} else {
var ncel_292427 = el.removeChild(cljs.core.nth.call(null,cs,i_292395));
hipo.interpreter.update_BANG_.call(null,ncel_292427,oh_292403,h_292398,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_292397,ncel_292427);
}
}
} else {
}
}
} else {
var nel_292429 = hipo.interpreter.create_child.call(null,h_292398);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_292397,nel_292429);
} else {
var o__36322__auto___292430 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_292429,new cljs.core.Keyword(null,"index","index",-1531685915),ii_292397], null));
if(!(o__36322__auto___292430 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___292430)){
o__36322__auto___292430.call(null,((function (seq__292322_292346,chunk__292323_292347,count__292324_292348,i__292325_292349,o__36322__auto___292430,nel_292429,temp__4655__auto___292402,vec__292331_292394,i_292395,vec__292332_292396,ii_292397,h_292398,seq__292322_292385__$1,temp__4657__auto___292384,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_292397,nel_292429);
});})(seq__292322_292346,chunk__292323_292347,count__292324_292348,i__292325_292349,o__36322__auto___292430,nel_292429,temp__4655__auto___292402,vec__292331_292394,i_292395,vec__292332_292396,ii_292397,h_292398,seq__292322_292385__$1,temp__4657__auto___292384,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_292397,nel_292429);
}
} else {
}
}
}

var G__292437 = cljs.core.next.call(null,seq__292322_292385__$1);
var G__292438 = null;
var G__292439 = (0);
var G__292440 = (0);
seq__292322_292346 = G__292437;
chunk__292323_292347 = G__292438;
count__292324_292348 = G__292439;
i__292325_292349 = G__292440;
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
var o__36322__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__36322__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto__)){
return o__36322__auto__.call(null,((function (o__36322__auto__,d,om,nm,cs){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__36322__auto__,d,om,nm,cs))
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
var o__36322__auto___292468 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__36322__auto___292468 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___292468)){
o__36322__auto___292468.call(null,((function (o__36322__auto___292468,oc,nc,d){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__36322__auto___292468,oc,nc,d))
);
} else {
hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
}
} else {
}
}
} else {
}

var n__36105__auto___292473 = (function (){var x__35529__auto__ = oc;
var y__35530__auto__ = nc;
return ((x__35529__auto__ < y__35530__auto__) ? x__35529__auto__ : y__35530__auto__);
})();
var i_292477 = (0);
while(true){
if((i_292477 < n__36105__auto___292473)){
var ov_292479 = cljs.core.nth.call(null,och,i_292477);
var nv_292480 = cljs.core.nth.call(null,nch,i_292477);
if(!((ov_292479 === nv_292480))){
var temp__4655__auto___292481 = hipo.dom.child_at.call(null,el,i_292477);
if(cljs.core.truth_(temp__4655__auto___292481)){
var cel_292484 = temp__4655__auto___292481;
hipo.interpreter.update_BANG_.call(null,cel_292484,ov_292479,nv_292480,int$);
} else {
}
} else {
}

var G__292486 = (i_292477 + (1));
i_292477 = G__292486;
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
var o__36322__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
if(!(o__36322__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto__)){
return o__36322__auto__.call(null,((function (o__36322__auto__,h,oc,nc,d){
return (function (){
return hipo.interpreter.append_child_BANG_.call(null,el,h);
});})(o__36322__auto__,h,oc,nc,d))
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
var o__36322__auto___292499 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
if(!(o__36322__auto___292499 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___292499)){
o__36322__auto___292499.call(null,((function (o__36322__auto___292499,f,cs,oc,nc,d){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs);
});})(o__36322__auto___292499,f,cs,oc,nc,d))
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
var o__36322__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36322__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto__)){
return o__36322__auto__.call(null,((function (o__36322__auto__){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(o__36322__auto__))
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
throw (new Error("Assert failed: (vector? oh)"));
}

if(cljs.core.vector_QMARK_.call(null,nh)){
} else {
throw (new Error("Assert failed: (vector? nh)"));
}

if(!((hipo.hiccup.tag.call(null,nh) === hipo.hiccup.tag.call(null,oh)))){
var nel = hipo.interpreter.create.call(null,nh);
if(cljs.core.not.call(null,int$)){
return hipo.dom.replace_BANG_.call(null,el,nel);
} else {
var o__36322__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel], null));
if(!(o__36322__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto__)){
return o__36322__auto__.call(null,((function (o__36322__auto__,nel){
return (function (){
return hipo.dom.replace_BANG_.call(null,el,nel);
});})(o__36322__auto__,nel))
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
var o__36322__auto___292597 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-children","update-children",1871853561),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36322__auto___292597 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___292597)){
o__36322__auto___292597.call(null,((function (o__36322__auto___292597,om,nm,och,nch){
return (function (){
return hipo.interpreter.update_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),int$);
});})(o__36322__auto___292597,om,nm,och,nch))
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
if(cljs.core.truth_((function (){var or__35191__auto__ = cljs.core.vector_QMARK_.call(null,h);
if(or__35191__auto__){
return or__35191__auto__;
} else {
return hipo.hiccup.literal_QMARK_.call(null,h);
}
})())){
} else {
throw (new Error("Assert failed: (or (vector? h) (hic/literal? h))"));
}

if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,h))){
if(!((ph === h))){
if(cljs.core.not.call(null,int$)){
return hipo.dom.replace_text_BANG_.call(null,el,h);
} else {
var o__36322__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
if(!(o__36322__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto__)){
return o__36322__auto__.call(null,((function (o__36322__auto__){
return (function (){
return hipo.dom.replace_text_BANG_.call(null,el,h);
});})(o__36322__auto__))
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
var G__292602__delegate = function (nh,p__292600){
var vec__292601 = p__292600;
var m = cljs.core.nth.call(null,vec__292601,(0),null);
var int$ = new cljs.core.Keyword(null,"interceptor","interceptor",1127739076).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
} else {
var o__36322__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36322__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto__)){
return o__36322__auto__.call(null,((function (o__36322__auto__,int$,vec__292601,m,a){
return (function (){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
});})(o__36322__auto__,int$,vec__292601,m,a))
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
var G__292602 = function (nh,var_args){
var p__292600 = null;
if (arguments.length > 1) {
var G__292603__i = 0, G__292603__a = new Array(arguments.length -  1);
while (G__292603__i < G__292603__a.length) {G__292603__a[G__292603__i] = arguments[G__292603__i + 1]; ++G__292603__i;}
  p__292600 = new cljs.core.IndexedSeq(G__292603__a,0);
} 
return G__292602__delegate.call(this,nh,p__292600);};
G__292602.cljs$lang$maxFixedArity = 1;
G__292602.cljs$lang$applyTo = (function (arglist__292604){
var nh = cljs.core.first(arglist__292604);
var p__292600 = cljs.core.rest(arglist__292604);
return G__292602__delegate(nh,p__292600);
});
G__292602.cljs$core$IFn$_invoke$arity$variadic = G__292602__delegate;
return G__292602;
})()
;})(a))
], null);
});

//# sourceMappingURL=interpreter.js.map?rel=1459068550746