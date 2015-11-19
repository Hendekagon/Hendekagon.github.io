// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__371335 = s;
var map__371335__$1 = ((((!((map__371335 == null)))?((((map__371335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371335):map__371335);
var name = cljs.core.get.call(null,map__371335__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__371335__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__371338 = info;
var map__371339 = G__371338;
var map__371339__$1 = ((((!((map__371339 == null)))?((((map__371339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371339):map__371339);
var shadow = cljs.core.get.call(null,map__371339__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__371338__$1 = G__371338;
while(true){
var d__$2 = d__$1;
var map__371341 = G__371338__$1;
var map__371341__$1 = ((((!((map__371341 == null)))?((((map__371341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371341):map__371341);
var shadow__$1 = cljs.core.get.call(null,map__371341__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__371343 = (d__$2 + (1));
var G__371344 = shadow__$1;
d__$1 = G__371343;
G__371338__$1 = G__371344;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.munge;
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__371345){
var map__371350 = p__371345;
var map__371350__$1 = ((((!((map__371350 == null)))?((((map__371350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371350):map__371350);
var name_var = map__371350__$1;
var name = cljs.core.get.call(null,map__371350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__371350__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__371352 = info;
var map__371352__$1 = ((((!((map__371352 == null)))?((((map__371352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371352):map__371352);
var ns = cljs.core.get.call(null,map__371352__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__371352__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args371354 = [];
var len__25219__auto___371357 = arguments.length;
var i__25220__auto___371358 = (0);
while(true){
if((i__25220__auto___371358 < len__25219__auto___371357)){
args371354.push((arguments[i__25220__auto___371358]));

var G__371359 = (i__25220__auto___371358 + (1));
i__25220__auto___371358 = G__371359;
continue;
} else {
}
break;
}

var G__371356 = args371354.length;
switch (G__371356) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args371354.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__371362 = cp;
switch (G__371362) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
return [cljs.core.str("\\u"),cljs.core.str(cp.toString((16)))].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__371368_371372 = cljs.core.seq.call(null,s);
var chunk__371369_371373 = null;
var count__371370_371374 = (0);
var i__371371_371375 = (0);
while(true){
if((i__371371_371375 < count__371370_371374)){
var c_371376 = cljs.core._nth.call(null,chunk__371369_371373,i__371371_371375);
sb.append(cljs.compiler.escape_char.call(null,c_371376));

var G__371377 = seq__371368_371372;
var G__371378 = chunk__371369_371373;
var G__371379 = count__371370_371374;
var G__371380 = (i__371371_371375 + (1));
seq__371368_371372 = G__371377;
chunk__371369_371373 = G__371378;
count__371370_371374 = G__371379;
i__371371_371375 = G__371380;
continue;
} else {
var temp__4425__auto___371381 = cljs.core.seq.call(null,seq__371368_371372);
if(temp__4425__auto___371381){
var seq__371368_371382__$1 = temp__4425__auto___371381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371368_371382__$1)){
var c__24964__auto___371383 = cljs.core.chunk_first.call(null,seq__371368_371382__$1);
var G__371384 = cljs.core.chunk_rest.call(null,seq__371368_371382__$1);
var G__371385 = c__24964__auto___371383;
var G__371386 = cljs.core.count.call(null,c__24964__auto___371383);
var G__371387 = (0);
seq__371368_371372 = G__371384;
chunk__371369_371373 = G__371385;
count__371370_371374 = G__371386;
i__371371_371375 = G__371387;
continue;
} else {
var c_371388 = cljs.core.first.call(null,seq__371368_371382__$1);
sb.append(cljs.compiler.escape_char.call(null,c_371388));

var G__371389 = cljs.core.next.call(null,seq__371368_371382__$1);
var G__371390 = null;
var G__371391 = (0);
var G__371392 = (0);
seq__371368_371372 = G__371389;
chunk__371369_371373 = G__371390;
count__371370_371374 = G__371391;
i__371371_371375 = G__371392;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__25074__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25075__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25076__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25077__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25078__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25078__auto__,method_table__25074__auto__,prefer_table__25075__auto__,method_cache__25076__auto__,cached_hierarchy__25077__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__25745__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__25745__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__371398_371403 = ast;
var map__371398_371404__$1 = ((((!((map__371398_371403 == null)))?((((map__371398_371403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371398_371403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371398_371403):map__371398_371403);
var env_371405 = cljs.core.get.call(null,map__371398_371404__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_371405))){
var map__371400_371406 = env_371405;
var map__371400_371407__$1 = ((((!((map__371400_371406 == null)))?((((map__371400_371406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371400_371406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371400_371406):map__371400_371406);
var line_371408 = cljs.core.get.call(null,map__371400_371407__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_371409 = cljs.core.get.call(null,map__371400_371407__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__371400_371406,map__371400_371407__$1,line_371408,column_371409,map__371398_371403,map__371398_371404__$1,env_371405,val__25745__auto__){
return (function (m){
var minfo = (function (){var G__371402 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__371402__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__371402,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__371402);
return G__371402__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_371408 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__371400_371406,map__371400_371407__$1,line_371408,column_371409,map__371398_371403,map__371398_371404__$1,env_371405,val__25745__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_371409)?(column_371409 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__371400_371406,map__371400_371407__$1,line_371408,column_371409,map__371398_371403,map__371398_371404__$1,env_371405,val__25745__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__371400_371406,map__371400_371407__$1,line_371408,column_371409,map__371398_371403,map__371398_371404__$1,env_371405,val__25745__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__371400_371406,map__371400_371407__$1,line_371408,column_371409,map__371398_371403,map__371398_371404__$1,env_371405,val__25745__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__371400_371406,map__371400_371407__$1,line_371408,column_371409,map__371398_371403,map__371398_371404__$1,env_371405,val__25745__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__25745__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__25226__auto__ = [];
var len__25219__auto___371416 = arguments.length;
var i__25220__auto___371417 = (0);
while(true){
if((i__25220__auto___371417 < len__25219__auto___371416)){
args__25226__auto__.push((arguments[i__25220__auto___371417]));

var G__371418 = (i__25220__auto___371417 + (1));
i__25220__auto___371417 = G__371418;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((0) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__25227__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__371412_371419 = cljs.core.seq.call(null,xs);
var chunk__371413_371420 = null;
var count__371414_371421 = (0);
var i__371415_371422 = (0);
while(true){
if((i__371415_371422 < count__371414_371421)){
var x_371423 = cljs.core._nth.call(null,chunk__371413_371420,i__371415_371422);
if((x_371423 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_371423)){
cljs.compiler.emit.call(null,x_371423);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_371423)){
cljs.core.apply.call(null,cljs.compiler.emits,x_371423);
} else {
if(goog.isFunction(x_371423)){
x_371423.call(null);
} else {
var s_371424 = cljs.core.print_str.call(null,x_371423);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__371412_371419,chunk__371413_371420,count__371414_371421,i__371415_371422,s_371424,x_371423){
return (function (p1__371410_SHARP_){
return (p1__371410_SHARP_ + cljs.core.count.call(null,s_371424));
});})(seq__371412_371419,chunk__371413_371420,count__371414_371421,i__371415_371422,s_371424,x_371423))
);
}

cljs.core.print.call(null,s_371424);

}
}
}
}

var G__371425 = seq__371412_371419;
var G__371426 = chunk__371413_371420;
var G__371427 = count__371414_371421;
var G__371428 = (i__371415_371422 + (1));
seq__371412_371419 = G__371425;
chunk__371413_371420 = G__371426;
count__371414_371421 = G__371427;
i__371415_371422 = G__371428;
continue;
} else {
var temp__4425__auto___371429 = cljs.core.seq.call(null,seq__371412_371419);
if(temp__4425__auto___371429){
var seq__371412_371430__$1 = temp__4425__auto___371429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371412_371430__$1)){
var c__24964__auto___371431 = cljs.core.chunk_first.call(null,seq__371412_371430__$1);
var G__371432 = cljs.core.chunk_rest.call(null,seq__371412_371430__$1);
var G__371433 = c__24964__auto___371431;
var G__371434 = cljs.core.count.call(null,c__24964__auto___371431);
var G__371435 = (0);
seq__371412_371419 = G__371432;
chunk__371413_371420 = G__371433;
count__371414_371421 = G__371434;
i__371415_371422 = G__371435;
continue;
} else {
var x_371436 = cljs.core.first.call(null,seq__371412_371430__$1);
if((x_371436 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_371436)){
cljs.compiler.emit.call(null,x_371436);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_371436)){
cljs.core.apply.call(null,cljs.compiler.emits,x_371436);
} else {
if(goog.isFunction(x_371436)){
x_371436.call(null);
} else {
var s_371437 = cljs.core.print_str.call(null,x_371436);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__371412_371419,chunk__371413_371420,count__371414_371421,i__371415_371422,s_371437,x_371436,seq__371412_371430__$1,temp__4425__auto___371429){
return (function (p1__371410_SHARP_){
return (p1__371410_SHARP_ + cljs.core.count.call(null,s_371437));
});})(seq__371412_371419,chunk__371413_371420,count__371414_371421,i__371415_371422,s_371437,x_371436,seq__371412_371430__$1,temp__4425__auto___371429))
);
}

cljs.core.print.call(null,s_371437);

}
}
}
}

var G__371438 = cljs.core.next.call(null,seq__371412_371430__$1);
var G__371439 = null;
var G__371440 = (0);
var G__371441 = (0);
seq__371412_371419 = G__371438;
chunk__371413_371420 = G__371439;
count__371414_371421 = G__371440;
i__371415_371422 = G__371441;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq371411){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq371411));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__25226__auto__ = [];
var len__25219__auto___371446 = arguments.length;
var i__25220__auto___371447 = (0);
while(true){
if((i__25220__auto___371447 < len__25219__auto___371446)){
args__25226__auto__.push((arguments[i__25220__auto___371447]));

var G__371448 = (i__25220__auto___371447 + (1));
i__25220__auto___371447 = G__371448;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((0) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__25227__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__371443){
var map__371444 = p__371443;
var map__371444__$1 = ((((!((map__371444 == null)))?((((map__371444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371444):map__371444);
var m = map__371444__$1;
var gen_line = cljs.core.get.call(null,map__371444__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq371442){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq371442));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__25135__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_371451_371453 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_371452_371454 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_371451_371453,_STAR_print_fn_STAR_371452_371454,sb__25135__auto__){
return (function (x__25136__auto__){
return sb__25135__auto__.append(x__25136__auto__);
});})(_STAR_print_newline_STAR_371451_371453,_STAR_print_fn_STAR_371452_371454,sb__25135__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_371452_371454;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_371451_371453;
}
return [cljs.core.str(sb__25135__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__25074__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25075__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25076__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25077__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25078__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25078__auto__,method_table__25074__auto__,prefer_table__25075__auto__,method_cache__25076__auto__,cached_hierarchy__25077__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,x);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__371455 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__371455,(0),null);
var flags = cljs.core.nth.call(null,vec__371455,(1),null);
var pattern = cljs.core.nth.call(null,vec__371455,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__371457){
var map__371458 = p__371457;
var map__371458__$1 = ((((!((map__371458 == null)))?((((map__371458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371458):map__371458);
var arg = map__371458__$1;
var info = cljs.core.get.call(null,map__371458__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__371458__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__371458__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__24161__auto__ = js_module_name;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__371460 = info__$1;
var G__371460__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__371460):G__371460);
return G__371460__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__371461){
var map__371462 = p__371461;
var map__371462__$1 = ((((!((map__371462 == null)))?((((map__371462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371462):map__371462);
var arg = map__371462__$1;
var env = cljs.core.get.call(null,map__371462__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__371462__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__371462__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__371462__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__371464 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__371464__$1 = ((((!((map__371464 == null)))?((((map__371464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371464):map__371464);
var name = cljs.core.get.call(null,map__371464__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__371466){
var map__371467 = p__371466;
var map__371467__$1 = ((((!((map__371467 == null)))?((((map__371467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371467):map__371467);
var expr = cljs.core.get.call(null,map__371467__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__371467__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__371467__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__371469_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__371469_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__371470){
var map__371471 = p__371470;
var map__371471__$1 = ((((!((map__371471 == null)))?((((map__371471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371471):map__371471);
var env = cljs.core.get.call(null,map__371471__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__371471__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__371471__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__371473){
var map__371474 = p__371473;
var map__371474__$1 = ((((!((map__371474 == null)))?((((map__371474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371474):map__371474);
var items = cljs.core.get.call(null,map__371474__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__371474__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__371476){
var map__371477 = p__371476;
var map__371477__$1 = ((((!((map__371477 == null)))?((((map__371477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371477):map__371477);
var items = cljs.core.get.call(null,map__371477__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__371477__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_371479 = cljs.core.count.call(null,items);
if((cnt_371479 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_371479,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__371480_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__371480_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__371481){
var map__371482 = p__371481;
var map__371482__$1 = ((((!((map__371482 == null)))?((((map__371482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371482):map__371482);
var items = cljs.core.get.call(null,map__371482__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__371482__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__371484){
var map__371485 = p__371484;
var map__371485__$1 = ((((!((map__371485 == null)))?((((map__371485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371485):map__371485);
var items = cljs.core.get.call(null,map__371485__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__371485__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__371485__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___371495 = cljs.core.seq.call(null,items);
if(temp__4425__auto___371495){
var items_371496__$1 = temp__4425__auto___371495;
var vec__371487_371497 = items_371496__$1;
var vec__371488_371498 = cljs.core.nth.call(null,vec__371487_371497,(0),null);
var k_371499 = cljs.core.nth.call(null,vec__371488_371498,(0),null);
var v_371500 = cljs.core.nth.call(null,vec__371488_371498,(1),null);
var r_371501 = cljs.core.nthnext.call(null,vec__371487_371497,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_371499),"\": ",v_371500);

var seq__371489_371502 = cljs.core.seq.call(null,r_371501);
var chunk__371490_371503 = null;
var count__371491_371504 = (0);
var i__371492_371505 = (0);
while(true){
if((i__371492_371505 < count__371491_371504)){
var vec__371493_371506 = cljs.core._nth.call(null,chunk__371490_371503,i__371492_371505);
var k_371507__$1 = cljs.core.nth.call(null,vec__371493_371506,(0),null);
var v_371508__$1 = cljs.core.nth.call(null,vec__371493_371506,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_371507__$1),"\": ",v_371508__$1);

var G__371509 = seq__371489_371502;
var G__371510 = chunk__371490_371503;
var G__371511 = count__371491_371504;
var G__371512 = (i__371492_371505 + (1));
seq__371489_371502 = G__371509;
chunk__371490_371503 = G__371510;
count__371491_371504 = G__371511;
i__371492_371505 = G__371512;
continue;
} else {
var temp__4425__auto___371513__$1 = cljs.core.seq.call(null,seq__371489_371502);
if(temp__4425__auto___371513__$1){
var seq__371489_371514__$1 = temp__4425__auto___371513__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371489_371514__$1)){
var c__24964__auto___371515 = cljs.core.chunk_first.call(null,seq__371489_371514__$1);
var G__371516 = cljs.core.chunk_rest.call(null,seq__371489_371514__$1);
var G__371517 = c__24964__auto___371515;
var G__371518 = cljs.core.count.call(null,c__24964__auto___371515);
var G__371519 = (0);
seq__371489_371502 = G__371516;
chunk__371490_371503 = G__371517;
count__371491_371504 = G__371518;
i__371492_371505 = G__371519;
continue;
} else {
var vec__371494_371520 = cljs.core.first.call(null,seq__371489_371514__$1);
var k_371521__$1 = cljs.core.nth.call(null,vec__371494_371520,(0),null);
var v_371522__$1 = cljs.core.nth.call(null,vec__371494_371520,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_371521__$1),"\": ",v_371522__$1);

var G__371523 = cljs.core.next.call(null,seq__371489_371514__$1);
var G__371524 = null;
var G__371525 = (0);
var G__371526 = (0);
seq__371489_371502 = G__371523;
chunk__371490_371503 = G__371524;
count__371491_371504 = G__371525;
i__371492_371505 = G__371526;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"}");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__371527){
var map__371528 = p__371527;
var map__371528__$1 = ((((!((map__371528 == null)))?((((map__371528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371528):map__371528);
var form = cljs.core.get.call(null,map__371528__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__371528__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__371530){
var map__371533 = p__371530;
var map__371533__$1 = ((((!((map__371533 == null)))?((((map__371533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371533):map__371533);
var op = cljs.core.get.call(null,map__371533__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__371533__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__24149__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__24149__auto__){
var and__24149__auto____$1 = form;
if(cljs.core.truth_(and__24149__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__24149__auto____$1;
}
} else {
return and__24149__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__371535){
var map__371538 = p__371535;
var map__371538__$1 = ((((!((map__371538 == null)))?((((map__371538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371538):map__371538);
var op = cljs.core.get.call(null,map__371538__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__371538__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__24161__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__371540){
var map__371541 = p__371540;
var map__371541__$1 = ((((!((map__371541 == null)))?((((map__371541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371541):map__371541);
var test = cljs.core.get.call(null,map__371541__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__371541__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__371541__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__371541__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__371541__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__24161__auto__ = unchecked;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__371543){
var map__371544 = p__371543;
var map__371544__$1 = ((((!((map__371544 == null)))?((((map__371544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371544):map__371544);
var v = cljs.core.get.call(null,map__371544__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__371544__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__371544__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__371544__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__371544__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__371546_371560 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__371547_371561 = null;
var count__371548_371562 = (0);
var i__371549_371563 = (0);
while(true){
if((i__371549_371563 < count__371548_371562)){
var vec__371550_371564 = cljs.core._nth.call(null,chunk__371547_371561,i__371549_371563);
var ts_371565 = cljs.core.nth.call(null,vec__371550_371564,(0),null);
var then_371566 = cljs.core.nth.call(null,vec__371550_371564,(1),null);
var seq__371551_371567 = cljs.core.seq.call(null,ts_371565);
var chunk__371552_371568 = null;
var count__371553_371569 = (0);
var i__371554_371570 = (0);
while(true){
if((i__371554_371570 < count__371553_371569)){
var test_371571 = cljs.core._nth.call(null,chunk__371552_371568,i__371554_371570);
cljs.compiler.emitln.call(null,"case ",test_371571,":");

var G__371572 = seq__371551_371567;
var G__371573 = chunk__371552_371568;
var G__371574 = count__371553_371569;
var G__371575 = (i__371554_371570 + (1));
seq__371551_371567 = G__371572;
chunk__371552_371568 = G__371573;
count__371553_371569 = G__371574;
i__371554_371570 = G__371575;
continue;
} else {
var temp__4425__auto___371576 = cljs.core.seq.call(null,seq__371551_371567);
if(temp__4425__auto___371576){
var seq__371551_371577__$1 = temp__4425__auto___371576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371551_371577__$1)){
var c__24964__auto___371578 = cljs.core.chunk_first.call(null,seq__371551_371577__$1);
var G__371579 = cljs.core.chunk_rest.call(null,seq__371551_371577__$1);
var G__371580 = c__24964__auto___371578;
var G__371581 = cljs.core.count.call(null,c__24964__auto___371578);
var G__371582 = (0);
seq__371551_371567 = G__371579;
chunk__371552_371568 = G__371580;
count__371553_371569 = G__371581;
i__371554_371570 = G__371582;
continue;
} else {
var test_371583 = cljs.core.first.call(null,seq__371551_371577__$1);
cljs.compiler.emitln.call(null,"case ",test_371583,":");

var G__371584 = cljs.core.next.call(null,seq__371551_371577__$1);
var G__371585 = null;
var G__371586 = (0);
var G__371587 = (0);
seq__371551_371567 = G__371584;
chunk__371552_371568 = G__371585;
count__371553_371569 = G__371586;
i__371554_371570 = G__371587;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_371566);
} else {
cljs.compiler.emitln.call(null,then_371566);
}

cljs.compiler.emitln.call(null,"break;");

var G__371588 = seq__371546_371560;
var G__371589 = chunk__371547_371561;
var G__371590 = count__371548_371562;
var G__371591 = (i__371549_371563 + (1));
seq__371546_371560 = G__371588;
chunk__371547_371561 = G__371589;
count__371548_371562 = G__371590;
i__371549_371563 = G__371591;
continue;
} else {
var temp__4425__auto___371592 = cljs.core.seq.call(null,seq__371546_371560);
if(temp__4425__auto___371592){
var seq__371546_371593__$1 = temp__4425__auto___371592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371546_371593__$1)){
var c__24964__auto___371594 = cljs.core.chunk_first.call(null,seq__371546_371593__$1);
var G__371595 = cljs.core.chunk_rest.call(null,seq__371546_371593__$1);
var G__371596 = c__24964__auto___371594;
var G__371597 = cljs.core.count.call(null,c__24964__auto___371594);
var G__371598 = (0);
seq__371546_371560 = G__371595;
chunk__371547_371561 = G__371596;
count__371548_371562 = G__371597;
i__371549_371563 = G__371598;
continue;
} else {
var vec__371555_371599 = cljs.core.first.call(null,seq__371546_371593__$1);
var ts_371600 = cljs.core.nth.call(null,vec__371555_371599,(0),null);
var then_371601 = cljs.core.nth.call(null,vec__371555_371599,(1),null);
var seq__371556_371602 = cljs.core.seq.call(null,ts_371600);
var chunk__371557_371603 = null;
var count__371558_371604 = (0);
var i__371559_371605 = (0);
while(true){
if((i__371559_371605 < count__371558_371604)){
var test_371606 = cljs.core._nth.call(null,chunk__371557_371603,i__371559_371605);
cljs.compiler.emitln.call(null,"case ",test_371606,":");

var G__371607 = seq__371556_371602;
var G__371608 = chunk__371557_371603;
var G__371609 = count__371558_371604;
var G__371610 = (i__371559_371605 + (1));
seq__371556_371602 = G__371607;
chunk__371557_371603 = G__371608;
count__371558_371604 = G__371609;
i__371559_371605 = G__371610;
continue;
} else {
var temp__4425__auto___371611__$1 = cljs.core.seq.call(null,seq__371556_371602);
if(temp__4425__auto___371611__$1){
var seq__371556_371612__$1 = temp__4425__auto___371611__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371556_371612__$1)){
var c__24964__auto___371613 = cljs.core.chunk_first.call(null,seq__371556_371612__$1);
var G__371614 = cljs.core.chunk_rest.call(null,seq__371556_371612__$1);
var G__371615 = c__24964__auto___371613;
var G__371616 = cljs.core.count.call(null,c__24964__auto___371613);
var G__371617 = (0);
seq__371556_371602 = G__371614;
chunk__371557_371603 = G__371615;
count__371558_371604 = G__371616;
i__371559_371605 = G__371617;
continue;
} else {
var test_371618 = cljs.core.first.call(null,seq__371556_371612__$1);
cljs.compiler.emitln.call(null,"case ",test_371618,":");

var G__371619 = cljs.core.next.call(null,seq__371556_371612__$1);
var G__371620 = null;
var G__371621 = (0);
var G__371622 = (0);
seq__371556_371602 = G__371619;
chunk__371557_371603 = G__371620;
count__371558_371604 = G__371621;
i__371559_371605 = G__371622;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_371601);
} else {
cljs.compiler.emitln.call(null,then_371601);
}

cljs.compiler.emitln.call(null,"break;");

var G__371623 = cljs.core.next.call(null,seq__371546_371593__$1);
var G__371624 = null;
var G__371625 = (0);
var G__371626 = (0);
seq__371546_371560 = G__371623;
chunk__371547_371561 = G__371624;
count__371548_371562 = G__371625;
i__371549_371563 = G__371626;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__371627){
var map__371628 = p__371627;
var map__371628__$1 = ((((!((map__371628 == null)))?((((map__371628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371628):map__371628);
var throw$ = cljs.core.get.call(null,map__371628__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__371628__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__371633 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__371633,(0),null);
var rstr = cljs.core.nth.call(null,vec__371633,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__371633,fstr,rstr,ret_t,axstr){
return (function (p1__371630_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__371630_SHARP_);
});})(idx,vec__371633,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__371634 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
var G__371634__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__371634),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__371634);
return G__371634__$1;
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__371635_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__371635_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__371638 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__371638,(0),null);
var ts = cljs.core.nth.call(null,vec__371638,(1),null);
var n = cljs.core.nth.call(null,vec__371638,(2),null);
var xs = cljs.core.nthnext.call(null,vec__371638,(3));
if(cljs.core.truth_((function (){var and__24149__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__24149__auto__){
var and__24149__auto____$1 = ts;
if(cljs.core.truth_(and__24149__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__24149__auto____$1;
}
} else {
return and__24149__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__371639 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__371639,(0),null);
var ts = cljs.core.nth.call(null,vec__371639,(1),null);
var xs = cljs.core.nthnext.call(null,vec__371639,(2));
if(cljs.core.truth_((function (){var and__24149__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__24149__auto__){
var and__24149__auto____$1 = ts;
if(cljs.core.truth_(and__24149__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__24149__auto____$1;
}
} else {
return and__24149__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args371641 = [];
var len__25219__auto___371668 = arguments.length;
var i__25220__auto___371669 = (0);
while(true){
if((i__25220__auto___371669 < len__25219__auto___371668)){
args371641.push((arguments[i__25220__auto___371669]));

var G__371670 = (i__25220__auto___371669 + (1));
i__25220__auto___371669 = G__371670;
continue;
} else {
}
break;
}

var G__371643 = args371641.length;
switch (G__371643) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args371641.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__371659 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__371640_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__371640_SHARP_);
} else {
return p1__371640_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__371659,(0),null);
var ys = cljs.core.nthnext.call(null,vec__371659,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__371660 = cljs.core.seq.call(null,ys);
var chunk__371661 = null;
var count__371662 = (0);
var i__371663 = (0);
while(true){
if((i__371663 < count__371662)){
var next_line = cljs.core._nth.call(null,chunk__371661,i__371663);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__371672 = seq__371660;
var G__371673 = chunk__371661;
var G__371674 = count__371662;
var G__371675 = (i__371663 + (1));
seq__371660 = G__371672;
chunk__371661 = G__371673;
count__371662 = G__371674;
i__371663 = G__371675;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__371660);
if(temp__4425__auto__){
var seq__371660__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371660__$1)){
var c__24964__auto__ = cljs.core.chunk_first.call(null,seq__371660__$1);
var G__371676 = cljs.core.chunk_rest.call(null,seq__371660__$1);
var G__371677 = c__24964__auto__;
var G__371678 = cljs.core.count.call(null,c__24964__auto__);
var G__371679 = (0);
seq__371660 = G__371676;
chunk__371661 = G__371677;
count__371662 = G__371678;
i__371663 = G__371679;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__371660__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__371680 = cljs.core.next.call(null,seq__371660__$1);
var G__371681 = null;
var G__371682 = (0);
var G__371683 = (0);
seq__371660 = G__371680;
chunk__371661 = G__371681;
count__371662 = G__371682;
i__371663 = G__371683;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__371664_371684 = cljs.core.seq.call(null,docs__$2);
var chunk__371665_371685 = null;
var count__371666_371686 = (0);
var i__371667_371687 = (0);
while(true){
if((i__371667_371687 < count__371666_371686)){
var e_371688 = cljs.core._nth.call(null,chunk__371665_371685,i__371667_371687);
if(cljs.core.truth_(e_371688)){
print_comment_lines.call(null,e_371688);
} else {
}

var G__371689 = seq__371664_371684;
var G__371690 = chunk__371665_371685;
var G__371691 = count__371666_371686;
var G__371692 = (i__371667_371687 + (1));
seq__371664_371684 = G__371689;
chunk__371665_371685 = G__371690;
count__371666_371686 = G__371691;
i__371667_371687 = G__371692;
continue;
} else {
var temp__4425__auto___371693 = cljs.core.seq.call(null,seq__371664_371684);
if(temp__4425__auto___371693){
var seq__371664_371694__$1 = temp__4425__auto___371693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371664_371694__$1)){
var c__24964__auto___371695 = cljs.core.chunk_first.call(null,seq__371664_371694__$1);
var G__371696 = cljs.core.chunk_rest.call(null,seq__371664_371694__$1);
var G__371697 = c__24964__auto___371695;
var G__371698 = cljs.core.count.call(null,c__24964__auto___371695);
var G__371699 = (0);
seq__371664_371684 = G__371696;
chunk__371665_371685 = G__371697;
count__371666_371686 = G__371698;
i__371667_371687 = G__371699;
continue;
} else {
var e_371700 = cljs.core.first.call(null,seq__371664_371694__$1);
if(cljs.core.truth_(e_371700)){
print_comment_lines.call(null,e_371700);
} else {
}

var G__371701 = cljs.core.next.call(null,seq__371664_371694__$1);
var G__371702 = null;
var G__371703 = (0);
var G__371704 = (0);
seq__371664_371684 = G__371701;
chunk__371665_371685 = G__371702;
count__371666_371686 = G__371703;
i__371667_371687 = G__371704;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__24149__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__371706_SHARP_){
return goog.string.startsWith(p1__371706_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__24149__auto__)){
var and__24149__auto____$1 = opts;
if(cljs.core.truth_(and__24149__auto____$1)){
var and__24149__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__24149__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__24149__auto____$2;
}
} else {
return and__24149__auto____$1;
}
} else {
return and__24149__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__371707){
var map__371708 = p__371707;
var map__371708__$1 = ((((!((map__371708 == null)))?((((map__371708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371708):map__371708);
var name = cljs.core.get.call(null,map__371708__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__371708__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__371708__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__371708__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__371708__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__371708__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__371708__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__371708__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__371708__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__24149__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__24149__auto__)){
return test;
} else {
return and__24149__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__371710){
var map__371727 = p__371710;
var map__371727__$1 = ((((!((map__371727 == null)))?((((map__371727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371727):map__371727);
var name = cljs.core.get.call(null,map__371727__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__371727__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__371727__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__371729_371743 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__371730_371744 = null;
var count__371731_371745 = (0);
var i__371732_371746 = (0);
while(true){
if((i__371732_371746 < count__371731_371745)){
var vec__371733_371747 = cljs.core._nth.call(null,chunk__371730_371744,i__371732_371746);
var i_371748 = cljs.core.nth.call(null,vec__371733_371747,(0),null);
var param_371749 = cljs.core.nth.call(null,vec__371733_371747,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_371749);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__371750 = seq__371729_371743;
var G__371751 = chunk__371730_371744;
var G__371752 = count__371731_371745;
var G__371753 = (i__371732_371746 + (1));
seq__371729_371743 = G__371750;
chunk__371730_371744 = G__371751;
count__371731_371745 = G__371752;
i__371732_371746 = G__371753;
continue;
} else {
var temp__4425__auto___371754 = cljs.core.seq.call(null,seq__371729_371743);
if(temp__4425__auto___371754){
var seq__371729_371755__$1 = temp__4425__auto___371754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371729_371755__$1)){
var c__24964__auto___371756 = cljs.core.chunk_first.call(null,seq__371729_371755__$1);
var G__371757 = cljs.core.chunk_rest.call(null,seq__371729_371755__$1);
var G__371758 = c__24964__auto___371756;
var G__371759 = cljs.core.count.call(null,c__24964__auto___371756);
var G__371760 = (0);
seq__371729_371743 = G__371757;
chunk__371730_371744 = G__371758;
count__371731_371745 = G__371759;
i__371732_371746 = G__371760;
continue;
} else {
var vec__371734_371761 = cljs.core.first.call(null,seq__371729_371755__$1);
var i_371762 = cljs.core.nth.call(null,vec__371734_371761,(0),null);
var param_371763 = cljs.core.nth.call(null,vec__371734_371761,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_371763);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__371764 = cljs.core.next.call(null,seq__371729_371755__$1);
var G__371765 = null;
var G__371766 = (0);
var G__371767 = (0);
seq__371729_371743 = G__371764;
chunk__371730_371744 = G__371765;
count__371731_371745 = G__371766;
i__371732_371746 = G__371767;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__371735_371768 = cljs.core.seq.call(null,params);
var chunk__371736_371769 = null;
var count__371737_371770 = (0);
var i__371738_371771 = (0);
while(true){
if((i__371738_371771 < count__371737_371770)){
var param_371772 = cljs.core._nth.call(null,chunk__371736_371769,i__371738_371771);
cljs.compiler.emit.call(null,param_371772);

if(cljs.core._EQ_.call(null,param_371772,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__371773 = seq__371735_371768;
var G__371774 = chunk__371736_371769;
var G__371775 = count__371737_371770;
var G__371776 = (i__371738_371771 + (1));
seq__371735_371768 = G__371773;
chunk__371736_371769 = G__371774;
count__371737_371770 = G__371775;
i__371738_371771 = G__371776;
continue;
} else {
var temp__4425__auto___371777 = cljs.core.seq.call(null,seq__371735_371768);
if(temp__4425__auto___371777){
var seq__371735_371778__$1 = temp__4425__auto___371777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371735_371778__$1)){
var c__24964__auto___371779 = cljs.core.chunk_first.call(null,seq__371735_371778__$1);
var G__371780 = cljs.core.chunk_rest.call(null,seq__371735_371778__$1);
var G__371781 = c__24964__auto___371779;
var G__371782 = cljs.core.count.call(null,c__24964__auto___371779);
var G__371783 = (0);
seq__371735_371768 = G__371780;
chunk__371736_371769 = G__371781;
count__371737_371770 = G__371782;
i__371738_371771 = G__371783;
continue;
} else {
var param_371784 = cljs.core.first.call(null,seq__371735_371778__$1);
cljs.compiler.emit.call(null,param_371784);

if(cljs.core._EQ_.call(null,param_371784,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__371785 = cljs.core.next.call(null,seq__371735_371778__$1);
var G__371786 = null;
var G__371787 = (0);
var G__371788 = (0);
seq__371735_371768 = G__371785;
chunk__371736_371769 = G__371786;
count__371737_371770 = G__371787;
i__371738_371771 = G__371788;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__371739_371789 = cljs.core.seq.call(null,params);
var chunk__371740_371790 = null;
var count__371741_371791 = (0);
var i__371742_371792 = (0);
while(true){
if((i__371742_371792 < count__371741_371791)){
var param_371793 = cljs.core._nth.call(null,chunk__371740_371790,i__371742_371792);
cljs.compiler.emit.call(null,param_371793);

if(cljs.core._EQ_.call(null,param_371793,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__371794 = seq__371739_371789;
var G__371795 = chunk__371740_371790;
var G__371796 = count__371741_371791;
var G__371797 = (i__371742_371792 + (1));
seq__371739_371789 = G__371794;
chunk__371740_371790 = G__371795;
count__371741_371791 = G__371796;
i__371742_371792 = G__371797;
continue;
} else {
var temp__4425__auto___371798 = cljs.core.seq.call(null,seq__371739_371789);
if(temp__4425__auto___371798){
var seq__371739_371799__$1 = temp__4425__auto___371798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371739_371799__$1)){
var c__24964__auto___371800 = cljs.core.chunk_first.call(null,seq__371739_371799__$1);
var G__371801 = cljs.core.chunk_rest.call(null,seq__371739_371799__$1);
var G__371802 = c__24964__auto___371800;
var G__371803 = cljs.core.count.call(null,c__24964__auto___371800);
var G__371804 = (0);
seq__371739_371789 = G__371801;
chunk__371740_371790 = G__371802;
count__371741_371791 = G__371803;
i__371742_371792 = G__371804;
continue;
} else {
var param_371805 = cljs.core.first.call(null,seq__371739_371799__$1);
cljs.compiler.emit.call(null,param_371805);

if(cljs.core._EQ_.call(null,param_371805,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__371806 = cljs.core.next.call(null,seq__371739_371799__$1);
var G__371807 = null;
var G__371808 = (0);
var G__371809 = (0);
seq__371739_371789 = G__371806;
chunk__371740_371790 = G__371807;
count__371741_371791 = G__371808;
i__371742_371792 = G__371809;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__371814 = cljs.core.seq.call(null,params);
var chunk__371815 = null;
var count__371816 = (0);
var i__371817 = (0);
while(true){
if((i__371817 < count__371816)){
var param = cljs.core._nth.call(null,chunk__371815,i__371817);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__371818 = seq__371814;
var G__371819 = chunk__371815;
var G__371820 = count__371816;
var G__371821 = (i__371817 + (1));
seq__371814 = G__371818;
chunk__371815 = G__371819;
count__371816 = G__371820;
i__371817 = G__371821;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__371814);
if(temp__4425__auto__){
var seq__371814__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371814__$1)){
var c__24964__auto__ = cljs.core.chunk_first.call(null,seq__371814__$1);
var G__371822 = cljs.core.chunk_rest.call(null,seq__371814__$1);
var G__371823 = c__24964__auto__;
var G__371824 = cljs.core.count.call(null,c__24964__auto__);
var G__371825 = (0);
seq__371814 = G__371822;
chunk__371815 = G__371823;
count__371816 = G__371824;
i__371817 = G__371825;
continue;
} else {
var param = cljs.core.first.call(null,seq__371814__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__371826 = cljs.core.next.call(null,seq__371814__$1);
var G__371827 = null;
var G__371828 = (0);
var G__371829 = (0);
seq__371814 = G__371826;
chunk__371815 = G__371827;
count__371816 = G__371828;
i__371817 = G__371829;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__371830){
var map__371833 = p__371830;
var map__371833__$1 = ((((!((map__371833 == null)))?((((map__371833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371833):map__371833);
var type = cljs.core.get.call(null,map__371833__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__371833__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__371833__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__371833__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__371833__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__371833__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__371833__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__371833__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null)))))].join('')));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__371835){
var map__371846 = p__371835;
var map__371846__$1 = ((((!((map__371846 == null)))?((((map__371846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371846):map__371846);
var f = map__371846__$1;
var type = cljs.core.get.call(null,map__371846__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__371846__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__371846__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__371846__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__371846__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__371846__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__371846__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__371846__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_371856__$1 = (function (){var or__24161__auto__ = name;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_371857 = cljs.compiler.munge.call(null,name_371856__$1);
var delegate_name_371858 = [cljs.core.str(mname_371857),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_371858," = function (");

var seq__371848_371859 = cljs.core.seq.call(null,params);
var chunk__371849_371860 = null;
var count__371850_371861 = (0);
var i__371851_371862 = (0);
while(true){
if((i__371851_371862 < count__371850_371861)){
var param_371863 = cljs.core._nth.call(null,chunk__371849_371860,i__371851_371862);
cljs.compiler.emit.call(null,param_371863);

if(cljs.core._EQ_.call(null,param_371863,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__371864 = seq__371848_371859;
var G__371865 = chunk__371849_371860;
var G__371866 = count__371850_371861;
var G__371867 = (i__371851_371862 + (1));
seq__371848_371859 = G__371864;
chunk__371849_371860 = G__371865;
count__371850_371861 = G__371866;
i__371851_371862 = G__371867;
continue;
} else {
var temp__4425__auto___371868 = cljs.core.seq.call(null,seq__371848_371859);
if(temp__4425__auto___371868){
var seq__371848_371869__$1 = temp__4425__auto___371868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371848_371869__$1)){
var c__24964__auto___371870 = cljs.core.chunk_first.call(null,seq__371848_371869__$1);
var G__371871 = cljs.core.chunk_rest.call(null,seq__371848_371869__$1);
var G__371872 = c__24964__auto___371870;
var G__371873 = cljs.core.count.call(null,c__24964__auto___371870);
var G__371874 = (0);
seq__371848_371859 = G__371871;
chunk__371849_371860 = G__371872;
count__371850_371861 = G__371873;
i__371851_371862 = G__371874;
continue;
} else {
var param_371875 = cljs.core.first.call(null,seq__371848_371869__$1);
cljs.compiler.emit.call(null,param_371875);

if(cljs.core._EQ_.call(null,param_371875,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__371876 = cljs.core.next.call(null,seq__371848_371869__$1);
var G__371877 = null;
var G__371878 = (0);
var G__371879 = (0);
seq__371848_371859 = G__371876;
chunk__371849_371860 = G__371877;
count__371850_371861 = G__371878;
i__371851_371862 = G__371879;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_371857," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_371880 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_371880,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_371858,".call(this,");

var seq__371852_371881 = cljs.core.seq.call(null,params);
var chunk__371853_371882 = null;
var count__371854_371883 = (0);
var i__371855_371884 = (0);
while(true){
if((i__371855_371884 < count__371854_371883)){
var param_371885 = cljs.core._nth.call(null,chunk__371853_371882,i__371855_371884);
cljs.compiler.emit.call(null,param_371885);

if(cljs.core._EQ_.call(null,param_371885,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__371886 = seq__371852_371881;
var G__371887 = chunk__371853_371882;
var G__371888 = count__371854_371883;
var G__371889 = (i__371855_371884 + (1));
seq__371852_371881 = G__371886;
chunk__371853_371882 = G__371887;
count__371854_371883 = G__371888;
i__371855_371884 = G__371889;
continue;
} else {
var temp__4425__auto___371890 = cljs.core.seq.call(null,seq__371852_371881);
if(temp__4425__auto___371890){
var seq__371852_371891__$1 = temp__4425__auto___371890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371852_371891__$1)){
var c__24964__auto___371892 = cljs.core.chunk_first.call(null,seq__371852_371891__$1);
var G__371893 = cljs.core.chunk_rest.call(null,seq__371852_371891__$1);
var G__371894 = c__24964__auto___371892;
var G__371895 = cljs.core.count.call(null,c__24964__auto___371892);
var G__371896 = (0);
seq__371852_371881 = G__371893;
chunk__371853_371882 = G__371894;
count__371854_371883 = G__371895;
i__371855_371884 = G__371896;
continue;
} else {
var param_371897 = cljs.core.first.call(null,seq__371852_371891__$1);
cljs.compiler.emit.call(null,param_371897);

if(cljs.core._EQ_.call(null,param_371897,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__371898 = cljs.core.next.call(null,seq__371852_371891__$1);
var G__371899 = null;
var G__371900 = (0);
var G__371901 = (0);
seq__371852_371881 = G__371898;
chunk__371853_371882 = G__371899;
count__371854_371883 = G__371900;
i__371855_371884 = G__371901;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_371857,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_371857,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_371856__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_371857,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_371858,";");

cljs.compiler.emitln.call(null,"return ",mname_371857,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__371905){
var map__371906 = p__371905;
var map__371906__$1 = ((((!((map__371906 == null)))?((((map__371906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371906):map__371906);
var name = cljs.core.get.call(null,map__371906__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__371906__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__371906__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__371906__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__371906__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__371906__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__371906__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__371906,map__371906__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__371902_SHARP_){
var and__24149__auto__ = p1__371902_SHARP_;
if(cljs.core.truth_(and__24149__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__371902_SHARP_));
} else {
return and__24149__auto__;
}
});})(map__371906,map__371906__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_371927__$1 = (function (){var or__24161__auto__ = name;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_371928 = cljs.compiler.munge.call(null,name_371927__$1);
var maxparams_371929 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_371930 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_371927__$1,mname_371928,maxparams_371929,loop_locals,map__371906,map__371906__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_371928),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_371927__$1,mname_371928,maxparams_371929,loop_locals,map__371906,map__371906__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_371931 = cljs.core.sort_by.call(null,((function (name_371927__$1,mname_371928,maxparams_371929,mmap_371930,loop_locals,map__371906,map__371906__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__371903_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__371903_SHARP_)));
});})(name_371927__$1,mname_371928,maxparams_371929,mmap_371930,loop_locals,map__371906,map__371906__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_371930));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_371928," = null;");

var seq__371908_371932 = cljs.core.seq.call(null,ms_371931);
var chunk__371909_371933 = null;
var count__371910_371934 = (0);
var i__371911_371935 = (0);
while(true){
if((i__371911_371935 < count__371910_371934)){
var vec__371912_371936 = cljs.core._nth.call(null,chunk__371909_371933,i__371911_371935);
var n_371937 = cljs.core.nth.call(null,vec__371912_371936,(0),null);
var meth_371938 = cljs.core.nth.call(null,vec__371912_371936,(1),null);
cljs.compiler.emits.call(null,"var ",n_371937," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_371938))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_371938);
} else {
cljs.compiler.emit_fn_method.call(null,meth_371938);
}

cljs.compiler.emitln.call(null,";");

var G__371939 = seq__371908_371932;
var G__371940 = chunk__371909_371933;
var G__371941 = count__371910_371934;
var G__371942 = (i__371911_371935 + (1));
seq__371908_371932 = G__371939;
chunk__371909_371933 = G__371940;
count__371910_371934 = G__371941;
i__371911_371935 = G__371942;
continue;
} else {
var temp__4425__auto___371943 = cljs.core.seq.call(null,seq__371908_371932);
if(temp__4425__auto___371943){
var seq__371908_371944__$1 = temp__4425__auto___371943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371908_371944__$1)){
var c__24964__auto___371945 = cljs.core.chunk_first.call(null,seq__371908_371944__$1);
var G__371946 = cljs.core.chunk_rest.call(null,seq__371908_371944__$1);
var G__371947 = c__24964__auto___371945;
var G__371948 = cljs.core.count.call(null,c__24964__auto___371945);
var G__371949 = (0);
seq__371908_371932 = G__371946;
chunk__371909_371933 = G__371947;
count__371910_371934 = G__371948;
i__371911_371935 = G__371949;
continue;
} else {
var vec__371913_371950 = cljs.core.first.call(null,seq__371908_371944__$1);
var n_371951 = cljs.core.nth.call(null,vec__371913_371950,(0),null);
var meth_371952 = cljs.core.nth.call(null,vec__371913_371950,(1),null);
cljs.compiler.emits.call(null,"var ",n_371951," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_371952))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_371952);
} else {
cljs.compiler.emit_fn_method.call(null,meth_371952);
}

cljs.compiler.emitln.call(null,";");

var G__371953 = cljs.core.next.call(null,seq__371908_371944__$1);
var G__371954 = null;
var G__371955 = (0);
var G__371956 = (0);
seq__371908_371932 = G__371953;
chunk__371909_371933 = G__371954;
count__371910_371934 = G__371955;
i__371911_371935 = G__371956;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_371928," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_371929),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_371929)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_371929));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__371914_371957 = cljs.core.seq.call(null,ms_371931);
var chunk__371915_371958 = null;
var count__371916_371959 = (0);
var i__371917_371960 = (0);
while(true){
if((i__371917_371960 < count__371916_371959)){
var vec__371918_371961 = cljs.core._nth.call(null,chunk__371915_371958,i__371917_371960);
var n_371962 = cljs.core.nth.call(null,vec__371918_371961,(0),null);
var meth_371963 = cljs.core.nth.call(null,vec__371918_371961,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_371963))){
cljs.compiler.emitln.call(null,"default:");

var restarg_371964 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_371964," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_371965 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_371964," = new cljs.core.IndexedSeq(",a_371965,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_371962,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_371929)),(((cljs.core.count.call(null,maxparams_371929) > (1)))?", ":null),restarg_371964,");");
} else {
var pcnt_371966 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_371963));
cljs.compiler.emitln.call(null,"case ",pcnt_371966,":");

cljs.compiler.emitln.call(null,"return ",n_371962,".call(this",(((pcnt_371966 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_371966,maxparams_371929))),",")),");");
}

var G__371967 = seq__371914_371957;
var G__371968 = chunk__371915_371958;
var G__371969 = count__371916_371959;
var G__371970 = (i__371917_371960 + (1));
seq__371914_371957 = G__371967;
chunk__371915_371958 = G__371968;
count__371916_371959 = G__371969;
i__371917_371960 = G__371970;
continue;
} else {
var temp__4425__auto___371971 = cljs.core.seq.call(null,seq__371914_371957);
if(temp__4425__auto___371971){
var seq__371914_371972__$1 = temp__4425__auto___371971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371914_371972__$1)){
var c__24964__auto___371973 = cljs.core.chunk_first.call(null,seq__371914_371972__$1);
var G__371974 = cljs.core.chunk_rest.call(null,seq__371914_371972__$1);
var G__371975 = c__24964__auto___371973;
var G__371976 = cljs.core.count.call(null,c__24964__auto___371973);
var G__371977 = (0);
seq__371914_371957 = G__371974;
chunk__371915_371958 = G__371975;
count__371916_371959 = G__371976;
i__371917_371960 = G__371977;
continue;
} else {
var vec__371919_371978 = cljs.core.first.call(null,seq__371914_371972__$1);
var n_371979 = cljs.core.nth.call(null,vec__371919_371978,(0),null);
var meth_371980 = cljs.core.nth.call(null,vec__371919_371978,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_371980))){
cljs.compiler.emitln.call(null,"default:");

var restarg_371981 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_371981," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_371982 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_371981," = new cljs.core.IndexedSeq(",a_371982,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_371979,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_371929)),(((cljs.core.count.call(null,maxparams_371929) > (1)))?", ":null),restarg_371981,");");
} else {
var pcnt_371983 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_371980));
cljs.compiler.emitln.call(null,"case ",pcnt_371983,":");

cljs.compiler.emitln.call(null,"return ",n_371979,".call(this",(((pcnt_371983 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_371983,maxparams_371929))),",")),");");
}

var G__371984 = cljs.core.next.call(null,seq__371914_371972__$1);
var G__371985 = null;
var G__371986 = (0);
var G__371987 = (0);
seq__371914_371957 = G__371984;
chunk__371915_371958 = G__371985;
count__371916_371959 = G__371986;
i__371917_371960 = G__371987;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_371928,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_371928,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_371927__$1,mname_371928,maxparams_371929,mmap_371930,ms_371931,loop_locals,map__371906,map__371906__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__371904_SHARP_){
var vec__371920 = p1__371904_SHARP_;
var n = cljs.core.nth.call(null,vec__371920,(0),null);
var m = cljs.core.nth.call(null,vec__371920,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_371927__$1,mname_371928,maxparams_371929,mmap_371930,ms_371931,loop_locals,map__371906,map__371906__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_371931),".cljs$lang$applyTo;");
} else {
}

var seq__371921_371988 = cljs.core.seq.call(null,ms_371931);
var chunk__371922_371989 = null;
var count__371923_371990 = (0);
var i__371924_371991 = (0);
while(true){
if((i__371924_371991 < count__371923_371990)){
var vec__371925_371992 = cljs.core._nth.call(null,chunk__371922_371989,i__371924_371991);
var n_371993 = cljs.core.nth.call(null,vec__371925_371992,(0),null);
var meth_371994 = cljs.core.nth.call(null,vec__371925_371992,(1),null);
var c_371995 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_371994));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_371994))){
cljs.compiler.emitln.call(null,mname_371928,".cljs$core$IFn$_invoke$arity$variadic = ",n_371993,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_371928,".cljs$core$IFn$_invoke$arity$",c_371995," = ",n_371993,";");
}

var G__371996 = seq__371921_371988;
var G__371997 = chunk__371922_371989;
var G__371998 = count__371923_371990;
var G__371999 = (i__371924_371991 + (1));
seq__371921_371988 = G__371996;
chunk__371922_371989 = G__371997;
count__371923_371990 = G__371998;
i__371924_371991 = G__371999;
continue;
} else {
var temp__4425__auto___372000 = cljs.core.seq.call(null,seq__371921_371988);
if(temp__4425__auto___372000){
var seq__371921_372001__$1 = temp__4425__auto___372000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__371921_372001__$1)){
var c__24964__auto___372002 = cljs.core.chunk_first.call(null,seq__371921_372001__$1);
var G__372003 = cljs.core.chunk_rest.call(null,seq__371921_372001__$1);
var G__372004 = c__24964__auto___372002;
var G__372005 = cljs.core.count.call(null,c__24964__auto___372002);
var G__372006 = (0);
seq__371921_371988 = G__372003;
chunk__371922_371989 = G__372004;
count__371923_371990 = G__372005;
i__371924_371991 = G__372006;
continue;
} else {
var vec__371926_372007 = cljs.core.first.call(null,seq__371921_372001__$1);
var n_372008 = cljs.core.nth.call(null,vec__371926_372007,(0),null);
var meth_372009 = cljs.core.nth.call(null,vec__371926_372007,(1),null);
var c_372010 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_372009));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_372009))){
cljs.compiler.emitln.call(null,mname_371928,".cljs$core$IFn$_invoke$arity$variadic = ",n_372008,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_371928,".cljs$core$IFn$_invoke$arity$",c_372010," = ",n_372008,";");
}

var G__372011 = cljs.core.next.call(null,seq__371921_372001__$1);
var G__372012 = null;
var G__372013 = (0);
var G__372014 = (0);
seq__371921_371988 = G__372011;
chunk__371922_371989 = G__372012;
count__371923_371990 = G__372013;
i__371924_371991 = G__372014;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_371928,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__372015){
var map__372016 = p__372015;
var map__372016__$1 = ((((!((map__372016 == null)))?((((map__372016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__372016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__372016):map__372016);
var statements = cljs.core.get.call(null,map__372016__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__372016__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__372016__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__24149__auto__ = statements;
if(cljs.core.truth_(and__24149__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__24149__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__372018_372022 = cljs.core.seq.call(null,statements);
var chunk__372019_372023 = null;
var count__372020_372024 = (0);
var i__372021_372025 = (0);
while(true){
if((i__372021_372025 < count__372020_372024)){
var s_372026 = cljs.core._nth.call(null,chunk__372019_372023,i__372021_372025);
cljs.compiler.emitln.call(null,s_372026);

var G__372027 = seq__372018_372022;
var G__372028 = chunk__372019_372023;
var G__372029 = count__372020_372024;
var G__372030 = (i__372021_372025 + (1));
seq__372018_372022 = G__372027;
chunk__372019_372023 = G__372028;
count__372020_372024 = G__372029;
i__372021_372025 = G__372030;
continue;
} else {
var temp__4425__auto___372031 = cljs.core.seq.call(null,seq__372018_372022);
if(temp__4425__auto___372031){
var seq__372018_372032__$1 = temp__4425__auto___372031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__372018_372032__$1)){
var c__24964__auto___372033 = cljs.core.chunk_first.call(null,seq__372018_372032__$1);
var G__372034 = cljs.core.chunk_rest.call(null,seq__372018_372032__$1);
var G__372035 = c__24964__auto___372033;
var G__372036 = cljs.core.count.call(null,c__24964__auto___372033);
var G__372037 = (0);
seq__372018_372022 = G__372034;
chunk__372019_372023 = G__372035;
count__372020_372024 = G__372036;
i__372021_372025 = G__372037;
continue;
} else {
var s_372038 = cljs.core.first.call(null,seq__372018_372032__$1);
cljs.compiler.emitln.call(null,s_372038);

var G__372039 = cljs.core.next.call(null,seq__372018_372032__$1);
var G__372040 = null;
var G__372041 = (0);
var G__372042 = (0);
seq__372018_372022 = G__372039;
chunk__372019_372023 = G__372040;
count__372020_372024 = G__372041;
i__372021_372025 = G__372042;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__24149__auto__ = statements;
if(cljs.core.truth_(and__24149__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__24149__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__372043){
var map__372044 = p__372043;
var map__372044__$1 = ((((!((map__372044 == null)))?((((map__372044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__372044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__372044):map__372044);
var env = cljs.core.get.call(null,map__372044__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__372044__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__372044__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__372044__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__372044__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__24161__auto__ = name;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.list(new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"finally","finally",-1065347064,null)))))].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__372046,is_loop){
var map__372058 = p__372046;
var map__372058__$1 = ((((!((map__372058 == null)))?((((map__372058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__372058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__372058):map__372058);
var bindings = cljs.core.get.call(null,map__372058__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__372058__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__372058__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_372060_372069 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_372060_372069,context,map__372058,map__372058__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_372060_372069,context,map__372058,map__372058__$1,bindings,expr,env))
,bindings):null));

try{var seq__372061_372070 = cljs.core.seq.call(null,bindings);
var chunk__372062_372071 = null;
var count__372063_372072 = (0);
var i__372064_372073 = (0);
while(true){
if((i__372064_372073 < count__372063_372072)){
var map__372065_372074 = cljs.core._nth.call(null,chunk__372062_372071,i__372064_372073);
var map__372065_372075__$1 = ((((!((map__372065_372074 == null)))?((((map__372065_372074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__372065_372074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__372065_372074):map__372065_372074);
var binding_372076 = map__372065_372075__$1;
var init_372077 = cljs.core.get.call(null,map__372065_372075__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_372076);

cljs.compiler.emitln.call(null," = ",init_372077,";");

var G__372078 = seq__372061_372070;
var G__372079 = chunk__372062_372071;
var G__372080 = count__372063_372072;
var G__372081 = (i__372064_372073 + (1));
seq__372061_372070 = G__372078;
chunk__372062_372071 = G__372079;
count__372063_372072 = G__372080;
i__372064_372073 = G__372081;
continue;
} else {
var temp__4425__auto___372082 = cljs.core.seq.call(null,seq__372061_372070);
if(temp__4425__auto___372082){
var seq__372061_372083__$1 = temp__4425__auto___372082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__372061_372083__$1)){
var c__24964__auto___372084 = cljs.core.chunk_first.call(null,seq__372061_372083__$1);
var G__372085 = cljs.core.chunk_rest.call(null,seq__372061_372083__$1);
var G__372086 = c__24964__auto___372084;
var G__372087 = cljs.core.count.call(null,c__24964__auto___372084);
var G__372088 = (0);
seq__372061_372070 = G__372085;
chunk__372062_372071 = G__372086;
count__372063_372072 = G__372087;
i__372064_372073 = G__372088;
continue;
} else {
var map__372067_372089 = cljs.core.first.call(null,seq__372061_372083__$1);
var map__372067_372090__$1 = ((((!((map__372067_372089 == null)))?((((map__372067_372089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__372067_372089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__372067_372089):map__372067_372089);
var binding_372091 = map__372067_372090__$1;
var init_372092 = cljs.core.get.call(null,map__372067_372090__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_372091);

cljs.compiler.emitln.call(null," = ",init_372092,";");

var G__372093 = cljs.core.next.call(null,seq__372061_372083__$1);
var G__372094 = null;
var G__372095 = (0);
var G__372096 = (0);
seq__372061_372070 = G__372093;
chunk__372062_372071 = G__372094;
count__372063_372072 = G__372095;
i__372064_372073 = G__372096;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_372060_372069;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__372097){
var map__372098 = p__372097;
var map__372098__$1 = ((((!((map__372098 == null)))?((((map__372098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__372098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__372098):map__372098);
var frame = cljs.core.get.call(null,map__372098__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__372098__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__372098__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__25064__auto___372100 = cljs.core.count.call(null,exprs);
var i_372101 = (0);
while(true){
if((i_372101 < n__25064__auto___372100)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_372101)," = ",exprs.call(null,i_372101),";");

var G__372102 = (i_372101 + (1));
i_372101 = G__372102;
continue;
} else {
}
break;
}

var n__25064__auto___372103 = cljs.core.count.call(null,exprs);
var i_372104 = (0);
while(true){
if((i_372104 < n__25064__auto___372103)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_372104))," = ",temps.call(null,i_372104),";");

var G__372105 = (i_372104 + (1));
i_372104 = G__372105;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__372106){
var map__372107 = p__372106;
var map__372107__$1 = ((((!((map__372107 == null)))?((((map__372107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__372107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__372107):map__372107);
var bindings = cljs.core.get.call(null,map__372107__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__372107__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__372107__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__372109_372117 = cljs.core.seq.call(null,bindings);
var chunk__372110_372118 = null;
var count__372111_372119 = (0);
var i__372112_372120 = (0);
while(true){
if((i__372112_372120 < count__372111_372119)){
var map__372113_372121 = cljs.core._nth.call(null,chunk__372110_372118,i__372112_372120);
var map__372113_372122__$1 = ((((!((map__372113_372121 == null)))?((((map__372113_372121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__372113_372121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__372113_372121):map__372113_372121);
var binding_372123 = map__372113_372122__$1;
var init_372124 = cljs.core.get.call(null,map__372113_372122__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_372123)," = ",init_372124,";");

var G__372125 = seq__372109_372117;
var G__372126 = chunk__372110_372118;
var G__372127 = count__372111_372119;
var G__372128 = (i__372112_372120 + (1));
seq__372109_372117 = G__372125;
chunk__372110_372118 = G__372126;
count__372111_372119 = G__372127;
i__372112_372120 = G__372128;
continue;
} else {
var temp__4425__auto___372129 = cljs.core.seq.call(null,seq__372109_372117);
if(temp__4425__auto___372129){
var seq__372109_372130__$1 = temp__4425__auto___372129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__372109_372130__$1)){
var c__24964__auto___372131 = cljs.core.chunk_first.call(null,seq__372109_372130__$1);
var G__372132 = cljs.core.chunk_rest.call(null,seq__372109_372130__$1);
var G__372133 = c__24964__auto___372131;
var G__372134 = cljs.core.count.call(null,c__24964__auto___372131);
var G__372135 = (0);
seq__372109_372117 = G__372132;
chunk__372110_372118 = G__372133;
count__372111_372119 = G__372134;
i__372112_372120 = G__372135;
continue;
} else {
var map__372115_372136 = cljs.core.first.call(null,seq__372109_372130__$1);
var map__372115_372137__$1 = ((((!((map__372115_372136 == null)))?((((map__372115_372136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__372115_372136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__372115_372136):map__372115_372136);
var binding_372138 = map__372115_372137__$1;
var init_372139 = cljs.core.get.call(null,map__372115_372137__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_372138)," = ",init_372139,";");

var G__372140 = cljs.core.next.call(null,seq__372109_372130__$1);
var G__372141 = null;
var G__372142 = (0);
var G__372143 = (0);
seq__372109_372117 = G__372140;
chunk__372110_372118 = G__372141;
count__372111_372119 = G__372142;
i__372112_372120 = G__372143;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__372146){
var map__372147 = p__372146;
var map__372147__$1 = ((((!((map__372147 == null)))?((((map__372147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__372147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__372147):map__372147);
var expr = map__372147__$1;
var f = cljs.core.get.call(null,map__372147__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__372147__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__372147__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__24149__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__24149__auto__)){
var and__24149__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__24149__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__24149__auto____$1;
}
} else {
return and__24149__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__24149__auto__ = protocol;
if(cljs.core.truth_(and__24149__auto__)){
var and__24149__auto____$1 = tag;
if(cljs.core.truth_(and__24149__auto____$1)){
var or__24161__auto__ = (function (){var and__24149__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__24149__auto____$2)){
var and__24149__auto____$3 = protocol;
if(cljs.core.truth_(and__24149__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__24149__auto____$3;
}
} else {
return and__24149__auto____$2;
}
})();
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
var and__24149__auto____$2 = (function (){var or__24161__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__24161__auto____$1)){
return or__24161__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__24149__auto____$2)){
var or__24161__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__24161__auto____$1){
return or__24161__auto____$1;
} else {
var and__24149__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__24149__auto____$3){
var and__24149__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__24149__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__24149__auto____$4;
}
} else {
return and__24149__auto____$3;
}
}
} else {
return and__24149__auto____$2;
}
}
} else {
return and__24149__auto____$1;
}
} else {
return and__24149__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__24161__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__24161__auto__){
return or__24161__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__372149 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__24149__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__24149__auto__)){
return (arity > mfa);
} else {
return and__24149__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__372147,map__372147__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__372147,map__372147__$1,expr,f,args,env){
return (function (p1__372144_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__372144_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__372147,map__372147__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__372147,map__372147__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__372147,map__372147__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__372147,map__372147__$1,expr,f,args,env){
return (function (p1__372145_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__372145_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__372147,map__372147__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__372147,map__372147__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__372149,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__372149,(1),null);
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_372150 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_372150,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_372151 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_372151,args)),(((mfa_372151 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_372151,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__24161__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
var or__24161__auto____$1 = js_QMARK_;
if(or__24161__auto____$1){
return or__24161__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__24149__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__24149__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__24149__auto__;
}
})())){
var fprop_372152 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_372152," ? ",f__$1,fprop_372152,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__372153){
var map__372154 = p__372153;
var map__372154__$1 = ((((!((map__372154 == null)))?((((map__372154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__372154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__372154):map__372154);
var ctor = cljs.core.get.call(null,map__372154__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__372154__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__372154__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__372156){
var map__372157 = p__372156;
var map__372157__$1 = ((((!((map__372157 == null)))?((((map__372157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__372157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__372157):map__372157);
var target = cljs.core.get.call(null,map__372157__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__372157__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__372157__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__372163_372167 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__372164_372168 = null;
var count__372165_372169 = (0);
var i__372166_372170 = (0);
while(true){
if((i__372166_372170 < count__372165_372169)){
var lib_372171 = cljs.core._nth.call(null,chunk__372164_372168,i__372166_372170);
if(cljs.core.truth_((function (){var or__24161__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_372171),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_372171),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24161__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_372171),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_372171),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_372171),"');");

}
}

var G__372172 = seq__372163_372167;
var G__372173 = chunk__372164_372168;
var G__372174 = count__372165_372169;
var G__372175 = (i__372166_372170 + (1));
seq__372163_372167 = G__372172;
chunk__372164_372168 = G__372173;
count__372165_372169 = G__372174;
i__372166_372170 = G__372175;
continue;
} else {
var temp__4425__auto___372176 = cljs.core.seq.call(null,seq__372163_372167);
if(temp__4425__auto___372176){
var seq__372163_372177__$1 = temp__4425__auto___372176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__372163_372177__$1)){
var c__24964__auto___372178 = cljs.core.chunk_first.call(null,seq__372163_372177__$1);
var G__372179 = cljs.core.chunk_rest.call(null,seq__372163_372177__$1);
var G__372180 = c__24964__auto___372178;
var G__372181 = cljs.core.count.call(null,c__24964__auto___372178);
var G__372182 = (0);
seq__372163_372167 = G__372179;
chunk__372164_372168 = G__372180;
count__372165_372169 = G__372181;
i__372166_372170 = G__372182;
continue;
} else {
var lib_372183 = cljs.core.first.call(null,seq__372163_372177__$1);
if(cljs.core.truth_((function (){var or__24161__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_372183),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_372183),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24161__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_372183),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_372183),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_372183),"');");

}
}

var G__372184 = cljs.core.next.call(null,seq__372163_372177__$1);
var G__372185 = null;
var G__372186 = (0);
var G__372187 = (0);
seq__372163_372167 = G__372184;
chunk__372164_372168 = G__372185;
count__372165_372169 = G__372186;
i__372166_372170 = G__372187;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__372188){
var map__372189 = p__372188;
var map__372189__$1 = ((((!((map__372189 == null)))?((((map__372189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__372189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__372189):map__372189);
var name = cljs.core.get.call(null,map__372189__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__372189__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__372189__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__372189__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__372189__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__372189__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__372191){
var map__372192 = p__372191;
var map__372192__$1 = ((((!((map__372192 == null)))?((((map__372192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__372192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__372192):map__372192);
var t = cljs.core.get.call(null,map__372192__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__372192__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__372192__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__372192__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__372192__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__372194_372208 = cljs.core.seq.call(null,protocols);
var chunk__372195_372209 = null;
var count__372196_372210 = (0);
var i__372197_372211 = (0);
while(true){
if((i__372197_372211 < count__372196_372210)){
var protocol_372212 = cljs.core._nth.call(null,chunk__372195_372209,i__372197_372211);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_372212)].join('')),"}");

var G__372213 = seq__372194_372208;
var G__372214 = chunk__372195_372209;
var G__372215 = count__372196_372210;
var G__372216 = (i__372197_372211 + (1));
seq__372194_372208 = G__372213;
chunk__372195_372209 = G__372214;
count__372196_372210 = G__372215;
i__372197_372211 = G__372216;
continue;
} else {
var temp__4425__auto___372217 = cljs.core.seq.call(null,seq__372194_372208);
if(temp__4425__auto___372217){
var seq__372194_372218__$1 = temp__4425__auto___372217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__372194_372218__$1)){
var c__24964__auto___372219 = cljs.core.chunk_first.call(null,seq__372194_372218__$1);
var G__372220 = cljs.core.chunk_rest.call(null,seq__372194_372218__$1);
var G__372221 = c__24964__auto___372219;
var G__372222 = cljs.core.count.call(null,c__24964__auto___372219);
var G__372223 = (0);
seq__372194_372208 = G__372220;
chunk__372195_372209 = G__372221;
count__372196_372210 = G__372222;
i__372197_372211 = G__372223;
continue;
} else {
var protocol_372224 = cljs.core.first.call(null,seq__372194_372218__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_372224)].join('')),"}");

var G__372225 = cljs.core.next.call(null,seq__372194_372218__$1);
var G__372226 = null;
var G__372227 = (0);
var G__372228 = (0);
seq__372194_372208 = G__372225;
chunk__372195_372209 = G__372226;
count__372196_372210 = G__372227;
i__372197_372211 = G__372228;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__372198_372229 = cljs.core.seq.call(null,fields__$1);
var chunk__372199_372230 = null;
var count__372200_372231 = (0);
var i__372201_372232 = (0);
while(true){
if((i__372201_372232 < count__372200_372231)){
var fld_372233 = cljs.core._nth.call(null,chunk__372199_372230,i__372201_372232);
cljs.compiler.emitln.call(null,"this.",fld_372233," = ",fld_372233,";");

var G__372234 = seq__372198_372229;
var G__372235 = chunk__372199_372230;
var G__372236 = count__372200_372231;
var G__372237 = (i__372201_372232 + (1));
seq__372198_372229 = G__372234;
chunk__372199_372230 = G__372235;
count__372200_372231 = G__372236;
i__372201_372232 = G__372237;
continue;
} else {
var temp__4425__auto___372238 = cljs.core.seq.call(null,seq__372198_372229);
if(temp__4425__auto___372238){
var seq__372198_372239__$1 = temp__4425__auto___372238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__372198_372239__$1)){
var c__24964__auto___372240 = cljs.core.chunk_first.call(null,seq__372198_372239__$1);
var G__372241 = cljs.core.chunk_rest.call(null,seq__372198_372239__$1);
var G__372242 = c__24964__auto___372240;
var G__372243 = cljs.core.count.call(null,c__24964__auto___372240);
var G__372244 = (0);
seq__372198_372229 = G__372241;
chunk__372199_372230 = G__372242;
count__372200_372231 = G__372243;
i__372201_372232 = G__372244;
continue;
} else {
var fld_372245 = cljs.core.first.call(null,seq__372198_372239__$1);
cljs.compiler.emitln.call(null,"this.",fld_372245," = ",fld_372245,";");

var G__372246 = cljs.core.next.call(null,seq__372198_372239__$1);
var G__372247 = null;
var G__372248 = (0);
var G__372249 = (0);
seq__372198_372229 = G__372246;
chunk__372199_372230 = G__372247;
count__372200_372231 = G__372248;
i__372201_372232 = G__372249;
continue;
}
} else {
}
}
break;
}

var seq__372202_372250 = cljs.core.seq.call(null,pmasks);
var chunk__372203_372251 = null;
var count__372204_372252 = (0);
var i__372205_372253 = (0);
while(true){
if((i__372205_372253 < count__372204_372252)){
var vec__372206_372254 = cljs.core._nth.call(null,chunk__372203_372251,i__372205_372253);
var pno_372255 = cljs.core.nth.call(null,vec__372206_372254,(0),null);
var pmask_372256 = cljs.core.nth.call(null,vec__372206_372254,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_372255,"$ = ",pmask_372256,";");

var G__372257 = seq__372202_372250;
var G__372258 = chunk__372203_372251;
var G__372259 = count__372204_372252;
var G__372260 = (i__372205_372253 + (1));
seq__372202_372250 = G__372257;
chunk__372203_372251 = G__372258;
count__372204_372252 = G__372259;
i__372205_372253 = G__372260;
continue;
} else {
var temp__4425__auto___372261 = cljs.core.seq.call(null,seq__372202_372250);
if(temp__4425__auto___372261){
var seq__372202_372262__$1 = temp__4425__auto___372261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__372202_372262__$1)){
var c__24964__auto___372263 = cljs.core.chunk_first.call(null,seq__372202_372262__$1);
var G__372264 = cljs.core.chunk_rest.call(null,seq__372202_372262__$1);
var G__372265 = c__24964__auto___372263;
var G__372266 = cljs.core.count.call(null,c__24964__auto___372263);
var G__372267 = (0);
seq__372202_372250 = G__372264;
chunk__372203_372251 = G__372265;
count__372204_372252 = G__372266;
i__372205_372253 = G__372267;
continue;
} else {
var vec__372207_372268 = cljs.core.first.call(null,seq__372202_372262__$1);
var pno_372269 = cljs.core.nth.call(null,vec__372207_372268,(0),null);
var pmask_372270 = cljs.core.nth.call(null,vec__372207_372268,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_372269,"$ = ",pmask_372270,";");

var G__372271 = cljs.core.next.call(null,seq__372202_372262__$1);
var G__372272 = null;
var G__372273 = (0);
var G__372274 = (0);
seq__372202_372250 = G__372271;
chunk__372203_372251 = G__372272;
count__372204_372252 = G__372273;
i__372205_372253 = G__372274;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__372275){
var map__372276 = p__372275;
var map__372276__$1 = ((((!((map__372276 == null)))?((((map__372276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__372276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__372276):map__372276);
var t = cljs.core.get.call(null,map__372276__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__372276__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__372276__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__372276__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__372276__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__372278_372292 = cljs.core.seq.call(null,protocols);
var chunk__372279_372293 = null;
var count__372280_372294 = (0);
var i__372281_372295 = (0);
while(true){
if((i__372281_372295 < count__372280_372294)){
var protocol_372296 = cljs.core._nth.call(null,chunk__372279_372293,i__372281_372295);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_372296)].join('')),"}");

var G__372297 = seq__372278_372292;
var G__372298 = chunk__372279_372293;
var G__372299 = count__372280_372294;
var G__372300 = (i__372281_372295 + (1));
seq__372278_372292 = G__372297;
chunk__372279_372293 = G__372298;
count__372280_372294 = G__372299;
i__372281_372295 = G__372300;
continue;
} else {
var temp__4425__auto___372301 = cljs.core.seq.call(null,seq__372278_372292);
if(temp__4425__auto___372301){
var seq__372278_372302__$1 = temp__4425__auto___372301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__372278_372302__$1)){
var c__24964__auto___372303 = cljs.core.chunk_first.call(null,seq__372278_372302__$1);
var G__372304 = cljs.core.chunk_rest.call(null,seq__372278_372302__$1);
var G__372305 = c__24964__auto___372303;
var G__372306 = cljs.core.count.call(null,c__24964__auto___372303);
var G__372307 = (0);
seq__372278_372292 = G__372304;
chunk__372279_372293 = G__372305;
count__372280_372294 = G__372306;
i__372281_372295 = G__372307;
continue;
} else {
var protocol_372308 = cljs.core.first.call(null,seq__372278_372302__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_372308)].join('')),"}");

var G__372309 = cljs.core.next.call(null,seq__372278_372302__$1);
var G__372310 = null;
var G__372311 = (0);
var G__372312 = (0);
seq__372278_372292 = G__372309;
chunk__372279_372293 = G__372310;
count__372280_372294 = G__372311;
i__372281_372295 = G__372312;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__372282_372313 = cljs.core.seq.call(null,fields__$1);
var chunk__372283_372314 = null;
var count__372284_372315 = (0);
var i__372285_372316 = (0);
while(true){
if((i__372285_372316 < count__372284_372315)){
var fld_372317 = cljs.core._nth.call(null,chunk__372283_372314,i__372285_372316);
cljs.compiler.emitln.call(null,"this.",fld_372317," = ",fld_372317,";");

var G__372318 = seq__372282_372313;
var G__372319 = chunk__372283_372314;
var G__372320 = count__372284_372315;
var G__372321 = (i__372285_372316 + (1));
seq__372282_372313 = G__372318;
chunk__372283_372314 = G__372319;
count__372284_372315 = G__372320;
i__372285_372316 = G__372321;
continue;
} else {
var temp__4425__auto___372322 = cljs.core.seq.call(null,seq__372282_372313);
if(temp__4425__auto___372322){
var seq__372282_372323__$1 = temp__4425__auto___372322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__372282_372323__$1)){
var c__24964__auto___372324 = cljs.core.chunk_first.call(null,seq__372282_372323__$1);
var G__372325 = cljs.core.chunk_rest.call(null,seq__372282_372323__$1);
var G__372326 = c__24964__auto___372324;
var G__372327 = cljs.core.count.call(null,c__24964__auto___372324);
var G__372328 = (0);
seq__372282_372313 = G__372325;
chunk__372283_372314 = G__372326;
count__372284_372315 = G__372327;
i__372285_372316 = G__372328;
continue;
} else {
var fld_372329 = cljs.core.first.call(null,seq__372282_372323__$1);
cljs.compiler.emitln.call(null,"this.",fld_372329," = ",fld_372329,";");

var G__372330 = cljs.core.next.call(null,seq__372282_372323__$1);
var G__372331 = null;
var G__372332 = (0);
var G__372333 = (0);
seq__372282_372313 = G__372330;
chunk__372283_372314 = G__372331;
count__372284_372315 = G__372332;
i__372285_372316 = G__372333;
continue;
}
} else {
}
}
break;
}

var seq__372286_372334 = cljs.core.seq.call(null,pmasks);
var chunk__372287_372335 = null;
var count__372288_372336 = (0);
var i__372289_372337 = (0);
while(true){
if((i__372289_372337 < count__372288_372336)){
var vec__372290_372338 = cljs.core._nth.call(null,chunk__372287_372335,i__372289_372337);
var pno_372339 = cljs.core.nth.call(null,vec__372290_372338,(0),null);
var pmask_372340 = cljs.core.nth.call(null,vec__372290_372338,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_372339,"$ = ",pmask_372340,";");

var G__372341 = seq__372286_372334;
var G__372342 = chunk__372287_372335;
var G__372343 = count__372288_372336;
var G__372344 = (i__372289_372337 + (1));
seq__372286_372334 = G__372341;
chunk__372287_372335 = G__372342;
count__372288_372336 = G__372343;
i__372289_372337 = G__372344;
continue;
} else {
var temp__4425__auto___372345 = cljs.core.seq.call(null,seq__372286_372334);
if(temp__4425__auto___372345){
var seq__372286_372346__$1 = temp__4425__auto___372345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__372286_372346__$1)){
var c__24964__auto___372347 = cljs.core.chunk_first.call(null,seq__372286_372346__$1);
var G__372348 = cljs.core.chunk_rest.call(null,seq__372286_372346__$1);
var G__372349 = c__24964__auto___372347;
var G__372350 = cljs.core.count.call(null,c__24964__auto___372347);
var G__372351 = (0);
seq__372286_372334 = G__372348;
chunk__372287_372335 = G__372349;
count__372288_372336 = G__372350;
i__372289_372337 = G__372351;
continue;
} else {
var vec__372291_372352 = cljs.core.first.call(null,seq__372286_372346__$1);
var pno_372353 = cljs.core.nth.call(null,vec__372291_372352,(0),null);
var pmask_372354 = cljs.core.nth.call(null,vec__372291_372352,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_372353,"$ = ",pmask_372354,";");

var G__372355 = cljs.core.next.call(null,seq__372286_372346__$1);
var G__372356 = null;
var G__372357 = (0);
var G__372358 = (0);
seq__372286_372334 = G__372355;
chunk__372287_372335 = G__372356;
count__372288_372336 = G__372357;
i__372289_372337 = G__372358;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__372359){
var map__372360 = p__372359;
var map__372360__$1 = ((((!((map__372360 == null)))?((((map__372360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__372360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__372360):map__372360);
var target = cljs.core.get.call(null,map__372360__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__372360__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__372360__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__372360__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__372360__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__372362){
var map__372363 = p__372362;
var map__372363__$1 = ((((!((map__372363 == null)))?((((map__372363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__372363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__372363):map__372363);
var op = cljs.core.get.call(null,map__372363__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__372363__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__372363__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__372363__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__372363__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__24149__auto__ = code;
if(cljs.core.truth_(and__24149__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__24149__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__372373 = cljs.core.seq.call(null,table);
var chunk__372374 = null;
var count__372375 = (0);
var i__372376 = (0);
while(true){
if((i__372376 < count__372375)){
var vec__372377 = cljs.core._nth.call(null,chunk__372374,i__372376);
var sym = cljs.core.nth.call(null,vec__372377,(0),null);
var value = cljs.core.nth.call(null,vec__372377,(1),null);
var ns_372379 = cljs.core.namespace.call(null,sym);
var name_372380 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__372381 = seq__372373;
var G__372382 = chunk__372374;
var G__372383 = count__372375;
var G__372384 = (i__372376 + (1));
seq__372373 = G__372381;
chunk__372374 = G__372382;
count__372375 = G__372383;
i__372376 = G__372384;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__372373);
if(temp__4425__auto__){
var seq__372373__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__372373__$1)){
var c__24964__auto__ = cljs.core.chunk_first.call(null,seq__372373__$1);
var G__372385 = cljs.core.chunk_rest.call(null,seq__372373__$1);
var G__372386 = c__24964__auto__;
var G__372387 = cljs.core.count.call(null,c__24964__auto__);
var G__372388 = (0);
seq__372373 = G__372385;
chunk__372374 = G__372386;
count__372375 = G__372387;
i__372376 = G__372388;
continue;
} else {
var vec__372378 = cljs.core.first.call(null,seq__372373__$1);
var sym = cljs.core.nth.call(null,vec__372378,(0),null);
var value = cljs.core.nth.call(null,vec__372378,(1),null);
var ns_372389 = cljs.core.namespace.call(null,sym);
var name_372390 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__372391 = cljs.core.next.call(null,seq__372373__$1);
var G__372392 = null;
var G__372393 = (0);
var G__372394 = (0);
seq__372373 = G__372391;
chunk__372374 = G__372392;
count__372375 = G__372393;
i__372376 = G__372394;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map