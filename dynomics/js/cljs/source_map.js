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
return cljs.core.reduce.call(null,(function (m,p__197934){
var vec__197935 = p__197934;
var i = cljs.core.nth.call(null,vec__197935,(0),null);
var v = cljs.core.nth.call(null,vec__197935,(1),null);
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
var vec__197937 = seg;
var gcol = cljs.core.nth.call(null,vec__197937,(0),null);
var source = cljs.core.nth.call(null,vec__197937,(1),null);
var line = cljs.core.nth.call(null,vec__197937,(2),null);
var col = cljs.core.nth.call(null,vec__197937,(3),null);
var name = cljs.core.nth.call(null,vec__197937,(4),null);
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
var vec__197940 = seg;
var gcol = cljs.core.nth.call(null,vec__197940,(0),null);
var source = cljs.core.nth.call(null,vec__197940,(1),null);
var line = cljs.core.nth.call(null,vec__197940,(2),null);
var col = cljs.core.nth.call(null,vec__197940,(3),null);
var name = cljs.core.nth.call(null,vec__197940,(4),null);
var vec__197941 = relseg;
var rgcol = cljs.core.nth.call(null,vec__197941,(0),null);
var rsource = cljs.core.nth.call(null,vec__197941,(1),null);
var rline = cljs.core.nth.call(null,vec__197941,(2),null);
var rcol = cljs.core.nth.call(null,vec__197941,(3),null);
var rname = cljs.core.nth.call(null,vec__197941,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__24221__auto__ = source;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__24221__auto__ = line;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__24221__auto__ = col;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__24221__auto__ = name;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
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
var map__197944 = segmap;
var map__197944__$1 = ((((!((map__197944 == null)))?((((map__197944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__197944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__197944):map__197944);
var gcol = cljs.core.get.call(null,map__197944__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__197944__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__197944__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__197944__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__197944__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__197944,map__197944__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__197944,map__197944__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__197944,map__197944__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__197944,map__197944__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__197944,map__197944__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__197944,map__197944__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args197946 = [];
var len__25279__auto___197950 = arguments.length;
var i__25280__auto___197951 = (0);
while(true){
if((i__25280__auto___197951 < len__25279__auto___197950)){
args197946.push((arguments[i__25280__auto___197951]));

var G__197952 = (i__25280__auto___197951 + (1));
i__25280__auto___197951 = G__197952;
continue;
} else {
}
break;
}

var G__197948 = args197946.length;
switch (G__197948) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args197946.length)].join('')));

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
var vec__197949 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__197954 = cljs.core.next.call(null,segs__$1);
var G__197955 = nrelseg;
var G__197956 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__197954;
relseg__$1 = G__197955;
result__$1 = G__197956;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__197949,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__197949,(1),null);
var G__197957 = (gline + (1));
var G__197958 = cljs.core.next.call(null,lines__$1);
var G__197959 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__197960 = result__$1;
gline = G__197957;
lines__$1 = G__197958;
relseg = G__197959;
result = G__197960;
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
var map__197964 = segmap;
var map__197964__$1 = ((((!((map__197964 == null)))?((((map__197964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__197964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__197964):map__197964);
var gcol = cljs.core.get.call(null,map__197964__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__197964__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__197964__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__197964__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__197964__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__197964,map__197964__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__197964,map__197964__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__197961_SHARP_){
return cljs.core.conj.call(null,p1__197961_SHARP_,d__$1);
});})(map__197964,map__197964__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__197964,map__197964__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args197966 = [];
var len__25279__auto___197970 = arguments.length;
var i__25280__auto___197971 = (0);
while(true){
if((i__25280__auto___197971 < len__25279__auto___197970)){
args197966.push((arguments[i__25280__auto___197971]));

var G__197972 = (i__25280__auto___197971 + (1));
i__25280__auto___197971 = G__197972;
continue;
} else {
}
break;
}

var G__197968 = args197966.length;
switch (G__197968) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args197966.length)].join('')));

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
var vec__197969 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__197974 = cljs.core.next.call(null,segs__$1);
var G__197975 = nrelseg;
var G__197976 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__197974;
relseg__$1 = G__197975;
result__$1 = G__197976;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__197969,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__197969,(1),null);
var G__197977 = (gline + (1));
var G__197978 = cljs.core.next.call(null,lines__$1);
var G__197979 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__197980 = result__$1;
gline = G__197977;
lines__$1 = G__197978;
relseg = G__197979;
result = G__197980;
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
return (function (p__197987){
var vec__197988 = p__197987;
var _ = cljs.core.nth.call(null,vec__197988,(0),null);
var source = cljs.core.nth.call(null,vec__197988,(1),null);
var line = cljs.core.nth.call(null,vec__197988,(2),null);
var col = cljs.core.nth.call(null,vec__197988,(3),null);
var name = cljs.core.nth.call(null,vec__197988,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__197989){
var vec__197990 = p__197989;
var gcol = cljs.core.nth.call(null,vec__197990,(0),null);
var sidx = cljs.core.nth.call(null,vec__197990,(1),null);
var line = cljs.core.nth.call(null,vec__197990,(2),null);
var col = cljs.core.nth.call(null,vec__197990,(3),null);
var name = cljs.core.nth.call(null,vec__197990,(4),null);
var seg = vec__197990;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__197990,gcol,sidx,line,col,name,seg,relseg){
return (function (p__197991){
var vec__197992 = p__197991;
var _ = cljs.core.nth.call(null,vec__197992,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__197992,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__197992,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__197992,(3),null);
var lname = cljs.core.nth.call(null,vec__197992,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__24221__auto__ = name;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__197990,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__24221__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
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
var seq__198046 = cljs.core.seq.call(null,infos);
var chunk__198047 = null;
var count__198048 = (0);
var i__198049 = (0);
while(true){
if((i__198049 < count__198048)){
var info = cljs.core._nth.call(null,chunk__198047,i__198049);
var segv_198096 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_198097 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_198098 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_198097 > (lc_198098 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__198046,chunk__198047,count__198048,i__198049,segv_198096,gline_198097,lc_198098,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_198097 - (lc_198098 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_198096], null));
});})(seq__198046,chunk__198047,count__198048,i__198049,segv_198096,gline_198097,lc_198098,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__198046,chunk__198047,count__198048,i__198049,segv_198096,gline_198097,lc_198098,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_198097], null),cljs.core.conj,segv_198096);
});})(seq__198046,chunk__198047,count__198048,i__198049,segv_198096,gline_198097,lc_198098,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__198099 = seq__198046;
var G__198100 = chunk__198047;
var G__198101 = count__198048;
var G__198102 = (i__198049 + (1));
seq__198046 = G__198099;
chunk__198047 = G__198100;
count__198048 = G__198101;
i__198049 = G__198102;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__198046);
if(temp__4425__auto__){
var seq__198046__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198046__$1)){
var c__25024__auto__ = cljs.core.chunk_first.call(null,seq__198046__$1);
var G__198103 = cljs.core.chunk_rest.call(null,seq__198046__$1);
var G__198104 = c__25024__auto__;
var G__198105 = cljs.core.count.call(null,c__25024__auto__);
var G__198106 = (0);
seq__198046 = G__198103;
chunk__198047 = G__198104;
count__198048 = G__198105;
i__198049 = G__198106;
continue;
} else {
var info = cljs.core.first.call(null,seq__198046__$1);
var segv_198107 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_198108 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_198109 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_198108 > (lc_198109 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__198046,chunk__198047,count__198048,i__198049,segv_198107,gline_198108,lc_198109,info,seq__198046__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_198108 - (lc_198109 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_198107], null));
});})(seq__198046,chunk__198047,count__198048,i__198049,segv_198107,gline_198108,lc_198109,info,seq__198046__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__198046,chunk__198047,count__198048,i__198049,segv_198107,gline_198108,lc_198109,info,seq__198046__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_198108], null),cljs.core.conj,segv_198107);
});})(seq__198046,chunk__198047,count__198048,i__198049,segv_198107,gline_198108,lc_198109,info,seq__198046__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__198110 = cljs.core.next.call(null,seq__198046__$1);
var G__198111 = null;
var G__198112 = (0);
var G__198113 = (0);
seq__198046 = G__198110;
chunk__198047 = G__198111;
count__198048 = G__198112;
i__198049 = G__198113;
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
var seq__198050_198114 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__198051_198115 = null;
var count__198052_198116 = (0);
var i__198053_198117 = (0);
while(true){
if((i__198053_198117 < count__198052_198116)){
var vec__198054_198118 = cljs.core._nth.call(null,chunk__198051_198115,i__198053_198117);
var source_idx_198119 = cljs.core.nth.call(null,vec__198054_198118,(0),null);
var vec__198055_198120 = cljs.core.nth.call(null,vec__198054_198118,(1),null);
var __198121 = cljs.core.nth.call(null,vec__198055_198120,(0),null);
var lines_198122__$1 = cljs.core.nth.call(null,vec__198055_198120,(1),null);
var seq__198056_198123 = cljs.core.seq.call(null,lines_198122__$1);
var chunk__198057_198124 = null;
var count__198058_198125 = (0);
var i__198059_198126 = (0);
while(true){
if((i__198059_198126 < count__198058_198125)){
var vec__198060_198127 = cljs.core._nth.call(null,chunk__198057_198124,i__198059_198126);
var line_198128 = cljs.core.nth.call(null,vec__198060_198127,(0),null);
var cols_198129 = cljs.core.nth.call(null,vec__198060_198127,(1),null);
var seq__198061_198130 = cljs.core.seq.call(null,cols_198129);
var chunk__198062_198131 = null;
var count__198063_198132 = (0);
var i__198064_198133 = (0);
while(true){
if((i__198064_198133 < count__198063_198132)){
var vec__198065_198134 = cljs.core._nth.call(null,chunk__198062_198131,i__198064_198133);
var col_198135 = cljs.core.nth.call(null,vec__198065_198134,(0),null);
var infos_198136 = cljs.core.nth.call(null,vec__198065_198134,(1),null);
encode_cols.call(null,infos_198136,source_idx_198119,line_198128,col_198135);

var G__198137 = seq__198061_198130;
var G__198138 = chunk__198062_198131;
var G__198139 = count__198063_198132;
var G__198140 = (i__198064_198133 + (1));
seq__198061_198130 = G__198137;
chunk__198062_198131 = G__198138;
count__198063_198132 = G__198139;
i__198064_198133 = G__198140;
continue;
} else {
var temp__4425__auto___198141 = cljs.core.seq.call(null,seq__198061_198130);
if(temp__4425__auto___198141){
var seq__198061_198142__$1 = temp__4425__auto___198141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198061_198142__$1)){
var c__25024__auto___198143 = cljs.core.chunk_first.call(null,seq__198061_198142__$1);
var G__198144 = cljs.core.chunk_rest.call(null,seq__198061_198142__$1);
var G__198145 = c__25024__auto___198143;
var G__198146 = cljs.core.count.call(null,c__25024__auto___198143);
var G__198147 = (0);
seq__198061_198130 = G__198144;
chunk__198062_198131 = G__198145;
count__198063_198132 = G__198146;
i__198064_198133 = G__198147;
continue;
} else {
var vec__198066_198148 = cljs.core.first.call(null,seq__198061_198142__$1);
var col_198149 = cljs.core.nth.call(null,vec__198066_198148,(0),null);
var infos_198150 = cljs.core.nth.call(null,vec__198066_198148,(1),null);
encode_cols.call(null,infos_198150,source_idx_198119,line_198128,col_198149);

var G__198151 = cljs.core.next.call(null,seq__198061_198142__$1);
var G__198152 = null;
var G__198153 = (0);
var G__198154 = (0);
seq__198061_198130 = G__198151;
chunk__198062_198131 = G__198152;
count__198063_198132 = G__198153;
i__198064_198133 = G__198154;
continue;
}
} else {
}
}
break;
}

var G__198155 = seq__198056_198123;
var G__198156 = chunk__198057_198124;
var G__198157 = count__198058_198125;
var G__198158 = (i__198059_198126 + (1));
seq__198056_198123 = G__198155;
chunk__198057_198124 = G__198156;
count__198058_198125 = G__198157;
i__198059_198126 = G__198158;
continue;
} else {
var temp__4425__auto___198159 = cljs.core.seq.call(null,seq__198056_198123);
if(temp__4425__auto___198159){
var seq__198056_198160__$1 = temp__4425__auto___198159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198056_198160__$1)){
var c__25024__auto___198161 = cljs.core.chunk_first.call(null,seq__198056_198160__$1);
var G__198162 = cljs.core.chunk_rest.call(null,seq__198056_198160__$1);
var G__198163 = c__25024__auto___198161;
var G__198164 = cljs.core.count.call(null,c__25024__auto___198161);
var G__198165 = (0);
seq__198056_198123 = G__198162;
chunk__198057_198124 = G__198163;
count__198058_198125 = G__198164;
i__198059_198126 = G__198165;
continue;
} else {
var vec__198067_198166 = cljs.core.first.call(null,seq__198056_198160__$1);
var line_198167 = cljs.core.nth.call(null,vec__198067_198166,(0),null);
var cols_198168 = cljs.core.nth.call(null,vec__198067_198166,(1),null);
var seq__198068_198169 = cljs.core.seq.call(null,cols_198168);
var chunk__198069_198170 = null;
var count__198070_198171 = (0);
var i__198071_198172 = (0);
while(true){
if((i__198071_198172 < count__198070_198171)){
var vec__198072_198173 = cljs.core._nth.call(null,chunk__198069_198170,i__198071_198172);
var col_198174 = cljs.core.nth.call(null,vec__198072_198173,(0),null);
var infos_198175 = cljs.core.nth.call(null,vec__198072_198173,(1),null);
encode_cols.call(null,infos_198175,source_idx_198119,line_198167,col_198174);

var G__198176 = seq__198068_198169;
var G__198177 = chunk__198069_198170;
var G__198178 = count__198070_198171;
var G__198179 = (i__198071_198172 + (1));
seq__198068_198169 = G__198176;
chunk__198069_198170 = G__198177;
count__198070_198171 = G__198178;
i__198071_198172 = G__198179;
continue;
} else {
var temp__4425__auto___198180__$1 = cljs.core.seq.call(null,seq__198068_198169);
if(temp__4425__auto___198180__$1){
var seq__198068_198181__$1 = temp__4425__auto___198180__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198068_198181__$1)){
var c__25024__auto___198182 = cljs.core.chunk_first.call(null,seq__198068_198181__$1);
var G__198183 = cljs.core.chunk_rest.call(null,seq__198068_198181__$1);
var G__198184 = c__25024__auto___198182;
var G__198185 = cljs.core.count.call(null,c__25024__auto___198182);
var G__198186 = (0);
seq__198068_198169 = G__198183;
chunk__198069_198170 = G__198184;
count__198070_198171 = G__198185;
i__198071_198172 = G__198186;
continue;
} else {
var vec__198073_198187 = cljs.core.first.call(null,seq__198068_198181__$1);
var col_198188 = cljs.core.nth.call(null,vec__198073_198187,(0),null);
var infos_198189 = cljs.core.nth.call(null,vec__198073_198187,(1),null);
encode_cols.call(null,infos_198189,source_idx_198119,line_198167,col_198188);

var G__198190 = cljs.core.next.call(null,seq__198068_198181__$1);
var G__198191 = null;
var G__198192 = (0);
var G__198193 = (0);
seq__198068_198169 = G__198190;
chunk__198069_198170 = G__198191;
count__198070_198171 = G__198192;
i__198071_198172 = G__198193;
continue;
}
} else {
}
}
break;
}

var G__198194 = cljs.core.next.call(null,seq__198056_198160__$1);
var G__198195 = null;
var G__198196 = (0);
var G__198197 = (0);
seq__198056_198123 = G__198194;
chunk__198057_198124 = G__198195;
count__198058_198125 = G__198196;
i__198059_198126 = G__198197;
continue;
}
} else {
}
}
break;
}

var G__198198 = seq__198050_198114;
var G__198199 = chunk__198051_198115;
var G__198200 = count__198052_198116;
var G__198201 = (i__198053_198117 + (1));
seq__198050_198114 = G__198198;
chunk__198051_198115 = G__198199;
count__198052_198116 = G__198200;
i__198053_198117 = G__198201;
continue;
} else {
var temp__4425__auto___198202 = cljs.core.seq.call(null,seq__198050_198114);
if(temp__4425__auto___198202){
var seq__198050_198203__$1 = temp__4425__auto___198202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198050_198203__$1)){
var c__25024__auto___198204 = cljs.core.chunk_first.call(null,seq__198050_198203__$1);
var G__198205 = cljs.core.chunk_rest.call(null,seq__198050_198203__$1);
var G__198206 = c__25024__auto___198204;
var G__198207 = cljs.core.count.call(null,c__25024__auto___198204);
var G__198208 = (0);
seq__198050_198114 = G__198205;
chunk__198051_198115 = G__198206;
count__198052_198116 = G__198207;
i__198053_198117 = G__198208;
continue;
} else {
var vec__198074_198209 = cljs.core.first.call(null,seq__198050_198203__$1);
var source_idx_198210 = cljs.core.nth.call(null,vec__198074_198209,(0),null);
var vec__198075_198211 = cljs.core.nth.call(null,vec__198074_198209,(1),null);
var __198212 = cljs.core.nth.call(null,vec__198075_198211,(0),null);
var lines_198213__$1 = cljs.core.nth.call(null,vec__198075_198211,(1),null);
var seq__198076_198214 = cljs.core.seq.call(null,lines_198213__$1);
var chunk__198077_198215 = null;
var count__198078_198216 = (0);
var i__198079_198217 = (0);
while(true){
if((i__198079_198217 < count__198078_198216)){
var vec__198080_198218 = cljs.core._nth.call(null,chunk__198077_198215,i__198079_198217);
var line_198219 = cljs.core.nth.call(null,vec__198080_198218,(0),null);
var cols_198220 = cljs.core.nth.call(null,vec__198080_198218,(1),null);
var seq__198081_198221 = cljs.core.seq.call(null,cols_198220);
var chunk__198082_198222 = null;
var count__198083_198223 = (0);
var i__198084_198224 = (0);
while(true){
if((i__198084_198224 < count__198083_198223)){
var vec__198085_198225 = cljs.core._nth.call(null,chunk__198082_198222,i__198084_198224);
var col_198226 = cljs.core.nth.call(null,vec__198085_198225,(0),null);
var infos_198227 = cljs.core.nth.call(null,vec__198085_198225,(1),null);
encode_cols.call(null,infos_198227,source_idx_198210,line_198219,col_198226);

var G__198228 = seq__198081_198221;
var G__198229 = chunk__198082_198222;
var G__198230 = count__198083_198223;
var G__198231 = (i__198084_198224 + (1));
seq__198081_198221 = G__198228;
chunk__198082_198222 = G__198229;
count__198083_198223 = G__198230;
i__198084_198224 = G__198231;
continue;
} else {
var temp__4425__auto___198232__$1 = cljs.core.seq.call(null,seq__198081_198221);
if(temp__4425__auto___198232__$1){
var seq__198081_198233__$1 = temp__4425__auto___198232__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198081_198233__$1)){
var c__25024__auto___198234 = cljs.core.chunk_first.call(null,seq__198081_198233__$1);
var G__198235 = cljs.core.chunk_rest.call(null,seq__198081_198233__$1);
var G__198236 = c__25024__auto___198234;
var G__198237 = cljs.core.count.call(null,c__25024__auto___198234);
var G__198238 = (0);
seq__198081_198221 = G__198235;
chunk__198082_198222 = G__198236;
count__198083_198223 = G__198237;
i__198084_198224 = G__198238;
continue;
} else {
var vec__198086_198239 = cljs.core.first.call(null,seq__198081_198233__$1);
var col_198240 = cljs.core.nth.call(null,vec__198086_198239,(0),null);
var infos_198241 = cljs.core.nth.call(null,vec__198086_198239,(1),null);
encode_cols.call(null,infos_198241,source_idx_198210,line_198219,col_198240);

var G__198242 = cljs.core.next.call(null,seq__198081_198233__$1);
var G__198243 = null;
var G__198244 = (0);
var G__198245 = (0);
seq__198081_198221 = G__198242;
chunk__198082_198222 = G__198243;
count__198083_198223 = G__198244;
i__198084_198224 = G__198245;
continue;
}
} else {
}
}
break;
}

var G__198246 = seq__198076_198214;
var G__198247 = chunk__198077_198215;
var G__198248 = count__198078_198216;
var G__198249 = (i__198079_198217 + (1));
seq__198076_198214 = G__198246;
chunk__198077_198215 = G__198247;
count__198078_198216 = G__198248;
i__198079_198217 = G__198249;
continue;
} else {
var temp__4425__auto___198250__$1 = cljs.core.seq.call(null,seq__198076_198214);
if(temp__4425__auto___198250__$1){
var seq__198076_198251__$1 = temp__4425__auto___198250__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198076_198251__$1)){
var c__25024__auto___198252 = cljs.core.chunk_first.call(null,seq__198076_198251__$1);
var G__198253 = cljs.core.chunk_rest.call(null,seq__198076_198251__$1);
var G__198254 = c__25024__auto___198252;
var G__198255 = cljs.core.count.call(null,c__25024__auto___198252);
var G__198256 = (0);
seq__198076_198214 = G__198253;
chunk__198077_198215 = G__198254;
count__198078_198216 = G__198255;
i__198079_198217 = G__198256;
continue;
} else {
var vec__198087_198257 = cljs.core.first.call(null,seq__198076_198251__$1);
var line_198258 = cljs.core.nth.call(null,vec__198087_198257,(0),null);
var cols_198259 = cljs.core.nth.call(null,vec__198087_198257,(1),null);
var seq__198088_198260 = cljs.core.seq.call(null,cols_198259);
var chunk__198089_198261 = null;
var count__198090_198262 = (0);
var i__198091_198263 = (0);
while(true){
if((i__198091_198263 < count__198090_198262)){
var vec__198092_198264 = cljs.core._nth.call(null,chunk__198089_198261,i__198091_198263);
var col_198265 = cljs.core.nth.call(null,vec__198092_198264,(0),null);
var infos_198266 = cljs.core.nth.call(null,vec__198092_198264,(1),null);
encode_cols.call(null,infos_198266,source_idx_198210,line_198258,col_198265);

var G__198267 = seq__198088_198260;
var G__198268 = chunk__198089_198261;
var G__198269 = count__198090_198262;
var G__198270 = (i__198091_198263 + (1));
seq__198088_198260 = G__198267;
chunk__198089_198261 = G__198268;
count__198090_198262 = G__198269;
i__198091_198263 = G__198270;
continue;
} else {
var temp__4425__auto___198271__$2 = cljs.core.seq.call(null,seq__198088_198260);
if(temp__4425__auto___198271__$2){
var seq__198088_198272__$1 = temp__4425__auto___198271__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198088_198272__$1)){
var c__25024__auto___198273 = cljs.core.chunk_first.call(null,seq__198088_198272__$1);
var G__198274 = cljs.core.chunk_rest.call(null,seq__198088_198272__$1);
var G__198275 = c__25024__auto___198273;
var G__198276 = cljs.core.count.call(null,c__25024__auto___198273);
var G__198277 = (0);
seq__198088_198260 = G__198274;
chunk__198089_198261 = G__198275;
count__198090_198262 = G__198276;
i__198091_198263 = G__198277;
continue;
} else {
var vec__198093_198278 = cljs.core.first.call(null,seq__198088_198272__$1);
var col_198279 = cljs.core.nth.call(null,vec__198093_198278,(0),null);
var infos_198280 = cljs.core.nth.call(null,vec__198093_198278,(1),null);
encode_cols.call(null,infos_198280,source_idx_198210,line_198258,col_198279);

var G__198281 = cljs.core.next.call(null,seq__198088_198272__$1);
var G__198282 = null;
var G__198283 = (0);
var G__198284 = (0);
seq__198088_198260 = G__198281;
chunk__198089_198261 = G__198282;
count__198090_198262 = G__198283;
i__198091_198263 = G__198284;
continue;
}
} else {
}
}
break;
}

var G__198285 = cljs.core.next.call(null,seq__198076_198251__$1);
var G__198286 = null;
var G__198287 = (0);
var G__198288 = (0);
seq__198076_198214 = G__198285;
chunk__198077_198215 = G__198286;
count__198078_198216 = G__198287;
i__198079_198217 = G__198288;
continue;
}
} else {
}
}
break;
}

var G__198289 = cljs.core.next.call(null,seq__198050_198203__$1);
var G__198290 = null;
var G__198291 = (0);
var G__198292 = (0);
seq__198050_198114 = G__198289;
chunk__198051_198115 = G__198290;
count__198052_198116 = G__198291;
i__198053_198117 = G__198292;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__198094 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__197993_SHARP_){
return [cljs.core.str(p1__197993_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__197994_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__197994_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__197995_SHARP_){
return clojure.string.join.call(null,",",p1__197995_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__198094__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__198095 = G__198094;
goog.object.set(G__198095,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__198095;
})():G__198094);
return G__198094__$1;
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
var vec__198298 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__198298,(0),null);
var col_map = cljs.core.nth.call(null,vec__198298,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__198299 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__198299,(0),null);
var infos = cljs.core.nth.call(null,vec__198299,(1),null);
var G__198303 = cljs.core.next.call(null,col_map_seq);
var G__198304 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__198299,col,infos,vec__198298,line,col_map){
return (function (v,p__198300){
var map__198301 = p__198300;
var map__198301__$1 = ((((!((map__198301 == null)))?((((map__198301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198301):map__198301);
var gline = cljs.core.get.call(null,map__198301__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__198301__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__198299,col,infos,vec__198298,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__198303;
new_cols = G__198304;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__198305 = cljs.core.next.call(null,line_map_seq);
var G__198306 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__198305;
new_lines = G__198306;
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
var seq__198357_198407 = cljs.core.seq.call(null,reverse_map);
var chunk__198358_198408 = null;
var count__198359_198409 = (0);
var i__198360_198410 = (0);
while(true){
if((i__198360_198410 < count__198359_198409)){
var vec__198361_198411 = cljs.core._nth.call(null,chunk__198358_198408,i__198360_198410);
var line_198412 = cljs.core.nth.call(null,vec__198361_198411,(0),null);
var columns_198413 = cljs.core.nth.call(null,vec__198361_198411,(1),null);
var seq__198362_198414 = cljs.core.seq.call(null,columns_198413);
var chunk__198363_198415 = null;
var count__198364_198416 = (0);
var i__198365_198417 = (0);
while(true){
if((i__198365_198417 < count__198364_198416)){
var vec__198366_198418 = cljs.core._nth.call(null,chunk__198363_198415,i__198365_198417);
var column_198419 = cljs.core.nth.call(null,vec__198366_198418,(0),null);
var column_info_198420 = cljs.core.nth.call(null,vec__198366_198418,(1),null);
var seq__198367_198421 = cljs.core.seq.call(null,column_info_198420);
var chunk__198368_198422 = null;
var count__198369_198423 = (0);
var i__198370_198424 = (0);
while(true){
if((i__198370_198424 < count__198369_198423)){
var map__198371_198425 = cljs.core._nth.call(null,chunk__198368_198422,i__198370_198424);
var map__198371_198426__$1 = ((((!((map__198371_198425 == null)))?((((map__198371_198425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198371_198425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198371_198425):map__198371_198425);
var gline_198427 = cljs.core.get.call(null,map__198371_198426__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_198428 = cljs.core.get.call(null,map__198371_198426__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_198429 = cljs.core.get.call(null,map__198371_198426__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_198427], null),cljs.core.fnil.call(null,((function (seq__198367_198421,chunk__198368_198422,count__198369_198423,i__198370_198424,seq__198362_198414,chunk__198363_198415,count__198364_198416,i__198365_198417,seq__198357_198407,chunk__198358_198408,count__198359_198409,i__198360_198410,map__198371_198425,map__198371_198426__$1,gline_198427,gcol_198428,name_198429,vec__198366_198418,column_198419,column_info_198420,vec__198361_198411,line_198412,columns_198413,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_198419], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_198412,new cljs.core.Keyword(null,"col","col",-1959363084),column_198419,new cljs.core.Keyword(null,"name","name",1843675177),name_198429], null));
});})(seq__198367_198421,chunk__198368_198422,count__198369_198423,i__198370_198424,seq__198362_198414,chunk__198363_198415,count__198364_198416,i__198365_198417,seq__198357_198407,chunk__198358_198408,count__198359_198409,i__198360_198410,map__198371_198425,map__198371_198426__$1,gline_198427,gcol_198428,name_198429,vec__198366_198418,column_198419,column_info_198420,vec__198361_198411,line_198412,columns_198413,inverted))
,cljs.core.sorted_map.call(null)));

var G__198430 = seq__198367_198421;
var G__198431 = chunk__198368_198422;
var G__198432 = count__198369_198423;
var G__198433 = (i__198370_198424 + (1));
seq__198367_198421 = G__198430;
chunk__198368_198422 = G__198431;
count__198369_198423 = G__198432;
i__198370_198424 = G__198433;
continue;
} else {
var temp__4425__auto___198434 = cljs.core.seq.call(null,seq__198367_198421);
if(temp__4425__auto___198434){
var seq__198367_198435__$1 = temp__4425__auto___198434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198367_198435__$1)){
var c__25024__auto___198436 = cljs.core.chunk_first.call(null,seq__198367_198435__$1);
var G__198437 = cljs.core.chunk_rest.call(null,seq__198367_198435__$1);
var G__198438 = c__25024__auto___198436;
var G__198439 = cljs.core.count.call(null,c__25024__auto___198436);
var G__198440 = (0);
seq__198367_198421 = G__198437;
chunk__198368_198422 = G__198438;
count__198369_198423 = G__198439;
i__198370_198424 = G__198440;
continue;
} else {
var map__198373_198441 = cljs.core.first.call(null,seq__198367_198435__$1);
var map__198373_198442__$1 = ((((!((map__198373_198441 == null)))?((((map__198373_198441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198373_198441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198373_198441):map__198373_198441);
var gline_198443 = cljs.core.get.call(null,map__198373_198442__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_198444 = cljs.core.get.call(null,map__198373_198442__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_198445 = cljs.core.get.call(null,map__198373_198442__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_198443], null),cljs.core.fnil.call(null,((function (seq__198367_198421,chunk__198368_198422,count__198369_198423,i__198370_198424,seq__198362_198414,chunk__198363_198415,count__198364_198416,i__198365_198417,seq__198357_198407,chunk__198358_198408,count__198359_198409,i__198360_198410,map__198373_198441,map__198373_198442__$1,gline_198443,gcol_198444,name_198445,seq__198367_198435__$1,temp__4425__auto___198434,vec__198366_198418,column_198419,column_info_198420,vec__198361_198411,line_198412,columns_198413,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_198419], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_198412,new cljs.core.Keyword(null,"col","col",-1959363084),column_198419,new cljs.core.Keyword(null,"name","name",1843675177),name_198445], null));
});})(seq__198367_198421,chunk__198368_198422,count__198369_198423,i__198370_198424,seq__198362_198414,chunk__198363_198415,count__198364_198416,i__198365_198417,seq__198357_198407,chunk__198358_198408,count__198359_198409,i__198360_198410,map__198373_198441,map__198373_198442__$1,gline_198443,gcol_198444,name_198445,seq__198367_198435__$1,temp__4425__auto___198434,vec__198366_198418,column_198419,column_info_198420,vec__198361_198411,line_198412,columns_198413,inverted))
,cljs.core.sorted_map.call(null)));

var G__198446 = cljs.core.next.call(null,seq__198367_198435__$1);
var G__198447 = null;
var G__198448 = (0);
var G__198449 = (0);
seq__198367_198421 = G__198446;
chunk__198368_198422 = G__198447;
count__198369_198423 = G__198448;
i__198370_198424 = G__198449;
continue;
}
} else {
}
}
break;
}

var G__198450 = seq__198362_198414;
var G__198451 = chunk__198363_198415;
var G__198452 = count__198364_198416;
var G__198453 = (i__198365_198417 + (1));
seq__198362_198414 = G__198450;
chunk__198363_198415 = G__198451;
count__198364_198416 = G__198452;
i__198365_198417 = G__198453;
continue;
} else {
var temp__4425__auto___198454 = cljs.core.seq.call(null,seq__198362_198414);
if(temp__4425__auto___198454){
var seq__198362_198455__$1 = temp__4425__auto___198454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198362_198455__$1)){
var c__25024__auto___198456 = cljs.core.chunk_first.call(null,seq__198362_198455__$1);
var G__198457 = cljs.core.chunk_rest.call(null,seq__198362_198455__$1);
var G__198458 = c__25024__auto___198456;
var G__198459 = cljs.core.count.call(null,c__25024__auto___198456);
var G__198460 = (0);
seq__198362_198414 = G__198457;
chunk__198363_198415 = G__198458;
count__198364_198416 = G__198459;
i__198365_198417 = G__198460;
continue;
} else {
var vec__198375_198461 = cljs.core.first.call(null,seq__198362_198455__$1);
var column_198462 = cljs.core.nth.call(null,vec__198375_198461,(0),null);
var column_info_198463 = cljs.core.nth.call(null,vec__198375_198461,(1),null);
var seq__198376_198464 = cljs.core.seq.call(null,column_info_198463);
var chunk__198377_198465 = null;
var count__198378_198466 = (0);
var i__198379_198467 = (0);
while(true){
if((i__198379_198467 < count__198378_198466)){
var map__198380_198468 = cljs.core._nth.call(null,chunk__198377_198465,i__198379_198467);
var map__198380_198469__$1 = ((((!((map__198380_198468 == null)))?((((map__198380_198468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198380_198468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198380_198468):map__198380_198468);
var gline_198470 = cljs.core.get.call(null,map__198380_198469__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_198471 = cljs.core.get.call(null,map__198380_198469__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_198472 = cljs.core.get.call(null,map__198380_198469__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_198470], null),cljs.core.fnil.call(null,((function (seq__198376_198464,chunk__198377_198465,count__198378_198466,i__198379_198467,seq__198362_198414,chunk__198363_198415,count__198364_198416,i__198365_198417,seq__198357_198407,chunk__198358_198408,count__198359_198409,i__198360_198410,map__198380_198468,map__198380_198469__$1,gline_198470,gcol_198471,name_198472,vec__198375_198461,column_198462,column_info_198463,seq__198362_198455__$1,temp__4425__auto___198454,vec__198361_198411,line_198412,columns_198413,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_198462], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_198412,new cljs.core.Keyword(null,"col","col",-1959363084),column_198462,new cljs.core.Keyword(null,"name","name",1843675177),name_198472], null));
});})(seq__198376_198464,chunk__198377_198465,count__198378_198466,i__198379_198467,seq__198362_198414,chunk__198363_198415,count__198364_198416,i__198365_198417,seq__198357_198407,chunk__198358_198408,count__198359_198409,i__198360_198410,map__198380_198468,map__198380_198469__$1,gline_198470,gcol_198471,name_198472,vec__198375_198461,column_198462,column_info_198463,seq__198362_198455__$1,temp__4425__auto___198454,vec__198361_198411,line_198412,columns_198413,inverted))
,cljs.core.sorted_map.call(null)));

var G__198473 = seq__198376_198464;
var G__198474 = chunk__198377_198465;
var G__198475 = count__198378_198466;
var G__198476 = (i__198379_198467 + (1));
seq__198376_198464 = G__198473;
chunk__198377_198465 = G__198474;
count__198378_198466 = G__198475;
i__198379_198467 = G__198476;
continue;
} else {
var temp__4425__auto___198477__$1 = cljs.core.seq.call(null,seq__198376_198464);
if(temp__4425__auto___198477__$1){
var seq__198376_198478__$1 = temp__4425__auto___198477__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198376_198478__$1)){
var c__25024__auto___198479 = cljs.core.chunk_first.call(null,seq__198376_198478__$1);
var G__198480 = cljs.core.chunk_rest.call(null,seq__198376_198478__$1);
var G__198481 = c__25024__auto___198479;
var G__198482 = cljs.core.count.call(null,c__25024__auto___198479);
var G__198483 = (0);
seq__198376_198464 = G__198480;
chunk__198377_198465 = G__198481;
count__198378_198466 = G__198482;
i__198379_198467 = G__198483;
continue;
} else {
var map__198382_198484 = cljs.core.first.call(null,seq__198376_198478__$1);
var map__198382_198485__$1 = ((((!((map__198382_198484 == null)))?((((map__198382_198484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198382_198484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198382_198484):map__198382_198484);
var gline_198486 = cljs.core.get.call(null,map__198382_198485__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_198487 = cljs.core.get.call(null,map__198382_198485__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_198488 = cljs.core.get.call(null,map__198382_198485__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_198486], null),cljs.core.fnil.call(null,((function (seq__198376_198464,chunk__198377_198465,count__198378_198466,i__198379_198467,seq__198362_198414,chunk__198363_198415,count__198364_198416,i__198365_198417,seq__198357_198407,chunk__198358_198408,count__198359_198409,i__198360_198410,map__198382_198484,map__198382_198485__$1,gline_198486,gcol_198487,name_198488,seq__198376_198478__$1,temp__4425__auto___198477__$1,vec__198375_198461,column_198462,column_info_198463,seq__198362_198455__$1,temp__4425__auto___198454,vec__198361_198411,line_198412,columns_198413,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_198462], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_198412,new cljs.core.Keyword(null,"col","col",-1959363084),column_198462,new cljs.core.Keyword(null,"name","name",1843675177),name_198488], null));
});})(seq__198376_198464,chunk__198377_198465,count__198378_198466,i__198379_198467,seq__198362_198414,chunk__198363_198415,count__198364_198416,i__198365_198417,seq__198357_198407,chunk__198358_198408,count__198359_198409,i__198360_198410,map__198382_198484,map__198382_198485__$1,gline_198486,gcol_198487,name_198488,seq__198376_198478__$1,temp__4425__auto___198477__$1,vec__198375_198461,column_198462,column_info_198463,seq__198362_198455__$1,temp__4425__auto___198454,vec__198361_198411,line_198412,columns_198413,inverted))
,cljs.core.sorted_map.call(null)));

var G__198489 = cljs.core.next.call(null,seq__198376_198478__$1);
var G__198490 = null;
var G__198491 = (0);
var G__198492 = (0);
seq__198376_198464 = G__198489;
chunk__198377_198465 = G__198490;
count__198378_198466 = G__198491;
i__198379_198467 = G__198492;
continue;
}
} else {
}
}
break;
}

var G__198493 = cljs.core.next.call(null,seq__198362_198455__$1);
var G__198494 = null;
var G__198495 = (0);
var G__198496 = (0);
seq__198362_198414 = G__198493;
chunk__198363_198415 = G__198494;
count__198364_198416 = G__198495;
i__198365_198417 = G__198496;
continue;
}
} else {
}
}
break;
}

var G__198497 = seq__198357_198407;
var G__198498 = chunk__198358_198408;
var G__198499 = count__198359_198409;
var G__198500 = (i__198360_198410 + (1));
seq__198357_198407 = G__198497;
chunk__198358_198408 = G__198498;
count__198359_198409 = G__198499;
i__198360_198410 = G__198500;
continue;
} else {
var temp__4425__auto___198501 = cljs.core.seq.call(null,seq__198357_198407);
if(temp__4425__auto___198501){
var seq__198357_198502__$1 = temp__4425__auto___198501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198357_198502__$1)){
var c__25024__auto___198503 = cljs.core.chunk_first.call(null,seq__198357_198502__$1);
var G__198504 = cljs.core.chunk_rest.call(null,seq__198357_198502__$1);
var G__198505 = c__25024__auto___198503;
var G__198506 = cljs.core.count.call(null,c__25024__auto___198503);
var G__198507 = (0);
seq__198357_198407 = G__198504;
chunk__198358_198408 = G__198505;
count__198359_198409 = G__198506;
i__198360_198410 = G__198507;
continue;
} else {
var vec__198384_198508 = cljs.core.first.call(null,seq__198357_198502__$1);
var line_198509 = cljs.core.nth.call(null,vec__198384_198508,(0),null);
var columns_198510 = cljs.core.nth.call(null,vec__198384_198508,(1),null);
var seq__198385_198511 = cljs.core.seq.call(null,columns_198510);
var chunk__198386_198512 = null;
var count__198387_198513 = (0);
var i__198388_198514 = (0);
while(true){
if((i__198388_198514 < count__198387_198513)){
var vec__198389_198515 = cljs.core._nth.call(null,chunk__198386_198512,i__198388_198514);
var column_198516 = cljs.core.nth.call(null,vec__198389_198515,(0),null);
var column_info_198517 = cljs.core.nth.call(null,vec__198389_198515,(1),null);
var seq__198390_198518 = cljs.core.seq.call(null,column_info_198517);
var chunk__198391_198519 = null;
var count__198392_198520 = (0);
var i__198393_198521 = (0);
while(true){
if((i__198393_198521 < count__198392_198520)){
var map__198394_198522 = cljs.core._nth.call(null,chunk__198391_198519,i__198393_198521);
var map__198394_198523__$1 = ((((!((map__198394_198522 == null)))?((((map__198394_198522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198394_198522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198394_198522):map__198394_198522);
var gline_198524 = cljs.core.get.call(null,map__198394_198523__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_198525 = cljs.core.get.call(null,map__198394_198523__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_198526 = cljs.core.get.call(null,map__198394_198523__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_198524], null),cljs.core.fnil.call(null,((function (seq__198390_198518,chunk__198391_198519,count__198392_198520,i__198393_198521,seq__198385_198511,chunk__198386_198512,count__198387_198513,i__198388_198514,seq__198357_198407,chunk__198358_198408,count__198359_198409,i__198360_198410,map__198394_198522,map__198394_198523__$1,gline_198524,gcol_198525,name_198526,vec__198389_198515,column_198516,column_info_198517,vec__198384_198508,line_198509,columns_198510,seq__198357_198502__$1,temp__4425__auto___198501,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_198516], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_198509,new cljs.core.Keyword(null,"col","col",-1959363084),column_198516,new cljs.core.Keyword(null,"name","name",1843675177),name_198526], null));
});})(seq__198390_198518,chunk__198391_198519,count__198392_198520,i__198393_198521,seq__198385_198511,chunk__198386_198512,count__198387_198513,i__198388_198514,seq__198357_198407,chunk__198358_198408,count__198359_198409,i__198360_198410,map__198394_198522,map__198394_198523__$1,gline_198524,gcol_198525,name_198526,vec__198389_198515,column_198516,column_info_198517,vec__198384_198508,line_198509,columns_198510,seq__198357_198502__$1,temp__4425__auto___198501,inverted))
,cljs.core.sorted_map.call(null)));

var G__198527 = seq__198390_198518;
var G__198528 = chunk__198391_198519;
var G__198529 = count__198392_198520;
var G__198530 = (i__198393_198521 + (1));
seq__198390_198518 = G__198527;
chunk__198391_198519 = G__198528;
count__198392_198520 = G__198529;
i__198393_198521 = G__198530;
continue;
} else {
var temp__4425__auto___198531__$1 = cljs.core.seq.call(null,seq__198390_198518);
if(temp__4425__auto___198531__$1){
var seq__198390_198532__$1 = temp__4425__auto___198531__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198390_198532__$1)){
var c__25024__auto___198533 = cljs.core.chunk_first.call(null,seq__198390_198532__$1);
var G__198534 = cljs.core.chunk_rest.call(null,seq__198390_198532__$1);
var G__198535 = c__25024__auto___198533;
var G__198536 = cljs.core.count.call(null,c__25024__auto___198533);
var G__198537 = (0);
seq__198390_198518 = G__198534;
chunk__198391_198519 = G__198535;
count__198392_198520 = G__198536;
i__198393_198521 = G__198537;
continue;
} else {
var map__198396_198538 = cljs.core.first.call(null,seq__198390_198532__$1);
var map__198396_198539__$1 = ((((!((map__198396_198538 == null)))?((((map__198396_198538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198396_198538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198396_198538):map__198396_198538);
var gline_198540 = cljs.core.get.call(null,map__198396_198539__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_198541 = cljs.core.get.call(null,map__198396_198539__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_198542 = cljs.core.get.call(null,map__198396_198539__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_198540], null),cljs.core.fnil.call(null,((function (seq__198390_198518,chunk__198391_198519,count__198392_198520,i__198393_198521,seq__198385_198511,chunk__198386_198512,count__198387_198513,i__198388_198514,seq__198357_198407,chunk__198358_198408,count__198359_198409,i__198360_198410,map__198396_198538,map__198396_198539__$1,gline_198540,gcol_198541,name_198542,seq__198390_198532__$1,temp__4425__auto___198531__$1,vec__198389_198515,column_198516,column_info_198517,vec__198384_198508,line_198509,columns_198510,seq__198357_198502__$1,temp__4425__auto___198501,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_198516], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_198509,new cljs.core.Keyword(null,"col","col",-1959363084),column_198516,new cljs.core.Keyword(null,"name","name",1843675177),name_198542], null));
});})(seq__198390_198518,chunk__198391_198519,count__198392_198520,i__198393_198521,seq__198385_198511,chunk__198386_198512,count__198387_198513,i__198388_198514,seq__198357_198407,chunk__198358_198408,count__198359_198409,i__198360_198410,map__198396_198538,map__198396_198539__$1,gline_198540,gcol_198541,name_198542,seq__198390_198532__$1,temp__4425__auto___198531__$1,vec__198389_198515,column_198516,column_info_198517,vec__198384_198508,line_198509,columns_198510,seq__198357_198502__$1,temp__4425__auto___198501,inverted))
,cljs.core.sorted_map.call(null)));

var G__198543 = cljs.core.next.call(null,seq__198390_198532__$1);
var G__198544 = null;
var G__198545 = (0);
var G__198546 = (0);
seq__198390_198518 = G__198543;
chunk__198391_198519 = G__198544;
count__198392_198520 = G__198545;
i__198393_198521 = G__198546;
continue;
}
} else {
}
}
break;
}

var G__198547 = seq__198385_198511;
var G__198548 = chunk__198386_198512;
var G__198549 = count__198387_198513;
var G__198550 = (i__198388_198514 + (1));
seq__198385_198511 = G__198547;
chunk__198386_198512 = G__198548;
count__198387_198513 = G__198549;
i__198388_198514 = G__198550;
continue;
} else {
var temp__4425__auto___198551__$1 = cljs.core.seq.call(null,seq__198385_198511);
if(temp__4425__auto___198551__$1){
var seq__198385_198552__$1 = temp__4425__auto___198551__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198385_198552__$1)){
var c__25024__auto___198553 = cljs.core.chunk_first.call(null,seq__198385_198552__$1);
var G__198554 = cljs.core.chunk_rest.call(null,seq__198385_198552__$1);
var G__198555 = c__25024__auto___198553;
var G__198556 = cljs.core.count.call(null,c__25024__auto___198553);
var G__198557 = (0);
seq__198385_198511 = G__198554;
chunk__198386_198512 = G__198555;
count__198387_198513 = G__198556;
i__198388_198514 = G__198557;
continue;
} else {
var vec__198398_198558 = cljs.core.first.call(null,seq__198385_198552__$1);
var column_198559 = cljs.core.nth.call(null,vec__198398_198558,(0),null);
var column_info_198560 = cljs.core.nth.call(null,vec__198398_198558,(1),null);
var seq__198399_198561 = cljs.core.seq.call(null,column_info_198560);
var chunk__198400_198562 = null;
var count__198401_198563 = (0);
var i__198402_198564 = (0);
while(true){
if((i__198402_198564 < count__198401_198563)){
var map__198403_198565 = cljs.core._nth.call(null,chunk__198400_198562,i__198402_198564);
var map__198403_198566__$1 = ((((!((map__198403_198565 == null)))?((((map__198403_198565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198403_198565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198403_198565):map__198403_198565);
var gline_198567 = cljs.core.get.call(null,map__198403_198566__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_198568 = cljs.core.get.call(null,map__198403_198566__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_198569 = cljs.core.get.call(null,map__198403_198566__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_198567], null),cljs.core.fnil.call(null,((function (seq__198399_198561,chunk__198400_198562,count__198401_198563,i__198402_198564,seq__198385_198511,chunk__198386_198512,count__198387_198513,i__198388_198514,seq__198357_198407,chunk__198358_198408,count__198359_198409,i__198360_198410,map__198403_198565,map__198403_198566__$1,gline_198567,gcol_198568,name_198569,vec__198398_198558,column_198559,column_info_198560,seq__198385_198552__$1,temp__4425__auto___198551__$1,vec__198384_198508,line_198509,columns_198510,seq__198357_198502__$1,temp__4425__auto___198501,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_198559], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_198509,new cljs.core.Keyword(null,"col","col",-1959363084),column_198559,new cljs.core.Keyword(null,"name","name",1843675177),name_198569], null));
});})(seq__198399_198561,chunk__198400_198562,count__198401_198563,i__198402_198564,seq__198385_198511,chunk__198386_198512,count__198387_198513,i__198388_198514,seq__198357_198407,chunk__198358_198408,count__198359_198409,i__198360_198410,map__198403_198565,map__198403_198566__$1,gline_198567,gcol_198568,name_198569,vec__198398_198558,column_198559,column_info_198560,seq__198385_198552__$1,temp__4425__auto___198551__$1,vec__198384_198508,line_198509,columns_198510,seq__198357_198502__$1,temp__4425__auto___198501,inverted))
,cljs.core.sorted_map.call(null)));

var G__198570 = seq__198399_198561;
var G__198571 = chunk__198400_198562;
var G__198572 = count__198401_198563;
var G__198573 = (i__198402_198564 + (1));
seq__198399_198561 = G__198570;
chunk__198400_198562 = G__198571;
count__198401_198563 = G__198572;
i__198402_198564 = G__198573;
continue;
} else {
var temp__4425__auto___198574__$2 = cljs.core.seq.call(null,seq__198399_198561);
if(temp__4425__auto___198574__$2){
var seq__198399_198575__$1 = temp__4425__auto___198574__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198399_198575__$1)){
var c__25024__auto___198576 = cljs.core.chunk_first.call(null,seq__198399_198575__$1);
var G__198577 = cljs.core.chunk_rest.call(null,seq__198399_198575__$1);
var G__198578 = c__25024__auto___198576;
var G__198579 = cljs.core.count.call(null,c__25024__auto___198576);
var G__198580 = (0);
seq__198399_198561 = G__198577;
chunk__198400_198562 = G__198578;
count__198401_198563 = G__198579;
i__198402_198564 = G__198580;
continue;
} else {
var map__198405_198581 = cljs.core.first.call(null,seq__198399_198575__$1);
var map__198405_198582__$1 = ((((!((map__198405_198581 == null)))?((((map__198405_198581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198405_198581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198405_198581):map__198405_198581);
var gline_198583 = cljs.core.get.call(null,map__198405_198582__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_198584 = cljs.core.get.call(null,map__198405_198582__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_198585 = cljs.core.get.call(null,map__198405_198582__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_198583], null),cljs.core.fnil.call(null,((function (seq__198399_198561,chunk__198400_198562,count__198401_198563,i__198402_198564,seq__198385_198511,chunk__198386_198512,count__198387_198513,i__198388_198514,seq__198357_198407,chunk__198358_198408,count__198359_198409,i__198360_198410,map__198405_198581,map__198405_198582__$1,gline_198583,gcol_198584,name_198585,seq__198399_198575__$1,temp__4425__auto___198574__$2,vec__198398_198558,column_198559,column_info_198560,seq__198385_198552__$1,temp__4425__auto___198551__$1,vec__198384_198508,line_198509,columns_198510,seq__198357_198502__$1,temp__4425__auto___198501,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_198559], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_198509,new cljs.core.Keyword(null,"col","col",-1959363084),column_198559,new cljs.core.Keyword(null,"name","name",1843675177),name_198585], null));
});})(seq__198399_198561,chunk__198400_198562,count__198401_198563,i__198402_198564,seq__198385_198511,chunk__198386_198512,count__198387_198513,i__198388_198514,seq__198357_198407,chunk__198358_198408,count__198359_198409,i__198360_198410,map__198405_198581,map__198405_198582__$1,gline_198583,gcol_198584,name_198585,seq__198399_198575__$1,temp__4425__auto___198574__$2,vec__198398_198558,column_198559,column_info_198560,seq__198385_198552__$1,temp__4425__auto___198551__$1,vec__198384_198508,line_198509,columns_198510,seq__198357_198502__$1,temp__4425__auto___198501,inverted))
,cljs.core.sorted_map.call(null)));

var G__198586 = cljs.core.next.call(null,seq__198399_198575__$1);
var G__198587 = null;
var G__198588 = (0);
var G__198589 = (0);
seq__198399_198561 = G__198586;
chunk__198400_198562 = G__198587;
count__198401_198563 = G__198588;
i__198402_198564 = G__198589;
continue;
}
} else {
}
}
break;
}

var G__198590 = cljs.core.next.call(null,seq__198385_198552__$1);
var G__198591 = null;
var G__198592 = (0);
var G__198593 = (0);
seq__198385_198511 = G__198590;
chunk__198386_198512 = G__198591;
count__198387_198513 = G__198592;
i__198388_198514 = G__198593;
continue;
}
} else {
}
}
break;
}

var G__198594 = cljs.core.next.call(null,seq__198357_198502__$1);
var G__198595 = null;
var G__198596 = (0);
var G__198597 = (0);
seq__198357_198407 = G__198594;
chunk__198358_198408 = G__198595;
count__198359_198409 = G__198596;
i__198360_198410 = G__198597;
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