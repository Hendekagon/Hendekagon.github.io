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
var seq__131647_131656 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__131648_131657 = null;
var count__131649_131658 = (0);
var i__131650_131659 = (0);
while(true){
if((i__131650_131659 < count__131649_131658)){
var k_131662 = cljs.core._nth.call(null,chunk__131648_131657,i__131650_131659);
var v_131663 = (b[k_131662]);
(a[k_131662] = v_131663);

var G__131667 = seq__131647_131656;
var G__131668 = chunk__131648_131657;
var G__131669 = count__131649_131658;
var G__131670 = (i__131650_131659 + (1));
seq__131647_131656 = G__131667;
chunk__131648_131657 = G__131668;
count__131649_131658 = G__131669;
i__131650_131659 = G__131670;
continue;
} else {
var temp__4657__auto___131673 = cljs.core.seq.call(null,seq__131647_131656);
if(temp__4657__auto___131673){
var seq__131647_131674__$1 = temp__4657__auto___131673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131647_131674__$1)){
var c__36236__auto___131675 = cljs.core.chunk_first.call(null,seq__131647_131674__$1);
var G__131676 = cljs.core.chunk_rest.call(null,seq__131647_131674__$1);
var G__131677 = c__36236__auto___131675;
var G__131678 = cljs.core.count.call(null,c__36236__auto___131675);
var G__131679 = (0);
seq__131647_131656 = G__131676;
chunk__131648_131657 = G__131677;
count__131649_131658 = G__131678;
i__131650_131659 = G__131679;
continue;
} else {
var k_131680 = cljs.core.first.call(null,seq__131647_131674__$1);
var v_131681 = (b[k_131680]);
(a[k_131680] = v_131681);

var G__131682 = cljs.core.next.call(null,seq__131647_131674__$1);
var G__131683 = null;
var G__131684 = (0);
var G__131685 = (0);
seq__131647_131656 = G__131682;
chunk__131648_131657 = G__131683;
count__131649_131658 = G__131684;
i__131650_131659 = G__131685;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cognitect.transit/VectorBuilder");
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
var args131699 = [];
var len__36494__auto___131724 = arguments.length;
var i__36495__auto___131725 = (0);
while(true){
if((i__36495__auto___131725 < len__36494__auto___131724)){
args131699.push((arguments[i__36495__auto___131725]));

var G__131726 = (i__36495__auto___131725 + (1));
i__36495__auto___131725 = G__131726;
continue;
} else {
}
break;
}

var G__131701 = args131699.length;
switch (G__131701) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args131699.length)].join('')));

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
var G__131738 = (i + (2));
var G__131739 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__131738;
ret = G__131739;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cognitect.transit/SymbolHandler");
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
var seq__131773_131785 = cljs.core.seq.call(null,v);
var chunk__131774_131786 = null;
var count__131775_131787 = (0);
var i__131776_131788 = (0);
while(true){
if((i__131776_131788 < count__131775_131787)){
var x_131789 = cljs.core._nth.call(null,chunk__131774_131786,i__131776_131788);
ret.push(x_131789);

var G__131792 = seq__131773_131785;
var G__131793 = chunk__131774_131786;
var G__131794 = count__131775_131787;
var G__131795 = (i__131776_131788 + (1));
seq__131773_131785 = G__131792;
chunk__131774_131786 = G__131793;
count__131775_131787 = G__131794;
i__131776_131788 = G__131795;
continue;
} else {
var temp__4657__auto___131798 = cljs.core.seq.call(null,seq__131773_131785);
if(temp__4657__auto___131798){
var seq__131773_131799__$1 = temp__4657__auto___131798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131773_131799__$1)){
var c__36236__auto___131800 = cljs.core.chunk_first.call(null,seq__131773_131799__$1);
var G__131801 = cljs.core.chunk_rest.call(null,seq__131773_131799__$1);
var G__131802 = c__36236__auto___131800;
var G__131803 = cljs.core.count.call(null,c__36236__auto___131800);
var G__131804 = (0);
seq__131773_131785 = G__131801;
chunk__131774_131786 = G__131802;
count__131775_131787 = G__131803;
i__131776_131788 = G__131804;
continue;
} else {
var x_131805 = cljs.core.first.call(null,seq__131773_131799__$1);
ret.push(x_131805);

var G__131806 = cljs.core.next.call(null,seq__131773_131799__$1);
var G__131807 = null;
var G__131808 = (0);
var G__131809 = (0);
seq__131773_131785 = G__131806;
chunk__131774_131786 = G__131807;
count__131775_131787 = G__131808;
i__131776_131788 = G__131809;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cognitect.transit/MapHandler");
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
var seq__131833_131842 = cljs.core.seq.call(null,v);
var chunk__131834_131843 = null;
var count__131835_131844 = (0);
var i__131836_131845 = (0);
while(true){
if((i__131836_131845 < count__131835_131844)){
var x_131850 = cljs.core._nth.call(null,chunk__131834_131843,i__131836_131845);
ret.push(x_131850);

var G__131852 = seq__131833_131842;
var G__131853 = chunk__131834_131843;
var G__131854 = count__131835_131844;
var G__131855 = (i__131836_131845 + (1));
seq__131833_131842 = G__131852;
chunk__131834_131843 = G__131853;
count__131835_131844 = G__131854;
i__131836_131845 = G__131855;
continue;
} else {
var temp__4657__auto___131857 = cljs.core.seq.call(null,seq__131833_131842);
if(temp__4657__auto___131857){
var seq__131833_131858__$1 = temp__4657__auto___131857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131833_131858__$1)){
var c__36236__auto___131859 = cljs.core.chunk_first.call(null,seq__131833_131858__$1);
var G__131860 = cljs.core.chunk_rest.call(null,seq__131833_131858__$1);
var G__131861 = c__36236__auto___131859;
var G__131862 = cljs.core.count.call(null,c__36236__auto___131859);
var G__131863 = (0);
seq__131833_131842 = G__131860;
chunk__131834_131843 = G__131861;
count__131835_131844 = G__131862;
i__131836_131845 = G__131863;
continue;
} else {
var x_131864 = cljs.core.first.call(null,seq__131833_131858__$1);
ret.push(x_131864);

var G__131865 = cljs.core.next.call(null,seq__131833_131858__$1);
var G__131866 = null;
var G__131867 = (0);
var G__131868 = (0);
seq__131833_131842 = G__131865;
chunk__131834_131843 = G__131866;
count__131835_131844 = G__131867;
i__131836_131845 = G__131868;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cognitect.transit/SetHandler");
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
var seq__131874_131880 = cljs.core.seq.call(null,v);
var chunk__131875_131881 = null;
var count__131876_131882 = (0);
var i__131877_131883 = (0);
while(true){
if((i__131877_131883 < count__131876_131882)){
var x_131884 = cljs.core._nth.call(null,chunk__131875_131881,i__131877_131883);
ret.push(x_131884);

var G__131885 = seq__131874_131880;
var G__131886 = chunk__131875_131881;
var G__131887 = count__131876_131882;
var G__131888 = (i__131877_131883 + (1));
seq__131874_131880 = G__131885;
chunk__131875_131881 = G__131886;
count__131876_131882 = G__131887;
i__131877_131883 = G__131888;
continue;
} else {
var temp__4657__auto___131892 = cljs.core.seq.call(null,seq__131874_131880);
if(temp__4657__auto___131892){
var seq__131874_131894__$1 = temp__4657__auto___131892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131874_131894__$1)){
var c__36236__auto___131934 = cljs.core.chunk_first.call(null,seq__131874_131894__$1);
var G__131936 = cljs.core.chunk_rest.call(null,seq__131874_131894__$1);
var G__131937 = c__36236__auto___131934;
var G__131938 = cljs.core.count.call(null,c__36236__auto___131934);
var G__131939 = (0);
seq__131874_131880 = G__131936;
chunk__131875_131881 = G__131937;
count__131876_131882 = G__131938;
i__131877_131883 = G__131939;
continue;
} else {
var x_131945 = cljs.core.first.call(null,seq__131874_131894__$1);
ret.push(x_131945);

var G__131946 = cljs.core.next.call(null,seq__131874_131894__$1);
var G__131947 = null;
var G__131948 = (0);
var G__131949 = (0);
seq__131874_131880 = G__131946;
chunk__131875_131881 = G__131947;
count__131876_131882 = G__131948;
i__131877_131883 = G__131949;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cognitect.transit/UUIDHandler");
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
var args131958 = [];
var len__36494__auto___132017 = arguments.length;
var i__36495__auto___132020 = (0);
while(true){
if((i__36495__auto___132020 < len__36494__auto___132017)){
args131958.push((arguments[i__36495__auto___132020]));

var G__132022 = (i__36495__auto___132020 + (1));
i__36495__auto___132020 = G__132022;
continue;
} else {
}
break;
}

var G__131960 = args131958.length;
switch (G__131960) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args131958.length)].join('')));

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
var G__131961 = obj;
G__131961.push(kfn.call(null,k),vfn.call(null,v));

return G__131961;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x131964 = cljs.core.clone.call(null,handlers);
x131964.forEach = ((function (x131964,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__131969 = cljs.core.seq.call(null,coll);
var chunk__131970 = null;
var count__131971 = (0);
var i__131972 = (0);
while(true){
if((i__131972 < count__131971)){
var vec__131973 = cljs.core._nth.call(null,chunk__131970,i__131972);
var k = cljs.core.nth.call(null,vec__131973,(0),null);
var v = cljs.core.nth.call(null,vec__131973,(1),null);
f.call(null,v,k);

var G__132084 = seq__131969;
var G__132085 = chunk__131970;
var G__132086 = count__131971;
var G__132087 = (i__131972 + (1));
seq__131969 = G__132084;
chunk__131970 = G__132085;
count__131971 = G__132086;
i__131972 = G__132087;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__131969);
if(temp__4657__auto__){
var seq__131969__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131969__$1)){
var c__36236__auto__ = cljs.core.chunk_first.call(null,seq__131969__$1);
var G__132088 = cljs.core.chunk_rest.call(null,seq__131969__$1);
var G__132089 = c__36236__auto__;
var G__132090 = cljs.core.count.call(null,c__36236__auto__);
var G__132091 = (0);
seq__131969 = G__132088;
chunk__131970 = G__132089;
count__131971 = G__132090;
i__131972 = G__132091;
continue;
} else {
var vec__132014 = cljs.core.first.call(null,seq__131969__$1);
var k = cljs.core.nth.call(null,vec__132014,(0),null);
var v = cljs.core.nth.call(null,vec__132014,(1),null);
f.call(null,v,k);

var G__132117 = cljs.core.next.call(null,seq__131969__$1);
var G__132118 = null;
var G__132119 = (0);
var G__132120 = (0);
seq__131969 = G__132117;
chunk__131970 = G__132118;
count__131971 = G__132119;
i__131972 = G__132120;
continue;
}
} else {
return null;
}
}
break;
}
});})(x131964,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x131964;
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
var args132130 = [];
var len__36494__auto___132162 = arguments.length;
var i__36495__auto___132163 = (0);
while(true){
if((i__36495__auto___132163 < len__36494__auto___132162)){
args132130.push((arguments[i__36495__auto___132163]));

var G__132166 = (i__36495__auto___132163 + (1));
i__36495__auto___132163 = G__132166;
continue;
} else {
}
break;
}

var G__132136 = args132130.length;
switch (G__132136) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args132130.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit132145 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit132145 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta132146){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta132146 = meta132146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit132145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_132147,meta132146__$1){
var self__ = this;
var _132147__$1 = this;
return (new cognitect.transit.t_cognitect$transit132145(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta132146__$1));
});

cognitect.transit.t_cognitect$transit132145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_132147){
var self__ = this;
var _132147__$1 = this;
return self__.meta132146;
});

cognitect.transit.t_cognitect$transit132145.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit132145.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit132145.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit132145.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit132145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta132146","meta132146",922337612,null)], null);
});

cognitect.transit.t_cognitect$transit132145.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit132145.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit132145";

cognitect.transit.t_cognitect$transit132145.cljs$lang$ctorPrWriter = (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cognitect.transit/t_cognitect$transit132145");
});

cognitect.transit.__GT_t_cognitect$transit132145 = (function cognitect$transit$__GT_t_cognitect$transit132145(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta132146){
return (new cognitect.transit.t_cognitect$transit132145(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta132146));
});

}

return (new cognitect.transit.t_cognitect$transit132145(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__35425__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
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
