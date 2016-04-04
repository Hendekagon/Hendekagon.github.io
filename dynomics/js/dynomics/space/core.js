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
var x__35723__auto__ = x;
var y__35724__auto__ = (-1);
return ((x__35723__auto__ > y__35724__auto__) ? x__35723__auto__ : y__35724__auto__);
} else {
var x__35730__auto__ = x;
var y__35731__auto__ = (1);
return ((x__35730__auto__ < y__35731__auto__) ? x__35730__auto__ : y__35731__auto__);
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
dynomics.space.core.angle = (function dynomics$space$core$angle(p__290322){
var vec__290328 = p__290322;
var x = cljs.core.nth.call(null,vec__290328,(0),null);
var y = cljs.core.nth.call(null,vec__290328,(1),null);
return Math.atan2(x,y);
});
dynomics.space.core.p2c = (function dynomics$space$core$p2c(p__290332){
var vec__290335 = p__290332;
var r = cljs.core.nth.call(null,vec__290335,(0),null);
var theta = cljs.core.nth.call(null,vec__290335,(1),null);
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,r),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.core.cos.call(null,theta),dynomics.space.core.sin.call(null,theta)], null));
});
dynomics.space.core.c_STAR_ = (function dynomics$space$core$c_STAR_(p__290341,p__290342){
var vec__290345 = p__290341;
var ar = cljs.core.nth.call(null,vec__290345,(0),null);
var ai = cljs.core.nth.call(null,vec__290345,(1),null);
var vec__290346 = p__290342;
var br = cljs.core.nth.call(null,vec__290346,(0),null);
var bi = cljs.core.nth.call(null,vec__290346,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((ar * br) - (ai * bi)),((ai * br) + (ar * bi))], null);
});
dynomics.space.core.c_PLUS_ = (function dynomics$space$core$c_PLUS_(a,b){
return cljs.core.map.call(null,cljs.core._PLUS_,a,b);
});
dynomics.space.core.twin = (function dynomics$space$core$twin(id,n){
return cljs.core.mod.call(null,(id + (n / (2))),n);
});
dynomics.space.core.midpoints = (function dynomics$space$core$midpoints(points){
return cljs.core.map.call(null,(function (p__290352){
var vec__290353 = p__290352;
var p1 = cljs.core.nth.call(null,vec__290353,(0),null);
var p2 = cljs.core.nth.call(null,vec__290353,(1),null);
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,0.5),cljs.core.map.call(null,cljs.core._PLUS_,p1,p2));
}),cljs.core.partition.call(null,(2),(1),points));
});
dynomics.space.core.move_along = (function dynomics$space$core$move_along(s,p1,p2){
var v = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,s),cljs.core.map.call(null,cljs.core._,p1,p2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,v,p2)),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._,p1,v))], null);
});
dynomics.space.core.dot = (function dynomics$space$core$dot(var_args){
var args__36468__auto__ = [];
var len__36461__auto___290360 = arguments.length;
var i__36462__auto___290361 = (0);
while(true){
if((i__36462__auto___290361 < len__36461__auto___290360)){
args__36468__auto__.push((arguments[i__36462__auto___290361]));

var G__290362 = (i__36462__auto___290361 + (1));
i__36462__auto___290361 = G__290362;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((0) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((0)),(0),null)):null);
return dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic(argseq__36469__auto__);
});

dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic = (function (x){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.apply.call(null,cljs.core.map,cljs.core._STAR_,x));
});

dynomics.space.core.dot.cljs$lang$maxFixedArity = (0);

dynomics.space.core.dot.cljs$lang$applyTo = (function (seq290359){
return dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq290359));
});
dynomics.space.core.sqrd = (function dynomics$space$core$sqrd(var_args){
var args290363 = [];
var len__36461__auto___290377 = arguments.length;
var i__36462__auto___290379 = (0);
while(true){
if((i__36462__auto___290379 < len__36461__auto___290377)){
args290363.push((arguments[i__36462__auto___290379]));

var G__290381 = (i__36462__auto___290379 + (1));
i__36462__auto___290379 = G__290381;
continue;
} else {
}
break;
}

var G__290371 = args290363.length;
switch (G__290371) {
case 2:
return dynomics.space.core.sqrd.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dynomics.space.core.sqrd.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args290363.length)].join('')));

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
var args290389 = [];
var len__36461__auto___290422 = arguments.length;
var i__36462__auto___290423 = (0);
while(true){
if((i__36462__auto___290423 < len__36461__auto___290422)){
args290389.push((arguments[i__36462__auto___290423]));

var G__290425 = (i__36462__auto___290423 + (1));
i__36462__auto___290423 = G__290425;
continue;
} else {
}
break;
}

var G__290401 = args290389.length;
switch (G__290401) {
case 3:
return dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args290389.length)].join('')));

}
});

dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$3 = (function (p__290403,path,p__290404){
var vec__290405 = p__290403;
var x = cljs.core.nth.call(null,vec__290405,(0),null);
var y = cljs.core.nth.call(null,vec__290405,(1),null);
var map__290406 = p__290404;
var map__290406__$1 = ((((!((map__290406 == null)))?((((map__290406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290406):map__290406);
var space = map__290406__$1;
var scale = cljs.core.get.call(null,map__290406__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var vec__290411 = path;
var _ = cljs.core.nth.call(null,vec__290411,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__290411,(1),null);
var nid = cljs.core.nth.call(null,vec__290411,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__290411,(3),null);
var cid = cljs.core.nth.call(null,vec__290411,(4),null);
var vec__290412 = cljs.core.get_in.call(null,space,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx = cljs.core.nth.call(null,vec__290412,(0),null);
var ny = cljs.core.nth.call(null,vec__290412,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - nx),(y - ny)], null)], null)], null);
});

dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$2 = (function (p__290415,scale){
var vec__290416 = p__290415;
var vec__290417 = cljs.core.nth.call(null,vec__290416,(0),null);
var x = cljs.core.nth.call(null,vec__290417,(0),null);
var y = cljs.core.nth.call(null,vec__290417,(1),null);
var vec__290418 = cljs.core.nth.call(null,vec__290416,(1),null);
var nx = cljs.core.nth.call(null,vec__290418,(0),null);
var ny = cljs.core.nth.call(null,vec__290418,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - nx),(y - ny)], null);
});

dynomics.space.core.to_space.cljs$lang$maxFixedArity = 3;
dynomics.space.core.to_local = (function dynomics$space$core$to_local(scale,p__290456,p__290457){
var vec__290461 = p__290456;
var x = cljs.core.nth.call(null,vec__290461,(0),null);
var y = cljs.core.nth.call(null,vec__290461,(1),null);
var vec__290462 = p__290457;
var lx = cljs.core.nth.call(null,vec__290462,(0),null);
var ly = cljs.core.nth.call(null,vec__290462,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(scale * (x - lx)),(scale * (y - ly))], null);
});
/**
 * Returns the pair of control points with
 *   mirrored positions for the given control point
 */
dynomics.space.core.mirror_node = (function dynomics$space$core$mirror_node(p__290465,path,p__290466){
var vec__290475 = p__290465;
var x = cljs.core.nth.call(null,vec__290475,(0),null);
var y = cljs.core.nth.call(null,vec__290475,(1),null);
var map__290476 = p__290466;
var map__290476__$1 = ((((!((map__290476 == null)))?((((map__290476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290476):map__290476);
var space = map__290476__$1;
var nodes = cljs.core.get.call(null,map__290476__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var node_scale = cljs.core.get.call(null,map__290476__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var vec__290481 = path;
var _ = cljs.core.nth.call(null,vec__290481,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__290481,(1),null);
var nid = cljs.core.nth.call(null,vec__290481,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__290481,(3),null);
var cid = cljs.core.nth.call(null,vec__290481,(4),null);
var nc = cljs.core.count.call(null,cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"connections","connections",-2064090887)], null)));
var cp = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.mod.call(null,(cid + (0.5 * nc)),nc)], null);
var vec__290482 = cljs.core.get_in.call(null,space,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx = cljs.core.nth.call(null,vec__290482,(0),null);
var ny = cljs.core.nth.call(null,vec__290482,(1),null);
var p = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - nx),(y - ny)], null);
var x__$1 = ((cljs.core.odd_QMARK_.call(null,cid))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp,dynomics.space.core.c_STAR_.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))], null)], null);
});
dynomics.space.core.node_types = cljs.core.zipmap.call(null,cljs.core.range.call(null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"stable","stable",-508724660),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attractor","attractor",-2094244336),new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(3)], true, false)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"unstable","unstable",-1893110769),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"repellor","repellor",1657227785),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1)], true, false)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"unstable","unstable",-1893110769),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"saddle","saddle",1716877074),new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(2)], true, false)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"unstable","unstable",-1893110769),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"saddle","saddle",1716877074),new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(0)], true, false)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"unstable","unstable",-1893110769),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"saddle","saddle",1716877074),new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(3)], true, false)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"unstable","unstable",-1893110769),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"saddle","saddle",1716877074),new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1)], true, false)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"unstable","unstable",-1893110769),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spiral","spiral",-1966897057),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"anticlockwise","anticlockwise",1042131704),new cljs.core.Keyword(null,"id","id",-1388402092),(6),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(2)], true, false)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"unstable","unstable",-1893110769),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spiral","spiral",-1966897057),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918),new cljs.core.Keyword(null,"id","id",-1388402092),(7),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(0)], true, false)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"stable","stable",-508724660),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spiral","spiral",-1966897057),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"anticlockwise","anticlockwise",1042131704),new cljs.core.Keyword(null,"id","id",-1388402092),(8),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(2)], true, false)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stability","stability",1733225509),new cljs.core.Keyword(null,"stable","stable",-508724660),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spiral","spiral",-1966897057),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918),new cljs.core.Keyword(null,"id","id",-1388402092),(9),new cljs.core.Keyword(null,"octants","octants",-1576065531),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(-1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1)], true, false),new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(0)], true, false)], null)], null));
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
dynomics.space.core.quadrants_types_by_position = (function dynomics$space$core$quadrants_types_by_position(p__290573){
var map__290581 = p__290573;
var map__290581__$1 = ((((!((map__290581 == null)))?((((map__290581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290581):map__290581);
var r1 = cljs.core.get.call(null,map__290581__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var p1 = cljs.core.get.call(null,map__290581__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.map.call(null,((function (map__290581,map__290581__$1,r1,p1){
return (function (i){
return cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295)], null));
});})(map__290581,map__290581__$1,r1,p1))
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
dynomics.space.core.default_connections = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__290626){
var vec__290627 = p__290626;
var p = cljs.core.nth.call(null,vec__290627,(0),null);
var id = cljs.core.nth.call(null,vec__290627,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,0.025),p),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connection","connection",-123599300)], null);
}),dynomics.space.core.connections_by_vector));
/**
 * Returns a node of the given type
 */
dynomics.space.core.make_intersection_node = (function dynomics$space$core$make_intersection_node(var_args){
var args290631 = [];
var len__36461__auto___290641 = arguments.length;
var i__36462__auto___290642 = (0);
while(true){
if((i__36462__auto___290642 < len__36461__auto___290641)){
args290631.push((arguments[i__36462__auto___290642]));

var G__290646 = (i__36462__auto___290642 + (1));
i__36462__auto___290642 = G__290646;
continue;
} else {
}
break;
}

var G__290638 = args290631.length;
switch (G__290638) {
case 1:
return dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args290631.length)].join('')));

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
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p__290658){
var vec__290659 = p__290658;
var _ = cljs.core.nth.call(null,vec__290659,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__290659,(1),null);
var id = cljs.core.nth.call(null,vec__290659,(2),null);
return id;
}),nodes));
});
dynomics.space.core.quadrant_info = (function dynomics$space$core$quadrant_info(nodes,p__290665){
var vec__290669 = p__290665;
var _ = cljs.core.nth.call(null,vec__290669,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__290669,(1),null);
var nid = cljs.core.nth.call(null,vec__290669,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__290669,(3),null);
var cid = cljs.core.nth.call(null,vec__290669,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node-type","node-type",129492462),cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"node-type","node-type",129492462)], null)),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid,new cljs.core.Keyword(null,"position","position",-2011731912)], null))], null);
});
/**
 * 
 *   Returns the given state with a map of node-node compatibilities added,
 *   of the form {[nodeid1 nodeid2] true [nodeid4 nodeid5] false}
 *   
 */
dynomics.space.core.add_compatibility_info = (function dynomics$space$core$add_compatibility_info(p__290683){
var map__290694 = p__290683;
var map__290694__$1 = ((((!((map__290694 == null)))?((((map__290694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290694):map__290694);
var state = map__290694__$1;
var map__290695 = cljs.core.get.call(null,map__290694__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__290695__$1 = ((((!((map__290695 == null)))?((((map__290695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290695):map__290695);
var nodes = cljs.core.get.call(null,map__290695__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__290695__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
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
dynomics.space.core.add_connections_by_node = (function dynomics$space$core$add_connections_by_node(p__290715){
var map__290731 = p__290715;
var map__290731__$1 = ((((!((map__290731 == null)))?((((map__290731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290731):map__290731);
var state = map__290731__$1;
var map__290732 = cljs.core.get.call(null,map__290731__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__290732__$1 = ((((!((map__290732 == null)))?((((map__290732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290732):map__290732);
var nodes = cljs.core.get.call(null,map__290732__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__290732__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var graph = cljs.core.get.call(null,map__290732__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
cljs.core.println.call(null,"  acbn nodes ",cljs.core.count.call(null,loom.graph.nodes.call(null,graph)));

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"connections-by-node","connections-by-node",517626909)], null),cljs.core.zipmap.call(null,cljs.core.keys.call(null,nodes),cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.connections_of_node,graph,edges),cljs.core.keys.call(null,nodes))));
});
/**
 * Following a node-type change, update the
 *   compatibility info for its connections
 */
dynomics.space.core.update_compatibility_info = (function dynomics$space$core$update_compatibility_info(var_args){
var args290770 = [];
var len__36461__auto___290801 = arguments.length;
var i__36462__auto___290802 = (0);
while(true){
if((i__36462__auto___290802 < len__36461__auto___290801)){
args290770.push((arguments[i__36462__auto___290802]));

var G__290804 = (i__36462__auto___290802 + (1));
i__36462__auto___290802 = G__290804;
continue;
} else {
}
break;
}

var G__290779 = args290770.length;
switch (G__290779) {
case 1:
return dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args290770.length)].join('')));

}
});

dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$1 = (function (p__290785){
var map__290786 = p__290785;
var map__290786__$1 = ((((!((map__290786 == null)))?((((map__290786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290786):map__290786);
var state = map__290786__$1;
var map__290787 = cljs.core.get.call(null,map__290786__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__290787__$1 = ((((!((map__290787 == null)))?((((map__290787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290787):map__290787);
var selected_nodes = cljs.core.get.call(null,map__290787__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,dynomics.space.core.update_compatibility_info,state,dynomics.space.core.just_ids.call(null,selected_nodes));
});

dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$2 = (function (p__290794,id){
var map__290795 = p__290794;
var map__290795__$1 = ((((!((map__290795 == null)))?((((map__290795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290795):map__290795);
var state = map__290795__$1;
var map__290796 = cljs.core.get.call(null,map__290795__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__290796__$1 = ((((!((map__290796 == null)))?((((map__290796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290796):map__290796);
var graph = cljs.core.get.call(null,map__290796__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var edges = cljs.core.get.call(null,map__290796__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var nodes = cljs.core.get.call(null,map__290796__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return cljs.core.reduce.call(null,((function (map__290795,map__290795__$1,state,map__290796,map__290796__$1,graph,edges,nodes){
return (function (s,edge){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024),dynomics.space.core.just_ids.call(null,edge)], null),dynomics.space.core.compare_quadrants.call(null,cljs.core.map.call(null,dynomics.space.core.quadrants_types_by_position,cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.quadrant_info,nodes),edge))));
});})(map__290795,map__290795__$1,state,map__290796,map__290796__$1,graph,edges,nodes))
,state,dynomics.space.core.connections_of_node.call(null,graph,edges,id));
});

dynomics.space.core.update_compatibility_info.cljs$lang$maxFixedArity = 2;
dynomics.space.core.make_new_id = (function dynomics$space$core$make_new_id(var_args){
var args290835 = [];
var len__36461__auto___290844 = arguments.length;
var i__36462__auto___290847 = (0);
while(true){
if((i__36462__auto___290847 < len__36461__auto___290844)){
args290835.push((arguments[i__36462__auto___290847]));

var G__290850 = (i__36462__auto___290847 + (1));
i__36462__auto___290847 = G__290850;
continue;
} else {
}
break;
}

var G__290841 = args290835.length;
switch (G__290841) {
case 1:
return dynomics.space.core.make_new_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.make_new_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args290835.length)].join('')));

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
var args290856 = [];
var len__36461__auto___290898 = arguments.length;
var i__36462__auto___290899 = (0);
while(true){
if((i__36462__auto___290899 < len__36461__auto___290898)){
args290856.push((arguments[i__36462__auto___290899]));

var G__290900 = (i__36462__auto___290899 + (1));
i__36462__auto___290899 = G__290900;
continue;
} else {
}
break;
}

var G__290864 = args290856.length;
switch (G__290864) {
case 1:
return dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args290856.length)].join('')));

}
});

dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$1 = (function (p__290869){
var map__290870 = p__290869;
var map__290870__$1 = ((((!((map__290870 == null)))?((((map__290870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290870):map__290870);
var state = map__290870__$1;
var map__290871 = cljs.core.get.call(null,map__290870__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__290871__$1 = ((((!((map__290871 == null)))?((((map__290871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290871):map__290871);
var nodes = cljs.core.get.call(null,map__290871__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var max_node_id = cljs.core.get.call(null,map__290871__$1,new cljs.core.Keyword(null,"max-node-id","max-node-id",-75074557));
var p = cljs.core.get.call(null,map__290870__$1,new cljs.core.Keyword(null,"node-position","node-position",-542959703));
var node_type = cljs.core.get.call(null,map__290870__$1,new cljs.core.Keyword(null,"selected-node-type","selected-node-type",-1717725489));
return dynomics.space.core.add_node.call(null,state,cljs.core.assoc.call(null,dynomics.space.core.make_intersection_node.call(null,(function (){var or__35392__auto__ = node_type;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return (3);
}
})()),new cljs.core.Keyword(null,"position","position",-2011731912),p));
});

dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$2 = (function (p__290886,p__290887){
var map__290888 = p__290886;
var map__290888__$1 = ((((!((map__290888 == null)))?((((map__290888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290888):map__290888);
var state = map__290888__$1;
var map__290889 = cljs.core.get.call(null,map__290888__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__290889__$1 = ((((!((map__290889 == null)))?((((map__290889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290889):map__290889);
var nodes = cljs.core.get.call(null,map__290889__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var max_node_id = cljs.core.get.call(null,map__290889__$1,new cljs.core.Keyword(null,"max-node-id","max-node-id",-75074557));
var selected_nodes = cljs.core.get.call(null,map__290889__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__290890 = p__290887;
var map__290890__$1 = ((((!((map__290890 == null)))?((((map__290890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290890):map__290890);
var new_node = map__290890__$1;
var new_id = cljs.core.get.call(null,map__290890__$1,new cljs.core.Keyword(null,"id","id",-1388402092),dynomics.space.core.make_new_id.call(null,nodes,max_node_id));
cljs.core.println.call(null,new_id,new_node);

return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new_id], null),cljs.core.assoc.call(null,new_node,new cljs.core.Keyword(null,"id","id",-1388402092),new_id)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__290888,map__290888__$1,state,map__290889,map__290889__$1,nodes,max_node_id,selected_nodes,map__290890,map__290890__$1,new_node,new_id){
return (function (g){
return loom.graph.add_nodes.call(null,g,new_id);
});})(map__290888,map__290888__$1,state,map__290889,map__290889__$1,nodes,max_node_id,selected_nodes,map__290890,map__290890__$1,new_node,new_id))
),new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673),new_id);
});

dynomics.space.core.add_node.cljs$lang$maxFixedArity = 2;
dynomics.space.core.add_point = (function dynomics$space$core$add_point(p__290988){
var map__290996 = p__290988;
var map__290996__$1 = ((((!((map__290996 == null)))?((((map__290996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290996):map__290996);
var s = map__290996__$1;
var p = cljs.core.get.call(null,map__290996__$1,new cljs.core.Keyword(null,"node-position","node-position",-542959703));
return dynomics.space.core.add_node.call(null,s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.Keyword(null,"position","position",-2011731912),p,new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__290996,map__290996__$1,s,p){
return (function (p1__290985_SHARP_,p2__290986_SHARP_){
return cljs.core.assoc.call(null,p1__290985_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),p2__290986_SHARP_);
});})(map__290996,map__290996__$1,s,p))
,cljs.core.map.call(null,dynomics.space.core.default_connections,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)))], null));
});
dynomics.space.core.deselect_all = (function dynomics$space$core$deselect_all(state){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493)], null),cljs.core.PersistentHashSet.EMPTY);
});
dynomics.space.core.deactivate_all = (function dynomics$space$core$deactivate_all(state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891)], null),cljs.core.PersistentHashSet.EMPTY);
});
/**
 * Returns the state with the given edges removed
 */
dynomics.space.core.remove_edges = (function dynomics$space$core$remove_edges(p__291016){
var map__291063 = p__291016;
var map__291063__$1 = ((((!((map__291063 == null)))?((((map__291063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291063):map__291063);
var state = map__291063__$1;
var map__291064 = cljs.core.get.call(null,map__291063__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__291064__$1 = ((((!((map__291064 == null)))?((((map__291064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291064):map__291064);
var selected_nodes = cljs.core.get.call(null,map__291064__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),((function (map__291063,map__291063__$1,state,map__291064,map__291064__$1,selected_nodes){
return (function (edges){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,((function (map__291063,map__291063__$1,state,map__291064,map__291064__$1,selected_nodes){
return (function (p__291068){
var vec__291069 = p__291068;
var vec__291070 = cljs.core.nth.call(null,vec__291069,(0),null);
var _ = cljs.core.nth.call(null,vec__291070,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__291070,(1),null);
var nid1 = cljs.core.nth.call(null,vec__291070,(2),null);
var ___$2 = cljs.core.nthnext.call(null,vec__291070,(3));
var vec__291071 = cljs.core.nth.call(null,vec__291069,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__291071,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__291071,(1),null);
var nid2 = cljs.core.nth.call(null,vec__291071,(2),null);
var ___$5 = cljs.core.nthnext.call(null,vec__291071,(3));
var or__35392__auto__ = selected_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid1], null));
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return selected_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid2], null));
}
});})(map__291063,map__291063__$1,state,map__291064,map__291064__$1,selected_nodes))
,edges));
});})(map__291063,map__291063__$1,state,map__291064,map__291064__$1,selected_nodes))
);
});
dynomics.space.core.add_graph = (function dynomics$space$core$add_graph(p__291101){
var map__291104 = p__291101;
var map__291104__$1 = ((((!((map__291104 == null)))?((((map__291104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291104):map__291104);
var space = map__291104__$1;
var edges = cljs.core.get.call(null,map__291104__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return cljs.core.assoc.call(null,space,new cljs.core.Keyword(null,"graph","graph",1558099509),cljs.core.apply.call(null,loom.graph.graph,dynomics.space.graph.simplify_edges.call(null,edges)));
});
dynomics.space.core.update_ds = (function dynomics$space$core$update_ds(p__291114){
var map__291117 = p__291114;
var map__291117__$1 = ((((!((map__291117 == null)))?((((map__291117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291117):map__291117);
var s = map__291117__$1;
var f = cljs.core.get.call(null,map__291117__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),((function (map__291117,map__291117__$1,s,f){
return (function (points){
return cljs.core.map.call(null,f,points);
});})(map__291117,map__291117__$1,s,f))
);
});
dynomics.space.core.random_points = (function dynomics$space$core$random_points(n){
return cljs.core.repeatedly.call(null,n,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.call(null),cljs.core.rand.call(null)], null);
}));
});
dynomics.space.core.make_ds = (function dynomics$space$core$make_ds(var_args){
var args291160 = [];
var len__36461__auto___291165 = arguments.length;
var i__36462__auto___291166 = (0);
while(true){
if((i__36462__auto___291166 < len__36461__auto___291165)){
args291160.push((arguments[i__36462__auto___291166]));

var G__291167 = (i__36462__auto___291166 + (1));
i__36462__auto___291166 = G__291167;
continue;
} else {
}
break;
}

var G__291163 = args291160.length;
switch (G__291163) {
case 0:
return dynomics.space.core.make_ds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.space.core.make_ds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args291160.length)].join('')));

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
var args291171 = [];
var len__36461__auto___291177 = arguments.length;
var i__36462__auto___291178 = (0);
while(true){
if((i__36462__auto___291178 < len__36461__auto___291177)){
args291171.push((arguments[i__36462__auto___291178]));

var G__291180 = (i__36462__auto___291178 + (1));
i__36462__auto___291178 = G__291180;
continue;
} else {
}
break;
}

var G__291174 = args291171.length;
switch (G__291174) {
case 3:
return dynomics.space.core.ds_evolution.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.space.core.ds_evolution.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args291171.length)].join('')));

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
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__291224){
var vec__291225 = p__291224;
var x = cljs.core.nth.call(null,vec__291225,(0),null);
var y = cljs.core.nth.call(null,vec__291225,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((-1) * x),y], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(-8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-8)], null)], null)], null));
});
dynomics.space.core.saddle_3 = (function dynomics$space$core$saddle_3(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__291239){
var vec__291240 = p__291239;
var x = cljs.core.nth.call(null,vec__291240,(0),null);
var y = cljs.core.nth.call(null,vec__291240,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((-1) * y)], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(-24)], null)], null)], null));
});
dynomics.space.core.saddle_4 = (function dynomics$space$core$saddle_4(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__291245){
var vec__291246 = p__291245;
var x = cljs.core.nth.call(null,vec__291246,(0),null);
var y = cljs.core.nth.call(null,vec__291246,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(-8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-24)], null)], null)], null));
});
dynomics.space.core.saddle_5 = (function dynomics$space$core$saddle_5(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__291249){
var vec__291250 = p__291249;
var x = cljs.core.nth.call(null,vec__291250,(0),null);
var y = cljs.core.nth.call(null,vec__291250,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.04,-0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(-8)], null)], null)], null));
});
dynomics.space.core.spiral = (function dynomics$space$core$spiral(var_args){
var args291255 = [];
var len__36461__auto___291269 = arguments.length;
var i__36462__auto___291270 = (0);
while(true){
if((i__36462__auto___291270 < len__36461__auto___291269)){
args291255.push((arguments[i__36462__auto___291270]));

var G__291272 = (i__36462__auto___291270 + (1));
i__36462__auto___291270 = G__291272;
continue;
} else {
}
break;
}

var G__291261 = args291255.length;
switch (G__291261) {
case 3:
return dynomics.space.core.spiral.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return dynomics.space.core.spiral.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return dynomics.space.core.spiral.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args291255.length)].join('')));

}
});

dynomics.space.core.spiral.cljs$core$IFn$_invoke$arity$3 = (function (samples,expansion,rotation){
return dynomics.space.core.spiral.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(1),samples,expansion,rotation);
});

dynomics.space.core.spiral.cljs$core$IFn$_invoke$arity$5 = (function (start,init_points,samples,expansion,rotation){
return dynomics.space.core.spiral.call(null,start,init_points,samples,expansion,rotation,(0));
});

dynomics.space.core.spiral.cljs$core$IFn$_invoke$arity$6 = (function (start,init_points,samples,expansion,rotation,phase){
return dynomics.space.core.ds_evolution.call(null,samples,cljs.core.assoc.call(null,dynomics.space.core.make_ds.call(null,dynomics.space.core.p2c.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expansion,rotation], null))),new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.first.call(null,dynomics.space.core.ds_evolution.call(null,init_points,cljs.core.assoc.call(null,dynomics.space.core.make_ds.call(null,dynomics.space.core.p2c.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(dynomics.space.core.PI2 / init_points)], null))),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.core.c_STAR_.call(null,start,dynomics.space.core.p2c.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),phase], null)))], null))))));
});

dynomics.space.core.spiral.cljs$lang$maxFixedArity = 6;
dynomics.space.core.make_space = (function dynomics$space$core$make_space(){
return dynomics.space.core.add_graph.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curve-types","curve-types",1650772099),new cljs.core.Keyword(null,"selected-space","selected-space",613834726),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493),new cljs.core.Keyword(null,"selected-edges","selected-edges",1789211954),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"connections-by-node","connections-by-node",517626909),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"curves","curves",-510805378)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,0.08,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY]));
});
/**
 * Returns the given state with any connections that need to be
 *   made added to the edges map. Only connect nodes if there are two
 *   selected. Note that the connection is undirected
 */
dynomics.space.core.connect_pair = (function dynomics$space$core$connect_pair(p__291344){
var map__291351 = p__291344;
var map__291351__$1 = ((((!((map__291351 == null)))?((((map__291351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291351):map__291351);
var state = map__291351__$1;
var map__291352 = cljs.core.get.call(null,map__291351__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__291352__$1 = ((((!((map__291352 == null)))?((((map__291352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291352):map__291352);
var nodes = cljs.core.get.call(null,map__291352__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__291352__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Connect ",selected_nodes);

if(((2) === cljs.core.count.call(null,selected_nodes))){
return dynomics.space.core.add_connections_by_node.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,dynomics.space.core.add_compatibility_info.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),cljs.core.conj,cljs.core.vec.call(null,selected_nodes)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__291351,map__291351__$1,state,map__291352,map__291352__$1,nodes,selected_nodes){
return (function (g){
return loom.graph.add_edges.call(null,g,cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__291351,map__291351__$1,state,map__291352,map__291352__$1,nodes,selected_nodes){
return (function (p__291355){
var vec__291356 = p__291355;
var _ = cljs.core.nth.call(null,vec__291356,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__291356,(1),null);
var nid = cljs.core.nth.call(null,vec__291356,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__291356,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__291356,(4),null);
return nid;
});})(map__291351,map__291351__$1,state,map__291352,map__291352__$1,nodes,selected_nodes))
,selected_nodes)));
});})(map__291351,map__291351__$1,state,map__291352,map__291352__$1,nodes,selected_nodes))
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
return (function (p__291374){
var map__291375 = p__291374;
var map__291375__$1 = ((((!((map__291375 == null)))?((((map__291375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291375):map__291375);
var state = map__291375__$1;
var map__291376 = cljs.core.get.call(null,map__291375__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__291376__$1 = ((((!((map__291376 == null)))?((((map__291376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291376):map__291376);
var selected_nodes = cljs.core.get.call(null,map__291376__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Set node type of ",selected_nodes," to ",id);

var r = dynomics.space.core.update_compatibility_info.call(null,cljs.core.assoc.call(null,cljs.core.reduce.call(null,((function (map__291375,map__291375__$1,state,map__291376,map__291376__$1,selected_nodes){
return (function (r,path){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,r,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"node-type","node-type",129492462)),id),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"intersection","intersection",2003891010));
});})(map__291375,map__291375__$1,state,map__291376,map__291376__$1,selected_nodes))
,state,selected_nodes),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Node type"),cljs.core.str(id)].join('')], null)));
return r;
});
});
dynomics.space.core.simplify_connection = (function dynomics$space$core$simplify_connection(p__291383){
var vec__291385 = p__291383;
var _ = cljs.core.nth.call(null,vec__291385,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__291385,(1),null);
var nid = cljs.core.nth.call(null,vec__291385,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__291385,(3),null);
var cid = cljs.core.nth.call(null,vec__291385,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,cid], null);
});
dynomics.space.core.simplify_connections = (function dynomics$space$core$simplify_connections(p__291394){
var vec__291403 = p__291394;
var map__291404 = cljs.core.nth.call(null,vec__291403,(0),null);
var map__291404__$1 = ((((!((map__291404 == null)))?((((map__291404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291404):map__291404);
var nodes = cljs.core.get.call(null,map__291404__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__291404__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edges","edges",-694791395),cljs.core.map.call(null,((function (vec__291403,map__291404,map__291404__$1,nodes,edges){
return (function (p__291406){
var vec__291407 = p__291406;
var vec__291408 = cljs.core.nth.call(null,vec__291407,(0),null);
var _ = cljs.core.nth.call(null,vec__291408,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__291408,(1),null);
var nid1 = cljs.core.nth.call(null,vec__291408,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__291408,(3),null);
var cid1 = cljs.core.nth.call(null,vec__291408,(4),null);
var vec__291409 = cljs.core.nth.call(null,vec__291407,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__291409,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__291409,(1),null);
var nid2 = cljs.core.nth.call(null,vec__291409,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__291409,(3),null);
var cid2 = cljs.core.nth.call(null,vec__291409,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null);
});})(vec__291403,map__291404,map__291404__$1,nodes,edges))
,edges),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes], null);
});
dynomics.space.core.insert_in = (function dynomics$space$core$insert_in(v,i,x){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.conj.call(null,cljs.core.subvec.call(null,v,(0),i),x),cljs.core.subvec.call(null,v,i)));
});
dynomics.space.core.with_compatibilities = (function dynomics$space$core$with_compatibilities(p__291416,compatibilities){
var map__291425 = p__291416;
var map__291425__$1 = ((((!((map__291425 == null)))?((((map__291425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291425):map__291425);
var e = map__291425__$1;
var vec__291430 = cljs.core.get.call(null,map__291425__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__291431 = cljs.core.nth.call(null,vec__291430,(0),null);
var nid1 = cljs.core.nth.call(null,vec__291431,(0),null);
var nid2 = cljs.core.nth.call(null,vec__291431,(1),null);
var _ = cljs.core.nthnext.call(null,vec__291430,(1));
return cljs.core.assoc.call(null,e,new cljs.core.Keyword(null,"compatible?","compatible?",923422575),compatibilities.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null)));
});
dynomics.space.core.edge_points = (function dynomics$space$core$edge_points(nodes,p__291455){
var vec__291468 = p__291455;
var vec__291469 = cljs.core.nth.call(null,vec__291468,(0),null);
var _ = cljs.core.nth.call(null,vec__291469,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__291469,(1),null);
var nid1 = cljs.core.nth.call(null,vec__291469,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__291469,(3),null);
var cid1 = cljs.core.nth.call(null,vec__291469,(4),null);
var vec__291470 = cljs.core.nth.call(null,vec__291468,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__291470,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__291470,(1),null);
var nid2 = cljs.core.nth.call(null,vec__291470,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__291470,(3),null);
var cid2 = cljs.core.nth.call(null,vec__291470,(4),null);
var vec__291473 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__291473,(0),null);
var ny1 = cljs.core.nth.call(null,vec__291473,(1),null);
var vec__291474 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx2 = cljs.core.nth.call(null,vec__291474,(0),null);
var ny2 = cljs.core.nth.call(null,vec__291474,(1),null);
var vec__291475 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__291475,(0),null);
var cy1 = cljs.core.nth.call(null,vec__291475,(1),null);
var vec__291476 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid2,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx2 = cljs.core.nth.call(null,vec__291476,(0),null);
var cy2 = cljs.core.nth.call(null,vec__291476,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx2,ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx1,cx2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cy1,cy2], null)], null),new cljs.core.Keyword(null,"connections","connections",-2064090887),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,cid1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,cid2], null)], null)], null);
});
dynomics.space.core.make_open_regions = (function dynomics$space$core$make_open_regions(node_scale,p__291501){
var vec__291530 = p__291501;
var node_id = cljs.core.nth.call(null,vec__291530,(0),null);
var node_type = cljs.core.nth.call(null,vec__291530,(1),null);
var edge_pairs = cljs.core.nth.call(null,vec__291530,(2),null);
cljs.core.println.call(null,"   >>> ",node_id,cljs.core.count.call(null,edge_pairs));

return cljs.core.map.call(null,((function (vec__291530,node_id,node_type,edge_pairs){
return (function (edge_pair){
var vec__291531 = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"connections","connections",-2064090887),edge_pair);
var _ = cljs.core.nth.call(null,vec__291531,(0),null);
var vec__291532 = cljs.core.nth.call(null,vec__291531,(1),null);
var nid1 = cljs.core.nth.call(null,vec__291532,(0),null);
var x = cljs.core.nth.call(null,vec__291532,(1),null);
var vec__291533 = cljs.core.nth.call(null,vec__291531,(2),null);
var nid2 = cljs.core.nth.call(null,vec__291533,(0),null);
var y = cljs.core.nth.call(null,vec__291533,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__291531,(3),null);
var xy = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var qv = dynomics.space.core.quadrant_vectors_by_connectors.call(null,xy);
var qt = dynomics.space.core.quadrant_types_by_connector_pair.call(null,node_type,qv);
cljs.core.println.call(null,"       > ",node_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null),xy,qt,qv);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node-id","node-id",779482292),node_id,new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370),qt,new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631),qv,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.mapcat.call(null,((function (vec__291531,_,vec__291532,nid1,x,vec__291533,nid2,y,___$1,xy,qv,qt,vec__291530,node_id,node_type,edge_pairs){
return (function (p__291535){
var map__291536 = p__291535;
var map__291536__$1 = ((((!((map__291536 == null)))?((((map__291536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291536):map__291536);
var vec__291537 = cljs.core.get.call(null,map__291536__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__291538 = cljs.core.nth.call(null,vec__291537,(0),null);
var nid1__$1 = cljs.core.nth.call(null,vec__291538,(0),null);
var nid2__$1 = cljs.core.nth.call(null,vec__291538,(1),null);
var vec__291539 = cljs.core.nth.call(null,vec__291537,(1),null);
var nx1 = cljs.core.nth.call(null,vec__291539,(0),null);
var ny1 = cljs.core.nth.call(null,vec__291539,(1),null);
var vec__291540 = cljs.core.nth.call(null,vec__291537,(2),null);
var nx2 = cljs.core.nth.call(null,vec__291540,(0),null);
var ny2 = cljs.core.nth.call(null,vec__291540,(1),null);
var vec__291541 = cljs.core.nth.call(null,vec__291537,(3),null);
var cx1 = cljs.core.nth.call(null,vec__291541,(0),null);
var cx2 = cljs.core.nth.call(null,vec__291541,(1),null);
var vec__291542 = cljs.core.nth.call(null,vec__291537,(4),null);
var cy1 = cljs.core.nth.call(null,vec__291542,(0),null);
var cy2 = cljs.core.nth.call(null,vec__291542,(1),null);
var cnx = cljs.core.get.call(null,map__291536__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return cljs.core.map.call(null,dynomics.ui.svg.make_bezier_point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx2,ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx2 + (node_scale * cx2)),(ny2 + (node_scale * cy2))], null)], null)], null));
});})(vec__291531,_,vec__291532,nid1,x,vec__291533,nid2,y,___$1,xy,qv,qt,vec__291530,node_id,node_type,edge_pairs))
,edge_pair)], null);
});})(vec__291530,node_id,node_type,edge_pairs))
,edge_pairs);
});
dynomics.space.core.reverse_edge = (function dynomics$space$core$reverse_edge(p__291587){
var map__291600 = p__291587;
var map__291600__$1 = ((((!((map__291600 == null)))?((((map__291600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291600):map__291600);
var vec__291601 = cljs.core.get.call(null,map__291600__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var ids = cljs.core.nth.call(null,vec__291601,(0),null);
var p1 = cljs.core.nth.call(null,vec__291601,(1),null);
var p2 = cljs.core.nth.call(null,vec__291601,(2),null);
var cx = cljs.core.nth.call(null,vec__291601,(3),null);
var cy = cljs.core.nth.call(null,vec__291601,(4),null);
var c = cljs.core.get.call(null,map__291600__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reverse.call(null,ids),p2,p1,cljs.core.reverse.call(null,cx),cljs.core.reverse.call(null,cy)], null),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.reverse.call(null,c)], null);
});
dynomics.space.core.edge_pairs_by_node = (function dynomics$space$core$edge_pairs_by_node(p__291628){
var map__291650 = p__291628;
var map__291650__$1 = ((((!((map__291650 == null)))?((((map__291650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291650):map__291650);
var nodes = cljs.core.get.call(null,map__291650__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var connections_by_node = cljs.core.get.call(null,map__291650__$1,new cljs.core.Keyword(null,"connections-by-node","connections-by-node",517626909));
var node_scale = cljs.core.get.call(null,map__291650__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"cbn",connections_by_node);

return cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.empty_QMARK_,cljs.core.last),cljs.core.map.call(null,((function (map__291650,map__291650__$1,nodes,connections_by_node,node_scale){
return (function (p__291655){
var vec__291656 = p__291655;
var id = cljs.core.nth.call(null,vec__291656,(0),null);
var connections = cljs.core.nth.call(null,vec__291656,(1),null);
cljs.core.println.call(null," possible quadrants for node ",id,cljs.core.count.call(null,connections));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"node-type","node-type",129492462)], null)),cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.comp.call(null,dynomics.space.core.reverse_edge,cljs.core.first),cljs.core.last),cljs.core.filter.call(null,((function (vec__291656,id,connections,map__291650,map__291650__$1,nodes,connections_by_node,node_scale){
return (function (p__291661){
var vec__291662 = p__291661;
var map__291663 = cljs.core.nth.call(null,vec__291662,(0),null);
var map__291663__$1 = ((((!((map__291663 == null)))?((((map__291663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291663):map__291663);
var vec__291664 = cljs.core.get.call(null,map__291663__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var vec__291665 = cljs.core.nth.call(null,vec__291664,(0),null);
var _ = cljs.core.nth.call(null,vec__291665,(0),null);
var a = cljs.core.nth.call(null,vec__291665,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__291664,(1),null);
var map__291666 = cljs.core.nth.call(null,vec__291662,(1),null);
var map__291666__$1 = ((((!((map__291666 == null)))?((((map__291666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291666):map__291666);
var vec__291667 = cljs.core.get.call(null,map__291666__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var vec__291668 = cljs.core.nth.call(null,vec__291667,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__291668,(0),null);
var b = cljs.core.nth.call(null,vec__291668,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__291667,(1),null);
return !(((2) === dynomics.space.core.abs.call(null,(a - b))));
});})(vec__291656,id,connections,map__291650,map__291650__$1,nodes,connections_by_node,node_scale))
,cljs.core.take.call(null,cljs.core.count.call(null,connections),cljs.core.partition.call(null,(2),(1),cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.edge_points,nodes),cljs.core.cycle.call(null,connections))))))], null);
});})(map__291650,map__291650__$1,nodes,connections_by_node,node_scale))
,cljs.core.filter.call(null,((function (map__291650,map__291650__$1,nodes,connections_by_node,node_scale){
return (function (p__291681){
var vec__291682 = p__291681;
var k = cljs.core.nth.call(null,vec__291682,(0),null);
var v = cljs.core.nth.call(null,vec__291682,(1),null);
return (cljs.core.count.call(null,v) > (1));
});})(map__291650,map__291650__$1,nodes,connections_by_node,node_scale))
,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.comp.call(null,connections_by_node,new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.vals.call(null,nodes)))));
});
dynomics.space.core.set_curve_type = (function dynomics$space$core$set_curve_type(type_id){
return (function (p__291736){
var map__291741 = p__291736;
var map__291741__$1 = ((((!((map__291741 == null)))?((((map__291741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291741):map__291741);
var state = map__291741__$1;
var map__291742 = cljs.core.get.call(null,map__291741__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__291742__$1 = ((((!((map__291742 == null)))?((((map__291742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291742):map__291742);
var sc = cljs.core.get.call(null,map__291742__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
cljs.core.println.call(null,"set curve type",type_id,sc);

return cljs.core.reduce.call(null,((function (map__291741,map__291741__$1,state,map__291742,map__291742__$1,sc){
return (function (r,p__291748){
var vec__291749 = p__291748;
var _ = cljs.core.nth.call(null,vec__291749,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__291749,(1),null);
var curve_id = cljs.core.nth.call(null,vec__291749,(2),null);
return cljs.core.assoc_in.call(null,r,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curve-types","curve-types",1650772099),curve_id], null),type_id);
});})(map__291741,map__291741__$1,state,map__291742,map__291742__$1,sc))
,state,sc);
});
});
/**
 * Returns the given state with the map of which nodes
 *   belong to which curves updated with the curve of the
 *   given curve-id
 */
dynomics.space.core.update_curves_by_node = (function dynomics$space$core$update_curves_by_node(var_args){
var args291768 = [];
var len__36461__auto___291779 = arguments.length;
var i__36462__auto___291780 = (0);
while(true){
if((i__36462__auto___291780 < len__36461__auto___291779)){
args291768.push((arguments[i__36462__auto___291780]));

var G__291781 = (i__36462__auto___291780 + (1));
i__36462__auto___291780 = G__291781;
continue;
} else {
}
break;
}

var G__291772 = args291768.length;
switch (G__291772) {
case 2:
return dynomics.space.core.update_curves_by_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dynomics.space.core.update_curves_by_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args291768.length)].join('')));

}
});

dynomics.space.core.update_curves_by_node.cljs$core$IFn$_invoke$arity$2 = (function (state,curve_id){
return dynomics.space.core.update_curves_by_node.call(null,state,cljs.core.map.call(null,cljs.core.first,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),curve_id], null))),curve_id);
});

dynomics.space.core.update_curves_by_node.cljs$core$IFn$_invoke$arity$3 = (function (state,node_ids,curve_id){
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.update_in),state,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves-by-node","curves-by-node",217276582)], null)),node_ids),cljs.core.repeat.call(null,(function (cbn){
return cljs.core.conj.call(null,(function (){var or__35392__auto__ = cbn;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
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
dynomics.space.core.add_nodes_between_selected_nodes = (function dynomics$space$core$add_nodes_between_selected_nodes(p__291797){
var map__291809 = p__291797;
var map__291809__$1 = ((((!((map__291809 == null)))?((((map__291809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291809):map__291809);
var state = map__291809__$1;
var map__291810 = cljs.core.get.call(null,map__291809__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__291810__$1 = ((((!((map__291810 == null)))?((((map__291810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291810):map__291810);
var curves = cljs.core.get.call(null,map__291810__$1,new cljs.core.Keyword(null,"curves","curves",-510805378));
var curves_by_node = cljs.core.get.call(null,map__291810__$1,new cljs.core.Keyword(null,"curves-by-node","curves-by-node",217276582));
var selected_nodes = cljs.core.get.call(null,map__291810__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
if(((2) === cljs.core.count.call(null,selected_nodes))){
var vec__291816 = selected_nodes;
var vec__291817 = cljs.core.nth.call(null,vec__291816,(0),null);
var _ = cljs.core.nth.call(null,vec__291817,(0),null);
var n1 = cljs.core.nth.call(null,vec__291817,(1),null);
var vec__291818 = cljs.core.nth.call(null,vec__291816,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__291818,(0),null);
var n2 = cljs.core.nth.call(null,vec__291818,(1),null);
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
return cljs.core.update_in.call(null,cljs.core.reduce.call(null,(function (r,p__291835){
var vec__291836 = p__291835;
var id = cljs.core.nth.call(null,vec__291836,(0),null);
var _ = cljs.core.nth.call(null,vec__291836,(1),null);
return cljs.core.update_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (vec__291836,id,_){
return (function (sn){
var path__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
if(cljs.core.truth_(sn.call(null,path__$1))){
return cljs.core.disj.call(null,sn,path__$1);
} else {
return cljs.core.conj.call(null,sn,path__$1);
}
});})(vec__291836,id,_))
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
return cljs.core.update_in.call(null,cljs.core.reduce.call(null,(function (r,p__291841){
var vec__291842 = p__291841;
var id = cljs.core.nth.call(null,vec__291842,(0),null);
var _ = cljs.core.nth.call(null,vec__291842,(1),null);
return cljs.core.update_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (vec__291842,id,_){
return (function (sn){
var path__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
return cljs.core.disj.call(null,sn,path__$1);
});})(vec__291842,id,_))
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
var args291843 = [];
var len__36461__auto___291866 = arguments.length;
var i__36462__auto___291867 = (0);
while(true){
if((i__36462__auto___291867 < len__36461__auto___291866)){
args291843.push((arguments[i__36462__auto___291867]));

var G__291868 = (i__36462__auto___291867 + (1));
i__36462__auto___291867 = G__291868;
continue;
} else {
}
break;
}

var G__291847 = args291843.length;
switch (G__291847) {
case 2:
return dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args291843.length)].join('')));

}
});

dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$2 = (function (state,points){
return dynomics.space.core.add_curve.call(null,state,points,dynomics.space.core.make_new_id.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378)], null))));
});

dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$3 = (function (p__291849,points,curve_id){
var map__291850 = p__291849;
var map__291850__$1 = ((((!((map__291850 == null)))?((((map__291850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291850):map__291850);
var state = map__291850__$1;
var map__291851 = cljs.core.get.call(null,map__291850__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__291851__$1 = ((((!((map__291851 == null)))?((((map__291851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291851):map__291851);
var scale = cljs.core.get.call(null,map__291851__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
return dynomics.space.core.update_curves_by_node.call(null,cljs.core.reduce.call(null,((function (map__291850,map__291850__$1,state,map__291851,map__291851__$1,scale){
return (function (r,p__291855){
var vec__291856 = p__291855;
var p = cljs.core.nth.call(null,vec__291856,(0),null);
var control_points = cljs.core.nth.call(null,vec__291856,(1),null);
var map__291857 = dynomics.space.core.add_node.call(null,r,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),p,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.vec.call(null,cljs.core.map.call(null,((function (vec__291856,p,control_points,map__291850,map__291850__$1,state,map__291851,map__291851__$1,scale){
return (function (q,i){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.map.call(null,cljs.core._,p,q),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"id","id",-1388402092),i], null);
});})(vec__291856,p,control_points,map__291850,map__291850__$1,state,map__291851,map__291851__$1,scale))
,control_points,cljs.core.range.call(null)))], null));
var map__291857__$1 = ((((!((map__291857 == null)))?((((map__291857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291857):map__291857);
var r__$1 = map__291857__$1;
var id = cljs.core.get.call(null,map__291857__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return cljs.core.update_in.call(null,r__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),curve_id], null),((function (map__291857,map__291857__$1,r__$1,id,vec__291856,p,control_points,map__291850,map__291850__$1,state,map__291851,map__291851__$1,scale){
return (function (curve){
return cljs.core.conj.call(null,(function (){var or__35392__auto__ = curve;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.vec.call(null,cljs.core.range.call(null,cljs.core.count.call(null,control_points)))], null));
});})(map__291857,map__291857__$1,r__$1,id,vec__291856,p,control_points,map__291850,map__291850__$1,state,map__291851,map__291851__$1,scale))
);
});})(map__291850,map__291850__$1,state,map__291851,map__291851__$1,scale))
,state,cljs.core.map.call(null,cljs.core.vector,dynomics.space.core.midpoints.call(null,points),cljs.core.map.call(null,((function (map__291850,map__291850__$1,state,map__291851,map__291851__$1,scale){
return (function (p__291862){
var vec__291863 = p__291862;
var p1 = cljs.core.nth.call(null,vec__291863,(0),null);
var p2 = cljs.core.nth.call(null,vec__291863,(1),null);
return cljs.core.reverse.call(null,dynomics.space.core.move_along.call(null,0.8,p1,p2));
});})(map__291850,map__291850__$1,state,map__291851,map__291851__$1,scale))
,cljs.core.partition.call(null,(2),(1),points)))),curve_id);
});

dynomics.space.core.add_curve.cljs$lang$maxFixedArity = 3;
dynomics.space.core.add_curves = (function dynomics$space$core$add_curves(state,curves){
return cljs.core.reduce.call(null,dynomics.space.core.add_curve,state,curves);
});
dynomics.space.core.merge_selected_curves = (function dynomics$space$core$merge_selected_curves(p__291874){
var map__291879 = p__291874;
var map__291879__$1 = ((((!((map__291879 == null)))?((((map__291879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291879):map__291879);
var state = map__291879__$1;
var map__291880 = cljs.core.get.call(null,map__291879__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__291880__$1 = ((((!((map__291880 == null)))?((((map__291880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291880):map__291880);
var nodes = cljs.core.get.call(null,map__291880__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_curves = cljs.core.get.call(null,map__291880__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
var curves = cljs.core.get.call(null,map__291880__$1,new cljs.core.Keyword(null,"curves","curves",-510805378));
return null;
});
/**
 * Returns the given state with its
 *   2 selected nodes joined by a curve with
 *   1 intermediate point
 */
dynomics.space.core.add_curve_between_nodes = (function dynomics$space$core$add_curve_between_nodes(var_args){
var args291885 = [];
var len__36461__auto___291916 = arguments.length;
var i__36462__auto___291917 = (0);
while(true){
if((i__36462__auto___291917 < len__36461__auto___291916)){
args291885.push((arguments[i__36462__auto___291917]));

var G__291918 = (i__36462__auto___291917 + (1));
i__36462__auto___291917 = G__291918;
continue;
} else {
}
break;
}

var G__291887 = args291885.length;
switch (G__291887) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args291885.length)].join('')));

}
});

dynomics.space.core.add_curve_between_nodes.cljs$core$IFn$_invoke$arity$1 = (function (p__291888){
var map__291889 = p__291888;
var map__291889__$1 = ((((!((map__291889 == null)))?((((map__291889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291889):map__291889);
var state = map__291889__$1;
var map__291890 = cljs.core.get.call(null,map__291889__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__291890__$1 = ((((!((map__291890 == null)))?((((map__291890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291890):map__291890);
var nodes = cljs.core.get.call(null,map__291890__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__291890__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
if((((2) === cljs.core.count.call(null,selected_nodes))) && (cljs.core.every_QMARK_.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"connection","connection",-123599300)),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.partial.call(null,cljs.core.get_in,state)),selected_nodes))){
return dynomics.space.core.add_curve_between_nodes.call(null,state,nodes,cljs.core.vec.call(null,selected_nodes));
} else {
return state;
}
});

dynomics.space.core.add_curve_between_nodes.cljs$core$IFn$_invoke$arity$3 = (function (state,nodes,edge){
return dynomics.space.core.add_curve_between_nodes.call(null,state,nodes,edge,dynomics.space.core.edge_points.call(null,nodes,edge),dynomics.space.core.make_new_id.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378)], null))));
});

dynomics.space.core.add_curve_between_nodes.cljs$core$IFn$_invoke$arity$5 = (function (state,nodes,edge,p__291894,curve_id){
var map__291895 = p__291894;
var map__291895__$1 = ((((!((map__291895 == null)))?((((map__291895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291895):map__291895);
var vec__291896 = cljs.core.get.call(null,map__291895__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var _ = cljs.core.nth.call(null,vec__291896,(0),null);
var p1 = cljs.core.nth.call(null,vec__291896,(1),null);
var p2 = cljs.core.nth.call(null,vec__291896,(2),null);
var vec__291897 = cljs.core.nth.call(null,vec__291896,(3),null);
var x1 = cljs.core.nth.call(null,vec__291897,(0),null);
var x2 = cljs.core.nth.call(null,vec__291897,(1),null);
var vec__291898 = cljs.core.nth.call(null,vec__291896,(4),null);
var y1 = cljs.core.nth.call(null,vec__291898,(0),null);
var y2 = cljs.core.nth.call(null,vec__291898,(1),null);
var vec__291899 = cljs.core.get.call(null,map__291895__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var vec__291900 = cljs.core.nth.call(null,vec__291899,(0),null);
var nid1 = cljs.core.nth.call(null,vec__291900,(0),null);
var cid1 = cljs.core.nth.call(null,vec__291900,(1),null);
var vec__291901 = cljs.core.nth.call(null,vec__291899,(1),null);
var nid2 = cljs.core.nth.call(null,vec__291901,(0),null);
var cid2 = cljs.core.nth.call(null,vec__291901,(1),null);
var ends = cljs.core.map.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null));
var ends_ns = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.count,new cljs.core.Keyword(null,"connections","connections",-2064090887)),ends);
var mp = cljs.core.first.call(null,dynomics.space.core.midpoints.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null)));
var mpcp = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.partial.call(null,cljs.core._STAR_,0.05)),dynomics.space.core.nearest_connection,cljs.core.partial.call(null,cljs.core.map,cljs.core._,mp)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2,p1], null));
var map__291907 = dynomics.space.core.add_node.call(null,state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),mp,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.vec.call(null,cljs.core.map.call(null,((function (ends,ends_ns,mp,mpcp,map__291895,map__291895__$1,vec__291896,_,p1,p2,vec__291897,x1,x2,vec__291898,y1,y2,vec__291899,vec__291900,nid1,cid1,vec__291901,nid2,cid2){
return (function (q,id){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),q,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
});})(ends,ends_ns,mp,mpcp,map__291895,map__291895__$1,vec__291896,_,p1,p2,vec__291897,x1,x2,vec__291898,y1,y2,vec__291899,vec__291900,nid1,cid1,vec__291901,nid2,cid2))
,mpcp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)))], null));
var map__291907__$1 = ((((!((map__291907 == null)))?((((map__291907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291907):map__291907);
var r = map__291907__$1;
var mpid = cljs.core.get.call(null,map__291907__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return dynomics.space.core.deselect_all.call(null,dynomics.space.core.update_curves_by_node.call(null,cljs.core.reduce.call(null,((function (ends,ends_ns,mp,mpcp,map__291907,map__291907__$1,r,mpid,map__291895,map__291895__$1,vec__291896,_,p1,p2,vec__291897,x1,x2,vec__291898,y1,y2,vec__291899,vec__291900,nid1,cid1,vec__291901,nid2,cid2){
return (function (r__$1,p__291910){
var vec__291911 = p__291910;
var id = cljs.core.nth.call(null,vec__291911,(0),null);
var cp = cljs.core.nth.call(null,vec__291911,(1),null);
return cljs.core.update_in.call(null,r__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),curve_id], null),((function (vec__291911,id,cp,ends,ends_ns,mp,mpcp,map__291907,map__291907__$1,r,mpid,map__291895,map__291895__$1,vec__291896,_,p1,p2,vec__291897,x1,x2,vec__291898,y1,y2,vec__291899,vec__291900,nid1,cid1,vec__291901,nid2,cid2){
return (function (curve){
return cljs.core.conj.call(null,(function (){var or__35392__auto__ = curve;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cp], null));
});})(vec__291911,id,cp,ends,ends_ns,mp,mpcp,map__291907,map__291907__$1,r,mpid,map__291895,map__291895__$1,vec__291896,_,p1,p2,vec__291897,x1,x2,vec__291898,y1,y2,vec__291899,vec__291900,nid1,cid1,vec__291901,nid2,cid2))
);
});})(ends,ends_ns,mp,mpcp,map__291907,map__291907__$1,r,mpid,map__291895,map__291895__$1,vec__291896,_,p1,p2,vec__291897,x1,x2,vec__291898,y1,y2,vec__291899,vec__291900,nid1,cid1,vec__291901,nid2,cid2))
,r,cljs.core.map.call(null,cljs.core.vector,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,mpid,nid2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.core.twin.call(null,cid1,cljs.core.first.call(null,ends_ns)),cid1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cid2,dynomics.space.core.twin.call(null,cid2,cljs.core.last.call(null,ends_ns))], null)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,mpid,nid2], null),curve_id));
});

dynomics.space.core.add_curve_between_nodes.cljs$lang$maxFixedArity = 5;
/**
 * Removes the selected nodes and their edges
 */
dynomics.space.core.remove_selected_nodes = (function dynomics$space$core$remove_selected_nodes(p__291932){
var map__291939 = p__291932;
var map__291939__$1 = ((((!((map__291939 == null)))?((((map__291939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291939):map__291939);
var state = map__291939__$1;
var map__291940 = cljs.core.get.call(null,map__291939__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__291940__$1 = ((((!((map__291940 == null)))?((((map__291940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291940):map__291940);
var selected_nodes = cljs.core.get.call(null,map__291940__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Remove ",selected_nodes);

return dynomics.space.core.add_connections_by_node.call(null,dynomics.space.core.update_compatibility_info.call(null,cljs.core.reduce.call(null,dynomics.space.core.remove_node_from_curves,dynomics.space.core.remove_edges.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),((function (map__291939,map__291939__$1,state,map__291940,map__291940__$1,selected_nodes){
return (function (nodes){
return cljs.core.apply.call(null,cljs.core.dissoc,nodes,cljs.core.map.call(null,cljs.core.last,selected_nodes));
});})(map__291939,map__291939__$1,state,map__291940,map__291940__$1,selected_nodes))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__291939,map__291939__$1,state,map__291940,map__291940__$1,selected_nodes){
return (function (g){
return loom.graph.remove_nodes.call(null,g,selected_nodes);
});})(map__291939,map__291939__$1,state,map__291940,map__291940__$1,selected_nodes))
),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"description","description",-1428560544),"Remove nodes"], null))),cljs.core.map.call(null,cljs.core.last,selected_nodes))));
});
dynomics.space.core.remove_selected = (function dynomics$space$core$remove_selected(p__291968){
var map__291978 = p__291968;
var map__291978__$1 = ((((!((map__291978 == null)))?((((map__291978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291978):map__291978);
var state = map__291978__$1;
var map__291979 = cljs.core.get.call(null,map__291978__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__291979__$1 = ((((!((map__291979 == null)))?((((map__291979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__291979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291979):map__291979);
var selected_nodes = cljs.core.get.call(null,map__291979__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var selected_curves = cljs.core.get.call(null,map__291979__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
return cljs.core.update_in.call(null,dynomics.space.core.remove_selected_nodes.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378)], null),((function (map__291978,map__291978__$1,state,map__291979,map__291979__$1,selected_nodes,selected_curves){
return (function (curves){
return cljs.core.apply.call(null,cljs.core.dissoc,curves,cljs.core.map.call(null,cljs.core.last,selected_curves));
});})(map__291978,map__291978__$1,state,map__291979,map__291979__$1,selected_nodes,selected_curves))
);
});
