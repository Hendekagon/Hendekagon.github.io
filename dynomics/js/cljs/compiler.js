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
var map__875155 = s;
var map__875155__$1 = ((((!((map__875155 == null)))?((((map__875155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875155):map__875155);
var name = cljs.core.get.call(null,map__875155__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__875155__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__875158 = info;
var map__875159 = G__875158;
var map__875159__$1 = ((((!((map__875159 == null)))?((((map__875159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875159):map__875159);
var shadow = cljs.core.get.call(null,map__875159__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__875158__$1 = G__875158;
while(true){
var d__$2 = d__$1;
var map__875161 = G__875158__$1;
var map__875161__$1 = ((((!((map__875161 == null)))?((((map__875161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875161):map__875161);
var shadow__$1 = cljs.core.get.call(null,map__875161__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__875163 = (d__$2 + (1));
var G__875164 = shadow__$1;
d__$1 = G__875163;
G__875158__$1 = G__875164;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__875165){
var map__875170 = p__875165;
var map__875170__$1 = ((((!((map__875170 == null)))?((((map__875170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875170):map__875170);
var name_var = map__875170__$1;
var name = cljs.core.get.call(null,map__875170__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__875170__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__875172 = info;
var map__875172__$1 = ((((!((map__875172 == null)))?((((map__875172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875172):map__875172);
var ns = cljs.core.get.call(null,map__875172__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__875172__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args875174 = [];
var len__25269__auto___875177 = arguments.length;
var i__25270__auto___875178 = (0);
while(true){
if((i__25270__auto___875178 < len__25269__auto___875177)){
args875174.push((arguments[i__25270__auto___875178]));

var G__875179 = (i__25270__auto___875178 + (1));
i__25270__auto___875178 = G__875179;
continue;
} else {
}
break;
}

var G__875176 = args875174.length;
switch (G__875176) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args875174.length)].join('')));

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
var G__875182 = cp;
switch (G__875182) {
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
var seq__875188_875192 = cljs.core.seq.call(null,s);
var chunk__875189_875193 = null;
var count__875190_875194 = (0);
var i__875191_875195 = (0);
while(true){
if((i__875191_875195 < count__875190_875194)){
var c_875196 = cljs.core._nth.call(null,chunk__875189_875193,i__875191_875195);
sb.append(cljs.compiler.escape_char.call(null,c_875196));

var G__875197 = seq__875188_875192;
var G__875198 = chunk__875189_875193;
var G__875199 = count__875190_875194;
var G__875200 = (i__875191_875195 + (1));
seq__875188_875192 = G__875197;
chunk__875189_875193 = G__875198;
count__875190_875194 = G__875199;
i__875191_875195 = G__875200;
continue;
} else {
var temp__4425__auto___875201 = cljs.core.seq.call(null,seq__875188_875192);
if(temp__4425__auto___875201){
var seq__875188_875202__$1 = temp__4425__auto___875201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875188_875202__$1)){
var c__25014__auto___875203 = cljs.core.chunk_first.call(null,seq__875188_875202__$1);
var G__875204 = cljs.core.chunk_rest.call(null,seq__875188_875202__$1);
var G__875205 = c__25014__auto___875203;
var G__875206 = cljs.core.count.call(null,c__25014__auto___875203);
var G__875207 = (0);
seq__875188_875192 = G__875204;
chunk__875189_875193 = G__875205;
count__875190_875194 = G__875206;
i__875191_875195 = G__875207;
continue;
} else {
var c_875208 = cljs.core.first.call(null,seq__875188_875202__$1);
sb.append(cljs.compiler.escape_char.call(null,c_875208));

var G__875209 = cljs.core.next.call(null,seq__875188_875202__$1);
var G__875210 = null;
var G__875211 = (0);
var G__875212 = (0);
seq__875188_875192 = G__875209;
chunk__875189_875193 = G__875210;
count__875190_875194 = G__875211;
i__875191_875195 = G__875212;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__25124__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25125__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25126__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25127__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25128__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25128__auto__,method_table__25124__auto__,prefer_table__25125__auto__,method_cache__25126__auto__,cached_hierarchy__25127__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__36322__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__36322__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__875218_875223 = ast;
var map__875218_875224__$1 = ((((!((map__875218_875223 == null)))?((((map__875218_875223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875218_875223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875218_875223):map__875218_875223);
var env_875225 = cljs.core.get.call(null,map__875218_875224__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_875225))){
var map__875220_875226 = env_875225;
var map__875220_875227__$1 = ((((!((map__875220_875226 == null)))?((((map__875220_875226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875220_875226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875220_875226):map__875220_875226);
var line_875228 = cljs.core.get.call(null,map__875220_875227__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_875229 = cljs.core.get.call(null,map__875220_875227__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__875220_875226,map__875220_875227__$1,line_875228,column_875229,map__875218_875223,map__875218_875224__$1,env_875225,val__36322__auto__){
return (function (m){
var minfo = (function (){var G__875222 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__875222__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__875222,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__875222);
return G__875222__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_875228 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__875220_875226,map__875220_875227__$1,line_875228,column_875229,map__875218_875223,map__875218_875224__$1,env_875225,val__36322__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_875229)?(column_875229 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__875220_875226,map__875220_875227__$1,line_875228,column_875229,map__875218_875223,map__875218_875224__$1,env_875225,val__36322__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__875220_875226,map__875220_875227__$1,line_875228,column_875229,map__875218_875223,map__875218_875224__$1,env_875225,val__36322__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__875220_875226,map__875220_875227__$1,line_875228,column_875229,map__875218_875223,map__875218_875224__$1,env_875225,val__36322__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__875220_875226,map__875220_875227__$1,line_875228,column_875229,map__875218_875223,map__875218_875224__$1,env_875225,val__36322__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__36322__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__25276__auto__ = [];
var len__25269__auto___875236 = arguments.length;
var i__25270__auto___875237 = (0);
while(true){
if((i__25270__auto___875237 < len__25269__auto___875236)){
args__25276__auto__.push((arguments[i__25270__auto___875237]));

var G__875238 = (i__25270__auto___875237 + (1));
i__25270__auto___875237 = G__875238;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((0) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__25277__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__875232_875239 = cljs.core.seq.call(null,xs);
var chunk__875233_875240 = null;
var count__875234_875241 = (0);
var i__875235_875242 = (0);
while(true){
if((i__875235_875242 < count__875234_875241)){
var x_875243 = cljs.core._nth.call(null,chunk__875233_875240,i__875235_875242);
if((x_875243 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_875243)){
cljs.compiler.emit.call(null,x_875243);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_875243)){
cljs.core.apply.call(null,cljs.compiler.emits,x_875243);
} else {
if(goog.isFunction(x_875243)){
x_875243.call(null);
} else {
var s_875244 = cljs.core.print_str.call(null,x_875243);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__875232_875239,chunk__875233_875240,count__875234_875241,i__875235_875242,s_875244,x_875243){
return (function (p1__875230_SHARP_){
return (p1__875230_SHARP_ + cljs.core.count.call(null,s_875244));
});})(seq__875232_875239,chunk__875233_875240,count__875234_875241,i__875235_875242,s_875244,x_875243))
);
}

cljs.core.print.call(null,s_875244);

}
}
}
}

var G__875245 = seq__875232_875239;
var G__875246 = chunk__875233_875240;
var G__875247 = count__875234_875241;
var G__875248 = (i__875235_875242 + (1));
seq__875232_875239 = G__875245;
chunk__875233_875240 = G__875246;
count__875234_875241 = G__875247;
i__875235_875242 = G__875248;
continue;
} else {
var temp__4425__auto___875249 = cljs.core.seq.call(null,seq__875232_875239);
if(temp__4425__auto___875249){
var seq__875232_875250__$1 = temp__4425__auto___875249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875232_875250__$1)){
var c__25014__auto___875251 = cljs.core.chunk_first.call(null,seq__875232_875250__$1);
var G__875252 = cljs.core.chunk_rest.call(null,seq__875232_875250__$1);
var G__875253 = c__25014__auto___875251;
var G__875254 = cljs.core.count.call(null,c__25014__auto___875251);
var G__875255 = (0);
seq__875232_875239 = G__875252;
chunk__875233_875240 = G__875253;
count__875234_875241 = G__875254;
i__875235_875242 = G__875255;
continue;
} else {
var x_875256 = cljs.core.first.call(null,seq__875232_875250__$1);
if((x_875256 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_875256)){
cljs.compiler.emit.call(null,x_875256);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_875256)){
cljs.core.apply.call(null,cljs.compiler.emits,x_875256);
} else {
if(goog.isFunction(x_875256)){
x_875256.call(null);
} else {
var s_875257 = cljs.core.print_str.call(null,x_875256);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__875232_875239,chunk__875233_875240,count__875234_875241,i__875235_875242,s_875257,x_875256,seq__875232_875250__$1,temp__4425__auto___875249){
return (function (p1__875230_SHARP_){
return (p1__875230_SHARP_ + cljs.core.count.call(null,s_875257));
});})(seq__875232_875239,chunk__875233_875240,count__875234_875241,i__875235_875242,s_875257,x_875256,seq__875232_875250__$1,temp__4425__auto___875249))
);
}

cljs.core.print.call(null,s_875257);

}
}
}
}

var G__875258 = cljs.core.next.call(null,seq__875232_875250__$1);
var G__875259 = null;
var G__875260 = (0);
var G__875261 = (0);
seq__875232_875239 = G__875258;
chunk__875233_875240 = G__875259;
count__875234_875241 = G__875260;
i__875235_875242 = G__875261;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq875231){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq875231));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__25276__auto__ = [];
var len__25269__auto___875266 = arguments.length;
var i__25270__auto___875267 = (0);
while(true){
if((i__25270__auto___875267 < len__25269__auto___875266)){
args__25276__auto__.push((arguments[i__25270__auto___875267]));

var G__875268 = (i__25270__auto___875267 + (1));
i__25270__auto___875267 = G__875268;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((0) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__25277__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__875263){
var map__875264 = p__875263;
var map__875264__$1 = ((((!((map__875264 == null)))?((((map__875264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875264):map__875264);
var m = map__875264__$1;
var gen_line = cljs.core.get.call(null,map__875264__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq875262){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq875262));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__25185__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_875271_875273 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_875272_875274 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_875271_875273,_STAR_print_fn_STAR_875272_875274,sb__25185__auto__){
return (function (x__25186__auto__){
return sb__25185__auto__.append(x__25186__auto__);
});})(_STAR_print_newline_STAR_875271_875273,_STAR_print_fn_STAR_875272_875274,sb__25185__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_875272_875274;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_875271_875273;
}
return [cljs.core.str(sb__25185__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__25124__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25125__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25126__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25127__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25128__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25128__auto__,method_table__25124__auto__,prefer_table__25125__auto__,method_cache__25126__auto__,cached_hierarchy__25127__auto__));
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
var vec__875275 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__875275,(0),null);
var flags = cljs.core.nth.call(null,vec__875275,(1),null);
var pattern = cljs.core.nth.call(null,vec__875275,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__875277){
var map__875278 = p__875277;
var map__875278__$1 = ((((!((map__875278 == null)))?((((map__875278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875278):map__875278);
var arg = map__875278__$1;
var info = cljs.core.get.call(null,map__875278__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__875278__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__875278__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__24211__auto__ = js_module_name;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
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
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__875280 = info__$1;
var G__875280__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__875280):G__875280);
return G__875280__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__875281){
var map__875282 = p__875281;
var map__875282__$1 = ((((!((map__875282 == null)))?((((map__875282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875282):map__875282);
var arg = map__875282__$1;
var env = cljs.core.get.call(null,map__875282__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__875282__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__875282__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__875282__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__875284 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__875284__$1 = ((((!((map__875284 == null)))?((((map__875284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875284):map__875284);
var name = cljs.core.get.call(null,map__875284__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__875286){
var map__875287 = p__875286;
var map__875287__$1 = ((((!((map__875287 == null)))?((((map__875287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875287):map__875287);
var expr = cljs.core.get.call(null,map__875287__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__875287__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__875287__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__875289_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__875289_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__875290){
var map__875291 = p__875290;
var map__875291__$1 = ((((!((map__875291 == null)))?((((map__875291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875291):map__875291);
var env = cljs.core.get.call(null,map__875291__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__875291__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__875291__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__875293){
var map__875294 = p__875293;
var map__875294__$1 = ((((!((map__875294 == null)))?((((map__875294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875294):map__875294);
var items = cljs.core.get.call(null,map__875294__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__875294__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__875296){
var map__875297 = p__875296;
var map__875297__$1 = ((((!((map__875297 == null)))?((((map__875297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875297):map__875297);
var items = cljs.core.get.call(null,map__875297__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__875297__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_875299 = cljs.core.count.call(null,items);
if((cnt_875299 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_875299,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__875300_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__875300_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__875301){
var map__875302 = p__875301;
var map__875302__$1 = ((((!((map__875302 == null)))?((((map__875302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875302):map__875302);
var items = cljs.core.get.call(null,map__875302__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__875302__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__875304){
var map__875305 = p__875304;
var map__875305__$1 = ((((!((map__875305 == null)))?((((map__875305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875305):map__875305);
var items = cljs.core.get.call(null,map__875305__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__875305__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__875305__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___875315 = cljs.core.seq.call(null,items);
if(temp__4425__auto___875315){
var items_875316__$1 = temp__4425__auto___875315;
var vec__875307_875317 = items_875316__$1;
var vec__875308_875318 = cljs.core.nth.call(null,vec__875307_875317,(0),null);
var k_875319 = cljs.core.nth.call(null,vec__875308_875318,(0),null);
var v_875320 = cljs.core.nth.call(null,vec__875308_875318,(1),null);
var r_875321 = cljs.core.nthnext.call(null,vec__875307_875317,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_875319),"\": ",v_875320);

var seq__875309_875322 = cljs.core.seq.call(null,r_875321);
var chunk__875310_875323 = null;
var count__875311_875324 = (0);
var i__875312_875325 = (0);
while(true){
if((i__875312_875325 < count__875311_875324)){
var vec__875313_875326 = cljs.core._nth.call(null,chunk__875310_875323,i__875312_875325);
var k_875327__$1 = cljs.core.nth.call(null,vec__875313_875326,(0),null);
var v_875328__$1 = cljs.core.nth.call(null,vec__875313_875326,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_875327__$1),"\": ",v_875328__$1);

var G__875329 = seq__875309_875322;
var G__875330 = chunk__875310_875323;
var G__875331 = count__875311_875324;
var G__875332 = (i__875312_875325 + (1));
seq__875309_875322 = G__875329;
chunk__875310_875323 = G__875330;
count__875311_875324 = G__875331;
i__875312_875325 = G__875332;
continue;
} else {
var temp__4425__auto___875333__$1 = cljs.core.seq.call(null,seq__875309_875322);
if(temp__4425__auto___875333__$1){
var seq__875309_875334__$1 = temp__4425__auto___875333__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875309_875334__$1)){
var c__25014__auto___875335 = cljs.core.chunk_first.call(null,seq__875309_875334__$1);
var G__875336 = cljs.core.chunk_rest.call(null,seq__875309_875334__$1);
var G__875337 = c__25014__auto___875335;
var G__875338 = cljs.core.count.call(null,c__25014__auto___875335);
var G__875339 = (0);
seq__875309_875322 = G__875336;
chunk__875310_875323 = G__875337;
count__875311_875324 = G__875338;
i__875312_875325 = G__875339;
continue;
} else {
var vec__875314_875340 = cljs.core.first.call(null,seq__875309_875334__$1);
var k_875341__$1 = cljs.core.nth.call(null,vec__875314_875340,(0),null);
var v_875342__$1 = cljs.core.nth.call(null,vec__875314_875340,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_875341__$1),"\": ",v_875342__$1);

var G__875343 = cljs.core.next.call(null,seq__875309_875334__$1);
var G__875344 = null;
var G__875345 = (0);
var G__875346 = (0);
seq__875309_875322 = G__875343;
chunk__875310_875323 = G__875344;
count__875311_875324 = G__875345;
i__875312_875325 = G__875346;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__875347){
var map__875348 = p__875347;
var map__875348__$1 = ((((!((map__875348 == null)))?((((map__875348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875348):map__875348);
var form = cljs.core.get.call(null,map__875348__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__875348__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__875350){
var map__875353 = p__875350;
var map__875353__$1 = ((((!((map__875353 == null)))?((((map__875353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875353):map__875353);
var op = cljs.core.get.call(null,map__875353__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__875353__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__24199__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__24199__auto__){
var and__24199__auto____$1 = form;
if(cljs.core.truth_(and__24199__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__24199__auto____$1;
}
} else {
return and__24199__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__875355){
var map__875358 = p__875355;
var map__875358__$1 = ((((!((map__875358 == null)))?((((map__875358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875358):map__875358);
var op = cljs.core.get.call(null,map__875358__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__875358__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__24211__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__875360){
var map__875361 = p__875360;
var map__875361__$1 = ((((!((map__875361 == null)))?((((map__875361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875361):map__875361);
var test = cljs.core.get.call(null,map__875361__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__875361__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__875361__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__875361__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__875361__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__24211__auto__ = unchecked;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__875363){
var map__875364 = p__875363;
var map__875364__$1 = ((((!((map__875364 == null)))?((((map__875364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875364):map__875364);
var v = cljs.core.get.call(null,map__875364__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__875364__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__875364__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__875364__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__875364__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__875366_875380 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__875367_875381 = null;
var count__875368_875382 = (0);
var i__875369_875383 = (0);
while(true){
if((i__875369_875383 < count__875368_875382)){
var vec__875370_875384 = cljs.core._nth.call(null,chunk__875367_875381,i__875369_875383);
var ts_875385 = cljs.core.nth.call(null,vec__875370_875384,(0),null);
var then_875386 = cljs.core.nth.call(null,vec__875370_875384,(1),null);
var seq__875371_875387 = cljs.core.seq.call(null,ts_875385);
var chunk__875372_875388 = null;
var count__875373_875389 = (0);
var i__875374_875390 = (0);
while(true){
if((i__875374_875390 < count__875373_875389)){
var test_875391 = cljs.core._nth.call(null,chunk__875372_875388,i__875374_875390);
cljs.compiler.emitln.call(null,"case ",test_875391,":");

var G__875392 = seq__875371_875387;
var G__875393 = chunk__875372_875388;
var G__875394 = count__875373_875389;
var G__875395 = (i__875374_875390 + (1));
seq__875371_875387 = G__875392;
chunk__875372_875388 = G__875393;
count__875373_875389 = G__875394;
i__875374_875390 = G__875395;
continue;
} else {
var temp__4425__auto___875396 = cljs.core.seq.call(null,seq__875371_875387);
if(temp__4425__auto___875396){
var seq__875371_875397__$1 = temp__4425__auto___875396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875371_875397__$1)){
var c__25014__auto___875398 = cljs.core.chunk_first.call(null,seq__875371_875397__$1);
var G__875399 = cljs.core.chunk_rest.call(null,seq__875371_875397__$1);
var G__875400 = c__25014__auto___875398;
var G__875401 = cljs.core.count.call(null,c__25014__auto___875398);
var G__875402 = (0);
seq__875371_875387 = G__875399;
chunk__875372_875388 = G__875400;
count__875373_875389 = G__875401;
i__875374_875390 = G__875402;
continue;
} else {
var test_875403 = cljs.core.first.call(null,seq__875371_875397__$1);
cljs.compiler.emitln.call(null,"case ",test_875403,":");

var G__875404 = cljs.core.next.call(null,seq__875371_875397__$1);
var G__875405 = null;
var G__875406 = (0);
var G__875407 = (0);
seq__875371_875387 = G__875404;
chunk__875372_875388 = G__875405;
count__875373_875389 = G__875406;
i__875374_875390 = G__875407;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_875386);
} else {
cljs.compiler.emitln.call(null,then_875386);
}

cljs.compiler.emitln.call(null,"break;");

var G__875408 = seq__875366_875380;
var G__875409 = chunk__875367_875381;
var G__875410 = count__875368_875382;
var G__875411 = (i__875369_875383 + (1));
seq__875366_875380 = G__875408;
chunk__875367_875381 = G__875409;
count__875368_875382 = G__875410;
i__875369_875383 = G__875411;
continue;
} else {
var temp__4425__auto___875412 = cljs.core.seq.call(null,seq__875366_875380);
if(temp__4425__auto___875412){
var seq__875366_875413__$1 = temp__4425__auto___875412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875366_875413__$1)){
var c__25014__auto___875414 = cljs.core.chunk_first.call(null,seq__875366_875413__$1);
var G__875415 = cljs.core.chunk_rest.call(null,seq__875366_875413__$1);
var G__875416 = c__25014__auto___875414;
var G__875417 = cljs.core.count.call(null,c__25014__auto___875414);
var G__875418 = (0);
seq__875366_875380 = G__875415;
chunk__875367_875381 = G__875416;
count__875368_875382 = G__875417;
i__875369_875383 = G__875418;
continue;
} else {
var vec__875375_875419 = cljs.core.first.call(null,seq__875366_875413__$1);
var ts_875420 = cljs.core.nth.call(null,vec__875375_875419,(0),null);
var then_875421 = cljs.core.nth.call(null,vec__875375_875419,(1),null);
var seq__875376_875422 = cljs.core.seq.call(null,ts_875420);
var chunk__875377_875423 = null;
var count__875378_875424 = (0);
var i__875379_875425 = (0);
while(true){
if((i__875379_875425 < count__875378_875424)){
var test_875426 = cljs.core._nth.call(null,chunk__875377_875423,i__875379_875425);
cljs.compiler.emitln.call(null,"case ",test_875426,":");

var G__875427 = seq__875376_875422;
var G__875428 = chunk__875377_875423;
var G__875429 = count__875378_875424;
var G__875430 = (i__875379_875425 + (1));
seq__875376_875422 = G__875427;
chunk__875377_875423 = G__875428;
count__875378_875424 = G__875429;
i__875379_875425 = G__875430;
continue;
} else {
var temp__4425__auto___875431__$1 = cljs.core.seq.call(null,seq__875376_875422);
if(temp__4425__auto___875431__$1){
var seq__875376_875432__$1 = temp__4425__auto___875431__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875376_875432__$1)){
var c__25014__auto___875433 = cljs.core.chunk_first.call(null,seq__875376_875432__$1);
var G__875434 = cljs.core.chunk_rest.call(null,seq__875376_875432__$1);
var G__875435 = c__25014__auto___875433;
var G__875436 = cljs.core.count.call(null,c__25014__auto___875433);
var G__875437 = (0);
seq__875376_875422 = G__875434;
chunk__875377_875423 = G__875435;
count__875378_875424 = G__875436;
i__875379_875425 = G__875437;
continue;
} else {
var test_875438 = cljs.core.first.call(null,seq__875376_875432__$1);
cljs.compiler.emitln.call(null,"case ",test_875438,":");

var G__875439 = cljs.core.next.call(null,seq__875376_875432__$1);
var G__875440 = null;
var G__875441 = (0);
var G__875442 = (0);
seq__875376_875422 = G__875439;
chunk__875377_875423 = G__875440;
count__875378_875424 = G__875441;
i__875379_875425 = G__875442;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_875421);
} else {
cljs.compiler.emitln.call(null,then_875421);
}

cljs.compiler.emitln.call(null,"break;");

var G__875443 = cljs.core.next.call(null,seq__875366_875413__$1);
var G__875444 = null;
var G__875445 = (0);
var G__875446 = (0);
seq__875366_875380 = G__875443;
chunk__875367_875381 = G__875444;
count__875368_875382 = G__875445;
i__875369_875383 = G__875446;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__875447){
var map__875448 = p__875447;
var map__875448__$1 = ((((!((map__875448 == null)))?((((map__875448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875448):map__875448);
var throw$ = cljs.core.get.call(null,map__875448__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__875448__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__875453 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__875453,(0),null);
var rstr = cljs.core.nth.call(null,vec__875453,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__875453,fstr,rstr,ret_t,axstr){
return (function (p1__875450_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__875450_SHARP_);
});})(idx,vec__875453,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__875454 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
var G__875454__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__875454),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__875454);
return G__875454__$1;
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
return (function (p1__875455_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__875455_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__875458 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__875458,(0),null);
var ts = cljs.core.nth.call(null,vec__875458,(1),null);
var n = cljs.core.nth.call(null,vec__875458,(2),null);
var xs = cljs.core.nthnext.call(null,vec__875458,(3));
if(cljs.core.truth_((function (){var and__24199__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__24199__auto__){
var and__24199__auto____$1 = ts;
if(cljs.core.truth_(and__24199__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__24199__auto____$1;
}
} else {
return and__24199__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__875459 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__875459,(0),null);
var ts = cljs.core.nth.call(null,vec__875459,(1),null);
var xs = cljs.core.nthnext.call(null,vec__875459,(2));
if(cljs.core.truth_((function (){var and__24199__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__24199__auto__){
var and__24199__auto____$1 = ts;
if(cljs.core.truth_(and__24199__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__24199__auto____$1;
}
} else {
return and__24199__auto__;
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
var args875461 = [];
var len__25269__auto___875488 = arguments.length;
var i__25270__auto___875489 = (0);
while(true){
if((i__25270__auto___875489 < len__25269__auto___875488)){
args875461.push((arguments[i__25270__auto___875489]));

var G__875490 = (i__25270__auto___875489 + (1));
i__25270__auto___875489 = G__875490;
continue;
} else {
}
break;
}

var G__875463 = args875461.length;
switch (G__875463) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args875461.length)].join('')));

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
var vec__875479 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__875460_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__875460_SHARP_);
} else {
return p1__875460_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__875479,(0),null);
var ys = cljs.core.nthnext.call(null,vec__875479,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__875480 = cljs.core.seq.call(null,ys);
var chunk__875481 = null;
var count__875482 = (0);
var i__875483 = (0);
while(true){
if((i__875483 < count__875482)){
var next_line = cljs.core._nth.call(null,chunk__875481,i__875483);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__875492 = seq__875480;
var G__875493 = chunk__875481;
var G__875494 = count__875482;
var G__875495 = (i__875483 + (1));
seq__875480 = G__875492;
chunk__875481 = G__875493;
count__875482 = G__875494;
i__875483 = G__875495;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__875480);
if(temp__4425__auto__){
var seq__875480__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875480__$1)){
var c__25014__auto__ = cljs.core.chunk_first.call(null,seq__875480__$1);
var G__875496 = cljs.core.chunk_rest.call(null,seq__875480__$1);
var G__875497 = c__25014__auto__;
var G__875498 = cljs.core.count.call(null,c__25014__auto__);
var G__875499 = (0);
seq__875480 = G__875496;
chunk__875481 = G__875497;
count__875482 = G__875498;
i__875483 = G__875499;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__875480__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__875500 = cljs.core.next.call(null,seq__875480__$1);
var G__875501 = null;
var G__875502 = (0);
var G__875503 = (0);
seq__875480 = G__875500;
chunk__875481 = G__875501;
count__875482 = G__875502;
i__875483 = G__875503;
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

var seq__875484_875504 = cljs.core.seq.call(null,docs__$2);
var chunk__875485_875505 = null;
var count__875486_875506 = (0);
var i__875487_875507 = (0);
while(true){
if((i__875487_875507 < count__875486_875506)){
var e_875508 = cljs.core._nth.call(null,chunk__875485_875505,i__875487_875507);
if(cljs.core.truth_(e_875508)){
print_comment_lines.call(null,e_875508);
} else {
}

var G__875509 = seq__875484_875504;
var G__875510 = chunk__875485_875505;
var G__875511 = count__875486_875506;
var G__875512 = (i__875487_875507 + (1));
seq__875484_875504 = G__875509;
chunk__875485_875505 = G__875510;
count__875486_875506 = G__875511;
i__875487_875507 = G__875512;
continue;
} else {
var temp__4425__auto___875513 = cljs.core.seq.call(null,seq__875484_875504);
if(temp__4425__auto___875513){
var seq__875484_875514__$1 = temp__4425__auto___875513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875484_875514__$1)){
var c__25014__auto___875515 = cljs.core.chunk_first.call(null,seq__875484_875514__$1);
var G__875516 = cljs.core.chunk_rest.call(null,seq__875484_875514__$1);
var G__875517 = c__25014__auto___875515;
var G__875518 = cljs.core.count.call(null,c__25014__auto___875515);
var G__875519 = (0);
seq__875484_875504 = G__875516;
chunk__875485_875505 = G__875517;
count__875486_875506 = G__875518;
i__875487_875507 = G__875519;
continue;
} else {
var e_875520 = cljs.core.first.call(null,seq__875484_875514__$1);
if(cljs.core.truth_(e_875520)){
print_comment_lines.call(null,e_875520);
} else {
}

var G__875521 = cljs.core.next.call(null,seq__875484_875514__$1);
var G__875522 = null;
var G__875523 = (0);
var G__875524 = (0);
seq__875484_875504 = G__875521;
chunk__875485_875505 = G__875522;
count__875486_875506 = G__875523;
i__875487_875507 = G__875524;
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
var and__24199__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__875526_SHARP_){
return goog.string.startsWith(p1__875526_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__24199__auto__)){
var and__24199__auto____$1 = opts;
if(cljs.core.truth_(and__24199__auto____$1)){
var and__24199__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__24199__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__24199__auto____$2;
}
} else {
return and__24199__auto____$1;
}
} else {
return and__24199__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__875527){
var map__875528 = p__875527;
var map__875528__$1 = ((((!((map__875528 == null)))?((((map__875528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875528):map__875528);
var name = cljs.core.get.call(null,map__875528__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__875528__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__875528__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__875528__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__875528__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__875528__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__875528__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__875528__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__875528__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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

if(cljs.core.truth_((function (){var and__24199__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__24199__auto__)){
return test;
} else {
return and__24199__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__875530){
var map__875547 = p__875530;
var map__875547__$1 = ((((!((map__875547 == null)))?((((map__875547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875547):map__875547);
var name = cljs.core.get.call(null,map__875547__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__875547__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__875547__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__875549_875563 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__875550_875564 = null;
var count__875551_875565 = (0);
var i__875552_875566 = (0);
while(true){
if((i__875552_875566 < count__875551_875565)){
var vec__875553_875567 = cljs.core._nth.call(null,chunk__875550_875564,i__875552_875566);
var i_875568 = cljs.core.nth.call(null,vec__875553_875567,(0),null);
var param_875569 = cljs.core.nth.call(null,vec__875553_875567,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_875569);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__875570 = seq__875549_875563;
var G__875571 = chunk__875550_875564;
var G__875572 = count__875551_875565;
var G__875573 = (i__875552_875566 + (1));
seq__875549_875563 = G__875570;
chunk__875550_875564 = G__875571;
count__875551_875565 = G__875572;
i__875552_875566 = G__875573;
continue;
} else {
var temp__4425__auto___875574 = cljs.core.seq.call(null,seq__875549_875563);
if(temp__4425__auto___875574){
var seq__875549_875575__$1 = temp__4425__auto___875574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875549_875575__$1)){
var c__25014__auto___875576 = cljs.core.chunk_first.call(null,seq__875549_875575__$1);
var G__875577 = cljs.core.chunk_rest.call(null,seq__875549_875575__$1);
var G__875578 = c__25014__auto___875576;
var G__875579 = cljs.core.count.call(null,c__25014__auto___875576);
var G__875580 = (0);
seq__875549_875563 = G__875577;
chunk__875550_875564 = G__875578;
count__875551_875565 = G__875579;
i__875552_875566 = G__875580;
continue;
} else {
var vec__875554_875581 = cljs.core.first.call(null,seq__875549_875575__$1);
var i_875582 = cljs.core.nth.call(null,vec__875554_875581,(0),null);
var param_875583 = cljs.core.nth.call(null,vec__875554_875581,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_875583);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__875584 = cljs.core.next.call(null,seq__875549_875575__$1);
var G__875585 = null;
var G__875586 = (0);
var G__875587 = (0);
seq__875549_875563 = G__875584;
chunk__875550_875564 = G__875585;
count__875551_875565 = G__875586;
i__875552_875566 = G__875587;
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

var seq__875555_875588 = cljs.core.seq.call(null,params);
var chunk__875556_875589 = null;
var count__875557_875590 = (0);
var i__875558_875591 = (0);
while(true){
if((i__875558_875591 < count__875557_875590)){
var param_875592 = cljs.core._nth.call(null,chunk__875556_875589,i__875558_875591);
cljs.compiler.emit.call(null,param_875592);

if(cljs.core._EQ_.call(null,param_875592,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__875593 = seq__875555_875588;
var G__875594 = chunk__875556_875589;
var G__875595 = count__875557_875590;
var G__875596 = (i__875558_875591 + (1));
seq__875555_875588 = G__875593;
chunk__875556_875589 = G__875594;
count__875557_875590 = G__875595;
i__875558_875591 = G__875596;
continue;
} else {
var temp__4425__auto___875597 = cljs.core.seq.call(null,seq__875555_875588);
if(temp__4425__auto___875597){
var seq__875555_875598__$1 = temp__4425__auto___875597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875555_875598__$1)){
var c__25014__auto___875599 = cljs.core.chunk_first.call(null,seq__875555_875598__$1);
var G__875600 = cljs.core.chunk_rest.call(null,seq__875555_875598__$1);
var G__875601 = c__25014__auto___875599;
var G__875602 = cljs.core.count.call(null,c__25014__auto___875599);
var G__875603 = (0);
seq__875555_875588 = G__875600;
chunk__875556_875589 = G__875601;
count__875557_875590 = G__875602;
i__875558_875591 = G__875603;
continue;
} else {
var param_875604 = cljs.core.first.call(null,seq__875555_875598__$1);
cljs.compiler.emit.call(null,param_875604);

if(cljs.core._EQ_.call(null,param_875604,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__875605 = cljs.core.next.call(null,seq__875555_875598__$1);
var G__875606 = null;
var G__875607 = (0);
var G__875608 = (0);
seq__875555_875588 = G__875605;
chunk__875556_875589 = G__875606;
count__875557_875590 = G__875607;
i__875558_875591 = G__875608;
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

var seq__875559_875609 = cljs.core.seq.call(null,params);
var chunk__875560_875610 = null;
var count__875561_875611 = (0);
var i__875562_875612 = (0);
while(true){
if((i__875562_875612 < count__875561_875611)){
var param_875613 = cljs.core._nth.call(null,chunk__875560_875610,i__875562_875612);
cljs.compiler.emit.call(null,param_875613);

if(cljs.core._EQ_.call(null,param_875613,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__875614 = seq__875559_875609;
var G__875615 = chunk__875560_875610;
var G__875616 = count__875561_875611;
var G__875617 = (i__875562_875612 + (1));
seq__875559_875609 = G__875614;
chunk__875560_875610 = G__875615;
count__875561_875611 = G__875616;
i__875562_875612 = G__875617;
continue;
} else {
var temp__4425__auto___875618 = cljs.core.seq.call(null,seq__875559_875609);
if(temp__4425__auto___875618){
var seq__875559_875619__$1 = temp__4425__auto___875618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875559_875619__$1)){
var c__25014__auto___875620 = cljs.core.chunk_first.call(null,seq__875559_875619__$1);
var G__875621 = cljs.core.chunk_rest.call(null,seq__875559_875619__$1);
var G__875622 = c__25014__auto___875620;
var G__875623 = cljs.core.count.call(null,c__25014__auto___875620);
var G__875624 = (0);
seq__875559_875609 = G__875621;
chunk__875560_875610 = G__875622;
count__875561_875611 = G__875623;
i__875562_875612 = G__875624;
continue;
} else {
var param_875625 = cljs.core.first.call(null,seq__875559_875619__$1);
cljs.compiler.emit.call(null,param_875625);

if(cljs.core._EQ_.call(null,param_875625,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__875626 = cljs.core.next.call(null,seq__875559_875619__$1);
var G__875627 = null;
var G__875628 = (0);
var G__875629 = (0);
seq__875559_875609 = G__875626;
chunk__875560_875610 = G__875627;
count__875561_875611 = G__875628;
i__875562_875612 = G__875629;
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
var seq__875634 = cljs.core.seq.call(null,params);
var chunk__875635 = null;
var count__875636 = (0);
var i__875637 = (0);
while(true){
if((i__875637 < count__875636)){
var param = cljs.core._nth.call(null,chunk__875635,i__875637);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__875638 = seq__875634;
var G__875639 = chunk__875635;
var G__875640 = count__875636;
var G__875641 = (i__875637 + (1));
seq__875634 = G__875638;
chunk__875635 = G__875639;
count__875636 = G__875640;
i__875637 = G__875641;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__875634);
if(temp__4425__auto__){
var seq__875634__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875634__$1)){
var c__25014__auto__ = cljs.core.chunk_first.call(null,seq__875634__$1);
var G__875642 = cljs.core.chunk_rest.call(null,seq__875634__$1);
var G__875643 = c__25014__auto__;
var G__875644 = cljs.core.count.call(null,c__25014__auto__);
var G__875645 = (0);
seq__875634 = G__875642;
chunk__875635 = G__875643;
count__875636 = G__875644;
i__875637 = G__875645;
continue;
} else {
var param = cljs.core.first.call(null,seq__875634__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__875646 = cljs.core.next.call(null,seq__875634__$1);
var G__875647 = null;
var G__875648 = (0);
var G__875649 = (0);
seq__875634 = G__875646;
chunk__875635 = G__875647;
count__875636 = G__875648;
i__875637 = G__875649;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__875650){
var map__875653 = p__875650;
var map__875653__$1 = ((((!((map__875653 == null)))?((((map__875653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875653):map__875653);
var type = cljs.core.get.call(null,map__875653__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__875653__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__875653__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__875653__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__875653__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__875653__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__875653__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__875653__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__875655){
var map__875666 = p__875655;
var map__875666__$1 = ((((!((map__875666 == null)))?((((map__875666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875666):map__875666);
var f = map__875666__$1;
var type = cljs.core.get.call(null,map__875666__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__875666__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__875666__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__875666__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__875666__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__875666__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__875666__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__875666__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_875676__$1 = (function (){var or__24211__auto__ = name;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_875677 = cljs.compiler.munge.call(null,name_875676__$1);
var delegate_name_875678 = [cljs.core.str(mname_875677),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_875678," = function (");

var seq__875668_875679 = cljs.core.seq.call(null,params);
var chunk__875669_875680 = null;
var count__875670_875681 = (0);
var i__875671_875682 = (0);
while(true){
if((i__875671_875682 < count__875670_875681)){
var param_875683 = cljs.core._nth.call(null,chunk__875669_875680,i__875671_875682);
cljs.compiler.emit.call(null,param_875683);

if(cljs.core._EQ_.call(null,param_875683,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__875684 = seq__875668_875679;
var G__875685 = chunk__875669_875680;
var G__875686 = count__875670_875681;
var G__875687 = (i__875671_875682 + (1));
seq__875668_875679 = G__875684;
chunk__875669_875680 = G__875685;
count__875670_875681 = G__875686;
i__875671_875682 = G__875687;
continue;
} else {
var temp__4425__auto___875688 = cljs.core.seq.call(null,seq__875668_875679);
if(temp__4425__auto___875688){
var seq__875668_875689__$1 = temp__4425__auto___875688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875668_875689__$1)){
var c__25014__auto___875690 = cljs.core.chunk_first.call(null,seq__875668_875689__$1);
var G__875691 = cljs.core.chunk_rest.call(null,seq__875668_875689__$1);
var G__875692 = c__25014__auto___875690;
var G__875693 = cljs.core.count.call(null,c__25014__auto___875690);
var G__875694 = (0);
seq__875668_875679 = G__875691;
chunk__875669_875680 = G__875692;
count__875670_875681 = G__875693;
i__875671_875682 = G__875694;
continue;
} else {
var param_875695 = cljs.core.first.call(null,seq__875668_875689__$1);
cljs.compiler.emit.call(null,param_875695);

if(cljs.core._EQ_.call(null,param_875695,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__875696 = cljs.core.next.call(null,seq__875668_875689__$1);
var G__875697 = null;
var G__875698 = (0);
var G__875699 = (0);
seq__875668_875679 = G__875696;
chunk__875669_875680 = G__875697;
count__875670_875681 = G__875698;
i__875671_875682 = G__875699;
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

cljs.compiler.emitln.call(null,"var ",mname_875677," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_875700 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_875700,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_875678,".call(this,");

var seq__875672_875701 = cljs.core.seq.call(null,params);
var chunk__875673_875702 = null;
var count__875674_875703 = (0);
var i__875675_875704 = (0);
while(true){
if((i__875675_875704 < count__875674_875703)){
var param_875705 = cljs.core._nth.call(null,chunk__875673_875702,i__875675_875704);
cljs.compiler.emit.call(null,param_875705);

if(cljs.core._EQ_.call(null,param_875705,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__875706 = seq__875672_875701;
var G__875707 = chunk__875673_875702;
var G__875708 = count__875674_875703;
var G__875709 = (i__875675_875704 + (1));
seq__875672_875701 = G__875706;
chunk__875673_875702 = G__875707;
count__875674_875703 = G__875708;
i__875675_875704 = G__875709;
continue;
} else {
var temp__4425__auto___875710 = cljs.core.seq.call(null,seq__875672_875701);
if(temp__4425__auto___875710){
var seq__875672_875711__$1 = temp__4425__auto___875710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875672_875711__$1)){
var c__25014__auto___875712 = cljs.core.chunk_first.call(null,seq__875672_875711__$1);
var G__875713 = cljs.core.chunk_rest.call(null,seq__875672_875711__$1);
var G__875714 = c__25014__auto___875712;
var G__875715 = cljs.core.count.call(null,c__25014__auto___875712);
var G__875716 = (0);
seq__875672_875701 = G__875713;
chunk__875673_875702 = G__875714;
count__875674_875703 = G__875715;
i__875675_875704 = G__875716;
continue;
} else {
var param_875717 = cljs.core.first.call(null,seq__875672_875711__$1);
cljs.compiler.emit.call(null,param_875717);

if(cljs.core._EQ_.call(null,param_875717,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__875718 = cljs.core.next.call(null,seq__875672_875711__$1);
var G__875719 = null;
var G__875720 = (0);
var G__875721 = (0);
seq__875672_875701 = G__875718;
chunk__875673_875702 = G__875719;
count__875674_875703 = G__875720;
i__875675_875704 = G__875721;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_875677,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_875677,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_875676__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_875677,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_875678,";");

cljs.compiler.emitln.call(null,"return ",mname_875677,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__875725){
var map__875726 = p__875725;
var map__875726__$1 = ((((!((map__875726 == null)))?((((map__875726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875726):map__875726);
var name = cljs.core.get.call(null,map__875726__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__875726__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__875726__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__875726__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__875726__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__875726__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__875726__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__875726,map__875726__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__875722_SHARP_){
var and__24199__auto__ = p1__875722_SHARP_;
if(cljs.core.truth_(and__24199__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__875722_SHARP_));
} else {
return and__24199__auto__;
}
});})(map__875726,map__875726__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_875747__$1 = (function (){var or__24211__auto__ = name;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_875748 = cljs.compiler.munge.call(null,name_875747__$1);
var maxparams_875749 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_875750 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_875747__$1,mname_875748,maxparams_875749,loop_locals,map__875726,map__875726__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_875748),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_875747__$1,mname_875748,maxparams_875749,loop_locals,map__875726,map__875726__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_875751 = cljs.core.sort_by.call(null,((function (name_875747__$1,mname_875748,maxparams_875749,mmap_875750,loop_locals,map__875726,map__875726__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__875723_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__875723_SHARP_)));
});})(name_875747__$1,mname_875748,maxparams_875749,mmap_875750,loop_locals,map__875726,map__875726__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_875750));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_875748," = null;");

var seq__875728_875752 = cljs.core.seq.call(null,ms_875751);
var chunk__875729_875753 = null;
var count__875730_875754 = (0);
var i__875731_875755 = (0);
while(true){
if((i__875731_875755 < count__875730_875754)){
var vec__875732_875756 = cljs.core._nth.call(null,chunk__875729_875753,i__875731_875755);
var n_875757 = cljs.core.nth.call(null,vec__875732_875756,(0),null);
var meth_875758 = cljs.core.nth.call(null,vec__875732_875756,(1),null);
cljs.compiler.emits.call(null,"var ",n_875757," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_875758))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_875758);
} else {
cljs.compiler.emit_fn_method.call(null,meth_875758);
}

cljs.compiler.emitln.call(null,";");

var G__875759 = seq__875728_875752;
var G__875760 = chunk__875729_875753;
var G__875761 = count__875730_875754;
var G__875762 = (i__875731_875755 + (1));
seq__875728_875752 = G__875759;
chunk__875729_875753 = G__875760;
count__875730_875754 = G__875761;
i__875731_875755 = G__875762;
continue;
} else {
var temp__4425__auto___875763 = cljs.core.seq.call(null,seq__875728_875752);
if(temp__4425__auto___875763){
var seq__875728_875764__$1 = temp__4425__auto___875763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875728_875764__$1)){
var c__25014__auto___875765 = cljs.core.chunk_first.call(null,seq__875728_875764__$1);
var G__875766 = cljs.core.chunk_rest.call(null,seq__875728_875764__$1);
var G__875767 = c__25014__auto___875765;
var G__875768 = cljs.core.count.call(null,c__25014__auto___875765);
var G__875769 = (0);
seq__875728_875752 = G__875766;
chunk__875729_875753 = G__875767;
count__875730_875754 = G__875768;
i__875731_875755 = G__875769;
continue;
} else {
var vec__875733_875770 = cljs.core.first.call(null,seq__875728_875764__$1);
var n_875771 = cljs.core.nth.call(null,vec__875733_875770,(0),null);
var meth_875772 = cljs.core.nth.call(null,vec__875733_875770,(1),null);
cljs.compiler.emits.call(null,"var ",n_875771," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_875772))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_875772);
} else {
cljs.compiler.emit_fn_method.call(null,meth_875772);
}

cljs.compiler.emitln.call(null,";");

var G__875773 = cljs.core.next.call(null,seq__875728_875764__$1);
var G__875774 = null;
var G__875775 = (0);
var G__875776 = (0);
seq__875728_875752 = G__875773;
chunk__875729_875753 = G__875774;
count__875730_875754 = G__875775;
i__875731_875755 = G__875776;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_875748," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_875749),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_875749)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_875749));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__875734_875777 = cljs.core.seq.call(null,ms_875751);
var chunk__875735_875778 = null;
var count__875736_875779 = (0);
var i__875737_875780 = (0);
while(true){
if((i__875737_875780 < count__875736_875779)){
var vec__875738_875781 = cljs.core._nth.call(null,chunk__875735_875778,i__875737_875780);
var n_875782 = cljs.core.nth.call(null,vec__875738_875781,(0),null);
var meth_875783 = cljs.core.nth.call(null,vec__875738_875781,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_875783))){
cljs.compiler.emitln.call(null,"default:");

var restarg_875784 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_875784," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_875785 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_875784," = new cljs.core.IndexedSeq(",a_875785,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_875782,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_875749)),(((cljs.core.count.call(null,maxparams_875749) > (1)))?", ":null),restarg_875784,");");
} else {
var pcnt_875786 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_875783));
cljs.compiler.emitln.call(null,"case ",pcnt_875786,":");

cljs.compiler.emitln.call(null,"return ",n_875782,".call(this",(((pcnt_875786 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_875786,maxparams_875749))),",")),");");
}

var G__875787 = seq__875734_875777;
var G__875788 = chunk__875735_875778;
var G__875789 = count__875736_875779;
var G__875790 = (i__875737_875780 + (1));
seq__875734_875777 = G__875787;
chunk__875735_875778 = G__875788;
count__875736_875779 = G__875789;
i__875737_875780 = G__875790;
continue;
} else {
var temp__4425__auto___875791 = cljs.core.seq.call(null,seq__875734_875777);
if(temp__4425__auto___875791){
var seq__875734_875792__$1 = temp__4425__auto___875791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875734_875792__$1)){
var c__25014__auto___875793 = cljs.core.chunk_first.call(null,seq__875734_875792__$1);
var G__875794 = cljs.core.chunk_rest.call(null,seq__875734_875792__$1);
var G__875795 = c__25014__auto___875793;
var G__875796 = cljs.core.count.call(null,c__25014__auto___875793);
var G__875797 = (0);
seq__875734_875777 = G__875794;
chunk__875735_875778 = G__875795;
count__875736_875779 = G__875796;
i__875737_875780 = G__875797;
continue;
} else {
var vec__875739_875798 = cljs.core.first.call(null,seq__875734_875792__$1);
var n_875799 = cljs.core.nth.call(null,vec__875739_875798,(0),null);
var meth_875800 = cljs.core.nth.call(null,vec__875739_875798,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_875800))){
cljs.compiler.emitln.call(null,"default:");

var restarg_875801 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_875801," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_875802 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_875801," = new cljs.core.IndexedSeq(",a_875802,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_875799,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_875749)),(((cljs.core.count.call(null,maxparams_875749) > (1)))?", ":null),restarg_875801,");");
} else {
var pcnt_875803 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_875800));
cljs.compiler.emitln.call(null,"case ",pcnt_875803,":");

cljs.compiler.emitln.call(null,"return ",n_875799,".call(this",(((pcnt_875803 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_875803,maxparams_875749))),",")),");");
}

var G__875804 = cljs.core.next.call(null,seq__875734_875792__$1);
var G__875805 = null;
var G__875806 = (0);
var G__875807 = (0);
seq__875734_875777 = G__875804;
chunk__875735_875778 = G__875805;
count__875736_875779 = G__875806;
i__875737_875780 = G__875807;
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
cljs.compiler.emitln.call(null,mname_875748,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_875748,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_875747__$1,mname_875748,maxparams_875749,mmap_875750,ms_875751,loop_locals,map__875726,map__875726__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__875724_SHARP_){
var vec__875740 = p1__875724_SHARP_;
var n = cljs.core.nth.call(null,vec__875740,(0),null);
var m = cljs.core.nth.call(null,vec__875740,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_875747__$1,mname_875748,maxparams_875749,mmap_875750,ms_875751,loop_locals,map__875726,map__875726__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_875751),".cljs$lang$applyTo;");
} else {
}

var seq__875741_875808 = cljs.core.seq.call(null,ms_875751);
var chunk__875742_875809 = null;
var count__875743_875810 = (0);
var i__875744_875811 = (0);
while(true){
if((i__875744_875811 < count__875743_875810)){
var vec__875745_875812 = cljs.core._nth.call(null,chunk__875742_875809,i__875744_875811);
var n_875813 = cljs.core.nth.call(null,vec__875745_875812,(0),null);
var meth_875814 = cljs.core.nth.call(null,vec__875745_875812,(1),null);
var c_875815 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_875814));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_875814))){
cljs.compiler.emitln.call(null,mname_875748,".cljs$core$IFn$_invoke$arity$variadic = ",n_875813,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_875748,".cljs$core$IFn$_invoke$arity$",c_875815," = ",n_875813,";");
}

var G__875816 = seq__875741_875808;
var G__875817 = chunk__875742_875809;
var G__875818 = count__875743_875810;
var G__875819 = (i__875744_875811 + (1));
seq__875741_875808 = G__875816;
chunk__875742_875809 = G__875817;
count__875743_875810 = G__875818;
i__875744_875811 = G__875819;
continue;
} else {
var temp__4425__auto___875820 = cljs.core.seq.call(null,seq__875741_875808);
if(temp__4425__auto___875820){
var seq__875741_875821__$1 = temp__4425__auto___875820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875741_875821__$1)){
var c__25014__auto___875822 = cljs.core.chunk_first.call(null,seq__875741_875821__$1);
var G__875823 = cljs.core.chunk_rest.call(null,seq__875741_875821__$1);
var G__875824 = c__25014__auto___875822;
var G__875825 = cljs.core.count.call(null,c__25014__auto___875822);
var G__875826 = (0);
seq__875741_875808 = G__875823;
chunk__875742_875809 = G__875824;
count__875743_875810 = G__875825;
i__875744_875811 = G__875826;
continue;
} else {
var vec__875746_875827 = cljs.core.first.call(null,seq__875741_875821__$1);
var n_875828 = cljs.core.nth.call(null,vec__875746_875827,(0),null);
var meth_875829 = cljs.core.nth.call(null,vec__875746_875827,(1),null);
var c_875830 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_875829));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_875829))){
cljs.compiler.emitln.call(null,mname_875748,".cljs$core$IFn$_invoke$arity$variadic = ",n_875828,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_875748,".cljs$core$IFn$_invoke$arity$",c_875830," = ",n_875828,";");
}

var G__875831 = cljs.core.next.call(null,seq__875741_875821__$1);
var G__875832 = null;
var G__875833 = (0);
var G__875834 = (0);
seq__875741_875808 = G__875831;
chunk__875742_875809 = G__875832;
count__875743_875810 = G__875833;
i__875744_875811 = G__875834;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_875748,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__875835){
var map__875836 = p__875835;
var map__875836__$1 = ((((!((map__875836 == null)))?((((map__875836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875836):map__875836);
var statements = cljs.core.get.call(null,map__875836__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__875836__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__875836__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__24199__auto__ = statements;
if(cljs.core.truth_(and__24199__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__24199__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__875838_875842 = cljs.core.seq.call(null,statements);
var chunk__875839_875843 = null;
var count__875840_875844 = (0);
var i__875841_875845 = (0);
while(true){
if((i__875841_875845 < count__875840_875844)){
var s_875846 = cljs.core._nth.call(null,chunk__875839_875843,i__875841_875845);
cljs.compiler.emitln.call(null,s_875846);

var G__875847 = seq__875838_875842;
var G__875848 = chunk__875839_875843;
var G__875849 = count__875840_875844;
var G__875850 = (i__875841_875845 + (1));
seq__875838_875842 = G__875847;
chunk__875839_875843 = G__875848;
count__875840_875844 = G__875849;
i__875841_875845 = G__875850;
continue;
} else {
var temp__4425__auto___875851 = cljs.core.seq.call(null,seq__875838_875842);
if(temp__4425__auto___875851){
var seq__875838_875852__$1 = temp__4425__auto___875851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875838_875852__$1)){
var c__25014__auto___875853 = cljs.core.chunk_first.call(null,seq__875838_875852__$1);
var G__875854 = cljs.core.chunk_rest.call(null,seq__875838_875852__$1);
var G__875855 = c__25014__auto___875853;
var G__875856 = cljs.core.count.call(null,c__25014__auto___875853);
var G__875857 = (0);
seq__875838_875842 = G__875854;
chunk__875839_875843 = G__875855;
count__875840_875844 = G__875856;
i__875841_875845 = G__875857;
continue;
} else {
var s_875858 = cljs.core.first.call(null,seq__875838_875852__$1);
cljs.compiler.emitln.call(null,s_875858);

var G__875859 = cljs.core.next.call(null,seq__875838_875852__$1);
var G__875860 = null;
var G__875861 = (0);
var G__875862 = (0);
seq__875838_875842 = G__875859;
chunk__875839_875843 = G__875860;
count__875840_875844 = G__875861;
i__875841_875845 = G__875862;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__24199__auto__ = statements;
if(cljs.core.truth_(and__24199__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__24199__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__875863){
var map__875864 = p__875863;
var map__875864__$1 = ((((!((map__875864 == null)))?((((map__875864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875864):map__875864);
var env = cljs.core.get.call(null,map__875864__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__875864__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__875864__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__875864__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__875864__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__24211__auto__ = name;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__875866,is_loop){
var map__875878 = p__875866;
var map__875878__$1 = ((((!((map__875878 == null)))?((((map__875878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875878):map__875878);
var bindings = cljs.core.get.call(null,map__875878__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__875878__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__875878__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_875880_875889 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_875880_875889,context,map__875878,map__875878__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_875880_875889,context,map__875878,map__875878__$1,bindings,expr,env))
,bindings):null));

try{var seq__875881_875890 = cljs.core.seq.call(null,bindings);
var chunk__875882_875891 = null;
var count__875883_875892 = (0);
var i__875884_875893 = (0);
while(true){
if((i__875884_875893 < count__875883_875892)){
var map__875885_875894 = cljs.core._nth.call(null,chunk__875882_875891,i__875884_875893);
var map__875885_875895__$1 = ((((!((map__875885_875894 == null)))?((((map__875885_875894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875885_875894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875885_875894):map__875885_875894);
var binding_875896 = map__875885_875895__$1;
var init_875897 = cljs.core.get.call(null,map__875885_875895__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_875896);

cljs.compiler.emitln.call(null," = ",init_875897,";");

var G__875898 = seq__875881_875890;
var G__875899 = chunk__875882_875891;
var G__875900 = count__875883_875892;
var G__875901 = (i__875884_875893 + (1));
seq__875881_875890 = G__875898;
chunk__875882_875891 = G__875899;
count__875883_875892 = G__875900;
i__875884_875893 = G__875901;
continue;
} else {
var temp__4425__auto___875902 = cljs.core.seq.call(null,seq__875881_875890);
if(temp__4425__auto___875902){
var seq__875881_875903__$1 = temp__4425__auto___875902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875881_875903__$1)){
var c__25014__auto___875904 = cljs.core.chunk_first.call(null,seq__875881_875903__$1);
var G__875905 = cljs.core.chunk_rest.call(null,seq__875881_875903__$1);
var G__875906 = c__25014__auto___875904;
var G__875907 = cljs.core.count.call(null,c__25014__auto___875904);
var G__875908 = (0);
seq__875881_875890 = G__875905;
chunk__875882_875891 = G__875906;
count__875883_875892 = G__875907;
i__875884_875893 = G__875908;
continue;
} else {
var map__875887_875909 = cljs.core.first.call(null,seq__875881_875903__$1);
var map__875887_875910__$1 = ((((!((map__875887_875909 == null)))?((((map__875887_875909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875887_875909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875887_875909):map__875887_875909);
var binding_875911 = map__875887_875910__$1;
var init_875912 = cljs.core.get.call(null,map__875887_875910__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_875911);

cljs.compiler.emitln.call(null," = ",init_875912,";");

var G__875913 = cljs.core.next.call(null,seq__875881_875903__$1);
var G__875914 = null;
var G__875915 = (0);
var G__875916 = (0);
seq__875881_875890 = G__875913;
chunk__875882_875891 = G__875914;
count__875883_875892 = G__875915;
i__875884_875893 = G__875916;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_875880_875889;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__875917){
var map__875918 = p__875917;
var map__875918__$1 = ((((!((map__875918 == null)))?((((map__875918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875918):map__875918);
var frame = cljs.core.get.call(null,map__875918__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__875918__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__875918__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__25114__auto___875920 = cljs.core.count.call(null,exprs);
var i_875921 = (0);
while(true){
if((i_875921 < n__25114__auto___875920)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_875921)," = ",exprs.call(null,i_875921),";");

var G__875922 = (i_875921 + (1));
i_875921 = G__875922;
continue;
} else {
}
break;
}

var n__25114__auto___875923 = cljs.core.count.call(null,exprs);
var i_875924 = (0);
while(true){
if((i_875924 < n__25114__auto___875923)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_875924))," = ",temps.call(null,i_875924),";");

var G__875925 = (i_875924 + (1));
i_875924 = G__875925;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__875926){
var map__875927 = p__875926;
var map__875927__$1 = ((((!((map__875927 == null)))?((((map__875927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875927):map__875927);
var bindings = cljs.core.get.call(null,map__875927__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__875927__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__875927__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__875929_875937 = cljs.core.seq.call(null,bindings);
var chunk__875930_875938 = null;
var count__875931_875939 = (0);
var i__875932_875940 = (0);
while(true){
if((i__875932_875940 < count__875931_875939)){
var map__875933_875941 = cljs.core._nth.call(null,chunk__875930_875938,i__875932_875940);
var map__875933_875942__$1 = ((((!((map__875933_875941 == null)))?((((map__875933_875941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875933_875941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875933_875941):map__875933_875941);
var binding_875943 = map__875933_875942__$1;
var init_875944 = cljs.core.get.call(null,map__875933_875942__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_875943)," = ",init_875944,";");

var G__875945 = seq__875929_875937;
var G__875946 = chunk__875930_875938;
var G__875947 = count__875931_875939;
var G__875948 = (i__875932_875940 + (1));
seq__875929_875937 = G__875945;
chunk__875930_875938 = G__875946;
count__875931_875939 = G__875947;
i__875932_875940 = G__875948;
continue;
} else {
var temp__4425__auto___875949 = cljs.core.seq.call(null,seq__875929_875937);
if(temp__4425__auto___875949){
var seq__875929_875950__$1 = temp__4425__auto___875949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875929_875950__$1)){
var c__25014__auto___875951 = cljs.core.chunk_first.call(null,seq__875929_875950__$1);
var G__875952 = cljs.core.chunk_rest.call(null,seq__875929_875950__$1);
var G__875953 = c__25014__auto___875951;
var G__875954 = cljs.core.count.call(null,c__25014__auto___875951);
var G__875955 = (0);
seq__875929_875937 = G__875952;
chunk__875930_875938 = G__875953;
count__875931_875939 = G__875954;
i__875932_875940 = G__875955;
continue;
} else {
var map__875935_875956 = cljs.core.first.call(null,seq__875929_875950__$1);
var map__875935_875957__$1 = ((((!((map__875935_875956 == null)))?((((map__875935_875956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875935_875956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875935_875956):map__875935_875956);
var binding_875958 = map__875935_875957__$1;
var init_875959 = cljs.core.get.call(null,map__875935_875957__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_875958)," = ",init_875959,";");

var G__875960 = cljs.core.next.call(null,seq__875929_875950__$1);
var G__875961 = null;
var G__875962 = (0);
var G__875963 = (0);
seq__875929_875937 = G__875960;
chunk__875930_875938 = G__875961;
count__875931_875939 = G__875962;
i__875932_875940 = G__875963;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__875966){
var map__875967 = p__875966;
var map__875967__$1 = ((((!((map__875967 == null)))?((((map__875967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875967):map__875967);
var expr = map__875967__$1;
var f = cljs.core.get.call(null,map__875967__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__875967__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__875967__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__24199__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__24199__auto__)){
var and__24199__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__24199__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__24199__auto____$1;
}
} else {
return and__24199__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__24199__auto__ = protocol;
if(cljs.core.truth_(and__24199__auto__)){
var and__24199__auto____$1 = tag;
if(cljs.core.truth_(and__24199__auto____$1)){
var or__24211__auto__ = (function (){var and__24199__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__24199__auto____$2)){
var and__24199__auto____$3 = protocol;
if(cljs.core.truth_(and__24199__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__24199__auto____$3;
}
} else {
return and__24199__auto____$2;
}
})();
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
var and__24199__auto____$2 = (function (){var or__24211__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__24211__auto____$1)){
return or__24211__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__24199__auto____$2)){
var or__24211__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__24211__auto____$1){
return or__24211__auto____$1;
} else {
var and__24199__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__24199__auto____$3){
var and__24199__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__24199__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__24199__auto____$4;
}
} else {
return and__24199__auto____$3;
}
}
} else {
return and__24199__auto____$2;
}
}
} else {
return and__24199__auto____$1;
}
} else {
return and__24199__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__24211__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__24211__auto__){
return or__24211__auto__;
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
var vec__875969 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__24199__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__24199__auto__)){
return (arity > mfa);
} else {
return and__24199__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__875967,map__875967__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__875967,map__875967__$1,expr,f,args,env){
return (function (p1__875964_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__875964_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__875967,map__875967__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__875967,map__875967__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__875967,map__875967__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__875967,map__875967__$1,expr,f,args,env){
return (function (p1__875965_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__875965_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__875967,map__875967__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__875967,map__875967__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__875969,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__875969,(1),null);
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_875970 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_875970,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_875971 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_875971,args)),(((mfa_875971 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_875971,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__24211__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
var or__24211__auto____$1 = js_QMARK_;
if(or__24211__auto____$1){
return or__24211__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__24199__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__24199__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__24199__auto__;
}
})())){
var fprop_875972 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_875972," ? ",f__$1,fprop_875972,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__875973){
var map__875974 = p__875973;
var map__875974__$1 = ((((!((map__875974 == null)))?((((map__875974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875974):map__875974);
var ctor = cljs.core.get.call(null,map__875974__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__875974__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__875974__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__875976){
var map__875977 = p__875976;
var map__875977__$1 = ((((!((map__875977 == null)))?((((map__875977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__875977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__875977):map__875977);
var target = cljs.core.get.call(null,map__875977__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__875977__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__875977__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
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

var seq__875983_875987 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__875984_875988 = null;
var count__875985_875989 = (0);
var i__875986_875990 = (0);
while(true){
if((i__875986_875990 < count__875985_875989)){
var lib_875991 = cljs.core._nth.call(null,chunk__875984_875988,i__875986_875990);
if(cljs.core.truth_((function (){var or__24211__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_875991),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_875991),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24211__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_875991),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_875991),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_875991),"');");

}
}

var G__875992 = seq__875983_875987;
var G__875993 = chunk__875984_875988;
var G__875994 = count__875985_875989;
var G__875995 = (i__875986_875990 + (1));
seq__875983_875987 = G__875992;
chunk__875984_875988 = G__875993;
count__875985_875989 = G__875994;
i__875986_875990 = G__875995;
continue;
} else {
var temp__4425__auto___875996 = cljs.core.seq.call(null,seq__875983_875987);
if(temp__4425__auto___875996){
var seq__875983_875997__$1 = temp__4425__auto___875996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__875983_875997__$1)){
var c__25014__auto___875998 = cljs.core.chunk_first.call(null,seq__875983_875997__$1);
var G__875999 = cljs.core.chunk_rest.call(null,seq__875983_875997__$1);
var G__876000 = c__25014__auto___875998;
var G__876001 = cljs.core.count.call(null,c__25014__auto___875998);
var G__876002 = (0);
seq__875983_875987 = G__875999;
chunk__875984_875988 = G__876000;
count__875985_875989 = G__876001;
i__875986_875990 = G__876002;
continue;
} else {
var lib_876003 = cljs.core.first.call(null,seq__875983_875997__$1);
if(cljs.core.truth_((function (){var or__24211__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_876003),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_876003),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24211__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_876003),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_876003),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_876003),"');");

}
}

var G__876004 = cljs.core.next.call(null,seq__875983_875997__$1);
var G__876005 = null;
var G__876006 = (0);
var G__876007 = (0);
seq__875983_875987 = G__876004;
chunk__875984_875988 = G__876005;
count__875985_875989 = G__876006;
i__875986_875990 = G__876007;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__876008){
var map__876009 = p__876008;
var map__876009__$1 = ((((!((map__876009 == null)))?((((map__876009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__876009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__876009):map__876009);
var name = cljs.core.get.call(null,map__876009__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__876009__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__876009__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__876009__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__876009__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__876009__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__876011){
var map__876012 = p__876011;
var map__876012__$1 = ((((!((map__876012 == null)))?((((map__876012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__876012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__876012):map__876012);
var t = cljs.core.get.call(null,map__876012__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__876012__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__876012__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__876012__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__876012__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__876014_876028 = cljs.core.seq.call(null,protocols);
var chunk__876015_876029 = null;
var count__876016_876030 = (0);
var i__876017_876031 = (0);
while(true){
if((i__876017_876031 < count__876016_876030)){
var protocol_876032 = cljs.core._nth.call(null,chunk__876015_876029,i__876017_876031);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_876032)].join('')),"}");

var G__876033 = seq__876014_876028;
var G__876034 = chunk__876015_876029;
var G__876035 = count__876016_876030;
var G__876036 = (i__876017_876031 + (1));
seq__876014_876028 = G__876033;
chunk__876015_876029 = G__876034;
count__876016_876030 = G__876035;
i__876017_876031 = G__876036;
continue;
} else {
var temp__4425__auto___876037 = cljs.core.seq.call(null,seq__876014_876028);
if(temp__4425__auto___876037){
var seq__876014_876038__$1 = temp__4425__auto___876037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__876014_876038__$1)){
var c__25014__auto___876039 = cljs.core.chunk_first.call(null,seq__876014_876038__$1);
var G__876040 = cljs.core.chunk_rest.call(null,seq__876014_876038__$1);
var G__876041 = c__25014__auto___876039;
var G__876042 = cljs.core.count.call(null,c__25014__auto___876039);
var G__876043 = (0);
seq__876014_876028 = G__876040;
chunk__876015_876029 = G__876041;
count__876016_876030 = G__876042;
i__876017_876031 = G__876043;
continue;
} else {
var protocol_876044 = cljs.core.first.call(null,seq__876014_876038__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_876044)].join('')),"}");

var G__876045 = cljs.core.next.call(null,seq__876014_876038__$1);
var G__876046 = null;
var G__876047 = (0);
var G__876048 = (0);
seq__876014_876028 = G__876045;
chunk__876015_876029 = G__876046;
count__876016_876030 = G__876047;
i__876017_876031 = G__876048;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__876018_876049 = cljs.core.seq.call(null,fields__$1);
var chunk__876019_876050 = null;
var count__876020_876051 = (0);
var i__876021_876052 = (0);
while(true){
if((i__876021_876052 < count__876020_876051)){
var fld_876053 = cljs.core._nth.call(null,chunk__876019_876050,i__876021_876052);
cljs.compiler.emitln.call(null,"this.",fld_876053," = ",fld_876053,";");

var G__876054 = seq__876018_876049;
var G__876055 = chunk__876019_876050;
var G__876056 = count__876020_876051;
var G__876057 = (i__876021_876052 + (1));
seq__876018_876049 = G__876054;
chunk__876019_876050 = G__876055;
count__876020_876051 = G__876056;
i__876021_876052 = G__876057;
continue;
} else {
var temp__4425__auto___876058 = cljs.core.seq.call(null,seq__876018_876049);
if(temp__4425__auto___876058){
var seq__876018_876059__$1 = temp__4425__auto___876058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__876018_876059__$1)){
var c__25014__auto___876060 = cljs.core.chunk_first.call(null,seq__876018_876059__$1);
var G__876061 = cljs.core.chunk_rest.call(null,seq__876018_876059__$1);
var G__876062 = c__25014__auto___876060;
var G__876063 = cljs.core.count.call(null,c__25014__auto___876060);
var G__876064 = (0);
seq__876018_876049 = G__876061;
chunk__876019_876050 = G__876062;
count__876020_876051 = G__876063;
i__876021_876052 = G__876064;
continue;
} else {
var fld_876065 = cljs.core.first.call(null,seq__876018_876059__$1);
cljs.compiler.emitln.call(null,"this.",fld_876065," = ",fld_876065,";");

var G__876066 = cljs.core.next.call(null,seq__876018_876059__$1);
var G__876067 = null;
var G__876068 = (0);
var G__876069 = (0);
seq__876018_876049 = G__876066;
chunk__876019_876050 = G__876067;
count__876020_876051 = G__876068;
i__876021_876052 = G__876069;
continue;
}
} else {
}
}
break;
}

var seq__876022_876070 = cljs.core.seq.call(null,pmasks);
var chunk__876023_876071 = null;
var count__876024_876072 = (0);
var i__876025_876073 = (0);
while(true){
if((i__876025_876073 < count__876024_876072)){
var vec__876026_876074 = cljs.core._nth.call(null,chunk__876023_876071,i__876025_876073);
var pno_876075 = cljs.core.nth.call(null,vec__876026_876074,(0),null);
var pmask_876076 = cljs.core.nth.call(null,vec__876026_876074,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_876075,"$ = ",pmask_876076,";");

var G__876077 = seq__876022_876070;
var G__876078 = chunk__876023_876071;
var G__876079 = count__876024_876072;
var G__876080 = (i__876025_876073 + (1));
seq__876022_876070 = G__876077;
chunk__876023_876071 = G__876078;
count__876024_876072 = G__876079;
i__876025_876073 = G__876080;
continue;
} else {
var temp__4425__auto___876081 = cljs.core.seq.call(null,seq__876022_876070);
if(temp__4425__auto___876081){
var seq__876022_876082__$1 = temp__4425__auto___876081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__876022_876082__$1)){
var c__25014__auto___876083 = cljs.core.chunk_first.call(null,seq__876022_876082__$1);
var G__876084 = cljs.core.chunk_rest.call(null,seq__876022_876082__$1);
var G__876085 = c__25014__auto___876083;
var G__876086 = cljs.core.count.call(null,c__25014__auto___876083);
var G__876087 = (0);
seq__876022_876070 = G__876084;
chunk__876023_876071 = G__876085;
count__876024_876072 = G__876086;
i__876025_876073 = G__876087;
continue;
} else {
var vec__876027_876088 = cljs.core.first.call(null,seq__876022_876082__$1);
var pno_876089 = cljs.core.nth.call(null,vec__876027_876088,(0),null);
var pmask_876090 = cljs.core.nth.call(null,vec__876027_876088,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_876089,"$ = ",pmask_876090,";");

var G__876091 = cljs.core.next.call(null,seq__876022_876082__$1);
var G__876092 = null;
var G__876093 = (0);
var G__876094 = (0);
seq__876022_876070 = G__876091;
chunk__876023_876071 = G__876092;
count__876024_876072 = G__876093;
i__876025_876073 = G__876094;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__876095){
var map__876096 = p__876095;
var map__876096__$1 = ((((!((map__876096 == null)))?((((map__876096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__876096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__876096):map__876096);
var t = cljs.core.get.call(null,map__876096__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__876096__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__876096__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__876096__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__876096__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__876098_876112 = cljs.core.seq.call(null,protocols);
var chunk__876099_876113 = null;
var count__876100_876114 = (0);
var i__876101_876115 = (0);
while(true){
if((i__876101_876115 < count__876100_876114)){
var protocol_876116 = cljs.core._nth.call(null,chunk__876099_876113,i__876101_876115);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_876116)].join('')),"}");

var G__876117 = seq__876098_876112;
var G__876118 = chunk__876099_876113;
var G__876119 = count__876100_876114;
var G__876120 = (i__876101_876115 + (1));
seq__876098_876112 = G__876117;
chunk__876099_876113 = G__876118;
count__876100_876114 = G__876119;
i__876101_876115 = G__876120;
continue;
} else {
var temp__4425__auto___876121 = cljs.core.seq.call(null,seq__876098_876112);
if(temp__4425__auto___876121){
var seq__876098_876122__$1 = temp__4425__auto___876121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__876098_876122__$1)){
var c__25014__auto___876123 = cljs.core.chunk_first.call(null,seq__876098_876122__$1);
var G__876124 = cljs.core.chunk_rest.call(null,seq__876098_876122__$1);
var G__876125 = c__25014__auto___876123;
var G__876126 = cljs.core.count.call(null,c__25014__auto___876123);
var G__876127 = (0);
seq__876098_876112 = G__876124;
chunk__876099_876113 = G__876125;
count__876100_876114 = G__876126;
i__876101_876115 = G__876127;
continue;
} else {
var protocol_876128 = cljs.core.first.call(null,seq__876098_876122__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_876128)].join('')),"}");

var G__876129 = cljs.core.next.call(null,seq__876098_876122__$1);
var G__876130 = null;
var G__876131 = (0);
var G__876132 = (0);
seq__876098_876112 = G__876129;
chunk__876099_876113 = G__876130;
count__876100_876114 = G__876131;
i__876101_876115 = G__876132;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__876102_876133 = cljs.core.seq.call(null,fields__$1);
var chunk__876103_876134 = null;
var count__876104_876135 = (0);
var i__876105_876136 = (0);
while(true){
if((i__876105_876136 < count__876104_876135)){
var fld_876137 = cljs.core._nth.call(null,chunk__876103_876134,i__876105_876136);
cljs.compiler.emitln.call(null,"this.",fld_876137," = ",fld_876137,";");

var G__876138 = seq__876102_876133;
var G__876139 = chunk__876103_876134;
var G__876140 = count__876104_876135;
var G__876141 = (i__876105_876136 + (1));
seq__876102_876133 = G__876138;
chunk__876103_876134 = G__876139;
count__876104_876135 = G__876140;
i__876105_876136 = G__876141;
continue;
} else {
var temp__4425__auto___876142 = cljs.core.seq.call(null,seq__876102_876133);
if(temp__4425__auto___876142){
var seq__876102_876143__$1 = temp__4425__auto___876142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__876102_876143__$1)){
var c__25014__auto___876144 = cljs.core.chunk_first.call(null,seq__876102_876143__$1);
var G__876145 = cljs.core.chunk_rest.call(null,seq__876102_876143__$1);
var G__876146 = c__25014__auto___876144;
var G__876147 = cljs.core.count.call(null,c__25014__auto___876144);
var G__876148 = (0);
seq__876102_876133 = G__876145;
chunk__876103_876134 = G__876146;
count__876104_876135 = G__876147;
i__876105_876136 = G__876148;
continue;
} else {
var fld_876149 = cljs.core.first.call(null,seq__876102_876143__$1);
cljs.compiler.emitln.call(null,"this.",fld_876149," = ",fld_876149,";");

var G__876150 = cljs.core.next.call(null,seq__876102_876143__$1);
var G__876151 = null;
var G__876152 = (0);
var G__876153 = (0);
seq__876102_876133 = G__876150;
chunk__876103_876134 = G__876151;
count__876104_876135 = G__876152;
i__876105_876136 = G__876153;
continue;
}
} else {
}
}
break;
}

var seq__876106_876154 = cljs.core.seq.call(null,pmasks);
var chunk__876107_876155 = null;
var count__876108_876156 = (0);
var i__876109_876157 = (0);
while(true){
if((i__876109_876157 < count__876108_876156)){
var vec__876110_876158 = cljs.core._nth.call(null,chunk__876107_876155,i__876109_876157);
var pno_876159 = cljs.core.nth.call(null,vec__876110_876158,(0),null);
var pmask_876160 = cljs.core.nth.call(null,vec__876110_876158,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_876159,"$ = ",pmask_876160,";");

var G__876161 = seq__876106_876154;
var G__876162 = chunk__876107_876155;
var G__876163 = count__876108_876156;
var G__876164 = (i__876109_876157 + (1));
seq__876106_876154 = G__876161;
chunk__876107_876155 = G__876162;
count__876108_876156 = G__876163;
i__876109_876157 = G__876164;
continue;
} else {
var temp__4425__auto___876165 = cljs.core.seq.call(null,seq__876106_876154);
if(temp__4425__auto___876165){
var seq__876106_876166__$1 = temp__4425__auto___876165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__876106_876166__$1)){
var c__25014__auto___876167 = cljs.core.chunk_first.call(null,seq__876106_876166__$1);
var G__876168 = cljs.core.chunk_rest.call(null,seq__876106_876166__$1);
var G__876169 = c__25014__auto___876167;
var G__876170 = cljs.core.count.call(null,c__25014__auto___876167);
var G__876171 = (0);
seq__876106_876154 = G__876168;
chunk__876107_876155 = G__876169;
count__876108_876156 = G__876170;
i__876109_876157 = G__876171;
continue;
} else {
var vec__876111_876172 = cljs.core.first.call(null,seq__876106_876166__$1);
var pno_876173 = cljs.core.nth.call(null,vec__876111_876172,(0),null);
var pmask_876174 = cljs.core.nth.call(null,vec__876111_876172,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_876173,"$ = ",pmask_876174,";");

var G__876175 = cljs.core.next.call(null,seq__876106_876166__$1);
var G__876176 = null;
var G__876177 = (0);
var G__876178 = (0);
seq__876106_876154 = G__876175;
chunk__876107_876155 = G__876176;
count__876108_876156 = G__876177;
i__876109_876157 = G__876178;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__876179){
var map__876180 = p__876179;
var map__876180__$1 = ((((!((map__876180 == null)))?((((map__876180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__876180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__876180):map__876180);
var target = cljs.core.get.call(null,map__876180__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__876180__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__876180__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__876180__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__876180__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__876182){
var map__876183 = p__876182;
var map__876183__$1 = ((((!((map__876183 == null)))?((((map__876183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__876183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__876183):map__876183);
var op = cljs.core.get.call(null,map__876183__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__876183__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__876183__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__876183__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__876183__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__24199__auto__ = code;
if(cljs.core.truth_(and__24199__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__24199__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
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
var seq__876193 = cljs.core.seq.call(null,table);
var chunk__876194 = null;
var count__876195 = (0);
var i__876196 = (0);
while(true){
if((i__876196 < count__876195)){
var vec__876197 = cljs.core._nth.call(null,chunk__876194,i__876196);
var sym = cljs.core.nth.call(null,vec__876197,(0),null);
var value = cljs.core.nth.call(null,vec__876197,(1),null);
var ns_876199 = cljs.core.namespace.call(null,sym);
var name_876200 = cljs.core.name.call(null,sym);
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

var G__876201 = seq__876193;
var G__876202 = chunk__876194;
var G__876203 = count__876195;
var G__876204 = (i__876196 + (1));
seq__876193 = G__876201;
chunk__876194 = G__876202;
count__876195 = G__876203;
i__876196 = G__876204;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__876193);
if(temp__4425__auto__){
var seq__876193__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__876193__$1)){
var c__25014__auto__ = cljs.core.chunk_first.call(null,seq__876193__$1);
var G__876205 = cljs.core.chunk_rest.call(null,seq__876193__$1);
var G__876206 = c__25014__auto__;
var G__876207 = cljs.core.count.call(null,c__25014__auto__);
var G__876208 = (0);
seq__876193 = G__876205;
chunk__876194 = G__876206;
count__876195 = G__876207;
i__876196 = G__876208;
continue;
} else {
var vec__876198 = cljs.core.first.call(null,seq__876193__$1);
var sym = cljs.core.nth.call(null,vec__876198,(0),null);
var value = cljs.core.nth.call(null,vec__876198,(1),null);
var ns_876209 = cljs.core.namespace.call(null,sym);
var name_876210 = cljs.core.name.call(null,sym);
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

var G__876211 = cljs.core.next.call(null,seq__876193__$1);
var G__876212 = null;
var G__876213 = (0);
var G__876214 = (0);
seq__876193 = G__876211;
chunk__876194 = G__876212;
count__876195 = G__876213;
i__876196 = G__876214;
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