// Compiled by ClojureScript 1.8.34 {}
goog.provide('dynomics.ui.svg');
goog.require('cljs.core');
/**
 * Returns an SVG transform string from the given list e.g. (trs :t [0.1 0.2] :s [0.5 0.5] :r [1.0])
 */
dynomics.ui.svg.trs = (function dynomics$ui$svg$trs(var_args){
var args__36267__auto__ = [];
var len__36260__auto___370975 = arguments.length;
var i__36261__auto___370976 = (0);
while(true){
if((i__36261__auto___370976 < len__36260__auto___370975)){
args__36267__auto__.push((arguments[i__36261__auto___370976]));

var G__370977 = (i__36261__auto___370976 + (1));
i__36261__auto___370976 = G__370977;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((0) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((0)),(0),null)):null);
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(argseq__36268__auto__);
});

dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic = (function (transforms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p__370970){
var vec__370971 = p__370970;
var k = cljs.core.nth.call(null,vec__370971,(0),null);
var p = cljs.core.nthnext.call(null,vec__370971,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),"translate",new cljs.core.Keyword(null,"r","r",-471384190),"rotate",new cljs.core.Keyword(null,"s","s",1705939918),"scale"], null).call(null,k),"(",cljs.core.interpose.call(null,",",cljs.core.map.call(null,cljs.core.double$,p)),") ");
}),transforms));
});

dynomics.ui.svg.trs.cljs$lang$maxFixedArity = (0);

dynomics.ui.svg.trs.cljs$lang$applyTo = (function (seq370966){
return dynomics.ui.svg.trs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq370966));
});
dynomics.ui.svg.make_bezier_point = (function dynomics$ui$svg$make_bezier_point(var_args){
var args370982 = [];
var len__36260__auto___370990 = arguments.length;
var i__36261__auto___370992 = (0);
while(true){
if((i__36261__auto___370992 < len__36260__auto___370990)){
args370982.push((arguments[i__36261__auto___370992]));

var G__370994 = (i__36261__auto___370992 + (1));
i__36261__auto___370992 = G__370994;
continue;
} else {
}
break;
}

var G__370986 = args370982.length;
switch (G__370986) {
case 1:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args370982.length)].join('')));

}
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$1 = (function (p__370987){
var vec__370988 = p__370987;
var point = cljs.core.nth.call(null,vec__370988,(0),null);
var control_points = cljs.core.nthnext.call(null,vec__370988,(1));
return dynomics.ui.svg.make_bezier_point.call(null,point,control_points);
});

dynomics.ui.svg.make_bezier_point.cljs$core$IFn$_invoke$arity$2 = (function (point,control_points){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1813198264),point,new cljs.core.Keyword(null,"control-points","control-points",-238538325),control_points], null);
});

dynomics.ui.svg.make_bezier_point.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_beziers = (function dynomics$ui$svg$to_beziers(var_args){
var args371003 = [];
var len__36260__auto___371012 = arguments.length;
var i__36261__auto___371013 = (0);
while(true){
if((i__36261__auto___371013 < len__36260__auto___371012)){
args371003.push((arguments[i__36261__auto___371013]));

var G__371014 = (i__36261__auto___371013 + (1));
i__36261__auto___371013 = G__371014;
continue;
} else {
}
break;
}

var G__371008 = args371003.length;
switch (G__371008) {
case 1:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args371003.length)].join('')));

}
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$1 = (function (nodes){
return dynomics.ui.svg.to_beziers.call(null,nodes,cljs.core.repeat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
});

dynomics.ui.svg.to_beziers.cljs$core$IFn$_invoke$arity$2 = (function (nodes,control_point_ids){
return cljs.core.map.call(null,(function (p__371009,cpids){
var map__371010 = p__371009;
var map__371010__$1 = ((((!((map__371010 == null)))?((((map__371010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371010):map__371010);
var p = cljs.core.get.call(null,map__371010__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var cp = cljs.core.get.call(null,map__371010__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return dynomics.ui.svg.make_bezier_point.call(null,p,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._PLUS_,p),new cljs.core.Keyword(null,"position","position",-2011731912)),cljs.core.vals.call(null,cljs.core.select_keys.call(null,cp,cpids)))));
}),nodes,control_point_ids);
});

dynomics.ui.svg.to_beziers.cljs$lang$maxFixedArity = 2;
dynomics.ui.svg.to_svg_path = (function dynomics$ui$svg$to_svg_path(p__371025){
var vec__371050 = p__371025;
var map__371051 = cljs.core.nth.call(null,vec__371050,(0),null);
var map__371051__$1 = ((((!((map__371051 == null)))?((((map__371051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371051):map__371051);
var first_point = map__371051__$1;
var vec__371052 = cljs.core.get.call(null,map__371051__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__371052,(0),null);
var fpy = cljs.core.nth.call(null,vec__371052,(1),null);
var vec__371053 = cljs.core.get.call(null,map__371051__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__371054 = cljs.core.nth.call(null,vec__371053,(0),null);
var fcx = cljs.core.nth.call(null,vec__371054,(0),null);
var fcy = cljs.core.nth.call(null,vec__371054,(1),null);
var _ = cljs.core.nth.call(null,vec__371053,(1),null);
var ml = cljs.core.get.call(null,map__371051__$1,new cljs.core.Keyword(null,"ml","ml",1909675057),"M");
var points = cljs.core.nthnext.call(null,vec__371050,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ml,fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__371050,map__371051,map__371051__$1,first_point,vec__371052,fpx,fpy,vec__371053,vec__371054,fcx,fcy,_,ml,points){
return (function (p__371058){
var vec__371059 = p__371058;
var map__371060 = cljs.core.nth.call(null,vec__371059,(0),null);
var map__371060__$1 = ((((!((map__371060 == null)))?((((map__371060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371060):map__371060);
var vec__371061 = cljs.core.get.call(null,map__371060__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__371061,(0),null);
var cp12 = cljs.core.nth.call(null,vec__371061,(1),null);
var map__371062 = cljs.core.nth.call(null,vec__371059,(1),null);
var map__371062__$1 = ((((!((map__371062 == null)))?((((map__371062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371062):map__371062);
var vec__371063 = cljs.core.get.call(null,map__371062__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__371063,(0),null);
var cp22 = cljs.core.nth.call(null,vec__371063,(1),null);
var p2 = cljs.core.get.call(null,map__371062__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp12)," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__371050,map__371051,map__371051__$1,first_point,vec__371052,fpx,fpy,vec__371053,vec__371054,fcx,fcy,_,ml,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_smooth_svg_path = (function dynomics$ui$svg$to_smooth_svg_path(p__371092){
var vec__371120 = p__371092;
var map__371121 = cljs.core.nth.call(null,vec__371120,(0),null);
var map__371121__$1 = ((((!((map__371121 == null)))?((((map__371121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371121):map__371121);
var first_point = map__371121__$1;
var vec__371122 = cljs.core.get.call(null,map__371121__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__371122,(0),null);
var fpy = cljs.core.nth.call(null,vec__371122,(1),null);
var vec__371123 = cljs.core.get.call(null,map__371121__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__371124 = cljs.core.nth.call(null,vec__371123,(0),null);
var fcx = cljs.core.nth.call(null,vec__371124,(0),null);
var fcy = cljs.core.nth.call(null,vec__371124,(1),null);
var points = cljs.core.nthnext.call(null,vec__371120,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__371120,map__371121,map__371121__$1,first_point,vec__371122,fpx,fpy,vec__371123,vec__371124,fcx,fcy,points){
return (function (p__371130){
var vec__371131 = p__371130;
var map__371132 = cljs.core.nth.call(null,vec__371131,(0),null);
var map__371132__$1 = ((((!((map__371132 == null)))?((((map__371132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371132):map__371132);
var vec__371133 = cljs.core.get.call(null,map__371132__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var _ = cljs.core.nth.call(null,vec__371133,(0),null);
var cp1 = cljs.core.nth.call(null,vec__371133,(1),null);
var map__371134 = cljs.core.nth.call(null,vec__371131,(1),null);
var map__371134__$1 = ((((!((map__371134 == null)))?((((map__371134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371134):map__371134);
var vec__371135 = cljs.core.get.call(null,map__371134__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp2 = cljs.core.nth.call(null,vec__371135,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__371135,(1),null);
var p2 = cljs.core.get.call(null,map__371134__$1,new cljs.core.Keyword(null,"point","point",1813198264));
return cljs.core.concat.call(null," Q",cljs.core.interpose.call(null,",",cp1)," ",cljs.core.interpose.call(null,",",p2));
});})(vec__371120,map__371121,map__371121__$1,first_point,vec__371122,fpx,fpy,vec__371123,vec__371124,fcx,fcy,points))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,first_point,points)))));
});
dynomics.ui.svg.to_closed_svg_path = (function dynomics$ui$svg$to_closed_svg_path(p__371161){
var vec__371181 = p__371161;
var map__371182 = cljs.core.nth.call(null,vec__371181,(0),null);
var map__371182__$1 = ((((!((map__371182 == null)))?((((map__371182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371182):map__371182);
var first_point = map__371182__$1;
var vec__371183 = cljs.core.get.call(null,map__371182__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var fpx = cljs.core.nth.call(null,vec__371183,(0),null);
var fpy = cljs.core.nth.call(null,vec__371183,(1),null);
var vec__371184 = cljs.core.get.call(null,map__371182__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var vec__371185 = cljs.core.nth.call(null,vec__371184,(0),null);
var fcx = cljs.core.nth.call(null,vec__371185,(0),null);
var fcy = cljs.core.nth.call(null,vec__371185,(1),null);
var points = cljs.core.nthnext.call(null,vec__371181,(1));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",fpx,",",fpy], null),cljs.core.mapcat.call(null,((function (vec__371181,map__371182,map__371182__$1,first_point,vec__371183,fpx,fpy,vec__371184,vec__371185,fcx,fcy,points){
return (function (p__371189){
var vec__371190 = p__371189;
var map__371191 = cljs.core.nth.call(null,vec__371190,(0),null);
var map__371191__$1 = ((((!((map__371191 == null)))?((((map__371191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371191):map__371191);
var vec__371192 = cljs.core.get.call(null,map__371191__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp11 = cljs.core.nth.call(null,vec__371192,(0),null);
var cp12 = cljs.core.nth.call(null,vec__371192,(1),null);
var map__371193 = cljs.core.nth.call(null,vec__371190,(1),null);
var map__371193__$1 = ((((!((map__371193 == null)))?((((map__371193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371193):map__371193);
var vec__371194 = cljs.core.get.call(null,map__371193__$1,new cljs.core.Keyword(null,"control-points","control-points",-238538325));
var cp21 = cljs.core.nth.call(null,vec__371194,(0),null);
var cp22 = cljs.core.nth.call(null,vec__371194,(1),null);
var p2 = cljs.core.get.call(null,map__371193__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(cljs.core.truth_(cp22)){
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",cp22)," ",cljs.core.interpose.call(null,",",p2));
} else {
return cljs.core.concat.call(null," C",cljs.core.interpose.call(null,",",(cljs.core.truth_(cp12)?cp12:cp11))," ",cljs.core.interpose.call(null,",",cp21)," ",cljs.core.interpose.call(null,",",p2));
}
});})(vec__371181,map__371182,map__371182__$1,first_point,vec__371183,fpx,fpy,vec__371184,vec__371185,fcx,fcy,points))
,cljs.core.partition.call(null,(2),cljs.core.cons.call(null,first_point,points)))));
});
