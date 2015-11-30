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
return cljs.core.reduce.call(null,(function (m,p__652127){
var vec__652128 = p__652127;
var i = cljs.core.nth.call(null,vec__652128,(0),null);
var v = cljs.core.nth.call(null,vec__652128,(1),null);
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
var vec__652130 = seg;
var gcol = cljs.core.nth.call(null,vec__652130,(0),null);
var source = cljs.core.nth.call(null,vec__652130,(1),null);
var line = cljs.core.nth.call(null,vec__652130,(2),null);
var col = cljs.core.nth.call(null,vec__652130,(3),null);
var name = cljs.core.nth.call(null,vec__652130,(4),null);
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
var vec__652133 = seg;
var gcol = cljs.core.nth.call(null,vec__652133,(0),null);
var source = cljs.core.nth.call(null,vec__652133,(1),null);
var line = cljs.core.nth.call(null,vec__652133,(2),null);
var col = cljs.core.nth.call(null,vec__652133,(3),null);
var name = cljs.core.nth.call(null,vec__652133,(4),null);
var vec__652134 = relseg;
var rgcol = cljs.core.nth.call(null,vec__652134,(0),null);
var rsource = cljs.core.nth.call(null,vec__652134,(1),null);
var rline = cljs.core.nth.call(null,vec__652134,(2),null);
var rcol = cljs.core.nth.call(null,vec__652134,(3),null);
var rname = cljs.core.nth.call(null,vec__652134,(4),null);
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
var map__652137 = segmap;
var map__652137__$1 = ((((!((map__652137 == null)))?((((map__652137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652137):map__652137);
var gcol = cljs.core.get.call(null,map__652137__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__652137__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__652137__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__652137__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__652137__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__652137,map__652137__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__652137,map__652137__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__652137,map__652137__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__652137,map__652137__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__652137,map__652137__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__652137,map__652137__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args652139 = [];
var len__25269__auto___652143 = arguments.length;
var i__25270__auto___652144 = (0);
while(true){
if((i__25270__auto___652144 < len__25269__auto___652143)){
args652139.push((arguments[i__25270__auto___652144]));

var G__652145 = (i__25270__auto___652144 + (1));
i__25270__auto___652144 = G__652145;
continue;
} else {
}
break;
}

var G__652141 = args652139.length;
switch (G__652141) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args652139.length)].join('')));

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
var vec__652142 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__652147 = cljs.core.next.call(null,segs__$1);
var G__652148 = nrelseg;
var G__652149 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__652147;
relseg__$1 = G__652148;
result__$1 = G__652149;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__652142,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__652142,(1),null);
var G__652150 = (gline + (1));
var G__652151 = cljs.core.next.call(null,lines__$1);
var G__652152 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__652153 = result__$1;
gline = G__652150;
lines__$1 = G__652151;
relseg = G__652152;
result = G__652153;
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
var map__652157 = segmap;
var map__652157__$1 = ((((!((map__652157 == null)))?((((map__652157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652157):map__652157);
var gcol = cljs.core.get.call(null,map__652157__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__652157__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__652157__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__652157__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__652157__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__652157,map__652157__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__652157,map__652157__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__652154_SHARP_){
return cljs.core.conj.call(null,p1__652154_SHARP_,d__$1);
});})(map__652157,map__652157__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__652157,map__652157__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args652159 = [];
var len__25269__auto___652163 = arguments.length;
var i__25270__auto___652164 = (0);
while(true){
if((i__25270__auto___652164 < len__25269__auto___652163)){
args652159.push((arguments[i__25270__auto___652164]));

var G__652165 = (i__25270__auto___652164 + (1));
i__25270__auto___652164 = G__652165;
continue;
} else {
}
break;
}

var G__652161 = args652159.length;
switch (G__652161) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args652159.length)].join('')));

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
var vec__652162 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__652167 = cljs.core.next.call(null,segs__$1);
var G__652168 = nrelseg;
var G__652169 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__652167;
relseg__$1 = G__652168;
result__$1 = G__652169;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__652162,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__652162,(1),null);
var G__652170 = (gline + (1));
var G__652171 = cljs.core.next.call(null,lines__$1);
var G__652172 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__652173 = result__$1;
gline = G__652170;
lines__$1 = G__652171;
relseg = G__652172;
result = G__652173;
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
return (function (p__652180){
var vec__652181 = p__652180;
var _ = cljs.core.nth.call(null,vec__652181,(0),null);
var source = cljs.core.nth.call(null,vec__652181,(1),null);
var line = cljs.core.nth.call(null,vec__652181,(2),null);
var col = cljs.core.nth.call(null,vec__652181,(3),null);
var name = cljs.core.nth.call(null,vec__652181,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__652182){
var vec__652183 = p__652182;
var gcol = cljs.core.nth.call(null,vec__652183,(0),null);
var sidx = cljs.core.nth.call(null,vec__652183,(1),null);
var line = cljs.core.nth.call(null,vec__652183,(2),null);
var col = cljs.core.nth.call(null,vec__652183,(3),null);
var name = cljs.core.nth.call(null,vec__652183,(4),null);
var seg = vec__652183;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__652183,gcol,sidx,line,col,name,seg,relseg){
return (function (p__652184){
var vec__652185 = p__652184;
var _ = cljs.core.nth.call(null,vec__652185,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__652185,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__652185,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__652185,(3),null);
var lname = cljs.core.nth.call(null,vec__652185,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__24211__auto__ = name;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__652183,gcol,sidx,line,col,name,seg,relseg))
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
var seq__652239 = cljs.core.seq.call(null,infos);
var chunk__652240 = null;
var count__652241 = (0);
var i__652242 = (0);
while(true){
if((i__652242 < count__652241)){
var info = cljs.core._nth.call(null,chunk__652240,i__652242);
var segv_652289 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_652290 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_652291 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_652290 > (lc_652291 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__652239,chunk__652240,count__652241,i__652242,segv_652289,gline_652290,lc_652291,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_652290 - (lc_652291 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_652289], null));
});})(seq__652239,chunk__652240,count__652241,i__652242,segv_652289,gline_652290,lc_652291,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__652239,chunk__652240,count__652241,i__652242,segv_652289,gline_652290,lc_652291,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_652290], null),cljs.core.conj,segv_652289);
});})(seq__652239,chunk__652240,count__652241,i__652242,segv_652289,gline_652290,lc_652291,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__652292 = seq__652239;
var G__652293 = chunk__652240;
var G__652294 = count__652241;
var G__652295 = (i__652242 + (1));
seq__652239 = G__652292;
chunk__652240 = G__652293;
count__652241 = G__652294;
i__652242 = G__652295;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__652239);
if(temp__4425__auto__){
var seq__652239__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652239__$1)){
var c__25014__auto__ = cljs.core.chunk_first.call(null,seq__652239__$1);
var G__652296 = cljs.core.chunk_rest.call(null,seq__652239__$1);
var G__652297 = c__25014__auto__;
var G__652298 = cljs.core.count.call(null,c__25014__auto__);
var G__652299 = (0);
seq__652239 = G__652296;
chunk__652240 = G__652297;
count__652241 = G__652298;
i__652242 = G__652299;
continue;
} else {
var info = cljs.core.first.call(null,seq__652239__$1);
var segv_652300 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_652301 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_652302 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_652301 > (lc_652302 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__652239,chunk__652240,count__652241,i__652242,segv_652300,gline_652301,lc_652302,info,seq__652239__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_652301 - (lc_652302 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_652300], null));
});})(seq__652239,chunk__652240,count__652241,i__652242,segv_652300,gline_652301,lc_652302,info,seq__652239__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__652239,chunk__652240,count__652241,i__652242,segv_652300,gline_652301,lc_652302,info,seq__652239__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_652301], null),cljs.core.conj,segv_652300);
});})(seq__652239,chunk__652240,count__652241,i__652242,segv_652300,gline_652301,lc_652302,info,seq__652239__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__652303 = cljs.core.next.call(null,seq__652239__$1);
var G__652304 = null;
var G__652305 = (0);
var G__652306 = (0);
seq__652239 = G__652303;
chunk__652240 = G__652304;
count__652241 = G__652305;
i__652242 = G__652306;
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
var seq__652243_652307 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__652244_652308 = null;
var count__652245_652309 = (0);
var i__652246_652310 = (0);
while(true){
if((i__652246_652310 < count__652245_652309)){
var vec__652247_652311 = cljs.core._nth.call(null,chunk__652244_652308,i__652246_652310);
var source_idx_652312 = cljs.core.nth.call(null,vec__652247_652311,(0),null);
var vec__652248_652313 = cljs.core.nth.call(null,vec__652247_652311,(1),null);
var __652314 = cljs.core.nth.call(null,vec__652248_652313,(0),null);
var lines_652315__$1 = cljs.core.nth.call(null,vec__652248_652313,(1),null);
var seq__652249_652316 = cljs.core.seq.call(null,lines_652315__$1);
var chunk__652250_652317 = null;
var count__652251_652318 = (0);
var i__652252_652319 = (0);
while(true){
if((i__652252_652319 < count__652251_652318)){
var vec__652253_652320 = cljs.core._nth.call(null,chunk__652250_652317,i__652252_652319);
var line_652321 = cljs.core.nth.call(null,vec__652253_652320,(0),null);
var cols_652322 = cljs.core.nth.call(null,vec__652253_652320,(1),null);
var seq__652254_652323 = cljs.core.seq.call(null,cols_652322);
var chunk__652255_652324 = null;
var count__652256_652325 = (0);
var i__652257_652326 = (0);
while(true){
if((i__652257_652326 < count__652256_652325)){
var vec__652258_652327 = cljs.core._nth.call(null,chunk__652255_652324,i__652257_652326);
var col_652328 = cljs.core.nth.call(null,vec__652258_652327,(0),null);
var infos_652329 = cljs.core.nth.call(null,vec__652258_652327,(1),null);
encode_cols.call(null,infos_652329,source_idx_652312,line_652321,col_652328);

var G__652330 = seq__652254_652323;
var G__652331 = chunk__652255_652324;
var G__652332 = count__652256_652325;
var G__652333 = (i__652257_652326 + (1));
seq__652254_652323 = G__652330;
chunk__652255_652324 = G__652331;
count__652256_652325 = G__652332;
i__652257_652326 = G__652333;
continue;
} else {
var temp__4425__auto___652334 = cljs.core.seq.call(null,seq__652254_652323);
if(temp__4425__auto___652334){
var seq__652254_652335__$1 = temp__4425__auto___652334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652254_652335__$1)){
var c__25014__auto___652336 = cljs.core.chunk_first.call(null,seq__652254_652335__$1);
var G__652337 = cljs.core.chunk_rest.call(null,seq__652254_652335__$1);
var G__652338 = c__25014__auto___652336;
var G__652339 = cljs.core.count.call(null,c__25014__auto___652336);
var G__652340 = (0);
seq__652254_652323 = G__652337;
chunk__652255_652324 = G__652338;
count__652256_652325 = G__652339;
i__652257_652326 = G__652340;
continue;
} else {
var vec__652259_652341 = cljs.core.first.call(null,seq__652254_652335__$1);
var col_652342 = cljs.core.nth.call(null,vec__652259_652341,(0),null);
var infos_652343 = cljs.core.nth.call(null,vec__652259_652341,(1),null);
encode_cols.call(null,infos_652343,source_idx_652312,line_652321,col_652342);

var G__652344 = cljs.core.next.call(null,seq__652254_652335__$1);
var G__652345 = null;
var G__652346 = (0);
var G__652347 = (0);
seq__652254_652323 = G__652344;
chunk__652255_652324 = G__652345;
count__652256_652325 = G__652346;
i__652257_652326 = G__652347;
continue;
}
} else {
}
}
break;
}

var G__652348 = seq__652249_652316;
var G__652349 = chunk__652250_652317;
var G__652350 = count__652251_652318;
var G__652351 = (i__652252_652319 + (1));
seq__652249_652316 = G__652348;
chunk__652250_652317 = G__652349;
count__652251_652318 = G__652350;
i__652252_652319 = G__652351;
continue;
} else {
var temp__4425__auto___652352 = cljs.core.seq.call(null,seq__652249_652316);
if(temp__4425__auto___652352){
var seq__652249_652353__$1 = temp__4425__auto___652352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652249_652353__$1)){
var c__25014__auto___652354 = cljs.core.chunk_first.call(null,seq__652249_652353__$1);
var G__652355 = cljs.core.chunk_rest.call(null,seq__652249_652353__$1);
var G__652356 = c__25014__auto___652354;
var G__652357 = cljs.core.count.call(null,c__25014__auto___652354);
var G__652358 = (0);
seq__652249_652316 = G__652355;
chunk__652250_652317 = G__652356;
count__652251_652318 = G__652357;
i__652252_652319 = G__652358;
continue;
} else {
var vec__652260_652359 = cljs.core.first.call(null,seq__652249_652353__$1);
var line_652360 = cljs.core.nth.call(null,vec__652260_652359,(0),null);
var cols_652361 = cljs.core.nth.call(null,vec__652260_652359,(1),null);
var seq__652261_652362 = cljs.core.seq.call(null,cols_652361);
var chunk__652262_652363 = null;
var count__652263_652364 = (0);
var i__652264_652365 = (0);
while(true){
if((i__652264_652365 < count__652263_652364)){
var vec__652265_652366 = cljs.core._nth.call(null,chunk__652262_652363,i__652264_652365);
var col_652367 = cljs.core.nth.call(null,vec__652265_652366,(0),null);
var infos_652368 = cljs.core.nth.call(null,vec__652265_652366,(1),null);
encode_cols.call(null,infos_652368,source_idx_652312,line_652360,col_652367);

var G__652369 = seq__652261_652362;
var G__652370 = chunk__652262_652363;
var G__652371 = count__652263_652364;
var G__652372 = (i__652264_652365 + (1));
seq__652261_652362 = G__652369;
chunk__652262_652363 = G__652370;
count__652263_652364 = G__652371;
i__652264_652365 = G__652372;
continue;
} else {
var temp__4425__auto___652373__$1 = cljs.core.seq.call(null,seq__652261_652362);
if(temp__4425__auto___652373__$1){
var seq__652261_652374__$1 = temp__4425__auto___652373__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652261_652374__$1)){
var c__25014__auto___652375 = cljs.core.chunk_first.call(null,seq__652261_652374__$1);
var G__652376 = cljs.core.chunk_rest.call(null,seq__652261_652374__$1);
var G__652377 = c__25014__auto___652375;
var G__652378 = cljs.core.count.call(null,c__25014__auto___652375);
var G__652379 = (0);
seq__652261_652362 = G__652376;
chunk__652262_652363 = G__652377;
count__652263_652364 = G__652378;
i__652264_652365 = G__652379;
continue;
} else {
var vec__652266_652380 = cljs.core.first.call(null,seq__652261_652374__$1);
var col_652381 = cljs.core.nth.call(null,vec__652266_652380,(0),null);
var infos_652382 = cljs.core.nth.call(null,vec__652266_652380,(1),null);
encode_cols.call(null,infos_652382,source_idx_652312,line_652360,col_652381);

var G__652383 = cljs.core.next.call(null,seq__652261_652374__$1);
var G__652384 = null;
var G__652385 = (0);
var G__652386 = (0);
seq__652261_652362 = G__652383;
chunk__652262_652363 = G__652384;
count__652263_652364 = G__652385;
i__652264_652365 = G__652386;
continue;
}
} else {
}
}
break;
}

var G__652387 = cljs.core.next.call(null,seq__652249_652353__$1);
var G__652388 = null;
var G__652389 = (0);
var G__652390 = (0);
seq__652249_652316 = G__652387;
chunk__652250_652317 = G__652388;
count__652251_652318 = G__652389;
i__652252_652319 = G__652390;
continue;
}
} else {
}
}
break;
}

var G__652391 = seq__652243_652307;
var G__652392 = chunk__652244_652308;
var G__652393 = count__652245_652309;
var G__652394 = (i__652246_652310 + (1));
seq__652243_652307 = G__652391;
chunk__652244_652308 = G__652392;
count__652245_652309 = G__652393;
i__652246_652310 = G__652394;
continue;
} else {
var temp__4425__auto___652395 = cljs.core.seq.call(null,seq__652243_652307);
if(temp__4425__auto___652395){
var seq__652243_652396__$1 = temp__4425__auto___652395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652243_652396__$1)){
var c__25014__auto___652397 = cljs.core.chunk_first.call(null,seq__652243_652396__$1);
var G__652398 = cljs.core.chunk_rest.call(null,seq__652243_652396__$1);
var G__652399 = c__25014__auto___652397;
var G__652400 = cljs.core.count.call(null,c__25014__auto___652397);
var G__652401 = (0);
seq__652243_652307 = G__652398;
chunk__652244_652308 = G__652399;
count__652245_652309 = G__652400;
i__652246_652310 = G__652401;
continue;
} else {
var vec__652267_652402 = cljs.core.first.call(null,seq__652243_652396__$1);
var source_idx_652403 = cljs.core.nth.call(null,vec__652267_652402,(0),null);
var vec__652268_652404 = cljs.core.nth.call(null,vec__652267_652402,(1),null);
var __652405 = cljs.core.nth.call(null,vec__652268_652404,(0),null);
var lines_652406__$1 = cljs.core.nth.call(null,vec__652268_652404,(1),null);
var seq__652269_652407 = cljs.core.seq.call(null,lines_652406__$1);
var chunk__652270_652408 = null;
var count__652271_652409 = (0);
var i__652272_652410 = (0);
while(true){
if((i__652272_652410 < count__652271_652409)){
var vec__652273_652411 = cljs.core._nth.call(null,chunk__652270_652408,i__652272_652410);
var line_652412 = cljs.core.nth.call(null,vec__652273_652411,(0),null);
var cols_652413 = cljs.core.nth.call(null,vec__652273_652411,(1),null);
var seq__652274_652414 = cljs.core.seq.call(null,cols_652413);
var chunk__652275_652415 = null;
var count__652276_652416 = (0);
var i__652277_652417 = (0);
while(true){
if((i__652277_652417 < count__652276_652416)){
var vec__652278_652418 = cljs.core._nth.call(null,chunk__652275_652415,i__652277_652417);
var col_652419 = cljs.core.nth.call(null,vec__652278_652418,(0),null);
var infos_652420 = cljs.core.nth.call(null,vec__652278_652418,(1),null);
encode_cols.call(null,infos_652420,source_idx_652403,line_652412,col_652419);

var G__652421 = seq__652274_652414;
var G__652422 = chunk__652275_652415;
var G__652423 = count__652276_652416;
var G__652424 = (i__652277_652417 + (1));
seq__652274_652414 = G__652421;
chunk__652275_652415 = G__652422;
count__652276_652416 = G__652423;
i__652277_652417 = G__652424;
continue;
} else {
var temp__4425__auto___652425__$1 = cljs.core.seq.call(null,seq__652274_652414);
if(temp__4425__auto___652425__$1){
var seq__652274_652426__$1 = temp__4425__auto___652425__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652274_652426__$1)){
var c__25014__auto___652427 = cljs.core.chunk_first.call(null,seq__652274_652426__$1);
var G__652428 = cljs.core.chunk_rest.call(null,seq__652274_652426__$1);
var G__652429 = c__25014__auto___652427;
var G__652430 = cljs.core.count.call(null,c__25014__auto___652427);
var G__652431 = (0);
seq__652274_652414 = G__652428;
chunk__652275_652415 = G__652429;
count__652276_652416 = G__652430;
i__652277_652417 = G__652431;
continue;
} else {
var vec__652279_652432 = cljs.core.first.call(null,seq__652274_652426__$1);
var col_652433 = cljs.core.nth.call(null,vec__652279_652432,(0),null);
var infos_652434 = cljs.core.nth.call(null,vec__652279_652432,(1),null);
encode_cols.call(null,infos_652434,source_idx_652403,line_652412,col_652433);

var G__652435 = cljs.core.next.call(null,seq__652274_652426__$1);
var G__652436 = null;
var G__652437 = (0);
var G__652438 = (0);
seq__652274_652414 = G__652435;
chunk__652275_652415 = G__652436;
count__652276_652416 = G__652437;
i__652277_652417 = G__652438;
continue;
}
} else {
}
}
break;
}

var G__652439 = seq__652269_652407;
var G__652440 = chunk__652270_652408;
var G__652441 = count__652271_652409;
var G__652442 = (i__652272_652410 + (1));
seq__652269_652407 = G__652439;
chunk__652270_652408 = G__652440;
count__652271_652409 = G__652441;
i__652272_652410 = G__652442;
continue;
} else {
var temp__4425__auto___652443__$1 = cljs.core.seq.call(null,seq__652269_652407);
if(temp__4425__auto___652443__$1){
var seq__652269_652444__$1 = temp__4425__auto___652443__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652269_652444__$1)){
var c__25014__auto___652445 = cljs.core.chunk_first.call(null,seq__652269_652444__$1);
var G__652446 = cljs.core.chunk_rest.call(null,seq__652269_652444__$1);
var G__652447 = c__25014__auto___652445;
var G__652448 = cljs.core.count.call(null,c__25014__auto___652445);
var G__652449 = (0);
seq__652269_652407 = G__652446;
chunk__652270_652408 = G__652447;
count__652271_652409 = G__652448;
i__652272_652410 = G__652449;
continue;
} else {
var vec__652280_652450 = cljs.core.first.call(null,seq__652269_652444__$1);
var line_652451 = cljs.core.nth.call(null,vec__652280_652450,(0),null);
var cols_652452 = cljs.core.nth.call(null,vec__652280_652450,(1),null);
var seq__652281_652453 = cljs.core.seq.call(null,cols_652452);
var chunk__652282_652454 = null;
var count__652283_652455 = (0);
var i__652284_652456 = (0);
while(true){
if((i__652284_652456 < count__652283_652455)){
var vec__652285_652457 = cljs.core._nth.call(null,chunk__652282_652454,i__652284_652456);
var col_652458 = cljs.core.nth.call(null,vec__652285_652457,(0),null);
var infos_652459 = cljs.core.nth.call(null,vec__652285_652457,(1),null);
encode_cols.call(null,infos_652459,source_idx_652403,line_652451,col_652458);

var G__652460 = seq__652281_652453;
var G__652461 = chunk__652282_652454;
var G__652462 = count__652283_652455;
var G__652463 = (i__652284_652456 + (1));
seq__652281_652453 = G__652460;
chunk__652282_652454 = G__652461;
count__652283_652455 = G__652462;
i__652284_652456 = G__652463;
continue;
} else {
var temp__4425__auto___652464__$2 = cljs.core.seq.call(null,seq__652281_652453);
if(temp__4425__auto___652464__$2){
var seq__652281_652465__$1 = temp__4425__auto___652464__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652281_652465__$1)){
var c__25014__auto___652466 = cljs.core.chunk_first.call(null,seq__652281_652465__$1);
var G__652467 = cljs.core.chunk_rest.call(null,seq__652281_652465__$1);
var G__652468 = c__25014__auto___652466;
var G__652469 = cljs.core.count.call(null,c__25014__auto___652466);
var G__652470 = (0);
seq__652281_652453 = G__652467;
chunk__652282_652454 = G__652468;
count__652283_652455 = G__652469;
i__652284_652456 = G__652470;
continue;
} else {
var vec__652286_652471 = cljs.core.first.call(null,seq__652281_652465__$1);
var col_652472 = cljs.core.nth.call(null,vec__652286_652471,(0),null);
var infos_652473 = cljs.core.nth.call(null,vec__652286_652471,(1),null);
encode_cols.call(null,infos_652473,source_idx_652403,line_652451,col_652472);

var G__652474 = cljs.core.next.call(null,seq__652281_652465__$1);
var G__652475 = null;
var G__652476 = (0);
var G__652477 = (0);
seq__652281_652453 = G__652474;
chunk__652282_652454 = G__652475;
count__652283_652455 = G__652476;
i__652284_652456 = G__652477;
continue;
}
} else {
}
}
break;
}

var G__652478 = cljs.core.next.call(null,seq__652269_652444__$1);
var G__652479 = null;
var G__652480 = (0);
var G__652481 = (0);
seq__652269_652407 = G__652478;
chunk__652270_652408 = G__652479;
count__652271_652409 = G__652480;
i__652272_652410 = G__652481;
continue;
}
} else {
}
}
break;
}

var G__652482 = cljs.core.next.call(null,seq__652243_652396__$1);
var G__652483 = null;
var G__652484 = (0);
var G__652485 = (0);
seq__652243_652307 = G__652482;
chunk__652244_652308 = G__652483;
count__652245_652309 = G__652484;
i__652246_652310 = G__652485;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__652287 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__652186_SHARP_){
return [cljs.core.str(p1__652186_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__652187_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__652187_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__652188_SHARP_){
return clojure.string.join.call(null,",",p1__652188_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__652287__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__652288 = G__652287;
goog.object.set(G__652288,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__652288;
})():G__652287);
return G__652287__$1;
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
var vec__652491 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__652491,(0),null);
var col_map = cljs.core.nth.call(null,vec__652491,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__652492 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__652492,(0),null);
var infos = cljs.core.nth.call(null,vec__652492,(1),null);
var G__652496 = cljs.core.next.call(null,col_map_seq);
var G__652497 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__652492,col,infos,vec__652491,line,col_map){
return (function (v,p__652493){
var map__652494 = p__652493;
var map__652494__$1 = ((((!((map__652494 == null)))?((((map__652494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652494):map__652494);
var gline = cljs.core.get.call(null,map__652494__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__652494__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__652492,col,infos,vec__652491,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__652496;
new_cols = G__652497;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__652498 = cljs.core.next.call(null,line_map_seq);
var G__652499 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__652498;
new_lines = G__652499;
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
var seq__652550_652600 = cljs.core.seq.call(null,reverse_map);
var chunk__652551_652601 = null;
var count__652552_652602 = (0);
var i__652553_652603 = (0);
while(true){
if((i__652553_652603 < count__652552_652602)){
var vec__652554_652604 = cljs.core._nth.call(null,chunk__652551_652601,i__652553_652603);
var line_652605 = cljs.core.nth.call(null,vec__652554_652604,(0),null);
var columns_652606 = cljs.core.nth.call(null,vec__652554_652604,(1),null);
var seq__652555_652607 = cljs.core.seq.call(null,columns_652606);
var chunk__652556_652608 = null;
var count__652557_652609 = (0);
var i__652558_652610 = (0);
while(true){
if((i__652558_652610 < count__652557_652609)){
var vec__652559_652611 = cljs.core._nth.call(null,chunk__652556_652608,i__652558_652610);
var column_652612 = cljs.core.nth.call(null,vec__652559_652611,(0),null);
var column_info_652613 = cljs.core.nth.call(null,vec__652559_652611,(1),null);
var seq__652560_652614 = cljs.core.seq.call(null,column_info_652613);
var chunk__652561_652615 = null;
var count__652562_652616 = (0);
var i__652563_652617 = (0);
while(true){
if((i__652563_652617 < count__652562_652616)){
var map__652564_652618 = cljs.core._nth.call(null,chunk__652561_652615,i__652563_652617);
var map__652564_652619__$1 = ((((!((map__652564_652618 == null)))?((((map__652564_652618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652564_652618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652564_652618):map__652564_652618);
var gline_652620 = cljs.core.get.call(null,map__652564_652619__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_652621 = cljs.core.get.call(null,map__652564_652619__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_652622 = cljs.core.get.call(null,map__652564_652619__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_652620], null),cljs.core.fnil.call(null,((function (seq__652560_652614,chunk__652561_652615,count__652562_652616,i__652563_652617,seq__652555_652607,chunk__652556_652608,count__652557_652609,i__652558_652610,seq__652550_652600,chunk__652551_652601,count__652552_652602,i__652553_652603,map__652564_652618,map__652564_652619__$1,gline_652620,gcol_652621,name_652622,vec__652559_652611,column_652612,column_info_652613,vec__652554_652604,line_652605,columns_652606,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_652612], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_652605,new cljs.core.Keyword(null,"col","col",-1959363084),column_652612,new cljs.core.Keyword(null,"name","name",1843675177),name_652622], null));
});})(seq__652560_652614,chunk__652561_652615,count__652562_652616,i__652563_652617,seq__652555_652607,chunk__652556_652608,count__652557_652609,i__652558_652610,seq__652550_652600,chunk__652551_652601,count__652552_652602,i__652553_652603,map__652564_652618,map__652564_652619__$1,gline_652620,gcol_652621,name_652622,vec__652559_652611,column_652612,column_info_652613,vec__652554_652604,line_652605,columns_652606,inverted))
,cljs.core.sorted_map.call(null)));

var G__652623 = seq__652560_652614;
var G__652624 = chunk__652561_652615;
var G__652625 = count__652562_652616;
var G__652626 = (i__652563_652617 + (1));
seq__652560_652614 = G__652623;
chunk__652561_652615 = G__652624;
count__652562_652616 = G__652625;
i__652563_652617 = G__652626;
continue;
} else {
var temp__4425__auto___652627 = cljs.core.seq.call(null,seq__652560_652614);
if(temp__4425__auto___652627){
var seq__652560_652628__$1 = temp__4425__auto___652627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652560_652628__$1)){
var c__25014__auto___652629 = cljs.core.chunk_first.call(null,seq__652560_652628__$1);
var G__652630 = cljs.core.chunk_rest.call(null,seq__652560_652628__$1);
var G__652631 = c__25014__auto___652629;
var G__652632 = cljs.core.count.call(null,c__25014__auto___652629);
var G__652633 = (0);
seq__652560_652614 = G__652630;
chunk__652561_652615 = G__652631;
count__652562_652616 = G__652632;
i__652563_652617 = G__652633;
continue;
} else {
var map__652566_652634 = cljs.core.first.call(null,seq__652560_652628__$1);
var map__652566_652635__$1 = ((((!((map__652566_652634 == null)))?((((map__652566_652634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652566_652634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652566_652634):map__652566_652634);
var gline_652636 = cljs.core.get.call(null,map__652566_652635__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_652637 = cljs.core.get.call(null,map__652566_652635__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_652638 = cljs.core.get.call(null,map__652566_652635__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_652636], null),cljs.core.fnil.call(null,((function (seq__652560_652614,chunk__652561_652615,count__652562_652616,i__652563_652617,seq__652555_652607,chunk__652556_652608,count__652557_652609,i__652558_652610,seq__652550_652600,chunk__652551_652601,count__652552_652602,i__652553_652603,map__652566_652634,map__652566_652635__$1,gline_652636,gcol_652637,name_652638,seq__652560_652628__$1,temp__4425__auto___652627,vec__652559_652611,column_652612,column_info_652613,vec__652554_652604,line_652605,columns_652606,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_652612], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_652605,new cljs.core.Keyword(null,"col","col",-1959363084),column_652612,new cljs.core.Keyword(null,"name","name",1843675177),name_652638], null));
});})(seq__652560_652614,chunk__652561_652615,count__652562_652616,i__652563_652617,seq__652555_652607,chunk__652556_652608,count__652557_652609,i__652558_652610,seq__652550_652600,chunk__652551_652601,count__652552_652602,i__652553_652603,map__652566_652634,map__652566_652635__$1,gline_652636,gcol_652637,name_652638,seq__652560_652628__$1,temp__4425__auto___652627,vec__652559_652611,column_652612,column_info_652613,vec__652554_652604,line_652605,columns_652606,inverted))
,cljs.core.sorted_map.call(null)));

var G__652639 = cljs.core.next.call(null,seq__652560_652628__$1);
var G__652640 = null;
var G__652641 = (0);
var G__652642 = (0);
seq__652560_652614 = G__652639;
chunk__652561_652615 = G__652640;
count__652562_652616 = G__652641;
i__652563_652617 = G__652642;
continue;
}
} else {
}
}
break;
}

var G__652643 = seq__652555_652607;
var G__652644 = chunk__652556_652608;
var G__652645 = count__652557_652609;
var G__652646 = (i__652558_652610 + (1));
seq__652555_652607 = G__652643;
chunk__652556_652608 = G__652644;
count__652557_652609 = G__652645;
i__652558_652610 = G__652646;
continue;
} else {
var temp__4425__auto___652647 = cljs.core.seq.call(null,seq__652555_652607);
if(temp__4425__auto___652647){
var seq__652555_652648__$1 = temp__4425__auto___652647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652555_652648__$1)){
var c__25014__auto___652649 = cljs.core.chunk_first.call(null,seq__652555_652648__$1);
var G__652650 = cljs.core.chunk_rest.call(null,seq__652555_652648__$1);
var G__652651 = c__25014__auto___652649;
var G__652652 = cljs.core.count.call(null,c__25014__auto___652649);
var G__652653 = (0);
seq__652555_652607 = G__652650;
chunk__652556_652608 = G__652651;
count__652557_652609 = G__652652;
i__652558_652610 = G__652653;
continue;
} else {
var vec__652568_652654 = cljs.core.first.call(null,seq__652555_652648__$1);
var column_652655 = cljs.core.nth.call(null,vec__652568_652654,(0),null);
var column_info_652656 = cljs.core.nth.call(null,vec__652568_652654,(1),null);
var seq__652569_652657 = cljs.core.seq.call(null,column_info_652656);
var chunk__652570_652658 = null;
var count__652571_652659 = (0);
var i__652572_652660 = (0);
while(true){
if((i__652572_652660 < count__652571_652659)){
var map__652573_652661 = cljs.core._nth.call(null,chunk__652570_652658,i__652572_652660);
var map__652573_652662__$1 = ((((!((map__652573_652661 == null)))?((((map__652573_652661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652573_652661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652573_652661):map__652573_652661);
var gline_652663 = cljs.core.get.call(null,map__652573_652662__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_652664 = cljs.core.get.call(null,map__652573_652662__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_652665 = cljs.core.get.call(null,map__652573_652662__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_652663], null),cljs.core.fnil.call(null,((function (seq__652569_652657,chunk__652570_652658,count__652571_652659,i__652572_652660,seq__652555_652607,chunk__652556_652608,count__652557_652609,i__652558_652610,seq__652550_652600,chunk__652551_652601,count__652552_652602,i__652553_652603,map__652573_652661,map__652573_652662__$1,gline_652663,gcol_652664,name_652665,vec__652568_652654,column_652655,column_info_652656,seq__652555_652648__$1,temp__4425__auto___652647,vec__652554_652604,line_652605,columns_652606,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_652655], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_652605,new cljs.core.Keyword(null,"col","col",-1959363084),column_652655,new cljs.core.Keyword(null,"name","name",1843675177),name_652665], null));
});})(seq__652569_652657,chunk__652570_652658,count__652571_652659,i__652572_652660,seq__652555_652607,chunk__652556_652608,count__652557_652609,i__652558_652610,seq__652550_652600,chunk__652551_652601,count__652552_652602,i__652553_652603,map__652573_652661,map__652573_652662__$1,gline_652663,gcol_652664,name_652665,vec__652568_652654,column_652655,column_info_652656,seq__652555_652648__$1,temp__4425__auto___652647,vec__652554_652604,line_652605,columns_652606,inverted))
,cljs.core.sorted_map.call(null)));

var G__652666 = seq__652569_652657;
var G__652667 = chunk__652570_652658;
var G__652668 = count__652571_652659;
var G__652669 = (i__652572_652660 + (1));
seq__652569_652657 = G__652666;
chunk__652570_652658 = G__652667;
count__652571_652659 = G__652668;
i__652572_652660 = G__652669;
continue;
} else {
var temp__4425__auto___652670__$1 = cljs.core.seq.call(null,seq__652569_652657);
if(temp__4425__auto___652670__$1){
var seq__652569_652671__$1 = temp__4425__auto___652670__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652569_652671__$1)){
var c__25014__auto___652672 = cljs.core.chunk_first.call(null,seq__652569_652671__$1);
var G__652673 = cljs.core.chunk_rest.call(null,seq__652569_652671__$1);
var G__652674 = c__25014__auto___652672;
var G__652675 = cljs.core.count.call(null,c__25014__auto___652672);
var G__652676 = (0);
seq__652569_652657 = G__652673;
chunk__652570_652658 = G__652674;
count__652571_652659 = G__652675;
i__652572_652660 = G__652676;
continue;
} else {
var map__652575_652677 = cljs.core.first.call(null,seq__652569_652671__$1);
var map__652575_652678__$1 = ((((!((map__652575_652677 == null)))?((((map__652575_652677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652575_652677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652575_652677):map__652575_652677);
var gline_652679 = cljs.core.get.call(null,map__652575_652678__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_652680 = cljs.core.get.call(null,map__652575_652678__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_652681 = cljs.core.get.call(null,map__652575_652678__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_652679], null),cljs.core.fnil.call(null,((function (seq__652569_652657,chunk__652570_652658,count__652571_652659,i__652572_652660,seq__652555_652607,chunk__652556_652608,count__652557_652609,i__652558_652610,seq__652550_652600,chunk__652551_652601,count__652552_652602,i__652553_652603,map__652575_652677,map__652575_652678__$1,gline_652679,gcol_652680,name_652681,seq__652569_652671__$1,temp__4425__auto___652670__$1,vec__652568_652654,column_652655,column_info_652656,seq__652555_652648__$1,temp__4425__auto___652647,vec__652554_652604,line_652605,columns_652606,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_652655], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_652605,new cljs.core.Keyword(null,"col","col",-1959363084),column_652655,new cljs.core.Keyword(null,"name","name",1843675177),name_652681], null));
});})(seq__652569_652657,chunk__652570_652658,count__652571_652659,i__652572_652660,seq__652555_652607,chunk__652556_652608,count__652557_652609,i__652558_652610,seq__652550_652600,chunk__652551_652601,count__652552_652602,i__652553_652603,map__652575_652677,map__652575_652678__$1,gline_652679,gcol_652680,name_652681,seq__652569_652671__$1,temp__4425__auto___652670__$1,vec__652568_652654,column_652655,column_info_652656,seq__652555_652648__$1,temp__4425__auto___652647,vec__652554_652604,line_652605,columns_652606,inverted))
,cljs.core.sorted_map.call(null)));

var G__652682 = cljs.core.next.call(null,seq__652569_652671__$1);
var G__652683 = null;
var G__652684 = (0);
var G__652685 = (0);
seq__652569_652657 = G__652682;
chunk__652570_652658 = G__652683;
count__652571_652659 = G__652684;
i__652572_652660 = G__652685;
continue;
}
} else {
}
}
break;
}

var G__652686 = cljs.core.next.call(null,seq__652555_652648__$1);
var G__652687 = null;
var G__652688 = (0);
var G__652689 = (0);
seq__652555_652607 = G__652686;
chunk__652556_652608 = G__652687;
count__652557_652609 = G__652688;
i__652558_652610 = G__652689;
continue;
}
} else {
}
}
break;
}

var G__652690 = seq__652550_652600;
var G__652691 = chunk__652551_652601;
var G__652692 = count__652552_652602;
var G__652693 = (i__652553_652603 + (1));
seq__652550_652600 = G__652690;
chunk__652551_652601 = G__652691;
count__652552_652602 = G__652692;
i__652553_652603 = G__652693;
continue;
} else {
var temp__4425__auto___652694 = cljs.core.seq.call(null,seq__652550_652600);
if(temp__4425__auto___652694){
var seq__652550_652695__$1 = temp__4425__auto___652694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652550_652695__$1)){
var c__25014__auto___652696 = cljs.core.chunk_first.call(null,seq__652550_652695__$1);
var G__652697 = cljs.core.chunk_rest.call(null,seq__652550_652695__$1);
var G__652698 = c__25014__auto___652696;
var G__652699 = cljs.core.count.call(null,c__25014__auto___652696);
var G__652700 = (0);
seq__652550_652600 = G__652697;
chunk__652551_652601 = G__652698;
count__652552_652602 = G__652699;
i__652553_652603 = G__652700;
continue;
} else {
var vec__652577_652701 = cljs.core.first.call(null,seq__652550_652695__$1);
var line_652702 = cljs.core.nth.call(null,vec__652577_652701,(0),null);
var columns_652703 = cljs.core.nth.call(null,vec__652577_652701,(1),null);
var seq__652578_652704 = cljs.core.seq.call(null,columns_652703);
var chunk__652579_652705 = null;
var count__652580_652706 = (0);
var i__652581_652707 = (0);
while(true){
if((i__652581_652707 < count__652580_652706)){
var vec__652582_652708 = cljs.core._nth.call(null,chunk__652579_652705,i__652581_652707);
var column_652709 = cljs.core.nth.call(null,vec__652582_652708,(0),null);
var column_info_652710 = cljs.core.nth.call(null,vec__652582_652708,(1),null);
var seq__652583_652711 = cljs.core.seq.call(null,column_info_652710);
var chunk__652584_652712 = null;
var count__652585_652713 = (0);
var i__652586_652714 = (0);
while(true){
if((i__652586_652714 < count__652585_652713)){
var map__652587_652715 = cljs.core._nth.call(null,chunk__652584_652712,i__652586_652714);
var map__652587_652716__$1 = ((((!((map__652587_652715 == null)))?((((map__652587_652715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652587_652715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652587_652715):map__652587_652715);
var gline_652717 = cljs.core.get.call(null,map__652587_652716__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_652718 = cljs.core.get.call(null,map__652587_652716__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_652719 = cljs.core.get.call(null,map__652587_652716__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_652717], null),cljs.core.fnil.call(null,((function (seq__652583_652711,chunk__652584_652712,count__652585_652713,i__652586_652714,seq__652578_652704,chunk__652579_652705,count__652580_652706,i__652581_652707,seq__652550_652600,chunk__652551_652601,count__652552_652602,i__652553_652603,map__652587_652715,map__652587_652716__$1,gline_652717,gcol_652718,name_652719,vec__652582_652708,column_652709,column_info_652710,vec__652577_652701,line_652702,columns_652703,seq__652550_652695__$1,temp__4425__auto___652694,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_652709], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_652702,new cljs.core.Keyword(null,"col","col",-1959363084),column_652709,new cljs.core.Keyword(null,"name","name",1843675177),name_652719], null));
});})(seq__652583_652711,chunk__652584_652712,count__652585_652713,i__652586_652714,seq__652578_652704,chunk__652579_652705,count__652580_652706,i__652581_652707,seq__652550_652600,chunk__652551_652601,count__652552_652602,i__652553_652603,map__652587_652715,map__652587_652716__$1,gline_652717,gcol_652718,name_652719,vec__652582_652708,column_652709,column_info_652710,vec__652577_652701,line_652702,columns_652703,seq__652550_652695__$1,temp__4425__auto___652694,inverted))
,cljs.core.sorted_map.call(null)));

var G__652720 = seq__652583_652711;
var G__652721 = chunk__652584_652712;
var G__652722 = count__652585_652713;
var G__652723 = (i__652586_652714 + (1));
seq__652583_652711 = G__652720;
chunk__652584_652712 = G__652721;
count__652585_652713 = G__652722;
i__652586_652714 = G__652723;
continue;
} else {
var temp__4425__auto___652724__$1 = cljs.core.seq.call(null,seq__652583_652711);
if(temp__4425__auto___652724__$1){
var seq__652583_652725__$1 = temp__4425__auto___652724__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652583_652725__$1)){
var c__25014__auto___652726 = cljs.core.chunk_first.call(null,seq__652583_652725__$1);
var G__652727 = cljs.core.chunk_rest.call(null,seq__652583_652725__$1);
var G__652728 = c__25014__auto___652726;
var G__652729 = cljs.core.count.call(null,c__25014__auto___652726);
var G__652730 = (0);
seq__652583_652711 = G__652727;
chunk__652584_652712 = G__652728;
count__652585_652713 = G__652729;
i__652586_652714 = G__652730;
continue;
} else {
var map__652589_652731 = cljs.core.first.call(null,seq__652583_652725__$1);
var map__652589_652732__$1 = ((((!((map__652589_652731 == null)))?((((map__652589_652731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652589_652731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652589_652731):map__652589_652731);
var gline_652733 = cljs.core.get.call(null,map__652589_652732__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_652734 = cljs.core.get.call(null,map__652589_652732__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_652735 = cljs.core.get.call(null,map__652589_652732__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_652733], null),cljs.core.fnil.call(null,((function (seq__652583_652711,chunk__652584_652712,count__652585_652713,i__652586_652714,seq__652578_652704,chunk__652579_652705,count__652580_652706,i__652581_652707,seq__652550_652600,chunk__652551_652601,count__652552_652602,i__652553_652603,map__652589_652731,map__652589_652732__$1,gline_652733,gcol_652734,name_652735,seq__652583_652725__$1,temp__4425__auto___652724__$1,vec__652582_652708,column_652709,column_info_652710,vec__652577_652701,line_652702,columns_652703,seq__652550_652695__$1,temp__4425__auto___652694,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_652709], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_652702,new cljs.core.Keyword(null,"col","col",-1959363084),column_652709,new cljs.core.Keyword(null,"name","name",1843675177),name_652735], null));
});})(seq__652583_652711,chunk__652584_652712,count__652585_652713,i__652586_652714,seq__652578_652704,chunk__652579_652705,count__652580_652706,i__652581_652707,seq__652550_652600,chunk__652551_652601,count__652552_652602,i__652553_652603,map__652589_652731,map__652589_652732__$1,gline_652733,gcol_652734,name_652735,seq__652583_652725__$1,temp__4425__auto___652724__$1,vec__652582_652708,column_652709,column_info_652710,vec__652577_652701,line_652702,columns_652703,seq__652550_652695__$1,temp__4425__auto___652694,inverted))
,cljs.core.sorted_map.call(null)));

var G__652736 = cljs.core.next.call(null,seq__652583_652725__$1);
var G__652737 = null;
var G__652738 = (0);
var G__652739 = (0);
seq__652583_652711 = G__652736;
chunk__652584_652712 = G__652737;
count__652585_652713 = G__652738;
i__652586_652714 = G__652739;
continue;
}
} else {
}
}
break;
}

var G__652740 = seq__652578_652704;
var G__652741 = chunk__652579_652705;
var G__652742 = count__652580_652706;
var G__652743 = (i__652581_652707 + (1));
seq__652578_652704 = G__652740;
chunk__652579_652705 = G__652741;
count__652580_652706 = G__652742;
i__652581_652707 = G__652743;
continue;
} else {
var temp__4425__auto___652744__$1 = cljs.core.seq.call(null,seq__652578_652704);
if(temp__4425__auto___652744__$1){
var seq__652578_652745__$1 = temp__4425__auto___652744__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652578_652745__$1)){
var c__25014__auto___652746 = cljs.core.chunk_first.call(null,seq__652578_652745__$1);
var G__652747 = cljs.core.chunk_rest.call(null,seq__652578_652745__$1);
var G__652748 = c__25014__auto___652746;
var G__652749 = cljs.core.count.call(null,c__25014__auto___652746);
var G__652750 = (0);
seq__652578_652704 = G__652747;
chunk__652579_652705 = G__652748;
count__652580_652706 = G__652749;
i__652581_652707 = G__652750;
continue;
} else {
var vec__652591_652751 = cljs.core.first.call(null,seq__652578_652745__$1);
var column_652752 = cljs.core.nth.call(null,vec__652591_652751,(0),null);
var column_info_652753 = cljs.core.nth.call(null,vec__652591_652751,(1),null);
var seq__652592_652754 = cljs.core.seq.call(null,column_info_652753);
var chunk__652593_652755 = null;
var count__652594_652756 = (0);
var i__652595_652757 = (0);
while(true){
if((i__652595_652757 < count__652594_652756)){
var map__652596_652758 = cljs.core._nth.call(null,chunk__652593_652755,i__652595_652757);
var map__652596_652759__$1 = ((((!((map__652596_652758 == null)))?((((map__652596_652758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652596_652758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652596_652758):map__652596_652758);
var gline_652760 = cljs.core.get.call(null,map__652596_652759__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_652761 = cljs.core.get.call(null,map__652596_652759__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_652762 = cljs.core.get.call(null,map__652596_652759__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_652760], null),cljs.core.fnil.call(null,((function (seq__652592_652754,chunk__652593_652755,count__652594_652756,i__652595_652757,seq__652578_652704,chunk__652579_652705,count__652580_652706,i__652581_652707,seq__652550_652600,chunk__652551_652601,count__652552_652602,i__652553_652603,map__652596_652758,map__652596_652759__$1,gline_652760,gcol_652761,name_652762,vec__652591_652751,column_652752,column_info_652753,seq__652578_652745__$1,temp__4425__auto___652744__$1,vec__652577_652701,line_652702,columns_652703,seq__652550_652695__$1,temp__4425__auto___652694,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_652752], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_652702,new cljs.core.Keyword(null,"col","col",-1959363084),column_652752,new cljs.core.Keyword(null,"name","name",1843675177),name_652762], null));
});})(seq__652592_652754,chunk__652593_652755,count__652594_652756,i__652595_652757,seq__652578_652704,chunk__652579_652705,count__652580_652706,i__652581_652707,seq__652550_652600,chunk__652551_652601,count__652552_652602,i__652553_652603,map__652596_652758,map__652596_652759__$1,gline_652760,gcol_652761,name_652762,vec__652591_652751,column_652752,column_info_652753,seq__652578_652745__$1,temp__4425__auto___652744__$1,vec__652577_652701,line_652702,columns_652703,seq__652550_652695__$1,temp__4425__auto___652694,inverted))
,cljs.core.sorted_map.call(null)));

var G__652763 = seq__652592_652754;
var G__652764 = chunk__652593_652755;
var G__652765 = count__652594_652756;
var G__652766 = (i__652595_652757 + (1));
seq__652592_652754 = G__652763;
chunk__652593_652755 = G__652764;
count__652594_652756 = G__652765;
i__652595_652757 = G__652766;
continue;
} else {
var temp__4425__auto___652767__$2 = cljs.core.seq.call(null,seq__652592_652754);
if(temp__4425__auto___652767__$2){
var seq__652592_652768__$1 = temp__4425__auto___652767__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652592_652768__$1)){
var c__25014__auto___652769 = cljs.core.chunk_first.call(null,seq__652592_652768__$1);
var G__652770 = cljs.core.chunk_rest.call(null,seq__652592_652768__$1);
var G__652771 = c__25014__auto___652769;
var G__652772 = cljs.core.count.call(null,c__25014__auto___652769);
var G__652773 = (0);
seq__652592_652754 = G__652770;
chunk__652593_652755 = G__652771;
count__652594_652756 = G__652772;
i__652595_652757 = G__652773;
continue;
} else {
var map__652598_652774 = cljs.core.first.call(null,seq__652592_652768__$1);
var map__652598_652775__$1 = ((((!((map__652598_652774 == null)))?((((map__652598_652774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652598_652774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652598_652774):map__652598_652774);
var gline_652776 = cljs.core.get.call(null,map__652598_652775__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_652777 = cljs.core.get.call(null,map__652598_652775__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_652778 = cljs.core.get.call(null,map__652598_652775__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_652776], null),cljs.core.fnil.call(null,((function (seq__652592_652754,chunk__652593_652755,count__652594_652756,i__652595_652757,seq__652578_652704,chunk__652579_652705,count__652580_652706,i__652581_652707,seq__652550_652600,chunk__652551_652601,count__652552_652602,i__652553_652603,map__652598_652774,map__652598_652775__$1,gline_652776,gcol_652777,name_652778,seq__652592_652768__$1,temp__4425__auto___652767__$2,vec__652591_652751,column_652752,column_info_652753,seq__652578_652745__$1,temp__4425__auto___652744__$1,vec__652577_652701,line_652702,columns_652703,seq__652550_652695__$1,temp__4425__auto___652694,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_652752], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_652702,new cljs.core.Keyword(null,"col","col",-1959363084),column_652752,new cljs.core.Keyword(null,"name","name",1843675177),name_652778], null));
});})(seq__652592_652754,chunk__652593_652755,count__652594_652756,i__652595_652757,seq__652578_652704,chunk__652579_652705,count__652580_652706,i__652581_652707,seq__652550_652600,chunk__652551_652601,count__652552_652602,i__652553_652603,map__652598_652774,map__652598_652775__$1,gline_652776,gcol_652777,name_652778,seq__652592_652768__$1,temp__4425__auto___652767__$2,vec__652591_652751,column_652752,column_info_652753,seq__652578_652745__$1,temp__4425__auto___652744__$1,vec__652577_652701,line_652702,columns_652703,seq__652550_652695__$1,temp__4425__auto___652694,inverted))
,cljs.core.sorted_map.call(null)));

var G__652779 = cljs.core.next.call(null,seq__652592_652768__$1);
var G__652780 = null;
var G__652781 = (0);
var G__652782 = (0);
seq__652592_652754 = G__652779;
chunk__652593_652755 = G__652780;
count__652594_652756 = G__652781;
i__652595_652757 = G__652782;
continue;
}
} else {
}
}
break;
}

var G__652783 = cljs.core.next.call(null,seq__652578_652745__$1);
var G__652784 = null;
var G__652785 = (0);
var G__652786 = (0);
seq__652578_652704 = G__652783;
chunk__652579_652705 = G__652784;
count__652580_652706 = G__652785;
i__652581_652707 = G__652786;
continue;
}
} else {
}
}
break;
}

var G__652787 = cljs.core.next.call(null,seq__652550_652695__$1);
var G__652788 = null;
var G__652789 = (0);
var G__652790 = (0);
seq__652550_652600 = G__652787;
chunk__652551_652601 = G__652788;
count__652552_652602 = G__652789;
i__652553_652603 = G__652790;
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