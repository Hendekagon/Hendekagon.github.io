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
return cljs.core.seq.call(null,(function (){var iter__24983__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__872496(s__872497){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__872497__$1 = s__872497;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__872497__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__872503 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__872503,(0),null);
var item_set = cljs.core.nth.call(null,vec__872503,(1),null);
var iterys__24979__auto__ = ((function (s__872497__$1,vec__872503,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__872496_$_iter__872498(s__872499){
return (new cljs.core.LazySeq(null,((function (s__872497__$1,vec__872503,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__872499__$1 = s__872499;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__872499__$1);
if(temp__4425__auto____$1){
var s__872499__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__872499__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__872499__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__872501 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__872500 = (0);
while(true){
if((i__872500 < size__24982__auto__)){
var item = cljs.core._nth.call(null,c__24981__auto__,i__872500);
cljs.core.chunk_append.call(null,b__872501,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__872544 = (i__872500 + (1));
i__872500 = G__872544;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__872501),tailrecursion$priority_map$iter__872496_$_iter__872498.call(null,cljs.core.chunk_rest.call(null,s__872499__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__872501),null);
}
} else {
var item = cljs.core.first.call(null,s__872499__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__872496_$_iter__872498.call(null,cljs.core.rest.call(null,s__872499__$2)));
}
} else {
return null;
}
break;
}
});})(s__872497__$1,vec__872503,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__872497__$1,vec__872503,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,item_set));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,tailrecursion$priority_map$iter__872496.call(null,cljs.core.rest.call(null,s__872497__$1)));
} else {
var G__872545 = cljs.core.rest.call(null,s__872497__$1);
s__872497__$1 = G__872545;
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
return iter__24983__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__24983__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__872504(s__872505){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__872505__$1 = s__872505;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__872505__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__872511 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__872511,(0),null);
var item_set = cljs.core.nth.call(null,vec__872511,(1),null);
var iterys__24979__auto__ = ((function (s__872505__$1,vec__872511,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__872504_$_iter__872506(s__872507){
return (new cljs.core.LazySeq(null,((function (s__872505__$1,vec__872511,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__872507__$1 = s__872507;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__872507__$1);
if(temp__4425__auto____$1){
var s__872507__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__872507__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__872507__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__872509 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__872508 = (0);
while(true){
if((i__872508 < size__24982__auto__)){
var item = cljs.core._nth.call(null,c__24981__auto__,i__872508);
cljs.core.chunk_append.call(null,b__872509,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__872546 = (i__872508 + (1));
i__872508 = G__872546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__872509),tailrecursion$priority_map$iter__872504_$_iter__872506.call(null,cljs.core.chunk_rest.call(null,s__872507__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__872509),null);
}
} else {
var item = cljs.core.first.call(null,s__872507__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__872504_$_iter__872506.call(null,cljs.core.rest.call(null,s__872507__$2)));
}
} else {
return null;
}
break;
}
});})(s__872505__$1,vec__872511,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__872505__$1,vec__872511,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,item_set));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,tailrecursion$priority_map$iter__872504.call(null,cljs.core.rest.call(null,s__872505__$1)));
} else {
var G__872547 = cljs.core.rest.call(null,s__872505__$1);
s__872505__$1 = G__872547;
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
return iter__24983__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__24646__auto__ = self__.__hash;
if(!((h__24646__auto__ == null))){
return h__24646__auto__;
} else {
var h__24646__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);
self__.__hash = h__24646__auto____$1;

return h__24646__auto____$1;
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
return cljs.core.seq.call(null,(function (){var iter__24983__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__872512(s__872513){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__872513__$1 = s__872513;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__872513__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__872519 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__872519,(0),null);
var item_set = cljs.core.nth.call(null,vec__872519,(1),null);
var iterys__24979__auto__ = ((function (s__872513__$1,vec__872519,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__872512_$_iter__872514(s__872515){
return (new cljs.core.LazySeq(null,((function (s__872513__$1,vec__872519,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__872515__$1 = s__872515;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__872515__$1);
if(temp__4425__auto____$1){
var s__872515__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__872515__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__872515__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__872517 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__872516 = (0);
while(true){
if((i__872516 < size__24982__auto__)){
var item = cljs.core._nth.call(null,c__24981__auto__,i__872516);
cljs.core.chunk_append.call(null,b__872517,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__872548 = (i__872516 + (1));
i__872516 = G__872548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__872517),tailrecursion$priority_map$iter__872512_$_iter__872514.call(null,cljs.core.chunk_rest.call(null,s__872515__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__872517),null);
}
} else {
var item = cljs.core.first.call(null,s__872515__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__872512_$_iter__872514.call(null,cljs.core.rest.call(null,s__872515__$2)));
}
} else {
return null;
}
break;
}
});})(s__872513__$1,vec__872519,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__872513__$1,vec__872519,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,item_set));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,tailrecursion$priority_map$iter__872512.call(null,cljs.core.rest.call(null,s__872513__$1)));
} else {
var G__872549 = cljs.core.rest.call(null,s__872513__$1);
s__872513__$1 = G__872549;
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
return iter__24983__auto__.call(null,self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__24983__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__872520(s__872521){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__872521__$1 = s__872521;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__872521__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__872527 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__872527,(0),null);
var item_set = cljs.core.nth.call(null,vec__872527,(1),null);
var iterys__24979__auto__ = ((function (s__872521__$1,vec__872527,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__872520_$_iter__872522(s__872523){
return (new cljs.core.LazySeq(null,((function (s__872521__$1,vec__872527,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__872523__$1 = s__872523;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__872523__$1);
if(temp__4425__auto____$1){
var s__872523__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__872523__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__872523__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__872525 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__872524 = (0);
while(true){
if((i__872524 < size__24982__auto__)){
var item = cljs.core._nth.call(null,c__24981__auto__,i__872524);
cljs.core.chunk_append.call(null,b__872525,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__872550 = (i__872524 + (1));
i__872524 = G__872550;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__872525),tailrecursion$priority_map$iter__872520_$_iter__872522.call(null,cljs.core.chunk_rest.call(null,s__872523__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__872525),null);
}
} else {
var item = cljs.core.first.call(null,s__872523__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__872520_$_iter__872522.call(null,cljs.core.rest.call(null,s__872523__$2)));
}
} else {
return null;
}
break;
}
});})(s__872521__$1,vec__872527,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__872521__$1,vec__872527,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,item_set));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,tailrecursion$priority_map$iter__872520.call(null,cljs.core.rest.call(null,s__872521__$1)));
} else {
var G__872551 = cljs.core.rest.call(null,s__872521__$1);
s__872521__$1 = G__872551;
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
return iter__24983__auto__.call(null,self__.priority__GT_set_of_items);
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
var G__872552 = null;
var G__872552__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__872552__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__872552 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__872552__2.call(this,self__,item);
case 3:
return G__872552__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__872552.cljs$core$IFn$_invoke$arity$2 = G__872552__2;
G__872552.cljs$core$IFn$_invoke$arity$3 = G__872552__3;
return G__872552;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args872495){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args872495)));
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
return cljs.core.seq.call(null,(function (){var iter__24983__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__872528(s__872529){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__872529__$1 = s__872529;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__872529__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__872535 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__872535,(0),null);
var item_set = cljs.core.nth.call(null,vec__872535,(1),null);
var iterys__24979__auto__ = ((function (s__872529__$1,vec__872535,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__872528_$_iter__872530(s__872531){
return (new cljs.core.LazySeq(null,((function (s__872529__$1,vec__872535,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__872531__$1 = s__872531;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__872531__$1);
if(temp__4425__auto____$1){
var s__872531__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__872531__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__872531__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__872533 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__872532 = (0);
while(true){
if((i__872532 < size__24982__auto__)){
var item = cljs.core._nth.call(null,c__24981__auto__,i__872532);
cljs.core.chunk_append.call(null,b__872533,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__872553 = (i__872532 + (1));
i__872532 = G__872553;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__872533),tailrecursion$priority_map$iter__872528_$_iter__872530.call(null,cljs.core.chunk_rest.call(null,s__872531__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__872533),null);
}
} else {
var item = cljs.core.first.call(null,s__872531__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__872528_$_iter__872530.call(null,cljs.core.rest.call(null,s__872531__$2)));
}
} else {
return null;
}
break;
}
});})(s__872529__$1,vec__872535,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__872529__$1,vec__872535,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,item_set));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,tailrecursion$priority_map$iter__872528.call(null,cljs.core.rest.call(null,s__872529__$1)));
} else {
var G__872554 = cljs.core.rest.call(null,s__872529__$1);
s__872529__$1 = G__872554;
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
return iter__24983__auto__.call(null,sets);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__24983__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__872536(s__872537){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__872537__$1 = s__872537;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__872537__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__872543 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__872543,(0),null);
var item_set = cljs.core.nth.call(null,vec__872543,(1),null);
var iterys__24979__auto__ = ((function (s__872537__$1,vec__872543,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__872536_$_iter__872538(s__872539){
return (new cljs.core.LazySeq(null,((function (s__872537__$1,vec__872543,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__872539__$1 = s__872539;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__872539__$1);
if(temp__4425__auto____$1){
var s__872539__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__872539__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__872539__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__872541 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__872540 = (0);
while(true){
if((i__872540 < size__24982__auto__)){
var item = cljs.core._nth.call(null,c__24981__auto__,i__872540);
cljs.core.chunk_append.call(null,b__872541,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__872555 = (i__872540 + (1));
i__872540 = G__872555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__872541),tailrecursion$priority_map$iter__872536_$_iter__872538.call(null,cljs.core.chunk_rest.call(null,s__872539__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__872541),null);
}
} else {
var item = cljs.core.first.call(null,s__872539__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__872536_$_iter__872538.call(null,cljs.core.rest.call(null,s__872539__$2)));
}
} else {
return null;
}
break;
}
});})(s__872537__$1,vec__872543,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__872537__$1,vec__872543,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,item_set));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,tailrecursion$priority_map$iter__872536.call(null,cljs.core.rest.call(null,s__872537__$1)));
} else {
var G__872556 = cljs.core.rest.call(null,s__872537__$1);
s__872537__$1 = G__872556;
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
return iter__24983__auto__.call(null,sets);
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

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var args872557 = [];
var len__25269__auto___872560 = arguments.length;
var i__25270__auto___872561 = (0);
while(true){
if((i__25270__auto___872561 < len__25269__auto___872560)){
args872557.push((arguments[i__25270__auto___872561]));

var G__872562 = (i__25270__auto___872561 + (1));
i__25270__auto___872561 = G__872562;
continue;
} else {
}
break;
}

var G__872559 = args872557.length;
switch (G__872559) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args872557.length)].join('')));

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
var args__25276__auto__ = [];
var len__25269__auto___872565 = arguments.length;
var i__25270__auto___872566 = (0);
while(true){
if((i__25270__auto___872566 < len__25269__auto___872565)){
args__25276__auto__.push((arguments[i__25270__auto___872566]));

var G__872567 = (i__25270__auto___872566 + (1));
i__25270__auto___872566 = G__872567;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((0) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((0)),(0))):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25277__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__872568 = cljs.core.nnext.call(null,in$);
var G__872569 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__872568;
out = G__872569;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq872564){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq872564));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__25276__auto__ = [];
var len__25269__auto___872572 = arguments.length;
var i__25270__auto___872573 = (0);
while(true){
if((i__25270__auto___872573 < len__25269__auto___872572)){
args__25276__auto__.push((arguments[i__25270__auto___872573]));

var G__872574 = (i__25270__auto___872573 + (1));
i__25270__auto___872573 = G__872574;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);
while(true){
if(in$){
var G__872575 = cljs.core.nnext.call(null,in$);
var G__872576 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__872575;
out = G__872576;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq872570){
var G__872571 = cljs.core.first.call(null,seq872570);
var seq872570__$1 = cljs.core.next.call(null,seq872570);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__872571,seq872570__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__25276__auto__ = [];
var len__25269__auto___872579 = arguments.length;
var i__25270__auto___872580 = (0);
while(true){
if((i__25270__auto___872580 < len__25269__auto___872579)){
args__25276__auto__.push((arguments[i__25270__auto___872580]));

var G__872581 = (i__25270__auto___872580 + (1));
i__25270__auto___872580 = G__872581;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn);
while(true){
if(in$){
var G__872582 = cljs.core.nnext.call(null,in$);
var G__872583 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__872582;
out = G__872583;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq872577){
var G__872578 = cljs.core.first.call(null,seq872577);
var seq872577__$1 = cljs.core.next.call(null,seq872577);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(G__872578,seq872577__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__25276__auto__ = [];
var len__25269__auto___872587 = arguments.length;
var i__25270__auto___872588 = (0);
while(true){
if((i__25270__auto___872588 < len__25269__auto___872587)){
args__25276__auto__.push((arguments[i__25270__auto___872588]));

var G__872589 = (i__25270__auto___872588 + (1));
i__25270__auto___872588 = G__872589;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((2) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((2)),(0))):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25277__auto__);
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn,comparator);
while(true){
if(in$){
var G__872590 = cljs.core.nnext.call(null,in$);
var G__872591 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__872590;
out = G__872591;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq872584){
var G__872585 = cljs.core.first.call(null,seq872584);
var seq872584__$1 = cljs.core.next.call(null,seq872584);
var G__872586 = cljs.core.first.call(null,seq872584__$1);
var seq872584__$2 = cljs.core.next.call(null,seq872584__$1);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic(G__872585,G__872586,seq872584__$2);
});

//# sourceMappingURL=priority_map.js.map