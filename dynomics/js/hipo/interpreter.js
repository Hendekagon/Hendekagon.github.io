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
var temp__4655__auto___65866 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___65866)){
var h_65867 = temp__4655__auto___65866;
hipo.interpreter.append_child_BANG_.call(null,el,h_65867);
} else {
}

var G__65868 = cljs.core.rest.call(null,v__$1);
v__$1 = G__65868;
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
var seq__65875_65881 = cljs.core.seq.call(null,attrs);
var chunk__65876_65882 = null;
var count__65877_65883 = (0);
var i__65878_65884 = (0);
while(true){
if((i__65878_65884 < count__65877_65883)){
var vec__65879_65885 = cljs.core._nth.call(null,chunk__65876_65882,i__65878_65884);
var k_65886 = cljs.core.nth.call(null,vec__65879_65885,(0),null);
var v_65887 = cljs.core.nth.call(null,vec__65879_65885,(1),null);
if(cljs.core.truth_(v_65887)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_65886),null,v_65887);
} else {
}

var G__65888 = seq__65875_65881;
var G__65889 = chunk__65876_65882;
var G__65890 = count__65877_65883;
var G__65891 = (i__65878_65884 + (1));
seq__65875_65881 = G__65888;
chunk__65876_65882 = G__65889;
count__65877_65883 = G__65890;
i__65878_65884 = G__65891;
continue;
} else {
var temp__4657__auto___65892 = cljs.core.seq.call(null,seq__65875_65881);
if(temp__4657__auto___65892){
var seq__65875_65893__$1 = temp__4657__auto___65892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65875_65893__$1)){
var c__36233__auto___65894 = cljs.core.chunk_first.call(null,seq__65875_65893__$1);
var G__65895 = cljs.core.chunk_rest.call(null,seq__65875_65893__$1);
var G__65896 = c__36233__auto___65894;
var G__65897 = cljs.core.count.call(null,c__36233__auto___65894);
var G__65898 = (0);
seq__65875_65881 = G__65895;
chunk__65876_65882 = G__65896;
count__65877_65883 = G__65897;
i__65878_65884 = G__65898;
continue;
} else {
var vec__65880_65899 = cljs.core.first.call(null,seq__65875_65893__$1);
var k_65900 = cljs.core.nth.call(null,vec__65880_65899,(0),null);
var v_65901 = cljs.core.nth.call(null,vec__65880_65899,(1),null);
if(cljs.core.truth_(v_65901)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_65900),null,v_65901);
} else {
}

var G__65902 = cljs.core.next.call(null,seq__65875_65893__$1);
var G__65903 = null;
var G__65904 = (0);
var G__65905 = (0);
seq__65875_65881 = G__65902;
chunk__65876_65882 = G__65903;
count__65877_65883 = G__65904;
i__65878_65884 = G__65905;
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
var G__65906 = pel;
el = G__65906;
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
var seq__65921_65935 = cljs.core.seq.call(null,nm);
var chunk__65923_65936 = null;
var count__65924_65937 = (0);
var i__65925_65938 = (0);
while(true){
if((i__65925_65938 < count__65924_65937)){
var vec__65927_65939 = cljs.core._nth.call(null,chunk__65923_65936,i__65925_65938);
var nk_65940 = cljs.core.nth.call(null,vec__65927_65939,(0),null);
var nv_65941 = cljs.core.nth.call(null,vec__65927_65939,(1),null);
var ov_65942 = nk_65940.call(null,om);
var n_65943 = cljs.core.name.call(null,nk_65940);
if(!((ov_65942 === nv_65941))){
if(cljs.core.truth_(nv_65941)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_65943,ov_65942,nv_65941);
} else {
var o__36876__auto___65944 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_65943,new cljs.core.Keyword(null,"value","value",305978217),nv_65941], null));
if(!(o__36876__auto___65944 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___65944)){
o__36876__auto___65944.call(null,((function (seq__65921_65935,chunk__65923_65936,count__65924_65937,i__65925_65938,o__36876__auto___65944,ov_65942,n_65943,vec__65927_65939,nk_65940,nv_65941){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_65943,ov_65942,nv_65941);
});})(seq__65921_65935,chunk__65923_65936,count__65924_65937,i__65925_65938,o__36876__auto___65944,ov_65942,n_65943,vec__65927_65939,nk_65940,nv_65941))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_65943,ov_65942,nv_65941);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_65943,ov_65942,null);
} else {
var o__36876__auto___65945 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_65943], null));
if(!(o__36876__auto___65945 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___65945)){
o__36876__auto___65945.call(null,((function (seq__65921_65935,chunk__65923_65936,count__65924_65937,i__65925_65938,o__36876__auto___65945,ov_65942,n_65943,vec__65927_65939,nk_65940,nv_65941){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_65943,ov_65942,null);
});})(seq__65921_65935,chunk__65923_65936,count__65924_65937,i__65925_65938,o__36876__auto___65945,ov_65942,n_65943,vec__65927_65939,nk_65940,nv_65941))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_65943,ov_65942,null);
}
} else {
}
}
}
} else {
}

var G__65946 = seq__65921_65935;
var G__65947 = chunk__65923_65936;
var G__65948 = count__65924_65937;
var G__65949 = (i__65925_65938 + (1));
seq__65921_65935 = G__65946;
chunk__65923_65936 = G__65947;
count__65924_65937 = G__65948;
i__65925_65938 = G__65949;
continue;
} else {
var temp__4657__auto___65950 = cljs.core.seq.call(null,seq__65921_65935);
if(temp__4657__auto___65950){
var seq__65921_65951__$1 = temp__4657__auto___65950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65921_65951__$1)){
var c__36233__auto___65952 = cljs.core.chunk_first.call(null,seq__65921_65951__$1);
var G__65953 = cljs.core.chunk_rest.call(null,seq__65921_65951__$1);
var G__65954 = c__36233__auto___65952;
var G__65955 = cljs.core.count.call(null,c__36233__auto___65952);
var G__65956 = (0);
seq__65921_65935 = G__65953;
chunk__65923_65936 = G__65954;
count__65924_65937 = G__65955;
i__65925_65938 = G__65956;
continue;
} else {
var vec__65928_65957 = cljs.core.first.call(null,seq__65921_65951__$1);
var nk_65958 = cljs.core.nth.call(null,vec__65928_65957,(0),null);
var nv_65959 = cljs.core.nth.call(null,vec__65928_65957,(1),null);
var ov_65960 = nk_65958.call(null,om);
var n_65961 = cljs.core.name.call(null,nk_65958);
if(!((ov_65960 === nv_65959))){
if(cljs.core.truth_(nv_65959)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_65961,ov_65960,nv_65959);
} else {
var o__36876__auto___65962 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_65961,new cljs.core.Keyword(null,"value","value",305978217),nv_65959], null));
if(!(o__36876__auto___65962 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___65962)){
o__36876__auto___65962.call(null,((function (seq__65921_65935,chunk__65923_65936,count__65924_65937,i__65925_65938,o__36876__auto___65962,ov_65960,n_65961,vec__65928_65957,nk_65958,nv_65959,seq__65921_65951__$1,temp__4657__auto___65950){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_65961,ov_65960,nv_65959);
});})(seq__65921_65935,chunk__65923_65936,count__65924_65937,i__65925_65938,o__36876__auto___65962,ov_65960,n_65961,vec__65928_65957,nk_65958,nv_65959,seq__65921_65951__$1,temp__4657__auto___65950))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_65961,ov_65960,nv_65959);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_65961,ov_65960,null);
} else {
var o__36876__auto___65963 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_65961], null));
if(!(o__36876__auto___65963 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___65963)){
o__36876__auto___65963.call(null,((function (seq__65921_65935,chunk__65923_65936,count__65924_65937,i__65925_65938,o__36876__auto___65963,ov_65960,n_65961,vec__65928_65957,nk_65958,nv_65959,seq__65921_65951__$1,temp__4657__auto___65950){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_65961,ov_65960,null);
});})(seq__65921_65935,chunk__65923_65936,count__65924_65937,i__65925_65938,o__36876__auto___65963,ov_65960,n_65961,vec__65928_65957,nk_65958,nv_65959,seq__65921_65951__$1,temp__4657__auto___65950))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_65961,ov_65960,null);
}
} else {
}
}
}
} else {
}

var G__65964 = cljs.core.next.call(null,seq__65921_65951__$1);
var G__65965 = null;
var G__65966 = (0);
var G__65967 = (0);
seq__65921_65935 = G__65964;
chunk__65923_65936 = G__65965;
count__65924_65937 = G__65966;
i__65925_65938 = G__65967;
continue;
}
} else {
}
}
break;
}

var seq__65929 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__65931 = null;
var count__65932 = (0);
var i__65933 = (0);
while(true){
if((i__65933 < count__65932)){
var k = cljs.core._nth.call(null,chunk__65931,i__65933);
var n_65968 = cljs.core.name.call(null,k);
var ov_65969 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_65968,ov_65969,null);
} else {
var o__36876__auto___65970 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_65968], null));
if(!(o__36876__auto___65970 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___65970)){
o__36876__auto___65970.call(null,((function (seq__65929,chunk__65931,count__65932,i__65933,o__36876__auto___65970,n_65968,ov_65969,k){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_65968,ov_65969,null);
});})(seq__65929,chunk__65931,count__65932,i__65933,o__36876__auto___65970,n_65968,ov_65969,k))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_65968,ov_65969,null);
}
} else {
}
}

var G__65971 = seq__65929;
var G__65972 = chunk__65931;
var G__65973 = count__65932;
var G__65974 = (i__65933 + (1));
seq__65929 = G__65971;
chunk__65931 = G__65972;
count__65932 = G__65973;
i__65933 = G__65974;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__65929);
if(temp__4657__auto__){
var seq__65929__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65929__$1)){
var c__36233__auto__ = cljs.core.chunk_first.call(null,seq__65929__$1);
var G__65975 = cljs.core.chunk_rest.call(null,seq__65929__$1);
var G__65976 = c__36233__auto__;
var G__65977 = cljs.core.count.call(null,c__36233__auto__);
var G__65978 = (0);
seq__65929 = G__65975;
chunk__65931 = G__65976;
count__65932 = G__65977;
i__65933 = G__65978;
continue;
} else {
var k = cljs.core.first.call(null,seq__65929__$1);
var n_65979 = cljs.core.name.call(null,k);
var ov_65980 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_65979,ov_65980,null);
} else {
var o__36876__auto___65981 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_65979], null));
if(!(o__36876__auto___65981 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___65981)){
o__36876__auto___65981.call(null,((function (seq__65929,chunk__65931,count__65932,i__65933,o__36876__auto___65981,n_65979,ov_65980,k,seq__65929__$1,temp__4657__auto__){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_65979,ov_65980,null);
});})(seq__65929,chunk__65931,count__65932,i__65933,o__36876__auto___65981,n_65979,ov_65980,k,seq__65929__$1,temp__4657__auto__))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_65979,ov_65980,null);
}
} else {
}
}

var G__65982 = cljs.core.next.call(null,seq__65929__$1);
var G__65983 = null;
var G__65984 = (0);
var G__65985 = (0);
seq__65929 = G__65982;
chunk__65931 = G__65983;
count__65932 = G__65984;
i__65933 = G__65985;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__36202__auto__ = (function hipo$interpreter$keyed_children__GT_map_$_iter__65990(s__65991){
return (new cljs.core.LazySeq(null,(function (){
var s__65991__$1 = s__65991;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__65991__$1);
if(temp__4657__auto__){
var s__65991__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65991__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__65991__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__65993 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__65992 = (0);
while(true){
if((i__65992 < size__36201__auto__)){
var h = cljs.core._nth.call(null,c__36200__auto__,i__65992);
cljs.core.chunk_append.call(null,b__65993,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null));

var G__65994 = (i__65992 + (1));
i__65992 = G__65994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65993),hipo$interpreter$keyed_children__GT_map_$_iter__65990.call(null,cljs.core.chunk_rest.call(null,s__65991__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65993),null);
}
} else {
var h = cljs.core.first.call(null,s__65991__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null),hipo$interpreter$keyed_children__GT_map_$_iter__65990.call(null,cljs.core.rest.call(null,s__65991__$2)));
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__36202__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__65999(s__66000){
return (new cljs.core.LazySeq(null,(function (){
var s__66000__$1 = s__66000;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__66000__$1);
if(temp__4657__auto__){
var s__66000__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__66000__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__66000__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__66002 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__66001 = (0);
while(true){
if((i__66001 < size__36201__auto__)){
var ih = cljs.core._nth.call(null,c__36200__auto__,i__66001);
cljs.core.chunk_append.call(null,b__66002,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__66003 = (i__66001 + (1));
i__66001 = G__66003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66002),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__65999.call(null,cljs.core.chunk_rest.call(null,s__66000__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66002),null);
}
} else {
var ih = cljs.core.first.call(null,s__66000__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__65999.call(null,cljs.core.rest.call(null,s__66000__$2)));
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
var seq__66012_66020 = cljs.core.seq.call(null,nm);
var chunk__66013_66021 = null;
var count__66014_66022 = (0);
var i__66015_66023 = (0);
while(true){
if((i__66015_66023 < count__66014_66022)){
var vec__66016_66024 = cljs.core._nth.call(null,chunk__66013_66021,i__66015_66023);
var i_66025 = cljs.core.nth.call(null,vec__66016_66024,(0),null);
var vec__66017_66026 = cljs.core.nth.call(null,vec__66016_66024,(1),null);
var ii_66027 = cljs.core.nth.call(null,vec__66017_66026,(0),null);
var h_66028 = cljs.core.nth.call(null,vec__66017_66026,(1),null);
var temp__4655__auto___66029 = cljs.core.get.call(null,om,i_66025);
if(cljs.core.truth_(temp__4655__auto___66029)){
var oh_66030 = temp__4655__auto___66029;
if(cljs.core.not.call(null,int$)){
if((oh_66030 === h_66028)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_66027,cljs.core.nth.call(null,cs,i_66025));
} else {
var ncel_66031 = el.removeChild(cljs.core.nth.call(null,cs,i_66025));
hipo.interpreter.update_BANG_.call(null,ncel_66031,oh_66030,h_66028,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_66027,ncel_66031);
}
} else {
var o__36876__auto___66032 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_66028,new cljs.core.Keyword(null,"index","index",-1531685915),ii_66027], null));
if(!(o__36876__auto___66032 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___66032)){
o__36876__auto___66032.call(null,((function (seq__66012_66020,chunk__66013_66021,count__66014_66022,i__66015_66023,o__36876__auto___66032,oh_66030,temp__4655__auto___66029,vec__66016_66024,i_66025,vec__66017_66026,ii_66027,h_66028,om,nm,cs){
return (function (){
if((oh_66030 === h_66028)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_66027,cljs.core.nth.call(null,cs,i_66025));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_66025));
hipo.interpreter.update_BANG_.call(null,ncel,oh_66030,h_66028,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_66027,ncel);
}
});})(seq__66012_66020,chunk__66013_66021,count__66014_66022,i__66015_66023,o__36876__auto___66032,oh_66030,temp__4655__auto___66029,vec__66016_66024,i_66025,vec__66017_66026,ii_66027,h_66028,om,nm,cs))
);
} else {
if((oh_66030 === h_66028)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_66027,cljs.core.nth.call(null,cs,i_66025));
} else {
var ncel_66033 = el.removeChild(cljs.core.nth.call(null,cs,i_66025));
hipo.interpreter.update_BANG_.call(null,ncel_66033,oh_66030,h_66028,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_66027,ncel_66033);
}
}
} else {
}
}
} else {
var nel_66034 = hipo.interpreter.create_child.call(null,h_66028);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_66027,nel_66034);
} else {
var o__36876__auto___66035 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_66034,new cljs.core.Keyword(null,"index","index",-1531685915),ii_66027], null));
if(!(o__36876__auto___66035 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___66035)){
o__36876__auto___66035.call(null,((function (seq__66012_66020,chunk__66013_66021,count__66014_66022,i__66015_66023,o__36876__auto___66035,nel_66034,temp__4655__auto___66029,vec__66016_66024,i_66025,vec__66017_66026,ii_66027,h_66028,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_66027,nel_66034);
});})(seq__66012_66020,chunk__66013_66021,count__66014_66022,i__66015_66023,o__36876__auto___66035,nel_66034,temp__4655__auto___66029,vec__66016_66024,i_66025,vec__66017_66026,ii_66027,h_66028,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_66027,nel_66034);
}
} else {
}
}
}

var G__66036 = seq__66012_66020;
var G__66037 = chunk__66013_66021;
var G__66038 = count__66014_66022;
var G__66039 = (i__66015_66023 + (1));
seq__66012_66020 = G__66036;
chunk__66013_66021 = G__66037;
count__66014_66022 = G__66038;
i__66015_66023 = G__66039;
continue;
} else {
var temp__4657__auto___66040 = cljs.core.seq.call(null,seq__66012_66020);
if(temp__4657__auto___66040){
var seq__66012_66041__$1 = temp__4657__auto___66040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66012_66041__$1)){
var c__36233__auto___66042 = cljs.core.chunk_first.call(null,seq__66012_66041__$1);
var G__66043 = cljs.core.chunk_rest.call(null,seq__66012_66041__$1);
var G__66044 = c__36233__auto___66042;
var G__66045 = cljs.core.count.call(null,c__36233__auto___66042);
var G__66046 = (0);
seq__66012_66020 = G__66043;
chunk__66013_66021 = G__66044;
count__66014_66022 = G__66045;
i__66015_66023 = G__66046;
continue;
} else {
var vec__66018_66047 = cljs.core.first.call(null,seq__66012_66041__$1);
var i_66048 = cljs.core.nth.call(null,vec__66018_66047,(0),null);
var vec__66019_66049 = cljs.core.nth.call(null,vec__66018_66047,(1),null);
var ii_66050 = cljs.core.nth.call(null,vec__66019_66049,(0),null);
var h_66051 = cljs.core.nth.call(null,vec__66019_66049,(1),null);
var temp__4655__auto___66052 = cljs.core.get.call(null,om,i_66048);
if(cljs.core.truth_(temp__4655__auto___66052)){
var oh_66053 = temp__4655__auto___66052;
if(cljs.core.not.call(null,int$)){
if((oh_66053 === h_66051)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_66050,cljs.core.nth.call(null,cs,i_66048));
} else {
var ncel_66054 = el.removeChild(cljs.core.nth.call(null,cs,i_66048));
hipo.interpreter.update_BANG_.call(null,ncel_66054,oh_66053,h_66051,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_66050,ncel_66054);
}
} else {
var o__36876__auto___66055 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_66051,new cljs.core.Keyword(null,"index","index",-1531685915),ii_66050], null));
if(!(o__36876__auto___66055 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___66055)){
o__36876__auto___66055.call(null,((function (seq__66012_66020,chunk__66013_66021,count__66014_66022,i__66015_66023,o__36876__auto___66055,oh_66053,temp__4655__auto___66052,vec__66018_66047,i_66048,vec__66019_66049,ii_66050,h_66051,seq__66012_66041__$1,temp__4657__auto___66040,om,nm,cs){
return (function (){
if((oh_66053 === h_66051)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_66050,cljs.core.nth.call(null,cs,i_66048));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_66048));
hipo.interpreter.update_BANG_.call(null,ncel,oh_66053,h_66051,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_66050,ncel);
}
});})(seq__66012_66020,chunk__66013_66021,count__66014_66022,i__66015_66023,o__36876__auto___66055,oh_66053,temp__4655__auto___66052,vec__66018_66047,i_66048,vec__66019_66049,ii_66050,h_66051,seq__66012_66041__$1,temp__4657__auto___66040,om,nm,cs))
);
} else {
if((oh_66053 === h_66051)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_66050,cljs.core.nth.call(null,cs,i_66048));
} else {
var ncel_66056 = el.removeChild(cljs.core.nth.call(null,cs,i_66048));
hipo.interpreter.update_BANG_.call(null,ncel_66056,oh_66053,h_66051,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_66050,ncel_66056);
}
}
} else {
}
}
} else {
var nel_66057 = hipo.interpreter.create_child.call(null,h_66051);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_66050,nel_66057);
} else {
var o__36876__auto___66058 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_66057,new cljs.core.Keyword(null,"index","index",-1531685915),ii_66050], null));
if(!(o__36876__auto___66058 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___66058)){
o__36876__auto___66058.call(null,((function (seq__66012_66020,chunk__66013_66021,count__66014_66022,i__66015_66023,o__36876__auto___66058,nel_66057,temp__4655__auto___66052,vec__66018_66047,i_66048,vec__66019_66049,ii_66050,h_66051,seq__66012_66041__$1,temp__4657__auto___66040,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_66050,nel_66057);
});})(seq__66012_66020,chunk__66013_66021,count__66014_66022,i__66015_66023,o__36876__auto___66058,nel_66057,temp__4655__auto___66052,vec__66018_66047,i_66048,vec__66019_66049,ii_66050,h_66051,seq__66012_66041__$1,temp__4657__auto___66040,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_66050,nel_66057);
}
} else {
}
}
}

var G__66059 = cljs.core.next.call(null,seq__66012_66041__$1);
var G__66060 = null;
var G__66061 = (0);
var G__66062 = (0);
seq__66012_66020 = G__66059;
chunk__66013_66021 = G__66060;
count__66014_66022 = G__66061;
i__66015_66023 = G__66062;
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
var o__36876__auto___66063 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__36876__auto___66063 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___66063)){
o__36876__auto___66063.call(null,((function (o__36876__auto___66063,oc,nc,d){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__36876__auto___66063,oc,nc,d))
);
} else {
hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
}
} else {
}
}
} else {
}

var n__36336__auto___66064 = (function (){var x__35760__auto__ = oc;
var y__35761__auto__ = nc;
return ((x__35760__auto__ < y__35761__auto__) ? x__35760__auto__ : y__35761__auto__);
})();
var i_66065 = (0);
while(true){
if((i_66065 < n__36336__auto___66064)){
var ov_66066 = cljs.core.nth.call(null,och,i_66065);
var nv_66067 = cljs.core.nth.call(null,nch,i_66065);
if(!((ov_66066 === nv_66067))){
var temp__4655__auto___66068 = hipo.dom.child_at.call(null,el,i_66065);
if(cljs.core.truth_(temp__4655__auto___66068)){
var cel_66069 = temp__4655__auto___66068;
hipo.interpreter.update_BANG_.call(null,cel_66069,ov_66066,nv_66067,int$);
} else {
}
} else {
}

var G__66070 = (i_66065 + (1));
i_66065 = G__66070;
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
var o__36876__auto___66071 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
if(!(o__36876__auto___66071 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___66071)){
o__36876__auto___66071.call(null,((function (o__36876__auto___66071,f,cs,oc,nc,d){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs);
});})(o__36876__auto___66071,f,cs,oc,nc,d))
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
var o__36876__auto___66072 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-children","update-children",1871853561),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36876__auto___66072 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto___66072)){
o__36876__auto___66072.call(null,((function (o__36876__auto___66072,om,nm,och,nch){
return (function (){
return hipo.interpreter.update_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),int$);
});})(o__36876__auto___66072,om,nm,och,nch))
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
var G__66077__delegate = function (nh,p__66075){
var vec__66076 = p__66075;
var m = cljs.core.nth.call(null,vec__66076,(0),null);
var int$ = new cljs.core.Keyword(null,"interceptor","interceptor",1127739076).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
} else {
var o__36876__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36876__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36876__auto__)){
return o__36876__auto__.call(null,((function (o__36876__auto__,int$,vec__66076,m,a){
return (function (){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
});})(o__36876__auto__,int$,vec__66076,m,a))
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
var G__66077 = function (nh,var_args){
var p__66075 = null;
if (arguments.length > 1) {
var G__66078__i = 0, G__66078__a = new Array(arguments.length -  1);
while (G__66078__i < G__66078__a.length) {G__66078__a[G__66078__i] = arguments[G__66078__i + 1]; ++G__66078__i;}
  p__66075 = new cljs.core.IndexedSeq(G__66078__a,0);
} 
return G__66077__delegate.call(this,nh,p__66075);};
G__66077.cljs$lang$maxFixedArity = 1;
G__66077.cljs$lang$applyTo = (function (arglist__66079){
var nh = cljs.core.first(arglist__66079);
var p__66075 = cljs.core.rest(arglist__66079);
return G__66077__delegate(nh,p__66075);
});
G__66077.cljs$core$IFn$_invoke$arity$variadic = G__66077__delegate;
return G__66077;
})()
;})(a))
], null);
});

//# sourceMappingURL=interpreter.js.map?rel=1459533427069