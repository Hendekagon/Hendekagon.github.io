// Compiled by ClojureScript 1.7.170 {}
goog.provide('garden.types');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24825__auto__,k__24826__auto__){
var self__ = this;
var this__24825__auto____$1 = this;
return cljs.core._lookup.call(null,this__24825__auto____$1,k__24826__auto__,null);
});

garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24827__auto__,k876279,else__24828__auto__){
var self__ = this;
var this__24827__auto____$1 = this;
var G__876281 = (((k876279 instanceof cljs.core.Keyword))?k876279.fqn:null);
switch (G__876281) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k876279,else__24828__auto__);

}
});

garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24839__auto__,writer__24840__auto__,opts__24841__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
var pr_pair__24842__auto__ = ((function (this__24839__auto____$1){
return (function (keyval__24843__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,cljs.core.pr_writer,""," ","",opts__24841__auto__,keyval__24843__auto__);
});})(this__24839__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,pr_pair__24842__auto__,"#garden.types.CSSUnit{",", ","}",opts__24841__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IIterable$ = true;

garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__876278){
var self__ = this;
var G__876278__$1 = this;
return (new cljs.core.RecordIter((0),G__876278__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24823__auto__){
var self__ = this;
var this__24823__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24819__auto__){
var self__ = this;
var this__24819__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24820__auto__){
var self__ = this;
var this__24820__auto____$1 = this;
var h__24646__auto__ = self__.__hash;
if(!((h__24646__auto__ == null))){
return h__24646__auto__;
} else {
var h__24646__auto____$1 = cljs.core.hash_imap.call(null,this__24820__auto____$1);
self__.__hash = h__24646__auto____$1;

return h__24646__auto____$1;
}
});

garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24821__auto__,other__24822__auto__){
var self__ = this;
var this__24821__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24199__auto__ = other__24822__auto__;
if(cljs.core.truth_(and__24199__auto__)){
var and__24199__auto____$1 = (this__24821__auto____$1.constructor === other__24822__auto__.constructor);
if(and__24199__auto____$1){
return cljs.core.equiv_map.call(null,this__24821__auto____$1,other__24822__auto__);
} else {
return and__24199__auto____$1;
}
} else {
return and__24199__auto__;
}
})())){
return true;
} else {
return false;
}
});

garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24834__auto__,k__24835__auto__){
var self__ = this;
var this__24834__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__24835__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24834__auto____$1),self__.__meta),k__24835__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24835__auto__)),null));
}
});

garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24832__auto__,k__24833__auto__,G__876278){
var self__ = this;
var this__24832__auto____$1 = this;
var pred__876282 = cljs.core.keyword_identical_QMARK_;
var expr__876283 = k__24833__auto__;
if(cljs.core.truth_(pred__876282.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__876283))){
return (new garden.types.CSSUnit(G__876278,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__876282.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__876283))){
return (new garden.types.CSSUnit(self__.unit,G__876278,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24833__auto__,G__876278),null));
}
}
});

garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24837__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24824__auto__,G__876278){
var self__ = this;
var this__24824__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__876278,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24830__auto__,entry__24831__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24831__auto__)){
return cljs.core._assoc.call(null,this__24830__auto____$1,cljs.core._nth.call(null,entry__24831__auto__,(0)),cljs.core._nth.call(null,entry__24831__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24830__auto____$1,entry__24831__auto__);
}
});

garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

garden.types.CSSUnit.cljs$lang$type = true;

garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__24859__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSUnit");
});

garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__24859__auto__,writer__24860__auto__){
return cljs.core._write.call(null,writer__24860__auto__,"garden.types/CSSUnit");
});

garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__876280){
return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__876280),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__876280),null,cljs.core.dissoc.call(null,G__876280,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24825__auto__,k__24826__auto__){
var self__ = this;
var this__24825__auto____$1 = this;
return cljs.core._lookup.call(null,this__24825__auto____$1,k__24826__auto__,null);
});

garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24827__auto__,k876287,else__24828__auto__){
var self__ = this;
var this__24827__auto____$1 = this;
var G__876289 = (((k876287 instanceof cljs.core.Keyword))?k876287.fqn:null);
switch (G__876289) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k876287,else__24828__auto__);

}
});

garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24839__auto__,writer__24840__auto__,opts__24841__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
var pr_pair__24842__auto__ = ((function (this__24839__auto____$1){
return (function (keyval__24843__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,cljs.core.pr_writer,""," ","",opts__24841__auto__,keyval__24843__auto__);
});})(this__24839__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,pr_pair__24842__auto__,"#garden.types.CSSFunction{",", ","}",opts__24841__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IIterable$ = true;

garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__876286){
var self__ = this;
var G__876286__$1 = this;
return (new cljs.core.RecordIter((0),G__876286__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24823__auto__){
var self__ = this;
var this__24823__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24819__auto__){
var self__ = this;
var this__24819__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24820__auto__){
var self__ = this;
var this__24820__auto____$1 = this;
var h__24646__auto__ = self__.__hash;
if(!((h__24646__auto__ == null))){
return h__24646__auto__;
} else {
var h__24646__auto____$1 = cljs.core.hash_imap.call(null,this__24820__auto____$1);
self__.__hash = h__24646__auto____$1;

return h__24646__auto____$1;
}
});

garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24821__auto__,other__24822__auto__){
var self__ = this;
var this__24821__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24199__auto__ = other__24822__auto__;
if(cljs.core.truth_(and__24199__auto__)){
var and__24199__auto____$1 = (this__24821__auto____$1.constructor === other__24822__auto__.constructor);
if(and__24199__auto____$1){
return cljs.core.equiv_map.call(null,this__24821__auto____$1,other__24822__auto__);
} else {
return and__24199__auto____$1;
}
} else {
return and__24199__auto__;
}
})())){
return true;
} else {
return false;
}
});

garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24834__auto__,k__24835__auto__){
var self__ = this;
var this__24834__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__24835__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24834__auto____$1),self__.__meta),k__24835__auto__);
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24835__auto__)),null));
}
});

garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24832__auto__,k__24833__auto__,G__876286){
var self__ = this;
var this__24832__auto____$1 = this;
var pred__876290 = cljs.core.keyword_identical_QMARK_;
var expr__876291 = k__24833__auto__;
if(cljs.core.truth_(pred__876290.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__876291))){
return (new garden.types.CSSFunction(G__876286,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__876290.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__876291))){
return (new garden.types.CSSFunction(self__.function$,G__876286,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24833__auto__,G__876286),null));
}
}
});

garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24837__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24824__auto__,G__876286){
var self__ = this;
var this__24824__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,G__876286,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24830__auto__,entry__24831__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24831__auto__)){
return cljs.core._assoc.call(null,this__24830__auto____$1,cljs.core._nth.call(null,entry__24831__auto__,(0)),cljs.core._nth.call(null,entry__24831__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24830__auto____$1,entry__24831__auto__);
}
});

garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

garden.types.CSSFunction.cljs$lang$type = true;

garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__24859__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSFunction");
});

garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__24859__auto__,writer__24860__auto__){
return cljs.core._write.call(null,writer__24860__auto__,"garden.types/CSSFunction");
});

garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(function$,args){
return (new garden.types.CSSFunction(function$,args,null,null,null));
});

garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__876288){
return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__876288),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__876288),null,cljs.core.dissoc.call(null,G__876288,new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24825__auto__,k__24826__auto__){
var self__ = this;
var this__24825__auto____$1 = this;
return cljs.core._lookup.call(null,this__24825__auto____$1,k__24826__auto__,null);
});

garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24827__auto__,k876295,else__24828__auto__){
var self__ = this;
var this__24827__auto____$1 = this;
var G__876297 = (((k876295 instanceof cljs.core.Keyword))?k876295.fqn:null);
switch (G__876297) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k876295,else__24828__auto__);

}
});

garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24839__auto__,writer__24840__auto__,opts__24841__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
var pr_pair__24842__auto__ = ((function (this__24839__auto____$1){
return (function (keyval__24843__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,cljs.core.pr_writer,""," ","",opts__24841__auto__,keyval__24843__auto__);
});})(this__24839__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24840__auto__,pr_pair__24842__auto__,"#garden.types.CSSAtRule{",", ","}",opts__24841__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IIterable$ = true;

garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__876294){
var self__ = this;
var G__876294__$1 = this;
return (new cljs.core.RecordIter((0),G__876294__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24823__auto__){
var self__ = this;
var this__24823__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24819__auto__){
var self__ = this;
var this__24819__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24820__auto__){
var self__ = this;
var this__24820__auto____$1 = this;
var h__24646__auto__ = self__.__hash;
if(!((h__24646__auto__ == null))){
return h__24646__auto__;
} else {
var h__24646__auto____$1 = cljs.core.hash_imap.call(null,this__24820__auto____$1);
self__.__hash = h__24646__auto____$1;

return h__24646__auto____$1;
}
});

garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24821__auto__,other__24822__auto__){
var self__ = this;
var this__24821__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24199__auto__ = other__24822__auto__;
if(cljs.core.truth_(and__24199__auto__)){
var and__24199__auto____$1 = (this__24821__auto____$1.constructor === other__24822__auto__.constructor);
if(and__24199__auto____$1){
return cljs.core.equiv_map.call(null,this__24821__auto____$1,other__24822__auto__);
} else {
return and__24199__auto____$1;
}
} else {
return and__24199__auto__;
}
})())){
return true;
} else {
return false;
}
});

garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24834__auto__,k__24835__auto__){
var self__ = this;
var this__24834__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__24835__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24834__auto____$1),self__.__meta),k__24835__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24835__auto__)),null));
}
});

garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24832__auto__,k__24833__auto__,G__876294){
var self__ = this;
var this__24832__auto____$1 = this;
var pred__876298 = cljs.core.keyword_identical_QMARK_;
var expr__876299 = k__24833__auto__;
if(cljs.core.truth_(pred__876298.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__876299))){
return (new garden.types.CSSAtRule(G__876294,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__876298.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__876299))){
return (new garden.types.CSSAtRule(self__.identifier,G__876294,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24833__auto__,G__876294),null));
}
}
});

garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24837__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24824__auto__,G__876294){
var self__ = this;
var this__24824__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__876294,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24830__auto__,entry__24831__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24831__auto__)){
return cljs.core._assoc.call(null,this__24830__auto____$1,cljs.core._nth.call(null,entry__24831__auto__,(0)),cljs.core._nth.call(null,entry__24831__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24830__auto____$1,entry__24831__auto__);
}
});

garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

garden.types.CSSAtRule.cljs$lang$type = true;

garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__24859__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSAtRule");
});

garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__24859__auto__,writer__24860__auto__){
return cljs.core._write.call(null,writer__24860__auto__,"garden.types/CSSAtRule");
});

garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__876296){
return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__876296),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__876296),null,cljs.core.dissoc.call(null,G__876296,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)),null));
});


//# sourceMappingURL=types.js.map