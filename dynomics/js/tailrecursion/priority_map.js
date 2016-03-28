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
return (function tailrecursion$priority_map$iter__293106(s__293107){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__293107__$1 = s__293107;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__293107__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__293121 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__293121,(0),null);
var item_set = cljs.core.nth.call(null,vec__293121,(1),null);
var iterys__35967__auto__ = ((function (s__293107__$1,vec__293121,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__293106_$_iter__293108(s__293109){
return (new cljs.core.LazySeq(null,((function (s__293107__$1,vec__293121,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__293109__$1 = s__293109;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__293109__$1);
if(temp__4657__auto____$1){
var s__293109__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__293109__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__293109__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__293111 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__293110 = (0);
while(true){
if((i__293110 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__293110);
cljs.core.chunk_append.call(null,b__293111,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__293220 = (i__293110 + (1));
i__293110 = G__293220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293111),tailrecursion$priority_map$iter__293106_$_iter__293108.call(null,cljs.core.chunk_rest.call(null,s__293109__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293111),null);
}
} else {
var item = cljs.core.first.call(null,s__293109__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__293106_$_iter__293108.call(null,cljs.core.rest.call(null,s__293109__$2)));
}
} else {
return null;
}
break;
}
});})(s__293107__$1,vec__293121,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__293107__$1,vec__293121,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__293106.call(null,cljs.core.rest.call(null,s__293107__$1)));
} else {
var G__293229 = cljs.core.rest.call(null,s__293107__$1);
s__293107__$1 = G__293229;
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
return (function tailrecursion$priority_map$iter__293122(s__293123){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__293123__$1 = s__293123;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__293123__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__293131 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__293131,(0),null);
var item_set = cljs.core.nth.call(null,vec__293131,(1),null);
var iterys__35967__auto__ = ((function (s__293123__$1,vec__293131,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__293122_$_iter__293124(s__293125){
return (new cljs.core.LazySeq(null,((function (s__293123__$1,vec__293131,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__293125__$1 = s__293125;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__293125__$1);
if(temp__4657__auto____$1){
var s__293125__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__293125__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__293125__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__293127 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__293126 = (0);
while(true){
if((i__293126 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__293126);
cljs.core.chunk_append.call(null,b__293127,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__293232 = (i__293126 + (1));
i__293126 = G__293232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293127),tailrecursion$priority_map$iter__293122_$_iter__293124.call(null,cljs.core.chunk_rest.call(null,s__293125__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293127),null);
}
} else {
var item = cljs.core.first.call(null,s__293125__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__293122_$_iter__293124.call(null,cljs.core.rest.call(null,s__293125__$2)));
}
} else {
return null;
}
break;
}
});})(s__293123__$1,vec__293131,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__293123__$1,vec__293131,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__293122.call(null,cljs.core.rest.call(null,s__293123__$1)));
} else {
var G__293238 = cljs.core.rest.call(null,s__293123__$1);
s__293123__$1 = G__293238;
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
return (function tailrecursion$priority_map$iter__293141(s__293142){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__293142__$1 = s__293142;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__293142__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__293154 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__293154,(0),null);
var item_set = cljs.core.nth.call(null,vec__293154,(1),null);
var iterys__35967__auto__ = ((function (s__293142__$1,vec__293154,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__293141_$_iter__293143(s__293144){
return (new cljs.core.LazySeq(null,((function (s__293142__$1,vec__293154,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__293144__$1 = s__293144;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__293144__$1);
if(temp__4657__auto____$1){
var s__293144__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__293144__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__293144__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__293146 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__293145 = (0);
while(true){
if((i__293145 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__293145);
cljs.core.chunk_append.call(null,b__293146,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__293255 = (i__293145 + (1));
i__293145 = G__293255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293146),tailrecursion$priority_map$iter__293141_$_iter__293143.call(null,cljs.core.chunk_rest.call(null,s__293144__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293146),null);
}
} else {
var item = cljs.core.first.call(null,s__293144__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__293141_$_iter__293143.call(null,cljs.core.rest.call(null,s__293144__$2)));
}
} else {
return null;
}
break;
}
});})(s__293142__$1,vec__293154,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__293142__$1,vec__293154,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__293141.call(null,cljs.core.rest.call(null,s__293142__$1)));
} else {
var G__293256 = cljs.core.rest.call(null,s__293142__$1);
s__293142__$1 = G__293256;
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
return (function tailrecursion$priority_map$iter__293156(s__293157){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__293157__$1 = s__293157;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__293157__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__293174 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__293174,(0),null);
var item_set = cljs.core.nth.call(null,vec__293174,(1),null);
var iterys__35967__auto__ = ((function (s__293157__$1,vec__293174,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__293156_$_iter__293158(s__293159){
return (new cljs.core.LazySeq(null,((function (s__293157__$1,vec__293174,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__293159__$1 = s__293159;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__293159__$1);
if(temp__4657__auto____$1){
var s__293159__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__293159__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__293159__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__293162 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__293160 = (0);
while(true){
if((i__293160 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__293160);
cljs.core.chunk_append.call(null,b__293162,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__293261 = (i__293160 + (1));
i__293160 = G__293261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293162),tailrecursion$priority_map$iter__293156_$_iter__293158.call(null,cljs.core.chunk_rest.call(null,s__293159__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293162),null);
}
} else {
var item = cljs.core.first.call(null,s__293159__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__293156_$_iter__293158.call(null,cljs.core.rest.call(null,s__293159__$2)));
}
} else {
return null;
}
break;
}
});})(s__293157__$1,vec__293174,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__293157__$1,vec__293174,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__293156.call(null,cljs.core.rest.call(null,s__293157__$1)));
} else {
var G__293264 = cljs.core.rest.call(null,s__293157__$1);
s__293157__$1 = G__293264;
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
var G__293267 = null;
var G__293267__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__293267__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__293267 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__293267__2.call(this,self__,item);
case 3:
return G__293267__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__293267.cljs$core$IFn$_invoke$arity$2 = G__293267__2;
G__293267.cljs$core$IFn$_invoke$arity$3 = G__293267__3;
return G__293267;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args293093){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args293093)));
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
return (function tailrecursion$priority_map$iter__293187(s__293188){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__293188__$1 = s__293188;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__293188__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__293199 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__293199,(0),null);
var item_set = cljs.core.nth.call(null,vec__293199,(1),null);
var iterys__35967__auto__ = ((function (s__293188__$1,vec__293199,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__293187_$_iter__293189(s__293190){
return (new cljs.core.LazySeq(null,((function (s__293188__$1,vec__293199,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__293190__$1 = s__293190;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__293190__$1);
if(temp__4657__auto____$1){
var s__293190__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__293190__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__293190__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__293192 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__293191 = (0);
while(true){
if((i__293191 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__293191);
cljs.core.chunk_append.call(null,b__293192,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__293279 = (i__293191 + (1));
i__293191 = G__293279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293192),tailrecursion$priority_map$iter__293187_$_iter__293189.call(null,cljs.core.chunk_rest.call(null,s__293190__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293192),null);
}
} else {
var item = cljs.core.first.call(null,s__293190__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__293187_$_iter__293189.call(null,cljs.core.rest.call(null,s__293190__$2)));
}
} else {
return null;
}
break;
}
});})(s__293188__$1,vec__293199,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__293188__$1,vec__293199,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__293187.call(null,cljs.core.rest.call(null,s__293188__$1)));
} else {
var G__293285 = cljs.core.rest.call(null,s__293188__$1);
s__293188__$1 = G__293285;
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
return (function tailrecursion$priority_map$iter__293200(s__293201){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__293201__$1 = s__293201;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__293201__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__293207 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__293207,(0),null);
var item_set = cljs.core.nth.call(null,vec__293207,(1),null);
var iterys__35967__auto__ = ((function (s__293201__$1,vec__293207,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__293200_$_iter__293202(s__293203){
return (new cljs.core.LazySeq(null,((function (s__293201__$1,vec__293207,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__293203__$1 = s__293203;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__293203__$1);
if(temp__4657__auto____$1){
var s__293203__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__293203__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__293203__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__293205 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__293204 = (0);
while(true){
if((i__293204 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__293204);
cljs.core.chunk_append.call(null,b__293205,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__293304 = (i__293204 + (1));
i__293204 = G__293304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293205),tailrecursion$priority_map$iter__293200_$_iter__293202.call(null,cljs.core.chunk_rest.call(null,s__293203__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__293205),null);
}
} else {
var item = cljs.core.first.call(null,s__293203__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__293200_$_iter__293202.call(null,cljs.core.rest.call(null,s__293203__$2)));
}
} else {
return null;
}
break;
}
});})(s__293201__$1,vec__293207,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__293201__$1,vec__293207,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__293200.call(null,cljs.core.rest.call(null,s__293201__$1)));
} else {
var G__293312 = cljs.core.rest.call(null,s__293201__$1);
s__293201__$1 = G__293312;
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
var args293317 = [];
var len__36260__auto___293320 = arguments.length;
var i__36261__auto___293321 = (0);
while(true){
if((i__36261__auto___293321 < len__36260__auto___293320)){
args293317.push((arguments[i__36261__auto___293321]));

var G__293322 = (i__36261__auto___293321 + (1));
i__36261__auto___293321 = G__293322;
continue;
} else {
}
break;
}

var G__293319 = args293317.length;
switch (G__293319) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args293317.length)].join('')));

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
var len__36260__auto___293331 = arguments.length;
var i__36261__auto___293332 = (0);
while(true){
if((i__36261__auto___293332 < len__36260__auto___293331)){
args__36267__auto__.push((arguments[i__36261__auto___293332]));

var G__293337 = (i__36261__auto___293332 + (1));
i__36261__auto___293332 = G__293337;
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
var G__293342 = cljs.core.nnext.call(null,in$);
var G__293343 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__293342;
out = G__293343;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq293330){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq293330));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__36267__auto__ = [];
var len__36260__auto___293346 = arguments.length;
var i__36261__auto___293349 = (0);
while(true){
if((i__36261__auto___293349 < len__36260__auto___293346)){
args__36267__auto__.push((arguments[i__36261__auto___293349]));

var G__293351 = (i__36261__auto___293349 + (1));
i__36261__auto___293349 = G__293351;
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
var G__293352 = cljs.core.nnext.call(null,in$);
var G__293353 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__293352;
out = G__293353;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq293344){
var G__293345 = cljs.core.first.call(null,seq293344);
var seq293344__$1 = cljs.core.next.call(null,seq293344);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__293345,seq293344__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__36267__auto__ = [];
var len__36260__auto___293356 = arguments.length;
var i__36261__auto___293357 = (0);
while(true){
if((i__36261__auto___293357 < len__36260__auto___293356)){
args__36267__auto__.push((arguments[i__36261__auto___293357]));

var G__293358 = (i__36261__auto___293357 + (1));
i__36261__auto___293357 = G__293358;
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
var G__293363 = cljs.core.nnext.call(null,in$);
var G__293364 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__293363;
out = G__293364;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq293354){
var G__293355 = cljs.core.first.call(null,seq293354);
var seq293354__$1 = cljs.core.next.call(null,seq293354);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(G__293355,seq293354__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__36267__auto__ = [];
var len__36260__auto___293388 = arguments.length;
var i__36261__auto___293389 = (0);
while(true){
if((i__36261__auto___293389 < len__36260__auto___293388)){
args__36267__auto__.push((arguments[i__36261__auto___293389]));

var G__293391 = (i__36261__auto___293389 + (1));
i__36261__auto___293389 = G__293391;
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
var G__293394 = cljs.core.nnext.call(null,in$);
var G__293395 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__293394;
out = G__293395;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq293365){
var G__293366 = cljs.core.first.call(null,seq293365);
var seq293365__$1 = cljs.core.next.call(null,seq293365);
var G__293367 = cljs.core.first.call(null,seq293365__$1);
var seq293365__$2 = cljs.core.next.call(null,seq293365__$1);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic(G__293366,G__293367,seq293365__$2);
});

//# sourceMappingURL=priority_map.js.map?rel=1459068551603