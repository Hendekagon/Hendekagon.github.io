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
return (function tailrecursion$priority_map$iter__650072(s__650073){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__650073__$1 = s__650073;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__650073__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__650079 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__650079,(0),null);
var item_set = cljs.core.nth.call(null,vec__650079,(1),null);
var iterys__24979__auto__ = ((function (s__650073__$1,vec__650079,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__650072_$_iter__650074(s__650075){
return (new cljs.core.LazySeq(null,((function (s__650073__$1,vec__650079,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__650075__$1 = s__650075;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__650075__$1);
if(temp__4425__auto____$1){
var s__650075__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__650075__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__650075__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__650077 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__650076 = (0);
while(true){
if((i__650076 < size__24982__auto__)){
var item = cljs.core._nth.call(null,c__24981__auto__,i__650076);
cljs.core.chunk_append.call(null,b__650077,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__650120 = (i__650076 + (1));
i__650076 = G__650120;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650077),tailrecursion$priority_map$iter__650072_$_iter__650074.call(null,cljs.core.chunk_rest.call(null,s__650075__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650077),null);
}
} else {
var item = cljs.core.first.call(null,s__650075__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__650072_$_iter__650074.call(null,cljs.core.rest.call(null,s__650075__$2)));
}
} else {
return null;
}
break;
}
});})(s__650073__$1,vec__650079,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__650073__$1,vec__650079,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,item_set));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,tailrecursion$priority_map$iter__650072.call(null,cljs.core.rest.call(null,s__650073__$1)));
} else {
var G__650121 = cljs.core.rest.call(null,s__650073__$1);
s__650073__$1 = G__650121;
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
return (function tailrecursion$priority_map$iter__650080(s__650081){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__650081__$1 = s__650081;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__650081__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__650087 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__650087,(0),null);
var item_set = cljs.core.nth.call(null,vec__650087,(1),null);
var iterys__24979__auto__ = ((function (s__650081__$1,vec__650087,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__650080_$_iter__650082(s__650083){
return (new cljs.core.LazySeq(null,((function (s__650081__$1,vec__650087,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__650083__$1 = s__650083;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__650083__$1);
if(temp__4425__auto____$1){
var s__650083__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__650083__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__650083__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__650085 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__650084 = (0);
while(true){
if((i__650084 < size__24982__auto__)){
var item = cljs.core._nth.call(null,c__24981__auto__,i__650084);
cljs.core.chunk_append.call(null,b__650085,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__650122 = (i__650084 + (1));
i__650084 = G__650122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650085),tailrecursion$priority_map$iter__650080_$_iter__650082.call(null,cljs.core.chunk_rest.call(null,s__650083__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650085),null);
}
} else {
var item = cljs.core.first.call(null,s__650083__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__650080_$_iter__650082.call(null,cljs.core.rest.call(null,s__650083__$2)));
}
} else {
return null;
}
break;
}
});})(s__650081__$1,vec__650087,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__650081__$1,vec__650087,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,item_set));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,tailrecursion$priority_map$iter__650080.call(null,cljs.core.rest.call(null,s__650081__$1)));
} else {
var G__650123 = cljs.core.rest.call(null,s__650081__$1);
s__650081__$1 = G__650123;
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
return (function tailrecursion$priority_map$iter__650088(s__650089){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__650089__$1 = s__650089;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__650089__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__650095 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__650095,(0),null);
var item_set = cljs.core.nth.call(null,vec__650095,(1),null);
var iterys__24979__auto__ = ((function (s__650089__$1,vec__650095,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__650088_$_iter__650090(s__650091){
return (new cljs.core.LazySeq(null,((function (s__650089__$1,vec__650095,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__650091__$1 = s__650091;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__650091__$1);
if(temp__4425__auto____$1){
var s__650091__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__650091__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__650091__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__650093 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__650092 = (0);
while(true){
if((i__650092 < size__24982__auto__)){
var item = cljs.core._nth.call(null,c__24981__auto__,i__650092);
cljs.core.chunk_append.call(null,b__650093,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__650124 = (i__650092 + (1));
i__650092 = G__650124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650093),tailrecursion$priority_map$iter__650088_$_iter__650090.call(null,cljs.core.chunk_rest.call(null,s__650091__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650093),null);
}
} else {
var item = cljs.core.first.call(null,s__650091__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__650088_$_iter__650090.call(null,cljs.core.rest.call(null,s__650091__$2)));
}
} else {
return null;
}
break;
}
});})(s__650089__$1,vec__650095,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__650089__$1,vec__650095,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,item_set));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,tailrecursion$priority_map$iter__650088.call(null,cljs.core.rest.call(null,s__650089__$1)));
} else {
var G__650125 = cljs.core.rest.call(null,s__650089__$1);
s__650089__$1 = G__650125;
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
return (function tailrecursion$priority_map$iter__650096(s__650097){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__650097__$1 = s__650097;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__650097__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__650103 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__650103,(0),null);
var item_set = cljs.core.nth.call(null,vec__650103,(1),null);
var iterys__24979__auto__ = ((function (s__650097__$1,vec__650103,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__650096_$_iter__650098(s__650099){
return (new cljs.core.LazySeq(null,((function (s__650097__$1,vec__650103,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__650099__$1 = s__650099;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__650099__$1);
if(temp__4425__auto____$1){
var s__650099__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__650099__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__650099__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__650101 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__650100 = (0);
while(true){
if((i__650100 < size__24982__auto__)){
var item = cljs.core._nth.call(null,c__24981__auto__,i__650100);
cljs.core.chunk_append.call(null,b__650101,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__650126 = (i__650100 + (1));
i__650100 = G__650126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650101),tailrecursion$priority_map$iter__650096_$_iter__650098.call(null,cljs.core.chunk_rest.call(null,s__650099__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650101),null);
}
} else {
var item = cljs.core.first.call(null,s__650099__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__650096_$_iter__650098.call(null,cljs.core.rest.call(null,s__650099__$2)));
}
} else {
return null;
}
break;
}
});})(s__650097__$1,vec__650103,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__650097__$1,vec__650103,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,item_set));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,tailrecursion$priority_map$iter__650096.call(null,cljs.core.rest.call(null,s__650097__$1)));
} else {
var G__650127 = cljs.core.rest.call(null,s__650097__$1);
s__650097__$1 = G__650127;
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
var G__650128 = null;
var G__650128__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__650128__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__650128 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__650128__2.call(this,self__,item);
case 3:
return G__650128__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__650128.cljs$core$IFn$_invoke$arity$2 = G__650128__2;
G__650128.cljs$core$IFn$_invoke$arity$3 = G__650128__3;
return G__650128;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args650071){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args650071)));
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
return (function tailrecursion$priority_map$iter__650104(s__650105){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__650105__$1 = s__650105;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__650105__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__650111 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__650111,(0),null);
var item_set = cljs.core.nth.call(null,vec__650111,(1),null);
var iterys__24979__auto__ = ((function (s__650105__$1,vec__650111,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__650104_$_iter__650106(s__650107){
return (new cljs.core.LazySeq(null,((function (s__650105__$1,vec__650111,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__650107__$1 = s__650107;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__650107__$1);
if(temp__4425__auto____$1){
var s__650107__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__650107__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__650107__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__650109 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__650108 = (0);
while(true){
if((i__650108 < size__24982__auto__)){
var item = cljs.core._nth.call(null,c__24981__auto__,i__650108);
cljs.core.chunk_append.call(null,b__650109,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__650129 = (i__650108 + (1));
i__650108 = G__650129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650109),tailrecursion$priority_map$iter__650104_$_iter__650106.call(null,cljs.core.chunk_rest.call(null,s__650107__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650109),null);
}
} else {
var item = cljs.core.first.call(null,s__650107__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__650104_$_iter__650106.call(null,cljs.core.rest.call(null,s__650107__$2)));
}
} else {
return null;
}
break;
}
});})(s__650105__$1,vec__650111,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__650105__$1,vec__650111,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,item_set));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,tailrecursion$priority_map$iter__650104.call(null,cljs.core.rest.call(null,s__650105__$1)));
} else {
var G__650130 = cljs.core.rest.call(null,s__650105__$1);
s__650105__$1 = G__650130;
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
return (function tailrecursion$priority_map$iter__650112(s__650113){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__650113__$1 = s__650113;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__650113__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__650119 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__650119,(0),null);
var item_set = cljs.core.nth.call(null,vec__650119,(1),null);
var iterys__24979__auto__ = ((function (s__650113__$1,vec__650119,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__650112_$_iter__650114(s__650115){
return (new cljs.core.LazySeq(null,((function (s__650113__$1,vec__650119,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__650115__$1 = s__650115;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__650115__$1);
if(temp__4425__auto____$1){
var s__650115__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__650115__$2)){
var c__24981__auto__ = cljs.core.chunk_first.call(null,s__650115__$2);
var size__24982__auto__ = cljs.core.count.call(null,c__24981__auto__);
var b__650117 = cljs.core.chunk_buffer.call(null,size__24982__auto__);
if((function (){var i__650116 = (0);
while(true){
if((i__650116 < size__24982__auto__)){
var item = cljs.core._nth.call(null,c__24981__auto__,i__650116);
cljs.core.chunk_append.call(null,b__650117,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__650131 = (i__650116 + (1));
i__650116 = G__650131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650117),tailrecursion$priority_map$iter__650112_$_iter__650114.call(null,cljs.core.chunk_rest.call(null,s__650115__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__650117),null);
}
} else {
var item = cljs.core.first.call(null,s__650115__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__650112_$_iter__650114.call(null,cljs.core.rest.call(null,s__650115__$2)));
}
} else {
return null;
}
break;
}
});})(s__650113__$1,vec__650119,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__650113__$1,vec__650119,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__24980__auto__ = cljs.core.seq.call(null,iterys__24979__auto__.call(null,item_set));
if(fs__24980__auto__){
return cljs.core.concat.call(null,fs__24980__auto__,tailrecursion$priority_map$iter__650112.call(null,cljs.core.rest.call(null,s__650113__$1)));
} else {
var G__650132 = cljs.core.rest.call(null,s__650113__$1);
s__650113__$1 = G__650132;
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
var args650133 = [];
var len__25269__auto___650136 = arguments.length;
var i__25270__auto___650137 = (0);
while(true){
if((i__25270__auto___650137 < len__25269__auto___650136)){
args650133.push((arguments[i__25270__auto___650137]));

var G__650138 = (i__25270__auto___650137 + (1));
i__25270__auto___650137 = G__650138;
continue;
} else {
}
break;
}

var G__650135 = args650133.length;
switch (G__650135) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args650133.length)].join('')));

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
var len__25269__auto___650141 = arguments.length;
var i__25270__auto___650142 = (0);
while(true){
if((i__25270__auto___650142 < len__25269__auto___650141)){
args__25276__auto__.push((arguments[i__25270__auto___650142]));

var G__650143 = (i__25270__auto___650142 + (1));
i__25270__auto___650142 = G__650143;
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
var G__650144 = cljs.core.nnext.call(null,in$);
var G__650145 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__650144;
out = G__650145;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq650140){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq650140));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__25276__auto__ = [];
var len__25269__auto___650148 = arguments.length;
var i__25270__auto___650149 = (0);
while(true){
if((i__25270__auto___650149 < len__25269__auto___650148)){
args__25276__auto__.push((arguments[i__25270__auto___650149]));

var G__650150 = (i__25270__auto___650149 + (1));
i__25270__auto___650149 = G__650150;
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
var G__650151 = cljs.core.nnext.call(null,in$);
var G__650152 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__650151;
out = G__650152;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq650146){
var G__650147 = cljs.core.first.call(null,seq650146);
var seq650146__$1 = cljs.core.next.call(null,seq650146);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__650147,seq650146__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__25276__auto__ = [];
var len__25269__auto___650155 = arguments.length;
var i__25270__auto___650156 = (0);
while(true){
if((i__25270__auto___650156 < len__25269__auto___650155)){
args__25276__auto__.push((arguments[i__25270__auto___650156]));

var G__650157 = (i__25270__auto___650156 + (1));
i__25270__auto___650156 = G__650157;
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
var G__650158 = cljs.core.nnext.call(null,in$);
var G__650159 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__650158;
out = G__650159;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq650153){
var G__650154 = cljs.core.first.call(null,seq650153);
var seq650153__$1 = cljs.core.next.call(null,seq650153);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(G__650154,seq650153__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__25276__auto__ = [];
var len__25269__auto___650163 = arguments.length;
var i__25270__auto___650164 = (0);
while(true){
if((i__25270__auto___650164 < len__25269__auto___650163)){
args__25276__auto__.push((arguments[i__25270__auto___650164]));

var G__650165 = (i__25270__auto___650164 + (1));
i__25270__auto___650164 = G__650165;
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
var G__650166 = cljs.core.nnext.call(null,in$);
var G__650167 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__650166;
out = G__650167;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq650160){
var G__650161 = cljs.core.first.call(null,seq650160);
var seq650160__$1 = cljs.core.next.call(null,seq650160);
var G__650162 = cljs.core.first.call(null,seq650160__$1);
var seq650160__$2 = cljs.core.next.call(null,seq650160__$1);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic(G__650161,G__650162,seq650160__$2);
});

//# sourceMappingURL=priority_map.js.map