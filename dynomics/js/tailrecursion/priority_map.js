// Compiled by ClojureScript 1.7.170 {}
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
return cljs.core.seq.call(null,(function (){var iter__24933__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__375793(s__375794){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__375794__$1 = s__375794;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__375794__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__375800 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__375800,(0),null);
var item_set = cljs.core.nth.call(null,vec__375800,(1),null);
var iterys__24929__auto__ = ((function (s__375794__$1,vec__375800,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__375793_$_iter__375795(s__375796){
return (new cljs.core.LazySeq(null,((function (s__375794__$1,vec__375800,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__375796__$1 = s__375796;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__375796__$1);
if(temp__4425__auto____$1){
var s__375796__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__375796__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__375796__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__375798 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__375797 = (0);
while(true){
if((i__375797 < size__24932__auto__)){
var item = cljs.core._nth.call(null,c__24931__auto__,i__375797);
cljs.core.chunk_append.call(null,b__375798,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__375841 = (i__375797 + (1));
i__375797 = G__375841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375798),tailrecursion$priority_map$iter__375793_$_iter__375795.call(null,cljs.core.chunk_rest.call(null,s__375796__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375798),null);
}
} else {
var item = cljs.core.first.call(null,s__375796__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__375793_$_iter__375795.call(null,cljs.core.rest.call(null,s__375796__$2)));
}
} else {
return null;
}
break;
}
});})(s__375794__$1,vec__375800,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__375794__$1,vec__375800,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,item_set));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,tailrecursion$priority_map$iter__375793.call(null,cljs.core.rest.call(null,s__375794__$1)));
} else {
var G__375842 = cljs.core.rest.call(null,s__375794__$1);
s__375794__$1 = G__375842;
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
return iter__24933__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__24933__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__375801(s__375802){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__375802__$1 = s__375802;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__375802__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__375808 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__375808,(0),null);
var item_set = cljs.core.nth.call(null,vec__375808,(1),null);
var iterys__24929__auto__ = ((function (s__375802__$1,vec__375808,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__375801_$_iter__375803(s__375804){
return (new cljs.core.LazySeq(null,((function (s__375802__$1,vec__375808,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__375804__$1 = s__375804;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__375804__$1);
if(temp__4425__auto____$1){
var s__375804__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__375804__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__375804__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__375806 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__375805 = (0);
while(true){
if((i__375805 < size__24932__auto__)){
var item = cljs.core._nth.call(null,c__24931__auto__,i__375805);
cljs.core.chunk_append.call(null,b__375806,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__375843 = (i__375805 + (1));
i__375805 = G__375843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375806),tailrecursion$priority_map$iter__375801_$_iter__375803.call(null,cljs.core.chunk_rest.call(null,s__375804__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375806),null);
}
} else {
var item = cljs.core.first.call(null,s__375804__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__375801_$_iter__375803.call(null,cljs.core.rest.call(null,s__375804__$2)));
}
} else {
return null;
}
break;
}
});})(s__375802__$1,vec__375808,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__375802__$1,vec__375808,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,item_set));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,tailrecursion$priority_map$iter__375801.call(null,cljs.core.rest.call(null,s__375802__$1)));
} else {
var G__375844 = cljs.core.rest.call(null,s__375802__$1);
s__375802__$1 = G__375844;
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
return iter__24933__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__24596__auto__ = self__.__hash;
if(!((h__24596__auto__ == null))){
return h__24596__auto__;
} else {
var h__24596__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);
self__.__hash = h__24596__auto____$1;

return h__24596__auto____$1;
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
var temp__4423__auto__ = cljs.core.get.call(null,self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__4423__auto__)){
var current_priority = temp__4423__auto__;
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
return cljs.core.seq.call(null,(function (){var iter__24933__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__375809(s__375810){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__375810__$1 = s__375810;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__375810__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__375816 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__375816,(0),null);
var item_set = cljs.core.nth.call(null,vec__375816,(1),null);
var iterys__24929__auto__ = ((function (s__375810__$1,vec__375816,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__375809_$_iter__375811(s__375812){
return (new cljs.core.LazySeq(null,((function (s__375810__$1,vec__375816,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__375812__$1 = s__375812;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__375812__$1);
if(temp__4425__auto____$1){
var s__375812__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__375812__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__375812__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__375814 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__375813 = (0);
while(true){
if((i__375813 < size__24932__auto__)){
var item = cljs.core._nth.call(null,c__24931__auto__,i__375813);
cljs.core.chunk_append.call(null,b__375814,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__375845 = (i__375813 + (1));
i__375813 = G__375845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375814),tailrecursion$priority_map$iter__375809_$_iter__375811.call(null,cljs.core.chunk_rest.call(null,s__375812__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375814),null);
}
} else {
var item = cljs.core.first.call(null,s__375812__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__375809_$_iter__375811.call(null,cljs.core.rest.call(null,s__375812__$2)));
}
} else {
return null;
}
break;
}
});})(s__375810__$1,vec__375816,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__375810__$1,vec__375816,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,item_set));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,tailrecursion$priority_map$iter__375809.call(null,cljs.core.rest.call(null,s__375810__$1)));
} else {
var G__375846 = cljs.core.rest.call(null,s__375810__$1);
s__375810__$1 = G__375846;
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
return iter__24933__auto__.call(null,self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__24933__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__375817(s__375818){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__375818__$1 = s__375818;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__375818__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__375824 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__375824,(0),null);
var item_set = cljs.core.nth.call(null,vec__375824,(1),null);
var iterys__24929__auto__ = ((function (s__375818__$1,vec__375824,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__375817_$_iter__375819(s__375820){
return (new cljs.core.LazySeq(null,((function (s__375818__$1,vec__375824,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__375820__$1 = s__375820;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__375820__$1);
if(temp__4425__auto____$1){
var s__375820__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__375820__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__375820__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__375822 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__375821 = (0);
while(true){
if((i__375821 < size__24932__auto__)){
var item = cljs.core._nth.call(null,c__24931__auto__,i__375821);
cljs.core.chunk_append.call(null,b__375822,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__375847 = (i__375821 + (1));
i__375821 = G__375847;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375822),tailrecursion$priority_map$iter__375817_$_iter__375819.call(null,cljs.core.chunk_rest.call(null,s__375820__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375822),null);
}
} else {
var item = cljs.core.first.call(null,s__375820__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__375817_$_iter__375819.call(null,cljs.core.rest.call(null,s__375820__$2)));
}
} else {
return null;
}
break;
}
});})(s__375818__$1,vec__375824,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__375818__$1,vec__375824,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,item_set));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,tailrecursion$priority_map$iter__375817.call(null,cljs.core.rest.call(null,s__375818__$1)));
} else {
var G__375848 = cljs.core.rest.call(null,s__375818__$1);
s__375818__$1 = G__375848;
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
return iter__24933__auto__.call(null,self__.priority__GT_set_of_items);
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
var G__375849 = null;
var G__375849__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__375849__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__375849 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__375849__2.call(this,self__,item);
case 3:
return G__375849__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__375849.cljs$core$IFn$_invoke$arity$2 = G__375849__2;
G__375849.cljs$core$IFn$_invoke$arity$3 = G__375849__3;
return G__375849;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args375792){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args375792)));
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
return cljs.core.seq.call(null,(function (){var iter__24933__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__375825(s__375826){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__375826__$1 = s__375826;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__375826__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__375832 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__375832,(0),null);
var item_set = cljs.core.nth.call(null,vec__375832,(1),null);
var iterys__24929__auto__ = ((function (s__375826__$1,vec__375832,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__375825_$_iter__375827(s__375828){
return (new cljs.core.LazySeq(null,((function (s__375826__$1,vec__375832,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__375828__$1 = s__375828;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__375828__$1);
if(temp__4425__auto____$1){
var s__375828__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__375828__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__375828__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__375830 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__375829 = (0);
while(true){
if((i__375829 < size__24932__auto__)){
var item = cljs.core._nth.call(null,c__24931__auto__,i__375829);
cljs.core.chunk_append.call(null,b__375830,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__375850 = (i__375829 + (1));
i__375829 = G__375850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375830),tailrecursion$priority_map$iter__375825_$_iter__375827.call(null,cljs.core.chunk_rest.call(null,s__375828__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375830),null);
}
} else {
var item = cljs.core.first.call(null,s__375828__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__375825_$_iter__375827.call(null,cljs.core.rest.call(null,s__375828__$2)));
}
} else {
return null;
}
break;
}
});})(s__375826__$1,vec__375832,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__375826__$1,vec__375832,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,item_set));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,tailrecursion$priority_map$iter__375825.call(null,cljs.core.rest.call(null,s__375826__$1)));
} else {
var G__375851 = cljs.core.rest.call(null,s__375826__$1);
s__375826__$1 = G__375851;
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
return iter__24933__auto__.call(null,sets);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__24933__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__375833(s__375834){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__375834__$1 = s__375834;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__375834__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__375840 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__375840,(0),null);
var item_set = cljs.core.nth.call(null,vec__375840,(1),null);
var iterys__24929__auto__ = ((function (s__375834__$1,vec__375840,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__375833_$_iter__375835(s__375836){
return (new cljs.core.LazySeq(null,((function (s__375834__$1,vec__375840,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__375836__$1 = s__375836;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__375836__$1);
if(temp__4425__auto____$1){
var s__375836__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__375836__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__375836__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__375838 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__375837 = (0);
while(true){
if((i__375837 < size__24932__auto__)){
var item = cljs.core._nth.call(null,c__24931__auto__,i__375837);
cljs.core.chunk_append.call(null,b__375838,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__375852 = (i__375837 + (1));
i__375837 = G__375852;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375838),tailrecursion$priority_map$iter__375833_$_iter__375835.call(null,cljs.core.chunk_rest.call(null,s__375836__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__375838),null);
}
} else {
var item = cljs.core.first.call(null,s__375836__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__375833_$_iter__375835.call(null,cljs.core.rest.call(null,s__375836__$2)));
}
} else {
return null;
}
break;
}
});})(s__375834__$1,vec__375840,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__375834__$1,vec__375840,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,item_set));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,tailrecursion$priority_map$iter__375833.call(null,cljs.core.rest.call(null,s__375834__$1)));
} else {
var G__375853 = cljs.core.rest.call(null,s__375834__$1);
s__375834__$1 = G__375853;
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
return iter__24933__auto__.call(null,sets);
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

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var args375854 = [];
var len__25219__auto___375857 = arguments.length;
var i__25220__auto___375858 = (0);
while(true){
if((i__25220__auto___375858 < len__25219__auto___375857)){
args375854.push((arguments[i__25220__auto___375858]));

var G__375859 = (i__25220__auto___375858 + (1));
i__25220__auto___375858 = G__375859;
continue;
} else {
}
break;
}

var G__375856 = args375854.length;
switch (G__375856) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args375854.length)].join('')));

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
var args__25226__auto__ = [];
var len__25219__auto___375862 = arguments.length;
var i__25220__auto___375863 = (0);
while(true){
if((i__25220__auto___375863 < len__25219__auto___375862)){
args__25226__auto__.push((arguments[i__25220__auto___375863]));

var G__375864 = (i__25220__auto___375863 + (1));
i__25220__auto___375863 = G__375864;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((0) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((0)),(0))):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25227__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__375865 = cljs.core.nnext.call(null,in$);
var G__375866 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__375865;
out = G__375866;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq375861){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq375861));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__25226__auto__ = [];
var len__25219__auto___375869 = arguments.length;
var i__25220__auto___375870 = (0);
while(true){
if((i__25220__auto___375870 < len__25219__auto___375869)){
args__25226__auto__.push((arguments[i__25220__auto___375870]));

var G__375871 = (i__25220__auto___375870 + (1));
i__25220__auto___375870 = G__375871;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((1) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((1)),(0))):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25227__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);
while(true){
if(in$){
var G__375872 = cljs.core.nnext.call(null,in$);
var G__375873 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__375872;
out = G__375873;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq375867){
var G__375868 = cljs.core.first.call(null,seq375867);
var seq375867__$1 = cljs.core.next.call(null,seq375867);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__375868,seq375867__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__25226__auto__ = [];
var len__25219__auto___375876 = arguments.length;
var i__25220__auto___375877 = (0);
while(true){
if((i__25220__auto___375877 < len__25219__auto___375876)){
args__25226__auto__.push((arguments[i__25220__auto___375877]));

var G__375878 = (i__25220__auto___375877 + (1));
i__25220__auto___375877 = G__375878;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((1) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((1)),(0))):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25227__auto__);
});

tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn);
while(true){
if(in$){
var G__375879 = cljs.core.nnext.call(null,in$);
var G__375880 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__375879;
out = G__375880;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq375874){
var G__375875 = cljs.core.first.call(null,seq375874);
var seq375874__$1 = cljs.core.next.call(null,seq375874);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(G__375875,seq375874__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__25226__auto__ = [];
var len__25219__auto___375884 = arguments.length;
var i__25220__auto___375885 = (0);
while(true){
if((i__25220__auto___375885 < len__25219__auto___375884)){
args__25226__auto__.push((arguments[i__25220__auto___375885]));

var G__375886 = (i__25220__auto___375885 + (1));
i__25220__auto___375885 = G__375886;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((2) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((2)),(0))):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25227__auto__);
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn,comparator);
while(true){
if(in$){
var G__375887 = cljs.core.nnext.call(null,in$);
var G__375888 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__375887;
out = G__375888;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq375881){
var G__375882 = cljs.core.first.call(null,seq375881);
var seq375881__$1 = cljs.core.next.call(null,seq375881);
var G__375883 = cljs.core.first.call(null,seq375881__$1);
var seq375881__$2 = cljs.core.next.call(null,seq375881__$1);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic(G__375882,G__375883,seq375881__$2);
});

//# sourceMappingURL=priority_map.js.map