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
return cljs.core.reduce.call(null,(function (m,p__370661){
var vec__370662 = p__370661;
var i = cljs.core.nth.call(null,vec__370662,(0),null);
var v = cljs.core.nth.call(null,vec__370662,(1),null);
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
var vec__370664 = seg;
var gcol = cljs.core.nth.call(null,vec__370664,(0),null);
var source = cljs.core.nth.call(null,vec__370664,(1),null);
var line = cljs.core.nth.call(null,vec__370664,(2),null);
var col = cljs.core.nth.call(null,vec__370664,(3),null);
var name = cljs.core.nth.call(null,vec__370664,(4),null);
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
var vec__370667 = seg;
var gcol = cljs.core.nth.call(null,vec__370667,(0),null);
var source = cljs.core.nth.call(null,vec__370667,(1),null);
var line = cljs.core.nth.call(null,vec__370667,(2),null);
var col = cljs.core.nth.call(null,vec__370667,(3),null);
var name = cljs.core.nth.call(null,vec__370667,(4),null);
var vec__370668 = relseg;
var rgcol = cljs.core.nth.call(null,vec__370668,(0),null);
var rsource = cljs.core.nth.call(null,vec__370668,(1),null);
var rline = cljs.core.nth.call(null,vec__370668,(2),null);
var rcol = cljs.core.nth.call(null,vec__370668,(3),null);
var rname = cljs.core.nth.call(null,vec__370668,(4),null);
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
var map__370671 = segmap;
var map__370671__$1 = ((((!((map__370671 == null)))?((((map__370671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370671):map__370671);
var gcol = cljs.core.get.call(null,map__370671__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__370671__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__370671__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__370671__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__370671__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__370671,map__370671__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__370671,map__370671__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__370671,map__370671__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__370671,map__370671__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__370671,map__370671__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__370671,map__370671__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args370673 = [];
var len__25219__auto___370677 = arguments.length;
var i__25220__auto___370678 = (0);
while(true){
if((i__25220__auto___370678 < len__25219__auto___370677)){
args370673.push((arguments[i__25220__auto___370678]));

var G__370679 = (i__25220__auto___370678 + (1));
i__25220__auto___370678 = G__370679;
continue;
} else {
}
break;
}

var G__370675 = args370673.length;
switch (G__370675) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args370673.length)].join('')));

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
var vec__370676 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__370681 = cljs.core.next.call(null,segs__$1);
var G__370682 = nrelseg;
var G__370683 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__370681;
relseg__$1 = G__370682;
result__$1 = G__370683;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__370676,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__370676,(1),null);
var G__370684 = (gline + (1));
var G__370685 = cljs.core.next.call(null,lines__$1);
var G__370686 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__370687 = result__$1;
gline = G__370684;
lines__$1 = G__370685;
relseg = G__370686;
result = G__370687;
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
var map__370691 = segmap;
var map__370691__$1 = ((((!((map__370691 == null)))?((((map__370691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__370691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__370691):map__370691);
var gcol = cljs.core.get.call(null,map__370691__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__370691__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__370691__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__370691__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__370691__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__370691,map__370691__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__370691,map__370691__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__370688_SHARP_){
return cljs.core.conj.call(null,p1__370688_SHARP_,d__$1);
});})(map__370691,map__370691__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__370691,map__370691__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args370693 = [];
var len__25219__auto___370697 = arguments.length;
var i__25220__auto___370698 = (0);
while(true){
if((i__25220__auto___370698 < len__25219__auto___370697)){
args370693.push((arguments[i__25220__auto___370698]));

var G__370699 = (i__25220__auto___370698 + (1));
i__25220__auto___370698 = G__370699;
continue;
} else {
}
break;
}

var G__370695 = args370693.length;
switch (G__370695) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args370693.length)].join('')));

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
var vec__370696 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__370701 = cljs.core.next.call(null,segs__$1);
var G__370702 = nrelseg;
var G__370703 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__370701;
relseg__$1 = G__370702;
result__$1 = G__370703;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__370696,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__370696,(1),null);
var G__370704 = (gline + (1));
var G__370705 = cljs.core.next.call(null,lines__$1);
var G__370706 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__370707 = result__$1;
gline = G__370704;
lines__$1 = G__370705;
relseg = G__370706;
result = G__370707;
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
return (function (p__370714){
var vec__370715 = p__370714;
var _ = cljs.core.nth.call(null,vec__370715,(0),null);
var source = cljs.core.nth.call(null,vec__370715,(1),null);
var line = cljs.core.nth.call(null,vec__370715,(2),null);
var col = cljs.core.nth.call(null,vec__370715,(3),null);
var name = cljs.core.nth.call(null,vec__370715,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__370716){
var vec__370717 = p__370716;
var gcol = cljs.core.nth.call(null,vec__370717,(0),null);
var sidx = cljs.core.nth.call(null,vec__370717,(1),null);
var line = cljs.core.nth.call(null,vec__370717,(2),null);
var col = cljs.core.nth.call(null,vec__370717,(3),null);
var name = cljs.core.nth.call(null,vec__370717,(4),null);
var seg = vec__370717;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__370717,gcol,sidx,line,col,name,seg,relseg){
return (function (p__370718){
var vec__370719 = p__370718;
var _ = cljs.core.nth.call(null,vec__370719,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__370719,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__370719,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__370719,(3),null);
var lname = cljs.core.nth.call(null,vec__370719,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__24161__auto__ = name;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__370717,gcol,sidx,line,col,name,seg,relseg))
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
var seq__370773 = cljs.core.seq.call(null,infos);
var chunk__370774 = null;
var count__370775 = (0);
var i__370776 = (0);
while(true){
if((i__370776 < count__370775)){
var info = cljs.core._nth.call(null,chunk__370774,i__370776);
var segv_370823 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_370824 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_370825 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_370824 > (lc_370825 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__370773,chunk__370774,count__370775,i__370776,segv_370823,gline_370824,lc_370825,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_370824 - (lc_370825 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_370823], null));
});})(seq__370773,chunk__370774,count__370775,i__370776,segv_370823,gline_370824,lc_370825,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__370773,chunk__370774,count__370775,i__370776,segv_370823,gline_370824,lc_370825,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_370824], null),cljs.core.conj,segv_370823);
});})(seq__370773,chunk__370774,count__370775,i__370776,segv_370823,gline_370824,lc_370825,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__370826 = seq__370773;
var G__370827 = chunk__370774;
var G__370828 = count__370775;
var G__370829 = (i__370776 + (1));
seq__370773 = G__370826;
chunk__370774 = G__370827;
count__370775 = G__370828;
i__370776 = G__370829;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__370773);
if(temp__4425__auto__){
var seq__370773__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__370773__$1)){
var c__24964__auto__ = cljs.core.chunk_first.call(null,seq__370773__$1);
var G__370830 = cljs.core.chunk_rest.call(null,seq__370773__$1);
var G__370831 = c__24964__auto__;
var G__370832 = cljs.core.count.call(null,c__24964__auto__);
var G__370833 = (0);
seq__370773 = G__370830;
chunk__370774 = G__370831;
count__370775 = G__370832;
i__370776 = G__370833;
continue;
} else {
var info = cljs.core.first.call(null,seq__370773__$1);
var segv_370834 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_370835 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_370836 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_370835 > (lc_370836 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__370773,chunk__370774,count__370775,i__370776,segv_370834,gline_370835,lc_370836,info,seq__370773__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_370835 - (lc_370836 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_370834], null));
});})(seq__370773,chunk__370774,count__370775,i__370776,segv_370834,gline_370835,lc_370836,info,seq__370773__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__370773,chunk__370774,count__370775,i__370776,segv_370834,gline_370835,lc_370836,info,seq__370773__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_370835], null),cljs.core.conj,segv_370834);
});})(seq__370773,chunk__370774,count__370775,i__370776,segv_370834,gline_370835,lc_370836,info,seq__370773__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__370837 = cljs.core.next.call(null,seq__370773__$1);
var G__370838 = null;
var G__370839 = (0);
var G__370840 = (0);
seq__370773 = G__370837;
chunk__370774 = G__370838;
count__370775 = G__370839;
i__370776 = G__370840;
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
var seq__370777_370841 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__370778_370842 = null;
var count__370779_370843 = (0);
var i__370780_370844 = (0);
while(true){
if((i__370780_370844 < count__370779_370843)){
var vec__370781_370845 = cljs.core._nth.call(null,chunk__370778_370842,i__370780_370844);
var source_idx_370846 = cljs.core.nth.call(null,vec__370781_370845,(0),null);
var vec__370782_370847 = cljs.core.nth.call(null,vec__370781_370845,(1),null);
var __370848 = cljs.core.nth.call(null,vec__370782_370847,(0),null);
var lines_370849__$1 = cljs.core.nth.call(null,vec__370782_370847,(1),null);
var seq__370783_370850 = cljs.core.seq.call(null,lines_370849__$1);
var chunk__370784_370851 = null;
var count__370785_370852 = (0);
var i__370786_370853 = (0);
while(true){
if((i__370786_370853 < count__370785_370852)){
var vec__370787_370854 = cljs.core._nth.call(null,chunk__370784_370851,i__370786_370853);
var line_370855 = cljs.core.nth.call(null,vec__370787_370854,(0),null);
var cols_370856 = cljs.core.nth.call(null,vec__370787_370854,(1),null);
var seq__370788_370857 = cljs.core.seq.call(null,cols_370856);
var chunk__370789_370858 = null;
var count__370790_370859 = (0);
var i__370791_370860 = (0);
while(true){
if((i__370791_370860 < count__370790_370859)){
var vec__370792_370861 = cljs.core._nth.call(null,chunk__370789_370858,i__370791_370860);
var col_370862 = cljs.core.nth.call(null,vec__370792_370861,(0),null);
var infos_370863 = cljs.core.nth.call(null,vec__370792_370861,(1),null);
encode_cols.call(null,infos_370863,source_idx_370846,line_370855,col_370862);

var G__370864 = seq__370788_370857;
var G__370865 = chunk__370789_370858;
var G__370866 = count__370790_370859;
var G__370867 = (i__370791_370860 + (1));
seq__370788_370857 = G__370864;
chunk__370789_370858 = G__370865;
count__370790_370859 = G__370866;
i__370791_370860 = G__370867;
continue;
} else {
var temp__4425__auto___370868 = cljs.core.seq.call(null,seq__370788_370857);
if(temp__4425__auto___370868){
var seq__370788_370869__$1 = temp__4425__auto___370868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__370788_370869__$1)){
var c__24964__auto___370870 = cljs.core.chunk_first.call(null,seq__370788_370869__$1);
var G__370871 = cljs.core.chunk_rest.call(null,seq__370788_370869__$1);
var G__370872 = c__24964__auto___370870;
var G__370873 = cljs.core.count.call(null,c__24964__auto___370870);
var G__370874 = (0);
seq__370788_370857 = G__370871;
chunk__370789_370858 = G__370872;
count__370790_370859 = G__370873;
i__370791_370860 = G__370874;
continue;
} else {
var vec__370793_370875 = cljs.core.first.call(null,seq__370788_370869__$1);
var col_370876 = cljs.core.nth.call(null,vec__370793_370875,(0),null);
var infos_370877 = cljs.core.nth.call(null,vec__370793_370875,(1),null);
encode_cols.call(null,infos_370877,source_idx_370846,line_370855,col_370876);

var G__370878 = cljs.core.next.call(null,seq__370788_370869__$1);
var G__370879 = null;
var G__370880 = (0);
var G__370881 = (0);
seq__370788_370857 = G__370878;
chunk__370789_370858 = G__370879;
count__370790_370859 = G__370880;
i__370791_370860 = G__370881;
continue;
}
} else {
}
}
break;
}

var G__370882 = seq__370783_370850;
var G__370883 = chunk__370784_370851;
var G__370884 = count__370785_370852;
var G__370885 = (i__370786_370853 + (1));
seq__370783_370850 = G__370882;
chunk__370784_370851 = G__370883;
count__370785_370852 = G__370884;
i__370786_370853 = G__370885;
continue;
} else {
var temp__4425__auto___370886 = cljs.core.seq.call(null,seq__370783_370850);
if(temp__4425__auto___370886){
var seq__370783_370887__$1 = temp__4425__auto___370886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__370783_370887__$1)){
var c__24964__auto___370888 = cljs.core.chunk_first.call(null,seq__370783_370887__$1);
var G__370889 = cljs.core.chunk_rest.call(null,seq__370783_370887__$1);
var G__370890 = c__24964__auto___370888;
var G__370891 = cljs.core.count.call(null,c__24964__auto___370888);
var G__370892 = (0);
seq__370783_370850 = G__370889;
chunk__370784_370851 = G__370890;
count__370785_370852 = G__370891;
i__370786_370853 = G__370892;
continue;
} else {
var vec__370794_370893 = cljs.core.first.call(null,seq__370783_370887__$1);
var line_370894 = cljs.core.nth.call(null,vec__370794_370893,(0),null);
var cols_370895 = cljs.core.nth.call(null,vec__370794_370893,(1),null);
var seq__370795_370896 = cljs.core.seq.call(null,cols_370895);
var chunk__370796_370897 = null;
var count__370797_370898 = (0);
var i__370798_370899 = (0);
while(true){
if((i__370798_370899 < count__370797_370898)){
var vec__370799_370900 = cljs.core._nth.call(null,chunk__370796_370897,i__370798_370899);
var col_370901 = cljs.core.nth.call(null,vec__370799_370900,(0),null);
var infos_370902 = cljs.core.nth.call(null,vec__370799_370900,(1),null);
encode_cols.call(null,infos_370902,source_idx_370846,line_370894,col_370901);

var G__370903 = seq__370795_370896;
var G__370904 = chunk__370796_370897;
var G__370905 = count__370797_370898;
var G__370906 = (i__370798_370899 + (1));
seq__370795_370896 = G__370903;
chunk__370796_370897 = G__370904;
count__370797_370898 = G__370905;
i__370798_370899 = G__370906;
continue;
} else {
var temp__4425__auto___370907__$1 = cljs.core.seq.call(null,seq__370795_370896);
if(temp__4425__auto___370907__$1){
var seq__370795_370908__$1 = temp__4425__auto___370907__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__370795_370908__$1)){
var c__24964__auto___370909 = cljs.core.chunk_first.call(null,seq__370795_370908__$1);
var G__370910 = cljs.core.chunk_rest.call(null,seq__370795_370908__$1);
var G__370911 = c__24964__auto___370909;
var G__370912 = cljs.core.count.call(null,c__24964__auto___370909);
var G__370913 = (0);
seq__370795_370896 = G__370910;
chunk__370796_370897 = G__370911;
count__370797_370898 = G__370912;
i__370798_370899 = G__370913;
continue;
} else {
var vec__370800_370914 = cljs.core.first.call(null,seq__370795_370908__$1);
var col_370915 = cljs.core.nth.call(null,vec__370800_370914,(0),null);
var infos_370916 = cljs.core.nth.call(null,vec__370800_370914,(1),null);
encode_cols.call(null,infos_370916,source_idx_370846,line_370894,col_370915);

var G__370917 = cljs.core.next.call(null,seq__370795_370908__$1);
var G__370918 = null;
var G__370919 = (0);
var G__370920 = (0);
seq__370795_370896 = G__370917;
chunk__370796_370897 = G__370918;
count__370797_370898 = G__370919;
i__370798_370899 = G__370920;
continue;
}
} else {
}
}
break;
}

var G__370921 = cljs.core.next.call(null,seq__370783_370887__$1);
var G__370922 = null;
var G__370923 = (0);
var G__370924 = (0);
seq__370783_370850 = G__370921;
chunk__370784_370851 = G__370922;
count__370785_370852 = G__370923;
i__370786_370853 = G__370924;
continue;
}
} else {
}
}
break;
}

var G__370925 = seq__370777_370841;
var G__370926 = chunk__370778_370842;
var G__370927 = count__370779_370843;
var G__370928 = (i__370780_370844 + (1));
seq__370777_370841 = G__370925;
chunk__370778_370842 = G__370926;
count__370779_370843 = G__370927;
i__370780_370844 = G__370928;
continue;
} else {
var temp__4425__auto___370929 = cljs.core.seq.call(null,seq__370777_370841);
if(temp__4425__auto___370929){
var seq__370777_370930__$1 = temp__4425__auto___370929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__370777_370930__$1)){
var c__24964__auto___370931 = cljs.core.chunk_first.call(null,seq__370777_370930__$1);
var G__370932 = cljs.core.chunk_rest.call(null,seq__370777_370930__$1);
var G__370933 = c__24964__auto___370931;
var G__370934 = cljs.core.count.call(null,c__24964__auto___370931);
var G__370935 = (0);
seq__370777_370841 = G__370932;
chunk__370778_370842 = G__370933;
count__370779_370843 = G__370934;
i__370780_370844 = G__370935;
continue;
} else {
var vec__370801_370936 = cljs.core.first.call(null,seq__370777_370930__$1);
var source_idx_370937 = cljs.core.nth.call(null,vec__370801_370936,(0),null);
var vec__370802_370938 = cljs.core.nth.call(null,vec__370801_370936,(1),null);
var __370939 = cljs.core.nth.call(null,vec__370802_370938,(0),null);
var lines_370940__$1 = cljs.core.nth.call(null,vec__370802_370938,(1),null);
var seq__370803_370941 = cljs.core.seq.call(null,lines_370940__$1);
var chunk__370804_370942 = null;
var count__370805_370943 = (0);
var i__370806_370944 = (0);
while(true){
if((i__370806_370944 < count__370805_370943)){
var vec__370807_370945 = cljs.core._nth.call(null,chunk__370804_370942,i__370806_370944);
var line_370946 = cljs.core.nth.call(null,vec__370807_370945,(0),null);
var cols_370947 = cljs.core.nth.call(null,vec__370807_370945,(1),null);
var seq__370808_370948 = cljs.core.seq.call(null,cols_370947);
var chunk__370809_370949 = null;
var count__370810_370950 = (0);
var i__370811_370951 = (0);
while(true){
if((i__370811_370951 < count__370810_370950)){
var vec__370812_370952 = cljs.core._nth.call(null,chunk__370809_370949,i__370811_370951);
var col_370953 = cljs.core.nth.call(null,vec__370812_370952,(0),null);
var infos_370954 = cljs.core.nth.call(null,vec__370812_370952,(1),null);
encode_cols.call(null,infos_370954,source_idx_370937,line_370946,col_370953);

var G__370955 = seq__370808_370948;
var G__370956 = chunk__370809_370949;
var G__370957 = count__370810_370950;
var G__370958 = (i__370811_370951 + (1));
seq__370808_370948 = G__370955;
chunk__370809_370949 = G__370956;
count__370810_370950 = G__370957;
i__370811_370951 = G__370958;
continue;
} else {
var temp__4425__auto___370959__$1 = cljs.core.seq.call(null,seq__370808_370948);
if(temp__4425__auto___370959__$1){
var seq__370808_370960__$1 = temp__4425__auto___370959__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__370808_370960__$1)){
var c__24964__auto___370961 = cljs.core.chunk_first.call(null,seq__370808_370960__$1);
var G__370962 = cljs.core.chunk_rest.call(null,seq__370808_370960__$1);
var G__370963 = c__24964__auto___370961;
var G__370964 = cljs.core.count.call(null,c__24964__auto___370961);
var G__370965 = (0);
seq__370808_370948 = G__370962;
chunk__370809_370949 = G__370963;
count__370810_370950 = G__370964;
i__370811_370951 = G__370965;
continue;
} else {
var vec__370813_370966 = cljs.core.first.call(null,seq__370808_370960__$1);
var col_370967 = cljs.core.nth.call(null,vec__370813_370966,(0),null);
var infos_370968 = cljs.core.nth.call(null,vec__370813_370966,(1),null);
encode_cols.call(null,infos_370968,source_idx_370937,line_370946,col_370967);

var G__370969 = cljs.core.next.call(null,seq__370808_370960__$1);
var G__370970 = null;
var G__370971 = (0);
var G__370972 = (0);
seq__370808_370948 = G__370969;
chunk__370809_370949 = G__370970;
count__370810_370950 = G__370971;
i__370811_370951 = G__370972;
continue;
}
} else {
}
}
break;
}

var G__370973 = seq__370803_370941;
var G__370974 = chunk__370804_370942;
var G__370975 = count__370805_370943;
var G__370976 = (i__370806_370944 + (1));
seq__370803_370941 = G__370973;
chunk__370804_370942 = G__370974;
count__370805_370943 = G__370975;
i__370806_370944 = G__370976;
continue;
} else {
var temp__4425__auto___370977__$1 = cljs.core.seq.call(null,seq__370803_370941);
if(temp__4425__auto___370977__$1){
var seq__370803_370978__$1 = temp__4425__auto___370977__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__370803_370978__$1)){
var c__24964__auto___370979 = cljs.core.chunk_first.call(null,seq__370803_370978__$1);
var G__370980 = cljs.core.chunk_rest.call(null,seq__370803_370978__$1);
var G__370981 = c__24964__auto___370979;
var G__370982 = cljs.core.count.call(null,c__24964__auto___370979);
var G__370983 = (0);
seq__370803_370941 = G__370980;
chunk__370804_370942 = G__370981;
count__370805_370943 = G__370982;
i__370806_370944 = G__370983;
continue;
} else {
var vec__370814_370984 = cljs.core.first.call(null,seq__370803_370978__$1);
var line_370985 = cljs.core.nth.call(null,vec__370814_370984,(0),null);
var cols_370986 = cljs.core.nth.call(null,vec__370814_370984,(1),null);
var seq__370815_370987 = cljs.core.seq.call(null,cols_370986);
var chunk__370816_370988 = null;
var count__370817_370989 = (0);
var i__370818_370990 = (0);
while(true){
if((i__370818_370990 < count__370817_370989)){
var vec__370819_370991 = cljs.core._nth.call(null,chunk__370816_370988,i__370818_370990);
var col_370992 = cljs.core.nth.call(null,vec__370819_370991,(0),null);
var infos_370993 = cljs.core.nth.call(null,vec__370819_370991,(1),null);
encode_cols.call(null,infos_370993,source_idx_370937,line_370985,col_370992);

var G__370994 = seq__370815_370987;
var G__370995 = chunk__370816_370988;
var G__370996 = count__370817_370989;
var G__370997 = (i__370818_370990 + (1));
seq__370815_370987 = G__370994;
chunk__370816_370988 = G__370995;
count__370817_370989 = G__370996;
i__370818_370990 = G__370997;
continue;
} else {
var temp__4425__auto___370998__$2 = cljs.core.seq.call(null,seq__370815_370987);
if(temp__4425__auto___370998__$2){
var seq__370815_370999__$1 = temp__4425__auto___370998__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__370815_370999__$1)){
var c__24964__auto___371000 = cljs.core.chunk_first.call(null,seq__370815_370999__$1);
var G__371001 = cljs.core.chunk_rest.call(null,seq__370815_370999__$1);
var G__371002 = c__24964__auto___371000;
var G__371003 = cljs.core.count.call(null,c__24964__auto___371000);
var G__371004 = (0);
seq__370815_370987 = G__371001;
chunk__370816_370988 = G__371002;
count__370817_370989 = G__371003;
i__370818_370990 = G__371004;
continue;
} else {
var vec__370820_371005 = cljs.core.first.call(null,seq__370815_370999__$1);
var col_371006 = cljs.core.nth.call(null,vec__370820_371005,(0),null);
var infos_371007 = cljs.core.nth.call(null,vec__370820_371005,(1),null);
encode_cols.call(null,infos_371007,source_idx_370937,line_370985,col_371006);

var G__371008 = cljs.core.next.call(null,seq__370815_370999__$1);
var G__371009 = null;
var G__371010 = (0);
var G__371011 = (0);
seq__370815_370987 = G__371008;
chunk__370816_370988 = G__371009;
count__370817_370989 = G__371010;
i__370818_370990 = G__371011;
continue;
}
} else {
}
}
break;
}

var G__371012 = cljs.core.next.call(null,seq__370803_370978__$1);
var G__371013 = null;
var G__371014 = (0);
var G__371015 = (0);
seq__370803_370941 = G__371012;
chunk__370804_370942 = G__371013;
count__370805_370943 = G__371014;
i__370806_370944 = G__371015;
continue;
}
} else {
}
}
break;
}

var G__371016 = cljs.core.next.call(null,seq__370777_370930__$1);
var G__371017 = null;
var G__371018 = (0);
var G__371019 = (0);
seq__370777_370841 = G__371016;
chunk__370778_370842 = G__371017;
count__370779_370843 = G__371018;
i__370780_370844 = G__371019;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__370821 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__370720_SHARP_){
return [cljs.core.str(p1__370720_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__370721_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__370721_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__370722_SHARP_){
return clojure.string.join.call(null,",",p1__370722_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__370821__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__370822 = G__370821;
goog.object.set(G__370822,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__370822;
})():G__370821);
return G__370821__$1;
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
var vec__371025 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__371025,(0),null);
var col_map = cljs.core.nth.call(null,vec__371025,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__371026 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__371026,(0),null);
var infos = cljs.core.nth.call(null,vec__371026,(1),null);
var G__371030 = cljs.core.next.call(null,col_map_seq);
var G__371031 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__371026,col,infos,vec__371025,line,col_map){
return (function (v,p__371027){
var map__371028 = p__371027;
var map__371028__$1 = ((((!((map__371028 == null)))?((((map__371028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371028):map__371028);
var gline = cljs.core.get.call(null,map__371028__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__371028__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__371026,col,infos,vec__371025,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__371030;
new_cols = G__371031;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__371032 = cljs.core.next.call(null,line_map_seq);
var G__371033 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__371032;
new_lines = G__371033;
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
var seq__371084_371134 = cljs.core.seq.call(null,reverse_map);
var chunk__371085_371135 = null;
var count__371086_371136 = (0);
var i__371087_371137 = (0);
while(true){
if((i__371087_371137 < count__371086_371136)){
var vec__371088_371138 = cljs.core._nth.call(null,chunk__371085_371135,i__371087_371137);
var line_371139 = cljs.core.nth.call(null,vec__371088_371138,(0),null);
var columns_371140 = cljs.core.nth.call(null,vec__371088_371138,(1),null);
var seq__371089_371141 = cljs.core.seq.call(null,columns_371140);
var chunk__371090_371142 = null;
var count__371091_371143 = (0);
var i__371092_371144 = (0);
while(true){
if((i__371092_371144 < count__371091_371143)){
var vec__371093_371145 = cljs.core._nth.call(null,chunk__371090_371142,i__371092_371144);
var column_371146 = cljs.core.nth.call(null,vec__371093_371145,(0),null);
var column_info_371147 = cljs.core.nth.call(null,vec__371093_371145,(1),null);
var seq__371094_371148 = cljs.core.seq.call(null,column_info_371147);
var chunk__371095_371149 = null;
var count__371096_371150 = (0);
var i__371097_371151 = (0);
while(true){
if((i__371097_371151 < count__371096_371150)){
var map__371098_371152 = cljs.core._nth.call(null,chunk__371095_371149,i__371097_371151);
var map__371098_371153__$1 = ((((!((map__371098_371152 == null)))?((((map__371098_371152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371098_371152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371098_371152):map__371098_371152);
var gline_371154 = cljs.core.get.call(null,map__371098_371153__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_371155 = cljs.core.get.call(null,map__371098_371153__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_371156 = cljs.core.get.call(null,map__371098_371153__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_371154], null),cljs.core.fnil.call(null,((function (seq__371094_371148,chunk__371095_371149,count__371096_371150,i__371097_371151,seq__371089_371141,chunk__371090_371142,count__371091_371143,i__371092_371144,seq__371084_371134,chunk__371085_371135,count__371086_371136,i__371087_371137,map__371098_371152,map__371098_371153__$1,gline_371154,gcol_371155,name_371156,vec__371093_371145,column_371146,column_info_371147,vec__371088_371138,line_371139,columns_371140,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_371146], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_371139,new cljs.core.Keyword(null,"col","col",-1959363084),column_371146,new cljs.core.Keyword(null,"name","name",1843675177),name_371156], null));
});})(seq__371094_371148,chunk__371095_371149,count__371096_371150,i__371097_371151,seq__371089_371141,chunk__371090_371142,count__371091_371143,i__371092_371144,seq__371084_371134,chunk__371085_371135,count__371086_371136,i__371087_371137,map__371098_371152,map__371098_371153__$1,gline_371154,gcol_371155,name_371156,vec__371093_371145,column_371146,column_info_371147,vec__371088_371138,line_371139,columns_371140,inverted))
,cljs.core.sorted_map.call(null)));

var G__371157 = seq__371094_371148;
var G__371158 = chunk__371095_371149;
var G__371159 = count__371096_371150;
var G__371160 = (i__371097_371151 + (1));
seq__371094_371148 = G__371157;
chunk__371095_371149 = G__371158;
count__371096_371150 = G__371159;
i__371097_371151 = G__371160;
continue;
} else {
var temp__4425__auto___371161 = cljs.core.seq.call(null,seq__371094_371148);
if(temp__4425__auto___371161){
var seq__371094_371162__$1 = temp__4425__auto___371161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371094_371162__$1)){
var c__24964__auto___371163 = cljs.core.chunk_first.call(null,seq__371094_371162__$1);
var G__371164 = cljs.core.chunk_rest.call(null,seq__371094_371162__$1);
var G__371165 = c__24964__auto___371163;
var G__371166 = cljs.core.count.call(null,c__24964__auto___371163);
var G__371167 = (0);
seq__371094_371148 = G__371164;
chunk__371095_371149 = G__371165;
count__371096_371150 = G__371166;
i__371097_371151 = G__371167;
continue;
} else {
var map__371100_371168 = cljs.core.first.call(null,seq__371094_371162__$1);
var map__371100_371169__$1 = ((((!((map__371100_371168 == null)))?((((map__371100_371168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371100_371168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371100_371168):map__371100_371168);
var gline_371170 = cljs.core.get.call(null,map__371100_371169__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_371171 = cljs.core.get.call(null,map__371100_371169__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_371172 = cljs.core.get.call(null,map__371100_371169__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_371170], null),cljs.core.fnil.call(null,((function (seq__371094_371148,chunk__371095_371149,count__371096_371150,i__371097_371151,seq__371089_371141,chunk__371090_371142,count__371091_371143,i__371092_371144,seq__371084_371134,chunk__371085_371135,count__371086_371136,i__371087_371137,map__371100_371168,map__371100_371169__$1,gline_371170,gcol_371171,name_371172,seq__371094_371162__$1,temp__4425__auto___371161,vec__371093_371145,column_371146,column_info_371147,vec__371088_371138,line_371139,columns_371140,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_371146], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_371139,new cljs.core.Keyword(null,"col","col",-1959363084),column_371146,new cljs.core.Keyword(null,"name","name",1843675177),name_371172], null));
});})(seq__371094_371148,chunk__371095_371149,count__371096_371150,i__371097_371151,seq__371089_371141,chunk__371090_371142,count__371091_371143,i__371092_371144,seq__371084_371134,chunk__371085_371135,count__371086_371136,i__371087_371137,map__371100_371168,map__371100_371169__$1,gline_371170,gcol_371171,name_371172,seq__371094_371162__$1,temp__4425__auto___371161,vec__371093_371145,column_371146,column_info_371147,vec__371088_371138,line_371139,columns_371140,inverted))
,cljs.core.sorted_map.call(null)));

var G__371173 = cljs.core.next.call(null,seq__371094_371162__$1);
var G__371174 = null;
var G__371175 = (0);
var G__371176 = (0);
seq__371094_371148 = G__371173;
chunk__371095_371149 = G__371174;
count__371096_371150 = G__371175;
i__371097_371151 = G__371176;
continue;
}
} else {
}
}
break;
}

var G__371177 = seq__371089_371141;
var G__371178 = chunk__371090_371142;
var G__371179 = count__371091_371143;
var G__371180 = (i__371092_371144 + (1));
seq__371089_371141 = G__371177;
chunk__371090_371142 = G__371178;
count__371091_371143 = G__371179;
i__371092_371144 = G__371180;
continue;
} else {
var temp__4425__auto___371181 = cljs.core.seq.call(null,seq__371089_371141);
if(temp__4425__auto___371181){
var seq__371089_371182__$1 = temp__4425__auto___371181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371089_371182__$1)){
var c__24964__auto___371183 = cljs.core.chunk_first.call(null,seq__371089_371182__$1);
var G__371184 = cljs.core.chunk_rest.call(null,seq__371089_371182__$1);
var G__371185 = c__24964__auto___371183;
var G__371186 = cljs.core.count.call(null,c__24964__auto___371183);
var G__371187 = (0);
seq__371089_371141 = G__371184;
chunk__371090_371142 = G__371185;
count__371091_371143 = G__371186;
i__371092_371144 = G__371187;
continue;
} else {
var vec__371102_371188 = cljs.core.first.call(null,seq__371089_371182__$1);
var column_371189 = cljs.core.nth.call(null,vec__371102_371188,(0),null);
var column_info_371190 = cljs.core.nth.call(null,vec__371102_371188,(1),null);
var seq__371103_371191 = cljs.core.seq.call(null,column_info_371190);
var chunk__371104_371192 = null;
var count__371105_371193 = (0);
var i__371106_371194 = (0);
while(true){
if((i__371106_371194 < count__371105_371193)){
var map__371107_371195 = cljs.core._nth.call(null,chunk__371104_371192,i__371106_371194);
var map__371107_371196__$1 = ((((!((map__371107_371195 == null)))?((((map__371107_371195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371107_371195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371107_371195):map__371107_371195);
var gline_371197 = cljs.core.get.call(null,map__371107_371196__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_371198 = cljs.core.get.call(null,map__371107_371196__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_371199 = cljs.core.get.call(null,map__371107_371196__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_371197], null),cljs.core.fnil.call(null,((function (seq__371103_371191,chunk__371104_371192,count__371105_371193,i__371106_371194,seq__371089_371141,chunk__371090_371142,count__371091_371143,i__371092_371144,seq__371084_371134,chunk__371085_371135,count__371086_371136,i__371087_371137,map__371107_371195,map__371107_371196__$1,gline_371197,gcol_371198,name_371199,vec__371102_371188,column_371189,column_info_371190,seq__371089_371182__$1,temp__4425__auto___371181,vec__371088_371138,line_371139,columns_371140,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_371189], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_371139,new cljs.core.Keyword(null,"col","col",-1959363084),column_371189,new cljs.core.Keyword(null,"name","name",1843675177),name_371199], null));
});})(seq__371103_371191,chunk__371104_371192,count__371105_371193,i__371106_371194,seq__371089_371141,chunk__371090_371142,count__371091_371143,i__371092_371144,seq__371084_371134,chunk__371085_371135,count__371086_371136,i__371087_371137,map__371107_371195,map__371107_371196__$1,gline_371197,gcol_371198,name_371199,vec__371102_371188,column_371189,column_info_371190,seq__371089_371182__$1,temp__4425__auto___371181,vec__371088_371138,line_371139,columns_371140,inverted))
,cljs.core.sorted_map.call(null)));

var G__371200 = seq__371103_371191;
var G__371201 = chunk__371104_371192;
var G__371202 = count__371105_371193;
var G__371203 = (i__371106_371194 + (1));
seq__371103_371191 = G__371200;
chunk__371104_371192 = G__371201;
count__371105_371193 = G__371202;
i__371106_371194 = G__371203;
continue;
} else {
var temp__4425__auto___371204__$1 = cljs.core.seq.call(null,seq__371103_371191);
if(temp__4425__auto___371204__$1){
var seq__371103_371205__$1 = temp__4425__auto___371204__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371103_371205__$1)){
var c__24964__auto___371206 = cljs.core.chunk_first.call(null,seq__371103_371205__$1);
var G__371207 = cljs.core.chunk_rest.call(null,seq__371103_371205__$1);
var G__371208 = c__24964__auto___371206;
var G__371209 = cljs.core.count.call(null,c__24964__auto___371206);
var G__371210 = (0);
seq__371103_371191 = G__371207;
chunk__371104_371192 = G__371208;
count__371105_371193 = G__371209;
i__371106_371194 = G__371210;
continue;
} else {
var map__371109_371211 = cljs.core.first.call(null,seq__371103_371205__$1);
var map__371109_371212__$1 = ((((!((map__371109_371211 == null)))?((((map__371109_371211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371109_371211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371109_371211):map__371109_371211);
var gline_371213 = cljs.core.get.call(null,map__371109_371212__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_371214 = cljs.core.get.call(null,map__371109_371212__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_371215 = cljs.core.get.call(null,map__371109_371212__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_371213], null),cljs.core.fnil.call(null,((function (seq__371103_371191,chunk__371104_371192,count__371105_371193,i__371106_371194,seq__371089_371141,chunk__371090_371142,count__371091_371143,i__371092_371144,seq__371084_371134,chunk__371085_371135,count__371086_371136,i__371087_371137,map__371109_371211,map__371109_371212__$1,gline_371213,gcol_371214,name_371215,seq__371103_371205__$1,temp__4425__auto___371204__$1,vec__371102_371188,column_371189,column_info_371190,seq__371089_371182__$1,temp__4425__auto___371181,vec__371088_371138,line_371139,columns_371140,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_371189], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_371139,new cljs.core.Keyword(null,"col","col",-1959363084),column_371189,new cljs.core.Keyword(null,"name","name",1843675177),name_371215], null));
});})(seq__371103_371191,chunk__371104_371192,count__371105_371193,i__371106_371194,seq__371089_371141,chunk__371090_371142,count__371091_371143,i__371092_371144,seq__371084_371134,chunk__371085_371135,count__371086_371136,i__371087_371137,map__371109_371211,map__371109_371212__$1,gline_371213,gcol_371214,name_371215,seq__371103_371205__$1,temp__4425__auto___371204__$1,vec__371102_371188,column_371189,column_info_371190,seq__371089_371182__$1,temp__4425__auto___371181,vec__371088_371138,line_371139,columns_371140,inverted))
,cljs.core.sorted_map.call(null)));

var G__371216 = cljs.core.next.call(null,seq__371103_371205__$1);
var G__371217 = null;
var G__371218 = (0);
var G__371219 = (0);
seq__371103_371191 = G__371216;
chunk__371104_371192 = G__371217;
count__371105_371193 = G__371218;
i__371106_371194 = G__371219;
continue;
}
} else {
}
}
break;
}

var G__371220 = cljs.core.next.call(null,seq__371089_371182__$1);
var G__371221 = null;
var G__371222 = (0);
var G__371223 = (0);
seq__371089_371141 = G__371220;
chunk__371090_371142 = G__371221;
count__371091_371143 = G__371222;
i__371092_371144 = G__371223;
continue;
}
} else {
}
}
break;
}

var G__371224 = seq__371084_371134;
var G__371225 = chunk__371085_371135;
var G__371226 = count__371086_371136;
var G__371227 = (i__371087_371137 + (1));
seq__371084_371134 = G__371224;
chunk__371085_371135 = G__371225;
count__371086_371136 = G__371226;
i__371087_371137 = G__371227;
continue;
} else {
var temp__4425__auto___371228 = cljs.core.seq.call(null,seq__371084_371134);
if(temp__4425__auto___371228){
var seq__371084_371229__$1 = temp__4425__auto___371228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371084_371229__$1)){
var c__24964__auto___371230 = cljs.core.chunk_first.call(null,seq__371084_371229__$1);
var G__371231 = cljs.core.chunk_rest.call(null,seq__371084_371229__$1);
var G__371232 = c__24964__auto___371230;
var G__371233 = cljs.core.count.call(null,c__24964__auto___371230);
var G__371234 = (0);
seq__371084_371134 = G__371231;
chunk__371085_371135 = G__371232;
count__371086_371136 = G__371233;
i__371087_371137 = G__371234;
continue;
} else {
var vec__371111_371235 = cljs.core.first.call(null,seq__371084_371229__$1);
var line_371236 = cljs.core.nth.call(null,vec__371111_371235,(0),null);
var columns_371237 = cljs.core.nth.call(null,vec__371111_371235,(1),null);
var seq__371112_371238 = cljs.core.seq.call(null,columns_371237);
var chunk__371113_371239 = null;
var count__371114_371240 = (0);
var i__371115_371241 = (0);
while(true){
if((i__371115_371241 < count__371114_371240)){
var vec__371116_371242 = cljs.core._nth.call(null,chunk__371113_371239,i__371115_371241);
var column_371243 = cljs.core.nth.call(null,vec__371116_371242,(0),null);
var column_info_371244 = cljs.core.nth.call(null,vec__371116_371242,(1),null);
var seq__371117_371245 = cljs.core.seq.call(null,column_info_371244);
var chunk__371118_371246 = null;
var count__371119_371247 = (0);
var i__371120_371248 = (0);
while(true){
if((i__371120_371248 < count__371119_371247)){
var map__371121_371249 = cljs.core._nth.call(null,chunk__371118_371246,i__371120_371248);
var map__371121_371250__$1 = ((((!((map__371121_371249 == null)))?((((map__371121_371249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371121_371249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371121_371249):map__371121_371249);
var gline_371251 = cljs.core.get.call(null,map__371121_371250__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_371252 = cljs.core.get.call(null,map__371121_371250__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_371253 = cljs.core.get.call(null,map__371121_371250__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_371251], null),cljs.core.fnil.call(null,((function (seq__371117_371245,chunk__371118_371246,count__371119_371247,i__371120_371248,seq__371112_371238,chunk__371113_371239,count__371114_371240,i__371115_371241,seq__371084_371134,chunk__371085_371135,count__371086_371136,i__371087_371137,map__371121_371249,map__371121_371250__$1,gline_371251,gcol_371252,name_371253,vec__371116_371242,column_371243,column_info_371244,vec__371111_371235,line_371236,columns_371237,seq__371084_371229__$1,temp__4425__auto___371228,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_371243], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_371236,new cljs.core.Keyword(null,"col","col",-1959363084),column_371243,new cljs.core.Keyword(null,"name","name",1843675177),name_371253], null));
});})(seq__371117_371245,chunk__371118_371246,count__371119_371247,i__371120_371248,seq__371112_371238,chunk__371113_371239,count__371114_371240,i__371115_371241,seq__371084_371134,chunk__371085_371135,count__371086_371136,i__371087_371137,map__371121_371249,map__371121_371250__$1,gline_371251,gcol_371252,name_371253,vec__371116_371242,column_371243,column_info_371244,vec__371111_371235,line_371236,columns_371237,seq__371084_371229__$1,temp__4425__auto___371228,inverted))
,cljs.core.sorted_map.call(null)));

var G__371254 = seq__371117_371245;
var G__371255 = chunk__371118_371246;
var G__371256 = count__371119_371247;
var G__371257 = (i__371120_371248 + (1));
seq__371117_371245 = G__371254;
chunk__371118_371246 = G__371255;
count__371119_371247 = G__371256;
i__371120_371248 = G__371257;
continue;
} else {
var temp__4425__auto___371258__$1 = cljs.core.seq.call(null,seq__371117_371245);
if(temp__4425__auto___371258__$1){
var seq__371117_371259__$1 = temp__4425__auto___371258__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371117_371259__$1)){
var c__24964__auto___371260 = cljs.core.chunk_first.call(null,seq__371117_371259__$1);
var G__371261 = cljs.core.chunk_rest.call(null,seq__371117_371259__$1);
var G__371262 = c__24964__auto___371260;
var G__371263 = cljs.core.count.call(null,c__24964__auto___371260);
var G__371264 = (0);
seq__371117_371245 = G__371261;
chunk__371118_371246 = G__371262;
count__371119_371247 = G__371263;
i__371120_371248 = G__371264;
continue;
} else {
var map__371123_371265 = cljs.core.first.call(null,seq__371117_371259__$1);
var map__371123_371266__$1 = ((((!((map__371123_371265 == null)))?((((map__371123_371265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371123_371265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371123_371265):map__371123_371265);
var gline_371267 = cljs.core.get.call(null,map__371123_371266__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_371268 = cljs.core.get.call(null,map__371123_371266__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_371269 = cljs.core.get.call(null,map__371123_371266__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_371267], null),cljs.core.fnil.call(null,((function (seq__371117_371245,chunk__371118_371246,count__371119_371247,i__371120_371248,seq__371112_371238,chunk__371113_371239,count__371114_371240,i__371115_371241,seq__371084_371134,chunk__371085_371135,count__371086_371136,i__371087_371137,map__371123_371265,map__371123_371266__$1,gline_371267,gcol_371268,name_371269,seq__371117_371259__$1,temp__4425__auto___371258__$1,vec__371116_371242,column_371243,column_info_371244,vec__371111_371235,line_371236,columns_371237,seq__371084_371229__$1,temp__4425__auto___371228,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_371243], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_371236,new cljs.core.Keyword(null,"col","col",-1959363084),column_371243,new cljs.core.Keyword(null,"name","name",1843675177),name_371269], null));
});})(seq__371117_371245,chunk__371118_371246,count__371119_371247,i__371120_371248,seq__371112_371238,chunk__371113_371239,count__371114_371240,i__371115_371241,seq__371084_371134,chunk__371085_371135,count__371086_371136,i__371087_371137,map__371123_371265,map__371123_371266__$1,gline_371267,gcol_371268,name_371269,seq__371117_371259__$1,temp__4425__auto___371258__$1,vec__371116_371242,column_371243,column_info_371244,vec__371111_371235,line_371236,columns_371237,seq__371084_371229__$1,temp__4425__auto___371228,inverted))
,cljs.core.sorted_map.call(null)));

var G__371270 = cljs.core.next.call(null,seq__371117_371259__$1);
var G__371271 = null;
var G__371272 = (0);
var G__371273 = (0);
seq__371117_371245 = G__371270;
chunk__371118_371246 = G__371271;
count__371119_371247 = G__371272;
i__371120_371248 = G__371273;
continue;
}
} else {
}
}
break;
}

var G__371274 = seq__371112_371238;
var G__371275 = chunk__371113_371239;
var G__371276 = count__371114_371240;
var G__371277 = (i__371115_371241 + (1));
seq__371112_371238 = G__371274;
chunk__371113_371239 = G__371275;
count__371114_371240 = G__371276;
i__371115_371241 = G__371277;
continue;
} else {
var temp__4425__auto___371278__$1 = cljs.core.seq.call(null,seq__371112_371238);
if(temp__4425__auto___371278__$1){
var seq__371112_371279__$1 = temp__4425__auto___371278__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371112_371279__$1)){
var c__24964__auto___371280 = cljs.core.chunk_first.call(null,seq__371112_371279__$1);
var G__371281 = cljs.core.chunk_rest.call(null,seq__371112_371279__$1);
var G__371282 = c__24964__auto___371280;
var G__371283 = cljs.core.count.call(null,c__24964__auto___371280);
var G__371284 = (0);
seq__371112_371238 = G__371281;
chunk__371113_371239 = G__371282;
count__371114_371240 = G__371283;
i__371115_371241 = G__371284;
continue;
} else {
var vec__371125_371285 = cljs.core.first.call(null,seq__371112_371279__$1);
var column_371286 = cljs.core.nth.call(null,vec__371125_371285,(0),null);
var column_info_371287 = cljs.core.nth.call(null,vec__371125_371285,(1),null);
var seq__371126_371288 = cljs.core.seq.call(null,column_info_371287);
var chunk__371127_371289 = null;
var count__371128_371290 = (0);
var i__371129_371291 = (0);
while(true){
if((i__371129_371291 < count__371128_371290)){
var map__371130_371292 = cljs.core._nth.call(null,chunk__371127_371289,i__371129_371291);
var map__371130_371293__$1 = ((((!((map__371130_371292 == null)))?((((map__371130_371292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371130_371292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371130_371292):map__371130_371292);
var gline_371294 = cljs.core.get.call(null,map__371130_371293__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_371295 = cljs.core.get.call(null,map__371130_371293__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_371296 = cljs.core.get.call(null,map__371130_371293__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_371294], null),cljs.core.fnil.call(null,((function (seq__371126_371288,chunk__371127_371289,count__371128_371290,i__371129_371291,seq__371112_371238,chunk__371113_371239,count__371114_371240,i__371115_371241,seq__371084_371134,chunk__371085_371135,count__371086_371136,i__371087_371137,map__371130_371292,map__371130_371293__$1,gline_371294,gcol_371295,name_371296,vec__371125_371285,column_371286,column_info_371287,seq__371112_371279__$1,temp__4425__auto___371278__$1,vec__371111_371235,line_371236,columns_371237,seq__371084_371229__$1,temp__4425__auto___371228,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_371286], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_371236,new cljs.core.Keyword(null,"col","col",-1959363084),column_371286,new cljs.core.Keyword(null,"name","name",1843675177),name_371296], null));
});})(seq__371126_371288,chunk__371127_371289,count__371128_371290,i__371129_371291,seq__371112_371238,chunk__371113_371239,count__371114_371240,i__371115_371241,seq__371084_371134,chunk__371085_371135,count__371086_371136,i__371087_371137,map__371130_371292,map__371130_371293__$1,gline_371294,gcol_371295,name_371296,vec__371125_371285,column_371286,column_info_371287,seq__371112_371279__$1,temp__4425__auto___371278__$1,vec__371111_371235,line_371236,columns_371237,seq__371084_371229__$1,temp__4425__auto___371228,inverted))
,cljs.core.sorted_map.call(null)));

var G__371297 = seq__371126_371288;
var G__371298 = chunk__371127_371289;
var G__371299 = count__371128_371290;
var G__371300 = (i__371129_371291 + (1));
seq__371126_371288 = G__371297;
chunk__371127_371289 = G__371298;
count__371128_371290 = G__371299;
i__371129_371291 = G__371300;
continue;
} else {
var temp__4425__auto___371301__$2 = cljs.core.seq.call(null,seq__371126_371288);
if(temp__4425__auto___371301__$2){
var seq__371126_371302__$1 = temp__4425__auto___371301__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371126_371302__$1)){
var c__24964__auto___371303 = cljs.core.chunk_first.call(null,seq__371126_371302__$1);
var G__371304 = cljs.core.chunk_rest.call(null,seq__371126_371302__$1);
var G__371305 = c__24964__auto___371303;
var G__371306 = cljs.core.count.call(null,c__24964__auto___371303);
var G__371307 = (0);
seq__371126_371288 = G__371304;
chunk__371127_371289 = G__371305;
count__371128_371290 = G__371306;
i__371129_371291 = G__371307;
continue;
} else {
var map__371132_371308 = cljs.core.first.call(null,seq__371126_371302__$1);
var map__371132_371309__$1 = ((((!((map__371132_371308 == null)))?((((map__371132_371308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371132_371308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371132_371308):map__371132_371308);
var gline_371310 = cljs.core.get.call(null,map__371132_371309__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_371311 = cljs.core.get.call(null,map__371132_371309__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_371312 = cljs.core.get.call(null,map__371132_371309__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_371310], null),cljs.core.fnil.call(null,((function (seq__371126_371288,chunk__371127_371289,count__371128_371290,i__371129_371291,seq__371112_371238,chunk__371113_371239,count__371114_371240,i__371115_371241,seq__371084_371134,chunk__371085_371135,count__371086_371136,i__371087_371137,map__371132_371308,map__371132_371309__$1,gline_371310,gcol_371311,name_371312,seq__371126_371302__$1,temp__4425__auto___371301__$2,vec__371125_371285,column_371286,column_info_371287,seq__371112_371279__$1,temp__4425__auto___371278__$1,vec__371111_371235,line_371236,columns_371237,seq__371084_371229__$1,temp__4425__auto___371228,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_371286], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_371236,new cljs.core.Keyword(null,"col","col",-1959363084),column_371286,new cljs.core.Keyword(null,"name","name",1843675177),name_371312], null));
});})(seq__371126_371288,chunk__371127_371289,count__371128_371290,i__371129_371291,seq__371112_371238,chunk__371113_371239,count__371114_371240,i__371115_371241,seq__371084_371134,chunk__371085_371135,count__371086_371136,i__371087_371137,map__371132_371308,map__371132_371309__$1,gline_371310,gcol_371311,name_371312,seq__371126_371302__$1,temp__4425__auto___371301__$2,vec__371125_371285,column_371286,column_info_371287,seq__371112_371279__$1,temp__4425__auto___371278__$1,vec__371111_371235,line_371236,columns_371237,seq__371084_371229__$1,temp__4425__auto___371228,inverted))
,cljs.core.sorted_map.call(null)));

var G__371313 = cljs.core.next.call(null,seq__371126_371302__$1);
var G__371314 = null;
var G__371315 = (0);
var G__371316 = (0);
seq__371126_371288 = G__371313;
chunk__371127_371289 = G__371314;
count__371128_371290 = G__371315;
i__371129_371291 = G__371316;
continue;
}
} else {
}
}
break;
}

var G__371317 = cljs.core.next.call(null,seq__371112_371279__$1);
var G__371318 = null;
var G__371319 = (0);
var G__371320 = (0);
seq__371112_371238 = G__371317;
chunk__371113_371239 = G__371318;
count__371114_371240 = G__371319;
i__371115_371241 = G__371320;
continue;
}
} else {
}
}
break;
}

var G__371321 = cljs.core.next.call(null,seq__371084_371229__$1);
var G__371322 = null;
var G__371323 = (0);
var G__371324 = (0);
seq__371084_371134 = G__371321;
chunk__371085_371135 = G__371322;
count__371086_371136 = G__371323;
i__371087_371137 = G__371324;
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