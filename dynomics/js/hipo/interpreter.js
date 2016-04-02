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
var temp__4655__auto___95545 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___95545)){
var h_95546 = temp__4655__auto___95545;
hipo.interpreter.append_child_BANG_.call(null,el,h_95546);
} else {
}

var G__95547 = cljs.core.rest.call(null,v__$1);
v__$1 = G__95547;
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
var seq__95554_95560 = cljs.core.seq.call(null,attrs);
var chunk__95555_95561 = null;
var count__95556_95562 = (0);
var i__95557_95563 = (0);
while(true){
if((i__95557_95563 < count__95556_95562)){
var vec__95558_95564 = cljs.core._nth.call(null,chunk__95555_95561,i__95557_95563);
var k_95565 = cljs.core.nth.call(null,vec__95558_95564,(0),null);
var v_95566 = cljs.core.nth.call(null,vec__95558_95564,(1),null);
if(cljs.core.truth_(v_95566)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_95565),null,v_95566);
} else {
}

var G__95567 = seq__95554_95560;
var G__95568 = chunk__95555_95561;
var G__95569 = count__95556_95562;
var G__95570 = (i__95557_95563 + (1));
seq__95554_95560 = G__95567;
chunk__95555_95561 = G__95568;
count__95556_95562 = G__95569;
i__95557_95563 = G__95570;
continue;
} else {
var temp__4657__auto___95572 = cljs.core.seq.call(null,seq__95554_95560);
if(temp__4657__auto___95572){
var seq__95554_95573__$1 = temp__4657__auto___95572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__95554_95573__$1)){
var c__36203__auto___95574 = cljs.core.chunk_first.call(null,seq__95554_95573__$1);
var G__95575 = cljs.core.chunk_rest.call(null,seq__95554_95573__$1);
var G__95576 = c__36203__auto___95574;
var G__95577 = cljs.core.count.call(null,c__36203__auto___95574);
var G__95578 = (0);
seq__95554_95560 = G__95575;
chunk__95555_95561 = G__95576;
count__95556_95562 = G__95577;
i__95557_95563 = G__95578;
continue;
} else {
var vec__95559_95579 = cljs.core.first.call(null,seq__95554_95573__$1);
var k_95580 = cljs.core.nth.call(null,vec__95559_95579,(0),null);
var v_95581 = cljs.core.nth.call(null,vec__95559_95579,(1),null);
if(cljs.core.truth_(v_95581)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_95580),null,v_95581);
} else {
}

var G__95582 = cljs.core.next.call(null,seq__95554_95573__$1);
var G__95583 = null;
var G__95584 = (0);
var G__95585 = (0);
seq__95554_95560 = G__95582;
chunk__95555_95561 = G__95583;
count__95556_95562 = G__95584;
i__95557_95563 = G__95585;
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
var G__95586 = pel;
el = G__95586;
continue;
} else {
(el["hipo-partially-compiled"] = true);

return el;
}
break;
}
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o){
if(cljs.core.truth_((function (){var or__35392__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
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
var seq__95618_95635 = cljs.core.seq.call(null,nm);
var chunk__95620_95636 = null;
var count__95621_95637 = (0);
var i__95622_95638 = (0);
while(true){
if((i__95622_95638 < count__95621_95637)){
var vec__95624_95639 = cljs.core._nth.call(null,chunk__95620_95636,i__95622_95638);
var nk_95640 = cljs.core.nth.call(null,vec__95624_95639,(0),null);
var nv_95641 = cljs.core.nth.call(null,vec__95624_95639,(1),null);
var ov_95642 = nk_95640.call(null,om);
var n_95643 = cljs.core.name.call(null,nk_95640);
if(!((ov_95642 === nv_95641))){
if(cljs.core.truth_(nv_95641)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_95643,ov_95642,nv_95641);
} else {
var o__36826__auto___95644 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_95643,new cljs.core.Keyword(null,"value","value",305978217),nv_95641], null));
if(!(o__36826__auto___95644 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___95644)){
o__36826__auto___95644.call(null,((function (seq__95618_95635,chunk__95620_95636,count__95621_95637,i__95622_95638,o__36826__auto___95644,ov_95642,n_95643,vec__95624_95639,nk_95640,nv_95641){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_95643,ov_95642,nv_95641);
});})(seq__95618_95635,chunk__95620_95636,count__95621_95637,i__95622_95638,o__36826__auto___95644,ov_95642,n_95643,vec__95624_95639,nk_95640,nv_95641))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_95643,ov_95642,nv_95641);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_95643,ov_95642,null);
} else {
var o__36826__auto___95646 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_95643], null));
if(!(o__36826__auto___95646 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___95646)){
o__36826__auto___95646.call(null,((function (seq__95618_95635,chunk__95620_95636,count__95621_95637,i__95622_95638,o__36826__auto___95646,ov_95642,n_95643,vec__95624_95639,nk_95640,nv_95641){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_95643,ov_95642,null);
});})(seq__95618_95635,chunk__95620_95636,count__95621_95637,i__95622_95638,o__36826__auto___95646,ov_95642,n_95643,vec__95624_95639,nk_95640,nv_95641))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_95643,ov_95642,null);
}
} else {
}
}
}
} else {
}

var G__95648 = seq__95618_95635;
var G__95649 = chunk__95620_95636;
var G__95650 = count__95621_95637;
var G__95651 = (i__95622_95638 + (1));
seq__95618_95635 = G__95648;
chunk__95620_95636 = G__95649;
count__95621_95637 = G__95650;
i__95622_95638 = G__95651;
continue;
} else {
var temp__4657__auto___95654 = cljs.core.seq.call(null,seq__95618_95635);
if(temp__4657__auto___95654){
var seq__95618_95657__$1 = temp__4657__auto___95654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__95618_95657__$1)){
var c__36203__auto___95658 = cljs.core.chunk_first.call(null,seq__95618_95657__$1);
var G__95659 = cljs.core.chunk_rest.call(null,seq__95618_95657__$1);
var G__95660 = c__36203__auto___95658;
var G__95661 = cljs.core.count.call(null,c__36203__auto___95658);
var G__95662 = (0);
seq__95618_95635 = G__95659;
chunk__95620_95636 = G__95660;
count__95621_95637 = G__95661;
i__95622_95638 = G__95662;
continue;
} else {
var vec__95626_95664 = cljs.core.first.call(null,seq__95618_95657__$1);
var nk_95665 = cljs.core.nth.call(null,vec__95626_95664,(0),null);
var nv_95666 = cljs.core.nth.call(null,vec__95626_95664,(1),null);
var ov_95667 = nk_95665.call(null,om);
var n_95668 = cljs.core.name.call(null,nk_95665);
if(!((ov_95667 === nv_95666))){
if(cljs.core.truth_(nv_95666)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_95668,ov_95667,nv_95666);
} else {
var o__36826__auto___95671 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_95668,new cljs.core.Keyword(null,"value","value",305978217),nv_95666], null));
if(!(o__36826__auto___95671 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___95671)){
o__36826__auto___95671.call(null,((function (seq__95618_95635,chunk__95620_95636,count__95621_95637,i__95622_95638,o__36826__auto___95671,ov_95667,n_95668,vec__95626_95664,nk_95665,nv_95666,seq__95618_95657__$1,temp__4657__auto___95654){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_95668,ov_95667,nv_95666);
});})(seq__95618_95635,chunk__95620_95636,count__95621_95637,i__95622_95638,o__36826__auto___95671,ov_95667,n_95668,vec__95626_95664,nk_95665,nv_95666,seq__95618_95657__$1,temp__4657__auto___95654))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_95668,ov_95667,nv_95666);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_95668,ov_95667,null);
} else {
var o__36826__auto___95672 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_95668], null));
if(!(o__36826__auto___95672 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___95672)){
o__36826__auto___95672.call(null,((function (seq__95618_95635,chunk__95620_95636,count__95621_95637,i__95622_95638,o__36826__auto___95672,ov_95667,n_95668,vec__95626_95664,nk_95665,nv_95666,seq__95618_95657__$1,temp__4657__auto___95654){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_95668,ov_95667,null);
});})(seq__95618_95635,chunk__95620_95636,count__95621_95637,i__95622_95638,o__36826__auto___95672,ov_95667,n_95668,vec__95626_95664,nk_95665,nv_95666,seq__95618_95657__$1,temp__4657__auto___95654))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_95668,ov_95667,null);
}
} else {
}
}
}
} else {
}

var G__95674 = cljs.core.next.call(null,seq__95618_95657__$1);
var G__95675 = null;
var G__95676 = (0);
var G__95677 = (0);
seq__95618_95635 = G__95674;
chunk__95620_95636 = G__95675;
count__95621_95637 = G__95676;
i__95622_95638 = G__95677;
continue;
}
} else {
}
}
break;
}

var seq__95628 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__95630 = null;
var count__95631 = (0);
var i__95632 = (0);
while(true){
if((i__95632 < count__95631)){
var k = cljs.core._nth.call(null,chunk__95630,i__95632);
var n_95678 = cljs.core.name.call(null,k);
var ov_95679 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_95678,ov_95679,null);
} else {
var o__36826__auto___95680 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_95678], null));
if(!(o__36826__auto___95680 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___95680)){
o__36826__auto___95680.call(null,((function (seq__95628,chunk__95630,count__95631,i__95632,o__36826__auto___95680,n_95678,ov_95679,k){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_95678,ov_95679,null);
});})(seq__95628,chunk__95630,count__95631,i__95632,o__36826__auto___95680,n_95678,ov_95679,k))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_95678,ov_95679,null);
}
} else {
}
}

var G__95681 = seq__95628;
var G__95682 = chunk__95630;
var G__95683 = count__95631;
var G__95684 = (i__95632 + (1));
seq__95628 = G__95681;
chunk__95630 = G__95682;
count__95631 = G__95683;
i__95632 = G__95684;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__95628);
if(temp__4657__auto__){
var seq__95628__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__95628__$1)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,seq__95628__$1);
var G__95685 = cljs.core.chunk_rest.call(null,seq__95628__$1);
var G__95686 = c__36203__auto__;
var G__95687 = cljs.core.count.call(null,c__36203__auto__);
var G__95688 = (0);
seq__95628 = G__95685;
chunk__95630 = G__95686;
count__95631 = G__95687;
i__95632 = G__95688;
continue;
} else {
var k = cljs.core.first.call(null,seq__95628__$1);
var n_95689 = cljs.core.name.call(null,k);
var ov_95690 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_95689,ov_95690,null);
} else {
var o__36826__auto___95691 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_95689], null));
if(!(o__36826__auto___95691 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___95691)){
o__36826__auto___95691.call(null,((function (seq__95628,chunk__95630,count__95631,i__95632,o__36826__auto___95691,n_95689,ov_95690,k,seq__95628__$1,temp__4657__auto__){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_95689,ov_95690,null);
});})(seq__95628,chunk__95630,count__95631,i__95632,o__36826__auto___95691,n_95689,ov_95690,k,seq__95628__$1,temp__4657__auto__))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_95689,ov_95690,null);
}
} else {
}
}

var G__95695 = cljs.core.next.call(null,seq__95628__$1);
var G__95696 = null;
var G__95697 = (0);
var G__95698 = (0);
seq__95628 = G__95695;
chunk__95630 = G__95696;
count__95631 = G__95697;
i__95632 = G__95698;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__36172__auto__ = (function hipo$interpreter$keyed_children__GT_map_$_iter__95707(s__95708){
return (new cljs.core.LazySeq(null,(function (){
var s__95708__$1 = s__95708;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__95708__$1);
if(temp__4657__auto__){
var s__95708__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__95708__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__95708__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__95710 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__95709 = (0);
while(true){
if((i__95709 < size__36171__auto__)){
var h = cljs.core._nth.call(null,c__36170__auto__,i__95709);
cljs.core.chunk_append.call(null,b__95710,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null));

var G__95713 = (i__95709 + (1));
i__95709 = G__95713;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95710),hipo$interpreter$keyed_children__GT_map_$_iter__95707.call(null,cljs.core.chunk_rest.call(null,s__95708__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95710),null);
}
} else {
var h = cljs.core.first.call(null,s__95708__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null),hipo$interpreter$keyed_children__GT_map_$_iter__95707.call(null,cljs.core.rest.call(null,s__95708__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36172__auto__.call(null,v);
})());
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__36172__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__95722(s__95723){
return (new cljs.core.LazySeq(null,(function (){
var s__95723__$1 = s__95723;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__95723__$1);
if(temp__4657__auto__){
var s__95723__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__95723__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__95723__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__95725 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__95724 = (0);
while(true){
if((i__95724 < size__36171__auto__)){
var ih = cljs.core._nth.call(null,c__36170__auto__,i__95724);
cljs.core.chunk_append.call(null,b__95725,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__95772 = (i__95724 + (1));
i__95724 = G__95772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95725),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__95722.call(null,cljs.core.chunk_rest.call(null,s__95723__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95725),null);
}
} else {
var ih = cljs.core.first.call(null,s__95723__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__95722.call(null,cljs.core.rest.call(null,s__95723__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36172__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__36172__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__36172__auto__))
,v));
})());
});
hipo.interpreter.update_keyed_children_BANG_ = (function hipo$interpreter$update_keyed_children_BANG_(el,och,nch,int$){
var om = hipo.interpreter.keyed_children__GT_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__95821_95840 = cljs.core.seq.call(null,nm);
var chunk__95822_95841 = null;
var count__95823_95842 = (0);
var i__95824_95843 = (0);
while(true){
if((i__95824_95843 < count__95823_95842)){
var vec__95826_95844 = cljs.core._nth.call(null,chunk__95822_95841,i__95824_95843);
var i_95845 = cljs.core.nth.call(null,vec__95826_95844,(0),null);
var vec__95827_95846 = cljs.core.nth.call(null,vec__95826_95844,(1),null);
var ii_95847 = cljs.core.nth.call(null,vec__95827_95846,(0),null);
var h_95848 = cljs.core.nth.call(null,vec__95827_95846,(1),null);
var temp__4655__auto___95849 = cljs.core.get.call(null,om,i_95845);
if(cljs.core.truth_(temp__4655__auto___95849)){
var oh_95850 = temp__4655__auto___95849;
if(cljs.core.not.call(null,int$)){
if((oh_95850 === h_95848)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_95847,cljs.core.nth.call(null,cs,i_95845));
} else {
var ncel_95851 = el.removeChild(cljs.core.nth.call(null,cs,i_95845));
hipo.interpreter.update_BANG_.call(null,ncel_95851,oh_95850,h_95848,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_95847,ncel_95851);
}
} else {
var o__36826__auto___95852 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_95848,new cljs.core.Keyword(null,"index","index",-1531685915),ii_95847], null));
if(!(o__36826__auto___95852 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___95852)){
o__36826__auto___95852.call(null,((function (seq__95821_95840,chunk__95822_95841,count__95823_95842,i__95824_95843,o__36826__auto___95852,oh_95850,temp__4655__auto___95849,vec__95826_95844,i_95845,vec__95827_95846,ii_95847,h_95848,om,nm,cs){
return (function (){
if((oh_95850 === h_95848)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_95847,cljs.core.nth.call(null,cs,i_95845));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_95845));
hipo.interpreter.update_BANG_.call(null,ncel,oh_95850,h_95848,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_95847,ncel);
}
});})(seq__95821_95840,chunk__95822_95841,count__95823_95842,i__95824_95843,o__36826__auto___95852,oh_95850,temp__4655__auto___95849,vec__95826_95844,i_95845,vec__95827_95846,ii_95847,h_95848,om,nm,cs))
);
} else {
if((oh_95850 === h_95848)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_95847,cljs.core.nth.call(null,cs,i_95845));
} else {
var ncel_95853 = el.removeChild(cljs.core.nth.call(null,cs,i_95845));
hipo.interpreter.update_BANG_.call(null,ncel_95853,oh_95850,h_95848,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_95847,ncel_95853);
}
}
} else {
}
}
} else {
var nel_95855 = hipo.interpreter.create_child.call(null,h_95848);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_95847,nel_95855);
} else {
var o__36826__auto___95857 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_95855,new cljs.core.Keyword(null,"index","index",-1531685915),ii_95847], null));
if(!(o__36826__auto___95857 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___95857)){
o__36826__auto___95857.call(null,((function (seq__95821_95840,chunk__95822_95841,count__95823_95842,i__95824_95843,o__36826__auto___95857,nel_95855,temp__4655__auto___95849,vec__95826_95844,i_95845,vec__95827_95846,ii_95847,h_95848,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_95847,nel_95855);
});})(seq__95821_95840,chunk__95822_95841,count__95823_95842,i__95824_95843,o__36826__auto___95857,nel_95855,temp__4655__auto___95849,vec__95826_95844,i_95845,vec__95827_95846,ii_95847,h_95848,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_95847,nel_95855);
}
} else {
}
}
}

var G__95943 = seq__95821_95840;
var G__95944 = chunk__95822_95841;
var G__95945 = count__95823_95842;
var G__95946 = (i__95824_95843 + (1));
seq__95821_95840 = G__95943;
chunk__95822_95841 = G__95944;
count__95823_95842 = G__95945;
i__95824_95843 = G__95946;
continue;
} else {
var temp__4657__auto___95952 = cljs.core.seq.call(null,seq__95821_95840);
if(temp__4657__auto___95952){
var seq__95821_95954__$1 = temp__4657__auto___95952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__95821_95954__$1)){
var c__36203__auto___95955 = cljs.core.chunk_first.call(null,seq__95821_95954__$1);
var G__95957 = cljs.core.chunk_rest.call(null,seq__95821_95954__$1);
var G__95958 = c__36203__auto___95955;
var G__95959 = cljs.core.count.call(null,c__36203__auto___95955);
var G__95960 = (0);
seq__95821_95840 = G__95957;
chunk__95822_95841 = G__95958;
count__95823_95842 = G__95959;
i__95824_95843 = G__95960;
continue;
} else {
var vec__95832_95961 = cljs.core.first.call(null,seq__95821_95954__$1);
var i_95962 = cljs.core.nth.call(null,vec__95832_95961,(0),null);
var vec__95833_95963 = cljs.core.nth.call(null,vec__95832_95961,(1),null);
var ii_95964 = cljs.core.nth.call(null,vec__95833_95963,(0),null);
var h_95965 = cljs.core.nth.call(null,vec__95833_95963,(1),null);
var temp__4655__auto___95969 = cljs.core.get.call(null,om,i_95962);
if(cljs.core.truth_(temp__4655__auto___95969)){
var oh_95972 = temp__4655__auto___95969;
if(cljs.core.not.call(null,int$)){
if((oh_95972 === h_95965)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_95964,cljs.core.nth.call(null,cs,i_95962));
} else {
var ncel_95977 = el.removeChild(cljs.core.nth.call(null,cs,i_95962));
hipo.interpreter.update_BANG_.call(null,ncel_95977,oh_95972,h_95965,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_95964,ncel_95977);
}
} else {
var o__36826__auto___95978 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_95965,new cljs.core.Keyword(null,"index","index",-1531685915),ii_95964], null));
if(!(o__36826__auto___95978 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___95978)){
o__36826__auto___95978.call(null,((function (seq__95821_95840,chunk__95822_95841,count__95823_95842,i__95824_95843,o__36826__auto___95978,oh_95972,temp__4655__auto___95969,vec__95832_95961,i_95962,vec__95833_95963,ii_95964,h_95965,seq__95821_95954__$1,temp__4657__auto___95952,om,nm,cs){
return (function (){
if((oh_95972 === h_95965)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_95964,cljs.core.nth.call(null,cs,i_95962));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_95962));
hipo.interpreter.update_BANG_.call(null,ncel,oh_95972,h_95965,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_95964,ncel);
}
});})(seq__95821_95840,chunk__95822_95841,count__95823_95842,i__95824_95843,o__36826__auto___95978,oh_95972,temp__4655__auto___95969,vec__95832_95961,i_95962,vec__95833_95963,ii_95964,h_95965,seq__95821_95954__$1,temp__4657__auto___95952,om,nm,cs))
);
} else {
if((oh_95972 === h_95965)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_95964,cljs.core.nth.call(null,cs,i_95962));
} else {
var ncel_96002 = el.removeChild(cljs.core.nth.call(null,cs,i_95962));
hipo.interpreter.update_BANG_.call(null,ncel_96002,oh_95972,h_95965,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_95964,ncel_96002);
}
}
} else {
}
}
} else {
var nel_96003 = hipo.interpreter.create_child.call(null,h_95965);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_95964,nel_96003);
} else {
var o__36826__auto___96004 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_96003,new cljs.core.Keyword(null,"index","index",-1531685915),ii_95964], null));
if(!(o__36826__auto___96004 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___96004)){
o__36826__auto___96004.call(null,((function (seq__95821_95840,chunk__95822_95841,count__95823_95842,i__95824_95843,o__36826__auto___96004,nel_96003,temp__4655__auto___95969,vec__95832_95961,i_95962,vec__95833_95963,ii_95964,h_95965,seq__95821_95954__$1,temp__4657__auto___95952,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_95964,nel_96003);
});})(seq__95821_95840,chunk__95822_95841,count__95823_95842,i__95824_95843,o__36826__auto___96004,nel_96003,temp__4655__auto___95969,vec__95832_95961,i_95962,vec__95833_95963,ii_95964,h_95965,seq__95821_95954__$1,temp__4657__auto___95952,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_95964,nel_96003);
}
} else {
}
}
}

var G__96008 = cljs.core.next.call(null,seq__95821_95954__$1);
var G__96009 = null;
var G__96010 = (0);
var G__96011 = (0);
seq__95821_95840 = G__96008;
chunk__95822_95841 = G__96009;
count__95823_95842 = G__96010;
i__95824_95843 = G__96011;
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
var o__36826__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__36826__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto__)){
return o__36826__auto__.call(null,((function (o__36826__auto__,d,om,nm,cs){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__36826__auto__,d,om,nm,cs))
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
var o__36826__auto___96058 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__36826__auto___96058 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___96058)){
o__36826__auto___96058.call(null,((function (o__36826__auto___96058,oc,nc,d){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__36826__auto___96058,oc,nc,d))
);
} else {
hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
}
} else {
}
}
} else {
}

var n__36306__auto___96065 = (function (){var x__35730__auto__ = oc;
var y__35731__auto__ = nc;
return ((x__35730__auto__ < y__35731__auto__) ? x__35730__auto__ : y__35731__auto__);
})();
var i_96066 = (0);
while(true){
if((i_96066 < n__36306__auto___96065)){
var ov_96067 = cljs.core.nth.call(null,och,i_96066);
var nv_96068 = cljs.core.nth.call(null,nch,i_96066);
if(!((ov_96067 === nv_96068))){
var temp__4655__auto___96069 = hipo.dom.child_at.call(null,el,i_96066);
if(cljs.core.truth_(temp__4655__auto___96069)){
var cel_96070 = temp__4655__auto___96069;
hipo.interpreter.update_BANG_.call(null,cel_96070,ov_96067,nv_96068,int$);
} else {
}
} else {
}

var G__96071 = (i_96066 + (1));
i_96066 = G__96071;
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
var o__36826__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
if(!(o__36826__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto__)){
return o__36826__auto__.call(null,((function (o__36826__auto__,h,oc,nc,d){
return (function (){
return hipo.interpreter.append_child_BANG_.call(null,el,h);
});})(o__36826__auto__,h,oc,nc,d))
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
var o__36826__auto___96073 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
if(!(o__36826__auto___96073 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___96073)){
o__36826__auto___96073.call(null,((function (o__36826__auto___96073,f,cs,oc,nc,d){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs);
});})(o__36826__auto___96073,f,cs,oc,nc,d))
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
var o__36826__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36826__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto__)){
return o__36826__auto__.call(null,((function (o__36826__auto__){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(o__36826__auto__))
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
var o__36826__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel], null));
if(!(o__36826__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto__)){
return o__36826__auto__.call(null,((function (o__36826__auto__,nel){
return (function (){
return hipo.dom.replace_BANG_.call(null,el,nel);
});})(o__36826__auto__,nel))
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
var o__36826__auto___96089 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-children","update-children",1871853561),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36826__auto___96089 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___96089)){
o__36826__auto___96089.call(null,((function (o__36826__auto___96089,om,nm,och,nch){
return (function (){
return hipo.interpreter.update_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),int$);
});})(o__36826__auto___96089,om,nm,och,nch))
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
if(cljs.core.truth_((function (){var or__35392__auto__ = cljs.core.vector_QMARK_.call(null,h);
if(or__35392__auto__){
return or__35392__auto__;
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
var o__36826__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
if(!(o__36826__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto__)){
return o__36826__auto__.call(null,((function (o__36826__auto__){
return (function (){
return hipo.dom.replace_text_BANG_.call(null,el,h);
});})(o__36826__auto__))
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
var G__96106__delegate = function (nh,p__96104){
var vec__96105 = p__96104;
var m = cljs.core.nth.call(null,vec__96105,(0),null);
var int$ = new cljs.core.Keyword(null,"interceptor","interceptor",1127739076).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
} else {
var o__36826__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36826__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto__)){
return o__36826__auto__.call(null,((function (o__36826__auto__,int$,vec__96105,m,a){
return (function (){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
});})(o__36826__auto__,int$,vec__96105,m,a))
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
var G__96106 = function (nh,var_args){
var p__96104 = null;
if (arguments.length > 1) {
var G__96107__i = 0, G__96107__a = new Array(arguments.length -  1);
while (G__96107__i < G__96107__a.length) {G__96107__a[G__96107__i] = arguments[G__96107__i + 1]; ++G__96107__i;}
  p__96104 = new cljs.core.IndexedSeq(G__96107__a,0);
} 
return G__96106__delegate.call(this,nh,p__96104);};
G__96106.cljs$lang$maxFixedArity = 1;
G__96106.cljs$lang$applyTo = (function (arglist__96108){
var nh = cljs.core.first(arglist__96108);
var p__96104 = cljs.core.rest(arglist__96108);
return G__96106__delegate(nh,p__96104);
});
G__96106.cljs$core$IFn$_invoke$arity$variadic = G__96106__delegate;
return G__96106;
})()
;})(a))
], null);
});
