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
var temp__4655__auto___449068 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___449068)){
var h_449070 = temp__4655__auto___449068;
hipo.interpreter.append_child_BANG_.call(null,el,h_449070);
} else {
}

var G__449071 = cljs.core.rest.call(null,v__$1);
v__$1 = G__449071;
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
var seq__449080_449086 = cljs.core.seq.call(null,attrs);
var chunk__449081_449087 = null;
var count__449082_449088 = (0);
var i__449083_449089 = (0);
while(true){
if((i__449083_449089 < count__449082_449088)){
var vec__449084_449090 = cljs.core._nth.call(null,chunk__449081_449087,i__449083_449089);
var k_449091 = cljs.core.nth.call(null,vec__449084_449090,(0),null);
var v_449092 = cljs.core.nth.call(null,vec__449084_449090,(1),null);
if(cljs.core.truth_(v_449092)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_449091),null,v_449092);
} else {
}

var G__449093 = seq__449080_449086;
var G__449094 = chunk__449081_449087;
var G__449095 = count__449082_449088;
var G__449096 = (i__449083_449089 + (1));
seq__449080_449086 = G__449093;
chunk__449081_449087 = G__449094;
count__449082_449088 = G__449095;
i__449083_449089 = G__449096;
continue;
} else {
var temp__4657__auto___449097 = cljs.core.seq.call(null,seq__449080_449086);
if(temp__4657__auto___449097){
var seq__449080_449098__$1 = temp__4657__auto___449097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__449080_449098__$1)){
var c__36002__auto___449101 = cljs.core.chunk_first.call(null,seq__449080_449098__$1);
var G__449102 = cljs.core.chunk_rest.call(null,seq__449080_449098__$1);
var G__449103 = c__36002__auto___449101;
var G__449104 = cljs.core.count.call(null,c__36002__auto___449101);
var G__449105 = (0);
seq__449080_449086 = G__449102;
chunk__449081_449087 = G__449103;
count__449082_449088 = G__449104;
i__449083_449089 = G__449105;
continue;
} else {
var vec__449085_449107 = cljs.core.first.call(null,seq__449080_449098__$1);
var k_449108 = cljs.core.nth.call(null,vec__449085_449107,(0),null);
var v_449109 = cljs.core.nth.call(null,vec__449085_449107,(1),null);
if(cljs.core.truth_(v_449109)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_449108),null,v_449109);
} else {
}

var G__449110 = cljs.core.next.call(null,seq__449080_449098__$1);
var G__449111 = null;
var G__449112 = (0);
var G__449113 = (0);
seq__449080_449086 = G__449110;
chunk__449081_449087 = G__449111;
count__449082_449088 = G__449112;
i__449083_449089 = G__449113;
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
var G__449115 = pel;
el = G__449115;
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
var seq__449145_449164 = cljs.core.seq.call(null,nm);
var chunk__449147_449165 = null;
var count__449148_449166 = (0);
var i__449149_449167 = (0);
while(true){
if((i__449149_449167 < count__449148_449166)){
var vec__449151_449168 = cljs.core._nth.call(null,chunk__449147_449165,i__449149_449167);
var nk_449169 = cljs.core.nth.call(null,vec__449151_449168,(0),null);
var nv_449170 = cljs.core.nth.call(null,vec__449151_449168,(1),null);
var ov_449171 = nk_449169.call(null,om);
var n_449172 = cljs.core.name.call(null,nk_449169);
if(!((ov_449171 === nv_449170))){
if(cljs.core.truth_(nv_449170)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_449172,ov_449171,nv_449170);
} else {
var o__36322__auto___449173 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_449172,new cljs.core.Keyword(null,"value","value",305978217),nv_449170], null));
if(!(o__36322__auto___449173 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___449173)){
o__36322__auto___449173.call(null,((function (seq__449145_449164,chunk__449147_449165,count__449148_449166,i__449149_449167,o__36322__auto___449173,ov_449171,n_449172,vec__449151_449168,nk_449169,nv_449170){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_449172,ov_449171,nv_449170);
});})(seq__449145_449164,chunk__449147_449165,count__449148_449166,i__449149_449167,o__36322__auto___449173,ov_449171,n_449172,vec__449151_449168,nk_449169,nv_449170))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_449172,ov_449171,nv_449170);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_449172,ov_449171,null);
} else {
var o__36322__auto___449174 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_449172], null));
if(!(o__36322__auto___449174 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___449174)){
o__36322__auto___449174.call(null,((function (seq__449145_449164,chunk__449147_449165,count__449148_449166,i__449149_449167,o__36322__auto___449174,ov_449171,n_449172,vec__449151_449168,nk_449169,nv_449170){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_449172,ov_449171,null);
});})(seq__449145_449164,chunk__449147_449165,count__449148_449166,i__449149_449167,o__36322__auto___449174,ov_449171,n_449172,vec__449151_449168,nk_449169,nv_449170))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_449172,ov_449171,null);
}
} else {
}
}
}
} else {
}

var G__449175 = seq__449145_449164;
var G__449176 = chunk__449147_449165;
var G__449177 = count__449148_449166;
var G__449178 = (i__449149_449167 + (1));
seq__449145_449164 = G__449175;
chunk__449147_449165 = G__449176;
count__449148_449166 = G__449177;
i__449149_449167 = G__449178;
continue;
} else {
var temp__4657__auto___449179 = cljs.core.seq.call(null,seq__449145_449164);
if(temp__4657__auto___449179){
var seq__449145_449180__$1 = temp__4657__auto___449179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__449145_449180__$1)){
var c__36002__auto___449182 = cljs.core.chunk_first.call(null,seq__449145_449180__$1);
var G__449184 = cljs.core.chunk_rest.call(null,seq__449145_449180__$1);
var G__449185 = c__36002__auto___449182;
var G__449186 = cljs.core.count.call(null,c__36002__auto___449182);
var G__449187 = (0);
seq__449145_449164 = G__449184;
chunk__449147_449165 = G__449185;
count__449148_449166 = G__449186;
i__449149_449167 = G__449187;
continue;
} else {
var vec__449155_449190 = cljs.core.first.call(null,seq__449145_449180__$1);
var nk_449191 = cljs.core.nth.call(null,vec__449155_449190,(0),null);
var nv_449192 = cljs.core.nth.call(null,vec__449155_449190,(1),null);
var ov_449194 = nk_449191.call(null,om);
var n_449195 = cljs.core.name.call(null,nk_449191);
if(!((ov_449194 === nv_449192))){
if(cljs.core.truth_(nv_449192)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_449195,ov_449194,nv_449192);
} else {
var o__36322__auto___449197 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_449195,new cljs.core.Keyword(null,"value","value",305978217),nv_449192], null));
if(!(o__36322__auto___449197 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___449197)){
o__36322__auto___449197.call(null,((function (seq__449145_449164,chunk__449147_449165,count__449148_449166,i__449149_449167,o__36322__auto___449197,ov_449194,n_449195,vec__449155_449190,nk_449191,nv_449192,seq__449145_449180__$1,temp__4657__auto___449179){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_449195,ov_449194,nv_449192);
});})(seq__449145_449164,chunk__449147_449165,count__449148_449166,i__449149_449167,o__36322__auto___449197,ov_449194,n_449195,vec__449155_449190,nk_449191,nv_449192,seq__449145_449180__$1,temp__4657__auto___449179))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_449195,ov_449194,nv_449192);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_449195,ov_449194,null);
} else {
var o__36322__auto___449199 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_449195], null));
if(!(o__36322__auto___449199 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___449199)){
o__36322__auto___449199.call(null,((function (seq__449145_449164,chunk__449147_449165,count__449148_449166,i__449149_449167,o__36322__auto___449199,ov_449194,n_449195,vec__449155_449190,nk_449191,nv_449192,seq__449145_449180__$1,temp__4657__auto___449179){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_449195,ov_449194,null);
});})(seq__449145_449164,chunk__449147_449165,count__449148_449166,i__449149_449167,o__36322__auto___449199,ov_449194,n_449195,vec__449155_449190,nk_449191,nv_449192,seq__449145_449180__$1,temp__4657__auto___449179))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_449195,ov_449194,null);
}
} else {
}
}
}
} else {
}

var G__449200 = cljs.core.next.call(null,seq__449145_449180__$1);
var G__449201 = null;
var G__449202 = (0);
var G__449203 = (0);
seq__449145_449164 = G__449200;
chunk__449147_449165 = G__449201;
count__449148_449166 = G__449202;
i__449149_449167 = G__449203;
continue;
}
} else {
}
}
break;
}

var seq__449158 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__449160 = null;
var count__449161 = (0);
var i__449162 = (0);
while(true){
if((i__449162 < count__449161)){
var k = cljs.core._nth.call(null,chunk__449160,i__449162);
var n_449204 = cljs.core.name.call(null,k);
var ov_449205 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_449204,ov_449205,null);
} else {
var o__36322__auto___449206 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_449204], null));
if(!(o__36322__auto___449206 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___449206)){
o__36322__auto___449206.call(null,((function (seq__449158,chunk__449160,count__449161,i__449162,o__36322__auto___449206,n_449204,ov_449205,k){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_449204,ov_449205,null);
});})(seq__449158,chunk__449160,count__449161,i__449162,o__36322__auto___449206,n_449204,ov_449205,k))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_449204,ov_449205,null);
}
} else {
}
}

var G__449207 = seq__449158;
var G__449208 = chunk__449160;
var G__449209 = count__449161;
var G__449210 = (i__449162 + (1));
seq__449158 = G__449207;
chunk__449160 = G__449208;
count__449161 = G__449209;
i__449162 = G__449210;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__449158);
if(temp__4657__auto__){
var seq__449158__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__449158__$1)){
var c__36002__auto__ = cljs.core.chunk_first.call(null,seq__449158__$1);
var G__449216 = cljs.core.chunk_rest.call(null,seq__449158__$1);
var G__449217 = c__36002__auto__;
var G__449218 = cljs.core.count.call(null,c__36002__auto__);
var G__449219 = (0);
seq__449158 = G__449216;
chunk__449160 = G__449217;
count__449161 = G__449218;
i__449162 = G__449219;
continue;
} else {
var k = cljs.core.first.call(null,seq__449158__$1);
var n_449220 = cljs.core.name.call(null,k);
var ov_449221 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_449220,ov_449221,null);
} else {
var o__36322__auto___449222 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_449220], null));
if(!(o__36322__auto___449222 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___449222)){
o__36322__auto___449222.call(null,((function (seq__449158,chunk__449160,count__449161,i__449162,o__36322__auto___449222,n_449220,ov_449221,k,seq__449158__$1,temp__4657__auto__){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_449220,ov_449221,null);
});})(seq__449158,chunk__449160,count__449161,i__449162,o__36322__auto___449222,n_449220,ov_449221,k,seq__449158__$1,temp__4657__auto__))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_449220,ov_449221,null);
}
} else {
}
}

var G__449223 = cljs.core.next.call(null,seq__449158__$1);
var G__449224 = null;
var G__449225 = (0);
var G__449226 = (0);
seq__449158 = G__449223;
chunk__449160 = G__449224;
count__449161 = G__449225;
i__449162 = G__449226;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__35971__auto__ = (function hipo$interpreter$keyed_children__GT_map_$_iter__449232(s__449233){
return (new cljs.core.LazySeq(null,(function (){
var s__449233__$1 = s__449233;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__449233__$1);
if(temp__4657__auto__){
var s__449233__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__449233__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__449233__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__449235 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__449234 = (0);
while(true){
if((i__449234 < size__35970__auto__)){
var h = cljs.core._nth.call(null,c__35969__auto__,i__449234);
cljs.core.chunk_append.call(null,b__449235,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null));

var G__449236 = (i__449234 + (1));
i__449234 = G__449236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__449235),hipo$interpreter$keyed_children__GT_map_$_iter__449232.call(null,cljs.core.chunk_rest.call(null,s__449233__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__449235),null);
}
} else {
var h = cljs.core.first.call(null,s__449233__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null),hipo$interpreter$keyed_children__GT_map_$_iter__449232.call(null,cljs.core.rest.call(null,s__449233__$2)));
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__35971__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__449245(s__449246){
return (new cljs.core.LazySeq(null,(function (){
var s__449246__$1 = s__449246;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__449246__$1);
if(temp__4657__auto__){
var s__449246__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__449246__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__449246__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__449248 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__449247 = (0);
while(true){
if((i__449247 < size__35970__auto__)){
var ih = cljs.core._nth.call(null,c__35969__auto__,i__449247);
cljs.core.chunk_append.call(null,b__449248,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__449259 = (i__449247 + (1));
i__449247 = G__449259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__449248),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__449245.call(null,cljs.core.chunk_rest.call(null,s__449246__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__449248),null);
}
} else {
var ih = cljs.core.first.call(null,s__449246__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__449245.call(null,cljs.core.rest.call(null,s__449246__$2)));
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
var seq__449279_449303 = cljs.core.seq.call(null,nm);
var chunk__449280_449304 = null;
var count__449281_449305 = (0);
var i__449282_449306 = (0);
while(true){
if((i__449282_449306 < count__449281_449305)){
var vec__449283_449308 = cljs.core._nth.call(null,chunk__449280_449304,i__449282_449306);
var i_449309 = cljs.core.nth.call(null,vec__449283_449308,(0),null);
var vec__449284_449310 = cljs.core.nth.call(null,vec__449283_449308,(1),null);
var ii_449311 = cljs.core.nth.call(null,vec__449284_449310,(0),null);
var h_449312 = cljs.core.nth.call(null,vec__449284_449310,(1),null);
var temp__4655__auto___449314 = cljs.core.get.call(null,om,i_449309);
if(cljs.core.truth_(temp__4655__auto___449314)){
var oh_449315 = temp__4655__auto___449314;
if(cljs.core.not.call(null,int$)){
if((oh_449315 === h_449312)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_449311,cljs.core.nth.call(null,cs,i_449309));
} else {
var ncel_449319 = el.removeChild(cljs.core.nth.call(null,cs,i_449309));
hipo.interpreter.update_BANG_.call(null,ncel_449319,oh_449315,h_449312,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_449311,ncel_449319);
}
} else {
var o__36322__auto___449321 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_449312,new cljs.core.Keyword(null,"index","index",-1531685915),ii_449311], null));
if(!(o__36322__auto___449321 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___449321)){
o__36322__auto___449321.call(null,((function (seq__449279_449303,chunk__449280_449304,count__449281_449305,i__449282_449306,o__36322__auto___449321,oh_449315,temp__4655__auto___449314,vec__449283_449308,i_449309,vec__449284_449310,ii_449311,h_449312,om,nm,cs){
return (function (){
if((oh_449315 === h_449312)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_449311,cljs.core.nth.call(null,cs,i_449309));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_449309));
hipo.interpreter.update_BANG_.call(null,ncel,oh_449315,h_449312,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_449311,ncel);
}
});})(seq__449279_449303,chunk__449280_449304,count__449281_449305,i__449282_449306,o__36322__auto___449321,oh_449315,temp__4655__auto___449314,vec__449283_449308,i_449309,vec__449284_449310,ii_449311,h_449312,om,nm,cs))
);
} else {
if((oh_449315 === h_449312)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_449311,cljs.core.nth.call(null,cs,i_449309));
} else {
var ncel_449330 = el.removeChild(cljs.core.nth.call(null,cs,i_449309));
hipo.interpreter.update_BANG_.call(null,ncel_449330,oh_449315,h_449312,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_449311,ncel_449330);
}
}
} else {
}
}
} else {
var nel_449332 = hipo.interpreter.create_child.call(null,h_449312);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_449311,nel_449332);
} else {
var o__36322__auto___449333 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_449332,new cljs.core.Keyword(null,"index","index",-1531685915),ii_449311], null));
if(!(o__36322__auto___449333 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___449333)){
o__36322__auto___449333.call(null,((function (seq__449279_449303,chunk__449280_449304,count__449281_449305,i__449282_449306,o__36322__auto___449333,nel_449332,temp__4655__auto___449314,vec__449283_449308,i_449309,vec__449284_449310,ii_449311,h_449312,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_449311,nel_449332);
});})(seq__449279_449303,chunk__449280_449304,count__449281_449305,i__449282_449306,o__36322__auto___449333,nel_449332,temp__4655__auto___449314,vec__449283_449308,i_449309,vec__449284_449310,ii_449311,h_449312,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_449311,nel_449332);
}
} else {
}
}
}

var G__449338 = seq__449279_449303;
var G__449339 = chunk__449280_449304;
var G__449340 = count__449281_449305;
var G__449341 = (i__449282_449306 + (1));
seq__449279_449303 = G__449338;
chunk__449280_449304 = G__449339;
count__449281_449305 = G__449340;
i__449282_449306 = G__449341;
continue;
} else {
var temp__4657__auto___449342 = cljs.core.seq.call(null,seq__449279_449303);
if(temp__4657__auto___449342){
var seq__449279_449343__$1 = temp__4657__auto___449342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__449279_449343__$1)){
var c__36002__auto___449345 = cljs.core.chunk_first.call(null,seq__449279_449343__$1);
var G__449346 = cljs.core.chunk_rest.call(null,seq__449279_449343__$1);
var G__449347 = c__36002__auto___449345;
var G__449348 = cljs.core.count.call(null,c__36002__auto___449345);
var G__449349 = (0);
seq__449279_449303 = G__449346;
chunk__449280_449304 = G__449347;
count__449281_449305 = G__449348;
i__449282_449306 = G__449349;
continue;
} else {
var vec__449293_449353 = cljs.core.first.call(null,seq__449279_449343__$1);
var i_449354 = cljs.core.nth.call(null,vec__449293_449353,(0),null);
var vec__449294_449355 = cljs.core.nth.call(null,vec__449293_449353,(1),null);
var ii_449356 = cljs.core.nth.call(null,vec__449294_449355,(0),null);
var h_449357 = cljs.core.nth.call(null,vec__449294_449355,(1),null);
var temp__4655__auto___449360 = cljs.core.get.call(null,om,i_449354);
if(cljs.core.truth_(temp__4655__auto___449360)){
var oh_449362 = temp__4655__auto___449360;
if(cljs.core.not.call(null,int$)){
if((oh_449362 === h_449357)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_449356,cljs.core.nth.call(null,cs,i_449354));
} else {
var ncel_449369 = el.removeChild(cljs.core.nth.call(null,cs,i_449354));
hipo.interpreter.update_BANG_.call(null,ncel_449369,oh_449362,h_449357,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_449356,ncel_449369);
}
} else {
var o__36322__auto___449370 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_449357,new cljs.core.Keyword(null,"index","index",-1531685915),ii_449356], null));
if(!(o__36322__auto___449370 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___449370)){
o__36322__auto___449370.call(null,((function (seq__449279_449303,chunk__449280_449304,count__449281_449305,i__449282_449306,o__36322__auto___449370,oh_449362,temp__4655__auto___449360,vec__449293_449353,i_449354,vec__449294_449355,ii_449356,h_449357,seq__449279_449343__$1,temp__4657__auto___449342,om,nm,cs){
return (function (){
if((oh_449362 === h_449357)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_449356,cljs.core.nth.call(null,cs,i_449354));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_449354));
hipo.interpreter.update_BANG_.call(null,ncel,oh_449362,h_449357,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_449356,ncel);
}
});})(seq__449279_449303,chunk__449280_449304,count__449281_449305,i__449282_449306,o__36322__auto___449370,oh_449362,temp__4655__auto___449360,vec__449293_449353,i_449354,vec__449294_449355,ii_449356,h_449357,seq__449279_449343__$1,temp__4657__auto___449342,om,nm,cs))
);
} else {
if((oh_449362 === h_449357)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_449356,cljs.core.nth.call(null,cs,i_449354));
} else {
var ncel_449395 = el.removeChild(cljs.core.nth.call(null,cs,i_449354));
hipo.interpreter.update_BANG_.call(null,ncel_449395,oh_449362,h_449357,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_449356,ncel_449395);
}
}
} else {
}
}
} else {
var nel_449399 = hipo.interpreter.create_child.call(null,h_449357);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_449356,nel_449399);
} else {
var o__36322__auto___449400 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_449399,new cljs.core.Keyword(null,"index","index",-1531685915),ii_449356], null));
if(!(o__36322__auto___449400 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___449400)){
o__36322__auto___449400.call(null,((function (seq__449279_449303,chunk__449280_449304,count__449281_449305,i__449282_449306,o__36322__auto___449400,nel_449399,temp__4655__auto___449360,vec__449293_449353,i_449354,vec__449294_449355,ii_449356,h_449357,seq__449279_449343__$1,temp__4657__auto___449342,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_449356,nel_449399);
});})(seq__449279_449303,chunk__449280_449304,count__449281_449305,i__449282_449306,o__36322__auto___449400,nel_449399,temp__4655__auto___449360,vec__449293_449353,i_449354,vec__449294_449355,ii_449356,h_449357,seq__449279_449343__$1,temp__4657__auto___449342,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_449356,nel_449399);
}
} else {
}
}
}

var G__449417 = cljs.core.next.call(null,seq__449279_449343__$1);
var G__449418 = null;
var G__449419 = (0);
var G__449420 = (0);
seq__449279_449303 = G__449417;
chunk__449280_449304 = G__449418;
count__449281_449305 = G__449419;
i__449282_449306 = G__449420;
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
var o__36322__auto___449470 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__36322__auto___449470 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___449470)){
o__36322__auto___449470.call(null,((function (o__36322__auto___449470,oc,nc,d){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__36322__auto___449470,oc,nc,d))
);
} else {
hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
}
} else {
}
}
} else {
}

var n__36105__auto___449471 = (function (){var x__35529__auto__ = oc;
var y__35530__auto__ = nc;
return ((x__35529__auto__ < y__35530__auto__) ? x__35529__auto__ : y__35530__auto__);
})();
var i_449472 = (0);
while(true){
if((i_449472 < n__36105__auto___449471)){
var ov_449473 = cljs.core.nth.call(null,och,i_449472);
var nv_449474 = cljs.core.nth.call(null,nch,i_449472);
if(!((ov_449473 === nv_449474))){
var temp__4655__auto___449475 = hipo.dom.child_at.call(null,el,i_449472);
if(cljs.core.truth_(temp__4655__auto___449475)){
var cel_449476 = temp__4655__auto___449475;
hipo.interpreter.update_BANG_.call(null,cel_449476,ov_449473,nv_449474,int$);
} else {
}
} else {
}

var G__449477 = (i_449472 + (1));
i_449472 = G__449477;
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
var o__36322__auto___449488 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
if(!(o__36322__auto___449488 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___449488)){
o__36322__auto___449488.call(null,((function (o__36322__auto___449488,f,cs,oc,nc,d){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs);
});})(o__36322__auto___449488,f,cs,oc,nc,d))
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
var o__36322__auto___449523 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-children","update-children",1871853561),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36322__auto___449523 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___449523)){
o__36322__auto___449523.call(null,((function (o__36322__auto___449523,om,nm,och,nch){
return (function (){
return hipo.interpreter.update_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),int$);
});})(o__36322__auto___449523,om,nm,och,nch))
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
var G__449562__delegate = function (nh,p__449560){
var vec__449561 = p__449560;
var m = cljs.core.nth.call(null,vec__449561,(0),null);
var int$ = new cljs.core.Keyword(null,"interceptor","interceptor",1127739076).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
} else {
var o__36322__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36322__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto__)){
return o__36322__auto__.call(null,((function (o__36322__auto__,int$,vec__449561,m,a){
return (function (){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
});})(o__36322__auto__,int$,vec__449561,m,a))
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
var G__449562 = function (nh,var_args){
var p__449560 = null;
if (arguments.length > 1) {
var G__449565__i = 0, G__449565__a = new Array(arguments.length -  1);
while (G__449565__i < G__449565__a.length) {G__449565__a[G__449565__i] = arguments[G__449565__i + 1]; ++G__449565__i;}
  p__449560 = new cljs.core.IndexedSeq(G__449565__a,0);
} 
return G__449562__delegate.call(this,nh,p__449560);};
G__449562.cljs$lang$maxFixedArity = 1;
G__449562.cljs$lang$applyTo = (function (arglist__449566){
var nh = cljs.core.first(arglist__449566);
var p__449560 = cljs.core.rest(arglist__449566);
return G__449562__delegate(nh,p__449560);
});
G__449562.cljs$core$IFn$_invoke$arity$variadic = G__449562__delegate;
return G__449562;
})()
;})(a))
], null);
});
