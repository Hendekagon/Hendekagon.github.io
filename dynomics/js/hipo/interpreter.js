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
var temp__4423__auto___876460 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4423__auto___876460)){
var h_876461 = temp__4423__auto___876460;
hipo.interpreter.append_child_BANG_.call(null,el,h_876461);
} else {
}

var G__876462 = cljs.core.rest.call(null,v__$1);
v__$1 = G__876462;
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
var seq__876469_876475 = cljs.core.seq.call(null,attrs);
var chunk__876470_876476 = null;
var count__876471_876477 = (0);
var i__876472_876478 = (0);
while(true){
if((i__876472_876478 < count__876471_876477)){
var vec__876473_876479 = cljs.core._nth.call(null,chunk__876470_876476,i__876472_876478);
var k_876480 = cljs.core.nth.call(null,vec__876473_876479,(0),null);
var v_876481 = cljs.core.nth.call(null,vec__876473_876479,(1),null);
if(cljs.core.truth_(v_876481)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_876480),null,v_876481);
} else {
}

var G__876482 = seq__876469_876475;
var G__876483 = chunk__876470_876476;
var G__876484 = count__876471_876477;
var G__876485 = (i__876472_876478 + (1));
seq__876469_876475 = G__876482;
chunk__876470_876476 = G__876483;
count__876471_876477 = G__876484;
i__876472_876478 = G__876485;
continue;
} else {
var temp__4425__auto___876486 = cljs.core.seq.call(null,seq__876469_876475);
if(temp__4425__auto___876486){
var seq__876469_876487__$1 = temp__4425__auto___876486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__876469_876487__$1)){
var c__25014__auto___876488 = cljs.core.chunk_first.call(null,seq__876469_876487__$1);
var G__876489 = cljs.core.chunk_rest.call(null,seq__876469_876487__$1);
var G__876490 = c__25014__auto___876488;
var G__876491 = cljs.core.count.call(null,c__25014__auto___876488);
var G__876492 = (0);
seq__876469_876475 = G__876489;
chunk__876470_876476 = G__876490;
count__876471_876477 = G__876491;
i__876472_876478 = G__876492;
continue;
} else {
var vec__876474_876493 = cljs.core.first.call(null,seq__876469_876487__$1);
var k_876494 = cljs.core.nth.call(null,vec__876474_876493,(0),null);
var v_876495 = cljs.core.nth.call(null,vec__876474_876493,(1),null);
if(cljs.core.truth_(v_876495)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_876494),null,v_876495);
} else {
}

var G__876496 = cljs.core.next.call(null,seq__876469_876487__$1);
var G__876497 = null;
var G__876498 = (0);
var G__876499 = (0);
seq__876469_876475 = G__876496;
chunk__876470_876476 = G__876497;
count__876471_876477 = G__876498;
i__876472_876478 = G__876499;
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
var G__876500 = pel;
el = G__876500;
continue;
} else {
(el["hipo-partially-compiled"] = true);

return el;
}
break;
}
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o){
if(cljs.core.truth_((function (){var or__24211__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
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
var seq__876515_876529 = cljs.core.seq.call(null,nm);
var chunk__876517_876530 = null;
var count__876518_876531 = (0);
var i__876519_876532 = (0);
while(true){
if((i__876519_876532 < count__876518_876531)){
var vec__876521_876533 = cljs.core._nth.call(null,chunk__876517_876530,i__876519_876532);
var nk_876534 = cljs.core.nth.call(null,vec__876521_876533,(0),null);
var nv_876535 = cljs.core.nth.call(null,vec__876521_876533,(1),null);
var ov_876536 = nk_876534.call(null,om);
var n_876537 = cljs.core.name.call(null,nk_876534);
if(!((ov_876536 === nv_876535))){
if(cljs.core.truth_(nv_876535)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_876537,ov_876536,nv_876535);
} else {
var o__25414__auto___876538 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_876537,new cljs.core.Keyword(null,"value","value",305978217),nv_876535], null));
if(!(o__25414__auto___876538 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___876538)){
o__25414__auto___876538.call(null,((function (seq__876515_876529,chunk__876517_876530,count__876518_876531,i__876519_876532,o__25414__auto___876538,ov_876536,n_876537,vec__876521_876533,nk_876534,nv_876535){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_876537,ov_876536,nv_876535);
});})(seq__876515_876529,chunk__876517_876530,count__876518_876531,i__876519_876532,o__25414__auto___876538,ov_876536,n_876537,vec__876521_876533,nk_876534,nv_876535))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_876537,ov_876536,nv_876535);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_876537,ov_876536,null);
} else {
var o__25414__auto___876539 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_876537], null));
if(!(o__25414__auto___876539 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___876539)){
o__25414__auto___876539.call(null,((function (seq__876515_876529,chunk__876517_876530,count__876518_876531,i__876519_876532,o__25414__auto___876539,ov_876536,n_876537,vec__876521_876533,nk_876534,nv_876535){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_876537,ov_876536,null);
});})(seq__876515_876529,chunk__876517_876530,count__876518_876531,i__876519_876532,o__25414__auto___876539,ov_876536,n_876537,vec__876521_876533,nk_876534,nv_876535))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_876537,ov_876536,null);
}
} else {
}
}
}
} else {
}

var G__876540 = seq__876515_876529;
var G__876541 = chunk__876517_876530;
var G__876542 = count__876518_876531;
var G__876543 = (i__876519_876532 + (1));
seq__876515_876529 = G__876540;
chunk__876517_876530 = G__876541;
count__876518_876531 = G__876542;
i__876519_876532 = G__876543;
continue;
} else {
var temp__4425__auto___876544 = cljs.core.seq.call(null,seq__876515_876529);
if(temp__4425__auto___876544){
var seq__876515_876545__$1 = temp__4425__auto___876544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__876515_876545__$1)){
var c__25014__auto___876546 = cljs.core.chunk_first.call(null,seq__876515_876545__$1);
var G__876547 = cljs.core.chunk_rest.call(null,seq__876515_876545__$1);
var G__876548 = c__25014__auto___876546;
var G__876549 = cljs.core.count.call(null,c__25014__auto___876546);
var G__876550 = (0);
seq__876515_876529 = G__876547;
chunk__876517_876530 = G__876548;
count__876518_876531 = G__876549;
i__876519_876532 = G__876550;
continue;
} else {
var vec__876522_876551 = cljs.core.first.call(null,seq__876515_876545__$1);
var nk_876552 = cljs.core.nth.call(null,vec__876522_876551,(0),null);
var nv_876553 = cljs.core.nth.call(null,vec__876522_876551,(1),null);
var ov_876554 = nk_876552.call(null,om);
var n_876555 = cljs.core.name.call(null,nk_876552);
if(!((ov_876554 === nv_876553))){
if(cljs.core.truth_(nv_876553)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_876555,ov_876554,nv_876553);
} else {
var o__25414__auto___876556 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_876555,new cljs.core.Keyword(null,"value","value",305978217),nv_876553], null));
if(!(o__25414__auto___876556 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___876556)){
o__25414__auto___876556.call(null,((function (seq__876515_876529,chunk__876517_876530,count__876518_876531,i__876519_876532,o__25414__auto___876556,ov_876554,n_876555,vec__876522_876551,nk_876552,nv_876553,seq__876515_876545__$1,temp__4425__auto___876544){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_876555,ov_876554,nv_876553);
});})(seq__876515_876529,chunk__876517_876530,count__876518_876531,i__876519_876532,o__25414__auto___876556,ov_876554,n_876555,vec__876522_876551,nk_876552,nv_876553,seq__876515_876545__$1,temp__4425__auto___876544))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_876555,ov_876554,nv_876553);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_876555,ov_876554,null);
} else {
var o__25414__auto___876557 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_876555], null));
if(!(o__25414__auto___876557 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___876557)){
o__25414__auto___876557.call(null,((function (seq__876515_876529,chunk__876517_876530,count__876518_876531,i__876519_876532,o__25414__auto___876557,ov_876554,n_876555,vec__876522_876551,nk_876552,nv_876553,seq__876515_876545__$1,temp__4425__auto___876544){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_876555,ov_876554,null);
});})(seq__876515_876529,chunk__876517_876530,count__876518_876531,i__876519_876532,o__25414__auto___876557,ov_876554,n_876555,vec__876522_876551,nk_876552,nv_876553,seq__876515_876545__$1,temp__4425__auto___876544))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_876555,ov_876554,null);
}
} else {
}
}
}
} else {
}

var G__876558 = cljs.core.next.call(null,seq__876515_876545__$1);
var G__876559 = null;
var G__876560 = (0);
var G__876561 = (0);
seq__876515_876529 = G__876558;
chunk__876517_876530 = G__876559;
count__876518_876531 = G__876560;
i__876519_876532 = G__876561;
continue;
}
} else {
}
}
break;
}

var seq__876523 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__876525 = null;
var count__876526 = (0);
var i__876527 = (0);
while(true){
if((i__876527 < count__876526)){
var k = cljs.core._nth.call(null,chunk__876525,i__876527);
var n_876562 = cljs.core.name.call(null,k);
var ov_876563 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_876562,ov_876563,null);
} else {
var o__25414__auto___876564 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_876562], null));
if(!(o__25414__auto___876564 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___876564)){
o__25414__auto___876564.call(null,((function (seq__876523,chunk__876525,count__876526,i__876527,o__25414__auto___876564,n_876562,ov_876563,k){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_876562,ov_876563,null);
});})(seq__876523,chunk__876525,count__876526,i__876527,o__25414__auto___876564,n_876562,ov_876563,k))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_876562,ov_876563,null);
}
} else {
}
}

var G__876565 = seq__876523;
var G__876566 = chunk__876525;
var G__876567 = count__876526;
var G__876568 = (i__876527 + (1));
seq__876523 = G__876565;
chunk__876525 = G__876566;
count__876526 = G__876567;
i__876527 = G__876568;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__876523);
if(temp__4425__auto__){
var seq__876523__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__876523__$1)){
var c__25014__auto__ = cljs.core.chunk_first.call(null,seq__876523__$1);
var G__876569 = cljs.core.chunk_rest.call(null,seq__876523__$1);
var G__876570 = c__25014__auto__;
var G__876571 = cljs.core.count.call(null,c__25014__auto__);
var G__876572 = (0);
seq__876523 = G__876569;
chunk__876525 = G__876570;
count__876526 = G__876571;
i__876527 = G__876572;
continue;
} else {
var k = cljs.core.first.call(null,seq__876523__$1);
var n_876573 = cljs.core.name.call(null,k);
var ov_876574 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_876573,ov_876574,null);
} else {
var o__25414__auto___876575 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_876573], null));
if(!(o__25414__auto___876575 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___876575)){
o__25414__auto___876575.call(null,((function (seq__876523,chunk__876525,count__876526,i__876527,o__25414__auto___876575,n_876573,ov_876574,k,seq__876523__$1,temp__4425__auto__){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_876573,ov_876574,null);
});})(seq__876523,chunk__876525,count__876526,i__876527,o__25414__auto___876575,n_876573,ov_876574,k,seq__876523__$1,temp__4425__auto__))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_876573,ov_876574,null);
}
} else {
}
}

var G__876576 = cljs.core.next.call(null,seq__876523__$1);
var G__876577 = null;
var G__876578 = (0);
var G__876579 = (0);
seq__876523 = G__876576;
chunk__876525 = G__876577;
count__876526 = G__876578;
i__876527 = G__876579;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__24983__auto__ = (function hipo$interpreter$keyed_children__GT_map_$_iter__876584(s__876585){
return (new cljs.core.LazySeq(null,(function (){
var s__876585__$1 = s__876585;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__876585__$1);
if(temp__4425__auto__){
var s__876585__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__876585__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__876585__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__876587 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__876586 = (0);
while(true){
if((i__876586 < size__24982__auto__)){
var h = cljs.core._nth.call(null,c__24981__auto__,i__876586);
cljs.core.chunk_append.call(null,b__876587,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null));

var G__876588 = (i__876586 + (1));
i__876586 = G__876588;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__876587),hipo$interpreter$keyed_children__GT_map_$_iter__876584.call(null,cljs.core.chunk_rest.call(null,s__876585__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__876587),null);
}
} else {
var h = cljs.core.first.call(null,s__876585__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null),hipo$interpreter$keyed_children__GT_map_$_iter__876584.call(null,cljs.core.rest.call(null,s__876585__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24983__auto__.call(null,v);
})());
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__24983__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__876593(s__876594){
return (new cljs.core.LazySeq(null,(function (){
var s__876594__$1 = s__876594;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__876594__$1);
if(temp__4425__auto__){
var s__876594__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__876594__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__876594__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__876596 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__876595 = (0);
while(true){
if((i__876595 < size__24982__auto__)){
var ih = cljs.core._nth.call(null,c__24981__auto__,i__876595);
cljs.core.chunk_append.call(null,b__876596,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__876597 = (i__876595 + (1));
i__876595 = G__876597;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__876596),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__876593.call(null,cljs.core.chunk_rest.call(null,s__876594__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__876596),null);
}
} else {
var ih = cljs.core.first.call(null,s__876594__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__876593.call(null,cljs.core.rest.call(null,s__876594__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24983__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__24983__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__24983__auto__))
,v));
})());
});
hipo.interpreter.update_keyed_children_BANG_ = (function hipo$interpreter$update_keyed_children_BANG_(el,och,nch,int$){
var om = hipo.interpreter.keyed_children__GT_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__876606_876614 = cljs.core.seq.call(null,nm);
var chunk__876607_876615 = null;
var count__876608_876616 = (0);
var i__876609_876617 = (0);
while(true){
if((i__876609_876617 < count__876608_876616)){
var vec__876610_876618 = cljs.core._nth.call(null,chunk__876607_876615,i__876609_876617);
var i_876619 = cljs.core.nth.call(null,vec__876610_876618,(0),null);
var vec__876611_876620 = cljs.core.nth.call(null,vec__876610_876618,(1),null);
var ii_876621 = cljs.core.nth.call(null,vec__876611_876620,(0),null);
var h_876622 = cljs.core.nth.call(null,vec__876611_876620,(1),null);
var temp__4423__auto___876623 = cljs.core.get.call(null,om,i_876619);
if(cljs.core.truth_(temp__4423__auto___876623)){
var oh_876624 = temp__4423__auto___876623;
if(cljs.core.not.call(null,int$)){
if((oh_876624 === h_876622)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_876621,cljs.core.nth.call(null,cs,i_876619));
} else {
var ncel_876625 = el.removeChild(cljs.core.nth.call(null,cs,i_876619));
hipo.interpreter.update_BANG_.call(null,ncel_876625,oh_876624,h_876622,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_876621,ncel_876625);
}
} else {
var o__25414__auto___876626 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_876622,new cljs.core.Keyword(null,"index","index",-1531685915),ii_876621], null));
if(!(o__25414__auto___876626 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___876626)){
o__25414__auto___876626.call(null,((function (seq__876606_876614,chunk__876607_876615,count__876608_876616,i__876609_876617,o__25414__auto___876626,oh_876624,temp__4423__auto___876623,vec__876610_876618,i_876619,vec__876611_876620,ii_876621,h_876622,om,nm,cs){
return (function (){
if((oh_876624 === h_876622)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_876621,cljs.core.nth.call(null,cs,i_876619));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_876619));
hipo.interpreter.update_BANG_.call(null,ncel,oh_876624,h_876622,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_876621,ncel);
}
});})(seq__876606_876614,chunk__876607_876615,count__876608_876616,i__876609_876617,o__25414__auto___876626,oh_876624,temp__4423__auto___876623,vec__876610_876618,i_876619,vec__876611_876620,ii_876621,h_876622,om,nm,cs))
);
} else {
if((oh_876624 === h_876622)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_876621,cljs.core.nth.call(null,cs,i_876619));
} else {
var ncel_876627 = el.removeChild(cljs.core.nth.call(null,cs,i_876619));
hipo.interpreter.update_BANG_.call(null,ncel_876627,oh_876624,h_876622,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_876621,ncel_876627);
}
}
} else {
}
}
} else {
var nel_876628 = hipo.interpreter.create_child.call(null,h_876622);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_876621,nel_876628);
} else {
var o__25414__auto___876629 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_876628,new cljs.core.Keyword(null,"index","index",-1531685915),ii_876621], null));
if(!(o__25414__auto___876629 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___876629)){
o__25414__auto___876629.call(null,((function (seq__876606_876614,chunk__876607_876615,count__876608_876616,i__876609_876617,o__25414__auto___876629,nel_876628,temp__4423__auto___876623,vec__876610_876618,i_876619,vec__876611_876620,ii_876621,h_876622,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_876621,nel_876628);
});})(seq__876606_876614,chunk__876607_876615,count__876608_876616,i__876609_876617,o__25414__auto___876629,nel_876628,temp__4423__auto___876623,vec__876610_876618,i_876619,vec__876611_876620,ii_876621,h_876622,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_876621,nel_876628);
}
} else {
}
}
}

var G__876630 = seq__876606_876614;
var G__876631 = chunk__876607_876615;
var G__876632 = count__876608_876616;
var G__876633 = (i__876609_876617 + (1));
seq__876606_876614 = G__876630;
chunk__876607_876615 = G__876631;
count__876608_876616 = G__876632;
i__876609_876617 = G__876633;
continue;
} else {
var temp__4425__auto___876634 = cljs.core.seq.call(null,seq__876606_876614);
if(temp__4425__auto___876634){
var seq__876606_876635__$1 = temp__4425__auto___876634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__876606_876635__$1)){
var c__25014__auto___876636 = cljs.core.chunk_first.call(null,seq__876606_876635__$1);
var G__876637 = cljs.core.chunk_rest.call(null,seq__876606_876635__$1);
var G__876638 = c__25014__auto___876636;
var G__876639 = cljs.core.count.call(null,c__25014__auto___876636);
var G__876640 = (0);
seq__876606_876614 = G__876637;
chunk__876607_876615 = G__876638;
count__876608_876616 = G__876639;
i__876609_876617 = G__876640;
continue;
} else {
var vec__876612_876641 = cljs.core.first.call(null,seq__876606_876635__$1);
var i_876642 = cljs.core.nth.call(null,vec__876612_876641,(0),null);
var vec__876613_876643 = cljs.core.nth.call(null,vec__876612_876641,(1),null);
var ii_876644 = cljs.core.nth.call(null,vec__876613_876643,(0),null);
var h_876645 = cljs.core.nth.call(null,vec__876613_876643,(1),null);
var temp__4423__auto___876646 = cljs.core.get.call(null,om,i_876642);
if(cljs.core.truth_(temp__4423__auto___876646)){
var oh_876647 = temp__4423__auto___876646;
if(cljs.core.not.call(null,int$)){
if((oh_876647 === h_876645)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_876644,cljs.core.nth.call(null,cs,i_876642));
} else {
var ncel_876648 = el.removeChild(cljs.core.nth.call(null,cs,i_876642));
hipo.interpreter.update_BANG_.call(null,ncel_876648,oh_876647,h_876645,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_876644,ncel_876648);
}
} else {
var o__25414__auto___876649 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_876645,new cljs.core.Keyword(null,"index","index",-1531685915),ii_876644], null));
if(!(o__25414__auto___876649 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___876649)){
o__25414__auto___876649.call(null,((function (seq__876606_876614,chunk__876607_876615,count__876608_876616,i__876609_876617,o__25414__auto___876649,oh_876647,temp__4423__auto___876646,vec__876612_876641,i_876642,vec__876613_876643,ii_876644,h_876645,seq__876606_876635__$1,temp__4425__auto___876634,om,nm,cs){
return (function (){
if((oh_876647 === h_876645)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_876644,cljs.core.nth.call(null,cs,i_876642));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_876642));
hipo.interpreter.update_BANG_.call(null,ncel,oh_876647,h_876645,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_876644,ncel);
}
});})(seq__876606_876614,chunk__876607_876615,count__876608_876616,i__876609_876617,o__25414__auto___876649,oh_876647,temp__4423__auto___876646,vec__876612_876641,i_876642,vec__876613_876643,ii_876644,h_876645,seq__876606_876635__$1,temp__4425__auto___876634,om,nm,cs))
);
} else {
if((oh_876647 === h_876645)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_876644,cljs.core.nth.call(null,cs,i_876642));
} else {
var ncel_876650 = el.removeChild(cljs.core.nth.call(null,cs,i_876642));
hipo.interpreter.update_BANG_.call(null,ncel_876650,oh_876647,h_876645,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_876644,ncel_876650);
}
}
} else {
}
}
} else {
var nel_876651 = hipo.interpreter.create_child.call(null,h_876645);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_876644,nel_876651);
} else {
var o__25414__auto___876652 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_876651,new cljs.core.Keyword(null,"index","index",-1531685915),ii_876644], null));
if(!(o__25414__auto___876652 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___876652)){
o__25414__auto___876652.call(null,((function (seq__876606_876614,chunk__876607_876615,count__876608_876616,i__876609_876617,o__25414__auto___876652,nel_876651,temp__4423__auto___876646,vec__876612_876641,i_876642,vec__876613_876643,ii_876644,h_876645,seq__876606_876635__$1,temp__4425__auto___876634,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_876644,nel_876651);
});})(seq__876606_876614,chunk__876607_876615,count__876608_876616,i__876609_876617,o__25414__auto___876652,nel_876651,temp__4423__auto___876646,vec__876612_876641,i_876642,vec__876613_876643,ii_876644,h_876645,seq__876606_876635__$1,temp__4425__auto___876634,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_876644,nel_876651);
}
} else {
}
}
}

var G__876653 = cljs.core.next.call(null,seq__876606_876635__$1);
var G__876654 = null;
var G__876655 = (0);
var G__876656 = (0);
seq__876606_876614 = G__876653;
chunk__876607_876615 = G__876654;
count__876608_876616 = G__876655;
i__876609_876617 = G__876656;
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
var o__25414__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__25414__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto__)){
return o__25414__auto__.call(null,((function (o__25414__auto__,d,om,nm,cs){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__25414__auto__,d,om,nm,cs))
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
var o__25414__auto___876657 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__25414__auto___876657 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___876657)){
o__25414__auto___876657.call(null,((function (o__25414__auto___876657,oc,nc,d){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__25414__auto___876657,oc,nc,d))
);
} else {
hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
}
} else {
}
}
} else {
}

var n__25114__auto___876658 = (function (){var x__24549__auto__ = oc;
var y__24550__auto__ = nc;
return ((x__24549__auto__ < y__24550__auto__) ? x__24549__auto__ : y__24550__auto__);
})();
var i_876659 = (0);
while(true){
if((i_876659 < n__25114__auto___876658)){
var ov_876660 = cljs.core.nth.call(null,och,i_876659);
var nv_876661 = cljs.core.nth.call(null,nch,i_876659);
if(!((ov_876660 === nv_876661))){
var temp__4423__auto___876662 = hipo.dom.child_at.call(null,el,i_876659);
if(cljs.core.truth_(temp__4423__auto___876662)){
var cel_876663 = temp__4423__auto___876662;
hipo.interpreter.update_BANG_.call(null,cel_876663,ov_876660,nv_876661,int$);
} else {
}
} else {
}

var G__876664 = (i_876659 + (1));
i_876659 = G__876664;
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
var o__25414__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
if(!(o__25414__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto__)){
return o__25414__auto__.call(null,((function (o__25414__auto__,h,oc,nc,d){
return (function (){
return hipo.interpreter.append_child_BANG_.call(null,el,h);
});})(o__25414__auto__,h,oc,nc,d))
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
var o__25414__auto___876665 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
if(!(o__25414__auto___876665 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___876665)){
o__25414__auto___876665.call(null,((function (o__25414__auto___876665,f,cs,oc,nc,d){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs);
});})(o__25414__auto___876665,f,cs,oc,nc,d))
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
var o__25414__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__25414__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto__)){
return o__25414__auto__.call(null,((function (o__25414__auto__){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(o__25414__auto__))
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
var o__25414__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel], null));
if(!(o__25414__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto__)){
return o__25414__auto__.call(null,((function (o__25414__auto__,nel){
return (function (){
return hipo.dom.replace_BANG_.call(null,el,nel);
});})(o__25414__auto__,nel))
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
var o__25414__auto___876666 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-children","update-children",1871853561),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__25414__auto___876666 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___876666)){
o__25414__auto___876666.call(null,((function (o__25414__auto___876666,om,nm,och,nch){
return (function (){
return hipo.interpreter.update_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),int$);
});})(o__25414__auto___876666,om,nm,och,nch))
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
if(cljs.core.truth_((function (){var or__24211__auto__ = cljs.core.vector_QMARK_.call(null,h);
if(or__24211__auto__){
return or__24211__auto__;
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
var o__25414__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
if(!(o__25414__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto__)){
return o__25414__auto__.call(null,((function (o__25414__auto__){
return (function (){
return hipo.dom.replace_text_BANG_.call(null,el,h);
});})(o__25414__auto__))
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
var G__876671__delegate = function (nh,p__876669){
var vec__876670 = p__876669;
var m = cljs.core.nth.call(null,vec__876670,(0),null);
var int$ = new cljs.core.Keyword(null,"interceptor","interceptor",1127739076).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
} else {
var o__25414__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__25414__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto__)){
return o__25414__auto__.call(null,((function (o__25414__auto__,int$,vec__876670,m,a){
return (function (){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
});})(o__25414__auto__,int$,vec__876670,m,a))
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
var G__876671 = function (nh,var_args){
var p__876669 = null;
if (arguments.length > 1) {
var G__876672__i = 0, G__876672__a = new Array(arguments.length -  1);
while (G__876672__i < G__876672__a.length) {G__876672__a[G__876672__i] = arguments[G__876672__i + 1]; ++G__876672__i;}
  p__876669 = new cljs.core.IndexedSeq(G__876672__a,0);
} 
return G__876671__delegate.call(this,nh,p__876669);};
G__876671.cljs$lang$maxFixedArity = 1;
G__876671.cljs$lang$applyTo = (function (arglist__876673){
var nh = cljs.core.first(arglist__876673);
var p__876669 = cljs.core.rest(arglist__876673);
return G__876671__delegate(nh,p__876669);
});
G__876671.cljs$core$IFn$_invoke$arity$variadic = G__876671__delegate;
return G__876671;
})()
;})(a))
], null);
});

//# sourceMappingURL=interpreter.js.map