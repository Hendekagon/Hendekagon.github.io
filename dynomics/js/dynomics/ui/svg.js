// Compiled by ClojureScript 1.8.40 {}
goog.provide('dynomics.ui.svg');
goog.require('cljs.core');
/**
 * Returns an SVG transform string from the given list e.g. (trs :t [0.1 0.2] :s [0.5 0.5] :r [1.0])
 */
dynomics.ui.svg.trs = (function dynomics$ui$svg$trs(var_args){
var args__36468__auto__ = [];
var len__36461__auto___285862 = arguments.length;
var i__36462__auto___285863 = (0);
while(true){
if((i__36462__auto___285863 < len__36461__auto___285862)){
args__36468__auto__.push((arguments[i__36462__auto___285863]));

var G__285864 = (i__36462__auto___285863 + (1));
i__36462__auto___285863 = G__285864;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((0) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((0)),(0),null)):null);
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(argseq__36469__auto__);
});

dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic = (function (transforms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p__285859){
var vec__285860 = p__285859;
var k = cljs.core.nth.call(null,vec__285860,(0),null);
var p = cljs.core.nthnext.call(null,vec__285860,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),"translate",new cljs.core.Keyword(null,"r","r",-471384190),"rotate",new cljs.core.Keyword(null,"s","s",1705939918),"scale"], null).call(null,k),"(",cljs.core.interpose.call(null,",",cljs.core.map.call(null,cljs.core.double$,p)),") ");
}),transforms));
});

dynomics.ui.svg.trs.cljs$lang$maxFixedArity = (0);

dynomics.ui.svg.trs.cljs$lang$applyTo = (function (seq285855){
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq285855));
});
dynomics.ui.svg.make_bezier_point = (function dynomics$ui$svg$make_bezier_point(var_args){
var args285869 = [];
var len__36461__auto___285878 = arguments.length;
var i__36462__auto___285879 = (0);
while(true){
if((i__36462__auto___285879 < len__36461__auto___285878)){
args285869.push((arguments[i__36462__auto___285879]));

var G__285881 = (i__36462__auto___285879 + (1));
i__36462__auto___285879 = G__285881;
continue;
} else {
}
break;
}

var G__285871 = args285869.length;
switch (G__285871) {
case 1:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args285869.length)].join('')));

}
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1 = (function (p__285874){
var vec__285875 = p__285874;
var point = cljs.core.nth.call(null,vec__285875,(0),null);
var control_points = cljs.core.nthnext.call(null,vec__285875,(1));
return dynomics.ui.svg.make_bezier_point.call(null,point,control_points);
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2 = (function (point,control_points){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),point,new cljs.core.Keyword(null,"control-points","control-points",-238538325),control_points], null);
});

dynomics.ui.svg.make_bezier_point.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_beziers = (function dynomics$ui$svg$to_beziers(var_args){
var args285886 = [];
var len__36461__auto___285904 = arguments.length;
var i__36462__auto___285906 = (0);
while(true){
if((i__36462__auto___285906 < len__36461__auto___285904)){
args285886.push((arguments[i__36462__auto___285906]));

var G__285908 = (i__36462__auto___285906 + (1));
i__36462__auto___285906 = G__285908;
continue;
} else {
}
break;
}

var G__285894 = args285886.length;
switch (G__285894) {
case 1:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args285886.length)].join('')));

}
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1 = (function (nodes){
return dynomics.ui.svg.to_beziers.call(null,nodes,cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2 = (function (nodes,control_point_ids){
return cljs.core.map.call(null,(function (p__285896,cpids){
var map__285897 = p__285896;
var map__285897__$1 = ((((!((map__285897 == null)))?((((map__285897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285897):map__285897);
var p = cljs.core.get.call(null,map__285897__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var cp = cljs.core.get.call(null,map__285897__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return dynomics.ui.svg.make_bezier_point.call(null,p,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,p),new cljs.core.Keyword(null,"position","position",-2011731912)),cljs.core.vals.call(null,cljs.core.select_keys.call(null,cp,cpids)))));
}),nodes,control_point_ids);
});

dynomics.ui.svg.to_beziers.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_svg_path = (function dynomics$ui$svg$to_svg_path(p__285920){
var vec__285945 = p__285920;
var map__285946 = cljs.core.nth.call(null,vec__285945,(0),null);
var map__285946__$1 = ((((!((map__285946 == null)))?((((map__285946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285946):map__285946);
var first_point = map__285946__$1;
var vec__285947 = cljs.core.get.call(null,map__285946__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__285947,(0),null);
var fpy = cljs.core.nth.call(null,vec__285947,(1),null);
var vec__285948 = cljs.core.get.call(null,map__285946__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__285949 = cljs.core.nth.call(null,vec__285948,(0),null);
var fcx = cljs.core.nth.call(null,vec__285949,(0),null);
var fcy = cljs.core.nth.call(null,vec__285949,(1),null);
var _ = cljs.core.nth.call(null,vec__285948,(1),null);
var ml = cljs.core.get.call(null,map__285946__$1,new cljs.core.Keyword(null,"ml","ml",1909675057),"M");
var points = cljs.core.nthnext.call(null,vec__285945,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ml,fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__285945,map__285946,map__285946__$1,first_point,vec__285947,fpx,fpy,vec__285948,vec__285949,fcx,fcy,_,ml,points){
return (function (p__285955){
var vec__285956 = p__285955;
var map__285957 = cljs.core.nth.call(null,vec__285956,(0),null);
var map__285957__$1 = ((((!((map__285957 == null)))?((((map__285957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285957):map__285957);
var vec__285958 = cljs.core.get.call(null,map__285957__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__285958,(0),null);
var cp12 = cljs.core.nth.call(null,vec__285958,(1),null);
var map__285959 = cljs.core.nth.call(null,vec__285956,(1),null);
var map__285959__$1 = ((((!((map__285959 == null)))?((((map__285959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__285959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285959):map__285959);
var vec__285960 = cljs.core.get.call(null,map__285959__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__285960,(0),null);
var cp22 = cljs.core.nth.call(null,vec__285960,(1),null);
var p2 = cljs.core.get.call(null,map__285959__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp12)," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__285945,map__285946,map__285946__$1,first_point,vec__285947,fpx,fpy,vec__285948,vec__285949,fcx,fcy,_,ml,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_smooth_svg_path = (function dynomics$ui$svg$to_smooth_svg_path(p__285985){
var vec__286005 = p__285985;
var map__286006 = cljs.core.nth.call(null,vec__286005,(0),null);
var map__286006__$1 = ((((!((map__286006 == null)))?((((map__286006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__286006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__286006):map__286006);
var first_point = map__286006__$1;
var vec__286007 = cljs.core.get.call(null,map__286006__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__286007,(0),null);
var fpy = cljs.core.nth.call(null,vec__286007,(1),null);
var vec__286008 = cljs.core.get.call(null,map__286006__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__286009 = cljs.core.nth.call(null,vec__286008,(0),null);
var fcx = cljs.core.nth.call(null,vec__286009,(0),null);
var fcy = cljs.core.nth.call(null,vec__286009,(1),null);
var points = cljs.core.nthnext.call(null,vec__286005,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__286005,map__286006,map__286006__$1,first_point,vec__286007,fpx,fpy,vec__286008,vec__286009,fcx,fcy,points){
return (function (p__286018){
var vec__286029 = p__286018;
var map__286030 = cljs.core.nth.call(null,vec__286029,(0),null);
var map__286030__$1 = ((((!((map__286030 == null)))?((((map__286030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__286030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__286030):map__286030);
var vec__286031 = cljs.core.get.call(null,map__286030__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var _ = cljs.core.nth.call(null,vec__286031,(0),null);
var cp1 = cljs.core.nth.call(null,vec__286031,(1),null);
var map__286032 = cljs.core.nth.call(null,vec__286029,(1),null);
var map__286032__$1 = ((((!((map__286032 == null)))?((((map__286032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__286032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__286032):map__286032);
var vec__286033 = cljs.core.get.call(null,map__286032__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp2 = cljs.core.nth.call(null,vec__286033,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__286033,(1),null);
var p2 = cljs.core.get.call(null,map__286032__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return cljs.core.concat.call(null," Q",cljs.core.interpose.call(null,",",cp1)," ",cljs.core.interpose.call(null,",",p2));
});})(vec__286005,map__286006,map__286006__$1,first_point,vec__286007,fpx,fpy,vec__286008,vec__286009,fcx,fcy,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_closed_svg_path = (function dynomics$ui$svg$to_closed_svg_path(p__286060){
var vec__286094 = p__286060;
var map__286095 = cljs.core.nth.call(null,vec__286094,(0),null);
var map__286095__$1 = ((((!((map__286095 == null)))?((((map__286095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__286095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__286095):map__286095);
var first_point = map__286095__$1;
var vec__286096 = cljs.core.get.call(null,map__286095__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__286096,(0),null);
var fpy = cljs.core.nth.call(null,vec__286096,(1),null);
var vec__286097 = cljs.core.get.call(null,map__286095__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__286098 = cljs.core.nth.call(null,vec__286097,(0),null);
var fcx = cljs.core.nth.call(null,vec__286098,(0),null);
var fcy = cljs.core.nth.call(null,vec__286098,(1),null);
var points = cljs.core.nthnext.call(null,vec__286094,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__286094,map__286095,map__286095__$1,first_point,vec__286096,fpx,fpy,vec__286097,vec__286098,fcx,fcy,points){
return (function (p__286100){
var vec__286101 = p__286100;
var map__286102 = cljs.core.nth.call(null,vec__286101,(0),null);
var map__286102__$1 = ((((!((map__286102 == null)))?((((map__286102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__286102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__286102):map__286102);
var vec__286103 = cljs.core.get.call(null,map__286102__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__286103,(0),null);
var cp12 = cljs.core.nth.call(null,vec__286103,(1),null);
var map__286104 = cljs.core.nth.call(null,vec__286101,(1),null);
var map__286104__$1 = ((((!((map__286104 == null)))?((((map__286104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__286104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__286104):map__286104);
var vec__286105 = cljs.core.get.call(null,map__286104__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__286105,(0),null);
var cp22 = cljs.core.nth.call(null,vec__286105,(1),null);
var p2 = cljs.core.get.call(null,map__286104__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__286094,map__286095,map__286095__$1,first_point,vec__286096,fpx,fpy,vec__286097,vec__286098,fcx,fcy,points))
,cljs.core.partition.call(null,(2),cljs.core.cons.call(null,first_point,points)))));
});
