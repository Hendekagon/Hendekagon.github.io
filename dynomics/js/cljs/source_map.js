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
return cljs.core.reduce.call(null,(function (m,p__874481){
var vec__874482 = p__874481;
var i = cljs.core.nth.call(null,vec__874482,(0),null);
var v = cljs.core.nth.call(null,vec__874482,(1),null);
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
var vec__874484 = seg;
var gcol = cljs.core.nth.call(null,vec__874484,(0),null);
var source = cljs.core.nth.call(null,vec__874484,(1),null);
var line = cljs.core.nth.call(null,vec__874484,(2),null);
var col = cljs.core.nth.call(null,vec__874484,(3),null);
var name = cljs.core.nth.call(null,vec__874484,(4),null);
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
var vec__874487 = seg;
var gcol = cljs.core.nth.call(null,vec__874487,(0),null);
var source = cljs.core.nth.call(null,vec__874487,(1),null);
var line = cljs.core.nth.call(null,vec__874487,(2),null);
var col = cljs.core.nth.call(null,vec__874487,(3),null);
var name = cljs.core.nth.call(null,vec__874487,(4),null);
var vec__874488 = relseg;
var rgcol = cljs.core.nth.call(null,vec__874488,(0),null);
var rsource = cljs.core.nth.call(null,vec__874488,(1),null);
var rline = cljs.core.nth.call(null,vec__874488,(2),null);
var rcol = cljs.core.nth.call(null,vec__874488,(3),null);
var rname = cljs.core.nth.call(null,vec__874488,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__24211__auto__ = source;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__24211__auto__ = line;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__24211__auto__ = col;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__24211__auto__ = name;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
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
var map__874491 = segmap;
var map__874491__$1 = ((((!((map__874491 == null)))?((((map__874491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__874491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__874491):map__874491);
var gcol = cljs.core.get.call(null,map__874491__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__874491__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__874491__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__874491__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__874491__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__874491,map__874491__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__874491,map__874491__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__874491,map__874491__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__874491,map__874491__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__874491,map__874491__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__874491,map__874491__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args874493 = [];
var len__25269__auto___874497 = arguments.length;
var i__25270__auto___874498 = (0);
while(true){
if((i__25270__auto___874498 < len__25269__auto___874497)){
args874493.push((arguments[i__25270__auto___874498]));

var G__874499 = (i__25270__auto___874498 + (1));
i__25270__auto___874498 = G__874499;
continue;
} else {
}
break;
}

var G__874495 = args874493.length;
switch (G__874495) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args874493.length)].join('')));

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
var vec__874496 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__874501 = cljs.core.next.call(null,segs__$1);
var G__874502 = nrelseg;
var G__874503 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__874501;
relseg__$1 = G__874502;
result__$1 = G__874503;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__874496,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__874496,(1),null);
var G__874504 = (gline + (1));
var G__874505 = cljs.core.next.call(null,lines__$1);
var G__874506 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__874507 = result__$1;
gline = G__874504;
lines__$1 = G__874505;
relseg = G__874506;
result = G__874507;
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
var map__874511 = segmap;
var map__874511__$1 = ((((!((map__874511 == null)))?((((map__874511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__874511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__874511):map__874511);
var gcol = cljs.core.get.call(null,map__874511__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__874511__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__874511__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__874511__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__874511__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__874511,map__874511__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__874511,map__874511__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__874508_SHARP_){
return cljs.core.conj.call(null,p1__874508_SHARP_,d__$1);
});})(map__874511,map__874511__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__874511,map__874511__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args874513 = [];
var len__25269__auto___874517 = arguments.length;
var i__25270__auto___874518 = (0);
while(true){
if((i__25270__auto___874518 < len__25269__auto___874517)){
args874513.push((arguments[i__25270__auto___874518]));

var G__874519 = (i__25270__auto___874518 + (1));
i__25270__auto___874518 = G__874519;
continue;
} else {
}
break;
}

var G__874515 = args874513.length;
switch (G__874515) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args874513.length)].join('')));

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
var vec__874516 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__874521 = cljs.core.next.call(null,segs__$1);
var G__874522 = nrelseg;
var G__874523 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__874521;
relseg__$1 = G__874522;
result__$1 = G__874523;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__874516,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__874516,(1),null);
var G__874524 = (gline + (1));
var G__874525 = cljs.core.next.call(null,lines__$1);
var G__874526 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__874527 = result__$1;
gline = G__874524;
lines__$1 = G__874525;
relseg = G__874526;
result = G__874527;
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
return (function (p__874534){
var vec__874535 = p__874534;
var _ = cljs.core.nth.call(null,vec__874535,(0),null);
var source = cljs.core.nth.call(null,vec__874535,(1),null);
var line = cljs.core.nth.call(null,vec__874535,(2),null);
var col = cljs.core.nth.call(null,vec__874535,(3),null);
var name = cljs.core.nth.call(null,vec__874535,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__874536){
var vec__874537 = p__874536;
var gcol = cljs.core.nth.call(null,vec__874537,(0),null);
var sidx = cljs.core.nth.call(null,vec__874537,(1),null);
var line = cljs.core.nth.call(null,vec__874537,(2),null);
var col = cljs.core.nth.call(null,vec__874537,(3),null);
var name = cljs.core.nth.call(null,vec__874537,(4),null);
var seg = vec__874537;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__874537,gcol,sidx,line,col,name,seg,relseg){
return (function (p__874538){
var vec__874539 = p__874538;
var _ = cljs.core.nth.call(null,vec__874539,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__874539,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__874539,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__874539,(3),null);
var lname = cljs.core.nth.call(null,vec__874539,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__24211__auto__ = name;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__874537,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__24211__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
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
var seq__874593 = cljs.core.seq.call(null,infos);
var chunk__874594 = null;
var count__874595 = (0);
var i__874596 = (0);
while(true){
if((i__874596 < count__874595)){
var info = cljs.core._nth.call(null,chunk__874594,i__874596);
var segv_874643 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_874644 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_874645 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_874644 > (lc_874645 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__874593,chunk__874594,count__874595,i__874596,segv_874643,gline_874644,lc_874645,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_874644 - (lc_874645 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_874643], null));
});})(seq__874593,chunk__874594,count__874595,i__874596,segv_874643,gline_874644,lc_874645,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__874593,chunk__874594,count__874595,i__874596,segv_874643,gline_874644,lc_874645,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_874644], null),cljs.core.conj,segv_874643);
});})(seq__874593,chunk__874594,count__874595,i__874596,segv_874643,gline_874644,lc_874645,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__874646 = seq__874593;
var G__874647 = chunk__874594;
var G__874648 = count__874595;
var G__874649 = (i__874596 + (1));
seq__874593 = G__874646;
chunk__874594 = G__874647;
count__874595 = G__874648;
i__874596 = G__874649;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__874593);
if(temp__4425__auto__){
var seq__874593__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__874593__$1)){
var c__25014__auto__ = cljs.core.chunk_first.call(null,seq__874593__$1);
var G__874650 = cljs.core.chunk_rest.call(null,seq__874593__$1);
var G__874651 = c__25014__auto__;
var G__874652 = cljs.core.count.call(null,c__25014__auto__);
var G__874653 = (0);
seq__874593 = G__874650;
chunk__874594 = G__874651;
count__874595 = G__874652;
i__874596 = G__874653;
continue;
} else {
var info = cljs.core.first.call(null,seq__874593__$1);
var segv_874654 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_874655 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_874656 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_874655 > (lc_874656 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__874593,chunk__874594,count__874595,i__874596,segv_874654,gline_874655,lc_874656,info,seq__874593__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_874655 - (lc_874656 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_874654], null));
});})(seq__874593,chunk__874594,count__874595,i__874596,segv_874654,gline_874655,lc_874656,info,seq__874593__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__874593,chunk__874594,count__874595,i__874596,segv_874654,gline_874655,lc_874656,info,seq__874593__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_874655], null),cljs.core.conj,segv_874654);
});})(seq__874593,chunk__874594,count__874595,i__874596,segv_874654,gline_874655,lc_874656,info,seq__874593__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__874657 = cljs.core.next.call(null,seq__874593__$1);
var G__874658 = null;
var G__874659 = (0);
var G__874660 = (0);
seq__874593 = G__874657;
chunk__874594 = G__874658;
count__874595 = G__874659;
i__874596 = G__874660;
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
var seq__874597_874661 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__874598_874662 = null;
var count__874599_874663 = (0);
var i__874600_874664 = (0);
while(true){
if((i__874600_874664 < count__874599_874663)){
var vec__874601_874665 = cljs.core._nth.call(null,chunk__874598_874662,i__874600_874664);
var source_idx_874666 = cljs.core.nth.call(null,vec__874601_874665,(0),null);
var vec__874602_874667 = cljs.core.nth.call(null,vec__874601_874665,(1),null);
var __874668 = cljs.core.nth.call(null,vec__874602_874667,(0),null);
var lines_874669__$1 = cljs.core.nth.call(null,vec__874602_874667,(1),null);
var seq__874603_874670 = cljs.core.seq.call(null,lines_874669__$1);
var chunk__874604_874671 = null;
var count__874605_874672 = (0);
var i__874606_874673 = (0);
while(true){
if((i__874606_874673 < count__874605_874672)){
var vec__874607_874674 = cljs.core._nth.call(null,chunk__874604_874671,i__874606_874673);
var line_874675 = cljs.core.nth.call(null,vec__874607_874674,(0),null);
var cols_874676 = cljs.core.nth.call(null,vec__874607_874674,(1),null);
var seq__874608_874677 = cljs.core.seq.call(null,cols_874676);
var chunk__874609_874678 = null;
var count__874610_874679 = (0);
var i__874611_874680 = (0);
while(true){
if((i__874611_874680 < count__874610_874679)){
var vec__874612_874681 = cljs.core._nth.call(null,chunk__874609_874678,i__874611_874680);
var col_874682 = cljs.core.nth.call(null,vec__874612_874681,(0),null);
var infos_874683 = cljs.core.nth.call(null,vec__874612_874681,(1),null);
encode_cols.call(null,infos_874683,source_idx_874666,line_874675,col_874682);

var G__874684 = seq__874608_874677;
var G__874685 = chunk__874609_874678;
var G__874686 = count__874610_874679;
var G__874687 = (i__874611_874680 + (1));
seq__874608_874677 = G__874684;
chunk__874609_874678 = G__874685;
count__874610_874679 = G__874686;
i__874611_874680 = G__874687;
continue;
} else {
var temp__4425__auto___874688 = cljs.core.seq.call(null,seq__874608_874677);
if(temp__4425__auto___874688){
var seq__874608_874689__$1 = temp__4425__auto___874688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__874608_874689__$1)){
var c__25014__auto___874690 = cljs.core.chunk_first.call(null,seq__874608_874689__$1);
var G__874691 = cljs.core.chunk_rest.call(null,seq__874608_874689__$1);
var G__874692 = c__25014__auto___874690;
var G__874693 = cljs.core.count.call(null,c__25014__auto___874690);
var G__874694 = (0);
seq__874608_874677 = G__874691;
chunk__874609_874678 = G__874692;
count__874610_874679 = G__874693;
i__874611_874680 = G__874694;
continue;
} else {
var vec__874613_874695 = cljs.core.first.call(null,seq__874608_874689__$1);
var col_874696 = cljs.core.nth.call(null,vec__874613_874695,(0),null);
var infos_874697 = cljs.core.nth.call(null,vec__874613_874695,(1),null);
encode_cols.call(null,infos_874697,source_idx_874666,line_874675,col_874696);

var G__874698 = cljs.core.next.call(null,seq__874608_874689__$1);
var G__874699 = null;
var G__874700 = (0);
var G__874701 = (0);
seq__874608_874677 = G__874698;
chunk__874609_874678 = G__874699;
count__874610_874679 = G__874700;
i__874611_874680 = G__874701;
continue;
}
} else {
}
}
break;
}

var G__874702 = seq__874603_874670;
var G__874703 = chunk__874604_874671;
var G__874704 = count__874605_874672;
var G__874705 = (i__874606_874673 + (1));
seq__874603_874670 = G__874702;
chunk__874604_874671 = G__874703;
count__874605_874672 = G__874704;
i__874606_874673 = G__874705;
continue;
} else {
var temp__4425__auto___874706 = cljs.core.seq.call(null,seq__874603_874670);
if(temp__4425__auto___874706){
var seq__874603_874707__$1 = temp__4425__auto___874706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__874603_874707__$1)){
var c__25014__auto___874708 = cljs.core.chunk_first.call(null,seq__874603_874707__$1);
var G__874709 = cljs.core.chunk_rest.call(null,seq__874603_874707__$1);
var G__874710 = c__25014__auto___874708;
var G__874711 = cljs.core.count.call(null,c__25014__auto___874708);
var G__874712 = (0);
seq__874603_874670 = G__874709;
chunk__874604_874671 = G__874710;
count__874605_874672 = G__874711;
i__874606_874673 = G__874712;
continue;
} else {
var vec__874614_874713 = cljs.core.first.call(null,seq__874603_874707__$1);
var line_874714 = cljs.core.nth.call(null,vec__874614_874713,(0),null);
var cols_874715 = cljs.core.nth.call(null,vec__874614_874713,(1),null);
var seq__874615_874716 = cljs.core.seq.call(null,cols_874715);
var chunk__874616_874717 = null;
var count__874617_874718 = (0);
var i__874618_874719 = (0);
while(true){
if((i__874618_874719 < count__874617_874718)){
var vec__874619_874720 = cljs.core._nth.call(null,chunk__874616_874717,i__874618_874719);
var col_874721 = cljs.core.nth.call(null,vec__874619_874720,(0),null);
var infos_874722 = cljs.core.nth.call(null,vec__874619_874720,(1),null);
encode_cols.call(null,infos_874722,source_idx_874666,line_874714,col_874721);

var G__874723 = seq__874615_874716;
var G__874724 = chunk__874616_874717;
var G__874725 = count__874617_874718;
var G__874726 = (i__874618_874719 + (1));
seq__874615_874716 = G__874723;
chunk__874616_874717 = G__874724;
count__874617_874718 = G__874725;
i__874618_874719 = G__874726;
continue;
} else {
var temp__4425__auto___874727__$1 = cljs.core.seq.call(null,seq__874615_874716);
if(temp__4425__auto___874727__$1){
var seq__874615_874728__$1 = temp__4425__auto___874727__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__874615_874728__$1)){
var c__25014__auto___874729 = cljs.core.chunk_first.call(null,seq__874615_874728__$1);
var G__874730 = cljs.core.chunk_rest.call(null,seq__874615_874728__$1);
var G__874731 = c__25014__auto___874729;
var G__874732 = cljs.core.count.call(null,c__25014__auto___874729);
var G__874733 = (0);
seq__874615_874716 = G__874730;
chunk__874616_874717 = G__874731;
count__874617_874718 = G__874732;
i__874618_874719 = G__874733;
continue;
} else {
var vec__874620_874734 = cljs.core.first.call(null,seq__874615_874728__$1);
var col_874735 = cljs.core.nth.call(null,vec__874620_874734,(0),null);
var infos_874736 = cljs.core.nth.call(null,vec__874620_874734,(1),null);
encode_cols.call(null,infos_874736,source_idx_874666,line_874714,col_874735);

var G__874737 = cljs.core.next.call(null,seq__874615_874728__$1);
var G__874738 = null;
var G__874739 = (0);
var G__874740 = (0);
seq__874615_874716 = G__874737;
chunk__874616_874717 = G__874738;
count__874617_874718 = G__874739;
i__874618_874719 = G__874740;
continue;
}
} else {
}
}
break;
}

var G__874741 = cljs.core.next.call(null,seq__874603_874707__$1);
var G__874742 = null;
var G__874743 = (0);
var G__874744 = (0);
seq__874603_874670 = G__874741;
chunk__874604_874671 = G__874742;
count__874605_874672 = G__874743;
i__874606_874673 = G__874744;
continue;
}
} else {
}
}
break;
}

var G__874745 = seq__874597_874661;
var G__874746 = chunk__874598_874662;
var G__874747 = count__874599_874663;
var G__874748 = (i__874600_874664 + (1));
seq__874597_874661 = G__874745;
chunk__874598_874662 = G__874746;
count__874599_874663 = G__874747;
i__874600_874664 = G__874748;
continue;
} else {
var temp__4425__auto___874749 = cljs.core.seq.call(null,seq__874597_874661);
if(temp__4425__auto___874749){
var seq__874597_874750__$1 = temp__4425__auto___874749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__874597_874750__$1)){
var c__25014__auto___874751 = cljs.core.chunk_first.call(null,seq__874597_874750__$1);
var G__874752 = cljs.core.chunk_rest.call(null,seq__874597_874750__$1);
var G__874753 = c__25014__auto___874751;
var G__874754 = cljs.core.count.call(null,c__25014__auto___874751);
var G__874755 = (0);
seq__874597_874661 = G__874752;
chunk__874598_874662 = G__874753;
count__874599_874663 = G__874754;
i__874600_874664 = G__874755;
continue;
} else {
var vec__874621_874756 = cljs.core.first.call(null,seq__874597_874750__$1);
var source_idx_874757 = cljs.core.nth.call(null,vec__874621_874756,(0),null);
var vec__874622_874758 = cljs.core.nth.call(null,vec__874621_874756,(1),null);
var __874759 = cljs.core.nth.call(null,vec__874622_874758,(0),null);
var lines_874760__$1 = cljs.core.nth.call(null,vec__874622_874758,(1),null);
var seq__874623_874761 = cljs.core.seq.call(null,lines_874760__$1);
var chunk__874624_874762 = null;
var count__874625_874763 = (0);
var i__874626_874764 = (0);
while(true){
if((i__874626_874764 < count__874625_874763)){
var vec__874627_874765 = cljs.core._nth.call(null,chunk__874624_874762,i__874626_874764);
var line_874766 = cljs.core.nth.call(null,vec__874627_874765,(0),null);
var cols_874767 = cljs.core.nth.call(null,vec__874627_874765,(1),null);
var seq__874628_874768 = cljs.core.seq.call(null,cols_874767);
var chunk__874629_874769 = null;
var count__874630_874770 = (0);
var i__874631_874771 = (0);
while(true){
if((i__874631_874771 < count__874630_874770)){
var vec__874632_874772 = cljs.core._nth.call(null,chunk__874629_874769,i__874631_874771);
var col_874773 = cljs.core.nth.call(null,vec__874632_874772,(0),null);
var infos_874774 = cljs.core.nth.call(null,vec__874632_874772,(1),null);
encode_cols.call(null,infos_874774,source_idx_874757,line_874766,col_874773);

var G__874775 = seq__874628_874768;
var G__874776 = chunk__874629_874769;
var G__874777 = count__874630_874770;
var G__874778 = (i__874631_874771 + (1));
seq__874628_874768 = G__874775;
chunk__874629_874769 = G__874776;
count__874630_874770 = G__874777;
i__874631_874771 = G__874778;
continue;
} else {
var temp__4425__auto___874779__$1 = cljs.core.seq.call(null,seq__874628_874768);
if(temp__4425__auto___874779__$1){
var seq__874628_874780__$1 = temp__4425__auto___874779__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__874628_874780__$1)){
var c__25014__auto___874781 = cljs.core.chunk_first.call(null,seq__874628_874780__$1);
var G__874782 = cljs.core.chunk_rest.call(null,seq__874628_874780__$1);
var G__874783 = c__25014__auto___874781;
var G__874784 = cljs.core.count.call(null,c__25014__auto___874781);
var G__874785 = (0);
seq__874628_874768 = G__874782;
chunk__874629_874769 = G__874783;
count__874630_874770 = G__874784;
i__874631_874771 = G__874785;
continue;
} else {
var vec__874633_874786 = cljs.core.first.call(null,seq__874628_874780__$1);
var col_874787 = cljs.core.nth.call(null,vec__874633_874786,(0),null);
var infos_874788 = cljs.core.nth.call(null,vec__874633_874786,(1),null);
encode_cols.call(null,infos_874788,source_idx_874757,line_874766,col_874787);

var G__874789 = cljs.core.next.call(null,seq__874628_874780__$1);
var G__874790 = null;
var G__874791 = (0);
var G__874792 = (0);
seq__874628_874768 = G__874789;
chunk__874629_874769 = G__874790;
count__874630_874770 = G__874791;
i__874631_874771 = G__874792;
continue;
}
} else {
}
}
break;
}

var G__874793 = seq__874623_874761;
var G__874794 = chunk__874624_874762;
var G__874795 = count__874625_874763;
var G__874796 = (i__874626_874764 + (1));
seq__874623_874761 = G__874793;
chunk__874624_874762 = G__874794;
count__874625_874763 = G__874795;
i__874626_874764 = G__874796;
continue;
} else {
var temp__4425__auto___874797__$1 = cljs.core.seq.call(null,seq__874623_874761);
if(temp__4425__auto___874797__$1){
var seq__874623_874798__$1 = temp__4425__auto___874797__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__874623_874798__$1)){
var c__25014__auto___874799 = cljs.core.chunk_first.call(null,seq__874623_874798__$1);
var G__874800 = cljs.core.chunk_rest.call(null,seq__874623_874798__$1);
var G__874801 = c__25014__auto___874799;
var G__874802 = cljs.core.count.call(null,c__25014__auto___874799);
var G__874803 = (0);
seq__874623_874761 = G__874800;
chunk__874624_874762 = G__874801;
count__874625_874763 = G__874802;
i__874626_874764 = G__874803;
continue;
} else {
var vec__874634_874804 = cljs.core.first.call(null,seq__874623_874798__$1);
var line_874805 = cljs.core.nth.call(null,vec__874634_874804,(0),null);
var cols_874806 = cljs.core.nth.call(null,vec__874634_874804,(1),null);
var seq__874635_874807 = cljs.core.seq.call(null,cols_874806);
var chunk__874636_874808 = null;
var count__874637_874809 = (0);
var i__874638_874810 = (0);
while(true){
if((i__874638_874810 < count__874637_874809)){
var vec__874639_874811 = cljs.core._nth.call(null,chunk__874636_874808,i__874638_874810);
var col_874812 = cljs.core.nth.call(null,vec__874639_874811,(0),null);
var infos_874813 = cljs.core.nth.call(null,vec__874639_874811,(1),null);
encode_cols.call(null,infos_874813,source_idx_874757,line_874805,col_874812);

var G__874814 = seq__874635_874807;
var G__874815 = chunk__874636_874808;
var G__874816 = count__874637_874809;
var G__874817 = (i__874638_874810 + (1));
seq__874635_874807 = G__874814;
chunk__874636_874808 = G__874815;
count__874637_874809 = G__874816;
i__874638_874810 = G__874817;
continue;
} else {
var temp__4425__auto___874818__$2 = cljs.core.seq.call(null,seq__874635_874807);
if(temp__4425__auto___874818__$2){
var seq__874635_874819__$1 = temp__4425__auto___874818__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__874635_874819__$1)){
var c__25014__auto___874820 = cljs.core.chunk_first.call(null,seq__874635_874819__$1);
var G__874821 = cljs.core.chunk_rest.call(null,seq__874635_874819__$1);
var G__874822 = c__25014__auto___874820;
var G__874823 = cljs.core.count.call(null,c__25014__auto___874820);
var G__874824 = (0);
seq__874635_874807 = G__874821;
chunk__874636_874808 = G__874822;
count__874637_874809 = G__874823;
i__874638_874810 = G__874824;
continue;
} else {
var vec__874640_874825 = cljs.core.first.call(null,seq__874635_874819__$1);
var col_874826 = cljs.core.nth.call(null,vec__874640_874825,(0),null);
var infos_874827 = cljs.core.nth.call(null,vec__874640_874825,(1),null);
encode_cols.call(null,infos_874827,source_idx_874757,line_874805,col_874826);

var G__874828 = cljs.core.next.call(null,seq__874635_874819__$1);
var G__874829 = null;
var G__874830 = (0);
var G__874831 = (0);
seq__874635_874807 = G__874828;
chunk__874636_874808 = G__874829;
count__874637_874809 = G__874830;
i__874638_874810 = G__874831;
continue;
}
} else {
}
}
break;
}

var G__874832 = cljs.core.next.call(null,seq__874623_874798__$1);
var G__874833 = null;
var G__874834 = (0);
var G__874835 = (0);
seq__874623_874761 = G__874832;
chunk__874624_874762 = G__874833;
count__874625_874763 = G__874834;
i__874626_874764 = G__874835;
continue;
}
} else {
}
}
break;
}

var G__874836 = cljs.core.next.call(null,seq__874597_874750__$1);
var G__874837 = null;
var G__874838 = (0);
var G__874839 = (0);
seq__874597_874661 = G__874836;
chunk__874598_874662 = G__874837;
count__874599_874663 = G__874838;
i__874600_874664 = G__874839;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__874641 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__874540_SHARP_){
return [cljs.core.str(p1__874540_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__874541_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__874541_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__874542_SHARP_){
return clojure.string.join.call(null,",",p1__874542_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__874641__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__874642 = G__874641;
goog.object.set(G__874642,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__874642;
})():G__874641);
return G__874641__$1;
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
var vec__874845 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__874845,(0),null);
var col_map = cljs.core.nth.call(null,vec__874845,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__874846 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__874846,(0),null);
var infos = cljs.core.nth.call(null,vec__874846,(1),null);
var G__874850 = cljs.core.next.call(null,col_map_seq);
var G__874851 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__874846,col,infos,vec__874845,line,col_map){
return (function (v,p__874847){
var map__874848 = p__874847;
var map__874848__$1 = ((((!((map__874848 == null)))?((((map__874848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__874848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__874848):map__874848);
var gline = cljs.core.get.call(null,map__874848__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__874848__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__874846,col,infos,vec__874845,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__874850;
new_cols = G__874851;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__874852 = cljs.core.next.call(null,line_map_seq);
var G__874853 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__874852;
new_lines = G__874853;
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
var seq__874904_874954 = cljs.core.seq.call(null,reverse_map);
var chunk__874905_874955 = null;
var count__874906_874956 = (0);
var i__874907_874957 = (0);
while(true){
if((i__874907_874957 < count__874906_874956)){
var vec__874908_874958 = cljs.core._nth.call(null,chunk__874905_874955,i__874907_874957);
var line_874959 = cljs.core.nth.call(null,vec__874908_874958,(0),null);
var columns_874960 = cljs.core.nth.call(null,vec__874908_874958,(1),null);
var seq__874909_874961 = cljs.core.seq.call(null,columns_874960);
var chunk__874910_874962 = null;
var count__874911_874963 = (0);
var i__874912_874964 = (0);
while(true){
if((i__874912_874964 < count__874911_874963)){
var vec__874913_874965 = cljs.core._nth.call(null,chunk__874910_874962,i__874912_874964);
var column_874966 = cljs.core.nth.call(null,vec__874913_874965,(0),null);
var column_info_874967 = cljs.core.nth.call(null,vec__874913_874965,(1),null);
var seq__874914_874968 = cljs.core.seq.call(null,column_info_874967);
var chunk__874915_874969 = null;
var count__874916_874970 = (0);
var i__874917_874971 = (0);
while(true){
if((i__874917_874971 < count__874916_874970)){
var map__874918_874972 = cljs.core._nth.call(null,chunk__874915_874969,i__874917_874971);
var map__874918_874973__$1 = ((((!((map__874918_874972 == null)))?((((map__874918_874972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__874918_874972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__874918_874972):map__874918_874972);
var gline_874974 = cljs.core.get.call(null,map__874918_874973__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_874975 = cljs.core.get.call(null,map__874918_874973__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_874976 = cljs.core.get.call(null,map__874918_874973__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_874974], null),cljs.core.fnil.call(null,((function (seq__874914_874968,chunk__874915_874969,count__874916_874970,i__874917_874971,seq__874909_874961,chunk__874910_874962,count__874911_874963,i__874912_874964,seq__874904_874954,chunk__874905_874955,count__874906_874956,i__874907_874957,map__874918_874972,map__874918_874973__$1,gline_874974,gcol_874975,name_874976,vec__874913_874965,column_874966,column_info_874967,vec__874908_874958,line_874959,columns_874960,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_874966], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_874959,new cljs.core.Keyword(null,"col","col",-1959363084),column_874966,new cljs.core.Keyword(null,"name","name",1843675177),name_874976], null));
});})(seq__874914_874968,chunk__874915_874969,count__874916_874970,i__874917_874971,seq__874909_874961,chunk__874910_874962,count__874911_874963,i__874912_874964,seq__874904_874954,chunk__874905_874955,count__874906_874956,i__874907_874957,map__874918_874972,map__874918_874973__$1,gline_874974,gcol_874975,name_874976,vec__874913_874965,column_874966,column_info_874967,vec__874908_874958,line_874959,columns_874960,inverted))
,cljs.core.sorted_map.call(null)));

var G__874977 = seq__874914_874968;
var G__874978 = chunk__874915_874969;
var G__874979 = count__874916_874970;
var G__874980 = (i__874917_874971 + (1));
seq__874914_874968 = G__874977;
chunk__874915_874969 = G__874978;
count__874916_874970 = G__874979;
i__874917_874971 = G__874980;
continue;
} else {
var temp__4425__auto___874981 = cljs.core.seq.call(null,seq__874914_874968);
if(temp__4425__auto___874981){
var seq__874914_874982__$1 = temp__4425__auto___874981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__874914_874982__$1)){
var c__25014__auto___874983 = cljs.core.chunk_first.call(null,seq__874914_874982__$1);
var G__874984 = cljs.core.chunk_rest.call(null,seq__874914_874982__$1);
var G__874985 = c__25014__auto___874983;
var G__874986 = cljs.core.count.call(null,c__25014__auto___874983);
var G__874987 = (0);
seq__874914_874968 = G__874984;
chunk__874915_874969 = G__874985;
count__874916_874970 = G__874986;
i__874917_874971 = G__874987;
continue;
} else {
var map__874920_874988 = cljs.core.first.call(null,seq__874914_874982__$1);
var map__874920_874989__$1 = ((((!((map__874920_874988 == null)))?((((map__874920_874988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__874920_874988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__874920_874988):map__874920_874988);
var gline_874990 = cljs.core.get.call(null,map__874920_874989__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_874991 = cljs.core.get.call(null,map__874920_874989__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_874992 = cljs.core.get.call(null,map__874920_874989__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_874990], null),cljs.core.fnil.call(null,((function (seq__874914_874968,chunk__874915_874969,count__874916_874970,i__874917_874971,seq__874909_874961,chunk__874910_874962,count__874911_874963,i__874912_874964,seq__874904_874954,chunk__874905_874955,count__874906_874956,i__874907_874957,map__874920_874988,map__874920_874989__$1,gline_874990,gcol_874991,name_874992,seq__874914_874982__$1,temp__4425__auto___874981,vec__874913_874965,column_874966,column_info_874967,vec__874908_874958,line_874959,columns_874960,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_874966], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_874959,new cljs.core.Keyword(null,"col","col",-1959363084),column_874966,new cljs.core.Keyword(null,"name","name",1843675177),name_874992], null));
});})(seq__874914_874968,chunk__874915_874969,count__874916_874970,i__874917_874971,seq__874909_874961,chunk__874910_874962,count__874911_874963,i__874912_874964,seq__874904_874954,chunk__874905_874955,count__874906_874956,i__874907_874957,map__874920_874988,map__874920_874989__$1,gline_874990,gcol_874991,name_874992,seq__874914_874982__$1,temp__4425__auto___874981,vec__874913_874965,column_874966,column_info_874967,vec__874908_874958,line_874959,columns_874960,inverted))
,cljs.core.sorted_map.call(null)));

var G__874993 = cljs.core.next.call(null,seq__874914_874982__$1);
var G__874994 = null;
var G__874995 = (0);
var G__874996 = (0);
seq__874914_874968 = G__874993;
chunk__874915_874969 = G__874994;
count__874916_874970 = G__874995;
i__874917_874971 = G__874996;
continue;
}
} else {
}
}
break;
}

var G__874997 = seq__874909_874961;
var G__874998 = chunk__874910_874962;
var G__874999 = count__874911_874963;
var G__875000 = (i__874912_874964 + (1));
seq__874909_874961 = G__874997;
chunk__874910_874962 = G__874998;
count__874911_874963 = G__874999;
i__874912_874964 = G__875000;
continue;
} else {
var temp__4425__auto___875001 = cljs.core.seq.call(null,seq__874909_874961);
if(temp__4425__auto___875001){
var seq__874909_875002__$1 = temp__4425__auto___875001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__874909_875002__$1)){
var c__25014__auto___875003 = cljs.core.chunk_first.call(null,seq__874909_875002__$1);
var G__875004 = cljs.core.chunk_rest.call(null,seq__874909_875002__$1);
var G__875005 = c__25014__auto___875003;
var G__875006 = cljs.core.count.call(null,c__25014__auto___875003);
var G__875007 = (0);
seq__874909_874961 = G__875004;
chunk__874910_874962 = G__875005;
count__874911_874963 = G__875006;
i__874912_874964 = G__875007;
continue;
} else {
var vec__874922_875008 = cljs.core.first.call(null,seq__874909_875002__$1);
var column_875009 = cljs.core.nth.call(null,vec__874922_875008,(0),null);
var column_info_875010 = cljs.core.nth.call(null,vec__874922_875008,(1),null);
var seq__874923_875011 = cljs.core.seq.call(null,column_info_875010);
var chunk__874924_875012 = null;
var count__874925_875013 = (0);
var i__874926_875014 = (0);
while(true){
if((i__874926_875014 < count__874925_875013)){
var map__874927_875015 = cljs.core._nth.call(null,chunk__874924_875012,i__874926_875014);
var map__874927_875016__$1 = ((((!((map__874927_875015 == null)))?((((map__874927_875015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__874927_875015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__874927_875015):map__874927_875015);
var gline_875017 = cljs.core.get.call(null,map__874927_875016__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_875018 = cljs.core.get.call(null,map__874927_875016__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_875019 = cljs.core.get.call(null,map__874927_875016__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_875017], null),cljs.core.fnil.call(null,((function (seq__874923_875011,chunk__874924_875012,count__874925_875013,i__874926_875014,seq__874909_874961,chunk__874910_874962,count__874911_874963,i__874912_874964,seq__874904_874954,chunk__874905_874955,count__874906_874956,i__874907_874957,map__874927_875015,map__874927_875016__$1,gline_875017,gcol_875018,name_875019,vec__874922_875008,column_875009,column_info_875010,seq__874909_875002__$1,temp__4425__auto___875001,vec__874908_874958,line_874959,columns_874960,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_875009], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_874959,new cljs.core.Keyword(null,"col","col",-1959363084),column_875009,new cljs.core.Keyword(null,"name","name",1843675177),name_875019], null));
});})(seq__874923_875011,chunk__874924_875012,count__874925_875013,i__874926_875014,seq__874909_874961,chunk__874910_874962,count__874911_874963,i__874912_874964,seq__874904_874954,chunk__874905_874955,count__874906_874956,i__874907_874957,map__874927_875015,map__874927_875016__$1,gline_875017,gcol_875018,name_875019,vec__874922_875008,column_875009,column_info_875010,seq__874909_875002__$1,temp__4425__auto___875001,vec__874908_874958,line_874959,columns_874960,inverted))
,cljs.core.sorted_map.call(null)));

var G__875020 = seq__874923_875011;
var G__875021 = chunk__874924_875012;
var G__875022 = count__874925_875013;
var G__875023 = (i__874926_875014 + (1));
seq__874923_875011 = G__875020;
chunk__874924_875012 = G__875021;
count__874925_875013 = G__875022;
i__874926_875014 = G__875023;
continue;
} else {
var temp__4425__auto___875024__$1 = cljs.core.seq.call(null,seq__874923_875011);
if(temp__4425__auto___875024__$1){
var seq__874923_875025__$1 = temp__4425__auto___875024__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__874923_875025__$1)){
var c__25014__auto___875026 = cljs.core.chunk_first.call(null,seq__874923_875025__$1);
var G__875027 = cljs.core.chunk_rest.call(null,seq__874923_875025__$1);
var G__875028 = c__25014__auto___875026;
var G__875029 = cljs.core.count.call(null,c__25014__auto___875026);
var G__875030 = (0);
seq__874923_875011 = G__875027;
chunk__874924_875012 = G__875028;
count__874925_875013 = G__875029;
i__874926_875014 = G__875030;
continue;
} else {
var map__874929_875031 = cljs.core.first.call(null,seq__874923_875025__$1);
var map__874929_875032__$1 = ((((!((map__874929_875031 == null)))?((((map__874929_875031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__874929_875031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__874929_875031):map__874929_875031);
var gline_875033 = cljs.core.get.call(null,map__874929_875032__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_875034 = cljs.core.get.call(null,map__874929_875032__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_875035 = cljs.core.get.call(null,map__874929_875032__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_875033], null),cljs.core.fnil.call(null,((function (seq__874923_875011,chunk__874924_875012,count__874925_875013,i__874926_875014,seq__874909_874961,chunk__874910_874962,count__874911_874963,i__874912_874964,seq__874904_874954,chunk__874905_874955,count__874906_874956,i__874907_874957,map__874929_875031,map__874929_875032__$1,gline_875033,gcol_875034,name_875035,seq__874923_875025__$1,temp__4425__auto___875024__$1,vec__874922_875008,column_875009,column_info_875010,seq__874909_875002__$1,temp__4425__auto___875001,vec__874908_874958,line_874959,columns_874960,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_875009], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_874959,new cljs.core.Keyword(null,"col","col",-1959363084),column_875009,new cljs.core.Keyword(null,"name","name",1843675177),name_875035], null));
});})(seq__874923_875011,chunk__874924_875012,count__874925_875013,i__874926_875014,seq__874909_874961,chunk__874910_874962,count__874911_874963,i__874912_874964,seq__874904_874954,chunk__874905_874955,count__874906_874956,i__874907_874957,map__874929_875031,map__874929_875032__$1,gline_875033,gcol_875034,name_875035,seq__874923_875025__$1,temp__4425__auto___875024__$1,vec__874922_875008,column_875009,column_info_875010,seq__874909_875002__$1,temp__4425__auto___875001,vec__874908_874958,line_874959,columns_874960,inverted))
,cljs.core.sorted_map.call(null)));

var G__875036 = cljs.core.next.call(null,seq__874923_875025__$1);
var G__875037 = null;
var G__875038 = (0);
var G__875039 = (0);
seq__874923_875011 = G__875036;
chunk__874924_875012 = G__875037;
count__874925_875013 = G__875038;
i__874926_875014 = G__875039;
continue;
}
} else {
}
}
break;
}

var G__875040 = cljs.core.next.call(null,seq__874909_875002__$1);
var G__875041 = null;
var G__875042 = (0);
var G__875043 = (0);
seq__874909_874961 = G__875040;
chunk__874910_874962 = G__875041;
count__874911_874963 = G__875042;
i__874912_874964 = G__875043;
continue;
}
} else {
}
}
break;
}

var G__875044 = seq__874904_874954;
var G__875045 = chunk__874905_874955;
var G__875046 = count__874906_874956;
var G__875047 = (i__874907_874957 + (1));
seq__874904_874954 = G__875044;
chunk__874905_874955 = G__875045;
count__874906_874956 = G__875046;
i__874907_874957 = G__875047;
continue;
} else {
var temp__4425__auto___875048 = cljs.core.seq.call(null,seq__874904_874954);
if(temp__4425__auto___875048){
var seq__874904_875049__$1 = temp__4425__auto___875048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__874904_875049__$1)){
var c__25014__auto___875050 = cljs.core.chunk_first.call(null,seq__874904_875049__$1);
var G__875051 = cljs.core.chunk_rest.call(null,seq__874904_875049__$1);
var G__875052 = c__25014__auto___875050;
var G__875053 = cljs.core.count.call(null,c__25014__auto___875050);
var G__875054 = (0);
seq__874904_874954 = G__875051;
chunk__874905_874955 = G__875052;
count__874906_874956 = G__875053;
i__874907_874957 = G__875054;
continue;
} else {
var vec__874931_875055 = cljs.core.first.call(null,seq__874904_875049__$1);
var line_875056 = cljs.core.nth.call(null,vec__874931_875055,(0),null);
var columns_875057 = cljs.core.nth.call(null,vec__874931_875055,(1),null);
var seq__874932_875058 = cljs.core.seq.call(null,columns_875057);
var chunk__874933_875059 = null;
var count__874934_875060 = (0);
var i__874935_875061 = (0);
while(true){
if((i__874935_875061 < count__874934_875060)){
var vec__874936_875062 = cljs.core._nth.call(null,chunk__874933_875059,i__874935_875061);
var column_875063 = cljs.core.nth.call(null,vec__874936_875062,(0),null);
var column_info_875064 = cljs.core.nth.call(null,vec__874936_875062,(1),null);
var seq__874937_875065 = cljs.core.seq.call(null,column_info_875064);
var chunk__874938_875066 = null;
var count__874939_875067 = (0);
var i__874940_875068 = (0);
while(true){
if((i__874940_875068 < count__874939_875067)){
var map__874941_875069 = cljs.core._nth.call(null,chunk__874938_875066,i__874940_875068);
var map__874941_875070__$1 = ((((!((map__874941_875069 == null)))?((((map__874941_875069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__874941_875069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__874941_875069):map__874941_875069);
var gline_875071 = cljs.core.get.call(null,map__874941_875070__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_875072 = cljs.core.get.call(null,map__874941_875070__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_875073 = cljs.core.get.call(null,map__874941_875070__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_875071], null),cljs.core.fnil.call(null,((function (seq__874937_875065,chunk__874938_875066,count__874939_875067,i__874940_875068,seq__874932_875058,chunk__874933_875059,count__874934_875060,i__874935_875061,seq__874904_874954,chunk__874905_874955,count__874906_874956,i__874907_874957,map__874941_875069,map__874941_875070__$1,gline_875071,gcol_875072,name_875073,vec__874936_875062,column_875063,column_info_875064,vec__874931_875055,line_875056,columns_875057,seq__874904_875049__$1,temp__4425__auto___875048,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_875063], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_875056,new cljs.core.Keyword(null,"col","col",-1959363084),column_875063,new cljs.core.Keyword(null,"name","name",1843675177),name_875073], null));
});})(seq__874937_875065,chunk__874938_875066,count__874939_875067,i__874940_875068,seq__874932_875058,chunk__874933_875059,count__874934_875060,i__874935_875061,seq__874904_874954,chunk__874905_874955,count__874906_874956,i__874907_874957,map__874941_875069,map__874941_875070__$1,gline_875071,gcol_875072,name_875073,vec__874936_875062,column_875063,column_info_875064,vec__874931_875055,line_875056,columns_875057,seq__874904_875049__$1,temp__4425__auto___875048,inverted))
,cljs.core.sorted_map.call(null)));

var G__875074 = seq__874937_875065;
var G__875075 = chunk__874938_875066;
var G__875076 = count__874939_875067;
var G__875077 = (i__874940_875068 + (1));
seq__874937_875065 = G__875074;
chunk__874938_875066 = G__875075;
count__874939_875067 = G__875076;
i__874940_875068 = G__875077;
continue;
} else {
var temp__4425__auto___875078__$1 = cljs.core.seq.call(null,seq__874937_875065);
if(temp__4425__auto___875078__$1){
var seq__874937_875079__$1 = temp__4425__auto___875078__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__874937_875079__$1)){
var c__25014__auto___875080 = cljs.core.chunk_first.call(null,seq__874937_875079__$1);
var G__875081 = cljs.core.chunk_rest.call(null,seq__874937_875079__$1);
var G__875082 = c__25014__auto___875080;
var G__875083 = cljs.core.count.call(null,c__25014__auto___875080);
var G__875084 = (0);
seq__874937_875065 = G__875081;
chunk__874938_875066 = G__875082;
count__874939_875067 = G__875083;
i__874940_875068 = G__875084;
continue;
} else {
var map__874943_875085 = cljs.core.first.call(null,seq__874937_875079__$1);
var map__874943_875086__$1 = ((((!((map__874943_875085 == null)))?((((map__874943_875085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__874943_875085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__874943_875085):map__874943_875085);
var gline_875087 = cljs.core.get.call(null,map__874943_875086__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_875088 = cljs.core.get.call(null,map__874943_875086__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_875089 = cljs.core.get.call(null,map__874943_875086__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_875087], null),cljs.core.fnil.call(null,((function (seq__874937_875065,chunk__874938_875066,count__874939_875067,i__874940_875068,seq__874932_875058,chunk__874933_875059,count__874934_875060,i__874935_875061,seq__874904_874954,chunk__874905_874955,count__874906_874956,i__874907_874957,map__874943_875085,map__874943_875086__$1,gline_875087,gcol_875088,name_875089,seq__874937_875079__$1,temp__4425__auto___875078__$1,vec__874936_875062,column_875063,column_info_875064,vec__874931_875055,line_875056,columns_875057,seq__874904_875049__$1,temp__4425__auto___875048,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_875063], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_875056,new cljs.core.Keyword(null,"col","col",-1959363084),column_875063,new cljs.core.Keyword(null,"name","name",1843675177),name_875089], null));
});})(seq__874937_875065,chunk__874938_875066,count__874939_875067,i__874940_875068,seq__874932_875058,chunk__874933_875059,count__874934_875060,i__874935_875061,seq__874904_874954,chunk__874905_874955,count__874906_874956,i__874907_874957,map__874943_875085,map__874943_875086__$1,gline_875087,gcol_875088,name_875089,seq__874937_875079__$1,temp__4425__auto___875078__$1,vec__874936_875062,column_875063,column_info_875064,vec__874931_875055,line_875056,columns_875057,seq__874904_875049__$1,temp__4425__auto___875048,inverted))
,cljs.core.sorted_map.call(null)));

var G__875090 = cljs.core.next.call(null,seq__874937_875079__$1);
var G__875091 = null;
var G__875092 = (0);
var G__875093 = (0);
seq__874937_875065 = G__875090;
chunk__874938_875066 = G__875091;
count__874939_875067 = G__875092;
i__874940_875068 = G__875093;
continue;
}
} else {
}
}
break;
}

var G__875094 = seq__874932_875058;
var G__875095 = chunk__874933_875059;
var G__875096 = count__874934_875060;
var G__875097 = (i__874935_875061 + (1));
seq__874932_875058 = G__875094;
chunk__874933_875059 = G__875095;
count__874934_875060 = G__875096;
i__874935_875061 = G__875097;
continue;
} else {
var temp__4425__auto___875098__$1 = cljs.core.seq.call(null,seq__874932_875058);
if(temp__4425__auto___875098__$1){
var seq__874932_875099__$1 = temp__4425__auto___875098__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__874932_875099__$1)){
var c__25014__auto___875100 = cljs.core.chunk_first.call(null,seq__874932_875099__$1);
var G__875101 = cljs.core.chunk_rest.call(null,seq__874932_875099__$1);
var G__875102 = c__25014__auto___875100;
var G__875103 = cljs.core.count.call(null,c__25014__auto___875100);
var G__875104 = (0);
seq__874932_875058 = G__875101;
chunk__874933_875059 = G__875102;
count__874934_875060 = G__875103;
i__874935_875061 = G__875104;
continue;
} else {
var vec__874945_875105 = cljs.core.first.call(null,seq__874932_875099__$1);
var column_875106 = cljs.core.nth.call(null,vec__874945_875105,(0),null);
var column_info_875107 = cljs.core.nth.call(null,vec__874945_875105,(1),null);
var seq__874946_875108 = cljs.core.seq.call(null,column_info_875107);
var chunk__874947_875109 = null;
var count__874948_875110 = (0);
var i__874949_875111 = (0);
while(true){
if((i__874949_875111 < count__874948_875110)){
var map__874950_875112 = cljs.core._nth.call(null,chunk__874947_875109,i__874949_875111);
var map__874950_875113__$1 = ((((!((map__874950_875112 == null)))?((((map__874950_875112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__874950_875112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__874950_875112):map__874950_875112);
var gline_875114 = cljs.core.get.call(null,map__874950_875113__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_875115 = cljs.core.get.call(null,map__874950_875113__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_875116 = cljs.core.get.call(null,map__874950_875113__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_875114], null),cljs.core.fnil.call(null,((function (seq__874946_875108,chunk__874947_875109,count__874948_875110,i__874949_875111,seq__874932_875058,chunk__874933_875059,count__874934_875060,i__874935_875061,seq__874904_874954,chunk__874905_874955,count__874906_874956,i__874907_874957,map__874950_875112,map__874950_875113__$1,gline_875114,gcol_875115,name_875116,vec__874945_875105,column_875106,column_info_875107,seq__874932_875099__$1,temp__4425__auto___875098__$1,vec__874931_875055,line_875056,columns_875057,seq__874904_875049__$1,temp__4425__auto___875048,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_875106], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_875056,new cljs.core.Keyword(null,"col","col",-1959363084),column_875106,new cljs.core.Keyword(null,"name","name",1843675177),name_875116], null));
});})(seq__874946_875108,chunk__874947_875109,count__874948_875110,i__874949_875111,seq__874932_875058,chunk__874933_875059,count__874934_875060,i__874935_875061,seq__874904_874954,chunk__874905_874955,count__874906_874956,i__874907_874957,map__874950_875112,map__874950_875113__$1,gline_875114,gcol_875115,name_875116,vec__874945_875105,column_875106,column_info_875107,seq__874932_875099__$1,temp__4425__auto___875098__$1,vec__874931_875055,line_875056,columns_875057,seq__874904_875049__$1,temp__4425__auto___875048,inverted))
,cljs.core.sorted_map.call(null)));

var G__875117 = seq__874946_875108;
var G__875118 = chunk__874947_875109;
var G__875119 = count__874948_875110;
var G__875120 = (i__874949_875111 + (1));
seq__874946_875108 = G__875117;
chunk__874947_875109 = G__875118;
count__874948_875110 = G__875119;
i__874949_875111 = G__875120;
continue;
} else {
var temp__4425__auto___875121__$2 = cljs.core.seq.call(null,seq__874946_875108);
if(temp__4425__auto___875121__$2){
var seq__874946_875122__$1 = temp__4425__auto___875121__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__874946_875122__$1)){
var c__25014__auto___875123 = cljs.core.chunk_first.call(null,seq__874946_875122__$1);
var G__875124 = cljs.core.chunk_rest.call(null,seq__874946_875122__$1);
var G__875125 = c__25014__auto___875123;
var G__875126 = cljs.core.count.call(null,c__25014__auto___875123);
var G__875127 = (0);
seq__874946_875108 = G__875124;
chunk__874947_875109 = G__875125;
count__874948_875110 = G__875126;
i__874949_875111 = G__875127;
continue;
} else {
var map__874952_875128 = cljs.core.first.call(null,seq__874946_875122__$1);
var map__874952_875129__$1 = ((((!((map__874952_875128 == null)))?((((map__874952_875128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__874952_875128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__874952_875128):map__874952_875128);
var gline_875130 = cljs.core.get.call(null,map__874952_875129__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_875131 = cljs.core.get.call(null,map__874952_875129__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_875132 = cljs.core.get.call(null,map__874952_875129__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_875130], null),cljs.core.fnil.call(null,((function (seq__874946_875108,chunk__874947_875109,count__874948_875110,i__874949_875111,seq__874932_875058,chunk__874933_875059,count__874934_875060,i__874935_875061,seq__874904_874954,chunk__874905_874955,count__874906_874956,i__874907_874957,map__874952_875128,map__874952_875129__$1,gline_875130,gcol_875131,name_875132,seq__874946_875122__$1,temp__4425__auto___875121__$2,vec__874945_875105,column_875106,column_info_875107,seq__874932_875099__$1,temp__4425__auto___875098__$1,vec__874931_875055,line_875056,columns_875057,seq__874904_875049__$1,temp__4425__auto___875048,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_875106], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_875056,new cljs.core.Keyword(null,"col","col",-1959363084),column_875106,new cljs.core.Keyword(null,"name","name",1843675177),name_875132], null));
});})(seq__874946_875108,chunk__874947_875109,count__874948_875110,i__874949_875111,seq__874932_875058,chunk__874933_875059,count__874934_875060,i__874935_875061,seq__874904_874954,chunk__874905_874955,count__874906_874956,i__874907_874957,map__874952_875128,map__874952_875129__$1,gline_875130,gcol_875131,name_875132,seq__874946_875122__$1,temp__4425__auto___875121__$2,vec__874945_875105,column_875106,column_info_875107,seq__874932_875099__$1,temp__4425__auto___875098__$1,vec__874931_875055,line_875056,columns_875057,seq__874904_875049__$1,temp__4425__auto___875048,inverted))
,cljs.core.sorted_map.call(null)));

var G__875133 = cljs.core.next.call(null,seq__874946_875122__$1);
var G__875134 = null;
var G__875135 = (0);
var G__875136 = (0);
seq__874946_875108 = G__875133;
chunk__874947_875109 = G__875134;
count__874948_875110 = G__875135;
i__874949_875111 = G__875136;
continue;
}
} else {
}
}
break;
}

var G__875137 = cljs.core.next.call(null,seq__874932_875099__$1);
var G__875138 = null;
var G__875139 = (0);
var G__875140 = (0);
seq__874932_875058 = G__875137;
chunk__874933_875059 = G__875138;
count__874934_875060 = G__875139;
i__874935_875061 = G__875140;
continue;
}
} else {
}
}
break;
}

var G__875141 = cljs.core.next.call(null,seq__874904_875049__$1);
var G__875142 = null;
var G__875143 = (0);
var G__875144 = (0);
seq__874904_874954 = G__875141;
chunk__874905_874955 = G__875142;
count__874906_874956 = G__875143;
i__874907_874957 = G__875144;
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