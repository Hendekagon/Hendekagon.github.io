// Compiled by ClojureScript 1.8.40 {}
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
var seq__91433_91444 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__91434_91445 = null;
var count__91435_91446 = (0);
var i__91436_91447 = (0);
while(true){
if((i__91436_91447 < count__91435_91446)){
var k_91451 = cljs.core._nth.call(null,chunk__91434_91445,i__91436_91447);
var v_91452 = (b[k_91451]);
(a[k_91451] = v_91452);

var G__91454 = seq__91433_91444;
var G__91455 = chunk__91434_91445;
var G__91456 = count__91435_91446;
var G__91457 = (i__91436_91447 + (1));
seq__91433_91444 = G__91454;
chunk__91434_91445 = G__91455;
count__91435_91446 = G__91456;
i__91436_91447 = G__91457;
continue;
} else {
var temp__4657__auto___91463 = cljs.core.seq.call(null,seq__91433_91444);
if(temp__4657__auto___91463){
var seq__91433_91464__$1 = temp__4657__auto___91463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91433_91464__$1)){
var c__36233__auto___91470 = cljs.core.chunk_first.call(null,seq__91433_91464__$1);
var G__91471 = cljs.core.chunk_rest.call(null,seq__91433_91464__$1);
var G__91472 = c__36233__auto___91470;
var G__91473 = cljs.core.count.call(null,c__36233__auto___91470);
var G__91474 = (0);
seq__91433_91444 = G__91471;
chunk__91434_91445 = G__91472;
count__91435_91446 = G__91473;
i__91436_91447 = G__91474;
continue;
} else {
var k_91484 = cljs.core.first.call(null,seq__91433_91464__$1);
var v_91485 = (b[k_91484]);
(a[k_91484] = v_91485);

var G__91487 = cljs.core.next.call(null,seq__91433_91464__$1);
var G__91489 = null;
var G__91491 = (0);
var G__91493 = (0);
seq__91433_91444 = G__91487;
chunk__91434_91445 = G__91489;
count__91435_91446 = G__91491;
i__91436_91447 = G__91493;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cognitect.transit/VectorBuilder");
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
var args91529 = [];
var len__36491__auto___91536 = arguments.length;
var i__36492__auto___91537 = (0);
while(true){
if((i__36492__auto___91537 < len__36491__auto___91536)){
args91529.push((arguments[i__36492__auto___91537]));

var G__91542 = (i__36492__auto___91537 + (1));
i__36492__auto___91537 = G__91542;
continue;
} else {
}
break;
}

var G__91535 = args91529.length;
switch (G__91535) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91529.length)].join('')));

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
var G__91569 = (i + (2));
var G__91570 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__91569;
ret = G__91570;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cognitect.transit/SymbolHandler");
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
var seq__91606_91617 = cljs.core.seq.call(null,v);
var chunk__91607_91618 = null;
var count__91608_91619 = (0);
var i__91609_91620 = (0);
while(true){
if((i__91609_91620 < count__91608_91619)){
var x_91622 = cljs.core._nth.call(null,chunk__91607_91618,i__91609_91620);
ret.push(x_91622);

var G__91627 = seq__91606_91617;
var G__91628 = chunk__91607_91618;
var G__91629 = count__91608_91619;
var G__91630 = (i__91609_91620 + (1));
seq__91606_91617 = G__91627;
chunk__91607_91618 = G__91628;
count__91608_91619 = G__91629;
i__91609_91620 = G__91630;
continue;
} else {
var temp__4657__auto___91634 = cljs.core.seq.call(null,seq__91606_91617);
if(temp__4657__auto___91634){
var seq__91606_91640__$1 = temp__4657__auto___91634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91606_91640__$1)){
var c__36233__auto___91642 = cljs.core.chunk_first.call(null,seq__91606_91640__$1);
var G__91643 = cljs.core.chunk_rest.call(null,seq__91606_91640__$1);
var G__91644 = c__36233__auto___91642;
var G__91645 = cljs.core.count.call(null,c__36233__auto___91642);
var G__91646 = (0);
seq__91606_91617 = G__91643;
chunk__91607_91618 = G__91644;
count__91608_91619 = G__91645;
i__91609_91620 = G__91646;
continue;
} else {
var x_91653 = cljs.core.first.call(null,seq__91606_91640__$1);
ret.push(x_91653);

var G__91654 = cljs.core.next.call(null,seq__91606_91640__$1);
var G__91655 = null;
var G__91656 = (0);
var G__91657 = (0);
seq__91606_91617 = G__91654;
chunk__91607_91618 = G__91655;
count__91608_91619 = G__91656;
i__91609_91620 = G__91657;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cognitect.transit/MapHandler");
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
var seq__91672_91685 = cljs.core.seq.call(null,v);
var chunk__91673_91686 = null;
var count__91674_91687 = (0);
var i__91675_91688 = (0);
while(true){
if((i__91675_91688 < count__91674_91687)){
var x_91690 = cljs.core._nth.call(null,chunk__91673_91686,i__91675_91688);
ret.push(x_91690);

var G__91691 = seq__91672_91685;
var G__91692 = chunk__91673_91686;
var G__91693 = count__91674_91687;
var G__91694 = (i__91675_91688 + (1));
seq__91672_91685 = G__91691;
chunk__91673_91686 = G__91692;
count__91674_91687 = G__91693;
i__91675_91688 = G__91694;
continue;
} else {
var temp__4657__auto___91699 = cljs.core.seq.call(null,seq__91672_91685);
if(temp__4657__auto___91699){
var seq__91672_91700__$1 = temp__4657__auto___91699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91672_91700__$1)){
var c__36233__auto___91705 = cljs.core.chunk_first.call(null,seq__91672_91700__$1);
var G__91706 = cljs.core.chunk_rest.call(null,seq__91672_91700__$1);
var G__91707 = c__36233__auto___91705;
var G__91708 = cljs.core.count.call(null,c__36233__auto___91705);
var G__91709 = (0);
seq__91672_91685 = G__91706;
chunk__91673_91686 = G__91707;
count__91674_91687 = G__91708;
i__91675_91688 = G__91709;
continue;
} else {
var x_91710 = cljs.core.first.call(null,seq__91672_91700__$1);
ret.push(x_91710);

var G__91713 = cljs.core.next.call(null,seq__91672_91700__$1);
var G__91714 = null;
var G__91715 = (0);
var G__91716 = (0);
seq__91672_91685 = G__91713;
chunk__91673_91686 = G__91714;
count__91674_91687 = G__91715;
i__91675_91688 = G__91716;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cognitect.transit/SetHandler");
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
var seq__91727_91741 = cljs.core.seq.call(null,v);
var chunk__91728_91742 = null;
var count__91729_91743 = (0);
var i__91730_91744 = (0);
while(true){
if((i__91730_91744 < count__91729_91743)){
var x_91750 = cljs.core._nth.call(null,chunk__91728_91742,i__91730_91744);
ret.push(x_91750);

var G__91751 = seq__91727_91741;
var G__91752 = chunk__91728_91742;
var G__91753 = count__91729_91743;
var G__91754 = (i__91730_91744 + (1));
seq__91727_91741 = G__91751;
chunk__91728_91742 = G__91752;
count__91729_91743 = G__91753;
i__91730_91744 = G__91754;
continue;
} else {
var temp__4657__auto___91760 = cljs.core.seq.call(null,seq__91727_91741);
if(temp__4657__auto___91760){
var seq__91727_91767__$1 = temp__4657__auto___91760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91727_91767__$1)){
var c__36233__auto___91768 = cljs.core.chunk_first.call(null,seq__91727_91767__$1);
var G__91769 = cljs.core.chunk_rest.call(null,seq__91727_91767__$1);
var G__91770 = c__36233__auto___91768;
var G__91771 = cljs.core.count.call(null,c__36233__auto___91768);
var G__91772 = (0);
seq__91727_91741 = G__91769;
chunk__91728_91742 = G__91770;
count__91729_91743 = G__91771;
i__91730_91744 = G__91772;
continue;
} else {
var x_91778 = cljs.core.first.call(null,seq__91727_91767__$1);
ret.push(x_91778);

var G__91783 = cljs.core.next.call(null,seq__91727_91767__$1);
var G__91784 = null;
var G__91785 = (0);
var G__91786 = (0);
seq__91727_91741 = G__91783;
chunk__91728_91742 = G__91784;
count__91729_91743 = G__91785;
i__91730_91744 = G__91786;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cognitect.transit/UUIDHandler");
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
var args91817 = [];
var len__36491__auto___91849 = arguments.length;
var i__36492__auto___91850 = (0);
while(true){
if((i__36492__auto___91850 < len__36491__auto___91849)){
args91817.push((arguments[i__36492__auto___91850]));

var G__91851 = (i__36492__auto___91850 + (1));
i__36492__auto___91850 = G__91851;
continue;
} else {
}
break;
}

var G__91824 = args91817.length;
switch (G__91824) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91817.length)].join('')));

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
var G__91836 = obj;
G__91836.push(kfn.call(null,k),vfn.call(null,v));

return G__91836;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x91838 = cljs.core.clone.call(null,handlers);
x91838.forEach = ((function (x91838,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__91839 = cljs.core.seq.call(null,coll);
var chunk__91840 = null;
var count__91841 = (0);
var i__91842 = (0);
while(true){
if((i__91842 < count__91841)){
var vec__91847 = cljs.core._nth.call(null,chunk__91840,i__91842);
var k = cljs.core.nth.call(null,vec__91847,(0),null);
var v = cljs.core.nth.call(null,vec__91847,(1),null);
f.call(null,v,k);

var G__91894 = seq__91839;
var G__91895 = chunk__91840;
var G__91896 = count__91841;
var G__91897 = (i__91842 + (1));
seq__91839 = G__91894;
chunk__91840 = G__91895;
count__91841 = G__91896;
i__91842 = G__91897;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__91839);
if(temp__4657__auto__){
var seq__91839__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91839__$1)){
var c__36233__auto__ = cljs.core.chunk_first.call(null,seq__91839__$1);
var G__91902 = cljs.core.chunk_rest.call(null,seq__91839__$1);
var G__91903 = c__36233__auto__;
var G__91904 = cljs.core.count.call(null,c__36233__auto__);
var G__91905 = (0);
seq__91839 = G__91902;
chunk__91840 = G__91903;
count__91841 = G__91904;
i__91842 = G__91905;
continue;
} else {
var vec__91848 = cljs.core.first.call(null,seq__91839__$1);
var k = cljs.core.nth.call(null,vec__91848,(0),null);
var v = cljs.core.nth.call(null,vec__91848,(1),null);
f.call(null,v,k);

var G__91911 = cljs.core.next.call(null,seq__91839__$1);
var G__91912 = null;
var G__91913 = (0);
var G__91914 = (0);
seq__91839 = G__91911;
chunk__91840 = G__91912;
count__91841 = G__91913;
i__91842 = G__91914;
continue;
}
} else {
return null;
}
}
break;
}
});})(x91838,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x91838;
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
var args91929 = [];
var len__36491__auto___91953 = arguments.length;
var i__36492__auto___91955 = (0);
while(true){
if((i__36492__auto___91955 < len__36491__auto___91953)){
args91929.push((arguments[i__36492__auto___91955]));

var G__91957 = (i__36492__auto___91955 + (1));
i__36492__auto___91955 = G__91957;
continue;
} else {
}
break;
}

var G__91933 = args91929.length;
switch (G__91933) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91929.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit91936 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit91936 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta91937){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta91937 = meta91937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit91936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91938,meta91937__$1){
var self__ = this;
var _91938__$1 = this;
return (new cognitect.transit.t_cognitect$transit91936(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta91937__$1));
});

cognitect.transit.t_cognitect$transit91936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91938){
var self__ = this;
var _91938__$1 = this;
return self__.meta91937;
});

cognitect.transit.t_cognitect$transit91936.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit91936.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit91936.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit91936.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit91936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta91937","meta91937",1975544544,null)], null);
});

cognitect.transit.t_cognitect$transit91936.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit91936.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit91936";

cognitect.transit.t_cognitect$transit91936.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cognitect.transit/t_cognitect$transit91936");
});

cognitect.transit.__GT_t_cognitect$transit91936 = (function cognitect$transit$__GT_t_cognitect$transit91936(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta91937){
return (new cognitect.transit.t_cognitect$transit91936(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta91937));
});

}

return (new cognitect.transit.t_cognitect$transit91936(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__35422__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
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
