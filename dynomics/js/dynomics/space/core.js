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
var x__24496__auto__ = x;
var y__24497__auto__ = (-1);
return ((x__24496__auto__ > y__24497__auto__) ? x__24496__auto__ : y__24497__auto__);
} else {
var x__24503__auto__ = x;
var y__24504__auto__ = (1);
return ((x__24503__auto__ < y__24504__auto__) ? x__24503__auto__ : y__24504__auto__);
}
});
dynomics.space.core.abs = (function dynomics$space$core$abs(x){
return Math.abs(x);
});
dynomics.space.core.PI = Math.PI;
dynomics.space.core.PI2 = ((2) * dynomics.space.core.PI);
dynomics.space.core.PIb4 = (0.25 * dynomics.space.core.PI);
dynomics.space.core.r2d = ((180) / dynomics.space.core.PI);
dynomics.space.core.angle = (function dynomics$space$core$angle(p__42775){
var vec__42777 = p__42775;
var x = cljs.core.nth.call(null,vec__42777,(0),null);
var y = cljs.core.nth.call(null,vec__42777,(1),null);
return Math.atan2(x,y);
});
dynomics.space.core.p2c = (function dynomics$space$core$p2c(p__42778){
var vec__42780 = p__42778;
var r = cljs.core.nth.call(null,vec__42780,(0),null);
var theta = cljs.core.nth.call(null,vec__42780,(1),null);
return cljs.core.map.call(null,dynomics.space.core.P.call(null,cljs.core._STAR_,r),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.core.cos.call(null,theta),dynomics.space.core.sin.call(null,theta)], null));
});
dynomics.space.core.c_STAR_ = (function dynomics$space$core$c_STAR_(p__42781,p__42782){
var vec__42785 = p__42781;
var ar = cljs.core.nth.call(null,vec__42785,(0),null);
var ai = cljs.core.nth.call(null,vec__42785,(1),null);
var vec__42786 = p__42782;
var br = cljs.core.nth.call(null,vec__42786,(0),null);
var bi = cljs.core.nth.call(null,vec__42786,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((ar * br) - (ai * bi)),((ai * br) + (ar * bi))], null);
});
dynomics.space.core.c_PLUS_ = (function dynomics$space$core$c_PLUS_(a,b){
return cljs.core.map.call(null,cljs.core._PLUS_,a,b);
});
dynomics.space.core.dmp = (function dynomics$space$core$dmp(points){
return cljs.core.map.call(null,(function (p__42789){
var vec__42790 = p__42789;
var p1 = cljs.core.nth.call(null,vec__42790,(0),null);
var p2 = cljs.core.nth.call(null,vec__42790,(1),null);
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,0.5),cljs.core.map.call(null,cljs.core._PLUS_,p1,p2));
}),cljs.core.partition.call(null,(2),(1),points));
});
dynomics.space.core.dot = (function dynomics$space$core$dot(var_args){
var args__25230__auto__ = [];
var len__25223__auto___42792 = arguments.length;
var i__25224__auto___42793 = (0);
while(true){
if((i__25224__auto___42793 < len__25223__auto___42792)){
args__25230__auto__.push((arguments[i__25224__auto___42793]));

var G__42794 = (i__25224__auto___42793 + (1));
i__25224__auto___42793 = G__42794;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((0) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((0)),(0))):null);
return dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic(argseq__25231__auto__);
});

dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic = (function (x){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.apply.call(null,cljs.core.map,cljs.core._STAR_,x));
});

dynomics.space.core.dot.cljs$lang$maxFixedArity = (0);

dynomics.space.core.dot.cljs$lang$applyTo = (function (seq42791){
return dynomics.space.core.dot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42791));
});
dynomics.space.core.sqrd = (function dynomics$space$core$sqrd(v){
return dynomics.space.core.dot.call(null,v,v);
});
dynomics.space.core.to_local = (function dynomics$space$core$to_local(p__42795,p__42796,p__42797){
var vec__42803 = p__42795;
var x = cljs.core.nth.call(null,vec__42803,(0),null);
var y = cljs.core.nth.call(null,vec__42803,(1),null);
var vec__42804 = p__42796;
var _ = cljs.core.nth.call(null,vec__42804,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__42804,(1),null);
var nid = cljs.core.nth.call(null,vec__42804,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__42804,(3),null);
var cid = cljs.core.nth.call(null,vec__42804,(4),null);
var map__42805 = p__42797;
var map__42805__$1 = ((((!((map__42805 == null)))?((((map__42805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42805):map__42805);
var space = map__42805__$1;
var node_scale = cljs.core.get.call(null,map__42805__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var vec__42807 = cljs.core.get_in.call(null,space,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx = cljs.core.nth.call(null,vec__42807,(0),null);
var ny = cljs.core.nth.call(null,vec__42807,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - nx) / node_scale),((y - ny) / node_scale)], null)], null);
});
/**
 * Returns the pair of control points with
 *   mirrored positions for the given control point
 */
dynomics.space.core.mirror_node = (function dynomics$space$core$mirror_node(p__42808,path,p__42809){
var vec__42815 = p__42808;
var x = cljs.core.nth.call(null,vec__42815,(0),null);
var y = cljs.core.nth.call(null,vec__42815,(1),null);
var map__42816 = p__42809;
var map__42816__$1 = ((((!((map__42816 == null)))?((((map__42816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42816):map__42816);
var space = map__42816__$1;
var node_scale = cljs.core.get.call(null,map__42816__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
var vec__42818 = path;
var _ = cljs.core.nth.call(null,vec__42818,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__42818,(1),null);
var nid = cljs.core.nth.call(null,vec__42818,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__42818,(3),null);
var cid = cljs.core.nth.call(null,vec__42818,(4),null);
var cp = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.mod.call(null,(cid + (2)),(4))], null);
var vec__42819 = cljs.core.get_in.call(null,space,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx = cljs.core.nth.call(null,vec__42819,(0),null);
var ny = cljs.core.nth.call(null,vec__42819,(1),null);
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
dynomics.space.core.quadrants_types_by_position = (function dynomics$space$core$quadrants_types_by_position(p__42820){
var map__42823 = p__42820;
var map__42823__$1 = ((((!((map__42823 == null)))?((((map__42823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42823):map__42823);
var r1 = cljs.core.get.call(null,map__42823__$1,new cljs.core.Keyword(null,"node-type","node-type",129492462));
var p1 = cljs.core.get.call(null,map__42823__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.map.call(null,((function (map__42823,map__42823__$1,r1,p1){
return (function (i){
return cljs.core.get_in.call(null,dynomics.space.core.node_types,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295)], null));
});})(map__42823,map__42823__$1,r1,p1))
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
dynomics.space.core.default_connections = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__42825){
var vec__42826 = p__42825;
var p = cljs.core.nth.call(null,vec__42826,(0),null);
var id = cljs.core.nth.call(null,vec__42826,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"position","position",-2011731912),p,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connection","connection",-123599300)], null);
}),dynomics.space.core.connections_by_vector));
/**
 * Returns a node of the given type
 */
dynomics.space.core.make_intersection_node = (function dynomics$space$core$make_intersection_node(var_args){
var args42827 = [];
var len__25223__auto___42830 = arguments.length;
var i__25224__auto___42831 = (0);
while(true){
if((i__25224__auto___42831 < len__25223__auto___42830)){
args42827.push((arguments[i__25224__auto___42831]));

var G__42832 = (i__25224__auto___42831 + (1));
i__25224__auto___42831 = G__42832;
continue;
} else {
}
break;
}

var G__42829 = args42827.length;
switch (G__42829) {
case 1:
return dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.make_intersection_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42827.length)].join('')));

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
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p__42836){
var vec__42837 = p__42836;
var _ = cljs.core.nth.call(null,vec__42837,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__42837,(1),null);
var id = cljs.core.nth.call(null,vec__42837,(2),null);
return id;
}),nodes));
});
dynomics.space.core.quadrant_info = (function dynomics$space$core$quadrant_info(nodes,p__42838){
var vec__42840 = p__42838;
var _ = cljs.core.nth.call(null,vec__42840,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__42840,(1),null);
var nid = cljs.core.nth.call(null,vec__42840,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__42840,(3),null);
var cid = cljs.core.nth.call(null,vec__42840,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node-type","node-type",129492462),cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"node-type","node-type",129492462)], null)),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid,new cljs.core.Keyword(null,"position","position",-2011731912)], null))], null);
});
/**
 * 
 *   Returns the given state with a map of node-node compatibilities added,
 *   of the form {[nodeid1 nodeid2] true [nodeid4 nodeid5] false}
 *   
 */
dynomics.space.core.add_compatibility_info = (function dynomics$space$core$add_compatibility_info(p__42841){
var map__42846 = p__42841;
var map__42846__$1 = ((((!((map__42846 == null)))?((((map__42846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42846):map__42846);
var state = map__42846__$1;
var map__42847 = cljs.core.get.call(null,map__42846__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__42847__$1 = ((((!((map__42847 == null)))?((((map__42847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42847):map__42847);
var nodes = cljs.core.get.call(null,map__42847__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__42847__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
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
dynomics.space.core.add_connections_by_node = (function dynomics$space$core$add_connections_by_node(p__42850){
var map__42855 = p__42850;
var map__42855__$1 = ((((!((map__42855 == null)))?((((map__42855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42855):map__42855);
var state = map__42855__$1;
var map__42856 = cljs.core.get.call(null,map__42855__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__42856__$1 = ((((!((map__42856 == null)))?((((map__42856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42856):map__42856);
var nodes = cljs.core.get.call(null,map__42856__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__42856__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var graph = cljs.core.get.call(null,map__42856__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
cljs.core.println.call(null,"  nodes ",cljs.core.count.call(null,loom.graph.nodes.call(null,graph)));

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"connections-by-node","connections-by-node",517626909)], null),cljs.core.zipmap.call(null,cljs.core.keys.call(null,nodes),cljs.core.map.call(null,dynomics.space.core.P.call(null,dynomics.space.core.connections_of_node,graph,edges),cljs.core.keys.call(null,nodes))));
});
/**
 * Following a node-type change, update the
 *   compatibility info for its connections
 */
dynomics.space.core.update_compatibility_info = (function dynomics$space$core$update_compatibility_info(var_args){
var args42859 = [];
var len__25223__auto___42872 = arguments.length;
var i__25224__auto___42873 = (0);
while(true){
if((i__25224__auto___42873 < len__25223__auto___42872)){
args42859.push((arguments[i__25224__auto___42873]));

var G__42874 = (i__25224__auto___42873 + (1));
i__25224__auto___42873 = G__42874;
continue;
} else {
}
break;
}

var G__42861 = args42859.length;
switch (G__42861) {
case 1:
return dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42859.length)].join('')));

}
});

dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$1 = (function (p__42862){
var map__42863 = p__42862;
var map__42863__$1 = ((((!((map__42863 == null)))?((((map__42863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42863):map__42863);
var state = map__42863__$1;
var map__42864 = cljs.core.get.call(null,map__42863__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__42864__$1 = ((((!((map__42864 == null)))?((((map__42864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42864):map__42864);
var selected_nodes = cljs.core.get.call(null,map__42864__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,dynomics.space.core.update_compatibility_info,state,dynomics.space.core.just_ids.call(null,selected_nodes));
});

dynomics.space.core.update_compatibility_info.cljs$core$IFn$_invoke$arity$2 = (function (p__42867,id){
var map__42868 = p__42867;
var map__42868__$1 = ((((!((map__42868 == null)))?((((map__42868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42868):map__42868);
var state = map__42868__$1;
var map__42869 = cljs.core.get.call(null,map__42868__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__42869__$1 = ((((!((map__42869 == null)))?((((map__42869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42869):map__42869);
var graph = cljs.core.get.call(null,map__42869__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var edges = cljs.core.get.call(null,map__42869__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var nodes = cljs.core.get.call(null,map__42869__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return cljs.core.reduce.call(null,((function (map__42868,map__42868__$1,state,map__42869,map__42869__$1,graph,edges,nodes){
return (function (s,edge){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024),dynomics.space.core.just_ids.call(null,edge)], null),dynomics.space.core.compare_quadrants.call(null,cljs.core.map.call(null,dynomics.space.core.quadrants_types_by_position,cljs.core.map.call(null,dynomics.space.core.P.call(null,dynomics.space.core.quadrant_info,nodes),edge))));
});})(map__42868,map__42868__$1,state,map__42869,map__42869__$1,graph,edges,nodes))
,state,dynomics.space.core.connections_of_node.call(null,graph,edges,id));
});

dynomics.space.core.update_compatibility_info.cljs$lang$maxFixedArity = 2;
/**
 * Adds a new node at the given mouse position
 */
dynomics.space.core.add_node = (function dynomics$space$core$add_node(p__42876){
var map__42881 = p__42876;
var map__42881__$1 = ((((!((map__42881 == null)))?((((map__42881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42881):map__42881);
var state = map__42881__$1;
var map__42882 = cljs.core.get.call(null,map__42881__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__42882__$1 = ((((!((map__42882 == null)))?((((map__42882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42882):map__42882);
var nodes = cljs.core.get.call(null,map__42882__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var max_node_id = cljs.core.get.call(null,map__42882__$1,new cljs.core.Keyword(null,"max-node-id","max-node-id",-75074557));
var p = cljs.core.get.call(null,map__42881__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var new_id = ((cljs.core.truth_(max_node_id)?max_node_id:((cljs.core.empty_QMARK_.call(null,nodes))?(0):cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.vals.call(null,nodes))))) + (1));
var new_node = cljs.core.assoc.call(null,dynomics.space.core.make_intersection_node.call(null,(3)),new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"position","position",-2011731912),p);
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new_id], null),new_node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (new_id,new_node,map__42881,map__42881__$1,state,map__42882,map__42882__$1,nodes,max_node_id,p){
return (function (g){
return loom.graph.add_nodes.call(null,g,new_id);
});})(new_id,new_node,map__42881,map__42881__$1,state,map__42882,map__42882__$1,nodes,max_node_id,p))
),new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673),new_id);
});
dynomics.space.core.deselect_all = (function dynomics$space$core$deselect_all(state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.PersistentHashSet.EMPTY);
});
/**
 * Returns the state with the given edges removed
 */
dynomics.space.core.remove_edges = (function dynomics$space$core$remove_edges(p__42885){
var map__42894 = p__42885;
var map__42894__$1 = ((((!((map__42894 == null)))?((((map__42894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42894):map__42894);
var state = map__42894__$1;
var map__42895 = cljs.core.get.call(null,map__42894__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__42895__$1 = ((((!((map__42895 == null)))?((((map__42895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42895):map__42895);
var selected_nodes = cljs.core.get.call(null,map__42895__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),((function (map__42894,map__42894__$1,state,map__42895,map__42895__$1,selected_nodes){
return (function (edges){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,((function (map__42894,map__42894__$1,state,map__42895,map__42895__$1,selected_nodes){
return (function (p__42898){
var vec__42899 = p__42898;
var vec__42900 = cljs.core.nth.call(null,vec__42899,(0),null);
var _ = cljs.core.nth.call(null,vec__42900,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__42900,(1),null);
var nid1 = cljs.core.nth.call(null,vec__42900,(2),null);
var ___$2 = cljs.core.nthnext.call(null,vec__42900,(3));
var vec__42901 = cljs.core.nth.call(null,vec__42899,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__42901,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__42901,(1),null);
var nid2 = cljs.core.nth.call(null,vec__42901,(2),null);
var ___$5 = cljs.core.nthnext.call(null,vec__42901,(3));
var or__24165__auto__ = selected_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid1], null));
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return selected_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nid2], null));
}
});})(map__42894,map__42894__$1,state,map__42895,map__42895__$1,selected_nodes))
,edges));
});})(map__42894,map__42894__$1,state,map__42895,map__42895__$1,selected_nodes))
);
});
/**
 * Removes the selected nodes and their edges
 */
dynomics.space.core.remove_selected_nodes = (function dynomics$space$core$remove_selected_nodes(p__42902){
var map__42907 = p__42902;
var map__42907__$1 = ((((!((map__42907 == null)))?((((map__42907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42907):map__42907);
var state = map__42907__$1;
var map__42908 = cljs.core.get.call(null,map__42907__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__42908__$1 = ((((!((map__42908 == null)))?((((map__42908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42908):map__42908);
var selected_nodes = cljs.core.get.call(null,map__42908__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Remove ",selected_nodes);

return dynomics.space.core.add_connections_by_node.call(null,dynomics.space.core.update_compatibility_info.call(null,dynomics.space.core.remove_edges.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),((function (map__42907,map__42907__$1,state,map__42908,map__42908__$1,selected_nodes){
return (function (nodes){
return cljs.core.apply.call(null,cljs.core.dissoc,nodes,cljs.core.map.call(null,cljs.core.last,selected_nodes));
});})(map__42907,map__42907__$1,state,map__42908,map__42908__$1,selected_nodes))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__42907,map__42907__$1,state,map__42908,map__42908__$1,selected_nodes){
return (function (g){
return loom.graph.remove_nodes.call(null,g,selected_nodes);
});})(map__42907,map__42907__$1,state,map__42908,map__42908__$1,selected_nodes))
),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"description","description",-1428560544),"Remove nodes"], null)))));
});
dynomics.space.core.add_graph = (function dynomics$space$core$add_graph(p__42911){
var map__42914 = p__42911;
var map__42914__$1 = ((((!((map__42914 == null)))?((((map__42914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42914):map__42914);
var space = map__42914__$1;
var edges = cljs.core.get.call(null,map__42914__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return cljs.core.assoc.call(null,space,new cljs.core.Keyword(null,"graph","graph",1558099509),cljs.core.apply.call(null,loom.graph.graph,dynomics.space.graph.simplify_edges.call(null,edges)));
});
dynomics.space.core.update_ds = (function dynomics$space$core$update_ds(p__42916){
var map__42919 = p__42916;
var map__42919__$1 = ((((!((map__42919 == null)))?((((map__42919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42919):map__42919);
var s = map__42919__$1;
var f = cljs.core.get.call(null,map__42919__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),((function (map__42919,map__42919__$1,s,f){
return (function (points){
return cljs.core.map.call(null,f,points);
});})(map__42919,map__42919__$1,s,f))
);
});
dynomics.space.core.random_points = (function dynomics$space$core$random_points(n){
return cljs.core.repeatedly.call(null,n,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.call(null),cljs.core.rand.call(null)], null);
}));
});
dynomics.space.core.grid_points = (function dynomics$space$core$grid_points(var_args){
var args42921 = [];
var len__25223__auto___42924 = arguments.length;
var i__25224__auto___42925 = (0);
while(true){
if((i__25224__auto___42925 < len__25223__auto___42924)){
args42921.push((arguments[i__25224__auto___42925]));

var G__42926 = (i__25224__auto___42925 + (1));
i__25224__auto___42925 = G__42926;
continue;
} else {
}
break;
}

var G__42923 = args42921.length;
switch (G__42923) {
case 1:
return dynomics.space.core.grid_points.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.space.core.grid_points.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42921.length)].join('')));

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
var args42928 = [];
var len__25223__auto___42931 = arguments.length;
var i__25224__auto___42932 = (0);
while(true){
if((i__25224__auto___42932 < len__25223__auto___42931)){
args42928.push((arguments[i__25224__auto___42932]));

var G__42933 = (i__25224__auto___42932 + (1));
i__25224__auto___42932 = G__42933;
continue;
} else {
}
break;
}

var G__42930 = args42928.length;
switch (G__42930) {
case 0:
return dynomics.space.core.make_ds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.space.core.make_ds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42928.length)].join('')));

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
var args42935 = [];
var len__25223__auto___42938 = arguments.length;
var i__25224__auto___42939 = (0);
while(true){
if((i__25224__auto___42939 < len__25223__auto___42938)){
args42935.push((arguments[i__25224__auto___42939]));

var G__42940 = (i__25224__auto___42939 + (1));
i__25224__auto___42939 = G__42940;
continue;
} else {
}
break;
}

var G__42937 = args42935.length;
switch (G__42937) {
case 3:
return dynomics.space.core.ds_evolution.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.space.core.ds_evolution.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42935.length)].join('')));

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
dynomics.space.core.make_connections = (function dynomics$space$core$make_connections(p__42942){
var map__42949 = p__42942;
var map__42949__$1 = ((((!((map__42949 == null)))?((((map__42949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42949):map__42949);
var state = map__42949__$1;
var map__42950 = cljs.core.get.call(null,map__42949__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__42950__$1 = ((((!((map__42950 == null)))?((((map__42950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42950):map__42950);
var nodes = cljs.core.get.call(null,map__42950__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var selected_nodes = cljs.core.get.call(null,map__42950__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Connect ",selected_nodes);

if(((2) === cljs.core.count.call(null,selected_nodes))){
return dynomics.space.core.add_connections_by_node.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,dynomics.space.core.add_compatibility_info.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),cljs.core.conj,cljs.core.vec.call(null,selected_nodes)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"graph","graph",1558099509)], null),((function (map__42949,map__42949__$1,state,map__42950,map__42950__$1,nodes,selected_nodes){
return (function (g){
return loom.graph.add_edges.call(null,g,cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__42949,map__42949__$1,state,map__42950,map__42950__$1,nodes,selected_nodes){
return (function (p__42953){
var vec__42954 = p__42953;
var _ = cljs.core.nth.call(null,vec__42954,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__42954,(1),null);
var nid = cljs.core.nth.call(null,vec__42954,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__42954,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__42954,(4),null);
return nid;
});})(map__42949,map__42949__$1,state,map__42950,map__42950__$1,nodes,selected_nodes))
,selected_nodes)));
});})(map__42949,map__42949__$1,state,map__42950,map__42950__$1,nodes,selected_nodes))
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
return (function (p__42960){
var map__42961 = p__42960;
var map__42961__$1 = ((((!((map__42961 == null)))?((((map__42961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42961):map__42961);
var state = map__42961__$1;
var map__42962 = cljs.core.get.call(null,map__42961__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__42962__$1 = ((((!((map__42962 == null)))?((((map__42962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42962):map__42962);
var selected_nodes = cljs.core.get.call(null,map__42962__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
cljs.core.println.call(null,"Set node type of ",selected_nodes," to ",id);

var r = dynomics.space.core.update_compatibility_info.call(null,cljs.core.assoc.call(null,cljs.core.reduce.call(null,((function (map__42961,map__42961__$1,state,map__42962,map__42962__$1,selected_nodes){
return (function (r,path){
return cljs.core.assoc_in.call(null,r,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"node-type","node-type",129492462)),id);
});})(map__42961,map__42961__$1,state,map__42962,map__42962__$1,selected_nodes))
,state,selected_nodes),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Node type"),cljs.core.str(id)].join('')], null)));
cljs.core.println.call(null,"  updated ",cljs.core.get_in.call(null,r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"compatibilities","compatibilities",-1351463024)], null)));

return r;
});
});
dynomics.space.core.simplify_connection = (function dynomics$space$core$simplify_connection(p__42965){
var vec__42967 = p__42965;
var _ = cljs.core.nth.call(null,vec__42967,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__42967,(1),null);
var nid = cljs.core.nth.call(null,vec__42967,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__42967,(3),null);
var cid = cljs.core.nth.call(null,vec__42967,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,cid], null);
});
dynomics.space.core.simplify_connections = (function dynomics$space$core$simplify_connections(p__42968){
var vec__42976 = p__42968;
var map__42977 = cljs.core.nth.call(null,vec__42976,(0),null);
var map__42977__$1 = ((((!((map__42977 == null)))?((((map__42977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42977):map__42977);
var nodes = cljs.core.get.call(null,map__42977__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__42977__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edges","edges",-694791395),cljs.core.map.call(null,((function (vec__42976,map__42977,map__42977__$1,nodes,edges){
return (function (p__42979){
var vec__42980 = p__42979;
var vec__42981 = cljs.core.nth.call(null,vec__42980,(0),null);
var _ = cljs.core.nth.call(null,vec__42981,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__42981,(1),null);
var nid1 = cljs.core.nth.call(null,vec__42981,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__42981,(3),null);
var cid1 = cljs.core.nth.call(null,vec__42981,(4),null);
var vec__42982 = cljs.core.nth.call(null,vec__42980,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__42982,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__42982,(1),null);
var nid2 = cljs.core.nth.call(null,vec__42982,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__42982,(3),null);
var cid2 = cljs.core.nth.call(null,vec__42982,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null);
});})(vec__42976,map__42977,map__42977__$1,nodes,edges))
,edges),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes], null);
});
dynomics.space.core.insert_in = (function dynomics$space$core$insert_in(v,i,x){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.conj.call(null,cljs.core.subvec.call(null,v,(0),i),x),cljs.core.subvec.call(null,v,i)));
});
dynomics.space.core.with_compatibilities = (function dynomics$space$core$with_compatibilities(p__42983,compatibilities){
var map__42988 = p__42983;
var map__42988__$1 = ((((!((map__42988 == null)))?((((map__42988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42988):map__42988);
var e = map__42988__$1;
var vec__42989 = cljs.core.get.call(null,map__42988__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__42990 = cljs.core.nth.call(null,vec__42989,(0),null);
var nid1 = cljs.core.nth.call(null,vec__42990,(0),null);
var nid2 = cljs.core.nth.call(null,vec__42990,(1),null);
var _ = cljs.core.nthnext.call(null,vec__42989,(1));
return cljs.core.assoc.call(null,e,new cljs.core.Keyword(null,"compatible?","compatible?",923422575),compatibilities.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null)));
});
dynomics.space.core.edge_points = (function dynomics$space$core$edge_points(nodes,p__42992){
var vec__43000 = p__42992;
var vec__43001 = cljs.core.nth.call(null,vec__43000,(0),null);
var _ = cljs.core.nth.call(null,vec__43001,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__43001,(1),null);
var nid1 = cljs.core.nth.call(null,vec__43001,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__43001,(3),null);
var cid1 = cljs.core.nth.call(null,vec__43001,(4),null);
var vec__43002 = cljs.core.nth.call(null,vec__43000,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__43002,(0),null);
var ___$4 = cljs.core.nth.call(null,vec__43002,(1),null);
var nid2 = cljs.core.nth.call(null,vec__43002,(2),null);
var ___$5 = cljs.core.nth.call(null,vec__43002,(3),null);
var cid2 = cljs.core.nth.call(null,vec__43002,(4),null);
var vec__43003 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx1 = cljs.core.nth.call(null,vec__43003,(0),null);
var ny1 = cljs.core.nth.call(null,vec__43003,(1),null);
var vec__43004 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var nx2 = cljs.core.nth.call(null,vec__43004,(0),null);
var ny2 = cljs.core.nth.call(null,vec__43004,(1),null);
var vec__43005 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid1,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx1 = cljs.core.nth.call(null,vec__43005,(0),null);
var cy1 = cljs.core.nth.call(null,vec__43005,(1),null);
var vec__43006 = cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,new cljs.core.Keyword(null,"connections","connections",-2064090887),cid2,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var cx2 = cljs.core.nth.call(null,vec__43006,(0),null);
var cy2 = cljs.core.nth.call(null,vec__43006,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx2,ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx1,cx2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cy1,cy2], null)], null),new cljs.core.Keyword(null,"connections","connections",-2064090887),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,cid1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid2,cid2], null)], null)], null);
});
dynomics.space.core.make_open_regions = (function dynomics$space$core$make_open_regions(node_scale,p__43007){
var vec__43021 = p__43007;
var node_id = cljs.core.nth.call(null,vec__43021,(0),null);
var node_type = cljs.core.nth.call(null,vec__43021,(1),null);
var edge_pairs = cljs.core.nth.call(null,vec__43021,(2),null);
cljs.core.println.call(null,"   >>> ",node_id,cljs.core.count.call(null,edge_pairs));

return cljs.core.map.call(null,((function (vec__43021,node_id,node_type,edge_pairs){
return (function (edge_pair){
var vec__43022 = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"connections","connections",-2064090887),edge_pair);
var _ = cljs.core.nth.call(null,vec__43022,(0),null);
var vec__43023 = cljs.core.nth.call(null,vec__43022,(1),null);
var nid1 = cljs.core.nth.call(null,vec__43023,(0),null);
var x = cljs.core.nth.call(null,vec__43023,(1),null);
var vec__43024 = cljs.core.nth.call(null,vec__43022,(2),null);
var nid2 = cljs.core.nth.call(null,vec__43024,(0),null);
var y = cljs.core.nth.call(null,vec__43024,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__43022,(3),null);
var xy = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var qv = dynomics.space.core.quadrant_vectors_by_connectors.call(null,xy);
var qt = dynomics.space.core.quadrant_types_by_connector_pair.call(null,node_type,qv);
cljs.core.println.call(null,"       > ",node_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid1,nid2], null),xy,qt,qv);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node-id","node-id",779482292),node_id,new cljs.core.Keyword(null,"quadrant-type","quadrant-type",-1306551370),qt,new cljs.core.Keyword(null,"quadrant-vector","quadrant-vector",1151152631),qv,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.mapcat.call(null,((function (vec__43022,_,vec__43023,nid1,x,vec__43024,nid2,y,___$1,xy,qv,qt,vec__43021,node_id,node_type,edge_pairs){
return (function (p__43025){
var map__43026 = p__43025;
var map__43026__$1 = ((((!((map__43026 == null)))?((((map__43026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43026):map__43026);
var vec__43027 = cljs.core.get.call(null,map__43026__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var vec__43028 = cljs.core.nth.call(null,vec__43027,(0),null);
var nid1__$1 = cljs.core.nth.call(null,vec__43028,(0),null);
var nid2__$1 = cljs.core.nth.call(null,vec__43028,(1),null);
var vec__43029 = cljs.core.nth.call(null,vec__43027,(1),null);
var nx1 = cljs.core.nth.call(null,vec__43029,(0),null);
var ny1 = cljs.core.nth.call(null,vec__43029,(1),null);
var vec__43030 = cljs.core.nth.call(null,vec__43027,(2),null);
var nx2 = cljs.core.nth.call(null,vec__43030,(0),null);
var ny2 = cljs.core.nth.call(null,vec__43030,(1),null);
var vec__43031 = cljs.core.nth.call(null,vec__43027,(3),null);
var cx1 = cljs.core.nth.call(null,vec__43031,(0),null);
var cx2 = cljs.core.nth.call(null,vec__43031,(1),null);
var vec__43032 = cljs.core.nth.call(null,vec__43027,(4),null);
var cy1 = cljs.core.nth.call(null,vec__43032,(0),null);
var cy2 = cljs.core.nth.call(null,vec__43032,(1),null);
var cnx = cljs.core.get.call(null,map__43026__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return cljs.core.map.call(null,dynomics.ui.svg.make_bezier,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx1,ny1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx1 + (node_scale * cx1)),(ny1 + (node_scale * cy1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx2,ny2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nx2 + (node_scale * cx2)),(ny2 + (node_scale * cy2))], null)], null)], null));
});})(vec__43022,_,vec__43023,nid1,x,vec__43024,nid2,y,___$1,xy,qv,qt,vec__43021,node_id,node_type,edge_pairs))
,edge_pair)], null);
});})(vec__43021,node_id,node_type,edge_pairs))
,edge_pairs);
});
dynomics.space.core.reverse_edge = (function dynomics$space$core$reverse_edge(p__43034){
var map__43038 = p__43034;
var map__43038__$1 = ((((!((map__43038 == null)))?((((map__43038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43038):map__43038);
var vec__43039 = cljs.core.get.call(null,map__43038__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var ids = cljs.core.nth.call(null,vec__43039,(0),null);
var p1 = cljs.core.nth.call(null,vec__43039,(1),null);
var p2 = cljs.core.nth.call(null,vec__43039,(2),null);
var cx = cljs.core.nth.call(null,vec__43039,(3),null);
var cy = cljs.core.nth.call(null,vec__43039,(4),null);
var c = cljs.core.get.call(null,map__43038__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reverse.call(null,ids),p2,p1,cljs.core.reverse.call(null,cx),cljs.core.reverse.call(null,cy)], null),new cljs.core.Keyword(null,"connections","connections",-2064090887),cljs.core.reverse.call(null,c)], null);
});
dynomics.space.core.edge_pairs_by_node = (function dynomics$space$core$edge_pairs_by_node(p__43041){
var map__43058 = p__43041;
var map__43058__$1 = ((((!((map__43058 == null)))?((((map__43058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43058):map__43058);
var nodes = cljs.core.get.call(null,map__43058__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var connections_by_node = cljs.core.get.call(null,map__43058__$1,new cljs.core.Keyword(null,"connections-by-node","connections-by-node",517626909));
var node_scale = cljs.core.get.call(null,map__43058__$1,new cljs.core.Keyword(null,"node-scale","node-scale",-1577503511));
cljs.core.println.call(null,"cbn",connections_by_node);

return cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.empty_QMARK_,cljs.core.last),cljs.core.map.call(null,((function (map__43058,map__43058__$1,nodes,connections_by_node,node_scale){
return (function (p__43060){
var vec__43061 = p__43060;
var id = cljs.core.nth.call(null,vec__43061,(0),null);
var connections = cljs.core.nth.call(null,vec__43061,(1),null);
cljs.core.println.call(null," possible quadrants for node ",id,cljs.core.count.call(null,connections));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get_in.call(null,nodes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"node-type","node-type",129492462)], null)),cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.comp.call(null,dynomics.space.core.reverse_edge,cljs.core.first),cljs.core.last),cljs.core.filter.call(null,((function (vec__43061,id,connections,map__43058,map__43058__$1,nodes,connections_by_node,node_scale){
return (function (p__43062){
var vec__43063 = p__43062;
var map__43064 = cljs.core.nth.call(null,vec__43063,(0),null);
var map__43064__$1 = ((((!((map__43064 == null)))?((((map__43064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43064):map__43064);
var vec__43065 = cljs.core.get.call(null,map__43064__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var vec__43066 = cljs.core.nth.call(null,vec__43065,(0),null);
var _ = cljs.core.nth.call(null,vec__43066,(0),null);
var a = cljs.core.nth.call(null,vec__43066,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__43065,(1),null);
var map__43067 = cljs.core.nth.call(null,vec__43063,(1),null);
var map__43067__$1 = ((((!((map__43067 == null)))?((((map__43067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43067):map__43067);
var vec__43068 = cljs.core.get.call(null,map__43067__$1,new cljs.core.Keyword(null,"connections","connections",-2064090887));
var vec__43069 = cljs.core.nth.call(null,vec__43068,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__43069,(0),null);
var b = cljs.core.nth.call(null,vec__43069,(1),null);
var ___$3 = cljs.core.nth.call(null,vec__43068,(1),null);
return !(((2) === dynomics.space.core.abs.call(null,(a - b))));
});})(vec__43061,id,connections,map__43058,map__43058__$1,nodes,connections_by_node,node_scale))
,cljs.core.take.call(null,cljs.core.count.call(null,connections),cljs.core.partition.call(null,(2),(1),cljs.core.map.call(null,cljs.core.partial.call(null,dynomics.space.core.edge_points,nodes),cljs.core.cycle.call(null,connections))))))], null);
});})(map__43058,map__43058__$1,nodes,connections_by_node,node_scale))
,cljs.core.filter.call(null,((function (map__43058,map__43058__$1,nodes,connections_by_node,node_scale){
return (function (p__43072){
var vec__43073 = p__43072;
var k = cljs.core.nth.call(null,vec__43073,(0),null);
var v = cljs.core.nth.call(null,vec__43073,(1),null);
return (cljs.core.count.call(null,v) > (1));
});})(map__43058,map__43058__$1,nodes,connections_by_node,node_scale))
,cljs.core.map.call(null,dynomics.space.core.J.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),dynomics.space.core.C.call(null,connections_by_node,new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.vals.call(null,nodes)))));
});

//# sourceMappingURL=core.js.map