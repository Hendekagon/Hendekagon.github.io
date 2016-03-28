// Compiled by ClojureScript 1.8.34 {}
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
dynomics.space.core.angle = (function dynomics$space$core$angle(p__375661){
var vec__375663 = p__375661;
var x = cljs.core.nth.call(null,vec__375663,(0),null);
var y = cljs.core.nth.call(null,vec__375663,(1),null);
return Math.atan2(x,y);
});
dynomics.space.core.p2c = (function dynomics$space$core$p2c(p__375668){
var vec__375670 = p__375668;
var r = cljs.core.nth.call(null,vec__375670,(0),null);
var theta = cljs.core.nth.call(null,vec__375670,(1),null);
return cljs.core.map.call(null,dynomics.space.core.P.call(null,cljs.core._STAR_,r),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.core.cos.call(null,theta),dynomics.space.core.sin.call(null,theta)], null));
});
dynomics.space.core.c_STAR_ = (function dynomics$space$core$c_STAR_(p__375677,p__375678){
var vec__375681 = p__375677;
var ar = cljs.core.nth.call(null,vec__375681,(0),null);
var ai = cljs.core.nth.call(null,vec__375681,(1),null);
var vec__375682 = p__375678;
var br = cljs.core.nth.call(null,vec__375682,(0),null);
var bi = cljs.core.nth.call(null,vec__375682,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((ar * br) - (ai * bi)),((ai * br) + (ar * bi))], null);
});
dynomics.space.core.c_PLUS_ = (function dynomics$space$core$c_PLUS_(a,b){
return cljs.core.map.call(null,cljs.core._PLUS_,a,b);
});
dynomics.space.core.twin = (function dynomics$space$core$twin(id,n){
return cljs.core.mod.call(null,(id + (n / (2))),n);
});
dynomics.space.core.midpoints = (function dynomics$space$core$midpoints(points){
return cljs.core.map.call(null,(function (p__375688){
var vec__375689 = p__375688;
var p1 = cljs.core.nth.call(null,vec__375689,(0),null);
var p2 = cljs.core.nth.call(null,vec__375689,(1),null);
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,0.5),cljs.core.map.call(null,cljs.core._PLUS_,p1,p2));
}),cljs.core.partition.call(null,(2),(1),points));
});
dynomics.space.core.move_along = (function dynomics$space$core$move_along(s,p1,p2){
var v = cljs.core.map.call(null,dynomics.space.core.P.call(null,cljs.core._STAR_,s),cljs.core.map.call(null,cljs.core._,p1,p2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,v,p2)),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._,p1,v))], null);
});
dynomics.space.core.dot = (function dynomics$space$core$dot(var_args){
var args__36267__auto__ = [];
var len__36260__auto___375699 = arguments.length;
var i__36261__auto___375701 = (0);
while(true){
if((i__36261__auto___375701 < len__36260__auto___375699)){
args__36267__auto__.push((arguments[i__36261__auto___375701]));

var G__375702 = (i__36261__auto___375701 + (1));
i__36261__auto___375701 = G__375702;
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

dynomics.space.core.dot.cljs$lang$applyTo = (function (seq375696){
return dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq375696));
});
dynomics.space.core.sqrd = (function dynomics$space$core$sqrd(var_args){
var args375705 = [];
var len__36260__auto___375717 = arguments.length;
var i__36261__auto___375718 = (0);
while(true){
if((i__36261__auto___375718 < len__36260__auto___375717)){
args375705.push((arguments[i__36261__auto___375718]));

var G__375719 = (i__36261__auto___375718 + (1));
i__36261__auto___375718 = G__375719;
continue;
} else {
}
break;
}

var G__375712 = args375705.length;
switch (G__375712) {
case 2:
return dynomics.space.core.sqrd.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dynomics.space.core.sqrd.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args375705.length)].join('')));

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
var args375735 = [];
var len__36260__auto___375779 = arguments.length;
var i__36261__auto___375780 = (0);
while(true){
if((i__36261__auto___375780 < len__36260__auto___375779)){
args375735.push((arguments[i__36261__auto___375780]));

var G__375781 = (i__36261__auto___375780 + (1));
i__36261__auto___375780 = G__375781;
continue;
} else {
}
break;
}

var G__375751 = args375735.length;
switch (G__375751) {
case 3:
return dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args375735.length)].join('')));

}
});

dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$3 = (function (p__375752,path,p__375753){
var vec__375754 = p__375752;
var x = cljs.core.nth.call(null,vec__375754,(0),null);
var y = cljs.core.nth.call(null,vec__375754,(1),null);
var map__375755 = p__375753;
var map__375755__$1 = ((((!((map__375755 == null)))?((((map__375755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375755):map__375755);
var space = map__375755__$1;
var scale = cljs.core.get.call(null,map__375755__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var vec__375762 = path;
var _ = cljs.core.nth.call(null,vec__375762,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__375762,(1),null);
var nid = cljs.core.nth.call(null,vec__375762,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__375762,(3),null);
var cid = cljs.core.nth.call(null,vec__375762,(4),null);
var vec__375763 = cljs.core.get_in.call(null,space,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx = cljs.core.nth.call(null,vec__375763,(0),null);
var ny = cljs.core.nth.call(null,vec__375763,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - nx),(y - ny)], null)], null)], null);
});

dynomics.space.core.to_space.cljs$core$IFn$_invoke$arity$2 = (function (p__375772,scale){
var vec__375773 = p__375772;
var vec__375774 = cljs.core.nth.call(null,vec__375773,(0),null);
var x = cljs.core.nth.call(null,vec__375774,(0),null);
var y = cljs.core.nth.call(null,vec__375774,(1),null);
var vec__375775 = cljs.core.nth.call(null,vec__375773,(1),null);
var nx = cljs.core.nth.call(null,vec__375775,(0),null);
var ny = cljs.core.nth.call(null,vec__375775,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - nx),(y - ny)], null);
});

dynomics.space.core.to_space.cljs$lang$maxFixedArity = 3;
dynomics.space.core.to_local = (function dynomics$space$core$to_local(scale,p__375804,p__375805){
var vec__375808 = p__375804;
var x = cljs.core.nth.call(null,vec__375808,(0),null);
var y = cljs.core.nth.call(null,vec__375808,(1),null);
var vec__375809 = p__375805;
var lx = cljs.core.nth.call(null,vec__375809,(0),null);
var ly = cljs.core.nth.call(null,vec__375809,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(scale * (x - lx)),(scale * (y - ly))], null);
});
/**
 * Returns the pair of control points with
 *   mirrored positions for the given control point
 */
dynomics.space.core.mirror_node = (function dynomics$space$core$mirror_node(p__375823,path,p__375824){
var vec__375841 = p__375823;
var x = cljs.core.nth.call(null,vec__375841,(0),null);
var y = cljs.core.nth.call(null,vec__375841,(1),null);
var map__375842 = p__375824;
var map__375842__$1 = ((((!((map__375842 == null)))?((((map__375842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375842):map__375842);
var space = map__375842__$1;
var nodes = cljs.core.get.call(null,map__375842__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var node_scale = cljs.core.get.call(null,map__375842__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var vec__375847 = path;
var _ = cljs.core.nth.call(null,vec__375847,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__375847,(1),null);
var nid = cljs.core.nth.call(null,vec__375847,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__375847,(3),null);
var cid = cljs.core.nth.call(null,vec__375847,(4),null);
var nc = cljs.core.count.call(null,cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"connections","connections",-2064090887)], null)));
var cp = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.mod.call(null,(cid + (0.5 * nc)),nc)], null);
var vec__375848 = cljs.core.get_in.call(null,space,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx = cljs.core.nth.call(null,vec__375848,(0),null);
var ny = cljs.core.nth.call(null,vec__375848,(1),null);
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
dynomics.space.core.quadrants_types_by_position = (function dynomics$space$core$quadrants_types_by_position(p__375930){
var map__375941 = p__375930;
var map__375941__$1 = ((((!((map__375941 == null)))?((((map__375941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375941):map__375941);
var r1 = cljs.core.get.call(null,map__375941__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var p1 = cljs.core.get.call(null,map__375941__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.map.call(null,((function (map__375941,map__375941__$1,r1,p1){
return (function (i){
return cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295)], null));
});})(map__375941,map__375941__$1,r1,p1))
.call(null,r1),dynomics.space.core.C.call(null,dynomics.space.core.J.call(null,dynomics.space.core.P.call(null,dynomics.space.core.c_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),dynomics.space.core.P.call(null,dynomics.space.core.c_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null))),dynomics.space.core.P.call(null,cljs.core.map,dynomics.space.core.C.call(null,dynomics.space.core._LT_unit,dynomics.space.core.round,cljs.core.double$))).call(null,p1));
});
dynomics.space.core.quadrant_vectors_by_connectors = cljs.core.zipmap.call(null,cljs.core.take.call(null,(4),cljs.core.map.call(null,dynomics.space.core.P.call(null,cljs.core.apply,cljs.core.hash_set),cljs.core.partition.call(null,(2),(1),cljs.core.cycle.call(null,cljs.core.range.call(null,(4)))))),cljs.core.iterate.call(null,dynomics.space.core.P.call(null,dynomics.space.core.c_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)));
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
return f.call(null,cljs.core.first.call(null,cljs.core.sort_by.call(null,dynomics.space.core.C.call(null,dynomics.space.core.P.call(null,dynomics.space.core.sqrd,p),cljs.core.key),dynomics.space.core.connections_by_vector)));
});
dynomics.space.core.nearest_connection = dynomics.space.core.P.call(null,dynomics.space.core.nearest_connection_fn,cljs.core.first);
dynomics.space.core.nearest_connection_id = dynomics.space.core.P.call(null,dynomics.space.core.nearest_connection_fn,cljs.core.last);
dynomics.space.core.default_connections = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__376008){
var vec__376009 = p__376008;
var p = cljs.core.nth.call(null,vec__376009,(0),null);
var id = cljs.core.nth.call(null,vec__376009,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.map.call(null,dynomics.space.core.P.call(null,cljs.core._STAR_,0.08),p),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connection","connection",-123599300)], null);
}),dynomics.space.core.connections_by_vector));
/**
 * Returns a node of the given type
 */
dynomics.space.core.make_intersection_node = (function dynomics$space$core$make_intersection_node(var_args){
var args376019 = [];
var len__36260__auto___376032 = arguments.length;
var i__36261__auto___376037 = (0);
while(true){
if((i__36261__auto___376037 < len__36260__auto___376032)){
args376019.push((arguments[i__36261__auto___376037]));

var G__376038 = (i__36261__auto___376037 + (1));
i__36261__auto___376037 = G__376038;
continue;
} else {
}
break;
}

var G__376022 = args376019.length;
switch (G__376022) {
case 1:
return dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376019.length)].join('')));

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
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p__376058){
var vec__376059 = p__376058;
var _ = cljs.core.nth.call(null,vec__376059,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__376059,(1),null);
var id = cljs.core.nth.call(null,vec__376059,(2),null);
return id;
}),nodes));
});
dynomics.space.core.quadrant_info = (function dynomics$space$core$quadrant_info(nodes,p__376064){
var vec__376066 = p__376064;
var _ = cljs.core.nth.call(null,vec__376066,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__376066,(1),null);
var nid = cljs.core.nth.call(null,vec__376066,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__376066,(3),null);
var cid = cljs.core.nth.call(null,vec__376066,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node-type","node-type",129492462),cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"node-type","node-type",129492462)], null)),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid,new cljs.core.Keyword(null,"position","position",-2011731912)], null))], null);
});
/**
 * 
 *   Returns the given state with a map of node-node compatibilities added,
 *   of the form {[nodeid1 nodeid2] true [nodeid4 nodeid5] false}
 *   
 */
dynomics.space.core.add_compatibility_info = (function dynomics$space$core$add_compatibility_info(p__376076){
var map__376087 = p__376076;
var map__376087__$1 = ((((!((map__376087 == null)))?((((map__376087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376087):map__376087);
var state = map__376087__$1;
var map__376088 = cljs.core.get.call(null,map__376087__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__376088__$1 = ((((!((map__376088 == null)))?((((map__376088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376088):map__376088);
var nodes = cljs.core.get.call(null,map__376088__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__376088__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024),dynomics.space.core.just_ids.call(null,selected_nodes)], null),dynomics.space.core.compare_quadrants.call(null,cljs.core.map.call(null,dynomics.space.core.quadrants_types_by_position,cljs.core.map.call(null,dynomics.space.core.P.call(null,dynomics.space.core.quadrant_info,nodes),selected_nodes))));
});
dynomics.space.core.connections_of_node = (function dynomics$space$core$connections_of_node(graph,edges,id){
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
dynomics.space.core.add_connections_by_node = (function dynomics$space$core$add_connections_by_node(p__376112){
var map__376119 = p__376112;
var map__376119__$1 = ((((!((map__376119 == null)))?((((map__376119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376119):map__376119);
var state = map__376119__$1;
var map__376120 = cljs.core.get.call(null,map__376119__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__376120__$1 = ((((!((map__376120 == null)))?((((map__376120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376120):map__376120);
var nodes = cljs.core.get.call(null,map__376120__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__376120__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var graph = cljs.core.get.call(null,map__376120__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
cljs.core.println.call(null,"  acbn nodes ",cljs.core.count.call(null,loom.graph.nodes.call(null,graph)));

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"connections-by-node","connections-by-node",517626909)], null),cljs.core.zipmap.call(null,cljs.core.keys.call(null,nodes),cljs.core.map.call(null,dynomics.space.core.P.call(null,dynomics.space.core.connections_of_node,graph,edges),cljs.core.keys.call(null,nodes))));
});
/**
 * Following a node-type change, update the
 *   compatibility info for its connections
 */
dynomics.space.core.update_compatibility_info = (function dynomics$space$core$update_compatibility_info(var_args){
var args376136 = [];
var len__36260__auto___376160 = arguments.length;
var i__36261__auto___376161 = (0);
while(true){
if((i__36261__auto___376161 < len__36260__auto___376160)){
args376136.push((arguments[i__36261__auto___376161]));

var G__376162 = (i__36261__auto___376161 + (1));
i__36261__auto___376161 = G__376162;
continue;
} else {
}
break;
}

var G__376140 = args376136.length;
switch (G__376140) {
case 1:
return dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376136.length)].join('')));

}
});

dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$1 = (function (p__376145){
var map__376146 = p__376145;
var map__376146__$1 = ((((!((map__376146 == null)))?((((map__376146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376146):map__376146);
var state = map__376146__$1;
var map__376147 = cljs.core.get.call(null,map__376146__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__376147__$1 = ((((!((map__376147 == null)))?((((map__376147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376147):map__376147);
var selected_nodes = cljs.core.get.call(null,map__376147__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,dynomics.space.core.update_compatibility_info,state,dynomics.space.core.just_ids.call(null,selected_nodes));
});

dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$2 = (function (p__376151,id){
var map__376152 = p__376151;
var map__376152__$1 = ((((!((map__376152 == null)))?((((map__376152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376152):map__376152);
var state = map__376152__$1;
var map__376153 = cljs.core.get.call(null,map__376152__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__376153__$1 = ((((!((map__376153 == null)))?((((map__376153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376153):map__376153);
var graph = cljs.core.get.call(null,map__376153__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var edges = cljs.core.get.call(null,map__376153__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var nodes = cljs.core.get.call(null,map__376153__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return cljs.core.reduce.call(null,((function (map__376152,map__376152__$1,state,map__376153,map__376153__$1,graph,edges,nodes){
return (function (s,edge){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024),dynomics.space.core.just_ids.call(null,edge)], null),dynomics.space.core.compare_quadrants.call(null,cljs.core.map.call(null,dynomics.space.core.quadrants_types_by_position,cljs.core.map.call(null,dynomics.space.core.P.call(null,dynomics.space.core.quadrant_info,nodes),edge))));
});})(map__376152,map__376152__$1,state,map__376153,map__376153__$1,graph,edges,nodes))
,state,dynomics.space.core.connections_of_node.call(null,graph,edges,id));
});

dynomics.space.core.update_compatibility_info.cljs$lang$maxFixedArity = 2;
dynomics.space.core.make_new_id = (function dynomics$space$core$make_new_id(var_args){
var args376195 = [];
var len__36260__auto___376205 = arguments.length;
var i__36261__auto___376206 = (0);
while(true){
if((i__36261__auto___376206 < len__36260__auto___376205)){
args376195.push((arguments[i__36261__auto___376206]));

var G__376212 = (i__36261__auto___376206 + (1));
i__36261__auto___376206 = G__376212;
continue;
} else {
}
break;
}

var G__376198 = args376195.length;
switch (G__376198) {
case 1:
return dynomics.space.core.make_new_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.make_new_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376195.length)].join('')));

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
var args376221 = [];
var len__36260__auto___376254 = arguments.length;
var i__36261__auto___376257 = (0);
while(true){
if((i__36261__auto___376257 < len__36260__auto___376254)){
args376221.push((arguments[i__36261__auto___376257]));

var G__376260 = (i__36261__auto___376257 + (1));
i__36261__auto___376257 = G__376260;
continue;
} else {
}
break;
}

var G__376227 = args376221.length;
switch (G__376227) {
case 1:
return dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376221.length)].join('')));

}
});

dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$1 = (function (p__376229){
var map__376230 = p__376229;
var map__376230__$1 = ((((!((map__376230 == null)))?((((map__376230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376230):map__376230);
var state = map__376230__$1;
var map__376231 = cljs.core.get.call(null,map__376230__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__376231__$1 = ((((!((map__376231 == null)))?((((map__376231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376231):map__376231);
var nodes = cljs.core.get.call(null,map__376231__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var max_node_id = cljs.core.get.call(null,map__376231__$1,new cljs.core.Keyword(null,"max-node-id","max-node-id",-75074557));
var p = cljs.core.get.call(null,map__376230__$1,new cljs.core.Keyword(null,"node-position","node-position",-542959703));
var node_type = cljs.core.get.call(null,map__376230__$1,new cljs.core.Keyword(null,"selected-node-type","selected-node-type",-1717725489));
return dynomics.space.core.add_node.call(null,state,cljs.core.assoc.call(null,dynomics.space.core.make_intersection_node.call(null,(function (){var or__35191__auto__ = node_type;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return (3);
}
})()),new cljs.core.Keyword(null,"position","position",-2011731912),p));
});

dynomics.space.core.add_node.cljs$core$IFn$_invoke$arity$2 = (function (p__376242,p__376243){
var map__376244 = p__376242;
var map__376244__$1 = ((((!((map__376244 == null)))?((((map__376244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376244):map__376244);
var state = map__376244__$1;
var map__376245 = cljs.core.get.call(null,map__376244__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__376245__$1 = ((((!((map__376245 == null)))?((((map__376245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376245):map__376245);
var nodes = cljs.core.get.call(null,map__376245__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var max_node_id = cljs.core.get.call(null,map__376245__$1,new cljs.core.Keyword(null,"max-node-id","max-node-id",-75074557));
var selected_nodes = cljs.core.get.call(null,map__376245__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__376246 = p__376243;
var map__376246__$1 = ((((!((map__376246 == null)))?((((map__376246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376246):map__376246);
var new_node = map__376246__$1;
var new_id = cljs.core.get.call(null,map__376246__$1,new cljs.core.Keyword(null,"id","id",-1388402092),dynomics.space.core.make_new_id.call(null,nodes,max_node_id));
cljs.core.println.call(null,new_id,new_node);

return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new_id], null),cljs.core.assoc.call(null,new_node,new cljs.core.Keyword(null,"id","id",-1388402092),new_id)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__376244,map__376244__$1,state,map__376245,map__376245__$1,nodes,max_node_id,selected_nodes,map__376246,map__376246__$1,new_node,new_id){
return (function (g){
return loom.graph.add_nodes.call(null,g,new_id);
});})(map__376244,map__376244__$1,state,map__376245,map__376245__$1,nodes,max_node_id,selected_nodes,map__376246,map__376246__$1,new_node,new_id))
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
dynomics.space.core.remove_edges = (function dynomics$space$core$remove_edges(p__376301){
var map__376315 = p__376301;
var map__376315__$1 = ((((!((map__376315 == null)))?((((map__376315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376315):map__376315);
var state = map__376315__$1;
var map__376316 = cljs.core.get.call(null,map__376315__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__376316__$1 = ((((!((map__376316 == null)))?((((map__376316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376316):map__376316);
var selected_nodes = cljs.core.get.call(null,map__376316__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),((function (map__376315,map__376315__$1,state,map__376316,map__376316__$1,selected_nodes){
return (function (edges){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,((function (map__376315,map__376315__$1,state,map__376316,map__376316__$1,selected_nodes){
return (function (p__376320){
var vec__376321 = p__376320;
var vec__376322 = cljs.core.nth.call(null,vec__376321,(0),null);
var _ = cljs.core.nth.call(null,vec__376322,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__376322,(1),null);
var nid1 = cljs.core.nth.call(null,vec__376322,(2),null);
var ___$2 = cljs.core.nthnext.call(null,vec__376322,(3));
var vec__376323 = cljs.core.nth.call(null,vec__376321,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__376323,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__376323,(1),null);
var nid2 = cljs.core.nth.call(null,vec__376323,(2),null);
var ___$5 = cljs.core.nthnext.call(null,vec__376323,(3));
var or__35191__auto__ = selected_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid1], null));
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return selected_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid2], null));
}
});})(map__376315,map__376315__$1,state,map__376316,map__376316__$1,selected_nodes))
,edges));
});})(map__376315,map__376315__$1,state,map__376316,map__376316__$1,selected_nodes))
);
});
dynomics.space.core.add_graph = (function dynomics$space$core$add_graph(p__376337){
var map__376340 = p__376337;
var map__376340__$1 = ((((!((map__376340 == null)))?((((map__376340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376340):map__376340);
var space = map__376340__$1;
var edges = cljs.core.get.call(null,map__376340__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return cljs.core.assoc.call(null,space,new cljs.core.Keyword(null,"graph","graph",1558099509),cljs.core.apply.call(null,loom.graph.graph,dynomics.space.graph.simplify_edges.call(null,edges)));
});
dynomics.space.core.update_ds = (function dynomics$space$core$update_ds(p__376342){
var map__376348 = p__376342;
var map__376348__$1 = ((((!((map__376348 == null)))?((((map__376348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376348):map__376348);
var s = map__376348__$1;
var f = cljs.core.get.call(null,map__376348__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),((function (map__376348,map__376348__$1,s,f){
return (function (points){
return cljs.core.map.call(null,f,points);
});})(map__376348,map__376348__$1,s,f))
);
});
dynomics.space.core.random_points = (function dynomics$space$core$random_points(n){
return cljs.core.repeatedly.call(null,n,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.call(null),cljs.core.rand.call(null)], null);
}));
});
dynomics.space.core.make_ds = (function dynomics$space$core$make_ds(var_args){
var args376353 = [];
var len__36260__auto___376357 = arguments.length;
var i__36261__auto___376358 = (0);
while(true){
if((i__36261__auto___376358 < len__36260__auto___376357)){
args376353.push((arguments[i__36261__auto___376358]));

var G__376360 = (i__36261__auto___376358 + (1));
i__36261__auto___376358 = G__376360;
continue;
} else {
}
break;
}

var G__376356 = args376353.length;
switch (G__376356) {
case 0:
return dynomics.space.core.make_ds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.space.core.make_ds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376353.length)].join('')));

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
var args376369 = [];
var len__36260__auto___376399 = arguments.length;
var i__36261__auto___376400 = (0);
while(true){
if((i__36261__auto___376400 < len__36260__auto___376399)){
args376369.push((arguments[i__36261__auto___376400]));

var G__376403 = (i__36261__auto___376400 + (1));
i__36261__auto___376400 = G__376403;
continue;
} else {
}
break;
}

var G__376373 = args376369.length;
switch (G__376373) {
case 3:
return dynomics.space.core.ds_evolution.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.space.core.ds_evolution.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376369.length)].join('')));

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
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__376418){
var vec__376419 = p__376418;
var x = cljs.core.nth.call(null,vec__376419,(0),null);
var y = cljs.core.nth.call(null,vec__376419,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((-1) * x),y], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-12)], null)], null)], null));
});
dynomics.space.core.saddle_3 = (function dynomics$space$core$saddle_3(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__376431){
var vec__376432 = p__376431;
var x = cljs.core.nth.call(null,vec__376432,(0),null);
var y = cljs.core.nth.call(null,vec__376432,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((-1) * y)], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(-24)], null)], null)], null));
});
dynomics.space.core.saddle_4 = (function dynomics$space$core$saddle_4(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__376458){
var vec__376459 = p__376458;
var x = cljs.core.nth.call(null,vec__376459,(0),null);
var y = cljs.core.nth.call(null,vec__376459,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(-8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(-16)], null)], null)], null));
});
dynomics.space.core.saddle_5 = (function dynomics$space$core$saddle_5(start,init_points,samples){
return dynomics.space.core.ds_evolution.call(null,samples,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p__376468){
var vec__376469 = p__376468;
var x = cljs.core.nth.call(null,vec__376469,(0),null);
var y = cljs.core.nth.call(null,vec__376469,(1),null);
return cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.04,-0.04], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
}),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),(-12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(-24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-16),(-16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(-8)], null)], null)], null));
});
dynomics.space.core.spiral = (function dynomics$space$core$spiral(var_args){
var args376479 = [];
var len__36260__auto___376490 = arguments.length;
var i__36261__auto___376491 = (0);
while(true){
if((i__36261__auto___376491 < len__36260__auto___376490)){
args376479.push((arguments[i__36261__auto___376491]));

var G__376494 = (i__36261__auto___376491 + (1));
i__36261__auto___376491 = G__376494;
continue;
} else {
}
break;
}

var G__376485 = args376479.length;
switch (G__376485) {
case 3:
return dynomics.space.core.spiral.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return dynomics.space.core.spiral.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376479.length)].join('')));

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
dynomics.space.core.connect_pair = (function dynomics$space$core$connect_pair(p__376514){
var map__376532 = p__376514;
var map__376532__$1 = ((((!((map__376532 == null)))?((((map__376532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376532):map__376532);
var state = map__376532__$1;
var map__376533 = cljs.core.get.call(null,map__376532__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__376533__$1 = ((((!((map__376533 == null)))?((((map__376533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376533):map__376533);
var nodes = cljs.core.get.call(null,map__376533__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__376533__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Connect ",selected_nodes);

if(((2) === cljs.core.count.call(null,selected_nodes))){
return dynomics.space.core.add_connections_by_node.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,dynomics.space.core.add_compatibility_info.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),cljs.core.conj,cljs.core.vec.call(null,selected_nodes)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__376532,map__376532__$1,state,map__376533,map__376533__$1,nodes,selected_nodes){
return (function (g){
return loom.graph.add_edges.call(null,g,cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__376532,map__376532__$1,state,map__376533,map__376533__$1,nodes,selected_nodes){
return (function (p__376540){
var vec__376541 = p__376540;
var _ = cljs.core.nth.call(null,vec__376541,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__376541,(1),null);
var nid = cljs.core.nth.call(null,vec__376541,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__376541,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__376541,(4),null);
return nid;
});})(map__376532,map__376532__$1,state,map__376533,map__376533__$1,nodes,selected_nodes))
,selected_nodes)));
});})(map__376532,map__376532__$1,state,map__376533,map__376533__$1,nodes,selected_nodes))
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
return (function (p__376581){
var map__376582 = p__376581;
var map__376582__$1 = ((((!((map__376582 == null)))?((((map__376582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376582):map__376582);
var state = map__376582__$1;
var map__376583 = cljs.core.get.call(null,map__376582__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__376583__$1 = ((((!((map__376583 == null)))?((((map__376583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376583):map__376583);
var selected_nodes = cljs.core.get.call(null,map__376583__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Set node type of ",selected_nodes," to ",id);

var r = dynomics.space.core.update_compatibility_info.call(null,cljs.core.assoc.call(null,cljs.core.reduce.call(null,((function (map__376582,map__376582__$1,state,map__376583,map__376583__$1,selected_nodes){
return (function (r,path){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,r,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"node-type","node-type",129492462)),id),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"intersection","intersection",2003891010));
});})(map__376582,map__376582__$1,state,map__376583,map__376583__$1,selected_nodes))
,state,selected_nodes),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Node type"),cljs.core.str(id)].join('')], null)));
cljs.core.println.call(null,"  updated ",cljs.core.get_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024)], null)));

return r;
});
});
dynomics.space.core.simplify_connection = (function dynomics$space$core$simplify_connection(p__376621){
var vec__376626 = p__376621;
var _ = cljs.core.nth.call(null,vec__376626,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__376626,(1),null);
var nid = cljs.core.nth.call(null,vec__376626,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__376626,(3),null);
var cid = cljs.core.nth.call(null,vec__376626,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,cid], null);
});
dynomics.space.core.simplify_connections = (function dynomics$space$core$simplify_connections(p__376629){
var vec__376645 = p__376629;
var map__376646 = cljs.core.nth.call(null,vec__376645,(0),null);
var map__376646__$1 = ((((!((map__376646 == null)))?((((map__376646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376646):map__376646);
var nodes = cljs.core.get.call(null,map__376646__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__376646__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edges","edges",-694791395),cljs.core.map.call(null,((function (vec__376645,map__376646,map__376646__$1,nodes,edges){
return (function (p__376650){
var vec__376651 = p__376650;
var vec__376652 = cljs.core.nth.call(null,vec__376651,(0),null);
var _ = cljs.core.nth.call(null,vec__376652,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__376652,(1),null);
var nid1 = cljs.core.nth.call(null,vec__376652,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__376652,(3),null);
var cid1 = cljs.core.nth.call(null,vec__376652,(4),null);
var vec__376653 = cljs.core.nth.call(null,vec__376651,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__376653,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__376653,(1),null);
var nid2 = cljs.core.nth.call(null,vec__376653,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__376653,(3),null);
var cid2 = cljs.core.nth.call(null,vec__376653,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null);
});})(vec__376645,map__376646,map__376646__$1,nodes,edges))
,edges),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes], null);
});
dynomics.space.core.insert_in = (function dynomics$space$core$insert_in(v,i,x){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.conj.call(null,cljs.core.subvec.call(null,v,(0),i),x),cljs.core.subvec.call(null,v,i)));
});
dynomics.space.core.with_compatibilities = (function dynomics$space$core$with_compatibilities(p__376705,compatibilities){
var map__376718 = p__376705;
var map__376718__$1 = ((((!((map__376718 == null)))?((((map__376718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376718):map__376718);
var e = map__376718__$1;
var vec__376719 = cljs.core.get.call(null,map__376718__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__376720 = cljs.core.nth.call(null,vec__376719,(0),null);
var nid1 = cljs.core.nth.call(null,vec__376720,(0),null);
var nid2 = cljs.core.nth.call(null,vec__376720,(1),null);
var _ = cljs.core.nthnext.call(null,vec__376719,(1));
return cljs.core.assoc.call(null,e,new cljs.core.Keyword(null,"compatible?","compatible?",923422575),compatibilities.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null)));
});
dynomics.space.core.edge_points = (function dynomics$space$core$edge_points(nodes,p__376727){
var vec__376738 = p__376727;
var vec__376739 = cljs.core.nth.call(null,vec__376738,(0),null);
var _ = cljs.core.nth.call(null,vec__376739,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__376739,(1),null);
var nid1 = cljs.core.nth.call(null,vec__376739,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__376739,(3),null);
var cid1 = cljs.core.nth.call(null,vec__376739,(4),null);
var vec__376740 = cljs.core.nth.call(null,vec__376738,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__376740,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__376740,(1),null);
var nid2 = cljs.core.nth.call(null,vec__376740,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__376740,(3),null);
var cid2 = cljs.core.nth.call(null,vec__376740,(4),null);
var vec__376745 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__376745,(0),null);
var ny1 = cljs.core.nth.call(null,vec__376745,(1),null);
var vec__376746 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx2 = cljs.core.nth.call(null,vec__376746,(0),null);
var ny2 = cljs.core.nth.call(null,vec__376746,(1),null);
var vec__376747 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__376747,(0),null);
var cy1 = cljs.core.nth.call(null,vec__376747,(1),null);
var vec__376748 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid2,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx2 = cljs.core.nth.call(null,vec__376748,(0),null);
var cy2 = cljs.core.nth.call(null,vec__376748,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx2,ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx1,cx2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cy1,cy2], null)], null),new cljs.core.Keyword(null,"connections","connections",-2064090887),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,cid1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,cid2], null)], null)], null);
});
dynomics.space.core.make_open_regions = (function dynomics$space$core$make_open_regions(node_scale,p__376787){
var vec__376802 = p__376787;
var node_id = cljs.core.nth.call(null,vec__376802,(0),null);
var node_type = cljs.core.nth.call(null,vec__376802,(1),null);
var edge_pairs = cljs.core.nth.call(null,vec__376802,(2),null);
cljs.core.println.call(null,"   >>> ",node_id,cljs.core.count.call(null,edge_pairs));

return cljs.core.map.call(null,((function (vec__376802,node_id,node_type,edge_pairs){
return (function (edge_pair){
var vec__376803 = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"connections","connections",-2064090887),edge_pair);
var _ = cljs.core.nth.call(null,vec__376803,(0),null);
var vec__376804 = cljs.core.nth.call(null,vec__376803,(1),null);
var nid1 = cljs.core.nth.call(null,vec__376804,(0),null);
var x = cljs.core.nth.call(null,vec__376804,(1),null);
var vec__376805 = cljs.core.nth.call(null,vec__376803,(2),null);
var nid2 = cljs.core.nth.call(null,vec__376805,(0),null);
var y = cljs.core.nth.call(null,vec__376805,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__376803,(3),null);
var xy = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var qv = dynomics.space.core.quadrant_vectors_by_connectors.call(null,xy);
var qt = dynomics.space.core.quadrant_types_by_connector_pair.call(null,node_type,qv);
cljs.core.println.call(null,"       > ",node_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null),xy,qt,qv);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node-id","node-id",779482292),node_id,new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370),qt,new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631),qv,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.mapcat.call(null,((function (vec__376803,_,vec__376804,nid1,x,vec__376805,nid2,y,___$1,xy,qv,qt,vec__376802,node_id,node_type,edge_pairs){
return (function (p__376807){
var map__376808 = p__376807;
var map__376808__$1 = ((((!((map__376808 == null)))?((((map__376808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376808):map__376808);
var vec__376809 = cljs.core.get.call(null,map__376808__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__376810 = cljs.core.nth.call(null,vec__376809,(0),null);
var nid1__$1 = cljs.core.nth.call(null,vec__376810,(0),null);
var nid2__$1 = cljs.core.nth.call(null,vec__376810,(1),null);
var vec__376811 = cljs.core.nth.call(null,vec__376809,(1),null);
var nx1 = cljs.core.nth.call(null,vec__376811,(0),null);
var ny1 = cljs.core.nth.call(null,vec__376811,(1),null);
var vec__376812 = cljs.core.nth.call(null,vec__376809,(2),null);
var nx2 = cljs.core.nth.call(null,vec__376812,(0),null);
var ny2 = cljs.core.nth.call(null,vec__376812,(1),null);
var vec__376813 = cljs.core.nth.call(null,vec__376809,(3),null);
var cx1 = cljs.core.nth.call(null,vec__376813,(0),null);
var cx2 = cljs.core.nth.call(null,vec__376813,(1),null);
var vec__376814 = cljs.core.nth.call(null,vec__376809,(4),null);
var cy1 = cljs.core.nth.call(null,vec__376814,(0),null);
var cy2 = cljs.core.nth.call(null,vec__376814,(1),null);
var cnx = cljs.core.get.call(null,map__376808__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return cljs.core.map.call(null,dynomics.ui.svg.make_bezier_point,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx2,ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx2 + (node_scale * cx2)),(ny2 + (node_scale * cy2))], null)], null)], null));
});})(vec__376803,_,vec__376804,nid1,x,vec__376805,nid2,y,___$1,xy,qv,qt,vec__376802,node_id,node_type,edge_pairs))
,edge_pair)], null);
});})(vec__376802,node_id,node_type,edge_pairs))
,edge_pairs);
});
dynomics.space.core.reverse_edge = (function dynomics$space$core$reverse_edge(p__376819){
var map__376823 = p__376819;
var map__376823__$1 = ((((!((map__376823 == null)))?((((map__376823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376823):map__376823);
var vec__376824 = cljs.core.get.call(null,map__376823__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var ids = cljs.core.nth.call(null,vec__376824,(0),null);
var p1 = cljs.core.nth.call(null,vec__376824,(1),null);
var p2 = cljs.core.nth.call(null,vec__376824,(2),null);
var cx = cljs.core.nth.call(null,vec__376824,(3),null);
var cy = cljs.core.nth.call(null,vec__376824,(4),null);
var c = cljs.core.get.call(null,map__376823__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reverse.call(null,ids),p2,p1,cljs.core.reverse.call(null,cx),cljs.core.reverse.call(null,cy)], null),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.reverse.call(null,c)], null);
});
dynomics.space.core.edge_pairs_by_node = (function dynomics$space$core$edge_pairs_by_node(p__376827){
var map__376846 = p__376827;
var map__376846__$1 = ((((!((map__376846 == null)))?((((map__376846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376846):map__376846);
var nodes = cljs.core.get.call(null,map__376846__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var connections_by_node = cljs.core.get.call(null,map__376846__$1,new cljs.core.Keyword(null,"connections-by-node","connections-by-node",517626909));
var node_scale = cljs.core.get.call(null,map__376846__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"cbn",connections_by_node);

return cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.empty_QMARK_,cljs.core.last),cljs.core.map.call(null,((function (map__376846,map__376846__$1,nodes,connections_by_node,node_scale){
return (function (p__376848){
var vec__376849 = p__376848;
var id = cljs.core.nth.call(null,vec__376849,(0),null);
var connections = cljs.core.nth.call(null,vec__376849,(1),null);
cljs.core.println.call(null," possible quadrants for node ",id,cljs.core.count.call(null,connections));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"node-type","node-type",129492462)], null)),cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.comp.call(null,dynomics.space.core.reverse_edge,cljs.core.first),cljs.core.last),cljs.core.filter.call(null,((function (vec__376849,id,connections,map__376846,map__376846__$1,nodes,connections_by_node,node_scale){
return (function (p__376850){
var vec__376851 = p__376850;
var map__376852 = cljs.core.nth.call(null,vec__376851,(0),null);
var map__376852__$1 = ((((!((map__376852 == null)))?((((map__376852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376852):map__376852);
var vec__376853 = cljs.core.get.call(null,map__376852__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var vec__376854 = cljs.core.nth.call(null,vec__376853,(0),null);
var _ = cljs.core.nth.call(null,vec__376854,(0),null);
var a = cljs.core.nth.call(null,vec__376854,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__376853,(1),null);
var map__376855 = cljs.core.nth.call(null,vec__376851,(1),null);
var map__376855__$1 = ((((!((map__376855 == null)))?((((map__376855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376855):map__376855);
var vec__376856 = cljs.core.get.call(null,map__376855__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var vec__376857 = cljs.core.nth.call(null,vec__376856,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__376857,(0),null);
var b = cljs.core.nth.call(null,vec__376857,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__376856,(1),null);
return !(((2) === dynomics.space.core.abs.call(null,(a - b))));
});})(vec__376849,id,connections,map__376846,map__376846__$1,nodes,connections_by_node,node_scale))
,cljs.core.take.call(null,cljs.core.count.call(null,connections),cljs.core.partition.call(null,(2),(1),cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.edge_points,nodes),cljs.core.cycle.call(null,connections))))))], null);
});})(map__376846,map__376846__$1,nodes,connections_by_node,node_scale))
,cljs.core.filter.call(null,((function (map__376846,map__376846__$1,nodes,connections_by_node,node_scale){
return (function (p__376860){
var vec__376861 = p__376860;
var k = cljs.core.nth.call(null,vec__376861,(0),null);
var v = cljs.core.nth.call(null,vec__376861,(1),null);
return (cljs.core.count.call(null,v) > (1));
});})(map__376846,map__376846__$1,nodes,connections_by_node,node_scale))
,cljs.core.map.call(null,dynomics.space.core.J.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),dynomics.space.core.C.call(null,connections_by_node,new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.vals.call(null,nodes)))));
});
dynomics.space.core.set_curve_type = (function dynomics$space$core$set_curve_type(type_id){
return (function (p__376870){
var map__376871 = p__376870;
var map__376871__$1 = ((((!((map__376871 == null)))?((((map__376871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376871):map__376871);
var state = map__376871__$1;
var map__376872 = cljs.core.get.call(null,map__376871__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__376872__$1 = ((((!((map__376872 == null)))?((((map__376872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376872):map__376872);
var sc = cljs.core.get.call(null,map__376872__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
cljs.core.println.call(null,"set curve type",type_id,sc);

return cljs.core.reduce.call(null,((function (map__376871,map__376871__$1,state,map__376872,map__376872__$1,sc){
return (function (r,p__376875){
var vec__376876 = p__376875;
var _ = cljs.core.nth.call(null,vec__376876,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__376876,(1),null);
var curve_id = cljs.core.nth.call(null,vec__376876,(2),null);
return cljs.core.assoc_in.call(null,r,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curve-types","curve-types",1650772099),curve_id], null),type_id);
});})(map__376871,map__376871__$1,state,map__376872,map__376872__$1,sc))
,state,sc);
});
});
/**
 * Returns the given state with the map of which nodes
 *   belong to which curves updated with the curve of the
 *   given curve-id
 */
dynomics.space.core.update_curves_by_node = (function dynomics$space$core$update_curves_by_node(var_args){
var args376877 = [];
var len__36260__auto___376881 = arguments.length;
var i__36261__auto___376882 = (0);
while(true){
if((i__36261__auto___376882 < len__36260__auto___376881)){
args376877.push((arguments[i__36261__auto___376882]));

var G__376883 = (i__36261__auto___376882 + (1));
i__36261__auto___376882 = G__376883;
continue;
} else {
}
break;
}

var G__376880 = args376877.length;
switch (G__376880) {
case 2:
return dynomics.space.core.update_curves_by_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dynomics.space.core.update_curves_by_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376877.length)].join('')));

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
dynomics.space.core.add_nodes_between_selected_nodes = (function dynomics$space$core$add_nodes_between_selected_nodes(p__376885){
var map__376893 = p__376885;
var map__376893__$1 = ((((!((map__376893 == null)))?((((map__376893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376893):map__376893);
var state = map__376893__$1;
var map__376894 = cljs.core.get.call(null,map__376893__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__376894__$1 = ((((!((map__376894 == null)))?((((map__376894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376894):map__376894);
var curves = cljs.core.get.call(null,map__376894__$1,new cljs.core.Keyword(null,"curves","curves",-510805378));
var curves_by_node = cljs.core.get.call(null,map__376894__$1,new cljs.core.Keyword(null,"curves-by-node","curves-by-node",217276582));
var selected_nodes = cljs.core.get.call(null,map__376894__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
if(((2) === cljs.core.count.call(null,selected_nodes))){
var vec__376897 = selected_nodes;
var vec__376898 = cljs.core.nth.call(null,vec__376897,(0),null);
var _ = cljs.core.nth.call(null,vec__376898,(0),null);
var n1 = cljs.core.nth.call(null,vec__376898,(1),null);
var vec__376899 = cljs.core.nth.call(null,vec__376897,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__376899,(0),null);
var n2 = cljs.core.nth.call(null,vec__376899,(1),null);
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
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.juxt.call(null,cljs.core.first,dynomics.space.core.C.call(null,cljs.core.rest,cljs.core.last)).call(null,cljs.core.split_with.call(null,dynomics.space.core.C.call(null,dynomics.space.core.P.call(null,cljs.core.not_EQ_,node_id),cljs.core.first),node_ids))));
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
return cljs.core.update_in.call(null,cljs.core.reduce.call(null,(function (r,p__376902){
var vec__376903 = p__376902;
var id = cljs.core.nth.call(null,vec__376903,(0),null);
var _ = cljs.core.nth.call(null,vec__376903,(1),null);
return cljs.core.update_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (vec__376903,id,_){
return (function (sn){
var path__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
if(cljs.core.truth_(sn.call(null,path__$1))){
return cljs.core.disj.call(null,sn,path__$1);
} else {
return cljs.core.conj.call(null,sn,path__$1);
}
});})(vec__376903,id,_))
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
return cljs.core.update_in.call(null,cljs.core.reduce.call(null,(function (r,p__376907){
var vec__376908 = p__376907;
var id = cljs.core.nth.call(null,vec__376908,(0),null);
var _ = cljs.core.nth.call(null,vec__376908,(1),null);
return cljs.core.update_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (vec__376908,id,_){
return (function (sn){
var path__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),id], null);
return cljs.core.disj.call(null,sn,path__$1);
});})(vec__376908,id,_))
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
var args376909 = [];
var len__36260__auto___376924 = arguments.length;
var i__36261__auto___376925 = (0);
while(true){
if((i__36261__auto___376925 < len__36260__auto___376924)){
args376909.push((arguments[i__36261__auto___376925]));

var G__376926 = (i__36261__auto___376925 + (1));
i__36261__auto___376925 = G__376926;
continue;
} else {
}
break;
}

var G__376911 = args376909.length;
switch (G__376911) {
case 2:
return dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376909.length)].join('')));

}
});

dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$2 = (function (state,points){
return dynomics.space.core.add_curve.call(null,state,points,dynomics.space.core.make_new_id.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378)], null))));
});

dynomics.space.core.add_curve.cljs$core$IFn$_invoke$arity$3 = (function (p__376912,points,curve_id){
var map__376913 = p__376912;
var map__376913__$1 = ((((!((map__376913 == null)))?((((map__376913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376913):map__376913);
var state = map__376913__$1;
var map__376914 = cljs.core.get.call(null,map__376913__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__376914__$1 = ((((!((map__376914 == null)))?((((map__376914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376914):map__376914);
var scale = cljs.core.get.call(null,map__376914__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
return dynomics.space.core.update_curves_by_node.call(null,cljs.core.reduce.call(null,((function (map__376913,map__376913__$1,state,map__376914,map__376914__$1,scale){
return (function (r,p__376917){
var vec__376918 = p__376917;
var p = cljs.core.nth.call(null,vec__376918,(0),null);
var control_points = cljs.core.nth.call(null,vec__376918,(1),null);
var map__376919 = dynomics.space.core.add_node.call(null,r,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),p,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.vec.call(null,cljs.core.map.call(null,((function (vec__376918,p,control_points,map__376913,map__376913__$1,state,map__376914,map__376914__$1,scale){
return (function (q,i){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.map.call(null,cljs.core._,p,q),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"id","id",-1388402092),i], null);
});})(vec__376918,p,control_points,map__376913,map__376913__$1,state,map__376914,map__376914__$1,scale))
,control_points,cljs.core.range.call(null)))], null));
var map__376919__$1 = ((((!((map__376919 == null)))?((((map__376919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376919):map__376919);
var r__$1 = map__376919__$1;
var id = cljs.core.get.call(null,map__376919__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return cljs.core.update_in.call(null,r__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),curve_id], null),((function (map__376919,map__376919__$1,r__$1,id,vec__376918,p,control_points,map__376913,map__376913__$1,state,map__376914,map__376914__$1,scale){
return (function (curve){
return cljs.core.conj.call(null,(function (){var or__35191__auto__ = curve;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.vec.call(null,cljs.core.range.call(null,cljs.core.count.call(null,control_points)))], null));
});})(map__376919,map__376919__$1,r__$1,id,vec__376918,p,control_points,map__376913,map__376913__$1,state,map__376914,map__376914__$1,scale))
);
});})(map__376913,map__376913__$1,state,map__376914,map__376914__$1,scale))
,state,cljs.core.map.call(null,cljs.core.vector,dynomics.space.core.midpoints.call(null,points),cljs.core.map.call(null,((function (map__376913,map__376913__$1,state,map__376914,map__376914__$1,scale){
return (function (p__376921){
var vec__376922 = p__376921;
var p1 = cljs.core.nth.call(null,vec__376922,(0),null);
var p2 = cljs.core.nth.call(null,vec__376922,(1),null);
return cljs.core.reverse.call(null,dynomics.space.core.move_along.call(null,0.8,p1,p2));
});})(map__376913,map__376913__$1,state,map__376914,map__376914__$1,scale))
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
var args376938 = [];
var len__36260__auto___376961 = arguments.length;
var i__36261__auto___376962 = (0);
while(true){
if((i__36261__auto___376962 < len__36260__auto___376961)){
args376938.push((arguments[i__36261__auto___376962]));

var G__376963 = (i__36261__auto___376962 + (1));
i__36261__auto___376962 = G__376963;
continue;
} else {
}
break;
}

var G__376940 = args376938.length;
switch (G__376940) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376938.length)].join('')));

}
});

dynomics.space.core.add_curve_between_nodes.cljs$core$IFn$_invoke$arity$1 = (function (p__376941){
var map__376942 = p__376941;
var map__376942__$1 = ((((!((map__376942 == null)))?((((map__376942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376942):map__376942);
var state = map__376942__$1;
var map__376943 = cljs.core.get.call(null,map__376942__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__376943__$1 = ((((!((map__376943 == null)))?((((map__376943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376943):map__376943);
var nodes = cljs.core.get.call(null,map__376943__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__376943__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
if((((2) === cljs.core.count.call(null,selected_nodes))) && (cljs.core.every_QMARK_.call(null,dynomics.space.core.C.call(null,dynomics.space.core.P.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"connection","connection",-123599300)),new cljs.core.Keyword(null,"type","type",1174270348),dynomics.space.core.P.call(null,cljs.core.get_in,state)),selected_nodes))){
return dynomics.space.core.add_curve_between_nodes.call(null,state,nodes,cljs.core.vec.call(null,selected_nodes));
} else {
return state;
}
});

dynomics.space.core.add_curve_between_nodes.cljs$core$IFn$_invoke$arity$3 = (function (state,nodes,edge){
return dynomics.space.core.add_curve_between_nodes.call(null,state,nodes,edge,dynomics.space.core.edge_points.call(null,nodes,edge),dynomics.space.core.make_new_id.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378)], null))));
});

dynomics.space.core.add_curve_between_nodes.cljs$core$IFn$_invoke$arity$5 = (function (state,nodes,edge,p__376946,curve_id){
var map__376947 = p__376946;
var map__376947__$1 = ((((!((map__376947 == null)))?((((map__376947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376947):map__376947);
var vec__376948 = cljs.core.get.call(null,map__376947__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var _ = cljs.core.nth.call(null,vec__376948,(0),null);
var p1 = cljs.core.nth.call(null,vec__376948,(1),null);
var p2 = cljs.core.nth.call(null,vec__376948,(2),null);
var vec__376949 = cljs.core.nth.call(null,vec__376948,(3),null);
var x1 = cljs.core.nth.call(null,vec__376949,(0),null);
var x2 = cljs.core.nth.call(null,vec__376949,(1),null);
var vec__376950 = cljs.core.nth.call(null,vec__376948,(4),null);
var y1 = cljs.core.nth.call(null,vec__376950,(0),null);
var y2 = cljs.core.nth.call(null,vec__376950,(1),null);
var vec__376951 = cljs.core.get.call(null,map__376947__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var vec__376952 = cljs.core.nth.call(null,vec__376951,(0),null);
var nid1 = cljs.core.nth.call(null,vec__376952,(0),null);
var cid1 = cljs.core.nth.call(null,vec__376952,(1),null);
var vec__376953 = cljs.core.nth.call(null,vec__376951,(1),null);
var nid2 = cljs.core.nth.call(null,vec__376953,(0),null);
var cid2 = cljs.core.nth.call(null,vec__376953,(1),null);
var ends = cljs.core.map.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null));
var ends_ns = cljs.core.map.call(null,dynomics.space.core.C.call(null,cljs.core.count,new cljs.core.Keyword(null,"connections","connections",-2064090887)),ends);
var mp = cljs.core.first.call(null,dynomics.space.core.midpoints.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null)));
var mpcp = cljs.core.map.call(null,dynomics.space.core.C.call(null,dynomics.space.core.P.call(null,cljs.core.map,dynomics.space.core.P.call(null,cljs.core._STAR_,0.1)),dynomics.space.core.nearest_connection,dynomics.space.core.P.call(null,cljs.core.map,cljs.core._,mp)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2,p1], null));
var map__376955 = dynomics.space.core.add_node.call(null,state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),mp,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.vec.call(null,cljs.core.map.call(null,((function (ends,ends_ns,mp,mpcp,map__376947,map__376947__$1,vec__376948,_,p1,p2,vec__376949,x1,x2,vec__376950,y1,y2,vec__376951,vec__376952,nid1,cid1,vec__376953,nid2,cid2){
return (function (q,id){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),q,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
});})(ends,ends_ns,mp,mpcp,map__376947,map__376947__$1,vec__376948,_,p1,p2,vec__376949,x1,x2,vec__376950,y1,y2,vec__376951,vec__376952,nid1,cid1,vec__376953,nid2,cid2))
,mpcp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)))], null));
var map__376955__$1 = ((((!((map__376955 == null)))?((((map__376955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376955):map__376955);
var r = map__376955__$1;
var mpid = cljs.core.get.call(null,map__376955__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return dynomics.space.core.deselect_all.call(null,dynomics.space.core.update_curves_by_node.call(null,cljs.core.reduce.call(null,((function (ends,ends_ns,mp,mpcp,map__376955,map__376955__$1,r,mpid,map__376947,map__376947__$1,vec__376948,_,p1,p2,vec__376949,x1,x2,vec__376950,y1,y2,vec__376951,vec__376952,nid1,cid1,vec__376953,nid2,cid2){
return (function (r__$1,p__376957){
var vec__376958 = p__376957;
var id = cljs.core.nth.call(null,vec__376958,(0),null);
var cp = cljs.core.nth.call(null,vec__376958,(1),null);
return cljs.core.update_in.call(null,r__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378),curve_id], null),((function (vec__376958,id,cp,ends,ends_ns,mp,mpcp,map__376955,map__376955__$1,r,mpid,map__376947,map__376947__$1,vec__376948,_,p1,p2,vec__376949,x1,x2,vec__376950,y1,y2,vec__376951,vec__376952,nid1,cid1,vec__376953,nid2,cid2){
return (function (curve){
return cljs.core.conj.call(null,(function (){var or__35191__auto__ = curve;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cp], null));
});})(vec__376958,id,cp,ends,ends_ns,mp,mpcp,map__376955,map__376955__$1,r,mpid,map__376947,map__376947__$1,vec__376948,_,p1,p2,vec__376949,x1,x2,vec__376950,y1,y2,vec__376951,vec__376952,nid1,cid1,vec__376953,nid2,cid2))
);
});})(ends,ends_ns,mp,mpcp,map__376955,map__376955__$1,r,mpid,map__376947,map__376947__$1,vec__376948,_,p1,p2,vec__376949,x1,x2,vec__376950,y1,y2,vec__376951,vec__376952,nid1,cid1,vec__376953,nid2,cid2))
,r,cljs.core.map.call(null,cljs.core.vector,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,mpid,nid2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.core.twin.call(null,cid1,cljs.core.first.call(null,ends_ns)),cid1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cid2,dynomics.space.core.twin.call(null,cid2,cljs.core.last.call(null,ends_ns))], null)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,mpid,nid2], null),curve_id));
});

dynomics.space.core.add_curve_between_nodes.cljs$lang$maxFixedArity = 5;
/**
 * Removes the selected nodes and their edges
 */
dynomics.space.core.remove_selected_nodes = (function dynomics$space$core$remove_selected_nodes(p__376979){
var map__376984 = p__376979;
var map__376984__$1 = ((((!((map__376984 == null)))?((((map__376984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376984):map__376984);
var state = map__376984__$1;
var map__376985 = cljs.core.get.call(null,map__376984__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__376985__$1 = ((((!((map__376985 == null)))?((((map__376985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__376985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__376985):map__376985);
var selected_nodes = cljs.core.get.call(null,map__376985__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Remove ",selected_nodes);

return dynomics.space.core.add_connections_by_node.call(null,dynomics.space.core.update_compatibility_info.call(null,cljs.core.reduce.call(null,dynomics.space.core.remove_node_from_curves,dynomics.space.core.remove_edges.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),((function (map__376984,map__376984__$1,state,map__376985,map__376985__$1,selected_nodes){
return (function (nodes){
return cljs.core.apply.call(null,cljs.core.dissoc,nodes,cljs.core.map.call(null,cljs.core.last,selected_nodes));
});})(map__376984,map__376984__$1,state,map__376985,map__376985__$1,selected_nodes))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__376984,map__376984__$1,state,map__376985,map__376985__$1,selected_nodes){
return (function (g){
return loom.graph.remove_nodes.call(null,g,selected_nodes);
});})(map__376984,map__376984__$1,state,map__376985,map__376985__$1,selected_nodes))
),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"description","description",-1428560544),"Remove nodes"], null))),cljs.core.map.call(null,cljs.core.last,selected_nodes))));
});
dynomics.space.core.remove_selected = (function dynomics$space$core$remove_selected(p__377000){
var map__377005 = p__377000;
var map__377005__$1 = ((((!((map__377005 == null)))?((((map__377005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377005):map__377005);
var state = map__377005__$1;
var map__377006 = cljs.core.get.call(null,map__377005__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__377006__$1 = ((((!((map__377006 == null)))?((((map__377006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377006):map__377006);
var selected_nodes = cljs.core.get.call(null,map__377006__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var selected_curves = cljs.core.get.call(null,map__377006__$1,new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493));
return cljs.core.update_in.call(null,dynomics.space.core.remove_selected_nodes.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"curves","curves",-510805378)], null),((function (map__377005,map__377005__$1,state,map__377006,map__377006__$1,selected_nodes,selected_curves){
return (function (curves){
return cljs.core.apply.call(null,cljs.core.dissoc,curves,cljs.core.map.call(null,cljs.core.last,selected_curves));
});})(map__377005,map__377005__$1,state,map__377006,map__377006__$1,selected_nodes,selected_curves))
);
});
