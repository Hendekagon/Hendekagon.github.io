// Compiled by ClojureScript 1.8.40 {}
goog.provide('dynomics.ui.svg');
goog.require('cljs.core');
/**
 * Returns an SVG transform string from the given list e.g. (trs :t [0.1 0.2] :s [0.5 0.5] :r [1.0])
 */
dynomics.ui.svg.trs = (function dynomics$ui$svg$trs(var_args){
var args__36501__auto__ = [];
var len__36494__auto___127065 = arguments.length;
var i__36495__auto___127067 = (0);
while(true){
if((i__36495__auto___127067 < len__36494__auto___127065)){
args__36501__auto__.push((arguments[i__36495__auto___127067]));

var G__127068 = (i__36495__auto___127067 + (1));
i__36495__auto___127067 = G__127068;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((0) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((0)),(0),null)):null);
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(argseq__36502__auto__);
});

dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic = (function (transforms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p__127060){
var vec__127061 = p__127060;
var k = cljs.core.nth.call(null,vec__127061,(0),null);
var p = cljs.core.nthnext.call(null,vec__127061,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),"translate",new cljs.core.Keyword(null,"r","r",-471384190),"rotate",new cljs.core.Keyword(null,"s","s",1705939918),"scale"], null).call(null,k),"(",cljs.core.interpose.call(null,",",cljs.core.map.call(null,cljs.core.double$,p)),") ");
}),transforms));
});

dynomics.ui.svg.trs.cljs$lang$maxFixedArity = (0);

dynomics.ui.svg.trs.cljs$lang$applyTo = (function (seq127057){
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq127057));
});
dynomics.ui.svg.make_bezier_point = (function dynomics$ui$svg$make_bezier_point(var_args){
var args127076 = [];
var len__36494__auto___127093 = arguments.length;
var i__36495__auto___127094 = (0);
while(true){
if((i__36495__auto___127094 < len__36494__auto___127093)){
args127076.push((arguments[i__36495__auto___127094]));

var G__127095 = (i__36495__auto___127094 + (1));
i__36495__auto___127094 = G__127095;
continue;
} else {
}
break;
}

var G__127083 = args127076.length;
switch (G__127083) {
case 1:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args127076.length)].join('')));

}
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1 = (function (p__127085){
var vec__127086 = p__127085;
var point = cljs.core.nth.call(null,vec__127086,(0),null);
var control_points = cljs.core.nthnext.call(null,vec__127086,(1));
return dynomics.ui.svg.make_bezier_point.call(null,point,control_points);
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2 = (function (point,control_points){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),point,new cljs.core.Keyword(null,"control-points","control-points",-238538325),control_points], null);
});

dynomics.ui.svg.make_bezier_point.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_beziers = (function dynomics$ui$svg$to_beziers(var_args){
var args127100 = [];
var len__36494__auto___127109 = arguments.length;
var i__36495__auto___127110 = (0);
while(true){
if((i__36495__auto___127110 < len__36494__auto___127109)){
args127100.push((arguments[i__36495__auto___127110]));

var G__127112 = (i__36495__auto___127110 + (1));
i__36495__auto___127110 = G__127112;
continue;
} else {
}
break;
}

var G__127104 = args127100.length;
switch (G__127104) {
case 1:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args127100.length)].join('')));

}
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1 = (function (nodes){
return dynomics.ui.svg.to_beziers.call(null,nodes,cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2 = (function (nodes,control_point_ids){
return cljs.core.map.call(null,(function (p__127106,cpids){
var map__127107 = p__127106;
var map__127107__$1 = ((((!((map__127107 == null)))?((((map__127107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__127107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__127107):map__127107);
var p = cljs.core.get.call(null,map__127107__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var cp = cljs.core.get.call(null,map__127107__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return dynomics.ui.svg.make_bezier_point.call(null,p,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,p),new cljs.core.Keyword(null,"position","position",-2011731912)),cljs.core.vals.call(null,cljs.core.select_keys.call(null,cp,cpids)))));
}),nodes,control_point_ids);
});

dynomics.ui.svg.to_beziers.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_svg_path = (function dynomics$ui$svg$to_svg_path(p__127121){
var vec__127143 = p__127121;
var map__127144 = cljs.core.nth.call(null,vec__127143,(0),null);
var map__127144__$1 = ((((!((map__127144 == null)))?((((map__127144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__127144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__127144):map__127144);
var first_point = map__127144__$1;
var vec__127145 = cljs.core.get.call(null,map__127144__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__127145,(0),null);
var fpy = cljs.core.nth.call(null,vec__127145,(1),null);
var vec__127146 = cljs.core.get.call(null,map__127144__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__127147 = cljs.core.nth.call(null,vec__127146,(0),null);
var fcx = cljs.core.nth.call(null,vec__127147,(0),null);
var fcy = cljs.core.nth.call(null,vec__127147,(1),null);
var _ = cljs.core.nth.call(null,vec__127146,(1),null);
var ml = cljs.core.get.call(null,map__127144__$1,new cljs.core.Keyword(null,"ml","ml",1909675057),"M");
var points = cljs.core.nthnext.call(null,vec__127143,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ml,fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__127143,map__127144,map__127144__$1,first_point,vec__127145,fpx,fpy,vec__127146,vec__127147,fcx,fcy,_,ml,points){
return (function (p__127153){
var vec__127154 = p__127153;
var map__127155 = cljs.core.nth.call(null,vec__127154,(0),null);
var map__127155__$1 = ((((!((map__127155 == null)))?((((map__127155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__127155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__127155):map__127155);
var vec__127156 = cljs.core.get.call(null,map__127155__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__127156,(0),null);
var cp12 = cljs.core.nth.call(null,vec__127156,(1),null);
var map__127157 = cljs.core.nth.call(null,vec__127154,(1),null);
var map__127157__$1 = ((((!((map__127157 == null)))?((((map__127157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__127157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__127157):map__127157);
var vec__127158 = cljs.core.get.call(null,map__127157__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__127158,(0),null);
var cp22 = cljs.core.nth.call(null,vec__127158,(1),null);
var p2 = cljs.core.get.call(null,map__127157__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp12)," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__127143,map__127144,map__127144__$1,first_point,vec__127145,fpx,fpy,vec__127146,vec__127147,fcx,fcy,_,ml,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_smooth_svg_path = (function dynomics$ui$svg$to_smooth_svg_path(p__127179){
var vec__127199 = p__127179;
var map__127200 = cljs.core.nth.call(null,vec__127199,(0),null);
var map__127200__$1 = ((((!((map__127200 == null)))?((((map__127200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__127200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__127200):map__127200);
var first_point = map__127200__$1;
var vec__127201 = cljs.core.get.call(null,map__127200__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__127201,(0),null);
var fpy = cljs.core.nth.call(null,vec__127201,(1),null);
var vec__127202 = cljs.core.get.call(null,map__127200__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__127203 = cljs.core.nth.call(null,vec__127202,(0),null);
var fcx = cljs.core.nth.call(null,vec__127203,(0),null);
var fcy = cljs.core.nth.call(null,vec__127203,(1),null);
var points = cljs.core.nthnext.call(null,vec__127199,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__127199,map__127200,map__127200__$1,first_point,vec__127201,fpx,fpy,vec__127202,vec__127203,fcx,fcy,points){
return (function (p__127206){
var vec__127207 = p__127206;
var map__127208 = cljs.core.nth.call(null,vec__127207,(0),null);
var map__127208__$1 = ((((!((map__127208 == null)))?((((map__127208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__127208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__127208):map__127208);
var vec__127209 = cljs.core.get.call(null,map__127208__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var _ = cljs.core.nth.call(null,vec__127209,(0),null);
var cp1 = cljs.core.nth.call(null,vec__127209,(1),null);
var map__127210 = cljs.core.nth.call(null,vec__127207,(1),null);
var map__127210__$1 = ((((!((map__127210 == null)))?((((map__127210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__127210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__127210):map__127210);
var vec__127211 = cljs.core.get.call(null,map__127210__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp2 = cljs.core.nth.call(null,vec__127211,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__127211,(1),null);
var p2 = cljs.core.get.call(null,map__127210__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return cljs.core.concat.call(null," Q",cljs.core.interpose.call(null,",",cp1)," ",cljs.core.interpose.call(null,",",p2));
});})(vec__127199,map__127200,map__127200__$1,first_point,vec__127201,fpx,fpy,vec__127202,vec__127203,fcx,fcy,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_closed_svg_path = (function dynomics$ui$svg$to_closed_svg_path(p__127276){
var vec__127332 = p__127276;
var map__127333 = cljs.core.nth.call(null,vec__127332,(0),null);
var map__127333__$1 = ((((!((map__127333 == null)))?((((map__127333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__127333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__127333):map__127333);
var first_point = map__127333__$1;
var vec__127334 = cljs.core.get.call(null,map__127333__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__127334,(0),null);
var fpy = cljs.core.nth.call(null,vec__127334,(1),null);
var vec__127335 = cljs.core.get.call(null,map__127333__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__127336 = cljs.core.nth.call(null,vec__127335,(0),null);
var fcx = cljs.core.nth.call(null,vec__127336,(0),null);
var fcy = cljs.core.nth.call(null,vec__127336,(1),null);
var points = cljs.core.nthnext.call(null,vec__127332,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__127332,map__127333,map__127333__$1,first_point,vec__127334,fpx,fpy,vec__127335,vec__127336,fcx,fcy,points){
return (function (p__127340){
var vec__127342 = p__127340;
var map__127343 = cljs.core.nth.call(null,vec__127342,(0),null);
var map__127343__$1 = ((((!((map__127343 == null)))?((((map__127343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__127343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__127343):map__127343);
var vec__127344 = cljs.core.get.call(null,map__127343__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__127344,(0),null);
var cp12 = cljs.core.nth.call(null,vec__127344,(1),null);
var map__127345 = cljs.core.nth.call(null,vec__127342,(1),null);
var map__127345__$1 = ((((!((map__127345 == null)))?((((map__127345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__127345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__127345):map__127345);
var vec__127346 = cljs.core.get.call(null,map__127345__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__127346,(0),null);
var cp22 = cljs.core.nth.call(null,vec__127346,(1),null);
var p2 = cljs.core.get.call(null,map__127345__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__127332,map__127333,map__127333__$1,first_point,vec__127334,fpx,fpy,vec__127335,vec__127336,fcx,fcy,points))
,cljs.core.partition.call(null,(2),cljs.core.cons.call(null,first_point,points)))));
});
