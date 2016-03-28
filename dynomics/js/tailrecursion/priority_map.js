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
return (function tailrecursion$priority_map$iter__450035(s__450036){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__450036__$1 = s__450036;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__450036__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__450050 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__450050,(0),null);
var item_set = cljs.core.nth.call(null,vec__450050,(1),null);
var iterys__35967__auto__ = ((function (s__450036__$1,vec__450050,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__450035_$_iter__450037(s__450038){
return (new cljs.core.LazySeq(null,((function (s__450036__$1,vec__450050,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__450038__$1 = s__450038;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__450038__$1);
if(temp__4657__auto____$1){
var s__450038__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__450038__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__450038__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__450040 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__450039 = (0);
while(true){
if((i__450039 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__450039);
cljs.core.chunk_append.call(null,b__450040,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__450205 = (i__450039 + (1));
i__450039 = G__450205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450040),tailrecursion$priority_map$iter__450035_$_iter__450037.call(null,cljs.core.chunk_rest.call(null,s__450038__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450040),null);
}
} else {
var item = cljs.core.first.call(null,s__450038__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__450035_$_iter__450037.call(null,cljs.core.rest.call(null,s__450038__$2)));
}
} else {
return null;
}
break;
}
});})(s__450036__$1,vec__450050,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__450036__$1,vec__450050,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__450035.call(null,cljs.core.rest.call(null,s__450036__$1)));
} else {
var G__450215 = cljs.core.rest.call(null,s__450036__$1);
s__450036__$1 = G__450215;
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
return (function tailrecursion$priority_map$iter__450071(s__450072){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__450072__$1 = s__450072;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__450072__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__450092 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__450092,(0),null);
var item_set = cljs.core.nth.call(null,vec__450092,(1),null);
var iterys__35967__auto__ = ((function (s__450072__$1,vec__450092,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__450071_$_iter__450073(s__450074){
return (new cljs.core.LazySeq(null,((function (s__450072__$1,vec__450092,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__450074__$1 = s__450074;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__450074__$1);
if(temp__4657__auto____$1){
var s__450074__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__450074__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__450074__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__450076 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__450075 = (0);
while(true){
if((i__450075 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__450075);
cljs.core.chunk_append.call(null,b__450076,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__450220 = (i__450075 + (1));
i__450075 = G__450220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450076),tailrecursion$priority_map$iter__450071_$_iter__450073.call(null,cljs.core.chunk_rest.call(null,s__450074__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450076),null);
}
} else {
var item = cljs.core.first.call(null,s__450074__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__450071_$_iter__450073.call(null,cljs.core.rest.call(null,s__450074__$2)));
}
} else {
return null;
}
break;
}
});})(s__450072__$1,vec__450092,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__450072__$1,vec__450092,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__450071.call(null,cljs.core.rest.call(null,s__450072__$1)));
} else {
var G__450221 = cljs.core.rest.call(null,s__450072__$1);
s__450072__$1 = G__450221;
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
return (function tailrecursion$priority_map$iter__450103(s__450104){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__450104__$1 = s__450104;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__450104__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__450114 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__450114,(0),null);
var item_set = cljs.core.nth.call(null,vec__450114,(1),null);
var iterys__35967__auto__ = ((function (s__450104__$1,vec__450114,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__450103_$_iter__450105(s__450106){
return (new cljs.core.LazySeq(null,((function (s__450104__$1,vec__450114,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__450106__$1 = s__450106;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__450106__$1);
if(temp__4657__auto____$1){
var s__450106__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__450106__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__450106__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__450108 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__450107 = (0);
while(true){
if((i__450107 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__450107);
cljs.core.chunk_append.call(null,b__450108,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__450233 = (i__450107 + (1));
i__450107 = G__450233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450108),tailrecursion$priority_map$iter__450103_$_iter__450105.call(null,cljs.core.chunk_rest.call(null,s__450106__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450108),null);
}
} else {
var item = cljs.core.first.call(null,s__450106__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__450103_$_iter__450105.call(null,cljs.core.rest.call(null,s__450106__$2)));
}
} else {
return null;
}
break;
}
});})(s__450104__$1,vec__450114,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__450104__$1,vec__450114,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__450103.call(null,cljs.core.rest.call(null,s__450104__$1)));
} else {
var G__450246 = cljs.core.rest.call(null,s__450104__$1);
s__450104__$1 = G__450246;
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
return (function tailrecursion$priority_map$iter__450125(s__450126){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__450126__$1 = s__450126;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__450126__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__450143 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__450143,(0),null);
var item_set = cljs.core.nth.call(null,vec__450143,(1),null);
var iterys__35967__auto__ = ((function (s__450126__$1,vec__450143,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__450125_$_iter__450127(s__450128){
return (new cljs.core.LazySeq(null,((function (s__450126__$1,vec__450143,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__450128__$1 = s__450128;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__450128__$1);
if(temp__4657__auto____$1){
var s__450128__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__450128__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__450128__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__450130 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__450129 = (0);
while(true){
if((i__450129 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__450129);
cljs.core.chunk_append.call(null,b__450130,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__450247 = (i__450129 + (1));
i__450129 = G__450247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450130),tailrecursion$priority_map$iter__450125_$_iter__450127.call(null,cljs.core.chunk_rest.call(null,s__450128__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450130),null);
}
} else {
var item = cljs.core.first.call(null,s__450128__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__450125_$_iter__450127.call(null,cljs.core.rest.call(null,s__450128__$2)));
}
} else {
return null;
}
break;
}
});})(s__450126__$1,vec__450143,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__450126__$1,vec__450143,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__450125.call(null,cljs.core.rest.call(null,s__450126__$1)));
} else {
var G__450254 = cljs.core.rest.call(null,s__450126__$1);
s__450126__$1 = G__450254;
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
var G__450255 = null;
var G__450255__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__450255__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__450255 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__450255__2.call(this,self__,item);
case 3:
return G__450255__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__450255.cljs$core$IFn$_invoke$arity$2 = G__450255__2;
G__450255.cljs$core$IFn$_invoke$arity$3 = G__450255__3;
return G__450255;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args450032){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args450032)));
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
return (function tailrecursion$priority_map$iter__450151(s__450152){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__450152__$1 = s__450152;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__450152__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__450158 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__450158,(0),null);
var item_set = cljs.core.nth.call(null,vec__450158,(1),null);
var iterys__35967__auto__ = ((function (s__450152__$1,vec__450158,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__450151_$_iter__450153(s__450154){
return (new cljs.core.LazySeq(null,((function (s__450152__$1,vec__450158,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__450154__$1 = s__450154;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__450154__$1);
if(temp__4657__auto____$1){
var s__450154__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__450154__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__450154__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__450156 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__450155 = (0);
while(true){
if((i__450155 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__450155);
cljs.core.chunk_append.call(null,b__450156,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__450268 = (i__450155 + (1));
i__450155 = G__450268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450156),tailrecursion$priority_map$iter__450151_$_iter__450153.call(null,cljs.core.chunk_rest.call(null,s__450154__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450156),null);
}
} else {
var item = cljs.core.first.call(null,s__450154__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__450151_$_iter__450153.call(null,cljs.core.rest.call(null,s__450154__$2)));
}
} else {
return null;
}
break;
}
});})(s__450152__$1,vec__450158,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__450152__$1,vec__450158,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__450151.call(null,cljs.core.rest.call(null,s__450152__$1)));
} else {
var G__450270 = cljs.core.rest.call(null,s__450152__$1);
s__450152__$1 = G__450270;
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
return (function tailrecursion$priority_map$iter__450160(s__450161){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__450161__$1 = s__450161;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__450161__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__450170 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__450170,(0),null);
var item_set = cljs.core.nth.call(null,vec__450170,(1),null);
var iterys__35967__auto__ = ((function (s__450161__$1,vec__450170,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__450160_$_iter__450162(s__450163){
return (new cljs.core.LazySeq(null,((function (s__450161__$1,vec__450170,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__450163__$1 = s__450163;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__450163__$1);
if(temp__4657__auto____$1){
var s__450163__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__450163__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__450163__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__450165 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__450164 = (0);
while(true){
if((i__450164 < size__35970__auto__)){
var item = cljs.core._nth.call(null,c__35969__auto__,i__450164);
cljs.core.chunk_append.call(null,b__450165,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__450282 = (i__450164 + (1));
i__450164 = G__450282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450165),tailrecursion$priority_map$iter__450160_$_iter__450162.call(null,cljs.core.chunk_rest.call(null,s__450163__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__450165),null);
}
} else {
var item = cljs.core.first.call(null,s__450163__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__450160_$_iter__450162.call(null,cljs.core.rest.call(null,s__450163__$2)));
}
} else {
return null;
}
break;
}
});})(s__450161__$1,vec__450170,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__450161__$1,vec__450170,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__35968__auto__ = cljs.core.seq.call(null,iterys__35967__auto__.call(null,item_set));
if(fs__35968__auto__){
return cljs.core.concat.call(null,fs__35968__auto__,tailrecursion$priority_map$iter__450160.call(null,cljs.core.rest.call(null,s__450161__$1)));
} else {
var G__450283 = cljs.core.rest.call(null,s__450161__$1);
s__450161__$1 = G__450283;
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
var args450291 = [];
var len__36260__auto___450295 = arguments.length;
var i__36261__auto___450296 = (0);
while(true){
if((i__36261__auto___450296 < len__36260__auto___450295)){
args450291.push((arguments[i__36261__auto___450296]));

var G__450299 = (i__36261__auto___450296 + (1));
i__36261__auto___450296 = G__450299;
continue;
} else {
}
break;
}

var G__450293 = args450291.length;
switch (G__450293) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args450291.length)].join('')));

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
var len__36260__auto___450311 = arguments.length;
var i__36261__auto___450312 = (0);
while(true){
if((i__36261__auto___450312 < len__36260__auto___450311)){
args__36267__auto__.push((arguments[i__36261__auto___450312]));

var G__450313 = (i__36261__auto___450312 + (1));
i__36261__auto___450312 = G__450313;
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
var G__450314 = cljs.core.nnext.call(null,in$);
var G__450315 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__450314;
out = G__450315;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq450310){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq450310));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__36267__auto__ = [];
var len__36260__auto___450321 = arguments.length;
var i__36261__auto___450324 = (0);
while(true){
if((i__36261__auto___450324 < len__36260__auto___450321)){
args__36267__auto__.push((arguments[i__36261__auto___450324]));

var G__450326 = (i__36261__auto___450324 + (1));
i__36261__auto___450324 = G__450326;
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
var G__450327 = cljs.core.nnext.call(null,in$);
var G__450328 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__450327;
out = G__450328;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq450316){
var G__450317 = cljs.core.first.call(null,seq450316);
var seq450316__$1 = cljs.core.next.call(null,seq450316);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__450317,seq450316__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__36267__auto__ = [];
var len__36260__auto___450335 = arguments.length;
var i__36261__auto___450336 = (0);
while(true){
if((i__36261__auto___450336 < len__36260__auto___450335)){
args__36267__auto__.push((arguments[i__36261__auto___450336]));

var G__450337 = (i__36261__auto___450336 + (1));
i__36261__auto___450336 = G__450337;
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
var G__450338 = cljs.core.nnext.call(null,in$);
var G__450339 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__450338;
out = G__450339;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq450330){
var G__450331 = cljs.core.first.call(null,seq450330);
var seq450330__$1 = cljs.core.next.call(null,seq450330);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(G__450331,seq450330__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__36267__auto__ = [];
var len__36260__auto___450344 = arguments.length;
var i__36261__auto___450345 = (0);
while(true){
if((i__36261__auto___450345 < len__36260__auto___450344)){
args__36267__auto__.push((arguments[i__36261__auto___450345]));

var G__450346 = (i__36261__auto___450345 + (1));
i__36261__auto___450345 = G__450346;
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
var G__450347 = cljs.core.nnext.call(null,in$);
var G__450348 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__450347;
out = G__450348;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq450340){
var G__450341 = cljs.core.first.call(null,seq450340);
var seq450340__$1 = cljs.core.next.call(null,seq450340);
var G__450342 = cljs.core.first.call(null,seq450340__$1);
var seq450340__$2 = cljs.core.next.call(null,seq450340__$1);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic(G__450341,G__450342,seq450340__$2);
});
