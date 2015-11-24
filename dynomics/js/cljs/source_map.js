// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__1879400){
var vec__1879401 = p__1879400;
var i = cljs.core.nth.call(null,vec__1879401,(0),null);
var v = cljs.core.nth.call(null,vec__1879401,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__1879403 = seg;
var gcol = cljs.core.nth.call(null,vec__1879403,(0),null);
var source = cljs.core.nth.call(null,vec__1879403,(1),null);
var line = cljs.core.nth.call(null,vec__1879403,(2),null);
var col = cljs.core.nth.call(null,vec__1879403,(3),null);
var name = cljs.core.nth.call(null,vec__1879403,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__1879406 = seg;
var gcol = cljs.core.nth.call(null,vec__1879406,(0),null);
var source = cljs.core.nth.call(null,vec__1879406,(1),null);
var line = cljs.core.nth.call(null,vec__1879406,(2),null);
var col = cljs.core.nth.call(null,vec__1879406,(3),null);
var name = cljs.core.nth.call(null,vec__1879406,(4),null);
var vec__1879407 = relseg;
var rgcol = cljs.core.nth.call(null,vec__1879407,(0),null);
var rsource = cljs.core.nth.call(null,vec__1879407,(1),null);
var rline = cljs.core.nth.call(null,vec__1879407,(2),null);
var rcol = cljs.core.nth.call(null,vec__1879407,(3),null);
var rname = cljs.core.nth.call(null,vec__1879407,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__24161__auto__ = source;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__24161__auto__ = line;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__24161__auto__ = col;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__24161__auto__ = name;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__1879410 = segmap;
var map__1879410__$1 = ((((!((map__1879410 == null)))?((((map__1879410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1879410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1879410):map__1879410);
var gcol = cljs.core.get.call(null,map__1879410__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__1879410__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__1879410__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__1879410__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__1879410__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__1879410,map__1879410__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__1879410,map__1879410__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__1879410,map__1879410__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__1879410,map__1879410__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__1879410,map__1879410__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__1879410,map__1879410__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args1879412 = [];
var len__25219__auto___1879416 = arguments.length;
var i__25220__auto___1879417 = (0);
while(true){
if((i__25220__auto___1879417 < len__25219__auto___1879416)){
args1879412.push((arguments[i__25220__auto___1879417]));

var G__1879418 = (i__25220__auto___1879417 + (1));
i__25220__auto___1879417 = G__1879418;
continue;
} else {
}
break;
}

var G__1879414 = args1879412.length;
switch (G__1879414) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1879412.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__1879415 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__1879420 = cljs.core.next.call(null,segs__$1);
var G__1879421 = nrelseg;
var G__1879422 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__1879420;
relseg__$1 = G__1879421;
result__$1 = G__1879422;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__1879415,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__1879415,(1),null);
var G__1879423 = (gline + (1));
var G__1879424 = cljs.core.next.call(null,lines__$1);
var G__1879425 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__1879426 = result__$1;
gline = G__1879423;
lines__$1 = G__1879424;
relseg = G__1879425;
result = G__1879426;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__1879430 = segmap;
var map__1879430__$1 = ((((!((map__1879430 == null)))?((((map__1879430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1879430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1879430):map__1879430);
var gcol = cljs.core.get.call(null,map__1879430__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__1879430__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__1879430__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__1879430__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__1879430__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__1879430,map__1879430__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__1879430,map__1879430__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__1879427_SHARP_){
return cljs.core.conj.call(null,p1__1879427_SHARP_,d__$1);
});})(map__1879430,map__1879430__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__1879430,map__1879430__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args1879432 = [];
var len__25219__auto___1879436 = arguments.length;
var i__25220__auto___1879437 = (0);
while(true){
if((i__25220__auto___1879437 < len__25219__auto___1879436)){
args1879432.push((arguments[i__25220__auto___1879437]));

var G__1879438 = (i__25220__auto___1879437 + (1));
i__25220__auto___1879437 = G__1879438;
continue;
} else {
}
break;
}

var G__1879434 = args1879432.length;
switch (G__1879434) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1879432.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__1879435 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__1879440 = cljs.core.next.call(null,segs__$1);
var G__1879441 = nrelseg;
var G__1879442 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__1879440;
relseg__$1 = G__1879441;
result__$1 = G__1879442;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__1879435,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__1879435,(1),null);
var G__1879443 = (gline + (1));
var G__1879444 = cljs.core.next.call(null,lines__$1);
var G__1879445 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__1879446 = result__$1;
gline = G__1879443;
lines__$1 = G__1879444;
relseg = G__1879445;
result = G__1879446;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__1879453){
var vec__1879454 = p__1879453;
var _ = cljs.core.nth.call(null,vec__1879454,(0),null);
var source = cljs.core.nth.call(null,vec__1879454,(1),null);
var line = cljs.core.nth.call(null,vec__1879454,(2),null);
var col = cljs.core.nth.call(null,vec__1879454,(3),null);
var name = cljs.core.nth.call(null,vec__1879454,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__1879455){
var vec__1879456 = p__1879455;
var gcol = cljs.core.nth.call(null,vec__1879456,(0),null);
var sidx = cljs.core.nth.call(null,vec__1879456,(1),null);
var line = cljs.core.nth.call(null,vec__1879456,(2),null);
var col = cljs.core.nth.call(null,vec__1879456,(3),null);
var name = cljs.core.nth.call(null,vec__1879456,(4),null);
var seg = vec__1879456;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__1879456,gcol,sidx,line,col,name,seg,relseg){
return (function (p__1879457){
var vec__1879458 = p__1879457;
var _ = cljs.core.nth.call(null,vec__1879458,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__1879458,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__1879458,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__1879458,(3),null);
var lname = cljs.core.nth.call(null,vec__1879458,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__24161__auto__ = name;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__1879456,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__24161__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__1879512 = cljs.core.seq.call(null,infos);
var chunk__1879513 = null;
var count__1879514 = (0);
var i__1879515 = (0);
while(true){
if((i__1879515 < count__1879514)){
var info = cljs.core._nth.call(null,chunk__1879513,i__1879515);
var segv_1879562 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_1879563 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_1879564 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_1879563 > (lc_1879564 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__1879512,chunk__1879513,count__1879514,i__1879515,segv_1879562,gline_1879563,lc_1879564,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_1879563 - (lc_1879564 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_1879562], null));
});})(seq__1879512,chunk__1879513,count__1879514,i__1879515,segv_1879562,gline_1879563,lc_1879564,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__1879512,chunk__1879513,count__1879514,i__1879515,segv_1879562,gline_1879563,lc_1879564,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1879563], null),cljs.core.conj,segv_1879562);
});})(seq__1879512,chunk__1879513,count__1879514,i__1879515,segv_1879562,gline_1879563,lc_1879564,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__1879565 = seq__1879512;
var G__1879566 = chunk__1879513;
var G__1879567 = count__1879514;
var G__1879568 = (i__1879515 + (1));
seq__1879512 = G__1879565;
chunk__1879513 = G__1879566;
count__1879514 = G__1879567;
i__1879515 = G__1879568;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__1879512);
if(temp__4425__auto__){
var seq__1879512__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1879512__$1)){
var c__24964__auto__ = cljs.core.chunk_first.call(null,seq__1879512__$1);
var G__1879569 = cljs.core.chunk_rest.call(null,seq__1879512__$1);
var G__1879570 = c__24964__auto__;
var G__1879571 = cljs.core.count.call(null,c__24964__auto__);
var G__1879572 = (0);
seq__1879512 = G__1879569;
chunk__1879513 = G__1879570;
count__1879514 = G__1879571;
i__1879515 = G__1879572;
continue;
} else {
var info = cljs.core.first.call(null,seq__1879512__$1);
var segv_1879573 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_1879574 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_1879575 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_1879574 > (lc_1879575 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__1879512,chunk__1879513,count__1879514,i__1879515,segv_1879573,gline_1879574,lc_1879575,info,seq__1879512__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_1879574 - (lc_1879575 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_1879573], null));
});})(seq__1879512,chunk__1879513,count__1879514,i__1879515,segv_1879573,gline_1879574,lc_1879575,info,seq__1879512__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__1879512,chunk__1879513,count__1879514,i__1879515,segv_1879573,gline_1879574,lc_1879575,info,seq__1879512__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1879574], null),cljs.core.conj,segv_1879573);
});})(seq__1879512,chunk__1879513,count__1879514,i__1879515,segv_1879573,gline_1879574,lc_1879575,info,seq__1879512__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__1879576 = cljs.core.next.call(null,seq__1879512__$1);
var G__1879577 = null;
var G__1879578 = (0);
var G__1879579 = (0);
seq__1879512 = G__1879576;
chunk__1879513 = G__1879577;
count__1879514 = G__1879578;
i__1879515 = G__1879579;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__1879516_1879580 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__1879517_1879581 = null;
var count__1879518_1879582 = (0);
var i__1879519_1879583 = (0);
while(true){
if((i__1879519_1879583 < count__1879518_1879582)){
var vec__1879520_1879584 = cljs.core._nth.call(null,chunk__1879517_1879581,i__1879519_1879583);
var source_idx_1879585 = cljs.core.nth.call(null,vec__1879520_1879584,(0),null);
var vec__1879521_1879586 = cljs.core.nth.call(null,vec__1879520_1879584,(1),null);
var __1879587 = cljs.core.nth.call(null,vec__1879521_1879586,(0),null);
var lines_1879588__$1 = cljs.core.nth.call(null,vec__1879521_1879586,(1),null);
var seq__1879522_1879589 = cljs.core.seq.call(null,lines_1879588__$1);
var chunk__1879523_1879590 = null;
var count__1879524_1879591 = (0);
var i__1879525_1879592 = (0);
while(true){
if((i__1879525_1879592 < count__1879524_1879591)){
var vec__1879526_1879593 = cljs.core._nth.call(null,chunk__1879523_1879590,i__1879525_1879592);
var line_1879594 = cljs.core.nth.call(null,vec__1879526_1879593,(0),null);
var cols_1879595 = cljs.core.nth.call(null,vec__1879526_1879593,(1),null);
var seq__1879527_1879596 = cljs.core.seq.call(null,cols_1879595);
var chunk__1879528_1879597 = null;
var count__1879529_1879598 = (0);
var i__1879530_1879599 = (0);
while(true){
if((i__1879530_1879599 < count__1879529_1879598)){
var vec__1879531_1879600 = cljs.core._nth.call(null,chunk__1879528_1879597,i__1879530_1879599);
var col_1879601 = cljs.core.nth.call(null,vec__1879531_1879600,(0),null);
var infos_1879602 = cljs.core.nth.call(null,vec__1879531_1879600,(1),null);
encode_cols.call(null,infos_1879602,source_idx_1879585,line_1879594,col_1879601);

var G__1879603 = seq__1879527_1879596;
var G__1879604 = chunk__1879528_1879597;
var G__1879605 = count__1879529_1879598;
var G__1879606 = (i__1879530_1879599 + (1));
seq__1879527_1879596 = G__1879603;
chunk__1879528_1879597 = G__1879604;
count__1879529_1879598 = G__1879605;
i__1879530_1879599 = G__1879606;
continue;
} else {
var temp__4425__auto___1879607 = cljs.core.seq.call(null,seq__1879527_1879596);
if(temp__4425__auto___1879607){
var seq__1879527_1879608__$1 = temp__4425__auto___1879607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1879527_1879608__$1)){
var c__24964__auto___1879609 = cljs.core.chunk_first.call(null,seq__1879527_1879608__$1);
var G__1879610 = cljs.core.chunk_rest.call(null,seq__1879527_1879608__$1);
var G__1879611 = c__24964__auto___1879609;
var G__1879612 = cljs.core.count.call(null,c__24964__auto___1879609);
var G__1879613 = (0);
seq__1879527_1879596 = G__1879610;
chunk__1879528_1879597 = G__1879611;
count__1879529_1879598 = G__1879612;
i__1879530_1879599 = G__1879613;
continue;
} else {
var vec__1879532_1879614 = cljs.core.first.call(null,seq__1879527_1879608__$1);
var col_1879615 = cljs.core.nth.call(null,vec__1879532_1879614,(0),null);
var infos_1879616 = cljs.core.nth.call(null,vec__1879532_1879614,(1),null);
encode_cols.call(null,infos_1879616,source_idx_1879585,line_1879594,col_1879615);

var G__1879617 = cljs.core.next.call(null,seq__1879527_1879608__$1);
var G__1879618 = null;
var G__1879619 = (0);
var G__1879620 = (0);
seq__1879527_1879596 = G__1879617;
chunk__1879528_1879597 = G__1879618;
count__1879529_1879598 = G__1879619;
i__1879530_1879599 = G__1879620;
continue;
}
} else {
}
}
break;
}

var G__1879621 = seq__1879522_1879589;
var G__1879622 = chunk__1879523_1879590;
var G__1879623 = count__1879524_1879591;
var G__1879624 = (i__1879525_1879592 + (1));
seq__1879522_1879589 = G__1879621;
chunk__1879523_1879590 = G__1879622;
count__1879524_1879591 = G__1879623;
i__1879525_1879592 = G__1879624;
continue;
} else {
var temp__4425__auto___1879625 = cljs.core.seq.call(null,seq__1879522_1879589);
if(temp__4425__auto___1879625){
var seq__1879522_1879626__$1 = temp__4425__auto___1879625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1879522_1879626__$1)){
var c__24964__auto___1879627 = cljs.core.chunk_first.call(null,seq__1879522_1879626__$1);
var G__1879628 = cljs.core.chunk_rest.call(null,seq__1879522_1879626__$1);
var G__1879629 = c__24964__auto___1879627;
var G__1879630 = cljs.core.count.call(null,c__24964__auto___1879627);
var G__1879631 = (0);
seq__1879522_1879589 = G__1879628;
chunk__1879523_1879590 = G__1879629;
count__1879524_1879591 = G__1879630;
i__1879525_1879592 = G__1879631;
continue;
} else {
var vec__1879533_1879632 = cljs.core.first.call(null,seq__1879522_1879626__$1);
var line_1879633 = cljs.core.nth.call(null,vec__1879533_1879632,(0),null);
var cols_1879634 = cljs.core.nth.call(null,vec__1879533_1879632,(1),null);
var seq__1879534_1879635 = cljs.core.seq.call(null,cols_1879634);
var chunk__1879535_1879636 = null;
var count__1879536_1879637 = (0);
var i__1879537_1879638 = (0);
while(true){
if((i__1879537_1879638 < count__1879536_1879637)){
var vec__1879538_1879639 = cljs.core._nth.call(null,chunk__1879535_1879636,i__1879537_1879638);
var col_1879640 = cljs.core.nth.call(null,vec__1879538_1879639,(0),null);
var infos_1879641 = cljs.core.nth.call(null,vec__1879538_1879639,(1),null);
encode_cols.call(null,infos_1879641,source_idx_1879585,line_1879633,col_1879640);

var G__1879642 = seq__1879534_1879635;
var G__1879643 = chunk__1879535_1879636;
var G__1879644 = count__1879536_1879637;
var G__1879645 = (i__1879537_1879638 + (1));
seq__1879534_1879635 = G__1879642;
chunk__1879535_1879636 = G__1879643;
count__1879536_1879637 = G__1879644;
i__1879537_1879638 = G__1879645;
continue;
} else {
var temp__4425__auto___1879646__$1 = cljs.core.seq.call(null,seq__1879534_1879635);
if(temp__4425__auto___1879646__$1){
var seq__1879534_1879647__$1 = temp__4425__auto___1879646__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1879534_1879647__$1)){
var c__24964__auto___1879648 = cljs.core.chunk_first.call(null,seq__1879534_1879647__$1);
var G__1879649 = cljs.core.chunk_rest.call(null,seq__1879534_1879647__$1);
var G__1879650 = c__24964__auto___1879648;
var G__1879651 = cljs.core.count.call(null,c__24964__auto___1879648);
var G__1879652 = (0);
seq__1879534_1879635 = G__1879649;
chunk__1879535_1879636 = G__1879650;
count__1879536_1879637 = G__1879651;
i__1879537_1879638 = G__1879652;
continue;
} else {
var vec__1879539_1879653 = cljs.core.first.call(null,seq__1879534_1879647__$1);
var col_1879654 = cljs.core.nth.call(null,vec__1879539_1879653,(0),null);
var infos_1879655 = cljs.core.nth.call(null,vec__1879539_1879653,(1),null);
encode_cols.call(null,infos_1879655,source_idx_1879585,line_1879633,col_1879654);

var G__1879656 = cljs.core.next.call(null,seq__1879534_1879647__$1);
var G__1879657 = null;
var G__1879658 = (0);
var G__1879659 = (0);
seq__1879534_1879635 = G__1879656;
chunk__1879535_1879636 = G__1879657;
count__1879536_1879637 = G__1879658;
i__1879537_1879638 = G__1879659;
continue;
}
} else {
}
}
break;
}

var G__1879660 = cljs.core.next.call(null,seq__1879522_1879626__$1);
var G__1879661 = null;
var G__1879662 = (0);
var G__1879663 = (0);
seq__1879522_1879589 = G__1879660;
chunk__1879523_1879590 = G__1879661;
count__1879524_1879591 = G__1879662;
i__1879525_1879592 = G__1879663;
continue;
}
} else {
}
}
break;
}

var G__1879664 = seq__1879516_1879580;
var G__1879665 = chunk__1879517_1879581;
var G__1879666 = count__1879518_1879582;
var G__1879667 = (i__1879519_1879583 + (1));
seq__1879516_1879580 = G__1879664;
chunk__1879517_1879581 = G__1879665;
count__1879518_1879582 = G__1879666;
i__1879519_1879583 = G__1879667;
continue;
} else {
var temp__4425__auto___1879668 = cljs.core.seq.call(null,seq__1879516_1879580);
if(temp__4425__auto___1879668){
var seq__1879516_1879669__$1 = temp__4425__auto___1879668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1879516_1879669__$1)){
var c__24964__auto___1879670 = cljs.core.chunk_first.call(null,seq__1879516_1879669__$1);
var G__1879671 = cljs.core.chunk_rest.call(null,seq__1879516_1879669__$1);
var G__1879672 = c__24964__auto___1879670;
var G__1879673 = cljs.core.count.call(null,c__24964__auto___1879670);
var G__1879674 = (0);
seq__1879516_1879580 = G__1879671;
chunk__1879517_1879581 = G__1879672;
count__1879518_1879582 = G__1879673;
i__1879519_1879583 = G__1879674;
continue;
} else {
var vec__1879540_1879675 = cljs.core.first.call(null,seq__1879516_1879669__$1);
var source_idx_1879676 = cljs.core.nth.call(null,vec__1879540_1879675,(0),null);
var vec__1879541_1879677 = cljs.core.nth.call(null,vec__1879540_1879675,(1),null);
var __1879678 = cljs.core.nth.call(null,vec__1879541_1879677,(0),null);
var lines_1879679__$1 = cljs.core.nth.call(null,vec__1879541_1879677,(1),null);
var seq__1879542_1879680 = cljs.core.seq.call(null,lines_1879679__$1);
var chunk__1879543_1879681 = null;
var count__1879544_1879682 = (0);
var i__1879545_1879683 = (0);
while(true){
if((i__1879545_1879683 < count__1879544_1879682)){
var vec__1879546_1879684 = cljs.core._nth.call(null,chunk__1879543_1879681,i__1879545_1879683);
var line_1879685 = cljs.core.nth.call(null,vec__1879546_1879684,(0),null);
var cols_1879686 = cljs.core.nth.call(null,vec__1879546_1879684,(1),null);
var seq__1879547_1879687 = cljs.core.seq.call(null,cols_1879686);
var chunk__1879548_1879688 = null;
var count__1879549_1879689 = (0);
var i__1879550_1879690 = (0);
while(true){
if((i__1879550_1879690 < count__1879549_1879689)){
var vec__1879551_1879691 = cljs.core._nth.call(null,chunk__1879548_1879688,i__1879550_1879690);
var col_1879692 = cljs.core.nth.call(null,vec__1879551_1879691,(0),null);
var infos_1879693 = cljs.core.nth.call(null,vec__1879551_1879691,(1),null);
encode_cols.call(null,infos_1879693,source_idx_1879676,line_1879685,col_1879692);

var G__1879694 = seq__1879547_1879687;
var G__1879695 = chunk__1879548_1879688;
var G__1879696 = count__1879549_1879689;
var G__1879697 = (i__1879550_1879690 + (1));
seq__1879547_1879687 = G__1879694;
chunk__1879548_1879688 = G__1879695;
count__1879549_1879689 = G__1879696;
i__1879550_1879690 = G__1879697;
continue;
} else {
var temp__4425__auto___1879698__$1 = cljs.core.seq.call(null,seq__1879547_1879687);
if(temp__4425__auto___1879698__$1){
var seq__1879547_1879699__$1 = temp__4425__auto___1879698__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1879547_1879699__$1)){
var c__24964__auto___1879700 = cljs.core.chunk_first.call(null,seq__1879547_1879699__$1);
var G__1879701 = cljs.core.chunk_rest.call(null,seq__1879547_1879699__$1);
var G__1879702 = c__24964__auto___1879700;
var G__1879703 = cljs.core.count.call(null,c__24964__auto___1879700);
var G__1879704 = (0);
seq__1879547_1879687 = G__1879701;
chunk__1879548_1879688 = G__1879702;
count__1879549_1879689 = G__1879703;
i__1879550_1879690 = G__1879704;
continue;
} else {
var vec__1879552_1879705 = cljs.core.first.call(null,seq__1879547_1879699__$1);
var col_1879706 = cljs.core.nth.call(null,vec__1879552_1879705,(0),null);
var infos_1879707 = cljs.core.nth.call(null,vec__1879552_1879705,(1),null);
encode_cols.call(null,infos_1879707,source_idx_1879676,line_1879685,col_1879706);

var G__1879708 = cljs.core.next.call(null,seq__1879547_1879699__$1);
var G__1879709 = null;
var G__1879710 = (0);
var G__1879711 = (0);
seq__1879547_1879687 = G__1879708;
chunk__1879548_1879688 = G__1879709;
count__1879549_1879689 = G__1879710;
i__1879550_1879690 = G__1879711;
continue;
}
} else {
}
}
break;
}

var G__1879712 = seq__1879542_1879680;
var G__1879713 = chunk__1879543_1879681;
var G__1879714 = count__1879544_1879682;
var G__1879715 = (i__1879545_1879683 + (1));
seq__1879542_1879680 = G__1879712;
chunk__1879543_1879681 = G__1879713;
count__1879544_1879682 = G__1879714;
i__1879545_1879683 = G__1879715;
continue;
} else {
var temp__4425__auto___1879716__$1 = cljs.core.seq.call(null,seq__1879542_1879680);
if(temp__4425__auto___1879716__$1){
var seq__1879542_1879717__$1 = temp__4425__auto___1879716__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1879542_1879717__$1)){
var c__24964__auto___1879718 = cljs.core.chunk_first.call(null,seq__1879542_1879717__$1);
var G__1879719 = cljs.core.chunk_rest.call(null,seq__1879542_1879717__$1);
var G__1879720 = c__24964__auto___1879718;
var G__1879721 = cljs.core.count.call(null,c__24964__auto___1879718);
var G__1879722 = (0);
seq__1879542_1879680 = G__1879719;
chunk__1879543_1879681 = G__1879720;
count__1879544_1879682 = G__1879721;
i__1879545_1879683 = G__1879722;
continue;
} else {
var vec__1879553_1879723 = cljs.core.first.call(null,seq__1879542_1879717__$1);
var line_1879724 = cljs.core.nth.call(null,vec__1879553_1879723,(0),null);
var cols_1879725 = cljs.core.nth.call(null,vec__1879553_1879723,(1),null);
var seq__1879554_1879726 = cljs.core.seq.call(null,cols_1879725);
var chunk__1879555_1879727 = null;
var count__1879556_1879728 = (0);
var i__1879557_1879729 = (0);
while(true){
if((i__1879557_1879729 < count__1879556_1879728)){
var vec__1879558_1879730 = cljs.core._nth.call(null,chunk__1879555_1879727,i__1879557_1879729);
var col_1879731 = cljs.core.nth.call(null,vec__1879558_1879730,(0),null);
var infos_1879732 = cljs.core.nth.call(null,vec__1879558_1879730,(1),null);
encode_cols.call(null,infos_1879732,source_idx_1879676,line_1879724,col_1879731);

var G__1879733 = seq__1879554_1879726;
var G__1879734 = chunk__1879555_1879727;
var G__1879735 = count__1879556_1879728;
var G__1879736 = (i__1879557_1879729 + (1));
seq__1879554_1879726 = G__1879733;
chunk__1879555_1879727 = G__1879734;
count__1879556_1879728 = G__1879735;
i__1879557_1879729 = G__1879736;
continue;
} else {
var temp__4425__auto___1879737__$2 = cljs.core.seq.call(null,seq__1879554_1879726);
if(temp__4425__auto___1879737__$2){
var seq__1879554_1879738__$1 = temp__4425__auto___1879737__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1879554_1879738__$1)){
var c__24964__auto___1879739 = cljs.core.chunk_first.call(null,seq__1879554_1879738__$1);
var G__1879740 = cljs.core.chunk_rest.call(null,seq__1879554_1879738__$1);
var G__1879741 = c__24964__auto___1879739;
var G__1879742 = cljs.core.count.call(null,c__24964__auto___1879739);
var G__1879743 = (0);
seq__1879554_1879726 = G__1879740;
chunk__1879555_1879727 = G__1879741;
count__1879556_1879728 = G__1879742;
i__1879557_1879729 = G__1879743;
continue;
} else {
var vec__1879559_1879744 = cljs.core.first.call(null,seq__1879554_1879738__$1);
var col_1879745 = cljs.core.nth.call(null,vec__1879559_1879744,(0),null);
var infos_1879746 = cljs.core.nth.call(null,vec__1879559_1879744,(1),null);
encode_cols.call(null,infos_1879746,source_idx_1879676,line_1879724,col_1879745);

var G__1879747 = cljs.core.next.call(null,seq__1879554_1879738__$1);
var G__1879748 = null;
var G__1879749 = (0);
var G__1879750 = (0);
seq__1879554_1879726 = G__1879747;
chunk__1879555_1879727 = G__1879748;
count__1879556_1879728 = G__1879749;
i__1879557_1879729 = G__1879750;
continue;
}
} else {
}
}
break;
}

var G__1879751 = cljs.core.next.call(null,seq__1879542_1879717__$1);
var G__1879752 = null;
var G__1879753 = (0);
var G__1879754 = (0);
seq__1879542_1879680 = G__1879751;
chunk__1879543_1879681 = G__1879752;
count__1879544_1879682 = G__1879753;
i__1879545_1879683 = G__1879754;
continue;
}
} else {
}
}
break;
}

var G__1879755 = cljs.core.next.call(null,seq__1879516_1879669__$1);
var G__1879756 = null;
var G__1879757 = (0);
var G__1879758 = (0);
seq__1879516_1879580 = G__1879755;
chunk__1879517_1879581 = G__1879756;
count__1879518_1879582 = G__1879757;
i__1879519_1879583 = G__1879758;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__1879560 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__1879459_SHARP_){
return [cljs.core.str(p1__1879459_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__1879460_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__1879460_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__1879461_SHARP_){
return clojure.string.join.call(null,",",p1__1879461_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__1879560__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__1879561 = G__1879560;
goog.object.set(G__1879561,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__1879561;
})():G__1879560);
return G__1879560__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__1879764 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__1879764,(0),null);
var col_map = cljs.core.nth.call(null,vec__1879764,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__1879765 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__1879765,(0),null);
var infos = cljs.core.nth.call(null,vec__1879765,(1),null);
var G__1879769 = cljs.core.next.call(null,col_map_seq);
var G__1879770 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__1879765,col,infos,vec__1879764,line,col_map){
return (function (v,p__1879766){
var map__1879767 = p__1879766;
var map__1879767__$1 = ((((!((map__1879767 == null)))?((((map__1879767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1879767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1879767):map__1879767);
var gline = cljs.core.get.call(null,map__1879767__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__1879767__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__1879765,col,infos,vec__1879764,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__1879769;
new_cols = G__1879770;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__1879771 = cljs.core.next.call(null,line_map_seq);
var G__1879772 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__1879771;
new_lines = G__1879772;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__1879823_1879873 = cljs.core.seq.call(null,reverse_map);
var chunk__1879824_1879874 = null;
var count__1879825_1879875 = (0);
var i__1879826_1879876 = (0);
while(true){
if((i__1879826_1879876 < count__1879825_1879875)){
var vec__1879827_1879877 = cljs.core._nth.call(null,chunk__1879824_1879874,i__1879826_1879876);
var line_1879878 = cljs.core.nth.call(null,vec__1879827_1879877,(0),null);
var columns_1879879 = cljs.core.nth.call(null,vec__1879827_1879877,(1),null);
var seq__1879828_1879880 = cljs.core.seq.call(null,columns_1879879);
var chunk__1879829_1879881 = null;
var count__1879830_1879882 = (0);
var i__1879831_1879883 = (0);
while(true){
if((i__1879831_1879883 < count__1879830_1879882)){
var vec__1879832_1879884 = cljs.core._nth.call(null,chunk__1879829_1879881,i__1879831_1879883);
var column_1879885 = cljs.core.nth.call(null,vec__1879832_1879884,(0),null);
var column_info_1879886 = cljs.core.nth.call(null,vec__1879832_1879884,(1),null);
var seq__1879833_1879887 = cljs.core.seq.call(null,column_info_1879886);
var chunk__1879834_1879888 = null;
var count__1879835_1879889 = (0);
var i__1879836_1879890 = (0);
while(true){
if((i__1879836_1879890 < count__1879835_1879889)){
var map__1879837_1879891 = cljs.core._nth.call(null,chunk__1879834_1879888,i__1879836_1879890);
var map__1879837_1879892__$1 = ((((!((map__1879837_1879891 == null)))?((((map__1879837_1879891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1879837_1879891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1879837_1879891):map__1879837_1879891);
var gline_1879893 = cljs.core.get.call(null,map__1879837_1879892__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_1879894 = cljs.core.get.call(null,map__1879837_1879892__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_1879895 = cljs.core.get.call(null,map__1879837_1879892__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1879893], null),cljs.core.fnil.call(null,((function (seq__1879833_1879887,chunk__1879834_1879888,count__1879835_1879889,i__1879836_1879890,seq__1879828_1879880,chunk__1879829_1879881,count__1879830_1879882,i__1879831_1879883,seq__1879823_1879873,chunk__1879824_1879874,count__1879825_1879875,i__1879826_1879876,map__1879837_1879891,map__1879837_1879892__$1,gline_1879893,gcol_1879894,name_1879895,vec__1879832_1879884,column_1879885,column_info_1879886,vec__1879827_1879877,line_1879878,columns_1879879,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_1879885], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1879878,new cljs.core.Keyword(null,"col","col",-1959363084),column_1879885,new cljs.core.Keyword(null,"name","name",1843675177),name_1879895], null));
});})(seq__1879833_1879887,chunk__1879834_1879888,count__1879835_1879889,i__1879836_1879890,seq__1879828_1879880,chunk__1879829_1879881,count__1879830_1879882,i__1879831_1879883,seq__1879823_1879873,chunk__1879824_1879874,count__1879825_1879875,i__1879826_1879876,map__1879837_1879891,map__1879837_1879892__$1,gline_1879893,gcol_1879894,name_1879895,vec__1879832_1879884,column_1879885,column_info_1879886,vec__1879827_1879877,line_1879878,columns_1879879,inverted))
,cljs.core.sorted_map.call(null)));

var G__1879896 = seq__1879833_1879887;
var G__1879897 = chunk__1879834_1879888;
var G__1879898 = count__1879835_1879889;
var G__1879899 = (i__1879836_1879890 + (1));
seq__1879833_1879887 = G__1879896;
chunk__1879834_1879888 = G__1879897;
count__1879835_1879889 = G__1879898;
i__1879836_1879890 = G__1879899;
continue;
} else {
var temp__4425__auto___1879900 = cljs.core.seq.call(null,seq__1879833_1879887);
if(temp__4425__auto___1879900){
var seq__1879833_1879901__$1 = temp__4425__auto___1879900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1879833_1879901__$1)){
var c__24964__auto___1879902 = cljs.core.chunk_first.call(null,seq__1879833_1879901__$1);
var G__1879903 = cljs.core.chunk_rest.call(null,seq__1879833_1879901__$1);
var G__1879904 = c__24964__auto___1879902;
var G__1879905 = cljs.core.count.call(null,c__24964__auto___1879902);
var G__1879906 = (0);
seq__1879833_1879887 = G__1879903;
chunk__1879834_1879888 = G__1879904;
count__1879835_1879889 = G__1879905;
i__1879836_1879890 = G__1879906;
continue;
} else {
var map__1879839_1879907 = cljs.core.first.call(null,seq__1879833_1879901__$1);
var map__1879839_1879908__$1 = ((((!((map__1879839_1879907 == null)))?((((map__1879839_1879907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1879839_1879907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1879839_1879907):map__1879839_1879907);
var gline_1879909 = cljs.core.get.call(null,map__1879839_1879908__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_1879910 = cljs.core.get.call(null,map__1879839_1879908__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_1879911 = cljs.core.get.call(null,map__1879839_1879908__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1879909], null),cljs.core.fnil.call(null,((function (seq__1879833_1879887,chunk__1879834_1879888,count__1879835_1879889,i__1879836_1879890,seq__1879828_1879880,chunk__1879829_1879881,count__1879830_1879882,i__1879831_1879883,seq__1879823_1879873,chunk__1879824_1879874,count__1879825_1879875,i__1879826_1879876,map__1879839_1879907,map__1879839_1879908__$1,gline_1879909,gcol_1879910,name_1879911,seq__1879833_1879901__$1,temp__4425__auto___1879900,vec__1879832_1879884,column_1879885,column_info_1879886,vec__1879827_1879877,line_1879878,columns_1879879,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_1879885], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1879878,new cljs.core.Keyword(null,"col","col",-1959363084),column_1879885,new cljs.core.Keyword(null,"name","name",1843675177),name_1879911], null));
});})(seq__1879833_1879887,chunk__1879834_1879888,count__1879835_1879889,i__1879836_1879890,seq__1879828_1879880,chunk__1879829_1879881,count__1879830_1879882,i__1879831_1879883,seq__1879823_1879873,chunk__1879824_1879874,count__1879825_1879875,i__1879826_1879876,map__1879839_1879907,map__1879839_1879908__$1,gline_1879909,gcol_1879910,name_1879911,seq__1879833_1879901__$1,temp__4425__auto___1879900,vec__1879832_1879884,column_1879885,column_info_1879886,vec__1879827_1879877,line_1879878,columns_1879879,inverted))
,cljs.core.sorted_map.call(null)));

var G__1879912 = cljs.core.next.call(null,seq__1879833_1879901__$1);
var G__1879913 = null;
var G__1879914 = (0);
var G__1879915 = (0);
seq__1879833_1879887 = G__1879912;
chunk__1879834_1879888 = G__1879913;
count__1879835_1879889 = G__1879914;
i__1879836_1879890 = G__1879915;
continue;
}
} else {
}
}
break;
}

var G__1879916 = seq__1879828_1879880;
var G__1879917 = chunk__1879829_1879881;
var G__1879918 = count__1879830_1879882;
var G__1879919 = (i__1879831_1879883 + (1));
seq__1879828_1879880 = G__1879916;
chunk__1879829_1879881 = G__1879917;
count__1879830_1879882 = G__1879918;
i__1879831_1879883 = G__1879919;
continue;
} else {
var temp__4425__auto___1879920 = cljs.core.seq.call(null,seq__1879828_1879880);
if(temp__4425__auto___1879920){
var seq__1879828_1879921__$1 = temp__4425__auto___1879920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1879828_1879921__$1)){
var c__24964__auto___1879922 = cljs.core.chunk_first.call(null,seq__1879828_1879921__$1);
var G__1879923 = cljs.core.chunk_rest.call(null,seq__1879828_1879921__$1);
var G__1879924 = c__24964__auto___1879922;
var G__1879925 = cljs.core.count.call(null,c__24964__auto___1879922);
var G__1879926 = (0);
seq__1879828_1879880 = G__1879923;
chunk__1879829_1879881 = G__1879924;
count__1879830_1879882 = G__1879925;
i__1879831_1879883 = G__1879926;
continue;
} else {
var vec__1879841_1879927 = cljs.core.first.call(null,seq__1879828_1879921__$1);
var column_1879928 = cljs.core.nth.call(null,vec__1879841_1879927,(0),null);
var column_info_1879929 = cljs.core.nth.call(null,vec__1879841_1879927,(1),null);
var seq__1879842_1879930 = cljs.core.seq.call(null,column_info_1879929);
var chunk__1879843_1879931 = null;
var count__1879844_1879932 = (0);
var i__1879845_1879933 = (0);
while(true){
if((i__1879845_1879933 < count__1879844_1879932)){
var map__1879846_1879934 = cljs.core._nth.call(null,chunk__1879843_1879931,i__1879845_1879933);
var map__1879846_1879935__$1 = ((((!((map__1879846_1879934 == null)))?((((map__1879846_1879934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1879846_1879934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1879846_1879934):map__1879846_1879934);
var gline_1879936 = cljs.core.get.call(null,map__1879846_1879935__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_1879937 = cljs.core.get.call(null,map__1879846_1879935__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_1879938 = cljs.core.get.call(null,map__1879846_1879935__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1879936], null),cljs.core.fnil.call(null,((function (seq__1879842_1879930,chunk__1879843_1879931,count__1879844_1879932,i__1879845_1879933,seq__1879828_1879880,chunk__1879829_1879881,count__1879830_1879882,i__1879831_1879883,seq__1879823_1879873,chunk__1879824_1879874,count__1879825_1879875,i__1879826_1879876,map__1879846_1879934,map__1879846_1879935__$1,gline_1879936,gcol_1879937,name_1879938,vec__1879841_1879927,column_1879928,column_info_1879929,seq__1879828_1879921__$1,temp__4425__auto___1879920,vec__1879827_1879877,line_1879878,columns_1879879,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_1879928], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1879878,new cljs.core.Keyword(null,"col","col",-1959363084),column_1879928,new cljs.core.Keyword(null,"name","name",1843675177),name_1879938], null));
});})(seq__1879842_1879930,chunk__1879843_1879931,count__1879844_1879932,i__1879845_1879933,seq__1879828_1879880,chunk__1879829_1879881,count__1879830_1879882,i__1879831_1879883,seq__1879823_1879873,chunk__1879824_1879874,count__1879825_1879875,i__1879826_1879876,map__1879846_1879934,map__1879846_1879935__$1,gline_1879936,gcol_1879937,name_1879938,vec__1879841_1879927,column_1879928,column_info_1879929,seq__1879828_1879921__$1,temp__4425__auto___1879920,vec__1879827_1879877,line_1879878,columns_1879879,inverted))
,cljs.core.sorted_map.call(null)));

var G__1879939 = seq__1879842_1879930;
var G__1879940 = chunk__1879843_1879931;
var G__1879941 = count__1879844_1879932;
var G__1879942 = (i__1879845_1879933 + (1));
seq__1879842_1879930 = G__1879939;
chunk__1879843_1879931 = G__1879940;
count__1879844_1879932 = G__1879941;
i__1879845_1879933 = G__1879942;
continue;
} else {
var temp__4425__auto___1879943__$1 = cljs.core.seq.call(null,seq__1879842_1879930);
if(temp__4425__auto___1879943__$1){
var seq__1879842_1879944__$1 = temp__4425__auto___1879943__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1879842_1879944__$1)){
var c__24964__auto___1879945 = cljs.core.chunk_first.call(null,seq__1879842_1879944__$1);
var G__1879946 = cljs.core.chunk_rest.call(null,seq__1879842_1879944__$1);
var G__1879947 = c__24964__auto___1879945;
var G__1879948 = cljs.core.count.call(null,c__24964__auto___1879945);
var G__1879949 = (0);
seq__1879842_1879930 = G__1879946;
chunk__1879843_1879931 = G__1879947;
count__1879844_1879932 = G__1879948;
i__1879845_1879933 = G__1879949;
continue;
} else {
var map__1879848_1879950 = cljs.core.first.call(null,seq__1879842_1879944__$1);
var map__1879848_1879951__$1 = ((((!((map__1879848_1879950 == null)))?((((map__1879848_1879950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1879848_1879950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1879848_1879950):map__1879848_1879950);
var gline_1879952 = cljs.core.get.call(null,map__1879848_1879951__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_1879953 = cljs.core.get.call(null,map__1879848_1879951__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_1879954 = cljs.core.get.call(null,map__1879848_1879951__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1879952], null),cljs.core.fnil.call(null,((function (seq__1879842_1879930,chunk__1879843_1879931,count__1879844_1879932,i__1879845_1879933,seq__1879828_1879880,chunk__1879829_1879881,count__1879830_1879882,i__1879831_1879883,seq__1879823_1879873,chunk__1879824_1879874,count__1879825_1879875,i__1879826_1879876,map__1879848_1879950,map__1879848_1879951__$1,gline_1879952,gcol_1879953,name_1879954,seq__1879842_1879944__$1,temp__4425__auto___1879943__$1,vec__1879841_1879927,column_1879928,column_info_1879929,seq__1879828_1879921__$1,temp__4425__auto___1879920,vec__1879827_1879877,line_1879878,columns_1879879,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_1879928], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1879878,new cljs.core.Keyword(null,"col","col",-1959363084),column_1879928,new cljs.core.Keyword(null,"name","name",1843675177),name_1879954], null));
});})(seq__1879842_1879930,chunk__1879843_1879931,count__1879844_1879932,i__1879845_1879933,seq__1879828_1879880,chunk__1879829_1879881,count__1879830_1879882,i__1879831_1879883,seq__1879823_1879873,chunk__1879824_1879874,count__1879825_1879875,i__1879826_1879876,map__1879848_1879950,map__1879848_1879951__$1,gline_1879952,gcol_1879953,name_1879954,seq__1879842_1879944__$1,temp__4425__auto___1879943__$1,vec__1879841_1879927,column_1879928,column_info_1879929,seq__1879828_1879921__$1,temp__4425__auto___1879920,vec__1879827_1879877,line_1879878,columns_1879879,inverted))
,cljs.core.sorted_map.call(null)));

var G__1879955 = cljs.core.next.call(null,seq__1879842_1879944__$1);
var G__1879956 = null;
var G__1879957 = (0);
var G__1879958 = (0);
seq__1879842_1879930 = G__1879955;
chunk__1879843_1879931 = G__1879956;
count__1879844_1879932 = G__1879957;
i__1879845_1879933 = G__1879958;
continue;
}
} else {
}
}
break;
}

var G__1879959 = cljs.core.next.call(null,seq__1879828_1879921__$1);
var G__1879960 = null;
var G__1879961 = (0);
var G__1879962 = (0);
seq__1879828_1879880 = G__1879959;
chunk__1879829_1879881 = G__1879960;
count__1879830_1879882 = G__1879961;
i__1879831_1879883 = G__1879962;
continue;
}
} else {
}
}
break;
}

var G__1879963 = seq__1879823_1879873;
var G__1879964 = chunk__1879824_1879874;
var G__1879965 = count__1879825_1879875;
var G__1879966 = (i__1879826_1879876 + (1));
seq__1879823_1879873 = G__1879963;
chunk__1879824_1879874 = G__1879964;
count__1879825_1879875 = G__1879965;
i__1879826_1879876 = G__1879966;
continue;
} else {
var temp__4425__auto___1879967 = cljs.core.seq.call(null,seq__1879823_1879873);
if(temp__4425__auto___1879967){
var seq__1879823_1879968__$1 = temp__4425__auto___1879967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1879823_1879968__$1)){
var c__24964__auto___1879969 = cljs.core.chunk_first.call(null,seq__1879823_1879968__$1);
var G__1879970 = cljs.core.chunk_rest.call(null,seq__1879823_1879968__$1);
var G__1879971 = c__24964__auto___1879969;
var G__1879972 = cljs.core.count.call(null,c__24964__auto___1879969);
var G__1879973 = (0);
seq__1879823_1879873 = G__1879970;
chunk__1879824_1879874 = G__1879971;
count__1879825_1879875 = G__1879972;
i__1879826_1879876 = G__1879973;
continue;
} else {
var vec__1879850_1879974 = cljs.core.first.call(null,seq__1879823_1879968__$1);
var line_1879975 = cljs.core.nth.call(null,vec__1879850_1879974,(0),null);
var columns_1879976 = cljs.core.nth.call(null,vec__1879850_1879974,(1),null);
var seq__1879851_1879977 = cljs.core.seq.call(null,columns_1879976);
var chunk__1879852_1879978 = null;
var count__1879853_1879979 = (0);
var i__1879854_1879980 = (0);
while(true){
if((i__1879854_1879980 < count__1879853_1879979)){
var vec__1879855_1879981 = cljs.core._nth.call(null,chunk__1879852_1879978,i__1879854_1879980);
var column_1879982 = cljs.core.nth.call(null,vec__1879855_1879981,(0),null);
var column_info_1879983 = cljs.core.nth.call(null,vec__1879855_1879981,(1),null);
var seq__1879856_1879984 = cljs.core.seq.call(null,column_info_1879983);
var chunk__1879857_1879985 = null;
var count__1879858_1879986 = (0);
var i__1879859_1879987 = (0);
while(true){
if((i__1879859_1879987 < count__1879858_1879986)){
var map__1879860_1879988 = cljs.core._nth.call(null,chunk__1879857_1879985,i__1879859_1879987);
var map__1879860_1879989__$1 = ((((!((map__1879860_1879988 == null)))?((((map__1879860_1879988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1879860_1879988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1879860_1879988):map__1879860_1879988);
var gline_1879990 = cljs.core.get.call(null,map__1879860_1879989__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_1879991 = cljs.core.get.call(null,map__1879860_1879989__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_1879992 = cljs.core.get.call(null,map__1879860_1879989__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1879990], null),cljs.core.fnil.call(null,((function (seq__1879856_1879984,chunk__1879857_1879985,count__1879858_1879986,i__1879859_1879987,seq__1879851_1879977,chunk__1879852_1879978,count__1879853_1879979,i__1879854_1879980,seq__1879823_1879873,chunk__1879824_1879874,count__1879825_1879875,i__1879826_1879876,map__1879860_1879988,map__1879860_1879989__$1,gline_1879990,gcol_1879991,name_1879992,vec__1879855_1879981,column_1879982,column_info_1879983,vec__1879850_1879974,line_1879975,columns_1879976,seq__1879823_1879968__$1,temp__4425__auto___1879967,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_1879982], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1879975,new cljs.core.Keyword(null,"col","col",-1959363084),column_1879982,new cljs.core.Keyword(null,"name","name",1843675177),name_1879992], null));
});})(seq__1879856_1879984,chunk__1879857_1879985,count__1879858_1879986,i__1879859_1879987,seq__1879851_1879977,chunk__1879852_1879978,count__1879853_1879979,i__1879854_1879980,seq__1879823_1879873,chunk__1879824_1879874,count__1879825_1879875,i__1879826_1879876,map__1879860_1879988,map__1879860_1879989__$1,gline_1879990,gcol_1879991,name_1879992,vec__1879855_1879981,column_1879982,column_info_1879983,vec__1879850_1879974,line_1879975,columns_1879976,seq__1879823_1879968__$1,temp__4425__auto___1879967,inverted))
,cljs.core.sorted_map.call(null)));

var G__1879993 = seq__1879856_1879984;
var G__1879994 = chunk__1879857_1879985;
var G__1879995 = count__1879858_1879986;
var G__1879996 = (i__1879859_1879987 + (1));
seq__1879856_1879984 = G__1879993;
chunk__1879857_1879985 = G__1879994;
count__1879858_1879986 = G__1879995;
i__1879859_1879987 = G__1879996;
continue;
} else {
var temp__4425__auto___1879997__$1 = cljs.core.seq.call(null,seq__1879856_1879984);
if(temp__4425__auto___1879997__$1){
var seq__1879856_1879998__$1 = temp__4425__auto___1879997__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1879856_1879998__$1)){
var c__24964__auto___1879999 = cljs.core.chunk_first.call(null,seq__1879856_1879998__$1);
var G__1880000 = cljs.core.chunk_rest.call(null,seq__1879856_1879998__$1);
var G__1880001 = c__24964__auto___1879999;
var G__1880002 = cljs.core.count.call(null,c__24964__auto___1879999);
var G__1880003 = (0);
seq__1879856_1879984 = G__1880000;
chunk__1879857_1879985 = G__1880001;
count__1879858_1879986 = G__1880002;
i__1879859_1879987 = G__1880003;
continue;
} else {
var map__1879862_1880004 = cljs.core.first.call(null,seq__1879856_1879998__$1);
var map__1879862_1880005__$1 = ((((!((map__1879862_1880004 == null)))?((((map__1879862_1880004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1879862_1880004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1879862_1880004):map__1879862_1880004);
var gline_1880006 = cljs.core.get.call(null,map__1879862_1880005__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_1880007 = cljs.core.get.call(null,map__1879862_1880005__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_1880008 = cljs.core.get.call(null,map__1879862_1880005__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1880006], null),cljs.core.fnil.call(null,((function (seq__1879856_1879984,chunk__1879857_1879985,count__1879858_1879986,i__1879859_1879987,seq__1879851_1879977,chunk__1879852_1879978,count__1879853_1879979,i__1879854_1879980,seq__1879823_1879873,chunk__1879824_1879874,count__1879825_1879875,i__1879826_1879876,map__1879862_1880004,map__1879862_1880005__$1,gline_1880006,gcol_1880007,name_1880008,seq__1879856_1879998__$1,temp__4425__auto___1879997__$1,vec__1879855_1879981,column_1879982,column_info_1879983,vec__1879850_1879974,line_1879975,columns_1879976,seq__1879823_1879968__$1,temp__4425__auto___1879967,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_1879982], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1879975,new cljs.core.Keyword(null,"col","col",-1959363084),column_1879982,new cljs.core.Keyword(null,"name","name",1843675177),name_1880008], null));
});})(seq__1879856_1879984,chunk__1879857_1879985,count__1879858_1879986,i__1879859_1879987,seq__1879851_1879977,chunk__1879852_1879978,count__1879853_1879979,i__1879854_1879980,seq__1879823_1879873,chunk__1879824_1879874,count__1879825_1879875,i__1879826_1879876,map__1879862_1880004,map__1879862_1880005__$1,gline_1880006,gcol_1880007,name_1880008,seq__1879856_1879998__$1,temp__4425__auto___1879997__$1,vec__1879855_1879981,column_1879982,column_info_1879983,vec__1879850_1879974,line_1879975,columns_1879976,seq__1879823_1879968__$1,temp__4425__auto___1879967,inverted))
,cljs.core.sorted_map.call(null)));

var G__1880009 = cljs.core.next.call(null,seq__1879856_1879998__$1);
var G__1880010 = null;
var G__1880011 = (0);
var G__1880012 = (0);
seq__1879856_1879984 = G__1880009;
chunk__1879857_1879985 = G__1880010;
count__1879858_1879986 = G__1880011;
i__1879859_1879987 = G__1880012;
continue;
}
} else {
}
}
break;
}

var G__1880013 = seq__1879851_1879977;
var G__1880014 = chunk__1879852_1879978;
var G__1880015 = count__1879853_1879979;
var G__1880016 = (i__1879854_1879980 + (1));
seq__1879851_1879977 = G__1880013;
chunk__1879852_1879978 = G__1880014;
count__1879853_1879979 = G__1880015;
i__1879854_1879980 = G__1880016;
continue;
} else {
var temp__4425__auto___1880017__$1 = cljs.core.seq.call(null,seq__1879851_1879977);
if(temp__4425__auto___1880017__$1){
var seq__1879851_1880018__$1 = temp__4425__auto___1880017__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1879851_1880018__$1)){
var c__24964__auto___1880019 = cljs.core.chunk_first.call(null,seq__1879851_1880018__$1);
var G__1880020 = cljs.core.chunk_rest.call(null,seq__1879851_1880018__$1);
var G__1880021 = c__24964__auto___1880019;
var G__1880022 = cljs.core.count.call(null,c__24964__auto___1880019);
var G__1880023 = (0);
seq__1879851_1879977 = G__1880020;
chunk__1879852_1879978 = G__1880021;
count__1879853_1879979 = G__1880022;
i__1879854_1879980 = G__1880023;
continue;
} else {
var vec__1879864_1880024 = cljs.core.first.call(null,seq__1879851_1880018__$1);
var column_1880025 = cljs.core.nth.call(null,vec__1879864_1880024,(0),null);
var column_info_1880026 = cljs.core.nth.call(null,vec__1879864_1880024,(1),null);
var seq__1879865_1880027 = cljs.core.seq.call(null,column_info_1880026);
var chunk__1879866_1880028 = null;
var count__1879867_1880029 = (0);
var i__1879868_1880030 = (0);
while(true){
if((i__1879868_1880030 < count__1879867_1880029)){
var map__1879869_1880031 = cljs.core._nth.call(null,chunk__1879866_1880028,i__1879868_1880030);
var map__1879869_1880032__$1 = ((((!((map__1879869_1880031 == null)))?((((map__1879869_1880031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1879869_1880031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1879869_1880031):map__1879869_1880031);
var gline_1880033 = cljs.core.get.call(null,map__1879869_1880032__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_1880034 = cljs.core.get.call(null,map__1879869_1880032__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_1880035 = cljs.core.get.call(null,map__1879869_1880032__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1880033], null),cljs.core.fnil.call(null,((function (seq__1879865_1880027,chunk__1879866_1880028,count__1879867_1880029,i__1879868_1880030,seq__1879851_1879977,chunk__1879852_1879978,count__1879853_1879979,i__1879854_1879980,seq__1879823_1879873,chunk__1879824_1879874,count__1879825_1879875,i__1879826_1879876,map__1879869_1880031,map__1879869_1880032__$1,gline_1880033,gcol_1880034,name_1880035,vec__1879864_1880024,column_1880025,column_info_1880026,seq__1879851_1880018__$1,temp__4425__auto___1880017__$1,vec__1879850_1879974,line_1879975,columns_1879976,seq__1879823_1879968__$1,temp__4425__auto___1879967,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_1880025], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1879975,new cljs.core.Keyword(null,"col","col",-1959363084),column_1880025,new cljs.core.Keyword(null,"name","name",1843675177),name_1880035], null));
});})(seq__1879865_1880027,chunk__1879866_1880028,count__1879867_1880029,i__1879868_1880030,seq__1879851_1879977,chunk__1879852_1879978,count__1879853_1879979,i__1879854_1879980,seq__1879823_1879873,chunk__1879824_1879874,count__1879825_1879875,i__1879826_1879876,map__1879869_1880031,map__1879869_1880032__$1,gline_1880033,gcol_1880034,name_1880035,vec__1879864_1880024,column_1880025,column_info_1880026,seq__1879851_1880018__$1,temp__4425__auto___1880017__$1,vec__1879850_1879974,line_1879975,columns_1879976,seq__1879823_1879968__$1,temp__4425__auto___1879967,inverted))
,cljs.core.sorted_map.call(null)));

var G__1880036 = seq__1879865_1880027;
var G__1880037 = chunk__1879866_1880028;
var G__1880038 = count__1879867_1880029;
var G__1880039 = (i__1879868_1880030 + (1));
seq__1879865_1880027 = G__1880036;
chunk__1879866_1880028 = G__1880037;
count__1879867_1880029 = G__1880038;
i__1879868_1880030 = G__1880039;
continue;
} else {
var temp__4425__auto___1880040__$2 = cljs.core.seq.call(null,seq__1879865_1880027);
if(temp__4425__auto___1880040__$2){
var seq__1879865_1880041__$1 = temp__4425__auto___1880040__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1879865_1880041__$1)){
var c__24964__auto___1880042 = cljs.core.chunk_first.call(null,seq__1879865_1880041__$1);
var G__1880043 = cljs.core.chunk_rest.call(null,seq__1879865_1880041__$1);
var G__1880044 = c__24964__auto___1880042;
var G__1880045 = cljs.core.count.call(null,c__24964__auto___1880042);
var G__1880046 = (0);
seq__1879865_1880027 = G__1880043;
chunk__1879866_1880028 = G__1880044;
count__1879867_1880029 = G__1880045;
i__1879868_1880030 = G__1880046;
continue;
} else {
var map__1879871_1880047 = cljs.core.first.call(null,seq__1879865_1880041__$1);
var map__1879871_1880048__$1 = ((((!((map__1879871_1880047 == null)))?((((map__1879871_1880047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1879871_1880047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1879871_1880047):map__1879871_1880047);
var gline_1880049 = cljs.core.get.call(null,map__1879871_1880048__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_1880050 = cljs.core.get.call(null,map__1879871_1880048__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_1880051 = cljs.core.get.call(null,map__1879871_1880048__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_1880049], null),cljs.core.fnil.call(null,((function (seq__1879865_1880027,chunk__1879866_1880028,count__1879867_1880029,i__1879868_1880030,seq__1879851_1879977,chunk__1879852_1879978,count__1879853_1879979,i__1879854_1879980,seq__1879823_1879873,chunk__1879824_1879874,count__1879825_1879875,i__1879826_1879876,map__1879871_1880047,map__1879871_1880048__$1,gline_1880049,gcol_1880050,name_1880051,seq__1879865_1880041__$1,temp__4425__auto___1880040__$2,vec__1879864_1880024,column_1880025,column_info_1880026,seq__1879851_1880018__$1,temp__4425__auto___1880017__$1,vec__1879850_1879974,line_1879975,columns_1879976,seq__1879823_1879968__$1,temp__4425__auto___1879967,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_1880025], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_1879975,new cljs.core.Keyword(null,"col","col",-1959363084),column_1880025,new cljs.core.Keyword(null,"name","name",1843675177),name_1880051], null));
});})(seq__1879865_1880027,chunk__1879866_1880028,count__1879867_1880029,i__1879868_1880030,seq__1879851_1879977,chunk__1879852_1879978,count__1879853_1879979,i__1879854_1879980,seq__1879823_1879873,chunk__1879824_1879874,count__1879825_1879875,i__1879826_1879876,map__1879871_1880047,map__1879871_1880048__$1,gline_1880049,gcol_1880050,name_1880051,seq__1879865_1880041__$1,temp__4425__auto___1880040__$2,vec__1879864_1880024,column_1880025,column_info_1880026,seq__1879851_1880018__$1,temp__4425__auto___1880017__$1,vec__1879850_1879974,line_1879975,columns_1879976,seq__1879823_1879968__$1,temp__4425__auto___1879967,inverted))
,cljs.core.sorted_map.call(null)));

var G__1880052 = cljs.core.next.call(null,seq__1879865_1880041__$1);
var G__1880053 = null;
var G__1880054 = (0);
var G__1880055 = (0);
seq__1879865_1880027 = G__1880052;
chunk__1879866_1880028 = G__1880053;
count__1879867_1880029 = G__1880054;
i__1879868_1880030 = G__1880055;
continue;
}
} else {
}
}
break;
}

var G__1880056 = cljs.core.next.call(null,seq__1879851_1880018__$1);
var G__1880057 = null;
var G__1880058 = (0);
var G__1880059 = (0);
seq__1879851_1879977 = G__1880056;
chunk__1879852_1879978 = G__1880057;
count__1879853_1879979 = G__1880058;
i__1879854_1879980 = G__1880059;
continue;
}
} else {
}
}
break;
}

var G__1880060 = cljs.core.next.call(null,seq__1879823_1879968__$1);
var G__1880061 = null;
var G__1880062 = (0);
var G__1880063 = (0);
seq__1879823_1879873 = G__1880060;
chunk__1879824_1879874 = G__1880061;
count__1879825_1879875 = G__1880062;
i__1879826_1879876 = G__1880063;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map