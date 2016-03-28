// Compiled by ClojureScript 1.8.40 {}
goog.provide('dynomics.ui.svg');
goog.require('cljs.core');
/**
 * Returns an SVG transform string from the given list e.g. (trs :t [0.1 0.2] :s [0.5 0.5] :r [1.0])
 */
dynomics.ui.svg.trs = (function dynomics$ui$svg$trs(var_args){
var args__26903__auto__ = [];
var len__26896__auto___86783 = arguments.length;
var i__26897__auto___86784 = (0);
while(true){
if((i__26897__auto___86784 < len__26896__auto___86783)){
args__26903__auto__.push((arguments[i__26897__auto___86784]));

var G__86786 = (i__26897__auto___86784 + (1));
i__26897__auto___86784 = G__86786;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((0) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((0)),(0),null)):null);
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(argseq__26904__auto__);
});

dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic = (function (transforms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p__86778){
var vec__86779 = p__86778;
var k = cljs.core.nth.call(null,vec__86779,(0),null);
var p = cljs.core.nthnext.call(null,vec__86779,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),"translate",new cljs.core.Keyword(null,"r","r",-471384190),"rotate",new cljs.core.Keyword(null,"s","s",1705939918),"scale"], null).call(null,k),"(",cljs.core.interpose.call(null,",",cljs.core.map.call(null,cljs.core.double$,p)),") ");
}),transforms));
});

dynomics.ui.svg.trs.cljs$lang$maxFixedArity = (0);

dynomics.ui.svg.trs.cljs$lang$applyTo = (function (seq86775){
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86775));
});
dynomics.ui.svg.make_bezier_point = (function dynomics$ui$svg$make_bezier_point(var_args){
var args86794 = [];
var len__26896__auto___86806 = arguments.length;
var i__26897__auto___86808 = (0);
while(true){
if((i__26897__auto___86808 < len__26896__auto___86806)){
args86794.push((arguments[i__26897__auto___86808]));

var G__86809 = (i__26897__auto___86808 + (1));
i__26897__auto___86808 = G__86809;
continue;
} else {
}
break;
}

var G__86800 = args86794.length;
switch (G__86800) {
case 1:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86794.length)].join('')));

}
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1 = (function (p__86803){
var vec__86804 = p__86803;
var point = cljs.core.nth.call(null,vec__86804,(0),null);
var control_points = cljs.core.nthnext.call(null,vec__86804,(1));
return dynomics.ui.svg.make_bezier_point.call(null,point,control_points);
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2 = (function (point,control_points){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),point,new cljs.core.Keyword(null,"control-points","control-points",-238538325),control_points], null);
});

dynomics.ui.svg.make_bezier_point.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_beziers = (function dynomics$ui$svg$to_beziers(var_args){
var args86817 = [];
var len__26896__auto___86825 = arguments.length;
var i__26897__auto___86827 = (0);
while(true){
if((i__26897__auto___86827 < len__26896__auto___86825)){
args86817.push((arguments[i__26897__auto___86827]));

var G__86828 = (i__26897__auto___86827 + (1));
i__26897__auto___86827 = G__86828;
continue;
} else {
}
break;
}

var G__86819 = args86817.length;
switch (G__86819) {
case 1:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86817.length)].join('')));

}
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1 = (function (nodes){
return dynomics.ui.svg.to_beziers.call(null,nodes,cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2 = (function (nodes,control_point_ids){
return cljs.core.map.call(null,(function (p__86820,cpids){
var map__86821 = p__86820;
var map__86821__$1 = ((((!((map__86821 == null)))?((((map__86821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86821):map__86821);
var p = cljs.core.get.call(null,map__86821__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var cp = cljs.core.get.call(null,map__86821__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return dynomics.ui.svg.make_bezier_point.call(null,p,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,p),new cljs.core.Keyword(null,"position","position",-2011731912)),cljs.core.vals.call(null,cljs.core.select_keys.call(null,cp,cpids)))));
}),nodes,control_point_ids);
});

dynomics.ui.svg.to_beziers.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_svg_path = (function dynomics$ui$svg$to_svg_path(p__86870){
var vec__86897 = p__86870;
var map__86898 = cljs.core.nth.call(null,vec__86897,(0),null);
var map__86898__$1 = ((((!((map__86898 == null)))?((((map__86898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86898):map__86898);
var first_point = map__86898__$1;
var vec__86899 = cljs.core.get.call(null,map__86898__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__86899,(0),null);
var fpy = cljs.core.nth.call(null,vec__86899,(1),null);
var vec__86900 = cljs.core.get.call(null,map__86898__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__86901 = cljs.core.nth.call(null,vec__86900,(0),null);
var fcx = cljs.core.nth.call(null,vec__86901,(0),null);
var fcy = cljs.core.nth.call(null,vec__86901,(1),null);
var _ = cljs.core.nth.call(null,vec__86900,(1),null);
var ml = cljs.core.get.call(null,map__86898__$1,new cljs.core.Keyword(null,"ml","ml",1909675057),"M");
var points = cljs.core.nthnext.call(null,vec__86897,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ml,fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__86897,map__86898,map__86898__$1,first_point,vec__86899,fpx,fpy,vec__86900,vec__86901,fcx,fcy,_,ml,points){
return (function (p__86906){
var vec__86907 = p__86906;
var map__86908 = cljs.core.nth.call(null,vec__86907,(0),null);
var map__86908__$1 = ((((!((map__86908 == null)))?((((map__86908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86908):map__86908);
var vec__86909 = cljs.core.get.call(null,map__86908__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__86909,(0),null);
var cp12 = cljs.core.nth.call(null,vec__86909,(1),null);
var map__86910 = cljs.core.nth.call(null,vec__86907,(1),null);
var map__86910__$1 = ((((!((map__86910 == null)))?((((map__86910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86910):map__86910);
var vec__86911 = cljs.core.get.call(null,map__86910__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__86911,(0),null);
var cp22 = cljs.core.nth.call(null,vec__86911,(1),null);
var p2 = cljs.core.get.call(null,map__86910__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp12)," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__86897,map__86898,map__86898__$1,first_point,vec__86899,fpx,fpy,vec__86900,vec__86901,fcx,fcy,_,ml,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_smooth_svg_path = (function dynomics$ui$svg$to_smooth_svg_path(p__86944){
var vec__86971 = p__86944;
var map__86972 = cljs.core.nth.call(null,vec__86971,(0),null);
var map__86972__$1 = ((((!((map__86972 == null)))?((((map__86972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86972):map__86972);
var first_point = map__86972__$1;
var vec__86973 = cljs.core.get.call(null,map__86972__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__86973,(0),null);
var fpy = cljs.core.nth.call(null,vec__86973,(1),null);
var vec__86974 = cljs.core.get.call(null,map__86972__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__86975 = cljs.core.nth.call(null,vec__86974,(0),null);
var fcx = cljs.core.nth.call(null,vec__86975,(0),null);
var fcy = cljs.core.nth.call(null,vec__86975,(1),null);
var points = cljs.core.nthnext.call(null,vec__86971,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__86971,map__86972,map__86972__$1,first_point,vec__86973,fpx,fpy,vec__86974,vec__86975,fcx,fcy,points){
return (function (p__86982){
var vec__86983 = p__86982;
var map__86984 = cljs.core.nth.call(null,vec__86983,(0),null);
var map__86984__$1 = ((((!((map__86984 == null)))?((((map__86984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86984):map__86984);
var vec__86985 = cljs.core.get.call(null,map__86984__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var _ = cljs.core.nth.call(null,vec__86985,(0),null);
var cp1 = cljs.core.nth.call(null,vec__86985,(1),null);
var map__86986 = cljs.core.nth.call(null,vec__86983,(1),null);
var map__86986__$1 = ((((!((map__86986 == null)))?((((map__86986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86986):map__86986);
var vec__86987 = cljs.core.get.call(null,map__86986__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp2 = cljs.core.nth.call(null,vec__86987,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__86987,(1),null);
var p2 = cljs.core.get.call(null,map__86986__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return cljs.core.concat.call(null," Q",cljs.core.interpose.call(null,",",cp1)," ",cljs.core.interpose.call(null,",",p2));
});})(vec__86971,map__86972,map__86972__$1,first_point,vec__86973,fpx,fpy,vec__86974,vec__86975,fcx,fcy,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_closed_svg_path = (function dynomics$ui$svg$to_closed_svg_path(p__87042){
var vec__87059 = p__87042;
var map__87060 = cljs.core.nth.call(null,vec__87059,(0),null);
var map__87060__$1 = ((((!((map__87060 == null)))?((((map__87060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__87060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87060):map__87060);
var first_point = map__87060__$1;
var vec__87061 = cljs.core.get.call(null,map__87060__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__87061,(0),null);
var fpy = cljs.core.nth.call(null,vec__87061,(1),null);
var vec__87062 = cljs.core.get.call(null,map__87060__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__87063 = cljs.core.nth.call(null,vec__87062,(0),null);
var fcx = cljs.core.nth.call(null,vec__87063,(0),null);
var fcy = cljs.core.nth.call(null,vec__87063,(1),null);
var points = cljs.core.nthnext.call(null,vec__87059,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__87059,map__87060,map__87060__$1,first_point,vec__87061,fpx,fpy,vec__87062,vec__87063,fcx,fcy,points){
return (function (p__87066){
var vec__87067 = p__87066;
var map__87068 = cljs.core.nth.call(null,vec__87067,(0),null);
var map__87068__$1 = ((((!((map__87068 == null)))?((((map__87068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__87068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87068):map__87068);
var vec__87069 = cljs.core.get.call(null,map__87068__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__87069,(0),null);
var cp12 = cljs.core.nth.call(null,vec__87069,(1),null);
var map__87070 = cljs.core.nth.call(null,vec__87067,(1),null);
var map__87070__$1 = ((((!((map__87070 == null)))?((((map__87070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__87070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87070):map__87070);
var vec__87071 = cljs.core.get.call(null,map__87070__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__87071,(0),null);
var cp22 = cljs.core.nth.call(null,vec__87071,(1),null);
var p2 = cljs.core.get.call(null,map__87070__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__87059,map__87060,map__87060__$1,first_point,vec__87061,fpx,fpy,vec__87062,vec__87063,fcx,fcy,points))
,cljs.core.partition.call(null,(2),cljs.core.cons.call(null,first_point,points)))));
});
