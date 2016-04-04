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
var temp__4655__auto___284064 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___284064)){
var h_284065 = temp__4655__auto___284064;
hipo.interpreter.append_child_BANG_.call(null,el,h_284065);
} else {
}

var G__284066 = cljs.core.rest.call(null,v__$1);
v__$1 = G__284066;
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
var seq__284076_284085 = cljs.core.seq.call(null,attrs);
var chunk__284077_284086 = null;
var count__284078_284087 = (0);
var i__284079_284088 = (0);
while(true){
if((i__284079_284088 < count__284078_284087)){
var vec__284080_284089 = cljs.core._nth.call(null,chunk__284077_284086,i__284079_284088);
var k_284090 = cljs.core.nth.call(null,vec__284080_284089,(0),null);
var v_284091 = cljs.core.nth.call(null,vec__284080_284089,(1),null);
if(cljs.core.truth_(v_284091)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_284090),null,v_284091);
} else {
}

var G__284092 = seq__284076_284085;
var G__284093 = chunk__284077_284086;
var G__284094 = count__284078_284087;
var G__284095 = (i__284079_284088 + (1));
seq__284076_284085 = G__284092;
chunk__284077_284086 = G__284093;
count__284078_284087 = G__284094;
i__284079_284088 = G__284095;
continue;
} else {
var temp__4657__auto___284096 = cljs.core.seq.call(null,seq__284076_284085);
if(temp__4657__auto___284096){
var seq__284076_284097__$1 = temp__4657__auto___284096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__284076_284097__$1)){
var c__36203__auto___284099 = cljs.core.chunk_first.call(null,seq__284076_284097__$1);
var G__284100 = cljs.core.chunk_rest.call(null,seq__284076_284097__$1);
var G__284101 = c__36203__auto___284099;
var G__284102 = cljs.core.count.call(null,c__36203__auto___284099);
var G__284103 = (0);
seq__284076_284085 = G__284100;
chunk__284077_284086 = G__284101;
count__284078_284087 = G__284102;
i__284079_284088 = G__284103;
continue;
} else {
var vec__284081_284104 = cljs.core.first.call(null,seq__284076_284097__$1);
var k_284105 = cljs.core.nth.call(null,vec__284081_284104,(0),null);
var v_284106 = cljs.core.nth.call(null,vec__284081_284104,(1),null);
if(cljs.core.truth_(v_284106)){
hipo.interpreter.set_attribute_BANG_.call(null,el,cljs.core.name.call(null,k_284105),null,v_284106);
} else {
}

var G__284108 = cljs.core.next.call(null,seq__284076_284097__$1);
var G__284109 = null;
var G__284110 = (0);
var G__284111 = (0);
seq__284076_284085 = G__284108;
chunk__284077_284086 = G__284109;
count__284078_284087 = G__284110;
i__284079_284088 = G__284111;
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
var G__284112 = pel;
el = G__284112;
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
var seq__284138_284157 = cljs.core.seq.call(null,nm);
var chunk__284140_284158 = null;
var count__284141_284159 = (0);
var i__284142_284160 = (0);
while(true){
if((i__284142_284160 < count__284141_284159)){
var vec__284148_284161 = cljs.core._nth.call(null,chunk__284140_284158,i__284142_284160);
var nk_284162 = cljs.core.nth.call(null,vec__284148_284161,(0),null);
var nv_284163 = cljs.core.nth.call(null,vec__284148_284161,(1),null);
var ov_284164 = nk_284162.call(null,om);
var n_284165 = cljs.core.name.call(null,nk_284162);
if(!((ov_284164 === nv_284163))){
if(cljs.core.truth_(nv_284163)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_284165,ov_284164,nv_284163);
} else {
var o__36826__auto___284166 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_284165,new cljs.core.Keyword(null,"value","value",305978217),nv_284163], null));
if(!(o__36826__auto___284166 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___284166)){
o__36826__auto___284166.call(null,((function (seq__284138_284157,chunk__284140_284158,count__284141_284159,i__284142_284160,o__36826__auto___284166,ov_284164,n_284165,vec__284148_284161,nk_284162,nv_284163){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_284165,ov_284164,nv_284163);
});})(seq__284138_284157,chunk__284140_284158,count__284141_284159,i__284142_284160,o__36826__auto___284166,ov_284164,n_284165,vec__284148_284161,nk_284162,nv_284163))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_284165,ov_284164,nv_284163);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_284165,ov_284164,null);
} else {
var o__36826__auto___284171 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_284165], null));
if(!(o__36826__auto___284171 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___284171)){
o__36826__auto___284171.call(null,((function (seq__284138_284157,chunk__284140_284158,count__284141_284159,i__284142_284160,o__36826__auto___284171,ov_284164,n_284165,vec__284148_284161,nk_284162,nv_284163){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_284165,ov_284164,null);
});})(seq__284138_284157,chunk__284140_284158,count__284141_284159,i__284142_284160,o__36826__auto___284171,ov_284164,n_284165,vec__284148_284161,nk_284162,nv_284163))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_284165,ov_284164,null);
}
} else {
}
}
}
} else {
}

var G__284174 = seq__284138_284157;
var G__284175 = chunk__284140_284158;
var G__284176 = count__284141_284159;
var G__284177 = (i__284142_284160 + (1));
seq__284138_284157 = G__284174;
chunk__284140_284158 = G__284175;
count__284141_284159 = G__284176;
i__284142_284160 = G__284177;
continue;
} else {
var temp__4657__auto___284179 = cljs.core.seq.call(null,seq__284138_284157);
if(temp__4657__auto___284179){
var seq__284138_284180__$1 = temp__4657__auto___284179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__284138_284180__$1)){
var c__36203__auto___284181 = cljs.core.chunk_first.call(null,seq__284138_284180__$1);
var G__284182 = cljs.core.chunk_rest.call(null,seq__284138_284180__$1);
var G__284183 = c__36203__auto___284181;
var G__284184 = cljs.core.count.call(null,c__36203__auto___284181);
var G__284185 = (0);
seq__284138_284157 = G__284182;
chunk__284140_284158 = G__284183;
count__284141_284159 = G__284184;
i__284142_284160 = G__284185;
continue;
} else {
var vec__284149_284186 = cljs.core.first.call(null,seq__284138_284180__$1);
var nk_284187 = cljs.core.nth.call(null,vec__284149_284186,(0),null);
var nv_284188 = cljs.core.nth.call(null,vec__284149_284186,(1),null);
var ov_284190 = nk_284187.call(null,om);
var n_284191 = cljs.core.name.call(null,nk_284187);
if(!((ov_284190 === nv_284188))){
if(cljs.core.truth_(nv_284188)){
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_284191,ov_284190,nv_284188);
} else {
var o__36826__auto___284194 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_284191,new cljs.core.Keyword(null,"value","value",305978217),nv_284188], null));
if(!(o__36826__auto___284194 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___284194)){
o__36826__auto___284194.call(null,((function (seq__284138_284157,chunk__284140_284158,count__284141_284159,i__284142_284160,o__36826__auto___284194,ov_284190,n_284191,vec__284149_284186,nk_284187,nv_284188,seq__284138_284180__$1,temp__4657__auto___284179){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_284191,ov_284190,nv_284188);
});})(seq__284138_284157,chunk__284140_284158,count__284141_284159,i__284142_284160,o__36826__auto___284194,ov_284190,n_284191,vec__284149_284186,nk_284187,nv_284188,seq__284138_284180__$1,temp__4657__auto___284179))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_284191,ov_284190,nv_284188);
}
} else {
}
}
} else {
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_284191,ov_284190,null);
} else {
var o__36826__auto___284196 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_284191], null));
if(!(o__36826__auto___284196 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___284196)){
o__36826__auto___284196.call(null,((function (seq__284138_284157,chunk__284140_284158,count__284141_284159,i__284142_284160,o__36826__auto___284196,ov_284190,n_284191,vec__284149_284186,nk_284187,nv_284188,seq__284138_284180__$1,temp__4657__auto___284179){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_284191,ov_284190,null);
});})(seq__284138_284157,chunk__284140_284158,count__284141_284159,i__284142_284160,o__36826__auto___284196,ov_284190,n_284191,vec__284149_284186,nk_284187,nv_284188,seq__284138_284180__$1,temp__4657__auto___284179))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_284191,ov_284190,null);
}
} else {
}
}
}
} else {
}

var G__284202 = cljs.core.next.call(null,seq__284138_284180__$1);
var G__284203 = null;
var G__284204 = (0);
var G__284205 = (0);
seq__284138_284157 = G__284202;
chunk__284140_284158 = G__284203;
count__284141_284159 = G__284204;
i__284142_284160 = G__284205;
continue;
}
} else {
}
}
break;
}

var seq__284150 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__284152 = null;
var count__284153 = (0);
var i__284154 = (0);
while(true){
if((i__284154 < count__284153)){
var k = cljs.core._nth.call(null,chunk__284152,i__284154);
var n_284206 = cljs.core.name.call(null,k);
var ov_284207 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_284206,ov_284207,null);
} else {
var o__36826__auto___284208 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_284206], null));
if(!(o__36826__auto___284208 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___284208)){
o__36826__auto___284208.call(null,((function (seq__284150,chunk__284152,count__284153,i__284154,o__36826__auto___284208,n_284206,ov_284207,k){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_284206,ov_284207,null);
});})(seq__284150,chunk__284152,count__284153,i__284154,o__36826__auto___284208,n_284206,ov_284207,k))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_284206,ov_284207,null);
}
} else {
}
}

var G__284209 = seq__284150;
var G__284210 = chunk__284152;
var G__284211 = count__284153;
var G__284212 = (i__284154 + (1));
seq__284150 = G__284209;
chunk__284152 = G__284210;
count__284153 = G__284211;
i__284154 = G__284212;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__284150);
if(temp__4657__auto__){
var seq__284150__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__284150__$1)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,seq__284150__$1);
var G__284213 = cljs.core.chunk_rest.call(null,seq__284150__$1);
var G__284214 = c__36203__auto__;
var G__284215 = cljs.core.count.call(null,c__36203__auto__);
var G__284216 = (0);
seq__284150 = G__284213;
chunk__284152 = G__284214;
count__284153 = G__284215;
i__284154 = G__284216;
continue;
} else {
var k = cljs.core.first.call(null,seq__284150__$1);
var n_284217 = cljs.core.name.call(null,k);
var ov_284218 = k.call(null,om);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.set_attribute_BANG_.call(null,el,n_284217,ov_284218,null);
} else {
var o__36826__auto___284219 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),n_284217], null));
if(!(o__36826__auto___284219 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___284219)){
o__36826__auto___284219.call(null,((function (seq__284150,chunk__284152,count__284153,i__284154,o__36826__auto___284219,n_284217,ov_284218,k,seq__284150__$1,temp__4657__auto__){
return (function (){
return hipo.interpreter.set_attribute_BANG_.call(null,el,n_284217,ov_284218,null);
});})(seq__284150,chunk__284152,count__284153,i__284154,o__36826__auto___284219,n_284217,ov_284218,k,seq__284150__$1,temp__4657__auto__))
);
} else {
hipo.interpreter.set_attribute_BANG_.call(null,el,n_284217,ov_284218,null);
}
} else {
}
}

var G__284222 = cljs.core.next.call(null,seq__284150__$1);
var G__284223 = null;
var G__284224 = (0);
var G__284225 = (0);
seq__284150 = G__284222;
chunk__284152 = G__284223;
count__284153 = G__284224;
i__284154 = G__284225;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__36172__auto__ = (function hipo$interpreter$keyed_children__GT_map_$_iter__284234(s__284235){
return (new cljs.core.LazySeq(null,(function (){
var s__284235__$1 = s__284235;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__284235__$1);
if(temp__4657__auto__){
var s__284235__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__284235__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__284235__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__284237 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__284236 = (0);
while(true){
if((i__284236 < size__36171__auto__)){
var h = cljs.core._nth.call(null,c__36170__auto__,i__284236);
cljs.core.chunk_append.call(null,b__284237,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null));

var G__284255 = (i__284236 + (1));
i__284236 = G__284255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__284237),hipo$interpreter$keyed_children__GT_map_$_iter__284234.call(null,cljs.core.chunk_rest.call(null,s__284235__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__284237),null);
}
} else {
var h = cljs.core.first.call(null,s__284235__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,h),h], null),hipo$interpreter$keyed_children__GT_map_$_iter__284234.call(null,cljs.core.rest.call(null,s__284235__$2)));
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__36172__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__284291(s__284292){
return (new cljs.core.LazySeq(null,(function (){
var s__284292__$1 = s__284292;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__284292__$1);
if(temp__4657__auto__){
var s__284292__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__284292__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__284292__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__284294 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__284293 = (0);
while(true){
if((i__284293 < size__36171__auto__)){
var ih = cljs.core._nth.call(null,c__36170__auto__,i__284293);
cljs.core.chunk_append.call(null,b__284294,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__284322 = (i__284293 + (1));
i__284293 = G__284322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__284294),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__284291.call(null,cljs.core.chunk_rest.call(null,s__284292__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__284294),null);
}
} else {
var ih = cljs.core.first.call(null,s__284292__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__284291.call(null,cljs.core.rest.call(null,s__284292__$2)));
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
var seq__284348_284370 = cljs.core.seq.call(null,nm);
var chunk__284349_284371 = null;
var count__284350_284372 = (0);
var i__284351_284373 = (0);
while(true){
if((i__284351_284373 < count__284350_284372)){
var vec__284352_284376 = cljs.core._nth.call(null,chunk__284349_284371,i__284351_284373);
var i_284377 = cljs.core.nth.call(null,vec__284352_284376,(0),null);
var vec__284353_284378 = cljs.core.nth.call(null,vec__284352_284376,(1),null);
var ii_284379 = cljs.core.nth.call(null,vec__284353_284378,(0),null);
var h_284380 = cljs.core.nth.call(null,vec__284353_284378,(1),null);
var temp__4655__auto___284383 = cljs.core.get.call(null,om,i_284377);
if(cljs.core.truth_(temp__4655__auto___284383)){
var oh_284384 = temp__4655__auto___284383;
if(cljs.core.not.call(null,int$)){
if((oh_284384 === h_284380)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_284379,cljs.core.nth.call(null,cs,i_284377));
} else {
var ncel_284385 = el.removeChild(cljs.core.nth.call(null,cs,i_284377));
hipo.interpreter.update_BANG_.call(null,ncel_284385,oh_284384,h_284380,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_284379,ncel_284385);
}
} else {
var o__36826__auto___284388 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_284380,new cljs.core.Keyword(null,"index","index",-1531685915),ii_284379], null));
if(!(o__36826__auto___284388 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___284388)){
o__36826__auto___284388.call(null,((function (seq__284348_284370,chunk__284349_284371,count__284350_284372,i__284351_284373,o__36826__auto___284388,oh_284384,temp__4655__auto___284383,vec__284352_284376,i_284377,vec__284353_284378,ii_284379,h_284380,om,nm,cs){
return (function (){
if((oh_284384 === h_284380)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_284379,cljs.core.nth.call(null,cs,i_284377));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_284377));
hipo.interpreter.update_BANG_.call(null,ncel,oh_284384,h_284380,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_284379,ncel);
}
});})(seq__284348_284370,chunk__284349_284371,count__284350_284372,i__284351_284373,o__36826__auto___284388,oh_284384,temp__4655__auto___284383,vec__284352_284376,i_284377,vec__284353_284378,ii_284379,h_284380,om,nm,cs))
);
} else {
if((oh_284384 === h_284380)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_284379,cljs.core.nth.call(null,cs,i_284377));
} else {
var ncel_284392 = el.removeChild(cljs.core.nth.call(null,cs,i_284377));
hipo.interpreter.update_BANG_.call(null,ncel_284392,oh_284384,h_284380,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_284379,ncel_284392);
}
}
} else {
}
}
} else {
var nel_284395 = hipo.interpreter.create_child.call(null,h_284380);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_284379,nel_284395);
} else {
var o__36826__auto___284396 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_284395,new cljs.core.Keyword(null,"index","index",-1531685915),ii_284379], null));
if(!(o__36826__auto___284396 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___284396)){
o__36826__auto___284396.call(null,((function (seq__284348_284370,chunk__284349_284371,count__284350_284372,i__284351_284373,o__36826__auto___284396,nel_284395,temp__4655__auto___284383,vec__284352_284376,i_284377,vec__284353_284378,ii_284379,h_284380,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_284379,nel_284395);
});})(seq__284348_284370,chunk__284349_284371,count__284350_284372,i__284351_284373,o__36826__auto___284396,nel_284395,temp__4655__auto___284383,vec__284352_284376,i_284377,vec__284353_284378,ii_284379,h_284380,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_284379,nel_284395);
}
} else {
}
}
}

var G__284401 = seq__284348_284370;
var G__284402 = chunk__284349_284371;
var G__284403 = count__284350_284372;
var G__284404 = (i__284351_284373 + (1));
seq__284348_284370 = G__284401;
chunk__284349_284371 = G__284402;
count__284350_284372 = G__284403;
i__284351_284373 = G__284404;
continue;
} else {
var temp__4657__auto___284405 = cljs.core.seq.call(null,seq__284348_284370);
if(temp__4657__auto___284405){
var seq__284348_284406__$1 = temp__4657__auto___284405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__284348_284406__$1)){
var c__36203__auto___284407 = cljs.core.chunk_first.call(null,seq__284348_284406__$1);
var G__284408 = cljs.core.chunk_rest.call(null,seq__284348_284406__$1);
var G__284409 = c__36203__auto___284407;
var G__284410 = cljs.core.count.call(null,c__36203__auto___284407);
var G__284411 = (0);
seq__284348_284370 = G__284408;
chunk__284349_284371 = G__284409;
count__284350_284372 = G__284410;
i__284351_284373 = G__284411;
continue;
} else {
var vec__284355_284412 = cljs.core.first.call(null,seq__284348_284406__$1);
var i_284414 = cljs.core.nth.call(null,vec__284355_284412,(0),null);
var vec__284356_284416 = cljs.core.nth.call(null,vec__284355_284412,(1),null);
var ii_284417 = cljs.core.nth.call(null,vec__284356_284416,(0),null);
var h_284418 = cljs.core.nth.call(null,vec__284356_284416,(1),null);
var temp__4655__auto___284421 = cljs.core.get.call(null,om,i_284414);
if(cljs.core.truth_(temp__4655__auto___284421)){
var oh_284423 = temp__4655__auto___284421;
if(cljs.core.not.call(null,int$)){
if((oh_284423 === h_284418)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_284417,cljs.core.nth.call(null,cs,i_284414));
} else {
var ncel_284424 = el.removeChild(cljs.core.nth.call(null,cs,i_284414));
hipo.interpreter.update_BANG_.call(null,ncel_284424,oh_284423,h_284418,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_284417,ncel_284424);
}
} else {
var o__36826__auto___284427 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"move-at","move-at",1204974710),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_284418,new cljs.core.Keyword(null,"index","index",-1531685915),ii_284417], null));
if(!(o__36826__auto___284427 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___284427)){
o__36826__auto___284427.call(null,((function (seq__284348_284370,chunk__284349_284371,count__284350_284372,i__284351_284373,o__36826__auto___284427,oh_284423,temp__4655__auto___284421,vec__284355_284412,i_284414,vec__284356_284416,ii_284417,h_284418,seq__284348_284406__$1,temp__4657__auto___284405,om,nm,cs){
return (function (){
if((oh_284423 === h_284418)){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_284417,cljs.core.nth.call(null,cs,i_284414));
} else {
var ncel = el.removeChild(cljs.core.nth.call(null,cs,i_284414));
hipo.interpreter.update_BANG_.call(null,ncel,oh_284423,h_284418,int$);

return hipo.dom.insert_child_at_BANG_.call(null,el,ii_284417,ncel);
}
});})(seq__284348_284370,chunk__284349_284371,count__284350_284372,i__284351_284373,o__36826__auto___284427,oh_284423,temp__4655__auto___284421,vec__284355_284412,i_284414,vec__284356_284416,ii_284417,h_284418,seq__284348_284406__$1,temp__4657__auto___284405,om,nm,cs))
);
} else {
if((oh_284423 === h_284418)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_284417,cljs.core.nth.call(null,cs,i_284414));
} else {
var ncel_284434 = el.removeChild(cljs.core.nth.call(null,cs,i_284414));
hipo.interpreter.update_BANG_.call(null,ncel_284434,oh_284423,h_284418,int$);

hipo.dom.insert_child_at_BANG_.call(null,el,ii_284417,ncel_284434);
}
}
} else {
}
}
} else {
var nel_284438 = hipo.interpreter.create_child.call(null,h_284418);
if(cljs.core.not.call(null,int$)){
hipo.dom.insert_child_at_BANG_.call(null,el,ii_284417,nel_284438);
} else {
var o__36826__auto___284440 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"insert-at","insert-at",350488839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nel_284438,new cljs.core.Keyword(null,"index","index",-1531685915),ii_284417], null));
if(!(o__36826__auto___284440 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___284440)){
o__36826__auto___284440.call(null,((function (seq__284348_284370,chunk__284349_284371,count__284350_284372,i__284351_284373,o__36826__auto___284440,nel_284438,temp__4655__auto___284421,vec__284355_284412,i_284414,vec__284356_284416,ii_284417,h_284418,seq__284348_284406__$1,temp__4657__auto___284405,om,nm,cs){
return (function (){
return hipo.dom.insert_child_at_BANG_.call(null,el,ii_284417,nel_284438);
});})(seq__284348_284370,chunk__284349_284371,count__284350_284372,i__284351_284373,o__36826__auto___284440,nel_284438,temp__4655__auto___284421,vec__284355_284412,i_284414,vec__284356_284416,ii_284417,h_284418,seq__284348_284406__$1,temp__4657__auto___284405,om,nm,cs))
);
} else {
hipo.dom.insert_child_at_BANG_.call(null,el,ii_284417,nel_284438);
}
} else {
}
}
}

var G__284442 = cljs.core.next.call(null,seq__284348_284406__$1);
var G__284443 = null;
var G__284444 = (0);
var G__284445 = (0);
seq__284348_284370 = G__284442;
chunk__284349_284371 = G__284443;
count__284350_284372 = G__284444;
i__284351_284373 = G__284445;
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
var o__36826__auto___284480 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),d], null));
if(!(o__36826__auto___284480 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___284480)){
o__36826__auto___284480.call(null,((function (o__36826__auto___284480,oc,nc,d){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(o__36826__auto___284480,oc,nc,d))
);
} else {
hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
}
} else {
}
}
} else {
}

var n__36306__auto___284485 = (function (){var x__35730__auto__ = oc;
var y__35731__auto__ = nc;
return ((x__35730__auto__ < y__35731__auto__) ? x__35730__auto__ : y__35731__auto__);
})();
var i_284486 = (0);
while(true){
if((i_284486 < n__36306__auto___284485)){
var ov_284487 = cljs.core.nth.call(null,och,i_284486);
var nv_284488 = cljs.core.nth.call(null,nch,i_284486);
if(!((ov_284487 === nv_284488))){
var temp__4655__auto___284489 = hipo.dom.child_at.call(null,el,i_284486);
if(cljs.core.truth_(temp__4655__auto___284489)){
var cel_284490 = temp__4655__auto___284489;
hipo.interpreter.update_BANG_.call(null,cel_284490,ov_284487,nv_284488,int$);
} else {
}
} else {
}

var G__284492 = (i_284486 + (1));
i_284486 = G__284492;
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
var o__36826__auto___284499 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
if(!(o__36826__auto___284499 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___284499)){
o__36826__auto___284499.call(null,((function (o__36826__auto___284499,f,cs,oc,nc,d){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs);
});})(o__36826__auto___284499,f,cs,oc,nc,d))
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
var o__36826__auto___284543 = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update-children","update-children",1871853561),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36826__auto___284543 === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto___284543)){
o__36826__auto___284543.call(null,((function (o__36826__auto___284543,om,nm,och,nch){
return (function (){
return hipo.interpreter.update_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),int$);
});})(o__36826__auto___284543,om,nm,och,nch))
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
var G__284573__delegate = function (nh,p__284571){
var vec__284572 = p__284571;
var m = cljs.core.nth.call(null,vec__284572,(0),null);
var int$ = new cljs.core.Keyword(null,"interceptor","interceptor",1127739076).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.not.call(null,int$)){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
} else {
var o__36826__auto__ = hipo.interceptor._intercept.call(null,int$,new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
if(!(o__36826__auto__ === false)){
if(cljs.core.fn_QMARK_.call(null,o__36826__auto__)){
return o__36826__auto__.call(null,((function (o__36826__auto__,int$,vec__284572,m,a){
return (function (){
hipo.interpreter.update_BANG_.call(null,el,cljs.core.deref.call(null,a),nh,int$);

return cljs.core.reset_BANG_.call(null,a,nh);
});})(o__36826__auto__,int$,vec__284572,m,a))
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
var G__284573 = function (nh,var_args){
var p__284571 = null;
if (arguments.length > 1) {
var G__284582__i = 0, G__284582__a = new Array(arguments.length -  1);
while (G__284582__i < G__284582__a.length) {G__284582__a[G__284582__i] = arguments[G__284582__i + 1]; ++G__284582__i;}
  p__284571 = new cljs.core.IndexedSeq(G__284582__a,0);
} 
return G__284573__delegate.call(this,nh,p__284571);};
G__284573.cljs$lang$maxFixedArity = 1;
G__284573.cljs$lang$applyTo = (function (arglist__284586){
var nh = cljs.core.first(arglist__284586);
var p__284571 = cljs.core.rest(arglist__284586);
return G__284573__delegate(nh,p__284571);
});
G__284573.cljs$core$IFn$_invoke$arity$variadic = G__284573__delegate;
return G__284573;
})()
;})(a))
], null);
});
