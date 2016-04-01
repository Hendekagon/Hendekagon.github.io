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
var x__35756__auto__ = x;
var y__35757__auto__ = (-1);
return ((x__35756__auto__ > y__35757__auto__) ? x__35756__auto__ : y__35757__auto__);
} else {
var x__35763__auto__ = x;
var y__35764__auto__ = (1);
return ((x__35763__auto__ < y__35764__auto__) ? x__35763__auto__ : y__35764__auto__);
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
dynomics.space.core.angle = (function dynomics$space$core$angle(p__131539){
var vec__131541 = p__131539;
var x = cljs.core.nth.call(null,vec__131541,(0),null);
var y = cljs.core.nth.call(null,vec__131541,(1),null);
return Math.atan2(x,y);
});
dynomics.space.core.p2c = (function dynomics$space$core$p2c(p__131542){
var vec__131544 = p__131542;
var r = cljs.core.nth.call(null,vec__131544,(0),null);
var theta = cljs.core.nth.call(null,vec__131544,(1),null);
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,r),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.core.cos.call(null,theta),dynomics.space.core.sin.call(null,theta)], null));
});
dynomics.space.core.c_STAR_ = (function dynomics$space$core$c_STAR_(p__131559,p__131560){
var vec__131564 = p__131559;
var ar = cljs.core.nth.call(null,vec__131564,(0),null);
var ai = cljs.core.nth.call(null,vec__131564,(1),null);
var vec__131565 = p__131560;
var br = cljs.core.nth.call(null,vec__131565,(0),null);
var bi = cljs.core.nth.call(null,vec__131565,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((ar * br) - (ai * bi)),((ai * br) + (ar * bi))], null);
});
dynomics.space.core.c_PLUS_ = (function dynomics$space$core$c_PLUS_(a,b){
return cljs.core.map.call(null,cljs.core._PLUS_,a,b);
});
dynomics.space.core.twin = (function dynomics$space$core$twin(id,n){
return cljs.core.mod.call(null,(id + (n / (2))),n);
});
dynomics.space.core.midpoints = (function dynomics$space$core$midpoints(points){
return cljs.core.map.call(null,(function (p__131568){
var vec__131569 = p__131568;
var p1 = cljs.core.nth.call(null,vec__131569,(0),null);
var p2 = cljs.core.nth.call(null,vec__131569,(1),null);
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,0.5),cljs.core.map.call(null,cljs.core._PLUS_,p1,p2));
}),cljs.core.partition.call(null,(2),(1),points));
});
dynomics.space.core.move_along = (function dynomics$space$core$move_along(s,p1,p2){
var v = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,s),cljs.core.map.call(null,cljs.core._,p1,p2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,v,p2)),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._,p1,v))], null);
});
dynomics.space.core.dot = (function dynomics$space$core$dot(var_args){
var args__36501__auto__ = [];
var len__36494__auto___131581 = arguments.length;
var i__36495__auto___131582 = (0);
while(true){
if((i__36495__auto___131582 < len__36494__auto___131581)){
args__36501__auto__.push((arguments[i__36495__auto___131582]));

var G__131583 = (i__36495__auto___131582 + (1));
i__36495__auto___131582 = G__131583;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((0) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((0)),(0),null)):null);
return dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic(argseq__36502__auto__);
});

dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic = (function (x){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.apply.call(null,cljs.core.map,cljs.core._STAR_,x));
});

dynomics.space.core.dot.cljs$lang$maxFixedArity = (0);

dynomics.space.core.dot.cljs$lang$applyTo = (function (seq131580){
return dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq131580));
});
dynomics.space.core.sqrd = (function dynomics$space$core$sqrd(var_args){
var args131584 = [];
var len__36494__auto___131587 = arguments.length;
var i__36495__auto___131588 = (0);
while(true){
if((i__36495__auto___131588 < len__36494__auto___131587)){
args131584.push((arguments[i__36495__auto___131588]));

var G__131589 = (i__36495__auto___131588 + (1));
i__36495__auto___131588 = G__131589;
continue;
} else {
}
break;
}

var G__131586 = args131584.length;
switch (G__131586) {
case 2:
return dynomics.space.core.sqrd.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dynomics.space.core.sqrd.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args131584.length)].join('')));

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
var args131591 = [];
var len__36494__auto___131605 = arguments.length;
var i__36495__auto___131606 = (0);
while(true){
if((i__36495__auto___131606 < len__36494__auto___131605)){
args131591.push((arguments[i__36495__auto___131606]));

var G__131607 = (i__36495__auto___131606 + (1));
i__36495__auto___131606 = G__131607;
continue;
} else {
}
break;
}

var G__131593 = args131591.length;
switch (G__131593) {
case 3:
return dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args131591.length)].join('')));

}
});

dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$3 = (function (p__131594,path,p__131595){
var vec__131596 = p__131594;
var x = cljs.core.nth.call(null,vec__131596,(0),null);
var y = cljs.core.nth.call(null,vec__131596,(1),null);
var map__131597 = p__131595;
var map__131597__$1 = ((((!((map__131597 == null)))?((((map__131597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131597):map__131597);
var space = map__131597__$1;
var scale = cljs.core.get.call(null,map__131597__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var vec__131599 = path;
var _ = cljs.core.nth.call(null,vec__131599,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__131599,(1),null);
var nid = cljs.core.nth.call(null,vec__131599,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__131599,(3),null);
var cid = cljs.core.nth.call(null,vec__131599,(4),null);
var vec__131600 = cljs.core.get_in.call(null,space,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx = cljs.core.nth.call(null,vec__131600,(0),null);
var ny = cljs.core.nth.call(null,vec__131600,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - nx),(y - ny)], null)], null)], null);
});

dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$2 = (function (p__131601,scale){
var vec__131602 = p__131601;
var vec__131603 = cljs.core.nth.call(null,vec__131602,(0),null);
var x = cljs.core.nth.call(null,vec__131603,(0),null);
var y = cljs.core.nth.call(null,vec__131603,(1),null);
var vec__131604 = cljs.core.nth.call(null,vec__131602,(1),null);
var nx = cljs.core.nth.call(null,vec__131604,(0),null);
var ny = cljs.core.nth.call(null,vec__131604,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - nx),(y - ny)], null);
});

dynomics.space.core.to_space.cljs$lang$maxFixedArity = 3;
dynomics.space.core.to_local = (function dynomics$space$core$to_local(scale,p__131637,p__131638){
var vec__131641 = p__131637;
var x = cljs.core.nth.call(null,vec__131641,(0),null);
var y = cljs.core.nth.call(null,vec__131641,(1),null);
var vec__131642 = p__131638;
var lx = cljs.core.nth.call(null,vec__131642,(0),null);
var ly = cljs.core.nth.call(null,vec__131642,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(scale * (x - lx)),(scale * (y - ly))], null);
});
/**
 * Returns the pair of control points with
 *   mirrored positions for the given control point
 */
dynomics.space.core.mirror_node = (function dynomics$space$core$mirror_node(p__131651,path,p__131652){
var vec__131664 = p__131651;
var x = cljs.core.nth.call(null,vec__131664,(0),null);
var y = cljs.core.nth.call(null,vec__131664,(1),null);
var map__131665 = p__131652;
var map__131665__$1 = ((((!((map__131665 == null)))?((((map__131665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131665):map__131665);
var space = map__131665__$1;
var nodes = cljs.core.get.call(null,map__131665__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var node_scale = cljs.core.get.call(null,map__131665__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var vec__131671 = path;
var _ = cljs.core.nth.call(null,vec__131671,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__131671,(1),null);
var nid = cljs.core.nth.call(null,vec__131671,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__131671,(3),null);
var cid = cljs.core.nth.call(null,vec__131671,(4),null);
var nc = cljs.core.count.call(null,cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"connections","connections",-2064090887)], null)));
var cp = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.mod.call(null,(cid + (0.5 * nc)),nc)], null);
var vec__131672 = cljs.core.get_in.call(null,space,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx = cljs.core.nth.call(null,vec__131672,(0),null);
var ny = cljs.core.nth.call(null,vec__131672,(1),null);
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
dynomics.space.core.quadrants_types_by_position = (function dynomics$space$core$quadrants_types_by_position(p__131702){
var map__131706 = p__131702;
var map__131706__$1 = ((((!((map__131706 == null)))?((((map__131706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131706):map__131706);
var r1 = cljs.core.get.call(null,map__131706__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var p1 = cljs.core.get.call(null,map__131706__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.map.call(null,((function (map__131706,map__131706__$1,r1,p1){
return (function (i){
return cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295)], null));
});})(map__131706,map__131706__$1,r1,p1))
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
dynomics.space.core.default_connections = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__131831){
var vec__131832 = p__131831;
var p = cljs.core.nth.call(null,vec__131832,(0),null);
var id = cljs.core.nth.call(null,vec__131832,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,0.025),p),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connection","connection",-123599300)], null);
}),dynomics.space.core.connections_by_vector));
/**
 * Returns a node of the given type
 */
dynomics.space.core.make_intersection_node = (function dynomics$space$core$make_intersection_node(var_args){
var args131841 = [];
var len__36494__auto___131848 = arguments.length;
var i__36495__auto___131849 = (0);
while(true){
if((i__36495__auto___131849 < len__36494__auto___131848)){
args131841.push((arguments[i__36495__auto___131849]));

var G__131851 = (i__36495__auto___131849 + (1));
i__36495__auto___131849 = G__131851;
continue;
} else {
}
break;
}

var G__131847 = args131841.length;
switch (G__131847) {
case 1:
return dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args131841.length)].join('')));

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
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p__131871){
var vec__131872 = p__131871;
var _ = cljs.core.nth.call(null,vec__131872,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__131872,(1),null);
var id = cljs.core.nth.call(null,vec__131872,(2),null);
return id;
}),nodes));
});
dynomics.space.core.quadrant_info = (function dynomics$space$core$quadrant_info(nodes,p__131873){
var vec__131879 = p__131873;
var _ = cljs.core.nth.call(null,vec__131879,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__131879,(1),null);
var nid = cljs.core.nth.call(null,vec__131879,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__131879,(3),null);
var cid = cljs.core.nth.call(null,vec__131879,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node-type","node-type",129492462),cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"node-type","node-type",129492462)], null)),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid,new cljs.core.Keyword(null,"position","position",-2011731912)], null))], null);
});
/**
 * 
 *   Returns the given state with a map of node-node compatibilities added,
 *   of the form {[nodeid1 nodeid2] true [nodeid4 nodeid5] false}
 *   
 */
dynomics.space.core.add_compatibility_info = (function dynomics$space$core$add_compatibility_info(p__131889){
var map__131896 = p__131889;
var map__131896__$1 = ((((!((map__131896 == null)))?((((map__131896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131896):map__131896);
var state = map__131896__$1;
var map__131897 = cljs.core.get.call(null,map__131896__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__131897__$1 = ((((!((map__131897 == null)))?((((map__131897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131897):map__131897);
var nodes = cljs.core.get.call(null,map__131897__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__131897__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
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
dynomics.space.core.add_connections_by_node = (function dynomics$space$core$add_connections_by_node(p__131915){
var map__131929 = p__131915;
var map__131929__$1 = ((((!((map__131929 == null)))?((((map__131929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131929):map__131929);
var state = map__131929__$1;
var map__131930 = cljs.core.get.call(null,map__131929__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__131930__$1 = ((((!((map__131930 == null)))?((((map__131930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131930):map__131930);
var nodes = cljs.core.get.call(null,map__131930__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__131930__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var graph = cljs.core.get.call(null,map__131930__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
cljs.core.println.call(null,"  acbn nodes ",cljs.core.count.call(null,loom.graph.nodes.call(null,graph)));

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"connections-by-node","connections-by-node",517626909)], null),cljs.core.zipmap.call(null,cljs.core.keys.call(null,nodes),cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.connections_of_node,graph,edges),cljs.core.keys.call(null,nodes))));
});
/**
 * Following a node-type change, update the
 *   compatibility info for its connections
 */
dynomics.space.core.update_compatibility_info = (function dynomics$space$core$update_compatibility_info(var_args){
var args131956 = [];
var len__36494__auto___131979 = arguments.length;
var i__36495__auto___131980 = (0);
while(true){
if((i__36495__auto___131980 < len__36494__auto___131979)){
args131956.push((arguments[i__36495__auto___131980]));

var G__131981 = (i__36495__auto___131980 + (1));
i__36495__auto___131980 = G__131981;
continue;
} else {
}
break;
}

var G__131962 = args131956.length;
switch (G__131962) {
case 1:
return dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args131956.length)].join('')));

}
});

dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$1 = (function (p__131963){
var map__131965 = p__131963;
var map__131965__$1 = ((((!((map__131965 == null)))?((((map__131965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131965):map__131965);
var state = map__131965__$1;
var map__131966 = cljs.core.get.call(null,map__131965__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__131966__$1 = ((((!((map__131966 == null)))?((((map__131966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131966):map__131966);
var selected_nodes = cljs.core.get.call(null,map__131966__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,dynomics.space.core.update_compatibility_info,state,dynomics.space.core.just_ids.call(null,selected_nodes));
});

dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$2 = (function (p__131974,id){
var map__131975 = p__131974;
var map__131975__$1 = ((((!((map__131975 == null)))?((((map__131975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131975):map__131975);
var state = map__131975__$1;
var map__131976 = cljs.core.get.call(null,map__131975__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__131976__$1 = ((((!((map__131976 == null)))?((((map__131976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131976):map__131976);
var graph = cljs.core.get.call(null,map__131976__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var edges = cljs.core.get.call(null,map__131976__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var nodes = cljs.core.get.call(null,map__131976__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return cljs.core.reduce.call(null,((function (map__131975,map__131975__$1,state,map__131976,map__131976__$1,graph,edges,nodes){
return (function (s,edge){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024),dynomics.space.core.just_ids.call(null,edge)], null),dynomics.space.core.compare_quadrants.call(null,cljs.core.map.call(null,dynomics.space.core.quadrants_types_by_position,cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.quadrant_info,nodes),edge))));
});})(map__131975,map__131975__$1,state,map__131976,map__131976__$1,graph,edges,nodes))
,state,dynomics.space.core.connections_of_node.call(null,graph,edges,id));
});

dynomics.space.core.update_compatibility_info.cljs$lang$maxFixedArity = 2;
dynomics.space.core.make_new_id = (function dynomics$space$core$make_new_id(var_args){
var args131994 = [];
var len__36494__auto___132006 = arguments.length;
var i__36495__auto___132007 = (0);
while(true){
if((i__36495__auto___132007 < len__36494__auto___132006)){
args131994.push((arguments[i__36495__auto___132007]));

var G__132008 = (i__36495__auto___132007 + (1));
i__36495__auto___132007 = G__132008;
continue;
} else {
}
break;
}

var G__131997 = args131994.length;
switch (G__131997) {
case 1:
return dynomics.space.core.make_new_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.make_new_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args131994.length)].join('')));

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
var args132019 = [];
var len__36494__auto___132062 = arguments.length;
var i__36495__auto___132063 = (0);
while(true){
if((i__36495__auto___132063 < len__36494__auto___132062)){
args132019.push((arguments[i__36495__auto___132063]));

var G__132068 = (i__36495__auto___132063 + (1));
i__36495__auto___132063 = G__132068;
continue;
} else {
}
break;
}

var G__132025 = args132019.length;
switch (G__132025) {
case 1:
return dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args132019.length)].join('')));

}
});

dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$1 = (function (p__132032){
var map__132033 = p__132032;
var map__132033__$1 = ((((!((map__132033 == null)))?((((map__132033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132033):map__132033);
var state = map__132033__$1;
var map__132034 = cljs.core.get.call(null,map__132033__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__132034__$1 = ((((!((map__132034 == null)))?((((map__132034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132034):map__132034);
var nodes = cljs.core.get.call(null,map__132034__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var max_node_id = cljs.core.get.call(null,map__132034__$1,new cljs.core.Keyword(null,"max-node-id","max-node-id",-75074557));
var p = cljs.core.get.call(null,map__132033__$1,new cljs.core.Keyword(null,"node-position","node-position",-542959703));
var node_type = cljs.core.get.call(null,map__132033__$1,new cljs.core.Keyword(null,"selected-node-type","selected-node-type",-1717725489));
return dynomics.space.core.add_node.call(null,state,cljs.core.assoc.call(null,dynomics.space.core.make_intersection_node.call(null,(function (){var or__35425__auto__ = node_type;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return (3);
}
})()),new cljs.core.Keyword(null,"position","position",-2011731912),p));
});

dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$2 = (function (p__132042,p__132043){
var map__132044 = p__132042;
var map__132044__$1 = ((((!((map__132044 == null)))?((((map__132044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132044):map__132044);
var state = map__132044__$1;
var map__132045 = cljs.core.get.call(null,map__132044__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__132045__$1 = ((((!((map__132045 == null)))?((((map__132045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132045):map__132045);
var nodes = cljs.core.get.call(null,map__132045__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var max_node_id = cljs.core.get.call(null,map__132045__$1,new cljs.core.Keyword(null,"max-node-id","max-node-id",-75074557));
var selected_nodes = cljs.core.get.call(null,map__132045__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__132046 = p__132043;
var map__132046__$1 = ((((!((map__132046 == null)))?((((map__132046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132046):map__132046);
var new_node = map__132046__$1;
var new_id = cljs.core.get.call(null,map__132046__$1,new cljs.core.Keyword(null,"id","id",-1388402092),dynomics.space.core.make_new_id.call(null,nodes,max_node_id));
cljs.core.println.call(null,new_id,new_node);

return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new_id], null),cljs.core.assoc.call(null,new_node,new cljs.core.Keyword(null,"id","id",-1388402092),new_id)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__132044,map__132044__$1,state,map__132045,map__132045__$1,nodes,max_node_id,selected_nodes,map__132046,map__132046__$1,new_node,new_id){
return (function (g){
return loom.graph.add_nodes.call(null,g,new_id);
});})(map__132044,map__132044__$1,state,map__132045,map__132045__$1,nodes,max_node_id,selected_nodes,map__132046,map__132046__$1,new_node,new_id))
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
dynomics.space.core.remove_edges = (function dynomics$space$core$remove_edges(p__132094){
var map__132105 = p__132094;
var map__132105__$1 = ((((!((map__132105 == null)))?((((map__132105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132105):map__132105);
var state = map__132105__$1;
var map__132106 = cljs.core.get.call(null,map__132105__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__132106__$1 = ((((!((map__132106 == null)))?((((map__132106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132106):map__132106);
var selected_nodes = cljs.core.get.call(null,map__132106__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),((function (map__132105,map__132105__$1,state,map__132106,map__132106__$1,selected_nodes){
return (function (edges){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,((function (map__132105,map__132105__$1,state,map__132106,map__132106__$1,selected_nodes){
return (function (p__132109){
var vec__132110 = p__132109;
var vec__132111 = cljs.core.nth.call(null,vec__132110,(0),null);
var _ = cljs.core.nth.call(null,vec__132111,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__132111,(1),null);
var nid1 = cljs.core.nth.call(null,vec__132111,(2),null);
var ___$2 = cljs.core.nthnext.call(null,vec__132111,(3));
var vec__132112 = cljs.core.nth.call(null,vec__132110,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__132112,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__132112,(1),null);
var nid2 = cljs.core.nth.call(null,vec__132112,(2),null);
var ___$5 = cljs.core.nthnext.call(null,vec__132112,(3));
var or__35425__auto__ = selected_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid1], null));
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return selected_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid2], null));
}
});})(map__132105,map__132105__$1,state,map__132106,map__132106__$1,selected_nodes))
,edges));
});})(map__132105,map__132105__$1,state,map__132106,map__132106__$1,selected_nodes))
);
});
dynomics.space.core.add_graph = (function dynomics$space$core$add_graph(p__132142){
var map__132149 = p__132142;
var map__132149__$1 = ((((!((map__132149 == null)))?((((map__132149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132149):map__132149);
var space = map__132149__$1;
var edges = cljs.core.get.call(null,map__132149__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return cljs.core.assoc.call(null,space,new cljs.core.Keyword(null,"graph","graph",1558099509),cljs.core.apply.call(null,loom.graph.graph,dynomics.space.graph.simplify_edges.call(null,edges)));
});
dynomics.space.core.update_ds = (function dynomics$space$core$update_ds(p__132164){
var map__132169 = p__132164;
var map__132169__$1 = ((((!((map__132169 == null)))?((((map__132169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132169):map__132169);
var s = map__132169__$1;
var f = cljs.core.get.call(null,map__132169__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),((function (map__132169,map__132169__$1,s,f){
return (function (points){
return cljs.core.map.call(null,f,points);
});})(map__132169,map__132169__$1,s,f))
);
});
dynomics.space.core.random_points = (function dynomics$space$core$random_points(n){
return cljs.core.repeatedly.call(null,n,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.call(null),cljs.core.rand.call(null)], null);
}));
});
dynomics.space.core.make_ds = (function dynomics$space$core$make_ds(var_args){
var args132183 = [];
var len__36494__auto___132189 = arguments.length;
var i__36495__auto___132190 = (0);
while(true){
if((i__36495__auto___132190 < len__36494__auto___132189)){
args132183.push((arguments[i__36495__auto___132190]));

var G__132192 = (i__36495__auto___132190 + (1));
i__36495__auto___132190 = G__132192;
continue;
} else {
}
break;
}

var G__132186 = args132183.length;
switch (G__132186) {
case 0:
return dynomics.space.core.make_ds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.space.core.make_ds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args132183.length)].join('')));

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
var args132198 = [];
var len__36494__auto___132204 = arguments.length;
var i__36495__auto___132205 = (0);
while(true){
if((i__36495__auto___132205 < len__36494__auto___132204)){
args132198.push((arguments[i__36495__auto___132205]));

var G__132208 = (i__36495__auto___132205 + (1));
i__36495__auto___132205 = G__132208;
continue;
} else {
}
break;
}

var G__132202 = args132198.length;
switch (G__132202) {
case 3:
return dynomics.space.core.ds_evolution.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.space.core.ds_evolution.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args132198.length)].join('')));

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
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__132218){
var vec__132219 = p__132218;
var x = cljs.core.nth.call(null,vec__132219,(0),null);
var y = cljs.core.nth.call(null,vec__132219,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((-1) * x),y], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(-8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-8)], null)], null)], null));
});
dynomics.space.core.saddle_3 = (function dynomics$space$core$saddle_3(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__132228){
var vec__132229 = p__132228;
var x = cljs.core.nth.call(null,vec__132229,(0),null);
var y = cljs.core.nth.call(null,vec__132229,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((-1) * y)], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(-24)], null)], null)], null));
});
dynomics.space.core.saddle_4 = (function dynomics$space$core$saddle_4(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__132244){
var vec__132245 = p__132244;
var x = cljs.core.nth.call(null,vec__132245,(0),null);
var y = cljs.core.nth.call(null,vec__132245,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(-8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-24)], null)], null)], null));
});
dynomics.space.core.saddle_5 = (function dynomics$space$core$saddle_5(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__132250){
var vec__132251 = p__132250;
var x = cljs.core.nth.call(null,vec__132251,(0),null);
var y = cljs.core.nth.call(null,vec__132251,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.04,-0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(-8)], null)], null)], null));
});
dynomics.space.core.spiral = (function dynomics$space$core$spiral(var_args){
var args132308 = [];
var len__36494__auto___132323 = arguments.length;
var i__36495__auto___132324 = (0);
while(true){
if((i__36495__auto___132324 < len__36494__auto___132323)){
args132308.push((arguments[i__36495__auto___132324]));

var G__132329 = (i__36495__auto___132324 + (1));
i__36495__auto___132324 = G__132329;
continue;
} else {
}
break;
}

var G__132315 = args132308.length;
switch (G__132315) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args132308.length)].join('')));

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
dynomics.space.core.make_phase_space = (function dynomics$space$core$make_phase_space(){
return dynomics.space.core.add_graph.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curve-types","curve-types",1650772099),new cljs.core.Keyword(null,"selected-space","selected-space",613834726),new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493),new cljs.core.Keyword(null,"selected-edges","selected-edges",1789211954),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"connections-by-node","connections-by-node",517626909),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"curves","curves",-510805378)],[cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,0.08,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY]));
});
/**
 * Returns the given state with any connections that need to be
 *   made added to the edges map. Only connect nodes if there are two
 *   selected. Note that the connection is undirected
 */
dynomics.space.core.connect_pair = (function dynomics$space$core$connect_pair(p__132347){
var map__132360 = p__132347;
var map__132360__$1 = ((((!((map__132360 == null)))?((((map__132360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132360):map__132360);
var state = map__132360__$1;
var map__132361 = cljs.core.get.call(null,map__132360__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__132361__$1 = ((((!((map__132361 == null)))?((((map__132361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132361):map__132361);
var nodes = cljs.core.get.call(null,map__132361__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__132361__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Connect ",selected_nodes);

if(((2) === cljs.core.count.call(null,selected_nodes))){
return dynomics.space.core.add_connections_by_node.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,dynomics.space.core.add_compatibility_info.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),cljs.core.conj,cljs.core.vec.call(null,selected_nodes)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__132360,map__132360__$1,state,map__132361,map__132361__$1,nodes,selected_nodes){
return (function (g){
return loom.graph.add_edges.call(null,g,cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__132360,map__132360__$1,state,map__132361,map__132361__$1,nodes,selected_nodes){
return (function (p__132365){
var vec__132366 = p__132365;
var _ = cljs.core.nth.call(null,vec__132366,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__132366,(1),null);
var nid = cljs.core.nth.call(null,vec__132366,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__132366,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__132366,(4),null);
return nid;
});})(map__132360,map__132360__$1,state,map__132361,map__132361__$1,nodes,selected_nodes))
,selected_nodes)));
});})(map__132360,map__132360__$1,state,map__132361,map__132361__$1,nodes,selected_nodes))
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
return (function (p__132396){
var map__132397 = p__132396;
var map__132397__$1 = ((((!((map__132397 == null)))?((((map__132397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132397):map__132397);
var state = map__132397__$1;
var map__132398 = cljs.core.get.call(null,map__132397__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__132398__$1 = ((((!((map__132398 == null)))?((((map__132398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132398):map__132398);
var selected_nodes = cljs.core.get.call(null,map__132398__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Set node type of ",selected_nodes," to ",id);

var r = dynomics.space.core.update_compatibility_info.call(null,cljs.core.assoc.call(null,cljs.core.reduce.call(null,((function (map__132397,map__132397__$1,state,map__132398,map__132398__$1,selected_nodes){
return (function (r,path){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,r,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"node-type","node-type",129492462)),id),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"intersection","intersection",2003891010));
});})(map__132397,map__132397__$1,state,map__132398,map__132398__$1,selected_nodes))
,state,selected_nodes),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Node type"),cljs.core.str(id)].join('')], null)));
return r;
});
});
dynomics.space.core.simplify_connection = (function dynomics$space$core$simplify_connection(p__132406){
var vec__132408 = p__132406;
var _ = cljs.core.nth.call(null,vec__132408,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__132408,(1),null);
var nid = cljs.core.nth.call(null,vec__132408,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__132408,(3),null);
var cid = cljs.core.nth.call(null,vec__132408,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,cid], null);
});
dynomics.space.core.simplify_connections = (function dynomics$space$core$simplify_connections(p__132414){
var vec__132423 = p__132414;
var map__132424 = cljs.core.nth.call(null,vec__132423,(0),null);
var map__132424__$1 = ((((!((map__132424 == null)))?((((map__132424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132424):map__132424);
var nodes = cljs.core.get.call(null,map__132424__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__132424__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edges","edges",-694791395),cljs.core.map.call(null,((function (vec__132423,map__132424,map__132424__$1,nodes,edges){
return (function (p__132426){
var vec__132427 = p__132426;
var vec__132428 = cljs.core.nth.call(null,vec__132427,(0),null);
var _ = cljs.core.nth.call(null,vec__132428,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__132428,(1),null);
var nid1 = cljs.core.nth.call(null,vec__132428,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__132428,(3),null);
var cid1 = cljs.core.nth.call(null,vec__132428,(4),null);
var vec__132429 = cljs.core.nth.call(null,vec__132427,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__132429,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__132429,(1),null);
var nid2 = cljs.core.nth.call(null,vec__132429,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__132429,(3),null);
var cid2 = cljs.core.nth.call(null,vec__132429,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null);
});})(vec__132423,map__132424,map__132424__$1,nodes,edges))
,edges),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes], null);
});
dynomics.space.core.insert_in = (function dynomics$space$core$insert_in(v,i,x){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.conj.call(null,cljs.core.subvec.call(null,v,(0),i),x),cljs.core.subvec.call(null,v,i)));
});
dynomics.space.core.with_compatibilities = (function dynomics$space$core$with_compatibilities(p__132444,compatibilities){
var map__132449 = p__132444;
var map__132449__$1 = ((((!((map__132449 == null)))?((((map__132449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132449):map__132449);
var e = map__132449__$1;
var vec__132450 = cljs.core.get.call(null,map__132449__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__132451 = cljs.core.nth.call(null,vec__132450,(0),null);
var nid1 = cljs.core.nth.call(null,vec__132451,(0),null);
var nid2 = cljs.core.nth.call(null,vec__132451,(1),null);
var _ = cljs.core.nthnext.call(null,vec__132450,(1));
return cljs.core.assoc.call(null,e,new cljs.core.Keyword(null,"compatible?","compatible?",923422575),compatibilities.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null)));
});
dynomics.space.core.edge_points = (function dynomics$space$core$edge_points(nodes,p__132456){
var vec__132467 = p__132456;
var vec__132468 = cljs.core.nth.call(null,vec__132467,(0),null);
var _ = cljs.core.nth.call(null,vec__132468,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__132468,(1),null);
var nid1 = cljs.core.nth.call(null,vec__132468,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__132468,(3),null);
var cid1 = cljs.core.nth.call(null,vec__132468,(4),null);
var vec__132469 = cljs.core.nth.call(null,vec__132467,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__132469,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__132469,(1),null);
var nid2 = cljs.core.nth.call(null,vec__132469,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__132469,(3),null);
var cid2 = cljs.core.nth.call(null,vec__132469,(4),null);
var vec__132470 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__132470,(0),null);
var ny1 = cljs.core.nth.call(null,vec__132470,(1),null);
var vec__132471 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx2 = cljs.core.nth.call(null,vec__132471,(0),null);
var ny2 = cljs.core.nth.call(null,vec__132471,(1),null);
var vec__132472 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__132472,(0),null);
var cy1 = cljs.core.nth.call(null,vec__132472,(1),null);
var vec__132473 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid2,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx2 = cljs.core.nth.call(null,vec__132473,(0),null);
var cy2 = cljs.core.nth.call(null,vec__132473,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx2,ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx1,cx2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cy1,cy2], null)], null),new cljs.core.Keyword(null,"connections","connections",-2064090887),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,cid1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,cid2], null)], null)], null);
});
dynomics.space.core.make_open_regions = (function dynomics$space$core$make_open_regions(node_scale,p__132496){
var vec__132513 = p__132496;
var node_id = cljs.core.nth.call(null,vec__132513,(0),null);
var node_type = cljs.core.nth.call(null,vec__132513,(1),null);
var edge_pairs = cljs.core.nth.call(null,vec__132513,(2),null);
cljs.core.println.call(null,"   >>> ",node_id,cljs.core.count.call(null,edge_pairs));

return cljs.core.map.call(null,((function (vec__132513,node_id,node_type,edge_pairs){
return (function (edge_pair){
var vec__132514 = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"connections","connections",-2064090887),edge_pair);
var _ = cljs.core.nth.call(null,vec__132514,(0),null);
var vec__132515 = cljs.core.nth.call(null,vec__132514,(1),null);
var nid1 = cljs.core.nth.call(null,vec__132515,(0),null);
var x = cljs.core.nth.call(null,vec__132515,(1),null);
var vec__132516 = cljs.core.nth.call(null,vec__132514,(2),null);
var nid2 = cljs.core.nth.call(null,vec__132516,(0),null);
var y = cljs.core.nth.call(null,vec__132516,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__132514,(3),null);
var xy = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var qv = dynomics.space.core.quadrant_vectors_by_connectors.call(null,xy);
var qt = dynomics.space.core.quadrant_types_by_connector_pair.call(null,node_type,qv);
cljs.core.println.call(null,"       > ",node_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null),xy,qt,qv);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node-id","node-id",779482292),node_id,new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370),qt,new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631),qv,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.mapcat.call(null,((function (vec__132514,_,vec__132515,nid1,x,vec__132516,nid2,y,___$1,xy,qv,qt,vec__132513,node_id,node_type,edge_pairs){
return (function (p__132518){
var map__132520 = p__132518;
var map__132520__$1 = ((((!((map__132520 == null)))?((((map__132520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132520):map__132520);
var vec__132521 = cljs.core.get.call(null,map__132520__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__132522 = cljs.core.nth.call(null,vec__132521,(0),null);
var nid1__$1 = cljs.core.nth.call(null,vec__132522,(0),null);
var nid2__$1 = cljs.core.nth.call(null,vec__132522,(1),null);
var vec__132523 = cljs.core.nth.call(null,vec__132521,(1),null);
var nx1 = cljs.core.nth.call(null,vec__132523,(0),null);
var ny1 = cljs.core.nth.call(null,vec__132523,(1),null);
var vec__132524 = cljs.core.nth.call(null,vec__132521,(2),null);
var nx2 = cljs.core.nth.call(null,vec__132524,(0),null);
var ny2 = cljs.core.nth.call(null,vec__132524,(1),null);
var vec__132525 = cljs.core.nth.call(null,vec__132521,(3),null);
var cx1 = cljs.core.nth.call(null,vec__132525,(0),null);
var cx2 = cljs.core.nth.call(null,vec__132525,(1),null);
var vec__132526 = cljs.core.nth.call(null,vec__132521,(4),null);
var cy1 = cljs.core.nth.call(null,vec__132526,(0),null);
var cy2 = cljs.core.nth.call(null,vec__132526,(1),null);
var cnx = cljs.core.get.call(null,map__132520__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return cljs.core.map.call(null,dynomics.ui.svg.make_bezier_point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx2,ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx2 + (node_scale * cx2)),(ny2 + (node_scale * cy2))], null)], null)], null));
});})(vec__132514,_,vec__132515,nid1,x,vec__132516,nid2,y,___$1,xy,qv,qt,vec__132513,node_id,node_type,edge_pairs))
,edge_pair)], null);
});})(vec__132513,node_id,node_type,edge_pairs))
,edge_pairs);
});
dynomics.space.core.reverse_edge = (function dynomics$space$core$reverse_edge(p__132574){
var map__132585 = p__132574;
var map__132585__$1 = ((((!((map__132585 == null)))?((((map__132585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132585):map__132585);
var vec__132586 = cljs.core.get.call(null,map__132585__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var ids = cljs.core.nth.call(null,vec__132586,(0),null);
var p1 = cljs.core.nth.call(null,vec__132586,(1),null);
var p2 = cljs.core.nth.call(null,vec__132586,(2),null);
var cx = cljs.core.nth.call(null,vec__132586,(3),null);
var cy = cljs.core.nth.call(null,vec__132586,(4),null);
var c = cljs.core.get.call(null,map__132585__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reverse.call(null,ids),p2,p1,cljs.core.reverse.call(null,cx),cljs.core.reverse.call(null,cy)], null),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.reverse.call(null,c)], null);
});
dynomics.space.core.edge_pairs_by_node = (function dynomics$space$core$edge_pairs_by_node(p__132602){
var map__132629 = p__132602;
var map__132629__$1 = ((((!((map__132629 == null)))?((((map__132629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132629):map__132629);
var nodes = cljs.core.get.call(null,map__132629__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var connections_by_node = cljs.core.get.call(null,map__132629__$1,new cljs.core.Keyword(null,"connections-by-node","connections-by-node",517626909));
var node_scale = cljs.core.get.call(null,map__132629__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"cbn",connections_by_node);

return cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.empty_QMARK_,cljs.core.last),cljs.core.map.call(null,((function (map__132629,map__132629__$1,nodes,connections_by_node,node_scale){
return (function (p__132632){
var vec__132633 = p__132632;
var id = cljs.core.nth.call(null,vec__132633,(0),null);
var connections = cljs.core.nth.call(null,vec__132633,(1),null);
cljs.core.println.call(null," possible quadrants for node ",id,cljs.core.count.call(null,connections));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"node-type","node-type",129492462)], null)),cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.comp.call(null,dynomics.space.core.reverse_edge,cljs.core.first),cljs.core.last),cljs.core.filter.call(null,((function (vec__132633,id,connections,map__132629,map__132629__$1,nodes,connections_by_node,node_scale){
return (function (p__132638){
var vec__132639 = p__132638;
var map__132640 = cljs.core.nth.call(null,vec__132639,(0),null);
var map__132640__$1 = ((((!((map__132640 == null)))?((((map__132640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132640):map__132640);
var vec__132641 = cljs.core.get.call(null,map__132640__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var vec__132642 = cljs.core.nth.call(null,vec__132641,(0),null);
var _ = cljs.core.nth.call(null,vec__132642,(0),null);
var a = cljs.core.nth.call(null,vec__132642,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__132641,(1),null);
var map__132643 = cljs.core.nth.call(null,vec__132639,(1),null);
var map__132643__$1 = ((((!((map__132643 == null)))?((((map__132643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132643):map__132643);
var vec__132644 = cljs.core.get.call(null,map__132643__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var vec__132645 = cljs.core.nth.call(null,vec__132644,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__132645,(0),null);
var b = cljs.core.nth.call(null,vec__132645,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__132644,(1),null);
return !(((2) === dynomics.space.core.abs.call(null,(a - b))));
});})(vec__132633,id,connections,map__132629,map__132629__$1,nodes,connections_by_node,node_scale))
,cljs.core.take.call(null,cljs.core.count.call(null,connections),cljs.core.partition.call(null,(2),(1),cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.edge_points,nodes),cljs.core.cycle.call(null,connections))))))], null);
});})(map__132629,map__132629__$1,nodes,connections_by_node,node_scale))
,cljs.core.filter.call(null,((function (map__132629,map__132629__$1,nodes,connections_by_node,node_scale){
return (function (p__132653){
var vec__132654 = p__132653;
var k = cljs.core.nth.call(null,vec__132654,(0),null);
var v = cljs.core.nth.call(null,vec__132654,(1),null);
return (cljs.core.count.call(null,v) > (1));
});})(map__132629,map__132629__$1,nodes,connections_by_node,node_scale))
,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.comp.call(null,connections_by_node,new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.vals.call(null,nodes)))));
});
dynomics.space.core.set_curve_type = (function dynomics$space$core$set_curve_type(type_id){
return (function (p__132708){
var map__132709 = p__132708;
var map__132709__$1 = ((((!((map__132709 == null)))?((((map__132709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132709):map__132709);
var state = map__132709__$1;
var map__132710 = cljs.core.get.call(null,map__132709__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__132710__$1 = ((((!((map__132710 == null)))?((((map__132710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132710):map__132710);
var sc = cljs.core.get.call(null,map__132710__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
cljs.core.println.call(null,"set curve type",type_id,sc);

return cljs.core.reduce.call(null,((function (map__132709,map__132709__$1,state,map__132710,map__132710__$1,sc){
return (function (r,p__132715){
var vec__132716 = p__132715;
var _ = cljs.core.nth.call(null,vec__132716,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__132716,(1),null);
var curve_id = cljs.core.nth.call(null,vec__132716,(2),null);
return cljs.core.assoc_in.call(null,r,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curve-types","curve-types",1650772099),curve_id], null),type_id);
});})(map__132709,map__132709__$1,state,map__132710,map__132710__$1,sc))
,state,sc);
});
});
/**
 * Returns the given state with the map of which nodes
 *   belong to which curves updated with the curve of the
 *   given curve-id
 */
dynomics.space.core.update_curves_by_node = (function dynomics$space$core$update_curves_by_node(var_args){
var args132733 = [];
var len__36494__auto___132747 = arguments.length;
var i__36495__auto___132748 = (0);
while(true){
if((i__36495__auto___132748 < len__36494__auto___132747)){
args132733.push((arguments[i__36495__auto___132748]));

var G__132753 = (i__36495__auto___132748 + (1));
i__36495__auto___132748 = G__132753;
continue;
} else {
}
break;
}

var G__132739 = args132733.length;
switch (G__132739) {
case 2:
return dynomics.space.core.update_curves_by_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dynomics.space.core.update_curves_by_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args132733.length)].join('')));

}
});

dynomics.space.core.update_curves_by_node.cljs$core$IFn$_invoke$arity$2 = (function (state,curve_id){
return dynomics.space.core.update_curves_by_node.call(null,state,cljs.core.map.call(null,cljs.core.first,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),curve_id], null))),curve_id);
});

dynomics.space.core.update_curves_by_node.cljs$core$IFn$_invoke$arity$3 = (function (state,node_ids,curve_id){
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.update_in),state,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves-by-node","curves-by-node",217276582)], null)),node_ids),cljs.core.repeat.call(null,(function (cbn){
return cljs.core.conj.call(null,(function (){var or__35425__auto__ = cbn;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
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
dynomics.space.core.add_nodes_between_selected_nodes = (function dynomics$space$core$add_nodes_between_selected_nodes(p__132767){
var map__132780 = p__132767;
var map__132780__$1 = ((((!((map__132780 == null)))?((((map__132780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132780):map__132780);
var state = map__132780__$1;
var map__132781 = cljs.core.get.call(null,map__132780__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__132781__$1 = ((((!((map__132781 == null)))?((((map__132781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132781):map__132781);
var curves = cljs.core.get.call(null,map__132781__$1,new cljs.core.Keyword(null,"curves","curves",-510805378));
var curves_by_node = cljs.core.get.call(null,map__132781__$1,new cljs.core.Keyword(null,"curves-by-node","curves-by-node",217276582));
var selected_nodes = cljs.core.get.call(null,map__132781__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
if(((2) === cljs.core.count.call(null,selected_nodes))){
var vec__132790 = selected_nodes;
var vec__132791 = cljs.core.nth.call(null,vec__132790,(0),null);
var _ = cljs.core.nth.call(null,vec__132791,(0),null);
var n1 = cljs.core.nth.call(null,vec__132791,(1),null);
var vec__132792 = cljs.core.nth.call(null,vec__132790,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__132792,(0),null);
var n2 = cljs.core.nth.call(null,vec__132792,(1),null);
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
return cljs.core.update_in.call(null,cljs.core.reduce.call(null,(function (r,p__132830){
var vec__132831 = p__132830;
var id = cljs.core.nth.call(null,vec__132831,(0),null);
var _ = cljs.core.nth.call(null,vec__132831,(1),null);
return cljs.core.update_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (vec__132831,id,_){
return (function (sn){
var path__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
if(cljs.core.truth_(sn.call(null,path__$1))){
return cljs.core.disj.call(null,sn,path__$1);
} else {
return cljs.core.conj.call(null,sn,path__$1);
}
});})(vec__132831,id,_))
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
return cljs.core.update_in.call(null,cljs.core.reduce.call(null,(function (r,p__132851){
var vec__132852 = p__132851;
var id = cljs.core.nth.call(null,vec__132852,(0),null);
var _ = cljs.core.nth.call(null,vec__132852,(1),null);
return cljs.core.update_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (vec__132852,id,_){
return (function (sn){
var path__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
return cljs.core.disj.call(null,sn,path__$1);
});})(vec__132852,id,_))
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
var args132864 = [];
var len__36494__auto___132880 = arguments.length;
var i__36495__auto___132881 = (0);
while(true){
if((i__36495__auto___132881 < len__36494__auto___132880)){
args132864.push((arguments[i__36495__auto___132881]));

var G__132882 = (i__36495__auto___132881 + (1));
i__36495__auto___132881 = G__132882;
continue;
} else {
}
break;
}

var G__132866 = args132864.length;
switch (G__132866) {
case 2:
return dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args132864.length)].join('')));

}
});

dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$2 = (function (state,points){
return dynomics.space.core.add_curve.call(null,state,points,dynomics.space.core.make_new_id.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378)], null))));
});

dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$3 = (function (p__132867,points,curve_id){
var map__132868 = p__132867;
var map__132868__$1 = ((((!((map__132868 == null)))?((((map__132868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132868):map__132868);
var state = map__132868__$1;
var map__132869 = cljs.core.get.call(null,map__132868__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__132869__$1 = ((((!((map__132869 == null)))?((((map__132869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132869):map__132869);
var scale = cljs.core.get.call(null,map__132869__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
return dynomics.space.core.update_curves_by_node.call(null,cljs.core.reduce.call(null,((function (map__132868,map__132868__$1,state,map__132869,map__132869__$1,scale){
return (function (r,p__132872){
var vec__132873 = p__132872;
var p = cljs.core.nth.call(null,vec__132873,(0),null);
var control_points = cljs.core.nth.call(null,vec__132873,(1),null);
var map__132874 = dynomics.space.core.add_node.call(null,r,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),p,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.vec.call(null,cljs.core.map.call(null,((function (vec__132873,p,control_points,map__132868,map__132868__$1,state,map__132869,map__132869__$1,scale){
return (function (q,i){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.map.call(null,cljs.core._,p,q),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"id","id",-1388402092),i], null);
});})(vec__132873,p,control_points,map__132868,map__132868__$1,state,map__132869,map__132869__$1,scale))
,control_points,cljs.core.range.call(null)))], null));
var map__132874__$1 = ((((!((map__132874 == null)))?((((map__132874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132874):map__132874);
var r__$1 = map__132874__$1;
var id = cljs.core.get.call(null,map__132874__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return cljs.core.update_in.call(null,r__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),curve_id], null),((function (map__132874,map__132874__$1,r__$1,id,vec__132873,p,control_points,map__132868,map__132868__$1,state,map__132869,map__132869__$1,scale){
return (function (curve){
return cljs.core.conj.call(null,(function (){var or__35425__auto__ = curve;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.vec.call(null,cljs.core.range.call(null,cljs.core.count.call(null,control_points)))], null));
});})(map__132874,map__132874__$1,r__$1,id,vec__132873,p,control_points,map__132868,map__132868__$1,state,map__132869,map__132869__$1,scale))
);
});})(map__132868,map__132868__$1,state,map__132869,map__132869__$1,scale))
,state,cljs.core.map.call(null,cljs.core.vector,dynomics.space.core.midpoints.call(null,points),cljs.core.map.call(null,((function (map__132868,map__132868__$1,state,map__132869,map__132869__$1,scale){
return (function (p__132878){
var vec__132879 = p__132878;
var p1 = cljs.core.nth.call(null,vec__132879,(0),null);
var p2 = cljs.core.nth.call(null,vec__132879,(1),null);
return cljs.core.reverse.call(null,dynomics.space.core.move_along.call(null,0.8,p1,p2));
});})(map__132868,map__132868__$1,state,map__132869,map__132869__$1,scale))
,cljs.core.partition.call(null,(2),(1),points)))),curve_id);
});

dynomics.space.core.add_curve.cljs$lang$maxFixedArity = 3;
dynomics.space.core.add_curves = (function dynomics$space$core$add_curves(state,curves){
return cljs.core.reduce.call(null,dynomics.space.core.add_curve,state,curves);
});
dynomics.space.core.merge_selected_curves = (function dynomics$space$core$merge_selected_curves(p__132900){
var map__132905 = p__132900;
var map__132905__$1 = ((((!((map__132905 == null)))?((((map__132905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132905):map__132905);
var state = map__132905__$1;
var map__132906 = cljs.core.get.call(null,map__132905__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__132906__$1 = ((((!((map__132906 == null)))?((((map__132906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132906):map__132906);
var nodes = cljs.core.get.call(null,map__132906__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_curves = cljs.core.get.call(null,map__132906__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
var curves = cljs.core.get.call(null,map__132906__$1,new cljs.core.Keyword(null,"curves","curves",-510805378));
return null;
});
/**
 * Returns the given state with its
 *   2 selected nodes joined by a curve with
 *   1 intermediate point
 */
dynomics.space.core.add_curve_between_nodes = (function dynomics$space$core$add_curve_between_nodes(var_args){
var args132911 = [];
var len__36494__auto___132933 = arguments.length;
var i__36495__auto___132934 = (0);
while(true){
if((i__36495__auto___132934 < len__36494__auto___132933)){
args132911.push((arguments[i__36495__auto___132934]));

var G__132935 = (i__36495__auto___132934 + (1));
i__36495__auto___132934 = G__132935;
continue;
} else {
}
break;
}

var G__132914 = args132911.length;
switch (G__132914) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args132911.length)].join('')));

}
});

dynomics.space.core.add_curve_between_nodes.cljs$core$IFn$_invoke$arity$1 = (function (p__132915){
var map__132916 = p__132915;
var map__132916__$1 = ((((!((map__132916 == null)))?((((map__132916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132916):map__132916);
var state = map__132916__$1;
var map__132917 = cljs.core.get.call(null,map__132916__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__132917__$1 = ((((!((map__132917 == null)))?((((map__132917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132917):map__132917);
var nodes = cljs.core.get.call(null,map__132917__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__132917__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
if((((2) === cljs.core.count.call(null,selected_nodes))) && (cljs.core.every_QMARK_.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"connection","connection",-123599300)),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.partial.call(null,cljs.core.get_in,state)),selected_nodes))){
return dynomics.space.core.add_curve_between_nodes.call(null,state,nodes,cljs.core.vec.call(null,selected_nodes));
} else {
return state;
}
});

dynomics.space.core.add_curve_between_nodes.cljs$core$IFn$_invoke$arity$3 = (function (state,nodes,edge){
return dynomics.space.core.add_curve_between_nodes.call(null,state,nodes,edge,dynomics.space.core.edge_points.call(null,nodes,edge),dynomics.space.core.make_new_id.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378)], null))));
});

dynomics.space.core.add_curve_between_nodes.cljs$core$IFn$_invoke$arity$5 = (function (state,nodes,edge,p__132920,curve_id){
var map__132921 = p__132920;
var map__132921__$1 = ((((!((map__132921 == null)))?((((map__132921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132921):map__132921);
var vec__132922 = cljs.core.get.call(null,map__132921__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var _ = cljs.core.nth.call(null,vec__132922,(0),null);
var p1 = cljs.core.nth.call(null,vec__132922,(1),null);
var p2 = cljs.core.nth.call(null,vec__132922,(2),null);
var vec__132923 = cljs.core.nth.call(null,vec__132922,(3),null);
var x1 = cljs.core.nth.call(null,vec__132923,(0),null);
var x2 = cljs.core.nth.call(null,vec__132923,(1),null);
var vec__132924 = cljs.core.nth.call(null,vec__132922,(4),null);
var y1 = cljs.core.nth.call(null,vec__132924,(0),null);
var y2 = cljs.core.nth.call(null,vec__132924,(1),null);
var vec__132925 = cljs.core.get.call(null,map__132921__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var vec__132926 = cljs.core.nth.call(null,vec__132925,(0),null);
var nid1 = cljs.core.nth.call(null,vec__132926,(0),null);
var cid1 = cljs.core.nth.call(null,vec__132926,(1),null);
var vec__132927 = cljs.core.nth.call(null,vec__132925,(1),null);
var nid2 = cljs.core.nth.call(null,vec__132927,(0),null);
var cid2 = cljs.core.nth.call(null,vec__132927,(1),null);
var ends = cljs.core.map.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null));
var ends_ns = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.count,new cljs.core.Keyword(null,"connections","connections",-2064090887)),ends);
var mp = cljs.core.first.call(null,dynomics.space.core.midpoints.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null)));
var mpcp = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.partial.call(null,cljs.core._STAR_,0.05)),dynomics.space.core.nearest_connection,cljs.core.partial.call(null,cljs.core.map,cljs.core._,mp)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2,p1], null));
var map__132929 = dynomics.space.core.add_node.call(null,state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),mp,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.vec.call(null,cljs.core.map.call(null,((function (ends,ends_ns,mp,mpcp,map__132921,map__132921__$1,vec__132922,_,p1,p2,vec__132923,x1,x2,vec__132924,y1,y2,vec__132925,vec__132926,nid1,cid1,vec__132927,nid2,cid2){
return (function (q,id){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),q,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
});})(ends,ends_ns,mp,mpcp,map__132921,map__132921__$1,vec__132922,_,p1,p2,vec__132923,x1,x2,vec__132924,y1,y2,vec__132925,vec__132926,nid1,cid1,vec__132927,nid2,cid2))
,mpcp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)))], null));
var map__132929__$1 = ((((!((map__132929 == null)))?((((map__132929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132929):map__132929);
var r = map__132929__$1;
var mpid = cljs.core.get.call(null,map__132929__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return dynomics.space.core.deselect_all.call(null,dynomics.space.core.update_curves_by_node.call(null,cljs.core.reduce.call(null,((function (ends,ends_ns,mp,mpcp,map__132929,map__132929__$1,r,mpid,map__132921,map__132921__$1,vec__132922,_,p1,p2,vec__132923,x1,x2,vec__132924,y1,y2,vec__132925,vec__132926,nid1,cid1,vec__132927,nid2,cid2){
return (function (r__$1,p__132931){
var vec__132932 = p__132931;
var id = cljs.core.nth.call(null,vec__132932,(0),null);
var cp = cljs.core.nth.call(null,vec__132932,(1),null);
return cljs.core.update_in.call(null,r__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),curve_id], null),((function (vec__132932,id,cp,ends,ends_ns,mp,mpcp,map__132929,map__132929__$1,r,mpid,map__132921,map__132921__$1,vec__132922,_,p1,p2,vec__132923,x1,x2,vec__132924,y1,y2,vec__132925,vec__132926,nid1,cid1,vec__132927,nid2,cid2){
return (function (curve){
return cljs.core.conj.call(null,(function (){var or__35425__auto__ = curve;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cp], null));
});})(vec__132932,id,cp,ends,ends_ns,mp,mpcp,map__132929,map__132929__$1,r,mpid,map__132921,map__132921__$1,vec__132922,_,p1,p2,vec__132923,x1,x2,vec__132924,y1,y2,vec__132925,vec__132926,nid1,cid1,vec__132927,nid2,cid2))
);
});})(ends,ends_ns,mp,mpcp,map__132929,map__132929__$1,r,mpid,map__132921,map__132921__$1,vec__132922,_,p1,p2,vec__132923,x1,x2,vec__132924,y1,y2,vec__132925,vec__132926,nid1,cid1,vec__132927,nid2,cid2))
,r,cljs.core.map.call(null,cljs.core.vector,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,mpid,nid2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.core.twin.call(null,cid1,cljs.core.first.call(null,ends_ns)),cid1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cid2,dynomics.space.core.twin.call(null,cid2,cljs.core.last.call(null,ends_ns))], null)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,mpid,nid2], null),curve_id));
});

dynomics.space.core.add_curve_between_nodes.cljs$lang$maxFixedArity = 5;
/**
 * Removes the selected nodes and their edges
 */
dynomics.space.core.remove_selected_nodes = (function dynomics$space$core$remove_selected_nodes(p__132942){
var map__132947 = p__132942;
var map__132947__$1 = ((((!((map__132947 == null)))?((((map__132947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132947):map__132947);
var state = map__132947__$1;
var map__132948 = cljs.core.get.call(null,map__132947__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__132948__$1 = ((((!((map__132948 == null)))?((((map__132948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132948):map__132948);
var selected_nodes = cljs.core.get.call(null,map__132948__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Remove ",selected_nodes);

return dynomics.space.core.add_connections_by_node.call(null,dynomics.space.core.update_compatibility_info.call(null,cljs.core.reduce.call(null,dynomics.space.core.remove_node_from_curves,dynomics.space.core.remove_edges.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),((function (map__132947,map__132947__$1,state,map__132948,map__132948__$1,selected_nodes){
return (function (nodes){
return cljs.core.apply.call(null,cljs.core.dissoc,nodes,cljs.core.map.call(null,cljs.core.last,selected_nodes));
});})(map__132947,map__132947__$1,state,map__132948,map__132948__$1,selected_nodes))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__132947,map__132947__$1,state,map__132948,map__132948__$1,selected_nodes){
return (function (g){
return loom.graph.remove_nodes.call(null,g,selected_nodes);
});})(map__132947,map__132947__$1,state,map__132948,map__132948__$1,selected_nodes))
),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"description","description",-1428560544),"Remove nodes"], null))),cljs.core.map.call(null,cljs.core.last,selected_nodes))));
});
dynomics.space.core.remove_selected = (function dynomics$space$core$remove_selected(p__132952){
var map__132957 = p__132952;
var map__132957__$1 = ((((!((map__132957 == null)))?((((map__132957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132957):map__132957);
var state = map__132957__$1;
var map__132958 = cljs.core.get.call(null,map__132957__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__132958__$1 = ((((!((map__132958 == null)))?((((map__132958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132958):map__132958);
var selected_nodes = cljs.core.get.call(null,map__132958__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var selected_curves = cljs.core.get.call(null,map__132958__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
return cljs.core.update_in.call(null,dynomics.space.core.remove_selected_nodes.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378)], null),((function (map__132957,map__132957__$1,state,map__132958,map__132958__$1,selected_nodes,selected_curves){
return (function (curves){
return cljs.core.apply.call(null,cljs.core.dissoc,curves,cljs.core.map.call(null,cljs.core.last,selected_curves));
});})(map__132957,map__132957__$1,state,map__132958,map__132958__$1,selected_nodes,selected_curves))
);
});
