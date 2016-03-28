// Compiled by ClojureScript 1.8.34 {}
goog.provide('dynomics.ui.svg');
goog.require('cljs.core');
/**
 * Returns an SVG transform string from the given list e.g. (trs :t [0.1 0.2] :s [0.5 0.5] :r [1.0])
 */
dynomics.ui.svg.trs = (function dynomics$ui$svg$trs(var_args){
var args__36267__auto__ = [];
var len__36260__auto___293828 = arguments.length;
var i__36261__auto___293829 = (0);
while(true){
if((i__36261__auto___293829 < len__36260__auto___293828)){
args__36267__auto__.push((arguments[i__36261__auto___293829]));

var G__293832 = (i__36261__auto___293829 + (1));
i__36261__auto___293829 = G__293832;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((0) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((0)),(0),null)):null);
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(argseq__36268__auto__);
});

dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic = (function (transforms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p__293822){
var vec__293823 = p__293822;
var k = cljs.core.nth.call(null,vec__293823,(0),null);
var p = cljs.core.nthnext.call(null,vec__293823,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),"translate",new cljs.core.Keyword(null,"r","r",-471384190),"rotate",new cljs.core.Keyword(null,"s","s",1705939918),"scale"], null).call(null,k),"(",cljs.core.interpose.call(null,",",cljs.core.map.call(null,cljs.core.double$,p)),") ");
}),transforms));
});

dynomics.ui.svg.trs.cljs$lang$maxFixedArity = (0);

dynomics.ui.svg.trs.cljs$lang$applyTo = (function (seq293818){
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq293818));
});
dynomics.ui.svg.make_bezier_point = (function dynomics$ui$svg$make_bezier_point(var_args){
var args293835 = [];
var len__36260__auto___293849 = arguments.length;
var i__36261__auto___293850 = (0);
while(true){
if((i__36261__auto___293850 < len__36260__auto___293849)){
args293835.push((arguments[i__36261__auto___293850]));

var G__293853 = (i__36261__auto___293850 + (1));
i__36261__auto___293850 = G__293853;
continue;
} else {
}
break;
}

var G__293844 = args293835.length;
switch (G__293844) {
case 1:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args293835.length)].join('')));

}
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1 = (function (p__293846){
var vec__293847 = p__293846;
var point = cljs.core.nth.call(null,vec__293847,(0),null);
var control_points = cljs.core.nthnext.call(null,vec__293847,(1));
return dynomics.ui.svg.make_bezier_point.call(null,point,control_points);
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2 = (function (point,control_points){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),point,new cljs.core.Keyword(null,"control-points","control-points",-238538325),control_points], null);
});

dynomics.ui.svg.make_bezier_point.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_beziers = (function dynomics$ui$svg$to_beziers(var_args){
var args293861 = [];
var len__36260__auto___293873 = arguments.length;
var i__36261__auto___293875 = (0);
while(true){
if((i__36261__auto___293875 < len__36260__auto___293873)){
args293861.push((arguments[i__36261__auto___293875]));

var G__293877 = (i__36261__auto___293875 + (1));
i__36261__auto___293875 = G__293877;
continue;
} else {
}
break;
}

var G__293865 = args293861.length;
switch (G__293865) {
case 1:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args293861.length)].join('')));

}
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1 = (function (nodes){
return dynomics.ui.svg.to_beziers.call(null,nodes,cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2 = (function (nodes,control_point_ids){
return cljs.core.map.call(null,(function (p__293866,cpids){
var map__293867 = p__293866;
var map__293867__$1 = ((((!((map__293867 == null)))?((((map__293867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293867):map__293867);
var p = cljs.core.get.call(null,map__293867__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var cp = cljs.core.get.call(null,map__293867__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return dynomics.ui.svg.make_bezier_point.call(null,p,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,p),new cljs.core.Keyword(null,"position","position",-2011731912)),cljs.core.vals.call(null,cljs.core.select_keys.call(null,cp,cpids)))));
}),nodes,control_point_ids);
});

dynomics.ui.svg.to_beziers.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_svg_path = (function dynomics$ui$svg$to_svg_path(p__293885){
var vec__293906 = p__293885;
var map__293907 = cljs.core.nth.call(null,vec__293906,(0),null);
var map__293907__$1 = ((((!((map__293907 == null)))?((((map__293907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293907):map__293907);
var first_point = map__293907__$1;
var vec__293908 = cljs.core.get.call(null,map__293907__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__293908,(0),null);
var fpy = cljs.core.nth.call(null,vec__293908,(1),null);
var vec__293909 = cljs.core.get.call(null,map__293907__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__293910 = cljs.core.nth.call(null,vec__293909,(0),null);
var fcx = cljs.core.nth.call(null,vec__293910,(0),null);
var fcy = cljs.core.nth.call(null,vec__293910,(1),null);
var _ = cljs.core.nth.call(null,vec__293909,(1),null);
var ml = cljs.core.get.call(null,map__293907__$1,new cljs.core.Keyword(null,"ml","ml",1909675057),"M");
var points = cljs.core.nthnext.call(null,vec__293906,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ml,fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__293906,map__293907,map__293907__$1,first_point,vec__293908,fpx,fpy,vec__293909,vec__293910,fcx,fcy,_,ml,points){
return (function (p__293912){
var vec__293913 = p__293912;
var map__293914 = cljs.core.nth.call(null,vec__293913,(0),null);
var map__293914__$1 = ((((!((map__293914 == null)))?((((map__293914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293914):map__293914);
var vec__293915 = cljs.core.get.call(null,map__293914__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__293915,(0),null);
var cp12 = cljs.core.nth.call(null,vec__293915,(1),null);
var map__293916 = cljs.core.nth.call(null,vec__293913,(1),null);
var map__293916__$1 = ((((!((map__293916 == null)))?((((map__293916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293916):map__293916);
var vec__293917 = cljs.core.get.call(null,map__293916__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__293917,(0),null);
var cp22 = cljs.core.nth.call(null,vec__293917,(1),null);
var p2 = cljs.core.get.call(null,map__293916__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp12)," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__293906,map__293907,map__293907__$1,first_point,vec__293908,fpx,fpy,vec__293909,vec__293910,fcx,fcy,_,ml,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_smooth_svg_path = (function dynomics$ui$svg$to_smooth_svg_path(p__293940){
var vec__293957 = p__293940;
var map__293958 = cljs.core.nth.call(null,vec__293957,(0),null);
var map__293958__$1 = ((((!((map__293958 == null)))?((((map__293958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293958):map__293958);
var first_point = map__293958__$1;
var vec__293959 = cljs.core.get.call(null,map__293958__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__293959,(0),null);
var fpy = cljs.core.nth.call(null,vec__293959,(1),null);
var vec__293960 = cljs.core.get.call(null,map__293958__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__293961 = cljs.core.nth.call(null,vec__293960,(0),null);
var fcx = cljs.core.nth.call(null,vec__293961,(0),null);
var fcy = cljs.core.nth.call(null,vec__293961,(1),null);
var points = cljs.core.nthnext.call(null,vec__293957,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__293957,map__293958,map__293958__$1,first_point,vec__293959,fpx,fpy,vec__293960,vec__293961,fcx,fcy,points){
return (function (p__293965){
var vec__293966 = p__293965;
var map__293967 = cljs.core.nth.call(null,vec__293966,(0),null);
var map__293967__$1 = ((((!((map__293967 == null)))?((((map__293967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293967):map__293967);
var vec__293968 = cljs.core.get.call(null,map__293967__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var _ = cljs.core.nth.call(null,vec__293968,(0),null);
var cp1 = cljs.core.nth.call(null,vec__293968,(1),null);
var map__293969 = cljs.core.nth.call(null,vec__293966,(1),null);
var map__293969__$1 = ((((!((map__293969 == null)))?((((map__293969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293969):map__293969);
var vec__293970 = cljs.core.get.call(null,map__293969__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp2 = cljs.core.nth.call(null,vec__293970,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__293970,(1),null);
var p2 = cljs.core.get.call(null,map__293969__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return cljs.core.concat.call(null," Q",cljs.core.interpose.call(null,",",cp1)," ",cljs.core.interpose.call(null,",",p2));
});})(vec__293957,map__293958,map__293958__$1,first_point,vec__293959,fpx,fpy,vec__293960,vec__293961,fcx,fcy,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_closed_svg_path = (function dynomics$ui$svg$to_closed_svg_path(p__293986){
var vec__294035 = p__293986;
var map__294036 = cljs.core.nth.call(null,vec__294035,(0),null);
var map__294036__$1 = ((((!((map__294036 == null)))?((((map__294036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__294036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__294036):map__294036);
var first_point = map__294036__$1;
var vec__294037 = cljs.core.get.call(null,map__294036__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__294037,(0),null);
var fpy = cljs.core.nth.call(null,vec__294037,(1),null);
var vec__294038 = cljs.core.get.call(null,map__294036__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__294039 = cljs.core.nth.call(null,vec__294038,(0),null);
var fcx = cljs.core.nth.call(null,vec__294039,(0),null);
var fcy = cljs.core.nth.call(null,vec__294039,(1),null);
var points = cljs.core.nthnext.call(null,vec__294035,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__294035,map__294036,map__294036__$1,first_point,vec__294037,fpx,fpy,vec__294038,vec__294039,fcx,fcy,points){
return (function (p__294043){
var vec__294044 = p__294043;
var map__294045 = cljs.core.nth.call(null,vec__294044,(0),null);
var map__294045__$1 = ((((!((map__294045 == null)))?((((map__294045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__294045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__294045):map__294045);
var vec__294046 = cljs.core.get.call(null,map__294045__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__294046,(0),null);
var cp12 = cljs.core.nth.call(null,vec__294046,(1),null);
var map__294047 = cljs.core.nth.call(null,vec__294044,(1),null);
var map__294047__$1 = ((((!((map__294047 == null)))?((((map__294047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__294047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__294047):map__294047);
var vec__294048 = cljs.core.get.call(null,map__294047__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__294048,(0),null);
var cp22 = cljs.core.nth.call(null,vec__294048,(1),null);
var p2 = cljs.core.get.call(null,map__294047__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__294035,map__294036,map__294036__$1,first_point,vec__294037,fpx,fpy,vec__294038,vec__294039,fcx,fcy,points))
,cljs.core.partition.call(null,(2),cljs.core.cons.call(null,first_point,points)))));
});

//# sourceMappingURL=svg.js.map?rel=1459068552357