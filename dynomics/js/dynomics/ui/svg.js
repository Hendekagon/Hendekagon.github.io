// Compiled by ClojureScript 1.8.40 {}
goog.provide('dynomics.ui.svg');
goog.require('cljs.core');
/**
 * Returns an SVG transform string from the given list e.g. (trs :t [0.1 0.2] :s [0.5 0.5] :r [1.0])
 */
dynomics.ui.svg.trs = (function dynomics$ui$svg$trs(var_args){
var args__36498__auto__ = [];
var len__36491__auto___71345 = arguments.length;
var i__36492__auto___71346 = (0);
while(true){
if((i__36492__auto___71346 < len__36491__auto___71345)){
args__36498__auto__.push((arguments[i__36492__auto___71346]));

var G__71347 = (i__36492__auto___71346 + (1));
i__36492__auto___71346 = G__71347;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((0) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((0)),(0),null)):null);
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(argseq__36499__auto__);
});

dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic = (function (transforms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p__71343){
var vec__71344 = p__71343;
var k = cljs.core.nth.call(null,vec__71344,(0),null);
var p = cljs.core.nthnext.call(null,vec__71344,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),"translate",new cljs.core.Keyword(null,"r","r",-471384190),"rotate",new cljs.core.Keyword(null,"s","s",1705939918),"scale"], null).call(null,k),"(",cljs.core.interpose.call(null,",",cljs.core.map.call(null,cljs.core.double$,p)),") ");
}),transforms));
});

dynomics.ui.svg.trs.cljs$lang$maxFixedArity = (0);

dynomics.ui.svg.trs.cljs$lang$applyTo = (function (seq71342){
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71342));
});
dynomics.ui.svg.make_bezier_point = (function dynomics$ui$svg$make_bezier_point(var_args){
var args71348 = [];
var len__36491__auto___71353 = arguments.length;
var i__36492__auto___71354 = (0);
while(true){
if((i__36492__auto___71354 < len__36491__auto___71353)){
args71348.push((arguments[i__36492__auto___71354]));

var G__71355 = (i__36492__auto___71354 + (1));
i__36492__auto___71354 = G__71355;
continue;
} else {
}
break;
}

var G__71350 = args71348.length;
switch (G__71350) {
case 1:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71348.length)].join('')));

}
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1 = (function (p__71351){
var vec__71352 = p__71351;
var point = cljs.core.nth.call(null,vec__71352,(0),null);
var control_points = cljs.core.nthnext.call(null,vec__71352,(1));
return dynomics.ui.svg.make_bezier_point.call(null,point,control_points);
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2 = (function (point,control_points){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),point,new cljs.core.Keyword(null,"control-points","control-points",-238538325),control_points], null);
});

dynomics.ui.svg.make_bezier_point.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_beziers = (function dynomics$ui$svg$to_beziers(var_args){
var args71357 = [];
var len__36491__auto___71363 = arguments.length;
var i__36492__auto___71364 = (0);
while(true){
if((i__36492__auto___71364 < len__36491__auto___71363)){
args71357.push((arguments[i__36492__auto___71364]));

var G__71365 = (i__36492__auto___71364 + (1));
i__36492__auto___71364 = G__71365;
continue;
} else {
}
break;
}

var G__71359 = args71357.length;
switch (G__71359) {
case 1:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71357.length)].join('')));

}
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1 = (function (nodes){
return dynomics.ui.svg.to_beziers.call(null,nodes,cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2 = (function (nodes,control_point_ids){
return cljs.core.map.call(null,(function (p__71360,cpids){
var map__71361 = p__71360;
var map__71361__$1 = ((((!((map__71361 == null)))?((((map__71361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71361):map__71361);
var p = cljs.core.get.call(null,map__71361__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var cp = cljs.core.get.call(null,map__71361__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return dynomics.ui.svg.make_bezier_point.call(null,p,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,p),new cljs.core.Keyword(null,"position","position",-2011731912)),cljs.core.vals.call(null,cljs.core.select_keys.call(null,cp,cpids)))));
}),nodes,control_point_ids);
});

dynomics.ui.svg.to_beziers.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_svg_path = (function dynomics$ui$svg$to_svg_path(p__71367){
var vec__71382 = p__71367;
var map__71383 = cljs.core.nth.call(null,vec__71382,(0),null);
var map__71383__$1 = ((((!((map__71383 == null)))?((((map__71383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71383):map__71383);
var first_point = map__71383__$1;
var vec__71384 = cljs.core.get.call(null,map__71383__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__71384,(0),null);
var fpy = cljs.core.nth.call(null,vec__71384,(1),null);
var vec__71385 = cljs.core.get.call(null,map__71383__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__71386 = cljs.core.nth.call(null,vec__71385,(0),null);
var fcx = cljs.core.nth.call(null,vec__71386,(0),null);
var fcy = cljs.core.nth.call(null,vec__71386,(1),null);
var _ = cljs.core.nth.call(null,vec__71385,(1),null);
var ml = cljs.core.get.call(null,map__71383__$1,new cljs.core.Keyword(null,"ml","ml",1909675057),"M");
var points = cljs.core.nthnext.call(null,vec__71382,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ml,fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__71382,map__71383,map__71383__$1,first_point,vec__71384,fpx,fpy,vec__71385,vec__71386,fcx,fcy,_,ml,points){
return (function (p__71388){
var vec__71389 = p__71388;
var map__71390 = cljs.core.nth.call(null,vec__71389,(0),null);
var map__71390__$1 = ((((!((map__71390 == null)))?((((map__71390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71390):map__71390);
var vec__71391 = cljs.core.get.call(null,map__71390__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__71391,(0),null);
var cp12 = cljs.core.nth.call(null,vec__71391,(1),null);
var map__71392 = cljs.core.nth.call(null,vec__71389,(1),null);
var map__71392__$1 = ((((!((map__71392 == null)))?((((map__71392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71392):map__71392);
var vec__71393 = cljs.core.get.call(null,map__71392__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__71393,(0),null);
var cp22 = cljs.core.nth.call(null,vec__71393,(1),null);
var p2 = cljs.core.get.call(null,map__71392__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp12)," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__71382,map__71383,map__71383__$1,first_point,vec__71384,fpx,fpy,vec__71385,vec__71386,fcx,fcy,_,ml,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_smooth_svg_path = (function dynomics$ui$svg$to_smooth_svg_path(p__71396){
var vec__71411 = p__71396;
var map__71412 = cljs.core.nth.call(null,vec__71411,(0),null);
var map__71412__$1 = ((((!((map__71412 == null)))?((((map__71412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71412):map__71412);
var first_point = map__71412__$1;
var vec__71413 = cljs.core.get.call(null,map__71412__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__71413,(0),null);
var fpy = cljs.core.nth.call(null,vec__71413,(1),null);
var vec__71414 = cljs.core.get.call(null,map__71412__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__71415 = cljs.core.nth.call(null,vec__71414,(0),null);
var fcx = cljs.core.nth.call(null,vec__71415,(0),null);
var fcy = cljs.core.nth.call(null,vec__71415,(1),null);
var points = cljs.core.nthnext.call(null,vec__71411,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__71411,map__71412,map__71412__$1,first_point,vec__71413,fpx,fpy,vec__71414,vec__71415,fcx,fcy,points){
return (function (p__71417){
var vec__71418 = p__71417;
var map__71419 = cljs.core.nth.call(null,vec__71418,(0),null);
var map__71419__$1 = ((((!((map__71419 == null)))?((((map__71419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71419):map__71419);
var vec__71420 = cljs.core.get.call(null,map__71419__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var _ = cljs.core.nth.call(null,vec__71420,(0),null);
var cp1 = cljs.core.nth.call(null,vec__71420,(1),null);
var map__71421 = cljs.core.nth.call(null,vec__71418,(1),null);
var map__71421__$1 = ((((!((map__71421 == null)))?((((map__71421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71421):map__71421);
var vec__71422 = cljs.core.get.call(null,map__71421__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp2 = cljs.core.nth.call(null,vec__71422,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__71422,(1),null);
var p2 = cljs.core.get.call(null,map__71421__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return cljs.core.concat.call(null," Q",cljs.core.interpose.call(null,",",cp1)," ",cljs.core.interpose.call(null,",",p2));
});})(vec__71411,map__71412,map__71412__$1,first_point,vec__71413,fpx,fpy,vec__71414,vec__71415,fcx,fcy,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_closed_svg_path = (function dynomics$ui$svg$to_closed_svg_path(p__71425){
var vec__71440 = p__71425;
var map__71441 = cljs.core.nth.call(null,vec__71440,(0),null);
var map__71441__$1 = ((((!((map__71441 == null)))?((((map__71441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71441):map__71441);
var first_point = map__71441__$1;
var vec__71442 = cljs.core.get.call(null,map__71441__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__71442,(0),null);
var fpy = cljs.core.nth.call(null,vec__71442,(1),null);
var vec__71443 = cljs.core.get.call(null,map__71441__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__71444 = cljs.core.nth.call(null,vec__71443,(0),null);
var fcx = cljs.core.nth.call(null,vec__71444,(0),null);
var fcy = cljs.core.nth.call(null,vec__71444,(1),null);
var points = cljs.core.nthnext.call(null,vec__71440,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__71440,map__71441,map__71441__$1,first_point,vec__71442,fpx,fpy,vec__71443,vec__71444,fcx,fcy,points){
return (function (p__71446){
var vec__71447 = p__71446;
var map__71448 = cljs.core.nth.call(null,vec__71447,(0),null);
var map__71448__$1 = ((((!((map__71448 == null)))?((((map__71448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71448):map__71448);
var vec__71449 = cljs.core.get.call(null,map__71448__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__71449,(0),null);
var cp12 = cljs.core.nth.call(null,vec__71449,(1),null);
var map__71450 = cljs.core.nth.call(null,vec__71447,(1),null);
var map__71450__$1 = ((((!((map__71450 == null)))?((((map__71450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71450):map__71450);
var vec__71451 = cljs.core.get.call(null,map__71450__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__71451,(0),null);
var cp22 = cljs.core.nth.call(null,vec__71451,(1),null);
var p2 = cljs.core.get.call(null,map__71450__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__71440,map__71441,map__71441__$1,first_point,vec__71442,fpx,fpy,vec__71443,vec__71444,fcx,fcy,points))
,cljs.core.partition.call(null,(2),cljs.core.cons.call(null,first_point,points)))));
});

//# sourceMappingURL=svg.js.map?rel=1459533433820