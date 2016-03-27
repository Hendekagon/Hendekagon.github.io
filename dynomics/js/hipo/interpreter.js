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
var temp__4655__auto___282284 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___282284)){
var h_282285 = temp__4655__auto___282284;
hipo.interpreter.append_child_BANG_.call(null,el,h_282285);
} else {
}

var G__282286 = cljs.core.rest.call(null,v__$1);
v__$1 = G__282286;
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
var seq__282293_282299 = cljs.core.seq.call(null,attrs);
var chunk__282294_282300 = null;
var count__282295_282301 = (0);
var i__282296_282302 = (0);
while(true){
if((i__282296_282302 < count__282295_282301)){
var vec__282297_282303 = cljs.core._nth.call(null,chunk__282294_282300,i__282296_282302);
var k_282304 = cljs.core.nth.call(null,vec__282297_282303,(0),null);
var v_282305 = cljs.core.nth.call(null,vec__282297_282303,(1),null);
if(cljs.core.truth_(v_282305)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_282304),null,v_282305);
} else {
}

var G__282306 = seq__282293_282299;
var G__282307 = chunk__282294_282300;
var G__282308 = count__282295_282301;
var G__282309 = (i__282296_282302 + (1));
seq__282293_282299 = G__282306;
chunk__282294_282300 = G__282307;
count__282295_282301 = G__282308;
i__282296_282302 = G__282309;
continue;
} else {
var temp__4657__auto___282310 = cljs.core.seq.call(null,seq__282293_282299);
if(temp__4657__auto___282310){
var seq__282293_282311__$1 = temp__4657__auto___282310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__282293_282311__$1)){
var c__36002__auto___282312 = cljs.core.chunk_first.call(null,seq__282293_282311__$1);
var G__282313 = cljs.core.chunk_rest.call(null,seq__282293_282311__$1);
var G__282314 = c__36002__auto___282312;
var G__282315 = cljs.core.count.call(null,c__36002__auto___282312);
var G__282316 = (0);
seq__282293_282299 = G__282313;
chunk__282294_282300 = G__282314;
count__282295_282301 = G__282315;
i__282296_282302 = G__282316;
continue;
} else {
var vec__282298_282317 = cljs.core.first.call(null,seq__282293_282311__$1);
var k_282318 = cljs.core.nth.call(null,vec__282298_282317,(0),null);
var v_282319 = cljs.core.nth.call(null,vec__282298_282317,(1),null);
if(cljs.core.truth_(v_282319)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_282318),null,v_282319);
} else {
}

var G__282320 = cljs.core.next.call(null,seq__282293_282311__$1);
var G__282321 = null;
var G__282322 = (0);
var G__282323 = (0);
seq__282293_282299 = G__282320;
chunk__282294_282300 = G__282321;
count__282295_282301 = G__282322;
i__282296_282302 = G__282323;
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
var G__282324 = pel;
el = G__282324;
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
var seq__282358_282374 = cljs.core.seq.call(null,nm);
var chunk__282360_282375 = null;
var count__282361_282376 = (0);
var i__282362_282377 = (0);
while(true){
if((i__282362_282377 < count__282361_282376)){
var vec__282364_282378 = cljs.core._nth.call(null,chunk__282360_282375,i__282362_282377);
var nk_282379 = cljs.core.nth.call(null,vec__282364_282378,(0),null);
var nv_282380 = cljs.core.nth.call(null,vec__282364_282378,(1),null);
var ov_282381 = nk_282379.call(null,om);
var n_282382 = cljs.core.name.call(null,nk_282379);
if(!((ov_282381 === nv_282380))){
if(cljs.core.truth_(nv_282380)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_282382,ov_282381,nv_282380);
} else {
var o__36322__auto___282383 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_282382,new cljs.core.Keyword(null,"value","value",305978217),nv_282380], null));
if(!(o__36322__auto___282383 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___282383)){
o__36322__auto___282383.call(null,((function (seq__282358_282374,chunk__282360_282375,count__282361_282376,i__282362_282377,o__36322__auto___282383,ov_282381,n_282382,vec__282364_282378,nk_282379,nv_282380){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_282382,ov_282381,nv_282380);
});})(seq__282358_282374,chunk__282360_282375,count__282361_282376,i__282362_282377,o__36322__auto___282383,ov_282381,n_282382,vec__282364_282378,nk_282379,nv_282380))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_282382,ov_282381,nv_282380);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_282382,ov_282381,null);
} else {
var o__36322__auto___282384 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_282382], null));
if(!(o__36322__auto___282384 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___282384)){
o__36322__auto___282384.call(null,((function (seq__282358_282374,chunk__282360_282375,count__282361_282376,i__282362_282377,o__36322__auto___282384,ov_282381,n_282382,vec__282364_282378,nk_282379,nv_282380){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_282382,ov_282381,null);
});})(seq__282358_282374,chunk__282360_282375,count__282361_282376,i__282362_282377,o__36322__auto___282384,ov_282381,n_282382,vec__282364_282378,nk_282379,nv_282380))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_282382,ov_282381,null);
}
} else {
}
}
}
} else {
}

var G__282387 = seq__282358_282374;
var G__282388 = chunk__282360_282375;
var G__282389 = count__282361_282376;
var G__282390 = (i__282362_282377 + (1));
seq__282358_282374 = G__282387;
chunk__282360_282375 = G__282388;
count__282361_282376 = G__282389;
i__282362_282377 = G__282390;
continue;
} else {
var temp__4657__auto___282391 = cljs.core.seq.call(null,seq__282358_282374);
if(temp__4657__auto___282391){
var seq__282358_282392__$1 = temp__4657__auto___282391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__282358_282392__$1)){
var c__36002__auto___282393 = cljs.core.chunk_first.call(null,seq__282358_282392__$1);
var G__282394 = cljs.core.chunk_rest.call(null,seq__282358_282392__$1);
var G__282395 = c__36002__auto___282393;
var G__282396 = cljs.core.count.call(null,c__36002__auto___282393);
var G__282397 = (0);
seq__282358_282374 = G__282394;
chunk__282360_282375 = G__282395;
count__282361_282376 = G__282396;
i__282362_282377 = G__282397;
continue;
} else {
var vec__282366_282398 = cljs.core.first.call(null,seq__282358_282392__$1);
var nk_282399 = cljs.core.nth.call(null,vec__282366_282398,(0),null);
var nv_282400 = cljs.core.nth.call(null,vec__282366_282398,(1),null);
var ov_282401 = nk_282399.call(null,om);
var n_282402 = cljs.core.name.call(null,nk_282399);
if(!((ov_282401 === nv_282400))){
if(cljs.core.truth_(nv_282400)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_282402,ov_282401,nv_282400);
} else {
var o__36322__auto___282403 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_282402,new cljs.core.Keyword(null,"value","value",305978217),nv_282400], null));
if(!(o__36322__auto___282403 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___282403)){
o__36322__auto___282403.call(null,((function (seq__282358_282374,chunk__282360_282375,count__282361_282376,i__282362_282377,o__36322__auto___282403,ov_282401,n_282402,vec__282366_282398,nk_282399,nv_282400,seq__282358_282392__$1,temp__4657__auto___282391){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_282402,ov_282401,nv_282400);
});})(seq__282358_282374,chunk__282360_282375,count__282361_282376,i__282362_282377,o__36322__auto___282403,ov_282401,n_282402,vec__282366_282398,nk_282399,nv_282400,seq__282358_282392__$1,temp__4657__auto___282391))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_282402,ov_282401,nv_282400);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_282402,ov_282401,null);
} else {
var o__36322__auto___282406 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_282402], null));
if(!(o__36322__auto___282406 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___282406)){
o__36322__auto___282406.call(null,((function (seq__282358_282374,chunk__282360_282375,count__282361_282376,i__282362_282377,o__36322__auto___282406,ov_282401,n_282402,vec__282366_282398,nk_282399,nv_282400,seq__282358_282392__$1,temp__4657__auto___282391){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_282402,ov_282401,null);
});})(seq__282358_282374,chunk__282360_282375,count__282361_282376,i__282362_282377,o__36322__auto___282406,ov_282401,n_282402,vec__282366_282398,nk_282399,nv_282400,seq__282358_282392__$1,temp__4657__auto___282391))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_282402,ov_282401,null);
}
} else {
}
}
}
} else {
}

var G__282409 = cljs.core.next.call(null,seq__282358_282392__$1);
var G__282410 = null;
var G__282411 = (0);
var G__282412 = (0);
seq__282358_282374 = G__282409;
chunk__282360_282375 = G__282410;
count__282361_282376 = G__282411;
i__282362_282377 = G__282412;
continue;
}
} else {
}
}
break;
}

var seq__282367 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__282369 = null;
var count__282370 = (0);
var i__282371 = (0);
while(true){
if((i__282371 < count__282370)){
var k = cljs.core._nth.call(null,chunk__282369,i__282371);
var n_282416 = cljs.core.name.call(null,k);
var ov_282417 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_282416,ov_282417,null);
} else {
var o__36322__auto___282419 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_282416], null));
if(!(o__36322__auto___282419 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___282419)){
o__36322__auto___282419.call(null,((function (seq__282367,chunk__282369,count__282370,i__282371,o__36322__auto___282419,n_282416,ov_282417,k){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_282416,ov_282417,null);
});})(seq__282367,chunk__282369,count__282370,i__282371,o__36322__auto___282419,n_282416,ov_282417,k))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_282416,ov_282417,null);
}
} else {
}
}

var G__282421 = seq__282367;
var G__282422 = chunk__282369;
var G__282423 = count__282370;
var G__282424 = (i__282371 + (1));
seq__282367 = G__282421;
chunk__282369 = G__282422;
count__282370 = G__282423;
i__282371 = G__282424;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__282367);
if(temp__4657__auto__){
var seq__282367__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__282367__$1)){
var c__36002__auto__ = cljs.core.chunk_first.call(null,seq__282367__$1);
var G__282425 = cljs.core.chunk_rest.call(null,seq__282367__$1);
var G__282426 = c__36002__auto__;
var G__282427 = cljs.core.count.call(null,c__36002__auto__);
var G__282428 = (0);
seq__282367 = G__282425;
chunk__282369 = G__282426;
count__282370 = G__282427;
i__282371 = G__282428;
continue;
} else {
var k = cljs.core.first.call(null,seq__282367__$1);
var n_282429 = cljs.core.name.call(null,k);
var ov_282430 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_282429,ov_282430,null);
} else {
var o__36322__auto___282431 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_282429], null));
if(!(o__36322__auto___282431 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___282431)){
o__36322__auto___282431.call(null,((function (seq__282367,chunk__282369,count__282370,i__282371,o__36322__auto___282431,n_282429,ov_282430,k,seq__282367__$1,temp__4657__auto__){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_282429,ov_282430,null);
});})(seq__282367,chunk__282369,count__282370,i__282371,o__36322__auto___282431,n_282429,ov_282430,k,seq__282367__$1,temp__4657__auto__))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_282429,ov_282430,null);
}
} else {
}
}

var G__282435 = cljs.core.next.call(null,seq__282367__$1);
var G__282436 = null;
var G__282437 = (0);
var G__282438 = (0);
seq__282367 = G__282435;
chunk__282369 = G__282436;
count__282370 = G__282437;
i__282371 = G__282438;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__35971__auto__ = (function hipo$interpreter$keyed_children__GT_map_$_iter__282443(s__282444){
return (new cljs.core.LazySeq(null,(function (){
var s__282444__$1 = s__282444;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__282444__$1);
if(temp__4657__auto__){
var s__282444__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__282444__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__282444__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__282446 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__282445 = (0);
while(true){
if((i__282445 < size__35970__auto__)){
var h = cljs.core._nth.call(null,c__35969__auto__,i__282445);
cljs.core.chunk_append.call(null,b__282446,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null));

var G__282460 = (i__282445 + (1));
i__282445 = G__282460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__282446),hipo$interpreter$keyed_children__GT_map_$_iter__282443.call(null,cljs.core.chunk_rest.call(null,s__282444__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__282446),null);
}
} else {
var h = cljs.core.first.call(null,s__282444__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null),hipo$interpreter$keyed_children__GT_map_$_iter__282443.call(null,cljs.core.rest.call(null,s__282444__$2)));
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__35971__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__282466(s__282467){
return (new cljs.core.LazySeq(null,(function (){
var s__282467__$1 = s__282467;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__282467__$1);
if(temp__4657__auto__){
var s__282467__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__282467__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__282467__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__282469 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__282468 = (0);
while(true){
if((i__282468 < size__35970__auto__)){
var ih = cljs.core._nth.call(null,c__35969__auto__,i__282468);
cljs.core.chunk_append.call(null,b__282469,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__282470 = (i__282468 + (1));
i__282468 = G__282470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__282469),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__282466.call(null,cljs.core.chunk_rest.call(null,s__282467__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__282469),null);
}
} else {
var ih = cljs.core.first.call(null,s__282467__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__282466.call(null,cljs.core.rest.call(null,s__282467__$2)));
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
var seq__282482_282502 = cljs.core.seq.call(null,nm);
var chunk__282483_282503 = null;
var count__282484_282504 = (0);
var i__282485_282505 = (0);
while(true){
if((i__282485_282505 < count__282484_282504)){
var vec__282486_282507 = cljs.core._nth.call(null,chunk__282483_282503,i__282485_282505);
var i_282508 = cljs.core.nth.call(null,vec__282486_282507,(0),null);
var vec__282487_282509 = cljs.core.nth.call(null,vec__282486_282507,(1),null);
var ii_282510 = cljs.core.nth.call(null,vec__282487_282509,(0),null);
var h_282511 = cljs.core.nth.call(null,vec__282487_282509,(1),null);
var temp__4655__auto___282513 = cljs.core.get.call(null,om,i_282508);
if(cljs.core.truth_(temp__4655__auto___282513)){
var oh_282514 = temp__4655__auto___282513;
if(cljs.core.not.call(null,int$)){
if((oh_282514 === h_282511)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_282510,cljs.core.nth.call(null,cs,i_282508));
} else {
var ncel_282520 = el.removeChild(cljs.core.nth.call(null,cs,i_282508));
hipo.interpreter.update_BANG_.call(null,ncel_282520,oh_282514,h_282511,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_282510,ncel_282520);
}
} else {
var o__36322__auto___282531 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_282511,new cljs.core.Keyword(null,"index","index",-1531685915),ii_282510], null));
if(!(o__36322__auto___282531 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___282531)){
o__36322__auto___282531.call(null,((function (seq__282482_282502,chunk__282483_282503,count__282484_282504,i__282485_282505,o__36322__auto___282531,oh_282514,temp__4655__auto___282513,vec__282486_282507,i_282508,vec__282487_282509,ii_282510,h_282511,om,nm,cs){
return (function (){
if((oh_282514 === h_282511)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_282510,cljs.core.nth.call(null,cs,i_282508));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_282508));
hipo.interpreter.update_BANG_.call(null,ncel,oh_282514,h_282511,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_282510,ncel);
}
});})(seq__282482_282502,chunk__282483_282503,count__282484_282504,i__282485_282505,o__36322__auto___282531,oh_282514,temp__4655__auto___282513,vec__282486_282507,i_282508,vec__282487_282509,ii_282510,h_282511,om,nm,cs))
);
} else {
if((oh_282514 === h_282511)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_282510,cljs.core.nth.call(null,cs,i_282508));
} else {
var ncel_282551 = el.removeChild(cljs.core.nth.call(null,cs,i_282508));
hipo.interpreter.update_BANG_.call(null,ncel_282551,oh_282514,h_282511,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_282510,ncel_282551);
}
}
} else {
}
}
} else {
var nel_282553 = hipo.interpreter.create_child.call(null,h_282511);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_282510,nel_282553);
} else {
var o__36322__auto___282555 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_282553,new cljs.core.Keyword(null,"index","index",-1531685915),ii_282510], null));
if(!(o__36322__auto___282555 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___282555)){
o__36322__auto___282555.call(null,((function (seq__282482_282502,chunk__282483_282503,count__282484_282504,i__282485_282505,o__36322__auto___282555,nel_282553,temp__4655__auto___282513,vec__282486_282507,i_282508,vec__282487_282509,ii_282510,h_282511,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_282510,nel_282553);
});})(seq__282482_282502,chunk__282483_282503,count__282484_282504,i__282485_282505,o__36322__auto___282555,nel_282553,temp__4655__auto___282513,vec__282486_282507,i_282508,vec__282487_282509,ii_282510,h_282511,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_282510,nel_282553);
}
} else {
}
}
}

var G__282575 = seq__282482_282502;
var G__282576 = chunk__282483_282503;
var G__282577 = count__282484_282504;
var G__282578 = (i__282485_282505 + (1));
seq__282482_282502 = G__282575;
chunk__282483_282503 = G__282576;
count__282484_282504 = G__282577;
i__282485_282505 = G__282578;
continue;
} else {
var temp__4657__auto___282582 = cljs.core.seq.call(null,seq__282482_282502);
if(temp__4657__auto___282582){
var seq__282482_282588__$1 = temp__4657__auto___282582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__282482_282588__$1)){
var c__36002__auto___282589 = cljs.core.chunk_first.call(null,seq__282482_282588__$1);
var G__282590 = cljs.core.chunk_rest.call(null,seq__282482_282588__$1);
var G__282591 = c__36002__auto___282589;
var G__282592 = cljs.core.count.call(null,c__36002__auto___282589);
var G__282593 = (0);
seq__282482_282502 = G__282590;
chunk__282483_282503 = G__282591;
count__282484_282504 = G__282592;
i__282485_282505 = G__282593;
continue;
} else {
var vec__282493_282598 = cljs.core.first.call(null,seq__282482_282588__$1);
var i_282599 = cljs.core.nth.call(null,vec__282493_282598,(0),null);
var vec__282494_282600 = cljs.core.nth.call(null,vec__282493_282598,(1),null);
var ii_282601 = cljs.core.nth.call(null,vec__282494_282600,(0),null);
var h_282602 = cljs.core.nth.call(null,vec__282494_282600,(1),null);
var temp__4655__auto___282610 = cljs.core.get.call(null,om,i_282599);
if(cljs.core.truth_(temp__4655__auto___282610)){
var oh_282615 = temp__4655__auto___282610;
if(cljs.core.not.call(null,int$)){
if((oh_282615 === h_282602)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_282601,cljs.core.nth.call(null,cs,i_282599));
} else {
var ncel_282619 = el.removeChild(cljs.core.nth.call(null,cs,i_282599));
hipo.interpreter.update_BANG_.call(null,ncel_282619,oh_282615,h_282602,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_282601,ncel_282619);
}
} else {
var o__36322__auto___282626 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_282602,new cljs.core.Keyword(null,"index","index",-1531685915),ii_282601], null));
if(!(o__36322__auto___282626 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___282626)){
o__36322__auto___282626.call(null,((function (seq__282482_282502,chunk__282483_282503,count__282484_282504,i__282485_282505,o__36322__auto___282626,oh_282615,temp__4655__auto___282610,vec__282493_282598,i_282599,vec__282494_282600,ii_282601,h_282602,seq__282482_282588__$1,temp__4657__auto___282582,om,nm,cs){
return (function (){
if((oh_282615 === h_282602)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_282601,cljs.core.nth.call(null,cs,i_282599));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_282599));
hipo.interpreter.update_BANG_.call(null,ncel,oh_282615,h_282602,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_282601,ncel);
}
});})(seq__282482_282502,chunk__282483_282503,count__282484_282504,i__282485_282505,o__36322__auto___282626,oh_282615,temp__4655__auto___282610,vec__282493_282598,i_282599,vec__282494_282600,ii_282601,h_282602,seq__282482_282588__$1,temp__4657__auto___282582,om,nm,cs))
);
} else {
if((oh_282615 === h_282602)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_282601,cljs.core.nth.call(null,cs,i_282599));
} else {
var ncel_282636 = el.removeChild(cljs.core.nth.call(null,cs,i_282599));
hipo.interpreter.update_BANG_.call(null,ncel_282636,oh_282615,h_282602,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_282601,ncel_282636);
}
}
} else {
}
}
} else {
var nel_282637 = hipo.interpreter.create_child.call(null,h_282602);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_282601,nel_282637);
} else {
var o__36322__auto___282639 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_282637,new cljs.core.Keyword(null,"index","index",-1531685915),ii_282601], null));
if(!(o__36322__auto___282639 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___282639)){
o__36322__auto___282639.call(null,((function (seq__282482_282502,chunk__282483_282503,count__282484_282504,i__282485_282505,o__36322__auto___282639,nel_282637,temp__4655__auto___282610,vec__282493_282598,i_282599,vec__282494_282600,ii_282601,h_282602,seq__282482_282588__$1,temp__4657__auto___282582,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_282601,nel_282637);
});})(seq__282482_282502,chunk__282483_282503,count__282484_282504,i__282485_282505,o__36322__auto___282639,nel_282637,temp__4655__auto___282610,vec__282493_282598,i_282599,vec__282494_282600,ii_282601,h_282602,seq__282482_282588__$1,temp__4657__auto___282582,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_282601,nel_282637);
}
} else {
}
}
}

var G__282646 = cljs.core.next.call(null,seq__282482_282588__$1);
var G__282647 = null;
var G__282648 = (0);
var G__282649 = (0);
seq__282482_282502 = G__282646;
chunk__282483_282503 = G__282647;
count__282484_282504 = G__282648;
i__282485_282505 = G__282649;
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
var o__36322__auto___282668 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__36322__auto___282668 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___282668)){
o__36322__auto___282668.call(null,((function (o__36322__auto___282668,oc,nc,d){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__36322__auto___282668,oc,nc,d))
);
} else {
hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
}
} else {
}
}
} else {
}

var n__36105__auto___282672 = (function (){var x__35529__auto__ = oc;
var y__35530__auto__ = nc;
return ((x__35529__auto__ < y__35530__auto__) ? x__35529__auto__ : y__35530__auto__);
})();
var i_282674 = (0);
while(true){
if((i_282674 < n__36105__auto___282672)){
var ov_282675 = cljs.core.nth.call(null,och,i_282674);
var nv_282676 = cljs.core.nth.call(null,nch,i_282674);
if(!((ov_282675 === nv_282676))){
var temp__4655__auto___282677 = hipo.dom.child_at.call(null,el,i_282674);
if(cljs.core.truth_(temp__4655__auto___282677)){
var cel_282678 = temp__4655__auto___282677;
hipo.interpreter.update_BANG_.call(null,cel_282678,ov_282675,nv_282676,int$);
} else {
}
} else {
}

var G__282679 = (i_282674 + (1));
i_282674 = G__282679;
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
var o__36322__auto___282687 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
if(!(o__36322__auto___282687 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___282687)){
o__36322__auto___282687.call(null,((function (o__36322__auto___282687,f,cs,oc,nc,d){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs);
});})(o__36322__auto___282687,f,cs,oc,nc,d))
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
var o__36322__auto___282739 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-children","update-children",1871853561),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36322__auto___282739 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto___282739)){
o__36322__auto___282739.call(null,((function (o__36322__auto___282739,om,nm,och,nch){
return (function (){
return hipo.interpreter.update_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),int$);
});})(o__36322__auto___282739,om,nm,och,nch))
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
var G__282818__delegate = function (nh,p__282815){
var vec__282816 = p__282815;
var m = cljs.core.nth.call(null,vec__282816,(0),null);
var int$ = new cljs.core.Keyword(null,"interceptor","interceptor",1127739076).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
} else {
var o__36322__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36322__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36322__auto__)){
return o__36322__auto__.call(null,((function (o__36322__auto__,int$,vec__282816,m,a){
return (function (){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
});})(o__36322__auto__,int$,vec__282816,m,a))
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
var G__282818 = function (nh,var_args){
var p__282815 = null;
if (arguments.length > 1) {
var G__282821__i = 0, G__282821__a = new Array(arguments.length -  1);
while (G__282821__i < G__282821__a.length) {G__282821__a[G__282821__i] = arguments[G__282821__i + 1]; ++G__282821__i;}
  p__282815 = new cljs.core.IndexedSeq(G__282821__a,0);
} 
return G__282818__delegate.call(this,nh,p__282815);};
G__282818.cljs$lang$maxFixedArity = 1;
G__282818.cljs$lang$applyTo = (function (arglist__282823){
var nh = cljs.core.first(arglist__282823);
var p__282815 = cljs.core.rest(arglist__282823);
return G__282818__delegate(nh,p__282815);
});
G__282818.cljs$core$IFn$_invoke$arity$variadic = G__282818__delegate;
return G__282818;
})()
;})(a))
], null);
});
