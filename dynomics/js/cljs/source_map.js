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
return cljs.core.reduce.call(null,(function (m,p__44064){
var vec__44065 = p__44064;
var i = cljs.core.nth.call(null,vec__44065,(0),null);
var v = cljs.core.nth.call(null,vec__44065,(1),null);
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
var vec__44067 = seg;
var gcol = cljs.core.nth.call(null,vec__44067,(0),null);
var source = cljs.core.nth.call(null,vec__44067,(1),null);
var line = cljs.core.nth.call(null,vec__44067,(2),null);
var col = cljs.core.nth.call(null,vec__44067,(3),null);
var name = cljs.core.nth.call(null,vec__44067,(4),null);
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
var vec__44070 = seg;
var gcol = cljs.core.nth.call(null,vec__44070,(0),null);
var source = cljs.core.nth.call(null,vec__44070,(1),null);
var line = cljs.core.nth.call(null,vec__44070,(2),null);
var col = cljs.core.nth.call(null,vec__44070,(3),null);
var name = cljs.core.nth.call(null,vec__44070,(4),null);
var vec__44071 = relseg;
var rgcol = cljs.core.nth.call(null,vec__44071,(0),null);
var rsource = cljs.core.nth.call(null,vec__44071,(1),null);
var rline = cljs.core.nth.call(null,vec__44071,(2),null);
var rcol = cljs.core.nth.call(null,vec__44071,(3),null);
var rname = cljs.core.nth.call(null,vec__44071,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__24165__auto__ = source;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__24165__auto__ = line;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__24165__auto__ = col;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__24165__auto__ = name;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
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
var map__44074 = segmap;
var map__44074__$1 = ((((!((map__44074 == null)))?((((map__44074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44074):map__44074);
var gcol = cljs.core.get.call(null,map__44074__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__44074__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__44074__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__44074__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__44074__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__44074,map__44074__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__44074,map__44074__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__44074,map__44074__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__44074,map__44074__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__44074,map__44074__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__44074,map__44074__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args44076 = [];
var len__25223__auto___44080 = arguments.length;
var i__25224__auto___44081 = (0);
while(true){
if((i__25224__auto___44081 < len__25223__auto___44080)){
args44076.push((arguments[i__25224__auto___44081]));

var G__44082 = (i__25224__auto___44081 + (1));
i__25224__auto___44081 = G__44082;
continue;
} else {
}
break;
}

var G__44078 = args44076.length;
switch (G__44078) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44076.length)].join('')));

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
var vec__44079 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__44084 = cljs.core.next.call(null,segs__$1);
var G__44085 = nrelseg;
var G__44086 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__44084;
relseg__$1 = G__44085;
result__$1 = G__44086;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__44079,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__44079,(1),null);
var G__44087 = (gline + (1));
var G__44088 = cljs.core.next.call(null,lines__$1);
var G__44089 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__44090 = result__$1;
gline = G__44087;
lines__$1 = G__44088;
relseg = G__44089;
result = G__44090;
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
var map__44094 = segmap;
var map__44094__$1 = ((((!((map__44094 == null)))?((((map__44094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44094):map__44094);
var gcol = cljs.core.get.call(null,map__44094__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__44094__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__44094__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__44094__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__44094__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__44094,map__44094__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__44094,map__44094__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__44091_SHARP_){
return cljs.core.conj.call(null,p1__44091_SHARP_,d__$1);
});})(map__44094,map__44094__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__44094,map__44094__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args44096 = [];
var len__25223__auto___44100 = arguments.length;
var i__25224__auto___44101 = (0);
while(true){
if((i__25224__auto___44101 < len__25223__auto___44100)){
args44096.push((arguments[i__25224__auto___44101]));

var G__44102 = (i__25224__auto___44101 + (1));
i__25224__auto___44101 = G__44102;
continue;
} else {
}
break;
}

var G__44098 = args44096.length;
switch (G__44098) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44096.length)].join('')));

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
var vec__44099 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__44104 = cljs.core.next.call(null,segs__$1);
var G__44105 = nrelseg;
var G__44106 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__44104;
relseg__$1 = G__44105;
result__$1 = G__44106;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__44099,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__44099,(1),null);
var G__44107 = (gline + (1));
var G__44108 = cljs.core.next.call(null,lines__$1);
var G__44109 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__44110 = result__$1;
gline = G__44107;
lines__$1 = G__44108;
relseg = G__44109;
result = G__44110;
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
return (function (p__44117){
var vec__44118 = p__44117;
var _ = cljs.core.nth.call(null,vec__44118,(0),null);
var source = cljs.core.nth.call(null,vec__44118,(1),null);
var line = cljs.core.nth.call(null,vec__44118,(2),null);
var col = cljs.core.nth.call(null,vec__44118,(3),null);
var name = cljs.core.nth.call(null,vec__44118,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__44119){
var vec__44120 = p__44119;
var gcol = cljs.core.nth.call(null,vec__44120,(0),null);
var sidx = cljs.core.nth.call(null,vec__44120,(1),null);
var line = cljs.core.nth.call(null,vec__44120,(2),null);
var col = cljs.core.nth.call(null,vec__44120,(3),null);
var name = cljs.core.nth.call(null,vec__44120,(4),null);
var seg = vec__44120;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__44120,gcol,sidx,line,col,name,seg,relseg){
return (function (p__44121){
var vec__44122 = p__44121;
var _ = cljs.core.nth.call(null,vec__44122,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__44122,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__44122,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__44122,(3),null);
var lname = cljs.core.nth.call(null,vec__44122,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__24165__auto__ = name;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__44120,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__24165__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
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
var seq__44176 = cljs.core.seq.call(null,infos);
var chunk__44177 = null;
var count__44178 = (0);
var i__44179 = (0);
while(true){
if((i__44179 < count__44178)){
var info = cljs.core._nth.call(null,chunk__44177,i__44179);
var segv_44226 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_44227 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_44228 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_44227 > (lc_44228 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__44176,chunk__44177,count__44178,i__44179,segv_44226,gline_44227,lc_44228,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_44227 - (lc_44228 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_44226], null));
});})(seq__44176,chunk__44177,count__44178,i__44179,segv_44226,gline_44227,lc_44228,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__44176,chunk__44177,count__44178,i__44179,segv_44226,gline_44227,lc_44228,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44227], null),cljs.core.conj,segv_44226);
});})(seq__44176,chunk__44177,count__44178,i__44179,segv_44226,gline_44227,lc_44228,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__44229 = seq__44176;
var G__44230 = chunk__44177;
var G__44231 = count__44178;
var G__44232 = (i__44179 + (1));
seq__44176 = G__44229;
chunk__44177 = G__44230;
count__44178 = G__44231;
i__44179 = G__44232;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__44176);
if(temp__4425__auto__){
var seq__44176__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44176__$1)){
var c__24968__auto__ = cljs.core.chunk_first.call(null,seq__44176__$1);
var G__44233 = cljs.core.chunk_rest.call(null,seq__44176__$1);
var G__44234 = c__24968__auto__;
var G__44235 = cljs.core.count.call(null,c__24968__auto__);
var G__44236 = (0);
seq__44176 = G__44233;
chunk__44177 = G__44234;
count__44178 = G__44235;
i__44179 = G__44236;
continue;
} else {
var info = cljs.core.first.call(null,seq__44176__$1);
var segv_44237 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_44238 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_44239 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_44238 > (lc_44239 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__44176,chunk__44177,count__44178,i__44179,segv_44237,gline_44238,lc_44239,info,seq__44176__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_44238 - (lc_44239 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_44237], null));
});})(seq__44176,chunk__44177,count__44178,i__44179,segv_44237,gline_44238,lc_44239,info,seq__44176__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__44176,chunk__44177,count__44178,i__44179,segv_44237,gline_44238,lc_44239,info,seq__44176__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44238], null),cljs.core.conj,segv_44237);
});})(seq__44176,chunk__44177,count__44178,i__44179,segv_44237,gline_44238,lc_44239,info,seq__44176__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__44240 = cljs.core.next.call(null,seq__44176__$1);
var G__44241 = null;
var G__44242 = (0);
var G__44243 = (0);
seq__44176 = G__44240;
chunk__44177 = G__44241;
count__44178 = G__44242;
i__44179 = G__44243;
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
var seq__44180_44244 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__44181_44245 = null;
var count__44182_44246 = (0);
var i__44183_44247 = (0);
while(true){
if((i__44183_44247 < count__44182_44246)){
var vec__44184_44248 = cljs.core._nth.call(null,chunk__44181_44245,i__44183_44247);
var source_idx_44249 = cljs.core.nth.call(null,vec__44184_44248,(0),null);
var vec__44185_44250 = cljs.core.nth.call(null,vec__44184_44248,(1),null);
var __44251 = cljs.core.nth.call(null,vec__44185_44250,(0),null);
var lines_44252__$1 = cljs.core.nth.call(null,vec__44185_44250,(1),null);
var seq__44186_44253 = cljs.core.seq.call(null,lines_44252__$1);
var chunk__44187_44254 = null;
var count__44188_44255 = (0);
var i__44189_44256 = (0);
while(true){
if((i__44189_44256 < count__44188_44255)){
var vec__44190_44257 = cljs.core._nth.call(null,chunk__44187_44254,i__44189_44256);
var line_44258 = cljs.core.nth.call(null,vec__44190_44257,(0),null);
var cols_44259 = cljs.core.nth.call(null,vec__44190_44257,(1),null);
var seq__44191_44260 = cljs.core.seq.call(null,cols_44259);
var chunk__44192_44261 = null;
var count__44193_44262 = (0);
var i__44194_44263 = (0);
while(true){
if((i__44194_44263 < count__44193_44262)){
var vec__44195_44264 = cljs.core._nth.call(null,chunk__44192_44261,i__44194_44263);
var col_44265 = cljs.core.nth.call(null,vec__44195_44264,(0),null);
var infos_44266 = cljs.core.nth.call(null,vec__44195_44264,(1),null);
encode_cols.call(null,infos_44266,source_idx_44249,line_44258,col_44265);

var G__44267 = seq__44191_44260;
var G__44268 = chunk__44192_44261;
var G__44269 = count__44193_44262;
var G__44270 = (i__44194_44263 + (1));
seq__44191_44260 = G__44267;
chunk__44192_44261 = G__44268;
count__44193_44262 = G__44269;
i__44194_44263 = G__44270;
continue;
} else {
var temp__4425__auto___44271 = cljs.core.seq.call(null,seq__44191_44260);
if(temp__4425__auto___44271){
var seq__44191_44272__$1 = temp__4425__auto___44271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44191_44272__$1)){
var c__24968__auto___44273 = cljs.core.chunk_first.call(null,seq__44191_44272__$1);
var G__44274 = cljs.core.chunk_rest.call(null,seq__44191_44272__$1);
var G__44275 = c__24968__auto___44273;
var G__44276 = cljs.core.count.call(null,c__24968__auto___44273);
var G__44277 = (0);
seq__44191_44260 = G__44274;
chunk__44192_44261 = G__44275;
count__44193_44262 = G__44276;
i__44194_44263 = G__44277;
continue;
} else {
var vec__44196_44278 = cljs.core.first.call(null,seq__44191_44272__$1);
var col_44279 = cljs.core.nth.call(null,vec__44196_44278,(0),null);
var infos_44280 = cljs.core.nth.call(null,vec__44196_44278,(1),null);
encode_cols.call(null,infos_44280,source_idx_44249,line_44258,col_44279);

var G__44281 = cljs.core.next.call(null,seq__44191_44272__$1);
var G__44282 = null;
var G__44283 = (0);
var G__44284 = (0);
seq__44191_44260 = G__44281;
chunk__44192_44261 = G__44282;
count__44193_44262 = G__44283;
i__44194_44263 = G__44284;
continue;
}
} else {
}
}
break;
}

var G__44285 = seq__44186_44253;
var G__44286 = chunk__44187_44254;
var G__44287 = count__44188_44255;
var G__44288 = (i__44189_44256 + (1));
seq__44186_44253 = G__44285;
chunk__44187_44254 = G__44286;
count__44188_44255 = G__44287;
i__44189_44256 = G__44288;
continue;
} else {
var temp__4425__auto___44289 = cljs.core.seq.call(null,seq__44186_44253);
if(temp__4425__auto___44289){
var seq__44186_44290__$1 = temp__4425__auto___44289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44186_44290__$1)){
var c__24968__auto___44291 = cljs.core.chunk_first.call(null,seq__44186_44290__$1);
var G__44292 = cljs.core.chunk_rest.call(null,seq__44186_44290__$1);
var G__44293 = c__24968__auto___44291;
var G__44294 = cljs.core.count.call(null,c__24968__auto___44291);
var G__44295 = (0);
seq__44186_44253 = G__44292;
chunk__44187_44254 = G__44293;
count__44188_44255 = G__44294;
i__44189_44256 = G__44295;
continue;
} else {
var vec__44197_44296 = cljs.core.first.call(null,seq__44186_44290__$1);
var line_44297 = cljs.core.nth.call(null,vec__44197_44296,(0),null);
var cols_44298 = cljs.core.nth.call(null,vec__44197_44296,(1),null);
var seq__44198_44299 = cljs.core.seq.call(null,cols_44298);
var chunk__44199_44300 = null;
var count__44200_44301 = (0);
var i__44201_44302 = (0);
while(true){
if((i__44201_44302 < count__44200_44301)){
var vec__44202_44303 = cljs.core._nth.call(null,chunk__44199_44300,i__44201_44302);
var col_44304 = cljs.core.nth.call(null,vec__44202_44303,(0),null);
var infos_44305 = cljs.core.nth.call(null,vec__44202_44303,(1),null);
encode_cols.call(null,infos_44305,source_idx_44249,line_44297,col_44304);

var G__44306 = seq__44198_44299;
var G__44307 = chunk__44199_44300;
var G__44308 = count__44200_44301;
var G__44309 = (i__44201_44302 + (1));
seq__44198_44299 = G__44306;
chunk__44199_44300 = G__44307;
count__44200_44301 = G__44308;
i__44201_44302 = G__44309;
continue;
} else {
var temp__4425__auto___44310__$1 = cljs.core.seq.call(null,seq__44198_44299);
if(temp__4425__auto___44310__$1){
var seq__44198_44311__$1 = temp__4425__auto___44310__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44198_44311__$1)){
var c__24968__auto___44312 = cljs.core.chunk_first.call(null,seq__44198_44311__$1);
var G__44313 = cljs.core.chunk_rest.call(null,seq__44198_44311__$1);
var G__44314 = c__24968__auto___44312;
var G__44315 = cljs.core.count.call(null,c__24968__auto___44312);
var G__44316 = (0);
seq__44198_44299 = G__44313;
chunk__44199_44300 = G__44314;
count__44200_44301 = G__44315;
i__44201_44302 = G__44316;
continue;
} else {
var vec__44203_44317 = cljs.core.first.call(null,seq__44198_44311__$1);
var col_44318 = cljs.core.nth.call(null,vec__44203_44317,(0),null);
var infos_44319 = cljs.core.nth.call(null,vec__44203_44317,(1),null);
encode_cols.call(null,infos_44319,source_idx_44249,line_44297,col_44318);

var G__44320 = cljs.core.next.call(null,seq__44198_44311__$1);
var G__44321 = null;
var G__44322 = (0);
var G__44323 = (0);
seq__44198_44299 = G__44320;
chunk__44199_44300 = G__44321;
count__44200_44301 = G__44322;
i__44201_44302 = G__44323;
continue;
}
} else {
}
}
break;
}

var G__44324 = cljs.core.next.call(null,seq__44186_44290__$1);
var G__44325 = null;
var G__44326 = (0);
var G__44327 = (0);
seq__44186_44253 = G__44324;
chunk__44187_44254 = G__44325;
count__44188_44255 = G__44326;
i__44189_44256 = G__44327;
continue;
}
} else {
}
}
break;
}

var G__44328 = seq__44180_44244;
var G__44329 = chunk__44181_44245;
var G__44330 = count__44182_44246;
var G__44331 = (i__44183_44247 + (1));
seq__44180_44244 = G__44328;
chunk__44181_44245 = G__44329;
count__44182_44246 = G__44330;
i__44183_44247 = G__44331;
continue;
} else {
var temp__4425__auto___44332 = cljs.core.seq.call(null,seq__44180_44244);
if(temp__4425__auto___44332){
var seq__44180_44333__$1 = temp__4425__auto___44332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44180_44333__$1)){
var c__24968__auto___44334 = cljs.core.chunk_first.call(null,seq__44180_44333__$1);
var G__44335 = cljs.core.chunk_rest.call(null,seq__44180_44333__$1);
var G__44336 = c__24968__auto___44334;
var G__44337 = cljs.core.count.call(null,c__24968__auto___44334);
var G__44338 = (0);
seq__44180_44244 = G__44335;
chunk__44181_44245 = G__44336;
count__44182_44246 = G__44337;
i__44183_44247 = G__44338;
continue;
} else {
var vec__44204_44339 = cljs.core.first.call(null,seq__44180_44333__$1);
var source_idx_44340 = cljs.core.nth.call(null,vec__44204_44339,(0),null);
var vec__44205_44341 = cljs.core.nth.call(null,vec__44204_44339,(1),null);
var __44342 = cljs.core.nth.call(null,vec__44205_44341,(0),null);
var lines_44343__$1 = cljs.core.nth.call(null,vec__44205_44341,(1),null);
var seq__44206_44344 = cljs.core.seq.call(null,lines_44343__$1);
var chunk__44207_44345 = null;
var count__44208_44346 = (0);
var i__44209_44347 = (0);
while(true){
if((i__44209_44347 < count__44208_44346)){
var vec__44210_44348 = cljs.core._nth.call(null,chunk__44207_44345,i__44209_44347);
var line_44349 = cljs.core.nth.call(null,vec__44210_44348,(0),null);
var cols_44350 = cljs.core.nth.call(null,vec__44210_44348,(1),null);
var seq__44211_44351 = cljs.core.seq.call(null,cols_44350);
var chunk__44212_44352 = null;
var count__44213_44353 = (0);
var i__44214_44354 = (0);
while(true){
if((i__44214_44354 < count__44213_44353)){
var vec__44215_44355 = cljs.core._nth.call(null,chunk__44212_44352,i__44214_44354);
var col_44356 = cljs.core.nth.call(null,vec__44215_44355,(0),null);
var infos_44357 = cljs.core.nth.call(null,vec__44215_44355,(1),null);
encode_cols.call(null,infos_44357,source_idx_44340,line_44349,col_44356);

var G__44358 = seq__44211_44351;
var G__44359 = chunk__44212_44352;
var G__44360 = count__44213_44353;
var G__44361 = (i__44214_44354 + (1));
seq__44211_44351 = G__44358;
chunk__44212_44352 = G__44359;
count__44213_44353 = G__44360;
i__44214_44354 = G__44361;
continue;
} else {
var temp__4425__auto___44362__$1 = cljs.core.seq.call(null,seq__44211_44351);
if(temp__4425__auto___44362__$1){
var seq__44211_44363__$1 = temp__4425__auto___44362__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44211_44363__$1)){
var c__24968__auto___44364 = cljs.core.chunk_first.call(null,seq__44211_44363__$1);
var G__44365 = cljs.core.chunk_rest.call(null,seq__44211_44363__$1);
var G__44366 = c__24968__auto___44364;
var G__44367 = cljs.core.count.call(null,c__24968__auto___44364);
var G__44368 = (0);
seq__44211_44351 = G__44365;
chunk__44212_44352 = G__44366;
count__44213_44353 = G__44367;
i__44214_44354 = G__44368;
continue;
} else {
var vec__44216_44369 = cljs.core.first.call(null,seq__44211_44363__$1);
var col_44370 = cljs.core.nth.call(null,vec__44216_44369,(0),null);
var infos_44371 = cljs.core.nth.call(null,vec__44216_44369,(1),null);
encode_cols.call(null,infos_44371,source_idx_44340,line_44349,col_44370);

var G__44372 = cljs.core.next.call(null,seq__44211_44363__$1);
var G__44373 = null;
var G__44374 = (0);
var G__44375 = (0);
seq__44211_44351 = G__44372;
chunk__44212_44352 = G__44373;
count__44213_44353 = G__44374;
i__44214_44354 = G__44375;
continue;
}
} else {
}
}
break;
}

var G__44376 = seq__44206_44344;
var G__44377 = chunk__44207_44345;
var G__44378 = count__44208_44346;
var G__44379 = (i__44209_44347 + (1));
seq__44206_44344 = G__44376;
chunk__44207_44345 = G__44377;
count__44208_44346 = G__44378;
i__44209_44347 = G__44379;
continue;
} else {
var temp__4425__auto___44380__$1 = cljs.core.seq.call(null,seq__44206_44344);
if(temp__4425__auto___44380__$1){
var seq__44206_44381__$1 = temp__4425__auto___44380__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44206_44381__$1)){
var c__24968__auto___44382 = cljs.core.chunk_first.call(null,seq__44206_44381__$1);
var G__44383 = cljs.core.chunk_rest.call(null,seq__44206_44381__$1);
var G__44384 = c__24968__auto___44382;
var G__44385 = cljs.core.count.call(null,c__24968__auto___44382);
var G__44386 = (0);
seq__44206_44344 = G__44383;
chunk__44207_44345 = G__44384;
count__44208_44346 = G__44385;
i__44209_44347 = G__44386;
continue;
} else {
var vec__44217_44387 = cljs.core.first.call(null,seq__44206_44381__$1);
var line_44388 = cljs.core.nth.call(null,vec__44217_44387,(0),null);
var cols_44389 = cljs.core.nth.call(null,vec__44217_44387,(1),null);
var seq__44218_44390 = cljs.core.seq.call(null,cols_44389);
var chunk__44219_44391 = null;
var count__44220_44392 = (0);
var i__44221_44393 = (0);
while(true){
if((i__44221_44393 < count__44220_44392)){
var vec__44222_44394 = cljs.core._nth.call(null,chunk__44219_44391,i__44221_44393);
var col_44395 = cljs.core.nth.call(null,vec__44222_44394,(0),null);
var infos_44396 = cljs.core.nth.call(null,vec__44222_44394,(1),null);
encode_cols.call(null,infos_44396,source_idx_44340,line_44388,col_44395);

var G__44397 = seq__44218_44390;
var G__44398 = chunk__44219_44391;
var G__44399 = count__44220_44392;
var G__44400 = (i__44221_44393 + (1));
seq__44218_44390 = G__44397;
chunk__44219_44391 = G__44398;
count__44220_44392 = G__44399;
i__44221_44393 = G__44400;
continue;
} else {
var temp__4425__auto___44401__$2 = cljs.core.seq.call(null,seq__44218_44390);
if(temp__4425__auto___44401__$2){
var seq__44218_44402__$1 = temp__4425__auto___44401__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44218_44402__$1)){
var c__24968__auto___44403 = cljs.core.chunk_first.call(null,seq__44218_44402__$1);
var G__44404 = cljs.core.chunk_rest.call(null,seq__44218_44402__$1);
var G__44405 = c__24968__auto___44403;
var G__44406 = cljs.core.count.call(null,c__24968__auto___44403);
var G__44407 = (0);
seq__44218_44390 = G__44404;
chunk__44219_44391 = G__44405;
count__44220_44392 = G__44406;
i__44221_44393 = G__44407;
continue;
} else {
var vec__44223_44408 = cljs.core.first.call(null,seq__44218_44402__$1);
var col_44409 = cljs.core.nth.call(null,vec__44223_44408,(0),null);
var infos_44410 = cljs.core.nth.call(null,vec__44223_44408,(1),null);
encode_cols.call(null,infos_44410,source_idx_44340,line_44388,col_44409);

var G__44411 = cljs.core.next.call(null,seq__44218_44402__$1);
var G__44412 = null;
var G__44413 = (0);
var G__44414 = (0);
seq__44218_44390 = G__44411;
chunk__44219_44391 = G__44412;
count__44220_44392 = G__44413;
i__44221_44393 = G__44414;
continue;
}
} else {
}
}
break;
}

var G__44415 = cljs.core.next.call(null,seq__44206_44381__$1);
var G__44416 = null;
var G__44417 = (0);
var G__44418 = (0);
seq__44206_44344 = G__44415;
chunk__44207_44345 = G__44416;
count__44208_44346 = G__44417;
i__44209_44347 = G__44418;
continue;
}
} else {
}
}
break;
}

var G__44419 = cljs.core.next.call(null,seq__44180_44333__$1);
var G__44420 = null;
var G__44421 = (0);
var G__44422 = (0);
seq__44180_44244 = G__44419;
chunk__44181_44245 = G__44420;
count__44182_44246 = G__44421;
i__44183_44247 = G__44422;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__44224 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__44123_SHARP_){
return [cljs.core.str(p1__44123_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__44124_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__44124_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__44125_SHARP_){
return clojure.string.join.call(null,",",p1__44125_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__44224__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__44225 = G__44224;
goog.object.set(G__44225,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__44225;
})():G__44224);
return G__44224__$1;
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
var vec__44428 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__44428,(0),null);
var col_map = cljs.core.nth.call(null,vec__44428,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__44429 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__44429,(0),null);
var infos = cljs.core.nth.call(null,vec__44429,(1),null);
var G__44433 = cljs.core.next.call(null,col_map_seq);
var G__44434 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__44429,col,infos,vec__44428,line,col_map){
return (function (v,p__44430){
var map__44431 = p__44430;
var map__44431__$1 = ((((!((map__44431 == null)))?((((map__44431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44431):map__44431);
var gline = cljs.core.get.call(null,map__44431__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__44431__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__44429,col,infos,vec__44428,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__44433;
new_cols = G__44434;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__44435 = cljs.core.next.call(null,line_map_seq);
var G__44436 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__44435;
new_lines = G__44436;
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
var seq__44487_44537 = cljs.core.seq.call(null,reverse_map);
var chunk__44488_44538 = null;
var count__44489_44539 = (0);
var i__44490_44540 = (0);
while(true){
if((i__44490_44540 < count__44489_44539)){
var vec__44491_44541 = cljs.core._nth.call(null,chunk__44488_44538,i__44490_44540);
var line_44542 = cljs.core.nth.call(null,vec__44491_44541,(0),null);
var columns_44543 = cljs.core.nth.call(null,vec__44491_44541,(1),null);
var seq__44492_44544 = cljs.core.seq.call(null,columns_44543);
var chunk__44493_44545 = null;
var count__44494_44546 = (0);
var i__44495_44547 = (0);
while(true){
if((i__44495_44547 < count__44494_44546)){
var vec__44496_44548 = cljs.core._nth.call(null,chunk__44493_44545,i__44495_44547);
var column_44549 = cljs.core.nth.call(null,vec__44496_44548,(0),null);
var column_info_44550 = cljs.core.nth.call(null,vec__44496_44548,(1),null);
var seq__44497_44551 = cljs.core.seq.call(null,column_info_44550);
var chunk__44498_44552 = null;
var count__44499_44553 = (0);
var i__44500_44554 = (0);
while(true){
if((i__44500_44554 < count__44499_44553)){
var map__44501_44555 = cljs.core._nth.call(null,chunk__44498_44552,i__44500_44554);
var map__44501_44556__$1 = ((((!((map__44501_44555 == null)))?((((map__44501_44555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44501_44555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44501_44555):map__44501_44555);
var gline_44557 = cljs.core.get.call(null,map__44501_44556__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_44558 = cljs.core.get.call(null,map__44501_44556__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_44559 = cljs.core.get.call(null,map__44501_44556__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44557], null),cljs.core.fnil.call(null,((function (seq__44497_44551,chunk__44498_44552,count__44499_44553,i__44500_44554,seq__44492_44544,chunk__44493_44545,count__44494_44546,i__44495_44547,seq__44487_44537,chunk__44488_44538,count__44489_44539,i__44490_44540,map__44501_44555,map__44501_44556__$1,gline_44557,gcol_44558,name_44559,vec__44496_44548,column_44549,column_info_44550,vec__44491_44541,line_44542,columns_44543,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_44549], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_44542,new cljs.core.Keyword(null,"col","col",-1959363084),column_44549,new cljs.core.Keyword(null,"name","name",1843675177),name_44559], null));
});})(seq__44497_44551,chunk__44498_44552,count__44499_44553,i__44500_44554,seq__44492_44544,chunk__44493_44545,count__44494_44546,i__44495_44547,seq__44487_44537,chunk__44488_44538,count__44489_44539,i__44490_44540,map__44501_44555,map__44501_44556__$1,gline_44557,gcol_44558,name_44559,vec__44496_44548,column_44549,column_info_44550,vec__44491_44541,line_44542,columns_44543,inverted))
,cljs.core.sorted_map.call(null)));

var G__44560 = seq__44497_44551;
var G__44561 = chunk__44498_44552;
var G__44562 = count__44499_44553;
var G__44563 = (i__44500_44554 + (1));
seq__44497_44551 = G__44560;
chunk__44498_44552 = G__44561;
count__44499_44553 = G__44562;
i__44500_44554 = G__44563;
continue;
} else {
var temp__4425__auto___44564 = cljs.core.seq.call(null,seq__44497_44551);
if(temp__4425__auto___44564){
var seq__44497_44565__$1 = temp__4425__auto___44564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44497_44565__$1)){
var c__24968__auto___44566 = cljs.core.chunk_first.call(null,seq__44497_44565__$1);
var G__44567 = cljs.core.chunk_rest.call(null,seq__44497_44565__$1);
var G__44568 = c__24968__auto___44566;
var G__44569 = cljs.core.count.call(null,c__24968__auto___44566);
var G__44570 = (0);
seq__44497_44551 = G__44567;
chunk__44498_44552 = G__44568;
count__44499_44553 = G__44569;
i__44500_44554 = G__44570;
continue;
} else {
var map__44503_44571 = cljs.core.first.call(null,seq__44497_44565__$1);
var map__44503_44572__$1 = ((((!((map__44503_44571 == null)))?((((map__44503_44571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44503_44571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44503_44571):map__44503_44571);
var gline_44573 = cljs.core.get.call(null,map__44503_44572__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_44574 = cljs.core.get.call(null,map__44503_44572__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_44575 = cljs.core.get.call(null,map__44503_44572__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44573], null),cljs.core.fnil.call(null,((function (seq__44497_44551,chunk__44498_44552,count__44499_44553,i__44500_44554,seq__44492_44544,chunk__44493_44545,count__44494_44546,i__44495_44547,seq__44487_44537,chunk__44488_44538,count__44489_44539,i__44490_44540,map__44503_44571,map__44503_44572__$1,gline_44573,gcol_44574,name_44575,seq__44497_44565__$1,temp__4425__auto___44564,vec__44496_44548,column_44549,column_info_44550,vec__44491_44541,line_44542,columns_44543,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_44549], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_44542,new cljs.core.Keyword(null,"col","col",-1959363084),column_44549,new cljs.core.Keyword(null,"name","name",1843675177),name_44575], null));
});})(seq__44497_44551,chunk__44498_44552,count__44499_44553,i__44500_44554,seq__44492_44544,chunk__44493_44545,count__44494_44546,i__44495_44547,seq__44487_44537,chunk__44488_44538,count__44489_44539,i__44490_44540,map__44503_44571,map__44503_44572__$1,gline_44573,gcol_44574,name_44575,seq__44497_44565__$1,temp__4425__auto___44564,vec__44496_44548,column_44549,column_info_44550,vec__44491_44541,line_44542,columns_44543,inverted))
,cljs.core.sorted_map.call(null)));

var G__44576 = cljs.core.next.call(null,seq__44497_44565__$1);
var G__44577 = null;
var G__44578 = (0);
var G__44579 = (0);
seq__44497_44551 = G__44576;
chunk__44498_44552 = G__44577;
count__44499_44553 = G__44578;
i__44500_44554 = G__44579;
continue;
}
} else {
}
}
break;
}

var G__44580 = seq__44492_44544;
var G__44581 = chunk__44493_44545;
var G__44582 = count__44494_44546;
var G__44583 = (i__44495_44547 + (1));
seq__44492_44544 = G__44580;
chunk__44493_44545 = G__44581;
count__44494_44546 = G__44582;
i__44495_44547 = G__44583;
continue;
} else {
var temp__4425__auto___44584 = cljs.core.seq.call(null,seq__44492_44544);
if(temp__4425__auto___44584){
var seq__44492_44585__$1 = temp__4425__auto___44584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44492_44585__$1)){
var c__24968__auto___44586 = cljs.core.chunk_first.call(null,seq__44492_44585__$1);
var G__44587 = cljs.core.chunk_rest.call(null,seq__44492_44585__$1);
var G__44588 = c__24968__auto___44586;
var G__44589 = cljs.core.count.call(null,c__24968__auto___44586);
var G__44590 = (0);
seq__44492_44544 = G__44587;
chunk__44493_44545 = G__44588;
count__44494_44546 = G__44589;
i__44495_44547 = G__44590;
continue;
} else {
var vec__44505_44591 = cljs.core.first.call(null,seq__44492_44585__$1);
var column_44592 = cljs.core.nth.call(null,vec__44505_44591,(0),null);
var column_info_44593 = cljs.core.nth.call(null,vec__44505_44591,(1),null);
var seq__44506_44594 = cljs.core.seq.call(null,column_info_44593);
var chunk__44507_44595 = null;
var count__44508_44596 = (0);
var i__44509_44597 = (0);
while(true){
if((i__44509_44597 < count__44508_44596)){
var map__44510_44598 = cljs.core._nth.call(null,chunk__44507_44595,i__44509_44597);
var map__44510_44599__$1 = ((((!((map__44510_44598 == null)))?((((map__44510_44598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44510_44598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44510_44598):map__44510_44598);
var gline_44600 = cljs.core.get.call(null,map__44510_44599__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_44601 = cljs.core.get.call(null,map__44510_44599__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_44602 = cljs.core.get.call(null,map__44510_44599__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44600], null),cljs.core.fnil.call(null,((function (seq__44506_44594,chunk__44507_44595,count__44508_44596,i__44509_44597,seq__44492_44544,chunk__44493_44545,count__44494_44546,i__44495_44547,seq__44487_44537,chunk__44488_44538,count__44489_44539,i__44490_44540,map__44510_44598,map__44510_44599__$1,gline_44600,gcol_44601,name_44602,vec__44505_44591,column_44592,column_info_44593,seq__44492_44585__$1,temp__4425__auto___44584,vec__44491_44541,line_44542,columns_44543,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_44592], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_44542,new cljs.core.Keyword(null,"col","col",-1959363084),column_44592,new cljs.core.Keyword(null,"name","name",1843675177),name_44602], null));
});})(seq__44506_44594,chunk__44507_44595,count__44508_44596,i__44509_44597,seq__44492_44544,chunk__44493_44545,count__44494_44546,i__44495_44547,seq__44487_44537,chunk__44488_44538,count__44489_44539,i__44490_44540,map__44510_44598,map__44510_44599__$1,gline_44600,gcol_44601,name_44602,vec__44505_44591,column_44592,column_info_44593,seq__44492_44585__$1,temp__4425__auto___44584,vec__44491_44541,line_44542,columns_44543,inverted))
,cljs.core.sorted_map.call(null)));

var G__44603 = seq__44506_44594;
var G__44604 = chunk__44507_44595;
var G__44605 = count__44508_44596;
var G__44606 = (i__44509_44597 + (1));
seq__44506_44594 = G__44603;
chunk__44507_44595 = G__44604;
count__44508_44596 = G__44605;
i__44509_44597 = G__44606;
continue;
} else {
var temp__4425__auto___44607__$1 = cljs.core.seq.call(null,seq__44506_44594);
if(temp__4425__auto___44607__$1){
var seq__44506_44608__$1 = temp__4425__auto___44607__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44506_44608__$1)){
var c__24968__auto___44609 = cljs.core.chunk_first.call(null,seq__44506_44608__$1);
var G__44610 = cljs.core.chunk_rest.call(null,seq__44506_44608__$1);
var G__44611 = c__24968__auto___44609;
var G__44612 = cljs.core.count.call(null,c__24968__auto___44609);
var G__44613 = (0);
seq__44506_44594 = G__44610;
chunk__44507_44595 = G__44611;
count__44508_44596 = G__44612;
i__44509_44597 = G__44613;
continue;
} else {
var map__44512_44614 = cljs.core.first.call(null,seq__44506_44608__$1);
var map__44512_44615__$1 = ((((!((map__44512_44614 == null)))?((((map__44512_44614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44512_44614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44512_44614):map__44512_44614);
var gline_44616 = cljs.core.get.call(null,map__44512_44615__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_44617 = cljs.core.get.call(null,map__44512_44615__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_44618 = cljs.core.get.call(null,map__44512_44615__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44616], null),cljs.core.fnil.call(null,((function (seq__44506_44594,chunk__44507_44595,count__44508_44596,i__44509_44597,seq__44492_44544,chunk__44493_44545,count__44494_44546,i__44495_44547,seq__44487_44537,chunk__44488_44538,count__44489_44539,i__44490_44540,map__44512_44614,map__44512_44615__$1,gline_44616,gcol_44617,name_44618,seq__44506_44608__$1,temp__4425__auto___44607__$1,vec__44505_44591,column_44592,column_info_44593,seq__44492_44585__$1,temp__4425__auto___44584,vec__44491_44541,line_44542,columns_44543,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_44592], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_44542,new cljs.core.Keyword(null,"col","col",-1959363084),column_44592,new cljs.core.Keyword(null,"name","name",1843675177),name_44618], null));
});})(seq__44506_44594,chunk__44507_44595,count__44508_44596,i__44509_44597,seq__44492_44544,chunk__44493_44545,count__44494_44546,i__44495_44547,seq__44487_44537,chunk__44488_44538,count__44489_44539,i__44490_44540,map__44512_44614,map__44512_44615__$1,gline_44616,gcol_44617,name_44618,seq__44506_44608__$1,temp__4425__auto___44607__$1,vec__44505_44591,column_44592,column_info_44593,seq__44492_44585__$1,temp__4425__auto___44584,vec__44491_44541,line_44542,columns_44543,inverted))
,cljs.core.sorted_map.call(null)));

var G__44619 = cljs.core.next.call(null,seq__44506_44608__$1);
var G__44620 = null;
var G__44621 = (0);
var G__44622 = (0);
seq__44506_44594 = G__44619;
chunk__44507_44595 = G__44620;
count__44508_44596 = G__44621;
i__44509_44597 = G__44622;
continue;
}
} else {
}
}
break;
}

var G__44623 = cljs.core.next.call(null,seq__44492_44585__$1);
var G__44624 = null;
var G__44625 = (0);
var G__44626 = (0);
seq__44492_44544 = G__44623;
chunk__44493_44545 = G__44624;
count__44494_44546 = G__44625;
i__44495_44547 = G__44626;
continue;
}
} else {
}
}
break;
}

var G__44627 = seq__44487_44537;
var G__44628 = chunk__44488_44538;
var G__44629 = count__44489_44539;
var G__44630 = (i__44490_44540 + (1));
seq__44487_44537 = G__44627;
chunk__44488_44538 = G__44628;
count__44489_44539 = G__44629;
i__44490_44540 = G__44630;
continue;
} else {
var temp__4425__auto___44631 = cljs.core.seq.call(null,seq__44487_44537);
if(temp__4425__auto___44631){
var seq__44487_44632__$1 = temp__4425__auto___44631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44487_44632__$1)){
var c__24968__auto___44633 = cljs.core.chunk_first.call(null,seq__44487_44632__$1);
var G__44634 = cljs.core.chunk_rest.call(null,seq__44487_44632__$1);
var G__44635 = c__24968__auto___44633;
var G__44636 = cljs.core.count.call(null,c__24968__auto___44633);
var G__44637 = (0);
seq__44487_44537 = G__44634;
chunk__44488_44538 = G__44635;
count__44489_44539 = G__44636;
i__44490_44540 = G__44637;
continue;
} else {
var vec__44514_44638 = cljs.core.first.call(null,seq__44487_44632__$1);
var line_44639 = cljs.core.nth.call(null,vec__44514_44638,(0),null);
var columns_44640 = cljs.core.nth.call(null,vec__44514_44638,(1),null);
var seq__44515_44641 = cljs.core.seq.call(null,columns_44640);
var chunk__44516_44642 = null;
var count__44517_44643 = (0);
var i__44518_44644 = (0);
while(true){
if((i__44518_44644 < count__44517_44643)){
var vec__44519_44645 = cljs.core._nth.call(null,chunk__44516_44642,i__44518_44644);
var column_44646 = cljs.core.nth.call(null,vec__44519_44645,(0),null);
var column_info_44647 = cljs.core.nth.call(null,vec__44519_44645,(1),null);
var seq__44520_44648 = cljs.core.seq.call(null,column_info_44647);
var chunk__44521_44649 = null;
var count__44522_44650 = (0);
var i__44523_44651 = (0);
while(true){
if((i__44523_44651 < count__44522_44650)){
var map__44524_44652 = cljs.core._nth.call(null,chunk__44521_44649,i__44523_44651);
var map__44524_44653__$1 = ((((!((map__44524_44652 == null)))?((((map__44524_44652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44524_44652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44524_44652):map__44524_44652);
var gline_44654 = cljs.core.get.call(null,map__44524_44653__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_44655 = cljs.core.get.call(null,map__44524_44653__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_44656 = cljs.core.get.call(null,map__44524_44653__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44654], null),cljs.core.fnil.call(null,((function (seq__44520_44648,chunk__44521_44649,count__44522_44650,i__44523_44651,seq__44515_44641,chunk__44516_44642,count__44517_44643,i__44518_44644,seq__44487_44537,chunk__44488_44538,count__44489_44539,i__44490_44540,map__44524_44652,map__44524_44653__$1,gline_44654,gcol_44655,name_44656,vec__44519_44645,column_44646,column_info_44647,vec__44514_44638,line_44639,columns_44640,seq__44487_44632__$1,temp__4425__auto___44631,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_44646], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_44639,new cljs.core.Keyword(null,"col","col",-1959363084),column_44646,new cljs.core.Keyword(null,"name","name",1843675177),name_44656], null));
});})(seq__44520_44648,chunk__44521_44649,count__44522_44650,i__44523_44651,seq__44515_44641,chunk__44516_44642,count__44517_44643,i__44518_44644,seq__44487_44537,chunk__44488_44538,count__44489_44539,i__44490_44540,map__44524_44652,map__44524_44653__$1,gline_44654,gcol_44655,name_44656,vec__44519_44645,column_44646,column_info_44647,vec__44514_44638,line_44639,columns_44640,seq__44487_44632__$1,temp__4425__auto___44631,inverted))
,cljs.core.sorted_map.call(null)));

var G__44657 = seq__44520_44648;
var G__44658 = chunk__44521_44649;
var G__44659 = count__44522_44650;
var G__44660 = (i__44523_44651 + (1));
seq__44520_44648 = G__44657;
chunk__44521_44649 = G__44658;
count__44522_44650 = G__44659;
i__44523_44651 = G__44660;
continue;
} else {
var temp__4425__auto___44661__$1 = cljs.core.seq.call(null,seq__44520_44648);
if(temp__4425__auto___44661__$1){
var seq__44520_44662__$1 = temp__4425__auto___44661__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44520_44662__$1)){
var c__24968__auto___44663 = cljs.core.chunk_first.call(null,seq__44520_44662__$1);
var G__44664 = cljs.core.chunk_rest.call(null,seq__44520_44662__$1);
var G__44665 = c__24968__auto___44663;
var G__44666 = cljs.core.count.call(null,c__24968__auto___44663);
var G__44667 = (0);
seq__44520_44648 = G__44664;
chunk__44521_44649 = G__44665;
count__44522_44650 = G__44666;
i__44523_44651 = G__44667;
continue;
} else {
var map__44526_44668 = cljs.core.first.call(null,seq__44520_44662__$1);
var map__44526_44669__$1 = ((((!((map__44526_44668 == null)))?((((map__44526_44668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44526_44668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44526_44668):map__44526_44668);
var gline_44670 = cljs.core.get.call(null,map__44526_44669__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_44671 = cljs.core.get.call(null,map__44526_44669__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_44672 = cljs.core.get.call(null,map__44526_44669__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44670], null),cljs.core.fnil.call(null,((function (seq__44520_44648,chunk__44521_44649,count__44522_44650,i__44523_44651,seq__44515_44641,chunk__44516_44642,count__44517_44643,i__44518_44644,seq__44487_44537,chunk__44488_44538,count__44489_44539,i__44490_44540,map__44526_44668,map__44526_44669__$1,gline_44670,gcol_44671,name_44672,seq__44520_44662__$1,temp__4425__auto___44661__$1,vec__44519_44645,column_44646,column_info_44647,vec__44514_44638,line_44639,columns_44640,seq__44487_44632__$1,temp__4425__auto___44631,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_44646], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_44639,new cljs.core.Keyword(null,"col","col",-1959363084),column_44646,new cljs.core.Keyword(null,"name","name",1843675177),name_44672], null));
});})(seq__44520_44648,chunk__44521_44649,count__44522_44650,i__44523_44651,seq__44515_44641,chunk__44516_44642,count__44517_44643,i__44518_44644,seq__44487_44537,chunk__44488_44538,count__44489_44539,i__44490_44540,map__44526_44668,map__44526_44669__$1,gline_44670,gcol_44671,name_44672,seq__44520_44662__$1,temp__4425__auto___44661__$1,vec__44519_44645,column_44646,column_info_44647,vec__44514_44638,line_44639,columns_44640,seq__44487_44632__$1,temp__4425__auto___44631,inverted))
,cljs.core.sorted_map.call(null)));

var G__44673 = cljs.core.next.call(null,seq__44520_44662__$1);
var G__44674 = null;
var G__44675 = (0);
var G__44676 = (0);
seq__44520_44648 = G__44673;
chunk__44521_44649 = G__44674;
count__44522_44650 = G__44675;
i__44523_44651 = G__44676;
continue;
}
} else {
}
}
break;
}

var G__44677 = seq__44515_44641;
var G__44678 = chunk__44516_44642;
var G__44679 = count__44517_44643;
var G__44680 = (i__44518_44644 + (1));
seq__44515_44641 = G__44677;
chunk__44516_44642 = G__44678;
count__44517_44643 = G__44679;
i__44518_44644 = G__44680;
continue;
} else {
var temp__4425__auto___44681__$1 = cljs.core.seq.call(null,seq__44515_44641);
if(temp__4425__auto___44681__$1){
var seq__44515_44682__$1 = temp__4425__auto___44681__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44515_44682__$1)){
var c__24968__auto___44683 = cljs.core.chunk_first.call(null,seq__44515_44682__$1);
var G__44684 = cljs.core.chunk_rest.call(null,seq__44515_44682__$1);
var G__44685 = c__24968__auto___44683;
var G__44686 = cljs.core.count.call(null,c__24968__auto___44683);
var G__44687 = (0);
seq__44515_44641 = G__44684;
chunk__44516_44642 = G__44685;
count__44517_44643 = G__44686;
i__44518_44644 = G__44687;
continue;
} else {
var vec__44528_44688 = cljs.core.first.call(null,seq__44515_44682__$1);
var column_44689 = cljs.core.nth.call(null,vec__44528_44688,(0),null);
var column_info_44690 = cljs.core.nth.call(null,vec__44528_44688,(1),null);
var seq__44529_44691 = cljs.core.seq.call(null,column_info_44690);
var chunk__44530_44692 = null;
var count__44531_44693 = (0);
var i__44532_44694 = (0);
while(true){
if((i__44532_44694 < count__44531_44693)){
var map__44533_44695 = cljs.core._nth.call(null,chunk__44530_44692,i__44532_44694);
var map__44533_44696__$1 = ((((!((map__44533_44695 == null)))?((((map__44533_44695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44533_44695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44533_44695):map__44533_44695);
var gline_44697 = cljs.core.get.call(null,map__44533_44696__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_44698 = cljs.core.get.call(null,map__44533_44696__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_44699 = cljs.core.get.call(null,map__44533_44696__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44697], null),cljs.core.fnil.call(null,((function (seq__44529_44691,chunk__44530_44692,count__44531_44693,i__44532_44694,seq__44515_44641,chunk__44516_44642,count__44517_44643,i__44518_44644,seq__44487_44537,chunk__44488_44538,count__44489_44539,i__44490_44540,map__44533_44695,map__44533_44696__$1,gline_44697,gcol_44698,name_44699,vec__44528_44688,column_44689,column_info_44690,seq__44515_44682__$1,temp__4425__auto___44681__$1,vec__44514_44638,line_44639,columns_44640,seq__44487_44632__$1,temp__4425__auto___44631,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_44689], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_44639,new cljs.core.Keyword(null,"col","col",-1959363084),column_44689,new cljs.core.Keyword(null,"name","name",1843675177),name_44699], null));
});})(seq__44529_44691,chunk__44530_44692,count__44531_44693,i__44532_44694,seq__44515_44641,chunk__44516_44642,count__44517_44643,i__44518_44644,seq__44487_44537,chunk__44488_44538,count__44489_44539,i__44490_44540,map__44533_44695,map__44533_44696__$1,gline_44697,gcol_44698,name_44699,vec__44528_44688,column_44689,column_info_44690,seq__44515_44682__$1,temp__4425__auto___44681__$1,vec__44514_44638,line_44639,columns_44640,seq__44487_44632__$1,temp__4425__auto___44631,inverted))
,cljs.core.sorted_map.call(null)));

var G__44700 = seq__44529_44691;
var G__44701 = chunk__44530_44692;
var G__44702 = count__44531_44693;
var G__44703 = (i__44532_44694 + (1));
seq__44529_44691 = G__44700;
chunk__44530_44692 = G__44701;
count__44531_44693 = G__44702;
i__44532_44694 = G__44703;
continue;
} else {
var temp__4425__auto___44704__$2 = cljs.core.seq.call(null,seq__44529_44691);
if(temp__4425__auto___44704__$2){
var seq__44529_44705__$1 = temp__4425__auto___44704__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44529_44705__$1)){
var c__24968__auto___44706 = cljs.core.chunk_first.call(null,seq__44529_44705__$1);
var G__44707 = cljs.core.chunk_rest.call(null,seq__44529_44705__$1);
var G__44708 = c__24968__auto___44706;
var G__44709 = cljs.core.count.call(null,c__24968__auto___44706);
var G__44710 = (0);
seq__44529_44691 = G__44707;
chunk__44530_44692 = G__44708;
count__44531_44693 = G__44709;
i__44532_44694 = G__44710;
continue;
} else {
var map__44535_44711 = cljs.core.first.call(null,seq__44529_44705__$1);
var map__44535_44712__$1 = ((((!((map__44535_44711 == null)))?((((map__44535_44711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44535_44711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44535_44711):map__44535_44711);
var gline_44713 = cljs.core.get.call(null,map__44535_44712__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_44714 = cljs.core.get.call(null,map__44535_44712__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_44715 = cljs.core.get.call(null,map__44535_44712__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_44713], null),cljs.core.fnil.call(null,((function (seq__44529_44691,chunk__44530_44692,count__44531_44693,i__44532_44694,seq__44515_44641,chunk__44516_44642,count__44517_44643,i__44518_44644,seq__44487_44537,chunk__44488_44538,count__44489_44539,i__44490_44540,map__44535_44711,map__44535_44712__$1,gline_44713,gcol_44714,name_44715,seq__44529_44705__$1,temp__4425__auto___44704__$2,vec__44528_44688,column_44689,column_info_44690,seq__44515_44682__$1,temp__4425__auto___44681__$1,vec__44514_44638,line_44639,columns_44640,seq__44487_44632__$1,temp__4425__auto___44631,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_44689], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_44639,new cljs.core.Keyword(null,"col","col",-1959363084),column_44689,new cljs.core.Keyword(null,"name","name",1843675177),name_44715], null));
});})(seq__44529_44691,chunk__44530_44692,count__44531_44693,i__44532_44694,seq__44515_44641,chunk__44516_44642,count__44517_44643,i__44518_44644,seq__44487_44537,chunk__44488_44538,count__44489_44539,i__44490_44540,map__44535_44711,map__44535_44712__$1,gline_44713,gcol_44714,name_44715,seq__44529_44705__$1,temp__4425__auto___44704__$2,vec__44528_44688,column_44689,column_info_44690,seq__44515_44682__$1,temp__4425__auto___44681__$1,vec__44514_44638,line_44639,columns_44640,seq__44487_44632__$1,temp__4425__auto___44631,inverted))
,cljs.core.sorted_map.call(null)));

var G__44716 = cljs.core.next.call(null,seq__44529_44705__$1);
var G__44717 = null;
var G__44718 = (0);
var G__44719 = (0);
seq__44529_44691 = G__44716;
chunk__44530_44692 = G__44717;
count__44531_44693 = G__44718;
i__44532_44694 = G__44719;
continue;
}
} else {
}
}
break;
}

var G__44720 = cljs.core.next.call(null,seq__44515_44682__$1);
var G__44721 = null;
var G__44722 = (0);
var G__44723 = (0);
seq__44515_44641 = G__44720;
chunk__44516_44642 = G__44721;
count__44517_44643 = G__44722;
i__44518_44644 = G__44723;
continue;
}
} else {
}
}
break;
}

var G__44724 = cljs.core.next.call(null,seq__44487_44632__$1);
var G__44725 = null;
var G__44726 = (0);
var G__44727 = (0);
seq__44487_44537 = G__44724;
chunk__44488_44538 = G__44725;
count__44489_44539 = G__44726;
i__44490_44540 = G__44727;
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