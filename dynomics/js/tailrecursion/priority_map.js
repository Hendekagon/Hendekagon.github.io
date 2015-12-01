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
return cljs.core.seq.call(null,(function (){var iter__24993__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__195949(s__195950){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__195950__$1 = s__195950;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195950__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__195956 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__195956,(0),null);
var item_set = cljs.core.nth.call(null,vec__195956,(1),null);
var iterys__24989__auto__ = ((function (s__195950__$1,vec__195956,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__195949_$_iter__195951(s__195952){
return (new cljs.core.LazySeq(null,((function (s__195950__$1,vec__195956,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__195952__$1 = s__195952;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195952__$1);
if(temp__4425__auto____$1){
var s__195952__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195952__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195952__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195954 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195953 = (0);
while(true){
if((i__195953 < size__24992__auto__)){
var item = cljs.core._nth.call(null,c__24991__auto__,i__195953);
cljs.core.chunk_append.call(null,b__195954,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__195997 = (i__195953 + (1));
i__195953 = G__195997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195954),tailrecursion$priority_map$iter__195949_$_iter__195951.call(null,cljs.core.chunk_rest.call(null,s__195952__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195954),null);
}
} else {
var item = cljs.core.first.call(null,s__195952__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__195949_$_iter__195951.call(null,cljs.core.rest.call(null,s__195952__$2)));
}
} else {
return null;
}
break;
}
});})(s__195950__$1,vec__195956,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__195950__$1,vec__195956,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,item_set));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,tailrecursion$priority_map$iter__195949.call(null,cljs.core.rest.call(null,s__195950__$1)));
} else {
var G__195998 = cljs.core.rest.call(null,s__195950__$1);
s__195950__$1 = G__195998;
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
return iter__24993__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__24993__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__195957(s__195958){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__195958__$1 = s__195958;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195958__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__195964 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__195964,(0),null);
var item_set = cljs.core.nth.call(null,vec__195964,(1),null);
var iterys__24989__auto__ = ((function (s__195958__$1,vec__195964,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__195957_$_iter__195959(s__195960){
return (new cljs.core.LazySeq(null,((function (s__195958__$1,vec__195964,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__195960__$1 = s__195960;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195960__$1);
if(temp__4425__auto____$1){
var s__195960__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195960__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195960__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195962 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195961 = (0);
while(true){
if((i__195961 < size__24992__auto__)){
var item = cljs.core._nth.call(null,c__24991__auto__,i__195961);
cljs.core.chunk_append.call(null,b__195962,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__195999 = (i__195961 + (1));
i__195961 = G__195999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195962),tailrecursion$priority_map$iter__195957_$_iter__195959.call(null,cljs.core.chunk_rest.call(null,s__195960__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195962),null);
}
} else {
var item = cljs.core.first.call(null,s__195960__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__195957_$_iter__195959.call(null,cljs.core.rest.call(null,s__195960__$2)));
}
} else {
return null;
}
break;
}
});})(s__195958__$1,vec__195964,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__195958__$1,vec__195964,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,item_set));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,tailrecursion$priority_map$iter__195957.call(null,cljs.core.rest.call(null,s__195958__$1)));
} else {
var G__196000 = cljs.core.rest.call(null,s__195958__$1);
s__195958__$1 = G__196000;
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
return iter__24993__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__24656__auto__ = self__.__hash;
if(!((h__24656__auto__ == null))){
return h__24656__auto__;
} else {
var h__24656__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);
self__.__hash = h__24656__auto____$1;

return h__24656__auto____$1;
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
return cljs.core.seq.call(null,(function (){var iter__24993__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__195965(s__195966){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__195966__$1 = s__195966;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195966__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__195972 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__195972,(0),null);
var item_set = cljs.core.nth.call(null,vec__195972,(1),null);
var iterys__24989__auto__ = ((function (s__195966__$1,vec__195972,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__195965_$_iter__195967(s__195968){
return (new cljs.core.LazySeq(null,((function (s__195966__$1,vec__195972,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__195968__$1 = s__195968;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195968__$1);
if(temp__4425__auto____$1){
var s__195968__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195968__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195968__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195970 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195969 = (0);
while(true){
if((i__195969 < size__24992__auto__)){
var item = cljs.core._nth.call(null,c__24991__auto__,i__195969);
cljs.core.chunk_append.call(null,b__195970,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__196001 = (i__195969 + (1));
i__195969 = G__196001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195970),tailrecursion$priority_map$iter__195965_$_iter__195967.call(null,cljs.core.chunk_rest.call(null,s__195968__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195970),null);
}
} else {
var item = cljs.core.first.call(null,s__195968__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__195965_$_iter__195967.call(null,cljs.core.rest.call(null,s__195968__$2)));
}
} else {
return null;
}
break;
}
});})(s__195966__$1,vec__195972,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__195966__$1,vec__195972,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,item_set));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,tailrecursion$priority_map$iter__195965.call(null,cljs.core.rest.call(null,s__195966__$1)));
} else {
var G__196002 = cljs.core.rest.call(null,s__195966__$1);
s__195966__$1 = G__196002;
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
return iter__24993__auto__.call(null,self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__24993__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__195973(s__195974){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__195974__$1 = s__195974;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195974__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__195980 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__195980,(0),null);
var item_set = cljs.core.nth.call(null,vec__195980,(1),null);
var iterys__24989__auto__ = ((function (s__195974__$1,vec__195980,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__195973_$_iter__195975(s__195976){
return (new cljs.core.LazySeq(null,((function (s__195974__$1,vec__195980,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__195976__$1 = s__195976;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195976__$1);
if(temp__4425__auto____$1){
var s__195976__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195976__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195976__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195978 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195977 = (0);
while(true){
if((i__195977 < size__24992__auto__)){
var item = cljs.core._nth.call(null,c__24991__auto__,i__195977);
cljs.core.chunk_append.call(null,b__195978,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__196003 = (i__195977 + (1));
i__195977 = G__196003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195978),tailrecursion$priority_map$iter__195973_$_iter__195975.call(null,cljs.core.chunk_rest.call(null,s__195976__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195978),null);
}
} else {
var item = cljs.core.first.call(null,s__195976__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__195973_$_iter__195975.call(null,cljs.core.rest.call(null,s__195976__$2)));
}
} else {
return null;
}
break;
}
});})(s__195974__$1,vec__195980,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__195974__$1,vec__195980,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,item_set));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,tailrecursion$priority_map$iter__195973.call(null,cljs.core.rest.call(null,s__195974__$1)));
} else {
var G__196004 = cljs.core.rest.call(null,s__195974__$1);
s__195974__$1 = G__196004;
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
return iter__24993__auto__.call(null,self__.priority__GT_set_of_items);
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
var G__196005 = null;
var G__196005__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__196005__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__196005 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__196005__2.call(this,self__,item);
case 3:
return G__196005__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__196005.cljs$core$IFn$_invoke$arity$2 = G__196005__2;
G__196005.cljs$core$IFn$_invoke$arity$3 = G__196005__3;
return G__196005;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args195948){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args195948)));
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
return cljs.core.seq.call(null,(function (){var iter__24993__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__195981(s__195982){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__195982__$1 = s__195982;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195982__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__195988 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__195988,(0),null);
var item_set = cljs.core.nth.call(null,vec__195988,(1),null);
var iterys__24989__auto__ = ((function (s__195982__$1,vec__195988,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__195981_$_iter__195983(s__195984){
return (new cljs.core.LazySeq(null,((function (s__195982__$1,vec__195988,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__195984__$1 = s__195984;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195984__$1);
if(temp__4425__auto____$1){
var s__195984__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195984__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195984__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195986 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195985 = (0);
while(true){
if((i__195985 < size__24992__auto__)){
var item = cljs.core._nth.call(null,c__24991__auto__,i__195985);
cljs.core.chunk_append.call(null,b__195986,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__196006 = (i__195985 + (1));
i__195985 = G__196006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195986),tailrecursion$priority_map$iter__195981_$_iter__195983.call(null,cljs.core.chunk_rest.call(null,s__195984__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195986),null);
}
} else {
var item = cljs.core.first.call(null,s__195984__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__195981_$_iter__195983.call(null,cljs.core.rest.call(null,s__195984__$2)));
}
} else {
return null;
}
break;
}
});})(s__195982__$1,vec__195988,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__195982__$1,vec__195988,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,item_set));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,tailrecursion$priority_map$iter__195981.call(null,cljs.core.rest.call(null,s__195982__$1)));
} else {
var G__196007 = cljs.core.rest.call(null,s__195982__$1);
s__195982__$1 = G__196007;
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
return iter__24993__auto__.call(null,sets);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__24993__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__195989(s__195990){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__195990__$1 = s__195990;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__195990__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__195996 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__195996,(0),null);
var item_set = cljs.core.nth.call(null,vec__195996,(1),null);
var iterys__24989__auto__ = ((function (s__195990__$1,vec__195996,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__195989_$_iter__195991(s__195992){
return (new cljs.core.LazySeq(null,((function (s__195990__$1,vec__195996,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__195992__$1 = s__195992;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__195992__$1);
if(temp__4425__auto____$1){
var s__195992__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__195992__$2)){
var c__24991__auto__ = cljs.core.chunk_first.call(null,s__195992__$2);
var size__24992__auto__ = cljs.core.count.call(null,c__24991__auto__);
var b__195994 = cljs.core.chunk_buffer.call(null,size__24992__auto__);
if((function (){var i__195993 = (0);
while(true){
if((i__195993 < size__24992__auto__)){
var item = cljs.core._nth.call(null,c__24991__auto__,i__195993);
cljs.core.chunk_append.call(null,b__195994,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__196008 = (i__195993 + (1));
i__195993 = G__196008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195994),tailrecursion$priority_map$iter__195989_$_iter__195991.call(null,cljs.core.chunk_rest.call(null,s__195992__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__195994),null);
}
} else {
var item = cljs.core.first.call(null,s__195992__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__195989_$_iter__195991.call(null,cljs.core.rest.call(null,s__195992__$2)));
}
} else {
return null;
}
break;
}
});})(s__195990__$1,vec__195996,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__195990__$1,vec__195996,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__24990__auto__ = cljs.core.seq.call(null,iterys__24989__auto__.call(null,item_set));
if(fs__24990__auto__){
return cljs.core.concat.call(null,fs__24990__auto__,tailrecursion$priority_map$iter__195989.call(null,cljs.core.rest.call(null,s__195990__$1)));
} else {
var G__196009 = cljs.core.rest.call(null,s__195990__$1);
s__195990__$1 = G__196009;
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
return iter__24993__auto__.call(null,sets);
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

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var args196010 = [];
var len__25279__auto___196013 = arguments.length;
var i__25280__auto___196014 = (0);
while(true){
if((i__25280__auto___196014 < len__25279__auto___196013)){
args196010.push((arguments[i__25280__auto___196014]));

var G__196015 = (i__25280__auto___196014 + (1));
i__25280__auto___196014 = G__196015;
continue;
} else {
}
break;
}

var G__196012 = args196010.length;
switch (G__196012) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args196010.length)].join('')));

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
var args__25286__auto__ = [];
var len__25279__auto___196018 = arguments.length;
var i__25280__auto___196019 = (0);
while(true){
if((i__25280__auto___196019 < len__25279__auto___196018)){
args__25286__auto__.push((arguments[i__25280__auto___196019]));

var G__196020 = (i__25280__auto___196019 + (1));
i__25280__auto___196019 = G__196020;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((0) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((0)),(0))):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25287__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__196021 = cljs.core.nnext.call(null,in$);
var G__196022 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__196021;
out = G__196022;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq196017){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq196017));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__25286__auto__ = [];
var len__25279__auto___196025 = arguments.length;
var i__25280__auto___196026 = (0);
while(true){
if((i__25280__auto___196026 < len__25279__auto___196025)){
args__25286__auto__.push((arguments[i__25280__auto___196026]));

var G__196027 = (i__25280__auto___196026 + (1));
i__25280__auto___196026 = G__196027;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((1) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((1)),(0))):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25287__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);
while(true){
if(in$){
var G__196028 = cljs.core.nnext.call(null,in$);
var G__196029 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__196028;
out = G__196029;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq196023){
var G__196024 = cljs.core.first.call(null,seq196023);
var seq196023__$1 = cljs.core.next.call(null,seq196023);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__196024,seq196023__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__25286__auto__ = [];
var len__25279__auto___196032 = arguments.length;
var i__25280__auto___196033 = (0);
while(true){
if((i__25280__auto___196033 < len__25279__auto___196032)){
args__25286__auto__.push((arguments[i__25280__auto___196033]));

var G__196034 = (i__25280__auto___196033 + (1));
i__25280__auto___196033 = G__196034;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((1) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((1)),(0))):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25287__auto__);
});

tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn);
while(true){
if(in$){
var G__196035 = cljs.core.nnext.call(null,in$);
var G__196036 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__196035;
out = G__196036;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq196030){
var G__196031 = cljs.core.first.call(null,seq196030);
var seq196030__$1 = cljs.core.next.call(null,seq196030);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(G__196031,seq196030__$1);
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__25286__auto__ = [];
var len__25279__auto___196040 = arguments.length;
var i__25280__auto___196041 = (0);
while(true){
if((i__25280__auto___196041 < len__25279__auto___196040)){
args__25286__auto__.push((arguments[i__25280__auto___196041]));

var G__196042 = (i__25280__auto___196041 + (1));
i__25280__auto___196041 = G__196042;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((2) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((2)),(0))):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25287__auto__);
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn,comparator);
while(true){
if(in$){
var G__196043 = cljs.core.nnext.call(null,in$);
var G__196044 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__196043;
out = G__196044;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq196037){
var G__196038 = cljs.core.first.call(null,seq196037);
var seq196037__$1 = cljs.core.next.call(null,seq196037);
var G__196039 = cljs.core.first.call(null,seq196037__$1);
var seq196037__$2 = cljs.core.next.call(null,seq196037__$1);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic(G__196038,G__196039,seq196037__$2);
});

//# sourceMappingURL=priority_map.js.map