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
var map__652801 = s;
var map__652801__$1 = ((((!((map__652801 == null)))?((((map__652801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652801):map__652801);
var name = cljs.core.get.call(null,map__652801__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__652801__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__652804 = info;
var map__652805 = G__652804;
var map__652805__$1 = ((((!((map__652805 == null)))?((((map__652805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652805):map__652805);
var shadow = cljs.core.get.call(null,map__652805__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__652804__$1 = G__652804;
while(true){
var d__$2 = d__$1;
var map__652807 = G__652804__$1;
var map__652807__$1 = ((((!((map__652807 == null)))?((((map__652807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652807):map__652807);
var shadow__$1 = cljs.core.get.call(null,map__652807__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__652809 = (d__$2 + (1));
var G__652810 = shadow__$1;
d__$1 = G__652809;
G__652804__$1 = G__652810;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__652811){
var map__652816 = p__652811;
var map__652816__$1 = ((((!((map__652816 == null)))?((((map__652816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652816):map__652816);
var name_var = map__652816__$1;
var name = cljs.core.get.call(null,map__652816__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__652816__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__652818 = info;
var map__652818__$1 = ((((!((map__652818 == null)))?((((map__652818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652818):map__652818);
var ns = cljs.core.get.call(null,map__652818__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__652818__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args652820 = [];
var len__25269__auto___652823 = arguments.length;
var i__25270__auto___652824 = (0);
while(true){
if((i__25270__auto___652824 < len__25269__auto___652823)){
args652820.push((arguments[i__25270__auto___652824]));

var G__652825 = (i__25270__auto___652824 + (1));
i__25270__auto___652824 = G__652825;
continue;
} else {
}
break;
}

var G__652822 = args652820.length;
switch (G__652822) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args652820.length)].join('')));

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
var G__652828 = cp;
switch (G__652828) {
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
var seq__652834_652838 = cljs.core.seq.call(null,s);
var chunk__652835_652839 = null;
var count__652836_652840 = (0);
var i__652837_652841 = (0);
while(true){
if((i__652837_652841 < count__652836_652840)){
var c_652842 = cljs.core._nth.call(null,chunk__652835_652839,i__652837_652841);
sb.append(cljs.compiler.escape_char.call(null,c_652842));

var G__652843 = seq__652834_652838;
var G__652844 = chunk__652835_652839;
var G__652845 = count__652836_652840;
var G__652846 = (i__652837_652841 + (1));
seq__652834_652838 = G__652843;
chunk__652835_652839 = G__652844;
count__652836_652840 = G__652845;
i__652837_652841 = G__652846;
continue;
} else {
var temp__4425__auto___652847 = cljs.core.seq.call(null,seq__652834_652838);
if(temp__4425__auto___652847){
var seq__652834_652848__$1 = temp__4425__auto___652847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652834_652848__$1)){
var c__25014__auto___652849 = cljs.core.chunk_first.call(null,seq__652834_652848__$1);
var G__652850 = cljs.core.chunk_rest.call(null,seq__652834_652848__$1);
var G__652851 = c__25014__auto___652849;
var G__652852 = cljs.core.count.call(null,c__25014__auto___652849);
var G__652853 = (0);
seq__652834_652838 = G__652850;
chunk__652835_652839 = G__652851;
count__652836_652840 = G__652852;
i__652837_652841 = G__652853;
continue;
} else {
var c_652854 = cljs.core.first.call(null,seq__652834_652848__$1);
sb.append(cljs.compiler.escape_char.call(null,c_652854));

var G__652855 = cljs.core.next.call(null,seq__652834_652848__$1);
var G__652856 = null;
var G__652857 = (0);
var G__652858 = (0);
seq__652834_652838 = G__652855;
chunk__652835_652839 = G__652856;
count__652836_652840 = G__652857;
i__652837_652841 = G__652858;
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
var map__652864_652869 = ast;
var map__652864_652870__$1 = ((((!((map__652864_652869 == null)))?((((map__652864_652869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652864_652869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652864_652869):map__652864_652869);
var env_652871 = cljs.core.get.call(null,map__652864_652870__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_652871))){
var map__652866_652872 = env_652871;
var map__652866_652873__$1 = ((((!((map__652866_652872 == null)))?((((map__652866_652872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652866_652872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652866_652872):map__652866_652872);
var line_652874 = cljs.core.get.call(null,map__652866_652873__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_652875 = cljs.core.get.call(null,map__652866_652873__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__652866_652872,map__652866_652873__$1,line_652874,column_652875,map__652864_652869,map__652864_652870__$1,env_652871,val__36322__auto__){
return (function (m){
var minfo = (function (){var G__652868 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__652868__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__652868,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__652868);
return G__652868__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_652874 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__652866_652872,map__652866_652873__$1,line_652874,column_652875,map__652864_652869,map__652864_652870__$1,env_652871,val__36322__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_652875)?(column_652875 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__652866_652872,map__652866_652873__$1,line_652874,column_652875,map__652864_652869,map__652864_652870__$1,env_652871,val__36322__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__652866_652872,map__652866_652873__$1,line_652874,column_652875,map__652864_652869,map__652864_652870__$1,env_652871,val__36322__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__652866_652872,map__652866_652873__$1,line_652874,column_652875,map__652864_652869,map__652864_652870__$1,env_652871,val__36322__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__652866_652872,map__652866_652873__$1,line_652874,column_652875,map__652864_652869,map__652864_652870__$1,env_652871,val__36322__auto__))
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
var len__25269__auto___652882 = arguments.length;
var i__25270__auto___652883 = (0);
while(true){
if((i__25270__auto___652883 < len__25269__auto___652882)){
args__25276__auto__.push((arguments[i__25270__auto___652883]));

var G__652884 = (i__25270__auto___652883 + (1));
i__25270__auto___652883 = G__652884;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((0) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__25277__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__652878_652885 = cljs.core.seq.call(null,xs);
var chunk__652879_652886 = null;
var count__652880_652887 = (0);
var i__652881_652888 = (0);
while(true){
if((i__652881_652888 < count__652880_652887)){
var x_652889 = cljs.core._nth.call(null,chunk__652879_652886,i__652881_652888);
if((x_652889 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_652889)){
cljs.compiler.emit.call(null,x_652889);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_652889)){
cljs.core.apply.call(null,cljs.compiler.emits,x_652889);
} else {
if(goog.isFunction(x_652889)){
x_652889.call(null);
} else {
var s_652890 = cljs.core.print_str.call(null,x_652889);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__652878_652885,chunk__652879_652886,count__652880_652887,i__652881_652888,s_652890,x_652889){
return (function (p1__652876_SHARP_){
return (p1__652876_SHARP_ + cljs.core.count.call(null,s_652890));
});})(seq__652878_652885,chunk__652879_652886,count__652880_652887,i__652881_652888,s_652890,x_652889))
);
}

cljs.core.print.call(null,s_652890);

}
}
}
}

var G__652891 = seq__652878_652885;
var G__652892 = chunk__652879_652886;
var G__652893 = count__652880_652887;
var G__652894 = (i__652881_652888 + (1));
seq__652878_652885 = G__652891;
chunk__652879_652886 = G__652892;
count__652880_652887 = G__652893;
i__652881_652888 = G__652894;
continue;
} else {
var temp__4425__auto___652895 = cljs.core.seq.call(null,seq__652878_652885);
if(temp__4425__auto___652895){
var seq__652878_652896__$1 = temp__4425__auto___652895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652878_652896__$1)){
var c__25014__auto___652897 = cljs.core.chunk_first.call(null,seq__652878_652896__$1);
var G__652898 = cljs.core.chunk_rest.call(null,seq__652878_652896__$1);
var G__652899 = c__25014__auto___652897;
var G__652900 = cljs.core.count.call(null,c__25014__auto___652897);
var G__652901 = (0);
seq__652878_652885 = G__652898;
chunk__652879_652886 = G__652899;
count__652880_652887 = G__652900;
i__652881_652888 = G__652901;
continue;
} else {
var x_652902 = cljs.core.first.call(null,seq__652878_652896__$1);
if((x_652902 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_652902)){
cljs.compiler.emit.call(null,x_652902);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_652902)){
cljs.core.apply.call(null,cljs.compiler.emits,x_652902);
} else {
if(goog.isFunction(x_652902)){
x_652902.call(null);
} else {
var s_652903 = cljs.core.print_str.call(null,x_652902);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__652878_652885,chunk__652879_652886,count__652880_652887,i__652881_652888,s_652903,x_652902,seq__652878_652896__$1,temp__4425__auto___652895){
return (function (p1__652876_SHARP_){
return (p1__652876_SHARP_ + cljs.core.count.call(null,s_652903));
});})(seq__652878_652885,chunk__652879_652886,count__652880_652887,i__652881_652888,s_652903,x_652902,seq__652878_652896__$1,temp__4425__auto___652895))
);
}

cljs.core.print.call(null,s_652903);

}
}
}
}

var G__652904 = cljs.core.next.call(null,seq__652878_652896__$1);
var G__652905 = null;
var G__652906 = (0);
var G__652907 = (0);
seq__652878_652885 = G__652904;
chunk__652879_652886 = G__652905;
count__652880_652887 = G__652906;
i__652881_652888 = G__652907;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq652877){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq652877));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__25276__auto__ = [];
var len__25269__auto___652912 = arguments.length;
var i__25270__auto___652913 = (0);
while(true){
if((i__25270__auto___652913 < len__25269__auto___652912)){
args__25276__auto__.push((arguments[i__25270__auto___652913]));

var G__652914 = (i__25270__auto___652913 + (1));
i__25270__auto___652913 = G__652914;
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
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__652909){
var map__652910 = p__652909;
var map__652910__$1 = ((((!((map__652910 == null)))?((((map__652910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652910):map__652910);
var m = map__652910__$1;
var gen_line = cljs.core.get.call(null,map__652910__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq652908){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq652908));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__25185__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_652917_652919 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_652918_652920 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_652917_652919,_STAR_print_fn_STAR_652918_652920,sb__25185__auto__){
return (function (x__25186__auto__){
return sb__25185__auto__.append(x__25186__auto__);
});})(_STAR_print_newline_STAR_652917_652919,_STAR_print_fn_STAR_652918_652920,sb__25185__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_652918_652920;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_652917_652919;
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
var vec__652921 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__652921,(0),null);
var flags = cljs.core.nth.call(null,vec__652921,(1),null);
var pattern = cljs.core.nth.call(null,vec__652921,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__652923){
var map__652924 = p__652923;
var map__652924__$1 = ((((!((map__652924 == null)))?((((map__652924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652924):map__652924);
var arg = map__652924__$1;
var info = cljs.core.get.call(null,map__652924__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__652924__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__652924__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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

cljs.compiler.emits.call(null,(function (){var G__652926 = info__$1;
var G__652926__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__652926):G__652926);
return G__652926__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__652927){
var map__652928 = p__652927;
var map__652928__$1 = ((((!((map__652928 == null)))?((((map__652928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652928):map__652928);
var arg = map__652928__$1;
var env = cljs.core.get.call(null,map__652928__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__652928__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__652928__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__652928__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__652930 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__652930__$1 = ((((!((map__652930 == null)))?((((map__652930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652930):map__652930);
var name = cljs.core.get.call(null,map__652930__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__652932){
var map__652933 = p__652932;
var map__652933__$1 = ((((!((map__652933 == null)))?((((map__652933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652933):map__652933);
var expr = cljs.core.get.call(null,map__652933__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__652933__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__652933__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return (cljs.core.every_QMARK_.call(null,(function (p1__652935_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__652935_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__652936){
var map__652937 = p__652936;
var map__652937__$1 = ((((!((map__652937 == null)))?((((map__652937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652937):map__652937);
var env = cljs.core.get.call(null,map__652937__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__652937__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__652937__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__652939){
var map__652940 = p__652939;
var map__652940__$1 = ((((!((map__652940 == null)))?((((map__652940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652940):map__652940);
var items = cljs.core.get.call(null,map__652940__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__652940__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__652942){
var map__652943 = p__652942;
var map__652943__$1 = ((((!((map__652943 == null)))?((((map__652943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652943):map__652943);
var items = cljs.core.get.call(null,map__652943__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__652943__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_652945 = cljs.core.count.call(null,items);
if((cnt_652945 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_652945,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
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
return (cljs.core.every_QMARK_.call(null,(function (p1__652946_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__652946_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__652947){
var map__652948 = p__652947;
var map__652948__$1 = ((((!((map__652948 == null)))?((((map__652948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652948):map__652948);
var items = cljs.core.get.call(null,map__652948__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__652948__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__652950){
var map__652951 = p__652950;
var map__652951__$1 = ((((!((map__652951 == null)))?((((map__652951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652951):map__652951);
var items = cljs.core.get.call(null,map__652951__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__652951__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__652951__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___652961 = cljs.core.seq.call(null,items);
if(temp__4425__auto___652961){
var items_652962__$1 = temp__4425__auto___652961;
var vec__652953_652963 = items_652962__$1;
var vec__652954_652964 = cljs.core.nth.call(null,vec__652953_652963,(0),null);
var k_652965 = cljs.core.nth.call(null,vec__652954_652964,(0),null);
var v_652966 = cljs.core.nth.call(null,vec__652954_652964,(1),null);
var r_652967 = cljs.core.nthnext.call(null,vec__652953_652963,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_652965),"\": ",v_652966);

var seq__652955_652968 = cljs.core.seq.call(null,r_652967);
var chunk__652956_652969 = null;
var count__652957_652970 = (0);
var i__652958_652971 = (0);
while(true){
if((i__652958_652971 < count__652957_652970)){
var vec__652959_652972 = cljs.core._nth.call(null,chunk__652956_652969,i__652958_652971);
var k_652973__$1 = cljs.core.nth.call(null,vec__652959_652972,(0),null);
var v_652974__$1 = cljs.core.nth.call(null,vec__652959_652972,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_652973__$1),"\": ",v_652974__$1);

var G__652975 = seq__652955_652968;
var G__652976 = chunk__652956_652969;
var G__652977 = count__652957_652970;
var G__652978 = (i__652958_652971 + (1));
seq__652955_652968 = G__652975;
chunk__652956_652969 = G__652976;
count__652957_652970 = G__652977;
i__652958_652971 = G__652978;
continue;
} else {
var temp__4425__auto___652979__$1 = cljs.core.seq.call(null,seq__652955_652968);
if(temp__4425__auto___652979__$1){
var seq__652955_652980__$1 = temp__4425__auto___652979__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__652955_652980__$1)){
var c__25014__auto___652981 = cljs.core.chunk_first.call(null,seq__652955_652980__$1);
var G__652982 = cljs.core.chunk_rest.call(null,seq__652955_652980__$1);
var G__652983 = c__25014__auto___652981;
var G__652984 = cljs.core.count.call(null,c__25014__auto___652981);
var G__652985 = (0);
seq__652955_652968 = G__652982;
chunk__652956_652969 = G__652983;
count__652957_652970 = G__652984;
i__652958_652971 = G__652985;
continue;
} else {
var vec__652960_652986 = cljs.core.first.call(null,seq__652955_652980__$1);
var k_652987__$1 = cljs.core.nth.call(null,vec__652960_652986,(0),null);
var v_652988__$1 = cljs.core.nth.call(null,vec__652960_652986,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_652987__$1),"\": ",v_652988__$1);

var G__652989 = cljs.core.next.call(null,seq__652955_652980__$1);
var G__652990 = null;
var G__652991 = (0);
var G__652992 = (0);
seq__652955_652968 = G__652989;
chunk__652956_652969 = G__652990;
count__652957_652970 = G__652991;
i__652958_652971 = G__652992;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__652993){
var map__652994 = p__652993;
var map__652994__$1 = ((((!((map__652994 == null)))?((((map__652994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652994):map__652994);
var form = cljs.core.get.call(null,map__652994__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__652994__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__652996){
var map__652999 = p__652996;
var map__652999__$1 = ((((!((map__652999 == null)))?((((map__652999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__652999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__652999):map__652999);
var op = cljs.core.get.call(null,map__652999__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__652999__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__653001){
var map__653004 = p__653001;
var map__653004__$1 = ((((!((map__653004 == null)))?((((map__653004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653004):map__653004);
var op = cljs.core.get.call(null,map__653004__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__653004__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__653006){
var map__653007 = p__653006;
var map__653007__$1 = ((((!((map__653007 == null)))?((((map__653007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653007):map__653007);
var test = cljs.core.get.call(null,map__653007__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__653007__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__653007__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__653007__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__653007__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__653009){
var map__653010 = p__653009;
var map__653010__$1 = ((((!((map__653010 == null)))?((((map__653010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653010):map__653010);
var v = cljs.core.get.call(null,map__653010__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__653010__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__653010__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__653010__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__653010__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__653012_653026 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__653013_653027 = null;
var count__653014_653028 = (0);
var i__653015_653029 = (0);
while(true){
if((i__653015_653029 < count__653014_653028)){
var vec__653016_653030 = cljs.core._nth.call(null,chunk__653013_653027,i__653015_653029);
var ts_653031 = cljs.core.nth.call(null,vec__653016_653030,(0),null);
var then_653032 = cljs.core.nth.call(null,vec__653016_653030,(1),null);
var seq__653017_653033 = cljs.core.seq.call(null,ts_653031);
var chunk__653018_653034 = null;
var count__653019_653035 = (0);
var i__653020_653036 = (0);
while(true){
if((i__653020_653036 < count__653019_653035)){
var test_653037 = cljs.core._nth.call(null,chunk__653018_653034,i__653020_653036);
cljs.compiler.emitln.call(null,"case ",test_653037,":");

var G__653038 = seq__653017_653033;
var G__653039 = chunk__653018_653034;
var G__653040 = count__653019_653035;
var G__653041 = (i__653020_653036 + (1));
seq__653017_653033 = G__653038;
chunk__653018_653034 = G__653039;
count__653019_653035 = G__653040;
i__653020_653036 = G__653041;
continue;
} else {
var temp__4425__auto___653042 = cljs.core.seq.call(null,seq__653017_653033);
if(temp__4425__auto___653042){
var seq__653017_653043__$1 = temp__4425__auto___653042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653017_653043__$1)){
var c__25014__auto___653044 = cljs.core.chunk_first.call(null,seq__653017_653043__$1);
var G__653045 = cljs.core.chunk_rest.call(null,seq__653017_653043__$1);
var G__653046 = c__25014__auto___653044;
var G__653047 = cljs.core.count.call(null,c__25014__auto___653044);
var G__653048 = (0);
seq__653017_653033 = G__653045;
chunk__653018_653034 = G__653046;
count__653019_653035 = G__653047;
i__653020_653036 = G__653048;
continue;
} else {
var test_653049 = cljs.core.first.call(null,seq__653017_653043__$1);
cljs.compiler.emitln.call(null,"case ",test_653049,":");

var G__653050 = cljs.core.next.call(null,seq__653017_653043__$1);
var G__653051 = null;
var G__653052 = (0);
var G__653053 = (0);
seq__653017_653033 = G__653050;
chunk__653018_653034 = G__653051;
count__653019_653035 = G__653052;
i__653020_653036 = G__653053;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_653032);
} else {
cljs.compiler.emitln.call(null,then_653032);
}

cljs.compiler.emitln.call(null,"break;");

var G__653054 = seq__653012_653026;
var G__653055 = chunk__653013_653027;
var G__653056 = count__653014_653028;
var G__653057 = (i__653015_653029 + (1));
seq__653012_653026 = G__653054;
chunk__653013_653027 = G__653055;
count__653014_653028 = G__653056;
i__653015_653029 = G__653057;
continue;
} else {
var temp__4425__auto___653058 = cljs.core.seq.call(null,seq__653012_653026);
if(temp__4425__auto___653058){
var seq__653012_653059__$1 = temp__4425__auto___653058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653012_653059__$1)){
var c__25014__auto___653060 = cljs.core.chunk_first.call(null,seq__653012_653059__$1);
var G__653061 = cljs.core.chunk_rest.call(null,seq__653012_653059__$1);
var G__653062 = c__25014__auto___653060;
var G__653063 = cljs.core.count.call(null,c__25014__auto___653060);
var G__653064 = (0);
seq__653012_653026 = G__653061;
chunk__653013_653027 = G__653062;
count__653014_653028 = G__653063;
i__653015_653029 = G__653064;
continue;
} else {
var vec__653021_653065 = cljs.core.first.call(null,seq__653012_653059__$1);
var ts_653066 = cljs.core.nth.call(null,vec__653021_653065,(0),null);
var then_653067 = cljs.core.nth.call(null,vec__653021_653065,(1),null);
var seq__653022_653068 = cljs.core.seq.call(null,ts_653066);
var chunk__653023_653069 = null;
var count__653024_653070 = (0);
var i__653025_653071 = (0);
while(true){
if((i__653025_653071 < count__653024_653070)){
var test_653072 = cljs.core._nth.call(null,chunk__653023_653069,i__653025_653071);
cljs.compiler.emitln.call(null,"case ",test_653072,":");

var G__653073 = seq__653022_653068;
var G__653074 = chunk__653023_653069;
var G__653075 = count__653024_653070;
var G__653076 = (i__653025_653071 + (1));
seq__653022_653068 = G__653073;
chunk__653023_653069 = G__653074;
count__653024_653070 = G__653075;
i__653025_653071 = G__653076;
continue;
} else {
var temp__4425__auto___653077__$1 = cljs.core.seq.call(null,seq__653022_653068);
if(temp__4425__auto___653077__$1){
var seq__653022_653078__$1 = temp__4425__auto___653077__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653022_653078__$1)){
var c__25014__auto___653079 = cljs.core.chunk_first.call(null,seq__653022_653078__$1);
var G__653080 = cljs.core.chunk_rest.call(null,seq__653022_653078__$1);
var G__653081 = c__25014__auto___653079;
var G__653082 = cljs.core.count.call(null,c__25014__auto___653079);
var G__653083 = (0);
seq__653022_653068 = G__653080;
chunk__653023_653069 = G__653081;
count__653024_653070 = G__653082;
i__653025_653071 = G__653083;
continue;
} else {
var test_653084 = cljs.core.first.call(null,seq__653022_653078__$1);
cljs.compiler.emitln.call(null,"case ",test_653084,":");

var G__653085 = cljs.core.next.call(null,seq__653022_653078__$1);
var G__653086 = null;
var G__653087 = (0);
var G__653088 = (0);
seq__653022_653068 = G__653085;
chunk__653023_653069 = G__653086;
count__653024_653070 = G__653087;
i__653025_653071 = G__653088;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_653067);
} else {
cljs.compiler.emitln.call(null,then_653067);
}

cljs.compiler.emitln.call(null,"break;");

var G__653089 = cljs.core.next.call(null,seq__653012_653059__$1);
var G__653090 = null;
var G__653091 = (0);
var G__653092 = (0);
seq__653012_653026 = G__653089;
chunk__653013_653027 = G__653090;
count__653014_653028 = G__653091;
i__653015_653029 = G__653092;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__653093){
var map__653094 = p__653093;
var map__653094__$1 = ((((!((map__653094 == null)))?((((map__653094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653094):map__653094);
var throw$ = cljs.core.get.call(null,map__653094__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__653094__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__653099 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__653099,(0),null);
var rstr = cljs.core.nth.call(null,vec__653099,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__653099,fstr,rstr,ret_t,axstr){
return (function (p1__653096_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__653096_SHARP_);
});})(idx,vec__653099,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__653100 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
var G__653100__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__653100),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__653100);
return G__653100__$1;
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
return (function (p1__653101_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__653101_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__653104 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__653104,(0),null);
var ts = cljs.core.nth.call(null,vec__653104,(1),null);
var n = cljs.core.nth.call(null,vec__653104,(2),null);
var xs = cljs.core.nthnext.call(null,vec__653104,(3));
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
var vec__653105 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__653105,(0),null);
var ts = cljs.core.nth.call(null,vec__653105,(1),null);
var xs = cljs.core.nthnext.call(null,vec__653105,(2));
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
var args653107 = [];
var len__25269__auto___653134 = arguments.length;
var i__25270__auto___653135 = (0);
while(true){
if((i__25270__auto___653135 < len__25269__auto___653134)){
args653107.push((arguments[i__25270__auto___653135]));

var G__653136 = (i__25270__auto___653135 + (1));
i__25270__auto___653135 = G__653136;
continue;
} else {
}
break;
}

var G__653109 = args653107.length;
switch (G__653109) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args653107.length)].join('')));

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
var vec__653125 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__653106_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__653106_SHARP_);
} else {
return p1__653106_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__653125,(0),null);
var ys = cljs.core.nthnext.call(null,vec__653125,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__653126 = cljs.core.seq.call(null,ys);
var chunk__653127 = null;
var count__653128 = (0);
var i__653129 = (0);
while(true){
if((i__653129 < count__653128)){
var next_line = cljs.core._nth.call(null,chunk__653127,i__653129);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__653138 = seq__653126;
var G__653139 = chunk__653127;
var G__653140 = count__653128;
var G__653141 = (i__653129 + (1));
seq__653126 = G__653138;
chunk__653127 = G__653139;
count__653128 = G__653140;
i__653129 = G__653141;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__653126);
if(temp__4425__auto__){
var seq__653126__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653126__$1)){
var c__25014__auto__ = cljs.core.chunk_first.call(null,seq__653126__$1);
var G__653142 = cljs.core.chunk_rest.call(null,seq__653126__$1);
var G__653143 = c__25014__auto__;
var G__653144 = cljs.core.count.call(null,c__25014__auto__);
var G__653145 = (0);
seq__653126 = G__653142;
chunk__653127 = G__653143;
count__653128 = G__653144;
i__653129 = G__653145;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__653126__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__653146 = cljs.core.next.call(null,seq__653126__$1);
var G__653147 = null;
var G__653148 = (0);
var G__653149 = (0);
seq__653126 = G__653146;
chunk__653127 = G__653147;
count__653128 = G__653148;
i__653129 = G__653149;
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

var seq__653130_653150 = cljs.core.seq.call(null,docs__$2);
var chunk__653131_653151 = null;
var count__653132_653152 = (0);
var i__653133_653153 = (0);
while(true){
if((i__653133_653153 < count__653132_653152)){
var e_653154 = cljs.core._nth.call(null,chunk__653131_653151,i__653133_653153);
if(cljs.core.truth_(e_653154)){
print_comment_lines.call(null,e_653154);
} else {
}

var G__653155 = seq__653130_653150;
var G__653156 = chunk__653131_653151;
var G__653157 = count__653132_653152;
var G__653158 = (i__653133_653153 + (1));
seq__653130_653150 = G__653155;
chunk__653131_653151 = G__653156;
count__653132_653152 = G__653157;
i__653133_653153 = G__653158;
continue;
} else {
var temp__4425__auto___653159 = cljs.core.seq.call(null,seq__653130_653150);
if(temp__4425__auto___653159){
var seq__653130_653160__$1 = temp__4425__auto___653159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653130_653160__$1)){
var c__25014__auto___653161 = cljs.core.chunk_first.call(null,seq__653130_653160__$1);
var G__653162 = cljs.core.chunk_rest.call(null,seq__653130_653160__$1);
var G__653163 = c__25014__auto___653161;
var G__653164 = cljs.core.count.call(null,c__25014__auto___653161);
var G__653165 = (0);
seq__653130_653150 = G__653162;
chunk__653131_653151 = G__653163;
count__653132_653152 = G__653164;
i__653133_653153 = G__653165;
continue;
} else {
var e_653166 = cljs.core.first.call(null,seq__653130_653160__$1);
if(cljs.core.truth_(e_653166)){
print_comment_lines.call(null,e_653166);
} else {
}

var G__653167 = cljs.core.next.call(null,seq__653130_653160__$1);
var G__653168 = null;
var G__653169 = (0);
var G__653170 = (0);
seq__653130_653150 = G__653167;
chunk__653131_653151 = G__653168;
count__653132_653152 = G__653169;
i__653133_653153 = G__653170;
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
return (function (p1__653172_SHARP_){
return goog.string.startsWith(p1__653172_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__653173){
var map__653174 = p__653173;
var map__653174__$1 = ((((!((map__653174 == null)))?((((map__653174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653174):map__653174);
var name = cljs.core.get.call(null,map__653174__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__653174__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__653174__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__653174__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__653174__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__653174__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__653174__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__653174__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__653174__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__653176){
var map__653193 = p__653176;
var map__653193__$1 = ((((!((map__653193 == null)))?((((map__653193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653193):map__653193);
var name = cljs.core.get.call(null,map__653193__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__653193__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__653193__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__653195_653209 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__653196_653210 = null;
var count__653197_653211 = (0);
var i__653198_653212 = (0);
while(true){
if((i__653198_653212 < count__653197_653211)){
var vec__653199_653213 = cljs.core._nth.call(null,chunk__653196_653210,i__653198_653212);
var i_653214 = cljs.core.nth.call(null,vec__653199_653213,(0),null);
var param_653215 = cljs.core.nth.call(null,vec__653199_653213,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_653215);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__653216 = seq__653195_653209;
var G__653217 = chunk__653196_653210;
var G__653218 = count__653197_653211;
var G__653219 = (i__653198_653212 + (1));
seq__653195_653209 = G__653216;
chunk__653196_653210 = G__653217;
count__653197_653211 = G__653218;
i__653198_653212 = G__653219;
continue;
} else {
var temp__4425__auto___653220 = cljs.core.seq.call(null,seq__653195_653209);
if(temp__4425__auto___653220){
var seq__653195_653221__$1 = temp__4425__auto___653220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653195_653221__$1)){
var c__25014__auto___653222 = cljs.core.chunk_first.call(null,seq__653195_653221__$1);
var G__653223 = cljs.core.chunk_rest.call(null,seq__653195_653221__$1);
var G__653224 = c__25014__auto___653222;
var G__653225 = cljs.core.count.call(null,c__25014__auto___653222);
var G__653226 = (0);
seq__653195_653209 = G__653223;
chunk__653196_653210 = G__653224;
count__653197_653211 = G__653225;
i__653198_653212 = G__653226;
continue;
} else {
var vec__653200_653227 = cljs.core.first.call(null,seq__653195_653221__$1);
var i_653228 = cljs.core.nth.call(null,vec__653200_653227,(0),null);
var param_653229 = cljs.core.nth.call(null,vec__653200_653227,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_653229);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__653230 = cljs.core.next.call(null,seq__653195_653221__$1);
var G__653231 = null;
var G__653232 = (0);
var G__653233 = (0);
seq__653195_653209 = G__653230;
chunk__653196_653210 = G__653231;
count__653197_653211 = G__653232;
i__653198_653212 = G__653233;
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

var seq__653201_653234 = cljs.core.seq.call(null,params);
var chunk__653202_653235 = null;
var count__653203_653236 = (0);
var i__653204_653237 = (0);
while(true){
if((i__653204_653237 < count__653203_653236)){
var param_653238 = cljs.core._nth.call(null,chunk__653202_653235,i__653204_653237);
cljs.compiler.emit.call(null,param_653238);

if(cljs.core._EQ_.call(null,param_653238,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__653239 = seq__653201_653234;
var G__653240 = chunk__653202_653235;
var G__653241 = count__653203_653236;
var G__653242 = (i__653204_653237 + (1));
seq__653201_653234 = G__653239;
chunk__653202_653235 = G__653240;
count__653203_653236 = G__653241;
i__653204_653237 = G__653242;
continue;
} else {
var temp__4425__auto___653243 = cljs.core.seq.call(null,seq__653201_653234);
if(temp__4425__auto___653243){
var seq__653201_653244__$1 = temp__4425__auto___653243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653201_653244__$1)){
var c__25014__auto___653245 = cljs.core.chunk_first.call(null,seq__653201_653244__$1);
var G__653246 = cljs.core.chunk_rest.call(null,seq__653201_653244__$1);
var G__653247 = c__25014__auto___653245;
var G__653248 = cljs.core.count.call(null,c__25014__auto___653245);
var G__653249 = (0);
seq__653201_653234 = G__653246;
chunk__653202_653235 = G__653247;
count__653203_653236 = G__653248;
i__653204_653237 = G__653249;
continue;
} else {
var param_653250 = cljs.core.first.call(null,seq__653201_653244__$1);
cljs.compiler.emit.call(null,param_653250);

if(cljs.core._EQ_.call(null,param_653250,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__653251 = cljs.core.next.call(null,seq__653201_653244__$1);
var G__653252 = null;
var G__653253 = (0);
var G__653254 = (0);
seq__653201_653234 = G__653251;
chunk__653202_653235 = G__653252;
count__653203_653236 = G__653253;
i__653204_653237 = G__653254;
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

var seq__653205_653255 = cljs.core.seq.call(null,params);
var chunk__653206_653256 = null;
var count__653207_653257 = (0);
var i__653208_653258 = (0);
while(true){
if((i__653208_653258 < count__653207_653257)){
var param_653259 = cljs.core._nth.call(null,chunk__653206_653256,i__653208_653258);
cljs.compiler.emit.call(null,param_653259);

if(cljs.core._EQ_.call(null,param_653259,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__653260 = seq__653205_653255;
var G__653261 = chunk__653206_653256;
var G__653262 = count__653207_653257;
var G__653263 = (i__653208_653258 + (1));
seq__653205_653255 = G__653260;
chunk__653206_653256 = G__653261;
count__653207_653257 = G__653262;
i__653208_653258 = G__653263;
continue;
} else {
var temp__4425__auto___653264 = cljs.core.seq.call(null,seq__653205_653255);
if(temp__4425__auto___653264){
var seq__653205_653265__$1 = temp__4425__auto___653264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653205_653265__$1)){
var c__25014__auto___653266 = cljs.core.chunk_first.call(null,seq__653205_653265__$1);
var G__653267 = cljs.core.chunk_rest.call(null,seq__653205_653265__$1);
var G__653268 = c__25014__auto___653266;
var G__653269 = cljs.core.count.call(null,c__25014__auto___653266);
var G__653270 = (0);
seq__653205_653255 = G__653267;
chunk__653206_653256 = G__653268;
count__653207_653257 = G__653269;
i__653208_653258 = G__653270;
continue;
} else {
var param_653271 = cljs.core.first.call(null,seq__653205_653265__$1);
cljs.compiler.emit.call(null,param_653271);

if(cljs.core._EQ_.call(null,param_653271,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__653272 = cljs.core.next.call(null,seq__653205_653265__$1);
var G__653273 = null;
var G__653274 = (0);
var G__653275 = (0);
seq__653205_653255 = G__653272;
chunk__653206_653256 = G__653273;
count__653207_653257 = G__653274;
i__653208_653258 = G__653275;
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
var seq__653280 = cljs.core.seq.call(null,params);
var chunk__653281 = null;
var count__653282 = (0);
var i__653283 = (0);
while(true){
if((i__653283 < count__653282)){
var param = cljs.core._nth.call(null,chunk__653281,i__653283);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__653284 = seq__653280;
var G__653285 = chunk__653281;
var G__653286 = count__653282;
var G__653287 = (i__653283 + (1));
seq__653280 = G__653284;
chunk__653281 = G__653285;
count__653282 = G__653286;
i__653283 = G__653287;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__653280);
if(temp__4425__auto__){
var seq__653280__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653280__$1)){
var c__25014__auto__ = cljs.core.chunk_first.call(null,seq__653280__$1);
var G__653288 = cljs.core.chunk_rest.call(null,seq__653280__$1);
var G__653289 = c__25014__auto__;
var G__653290 = cljs.core.count.call(null,c__25014__auto__);
var G__653291 = (0);
seq__653280 = G__653288;
chunk__653281 = G__653289;
count__653282 = G__653290;
i__653283 = G__653291;
continue;
} else {
var param = cljs.core.first.call(null,seq__653280__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__653292 = cljs.core.next.call(null,seq__653280__$1);
var G__653293 = null;
var G__653294 = (0);
var G__653295 = (0);
seq__653280 = G__653292;
chunk__653281 = G__653293;
count__653282 = G__653294;
i__653283 = G__653295;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__653296){
var map__653299 = p__653296;
var map__653299__$1 = ((((!((map__653299 == null)))?((((map__653299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653299):map__653299);
var type = cljs.core.get.call(null,map__653299__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__653299__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__653299__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__653299__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__653299__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__653299__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__653299__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__653299__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__653301){
var map__653312 = p__653301;
var map__653312__$1 = ((((!((map__653312 == null)))?((((map__653312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653312):map__653312);
var f = map__653312__$1;
var type = cljs.core.get.call(null,map__653312__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__653312__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__653312__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__653312__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__653312__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__653312__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__653312__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__653312__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_653322__$1 = (function (){var or__24211__auto__ = name;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_653323 = cljs.compiler.munge.call(null,name_653322__$1);
var delegate_name_653324 = [cljs.core.str(mname_653323),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_653324," = function (");

var seq__653314_653325 = cljs.core.seq.call(null,params);
var chunk__653315_653326 = null;
var count__653316_653327 = (0);
var i__653317_653328 = (0);
while(true){
if((i__653317_653328 < count__653316_653327)){
var param_653329 = cljs.core._nth.call(null,chunk__653315_653326,i__653317_653328);
cljs.compiler.emit.call(null,param_653329);

if(cljs.core._EQ_.call(null,param_653329,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__653330 = seq__653314_653325;
var G__653331 = chunk__653315_653326;
var G__653332 = count__653316_653327;
var G__653333 = (i__653317_653328 + (1));
seq__653314_653325 = G__653330;
chunk__653315_653326 = G__653331;
count__653316_653327 = G__653332;
i__653317_653328 = G__653333;
continue;
} else {
var temp__4425__auto___653334 = cljs.core.seq.call(null,seq__653314_653325);
if(temp__4425__auto___653334){
var seq__653314_653335__$1 = temp__4425__auto___653334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653314_653335__$1)){
var c__25014__auto___653336 = cljs.core.chunk_first.call(null,seq__653314_653335__$1);
var G__653337 = cljs.core.chunk_rest.call(null,seq__653314_653335__$1);
var G__653338 = c__25014__auto___653336;
var G__653339 = cljs.core.count.call(null,c__25014__auto___653336);
var G__653340 = (0);
seq__653314_653325 = G__653337;
chunk__653315_653326 = G__653338;
count__653316_653327 = G__653339;
i__653317_653328 = G__653340;
continue;
} else {
var param_653341 = cljs.core.first.call(null,seq__653314_653335__$1);
cljs.compiler.emit.call(null,param_653341);

if(cljs.core._EQ_.call(null,param_653341,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__653342 = cljs.core.next.call(null,seq__653314_653335__$1);
var G__653343 = null;
var G__653344 = (0);
var G__653345 = (0);
seq__653314_653325 = G__653342;
chunk__653315_653326 = G__653343;
count__653316_653327 = G__653344;
i__653317_653328 = G__653345;
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

cljs.compiler.emitln.call(null,"var ",mname_653323," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_653346 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_653346,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_653324,".call(this,");

var seq__653318_653347 = cljs.core.seq.call(null,params);
var chunk__653319_653348 = null;
var count__653320_653349 = (0);
var i__653321_653350 = (0);
while(true){
if((i__653321_653350 < count__653320_653349)){
var param_653351 = cljs.core._nth.call(null,chunk__653319_653348,i__653321_653350);
cljs.compiler.emit.call(null,param_653351);

if(cljs.core._EQ_.call(null,param_653351,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__653352 = seq__653318_653347;
var G__653353 = chunk__653319_653348;
var G__653354 = count__653320_653349;
var G__653355 = (i__653321_653350 + (1));
seq__653318_653347 = G__653352;
chunk__653319_653348 = G__653353;
count__653320_653349 = G__653354;
i__653321_653350 = G__653355;
continue;
} else {
var temp__4425__auto___653356 = cljs.core.seq.call(null,seq__653318_653347);
if(temp__4425__auto___653356){
var seq__653318_653357__$1 = temp__4425__auto___653356;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653318_653357__$1)){
var c__25014__auto___653358 = cljs.core.chunk_first.call(null,seq__653318_653357__$1);
var G__653359 = cljs.core.chunk_rest.call(null,seq__653318_653357__$1);
var G__653360 = c__25014__auto___653358;
var G__653361 = cljs.core.count.call(null,c__25014__auto___653358);
var G__653362 = (0);
seq__653318_653347 = G__653359;
chunk__653319_653348 = G__653360;
count__653320_653349 = G__653361;
i__653321_653350 = G__653362;
continue;
} else {
var param_653363 = cljs.core.first.call(null,seq__653318_653357__$1);
cljs.compiler.emit.call(null,param_653363);

if(cljs.core._EQ_.call(null,param_653363,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__653364 = cljs.core.next.call(null,seq__653318_653357__$1);
var G__653365 = null;
var G__653366 = (0);
var G__653367 = (0);
seq__653318_653347 = G__653364;
chunk__653319_653348 = G__653365;
count__653320_653349 = G__653366;
i__653321_653350 = G__653367;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_653323,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_653323,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_653322__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_653323,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_653324,";");

cljs.compiler.emitln.call(null,"return ",mname_653323,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__653371){
var map__653372 = p__653371;
var map__653372__$1 = ((((!((map__653372 == null)))?((((map__653372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653372):map__653372);
var name = cljs.core.get.call(null,map__653372__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__653372__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__653372__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__653372__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__653372__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__653372__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__653372__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__653372,map__653372__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__653368_SHARP_){
var and__24199__auto__ = p1__653368_SHARP_;
if(cljs.core.truth_(and__24199__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__653368_SHARP_));
} else {
return and__24199__auto__;
}
});})(map__653372,map__653372__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_653393__$1 = (function (){var or__24211__auto__ = name;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_653394 = cljs.compiler.munge.call(null,name_653393__$1);
var maxparams_653395 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_653396 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_653393__$1,mname_653394,maxparams_653395,loop_locals,map__653372,map__653372__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_653394),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_653393__$1,mname_653394,maxparams_653395,loop_locals,map__653372,map__653372__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_653397 = cljs.core.sort_by.call(null,((function (name_653393__$1,mname_653394,maxparams_653395,mmap_653396,loop_locals,map__653372,map__653372__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__653369_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__653369_SHARP_)));
});})(name_653393__$1,mname_653394,maxparams_653395,mmap_653396,loop_locals,map__653372,map__653372__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_653396));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_653394," = null;");

var seq__653374_653398 = cljs.core.seq.call(null,ms_653397);
var chunk__653375_653399 = null;
var count__653376_653400 = (0);
var i__653377_653401 = (0);
while(true){
if((i__653377_653401 < count__653376_653400)){
var vec__653378_653402 = cljs.core._nth.call(null,chunk__653375_653399,i__653377_653401);
var n_653403 = cljs.core.nth.call(null,vec__653378_653402,(0),null);
var meth_653404 = cljs.core.nth.call(null,vec__653378_653402,(1),null);
cljs.compiler.emits.call(null,"var ",n_653403," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_653404))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_653404);
} else {
cljs.compiler.emit_fn_method.call(null,meth_653404);
}

cljs.compiler.emitln.call(null,";");

var G__653405 = seq__653374_653398;
var G__653406 = chunk__653375_653399;
var G__653407 = count__653376_653400;
var G__653408 = (i__653377_653401 + (1));
seq__653374_653398 = G__653405;
chunk__653375_653399 = G__653406;
count__653376_653400 = G__653407;
i__653377_653401 = G__653408;
continue;
} else {
var temp__4425__auto___653409 = cljs.core.seq.call(null,seq__653374_653398);
if(temp__4425__auto___653409){
var seq__653374_653410__$1 = temp__4425__auto___653409;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653374_653410__$1)){
var c__25014__auto___653411 = cljs.core.chunk_first.call(null,seq__653374_653410__$1);
var G__653412 = cljs.core.chunk_rest.call(null,seq__653374_653410__$1);
var G__653413 = c__25014__auto___653411;
var G__653414 = cljs.core.count.call(null,c__25014__auto___653411);
var G__653415 = (0);
seq__653374_653398 = G__653412;
chunk__653375_653399 = G__653413;
count__653376_653400 = G__653414;
i__653377_653401 = G__653415;
continue;
} else {
var vec__653379_653416 = cljs.core.first.call(null,seq__653374_653410__$1);
var n_653417 = cljs.core.nth.call(null,vec__653379_653416,(0),null);
var meth_653418 = cljs.core.nth.call(null,vec__653379_653416,(1),null);
cljs.compiler.emits.call(null,"var ",n_653417," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_653418))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_653418);
} else {
cljs.compiler.emit_fn_method.call(null,meth_653418);
}

cljs.compiler.emitln.call(null,";");

var G__653419 = cljs.core.next.call(null,seq__653374_653410__$1);
var G__653420 = null;
var G__653421 = (0);
var G__653422 = (0);
seq__653374_653398 = G__653419;
chunk__653375_653399 = G__653420;
count__653376_653400 = G__653421;
i__653377_653401 = G__653422;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_653394," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_653395),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_653395)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_653395));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__653380_653423 = cljs.core.seq.call(null,ms_653397);
var chunk__653381_653424 = null;
var count__653382_653425 = (0);
var i__653383_653426 = (0);
while(true){
if((i__653383_653426 < count__653382_653425)){
var vec__653384_653427 = cljs.core._nth.call(null,chunk__653381_653424,i__653383_653426);
var n_653428 = cljs.core.nth.call(null,vec__653384_653427,(0),null);
var meth_653429 = cljs.core.nth.call(null,vec__653384_653427,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_653429))){
cljs.compiler.emitln.call(null,"default:");

var restarg_653430 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_653430," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_653431 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_653430," = new cljs.core.IndexedSeq(",a_653431,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_653428,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_653395)),(((cljs.core.count.call(null,maxparams_653395) > (1)))?", ":null),restarg_653430,");");
} else {
var pcnt_653432 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_653429));
cljs.compiler.emitln.call(null,"case ",pcnt_653432,":");

cljs.compiler.emitln.call(null,"return ",n_653428,".call(this",(((pcnt_653432 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_653432,maxparams_653395))),",")),");");
}

var G__653433 = seq__653380_653423;
var G__653434 = chunk__653381_653424;
var G__653435 = count__653382_653425;
var G__653436 = (i__653383_653426 + (1));
seq__653380_653423 = G__653433;
chunk__653381_653424 = G__653434;
count__653382_653425 = G__653435;
i__653383_653426 = G__653436;
continue;
} else {
var temp__4425__auto___653437 = cljs.core.seq.call(null,seq__653380_653423);
if(temp__4425__auto___653437){
var seq__653380_653438__$1 = temp__4425__auto___653437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653380_653438__$1)){
var c__25014__auto___653439 = cljs.core.chunk_first.call(null,seq__653380_653438__$1);
var G__653440 = cljs.core.chunk_rest.call(null,seq__653380_653438__$1);
var G__653441 = c__25014__auto___653439;
var G__653442 = cljs.core.count.call(null,c__25014__auto___653439);
var G__653443 = (0);
seq__653380_653423 = G__653440;
chunk__653381_653424 = G__653441;
count__653382_653425 = G__653442;
i__653383_653426 = G__653443;
continue;
} else {
var vec__653385_653444 = cljs.core.first.call(null,seq__653380_653438__$1);
var n_653445 = cljs.core.nth.call(null,vec__653385_653444,(0),null);
var meth_653446 = cljs.core.nth.call(null,vec__653385_653444,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_653446))){
cljs.compiler.emitln.call(null,"default:");

var restarg_653447 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_653447," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_653448 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_653447," = new cljs.core.IndexedSeq(",a_653448,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_653445,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_653395)),(((cljs.core.count.call(null,maxparams_653395) > (1)))?", ":null),restarg_653447,");");
} else {
var pcnt_653449 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_653446));
cljs.compiler.emitln.call(null,"case ",pcnt_653449,":");

cljs.compiler.emitln.call(null,"return ",n_653445,".call(this",(((pcnt_653449 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_653449,maxparams_653395))),",")),");");
}

var G__653450 = cljs.core.next.call(null,seq__653380_653438__$1);
var G__653451 = null;
var G__653452 = (0);
var G__653453 = (0);
seq__653380_653423 = G__653450;
chunk__653381_653424 = G__653451;
count__653382_653425 = G__653452;
i__653383_653426 = G__653453;
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
cljs.compiler.emitln.call(null,mname_653394,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_653394,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_653393__$1,mname_653394,maxparams_653395,mmap_653396,ms_653397,loop_locals,map__653372,map__653372__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__653370_SHARP_){
var vec__653386 = p1__653370_SHARP_;
var n = cljs.core.nth.call(null,vec__653386,(0),null);
var m = cljs.core.nth.call(null,vec__653386,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_653393__$1,mname_653394,maxparams_653395,mmap_653396,ms_653397,loop_locals,map__653372,map__653372__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_653397),".cljs$lang$applyTo;");
} else {
}

var seq__653387_653454 = cljs.core.seq.call(null,ms_653397);
var chunk__653388_653455 = null;
var count__653389_653456 = (0);
var i__653390_653457 = (0);
while(true){
if((i__653390_653457 < count__653389_653456)){
var vec__653391_653458 = cljs.core._nth.call(null,chunk__653388_653455,i__653390_653457);
var n_653459 = cljs.core.nth.call(null,vec__653391_653458,(0),null);
var meth_653460 = cljs.core.nth.call(null,vec__653391_653458,(1),null);
var c_653461 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_653460));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_653460))){
cljs.compiler.emitln.call(null,mname_653394,".cljs$core$IFn$_invoke$arity$variadic = ",n_653459,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_653394,".cljs$core$IFn$_invoke$arity$",c_653461," = ",n_653459,";");
}

var G__653462 = seq__653387_653454;
var G__653463 = chunk__653388_653455;
var G__653464 = count__653389_653456;
var G__653465 = (i__653390_653457 + (1));
seq__653387_653454 = G__653462;
chunk__653388_653455 = G__653463;
count__653389_653456 = G__653464;
i__653390_653457 = G__653465;
continue;
} else {
var temp__4425__auto___653466 = cljs.core.seq.call(null,seq__653387_653454);
if(temp__4425__auto___653466){
var seq__653387_653467__$1 = temp__4425__auto___653466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653387_653467__$1)){
var c__25014__auto___653468 = cljs.core.chunk_first.call(null,seq__653387_653467__$1);
var G__653469 = cljs.core.chunk_rest.call(null,seq__653387_653467__$1);
var G__653470 = c__25014__auto___653468;
var G__653471 = cljs.core.count.call(null,c__25014__auto___653468);
var G__653472 = (0);
seq__653387_653454 = G__653469;
chunk__653388_653455 = G__653470;
count__653389_653456 = G__653471;
i__653390_653457 = G__653472;
continue;
} else {
var vec__653392_653473 = cljs.core.first.call(null,seq__653387_653467__$1);
var n_653474 = cljs.core.nth.call(null,vec__653392_653473,(0),null);
var meth_653475 = cljs.core.nth.call(null,vec__653392_653473,(1),null);
var c_653476 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_653475));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_653475))){
cljs.compiler.emitln.call(null,mname_653394,".cljs$core$IFn$_invoke$arity$variadic = ",n_653474,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_653394,".cljs$core$IFn$_invoke$arity$",c_653476," = ",n_653474,";");
}

var G__653477 = cljs.core.next.call(null,seq__653387_653467__$1);
var G__653478 = null;
var G__653479 = (0);
var G__653480 = (0);
seq__653387_653454 = G__653477;
chunk__653388_653455 = G__653478;
count__653389_653456 = G__653479;
i__653390_653457 = G__653480;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_653394,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__653481){
var map__653482 = p__653481;
var map__653482__$1 = ((((!((map__653482 == null)))?((((map__653482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653482):map__653482);
var statements = cljs.core.get.call(null,map__653482__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__653482__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__653482__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__653484_653488 = cljs.core.seq.call(null,statements);
var chunk__653485_653489 = null;
var count__653486_653490 = (0);
var i__653487_653491 = (0);
while(true){
if((i__653487_653491 < count__653486_653490)){
var s_653492 = cljs.core._nth.call(null,chunk__653485_653489,i__653487_653491);
cljs.compiler.emitln.call(null,s_653492);

var G__653493 = seq__653484_653488;
var G__653494 = chunk__653485_653489;
var G__653495 = count__653486_653490;
var G__653496 = (i__653487_653491 + (1));
seq__653484_653488 = G__653493;
chunk__653485_653489 = G__653494;
count__653486_653490 = G__653495;
i__653487_653491 = G__653496;
continue;
} else {
var temp__4425__auto___653497 = cljs.core.seq.call(null,seq__653484_653488);
if(temp__4425__auto___653497){
var seq__653484_653498__$1 = temp__4425__auto___653497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653484_653498__$1)){
var c__25014__auto___653499 = cljs.core.chunk_first.call(null,seq__653484_653498__$1);
var G__653500 = cljs.core.chunk_rest.call(null,seq__653484_653498__$1);
var G__653501 = c__25014__auto___653499;
var G__653502 = cljs.core.count.call(null,c__25014__auto___653499);
var G__653503 = (0);
seq__653484_653488 = G__653500;
chunk__653485_653489 = G__653501;
count__653486_653490 = G__653502;
i__653487_653491 = G__653503;
continue;
} else {
var s_653504 = cljs.core.first.call(null,seq__653484_653498__$1);
cljs.compiler.emitln.call(null,s_653504);

var G__653505 = cljs.core.next.call(null,seq__653484_653498__$1);
var G__653506 = null;
var G__653507 = (0);
var G__653508 = (0);
seq__653484_653488 = G__653505;
chunk__653485_653489 = G__653506;
count__653486_653490 = G__653507;
i__653487_653491 = G__653508;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__653509){
var map__653510 = p__653509;
var map__653510__$1 = ((((!((map__653510 == null)))?((((map__653510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653510):map__653510);
var env = cljs.core.get.call(null,map__653510__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__653510__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__653510__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__653510__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__653510__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__653512,is_loop){
var map__653524 = p__653512;
var map__653524__$1 = ((((!((map__653524 == null)))?((((map__653524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653524):map__653524);
var bindings = cljs.core.get.call(null,map__653524__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__653524__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__653524__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_653526_653535 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_653526_653535,context,map__653524,map__653524__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_653526_653535,context,map__653524,map__653524__$1,bindings,expr,env))
,bindings):null));

try{var seq__653527_653536 = cljs.core.seq.call(null,bindings);
var chunk__653528_653537 = null;
var count__653529_653538 = (0);
var i__653530_653539 = (0);
while(true){
if((i__653530_653539 < count__653529_653538)){
var map__653531_653540 = cljs.core._nth.call(null,chunk__653528_653537,i__653530_653539);
var map__653531_653541__$1 = ((((!((map__653531_653540 == null)))?((((map__653531_653540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653531_653540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653531_653540):map__653531_653540);
var binding_653542 = map__653531_653541__$1;
var init_653543 = cljs.core.get.call(null,map__653531_653541__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_653542);

cljs.compiler.emitln.call(null," = ",init_653543,";");

var G__653544 = seq__653527_653536;
var G__653545 = chunk__653528_653537;
var G__653546 = count__653529_653538;
var G__653547 = (i__653530_653539 + (1));
seq__653527_653536 = G__653544;
chunk__653528_653537 = G__653545;
count__653529_653538 = G__653546;
i__653530_653539 = G__653547;
continue;
} else {
var temp__4425__auto___653548 = cljs.core.seq.call(null,seq__653527_653536);
if(temp__4425__auto___653548){
var seq__653527_653549__$1 = temp__4425__auto___653548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653527_653549__$1)){
var c__25014__auto___653550 = cljs.core.chunk_first.call(null,seq__653527_653549__$1);
var G__653551 = cljs.core.chunk_rest.call(null,seq__653527_653549__$1);
var G__653552 = c__25014__auto___653550;
var G__653553 = cljs.core.count.call(null,c__25014__auto___653550);
var G__653554 = (0);
seq__653527_653536 = G__653551;
chunk__653528_653537 = G__653552;
count__653529_653538 = G__653553;
i__653530_653539 = G__653554;
continue;
} else {
var map__653533_653555 = cljs.core.first.call(null,seq__653527_653549__$1);
var map__653533_653556__$1 = ((((!((map__653533_653555 == null)))?((((map__653533_653555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653533_653555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653533_653555):map__653533_653555);
var binding_653557 = map__653533_653556__$1;
var init_653558 = cljs.core.get.call(null,map__653533_653556__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_653557);

cljs.compiler.emitln.call(null," = ",init_653558,";");

var G__653559 = cljs.core.next.call(null,seq__653527_653549__$1);
var G__653560 = null;
var G__653561 = (0);
var G__653562 = (0);
seq__653527_653536 = G__653559;
chunk__653528_653537 = G__653560;
count__653529_653538 = G__653561;
i__653530_653539 = G__653562;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_653526_653535;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__653563){
var map__653564 = p__653563;
var map__653564__$1 = ((((!((map__653564 == null)))?((((map__653564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653564):map__653564);
var frame = cljs.core.get.call(null,map__653564__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__653564__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__653564__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__25114__auto___653566 = cljs.core.count.call(null,exprs);
var i_653567 = (0);
while(true){
if((i_653567 < n__25114__auto___653566)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_653567)," = ",exprs.call(null,i_653567),";");

var G__653568 = (i_653567 + (1));
i_653567 = G__653568;
continue;
} else {
}
break;
}

var n__25114__auto___653569 = cljs.core.count.call(null,exprs);
var i_653570 = (0);
while(true){
if((i_653570 < n__25114__auto___653569)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_653570))," = ",temps.call(null,i_653570),";");

var G__653571 = (i_653570 + (1));
i_653570 = G__653571;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__653572){
var map__653573 = p__653572;
var map__653573__$1 = ((((!((map__653573 == null)))?((((map__653573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653573):map__653573);
var bindings = cljs.core.get.call(null,map__653573__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__653573__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__653573__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__653575_653583 = cljs.core.seq.call(null,bindings);
var chunk__653576_653584 = null;
var count__653577_653585 = (0);
var i__653578_653586 = (0);
while(true){
if((i__653578_653586 < count__653577_653585)){
var map__653579_653587 = cljs.core._nth.call(null,chunk__653576_653584,i__653578_653586);
var map__653579_653588__$1 = ((((!((map__653579_653587 == null)))?((((map__653579_653587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653579_653587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653579_653587):map__653579_653587);
var binding_653589 = map__653579_653588__$1;
var init_653590 = cljs.core.get.call(null,map__653579_653588__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_653589)," = ",init_653590,";");

var G__653591 = seq__653575_653583;
var G__653592 = chunk__653576_653584;
var G__653593 = count__653577_653585;
var G__653594 = (i__653578_653586 + (1));
seq__653575_653583 = G__653591;
chunk__653576_653584 = G__653592;
count__653577_653585 = G__653593;
i__653578_653586 = G__653594;
continue;
} else {
var temp__4425__auto___653595 = cljs.core.seq.call(null,seq__653575_653583);
if(temp__4425__auto___653595){
var seq__653575_653596__$1 = temp__4425__auto___653595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653575_653596__$1)){
var c__25014__auto___653597 = cljs.core.chunk_first.call(null,seq__653575_653596__$1);
var G__653598 = cljs.core.chunk_rest.call(null,seq__653575_653596__$1);
var G__653599 = c__25014__auto___653597;
var G__653600 = cljs.core.count.call(null,c__25014__auto___653597);
var G__653601 = (0);
seq__653575_653583 = G__653598;
chunk__653576_653584 = G__653599;
count__653577_653585 = G__653600;
i__653578_653586 = G__653601;
continue;
} else {
var map__653581_653602 = cljs.core.first.call(null,seq__653575_653596__$1);
var map__653581_653603__$1 = ((((!((map__653581_653602 == null)))?((((map__653581_653602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653581_653602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653581_653602):map__653581_653602);
var binding_653604 = map__653581_653603__$1;
var init_653605 = cljs.core.get.call(null,map__653581_653603__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_653604)," = ",init_653605,";");

var G__653606 = cljs.core.next.call(null,seq__653575_653596__$1);
var G__653607 = null;
var G__653608 = (0);
var G__653609 = (0);
seq__653575_653583 = G__653606;
chunk__653576_653584 = G__653607;
count__653577_653585 = G__653608;
i__653578_653586 = G__653609;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__653612){
var map__653613 = p__653612;
var map__653613__$1 = ((((!((map__653613 == null)))?((((map__653613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653613):map__653613);
var expr = map__653613__$1;
var f = cljs.core.get.call(null,map__653613__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__653613__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__653613__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__653615 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__653613,map__653613__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__653613,map__653613__$1,expr,f,args,env){
return (function (p1__653610_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__653610_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__653613,map__653613__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__653613,map__653613__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__653613,map__653613__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__653613,map__653613__$1,expr,f,args,env){
return (function (p1__653611_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__653611_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__653613,map__653613__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__653613,map__653613__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__653615,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__653615,(1),null);
var env__37739__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__37739__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_653616 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_653616,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_653617 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_653617,args)),(((mfa_653617 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_653617,args)),"], 0))");
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
var fprop_653618 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_653618," ? ",f__$1,fprop_653618,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__653619){
var map__653620 = p__653619;
var map__653620__$1 = ((((!((map__653620 == null)))?((((map__653620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653620):map__653620);
var ctor = cljs.core.get.call(null,map__653620__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__653620__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__653620__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__653622){
var map__653623 = p__653622;
var map__653623__$1 = ((((!((map__653623 == null)))?((((map__653623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653623):map__653623);
var target = cljs.core.get.call(null,map__653623__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__653623__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__653623__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__653629_653633 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__653630_653634 = null;
var count__653631_653635 = (0);
var i__653632_653636 = (0);
while(true){
if((i__653632_653636 < count__653631_653635)){
var lib_653637 = cljs.core._nth.call(null,chunk__653630_653634,i__653632_653636);
if(cljs.core.truth_((function (){var or__24211__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_653637),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_653637),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24211__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_653637),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_653637),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_653637),"');");

}
}

var G__653638 = seq__653629_653633;
var G__653639 = chunk__653630_653634;
var G__653640 = count__653631_653635;
var G__653641 = (i__653632_653636 + (1));
seq__653629_653633 = G__653638;
chunk__653630_653634 = G__653639;
count__653631_653635 = G__653640;
i__653632_653636 = G__653641;
continue;
} else {
var temp__4425__auto___653642 = cljs.core.seq.call(null,seq__653629_653633);
if(temp__4425__auto___653642){
var seq__653629_653643__$1 = temp__4425__auto___653642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653629_653643__$1)){
var c__25014__auto___653644 = cljs.core.chunk_first.call(null,seq__653629_653643__$1);
var G__653645 = cljs.core.chunk_rest.call(null,seq__653629_653643__$1);
var G__653646 = c__25014__auto___653644;
var G__653647 = cljs.core.count.call(null,c__25014__auto___653644);
var G__653648 = (0);
seq__653629_653633 = G__653645;
chunk__653630_653634 = G__653646;
count__653631_653635 = G__653647;
i__653632_653636 = G__653648;
continue;
} else {
var lib_653649 = cljs.core.first.call(null,seq__653629_653643__$1);
if(cljs.core.truth_((function (){var or__24211__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_653649),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_653649),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24211__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_653649),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_653649),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_653649),"');");

}
}

var G__653650 = cljs.core.next.call(null,seq__653629_653643__$1);
var G__653651 = null;
var G__653652 = (0);
var G__653653 = (0);
seq__653629_653633 = G__653650;
chunk__653630_653634 = G__653651;
count__653631_653635 = G__653652;
i__653632_653636 = G__653653;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__653654){
var map__653655 = p__653654;
var map__653655__$1 = ((((!((map__653655 == null)))?((((map__653655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653655):map__653655);
var name = cljs.core.get.call(null,map__653655__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__653655__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__653655__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__653655__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__653655__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__653655__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__653657){
var map__653658 = p__653657;
var map__653658__$1 = ((((!((map__653658 == null)))?((((map__653658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653658):map__653658);
var t = cljs.core.get.call(null,map__653658__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__653658__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__653658__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__653658__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__653658__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__653660_653674 = cljs.core.seq.call(null,protocols);
var chunk__653661_653675 = null;
var count__653662_653676 = (0);
var i__653663_653677 = (0);
while(true){
if((i__653663_653677 < count__653662_653676)){
var protocol_653678 = cljs.core._nth.call(null,chunk__653661_653675,i__653663_653677);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_653678)].join('')),"}");

var G__653679 = seq__653660_653674;
var G__653680 = chunk__653661_653675;
var G__653681 = count__653662_653676;
var G__653682 = (i__653663_653677 + (1));
seq__653660_653674 = G__653679;
chunk__653661_653675 = G__653680;
count__653662_653676 = G__653681;
i__653663_653677 = G__653682;
continue;
} else {
var temp__4425__auto___653683 = cljs.core.seq.call(null,seq__653660_653674);
if(temp__4425__auto___653683){
var seq__653660_653684__$1 = temp__4425__auto___653683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653660_653684__$1)){
var c__25014__auto___653685 = cljs.core.chunk_first.call(null,seq__653660_653684__$1);
var G__653686 = cljs.core.chunk_rest.call(null,seq__653660_653684__$1);
var G__653687 = c__25014__auto___653685;
var G__653688 = cljs.core.count.call(null,c__25014__auto___653685);
var G__653689 = (0);
seq__653660_653674 = G__653686;
chunk__653661_653675 = G__653687;
count__653662_653676 = G__653688;
i__653663_653677 = G__653689;
continue;
} else {
var protocol_653690 = cljs.core.first.call(null,seq__653660_653684__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_653690)].join('')),"}");

var G__653691 = cljs.core.next.call(null,seq__653660_653684__$1);
var G__653692 = null;
var G__653693 = (0);
var G__653694 = (0);
seq__653660_653674 = G__653691;
chunk__653661_653675 = G__653692;
count__653662_653676 = G__653693;
i__653663_653677 = G__653694;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__653664_653695 = cljs.core.seq.call(null,fields__$1);
var chunk__653665_653696 = null;
var count__653666_653697 = (0);
var i__653667_653698 = (0);
while(true){
if((i__653667_653698 < count__653666_653697)){
var fld_653699 = cljs.core._nth.call(null,chunk__653665_653696,i__653667_653698);
cljs.compiler.emitln.call(null,"this.",fld_653699," = ",fld_653699,";");

var G__653700 = seq__653664_653695;
var G__653701 = chunk__653665_653696;
var G__653702 = count__653666_653697;
var G__653703 = (i__653667_653698 + (1));
seq__653664_653695 = G__653700;
chunk__653665_653696 = G__653701;
count__653666_653697 = G__653702;
i__653667_653698 = G__653703;
continue;
} else {
var temp__4425__auto___653704 = cljs.core.seq.call(null,seq__653664_653695);
if(temp__4425__auto___653704){
var seq__653664_653705__$1 = temp__4425__auto___653704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653664_653705__$1)){
var c__25014__auto___653706 = cljs.core.chunk_first.call(null,seq__653664_653705__$1);
var G__653707 = cljs.core.chunk_rest.call(null,seq__653664_653705__$1);
var G__653708 = c__25014__auto___653706;
var G__653709 = cljs.core.count.call(null,c__25014__auto___653706);
var G__653710 = (0);
seq__653664_653695 = G__653707;
chunk__653665_653696 = G__653708;
count__653666_653697 = G__653709;
i__653667_653698 = G__653710;
continue;
} else {
var fld_653711 = cljs.core.first.call(null,seq__653664_653705__$1);
cljs.compiler.emitln.call(null,"this.",fld_653711," = ",fld_653711,";");

var G__653712 = cljs.core.next.call(null,seq__653664_653705__$1);
var G__653713 = null;
var G__653714 = (0);
var G__653715 = (0);
seq__653664_653695 = G__653712;
chunk__653665_653696 = G__653713;
count__653666_653697 = G__653714;
i__653667_653698 = G__653715;
continue;
}
} else {
}
}
break;
}

var seq__653668_653716 = cljs.core.seq.call(null,pmasks);
var chunk__653669_653717 = null;
var count__653670_653718 = (0);
var i__653671_653719 = (0);
while(true){
if((i__653671_653719 < count__653670_653718)){
var vec__653672_653720 = cljs.core._nth.call(null,chunk__653669_653717,i__653671_653719);
var pno_653721 = cljs.core.nth.call(null,vec__653672_653720,(0),null);
var pmask_653722 = cljs.core.nth.call(null,vec__653672_653720,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_653721,"$ = ",pmask_653722,";");

var G__653723 = seq__653668_653716;
var G__653724 = chunk__653669_653717;
var G__653725 = count__653670_653718;
var G__653726 = (i__653671_653719 + (1));
seq__653668_653716 = G__653723;
chunk__653669_653717 = G__653724;
count__653670_653718 = G__653725;
i__653671_653719 = G__653726;
continue;
} else {
var temp__4425__auto___653727 = cljs.core.seq.call(null,seq__653668_653716);
if(temp__4425__auto___653727){
var seq__653668_653728__$1 = temp__4425__auto___653727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653668_653728__$1)){
var c__25014__auto___653729 = cljs.core.chunk_first.call(null,seq__653668_653728__$1);
var G__653730 = cljs.core.chunk_rest.call(null,seq__653668_653728__$1);
var G__653731 = c__25014__auto___653729;
var G__653732 = cljs.core.count.call(null,c__25014__auto___653729);
var G__653733 = (0);
seq__653668_653716 = G__653730;
chunk__653669_653717 = G__653731;
count__653670_653718 = G__653732;
i__653671_653719 = G__653733;
continue;
} else {
var vec__653673_653734 = cljs.core.first.call(null,seq__653668_653728__$1);
var pno_653735 = cljs.core.nth.call(null,vec__653673_653734,(0),null);
var pmask_653736 = cljs.core.nth.call(null,vec__653673_653734,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_653735,"$ = ",pmask_653736,";");

var G__653737 = cljs.core.next.call(null,seq__653668_653728__$1);
var G__653738 = null;
var G__653739 = (0);
var G__653740 = (0);
seq__653668_653716 = G__653737;
chunk__653669_653717 = G__653738;
count__653670_653718 = G__653739;
i__653671_653719 = G__653740;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__653741){
var map__653742 = p__653741;
var map__653742__$1 = ((((!((map__653742 == null)))?((((map__653742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653742):map__653742);
var t = cljs.core.get.call(null,map__653742__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__653742__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__653742__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__653742__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__653742__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__653744_653758 = cljs.core.seq.call(null,protocols);
var chunk__653745_653759 = null;
var count__653746_653760 = (0);
var i__653747_653761 = (0);
while(true){
if((i__653747_653761 < count__653746_653760)){
var protocol_653762 = cljs.core._nth.call(null,chunk__653745_653759,i__653747_653761);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_653762)].join('')),"}");

var G__653763 = seq__653744_653758;
var G__653764 = chunk__653745_653759;
var G__653765 = count__653746_653760;
var G__653766 = (i__653747_653761 + (1));
seq__653744_653758 = G__653763;
chunk__653745_653759 = G__653764;
count__653746_653760 = G__653765;
i__653747_653761 = G__653766;
continue;
} else {
var temp__4425__auto___653767 = cljs.core.seq.call(null,seq__653744_653758);
if(temp__4425__auto___653767){
var seq__653744_653768__$1 = temp__4425__auto___653767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653744_653768__$1)){
var c__25014__auto___653769 = cljs.core.chunk_first.call(null,seq__653744_653768__$1);
var G__653770 = cljs.core.chunk_rest.call(null,seq__653744_653768__$1);
var G__653771 = c__25014__auto___653769;
var G__653772 = cljs.core.count.call(null,c__25014__auto___653769);
var G__653773 = (0);
seq__653744_653758 = G__653770;
chunk__653745_653759 = G__653771;
count__653746_653760 = G__653772;
i__653747_653761 = G__653773;
continue;
} else {
var protocol_653774 = cljs.core.first.call(null,seq__653744_653768__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_653774)].join('')),"}");

var G__653775 = cljs.core.next.call(null,seq__653744_653768__$1);
var G__653776 = null;
var G__653777 = (0);
var G__653778 = (0);
seq__653744_653758 = G__653775;
chunk__653745_653759 = G__653776;
count__653746_653760 = G__653777;
i__653747_653761 = G__653778;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__653748_653779 = cljs.core.seq.call(null,fields__$1);
var chunk__653749_653780 = null;
var count__653750_653781 = (0);
var i__653751_653782 = (0);
while(true){
if((i__653751_653782 < count__653750_653781)){
var fld_653783 = cljs.core._nth.call(null,chunk__653749_653780,i__653751_653782);
cljs.compiler.emitln.call(null,"this.",fld_653783," = ",fld_653783,";");

var G__653784 = seq__653748_653779;
var G__653785 = chunk__653749_653780;
var G__653786 = count__653750_653781;
var G__653787 = (i__653751_653782 + (1));
seq__653748_653779 = G__653784;
chunk__653749_653780 = G__653785;
count__653750_653781 = G__653786;
i__653751_653782 = G__653787;
continue;
} else {
var temp__4425__auto___653788 = cljs.core.seq.call(null,seq__653748_653779);
if(temp__4425__auto___653788){
var seq__653748_653789__$1 = temp__4425__auto___653788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653748_653789__$1)){
var c__25014__auto___653790 = cljs.core.chunk_first.call(null,seq__653748_653789__$1);
var G__653791 = cljs.core.chunk_rest.call(null,seq__653748_653789__$1);
var G__653792 = c__25014__auto___653790;
var G__653793 = cljs.core.count.call(null,c__25014__auto___653790);
var G__653794 = (0);
seq__653748_653779 = G__653791;
chunk__653749_653780 = G__653792;
count__653750_653781 = G__653793;
i__653751_653782 = G__653794;
continue;
} else {
var fld_653795 = cljs.core.first.call(null,seq__653748_653789__$1);
cljs.compiler.emitln.call(null,"this.",fld_653795," = ",fld_653795,";");

var G__653796 = cljs.core.next.call(null,seq__653748_653789__$1);
var G__653797 = null;
var G__653798 = (0);
var G__653799 = (0);
seq__653748_653779 = G__653796;
chunk__653749_653780 = G__653797;
count__653750_653781 = G__653798;
i__653751_653782 = G__653799;
continue;
}
} else {
}
}
break;
}

var seq__653752_653800 = cljs.core.seq.call(null,pmasks);
var chunk__653753_653801 = null;
var count__653754_653802 = (0);
var i__653755_653803 = (0);
while(true){
if((i__653755_653803 < count__653754_653802)){
var vec__653756_653804 = cljs.core._nth.call(null,chunk__653753_653801,i__653755_653803);
var pno_653805 = cljs.core.nth.call(null,vec__653756_653804,(0),null);
var pmask_653806 = cljs.core.nth.call(null,vec__653756_653804,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_653805,"$ = ",pmask_653806,";");

var G__653807 = seq__653752_653800;
var G__653808 = chunk__653753_653801;
var G__653809 = count__653754_653802;
var G__653810 = (i__653755_653803 + (1));
seq__653752_653800 = G__653807;
chunk__653753_653801 = G__653808;
count__653754_653802 = G__653809;
i__653755_653803 = G__653810;
continue;
} else {
var temp__4425__auto___653811 = cljs.core.seq.call(null,seq__653752_653800);
if(temp__4425__auto___653811){
var seq__653752_653812__$1 = temp__4425__auto___653811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653752_653812__$1)){
var c__25014__auto___653813 = cljs.core.chunk_first.call(null,seq__653752_653812__$1);
var G__653814 = cljs.core.chunk_rest.call(null,seq__653752_653812__$1);
var G__653815 = c__25014__auto___653813;
var G__653816 = cljs.core.count.call(null,c__25014__auto___653813);
var G__653817 = (0);
seq__653752_653800 = G__653814;
chunk__653753_653801 = G__653815;
count__653754_653802 = G__653816;
i__653755_653803 = G__653817;
continue;
} else {
var vec__653757_653818 = cljs.core.first.call(null,seq__653752_653812__$1);
var pno_653819 = cljs.core.nth.call(null,vec__653757_653818,(0),null);
var pmask_653820 = cljs.core.nth.call(null,vec__653757_653818,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_653819,"$ = ",pmask_653820,";");

var G__653821 = cljs.core.next.call(null,seq__653752_653812__$1);
var G__653822 = null;
var G__653823 = (0);
var G__653824 = (0);
seq__653752_653800 = G__653821;
chunk__653753_653801 = G__653822;
count__653754_653802 = G__653823;
i__653755_653803 = G__653824;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__653825){
var map__653826 = p__653825;
var map__653826__$1 = ((((!((map__653826 == null)))?((((map__653826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653826):map__653826);
var target = cljs.core.get.call(null,map__653826__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__653826__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__653826__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__653826__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__653826__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__653828){
var map__653829 = p__653828;
var map__653829__$1 = ((((!((map__653829 == null)))?((((map__653829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__653829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__653829):map__653829);
var op = cljs.core.get.call(null,map__653829__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__653829__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__653829__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__653829__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__653829__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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
var seq__653839 = cljs.core.seq.call(null,table);
var chunk__653840 = null;
var count__653841 = (0);
var i__653842 = (0);
while(true){
if((i__653842 < count__653841)){
var vec__653843 = cljs.core._nth.call(null,chunk__653840,i__653842);
var sym = cljs.core.nth.call(null,vec__653843,(0),null);
var value = cljs.core.nth.call(null,vec__653843,(1),null);
var ns_653845 = cljs.core.namespace.call(null,sym);
var name_653846 = cljs.core.name.call(null,sym);
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

var G__653847 = seq__653839;
var G__653848 = chunk__653840;
var G__653849 = count__653841;
var G__653850 = (i__653842 + (1));
seq__653839 = G__653847;
chunk__653840 = G__653848;
count__653841 = G__653849;
i__653842 = G__653850;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__653839);
if(temp__4425__auto__){
var seq__653839__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__653839__$1)){
var c__25014__auto__ = cljs.core.chunk_first.call(null,seq__653839__$1);
var G__653851 = cljs.core.chunk_rest.call(null,seq__653839__$1);
var G__653852 = c__25014__auto__;
var G__653853 = cljs.core.count.call(null,c__25014__auto__);
var G__653854 = (0);
seq__653839 = G__653851;
chunk__653840 = G__653852;
count__653841 = G__653853;
i__653842 = G__653854;
continue;
} else {
var vec__653844 = cljs.core.first.call(null,seq__653839__$1);
var sym = cljs.core.nth.call(null,vec__653844,(0),null);
var value = cljs.core.nth.call(null,vec__653844,(1),null);
var ns_653855 = cljs.core.namespace.call(null,sym);
var name_653856 = cljs.core.name.call(null,sym);
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

var G__653857 = cljs.core.next.call(null,seq__653839__$1);
var G__653858 = null;
var G__653859 = (0);
var G__653860 = (0);
seq__653839 = G__653857;
chunk__653840 = G__653858;
count__653841 = G__653859;
i__653842 = G__653860;
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