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
return (function tailrecursion$priority_map$iter__285005(s__285006){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__285006__$1 = s__285006;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__285006__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__285020 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__285020,(0),null);
var item_set = cljs.core.nth.call(null,vec__285020,(1),null);
var iterys__36168__auto__ = ((function (s__285006__$1,vec__285020,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__285005_$_iter__285007(s__285008){
return (new cljs.core.LazySeq(null,((function (s__285006__$1,vec__285020,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__285008__$1 = s__285008;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__285008__$1);
if(temp__4657__auto____$1){
var s__285008__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__285008__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__285008__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__285010 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__285009 = (0);
while(true){
if((i__285009 < size__36171__auto__)){
var item = cljs.core._nth.call(null,c__36170__auto__,i__285009);
cljs.core.chunk_append.call(null,b__285010,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__285148 = (i__285009 + (1));
i__285009 = G__285148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285010),tailrecursion$priority_map$iter__285005_$_iter__285007.call(null,cljs.core.chunk_rest.call(null,s__285008__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285010),null);
}
} else {
var item = cljs.core.first.call(null,s__285008__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__285005_$_iter__285007.call(null,cljs.core.rest.call(null,s__285008__$2)));
}
} else {
return null;
}
break;
}
});})(s__285006__$1,vec__285020,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__285006__$1,vec__285020,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,item_set));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,tailrecursion$priority_map$iter__285005.call(null,cljs.core.rest.call(null,s__285006__$1)));
} else {
var G__285152 = cljs.core.rest.call(null,s__285006__$1);
s__285006__$1 = G__285152;
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
return (function tailrecursion$priority_map$iter__285022(s__285023){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__285023__$1 = s__285023;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__285023__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__285037 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__285037,(0),null);
var item_set = cljs.core.nth.call(null,vec__285037,(1),null);
var iterys__36168__auto__ = ((function (s__285023__$1,vec__285037,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__285022_$_iter__285024(s__285025){
return (new cljs.core.LazySeq(null,((function (s__285023__$1,vec__285037,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__285025__$1 = s__285025;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__285025__$1);
if(temp__4657__auto____$1){
var s__285025__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__285025__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__285025__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__285027 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__285026 = (0);
while(true){
if((i__285026 < size__36171__auto__)){
var item = cljs.core._nth.call(null,c__36170__auto__,i__285026);
cljs.core.chunk_append.call(null,b__285027,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__285161 = (i__285026 + (1));
i__285026 = G__285161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285027),tailrecursion$priority_map$iter__285022_$_iter__285024.call(null,cljs.core.chunk_rest.call(null,s__285025__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285027),null);
}
} else {
var item = cljs.core.first.call(null,s__285025__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__285022_$_iter__285024.call(null,cljs.core.rest.call(null,s__285025__$2)));
}
} else {
return null;
}
break;
}
});})(s__285023__$1,vec__285037,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__285023__$1,vec__285037,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,item_set));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,tailrecursion$priority_map$iter__285022.call(null,cljs.core.rest.call(null,s__285023__$1)));
} else {
var G__285166 = cljs.core.rest.call(null,s__285023__$1);
s__285023__$1 = G__285166;
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
return (function tailrecursion$priority_map$iter__285057(s__285058){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__285058__$1 = s__285058;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__285058__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__285071 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__285071,(0),null);
var item_set = cljs.core.nth.call(null,vec__285071,(1),null);
var iterys__36168__auto__ = ((function (s__285058__$1,vec__285071,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__285057_$_iter__285059(s__285060){
return (new cljs.core.LazySeq(null,((function (s__285058__$1,vec__285071,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__285060__$1 = s__285060;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__285060__$1);
if(temp__4657__auto____$1){
var s__285060__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__285060__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__285060__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__285062 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__285061 = (0);
while(true){
if((i__285061 < size__36171__auto__)){
var item = cljs.core._nth.call(null,c__36170__auto__,i__285061);
cljs.core.chunk_append.call(null,b__285062,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__285190 = (i__285061 + (1));
i__285061 = G__285190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285062),tailrecursion$priority_map$iter__285057_$_iter__285059.call(null,cljs.core.chunk_rest.call(null,s__285060__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285062),null);
}
} else {
var item = cljs.core.first.call(null,s__285060__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__285057_$_iter__285059.call(null,cljs.core.rest.call(null,s__285060__$2)));
}
} else {
return null;
}
break;
}
});})(s__285058__$1,vec__285071,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__285058__$1,vec__285071,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,item_set));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,tailrecursion$priority_map$iter__285057.call(null,cljs.core.rest.call(null,s__285058__$1)));
} else {
var G__285195 = cljs.core.rest.call(null,s__285058__$1);
s__285058__$1 = G__285195;
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
return (function tailrecursion$priority_map$iter__285077(s__285078){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__285078__$1 = s__285078;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__285078__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__285096 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__285096,(0),null);
var item_set = cljs.core.nth.call(null,vec__285096,(1),null);
var iterys__36168__auto__ = ((function (s__285078__$1,vec__285096,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__285077_$_iter__285079(s__285080){
return (new cljs.core.LazySeq(null,((function (s__285078__$1,vec__285096,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__285080__$1 = s__285080;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__285080__$1);
if(temp__4657__auto____$1){
var s__285080__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__285080__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__285080__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__285082 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__285081 = (0);
while(true){
if((i__285081 < size__36171__auto__)){
var item = cljs.core._nth.call(null,c__36170__auto__,i__285081);
cljs.core.chunk_append.call(null,b__285082,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__285202 = (i__285081 + (1));
i__285081 = G__285202;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285082),tailrecursion$priority_map$iter__285077_$_iter__285079.call(null,cljs.core.chunk_rest.call(null,s__285080__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285082),null);
}
} else {
var item = cljs.core.first.call(null,s__285080__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__285077_$_iter__285079.call(null,cljs.core.rest.call(null,s__285080__$2)));
}
} else {
return null;
}
break;
}
});})(s__285078__$1,vec__285096,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__285078__$1,vec__285096,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,item_set));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,tailrecursion$priority_map$iter__285077.call(null,cljs.core.rest.call(null,s__285078__$1)));
} else {
var G__285203 = cljs.core.rest.call(null,s__285078__$1);
s__285078__$1 = G__285203;
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
var G__285210 = null;
var G__285210__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__285210__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__285210 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__285210__2.call(this,self__,item);
case 3:
return G__285210__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__285210.cljs$core$IFn$_invoke$arity$2 = G__285210__2;
G__285210.cljs$core$IFn$_invoke$arity$3 = G__285210__3;
return G__285210;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args284992){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args284992)));
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
return (function tailrecursion$priority_map$iter__285110(s__285111){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__285111__$1 = s__285111;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__285111__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__285121 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__285121,(0),null);
var item_set = cljs.core.nth.call(null,vec__285121,(1),null);
var iterys__36168__auto__ = ((function (s__285111__$1,vec__285121,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__285110_$_iter__285112(s__285113){
return (new cljs.core.LazySeq(null,((function (s__285111__$1,vec__285121,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__285113__$1 = s__285113;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__285113__$1);
if(temp__4657__auto____$1){
var s__285113__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__285113__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__285113__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__285115 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__285114 = (0);
while(true){
if((i__285114 < size__36171__auto__)){
var item = cljs.core._nth.call(null,c__36170__auto__,i__285114);
cljs.core.chunk_append.call(null,b__285115,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__285229 = (i__285114 + (1));
i__285114 = G__285229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285115),tailrecursion$priority_map$iter__285110_$_iter__285112.call(null,cljs.core.chunk_rest.call(null,s__285113__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285115),null);
}
} else {
var item = cljs.core.first.call(null,s__285113__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__285110_$_iter__285112.call(null,cljs.core.rest.call(null,s__285113__$2)));
}
} else {
return null;
}
break;
}
});})(s__285111__$1,vec__285121,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__285111__$1,vec__285121,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,item_set));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,tailrecursion$priority_map$iter__285110.call(null,cljs.core.rest.call(null,s__285111__$1)));
} else {
var G__285235 = cljs.core.rest.call(null,s__285111__$1);
s__285111__$1 = G__285235;
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
return (function tailrecursion$priority_map$iter__285122(s__285123){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__285123__$1 = s__285123;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__285123__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__285132 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__285132,(0),null);
var item_set = cljs.core.nth.call(null,vec__285132,(1),null);
var iterys__36168__auto__ = ((function (s__285123__$1,vec__285132,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__285122_$_iter__285124(s__285125){
return (new cljs.core.LazySeq(null,((function (s__285123__$1,vec__285132,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__285125__$1 = s__285125;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__285125__$1);
if(temp__4657__auto____$1){
var s__285125__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__285125__$2)){
var c__36170__auto__ = cljs.core.chunk_first.call(null,s__285125__$2);
var size__36171__auto__ = cljs.core.count.call(null,c__36170__auto__);
var b__285127 = cljs.core.chunk_buffer.call(null,size__36171__auto__);
if((function (){var i__285126 = (0);
while(true){
if((i__285126 < size__36171__auto__)){
var item = cljs.core._nth.call(null,c__36170__auto__,i__285126);
cljs.core.chunk_append.call(null,b__285127,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__285238 = (i__285126 + (1));
i__285126 = G__285238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285127),tailrecursion$priority_map$iter__285122_$_iter__285124.call(null,cljs.core.chunk_rest.call(null,s__285125__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__285127),null);
}
} else {
var item = cljs.core.first.call(null,s__285125__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__285122_$_iter__285124.call(null,cljs.core.rest.call(null,s__285125__$2)));
}
} else {
return null;
}
break;
}
});})(s__285123__$1,vec__285132,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__285123__$1,vec__285132,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__36169__auto__ = cljs.core.seq.call(null,iterys__36168__auto__.call(null,item_set));
if(fs__36169__auto__){
return cljs.core.concat.call(null,fs__36169__auto__,tailrecursion$priority_map$iter__285122.call(null,cljs.core.rest.call(null,s__285123__$1)));
} else {
var G__285249 = cljs.core.rest.call(null,s__285123__$1);
s__285123__$1 = G__285249;
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
var args285250 = [];
var len__36461__auto___285253 = arguments.length;
var i__36462__auto___285254 = (0);
while(true){
if((i__36462__auto___285254 < len__36461__auto___285253)){
args285250.push((arguments[i__36462__auto___285254]));

var G__285255 = (i__36462__auto___285254 + (1));
i__36462__auto___285254 = G__285255;
continue;
} else {
}
break;
}

var G__285252 = args285250.length;
switch (G__285252) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args285250.length)].join('')));

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
var len__36461__auto___285266 = arguments.length;
var i__36462__auto___285267 = (0);
while(true){
if((i__36462__auto___285267 < len__36461__auto___285266)){
args__36468__auto__.push((arguments[i__36462__auto___285267]));

var G__285268 = (i__36462__auto___285267 + (1));
i__36462__auto___285267 = G__285268;
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
var G__285271 = cljs.core.nnext.call(null,in$);
var G__285272 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__285271;
out = G__285272;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq285257){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq285257));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__36468__auto__ = [];
var len__36461__auto___285280 = arguments.length;
var i__36462__auto___285281 = (0);
while(true){
if((i__36462__auto___285281 < len__36461__auto___285280)){
args__36468__auto__.push((arguments[i__36462__auto___285281]));

var G__285285 = (i__36462__auto___285281 + (1));
i__36462__auto___285281 = G__285285;
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
var G__285288 = cljs.core.nnext.call(null,in$);
var G__285289 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__285288;
out = G__285289;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq285273){
var G__285274 = cljs.core.first.call(null,seq285273);
var seq285273__$1 = cljs.core.next.call(null,seq285273);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__285274,seq285273__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__36468__auto__ = [];
var len__36461__auto___285300 = arguments.length;
var i__36462__auto___285301 = (0);
while(true){
if((i__36462__auto___285301 < len__36461__auto___285300)){
args__36468__auto__.push((arguments[i__36462__auto___285301]));

var G__285302 = (i__36462__auto___285301 + (1));
i__36462__auto___285301 = G__285302;
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
var G__285306 = cljs.core.nnext.call(null,in$);
var G__285307 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__285306;
out = G__285307;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq285295){
var G__285296 = cljs.core.first.call(null,seq285295);
var seq285295__$1 = cljs.core.next.call(null,seq285295);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(G__285296,seq285295__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__36468__auto__ = [];
var len__36461__auto___285312 = arguments.length;
var i__36462__auto___285313 = (0);
while(true){
if((i__36462__auto___285313 < len__36461__auto___285312)){
args__36468__auto__.push((arguments[i__36462__auto___285313]));

var G__285317 = (i__36462__auto___285313 + (1));
i__36462__auto___285313 = G__285317;
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
var G__285319 = cljs.core.nnext.call(null,in$);
var G__285320 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__285319;
out = G__285320;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq285308){
var G__285309 = cljs.core.first.call(null,seq285308);
var seq285308__$1 = cljs.core.next.call(null,seq285308);
var G__285310 = cljs.core.first.call(null,seq285308__$1);
var seq285308__$2 = cljs.core.next.call(null,seq285308__$1);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic(G__285309,G__285310,seq285308__$2);
});
