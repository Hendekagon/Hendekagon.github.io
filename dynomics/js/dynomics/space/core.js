// Compiled by ClojureScript 1.7.170 {}
goog.provide('dynomics.space.core');
goog.require('cljs.core');
goog.require('loom.graph');
goog.require('loom.alg');
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
var x__24492__auto__ = x;
var y__24493__auto__ = (-1);
return ((x__24492__auto__ > y__24493__auto__) ? x__24492__auto__ : y__24493__auto__);
} else {
var x__24499__auto__ = x;
var y__24500__auto__ = (1);
return ((x__24499__auto__ < y__24500__auto__) ? x__24499__auto__ : y__24500__auto__);
}
});
dynomics.space.core.abs = (function dynomics$space$core$abs(x){
return Math.abs(x);
});
dynomics.space.core.PI = Math.PI;
dynomics.space.core.PI2 = ((2) * dynomics.space.core.PI);
dynomics.space.core.PIb4 = (0.25 * dynomics.space.core.PI);
dynomics.space.core.r2d = ((180) / dynomics.space.core.PI);
dynomics.space.core.angle = (function dynomics$space$core$angle(p__1888562){
var vec__1888564 = p__1888562;
var x = cljs.core.nth.call(null,vec__1888564,(0),null);
var y = cljs.core.nth.call(null,vec__1888564,(1),null);
return Math.atan2(x,y);
});
dynomics.space.core.p2c = (function dynomics$space$core$p2c(p__1888565){
var vec__1888567 = p__1888565;
var r = cljs.core.nth.call(null,vec__1888567,(0),null);
var theta = cljs.core.nth.call(null,vec__1888567,(1),null);
return cljs.core.map.call(null,dynomics.space.core.P.call(null,cljs.core._STAR_,r),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.core.cos.call(null,theta),dynomics.space.core.sin.call(null,theta)], null));
});
dynomics.space.core.c_STAR_ = (function dynomics$space$core$c_STAR_(p__1888568,p__1888569){
var vec__1888572 = p__1888568;
var ar = cljs.core.nth.call(null,vec__1888572,(0),null);
var ai = cljs.core.nth.call(null,vec__1888572,(1),null);
var vec__1888573 = p__1888569;
var br = cljs.core.nth.call(null,vec__1888573,(0),null);
var bi = cljs.core.nth.call(null,vec__1888573,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((ar * br) - (ai * bi)),((ai * br) + (ar * bi))], null);
});
dynomics.space.core.c_PLUS_ = (function dynomics$space$core$c_PLUS_(a,b){
return cljs.core.map.call(null,cljs.core._PLUS_,a,b);
});
dynomics.space.core.dmp = (function dynomics$space$core$dmp(points){
return cljs.core.map.call(null,(function (p__1888576){
var vec__1888577 = p__1888576;
var p1 = cljs.core.nth.call(null,vec__1888577,(0),null);
var p2 = cljs.core.nth.call(null,vec__1888577,(1),null);
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,0.5),cljs.core.map.call(null,cljs.core._PLUS_,p1,p2));
}),cljs.core.partition.call(null,(2),(1),points));
});
dynomics.space.core.dot = (function dynomics$space$core$dot(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1888579 = arguments.length;
var i__25220__auto___1888580 = (0);
while(true){
if((i__25220__auto___1888580 < len__25219__auto___1888579)){
args__25226__auto__.push((arguments[i__25220__auto___1888580]));

var G__1888581 = (i__25220__auto___1888580 + (1));
i__25220__auto___1888580 = G__1888581;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((0) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((0)),(0))):null);
return dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic(argseq__25227__auto__);
});

dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic = (function (x){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.apply.call(null,cljs.core.map,cljs.core._STAR_,x));
});

dynomics.space.core.dot.cljs$lang$maxFixedArity = (0);

dynomics.space.core.dot.cljs$lang$applyTo = (function (seq1888578){
return dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1888578));
});
dynomics.space.core.to_local = (function dynomics$space$core$to_local(p__1888582,p__1888583,p__1888584){
var vec__1888590 = p__1888582;
var x = cljs.core.nth.call(null,vec__1888590,(0),null);
var y = cljs.core.nth.call(null,vec__1888590,(1),null);
var vec__1888591 = p__1888583;
var _ = cljs.core.nth.call(null,vec__1888591,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__1888591,(1),null);
var nid = cljs.core.nth.call(null,vec__1888591,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__1888591,(3),null);
var cid = cljs.core.nth.call(null,vec__1888591,(4),null);
var map__1888592 = p__1888584;
var map__1888592__$1 = ((((!((map__1888592 == null)))?((((map__1888592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888592):map__1888592);
var space = map__1888592__$1;
var node_scale = cljs.core.get.call(null,map__1888592__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var vec__1888594 = cljs.core.get_in.call(null,space,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx = cljs.core.nth.call(null,vec__1888594,(0),null);
var ny = cljs.core.nth.call(null,vec__1888594,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - nx) / node_scale),((y - ny) / node_scale)], null)], null);
});
/**
 * Returns the pair of control points with
 *   mirrored positions for the given control point
 */
dynomics.space.core.mirror_node = (function dynomics$space$core$mirror_node(p__1888595,path,p__1888596){
var vec__1888602 = p__1888595;
var x = cljs.core.nth.call(null,vec__1888602,(0),null);
var y = cljs.core.nth.call(null,vec__1888602,(1),null);
var map__1888603 = p__1888596;
var map__1888603__$1 = ((((!((map__1888603 == null)))?((((map__1888603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888603):map__1888603);
var space = map__1888603__$1;
var node_scale = cljs.core.get.call(null,map__1888603__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var vec__1888605 = path;
var _ = cljs.core.nth.call(null,vec__1888605,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__1888605,(1),null);
var nid = cljs.core.nth.call(null,vec__1888605,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__1888605,(3),null);
var cid = cljs.core.nth.call(null,vec__1888605,(4),null);
var cp = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.mod.call(null,(cid + (2)),(4))], null);
var vec__1888606 = cljs.core.get_in.call(null,space,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx = cljs.core.nth.call(null,vec__1888606,(0),null);
var ny = cljs.core.nth.call(null,vec__1888606,(1),null);
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
dynomics.space.core.quadrants_types_by_position = (function dynomics$space$core$quadrants_types_by_position(p__1888607,p__1888608){
var map__1888613 = p__1888607;
var map__1888613__$1 = ((((!((map__1888613 == null)))?((((map__1888613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888613):map__1888613);
var r1 = cljs.core.get.call(null,map__1888613__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var p1 = cljs.core.get.call(null,map__1888613__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var map__1888614 = p__1888608;
var map__1888614__$1 = ((((!((map__1888614 == null)))?((((map__1888614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888614):map__1888614);
var r2 = cljs.core.get.call(null,map__1888614__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var p2 = cljs.core.get.call(null,map__1888614__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.map.call(null,cljs.core.map,cljs.core.map.call(null,((function (map__1888613,map__1888613__$1,r1,p1,map__1888614,map__1888614__$1,r2,p2){
return (function (i){
return cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295)], null));
});})(map__1888613,map__1888613__$1,r1,p1,map__1888614,map__1888614__$1,r2,p2))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r1,r2], null)),cljs.core.map.call(null,dynomics.space.core.J.call(null,dynomics.space.core.P.call(null,dynomics.space.core.c_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)),dynomics.space.core.P.call(null,dynomics.space.core.c_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null))),cljs.core.map.call(null,dynomics.space.core.P.call(null,cljs.core.map,dynomics.space.core.C.call(null,dynomics.space.core.unit,dynomics.space.core.round,cljs.core.double$)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null))));
});
dynomics.space.core.compare_quadrants = (function dynomics$space$core$compare_quadrants(qs){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,cljs.core.vec,qs));
});
dynomics.space.core.connections_by_vector = cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(3)], true, false);
dynomics.space.core.default_connections = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__1888617){
var vec__1888618 = p__1888617;
var p = cljs.core.nth.call(null,vec__1888618,(0),null);
var id = cljs.core.nth.call(null,vec__1888618,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"position","position",-2011731912),p,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connection","connection",-123599300)], null);
}),dynomics.space.core.connections_by_vector));
/**
 * Returns a node of the given type
 */
dynomics.space.core.make_intersection_node = (function dynomics$space$core$make_intersection_node(var_args){
var args1888619 = [];
var len__25219__auto___1888622 = arguments.length;
var i__25220__auto___1888623 = (0);
while(true){
if((i__25220__auto___1888623 < len__25219__auto___1888622)){
args1888619.push((arguments[i__25220__auto___1888623]));

var G__1888624 = (i__25220__auto___1888623 + (1));
i__25220__auto___1888623 = G__1888624;
continue;
} else {
}
break;
}

var G__1888621 = args1888619.length;
switch (G__1888621) {
case 1:
return dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1888619.length)].join('')));

}
});

dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$1 = (function (type_id){
return dynomics.space.core.make_intersection_node.call(null,type_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0.5 * cljs.core.mod.call(null,type_id,((2) * (cljs.core.mod.call(null,(type_id + (1)),(2)) + (1))))),(0.5 * cljs.core.mod.call(null,(type_id + (1)),(2)))], null));
});

dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$2 = (function (type_id,position){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"move-offset","move-offset",2091828833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersection","intersection",2003891010),new cljs.core.Keyword(null,"node-type","node-type",129492462),type_id,new cljs.core.Keyword(null,"connections","connections",-2064090887),dynomics.space.core.default_connections], null);
});

dynomics.space.core.make_intersection_node.cljs$lang$maxFixedArity = 2;
/**
 * Adds a new node at the given mouse position
 */
dynomics.space.core.add_node = (function dynomics$space$core$add_node(p__1888626){
var map__1888631 = p__1888626;
var map__1888631__$1 = ((((!((map__1888631 == null)))?((((map__1888631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888631):map__1888631);
var state = map__1888631__$1;
var map__1888632 = cljs.core.get.call(null,map__1888631__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__1888632__$1 = ((((!((map__1888632 == null)))?((((map__1888632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888632):map__1888632);
var nodes = cljs.core.get.call(null,map__1888632__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var max_node_id = cljs.core.get.call(null,map__1888632__$1,new cljs.core.Keyword(null,"max-node-id","max-node-id",-75074557));
var p = cljs.core.get.call(null,map__1888631__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var new_id = ((cljs.core.truth_(max_node_id)?max_node_id:((cljs.core.empty_QMARK_.call(null,nodes))?(0):cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.vals.call(null,nodes))))) + (1));
var new_node = cljs.core.assoc.call(null,dynomics.space.core.make_intersection_node.call(null,(3)),new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"position","position",-2011731912),p);
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new_id], null),new_node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (new_id,new_node,map__1888631,map__1888631__$1,state,map__1888632,map__1888632__$1,nodes,max_node_id,p){
return (function (g){
return loom.graph.add_nodes.call(null,g,new_node);
});})(new_id,new_node,map__1888631,map__1888631__$1,state,map__1888632,map__1888632__$1,nodes,max_node_id,p))
),new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673),new_id);
});
dynomics.space.core.deselect_all = (function dynomics$space$core$deselect_all(state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.PersistentHashSet.EMPTY);
});
/**
 * Returns the state with the given edges removed
 */
dynomics.space.core.remove_edges = (function dynomics$space$core$remove_edges(p__1888635){
var map__1888644 = p__1888635;
var map__1888644__$1 = ((((!((map__1888644 == null)))?((((map__1888644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888644):map__1888644);
var state = map__1888644__$1;
var map__1888645 = cljs.core.get.call(null,map__1888644__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__1888645__$1 = ((((!((map__1888645 == null)))?((((map__1888645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888645):map__1888645);
var selected_nodes = cljs.core.get.call(null,map__1888645__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),((function (map__1888644,map__1888644__$1,state,map__1888645,map__1888645__$1,selected_nodes){
return (function (edges){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,((function (map__1888644,map__1888644__$1,state,map__1888645,map__1888645__$1,selected_nodes){
return (function (p__1888648){
var vec__1888649 = p__1888648;
var vec__1888650 = cljs.core.nth.call(null,vec__1888649,(0),null);
var _ = cljs.core.nth.call(null,vec__1888650,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__1888650,(1),null);
var nid1 = cljs.core.nth.call(null,vec__1888650,(2),null);
var ___$2 = cljs.core.nthnext.call(null,vec__1888650,(3));
var vec__1888651 = cljs.core.nth.call(null,vec__1888649,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__1888651,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__1888651,(1),null);
var nid2 = cljs.core.nth.call(null,vec__1888651,(2),null);
var ___$5 = cljs.core.nthnext.call(null,vec__1888651,(3));
var or__24161__auto__ = selected_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid1], null));
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return selected_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid2], null));
}
});})(map__1888644,map__1888644__$1,state,map__1888645,map__1888645__$1,selected_nodes))
,edges));
});})(map__1888644,map__1888644__$1,state,map__1888645,map__1888645__$1,selected_nodes))
);
});
/**
 * Removes the selected nodes and their edges
 */
dynomics.space.core.remove_selected_nodes = (function dynomics$space$core$remove_selected_nodes(p__1888652){
var map__1888657 = p__1888652;
var map__1888657__$1 = ((((!((map__1888657 == null)))?((((map__1888657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888657):map__1888657);
var state = map__1888657__$1;
var map__1888658 = cljs.core.get.call(null,map__1888657__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__1888658__$1 = ((((!((map__1888658 == null)))?((((map__1888658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888658):map__1888658);
var selected_nodes = cljs.core.get.call(null,map__1888658__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Remove ",selected_nodes);

return dynomics.space.core.remove_edges.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),((function (map__1888657,map__1888657__$1,state,map__1888658,map__1888658__$1,selected_nodes){
return (function (nodes){
return cljs.core.apply.call(null,cljs.core.dissoc,nodes,cljs.core.map.call(null,cljs.core.last,selected_nodes));
});})(map__1888657,map__1888657__$1,state,map__1888658,map__1888658__$1,selected_nodes))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__1888657,map__1888657__$1,state,map__1888658,map__1888658__$1,selected_nodes){
return (function (g){
return loom.graph.remove_nodes.call(null,g,selected_nodes);
});})(map__1888657,map__1888657__$1,state,map__1888658,map__1888658__$1,selected_nodes))
),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"description","description",-1428560544),"Remove nodes"], null)));
});
dynomics.space.core.add_graph = (function dynomics$space$core$add_graph(p__1888661){
var map__1888664 = p__1888661;
var map__1888664__$1 = ((((!((map__1888664 == null)))?((((map__1888664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888664):map__1888664);
var space = map__1888664__$1;
var edges = cljs.core.get.call(null,map__1888664__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return cljs.core.assoc.call(null,space,new cljs.core.Keyword(null,"graph","graph",1558099509),cljs.core.apply.call(null,loom.graph.graph,edges));
});
dynomics.space.core.update_ds = (function dynomics$space$core$update_ds(p__1888666){
var map__1888669 = p__1888666;
var map__1888669__$1 = ((((!((map__1888669 == null)))?((((map__1888669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888669):map__1888669);
var s = map__1888669__$1;
var f = cljs.core.get.call(null,map__1888669__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),((function (map__1888669,map__1888669__$1,s,f){
return (function (points){
return cljs.core.map.call(null,f,points);
});})(map__1888669,map__1888669__$1,s,f))
);
});
dynomics.space.core.random_points = (function dynomics$space$core$random_points(n){
return cljs.core.repeatedly.call(null,n,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.call(null),cljs.core.rand.call(null)], null);
}));
});
dynomics.space.core.grid_points = (function dynomics$space$core$grid_points(var_args){
var args1888671 = [];
var len__25219__auto___1888674 = arguments.length;
var i__25220__auto___1888675 = (0);
while(true){
if((i__25220__auto___1888675 < len__25219__auto___1888674)){
args1888671.push((arguments[i__25220__auto___1888675]));

var G__1888676 = (i__25220__auto___1888675 + (1));
i__25220__auto___1888675 = G__1888676;
continue;
} else {
}
break;
}

var G__1888673 = args1888671.length;
switch (G__1888673) {
case 1:
return dynomics.space.core.grid_points.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.grid_points.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1888671.length)].join('')));

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
var args1888678 = [];
var len__25219__auto___1888681 = arguments.length;
var i__25220__auto___1888682 = (0);
while(true){
if((i__25220__auto___1888682 < len__25219__auto___1888681)){
args1888678.push((arguments[i__25220__auto___1888682]));

var G__1888683 = (i__25220__auto___1888682 + (1));
i__25220__auto___1888682 = G__1888683;
continue;
} else {
}
break;
}

var G__1888680 = args1888678.length;
switch (G__1888680) {
case 0:
return dynomics.space.core.make_ds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.space.core.make_ds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1888678.length)].join('')));

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
var args1888685 = [];
var len__25219__auto___1888688 = arguments.length;
var i__25220__auto___1888689 = (0);
while(true){
if((i__25220__auto___1888689 < len__25219__auto___1888688)){
args1888685.push((arguments[i__25220__auto___1888689]));

var G__1888690 = (i__25220__auto___1888689 + (1));
i__25220__auto___1888689 = G__1888690;
continue;
} else {
}
break;
}

var G__1888687 = args1888685.length;
switch (G__1888687) {
case 3:
return dynomics.space.core.ds_evolution.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.space.core.ds_evolution.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1888685.length)].join('')));

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
return dynomics.space.core.add_graph.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"edges","edges",-694791395),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),0.02], null));
});
dynomics.space.core.just_ids = (function dynomics$space$core$just_ids(nodes){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__1888694){
var vec__1888695 = p__1888694;
var _ = cljs.core.nth.call(null,vec__1888695,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__1888695,(1),null);
var id = cljs.core.nth.call(null,vec__1888695,(2),null);
return id;
}),nodes));
});
dynomics.space.core.quadrant_info = (function dynomics$space$core$quadrant_info(nodez,nodes){
return cljs.core.map.call(null,(function (p__1888698){
var vec__1888699 = p__1888698;
var _ = cljs.core.nth.call(null,vec__1888699,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__1888699,(1),null);
var nid = cljs.core.nth.call(null,vec__1888699,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__1888699,(3),null);
var cid = cljs.core.nth.call(null,vec__1888699,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node-type","node-type",129492462),cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"node-type","node-type",129492462)], null)),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid,new cljs.core.Keyword(null,"position","position",-2011731912)], null))], null);
}),nodez);
});
/**
 * 
 *   Returns the given state with a map of node-node compatibilities added,
 *   of the form {[nodeid1 nodeid2] true [nodeid4 nodeid5] false}
 *   
 */
dynomics.space.core.add_compatibility_info = (function dynomics$space$core$add_compatibility_info(p__1888700){
var map__1888705 = p__1888700;
var map__1888705__$1 = ((((!((map__1888705 == null)))?((((map__1888705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888705):map__1888705);
var state = map__1888705__$1;
var map__1888706 = cljs.core.get.call(null,map__1888705__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__1888706__$1 = ((((!((map__1888706 == null)))?((((map__1888706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888706):map__1888706);
var nodes = cljs.core.get.call(null,map__1888706__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__1888706__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024),dynomics.space.core.just_ids.call(null,selected_nodes)], null),dynomics.space.core.compare_quadrants.call(null,cljs.core.apply.call(null,dynomics.space.core.quadrants_types_by_position,dynomics.space.core.quadrant_info.call(null,selected_nodes,nodes))));
});
/**
 * Returns the given state with any connections that need to be
 *   made added to the edges map. Only connect nodes if there are two
 *   selected. Note that the connection is undirected
 */
dynomics.space.core.make_connections = (function dynomics$space$core$make_connections(p__1888709){
var map__1888716 = p__1888709;
var map__1888716__$1 = ((((!((map__1888716 == null)))?((((map__1888716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888716):map__1888716);
var state = map__1888716__$1;
var map__1888717 = cljs.core.get.call(null,map__1888716__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__1888717__$1 = ((((!((map__1888717 == null)))?((((map__1888717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888717):map__1888717);
var nodes = cljs.core.get.call(null,map__1888717__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__1888717__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Connect ",selected_nodes);

if(((2) === cljs.core.count.call(null,selected_nodes))){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,dynomics.space.core.add_compatibility_info.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),cljs.core.conj,cljs.core.vec.call(null,selected_nodes)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__1888716,map__1888716__$1,state,map__1888717,map__1888717__$1,nodes,selected_nodes){
return (function (g){
return loom.graph.add_edges.call(null,g,cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__1888716,map__1888716__$1,state,map__1888717,map__1888717__$1,nodes,selected_nodes){
return (function (p__1888720){
var vec__1888721 = p__1888720;
var _ = cljs.core.nth.call(null,vec__1888721,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__1888721,(1),null);
var nid = cljs.core.nth.call(null,vec__1888721,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__1888721,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__1888721,(4),null);
return nid;
});})(map__1888716,map__1888716__$1,state,map__1888717,map__1888717__$1,nodes,selected_nodes))
,selected_nodes)));
});})(map__1888716,map__1888716__$1,state,map__1888717,map__1888717__$1,nodes,selected_nodes))
);
} else {
return state;
}
});
/**
 * Following a node-type change, update the
 *   compatibility info for its connections
 */
dynomics.space.core.update_compatibility_info = (function dynomics$space$core$update_compatibility_info(var_args){
var args1888722 = [];
var len__25219__auto___1888735 = arguments.length;
var i__25220__auto___1888736 = (0);
while(true){
if((i__25220__auto___1888736 < len__25219__auto___1888735)){
args1888722.push((arguments[i__25220__auto___1888736]));

var G__1888737 = (i__25220__auto___1888736 + (1));
i__25220__auto___1888736 = G__1888737;
continue;
} else {
}
break;
}

var G__1888724 = args1888722.length;
switch (G__1888724) {
case 1:
return dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1888722.length)].join('')));

}
});

dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$1 = (function (p__1888725){
var map__1888726 = p__1888725;
var map__1888726__$1 = ((((!((map__1888726 == null)))?((((map__1888726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888726):map__1888726);
var state = map__1888726__$1;
var map__1888727 = cljs.core.get.call(null,map__1888726__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__1888727__$1 = ((((!((map__1888727 == null)))?((((map__1888727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888727):map__1888727);
var selected_nodes = cljs.core.get.call(null,map__1888727__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,dynomics.space.core.update_compatibility_info,state,dynomics.space.core.just_ids.call(null,selected_nodes));
});

dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$2 = (function (p__1888730,id){
var map__1888731 = p__1888730;
var map__1888731__$1 = ((((!((map__1888731 == null)))?((((map__1888731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888731):map__1888731);
var state = map__1888731__$1;
var map__1888732 = cljs.core.get.call(null,map__1888731__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__1888732__$1 = ((((!((map__1888732 == null)))?((((map__1888732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888732):map__1888732);
var graph = cljs.core.get.call(null,map__1888732__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var edges = cljs.core.get.call(null,map__1888732__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var nodes = cljs.core.get.call(null,map__1888732__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return cljs.core.reduce.call(null,((function (map__1888731,map__1888731__$1,state,map__1888732,map__1888732__$1,graph,edges,nodes){
return (function (s,edge){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024),dynomics.space.core.just_ids.call(null,edge)], null),dynomics.space.core.compare_quadrants.call(null,cljs.core.apply.call(null,dynomics.space.core.quadrants_types_by_position,dynomics.space.core.quadrant_info.call(null,edge,nodes))));
});})(map__1888731,map__1888731__$1,state,map__1888732,map__1888732__$1,graph,edges,nodes))
,state,cljs.core.remove.call(null,dynomics.space.core.C.call(null,cljs.core.nil_QMARK_,cljs.core.last),cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,dynomics.space.core.C.call(null,cljs.core.first,dynomics.space.core.P.call(null,loom.graph.successors,graph))),cljs.core.map.call(null,((function (map__1888731,map__1888731__$1,state,map__1888732,map__1888732__$1,graph,edges,nodes){
return (function (c){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id,new cljs.core.Keyword(null,"connections","connections",-2064090887),c], null);
});})(map__1888731,map__1888731__$1,state,map__1888732,map__1888732__$1,graph,edges,nodes))
,cljs.core.range.call(null,(4))))));
});

dynomics.space.core.update_compatibility_info.cljs$lang$maxFixedArity = 2;
/**
 * Returns a function to set the given selected nodes
 *   to the given node type id
 */
dynomics.space.core.set_node_type = (function dynomics$space$core$set_node_type(id){
return (function (p__1888744){
var map__1888745 = p__1888744;
var map__1888745__$1 = ((((!((map__1888745 == null)))?((((map__1888745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888745):map__1888745);
var state = map__1888745__$1;
var map__1888746 = cljs.core.get.call(null,map__1888745__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__1888746__$1 = ((((!((map__1888746 == null)))?((((map__1888746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888746):map__1888746);
var selected_nodes = cljs.core.get.call(null,map__1888746__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Set node type of ",selected_nodes," to ",id);

var r = dynomics.space.core.update_compatibility_info.call(null,cljs.core.assoc.call(null,cljs.core.reduce.call(null,((function (map__1888745,map__1888745__$1,state,map__1888746,map__1888746__$1,selected_nodes){
return (function (r,path){
return cljs.core.assoc_in.call(null,r,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"node-type","node-type",129492462)),id);
});})(map__1888745,map__1888745__$1,state,map__1888746,map__1888746__$1,selected_nodes))
,state,selected_nodes),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Node type"),cljs.core.str(id)].join('')], null)));
cljs.core.println.call(null,"  updated ",cljs.core.get_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024)], null)));

return r;
});
});
dynomics.space.core.simplify_connection = (function dynomics$space$core$simplify_connection(p__1888749){
var vec__1888751 = p__1888749;
var _ = cljs.core.nth.call(null,vec__1888751,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__1888751,(1),null);
var nid = cljs.core.nth.call(null,vec__1888751,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__1888751,(3),null);
var cid = cljs.core.nth.call(null,vec__1888751,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,cid], null);
});
dynomics.space.core.simplify_connections = (function dynomics$space$core$simplify_connections(p__1888752){
var vec__1888760 = p__1888752;
var map__1888761 = cljs.core.nth.call(null,vec__1888760,(0),null);
var map__1888761__$1 = ((((!((map__1888761 == null)))?((((map__1888761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888761):map__1888761);
var nodes = cljs.core.get.call(null,map__1888761__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__1888761__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edges","edges",-694791395),cljs.core.map.call(null,((function (vec__1888760,map__1888761,map__1888761__$1,nodes,edges){
return (function (p__1888763){
var vec__1888764 = p__1888763;
var vec__1888765 = cljs.core.nth.call(null,vec__1888764,(0),null);
var _ = cljs.core.nth.call(null,vec__1888765,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__1888765,(1),null);
var nid1 = cljs.core.nth.call(null,vec__1888765,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__1888765,(3),null);
var cid1 = cljs.core.nth.call(null,vec__1888765,(4),null);
var vec__1888766 = cljs.core.nth.call(null,vec__1888764,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__1888766,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__1888766,(1),null);
var nid2 = cljs.core.nth.call(null,vec__1888766,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__1888766,(3),null);
var cid2 = cljs.core.nth.call(null,vec__1888766,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null);
});})(vec__1888760,map__1888761,map__1888761__$1,nodes,edges))
,edges),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes], null);
});
dynomics.space.core.insert_in = (function dynomics$space$core$insert_in(v,i,x){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.conj.call(null,cljs.core.subvec.call(null,v,(0),i),x),cljs.core.subvec.call(null,v,i)));
});

//# sourceMappingURL=core.js.map