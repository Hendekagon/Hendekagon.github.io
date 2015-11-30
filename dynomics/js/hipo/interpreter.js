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
var temp__4423__auto___643420 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4423__auto___643420)){
var h_643421 = temp__4423__auto___643420;
hipo.interpreter.append_child_BANG_.call(null,el,h_643421);
} else {
}

var G__643422 = cljs.core.rest.call(null,v__$1);
v__$1 = G__643422;
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
var seq__643429_643435 = cljs.core.seq.call(null,attrs);
var chunk__643430_643436 = null;
var count__643431_643437 = (0);
var i__643432_643438 = (0);
while(true){
if((i__643432_643438 < count__643431_643437)){
var vec__643433_643439 = cljs.core._nth.call(null,chunk__643430_643436,i__643432_643438);
var k_643440 = cljs.core.nth.call(null,vec__643433_643439,(0),null);
var v_643441 = cljs.core.nth.call(null,vec__643433_643439,(1),null);
if(cljs.core.truth_(v_643441)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_643440),null,v_643441);
} else {
}

var G__643442 = seq__643429_643435;
var G__643443 = chunk__643430_643436;
var G__643444 = count__643431_643437;
var G__643445 = (i__643432_643438 + (1));
seq__643429_643435 = G__643442;
chunk__643430_643436 = G__643443;
count__643431_643437 = G__643444;
i__643432_643438 = G__643445;
continue;
} else {
var temp__4425__auto___643446 = cljs.core.seq.call(null,seq__643429_643435);
if(temp__4425__auto___643446){
var seq__643429_643447__$1 = temp__4425__auto___643446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__643429_643447__$1)){
var c__25014__auto___643448 = cljs.core.chunk_first.call(null,seq__643429_643447__$1);
var G__643449 = cljs.core.chunk_rest.call(null,seq__643429_643447__$1);
var G__643450 = c__25014__auto___643448;
var G__643451 = cljs.core.count.call(null,c__25014__auto___643448);
var G__643452 = (0);
seq__643429_643435 = G__643449;
chunk__643430_643436 = G__643450;
count__643431_643437 = G__643451;
i__643432_643438 = G__643452;
continue;
} else {
var vec__643434_643453 = cljs.core.first.call(null,seq__643429_643447__$1);
var k_643454 = cljs.core.nth.call(null,vec__643434_643453,(0),null);
var v_643455 = cljs.core.nth.call(null,vec__643434_643453,(1),null);
if(cljs.core.truth_(v_643455)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_643454),null,v_643455);
} else {
}

var G__643456 = cljs.core.next.call(null,seq__643429_643447__$1);
var G__643457 = null;
var G__643458 = (0);
var G__643459 = (0);
seq__643429_643435 = G__643456;
chunk__643430_643436 = G__643457;
count__643431_643437 = G__643458;
i__643432_643438 = G__643459;
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
var G__643460 = pel;
el = G__643460;
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
var seq__643475_643489 = cljs.core.seq.call(null,nm);
var chunk__643477_643490 = null;
var count__643478_643491 = (0);
var i__643479_643492 = (0);
while(true){
if((i__643479_643492 < count__643478_643491)){
var vec__643481_643493 = cljs.core._nth.call(null,chunk__643477_643490,i__643479_643492);
var nk_643494 = cljs.core.nth.call(null,vec__643481_643493,(0),null);
var nv_643495 = cljs.core.nth.call(null,vec__643481_643493,(1),null);
var ov_643496 = nk_643494.call(null,om);
var n_643497 = cljs.core.name.call(null,nk_643494);
if(!((ov_643496 === nv_643495))){
if(cljs.core.truth_(nv_643495)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_643497,ov_643496,nv_643495);
} else {
var o__25414__auto___643498 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_643497,new cljs.core.Keyword(null,"value","value",305978217),nv_643495], null));
if(!(o__25414__auto___643498 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___643498)){
o__25414__auto___643498.call(null,((function (seq__643475_643489,chunk__643477_643490,count__643478_643491,i__643479_643492,o__25414__auto___643498,ov_643496,n_643497,vec__643481_643493,nk_643494,nv_643495){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_643497,ov_643496,nv_643495);
});})(seq__643475_643489,chunk__643477_643490,count__643478_643491,i__643479_643492,o__25414__auto___643498,ov_643496,n_643497,vec__643481_643493,nk_643494,nv_643495))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_643497,ov_643496,nv_643495);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_643497,ov_643496,null);
} else {
var o__25414__auto___643499 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_643497], null));
if(!(o__25414__auto___643499 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___643499)){
o__25414__auto___643499.call(null,((function (seq__643475_643489,chunk__643477_643490,count__643478_643491,i__643479_643492,o__25414__auto___643499,ov_643496,n_643497,vec__643481_643493,nk_643494,nv_643495){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_643497,ov_643496,null);
});})(seq__643475_643489,chunk__643477_643490,count__643478_643491,i__643479_643492,o__25414__auto___643499,ov_643496,n_643497,vec__643481_643493,nk_643494,nv_643495))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_643497,ov_643496,null);
}
} else {
}
}
}
} else {
}

var G__643500 = seq__643475_643489;
var G__643501 = chunk__643477_643490;
var G__643502 = count__643478_643491;
var G__643503 = (i__643479_643492 + (1));
seq__643475_643489 = G__643500;
chunk__643477_643490 = G__643501;
count__643478_643491 = G__643502;
i__643479_643492 = G__643503;
continue;
} else {
var temp__4425__auto___643504 = cljs.core.seq.call(null,seq__643475_643489);
if(temp__4425__auto___643504){
var seq__643475_643505__$1 = temp__4425__auto___643504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__643475_643505__$1)){
var c__25014__auto___643506 = cljs.core.chunk_first.call(null,seq__643475_643505__$1);
var G__643507 = cljs.core.chunk_rest.call(null,seq__643475_643505__$1);
var G__643508 = c__25014__auto___643506;
var G__643509 = cljs.core.count.call(null,c__25014__auto___643506);
var G__643510 = (0);
seq__643475_643489 = G__643507;
chunk__643477_643490 = G__643508;
count__643478_643491 = G__643509;
i__643479_643492 = G__643510;
continue;
} else {
var vec__643482_643511 = cljs.core.first.call(null,seq__643475_643505__$1);
var nk_643512 = cljs.core.nth.call(null,vec__643482_643511,(0),null);
var nv_643513 = cljs.core.nth.call(null,vec__643482_643511,(1),null);
var ov_643514 = nk_643512.call(null,om);
var n_643515 = cljs.core.name.call(null,nk_643512);
if(!((ov_643514 === nv_643513))){
if(cljs.core.truth_(nv_643513)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_643515,ov_643514,nv_643513);
} else {
var o__25414__auto___643516 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_643515,new cljs.core.Keyword(null,"value","value",305978217),nv_643513], null));
if(!(o__25414__auto___643516 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___643516)){
o__25414__auto___643516.call(null,((function (seq__643475_643489,chunk__643477_643490,count__643478_643491,i__643479_643492,o__25414__auto___643516,ov_643514,n_643515,vec__643482_643511,nk_643512,nv_643513,seq__643475_643505__$1,temp__4425__auto___643504){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_643515,ov_643514,nv_643513);
});})(seq__643475_643489,chunk__643477_643490,count__643478_643491,i__643479_643492,o__25414__auto___643516,ov_643514,n_643515,vec__643482_643511,nk_643512,nv_643513,seq__643475_643505__$1,temp__4425__auto___643504))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_643515,ov_643514,nv_643513);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_643515,ov_643514,null);
} else {
var o__25414__auto___643517 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_643515], null));
if(!(o__25414__auto___643517 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___643517)){
o__25414__auto___643517.call(null,((function (seq__643475_643489,chunk__643477_643490,count__643478_643491,i__643479_643492,o__25414__auto___643517,ov_643514,n_643515,vec__643482_643511,nk_643512,nv_643513,seq__643475_643505__$1,temp__4425__auto___643504){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_643515,ov_643514,null);
});})(seq__643475_643489,chunk__643477_643490,count__643478_643491,i__643479_643492,o__25414__auto___643517,ov_643514,n_643515,vec__643482_643511,nk_643512,nv_643513,seq__643475_643505__$1,temp__4425__auto___643504))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_643515,ov_643514,null);
}
} else {
}
}
}
} else {
}

var G__643518 = cljs.core.next.call(null,seq__643475_643505__$1);
var G__643519 = null;
var G__643520 = (0);
var G__643521 = (0);
seq__643475_643489 = G__643518;
chunk__643477_643490 = G__643519;
count__643478_643491 = G__643520;
i__643479_643492 = G__643521;
continue;
}
} else {
}
}
break;
}

var seq__643483 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__643485 = null;
var count__643486 = (0);
var i__643487 = (0);
while(true){
if((i__643487 < count__643486)){
var k = cljs.core._nth.call(null,chunk__643485,i__643487);
var n_643522 = cljs.core.name.call(null,k);
var ov_643523 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_643522,ov_643523,null);
} else {
var o__25414__auto___643524 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_643522], null));
if(!(o__25414__auto___643524 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___643524)){
o__25414__auto___643524.call(null,((function (seq__643483,chunk__643485,count__643486,i__643487,o__25414__auto___643524,n_643522,ov_643523,k){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_643522,ov_643523,null);
});})(seq__643483,chunk__643485,count__643486,i__643487,o__25414__auto___643524,n_643522,ov_643523,k))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_643522,ov_643523,null);
}
} else {
}
}

var G__643525 = seq__643483;
var G__643526 = chunk__643485;
var G__643527 = count__643486;
var G__643528 = (i__643487 + (1));
seq__643483 = G__643525;
chunk__643485 = G__643526;
count__643486 = G__643527;
i__643487 = G__643528;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__643483);
if(temp__4425__auto__){
var seq__643483__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__643483__$1)){
var c__25014__auto__ = cljs.core.chunk_first.call(null,seq__643483__$1);
var G__643529 = cljs.core.chunk_rest.call(null,seq__643483__$1);
var G__643530 = c__25014__auto__;
var G__643531 = cljs.core.count.call(null,c__25014__auto__);
var G__643532 = (0);
seq__643483 = G__643529;
chunk__643485 = G__643530;
count__643486 = G__643531;
i__643487 = G__643532;
continue;
} else {
var k = cljs.core.first.call(null,seq__643483__$1);
var n_643533 = cljs.core.name.call(null,k);
var ov_643534 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_643533,ov_643534,null);
} else {
var o__25414__auto___643535 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_643533], null));
if(!(o__25414__auto___643535 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___643535)){
o__25414__auto___643535.call(null,((function (seq__643483,chunk__643485,count__643486,i__643487,o__25414__auto___643535,n_643533,ov_643534,k,seq__643483__$1,temp__4425__auto__){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_643533,ov_643534,null);
});})(seq__643483,chunk__643485,count__643486,i__643487,o__25414__auto___643535,n_643533,ov_643534,k,seq__643483__$1,temp__4425__auto__))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_643533,ov_643534,null);
}
} else {
}
}

var G__643536 = cljs.core.next.call(null,seq__643483__$1);
var G__643537 = null;
var G__643538 = (0);
var G__643539 = (0);
seq__643483 = G__643536;
chunk__643485 = G__643537;
count__643486 = G__643538;
i__643487 = G__643539;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__24983__auto__ = (function hipo$interpreter$keyed_children__GT_map_$_iter__643544(s__643545){
return (new cljs.core.LazySeq(null,(function (){
var s__643545__$1 = s__643545;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__643545__$1);
if(temp__4425__auto__){
var s__643545__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__643545__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__643545__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__643547 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__643546 = (0);
while(true){
if((i__643546 < size__24982__auto__)){
var h = cljs.core._nth.call(null,c__24981__auto__,i__643546);
cljs.core.chunk_append.call(null,b__643547,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null));

var G__643548 = (i__643546 + (1));
i__643546 = G__643548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__643547),hipo$interpreter$keyed_children__GT_map_$_iter__643544.call(null,cljs.core.chunk_rest.call(null,s__643545__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__643547),null);
}
} else {
var h = cljs.core.first.call(null,s__643545__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null),hipo$interpreter$keyed_children__GT_map_$_iter__643544.call(null,cljs.core.rest.call(null,s__643545__$2)));
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__24983__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__643553(s__643554){
return (new cljs.core.LazySeq(null,(function (){
var s__643554__$1 = s__643554;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__643554__$1);
if(temp__4425__auto__){
var s__643554__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__643554__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__643554__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__643556 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__643555 = (0);
while(true){
if((i__643555 < size__24982__auto__)){
var ih = cljs.core._nth.call(null,c__24981__auto__,i__643555);
cljs.core.chunk_append.call(null,b__643556,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__643557 = (i__643555 + (1));
i__643555 = G__643557;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__643556),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__643553.call(null,cljs.core.chunk_rest.call(null,s__643554__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__643556),null);
}
} else {
var ih = cljs.core.first.call(null,s__643554__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__643553.call(null,cljs.core.rest.call(null,s__643554__$2)));
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
var seq__643566_643574 = cljs.core.seq.call(null,nm);
var chunk__643567_643575 = null;
var count__643568_643576 = (0);
var i__643569_643577 = (0);
while(true){
if((i__643569_643577 < count__643568_643576)){
var vec__643570_643578 = cljs.core._nth.call(null,chunk__643567_643575,i__643569_643577);
var i_643579 = cljs.core.nth.call(null,vec__643570_643578,(0),null);
var vec__643571_643580 = cljs.core.nth.call(null,vec__643570_643578,(1),null);
var ii_643581 = cljs.core.nth.call(null,vec__643571_643580,(0),null);
var h_643582 = cljs.core.nth.call(null,vec__643571_643580,(1),null);
var temp__4423__auto___643583 = cljs.core.get.call(null,om,i_643579);
if(cljs.core.truth_(temp__4423__auto___643583)){
var oh_643584 = temp__4423__auto___643583;
if(cljs.core.not.call(null,int$)){
if((oh_643584 === h_643582)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_643581,cljs.core.nth.call(null,cs,i_643579));
} else {
var ncel_643585 = el.removeChild(cljs.core.nth.call(null,cs,i_643579));
hipo.interpreter.update_BANG_.call(null,ncel_643585,oh_643584,h_643582,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_643581,ncel_643585);
}
} else {
var o__25414__auto___643586 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_643582,new cljs.core.Keyword(null,"index","index",-1531685915),ii_643581], null));
if(!(o__25414__auto___643586 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___643586)){
o__25414__auto___643586.call(null,((function (seq__643566_643574,chunk__643567_643575,count__643568_643576,i__643569_643577,o__25414__auto___643586,oh_643584,temp__4423__auto___643583,vec__643570_643578,i_643579,vec__643571_643580,ii_643581,h_643582,om,nm,cs){
return (function (){
if((oh_643584 === h_643582)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_643581,cljs.core.nth.call(null,cs,i_643579));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_643579));
hipo.interpreter.update_BANG_.call(null,ncel,oh_643584,h_643582,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_643581,ncel);
}
});})(seq__643566_643574,chunk__643567_643575,count__643568_643576,i__643569_643577,o__25414__auto___643586,oh_643584,temp__4423__auto___643583,vec__643570_643578,i_643579,vec__643571_643580,ii_643581,h_643582,om,nm,cs))
);
} else {
if((oh_643584 === h_643582)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_643581,cljs.core.nth.call(null,cs,i_643579));
} else {
var ncel_643587 = el.removeChild(cljs.core.nth.call(null,cs,i_643579));
hipo.interpreter.update_BANG_.call(null,ncel_643587,oh_643584,h_643582,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_643581,ncel_643587);
}
}
} else {
}
}
} else {
var nel_643588 = hipo.interpreter.create_child.call(null,h_643582);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_643581,nel_643588);
} else {
var o__25414__auto___643589 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_643588,new cljs.core.Keyword(null,"index","index",-1531685915),ii_643581], null));
if(!(o__25414__auto___643589 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___643589)){
o__25414__auto___643589.call(null,((function (seq__643566_643574,chunk__643567_643575,count__643568_643576,i__643569_643577,o__25414__auto___643589,nel_643588,temp__4423__auto___643583,vec__643570_643578,i_643579,vec__643571_643580,ii_643581,h_643582,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_643581,nel_643588);
});})(seq__643566_643574,chunk__643567_643575,count__643568_643576,i__643569_643577,o__25414__auto___643589,nel_643588,temp__4423__auto___643583,vec__643570_643578,i_643579,vec__643571_643580,ii_643581,h_643582,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_643581,nel_643588);
}
} else {
}
}
}

var G__643590 = seq__643566_643574;
var G__643591 = chunk__643567_643575;
var G__643592 = count__643568_643576;
var G__643593 = (i__643569_643577 + (1));
seq__643566_643574 = G__643590;
chunk__643567_643575 = G__643591;
count__643568_643576 = G__643592;
i__643569_643577 = G__643593;
continue;
} else {
var temp__4425__auto___643594 = cljs.core.seq.call(null,seq__643566_643574);
if(temp__4425__auto___643594){
var seq__643566_643595__$1 = temp__4425__auto___643594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__643566_643595__$1)){
var c__25014__auto___643596 = cljs.core.chunk_first.call(null,seq__643566_643595__$1);
var G__643597 = cljs.core.chunk_rest.call(null,seq__643566_643595__$1);
var G__643598 = c__25014__auto___643596;
var G__643599 = cljs.core.count.call(null,c__25014__auto___643596);
var G__643600 = (0);
seq__643566_643574 = G__643597;
chunk__643567_643575 = G__643598;
count__643568_643576 = G__643599;
i__643569_643577 = G__643600;
continue;
} else {
var vec__643572_643601 = cljs.core.first.call(null,seq__643566_643595__$1);
var i_643602 = cljs.core.nth.call(null,vec__643572_643601,(0),null);
var vec__643573_643603 = cljs.core.nth.call(null,vec__643572_643601,(1),null);
var ii_643604 = cljs.core.nth.call(null,vec__643573_643603,(0),null);
var h_643605 = cljs.core.nth.call(null,vec__643573_643603,(1),null);
var temp__4423__auto___643606 = cljs.core.get.call(null,om,i_643602);
if(cljs.core.truth_(temp__4423__auto___643606)){
var oh_643607 = temp__4423__auto___643606;
if(cljs.core.not.call(null,int$)){
if((oh_643607 === h_643605)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_643604,cljs.core.nth.call(null,cs,i_643602));
} else {
var ncel_643608 = el.removeChild(cljs.core.nth.call(null,cs,i_643602));
hipo.interpreter.update_BANG_.call(null,ncel_643608,oh_643607,h_643605,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_643604,ncel_643608);
}
} else {
var o__25414__auto___643609 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_643605,new cljs.core.Keyword(null,"index","index",-1531685915),ii_643604], null));
if(!(o__25414__auto___643609 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___643609)){
o__25414__auto___643609.call(null,((function (seq__643566_643574,chunk__643567_643575,count__643568_643576,i__643569_643577,o__25414__auto___643609,oh_643607,temp__4423__auto___643606,vec__643572_643601,i_643602,vec__643573_643603,ii_643604,h_643605,seq__643566_643595__$1,temp__4425__auto___643594,om,nm,cs){
return (function (){
if((oh_643607 === h_643605)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_643604,cljs.core.nth.call(null,cs,i_643602));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_643602));
hipo.interpreter.update_BANG_.call(null,ncel,oh_643607,h_643605,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_643604,ncel);
}
});})(seq__643566_643574,chunk__643567_643575,count__643568_643576,i__643569_643577,o__25414__auto___643609,oh_643607,temp__4423__auto___643606,vec__643572_643601,i_643602,vec__643573_643603,ii_643604,h_643605,seq__643566_643595__$1,temp__4425__auto___643594,om,nm,cs))
);
} else {
if((oh_643607 === h_643605)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_643604,cljs.core.nth.call(null,cs,i_643602));
} else {
var ncel_643610 = el.removeChild(cljs.core.nth.call(null,cs,i_643602));
hipo.interpreter.update_BANG_.call(null,ncel_643610,oh_643607,h_643605,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_643604,ncel_643610);
}
}
} else {
}
}
} else {
var nel_643611 = hipo.interpreter.create_child.call(null,h_643605);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_643604,nel_643611);
} else {
var o__25414__auto___643612 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_643611,new cljs.core.Keyword(null,"index","index",-1531685915),ii_643604], null));
if(!(o__25414__auto___643612 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___643612)){
o__25414__auto___643612.call(null,((function (seq__643566_643574,chunk__643567_643575,count__643568_643576,i__643569_643577,o__25414__auto___643612,nel_643611,temp__4423__auto___643606,vec__643572_643601,i_643602,vec__643573_643603,ii_643604,h_643605,seq__643566_643595__$1,temp__4425__auto___643594,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_643604,nel_643611);
});})(seq__643566_643574,chunk__643567_643575,count__643568_643576,i__643569_643577,o__25414__auto___643612,nel_643611,temp__4423__auto___643606,vec__643572_643601,i_643602,vec__643573_643603,ii_643604,h_643605,seq__643566_643595__$1,temp__4425__auto___643594,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_643604,nel_643611);
}
} else {
}
}
}

var G__643613 = cljs.core.next.call(null,seq__643566_643595__$1);
var G__643614 = null;
var G__643615 = (0);
var G__643616 = (0);
seq__643566_643574 = G__643613;
chunk__643567_643575 = G__643614;
count__643568_643576 = G__643615;
i__643569_643577 = G__643616;
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
var o__25414__auto___643617 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__25414__auto___643617 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___643617)){
o__25414__auto___643617.call(null,((function (o__25414__auto___643617,oc,nc,d){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__25414__auto___643617,oc,nc,d))
);
} else {
hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
}
} else {
}
}
} else {
}

var n__25114__auto___643618 = (function (){var x__24549__auto__ = oc;
var y__24550__auto__ = nc;
return ((x__24549__auto__ < y__24550__auto__) ? x__24549__auto__ : y__24550__auto__);
})();
var i_643619 = (0);
while(true){
if((i_643619 < n__25114__auto___643618)){
var ov_643620 = cljs.core.nth.call(null,och,i_643619);
var nv_643621 = cljs.core.nth.call(null,nch,i_643619);
if(!((ov_643620 === nv_643621))){
var temp__4423__auto___643622 = hipo.dom.child_at.call(null,el,i_643619);
if(cljs.core.truth_(temp__4423__auto___643622)){
var cel_643623 = temp__4423__auto___643622;
hipo.interpreter.update_BANG_.call(null,cel_643623,ov_643620,nv_643621,int$);
} else {
}
} else {
}

var G__643624 = (i_643619 + (1));
i_643619 = G__643624;
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
var o__25414__auto___643625 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
if(!(o__25414__auto___643625 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___643625)){
o__25414__auto___643625.call(null,((function (o__25414__auto___643625,f,cs,oc,nc,d){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs);
});})(o__25414__auto___643625,f,cs,oc,nc,d))
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
var o__25414__auto___643626 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-children","update-children",1871853561),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__25414__auto___643626 === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto___643626)){
o__25414__auto___643626.call(null,((function (o__25414__auto___643626,om,nm,och,nch){
return (function (){
return hipo.interpreter.update_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),int$);
});})(o__25414__auto___643626,om,nm,och,nch))
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
var G__643631__delegate = function (nh,p__643629){
var vec__643630 = p__643629;
var m = cljs.core.nth.call(null,vec__643630,(0),null);
var int$ = new cljs.core.Keyword(null,"interceptor","interceptor",1127739076).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
} else {
var o__25414__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__25414__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__25414__auto__)){
return o__25414__auto__.call(null,((function (o__25414__auto__,int$,vec__643630,m,a){
return (function (){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
});})(o__25414__auto__,int$,vec__643630,m,a))
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
var G__643631 = function (nh,var_args){
var p__643629 = null;
if (arguments.length > 1) {
var G__643632__i = 0, G__643632__a = new Array(arguments.length -  1);
while (G__643632__i < G__643632__a.length) {G__643632__a[G__643632__i] = arguments[G__643632__i + 1]; ++G__643632__i;}
  p__643629 = new cljs.core.IndexedSeq(G__643632__a,0);
} 
return G__643631__delegate.call(this,nh,p__643629);};
G__643631.cljs$lang$maxFixedArity = 1;
G__643631.cljs$lang$applyTo = (function (arglist__643633){
var nh = cljs.core.first(arglist__643633);
var p__643629 = cljs.core.rest(arglist__643633);
return G__643631__delegate(nh,p__643629);
});
G__643631.cljs$core$IFn$_invoke$arity$variadic = G__643631__delegate;
return G__643631;
})()
;})(a))
], null);
});

//# sourceMappingURL=interpreter.js.map