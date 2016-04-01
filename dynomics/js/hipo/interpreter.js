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
var temp__4655__auto___85004 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___85004)){
var h_85005 = temp__4655__auto___85004;
hipo.interpreter.append_child_BANG_.call(null,el,h_85005);
} else {
}

var G__85006 = cljs.core.rest.call(null,v__$1);
v__$1 = G__85006;
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
var seq__85015_85022 = cljs.core.seq.call(null,attrs);
var chunk__85016_85023 = null;
var count__85017_85024 = (0);
var i__85018_85025 = (0);
while(true){
if((i__85018_85025 < count__85017_85024)){
var vec__85019_85026 = cljs.core._nth.call(null,chunk__85016_85023,i__85018_85025);
var k_85027 = cljs.core.nth.call(null,vec__85019_85026,(0),null);
var v_85028 = cljs.core.nth.call(null,vec__85019_85026,(1),null);
if(cljs.core.truth_(v_85028)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_85027),null,v_85028);
} else {
}

var G__85029 = seq__85015_85022;
var G__85030 = chunk__85016_85023;
var G__85031 = count__85017_85024;
var G__85032 = (i__85018_85025 + (1));
seq__85015_85022 = G__85029;
chunk__85016_85023 = G__85030;
count__85017_85024 = G__85031;
i__85018_85025 = G__85032;
continue;
} else {
var temp__4657__auto___85033 = cljs.core.seq.call(null,seq__85015_85022);
if(temp__4657__auto___85033){
var seq__85015_85035__$1 = temp__4657__auto___85033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85015_85035__$1)){
var c__26638__auto___85037 = cljs.core.chunk_first.call(null,seq__85015_85035__$1);
var G__85039 = cljs.core.chunk_rest.call(null,seq__85015_85035__$1);
var G__85040 = c__26638__auto___85037;
var G__85041 = cljs.core.count.call(null,c__26638__auto___85037);
var G__85042 = (0);
seq__85015_85022 = G__85039;
chunk__85016_85023 = G__85040;
count__85017_85024 = G__85041;
i__85018_85025 = G__85042;
continue;
} else {
var vec__85020_85043 = cljs.core.first.call(null,seq__85015_85035__$1);
var k_85044 = cljs.core.nth.call(null,vec__85020_85043,(0),null);
var v_85045 = cljs.core.nth.call(null,vec__85020_85043,(1),null);
if(cljs.core.truth_(v_85045)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_85044),null,v_85045);
} else {
}

var G__85046 = cljs.core.next.call(null,seq__85015_85035__$1);
var G__85047 = null;
var G__85048 = (0);
var G__85049 = (0);
seq__85015_85022 = G__85046;
chunk__85016_85023 = G__85047;
count__85017_85024 = G__85048;
i__85018_85025 = G__85049;
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
var G__85051 = pel;
el = G__85051;
continue;
} else {
(el["hipo-partially-compiled"] = true);

return el;
}
break;
}
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o){
if(cljs.core.truth_((function (){var or__25827__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
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
var seq__85069_85084 = cljs.core.seq.call(null,nm);
var chunk__85071_85085 = null;
var count__85072_85086 = (0);
var i__85073_85087 = (0);
while(true){
if((i__85073_85087 < count__85072_85086)){
var vec__85075_85088 = cljs.core._nth.call(null,chunk__85071_85085,i__85073_85087);
var nk_85089 = cljs.core.nth.call(null,vec__85075_85088,(0),null);
var nv_85090 = cljs.core.nth.call(null,vec__85075_85088,(1),null);
var ov_85091 = nk_85089.call(null,om);
var n_85092 = cljs.core.name.call(null,nk_85089);
if(!((ov_85091 === nv_85090))){
if(cljs.core.truth_(nv_85090)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_85092,ov_85091,nv_85090);
} else {
var o__27939__auto___85093 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_85092,new cljs.core.Keyword(null,"value","value",305978217),nv_85090], null));
if(!(o__27939__auto___85093 === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto___85093)){
o__27939__auto___85093.call(null,((function (seq__85069_85084,chunk__85071_85085,count__85072_85086,i__85073_85087,o__27939__auto___85093,ov_85091,n_85092,vec__85075_85088,nk_85089,nv_85090){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_85092,ov_85091,nv_85090);
});})(seq__85069_85084,chunk__85071_85085,count__85072_85086,i__85073_85087,o__27939__auto___85093,ov_85091,n_85092,vec__85075_85088,nk_85089,nv_85090))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_85092,ov_85091,nv_85090);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_85092,ov_85091,null);
} else {
var o__27939__auto___85094 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_85092], null));
if(!(o__27939__auto___85094 === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto___85094)){
o__27939__auto___85094.call(null,((function (seq__85069_85084,chunk__85071_85085,count__85072_85086,i__85073_85087,o__27939__auto___85094,ov_85091,n_85092,vec__85075_85088,nk_85089,nv_85090){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_85092,ov_85091,null);
});})(seq__85069_85084,chunk__85071_85085,count__85072_85086,i__85073_85087,o__27939__auto___85094,ov_85091,n_85092,vec__85075_85088,nk_85089,nv_85090))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_85092,ov_85091,null);
}
} else {
}
}
}
} else {
}

var G__85096 = seq__85069_85084;
var G__85097 = chunk__85071_85085;
var G__85098 = count__85072_85086;
var G__85099 = (i__85073_85087 + (1));
seq__85069_85084 = G__85096;
chunk__85071_85085 = G__85097;
count__85072_85086 = G__85098;
i__85073_85087 = G__85099;
continue;
} else {
var temp__4657__auto___85100 = cljs.core.seq.call(null,seq__85069_85084);
if(temp__4657__auto___85100){
var seq__85069_85101__$1 = temp__4657__auto___85100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85069_85101__$1)){
var c__26638__auto___85103 = cljs.core.chunk_first.call(null,seq__85069_85101__$1);
var G__85104 = cljs.core.chunk_rest.call(null,seq__85069_85101__$1);
var G__85105 = c__26638__auto___85103;
var G__85106 = cljs.core.count.call(null,c__26638__auto___85103);
var G__85107 = (0);
seq__85069_85084 = G__85104;
chunk__85071_85085 = G__85105;
count__85072_85086 = G__85106;
i__85073_85087 = G__85107;
continue;
} else {
var vec__85076_85108 = cljs.core.first.call(null,seq__85069_85101__$1);
var nk_85109 = cljs.core.nth.call(null,vec__85076_85108,(0),null);
var nv_85110 = cljs.core.nth.call(null,vec__85076_85108,(1),null);
var ov_85111 = nk_85109.call(null,om);
var n_85112 = cljs.core.name.call(null,nk_85109);
if(!((ov_85111 === nv_85110))){
if(cljs.core.truth_(nv_85110)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_85112,ov_85111,nv_85110);
} else {
var o__27939__auto___85113 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_85112,new cljs.core.Keyword(null,"value","value",305978217),nv_85110], null));
if(!(o__27939__auto___85113 === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto___85113)){
o__27939__auto___85113.call(null,((function (seq__85069_85084,chunk__85071_85085,count__85072_85086,i__85073_85087,o__27939__auto___85113,ov_85111,n_85112,vec__85076_85108,nk_85109,nv_85110,seq__85069_85101__$1,temp__4657__auto___85100){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_85112,ov_85111,nv_85110);
});})(seq__85069_85084,chunk__85071_85085,count__85072_85086,i__85073_85087,o__27939__auto___85113,ov_85111,n_85112,vec__85076_85108,nk_85109,nv_85110,seq__85069_85101__$1,temp__4657__auto___85100))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_85112,ov_85111,nv_85110);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_85112,ov_85111,null);
} else {
var o__27939__auto___85114 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_85112], null));
if(!(o__27939__auto___85114 === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto___85114)){
o__27939__auto___85114.call(null,((function (seq__85069_85084,chunk__85071_85085,count__85072_85086,i__85073_85087,o__27939__auto___85114,ov_85111,n_85112,vec__85076_85108,nk_85109,nv_85110,seq__85069_85101__$1,temp__4657__auto___85100){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_85112,ov_85111,null);
});})(seq__85069_85084,chunk__85071_85085,count__85072_85086,i__85073_85087,o__27939__auto___85114,ov_85111,n_85112,vec__85076_85108,nk_85109,nv_85110,seq__85069_85101__$1,temp__4657__auto___85100))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_85112,ov_85111,null);
}
} else {
}
}
}
} else {
}

var G__85115 = cljs.core.next.call(null,seq__85069_85101__$1);
var G__85116 = null;
var G__85117 = (0);
var G__85118 = (0);
seq__85069_85084 = G__85115;
chunk__85071_85085 = G__85116;
count__85072_85086 = G__85117;
i__85073_85087 = G__85118;
continue;
}
} else {
}
}
break;
}

var seq__85078 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__85080 = null;
var count__85081 = (0);
var i__85082 = (0);
while(true){
if((i__85082 < count__85081)){
var k = cljs.core._nth.call(null,chunk__85080,i__85082);
var n_85119 = cljs.core.name.call(null,k);
var ov_85120 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_85119,ov_85120,null);
} else {
var o__27939__auto___85121 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_85119], null));
if(!(o__27939__auto___85121 === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto___85121)){
o__27939__auto___85121.call(null,((function (seq__85078,chunk__85080,count__85081,i__85082,o__27939__auto___85121,n_85119,ov_85120,k){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_85119,ov_85120,null);
});})(seq__85078,chunk__85080,count__85081,i__85082,o__27939__auto___85121,n_85119,ov_85120,k))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_85119,ov_85120,null);
}
} else {
}
}

var G__85122 = seq__85078;
var G__85123 = chunk__85080;
var G__85124 = count__85081;
var G__85125 = (i__85082 + (1));
seq__85078 = G__85122;
chunk__85080 = G__85123;
count__85081 = G__85124;
i__85082 = G__85125;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__85078);
if(temp__4657__auto__){
var seq__85078__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85078__$1)){
var c__26638__auto__ = cljs.core.chunk_first.call(null,seq__85078__$1);
var G__85126 = cljs.core.chunk_rest.call(null,seq__85078__$1);
var G__85127 = c__26638__auto__;
var G__85128 = cljs.core.count.call(null,c__26638__auto__);
var G__85129 = (0);
seq__85078 = G__85126;
chunk__85080 = G__85127;
count__85081 = G__85128;
i__85082 = G__85129;
continue;
} else {
var k = cljs.core.first.call(null,seq__85078__$1);
var n_85130 = cljs.core.name.call(null,k);
var ov_85131 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_85130,ov_85131,null);
} else {
var o__27939__auto___85132 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_85130], null));
if(!(o__27939__auto___85132 === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto___85132)){
o__27939__auto___85132.call(null,((function (seq__85078,chunk__85080,count__85081,i__85082,o__27939__auto___85132,n_85130,ov_85131,k,seq__85078__$1,temp__4657__auto__){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_85130,ov_85131,null);
});})(seq__85078,chunk__85080,count__85081,i__85082,o__27939__auto___85132,n_85130,ov_85131,k,seq__85078__$1,temp__4657__auto__))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_85130,ov_85131,null);
}
} else {
}
}

var G__85140 = cljs.core.next.call(null,seq__85078__$1);
var G__85141 = null;
var G__85142 = (0);
var G__85143 = (0);
seq__85078 = G__85140;
chunk__85080 = G__85141;
count__85081 = G__85142;
i__85082 = G__85143;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__26607__auto__ = (function hipo$interpreter$keyed_children__GT_map_$_iter__85151(s__85152){
return (new cljs.core.LazySeq(null,(function (){
var s__85152__$1 = s__85152;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__85152__$1);
if(temp__4657__auto__){
var s__85152__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85152__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__85152__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__85154 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__85153 = (0);
while(true){
if((i__85153 < size__26606__auto__)){
var h = cljs.core._nth.call(null,c__26605__auto__,i__85153);
cljs.core.chunk_append.call(null,b__85154,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null));

var G__85157 = (i__85153 + (1));
i__85153 = G__85157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85154),hipo$interpreter$keyed_children__GT_map_$_iter__85151.call(null,cljs.core.chunk_rest.call(null,s__85152__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85154),null);
}
} else {
var h = cljs.core.first.call(null,s__85152__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null),hipo$interpreter$keyed_children__GT_map_$_iter__85151.call(null,cljs.core.rest.call(null,s__85152__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26607__auto__.call(null,v);
})());
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__26607__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__85176(s__85177){
return (new cljs.core.LazySeq(null,(function (){
var s__85177__$1 = s__85177;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__85177__$1);
if(temp__4657__auto__){
var s__85177__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85177__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__85177__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__85179 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__85178 = (0);
while(true){
if((i__85178 < size__26606__auto__)){
var ih = cljs.core._nth.call(null,c__26605__auto__,i__85178);
cljs.core.chunk_append.call(null,b__85179,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__85189 = (i__85178 + (1));
i__85178 = G__85189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85179),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__85176.call(null,cljs.core.chunk_rest.call(null,s__85177__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85179),null);
}
} else {
var ih = cljs.core.first.call(null,s__85177__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__85176.call(null,cljs.core.rest.call(null,s__85177__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26607__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__26607__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__26607__auto__))
,v));
})());
});
hipo.interpreter.update_keyed_children_BANG_ = (function hipo$interpreter$update_keyed_children_BANG_(el,och,nch,int$){
var om = hipo.interpreter.keyed_children__GT_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__85207_85227 = cljs.core.seq.call(null,nm);
var chunk__85208_85228 = null;
var count__85209_85229 = (0);
var i__85210_85230 = (0);
while(true){
if((i__85210_85230 < count__85209_85229)){
var vec__85215_85231 = cljs.core._nth.call(null,chunk__85208_85228,i__85210_85230);
var i_85232 = cljs.core.nth.call(null,vec__85215_85231,(0),null);
var vec__85216_85233 = cljs.core.nth.call(null,vec__85215_85231,(1),null);
var ii_85234 = cljs.core.nth.call(null,vec__85216_85233,(0),null);
var h_85235 = cljs.core.nth.call(null,vec__85216_85233,(1),null);
var temp__4655__auto___85236 = cljs.core.get.call(null,om,i_85232);
if(cljs.core.truth_(temp__4655__auto___85236)){
var oh_85237 = temp__4655__auto___85236;
if(cljs.core.not.call(null,int$)){
if((oh_85237 === h_85235)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_85234,cljs.core.nth.call(null,cs,i_85232));
} else {
var ncel_85238 = el.removeChild(cljs.core.nth.call(null,cs,i_85232));
hipo.interpreter.update_BANG_.call(null,ncel_85238,oh_85237,h_85235,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_85234,ncel_85238);
}
} else {
var o__27939__auto___85239 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_85235,new cljs.core.Keyword(null,"index","index",-1531685915),ii_85234], null));
if(!(o__27939__auto___85239 === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto___85239)){
o__27939__auto___85239.call(null,((function (seq__85207_85227,chunk__85208_85228,count__85209_85229,i__85210_85230,o__27939__auto___85239,oh_85237,temp__4655__auto___85236,vec__85215_85231,i_85232,vec__85216_85233,ii_85234,h_85235,om,nm,cs){
return (function (){
if((oh_85237 === h_85235)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_85234,cljs.core.nth.call(null,cs,i_85232));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_85232));
hipo.interpreter.update_BANG_.call(null,ncel,oh_85237,h_85235,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_85234,ncel);
}
});})(seq__85207_85227,chunk__85208_85228,count__85209_85229,i__85210_85230,o__27939__auto___85239,oh_85237,temp__4655__auto___85236,vec__85215_85231,i_85232,vec__85216_85233,ii_85234,h_85235,om,nm,cs))
);
} else {
if((oh_85237 === h_85235)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_85234,cljs.core.nth.call(null,cs,i_85232));
} else {
var ncel_85246 = el.removeChild(cljs.core.nth.call(null,cs,i_85232));
hipo.interpreter.update_BANG_.call(null,ncel_85246,oh_85237,h_85235,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_85234,ncel_85246);
}
}
} else {
}
}
} else {
var nel_85249 = hipo.interpreter.create_child.call(null,h_85235);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_85234,nel_85249);
} else {
var o__27939__auto___85250 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_85249,new cljs.core.Keyword(null,"index","index",-1531685915),ii_85234], null));
if(!(o__27939__auto___85250 === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto___85250)){
o__27939__auto___85250.call(null,((function (seq__85207_85227,chunk__85208_85228,count__85209_85229,i__85210_85230,o__27939__auto___85250,nel_85249,temp__4655__auto___85236,vec__85215_85231,i_85232,vec__85216_85233,ii_85234,h_85235,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_85234,nel_85249);
});})(seq__85207_85227,chunk__85208_85228,count__85209_85229,i__85210_85230,o__27939__auto___85250,nel_85249,temp__4655__auto___85236,vec__85215_85231,i_85232,vec__85216_85233,ii_85234,h_85235,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_85234,nel_85249);
}
} else {
}
}
}

var G__85255 = seq__85207_85227;
var G__85256 = chunk__85208_85228;
var G__85257 = count__85209_85229;
var G__85258 = (i__85210_85230 + (1));
seq__85207_85227 = G__85255;
chunk__85208_85228 = G__85256;
count__85209_85229 = G__85257;
i__85210_85230 = G__85258;
continue;
} else {
var temp__4657__auto___85268 = cljs.core.seq.call(null,seq__85207_85227);
if(temp__4657__auto___85268){
var seq__85207_85269__$1 = temp__4657__auto___85268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85207_85269__$1)){
var c__26638__auto___85270 = cljs.core.chunk_first.call(null,seq__85207_85269__$1);
var G__85277 = cljs.core.chunk_rest.call(null,seq__85207_85269__$1);
var G__85278 = c__26638__auto___85270;
var G__85279 = cljs.core.count.call(null,c__26638__auto___85270);
var G__85280 = (0);
seq__85207_85227 = G__85277;
chunk__85208_85228 = G__85278;
count__85209_85229 = G__85279;
i__85210_85230 = G__85280;
continue;
} else {
var vec__85220_85283 = cljs.core.first.call(null,seq__85207_85269__$1);
var i_85284 = cljs.core.nth.call(null,vec__85220_85283,(0),null);
var vec__85221_85285 = cljs.core.nth.call(null,vec__85220_85283,(1),null);
var ii_85286 = cljs.core.nth.call(null,vec__85221_85285,(0),null);
var h_85287 = cljs.core.nth.call(null,vec__85221_85285,(1),null);
var temp__4655__auto___85289 = cljs.core.get.call(null,om,i_85284);
if(cljs.core.truth_(temp__4655__auto___85289)){
var oh_85294 = temp__4655__auto___85289;
if(cljs.core.not.call(null,int$)){
if((oh_85294 === h_85287)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_85286,cljs.core.nth.call(null,cs,i_85284));
} else {
var ncel_85298 = el.removeChild(cljs.core.nth.call(null,cs,i_85284));
hipo.interpreter.update_BANG_.call(null,ncel_85298,oh_85294,h_85287,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_85286,ncel_85298);
}
} else {
var o__27939__auto___85302 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_85287,new cljs.core.Keyword(null,"index","index",-1531685915),ii_85286], null));
if(!(o__27939__auto___85302 === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto___85302)){
o__27939__auto___85302.call(null,((function (seq__85207_85227,chunk__85208_85228,count__85209_85229,i__85210_85230,o__27939__auto___85302,oh_85294,temp__4655__auto___85289,vec__85220_85283,i_85284,vec__85221_85285,ii_85286,h_85287,seq__85207_85269__$1,temp__4657__auto___85268,om,nm,cs){
return (function (){
if((oh_85294 === h_85287)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_85286,cljs.core.nth.call(null,cs,i_85284));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_85284));
hipo.interpreter.update_BANG_.call(null,ncel,oh_85294,h_85287,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_85286,ncel);
}
});})(seq__85207_85227,chunk__85208_85228,count__85209_85229,i__85210_85230,o__27939__auto___85302,oh_85294,temp__4655__auto___85289,vec__85220_85283,i_85284,vec__85221_85285,ii_85286,h_85287,seq__85207_85269__$1,temp__4657__auto___85268,om,nm,cs))
);
} else {
if((oh_85294 === h_85287)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_85286,cljs.core.nth.call(null,cs,i_85284));
} else {
var ncel_85322 = el.removeChild(cljs.core.nth.call(null,cs,i_85284));
hipo.interpreter.update_BANG_.call(null,ncel_85322,oh_85294,h_85287,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_85286,ncel_85322);
}
}
} else {
}
}
} else {
var nel_85328 = hipo.interpreter.create_child.call(null,h_85287);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_85286,nel_85328);
} else {
var o__27939__auto___85330 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_85328,new cljs.core.Keyword(null,"index","index",-1531685915),ii_85286], null));
if(!(o__27939__auto___85330 === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto___85330)){
o__27939__auto___85330.call(null,((function (seq__85207_85227,chunk__85208_85228,count__85209_85229,i__85210_85230,o__27939__auto___85330,nel_85328,temp__4655__auto___85289,vec__85220_85283,i_85284,vec__85221_85285,ii_85286,h_85287,seq__85207_85269__$1,temp__4657__auto___85268,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_85286,nel_85328);
});})(seq__85207_85227,chunk__85208_85228,count__85209_85229,i__85210_85230,o__27939__auto___85330,nel_85328,temp__4655__auto___85289,vec__85220_85283,i_85284,vec__85221_85285,ii_85286,h_85287,seq__85207_85269__$1,temp__4657__auto___85268,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_85286,nel_85328);
}
} else {
}
}
}

var G__85347 = cljs.core.next.call(null,seq__85207_85269__$1);
var G__85348 = null;
var G__85349 = (0);
var G__85350 = (0);
seq__85207_85227 = G__85347;
chunk__85208_85228 = G__85348;
count__85209_85229 = G__85349;
i__85210_85230 = G__85350;
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
var o__27939__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__27939__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto__)){
return o__27939__auto__.call(null,((function (o__27939__auto__,d,om,nm,cs){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__27939__auto__,d,om,nm,cs))
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
var o__27939__auto___85390 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__27939__auto___85390 === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto___85390)){
o__27939__auto___85390.call(null,((function (o__27939__auto___85390,oc,nc,d){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__27939__auto___85390,oc,nc,d))
);
} else {
hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
}
} else {
}
}
} else {
}

var n__26741__auto___85391 = (function (){var x__26165__auto__ = oc;
var y__26166__auto__ = nc;
return ((x__26165__auto__ < y__26166__auto__) ? x__26165__auto__ : y__26166__auto__);
})();
var i_85411 = (0);
while(true){
if((i_85411 < n__26741__auto___85391)){
var ov_85412 = cljs.core.nth.call(null,och,i_85411);
var nv_85413 = cljs.core.nth.call(null,nch,i_85411);
if(!((ov_85412 === nv_85413))){
var temp__4655__auto___85416 = hipo.dom.child_at.call(null,el,i_85411);
if(cljs.core.truth_(temp__4655__auto___85416)){
var cel_85417 = temp__4655__auto___85416;
hipo.interpreter.update_BANG_.call(null,cel_85417,ov_85412,nv_85413,int$);
} else {
}
} else {
}

var G__85418 = (i_85411 + (1));
i_85411 = G__85418;
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
var o__27939__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
if(!(o__27939__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto__)){
return o__27939__auto__.call(null,((function (o__27939__auto__,h,oc,nc,d){
return (function (){
return hipo.interpreter.append_child_BANG_.call(null,el,h);
});})(o__27939__auto__,h,oc,nc,d))
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
var o__27939__auto___85419 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
if(!(o__27939__auto___85419 === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto___85419)){
o__27939__auto___85419.call(null,((function (o__27939__auto___85419,f,cs,oc,nc,d){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs);
});})(o__27939__auto___85419,f,cs,oc,nc,d))
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
var o__27939__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__27939__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto__)){
return o__27939__auto__.call(null,((function (o__27939__auto__){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(o__27939__auto__))
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
var o__27939__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel], null));
if(!(o__27939__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto__)){
return o__27939__auto__.call(null,((function (o__27939__auto__,nel){
return (function (){
return hipo.dom.replace_BANG_.call(null,el,nel);
});})(o__27939__auto__,nel))
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
var o__27939__auto___85450 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-children","update-children",1871853561),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__27939__auto___85450 === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto___85450)){
o__27939__auto___85450.call(null,((function (o__27939__auto___85450,om,nm,och,nch){
return (function (){
return hipo.interpreter.update_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),int$);
});})(o__27939__auto___85450,om,nm,och,nch))
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
if(cljs.core.truth_((function (){var or__25827__auto__ = cljs.core.vector_QMARK_.call(null,h);
if(or__25827__auto__){
return or__25827__auto__;
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
var o__27939__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
if(!(o__27939__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto__)){
return o__27939__auto__.call(null,((function (o__27939__auto__){
return (function (){
return hipo.dom.replace_text_BANG_.call(null,el,h);
});})(o__27939__auto__))
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
var G__85476__delegate = function (nh,p__85472){
var vec__85473 = p__85472;
var m = cljs.core.nth.call(null,vec__85473,(0),null);
var int$ = new cljs.core.Keyword(null,"interceptor","interceptor",1127739076).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
} else {
var o__27939__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__27939__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__27939__auto__)){
return o__27939__auto__.call(null,((function (o__27939__auto__,int$,vec__85473,m,a){
return (function (){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
});})(o__27939__auto__,int$,vec__85473,m,a))
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
var G__85476 = function (nh,var_args){
var p__85472 = null;
if (arguments.length > 1) {
var G__85477__i = 0, G__85477__a = new Array(arguments.length -  1);
while (G__85477__i < G__85477__a.length) {G__85477__a[G__85477__i] = arguments[G__85477__i + 1]; ++G__85477__i;}
  p__85472 = new cljs.core.IndexedSeq(G__85477__a,0);
} 
return G__85476__delegate.call(this,nh,p__85472);};
G__85476.cljs$lang$maxFixedArity = 1;
G__85476.cljs$lang$applyTo = (function (arglist__85478){
var nh = cljs.core.first(arglist__85478);
var p__85472 = cljs.core.rest(arglist__85478);
return G__85476__delegate(nh,p__85472);
});
G__85476.cljs$core$IFn$_invoke$arity$variadic = G__85476__delegate;
return G__85476;
})()
;})(a))
], null);
});
