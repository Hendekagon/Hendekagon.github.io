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
return (function tailrecursion$priority_map$iter__1884532(s__1884533){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__1884533__$1 = s__1884533;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884533__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__1884539 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__1884539,(0),null);
var item_set = cljs.core.nth.call(null,vec__1884539,(1),null);
var iterys__24929__auto__ = ((function (s__1884533__$1,vec__1884539,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__1884532_$_iter__1884534(s__1884535){
return (new cljs.core.LazySeq(null,((function (s__1884533__$1,vec__1884539,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__1884535__$1 = s__1884535;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1884535__$1);
if(temp__4425__auto____$1){
var s__1884535__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884535__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884535__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884537 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884536 = (0);
while(true){
if((i__1884536 < size__24932__auto__)){
var item = cljs.core._nth.call(null,c__24931__auto__,i__1884536);
cljs.core.chunk_append.call(null,b__1884537,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__1884580 = (i__1884536 + (1));
i__1884536 = G__1884580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884537),tailrecursion$priority_map$iter__1884532_$_iter__1884534.call(null,cljs.core.chunk_rest.call(null,s__1884535__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884537),null);
}
} else {
var item = cljs.core.first.call(null,s__1884535__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__1884532_$_iter__1884534.call(null,cljs.core.rest.call(null,s__1884535__$2)));
}
} else {
return null;
}
break;
}
});})(s__1884533__$1,vec__1884539,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__1884533__$1,vec__1884539,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,item_set));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,tailrecursion$priority_map$iter__1884532.call(null,cljs.core.rest.call(null,s__1884533__$1)));
} else {
var G__1884581 = cljs.core.rest.call(null,s__1884533__$1);
s__1884533__$1 = G__1884581;
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
return (function tailrecursion$priority_map$iter__1884540(s__1884541){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__1884541__$1 = s__1884541;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884541__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__1884547 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__1884547,(0),null);
var item_set = cljs.core.nth.call(null,vec__1884547,(1),null);
var iterys__24929__auto__ = ((function (s__1884541__$1,vec__1884547,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__1884540_$_iter__1884542(s__1884543){
return (new cljs.core.LazySeq(null,((function (s__1884541__$1,vec__1884547,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__1884543__$1 = s__1884543;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1884543__$1);
if(temp__4425__auto____$1){
var s__1884543__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884543__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884543__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884545 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884544 = (0);
while(true){
if((i__1884544 < size__24932__auto__)){
var item = cljs.core._nth.call(null,c__24931__auto__,i__1884544);
cljs.core.chunk_append.call(null,b__1884545,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__1884582 = (i__1884544 + (1));
i__1884544 = G__1884582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884545),tailrecursion$priority_map$iter__1884540_$_iter__1884542.call(null,cljs.core.chunk_rest.call(null,s__1884543__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884545),null);
}
} else {
var item = cljs.core.first.call(null,s__1884543__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__1884540_$_iter__1884542.call(null,cljs.core.rest.call(null,s__1884543__$2)));
}
} else {
return null;
}
break;
}
});})(s__1884541__$1,vec__1884547,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__1884541__$1,vec__1884547,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,item_set));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,tailrecursion$priority_map$iter__1884540.call(null,cljs.core.rest.call(null,s__1884541__$1)));
} else {
var G__1884583 = cljs.core.rest.call(null,s__1884541__$1);
s__1884541__$1 = G__1884583;
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
return (function tailrecursion$priority_map$iter__1884548(s__1884549){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__1884549__$1 = s__1884549;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884549__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__1884555 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__1884555,(0),null);
var item_set = cljs.core.nth.call(null,vec__1884555,(1),null);
var iterys__24929__auto__ = ((function (s__1884549__$1,vec__1884555,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__1884548_$_iter__1884550(s__1884551){
return (new cljs.core.LazySeq(null,((function (s__1884549__$1,vec__1884555,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__1884551__$1 = s__1884551;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1884551__$1);
if(temp__4425__auto____$1){
var s__1884551__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884551__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884551__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884553 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884552 = (0);
while(true){
if((i__1884552 < size__24932__auto__)){
var item = cljs.core._nth.call(null,c__24931__auto__,i__1884552);
cljs.core.chunk_append.call(null,b__1884553,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__1884584 = (i__1884552 + (1));
i__1884552 = G__1884584;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884553),tailrecursion$priority_map$iter__1884548_$_iter__1884550.call(null,cljs.core.chunk_rest.call(null,s__1884551__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884553),null);
}
} else {
var item = cljs.core.first.call(null,s__1884551__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__1884548_$_iter__1884550.call(null,cljs.core.rest.call(null,s__1884551__$2)));
}
} else {
return null;
}
break;
}
});})(s__1884549__$1,vec__1884555,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__1884549__$1,vec__1884555,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,item_set));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,tailrecursion$priority_map$iter__1884548.call(null,cljs.core.rest.call(null,s__1884549__$1)));
} else {
var G__1884585 = cljs.core.rest.call(null,s__1884549__$1);
s__1884549__$1 = G__1884585;
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
return (function tailrecursion$priority_map$iter__1884556(s__1884557){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__1884557__$1 = s__1884557;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884557__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__1884563 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__1884563,(0),null);
var item_set = cljs.core.nth.call(null,vec__1884563,(1),null);
var iterys__24929__auto__ = ((function (s__1884557__$1,vec__1884563,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__1884556_$_iter__1884558(s__1884559){
return (new cljs.core.LazySeq(null,((function (s__1884557__$1,vec__1884563,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__1884559__$1 = s__1884559;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1884559__$1);
if(temp__4425__auto____$1){
var s__1884559__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884559__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884559__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884561 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884560 = (0);
while(true){
if((i__1884560 < size__24932__auto__)){
var item = cljs.core._nth.call(null,c__24931__auto__,i__1884560);
cljs.core.chunk_append.call(null,b__1884561,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__1884586 = (i__1884560 + (1));
i__1884560 = G__1884586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884561),tailrecursion$priority_map$iter__1884556_$_iter__1884558.call(null,cljs.core.chunk_rest.call(null,s__1884559__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884561),null);
}
} else {
var item = cljs.core.first.call(null,s__1884559__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__1884556_$_iter__1884558.call(null,cljs.core.rest.call(null,s__1884559__$2)));
}
} else {
return null;
}
break;
}
});})(s__1884557__$1,vec__1884563,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__1884557__$1,vec__1884563,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,item_set));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,tailrecursion$priority_map$iter__1884556.call(null,cljs.core.rest.call(null,s__1884557__$1)));
} else {
var G__1884587 = cljs.core.rest.call(null,s__1884557__$1);
s__1884557__$1 = G__1884587;
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
var G__1884588 = null;
var G__1884588__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__1884588__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__1884588 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__1884588__2.call(this,self__,item);
case 3:
return G__1884588__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__1884588.cljs$core$IFn$_invoke$arity$2 = G__1884588__2;
G__1884588.cljs$core$IFn$_invoke$arity$3 = G__1884588__3;
return G__1884588;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args1884531){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1884531)));
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
return (function tailrecursion$priority_map$iter__1884564(s__1884565){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__1884565__$1 = s__1884565;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884565__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__1884571 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__1884571,(0),null);
var item_set = cljs.core.nth.call(null,vec__1884571,(1),null);
var iterys__24929__auto__ = ((function (s__1884565__$1,vec__1884571,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__1884564_$_iter__1884566(s__1884567){
return (new cljs.core.LazySeq(null,((function (s__1884565__$1,vec__1884571,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__1884567__$1 = s__1884567;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1884567__$1);
if(temp__4425__auto____$1){
var s__1884567__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884567__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884567__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884569 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884568 = (0);
while(true){
if((i__1884568 < size__24932__auto__)){
var item = cljs.core._nth.call(null,c__24931__auto__,i__1884568);
cljs.core.chunk_append.call(null,b__1884569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__1884589 = (i__1884568 + (1));
i__1884568 = G__1884589;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884569),tailrecursion$priority_map$iter__1884564_$_iter__1884566.call(null,cljs.core.chunk_rest.call(null,s__1884567__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884569),null);
}
} else {
var item = cljs.core.first.call(null,s__1884567__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__1884564_$_iter__1884566.call(null,cljs.core.rest.call(null,s__1884567__$2)));
}
} else {
return null;
}
break;
}
});})(s__1884565__$1,vec__1884571,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__1884565__$1,vec__1884571,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,item_set));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,tailrecursion$priority_map$iter__1884564.call(null,cljs.core.rest.call(null,s__1884565__$1)));
} else {
var G__1884590 = cljs.core.rest.call(null,s__1884565__$1);
s__1884565__$1 = G__1884590;
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
return (function tailrecursion$priority_map$iter__1884572(s__1884573){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__1884573__$1 = s__1884573;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1884573__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__1884579 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__1884579,(0),null);
var item_set = cljs.core.nth.call(null,vec__1884579,(1),null);
var iterys__24929__auto__ = ((function (s__1884573__$1,vec__1884579,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__1884572_$_iter__1884574(s__1884575){
return (new cljs.core.LazySeq(null,((function (s__1884573__$1,vec__1884579,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__1884575__$1 = s__1884575;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__1884575__$1);
if(temp__4425__auto____$1){
var s__1884575__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1884575__$2)){
var c__24931__auto__ = cljs.core.chunk_first.call(null,s__1884575__$2);
var size__24932__auto__ = cljs.core.count.call(null,c__24931__auto__);
var b__1884577 = cljs.core.chunk_buffer.call(null,size__24932__auto__);
if((function (){var i__1884576 = (0);
while(true){
if((i__1884576 < size__24932__auto__)){
var item = cljs.core._nth.call(null,c__24931__auto__,i__1884576);
cljs.core.chunk_append.call(null,b__1884577,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__1884591 = (i__1884576 + (1));
i__1884576 = G__1884591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884577),tailrecursion$priority_map$iter__1884572_$_iter__1884574.call(null,cljs.core.chunk_rest.call(null,s__1884575__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1884577),null);
}
} else {
var item = cljs.core.first.call(null,s__1884575__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__1884572_$_iter__1884574.call(null,cljs.core.rest.call(null,s__1884575__$2)));
}
} else {
return null;
}
break;
}
});})(s__1884573__$1,vec__1884579,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__1884573__$1,vec__1884579,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__24930__auto__ = cljs.core.seq.call(null,iterys__24929__auto__.call(null,item_set));
if(fs__24930__auto__){
return cljs.core.concat.call(null,fs__24930__auto__,tailrecursion$priority_map$iter__1884572.call(null,cljs.core.rest.call(null,s__1884573__$1)));
} else {
var G__1884592 = cljs.core.rest.call(null,s__1884573__$1);
s__1884573__$1 = G__1884592;
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
var args1884593 = [];
var len__25219__auto___1884596 = arguments.length;
var i__25220__auto___1884597 = (0);
while(true){
if((i__25220__auto___1884597 < len__25219__auto___1884596)){
args1884593.push((arguments[i__25220__auto___1884597]));

var G__1884598 = (i__25220__auto___1884597 + (1));
i__25220__auto___1884597 = G__1884598;
continue;
} else {
}
break;
}

var G__1884595 = args1884593.length;
switch (G__1884595) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1884593.length)].join('')));

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
var len__25219__auto___1884601 = arguments.length;
var i__25220__auto___1884602 = (0);
while(true){
if((i__25220__auto___1884602 < len__25219__auto___1884601)){
args__25226__auto__.push((arguments[i__25220__auto___1884602]));

var G__1884603 = (i__25220__auto___1884602 + (1));
i__25220__auto___1884602 = G__1884603;
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
var G__1884604 = cljs.core.nnext.call(null,in$);
var G__1884605 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__1884604;
out = G__1884605;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq1884600){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1884600));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1884608 = arguments.length;
var i__25220__auto___1884609 = (0);
while(true){
if((i__25220__auto___1884609 < len__25219__auto___1884608)){
args__25226__auto__.push((arguments[i__25220__auto___1884609]));

var G__1884610 = (i__25220__auto___1884609 + (1));
i__25220__auto___1884609 = G__1884610;
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
var G__1884611 = cljs.core.nnext.call(null,in$);
var G__1884612 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__1884611;
out = G__1884612;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq1884606){
var G__1884607 = cljs.core.first.call(null,seq1884606);
var seq1884606__$1 = cljs.core.next.call(null,seq1884606);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__1884607,seq1884606__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1884615 = arguments.length;
var i__25220__auto___1884616 = (0);
while(true){
if((i__25220__auto___1884616 < len__25219__auto___1884615)){
args__25226__auto__.push((arguments[i__25220__auto___1884616]));

var G__1884617 = (i__25220__auto___1884616 + (1));
i__25220__auto___1884616 = G__1884617;
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
var G__1884618 = cljs.core.nnext.call(null,in$);
var G__1884619 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__1884618;
out = G__1884619;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq1884613){
var G__1884614 = cljs.core.first.call(null,seq1884613);
var seq1884613__$1 = cljs.core.next.call(null,seq1884613);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(G__1884614,seq1884613__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1884623 = arguments.length;
var i__25220__auto___1884624 = (0);
while(true){
if((i__25220__auto___1884624 < len__25219__auto___1884623)){
args__25226__auto__.push((arguments[i__25220__auto___1884624]));

var G__1884625 = (i__25220__auto___1884624 + (1));
i__25220__auto___1884624 = G__1884625;
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
var G__1884626 = cljs.core.nnext.call(null,in$);
var G__1884627 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__1884626;
out = G__1884627;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq1884620){
var G__1884621 = cljs.core.first.call(null,seq1884620);
var seq1884620__$1 = cljs.core.next.call(null,seq1884620);
var G__1884622 = cljs.core.first.call(null,seq1884620__$1);
var seq1884620__$2 = cljs.core.next.call(null,seq1884620__$1);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic(G__1884621,G__1884622,seq1884620__$2);
});

//# sourceMappingURL=priority_map.js.map