// Compiled by ClojureScript 1.8.34 {}
goog.provide('dynomics.ui.svg');
goog.require('cljs.core');
/**
 * Returns an SVG transform string from the given list e.g. (trs :t [0.1 0.2] :s [0.5 0.5] :r [1.0])
 */
dynomics.ui.svg.trs = (function dynomics$ui$svg$trs(var_args){
var args__36267__auto__ = [];
var len__36260__auto___450885 = arguments.length;
var i__36261__auto___450886 = (0);
while(true){
if((i__36261__auto___450886 < len__36260__auto___450885)){
args__36267__auto__.push((arguments[i__36261__auto___450886]));

var G__450889 = (i__36261__auto___450886 + (1));
i__36261__auto___450886 = G__450889;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((0) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((0)),(0),null)):null);
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(argseq__36268__auto__);
});

dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic = (function (transforms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p__450882){
var vec__450883 = p__450882;
var k = cljs.core.nth.call(null,vec__450883,(0),null);
var p = cljs.core.nthnext.call(null,vec__450883,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),"translate",new cljs.core.Keyword(null,"r","r",-471384190),"rotate",new cljs.core.Keyword(null,"s","s",1705939918),"scale"], null).call(null,k),"(",cljs.core.interpose.call(null,",",cljs.core.map.call(null,cljs.core.double$,p)),") ");
}),transforms));
});

dynomics.ui.svg.trs.cljs$lang$maxFixedArity = (0);

dynomics.ui.svg.trs.cljs$lang$applyTo = (function (seq450877){
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq450877));
});
dynomics.ui.svg.make_bezier_point = (function dynomics$ui$svg$make_bezier_point(var_args){
var args450890 = [];
var len__36260__auto___450907 = arguments.length;
var i__36261__auto___450908 = (0);
while(true){
if((i__36261__auto___450908 < len__36260__auto___450907)){
args450890.push((arguments[i__36261__auto___450908]));

var G__450909 = (i__36261__auto___450908 + (1));
i__36261__auto___450908 = G__450909;
continue;
} else {
}
break;
}

var G__450894 = args450890.length;
switch (G__450894) {
case 1:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args450890.length)].join('')));

}
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1 = (function (p__450901){
var vec__450902 = p__450901;
var point = cljs.core.nth.call(null,vec__450902,(0),null);
var control_points = cljs.core.nthnext.call(null,vec__450902,(1));
return dynomics.ui.svg.make_bezier_point.call(null,point,control_points);
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2 = (function (point,control_points){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),point,new cljs.core.Keyword(null,"control-points","control-points",-238538325),control_points], null);
});

dynomics.ui.svg.make_bezier_point.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_beziers = (function dynomics$ui$svg$to_beziers(var_args){
var args450916 = [];
var len__36260__auto___450930 = arguments.length;
var i__36261__auto___450931 = (0);
while(true){
if((i__36261__auto___450931 < len__36260__auto___450930)){
args450916.push((arguments[i__36261__auto___450931]));

var G__450933 = (i__36261__auto___450931 + (1));
i__36261__auto___450931 = G__450933;
continue;
} else {
}
break;
}

var G__450922 = args450916.length;
switch (G__450922) {
case 1:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args450916.length)].join('')));

}
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1 = (function (nodes){
return dynomics.ui.svg.to_beziers.call(null,nodes,cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2 = (function (nodes,control_point_ids){
return cljs.core.map.call(null,(function (p__450924,cpids){
var map__450925 = p__450924;
var map__450925__$1 = ((((!((map__450925 == null)))?((((map__450925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__450925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__450925):map__450925);
var p = cljs.core.get.call(null,map__450925__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var cp = cljs.core.get.call(null,map__450925__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return dynomics.ui.svg.make_bezier_point.call(null,p,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,p),new cljs.core.Keyword(null,"position","position",-2011731912)),cljs.core.vals.call(null,cljs.core.select_keys.call(null,cp,cpids)))));
}),nodes,control_point_ids);
});

dynomics.ui.svg.to_beziers.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_svg_path = (function dynomics$ui$svg$to_svg_path(p__450958){
var vec__450977 = p__450958;
var map__450978 = cljs.core.nth.call(null,vec__450977,(0),null);
var map__450978__$1 = ((((!((map__450978 == null)))?((((map__450978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__450978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__450978):map__450978);
var first_point = map__450978__$1;
var vec__450979 = cljs.core.get.call(null,map__450978__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__450979,(0),null);
var fpy = cljs.core.nth.call(null,vec__450979,(1),null);
var vec__450980 = cljs.core.get.call(null,map__450978__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__450981 = cljs.core.nth.call(null,vec__450980,(0),null);
var fcx = cljs.core.nth.call(null,vec__450981,(0),null);
var fcy = cljs.core.nth.call(null,vec__450981,(1),null);
var _ = cljs.core.nth.call(null,vec__450980,(1),null);
var ml = cljs.core.get.call(null,map__450978__$1,new cljs.core.Keyword(null,"ml","ml",1909675057),"M");
var points = cljs.core.nthnext.call(null,vec__450977,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ml,fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__450977,map__450978,map__450978__$1,first_point,vec__450979,fpx,fpy,vec__450980,vec__450981,fcx,fcy,_,ml,points){
return (function (p__450985){
var vec__450986 = p__450985;
var map__450987 = cljs.core.nth.call(null,vec__450986,(0),null);
var map__450987__$1 = ((((!((map__450987 == null)))?((((map__450987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__450987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__450987):map__450987);
var vec__450988 = cljs.core.get.call(null,map__450987__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__450988,(0),null);
var cp12 = cljs.core.nth.call(null,vec__450988,(1),null);
var map__450989 = cljs.core.nth.call(null,vec__450986,(1),null);
var map__450989__$1 = ((((!((map__450989 == null)))?((((map__450989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__450989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__450989):map__450989);
var vec__450990 = cljs.core.get.call(null,map__450989__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__450990,(0),null);
var cp22 = cljs.core.nth.call(null,vec__450990,(1),null);
var p2 = cljs.core.get.call(null,map__450989__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp12)," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__450977,map__450978,map__450978__$1,first_point,vec__450979,fpx,fpy,vec__450980,vec__450981,fcx,fcy,_,ml,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_smooth_svg_path = (function dynomics$ui$svg$to_smooth_svg_path(p__451032){
var vec__451050 = p__451032;
var map__451051 = cljs.core.nth.call(null,vec__451050,(0),null);
var map__451051__$1 = ((((!((map__451051 == null)))?((((map__451051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451051):map__451051);
var first_point = map__451051__$1;
var vec__451052 = cljs.core.get.call(null,map__451051__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__451052,(0),null);
var fpy = cljs.core.nth.call(null,vec__451052,(1),null);
var vec__451053 = cljs.core.get.call(null,map__451051__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__451054 = cljs.core.nth.call(null,vec__451053,(0),null);
var fcx = cljs.core.nth.call(null,vec__451054,(0),null);
var fcy = cljs.core.nth.call(null,vec__451054,(1),null);
var points = cljs.core.nthnext.call(null,vec__451050,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__451050,map__451051,map__451051__$1,first_point,vec__451052,fpx,fpy,vec__451053,vec__451054,fcx,fcy,points){
return (function (p__451060){
var vec__451061 = p__451060;
var map__451062 = cljs.core.nth.call(null,vec__451061,(0),null);
var map__451062__$1 = ((((!((map__451062 == null)))?((((map__451062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451062):map__451062);
var vec__451063 = cljs.core.get.call(null,map__451062__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var _ = cljs.core.nth.call(null,vec__451063,(0),null);
var cp1 = cljs.core.nth.call(null,vec__451063,(1),null);
var map__451064 = cljs.core.nth.call(null,vec__451061,(1),null);
var map__451064__$1 = ((((!((map__451064 == null)))?((((map__451064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451064):map__451064);
var vec__451065 = cljs.core.get.call(null,map__451064__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp2 = cljs.core.nth.call(null,vec__451065,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__451065,(1),null);
var p2 = cljs.core.get.call(null,map__451064__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return cljs.core.concat.call(null," Q",cljs.core.interpose.call(null,",",cp1)," ",cljs.core.interpose.call(null,",",p2));
});})(vec__451050,map__451051,map__451051__$1,first_point,vec__451052,fpx,fpy,vec__451053,vec__451054,fcx,fcy,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_closed_svg_path = (function dynomics$ui$svg$to_closed_svg_path(p__451088){
var vec__451114 = p__451088;
var map__451115 = cljs.core.nth.call(null,vec__451114,(0),null);
var map__451115__$1 = ((((!((map__451115 == null)))?((((map__451115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451115):map__451115);
var first_point = map__451115__$1;
var vec__451116 = cljs.core.get.call(null,map__451115__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__451116,(0),null);
var fpy = cljs.core.nth.call(null,vec__451116,(1),null);
var vec__451117 = cljs.core.get.call(null,map__451115__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__451118 = cljs.core.nth.call(null,vec__451117,(0),null);
var fcx = cljs.core.nth.call(null,vec__451118,(0),null);
var fcy = cljs.core.nth.call(null,vec__451118,(1),null);
var points = cljs.core.nthnext.call(null,vec__451114,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__451114,map__451115,map__451115__$1,first_point,vec__451116,fpx,fpy,vec__451117,vec__451118,fcx,fcy,points){
return (function (p__451122){
var vec__451123 = p__451122;
var map__451124 = cljs.core.nth.call(null,vec__451123,(0),null);
var map__451124__$1 = ((((!((map__451124 == null)))?((((map__451124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451124):map__451124);
var vec__451125 = cljs.core.get.call(null,map__451124__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__451125,(0),null);
var cp12 = cljs.core.nth.call(null,vec__451125,(1),null);
var map__451126 = cljs.core.nth.call(null,vec__451123,(1),null);
var map__451126__$1 = ((((!((map__451126 == null)))?((((map__451126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451126):map__451126);
var vec__451127 = cljs.core.get.call(null,map__451126__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__451127,(0),null);
var cp22 = cljs.core.nth.call(null,vec__451127,(1),null);
var p2 = cljs.core.get.call(null,map__451126__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__451114,map__451115,map__451115__$1,first_point,vec__451116,fpx,fpy,vec__451117,vec__451118,fcx,fcy,points))
,cljs.core.partition.call(null,(2),cljs.core.cons.call(null,first_point,points)))));
});
