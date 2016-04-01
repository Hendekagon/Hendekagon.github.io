// Compiled by ClojureScript 1.8.40 {}
goog.provide('dynomics.ui.svg');
goog.require('cljs.core');
/**
 * Returns an SVG transform string from the given list e.g. (trs :t [0.1 0.2] :s [0.5 0.5] :r [1.0])
 */
dynomics.ui.svg.trs = (function dynomics$ui$svg$trs(var_args){
var args__36498__auto__ = [];
var len__36491__auto___86628 = arguments.length;
var i__36492__auto___86629 = (0);
while(true){
if((i__36492__auto___86629 < len__36491__auto___86628)){
args__36498__auto__.push((arguments[i__36492__auto___86629]));

var G__86630 = (i__36492__auto___86629 + (1));
i__36492__auto___86629 = G__86630;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((0) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((0)),(0),null)):null);
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(argseq__36499__auto__);
});

dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic = (function (transforms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p__86624){
var vec__86625 = p__86624;
var k = cljs.core.nth.call(null,vec__86625,(0),null);
var p = cljs.core.nthnext.call(null,vec__86625,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),"translate",new cljs.core.Keyword(null,"r","r",-471384190),"rotate",new cljs.core.Keyword(null,"s","s",1705939918),"scale"], null).call(null,k),"(",cljs.core.interpose.call(null,",",cljs.core.map.call(null,cljs.core.double$,p)),") ");
}),transforms));
});

dynomics.ui.svg.trs.cljs$lang$maxFixedArity = (0);

dynomics.ui.svg.trs.cljs$lang$applyTo = (function (seq86623){
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86623));
});
dynomics.ui.svg.make_bezier_point = (function dynomics$ui$svg$make_bezier_point(var_args){
var args86641 = [];
var len__36491__auto___86648 = arguments.length;
var i__36492__auto___86649 = (0);
while(true){
if((i__36492__auto___86649 < len__36491__auto___86648)){
args86641.push((arguments[i__36492__auto___86649]));

var G__86650 = (i__36492__auto___86649 + (1));
i__36492__auto___86649 = G__86650;
continue;
} else {
}
break;
}

var G__86644 = args86641.length;
switch (G__86644) {
case 1:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86641.length)].join('')));

}
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1 = (function (p__86646){
var vec__86647 = p__86646;
var point = cljs.core.nth.call(null,vec__86647,(0),null);
var control_points = cljs.core.nthnext.call(null,vec__86647,(1));
return dynomics.ui.svg.make_bezier_point.call(null,point,control_points);
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2 = (function (point,control_points){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),point,new cljs.core.Keyword(null,"control-points","control-points",-238538325),control_points], null);
});

dynomics.ui.svg.make_bezier_point.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_beziers = (function dynomics$ui$svg$to_beziers(var_args){
var args86680 = [];
var len__36491__auto___86690 = arguments.length;
var i__36492__auto___86723 = (0);
while(true){
if((i__36492__auto___86723 < len__36491__auto___86690)){
args86680.push((arguments[i__36492__auto___86723]));

var G__86724 = (i__36492__auto___86723 + (1));
i__36492__auto___86723 = G__86724;
continue;
} else {
}
break;
}

var G__86685 = args86680.length;
switch (G__86685) {
case 1:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86680.length)].join('')));

}
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1 = (function (nodes){
return dynomics.ui.svg.to_beziers.call(null,nodes,cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2 = (function (nodes,control_point_ids){
return cljs.core.map.call(null,(function (p__86687,cpids){
var map__86688 = p__86687;
var map__86688__$1 = ((((!((map__86688 == null)))?((((map__86688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86688):map__86688);
var p = cljs.core.get.call(null,map__86688__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var cp = cljs.core.get.call(null,map__86688__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return dynomics.ui.svg.make_bezier_point.call(null,p,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,p),new cljs.core.Keyword(null,"position","position",-2011731912)),cljs.core.vals.call(null,cljs.core.select_keys.call(null,cp,cpids)))));
}),nodes,control_point_ids);
});

dynomics.ui.svg.to_beziers.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_svg_path = (function dynomics$ui$svg$to_svg_path(p__86730){
var vec__86748 = p__86730;
var map__86749 = cljs.core.nth.call(null,vec__86748,(0),null);
var map__86749__$1 = ((((!((map__86749 == null)))?((((map__86749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86749):map__86749);
var first_point = map__86749__$1;
var vec__86750 = cljs.core.get.call(null,map__86749__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__86750,(0),null);
var fpy = cljs.core.nth.call(null,vec__86750,(1),null);
var vec__86751 = cljs.core.get.call(null,map__86749__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__86752 = cljs.core.nth.call(null,vec__86751,(0),null);
var fcx = cljs.core.nth.call(null,vec__86752,(0),null);
var fcy = cljs.core.nth.call(null,vec__86752,(1),null);
var _ = cljs.core.nth.call(null,vec__86751,(1),null);
var ml = cljs.core.get.call(null,map__86749__$1,new cljs.core.Keyword(null,"ml","ml",1909675057),"M");
var points = cljs.core.nthnext.call(null,vec__86748,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ml,fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__86748,map__86749,map__86749__$1,first_point,vec__86750,fpx,fpy,vec__86751,vec__86752,fcx,fcy,_,ml,points){
return (function (p__86754){
var vec__86755 = p__86754;
var map__86756 = cljs.core.nth.call(null,vec__86755,(0),null);
var map__86756__$1 = ((((!((map__86756 == null)))?((((map__86756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86756):map__86756);
var vec__86757 = cljs.core.get.call(null,map__86756__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__86757,(0),null);
var cp12 = cljs.core.nth.call(null,vec__86757,(1),null);
var map__86758 = cljs.core.nth.call(null,vec__86755,(1),null);
var map__86758__$1 = ((((!((map__86758 == null)))?((((map__86758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86758):map__86758);
var vec__86759 = cljs.core.get.call(null,map__86758__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__86759,(0),null);
var cp22 = cljs.core.nth.call(null,vec__86759,(1),null);
var p2 = cljs.core.get.call(null,map__86758__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp12)," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__86748,map__86749,map__86749__$1,first_point,vec__86750,fpx,fpy,vec__86751,vec__86752,fcx,fcy,_,ml,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_smooth_svg_path = (function dynomics$ui$svg$to_smooth_svg_path(p__86819){
var vec__86836 = p__86819;
var map__86837 = cljs.core.nth.call(null,vec__86836,(0),null);
var map__86837__$1 = ((((!((map__86837 == null)))?((((map__86837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86837):map__86837);
var first_point = map__86837__$1;
var vec__86838 = cljs.core.get.call(null,map__86837__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__86838,(0),null);
var fpy = cljs.core.nth.call(null,vec__86838,(1),null);
var vec__86839 = cljs.core.get.call(null,map__86837__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__86840 = cljs.core.nth.call(null,vec__86839,(0),null);
var fcx = cljs.core.nth.call(null,vec__86840,(0),null);
var fcy = cljs.core.nth.call(null,vec__86840,(1),null);
var points = cljs.core.nthnext.call(null,vec__86836,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__86836,map__86837,map__86837__$1,first_point,vec__86838,fpx,fpy,vec__86839,vec__86840,fcx,fcy,points){
return (function (p__86844){
var vec__86846 = p__86844;
var map__86847 = cljs.core.nth.call(null,vec__86846,(0),null);
var map__86847__$1 = ((((!((map__86847 == null)))?((((map__86847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86847):map__86847);
var vec__86848 = cljs.core.get.call(null,map__86847__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var _ = cljs.core.nth.call(null,vec__86848,(0),null);
var cp1 = cljs.core.nth.call(null,vec__86848,(1),null);
var map__86849 = cljs.core.nth.call(null,vec__86846,(1),null);
var map__86849__$1 = ((((!((map__86849 == null)))?((((map__86849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86849):map__86849);
var vec__86850 = cljs.core.get.call(null,map__86849__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp2 = cljs.core.nth.call(null,vec__86850,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__86850,(1),null);
var p2 = cljs.core.get.call(null,map__86849__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return cljs.core.concat.call(null," Q",cljs.core.interpose.call(null,",",cp1)," ",cljs.core.interpose.call(null,",",p2));
});})(vec__86836,map__86837,map__86837__$1,first_point,vec__86838,fpx,fpy,vec__86839,vec__86840,fcx,fcy,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_closed_svg_path = (function dynomics$ui$svg$to_closed_svg_path(p__86880){
var vec__86902 = p__86880;
var map__86903 = cljs.core.nth.call(null,vec__86902,(0),null);
var map__86903__$1 = ((((!((map__86903 == null)))?((((map__86903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86903):map__86903);
var first_point = map__86903__$1;
var vec__86904 = cljs.core.get.call(null,map__86903__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__86904,(0),null);
var fpy = cljs.core.nth.call(null,vec__86904,(1),null);
var vec__86905 = cljs.core.get.call(null,map__86903__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__86906 = cljs.core.nth.call(null,vec__86905,(0),null);
var fcx = cljs.core.nth.call(null,vec__86906,(0),null);
var fcy = cljs.core.nth.call(null,vec__86906,(1),null);
var points = cljs.core.nthnext.call(null,vec__86902,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__86902,map__86903,map__86903__$1,first_point,vec__86904,fpx,fpy,vec__86905,vec__86906,fcx,fcy,points){
return (function (p__86908){
var vec__86909 = p__86908;
var map__86910 = cljs.core.nth.call(null,vec__86909,(0),null);
var map__86910__$1 = ((((!((map__86910 == null)))?((((map__86910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86910):map__86910);
var vec__86911 = cljs.core.get.call(null,map__86910__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__86911,(0),null);
var cp12 = cljs.core.nth.call(null,vec__86911,(1),null);
var map__86912 = cljs.core.nth.call(null,vec__86909,(1),null);
var map__86912__$1 = ((((!((map__86912 == null)))?((((map__86912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86912):map__86912);
var vec__86913 = cljs.core.get.call(null,map__86912__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__86913,(0),null);
var cp22 = cljs.core.nth.call(null,vec__86913,(1),null);
var p2 = cljs.core.get.call(null,map__86912__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__86902,map__86903,map__86903__$1,first_point,vec__86904,fpx,fpy,vec__86905,vec__86906,fcx,fcy,points))
,cljs.core.partition.call(null,(2),cljs.core.cons.call(null,first_point,points)))));
});
