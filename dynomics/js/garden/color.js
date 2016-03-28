// Compiled by ClojureScript 1.8.34 {}
goog.provide('garden.color');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('garden.util');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
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
garden.color.CSSColor = (function (red,green,blue,hue,saturation,lightness,alpha,__meta,__extmap,__hash){
this.red = red;
this.green = green;
this.blue = blue;
this.hue = hue;
this.saturation = saturation;
this.lightness = lightness;
this.alpha = alpha;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35813__auto__,k__35814__auto__){
var self__ = this;
var this__35813__auto____$1 = this;
return cljs.core._lookup.call(null,this__35813__auto____$1,k__35814__auto__,null);
});

garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35815__auto__,k449189,else__35816__auto__){
var self__ = this;
var this__35815__auto____$1 = this;
var G__449198 = (((k449189 instanceof cljs.core.Keyword))?k449189.fqn:null);
switch (G__449198) {
case "red":
return self__.red;

break;
case "green":
return self__.green;

break;
case "blue":
return self__.blue;

break;
case "hue":
return self__.hue;

break;
case "saturation":
return self__.saturation;

break;
case "lightness":
return self__.lightness;

break;
case "alpha":
return self__.alpha;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k449189,else__35816__auto__);

}
});

garden.color.CSSColor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35827__auto__,writer__35828__auto__,opts__35829__auto__){
var self__ = this;
var this__35827__auto____$1 = this;
var pr_pair__35830__auto__ = ((function (this__35827__auto____$1){
return (function (keyval__35831__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,cljs.core.pr_writer,""," ","",opts__35829__auto__,keyval__35831__auto__);
});})(this__35827__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35828__auto__,pr_pair__35830__auto__,"#garden.color.CSSColor{",", ","}",opts__35829__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"red","red",-969428204),self__.red],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"green","green",-945526839),self__.green],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blue","blue",-622100620),self__.blue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hue","hue",-508078848),self__.hue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"saturation","saturation",-14247929),self__.saturation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lightness","lightness",-2040901930),self__.lightness],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alpha","alpha",-1574982441),self__.alpha],null))], null),self__.__extmap));
});

garden.color.CSSColor.prototype.cljs$core$IIterable$ = true;

garden.color.CSSColor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__449188){
var self__ = this;
var G__449188__$1 = this;
return (new cljs.core.RecordIter((0),G__449188__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

garden.color.CSSColor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35811__auto__){
var self__ = this;
var this__35811__auto____$1 = this;
return self__.__meta;
});

garden.color.CSSColor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35807__auto__){
var self__ = this;
var this__35807__auto____$1 = this;
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,self__.__hash));
});

garden.color.CSSColor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35817__auto__){
var self__ = this;
var this__35817__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

garden.color.CSSColor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35808__auto__){
var self__ = this;
var this__35808__auto____$1 = this;
var h__35626__auto__ = self__.__hash;
if(!((h__35626__auto__ == null))){
return h__35626__auto__;
} else {
var h__35626__auto____$1 = cljs.core.hash_imap.call(null,this__35808__auto____$1);
self__.__hash = h__35626__auto____$1;

return h__35626__auto____$1;
}
});

garden.color.CSSColor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35809__auto__,other__35810__auto__){
var self__ = this;
var this__35809__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35179__auto__ = other__35810__auto__;
if(cljs.core.truth_(and__35179__auto__)){
var and__35179__auto____$1 = (this__35809__auto____$1.constructor === other__35810__auto__.constructor);
if(and__35179__auto____$1){
return cljs.core.equiv_map.call(null,this__35809__auto____$1,other__35810__auto__);
} else {
return and__35179__auto____$1;
}
} else {
return and__35179__auto__;
}
})())){
return true;
} else {
return false;
}
});

garden.color.CSSColor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35822__auto__,k__35823__auto__){
var self__ = this;
var this__35822__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"hue","hue",-508078848),null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),null,new cljs.core.Keyword(null,"green","green",-945526839),null,new cljs.core.Keyword(null,"red","red",-969428204),null,new cljs.core.Keyword(null,"blue","blue",-622100620),null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),null,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),null], null), null),k__35823__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35822__auto____$1),self__.__meta),k__35823__auto__);
} else {
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35823__auto__)),null));
}
});

garden.color.CSSColor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35820__auto__,k__35821__auto__,G__449188){
var self__ = this;
var this__35820__auto____$1 = this;
var pred__449211 = cljs.core.keyword_identical_QMARK_;
var expr__449212 = k__35821__auto__;
if(cljs.core.truth_(pred__449211.call(null,new cljs.core.Keyword(null,"red","red",-969428204),expr__449212))){
return (new garden.color.CSSColor(G__449188,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__449211.call(null,new cljs.core.Keyword(null,"green","green",-945526839),expr__449212))){
return (new garden.color.CSSColor(self__.red,G__449188,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__449211.call(null,new cljs.core.Keyword(null,"blue","blue",-622100620),expr__449212))){
return (new garden.color.CSSColor(self__.red,self__.green,G__449188,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__449211.call(null,new cljs.core.Keyword(null,"hue","hue",-508078848),expr__449212))){
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,G__449188,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__449211.call(null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),expr__449212))){
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,G__449188,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__449211.call(null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),expr__449212))){
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,G__449188,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__449211.call(null,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),expr__449212))){
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,G__449188,self__.__meta,self__.__extmap,null));
} else {
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35821__auto__,G__449188),null));
}
}
}
}
}
}
}
});

garden.color.CSSColor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35825__auto__){
var self__ = this;
var this__35825__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"red","red",-969428204),self__.red],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"green","green",-945526839),self__.green],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blue","blue",-622100620),self__.blue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hue","hue",-508078848),self__.hue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"saturation","saturation",-14247929),self__.saturation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lightness","lightness",-2040901930),self__.lightness],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alpha","alpha",-1574982441),self__.alpha],null))], null),self__.__extmap));
});

garden.color.CSSColor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35812__auto__,G__449188){
var self__ = this;
var this__35812__auto____$1 = this;
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,G__449188,self__.__extmap,self__.__hash));
});

garden.color.CSSColor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35818__auto__,entry__35819__auto__){
var self__ = this;
var this__35818__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35819__auto__)){
return cljs.core._assoc.call(null,this__35818__auto____$1,cljs.core._nth.call(null,entry__35819__auto__,(0)),cljs.core._nth.call(null,entry__35819__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35818__auto____$1,entry__35819__auto__);
}
});

garden.color.CSSColor.prototype.call = (function() {
var G__449257 = null;
var G__449257__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$;
});
var G__449257__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.call(null,this$,k);
});
var G__449257__3 = (function (self__,k,missing){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.call(null,this$,k,missing);
});
G__449257 = function(self__,k,missing){
switch(arguments.length){
case 1:
return G__449257__1.call(this,self__);
case 2:
return G__449257__2.call(this,self__,k);
case 3:
return G__449257__3.call(this,self__,k,missing);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__449257.cljs$core$IFn$_invoke$arity$1 = G__449257__1;
G__449257.cljs$core$IFn$_invoke$arity$2 = G__449257__2;
G__449257.cljs$core$IFn$_invoke$arity$3 = G__449257__3;
return G__449257;
})()
;

garden.color.CSSColor.prototype.apply = (function (self__,args449196){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args449196)));
});

garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return this$;
});

garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core.get.call(null,this$,k);
});

garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,missing){
var self__ = this;
var this$ = this;
return cljs.core.get.call(null,this$,k,missing);
});

garden.color.CSSColor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"red","red",671103323,null),new cljs.core.Symbol(null,"green","green",695004688,null),new cljs.core.Symbol(null,"blue","blue",1018430907,null),new cljs.core.Symbol(null,"hue","hue",1132452679,null),new cljs.core.Symbol(null,"saturation","saturation",1626283598,null),new cljs.core.Symbol(null,"lightness","lightness",-400370403,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null)], null);
});

garden.color.CSSColor.cljs$lang$type = true;

garden.color.CSSColor.cljs$lang$ctorPrSeq = (function (this__35847__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.color/CSSColor");
});

garden.color.CSSColor.cljs$lang$ctorPrWriter = (function (this__35847__auto__,writer__35848__auto__){
return cljs.core._write.call(null,writer__35848__auto__,"garden.color/CSSColor");
});

garden.color.__GT_CSSColor = (function garden$color$__GT_CSSColor(red,green,blue,hue,saturation,lightness,alpha){
return (new garden.color.CSSColor(red,green,blue,hue,saturation,lightness,alpha,null,null,null));
});

garden.color.map__GT_CSSColor = (function garden$color$map__GT_CSSColor(G__449193){
return (new garden.color.CSSColor(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(G__449193),new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(G__449193),new cljs.core.Keyword(null,"blue","blue",-622100620).cljs$core$IFn$_invoke$arity$1(G__449193),new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(G__449193),new cljs.core.Keyword(null,"saturation","saturation",-14247929).cljs$core$IFn$_invoke$arity$1(G__449193),new cljs.core.Keyword(null,"lightness","lightness",-2040901930).cljs$core$IFn$_invoke$arity$1(G__449193),new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(G__449193),null,cljs.core.dissoc.call(null,G__449193,new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)),null));
});

garden.color.as_color = garden.color.map__GT_CSSColor;
/**
 * Create an RGB color.
 */
garden.color.rgb = (function garden$color$rgb(var_args){
var args449267 = [];
var len__36260__auto___449274 = arguments.length;
var i__36261__auto___449275 = (0);
while(true){
if((i__36261__auto___449275 < len__36260__auto___449274)){
args449267.push((arguments[i__36261__auto___449275]));

var G__449276 = (i__36261__auto___449275 + (1));
i__36261__auto___449275 = G__449276;
continue;
} else {
}
break;
}

var G__449269 = args449267.length;
switch (G__449269) {
case 1:
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return garden.color.rgb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args449267.length)].join('')));

}
});

garden.color.rgb.cljs$core$IFn$_invoke$arity$1 = (function (p__449272){
var vec__449273 = p__449272;
var r = cljs.core.nth.call(null,vec__449273,(0),null);
var g = cljs.core.nth.call(null,vec__449273,(1),null);
var b = cljs.core.nth.call(null,vec__449273,(2),null);
var vs = vec__449273;
if(cljs.core.every_QMARK_.call(null,((function (vec__449273,r,g,b,vs){
return (function (p1__449266_SHARP_){
return garden.util.between_QMARK_.call(null,p1__449266_SHARP_,(0),(255));
});})(vec__449273,r,g,b,vs))
,vs)){
return garden.color.as_color.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",-969428204),r,new cljs.core.Keyword(null,"green","green",-945526839),g,new cljs.core.Keyword(null,"blue","blue",-622100620),b], null));
} else {
throw cljs.core.ex_info.call(null,"RGB values must be between 0 and 255",cljs.core.PersistentArrayMap.EMPTY);
}
});

garden.color.rgb.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});

garden.color.rgb.cljs$lang$maxFixedArity = 3;
/**
 * Create an RGBA color.
 */
garden.color.rgba = (function garden$color$rgba(var_args){
var args449287 = [];
var len__36260__auto___449297 = arguments.length;
var i__36261__auto___449298 = (0);
while(true){
if((i__36261__auto___449298 < len__36260__auto___449297)){
args449287.push((arguments[i__36261__auto___449298]));

var G__449299 = (i__36261__auto___449298 + (1));
i__36261__auto___449298 = G__449299;
continue;
} else {
}
break;
}

var G__449290 = args449287.length;
switch (G__449290) {
case 1:
return garden.color.rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return garden.color.rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args449287.length)].join('')));

}
});

garden.color.rgba.cljs$core$IFn$_invoke$arity$1 = (function (p__449291){
var vec__449292 = p__449291;
var r = cljs.core.nth.call(null,vec__449292,(0),null);
var g = cljs.core.nth.call(null,vec__449292,(1),null);
var b = cljs.core.nth.call(null,vec__449292,(2),null);
var a = cljs.core.nth.call(null,vec__449292,(3),null);
if(cljs.core.truth_(garden.util.between_QMARK_.call(null,a,(0),(1)))){
return garden.color.as_color.call(null,cljs.core.assoc.call(null,garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a));
} else {
throw cljs.core.ex_info.call(null,"Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
});

garden.color.rgba.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return garden.color.rgba.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,a], null));
});

garden.color.rgba.cljs$lang$maxFixedArity = 4;
/**
 * Create an HSL color.
 */
garden.color.hsl = (function garden$color$hsl(var_args){
var args449302 = [];
var len__36260__auto___449323 = arguments.length;
var i__36261__auto___449324 = (0);
while(true){
if((i__36261__auto___449324 < len__36260__auto___449323)){
args449302.push((arguments[i__36261__auto___449324]));

var G__449325 = (i__36261__auto___449324 + (1));
i__36261__auto___449324 = G__449325;
continue;
} else {
}
break;
}

var G__449313 = args449302.length;
switch (G__449313) {
case 1:
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return garden.color.hsl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args449302.length)].join('')));

}
});

garden.color.hsl.cljs$core$IFn$_invoke$arity$1 = (function (p__449316){
var vec__449317 = p__449316;
var h = cljs.core.nth.call(null,vec__449317,(0),null);
var s = cljs.core.nth.call(null,vec__449317,(1),null);
var l = cljs.core.nth.call(null,vec__449317,(2),null);
var vec__449318 = cljs.core.map.call(null,((function (vec__449317,h,s,l){
return (function (p1__449301_SHARP_){
return cljs.core.get.call(null,p1__449301_SHARP_,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),p1__449301_SHARP_);
});})(vec__449317,h,s,l))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
var h__$1 = cljs.core.nth.call(null,vec__449318,(0),null);
var s__$1 = cljs.core.nth.call(null,vec__449318,(1),null);
var l__$1 = cljs.core.nth.call(null,vec__449318,(2),null);
if(cljs.core.truth_((function (){var and__35179__auto__ = garden.util.between_QMARK_.call(null,s__$1,(0),(100));
if(cljs.core.truth_(and__35179__auto__)){
return garden.util.between_QMARK_.call(null,l__$1,(0),(100));
} else {
return and__35179__auto__;
}
})())){
return garden.color.as_color.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",-508078848),cljs.core.mod.call(null,h__$1,(360)),new cljs.core.Keyword(null,"saturation","saturation",-14247929),s__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),l__$1], null));
} else {
throw cljs.core.ex_info.call(null,"Saturation and lightness must be between 0(%) and 100(%)",cljs.core.PersistentArrayMap.EMPTY);
}
});

garden.color.hsl.cljs$core$IFn$_invoke$arity$3 = (function (h,s,l){
return garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

garden.color.hsl.cljs$lang$maxFixedArity = 3;
/**
 * Create an HSLA color.
 */
garden.color.hsla = (function garden$color$hsla(var_args){
var args449336 = [];
var len__36260__auto___449359 = arguments.length;
var i__36261__auto___449361 = (0);
while(true){
if((i__36261__auto___449361 < len__36260__auto___449359)){
args449336.push((arguments[i__36261__auto___449361]));

var G__449363 = (i__36261__auto___449361 + (1));
i__36261__auto___449361 = G__449363;
continue;
} else {
}
break;
}

var G__449344 = args449336.length;
switch (G__449344) {
case 1:
return garden.color.hsla.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return garden.color.hsla.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args449336.length)].join('')));

}
});

garden.color.hsla.cljs$core$IFn$_invoke$arity$1 = (function (p__449350){
var vec__449351 = p__449350;
var h = cljs.core.nth.call(null,vec__449351,(0),null);
var s = cljs.core.nth.call(null,vec__449351,(1),null);
var l = cljs.core.nth.call(null,vec__449351,(2),null);
var a = cljs.core.nth.call(null,vec__449351,(3),null);
if(cljs.core.truth_(garden.util.between_QMARK_.call(null,a,(0),(1)))){
return garden.color.as_color.call(null,cljs.core.assoc.call(null,garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a));
} else {
throw cljs.core.ex_info.call(null,"Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
});

garden.color.hsla.cljs$core$IFn$_invoke$arity$4 = (function (h,s,l,a){
return garden.color.hsla.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l,a], null));
});

garden.color.hsla.cljs$lang$maxFixedArity = 4;
/**
 * Return true if color is an RGB color.
 */
garden.color.rgb_QMARK_ = (function garden$color$rgb_QMARK_(color){
return (cljs.core.map_QMARK_.call(null,color)) && (cljs.core.every_QMARK_.call(null,color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"green","green",-945526839),null,new cljs.core.Keyword(null,"red","red",-969428204),null,new cljs.core.Keyword(null,"blue","blue",-622100620),null], null), null)));
});
/**
 * Return true if color is an HSL color.
 */
garden.color.hsl_QMARK_ = (function garden$color$hsl_QMARK_(color){
return (cljs.core.map_QMARK_.call(null,color)) && (cljs.core.every_QMARK_.call(null,color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",-508078848),null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),null], null), null)));
});
/**
 * Return true if x is a color.
 */
garden.color.color_QMARK_ = (function garden$color$color_QMARK_(x){
var or__35191__auto__ = garden.color.rgb_QMARK_.call(null,x);
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return garden.color.hsl_QMARK_.call(null,x);
}
});
/**
 * Regular expression for matching a hexadecimal color.
 *           Matches hexadecimal colors of length three or six possibly
 *           lead by a "#". The color portion is captured.
 */
garden.color.hex_re = /#?([\da-fA-F]{6}|[\da-fA-F]{3})/;
/**
 * Returns true if x is a hexadecimal color.
 */
garden.color.hex_QMARK_ = (function garden$color$hex_QMARK_(x){
return cljs.core.boolean$.call(null,(function (){var and__35179__auto__ = typeof x === 'string';
if(and__35179__auto__){
return cljs.core.re_matches.call(null,garden.color.hex_re,x);
} else {
return and__35179__auto__;
}
})());
});
/**
 * Convert a hexadecimal color to an RGB color map.
 */
garden.color.hex__GT_rgb = (function garden$color$hex__GT_rgb(s){
var temp__4657__auto__ = cljs.core.re_matches.call(null,garden.color.hex_re,s);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__449447 = temp__4657__auto__;
var _ = cljs.core.nth.call(null,vec__449447,(0),null);
var hex = cljs.core.nth.call(null,vec__449447,(1),null);
var hex__$1 = ((cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,hex)))?cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,((function (vec__449447,_,hex,temp__4657__auto__){
return (function (p1__449437_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__449437_SHARP_),p1__449437_SHARP_);
});})(vec__449447,_,hex,temp__4657__auto__))
,hex)):hex);
return garden.color.rgb.call(null,cljs.core.map.call(null,((function (hex__$1,vec__449447,_,hex,temp__4657__auto__){
return (function (p1__449438_SHARP_){
return garden.util.string__GT_int.call(null,p1__449438_SHARP_,(16));
});})(hex__$1,vec__449447,_,hex,temp__4657__auto__))
,cljs.core.re_seq.call(null,/[\da-fA-F]{2}/,hex__$1)));
} else {
return null;
}
});
/**
 * Convert an RGB color map to a hexadecimal color.
 */
garden.color.rgb__GT_hex = (function garden$color$rgb__GT_hex(p__449461){
var map__449468 = p__449461;
var map__449468__$1 = ((((!((map__449468 == null)))?((((map__449468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__449468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__449468):map__449468);
var r = cljs.core.get.call(null,map__449468__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var g = cljs.core.get.call(null,map__449468__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var b = cljs.core.get.call(null,map__449468__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
var hex_part = ((function (map__449468,map__449468__$1,r,g,b){
return (function garden$color$rgb__GT_hex_$_hex_part(v){
return clojure.string.replace.call(null,garden.util.format.call(null,"%2s",garden.util.int__GT_string.call(null,v,(16)))," ","0");
});})(map__449468,map__449468__$1,r,g,b))
;
return cljs.core.apply.call(null,cljs.core.str,"#",cljs.core.map.call(null,hex_part,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)));
});
garden.color.trim_one = (function garden$color$trim_one(x){
if(((1) < x)){
return (1);
} else {
return x;
}
});
/**
 * Convert an RGB color map to an HSL color map.
 */
garden.color.rgb__GT_hsl = (function garden$color$rgb__GT_hsl(p__449479){
var map__449493 = p__449479;
var map__449493__$1 = ((((!((map__449493 == null)))?((((map__449493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__449493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__449493):map__449493);
var color = map__449493__$1;
var red = cljs.core.get.call(null,map__449493__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var green = cljs.core.get.call(null,map__449493__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var blue = cljs.core.get.call(null,map__449493__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
if(cljs.core.truth_(garden.color.hsl_QMARK_.call(null,color))){
return color;
} else {
var vec__449499 = cljs.core.map.call(null,((function (map__449493,map__449493__$1,color,red,green,blue){
return (function (p1__449478_SHARP_){
return (p1__449478_SHARP_ / (255));
});})(map__449493,map__449493__$1,color,red,green,blue))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [red,green,blue], null));
var r = cljs.core.nth.call(null,vec__449499,(0),null);
var g = cljs.core.nth.call(null,vec__449499,(1),null);
var b = cljs.core.nth.call(null,vec__449499,(2),null);
var mx = (function (){var x__35522__auto__ = (function (){var x__35522__auto__ = r;
var y__35523__auto__ = g;
return ((x__35522__auto__ > y__35523__auto__) ? x__35522__auto__ : y__35523__auto__);
})();
var y__35523__auto__ = b;
return ((x__35522__auto__ > y__35523__auto__) ? x__35522__auto__ : y__35523__auto__);
})();
var mn = (function (){var x__35529__auto__ = (function (){var x__35529__auto__ = r;
var y__35530__auto__ = g;
return ((x__35529__auto__ < y__35530__auto__) ? x__35529__auto__ : y__35530__auto__);
})();
var y__35530__auto__ = b;
return ((x__35529__auto__ < y__35530__auto__) ? x__35529__auto__ : y__35530__auto__);
})();
var d = (mx - mn);
var h = (function (){var pred__449504 = cljs.core._EQ_;
var expr__449505 = mx;
if(cljs.core.truth_(pred__449504.call(null,mn,expr__449505))){
return (0);
} else {
if(cljs.core.truth_(pred__449504.call(null,r,expr__449505))){
return ((60) * ((g - b) / d));
} else {
if(cljs.core.truth_(pred__449504.call(null,g,expr__449505))){
return (((60) * ((b - r) / d)) + (120));
} else {
if(cljs.core.truth_(pred__449504.call(null,b,expr__449505))){
return (((60) * ((r - g) / d)) + (240));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__449505)].join('')));
}
}
}
}
})();
var l = ((mx + mn) / (2));
var s = garden.color.trim_one.call(null,((cljs.core._EQ_.call(null,mx,mn))?(0):(((l < 0.5))?(d / ((2) * l)):(d / ((2) - ((2) * l)))
)));
return garden.color.hsl.call(null,cljs.core.mod.call(null,h,(360)),((100) * s),((100) * l));
}
});
/**
 * Convert an HSL color map to an RGB color map.
 */
garden.color.hsl__GT_rgb = (function garden$color$hsl__GT_rgb(p__449532){
var map__449544 = p__449532;
var map__449544__$1 = ((((!((map__449544 == null)))?((((map__449544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__449544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__449544):map__449544);
var color = map__449544__$1;
var hue = cljs.core.get.call(null,map__449544__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.call(null,map__449544__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.call(null,map__449544__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
if(cljs.core.truth_(garden.color.rgb_QMARK_.call(null,color))){
return color;
} else {
var h = (hue / 360.0);
var s = (saturation / 100.0);
var l = (lightness / 100.0);
var m2 = (((l <= 0.5))?(l * (s + (1))):((l + s) - (l * s)));
var m1 = (((2) * l) - m2);
var vec__449547 = cljs.core.map.call(null,((function (h,s,l,m2,m1,map__449544,map__449544__$1,color,hue,saturation,lightness){
return (function (p1__449529_SHARP_){
return Math.round((p1__449529_SHARP_ * (255)));
});})(h,s,l,m2,m1,map__449544,map__449544__$1,color,hue,saturation,lightness))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.color.hue__GT_rgb.call(null,m1,m2,(h + (1.0 / (3)))),garden.color.hue__GT_rgb.call(null,m1,m2,h),garden.color.hue__GT_rgb.call(null,m1,m2,(h - (1.0 / (3))))], null));
var r = cljs.core.nth.call(null,vec__449547,(0),null);
var g = cljs.core.nth.call(null,vec__449547,(1),null);
var b = cljs.core.nth.call(null,vec__449547,(2),null);
return garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
}
});
garden.color.hue__GT_rgb = (function garden$color$hue__GT_rgb(m1,m2,h){
var h__$1 = (((h < (0)))?(h + (1)):(((h > (1)))?(h - (1)):h
));
if((((6) * h__$1) < (1))){
return (m1 + (((m2 - m1) * h__$1) * (6)));
} else {
if((((2) * h__$1) < (1))){
return m2;
} else {
if((((3) * h__$1) < (2))){
return (m1 + (((m2 - m1) * ((2.0 / (3)) - h__$1)) * (6)));
} else {
return m1;

}
}
}
});
/**
 * Convert an HSL color map to a hexadecimal string.
 */
garden.color.hsl__GT_hex = (function garden$color$hsl__GT_hex(color){
return garden.color.rgb__GT_hex.call(null,garden.color.hsl__GT_rgb.call(null,color));
});
/**
 * Convert a hexadecimal color to an HSL color.
 */
garden.color.hex__GT_hsl = (function garden$color$hex__GT_hsl(color){
return garden.color.rgb__GT_hsl.call(null,garden.color.hex__GT_rgb.call(null,color));
});
garden.color.percent_clip = cljs.core.partial.call(null,garden.util.clip,(0),(100));
garden.color.rgb_clip = cljs.core.partial.call(null,garden.util.clip,(0),(255));
/**
 * Convert a color to a hexadecimal string.
 */
garden.color.as_hex = (function garden$color$as_hex(x){
if(cljs.core.truth_(garden.color.hex_QMARK_.call(null,x))){
return x;
} else {
if(cljs.core.truth_(garden.color.rgb_QMARK_.call(null,x))){
return garden.color.rgb__GT_hex.call(null,x);
} else {
if(cljs.core.truth_(garden.color.hsl_QMARK_.call(null,x))){
return garden.color.hsl__GT_hex.call(null,x);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't convert "),cljs.core.str(x),cljs.core.str(" to a color.")].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});
/**
 * Convert a color to a RGB.
 */
garden.color.as_rgb = (function garden$color$as_rgb(x){
if(cljs.core.truth_(garden.color.rgb_QMARK_.call(null,x))){
return x;
} else {
if(cljs.core.truth_(garden.color.hsl_QMARK_.call(null,x))){
return garden.color.hsl__GT_rgb.call(null,x);
} else {
if(cljs.core.truth_(garden.color.hex_QMARK_.call(null,x))){
return garden.color.hex__GT_rgb.call(null,x);
} else {
if(typeof x === 'number'){
return garden.color.rgb.call(null,cljs.core.map.call(null,garden.color.rgb_clip,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,x], null)));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't convert "),cljs.core.str(x),cljs.core.str(" to a color.")].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
/**
 * Convert a color to a HSL.
 */
garden.color.as_hsl = (function garden$color$as_hsl(x){
if(cljs.core.truth_(garden.color.hsl_QMARK_.call(null,x))){
return x;
} else {
if(cljs.core.truth_(garden.color.rgb_QMARK_.call(null,x))){
return garden.color.rgb__GT_hsl.call(null,x);
} else {
if(cljs.core.truth_(garden.color.hex_QMARK_.call(null,x))){
return garden.color.hex__GT_hsl.call(null,x);
} else {
if(typeof x === 'number'){
return garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,garden.color.percent_clip.call(null,x),garden.color.percent_clip.call(null,x)], null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't convert "),cljs.core.str(x),cljs.core.str(" to a color.")].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
garden.color.restrict_rgb = (function garden$color$restrict_rgb(m){
return cljs.core.select_keys.call(null,m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620)], null));
});
garden.color.make_color_operation = (function garden$color$make_color_operation(op){
return (function() {
var garden$color$make_color_operation_$_color_op = null;
var garden$color$make_color_operation_$_color_op__1 = (function (a){
return a;
});
var garden$color$make_color_operation_$_color_op__2 = (function (a,b){
var o = cljs.core.comp.call(null,garden.color.rgb_clip,op);
var a__$1 = garden.color.restrict_rgb.call(null,garden.color.as_rgb.call(null,a));
var b__$1 = garden.color.restrict_rgb.call(null,garden.color.as_rgb.call(null,b));
return garden.color.as_color.call(null,cljs.core.merge_with.call(null,o,a__$1,b__$1));
});
var garden$color$make_color_operation_$_color_op__3 = (function() { 
var G__449587__delegate = function (a,b,more){
return cljs.core.reduce.call(null,garden$color$make_color_operation_$_color_op,garden$color$make_color_operation_$_color_op.call(null,a,b),more);
};
var G__449587 = function (a,b,var_args){
var more = null;
if (arguments.length > 2) {
var G__449588__i = 0, G__449588__a = new Array(arguments.length -  2);
while (G__449588__i < G__449588__a.length) {G__449588__a[G__449588__i] = arguments[G__449588__i + 2]; ++G__449588__i;}
  more = new cljs.core.IndexedSeq(G__449588__a,0);
} 
return G__449587__delegate.call(this,a,b,more);};
G__449587.cljs$lang$maxFixedArity = 2;
G__449587.cljs$lang$applyTo = (function (arglist__449589){
var a = cljs.core.first(arglist__449589);
arglist__449589 = cljs.core.next(arglist__449589);
var b = cljs.core.first(arglist__449589);
var more = cljs.core.rest(arglist__449589);
return G__449587__delegate(a,b,more);
});
G__449587.cljs$core$IFn$_invoke$arity$variadic = G__449587__delegate;
return G__449587;
})()
;
garden$color$make_color_operation_$_color_op = function(a,b,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return garden$color$make_color_operation_$_color_op__1.call(this,a);
case 2:
return garden$color$make_color_operation_$_color_op__2.call(this,a,b);
default:
var G__449590 = null;
if (arguments.length > 2) {
var G__449591__i = 0, G__449591__a = new Array(arguments.length -  2);
while (G__449591__i < G__449591__a.length) {G__449591__a[G__449591__i] = arguments[G__449591__i + 2]; ++G__449591__i;}
G__449590 = new cljs.core.IndexedSeq(G__449591__a,0);
}
return garden$color$make_color_operation_$_color_op__3.cljs$core$IFn$_invoke$arity$variadic(a,b, G__449590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$color$make_color_operation_$_color_op.cljs$lang$maxFixedArity = 2;
garden$color$make_color_operation_$_color_op.cljs$lang$applyTo = garden$color$make_color_operation_$_color_op__3.cljs$lang$applyTo;
garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$1 = garden$color$make_color_operation_$_color_op__1;
garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$2 = garden$color$make_color_operation_$_color_op__2;
garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$variadic = garden$color$make_color_operation_$_color_op__3.cljs$core$IFn$_invoke$arity$variadic;
return garden$color$make_color_operation_$_color_op;
})()
});
/**
 * Add the RGB components of two or more colors.
 */
garden.color.color_PLUS_ = garden.color.make_color_operation.call(null,cljs.core._PLUS_);
/**
 * Subtract the RGB components of two or more colors.
 */
garden.color.color_ = garden.color.make_color_operation.call(null,cljs.core._);
/**
 * Multiply the RGB components of two or more colors.
 */
garden.color.color_STAR_ = garden.color.make_color_operation.call(null,cljs.core._STAR_);
/**
 * Multiply the RGB components of two or more colors.
 */
garden.color.color_div = garden.color.make_color_operation.call(null,cljs.core._SLASH_);
garden.color.update_color = (function garden$color$update_color(color,field,f,v){
var v__$1 = (function (){var or__35191__auto__ = new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return v;
}
})();
return cljs.core.update_in.call(null,garden.color.as_hsl.call(null,color),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null),f,v__$1);
});
/**
 * Rotates the hue value of a given color by amount.
 */
garden.color.rotate_hue = (function garden$color$rotate_hue(color,amount){
return garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"hue","hue",-508078848),cljs.core.comp.call(null,(function (p1__449601_SHARP_){
return cljs.core.mod.call(null,p1__449601_SHARP_,(360));
}),cljs.core._PLUS_),amount);
});
/**
 * Increase the saturation value of a given color by amount.
 */
garden.color.saturate = (function garden$color$saturate(color,amount){
return garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),cljs.core.comp.call(null,garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
 * Decrease the saturation value of a given color by amount.
 */
garden.color.desaturate = (function garden$color$desaturate(color,amount){
return garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),cljs.core.comp.call(null,garden.color.percent_clip,cljs.core._),amount);
});
/**
 * Increase the lightness value a given color by amount.
 */
garden.color.lighten = (function garden$color$lighten(color,amount){
return garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),cljs.core.comp.call(null,garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
 * Decrease the lightness value a given color by amount.
 */
garden.color.darken = (function garden$color$darken(color,amount){
return garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),cljs.core.comp.call(null,garden.color.percent_clip,cljs.core._),amount);
});
/**
 * Return the inversion of a color.
 */
garden.color.invert = (function garden$color$invert(color){
return garden.color.as_color.call(null,cljs.core.merge_with.call(null,cljs.core._,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",-969428204),(255),new cljs.core.Keyword(null,"green","green",-945526839),(255),new cljs.core.Keyword(null,"blue","blue",-622100620),(255)], null),garden.color.as_rgb.call(null,color)));
});
/**
 * Mix two or more colors by averaging their RGB channels.
 */
garden.color.mix = (function garden$color$mix(var_args){
var args449627 = [];
var len__36260__auto___449643 = arguments.length;
var i__36261__auto___449644 = (0);
while(true){
if((i__36261__auto___449644 < len__36260__auto___449643)){
args449627.push((arguments[i__36261__auto___449644]));

var G__449648 = (i__36261__auto___449644 + (1));
i__36261__auto___449644 = G__449648;
continue;
} else {
}
break;
}

var G__449636 = args449627.length;
switch (G__449636) {
case 2:
return garden.color.mix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36279__auto__ = (new cljs.core.IndexedSeq(args449627.slice((2)),(0),null));
return garden.color.mix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36279__auto__);

}
});

garden.color.mix.cljs$core$IFn$_invoke$arity$2 = (function (color_1,color_2){
var c1 = garden.color.restrict_rgb.call(null,garden.color.as_rgb.call(null,color_1));
var c2 = garden.color.restrict_rgb.call(null,garden.color.as_rgb.call(null,color_2));
return garden.color.as_color.call(null,cljs.core.merge_with.call(null,garden.util.average,c1,c2));
});

garden.color.mix.cljs$core$IFn$_invoke$arity$variadic = (function (color_1,color_2,more){
return cljs.core.reduce.call(null,garden.color.mix,garden.color.mix.call(null,color_1,color_2),more);
});

garden.color.mix.cljs$lang$applyTo = (function (seq449629){
var G__449630 = cljs.core.first.call(null,seq449629);
var seq449629__$1 = cljs.core.next.call(null,seq449629);
var G__449631 = cljs.core.first.call(null,seq449629__$1);
var seq449629__$2 = cljs.core.next.call(null,seq449629__$1);
return garden.color.mix.cljs$core$IFn$_invoke$arity$variadic(G__449630,G__449631,seq449629__$2);
});

garden.color.mix.cljs$lang$maxFixedArity = (2);
/**
 * Return the complement of a color.
 */
garden.color.complement = (function garden$color$complement(color){
return garden.color.rotate_hue.call(null,color,(180));
});
garden.color.hue_rotations = (function garden$color$hue_rotations(var_args){
var args__36267__auto__ = [];
var len__36260__auto___449672 = arguments.length;
var i__36261__auto___449673 = (0);
while(true){
if((i__36261__auto___449673 < len__36260__auto___449672)){
args__36267__auto__.push((arguments[i__36261__auto___449673]));

var G__449674 = (i__36261__auto___449673 + (1));
i__36261__auto___449673 = G__449674;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic = (function (color,amounts){
return cljs.core.map.call(null,cljs.core.partial.call(null,garden.color.rotate_hue,color),amounts);
});

garden.color.hue_rotations.cljs$lang$maxFixedArity = (1);

garden.color.hue_rotations.cljs$lang$applyTo = (function (seq449670){
var G__449671 = cljs.core.first.call(null,seq449670);
var seq449670__$1 = cljs.core.next.call(null,seq449670);
return garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic(G__449671,seq449670__$1);
});
/**
 * Given a color return a triple of colors which are 0, 30, and 60
 *   degrees clockwise from it. If a second falsy argument is passed the
 *   returned values will be in a counter-clockwise direction.
 */
garden.color.analogous = (function garden$color$analogous(var_args){
var args449676 = [];
var len__36260__auto___449690 = arguments.length;
var i__36261__auto___449691 = (0);
while(true){
if((i__36261__auto___449691 < len__36260__auto___449690)){
args449676.push((arguments[i__36261__auto___449691]));

var G__449693 = (i__36261__auto___449691 + (1));
i__36261__auto___449691 = G__449693;
continue;
} else {
}
break;
}

var G__449682 = args449676.length;
switch (G__449682) {
case 1:
return garden.color.analogous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.color.analogous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args449676.length)].join('')));

}
});

garden.color.analogous.cljs$core$IFn$_invoke$arity$1 = (function (color){
return garden.color.analogous.call(null,color,true);
});

garden.color.analogous.cljs$core$IFn$_invoke$arity$2 = (function (color,clockwise_QMARK_){
var sign = (cljs.core.truth_(clockwise_QMARK_)?cljs.core._PLUS_:cljs.core._);
return garden.color.hue_rotations.call(null,color,(0),sign.call(null,(30)),sign.call(null,(60)));
});

garden.color.analogous.cljs$lang$maxFixedArity = 2;
/**
 * Given a color return a triple of colors which are equidistance apart
 *   on the color wheel.
 */
garden.color.triad = (function garden$color$triad(color){
return garden.color.hue_rotations.call(null,color,(0),(120),(240));
});
/**
 * Given a color return a triple of the color and the two colors on
 *   either side of it's complement.
 */
garden.color.split_complement = (function garden$color$split_complement(var_args){
var args449702 = [];
var len__36260__auto___449710 = arguments.length;
var i__36261__auto___449711 = (0);
while(true){
if((i__36261__auto___449711 < len__36260__auto___449710)){
args449702.push((arguments[i__36261__auto___449711]));

var G__449713 = (i__36261__auto___449711 + (1));
i__36261__auto___449711 = G__449713;
continue;
} else {
}
break;
}

var G__449709 = args449702.length;
switch (G__449709) {
case 1:
return garden.color.split_complement.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.color.split_complement.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args449702.length)].join('')));

}
});

garden.color.split_complement.cljs$core$IFn$_invoke$arity$1 = (function (color){
return garden.color.split_complement.call(null,color,(130));
});

garden.color.split_complement.cljs$core$IFn$_invoke$arity$2 = (function (color,distance_from_complement){
var d = garden.util.clip.call(null,(1),(179),distance_from_complement);
return garden.color.hue_rotations.call(null,color,(0),d,(- d));
});

garden.color.split_complement.cljs$lang$maxFixedArity = 2;
/**
 * Given a color return a quadruple of four colors which are
 *   equidistance on the color wheel (ie. a pair of complements). An
 *   optional angle may be given for color of the second complement in the
 *   pair (this defaults to 90 when only color is passed).
 */
garden.color.tetrad = (function garden$color$tetrad(var_args){
var args449720 = [];
var len__36260__auto___449726 = arguments.length;
var i__36261__auto___449727 = (0);
while(true){
if((i__36261__auto___449727 < len__36260__auto___449726)){
args449720.push((arguments[i__36261__auto___449727]));

var G__449728 = (i__36261__auto___449727 + (1));
i__36261__auto___449727 = G__449728;
continue;
} else {
}
break;
}

var G__449725 = args449720.length;
switch (G__449725) {
case 1:
return garden.color.tetrad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.color.tetrad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args449720.length)].join('')));

}
});

garden.color.tetrad.cljs$core$IFn$_invoke$arity$1 = (function (color){
return garden.color.tetrad.call(null,color,(90));
});

garden.color.tetrad.cljs$core$IFn$_invoke$arity$2 = (function (color,angle){
var a = garden.util.clip.call(null,(1),(90),Math.abs(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$2(angle,angle)));
var color_2 = garden.color.rotate_hue.call(null,color,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.color.rotate_hue.call(null,color,(0)),garden.color.complement.call(null,color),color_2,garden.color.complement.call(null,color_2)], null);
});

garden.color.tetrad.cljs$lang$maxFixedArity = 2;
/**
 * Given a color return a list of shades from lightest to darkest by
 *   a step. By default the step is 10. White and black are excluded from
 *   the returned list.
 */
garden.color.shades = (function garden$color$shades(var_args){
var args449732 = [];
var len__36260__auto___449740 = arguments.length;
var i__36261__auto___449741 = (0);
while(true){
if((i__36261__auto___449741 < len__36260__auto___449740)){
args449732.push((arguments[i__36261__auto___449741]));

var G__449742 = (i__36261__auto___449741 + (1));
i__36261__auto___449741 = G__449742;
continue;
} else {
}
break;
}

var G__449734 = args449732.length;
switch (G__449734) {
case 1:
return garden.color.shades.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.color.shades.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args449732.length)].join('')));

}
});

garden.color.shades.cljs$core$IFn$_invoke$arity$1 = (function (color){
return garden.color.shades.call(null,color,(10));
});

garden.color.shades.cljs$core$IFn$_invoke$arity$2 = (function (color,step){
var c = garden.color.as_hsl.call(null,color);
var iter__35971__auto__ = ((function (c){
return (function garden$color$iter__449736(s__449737){
return (new cljs.core.LazySeq(null,((function (c){
return (function (){
var s__449737__$1 = s__449737;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__449737__$1);
if(temp__4657__auto__){
var s__449737__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__449737__$2)){
var c__35969__auto__ = cljs.core.chunk_first.call(null,s__449737__$2);
var size__35970__auto__ = cljs.core.count.call(null,c__35969__auto__);
var b__449739 = cljs.core.chunk_buffer.call(null,size__35970__auto__);
if((function (){var i__449738 = (0);
while(true){
if((i__449738 < size__35970__auto__)){
var i = cljs.core._nth.call(null,c__35969__auto__,i__449738);
cljs.core.chunk_append.call(null,b__449739,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(i * step)));

var G__449748 = (i__449738 + (1));
i__449738 = G__449748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__449739),garden$color$iter__449736.call(null,cljs.core.chunk_rest.call(null,s__449737__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__449739),null);
}
} else {
var i = cljs.core.first.call(null,s__449737__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(i * step)),garden$color$iter__449736.call(null,cljs.core.rest.call(null,s__449737__$2)));
}
} else {
return null;
}
break;
}
});})(c))
,null,null));
});})(c))
;
return iter__35971__auto__.call(null,cljs.core.range.call(null,(1),Math.floor((100.0 / step))));
});

garden.color.shades.cljs$lang$maxFixedArity = 2;
garden.color.color_name__GT_hex = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"aquamarine","aquamarine",263648544),new cljs.core.Keyword(null,"lime","lime",-1796425088),new cljs.core.Keyword(null,"deepskyblue","deepskyblue",-1691758944),new cljs.core.Keyword(null,"darksalmon","darksalmon",-896495551),new cljs.core.Keyword(null,"antiquewhite","antiquewhite",-1702201183),new cljs.core.Keyword(null,"mediumturquoise","mediumturquoise",2112212449),new cljs.core.Keyword(null,"slategrey","slategrey",-1531406687),new cljs.core.Keyword(null,"slategray","slategray",-178672671),new cljs.core.Keyword(null,"sienna","sienna",-1559699358),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"navajowhite","navajowhite",1463125346),new cljs.core.Keyword(null,"lavenderblush","lavenderblush",667482818),new cljs.core.Keyword(null,"firebrick","firebrick",-214380606),new cljs.core.Keyword(null,"orangered","orangered",-1851964317),new cljs.core.Keyword(null,"palevioletred","palevioletred",-1198100061),new cljs.core.Keyword(null,"lawngreen","lawngreen",672111043),new cljs.core.Keyword(null,"seashell","seashell",1208259012),new cljs.core.Keyword(null,"lightpink","lightpink",808485476),new cljs.core.Keyword(null,"darkolivegreen","darkolivegreen",-2098617596),new cljs.core.Keyword(null,"aliceblue","aliceblue",-1185534108),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"lightsteelblue","lightsteelblue",-209586236),new cljs.core.Keyword(null,"whitesmoke","whitesmoke",1847137252),new cljs.core.Keyword(null,"darkgoldenrod","darkgoldenrod",-1115778811),new cljs.core.Keyword(null,"tan","tan",1273609893),new cljs.core.Keyword(null,"bisque","bisque",-862836634),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"lightgreen","lightgreen",-1542529498),new cljs.core.Keyword(null,"darkseagreen","darkseagreen",410063911),new cljs.core.Keyword(null,"crimson","crimson",-1192060857),new cljs.core.Keyword(null,"darkslategray","darkslategray",348576839),new cljs.core.Keyword(null,"mistyrose","mistyrose",-619815737),new cljs.core.Keyword(null,"chocolate","chocolate",772404615),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"cadetblue","cadetblue",1126335112),new cljs.core.Keyword(null,"navy","navy",1626342120),new cljs.core.Keyword(null,"ghostwhite","ghostwhite",-1030428888),new cljs.core.Keyword(null,"dimgrey","dimgrey",265814984),new cljs.core.Keyword(null,"seagreen","seagreen",1345424905),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"mediumseagreen","mediumseagreen",2130779146),new cljs.core.Keyword(null,"indigo","indigo",-280252374),new cljs.core.Keyword(null,"olivedrab","olivedrab",477000042),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"peachpuff","peachpuff",-1932127734),new cljs.core.Keyword(null,"limegreen","limegreen",-121735638),new cljs.core.Keyword(null,"mediumslateblue","mediumslateblue",-900241526),new cljs.core.Keyword(null,"violet","violet",-1351470549),new cljs.core.Keyword(null,"sandybrown","sandybrown",-417646484),new cljs.core.Keyword(null,"yellowgreen","yellowgreen",844595052),new cljs.core.Keyword(null,"mediumspringgreen","mediumspringgreen",-257604339),new cljs.core.Keyword(null,"steelblue","steelblue",1620562381),new cljs.core.Keyword(null,"rosybrown","rosybrown",1634897517),new cljs.core.Keyword(null,"cornflowerblue","cornflowerblue",-1713148307),new cljs.core.Keyword(null,"ivory","ivory",-1259182451),new cljs.core.Keyword(null,"lightgoldenrodyellow","lightgoldenrodyellow",1849392877),new cljs.core.Keyword(null,"salmon","salmon",-1093653298),new cljs.core.Keyword(null,"darkcyan","darkcyan",-1999655442),new cljs.core.Keyword(null,"peru","peru",1147074382),new cljs.core.Keyword(null,"cornsilk","cornsilk",-1628976146),new cljs.core.Keyword(null,"lightslategray","lightslategray",-1109503825),new cljs.core.Keyword(null,"blueviolet","blueviolet",887936463),new cljs.core.Keyword(null,"forestgreen","forestgreen",1609185807),new cljs.core.Keyword(null,"lightseagreen","lightseagreen",-1503692817),new cljs.core.Keyword(null,"gold","gold",-806826416),new cljs.core.Keyword(null,"gainsboro","gainsboro",-218568880),new cljs.core.Keyword(null,"darkorchid","darkorchid",-1255783536),new cljs.core.Keyword(null,"burlywood","burlywood",1747294160),new cljs.core.Keyword(null,"lightskyblue","lightskyblue",397352944),new cljs.core.Keyword(null,"chartreuse","chartreuse",-1626529775),new cljs.core.Keyword(null,"snow","snow",1266930033),new cljs.core.Keyword(null,"moccasin","moccasin",885646097),new cljs.core.Keyword(null,"honeydew","honeydew",297211825),new cljs.core.Keyword(null,"aqua","aqua",745022417),new cljs.core.Keyword(null,"darkred","darkred",1564487633),new cljs.core.Keyword(null,"mediumorchid","mediumorchid",114416082),new cljs.core.Keyword(null,"lightsalmon","lightsalmon",278000114),new cljs.core.Keyword(null,"saddlebrown","saddlebrown",-1556765006),new cljs.core.Keyword(null,"wheat","wheat",783520466),new cljs.core.Keyword(null,"springgreen","springgreen",-1241565454),new cljs.core.Keyword(null,"lightslategrey","lightslategrey",1806136178),new cljs.core.Keyword(null,"darkblue","darkblue",511597490),new cljs.core.Keyword(null,"powderblue","powderblue",65928114),new cljs.core.Keyword(null,"turquoise","turquoise",876845491),new cljs.core.Keyword(null,"blanchedalmond","blanchedalmond",-1397674477),new cljs.core.Keyword(null,"papayawhip","papayawhip",-330388621),new cljs.core.Keyword(null,"slateblue","slateblue",79472627),new cljs.core.Keyword(null,"lightblue","lightblue",-1333083084),new cljs.core.Keyword(null,"skyblue","skyblue",-2076132812),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"lightyellow","lightyellow",1576303380),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"palegreen","palegreen",1360601109),new cljs.core.Keyword(null,"greenyellow","greenyellow",1380924629),new cljs.core.Keyword(null,"khaki","khaki",-1417823979),new cljs.core.Keyword(null,"maroon","maroon",-952210123),new cljs.core.Keyword(null,"darkgrey","darkgrey",-860992715),new cljs.core.Keyword(null,"midnightblue","midnightblue",688164725),new cljs.core.Keyword(null,"floralwhite","floralwhite",1656937461),new cljs.core.Keyword(null,"deeppink","deeppink",1577828374),new cljs.core.Keyword(null,"paleturquoise","paleturquoise",1255621750),new cljs.core.Keyword(null,"darkkhaki","darkkhaki",1599585526),new cljs.core.Keyword(null,"azure","azure",1864287702),new cljs.core.Keyword(null,"indianred","indianred",-1829312906),new cljs.core.Keyword(null,"darkviolet","darkviolet",552615766),new cljs.core.Keyword(null,"mediumpurple","mediumpurple",-1891751018),new cljs.core.Keyword(null,"fuchsia","fuchsia",990719926),new cljs.core.Keyword(null,"coral","coral",1082484055),new cljs.core.Keyword(null,"mediumvioletred","mediumvioletred",-1767902505),new cljs.core.Keyword(null,"lemonchiffon","lemonchiffon",1115945815),new cljs.core.Keyword(null,"mediumblue","mediumblue",-1579936616),new cljs.core.Keyword(null,"darkmagenta","darkmagenta",-1534491240),new cljs.core.Keyword(null,"goldenrod","goldenrod",2000666104),new cljs.core.Keyword(null,"darkorange","darkorange",1453996632),new cljs.core.Keyword(null,"orchid","orchid",-1953715528),new cljs.core.Keyword(null,"plum","plum",2022177528),new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.Keyword(null,"teal","teal",1231496088),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"lightgrey","lightgrey",-729897351),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"dodgerblue","dodgerblue",-1678389350),new cljs.core.Keyword(null,"darkturquoise","darkturquoise",-80977765),new cljs.core.Keyword(null,"mintcream","mintcream",1437895067),new cljs.core.Keyword(null,"hotpink","hotpink",1103829723),new cljs.core.Keyword(null,"thistle","thistle",1477120028),new cljs.core.Keyword(null,"royalblue","royalblue",978912636),new cljs.core.Keyword(null,"darkgreen","darkgreen",2002841276),new cljs.core.Keyword(null,"darkslateblue","darkslateblue",807219996),new cljs.core.Keyword(null,"silver","silver",1044501468),new cljs.core.Keyword(null,"darkgray","darkgray",-1229776547),new cljs.core.Keyword(null,"oldlace","oldlace",-966038915),new cljs.core.Keyword(null,"mediumaquamarine","mediumaquamarine",1476241181),new cljs.core.Keyword(null,"brown","brown",1414854429),new cljs.core.Keyword(null,"lightgray","lightgray",-845833379),new cljs.core.Keyword(null,"olive","olive",-2080542466),new cljs.core.Keyword(null,"lightcoral","lightcoral",-988903010),new cljs.core.Keyword(null,"tomato","tomato",1086708254),new cljs.core.Keyword(null,"lightcyan","lightcyan",-481418530),new cljs.core.Keyword(null,"linen","linen",-1305214018),new cljs.core.Keyword(null,"darkslategrey","darkslategrey",-114797409),new cljs.core.Keyword(null,"lavender","lavender",-1469567809),new cljs.core.Keyword(null,"dimgray","dimgray",-412750241),new cljs.core.Keyword(null,"palegoldenrod","palegoldenrod",-2067529985),new cljs.core.Keyword(null,"beige","beige",836725695),new cljs.core.Keyword(null,"black","black",1294279647)],["#7fffd4","#00ff00","#00bfff","#e9967a","#faebd7","#48d1cc","#708090","#708090","#a0522d","#ffa500","#ffdead","#fff0f5","#b22222","#ff4500","#db7093","#7cfc00","#fff5ee","#ffb6c1","#556b2f","#f0f8ff","#808080","#b0c4de","#f5f5f5","#b8860b","#d2b48c","#ffe4c4","#ffffff","#90ee90","#8fbc8f","#dc143c","#2f4f4f","#ffe4e1","#d2691e","#ffff00","#5f9ea0","#000080","#f8f8ff","#696969","#2e8b57","#008000","#3cb371","#4b0082","#6b8e23","#00ffff","#ffdab9","#32cd32","#7b68ee","#ee82ee","#f4a460","#9acd32","#00fa9a","#4682b4","#bc8f8f","#6495ed","#fffff0","#fafad2","#fa8072","#008b8b","#cd853f","#fff8dc","#778899","#8a2be2","#228b22","#20b2aa","#ffd700","#dcdcdc","#9932cc","#deb887","#87cefa","#7fff00","#fffafa","#ffe4b5","#f0fff0","#00ffff","#8b0000","#ba55d3","#ffa07a","#8b4513","#f5deb3","#00ff7f","#778899","#00008b","#b0e0e6","#40e0d0","#ffebcd","#ffefd5","#6a5acd","#add8e6","#87ceeb","#ff0000","#ffffe0","#0000ff","#98fb98","#adff2f","#f0e68c","#800000","#a9a9a9","#191970","#fffaf0","#ff1493","#afeeee","#bdb76b","#f0ffff","#cd5c5c","#9400d3","#9370db","#ff00ff","#ff7f50","#c71585","#fffacd","#0000cd","#8b008b","#daa520","#ff8c00","#da70d6","#dda0dd","#ffc0cb","#008080","#ff00ff","#d3d3d3","#800080","#1e90ff","#00ced1","#f5fffa","#ff69b4","#d8bfd8","#4169e1","#006400","#483d8b","#c0c0c0","#a9a9a9","#fdf5e6","#66cdaa","#a52a2a","#d3d3d3","#808000","#f08080","#ff6347","#e0ffff","#faf0e6","#2f4f4f","#e6e6fa","#696969","#eee8aa","#f5f5dc","#000000"]);
/**
 * Helper function for from-name. Returns an instance of ExceptionInfo
 *   for unknown colors.
 */
garden.color.ex_info_color_name = (function garden$color$ex_info_color_name(n){
return cljs.core.ex_info.call(null,[cljs.core.str("Unknown color "),cljs.core.str(cljs.core.pr_str.call(null,n)),cljs.core.str(" see (:expected (ex-data e)) for a list of color names")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),n,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.set.call(null,cljs.core.keys.call(null,garden.color.color_name__GT_hex))], null));
});
/**
 * Helper function for from-name.
 */
garden.color.color_name__GT_color = cljs.core.memoize.call(null,(function (k){
return garden.color.color_name__GT_hex.call(null,k);
}));
/**
 * Given a CSS color name n return an instance of CSSColor.
 */
garden.color.from_name = (function garden$color$from_name(n){
var temp__4655__auto__ = garden.color.color_name__GT_color.call(null,cljs.core.keyword.call(null,n));
if(cljs.core.truth_(temp__4655__auto__)){
var h = temp__4655__auto__;
return h;
} else {
throw garden.color.ex_info_color_name.call(null,n);
}
});
