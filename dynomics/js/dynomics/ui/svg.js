// Compiled by ClojureScript 1.8.40 {}
goog.provide('dynomics.ui.svg');
goog.require('cljs.core');
/**
 * Returns an SVG transform string from the given list e.g. (trs :t [0.1 0.2] :s [0.5 0.5] :r [1.0])
 */
dynomics.ui.svg.trs = (function dynomics$ui$svg$trs(var_args){
var args__36468__auto__ = [];
var len__36461__auto___97382 = arguments.length;
var i__36462__auto___97384 = (0);
while(true){
if((i__36462__auto___97384 < len__36461__auto___97382)){
args__36468__auto__.push((arguments[i__36462__auto___97384]));

var G__97387 = (i__36462__auto___97384 + (1));
i__36462__auto___97384 = G__97387;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((0) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((0)),(0),null)):null);
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(argseq__36469__auto__);
});

dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic = (function (transforms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p__97377){
var vec__97378 = p__97377;
var k = cljs.core.nth.call(null,vec__97378,(0),null);
var p = cljs.core.nthnext.call(null,vec__97378,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),"translate",new cljs.core.Keyword(null,"r","r",-471384190),"rotate",new cljs.core.Keyword(null,"s","s",1705939918),"scale"], null).call(null,k),"(",cljs.core.interpose.call(null,",",cljs.core.map.call(null,cljs.core.double$,p)),") ");
}),transforms));
});

dynomics.ui.svg.trs.cljs$lang$maxFixedArity = (0);

dynomics.ui.svg.trs.cljs$lang$applyTo = (function (seq97331){
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq97331));
});
dynomics.ui.svg.make_bezier_point = (function dynomics$ui$svg$make_bezier_point(var_args){
var args97409 = [];
var len__36461__auto___97414 = arguments.length;
var i__36462__auto___97415 = (0);
while(true){
if((i__36462__auto___97415 < len__36461__auto___97414)){
args97409.push((arguments[i__36462__auto___97415]));

var G__97416 = (i__36462__auto___97415 + (1));
i__36462__auto___97415 = G__97416;
continue;
} else {
}
break;
}

var G__97411 = args97409.length;
switch (G__97411) {
case 1:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args97409.length)].join('')));

}
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1 = (function (p__97412){
var vec__97413 = p__97412;
var point = cljs.core.nth.call(null,vec__97413,(0),null);
var control_points = cljs.core.nthnext.call(null,vec__97413,(1));
return dynomics.ui.svg.make_bezier_point.call(null,point,control_points);
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2 = (function (point,control_points){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),point,new cljs.core.Keyword(null,"control-points","control-points",-238538325),control_points], null);
});

dynomics.ui.svg.make_bezier_point.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_beziers = (function dynomics$ui$svg$to_beziers(var_args){
var args97421 = [];
var len__36461__auto___97427 = arguments.length;
var i__36462__auto___97428 = (0);
while(true){
if((i__36462__auto___97428 < len__36461__auto___97427)){
args97421.push((arguments[i__36462__auto___97428]));

var G__97429 = (i__36462__auto___97428 + (1));
i__36462__auto___97428 = G__97429;
continue;
} else {
}
break;
}

var G__97423 = args97421.length;
switch (G__97423) {
case 1:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args97421.length)].join('')));

}
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1 = (function (nodes){
return dynomics.ui.svg.to_beziers.call(null,nodes,cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2 = (function (nodes,control_point_ids){
return cljs.core.map.call(null,(function (p__97424,cpids){
var map__97425 = p__97424;
var map__97425__$1 = ((((!((map__97425 == null)))?((((map__97425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__97425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97425):map__97425);
var p = cljs.core.get.call(null,map__97425__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var cp = cljs.core.get.call(null,map__97425__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return dynomics.ui.svg.make_bezier_point.call(null,p,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,p),new cljs.core.Keyword(null,"position","position",-2011731912)),cljs.core.vals.call(null,cljs.core.select_keys.call(null,cp,cpids)))));
}),nodes,control_point_ids);
});

dynomics.ui.svg.to_beziers.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_svg_path = (function dynomics$ui$svg$to_svg_path(p__97431){
var vec__97450 = p__97431;
var map__97451 = cljs.core.nth.call(null,vec__97450,(0),null);
var map__97451__$1 = ((((!((map__97451 == null)))?((((map__97451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__97451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97451):map__97451);
var first_point = map__97451__$1;
var vec__97452 = cljs.core.get.call(null,map__97451__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__97452,(0),null);
var fpy = cljs.core.nth.call(null,vec__97452,(1),null);
var vec__97453 = cljs.core.get.call(null,map__97451__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__97454 = cljs.core.nth.call(null,vec__97453,(0),null);
var fcx = cljs.core.nth.call(null,vec__97454,(0),null);
var fcy = cljs.core.nth.call(null,vec__97454,(1),null);
var _ = cljs.core.nth.call(null,vec__97453,(1),null);
var ml = cljs.core.get.call(null,map__97451__$1,new cljs.core.Keyword(null,"ml","ml",1909675057),"M");
var points = cljs.core.nthnext.call(null,vec__97450,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ml,fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__97450,map__97451,map__97451__$1,first_point,vec__97452,fpx,fpy,vec__97453,vec__97454,fcx,fcy,_,ml,points){
return (function (p__97456){
var vec__97457 = p__97456;
var map__97458 = cljs.core.nth.call(null,vec__97457,(0),null);
var map__97458__$1 = ((((!((map__97458 == null)))?((((map__97458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__97458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97458):map__97458);
var vec__97459 = cljs.core.get.call(null,map__97458__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__97459,(0),null);
var cp12 = cljs.core.nth.call(null,vec__97459,(1),null);
var map__97460 = cljs.core.nth.call(null,vec__97457,(1),null);
var map__97460__$1 = ((((!((map__97460 == null)))?((((map__97460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__97460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97460):map__97460);
var vec__97461 = cljs.core.get.call(null,map__97460__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__97461,(0),null);
var cp22 = cljs.core.nth.call(null,vec__97461,(1),null);
var p2 = cljs.core.get.call(null,map__97460__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp12)," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__97450,map__97451,map__97451__$1,first_point,vec__97452,fpx,fpy,vec__97453,vec__97454,fcx,fcy,_,ml,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_smooth_svg_path = (function dynomics$ui$svg$to_smooth_svg_path(p__97536){
var vec__97557 = p__97536;
var map__97558 = cljs.core.nth.call(null,vec__97557,(0),null);
var map__97558__$1 = ((((!((map__97558 == null)))?((((map__97558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__97558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97558):map__97558);
var first_point = map__97558__$1;
var vec__97559 = cljs.core.get.call(null,map__97558__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__97559,(0),null);
var fpy = cljs.core.nth.call(null,vec__97559,(1),null);
var vec__97560 = cljs.core.get.call(null,map__97558__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__97561 = cljs.core.nth.call(null,vec__97560,(0),null);
var fcx = cljs.core.nth.call(null,vec__97561,(0),null);
var fcy = cljs.core.nth.call(null,vec__97561,(1),null);
var points = cljs.core.nthnext.call(null,vec__97557,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__97557,map__97558,map__97558__$1,first_point,vec__97559,fpx,fpy,vec__97560,vec__97561,fcx,fcy,points){
return (function (p__97565){
var vec__97566 = p__97565;
var map__97567 = cljs.core.nth.call(null,vec__97566,(0),null);
var map__97567__$1 = ((((!((map__97567 == null)))?((((map__97567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__97567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97567):map__97567);
var vec__97568 = cljs.core.get.call(null,map__97567__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var _ = cljs.core.nth.call(null,vec__97568,(0),null);
var cp1 = cljs.core.nth.call(null,vec__97568,(1),null);
var map__97569 = cljs.core.nth.call(null,vec__97566,(1),null);
var map__97569__$1 = ((((!((map__97569 == null)))?((((map__97569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__97569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97569):map__97569);
var vec__97570 = cljs.core.get.call(null,map__97569__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp2 = cljs.core.nth.call(null,vec__97570,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__97570,(1),null);
var p2 = cljs.core.get.call(null,map__97569__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return cljs.core.concat.call(null," Q",cljs.core.interpose.call(null,",",cp1)," ",cljs.core.interpose.call(null,",",p2));
});})(vec__97557,map__97558,map__97558__$1,first_point,vec__97559,fpx,fpy,vec__97560,vec__97561,fcx,fcy,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_closed_svg_path = (function dynomics$ui$svg$to_closed_svg_path(p__97588){
var vec__97617 = p__97588;
var map__97618 = cljs.core.nth.call(null,vec__97617,(0),null);
var map__97618__$1 = ((((!((map__97618 == null)))?((((map__97618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__97618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97618):map__97618);
var first_point = map__97618__$1;
var vec__97619 = cljs.core.get.call(null,map__97618__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__97619,(0),null);
var fpy = cljs.core.nth.call(null,vec__97619,(1),null);
var vec__97620 = cljs.core.get.call(null,map__97618__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__97621 = cljs.core.nth.call(null,vec__97620,(0),null);
var fcx = cljs.core.nth.call(null,vec__97621,(0),null);
var fcy = cljs.core.nth.call(null,vec__97621,(1),null);
var points = cljs.core.nthnext.call(null,vec__97617,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__97617,map__97618,map__97618__$1,first_point,vec__97619,fpx,fpy,vec__97620,vec__97621,fcx,fcy,points){
return (function (p__97623){
var vec__97624 = p__97623;
var map__97625 = cljs.core.nth.call(null,vec__97624,(0),null);
var map__97625__$1 = ((((!((map__97625 == null)))?((((map__97625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__97625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97625):map__97625);
var vec__97626 = cljs.core.get.call(null,map__97625__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__97626,(0),null);
var cp12 = cljs.core.nth.call(null,vec__97626,(1),null);
var map__97627 = cljs.core.nth.call(null,vec__97624,(1),null);
var map__97627__$1 = ((((!((map__97627 == null)))?((((map__97627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__97627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97627):map__97627);
var vec__97628 = cljs.core.get.call(null,map__97627__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__97628,(0),null);
var cp22 = cljs.core.nth.call(null,vec__97628,(1),null);
var p2 = cljs.core.get.call(null,map__97627__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__97617,map__97618,map__97618__$1,first_point,vec__97619,fpx,fpy,vec__97620,vec__97621,fcx,fcy,points))
,cljs.core.partition.call(null,(2),cljs.core.cons.call(null,first_point,points)))));
});
