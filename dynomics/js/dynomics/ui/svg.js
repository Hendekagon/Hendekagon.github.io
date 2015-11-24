// Compiled by ClojureScript 1.7.170 {}
goog.provide('dynomics.ui.svg');
goog.require('cljs.core');
/**
 * Returns an SVG transform string from the given list e.g. (trs :t [0.1 0.2] :s [0.5 0.5] :r [1.0])
 */
dynomics.ui.svg.trs = (function dynomics$ui$svg$trs(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1888393 = arguments.length;
var i__25220__auto___1888394 = (0);
while(true){
if((i__25220__auto___1888394 < len__25219__auto___1888393)){
args__25226__auto__.push((arguments[i__25220__auto___1888394]));

var G__1888395 = (i__25220__auto___1888394 + (1));
i__25220__auto___1888394 = G__1888395;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((0) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((0)),(0))):null);
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(argseq__25227__auto__);
});

dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic = (function (transforms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p__1888391){
var vec__1888392 = p__1888391;
var k = cljs.core.nth.call(null,vec__1888392,(0),null);
var p = cljs.core.nthnext.call(null,vec__1888392,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),"translate",new cljs.core.Keyword(null,"r","r",-471384190),"rotate",new cljs.core.Keyword(null,"s","s",1705939918),"scale"], null).call(null,k),"(",cljs.core.interpose.call(null,",",cljs.core.map.call(null,cljs.core.double$,p)),") ");
}),transforms));
});

dynomics.ui.svg.trs.cljs$lang$maxFixedArity = (0);

dynomics.ui.svg.trs.cljs$lang$applyTo = (function (seq1888390){
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1888390));
});
dynomics.ui.svg.make_bezier = (function dynomics$ui$svg$make_bezier(p__1888396){
var vec__1888398 = p__1888396;
var point = cljs.core.nth.call(null,vec__1888398,(0),null);
var control_points = cljs.core.nthnext.call(null,vec__1888398,(1));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),point,new cljs.core.Keyword(null,"control-points","control-points",-238538325),control_points], null);
});
dynomics.ui.svg.to_svg_path = (function dynomics$ui$svg$to_svg_path(p__1888399){
var vec__1888414 = p__1888399;
var map__1888415 = cljs.core.nth.call(null,vec__1888414,(0),null);
var map__1888415__$1 = ((((!((map__1888415 == null)))?((((map__1888415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888415):map__1888415);
var first_point = map__1888415__$1;
var vec__1888416 = cljs.core.get.call(null,map__1888415__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__1888416,(0),null);
var fpy = cljs.core.nth.call(null,vec__1888416,(1),null);
var vec__1888417 = cljs.core.get.call(null,map__1888415__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__1888418 = cljs.core.nth.call(null,vec__1888417,(0),null);
var fcx = cljs.core.nth.call(null,vec__1888418,(0),null);
var fcy = cljs.core.nth.call(null,vec__1888418,(1),null);
var points = cljs.core.nthnext.call(null,vec__1888414,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__1888414,map__1888415,map__1888415__$1,first_point,vec__1888416,fpx,fpy,vec__1888417,vec__1888418,fcx,fcy,points){
return (function (p__1888420){
var vec__1888421 = p__1888420;
var map__1888422 = cljs.core.nth.call(null,vec__1888421,(0),null);
var map__1888422__$1 = ((((!((map__1888422 == null)))?((((map__1888422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888422):map__1888422);
var vec__1888423 = cljs.core.get.call(null,map__1888422__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__1888423,(0),null);
var cp12 = cljs.core.nth.call(null,vec__1888423,(1),null);
var map__1888424 = cljs.core.nth.call(null,vec__1888421,(1),null);
var map__1888424__$1 = ((((!((map__1888424 == null)))?((((map__1888424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888424):map__1888424);
var vec__1888425 = cljs.core.get.call(null,map__1888424__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__1888425,(0),null);
var cp22 = cljs.core.nth.call(null,vec__1888425,(1),null);
var p2 = cljs.core.get.call(null,map__1888424__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__1888414,map__1888415,map__1888415__$1,first_point,vec__1888416,fpx,fpy,vec__1888417,vec__1888418,fcx,fcy,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_smooth_svg_path = (function dynomics$ui$svg$to_smooth_svg_path(p__1888428){
var vec__1888443 = p__1888428;
var map__1888444 = cljs.core.nth.call(null,vec__1888443,(0),null);
var map__1888444__$1 = ((((!((map__1888444 == null)))?((((map__1888444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888444):map__1888444);
var first_point = map__1888444__$1;
var vec__1888445 = cljs.core.get.call(null,map__1888444__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__1888445,(0),null);
var fpy = cljs.core.nth.call(null,vec__1888445,(1),null);
var vec__1888446 = cljs.core.get.call(null,map__1888444__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__1888447 = cljs.core.nth.call(null,vec__1888446,(0),null);
var fcx = cljs.core.nth.call(null,vec__1888447,(0),null);
var fcy = cljs.core.nth.call(null,vec__1888447,(1),null);
var points = cljs.core.nthnext.call(null,vec__1888443,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__1888443,map__1888444,map__1888444__$1,first_point,vec__1888445,fpx,fpy,vec__1888446,vec__1888447,fcx,fcy,points){
return (function (p__1888449){
var vec__1888450 = p__1888449;
var map__1888451 = cljs.core.nth.call(null,vec__1888450,(0),null);
var map__1888451__$1 = ((((!((map__1888451 == null)))?((((map__1888451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888451):map__1888451);
var vec__1888452 = cljs.core.get.call(null,map__1888451__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp1 = cljs.core.nth.call(null,vec__1888452,(0),null);
var map__1888453 = cljs.core.nth.call(null,vec__1888450,(1),null);
var map__1888453__$1 = ((((!((map__1888453 == null)))?((((map__1888453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888453):map__1888453);
var vec__1888454 = cljs.core.get.call(null,map__1888453__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp2 = cljs.core.nth.call(null,vec__1888454,(0),null);
var p2 = cljs.core.get.call(null,map__1888453__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return cljs.core.concat.call(null," S",cljs.core.interpose.call(null,",",cp1)," ",cljs.core.interpose.call(null,",",p2));
});})(vec__1888443,map__1888444,map__1888444__$1,first_point,vec__1888445,fpx,fpy,vec__1888446,vec__1888447,fcx,fcy,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_closed_svg_path = (function dynomics$ui$svg$to_closed_svg_path(p__1888457){
var vec__1888472 = p__1888457;
var map__1888473 = cljs.core.nth.call(null,vec__1888472,(0),null);
var map__1888473__$1 = ((((!((map__1888473 == null)))?((((map__1888473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888473):map__1888473);
var first_point = map__1888473__$1;
var vec__1888474 = cljs.core.get.call(null,map__1888473__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__1888474,(0),null);
var fpy = cljs.core.nth.call(null,vec__1888474,(1),null);
var vec__1888475 = cljs.core.get.call(null,map__1888473__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__1888476 = cljs.core.nth.call(null,vec__1888475,(0),null);
var fcx = cljs.core.nth.call(null,vec__1888476,(0),null);
var fcy = cljs.core.nth.call(null,vec__1888476,(1),null);
var points = cljs.core.nthnext.call(null,vec__1888472,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__1888472,map__1888473,map__1888473__$1,first_point,vec__1888474,fpx,fpy,vec__1888475,vec__1888476,fcx,fcy,points){
return (function (p__1888478){
var vec__1888479 = p__1888478;
var map__1888480 = cljs.core.nth.call(null,vec__1888479,(0),null);
var map__1888480__$1 = ((((!((map__1888480 == null)))?((((map__1888480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888480):map__1888480);
var vec__1888481 = cljs.core.get.call(null,map__1888480__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__1888481,(0),null);
var cp12 = cljs.core.nth.call(null,vec__1888481,(1),null);
var map__1888482 = cljs.core.nth.call(null,vec__1888479,(1),null);
var map__1888482__$1 = ((((!((map__1888482 == null)))?((((map__1888482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888482):map__1888482);
var vec__1888483 = cljs.core.get.call(null,map__1888482__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__1888483,(0),null);
var cp22 = cljs.core.nth.call(null,vec__1888483,(1),null);
var p2 = cljs.core.get.call(null,map__1888482__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__1888472,map__1888473,map__1888473__$1,first_point,vec__1888474,fpx,fpy,vec__1888475,vec__1888476,fcx,fcy,points))
,cljs.core.partition.call(null,(2),cljs.core.cons.call(null,first_point,points)))));
});

//# sourceMappingURL=svg.js.map