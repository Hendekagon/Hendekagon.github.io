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
var seq__655764_655768 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__655765_655769 = null;
var count__655766_655770 = (0);
var i__655767_655771 = (0);
while(true){
if((i__655767_655771 < count__655766_655770)){
var k_655772 = cljs.core._nth.call(null,chunk__655765_655769,i__655767_655771);
var v_655773 = (b[k_655772]);
(a[k_655772] = v_655773);

var G__655774 = seq__655764_655768;
var G__655775 = chunk__655765_655769;
var G__655776 = count__655766_655770;
var G__655777 = (i__655767_655771 + (1));
seq__655764_655768 = G__655774;
chunk__655765_655769 = G__655775;
count__655766_655770 = G__655776;
i__655767_655771 = G__655777;
continue;
} else {
var temp__4425__auto___655778 = cljs.core.seq.call(null,seq__655764_655768);
if(temp__4425__auto___655778){
var seq__655764_655779__$1 = temp__4425__auto___655778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__655764_655779__$1)){
var c__25014__auto___655780 = cljs.core.chunk_first.call(null,seq__655764_655779__$1);
var G__655781 = cljs.core.chunk_rest.call(null,seq__655764_655779__$1);
var G__655782 = c__25014__auto___655780;
var G__655783 = cljs.core.count.call(null,c__25014__auto___655780);
var G__655784 = (0);
seq__655764_655768 = G__655781;
chunk__655765_655769 = G__655782;
count__655766_655770 = G__655783;
i__655767_655771 = G__655784;
continue;
} else {
var k_655785 = cljs.core.first.call(null,seq__655764_655779__$1);
var v_655786 = (b[k_655785]);
(a[k_655785] = v_655786);

var G__655787 = cljs.core.next.call(null,seq__655764_655779__$1);
var G__655788 = null;
var G__655789 = (0);
var G__655790 = (0);
seq__655764_655768 = G__655787;
chunk__655765_655769 = G__655788;
count__655766_655770 = G__655789;
i__655767_655771 = G__655790;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cognitect.transit/VectorBuilder");
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
var args655791 = [];
var len__25269__auto___655794 = arguments.length;
var i__25270__auto___655795 = (0);
while(true){
if((i__25270__auto___655795 < len__25269__auto___655794)){
args655791.push((arguments[i__25270__auto___655795]));

var G__655796 = (i__25270__auto___655795 + (1));
i__25270__auto___655795 = G__655796;
continue;
} else {
}
break;
}

var G__655793 = args655791.length;
switch (G__655793) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args655791.length)].join('')));

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
var G__655798 = (i + (2));
var G__655799 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__655798;
ret = G__655799;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cognitect.transit/SymbolHandler");
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
var seq__655800_655804 = cljs.core.seq.call(null,v);
var chunk__655801_655805 = null;
var count__655802_655806 = (0);
var i__655803_655807 = (0);
while(true){
if((i__655803_655807 < count__655802_655806)){
var x_655808 = cljs.core._nth.call(null,chunk__655801_655805,i__655803_655807);
ret.push(x_655808);

var G__655809 = seq__655800_655804;
var G__655810 = chunk__655801_655805;
var G__655811 = count__655802_655806;
var G__655812 = (i__655803_655807 + (1));
seq__655800_655804 = G__655809;
chunk__655801_655805 = G__655810;
count__655802_655806 = G__655811;
i__655803_655807 = G__655812;
continue;
} else {
var temp__4425__auto___655813 = cljs.core.seq.call(null,seq__655800_655804);
if(temp__4425__auto___655813){
var seq__655800_655814__$1 = temp__4425__auto___655813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__655800_655814__$1)){
var c__25014__auto___655815 = cljs.core.chunk_first.call(null,seq__655800_655814__$1);
var G__655816 = cljs.core.chunk_rest.call(null,seq__655800_655814__$1);
var G__655817 = c__25014__auto___655815;
var G__655818 = cljs.core.count.call(null,c__25014__auto___655815);
var G__655819 = (0);
seq__655800_655804 = G__655816;
chunk__655801_655805 = G__655817;
count__655802_655806 = G__655818;
i__655803_655807 = G__655819;
continue;
} else {
var x_655820 = cljs.core.first.call(null,seq__655800_655814__$1);
ret.push(x_655820);

var G__655821 = cljs.core.next.call(null,seq__655800_655814__$1);
var G__655822 = null;
var G__655823 = (0);
var G__655824 = (0);
seq__655800_655804 = G__655821;
chunk__655801_655805 = G__655822;
count__655802_655806 = G__655823;
i__655803_655807 = G__655824;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cognitect.transit/MapHandler");
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
var seq__655825_655829 = cljs.core.seq.call(null,v);
var chunk__655826_655830 = null;
var count__655827_655831 = (0);
var i__655828_655832 = (0);
while(true){
if((i__655828_655832 < count__655827_655831)){
var x_655833 = cljs.core._nth.call(null,chunk__655826_655830,i__655828_655832);
ret.push(x_655833);

var G__655834 = seq__655825_655829;
var G__655835 = chunk__655826_655830;
var G__655836 = count__655827_655831;
var G__655837 = (i__655828_655832 + (1));
seq__655825_655829 = G__655834;
chunk__655826_655830 = G__655835;
count__655827_655831 = G__655836;
i__655828_655832 = G__655837;
continue;
} else {
var temp__4425__auto___655838 = cljs.core.seq.call(null,seq__655825_655829);
if(temp__4425__auto___655838){
var seq__655825_655839__$1 = temp__4425__auto___655838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__655825_655839__$1)){
var c__25014__auto___655840 = cljs.core.chunk_first.call(null,seq__655825_655839__$1);
var G__655841 = cljs.core.chunk_rest.call(null,seq__655825_655839__$1);
var G__655842 = c__25014__auto___655840;
var G__655843 = cljs.core.count.call(null,c__25014__auto___655840);
var G__655844 = (0);
seq__655825_655829 = G__655841;
chunk__655826_655830 = G__655842;
count__655827_655831 = G__655843;
i__655828_655832 = G__655844;
continue;
} else {
var x_655845 = cljs.core.first.call(null,seq__655825_655839__$1);
ret.push(x_655845);

var G__655846 = cljs.core.next.call(null,seq__655825_655839__$1);
var G__655847 = null;
var G__655848 = (0);
var G__655849 = (0);
seq__655825_655829 = G__655846;
chunk__655826_655830 = G__655847;
count__655827_655831 = G__655848;
i__655828_655832 = G__655849;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cognitect.transit/SetHandler");
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
var seq__655850_655854 = cljs.core.seq.call(null,v);
var chunk__655851_655855 = null;
var count__655852_655856 = (0);
var i__655853_655857 = (0);
while(true){
if((i__655853_655857 < count__655852_655856)){
var x_655858 = cljs.core._nth.call(null,chunk__655851_655855,i__655853_655857);
ret.push(x_655858);

var G__655859 = seq__655850_655854;
var G__655860 = chunk__655851_655855;
var G__655861 = count__655852_655856;
var G__655862 = (i__655853_655857 + (1));
seq__655850_655854 = G__655859;
chunk__655851_655855 = G__655860;
count__655852_655856 = G__655861;
i__655853_655857 = G__655862;
continue;
} else {
var temp__4425__auto___655863 = cljs.core.seq.call(null,seq__655850_655854);
if(temp__4425__auto___655863){
var seq__655850_655864__$1 = temp__4425__auto___655863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__655850_655864__$1)){
var c__25014__auto___655865 = cljs.core.chunk_first.call(null,seq__655850_655864__$1);
var G__655866 = cljs.core.chunk_rest.call(null,seq__655850_655864__$1);
var G__655867 = c__25014__auto___655865;
var G__655868 = cljs.core.count.call(null,c__25014__auto___655865);
var G__655869 = (0);
seq__655850_655854 = G__655866;
chunk__655851_655855 = G__655867;
count__655852_655856 = G__655868;
i__655853_655857 = G__655869;
continue;
} else {
var x_655870 = cljs.core.first.call(null,seq__655850_655864__$1);
ret.push(x_655870);

var G__655871 = cljs.core.next.call(null,seq__655850_655864__$1);
var G__655872 = null;
var G__655873 = (0);
var G__655874 = (0);
seq__655850_655854 = G__655871;
chunk__655851_655855 = G__655872;
count__655852_655856 = G__655873;
i__655853_655857 = G__655874;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cognitect.transit/UUIDHandler");
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
var args655875 = [];
var len__25269__auto___655886 = arguments.length;
var i__25270__auto___655887 = (0);
while(true){
if((i__25270__auto___655887 < len__25269__auto___655886)){
args655875.push((arguments[i__25270__auto___655887]));

var G__655888 = (i__25270__auto___655887 + (1));
i__25270__auto___655887 = G__655888;
continue;
} else {
}
break;
}

var G__655877 = args655875.length;
switch (G__655877) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args655875.length)].join('')));

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
var G__655878 = obj;
G__655878.push(kfn.call(null,k),vfn.call(null,v));

return G__655878;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x655879 = cljs.core.clone.call(null,handlers);
x655879.forEach = ((function (x655879,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__655880 = cljs.core.seq.call(null,coll);
var chunk__655881 = null;
var count__655882 = (0);
var i__655883 = (0);
while(true){
if((i__655883 < count__655882)){
var vec__655884 = cljs.core._nth.call(null,chunk__655881,i__655883);
var k = cljs.core.nth.call(null,vec__655884,(0),null);
var v = cljs.core.nth.call(null,vec__655884,(1),null);
f.call(null,v,k);

var G__655890 = seq__655880;
var G__655891 = chunk__655881;
var G__655892 = count__655882;
var G__655893 = (i__655883 + (1));
seq__655880 = G__655890;
chunk__655881 = G__655891;
count__655882 = G__655892;
i__655883 = G__655893;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__655880);
if(temp__4425__auto__){
var seq__655880__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__655880__$1)){
var c__25014__auto__ = cljs.core.chunk_first.call(null,seq__655880__$1);
var G__655894 = cljs.core.chunk_rest.call(null,seq__655880__$1);
var G__655895 = c__25014__auto__;
var G__655896 = cljs.core.count.call(null,c__25014__auto__);
var G__655897 = (0);
seq__655880 = G__655894;
chunk__655881 = G__655895;
count__655882 = G__655896;
i__655883 = G__655897;
continue;
} else {
var vec__655885 = cljs.core.first.call(null,seq__655880__$1);
var k = cljs.core.nth.call(null,vec__655885,(0),null);
var v = cljs.core.nth.call(null,vec__655885,(1),null);
f.call(null,v,k);

var G__655898 = cljs.core.next.call(null,seq__655880__$1);
var G__655899 = null;
var G__655900 = (0);
var G__655901 = (0);
seq__655880 = G__655898;
chunk__655881 = G__655899;
count__655882 = G__655900;
i__655883 = G__655901;
continue;
}
} else {
return null;
}
}
break;
}
});})(x655879,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x655879;
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
var args655902 = [];
var len__25269__auto___655908 = arguments.length;
var i__25270__auto___655909 = (0);
while(true){
if((i__25270__auto___655909 < len__25269__auto___655908)){
args655902.push((arguments[i__25270__auto___655909]));

var G__655910 = (i__25270__auto___655909 + (1));
i__25270__auto___655909 = G__655910;
continue;
} else {
}
break;
}

var G__655904 = args655902.length;
switch (G__655904) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args655902.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit655905 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit655905 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta655906){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta655906 = meta655906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit655905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_655907,meta655906__$1){
var self__ = this;
var _655907__$1 = this;
return (new cognitect.transit.t_cognitect$transit655905(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta655906__$1));
});

cognitect.transit.t_cognitect$transit655905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_655907){
var self__ = this;
var _655907__$1 = this;
return self__.meta655906;
});

cognitect.transit.t_cognitect$transit655905.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit655905.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit655905.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit655905.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit655905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta655906","meta655906",-521945609,null)], null);
});

cognitect.transit.t_cognitect$transit655905.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit655905.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit655905";

cognitect.transit.t_cognitect$transit655905.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cognitect.transit/t_cognitect$transit655905");
});

cognitect.transit.__GT_t_cognitect$transit655905 = (function cognitect$transit$__GT_t_cognitect$transit655905(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta655906){
return (new cognitect.transit.t_cognitect$transit655905(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta655906));
});

}

return (new cognitect.transit.t_cognitect$transit655905(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__24211__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
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