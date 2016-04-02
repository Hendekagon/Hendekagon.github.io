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
return cljs.core.seq.call(null,(function (){var iter__36172__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__96442(s__96443){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__96443__$1 = s__96443;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__96443__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__96449 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__96449,(0),null);
var item_set = cljs.core.nth.call(null,vec__96449,(1),null);
var iterys__36168__auto__ = ((function (s__96443__$1,vec__96449,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__96442_$_iter__96444(s__96445){
return (new cljs.core.LazySeq(null,((function (s__96443__$1,vec__96449,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__96445__$1 = s__96445;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__96445__$1);
if(temp__4657__auto____$1){
var s__96445__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__96445__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__96445__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__96447 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__96446 = (0);
while(true){
if((i__96446 < size__36171__auto__)){
var item = cljs.core._nth.call(null,c__36170__auto__,i__96446);
cljs.core.chunk_append.call(null,b__96447,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__96628 = (i__96446 + (1));
i__96446 = G__96628;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96447),tailrecursion$priority_map$iter__96442_$_iter__96444.call(null,cljs.core.chunk_rest.call(null,s__96445__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96447),null);
}
} else {
var item = cljs.core.first.call(null,s__96445__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__96442_$_iter__96444.call(null,cljs.core.rest.call(null,s__96445__$2)));
}
} else {
return null;
}
break;
}
});})(s__96443__$1,vec__96449,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__96443__$1,vec__96449,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,item_set));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,tailrecursion$priority_map$iter__96442.call(null,cljs.core.rest.call(null,s__96443__$1)));
} else {
var G__96650 = cljs.core.rest.call(null,s__96443__$1);
s__96443__$1 = G__96650;
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
return iter__36172__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__36172__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__96450(s__96451){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__96451__$1 = s__96451;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__96451__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__96472 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__96472,(0),null);
var item_set = cljs.core.nth.call(null,vec__96472,(1),null);
var iterys__36168__auto__ = ((function (s__96451__$1,vec__96472,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__96450_$_iter__96452(s__96453){
return (new cljs.core.LazySeq(null,((function (s__96451__$1,vec__96472,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__96453__$1 = s__96453;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__96453__$1);
if(temp__4657__auto____$1){
var s__96453__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__96453__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__96453__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__96455 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__96454 = (0);
while(true){
if((i__96454 < size__36171__auto__)){
var item = cljs.core._nth.call(null,c__36170__auto__,i__96454);
cljs.core.chunk_append.call(null,b__96455,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__96651 = (i__96454 + (1));
i__96454 = G__96651;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96455),tailrecursion$priority_map$iter__96450_$_iter__96452.call(null,cljs.core.chunk_rest.call(null,s__96453__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96455),null);
}
} else {
var item = cljs.core.first.call(null,s__96453__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__96450_$_iter__96452.call(null,cljs.core.rest.call(null,s__96453__$2)));
}
} else {
return null;
}
break;
}
});})(s__96451__$1,vec__96472,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__96451__$1,vec__96472,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,item_set));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,tailrecursion$priority_map$iter__96450.call(null,cljs.core.rest.call(null,s__96451__$1)));
} else {
var G__96652 = cljs.core.rest.call(null,s__96451__$1);
s__96451__$1 = G__96652;
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
return iter__36172__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__35827__auto__ = self__.__hash;
if(!((h__35827__auto__ == null))){
return h__35827__auto__;
} else {
var h__35827__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);
self__.__hash = h__35827__auto____$1;

return h__35827__auto____$1;
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
return cljs.core.seq.call(null,(function (){var iter__36172__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__96489(s__96490){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__96490__$1 = s__96490;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__96490__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__96498 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__96498,(0),null);
var item_set = cljs.core.nth.call(null,vec__96498,(1),null);
var iterys__36168__auto__ = ((function (s__96490__$1,vec__96498,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__96489_$_iter__96491(s__96492){
return (new cljs.core.LazySeq(null,((function (s__96490__$1,vec__96498,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__96492__$1 = s__96492;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__96492__$1);
if(temp__4657__auto____$1){
var s__96492__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__96492__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__96492__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__96494 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__96493 = (0);
while(true){
if((i__96493 < size__36171__auto__)){
var item = cljs.core._nth.call(null,c__36170__auto__,i__96493);
cljs.core.chunk_append.call(null,b__96494,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__96679 = (i__96493 + (1));
i__96493 = G__96679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96494),tailrecursion$priority_map$iter__96489_$_iter__96491.call(null,cljs.core.chunk_rest.call(null,s__96492__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96494),null);
}
} else {
var item = cljs.core.first.call(null,s__96492__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__96489_$_iter__96491.call(null,cljs.core.rest.call(null,s__96492__$2)));
}
} else {
return null;
}
break;
}
});})(s__96490__$1,vec__96498,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__96490__$1,vec__96498,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,item_set));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,tailrecursion$priority_map$iter__96489.call(null,cljs.core.rest.call(null,s__96490__$1)));
} else {
var G__96680 = cljs.core.rest.call(null,s__96490__$1);
s__96490__$1 = G__96680;
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
return iter__36172__auto__.call(null,self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__36172__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__96520(s__96521){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__96521__$1 = s__96521;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__96521__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__96540 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__96540,(0),null);
var item_set = cljs.core.nth.call(null,vec__96540,(1),null);
var iterys__36168__auto__ = ((function (s__96521__$1,vec__96540,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__96520_$_iter__96522(s__96523){
return (new cljs.core.LazySeq(null,((function (s__96521__$1,vec__96540,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__96523__$1 = s__96523;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__96523__$1);
if(temp__4657__auto____$1){
var s__96523__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__96523__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__96523__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__96525 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__96524 = (0);
while(true){
if((i__96524 < size__36171__auto__)){
var item = cljs.core._nth.call(null,c__36170__auto__,i__96524);
cljs.core.chunk_append.call(null,b__96525,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__96681 = (i__96524 + (1));
i__96524 = G__96681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96525),tailrecursion$priority_map$iter__96520_$_iter__96522.call(null,cljs.core.chunk_rest.call(null,s__96523__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96525),null);
}
} else {
var item = cljs.core.first.call(null,s__96523__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__96520_$_iter__96522.call(null,cljs.core.rest.call(null,s__96523__$2)));
}
} else {
return null;
}
break;
}
});})(s__96521__$1,vec__96540,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__96521__$1,vec__96540,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,item_set));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,tailrecursion$priority_map$iter__96520.call(null,cljs.core.rest.call(null,s__96521__$1)));
} else {
var G__96685 = cljs.core.rest.call(null,s__96521__$1);
s__96521__$1 = G__96685;
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
return iter__36172__auto__.call(null,self__.priority__GT_set_of_items);
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
var G__96693 = null;
var G__96693__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__96693__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__96693 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__96693__2.call(this,self__,item);
case 3:
return G__96693__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__96693.cljs$core$IFn$_invoke$arity$2 = G__96693__2;
G__96693.cljs$core$IFn$_invoke$arity$3 = G__96693__3;
return G__96693;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args96441){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args96441)));
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
return cljs.core.seq.call(null,(function (){var iter__36172__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__96547(s__96548){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__96548__$1 = s__96548;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__96548__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__96570 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__96570,(0),null);
var item_set = cljs.core.nth.call(null,vec__96570,(1),null);
var iterys__36168__auto__ = ((function (s__96548__$1,vec__96570,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__96547_$_iter__96549(s__96550){
return (new cljs.core.LazySeq(null,((function (s__96548__$1,vec__96570,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__96550__$1 = s__96550;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__96550__$1);
if(temp__4657__auto____$1){
var s__96550__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__96550__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__96550__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__96552 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__96551 = (0);
while(true){
if((i__96551 < size__36171__auto__)){
var item = cljs.core._nth.call(null,c__36170__auto__,i__96551);
cljs.core.chunk_append.call(null,b__96552,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__96697 = (i__96551 + (1));
i__96551 = G__96697;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96552),tailrecursion$priority_map$iter__96547_$_iter__96549.call(null,cljs.core.chunk_rest.call(null,s__96550__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96552),null);
}
} else {
var item = cljs.core.first.call(null,s__96550__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__96547_$_iter__96549.call(null,cljs.core.rest.call(null,s__96550__$2)));
}
} else {
return null;
}
break;
}
});})(s__96548__$1,vec__96570,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__96548__$1,vec__96570,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,item_set));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,tailrecursion$priority_map$iter__96547.call(null,cljs.core.rest.call(null,s__96548__$1)));
} else {
var G__96698 = cljs.core.rest.call(null,s__96548__$1);
s__96548__$1 = G__96698;
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
return iter__36172__auto__.call(null,sets);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__36172__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__96586(s__96587){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__96587__$1 = s__96587;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__96587__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__96593 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__96593,(0),null);
var item_set = cljs.core.nth.call(null,vec__96593,(1),null);
var iterys__36168__auto__ = ((function (s__96587__$1,vec__96593,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__96586_$_iter__96588(s__96589){
return (new cljs.core.LazySeq(null,((function (s__96587__$1,vec__96593,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__96589__$1 = s__96589;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__96589__$1);
if(temp__4657__auto____$1){
var s__96589__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__96589__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__96589__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__96591 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__96590 = (0);
while(true){
if((i__96590 < size__36171__auto__)){
var item = cljs.core._nth.call(null,c__36170__auto__,i__96590);
cljs.core.chunk_append.call(null,b__96591,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__96702 = (i__96590 + (1));
i__96590 = G__96702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96591),tailrecursion$priority_map$iter__96586_$_iter__96588.call(null,cljs.core.chunk_rest.call(null,s__96589__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96591),null);
}
} else {
var item = cljs.core.first.call(null,s__96589__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__96586_$_iter__96588.call(null,cljs.core.rest.call(null,s__96589__$2)));
}
} else {
return null;
}
break;
}
});})(s__96587__$1,vec__96593,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__96587__$1,vec__96593,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,item_set));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,tailrecursion$priority_map$iter__96586.call(null,cljs.core.rest.call(null,s__96587__$1)));
} else {
var G__96703 = cljs.core.rest.call(null,s__96587__$1);
s__96587__$1 = G__96703;
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
return iter__36172__auto__.call(null,sets);
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

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var args96704 = [];
var len__36461__auto___96707 = arguments.length;
var i__36462__auto___96708 = (0);
while(true){
if((i__36462__auto___96708 < len__36461__auto___96707)){
args96704.push((arguments[i__36462__auto___96708]));

var G__96709 = (i__36462__auto___96708 + (1));
i__36462__auto___96708 = G__96709;
continue;
} else {
}
break;
}

var G__96706 = args96704.length;
switch (G__96706) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args96704.length)].join('')));

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
var args__36468__auto__ = [];
var len__36461__auto___96730 = arguments.length;
var i__36462__auto___96731 = (0);
while(true){
if((i__36462__auto___96731 < len__36461__auto___96730)){
args__36468__auto__.push((arguments[i__36462__auto___96731]));

var G__96732 = (i__36462__auto___96731 + (1));
i__36462__auto___96731 = G__96732;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((0) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((0)),(0),null)):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__36469__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__96735 = cljs.core.nnext.call(null,in$);
var G__96736 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__96735;
out = G__96736;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq96723){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq96723));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__36468__auto__ = [];
var len__36461__auto___96744 = arguments.length;
var i__36462__auto___96745 = (0);
while(true){
if((i__36462__auto___96745 < len__36461__auto___96744)){
args__36468__auto__.push((arguments[i__36462__auto___96745]));

var G__96746 = (i__36462__auto___96745 + (1));
i__36462__auto___96745 = G__96746;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);
while(true){
if(in$){
var G__96750 = cljs.core.nnext.call(null,in$);
var G__96751 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__96750;
out = G__96751;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq96737){
var G__96738 = cljs.core.first.call(null,seq96737);
var seq96737__$1 = cljs.core.next.call(null,seq96737);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__96738,seq96737__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__36468__auto__ = [];
var len__36461__auto___96762 = arguments.length;
var i__36462__auto___96763 = (0);
while(true){
if((i__36462__auto___96763 < len__36461__auto___96762)){
args__36468__auto__.push((arguments[i__36462__auto___96763]));

var G__96764 = (i__36462__auto___96763 + (1));
i__36462__auto___96763 = G__96764;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn);
while(true){
if(in$){
var G__96765 = cljs.core.nnext.call(null,in$);
var G__96766 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__96765;
out = G__96766;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq96757){
var G__96758 = cljs.core.first.call(null,seq96757);
var seq96757__$1 = cljs.core.next.call(null,seq96757);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(G__96758,seq96757__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__36468__auto__ = [];
var len__36461__auto___96772 = arguments.length;
var i__36462__auto___96773 = (0);
while(true){
if((i__36462__auto___96773 < len__36461__auto___96772)){
args__36468__auto__.push((arguments[i__36462__auto___96773]));

var G__96779 = (i__36462__auto___96773 + (1));
i__36462__auto___96773 = G__96779;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((2) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((2)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36469__auto__);
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn,comparator);
while(true){
if(in$){
var G__96782 = cljs.core.nnext.call(null,in$);
var G__96783 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__96782;
out = G__96783;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq96769){
var G__96770 = cljs.core.first.call(null,seq96769);
var seq96769__$1 = cljs.core.next.call(null,seq96769);
var G__96771 = cljs.core.first.call(null,seq96769__$1);
var seq96769__$2 = cljs.core.next.call(null,seq96769__$1);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic(G__96770,G__96771,seq96769__$2);
});
