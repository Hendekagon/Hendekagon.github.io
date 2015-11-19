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
var temp__4423__auto___372640 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4423__auto___372640)){
var h_372641 = temp__4423__auto___372640;
hipo.interpreter.append_child_BANG_.call(null,el,h_372641);
} else {
}

var G__372642 = cljs.core.rest.call(null,v__$1);
v__$1 = G__372642;
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
var seq__372649_372655 = cljs.core.seq.call(null,attrs);
var chunk__372650_372656 = null;
var count__372651_372657 = (0);
var i__372652_372658 = (0);
while(true){
if((i__372652_372658 < count__372651_372657)){
var vec__372653_372659 = cljs.core._nth.call(null,chunk__372650_372656,i__372652_372658);
var k_372660 = cljs.core.nth.call(null,vec__372653_372659,(0),null);
var v_372661 = cljs.core.nth.call(null,vec__372653_372659,(1),null);
if(cljs.core.truth_(v_372661)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_372660),null,v_372661);
} else {
}

var G__372662 = seq__372649_372655;
var G__372663 = chunk__372650_372656;
var G__372664 = count__372651_372657;
var G__372665 = (i__372652_372658 + (1));
seq__372649_372655 = G__372662;
chunk__372650_372656 = G__372663;
count__372651_372657 = G__372664;
i__372652_372658 = G__372665;
continue;
} else {
var temp__4425__auto___372666 = cljs.core.seq.call(null,seq__372649_372655);
if(temp__4425__auto___372666){
var seq__372649_372667__$1 = temp__4425__auto___372666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__372649_372667__$1)){
var c__24964__auto___372668 = cljs.core.chunk_first.call(null,seq__372649_372667__$1);
var G__372669 = cljs.core.chunk_rest.call(null,seq__372649_372667__$1);
var G__372670 = c__24964__auto___372668;
var G__372671 = cljs.core.count.call(null,c__24964__auto___372668);
var G__372672 = (0);
seq__372649_372655 = G__372669;
chunk__372650_372656 = G__372670;
count__372651_372657 = G__372671;
i__372652_372658 = G__372672;
continue;
} else {
var vec__372654_372673 = cljs.core.first.call(null,seq__372649_372667__$1);
var k_372674 = cljs.core.nth.call(null,vec__372654_372673,(0),null);
var v_372675 = cljs.core.nth.call(null,vec__372654_372673,(1),null);
if(cljs.core.truth_(v_372675)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_372674),null,v_372675);
} else {
}

var G__372676 = cljs.core.next.call(null,seq__372649_372667__$1);
var G__372677 = null;
var G__372678 = (0);
var G__372679 = (0);
seq__372649_372655 = G__372676;
chunk__372650_372656 = G__372677;
count__372651_372657 = G__372678;
i__372652_372658 = G__372679;
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
var G__372680 = pel;
el = G__372680;
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
var seq__372695_372709 = cljs.core.seq.call(null,nm);
var chunk__372697_372710 = null;
var count__372698_372711 = (0);
var i__372699_372712 = (0);
while(true){
if((i__372699_372712 < count__372698_372711)){
var vec__372701_372713 = cljs.core._nth.call(null,chunk__372697_372710,i__372699_372712);
var nk_372714 = cljs.core.nth.call(null,vec__372701_372713,(0),null);
var nv_372715 = cljs.core.nth.call(null,vec__372701_372713,(1),null);
var ov_372716 = nk_372714.call(null,om);
var n_372717 = cljs.core.name.call(null,nk_372714);
if(!((ov_372716 === nv_372715))){
if(cljs.core.truth_(nv_372715)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_372717,ov_372716,nv_372715);
} else {
var o__28731__auto___372718 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_372717,new cljs.core.Keyword(null,"value","value",305978217),nv_372715], null));
if(!(o__28731__auto___372718 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___372718)){
o__28731__auto___372718.call(null,((function (seq__372695_372709,chunk__372697_372710,count__372698_372711,i__372699_372712,o__28731__auto___372718,ov_372716,n_372717,vec__372701_372713,nk_372714,nv_372715){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_372717,ov_372716,nv_372715);
});})(seq__372695_372709,chunk__372697_372710,count__372698_372711,i__372699_372712,o__28731__auto___372718,ov_372716,n_372717,vec__372701_372713,nk_372714,nv_372715))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_372717,ov_372716,nv_372715);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_372717,ov_372716,null);
} else {
var o__28731__auto___372719 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_372717], null));
if(!(o__28731__auto___372719 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___372719)){
o__28731__auto___372719.call(null,((function (seq__372695_372709,chunk__372697_372710,count__372698_372711,i__372699_372712,o__28731__auto___372719,ov_372716,n_372717,vec__372701_372713,nk_372714,nv_372715){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_372717,ov_372716,null);
});})(seq__372695_372709,chunk__372697_372710,count__372698_372711,i__372699_372712,o__28731__auto___372719,ov_372716,n_372717,vec__372701_372713,nk_372714,nv_372715))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_372717,ov_372716,null);
}
} else {
}
}
}
} else {
}

var G__372720 = seq__372695_372709;
var G__372721 = chunk__372697_372710;
var G__372722 = count__372698_372711;
var G__372723 = (i__372699_372712 + (1));
seq__372695_372709 = G__372720;
chunk__372697_372710 = G__372721;
count__372698_372711 = G__372722;
i__372699_372712 = G__372723;
continue;
} else {
var temp__4425__auto___372724 = cljs.core.seq.call(null,seq__372695_372709);
if(temp__4425__auto___372724){
var seq__372695_372725__$1 = temp__4425__auto___372724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__372695_372725__$1)){
var c__24964__auto___372726 = cljs.core.chunk_first.call(null,seq__372695_372725__$1);
var G__372727 = cljs.core.chunk_rest.call(null,seq__372695_372725__$1);
var G__372728 = c__24964__auto___372726;
var G__372729 = cljs.core.count.call(null,c__24964__auto___372726);
var G__372730 = (0);
seq__372695_372709 = G__372727;
chunk__372697_372710 = G__372728;
count__372698_372711 = G__372729;
i__372699_372712 = G__372730;
continue;
} else {
var vec__372702_372731 = cljs.core.first.call(null,seq__372695_372725__$1);
var nk_372732 = cljs.core.nth.call(null,vec__372702_372731,(0),null);
var nv_372733 = cljs.core.nth.call(null,vec__372702_372731,(1),null);
var ov_372734 = nk_372732.call(null,om);
var n_372735 = cljs.core.name.call(null,nk_372732);
if(!((ov_372734 === nv_372733))){
if(cljs.core.truth_(nv_372733)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_372735,ov_372734,nv_372733);
} else {
var o__28731__auto___372736 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_372735,new cljs.core.Keyword(null,"value","value",305978217),nv_372733], null));
if(!(o__28731__auto___372736 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___372736)){
o__28731__auto___372736.call(null,((function (seq__372695_372709,chunk__372697_372710,count__372698_372711,i__372699_372712,o__28731__auto___372736,ov_372734,n_372735,vec__372702_372731,nk_372732,nv_372733,seq__372695_372725__$1,temp__4425__auto___372724){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_372735,ov_372734,nv_372733);
});})(seq__372695_372709,chunk__372697_372710,count__372698_372711,i__372699_372712,o__28731__auto___372736,ov_372734,n_372735,vec__372702_372731,nk_372732,nv_372733,seq__372695_372725__$1,temp__4425__auto___372724))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_372735,ov_372734,nv_372733);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_372735,ov_372734,null);
} else {
var o__28731__auto___372737 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_372735], null));
if(!(o__28731__auto___372737 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___372737)){
o__28731__auto___372737.call(null,((function (seq__372695_372709,chunk__372697_372710,count__372698_372711,i__372699_372712,o__28731__auto___372737,ov_372734,n_372735,vec__372702_372731,nk_372732,nv_372733,seq__372695_372725__$1,temp__4425__auto___372724){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_372735,ov_372734,null);
});})(seq__372695_372709,chunk__372697_372710,count__372698_372711,i__372699_372712,o__28731__auto___372737,ov_372734,n_372735,vec__372702_372731,nk_372732,nv_372733,seq__372695_372725__$1,temp__4425__auto___372724))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_372735,ov_372734,null);
}
} else {
}
}
}
} else {
}

var G__372738 = cljs.core.next.call(null,seq__372695_372725__$1);
var G__372739 = null;
var G__372740 = (0);
var G__372741 = (0);
seq__372695_372709 = G__372738;
chunk__372697_372710 = G__372739;
count__372698_372711 = G__372740;
i__372699_372712 = G__372741;
continue;
}
} else {
}
}
break;
}

var seq__372703 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__372705 = null;
var count__372706 = (0);
var i__372707 = (0);
while(true){
if((i__372707 < count__372706)){
var k = cljs.core._nth.call(null,chunk__372705,i__372707);
var n_372742 = cljs.core.name.call(null,k);
var ov_372743 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_372742,ov_372743,null);
} else {
var o__28731__auto___372744 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_372742], null));
if(!(o__28731__auto___372744 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___372744)){
o__28731__auto___372744.call(null,((function (seq__372703,chunk__372705,count__372706,i__372707,o__28731__auto___372744,n_372742,ov_372743,k){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_372742,ov_372743,null);
});})(seq__372703,chunk__372705,count__372706,i__372707,o__28731__auto___372744,n_372742,ov_372743,k))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_372742,ov_372743,null);
}
} else {
}
}

var G__372745 = seq__372703;
var G__372746 = chunk__372705;
var G__372747 = count__372706;
var G__372748 = (i__372707 + (1));
seq__372703 = G__372745;
chunk__372705 = G__372746;
count__372706 = G__372747;
i__372707 = G__372748;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__372703);
if(temp__4425__auto__){
var seq__372703__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__372703__$1)){
var c__24964__auto__ = cljs.core.chunk_first.call(null,seq__372703__$1);
var G__372749 = cljs.core.chunk_rest.call(null,seq__372703__$1);
var G__372750 = c__24964__auto__;
var G__372751 = cljs.core.count.call(null,c__24964__auto__);
var G__372752 = (0);
seq__372703 = G__372749;
chunk__372705 = G__372750;
count__372706 = G__372751;
i__372707 = G__372752;
continue;
} else {
var k = cljs.core.first.call(null,seq__372703__$1);
var n_372753 = cljs.core.name.call(null,k);
var ov_372754 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_372753,ov_372754,null);
} else {
var o__28731__auto___372755 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_372753], null));
if(!(o__28731__auto___372755 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___372755)){
o__28731__auto___372755.call(null,((function (seq__372703,chunk__372705,count__372706,i__372707,o__28731__auto___372755,n_372753,ov_372754,k,seq__372703__$1,temp__4425__auto__){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_372753,ov_372754,null);
});})(seq__372703,chunk__372705,count__372706,i__372707,o__28731__auto___372755,n_372753,ov_372754,k,seq__372703__$1,temp__4425__auto__))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_372753,ov_372754,null);
}
} else {
}
}

var G__372756 = cljs.core.next.call(null,seq__372703__$1);
var G__372757 = null;
var G__372758 = (0);
var G__372759 = (0);
seq__372703 = G__372756;
chunk__372705 = G__372757;
count__372706 = G__372758;
i__372707 = G__372759;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__24933__auto__ = (function hipo$interpreter$keyed_children__GT_map_$_iter__372764(s__372765){
return (new cljs.core.LazySeq(null,(function (){
var s__372765__$1 = s__372765;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__372765__$1);
if(temp__4425__auto__){
var s__372765__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__372765__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__372765__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__372767 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__372766 = (0);
while(true){
if((i__372766 < size__24932__auto__)){
var h = cljs.core._nth.call(null,c__24931__auto__,i__372766);
cljs.core.chunk_append.call(null,b__372767,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null));

var G__372768 = (i__372766 + (1));
i__372766 = G__372768;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__372767),hipo$interpreter$keyed_children__GT_map_$_iter__372764.call(null,cljs.core.chunk_rest.call(null,s__372765__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__372767),null);
}
} else {
var h = cljs.core.first.call(null,s__372765__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null),hipo$interpreter$keyed_children__GT_map_$_iter__372764.call(null,cljs.core.rest.call(null,s__372765__$2)));
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__24933__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__372773(s__372774){
return (new cljs.core.LazySeq(null,(function (){
var s__372774__$1 = s__372774;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__372774__$1);
if(temp__4425__auto__){
var s__372774__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__372774__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__372774__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__372776 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__372775 = (0);
while(true){
if((i__372775 < size__24932__auto__)){
var ih = cljs.core._nth.call(null,c__24931__auto__,i__372775);
cljs.core.chunk_append.call(null,b__372776,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__372777 = (i__372775 + (1));
i__372775 = G__372777;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__372776),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__372773.call(null,cljs.core.chunk_rest.call(null,s__372774__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__372776),null);
}
} else {
var ih = cljs.core.first.call(null,s__372774__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__372773.call(null,cljs.core.rest.call(null,s__372774__$2)));
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
var seq__372786_372794 = cljs.core.seq.call(null,nm);
var chunk__372787_372795 = null;
var count__372788_372796 = (0);
var i__372789_372797 = (0);
while(true){
if((i__372789_372797 < count__372788_372796)){
var vec__372790_372798 = cljs.core._nth.call(null,chunk__372787_372795,i__372789_372797);
var i_372799 = cljs.core.nth.call(null,vec__372790_372798,(0),null);
var vec__372791_372800 = cljs.core.nth.call(null,vec__372790_372798,(1),null);
var ii_372801 = cljs.core.nth.call(null,vec__372791_372800,(0),null);
var h_372802 = cljs.core.nth.call(null,vec__372791_372800,(1),null);
var temp__4423__auto___372803 = cljs.core.get.call(null,om,i_372799);
if(cljs.core.truth_(temp__4423__auto___372803)){
var oh_372804 = temp__4423__auto___372803;
if(cljs.core.not.call(null,int$)){
if((oh_372804 === h_372802)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_372801,cljs.core.nth.call(null,cs,i_372799));
} else {
var ncel_372805 = el.removeChild(cljs.core.nth.call(null,cs,i_372799));
hipo.interpreter.update_BANG_.call(null,ncel_372805,oh_372804,h_372802,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_372801,ncel_372805);
}
} else {
var o__28731__auto___372806 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_372802,new cljs.core.Keyword(null,"index","index",-1531685915),ii_372801], null));
if(!(o__28731__auto___372806 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___372806)){
o__28731__auto___372806.call(null,((function (seq__372786_372794,chunk__372787_372795,count__372788_372796,i__372789_372797,o__28731__auto___372806,oh_372804,temp__4423__auto___372803,vec__372790_372798,i_372799,vec__372791_372800,ii_372801,h_372802,om,nm,cs){
return (function (){
if((oh_372804 === h_372802)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_372801,cljs.core.nth.call(null,cs,i_372799));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_372799));
hipo.interpreter.update_BANG_.call(null,ncel,oh_372804,h_372802,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_372801,ncel);
}
});})(seq__372786_372794,chunk__372787_372795,count__372788_372796,i__372789_372797,o__28731__auto___372806,oh_372804,temp__4423__auto___372803,vec__372790_372798,i_372799,vec__372791_372800,ii_372801,h_372802,om,nm,cs))
);
} else {
if((oh_372804 === h_372802)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_372801,cljs.core.nth.call(null,cs,i_372799));
} else {
var ncel_372807 = el.removeChild(cljs.core.nth.call(null,cs,i_372799));
hipo.interpreter.update_BANG_.call(null,ncel_372807,oh_372804,h_372802,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_372801,ncel_372807);
}
}
} else {
}
}
} else {
var nel_372808 = hipo.interpreter.create_child.call(null,h_372802);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_372801,nel_372808);
} else {
var o__28731__auto___372809 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_372808,new cljs.core.Keyword(null,"index","index",-1531685915),ii_372801], null));
if(!(o__28731__auto___372809 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___372809)){
o__28731__auto___372809.call(null,((function (seq__372786_372794,chunk__372787_372795,count__372788_372796,i__372789_372797,o__28731__auto___372809,nel_372808,temp__4423__auto___372803,vec__372790_372798,i_372799,vec__372791_372800,ii_372801,h_372802,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_372801,nel_372808);
});})(seq__372786_372794,chunk__372787_372795,count__372788_372796,i__372789_372797,o__28731__auto___372809,nel_372808,temp__4423__auto___372803,vec__372790_372798,i_372799,vec__372791_372800,ii_372801,h_372802,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_372801,nel_372808);
}
} else {
}
}
}

var G__372810 = seq__372786_372794;
var G__372811 = chunk__372787_372795;
var G__372812 = count__372788_372796;
var G__372813 = (i__372789_372797 + (1));
seq__372786_372794 = G__372810;
chunk__372787_372795 = G__372811;
count__372788_372796 = G__372812;
i__372789_372797 = G__372813;
continue;
} else {
var temp__4425__auto___372814 = cljs.core.seq.call(null,seq__372786_372794);
if(temp__4425__auto___372814){
var seq__372786_372815__$1 = temp__4425__auto___372814;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__372786_372815__$1)){
var c__24964__auto___372816 = cljs.core.chunk_first.call(null,seq__372786_372815__$1);
var G__372817 = cljs.core.chunk_rest.call(null,seq__372786_372815__$1);
var G__372818 = c__24964__auto___372816;
var G__372819 = cljs.core.count.call(null,c__24964__auto___372816);
var G__372820 = (0);
seq__372786_372794 = G__372817;
chunk__372787_372795 = G__372818;
count__372788_372796 = G__372819;
i__372789_372797 = G__372820;
continue;
} else {
var vec__372792_372821 = cljs.core.first.call(null,seq__372786_372815__$1);
var i_372822 = cljs.core.nth.call(null,vec__372792_372821,(0),null);
var vec__372793_372823 = cljs.core.nth.call(null,vec__372792_372821,(1),null);
var ii_372824 = cljs.core.nth.call(null,vec__372793_372823,(0),null);
var h_372825 = cljs.core.nth.call(null,vec__372793_372823,(1),null);
var temp__4423__auto___372826 = cljs.core.get.call(null,om,i_372822);
if(cljs.core.truth_(temp__4423__auto___372826)){
var oh_372827 = temp__4423__auto___372826;
if(cljs.core.not.call(null,int$)){
if((oh_372827 === h_372825)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_372824,cljs.core.nth.call(null,cs,i_372822));
} else {
var ncel_372828 = el.removeChild(cljs.core.nth.call(null,cs,i_372822));
hipo.interpreter.update_BANG_.call(null,ncel_372828,oh_372827,h_372825,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_372824,ncel_372828);
}
} else {
var o__28731__auto___372829 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_372825,new cljs.core.Keyword(null,"index","index",-1531685915),ii_372824], null));
if(!(o__28731__auto___372829 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___372829)){
o__28731__auto___372829.call(null,((function (seq__372786_372794,chunk__372787_372795,count__372788_372796,i__372789_372797,o__28731__auto___372829,oh_372827,temp__4423__auto___372826,vec__372792_372821,i_372822,vec__372793_372823,ii_372824,h_372825,seq__372786_372815__$1,temp__4425__auto___372814,om,nm,cs){
return (function (){
if((oh_372827 === h_372825)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_372824,cljs.core.nth.call(null,cs,i_372822));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_372822));
hipo.interpreter.update_BANG_.call(null,ncel,oh_372827,h_372825,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_372824,ncel);
}
});})(seq__372786_372794,chunk__372787_372795,count__372788_372796,i__372789_372797,o__28731__auto___372829,oh_372827,temp__4423__auto___372826,vec__372792_372821,i_372822,vec__372793_372823,ii_372824,h_372825,seq__372786_372815__$1,temp__4425__auto___372814,om,nm,cs))
);
} else {
if((oh_372827 === h_372825)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_372824,cljs.core.nth.call(null,cs,i_372822));
} else {
var ncel_372830 = el.removeChild(cljs.core.nth.call(null,cs,i_372822));
hipo.interpreter.update_BANG_.call(null,ncel_372830,oh_372827,h_372825,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_372824,ncel_372830);
}
}
} else {
}
}
} else {
var nel_372831 = hipo.interpreter.create_child.call(null,h_372825);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_372824,nel_372831);
} else {
var o__28731__auto___372832 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_372831,new cljs.core.Keyword(null,"index","index",-1531685915),ii_372824], null));
if(!(o__28731__auto___372832 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___372832)){
o__28731__auto___372832.call(null,((function (seq__372786_372794,chunk__372787_372795,count__372788_372796,i__372789_372797,o__28731__auto___372832,nel_372831,temp__4423__auto___372826,vec__372792_372821,i_372822,vec__372793_372823,ii_372824,h_372825,seq__372786_372815__$1,temp__4425__auto___372814,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_372824,nel_372831);
});})(seq__372786_372794,chunk__372787_372795,count__372788_372796,i__372789_372797,o__28731__auto___372832,nel_372831,temp__4423__auto___372826,vec__372792_372821,i_372822,vec__372793_372823,ii_372824,h_372825,seq__372786_372815__$1,temp__4425__auto___372814,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_372824,nel_372831);
}
} else {
}
}
}

var G__372833 = cljs.core.next.call(null,seq__372786_372815__$1);
var G__372834 = null;
var G__372835 = (0);
var G__372836 = (0);
seq__372786_372794 = G__372833;
chunk__372787_372795 = G__372834;
count__372788_372796 = G__372835;
i__372789_372797 = G__372836;
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
var o__28731__auto___372837 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__28731__auto___372837 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___372837)){
o__28731__auto___372837.call(null,((function (o__28731__auto___372837,oc,nc,d){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__28731__auto___372837,oc,nc,d))
);
} else {
hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
}
} else {
}
}
} else {
}

var n__25064__auto___372838 = (function (){var x__24499__auto__ = oc;
var y__24500__auto__ = nc;
return ((x__24499__auto__ < y__24500__auto__) ? x__24499__auto__ : y__24500__auto__);
})();
var i_372839 = (0);
while(true){
if((i_372839 < n__25064__auto___372838)){
var ov_372840 = cljs.core.nth.call(null,och,i_372839);
var nv_372841 = cljs.core.nth.call(null,nch,i_372839);
if(!((ov_372840 === nv_372841))){
var temp__4423__auto___372842 = hipo.dom.child_at.call(null,el,i_372839);
if(cljs.core.truth_(temp__4423__auto___372842)){
var cel_372843 = temp__4423__auto___372842;
hipo.interpreter.update_BANG_.call(null,cel_372843,ov_372840,nv_372841,int$);
} else {
}
} else {
}

var G__372844 = (i_372839 + (1));
i_372839 = G__372844;
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
var o__28731__auto___372845 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
if(!(o__28731__auto___372845 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___372845)){
o__28731__auto___372845.call(null,((function (o__28731__auto___372845,f,cs,oc,nc,d){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs);
});})(o__28731__auto___372845,f,cs,oc,nc,d))
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
var o__28731__auto___372846 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-children","update-children",1871853561),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__28731__auto___372846 === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto___372846)){
o__28731__auto___372846.call(null,((function (o__28731__auto___372846,om,nm,och,nch){
return (function (){
return hipo.interpreter.update_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),int$);
});})(o__28731__auto___372846,om,nm,och,nch))
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
var G__372851__delegate = function (nh,p__372849){
var vec__372850 = p__372849;
var m = cljs.core.nth.call(null,vec__372850,(0),null);
var int$ = new cljs.core.Keyword(null,"interceptor","interceptor",1127739076).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
} else {
var o__28731__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__28731__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__28731__auto__)){
return o__28731__auto__.call(null,((function (o__28731__auto__,int$,vec__372850,m,a){
return (function (){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
});})(o__28731__auto__,int$,vec__372850,m,a))
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
var G__372851 = function (nh,var_args){
var p__372849 = null;
if (arguments.length > 1) {
var G__372852__i = 0, G__372852__a = new Array(arguments.length -  1);
while (G__372852__i < G__372852__a.length) {G__372852__a[G__372852__i] = arguments[G__372852__i + 1]; ++G__372852__i;}
  p__372849 = new cljs.core.IndexedSeq(G__372852__a,0);
} 
return G__372851__delegate.call(this,nh,p__372849);};
G__372851.cljs$lang$maxFixedArity = 1;
G__372851.cljs$lang$applyTo = (function (arglist__372853){
var nh = cljs.core.first(arglist__372853);
var p__372849 = cljs.core.rest(arglist__372853);
return G__372851__delegate(nh,p__372849);
});
G__372851.cljs$core$IFn$_invoke$arity$variadic = G__372851__delegate;
return G__372851;
})()
;})(a))
], null);
});

//# sourceMappingURL=interpreter.js.map