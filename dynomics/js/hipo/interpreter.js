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
var temp__4423__auto___1881379 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4423__auto___1881379)){
var h_1881380 = temp__4423__auto___1881379;
hipo.interpreter.append_child_BANG_.call(null,el,h_1881380);
} else {
}

var G__1881381 = cljs.core.rest.call(null,v__$1);
v__$1 = G__1881381;
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
var seq__1881388_1881394 = cljs.core.seq.call(null,attrs);
var chunk__1881389_1881395 = null;
var count__1881390_1881396 = (0);
var i__1881391_1881397 = (0);
while(true){
if((i__1881391_1881397 < count__1881390_1881396)){
var vec__1881392_1881398 = cljs.core._nth.call(null,chunk__1881389_1881395,i__1881391_1881397);
var k_1881399 = cljs.core.nth.call(null,vec__1881392_1881398,(0),null);
var v_1881400 = cljs.core.nth.call(null,vec__1881392_1881398,(1),null);
if(cljs.core.truth_(v_1881400)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_1881399),null,v_1881400);
} else {
}

var G__1881401 = seq__1881388_1881394;
var G__1881402 = chunk__1881389_1881395;
var G__1881403 = count__1881390_1881396;
var G__1881404 = (i__1881391_1881397 + (1));
seq__1881388_1881394 = G__1881401;
chunk__1881389_1881395 = G__1881402;
count__1881390_1881396 = G__1881403;
i__1881391_1881397 = G__1881404;
continue;
} else {
var temp__4425__auto___1881405 = cljs.core.seq.call(null,seq__1881388_1881394);
if(temp__4425__auto___1881405){
var seq__1881388_1881406__$1 = temp__4425__auto___1881405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1881388_1881406__$1)){
var c__24964__auto___1881407 = cljs.core.chunk_first.call(null,seq__1881388_1881406__$1);
var G__1881408 = cljs.core.chunk_rest.call(null,seq__1881388_1881406__$1);
var G__1881409 = c__24964__auto___1881407;
var G__1881410 = cljs.core.count.call(null,c__24964__auto___1881407);
var G__1881411 = (0);
seq__1881388_1881394 = G__1881408;
chunk__1881389_1881395 = G__1881409;
count__1881390_1881396 = G__1881410;
i__1881391_1881397 = G__1881411;
continue;
} else {
var vec__1881393_1881412 = cljs.core.first.call(null,seq__1881388_1881406__$1);
var k_1881413 = cljs.core.nth.call(null,vec__1881393_1881412,(0),null);
var v_1881414 = cljs.core.nth.call(null,vec__1881393_1881412,(1),null);
if(cljs.core.truth_(v_1881414)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_1881413),null,v_1881414);
} else {
}

var G__1881415 = cljs.core.next.call(null,seq__1881388_1881406__$1);
var G__1881416 = null;
var G__1881417 = (0);
var G__1881418 = (0);
seq__1881388_1881394 = G__1881415;
chunk__1881389_1881395 = G__1881416;
count__1881390_1881396 = G__1881417;
i__1881391_1881397 = G__1881418;
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
var G__1881419 = pel;
el = G__1881419;
continue;
} else {
(el["hipo-partially-compiled"] = true);

return el;
}
break;
}
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o){
if(cljs.core.truth_((function (){var or__24161__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
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
var seq__1881434_1881448 = cljs.core.seq.call(null,nm);
var chunk__1881436_1881449 = null;
var count__1881437_1881450 = (0);
var i__1881438_1881451 = (0);
while(true){
if((i__1881438_1881451 < count__1881437_1881450)){
var vec__1881440_1881452 = cljs.core._nth.call(null,chunk__1881436_1881449,i__1881438_1881451);
var nk_1881453 = cljs.core.nth.call(null,vec__1881440_1881452,(0),null);
var nv_1881454 = cljs.core.nth.call(null,vec__1881440_1881452,(1),null);
var ov_1881455 = nk_1881453.call(null,om);
var n_1881456 = cljs.core.name.call(null,nk_1881453);
if(!((ov_1881455 === nv_1881454))){
if(cljs.core.truth_(nv_1881454)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_1881456,ov_1881455,nv_1881454);
} else {
var o__28731__auto___1881457 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_1881456,new cljs.core.Keyword(null,"value","value",305978217),nv_1881454], null));
if(!(o__28731__auto___1881457 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___1881457)){
o__28731__auto___1881457.call(null,((function (seq__1881434_1881448,chunk__1881436_1881449,count__1881437_1881450,i__1881438_1881451,o__28731__auto___1881457,ov_1881455,n_1881456,vec__1881440_1881452,nk_1881453,nv_1881454){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_1881456,ov_1881455,nv_1881454);
});})(seq__1881434_1881448,chunk__1881436_1881449,count__1881437_1881450,i__1881438_1881451,o__28731__auto___1881457,ov_1881455,n_1881456,vec__1881440_1881452,nk_1881453,nv_1881454))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_1881456,ov_1881455,nv_1881454);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_1881456,ov_1881455,null);
} else {
var o__28731__auto___1881458 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_1881456], null));
if(!(o__28731__auto___1881458 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___1881458)){
o__28731__auto___1881458.call(null,((function (seq__1881434_1881448,chunk__1881436_1881449,count__1881437_1881450,i__1881438_1881451,o__28731__auto___1881458,ov_1881455,n_1881456,vec__1881440_1881452,nk_1881453,nv_1881454){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_1881456,ov_1881455,null);
});})(seq__1881434_1881448,chunk__1881436_1881449,count__1881437_1881450,i__1881438_1881451,o__28731__auto___1881458,ov_1881455,n_1881456,vec__1881440_1881452,nk_1881453,nv_1881454))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_1881456,ov_1881455,null);
}
} else {
}
}
}
} else {
}

var G__1881459 = seq__1881434_1881448;
var G__1881460 = chunk__1881436_1881449;
var G__1881461 = count__1881437_1881450;
var G__1881462 = (i__1881438_1881451 + (1));
seq__1881434_1881448 = G__1881459;
chunk__1881436_1881449 = G__1881460;
count__1881437_1881450 = G__1881461;
i__1881438_1881451 = G__1881462;
continue;
} else {
var temp__4425__auto___1881463 = cljs.core.seq.call(null,seq__1881434_1881448);
if(temp__4425__auto___1881463){
var seq__1881434_1881464__$1 = temp__4425__auto___1881463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1881434_1881464__$1)){
var c__24964__auto___1881465 = cljs.core.chunk_first.call(null,seq__1881434_1881464__$1);
var G__1881466 = cljs.core.chunk_rest.call(null,seq__1881434_1881464__$1);
var G__1881467 = c__24964__auto___1881465;
var G__1881468 = cljs.core.count.call(null,c__24964__auto___1881465);
var G__1881469 = (0);
seq__1881434_1881448 = G__1881466;
chunk__1881436_1881449 = G__1881467;
count__1881437_1881450 = G__1881468;
i__1881438_1881451 = G__1881469;
continue;
} else {
var vec__1881441_1881470 = cljs.core.first.call(null,seq__1881434_1881464__$1);
var nk_1881471 = cljs.core.nth.call(null,vec__1881441_1881470,(0),null);
var nv_1881472 = cljs.core.nth.call(null,vec__1881441_1881470,(1),null);
var ov_1881473 = nk_1881471.call(null,om);
var n_1881474 = cljs.core.name.call(null,nk_1881471);
if(!((ov_1881473 === nv_1881472))){
if(cljs.core.truth_(nv_1881472)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_1881474,ov_1881473,nv_1881472);
} else {
var o__28731__auto___1881475 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_1881474,new cljs.core.Keyword(null,"value","value",305978217),nv_1881472], null));
if(!(o__28731__auto___1881475 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___1881475)){
o__28731__auto___1881475.call(null,((function (seq__1881434_1881448,chunk__1881436_1881449,count__1881437_1881450,i__1881438_1881451,o__28731__auto___1881475,ov_1881473,n_1881474,vec__1881441_1881470,nk_1881471,nv_1881472,seq__1881434_1881464__$1,temp__4425__auto___1881463){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_1881474,ov_1881473,nv_1881472);
});})(seq__1881434_1881448,chunk__1881436_1881449,count__1881437_1881450,i__1881438_1881451,o__28731__auto___1881475,ov_1881473,n_1881474,vec__1881441_1881470,nk_1881471,nv_1881472,seq__1881434_1881464__$1,temp__4425__auto___1881463))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_1881474,ov_1881473,nv_1881472);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_1881474,ov_1881473,null);
} else {
var o__28731__auto___1881476 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_1881474], null));
if(!(o__28731__auto___1881476 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___1881476)){
o__28731__auto___1881476.call(null,((function (seq__1881434_1881448,chunk__1881436_1881449,count__1881437_1881450,i__1881438_1881451,o__28731__auto___1881476,ov_1881473,n_1881474,vec__1881441_1881470,nk_1881471,nv_1881472,seq__1881434_1881464__$1,temp__4425__auto___1881463){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_1881474,ov_1881473,null);
});})(seq__1881434_1881448,chunk__1881436_1881449,count__1881437_1881450,i__1881438_1881451,o__28731__auto___1881476,ov_1881473,n_1881474,vec__1881441_1881470,nk_1881471,nv_1881472,seq__1881434_1881464__$1,temp__4425__auto___1881463))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_1881474,ov_1881473,null);
}
} else {
}
}
}
} else {
}

var G__1881477 = cljs.core.next.call(null,seq__1881434_1881464__$1);
var G__1881478 = null;
var G__1881479 = (0);
var G__1881480 = (0);
seq__1881434_1881448 = G__1881477;
chunk__1881436_1881449 = G__1881478;
count__1881437_1881450 = G__1881479;
i__1881438_1881451 = G__1881480;
continue;
}
} else {
}
}
break;
}

var seq__1881442 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__1881444 = null;
var count__1881445 = (0);
var i__1881446 = (0);
while(true){
if((i__1881446 < count__1881445)){
var k = cljs.core._nth.call(null,chunk__1881444,i__1881446);
var n_1881481 = cljs.core.name.call(null,k);
var ov_1881482 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_1881481,ov_1881482,null);
} else {
var o__28731__auto___1881483 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_1881481], null));
if(!(o__28731__auto___1881483 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___1881483)){
o__28731__auto___1881483.call(null,((function (seq__1881442,chunk__1881444,count__1881445,i__1881446,o__28731__auto___1881483,n_1881481,ov_1881482,k){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_1881481,ov_1881482,null);
});})(seq__1881442,chunk__1881444,count__1881445,i__1881446,o__28731__auto___1881483,n_1881481,ov_1881482,k))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_1881481,ov_1881482,null);
}
} else {
}
}

var G__1881484 = seq__1881442;
var G__1881485 = chunk__1881444;
var G__1881486 = count__1881445;
var G__1881487 = (i__1881446 + (1));
seq__1881442 = G__1881484;
chunk__1881444 = G__1881485;
count__1881445 = G__1881486;
i__1881446 = G__1881487;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__1881442);
if(temp__4425__auto__){
var seq__1881442__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1881442__$1)){
var c__24964__auto__ = cljs.core.chunk_first.call(null,seq__1881442__$1);
var G__1881488 = cljs.core.chunk_rest.call(null,seq__1881442__$1);
var G__1881489 = c__24964__auto__;
var G__1881490 = cljs.core.count.call(null,c__24964__auto__);
var G__1881491 = (0);
seq__1881442 = G__1881488;
chunk__1881444 = G__1881489;
count__1881445 = G__1881490;
i__1881446 = G__1881491;
continue;
} else {
var k = cljs.core.first.call(null,seq__1881442__$1);
var n_1881492 = cljs.core.name.call(null,k);
var ov_1881493 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_1881492,ov_1881493,null);
} else {
var o__28731__auto___1881494 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_1881492], null));
if(!(o__28731__auto___1881494 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___1881494)){
o__28731__auto___1881494.call(null,((function (seq__1881442,chunk__1881444,count__1881445,i__1881446,o__28731__auto___1881494,n_1881492,ov_1881493,k,seq__1881442__$1,temp__4425__auto__){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_1881492,ov_1881493,null);
});})(seq__1881442,chunk__1881444,count__1881445,i__1881446,o__28731__auto___1881494,n_1881492,ov_1881493,k,seq__1881442__$1,temp__4425__auto__))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_1881492,ov_1881493,null);
}
} else {
}
}

var G__1881495 = cljs.core.next.call(null,seq__1881442__$1);
var G__1881496 = null;
var G__1881497 = (0);
var G__1881498 = (0);
seq__1881442 = G__1881495;
chunk__1881444 = G__1881496;
count__1881445 = G__1881497;
i__1881446 = G__1881498;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__24933__auto__ = (function hipo$interpreter$keyed_children__GT_map_$_iter__1881503(s__1881504){
return (new cljs.core.LazySeq(null,(function (){
var s__1881504__$1 = s__1881504;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1881504__$1);
if(temp__4425__auto__){
var s__1881504__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1881504__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1881504__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1881506 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1881505 = (0);
while(true){
if((i__1881505 < size__24932__auto__)){
var h = cljs.core._nth.call(null,c__24931__auto__,i__1881505);
cljs.core.chunk_append.call(null,b__1881506,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null));

var G__1881507 = (i__1881505 + (1));
i__1881505 = G__1881507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1881506),hipo$interpreter$keyed_children__GT_map_$_iter__1881503.call(null,cljs.core.chunk_rest.call(null,s__1881504__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1881506),null);
}
} else {
var h = cljs.core.first.call(null,s__1881504__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null),hipo$interpreter$keyed_children__GT_map_$_iter__1881503.call(null,cljs.core.rest.call(null,s__1881504__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24933__auto__.call(null,v);
})());
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__24933__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__1881512(s__1881513){
return (new cljs.core.LazySeq(null,(function (){
var s__1881513__$1 = s__1881513;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1881513__$1);
if(temp__4425__auto__){
var s__1881513__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1881513__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1881513__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1881515 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1881514 = (0);
while(true){
if((i__1881514 < size__24932__auto__)){
var ih = cljs.core._nth.call(null,c__24931__auto__,i__1881514);
cljs.core.chunk_append.call(null,b__1881515,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__1881516 = (i__1881514 + (1));
i__1881514 = G__1881516;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1881515),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__1881512.call(null,cljs.core.chunk_rest.call(null,s__1881513__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1881515),null);
}
} else {
var ih = cljs.core.first.call(null,s__1881513__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__1881512.call(null,cljs.core.rest.call(null,s__1881513__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24933__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__24933__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__24933__auto__))
,v));
})());
});
hipo.interpreter.update_keyed_children_BANG_ = (function hipo$interpreter$update_keyed_children_BANG_(el,och,nch,int$){
var om = hipo.interpreter.keyed_children__GT_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__1881525_1881533 = cljs.core.seq.call(null,nm);
var chunk__1881526_1881534 = null;
var count__1881527_1881535 = (0);
var i__1881528_1881536 = (0);
while(true){
if((i__1881528_1881536 < count__1881527_1881535)){
var vec__1881529_1881537 = cljs.core._nth.call(null,chunk__1881526_1881534,i__1881528_1881536);
var i_1881538 = cljs.core.nth.call(null,vec__1881529_1881537,(0),null);
var vec__1881530_1881539 = cljs.core.nth.call(null,vec__1881529_1881537,(1),null);
var ii_1881540 = cljs.core.nth.call(null,vec__1881530_1881539,(0),null);
var h_1881541 = cljs.core.nth.call(null,vec__1881530_1881539,(1),null);
var temp__4423__auto___1881542 = cljs.core.get.call(null,om,i_1881538);
if(cljs.core.truth_(temp__4423__auto___1881542)){
var oh_1881543 = temp__4423__auto___1881542;
if(cljs.core.not.call(null,int$)){
if((oh_1881543 === h_1881541)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_1881540,cljs.core.nth.call(null,cs,i_1881538));
} else {
var ncel_1881544 = el.removeChild(cljs.core.nth.call(null,cs,i_1881538));
hipo.interpreter.update_BANG_.call(null,ncel_1881544,oh_1881543,h_1881541,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_1881540,ncel_1881544);
}
} else {
var o__28731__auto___1881545 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_1881541,new cljs.core.Keyword(null,"index","index",-1531685915),ii_1881540], null));
if(!(o__28731__auto___1881545 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___1881545)){
o__28731__auto___1881545.call(null,((function (seq__1881525_1881533,chunk__1881526_1881534,count__1881527_1881535,i__1881528_1881536,o__28731__auto___1881545,oh_1881543,temp__4423__auto___1881542,vec__1881529_1881537,i_1881538,vec__1881530_1881539,ii_1881540,h_1881541,om,nm,cs){
return (function (){
if((oh_1881543 === h_1881541)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_1881540,cljs.core.nth.call(null,cs,i_1881538));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_1881538));
hipo.interpreter.update_BANG_.call(null,ncel,oh_1881543,h_1881541,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_1881540,ncel);
}
});})(seq__1881525_1881533,chunk__1881526_1881534,count__1881527_1881535,i__1881528_1881536,o__28731__auto___1881545,oh_1881543,temp__4423__auto___1881542,vec__1881529_1881537,i_1881538,vec__1881530_1881539,ii_1881540,h_1881541,om,nm,cs))
);
} else {
if((oh_1881543 === h_1881541)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_1881540,cljs.core.nth.call(null,cs,i_1881538));
} else {
var ncel_1881546 = el.removeChild(cljs.core.nth.call(null,cs,i_1881538));
hipo.interpreter.update_BANG_.call(null,ncel_1881546,oh_1881543,h_1881541,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_1881540,ncel_1881546);
}
}
} else {
}
}
} else {
var nel_1881547 = hipo.interpreter.create_child.call(null,h_1881541);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_1881540,nel_1881547);
} else {
var o__28731__auto___1881548 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_1881547,new cljs.core.Keyword(null,"index","index",-1531685915),ii_1881540], null));
if(!(o__28731__auto___1881548 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___1881548)){
o__28731__auto___1881548.call(null,((function (seq__1881525_1881533,chunk__1881526_1881534,count__1881527_1881535,i__1881528_1881536,o__28731__auto___1881548,nel_1881547,temp__4423__auto___1881542,vec__1881529_1881537,i_1881538,vec__1881530_1881539,ii_1881540,h_1881541,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_1881540,nel_1881547);
});})(seq__1881525_1881533,chunk__1881526_1881534,count__1881527_1881535,i__1881528_1881536,o__28731__auto___1881548,nel_1881547,temp__4423__auto___1881542,vec__1881529_1881537,i_1881538,vec__1881530_1881539,ii_1881540,h_1881541,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_1881540,nel_1881547);
}
} else {
}
}
}

var G__1881549 = seq__1881525_1881533;
var G__1881550 = chunk__1881526_1881534;
var G__1881551 = count__1881527_1881535;
var G__1881552 = (i__1881528_1881536 + (1));
seq__1881525_1881533 = G__1881549;
chunk__1881526_1881534 = G__1881550;
count__1881527_1881535 = G__1881551;
i__1881528_1881536 = G__1881552;
continue;
} else {
var temp__4425__auto___1881553 = cljs.core.seq.call(null,seq__1881525_1881533);
if(temp__4425__auto___1881553){
var seq__1881525_1881554__$1 = temp__4425__auto___1881553;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1881525_1881554__$1)){
var c__24964__auto___1881555 = cljs.core.chunk_first.call(null,seq__1881525_1881554__$1);
var G__1881556 = cljs.core.chunk_rest.call(null,seq__1881525_1881554__$1);
var G__1881557 = c__24964__auto___1881555;
var G__1881558 = cljs.core.count.call(null,c__24964__auto___1881555);
var G__1881559 = (0);
seq__1881525_1881533 = G__1881556;
chunk__1881526_1881534 = G__1881557;
count__1881527_1881535 = G__1881558;
i__1881528_1881536 = G__1881559;
continue;
} else {
var vec__1881531_1881560 = cljs.core.first.call(null,seq__1881525_1881554__$1);
var i_1881561 = cljs.core.nth.call(null,vec__1881531_1881560,(0),null);
var vec__1881532_1881562 = cljs.core.nth.call(null,vec__1881531_1881560,(1),null);
var ii_1881563 = cljs.core.nth.call(null,vec__1881532_1881562,(0),null);
var h_1881564 = cljs.core.nth.call(null,vec__1881532_1881562,(1),null);
var temp__4423__auto___1881565 = cljs.core.get.call(null,om,i_1881561);
if(cljs.core.truth_(temp__4423__auto___1881565)){
var oh_1881566 = temp__4423__auto___1881565;
if(cljs.core.not.call(null,int$)){
if((oh_1881566 === h_1881564)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_1881563,cljs.core.nth.call(null,cs,i_1881561));
} else {
var ncel_1881567 = el.removeChild(cljs.core.nth.call(null,cs,i_1881561));
hipo.interpreter.update_BANG_.call(null,ncel_1881567,oh_1881566,h_1881564,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_1881563,ncel_1881567);
}
} else {
var o__28731__auto___1881568 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_1881564,new cljs.core.Keyword(null,"index","index",-1531685915),ii_1881563], null));
if(!(o__28731__auto___1881568 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___1881568)){
o__28731__auto___1881568.call(null,((function (seq__1881525_1881533,chunk__1881526_1881534,count__1881527_1881535,i__1881528_1881536,o__28731__auto___1881568,oh_1881566,temp__4423__auto___1881565,vec__1881531_1881560,i_1881561,vec__1881532_1881562,ii_1881563,h_1881564,seq__1881525_1881554__$1,temp__4425__auto___1881553,om,nm,cs){
return (function (){
if((oh_1881566 === h_1881564)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_1881563,cljs.core.nth.call(null,cs,i_1881561));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_1881561));
hipo.interpreter.update_BANG_.call(null,ncel,oh_1881566,h_1881564,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_1881563,ncel);
}
});})(seq__1881525_1881533,chunk__1881526_1881534,count__1881527_1881535,i__1881528_1881536,o__28731__auto___1881568,oh_1881566,temp__4423__auto___1881565,vec__1881531_1881560,i_1881561,vec__1881532_1881562,ii_1881563,h_1881564,seq__1881525_1881554__$1,temp__4425__auto___1881553,om,nm,cs))
);
} else {
if((oh_1881566 === h_1881564)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_1881563,cljs.core.nth.call(null,cs,i_1881561));
} else {
var ncel_1881569 = el.removeChild(cljs.core.nth.call(null,cs,i_1881561));
hipo.interpreter.update_BANG_.call(null,ncel_1881569,oh_1881566,h_1881564,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_1881563,ncel_1881569);
}
}
} else {
}
}
} else {
var nel_1881570 = hipo.interpreter.create_child.call(null,h_1881564);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_1881563,nel_1881570);
} else {
var o__28731__auto___1881571 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_1881570,new cljs.core.Keyword(null,"index","index",-1531685915),ii_1881563], null));
if(!(o__28731__auto___1881571 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___1881571)){
o__28731__auto___1881571.call(null,((function (seq__1881525_1881533,chunk__1881526_1881534,count__1881527_1881535,i__1881528_1881536,o__28731__auto___1881571,nel_1881570,temp__4423__auto___1881565,vec__1881531_1881560,i_1881561,vec__1881532_1881562,ii_1881563,h_1881564,seq__1881525_1881554__$1,temp__4425__auto___1881553,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_1881563,nel_1881570);
});})(seq__1881525_1881533,chunk__1881526_1881534,count__1881527_1881535,i__1881528_1881536,o__28731__auto___1881571,nel_1881570,temp__4423__auto___1881565,vec__1881531_1881560,i_1881561,vec__1881532_1881562,ii_1881563,h_1881564,seq__1881525_1881554__$1,temp__4425__auto___1881553,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_1881563,nel_1881570);
}
} else {
}
}
}

var G__1881572 = cljs.core.next.call(null,seq__1881525_1881554__$1);
var G__1881573 = null;
var G__1881574 = (0);
var G__1881575 = (0);
seq__1881525_1881533 = G__1881572;
chunk__1881526_1881534 = G__1881573;
count__1881527_1881535 = G__1881574;
i__1881528_1881536 = G__1881575;
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
var o__28731__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__28731__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto__)){
return o__28731__auto__.call(null,((function (o__28731__auto__,d,om,nm,cs){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__28731__auto__,d,om,nm,cs))
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
var o__28731__auto___1881576 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__28731__auto___1881576 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___1881576)){
o__28731__auto___1881576.call(null,((function (o__28731__auto___1881576,oc,nc,d){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__28731__auto___1881576,oc,nc,d))
);
} else {
hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
}
} else {
}
}
} else {
}

var n__25064__auto___1881577 = (function (){var x__24499__auto__ = oc;
var y__24500__auto__ = nc;
return ((x__24499__auto__ < y__24500__auto__) ? x__24499__auto__ : y__24500__auto__);
})();
var i_1881578 = (0);
while(true){
if((i_1881578 < n__25064__auto___1881577)){
var ov_1881579 = cljs.core.nth.call(null,och,i_1881578);
var nv_1881580 = cljs.core.nth.call(null,nch,i_1881578);
if(!((ov_1881579 === nv_1881580))){
var temp__4423__auto___1881581 = hipo.dom.child_at.call(null,el,i_1881578);
if(cljs.core.truth_(temp__4423__auto___1881581)){
var cel_1881582 = temp__4423__auto___1881581;
hipo.interpreter.update_BANG_.call(null,cel_1881582,ov_1881579,nv_1881580,int$);
} else {
}
} else {
}

var G__1881583 = (i_1881578 + (1));
i_1881578 = G__1881583;
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
var o__28731__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
if(!(o__28731__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto__)){
return o__28731__auto__.call(null,((function (o__28731__auto__,h,oc,nc,d){
return (function (){
return hipo.interpreter.append_child_BANG_.call(null,el,h);
});})(o__28731__auto__,h,oc,nc,d))
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
var o__28731__auto___1881584 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
if(!(o__28731__auto___1881584 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___1881584)){
o__28731__auto___1881584.call(null,((function (o__28731__auto___1881584,f,cs,oc,nc,d){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs);
});})(o__28731__auto___1881584,f,cs,oc,nc,d))
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
var o__28731__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__28731__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto__)){
return o__28731__auto__.call(null,((function (o__28731__auto__){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(o__28731__auto__))
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
var o__28731__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel], null));
if(!(o__28731__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto__)){
return o__28731__auto__.call(null,((function (o__28731__auto__,nel){
return (function (){
return hipo.dom.replace_BANG_.call(null,el,nel);
});})(o__28731__auto__,nel))
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
var o__28731__auto___1881585 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-children","update-children",1871853561),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__28731__auto___1881585 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___1881585)){
o__28731__auto___1881585.call(null,((function (o__28731__auto___1881585,om,nm,och,nch){
return (function (){
return hipo.interpreter.update_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),int$);
});})(o__28731__auto___1881585,om,nm,och,nch))
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
if(cljs.core.truth_((function (){var or__24161__auto__ = cljs.core.vector_QMARK_.call(null,h);
if(or__24161__auto__){
return or__24161__auto__;
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
var o__28731__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
if(!(o__28731__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto__)){
return o__28731__auto__.call(null,((function (o__28731__auto__){
return (function (){
return hipo.dom.replace_text_BANG_.call(null,el,h);
});})(o__28731__auto__))
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
var G__1881590__delegate = function (nh,p__1881588){
var vec__1881589 = p__1881588;
var m = cljs.core.nth.call(null,vec__1881589,(0),null);
var int$ = new cljs.core.Keyword(null,"interceptor","interceptor",1127739076).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
} else {
var o__28731__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__28731__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto__)){
return o__28731__auto__.call(null,((function (o__28731__auto__,int$,vec__1881589,m,a){
return (function (){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
});})(o__28731__auto__,int$,vec__1881589,m,a))
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
var G__1881590 = function (nh,var_args){
var p__1881588 = null;
if (arguments.length > 1) {
var G__1881591__i = 0, G__1881591__a = new Array(arguments.length -  1);
while (G__1881591__i < G__1881591__a.length) {G__1881591__a[G__1881591__i] = arguments[G__1881591__i + 1]; ++G__1881591__i;}
  p__1881588 = new cljs.core.IndexedSeq(G__1881591__a,0);
} 
return G__1881590__delegate.call(this,nh,p__1881588);};
G__1881590.cljs$lang$maxFixedArity = 1;
G__1881590.cljs$lang$applyTo = (function (arglist__1881592){
var nh = cljs.core.first(arglist__1881592);
var p__1881588 = cljs.core.rest(arglist__1881592);
return G__1881590__delegate(nh,p__1881588);
});
G__1881590.cljs$core$IFn$_invoke$arity$variadic = G__1881590__delegate;
return G__1881590;
})()
;})(a))
], null);
});

//# sourceMappingURL=interpreter.js.map