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
var temp__4655__auto___369178 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___369178)){
var h_369179 = temp__4655__auto___369178;
hipo.interpreter.append_child_BANG_.call(null,el,h_369179);
} else {
}

var G__369180 = cljs.core.rest.call(null,v__$1);
v__$1 = G__369180;
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
var seq__369189_369196 = cljs.core.seq.call(null,attrs);
var chunk__369190_369197 = null;
var count__369191_369198 = (0);
var i__369192_369199 = (0);
while(true){
if((i__369192_369199 < count__369191_369198)){
var vec__369193_369200 = cljs.core._nth.call(null,chunk__369190_369197,i__369192_369199);
var k_369201 = cljs.core.nth.call(null,vec__369193_369200,(0),null);
var v_369202 = cljs.core.nth.call(null,vec__369193_369200,(1),null);
if(cljs.core.truth_(v_369202)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_369201),null,v_369202);
} else {
}

var G__369204 = seq__369189_369196;
var G__369205 = chunk__369190_369197;
var G__369206 = count__369191_369198;
var G__369207 = (i__369192_369199 + (1));
seq__369189_369196 = G__369204;
chunk__369190_369197 = G__369205;
count__369191_369198 = G__369206;
i__369192_369199 = G__369207;
continue;
} else {
var temp__4657__auto___369208 = cljs.core.seq.call(null,seq__369189_369196);
if(temp__4657__auto___369208){
var seq__369189_369209__$1 = temp__4657__auto___369208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__369189_369209__$1)){
var c__36002__auto___369210 = cljs.core.chunk_first.call(null,seq__369189_369209__$1);
var G__369211 = cljs.core.chunk_rest.call(null,seq__369189_369209__$1);
var G__369212 = c__36002__auto___369210;
var G__369213 = cljs.core.count.call(null,c__36002__auto___369210);
var G__369214 = (0);
seq__369189_369196 = G__369211;
chunk__369190_369197 = G__369212;
count__369191_369198 = G__369213;
i__369192_369199 = G__369214;
continue;
} else {
var vec__369194_369215 = cljs.core.first.call(null,seq__369189_369209__$1);
var k_369216 = cljs.core.nth.call(null,vec__369194_369215,(0),null);
var v_369217 = cljs.core.nth.call(null,vec__369194_369215,(1),null);
if(cljs.core.truth_(v_369217)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_369216),null,v_369217);
} else {
}

var G__369218 = cljs.core.next.call(null,seq__369189_369209__$1);
var G__369219 = null;
var G__369220 = (0);
var G__369221 = (0);
seq__369189_369196 = G__369218;
chunk__369190_369197 = G__369219;
count__369191_369198 = G__369220;
i__369192_369199 = G__369221;
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
var G__369223 = pel;
el = G__369223;
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
var seq__369246_369266 = cljs.core.seq.call(null,nm);
var chunk__369248_369267 = null;
var count__369249_369268 = (0);
var i__369250_369269 = (0);
while(true){
if((i__369250_369269 < count__369249_369268)){
var vec__369252_369270 = cljs.core._nth.call(null,chunk__369248_369267,i__369250_369269);
var nk_369271 = cljs.core.nth.call(null,vec__369252_369270,(0),null);
var nv_369272 = cljs.core.nth.call(null,vec__369252_369270,(1),null);
var ov_369273 = nk_369271.call(null,om);
var n_369274 = cljs.core.name.call(null,nk_369271);
if(!((ov_369273 === nv_369272))){
if(cljs.core.truth_(nv_369272)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_369274,ov_369273,nv_369272);
} else {
var o__36322__auto___369275 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_369274,new cljs.core.Keyword(null,"value","value",305978217),nv_369272], null));
if(!(o__36322__auto___369275 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___369275)){
o__36322__auto___369275.call(null,((function (seq__369246_369266,chunk__369248_369267,count__369249_369268,i__369250_369269,o__36322__auto___369275,ov_369273,n_369274,vec__369252_369270,nk_369271,nv_369272){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_369274,ov_369273,nv_369272);
});})(seq__369246_369266,chunk__369248_369267,count__369249_369268,i__369250_369269,o__36322__auto___369275,ov_369273,n_369274,vec__369252_369270,nk_369271,nv_369272))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_369274,ov_369273,nv_369272);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_369274,ov_369273,null);
} else {
var o__36322__auto___369276 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_369274], null));
if(!(o__36322__auto___369276 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___369276)){
o__36322__auto___369276.call(null,((function (seq__369246_369266,chunk__369248_369267,count__369249_369268,i__369250_369269,o__36322__auto___369276,ov_369273,n_369274,vec__369252_369270,nk_369271,nv_369272){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_369274,ov_369273,null);
});})(seq__369246_369266,chunk__369248_369267,count__369249_369268,i__369250_369269,o__36322__auto___369276,ov_369273,n_369274,vec__369252_369270,nk_369271,nv_369272))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_369274,ov_369273,null);
}
} else {
}
}
}
} else {
}

var G__369277 = seq__369246_369266;
var G__369278 = chunk__369248_369267;
var G__369279 = count__369249_369268;
var G__369280 = (i__369250_369269 + (1));
seq__369246_369266 = G__369277;
chunk__369248_369267 = G__369278;
count__369249_369268 = G__369279;
i__369250_369269 = G__369280;
continue;
} else {
var temp__4657__auto___369285 = cljs.core.seq.call(null,seq__369246_369266);
if(temp__4657__auto___369285){
var seq__369246_369286__$1 = temp__4657__auto___369285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__369246_369286__$1)){
var c__36002__auto___369287 = cljs.core.chunk_first.call(null,seq__369246_369286__$1);
var G__369292 = cljs.core.chunk_rest.call(null,seq__369246_369286__$1);
var G__369293 = c__36002__auto___369287;
var G__369294 = cljs.core.count.call(null,c__36002__auto___369287);
var G__369295 = (0);
seq__369246_369266 = G__369292;
chunk__369248_369267 = G__369293;
count__369249_369268 = G__369294;
i__369250_369269 = G__369295;
continue;
} else {
var vec__369256_369296 = cljs.core.first.call(null,seq__369246_369286__$1);
var nk_369297 = cljs.core.nth.call(null,vec__369256_369296,(0),null);
var nv_369298 = cljs.core.nth.call(null,vec__369256_369296,(1),null);
var ov_369300 = nk_369297.call(null,om);
var n_369301 = cljs.core.name.call(null,nk_369297);
if(!((ov_369300 === nv_369298))){
if(cljs.core.truth_(nv_369298)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_369301,ov_369300,nv_369298);
} else {
var o__36322__auto___369306 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_369301,new cljs.core.Keyword(null,"value","value",305978217),nv_369298], null));
if(!(o__36322__auto___369306 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___369306)){
o__36322__auto___369306.call(null,((function (seq__369246_369266,chunk__369248_369267,count__369249_369268,i__369250_369269,o__36322__auto___369306,ov_369300,n_369301,vec__369256_369296,nk_369297,nv_369298,seq__369246_369286__$1,temp__4657__auto___369285){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_369301,ov_369300,nv_369298);
});})(seq__369246_369266,chunk__369248_369267,count__369249_369268,i__369250_369269,o__36322__auto___369306,ov_369300,n_369301,vec__369256_369296,nk_369297,nv_369298,seq__369246_369286__$1,temp__4657__auto___369285))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_369301,ov_369300,nv_369298);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_369301,ov_369300,null);
} else {
var o__36322__auto___369307 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_369301], null));
if(!(o__36322__auto___369307 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___369307)){
o__36322__auto___369307.call(null,((function (seq__369246_369266,chunk__369248_369267,count__369249_369268,i__369250_369269,o__36322__auto___369307,ov_369300,n_369301,vec__369256_369296,nk_369297,nv_369298,seq__369246_369286__$1,temp__4657__auto___369285){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_369301,ov_369300,null);
});})(seq__369246_369266,chunk__369248_369267,count__369249_369268,i__369250_369269,o__36322__auto___369307,ov_369300,n_369301,vec__369256_369296,nk_369297,nv_369298,seq__369246_369286__$1,temp__4657__auto___369285))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_369301,ov_369300,null);
}
} else {
}
}
}
} else {
}

var G__369308 = cljs.core.next.call(null,seq__369246_369286__$1);
var G__369309 = null;
var G__369310 = (0);
var G__369311 = (0);
seq__369246_369266 = G__369308;
chunk__369248_369267 = G__369309;
count__369249_369268 = G__369310;
i__369250_369269 = G__369311;
continue;
}
} else {
}
}
break;
}

var seq__369257 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__369259 = null;
var count__369260 = (0);
var i__369261 = (0);
while(true){
if((i__369261 < count__369260)){
var k = cljs.core._nth.call(null,chunk__369259,i__369261);
var n_369312 = cljs.core.name.call(null,k);
var ov_369313 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_369312,ov_369313,null);
} else {
var o__36322__auto___369315 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_369312], null));
if(!(o__36322__auto___369315 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___369315)){
o__36322__auto___369315.call(null,((function (seq__369257,chunk__369259,count__369260,i__369261,o__36322__auto___369315,n_369312,ov_369313,k){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_369312,ov_369313,null);
});})(seq__369257,chunk__369259,count__369260,i__369261,o__36322__auto___369315,n_369312,ov_369313,k))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_369312,ov_369313,null);
}
} else {
}
}

var G__369316 = seq__369257;
var G__369317 = chunk__369259;
var G__369318 = count__369260;
var G__369319 = (i__369261 + (1));
seq__369257 = G__369316;
chunk__369259 = G__369317;
count__369260 = G__369318;
i__369261 = G__369319;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__369257);
if(temp__4657__auto__){
var seq__369257__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__369257__$1)){
var c__36002__auto__ = cljs.core.chunk_first.call(null,seq__369257__$1);
var G__369320 = cljs.core.chunk_rest.call(null,seq__369257__$1);
var G__369321 = c__36002__auto__;
var G__369322 = cljs.core.count.call(null,c__36002__auto__);
var G__369323 = (0);
seq__369257 = G__369320;
chunk__369259 = G__369321;
count__369260 = G__369322;
i__369261 = G__369323;
continue;
} else {
var k = cljs.core.first.call(null,seq__369257__$1);
var n_369324 = cljs.core.name.call(null,k);
var ov_369325 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_369324,ov_369325,null);
} else {
var o__36322__auto___369326 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_369324], null));
if(!(o__36322__auto___369326 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___369326)){
o__36322__auto___369326.call(null,((function (seq__369257,chunk__369259,count__369260,i__369261,o__36322__auto___369326,n_369324,ov_369325,k,seq__369257__$1,temp__4657__auto__){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_369324,ov_369325,null);
});})(seq__369257,chunk__369259,count__369260,i__369261,o__36322__auto___369326,n_369324,ov_369325,k,seq__369257__$1,temp__4657__auto__))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_369324,ov_369325,null);
}
} else {
}
}

var G__369328 = cljs.core.next.call(null,seq__369257__$1);
var G__369329 = null;
var G__369330 = (0);
var G__369331 = (0);
seq__369257 = G__369328;
chunk__369259 = G__369329;
count__369260 = G__369330;
i__369261 = G__369331;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__35971__auto__ = (function hipo$interpreter$keyed_children__GT_map_$_iter__369337(s__369338){
return (new cljs.core.LazySeq(null,(function (){
var s__369338__$1 = s__369338;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__369338__$1);
if(temp__4657__auto__){
var s__369338__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__369338__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__369338__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__369340 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__369339 = (0);
while(true){
if((i__369339 < size__35970__auto__)){
var h = cljs.core._nth.call(null,c__35969__auto__,i__369339);
cljs.core.chunk_append.call(null,b__369340,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null));

var G__369341 = (i__369339 + (1));
i__369339 = G__369341;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__369340),hipo$interpreter$keyed_children__GT_map_$_iter__369337.call(null,cljs.core.chunk_rest.call(null,s__369338__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__369340),null);
}
} else {
var h = cljs.core.first.call(null,s__369338__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null),hipo$interpreter$keyed_children__GT_map_$_iter__369337.call(null,cljs.core.rest.call(null,s__369338__$2)));
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__35971__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__369347(s__369348){
return (new cljs.core.LazySeq(null,(function (){
var s__369348__$1 = s__369348;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__369348__$1);
if(temp__4657__auto__){
var s__369348__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__369348__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__369348__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__369350 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__369349 = (0);
while(true){
if((i__369349 < size__35970__auto__)){
var ih = cljs.core._nth.call(null,c__35969__auto__,i__369349);
cljs.core.chunk_append.call(null,b__369350,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__369361 = (i__369349 + (1));
i__369349 = G__369361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__369350),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__369347.call(null,cljs.core.chunk_rest.call(null,s__369348__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__369350),null);
}
} else {
var ih = cljs.core.first.call(null,s__369348__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__369347.call(null,cljs.core.rest.call(null,s__369348__$2)));
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
var seq__369428_369482 = cljs.core.seq.call(null,nm);
var chunk__369429_369483 = null;
var count__369430_369484 = (0);
var i__369431_369485 = (0);
while(true){
if((i__369431_369485 < count__369430_369484)){
var vec__369436_369486 = cljs.core._nth.call(null,chunk__369429_369483,i__369431_369485);
var i_369487 = cljs.core.nth.call(null,vec__369436_369486,(0),null);
var vec__369437_369488 = cljs.core.nth.call(null,vec__369436_369486,(1),null);
var ii_369489 = cljs.core.nth.call(null,vec__369437_369488,(0),null);
var h_369490 = cljs.core.nth.call(null,vec__369437_369488,(1),null);
var temp__4655__auto___369492 = cljs.core.get.call(null,om,i_369487);
if(cljs.core.truth_(temp__4655__auto___369492)){
var oh_369494 = temp__4655__auto___369492;
if(cljs.core.not.call(null,int$)){
if((oh_369494 === h_369490)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_369489,cljs.core.nth.call(null,cs,i_369487));
} else {
var ncel_369495 = el.removeChild(cljs.core.nth.call(null,cs,i_369487));
hipo.interpreter.update_BANG_.call(null,ncel_369495,oh_369494,h_369490,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_369489,ncel_369495);
}
} else {
var o__36322__auto___369497 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_369490,new cljs.core.Keyword(null,"index","index",-1531685915),ii_369489], null));
if(!(o__36322__auto___369497 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___369497)){
o__36322__auto___369497.call(null,((function (seq__369428_369482,chunk__369429_369483,count__369430_369484,i__369431_369485,o__36322__auto___369497,oh_369494,temp__4655__auto___369492,vec__369436_369486,i_369487,vec__369437_369488,ii_369489,h_369490,om,nm,cs){
return (function (){
if((oh_369494 === h_369490)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_369489,cljs.core.nth.call(null,cs,i_369487));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_369487));
hipo.interpreter.update_BANG_.call(null,ncel,oh_369494,h_369490,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_369489,ncel);
}
});})(seq__369428_369482,chunk__369429_369483,count__369430_369484,i__369431_369485,o__36322__auto___369497,oh_369494,temp__4655__auto___369492,vec__369436_369486,i_369487,vec__369437_369488,ii_369489,h_369490,om,nm,cs))
);
} else {
if((oh_369494 === h_369490)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_369489,cljs.core.nth.call(null,cs,i_369487));
} else {
var ncel_369507 = el.removeChild(cljs.core.nth.call(null,cs,i_369487));
hipo.interpreter.update_BANG_.call(null,ncel_369507,oh_369494,h_369490,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_369489,ncel_369507);
}
}
} else {
}
}
} else {
var nel_369511 = hipo.interpreter.create_child.call(null,h_369490);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_369489,nel_369511);
} else {
var o__36322__auto___369513 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_369511,new cljs.core.Keyword(null,"index","index",-1531685915),ii_369489], null));
if(!(o__36322__auto___369513 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___369513)){
o__36322__auto___369513.call(null,((function (seq__369428_369482,chunk__369429_369483,count__369430_369484,i__369431_369485,o__36322__auto___369513,nel_369511,temp__4655__auto___369492,vec__369436_369486,i_369487,vec__369437_369488,ii_369489,h_369490,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_369489,nel_369511);
});})(seq__369428_369482,chunk__369429_369483,count__369430_369484,i__369431_369485,o__36322__auto___369513,nel_369511,temp__4655__auto___369492,vec__369436_369486,i_369487,vec__369437_369488,ii_369489,h_369490,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_369489,nel_369511);
}
} else {
}
}
}

var G__369514 = seq__369428_369482;
var G__369515 = chunk__369429_369483;
var G__369516 = count__369430_369484;
var G__369517 = (i__369431_369485 + (1));
seq__369428_369482 = G__369514;
chunk__369429_369483 = G__369515;
count__369430_369484 = G__369516;
i__369431_369485 = G__369517;
continue;
} else {
var temp__4657__auto___369518 = cljs.core.seq.call(null,seq__369428_369482);
if(temp__4657__auto___369518){
var seq__369428_369519__$1 = temp__4657__auto___369518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__369428_369519__$1)){
var c__36002__auto___369520 = cljs.core.chunk_first.call(null,seq__369428_369519__$1);
var G__369521 = cljs.core.chunk_rest.call(null,seq__369428_369519__$1);
var G__369522 = c__36002__auto___369520;
var G__369523 = cljs.core.count.call(null,c__36002__auto___369520);
var G__369524 = (0);
seq__369428_369482 = G__369521;
chunk__369429_369483 = G__369522;
count__369430_369484 = G__369523;
i__369431_369485 = G__369524;
continue;
} else {
var vec__369464_369529 = cljs.core.first.call(null,seq__369428_369519__$1);
var i_369530 = cljs.core.nth.call(null,vec__369464_369529,(0),null);
var vec__369465_369531 = cljs.core.nth.call(null,vec__369464_369529,(1),null);
var ii_369532 = cljs.core.nth.call(null,vec__369465_369531,(0),null);
var h_369533 = cljs.core.nth.call(null,vec__369465_369531,(1),null);
var temp__4655__auto___369535 = cljs.core.get.call(null,om,i_369530);
if(cljs.core.truth_(temp__4655__auto___369535)){
var oh_369536 = temp__4655__auto___369535;
if(cljs.core.not.call(null,int$)){
if((oh_369536 === h_369533)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_369532,cljs.core.nth.call(null,cs,i_369530));
} else {
var ncel_369541 = el.removeChild(cljs.core.nth.call(null,cs,i_369530));
hipo.interpreter.update_BANG_.call(null,ncel_369541,oh_369536,h_369533,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_369532,ncel_369541);
}
} else {
var o__36322__auto___369543 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_369533,new cljs.core.Keyword(null,"index","index",-1531685915),ii_369532], null));
if(!(o__36322__auto___369543 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___369543)){
o__36322__auto___369543.call(null,((function (seq__369428_369482,chunk__369429_369483,count__369430_369484,i__369431_369485,o__36322__auto___369543,oh_369536,temp__4655__auto___369535,vec__369464_369529,i_369530,vec__369465_369531,ii_369532,h_369533,seq__369428_369519__$1,temp__4657__auto___369518,om,nm,cs){
return (function (){
if((oh_369536 === h_369533)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_369532,cljs.core.nth.call(null,cs,i_369530));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_369530));
hipo.interpreter.update_BANG_.call(null,ncel,oh_369536,h_369533,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_369532,ncel);
}
});})(seq__369428_369482,chunk__369429_369483,count__369430_369484,i__369431_369485,o__36322__auto___369543,oh_369536,temp__4655__auto___369535,vec__369464_369529,i_369530,vec__369465_369531,ii_369532,h_369533,seq__369428_369519__$1,temp__4657__auto___369518,om,nm,cs))
);
} else {
if((oh_369536 === h_369533)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_369532,cljs.core.nth.call(null,cs,i_369530));
} else {
var ncel_369554 = el.removeChild(cljs.core.nth.call(null,cs,i_369530));
hipo.interpreter.update_BANG_.call(null,ncel_369554,oh_369536,h_369533,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_369532,ncel_369554);
}
}
} else {
}
}
} else {
var nel_369555 = hipo.interpreter.create_child.call(null,h_369533);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_369532,nel_369555);
} else {
var o__36322__auto___369557 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_369555,new cljs.core.Keyword(null,"index","index",-1531685915),ii_369532], null));
if(!(o__36322__auto___369557 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___369557)){
o__36322__auto___369557.call(null,((function (seq__369428_369482,chunk__369429_369483,count__369430_369484,i__369431_369485,o__36322__auto___369557,nel_369555,temp__4655__auto___369535,vec__369464_369529,i_369530,vec__369465_369531,ii_369532,h_369533,seq__369428_369519__$1,temp__4657__auto___369518,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_369532,nel_369555);
});})(seq__369428_369482,chunk__369429_369483,count__369430_369484,i__369431_369485,o__36322__auto___369557,nel_369555,temp__4655__auto___369535,vec__369464_369529,i_369530,vec__369465_369531,ii_369532,h_369533,seq__369428_369519__$1,temp__4657__auto___369518,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_369532,nel_369555);
}
} else {
}
}
}

var G__369560 = cljs.core.next.call(null,seq__369428_369519__$1);
var G__369561 = null;
var G__369562 = (0);
var G__369563 = (0);
seq__369428_369482 = G__369560;
chunk__369429_369483 = G__369561;
count__369430_369484 = G__369562;
i__369431_369485 = G__369563;
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
var o__36322__auto___369605 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__36322__auto___369605 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___369605)){
o__36322__auto___369605.call(null,((function (o__36322__auto___369605,oc,nc,d){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__36322__auto___369605,oc,nc,d))
);
} else {
hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
}
} else {
}
}
} else {
}

var n__36105__auto___369612 = (function (){var x__35529__auto__ = oc;
var y__35530__auto__ = nc;
return ((x__35529__auto__ < y__35530__auto__) ? x__35529__auto__ : y__35530__auto__);
})();
var i_369614 = (0);
while(true){
if((i_369614 < n__36105__auto___369612)){
var ov_369617 = cljs.core.nth.call(null,och,i_369614);
var nv_369618 = cljs.core.nth.call(null,nch,i_369614);
if(!((ov_369617 === nv_369618))){
var temp__4655__auto___369619 = hipo.dom.child_at.call(null,el,i_369614);
if(cljs.core.truth_(temp__4655__auto___369619)){
var cel_369620 = temp__4655__auto___369619;
hipo.interpreter.update_BANG_.call(null,cel_369620,ov_369617,nv_369618,int$);
} else {
}
} else {
}

var G__369621 = (i_369614 + (1));
i_369614 = G__369621;
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
var o__36322__auto___369624 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
if(!(o__36322__auto___369624 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___369624)){
o__36322__auto___369624.call(null,((function (o__36322__auto___369624,f,cs,oc,nc,d){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs);
});})(o__36322__auto___369624,f,cs,oc,nc,d))
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
var o__36322__auto___369670 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-children","update-children",1871853561),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36322__auto___369670 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___369670)){
o__36322__auto___369670.call(null,((function (o__36322__auto___369670,om,nm,och,nch){
return (function (){
return hipo.interpreter.update_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),int$);
});})(o__36322__auto___369670,om,nm,och,nch))
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
var G__369703__delegate = function (nh,p__369694){
var vec__369695 = p__369694;
var m = cljs.core.nth.call(null,vec__369695,(0),null);
var int$ = new cljs.core.Keyword(null,"interceptor","interceptor",1127739076).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
} else {
var o__36322__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36322__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto__)){
return o__36322__auto__.call(null,((function (o__36322__auto__,int$,vec__369695,m,a){
return (function (){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
});})(o__36322__auto__,int$,vec__369695,m,a))
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
var G__369703 = function (nh,var_args){
var p__369694 = null;
if (arguments.length > 1) {
var G__369713__i = 0, G__369713__a = new Array(arguments.length -  1);
while (G__369713__i < G__369713__a.length) {G__369713__a[G__369713__i] = arguments[G__369713__i + 1]; ++G__369713__i;}
  p__369694 = new cljs.core.IndexedSeq(G__369713__a,0);
} 
return G__369703__delegate.call(this,nh,p__369694);};
G__369703.cljs$lang$maxFixedArity = 1;
G__369703.cljs$lang$applyTo = (function (arglist__369714){
var nh = cljs.core.first(arglist__369714);
var p__369694 = cljs.core.rest(arglist__369714);
return G__369703__delegate(nh,p__369694);
});
G__369703.cljs$core$IFn$_invoke$arity$variadic = G__369703__delegate;
return G__369703;
})()
;})(a))
], null);
});
