// Compiled by ClojureScript 1.7.170 {}
goog.provide('dynomics.ui.svg');
goog.require('cljs.core');
/**
 * Returns an SVG transform string from the given list e.g. (trs :t [0.1 0.2] :s [0.5 0.5] :r [1.0])
 */
dynomics.ui.svg.trs = (function dynomics$ui$svg$trs(var_args){
var args__25286__auto__ = [];
var len__25279__auto___196476 = arguments.length;
var i__25280__auto___196477 = (0);
while(true){
if((i__25280__auto___196477 < len__25279__auto___196476)){
args__25286__auto__.push((arguments[i__25280__auto___196477]));

var G__196478 = (i__25280__auto___196477 + (1));
i__25280__auto___196477 = G__196478;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((0) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((0)),(0))):null);
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(argseq__25287__auto__);
});

dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic = (function (transforms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p__196474){
var vec__196475 = p__196474;
var k = cljs.core.nth.call(null,vec__196475,(0),null);
var p = cljs.core.nthnext.call(null,vec__196475,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),"translate",new cljs.core.Keyword(null,"r","r",-471384190),"rotate",new cljs.core.Keyword(null,"s","s",1705939918),"scale"], null).call(null,k),"(",cljs.core.interpose.call(null,",",cljs.core.map.call(null,cljs.core.double$,p)),") ");
}),transforms));
});

dynomics.ui.svg.trs.cljs$lang$maxFixedArity = (0);

dynomics.ui.svg.trs.cljs$lang$applyTo = (function (seq196473){
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq196473));
});
dynomics.ui.svg.make_bezier = (function dynomics$ui$svg$make_bezier(p__196479){
var vec__196481 = p__196479;
var point = cljs.core.nth.call(null,vec__196481,(0),null);
var control_points = cljs.core.nthnext.call(null,vec__196481,(1));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),point,new cljs.core.Keyword(null,"control-points","control-points",-238538325),control_points], null);
});
dynomics.ui.svg.to_svg_path = (function dynomics$ui$svg$to_svg_path(p__196482){
var vec__196497 = p__196482;
var map__196498 = cljs.core.nth.call(null,vec__196497,(0),null);
var map__196498__$1 = ((((!((map__196498 == null)))?((((map__196498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__196498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__196498):map__196498);
var first_point = map__196498__$1;
var vec__196499 = cljs.core.get.call(null,map__196498__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__196499,(0),null);
var fpy = cljs.core.nth.call(null,vec__196499,(1),null);
var vec__196500 = cljs.core.get.call(null,map__196498__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__196501 = cljs.core.nth.call(null,vec__196500,(0),null);
var fcx = cljs.core.nth.call(null,vec__196501,(0),null);
var fcy = cljs.core.nth.call(null,vec__196501,(1),null);
var ml = cljs.core.get.call(null,map__196498__$1,new cljs.core.Keyword(null,"ml","ml",1909675057),"M");
var points = cljs.core.nthnext.call(null,vec__196497,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ml,fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__196497,map__196498,map__196498__$1,first_point,vec__196499,fpx,fpy,vec__196500,vec__196501,fcx,fcy,ml,points){
return (function (p__196503){
var vec__196504 = p__196503;
var map__196505 = cljs.core.nth.call(null,vec__196504,(0),null);
var map__196505__$1 = ((((!((map__196505 == null)))?((((map__196505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__196505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__196505):map__196505);
var vec__196506 = cljs.core.get.call(null,map__196505__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__196506,(0),null);
var cp12 = cljs.core.nth.call(null,vec__196506,(1),null);
var map__196507 = cljs.core.nth.call(null,vec__196504,(1),null);
var map__196507__$1 = ((((!((map__196507 == null)))?((((map__196507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__196507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__196507):map__196507);
var vec__196508 = cljs.core.get.call(null,map__196507__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__196508,(0),null);
var cp22 = cljs.core.nth.call(null,vec__196508,(1),null);
var p2 = cljs.core.get.call(null,map__196507__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__196497,map__196498,map__196498__$1,first_point,vec__196499,fpx,fpy,vec__196500,vec__196501,fcx,fcy,ml,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_smooth_svg_path = (function dynomics$ui$svg$to_smooth_svg_path(p__196511){
var vec__196526 = p__196511;
var map__196527 = cljs.core.nth.call(null,vec__196526,(0),null);
var map__196527__$1 = ((((!((map__196527 == null)))?((((map__196527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__196527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__196527):map__196527);
var first_point = map__196527__$1;
var vec__196528 = cljs.core.get.call(null,map__196527__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__196528,(0),null);
var fpy = cljs.core.nth.call(null,vec__196528,(1),null);
var vec__196529 = cljs.core.get.call(null,map__196527__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__196530 = cljs.core.nth.call(null,vec__196529,(0),null);
var fcx = cljs.core.nth.call(null,vec__196530,(0),null);
var fcy = cljs.core.nth.call(null,vec__196530,(1),null);
var points = cljs.core.nthnext.call(null,vec__196526,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__196526,map__196527,map__196527__$1,first_point,vec__196528,fpx,fpy,vec__196529,vec__196530,fcx,fcy,points){
return (function (p__196532){
var vec__196533 = p__196532;
var map__196534 = cljs.core.nth.call(null,vec__196533,(0),null);
var map__196534__$1 = ((((!((map__196534 == null)))?((((map__196534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__196534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__196534):map__196534);
var vec__196535 = cljs.core.get.call(null,map__196534__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp1 = cljs.core.nth.call(null,vec__196535,(0),null);
var map__196536 = cljs.core.nth.call(null,vec__196533,(1),null);
var map__196536__$1 = ((((!((map__196536 == null)))?((((map__196536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__196536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__196536):map__196536);
var vec__196537 = cljs.core.get.call(null,map__196536__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp2 = cljs.core.nth.call(null,vec__196537,(0),null);
var p2 = cljs.core.get.call(null,map__196536__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return cljs.core.concat.call(null," S",cljs.core.interpose.call(null,",",cp1)," ",cljs.core.interpose.call(null,",",p2));
});})(vec__196526,map__196527,map__196527__$1,first_point,vec__196528,fpx,fpy,vec__196529,vec__196530,fcx,fcy,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_closed_svg_path = (function dynomics$ui$svg$to_closed_svg_path(p__196540){
var vec__196555 = p__196540;
var map__196556 = cljs.core.nth.call(null,vec__196555,(0),null);
var map__196556__$1 = ((((!((map__196556 == null)))?((((map__196556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__196556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__196556):map__196556);
var first_point = map__196556__$1;
var vec__196557 = cljs.core.get.call(null,map__196556__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__196557,(0),null);
var fpy = cljs.core.nth.call(null,vec__196557,(1),null);
var vec__196558 = cljs.core.get.call(null,map__196556__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__196559 = cljs.core.nth.call(null,vec__196558,(0),null);
var fcx = cljs.core.nth.call(null,vec__196559,(0),null);
var fcy = cljs.core.nth.call(null,vec__196559,(1),null);
var points = cljs.core.nthnext.call(null,vec__196555,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__196555,map__196556,map__196556__$1,first_point,vec__196557,fpx,fpy,vec__196558,vec__196559,fcx,fcy,points){
return (function (p__196561){
var vec__196562 = p__196561;
var map__196563 = cljs.core.nth.call(null,vec__196562,(0),null);
var map__196563__$1 = ((((!((map__196563 == null)))?((((map__196563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__196563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__196563):map__196563);
var vec__196564 = cljs.core.get.call(null,map__196563__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__196564,(0),null);
var cp12 = cljs.core.nth.call(null,vec__196564,(1),null);
var map__196565 = cljs.core.nth.call(null,vec__196562,(1),null);
var map__196565__$1 = ((((!((map__196565 == null)))?((((map__196565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__196565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__196565):map__196565);
var vec__196566 = cljs.core.get.call(null,map__196565__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__196566,(0),null);
var cp22 = cljs.core.nth.call(null,vec__196566,(1),null);
var p2 = cljs.core.get.call(null,map__196565__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__196555,map__196556,map__196556__$1,first_point,vec__196557,fpx,fpy,vec__196558,vec__196559,fcx,fcy,points))
,cljs.core.partition.call(null,(2),cljs.core.cons.call(null,first_point,points)))));
});

//# sourceMappingURL=svg.js.map