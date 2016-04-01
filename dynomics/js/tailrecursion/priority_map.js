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
return cljs.core.seq.call(null,(function (){var iter__36202__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__67447(s__67448){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__67448__$1 = s__67448;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__67448__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__67454 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__67454,(0),null);
var item_set = cljs.core.nth.call(null,vec__67454,(1),null);
var iterys__36198__auto__ = ((function (s__67448__$1,vec__67454,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__67447_$_iter__67449(s__67450){
return (new cljs.core.LazySeq(null,((function (s__67448__$1,vec__67454,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__67450__$1 = s__67450;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__67450__$1);
if(temp__4657__auto____$1){
var s__67450__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67450__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__67450__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__67452 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__67451 = (0);
while(true){
if((i__67451 < size__36201__auto__)){
var item = cljs.core._nth.call(null,c__36200__auto__,i__67451);
cljs.core.chunk_append.call(null,b__67452,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__67495 = (i__67451 + (1));
i__67451 = G__67495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67452),tailrecursion$priority_map$iter__67447_$_iter__67449.call(null,cljs.core.chunk_rest.call(null,s__67450__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67452),null);
}
} else {
var item = cljs.core.first.call(null,s__67450__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__67447_$_iter__67449.call(null,cljs.core.rest.call(null,s__67450__$2)));
}
} else {
return null;
}
break;
}
});})(s__67448__$1,vec__67454,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__67448__$1,vec__67454,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,item_set));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,tailrecursion$priority_map$iter__67447.call(null,cljs.core.rest.call(null,s__67448__$1)));
} else {
var G__67496 = cljs.core.rest.call(null,s__67448__$1);
s__67448__$1 = G__67496;
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
return iter__36202__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__36202__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__67455(s__67456){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__67456__$1 = s__67456;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__67456__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__67462 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__67462,(0),null);
var item_set = cljs.core.nth.call(null,vec__67462,(1),null);
var iterys__36198__auto__ = ((function (s__67456__$1,vec__67462,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__67455_$_iter__67457(s__67458){
return (new cljs.core.LazySeq(null,((function (s__67456__$1,vec__67462,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__67458__$1 = s__67458;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__67458__$1);
if(temp__4657__auto____$1){
var s__67458__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67458__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__67458__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__67460 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__67459 = (0);
while(true){
if((i__67459 < size__36201__auto__)){
var item = cljs.core._nth.call(null,c__36200__auto__,i__67459);
cljs.core.chunk_append.call(null,b__67460,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__67497 = (i__67459 + (1));
i__67459 = G__67497;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67460),tailrecursion$priority_map$iter__67455_$_iter__67457.call(null,cljs.core.chunk_rest.call(null,s__67458__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67460),null);
}
} else {
var item = cljs.core.first.call(null,s__67458__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__67455_$_iter__67457.call(null,cljs.core.rest.call(null,s__67458__$2)));
}
} else {
return null;
}
break;
}
});})(s__67456__$1,vec__67462,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__67456__$1,vec__67462,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,item_set));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,tailrecursion$priority_map$iter__67455.call(null,cljs.core.rest.call(null,s__67456__$1)));
} else {
var G__67498 = cljs.core.rest.call(null,s__67456__$1);
s__67456__$1 = G__67498;
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
return iter__36202__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__35857__auto__ = self__.__hash;
if(!((h__35857__auto__ == null))){
return h__35857__auto__;
} else {
var h__35857__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);
self__.__hash = h__35857__auto____$1;

return h__35857__auto____$1;
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
return cljs.core.seq.call(null,(function (){var iter__36202__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__67463(s__67464){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__67464__$1 = s__67464;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__67464__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__67470 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__67470,(0),null);
var item_set = cljs.core.nth.call(null,vec__67470,(1),null);
var iterys__36198__auto__ = ((function (s__67464__$1,vec__67470,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__67463_$_iter__67465(s__67466){
return (new cljs.core.LazySeq(null,((function (s__67464__$1,vec__67470,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__67466__$1 = s__67466;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__67466__$1);
if(temp__4657__auto____$1){
var s__67466__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67466__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__67466__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__67468 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__67467 = (0);
while(true){
if((i__67467 < size__36201__auto__)){
var item = cljs.core._nth.call(null,c__36200__auto__,i__67467);
cljs.core.chunk_append.call(null,b__67468,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__67499 = (i__67467 + (1));
i__67467 = G__67499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67468),tailrecursion$priority_map$iter__67463_$_iter__67465.call(null,cljs.core.chunk_rest.call(null,s__67466__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67468),null);
}
} else {
var item = cljs.core.first.call(null,s__67466__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__67463_$_iter__67465.call(null,cljs.core.rest.call(null,s__67466__$2)));
}
} else {
return null;
}
break;
}
});})(s__67464__$1,vec__67470,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__67464__$1,vec__67470,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,item_set));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,tailrecursion$priority_map$iter__67463.call(null,cljs.core.rest.call(null,s__67464__$1)));
} else {
var G__67500 = cljs.core.rest.call(null,s__67464__$1);
s__67464__$1 = G__67500;
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
return iter__36202__auto__.call(null,self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__36202__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__67471(s__67472){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__67472__$1 = s__67472;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__67472__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__67478 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__67478,(0),null);
var item_set = cljs.core.nth.call(null,vec__67478,(1),null);
var iterys__36198__auto__ = ((function (s__67472__$1,vec__67478,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__67471_$_iter__67473(s__67474){
return (new cljs.core.LazySeq(null,((function (s__67472__$1,vec__67478,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__67474__$1 = s__67474;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__67474__$1);
if(temp__4657__auto____$1){
var s__67474__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67474__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__67474__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__67476 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__67475 = (0);
while(true){
if((i__67475 < size__36201__auto__)){
var item = cljs.core._nth.call(null,c__36200__auto__,i__67475);
cljs.core.chunk_append.call(null,b__67476,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__67501 = (i__67475 + (1));
i__67475 = G__67501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67476),tailrecursion$priority_map$iter__67471_$_iter__67473.call(null,cljs.core.chunk_rest.call(null,s__67474__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67476),null);
}
} else {
var item = cljs.core.first.call(null,s__67474__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__67471_$_iter__67473.call(null,cljs.core.rest.call(null,s__67474__$2)));
}
} else {
return null;
}
break;
}
});})(s__67472__$1,vec__67478,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__67472__$1,vec__67478,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,item_set));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,tailrecursion$priority_map$iter__67471.call(null,cljs.core.rest.call(null,s__67472__$1)));
} else {
var G__67502 = cljs.core.rest.call(null,s__67472__$1);
s__67472__$1 = G__67502;
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
return iter__36202__auto__.call(null,self__.priority__GT_set_of_items);
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
var G__67503 = null;
var G__67503__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__67503__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__67503 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__67503__2.call(this,self__,item);
case 3:
return G__67503__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__67503.cljs$core$IFn$_invoke$arity$2 = G__67503__2;
G__67503.cljs$core$IFn$_invoke$arity$3 = G__67503__3;
return G__67503;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args67446){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args67446)));
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
return cljs.core.seq.call(null,(function (){var iter__36202__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__67479(s__67480){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__67480__$1 = s__67480;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__67480__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__67486 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__67486,(0),null);
var item_set = cljs.core.nth.call(null,vec__67486,(1),null);
var iterys__36198__auto__ = ((function (s__67480__$1,vec__67486,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__67479_$_iter__67481(s__67482){
return (new cljs.core.LazySeq(null,((function (s__67480__$1,vec__67486,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__67482__$1 = s__67482;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__67482__$1);
if(temp__4657__auto____$1){
var s__67482__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67482__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__67482__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__67484 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__67483 = (0);
while(true){
if((i__67483 < size__36201__auto__)){
var item = cljs.core._nth.call(null,c__36200__auto__,i__67483);
cljs.core.chunk_append.call(null,b__67484,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__67504 = (i__67483 + (1));
i__67483 = G__67504;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67484),tailrecursion$priority_map$iter__67479_$_iter__67481.call(null,cljs.core.chunk_rest.call(null,s__67482__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67484),null);
}
} else {
var item = cljs.core.first.call(null,s__67482__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__67479_$_iter__67481.call(null,cljs.core.rest.call(null,s__67482__$2)));
}
} else {
return null;
}
break;
}
});})(s__67480__$1,vec__67486,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__67480__$1,vec__67486,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,item_set));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,tailrecursion$priority_map$iter__67479.call(null,cljs.core.rest.call(null,s__67480__$1)));
} else {
var G__67505 = cljs.core.rest.call(null,s__67480__$1);
s__67480__$1 = G__67505;
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
return iter__36202__auto__.call(null,sets);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__36202__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__67487(s__67488){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__67488__$1 = s__67488;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__67488__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__67494 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__67494,(0),null);
var item_set = cljs.core.nth.call(null,vec__67494,(1),null);
var iterys__36198__auto__ = ((function (s__67488__$1,vec__67494,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__67487_$_iter__67489(s__67490){
return (new cljs.core.LazySeq(null,((function (s__67488__$1,vec__67494,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__67490__$1 = s__67490;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__67490__$1);
if(temp__4657__auto____$1){
var s__67490__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67490__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__67490__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__67492 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__67491 = (0);
while(true){
if((i__67491 < size__36201__auto__)){
var item = cljs.core._nth.call(null,c__36200__auto__,i__67491);
cljs.core.chunk_append.call(null,b__67492,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__67506 = (i__67491 + (1));
i__67491 = G__67506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67492),tailrecursion$priority_map$iter__67487_$_iter__67489.call(null,cljs.core.chunk_rest.call(null,s__67490__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67492),null);
}
} else {
var item = cljs.core.first.call(null,s__67490__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__67487_$_iter__67489.call(null,cljs.core.rest.call(null,s__67490__$2)));
}
} else {
return null;
}
break;
}
});})(s__67488__$1,vec__67494,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__67488__$1,vec__67494,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,item_set));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,tailrecursion$priority_map$iter__67487.call(null,cljs.core.rest.call(null,s__67488__$1)));
} else {
var G__67507 = cljs.core.rest.call(null,s__67488__$1);
s__67488__$1 = G__67507;
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
return iter__36202__auto__.call(null,sets);
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

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var args67508 = [];
var len__36491__auto___67511 = arguments.length;
var i__36492__auto___67512 = (0);
while(true){
if((i__36492__auto___67512 < len__36491__auto___67511)){
args67508.push((arguments[i__36492__auto___67512]));

var G__67513 = (i__36492__auto___67512 + (1));
i__36492__auto___67512 = G__67513;
continue;
} else {
}
break;
}

var G__67510 = args67508.length;
switch (G__67510) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67508.length)].join('')));

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
var args__36498__auto__ = [];
var len__36491__auto___67516 = arguments.length;
var i__36492__auto___67517 = (0);
while(true){
if((i__36492__auto___67517 < len__36491__auto___67516)){
args__36498__auto__.push((arguments[i__36492__auto___67517]));

var G__67518 = (i__36492__auto___67517 + (1));
i__36492__auto___67517 = G__67518;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((0) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((0)),(0),null)):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__36499__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__67519 = cljs.core.nnext.call(null,in$);
var G__67520 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__67519;
out = G__67520;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq67515){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67515));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__36498__auto__ = [];
var len__36491__auto___67523 = arguments.length;
var i__36492__auto___67524 = (0);
while(true){
if((i__36492__auto___67524 < len__36491__auto___67523)){
args__36498__auto__.push((arguments[i__36492__auto___67524]));

var G__67525 = (i__36492__auto___67524 + (1));
i__36492__auto___67524 = G__67525;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);
while(true){
if(in$){
var G__67526 = cljs.core.nnext.call(null,in$);
var G__67527 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__67526;
out = G__67527;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq67521){
var G__67522 = cljs.core.first.call(null,seq67521);
var seq67521__$1 = cljs.core.next.call(null,seq67521);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__67522,seq67521__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__36498__auto__ = [];
var len__36491__auto___67530 = arguments.length;
var i__36492__auto___67531 = (0);
while(true){
if((i__36492__auto___67531 < len__36491__auto___67530)){
args__36498__auto__.push((arguments[i__36492__auto___67531]));

var G__67532 = (i__36492__auto___67531 + (1));
i__36492__auto___67531 = G__67532;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn);
while(true){
if(in$){
var G__67533 = cljs.core.nnext.call(null,in$);
var G__67534 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__67533;
out = G__67534;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq67528){
var G__67529 = cljs.core.first.call(null,seq67528);
var seq67528__$1 = cljs.core.next.call(null,seq67528);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(G__67529,seq67528__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__36498__auto__ = [];
var len__36491__auto___67538 = arguments.length;
var i__36492__auto___67539 = (0);
while(true){
if((i__36492__auto___67539 < len__36491__auto___67538)){
args__36498__auto__.push((arguments[i__36492__auto___67539]));

var G__67540 = (i__36492__auto___67539 + (1));
i__36492__auto___67539 = G__67540;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((2) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((2)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36499__auto__);
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn,comparator);
while(true){
if(in$){
var G__67541 = cljs.core.nnext.call(null,in$);
var G__67542 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__67541;
out = G__67542;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq67535){
var G__67536 = cljs.core.first.call(null,seq67535);
var seq67535__$1 = cljs.core.next.call(null,seq67535);
var G__67537 = cljs.core.first.call(null,seq67535__$1);
var seq67535__$2 = cljs.core.next.call(null,seq67535__$1);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic(G__67536,G__67537,seq67535__$2);
});

//# sourceMappingURL=priority_map.js.map?rel=1459533430424