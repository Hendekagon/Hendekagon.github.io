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
var map__44738 = s;
var map__44738__$1 = ((((!((map__44738 == null)))?((((map__44738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44738):map__44738);
var name = cljs.core.get.call(null,map__44738__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__44738__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__44741 = info;
var map__44742 = G__44741;
var map__44742__$1 = ((((!((map__44742 == null)))?((((map__44742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44742):map__44742);
var shadow = cljs.core.get.call(null,map__44742__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__44741__$1 = G__44741;
while(true){
var d__$2 = d__$1;
var map__44744 = G__44741__$1;
var map__44744__$1 = ((((!((map__44744 == null)))?((((map__44744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44744):map__44744);
var shadow__$1 = cljs.core.get.call(null,map__44744__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__44746 = (d__$2 + (1));
var G__44747 = shadow__$1;
d__$1 = G__44746;
G__44741__$1 = G__44747;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__44748){
var map__44753 = p__44748;
var map__44753__$1 = ((((!((map__44753 == null)))?((((map__44753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44753):map__44753);
var name_var = map__44753__$1;
var name = cljs.core.get.call(null,map__44753__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__44753__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__44755 = info;
var map__44755__$1 = ((((!((map__44755 == null)))?((((map__44755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44755):map__44755);
var ns = cljs.core.get.call(null,map__44755__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__44755__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args44757 = [];
var len__25223__auto___44760 = arguments.length;
var i__25224__auto___44761 = (0);
while(true){
if((i__25224__auto___44761 < len__25223__auto___44760)){
args44757.push((arguments[i__25224__auto___44761]));

var G__44762 = (i__25224__auto___44761 + (1));
i__25224__auto___44761 = G__44762;
continue;
} else {
}
break;
}

var G__44759 = args44757.length;
switch (G__44759) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44757.length)].join('')));

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
var G__44765 = cp;
switch (G__44765) {
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
var seq__44771_44775 = cljs.core.seq.call(null,s);
var chunk__44772_44776 = null;
var count__44773_44777 = (0);
var i__44774_44778 = (0);
while(true){
if((i__44774_44778 < count__44773_44777)){
var c_44779 = cljs.core._nth.call(null,chunk__44772_44776,i__44774_44778);
sb.append(cljs.compiler.escape_char.call(null,c_44779));

var G__44780 = seq__44771_44775;
var G__44781 = chunk__44772_44776;
var G__44782 = count__44773_44777;
var G__44783 = (i__44774_44778 + (1));
seq__44771_44775 = G__44780;
chunk__44772_44776 = G__44781;
count__44773_44777 = G__44782;
i__44774_44778 = G__44783;
continue;
} else {
var temp__4425__auto___44784 = cljs.core.seq.call(null,seq__44771_44775);
if(temp__4425__auto___44784){
var seq__44771_44785__$1 = temp__4425__auto___44784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44771_44785__$1)){
var c__24968__auto___44786 = cljs.core.chunk_first.call(null,seq__44771_44785__$1);
var G__44787 = cljs.core.chunk_rest.call(null,seq__44771_44785__$1);
var G__44788 = c__24968__auto___44786;
var G__44789 = cljs.core.count.call(null,c__24968__auto___44786);
var G__44790 = (0);
seq__44771_44775 = G__44787;
chunk__44772_44776 = G__44788;
count__44773_44777 = G__44789;
i__44774_44778 = G__44790;
continue;
} else {
var c_44791 = cljs.core.first.call(null,seq__44771_44785__$1);
sb.append(cljs.compiler.escape_char.call(null,c_44791));

var G__44792 = cljs.core.next.call(null,seq__44771_44785__$1);
var G__44793 = null;
var G__44794 = (0);
var G__44795 = (0);
seq__44771_44775 = G__44792;
chunk__44772_44776 = G__44793;
count__44773_44777 = G__44794;
i__44774_44778 = G__44795;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__25078__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25079__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25080__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25081__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25082__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25082__auto__,method_table__25078__auto__,prefer_table__25079__auto__,method_cache__25080__auto__,cached_hierarchy__25081__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__27745__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__27745__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__44801_44806 = ast;
var map__44801_44807__$1 = ((((!((map__44801_44806 == null)))?((((map__44801_44806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44801_44806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44801_44806):map__44801_44806);
var env_44808 = cljs.core.get.call(null,map__44801_44807__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_44808))){
var map__44803_44809 = env_44808;
var map__44803_44810__$1 = ((((!((map__44803_44809 == null)))?((((map__44803_44809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44803_44809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44803_44809):map__44803_44809);
var line_44811 = cljs.core.get.call(null,map__44803_44810__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44812 = cljs.core.get.call(null,map__44803_44810__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__44803_44809,map__44803_44810__$1,line_44811,column_44812,map__44801_44806,map__44801_44807__$1,env_44808,val__27745__auto__){
return (function (m){
var minfo = (function (){var G__44805 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__44805__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__44805,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__44805);
return G__44805__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_44811 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__44803_44809,map__44803_44810__$1,line_44811,column_44812,map__44801_44806,map__44801_44807__$1,env_44808,val__27745__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_44812)?(column_44812 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__44803_44809,map__44803_44810__$1,line_44811,column_44812,map__44801_44806,map__44801_44807__$1,env_44808,val__27745__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__44803_44809,map__44803_44810__$1,line_44811,column_44812,map__44801_44806,map__44801_44807__$1,env_44808,val__27745__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__44803_44809,map__44803_44810__$1,line_44811,column_44812,map__44801_44806,map__44801_44807__$1,env_44808,val__27745__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__44803_44809,map__44803_44810__$1,line_44811,column_44812,map__44801_44806,map__44801_44807__$1,env_44808,val__27745__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__27745__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__25230__auto__ = [];
var len__25223__auto___44819 = arguments.length;
var i__25224__auto___44820 = (0);
while(true){
if((i__25224__auto___44820 < len__25223__auto___44819)){
args__25230__auto__.push((arguments[i__25224__auto___44820]));

var G__44821 = (i__25224__auto___44820 + (1));
i__25224__auto___44820 = G__44821;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((0) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__25231__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__44815_44822 = cljs.core.seq.call(null,xs);
var chunk__44816_44823 = null;
var count__44817_44824 = (0);
var i__44818_44825 = (0);
while(true){
if((i__44818_44825 < count__44817_44824)){
var x_44826 = cljs.core._nth.call(null,chunk__44816_44823,i__44818_44825);
if((x_44826 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_44826)){
cljs.compiler.emit.call(null,x_44826);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_44826)){
cljs.core.apply.call(null,cljs.compiler.emits,x_44826);
} else {
if(goog.isFunction(x_44826)){
x_44826.call(null);
} else {
var s_44827 = cljs.core.print_str.call(null,x_44826);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__44815_44822,chunk__44816_44823,count__44817_44824,i__44818_44825,s_44827,x_44826){
return (function (p1__44813_SHARP_){
return (p1__44813_SHARP_ + cljs.core.count.call(null,s_44827));
});})(seq__44815_44822,chunk__44816_44823,count__44817_44824,i__44818_44825,s_44827,x_44826))
);
}

cljs.core.print.call(null,s_44827);

}
}
}
}

var G__44828 = seq__44815_44822;
var G__44829 = chunk__44816_44823;
var G__44830 = count__44817_44824;
var G__44831 = (i__44818_44825 + (1));
seq__44815_44822 = G__44828;
chunk__44816_44823 = G__44829;
count__44817_44824 = G__44830;
i__44818_44825 = G__44831;
continue;
} else {
var temp__4425__auto___44832 = cljs.core.seq.call(null,seq__44815_44822);
if(temp__4425__auto___44832){
var seq__44815_44833__$1 = temp__4425__auto___44832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44815_44833__$1)){
var c__24968__auto___44834 = cljs.core.chunk_first.call(null,seq__44815_44833__$1);
var G__44835 = cljs.core.chunk_rest.call(null,seq__44815_44833__$1);
var G__44836 = c__24968__auto___44834;
var G__44837 = cljs.core.count.call(null,c__24968__auto___44834);
var G__44838 = (0);
seq__44815_44822 = G__44835;
chunk__44816_44823 = G__44836;
count__44817_44824 = G__44837;
i__44818_44825 = G__44838;
continue;
} else {
var x_44839 = cljs.core.first.call(null,seq__44815_44833__$1);
if((x_44839 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_44839)){
cljs.compiler.emit.call(null,x_44839);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_44839)){
cljs.core.apply.call(null,cljs.compiler.emits,x_44839);
} else {
if(goog.isFunction(x_44839)){
x_44839.call(null);
} else {
var s_44840 = cljs.core.print_str.call(null,x_44839);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__44815_44822,chunk__44816_44823,count__44817_44824,i__44818_44825,s_44840,x_44839,seq__44815_44833__$1,temp__4425__auto___44832){
return (function (p1__44813_SHARP_){
return (p1__44813_SHARP_ + cljs.core.count.call(null,s_44840));
});})(seq__44815_44822,chunk__44816_44823,count__44817_44824,i__44818_44825,s_44840,x_44839,seq__44815_44833__$1,temp__4425__auto___44832))
);
}

cljs.core.print.call(null,s_44840);

}
}
}
}

var G__44841 = cljs.core.next.call(null,seq__44815_44833__$1);
var G__44842 = null;
var G__44843 = (0);
var G__44844 = (0);
seq__44815_44822 = G__44841;
chunk__44816_44823 = G__44842;
count__44817_44824 = G__44843;
i__44818_44825 = G__44844;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq44814){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44814));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__25230__auto__ = [];
var len__25223__auto___44849 = arguments.length;
var i__25224__auto___44850 = (0);
while(true){
if((i__25224__auto___44850 < len__25223__auto___44849)){
args__25230__auto__.push((arguments[i__25224__auto___44850]));

var G__44851 = (i__25224__auto___44850 + (1));
i__25224__auto___44850 = G__44851;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((0) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__25231__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__44846){
var map__44847 = p__44846;
var map__44847__$1 = ((((!((map__44847 == null)))?((((map__44847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44847):map__44847);
var m = map__44847__$1;
var gen_line = cljs.core.get.call(null,map__44847__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq44845){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44845));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__25139__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_44854_44856 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_44855_44857 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_44854_44856,_STAR_print_fn_STAR_44855_44857,sb__25139__auto__){
return (function (x__25140__auto__){
return sb__25139__auto__.append(x__25140__auto__);
});})(_STAR_print_newline_STAR_44854_44856,_STAR_print_fn_STAR_44855_44857,sb__25139__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_44855_44857;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_44854_44856;
}
return [cljs.core.str(sb__25139__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__25078__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25079__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25080__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25081__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25082__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25082__auto__,method_table__25078__auto__,prefer_table__25079__auto__,method_cache__25080__auto__,cached_hierarchy__25081__auto__));
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
var vec__44858 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__44858,(0),null);
var flags = cljs.core.nth.call(null,vec__44858,(1),null);
var pattern = cljs.core.nth.call(null,vec__44858,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__44860){
var map__44861 = p__44860;
var map__44861__$1 = ((((!((map__44861 == null)))?((((map__44861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44861):map__44861);
var arg = map__44861__$1;
var info = cljs.core.get.call(null,map__44861__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__44861__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__44861__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__24165__auto__ = js_module_name;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
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
var env__29162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__44863 = info__$1;
var G__44863__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__44863):G__44863);
return G__44863__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__44864){
var map__44865 = p__44864;
var map__44865__$1 = ((((!((map__44865 == null)))?((((map__44865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44865):map__44865);
var arg = map__44865__$1;
var env = cljs.core.get.call(null,map__44865__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__44865__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__44865__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__44865__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__44867 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__44867__$1 = ((((!((map__44867 == null)))?((((map__44867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44867):map__44867);
var name = cljs.core.get.call(null,map__44867__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__29162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__44869){
var map__44870 = p__44869;
var map__44870__$1 = ((((!((map__44870 == null)))?((((map__44870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44870):map__44870);
var expr = cljs.core.get.call(null,map__44870__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__44870__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__44870__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__44872_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__44872_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__44873){
var map__44874 = p__44873;
var map__44874__$1 = ((((!((map__44874 == null)))?((((map__44874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44874):map__44874);
var env = cljs.core.get.call(null,map__44874__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__44874__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__44874__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__29162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__44876){
var map__44877 = p__44876;
var map__44877__$1 = ((((!((map__44877 == null)))?((((map__44877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44877):map__44877);
var items = cljs.core.get.call(null,map__44877__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__44877__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__44879){
var map__44880 = p__44879;
var map__44880__$1 = ((((!((map__44880 == null)))?((((map__44880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44880):map__44880);
var items = cljs.core.get.call(null,map__44880__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__44880__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_44882 = cljs.core.count.call(null,items);
if((cnt_44882 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_44882,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__44883_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__44883_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__44884){
var map__44885 = p__44884;
var map__44885__$1 = ((((!((map__44885 == null)))?((((map__44885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44885):map__44885);
var items = cljs.core.get.call(null,map__44885__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__44885__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__44887){
var map__44888 = p__44887;
var map__44888__$1 = ((((!((map__44888 == null)))?((((map__44888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44888):map__44888);
var items = cljs.core.get.call(null,map__44888__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__44888__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__44888__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___44898 = cljs.core.seq.call(null,items);
if(temp__4425__auto___44898){
var items_44899__$1 = temp__4425__auto___44898;
var vec__44890_44900 = items_44899__$1;
var vec__44891_44901 = cljs.core.nth.call(null,vec__44890_44900,(0),null);
var k_44902 = cljs.core.nth.call(null,vec__44891_44901,(0),null);
var v_44903 = cljs.core.nth.call(null,vec__44891_44901,(1),null);
var r_44904 = cljs.core.nthnext.call(null,vec__44890_44900,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_44902),"\": ",v_44903);

var seq__44892_44905 = cljs.core.seq.call(null,r_44904);
var chunk__44893_44906 = null;
var count__44894_44907 = (0);
var i__44895_44908 = (0);
while(true){
if((i__44895_44908 < count__44894_44907)){
var vec__44896_44909 = cljs.core._nth.call(null,chunk__44893_44906,i__44895_44908);
var k_44910__$1 = cljs.core.nth.call(null,vec__44896_44909,(0),null);
var v_44911__$1 = cljs.core.nth.call(null,vec__44896_44909,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_44910__$1),"\": ",v_44911__$1);

var G__44912 = seq__44892_44905;
var G__44913 = chunk__44893_44906;
var G__44914 = count__44894_44907;
var G__44915 = (i__44895_44908 + (1));
seq__44892_44905 = G__44912;
chunk__44893_44906 = G__44913;
count__44894_44907 = G__44914;
i__44895_44908 = G__44915;
continue;
} else {
var temp__4425__auto___44916__$1 = cljs.core.seq.call(null,seq__44892_44905);
if(temp__4425__auto___44916__$1){
var seq__44892_44917__$1 = temp__4425__auto___44916__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44892_44917__$1)){
var c__24968__auto___44918 = cljs.core.chunk_first.call(null,seq__44892_44917__$1);
var G__44919 = cljs.core.chunk_rest.call(null,seq__44892_44917__$1);
var G__44920 = c__24968__auto___44918;
var G__44921 = cljs.core.count.call(null,c__24968__auto___44918);
var G__44922 = (0);
seq__44892_44905 = G__44919;
chunk__44893_44906 = G__44920;
count__44894_44907 = G__44921;
i__44895_44908 = G__44922;
continue;
} else {
var vec__44897_44923 = cljs.core.first.call(null,seq__44892_44917__$1);
var k_44924__$1 = cljs.core.nth.call(null,vec__44897_44923,(0),null);
var v_44925__$1 = cljs.core.nth.call(null,vec__44897_44923,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_44924__$1),"\": ",v_44925__$1);

var G__44926 = cljs.core.next.call(null,seq__44892_44917__$1);
var G__44927 = null;
var G__44928 = (0);
var G__44929 = (0);
seq__44892_44905 = G__44926;
chunk__44893_44906 = G__44927;
count__44894_44907 = G__44928;
i__44895_44908 = G__44929;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__44930){
var map__44931 = p__44930;
var map__44931__$1 = ((((!((map__44931 == null)))?((((map__44931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44931):map__44931);
var form = cljs.core.get.call(null,map__44931__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__44931__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__29162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__44933){
var map__44936 = p__44933;
var map__44936__$1 = ((((!((map__44936 == null)))?((((map__44936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44936):map__44936);
var op = cljs.core.get.call(null,map__44936__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__44936__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__24153__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__24153__auto__){
var and__24153__auto____$1 = form;
if(cljs.core.truth_(and__24153__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__24153__auto____$1;
}
} else {
return and__24153__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__44938){
var map__44941 = p__44938;
var map__44941__$1 = ((((!((map__44941 == null)))?((((map__44941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44941):map__44941);
var op = cljs.core.get.call(null,map__44941__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__44941__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__24165__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__44943){
var map__44944 = p__44943;
var map__44944__$1 = ((((!((map__44944 == null)))?((((map__44944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44944):map__44944);
var test = cljs.core.get.call(null,map__44944__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__44944__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__44944__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__44944__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__44944__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__24165__auto__ = unchecked;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__44946){
var map__44947 = p__44946;
var map__44947__$1 = ((((!((map__44947 == null)))?((((map__44947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44947):map__44947);
var v = cljs.core.get.call(null,map__44947__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__44947__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__44947__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__44947__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__44947__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__44949_44963 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__44950_44964 = null;
var count__44951_44965 = (0);
var i__44952_44966 = (0);
while(true){
if((i__44952_44966 < count__44951_44965)){
var vec__44953_44967 = cljs.core._nth.call(null,chunk__44950_44964,i__44952_44966);
var ts_44968 = cljs.core.nth.call(null,vec__44953_44967,(0),null);
var then_44969 = cljs.core.nth.call(null,vec__44953_44967,(1),null);
var seq__44954_44970 = cljs.core.seq.call(null,ts_44968);
var chunk__44955_44971 = null;
var count__44956_44972 = (0);
var i__44957_44973 = (0);
while(true){
if((i__44957_44973 < count__44956_44972)){
var test_44974 = cljs.core._nth.call(null,chunk__44955_44971,i__44957_44973);
cljs.compiler.emitln.call(null,"case ",test_44974,":");

var G__44975 = seq__44954_44970;
var G__44976 = chunk__44955_44971;
var G__44977 = count__44956_44972;
var G__44978 = (i__44957_44973 + (1));
seq__44954_44970 = G__44975;
chunk__44955_44971 = G__44976;
count__44956_44972 = G__44977;
i__44957_44973 = G__44978;
continue;
} else {
var temp__4425__auto___44979 = cljs.core.seq.call(null,seq__44954_44970);
if(temp__4425__auto___44979){
var seq__44954_44980__$1 = temp__4425__auto___44979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44954_44980__$1)){
var c__24968__auto___44981 = cljs.core.chunk_first.call(null,seq__44954_44980__$1);
var G__44982 = cljs.core.chunk_rest.call(null,seq__44954_44980__$1);
var G__44983 = c__24968__auto___44981;
var G__44984 = cljs.core.count.call(null,c__24968__auto___44981);
var G__44985 = (0);
seq__44954_44970 = G__44982;
chunk__44955_44971 = G__44983;
count__44956_44972 = G__44984;
i__44957_44973 = G__44985;
continue;
} else {
var test_44986 = cljs.core.first.call(null,seq__44954_44980__$1);
cljs.compiler.emitln.call(null,"case ",test_44986,":");

var G__44987 = cljs.core.next.call(null,seq__44954_44980__$1);
var G__44988 = null;
var G__44989 = (0);
var G__44990 = (0);
seq__44954_44970 = G__44987;
chunk__44955_44971 = G__44988;
count__44956_44972 = G__44989;
i__44957_44973 = G__44990;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_44969);
} else {
cljs.compiler.emitln.call(null,then_44969);
}

cljs.compiler.emitln.call(null,"break;");

var G__44991 = seq__44949_44963;
var G__44992 = chunk__44950_44964;
var G__44993 = count__44951_44965;
var G__44994 = (i__44952_44966 + (1));
seq__44949_44963 = G__44991;
chunk__44950_44964 = G__44992;
count__44951_44965 = G__44993;
i__44952_44966 = G__44994;
continue;
} else {
var temp__4425__auto___44995 = cljs.core.seq.call(null,seq__44949_44963);
if(temp__4425__auto___44995){
var seq__44949_44996__$1 = temp__4425__auto___44995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44949_44996__$1)){
var c__24968__auto___44997 = cljs.core.chunk_first.call(null,seq__44949_44996__$1);
var G__44998 = cljs.core.chunk_rest.call(null,seq__44949_44996__$1);
var G__44999 = c__24968__auto___44997;
var G__45000 = cljs.core.count.call(null,c__24968__auto___44997);
var G__45001 = (0);
seq__44949_44963 = G__44998;
chunk__44950_44964 = G__44999;
count__44951_44965 = G__45000;
i__44952_44966 = G__45001;
continue;
} else {
var vec__44958_45002 = cljs.core.first.call(null,seq__44949_44996__$1);
var ts_45003 = cljs.core.nth.call(null,vec__44958_45002,(0),null);
var then_45004 = cljs.core.nth.call(null,vec__44958_45002,(1),null);
var seq__44959_45005 = cljs.core.seq.call(null,ts_45003);
var chunk__44960_45006 = null;
var count__44961_45007 = (0);
var i__44962_45008 = (0);
while(true){
if((i__44962_45008 < count__44961_45007)){
var test_45009 = cljs.core._nth.call(null,chunk__44960_45006,i__44962_45008);
cljs.compiler.emitln.call(null,"case ",test_45009,":");

var G__45010 = seq__44959_45005;
var G__45011 = chunk__44960_45006;
var G__45012 = count__44961_45007;
var G__45013 = (i__44962_45008 + (1));
seq__44959_45005 = G__45010;
chunk__44960_45006 = G__45011;
count__44961_45007 = G__45012;
i__44962_45008 = G__45013;
continue;
} else {
var temp__4425__auto___45014__$1 = cljs.core.seq.call(null,seq__44959_45005);
if(temp__4425__auto___45014__$1){
var seq__44959_45015__$1 = temp__4425__auto___45014__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44959_45015__$1)){
var c__24968__auto___45016 = cljs.core.chunk_first.call(null,seq__44959_45015__$1);
var G__45017 = cljs.core.chunk_rest.call(null,seq__44959_45015__$1);
var G__45018 = c__24968__auto___45016;
var G__45019 = cljs.core.count.call(null,c__24968__auto___45016);
var G__45020 = (0);
seq__44959_45005 = G__45017;
chunk__44960_45006 = G__45018;
count__44961_45007 = G__45019;
i__44962_45008 = G__45020;
continue;
} else {
var test_45021 = cljs.core.first.call(null,seq__44959_45015__$1);
cljs.compiler.emitln.call(null,"case ",test_45021,":");

var G__45022 = cljs.core.next.call(null,seq__44959_45015__$1);
var G__45023 = null;
var G__45024 = (0);
var G__45025 = (0);
seq__44959_45005 = G__45022;
chunk__44960_45006 = G__45023;
count__44961_45007 = G__45024;
i__44962_45008 = G__45025;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_45004);
} else {
cljs.compiler.emitln.call(null,then_45004);
}

cljs.compiler.emitln.call(null,"break;");

var G__45026 = cljs.core.next.call(null,seq__44949_44996__$1);
var G__45027 = null;
var G__45028 = (0);
var G__45029 = (0);
seq__44949_44963 = G__45026;
chunk__44950_44964 = G__45027;
count__44951_44965 = G__45028;
i__44952_44966 = G__45029;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__45030){
var map__45031 = p__45030;
var map__45031__$1 = ((((!((map__45031 == null)))?((((map__45031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45031):map__45031);
var throw$ = cljs.core.get.call(null,map__45031__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__45031__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__45036 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__45036,(0),null);
var rstr = cljs.core.nth.call(null,vec__45036,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__45036,fstr,rstr,ret_t,axstr){
return (function (p1__45033_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__45033_SHARP_);
});})(idx,vec__45036,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__45037 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
var G__45037__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__45037),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__45037);
return G__45037__$1;
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
return (function (p1__45038_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__45038_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__45041 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__45041,(0),null);
var ts = cljs.core.nth.call(null,vec__45041,(1),null);
var n = cljs.core.nth.call(null,vec__45041,(2),null);
var xs = cljs.core.nthnext.call(null,vec__45041,(3));
if(cljs.core.truth_((function (){var and__24153__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__24153__auto__){
var and__24153__auto____$1 = ts;
if(cljs.core.truth_(and__24153__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__24153__auto____$1;
}
} else {
return and__24153__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__45042 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__45042,(0),null);
var ts = cljs.core.nth.call(null,vec__45042,(1),null);
var xs = cljs.core.nthnext.call(null,vec__45042,(2));
if(cljs.core.truth_((function (){var and__24153__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__24153__auto__){
var and__24153__auto____$1 = ts;
if(cljs.core.truth_(and__24153__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__24153__auto____$1;
}
} else {
return and__24153__auto__;
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
var args45044 = [];
var len__25223__auto___45071 = arguments.length;
var i__25224__auto___45072 = (0);
while(true){
if((i__25224__auto___45072 < len__25223__auto___45071)){
args45044.push((arguments[i__25224__auto___45072]));

var G__45073 = (i__25224__auto___45072 + (1));
i__25224__auto___45072 = G__45073;
continue;
} else {
}
break;
}

var G__45046 = args45044.length;
switch (G__45046) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45044.length)].join('')));

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
var vec__45062 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__45043_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__45043_SHARP_);
} else {
return p1__45043_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__45062,(0),null);
var ys = cljs.core.nthnext.call(null,vec__45062,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__45063 = cljs.core.seq.call(null,ys);
var chunk__45064 = null;
var count__45065 = (0);
var i__45066 = (0);
while(true){
if((i__45066 < count__45065)){
var next_line = cljs.core._nth.call(null,chunk__45064,i__45066);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__45075 = seq__45063;
var G__45076 = chunk__45064;
var G__45077 = count__45065;
var G__45078 = (i__45066 + (1));
seq__45063 = G__45075;
chunk__45064 = G__45076;
count__45065 = G__45077;
i__45066 = G__45078;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__45063);
if(temp__4425__auto__){
var seq__45063__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45063__$1)){
var c__24968__auto__ = cljs.core.chunk_first.call(null,seq__45063__$1);
var G__45079 = cljs.core.chunk_rest.call(null,seq__45063__$1);
var G__45080 = c__24968__auto__;
var G__45081 = cljs.core.count.call(null,c__24968__auto__);
var G__45082 = (0);
seq__45063 = G__45079;
chunk__45064 = G__45080;
count__45065 = G__45081;
i__45066 = G__45082;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__45063__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__45083 = cljs.core.next.call(null,seq__45063__$1);
var G__45084 = null;
var G__45085 = (0);
var G__45086 = (0);
seq__45063 = G__45083;
chunk__45064 = G__45084;
count__45065 = G__45085;
i__45066 = G__45086;
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

var seq__45067_45087 = cljs.core.seq.call(null,docs__$2);
var chunk__45068_45088 = null;
var count__45069_45089 = (0);
var i__45070_45090 = (0);
while(true){
if((i__45070_45090 < count__45069_45089)){
var e_45091 = cljs.core._nth.call(null,chunk__45068_45088,i__45070_45090);
if(cljs.core.truth_(e_45091)){
print_comment_lines.call(null,e_45091);
} else {
}

var G__45092 = seq__45067_45087;
var G__45093 = chunk__45068_45088;
var G__45094 = count__45069_45089;
var G__45095 = (i__45070_45090 + (1));
seq__45067_45087 = G__45092;
chunk__45068_45088 = G__45093;
count__45069_45089 = G__45094;
i__45070_45090 = G__45095;
continue;
} else {
var temp__4425__auto___45096 = cljs.core.seq.call(null,seq__45067_45087);
if(temp__4425__auto___45096){
var seq__45067_45097__$1 = temp__4425__auto___45096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45067_45097__$1)){
var c__24968__auto___45098 = cljs.core.chunk_first.call(null,seq__45067_45097__$1);
var G__45099 = cljs.core.chunk_rest.call(null,seq__45067_45097__$1);
var G__45100 = c__24968__auto___45098;
var G__45101 = cljs.core.count.call(null,c__24968__auto___45098);
var G__45102 = (0);
seq__45067_45087 = G__45099;
chunk__45068_45088 = G__45100;
count__45069_45089 = G__45101;
i__45070_45090 = G__45102;
continue;
} else {
var e_45103 = cljs.core.first.call(null,seq__45067_45097__$1);
if(cljs.core.truth_(e_45103)){
print_comment_lines.call(null,e_45103);
} else {
}

var G__45104 = cljs.core.next.call(null,seq__45067_45097__$1);
var G__45105 = null;
var G__45106 = (0);
var G__45107 = (0);
seq__45067_45087 = G__45104;
chunk__45068_45088 = G__45105;
count__45069_45089 = G__45106;
i__45070_45090 = G__45107;
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
var and__24153__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__45109_SHARP_){
return goog.string.startsWith(p1__45109_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__24153__auto__)){
var and__24153__auto____$1 = opts;
if(cljs.core.truth_(and__24153__auto____$1)){
var and__24153__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__24153__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__24153__auto____$2;
}
} else {
return and__24153__auto____$1;
}
} else {
return and__24153__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__45110){
var map__45111 = p__45110;
var map__45111__$1 = ((((!((map__45111 == null)))?((((map__45111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45111):map__45111);
var name = cljs.core.get.call(null,map__45111__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__45111__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__45111__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__45111__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__45111__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__45111__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__45111__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__45111__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__45111__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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

if(cljs.core.truth_((function (){var and__24153__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__24153__auto__)){
return test;
} else {
return and__24153__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__45113){
var map__45130 = p__45113;
var map__45130__$1 = ((((!((map__45130 == null)))?((((map__45130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45130):map__45130);
var name = cljs.core.get.call(null,map__45130__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__45130__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__45130__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__45132_45146 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__45133_45147 = null;
var count__45134_45148 = (0);
var i__45135_45149 = (0);
while(true){
if((i__45135_45149 < count__45134_45148)){
var vec__45136_45150 = cljs.core._nth.call(null,chunk__45133_45147,i__45135_45149);
var i_45151 = cljs.core.nth.call(null,vec__45136_45150,(0),null);
var param_45152 = cljs.core.nth.call(null,vec__45136_45150,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_45152);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__45153 = seq__45132_45146;
var G__45154 = chunk__45133_45147;
var G__45155 = count__45134_45148;
var G__45156 = (i__45135_45149 + (1));
seq__45132_45146 = G__45153;
chunk__45133_45147 = G__45154;
count__45134_45148 = G__45155;
i__45135_45149 = G__45156;
continue;
} else {
var temp__4425__auto___45157 = cljs.core.seq.call(null,seq__45132_45146);
if(temp__4425__auto___45157){
var seq__45132_45158__$1 = temp__4425__auto___45157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45132_45158__$1)){
var c__24968__auto___45159 = cljs.core.chunk_first.call(null,seq__45132_45158__$1);
var G__45160 = cljs.core.chunk_rest.call(null,seq__45132_45158__$1);
var G__45161 = c__24968__auto___45159;
var G__45162 = cljs.core.count.call(null,c__24968__auto___45159);
var G__45163 = (0);
seq__45132_45146 = G__45160;
chunk__45133_45147 = G__45161;
count__45134_45148 = G__45162;
i__45135_45149 = G__45163;
continue;
} else {
var vec__45137_45164 = cljs.core.first.call(null,seq__45132_45158__$1);
var i_45165 = cljs.core.nth.call(null,vec__45137_45164,(0),null);
var param_45166 = cljs.core.nth.call(null,vec__45137_45164,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_45166);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__45167 = cljs.core.next.call(null,seq__45132_45158__$1);
var G__45168 = null;
var G__45169 = (0);
var G__45170 = (0);
seq__45132_45146 = G__45167;
chunk__45133_45147 = G__45168;
count__45134_45148 = G__45169;
i__45135_45149 = G__45170;
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

var seq__45138_45171 = cljs.core.seq.call(null,params);
var chunk__45139_45172 = null;
var count__45140_45173 = (0);
var i__45141_45174 = (0);
while(true){
if((i__45141_45174 < count__45140_45173)){
var param_45175 = cljs.core._nth.call(null,chunk__45139_45172,i__45141_45174);
cljs.compiler.emit.call(null,param_45175);

if(cljs.core._EQ_.call(null,param_45175,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__45176 = seq__45138_45171;
var G__45177 = chunk__45139_45172;
var G__45178 = count__45140_45173;
var G__45179 = (i__45141_45174 + (1));
seq__45138_45171 = G__45176;
chunk__45139_45172 = G__45177;
count__45140_45173 = G__45178;
i__45141_45174 = G__45179;
continue;
} else {
var temp__4425__auto___45180 = cljs.core.seq.call(null,seq__45138_45171);
if(temp__4425__auto___45180){
var seq__45138_45181__$1 = temp__4425__auto___45180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45138_45181__$1)){
var c__24968__auto___45182 = cljs.core.chunk_first.call(null,seq__45138_45181__$1);
var G__45183 = cljs.core.chunk_rest.call(null,seq__45138_45181__$1);
var G__45184 = c__24968__auto___45182;
var G__45185 = cljs.core.count.call(null,c__24968__auto___45182);
var G__45186 = (0);
seq__45138_45171 = G__45183;
chunk__45139_45172 = G__45184;
count__45140_45173 = G__45185;
i__45141_45174 = G__45186;
continue;
} else {
var param_45187 = cljs.core.first.call(null,seq__45138_45181__$1);
cljs.compiler.emit.call(null,param_45187);

if(cljs.core._EQ_.call(null,param_45187,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__45188 = cljs.core.next.call(null,seq__45138_45181__$1);
var G__45189 = null;
var G__45190 = (0);
var G__45191 = (0);
seq__45138_45171 = G__45188;
chunk__45139_45172 = G__45189;
count__45140_45173 = G__45190;
i__45141_45174 = G__45191;
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

var seq__45142_45192 = cljs.core.seq.call(null,params);
var chunk__45143_45193 = null;
var count__45144_45194 = (0);
var i__45145_45195 = (0);
while(true){
if((i__45145_45195 < count__45144_45194)){
var param_45196 = cljs.core._nth.call(null,chunk__45143_45193,i__45145_45195);
cljs.compiler.emit.call(null,param_45196);

if(cljs.core._EQ_.call(null,param_45196,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__45197 = seq__45142_45192;
var G__45198 = chunk__45143_45193;
var G__45199 = count__45144_45194;
var G__45200 = (i__45145_45195 + (1));
seq__45142_45192 = G__45197;
chunk__45143_45193 = G__45198;
count__45144_45194 = G__45199;
i__45145_45195 = G__45200;
continue;
} else {
var temp__4425__auto___45201 = cljs.core.seq.call(null,seq__45142_45192);
if(temp__4425__auto___45201){
var seq__45142_45202__$1 = temp__4425__auto___45201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45142_45202__$1)){
var c__24968__auto___45203 = cljs.core.chunk_first.call(null,seq__45142_45202__$1);
var G__45204 = cljs.core.chunk_rest.call(null,seq__45142_45202__$1);
var G__45205 = c__24968__auto___45203;
var G__45206 = cljs.core.count.call(null,c__24968__auto___45203);
var G__45207 = (0);
seq__45142_45192 = G__45204;
chunk__45143_45193 = G__45205;
count__45144_45194 = G__45206;
i__45145_45195 = G__45207;
continue;
} else {
var param_45208 = cljs.core.first.call(null,seq__45142_45202__$1);
cljs.compiler.emit.call(null,param_45208);

if(cljs.core._EQ_.call(null,param_45208,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__45209 = cljs.core.next.call(null,seq__45142_45202__$1);
var G__45210 = null;
var G__45211 = (0);
var G__45212 = (0);
seq__45142_45192 = G__45209;
chunk__45143_45193 = G__45210;
count__45144_45194 = G__45211;
i__45145_45195 = G__45212;
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
var seq__45217 = cljs.core.seq.call(null,params);
var chunk__45218 = null;
var count__45219 = (0);
var i__45220 = (0);
while(true){
if((i__45220 < count__45219)){
var param = cljs.core._nth.call(null,chunk__45218,i__45220);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__45221 = seq__45217;
var G__45222 = chunk__45218;
var G__45223 = count__45219;
var G__45224 = (i__45220 + (1));
seq__45217 = G__45221;
chunk__45218 = G__45222;
count__45219 = G__45223;
i__45220 = G__45224;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__45217);
if(temp__4425__auto__){
var seq__45217__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45217__$1)){
var c__24968__auto__ = cljs.core.chunk_first.call(null,seq__45217__$1);
var G__45225 = cljs.core.chunk_rest.call(null,seq__45217__$1);
var G__45226 = c__24968__auto__;
var G__45227 = cljs.core.count.call(null,c__24968__auto__);
var G__45228 = (0);
seq__45217 = G__45225;
chunk__45218 = G__45226;
count__45219 = G__45227;
i__45220 = G__45228;
continue;
} else {
var param = cljs.core.first.call(null,seq__45217__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__45229 = cljs.core.next.call(null,seq__45217__$1);
var G__45230 = null;
var G__45231 = (0);
var G__45232 = (0);
seq__45217 = G__45229;
chunk__45218 = G__45230;
count__45219 = G__45231;
i__45220 = G__45232;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__45233){
var map__45236 = p__45233;
var map__45236__$1 = ((((!((map__45236 == null)))?((((map__45236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45236):map__45236);
var type = cljs.core.get.call(null,map__45236__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__45236__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__45236__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__45236__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__45236__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__45236__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__45236__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__45236__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__29162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__45238){
var map__45249 = p__45238;
var map__45249__$1 = ((((!((map__45249 == null)))?((((map__45249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45249):map__45249);
var f = map__45249__$1;
var type = cljs.core.get.call(null,map__45249__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__45249__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__45249__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__45249__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__45249__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__45249__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__45249__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__45249__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__29162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_45259__$1 = (function (){var or__24165__auto__ = name;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_45260 = cljs.compiler.munge.call(null,name_45259__$1);
var delegate_name_45261 = [cljs.core.str(mname_45260),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_45261," = function (");

var seq__45251_45262 = cljs.core.seq.call(null,params);
var chunk__45252_45263 = null;
var count__45253_45264 = (0);
var i__45254_45265 = (0);
while(true){
if((i__45254_45265 < count__45253_45264)){
var param_45266 = cljs.core._nth.call(null,chunk__45252_45263,i__45254_45265);
cljs.compiler.emit.call(null,param_45266);

if(cljs.core._EQ_.call(null,param_45266,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__45267 = seq__45251_45262;
var G__45268 = chunk__45252_45263;
var G__45269 = count__45253_45264;
var G__45270 = (i__45254_45265 + (1));
seq__45251_45262 = G__45267;
chunk__45252_45263 = G__45268;
count__45253_45264 = G__45269;
i__45254_45265 = G__45270;
continue;
} else {
var temp__4425__auto___45271 = cljs.core.seq.call(null,seq__45251_45262);
if(temp__4425__auto___45271){
var seq__45251_45272__$1 = temp__4425__auto___45271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45251_45272__$1)){
var c__24968__auto___45273 = cljs.core.chunk_first.call(null,seq__45251_45272__$1);
var G__45274 = cljs.core.chunk_rest.call(null,seq__45251_45272__$1);
var G__45275 = c__24968__auto___45273;
var G__45276 = cljs.core.count.call(null,c__24968__auto___45273);
var G__45277 = (0);
seq__45251_45262 = G__45274;
chunk__45252_45263 = G__45275;
count__45253_45264 = G__45276;
i__45254_45265 = G__45277;
continue;
} else {
var param_45278 = cljs.core.first.call(null,seq__45251_45272__$1);
cljs.compiler.emit.call(null,param_45278);

if(cljs.core._EQ_.call(null,param_45278,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__45279 = cljs.core.next.call(null,seq__45251_45272__$1);
var G__45280 = null;
var G__45281 = (0);
var G__45282 = (0);
seq__45251_45262 = G__45279;
chunk__45252_45263 = G__45280;
count__45253_45264 = G__45281;
i__45254_45265 = G__45282;
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

cljs.compiler.emitln.call(null,"var ",mname_45260," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_45283 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_45283,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_45261,".call(this,");

var seq__45255_45284 = cljs.core.seq.call(null,params);
var chunk__45256_45285 = null;
var count__45257_45286 = (0);
var i__45258_45287 = (0);
while(true){
if((i__45258_45287 < count__45257_45286)){
var param_45288 = cljs.core._nth.call(null,chunk__45256_45285,i__45258_45287);
cljs.compiler.emit.call(null,param_45288);

if(cljs.core._EQ_.call(null,param_45288,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__45289 = seq__45255_45284;
var G__45290 = chunk__45256_45285;
var G__45291 = count__45257_45286;
var G__45292 = (i__45258_45287 + (1));
seq__45255_45284 = G__45289;
chunk__45256_45285 = G__45290;
count__45257_45286 = G__45291;
i__45258_45287 = G__45292;
continue;
} else {
var temp__4425__auto___45293 = cljs.core.seq.call(null,seq__45255_45284);
if(temp__4425__auto___45293){
var seq__45255_45294__$1 = temp__4425__auto___45293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45255_45294__$1)){
var c__24968__auto___45295 = cljs.core.chunk_first.call(null,seq__45255_45294__$1);
var G__45296 = cljs.core.chunk_rest.call(null,seq__45255_45294__$1);
var G__45297 = c__24968__auto___45295;
var G__45298 = cljs.core.count.call(null,c__24968__auto___45295);
var G__45299 = (0);
seq__45255_45284 = G__45296;
chunk__45256_45285 = G__45297;
count__45257_45286 = G__45298;
i__45258_45287 = G__45299;
continue;
} else {
var param_45300 = cljs.core.first.call(null,seq__45255_45294__$1);
cljs.compiler.emit.call(null,param_45300);

if(cljs.core._EQ_.call(null,param_45300,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__45301 = cljs.core.next.call(null,seq__45255_45294__$1);
var G__45302 = null;
var G__45303 = (0);
var G__45304 = (0);
seq__45255_45284 = G__45301;
chunk__45256_45285 = G__45302;
count__45257_45286 = G__45303;
i__45258_45287 = G__45304;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_45260,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_45260,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_45259__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_45260,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_45261,";");

cljs.compiler.emitln.call(null,"return ",mname_45260,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__45308){
var map__45309 = p__45308;
var map__45309__$1 = ((((!((map__45309 == null)))?((((map__45309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45309):map__45309);
var name = cljs.core.get.call(null,map__45309__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__45309__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__45309__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__45309__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__45309__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__45309__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__45309__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__45309,map__45309__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__45305_SHARP_){
var and__24153__auto__ = p1__45305_SHARP_;
if(cljs.core.truth_(and__24153__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__45305_SHARP_));
} else {
return and__24153__auto__;
}
});})(map__45309,map__45309__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_45330__$1 = (function (){var or__24165__auto__ = name;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_45331 = cljs.compiler.munge.call(null,name_45330__$1);
var maxparams_45332 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_45333 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_45330__$1,mname_45331,maxparams_45332,loop_locals,map__45309,map__45309__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_45331),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_45330__$1,mname_45331,maxparams_45332,loop_locals,map__45309,map__45309__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_45334 = cljs.core.sort_by.call(null,((function (name_45330__$1,mname_45331,maxparams_45332,mmap_45333,loop_locals,map__45309,map__45309__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__45306_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__45306_SHARP_)));
});})(name_45330__$1,mname_45331,maxparams_45332,mmap_45333,loop_locals,map__45309,map__45309__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_45333));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_45331," = null;");

var seq__45311_45335 = cljs.core.seq.call(null,ms_45334);
var chunk__45312_45336 = null;
var count__45313_45337 = (0);
var i__45314_45338 = (0);
while(true){
if((i__45314_45338 < count__45313_45337)){
var vec__45315_45339 = cljs.core._nth.call(null,chunk__45312_45336,i__45314_45338);
var n_45340 = cljs.core.nth.call(null,vec__45315_45339,(0),null);
var meth_45341 = cljs.core.nth.call(null,vec__45315_45339,(1),null);
cljs.compiler.emits.call(null,"var ",n_45340," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_45341))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_45341);
} else {
cljs.compiler.emit_fn_method.call(null,meth_45341);
}

cljs.compiler.emitln.call(null,";");

var G__45342 = seq__45311_45335;
var G__45343 = chunk__45312_45336;
var G__45344 = count__45313_45337;
var G__45345 = (i__45314_45338 + (1));
seq__45311_45335 = G__45342;
chunk__45312_45336 = G__45343;
count__45313_45337 = G__45344;
i__45314_45338 = G__45345;
continue;
} else {
var temp__4425__auto___45346 = cljs.core.seq.call(null,seq__45311_45335);
if(temp__4425__auto___45346){
var seq__45311_45347__$1 = temp__4425__auto___45346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45311_45347__$1)){
var c__24968__auto___45348 = cljs.core.chunk_first.call(null,seq__45311_45347__$1);
var G__45349 = cljs.core.chunk_rest.call(null,seq__45311_45347__$1);
var G__45350 = c__24968__auto___45348;
var G__45351 = cljs.core.count.call(null,c__24968__auto___45348);
var G__45352 = (0);
seq__45311_45335 = G__45349;
chunk__45312_45336 = G__45350;
count__45313_45337 = G__45351;
i__45314_45338 = G__45352;
continue;
} else {
var vec__45316_45353 = cljs.core.first.call(null,seq__45311_45347__$1);
var n_45354 = cljs.core.nth.call(null,vec__45316_45353,(0),null);
var meth_45355 = cljs.core.nth.call(null,vec__45316_45353,(1),null);
cljs.compiler.emits.call(null,"var ",n_45354," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_45355))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_45355);
} else {
cljs.compiler.emit_fn_method.call(null,meth_45355);
}

cljs.compiler.emitln.call(null,";");

var G__45356 = cljs.core.next.call(null,seq__45311_45347__$1);
var G__45357 = null;
var G__45358 = (0);
var G__45359 = (0);
seq__45311_45335 = G__45356;
chunk__45312_45336 = G__45357;
count__45313_45337 = G__45358;
i__45314_45338 = G__45359;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_45331," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_45332),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_45332)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_45332));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__45317_45360 = cljs.core.seq.call(null,ms_45334);
var chunk__45318_45361 = null;
var count__45319_45362 = (0);
var i__45320_45363 = (0);
while(true){
if((i__45320_45363 < count__45319_45362)){
var vec__45321_45364 = cljs.core._nth.call(null,chunk__45318_45361,i__45320_45363);
var n_45365 = cljs.core.nth.call(null,vec__45321_45364,(0),null);
var meth_45366 = cljs.core.nth.call(null,vec__45321_45364,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_45366))){
cljs.compiler.emitln.call(null,"default:");

var restarg_45367 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_45367," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_45368 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_45367," = new cljs.core.IndexedSeq(",a_45368,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_45365,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_45332)),(((cljs.core.count.call(null,maxparams_45332) > (1)))?", ":null),restarg_45367,");");
} else {
var pcnt_45369 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_45366));
cljs.compiler.emitln.call(null,"case ",pcnt_45369,":");

cljs.compiler.emitln.call(null,"return ",n_45365,".call(this",(((pcnt_45369 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_45369,maxparams_45332))),",")),");");
}

var G__45370 = seq__45317_45360;
var G__45371 = chunk__45318_45361;
var G__45372 = count__45319_45362;
var G__45373 = (i__45320_45363 + (1));
seq__45317_45360 = G__45370;
chunk__45318_45361 = G__45371;
count__45319_45362 = G__45372;
i__45320_45363 = G__45373;
continue;
} else {
var temp__4425__auto___45374 = cljs.core.seq.call(null,seq__45317_45360);
if(temp__4425__auto___45374){
var seq__45317_45375__$1 = temp__4425__auto___45374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45317_45375__$1)){
var c__24968__auto___45376 = cljs.core.chunk_first.call(null,seq__45317_45375__$1);
var G__45377 = cljs.core.chunk_rest.call(null,seq__45317_45375__$1);
var G__45378 = c__24968__auto___45376;
var G__45379 = cljs.core.count.call(null,c__24968__auto___45376);
var G__45380 = (0);
seq__45317_45360 = G__45377;
chunk__45318_45361 = G__45378;
count__45319_45362 = G__45379;
i__45320_45363 = G__45380;
continue;
} else {
var vec__45322_45381 = cljs.core.first.call(null,seq__45317_45375__$1);
var n_45382 = cljs.core.nth.call(null,vec__45322_45381,(0),null);
var meth_45383 = cljs.core.nth.call(null,vec__45322_45381,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_45383))){
cljs.compiler.emitln.call(null,"default:");

var restarg_45384 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_45384," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_45385 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_45384," = new cljs.core.IndexedSeq(",a_45385,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_45382,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_45332)),(((cljs.core.count.call(null,maxparams_45332) > (1)))?", ":null),restarg_45384,");");
} else {
var pcnt_45386 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_45383));
cljs.compiler.emitln.call(null,"case ",pcnt_45386,":");

cljs.compiler.emitln.call(null,"return ",n_45382,".call(this",(((pcnt_45386 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_45386,maxparams_45332))),",")),");");
}

var G__45387 = cljs.core.next.call(null,seq__45317_45375__$1);
var G__45388 = null;
var G__45389 = (0);
var G__45390 = (0);
seq__45317_45360 = G__45387;
chunk__45318_45361 = G__45388;
count__45319_45362 = G__45389;
i__45320_45363 = G__45390;
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
cljs.compiler.emitln.call(null,mname_45331,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_45331,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_45330__$1,mname_45331,maxparams_45332,mmap_45333,ms_45334,loop_locals,map__45309,map__45309__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__45307_SHARP_){
var vec__45323 = p1__45307_SHARP_;
var n = cljs.core.nth.call(null,vec__45323,(0),null);
var m = cljs.core.nth.call(null,vec__45323,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_45330__$1,mname_45331,maxparams_45332,mmap_45333,ms_45334,loop_locals,map__45309,map__45309__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_45334),".cljs$lang$applyTo;");
} else {
}

var seq__45324_45391 = cljs.core.seq.call(null,ms_45334);
var chunk__45325_45392 = null;
var count__45326_45393 = (0);
var i__45327_45394 = (0);
while(true){
if((i__45327_45394 < count__45326_45393)){
var vec__45328_45395 = cljs.core._nth.call(null,chunk__45325_45392,i__45327_45394);
var n_45396 = cljs.core.nth.call(null,vec__45328_45395,(0),null);
var meth_45397 = cljs.core.nth.call(null,vec__45328_45395,(1),null);
var c_45398 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_45397));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_45397))){
cljs.compiler.emitln.call(null,mname_45331,".cljs$core$IFn$_invoke$arity$variadic = ",n_45396,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_45331,".cljs$core$IFn$_invoke$arity$",c_45398," = ",n_45396,";");
}

var G__45399 = seq__45324_45391;
var G__45400 = chunk__45325_45392;
var G__45401 = count__45326_45393;
var G__45402 = (i__45327_45394 + (1));
seq__45324_45391 = G__45399;
chunk__45325_45392 = G__45400;
count__45326_45393 = G__45401;
i__45327_45394 = G__45402;
continue;
} else {
var temp__4425__auto___45403 = cljs.core.seq.call(null,seq__45324_45391);
if(temp__4425__auto___45403){
var seq__45324_45404__$1 = temp__4425__auto___45403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45324_45404__$1)){
var c__24968__auto___45405 = cljs.core.chunk_first.call(null,seq__45324_45404__$1);
var G__45406 = cljs.core.chunk_rest.call(null,seq__45324_45404__$1);
var G__45407 = c__24968__auto___45405;
var G__45408 = cljs.core.count.call(null,c__24968__auto___45405);
var G__45409 = (0);
seq__45324_45391 = G__45406;
chunk__45325_45392 = G__45407;
count__45326_45393 = G__45408;
i__45327_45394 = G__45409;
continue;
} else {
var vec__45329_45410 = cljs.core.first.call(null,seq__45324_45404__$1);
var n_45411 = cljs.core.nth.call(null,vec__45329_45410,(0),null);
var meth_45412 = cljs.core.nth.call(null,vec__45329_45410,(1),null);
var c_45413 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_45412));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_45412))){
cljs.compiler.emitln.call(null,mname_45331,".cljs$core$IFn$_invoke$arity$variadic = ",n_45411,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_45331,".cljs$core$IFn$_invoke$arity$",c_45413," = ",n_45411,";");
}

var G__45414 = cljs.core.next.call(null,seq__45324_45404__$1);
var G__45415 = null;
var G__45416 = (0);
var G__45417 = (0);
seq__45324_45391 = G__45414;
chunk__45325_45392 = G__45415;
count__45326_45393 = G__45416;
i__45327_45394 = G__45417;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_45331,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__45418){
var map__45419 = p__45418;
var map__45419__$1 = ((((!((map__45419 == null)))?((((map__45419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45419):map__45419);
var statements = cljs.core.get.call(null,map__45419__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__45419__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__45419__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__24153__auto__ = statements;
if(cljs.core.truth_(and__24153__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__24153__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__45421_45425 = cljs.core.seq.call(null,statements);
var chunk__45422_45426 = null;
var count__45423_45427 = (0);
var i__45424_45428 = (0);
while(true){
if((i__45424_45428 < count__45423_45427)){
var s_45429 = cljs.core._nth.call(null,chunk__45422_45426,i__45424_45428);
cljs.compiler.emitln.call(null,s_45429);

var G__45430 = seq__45421_45425;
var G__45431 = chunk__45422_45426;
var G__45432 = count__45423_45427;
var G__45433 = (i__45424_45428 + (1));
seq__45421_45425 = G__45430;
chunk__45422_45426 = G__45431;
count__45423_45427 = G__45432;
i__45424_45428 = G__45433;
continue;
} else {
var temp__4425__auto___45434 = cljs.core.seq.call(null,seq__45421_45425);
if(temp__4425__auto___45434){
var seq__45421_45435__$1 = temp__4425__auto___45434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45421_45435__$1)){
var c__24968__auto___45436 = cljs.core.chunk_first.call(null,seq__45421_45435__$1);
var G__45437 = cljs.core.chunk_rest.call(null,seq__45421_45435__$1);
var G__45438 = c__24968__auto___45436;
var G__45439 = cljs.core.count.call(null,c__24968__auto___45436);
var G__45440 = (0);
seq__45421_45425 = G__45437;
chunk__45422_45426 = G__45438;
count__45423_45427 = G__45439;
i__45424_45428 = G__45440;
continue;
} else {
var s_45441 = cljs.core.first.call(null,seq__45421_45435__$1);
cljs.compiler.emitln.call(null,s_45441);

var G__45442 = cljs.core.next.call(null,seq__45421_45435__$1);
var G__45443 = null;
var G__45444 = (0);
var G__45445 = (0);
seq__45421_45425 = G__45442;
chunk__45422_45426 = G__45443;
count__45423_45427 = G__45444;
i__45424_45428 = G__45445;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__24153__auto__ = statements;
if(cljs.core.truth_(and__24153__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__24153__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__45446){
var map__45447 = p__45446;
var map__45447__$1 = ((((!((map__45447 == null)))?((((map__45447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45447):map__45447);
var env = cljs.core.get.call(null,map__45447__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__45447__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__45447__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__45447__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__45447__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__24165__auto__ = name;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__45449,is_loop){
var map__45461 = p__45449;
var map__45461__$1 = ((((!((map__45461 == null)))?((((map__45461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45461):map__45461);
var bindings = cljs.core.get.call(null,map__45461__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__45461__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__45461__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_45463_45472 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_45463_45472,context,map__45461,map__45461__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_45463_45472,context,map__45461,map__45461__$1,bindings,expr,env))
,bindings):null));

try{var seq__45464_45473 = cljs.core.seq.call(null,bindings);
var chunk__45465_45474 = null;
var count__45466_45475 = (0);
var i__45467_45476 = (0);
while(true){
if((i__45467_45476 < count__45466_45475)){
var map__45468_45477 = cljs.core._nth.call(null,chunk__45465_45474,i__45467_45476);
var map__45468_45478__$1 = ((((!((map__45468_45477 == null)))?((((map__45468_45477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45468_45477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45468_45477):map__45468_45477);
var binding_45479 = map__45468_45478__$1;
var init_45480 = cljs.core.get.call(null,map__45468_45478__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_45479);

cljs.compiler.emitln.call(null," = ",init_45480,";");

var G__45481 = seq__45464_45473;
var G__45482 = chunk__45465_45474;
var G__45483 = count__45466_45475;
var G__45484 = (i__45467_45476 + (1));
seq__45464_45473 = G__45481;
chunk__45465_45474 = G__45482;
count__45466_45475 = G__45483;
i__45467_45476 = G__45484;
continue;
} else {
var temp__4425__auto___45485 = cljs.core.seq.call(null,seq__45464_45473);
if(temp__4425__auto___45485){
var seq__45464_45486__$1 = temp__4425__auto___45485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45464_45486__$1)){
var c__24968__auto___45487 = cljs.core.chunk_first.call(null,seq__45464_45486__$1);
var G__45488 = cljs.core.chunk_rest.call(null,seq__45464_45486__$1);
var G__45489 = c__24968__auto___45487;
var G__45490 = cljs.core.count.call(null,c__24968__auto___45487);
var G__45491 = (0);
seq__45464_45473 = G__45488;
chunk__45465_45474 = G__45489;
count__45466_45475 = G__45490;
i__45467_45476 = G__45491;
continue;
} else {
var map__45470_45492 = cljs.core.first.call(null,seq__45464_45486__$1);
var map__45470_45493__$1 = ((((!((map__45470_45492 == null)))?((((map__45470_45492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45470_45492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45470_45492):map__45470_45492);
var binding_45494 = map__45470_45493__$1;
var init_45495 = cljs.core.get.call(null,map__45470_45493__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_45494);

cljs.compiler.emitln.call(null," = ",init_45495,";");

var G__45496 = cljs.core.next.call(null,seq__45464_45486__$1);
var G__45497 = null;
var G__45498 = (0);
var G__45499 = (0);
seq__45464_45473 = G__45496;
chunk__45465_45474 = G__45497;
count__45466_45475 = G__45498;
i__45467_45476 = G__45499;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_45463_45472;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__45500){
var map__45501 = p__45500;
var map__45501__$1 = ((((!((map__45501 == null)))?((((map__45501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45501):map__45501);
var frame = cljs.core.get.call(null,map__45501__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__45501__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__45501__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__25068__auto___45503 = cljs.core.count.call(null,exprs);
var i_45504 = (0);
while(true){
if((i_45504 < n__25068__auto___45503)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_45504)," = ",exprs.call(null,i_45504),";");

var G__45505 = (i_45504 + (1));
i_45504 = G__45505;
continue;
} else {
}
break;
}

var n__25068__auto___45506 = cljs.core.count.call(null,exprs);
var i_45507 = (0);
while(true){
if((i_45507 < n__25068__auto___45506)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_45507))," = ",temps.call(null,i_45507),";");

var G__45508 = (i_45507 + (1));
i_45507 = G__45508;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__45509){
var map__45510 = p__45509;
var map__45510__$1 = ((((!((map__45510 == null)))?((((map__45510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45510):map__45510);
var bindings = cljs.core.get.call(null,map__45510__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__45510__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__45510__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__45512_45520 = cljs.core.seq.call(null,bindings);
var chunk__45513_45521 = null;
var count__45514_45522 = (0);
var i__45515_45523 = (0);
while(true){
if((i__45515_45523 < count__45514_45522)){
var map__45516_45524 = cljs.core._nth.call(null,chunk__45513_45521,i__45515_45523);
var map__45516_45525__$1 = ((((!((map__45516_45524 == null)))?((((map__45516_45524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45516_45524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45516_45524):map__45516_45524);
var binding_45526 = map__45516_45525__$1;
var init_45527 = cljs.core.get.call(null,map__45516_45525__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_45526)," = ",init_45527,";");

var G__45528 = seq__45512_45520;
var G__45529 = chunk__45513_45521;
var G__45530 = count__45514_45522;
var G__45531 = (i__45515_45523 + (1));
seq__45512_45520 = G__45528;
chunk__45513_45521 = G__45529;
count__45514_45522 = G__45530;
i__45515_45523 = G__45531;
continue;
} else {
var temp__4425__auto___45532 = cljs.core.seq.call(null,seq__45512_45520);
if(temp__4425__auto___45532){
var seq__45512_45533__$1 = temp__4425__auto___45532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45512_45533__$1)){
var c__24968__auto___45534 = cljs.core.chunk_first.call(null,seq__45512_45533__$1);
var G__45535 = cljs.core.chunk_rest.call(null,seq__45512_45533__$1);
var G__45536 = c__24968__auto___45534;
var G__45537 = cljs.core.count.call(null,c__24968__auto___45534);
var G__45538 = (0);
seq__45512_45520 = G__45535;
chunk__45513_45521 = G__45536;
count__45514_45522 = G__45537;
i__45515_45523 = G__45538;
continue;
} else {
var map__45518_45539 = cljs.core.first.call(null,seq__45512_45533__$1);
var map__45518_45540__$1 = ((((!((map__45518_45539 == null)))?((((map__45518_45539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45518_45539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45518_45539):map__45518_45539);
var binding_45541 = map__45518_45540__$1;
var init_45542 = cljs.core.get.call(null,map__45518_45540__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_45541)," = ",init_45542,";");

var G__45543 = cljs.core.next.call(null,seq__45512_45533__$1);
var G__45544 = null;
var G__45545 = (0);
var G__45546 = (0);
seq__45512_45520 = G__45543;
chunk__45513_45521 = G__45544;
count__45514_45522 = G__45545;
i__45515_45523 = G__45546;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__45549){
var map__45550 = p__45549;
var map__45550__$1 = ((((!((map__45550 == null)))?((((map__45550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45550):map__45550);
var expr = map__45550__$1;
var f = cljs.core.get.call(null,map__45550__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__45550__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__45550__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__24153__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__24153__auto__)){
var and__24153__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__24153__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__24153__auto____$1;
}
} else {
return and__24153__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__24153__auto__ = protocol;
if(cljs.core.truth_(and__24153__auto__)){
var and__24153__auto____$1 = tag;
if(cljs.core.truth_(and__24153__auto____$1)){
var or__24165__auto__ = (function (){var and__24153__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__24153__auto____$2)){
var and__24153__auto____$3 = protocol;
if(cljs.core.truth_(and__24153__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__24153__auto____$3;
}
} else {
return and__24153__auto____$2;
}
})();
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
var and__24153__auto____$2 = (function (){var or__24165__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__24165__auto____$1)){
return or__24165__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__24153__auto____$2)){
var or__24165__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__24165__auto____$1){
return or__24165__auto____$1;
} else {
var and__24153__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__24153__auto____$3){
var and__24153__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__24153__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__24153__auto____$4;
}
} else {
return and__24153__auto____$3;
}
}
} else {
return and__24153__auto____$2;
}
}
} else {
return and__24153__auto____$1;
}
} else {
return and__24153__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__24165__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__24165__auto__){
return or__24165__auto__;
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
var vec__45552 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__24153__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__24153__auto__)){
return (arity > mfa);
} else {
return and__24153__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__45550,map__45550__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__45550,map__45550__$1,expr,f,args,env){
return (function (p1__45547_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__45547_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__45550,map__45550__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__45550,map__45550__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__45550,map__45550__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__45550,map__45550__$1,expr,f,args,env){
return (function (p1__45548_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__45548_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__45550,map__45550__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__45550,map__45550__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__45552,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__45552,(1),null);
var env__29162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_45553 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_45553,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_45554 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_45554,args)),(((mfa_45554 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_45554,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__24165__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
var or__24165__auto____$1 = js_QMARK_;
if(or__24165__auto____$1){
return or__24165__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__24153__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__24153__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__24153__auto__;
}
})())){
var fprop_45555 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_45555," ? ",f__$1,fprop_45555,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__45556){
var map__45557 = p__45556;
var map__45557__$1 = ((((!((map__45557 == null)))?((((map__45557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45557):map__45557);
var ctor = cljs.core.get.call(null,map__45557__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__45557__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__45557__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__45559){
var map__45560 = p__45559;
var map__45560__$1 = ((((!((map__45560 == null)))?((((map__45560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45560):map__45560);
var target = cljs.core.get.call(null,map__45560__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__45560__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__45560__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
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

var seq__45566_45570 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__45567_45571 = null;
var count__45568_45572 = (0);
var i__45569_45573 = (0);
while(true){
if((i__45569_45573 < count__45568_45572)){
var lib_45574 = cljs.core._nth.call(null,chunk__45567_45571,i__45569_45573);
if(cljs.core.truth_((function (){var or__24165__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_45574),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_45574),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24165__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_45574),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_45574),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_45574),"');");

}
}

var G__45575 = seq__45566_45570;
var G__45576 = chunk__45567_45571;
var G__45577 = count__45568_45572;
var G__45578 = (i__45569_45573 + (1));
seq__45566_45570 = G__45575;
chunk__45567_45571 = G__45576;
count__45568_45572 = G__45577;
i__45569_45573 = G__45578;
continue;
} else {
var temp__4425__auto___45579 = cljs.core.seq.call(null,seq__45566_45570);
if(temp__4425__auto___45579){
var seq__45566_45580__$1 = temp__4425__auto___45579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45566_45580__$1)){
var c__24968__auto___45581 = cljs.core.chunk_first.call(null,seq__45566_45580__$1);
var G__45582 = cljs.core.chunk_rest.call(null,seq__45566_45580__$1);
var G__45583 = c__24968__auto___45581;
var G__45584 = cljs.core.count.call(null,c__24968__auto___45581);
var G__45585 = (0);
seq__45566_45570 = G__45582;
chunk__45567_45571 = G__45583;
count__45568_45572 = G__45584;
i__45569_45573 = G__45585;
continue;
} else {
var lib_45586 = cljs.core.first.call(null,seq__45566_45580__$1);
if(cljs.core.truth_((function (){var or__24165__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_45586),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_45586),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24165__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_45586),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_45586),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_45586),"');");

}
}

var G__45587 = cljs.core.next.call(null,seq__45566_45580__$1);
var G__45588 = null;
var G__45589 = (0);
var G__45590 = (0);
seq__45566_45570 = G__45587;
chunk__45567_45571 = G__45588;
count__45568_45572 = G__45589;
i__45569_45573 = G__45590;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__45591){
var map__45592 = p__45591;
var map__45592__$1 = ((((!((map__45592 == null)))?((((map__45592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45592):map__45592);
var name = cljs.core.get.call(null,map__45592__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__45592__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__45592__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__45592__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__45592__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__45592__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__45594){
var map__45595 = p__45594;
var map__45595__$1 = ((((!((map__45595 == null)))?((((map__45595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45595):map__45595);
var t = cljs.core.get.call(null,map__45595__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__45595__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__45595__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__45595__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__45595__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__45597_45611 = cljs.core.seq.call(null,protocols);
var chunk__45598_45612 = null;
var count__45599_45613 = (0);
var i__45600_45614 = (0);
while(true){
if((i__45600_45614 < count__45599_45613)){
var protocol_45615 = cljs.core._nth.call(null,chunk__45598_45612,i__45600_45614);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_45615)].join('')),"}");

var G__45616 = seq__45597_45611;
var G__45617 = chunk__45598_45612;
var G__45618 = count__45599_45613;
var G__45619 = (i__45600_45614 + (1));
seq__45597_45611 = G__45616;
chunk__45598_45612 = G__45617;
count__45599_45613 = G__45618;
i__45600_45614 = G__45619;
continue;
} else {
var temp__4425__auto___45620 = cljs.core.seq.call(null,seq__45597_45611);
if(temp__4425__auto___45620){
var seq__45597_45621__$1 = temp__4425__auto___45620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45597_45621__$1)){
var c__24968__auto___45622 = cljs.core.chunk_first.call(null,seq__45597_45621__$1);
var G__45623 = cljs.core.chunk_rest.call(null,seq__45597_45621__$1);
var G__45624 = c__24968__auto___45622;
var G__45625 = cljs.core.count.call(null,c__24968__auto___45622);
var G__45626 = (0);
seq__45597_45611 = G__45623;
chunk__45598_45612 = G__45624;
count__45599_45613 = G__45625;
i__45600_45614 = G__45626;
continue;
} else {
var protocol_45627 = cljs.core.first.call(null,seq__45597_45621__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_45627)].join('')),"}");

var G__45628 = cljs.core.next.call(null,seq__45597_45621__$1);
var G__45629 = null;
var G__45630 = (0);
var G__45631 = (0);
seq__45597_45611 = G__45628;
chunk__45598_45612 = G__45629;
count__45599_45613 = G__45630;
i__45600_45614 = G__45631;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__45601_45632 = cljs.core.seq.call(null,fields__$1);
var chunk__45602_45633 = null;
var count__45603_45634 = (0);
var i__45604_45635 = (0);
while(true){
if((i__45604_45635 < count__45603_45634)){
var fld_45636 = cljs.core._nth.call(null,chunk__45602_45633,i__45604_45635);
cljs.compiler.emitln.call(null,"this.",fld_45636," = ",fld_45636,";");

var G__45637 = seq__45601_45632;
var G__45638 = chunk__45602_45633;
var G__45639 = count__45603_45634;
var G__45640 = (i__45604_45635 + (1));
seq__45601_45632 = G__45637;
chunk__45602_45633 = G__45638;
count__45603_45634 = G__45639;
i__45604_45635 = G__45640;
continue;
} else {
var temp__4425__auto___45641 = cljs.core.seq.call(null,seq__45601_45632);
if(temp__4425__auto___45641){
var seq__45601_45642__$1 = temp__4425__auto___45641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45601_45642__$1)){
var c__24968__auto___45643 = cljs.core.chunk_first.call(null,seq__45601_45642__$1);
var G__45644 = cljs.core.chunk_rest.call(null,seq__45601_45642__$1);
var G__45645 = c__24968__auto___45643;
var G__45646 = cljs.core.count.call(null,c__24968__auto___45643);
var G__45647 = (0);
seq__45601_45632 = G__45644;
chunk__45602_45633 = G__45645;
count__45603_45634 = G__45646;
i__45604_45635 = G__45647;
continue;
} else {
var fld_45648 = cljs.core.first.call(null,seq__45601_45642__$1);
cljs.compiler.emitln.call(null,"this.",fld_45648," = ",fld_45648,";");

var G__45649 = cljs.core.next.call(null,seq__45601_45642__$1);
var G__45650 = null;
var G__45651 = (0);
var G__45652 = (0);
seq__45601_45632 = G__45649;
chunk__45602_45633 = G__45650;
count__45603_45634 = G__45651;
i__45604_45635 = G__45652;
continue;
}
} else {
}
}
break;
}

var seq__45605_45653 = cljs.core.seq.call(null,pmasks);
var chunk__45606_45654 = null;
var count__45607_45655 = (0);
var i__45608_45656 = (0);
while(true){
if((i__45608_45656 < count__45607_45655)){
var vec__45609_45657 = cljs.core._nth.call(null,chunk__45606_45654,i__45608_45656);
var pno_45658 = cljs.core.nth.call(null,vec__45609_45657,(0),null);
var pmask_45659 = cljs.core.nth.call(null,vec__45609_45657,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_45658,"$ = ",pmask_45659,";");

var G__45660 = seq__45605_45653;
var G__45661 = chunk__45606_45654;
var G__45662 = count__45607_45655;
var G__45663 = (i__45608_45656 + (1));
seq__45605_45653 = G__45660;
chunk__45606_45654 = G__45661;
count__45607_45655 = G__45662;
i__45608_45656 = G__45663;
continue;
} else {
var temp__4425__auto___45664 = cljs.core.seq.call(null,seq__45605_45653);
if(temp__4425__auto___45664){
var seq__45605_45665__$1 = temp__4425__auto___45664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45605_45665__$1)){
var c__24968__auto___45666 = cljs.core.chunk_first.call(null,seq__45605_45665__$1);
var G__45667 = cljs.core.chunk_rest.call(null,seq__45605_45665__$1);
var G__45668 = c__24968__auto___45666;
var G__45669 = cljs.core.count.call(null,c__24968__auto___45666);
var G__45670 = (0);
seq__45605_45653 = G__45667;
chunk__45606_45654 = G__45668;
count__45607_45655 = G__45669;
i__45608_45656 = G__45670;
continue;
} else {
var vec__45610_45671 = cljs.core.first.call(null,seq__45605_45665__$1);
var pno_45672 = cljs.core.nth.call(null,vec__45610_45671,(0),null);
var pmask_45673 = cljs.core.nth.call(null,vec__45610_45671,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_45672,"$ = ",pmask_45673,";");

var G__45674 = cljs.core.next.call(null,seq__45605_45665__$1);
var G__45675 = null;
var G__45676 = (0);
var G__45677 = (0);
seq__45605_45653 = G__45674;
chunk__45606_45654 = G__45675;
count__45607_45655 = G__45676;
i__45608_45656 = G__45677;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__45678){
var map__45679 = p__45678;
var map__45679__$1 = ((((!((map__45679 == null)))?((((map__45679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45679):map__45679);
var t = cljs.core.get.call(null,map__45679__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__45679__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__45679__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__45679__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__45679__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__45681_45695 = cljs.core.seq.call(null,protocols);
var chunk__45682_45696 = null;
var count__45683_45697 = (0);
var i__45684_45698 = (0);
while(true){
if((i__45684_45698 < count__45683_45697)){
var protocol_45699 = cljs.core._nth.call(null,chunk__45682_45696,i__45684_45698);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_45699)].join('')),"}");

var G__45700 = seq__45681_45695;
var G__45701 = chunk__45682_45696;
var G__45702 = count__45683_45697;
var G__45703 = (i__45684_45698 + (1));
seq__45681_45695 = G__45700;
chunk__45682_45696 = G__45701;
count__45683_45697 = G__45702;
i__45684_45698 = G__45703;
continue;
} else {
var temp__4425__auto___45704 = cljs.core.seq.call(null,seq__45681_45695);
if(temp__4425__auto___45704){
var seq__45681_45705__$1 = temp__4425__auto___45704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45681_45705__$1)){
var c__24968__auto___45706 = cljs.core.chunk_first.call(null,seq__45681_45705__$1);
var G__45707 = cljs.core.chunk_rest.call(null,seq__45681_45705__$1);
var G__45708 = c__24968__auto___45706;
var G__45709 = cljs.core.count.call(null,c__24968__auto___45706);
var G__45710 = (0);
seq__45681_45695 = G__45707;
chunk__45682_45696 = G__45708;
count__45683_45697 = G__45709;
i__45684_45698 = G__45710;
continue;
} else {
var protocol_45711 = cljs.core.first.call(null,seq__45681_45705__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_45711)].join('')),"}");

var G__45712 = cljs.core.next.call(null,seq__45681_45705__$1);
var G__45713 = null;
var G__45714 = (0);
var G__45715 = (0);
seq__45681_45695 = G__45712;
chunk__45682_45696 = G__45713;
count__45683_45697 = G__45714;
i__45684_45698 = G__45715;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__45685_45716 = cljs.core.seq.call(null,fields__$1);
var chunk__45686_45717 = null;
var count__45687_45718 = (0);
var i__45688_45719 = (0);
while(true){
if((i__45688_45719 < count__45687_45718)){
var fld_45720 = cljs.core._nth.call(null,chunk__45686_45717,i__45688_45719);
cljs.compiler.emitln.call(null,"this.",fld_45720," = ",fld_45720,";");

var G__45721 = seq__45685_45716;
var G__45722 = chunk__45686_45717;
var G__45723 = count__45687_45718;
var G__45724 = (i__45688_45719 + (1));
seq__45685_45716 = G__45721;
chunk__45686_45717 = G__45722;
count__45687_45718 = G__45723;
i__45688_45719 = G__45724;
continue;
} else {
var temp__4425__auto___45725 = cljs.core.seq.call(null,seq__45685_45716);
if(temp__4425__auto___45725){
var seq__45685_45726__$1 = temp__4425__auto___45725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45685_45726__$1)){
var c__24968__auto___45727 = cljs.core.chunk_first.call(null,seq__45685_45726__$1);
var G__45728 = cljs.core.chunk_rest.call(null,seq__45685_45726__$1);
var G__45729 = c__24968__auto___45727;
var G__45730 = cljs.core.count.call(null,c__24968__auto___45727);
var G__45731 = (0);
seq__45685_45716 = G__45728;
chunk__45686_45717 = G__45729;
count__45687_45718 = G__45730;
i__45688_45719 = G__45731;
continue;
} else {
var fld_45732 = cljs.core.first.call(null,seq__45685_45726__$1);
cljs.compiler.emitln.call(null,"this.",fld_45732," = ",fld_45732,";");

var G__45733 = cljs.core.next.call(null,seq__45685_45726__$1);
var G__45734 = null;
var G__45735 = (0);
var G__45736 = (0);
seq__45685_45716 = G__45733;
chunk__45686_45717 = G__45734;
count__45687_45718 = G__45735;
i__45688_45719 = G__45736;
continue;
}
} else {
}
}
break;
}

var seq__45689_45737 = cljs.core.seq.call(null,pmasks);
var chunk__45690_45738 = null;
var count__45691_45739 = (0);
var i__45692_45740 = (0);
while(true){
if((i__45692_45740 < count__45691_45739)){
var vec__45693_45741 = cljs.core._nth.call(null,chunk__45690_45738,i__45692_45740);
var pno_45742 = cljs.core.nth.call(null,vec__45693_45741,(0),null);
var pmask_45743 = cljs.core.nth.call(null,vec__45693_45741,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_45742,"$ = ",pmask_45743,";");

var G__45744 = seq__45689_45737;
var G__45745 = chunk__45690_45738;
var G__45746 = count__45691_45739;
var G__45747 = (i__45692_45740 + (1));
seq__45689_45737 = G__45744;
chunk__45690_45738 = G__45745;
count__45691_45739 = G__45746;
i__45692_45740 = G__45747;
continue;
} else {
var temp__4425__auto___45748 = cljs.core.seq.call(null,seq__45689_45737);
if(temp__4425__auto___45748){
var seq__45689_45749__$1 = temp__4425__auto___45748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45689_45749__$1)){
var c__24968__auto___45750 = cljs.core.chunk_first.call(null,seq__45689_45749__$1);
var G__45751 = cljs.core.chunk_rest.call(null,seq__45689_45749__$1);
var G__45752 = c__24968__auto___45750;
var G__45753 = cljs.core.count.call(null,c__24968__auto___45750);
var G__45754 = (0);
seq__45689_45737 = G__45751;
chunk__45690_45738 = G__45752;
count__45691_45739 = G__45753;
i__45692_45740 = G__45754;
continue;
} else {
var vec__45694_45755 = cljs.core.first.call(null,seq__45689_45749__$1);
var pno_45756 = cljs.core.nth.call(null,vec__45694_45755,(0),null);
var pmask_45757 = cljs.core.nth.call(null,vec__45694_45755,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_45756,"$ = ",pmask_45757,";");

var G__45758 = cljs.core.next.call(null,seq__45689_45749__$1);
var G__45759 = null;
var G__45760 = (0);
var G__45761 = (0);
seq__45689_45737 = G__45758;
chunk__45690_45738 = G__45759;
count__45691_45739 = G__45760;
i__45692_45740 = G__45761;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__45762){
var map__45763 = p__45762;
var map__45763__$1 = ((((!((map__45763 == null)))?((((map__45763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45763):map__45763);
var target = cljs.core.get.call(null,map__45763__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__45763__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__45763__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__45763__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__45763__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__45765){
var map__45766 = p__45765;
var map__45766__$1 = ((((!((map__45766 == null)))?((((map__45766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45766):map__45766);
var op = cljs.core.get.call(null,map__45766__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__45766__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__45766__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__45766__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__45766__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__24153__auto__ = code;
if(cljs.core.truth_(and__24153__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__24153__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__29162__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29162__auto__))){
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
var seq__45776 = cljs.core.seq.call(null,table);
var chunk__45777 = null;
var count__45778 = (0);
var i__45779 = (0);
while(true){
if((i__45779 < count__45778)){
var vec__45780 = cljs.core._nth.call(null,chunk__45777,i__45779);
var sym = cljs.core.nth.call(null,vec__45780,(0),null);
var value = cljs.core.nth.call(null,vec__45780,(1),null);
var ns_45782 = cljs.core.namespace.call(null,sym);
var name_45783 = cljs.core.name.call(null,sym);
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

var G__45784 = seq__45776;
var G__45785 = chunk__45777;
var G__45786 = count__45778;
var G__45787 = (i__45779 + (1));
seq__45776 = G__45784;
chunk__45777 = G__45785;
count__45778 = G__45786;
i__45779 = G__45787;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__45776);
if(temp__4425__auto__){
var seq__45776__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45776__$1)){
var c__24968__auto__ = cljs.core.chunk_first.call(null,seq__45776__$1);
var G__45788 = cljs.core.chunk_rest.call(null,seq__45776__$1);
var G__45789 = c__24968__auto__;
var G__45790 = cljs.core.count.call(null,c__24968__auto__);
var G__45791 = (0);
seq__45776 = G__45788;
chunk__45777 = G__45789;
count__45778 = G__45790;
i__45779 = G__45791;
continue;
} else {
var vec__45781 = cljs.core.first.call(null,seq__45776__$1);
var sym = cljs.core.nth.call(null,vec__45781,(0),null);
var value = cljs.core.nth.call(null,vec__45781,(1),null);
var ns_45792 = cljs.core.namespace.call(null,sym);
var name_45793 = cljs.core.name.call(null,sym);
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

var G__45794 = cljs.core.next.call(null,seq__45776__$1);
var G__45795 = null;
var G__45796 = (0);
var G__45797 = (0);
seq__45776 = G__45794;
chunk__45777 = G__45795;
count__45778 = G__45796;
i__45779 = G__45797;
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