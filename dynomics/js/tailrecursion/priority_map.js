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
return (function tailrecursion$priority_map$iter__85682(s__85683){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__85683__$1 = s__85683;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__85683__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__85705 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__85705,(0),null);
var item_set = cljs.core.nth.call(null,vec__85705,(1),null);
var iterys__36198__auto__ = ((function (s__85683__$1,vec__85705,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__85682_$_iter__85684(s__85685){
return (new cljs.core.LazySeq(null,((function (s__85683__$1,vec__85705,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__85685__$1 = s__85685;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__85685__$1);
if(temp__4657__auto____$1){
var s__85685__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85685__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__85685__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__85687 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__85686 = (0);
while(true){
if((i__85686 < size__36201__auto__)){
var item = cljs.core._nth.call(null,c__36200__auto__,i__85686);
cljs.core.chunk_append.call(null,b__85687,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__85874 = (i__85686 + (1));
i__85686 = G__85874;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85687),tailrecursion$priority_map$iter__85682_$_iter__85684.call(null,cljs.core.chunk_rest.call(null,s__85685__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85687),null);
}
} else {
var item = cljs.core.first.call(null,s__85685__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__85682_$_iter__85684.call(null,cljs.core.rest.call(null,s__85685__$2)));
}
} else {
return null;
}
break;
}
});})(s__85683__$1,vec__85705,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__85683__$1,vec__85705,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,item_set));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,tailrecursion$priority_map$iter__85682.call(null,cljs.core.rest.call(null,s__85683__$1)));
} else {
var G__85880 = cljs.core.rest.call(null,s__85683__$1);
s__85683__$1 = G__85880;
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
return (function tailrecursion$priority_map$iter__85709(s__85710){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__85710__$1 = s__85710;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__85710__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__85716 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__85716,(0),null);
var item_set = cljs.core.nth.call(null,vec__85716,(1),null);
var iterys__36198__auto__ = ((function (s__85710__$1,vec__85716,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__85709_$_iter__85711(s__85712){
return (new cljs.core.LazySeq(null,((function (s__85710__$1,vec__85716,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__85712__$1 = s__85712;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__85712__$1);
if(temp__4657__auto____$1){
var s__85712__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85712__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__85712__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__85714 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__85713 = (0);
while(true){
if((i__85713 < size__36201__auto__)){
var item = cljs.core._nth.call(null,c__36200__auto__,i__85713);
cljs.core.chunk_append.call(null,b__85714,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__85888 = (i__85713 + (1));
i__85713 = G__85888;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85714),tailrecursion$priority_map$iter__85709_$_iter__85711.call(null,cljs.core.chunk_rest.call(null,s__85712__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85714),null);
}
} else {
var item = cljs.core.first.call(null,s__85712__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__85709_$_iter__85711.call(null,cljs.core.rest.call(null,s__85712__$2)));
}
} else {
return null;
}
break;
}
});})(s__85710__$1,vec__85716,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__85710__$1,vec__85716,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,item_set));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,tailrecursion$priority_map$iter__85709.call(null,cljs.core.rest.call(null,s__85710__$1)));
} else {
var G__85892 = cljs.core.rest.call(null,s__85710__$1);
s__85710__$1 = G__85892;
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
return (function tailrecursion$priority_map$iter__85729(s__85730){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__85730__$1 = s__85730;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__85730__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__85739 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__85739,(0),null);
var item_set = cljs.core.nth.call(null,vec__85739,(1),null);
var iterys__36198__auto__ = ((function (s__85730__$1,vec__85739,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__85729_$_iter__85731(s__85732){
return (new cljs.core.LazySeq(null,((function (s__85730__$1,vec__85739,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__85732__$1 = s__85732;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__85732__$1);
if(temp__4657__auto____$1){
var s__85732__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85732__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__85732__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__85734 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__85733 = (0);
while(true){
if((i__85733 < size__36201__auto__)){
var item = cljs.core._nth.call(null,c__36200__auto__,i__85733);
cljs.core.chunk_append.call(null,b__85734,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__85905 = (i__85733 + (1));
i__85733 = G__85905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85734),tailrecursion$priority_map$iter__85729_$_iter__85731.call(null,cljs.core.chunk_rest.call(null,s__85732__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85734),null);
}
} else {
var item = cljs.core.first.call(null,s__85732__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__85729_$_iter__85731.call(null,cljs.core.rest.call(null,s__85732__$2)));
}
} else {
return null;
}
break;
}
});})(s__85730__$1,vec__85739,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__85730__$1,vec__85739,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,item_set));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,tailrecursion$priority_map$iter__85729.call(null,cljs.core.rest.call(null,s__85730__$1)));
} else {
var G__85908 = cljs.core.rest.call(null,s__85730__$1);
s__85730__$1 = G__85908;
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
return (function tailrecursion$priority_map$iter__85752(s__85753){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__85753__$1 = s__85753;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__85753__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__85769 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__85769,(0),null);
var item_set = cljs.core.nth.call(null,vec__85769,(1),null);
var iterys__36198__auto__ = ((function (s__85753__$1,vec__85769,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__85752_$_iter__85754(s__85755){
return (new cljs.core.LazySeq(null,((function (s__85753__$1,vec__85769,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__85755__$1 = s__85755;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__85755__$1);
if(temp__4657__auto____$1){
var s__85755__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85755__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__85755__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__85757 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__85756 = (0);
while(true){
if((i__85756 < size__36201__auto__)){
var item = cljs.core._nth.call(null,c__36200__auto__,i__85756);
cljs.core.chunk_append.call(null,b__85757,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__85916 = (i__85756 + (1));
i__85756 = G__85916;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85757),tailrecursion$priority_map$iter__85752_$_iter__85754.call(null,cljs.core.chunk_rest.call(null,s__85755__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85757),null);
}
} else {
var item = cljs.core.first.call(null,s__85755__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__85752_$_iter__85754.call(null,cljs.core.rest.call(null,s__85755__$2)));
}
} else {
return null;
}
break;
}
});})(s__85753__$1,vec__85769,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__85753__$1,vec__85769,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,item_set));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,tailrecursion$priority_map$iter__85752.call(null,cljs.core.rest.call(null,s__85753__$1)));
} else {
var G__85920 = cljs.core.rest.call(null,s__85753__$1);
s__85753__$1 = G__85920;
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
var G__85924 = null;
var G__85924__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__85924__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__85924 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__85924__2.call(this,self__,item);
case 3:
return G__85924__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__85924.cljs$core$IFn$_invoke$arity$2 = G__85924__2;
G__85924.cljs$core$IFn$_invoke$arity$3 = G__85924__3;
return G__85924;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args85678){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args85678)));
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
return (function tailrecursion$priority_map$iter__85785(s__85787){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__85787__$1 = s__85787;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__85787__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__85809 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__85809,(0),null);
var item_set = cljs.core.nth.call(null,vec__85809,(1),null);
var iterys__36198__auto__ = ((function (s__85787__$1,vec__85809,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__85785_$_iter__85791(s__85792){
return (new cljs.core.LazySeq(null,((function (s__85787__$1,vec__85809,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__85792__$1 = s__85792;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__85792__$1);
if(temp__4657__auto____$1){
var s__85792__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85792__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__85792__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__85794 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__85793 = (0);
while(true){
if((i__85793 < size__36201__auto__)){
var item = cljs.core._nth.call(null,c__36200__auto__,i__85793);
cljs.core.chunk_append.call(null,b__85794,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__85950 = (i__85793 + (1));
i__85793 = G__85950;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85794),tailrecursion$priority_map$iter__85785_$_iter__85791.call(null,cljs.core.chunk_rest.call(null,s__85792__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85794),null);
}
} else {
var item = cljs.core.first.call(null,s__85792__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__85785_$_iter__85791.call(null,cljs.core.rest.call(null,s__85792__$2)));
}
} else {
return null;
}
break;
}
});})(s__85787__$1,vec__85809,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__85787__$1,vec__85809,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,item_set));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,tailrecursion$priority_map$iter__85785.call(null,cljs.core.rest.call(null,s__85787__$1)));
} else {
var G__85952 = cljs.core.rest.call(null,s__85787__$1);
s__85787__$1 = G__85952;
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
return (function tailrecursion$priority_map$iter__85815(s__85816){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__85816__$1 = s__85816;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__85816__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__85844 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__85844,(0),null);
var item_set = cljs.core.nth.call(null,vec__85844,(1),null);
var iterys__36198__auto__ = ((function (s__85816__$1,vec__85844,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__85815_$_iter__85817(s__85818){
return (new cljs.core.LazySeq(null,((function (s__85816__$1,vec__85844,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__85818__$1 = s__85818;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__85818__$1);
if(temp__4657__auto____$1){
var s__85818__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85818__$2)){
var c__36200__auto__ = cljs.core.chunk_first.call(null,s__85818__$2);
var size__36201__auto__ = cljs.core.count.call(null,c__36200__auto__);
var b__85820 = cljs.core.chunk_buffer.call(null,size__36201__auto__);
if((function (){var i__85819 = (0);
while(true){
if((i__85819 < size__36201__auto__)){
var item = cljs.core._nth.call(null,c__36200__auto__,i__85819);
cljs.core.chunk_append.call(null,b__85820,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__85961 = (i__85819 + (1));
i__85819 = G__85961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85820),tailrecursion$priority_map$iter__85815_$_iter__85817.call(null,cljs.core.chunk_rest.call(null,s__85818__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85820),null);
}
} else {
var item = cljs.core.first.call(null,s__85818__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__85815_$_iter__85817.call(null,cljs.core.rest.call(null,s__85818__$2)));
}
} else {
return null;
}
break;
}
});})(s__85816__$1,vec__85844,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__85816__$1,vec__85844,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__36199__auto__ = cljs.core.seq.call(null,iterys__36198__auto__.call(null,item_set));
if(fs__36199__auto__){
return cljs.core.concat.call(null,fs__36199__auto__,tailrecursion$priority_map$iter__85815.call(null,cljs.core.rest.call(null,s__85816__$1)));
} else {
var G__85962 = cljs.core.rest.call(null,s__85816__$1);
s__85816__$1 = G__85962;
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
var args85963 = [];
var len__36491__auto___85973 = arguments.length;
var i__36492__auto___85974 = (0);
while(true){
if((i__36492__auto___85974 < len__36491__auto___85973)){
args85963.push((arguments[i__36492__auto___85974]));

var G__85975 = (i__36492__auto___85974 + (1));
i__36492__auto___85974 = G__85975;
continue;
} else {
}
break;
}

var G__85965 = args85963.length;
switch (G__85965) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args85963.length)].join('')));

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
var len__36491__auto___85978 = arguments.length;
var i__36492__auto___85979 = (0);
while(true){
if((i__36492__auto___85979 < len__36491__auto___85978)){
args__36498__auto__.push((arguments[i__36492__auto___85979]));

var G__85980 = (i__36492__auto___85979 + (1));
i__36492__auto___85979 = G__85980;
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
var G__85987 = cljs.core.nnext.call(null,in$);
var G__85988 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__85987;
out = G__85988;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq85977){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85977));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__36498__auto__ = [];
var len__36491__auto___85991 = arguments.length;
var i__36492__auto___85992 = (0);
while(true){
if((i__36492__auto___85992 < len__36491__auto___85991)){
args__36498__auto__.push((arguments[i__36492__auto___85992]));

var G__85994 = (i__36492__auto___85992 + (1));
i__36492__auto___85992 = G__85994;
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
var G__85996 = cljs.core.nnext.call(null,in$);
var G__85997 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__85996;
out = G__85997;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq85989){
var G__85990 = cljs.core.first.call(null,seq85989);
var seq85989__$1 = cljs.core.next.call(null,seq85989);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__85990,seq85989__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__36498__auto__ = [];
var len__36491__auto___86010 = arguments.length;
var i__36492__auto___86011 = (0);
while(true){
if((i__36492__auto___86011 < len__36491__auto___86010)){
args__36498__auto__.push((arguments[i__36492__auto___86011]));

var G__86012 = (i__36492__auto___86011 + (1));
i__36492__auto___86011 = G__86012;
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
var G__86013 = cljs.core.nnext.call(null,in$);
var G__86014 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__86013;
out = G__86014;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq86008){
var G__86009 = cljs.core.first.call(null,seq86008);
var seq86008__$1 = cljs.core.next.call(null,seq86008);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(G__86009,seq86008__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__36498__auto__ = [];
var len__36491__auto___86025 = arguments.length;
var i__36492__auto___86026 = (0);
while(true){
if((i__36492__auto___86026 < len__36491__auto___86025)){
args__36498__auto__.push((arguments[i__36492__auto___86026]));

var G__86027 = (i__36492__auto___86026 + (1));
i__36492__auto___86026 = G__86027;
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
var G__86030 = cljs.core.nnext.call(null,in$);
var G__86031 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__86030;
out = G__86031;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq86017){
var G__86018 = cljs.core.first.call(null,seq86017);
var seq86017__$1 = cljs.core.next.call(null,seq86017);
var G__86019 = cljs.core.first.call(null,seq86017__$1);
var seq86017__$2 = cljs.core.next.call(null,seq86017__$1);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic(G__86018,G__86019,seq86017__$2);
});
