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
var seq__207457_207461 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__207458_207462 = null;
var count__207459_207463 = (0);
var i__207460_207464 = (0);
while(true){
if((i__207460_207464 < count__207459_207463)){
var k_207465 = cljs.core._nth.call(null,chunk__207458_207462,i__207460_207464);
var v_207466 = (b[k_207465]);
(a[k_207465] = v_207466);

var G__207467 = seq__207457_207461;
var G__207468 = chunk__207458_207462;
var G__207469 = count__207459_207463;
var G__207470 = (i__207460_207464 + (1));
seq__207457_207461 = G__207467;
chunk__207458_207462 = G__207468;
count__207459_207463 = G__207469;
i__207460_207464 = G__207470;
continue;
} else {
var temp__4425__auto___207471 = cljs.core.seq.call(null,seq__207457_207461);
if(temp__4425__auto___207471){
var seq__207457_207472__$1 = temp__4425__auto___207471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__207457_207472__$1)){
var c__25024__auto___207473 = cljs.core.chunk_first.call(null,seq__207457_207472__$1);
var G__207474 = cljs.core.chunk_rest.call(null,seq__207457_207472__$1);
var G__207475 = c__25024__auto___207473;
var G__207476 = cljs.core.count.call(null,c__25024__auto___207473);
var G__207477 = (0);
seq__207457_207461 = G__207474;
chunk__207458_207462 = G__207475;
count__207459_207463 = G__207476;
i__207460_207464 = G__207477;
continue;
} else {
var k_207478 = cljs.core.first.call(null,seq__207457_207472__$1);
var v_207479 = (b[k_207478]);
(a[k_207478] = v_207479);

var G__207480 = cljs.core.next.call(null,seq__207457_207472__$1);
var G__207481 = null;
var G__207482 = (0);
var G__207483 = (0);
seq__207457_207461 = G__207480;
chunk__207458_207462 = G__207481;
count__207459_207463 = G__207482;
i__207460_207464 = G__207483;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cognitect.transit/VectorBuilder");
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
var args207484 = [];
var len__25279__auto___207487 = arguments.length;
var i__25280__auto___207488 = (0);
while(true){
if((i__25280__auto___207488 < len__25279__auto___207487)){
args207484.push((arguments[i__25280__auto___207488]));

var G__207489 = (i__25280__auto___207488 + (1));
i__25280__auto___207488 = G__207489;
continue;
} else {
}
break;
}

var G__207486 = args207484.length;
switch (G__207486) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args207484.length)].join('')));

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
var G__207491 = (i + (2));
var G__207492 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__207491;
ret = G__207492;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cognitect.transit/SymbolHandler");
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
var seq__207493_207497 = cljs.core.seq.call(null,v);
var chunk__207494_207498 = null;
var count__207495_207499 = (0);
var i__207496_207500 = (0);
while(true){
if((i__207496_207500 < count__207495_207499)){
var x_207501 = cljs.core._nth.call(null,chunk__207494_207498,i__207496_207500);
ret.push(x_207501);

var G__207502 = seq__207493_207497;
var G__207503 = chunk__207494_207498;
var G__207504 = count__207495_207499;
var G__207505 = (i__207496_207500 + (1));
seq__207493_207497 = G__207502;
chunk__207494_207498 = G__207503;
count__207495_207499 = G__207504;
i__207496_207500 = G__207505;
continue;
} else {
var temp__4425__auto___207506 = cljs.core.seq.call(null,seq__207493_207497);
if(temp__4425__auto___207506){
var seq__207493_207507__$1 = temp__4425__auto___207506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__207493_207507__$1)){
var c__25024__auto___207508 = cljs.core.chunk_first.call(null,seq__207493_207507__$1);
var G__207509 = cljs.core.chunk_rest.call(null,seq__207493_207507__$1);
var G__207510 = c__25024__auto___207508;
var G__207511 = cljs.core.count.call(null,c__25024__auto___207508);
var G__207512 = (0);
seq__207493_207497 = G__207509;
chunk__207494_207498 = G__207510;
count__207495_207499 = G__207511;
i__207496_207500 = G__207512;
continue;
} else {
var x_207513 = cljs.core.first.call(null,seq__207493_207507__$1);
ret.push(x_207513);

var G__207514 = cljs.core.next.call(null,seq__207493_207507__$1);
var G__207515 = null;
var G__207516 = (0);
var G__207517 = (0);
seq__207493_207497 = G__207514;
chunk__207494_207498 = G__207515;
count__207495_207499 = G__207516;
i__207496_207500 = G__207517;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cognitect.transit/MapHandler");
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
var seq__207518_207522 = cljs.core.seq.call(null,v);
var chunk__207519_207523 = null;
var count__207520_207524 = (0);
var i__207521_207525 = (0);
while(true){
if((i__207521_207525 < count__207520_207524)){
var x_207526 = cljs.core._nth.call(null,chunk__207519_207523,i__207521_207525);
ret.push(x_207526);

var G__207527 = seq__207518_207522;
var G__207528 = chunk__207519_207523;
var G__207529 = count__207520_207524;
var G__207530 = (i__207521_207525 + (1));
seq__207518_207522 = G__207527;
chunk__207519_207523 = G__207528;
count__207520_207524 = G__207529;
i__207521_207525 = G__207530;
continue;
} else {
var temp__4425__auto___207531 = cljs.core.seq.call(null,seq__207518_207522);
if(temp__4425__auto___207531){
var seq__207518_207532__$1 = temp__4425__auto___207531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__207518_207532__$1)){
var c__25024__auto___207533 = cljs.core.chunk_first.call(null,seq__207518_207532__$1);
var G__207534 = cljs.core.chunk_rest.call(null,seq__207518_207532__$1);
var G__207535 = c__25024__auto___207533;
var G__207536 = cljs.core.count.call(null,c__25024__auto___207533);
var G__207537 = (0);
seq__207518_207522 = G__207534;
chunk__207519_207523 = G__207535;
count__207520_207524 = G__207536;
i__207521_207525 = G__207537;
continue;
} else {
var x_207538 = cljs.core.first.call(null,seq__207518_207532__$1);
ret.push(x_207538);

var G__207539 = cljs.core.next.call(null,seq__207518_207532__$1);
var G__207540 = null;
var G__207541 = (0);
var G__207542 = (0);
seq__207518_207522 = G__207539;
chunk__207519_207523 = G__207540;
count__207520_207524 = G__207541;
i__207521_207525 = G__207542;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cognitect.transit/SetHandler");
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
var seq__207543_207547 = cljs.core.seq.call(null,v);
var chunk__207544_207548 = null;
var count__207545_207549 = (0);
var i__207546_207550 = (0);
while(true){
if((i__207546_207550 < count__207545_207549)){
var x_207551 = cljs.core._nth.call(null,chunk__207544_207548,i__207546_207550);
ret.push(x_207551);

var G__207552 = seq__207543_207547;
var G__207553 = chunk__207544_207548;
var G__207554 = count__207545_207549;
var G__207555 = (i__207546_207550 + (1));
seq__207543_207547 = G__207552;
chunk__207544_207548 = G__207553;
count__207545_207549 = G__207554;
i__207546_207550 = G__207555;
continue;
} else {
var temp__4425__auto___207556 = cljs.core.seq.call(null,seq__207543_207547);
if(temp__4425__auto___207556){
var seq__207543_207557__$1 = temp__4425__auto___207556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__207543_207557__$1)){
var c__25024__auto___207558 = cljs.core.chunk_first.call(null,seq__207543_207557__$1);
var G__207559 = cljs.core.chunk_rest.call(null,seq__207543_207557__$1);
var G__207560 = c__25024__auto___207558;
var G__207561 = cljs.core.count.call(null,c__25024__auto___207558);
var G__207562 = (0);
seq__207543_207547 = G__207559;
chunk__207544_207548 = G__207560;
count__207545_207549 = G__207561;
i__207546_207550 = G__207562;
continue;
} else {
var x_207563 = cljs.core.first.call(null,seq__207543_207557__$1);
ret.push(x_207563);

var G__207564 = cljs.core.next.call(null,seq__207543_207557__$1);
var G__207565 = null;
var G__207566 = (0);
var G__207567 = (0);
seq__207543_207547 = G__207564;
chunk__207544_207548 = G__207565;
count__207545_207549 = G__207566;
i__207546_207550 = G__207567;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cognitect.transit/UUIDHandler");
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
var args207568 = [];
var len__25279__auto___207579 = arguments.length;
var i__25280__auto___207580 = (0);
while(true){
if((i__25280__auto___207580 < len__25279__auto___207579)){
args207568.push((arguments[i__25280__auto___207580]));

var G__207581 = (i__25280__auto___207580 + (1));
i__25280__auto___207580 = G__207581;
continue;
} else {
}
break;
}

var G__207570 = args207568.length;
switch (G__207570) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args207568.length)].join('')));

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
var G__207571 = obj;
G__207571.push(kfn.call(null,k),vfn.call(null,v));

return G__207571;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x207572 = cljs.core.clone.call(null,handlers);
x207572.forEach = ((function (x207572,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__207573 = cljs.core.seq.call(null,coll);
var chunk__207574 = null;
var count__207575 = (0);
var i__207576 = (0);
while(true){
if((i__207576 < count__207575)){
var vec__207577 = cljs.core._nth.call(null,chunk__207574,i__207576);
var k = cljs.core.nth.call(null,vec__207577,(0),null);
var v = cljs.core.nth.call(null,vec__207577,(1),null);
f.call(null,v,k);

var G__207583 = seq__207573;
var G__207584 = chunk__207574;
var G__207585 = count__207575;
var G__207586 = (i__207576 + (1));
seq__207573 = G__207583;
chunk__207574 = G__207584;
count__207575 = G__207585;
i__207576 = G__207586;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__207573);
if(temp__4425__auto__){
var seq__207573__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__207573__$1)){
var c__25024__auto__ = cljs.core.chunk_first.call(null,seq__207573__$1);
var G__207587 = cljs.core.chunk_rest.call(null,seq__207573__$1);
var G__207588 = c__25024__auto__;
var G__207589 = cljs.core.count.call(null,c__25024__auto__);
var G__207590 = (0);
seq__207573 = G__207587;
chunk__207574 = G__207588;
count__207575 = G__207589;
i__207576 = G__207590;
continue;
} else {
var vec__207578 = cljs.core.first.call(null,seq__207573__$1);
var k = cljs.core.nth.call(null,vec__207578,(0),null);
var v = cljs.core.nth.call(null,vec__207578,(1),null);
f.call(null,v,k);

var G__207591 = cljs.core.next.call(null,seq__207573__$1);
var G__207592 = null;
var G__207593 = (0);
var G__207594 = (0);
seq__207573 = G__207591;
chunk__207574 = G__207592;
count__207575 = G__207593;
i__207576 = G__207594;
continue;
}
} else {
return null;
}
}
break;
}
});})(x207572,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x207572;
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
var args207595 = [];
var len__25279__auto___207601 = arguments.length;
var i__25280__auto___207602 = (0);
while(true){
if((i__25280__auto___207602 < len__25279__auto___207601)){
args207595.push((arguments[i__25280__auto___207602]));

var G__207603 = (i__25280__auto___207602 + (1));
i__25280__auto___207602 = G__207603;
continue;
} else {
}
break;
}

var G__207597 = args207595.length;
switch (G__207597) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args207595.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit207598 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit207598 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta207599){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta207599 = meta207599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit207598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_207600,meta207599__$1){
var self__ = this;
var _207600__$1 = this;
return (new cognitect.transit.t_cognitect$transit207598(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta207599__$1));
});

cognitect.transit.t_cognitect$transit207598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_207600){
var self__ = this;
var _207600__$1 = this;
return self__.meta207599;
});

cognitect.transit.t_cognitect$transit207598.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit207598.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit207598.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit207598.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit207598.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta207599","meta207599",-75090660,null)], null);
});

cognitect.transit.t_cognitect$transit207598.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit207598.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit207598";

cognitect.transit.t_cognitect$transit207598.cljs$lang$ctorPrWriter = (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cognitect.transit/t_cognitect$transit207598");
});

cognitect.transit.__GT_t_cognitect$transit207598 = (function cognitect$transit$__GT_t_cognitect$transit207598(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta207599){
return (new cognitect.transit.t_cognitect$transit207598(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta207599));
});

}

return (new cognitect.transit.t_cognitect$transit207598(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__24221__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
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