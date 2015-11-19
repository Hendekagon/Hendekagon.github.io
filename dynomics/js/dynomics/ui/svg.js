// Compiled by ClojureScript 1.7.170 {}
goog.provide('dynomics.ui.svg');
goog.require('cljs.core');
/**
 * Returns an SVG transform string from the given list e.g. (trs :t [0.1 0.2] :s [0.5 0.5] :r [1.0])
 */
dynomics.ui.svg.trs = (function dynomics$ui$svg$trs(var_args){
var args__25226__auto__ = [];
var len__25219__auto___379654 = arguments.length;
var i__25220__auto___379655 = (0);
while(true){
if((i__25220__auto___379655 < len__25219__auto___379654)){
args__25226__auto__.push((arguments[i__25220__auto___379655]));

var G__379656 = (i__25220__auto___379655 + (1));
i__25220__auto___379655 = G__379656;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((0) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((0)),(0))):null);
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(argseq__25227__auto__);
});

dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic = (function (transforms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p__379652){
var vec__379653 = p__379652;
var k = cljs.core.nth.call(null,vec__379653,(0),null);
var p = cljs.core.nthnext.call(null,vec__379653,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),"translate",new cljs.core.Keyword(null,"r","r",-471384190),"rotate",new cljs.core.Keyword(null,"s","s",1705939918),"scale"], null).call(null,k),"(",cljs.core.interpose.call(null,",",cljs.core.map.call(null,cljs.core.double$,p)),") ");
}),transforms));
});

dynomics.ui.svg.trs.cljs$lang$maxFixedArity = (0);

dynomics.ui.svg.trs.cljs$lang$applyTo = (function (seq379651){
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq379651));
});
dynomics.ui.svg.make_bezier = (function dynomics$ui$svg$make_bezier(p__379657){
var vec__379659 = p__379657;
var point = cljs.core.nth.call(null,vec__379659,(0),null);
var control_points = cljs.core.nthnext.call(null,vec__379659,(1));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),point,new cljs.core.Keyword(null,"control-points","control-points",-238538325),control_points], null);
});
dynomics.ui.svg.to_svg_path = (function dynomics$ui$svg$to_svg_path(p__379660){
var vec__379675 = p__379660;
var map__379676 = cljs.core.nth.call(null,vec__379675,(0),null);
var map__379676__$1 = ((((!((map__379676 == null)))?((((map__379676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__379676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__379676):map__379676);
var first_point = map__379676__$1;
var vec__379677 = cljs.core.get.call(null,map__379676__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__379677,(0),null);
var fpy = cljs.core.nth.call(null,vec__379677,(1),null);
var vec__379678 = cljs.core.get.call(null,map__379676__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__379679 = cljs.core.nth.call(null,vec__379678,(0),null);
var fcx = cljs.core.nth.call(null,vec__379679,(0),null);
var fcy = cljs.core.nth.call(null,vec__379679,(1),null);
var points = cljs.core.nthnext.call(null,vec__379675,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__379675,map__379676,map__379676__$1,first_point,vec__379677,fpx,fpy,vec__379678,vec__379679,fcx,fcy,points){
return (function (p__379681){
var vec__379682 = p__379681;
var map__379683 = cljs.core.nth.call(null,vec__379682,(0),null);
var map__379683__$1 = ((((!((map__379683 == null)))?((((map__379683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__379683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__379683):map__379683);
var vec__379684 = cljs.core.get.call(null,map__379683__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__379684,(0),null);
var cp12 = cljs.core.nth.call(null,vec__379684,(1),null);
var map__379685 = cljs.core.nth.call(null,vec__379682,(1),null);
var map__379685__$1 = ((((!((map__379685 == null)))?((((map__379685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__379685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__379685):map__379685);
var vec__379686 = cljs.core.get.call(null,map__379685__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__379686,(0),null);
var cp22 = cljs.core.nth.call(null,vec__379686,(1),null);
var p2 = cljs.core.get.call(null,map__379685__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__379675,map__379676,map__379676__$1,first_point,vec__379677,fpx,fpy,vec__379678,vec__379679,fcx,fcy,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_smooth_svg_path = (function dynomics$ui$svg$to_smooth_svg_path(p__379689){
var vec__379704 = p__379689;
var map__379705 = cljs.core.nth.call(null,vec__379704,(0),null);
var map__379705__$1 = ((((!((map__379705 == null)))?((((map__379705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__379705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__379705):map__379705);
var first_point = map__379705__$1;
var vec__379706 = cljs.core.get.call(null,map__379705__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__379706,(0),null);
var fpy = cljs.core.nth.call(null,vec__379706,(1),null);
var vec__379707 = cljs.core.get.call(null,map__379705__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__379708 = cljs.core.nth.call(null,vec__379707,(0),null);
var fcx = cljs.core.nth.call(null,vec__379708,(0),null);
var fcy = cljs.core.nth.call(null,vec__379708,(1),null);
var points = cljs.core.nthnext.call(null,vec__379704,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__379704,map__379705,map__379705__$1,first_point,vec__379706,fpx,fpy,vec__379707,vec__379708,fcx,fcy,points){
return (function (p__379710){
var vec__379711 = p__379710;
var map__379712 = cljs.core.nth.call(null,vec__379711,(0),null);
var map__379712__$1 = ((((!((map__379712 == null)))?((((map__379712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__379712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__379712):map__379712);
var vec__379713 = cljs.core.get.call(null,map__379712__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp1 = cljs.core.nth.call(null,vec__379713,(0),null);
var map__379714 = cljs.core.nth.call(null,vec__379711,(1),null);
var map__379714__$1 = ((((!((map__379714 == null)))?((((map__379714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__379714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__379714):map__379714);
var vec__379715 = cljs.core.get.call(null,map__379714__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp2 = cljs.core.nth.call(null,vec__379715,(0),null);
var p2 = cljs.core.get.call(null,map__379714__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return cljs.core.concat.call(null," S",cljs.core.interpose.call(null,",",cp1)," ",cljs.core.interpose.call(null,",",p2));
});})(vec__379704,map__379705,map__379705__$1,first_point,vec__379706,fpx,fpy,vec__379707,vec__379708,fcx,fcy,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_closed_svg_path = (function dynomics$ui$svg$to_closed_svg_path(p__379718){
var vec__379733 = p__379718;
var map__379734 = cljs.core.nth.call(null,vec__379733,(0),null);
var map__379734__$1 = ((((!((map__379734 == null)))?((((map__379734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__379734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__379734):map__379734);
var first_point = map__379734__$1;
var vec__379735 = cljs.core.get.call(null,map__379734__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__379735,(0),null);
var fpy = cljs.core.nth.call(null,vec__379735,(1),null);
var vec__379736 = cljs.core.get.call(null,map__379734__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__379737 = cljs.core.nth.call(null,vec__379736,(0),null);
var fcx = cljs.core.nth.call(null,vec__379737,(0),null);
var fcy = cljs.core.nth.call(null,vec__379737,(1),null);
var points = cljs.core.nthnext.call(null,vec__379733,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__379733,map__379734,map__379734__$1,first_point,vec__379735,fpx,fpy,vec__379736,vec__379737,fcx,fcy,points){
return (function (p__379739){
var vec__379740 = p__379739;
var map__379741 = cljs.core.nth.call(null,vec__379740,(0),null);
var map__379741__$1 = ((((!((map__379741 == null)))?((((map__379741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__379741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__379741):map__379741);
var vec__379742 = cljs.core.get.call(null,map__379741__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__379742,(0),null);
var cp12 = cljs.core.nth.call(null,vec__379742,(1),null);
var map__379743 = cljs.core.nth.call(null,vec__379740,(1),null);
var map__379743__$1 = ((((!((map__379743 == null)))?((((map__379743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__379743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__379743):map__379743);
var vec__379744 = cljs.core.get.call(null,map__379743__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__379744,(0),null);
var cp22 = cljs.core.nth.call(null,vec__379744,(1),null);
var p2 = cljs.core.get.call(null,map__379743__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__379733,map__379734,map__379734__$1,first_point,vec__379735,fpx,fpy,vec__379736,vec__379737,fcx,fcy,points))
,cljs.core.partition.call(null,(2),cljs.core.cons.call(null,first_point,points)))));
});

//# sourceMappingURL=svg.js.map