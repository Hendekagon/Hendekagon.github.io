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
var map__1880074 = s;
var map__1880074__$1 = ((((!((map__1880074 == null)))?((((map__1880074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880074):map__1880074);
var name = cljs.core.get.call(null,map__1880074__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__1880074__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__1880077 = info;
var map__1880078 = G__1880077;
var map__1880078__$1 = ((((!((map__1880078 == null)))?((((map__1880078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880078):map__1880078);
var shadow = cljs.core.get.call(null,map__1880078__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__1880077__$1 = G__1880077;
while(true){
var d__$2 = d__$1;
var map__1880080 = G__1880077__$1;
var map__1880080__$1 = ((((!((map__1880080 == null)))?((((map__1880080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880080):map__1880080);
var shadow__$1 = cljs.core.get.call(null,map__1880080__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__1880082 = (d__$2 + (1));
var G__1880083 = shadow__$1;
d__$1 = G__1880082;
G__1880077__$1 = G__1880083;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__1880084){
var map__1880089 = p__1880084;
var map__1880089__$1 = ((((!((map__1880089 == null)))?((((map__1880089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880089):map__1880089);
var name_var = map__1880089__$1;
var name = cljs.core.get.call(null,map__1880089__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__1880089__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__1880091 = info;
var map__1880091__$1 = ((((!((map__1880091 == null)))?((((map__1880091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880091):map__1880091);
var ns = cljs.core.get.call(null,map__1880091__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__1880091__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args1880093 = [];
var len__25219__auto___1880096 = arguments.length;
var i__25220__auto___1880097 = (0);
while(true){
if((i__25220__auto___1880097 < len__25219__auto___1880096)){
args1880093.push((arguments[i__25220__auto___1880097]));

var G__1880098 = (i__25220__auto___1880097 + (1));
i__25220__auto___1880097 = G__1880098;
continue;
} else {
}
break;
}

var G__1880095 = args1880093.length;
switch (G__1880095) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1880093.length)].join('')));

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
var G__1880101 = cp;
switch (G__1880101) {
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
var seq__1880107_1880111 = cljs.core.seq.call(null,s);
var chunk__1880108_1880112 = null;
var count__1880109_1880113 = (0);
var i__1880110_1880114 = (0);
while(true){
if((i__1880110_1880114 < count__1880109_1880113)){
var c_1880115 = cljs.core._nth.call(null,chunk__1880108_1880112,i__1880110_1880114);
sb.append(cljs.compiler.escape_char.call(null,c_1880115));

var G__1880116 = seq__1880107_1880111;
var G__1880117 = chunk__1880108_1880112;
var G__1880118 = count__1880109_1880113;
var G__1880119 = (i__1880110_1880114 + (1));
seq__1880107_1880111 = G__1880116;
chunk__1880108_1880112 = G__1880117;
count__1880109_1880113 = G__1880118;
i__1880110_1880114 = G__1880119;
continue;
} else {
var temp__4425__auto___1880120 = cljs.core.seq.call(null,seq__1880107_1880111);
if(temp__4425__auto___1880120){
var seq__1880107_1880121__$1 = temp__4425__auto___1880120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880107_1880121__$1)){
var c__24964__auto___1880122 = cljs.core.chunk_first.call(null,seq__1880107_1880121__$1);
var G__1880123 = cljs.core.chunk_rest.call(null,seq__1880107_1880121__$1);
var G__1880124 = c__24964__auto___1880122;
var G__1880125 = cljs.core.count.call(null,c__24964__auto___1880122);
var G__1880126 = (0);
seq__1880107_1880111 = G__1880123;
chunk__1880108_1880112 = G__1880124;
count__1880109_1880113 = G__1880125;
i__1880110_1880114 = G__1880126;
continue;
} else {
var c_1880127 = cljs.core.first.call(null,seq__1880107_1880121__$1);
sb.append(cljs.compiler.escape_char.call(null,c_1880127));

var G__1880128 = cljs.core.next.call(null,seq__1880107_1880121__$1);
var G__1880129 = null;
var G__1880130 = (0);
var G__1880131 = (0);
seq__1880107_1880111 = G__1880128;
chunk__1880108_1880112 = G__1880129;
count__1880109_1880113 = G__1880130;
i__1880110_1880114 = G__1880131;
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
var map__1880137_1880142 = ast;
var map__1880137_1880143__$1 = ((((!((map__1880137_1880142 == null)))?((((map__1880137_1880142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880137_1880142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880137_1880142):map__1880137_1880142);
var env_1880144 = cljs.core.get.call(null,map__1880137_1880143__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_1880144))){
var map__1880139_1880145 = env_1880144;
var map__1880139_1880146__$1 = ((((!((map__1880139_1880145 == null)))?((((map__1880139_1880145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880139_1880145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880139_1880145):map__1880139_1880145);
var line_1880147 = cljs.core.get.call(null,map__1880139_1880146__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_1880148 = cljs.core.get.call(null,map__1880139_1880146__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__1880139_1880145,map__1880139_1880146__$1,line_1880147,column_1880148,map__1880137_1880142,map__1880137_1880143__$1,env_1880144,val__25745__auto__){
return (function (m){
var minfo = (function (){var G__1880141 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__1880141__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__1880141,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__1880141);
return G__1880141__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_1880147 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__1880139_1880145,map__1880139_1880146__$1,line_1880147,column_1880148,map__1880137_1880142,map__1880137_1880143__$1,env_1880144,val__25745__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_1880148)?(column_1880148 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__1880139_1880145,map__1880139_1880146__$1,line_1880147,column_1880148,map__1880137_1880142,map__1880137_1880143__$1,env_1880144,val__25745__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__1880139_1880145,map__1880139_1880146__$1,line_1880147,column_1880148,map__1880137_1880142,map__1880137_1880143__$1,env_1880144,val__25745__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__1880139_1880145,map__1880139_1880146__$1,line_1880147,column_1880148,map__1880137_1880142,map__1880137_1880143__$1,env_1880144,val__25745__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__1880139_1880145,map__1880139_1880146__$1,line_1880147,column_1880148,map__1880137_1880142,map__1880137_1880143__$1,env_1880144,val__25745__auto__))
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
var len__25219__auto___1880155 = arguments.length;
var i__25220__auto___1880156 = (0);
while(true){
if((i__25220__auto___1880156 < len__25219__auto___1880155)){
args__25226__auto__.push((arguments[i__25220__auto___1880156]));

var G__1880157 = (i__25220__auto___1880156 + (1));
i__25220__auto___1880156 = G__1880157;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((0) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__25227__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__1880151_1880158 = cljs.core.seq.call(null,xs);
var chunk__1880152_1880159 = null;
var count__1880153_1880160 = (0);
var i__1880154_1880161 = (0);
while(true){
if((i__1880154_1880161 < count__1880153_1880160)){
var x_1880162 = cljs.core._nth.call(null,chunk__1880152_1880159,i__1880154_1880161);
if((x_1880162 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_1880162)){
cljs.compiler.emit.call(null,x_1880162);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_1880162)){
cljs.core.apply.call(null,cljs.compiler.emits,x_1880162);
} else {
if(goog.isFunction(x_1880162)){
x_1880162.call(null);
} else {
var s_1880163 = cljs.core.print_str.call(null,x_1880162);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__1880151_1880158,chunk__1880152_1880159,count__1880153_1880160,i__1880154_1880161,s_1880163,x_1880162){
return (function (p1__1880149_SHARP_){
return (p1__1880149_SHARP_ + cljs.core.count.call(null,s_1880163));
});})(seq__1880151_1880158,chunk__1880152_1880159,count__1880153_1880160,i__1880154_1880161,s_1880163,x_1880162))
);
}

cljs.core.print.call(null,s_1880163);

}
}
}
}

var G__1880164 = seq__1880151_1880158;
var G__1880165 = chunk__1880152_1880159;
var G__1880166 = count__1880153_1880160;
var G__1880167 = (i__1880154_1880161 + (1));
seq__1880151_1880158 = G__1880164;
chunk__1880152_1880159 = G__1880165;
count__1880153_1880160 = G__1880166;
i__1880154_1880161 = G__1880167;
continue;
} else {
var temp__4425__auto___1880168 = cljs.core.seq.call(null,seq__1880151_1880158);
if(temp__4425__auto___1880168){
var seq__1880151_1880169__$1 = temp__4425__auto___1880168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880151_1880169__$1)){
var c__24964__auto___1880170 = cljs.core.chunk_first.call(null,seq__1880151_1880169__$1);
var G__1880171 = cljs.core.chunk_rest.call(null,seq__1880151_1880169__$1);
var G__1880172 = c__24964__auto___1880170;
var G__1880173 = cljs.core.count.call(null,c__24964__auto___1880170);
var G__1880174 = (0);
seq__1880151_1880158 = G__1880171;
chunk__1880152_1880159 = G__1880172;
count__1880153_1880160 = G__1880173;
i__1880154_1880161 = G__1880174;
continue;
} else {
var x_1880175 = cljs.core.first.call(null,seq__1880151_1880169__$1);
if((x_1880175 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_1880175)){
cljs.compiler.emit.call(null,x_1880175);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_1880175)){
cljs.core.apply.call(null,cljs.compiler.emits,x_1880175);
} else {
if(goog.isFunction(x_1880175)){
x_1880175.call(null);
} else {
var s_1880176 = cljs.core.print_str.call(null,x_1880175);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__1880151_1880158,chunk__1880152_1880159,count__1880153_1880160,i__1880154_1880161,s_1880176,x_1880175,seq__1880151_1880169__$1,temp__4425__auto___1880168){
return (function (p1__1880149_SHARP_){
return (p1__1880149_SHARP_ + cljs.core.count.call(null,s_1880176));
});})(seq__1880151_1880158,chunk__1880152_1880159,count__1880153_1880160,i__1880154_1880161,s_1880176,x_1880175,seq__1880151_1880169__$1,temp__4425__auto___1880168))
);
}

cljs.core.print.call(null,s_1880176);

}
}
}
}

var G__1880177 = cljs.core.next.call(null,seq__1880151_1880169__$1);
var G__1880178 = null;
var G__1880179 = (0);
var G__1880180 = (0);
seq__1880151_1880158 = G__1880177;
chunk__1880152_1880159 = G__1880178;
count__1880153_1880160 = G__1880179;
i__1880154_1880161 = G__1880180;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq1880150){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1880150));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__25226__auto__ = [];
var len__25219__auto___1880185 = arguments.length;
var i__25220__auto___1880186 = (0);
while(true){
if((i__25220__auto___1880186 < len__25219__auto___1880185)){
args__25226__auto__.push((arguments[i__25220__auto___1880186]));

var G__1880187 = (i__25220__auto___1880186 + (1));
i__25220__auto___1880186 = G__1880187;
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
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__1880182){
var map__1880183 = p__1880182;
var map__1880183__$1 = ((((!((map__1880183 == null)))?((((map__1880183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880183):map__1880183);
var m = map__1880183__$1;
var gen_line = cljs.core.get.call(null,map__1880183__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq1880181){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1880181));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__25135__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_1880190_1880192 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_1880191_1880193 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_1880190_1880192,_STAR_print_fn_STAR_1880191_1880193,sb__25135__auto__){
return (function (x__25136__auto__){
return sb__25135__auto__.append(x__25136__auto__);
});})(_STAR_print_newline_STAR_1880190_1880192,_STAR_print_fn_STAR_1880191_1880193,sb__25135__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_1880191_1880193;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_1880190_1880192;
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
var vec__1880194 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__1880194,(0),null);
var flags = cljs.core.nth.call(null,vec__1880194,(1),null);
var pattern = cljs.core.nth.call(null,vec__1880194,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__1880196){
var map__1880197 = p__1880196;
var map__1880197__$1 = ((((!((map__1880197 == null)))?((((map__1880197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880197):map__1880197);
var arg = map__1880197__$1;
var info = cljs.core.get.call(null,map__1880197__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__1880197__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__1880197__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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

cljs.compiler.emits.call(null,(function (){var G__1880199 = info__$1;
var G__1880199__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__1880199):G__1880199);
return G__1880199__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__1880200){
var map__1880201 = p__1880200;
var map__1880201__$1 = ((((!((map__1880201 == null)))?((((map__1880201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880201):map__1880201);
var arg = map__1880201__$1;
var env = cljs.core.get.call(null,map__1880201__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__1880201__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__1880201__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__1880201__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__1880203 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__1880203__$1 = ((((!((map__1880203 == null)))?((((map__1880203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880203):map__1880203);
var name = cljs.core.get.call(null,map__1880203__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__1880205){
var map__1880206 = p__1880205;
var map__1880206__$1 = ((((!((map__1880206 == null)))?((((map__1880206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880206):map__1880206);
var expr = cljs.core.get.call(null,map__1880206__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__1880206__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__1880206__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return (cljs.core.every_QMARK_.call(null,(function (p1__1880208_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__1880208_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__1880209){
var map__1880210 = p__1880209;
var map__1880210__$1 = ((((!((map__1880210 == null)))?((((map__1880210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880210):map__1880210);
var env = cljs.core.get.call(null,map__1880210__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__1880210__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__1880210__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__1880212){
var map__1880213 = p__1880212;
var map__1880213__$1 = ((((!((map__1880213 == null)))?((((map__1880213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880213):map__1880213);
var items = cljs.core.get.call(null,map__1880213__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__1880213__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__1880215){
var map__1880216 = p__1880215;
var map__1880216__$1 = ((((!((map__1880216 == null)))?((((map__1880216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880216):map__1880216);
var items = cljs.core.get.call(null,map__1880216__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__1880216__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_1880218 = cljs.core.count.call(null,items);
if((cnt_1880218 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_1880218,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
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
return (cljs.core.every_QMARK_.call(null,(function (p1__1880219_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__1880219_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__1880220){
var map__1880221 = p__1880220;
var map__1880221__$1 = ((((!((map__1880221 == null)))?((((map__1880221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880221):map__1880221);
var items = cljs.core.get.call(null,map__1880221__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__1880221__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__1880223){
var map__1880224 = p__1880223;
var map__1880224__$1 = ((((!((map__1880224 == null)))?((((map__1880224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880224):map__1880224);
var items = cljs.core.get.call(null,map__1880224__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__1880224__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__1880224__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___1880234 = cljs.core.seq.call(null,items);
if(temp__4425__auto___1880234){
var items_1880235__$1 = temp__4425__auto___1880234;
var vec__1880226_1880236 = items_1880235__$1;
var vec__1880227_1880237 = cljs.core.nth.call(null,vec__1880226_1880236,(0),null);
var k_1880238 = cljs.core.nth.call(null,vec__1880227_1880237,(0),null);
var v_1880239 = cljs.core.nth.call(null,vec__1880227_1880237,(1),null);
var r_1880240 = cljs.core.nthnext.call(null,vec__1880226_1880236,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_1880238),"\": ",v_1880239);

var seq__1880228_1880241 = cljs.core.seq.call(null,r_1880240);
var chunk__1880229_1880242 = null;
var count__1880230_1880243 = (0);
var i__1880231_1880244 = (0);
while(true){
if((i__1880231_1880244 < count__1880230_1880243)){
var vec__1880232_1880245 = cljs.core._nth.call(null,chunk__1880229_1880242,i__1880231_1880244);
var k_1880246__$1 = cljs.core.nth.call(null,vec__1880232_1880245,(0),null);
var v_1880247__$1 = cljs.core.nth.call(null,vec__1880232_1880245,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_1880246__$1),"\": ",v_1880247__$1);

var G__1880248 = seq__1880228_1880241;
var G__1880249 = chunk__1880229_1880242;
var G__1880250 = count__1880230_1880243;
var G__1880251 = (i__1880231_1880244 + (1));
seq__1880228_1880241 = G__1880248;
chunk__1880229_1880242 = G__1880249;
count__1880230_1880243 = G__1880250;
i__1880231_1880244 = G__1880251;
continue;
} else {
var temp__4425__auto___1880252__$1 = cljs.core.seq.call(null,seq__1880228_1880241);
if(temp__4425__auto___1880252__$1){
var seq__1880228_1880253__$1 = temp__4425__auto___1880252__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880228_1880253__$1)){
var c__24964__auto___1880254 = cljs.core.chunk_first.call(null,seq__1880228_1880253__$1);
var G__1880255 = cljs.core.chunk_rest.call(null,seq__1880228_1880253__$1);
var G__1880256 = c__24964__auto___1880254;
var G__1880257 = cljs.core.count.call(null,c__24964__auto___1880254);
var G__1880258 = (0);
seq__1880228_1880241 = G__1880255;
chunk__1880229_1880242 = G__1880256;
count__1880230_1880243 = G__1880257;
i__1880231_1880244 = G__1880258;
continue;
} else {
var vec__1880233_1880259 = cljs.core.first.call(null,seq__1880228_1880253__$1);
var k_1880260__$1 = cljs.core.nth.call(null,vec__1880233_1880259,(0),null);
var v_1880261__$1 = cljs.core.nth.call(null,vec__1880233_1880259,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_1880260__$1),"\": ",v_1880261__$1);

var G__1880262 = cljs.core.next.call(null,seq__1880228_1880253__$1);
var G__1880263 = null;
var G__1880264 = (0);
var G__1880265 = (0);
seq__1880228_1880241 = G__1880262;
chunk__1880229_1880242 = G__1880263;
count__1880230_1880243 = G__1880264;
i__1880231_1880244 = G__1880265;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__1880266){
var map__1880267 = p__1880266;
var map__1880267__$1 = ((((!((map__1880267 == null)))?((((map__1880267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880267):map__1880267);
var form = cljs.core.get.call(null,map__1880267__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__1880267__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__1880269){
var map__1880272 = p__1880269;
var map__1880272__$1 = ((((!((map__1880272 == null)))?((((map__1880272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880272):map__1880272);
var op = cljs.core.get.call(null,map__1880272__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__1880272__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__1880274){
var map__1880277 = p__1880274;
var map__1880277__$1 = ((((!((map__1880277 == null)))?((((map__1880277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880277):map__1880277);
var op = cljs.core.get.call(null,map__1880277__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__1880277__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__1880279){
var map__1880280 = p__1880279;
var map__1880280__$1 = ((((!((map__1880280 == null)))?((((map__1880280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880280):map__1880280);
var test = cljs.core.get.call(null,map__1880280__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__1880280__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__1880280__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__1880280__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__1880280__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__1880282){
var map__1880283 = p__1880282;
var map__1880283__$1 = ((((!((map__1880283 == null)))?((((map__1880283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880283):map__1880283);
var v = cljs.core.get.call(null,map__1880283__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__1880283__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__1880283__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__1880283__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__1880283__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__1880285_1880299 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__1880286_1880300 = null;
var count__1880287_1880301 = (0);
var i__1880288_1880302 = (0);
while(true){
if((i__1880288_1880302 < count__1880287_1880301)){
var vec__1880289_1880303 = cljs.core._nth.call(null,chunk__1880286_1880300,i__1880288_1880302);
var ts_1880304 = cljs.core.nth.call(null,vec__1880289_1880303,(0),null);
var then_1880305 = cljs.core.nth.call(null,vec__1880289_1880303,(1),null);
var seq__1880290_1880306 = cljs.core.seq.call(null,ts_1880304);
var chunk__1880291_1880307 = null;
var count__1880292_1880308 = (0);
var i__1880293_1880309 = (0);
while(true){
if((i__1880293_1880309 < count__1880292_1880308)){
var test_1880310 = cljs.core._nth.call(null,chunk__1880291_1880307,i__1880293_1880309);
cljs.compiler.emitln.call(null,"case ",test_1880310,":");

var G__1880311 = seq__1880290_1880306;
var G__1880312 = chunk__1880291_1880307;
var G__1880313 = count__1880292_1880308;
var G__1880314 = (i__1880293_1880309 + (1));
seq__1880290_1880306 = G__1880311;
chunk__1880291_1880307 = G__1880312;
count__1880292_1880308 = G__1880313;
i__1880293_1880309 = G__1880314;
continue;
} else {
var temp__4425__auto___1880315 = cljs.core.seq.call(null,seq__1880290_1880306);
if(temp__4425__auto___1880315){
var seq__1880290_1880316__$1 = temp__4425__auto___1880315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880290_1880316__$1)){
var c__24964__auto___1880317 = cljs.core.chunk_first.call(null,seq__1880290_1880316__$1);
var G__1880318 = cljs.core.chunk_rest.call(null,seq__1880290_1880316__$1);
var G__1880319 = c__24964__auto___1880317;
var G__1880320 = cljs.core.count.call(null,c__24964__auto___1880317);
var G__1880321 = (0);
seq__1880290_1880306 = G__1880318;
chunk__1880291_1880307 = G__1880319;
count__1880292_1880308 = G__1880320;
i__1880293_1880309 = G__1880321;
continue;
} else {
var test_1880322 = cljs.core.first.call(null,seq__1880290_1880316__$1);
cljs.compiler.emitln.call(null,"case ",test_1880322,":");

var G__1880323 = cljs.core.next.call(null,seq__1880290_1880316__$1);
var G__1880324 = null;
var G__1880325 = (0);
var G__1880326 = (0);
seq__1880290_1880306 = G__1880323;
chunk__1880291_1880307 = G__1880324;
count__1880292_1880308 = G__1880325;
i__1880293_1880309 = G__1880326;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_1880305);
} else {
cljs.compiler.emitln.call(null,then_1880305);
}

cljs.compiler.emitln.call(null,"break;");

var G__1880327 = seq__1880285_1880299;
var G__1880328 = chunk__1880286_1880300;
var G__1880329 = count__1880287_1880301;
var G__1880330 = (i__1880288_1880302 + (1));
seq__1880285_1880299 = G__1880327;
chunk__1880286_1880300 = G__1880328;
count__1880287_1880301 = G__1880329;
i__1880288_1880302 = G__1880330;
continue;
} else {
var temp__4425__auto___1880331 = cljs.core.seq.call(null,seq__1880285_1880299);
if(temp__4425__auto___1880331){
var seq__1880285_1880332__$1 = temp__4425__auto___1880331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880285_1880332__$1)){
var c__24964__auto___1880333 = cljs.core.chunk_first.call(null,seq__1880285_1880332__$1);
var G__1880334 = cljs.core.chunk_rest.call(null,seq__1880285_1880332__$1);
var G__1880335 = c__24964__auto___1880333;
var G__1880336 = cljs.core.count.call(null,c__24964__auto___1880333);
var G__1880337 = (0);
seq__1880285_1880299 = G__1880334;
chunk__1880286_1880300 = G__1880335;
count__1880287_1880301 = G__1880336;
i__1880288_1880302 = G__1880337;
continue;
} else {
var vec__1880294_1880338 = cljs.core.first.call(null,seq__1880285_1880332__$1);
var ts_1880339 = cljs.core.nth.call(null,vec__1880294_1880338,(0),null);
var then_1880340 = cljs.core.nth.call(null,vec__1880294_1880338,(1),null);
var seq__1880295_1880341 = cljs.core.seq.call(null,ts_1880339);
var chunk__1880296_1880342 = null;
var count__1880297_1880343 = (0);
var i__1880298_1880344 = (0);
while(true){
if((i__1880298_1880344 < count__1880297_1880343)){
var test_1880345 = cljs.core._nth.call(null,chunk__1880296_1880342,i__1880298_1880344);
cljs.compiler.emitln.call(null,"case ",test_1880345,":");

var G__1880346 = seq__1880295_1880341;
var G__1880347 = chunk__1880296_1880342;
var G__1880348 = count__1880297_1880343;
var G__1880349 = (i__1880298_1880344 + (1));
seq__1880295_1880341 = G__1880346;
chunk__1880296_1880342 = G__1880347;
count__1880297_1880343 = G__1880348;
i__1880298_1880344 = G__1880349;
continue;
} else {
var temp__4425__auto___1880350__$1 = cljs.core.seq.call(null,seq__1880295_1880341);
if(temp__4425__auto___1880350__$1){
var seq__1880295_1880351__$1 = temp__4425__auto___1880350__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880295_1880351__$1)){
var c__24964__auto___1880352 = cljs.core.chunk_first.call(null,seq__1880295_1880351__$1);
var G__1880353 = cljs.core.chunk_rest.call(null,seq__1880295_1880351__$1);
var G__1880354 = c__24964__auto___1880352;
var G__1880355 = cljs.core.count.call(null,c__24964__auto___1880352);
var G__1880356 = (0);
seq__1880295_1880341 = G__1880353;
chunk__1880296_1880342 = G__1880354;
count__1880297_1880343 = G__1880355;
i__1880298_1880344 = G__1880356;
continue;
} else {
var test_1880357 = cljs.core.first.call(null,seq__1880295_1880351__$1);
cljs.compiler.emitln.call(null,"case ",test_1880357,":");

var G__1880358 = cljs.core.next.call(null,seq__1880295_1880351__$1);
var G__1880359 = null;
var G__1880360 = (0);
var G__1880361 = (0);
seq__1880295_1880341 = G__1880358;
chunk__1880296_1880342 = G__1880359;
count__1880297_1880343 = G__1880360;
i__1880298_1880344 = G__1880361;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_1880340);
} else {
cljs.compiler.emitln.call(null,then_1880340);
}

cljs.compiler.emitln.call(null,"break;");

var G__1880362 = cljs.core.next.call(null,seq__1880285_1880332__$1);
var G__1880363 = null;
var G__1880364 = (0);
var G__1880365 = (0);
seq__1880285_1880299 = G__1880362;
chunk__1880286_1880300 = G__1880363;
count__1880287_1880301 = G__1880364;
i__1880288_1880302 = G__1880365;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__1880366){
var map__1880367 = p__1880366;
var map__1880367__$1 = ((((!((map__1880367 == null)))?((((map__1880367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880367):map__1880367);
var throw$ = cljs.core.get.call(null,map__1880367__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__1880367__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__1880372 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__1880372,(0),null);
var rstr = cljs.core.nth.call(null,vec__1880372,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__1880372,fstr,rstr,ret_t,axstr){
return (function (p1__1880369_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__1880369_SHARP_);
});})(idx,vec__1880372,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__1880373 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
var G__1880373__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__1880373),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__1880373);
return G__1880373__$1;
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
return (function (p1__1880374_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__1880374_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__1880377 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__1880377,(0),null);
var ts = cljs.core.nth.call(null,vec__1880377,(1),null);
var n = cljs.core.nth.call(null,vec__1880377,(2),null);
var xs = cljs.core.nthnext.call(null,vec__1880377,(3));
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
var vec__1880378 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__1880378,(0),null);
var ts = cljs.core.nth.call(null,vec__1880378,(1),null);
var xs = cljs.core.nthnext.call(null,vec__1880378,(2));
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
var args1880380 = [];
var len__25219__auto___1880407 = arguments.length;
var i__25220__auto___1880408 = (0);
while(true){
if((i__25220__auto___1880408 < len__25219__auto___1880407)){
args1880380.push((arguments[i__25220__auto___1880408]));

var G__1880409 = (i__25220__auto___1880408 + (1));
i__25220__auto___1880408 = G__1880409;
continue;
} else {
}
break;
}

var G__1880382 = args1880380.length;
switch (G__1880382) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1880380.length)].join('')));

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
var vec__1880398 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__1880379_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__1880379_SHARP_);
} else {
return p1__1880379_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__1880398,(0),null);
var ys = cljs.core.nthnext.call(null,vec__1880398,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__1880399 = cljs.core.seq.call(null,ys);
var chunk__1880400 = null;
var count__1880401 = (0);
var i__1880402 = (0);
while(true){
if((i__1880402 < count__1880401)){
var next_line = cljs.core._nth.call(null,chunk__1880400,i__1880402);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__1880411 = seq__1880399;
var G__1880412 = chunk__1880400;
var G__1880413 = count__1880401;
var G__1880414 = (i__1880402 + (1));
seq__1880399 = G__1880411;
chunk__1880400 = G__1880412;
count__1880401 = G__1880413;
i__1880402 = G__1880414;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__1880399);
if(temp__4425__auto__){
var seq__1880399__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880399__$1)){
var c__24964__auto__ = cljs.core.chunk_first.call(null,seq__1880399__$1);
var G__1880415 = cljs.core.chunk_rest.call(null,seq__1880399__$1);
var G__1880416 = c__24964__auto__;
var G__1880417 = cljs.core.count.call(null,c__24964__auto__);
var G__1880418 = (0);
seq__1880399 = G__1880415;
chunk__1880400 = G__1880416;
count__1880401 = G__1880417;
i__1880402 = G__1880418;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__1880399__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__1880419 = cljs.core.next.call(null,seq__1880399__$1);
var G__1880420 = null;
var G__1880421 = (0);
var G__1880422 = (0);
seq__1880399 = G__1880419;
chunk__1880400 = G__1880420;
count__1880401 = G__1880421;
i__1880402 = G__1880422;
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

var seq__1880403_1880423 = cljs.core.seq.call(null,docs__$2);
var chunk__1880404_1880424 = null;
var count__1880405_1880425 = (0);
var i__1880406_1880426 = (0);
while(true){
if((i__1880406_1880426 < count__1880405_1880425)){
var e_1880427 = cljs.core._nth.call(null,chunk__1880404_1880424,i__1880406_1880426);
if(cljs.core.truth_(e_1880427)){
print_comment_lines.call(null,e_1880427);
} else {
}

var G__1880428 = seq__1880403_1880423;
var G__1880429 = chunk__1880404_1880424;
var G__1880430 = count__1880405_1880425;
var G__1880431 = (i__1880406_1880426 + (1));
seq__1880403_1880423 = G__1880428;
chunk__1880404_1880424 = G__1880429;
count__1880405_1880425 = G__1880430;
i__1880406_1880426 = G__1880431;
continue;
} else {
var temp__4425__auto___1880432 = cljs.core.seq.call(null,seq__1880403_1880423);
if(temp__4425__auto___1880432){
var seq__1880403_1880433__$1 = temp__4425__auto___1880432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880403_1880433__$1)){
var c__24964__auto___1880434 = cljs.core.chunk_first.call(null,seq__1880403_1880433__$1);
var G__1880435 = cljs.core.chunk_rest.call(null,seq__1880403_1880433__$1);
var G__1880436 = c__24964__auto___1880434;
var G__1880437 = cljs.core.count.call(null,c__24964__auto___1880434);
var G__1880438 = (0);
seq__1880403_1880423 = G__1880435;
chunk__1880404_1880424 = G__1880436;
count__1880405_1880425 = G__1880437;
i__1880406_1880426 = G__1880438;
continue;
} else {
var e_1880439 = cljs.core.first.call(null,seq__1880403_1880433__$1);
if(cljs.core.truth_(e_1880439)){
print_comment_lines.call(null,e_1880439);
} else {
}

var G__1880440 = cljs.core.next.call(null,seq__1880403_1880433__$1);
var G__1880441 = null;
var G__1880442 = (0);
var G__1880443 = (0);
seq__1880403_1880423 = G__1880440;
chunk__1880404_1880424 = G__1880441;
count__1880405_1880425 = G__1880442;
i__1880406_1880426 = G__1880443;
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
return (function (p1__1880445_SHARP_){
return goog.string.startsWith(p1__1880445_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__1880446){
var map__1880447 = p__1880446;
var map__1880447__$1 = ((((!((map__1880447 == null)))?((((map__1880447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880447):map__1880447);
var name = cljs.core.get.call(null,map__1880447__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__1880447__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__1880447__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__1880447__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__1880447__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__1880447__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__1880447__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__1880447__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__1880447__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__1880449){
var map__1880466 = p__1880449;
var map__1880466__$1 = ((((!((map__1880466 == null)))?((((map__1880466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880466):map__1880466);
var name = cljs.core.get.call(null,map__1880466__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__1880466__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__1880466__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__1880468_1880482 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__1880469_1880483 = null;
var count__1880470_1880484 = (0);
var i__1880471_1880485 = (0);
while(true){
if((i__1880471_1880485 < count__1880470_1880484)){
var vec__1880472_1880486 = cljs.core._nth.call(null,chunk__1880469_1880483,i__1880471_1880485);
var i_1880487 = cljs.core.nth.call(null,vec__1880472_1880486,(0),null);
var param_1880488 = cljs.core.nth.call(null,vec__1880472_1880486,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_1880488);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__1880489 = seq__1880468_1880482;
var G__1880490 = chunk__1880469_1880483;
var G__1880491 = count__1880470_1880484;
var G__1880492 = (i__1880471_1880485 + (1));
seq__1880468_1880482 = G__1880489;
chunk__1880469_1880483 = G__1880490;
count__1880470_1880484 = G__1880491;
i__1880471_1880485 = G__1880492;
continue;
} else {
var temp__4425__auto___1880493 = cljs.core.seq.call(null,seq__1880468_1880482);
if(temp__4425__auto___1880493){
var seq__1880468_1880494__$1 = temp__4425__auto___1880493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880468_1880494__$1)){
var c__24964__auto___1880495 = cljs.core.chunk_first.call(null,seq__1880468_1880494__$1);
var G__1880496 = cljs.core.chunk_rest.call(null,seq__1880468_1880494__$1);
var G__1880497 = c__24964__auto___1880495;
var G__1880498 = cljs.core.count.call(null,c__24964__auto___1880495);
var G__1880499 = (0);
seq__1880468_1880482 = G__1880496;
chunk__1880469_1880483 = G__1880497;
count__1880470_1880484 = G__1880498;
i__1880471_1880485 = G__1880499;
continue;
} else {
var vec__1880473_1880500 = cljs.core.first.call(null,seq__1880468_1880494__$1);
var i_1880501 = cljs.core.nth.call(null,vec__1880473_1880500,(0),null);
var param_1880502 = cljs.core.nth.call(null,vec__1880473_1880500,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_1880502);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__1880503 = cljs.core.next.call(null,seq__1880468_1880494__$1);
var G__1880504 = null;
var G__1880505 = (0);
var G__1880506 = (0);
seq__1880468_1880482 = G__1880503;
chunk__1880469_1880483 = G__1880504;
count__1880470_1880484 = G__1880505;
i__1880471_1880485 = G__1880506;
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

var seq__1880474_1880507 = cljs.core.seq.call(null,params);
var chunk__1880475_1880508 = null;
var count__1880476_1880509 = (0);
var i__1880477_1880510 = (0);
while(true){
if((i__1880477_1880510 < count__1880476_1880509)){
var param_1880511 = cljs.core._nth.call(null,chunk__1880475_1880508,i__1880477_1880510);
cljs.compiler.emit.call(null,param_1880511);

if(cljs.core._EQ_.call(null,param_1880511,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__1880512 = seq__1880474_1880507;
var G__1880513 = chunk__1880475_1880508;
var G__1880514 = count__1880476_1880509;
var G__1880515 = (i__1880477_1880510 + (1));
seq__1880474_1880507 = G__1880512;
chunk__1880475_1880508 = G__1880513;
count__1880476_1880509 = G__1880514;
i__1880477_1880510 = G__1880515;
continue;
} else {
var temp__4425__auto___1880516 = cljs.core.seq.call(null,seq__1880474_1880507);
if(temp__4425__auto___1880516){
var seq__1880474_1880517__$1 = temp__4425__auto___1880516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880474_1880517__$1)){
var c__24964__auto___1880518 = cljs.core.chunk_first.call(null,seq__1880474_1880517__$1);
var G__1880519 = cljs.core.chunk_rest.call(null,seq__1880474_1880517__$1);
var G__1880520 = c__24964__auto___1880518;
var G__1880521 = cljs.core.count.call(null,c__24964__auto___1880518);
var G__1880522 = (0);
seq__1880474_1880507 = G__1880519;
chunk__1880475_1880508 = G__1880520;
count__1880476_1880509 = G__1880521;
i__1880477_1880510 = G__1880522;
continue;
} else {
var param_1880523 = cljs.core.first.call(null,seq__1880474_1880517__$1);
cljs.compiler.emit.call(null,param_1880523);

if(cljs.core._EQ_.call(null,param_1880523,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__1880524 = cljs.core.next.call(null,seq__1880474_1880517__$1);
var G__1880525 = null;
var G__1880526 = (0);
var G__1880527 = (0);
seq__1880474_1880507 = G__1880524;
chunk__1880475_1880508 = G__1880525;
count__1880476_1880509 = G__1880526;
i__1880477_1880510 = G__1880527;
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

var seq__1880478_1880528 = cljs.core.seq.call(null,params);
var chunk__1880479_1880529 = null;
var count__1880480_1880530 = (0);
var i__1880481_1880531 = (0);
while(true){
if((i__1880481_1880531 < count__1880480_1880530)){
var param_1880532 = cljs.core._nth.call(null,chunk__1880479_1880529,i__1880481_1880531);
cljs.compiler.emit.call(null,param_1880532);

if(cljs.core._EQ_.call(null,param_1880532,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__1880533 = seq__1880478_1880528;
var G__1880534 = chunk__1880479_1880529;
var G__1880535 = count__1880480_1880530;
var G__1880536 = (i__1880481_1880531 + (1));
seq__1880478_1880528 = G__1880533;
chunk__1880479_1880529 = G__1880534;
count__1880480_1880530 = G__1880535;
i__1880481_1880531 = G__1880536;
continue;
} else {
var temp__4425__auto___1880537 = cljs.core.seq.call(null,seq__1880478_1880528);
if(temp__4425__auto___1880537){
var seq__1880478_1880538__$1 = temp__4425__auto___1880537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880478_1880538__$1)){
var c__24964__auto___1880539 = cljs.core.chunk_first.call(null,seq__1880478_1880538__$1);
var G__1880540 = cljs.core.chunk_rest.call(null,seq__1880478_1880538__$1);
var G__1880541 = c__24964__auto___1880539;
var G__1880542 = cljs.core.count.call(null,c__24964__auto___1880539);
var G__1880543 = (0);
seq__1880478_1880528 = G__1880540;
chunk__1880479_1880529 = G__1880541;
count__1880480_1880530 = G__1880542;
i__1880481_1880531 = G__1880543;
continue;
} else {
var param_1880544 = cljs.core.first.call(null,seq__1880478_1880538__$1);
cljs.compiler.emit.call(null,param_1880544);

if(cljs.core._EQ_.call(null,param_1880544,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__1880545 = cljs.core.next.call(null,seq__1880478_1880538__$1);
var G__1880546 = null;
var G__1880547 = (0);
var G__1880548 = (0);
seq__1880478_1880528 = G__1880545;
chunk__1880479_1880529 = G__1880546;
count__1880480_1880530 = G__1880547;
i__1880481_1880531 = G__1880548;
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
var seq__1880553 = cljs.core.seq.call(null,params);
var chunk__1880554 = null;
var count__1880555 = (0);
var i__1880556 = (0);
while(true){
if((i__1880556 < count__1880555)){
var param = cljs.core._nth.call(null,chunk__1880554,i__1880556);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__1880557 = seq__1880553;
var G__1880558 = chunk__1880554;
var G__1880559 = count__1880555;
var G__1880560 = (i__1880556 + (1));
seq__1880553 = G__1880557;
chunk__1880554 = G__1880558;
count__1880555 = G__1880559;
i__1880556 = G__1880560;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__1880553);
if(temp__4425__auto__){
var seq__1880553__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880553__$1)){
var c__24964__auto__ = cljs.core.chunk_first.call(null,seq__1880553__$1);
var G__1880561 = cljs.core.chunk_rest.call(null,seq__1880553__$1);
var G__1880562 = c__24964__auto__;
var G__1880563 = cljs.core.count.call(null,c__24964__auto__);
var G__1880564 = (0);
seq__1880553 = G__1880561;
chunk__1880554 = G__1880562;
count__1880555 = G__1880563;
i__1880556 = G__1880564;
continue;
} else {
var param = cljs.core.first.call(null,seq__1880553__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__1880565 = cljs.core.next.call(null,seq__1880553__$1);
var G__1880566 = null;
var G__1880567 = (0);
var G__1880568 = (0);
seq__1880553 = G__1880565;
chunk__1880554 = G__1880566;
count__1880555 = G__1880567;
i__1880556 = G__1880568;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__1880569){
var map__1880572 = p__1880569;
var map__1880572__$1 = ((((!((map__1880572 == null)))?((((map__1880572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880572):map__1880572);
var type = cljs.core.get.call(null,map__1880572__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__1880572__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__1880572__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__1880572__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__1880572__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__1880572__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__1880572__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__1880572__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__1880574){
var map__1880585 = p__1880574;
var map__1880585__$1 = ((((!((map__1880585 == null)))?((((map__1880585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880585):map__1880585);
var f = map__1880585__$1;
var type = cljs.core.get.call(null,map__1880585__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__1880585__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__1880585__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__1880585__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__1880585__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__1880585__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__1880585__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__1880585__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_1880595__$1 = (function (){var or__24161__auto__ = name;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_1880596 = cljs.compiler.munge.call(null,name_1880595__$1);
var delegate_name_1880597 = [cljs.core.str(mname_1880596),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_1880597," = function (");

var seq__1880587_1880598 = cljs.core.seq.call(null,params);
var chunk__1880588_1880599 = null;
var count__1880589_1880600 = (0);
var i__1880590_1880601 = (0);
while(true){
if((i__1880590_1880601 < count__1880589_1880600)){
var param_1880602 = cljs.core._nth.call(null,chunk__1880588_1880599,i__1880590_1880601);
cljs.compiler.emit.call(null,param_1880602);

if(cljs.core._EQ_.call(null,param_1880602,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__1880603 = seq__1880587_1880598;
var G__1880604 = chunk__1880588_1880599;
var G__1880605 = count__1880589_1880600;
var G__1880606 = (i__1880590_1880601 + (1));
seq__1880587_1880598 = G__1880603;
chunk__1880588_1880599 = G__1880604;
count__1880589_1880600 = G__1880605;
i__1880590_1880601 = G__1880606;
continue;
} else {
var temp__4425__auto___1880607 = cljs.core.seq.call(null,seq__1880587_1880598);
if(temp__4425__auto___1880607){
var seq__1880587_1880608__$1 = temp__4425__auto___1880607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880587_1880608__$1)){
var c__24964__auto___1880609 = cljs.core.chunk_first.call(null,seq__1880587_1880608__$1);
var G__1880610 = cljs.core.chunk_rest.call(null,seq__1880587_1880608__$1);
var G__1880611 = c__24964__auto___1880609;
var G__1880612 = cljs.core.count.call(null,c__24964__auto___1880609);
var G__1880613 = (0);
seq__1880587_1880598 = G__1880610;
chunk__1880588_1880599 = G__1880611;
count__1880589_1880600 = G__1880612;
i__1880590_1880601 = G__1880613;
continue;
} else {
var param_1880614 = cljs.core.first.call(null,seq__1880587_1880608__$1);
cljs.compiler.emit.call(null,param_1880614);

if(cljs.core._EQ_.call(null,param_1880614,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__1880615 = cljs.core.next.call(null,seq__1880587_1880608__$1);
var G__1880616 = null;
var G__1880617 = (0);
var G__1880618 = (0);
seq__1880587_1880598 = G__1880615;
chunk__1880588_1880599 = G__1880616;
count__1880589_1880600 = G__1880617;
i__1880590_1880601 = G__1880618;
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

cljs.compiler.emitln.call(null,"var ",mname_1880596," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_1880619 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_1880619,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_1880597,".call(this,");

var seq__1880591_1880620 = cljs.core.seq.call(null,params);
var chunk__1880592_1880621 = null;
var count__1880593_1880622 = (0);
var i__1880594_1880623 = (0);
while(true){
if((i__1880594_1880623 < count__1880593_1880622)){
var param_1880624 = cljs.core._nth.call(null,chunk__1880592_1880621,i__1880594_1880623);
cljs.compiler.emit.call(null,param_1880624);

if(cljs.core._EQ_.call(null,param_1880624,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__1880625 = seq__1880591_1880620;
var G__1880626 = chunk__1880592_1880621;
var G__1880627 = count__1880593_1880622;
var G__1880628 = (i__1880594_1880623 + (1));
seq__1880591_1880620 = G__1880625;
chunk__1880592_1880621 = G__1880626;
count__1880593_1880622 = G__1880627;
i__1880594_1880623 = G__1880628;
continue;
} else {
var temp__4425__auto___1880629 = cljs.core.seq.call(null,seq__1880591_1880620);
if(temp__4425__auto___1880629){
var seq__1880591_1880630__$1 = temp__4425__auto___1880629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880591_1880630__$1)){
var c__24964__auto___1880631 = cljs.core.chunk_first.call(null,seq__1880591_1880630__$1);
var G__1880632 = cljs.core.chunk_rest.call(null,seq__1880591_1880630__$1);
var G__1880633 = c__24964__auto___1880631;
var G__1880634 = cljs.core.count.call(null,c__24964__auto___1880631);
var G__1880635 = (0);
seq__1880591_1880620 = G__1880632;
chunk__1880592_1880621 = G__1880633;
count__1880593_1880622 = G__1880634;
i__1880594_1880623 = G__1880635;
continue;
} else {
var param_1880636 = cljs.core.first.call(null,seq__1880591_1880630__$1);
cljs.compiler.emit.call(null,param_1880636);

if(cljs.core._EQ_.call(null,param_1880636,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__1880637 = cljs.core.next.call(null,seq__1880591_1880630__$1);
var G__1880638 = null;
var G__1880639 = (0);
var G__1880640 = (0);
seq__1880591_1880620 = G__1880637;
chunk__1880592_1880621 = G__1880638;
count__1880593_1880622 = G__1880639;
i__1880594_1880623 = G__1880640;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_1880596,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_1880596,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_1880595__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_1880596,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_1880597,";");

cljs.compiler.emitln.call(null,"return ",mname_1880596,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__1880644){
var map__1880645 = p__1880644;
var map__1880645__$1 = ((((!((map__1880645 == null)))?((((map__1880645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880645):map__1880645);
var name = cljs.core.get.call(null,map__1880645__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__1880645__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__1880645__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__1880645__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__1880645__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__1880645__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__1880645__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__1880645,map__1880645__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__1880641_SHARP_){
var and__24149__auto__ = p1__1880641_SHARP_;
if(cljs.core.truth_(and__24149__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__1880641_SHARP_));
} else {
return and__24149__auto__;
}
});})(map__1880645,map__1880645__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_1880666__$1 = (function (){var or__24161__auto__ = name;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_1880667 = cljs.compiler.munge.call(null,name_1880666__$1);
var maxparams_1880668 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_1880669 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_1880666__$1,mname_1880667,maxparams_1880668,loop_locals,map__1880645,map__1880645__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_1880667),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_1880666__$1,mname_1880667,maxparams_1880668,loop_locals,map__1880645,map__1880645__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_1880670 = cljs.core.sort_by.call(null,((function (name_1880666__$1,mname_1880667,maxparams_1880668,mmap_1880669,loop_locals,map__1880645,map__1880645__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__1880642_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__1880642_SHARP_)));
});})(name_1880666__$1,mname_1880667,maxparams_1880668,mmap_1880669,loop_locals,map__1880645,map__1880645__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_1880669));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_1880667," = null;");

var seq__1880647_1880671 = cljs.core.seq.call(null,ms_1880670);
var chunk__1880648_1880672 = null;
var count__1880649_1880673 = (0);
var i__1880650_1880674 = (0);
while(true){
if((i__1880650_1880674 < count__1880649_1880673)){
var vec__1880651_1880675 = cljs.core._nth.call(null,chunk__1880648_1880672,i__1880650_1880674);
var n_1880676 = cljs.core.nth.call(null,vec__1880651_1880675,(0),null);
var meth_1880677 = cljs.core.nth.call(null,vec__1880651_1880675,(1),null);
cljs.compiler.emits.call(null,"var ",n_1880676," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_1880677))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_1880677);
} else {
cljs.compiler.emit_fn_method.call(null,meth_1880677);
}

cljs.compiler.emitln.call(null,";");

var G__1880678 = seq__1880647_1880671;
var G__1880679 = chunk__1880648_1880672;
var G__1880680 = count__1880649_1880673;
var G__1880681 = (i__1880650_1880674 + (1));
seq__1880647_1880671 = G__1880678;
chunk__1880648_1880672 = G__1880679;
count__1880649_1880673 = G__1880680;
i__1880650_1880674 = G__1880681;
continue;
} else {
var temp__4425__auto___1880682 = cljs.core.seq.call(null,seq__1880647_1880671);
if(temp__4425__auto___1880682){
var seq__1880647_1880683__$1 = temp__4425__auto___1880682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880647_1880683__$1)){
var c__24964__auto___1880684 = cljs.core.chunk_first.call(null,seq__1880647_1880683__$1);
var G__1880685 = cljs.core.chunk_rest.call(null,seq__1880647_1880683__$1);
var G__1880686 = c__24964__auto___1880684;
var G__1880687 = cljs.core.count.call(null,c__24964__auto___1880684);
var G__1880688 = (0);
seq__1880647_1880671 = G__1880685;
chunk__1880648_1880672 = G__1880686;
count__1880649_1880673 = G__1880687;
i__1880650_1880674 = G__1880688;
continue;
} else {
var vec__1880652_1880689 = cljs.core.first.call(null,seq__1880647_1880683__$1);
var n_1880690 = cljs.core.nth.call(null,vec__1880652_1880689,(0),null);
var meth_1880691 = cljs.core.nth.call(null,vec__1880652_1880689,(1),null);
cljs.compiler.emits.call(null,"var ",n_1880690," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_1880691))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_1880691);
} else {
cljs.compiler.emit_fn_method.call(null,meth_1880691);
}

cljs.compiler.emitln.call(null,";");

var G__1880692 = cljs.core.next.call(null,seq__1880647_1880683__$1);
var G__1880693 = null;
var G__1880694 = (0);
var G__1880695 = (0);
seq__1880647_1880671 = G__1880692;
chunk__1880648_1880672 = G__1880693;
count__1880649_1880673 = G__1880694;
i__1880650_1880674 = G__1880695;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_1880667," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_1880668),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_1880668)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_1880668));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__1880653_1880696 = cljs.core.seq.call(null,ms_1880670);
var chunk__1880654_1880697 = null;
var count__1880655_1880698 = (0);
var i__1880656_1880699 = (0);
while(true){
if((i__1880656_1880699 < count__1880655_1880698)){
var vec__1880657_1880700 = cljs.core._nth.call(null,chunk__1880654_1880697,i__1880656_1880699);
var n_1880701 = cljs.core.nth.call(null,vec__1880657_1880700,(0),null);
var meth_1880702 = cljs.core.nth.call(null,vec__1880657_1880700,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_1880702))){
cljs.compiler.emitln.call(null,"default:");

var restarg_1880703 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_1880703," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_1880704 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_1880703," = new cljs.core.IndexedSeq(",a_1880704,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_1880701,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_1880668)),(((cljs.core.count.call(null,maxparams_1880668) > (1)))?", ":null),restarg_1880703,");");
} else {
var pcnt_1880705 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_1880702));
cljs.compiler.emitln.call(null,"case ",pcnt_1880705,":");

cljs.compiler.emitln.call(null,"return ",n_1880701,".call(this",(((pcnt_1880705 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_1880705,maxparams_1880668))),",")),");");
}

var G__1880706 = seq__1880653_1880696;
var G__1880707 = chunk__1880654_1880697;
var G__1880708 = count__1880655_1880698;
var G__1880709 = (i__1880656_1880699 + (1));
seq__1880653_1880696 = G__1880706;
chunk__1880654_1880697 = G__1880707;
count__1880655_1880698 = G__1880708;
i__1880656_1880699 = G__1880709;
continue;
} else {
var temp__4425__auto___1880710 = cljs.core.seq.call(null,seq__1880653_1880696);
if(temp__4425__auto___1880710){
var seq__1880653_1880711__$1 = temp__4425__auto___1880710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880653_1880711__$1)){
var c__24964__auto___1880712 = cljs.core.chunk_first.call(null,seq__1880653_1880711__$1);
var G__1880713 = cljs.core.chunk_rest.call(null,seq__1880653_1880711__$1);
var G__1880714 = c__24964__auto___1880712;
var G__1880715 = cljs.core.count.call(null,c__24964__auto___1880712);
var G__1880716 = (0);
seq__1880653_1880696 = G__1880713;
chunk__1880654_1880697 = G__1880714;
count__1880655_1880698 = G__1880715;
i__1880656_1880699 = G__1880716;
continue;
} else {
var vec__1880658_1880717 = cljs.core.first.call(null,seq__1880653_1880711__$1);
var n_1880718 = cljs.core.nth.call(null,vec__1880658_1880717,(0),null);
var meth_1880719 = cljs.core.nth.call(null,vec__1880658_1880717,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_1880719))){
cljs.compiler.emitln.call(null,"default:");

var restarg_1880720 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_1880720," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_1880721 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_1880720," = new cljs.core.IndexedSeq(",a_1880721,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_1880718,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_1880668)),(((cljs.core.count.call(null,maxparams_1880668) > (1)))?", ":null),restarg_1880720,");");
} else {
var pcnt_1880722 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_1880719));
cljs.compiler.emitln.call(null,"case ",pcnt_1880722,":");

cljs.compiler.emitln.call(null,"return ",n_1880718,".call(this",(((pcnt_1880722 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_1880722,maxparams_1880668))),",")),");");
}

var G__1880723 = cljs.core.next.call(null,seq__1880653_1880711__$1);
var G__1880724 = null;
var G__1880725 = (0);
var G__1880726 = (0);
seq__1880653_1880696 = G__1880723;
chunk__1880654_1880697 = G__1880724;
count__1880655_1880698 = G__1880725;
i__1880656_1880699 = G__1880726;
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
cljs.compiler.emitln.call(null,mname_1880667,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_1880667,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_1880666__$1,mname_1880667,maxparams_1880668,mmap_1880669,ms_1880670,loop_locals,map__1880645,map__1880645__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__1880643_SHARP_){
var vec__1880659 = p1__1880643_SHARP_;
var n = cljs.core.nth.call(null,vec__1880659,(0),null);
var m = cljs.core.nth.call(null,vec__1880659,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_1880666__$1,mname_1880667,maxparams_1880668,mmap_1880669,ms_1880670,loop_locals,map__1880645,map__1880645__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_1880670),".cljs$lang$applyTo;");
} else {
}

var seq__1880660_1880727 = cljs.core.seq.call(null,ms_1880670);
var chunk__1880661_1880728 = null;
var count__1880662_1880729 = (0);
var i__1880663_1880730 = (0);
while(true){
if((i__1880663_1880730 < count__1880662_1880729)){
var vec__1880664_1880731 = cljs.core._nth.call(null,chunk__1880661_1880728,i__1880663_1880730);
var n_1880732 = cljs.core.nth.call(null,vec__1880664_1880731,(0),null);
var meth_1880733 = cljs.core.nth.call(null,vec__1880664_1880731,(1),null);
var c_1880734 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_1880733));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_1880733))){
cljs.compiler.emitln.call(null,mname_1880667,".cljs$core$IFn$_invoke$arity$variadic = ",n_1880732,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_1880667,".cljs$core$IFn$_invoke$arity$",c_1880734," = ",n_1880732,";");
}

var G__1880735 = seq__1880660_1880727;
var G__1880736 = chunk__1880661_1880728;
var G__1880737 = count__1880662_1880729;
var G__1880738 = (i__1880663_1880730 + (1));
seq__1880660_1880727 = G__1880735;
chunk__1880661_1880728 = G__1880736;
count__1880662_1880729 = G__1880737;
i__1880663_1880730 = G__1880738;
continue;
} else {
var temp__4425__auto___1880739 = cljs.core.seq.call(null,seq__1880660_1880727);
if(temp__4425__auto___1880739){
var seq__1880660_1880740__$1 = temp__4425__auto___1880739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880660_1880740__$1)){
var c__24964__auto___1880741 = cljs.core.chunk_first.call(null,seq__1880660_1880740__$1);
var G__1880742 = cljs.core.chunk_rest.call(null,seq__1880660_1880740__$1);
var G__1880743 = c__24964__auto___1880741;
var G__1880744 = cljs.core.count.call(null,c__24964__auto___1880741);
var G__1880745 = (0);
seq__1880660_1880727 = G__1880742;
chunk__1880661_1880728 = G__1880743;
count__1880662_1880729 = G__1880744;
i__1880663_1880730 = G__1880745;
continue;
} else {
var vec__1880665_1880746 = cljs.core.first.call(null,seq__1880660_1880740__$1);
var n_1880747 = cljs.core.nth.call(null,vec__1880665_1880746,(0),null);
var meth_1880748 = cljs.core.nth.call(null,vec__1880665_1880746,(1),null);
var c_1880749 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_1880748));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_1880748))){
cljs.compiler.emitln.call(null,mname_1880667,".cljs$core$IFn$_invoke$arity$variadic = ",n_1880747,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_1880667,".cljs$core$IFn$_invoke$arity$",c_1880749," = ",n_1880747,";");
}

var G__1880750 = cljs.core.next.call(null,seq__1880660_1880740__$1);
var G__1880751 = null;
var G__1880752 = (0);
var G__1880753 = (0);
seq__1880660_1880727 = G__1880750;
chunk__1880661_1880728 = G__1880751;
count__1880662_1880729 = G__1880752;
i__1880663_1880730 = G__1880753;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_1880667,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__1880754){
var map__1880755 = p__1880754;
var map__1880755__$1 = ((((!((map__1880755 == null)))?((((map__1880755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880755):map__1880755);
var statements = cljs.core.get.call(null,map__1880755__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__1880755__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__1880755__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__1880757_1880761 = cljs.core.seq.call(null,statements);
var chunk__1880758_1880762 = null;
var count__1880759_1880763 = (0);
var i__1880760_1880764 = (0);
while(true){
if((i__1880760_1880764 < count__1880759_1880763)){
var s_1880765 = cljs.core._nth.call(null,chunk__1880758_1880762,i__1880760_1880764);
cljs.compiler.emitln.call(null,s_1880765);

var G__1880766 = seq__1880757_1880761;
var G__1880767 = chunk__1880758_1880762;
var G__1880768 = count__1880759_1880763;
var G__1880769 = (i__1880760_1880764 + (1));
seq__1880757_1880761 = G__1880766;
chunk__1880758_1880762 = G__1880767;
count__1880759_1880763 = G__1880768;
i__1880760_1880764 = G__1880769;
continue;
} else {
var temp__4425__auto___1880770 = cljs.core.seq.call(null,seq__1880757_1880761);
if(temp__4425__auto___1880770){
var seq__1880757_1880771__$1 = temp__4425__auto___1880770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880757_1880771__$1)){
var c__24964__auto___1880772 = cljs.core.chunk_first.call(null,seq__1880757_1880771__$1);
var G__1880773 = cljs.core.chunk_rest.call(null,seq__1880757_1880771__$1);
var G__1880774 = c__24964__auto___1880772;
var G__1880775 = cljs.core.count.call(null,c__24964__auto___1880772);
var G__1880776 = (0);
seq__1880757_1880761 = G__1880773;
chunk__1880758_1880762 = G__1880774;
count__1880759_1880763 = G__1880775;
i__1880760_1880764 = G__1880776;
continue;
} else {
var s_1880777 = cljs.core.first.call(null,seq__1880757_1880771__$1);
cljs.compiler.emitln.call(null,s_1880777);

var G__1880778 = cljs.core.next.call(null,seq__1880757_1880771__$1);
var G__1880779 = null;
var G__1880780 = (0);
var G__1880781 = (0);
seq__1880757_1880761 = G__1880778;
chunk__1880758_1880762 = G__1880779;
count__1880759_1880763 = G__1880780;
i__1880760_1880764 = G__1880781;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__1880782){
var map__1880783 = p__1880782;
var map__1880783__$1 = ((((!((map__1880783 == null)))?((((map__1880783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880783):map__1880783);
var env = cljs.core.get.call(null,map__1880783__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__1880783__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__1880783__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__1880783__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__1880783__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__1880785,is_loop){
var map__1880797 = p__1880785;
var map__1880797__$1 = ((((!((map__1880797 == null)))?((((map__1880797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880797):map__1880797);
var bindings = cljs.core.get.call(null,map__1880797__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__1880797__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__1880797__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_1880799_1880808 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_1880799_1880808,context,map__1880797,map__1880797__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_1880799_1880808,context,map__1880797,map__1880797__$1,bindings,expr,env))
,bindings):null));

try{var seq__1880800_1880809 = cljs.core.seq.call(null,bindings);
var chunk__1880801_1880810 = null;
var count__1880802_1880811 = (0);
var i__1880803_1880812 = (0);
while(true){
if((i__1880803_1880812 < count__1880802_1880811)){
var map__1880804_1880813 = cljs.core._nth.call(null,chunk__1880801_1880810,i__1880803_1880812);
var map__1880804_1880814__$1 = ((((!((map__1880804_1880813 == null)))?((((map__1880804_1880813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880804_1880813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880804_1880813):map__1880804_1880813);
var binding_1880815 = map__1880804_1880814__$1;
var init_1880816 = cljs.core.get.call(null,map__1880804_1880814__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_1880815);

cljs.compiler.emitln.call(null," = ",init_1880816,";");

var G__1880817 = seq__1880800_1880809;
var G__1880818 = chunk__1880801_1880810;
var G__1880819 = count__1880802_1880811;
var G__1880820 = (i__1880803_1880812 + (1));
seq__1880800_1880809 = G__1880817;
chunk__1880801_1880810 = G__1880818;
count__1880802_1880811 = G__1880819;
i__1880803_1880812 = G__1880820;
continue;
} else {
var temp__4425__auto___1880821 = cljs.core.seq.call(null,seq__1880800_1880809);
if(temp__4425__auto___1880821){
var seq__1880800_1880822__$1 = temp__4425__auto___1880821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880800_1880822__$1)){
var c__24964__auto___1880823 = cljs.core.chunk_first.call(null,seq__1880800_1880822__$1);
var G__1880824 = cljs.core.chunk_rest.call(null,seq__1880800_1880822__$1);
var G__1880825 = c__24964__auto___1880823;
var G__1880826 = cljs.core.count.call(null,c__24964__auto___1880823);
var G__1880827 = (0);
seq__1880800_1880809 = G__1880824;
chunk__1880801_1880810 = G__1880825;
count__1880802_1880811 = G__1880826;
i__1880803_1880812 = G__1880827;
continue;
} else {
var map__1880806_1880828 = cljs.core.first.call(null,seq__1880800_1880822__$1);
var map__1880806_1880829__$1 = ((((!((map__1880806_1880828 == null)))?((((map__1880806_1880828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880806_1880828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880806_1880828):map__1880806_1880828);
var binding_1880830 = map__1880806_1880829__$1;
var init_1880831 = cljs.core.get.call(null,map__1880806_1880829__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_1880830);

cljs.compiler.emitln.call(null," = ",init_1880831,";");

var G__1880832 = cljs.core.next.call(null,seq__1880800_1880822__$1);
var G__1880833 = null;
var G__1880834 = (0);
var G__1880835 = (0);
seq__1880800_1880809 = G__1880832;
chunk__1880801_1880810 = G__1880833;
count__1880802_1880811 = G__1880834;
i__1880803_1880812 = G__1880835;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_1880799_1880808;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__1880836){
var map__1880837 = p__1880836;
var map__1880837__$1 = ((((!((map__1880837 == null)))?((((map__1880837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880837):map__1880837);
var frame = cljs.core.get.call(null,map__1880837__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__1880837__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__1880837__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__25064__auto___1880839 = cljs.core.count.call(null,exprs);
var i_1880840 = (0);
while(true){
if((i_1880840 < n__25064__auto___1880839)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_1880840)," = ",exprs.call(null,i_1880840),";");

var G__1880841 = (i_1880840 + (1));
i_1880840 = G__1880841;
continue;
} else {
}
break;
}

var n__25064__auto___1880842 = cljs.core.count.call(null,exprs);
var i_1880843 = (0);
while(true){
if((i_1880843 < n__25064__auto___1880842)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_1880843))," = ",temps.call(null,i_1880843),";");

var G__1880844 = (i_1880843 + (1));
i_1880843 = G__1880844;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__1880845){
var map__1880846 = p__1880845;
var map__1880846__$1 = ((((!((map__1880846 == null)))?((((map__1880846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880846):map__1880846);
var bindings = cljs.core.get.call(null,map__1880846__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__1880846__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__1880846__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__1880848_1880856 = cljs.core.seq.call(null,bindings);
var chunk__1880849_1880857 = null;
var count__1880850_1880858 = (0);
var i__1880851_1880859 = (0);
while(true){
if((i__1880851_1880859 < count__1880850_1880858)){
var map__1880852_1880860 = cljs.core._nth.call(null,chunk__1880849_1880857,i__1880851_1880859);
var map__1880852_1880861__$1 = ((((!((map__1880852_1880860 == null)))?((((map__1880852_1880860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880852_1880860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880852_1880860):map__1880852_1880860);
var binding_1880862 = map__1880852_1880861__$1;
var init_1880863 = cljs.core.get.call(null,map__1880852_1880861__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_1880862)," = ",init_1880863,";");

var G__1880864 = seq__1880848_1880856;
var G__1880865 = chunk__1880849_1880857;
var G__1880866 = count__1880850_1880858;
var G__1880867 = (i__1880851_1880859 + (1));
seq__1880848_1880856 = G__1880864;
chunk__1880849_1880857 = G__1880865;
count__1880850_1880858 = G__1880866;
i__1880851_1880859 = G__1880867;
continue;
} else {
var temp__4425__auto___1880868 = cljs.core.seq.call(null,seq__1880848_1880856);
if(temp__4425__auto___1880868){
var seq__1880848_1880869__$1 = temp__4425__auto___1880868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880848_1880869__$1)){
var c__24964__auto___1880870 = cljs.core.chunk_first.call(null,seq__1880848_1880869__$1);
var G__1880871 = cljs.core.chunk_rest.call(null,seq__1880848_1880869__$1);
var G__1880872 = c__24964__auto___1880870;
var G__1880873 = cljs.core.count.call(null,c__24964__auto___1880870);
var G__1880874 = (0);
seq__1880848_1880856 = G__1880871;
chunk__1880849_1880857 = G__1880872;
count__1880850_1880858 = G__1880873;
i__1880851_1880859 = G__1880874;
continue;
} else {
var map__1880854_1880875 = cljs.core.first.call(null,seq__1880848_1880869__$1);
var map__1880854_1880876__$1 = ((((!((map__1880854_1880875 == null)))?((((map__1880854_1880875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880854_1880875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880854_1880875):map__1880854_1880875);
var binding_1880877 = map__1880854_1880876__$1;
var init_1880878 = cljs.core.get.call(null,map__1880854_1880876__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_1880877)," = ",init_1880878,";");

var G__1880879 = cljs.core.next.call(null,seq__1880848_1880869__$1);
var G__1880880 = null;
var G__1880881 = (0);
var G__1880882 = (0);
seq__1880848_1880856 = G__1880879;
chunk__1880849_1880857 = G__1880880;
count__1880850_1880858 = G__1880881;
i__1880851_1880859 = G__1880882;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__1880885){
var map__1880886 = p__1880885;
var map__1880886__$1 = ((((!((map__1880886 == null)))?((((map__1880886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880886):map__1880886);
var expr = map__1880886__$1;
var f = cljs.core.get.call(null,map__1880886__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__1880886__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__1880886__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__1880888 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__1880886,map__1880886__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__1880886,map__1880886__$1,expr,f,args,env){
return (function (p1__1880883_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__1880883_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__1880886,map__1880886__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__1880886,map__1880886__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__1880886,map__1880886__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__1880886,map__1880886__$1,expr,f,args,env){
return (function (p1__1880884_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__1880884_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__1880886,map__1880886__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__1880886,map__1880886__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__1880888,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__1880888,(1),null);
var env__27162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__27162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_1880889 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_1880889,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_1880890 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_1880890,args)),(((mfa_1880890 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_1880890,args)),"], 0))");
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
var fprop_1880891 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_1880891," ? ",f__$1,fprop_1880891,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__1880892){
var map__1880893 = p__1880892;
var map__1880893__$1 = ((((!((map__1880893 == null)))?((((map__1880893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880893):map__1880893);
var ctor = cljs.core.get.call(null,map__1880893__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__1880893__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__1880893__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__1880895){
var map__1880896 = p__1880895;
var map__1880896__$1 = ((((!((map__1880896 == null)))?((((map__1880896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880896):map__1880896);
var target = cljs.core.get.call(null,map__1880896__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__1880896__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__1880896__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__1880902_1880906 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__1880903_1880907 = null;
var count__1880904_1880908 = (0);
var i__1880905_1880909 = (0);
while(true){
if((i__1880905_1880909 < count__1880904_1880908)){
var lib_1880910 = cljs.core._nth.call(null,chunk__1880903_1880907,i__1880905_1880909);
if(cljs.core.truth_((function (){var or__24161__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_1880910),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_1880910),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24161__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_1880910),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_1880910),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_1880910),"');");

}
}

var G__1880911 = seq__1880902_1880906;
var G__1880912 = chunk__1880903_1880907;
var G__1880913 = count__1880904_1880908;
var G__1880914 = (i__1880905_1880909 + (1));
seq__1880902_1880906 = G__1880911;
chunk__1880903_1880907 = G__1880912;
count__1880904_1880908 = G__1880913;
i__1880905_1880909 = G__1880914;
continue;
} else {
var temp__4425__auto___1880915 = cljs.core.seq.call(null,seq__1880902_1880906);
if(temp__4425__auto___1880915){
var seq__1880902_1880916__$1 = temp__4425__auto___1880915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880902_1880916__$1)){
var c__24964__auto___1880917 = cljs.core.chunk_first.call(null,seq__1880902_1880916__$1);
var G__1880918 = cljs.core.chunk_rest.call(null,seq__1880902_1880916__$1);
var G__1880919 = c__24964__auto___1880917;
var G__1880920 = cljs.core.count.call(null,c__24964__auto___1880917);
var G__1880921 = (0);
seq__1880902_1880906 = G__1880918;
chunk__1880903_1880907 = G__1880919;
count__1880904_1880908 = G__1880920;
i__1880905_1880909 = G__1880921;
continue;
} else {
var lib_1880922 = cljs.core.first.call(null,seq__1880902_1880916__$1);
if(cljs.core.truth_((function (){var or__24161__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_1880922),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_1880922),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24161__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_1880922),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_1880922),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_1880922),"');");

}
}

var G__1880923 = cljs.core.next.call(null,seq__1880902_1880916__$1);
var G__1880924 = null;
var G__1880925 = (0);
var G__1880926 = (0);
seq__1880902_1880906 = G__1880923;
chunk__1880903_1880907 = G__1880924;
count__1880904_1880908 = G__1880925;
i__1880905_1880909 = G__1880926;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__1880927){
var map__1880928 = p__1880927;
var map__1880928__$1 = ((((!((map__1880928 == null)))?((((map__1880928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880928):map__1880928);
var name = cljs.core.get.call(null,map__1880928__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__1880928__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__1880928__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__1880928__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__1880928__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__1880928__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__1880930){
var map__1880931 = p__1880930;
var map__1880931__$1 = ((((!((map__1880931 == null)))?((((map__1880931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1880931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1880931):map__1880931);
var t = cljs.core.get.call(null,map__1880931__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__1880931__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__1880931__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__1880931__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__1880931__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__1880933_1880947 = cljs.core.seq.call(null,protocols);
var chunk__1880934_1880948 = null;
var count__1880935_1880949 = (0);
var i__1880936_1880950 = (0);
while(true){
if((i__1880936_1880950 < count__1880935_1880949)){
var protocol_1880951 = cljs.core._nth.call(null,chunk__1880934_1880948,i__1880936_1880950);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_1880951)].join('')),"}");

var G__1880952 = seq__1880933_1880947;
var G__1880953 = chunk__1880934_1880948;
var G__1880954 = count__1880935_1880949;
var G__1880955 = (i__1880936_1880950 + (1));
seq__1880933_1880947 = G__1880952;
chunk__1880934_1880948 = G__1880953;
count__1880935_1880949 = G__1880954;
i__1880936_1880950 = G__1880955;
continue;
} else {
var temp__4425__auto___1880956 = cljs.core.seq.call(null,seq__1880933_1880947);
if(temp__4425__auto___1880956){
var seq__1880933_1880957__$1 = temp__4425__auto___1880956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880933_1880957__$1)){
var c__24964__auto___1880958 = cljs.core.chunk_first.call(null,seq__1880933_1880957__$1);
var G__1880959 = cljs.core.chunk_rest.call(null,seq__1880933_1880957__$1);
var G__1880960 = c__24964__auto___1880958;
var G__1880961 = cljs.core.count.call(null,c__24964__auto___1880958);
var G__1880962 = (0);
seq__1880933_1880947 = G__1880959;
chunk__1880934_1880948 = G__1880960;
count__1880935_1880949 = G__1880961;
i__1880936_1880950 = G__1880962;
continue;
} else {
var protocol_1880963 = cljs.core.first.call(null,seq__1880933_1880957__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_1880963)].join('')),"}");

var G__1880964 = cljs.core.next.call(null,seq__1880933_1880957__$1);
var G__1880965 = null;
var G__1880966 = (0);
var G__1880967 = (0);
seq__1880933_1880947 = G__1880964;
chunk__1880934_1880948 = G__1880965;
count__1880935_1880949 = G__1880966;
i__1880936_1880950 = G__1880967;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__1880937_1880968 = cljs.core.seq.call(null,fields__$1);
var chunk__1880938_1880969 = null;
var count__1880939_1880970 = (0);
var i__1880940_1880971 = (0);
while(true){
if((i__1880940_1880971 < count__1880939_1880970)){
var fld_1880972 = cljs.core._nth.call(null,chunk__1880938_1880969,i__1880940_1880971);
cljs.compiler.emitln.call(null,"this.",fld_1880972," = ",fld_1880972,";");

var G__1880973 = seq__1880937_1880968;
var G__1880974 = chunk__1880938_1880969;
var G__1880975 = count__1880939_1880970;
var G__1880976 = (i__1880940_1880971 + (1));
seq__1880937_1880968 = G__1880973;
chunk__1880938_1880969 = G__1880974;
count__1880939_1880970 = G__1880975;
i__1880940_1880971 = G__1880976;
continue;
} else {
var temp__4425__auto___1880977 = cljs.core.seq.call(null,seq__1880937_1880968);
if(temp__4425__auto___1880977){
var seq__1880937_1880978__$1 = temp__4425__auto___1880977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880937_1880978__$1)){
var c__24964__auto___1880979 = cljs.core.chunk_first.call(null,seq__1880937_1880978__$1);
var G__1880980 = cljs.core.chunk_rest.call(null,seq__1880937_1880978__$1);
var G__1880981 = c__24964__auto___1880979;
var G__1880982 = cljs.core.count.call(null,c__24964__auto___1880979);
var G__1880983 = (0);
seq__1880937_1880968 = G__1880980;
chunk__1880938_1880969 = G__1880981;
count__1880939_1880970 = G__1880982;
i__1880940_1880971 = G__1880983;
continue;
} else {
var fld_1880984 = cljs.core.first.call(null,seq__1880937_1880978__$1);
cljs.compiler.emitln.call(null,"this.",fld_1880984," = ",fld_1880984,";");

var G__1880985 = cljs.core.next.call(null,seq__1880937_1880978__$1);
var G__1880986 = null;
var G__1880987 = (0);
var G__1880988 = (0);
seq__1880937_1880968 = G__1880985;
chunk__1880938_1880969 = G__1880986;
count__1880939_1880970 = G__1880987;
i__1880940_1880971 = G__1880988;
continue;
}
} else {
}
}
break;
}

var seq__1880941_1880989 = cljs.core.seq.call(null,pmasks);
var chunk__1880942_1880990 = null;
var count__1880943_1880991 = (0);
var i__1880944_1880992 = (0);
while(true){
if((i__1880944_1880992 < count__1880943_1880991)){
var vec__1880945_1880993 = cljs.core._nth.call(null,chunk__1880942_1880990,i__1880944_1880992);
var pno_1880994 = cljs.core.nth.call(null,vec__1880945_1880993,(0),null);
var pmask_1880995 = cljs.core.nth.call(null,vec__1880945_1880993,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_1880994,"$ = ",pmask_1880995,";");

var G__1880996 = seq__1880941_1880989;
var G__1880997 = chunk__1880942_1880990;
var G__1880998 = count__1880943_1880991;
var G__1880999 = (i__1880944_1880992 + (1));
seq__1880941_1880989 = G__1880996;
chunk__1880942_1880990 = G__1880997;
count__1880943_1880991 = G__1880998;
i__1880944_1880992 = G__1880999;
continue;
} else {
var temp__4425__auto___1881000 = cljs.core.seq.call(null,seq__1880941_1880989);
if(temp__4425__auto___1881000){
var seq__1880941_1881001__$1 = temp__4425__auto___1881000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1880941_1881001__$1)){
var c__24964__auto___1881002 = cljs.core.chunk_first.call(null,seq__1880941_1881001__$1);
var G__1881003 = cljs.core.chunk_rest.call(null,seq__1880941_1881001__$1);
var G__1881004 = c__24964__auto___1881002;
var G__1881005 = cljs.core.count.call(null,c__24964__auto___1881002);
var G__1881006 = (0);
seq__1880941_1880989 = G__1881003;
chunk__1880942_1880990 = G__1881004;
count__1880943_1880991 = G__1881005;
i__1880944_1880992 = G__1881006;
continue;
} else {
var vec__1880946_1881007 = cljs.core.first.call(null,seq__1880941_1881001__$1);
var pno_1881008 = cljs.core.nth.call(null,vec__1880946_1881007,(0),null);
var pmask_1881009 = cljs.core.nth.call(null,vec__1880946_1881007,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_1881008,"$ = ",pmask_1881009,";");

var G__1881010 = cljs.core.next.call(null,seq__1880941_1881001__$1);
var G__1881011 = null;
var G__1881012 = (0);
var G__1881013 = (0);
seq__1880941_1880989 = G__1881010;
chunk__1880942_1880990 = G__1881011;
count__1880943_1880991 = G__1881012;
i__1880944_1880992 = G__1881013;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__1881014){
var map__1881015 = p__1881014;
var map__1881015__$1 = ((((!((map__1881015 == null)))?((((map__1881015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1881015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1881015):map__1881015);
var t = cljs.core.get.call(null,map__1881015__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__1881015__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__1881015__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__1881015__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__1881015__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__1881017_1881031 = cljs.core.seq.call(null,protocols);
var chunk__1881018_1881032 = null;
var count__1881019_1881033 = (0);
var i__1881020_1881034 = (0);
while(true){
if((i__1881020_1881034 < count__1881019_1881033)){
var protocol_1881035 = cljs.core._nth.call(null,chunk__1881018_1881032,i__1881020_1881034);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_1881035)].join('')),"}");

var G__1881036 = seq__1881017_1881031;
var G__1881037 = chunk__1881018_1881032;
var G__1881038 = count__1881019_1881033;
var G__1881039 = (i__1881020_1881034 + (1));
seq__1881017_1881031 = G__1881036;
chunk__1881018_1881032 = G__1881037;
count__1881019_1881033 = G__1881038;
i__1881020_1881034 = G__1881039;
continue;
} else {
var temp__4425__auto___1881040 = cljs.core.seq.call(null,seq__1881017_1881031);
if(temp__4425__auto___1881040){
var seq__1881017_1881041__$1 = temp__4425__auto___1881040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1881017_1881041__$1)){
var c__24964__auto___1881042 = cljs.core.chunk_first.call(null,seq__1881017_1881041__$1);
var G__1881043 = cljs.core.chunk_rest.call(null,seq__1881017_1881041__$1);
var G__1881044 = c__24964__auto___1881042;
var G__1881045 = cljs.core.count.call(null,c__24964__auto___1881042);
var G__1881046 = (0);
seq__1881017_1881031 = G__1881043;
chunk__1881018_1881032 = G__1881044;
count__1881019_1881033 = G__1881045;
i__1881020_1881034 = G__1881046;
continue;
} else {
var protocol_1881047 = cljs.core.first.call(null,seq__1881017_1881041__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_1881047)].join('')),"}");

var G__1881048 = cljs.core.next.call(null,seq__1881017_1881041__$1);
var G__1881049 = null;
var G__1881050 = (0);
var G__1881051 = (0);
seq__1881017_1881031 = G__1881048;
chunk__1881018_1881032 = G__1881049;
count__1881019_1881033 = G__1881050;
i__1881020_1881034 = G__1881051;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__1881021_1881052 = cljs.core.seq.call(null,fields__$1);
var chunk__1881022_1881053 = null;
var count__1881023_1881054 = (0);
var i__1881024_1881055 = (0);
while(true){
if((i__1881024_1881055 < count__1881023_1881054)){
var fld_1881056 = cljs.core._nth.call(null,chunk__1881022_1881053,i__1881024_1881055);
cljs.compiler.emitln.call(null,"this.",fld_1881056," = ",fld_1881056,";");

var G__1881057 = seq__1881021_1881052;
var G__1881058 = chunk__1881022_1881053;
var G__1881059 = count__1881023_1881054;
var G__1881060 = (i__1881024_1881055 + (1));
seq__1881021_1881052 = G__1881057;
chunk__1881022_1881053 = G__1881058;
count__1881023_1881054 = G__1881059;
i__1881024_1881055 = G__1881060;
continue;
} else {
var temp__4425__auto___1881061 = cljs.core.seq.call(null,seq__1881021_1881052);
if(temp__4425__auto___1881061){
var seq__1881021_1881062__$1 = temp__4425__auto___1881061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1881021_1881062__$1)){
var c__24964__auto___1881063 = cljs.core.chunk_first.call(null,seq__1881021_1881062__$1);
var G__1881064 = cljs.core.chunk_rest.call(null,seq__1881021_1881062__$1);
var G__1881065 = c__24964__auto___1881063;
var G__1881066 = cljs.core.count.call(null,c__24964__auto___1881063);
var G__1881067 = (0);
seq__1881021_1881052 = G__1881064;
chunk__1881022_1881053 = G__1881065;
count__1881023_1881054 = G__1881066;
i__1881024_1881055 = G__1881067;
continue;
} else {
var fld_1881068 = cljs.core.first.call(null,seq__1881021_1881062__$1);
cljs.compiler.emitln.call(null,"this.",fld_1881068," = ",fld_1881068,";");

var G__1881069 = cljs.core.next.call(null,seq__1881021_1881062__$1);
var G__1881070 = null;
var G__1881071 = (0);
var G__1881072 = (0);
seq__1881021_1881052 = G__1881069;
chunk__1881022_1881053 = G__1881070;
count__1881023_1881054 = G__1881071;
i__1881024_1881055 = G__1881072;
continue;
}
} else {
}
}
break;
}

var seq__1881025_1881073 = cljs.core.seq.call(null,pmasks);
var chunk__1881026_1881074 = null;
var count__1881027_1881075 = (0);
var i__1881028_1881076 = (0);
while(true){
if((i__1881028_1881076 < count__1881027_1881075)){
var vec__1881029_1881077 = cljs.core._nth.call(null,chunk__1881026_1881074,i__1881028_1881076);
var pno_1881078 = cljs.core.nth.call(null,vec__1881029_1881077,(0),null);
var pmask_1881079 = cljs.core.nth.call(null,vec__1881029_1881077,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_1881078,"$ = ",pmask_1881079,";");

var G__1881080 = seq__1881025_1881073;
var G__1881081 = chunk__1881026_1881074;
var G__1881082 = count__1881027_1881075;
var G__1881083 = (i__1881028_1881076 + (1));
seq__1881025_1881073 = G__1881080;
chunk__1881026_1881074 = G__1881081;
count__1881027_1881075 = G__1881082;
i__1881028_1881076 = G__1881083;
continue;
} else {
var temp__4425__auto___1881084 = cljs.core.seq.call(null,seq__1881025_1881073);
if(temp__4425__auto___1881084){
var seq__1881025_1881085__$1 = temp__4425__auto___1881084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1881025_1881085__$1)){
var c__24964__auto___1881086 = cljs.core.chunk_first.call(null,seq__1881025_1881085__$1);
var G__1881087 = cljs.core.chunk_rest.call(null,seq__1881025_1881085__$1);
var G__1881088 = c__24964__auto___1881086;
var G__1881089 = cljs.core.count.call(null,c__24964__auto___1881086);
var G__1881090 = (0);
seq__1881025_1881073 = G__1881087;
chunk__1881026_1881074 = G__1881088;
count__1881027_1881075 = G__1881089;
i__1881028_1881076 = G__1881090;
continue;
} else {
var vec__1881030_1881091 = cljs.core.first.call(null,seq__1881025_1881085__$1);
var pno_1881092 = cljs.core.nth.call(null,vec__1881030_1881091,(0),null);
var pmask_1881093 = cljs.core.nth.call(null,vec__1881030_1881091,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_1881092,"$ = ",pmask_1881093,";");

var G__1881094 = cljs.core.next.call(null,seq__1881025_1881085__$1);
var G__1881095 = null;
var G__1881096 = (0);
var G__1881097 = (0);
seq__1881025_1881073 = G__1881094;
chunk__1881026_1881074 = G__1881095;
count__1881027_1881075 = G__1881096;
i__1881028_1881076 = G__1881097;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__1881098){
var map__1881099 = p__1881098;
var map__1881099__$1 = ((((!((map__1881099 == null)))?((((map__1881099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1881099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1881099):map__1881099);
var target = cljs.core.get.call(null,map__1881099__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__1881099__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__1881099__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__1881099__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__1881099__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__1881101){
var map__1881102 = p__1881101;
var map__1881102__$1 = ((((!((map__1881102 == null)))?((((map__1881102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1881102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1881102):map__1881102);
var op = cljs.core.get.call(null,map__1881102__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__1881102__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__1881102__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__1881102__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__1881102__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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
var seq__1881112 = cljs.core.seq.call(null,table);
var chunk__1881113 = null;
var count__1881114 = (0);
var i__1881115 = (0);
while(true){
if((i__1881115 < count__1881114)){
var vec__1881116 = cljs.core._nth.call(null,chunk__1881113,i__1881115);
var sym = cljs.core.nth.call(null,vec__1881116,(0),null);
var value = cljs.core.nth.call(null,vec__1881116,(1),null);
var ns_1881118 = cljs.core.namespace.call(null,sym);
var name_1881119 = cljs.core.name.call(null,sym);
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

var G__1881120 = seq__1881112;
var G__1881121 = chunk__1881113;
var G__1881122 = count__1881114;
var G__1881123 = (i__1881115 + (1));
seq__1881112 = G__1881120;
chunk__1881113 = G__1881121;
count__1881114 = G__1881122;
i__1881115 = G__1881123;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__1881112);
if(temp__4425__auto__){
var seq__1881112__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1881112__$1)){
var c__24964__auto__ = cljs.core.chunk_first.call(null,seq__1881112__$1);
var G__1881124 = cljs.core.chunk_rest.call(null,seq__1881112__$1);
var G__1881125 = c__24964__auto__;
var G__1881126 = cljs.core.count.call(null,c__24964__auto__);
var G__1881127 = (0);
seq__1881112 = G__1881124;
chunk__1881113 = G__1881125;
count__1881114 = G__1881126;
i__1881115 = G__1881127;
continue;
} else {
var vec__1881117 = cljs.core.first.call(null,seq__1881112__$1);
var sym = cljs.core.nth.call(null,vec__1881117,(0),null);
var value = cljs.core.nth.call(null,vec__1881117,(1),null);
var ns_1881128 = cljs.core.namespace.call(null,sym);
var name_1881129 = cljs.core.name.call(null,sym);
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

var G__1881130 = cljs.core.next.call(null,seq__1881112__$1);
var G__1881131 = null;
var G__1881132 = (0);
var G__1881133 = (0);
seq__1881112 = G__1881130;
chunk__1881113 = G__1881131;
count__1881114 = G__1881132;
i__1881115 = G__1881133;
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