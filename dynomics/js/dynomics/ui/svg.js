// Compiled by ClojureScript 1.7.170 {}
goog.provide('dynomics.ui.svg');
goog.require('cljs.core');
/**
 * Returns an SVG transform string from the given list e.g. (trs :t [0.1 0.2] :s [0.5 0.5] :r [1.0])
 */
dynomics.ui.svg.trs = (function dynomics$ui$svg$trs(var_args){
var args__25276__auto__ = [];
var len__25269__auto___873023 = arguments.length;
var i__25270__auto___873024 = (0);
while(true){
if((i__25270__auto___873024 < len__25269__auto___873023)){
args__25276__auto__.push((arguments[i__25270__auto___873024]));

var G__873025 = (i__25270__auto___873024 + (1));
i__25270__auto___873024 = G__873025;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((0) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((0)),(0))):null);
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(argseq__25277__auto__);
});

dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic = (function (transforms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p__873021){
var vec__873022 = p__873021;
var k = cljs.core.nth.call(null,vec__873022,(0),null);
var p = cljs.core.nthnext.call(null,vec__873022,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),"translate",new cljs.core.Keyword(null,"r","r",-471384190),"rotate",new cljs.core.Keyword(null,"s","s",1705939918),"scale"], null).call(null,k),"(",cljs.core.interpose.call(null,",",cljs.core.map.call(null,cljs.core.double$,p)),") ");
}),transforms));
});

dynomics.ui.svg.trs.cljs$lang$maxFixedArity = (0);

dynomics.ui.svg.trs.cljs$lang$applyTo = (function (seq873020){
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq873020));
});
dynomics.ui.svg.make_bezier = (function dynomics$ui$svg$make_bezier(p__873026){
var vec__873028 = p__873026;
var point = cljs.core.nth.call(null,vec__873028,(0),null);
var control_points = cljs.core.nthnext.call(null,vec__873028,(1));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),point,new cljs.core.Keyword(null,"control-points","control-points",-238538325),control_points], null);
});
dynomics.ui.svg.to_svg_path = (function dynomics$ui$svg$to_svg_path(p__873029){
var vec__873044 = p__873029;
var map__873045 = cljs.core.nth.call(null,vec__873044,(0),null);
var map__873045__$1 = ((((!((map__873045 == null)))?((((map__873045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__873045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__873045):map__873045);
var first_point = map__873045__$1;
var vec__873046 = cljs.core.get.call(null,map__873045__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__873046,(0),null);
var fpy = cljs.core.nth.call(null,vec__873046,(1),null);
var vec__873047 = cljs.core.get.call(null,map__873045__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__873048 = cljs.core.nth.call(null,vec__873047,(0),null);
var fcx = cljs.core.nth.call(null,vec__873048,(0),null);
var fcy = cljs.core.nth.call(null,vec__873048,(1),null);
var ml = cljs.core.get.call(null,map__873045__$1,new cljs.core.Keyword(null,"ml","ml",1909675057),"M");
var points = cljs.core.nthnext.call(null,vec__873044,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ml,fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__873044,map__873045,map__873045__$1,first_point,vec__873046,fpx,fpy,vec__873047,vec__873048,fcx,fcy,ml,points){
return (function (p__873050){
var vec__873051 = p__873050;
var map__873052 = cljs.core.nth.call(null,vec__873051,(0),null);
var map__873052__$1 = ((((!((map__873052 == null)))?((((map__873052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__873052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__873052):map__873052);
var vec__873053 = cljs.core.get.call(null,map__873052__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__873053,(0),null);
var cp12 = cljs.core.nth.call(null,vec__873053,(1),null);
var map__873054 = cljs.core.nth.call(null,vec__873051,(1),null);
var map__873054__$1 = ((((!((map__873054 == null)))?((((map__873054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__873054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__873054):map__873054);
var vec__873055 = cljs.core.get.call(null,map__873054__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__873055,(0),null);
var cp22 = cljs.core.nth.call(null,vec__873055,(1),null);
var p2 = cljs.core.get.call(null,map__873054__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__873044,map__873045,map__873045__$1,first_point,vec__873046,fpx,fpy,vec__873047,vec__873048,fcx,fcy,ml,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_smooth_svg_path = (function dynomics$ui$svg$to_smooth_svg_path(p__873058){
var vec__873073 = p__873058;
var map__873074 = cljs.core.nth.call(null,vec__873073,(0),null);
var map__873074__$1 = ((((!((map__873074 == null)))?((((map__873074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__873074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__873074):map__873074);
var first_point = map__873074__$1;
var vec__873075 = cljs.core.get.call(null,map__873074__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__873075,(0),null);
var fpy = cljs.core.nth.call(null,vec__873075,(1),null);
var vec__873076 = cljs.core.get.call(null,map__873074__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__873077 = cljs.core.nth.call(null,vec__873076,(0),null);
var fcx = cljs.core.nth.call(null,vec__873077,(0),null);
var fcy = cljs.core.nth.call(null,vec__873077,(1),null);
var points = cljs.core.nthnext.call(null,vec__873073,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__873073,map__873074,map__873074__$1,first_point,vec__873075,fpx,fpy,vec__873076,vec__873077,fcx,fcy,points){
return (function (p__873079){
var vec__873080 = p__873079;
var map__873081 = cljs.core.nth.call(null,vec__873080,(0),null);
var map__873081__$1 = ((((!((map__873081 == null)))?((((map__873081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__873081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__873081):map__873081);
var vec__873082 = cljs.core.get.call(null,map__873081__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp1 = cljs.core.nth.call(null,vec__873082,(0),null);
var map__873083 = cljs.core.nth.call(null,vec__873080,(1),null);
var map__873083__$1 = ((((!((map__873083 == null)))?((((map__873083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__873083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__873083):map__873083);
var vec__873084 = cljs.core.get.call(null,map__873083__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp2 = cljs.core.nth.call(null,vec__873084,(0),null);
var p2 = cljs.core.get.call(null,map__873083__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return cljs.core.concat.call(null," S",cljs.core.interpose.call(null,",",cp1)," ",cljs.core.interpose.call(null,",",p2));
});})(vec__873073,map__873074,map__873074__$1,first_point,vec__873075,fpx,fpy,vec__873076,vec__873077,fcx,fcy,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_closed_svg_path = (function dynomics$ui$svg$to_closed_svg_path(p__873087){
var vec__873102 = p__873087;
var map__873103 = cljs.core.nth.call(null,vec__873102,(0),null);
var map__873103__$1 = ((((!((map__873103 == null)))?((((map__873103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__873103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__873103):map__873103);
var first_point = map__873103__$1;
var vec__873104 = cljs.core.get.call(null,map__873103__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__873104,(0),null);
var fpy = cljs.core.nth.call(null,vec__873104,(1),null);
var vec__873105 = cljs.core.get.call(null,map__873103__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__873106 = cljs.core.nth.call(null,vec__873105,(0),null);
var fcx = cljs.core.nth.call(null,vec__873106,(0),null);
var fcy = cljs.core.nth.call(null,vec__873106,(1),null);
var points = cljs.core.nthnext.call(null,vec__873102,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__873102,map__873103,map__873103__$1,first_point,vec__873104,fpx,fpy,vec__873105,vec__873106,fcx,fcy,points){
return (function (p__873108){
var vec__873109 = p__873108;
var map__873110 = cljs.core.nth.call(null,vec__873109,(0),null);
var map__873110__$1 = ((((!((map__873110 == null)))?((((map__873110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__873110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__873110):map__873110);
var vec__873111 = cljs.core.get.call(null,map__873110__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__873111,(0),null);
var cp12 = cljs.core.nth.call(null,vec__873111,(1),null);
var map__873112 = cljs.core.nth.call(null,vec__873109,(1),null);
var map__873112__$1 = ((((!((map__873112 == null)))?((((map__873112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__873112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__873112):map__873112);
var vec__873113 = cljs.core.get.call(null,map__873112__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__873113,(0),null);
var cp22 = cljs.core.nth.call(null,vec__873113,(1),null);
var p2 = cljs.core.get.call(null,map__873112__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__873102,map__873103,map__873103__$1,first_point,vec__873104,fpx,fpy,vec__873105,vec__873106,fcx,fcy,points))
,cljs.core.partition.call(null,(2),cljs.core.cons.call(null,first_point,points)))));
});

//# sourceMappingURL=svg.js.map