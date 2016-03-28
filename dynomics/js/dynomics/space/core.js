// Compiled by ClojureScript 1.8.34 {}
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
var x__35522__auto__ = x;
var y__35523__auto__ = (-1);
return ((x__35522__auto__ > y__35523__auto__) ? x__35522__auto__ : y__35523__auto__);
} else {
var x__35529__auto__ = x;
var y__35530__auto__ = (1);
return ((x__35529__auto__ < y__35530__auto__) ? x__35529__auto__ : y__35530__auto__);
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
dynomics.space.core.angle = (function dynomics$space$core$angle(p__455543){
var vec__455545 = p__455543;
var x = cljs.core.nth.call(null,vec__455545,(0),null);
var y = cljs.core.nth.call(null,vec__455545,(1),null);
return Math.atan2(x,y);
});
dynomics.space.core.p2c = (function dynomics$space$core$p2c(p__455559){
var vec__455562 = p__455559;
var r = cljs.core.nth.call(null,vec__455562,(0),null);
var theta = cljs.core.nth.call(null,vec__455562,(1),null);
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,r),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.core.cos.call(null,theta),dynomics.space.core.sin.call(null,theta)], null));
});
dynomics.space.core.c_STAR_ = (function dynomics$space$core$c_STAR_(p__455572,p__455573){
var vec__455580 = p__455572;
var ar = cljs.core.nth.call(null,vec__455580,(0),null);
var ai = cljs.core.nth.call(null,vec__455580,(1),null);
var vec__455581 = p__455573;
var br = cljs.core.nth.call(null,vec__455581,(0),null);
var bi = cljs.core.nth.call(null,vec__455581,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((ar * br) - (ai * bi)),((ai * br) + (ar * bi))], null);
});
dynomics.space.core.c_PLUS_ = (function dynomics$space$core$c_PLUS_(a,b){
return cljs.core.map.call(null,cljs.core._PLUS_,a,b);
});
dynomics.space.core.twin = (function dynomics$space$core$twin(id,n){
return cljs.core.mod.call(null,(id + (n / (2))),n);
});
dynomics.space.core.midpoints = (function dynomics$space$core$midpoints(points){
return cljs.core.map.call(null,(function (p__455622){
var vec__455623 = p__455622;
var p1 = cljs.core.nth.call(null,vec__455623,(0),null);
var p2 = cljs.core.nth.call(null,vec__455623,(1),null);
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,0.5),cljs.core.map.call(null,cljs.core._PLUS_,p1,p2));
}),cljs.core.partition.call(null,(2),(1),points));
});
dynomics.space.core.move_along = (function dynomics$space$core$move_along(s,p1,p2){
var v = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,s),cljs.core.map.call(null,cljs.core._,p1,p2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,v,p2)),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._,p1,v))], null);
});
dynomics.space.core.dot = (function dynomics$space$core$dot(var_args){
var args__36267__auto__ = [];
var len__36260__auto___455643 = arguments.length;
var i__36261__auto___455644 = (0);
while(true){
if((i__36261__auto___455644 < len__36260__auto___455643)){
args__36267__auto__.push((arguments[i__36261__auto___455644]));

var G__455646 = (i__36261__auto___455644 + (1));
i__36261__auto___455644 = G__455646;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((0) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((0)),(0),null)):null);
return dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic(argseq__36268__auto__);
});

dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic = (function (x){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.apply.call(null,cljs.core.map,cljs.core._STAR_,x));
});

dynomics.space.core.dot.cljs$lang$maxFixedArity = (0);

dynomics.space.core.dot.cljs$lang$applyTo = (function (seq455638){
return dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq455638));
});
dynomics.space.core.sqrd = (function dynomics$space$core$sqrd(var_args){
var args455651 = [];
var len__36260__auto___455660 = arguments.length;
var i__36261__auto___455661 = (0);
while(true){
if((i__36261__auto___455661 < len__36260__auto___455660)){
args455651.push((arguments[i__36261__auto___455661]));

var G__455666 = (i__36261__auto___455661 + (1));
i__36261__auto___455661 = G__455666;
continue;
} else {
}
break;
}

var G__455655 = args455651.length;
switch (G__455655) {
case 2:
return dynomics.space.core.sqrd.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dynomics.space.core.sqrd.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args455651.length)].join('')));

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
var args455686 = [];
var len__36260__auto___455713 = arguments.length;
var i__36261__auto___455714 = (0);
while(true){
if((i__36261__auto___455714 < len__36260__auto___455713)){
args455686.push((arguments[i__36261__auto___455714]));

var G__455716 = (i__36261__auto___455714 + (1));
i__36261__auto___455714 = G__455716;
continue;
} else {
}
break;
}

var G__455697 = args455686.length;
switch (G__455697) {
case 3:
return dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args455686.length)].join('')));

}
});

dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$3 = (function (p__455698,path,p__455699){
var vec__455700 = p__455698;
var x = cljs.core.nth.call(null,vec__455700,(0),null);
var y = cljs.core.nth.call(null,vec__455700,(1),null);
var map__455701 = p__455699;
var map__455701__$1 = ((((!((map__455701 == null)))?((((map__455701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__455701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__455701):map__455701);
var space = map__455701__$1;
var scale = cljs.core.get.call(null,map__455701__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var vec__455703 = path;
var _ = cljs.core.nth.call(null,vec__455703,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__455703,(1),null);
var nid = cljs.core.nth.call(null,vec__455703,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__455703,(3),null);
var cid = cljs.core.nth.call(null,vec__455703,(4),null);
var vec__455704 = cljs.core.get_in.call(null,space,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx = cljs.core.nth.call(null,vec__455704,(0),null);
var ny = cljs.core.nth.call(null,vec__455704,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - nx),(y - ny)], null)], null)], null);
});

dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$2 = (function (p__455705,scale){
var vec__455706 = p__455705;
var vec__455707 = cljs.core.nth.call(null,vec__455706,(0),null);
var x = cljs.core.nth.call(null,vec__455707,(0),null);
var y = cljs.core.nth.call(null,vec__455707,(1),null);
var vec__455708 = cljs.core.nth.call(null,vec__455706,(1),null);
var nx = cljs.core.nth.call(null,vec__455708,(0),null);
var ny = cljs.core.nth.call(null,vec__455708,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - nx),(y - ny)], null);
});

dynomics.space.core.to_space.cljs$lang$maxFixedArity = 3;
dynomics.space.core.to_local = (function dynomics$space$core$to_local(scale,p__455731,p__455732){
var vec__455735 = p__455731;
var x = cljs.core.nth.call(null,vec__455735,(0),null);
var y = cljs.core.nth.call(null,vec__455735,(1),null);
var vec__455736 = p__455732;
var lx = cljs.core.nth.call(null,vec__455736,(0),null);
var ly = cljs.core.nth.call(null,vec__455736,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(scale * (x - lx)),(scale * (y - ly))], null);
});
/**
 * Returns the pair of control points with
 *   mirrored positions for the given control point
 */
dynomics.space.core.mirror_node = (function dynomics$space$core$mirror_node(p__455752,path,p__455753){
var vec__455771 = p__455752;
var x = cljs.core.nth.call(null,vec__455771,(0),null);
var y = cljs.core.nth.call(null,vec__455771,(1),null);
var map__455772 = p__455753;
var map__455772__$1 = ((((!((map__455772 == null)))?((((map__455772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__455772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__455772):map__455772);
var space = map__455772__$1;
var nodes = cljs.core.get.call(null,map__455772__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var node_scale = cljs.core.get.call(null,map__455772__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var vec__455780 = path;
var _ = cljs.core.nth.call(null,vec__455780,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__455780,(1),null);
var nid = cljs.core.nth.call(null,vec__455780,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__455780,(3),null);
var cid = cljs.core.nth.call(null,vec__455780,(4),null);
var nc = cljs.core.count.call(null,cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"connections","connections",-2064090887)], null)));
var cp = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.mod.call(null,(cid + (0.5 * nc)),nc)], null);
var vec__455781 = cljs.core.get_in.call(null,space,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx = cljs.core.nth.call(null,vec__455781,(0),null);
var ny = cljs.core.nth.call(null,vec__455781,(1),null);
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
dynomics.space.core.quadrants_types_by_position = (function dynomics$space$core$quadrants_types_by_position(p__455894){
var map__455902 = p__455894;
var map__455902__$1 = ((((!((map__455902 == null)))?((((map__455902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__455902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__455902):map__455902);
var r1 = cljs.core.get.call(null,map__455902__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var p1 = cljs.core.get.call(null,map__455902__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.map.call(null,((function (map__455902,map__455902__$1,r1,p1){
return (function (i){
return cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295)], null));
});})(map__455902,map__455902__$1,r1,p1))
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
dynomics.space.core.default_connections = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__455962){
var vec__455963 = p__455962;
var p = cljs.core.nth.call(null,vec__455963,(0),null);
var id = cljs.core.nth.call(null,vec__455963,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,0.08),p),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connection","connection",-123599300)], null);
}),dynomics.space.core.connections_by_vector));
/**
 * Returns a node of the given type
 */
dynomics.space.core.make_intersection_node = (function dynomics$space$core$make_intersection_node(var_args){
var args455966 = [];
var len__36260__auto___455976 = arguments.length;
var i__36261__auto___455977 = (0);
while(true){
if((i__36261__auto___455977 < len__36260__auto___455976)){
args455966.push((arguments[i__36261__auto___455977]));

var G__455979 = (i__36261__auto___455977 + (1));
i__36261__auto___455977 = G__455979;
continue;
} else {
}
break;
}

var G__455972 = args455966.length;
switch (G__455972) {
case 1:
return dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args455966.length)].join('')));

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
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p__455991){
var vec__455992 = p__455991;
var _ = cljs.core.nth.call(null,vec__455992,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__455992,(1),null);
var id = cljs.core.nth.call(null,vec__455992,(2),null);
return id;
}),nodes));
});
dynomics.space.core.quadrant_info = (function dynomics$space$core$quadrant_info(nodes,p__455997){
var vec__456001 = p__455997;
var _ = cljs.core.nth.call(null,vec__456001,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__456001,(1),null);
var nid = cljs.core.nth.call(null,vec__456001,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__456001,(3),null);
var cid = cljs.core.nth.call(null,vec__456001,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node-type","node-type",129492462),cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"node-type","node-type",129492462)], null)),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid,new cljs.core.Keyword(null,"position","position",-2011731912)], null))], null);
});
/**
 * 
 *   Returns the given state with a map of node-node compatibilities added,
 *   of the form {[nodeid1 nodeid2] true [nodeid4 nodeid5] false}
 *   
 */
dynomics.space.core.add_compatibility_info = (function dynomics$space$core$add_compatibility_info(p__456010){
var map__456020 = p__456010;
var map__456020__$1 = ((((!((map__456020 == null)))?((((map__456020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456020):map__456020);
var state = map__456020__$1;
var map__456021 = cljs.core.get.call(null,map__456020__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__456021__$1 = ((((!((map__456021 == null)))?((((map__456021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456021):map__456021);
var nodes = cljs.core.get.call(null,map__456021__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__456021__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
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
dynomics.space.core.add_connections_by_node = (function dynomics$space$core$add_connections_by_node(p__456044){
var map__456050 = p__456044;
var map__456050__$1 = ((((!((map__456050 == null)))?((((map__456050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456050):map__456050);
var state = map__456050__$1;
var map__456051 = cljs.core.get.call(null,map__456050__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__456051__$1 = ((((!((map__456051 == null)))?((((map__456051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456051):map__456051);
var nodes = cljs.core.get.call(null,map__456051__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__456051__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var graph = cljs.core.get.call(null,map__456051__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
cljs.core.println.call(null,"  acbn nodes ",cljs.core.count.call(null,loom.graph.nodes.call(null,graph)));

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"connections-by-node","connections-by-node",517626909)], null),cljs.core.zipmap.call(null,cljs.core.keys.call(null,nodes),cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.connections_of_node,graph,edges),cljs.core.keys.call(null,nodes))));
});
/**
 * Following a node-type change, update the
 *   compatibility info for its connections
 */
dynomics.space.core.update_compatibility_info = (function dynomics$space$core$update_compatibility_info(var_args){
var args456055 = [];
var len__36260__auto___456073 = arguments.length;
var i__36261__auto___456074 = (0);
while(true){
if((i__36261__auto___456074 < len__36260__auto___456073)){
args456055.push((arguments[i__36261__auto___456074]));

var G__456075 = (i__36261__auto___456074 + (1));
i__36261__auto___456074 = G__456075;
continue;
} else {
}
break;
}

var G__456058 = args456055.length;
switch (G__456058) {
case 1:
return dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args456055.length)].join('')));

}
});

dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$1 = (function (p__456061){
var map__456062 = p__456061;
var map__456062__$1 = ((((!((map__456062 == null)))?((((map__456062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456062):map__456062);
var state = map__456062__$1;
var map__456063 = cljs.core.get.call(null,map__456062__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__456063__$1 = ((((!((map__456063 == null)))?((((map__456063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456063):map__456063);
var selected_nodes = cljs.core.get.call(null,map__456063__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,dynomics.space.core.update_compatibility_info,state,dynomics.space.core.just_ids.call(null,selected_nodes));
});

dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$2 = (function (p__456068,id){
var map__456069 = p__456068;
var map__456069__$1 = ((((!((map__456069 == null)))?((((map__456069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456069):map__456069);
var state = map__456069__$1;
var map__456070 = cljs.core.get.call(null,map__456069__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__456070__$1 = ((((!((map__456070 == null)))?((((map__456070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456070):map__456070);
var graph = cljs.core.get.call(null,map__456070__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var edges = cljs.core.get.call(null,map__456070__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var nodes = cljs.core.get.call(null,map__456070__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return cljs.core.reduce.call(null,((function (map__456069,map__456069__$1,state,map__456070,map__456070__$1,graph,edges,nodes){
return (function (s,edge){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024),dynomics.space.core.just_ids.call(null,edge)], null),dynomics.space.core.compare_quadrants.call(null,cljs.core.map.call(null,dynomics.space.core.quadrants_types_by_position,cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.quadrant_info,nodes),edge))));
});})(map__456069,map__456069__$1,state,map__456070,map__456070__$1,graph,edges,nodes))
,state,dynomics.space.core.connections_of_node.call(null,graph,edges,id));
});

dynomics.space.core.update_compatibility_info.cljs$lang$maxFixedArity = 2;
dynomics.space.core.make_new_id = (function dynomics$space$core$make_new_id(var_args){
var args456085 = [];
var len__36260__auto___456100 = arguments.length;
var i__36261__auto___456101 = (0);
while(true){
if((i__36261__auto___456101 < len__36260__auto___456100)){
args456085.push((arguments[i__36261__auto___456101]));

var G__456102 = (i__36261__auto___456101 + (1));
i__36261__auto___456101 = G__456102;
continue;
} else {
}
break;
}

var G__456094 = args456085.length;
switch (G__456094) {
case 1:
return dynomics.space.core.make_new_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.make_new_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args456085.length)].join('')));

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
var args456107 = [];
var len__36260__auto___456134 = arguments.length;
var i__36261__auto___456135 = (0);
while(true){
if((i__36261__auto___456135 < len__36260__auto___456134)){
args456107.push((arguments[i__36261__auto___456135]));

var G__456137 = (i__36261__auto___456135 + (1));
i__36261__auto___456135 = G__456137;
continue;
} else {
}
break;
}

var G__456110 = args456107.length;
switch (G__456110) {
case 1:
return dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args456107.length)].join('')));

}
});

dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$1 = (function (p__456111){
var map__456112 = p__456111;
var map__456112__$1 = ((((!((map__456112 == null)))?((((map__456112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456112):map__456112);
var state = map__456112__$1;
var map__456113 = cljs.core.get.call(null,map__456112__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__456113__$1 = ((((!((map__456113 == null)))?((((map__456113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456113):map__456113);
var nodes = cljs.core.get.call(null,map__456113__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var max_node_id = cljs.core.get.call(null,map__456113__$1,new cljs.core.Keyword(null,"max-node-id","max-node-id",-75074557));
var p = cljs.core.get.call(null,map__456112__$1,new cljs.core.Keyword(null,"node-position","node-position",-542959703));
var node_type = cljs.core.get.call(null,map__456112__$1,new cljs.core.Keyword(null,"selected-node-type","selected-node-type",-1717725489));
return dynomics.space.core.add_node.call(null,state,cljs.core.assoc.call(null,dynomics.space.core.make_intersection_node.call(null,(function (){var or__35191__auto__ = node_type;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return (3);
}
})()),new cljs.core.Keyword(null,"position","position",-2011731912),p));
});

dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$2 = (function (p__456120,p__456121){
var map__456122 = p__456120;
var map__456122__$1 = ((((!((map__456122 == null)))?((((map__456122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456122):map__456122);
var state = map__456122__$1;
var map__456123 = cljs.core.get.call(null,map__456122__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__456123__$1 = ((((!((map__456123 == null)))?((((map__456123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456123):map__456123);
var nodes = cljs.core.get.call(null,map__456123__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var max_node_id = cljs.core.get.call(null,map__456123__$1,new cljs.core.Keyword(null,"max-node-id","max-node-id",-75074557));
var selected_nodes = cljs.core.get.call(null,map__456123__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__456124 = p__456121;
var map__456124__$1 = ((((!((map__456124 == null)))?((((map__456124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456124):map__456124);
var new_node = map__456124__$1;
var new_id = cljs.core.get.call(null,map__456124__$1,new cljs.core.Keyword(null,"id","id",-1388402092),dynomics.space.core.make_new_id.call(null,nodes,max_node_id));
cljs.core.println.call(null,new_id,new_node);

return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new_id], null),cljs.core.assoc.call(null,new_node,new cljs.core.Keyword(null,"id","id",-1388402092),new_id)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__456122,map__456122__$1,state,map__456123,map__456123__$1,nodes,max_node_id,selected_nodes,map__456124,map__456124__$1,new_node,new_id){
return (function (g){
return loom.graph.add_nodes.call(null,g,new_id);
});})(map__456122,map__456122__$1,state,map__456123,map__456123__$1,nodes,max_node_id,selected_nodes,map__456124,map__456124__$1,new_node,new_id))
),new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673),new_id);
});

dynomics.space.core.add_node.cljs$lang$maxFixedArity = 2;
dynomics.space.core.deselect_all = (function dynomics$space$core$deselect_all(state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.PersistentHashSet.EMPTY);
});
dynomics.space.core.deactivate_all = (function dynomics$space$core$deactivate_all(state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891)], null),cljs.core.PersistentHashSet.EMPTY);
});
/**
 * Returns the state with the given edges removed
 */
dynomics.space.core.remove_edges = (function dynomics$space$core$remove_edges(p__456179){
var map__456194 = p__456179;
var map__456194__$1 = ((((!((map__456194 == null)))?((((map__456194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456194):map__456194);
var state = map__456194__$1;
var map__456195 = cljs.core.get.call(null,map__456194__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__456195__$1 = ((((!((map__456195 == null)))?((((map__456195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456195):map__456195);
var selected_nodes = cljs.core.get.call(null,map__456195__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),((function (map__456194,map__456194__$1,state,map__456195,map__456195__$1,selected_nodes){
return (function (edges){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,((function (map__456194,map__456194__$1,state,map__456195,map__456195__$1,selected_nodes){
return (function (p__456198){
var vec__456199 = p__456198;
var vec__456200 = cljs.core.nth.call(null,vec__456199,(0),null);
var _ = cljs.core.nth.call(null,vec__456200,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__456200,(1),null);
var nid1 = cljs.core.nth.call(null,vec__456200,(2),null);
var ___$2 = cljs.core.nthnext.call(null,vec__456200,(3));
var vec__456201 = cljs.core.nth.call(null,vec__456199,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__456201,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__456201,(1),null);
var nid2 = cljs.core.nth.call(null,vec__456201,(2),null);
var ___$5 = cljs.core.nthnext.call(null,vec__456201,(3));
var or__35191__auto__ = selected_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid1], null));
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return selected_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid2], null));
}
});})(map__456194,map__456194__$1,state,map__456195,map__456195__$1,selected_nodes))
,edges));
});})(map__456194,map__456194__$1,state,map__456195,map__456195__$1,selected_nodes))
);
});
dynomics.space.core.add_graph = (function dynomics$space$core$add_graph(p__456226){
var map__456229 = p__456226;
var map__456229__$1 = ((((!((map__456229 == null)))?((((map__456229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456229):map__456229);
var space = map__456229__$1;
var edges = cljs.core.get.call(null,map__456229__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return cljs.core.assoc.call(null,space,new cljs.core.Keyword(null,"graph","graph",1558099509),cljs.core.apply.call(null,loom.graph.graph,dynomics.space.graph.simplify_edges.call(null,edges)));
});
dynomics.space.core.update_ds = (function dynomics$space$core$update_ds(p__456235){
var map__456238 = p__456235;
var map__456238__$1 = ((((!((map__456238 == null)))?((((map__456238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456238):map__456238);
var s = map__456238__$1;
var f = cljs.core.get.call(null,map__456238__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),((function (map__456238,map__456238__$1,s,f){
return (function (points){
return cljs.core.map.call(null,f,points);
});})(map__456238,map__456238__$1,s,f))
);
});
dynomics.space.core.random_points = (function dynomics$space$core$random_points(n){
return cljs.core.repeatedly.call(null,n,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.call(null),cljs.core.rand.call(null)], null);
}));
});
dynomics.space.core.make_ds = (function dynomics$space$core$make_ds(var_args){
var args456249 = [];
var len__36260__auto___456260 = arguments.length;
var i__36261__auto___456261 = (0);
while(true){
if((i__36261__auto___456261 < len__36260__auto___456260)){
args456249.push((arguments[i__36261__auto___456261]));

var G__456262 = (i__36261__auto___456261 + (1));
i__36261__auto___456261 = G__456262;
continue;
} else {
}
break;
}

var G__456259 = args456249.length;
switch (G__456259) {
case 0:
return dynomics.space.core.make_ds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.space.core.make_ds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args456249.length)].join('')));

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
var args456265 = [];
var len__36260__auto___456273 = arguments.length;
var i__36261__auto___456274 = (0);
while(true){
if((i__36261__auto___456274 < len__36260__auto___456273)){
args456265.push((arguments[i__36261__auto___456274]));

var G__456276 = (i__36261__auto___456274 + (1));
i__36261__auto___456274 = G__456276;
continue;
} else {
}
break;
}

var G__456269 = args456265.length;
switch (G__456269) {
case 3:
return dynomics.space.core.ds_evolution.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.space.core.ds_evolution.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args456265.length)].join('')));

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
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__456315){
var vec__456316 = p__456315;
var x = cljs.core.nth.call(null,vec__456316,(0),null);
var y = cljs.core.nth.call(null,vec__456316,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((-1) * x),y], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-12)], null)], null)], null));
});
dynomics.space.core.saddle_3 = (function dynomics$space$core$saddle_3(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__456326){
var vec__456327 = p__456326;
var x = cljs.core.nth.call(null,vec__456327,(0),null);
var y = cljs.core.nth.call(null,vec__456327,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((-1) * y)], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(-24)], null)], null)], null));
});
dynomics.space.core.saddle_4 = (function dynomics$space$core$saddle_4(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__456336){
var vec__456337 = p__456336;
var x = cljs.core.nth.call(null,vec__456337,(0),null);
var y = cljs.core.nth.call(null,vec__456337,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(-8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(-16)], null)], null)], null));
});
dynomics.space.core.saddle_5 = (function dynomics$space$core$saddle_5(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__456352){
var vec__456353 = p__456352;
var x = cljs.core.nth.call(null,vec__456353,(0),null);
var y = cljs.core.nth.call(null,vec__456353,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.04,-0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(-8)], null)], null)], null));
});
dynomics.space.core.spiral = (function dynomics$space$core$spiral(var_args){
var args456366 = [];
var len__36260__auto___456391 = arguments.length;
var i__36261__auto___456392 = (0);
while(true){
if((i__36261__auto___456392 < len__36260__auto___456391)){
args456366.push((arguments[i__36261__auto___456392]));

var G__456393 = (i__36261__auto___456392 + (1));
i__36261__auto___456392 = G__456393;
continue;
} else {
}
break;
}

var G__456381 = args456366.length;
switch (G__456381) {
case 3:
return dynomics.space.core.spiral.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return dynomics.space.core.spiral.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args456366.length)].join('')));

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
dynomics.space.core.connect_pair = (function dynomics$space$core$connect_pair(p__456418){
var map__456435 = p__456418;
var map__456435__$1 = ((((!((map__456435 == null)))?((((map__456435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456435):map__456435);
var state = map__456435__$1;
var map__456436 = cljs.core.get.call(null,map__456435__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__456436__$1 = ((((!((map__456436 == null)))?((((map__456436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456436):map__456436);
var nodes = cljs.core.get.call(null,map__456436__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__456436__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Connect ",selected_nodes);

if(((2) === cljs.core.count.call(null,selected_nodes))){
return dynomics.space.core.add_connections_by_node.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,dynomics.space.core.add_compatibility_info.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),cljs.core.conj,cljs.core.vec.call(null,selected_nodes)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__456435,map__456435__$1,state,map__456436,map__456436__$1,nodes,selected_nodes){
return (function (g){
return loom.graph.add_edges.call(null,g,cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__456435,map__456435__$1,state,map__456436,map__456436__$1,nodes,selected_nodes){
return (function (p__456449){
var vec__456450 = p__456449;
var _ = cljs.core.nth.call(null,vec__456450,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__456450,(1),null);
var nid = cljs.core.nth.call(null,vec__456450,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__456450,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__456450,(4),null);
return nid;
});})(map__456435,map__456435__$1,state,map__456436,map__456436__$1,nodes,selected_nodes))
,selected_nodes)));
});})(map__456435,map__456435__$1,state,map__456436,map__456436__$1,nodes,selected_nodes))
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
return (function (p__456485){
var map__456486 = p__456485;
var map__456486__$1 = ((((!((map__456486 == null)))?((((map__456486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456486):map__456486);
var state = map__456486__$1;
var map__456487 = cljs.core.get.call(null,map__456486__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__456487__$1 = ((((!((map__456487 == null)))?((((map__456487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456487):map__456487);
var selected_nodes = cljs.core.get.call(null,map__456487__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Set node type of ",selected_nodes," to ",id);

var r = dynomics.space.core.update_compatibility_info.call(null,cljs.core.assoc.call(null,cljs.core.reduce.call(null,((function (map__456486,map__456486__$1,state,map__456487,map__456487__$1,selected_nodes){
return (function (r,path){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,r,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"node-type","node-type",129492462)),id),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"intersection","intersection",2003891010));
});})(map__456486,map__456486__$1,state,map__456487,map__456487__$1,selected_nodes))
,state,selected_nodes),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Node type"),cljs.core.str(id)].join('')], null)));
cljs.core.println.call(null,"  updated ",cljs.core.get_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024)], null)));

return r;
});
});
dynomics.space.core.simplify_connection = (function dynomics$space$core$simplify_connection(p__456515){
var vec__456520 = p__456515;
var _ = cljs.core.nth.call(null,vec__456520,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__456520,(1),null);
var nid = cljs.core.nth.call(null,vec__456520,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__456520,(3),null);
var cid = cljs.core.nth.call(null,vec__456520,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,cid], null);
});
dynomics.space.core.simplify_connections = (function dynomics$space$core$simplify_connections(p__456528){
var vec__456542 = p__456528;
var map__456543 = cljs.core.nth.call(null,vec__456542,(0),null);
var map__456543__$1 = ((((!((map__456543 == null)))?((((map__456543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456543):map__456543);
var nodes = cljs.core.get.call(null,map__456543__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__456543__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edges","edges",-694791395),cljs.core.map.call(null,((function (vec__456542,map__456543,map__456543__$1,nodes,edges){
return (function (p__456550){
var vec__456551 = p__456550;
var vec__456552 = cljs.core.nth.call(null,vec__456551,(0),null);
var _ = cljs.core.nth.call(null,vec__456552,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__456552,(1),null);
var nid1 = cljs.core.nth.call(null,vec__456552,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__456552,(3),null);
var cid1 = cljs.core.nth.call(null,vec__456552,(4),null);
var vec__456553 = cljs.core.nth.call(null,vec__456551,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__456553,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__456553,(1),null);
var nid2 = cljs.core.nth.call(null,vec__456553,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__456553,(3),null);
var cid2 = cljs.core.nth.call(null,vec__456553,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null);
});})(vec__456542,map__456543,map__456543__$1,nodes,edges))
,edges),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes], null);
});
dynomics.space.core.insert_in = (function dynomics$space$core$insert_in(v,i,x){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.conj.call(null,cljs.core.subvec.call(null,v,(0),i),x),cljs.core.subvec.call(null,v,i)));
});
dynomics.space.core.with_compatibilities = (function dynomics$space$core$with_compatibilities(p__456581,compatibilities){
var map__456590 = p__456581;
var map__456590__$1 = ((((!((map__456590 == null)))?((((map__456590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456590):map__456590);
var e = map__456590__$1;
var vec__456591 = cljs.core.get.call(null,map__456590__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__456592 = cljs.core.nth.call(null,vec__456591,(0),null);
var nid1 = cljs.core.nth.call(null,vec__456592,(0),null);
var nid2 = cljs.core.nth.call(null,vec__456592,(1),null);
var _ = cljs.core.nthnext.call(null,vec__456591,(1));
return cljs.core.assoc.call(null,e,new cljs.core.Keyword(null,"compatible?","compatible?",923422575),compatibilities.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null)));
});
dynomics.space.core.edge_points = (function dynomics$space$core$edge_points(nodes,p__456608){
var vec__456623 = p__456608;
var vec__456624 = cljs.core.nth.call(null,vec__456623,(0),null);
var _ = cljs.core.nth.call(null,vec__456624,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__456624,(1),null);
var nid1 = cljs.core.nth.call(null,vec__456624,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__456624,(3),null);
var cid1 = cljs.core.nth.call(null,vec__456624,(4),null);
var vec__456625 = cljs.core.nth.call(null,vec__456623,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__456625,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__456625,(1),null);
var nid2 = cljs.core.nth.call(null,vec__456625,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__456625,(3),null);
var cid2 = cljs.core.nth.call(null,vec__456625,(4),null);
var vec__456631 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__456631,(0),null);
var ny1 = cljs.core.nth.call(null,vec__456631,(1),null);
var vec__456632 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx2 = cljs.core.nth.call(null,vec__456632,(0),null);
var ny2 = cljs.core.nth.call(null,vec__456632,(1),null);
var vec__456633 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__456633,(0),null);
var cy1 = cljs.core.nth.call(null,vec__456633,(1),null);
var vec__456634 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid2,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx2 = cljs.core.nth.call(null,vec__456634,(0),null);
var cy2 = cljs.core.nth.call(null,vec__456634,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx2,ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx1,cx2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cy1,cy2], null)], null),new cljs.core.Keyword(null,"connections","connections",-2064090887),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,cid1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,cid2], null)], null)], null);
});
dynomics.space.core.make_open_regions = (function dynomics$space$core$make_open_regions(node_scale,p__456659){
var vec__456681 = p__456659;
var node_id = cljs.core.nth.call(null,vec__456681,(0),null);
var node_type = cljs.core.nth.call(null,vec__456681,(1),null);
var edge_pairs = cljs.core.nth.call(null,vec__456681,(2),null);
cljs.core.println.call(null,"   >>> ",node_id,cljs.core.count.call(null,edge_pairs));

return cljs.core.map.call(null,((function (vec__456681,node_id,node_type,edge_pairs){
return (function (edge_pair){
var vec__456705 = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"connections","connections",-2064090887),edge_pair);
var _ = cljs.core.nth.call(null,vec__456705,(0),null);
var vec__456706 = cljs.core.nth.call(null,vec__456705,(1),null);
var nid1 = cljs.core.nth.call(null,vec__456706,(0),null);
var x = cljs.core.nth.call(null,vec__456706,(1),null);
var vec__456707 = cljs.core.nth.call(null,vec__456705,(2),null);
var nid2 = cljs.core.nth.call(null,vec__456707,(0),null);
var y = cljs.core.nth.call(null,vec__456707,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__456705,(3),null);
var xy = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var qv = dynomics.space.core.quadrant_vectors_by_connectors.call(null,xy);
var qt = dynomics.space.core.quadrant_types_by_connector_pair.call(null,node_type,qv);
cljs.core.println.call(null,"       > ",node_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null),xy,qt,qv);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node-id","node-id",779482292),node_id,new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370),qt,new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631),qv,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.mapcat.call(null,((function (vec__456705,_,vec__456706,nid1,x,vec__456707,nid2,y,___$1,xy,qv,qt,vec__456681,node_id,node_type,edge_pairs){
return (function (p__456708){
var map__456709 = p__456708;
var map__456709__$1 = ((((!((map__456709 == null)))?((((map__456709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456709):map__456709);
var vec__456710 = cljs.core.get.call(null,map__456709__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__456711 = cljs.core.nth.call(null,vec__456710,(0),null);
var nid1__$1 = cljs.core.nth.call(null,vec__456711,(0),null);
var nid2__$1 = cljs.core.nth.call(null,vec__456711,(1),null);
var vec__456712 = cljs.core.nth.call(null,vec__456710,(1),null);
var nx1 = cljs.core.nth.call(null,vec__456712,(0),null);
var ny1 = cljs.core.nth.call(null,vec__456712,(1),null);
var vec__456713 = cljs.core.nth.call(null,vec__456710,(2),null);
var nx2 = cljs.core.nth.call(null,vec__456713,(0),null);
var ny2 = cljs.core.nth.call(null,vec__456713,(1),null);
var vec__456714 = cljs.core.nth.call(null,vec__456710,(3),null);
var cx1 = cljs.core.nth.call(null,vec__456714,(0),null);
var cx2 = cljs.core.nth.call(null,vec__456714,(1),null);
var vec__456715 = cljs.core.nth.call(null,vec__456710,(4),null);
var cy1 = cljs.core.nth.call(null,vec__456715,(0),null);
var cy2 = cljs.core.nth.call(null,vec__456715,(1),null);
var cnx = cljs.core.get.call(null,map__456709__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return cljs.core.map.call(null,dynomics.ui.svg.make_bezier_point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx2,ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx2 + (node_scale * cx2)),(ny2 + (node_scale * cy2))], null)], null)], null));
});})(vec__456705,_,vec__456706,nid1,x,vec__456707,nid2,y,___$1,xy,qv,qt,vec__456681,node_id,node_type,edge_pairs))
,edge_pair)], null);
});})(vec__456681,node_id,node_type,edge_pairs))
,edge_pairs);
});
dynomics.space.core.reverse_edge = (function dynomics$space$core$reverse_edge(p__456727){
var map__456731 = p__456727;
var map__456731__$1 = ((((!((map__456731 == null)))?((((map__456731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456731):map__456731);
var vec__456732 = cljs.core.get.call(null,map__456731__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var ids = cljs.core.nth.call(null,vec__456732,(0),null);
var p1 = cljs.core.nth.call(null,vec__456732,(1),null);
var p2 = cljs.core.nth.call(null,vec__456732,(2),null);
var cx = cljs.core.nth.call(null,vec__456732,(3),null);
var cy = cljs.core.nth.call(null,vec__456732,(4),null);
var c = cljs.core.get.call(null,map__456731__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reverse.call(null,ids),p2,p1,cljs.core.reverse.call(null,cx),cljs.core.reverse.call(null,cy)], null),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.reverse.call(null,c)], null);
});
dynomics.space.core.edge_pairs_by_node = (function dynomics$space$core$edge_pairs_by_node(p__456734){
var map__456753 = p__456734;
var map__456753__$1 = ((((!((map__456753 == null)))?((((map__456753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456753):map__456753);
var nodes = cljs.core.get.call(null,map__456753__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var connections_by_node = cljs.core.get.call(null,map__456753__$1,new cljs.core.Keyword(null,"connections-by-node","connections-by-node",517626909));
var node_scale = cljs.core.get.call(null,map__456753__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"cbn",connections_by_node);

return cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.empty_QMARK_,cljs.core.last),cljs.core.map.call(null,((function (map__456753,map__456753__$1,nodes,connections_by_node,node_scale){
return (function (p__456756){
var vec__456757 = p__456756;
var id = cljs.core.nth.call(null,vec__456757,(0),null);
var connections = cljs.core.nth.call(null,vec__456757,(1),null);
cljs.core.println.call(null," possible quadrants for node ",id,cljs.core.count.call(null,connections));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"node-type","node-type",129492462)], null)),cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.comp.call(null,dynomics.space.core.reverse_edge,cljs.core.first),cljs.core.last),cljs.core.filter.call(null,((function (vec__456757,id,connections,map__456753,map__456753__$1,nodes,connections_by_node,node_scale){
return (function (p__456758){
var vec__456759 = p__456758;
var map__456760 = cljs.core.nth.call(null,vec__456759,(0),null);
var map__456760__$1 = ((((!((map__456760 == null)))?((((map__456760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456760):map__456760);
var vec__456761 = cljs.core.get.call(null,map__456760__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var vec__456762 = cljs.core.nth.call(null,vec__456761,(0),null);
var _ = cljs.core.nth.call(null,vec__456762,(0),null);
var a = cljs.core.nth.call(null,vec__456762,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__456761,(1),null);
var map__456763 = cljs.core.nth.call(null,vec__456759,(1),null);
var map__456763__$1 = ((((!((map__456763 == null)))?((((map__456763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456763):map__456763);
var vec__456764 = cljs.core.get.call(null,map__456763__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var vec__456765 = cljs.core.nth.call(null,vec__456764,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__456765,(0),null);
var b = cljs.core.nth.call(null,vec__456765,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__456764,(1),null);
return !(((2) === dynomics.space.core.abs.call(null,(a - b))));
});})(vec__456757,id,connections,map__456753,map__456753__$1,nodes,connections_by_node,node_scale))
,cljs.core.take.call(null,cljs.core.count.call(null,connections),cljs.core.partition.call(null,(2),(1),cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.edge_points,nodes),cljs.core.cycle.call(null,connections))))))], null);
});})(map__456753,map__456753__$1,nodes,connections_by_node,node_scale))
,cljs.core.filter.call(null,((function (map__456753,map__456753__$1,nodes,connections_by_node,node_scale){
return (function (p__456768){
var vec__456769 = p__456768;
var k = cljs.core.nth.call(null,vec__456769,(0),null);
var v = cljs.core.nth.call(null,vec__456769,(1),null);
return (cljs.core.count.call(null,v) > (1));
});})(map__456753,map__456753__$1,nodes,connections_by_node,node_scale))
,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.comp.call(null,connections_by_node,new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.vals.call(null,nodes)))));
});
dynomics.space.core.set_curve_type = (function dynomics$space$core$set_curve_type(type_id){
return (function (p__456779){
var map__456780 = p__456779;
var map__456780__$1 = ((((!((map__456780 == null)))?((((map__456780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456780):map__456780);
var state = map__456780__$1;
var map__456781 = cljs.core.get.call(null,map__456780__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__456781__$1 = ((((!((map__456781 == null)))?((((map__456781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456781):map__456781);
var sc = cljs.core.get.call(null,map__456781__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
cljs.core.println.call(null,"set curve type",type_id,sc);

return cljs.core.reduce.call(null,((function (map__456780,map__456780__$1,state,map__456781,map__456781__$1,sc){
return (function (r,p__456784){
var vec__456785 = p__456784;
var _ = cljs.core.nth.call(null,vec__456785,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__456785,(1),null);
var curve_id = cljs.core.nth.call(null,vec__456785,(2),null);
return cljs.core.assoc_in.call(null,r,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curve-types","curve-types",1650772099),curve_id], null),type_id);
});})(map__456780,map__456780__$1,state,map__456781,map__456781__$1,sc))
,state,sc);
});
});
/**
 * Returns the given state with the map of which nodes
 *   belong to which curves updated with the curve of the
 *   given curve-id
 */
dynomics.space.core.update_curves_by_node = (function dynomics$space$core$update_curves_by_node(var_args){
var args456786 = [];
var len__36260__auto___456790 = arguments.length;
var i__36261__auto___456791 = (0);
while(true){
if((i__36261__auto___456791 < len__36260__auto___456790)){
args456786.push((arguments[i__36261__auto___456791]));

var G__456792 = (i__36261__auto___456791 + (1));
i__36261__auto___456791 = G__456792;
continue;
} else {
}
break;
}

var G__456789 = args456786.length;
switch (G__456789) {
case 2:
return dynomics.space.core.update_curves_by_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dynomics.space.core.update_curves_by_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args456786.length)].join('')));

}
});

dynomics.space.core.update_curves_by_node.cljs$core$IFn$_invoke$arity$2 = (function (state,curve_id){
return dynomics.space.core.update_curves_by_node.call(null,state,cljs.core.map.call(null,cljs.core.first,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),curve_id], null))),curve_id);
});

dynomics.space.core.update_curves_by_node.cljs$core$IFn$_invoke$arity$3 = (function (state,node_ids,curve_id){
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.update_in),state,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves-by-node","curves-by-node",217276582)], null)),node_ids),cljs.core.repeat.call(null,(function (cbn){
return cljs.core.conj.call(null,(function (){var or__35191__auto__ = cbn;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
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
dynomics.space.core.add_nodes_between_selected_nodes = (function dynomics$space$core$add_nodes_between_selected_nodes(p__456794){
var map__456803 = p__456794;
var map__456803__$1 = ((((!((map__456803 == null)))?((((map__456803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456803):map__456803);
var state = map__456803__$1;
var map__456804 = cljs.core.get.call(null,map__456803__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__456804__$1 = ((((!((map__456804 == null)))?((((map__456804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456804):map__456804);
var curves = cljs.core.get.call(null,map__456804__$1,new cljs.core.Keyword(null,"curves","curves",-510805378));
var curves_by_node = cljs.core.get.call(null,map__456804__$1,new cljs.core.Keyword(null,"curves-by-node","curves-by-node",217276582));
var selected_nodes = cljs.core.get.call(null,map__456804__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
if(((2) === cljs.core.count.call(null,selected_nodes))){
var vec__456807 = selected_nodes;
var vec__456808 = cljs.core.nth.call(null,vec__456807,(0),null);
var _ = cljs.core.nth.call(null,vec__456808,(0),null);
var n1 = cljs.core.nth.call(null,vec__456808,(1),null);
var vec__456809 = cljs.core.nth.call(null,vec__456807,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__456809,(0),null);
var n2 = cljs.core.nth.call(null,vec__456809,(1),null);
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
return cljs.core.update_in.call(null,cljs.core.reduce.call(null,(function (r,p__456812){
var vec__456813 = p__456812;
var id = cljs.core.nth.call(null,vec__456813,(0),null);
var _ = cljs.core.nth.call(null,vec__456813,(1),null);
return cljs.core.update_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (vec__456813,id,_){
return (function (sn){
var path__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
if(cljs.core.truth_(sn.call(null,path__$1))){
return cljs.core.disj.call(null,sn,path__$1);
} else {
return cljs.core.conj.call(null,sn,path__$1);
}
});})(vec__456813,id,_))
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
return cljs.core.update_in.call(null,cljs.core.reduce.call(null,(function (r,p__456816){
var vec__456817 = p__456816;
var id = cljs.core.nth.call(null,vec__456817,(0),null);
var _ = cljs.core.nth.call(null,vec__456817,(1),null);
return cljs.core.update_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (vec__456817,id,_){
return (function (sn){
var path__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
return cljs.core.disj.call(null,sn,path__$1);
});})(vec__456817,id,_))
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
var args456818 = [];
var len__36260__auto___456833 = arguments.length;
var i__36261__auto___456834 = (0);
while(true){
if((i__36261__auto___456834 < len__36260__auto___456833)){
args456818.push((arguments[i__36261__auto___456834]));

var G__456835 = (i__36261__auto___456834 + (1));
i__36261__auto___456834 = G__456835;
continue;
} else {
}
break;
}

var G__456821 = args456818.length;
switch (G__456821) {
case 2:
return dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args456818.length)].join('')));

}
});

dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$2 = (function (state,points){
return dynomics.space.core.add_curve.call(null,state,points,dynomics.space.core.make_new_id.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378)], null))));
});

dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$3 = (function (p__456822,points,curve_id){
var map__456823 = p__456822;
var map__456823__$1 = ((((!((map__456823 == null)))?((((map__456823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456823):map__456823);
var state = map__456823__$1;
var map__456824 = cljs.core.get.call(null,map__456823__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__456824__$1 = ((((!((map__456824 == null)))?((((map__456824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456824):map__456824);
var scale = cljs.core.get.call(null,map__456824__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
return dynomics.space.core.update_curves_by_node.call(null,cljs.core.reduce.call(null,((function (map__456823,map__456823__$1,state,map__456824,map__456824__$1,scale){
return (function (r,p__456827){
var vec__456828 = p__456827;
var p = cljs.core.nth.call(null,vec__456828,(0),null);
var control_points = cljs.core.nth.call(null,vec__456828,(1),null);
var map__456829 = dynomics.space.core.add_node.call(null,r,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),p,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.vec.call(null,cljs.core.map.call(null,((function (vec__456828,p,control_points,map__456823,map__456823__$1,state,map__456824,map__456824__$1,scale){
return (function (q,i){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.map.call(null,cljs.core._,p,q),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"id","id",-1388402092),i], null);
});})(vec__456828,p,control_points,map__456823,map__456823__$1,state,map__456824,map__456824__$1,scale))
,control_points,cljs.core.range.call(null)))], null));
var map__456829__$1 = ((((!((map__456829 == null)))?((((map__456829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456829):map__456829);
var r__$1 = map__456829__$1;
var id = cljs.core.get.call(null,map__456829__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return cljs.core.update_in.call(null,r__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),curve_id], null),((function (map__456829,map__456829__$1,r__$1,id,vec__456828,p,control_points,map__456823,map__456823__$1,state,map__456824,map__456824__$1,scale){
return (function (curve){
return cljs.core.conj.call(null,(function (){var or__35191__auto__ = curve;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.vec.call(null,cljs.core.range.call(null,cljs.core.count.call(null,control_points)))], null));
});})(map__456829,map__456829__$1,r__$1,id,vec__456828,p,control_points,map__456823,map__456823__$1,state,map__456824,map__456824__$1,scale))
);
});})(map__456823,map__456823__$1,state,map__456824,map__456824__$1,scale))
,state,cljs.core.map.call(null,cljs.core.vector,dynomics.space.core.midpoints.call(null,points),cljs.core.map.call(null,((function (map__456823,map__456823__$1,state,map__456824,map__456824__$1,scale){
return (function (p__456831){
var vec__456832 = p__456831;
var p1 = cljs.core.nth.call(null,vec__456832,(0),null);
var p2 = cljs.core.nth.call(null,vec__456832,(1),null);
return cljs.core.reverse.call(null,dynomics.space.core.move_along.call(null,0.8,p1,p2));
});})(map__456823,map__456823__$1,state,map__456824,map__456824__$1,scale))
,cljs.core.partition.call(null,(2),(1),points)))),curve_id);
});

dynomics.space.core.add_curve.cljs$lang$maxFixedArity = 3;
dynomics.space.core.add_curves = (function dynomics$space$core$add_curves(state,curves){
return cljs.core.reduce.call(null,dynomics.space.core.add_curve,state,curves);
});
/**
 * Returns the given state with its
 *   2 selected nodes joined by a curve with
 *   1 intermediate point
 */
dynomics.space.core.add_curve_between_nodes = (function dynomics$space$core$add_curve_between_nodes(var_args){
var args456848 = [];
var len__36260__auto___456871 = arguments.length;
var i__36261__auto___456872 = (0);
while(true){
if((i__36261__auto___456872 < len__36260__auto___456871)){
args456848.push((arguments[i__36261__auto___456872]));

var G__456873 = (i__36261__auto___456872 + (1));
i__36261__auto___456872 = G__456873;
continue;
} else {
}
break;
}

var G__456850 = args456848.length;
switch (G__456850) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args456848.length)].join('')));

}
});

dynomics.space.core.add_curve_between_nodes.cljs$core$IFn$_invoke$arity$1 = (function (p__456851){
var map__456852 = p__456851;
var map__456852__$1 = ((((!((map__456852 == null)))?((((map__456852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456852):map__456852);
var state = map__456852__$1;
var map__456853 = cljs.core.get.call(null,map__456852__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__456853__$1 = ((((!((map__456853 == null)))?((((map__456853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456853):map__456853);
var nodes = cljs.core.get.call(null,map__456853__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__456853__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
if((((2) === cljs.core.count.call(null,selected_nodes))) && (cljs.core.every_QMARK_.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"connection","connection",-123599300)),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.partial.call(null,cljs.core.get_in,state)),selected_nodes))){
return dynomics.space.core.add_curve_between_nodes.call(null,state,nodes,cljs.core.vec.call(null,selected_nodes));
} else {
return state;
}
});

dynomics.space.core.add_curve_between_nodes.cljs$core$IFn$_invoke$arity$3 = (function (state,nodes,edge){
return dynomics.space.core.add_curve_between_nodes.call(null,state,nodes,edge,dynomics.space.core.edge_points.call(null,nodes,edge),dynomics.space.core.make_new_id.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378)], null))));
});

dynomics.space.core.add_curve_between_nodes.cljs$core$IFn$_invoke$arity$5 = (function (state,nodes,edge,p__456856,curve_id){
var map__456857 = p__456856;
var map__456857__$1 = ((((!((map__456857 == null)))?((((map__456857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456857):map__456857);
var vec__456858 = cljs.core.get.call(null,map__456857__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var _ = cljs.core.nth.call(null,vec__456858,(0),null);
var p1 = cljs.core.nth.call(null,vec__456858,(1),null);
var p2 = cljs.core.nth.call(null,vec__456858,(2),null);
var vec__456859 = cljs.core.nth.call(null,vec__456858,(3),null);
var x1 = cljs.core.nth.call(null,vec__456859,(0),null);
var x2 = cljs.core.nth.call(null,vec__456859,(1),null);
var vec__456860 = cljs.core.nth.call(null,vec__456858,(4),null);
var y1 = cljs.core.nth.call(null,vec__456860,(0),null);
var y2 = cljs.core.nth.call(null,vec__456860,(1),null);
var vec__456861 = cljs.core.get.call(null,map__456857__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var vec__456862 = cljs.core.nth.call(null,vec__456861,(0),null);
var nid1 = cljs.core.nth.call(null,vec__456862,(0),null);
var cid1 = cljs.core.nth.call(null,vec__456862,(1),null);
var vec__456863 = cljs.core.nth.call(null,vec__456861,(1),null);
var nid2 = cljs.core.nth.call(null,vec__456863,(0),null);
var cid2 = cljs.core.nth.call(null,vec__456863,(1),null);
var ends = cljs.core.map.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null));
var ends_ns = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.count,new cljs.core.Keyword(null,"connections","connections",-2064090887)),ends);
var mp = cljs.core.first.call(null,dynomics.space.core.midpoints.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null)));
var mpcp = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.partial.call(null,cljs.core._STAR_,0.1)),dynomics.space.core.nearest_connection,cljs.core.partial.call(null,cljs.core.map,cljs.core._,mp)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2,p1], null));
var map__456865 = dynomics.space.core.add_node.call(null,state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),mp,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.vec.call(null,cljs.core.map.call(null,((function (ends,ends_ns,mp,mpcp,map__456857,map__456857__$1,vec__456858,_,p1,p2,vec__456859,x1,x2,vec__456860,y1,y2,vec__456861,vec__456862,nid1,cid1,vec__456863,nid2,cid2){
return (function (q,id){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),q,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
});})(ends,ends_ns,mp,mpcp,map__456857,map__456857__$1,vec__456858,_,p1,p2,vec__456859,x1,x2,vec__456860,y1,y2,vec__456861,vec__456862,nid1,cid1,vec__456863,nid2,cid2))
,mpcp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)))], null));
var map__456865__$1 = ((((!((map__456865 == null)))?((((map__456865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456865):map__456865);
var r = map__456865__$1;
var mpid = cljs.core.get.call(null,map__456865__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return dynomics.space.core.deselect_all.call(null,dynomics.space.core.update_curves_by_node.call(null,cljs.core.reduce.call(null,((function (ends,ends_ns,mp,mpcp,map__456865,map__456865__$1,r,mpid,map__456857,map__456857__$1,vec__456858,_,p1,p2,vec__456859,x1,x2,vec__456860,y1,y2,vec__456861,vec__456862,nid1,cid1,vec__456863,nid2,cid2){
return (function (r__$1,p__456868){
var vec__456869 = p__456868;
var id = cljs.core.nth.call(null,vec__456869,(0),null);
var cp = cljs.core.nth.call(null,vec__456869,(1),null);
return cljs.core.update_in.call(null,r__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),curve_id], null),((function (vec__456869,id,cp,ends,ends_ns,mp,mpcp,map__456865,map__456865__$1,r,mpid,map__456857,map__456857__$1,vec__456858,_,p1,p2,vec__456859,x1,x2,vec__456860,y1,y2,vec__456861,vec__456862,nid1,cid1,vec__456863,nid2,cid2){
return (function (curve){
return cljs.core.conj.call(null,(function (){var or__35191__auto__ = curve;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cp], null));
});})(vec__456869,id,cp,ends,ends_ns,mp,mpcp,map__456865,map__456865__$1,r,mpid,map__456857,map__456857__$1,vec__456858,_,p1,p2,vec__456859,x1,x2,vec__456860,y1,y2,vec__456861,vec__456862,nid1,cid1,vec__456863,nid2,cid2))
);
});})(ends,ends_ns,mp,mpcp,map__456865,map__456865__$1,r,mpid,map__456857,map__456857__$1,vec__456858,_,p1,p2,vec__456859,x1,x2,vec__456860,y1,y2,vec__456861,vec__456862,nid1,cid1,vec__456863,nid2,cid2))
,r,cljs.core.map.call(null,cljs.core.vector,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,mpid,nid2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.core.twin.call(null,cid1,cljs.core.first.call(null,ends_ns)),cid1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cid2,dynomics.space.core.twin.call(null,cid2,cljs.core.last.call(null,ends_ns))], null)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,mpid,nid2], null),curve_id));
});

dynomics.space.core.add_curve_between_nodes.cljs$lang$maxFixedArity = 5;
/**
 * Removes the selected nodes and their edges
 */
dynomics.space.core.remove_selected_nodes = (function dynomics$space$core$remove_selected_nodes(p__456889){
var map__456894 = p__456889;
var map__456894__$1 = ((((!((map__456894 == null)))?((((map__456894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456894):map__456894);
var state = map__456894__$1;
var map__456895 = cljs.core.get.call(null,map__456894__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__456895__$1 = ((((!((map__456895 == null)))?((((map__456895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456895):map__456895);
var selected_nodes = cljs.core.get.call(null,map__456895__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Remove ",selected_nodes);

return dynomics.space.core.add_connections_by_node.call(null,dynomics.space.core.update_compatibility_info.call(null,cljs.core.reduce.call(null,dynomics.space.core.remove_node_from_curves,dynomics.space.core.remove_edges.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),((function (map__456894,map__456894__$1,state,map__456895,map__456895__$1,selected_nodes){
return (function (nodes){
return cljs.core.apply.call(null,cljs.core.dissoc,nodes,cljs.core.map.call(null,cljs.core.last,selected_nodes));
});})(map__456894,map__456894__$1,state,map__456895,map__456895__$1,selected_nodes))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__456894,map__456894__$1,state,map__456895,map__456895__$1,selected_nodes){
return (function (g){
return loom.graph.remove_nodes.call(null,g,selected_nodes);
});})(map__456894,map__456894__$1,state,map__456895,map__456895__$1,selected_nodes))
),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"description","description",-1428560544),"Remove nodes"], null))),cljs.core.map.call(null,cljs.core.last,selected_nodes))));
});
dynomics.space.core.remove_selected = (function dynomics$space$core$remove_selected(p__456910){
var map__456915 = p__456910;
var map__456915__$1 = ((((!((map__456915 == null)))?((((map__456915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456915):map__456915);
var state = map__456915__$1;
var map__456916 = cljs.core.get.call(null,map__456915__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__456916__$1 = ((((!((map__456916 == null)))?((((map__456916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__456916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__456916):map__456916);
var selected_nodes = cljs.core.get.call(null,map__456916__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var selected_curves = cljs.core.get.call(null,map__456916__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
return cljs.core.update_in.call(null,dynomics.space.core.remove_selected_nodes.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378)], null),((function (map__456915,map__456915__$1,state,map__456916,map__456916__$1,selected_nodes,selected_curves){
return (function (curves){
return cljs.core.apply.call(null,cljs.core.dissoc,curves,cljs.core.map.call(null,cljs.core.last,selected_curves));
});})(map__456915,map__456915__$1,state,map__456916,map__456916__$1,selected_nodes,selected_curves))
);
});
