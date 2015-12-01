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
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24835__auto__,k__24836__auto__){
var self__ = this;
var this__24835__auto____$1 = this;
return cljs.core._lookup.call(null,this__24835__auto____$1,k__24836__auto__,null);
});

garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24837__auto__,k199732,else__24838__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
var G__199734 = (((k199732 instanceof cljs.core.Keyword))?k199732.fqn:null);
switch (G__199734) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k199732,else__24838__auto__);

}
});

garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24849__auto__,writer__24850__auto__,opts__24851__auto__){
var self__ = this;
var this__24849__auto____$1 = this;
var pr_pair__24852__auto__ = ((function (this__24849__auto____$1){
return (function (keyval__24853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,cljs.core.pr_writer,""," ","",opts__24851__auto__,keyval__24853__auto__);
});})(this__24849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,pr_pair__24852__auto__,"#garden.types.CSSUnit{",", ","}",opts__24851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IIterable$ = true;

garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__199731){
var self__ = this;
var G__199731__$1 = this;
return (new cljs.core.RecordIter((0),G__199731__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24833__auto__){
var self__ = this;
var this__24833__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24839__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24830__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
var h__24656__auto__ = self__.__hash;
if(!((h__24656__auto__ == null))){
return h__24656__auto__;
} else {
var h__24656__auto____$1 = cljs.core.hash_imap.call(null,this__24830__auto____$1);
self__.__hash = h__24656__auto____$1;

return h__24656__auto____$1;
}
});

garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24831__auto__,other__24832__auto__){
var self__ = this;
var this__24831__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24209__auto__ = other__24832__auto__;
if(cljs.core.truth_(and__24209__auto__)){
var and__24209__auto____$1 = (this__24831__auto____$1.constructor === other__24832__auto__.constructor);
if(and__24209__auto____$1){
return cljs.core.equiv_map.call(null,this__24831__auto____$1,other__24832__auto__);
} else {
return and__24209__auto____$1;
}
} else {
return and__24209__auto__;
}
})())){
return true;
} else {
return false;
}
});

garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24844__auto__,k__24845__auto__){
var self__ = this;
var this__24844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__24845__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24844__auto____$1),self__.__meta),k__24845__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24845__auto__)),null));
}
});

garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24842__auto__,k__24843__auto__,G__199731){
var self__ = this;
var this__24842__auto____$1 = this;
var pred__199735 = cljs.core.keyword_identical_QMARK_;
var expr__199736 = k__24843__auto__;
if(cljs.core.truth_(pred__199735.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__199736))){
return (new garden.types.CSSUnit(G__199731,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__199735.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__199736))){
return (new garden.types.CSSUnit(self__.unit,G__199731,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24843__auto__,G__199731),null));
}
}
});

garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24847__auto__){
var self__ = this;
var this__24847__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24834__auto__,G__199731){
var self__ = this;
var this__24834__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__199731,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24840__auto__,entry__24841__auto__){
var self__ = this;
var this__24840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24841__auto__)){
return cljs.core._assoc.call(null,this__24840__auto____$1,cljs.core._nth.call(null,entry__24841__auto__,(0)),cljs.core._nth.call(null,entry__24841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24840__auto____$1,entry__24841__auto__);
}
});

garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

garden.types.CSSUnit.cljs$lang$type = true;

garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__24869__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSUnit");
});

garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__24869__auto__,writer__24870__auto__){
return cljs.core._write.call(null,writer__24870__auto__,"garden.types/CSSUnit");
});

garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__199733){
return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__199733),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__199733),null,cljs.core.dissoc.call(null,G__199733,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)),null));
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
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24835__auto__,k__24836__auto__){
var self__ = this;
var this__24835__auto____$1 = this;
return cljs.core._lookup.call(null,this__24835__auto____$1,k__24836__auto__,null);
});

garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24837__auto__,k199740,else__24838__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
var G__199742 = (((k199740 instanceof cljs.core.Keyword))?k199740.fqn:null);
switch (G__199742) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k199740,else__24838__auto__);

}
});

garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24849__auto__,writer__24850__auto__,opts__24851__auto__){
var self__ = this;
var this__24849__auto____$1 = this;
var pr_pair__24852__auto__ = ((function (this__24849__auto____$1){
return (function (keyval__24853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,cljs.core.pr_writer,""," ","",opts__24851__auto__,keyval__24853__auto__);
});})(this__24849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,pr_pair__24852__auto__,"#garden.types.CSSFunction{",", ","}",opts__24851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IIterable$ = true;

garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__199739){
var self__ = this;
var G__199739__$1 = this;
return (new cljs.core.RecordIter((0),G__199739__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24833__auto__){
var self__ = this;
var this__24833__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24839__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24830__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
var h__24656__auto__ = self__.__hash;
if(!((h__24656__auto__ == null))){
return h__24656__auto__;
} else {
var h__24656__auto____$1 = cljs.core.hash_imap.call(null,this__24830__auto____$1);
self__.__hash = h__24656__auto____$1;

return h__24656__auto____$1;
}
});

garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24831__auto__,other__24832__auto__){
var self__ = this;
var this__24831__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24209__auto__ = other__24832__auto__;
if(cljs.core.truth_(and__24209__auto__)){
var and__24209__auto____$1 = (this__24831__auto____$1.constructor === other__24832__auto__.constructor);
if(and__24209__auto____$1){
return cljs.core.equiv_map.call(null,this__24831__auto____$1,other__24832__auto__);
} else {
return and__24209__auto____$1;
}
} else {
return and__24209__auto__;
}
})())){
return true;
} else {
return false;
}
});

garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24844__auto__,k__24845__auto__){
var self__ = this;
var this__24844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__24845__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24844__auto____$1),self__.__meta),k__24845__auto__);
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24845__auto__)),null));
}
});

garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24842__auto__,k__24843__auto__,G__199739){
var self__ = this;
var this__24842__auto____$1 = this;
var pred__199743 = cljs.core.keyword_identical_QMARK_;
var expr__199744 = k__24843__auto__;
if(cljs.core.truth_(pred__199743.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__199744))){
return (new garden.types.CSSFunction(G__199739,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__199743.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__199744))){
return (new garden.types.CSSFunction(self__.function$,G__199739,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24843__auto__,G__199739),null));
}
}
});

garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24847__auto__){
var self__ = this;
var this__24847__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24834__auto__,G__199739){
var self__ = this;
var this__24834__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,G__199739,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24840__auto__,entry__24841__auto__){
var self__ = this;
var this__24840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24841__auto__)){
return cljs.core._assoc.call(null,this__24840__auto____$1,cljs.core._nth.call(null,entry__24841__auto__,(0)),cljs.core._nth.call(null,entry__24841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24840__auto____$1,entry__24841__auto__);
}
});

garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

garden.types.CSSFunction.cljs$lang$type = true;

garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__24869__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSFunction");
});

garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__24869__auto__,writer__24870__auto__){
return cljs.core._write.call(null,writer__24870__auto__,"garden.types/CSSFunction");
});

garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(function$,args){
return (new garden.types.CSSFunction(function$,args,null,null,null));
});

garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__199741){
return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__199741),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__199741),null,cljs.core.dissoc.call(null,G__199741,new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)),null));
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
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24835__auto__,k__24836__auto__){
var self__ = this;
var this__24835__auto____$1 = this;
return cljs.core._lookup.call(null,this__24835__auto____$1,k__24836__auto__,null);
});

garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24837__auto__,k199748,else__24838__auto__){
var self__ = this;
var this__24837__auto____$1 = this;
var G__199750 = (((k199748 instanceof cljs.core.Keyword))?k199748.fqn:null);
switch (G__199750) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k199748,else__24838__auto__);

}
});

garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24849__auto__,writer__24850__auto__,opts__24851__auto__){
var self__ = this;
var this__24849__auto____$1 = this;
var pr_pair__24852__auto__ = ((function (this__24849__auto____$1){
return (function (keyval__24853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,cljs.core.pr_writer,""," ","",opts__24851__auto__,keyval__24853__auto__);
});})(this__24849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24850__auto__,pr_pair__24852__auto__,"#garden.types.CSSAtRule{",", ","}",opts__24851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IIterable$ = true;

garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__199747){
var self__ = this;
var G__199747__$1 = this;
return (new cljs.core.RecordIter((0),G__199747__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24833__auto__){
var self__ = this;
var this__24833__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24829__auto__){
var self__ = this;
var this__24829__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24839__auto__){
var self__ = this;
var this__24839__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24830__auto__){
var self__ = this;
var this__24830__auto____$1 = this;
var h__24656__auto__ = self__.__hash;
if(!((h__24656__auto__ == null))){
return h__24656__auto__;
} else {
var h__24656__auto____$1 = cljs.core.hash_imap.call(null,this__24830__auto____$1);
self__.__hash = h__24656__auto____$1;

return h__24656__auto____$1;
}
});

garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24831__auto__,other__24832__auto__){
var self__ = this;
var this__24831__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24209__auto__ = other__24832__auto__;
if(cljs.core.truth_(and__24209__auto__)){
var and__24209__auto____$1 = (this__24831__auto____$1.constructor === other__24832__auto__.constructor);
if(and__24209__auto____$1){
return cljs.core.equiv_map.call(null,this__24831__auto____$1,other__24832__auto__);
} else {
return and__24209__auto____$1;
}
} else {
return and__24209__auto__;
}
})())){
return true;
} else {
return false;
}
});

garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24844__auto__,k__24845__auto__){
var self__ = this;
var this__24844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__24845__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24844__auto____$1),self__.__meta),k__24845__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24845__auto__)),null));
}
});

garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24842__auto__,k__24843__auto__,G__199747){
var self__ = this;
var this__24842__auto____$1 = this;
var pred__199751 = cljs.core.keyword_identical_QMARK_;
var expr__199752 = k__24843__auto__;
if(cljs.core.truth_(pred__199751.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__199752))){
return (new garden.types.CSSAtRule(G__199747,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__199751.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__199752))){
return (new garden.types.CSSAtRule(self__.identifier,G__199747,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24843__auto__,G__199747),null));
}
}
});

garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24847__auto__){
var self__ = this;
var this__24847__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24834__auto__,G__199747){
var self__ = this;
var this__24834__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__199747,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24840__auto__,entry__24841__auto__){
var self__ = this;
var this__24840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24841__auto__)){
return cljs.core._assoc.call(null,this__24840__auto____$1,cljs.core._nth.call(null,entry__24841__auto__,(0)),cljs.core._nth.call(null,entry__24841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24840__auto____$1,entry__24841__auto__);
}
});

garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

garden.types.CSSAtRule.cljs$lang$type = true;

garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__24869__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSAtRule");
});

garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__24869__auto__,writer__24870__auto__){
return cljs.core._write.call(null,writer__24870__auto__,"garden.types/CSSAtRule");
});

garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__199749){
return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__199749),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__199749),null,cljs.core.dissoc.call(null,G__199749,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)),null));
});


//# sourceMappingURL=types.js.map