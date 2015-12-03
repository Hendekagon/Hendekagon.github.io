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
return cljs.core.seq.call(null,(function (){var iter__24937__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__42079(s__42080){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__42080__$1 = s__42080;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__42080__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__42086 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__42086,(0),null);
var item_set = cljs.core.nth.call(null,vec__42086,(1),null);
var iterys__24933__auto__ = ((function (s__42080__$1,vec__42086,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__42079_$_iter__42081(s__42082){
return (new cljs.core.LazySeq(null,((function (s__42080__$1,vec__42086,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__42082__$1 = s__42082;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__42082__$1);
if(temp__4425__auto____$1){
var s__42082__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42082__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__42082__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__42084 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__42083 = (0);
while(true){
if((i__42083 < size__24936__auto__)){
var item = cljs.core._nth.call(null,c__24935__auto__,i__42083);
cljs.core.chunk_append.call(null,b__42084,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__42127 = (i__42083 + (1));
i__42083 = G__42127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42084),tailrecursion$priority_map$iter__42079_$_iter__42081.call(null,cljs.core.chunk_rest.call(null,s__42082__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42084),null);
}
} else {
var item = cljs.core.first.call(null,s__42082__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__42079_$_iter__42081.call(null,cljs.core.rest.call(null,s__42082__$2)));
}
} else {
return null;
}
break;
}
});})(s__42080__$1,vec__42086,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__42080__$1,vec__42086,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,item_set));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,tailrecursion$priority_map$iter__42079.call(null,cljs.core.rest.call(null,s__42080__$1)));
} else {
var G__42128 = cljs.core.rest.call(null,s__42080__$1);
s__42080__$1 = G__42128;
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
return iter__24937__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__24937__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__42087(s__42088){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__42088__$1 = s__42088;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__42088__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__42094 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__42094,(0),null);
var item_set = cljs.core.nth.call(null,vec__42094,(1),null);
var iterys__24933__auto__ = ((function (s__42088__$1,vec__42094,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__42087_$_iter__42089(s__42090){
return (new cljs.core.LazySeq(null,((function (s__42088__$1,vec__42094,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__42090__$1 = s__42090;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__42090__$1);
if(temp__4425__auto____$1){
var s__42090__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42090__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__42090__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__42092 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__42091 = (0);
while(true){
if((i__42091 < size__24936__auto__)){
var item = cljs.core._nth.call(null,c__24935__auto__,i__42091);
cljs.core.chunk_append.call(null,b__42092,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__42129 = (i__42091 + (1));
i__42091 = G__42129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42092),tailrecursion$priority_map$iter__42087_$_iter__42089.call(null,cljs.core.chunk_rest.call(null,s__42090__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42092),null);
}
} else {
var item = cljs.core.first.call(null,s__42090__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__42087_$_iter__42089.call(null,cljs.core.rest.call(null,s__42090__$2)));
}
} else {
return null;
}
break;
}
});})(s__42088__$1,vec__42094,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__42088__$1,vec__42094,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,item_set));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,tailrecursion$priority_map$iter__42087.call(null,cljs.core.rest.call(null,s__42088__$1)));
} else {
var G__42130 = cljs.core.rest.call(null,s__42088__$1);
s__42088__$1 = G__42130;
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
return iter__24937__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__24600__auto__ = self__.__hash;
if(!((h__24600__auto__ == null))){
return h__24600__auto__;
} else {
var h__24600__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);
self__.__hash = h__24600__auto____$1;

return h__24600__auto____$1;
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
return cljs.core.seq.call(null,(function (){var iter__24937__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__42095(s__42096){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__42096__$1 = s__42096;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__42096__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__42102 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__42102,(0),null);
var item_set = cljs.core.nth.call(null,vec__42102,(1),null);
var iterys__24933__auto__ = ((function (s__42096__$1,vec__42102,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__42095_$_iter__42097(s__42098){
return (new cljs.core.LazySeq(null,((function (s__42096__$1,vec__42102,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__42098__$1 = s__42098;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__42098__$1);
if(temp__4425__auto____$1){
var s__42098__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42098__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__42098__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__42100 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__42099 = (0);
while(true){
if((i__42099 < size__24936__auto__)){
var item = cljs.core._nth.call(null,c__24935__auto__,i__42099);
cljs.core.chunk_append.call(null,b__42100,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__42131 = (i__42099 + (1));
i__42099 = G__42131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42100),tailrecursion$priority_map$iter__42095_$_iter__42097.call(null,cljs.core.chunk_rest.call(null,s__42098__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42100),null);
}
} else {
var item = cljs.core.first.call(null,s__42098__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__42095_$_iter__42097.call(null,cljs.core.rest.call(null,s__42098__$2)));
}
} else {
return null;
}
break;
}
});})(s__42096__$1,vec__42102,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__42096__$1,vec__42102,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,item_set));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,tailrecursion$priority_map$iter__42095.call(null,cljs.core.rest.call(null,s__42096__$1)));
} else {
var G__42132 = cljs.core.rest.call(null,s__42096__$1);
s__42096__$1 = G__42132;
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
return iter__24937__auto__.call(null,self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__24937__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__42103(s__42104){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__42104__$1 = s__42104;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__42104__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__42110 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__42110,(0),null);
var item_set = cljs.core.nth.call(null,vec__42110,(1),null);
var iterys__24933__auto__ = ((function (s__42104__$1,vec__42110,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__42103_$_iter__42105(s__42106){
return (new cljs.core.LazySeq(null,((function (s__42104__$1,vec__42110,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__42106__$1 = s__42106;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__42106__$1);
if(temp__4425__auto____$1){
var s__42106__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42106__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__42106__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__42108 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__42107 = (0);
while(true){
if((i__42107 < size__24936__auto__)){
var item = cljs.core._nth.call(null,c__24935__auto__,i__42107);
cljs.core.chunk_append.call(null,b__42108,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__42133 = (i__42107 + (1));
i__42107 = G__42133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42108),tailrecursion$priority_map$iter__42103_$_iter__42105.call(null,cljs.core.chunk_rest.call(null,s__42106__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42108),null);
}
} else {
var item = cljs.core.first.call(null,s__42106__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__42103_$_iter__42105.call(null,cljs.core.rest.call(null,s__42106__$2)));
}
} else {
return null;
}
break;
}
});})(s__42104__$1,vec__42110,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__42104__$1,vec__42110,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,item_set));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,tailrecursion$priority_map$iter__42103.call(null,cljs.core.rest.call(null,s__42104__$1)));
} else {
var G__42134 = cljs.core.rest.call(null,s__42104__$1);
s__42104__$1 = G__42134;
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
return iter__24937__auto__.call(null,self__.priority__GT_set_of_items);
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
var G__42135 = null;
var G__42135__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__42135__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__42135 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__42135__2.call(this,self__,item);
case 3:
return G__42135__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42135.cljs$core$IFn$_invoke$arity$2 = G__42135__2;
G__42135.cljs$core$IFn$_invoke$arity$3 = G__42135__3;
return G__42135;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args42078){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args42078)));
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
return cljs.core.seq.call(null,(function (){var iter__24937__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__42111(s__42112){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__42112__$1 = s__42112;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__42112__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__42118 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__42118,(0),null);
var item_set = cljs.core.nth.call(null,vec__42118,(1),null);
var iterys__24933__auto__ = ((function (s__42112__$1,vec__42118,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__42111_$_iter__42113(s__42114){
return (new cljs.core.LazySeq(null,((function (s__42112__$1,vec__42118,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__42114__$1 = s__42114;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__42114__$1);
if(temp__4425__auto____$1){
var s__42114__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42114__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__42114__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__42116 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__42115 = (0);
while(true){
if((i__42115 < size__24936__auto__)){
var item = cljs.core._nth.call(null,c__24935__auto__,i__42115);
cljs.core.chunk_append.call(null,b__42116,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__42136 = (i__42115 + (1));
i__42115 = G__42136;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42116),tailrecursion$priority_map$iter__42111_$_iter__42113.call(null,cljs.core.chunk_rest.call(null,s__42114__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42116),null);
}
} else {
var item = cljs.core.first.call(null,s__42114__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__42111_$_iter__42113.call(null,cljs.core.rest.call(null,s__42114__$2)));
}
} else {
return null;
}
break;
}
});})(s__42112__$1,vec__42118,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__42112__$1,vec__42118,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,item_set));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,tailrecursion$priority_map$iter__42111.call(null,cljs.core.rest.call(null,s__42112__$1)));
} else {
var G__42137 = cljs.core.rest.call(null,s__42112__$1);
s__42112__$1 = G__42137;
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
return iter__24937__auto__.call(null,sets);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__24937__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__42119(s__42120){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__42120__$1 = s__42120;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__42120__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__42126 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__42126,(0),null);
var item_set = cljs.core.nth.call(null,vec__42126,(1),null);
var iterys__24933__auto__ = ((function (s__42120__$1,vec__42126,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__42119_$_iter__42121(s__42122){
return (new cljs.core.LazySeq(null,((function (s__42120__$1,vec__42126,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__42122__$1 = s__42122;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__42122__$1);
if(temp__4425__auto____$1){
var s__42122__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42122__$2)){
var c__24935__auto__ = cljs.core.chunk_first.call(null,s__42122__$2);
var size__24936__auto__ = cljs.core.count.call(null,c__24935__auto__);
var b__42124 = cljs.core.chunk_buffer.call(null,size__24936__auto__);
if((function (){var i__42123 = (0);
while(true){
if((i__42123 < size__24936__auto__)){
var item = cljs.core._nth.call(null,c__24935__auto__,i__42123);
cljs.core.chunk_append.call(null,b__42124,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__42138 = (i__42123 + (1));
i__42123 = G__42138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42124),tailrecursion$priority_map$iter__42119_$_iter__42121.call(null,cljs.core.chunk_rest.call(null,s__42122__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42124),null);
}
} else {
var item = cljs.core.first.call(null,s__42122__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__42119_$_iter__42121.call(null,cljs.core.rest.call(null,s__42122__$2)));
}
} else {
return null;
}
break;
}
});})(s__42120__$1,vec__42126,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__42120__$1,vec__42126,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__24934__auto__ = cljs.core.seq.call(null,iterys__24933__auto__.call(null,item_set));
if(fs__24934__auto__){
return cljs.core.concat.call(null,fs__24934__auto__,tailrecursion$priority_map$iter__42119.call(null,cljs.core.rest.call(null,s__42120__$1)));
} else {
var G__42139 = cljs.core.rest.call(null,s__42120__$1);
s__42120__$1 = G__42139;
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
return iter__24937__auto__.call(null,sets);
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

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var args42140 = [];
var len__25223__auto___42143 = arguments.length;
var i__25224__auto___42144 = (0);
while(true){
if((i__25224__auto___42144 < len__25223__auto___42143)){
args42140.push((arguments[i__25224__auto___42144]));

var G__42145 = (i__25224__auto___42144 + (1));
i__25224__auto___42144 = G__42145;
continue;
} else {
}
break;
}

var G__42142 = args42140.length;
switch (G__42142) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42140.length)].join('')));

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
var args__25230__auto__ = [];
var len__25223__auto___42148 = arguments.length;
var i__25224__auto___42149 = (0);
while(true){
if((i__25224__auto___42149 < len__25223__auto___42148)){
args__25230__auto__.push((arguments[i__25224__auto___42149]));

var G__42150 = (i__25224__auto___42149 + (1));
i__25224__auto___42149 = G__42150;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((0) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((0)),(0))):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25231__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__42151 = cljs.core.nnext.call(null,in$);
var G__42152 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__42151;
out = G__42152;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq42147){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42147));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__25230__auto__ = [];
var len__25223__auto___42155 = arguments.length;
var i__25224__auto___42156 = (0);
while(true){
if((i__25224__auto___42156 < len__25223__auto___42155)){
args__25230__auto__.push((arguments[i__25224__auto___42156]));

var G__42157 = (i__25224__auto___42156 + (1));
i__25224__auto___42156 = G__42157;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((1) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((1)),(0))):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25231__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);
while(true){
if(in$){
var G__42158 = cljs.core.nnext.call(null,in$);
var G__42159 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__42158;
out = G__42159;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq42153){
var G__42154 = cljs.core.first.call(null,seq42153);
var seq42153__$1 = cljs.core.next.call(null,seq42153);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__42154,seq42153__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__25230__auto__ = [];
var len__25223__auto___42162 = arguments.length;
var i__25224__auto___42163 = (0);
while(true){
if((i__25224__auto___42163 < len__25223__auto___42162)){
args__25230__auto__.push((arguments[i__25224__auto___42163]));

var G__42164 = (i__25224__auto___42163 + (1));
i__25224__auto___42163 = G__42164;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((1) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((1)),(0))):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25231__auto__);
});

tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn);
while(true){
if(in$){
var G__42165 = cljs.core.nnext.call(null,in$);
var G__42166 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__42165;
out = G__42166;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq42160){
var G__42161 = cljs.core.first.call(null,seq42160);
var seq42160__$1 = cljs.core.next.call(null,seq42160);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(G__42161,seq42160__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__25230__auto__ = [];
var len__25223__auto___42170 = arguments.length;
var i__25224__auto___42171 = (0);
while(true){
if((i__25224__auto___42171 < len__25223__auto___42170)){
args__25230__auto__.push((arguments[i__25224__auto___42171]));

var G__42172 = (i__25224__auto___42171 + (1));
i__25224__auto___42171 = G__42172;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((2) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((2)),(0))):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25231__auto__);
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn,comparator);
while(true){
if(in$){
var G__42173 = cljs.core.nnext.call(null,in$);
var G__42174 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__42173;
out = G__42174;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq42167){
var G__42168 = cljs.core.first.call(null,seq42167);
var seq42167__$1 = cljs.core.next.call(null,seq42167);
var G__42169 = cljs.core.first.call(null,seq42167__$1);
var seq42167__$2 = cljs.core.next.call(null,seq42167__$1);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic(G__42168,G__42169,seq42167__$2);
});

//# sourceMappingURL=priority_map.js.map