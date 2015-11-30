// Compiled by ClojureScript 1.7.170 {}
goog.provide('dynomics.space.core');
goog.require('cljs.core');
goog.require('loom.graph');
goog.require('loom.alg');
goog.require('dynomics.ui.svg');
goog.require('dynomics.space.graph');
goog.require('clojure.set');
dynomics.space.core.P = cljs.core.partial;
dynomics.space.core.F = (function dynomics$space$core$F(f,y){
return (function (x){
return f.call(null,x,y);
});
});
dynomics.space.core.C = cljs.core.comp;
dynomics.space.core.J = cljs.core.juxt;
dynomics.space.core.I = cljs.core.identity;
dynomics.space.core.round = (function dynomics$space$core$round(x){
return Math.round(x);
});
dynomics.space.core.cos = (function dynomics$space$core$cos(x){
return Math.cos(x);
});
dynomics.space.core.sin = (function dynomics$space$core$sin(x){
return Math.sin(x);
});
dynomics.space.core.unit = (function dynomics$space$core$unit(x){
if((x < (0))){
var x__24542__auto__ = x;
var y__24543__auto__ = (-1);
return ((x__24542__auto__ > y__24543__auto__) ? x__24542__auto__ : y__24543__auto__);
} else {
var x__24549__auto__ = x;
var y__24550__auto__ = (1);
return ((x__24549__auto__ < y__24550__auto__) ? x__24549__auto__ : y__24550__auto__);
}
});
dynomics.space.core.abs = (function dynomics$space$core$abs(x){
return Math.abs(x);
});
dynomics.space.core.PI = Math.PI;
dynomics.space.core.PI2 = ((2) * dynomics.space.core.PI);
dynomics.space.core.PIb4 = (0.25 * dynomics.space.core.PI);
dynomics.space.core.r2d = ((180) / dynomics.space.core.PI);
dynomics.space.core.angle = (function dynomics$space$core$angle(p__650609){
var vec__650611 = p__650609;
var x = cljs.core.nth.call(null,vec__650611,(0),null);
var y = cljs.core.nth.call(null,vec__650611,(1),null);
return Math.atan2(x,y);
});
dynomics.space.core.p2c = (function dynomics$space$core$p2c(p__650612){
var vec__650614 = p__650612;
var r = cljs.core.nth.call(null,vec__650614,(0),null);
var theta = cljs.core.nth.call(null,vec__650614,(1),null);
return cljs.core.map.call(null,dynomics.space.core.P.call(null,cljs.core._STAR_,r),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.core.cos.call(null,theta),dynomics.space.core.sin.call(null,theta)], null));
});
dynomics.space.core.c_STAR_ = (function dynomics$space$core$c_STAR_(p__650615,p__650616){
var vec__650619 = p__650615;
var ar = cljs.core.nth.call(null,vec__650619,(0),null);
var ai = cljs.core.nth.call(null,vec__650619,(1),null);
var vec__650620 = p__650616;
var br = cljs.core.nth.call(null,vec__650620,(0),null);
var bi = cljs.core.nth.call(null,vec__650620,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((ar * br) - (ai * bi)),((ai * br) + (ar * bi))], null);
});
dynomics.space.core.c_PLUS_ = (function dynomics$space$core$c_PLUS_(a,b){
return cljs.core.map.call(null,cljs.core._PLUS_,a,b);
});
dynomics.space.core.dmp = (function dynomics$space$core$dmp(points){
return cljs.core.map.call(null,(function (p__650623){
var vec__650624 = p__650623;
var p1 = cljs.core.nth.call(null,vec__650624,(0),null);
var p2 = cljs.core.nth.call(null,vec__650624,(1),null);
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,0.5),cljs.core.map.call(null,cljs.core._PLUS_,p1,p2));
}),cljs.core.partition.call(null,(2),(1),points));
});
dynomics.space.core.dot = (function dynomics$space$core$dot(var_args){
var args__25276__auto__ = [];
var len__25269__auto___650626 = arguments.length;
var i__25270__auto___650627 = (0);
while(true){
if((i__25270__auto___650627 < len__25269__auto___650626)){
args__25276__auto__.push((arguments[i__25270__auto___650627]));

var G__650628 = (i__25270__auto___650627 + (1));
i__25270__auto___650627 = G__650628;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((0) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((0)),(0))):null);
return dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic(argseq__25277__auto__);
});

dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic = (function (x){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.apply.call(null,cljs.core.map,cljs.core._STAR_,x));
});

dynomics.space.core.dot.cljs$lang$maxFixedArity = (0);

dynomics.space.core.dot.cljs$lang$applyTo = (function (seq650625){
return dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq650625));
});
dynomics.space.core.sqrd = (function dynomics$space$core$sqrd(v){
return dynomics.space.core.dot.call(null,v,v);
});
dynomics.space.core.to_local = (function dynomics$space$core$to_local(p__650629,p__650630,p__650631){
var vec__650637 = p__650629;
var x = cljs.core.nth.call(null,vec__650637,(0),null);
var y = cljs.core.nth.call(null,vec__650637,(1),null);
var vec__650638 = p__650630;
var _ = cljs.core.nth.call(null,vec__650638,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__650638,(1),null);
var nid = cljs.core.nth.call(null,vec__650638,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__650638,(3),null);
var cid = cljs.core.nth.call(null,vec__650638,(4),null);
var map__650639 = p__650631;
var map__650639__$1 = ((((!((map__650639 == null)))?((((map__650639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650639):map__650639);
var space = map__650639__$1;
var node_scale = cljs.core.get.call(null,map__650639__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var vec__650641 = cljs.core.get_in.call(null,space,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx = cljs.core.nth.call(null,vec__650641,(0),null);
var ny = cljs.core.nth.call(null,vec__650641,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - nx) / node_scale),((y - ny) / node_scale)], null)], null);
});
/**
 * Returns the pair of control points with
 *   mirrored positions for the given control point
 */
dynomics.space.core.mirror_node = (function dynomics$space$core$mirror_node(p__650642,path,p__650643){
var vec__650649 = p__650642;
var x = cljs.core.nth.call(null,vec__650649,(0),null);
var y = cljs.core.nth.call(null,vec__650649,(1),null);
var map__650650 = p__650643;
var map__650650__$1 = ((((!((map__650650 == null)))?((((map__650650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650650):map__650650);
var space = map__650650__$1;
var node_scale = cljs.core.get.call(null,map__650650__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var vec__650652 = path;
var _ = cljs.core.nth.call(null,vec__650652,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__650652,(1),null);
var nid = cljs.core.nth.call(null,vec__650652,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__650652,(3),null);
var cid = cljs.core.nth.call(null,vec__650652,(4),null);
var cp = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.mod.call(null,(cid + (2)),(4))], null);
var vec__650653 = cljs.core.get_in.call(null,space,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx = cljs.core.nth.call(null,vec__650653,(0),null);
var ny = cljs.core.nth.call(null,vec__650653,(1),null);
var p = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - nx) / node_scale),((y - ny) / node_scale)], null);
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
dynomics.space.core.quadrants_types_by_position = (function dynomics$space$core$quadrants_types_by_position(p__650654){
var map__650657 = p__650654;
var map__650657__$1 = ((((!((map__650657 == null)))?((((map__650657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650657):map__650657);
var r1 = cljs.core.get.call(null,map__650657__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var p1 = cljs.core.get.call(null,map__650657__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.map.call(null,((function (map__650657,map__650657__$1,r1,p1){
return (function (i){
return cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295)], null));
});})(map__650657,map__650657__$1,r1,p1))
.call(null,r1),dynomics.space.core.C.call(null,dynomics.space.core.J.call(null,dynomics.space.core.P.call(null,dynomics.space.core.c_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),dynomics.space.core.P.call(null,dynomics.space.core.c_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null))),dynomics.space.core.P.call(null,cljs.core.map,dynomics.space.core.C.call(null,dynomics.space.core.unit,dynomics.space.core.round,cljs.core.double$))).call(null,p1));
});
dynomics.space.core.quadrant_vectors_by_connectors = cljs.core.zipmap.call(null,cljs.core.take.call(null,(4),cljs.core.map.call(null,dynomics.space.core.P.call(null,cljs.core.apply,cljs.core.hash_set),cljs.core.partition.call(null,(2),(1),cljs.core.cycle.call(null,cljs.core.range.call(null,(4)))))),cljs.core.iterate.call(null,dynomics.space.core.P.call(null,dynomics.space.core.c_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)));
dynomics.space.core.quadrant_types_by_connector_pair = (function dynomics$space$core$quadrant_types_by_connector_pair(node_type,quadrant_vector){
return cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_type,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),quadrant_vector], null));
});
dynomics.space.core.compare_quadrants = (function dynomics$space$core$compare_quadrants(qs){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,cljs.core.vec,qs));
});
dynomics.space.core.connections_by_vector = cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(3)], true, false);
dynomics.space.core.default_connections = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__650659){
var vec__650660 = p__650659;
var p = cljs.core.nth.call(null,vec__650660,(0),null);
var id = cljs.core.nth.call(null,vec__650660,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"position","position",-2011731912),p,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connection","connection",-123599300)], null);
}),dynomics.space.core.connections_by_vector));
/**
 * Returns a node of the given type
 */
dynomics.space.core.make_intersection_node = (function dynomics$space$core$make_intersection_node(var_args){
var args650661 = [];
var len__25269__auto___650664 = arguments.length;
var i__25270__auto___650665 = (0);
while(true){
if((i__25270__auto___650665 < len__25269__auto___650664)){
args650661.push((arguments[i__25270__auto___650665]));

var G__650666 = (i__25270__auto___650665 + (1));
i__25270__auto___650665 = G__650666;
continue;
} else {
}
break;
}

var G__650663 = args650661.length;
switch (G__650663) {
case 1:
return dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args650661.length)].join('')));

}
});

dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$1 = (function (type_id){
return dynomics.space.core.make_intersection_node.call(null,type_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.5 * cljs.core.mod.call(null,type_id,((2) * (cljs.core.mod.call(null,(type_id + (1)),(2)) + (1))))),(0.5 * cljs.core.mod.call(null,(type_id + (1)),(2)))], null));
});

dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$2 = (function (type_id,position){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"move-offset","move-offset",2091828833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersection","intersection",2003891010),new cljs.core.Keyword(null,"node-type","node-type",129492462),type_id,new cljs.core.Keyword(null,"connections","connections",-2064090887),dynomics.space.core.default_connections], null);
});

dynomics.space.core.make_intersection_node.cljs$lang$maxFixedArity = 2;
dynomics.space.core.just_ids = (function dynomics$space$core$just_ids(nodes){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p__650670){
var vec__650671 = p__650670;
var _ = cljs.core.nth.call(null,vec__650671,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__650671,(1),null);
var id = cljs.core.nth.call(null,vec__650671,(2),null);
return id;
}),nodes));
});
dynomics.space.core.quadrant_info = (function dynomics$space$core$quadrant_info(nodes,p__650672){
var vec__650674 = p__650672;
var _ = cljs.core.nth.call(null,vec__650674,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__650674,(1),null);
var nid = cljs.core.nth.call(null,vec__650674,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__650674,(3),null);
var cid = cljs.core.nth.call(null,vec__650674,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node-type","node-type",129492462),cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"node-type","node-type",129492462)], null)),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid,new cljs.core.Keyword(null,"position","position",-2011731912)], null))], null);
});
/**
 * 
 *   Returns the given state with a map of node-node compatibilities added,
 *   of the form {[nodeid1 nodeid2] true [nodeid4 nodeid5] false}
 *   
 */
dynomics.space.core.add_compatibility_info = (function dynomics$space$core$add_compatibility_info(p__650675){
var map__650680 = p__650675;
var map__650680__$1 = ((((!((map__650680 == null)))?((((map__650680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650680):map__650680);
var state = map__650680__$1;
var map__650681 = cljs.core.get.call(null,map__650680__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__650681__$1 = ((((!((map__650681 == null)))?((((map__650681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650681):map__650681);
var nodes = cljs.core.get.call(null,map__650681__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__650681__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024),dynomics.space.core.just_ids.call(null,selected_nodes)], null),dynomics.space.core.compare_quadrants.call(null,cljs.core.map.call(null,dynomics.space.core.quadrants_types_by_position,cljs.core.map.call(null,dynomics.space.core.P.call(null,dynomics.space.core.quadrant_info,nodes),selected_nodes))));
});
dynomics.space.core.connections_of_node = (function dynomics$space$core$connections_of_node(graph,edges,id){
cljs.core.println.call(null,"  con ",id,loom.graph.successors.call(null,graph,id));

var cbn = cljs.core.group_by.call(null,cljs.core.first,cljs.core.map.call(null,dynomics.space.core.P.call(null,cljs.core.sort_by,(function (x){
if((id === cljs.core.nth.call(null,x,(2)))){
return (0);
} else {
return (1);
}
})),edges));
return cljs.core.remove.call(null,dynomics.space.core.C.call(null,cljs.core.nil_QMARK_,cljs.core.last),cljs.core.map.call(null,dynomics.space.core.C.call(null,cljs.core.first,cbn),cljs.core.map.call(null,((function (cbn){
return (function (c){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id,new cljs.core.Keyword(null,"connections","connections",-2064090887),c], null);
});})(cbn))
,cljs.core.range.call(null,(4)))));
});
dynomics.space.core.add_connections_by_node = (function dynomics$space$core$add_connections_by_node(p__650684){
var map__650689 = p__650684;
var map__650689__$1 = ((((!((map__650689 == null)))?((((map__650689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650689):map__650689);
var state = map__650689__$1;
var map__650690 = cljs.core.get.call(null,map__650689__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__650690__$1 = ((((!((map__650690 == null)))?((((map__650690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650690):map__650690);
var nodes = cljs.core.get.call(null,map__650690__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__650690__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var graph = cljs.core.get.call(null,map__650690__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
cljs.core.println.call(null,"  nodes ",cljs.core.count.call(null,loom.graph.nodes.call(null,graph)));

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"connections-by-node","connections-by-node",517626909)], null),cljs.core.zipmap.call(null,cljs.core.keys.call(null,nodes),cljs.core.map.call(null,dynomics.space.core.P.call(null,dynomics.space.core.connections_of_node,graph,edges),cljs.core.keys.call(null,nodes))));
});
/**
 * Following a node-type change, update the
 *   compatibility info for its connections
 */
dynomics.space.core.update_compatibility_info = (function dynomics$space$core$update_compatibility_info(var_args){
var args650693 = [];
var len__25269__auto___650706 = arguments.length;
var i__25270__auto___650707 = (0);
while(true){
if((i__25270__auto___650707 < len__25269__auto___650706)){
args650693.push((arguments[i__25270__auto___650707]));

var G__650708 = (i__25270__auto___650707 + (1));
i__25270__auto___650707 = G__650708;
continue;
} else {
}
break;
}

var G__650695 = args650693.length;
switch (G__650695) {
case 1:
return dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args650693.length)].join('')));

}
});

dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$1 = (function (p__650696){
var map__650697 = p__650696;
var map__650697__$1 = ((((!((map__650697 == null)))?((((map__650697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650697):map__650697);
var state = map__650697__$1;
var map__650698 = cljs.core.get.call(null,map__650697__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__650698__$1 = ((((!((map__650698 == null)))?((((map__650698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650698):map__650698);
var selected_nodes = cljs.core.get.call(null,map__650698__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,dynomics.space.core.update_compatibility_info,state,dynomics.space.core.just_ids.call(null,selected_nodes));
});

dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$2 = (function (p__650701,id){
var map__650702 = p__650701;
var map__650702__$1 = ((((!((map__650702 == null)))?((((map__650702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650702):map__650702);
var state = map__650702__$1;
var map__650703 = cljs.core.get.call(null,map__650702__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__650703__$1 = ((((!((map__650703 == null)))?((((map__650703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650703):map__650703);
var graph = cljs.core.get.call(null,map__650703__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var edges = cljs.core.get.call(null,map__650703__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var nodes = cljs.core.get.call(null,map__650703__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return cljs.core.reduce.call(null,((function (map__650702,map__650702__$1,state,map__650703,map__650703__$1,graph,edges,nodes){
return (function (s,edge){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024),dynomics.space.core.just_ids.call(null,edge)], null),dynomics.space.core.compare_quadrants.call(null,cljs.core.map.call(null,dynomics.space.core.quadrants_types_by_position,cljs.core.map.call(null,dynomics.space.core.P.call(null,dynomics.space.core.quadrant_info,nodes),edge))));
});})(map__650702,map__650702__$1,state,map__650703,map__650703__$1,graph,edges,nodes))
,state,dynomics.space.core.connections_of_node.call(null,graph,edges,id));
});

dynomics.space.core.update_compatibility_info.cljs$lang$maxFixedArity = 2;
/**
 * Adds a new node at the given mouse position
 */
dynomics.space.core.add_node = (function dynomics$space$core$add_node(p__650710){
var map__650715 = p__650710;
var map__650715__$1 = ((((!((map__650715 == null)))?((((map__650715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650715):map__650715);
var state = map__650715__$1;
var map__650716 = cljs.core.get.call(null,map__650715__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__650716__$1 = ((((!((map__650716 == null)))?((((map__650716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650716):map__650716);
var nodes = cljs.core.get.call(null,map__650716__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var max_node_id = cljs.core.get.call(null,map__650716__$1,new cljs.core.Keyword(null,"max-node-id","max-node-id",-75074557));
var p = cljs.core.get.call(null,map__650715__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var new_id = ((cljs.core.truth_(max_node_id)?max_node_id:((cljs.core.empty_QMARK_.call(null,nodes))?(0):cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.vals.call(null,nodes))))) + (1));
var new_node = cljs.core.assoc.call(null,dynomics.space.core.make_intersection_node.call(null,(3)),new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"position","position",-2011731912),p);
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new_id], null),new_node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (new_id,new_node,map__650715,map__650715__$1,state,map__650716,map__650716__$1,nodes,max_node_id,p){
return (function (g){
return loom.graph.add_nodes.call(null,g,new_id);
});})(new_id,new_node,map__650715,map__650715__$1,state,map__650716,map__650716__$1,nodes,max_node_id,p))
),new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673),new_id);
});
dynomics.space.core.deselect_all = (function dynomics$space$core$deselect_all(state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.PersistentHashSet.EMPTY);
});
/**
 * Returns the state with the given edges removed
 */
dynomics.space.core.remove_edges = (function dynomics$space$core$remove_edges(p__650719){
var map__650728 = p__650719;
var map__650728__$1 = ((((!((map__650728 == null)))?((((map__650728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650728):map__650728);
var state = map__650728__$1;
var map__650729 = cljs.core.get.call(null,map__650728__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__650729__$1 = ((((!((map__650729 == null)))?((((map__650729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650729):map__650729);
var selected_nodes = cljs.core.get.call(null,map__650729__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),((function (map__650728,map__650728__$1,state,map__650729,map__650729__$1,selected_nodes){
return (function (edges){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,((function (map__650728,map__650728__$1,state,map__650729,map__650729__$1,selected_nodes){
return (function (p__650732){
var vec__650733 = p__650732;
var vec__650734 = cljs.core.nth.call(null,vec__650733,(0),null);
var _ = cljs.core.nth.call(null,vec__650734,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__650734,(1),null);
var nid1 = cljs.core.nth.call(null,vec__650734,(2),null);
var ___$2 = cljs.core.nthnext.call(null,vec__650734,(3));
var vec__650735 = cljs.core.nth.call(null,vec__650733,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__650735,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__650735,(1),null);
var nid2 = cljs.core.nth.call(null,vec__650735,(2),null);
var ___$5 = cljs.core.nthnext.call(null,vec__650735,(3));
var or__24211__auto__ = selected_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid1], null));
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return selected_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid2], null));
}
});})(map__650728,map__650728__$1,state,map__650729,map__650729__$1,selected_nodes))
,edges));
});})(map__650728,map__650728__$1,state,map__650729,map__650729__$1,selected_nodes))
);
});
/**
 * Removes the selected nodes and their edges
 */
dynomics.space.core.remove_selected_nodes = (function dynomics$space$core$remove_selected_nodes(p__650736){
var map__650741 = p__650736;
var map__650741__$1 = ((((!((map__650741 == null)))?((((map__650741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650741):map__650741);
var state = map__650741__$1;
var map__650742 = cljs.core.get.call(null,map__650741__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__650742__$1 = ((((!((map__650742 == null)))?((((map__650742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650742):map__650742);
var selected_nodes = cljs.core.get.call(null,map__650742__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Remove ",selected_nodes);

return dynomics.space.core.add_connections_by_node.call(null,dynomics.space.core.update_compatibility_info.call(null,dynomics.space.core.remove_edges.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),((function (map__650741,map__650741__$1,state,map__650742,map__650742__$1,selected_nodes){
return (function (nodes){
return cljs.core.apply.call(null,cljs.core.dissoc,nodes,cljs.core.map.call(null,cljs.core.last,selected_nodes));
});})(map__650741,map__650741__$1,state,map__650742,map__650742__$1,selected_nodes))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__650741,map__650741__$1,state,map__650742,map__650742__$1,selected_nodes){
return (function (g){
return loom.graph.remove_nodes.call(null,g,selected_nodes);
});})(map__650741,map__650741__$1,state,map__650742,map__650742__$1,selected_nodes))
),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"description","description",-1428560544),"Remove nodes"], null)))));
});
dynomics.space.core.add_graph = (function dynomics$space$core$add_graph(p__650745){
var map__650748 = p__650745;
var map__650748__$1 = ((((!((map__650748 == null)))?((((map__650748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650748):map__650748);
var space = map__650748__$1;
var edges = cljs.core.get.call(null,map__650748__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return cljs.core.assoc.call(null,space,new cljs.core.Keyword(null,"graph","graph",1558099509),cljs.core.apply.call(null,loom.graph.graph,dynomics.space.graph.simplify_edges.call(null,edges)));
});
dynomics.space.core.update_ds = (function dynomics$space$core$update_ds(p__650750){
var map__650753 = p__650750;
var map__650753__$1 = ((((!((map__650753 == null)))?((((map__650753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650753):map__650753);
var s = map__650753__$1;
var f = cljs.core.get.call(null,map__650753__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),((function (map__650753,map__650753__$1,s,f){
return (function (points){
return cljs.core.map.call(null,f,points);
});})(map__650753,map__650753__$1,s,f))
);
});
dynomics.space.core.random_points = (function dynomics$space$core$random_points(n){
return cljs.core.repeatedly.call(null,n,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.call(null),cljs.core.rand.call(null)], null);
}));
});
dynomics.space.core.grid_points = (function dynomics$space$core$grid_points(var_args){
var args650755 = [];
var len__25269__auto___650758 = arguments.length;
var i__25270__auto___650759 = (0);
while(true){
if((i__25270__auto___650759 < len__25269__auto___650758)){
args650755.push((arguments[i__25270__auto___650759]));

var G__650760 = (i__25270__auto___650759 + (1));
i__25270__auto___650759 = G__650760;
continue;
} else {
}
break;
}

var G__650757 = args650755.length;
switch (G__650757) {
case 1:
return dynomics.space.core.grid_points.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.grid_points.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args650755.length)].join('')));

}
});

dynomics.space.core.grid_points.cljs$core$IFn$_invoke$arity$1 = (function (n){
return null;
});

dynomics.space.core.grid_points.cljs$core$IFn$_invoke$arity$2 = (function (nx,ny){
return null;
});

dynomics.space.core.grid_points.cljs$lang$maxFixedArity = 2;
dynomics.space.core.make_ds = (function dynomics$space$core$make_ds(var_args){
var args650762 = [];
var len__25269__auto___650765 = arguments.length;
var i__25270__auto___650766 = (0);
while(true){
if((i__25270__auto___650766 < len__25269__auto___650765)){
args650762.push((arguments[i__25270__auto___650766]));

var G__650767 = (i__25270__auto___650766 + (1));
i__25270__auto___650766 = G__650767;
continue;
} else {
}
break;
}

var G__650764 = args650762.length;
switch (G__650764) {
case 0:
return dynomics.space.core.make_ds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.space.core.make_ds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args650762.length)].join('')));

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
var args650769 = [];
var len__25269__auto___650772 = arguments.length;
var i__25270__auto___650773 = (0);
while(true){
if((i__25270__auto___650773 < len__25269__auto___650772)){
args650769.push((arguments[i__25270__auto___650773]));

var G__650774 = (i__25270__auto___650773 + (1));
i__25270__auto___650773 = G__650774;
continue;
} else {
}
break;
}

var G__650771 = args650769.length;
switch (G__650771) {
case 3:
return dynomics.space.core.ds_evolution.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.space.core.ds_evolution.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args650769.length)].join('')));

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
dynomics.space.core.make_phase_space = (function dynomics$space$core$make_phase_space(){
return dynomics.space.core.add_graph.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"edges","edges",-694791395),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"connections-by-node","connections-by-node",517626909),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),0.02], null));
});
/**
 * Returns the given state with any connections that need to be
 *   made added to the edges map. Only connect nodes if there are two
 *   selected. Note that the connection is undirected
 */
dynomics.space.core.make_connections = (function dynomics$space$core$make_connections(p__650776){
var map__650783 = p__650776;
var map__650783__$1 = ((((!((map__650783 == null)))?((((map__650783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650783):map__650783);
var state = map__650783__$1;
var map__650784 = cljs.core.get.call(null,map__650783__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__650784__$1 = ((((!((map__650784 == null)))?((((map__650784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650784):map__650784);
var nodes = cljs.core.get.call(null,map__650784__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__650784__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Connect ",selected_nodes);

if(((2) === cljs.core.count.call(null,selected_nodes))){
return dynomics.space.core.add_connections_by_node.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,dynomics.space.core.add_compatibility_info.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),cljs.core.conj,cljs.core.vec.call(null,selected_nodes)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__650783,map__650783__$1,state,map__650784,map__650784__$1,nodes,selected_nodes){
return (function (g){
return loom.graph.add_edges.call(null,g,cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__650783,map__650783__$1,state,map__650784,map__650784__$1,nodes,selected_nodes){
return (function (p__650787){
var vec__650788 = p__650787;
var _ = cljs.core.nth.call(null,vec__650788,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__650788,(1),null);
var nid = cljs.core.nth.call(null,vec__650788,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__650788,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__650788,(4),null);
return nid;
});})(map__650783,map__650783__$1,state,map__650784,map__650784__$1,nodes,selected_nodes))
,selected_nodes)));
});})(map__650783,map__650783__$1,state,map__650784,map__650784__$1,nodes,selected_nodes))
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
return (function (p__650794){
var map__650795 = p__650794;
var map__650795__$1 = ((((!((map__650795 == null)))?((((map__650795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650795):map__650795);
var state = map__650795__$1;
var map__650796 = cljs.core.get.call(null,map__650795__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__650796__$1 = ((((!((map__650796 == null)))?((((map__650796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650796):map__650796);
var selected_nodes = cljs.core.get.call(null,map__650796__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Set node type of ",selected_nodes," to ",id);

var r = dynomics.space.core.update_compatibility_info.call(null,cljs.core.assoc.call(null,cljs.core.reduce.call(null,((function (map__650795,map__650795__$1,state,map__650796,map__650796__$1,selected_nodes){
return (function (r,path){
return cljs.core.assoc_in.call(null,r,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"node-type","node-type",129492462)),id);
});})(map__650795,map__650795__$1,state,map__650796,map__650796__$1,selected_nodes))
,state,selected_nodes),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Node type"),cljs.core.str(id)].join('')], null)));
cljs.core.println.call(null,"  updated ",cljs.core.get_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024)], null)));

return r;
});
});
dynomics.space.core.simplify_connection = (function dynomics$space$core$simplify_connection(p__650799){
var vec__650801 = p__650799;
var _ = cljs.core.nth.call(null,vec__650801,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__650801,(1),null);
var nid = cljs.core.nth.call(null,vec__650801,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__650801,(3),null);
var cid = cljs.core.nth.call(null,vec__650801,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,cid], null);
});
dynomics.space.core.simplify_connections = (function dynomics$space$core$simplify_connections(p__650802){
var vec__650810 = p__650802;
var map__650811 = cljs.core.nth.call(null,vec__650810,(0),null);
var map__650811__$1 = ((((!((map__650811 == null)))?((((map__650811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650811):map__650811);
var nodes = cljs.core.get.call(null,map__650811__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__650811__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edges","edges",-694791395),cljs.core.map.call(null,((function (vec__650810,map__650811,map__650811__$1,nodes,edges){
return (function (p__650813){
var vec__650814 = p__650813;
var vec__650815 = cljs.core.nth.call(null,vec__650814,(0),null);
var _ = cljs.core.nth.call(null,vec__650815,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__650815,(1),null);
var nid1 = cljs.core.nth.call(null,vec__650815,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__650815,(3),null);
var cid1 = cljs.core.nth.call(null,vec__650815,(4),null);
var vec__650816 = cljs.core.nth.call(null,vec__650814,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__650816,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__650816,(1),null);
var nid2 = cljs.core.nth.call(null,vec__650816,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__650816,(3),null);
var cid2 = cljs.core.nth.call(null,vec__650816,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null);
});})(vec__650810,map__650811,map__650811__$1,nodes,edges))
,edges),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes], null);
});
dynomics.space.core.insert_in = (function dynomics$space$core$insert_in(v,i,x){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.conj.call(null,cljs.core.subvec.call(null,v,(0),i),x),cljs.core.subvec.call(null,v,i)));
});
dynomics.space.core.with_compatibilities = (function dynomics$space$core$with_compatibilities(p__650817,compatibilities){
var map__650822 = p__650817;
var map__650822__$1 = ((((!((map__650822 == null)))?((((map__650822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650822):map__650822);
var e = map__650822__$1;
var vec__650823 = cljs.core.get.call(null,map__650822__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__650824 = cljs.core.nth.call(null,vec__650823,(0),null);
var nid1 = cljs.core.nth.call(null,vec__650824,(0),null);
var nid2 = cljs.core.nth.call(null,vec__650824,(1),null);
var _ = cljs.core.nthnext.call(null,vec__650823,(1));
return cljs.core.assoc.call(null,e,new cljs.core.Keyword(null,"compatible?","compatible?",923422575),compatibilities.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null)));
});
dynomics.space.core.edge_points = (function dynomics$space$core$edge_points(nodes,p__650826){
var vec__650834 = p__650826;
var vec__650835 = cljs.core.nth.call(null,vec__650834,(0),null);
var _ = cljs.core.nth.call(null,vec__650835,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__650835,(1),null);
var nid1 = cljs.core.nth.call(null,vec__650835,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__650835,(3),null);
var cid1 = cljs.core.nth.call(null,vec__650835,(4),null);
var vec__650836 = cljs.core.nth.call(null,vec__650834,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__650836,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__650836,(1),null);
var nid2 = cljs.core.nth.call(null,vec__650836,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__650836,(3),null);
var cid2 = cljs.core.nth.call(null,vec__650836,(4),null);
var vec__650837 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__650837,(0),null);
var ny1 = cljs.core.nth.call(null,vec__650837,(1),null);
var vec__650838 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx2 = cljs.core.nth.call(null,vec__650838,(0),null);
var ny2 = cljs.core.nth.call(null,vec__650838,(1),null);
var vec__650839 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__650839,(0),null);
var cy1 = cljs.core.nth.call(null,vec__650839,(1),null);
var vec__650840 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid2,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx2 = cljs.core.nth.call(null,vec__650840,(0),null);
var cy2 = cljs.core.nth.call(null,vec__650840,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx2,ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx1,cx2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cy1,cy2], null)], null),new cljs.core.Keyword(null,"connections","connections",-2064090887),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,cid1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,cid2], null)], null)], null);
});
dynomics.space.core.make_open_regions = (function dynomics$space$core$make_open_regions(node_scale,p__650841){
var vec__650855 = p__650841;
var node_id = cljs.core.nth.call(null,vec__650855,(0),null);
var node_type = cljs.core.nth.call(null,vec__650855,(1),null);
var edge_pairs = cljs.core.nth.call(null,vec__650855,(2),null);
cljs.core.println.call(null,"   >>> ",node_id,cljs.core.count.call(null,edge_pairs));

return cljs.core.map.call(null,((function (vec__650855,node_id,node_type,edge_pairs){
return (function (edge_pair){
var vec__650856 = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"connections","connections",-2064090887),edge_pair);
var _ = cljs.core.nth.call(null,vec__650856,(0),null);
var vec__650857 = cljs.core.nth.call(null,vec__650856,(1),null);
var nid1 = cljs.core.nth.call(null,vec__650857,(0),null);
var x = cljs.core.nth.call(null,vec__650857,(1),null);
var vec__650858 = cljs.core.nth.call(null,vec__650856,(2),null);
var nid2 = cljs.core.nth.call(null,vec__650858,(0),null);
var y = cljs.core.nth.call(null,vec__650858,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__650856,(3),null);
var xy = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var qv = dynomics.space.core.quadrant_vectors_by_connectors.call(null,xy);
var qt = dynomics.space.core.quadrant_types_by_connector_pair.call(null,node_type,qv);
cljs.core.println.call(null,"       > ",node_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null),xy,qt,qv);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node-id","node-id",779482292),node_id,new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370),qt,new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631),qv,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.mapcat.call(null,((function (vec__650856,_,vec__650857,nid1,x,vec__650858,nid2,y,___$1,xy,qv,qt,vec__650855,node_id,node_type,edge_pairs){
return (function (p__650859){
var map__650860 = p__650859;
var map__650860__$1 = ((((!((map__650860 == null)))?((((map__650860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650860):map__650860);
var vec__650861 = cljs.core.get.call(null,map__650860__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__650862 = cljs.core.nth.call(null,vec__650861,(0),null);
var nid1__$1 = cljs.core.nth.call(null,vec__650862,(0),null);
var nid2__$1 = cljs.core.nth.call(null,vec__650862,(1),null);
var vec__650863 = cljs.core.nth.call(null,vec__650861,(1),null);
var nx1 = cljs.core.nth.call(null,vec__650863,(0),null);
var ny1 = cljs.core.nth.call(null,vec__650863,(1),null);
var vec__650864 = cljs.core.nth.call(null,vec__650861,(2),null);
var nx2 = cljs.core.nth.call(null,vec__650864,(0),null);
var ny2 = cljs.core.nth.call(null,vec__650864,(1),null);
var vec__650865 = cljs.core.nth.call(null,vec__650861,(3),null);
var cx1 = cljs.core.nth.call(null,vec__650865,(0),null);
var cx2 = cljs.core.nth.call(null,vec__650865,(1),null);
var vec__650866 = cljs.core.nth.call(null,vec__650861,(4),null);
var cy1 = cljs.core.nth.call(null,vec__650866,(0),null);
var cy2 = cljs.core.nth.call(null,vec__650866,(1),null);
var cnx = cljs.core.get.call(null,map__650860__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return cljs.core.map.call(null,dynomics.ui.svg.make_bezier,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx2,ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx2 + (node_scale * cx2)),(ny2 + (node_scale * cy2))], null)], null)], null));
});})(vec__650856,_,vec__650857,nid1,x,vec__650858,nid2,y,___$1,xy,qv,qt,vec__650855,node_id,node_type,edge_pairs))
,edge_pair)], null);
});})(vec__650855,node_id,node_type,edge_pairs))
,edge_pairs);
});
dynomics.space.core.reverse_edge = (function dynomics$space$core$reverse_edge(p__650868){
var map__650872 = p__650868;
var map__650872__$1 = ((((!((map__650872 == null)))?((((map__650872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650872):map__650872);
var vec__650873 = cljs.core.get.call(null,map__650872__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var ids = cljs.core.nth.call(null,vec__650873,(0),null);
var p1 = cljs.core.nth.call(null,vec__650873,(1),null);
var p2 = cljs.core.nth.call(null,vec__650873,(2),null);
var cx = cljs.core.nth.call(null,vec__650873,(3),null);
var cy = cljs.core.nth.call(null,vec__650873,(4),null);
var c = cljs.core.get.call(null,map__650872__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reverse.call(null,ids),p2,p1,cljs.core.reverse.call(null,cx),cljs.core.reverse.call(null,cy)], null),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.reverse.call(null,c)], null);
});
dynomics.space.core.edge_pairs_by_node = (function dynomics$space$core$edge_pairs_by_node(p__650875){
var map__650882 = p__650875;
var map__650882__$1 = ((((!((map__650882 == null)))?((((map__650882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__650882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__650882):map__650882);
var nodes = cljs.core.get.call(null,map__650882__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var connections_by_node = cljs.core.get.call(null,map__650882__$1,new cljs.core.Keyword(null,"connections-by-node","connections-by-node",517626909));
var node_scale = cljs.core.get.call(null,map__650882__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"cbn",connections_by_node);

return cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.empty_QMARK_,cljs.core.last),cljs.core.map.call(null,((function (map__650882,map__650882__$1,nodes,connections_by_node,node_scale){
return (function (p__650884){
var vec__650885 = p__650884;
var id = cljs.core.nth.call(null,vec__650885,(0),null);
var connections = cljs.core.nth.call(null,vec__650885,(1),null);
cljs.core.println.call(null,"regions for node ",id,cljs.core.count.call(null,connections));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"node-type","node-type",129492462)], null)),cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.comp.call(null,dynomics.space.core.reverse_edge,cljs.core.first),cljs.core.last),cljs.core.take.call(null,cljs.core.count.call(null,connections),cljs.core.partition.call(null,(2),(1),cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.edge_points,nodes),cljs.core.cycle.call(null,connections)))))], null);
});})(map__650882,map__650882__$1,nodes,connections_by_node,node_scale))
,cljs.core.filter.call(null,((function (map__650882,map__650882__$1,nodes,connections_by_node,node_scale){
return (function (p__650886){
var vec__650887 = p__650886;
var k = cljs.core.nth.call(null,vec__650887,(0),null);
var v = cljs.core.nth.call(null,vec__650887,(1),null);
return (cljs.core.count.call(null,v) > (1));
});})(map__650882,map__650882__$1,nodes,connections_by_node,node_scale))
,cljs.core.map.call(null,dynomics.space.core.J.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),dynomics.space.core.C.call(null,connections_by_node,new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.vals.call(null,nodes)))));
});

//# sourceMappingURL=core.js.map