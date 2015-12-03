// Compiled by ClojureScript 1.7.170 {}
goog.provide('dynomics.ui.svg');
goog.require('cljs.core');
/**
 * Returns an SVG transform string from the given list e.g. (trs :t [0.1 0.2] :s [0.5 0.5] :r [1.0])
 */
dynomics.ui.svg.trs = (function dynomics$ui$svg$trs(var_args){
var args__25230__auto__ = [];
var len__25223__auto___42606 = arguments.length;
var i__25224__auto___42607 = (0);
while(true){
if((i__25224__auto___42607 < len__25223__auto___42606)){
args__25230__auto__.push((arguments[i__25224__auto___42607]));

var G__42608 = (i__25224__auto___42607 + (1));
i__25224__auto___42607 = G__42608;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((0) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((0)),(0))):null);
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(argseq__25231__auto__);
});

dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic = (function (transforms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p__42604){
var vec__42605 = p__42604;
var k = cljs.core.nth.call(null,vec__42605,(0),null);
var p = cljs.core.nthnext.call(null,vec__42605,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),"translate",new cljs.core.Keyword(null,"r","r",-471384190),"rotate",new cljs.core.Keyword(null,"s","s",1705939918),"scale"], null).call(null,k),"(",cljs.core.interpose.call(null,",",cljs.core.map.call(null,cljs.core.double$,p)),") ");
}),transforms));
});

dynomics.ui.svg.trs.cljs$lang$maxFixedArity = (0);

dynomics.ui.svg.trs.cljs$lang$applyTo = (function (seq42603){
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42603));
});
dynomics.ui.svg.make_bezier = (function dynomics$ui$svg$make_bezier(p__42609){
var vec__42611 = p__42609;
var point = cljs.core.nth.call(null,vec__42611,(0),null);
var control_points = cljs.core.nthnext.call(null,vec__42611,(1));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),point,new cljs.core.Keyword(null,"control-points","control-points",-238538325),control_points], null);
});
dynomics.ui.svg.to_svg_path = (function dynomics$ui$svg$to_svg_path(p__42612){
var vec__42627 = p__42612;
var map__42628 = cljs.core.nth.call(null,vec__42627,(0),null);
var map__42628__$1 = ((((!((map__42628 == null)))?((((map__42628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42628):map__42628);
var first_point = map__42628__$1;
var vec__42629 = cljs.core.get.call(null,map__42628__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__42629,(0),null);
var fpy = cljs.core.nth.call(null,vec__42629,(1),null);
var vec__42630 = cljs.core.get.call(null,map__42628__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__42631 = cljs.core.nth.call(null,vec__42630,(0),null);
var fcx = cljs.core.nth.call(null,vec__42631,(0),null);
var fcy = cljs.core.nth.call(null,vec__42631,(1),null);
var ml = cljs.core.get.call(null,map__42628__$1,new cljs.core.Keyword(null,"ml","ml",1909675057),"M");
var points = cljs.core.nthnext.call(null,vec__42627,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ml,fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__42627,map__42628,map__42628__$1,first_point,vec__42629,fpx,fpy,vec__42630,vec__42631,fcx,fcy,ml,points){
return (function (p__42633){
var vec__42634 = p__42633;
var map__42635 = cljs.core.nth.call(null,vec__42634,(0),null);
var map__42635__$1 = ((((!((map__42635 == null)))?((((map__42635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42635):map__42635);
var vec__42636 = cljs.core.get.call(null,map__42635__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__42636,(0),null);
var cp12 = cljs.core.nth.call(null,vec__42636,(1),null);
var map__42637 = cljs.core.nth.call(null,vec__42634,(1),null);
var map__42637__$1 = ((((!((map__42637 == null)))?((((map__42637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42637):map__42637);
var vec__42638 = cljs.core.get.call(null,map__42637__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__42638,(0),null);
var cp22 = cljs.core.nth.call(null,vec__42638,(1),null);
var p2 = cljs.core.get.call(null,map__42637__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__42627,map__42628,map__42628__$1,first_point,vec__42629,fpx,fpy,vec__42630,vec__42631,fcx,fcy,ml,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_smooth_svg_path = (function dynomics$ui$svg$to_smooth_svg_path(p__42641){
var vec__42656 = p__42641;
var map__42657 = cljs.core.nth.call(null,vec__42656,(0),null);
var map__42657__$1 = ((((!((map__42657 == null)))?((((map__42657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42657):map__42657);
var first_point = map__42657__$1;
var vec__42658 = cljs.core.get.call(null,map__42657__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__42658,(0),null);
var fpy = cljs.core.nth.call(null,vec__42658,(1),null);
var vec__42659 = cljs.core.get.call(null,map__42657__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__42660 = cljs.core.nth.call(null,vec__42659,(0),null);
var fcx = cljs.core.nth.call(null,vec__42660,(0),null);
var fcy = cljs.core.nth.call(null,vec__42660,(1),null);
var points = cljs.core.nthnext.call(null,vec__42656,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__42656,map__42657,map__42657__$1,first_point,vec__42658,fpx,fpy,vec__42659,vec__42660,fcx,fcy,points){
return (function (p__42662){
var vec__42663 = p__42662;
var map__42664 = cljs.core.nth.call(null,vec__42663,(0),null);
var map__42664__$1 = ((((!((map__42664 == null)))?((((map__42664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42664):map__42664);
var vec__42665 = cljs.core.get.call(null,map__42664__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp1 = cljs.core.nth.call(null,vec__42665,(0),null);
var map__42666 = cljs.core.nth.call(null,vec__42663,(1),null);
var map__42666__$1 = ((((!((map__42666 == null)))?((((map__42666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42666):map__42666);
var vec__42667 = cljs.core.get.call(null,map__42666__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp2 = cljs.core.nth.call(null,vec__42667,(0),null);
var p2 = cljs.core.get.call(null,map__42666__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return cljs.core.concat.call(null," S",cljs.core.interpose.call(null,",",cp1)," ",cljs.core.interpose.call(null,",",p2));
});})(vec__42656,map__42657,map__42657__$1,first_point,vec__42658,fpx,fpy,vec__42659,vec__42660,fcx,fcy,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_closed_svg_path = (function dynomics$ui$svg$to_closed_svg_path(p__42670){
var vec__42685 = p__42670;
var map__42686 = cljs.core.nth.call(null,vec__42685,(0),null);
var map__42686__$1 = ((((!((map__42686 == null)))?((((map__42686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42686):map__42686);
var first_point = map__42686__$1;
var vec__42687 = cljs.core.get.call(null,map__42686__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__42687,(0),null);
var fpy = cljs.core.nth.call(null,vec__42687,(1),null);
var vec__42688 = cljs.core.get.call(null,map__42686__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__42689 = cljs.core.nth.call(null,vec__42688,(0),null);
var fcx = cljs.core.nth.call(null,vec__42689,(0),null);
var fcy = cljs.core.nth.call(null,vec__42689,(1),null);
var points = cljs.core.nthnext.call(null,vec__42685,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__42685,map__42686,map__42686__$1,first_point,vec__42687,fpx,fpy,vec__42688,vec__42689,fcx,fcy,points){
return (function (p__42691){
var vec__42692 = p__42691;
var map__42693 = cljs.core.nth.call(null,vec__42692,(0),null);
var map__42693__$1 = ((((!((map__42693 == null)))?((((map__42693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42693):map__42693);
var vec__42694 = cljs.core.get.call(null,map__42693__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__42694,(0),null);
var cp12 = cljs.core.nth.call(null,vec__42694,(1),null);
var map__42695 = cljs.core.nth.call(null,vec__42692,(1),null);
var map__42695__$1 = ((((!((map__42695 == null)))?((((map__42695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42695):map__42695);
var vec__42696 = cljs.core.get.call(null,map__42695__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__42696,(0),null);
var cp22 = cljs.core.nth.call(null,vec__42696,(1),null);
var p2 = cljs.core.get.call(null,map__42695__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__42685,map__42686,map__42686__$1,first_point,vec__42687,fpx,fpy,vec__42688,vec__42689,fcx,fcy,points))
,cljs.core.partition.call(null,(2),cljs.core.cons.call(null,first_point,points)))));
});

//# sourceMappingURL=svg.js.map