// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__53583_53587 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__53584_53588 = null;
var count__53585_53589 = (0);
var i__53586_53590 = (0);
while(true){
if((i__53586_53590 < count__53585_53589)){
var k_53591 = cljs.core._nth.call(null,chunk__53584_53588,i__53586_53590);
var v_53592 = (b[k_53591]);
(a[k_53591] = v_53592);

var G__53593 = seq__53583_53587;
var G__53594 = chunk__53584_53588;
var G__53595 = count__53585_53589;
var G__53596 = (i__53586_53590 + (1));
seq__53583_53587 = G__53593;
chunk__53584_53588 = G__53594;
count__53585_53589 = G__53595;
i__53586_53590 = G__53596;
continue;
} else {
var temp__4425__auto___53597 = cljs.core.seq.call(null,seq__53583_53587);
if(temp__4425__auto___53597){
var seq__53583_53598__$1 = temp__4425__auto___53597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53583_53598__$1)){
var c__24968__auto___53599 = cljs.core.chunk_first.call(null,seq__53583_53598__$1);
var G__53600 = cljs.core.chunk_rest.call(null,seq__53583_53598__$1);
var G__53601 = c__24968__auto___53599;
var G__53602 = cljs.core.count.call(null,c__24968__auto___53599);
var G__53603 = (0);
seq__53583_53587 = G__53600;
chunk__53584_53588 = G__53601;
count__53585_53589 = G__53602;
i__53586_53590 = G__53603;
continue;
} else {
var k_53604 = cljs.core.first.call(null,seq__53583_53598__$1);
var v_53605 = (b[k_53604]);
(a[k_53604] = v_53605);

var G__53606 = cljs.core.next.call(null,seq__53583_53598__$1);
var G__53607 = null;
var G__53608 = (0);
var G__53609 = (0);
seq__53583_53587 = G__53606;
chunk__53584_53588 = G__53607;
count__53585_53589 = G__53608;
i__53586_53590 = G__53609;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args53610 = [];
var len__25223__auto___53613 = arguments.length;
var i__25224__auto___53614 = (0);
while(true){
if((i__25224__auto___53614 < len__25223__auto___53613)){
args53610.push((arguments[i__25224__auto___53614]));

var G__53615 = (i__25224__auto___53614 + (1));
i__25224__auto___53614 = G__53615;
continue;
} else {
}
break;
}

var G__53612 = args53610.length;
switch (G__53612) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53610.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__53617 = (i + (2));
var G__53618 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__53617;
ret = G__53618;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__53619_53623 = cljs.core.seq.call(null,v);
var chunk__53620_53624 = null;
var count__53621_53625 = (0);
var i__53622_53626 = (0);
while(true){
if((i__53622_53626 < count__53621_53625)){
var x_53627 = cljs.core._nth.call(null,chunk__53620_53624,i__53622_53626);
ret.push(x_53627);

var G__53628 = seq__53619_53623;
var G__53629 = chunk__53620_53624;
var G__53630 = count__53621_53625;
var G__53631 = (i__53622_53626 + (1));
seq__53619_53623 = G__53628;
chunk__53620_53624 = G__53629;
count__53621_53625 = G__53630;
i__53622_53626 = G__53631;
continue;
} else {
var temp__4425__auto___53632 = cljs.core.seq.call(null,seq__53619_53623);
if(temp__4425__auto___53632){
var seq__53619_53633__$1 = temp__4425__auto___53632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53619_53633__$1)){
var c__24968__auto___53634 = cljs.core.chunk_first.call(null,seq__53619_53633__$1);
var G__53635 = cljs.core.chunk_rest.call(null,seq__53619_53633__$1);
var G__53636 = c__24968__auto___53634;
var G__53637 = cljs.core.count.call(null,c__24968__auto___53634);
var G__53638 = (0);
seq__53619_53623 = G__53635;
chunk__53620_53624 = G__53636;
count__53621_53625 = G__53637;
i__53622_53626 = G__53638;
continue;
} else {
var x_53639 = cljs.core.first.call(null,seq__53619_53633__$1);
ret.push(x_53639);

var G__53640 = cljs.core.next.call(null,seq__53619_53633__$1);
var G__53641 = null;
var G__53642 = (0);
var G__53643 = (0);
seq__53619_53623 = G__53640;
chunk__53620_53624 = G__53641;
count__53621_53625 = G__53642;
i__53622_53626 = G__53643;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__53644_53648 = cljs.core.seq.call(null,v);
var chunk__53645_53649 = null;
var count__53646_53650 = (0);
var i__53647_53651 = (0);
while(true){
if((i__53647_53651 < count__53646_53650)){
var x_53652 = cljs.core._nth.call(null,chunk__53645_53649,i__53647_53651);
ret.push(x_53652);

var G__53653 = seq__53644_53648;
var G__53654 = chunk__53645_53649;
var G__53655 = count__53646_53650;
var G__53656 = (i__53647_53651 + (1));
seq__53644_53648 = G__53653;
chunk__53645_53649 = G__53654;
count__53646_53650 = G__53655;
i__53647_53651 = G__53656;
continue;
} else {
var temp__4425__auto___53657 = cljs.core.seq.call(null,seq__53644_53648);
if(temp__4425__auto___53657){
var seq__53644_53658__$1 = temp__4425__auto___53657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53644_53658__$1)){
var c__24968__auto___53659 = cljs.core.chunk_first.call(null,seq__53644_53658__$1);
var G__53660 = cljs.core.chunk_rest.call(null,seq__53644_53658__$1);
var G__53661 = c__24968__auto___53659;
var G__53662 = cljs.core.count.call(null,c__24968__auto___53659);
var G__53663 = (0);
seq__53644_53648 = G__53660;
chunk__53645_53649 = G__53661;
count__53646_53650 = G__53662;
i__53647_53651 = G__53663;
continue;
} else {
var x_53664 = cljs.core.first.call(null,seq__53644_53658__$1);
ret.push(x_53664);

var G__53665 = cljs.core.next.call(null,seq__53644_53658__$1);
var G__53666 = null;
var G__53667 = (0);
var G__53668 = (0);
seq__53644_53648 = G__53665;
chunk__53645_53649 = G__53666;
count__53646_53650 = G__53667;
i__53647_53651 = G__53668;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__53669_53673 = cljs.core.seq.call(null,v);
var chunk__53670_53674 = null;
var count__53671_53675 = (0);
var i__53672_53676 = (0);
while(true){
if((i__53672_53676 < count__53671_53675)){
var x_53677 = cljs.core._nth.call(null,chunk__53670_53674,i__53672_53676);
ret.push(x_53677);

var G__53678 = seq__53669_53673;
var G__53679 = chunk__53670_53674;
var G__53680 = count__53671_53675;
var G__53681 = (i__53672_53676 + (1));
seq__53669_53673 = G__53678;
chunk__53670_53674 = G__53679;
count__53671_53675 = G__53680;
i__53672_53676 = G__53681;
continue;
} else {
var temp__4425__auto___53682 = cljs.core.seq.call(null,seq__53669_53673);
if(temp__4425__auto___53682){
var seq__53669_53683__$1 = temp__4425__auto___53682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53669_53683__$1)){
var c__24968__auto___53684 = cljs.core.chunk_first.call(null,seq__53669_53683__$1);
var G__53685 = cljs.core.chunk_rest.call(null,seq__53669_53683__$1);
var G__53686 = c__24968__auto___53684;
var G__53687 = cljs.core.count.call(null,c__24968__auto___53684);
var G__53688 = (0);
seq__53669_53673 = G__53685;
chunk__53670_53674 = G__53686;
count__53671_53675 = G__53687;
i__53672_53676 = G__53688;
continue;
} else {
var x_53689 = cljs.core.first.call(null,seq__53669_53683__$1);
ret.push(x_53689);

var G__53690 = cljs.core.next.call(null,seq__53669_53683__$1);
var G__53691 = null;
var G__53692 = (0);
var G__53693 = (0);
seq__53669_53673 = G__53690;
chunk__53670_53674 = G__53691;
count__53671_53675 = G__53692;
i__53672_53676 = G__53693;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args53694 = [];
var len__25223__auto___53705 = arguments.length;
var i__25224__auto___53706 = (0);
while(true){
if((i__25224__auto___53706 < len__25223__auto___53705)){
args53694.push((arguments[i__25224__auto___53706]));

var G__53707 = (i__25224__auto___53706 + (1));
i__25224__auto___53706 = G__53707;
continue;
} else {
}
break;
}

var G__53696 = args53694.length;
switch (G__53696) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53694.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__53697 = obj;
G__53697.push(kfn.call(null,k),vfn.call(null,v));

return G__53697;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x53698 = cljs.core.clone.call(null,handlers);
x53698.forEach = ((function (x53698,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__53699 = cljs.core.seq.call(null,coll);
var chunk__53700 = null;
var count__53701 = (0);
var i__53702 = (0);
while(true){
if((i__53702 < count__53701)){
var vec__53703 = cljs.core._nth.call(null,chunk__53700,i__53702);
var k = cljs.core.nth.call(null,vec__53703,(0),null);
var v = cljs.core.nth.call(null,vec__53703,(1),null);
f.call(null,v,k);

var G__53709 = seq__53699;
var G__53710 = chunk__53700;
var G__53711 = count__53701;
var G__53712 = (i__53702 + (1));
seq__53699 = G__53709;
chunk__53700 = G__53710;
count__53701 = G__53711;
i__53702 = G__53712;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__53699);
if(temp__4425__auto__){
var seq__53699__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53699__$1)){
var c__24968__auto__ = cljs.core.chunk_first.call(null,seq__53699__$1);
var G__53713 = cljs.core.chunk_rest.call(null,seq__53699__$1);
var G__53714 = c__24968__auto__;
var G__53715 = cljs.core.count.call(null,c__24968__auto__);
var G__53716 = (0);
seq__53699 = G__53713;
chunk__53700 = G__53714;
count__53701 = G__53715;
i__53702 = G__53716;
continue;
} else {
var vec__53704 = cljs.core.first.call(null,seq__53699__$1);
var k = cljs.core.nth.call(null,vec__53704,(0),null);
var v = cljs.core.nth.call(null,vec__53704,(1),null);
f.call(null,v,k);

var G__53717 = cljs.core.next.call(null,seq__53699__$1);
var G__53718 = null;
var G__53719 = (0);
var G__53720 = (0);
seq__53699 = G__53717;
chunk__53700 = G__53718;
count__53701 = G__53719;
i__53702 = G__53720;
continue;
}
} else {
return null;
}
}
break;
}
});})(x53698,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x53698;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args53721 = [];
var len__25223__auto___53727 = arguments.length;
var i__25224__auto___53728 = (0);
while(true){
if((i__25224__auto___53728 < len__25223__auto___53727)){
args53721.push((arguments[i__25224__auto___53728]));

var G__53729 = (i__25224__auto___53728 + (1));
i__25224__auto___53728 = G__53729;
continue;
} else {
}
break;
}

var G__53723 = args53721.length;
switch (G__53723) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53721.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit53724 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit53724 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta53725){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta53725 = meta53725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit53724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53726,meta53725__$1){
var self__ = this;
var _53726__$1 = this;
return (new cognitect.transit.t_cognitect$transit53724(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta53725__$1));
});

cognitect.transit.t_cognitect$transit53724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53726){
var self__ = this;
var _53726__$1 = this;
return self__.meta53725;
});

cognitect.transit.t_cognitect$transit53724.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit53724.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit53724.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit53724.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit53724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta53725","meta53725",-1311582534,null)], null);
});

cognitect.transit.t_cognitect$transit53724.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit53724.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit53724";

cognitect.transit.t_cognitect$transit53724.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cognitect.transit/t_cognitect$transit53724");
});

cognitect.transit.__GT_t_cognitect$transit53724 = (function cognitect$transit$__GT_t_cognitect$transit53724(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta53725){
return (new cognitect.transit.t_cognitect$transit53724(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta53725));
});

}

return (new cognitect.transit.t_cognitect$transit53724(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__24165__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map