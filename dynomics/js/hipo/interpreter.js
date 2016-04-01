// Compiled by ClojureScript 1.8.40 {}
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
var temp__4655__auto___125558 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___125558)){
var h_125559 = temp__4655__auto___125558;
hipo.interpreter.append_child_BANG_.call(null,el,h_125559);
} else {
}

var G__125560 = cljs.core.rest.call(null,v__$1);
v__$1 = G__125560;
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
var seq__125570_125581 = cljs.core.seq.call(null,attrs);
var chunk__125571_125582 = null;
var count__125572_125583 = (0);
var i__125573_125584 = (0);
while(true){
if((i__125573_125584 < count__125572_125583)){
var vec__125574_125588 = cljs.core._nth.call(null,chunk__125571_125582,i__125573_125584);
var k_125589 = cljs.core.nth.call(null,vec__125574_125588,(0),null);
var v_125590 = cljs.core.nth.call(null,vec__125574_125588,(1),null);
if(cljs.core.truth_(v_125590)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_125589),null,v_125590);
} else {
}

var G__125592 = seq__125570_125581;
var G__125593 = chunk__125571_125582;
var G__125594 = count__125572_125583;
var G__125595 = (i__125573_125584 + (1));
seq__125570_125581 = G__125592;
chunk__125571_125582 = G__125593;
count__125572_125583 = G__125594;
i__125573_125584 = G__125595;
continue;
} else {
var temp__4657__auto___125599 = cljs.core.seq.call(null,seq__125570_125581);
if(temp__4657__auto___125599){
var seq__125570_125600__$1 = temp__4657__auto___125599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125570_125600__$1)){
var c__36236__auto___125601 = cljs.core.chunk_first.call(null,seq__125570_125600__$1);
var G__125602 = cljs.core.chunk_rest.call(null,seq__125570_125600__$1);
var G__125603 = c__36236__auto___125601;
var G__125604 = cljs.core.count.call(null,c__36236__auto___125601);
var G__125605 = (0);
seq__125570_125581 = G__125602;
chunk__125571_125582 = G__125603;
count__125572_125583 = G__125604;
i__125573_125584 = G__125605;
continue;
} else {
var vec__125576_125606 = cljs.core.first.call(null,seq__125570_125600__$1);
var k_125607 = cljs.core.nth.call(null,vec__125576_125606,(0),null);
var v_125608 = cljs.core.nth.call(null,vec__125576_125606,(1),null);
if(cljs.core.truth_(v_125608)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_125607),null,v_125608);
} else {
}

var G__125609 = cljs.core.next.call(null,seq__125570_125600__$1);
var G__125610 = null;
var G__125611 = (0);
var G__125612 = (0);
seq__125570_125581 = G__125609;
chunk__125571_125582 = G__125610;
count__125572_125583 = G__125611;
i__125573_125584 = G__125612;
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
var G__125613 = pel;
el = G__125613;
continue;
} else {
(el["hipo-partially-compiled"] = true);

return el;
}
break;
}
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o){
if(cljs.core.truth_((function (){var or__35425__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
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
var seq__125661_125691 = cljs.core.seq.call(null,nm);
var chunk__125663_125692 = null;
var count__125664_125693 = (0);
var i__125665_125694 = (0);
while(true){
if((i__125665_125694 < count__125664_125693)){
var vec__125668_125699 = cljs.core._nth.call(null,chunk__125663_125692,i__125665_125694);
var nk_125700 = cljs.core.nth.call(null,vec__125668_125699,(0),null);
var nv_125701 = cljs.core.nth.call(null,vec__125668_125699,(1),null);
var ov_125702 = nk_125700.call(null,om);
var n_125703 = cljs.core.name.call(null,nk_125700);
if(!((ov_125702 === nv_125701))){
if(cljs.core.truth_(nv_125701)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_125703,ov_125702,nv_125701);
} else {
var o__36556__auto___125704 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_125703,new cljs.core.Keyword(null,"value","value",305978217),nv_125701], null));
if(!(o__36556__auto___125704 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto___125704)){
o__36556__auto___125704.call(null,((function (seq__125661_125691,chunk__125663_125692,count__125664_125693,i__125665_125694,o__36556__auto___125704,ov_125702,n_125703,vec__125668_125699,nk_125700,nv_125701){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_125703,ov_125702,nv_125701);
});})(seq__125661_125691,chunk__125663_125692,count__125664_125693,i__125665_125694,o__36556__auto___125704,ov_125702,n_125703,vec__125668_125699,nk_125700,nv_125701))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_125703,ov_125702,nv_125701);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_125703,ov_125702,null);
} else {
var o__36556__auto___125707 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_125703], null));
if(!(o__36556__auto___125707 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto___125707)){
o__36556__auto___125707.call(null,((function (seq__125661_125691,chunk__125663_125692,count__125664_125693,i__125665_125694,o__36556__auto___125707,ov_125702,n_125703,vec__125668_125699,nk_125700,nv_125701){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_125703,ov_125702,null);
});})(seq__125661_125691,chunk__125663_125692,count__125664_125693,i__125665_125694,o__36556__auto___125707,ov_125702,n_125703,vec__125668_125699,nk_125700,nv_125701))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_125703,ov_125702,null);
}
} else {
}
}
}
} else {
}

var G__125710 = seq__125661_125691;
var G__125711 = chunk__125663_125692;
var G__125712 = count__125664_125693;
var G__125713 = (i__125665_125694 + (1));
seq__125661_125691 = G__125710;
chunk__125663_125692 = G__125711;
count__125664_125693 = G__125712;
i__125665_125694 = G__125713;
continue;
} else {
var temp__4657__auto___125714 = cljs.core.seq.call(null,seq__125661_125691);
if(temp__4657__auto___125714){
var seq__125661_125715__$1 = temp__4657__auto___125714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125661_125715__$1)){
var c__36236__auto___125716 = cljs.core.chunk_first.call(null,seq__125661_125715__$1);
var G__125717 = cljs.core.chunk_rest.call(null,seq__125661_125715__$1);
var G__125718 = c__36236__auto___125716;
var G__125719 = cljs.core.count.call(null,c__36236__auto___125716);
var G__125720 = (0);
seq__125661_125691 = G__125717;
chunk__125663_125692 = G__125718;
count__125664_125693 = G__125719;
i__125665_125694 = G__125720;
continue;
} else {
var vec__125673_125727 = cljs.core.first.call(null,seq__125661_125715__$1);
var nk_125728 = cljs.core.nth.call(null,vec__125673_125727,(0),null);
var nv_125729 = cljs.core.nth.call(null,vec__125673_125727,(1),null);
var ov_125738 = nk_125728.call(null,om);
var n_125739 = cljs.core.name.call(null,nk_125728);
if(!((ov_125738 === nv_125729))){
if(cljs.core.truth_(nv_125729)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_125739,ov_125738,nv_125729);
} else {
var o__36556__auto___125740 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_125739,new cljs.core.Keyword(null,"value","value",305978217),nv_125729], null));
if(!(o__36556__auto___125740 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto___125740)){
o__36556__auto___125740.call(null,((function (seq__125661_125691,chunk__125663_125692,count__125664_125693,i__125665_125694,o__36556__auto___125740,ov_125738,n_125739,vec__125673_125727,nk_125728,nv_125729,seq__125661_125715__$1,temp__4657__auto___125714){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_125739,ov_125738,nv_125729);
});})(seq__125661_125691,chunk__125663_125692,count__125664_125693,i__125665_125694,o__36556__auto___125740,ov_125738,n_125739,vec__125673_125727,nk_125728,nv_125729,seq__125661_125715__$1,temp__4657__auto___125714))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_125739,ov_125738,nv_125729);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_125739,ov_125738,null);
} else {
var o__36556__auto___125741 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_125739], null));
if(!(o__36556__auto___125741 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto___125741)){
o__36556__auto___125741.call(null,((function (seq__125661_125691,chunk__125663_125692,count__125664_125693,i__125665_125694,o__36556__auto___125741,ov_125738,n_125739,vec__125673_125727,nk_125728,nv_125729,seq__125661_125715__$1,temp__4657__auto___125714){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_125739,ov_125738,null);
});})(seq__125661_125691,chunk__125663_125692,count__125664_125693,i__125665_125694,o__36556__auto___125741,ov_125738,n_125739,vec__125673_125727,nk_125728,nv_125729,seq__125661_125715__$1,temp__4657__auto___125714))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_125739,ov_125738,null);
}
} else {
}
}
}
} else {
}

var G__125742 = cljs.core.next.call(null,seq__125661_125715__$1);
var G__125743 = null;
var G__125744 = (0);
var G__125745 = (0);
seq__125661_125691 = G__125742;
chunk__125663_125692 = G__125743;
count__125664_125693 = G__125744;
i__125665_125694 = G__125745;
continue;
}
} else {
}
}
break;
}

var seq__125676 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__125678 = null;
var count__125679 = (0);
var i__125680 = (0);
while(true){
if((i__125680 < count__125679)){
var k = cljs.core._nth.call(null,chunk__125678,i__125680);
var n_125750 = cljs.core.name.call(null,k);
var ov_125751 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_125750,ov_125751,null);
} else {
var o__36556__auto___125752 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_125750], null));
if(!(o__36556__auto___125752 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto___125752)){
o__36556__auto___125752.call(null,((function (seq__125676,chunk__125678,count__125679,i__125680,o__36556__auto___125752,n_125750,ov_125751,k){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_125750,ov_125751,null);
});})(seq__125676,chunk__125678,count__125679,i__125680,o__36556__auto___125752,n_125750,ov_125751,k))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_125750,ov_125751,null);
}
} else {
}
}

var G__125754 = seq__125676;
var G__125755 = chunk__125678;
var G__125756 = count__125679;
var G__125757 = (i__125680 + (1));
seq__125676 = G__125754;
chunk__125678 = G__125755;
count__125679 = G__125756;
i__125680 = G__125757;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__125676);
if(temp__4657__auto__){
var seq__125676__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125676__$1)){
var c__36236__auto__ = cljs.core.chunk_first.call(null,seq__125676__$1);
var G__125758 = cljs.core.chunk_rest.call(null,seq__125676__$1);
var G__125759 = c__36236__auto__;
var G__125760 = cljs.core.count.call(null,c__36236__auto__);
var G__125761 = (0);
seq__125676 = G__125758;
chunk__125678 = G__125759;
count__125679 = G__125760;
i__125680 = G__125761;
continue;
} else {
var k = cljs.core.first.call(null,seq__125676__$1);
var n_125762 = cljs.core.name.call(null,k);
var ov_125763 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_125762,ov_125763,null);
} else {
var o__36556__auto___125764 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_125762], null));
if(!(o__36556__auto___125764 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto___125764)){
o__36556__auto___125764.call(null,((function (seq__125676,chunk__125678,count__125679,i__125680,o__36556__auto___125764,n_125762,ov_125763,k,seq__125676__$1,temp__4657__auto__){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_125762,ov_125763,null);
});})(seq__125676,chunk__125678,count__125679,i__125680,o__36556__auto___125764,n_125762,ov_125763,k,seq__125676__$1,temp__4657__auto__))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_125762,ov_125763,null);
}
} else {
}
}

var G__125767 = cljs.core.next.call(null,seq__125676__$1);
var G__125768 = null;
var G__125769 = (0);
var G__125770 = (0);
seq__125676 = G__125767;
chunk__125678 = G__125768;
count__125679 = G__125769;
i__125680 = G__125770;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__36205__auto__ = (function hipo$interpreter$keyed_children__GT_map_$_iter__125777(s__125778){
return (new cljs.core.LazySeq(null,(function (){
var s__125778__$1 = s__125778;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__125778__$1);
if(temp__4657__auto__){
var s__125778__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__125778__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__125778__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__125780 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__125779 = (0);
while(true){
if((i__125779 < size__36204__auto__)){
var h = cljs.core._nth.call(null,c__36203__auto__,i__125779);
cljs.core.chunk_append.call(null,b__125780,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null));

var G__125786 = (i__125779 + (1));
i__125779 = G__125786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__125780),hipo$interpreter$keyed_children__GT_map_$_iter__125777.call(null,cljs.core.chunk_rest.call(null,s__125778__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__125780),null);
}
} else {
var h = cljs.core.first.call(null,s__125778__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null),hipo$interpreter$keyed_children__GT_map_$_iter__125777.call(null,cljs.core.rest.call(null,s__125778__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36205__auto__.call(null,v);
})());
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__36205__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__125791(s__125792){
return (new cljs.core.LazySeq(null,(function (){
var s__125792__$1 = s__125792;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__125792__$1);
if(temp__4657__auto__){
var s__125792__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__125792__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__125792__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__125794 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__125793 = (0);
while(true){
if((i__125793 < size__36204__auto__)){
var ih = cljs.core._nth.call(null,c__36203__auto__,i__125793);
cljs.core.chunk_append.call(null,b__125794,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__125796 = (i__125793 + (1));
i__125793 = G__125796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__125794),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__125791.call(null,cljs.core.chunk_rest.call(null,s__125792__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__125794),null);
}
} else {
var ih = cljs.core.first.call(null,s__125792__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__125791.call(null,cljs.core.rest.call(null,s__125792__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36205__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__36205__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__36205__auto__))
,v));
})());
});
hipo.interpreter.update_keyed_children_BANG_ = (function hipo$interpreter$update_keyed_children_BANG_(el,och,nch,int$){
var om = hipo.interpreter.keyed_children__GT_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__125813_125825 = cljs.core.seq.call(null,nm);
var chunk__125814_125826 = null;
var count__125815_125827 = (0);
var i__125816_125828 = (0);
while(true){
if((i__125816_125828 < count__125815_125827)){
var vec__125817_125831 = cljs.core._nth.call(null,chunk__125814_125826,i__125816_125828);
var i_125832 = cljs.core.nth.call(null,vec__125817_125831,(0),null);
var vec__125818_125833 = cljs.core.nth.call(null,vec__125817_125831,(1),null);
var ii_125834 = cljs.core.nth.call(null,vec__125818_125833,(0),null);
var h_125835 = cljs.core.nth.call(null,vec__125818_125833,(1),null);
var temp__4655__auto___125837 = cljs.core.get.call(null,om,i_125832);
if(cljs.core.truth_(temp__4655__auto___125837)){
var oh_125838 = temp__4655__auto___125837;
if(cljs.core.not.call(null,int$)){
if((oh_125838 === h_125835)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_125834,cljs.core.nth.call(null,cs,i_125832));
} else {
var ncel_125839 = el.removeChild(cljs.core.nth.call(null,cs,i_125832));
hipo.interpreter.update_BANG_.call(null,ncel_125839,oh_125838,h_125835,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_125834,ncel_125839);
}
} else {
var o__36556__auto___125840 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_125835,new cljs.core.Keyword(null,"index","index",-1531685915),ii_125834], null));
if(!(o__36556__auto___125840 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto___125840)){
o__36556__auto___125840.call(null,((function (seq__125813_125825,chunk__125814_125826,count__125815_125827,i__125816_125828,o__36556__auto___125840,oh_125838,temp__4655__auto___125837,vec__125817_125831,i_125832,vec__125818_125833,ii_125834,h_125835,om,nm,cs){
return (function (){
if((oh_125838 === h_125835)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_125834,cljs.core.nth.call(null,cs,i_125832));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_125832));
hipo.interpreter.update_BANG_.call(null,ncel,oh_125838,h_125835,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_125834,ncel);
}
});})(seq__125813_125825,chunk__125814_125826,count__125815_125827,i__125816_125828,o__36556__auto___125840,oh_125838,temp__4655__auto___125837,vec__125817_125831,i_125832,vec__125818_125833,ii_125834,h_125835,om,nm,cs))
);
} else {
if((oh_125838 === h_125835)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_125834,cljs.core.nth.call(null,cs,i_125832));
} else {
var ncel_125844 = el.removeChild(cljs.core.nth.call(null,cs,i_125832));
hipo.interpreter.update_BANG_.call(null,ncel_125844,oh_125838,h_125835,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_125834,ncel_125844);
}
}
} else {
}
}
} else {
var nel_125845 = hipo.interpreter.create_child.call(null,h_125835);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_125834,nel_125845);
} else {
var o__36556__auto___125846 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_125845,new cljs.core.Keyword(null,"index","index",-1531685915),ii_125834], null));
if(!(o__36556__auto___125846 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto___125846)){
o__36556__auto___125846.call(null,((function (seq__125813_125825,chunk__125814_125826,count__125815_125827,i__125816_125828,o__36556__auto___125846,nel_125845,temp__4655__auto___125837,vec__125817_125831,i_125832,vec__125818_125833,ii_125834,h_125835,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_125834,nel_125845);
});})(seq__125813_125825,chunk__125814_125826,count__125815_125827,i__125816_125828,o__36556__auto___125846,nel_125845,temp__4655__auto___125837,vec__125817_125831,i_125832,vec__125818_125833,ii_125834,h_125835,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_125834,nel_125845);
}
} else {
}
}
}

var G__125847 = seq__125813_125825;
var G__125848 = chunk__125814_125826;
var G__125849 = count__125815_125827;
var G__125850 = (i__125816_125828 + (1));
seq__125813_125825 = G__125847;
chunk__125814_125826 = G__125848;
count__125815_125827 = G__125849;
i__125816_125828 = G__125850;
continue;
} else {
var temp__4657__auto___125851 = cljs.core.seq.call(null,seq__125813_125825);
if(temp__4657__auto___125851){
var seq__125813_125852__$1 = temp__4657__auto___125851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125813_125852__$1)){
var c__36236__auto___125853 = cljs.core.chunk_first.call(null,seq__125813_125852__$1);
var G__125854 = cljs.core.chunk_rest.call(null,seq__125813_125852__$1);
var G__125855 = c__36236__auto___125853;
var G__125856 = cljs.core.count.call(null,c__36236__auto___125853);
var G__125857 = (0);
seq__125813_125825 = G__125854;
chunk__125814_125826 = G__125855;
count__125815_125827 = G__125856;
i__125816_125828 = G__125857;
continue;
} else {
var vec__125819_125858 = cljs.core.first.call(null,seq__125813_125852__$1);
var i_125859 = cljs.core.nth.call(null,vec__125819_125858,(0),null);
var vec__125820_125860 = cljs.core.nth.call(null,vec__125819_125858,(1),null);
var ii_125861 = cljs.core.nth.call(null,vec__125820_125860,(0),null);
var h_125862 = cljs.core.nth.call(null,vec__125820_125860,(1),null);
var temp__4655__auto___125863 = cljs.core.get.call(null,om,i_125859);
if(cljs.core.truth_(temp__4655__auto___125863)){
var oh_125864 = temp__4655__auto___125863;
if(cljs.core.not.call(null,int$)){
if((oh_125864 === h_125862)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_125861,cljs.core.nth.call(null,cs,i_125859));
} else {
var ncel_125865 = el.removeChild(cljs.core.nth.call(null,cs,i_125859));
hipo.interpreter.update_BANG_.call(null,ncel_125865,oh_125864,h_125862,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_125861,ncel_125865);
}
} else {
var o__36556__auto___125866 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_125862,new cljs.core.Keyword(null,"index","index",-1531685915),ii_125861], null));
if(!(o__36556__auto___125866 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto___125866)){
o__36556__auto___125866.call(null,((function (seq__125813_125825,chunk__125814_125826,count__125815_125827,i__125816_125828,o__36556__auto___125866,oh_125864,temp__4655__auto___125863,vec__125819_125858,i_125859,vec__125820_125860,ii_125861,h_125862,seq__125813_125852__$1,temp__4657__auto___125851,om,nm,cs){
return (function (){
if((oh_125864 === h_125862)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_125861,cljs.core.nth.call(null,cs,i_125859));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_125859));
hipo.interpreter.update_BANG_.call(null,ncel,oh_125864,h_125862,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_125861,ncel);
}
});})(seq__125813_125825,chunk__125814_125826,count__125815_125827,i__125816_125828,o__36556__auto___125866,oh_125864,temp__4655__auto___125863,vec__125819_125858,i_125859,vec__125820_125860,ii_125861,h_125862,seq__125813_125852__$1,temp__4657__auto___125851,om,nm,cs))
);
} else {
if((oh_125864 === h_125862)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_125861,cljs.core.nth.call(null,cs,i_125859));
} else {
var ncel_125869 = el.removeChild(cljs.core.nth.call(null,cs,i_125859));
hipo.interpreter.update_BANG_.call(null,ncel_125869,oh_125864,h_125862,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_125861,ncel_125869);
}
}
} else {
}
}
} else {
var nel_125870 = hipo.interpreter.create_child.call(null,h_125862);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_125861,nel_125870);
} else {
var o__36556__auto___125871 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_125870,new cljs.core.Keyword(null,"index","index",-1531685915),ii_125861], null));
if(!(o__36556__auto___125871 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto___125871)){
o__36556__auto___125871.call(null,((function (seq__125813_125825,chunk__125814_125826,count__125815_125827,i__125816_125828,o__36556__auto___125871,nel_125870,temp__4655__auto___125863,vec__125819_125858,i_125859,vec__125820_125860,ii_125861,h_125862,seq__125813_125852__$1,temp__4657__auto___125851,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_125861,nel_125870);
});})(seq__125813_125825,chunk__125814_125826,count__125815_125827,i__125816_125828,o__36556__auto___125871,nel_125870,temp__4655__auto___125863,vec__125819_125858,i_125859,vec__125820_125860,ii_125861,h_125862,seq__125813_125852__$1,temp__4657__auto___125851,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_125861,nel_125870);
}
} else {
}
}
}

var G__125872 = cljs.core.next.call(null,seq__125813_125852__$1);
var G__125873 = null;
var G__125874 = (0);
var G__125875 = (0);
seq__125813_125825 = G__125872;
chunk__125814_125826 = G__125873;
count__125815_125827 = G__125874;
i__125816_125828 = G__125875;
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
var o__36556__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__36556__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto__)){
return o__36556__auto__.call(null,((function (o__36556__auto__,d,om,nm,cs){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__36556__auto__,d,om,nm,cs))
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
var o__36556__auto___125890 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__36556__auto___125890 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto___125890)){
o__36556__auto___125890.call(null,((function (o__36556__auto___125890,oc,nc,d){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__36556__auto___125890,oc,nc,d))
);
} else {
hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
}
} else {
}
}
} else {
}

var n__36339__auto___125891 = (function (){var x__35763__auto__ = oc;
var y__35764__auto__ = nc;
return ((x__35763__auto__ < y__35764__auto__) ? x__35763__auto__ : y__35764__auto__);
})();
var i_125892 = (0);
while(true){
if((i_125892 < n__36339__auto___125891)){
var ov_125893 = cljs.core.nth.call(null,och,i_125892);
var nv_125894 = cljs.core.nth.call(null,nch,i_125892);
if(!((ov_125893 === nv_125894))){
var temp__4655__auto___125895 = hipo.dom.child_at.call(null,el,i_125892);
if(cljs.core.truth_(temp__4655__auto___125895)){
var cel_125896 = temp__4655__auto___125895;
hipo.interpreter.update_BANG_.call(null,cel_125896,ov_125893,nv_125894,int$);
} else {
}
} else {
}

var G__125897 = (i_125892 + (1));
i_125892 = G__125897;
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
var o__36556__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
if(!(o__36556__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto__)){
return o__36556__auto__.call(null,((function (o__36556__auto__,h,oc,nc,d){
return (function (){
return hipo.interpreter.append_child_BANG_.call(null,el,h);
});})(o__36556__auto__,h,oc,nc,d))
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
var o__36556__auto___125904 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
if(!(o__36556__auto___125904 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto___125904)){
o__36556__auto___125904.call(null,((function (o__36556__auto___125904,f,cs,oc,nc,d){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs);
});})(o__36556__auto___125904,f,cs,oc,nc,d))
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
var o__36556__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36556__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto__)){
return o__36556__auto__.call(null,((function (o__36556__auto__){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(o__36556__auto__))
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
var o__36556__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel], null));
if(!(o__36556__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto__)){
return o__36556__auto__.call(null,((function (o__36556__auto__,nel){
return (function (){
return hipo.dom.replace_BANG_.call(null,el,nel);
});})(o__36556__auto__,nel))
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
var o__36556__auto___125922 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-children","update-children",1871853561),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36556__auto___125922 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto___125922)){
o__36556__auto___125922.call(null,((function (o__36556__auto___125922,om,nm,och,nch){
return (function (){
return hipo.interpreter.update_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),int$);
});})(o__36556__auto___125922,om,nm,och,nch))
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
if(cljs.core.truth_((function (){var or__35425__auto__ = cljs.core.vector_QMARK_.call(null,h);
if(or__35425__auto__){
return or__35425__auto__;
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
var o__36556__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
if(!(o__36556__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto__)){
return o__36556__auto__.call(null,((function (o__36556__auto__){
return (function (){
return hipo.dom.replace_text_BANG_.call(null,el,h);
});})(o__36556__auto__))
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
var G__125930__delegate = function (nh,p__125928){
var vec__125929 = p__125928;
var m = cljs.core.nth.call(null,vec__125929,(0),null);
var int$ = new cljs.core.Keyword(null,"interceptor","interceptor",1127739076).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
} else {
var o__36556__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36556__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36556__auto__)){
return o__36556__auto__.call(null,((function (o__36556__auto__,int$,vec__125929,m,a){
return (function (){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
});})(o__36556__auto__,int$,vec__125929,m,a))
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
var G__125930 = function (nh,var_args){
var p__125928 = null;
if (arguments.length > 1) {
var G__125931__i = 0, G__125931__a = new Array(arguments.length -  1);
while (G__125931__i < G__125931__a.length) {G__125931__a[G__125931__i] = arguments[G__125931__i + 1]; ++G__125931__i;}
  p__125928 = new cljs.core.IndexedSeq(G__125931__a,0);
} 
return G__125930__delegate.call(this,nh,p__125928);};
G__125930.cljs$lang$maxFixedArity = 1;
G__125930.cljs$lang$applyTo = (function (arglist__125933){
var nh = cljs.core.first(arglist__125933);
var p__125928 = cljs.core.rest(arglist__125933);
return G__125930__delegate(nh,p__125928);
});
G__125930.cljs$core$IFn$_invoke$arity$variadic = G__125930__delegate;
return G__125930;
})()
;})(a))
], null);
});
