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
var temp__4655__auto___84802 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___84802)){
var h_84803 = temp__4655__auto___84802;
hipo.interpreter.append_child_BANG_.call(null,el,h_84803);
} else {
}

var G__84804 = cljs.core.rest.call(null,v__$1);
v__$1 = G__84804;
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
var seq__84811_84817 = cljs.core.seq.call(null,attrs);
var chunk__84812_84818 = null;
var count__84813_84819 = (0);
var i__84814_84820 = (0);
while(true){
if((i__84814_84820 < count__84813_84819)){
var vec__84815_84821 = cljs.core._nth.call(null,chunk__84812_84818,i__84814_84820);
var k_84822 = cljs.core.nth.call(null,vec__84815_84821,(0),null);
var v_84823 = cljs.core.nth.call(null,vec__84815_84821,(1),null);
if(cljs.core.truth_(v_84823)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_84822),null,v_84823);
} else {
}

var G__84824 = seq__84811_84817;
var G__84825 = chunk__84812_84818;
var G__84826 = count__84813_84819;
var G__84827 = (i__84814_84820 + (1));
seq__84811_84817 = G__84824;
chunk__84812_84818 = G__84825;
count__84813_84819 = G__84826;
i__84814_84820 = G__84827;
continue;
} else {
var temp__4657__auto___84829 = cljs.core.seq.call(null,seq__84811_84817);
if(temp__4657__auto___84829){
var seq__84811_84830__$1 = temp__4657__auto___84829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84811_84830__$1)){
var c__36233__auto___84831 = cljs.core.chunk_first.call(null,seq__84811_84830__$1);
var G__84832 = cljs.core.chunk_rest.call(null,seq__84811_84830__$1);
var G__84833 = c__36233__auto___84831;
var G__84834 = cljs.core.count.call(null,c__36233__auto___84831);
var G__84835 = (0);
seq__84811_84817 = G__84832;
chunk__84812_84818 = G__84833;
count__84813_84819 = G__84834;
i__84814_84820 = G__84835;
continue;
} else {
var vec__84816_84836 = cljs.core.first.call(null,seq__84811_84830__$1);
var k_84837 = cljs.core.nth.call(null,vec__84816_84836,(0),null);
var v_84838 = cljs.core.nth.call(null,vec__84816_84836,(1),null);
if(cljs.core.truth_(v_84838)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_84837),null,v_84838);
} else {
}

var G__84839 = cljs.core.next.call(null,seq__84811_84830__$1);
var G__84840 = null;
var G__84841 = (0);
var G__84842 = (0);
seq__84811_84817 = G__84839;
chunk__84812_84818 = G__84840;
count__84813_84819 = G__84841;
i__84814_84820 = G__84842;
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
var G__84843 = pel;
el = G__84843;
continue;
} else {
(el["hipo-partially-compiled"] = true);

return el;
}
break;
}
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o){
if(cljs.core.truth_((function (){var or__35422__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
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
var seq__84863_84880 = cljs.core.seq.call(null,nm);
var chunk__84865_84881 = null;
var count__84866_84882 = (0);
var i__84867_84883 = (0);
while(true){
if((i__84867_84883 < count__84866_84882)){
var vec__84870_84885 = cljs.core._nth.call(null,chunk__84865_84881,i__84867_84883);
var nk_84886 = cljs.core.nth.call(null,vec__84870_84885,(0),null);
var nv_84887 = cljs.core.nth.call(null,vec__84870_84885,(1),null);
var ov_84888 = nk_84886.call(null,om);
var n_84889 = cljs.core.name.call(null,nk_84886);
if(!((ov_84888 === nv_84887))){
if(cljs.core.truth_(nv_84887)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_84889,ov_84888,nv_84887);
} else {
var o__36876__auto___84890 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_84889,new cljs.core.Keyword(null,"value","value",305978217),nv_84887], null));
if(!(o__36876__auto___84890 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___84890)){
o__36876__auto___84890.call(null,((function (seq__84863_84880,chunk__84865_84881,count__84866_84882,i__84867_84883,o__36876__auto___84890,ov_84888,n_84889,vec__84870_84885,nk_84886,nv_84887){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_84889,ov_84888,nv_84887);
});})(seq__84863_84880,chunk__84865_84881,count__84866_84882,i__84867_84883,o__36876__auto___84890,ov_84888,n_84889,vec__84870_84885,nk_84886,nv_84887))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_84889,ov_84888,nv_84887);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_84889,ov_84888,null);
} else {
var o__36876__auto___84891 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_84889], null));
if(!(o__36876__auto___84891 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___84891)){
o__36876__auto___84891.call(null,((function (seq__84863_84880,chunk__84865_84881,count__84866_84882,i__84867_84883,o__36876__auto___84891,ov_84888,n_84889,vec__84870_84885,nk_84886,nv_84887){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_84889,ov_84888,null);
});})(seq__84863_84880,chunk__84865_84881,count__84866_84882,i__84867_84883,o__36876__auto___84891,ov_84888,n_84889,vec__84870_84885,nk_84886,nv_84887))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_84889,ov_84888,null);
}
} else {
}
}
}
} else {
}

var G__84893 = seq__84863_84880;
var G__84894 = chunk__84865_84881;
var G__84895 = count__84866_84882;
var G__84896 = (i__84867_84883 + (1));
seq__84863_84880 = G__84893;
chunk__84865_84881 = G__84894;
count__84866_84882 = G__84895;
i__84867_84883 = G__84896;
continue;
} else {
var temp__4657__auto___84897 = cljs.core.seq.call(null,seq__84863_84880);
if(temp__4657__auto___84897){
var seq__84863_84898__$1 = temp__4657__auto___84897;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84863_84898__$1)){
var c__36233__auto___84899 = cljs.core.chunk_first.call(null,seq__84863_84898__$1);
var G__84900 = cljs.core.chunk_rest.call(null,seq__84863_84898__$1);
var G__84901 = c__36233__auto___84899;
var G__84902 = cljs.core.count.call(null,c__36233__auto___84899);
var G__84903 = (0);
seq__84863_84880 = G__84900;
chunk__84865_84881 = G__84901;
count__84866_84882 = G__84902;
i__84867_84883 = G__84903;
continue;
} else {
var vec__84873_84904 = cljs.core.first.call(null,seq__84863_84898__$1);
var nk_84905 = cljs.core.nth.call(null,vec__84873_84904,(0),null);
var nv_84906 = cljs.core.nth.call(null,vec__84873_84904,(1),null);
var ov_84907 = nk_84905.call(null,om);
var n_84908 = cljs.core.name.call(null,nk_84905);
if(!((ov_84907 === nv_84906))){
if(cljs.core.truth_(nv_84906)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_84908,ov_84907,nv_84906);
} else {
var o__36876__auto___84909 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_84908,new cljs.core.Keyword(null,"value","value",305978217),nv_84906], null));
if(!(o__36876__auto___84909 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___84909)){
o__36876__auto___84909.call(null,((function (seq__84863_84880,chunk__84865_84881,count__84866_84882,i__84867_84883,o__36876__auto___84909,ov_84907,n_84908,vec__84873_84904,nk_84905,nv_84906,seq__84863_84898__$1,temp__4657__auto___84897){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_84908,ov_84907,nv_84906);
});})(seq__84863_84880,chunk__84865_84881,count__84866_84882,i__84867_84883,o__36876__auto___84909,ov_84907,n_84908,vec__84873_84904,nk_84905,nv_84906,seq__84863_84898__$1,temp__4657__auto___84897))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_84908,ov_84907,nv_84906);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_84908,ov_84907,null);
} else {
var o__36876__auto___84910 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_84908], null));
if(!(o__36876__auto___84910 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___84910)){
o__36876__auto___84910.call(null,((function (seq__84863_84880,chunk__84865_84881,count__84866_84882,i__84867_84883,o__36876__auto___84910,ov_84907,n_84908,vec__84873_84904,nk_84905,nv_84906,seq__84863_84898__$1,temp__4657__auto___84897){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_84908,ov_84907,null);
});})(seq__84863_84880,chunk__84865_84881,count__84866_84882,i__84867_84883,o__36876__auto___84910,ov_84907,n_84908,vec__84873_84904,nk_84905,nv_84906,seq__84863_84898__$1,temp__4657__auto___84897))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_84908,ov_84907,null);
}
} else {
}
}
}
} else {
}

var G__84911 = cljs.core.next.call(null,seq__84863_84898__$1);
var G__84912 = null;
var G__84913 = (0);
var G__84914 = (0);
seq__84863_84880 = G__84911;
chunk__84865_84881 = G__84912;
count__84866_84882 = G__84913;
i__84867_84883 = G__84914;
continue;
}
} else {
}
}
break;
}

var seq__84874 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__84876 = null;
var count__84877 = (0);
var i__84878 = (0);
while(true){
if((i__84878 < count__84877)){
var k = cljs.core._nth.call(null,chunk__84876,i__84878);
var n_84915 = cljs.core.name.call(null,k);
var ov_84916 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_84915,ov_84916,null);
} else {
var o__36876__auto___84917 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_84915], null));
if(!(o__36876__auto___84917 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___84917)){
o__36876__auto___84917.call(null,((function (seq__84874,chunk__84876,count__84877,i__84878,o__36876__auto___84917,n_84915,ov_84916,k){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_84915,ov_84916,null);
});})(seq__84874,chunk__84876,count__84877,i__84878,o__36876__auto___84917,n_84915,ov_84916,k))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_84915,ov_84916,null);
}
} else {
}
}

var G__84918 = seq__84874;
var G__84919 = chunk__84876;
var G__84920 = count__84877;
var G__84921 = (i__84878 + (1));
seq__84874 = G__84918;
chunk__84876 = G__84919;
count__84877 = G__84920;
i__84878 = G__84921;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__84874);
if(temp__4657__auto__){
var seq__84874__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84874__$1)){
var c__36233__auto__ = cljs.core.chunk_first.call(null,seq__84874__$1);
var G__84922 = cljs.core.chunk_rest.call(null,seq__84874__$1);
var G__84923 = c__36233__auto__;
var G__84924 = cljs.core.count.call(null,c__36233__auto__);
var G__84925 = (0);
seq__84874 = G__84922;
chunk__84876 = G__84923;
count__84877 = G__84924;
i__84878 = G__84925;
continue;
} else {
var k = cljs.core.first.call(null,seq__84874__$1);
var n_84926 = cljs.core.name.call(null,k);
var ov_84927 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_84926,ov_84927,null);
} else {
var o__36876__auto___84928 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_84926], null));
if(!(o__36876__auto___84928 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___84928)){
o__36876__auto___84928.call(null,((function (seq__84874,chunk__84876,count__84877,i__84878,o__36876__auto___84928,n_84926,ov_84927,k,seq__84874__$1,temp__4657__auto__){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_84926,ov_84927,null);
});})(seq__84874,chunk__84876,count__84877,i__84878,o__36876__auto___84928,n_84926,ov_84927,k,seq__84874__$1,temp__4657__auto__))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_84926,ov_84927,null);
}
} else {
}
}

var G__84929 = cljs.core.next.call(null,seq__84874__$1);
var G__84930 = null;
var G__84931 = (0);
var G__84932 = (0);
seq__84874 = G__84929;
chunk__84876 = G__84930;
count__84877 = G__84931;
i__84878 = G__84932;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__36202__auto__ = (function hipo$interpreter$keyed_children__GT_map_$_iter__84944(s__84945){
return (new cljs.core.LazySeq(null,(function (){
var s__84945__$1 = s__84945;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__84945__$1);
if(temp__4657__auto__){
var s__84945__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__84945__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__84945__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__84947 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__84946 = (0);
while(true){
if((i__84946 < size__36201__auto__)){
var h = cljs.core._nth.call(null,c__36200__auto__,i__84946);
cljs.core.chunk_append.call(null,b__84947,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null));

var G__84960 = (i__84946 + (1));
i__84946 = G__84960;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84947),hipo$interpreter$keyed_children__GT_map_$_iter__84944.call(null,cljs.core.chunk_rest.call(null,s__84945__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84947),null);
}
} else {
var h = cljs.core.first.call(null,s__84945__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null),hipo$interpreter$keyed_children__GT_map_$_iter__84944.call(null,cljs.core.rest.call(null,s__84945__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36202__auto__.call(null,v);
})());
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__36202__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__84969(s__84970){
return (new cljs.core.LazySeq(null,(function (){
var s__84970__$1 = s__84970;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__84970__$1);
if(temp__4657__auto__){
var s__84970__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__84970__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__84970__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__84972 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__84971 = (0);
while(true){
if((i__84971 < size__36201__auto__)){
var ih = cljs.core._nth.call(null,c__36200__auto__,i__84971);
cljs.core.chunk_append.call(null,b__84972,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__84976 = (i__84971 + (1));
i__84971 = G__84976;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84972),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__84969.call(null,cljs.core.chunk_rest.call(null,s__84970__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84972),null);
}
} else {
var ih = cljs.core.first.call(null,s__84970__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__84969.call(null,cljs.core.rest.call(null,s__84970__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36202__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__36202__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__36202__auto__))
,v));
})());
});
hipo.interpreter.update_keyed_children_BANG_ = (function hipo$interpreter$update_keyed_children_BANG_(el,och,nch,int$){
var om = hipo.interpreter.keyed_children__GT_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__84995_85006 = cljs.core.seq.call(null,nm);
var chunk__84996_85007 = null;
var count__84997_85008 = (0);
var i__84998_85009 = (0);
while(true){
if((i__84998_85009 < count__84997_85008)){
var vec__84999_85010 = cljs.core._nth.call(null,chunk__84996_85007,i__84998_85009);
var i_85011 = cljs.core.nth.call(null,vec__84999_85010,(0),null);
var vec__85000_85012 = cljs.core.nth.call(null,vec__84999_85010,(1),null);
var ii_85013 = cljs.core.nth.call(null,vec__85000_85012,(0),null);
var h_85014 = cljs.core.nth.call(null,vec__85000_85012,(1),null);
var temp__4655__auto___85015 = cljs.core.get.call(null,om,i_85011);
if(cljs.core.truth_(temp__4655__auto___85015)){
var oh_85017 = temp__4655__auto___85015;
if(cljs.core.not.call(null,int$)){
if((oh_85017 === h_85014)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_85013,cljs.core.nth.call(null,cs,i_85011));
} else {
var ncel_85018 = el.removeChild(cljs.core.nth.call(null,cs,i_85011));
hipo.interpreter.update_BANG_.call(null,ncel_85018,oh_85017,h_85014,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_85013,ncel_85018);
}
} else {
var o__36876__auto___85019 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_85014,new cljs.core.Keyword(null,"index","index",-1531685915),ii_85013], null));
if(!(o__36876__auto___85019 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___85019)){
o__36876__auto___85019.call(null,((function (seq__84995_85006,chunk__84996_85007,count__84997_85008,i__84998_85009,o__36876__auto___85019,oh_85017,temp__4655__auto___85015,vec__84999_85010,i_85011,vec__85000_85012,ii_85013,h_85014,om,nm,cs){
return (function (){
if((oh_85017 === h_85014)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_85013,cljs.core.nth.call(null,cs,i_85011));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_85011));
hipo.interpreter.update_BANG_.call(null,ncel,oh_85017,h_85014,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_85013,ncel);
}
});})(seq__84995_85006,chunk__84996_85007,count__84997_85008,i__84998_85009,o__36876__auto___85019,oh_85017,temp__4655__auto___85015,vec__84999_85010,i_85011,vec__85000_85012,ii_85013,h_85014,om,nm,cs))
);
} else {
if((oh_85017 === h_85014)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_85013,cljs.core.nth.call(null,cs,i_85011));
} else {
var ncel_85028 = el.removeChild(cljs.core.nth.call(null,cs,i_85011));
hipo.interpreter.update_BANG_.call(null,ncel_85028,oh_85017,h_85014,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_85013,ncel_85028);
}
}
} else {
}
}
} else {
var nel_85034 = hipo.interpreter.create_child.call(null,h_85014);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_85013,nel_85034);
} else {
var o__36876__auto___85036 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_85034,new cljs.core.Keyword(null,"index","index",-1531685915),ii_85013], null));
if(!(o__36876__auto___85036 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___85036)){
o__36876__auto___85036.call(null,((function (seq__84995_85006,chunk__84996_85007,count__84997_85008,i__84998_85009,o__36876__auto___85036,nel_85034,temp__4655__auto___85015,vec__84999_85010,i_85011,vec__85000_85012,ii_85013,h_85014,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_85013,nel_85034);
});})(seq__84995_85006,chunk__84996_85007,count__84997_85008,i__84998_85009,o__36876__auto___85036,nel_85034,temp__4655__auto___85015,vec__84999_85010,i_85011,vec__85000_85012,ii_85013,h_85014,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_85013,nel_85034);
}
} else {
}
}
}

var G__85041 = seq__84995_85006;
var G__85042 = chunk__84996_85007;
var G__85043 = count__84997_85008;
var G__85044 = (i__84998_85009 + (1));
seq__84995_85006 = G__85041;
chunk__84996_85007 = G__85042;
count__84997_85008 = G__85043;
i__84998_85009 = G__85044;
continue;
} else {
var temp__4657__auto___85045 = cljs.core.seq.call(null,seq__84995_85006);
if(temp__4657__auto___85045){
var seq__84995_85046__$1 = temp__4657__auto___85045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84995_85046__$1)){
var c__36233__auto___85048 = cljs.core.chunk_first.call(null,seq__84995_85046__$1);
var G__85050 = cljs.core.chunk_rest.call(null,seq__84995_85046__$1);
var G__85051 = c__36233__auto___85048;
var G__85052 = cljs.core.count.call(null,c__36233__auto___85048);
var G__85053 = (0);
seq__84995_85006 = G__85050;
chunk__84996_85007 = G__85051;
count__84997_85008 = G__85052;
i__84998_85009 = G__85053;
continue;
} else {
var vec__85001_85055 = cljs.core.first.call(null,seq__84995_85046__$1);
var i_85056 = cljs.core.nth.call(null,vec__85001_85055,(0),null);
var vec__85002_85057 = cljs.core.nth.call(null,vec__85001_85055,(1),null);
var ii_85058 = cljs.core.nth.call(null,vec__85002_85057,(0),null);
var h_85059 = cljs.core.nth.call(null,vec__85002_85057,(1),null);
var temp__4655__auto___85061 = cljs.core.get.call(null,om,i_85056);
if(cljs.core.truth_(temp__4655__auto___85061)){
var oh_85062 = temp__4655__auto___85061;
if(cljs.core.not.call(null,int$)){
if((oh_85062 === h_85059)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_85058,cljs.core.nth.call(null,cs,i_85056));
} else {
var ncel_85063 = el.removeChild(cljs.core.nth.call(null,cs,i_85056));
hipo.interpreter.update_BANG_.call(null,ncel_85063,oh_85062,h_85059,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_85058,ncel_85063);
}
} else {
var o__36876__auto___85095 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_85059,new cljs.core.Keyword(null,"index","index",-1531685915),ii_85058], null));
if(!(o__36876__auto___85095 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___85095)){
o__36876__auto___85095.call(null,((function (seq__84995_85006,chunk__84996_85007,count__84997_85008,i__84998_85009,o__36876__auto___85095,oh_85062,temp__4655__auto___85061,vec__85001_85055,i_85056,vec__85002_85057,ii_85058,h_85059,seq__84995_85046__$1,temp__4657__auto___85045,om,nm,cs){
return (function (){
if((oh_85062 === h_85059)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_85058,cljs.core.nth.call(null,cs,i_85056));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_85056));
hipo.interpreter.update_BANG_.call(null,ncel,oh_85062,h_85059,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_85058,ncel);
}
});})(seq__84995_85006,chunk__84996_85007,count__84997_85008,i__84998_85009,o__36876__auto___85095,oh_85062,temp__4655__auto___85061,vec__85001_85055,i_85056,vec__85002_85057,ii_85058,h_85059,seq__84995_85046__$1,temp__4657__auto___85045,om,nm,cs))
);
} else {
if((oh_85062 === h_85059)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_85058,cljs.core.nth.call(null,cs,i_85056));
} else {
var ncel_85099 = el.removeChild(cljs.core.nth.call(null,cs,i_85056));
hipo.interpreter.update_BANG_.call(null,ncel_85099,oh_85062,h_85059,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_85058,ncel_85099);
}
}
} else {
}
}
} else {
var nel_85102 = hipo.interpreter.create_child.call(null,h_85059);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_85058,nel_85102);
} else {
var o__36876__auto___85104 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_85102,new cljs.core.Keyword(null,"index","index",-1531685915),ii_85058], null));
if(!(o__36876__auto___85104 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___85104)){
o__36876__auto___85104.call(null,((function (seq__84995_85006,chunk__84996_85007,count__84997_85008,i__84998_85009,o__36876__auto___85104,nel_85102,temp__4655__auto___85061,vec__85001_85055,i_85056,vec__85002_85057,ii_85058,h_85059,seq__84995_85046__$1,temp__4657__auto___85045,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_85058,nel_85102);
});})(seq__84995_85006,chunk__84996_85007,count__84997_85008,i__84998_85009,o__36876__auto___85104,nel_85102,temp__4655__auto___85061,vec__85001_85055,i_85056,vec__85002_85057,ii_85058,h_85059,seq__84995_85046__$1,temp__4657__auto___85045,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_85058,nel_85102);
}
} else {
}
}
}

var G__85111 = cljs.core.next.call(null,seq__84995_85046__$1);
var G__85112 = null;
var G__85113 = (0);
var G__85114 = (0);
seq__84995_85006 = G__85111;
chunk__84996_85007 = G__85112;
count__84997_85008 = G__85113;
i__84998_85009 = G__85114;
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
var o__36876__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__36876__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto__)){
return o__36876__auto__.call(null,((function (o__36876__auto__,d,om,nm,cs){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__36876__auto__,d,om,nm,cs))
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
var o__36876__auto___85178 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__36876__auto___85178 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___85178)){
o__36876__auto___85178.call(null,((function (o__36876__auto___85178,oc,nc,d){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__36876__auto___85178,oc,nc,d))
);
} else {
hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
}
} else {
}
}
} else {
}

var n__36336__auto___85183 = (function (){var x__35760__auto__ = oc;
var y__35761__auto__ = nc;
return ((x__35760__auto__ < y__35761__auto__) ? x__35760__auto__ : y__35761__auto__);
})();
var i_85184 = (0);
while(true){
if((i_85184 < n__36336__auto___85183)){
var ov_85185 = cljs.core.nth.call(null,och,i_85184);
var nv_85186 = cljs.core.nth.call(null,nch,i_85184);
if(!((ov_85185 === nv_85186))){
var temp__4655__auto___85188 = hipo.dom.child_at.call(null,el,i_85184);
if(cljs.core.truth_(temp__4655__auto___85188)){
var cel_85189 = temp__4655__auto___85188;
hipo.interpreter.update_BANG_.call(null,cel_85189,ov_85185,nv_85186,int$);
} else {
}
} else {
}

var G__85190 = (i_85184 + (1));
i_85184 = G__85190;
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
var o__36876__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
if(!(o__36876__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto__)){
return o__36876__auto__.call(null,((function (o__36876__auto__,h,oc,nc,d){
return (function (){
return hipo.interpreter.append_child_BANG_.call(null,el,h);
});})(o__36876__auto__,h,oc,nc,d))
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
var o__36876__auto___85200 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
if(!(o__36876__auto___85200 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___85200)){
o__36876__auto___85200.call(null,((function (o__36876__auto___85200,f,cs,oc,nc,d){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs);
});})(o__36876__auto___85200,f,cs,oc,nc,d))
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
var o__36876__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36876__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto__)){
return o__36876__auto__.call(null,((function (o__36876__auto__){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(o__36876__auto__))
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
var o__36876__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel], null));
if(!(o__36876__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto__)){
return o__36876__auto__.call(null,((function (o__36876__auto__,nel){
return (function (){
return hipo.dom.replace_BANG_.call(null,el,nel);
});})(o__36876__auto__,nel))
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
var o__36876__auto___85242 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-children","update-children",1871853561),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36876__auto___85242 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___85242)){
o__36876__auto___85242.call(null,((function (o__36876__auto___85242,om,nm,och,nch){
return (function (){
return hipo.interpreter.update_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),int$);
});})(o__36876__auto___85242,om,nm,och,nch))
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
if(cljs.core.truth_((function (){var or__35422__auto__ = cljs.core.vector_QMARK_.call(null,h);
if(or__35422__auto__){
return or__35422__auto__;
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
var o__36876__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
if(!(o__36876__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto__)){
return o__36876__auto__.call(null,((function (o__36876__auto__){
return (function (){
return hipo.dom.replace_text_BANG_.call(null,el,h);
});})(o__36876__auto__))
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
var G__85304__delegate = function (nh,p__85296){
var vec__85298 = p__85296;
var m = cljs.core.nth.call(null,vec__85298,(0),null);
var int$ = new cljs.core.Keyword(null,"interceptor","interceptor",1127739076).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
} else {
var o__36876__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36876__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto__)){
return o__36876__auto__.call(null,((function (o__36876__auto__,int$,vec__85298,m,a){
return (function (){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
});})(o__36876__auto__,int$,vec__85298,m,a))
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
var G__85304 = function (nh,var_args){
var p__85296 = null;
if (arguments.length > 1) {
var G__85313__i = 0, G__85313__a = new Array(arguments.length -  1);
while (G__85313__i < G__85313__a.length) {G__85313__a[G__85313__i] = arguments[G__85313__i + 1]; ++G__85313__i;}
  p__85296 = new cljs.core.IndexedSeq(G__85313__a,0);
} 
return G__85304__delegate.call(this,nh,p__85296);};
G__85304.cljs$lang$maxFixedArity = 1;
G__85304.cljs$lang$applyTo = (function (arglist__85315){
var nh = cljs.core.first(arglist__85315);
var p__85296 = cljs.core.rest(arglist__85315);
return G__85304__delegate(nh,p__85296);
});
G__85304.cljs$core$IFn$_invoke$arity$variadic = G__85304__delegate;
return G__85304;
})()
;})(a))
], null);
});
