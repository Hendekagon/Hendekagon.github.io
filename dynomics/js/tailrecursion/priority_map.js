// Compiled by ClojureScript 1.8.40 {}
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
return cljs.core.seq.call(null,(function (){var iter__36205__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__126059(s__126060){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__126060__$1 = s__126060;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__126060__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__126090 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__126090,(0),null);
var item_set = cljs.core.nth.call(null,vec__126090,(1),null);
var iterys__36201__auto__ = ((function (s__126060__$1,vec__126090,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__126059_$_iter__126061(s__126062){
return (new cljs.core.LazySeq(null,((function (s__126060__$1,vec__126090,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__126062__$1 = s__126062;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__126062__$1);
if(temp__4657__auto____$1){
var s__126062__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__126062__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__126062__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__126064 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__126063 = (0);
while(true){
if((i__126063 < size__36204__auto__)){
var item = cljs.core._nth.call(null,c__36203__auto__,i__126063);
cljs.core.chunk_append.call(null,b__126064,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__126186 = (i__126063 + (1));
i__126063 = G__126186;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126064),tailrecursion$priority_map$iter__126059_$_iter__126061.call(null,cljs.core.chunk_rest.call(null,s__126062__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126064),null);
}
} else {
var item = cljs.core.first.call(null,s__126062__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__126059_$_iter__126061.call(null,cljs.core.rest.call(null,s__126062__$2)));
}
} else {
return null;
}
break;
}
});})(s__126060__$1,vec__126090,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__126060__$1,vec__126090,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,item_set));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,tailrecursion$priority_map$iter__126059.call(null,cljs.core.rest.call(null,s__126060__$1)));
} else {
var G__126187 = cljs.core.rest.call(null,s__126060__$1);
s__126060__$1 = G__126187;
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
return iter__36205__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__36205__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__126094(s__126095){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__126095__$1 = s__126095;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__126095__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__126106 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__126106,(0),null);
var item_set = cljs.core.nth.call(null,vec__126106,(1),null);
var iterys__36201__auto__ = ((function (s__126095__$1,vec__126106,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__126094_$_iter__126096(s__126097){
return (new cljs.core.LazySeq(null,((function (s__126095__$1,vec__126106,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__126097__$1 = s__126097;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__126097__$1);
if(temp__4657__auto____$1){
var s__126097__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__126097__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__126097__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__126099 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__126098 = (0);
while(true){
if((i__126098 < size__36204__auto__)){
var item = cljs.core._nth.call(null,c__36203__auto__,i__126098);
cljs.core.chunk_append.call(null,b__126099,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__126188 = (i__126098 + (1));
i__126098 = G__126188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126099),tailrecursion$priority_map$iter__126094_$_iter__126096.call(null,cljs.core.chunk_rest.call(null,s__126097__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126099),null);
}
} else {
var item = cljs.core.first.call(null,s__126097__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__126094_$_iter__126096.call(null,cljs.core.rest.call(null,s__126097__$2)));
}
} else {
return null;
}
break;
}
});})(s__126095__$1,vec__126106,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__126095__$1,vec__126106,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,item_set));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,tailrecursion$priority_map$iter__126094.call(null,cljs.core.rest.call(null,s__126095__$1)));
} else {
var G__126195 = cljs.core.rest.call(null,s__126095__$1);
s__126095__$1 = G__126195;
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
return iter__36205__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__35860__auto__ = self__.__hash;
if(!((h__35860__auto__ == null))){
return h__35860__auto__;
} else {
var h__35860__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);
self__.__hash = h__35860__auto____$1;

return h__35860__auto____$1;
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
return cljs.core.seq.call(null,(function (){var iter__36205__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__126112(s__126113){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__126113__$1 = s__126113;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__126113__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__126122 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__126122,(0),null);
var item_set = cljs.core.nth.call(null,vec__126122,(1),null);
var iterys__36201__auto__ = ((function (s__126113__$1,vec__126122,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__126112_$_iter__126114(s__126115){
return (new cljs.core.LazySeq(null,((function (s__126113__$1,vec__126122,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__126115__$1 = s__126115;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__126115__$1);
if(temp__4657__auto____$1){
var s__126115__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__126115__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__126115__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__126117 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__126116 = (0);
while(true){
if((i__126116 < size__36204__auto__)){
var item = cljs.core._nth.call(null,c__36203__auto__,i__126116);
cljs.core.chunk_append.call(null,b__126117,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__126210 = (i__126116 + (1));
i__126116 = G__126210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126117),tailrecursion$priority_map$iter__126112_$_iter__126114.call(null,cljs.core.chunk_rest.call(null,s__126115__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126117),null);
}
} else {
var item = cljs.core.first.call(null,s__126115__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__126112_$_iter__126114.call(null,cljs.core.rest.call(null,s__126115__$2)));
}
} else {
return null;
}
break;
}
});})(s__126113__$1,vec__126122,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__126113__$1,vec__126122,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,item_set));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,tailrecursion$priority_map$iter__126112.call(null,cljs.core.rest.call(null,s__126113__$1)));
} else {
var G__126214 = cljs.core.rest.call(null,s__126113__$1);
s__126113__$1 = G__126214;
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
return iter__36205__auto__.call(null,self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__36205__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__126126(s__126127){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__126127__$1 = s__126127;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__126127__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__126133 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__126133,(0),null);
var item_set = cljs.core.nth.call(null,vec__126133,(1),null);
var iterys__36201__auto__ = ((function (s__126127__$1,vec__126133,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__126126_$_iter__126128(s__126129){
return (new cljs.core.LazySeq(null,((function (s__126127__$1,vec__126133,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__126129__$1 = s__126129;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__126129__$1);
if(temp__4657__auto____$1){
var s__126129__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__126129__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__126129__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__126131 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__126130 = (0);
while(true){
if((i__126130 < size__36204__auto__)){
var item = cljs.core._nth.call(null,c__36203__auto__,i__126130);
cljs.core.chunk_append.call(null,b__126131,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__126215 = (i__126130 + (1));
i__126130 = G__126215;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126131),tailrecursion$priority_map$iter__126126_$_iter__126128.call(null,cljs.core.chunk_rest.call(null,s__126129__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126131),null);
}
} else {
var item = cljs.core.first.call(null,s__126129__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__126126_$_iter__126128.call(null,cljs.core.rest.call(null,s__126129__$2)));
}
} else {
return null;
}
break;
}
});})(s__126127__$1,vec__126133,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__126127__$1,vec__126133,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,item_set));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,tailrecursion$priority_map$iter__126126.call(null,cljs.core.rest.call(null,s__126127__$1)));
} else {
var G__126216 = cljs.core.rest.call(null,s__126127__$1);
s__126127__$1 = G__126216;
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
return iter__36205__auto__.call(null,self__.priority__GT_set_of_items);
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
var G__126217 = null;
var G__126217__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__126217__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__126217 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__126217__2.call(this,self__,item);
case 3:
return G__126217__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__126217.cljs$core$IFn$_invoke$arity$2 = G__126217__2;
G__126217.cljs$core$IFn$_invoke$arity$3 = G__126217__3;
return G__126217;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args126048){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args126048)));
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
return cljs.core.seq.call(null,(function (){var iter__36205__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__126140(s__126141){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__126141__$1 = s__126141;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__126141__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__126154 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__126154,(0),null);
var item_set = cljs.core.nth.call(null,vec__126154,(1),null);
var iterys__36201__auto__ = ((function (s__126141__$1,vec__126154,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__126140_$_iter__126142(s__126143){
return (new cljs.core.LazySeq(null,((function (s__126141__$1,vec__126154,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__126143__$1 = s__126143;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__126143__$1);
if(temp__4657__auto____$1){
var s__126143__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__126143__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__126143__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__126145 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__126144 = (0);
while(true){
if((i__126144 < size__36204__auto__)){
var item = cljs.core._nth.call(null,c__36203__auto__,i__126144);
cljs.core.chunk_append.call(null,b__126145,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__126277 = (i__126144 + (1));
i__126144 = G__126277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126145),tailrecursion$priority_map$iter__126140_$_iter__126142.call(null,cljs.core.chunk_rest.call(null,s__126143__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126145),null);
}
} else {
var item = cljs.core.first.call(null,s__126143__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__126140_$_iter__126142.call(null,cljs.core.rest.call(null,s__126143__$2)));
}
} else {
return null;
}
break;
}
});})(s__126141__$1,vec__126154,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__126141__$1,vec__126154,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,item_set));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,tailrecursion$priority_map$iter__126140.call(null,cljs.core.rest.call(null,s__126141__$1)));
} else {
var G__126282 = cljs.core.rest.call(null,s__126141__$1);
s__126141__$1 = G__126282;
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
return iter__36205__auto__.call(null,sets);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__36205__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__126161(s__126162){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__126162__$1 = s__126162;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__126162__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__126171 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__126171,(0),null);
var item_set = cljs.core.nth.call(null,vec__126171,(1),null);
var iterys__36201__auto__ = ((function (s__126162__$1,vec__126171,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__126161_$_iter__126163(s__126164){
return (new cljs.core.LazySeq(null,((function (s__126162__$1,vec__126171,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__126164__$1 = s__126164;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__126164__$1);
if(temp__4657__auto____$1){
var s__126164__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__126164__$2)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,s__126164__$2);
var size__36204__auto__ = cljs.core.count.call(null,c__36203__auto__);
var b__126166 = cljs.core.chunk_buffer.call(null,size__36204__auto__);
if((function (){var i__126165 = (0);
while(true){
if((i__126165 < size__36204__auto__)){
var item = cljs.core._nth.call(null,c__36203__auto__,i__126165);
cljs.core.chunk_append.call(null,b__126166,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__126305 = (i__126165 + (1));
i__126165 = G__126305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126166),tailrecursion$priority_map$iter__126161_$_iter__126163.call(null,cljs.core.chunk_rest.call(null,s__126164__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__126166),null);
}
} else {
var item = cljs.core.first.call(null,s__126164__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__126161_$_iter__126163.call(null,cljs.core.rest.call(null,s__126164__$2)));
}
} else {
return null;
}
break;
}
});})(s__126162__$1,vec__126171,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__126162__$1,vec__126171,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__36202__auto__ = cljs.core.seq.call(null,iterys__36201__auto__.call(null,item_set));
if(fs__36202__auto__){
return cljs.core.concat.call(null,fs__36202__auto__,tailrecursion$priority_map$iter__126161.call(null,cljs.core.rest.call(null,s__126162__$1)));
} else {
var G__126313 = cljs.core.rest.call(null,s__126162__$1);
s__126162__$1 = G__126313;
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
return iter__36205__auto__.call(null,sets);
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

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var args126331 = [];
var len__36494__auto___126336 = arguments.length;
var i__36495__auto___126337 = (0);
while(true){
if((i__36495__auto___126337 < len__36494__auto___126336)){
args126331.push((arguments[i__36495__auto___126337]));

var G__126338 = (i__36495__auto___126337 + (1));
i__36495__auto___126337 = G__126338;
continue;
} else {
}
break;
}

var G__126333 = args126331.length;
switch (G__126333) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args126331.length)].join('')));

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
var args__36501__auto__ = [];
var len__36494__auto___126350 = arguments.length;
var i__36495__auto___126351 = (0);
while(true){
if((i__36495__auto___126351 < len__36494__auto___126350)){
args__36501__auto__.push((arguments[i__36495__auto___126351]));

var G__126352 = (i__36495__auto___126351 + (1));
i__36495__auto___126351 = G__126352;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((0) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((0)),(0),null)):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__36502__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__126353 = cljs.core.nnext.call(null,in$);
var G__126354 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__126353;
out = G__126354;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq126344){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq126344));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__36501__auto__ = [];
var len__36494__auto___126363 = arguments.length;
var i__36495__auto___126364 = (0);
while(true){
if((i__36495__auto___126364 < len__36494__auto___126363)){
args__36501__auto__.push((arguments[i__36495__auto___126364]));

var G__126365 = (i__36495__auto___126364 + (1));
i__36495__auto___126364 = G__126365;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((1) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36502__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);
while(true){
if(in$){
var G__126369 = cljs.core.nnext.call(null,in$);
var G__126370 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__126369;
out = G__126370;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq126357){
var G__126358 = cljs.core.first.call(null,seq126357);
var seq126357__$1 = cljs.core.next.call(null,seq126357);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__126358,seq126357__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__36501__auto__ = [];
var len__36494__auto___126414 = arguments.length;
var i__36495__auto___126415 = (0);
while(true){
if((i__36495__auto___126415 < len__36494__auto___126414)){
args__36501__auto__.push((arguments[i__36495__auto___126415]));

var G__126416 = (i__36495__auto___126415 + (1));
i__36495__auto___126415 = G__126416;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((1) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36502__auto__);
});

tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn);
while(true){
if(in$){
var G__126419 = cljs.core.nnext.call(null,in$);
var G__126420 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__126419;
out = G__126420;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq126373){
var G__126374 = cljs.core.first.call(null,seq126373);
var seq126373__$1 = cljs.core.next.call(null,seq126373);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(G__126374,seq126373__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__36501__auto__ = [];
var len__36494__auto___126433 = arguments.length;
var i__36495__auto___126434 = (0);
while(true){
if((i__36495__auto___126434 < len__36494__auto___126433)){
args__36501__auto__.push((arguments[i__36495__auto___126434]));

var G__126435 = (i__36495__auto___126434 + (1));
i__36495__auto___126434 = G__126435;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((2) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((2)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36502__auto__);
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn,comparator);
while(true){
if(in$){
var G__126438 = cljs.core.nnext.call(null,in$);
var G__126439 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__126438;
out = G__126439;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq126426){
var G__126427 = cljs.core.first.call(null,seq126426);
var seq126426__$1 = cljs.core.next.call(null,seq126426);
var G__126428 = cljs.core.first.call(null,seq126426__$1);
var seq126426__$2 = cljs.core.next.call(null,seq126426__$1);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic(G__126427,G__126428,seq126426__$2);
});
