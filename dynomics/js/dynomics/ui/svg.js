// Compiled by ClojureScript 1.7.170 {}
goog.provide('dynomics.ui.svg');
goog.require('cljs.core');
/**
 * Returns an SVG transform string from the given list e.g. (trs :t [0.1 0.2] :s [0.5 0.5] :r [1.0])
 */
dynomics.ui.svg.trs = (function dynomics$ui$svg$trs(var_args){
var args__25276__auto__ = [];
var len__25269__auto___647815 = arguments.length;
var i__25270__auto___647816 = (0);
while(true){
if((i__25270__auto___647816 < len__25269__auto___647815)){
args__25276__auto__.push((arguments[i__25270__auto___647816]));

var G__647817 = (i__25270__auto___647816 + (1));
i__25270__auto___647816 = G__647817;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((0) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((0)),(0))):null);
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(argseq__25277__auto__);
});

dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic = (function (transforms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p__647813){
var vec__647814 = p__647813;
var k = cljs.core.nth.call(null,vec__647814,(0),null);
var p = cljs.core.nthnext.call(null,vec__647814,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),"translate",new cljs.core.Keyword(null,"r","r",-471384190),"rotate",new cljs.core.Keyword(null,"s","s",1705939918),"scale"], null).call(null,k),"(",cljs.core.interpose.call(null,",",cljs.core.map.call(null,cljs.core.double$,p)),") ");
}),transforms));
});

dynomics.ui.svg.trs.cljs$lang$maxFixedArity = (0);

dynomics.ui.svg.trs.cljs$lang$applyTo = (function (seq647812){
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq647812));
});
dynomics.ui.svg.make_bezier = (function dynomics$ui$svg$make_bezier(p__647818){
var vec__647820 = p__647818;
var point = cljs.core.nth.call(null,vec__647820,(0),null);
var control_points = cljs.core.nthnext.call(null,vec__647820,(1));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),point,new cljs.core.Keyword(null,"control-points","control-points",-238538325),control_points], null);
});
dynomics.ui.svg.to_svg_path = (function dynomics$ui$svg$to_svg_path(p__647821){
var vec__647836 = p__647821;
var map__647837 = cljs.core.nth.call(null,vec__647836,(0),null);
var map__647837__$1 = ((((!((map__647837 == null)))?((((map__647837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__647837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__647837):map__647837);
var first_point = map__647837__$1;
var vec__647838 = cljs.core.get.call(null,map__647837__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__647838,(0),null);
var fpy = cljs.core.nth.call(null,vec__647838,(1),null);
var vec__647839 = cljs.core.get.call(null,map__647837__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__647840 = cljs.core.nth.call(null,vec__647839,(0),null);
var fcx = cljs.core.nth.call(null,vec__647840,(0),null);
var fcy = cljs.core.nth.call(null,vec__647840,(1),null);
var ml = cljs.core.get.call(null,map__647837__$1,new cljs.core.Keyword(null,"ml","ml",1909675057),"M");
var points = cljs.core.nthnext.call(null,vec__647836,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ml,fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__647836,map__647837,map__647837__$1,first_point,vec__647838,fpx,fpy,vec__647839,vec__647840,fcx,fcy,ml,points){
return (function (p__647842){
var vec__647843 = p__647842;
var map__647844 = cljs.core.nth.call(null,vec__647843,(0),null);
var map__647844__$1 = ((((!((map__647844 == null)))?((((map__647844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__647844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__647844):map__647844);
var vec__647845 = cljs.core.get.call(null,map__647844__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__647845,(0),null);
var cp12 = cljs.core.nth.call(null,vec__647845,(1),null);
var map__647846 = cljs.core.nth.call(null,vec__647843,(1),null);
var map__647846__$1 = ((((!((map__647846 == null)))?((((map__647846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__647846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__647846):map__647846);
var vec__647847 = cljs.core.get.call(null,map__647846__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__647847,(0),null);
var cp22 = cljs.core.nth.call(null,vec__647847,(1),null);
var p2 = cljs.core.get.call(null,map__647846__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__647836,map__647837,map__647837__$1,first_point,vec__647838,fpx,fpy,vec__647839,vec__647840,fcx,fcy,ml,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_smooth_svg_path = (function dynomics$ui$svg$to_smooth_svg_path(p__647850){
var vec__647865 = p__647850;
var map__647866 = cljs.core.nth.call(null,vec__647865,(0),null);
var map__647866__$1 = ((((!((map__647866 == null)))?((((map__647866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__647866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__647866):map__647866);
var first_point = map__647866__$1;
var vec__647867 = cljs.core.get.call(null,map__647866__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__647867,(0),null);
var fpy = cljs.core.nth.call(null,vec__647867,(1),null);
var vec__647868 = cljs.core.get.call(null,map__647866__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__647869 = cljs.core.nth.call(null,vec__647868,(0),null);
var fcx = cljs.core.nth.call(null,vec__647869,(0),null);
var fcy = cljs.core.nth.call(null,vec__647869,(1),null);
var points = cljs.core.nthnext.call(null,vec__647865,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__647865,map__647866,map__647866__$1,first_point,vec__647867,fpx,fpy,vec__647868,vec__647869,fcx,fcy,points){
return (function (p__647871){
var vec__647872 = p__647871;
var map__647873 = cljs.core.nth.call(null,vec__647872,(0),null);
var map__647873__$1 = ((((!((map__647873 == null)))?((((map__647873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__647873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__647873):map__647873);
var vec__647874 = cljs.core.get.call(null,map__647873__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp1 = cljs.core.nth.call(null,vec__647874,(0),null);
var map__647875 = cljs.core.nth.call(null,vec__647872,(1),null);
var map__647875__$1 = ((((!((map__647875 == null)))?((((map__647875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__647875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__647875):map__647875);
var vec__647876 = cljs.core.get.call(null,map__647875__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp2 = cljs.core.nth.call(null,vec__647876,(0),null);
var p2 = cljs.core.get.call(null,map__647875__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return cljs.core.concat.call(null," S",cljs.core.interpose.call(null,",",cp1)," ",cljs.core.interpose.call(null,",",p2));
});})(vec__647865,map__647866,map__647866__$1,first_point,vec__647867,fpx,fpy,vec__647868,vec__647869,fcx,fcy,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_closed_svg_path = (function dynomics$ui$svg$to_closed_svg_path(p__647879){
var vec__647894 = p__647879;
var map__647895 = cljs.core.nth.call(null,vec__647894,(0),null);
var map__647895__$1 = ((((!((map__647895 == null)))?((((map__647895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__647895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__647895):map__647895);
var first_point = map__647895__$1;
var vec__647896 = cljs.core.get.call(null,map__647895__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__647896,(0),null);
var fpy = cljs.core.nth.call(null,vec__647896,(1),null);
var vec__647897 = cljs.core.get.call(null,map__647895__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__647898 = cljs.core.nth.call(null,vec__647897,(0),null);
var fcx = cljs.core.nth.call(null,vec__647898,(0),null);
var fcy = cljs.core.nth.call(null,vec__647898,(1),null);
var points = cljs.core.nthnext.call(null,vec__647894,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__647894,map__647895,map__647895__$1,first_point,vec__647896,fpx,fpy,vec__647897,vec__647898,fcx,fcy,points){
return (function (p__647900){
var vec__647901 = p__647900;
var map__647902 = cljs.core.nth.call(null,vec__647901,(0),null);
var map__647902__$1 = ((((!((map__647902 == null)))?((((map__647902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__647902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__647902):map__647902);
var vec__647903 = cljs.core.get.call(null,map__647902__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__647903,(0),null);
var cp12 = cljs.core.nth.call(null,vec__647903,(1),null);
var map__647904 = cljs.core.nth.call(null,vec__647901,(1),null);
var map__647904__$1 = ((((!((map__647904 == null)))?((((map__647904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__647904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__647904):map__647904);
var vec__647905 = cljs.core.get.call(null,map__647904__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__647905,(0),null);
var cp22 = cljs.core.nth.call(null,vec__647905,(1),null);
var p2 = cljs.core.get.call(null,map__647904__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__647894,map__647895,map__647895__$1,first_point,vec__647896,fpx,fpy,vec__647897,vec__647898,fcx,fcy,points))
,cljs.core.partition.call(null,(2),cljs.core.cons.call(null,first_point,points)))));
});

//# sourceMappingURL=svg.js.map