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
return cljs.core.seq.call(null,(function (){var iter__26607__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__85927(s__85928){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__85928__$1 = s__85928;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__85928__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__85950 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__85950,(0),null);
var item_set = cljs.core.nth.call(null,vec__85950,(1),null);
var iterys__26603__auto__ = ((function (s__85928__$1,vec__85950,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__85927_$_iter__85929(s__85930){
return (new cljs.core.LazySeq(null,((function (s__85928__$1,vec__85950,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__85930__$1 = s__85930;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__85930__$1);
if(temp__4657__auto____$1){
var s__85930__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85930__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__85930__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__85932 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__85931 = (0);
while(true){
if((i__85931 < size__26606__auto__)){
var item = cljs.core._nth.call(null,c__26605__auto__,i__85931);
cljs.core.chunk_append.call(null,b__85932,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__86113 = (i__85931 + (1));
i__85931 = G__86113;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85932),tailrecursion$priority_map$iter__85927_$_iter__85929.call(null,cljs.core.chunk_rest.call(null,s__85930__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85932),null);
}
} else {
var item = cljs.core.first.call(null,s__85930__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__85927_$_iter__85929.call(null,cljs.core.rest.call(null,s__85930__$2)));
}
} else {
return null;
}
break;
}
});})(s__85928__$1,vec__85950,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__85928__$1,vec__85950,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,item_set));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,tailrecursion$priority_map$iter__85927.call(null,cljs.core.rest.call(null,s__85928__$1)));
} else {
var G__86114 = cljs.core.rest.call(null,s__85928__$1);
s__85928__$1 = G__86114;
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
return iter__26607__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__26607__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__85960(s__85961){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__85961__$1 = s__85961;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__85961__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__85969 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__85969,(0),null);
var item_set = cljs.core.nth.call(null,vec__85969,(1),null);
var iterys__26603__auto__ = ((function (s__85961__$1,vec__85969,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__85960_$_iter__85962(s__85963){
return (new cljs.core.LazySeq(null,((function (s__85961__$1,vec__85969,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1){
return (function (){
var s__85963__$1 = s__85963;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__85963__$1);
if(temp__4657__auto____$1){
var s__85963__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85963__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__85963__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__85965 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__85964 = (0);
while(true){
if((i__85964 < size__26606__auto__)){
var item = cljs.core._nth.call(null,c__26605__auto__,i__85964);
cljs.core.chunk_append.call(null,b__85965,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__86121 = (i__85964 + (1));
i__85964 = G__86121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85965),tailrecursion$priority_map$iter__85960_$_iter__85962.call(null,cljs.core.chunk_rest.call(null,s__85963__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85965),null);
}
} else {
var item = cljs.core.first.call(null,s__85963__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__85960_$_iter__85962.call(null,cljs.core.rest.call(null,s__85963__$2)));
}
} else {
return null;
}
break;
}
});})(s__85961__$1,vec__85969,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
,null,null));
});})(s__85961__$1,vec__85969,priority,item_set,xs__5205__auto__,temp__4657__auto__,coll__$1))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,item_set));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,tailrecursion$priority_map$iter__85960.call(null,cljs.core.rest.call(null,s__85961__$1)));
} else {
var G__86125 = cljs.core.rest.call(null,s__85961__$1);
s__85961__$1 = G__86125;
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
return iter__26607__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__26262__auto__ = self__.__hash;
if(!((h__26262__auto__ == null))){
return h__26262__auto__;
} else {
var h__26262__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);
self__.__hash = h__26262__auto____$1;

return h__26262__auto____$1;
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
return cljs.core.seq.call(null,(function (){var iter__26607__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__85993(s__85994){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__85994__$1 = s__85994;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__85994__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__86012 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__86012,(0),null);
var item_set = cljs.core.nth.call(null,vec__86012,(1),null);
var iterys__26603__auto__ = ((function (s__85994__$1,vec__86012,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__85993_$_iter__85995(s__85996){
return (new cljs.core.LazySeq(null,((function (s__85994__$1,vec__86012,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__85996__$1 = s__85996;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__85996__$1);
if(temp__4657__auto____$1){
var s__85996__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85996__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__85996__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__85998 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__85997 = (0);
while(true){
if((i__85997 < size__26606__auto__)){
var item = cljs.core._nth.call(null,c__26605__auto__,i__85997);
cljs.core.chunk_append.call(null,b__85998,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__86155 = (i__85997 + (1));
i__85997 = G__86155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85998),tailrecursion$priority_map$iter__85993_$_iter__85995.call(null,cljs.core.chunk_rest.call(null,s__85996__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85998),null);
}
} else {
var item = cljs.core.first.call(null,s__85996__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__85993_$_iter__85995.call(null,cljs.core.rest.call(null,s__85996__$2)));
}
} else {
return null;
}
break;
}
});})(s__85994__$1,vec__86012,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__85994__$1,vec__86012,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,item_set));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,tailrecursion$priority_map$iter__85993.call(null,cljs.core.rest.call(null,s__85994__$1)));
} else {
var G__86156 = cljs.core.rest.call(null,s__85994__$1);
s__85994__$1 = G__86156;
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
return iter__26607__auto__.call(null,self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__26607__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__86026(s__86027){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__86027__$1 = s__86027;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__86027__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__86041 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__86041,(0),null);
var item_set = cljs.core.nth.call(null,vec__86041,(1),null);
var iterys__26603__auto__ = ((function (s__86027__$1,vec__86041,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__86026_$_iter__86028(s__86029){
return (new cljs.core.LazySeq(null,((function (s__86027__$1,vec__86041,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1){
return (function (){
var s__86029__$1 = s__86029;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__86029__$1);
if(temp__4657__auto____$1){
var s__86029__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86029__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__86029__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__86031 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__86030 = (0);
while(true){
if((i__86030 < size__26606__auto__)){
var item = cljs.core._nth.call(null,c__26605__auto__,i__86030);
cljs.core.chunk_append.call(null,b__86031,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__86157 = (i__86030 + (1));
i__86030 = G__86157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86031),tailrecursion$priority_map$iter__86026_$_iter__86028.call(null,cljs.core.chunk_rest.call(null,s__86029__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86031),null);
}
} else {
var item = cljs.core.first.call(null,s__86029__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__86026_$_iter__86028.call(null,cljs.core.rest.call(null,s__86029__$2)));
}
} else {
return null;
}
break;
}
});})(s__86027__$1,vec__86041,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
,null,null));
});})(s__86027__$1,vec__86041,priority,item_set,xs__5205__auto__,temp__4657__auto__,this$__$1))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,item_set));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,tailrecursion$priority_map$iter__86026.call(null,cljs.core.rest.call(null,s__86027__$1)));
} else {
var G__86160 = cljs.core.rest.call(null,s__86027__$1);
s__86027__$1 = G__86160;
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
return iter__26607__auto__.call(null,self__.priority__GT_set_of_items);
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
var G__86162 = null;
var G__86162__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__86162__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__86162 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__86162__2.call(this,self__,item);
case 3:
return G__86162__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__86162.cljs$core$IFn$_invoke$arity$2 = G__86162__2;
G__86162.cljs$core$IFn$_invoke$arity$3 = G__86162__3;
return G__86162;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args85917){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args85917)));
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
return cljs.core.seq.call(null,(function (){var iter__26607__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__86057(s__86058){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__86058__$1 = s__86058;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__86058__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__86069 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__86069,(0),null);
var item_set = cljs.core.nth.call(null,vec__86069,(1),null);
var iterys__26603__auto__ = ((function (s__86058__$1,vec__86069,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__86057_$_iter__86059(s__86060){
return (new cljs.core.LazySeq(null,((function (s__86058__$1,vec__86069,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__86060__$1 = s__86060;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__86060__$1);
if(temp__4657__auto____$1){
var s__86060__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86060__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__86060__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__86062 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__86061 = (0);
while(true){
if((i__86061 < size__26606__auto__)){
var item = cljs.core._nth.call(null,c__26605__auto__,i__86061);
cljs.core.chunk_append.call(null,b__86062,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__86163 = (i__86061 + (1));
i__86061 = G__86163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86062),tailrecursion$priority_map$iter__86057_$_iter__86059.call(null,cljs.core.chunk_rest.call(null,s__86060__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86062),null);
}
} else {
var item = cljs.core.first.call(null,s__86060__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__86057_$_iter__86059.call(null,cljs.core.rest.call(null,s__86060__$2)));
}
} else {
return null;
}
break;
}
});})(s__86058__$1,vec__86069,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__86058__$1,vec__86069,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,item_set));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,tailrecursion$priority_map$iter__86057.call(null,cljs.core.rest.call(null,s__86058__$1)));
} else {
var G__86167 = cljs.core.rest.call(null,s__86058__$1);
s__86058__$1 = G__86167;
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
return iter__26607__auto__.call(null,sets);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__26607__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__86078(s__86079){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__86079__$1 = s__86079;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__86079__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__86092 = cljs.core.first.call(null,xs__5205__auto__);
var priority = cljs.core.nth.call(null,vec__86092,(0),null);
var item_set = cljs.core.nth.call(null,vec__86092,(1),null);
var iterys__26603__auto__ = ((function (s__86079__$1,vec__86092,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__86078_$_iter__86080(s__86081){
return (new cljs.core.LazySeq(null,((function (s__86079__$1,vec__86092,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1){
return (function (){
var s__86081__$1 = s__86081;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__86081__$1);
if(temp__4657__auto____$1){
var s__86081__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__86081__$2)){
var c__26605__auto__ = cljs.core.chunk_first.call(null,s__86081__$2);
var size__26606__auto__ = cljs.core.count.call(null,c__26605__auto__);
var b__86083 = cljs.core.chunk_buffer.call(null,size__26606__auto__);
if((function (){var i__86082 = (0);
while(true){
if((i__86082 < size__26606__auto__)){
var item = cljs.core._nth.call(null,c__26605__auto__,i__86082);
cljs.core.chunk_append.call(null,b__86083,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__86179 = (i__86082 + (1));
i__86082 = G__86179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86083),tailrecursion$priority_map$iter__86078_$_iter__86080.call(null,cljs.core.chunk_rest.call(null,s__86081__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86083),null);
}
} else {
var item = cljs.core.first.call(null,s__86081__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__86078_$_iter__86080.call(null,cljs.core.rest.call(null,s__86081__$2)));
}
} else {
return null;
}
break;
}
});})(s__86079__$1,vec__86092,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
,null,null));
});})(s__86079__$1,vec__86092,priority,item_set,xs__5205__auto__,temp__4657__auto__,sets,this$__$1))
;
var fs__26604__auto__ = cljs.core.seq.call(null,iterys__26603__auto__.call(null,item_set));
if(fs__26604__auto__){
return cljs.core.concat.call(null,fs__26604__auto__,tailrecursion$priority_map$iter__86078.call(null,cljs.core.rest.call(null,s__86079__$1)));
} else {
var G__86196 = cljs.core.rest.call(null,s__86079__$1);
s__86079__$1 = G__86196;
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
return iter__26607__auto__.call(null,sets);
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

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var args86202 = [];
var len__26896__auto___86206 = arguments.length;
var i__26897__auto___86207 = (0);
while(true){
if((i__26897__auto___86207 < len__26896__auto___86206)){
args86202.push((arguments[i__26897__auto___86207]));

var G__86208 = (i__26897__auto___86207 + (1));
i__26897__auto___86207 = G__86208;
continue;
} else {
}
break;
}

var G__86205 = args86202.length;
switch (G__86205) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86202.length)].join('')));

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
var args__26903__auto__ = [];
var len__26896__auto___86221 = arguments.length;
var i__26897__auto___86222 = (0);
while(true){
if((i__26897__auto___86222 < len__26896__auto___86221)){
args__26903__auto__.push((arguments[i__26897__auto___86222]));

var G__86224 = (i__26897__auto___86222 + (1));
i__26897__auto___86222 = G__86224;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((0) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((0)),(0),null)):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26904__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__86228 = cljs.core.nnext.call(null,in$);
var G__86229 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__86228;
out = G__86229;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq86213){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86213));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__26903__auto__ = [];
var len__26896__auto___86240 = arguments.length;
var i__26897__auto___86241 = (0);
while(true){
if((i__26897__auto___86241 < len__26896__auto___86240)){
args__26903__auto__.push((arguments[i__26897__auto___86241]));

var G__86242 = (i__26897__auto___86241 + (1));
i__26897__auto___86241 = G__86242;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((1) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26904__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);
while(true){
if(in$){
var G__86243 = cljs.core.nnext.call(null,in$);
var G__86244 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__86243;
out = G__86244;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq86238){
var G__86239 = cljs.core.first.call(null,seq86238);
var seq86238__$1 = cljs.core.next.call(null,seq86238);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__86239,seq86238__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__26903__auto__ = [];
var len__26896__auto___86249 = arguments.length;
var i__26897__auto___86250 = (0);
while(true){
if((i__26897__auto___86250 < len__26896__auto___86249)){
args__26903__auto__.push((arguments[i__26897__auto___86250]));

var G__86251 = (i__26897__auto___86250 + (1));
i__26897__auto___86250 = G__86251;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((1) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26904__auto__);
});

tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn);
while(true){
if(in$){
var G__86252 = cljs.core.nnext.call(null,in$);
var G__86253 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__86252;
out = G__86253;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq86245){
var G__86246 = cljs.core.first.call(null,seq86245);
var seq86245__$1 = cljs.core.next.call(null,seq86245);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(G__86246,seq86245__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__26903__auto__ = [];
var len__26896__auto___86264 = arguments.length;
var i__26897__auto___86265 = (0);
while(true){
if((i__26897__auto___86265 < len__26896__auto___86264)){
args__26903__auto__.push((arguments[i__26897__auto___86265]));

var G__86266 = (i__26897__auto___86265 + (1));
i__26897__auto___86265 = G__86266;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((2) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((2)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26904__auto__);
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn,comparator);
while(true){
if(in$){
var G__86277 = cljs.core.nnext.call(null,in$);
var G__86278 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__86277;
out = G__86278;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq86254){
var G__86255 = cljs.core.first.call(null,seq86254);
var seq86254__$1 = cljs.core.next.call(null,seq86254);
var G__86256 = cljs.core.first.call(null,seq86254__$1);
var seq86254__$2 = cljs.core.next.call(null,seq86254__$1);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic(G__86255,G__86256,seq86254__$2);
});
