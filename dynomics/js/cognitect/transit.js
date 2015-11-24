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
var seq__1890585_1890589 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__1890586_1890590 = null;
var count__1890587_1890591 = (0);
var i__1890588_1890592 = (0);
while(true){
if((i__1890588_1890592 < count__1890587_1890591)){
var k_1890593 = cljs.core._nth.call(null,chunk__1890586_1890590,i__1890588_1890592);
var v_1890594 = (b[k_1890593]);
(a[k_1890593] = v_1890594);

var G__1890595 = seq__1890585_1890589;
var G__1890596 = chunk__1890586_1890590;
var G__1890597 = count__1890587_1890591;
var G__1890598 = (i__1890588_1890592 + (1));
seq__1890585_1890589 = G__1890595;
chunk__1890586_1890590 = G__1890596;
count__1890587_1890591 = G__1890597;
i__1890588_1890592 = G__1890598;
continue;
} else {
var temp__4425__auto___1890599 = cljs.core.seq.call(null,seq__1890585_1890589);
if(temp__4425__auto___1890599){
var seq__1890585_1890600__$1 = temp__4425__auto___1890599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1890585_1890600__$1)){
var c__24964__auto___1890601 = cljs.core.chunk_first.call(null,seq__1890585_1890600__$1);
var G__1890602 = cljs.core.chunk_rest.call(null,seq__1890585_1890600__$1);
var G__1890603 = c__24964__auto___1890601;
var G__1890604 = cljs.core.count.call(null,c__24964__auto___1890601);
var G__1890605 = (0);
seq__1890585_1890589 = G__1890602;
chunk__1890586_1890590 = G__1890603;
count__1890587_1890591 = G__1890604;
i__1890588_1890592 = G__1890605;
continue;
} else {
var k_1890606 = cljs.core.first.call(null,seq__1890585_1890600__$1);
var v_1890607 = (b[k_1890606]);
(a[k_1890606] = v_1890607);

var G__1890608 = cljs.core.next.call(null,seq__1890585_1890600__$1);
var G__1890609 = null;
var G__1890610 = (0);
var G__1890611 = (0);
seq__1890585_1890589 = G__1890608;
chunk__1890586_1890590 = G__1890609;
count__1890587_1890591 = G__1890610;
i__1890588_1890592 = G__1890611;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cognitect.transit/VectorBuilder");
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
var args1890612 = [];
var len__25219__auto___1890615 = arguments.length;
var i__25220__auto___1890616 = (0);
while(true){
if((i__25220__auto___1890616 < len__25219__auto___1890615)){
args1890612.push((arguments[i__25220__auto___1890616]));

var G__1890617 = (i__25220__auto___1890616 + (1));
i__25220__auto___1890616 = G__1890617;
continue;
} else {
}
break;
}

var G__1890614 = args1890612.length;
switch (G__1890614) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1890612.length)].join('')));

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
var G__1890619 = (i + (2));
var G__1890620 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__1890619;
ret = G__1890620;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cognitect.transit/SymbolHandler");
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
var seq__1890621_1890625 = cljs.core.seq.call(null,v);
var chunk__1890622_1890626 = null;
var count__1890623_1890627 = (0);
var i__1890624_1890628 = (0);
while(true){
if((i__1890624_1890628 < count__1890623_1890627)){
var x_1890629 = cljs.core._nth.call(null,chunk__1890622_1890626,i__1890624_1890628);
ret.push(x_1890629);

var G__1890630 = seq__1890621_1890625;
var G__1890631 = chunk__1890622_1890626;
var G__1890632 = count__1890623_1890627;
var G__1890633 = (i__1890624_1890628 + (1));
seq__1890621_1890625 = G__1890630;
chunk__1890622_1890626 = G__1890631;
count__1890623_1890627 = G__1890632;
i__1890624_1890628 = G__1890633;
continue;
} else {
var temp__4425__auto___1890634 = cljs.core.seq.call(null,seq__1890621_1890625);
if(temp__4425__auto___1890634){
var seq__1890621_1890635__$1 = temp__4425__auto___1890634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1890621_1890635__$1)){
var c__24964__auto___1890636 = cljs.core.chunk_first.call(null,seq__1890621_1890635__$1);
var G__1890637 = cljs.core.chunk_rest.call(null,seq__1890621_1890635__$1);
var G__1890638 = c__24964__auto___1890636;
var G__1890639 = cljs.core.count.call(null,c__24964__auto___1890636);
var G__1890640 = (0);
seq__1890621_1890625 = G__1890637;
chunk__1890622_1890626 = G__1890638;
count__1890623_1890627 = G__1890639;
i__1890624_1890628 = G__1890640;
continue;
} else {
var x_1890641 = cljs.core.first.call(null,seq__1890621_1890635__$1);
ret.push(x_1890641);

var G__1890642 = cljs.core.next.call(null,seq__1890621_1890635__$1);
var G__1890643 = null;
var G__1890644 = (0);
var G__1890645 = (0);
seq__1890621_1890625 = G__1890642;
chunk__1890622_1890626 = G__1890643;
count__1890623_1890627 = G__1890644;
i__1890624_1890628 = G__1890645;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cognitect.transit/MapHandler");
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
var seq__1890646_1890650 = cljs.core.seq.call(null,v);
var chunk__1890647_1890651 = null;
var count__1890648_1890652 = (0);
var i__1890649_1890653 = (0);
while(true){
if((i__1890649_1890653 < count__1890648_1890652)){
var x_1890654 = cljs.core._nth.call(null,chunk__1890647_1890651,i__1890649_1890653);
ret.push(x_1890654);

var G__1890655 = seq__1890646_1890650;
var G__1890656 = chunk__1890647_1890651;
var G__1890657 = count__1890648_1890652;
var G__1890658 = (i__1890649_1890653 + (1));
seq__1890646_1890650 = G__1890655;
chunk__1890647_1890651 = G__1890656;
count__1890648_1890652 = G__1890657;
i__1890649_1890653 = G__1890658;
continue;
} else {
var temp__4425__auto___1890659 = cljs.core.seq.call(null,seq__1890646_1890650);
if(temp__4425__auto___1890659){
var seq__1890646_1890660__$1 = temp__4425__auto___1890659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1890646_1890660__$1)){
var c__24964__auto___1890661 = cljs.core.chunk_first.call(null,seq__1890646_1890660__$1);
var G__1890662 = cljs.core.chunk_rest.call(null,seq__1890646_1890660__$1);
var G__1890663 = c__24964__auto___1890661;
var G__1890664 = cljs.core.count.call(null,c__24964__auto___1890661);
var G__1890665 = (0);
seq__1890646_1890650 = G__1890662;
chunk__1890647_1890651 = G__1890663;
count__1890648_1890652 = G__1890664;
i__1890649_1890653 = G__1890665;
continue;
} else {
var x_1890666 = cljs.core.first.call(null,seq__1890646_1890660__$1);
ret.push(x_1890666);

var G__1890667 = cljs.core.next.call(null,seq__1890646_1890660__$1);
var G__1890668 = null;
var G__1890669 = (0);
var G__1890670 = (0);
seq__1890646_1890650 = G__1890667;
chunk__1890647_1890651 = G__1890668;
count__1890648_1890652 = G__1890669;
i__1890649_1890653 = G__1890670;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cognitect.transit/SetHandler");
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
var seq__1890671_1890675 = cljs.core.seq.call(null,v);
var chunk__1890672_1890676 = null;
var count__1890673_1890677 = (0);
var i__1890674_1890678 = (0);
while(true){
if((i__1890674_1890678 < count__1890673_1890677)){
var x_1890679 = cljs.core._nth.call(null,chunk__1890672_1890676,i__1890674_1890678);
ret.push(x_1890679);

var G__1890680 = seq__1890671_1890675;
var G__1890681 = chunk__1890672_1890676;
var G__1890682 = count__1890673_1890677;
var G__1890683 = (i__1890674_1890678 + (1));
seq__1890671_1890675 = G__1890680;
chunk__1890672_1890676 = G__1890681;
count__1890673_1890677 = G__1890682;
i__1890674_1890678 = G__1890683;
continue;
} else {
var temp__4425__auto___1890684 = cljs.core.seq.call(null,seq__1890671_1890675);
if(temp__4425__auto___1890684){
var seq__1890671_1890685__$1 = temp__4425__auto___1890684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1890671_1890685__$1)){
var c__24964__auto___1890686 = cljs.core.chunk_first.call(null,seq__1890671_1890685__$1);
var G__1890687 = cljs.core.chunk_rest.call(null,seq__1890671_1890685__$1);
var G__1890688 = c__24964__auto___1890686;
var G__1890689 = cljs.core.count.call(null,c__24964__auto___1890686);
var G__1890690 = (0);
seq__1890671_1890675 = G__1890687;
chunk__1890672_1890676 = G__1890688;
count__1890673_1890677 = G__1890689;
i__1890674_1890678 = G__1890690;
continue;
} else {
var x_1890691 = cljs.core.first.call(null,seq__1890671_1890685__$1);
ret.push(x_1890691);

var G__1890692 = cljs.core.next.call(null,seq__1890671_1890685__$1);
var G__1890693 = null;
var G__1890694 = (0);
var G__1890695 = (0);
seq__1890671_1890675 = G__1890692;
chunk__1890672_1890676 = G__1890693;
count__1890673_1890677 = G__1890694;
i__1890674_1890678 = G__1890695;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cognitect.transit/UUIDHandler");
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
var args1890696 = [];
var len__25219__auto___1890707 = arguments.length;
var i__25220__auto___1890708 = (0);
while(true){
if((i__25220__auto___1890708 < len__25219__auto___1890707)){
args1890696.push((arguments[i__25220__auto___1890708]));

var G__1890709 = (i__25220__auto___1890708 + (1));
i__25220__auto___1890708 = G__1890709;
continue;
} else {
}
break;
}

var G__1890698 = args1890696.length;
switch (G__1890698) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1890696.length)].join('')));

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
var G__1890699 = obj;
G__1890699.push(kfn.call(null,k),vfn.call(null,v));

return G__1890699;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x1890700 = cljs.core.clone.call(null,handlers);
x1890700.forEach = ((function (x1890700,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__1890701 = cljs.core.seq.call(null,coll);
var chunk__1890702 = null;
var count__1890703 = (0);
var i__1890704 = (0);
while(true){
if((i__1890704 < count__1890703)){
var vec__1890705 = cljs.core._nth.call(null,chunk__1890702,i__1890704);
var k = cljs.core.nth.call(null,vec__1890705,(0),null);
var v = cljs.core.nth.call(null,vec__1890705,(1),null);
f.call(null,v,k);

var G__1890711 = seq__1890701;
var G__1890712 = chunk__1890702;
var G__1890713 = count__1890703;
var G__1890714 = (i__1890704 + (1));
seq__1890701 = G__1890711;
chunk__1890702 = G__1890712;
count__1890703 = G__1890713;
i__1890704 = G__1890714;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__1890701);
if(temp__4425__auto__){
var seq__1890701__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1890701__$1)){
var c__24964__auto__ = cljs.core.chunk_first.call(null,seq__1890701__$1);
var G__1890715 = cljs.core.chunk_rest.call(null,seq__1890701__$1);
var G__1890716 = c__24964__auto__;
var G__1890717 = cljs.core.count.call(null,c__24964__auto__);
var G__1890718 = (0);
seq__1890701 = G__1890715;
chunk__1890702 = G__1890716;
count__1890703 = G__1890717;
i__1890704 = G__1890718;
continue;
} else {
var vec__1890706 = cljs.core.first.call(null,seq__1890701__$1);
var k = cljs.core.nth.call(null,vec__1890706,(0),null);
var v = cljs.core.nth.call(null,vec__1890706,(1),null);
f.call(null,v,k);

var G__1890719 = cljs.core.next.call(null,seq__1890701__$1);
var G__1890720 = null;
var G__1890721 = (0);
var G__1890722 = (0);
seq__1890701 = G__1890719;
chunk__1890702 = G__1890720;
count__1890703 = G__1890721;
i__1890704 = G__1890722;
continue;
}
} else {
return null;
}
}
break;
}
});})(x1890700,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x1890700;
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
var args1890723 = [];
var len__25219__auto___1890729 = arguments.length;
var i__25220__auto___1890730 = (0);
while(true){
if((i__25220__auto___1890730 < len__25219__auto___1890729)){
args1890723.push((arguments[i__25220__auto___1890730]));

var G__1890731 = (i__25220__auto___1890730 + (1));
i__25220__auto___1890730 = G__1890731;
continue;
} else {
}
break;
}

var G__1890725 = args1890723.length;
switch (G__1890725) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1890723.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit1890726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit1890726 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta1890727){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta1890727 = meta1890727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit1890726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1890728,meta1890727__$1){
var self__ = this;
var _1890728__$1 = this;
return (new cognitect.transit.t_cognitect$transit1890726(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta1890727__$1));
});

cognitect.transit.t_cognitect$transit1890726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1890728){
var self__ = this;
var _1890728__$1 = this;
return self__.meta1890727;
});

cognitect.transit.t_cognitect$transit1890726.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit1890726.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit1890726.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit1890726.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit1890726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta1890727","meta1890727",-1364890379,null)], null);
});

cognitect.transit.t_cognitect$transit1890726.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit1890726.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit1890726";

cognitect.transit.t_cognitect$transit1890726.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cognitect.transit/t_cognitect$transit1890726");
});

cognitect.transit.__GT_t_cognitect$transit1890726 = (function cognitect$transit$__GT_t_cognitect$transit1890726(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta1890727){
return (new cognitect.transit.t_cognitect$transit1890726(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta1890727));
});

}

return (new cognitect.transit.t_cognitect$transit1890726(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__24161__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
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