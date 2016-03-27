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
return (function tailrecursion$priority_map$iter__283313(s__283314){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__283314__$1 = s__283314;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__283314__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__283323 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__283323,(0),null);
var item_set = cljs.core.nth.call(null,vec__283323,(1),null);
var iterys__35967__auto__ = ((function (s__283314__$1,vec__283323,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__283313_$_iter__283315(s__283316){
return (new cljs.core.LazySeq(null,((function (s__283314__$1,vec__283323,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__283316__$1 = s__283316;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__283316__$1);
if(temp__4657__auto____$1){
var s__283316__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__283316__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__283316__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__283318 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__283317 = (0);
while(true){
if((i__283317 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__283317);
cljs.core.chunk_append.call(null,b__283318,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__283453 = (i__283317 + (1));
i__283317 = G__283453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283318),tailrecursion$priority_map$iter__283313_$_iter__283315.call(null,cljs.core.chunk_rest.call(null,s__283316__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283318),null);
}
} else {
var item = cljs.core.first.call(null,s__283316__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__283313_$_iter__283315.call(null,cljs.core.rest.call(null,s__283316__$2)));
}
} else {
return null;
}
break;
}
});})(s__283314__$1,vec__283323,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__283314__$1,vec__283323,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__283313.call(null,cljs.core.rest.call(null,s__283314__$1)));
} else {
var G__283460 = cljs.core.rest.call(null,s__283314__$1);
s__283314__$1 = G__283460;
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
return (function tailrecursion$priority_map$iter__283327(s__283328){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__283328__$1 = s__283328;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__283328__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__283341 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__283341,(0),null);
var item_set = cljs.core.nth.call(null,vec__283341,(1),null);
var iterys__35967__auto__ = ((function (s__283328__$1,vec__283341,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__283327_$_iter__283329(s__283330){
return (new cljs.core.LazySeq(null,((function (s__283328__$1,vec__283341,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__283330__$1 = s__283330;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__283330__$1);
if(temp__4657__auto____$1){
var s__283330__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__283330__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__283330__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__283332 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__283331 = (0);
while(true){
if((i__283331 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__283331);
cljs.core.chunk_append.call(null,b__283332,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__283461 = (i__283331 + (1));
i__283331 = G__283461;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283332),tailrecursion$priority_map$iter__283327_$_iter__283329.call(null,cljs.core.chunk_rest.call(null,s__283330__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283332),null);
}
} else {
var item = cljs.core.first.call(null,s__283330__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__283327_$_iter__283329.call(null,cljs.core.rest.call(null,s__283330__$2)));
}
} else {
return null;
}
break;
}
});})(s__283328__$1,vec__283341,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__283328__$1,vec__283341,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__283327.call(null,cljs.core.rest.call(null,s__283328__$1)));
} else {
var G__283462 = cljs.core.rest.call(null,s__283328__$1);
s__283328__$1 = G__283462;
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
return (function tailrecursion$priority_map$iter__283348(s__283349){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__283349__$1 = s__283349;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__283349__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__283362 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__283362,(0),null);
var item_set = cljs.core.nth.call(null,vec__283362,(1),null);
var iterys__35967__auto__ = ((function (s__283349__$1,vec__283362,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__283348_$_iter__283350(s__283351){
return (new cljs.core.LazySeq(null,((function (s__283349__$1,vec__283362,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__283351__$1 = s__283351;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__283351__$1);
if(temp__4657__auto____$1){
var s__283351__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__283351__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__283351__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__283353 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__283352 = (0);
while(true){
if((i__283352 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__283352);
cljs.core.chunk_append.call(null,b__283353,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__283475 = (i__283352 + (1));
i__283352 = G__283475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283353),tailrecursion$priority_map$iter__283348_$_iter__283350.call(null,cljs.core.chunk_rest.call(null,s__283351__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283353),null);
}
} else {
var item = cljs.core.first.call(null,s__283351__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__283348_$_iter__283350.call(null,cljs.core.rest.call(null,s__283351__$2)));
}
} else {
return null;
}
break;
}
});})(s__283349__$1,vec__283362,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__283349__$1,vec__283362,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__283348.call(null,cljs.core.rest.call(null,s__283349__$1)));
} else {
var G__283476 = cljs.core.rest.call(null,s__283349__$1);
s__283349__$1 = G__283476;
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
return (function tailrecursion$priority_map$iter__283369(s__283370){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__283370__$1 = s__283370;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__283370__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__283379 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__283379,(0),null);
var item_set = cljs.core.nth.call(null,vec__283379,(1),null);
var iterys__35967__auto__ = ((function (s__283370__$1,vec__283379,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__283369_$_iter__283371(s__283372){
return (new cljs.core.LazySeq(null,((function (s__283370__$1,vec__283379,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__283372__$1 = s__283372;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__283372__$1);
if(temp__4657__auto____$1){
var s__283372__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__283372__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__283372__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__283374 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__283373 = (0);
while(true){
if((i__283373 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__283373);
cljs.core.chunk_append.call(null,b__283374,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__283479 = (i__283373 + (1));
i__283373 = G__283479;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283374),tailrecursion$priority_map$iter__283369_$_iter__283371.call(null,cljs.core.chunk_rest.call(null,s__283372__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283374),null);
}
} else {
var item = cljs.core.first.call(null,s__283372__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__283369_$_iter__283371.call(null,cljs.core.rest.call(null,s__283372__$2)));
}
} else {
return null;
}
break;
}
});})(s__283370__$1,vec__283379,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__283370__$1,vec__283379,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__283369.call(null,cljs.core.rest.call(null,s__283370__$1)));
} else {
var G__283483 = cljs.core.rest.call(null,s__283370__$1);
s__283370__$1 = G__283483;
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
var G__283489 = null;
var G__283489__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__283489__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__283489 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__283489__2.call(this,self__,item);
case 3:
return G__283489__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__283489.cljs$core$IFn$_invoke$arity$2 = G__283489__2;
G__283489.cljs$core$IFn$_invoke$arity$3 = G__283489__3;
return G__283489;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args283307){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args283307)));
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
return (function tailrecursion$priority_map$iter__283394(s__283395){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__283395__$1 = s__283395;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__283395__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__283408 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__283408,(0),null);
var item_set = cljs.core.nth.call(null,vec__283408,(1),null);
var iterys__35967__auto__ = ((function (s__283395__$1,vec__283408,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__283394_$_iter__283396(s__283397){
return (new cljs.core.LazySeq(null,((function (s__283395__$1,vec__283408,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__283397__$1 = s__283397;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__283397__$1);
if(temp__4657__auto____$1){
var s__283397__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__283397__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__283397__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__283399 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__283398 = (0);
while(true){
if((i__283398 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__283398);
cljs.core.chunk_append.call(null,b__283399,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__283511 = (i__283398 + (1));
i__283398 = G__283511;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283399),tailrecursion$priority_map$iter__283394_$_iter__283396.call(null,cljs.core.chunk_rest.call(null,s__283397__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283399),null);
}
} else {
var item = cljs.core.first.call(null,s__283397__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__283394_$_iter__283396.call(null,cljs.core.rest.call(null,s__283397__$2)));
}
} else {
return null;
}
break;
}
});})(s__283395__$1,vec__283408,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__283395__$1,vec__283408,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__283394.call(null,cljs.core.rest.call(null,s__283395__$1)));
} else {
var G__283512 = cljs.core.rest.call(null,s__283395__$1);
s__283395__$1 = G__283512;
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
return (function tailrecursion$priority_map$iter__283413(s__283414){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__283414__$1 = s__283414;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__283414__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__283429 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__283429,(0),null);
var item_set = cljs.core.nth.call(null,vec__283429,(1),null);
var iterys__35967__auto__ = ((function (s__283414__$1,vec__283429,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__283413_$_iter__283415(s__283416){
return (new cljs.core.LazySeq(null,((function (s__283414__$1,vec__283429,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__283416__$1 = s__283416;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__283416__$1);
if(temp__4657__auto____$1){
var s__283416__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__283416__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__283416__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__283418 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__283417 = (0);
while(true){
if((i__283417 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__283417);
cljs.core.chunk_append.call(null,b__283418,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__283513 = (i__283417 + (1));
i__283417 = G__283513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283418),tailrecursion$priority_map$iter__283413_$_iter__283415.call(null,cljs.core.chunk_rest.call(null,s__283416__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__283418),null);
}
} else {
var item = cljs.core.first.call(null,s__283416__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__283413_$_iter__283415.call(null,cljs.core.rest.call(null,s__283416__$2)));
}
} else {
return null;
}
break;
}
});})(s__283414__$1,vec__283429,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__283414__$1,vec__283429,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__283413.call(null,cljs.core.rest.call(null,s__283414__$1)));
} else {
var G__283514 = cljs.core.rest.call(null,s__283414__$1);
s__283414__$1 = G__283514;
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
var args283516 = [];
var len__36260__auto___283522 = arguments.length;
var i__36261__auto___283523 = (0);
while(true){
if((i__36261__auto___283523 < len__36260__auto___283522)){
args283516.push((arguments[i__36261__auto___283523]));

var G__283526 = (i__36261__auto___283523 + (1));
i__36261__auto___283523 = G__283526;
continue;
} else {
}
break;
}

var G__283520 = args283516.length;
switch (G__283520) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args283516.length)].join('')));

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
var len__36260__auto___283538 = arguments.length;
var i__36261__auto___283539 = (0);
while(true){
if((i__36261__auto___283539 < len__36260__auto___283538)){
args__36267__auto__.push((arguments[i__36261__auto___283539]));

var G__283540 = (i__36261__auto___283539 + (1));
i__36261__auto___283539 = G__283540;
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
var G__283544 = cljs.core.nnext.call(null,in$);
var G__283545 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__283544;
out = G__283545;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq283532){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq283532));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__36267__auto__ = [];
var len__36260__auto___283548 = arguments.length;
var i__36261__auto___283553 = (0);
while(true){
if((i__36261__auto___283553 < len__36260__auto___283548)){
args__36267__auto__.push((arguments[i__36261__auto___283553]));

var G__283554 = (i__36261__auto___283553 + (1));
i__36261__auto___283553 = G__283554;
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
var G__283555 = cljs.core.nnext.call(null,in$);
var G__283556 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__283555;
out = G__283556;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq283546){
var G__283547 = cljs.core.first.call(null,seq283546);
var seq283546__$1 = cljs.core.next.call(null,seq283546);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__283547,seq283546__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__36267__auto__ = [];
var len__36260__auto___283570 = arguments.length;
var i__36261__auto___283571 = (0);
while(true){
if((i__36261__auto___283571 < len__36260__auto___283570)){
args__36267__auto__.push((arguments[i__36261__auto___283571]));

var G__283573 = (i__36261__auto___283571 + (1));
i__36261__auto___283571 = G__283573;
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
var G__283578 = cljs.core.nnext.call(null,in$);
var G__283579 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__283578;
out = G__283579;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq283565){
var G__283566 = cljs.core.first.call(null,seq283565);
var seq283565__$1 = cljs.core.next.call(null,seq283565);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(G__283566,seq283565__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__36267__auto__ = [];
var len__36260__auto___283593 = arguments.length;
var i__36261__auto___283594 = (0);
while(true){
if((i__36261__auto___283594 < len__36260__auto___283593)){
args__36267__auto__.push((arguments[i__36261__auto___283594]));

var G__283596 = (i__36261__auto___283594 + (1));
i__36261__auto___283594 = G__283596;
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
var G__283599 = cljs.core.nnext.call(null,in$);
var G__283600 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__283599;
out = G__283600;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq283584){
var G__283585 = cljs.core.first.call(null,seq283584);
var seq283584__$1 = cljs.core.next.call(null,seq283584);
var G__283586 = cljs.core.first.call(null,seq283584__$1);
var seq283584__$2 = cljs.core.next.call(null,seq283584__$1);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic(G__283585,G__283586,seq283584__$2);
});
