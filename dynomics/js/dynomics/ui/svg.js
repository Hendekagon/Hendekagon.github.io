// Compiled by ClojureScript 1.8.34 {}
goog.provide('dynomics.ui.svg');
goog.require('cljs.core');
/**
 * Returns an SVG transform string from the given list e.g. (trs :t [0.1 0.2] :s [0.5 0.5] :r [1.0])
 */
dynomics.ui.svg.trs = (function dynomics$ui$svg$trs(var_args){
var args__36267__auto__ = [];
var len__36260__auto___284082 = arguments.length;
var i__36261__auto___284083 = (0);
while(true){
if((i__36261__auto___284083 < len__36260__auto___284082)){
args__36267__auto__.push((arguments[i__36261__auto___284083]));

var G__284086 = (i__36261__auto___284083 + (1));
i__36261__auto___284083 = G__284086;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((0) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((0)),(0),null)):null);
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(argseq__36268__auto__);
});

dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic = (function (transforms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p__284075){
var vec__284076 = p__284075;
var k = cljs.core.nth.call(null,vec__284076,(0),null);
var p = cljs.core.nthnext.call(null,vec__284076,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),"translate",new cljs.core.Keyword(null,"r","r",-471384190),"rotate",new cljs.core.Keyword(null,"s","s",1705939918),"scale"], null).call(null,k),"(",cljs.core.interpose.call(null,",",cljs.core.map.call(null,cljs.core.double$,p)),") ");
}),transforms));
});

dynomics.ui.svg.trs.cljs$lang$maxFixedArity = (0);

dynomics.ui.svg.trs.cljs$lang$applyTo = (function (seq284069){
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq284069));
});
dynomics.ui.svg.make_bezier_point = (function dynomics$ui$svg$make_bezier_point(var_args){
var args284091 = [];
var len__36260__auto___284116 = arguments.length;
var i__36261__auto___284117 = (0);
while(true){
if((i__36261__auto___284117 < len__36260__auto___284116)){
args284091.push((arguments[i__36261__auto___284117]));

var G__284118 = (i__36261__auto___284117 + (1));
i__36261__auto___284117 = G__284118;
continue;
} else {
}
break;
}

var G__284109 = args284091.length;
switch (G__284109) {
case 1:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args284091.length)].join('')));

}
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1 = (function (p__284111){
var vec__284112 = p__284111;
var point = cljs.core.nth.call(null,vec__284112,(0),null);
var control_points = cljs.core.nthnext.call(null,vec__284112,(1));
return dynomics.ui.svg.make_bezier_point.call(null,point,control_points);
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2 = (function (point,control_points){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),point,new cljs.core.Keyword(null,"control-points","control-points",-238538325),control_points], null);
});

dynomics.ui.svg.make_bezier_point.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_beziers = (function dynomics$ui$svg$to_beziers(var_args){
var args284129 = [];
var len__36260__auto___284147 = arguments.length;
var i__36261__auto___284148 = (0);
while(true){
if((i__36261__auto___284148 < len__36260__auto___284147)){
args284129.push((arguments[i__36261__auto___284148]));

var G__284155 = (i__36261__auto___284148 + (1));
i__36261__auto___284148 = G__284155;
continue;
} else {
}
break;
}

var G__284139 = args284129.length;
switch (G__284139) {
case 1:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args284129.length)].join('')));

}
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1 = (function (nodes){
return dynomics.ui.svg.to_beziers.call(null,nodes,cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2 = (function (nodes,control_point_ids){
return cljs.core.map.call(null,(function (p__284140,cpids){
var map__284141 = p__284140;
var map__284141__$1 = ((((!((map__284141 == null)))?((((map__284141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284141):map__284141);
var p = cljs.core.get.call(null,map__284141__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var cp = cljs.core.get.call(null,map__284141__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return dynomics.ui.svg.make_bezier_point.call(null,p,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,p),new cljs.core.Keyword(null,"position","position",-2011731912)),cljs.core.vals.call(null,cljs.core.select_keys.call(null,cp,cpids)))));
}),nodes,control_point_ids);
});

dynomics.ui.svg.to_beziers.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_svg_path = (function dynomics$ui$svg$to_svg_path(p__284196){
var vec__284218 = p__284196;
var map__284219 = cljs.core.nth.call(null,vec__284218,(0),null);
var map__284219__$1 = ((((!((map__284219 == null)))?((((map__284219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284219):map__284219);
var first_point = map__284219__$1;
var vec__284220 = cljs.core.get.call(null,map__284219__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__284220,(0),null);
var fpy = cljs.core.nth.call(null,vec__284220,(1),null);
var vec__284221 = cljs.core.get.call(null,map__284219__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__284222 = cljs.core.nth.call(null,vec__284221,(0),null);
var fcx = cljs.core.nth.call(null,vec__284222,(0),null);
var fcy = cljs.core.nth.call(null,vec__284222,(1),null);
var _ = cljs.core.nth.call(null,vec__284221,(1),null);
var ml = cljs.core.get.call(null,map__284219__$1,new cljs.core.Keyword(null,"ml","ml",1909675057),"M");
var points = cljs.core.nthnext.call(null,vec__284218,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ml,fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__284218,map__284219,map__284219__$1,first_point,vec__284220,fpx,fpy,vec__284221,vec__284222,fcx,fcy,_,ml,points){
return (function (p__284224){
var vec__284225 = p__284224;
var map__284226 = cljs.core.nth.call(null,vec__284225,(0),null);
var map__284226__$1 = ((((!((map__284226 == null)))?((((map__284226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284226):map__284226);
var vec__284227 = cljs.core.get.call(null,map__284226__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__284227,(0),null);
var cp12 = cljs.core.nth.call(null,vec__284227,(1),null);
var map__284228 = cljs.core.nth.call(null,vec__284225,(1),null);
var map__284228__$1 = ((((!((map__284228 == null)))?((((map__284228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284228):map__284228);
var vec__284229 = cljs.core.get.call(null,map__284228__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__284229,(0),null);
var cp22 = cljs.core.nth.call(null,vec__284229,(1),null);
var p2 = cljs.core.get.call(null,map__284228__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp12)," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__284218,map__284219,map__284219__$1,first_point,vec__284220,fpx,fpy,vec__284221,vec__284222,fcx,fcy,_,ml,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_smooth_svg_path = (function dynomics$ui$svg$to_smooth_svg_path(p__284254){
var vec__284273 = p__284254;
var map__284274 = cljs.core.nth.call(null,vec__284273,(0),null);
var map__284274__$1 = ((((!((map__284274 == null)))?((((map__284274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284274):map__284274);
var first_point = map__284274__$1;
var vec__284275 = cljs.core.get.call(null,map__284274__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__284275,(0),null);
var fpy = cljs.core.nth.call(null,vec__284275,(1),null);
var vec__284276 = cljs.core.get.call(null,map__284274__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__284277 = cljs.core.nth.call(null,vec__284276,(0),null);
var fcx = cljs.core.nth.call(null,vec__284277,(0),null);
var fcy = cljs.core.nth.call(null,vec__284277,(1),null);
var points = cljs.core.nthnext.call(null,vec__284273,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__284273,map__284274,map__284274__$1,first_point,vec__284275,fpx,fpy,vec__284276,vec__284277,fcx,fcy,points){
return (function (p__284279){
var vec__284280 = p__284279;
var map__284281 = cljs.core.nth.call(null,vec__284280,(0),null);
var map__284281__$1 = ((((!((map__284281 == null)))?((((map__284281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284281):map__284281);
var vec__284282 = cljs.core.get.call(null,map__284281__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var _ = cljs.core.nth.call(null,vec__284282,(0),null);
var cp1 = cljs.core.nth.call(null,vec__284282,(1),null);
var map__284283 = cljs.core.nth.call(null,vec__284280,(1),null);
var map__284283__$1 = ((((!((map__284283 == null)))?((((map__284283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284283):map__284283);
var vec__284284 = cljs.core.get.call(null,map__284283__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp2 = cljs.core.nth.call(null,vec__284284,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__284284,(1),null);
var p2 = cljs.core.get.call(null,map__284283__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return cljs.core.concat.call(null," Q",cljs.core.interpose.call(null,",",cp1)," ",cljs.core.interpose.call(null,",",p2));
});})(vec__284273,map__284274,map__284274__$1,first_point,vec__284275,fpx,fpy,vec__284276,vec__284277,fcx,fcy,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_closed_svg_path = (function dynomics$ui$svg$to_closed_svg_path(p__284323){
var vec__284342 = p__284323;
var map__284343 = cljs.core.nth.call(null,vec__284342,(0),null);
var map__284343__$1 = ((((!((map__284343 == null)))?((((map__284343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284343):map__284343);
var first_point = map__284343__$1;
var vec__284344 = cljs.core.get.call(null,map__284343__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__284344,(0),null);
var fpy = cljs.core.nth.call(null,vec__284344,(1),null);
var vec__284345 = cljs.core.get.call(null,map__284343__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__284346 = cljs.core.nth.call(null,vec__284345,(0),null);
var fcx = cljs.core.nth.call(null,vec__284346,(0),null);
var fcy = cljs.core.nth.call(null,vec__284346,(1),null);
var points = cljs.core.nthnext.call(null,vec__284342,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__284342,map__284343,map__284343__$1,first_point,vec__284344,fpx,fpy,vec__284345,vec__284346,fcx,fcy,points){
return (function (p__284351){
var vec__284352 = p__284351;
var map__284353 = cljs.core.nth.call(null,vec__284352,(0),null);
var map__284353__$1 = ((((!((map__284353 == null)))?((((map__284353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284353):map__284353);
var vec__284354 = cljs.core.get.call(null,map__284353__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__284354,(0),null);
var cp12 = cljs.core.nth.call(null,vec__284354,(1),null);
var map__284355 = cljs.core.nth.call(null,vec__284352,(1),null);
var map__284355__$1 = ((((!((map__284355 == null)))?((((map__284355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284355):map__284355);
var vec__284356 = cljs.core.get.call(null,map__284355__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__284356,(0),null);
var cp22 = cljs.core.nth.call(null,vec__284356,(1),null);
var p2 = cljs.core.get.call(null,map__284355__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__284342,map__284343,map__284343__$1,first_point,vec__284344,fpx,fpy,vec__284345,vec__284346,fcx,fcy,points))
,cljs.core.partition.call(null,(2),cljs.core.cons.call(null,first_point,points)))));
});
