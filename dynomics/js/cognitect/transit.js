// Compiled by ClojureScript 1.8.34 {}
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
var seq__375713_375721 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__375714_375722 = null;
var count__375715_375723 = (0);
var i__375716_375724 = (0);
while(true){
if((i__375716_375724 < count__375715_375723)){
var k_375729 = cljs.core._nth.call(null,chunk__375714_375722,i__375716_375724);
var v_375730 = (b[k_375729]);
(a[k_375729] = v_375730);

var G__375731 = seq__375713_375721;
var G__375732 = chunk__375714_375722;
var G__375733 = count__375715_375723;
var G__375734 = (i__375716_375724 + (1));
seq__375713_375721 = G__375731;
chunk__375714_375722 = G__375732;
count__375715_375723 = G__375733;
i__375716_375724 = G__375734;
continue;
} else {
var temp__4657__auto___375740 = cljs.core.seq.call(null,seq__375713_375721);
if(temp__4657__auto___375740){
var seq__375713_375741__$1 = temp__4657__auto___375740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__375713_375741__$1)){
var c__36002__auto___375742 = cljs.core.chunk_first.call(null,seq__375713_375741__$1);
var G__375747 = cljs.core.chunk_rest.call(null,seq__375713_375741__$1);
var G__375748 = c__36002__auto___375742;
var G__375749 = cljs.core.count.call(null,c__36002__auto___375742);
var G__375750 = (0);
seq__375713_375721 = G__375747;
chunk__375714_375722 = G__375748;
count__375715_375723 = G__375749;
i__375716_375724 = G__375750;
continue;
} else {
var k_375757 = cljs.core.first.call(null,seq__375713_375741__$1);
var v_375760 = (b[k_375757]);
(a[k_375757] = v_375760);

var G__375764 = cljs.core.next.call(null,seq__375713_375741__$1);
var G__375765 = null;
var G__375766 = (0);
var G__375767 = (0);
seq__375713_375721 = G__375764;
chunk__375714_375722 = G__375765;
count__375715_375723 = G__375766;
i__375716_375724 = G__375767;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cognitect.transit/VectorBuilder");
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
var args375811 = [];
var len__36260__auto___375844 = arguments.length;
var i__36261__auto___375845 = (0);
while(true){
if((i__36261__auto___375845 < len__36260__auto___375844)){
args375811.push((arguments[i__36261__auto___375845]));

var G__375849 = (i__36261__auto___375845 + (1));
i__36261__auto___375845 = G__375849;
continue;
} else {
}
break;
}

var G__375821 = args375811.length;
switch (G__375821) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args375811.length)].join('')));

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
var G__375857 = (i + (2));
var G__375858 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__375857;
ret = G__375858;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cognitect.transit/SymbolHandler");
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
var seq__375882_375889 = cljs.core.seq.call(null,v);
var chunk__375883_375890 = null;
var count__375884_375891 = (0);
var i__375885_375892 = (0);
while(true){
if((i__375885_375892 < count__375884_375891)){
var x_375894 = cljs.core._nth.call(null,chunk__375883_375890,i__375885_375892);
ret.push(x_375894);

var G__375896 = seq__375882_375889;
var G__375897 = chunk__375883_375890;
var G__375898 = count__375884_375891;
var G__375899 = (i__375885_375892 + (1));
seq__375882_375889 = G__375896;
chunk__375883_375890 = G__375897;
count__375884_375891 = G__375898;
i__375885_375892 = G__375899;
continue;
} else {
var temp__4657__auto___375905 = cljs.core.seq.call(null,seq__375882_375889);
if(temp__4657__auto___375905){
var seq__375882_375907__$1 = temp__4657__auto___375905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__375882_375907__$1)){
var c__36002__auto___375908 = cljs.core.chunk_first.call(null,seq__375882_375907__$1);
var G__375909 = cljs.core.chunk_rest.call(null,seq__375882_375907__$1);
var G__375910 = c__36002__auto___375908;
var G__375911 = cljs.core.count.call(null,c__36002__auto___375908);
var G__375912 = (0);
seq__375882_375889 = G__375909;
chunk__375883_375890 = G__375910;
count__375884_375891 = G__375911;
i__375885_375892 = G__375912;
continue;
} else {
var x_375917 = cljs.core.first.call(null,seq__375882_375907__$1);
ret.push(x_375917);

var G__375920 = cljs.core.next.call(null,seq__375882_375907__$1);
var G__375921 = null;
var G__375922 = (0);
var G__375923 = (0);
seq__375882_375889 = G__375920;
chunk__375883_375890 = G__375921;
count__375884_375891 = G__375922;
i__375885_375892 = G__375923;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cognitect.transit/MapHandler");
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
var seq__375958_375966 = cljs.core.seq.call(null,v);
var chunk__375959_375967 = null;
var count__375960_375968 = (0);
var i__375961_375969 = (0);
while(true){
if((i__375961_375969 < count__375960_375968)){
var x_375974 = cljs.core._nth.call(null,chunk__375959_375967,i__375961_375969);
ret.push(x_375974);

var G__375976 = seq__375958_375966;
var G__375977 = chunk__375959_375967;
var G__375978 = count__375960_375968;
var G__375979 = (i__375961_375969 + (1));
seq__375958_375966 = G__375976;
chunk__375959_375967 = G__375977;
count__375960_375968 = G__375978;
i__375961_375969 = G__375979;
continue;
} else {
var temp__4657__auto___375984 = cljs.core.seq.call(null,seq__375958_375966);
if(temp__4657__auto___375984){
var seq__375958_375985__$1 = temp__4657__auto___375984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__375958_375985__$1)){
var c__36002__auto___375987 = cljs.core.chunk_first.call(null,seq__375958_375985__$1);
var G__375989 = cljs.core.chunk_rest.call(null,seq__375958_375985__$1);
var G__375990 = c__36002__auto___375987;
var G__375991 = cljs.core.count.call(null,c__36002__auto___375987);
var G__375992 = (0);
seq__375958_375966 = G__375989;
chunk__375959_375967 = G__375990;
count__375960_375968 = G__375991;
i__375961_375969 = G__375992;
continue;
} else {
var x_375998 = cljs.core.first.call(null,seq__375958_375985__$1);
ret.push(x_375998);

var G__375999 = cljs.core.next.call(null,seq__375958_375985__$1);
var G__376000 = null;
var G__376001 = (0);
var G__376002 = (0);
seq__375958_375966 = G__375999;
chunk__375959_375967 = G__376000;
count__375960_375968 = G__376001;
i__375961_375969 = G__376002;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cognitect.transit/SetHandler");
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
var seq__376010_376023 = cljs.core.seq.call(null,v);
var chunk__376011_376024 = null;
var count__376012_376025 = (0);
var i__376013_376026 = (0);
while(true){
if((i__376013_376026 < count__376012_376025)){
var x_376031 = cljs.core._nth.call(null,chunk__376011_376024,i__376013_376026);
ret.push(x_376031);

var G__376033 = seq__376010_376023;
var G__376034 = chunk__376011_376024;
var G__376035 = count__376012_376025;
var G__376036 = (i__376013_376026 + (1));
seq__376010_376023 = G__376033;
chunk__376011_376024 = G__376034;
count__376012_376025 = G__376035;
i__376013_376026 = G__376036;
continue;
} else {
var temp__4657__auto___376039 = cljs.core.seq.call(null,seq__376010_376023);
if(temp__4657__auto___376039){
var seq__376010_376041__$1 = temp__4657__auto___376039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__376010_376041__$1)){
var c__36002__auto___376042 = cljs.core.chunk_first.call(null,seq__376010_376041__$1);
var G__376043 = cljs.core.chunk_rest.call(null,seq__376010_376041__$1);
var G__376044 = c__36002__auto___376042;
var G__376045 = cljs.core.count.call(null,c__36002__auto___376042);
var G__376046 = (0);
seq__376010_376023 = G__376043;
chunk__376011_376024 = G__376044;
count__376012_376025 = G__376045;
i__376013_376026 = G__376046;
continue;
} else {
var x_376049 = cljs.core.first.call(null,seq__376010_376041__$1);
ret.push(x_376049);

var G__376051 = cljs.core.next.call(null,seq__376010_376041__$1);
var G__376052 = null;
var G__376053 = (0);
var G__376054 = (0);
seq__376010_376023 = G__376051;
chunk__376011_376024 = G__376052;
count__376012_376025 = G__376053;
i__376013_376026 = G__376054;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cognitect.transit/UUIDHandler");
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
var args376071 = [];
var len__36260__auto___376102 = arguments.length;
var i__36261__auto___376103 = (0);
while(true){
if((i__36261__auto___376103 < len__36260__auto___376102)){
args376071.push((arguments[i__36261__auto___376103]));

var G__376104 = (i__36261__auto___376103 + (1));
i__36261__auto___376103 = G__376104;
continue;
} else {
}
break;
}

var G__376082 = args376071.length;
switch (G__376082) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376071.length)].join('')));

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
var G__376091 = obj;
G__376091.push(kfn.call(null,k),vfn.call(null,v));

return G__376091;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x376092 = cljs.core.clone.call(null,handlers);
x376092.forEach = ((function (x376092,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__376093 = cljs.core.seq.call(null,coll);
var chunk__376094 = null;
var count__376095 = (0);
var i__376096 = (0);
while(true){
if((i__376096 < count__376095)){
var vec__376097 = cljs.core._nth.call(null,chunk__376094,i__376096);
var k = cljs.core.nth.call(null,vec__376097,(0),null);
var v = cljs.core.nth.call(null,vec__376097,(1),null);
f.call(null,v,k);

var G__376128 = seq__376093;
var G__376129 = chunk__376094;
var G__376130 = count__376095;
var G__376131 = (i__376096 + (1));
seq__376093 = G__376128;
chunk__376094 = G__376129;
count__376095 = G__376130;
i__376096 = G__376131;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__376093);
if(temp__4657__auto__){
var seq__376093__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__376093__$1)){
var c__36002__auto__ = cljs.core.chunk_first.call(null,seq__376093__$1);
var G__376132 = cljs.core.chunk_rest.call(null,seq__376093__$1);
var G__376133 = c__36002__auto__;
var G__376134 = cljs.core.count.call(null,c__36002__auto__);
var G__376135 = (0);
seq__376093 = G__376132;
chunk__376094 = G__376133;
count__376095 = G__376134;
i__376096 = G__376135;
continue;
} else {
var vec__376100 = cljs.core.first.call(null,seq__376093__$1);
var k = cljs.core.nth.call(null,vec__376100,(0),null);
var v = cljs.core.nth.call(null,vec__376100,(1),null);
f.call(null,v,k);

var G__376141 = cljs.core.next.call(null,seq__376093__$1);
var G__376142 = null;
var G__376143 = (0);
var G__376144 = (0);
seq__376093 = G__376141;
chunk__376094 = G__376142;
count__376095 = G__376143;
i__376096 = G__376144;
continue;
}
} else {
return null;
}
}
break;
}
});})(x376092,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x376092;
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
var args376163 = [];
var len__36260__auto___376183 = arguments.length;
var i__36261__auto___376186 = (0);
while(true){
if((i__36261__auto___376186 < len__36260__auto___376183)){
args376163.push((arguments[i__36261__auto___376186]));

var G__376188 = (i__36261__auto___376186 + (1));
i__36261__auto___376186 = G__376188;
continue;
} else {
}
break;
}

var G__376166 = args376163.length;
switch (G__376166) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376163.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit376172 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit376172 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta376173){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta376173 = meta376173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit376172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_376174,meta376173__$1){
var self__ = this;
var _376174__$1 = this;
return (new cognitect.transit.t_cognitect$transit376172(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta376173__$1));
});

cognitect.transit.t_cognitect$transit376172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_376174){
var self__ = this;
var _376174__$1 = this;
return self__.meta376173;
});

cognitect.transit.t_cognitect$transit376172.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit376172.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit376172.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit376172.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit376172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta376173","meta376173",-304898800,null)], null);
});

cognitect.transit.t_cognitect$transit376172.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit376172.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit376172";

cognitect.transit.t_cognitect$transit376172.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cognitect.transit/t_cognitect$transit376172");
});

cognitect.transit.__GT_t_cognitect$transit376172 = (function cognitect$transit$__GT_t_cognitect$transit376172(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta376173){
return (new cognitect.transit.t_cognitect$transit376172(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta376173));
});

}

return (new cognitect.transit.t_cognitect$transit376172(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__35191__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
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
