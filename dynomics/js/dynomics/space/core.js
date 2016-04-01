// Compiled by ClojureScript 1.8.40 {}
goog.provide('dynomics.space.core');
goog.require('cljs.core');
goog.require('loom.graph');
goog.require('loom.alg');
goog.require('dynomics.ui.svg');
goog.require('dynomics.space.graph');
goog.require('clojure.set');
dynomics.space.core.F = (function dynomics$space$core$F(f,y){
return (function (x){
return f.call(null,x,y);
});
});
dynomics.space.core.round = (function dynomics$space$core$round(x){
return Math.round(x);
});
dynomics.space.core.cos = (function dynomics$space$core$cos(x){
return Math.cos(x);
});
dynomics.space.core.sin = (function dynomics$space$core$sin(x){
return Math.sin(x);
});
dynomics.space.core._LT_unit = (function dynomics$space$core$_LT_unit(x){
if((x < (0))){
var x__26158__auto__ = x;
var y__26159__auto__ = (-1);
return ((x__26158__auto__ > y__26159__auto__) ? x__26158__auto__ : y__26159__auto__);
} else {
var x__26165__auto__ = x;
var y__26166__auto__ = (1);
return ((x__26165__auto__ < y__26166__auto__) ? x__26165__auto__ : y__26166__auto__);
}
});
dynomics.space.core.unit = (function dynomics$space$core$unit(x){
if((x < (0))){
return (-1);
} else {
if((x > (0))){
return (1);
} else {
return (0);
}
}
});
dynomics.space.core.abs = (function dynomics$space$core$abs(x){
return Math.abs(x);
});
dynomics.space.core.PI = Math.PI;
dynomics.space.core.PI2 = ((2) * dynomics.space.core.PI);
dynomics.space.core.PIb4 = (0.25 * dynomics.space.core.PI);
dynomics.space.core.r2d = ((180) / dynomics.space.core.PI);
dynomics.space.core.angle = (function dynomics$space$core$angle(p__91316){
var vec__91318 = p__91316;
var x = cljs.core.nth.call(null,vec__91318,(0),null);
var y = cljs.core.nth.call(null,vec__91318,(1),null);
return Math.atan2(x,y);
});
dynomics.space.core.p2c = (function dynomics$space$core$p2c(p__91320){
var vec__91323 = p__91320;
var r = cljs.core.nth.call(null,vec__91323,(0),null);
var theta = cljs.core.nth.call(null,vec__91323,(1),null);
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,r),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.core.cos.call(null,theta),dynomics.space.core.sin.call(null,theta)], null));
});
dynomics.space.core.c_STAR_ = (function dynomics$space$core$c_STAR_(p__91327,p__91328){
var vec__91341 = p__91327;
var ar = cljs.core.nth.call(null,vec__91341,(0),null);
var ai = cljs.core.nth.call(null,vec__91341,(1),null);
var vec__91342 = p__91328;
var br = cljs.core.nth.call(null,vec__91342,(0),null);
var bi = cljs.core.nth.call(null,vec__91342,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((ar * br) - (ai * bi)),((ai * br) + (ar * bi))], null);
});
dynomics.space.core.c_PLUS_ = (function dynomics$space$core$c_PLUS_(a,b){
return cljs.core.map.call(null,cljs.core._PLUS_,a,b);
});
dynomics.space.core.twin = (function dynomics$space$core$twin(id,n){
return cljs.core.mod.call(null,(id + (n / (2))),n);
});
dynomics.space.core.midpoints = (function dynomics$space$core$midpoints(points){
return cljs.core.map.call(null,(function (p__91376){
var vec__91377 = p__91376;
var p1 = cljs.core.nth.call(null,vec__91377,(0),null);
var p2 = cljs.core.nth.call(null,vec__91377,(1),null);
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,0.5),cljs.core.map.call(null,cljs.core._PLUS_,p1,p2));
}),cljs.core.partition.call(null,(2),(1),points));
});
dynomics.space.core.move_along = (function dynomics$space$core$move_along(s,p1,p2){
var v = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,s),cljs.core.map.call(null,cljs.core._,p1,p2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,v,p2)),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._,p1,v))], null);
});
dynomics.space.core.dot = (function dynomics$space$core$dot(var_args){
var args__26903__auto__ = [];
var len__26896__auto___91392 = arguments.length;
var i__26897__auto___91393 = (0);
while(true){
if((i__26897__auto___91393 < len__26896__auto___91392)){
args__26903__auto__.push((arguments[i__26897__auto___91393]));

var G__91395 = (i__26897__auto___91393 + (1));
i__26897__auto___91393 = G__91395;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((0) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((0)),(0),null)):null);
return dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic(argseq__26904__auto__);
});

dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic = (function (x){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.apply.call(null,cljs.core.map,cljs.core._STAR_,x));
});

dynomics.space.core.dot.cljs$lang$maxFixedArity = (0);

dynomics.space.core.dot.cljs$lang$applyTo = (function (seq91391){
return dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq91391));
});
dynomics.space.core.sqrd = (function dynomics$space$core$sqrd(var_args){
var args91397 = [];
var len__26896__auto___91404 = arguments.length;
var i__26897__auto___91405 = (0);
while(true){
if((i__26897__auto___91405 < len__26896__auto___91404)){
args91397.push((arguments[i__26897__auto___91405]));

var G__91407 = (i__26897__auto___91405 + (1));
i__26897__auto___91405 = G__91407;
continue;
} else {
}
break;
}

var G__91401 = args91397.length;
switch (G__91401) {
case 2:
return dynomics.space.core.sqrd.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dynomics.space.core.sqrd.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91397.length)].join('')));

}
});

dynomics.space.core.sqrd.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return dynomics.space.core.sqrd.call(null,cljs.core.map.call(null,cljs.core._,a,b));
});

dynomics.space.core.sqrd.cljs$core$IFn$_invoke$arity$1 = (function (a){
return dynomics.space.core.dot.call(null,a,a);
});

dynomics.space.core.sqrd.cljs$lang$maxFixedArity = 2;
dynomics.space.core.to_space = (function dynomics$space$core$to_space(var_args){
var args91413 = [];
var len__26896__auto___91429 = arguments.length;
var i__26897__auto___91430 = (0);
while(true){
if((i__26897__auto___91430 < len__26896__auto___91429)){
args91413.push((arguments[i__26897__auto___91430]));

var G__91431 = (i__26897__auto___91430 + (1));
i__26897__auto___91430 = G__91431;
continue;
} else {
}
break;
}

var G__91415 = args91413.length;
switch (G__91415) {
case 3:
return dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91413.length)].join('')));

}
});

dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$3 = (function (p__91416,path,p__91417){
var vec__91418 = p__91416;
var x = cljs.core.nth.call(null,vec__91418,(0),null);
var y = cljs.core.nth.call(null,vec__91418,(1),null);
var map__91419 = p__91417;
var map__91419__$1 = ((((!((map__91419 == null)))?((((map__91419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91419):map__91419);
var space = map__91419__$1;
var scale = cljs.core.get.call(null,map__91419__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var vec__91422 = path;
var _ = cljs.core.nth.call(null,vec__91422,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__91422,(1),null);
var nid = cljs.core.nth.call(null,vec__91422,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__91422,(3),null);
var cid = cljs.core.nth.call(null,vec__91422,(4),null);
var vec__91423 = cljs.core.get_in.call(null,space,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx = cljs.core.nth.call(null,vec__91423,(0),null);
var ny = cljs.core.nth.call(null,vec__91423,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - nx),(y - ny)], null)], null)], null);
});

dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$2 = (function (p__91425,scale){
var vec__91426 = p__91425;
var vec__91427 = cljs.core.nth.call(null,vec__91426,(0),null);
var x = cljs.core.nth.call(null,vec__91427,(0),null);
var y = cljs.core.nth.call(null,vec__91427,(1),null);
var vec__91428 = cljs.core.nth.call(null,vec__91426,(1),null);
var nx = cljs.core.nth.call(null,vec__91428,(0),null);
var ny = cljs.core.nth.call(null,vec__91428,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - nx),(y - ny)], null);
});

dynomics.space.core.to_space.cljs$lang$maxFixedArity = 3;
dynomics.space.core.to_local = (function dynomics$space$core$to_local(scale,p__91447,p__91448){
var vec__91451 = p__91447;
var x = cljs.core.nth.call(null,vec__91451,(0),null);
var y = cljs.core.nth.call(null,vec__91451,(1),null);
var vec__91452 = p__91448;
var lx = cljs.core.nth.call(null,vec__91452,(0),null);
var ly = cljs.core.nth.call(null,vec__91452,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(scale * (x - lx)),(scale * (y - ly))], null);
});
/**
 * Returns the pair of control points with
 *   mirrored positions for the given control point
 */
dynomics.space.core.mirror_node = (function dynomics$space$core$mirror_node(p__91466,path,p__91467){
var vec__91482 = p__91466;
var x = cljs.core.nth.call(null,vec__91482,(0),null);
var y = cljs.core.nth.call(null,vec__91482,(1),null);
var map__91483 = p__91467;
var map__91483__$1 = ((((!((map__91483 == null)))?((((map__91483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91483):map__91483);
var space = map__91483__$1;
var nodes = cljs.core.get.call(null,map__91483__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var node_scale = cljs.core.get.call(null,map__91483__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var vec__91489 = path;
var _ = cljs.core.nth.call(null,vec__91489,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__91489,(1),null);
var nid = cljs.core.nth.call(null,vec__91489,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__91489,(3),null);
var cid = cljs.core.nth.call(null,vec__91489,(4),null);
var nc = cljs.core.count.call(null,cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"connections","connections",-2064090887)], null)));
var cp = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.mod.call(null,(cid + (0.5 * nc)),nc)], null);
var vec__91490 = cljs.core.get_in.call(null,space,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx = cljs.core.nth.call(null,vec__91490,(0),null);
var ny = cljs.core.nth.call(null,vec__91490,(1),null);
var p = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - nx),(y - ny)], null);
var x__$1 = ((cljs.core.odd_QMARK_.call(null,cid))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp,dynomics.space.core.c_STAR_.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null)], null);
});
dynomics.space.core.node_types = cljs.core.zipmap.call(null,cljs.core.range.call(null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"stable","stable",-508724660),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attractor","attractor",-2094244336),new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(3)], true, false)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"unstable","unstable",-1893110769),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"repellor","repellor",1657227785),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(1)], true, false)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"unstable","unstable",-1893110769),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"saddle","saddle",1716877074),new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(2)], true, false)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"unstable","unstable",-1893110769),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"saddle","saddle",1716877074),new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(0)], true, false)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"unstable","unstable",-1893110769),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"saddle","saddle",1716877074),new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(3)], true, false)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"unstable","unstable",-1893110769),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"saddle","saddle",1716877074),new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(1)], true, false)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"unstable","unstable",-1893110769),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spiral","spiral",-1966897057),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"anticlockwise","anticlockwise",1042131704),new cljs.core.Keyword(null,"id","id",-1388402092),(6),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(0)], true, false)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"unstable","unstable",-1893110769),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spiral","spiral",-1966897057),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918),new cljs.core.Keyword(null,"id","id",-1388402092),(7),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(2)], true, false)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"stable","stable",-508724660),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spiral","spiral",-1966897057),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"anticlockwise","anticlockwise",1042131704),new cljs.core.Keyword(null,"id","id",-1388402092),(8),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(0)], true, false)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"stable","stable",-508724660),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spiral","spiral",-1966897057),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918),new cljs.core.Keyword(null,"id","id",-1388402092),(9),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(2)], true, false)], null)], null));
/**
 * 
 *   Returns the quadrant types of the given vectors
 *   e.g. (quadrants-types-by-position {:node-type 10 :position [1 0]} {:node-type 5 :position [-1 0]})
 *   => ((1 2) (1 2))
 * 
 *   TODO need to return the types in the right order, as this
 *   will give a false-positive when 2 nodes of the same type are
 *   connected by the same connectors, as it doesn't take into account
 *   that the nodes themselves are above and below eachother
 *   
 */
dynomics.space.core.quadrants_types_by_position = (function dynomics$space$core$quadrants_types_by_position(p__91587){
var map__91597 = p__91587;
var map__91597__$1 = ((((!((map__91597 == null)))?((((map__91597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91597):map__91597);
var r1 = cljs.core.get.call(null,map__91597__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var p1 = cljs.core.get.call(null,map__91597__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.map.call(null,((function (map__91597,map__91597__$1,r1,p1){
return (function (i){
return cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295)], null));
});})(map__91597,map__91597__$1,r1,p1))
.call(null,r1),cljs.core.comp.call(null,cljs.core.juxt.call(null,cljs.core.partial.call(null,dynomics.space.core.c_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),cljs.core.partial.call(null,dynomics.space.core.c_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null))),cljs.core.partial.call(null,cljs.core.map,cljs.core.comp.call(null,dynomics.space.core._LT_unit,dynomics.space.core.round,cljs.core.double$))).call(null,p1));
});
dynomics.space.core.quadrant_vectors_by_connectors = cljs.core.zipmap.call(null,cljs.core.take.call(null,(4),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.hash_set),cljs.core.partition.call(null,(2),(1),cljs.core.cycle.call(null,cljs.core.range.call(null,(4)))))),cljs.core.iterate.call(null,cljs.core.partial.call(null,dynomics.space.core.c_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)));
dynomics.space.core.quadrant_types_by_connector_pair = (function dynomics$space$core$quadrant_types_by_connector_pair(node_type,quadrant_vector){
return cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_type,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),quadrant_vector], null));
});
dynomics.space.core.compare_quadrants = (function dynomics$space$core$compare_quadrants(qs){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,cljs.core.vec,qs));
});
dynomics.space.core.connections_by_vector = cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(3)], true, false);
dynomics.space.core.connection_id = (function dynomics$space$core$connection_id(q){
return dynomics.space.core.connections_by_vector.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,dynomics.space.core.unit,q)));
});
dynomics.space.core.nearest_connection_fn = (function dynomics$space$core$nearest_connection_fn(f,p){
return f.call(null,cljs.core.first.call(null,cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,dynomics.space.core.sqrd,p),cljs.core.key),dynomics.space.core.connections_by_vector)));
});
dynomics.space.core.nearest_connection = cljs.core.partial.call(null,dynomics.space.core.nearest_connection_fn,cljs.core.first);
dynomics.space.core.nearest_connection_id = cljs.core.partial.call(null,dynomics.space.core.nearest_connection_fn,cljs.core.last);
dynomics.space.core.default_connections = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__91613){
var vec__91614 = p__91613;
var p = cljs.core.nth.call(null,vec__91614,(0),null);
var id = cljs.core.nth.call(null,vec__91614,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,0.025),p),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connection","connection",-123599300)], null);
}),dynomics.space.core.connections_by_vector));
/**
 * Returns a node of the given type
 */
dynomics.space.core.make_intersection_node = (function dynomics$space$core$make_intersection_node(var_args){
var args91626 = [];
var len__26896__auto___91634 = arguments.length;
var i__26897__auto___91635 = (0);
while(true){
if((i__26897__auto___91635 < len__26896__auto___91634)){
args91626.push((arguments[i__26897__auto___91635]));

var G__91638 = (i__26897__auto___91635 + (1));
i__26897__auto___91635 = G__91638;
continue;
} else {
}
break;
}

var G__91629 = args91626.length;
switch (G__91629) {
case 1:
return dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91626.length)].join('')));

}
});

dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$1 = (function (type_id){
return dynomics.space.core.make_intersection_node.call(null,type_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.5 * cljs.core.mod.call(null,type_id,((2) * (cljs.core.mod.call(null,(type_id + (1)),(2)) + (1))))),(0.5 * cljs.core.mod.call(null,(type_id + (1)),(2)))], null));
});

dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$2 = (function (type_id,position){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersection","intersection",2003891010),new cljs.core.Keyword(null,"node-type","node-type",129492462),type_id,new cljs.core.Keyword(null,"connections","connections",-2064090887),dynomics.space.core.default_connections], null);
});

dynomics.space.core.make_intersection_node.cljs$lang$maxFixedArity = 2;
dynomics.space.core.just_ids = (function dynomics$space$core$just_ids(nodes){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p__91642){
var vec__91643 = p__91642;
var _ = cljs.core.nth.call(null,vec__91643,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__91643,(1),null);
var id = cljs.core.nth.call(null,vec__91643,(2),null);
return id;
}),nodes));
});
dynomics.space.core.quadrant_info = (function dynomics$space$core$quadrant_info(nodes,p__91648){
var vec__91653 = p__91648;
var _ = cljs.core.nth.call(null,vec__91653,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__91653,(1),null);
var nid = cljs.core.nth.call(null,vec__91653,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__91653,(3),null);
var cid = cljs.core.nth.call(null,vec__91653,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node-type","node-type",129492462),cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"node-type","node-type",129492462)], null)),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid,new cljs.core.Keyword(null,"position","position",-2011731912)], null))], null);
});
/**
 * 
 *   Returns the given state with a map of node-node compatibilities added,
 *   of the form {[nodeid1 nodeid2] true [nodeid4 nodeid5] false}
 *   
 */
dynomics.space.core.add_compatibility_info = (function dynomics$space$core$add_compatibility_info(p__91668){
var map__91677 = p__91668;
var map__91677__$1 = ((((!((map__91677 == null)))?((((map__91677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91677):map__91677);
var state = map__91677__$1;
var map__91678 = cljs.core.get.call(null,map__91677__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__91678__$1 = ((((!((map__91678 == null)))?((((map__91678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91678):map__91678);
var nodes = cljs.core.get.call(null,map__91678__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__91678__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024),dynomics.space.core.just_ids.call(null,selected_nodes)], null),dynomics.space.core.compare_quadrants.call(null,cljs.core.map.call(null,dynomics.space.core.quadrants_types_by_position,cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.quadrant_info,nodes),selected_nodes))));
});
dynomics.space.core.connections_of_node = (function dynomics$space$core$connections_of_node(graph,edges,id){
var cbn = cljs.core.group_by.call(null,cljs.core.first,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.sort_by,(function (x){
if((id === cljs.core.nth.call(null,x,(2)))){
return (0);
} else {
return (1);
}
})),edges));
return cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.last),cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.first,cbn),cljs.core.map.call(null,((function (cbn){
return (function (c){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id,new cljs.core.Keyword(null,"connections","connections",-2064090887),c], null);
});})(cbn))
,cljs.core.range.call(null,(4)))));
});
dynomics.space.core.add_connections_by_node = (function dynomics$space$core$add_connections_by_node(p__91721){
var map__91731 = p__91721;
var map__91731__$1 = ((((!((map__91731 == null)))?((((map__91731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91731):map__91731);
var state = map__91731__$1;
var map__91732 = cljs.core.get.call(null,map__91731__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__91732__$1 = ((((!((map__91732 == null)))?((((map__91732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91732):map__91732);
var nodes = cljs.core.get.call(null,map__91732__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__91732__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var graph = cljs.core.get.call(null,map__91732__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
cljs.core.println.call(null,"  acbn nodes ",cljs.core.count.call(null,loom.graph.nodes.call(null,graph)));

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"connections-by-node","connections-by-node",517626909)], null),cljs.core.zipmap.call(null,cljs.core.keys.call(null,nodes),cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.connections_of_node,graph,edges),cljs.core.keys.call(null,nodes))));
});
/**
 * Following a node-type change, update the
 *   compatibility info for its connections
 */
dynomics.space.core.update_compatibility_info = (function dynomics$space$core$update_compatibility_info(var_args){
var args91764 = [];
var len__26896__auto___91796 = arguments.length;
var i__26897__auto___91797 = (0);
while(true){
if((i__26897__auto___91797 < len__26896__auto___91796)){
args91764.push((arguments[i__26897__auto___91797]));

var G__91798 = (i__26897__auto___91797 + (1));
i__26897__auto___91797 = G__91798;
continue;
} else {
}
break;
}

var G__91774 = args91764.length;
switch (G__91774) {
case 1:
return dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91764.length)].join('')));

}
});

dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$1 = (function (p__91777){
var map__91778 = p__91777;
var map__91778__$1 = ((((!((map__91778 == null)))?((((map__91778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91778):map__91778);
var state = map__91778__$1;
var map__91779 = cljs.core.get.call(null,map__91778__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__91779__$1 = ((((!((map__91779 == null)))?((((map__91779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91779):map__91779);
var selected_nodes = cljs.core.get.call(null,map__91779__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,dynomics.space.core.update_compatibility_info,state,dynomics.space.core.just_ids.call(null,selected_nodes));
});

dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$2 = (function (p__91787,id){
var map__91788 = p__91787;
var map__91788__$1 = ((((!((map__91788 == null)))?((((map__91788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91788):map__91788);
var state = map__91788__$1;
var map__91789 = cljs.core.get.call(null,map__91788__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__91789__$1 = ((((!((map__91789 == null)))?((((map__91789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91789):map__91789);
var graph = cljs.core.get.call(null,map__91789__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var edges = cljs.core.get.call(null,map__91789__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var nodes = cljs.core.get.call(null,map__91789__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return cljs.core.reduce.call(null,((function (map__91788,map__91788__$1,state,map__91789,map__91789__$1,graph,edges,nodes){
return (function (s,edge){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024),dynomics.space.core.just_ids.call(null,edge)], null),dynomics.space.core.compare_quadrants.call(null,cljs.core.map.call(null,dynomics.space.core.quadrants_types_by_position,cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.quadrant_info,nodes),edge))));
});})(map__91788,map__91788__$1,state,map__91789,map__91789__$1,graph,edges,nodes))
,state,dynomics.space.core.connections_of_node.call(null,graph,edges,id));
});

dynomics.space.core.update_compatibility_info.cljs$lang$maxFixedArity = 2;
dynomics.space.core.make_new_id = (function dynomics$space$core$make_new_id(var_args){
var args91845 = [];
var len__26896__auto___91852 = arguments.length;
var i__26897__auto___91857 = (0);
while(true){
if((i__26897__auto___91857 < len__26896__auto___91852)){
args91845.push((arguments[i__26897__auto___91857]));

var G__91858 = (i__26897__auto___91857 + (1));
i__26897__auto___91857 = G__91858;
continue;
} else {
}
break;
}

var G__91849 = args91845.length;
switch (G__91849) {
case 1:
return dynomics.space.core.make_new_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.make_new_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91845.length)].join('')));

}
});

dynomics.space.core.make_new_id.cljs$core$IFn$_invoke$arity$1 = (function (objects){
return dynomics.space.core.make_new_id.call(null,objects,null);
});

dynomics.space.core.make_new_id.cljs$core$IFn$_invoke$arity$2 = (function (objects,max_id){
if(cljs.core.truth_(max_id)){
return max_id;
} else {
if(cljs.core.empty_QMARK_.call(null,objects)){
return (0);
} else {
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.keys.call(null,objects)) + (1));
}
}
});

dynomics.space.core.make_new_id.cljs$lang$maxFixedArity = 2;
/**
 * Adds a new node at the given position
 */
dynomics.space.core.add_node = (function dynomics$space$core$add_node(var_args){
var args91875 = [];
var len__26896__auto___91927 = arguments.length;
var i__26897__auto___91929 = (0);
while(true){
if((i__26897__auto___91929 < len__26896__auto___91927)){
args91875.push((arguments[i__26897__auto___91929]));

var G__91931 = (i__26897__auto___91929 + (1));
i__26897__auto___91929 = G__91931;
continue;
} else {
}
break;
}

var G__91886 = args91875.length;
switch (G__91886) {
case 1:
return dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91875.length)].join('')));

}
});

dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$1 = (function (p__91890){
var map__91891 = p__91890;
var map__91891__$1 = ((((!((map__91891 == null)))?((((map__91891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91891):map__91891);
var state = map__91891__$1;
var map__91892 = cljs.core.get.call(null,map__91891__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__91892__$1 = ((((!((map__91892 == null)))?((((map__91892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91892):map__91892);
var nodes = cljs.core.get.call(null,map__91892__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var max_node_id = cljs.core.get.call(null,map__91892__$1,new cljs.core.Keyword(null,"max-node-id","max-node-id",-75074557));
var p = cljs.core.get.call(null,map__91891__$1,new cljs.core.Keyword(null,"node-position","node-position",-542959703));
var node_type = cljs.core.get.call(null,map__91891__$1,new cljs.core.Keyword(null,"selected-node-type","selected-node-type",-1717725489));
return dynomics.space.core.add_node.call(null,state,cljs.core.assoc.call(null,dynomics.space.core.make_intersection_node.call(null,(function (){var or__25827__auto__ = node_type;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return (3);
}
})()),new cljs.core.Keyword(null,"position","position",-2011731912),p));
});

dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$2 = (function (p__91903,p__91904){
var map__91905 = p__91903;
var map__91905__$1 = ((((!((map__91905 == null)))?((((map__91905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91905):map__91905);
var state = map__91905__$1;
var map__91906 = cljs.core.get.call(null,map__91905__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__91906__$1 = ((((!((map__91906 == null)))?((((map__91906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91906):map__91906);
var nodes = cljs.core.get.call(null,map__91906__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var max_node_id = cljs.core.get.call(null,map__91906__$1,new cljs.core.Keyword(null,"max-node-id","max-node-id",-75074557));
var selected_nodes = cljs.core.get.call(null,map__91906__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__91907 = p__91904;
var map__91907__$1 = ((((!((map__91907 == null)))?((((map__91907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91907):map__91907);
var new_node = map__91907__$1;
var new_id = cljs.core.get.call(null,map__91907__$1,new cljs.core.Keyword(null,"id","id",-1388402092),dynomics.space.core.make_new_id.call(null,nodes,max_node_id));
cljs.core.println.call(null,new_id,new_node);

return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new_id], null),cljs.core.assoc.call(null,new_node,new cljs.core.Keyword(null,"id","id",-1388402092),new_id)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__91905,map__91905__$1,state,map__91906,map__91906__$1,nodes,max_node_id,selected_nodes,map__91907,map__91907__$1,new_node,new_id){
return (function (g){
return loom.graph.add_nodes.call(null,g,new_id);
});})(map__91905,map__91905__$1,state,map__91906,map__91906__$1,nodes,max_node_id,selected_nodes,map__91907,map__91907__$1,new_node,new_id))
),new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673),new_id);
});

dynomics.space.core.add_node.cljs$lang$maxFixedArity = 2;
dynomics.space.core.deselect_all = (function dynomics$space$core$deselect_all(state){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493)], null),cljs.core.PersistentHashSet.EMPTY);
});
dynomics.space.core.deactivate_all = (function dynomics$space$core$deactivate_all(state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891)], null),cljs.core.PersistentHashSet.EMPTY);
});
/**
 * Returns the state with the given edges removed
 */
dynomics.space.core.remove_edges = (function dynomics$space$core$remove_edges(p__91996){
var map__92009 = p__91996;
var map__92009__$1 = ((((!((map__92009 == null)))?((((map__92009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92009):map__92009);
var state = map__92009__$1;
var map__92010 = cljs.core.get.call(null,map__92009__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__92010__$1 = ((((!((map__92010 == null)))?((((map__92010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92010):map__92010);
var selected_nodes = cljs.core.get.call(null,map__92010__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),((function (map__92009,map__92009__$1,state,map__92010,map__92010__$1,selected_nodes){
return (function (edges){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,((function (map__92009,map__92009__$1,state,map__92010,map__92010__$1,selected_nodes){
return (function (p__92020){
var vec__92021 = p__92020;
var vec__92022 = cljs.core.nth.call(null,vec__92021,(0),null);
var _ = cljs.core.nth.call(null,vec__92022,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__92022,(1),null);
var nid1 = cljs.core.nth.call(null,vec__92022,(2),null);
var ___$2 = cljs.core.nthnext.call(null,vec__92022,(3));
var vec__92023 = cljs.core.nth.call(null,vec__92021,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__92023,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__92023,(1),null);
var nid2 = cljs.core.nth.call(null,vec__92023,(2),null);
var ___$5 = cljs.core.nthnext.call(null,vec__92023,(3));
var or__25827__auto__ = selected_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid1], null));
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return selected_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid2], null));
}
});})(map__92009,map__92009__$1,state,map__92010,map__92010__$1,selected_nodes))
,edges));
});})(map__92009,map__92009__$1,state,map__92010,map__92010__$1,selected_nodes))
);
});
dynomics.space.core.add_graph = (function dynomics$space$core$add_graph(p__92050){
var map__92057 = p__92050;
var map__92057__$1 = ((((!((map__92057 == null)))?((((map__92057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92057):map__92057);
var space = map__92057__$1;
var edges = cljs.core.get.call(null,map__92057__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return cljs.core.assoc.call(null,space,new cljs.core.Keyword(null,"graph","graph",1558099509),cljs.core.apply.call(null,loom.graph.graph,dynomics.space.graph.simplify_edges.call(null,edges)));
});
dynomics.space.core.update_ds = (function dynomics$space$core$update_ds(p__92065){
var map__92069 = p__92065;
var map__92069__$1 = ((((!((map__92069 == null)))?((((map__92069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92069):map__92069);
var s = map__92069__$1;
var f = cljs.core.get.call(null,map__92069__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),((function (map__92069,map__92069__$1,s,f){
return (function (points){
return cljs.core.map.call(null,f,points);
});})(map__92069,map__92069__$1,s,f))
);
});
dynomics.space.core.random_points = (function dynomics$space$core$random_points(n){
return cljs.core.repeatedly.call(null,n,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.call(null),cljs.core.rand.call(null)], null);
}));
});
dynomics.space.core.make_ds = (function dynomics$space$core$make_ds(var_args){
var args92078 = [];
var len__26896__auto___92089 = arguments.length;
var i__26897__auto___92090 = (0);
while(true){
if((i__26897__auto___92090 < len__26896__auto___92089)){
args92078.push((arguments[i__26897__auto___92090]));

var G__92091 = (i__26897__auto___92090 + (1));
i__26897__auto___92090 = G__92091;
continue;
} else {
}
break;
}

var G__92085 = args92078.length;
switch (G__92085) {
case 0:
return dynomics.space.core.make_ds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.space.core.make_ds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92078.length)].join('')));

}
});

dynomics.space.core.make_ds.cljs$core$IFn$_invoke$arity$0 = (function (){
return dynomics.space.core.make_ds.call(null,dynomics.space.core.p2c.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),dynomics.space.core.PI], null)));
});

dynomics.space.core.make_ds.cljs$core$IFn$_invoke$arity$1 = (function (v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p){
return dynomics.space.core.c_STAR_.call(null,p,v);
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null);
});

dynomics.space.core.make_ds.cljs$lang$maxFixedArity = 1;
dynomics.space.core.make_ds2 = (function dynomics$space$core$make_ds2(f,n_points){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),f,new cljs.core.Keyword(null,"points","points",-1486596883),dynomics.space.core.random_points.call(null,n_points)], null);
});
dynomics.space.core.ds_evolution = (function dynomics$space$core$ds_evolution(var_args){
var args92094 = [];
var len__26896__auto___92101 = arguments.length;
var i__26897__auto___92102 = (0);
while(true){
if((i__26897__auto___92102 < len__26896__auto___92101)){
args92094.push((arguments[i__26897__auto___92102]));

var G__92104 = (i__26897__auto___92102 + (1));
i__26897__auto___92102 = G__92104;
continue;
} else {
}
break;
}

var G__92098 = args92094.length;
switch (G__92098) {
case 3:
return dynomics.space.core.ds_evolution.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.space.core.ds_evolution.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92094.length)].join('')));

}
});

dynomics.space.core.ds_evolution.cljs$core$IFn$_invoke$arity$3 = (function (n_time_points,expansion,rotation){
return dynomics.space.core.ds_evolution.call(null,n_time_points,dynomics.space.core.make_ds.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expansion,rotation], null)));
});

dynomics.space.core.ds_evolution.cljs$core$IFn$_invoke$arity$2 = (function (n_time_points,system){
return cljs.core.apply.call(null,cljs.core.map,cljs.core.list,cljs.core.take.call(null,n_time_points,cljs.core.map.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.iterate.call(null,dynomics.space.core.update_ds,system))));
});

dynomics.space.core.ds_evolution.cljs$lang$maxFixedArity = 3;
dynomics.space.core.make_some_nodes = (function dynomics$space$core$make_some_nodes(n){
return cljs.core.zipmap.call(null,cljs.core.range.call(null),cljs.core.map.call(null,(function (id,node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"id","id",-1388402092),id);
}),cljs.core.range.call(null),cljs.core.repeatedly.call(null,n,cljs.core.partial.call(null,dynomics.space.core.make_intersection_node,(3)))));
});
dynomics.space.core.saddle_2 = (function dynomics$space$core$saddle_2(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__92111){
var vec__92112 = p__92111;
var x = cljs.core.nth.call(null,vec__92112,(0),null);
var y = cljs.core.nth.call(null,vec__92112,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((-1) * x),y], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-12)], null)], null)], null));
});
dynomics.space.core.saddle_3 = (function dynomics$space$core$saddle_3(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__92133){
var vec__92134 = p__92133;
var x = cljs.core.nth.call(null,vec__92134,(0),null);
var y = cljs.core.nth.call(null,vec__92134,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((-1) * y)], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(-24)], null)], null)], null));
});
dynomics.space.core.saddle_4 = (function dynomics$space$core$saddle_4(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__92153){
var vec__92154 = p__92153;
var x = cljs.core.nth.call(null,vec__92154,(0),null);
var y = cljs.core.nth.call(null,vec__92154,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(-8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(-16)], null)], null)], null));
});
dynomics.space.core.saddle_5 = (function dynomics$space$core$saddle_5(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__92172){
var vec__92173 = p__92172;
var x = cljs.core.nth.call(null,vec__92173,(0),null);
var y = cljs.core.nth.call(null,vec__92173,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.04,-0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(-8)], null)], null)], null));
});
dynomics.space.core.spiral = (function dynomics$space$core$spiral(var_args){
var args92177 = [];
var len__26896__auto___92191 = arguments.length;
var i__26897__auto___92193 = (0);
while(true){
if((i__26897__auto___92193 < len__26896__auto___92191)){
args92177.push((arguments[i__26897__auto___92193]));

var G__92198 = (i__26897__auto___92193 + (1));
i__26897__auto___92193 = G__92198;
continue;
} else {
}
break;
}

var G__92184 = args92177.length;
switch (G__92184) {
case 3:
return dynomics.space.core.spiral.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return dynomics.space.core.spiral.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92177.length)].join('')));

}
});

dynomics.space.core.spiral.cljs$core$IFn$_invoke$arity$3 = (function (samples,expansion,rotation){
return dynomics.space.core.spiral.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(1),samples,expansion,rotation);
});

dynomics.space.core.spiral.cljs$core$IFn$_invoke$arity$5 = (function (start,init_points,samples,expansion,rotation){
return dynomics.space.core.ds_evolution.call(null,samples,cljs.core.assoc.call(null,dynomics.space.core.make_ds.call(null,dynomics.space.core.p2c.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expansion,rotation], null))),new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.first.call(null,dynomics.space.core.ds_evolution.call(null,init_points,cljs.core.assoc.call(null,dynomics.space.core.make_ds.call(null,dynomics.space.core.p2c.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),dynomics.space.core.PIb4], null))),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null))))));
});

dynomics.space.core.spiral.cljs$lang$maxFixedArity = 5;
dynomics.space.core.make_phase_space = (function dynomics$space$core$make_phase_space(){
return dynomics.space.core.add_graph.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curve-types","curve-types",1650772099),new cljs.core.Keyword(null,"selected-space","selected-space",613834726),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493),new cljs.core.Keyword(null,"selected-edges","selected-edges",1789211954),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"connections-by-node","connections-by-node",517626909),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"curves","curves",-510805378)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,0.08,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY]));
});
/**
 * Returns the given state with any connections that need to be
 *   made added to the edges map. Only connect nodes if there are two
 *   selected. Note that the connection is undirected
 */
dynomics.space.core.connect_pair = (function dynomics$space$core$connect_pair(p__92226){
var map__92244 = p__92226;
var map__92244__$1 = ((((!((map__92244 == null)))?((((map__92244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92244):map__92244);
var state = map__92244__$1;
var map__92245 = cljs.core.get.call(null,map__92244__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__92245__$1 = ((((!((map__92245 == null)))?((((map__92245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92245):map__92245);
var nodes = cljs.core.get.call(null,map__92245__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__92245__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Connect ",selected_nodes);

if(((2) === cljs.core.count.call(null,selected_nodes))){
return dynomics.space.core.add_connections_by_node.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,dynomics.space.core.add_compatibility_info.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),cljs.core.conj,cljs.core.vec.call(null,selected_nodes)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__92244,map__92244__$1,state,map__92245,map__92245__$1,nodes,selected_nodes){
return (function (g){
return loom.graph.add_edges.call(null,g,cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__92244,map__92244__$1,state,map__92245,map__92245__$1,nodes,selected_nodes){
return (function (p__92248){
var vec__92249 = p__92248;
var _ = cljs.core.nth.call(null,vec__92249,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__92249,(1),null);
var nid = cljs.core.nth.call(null,vec__92249,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__92249,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__92249,(4),null);
return nid;
});})(map__92244,map__92244__$1,state,map__92245,map__92245__$1,nodes,selected_nodes))
,selected_nodes)));
});})(map__92244,map__92244__$1,state,map__92245,map__92245__$1,nodes,selected_nodes))
));
} else {
return state;
}
});
/**
 * Returns a function to set the given selected nodes
 *   to the given node type id
 */
dynomics.space.core.set_node_type = (function dynomics$space$core$set_node_type(id){
return (function (p__92262){
var map__92264 = p__92262;
var map__92264__$1 = ((((!((map__92264 == null)))?((((map__92264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92264):map__92264);
var state = map__92264__$1;
var map__92265 = cljs.core.get.call(null,map__92264__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__92265__$1 = ((((!((map__92265 == null)))?((((map__92265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92265):map__92265);
var selected_nodes = cljs.core.get.call(null,map__92265__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Set node type of ",selected_nodes," to ",id);

var r = dynomics.space.core.update_compatibility_info.call(null,cljs.core.assoc.call(null,cljs.core.reduce.call(null,((function (map__92264,map__92264__$1,state,map__92265,map__92265__$1,selected_nodes){
return (function (r,path){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,r,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"node-type","node-type",129492462)),id),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"intersection","intersection",2003891010));
});})(map__92264,map__92264__$1,state,map__92265,map__92265__$1,selected_nodes))
,state,selected_nodes),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Node type"),cljs.core.str(id)].join('')], null)));
cljs.core.println.call(null,"  updated ",cljs.core.get_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024)], null)));

return r;
});
});
dynomics.space.core.simplify_connection = (function dynomics$space$core$simplify_connection(p__92274){
var vec__92277 = p__92274;
var _ = cljs.core.nth.call(null,vec__92277,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__92277,(1),null);
var nid = cljs.core.nth.call(null,vec__92277,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__92277,(3),null);
var cid = cljs.core.nth.call(null,vec__92277,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,cid], null);
});
dynomics.space.core.simplify_connections = (function dynomics$space$core$simplify_connections(p__92278){
var vec__92287 = p__92278;
var map__92288 = cljs.core.nth.call(null,vec__92287,(0),null);
var map__92288__$1 = ((((!((map__92288 == null)))?((((map__92288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92288):map__92288);
var nodes = cljs.core.get.call(null,map__92288__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__92288__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edges","edges",-694791395),cljs.core.map.call(null,((function (vec__92287,map__92288,map__92288__$1,nodes,edges){
return (function (p__92290){
var vec__92291 = p__92290;
var vec__92292 = cljs.core.nth.call(null,vec__92291,(0),null);
var _ = cljs.core.nth.call(null,vec__92292,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__92292,(1),null);
var nid1 = cljs.core.nth.call(null,vec__92292,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__92292,(3),null);
var cid1 = cljs.core.nth.call(null,vec__92292,(4),null);
var vec__92293 = cljs.core.nth.call(null,vec__92291,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__92293,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__92293,(1),null);
var nid2 = cljs.core.nth.call(null,vec__92293,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__92293,(3),null);
var cid2 = cljs.core.nth.call(null,vec__92293,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null);
});})(vec__92287,map__92288,map__92288__$1,nodes,edges))
,edges),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes], null);
});
dynomics.space.core.insert_in = (function dynomics$space$core$insert_in(v,i,x){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.conj.call(null,cljs.core.subvec.call(null,v,(0),i),x),cljs.core.subvec.call(null,v,i)));
});
dynomics.space.core.with_compatibilities = (function dynomics$space$core$with_compatibilities(p__92301,compatibilities){
var map__92306 = p__92301;
var map__92306__$1 = ((((!((map__92306 == null)))?((((map__92306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92306):map__92306);
var e = map__92306__$1;
var vec__92307 = cljs.core.get.call(null,map__92306__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__92308 = cljs.core.nth.call(null,vec__92307,(0),null);
var nid1 = cljs.core.nth.call(null,vec__92308,(0),null);
var nid2 = cljs.core.nth.call(null,vec__92308,(1),null);
var _ = cljs.core.nthnext.call(null,vec__92307,(1));
return cljs.core.assoc.call(null,e,new cljs.core.Keyword(null,"compatible?","compatible?",923422575),compatibilities.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null)));
});
dynomics.space.core.edge_points = (function dynomics$space$core$edge_points(nodes,p__92312){
var vec__92320 = p__92312;
var vec__92321 = cljs.core.nth.call(null,vec__92320,(0),null);
var _ = cljs.core.nth.call(null,vec__92321,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__92321,(1),null);
var nid1 = cljs.core.nth.call(null,vec__92321,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__92321,(3),null);
var cid1 = cljs.core.nth.call(null,vec__92321,(4),null);
var vec__92322 = cljs.core.nth.call(null,vec__92320,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__92322,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__92322,(1),null);
var nid2 = cljs.core.nth.call(null,vec__92322,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__92322,(3),null);
var cid2 = cljs.core.nth.call(null,vec__92322,(4),null);
var vec__92340 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__92340,(0),null);
var ny1 = cljs.core.nth.call(null,vec__92340,(1),null);
var vec__92341 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx2 = cljs.core.nth.call(null,vec__92341,(0),null);
var ny2 = cljs.core.nth.call(null,vec__92341,(1),null);
var vec__92342 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__92342,(0),null);
var cy1 = cljs.core.nth.call(null,vec__92342,(1),null);
var vec__92343 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid2,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx2 = cljs.core.nth.call(null,vec__92343,(0),null);
var cy2 = cljs.core.nth.call(null,vec__92343,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx2,ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx1,cx2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cy1,cy2], null)], null),new cljs.core.Keyword(null,"connections","connections",-2064090887),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,cid1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,cid2], null)], null)], null);
});
dynomics.space.core.make_open_regions = (function dynomics$space$core$make_open_regions(node_scale,p__92366){
var vec__92394 = p__92366;
var node_id = cljs.core.nth.call(null,vec__92394,(0),null);
var node_type = cljs.core.nth.call(null,vec__92394,(1),null);
var edge_pairs = cljs.core.nth.call(null,vec__92394,(2),null);
cljs.core.println.call(null,"   >>> ",node_id,cljs.core.count.call(null,edge_pairs));

return cljs.core.map.call(null,((function (vec__92394,node_id,node_type,edge_pairs){
return (function (edge_pair){
var vec__92396 = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"connections","connections",-2064090887),edge_pair);
var _ = cljs.core.nth.call(null,vec__92396,(0),null);
var vec__92397 = cljs.core.nth.call(null,vec__92396,(1),null);
var nid1 = cljs.core.nth.call(null,vec__92397,(0),null);
var x = cljs.core.nth.call(null,vec__92397,(1),null);
var vec__92398 = cljs.core.nth.call(null,vec__92396,(2),null);
var nid2 = cljs.core.nth.call(null,vec__92398,(0),null);
var y = cljs.core.nth.call(null,vec__92398,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__92396,(3),null);
var xy = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var qv = dynomics.space.core.quadrant_vectors_by_connectors.call(null,xy);
var qt = dynomics.space.core.quadrant_types_by_connector_pair.call(null,node_type,qv);
cljs.core.println.call(null,"       > ",node_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null),xy,qt,qv);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node-id","node-id",779482292),node_id,new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370),qt,new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631),qv,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.mapcat.call(null,((function (vec__92396,_,vec__92397,nid1,x,vec__92398,nid2,y,___$1,xy,qv,qt,vec__92394,node_id,node_type,edge_pairs){
return (function (p__92399){
var map__92400 = p__92399;
var map__92400__$1 = ((((!((map__92400 == null)))?((((map__92400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92400):map__92400);
var vec__92401 = cljs.core.get.call(null,map__92400__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__92402 = cljs.core.nth.call(null,vec__92401,(0),null);
var nid1__$1 = cljs.core.nth.call(null,vec__92402,(0),null);
var nid2__$1 = cljs.core.nth.call(null,vec__92402,(1),null);
var vec__92403 = cljs.core.nth.call(null,vec__92401,(1),null);
var nx1 = cljs.core.nth.call(null,vec__92403,(0),null);
var ny1 = cljs.core.nth.call(null,vec__92403,(1),null);
var vec__92404 = cljs.core.nth.call(null,vec__92401,(2),null);
var nx2 = cljs.core.nth.call(null,vec__92404,(0),null);
var ny2 = cljs.core.nth.call(null,vec__92404,(1),null);
var vec__92405 = cljs.core.nth.call(null,vec__92401,(3),null);
var cx1 = cljs.core.nth.call(null,vec__92405,(0),null);
var cx2 = cljs.core.nth.call(null,vec__92405,(1),null);
var vec__92406 = cljs.core.nth.call(null,vec__92401,(4),null);
var cy1 = cljs.core.nth.call(null,vec__92406,(0),null);
var cy2 = cljs.core.nth.call(null,vec__92406,(1),null);
var cnx = cljs.core.get.call(null,map__92400__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return cljs.core.map.call(null,dynomics.ui.svg.make_bezier_point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx2,ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx2 + (node_scale * cx2)),(ny2 + (node_scale * cy2))], null)], null)], null));
});})(vec__92396,_,vec__92397,nid1,x,vec__92398,nid2,y,___$1,xy,qv,qt,vec__92394,node_id,node_type,edge_pairs))
,edge_pair)], null);
});})(vec__92394,node_id,node_type,edge_pairs))
,edge_pairs);
});
dynomics.space.core.reverse_edge = (function dynomics$space$core$reverse_edge(p__92468){
var map__92480 = p__92468;
var map__92480__$1 = ((((!((map__92480 == null)))?((((map__92480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92480):map__92480);
var vec__92481 = cljs.core.get.call(null,map__92480__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var ids = cljs.core.nth.call(null,vec__92481,(0),null);
var p1 = cljs.core.nth.call(null,vec__92481,(1),null);
var p2 = cljs.core.nth.call(null,vec__92481,(2),null);
var cx = cljs.core.nth.call(null,vec__92481,(3),null);
var cy = cljs.core.nth.call(null,vec__92481,(4),null);
var c = cljs.core.get.call(null,map__92480__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reverse.call(null,ids),p2,p1,cljs.core.reverse.call(null,cx),cljs.core.reverse.call(null,cy)], null),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.reverse.call(null,c)], null);
});
dynomics.space.core.edge_pairs_by_node = (function dynomics$space$core$edge_pairs_by_node(p__92492){
var map__92516 = p__92492;
var map__92516__$1 = ((((!((map__92516 == null)))?((((map__92516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92516):map__92516);
var nodes = cljs.core.get.call(null,map__92516__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var connections_by_node = cljs.core.get.call(null,map__92516__$1,new cljs.core.Keyword(null,"connections-by-node","connections-by-node",517626909));
var node_scale = cljs.core.get.call(null,map__92516__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"cbn",connections_by_node);

return cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.empty_QMARK_,cljs.core.last),cljs.core.map.call(null,((function (map__92516,map__92516__$1,nodes,connections_by_node,node_scale){
return (function (p__92518){
var vec__92519 = p__92518;
var id = cljs.core.nth.call(null,vec__92519,(0),null);
var connections = cljs.core.nth.call(null,vec__92519,(1),null);
cljs.core.println.call(null," possible quadrants for node ",id,cljs.core.count.call(null,connections));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"node-type","node-type",129492462)], null)),cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.comp.call(null,dynomics.space.core.reverse_edge,cljs.core.first),cljs.core.last),cljs.core.filter.call(null,((function (vec__92519,id,connections,map__92516,map__92516__$1,nodes,connections_by_node,node_scale){
return (function (p__92520){
var vec__92522 = p__92520;
var map__92523 = cljs.core.nth.call(null,vec__92522,(0),null);
var map__92523__$1 = ((((!((map__92523 == null)))?((((map__92523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92523):map__92523);
var vec__92524 = cljs.core.get.call(null,map__92523__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var vec__92525 = cljs.core.nth.call(null,vec__92524,(0),null);
var _ = cljs.core.nth.call(null,vec__92525,(0),null);
var a = cljs.core.nth.call(null,vec__92525,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__92524,(1),null);
var map__92526 = cljs.core.nth.call(null,vec__92522,(1),null);
var map__92526__$1 = ((((!((map__92526 == null)))?((((map__92526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92526):map__92526);
var vec__92527 = cljs.core.get.call(null,map__92526__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var vec__92528 = cljs.core.nth.call(null,vec__92527,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__92528,(0),null);
var b = cljs.core.nth.call(null,vec__92528,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__92527,(1),null);
return !(((2) === dynomics.space.core.abs.call(null,(a - b))));
});})(vec__92519,id,connections,map__92516,map__92516__$1,nodes,connections_by_node,node_scale))
,cljs.core.take.call(null,cljs.core.count.call(null,connections),cljs.core.partition.call(null,(2),(1),cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.edge_points,nodes),cljs.core.cycle.call(null,connections))))))], null);
});})(map__92516,map__92516__$1,nodes,connections_by_node,node_scale))
,cljs.core.filter.call(null,((function (map__92516,map__92516__$1,nodes,connections_by_node,node_scale){
return (function (p__92549){
var vec__92550 = p__92549;
var k = cljs.core.nth.call(null,vec__92550,(0),null);
var v = cljs.core.nth.call(null,vec__92550,(1),null);
return (cljs.core.count.call(null,v) > (1));
});})(map__92516,map__92516__$1,nodes,connections_by_node,node_scale))
,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.comp.call(null,connections_by_node,new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.vals.call(null,nodes)))));
});
dynomics.space.core.set_curve_type = (function dynomics$space$core$set_curve_type(type_id){
return (function (p__92603){
var map__92604 = p__92603;
var map__92604__$1 = ((((!((map__92604 == null)))?((((map__92604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92604):map__92604);
var state = map__92604__$1;
var map__92605 = cljs.core.get.call(null,map__92604__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__92605__$1 = ((((!((map__92605 == null)))?((((map__92605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92605):map__92605);
var sc = cljs.core.get.call(null,map__92605__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
cljs.core.println.call(null,"set curve type",type_id,sc);

return cljs.core.reduce.call(null,((function (map__92604,map__92604__$1,state,map__92605,map__92605__$1,sc){
return (function (r,p__92612){
var vec__92613 = p__92612;
var _ = cljs.core.nth.call(null,vec__92613,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__92613,(1),null);
var curve_id = cljs.core.nth.call(null,vec__92613,(2),null);
return cljs.core.assoc_in.call(null,r,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curve-types","curve-types",1650772099),curve_id], null),type_id);
});})(map__92604,map__92604__$1,state,map__92605,map__92605__$1,sc))
,state,sc);
});
});
/**
 * Returns the given state with the map of which nodes
 *   belong to which curves updated with the curve of the
 *   given curve-id
 */
dynomics.space.core.update_curves_by_node = (function dynomics$space$core$update_curves_by_node(var_args){
var args92636 = [];
var len__26896__auto___92649 = arguments.length;
var i__26897__auto___92650 = (0);
while(true){
if((i__26897__auto___92650 < len__26896__auto___92649)){
args92636.push((arguments[i__26897__auto___92650]));

var G__92656 = (i__26897__auto___92650 + (1));
i__26897__auto___92650 = G__92656;
continue;
} else {
}
break;
}

var G__92640 = args92636.length;
switch (G__92640) {
case 2:
return dynomics.space.core.update_curves_by_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dynomics.space.core.update_curves_by_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92636.length)].join('')));

}
});

dynomics.space.core.update_curves_by_node.cljs$core$IFn$_invoke$arity$2 = (function (state,curve_id){
return dynomics.space.core.update_curves_by_node.call(null,state,cljs.core.map.call(null,cljs.core.first,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),curve_id], null))),curve_id);
});

dynomics.space.core.update_curves_by_node.cljs$core$IFn$_invoke$arity$3 = (function (state,node_ids,curve_id){
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.update_in),state,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves-by-node","curves-by-node",217276582)], null)),node_ids),cljs.core.repeat.call(null,(function (cbn){
return cljs.core.conj.call(null,(function (){var or__25827__auto__ = cbn;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),curve_id);
}))));
});

dynomics.space.core.update_curves_by_node.cljs$lang$maxFixedArity = 3;
/**
 * Returns the given state with
 *   nodes added between selected nodes on
 *   all their curves
 */
dynomics.space.core.add_nodes_between_selected_nodes = (function dynomics$space$core$add_nodes_between_selected_nodes(p__92671){
var map__92681 = p__92671;
var map__92681__$1 = ((((!((map__92681 == null)))?((((map__92681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92681):map__92681);
var state = map__92681__$1;
var map__92682 = cljs.core.get.call(null,map__92681__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__92682__$1 = ((((!((map__92682 == null)))?((((map__92682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92682):map__92682);
var curves = cljs.core.get.call(null,map__92682__$1,new cljs.core.Keyword(null,"curves","curves",-510805378));
var curves_by_node = cljs.core.get.call(null,map__92682__$1,new cljs.core.Keyword(null,"curves-by-node","curves-by-node",217276582));
var selected_nodes = cljs.core.get.call(null,map__92682__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
if(((2) === cljs.core.count.call(null,selected_nodes))){
var vec__92685 = selected_nodes;
var vec__92686 = cljs.core.nth.call(null,vec__92685,(0),null);
var _ = cljs.core.nth.call(null,vec__92686,(0),null);
var n1 = cljs.core.nth.call(null,vec__92686,(1),null);
var vec__92687 = cljs.core.nth.call(null,vec__92685,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__92687,(0),null);
var n2 = cljs.core.nth.call(null,vec__92687,(1),null);
var ci = cljs.core.map.call(null,curves_by_node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null));
return null;
} else {
return state;
}
});
/**
 * Returns the given state with the node with the given node-id
 *   removed from the curve with the given curve-id
 * 
 *   todo: could be faster if used (into)
 */
dynomics.space.core.remove_node_from_curve = (function dynomics$space$core$remove_node_from_curve(state,node_id,curve_id){
cljs.core.println.call(null,"remove",node_id,"from curve",curve_id);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),curve_id], null),(function (node_ids){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.juxt.call(null,cljs.core.first,cljs.core.comp.call(null,cljs.core.rest,cljs.core.last)).call(null,cljs.core.split_with.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,node_id),cljs.core.first),node_ids))));
}));
});
/**
 * Returns the given state with the node with
 *   the given node-id removed from all the curves it's in
 */
dynomics.space.core.remove_node_from_curves = (function dynomics$space$core$remove_node_from_curves(state,node_id){
return cljs.core.reduce.call(null,(function (r,curve_id){
return dynomics.space.core.remove_node_from_curve.call(null,r,node_id,curve_id);
}),state,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves-by-node","curves-by-node",217276582),node_id], null)));
});
dynomics.space.core.toggle_select_curve = (function dynomics$space$core$toggle_select_curve(state,path){
return cljs.core.update_in.call(null,cljs.core.reduce.call(null,(function (r,p__92722){
var vec__92723 = p__92722;
var id = cljs.core.nth.call(null,vec__92723,(0),null);
var _ = cljs.core.nth.call(null,vec__92723,(1),null);
return cljs.core.update_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (vec__92723,id,_){
return (function (sn){
var path__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
if(cljs.core.truth_(sn.call(null,path__$1))){
return cljs.core.disj.call(null,sn,path__$1);
} else {
return cljs.core.conj.call(null,sn,path__$1);
}
});})(vec__92723,id,_))
);
}),state,cljs.core.get_in.call(null,state,path)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493)], null),(function (sc){
if(cljs.core.truth_(sc.call(null,path))){
return cljs.core.disj.call(null,sc,path);
} else {
return cljs.core.conj.call(null,sc,path);
}
}));
});
dynomics.space.core.deselect_curve = (function dynomics$space$core$deselect_curve(state,path){
return cljs.core.update_in.call(null,cljs.core.reduce.call(null,(function (r,p__92733){
var vec__92734 = p__92733;
var id = cljs.core.nth.call(null,vec__92734,(0),null);
var _ = cljs.core.nth.call(null,vec__92734,(1),null);
return cljs.core.update_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (vec__92734,id,_){
return (function (sn){
var path__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
return cljs.core.disj.call(null,sn,path__$1);
});})(vec__92734,id,_))
);
}),state,cljs.core.get_in.call(null,state,path)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493)], null),(function (sc){
return cljs.core.disj.call(null,sc,path);
}));
});
/**
 * Returns the given state with a new curve with
 *   the given points, e.g. [[0 0] [0.5 0.5] [1 1]]
 */
dynomics.space.core.add_curve = (function dynomics$space$core$add_curve(var_args){
var args92738 = [];
var len__26896__auto___92752 = arguments.length;
var i__26897__auto___92753 = (0);
while(true){
if((i__26897__auto___92753 < len__26896__auto___92752)){
args92738.push((arguments[i__26897__auto___92753]));

var G__92754 = (i__26897__auto___92753 + (1));
i__26897__auto___92753 = G__92754;
continue;
} else {
}
break;
}

var G__92740 = args92738.length;
switch (G__92740) {
case 2:
return dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92738.length)].join('')));

}
});

dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$2 = (function (state,points){
return dynomics.space.core.add_curve.call(null,state,points,dynomics.space.core.make_new_id.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378)], null))));
});

dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$3 = (function (p__92741,points,curve_id){
var map__92742 = p__92741;
var map__92742__$1 = ((((!((map__92742 == null)))?((((map__92742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92742):map__92742);
var state = map__92742__$1;
var map__92743 = cljs.core.get.call(null,map__92742__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__92743__$1 = ((((!((map__92743 == null)))?((((map__92743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92743):map__92743);
var scale = cljs.core.get.call(null,map__92743__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
return dynomics.space.core.update_curves_by_node.call(null,cljs.core.reduce.call(null,((function (map__92742,map__92742__$1,state,map__92743,map__92743__$1,scale){
return (function (r,p__92746){
var vec__92747 = p__92746;
var p = cljs.core.nth.call(null,vec__92747,(0),null);
var control_points = cljs.core.nth.call(null,vec__92747,(1),null);
var map__92748 = dynomics.space.core.add_node.call(null,r,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),p,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.vec.call(null,cljs.core.map.call(null,((function (vec__92747,p,control_points,map__92742,map__92742__$1,state,map__92743,map__92743__$1,scale){
return (function (q,i){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.map.call(null,cljs.core._,p,q),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"id","id",-1388402092),i], null);
});})(vec__92747,p,control_points,map__92742,map__92742__$1,state,map__92743,map__92743__$1,scale))
,control_points,cljs.core.range.call(null)))], null));
var map__92748__$1 = ((((!((map__92748 == null)))?((((map__92748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92748):map__92748);
var r__$1 = map__92748__$1;
var id = cljs.core.get.call(null,map__92748__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return cljs.core.update_in.call(null,r__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),curve_id], null),((function (map__92748,map__92748__$1,r__$1,id,vec__92747,p,control_points,map__92742,map__92742__$1,state,map__92743,map__92743__$1,scale){
return (function (curve){
return cljs.core.conj.call(null,(function (){var or__25827__auto__ = curve;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.vec.call(null,cljs.core.range.call(null,cljs.core.count.call(null,control_points)))], null));
});})(map__92748,map__92748__$1,r__$1,id,vec__92747,p,control_points,map__92742,map__92742__$1,state,map__92743,map__92743__$1,scale))
);
});})(map__92742,map__92742__$1,state,map__92743,map__92743__$1,scale))
,state,cljs.core.map.call(null,cljs.core.vector,dynomics.space.core.midpoints.call(null,points),cljs.core.map.call(null,((function (map__92742,map__92742__$1,state,map__92743,map__92743__$1,scale){
return (function (p__92750){
var vec__92751 = p__92750;
var p1 = cljs.core.nth.call(null,vec__92751,(0),null);
var p2 = cljs.core.nth.call(null,vec__92751,(1),null);
return cljs.core.reverse.call(null,dynomics.space.core.move_along.call(null,0.8,p1,p2));
});})(map__92742,map__92742__$1,state,map__92743,map__92743__$1,scale))
,cljs.core.partition.call(null,(2),(1),points)))),curve_id);
});

dynomics.space.core.add_curve.cljs$lang$maxFixedArity = 3;
dynomics.space.core.add_curves = (function dynomics$space$core$add_curves(state,curves){
return cljs.core.reduce.call(null,dynomics.space.core.add_curve,state,curves);
});
dynomics.space.core.merge_selected_curves = (function dynomics$space$core$merge_selected_curves(p__92756){
var map__92761 = p__92756;
var map__92761__$1 = ((((!((map__92761 == null)))?((((map__92761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92761):map__92761);
var state = map__92761__$1;
var map__92762 = cljs.core.get.call(null,map__92761__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__92762__$1 = ((((!((map__92762 == null)))?((((map__92762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92762):map__92762);
var nodes = cljs.core.get.call(null,map__92762__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_curves = cljs.core.get.call(null,map__92762__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
var curves = cljs.core.get.call(null,map__92762__$1,new cljs.core.Keyword(null,"curves","curves",-510805378));
return null;
});
/**
 * Returns the given state with its
 *   2 selected nodes joined by a curve with
 *   1 intermediate point
 */
dynomics.space.core.add_curve_between_nodes = (function dynomics$space$core$add_curve_between_nodes(var_args){
var args92765 = [];
var len__26896__auto___92789 = arguments.length;
var i__26897__auto___92790 = (0);
while(true){
if((i__26897__auto___92790 < len__26896__auto___92789)){
args92765.push((arguments[i__26897__auto___92790]));

var G__92791 = (i__26897__auto___92790 + (1));
i__26897__auto___92790 = G__92791;
continue;
} else {
}
break;
}

var G__92768 = args92765.length;
switch (G__92768) {
case 1:
return dynomics.space.core.add_curve_between_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return dynomics.space.core.add_curve_between_nodes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return dynomics.space.core.add_curve_between_nodes.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args92765.length)].join('')));

}
});

dynomics.space.core.add_curve_between_nodes.cljs$core$IFn$_invoke$arity$1 = (function (p__92769){
var map__92770 = p__92769;
var map__92770__$1 = ((((!((map__92770 == null)))?((((map__92770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92770):map__92770);
var state = map__92770__$1;
var map__92771 = cljs.core.get.call(null,map__92770__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__92771__$1 = ((((!((map__92771 == null)))?((((map__92771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92771):map__92771);
var nodes = cljs.core.get.call(null,map__92771__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__92771__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
if((((2) === cljs.core.count.call(null,selected_nodes))) && (cljs.core.every_QMARK_.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"connection","connection",-123599300)),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.partial.call(null,cljs.core.get_in,state)),selected_nodes))){
return dynomics.space.core.add_curve_between_nodes.call(null,state,nodes,cljs.core.vec.call(null,selected_nodes));
} else {
return state;
}
});

dynomics.space.core.add_curve_between_nodes.cljs$core$IFn$_invoke$arity$3 = (function (state,nodes,edge){
return dynomics.space.core.add_curve_between_nodes.call(null,state,nodes,edge,dynomics.space.core.edge_points.call(null,nodes,edge),dynomics.space.core.make_new_id.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378)], null))));
});

dynomics.space.core.add_curve_between_nodes.cljs$core$IFn$_invoke$arity$5 = (function (state,nodes,edge,p__92774,curve_id){
var map__92775 = p__92774;
var map__92775__$1 = ((((!((map__92775 == null)))?((((map__92775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92775):map__92775);
var vec__92776 = cljs.core.get.call(null,map__92775__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var _ = cljs.core.nth.call(null,vec__92776,(0),null);
var p1 = cljs.core.nth.call(null,vec__92776,(1),null);
var p2 = cljs.core.nth.call(null,vec__92776,(2),null);
var vec__92777 = cljs.core.nth.call(null,vec__92776,(3),null);
var x1 = cljs.core.nth.call(null,vec__92777,(0),null);
var x2 = cljs.core.nth.call(null,vec__92777,(1),null);
var vec__92778 = cljs.core.nth.call(null,vec__92776,(4),null);
var y1 = cljs.core.nth.call(null,vec__92778,(0),null);
var y2 = cljs.core.nth.call(null,vec__92778,(1),null);
var vec__92779 = cljs.core.get.call(null,map__92775__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var vec__92780 = cljs.core.nth.call(null,vec__92779,(0),null);
var nid1 = cljs.core.nth.call(null,vec__92780,(0),null);
var cid1 = cljs.core.nth.call(null,vec__92780,(1),null);
var vec__92781 = cljs.core.nth.call(null,vec__92779,(1),null);
var nid2 = cljs.core.nth.call(null,vec__92781,(0),null);
var cid2 = cljs.core.nth.call(null,vec__92781,(1),null);
var ends = cljs.core.map.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null));
var ends_ns = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.count,new cljs.core.Keyword(null,"connections","connections",-2064090887)),ends);
var mp = cljs.core.first.call(null,dynomics.space.core.midpoints.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null)));
var mpcp = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.partial.call(null,cljs.core._STAR_,0.05)),dynomics.space.core.nearest_connection,cljs.core.partial.call(null,cljs.core.map,cljs.core._,mp)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2,p1], null));
var map__92784 = dynomics.space.core.add_node.call(null,state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),mp,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.vec.call(null,cljs.core.map.call(null,((function (ends,ends_ns,mp,mpcp,map__92775,map__92775__$1,vec__92776,_,p1,p2,vec__92777,x1,x2,vec__92778,y1,y2,vec__92779,vec__92780,nid1,cid1,vec__92781,nid2,cid2){
return (function (q,id){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),q,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
});})(ends,ends_ns,mp,mpcp,map__92775,map__92775__$1,vec__92776,_,p1,p2,vec__92777,x1,x2,vec__92778,y1,y2,vec__92779,vec__92780,nid1,cid1,vec__92781,nid2,cid2))
,mpcp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)))], null));
var map__92784__$1 = ((((!((map__92784 == null)))?((((map__92784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92784):map__92784);
var r = map__92784__$1;
var mpid = cljs.core.get.call(null,map__92784__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return dynomics.space.core.deselect_all.call(null,dynomics.space.core.update_curves_by_node.call(null,cljs.core.reduce.call(null,((function (ends,ends_ns,mp,mpcp,map__92784,map__92784__$1,r,mpid,map__92775,map__92775__$1,vec__92776,_,p1,p2,vec__92777,x1,x2,vec__92778,y1,y2,vec__92779,vec__92780,nid1,cid1,vec__92781,nid2,cid2){
return (function (r__$1,p__92787){
var vec__92788 = p__92787;
var id = cljs.core.nth.call(null,vec__92788,(0),null);
var cp = cljs.core.nth.call(null,vec__92788,(1),null);
return cljs.core.update_in.call(null,r__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),curve_id], null),((function (vec__92788,id,cp,ends,ends_ns,mp,mpcp,map__92784,map__92784__$1,r,mpid,map__92775,map__92775__$1,vec__92776,_,p1,p2,vec__92777,x1,x2,vec__92778,y1,y2,vec__92779,vec__92780,nid1,cid1,vec__92781,nid2,cid2){
return (function (curve){
return cljs.core.conj.call(null,(function (){var or__25827__auto__ = curve;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cp], null));
});})(vec__92788,id,cp,ends,ends_ns,mp,mpcp,map__92784,map__92784__$1,r,mpid,map__92775,map__92775__$1,vec__92776,_,p1,p2,vec__92777,x1,x2,vec__92778,y1,y2,vec__92779,vec__92780,nid1,cid1,vec__92781,nid2,cid2))
);
});})(ends,ends_ns,mp,mpcp,map__92784,map__92784__$1,r,mpid,map__92775,map__92775__$1,vec__92776,_,p1,p2,vec__92777,x1,x2,vec__92778,y1,y2,vec__92779,vec__92780,nid1,cid1,vec__92781,nid2,cid2))
,r,cljs.core.map.call(null,cljs.core.vector,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,mpid,nid2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.core.twin.call(null,cid1,cljs.core.first.call(null,ends_ns)),cid1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cid2,dynomics.space.core.twin.call(null,cid2,cljs.core.last.call(null,ends_ns))], null)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,mpid,nid2], null),curve_id));
});

dynomics.space.core.add_curve_between_nodes.cljs$lang$maxFixedArity = 5;
/**
 * Removes the selected nodes and their edges
 */
dynomics.space.core.remove_selected_nodes = (function dynomics$space$core$remove_selected_nodes(p__92806){
var map__92813 = p__92806;
var map__92813__$1 = ((((!((map__92813 == null)))?((((map__92813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92813):map__92813);
var state = map__92813__$1;
var map__92814 = cljs.core.get.call(null,map__92813__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__92814__$1 = ((((!((map__92814 == null)))?((((map__92814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92814):map__92814);
var selected_nodes = cljs.core.get.call(null,map__92814__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Remove ",selected_nodes);

return dynomics.space.core.add_connections_by_node.call(null,dynomics.space.core.update_compatibility_info.call(null,cljs.core.reduce.call(null,dynomics.space.core.remove_node_from_curves,dynomics.space.core.remove_edges.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),((function (map__92813,map__92813__$1,state,map__92814,map__92814__$1,selected_nodes){
return (function (nodes){
return cljs.core.apply.call(null,cljs.core.dissoc,nodes,cljs.core.map.call(null,cljs.core.last,selected_nodes));
});})(map__92813,map__92813__$1,state,map__92814,map__92814__$1,selected_nodes))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__92813,map__92813__$1,state,map__92814,map__92814__$1,selected_nodes){
return (function (g){
return loom.graph.remove_nodes.call(null,g,selected_nodes);
});})(map__92813,map__92813__$1,state,map__92814,map__92814__$1,selected_nodes))
),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"description","description",-1428560544),"Remove nodes"], null))),cljs.core.map.call(null,cljs.core.last,selected_nodes))));
});
dynomics.space.core.remove_selected = (function dynomics$space$core$remove_selected(p__92827){
var map__92832 = p__92827;
var map__92832__$1 = ((((!((map__92832 == null)))?((((map__92832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92832):map__92832);
var state = map__92832__$1;
var map__92833 = cljs.core.get.call(null,map__92832__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__92833__$1 = ((((!((map__92833 == null)))?((((map__92833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__92833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92833):map__92833);
var selected_nodes = cljs.core.get.call(null,map__92833__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var selected_curves = cljs.core.get.call(null,map__92833__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
return cljs.core.update_in.call(null,dynomics.space.core.remove_selected_nodes.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378)], null),((function (map__92832,map__92832__$1,state,map__92833,map__92833__$1,selected_nodes,selected_curves){
return (function (curves){
return cljs.core.apply.call(null,cljs.core.dissoc,curves,cljs.core.map.call(null,cljs.core.last,selected_curves));
});})(map__92832,map__92832__$1,state,map__92833,map__92833__$1,selected_nodes,selected_curves))
);
});
