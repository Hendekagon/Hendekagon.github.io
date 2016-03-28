// Compiled by ClojureScript 1.8.34 {}
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.reader');

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.keyfn = keyfn;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.call(null,self__.item__GT_priority,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count.call(null,self__.item__GT_priority);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
var item = cljs.core.first.call(null,cljs.core.val.call(null,f));
if(cljs.core.truth_(self__.keyfn)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,cljs.core.key.call(null,f)], null);
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
var item_set = cljs.core.val.call(null,f);
var item = cljs.core.first.call(null,item_set);
var priority_key = cljs.core.key.call(null,f);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq.call(null,(function (){var iter__35971__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__370187(s__370188){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__370188__$1 = s__370188;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__370188__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__370201 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__370201,(0),null);
var item_set = cljs.core.nth.call(null,vec__370201,(1),null);
var iterys__35967__auto__ = ((function (s__370188__$1,vec__370201,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__370187_$_iter__370189(s__370190){
return (new cljs.core.LazySeq(null,((function (s__370188__$1,vec__370201,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__370190__$1 = s__370190;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__370190__$1);
if(temp__4657__auto____$1){
var s__370190__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__370190__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__370190__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__370192 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__370191 = (0);
while(true){
if((i__370191 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__370191);
cljs.core.chunk_append.call(null,b__370192,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__370331 = (i__370191 + (1));
i__370191 = G__370331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370192),tailrecursion$priority_map$iter__370187_$_iter__370189.call(null,cljs.core.chunk_rest.call(null,s__370190__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370192),null);
}
} else {
var item = cljs.core.first.call(null,s__370190__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__370187_$_iter__370189.call(null,cljs.core.rest.call(null,s__370190__$2)));
}
} else {
return null;
}
break;
}
});})(s__370188__$1,vec__370201,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__370188__$1,vec__370201,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__370187.call(null,cljs.core.rest.call(null,s__370188__$1)));
} else {
var G__370338 = cljs.core.rest.call(null,s__370188__$1);
s__370188__$1 = G__370338;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__35971__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__35971__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__370206(s__370207){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__370207__$1 = s__370207;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__370207__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__370219 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__370219,(0),null);
var item_set = cljs.core.nth.call(null,vec__370219,(1),null);
var iterys__35967__auto__ = ((function (s__370207__$1,vec__370219,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__370206_$_iter__370208(s__370209){
return (new cljs.core.LazySeq(null,((function (s__370207__$1,vec__370219,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__370209__$1 = s__370209;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__370209__$1);
if(temp__4657__auto____$1){
var s__370209__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__370209__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__370209__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__370211 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__370210 = (0);
while(true){
if((i__370210 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__370210);
cljs.core.chunk_append.call(null,b__370211,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__370339 = (i__370210 + (1));
i__370210 = G__370339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370211),tailrecursion$priority_map$iter__370206_$_iter__370208.call(null,cljs.core.chunk_rest.call(null,s__370209__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370211),null);
}
} else {
var item = cljs.core.first.call(null,s__370209__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__370206_$_iter__370208.call(null,cljs.core.rest.call(null,s__370209__$2)));
}
} else {
return null;
}
break;
}
});})(s__370207__$1,vec__370219,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__370207__$1,vec__370219,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__370206.call(null,cljs.core.rest.call(null,s__370207__$1)));
} else {
var G__370340 = cljs.core.rest.call(null,s__370207__$1);
s__370207__$1 = G__370340;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__35971__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__35626__auto__ = self__.__hash;
if(!((h__35626__auto__ == null))){
return h__35626__auto__;
} else {
var h__35626__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);
self__.__hash = h__35626__auto____$1;

return h__35626__auto____$1;
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv.call(null,self__.item__GT_priority,other);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517));
if(cljs.core._EQ_.call(null,priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var priority_key = self__.keyfn.call(null,priority);
var item_set = self__.priority__GT_set_of_items.call(null,priority_key);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__4655__auto__ = cljs.core.get.call(null,self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__4655__auto__)){
var current_priority = temp__4655__auto__;
if(cljs.core._EQ_.call(null,current_priority,priority)){
return this$__$1;
} else {
var priority_key = self__.keyfn.call(null,priority);
var current_priority_key = self__.keyfn.call(null,current_priority);
var item_set = cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority_key);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,current_priority_key),priority_key,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,current_priority,cljs.core.disj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority_key),item),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}
} else {
var priority_key = self__.keyfn.call(null,priority);
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_.call(null,self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq.call(null,(function (){var iter__35971__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__370225(s__370226){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__370226__$1 = s__370226;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__370226__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__370233 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__370233,(0),null);
var item_set = cljs.core.nth.call(null,vec__370233,(1),null);
var iterys__35967__auto__ = ((function (s__370226__$1,vec__370233,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__370225_$_iter__370227(s__370228){
return (new cljs.core.LazySeq(null,((function (s__370226__$1,vec__370233,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__370228__$1 = s__370228;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__370228__$1);
if(temp__4657__auto____$1){
var s__370228__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__370228__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__370228__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__370230 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__370229 = (0);
while(true){
if((i__370229 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__370229);
cljs.core.chunk_append.call(null,b__370230,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__370353 = (i__370229 + (1));
i__370229 = G__370353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370230),tailrecursion$priority_map$iter__370225_$_iter__370227.call(null,cljs.core.chunk_rest.call(null,s__370228__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370230),null);
}
} else {
var item = cljs.core.first.call(null,s__370228__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__370225_$_iter__370227.call(null,cljs.core.rest.call(null,s__370228__$2)));
}
} else {
return null;
}
break;
}
});})(s__370226__$1,vec__370233,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__370226__$1,vec__370233,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__370225.call(null,cljs.core.rest.call(null,s__370226__$1)));
} else {
var G__370359 = cljs.core.rest.call(null,s__370226__$1);
s__370226__$1 = G__370359;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__35971__auto__.call(null,self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__35971__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__370236(s__370237){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__370237__$1 = s__370237;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__370237__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__370256 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__370256,(0),null);
var item_set = cljs.core.nth.call(null,vec__370256,(1),null);
var iterys__35967__auto__ = ((function (s__370237__$1,vec__370256,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__370236_$_iter__370238(s__370239){
return (new cljs.core.LazySeq(null,((function (s__370237__$1,vec__370256,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__370239__$1 = s__370239;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__370239__$1);
if(temp__4657__auto____$1){
var s__370239__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__370239__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__370239__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__370241 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__370240 = (0);
while(true){
if((i__370240 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__370240);
cljs.core.chunk_append.call(null,b__370241,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__370367 = (i__370240 + (1));
i__370240 = G__370367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370241),tailrecursion$priority_map$iter__370236_$_iter__370238.call(null,cljs.core.chunk_rest.call(null,s__370239__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370241),null);
}
} else {
var item = cljs.core.first.call(null,s__370239__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__370236_$_iter__370238.call(null,cljs.core.rest.call(null,s__370239__$2)));
}
} else {
return null;
}
break;
}
});})(s__370237__$1,vec__370256,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__370237__$1,vec__370256,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__370236.call(null,cljs.core.rest.call(null,s__370237__$1)));
} else {
var G__370376 = cljs.core.rest.call(null,s__370237__$1);
s__370237__$1 = G__370376;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__35971__auto__.call(null,self__.priority__GT_set_of_items);
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.keyfn,self__.__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core._assoc.call(null,this$__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this$__$1,entry);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__370384 = null;
var G__370384__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__370384__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__370384 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__370384__2.call(this,self__,item);
case 3:
return G__370384__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__370384.cljs$core$IFn$_invoke$arity$2 = G__370384__2;
G__370384.cljs$core$IFn$_invoke$arity$3 = G__370384__3;
return G__370384;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args370181){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args370181)));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.call(null,self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.call(null,self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq.call(null,(function (){var iter__35971__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__370270(s__370271){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__370271__$1 = s__370271;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__370271__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__370286 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__370286,(0),null);
var item_set = cljs.core.nth.call(null,vec__370286,(1),null);
var iterys__35967__auto__ = ((function (s__370271__$1,vec__370286,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__370270_$_iter__370272(s__370273){
return (new cljs.core.LazySeq(null,((function (s__370271__$1,vec__370286,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__370273__$1 = s__370273;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__370273__$1);
if(temp__4657__auto____$1){
var s__370273__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__370273__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__370273__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__370275 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__370274 = (0);
while(true){
if((i__370274 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__370274);
cljs.core.chunk_append.call(null,b__370275,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__370391 = (i__370274 + (1));
i__370274 = G__370391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370275),tailrecursion$priority_map$iter__370270_$_iter__370272.call(null,cljs.core.chunk_rest.call(null,s__370273__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370275),null);
}
} else {
var item = cljs.core.first.call(null,s__370273__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__370270_$_iter__370272.call(null,cljs.core.rest.call(null,s__370273__$2)));
}
} else {
return null;
}
break;
}
});})(s__370271__$1,vec__370286,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__370271__$1,vec__370286,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__370270.call(null,cljs.core.rest.call(null,s__370271__$1)));
} else {
var G__370394 = cljs.core.rest.call(null,s__370271__$1);
s__370271__$1 = G__370394;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__35971__auto__.call(null,sets);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__35971__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__370294(s__370295){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__370295__$1 = s__370295;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__370295__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__370307 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__370307,(0),null);
var item_set = cljs.core.nth.call(null,vec__370307,(1),null);
var iterys__35967__auto__ = ((function (s__370295__$1,vec__370307,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__370294_$_iter__370296(s__370297){
return (new cljs.core.LazySeq(null,((function (s__370295__$1,vec__370307,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__370297__$1 = s__370297;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__370297__$1);
if(temp__4657__auto____$1){
var s__370297__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__370297__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__370297__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__370299 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__370298 = (0);
while(true){
if((i__370298 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__370298);
cljs.core.chunk_append.call(null,b__370299,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__370402 = (i__370298 + (1));
i__370298 = G__370402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370299),tailrecursion$priority_map$iter__370294_$_iter__370296.call(null,cljs.core.chunk_rest.call(null,s__370297__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370299),null);
}
} else {
var item = cljs.core.first.call(null,s__370297__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__370294_$_iter__370296.call(null,cljs.core.rest.call(null,s__370297__$2)));
}
} else {
return null;
}
break;
}
});})(s__370295__$1,vec__370307,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__370295__$1,vec__370307,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__370294.call(null,cljs.core.rest.call(null,s__370295__$1)));
} else {
var G__370404 = cljs.core.rest.call(null,s__370295__$1);
s__370295__$1 = G__370404;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__35971__auto__.call(null,sets);
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return self__.keyfn.call(null,cljs.core.val.call(null,entry));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
});

tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"priority->set-of-items","priority->set-of-items",-1256537211,null),new cljs.core.Symbol(null,"item->priority","item->priority",-899999435,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var args370413 = [];
var len__36260__auto___370416 = arguments.length;
var i__36261__auto___370417 = (0);
while(true){
if((i__36261__auto___370417 < len__36260__auto___370416)){
args370413.push((arguments[i__36261__auto___370417]));

var G__370418 = (i__36261__auto___370417 + (1));
i__36261__auto___370417 = G__370418;
continue;
} else {
}
break;
}

var G__370415 = args370413.length;
switch (G__370415) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args370413.length)].join('')));

}
});

tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
});

tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
});

tailrecursion.priority_map.pm_empty_keyfn.cljs$lang$maxFixedArity = 2;
tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_.call(null,elems)){
return cljs.core.into.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
return cljs.reader.reader_error.call(null,null,"Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_.call(null,"tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 *   Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(var_args){
var args__36267__auto__ = [];
var len__36260__auto___370433 = arguments.length;
var i__36261__auto___370434 = (0);
while(true){
if((i__36261__auto___370434 < len__36260__auto___370433)){
args__36267__auto__.push((arguments[i__36261__auto___370434]));

var G__370438 = (i__36261__auto___370434 + (1));
i__36261__auto___370434 = G__370438;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((0) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((0)),(0),null)):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__36268__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__370444 = cljs.core.nnext.call(null,in$);
var G__370445 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__370444;
out = G__370445;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq370424){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq370424));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__36267__auto__ = [];
var len__36260__auto___370462 = arguments.length;
var i__36261__auto___370463 = (0);
while(true){
if((i__36261__auto___370463 < len__36260__auto___370462)){
args__36267__auto__.push((arguments[i__36261__auto___370463]));

var G__370465 = (i__36261__auto___370463 + (1));
i__36261__auto___370463 = G__370465;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);
while(true){
if(in$){
var G__370469 = cljs.core.nnext.call(null,in$);
var G__370470 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__370469;
out = G__370470;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq370452){
var G__370453 = cljs.core.first.call(null,seq370452);
var seq370452__$1 = cljs.core.next.call(null,seq370452);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__370453,seq370452__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__36267__auto__ = [];
var len__36260__auto___370477 = arguments.length;
var i__36261__auto___370478 = (0);
while(true){
if((i__36261__auto___370478 < len__36260__auto___370477)){
args__36267__auto__.push((arguments[i__36261__auto___370478]));

var G__370479 = (i__36261__auto___370478 + (1));
i__36261__auto___370478 = G__370479;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn);
while(true){
if(in$){
var G__370482 = cljs.core.nnext.call(null,in$);
var G__370483 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__370482;
out = G__370483;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq370475){
var G__370476 = cljs.core.first.call(null,seq370475);
var seq370475__$1 = cljs.core.next.call(null,seq370475);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(G__370476,seq370475__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__36267__auto__ = [];
var len__36260__auto___370487 = arguments.length;
var i__36261__auto___370488 = (0);
while(true){
if((i__36261__auto___370488 < len__36260__auto___370487)){
args__36267__auto__.push((arguments[i__36261__auto___370488]));

var G__370489 = (i__36261__auto___370488 + (1));
i__36261__auto___370488 = G__370489;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((2) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((2)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36268__auto__);
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn,comparator);
while(true){
if(in$){
var G__370493 = cljs.core.nnext.call(null,in$);
var G__370494 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__370493;
out = G__370494;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq370484){
var G__370485 = cljs.core.first.call(null,seq370484);
var seq370484__$1 = cljs.core.next.call(null,seq370484);
var G__370486 = cljs.core.first.call(null,seq370484__$1);
var seq370484__$2 = cljs.core.next.call(null,seq370484__$1);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic(G__370485,G__370486,seq370484__$2);
});
