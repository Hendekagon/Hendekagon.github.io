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
var map__198608 = s;
var map__198608__$1 = ((((!((map__198608 == null)))?((((map__198608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198608):map__198608);
var name = cljs.core.get.call(null,map__198608__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__198608__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__198611 = info;
var map__198612 = G__198611;
var map__198612__$1 = ((((!((map__198612 == null)))?((((map__198612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198612):map__198612);
var shadow = cljs.core.get.call(null,map__198612__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__198611__$1 = G__198611;
while(true){
var d__$2 = d__$1;
var map__198614 = G__198611__$1;
var map__198614__$1 = ((((!((map__198614 == null)))?((((map__198614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198614):map__198614);
var shadow__$1 = cljs.core.get.call(null,map__198614__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__198616 = (d__$2 + (1));
var G__198617 = shadow__$1;
d__$1 = G__198616;
G__198611__$1 = G__198617;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__198618){
var map__198623 = p__198618;
var map__198623__$1 = ((((!((map__198623 == null)))?((((map__198623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198623):map__198623);
var name_var = map__198623__$1;
var name = cljs.core.get.call(null,map__198623__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__198623__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__198625 = info;
var map__198625__$1 = ((((!((map__198625 == null)))?((((map__198625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198625):map__198625);
var ns = cljs.core.get.call(null,map__198625__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__198625__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args198627 = [];
var len__25279__auto___198630 = arguments.length;
var i__25280__auto___198631 = (0);
while(true){
if((i__25280__auto___198631 < len__25279__auto___198630)){
args198627.push((arguments[i__25280__auto___198631]));

var G__198632 = (i__25280__auto___198631 + (1));
i__25280__auto___198631 = G__198632;
continue;
} else {
}
break;
}

var G__198629 = args198627.length;
switch (G__198629) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args198627.length)].join('')));

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
var G__198635 = cp;
switch (G__198635) {
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
var seq__198641_198645 = cljs.core.seq.call(null,s);
var chunk__198642_198646 = null;
var count__198643_198647 = (0);
var i__198644_198648 = (0);
while(true){
if((i__198644_198648 < count__198643_198647)){
var c_198649 = cljs.core._nth.call(null,chunk__198642_198646,i__198644_198648);
sb.append(cljs.compiler.escape_char.call(null,c_198649));

var G__198650 = seq__198641_198645;
var G__198651 = chunk__198642_198646;
var G__198652 = count__198643_198647;
var G__198653 = (i__198644_198648 + (1));
seq__198641_198645 = G__198650;
chunk__198642_198646 = G__198651;
count__198643_198647 = G__198652;
i__198644_198648 = G__198653;
continue;
} else {
var temp__4425__auto___198654 = cljs.core.seq.call(null,seq__198641_198645);
if(temp__4425__auto___198654){
var seq__198641_198655__$1 = temp__4425__auto___198654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198641_198655__$1)){
var c__25024__auto___198656 = cljs.core.chunk_first.call(null,seq__198641_198655__$1);
var G__198657 = cljs.core.chunk_rest.call(null,seq__198641_198655__$1);
var G__198658 = c__25024__auto___198656;
var G__198659 = cljs.core.count.call(null,c__25024__auto___198656);
var G__198660 = (0);
seq__198641_198645 = G__198657;
chunk__198642_198646 = G__198658;
count__198643_198647 = G__198659;
i__198644_198648 = G__198660;
continue;
} else {
var c_198661 = cljs.core.first.call(null,seq__198641_198655__$1);
sb.append(cljs.compiler.escape_char.call(null,c_198661));

var G__198662 = cljs.core.next.call(null,seq__198641_198655__$1);
var G__198663 = null;
var G__198664 = (0);
var G__198665 = (0);
seq__198641_198645 = G__198662;
chunk__198642_198646 = G__198663;
count__198643_198647 = G__198664;
i__198644_198648 = G__198665;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__25134__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25138__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25138__auto__,method_table__25134__auto__,prefer_table__25135__auto__,method_cache__25136__auto__,cached_hierarchy__25137__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__27610__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__27610__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__198671_198676 = ast;
var map__198671_198677__$1 = ((((!((map__198671_198676 == null)))?((((map__198671_198676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198671_198676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198671_198676):map__198671_198676);
var env_198678 = cljs.core.get.call(null,map__198671_198677__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_198678))){
var map__198673_198679 = env_198678;
var map__198673_198680__$1 = ((((!((map__198673_198679 == null)))?((((map__198673_198679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198673_198679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198673_198679):map__198673_198679);
var line_198681 = cljs.core.get.call(null,map__198673_198680__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_198682 = cljs.core.get.call(null,map__198673_198680__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__198673_198679,map__198673_198680__$1,line_198681,column_198682,map__198671_198676,map__198671_198677__$1,env_198678,val__27610__auto__){
return (function (m){
var minfo = (function (){var G__198675 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__198675__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__198675,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__198675);
return G__198675__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_198681 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__198673_198679,map__198673_198680__$1,line_198681,column_198682,map__198671_198676,map__198671_198677__$1,env_198678,val__27610__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_198682)?(column_198682 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__198673_198679,map__198673_198680__$1,line_198681,column_198682,map__198671_198676,map__198671_198677__$1,env_198678,val__27610__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__198673_198679,map__198673_198680__$1,line_198681,column_198682,map__198671_198676,map__198671_198677__$1,env_198678,val__27610__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__198673_198679,map__198673_198680__$1,line_198681,column_198682,map__198671_198676,map__198671_198677__$1,env_198678,val__27610__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__198673_198679,map__198673_198680__$1,line_198681,column_198682,map__198671_198676,map__198671_198677__$1,env_198678,val__27610__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__27610__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__25286__auto__ = [];
var len__25279__auto___198689 = arguments.length;
var i__25280__auto___198690 = (0);
while(true){
if((i__25280__auto___198690 < len__25279__auto___198689)){
args__25286__auto__.push((arguments[i__25280__auto___198690]));

var G__198691 = (i__25280__auto___198690 + (1));
i__25280__auto___198690 = G__198691;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((0) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__25287__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__198685_198692 = cljs.core.seq.call(null,xs);
var chunk__198686_198693 = null;
var count__198687_198694 = (0);
var i__198688_198695 = (0);
while(true){
if((i__198688_198695 < count__198687_198694)){
var x_198696 = cljs.core._nth.call(null,chunk__198686_198693,i__198688_198695);
if((x_198696 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_198696)){
cljs.compiler.emit.call(null,x_198696);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_198696)){
cljs.core.apply.call(null,cljs.compiler.emits,x_198696);
} else {
if(goog.isFunction(x_198696)){
x_198696.call(null);
} else {
var s_198697 = cljs.core.print_str.call(null,x_198696);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__198685_198692,chunk__198686_198693,count__198687_198694,i__198688_198695,s_198697,x_198696){
return (function (p1__198683_SHARP_){
return (p1__198683_SHARP_ + cljs.core.count.call(null,s_198697));
});})(seq__198685_198692,chunk__198686_198693,count__198687_198694,i__198688_198695,s_198697,x_198696))
);
}

cljs.core.print.call(null,s_198697);

}
}
}
}

var G__198698 = seq__198685_198692;
var G__198699 = chunk__198686_198693;
var G__198700 = count__198687_198694;
var G__198701 = (i__198688_198695 + (1));
seq__198685_198692 = G__198698;
chunk__198686_198693 = G__198699;
count__198687_198694 = G__198700;
i__198688_198695 = G__198701;
continue;
} else {
var temp__4425__auto___198702 = cljs.core.seq.call(null,seq__198685_198692);
if(temp__4425__auto___198702){
var seq__198685_198703__$1 = temp__4425__auto___198702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198685_198703__$1)){
var c__25024__auto___198704 = cljs.core.chunk_first.call(null,seq__198685_198703__$1);
var G__198705 = cljs.core.chunk_rest.call(null,seq__198685_198703__$1);
var G__198706 = c__25024__auto___198704;
var G__198707 = cljs.core.count.call(null,c__25024__auto___198704);
var G__198708 = (0);
seq__198685_198692 = G__198705;
chunk__198686_198693 = G__198706;
count__198687_198694 = G__198707;
i__198688_198695 = G__198708;
continue;
} else {
var x_198709 = cljs.core.first.call(null,seq__198685_198703__$1);
if((x_198709 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_198709)){
cljs.compiler.emit.call(null,x_198709);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_198709)){
cljs.core.apply.call(null,cljs.compiler.emits,x_198709);
} else {
if(goog.isFunction(x_198709)){
x_198709.call(null);
} else {
var s_198710 = cljs.core.print_str.call(null,x_198709);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__198685_198692,chunk__198686_198693,count__198687_198694,i__198688_198695,s_198710,x_198709,seq__198685_198703__$1,temp__4425__auto___198702){
return (function (p1__198683_SHARP_){
return (p1__198683_SHARP_ + cljs.core.count.call(null,s_198710));
});})(seq__198685_198692,chunk__198686_198693,count__198687_198694,i__198688_198695,s_198710,x_198709,seq__198685_198703__$1,temp__4425__auto___198702))
);
}

cljs.core.print.call(null,s_198710);

}
}
}
}

var G__198711 = cljs.core.next.call(null,seq__198685_198703__$1);
var G__198712 = null;
var G__198713 = (0);
var G__198714 = (0);
seq__198685_198692 = G__198711;
chunk__198686_198693 = G__198712;
count__198687_198694 = G__198713;
i__198688_198695 = G__198714;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq198684){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq198684));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__25286__auto__ = [];
var len__25279__auto___198719 = arguments.length;
var i__25280__auto___198720 = (0);
while(true){
if((i__25280__auto___198720 < len__25279__auto___198719)){
args__25286__auto__.push((arguments[i__25280__auto___198720]));

var G__198721 = (i__25280__auto___198720 + (1));
i__25280__auto___198720 = G__198721;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((0) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__25287__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__198716){
var map__198717 = p__198716;
var map__198717__$1 = ((((!((map__198717 == null)))?((((map__198717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198717):map__198717);
var m = map__198717__$1;
var gen_line = cljs.core.get.call(null,map__198717__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq198715){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq198715));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__25195__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_198724_198726 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_198725_198727 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_198724_198726,_STAR_print_fn_STAR_198725_198727,sb__25195__auto__){
return (function (x__25196__auto__){
return sb__25195__auto__.append(x__25196__auto__);
});})(_STAR_print_newline_STAR_198724_198726,_STAR_print_fn_STAR_198725_198727,sb__25195__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_198725_198727;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_198724_198726;
}
return [cljs.core.str(sb__25195__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__25134__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25138__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25138__auto__,method_table__25134__auto__,prefer_table__25135__auto__,method_cache__25136__auto__,cached_hierarchy__25137__auto__));
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
var vec__198728 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__198728,(0),null);
var flags = cljs.core.nth.call(null,vec__198728,(1),null);
var pattern = cljs.core.nth.call(null,vec__198728,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__198730){
var map__198731 = p__198730;
var map__198731__$1 = ((((!((map__198731 == null)))?((((map__198731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198731):map__198731);
var arg = map__198731__$1;
var info = cljs.core.get.call(null,map__198731__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__198731__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__198731__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__24221__auto__ = js_module_name;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
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
var env__29027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__198733 = info__$1;
var G__198733__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__198733):G__198733);
return G__198733__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__198734){
var map__198735 = p__198734;
var map__198735__$1 = ((((!((map__198735 == null)))?((((map__198735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198735):map__198735);
var arg = map__198735__$1;
var env = cljs.core.get.call(null,map__198735__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__198735__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__198735__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__198735__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__198737 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__198737__$1 = ((((!((map__198737 == null)))?((((map__198737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198737):map__198737);
var name = cljs.core.get.call(null,map__198737__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__29027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__198739){
var map__198740 = p__198739;
var map__198740__$1 = ((((!((map__198740 == null)))?((((map__198740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198740):map__198740);
var expr = cljs.core.get.call(null,map__198740__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__198740__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__198740__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__198742_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__198742_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__198743){
var map__198744 = p__198743;
var map__198744__$1 = ((((!((map__198744 == null)))?((((map__198744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198744):map__198744);
var env = cljs.core.get.call(null,map__198744__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__198744__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__198744__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__29027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__198746){
var map__198747 = p__198746;
var map__198747__$1 = ((((!((map__198747 == null)))?((((map__198747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198747):map__198747);
var items = cljs.core.get.call(null,map__198747__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__198747__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__198749){
var map__198750 = p__198749;
var map__198750__$1 = ((((!((map__198750 == null)))?((((map__198750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198750):map__198750);
var items = cljs.core.get.call(null,map__198750__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__198750__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_198752 = cljs.core.count.call(null,items);
if((cnt_198752 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_198752,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__198753_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__198753_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__198754){
var map__198755 = p__198754;
var map__198755__$1 = ((((!((map__198755 == null)))?((((map__198755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198755):map__198755);
var items = cljs.core.get.call(null,map__198755__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__198755__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__198757){
var map__198758 = p__198757;
var map__198758__$1 = ((((!((map__198758 == null)))?((((map__198758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198758):map__198758);
var items = cljs.core.get.call(null,map__198758__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__198758__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__198758__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___198768 = cljs.core.seq.call(null,items);
if(temp__4425__auto___198768){
var items_198769__$1 = temp__4425__auto___198768;
var vec__198760_198770 = items_198769__$1;
var vec__198761_198771 = cljs.core.nth.call(null,vec__198760_198770,(0),null);
var k_198772 = cljs.core.nth.call(null,vec__198761_198771,(0),null);
var v_198773 = cljs.core.nth.call(null,vec__198761_198771,(1),null);
var r_198774 = cljs.core.nthnext.call(null,vec__198760_198770,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_198772),"\": ",v_198773);

var seq__198762_198775 = cljs.core.seq.call(null,r_198774);
var chunk__198763_198776 = null;
var count__198764_198777 = (0);
var i__198765_198778 = (0);
while(true){
if((i__198765_198778 < count__198764_198777)){
var vec__198766_198779 = cljs.core._nth.call(null,chunk__198763_198776,i__198765_198778);
var k_198780__$1 = cljs.core.nth.call(null,vec__198766_198779,(0),null);
var v_198781__$1 = cljs.core.nth.call(null,vec__198766_198779,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_198780__$1),"\": ",v_198781__$1);

var G__198782 = seq__198762_198775;
var G__198783 = chunk__198763_198776;
var G__198784 = count__198764_198777;
var G__198785 = (i__198765_198778 + (1));
seq__198762_198775 = G__198782;
chunk__198763_198776 = G__198783;
count__198764_198777 = G__198784;
i__198765_198778 = G__198785;
continue;
} else {
var temp__4425__auto___198786__$1 = cljs.core.seq.call(null,seq__198762_198775);
if(temp__4425__auto___198786__$1){
var seq__198762_198787__$1 = temp__4425__auto___198786__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198762_198787__$1)){
var c__25024__auto___198788 = cljs.core.chunk_first.call(null,seq__198762_198787__$1);
var G__198789 = cljs.core.chunk_rest.call(null,seq__198762_198787__$1);
var G__198790 = c__25024__auto___198788;
var G__198791 = cljs.core.count.call(null,c__25024__auto___198788);
var G__198792 = (0);
seq__198762_198775 = G__198789;
chunk__198763_198776 = G__198790;
count__198764_198777 = G__198791;
i__198765_198778 = G__198792;
continue;
} else {
var vec__198767_198793 = cljs.core.first.call(null,seq__198762_198787__$1);
var k_198794__$1 = cljs.core.nth.call(null,vec__198767_198793,(0),null);
var v_198795__$1 = cljs.core.nth.call(null,vec__198767_198793,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_198794__$1),"\": ",v_198795__$1);

var G__198796 = cljs.core.next.call(null,seq__198762_198787__$1);
var G__198797 = null;
var G__198798 = (0);
var G__198799 = (0);
seq__198762_198775 = G__198796;
chunk__198763_198776 = G__198797;
count__198764_198777 = G__198798;
i__198765_198778 = G__198799;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__198800){
var map__198801 = p__198800;
var map__198801__$1 = ((((!((map__198801 == null)))?((((map__198801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198801):map__198801);
var form = cljs.core.get.call(null,map__198801__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__198801__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__29027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__198803){
var map__198806 = p__198803;
var map__198806__$1 = ((((!((map__198806 == null)))?((((map__198806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198806):map__198806);
var op = cljs.core.get.call(null,map__198806__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__198806__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__24209__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__24209__auto__){
var and__24209__auto____$1 = form;
if(cljs.core.truth_(and__24209__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__24209__auto____$1;
}
} else {
return and__24209__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__198808){
var map__198811 = p__198808;
var map__198811__$1 = ((((!((map__198811 == null)))?((((map__198811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198811):map__198811);
var op = cljs.core.get.call(null,map__198811__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__198811__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__24221__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__198813){
var map__198814 = p__198813;
var map__198814__$1 = ((((!((map__198814 == null)))?((((map__198814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198814):map__198814);
var test = cljs.core.get.call(null,map__198814__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__198814__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__198814__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__198814__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__198814__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__24221__auto__ = unchecked;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__198816){
var map__198817 = p__198816;
var map__198817__$1 = ((((!((map__198817 == null)))?((((map__198817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198817):map__198817);
var v = cljs.core.get.call(null,map__198817__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__198817__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__198817__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__198817__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__198817__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__198819_198833 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__198820_198834 = null;
var count__198821_198835 = (0);
var i__198822_198836 = (0);
while(true){
if((i__198822_198836 < count__198821_198835)){
var vec__198823_198837 = cljs.core._nth.call(null,chunk__198820_198834,i__198822_198836);
var ts_198838 = cljs.core.nth.call(null,vec__198823_198837,(0),null);
var then_198839 = cljs.core.nth.call(null,vec__198823_198837,(1),null);
var seq__198824_198840 = cljs.core.seq.call(null,ts_198838);
var chunk__198825_198841 = null;
var count__198826_198842 = (0);
var i__198827_198843 = (0);
while(true){
if((i__198827_198843 < count__198826_198842)){
var test_198844 = cljs.core._nth.call(null,chunk__198825_198841,i__198827_198843);
cljs.compiler.emitln.call(null,"case ",test_198844,":");

var G__198845 = seq__198824_198840;
var G__198846 = chunk__198825_198841;
var G__198847 = count__198826_198842;
var G__198848 = (i__198827_198843 + (1));
seq__198824_198840 = G__198845;
chunk__198825_198841 = G__198846;
count__198826_198842 = G__198847;
i__198827_198843 = G__198848;
continue;
} else {
var temp__4425__auto___198849 = cljs.core.seq.call(null,seq__198824_198840);
if(temp__4425__auto___198849){
var seq__198824_198850__$1 = temp__4425__auto___198849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198824_198850__$1)){
var c__25024__auto___198851 = cljs.core.chunk_first.call(null,seq__198824_198850__$1);
var G__198852 = cljs.core.chunk_rest.call(null,seq__198824_198850__$1);
var G__198853 = c__25024__auto___198851;
var G__198854 = cljs.core.count.call(null,c__25024__auto___198851);
var G__198855 = (0);
seq__198824_198840 = G__198852;
chunk__198825_198841 = G__198853;
count__198826_198842 = G__198854;
i__198827_198843 = G__198855;
continue;
} else {
var test_198856 = cljs.core.first.call(null,seq__198824_198850__$1);
cljs.compiler.emitln.call(null,"case ",test_198856,":");

var G__198857 = cljs.core.next.call(null,seq__198824_198850__$1);
var G__198858 = null;
var G__198859 = (0);
var G__198860 = (0);
seq__198824_198840 = G__198857;
chunk__198825_198841 = G__198858;
count__198826_198842 = G__198859;
i__198827_198843 = G__198860;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_198839);
} else {
cljs.compiler.emitln.call(null,then_198839);
}

cljs.compiler.emitln.call(null,"break;");

var G__198861 = seq__198819_198833;
var G__198862 = chunk__198820_198834;
var G__198863 = count__198821_198835;
var G__198864 = (i__198822_198836 + (1));
seq__198819_198833 = G__198861;
chunk__198820_198834 = G__198862;
count__198821_198835 = G__198863;
i__198822_198836 = G__198864;
continue;
} else {
var temp__4425__auto___198865 = cljs.core.seq.call(null,seq__198819_198833);
if(temp__4425__auto___198865){
var seq__198819_198866__$1 = temp__4425__auto___198865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198819_198866__$1)){
var c__25024__auto___198867 = cljs.core.chunk_first.call(null,seq__198819_198866__$1);
var G__198868 = cljs.core.chunk_rest.call(null,seq__198819_198866__$1);
var G__198869 = c__25024__auto___198867;
var G__198870 = cljs.core.count.call(null,c__25024__auto___198867);
var G__198871 = (0);
seq__198819_198833 = G__198868;
chunk__198820_198834 = G__198869;
count__198821_198835 = G__198870;
i__198822_198836 = G__198871;
continue;
} else {
var vec__198828_198872 = cljs.core.first.call(null,seq__198819_198866__$1);
var ts_198873 = cljs.core.nth.call(null,vec__198828_198872,(0),null);
var then_198874 = cljs.core.nth.call(null,vec__198828_198872,(1),null);
var seq__198829_198875 = cljs.core.seq.call(null,ts_198873);
var chunk__198830_198876 = null;
var count__198831_198877 = (0);
var i__198832_198878 = (0);
while(true){
if((i__198832_198878 < count__198831_198877)){
var test_198879 = cljs.core._nth.call(null,chunk__198830_198876,i__198832_198878);
cljs.compiler.emitln.call(null,"case ",test_198879,":");

var G__198880 = seq__198829_198875;
var G__198881 = chunk__198830_198876;
var G__198882 = count__198831_198877;
var G__198883 = (i__198832_198878 + (1));
seq__198829_198875 = G__198880;
chunk__198830_198876 = G__198881;
count__198831_198877 = G__198882;
i__198832_198878 = G__198883;
continue;
} else {
var temp__4425__auto___198884__$1 = cljs.core.seq.call(null,seq__198829_198875);
if(temp__4425__auto___198884__$1){
var seq__198829_198885__$1 = temp__4425__auto___198884__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198829_198885__$1)){
var c__25024__auto___198886 = cljs.core.chunk_first.call(null,seq__198829_198885__$1);
var G__198887 = cljs.core.chunk_rest.call(null,seq__198829_198885__$1);
var G__198888 = c__25024__auto___198886;
var G__198889 = cljs.core.count.call(null,c__25024__auto___198886);
var G__198890 = (0);
seq__198829_198875 = G__198887;
chunk__198830_198876 = G__198888;
count__198831_198877 = G__198889;
i__198832_198878 = G__198890;
continue;
} else {
var test_198891 = cljs.core.first.call(null,seq__198829_198885__$1);
cljs.compiler.emitln.call(null,"case ",test_198891,":");

var G__198892 = cljs.core.next.call(null,seq__198829_198885__$1);
var G__198893 = null;
var G__198894 = (0);
var G__198895 = (0);
seq__198829_198875 = G__198892;
chunk__198830_198876 = G__198893;
count__198831_198877 = G__198894;
i__198832_198878 = G__198895;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_198874);
} else {
cljs.compiler.emitln.call(null,then_198874);
}

cljs.compiler.emitln.call(null,"break;");

var G__198896 = cljs.core.next.call(null,seq__198819_198866__$1);
var G__198897 = null;
var G__198898 = (0);
var G__198899 = (0);
seq__198819_198833 = G__198896;
chunk__198820_198834 = G__198897;
count__198821_198835 = G__198898;
i__198822_198836 = G__198899;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__198900){
var map__198901 = p__198900;
var map__198901__$1 = ((((!((map__198901 == null)))?((((map__198901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198901):map__198901);
var throw$ = cljs.core.get.call(null,map__198901__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__198901__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__198906 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__198906,(0),null);
var rstr = cljs.core.nth.call(null,vec__198906,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__198906,fstr,rstr,ret_t,axstr){
return (function (p1__198903_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__198903_SHARP_);
});})(idx,vec__198906,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__198907 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
var G__198907__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__198907),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__198907);
return G__198907__$1;
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
return (function (p1__198908_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__198908_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__198911 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__198911,(0),null);
var ts = cljs.core.nth.call(null,vec__198911,(1),null);
var n = cljs.core.nth.call(null,vec__198911,(2),null);
var xs = cljs.core.nthnext.call(null,vec__198911,(3));
if(cljs.core.truth_((function (){var and__24209__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__24209__auto__){
var and__24209__auto____$1 = ts;
if(cljs.core.truth_(and__24209__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__24209__auto____$1;
}
} else {
return and__24209__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__198912 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__198912,(0),null);
var ts = cljs.core.nth.call(null,vec__198912,(1),null);
var xs = cljs.core.nthnext.call(null,vec__198912,(2));
if(cljs.core.truth_((function (){var and__24209__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__24209__auto__){
var and__24209__auto____$1 = ts;
if(cljs.core.truth_(and__24209__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__24209__auto____$1;
}
} else {
return and__24209__auto__;
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
var args198914 = [];
var len__25279__auto___198941 = arguments.length;
var i__25280__auto___198942 = (0);
while(true){
if((i__25280__auto___198942 < len__25279__auto___198941)){
args198914.push((arguments[i__25280__auto___198942]));

var G__198943 = (i__25280__auto___198942 + (1));
i__25280__auto___198942 = G__198943;
continue;
} else {
}
break;
}

var G__198916 = args198914.length;
switch (G__198916) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args198914.length)].join('')));

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
var vec__198932 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__198913_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__198913_SHARP_);
} else {
return p1__198913_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__198932,(0),null);
var ys = cljs.core.nthnext.call(null,vec__198932,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__198933 = cljs.core.seq.call(null,ys);
var chunk__198934 = null;
var count__198935 = (0);
var i__198936 = (0);
while(true){
if((i__198936 < count__198935)){
var next_line = cljs.core._nth.call(null,chunk__198934,i__198936);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__198945 = seq__198933;
var G__198946 = chunk__198934;
var G__198947 = count__198935;
var G__198948 = (i__198936 + (1));
seq__198933 = G__198945;
chunk__198934 = G__198946;
count__198935 = G__198947;
i__198936 = G__198948;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__198933);
if(temp__4425__auto__){
var seq__198933__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198933__$1)){
var c__25024__auto__ = cljs.core.chunk_first.call(null,seq__198933__$1);
var G__198949 = cljs.core.chunk_rest.call(null,seq__198933__$1);
var G__198950 = c__25024__auto__;
var G__198951 = cljs.core.count.call(null,c__25024__auto__);
var G__198952 = (0);
seq__198933 = G__198949;
chunk__198934 = G__198950;
count__198935 = G__198951;
i__198936 = G__198952;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__198933__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__198953 = cljs.core.next.call(null,seq__198933__$1);
var G__198954 = null;
var G__198955 = (0);
var G__198956 = (0);
seq__198933 = G__198953;
chunk__198934 = G__198954;
count__198935 = G__198955;
i__198936 = G__198956;
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

var seq__198937_198957 = cljs.core.seq.call(null,docs__$2);
var chunk__198938_198958 = null;
var count__198939_198959 = (0);
var i__198940_198960 = (0);
while(true){
if((i__198940_198960 < count__198939_198959)){
var e_198961 = cljs.core._nth.call(null,chunk__198938_198958,i__198940_198960);
if(cljs.core.truth_(e_198961)){
print_comment_lines.call(null,e_198961);
} else {
}

var G__198962 = seq__198937_198957;
var G__198963 = chunk__198938_198958;
var G__198964 = count__198939_198959;
var G__198965 = (i__198940_198960 + (1));
seq__198937_198957 = G__198962;
chunk__198938_198958 = G__198963;
count__198939_198959 = G__198964;
i__198940_198960 = G__198965;
continue;
} else {
var temp__4425__auto___198966 = cljs.core.seq.call(null,seq__198937_198957);
if(temp__4425__auto___198966){
var seq__198937_198967__$1 = temp__4425__auto___198966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__198937_198967__$1)){
var c__25024__auto___198968 = cljs.core.chunk_first.call(null,seq__198937_198967__$1);
var G__198969 = cljs.core.chunk_rest.call(null,seq__198937_198967__$1);
var G__198970 = c__25024__auto___198968;
var G__198971 = cljs.core.count.call(null,c__25024__auto___198968);
var G__198972 = (0);
seq__198937_198957 = G__198969;
chunk__198938_198958 = G__198970;
count__198939_198959 = G__198971;
i__198940_198960 = G__198972;
continue;
} else {
var e_198973 = cljs.core.first.call(null,seq__198937_198967__$1);
if(cljs.core.truth_(e_198973)){
print_comment_lines.call(null,e_198973);
} else {
}

var G__198974 = cljs.core.next.call(null,seq__198937_198967__$1);
var G__198975 = null;
var G__198976 = (0);
var G__198977 = (0);
seq__198937_198957 = G__198974;
chunk__198938_198958 = G__198975;
count__198939_198959 = G__198976;
i__198940_198960 = G__198977;
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
var and__24209__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__198979_SHARP_){
return goog.string.startsWith(p1__198979_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__24209__auto__)){
var and__24209__auto____$1 = opts;
if(cljs.core.truth_(and__24209__auto____$1)){
var and__24209__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__24209__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__24209__auto____$2;
}
} else {
return and__24209__auto____$1;
}
} else {
return and__24209__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__198980){
var map__198981 = p__198980;
var map__198981__$1 = ((((!((map__198981 == null)))?((((map__198981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__198981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198981):map__198981);
var name = cljs.core.get.call(null,map__198981__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__198981__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__198981__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__198981__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__198981__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__198981__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__198981__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__198981__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__198981__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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

if(cljs.core.truth_((function (){var and__24209__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__24209__auto__)){
return test;
} else {
return and__24209__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__198983){
var map__199000 = p__198983;
var map__199000__$1 = ((((!((map__199000 == null)))?((((map__199000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199000):map__199000);
var name = cljs.core.get.call(null,map__199000__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__199000__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__199000__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__199002_199016 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__199003_199017 = null;
var count__199004_199018 = (0);
var i__199005_199019 = (0);
while(true){
if((i__199005_199019 < count__199004_199018)){
var vec__199006_199020 = cljs.core._nth.call(null,chunk__199003_199017,i__199005_199019);
var i_199021 = cljs.core.nth.call(null,vec__199006_199020,(0),null);
var param_199022 = cljs.core.nth.call(null,vec__199006_199020,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_199022);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__199023 = seq__199002_199016;
var G__199024 = chunk__199003_199017;
var G__199025 = count__199004_199018;
var G__199026 = (i__199005_199019 + (1));
seq__199002_199016 = G__199023;
chunk__199003_199017 = G__199024;
count__199004_199018 = G__199025;
i__199005_199019 = G__199026;
continue;
} else {
var temp__4425__auto___199027 = cljs.core.seq.call(null,seq__199002_199016);
if(temp__4425__auto___199027){
var seq__199002_199028__$1 = temp__4425__auto___199027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199002_199028__$1)){
var c__25024__auto___199029 = cljs.core.chunk_first.call(null,seq__199002_199028__$1);
var G__199030 = cljs.core.chunk_rest.call(null,seq__199002_199028__$1);
var G__199031 = c__25024__auto___199029;
var G__199032 = cljs.core.count.call(null,c__25024__auto___199029);
var G__199033 = (0);
seq__199002_199016 = G__199030;
chunk__199003_199017 = G__199031;
count__199004_199018 = G__199032;
i__199005_199019 = G__199033;
continue;
} else {
var vec__199007_199034 = cljs.core.first.call(null,seq__199002_199028__$1);
var i_199035 = cljs.core.nth.call(null,vec__199007_199034,(0),null);
var param_199036 = cljs.core.nth.call(null,vec__199007_199034,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_199036);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__199037 = cljs.core.next.call(null,seq__199002_199028__$1);
var G__199038 = null;
var G__199039 = (0);
var G__199040 = (0);
seq__199002_199016 = G__199037;
chunk__199003_199017 = G__199038;
count__199004_199018 = G__199039;
i__199005_199019 = G__199040;
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

var seq__199008_199041 = cljs.core.seq.call(null,params);
var chunk__199009_199042 = null;
var count__199010_199043 = (0);
var i__199011_199044 = (0);
while(true){
if((i__199011_199044 < count__199010_199043)){
var param_199045 = cljs.core._nth.call(null,chunk__199009_199042,i__199011_199044);
cljs.compiler.emit.call(null,param_199045);

if(cljs.core._EQ_.call(null,param_199045,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__199046 = seq__199008_199041;
var G__199047 = chunk__199009_199042;
var G__199048 = count__199010_199043;
var G__199049 = (i__199011_199044 + (1));
seq__199008_199041 = G__199046;
chunk__199009_199042 = G__199047;
count__199010_199043 = G__199048;
i__199011_199044 = G__199049;
continue;
} else {
var temp__4425__auto___199050 = cljs.core.seq.call(null,seq__199008_199041);
if(temp__4425__auto___199050){
var seq__199008_199051__$1 = temp__4425__auto___199050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199008_199051__$1)){
var c__25024__auto___199052 = cljs.core.chunk_first.call(null,seq__199008_199051__$1);
var G__199053 = cljs.core.chunk_rest.call(null,seq__199008_199051__$1);
var G__199054 = c__25024__auto___199052;
var G__199055 = cljs.core.count.call(null,c__25024__auto___199052);
var G__199056 = (0);
seq__199008_199041 = G__199053;
chunk__199009_199042 = G__199054;
count__199010_199043 = G__199055;
i__199011_199044 = G__199056;
continue;
} else {
var param_199057 = cljs.core.first.call(null,seq__199008_199051__$1);
cljs.compiler.emit.call(null,param_199057);

if(cljs.core._EQ_.call(null,param_199057,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__199058 = cljs.core.next.call(null,seq__199008_199051__$1);
var G__199059 = null;
var G__199060 = (0);
var G__199061 = (0);
seq__199008_199041 = G__199058;
chunk__199009_199042 = G__199059;
count__199010_199043 = G__199060;
i__199011_199044 = G__199061;
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

var seq__199012_199062 = cljs.core.seq.call(null,params);
var chunk__199013_199063 = null;
var count__199014_199064 = (0);
var i__199015_199065 = (0);
while(true){
if((i__199015_199065 < count__199014_199064)){
var param_199066 = cljs.core._nth.call(null,chunk__199013_199063,i__199015_199065);
cljs.compiler.emit.call(null,param_199066);

if(cljs.core._EQ_.call(null,param_199066,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__199067 = seq__199012_199062;
var G__199068 = chunk__199013_199063;
var G__199069 = count__199014_199064;
var G__199070 = (i__199015_199065 + (1));
seq__199012_199062 = G__199067;
chunk__199013_199063 = G__199068;
count__199014_199064 = G__199069;
i__199015_199065 = G__199070;
continue;
} else {
var temp__4425__auto___199071 = cljs.core.seq.call(null,seq__199012_199062);
if(temp__4425__auto___199071){
var seq__199012_199072__$1 = temp__4425__auto___199071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199012_199072__$1)){
var c__25024__auto___199073 = cljs.core.chunk_first.call(null,seq__199012_199072__$1);
var G__199074 = cljs.core.chunk_rest.call(null,seq__199012_199072__$1);
var G__199075 = c__25024__auto___199073;
var G__199076 = cljs.core.count.call(null,c__25024__auto___199073);
var G__199077 = (0);
seq__199012_199062 = G__199074;
chunk__199013_199063 = G__199075;
count__199014_199064 = G__199076;
i__199015_199065 = G__199077;
continue;
} else {
var param_199078 = cljs.core.first.call(null,seq__199012_199072__$1);
cljs.compiler.emit.call(null,param_199078);

if(cljs.core._EQ_.call(null,param_199078,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__199079 = cljs.core.next.call(null,seq__199012_199072__$1);
var G__199080 = null;
var G__199081 = (0);
var G__199082 = (0);
seq__199012_199062 = G__199079;
chunk__199013_199063 = G__199080;
count__199014_199064 = G__199081;
i__199015_199065 = G__199082;
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
var seq__199087 = cljs.core.seq.call(null,params);
var chunk__199088 = null;
var count__199089 = (0);
var i__199090 = (0);
while(true){
if((i__199090 < count__199089)){
var param = cljs.core._nth.call(null,chunk__199088,i__199090);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__199091 = seq__199087;
var G__199092 = chunk__199088;
var G__199093 = count__199089;
var G__199094 = (i__199090 + (1));
seq__199087 = G__199091;
chunk__199088 = G__199092;
count__199089 = G__199093;
i__199090 = G__199094;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__199087);
if(temp__4425__auto__){
var seq__199087__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199087__$1)){
var c__25024__auto__ = cljs.core.chunk_first.call(null,seq__199087__$1);
var G__199095 = cljs.core.chunk_rest.call(null,seq__199087__$1);
var G__199096 = c__25024__auto__;
var G__199097 = cljs.core.count.call(null,c__25024__auto__);
var G__199098 = (0);
seq__199087 = G__199095;
chunk__199088 = G__199096;
count__199089 = G__199097;
i__199090 = G__199098;
continue;
} else {
var param = cljs.core.first.call(null,seq__199087__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__199099 = cljs.core.next.call(null,seq__199087__$1);
var G__199100 = null;
var G__199101 = (0);
var G__199102 = (0);
seq__199087 = G__199099;
chunk__199088 = G__199100;
count__199089 = G__199101;
i__199090 = G__199102;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__199103){
var map__199106 = p__199103;
var map__199106__$1 = ((((!((map__199106 == null)))?((((map__199106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199106):map__199106);
var type = cljs.core.get.call(null,map__199106__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__199106__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__199106__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__199106__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__199106__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__199106__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__199106__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__199106__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__29027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__199108){
var map__199119 = p__199108;
var map__199119__$1 = ((((!((map__199119 == null)))?((((map__199119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199119):map__199119);
var f = map__199119__$1;
var type = cljs.core.get.call(null,map__199119__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__199119__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__199119__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__199119__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__199119__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__199119__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__199119__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__199119__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__29027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_199129__$1 = (function (){var or__24221__auto__ = name;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_199130 = cljs.compiler.munge.call(null,name_199129__$1);
var delegate_name_199131 = [cljs.core.str(mname_199130),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_199131," = function (");

var seq__199121_199132 = cljs.core.seq.call(null,params);
var chunk__199122_199133 = null;
var count__199123_199134 = (0);
var i__199124_199135 = (0);
while(true){
if((i__199124_199135 < count__199123_199134)){
var param_199136 = cljs.core._nth.call(null,chunk__199122_199133,i__199124_199135);
cljs.compiler.emit.call(null,param_199136);

if(cljs.core._EQ_.call(null,param_199136,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__199137 = seq__199121_199132;
var G__199138 = chunk__199122_199133;
var G__199139 = count__199123_199134;
var G__199140 = (i__199124_199135 + (1));
seq__199121_199132 = G__199137;
chunk__199122_199133 = G__199138;
count__199123_199134 = G__199139;
i__199124_199135 = G__199140;
continue;
} else {
var temp__4425__auto___199141 = cljs.core.seq.call(null,seq__199121_199132);
if(temp__4425__auto___199141){
var seq__199121_199142__$1 = temp__4425__auto___199141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199121_199142__$1)){
var c__25024__auto___199143 = cljs.core.chunk_first.call(null,seq__199121_199142__$1);
var G__199144 = cljs.core.chunk_rest.call(null,seq__199121_199142__$1);
var G__199145 = c__25024__auto___199143;
var G__199146 = cljs.core.count.call(null,c__25024__auto___199143);
var G__199147 = (0);
seq__199121_199132 = G__199144;
chunk__199122_199133 = G__199145;
count__199123_199134 = G__199146;
i__199124_199135 = G__199147;
continue;
} else {
var param_199148 = cljs.core.first.call(null,seq__199121_199142__$1);
cljs.compiler.emit.call(null,param_199148);

if(cljs.core._EQ_.call(null,param_199148,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__199149 = cljs.core.next.call(null,seq__199121_199142__$1);
var G__199150 = null;
var G__199151 = (0);
var G__199152 = (0);
seq__199121_199132 = G__199149;
chunk__199122_199133 = G__199150;
count__199123_199134 = G__199151;
i__199124_199135 = G__199152;
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

cljs.compiler.emitln.call(null,"var ",mname_199130," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_199153 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_199153,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_199131,".call(this,");

var seq__199125_199154 = cljs.core.seq.call(null,params);
var chunk__199126_199155 = null;
var count__199127_199156 = (0);
var i__199128_199157 = (0);
while(true){
if((i__199128_199157 < count__199127_199156)){
var param_199158 = cljs.core._nth.call(null,chunk__199126_199155,i__199128_199157);
cljs.compiler.emit.call(null,param_199158);

if(cljs.core._EQ_.call(null,param_199158,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__199159 = seq__199125_199154;
var G__199160 = chunk__199126_199155;
var G__199161 = count__199127_199156;
var G__199162 = (i__199128_199157 + (1));
seq__199125_199154 = G__199159;
chunk__199126_199155 = G__199160;
count__199127_199156 = G__199161;
i__199128_199157 = G__199162;
continue;
} else {
var temp__4425__auto___199163 = cljs.core.seq.call(null,seq__199125_199154);
if(temp__4425__auto___199163){
var seq__199125_199164__$1 = temp__4425__auto___199163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199125_199164__$1)){
var c__25024__auto___199165 = cljs.core.chunk_first.call(null,seq__199125_199164__$1);
var G__199166 = cljs.core.chunk_rest.call(null,seq__199125_199164__$1);
var G__199167 = c__25024__auto___199165;
var G__199168 = cljs.core.count.call(null,c__25024__auto___199165);
var G__199169 = (0);
seq__199125_199154 = G__199166;
chunk__199126_199155 = G__199167;
count__199127_199156 = G__199168;
i__199128_199157 = G__199169;
continue;
} else {
var param_199170 = cljs.core.first.call(null,seq__199125_199164__$1);
cljs.compiler.emit.call(null,param_199170);

if(cljs.core._EQ_.call(null,param_199170,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__199171 = cljs.core.next.call(null,seq__199125_199164__$1);
var G__199172 = null;
var G__199173 = (0);
var G__199174 = (0);
seq__199125_199154 = G__199171;
chunk__199126_199155 = G__199172;
count__199127_199156 = G__199173;
i__199128_199157 = G__199174;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_199130,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_199130,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_199129__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_199130,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_199131,";");

cljs.compiler.emitln.call(null,"return ",mname_199130,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__199178){
var map__199179 = p__199178;
var map__199179__$1 = ((((!((map__199179 == null)))?((((map__199179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199179):map__199179);
var name = cljs.core.get.call(null,map__199179__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__199179__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__199179__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__199179__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__199179__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__199179__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__199179__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__199179,map__199179__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__199175_SHARP_){
var and__24209__auto__ = p1__199175_SHARP_;
if(cljs.core.truth_(and__24209__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__199175_SHARP_));
} else {
return and__24209__auto__;
}
});})(map__199179,map__199179__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_199200__$1 = (function (){var or__24221__auto__ = name;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_199201 = cljs.compiler.munge.call(null,name_199200__$1);
var maxparams_199202 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_199203 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_199200__$1,mname_199201,maxparams_199202,loop_locals,map__199179,map__199179__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_199201),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_199200__$1,mname_199201,maxparams_199202,loop_locals,map__199179,map__199179__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_199204 = cljs.core.sort_by.call(null,((function (name_199200__$1,mname_199201,maxparams_199202,mmap_199203,loop_locals,map__199179,map__199179__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__199176_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__199176_SHARP_)));
});})(name_199200__$1,mname_199201,maxparams_199202,mmap_199203,loop_locals,map__199179,map__199179__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_199203));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_199201," = null;");

var seq__199181_199205 = cljs.core.seq.call(null,ms_199204);
var chunk__199182_199206 = null;
var count__199183_199207 = (0);
var i__199184_199208 = (0);
while(true){
if((i__199184_199208 < count__199183_199207)){
var vec__199185_199209 = cljs.core._nth.call(null,chunk__199182_199206,i__199184_199208);
var n_199210 = cljs.core.nth.call(null,vec__199185_199209,(0),null);
var meth_199211 = cljs.core.nth.call(null,vec__199185_199209,(1),null);
cljs.compiler.emits.call(null,"var ",n_199210," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_199211))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_199211);
} else {
cljs.compiler.emit_fn_method.call(null,meth_199211);
}

cljs.compiler.emitln.call(null,";");

var G__199212 = seq__199181_199205;
var G__199213 = chunk__199182_199206;
var G__199214 = count__199183_199207;
var G__199215 = (i__199184_199208 + (1));
seq__199181_199205 = G__199212;
chunk__199182_199206 = G__199213;
count__199183_199207 = G__199214;
i__199184_199208 = G__199215;
continue;
} else {
var temp__4425__auto___199216 = cljs.core.seq.call(null,seq__199181_199205);
if(temp__4425__auto___199216){
var seq__199181_199217__$1 = temp__4425__auto___199216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199181_199217__$1)){
var c__25024__auto___199218 = cljs.core.chunk_first.call(null,seq__199181_199217__$1);
var G__199219 = cljs.core.chunk_rest.call(null,seq__199181_199217__$1);
var G__199220 = c__25024__auto___199218;
var G__199221 = cljs.core.count.call(null,c__25024__auto___199218);
var G__199222 = (0);
seq__199181_199205 = G__199219;
chunk__199182_199206 = G__199220;
count__199183_199207 = G__199221;
i__199184_199208 = G__199222;
continue;
} else {
var vec__199186_199223 = cljs.core.first.call(null,seq__199181_199217__$1);
var n_199224 = cljs.core.nth.call(null,vec__199186_199223,(0),null);
var meth_199225 = cljs.core.nth.call(null,vec__199186_199223,(1),null);
cljs.compiler.emits.call(null,"var ",n_199224," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_199225))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_199225);
} else {
cljs.compiler.emit_fn_method.call(null,meth_199225);
}

cljs.compiler.emitln.call(null,";");

var G__199226 = cljs.core.next.call(null,seq__199181_199217__$1);
var G__199227 = null;
var G__199228 = (0);
var G__199229 = (0);
seq__199181_199205 = G__199226;
chunk__199182_199206 = G__199227;
count__199183_199207 = G__199228;
i__199184_199208 = G__199229;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_199201," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_199202),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_199202)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_199202));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__199187_199230 = cljs.core.seq.call(null,ms_199204);
var chunk__199188_199231 = null;
var count__199189_199232 = (0);
var i__199190_199233 = (0);
while(true){
if((i__199190_199233 < count__199189_199232)){
var vec__199191_199234 = cljs.core._nth.call(null,chunk__199188_199231,i__199190_199233);
var n_199235 = cljs.core.nth.call(null,vec__199191_199234,(0),null);
var meth_199236 = cljs.core.nth.call(null,vec__199191_199234,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_199236))){
cljs.compiler.emitln.call(null,"default:");

var restarg_199237 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_199237," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_199238 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_199237," = new cljs.core.IndexedSeq(",a_199238,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_199235,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_199202)),(((cljs.core.count.call(null,maxparams_199202) > (1)))?", ":null),restarg_199237,");");
} else {
var pcnt_199239 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_199236));
cljs.compiler.emitln.call(null,"case ",pcnt_199239,":");

cljs.compiler.emitln.call(null,"return ",n_199235,".call(this",(((pcnt_199239 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_199239,maxparams_199202))),",")),");");
}

var G__199240 = seq__199187_199230;
var G__199241 = chunk__199188_199231;
var G__199242 = count__199189_199232;
var G__199243 = (i__199190_199233 + (1));
seq__199187_199230 = G__199240;
chunk__199188_199231 = G__199241;
count__199189_199232 = G__199242;
i__199190_199233 = G__199243;
continue;
} else {
var temp__4425__auto___199244 = cljs.core.seq.call(null,seq__199187_199230);
if(temp__4425__auto___199244){
var seq__199187_199245__$1 = temp__4425__auto___199244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199187_199245__$1)){
var c__25024__auto___199246 = cljs.core.chunk_first.call(null,seq__199187_199245__$1);
var G__199247 = cljs.core.chunk_rest.call(null,seq__199187_199245__$1);
var G__199248 = c__25024__auto___199246;
var G__199249 = cljs.core.count.call(null,c__25024__auto___199246);
var G__199250 = (0);
seq__199187_199230 = G__199247;
chunk__199188_199231 = G__199248;
count__199189_199232 = G__199249;
i__199190_199233 = G__199250;
continue;
} else {
var vec__199192_199251 = cljs.core.first.call(null,seq__199187_199245__$1);
var n_199252 = cljs.core.nth.call(null,vec__199192_199251,(0),null);
var meth_199253 = cljs.core.nth.call(null,vec__199192_199251,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_199253))){
cljs.compiler.emitln.call(null,"default:");

var restarg_199254 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_199254," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_199255 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_199254," = new cljs.core.IndexedSeq(",a_199255,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_199252,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_199202)),(((cljs.core.count.call(null,maxparams_199202) > (1)))?", ":null),restarg_199254,");");
} else {
var pcnt_199256 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_199253));
cljs.compiler.emitln.call(null,"case ",pcnt_199256,":");

cljs.compiler.emitln.call(null,"return ",n_199252,".call(this",(((pcnt_199256 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_199256,maxparams_199202))),",")),");");
}

var G__199257 = cljs.core.next.call(null,seq__199187_199245__$1);
var G__199258 = null;
var G__199259 = (0);
var G__199260 = (0);
seq__199187_199230 = G__199257;
chunk__199188_199231 = G__199258;
count__199189_199232 = G__199259;
i__199190_199233 = G__199260;
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
cljs.compiler.emitln.call(null,mname_199201,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_199201,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_199200__$1,mname_199201,maxparams_199202,mmap_199203,ms_199204,loop_locals,map__199179,map__199179__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__199177_SHARP_){
var vec__199193 = p1__199177_SHARP_;
var n = cljs.core.nth.call(null,vec__199193,(0),null);
var m = cljs.core.nth.call(null,vec__199193,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_199200__$1,mname_199201,maxparams_199202,mmap_199203,ms_199204,loop_locals,map__199179,map__199179__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_199204),".cljs$lang$applyTo;");
} else {
}

var seq__199194_199261 = cljs.core.seq.call(null,ms_199204);
var chunk__199195_199262 = null;
var count__199196_199263 = (0);
var i__199197_199264 = (0);
while(true){
if((i__199197_199264 < count__199196_199263)){
var vec__199198_199265 = cljs.core._nth.call(null,chunk__199195_199262,i__199197_199264);
var n_199266 = cljs.core.nth.call(null,vec__199198_199265,(0),null);
var meth_199267 = cljs.core.nth.call(null,vec__199198_199265,(1),null);
var c_199268 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_199267));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_199267))){
cljs.compiler.emitln.call(null,mname_199201,".cljs$core$IFn$_invoke$arity$variadic = ",n_199266,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_199201,".cljs$core$IFn$_invoke$arity$",c_199268," = ",n_199266,";");
}

var G__199269 = seq__199194_199261;
var G__199270 = chunk__199195_199262;
var G__199271 = count__199196_199263;
var G__199272 = (i__199197_199264 + (1));
seq__199194_199261 = G__199269;
chunk__199195_199262 = G__199270;
count__199196_199263 = G__199271;
i__199197_199264 = G__199272;
continue;
} else {
var temp__4425__auto___199273 = cljs.core.seq.call(null,seq__199194_199261);
if(temp__4425__auto___199273){
var seq__199194_199274__$1 = temp__4425__auto___199273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199194_199274__$1)){
var c__25024__auto___199275 = cljs.core.chunk_first.call(null,seq__199194_199274__$1);
var G__199276 = cljs.core.chunk_rest.call(null,seq__199194_199274__$1);
var G__199277 = c__25024__auto___199275;
var G__199278 = cljs.core.count.call(null,c__25024__auto___199275);
var G__199279 = (0);
seq__199194_199261 = G__199276;
chunk__199195_199262 = G__199277;
count__199196_199263 = G__199278;
i__199197_199264 = G__199279;
continue;
} else {
var vec__199199_199280 = cljs.core.first.call(null,seq__199194_199274__$1);
var n_199281 = cljs.core.nth.call(null,vec__199199_199280,(0),null);
var meth_199282 = cljs.core.nth.call(null,vec__199199_199280,(1),null);
var c_199283 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_199282));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_199282))){
cljs.compiler.emitln.call(null,mname_199201,".cljs$core$IFn$_invoke$arity$variadic = ",n_199281,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_199201,".cljs$core$IFn$_invoke$arity$",c_199283," = ",n_199281,";");
}

var G__199284 = cljs.core.next.call(null,seq__199194_199274__$1);
var G__199285 = null;
var G__199286 = (0);
var G__199287 = (0);
seq__199194_199261 = G__199284;
chunk__199195_199262 = G__199285;
count__199196_199263 = G__199286;
i__199197_199264 = G__199287;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_199201,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__199288){
var map__199289 = p__199288;
var map__199289__$1 = ((((!((map__199289 == null)))?((((map__199289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199289):map__199289);
var statements = cljs.core.get.call(null,map__199289__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__199289__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__199289__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__24209__auto__ = statements;
if(cljs.core.truth_(and__24209__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__24209__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__199291_199295 = cljs.core.seq.call(null,statements);
var chunk__199292_199296 = null;
var count__199293_199297 = (0);
var i__199294_199298 = (0);
while(true){
if((i__199294_199298 < count__199293_199297)){
var s_199299 = cljs.core._nth.call(null,chunk__199292_199296,i__199294_199298);
cljs.compiler.emitln.call(null,s_199299);

var G__199300 = seq__199291_199295;
var G__199301 = chunk__199292_199296;
var G__199302 = count__199293_199297;
var G__199303 = (i__199294_199298 + (1));
seq__199291_199295 = G__199300;
chunk__199292_199296 = G__199301;
count__199293_199297 = G__199302;
i__199294_199298 = G__199303;
continue;
} else {
var temp__4425__auto___199304 = cljs.core.seq.call(null,seq__199291_199295);
if(temp__4425__auto___199304){
var seq__199291_199305__$1 = temp__4425__auto___199304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199291_199305__$1)){
var c__25024__auto___199306 = cljs.core.chunk_first.call(null,seq__199291_199305__$1);
var G__199307 = cljs.core.chunk_rest.call(null,seq__199291_199305__$1);
var G__199308 = c__25024__auto___199306;
var G__199309 = cljs.core.count.call(null,c__25024__auto___199306);
var G__199310 = (0);
seq__199291_199295 = G__199307;
chunk__199292_199296 = G__199308;
count__199293_199297 = G__199309;
i__199294_199298 = G__199310;
continue;
} else {
var s_199311 = cljs.core.first.call(null,seq__199291_199305__$1);
cljs.compiler.emitln.call(null,s_199311);

var G__199312 = cljs.core.next.call(null,seq__199291_199305__$1);
var G__199313 = null;
var G__199314 = (0);
var G__199315 = (0);
seq__199291_199295 = G__199312;
chunk__199292_199296 = G__199313;
count__199293_199297 = G__199314;
i__199294_199298 = G__199315;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__24209__auto__ = statements;
if(cljs.core.truth_(and__24209__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__24209__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__199316){
var map__199317 = p__199316;
var map__199317__$1 = ((((!((map__199317 == null)))?((((map__199317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199317):map__199317);
var env = cljs.core.get.call(null,map__199317__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__199317__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__199317__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__199317__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__199317__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__24221__auto__ = name;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__199319,is_loop){
var map__199331 = p__199319;
var map__199331__$1 = ((((!((map__199331 == null)))?((((map__199331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199331):map__199331);
var bindings = cljs.core.get.call(null,map__199331__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__199331__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__199331__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_199333_199342 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_199333_199342,context,map__199331,map__199331__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_199333_199342,context,map__199331,map__199331__$1,bindings,expr,env))
,bindings):null));

try{var seq__199334_199343 = cljs.core.seq.call(null,bindings);
var chunk__199335_199344 = null;
var count__199336_199345 = (0);
var i__199337_199346 = (0);
while(true){
if((i__199337_199346 < count__199336_199345)){
var map__199338_199347 = cljs.core._nth.call(null,chunk__199335_199344,i__199337_199346);
var map__199338_199348__$1 = ((((!((map__199338_199347 == null)))?((((map__199338_199347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199338_199347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199338_199347):map__199338_199347);
var binding_199349 = map__199338_199348__$1;
var init_199350 = cljs.core.get.call(null,map__199338_199348__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_199349);

cljs.compiler.emitln.call(null," = ",init_199350,";");

var G__199351 = seq__199334_199343;
var G__199352 = chunk__199335_199344;
var G__199353 = count__199336_199345;
var G__199354 = (i__199337_199346 + (1));
seq__199334_199343 = G__199351;
chunk__199335_199344 = G__199352;
count__199336_199345 = G__199353;
i__199337_199346 = G__199354;
continue;
} else {
var temp__4425__auto___199355 = cljs.core.seq.call(null,seq__199334_199343);
if(temp__4425__auto___199355){
var seq__199334_199356__$1 = temp__4425__auto___199355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199334_199356__$1)){
var c__25024__auto___199357 = cljs.core.chunk_first.call(null,seq__199334_199356__$1);
var G__199358 = cljs.core.chunk_rest.call(null,seq__199334_199356__$1);
var G__199359 = c__25024__auto___199357;
var G__199360 = cljs.core.count.call(null,c__25024__auto___199357);
var G__199361 = (0);
seq__199334_199343 = G__199358;
chunk__199335_199344 = G__199359;
count__199336_199345 = G__199360;
i__199337_199346 = G__199361;
continue;
} else {
var map__199340_199362 = cljs.core.first.call(null,seq__199334_199356__$1);
var map__199340_199363__$1 = ((((!((map__199340_199362 == null)))?((((map__199340_199362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199340_199362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199340_199362):map__199340_199362);
var binding_199364 = map__199340_199363__$1;
var init_199365 = cljs.core.get.call(null,map__199340_199363__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_199364);

cljs.compiler.emitln.call(null," = ",init_199365,";");

var G__199366 = cljs.core.next.call(null,seq__199334_199356__$1);
var G__199367 = null;
var G__199368 = (0);
var G__199369 = (0);
seq__199334_199343 = G__199366;
chunk__199335_199344 = G__199367;
count__199336_199345 = G__199368;
i__199337_199346 = G__199369;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_199333_199342;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__199370){
var map__199371 = p__199370;
var map__199371__$1 = ((((!((map__199371 == null)))?((((map__199371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199371):map__199371);
var frame = cljs.core.get.call(null,map__199371__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__199371__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__199371__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__25124__auto___199373 = cljs.core.count.call(null,exprs);
var i_199374 = (0);
while(true){
if((i_199374 < n__25124__auto___199373)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_199374)," = ",exprs.call(null,i_199374),";");

var G__199375 = (i_199374 + (1));
i_199374 = G__199375;
continue;
} else {
}
break;
}

var n__25124__auto___199376 = cljs.core.count.call(null,exprs);
var i_199377 = (0);
while(true){
if((i_199377 < n__25124__auto___199376)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_199377))," = ",temps.call(null,i_199377),";");

var G__199378 = (i_199377 + (1));
i_199377 = G__199378;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__199379){
var map__199380 = p__199379;
var map__199380__$1 = ((((!((map__199380 == null)))?((((map__199380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199380):map__199380);
var bindings = cljs.core.get.call(null,map__199380__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__199380__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__199380__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__199382_199390 = cljs.core.seq.call(null,bindings);
var chunk__199383_199391 = null;
var count__199384_199392 = (0);
var i__199385_199393 = (0);
while(true){
if((i__199385_199393 < count__199384_199392)){
var map__199386_199394 = cljs.core._nth.call(null,chunk__199383_199391,i__199385_199393);
var map__199386_199395__$1 = ((((!((map__199386_199394 == null)))?((((map__199386_199394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199386_199394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199386_199394):map__199386_199394);
var binding_199396 = map__199386_199395__$1;
var init_199397 = cljs.core.get.call(null,map__199386_199395__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_199396)," = ",init_199397,";");

var G__199398 = seq__199382_199390;
var G__199399 = chunk__199383_199391;
var G__199400 = count__199384_199392;
var G__199401 = (i__199385_199393 + (1));
seq__199382_199390 = G__199398;
chunk__199383_199391 = G__199399;
count__199384_199392 = G__199400;
i__199385_199393 = G__199401;
continue;
} else {
var temp__4425__auto___199402 = cljs.core.seq.call(null,seq__199382_199390);
if(temp__4425__auto___199402){
var seq__199382_199403__$1 = temp__4425__auto___199402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199382_199403__$1)){
var c__25024__auto___199404 = cljs.core.chunk_first.call(null,seq__199382_199403__$1);
var G__199405 = cljs.core.chunk_rest.call(null,seq__199382_199403__$1);
var G__199406 = c__25024__auto___199404;
var G__199407 = cljs.core.count.call(null,c__25024__auto___199404);
var G__199408 = (0);
seq__199382_199390 = G__199405;
chunk__199383_199391 = G__199406;
count__199384_199392 = G__199407;
i__199385_199393 = G__199408;
continue;
} else {
var map__199388_199409 = cljs.core.first.call(null,seq__199382_199403__$1);
var map__199388_199410__$1 = ((((!((map__199388_199409 == null)))?((((map__199388_199409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199388_199409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199388_199409):map__199388_199409);
var binding_199411 = map__199388_199410__$1;
var init_199412 = cljs.core.get.call(null,map__199388_199410__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_199411)," = ",init_199412,";");

var G__199413 = cljs.core.next.call(null,seq__199382_199403__$1);
var G__199414 = null;
var G__199415 = (0);
var G__199416 = (0);
seq__199382_199390 = G__199413;
chunk__199383_199391 = G__199414;
count__199384_199392 = G__199415;
i__199385_199393 = G__199416;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__199419){
var map__199420 = p__199419;
var map__199420__$1 = ((((!((map__199420 == null)))?((((map__199420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199420):map__199420);
var expr = map__199420__$1;
var f = cljs.core.get.call(null,map__199420__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__199420__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__199420__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__24209__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__24209__auto__)){
var and__24209__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__24209__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__24209__auto____$1;
}
} else {
return and__24209__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__24209__auto__ = protocol;
if(cljs.core.truth_(and__24209__auto__)){
var and__24209__auto____$1 = tag;
if(cljs.core.truth_(and__24209__auto____$1)){
var or__24221__auto__ = (function (){var and__24209__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__24209__auto____$2)){
var and__24209__auto____$3 = protocol;
if(cljs.core.truth_(and__24209__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__24209__auto____$3;
}
} else {
return and__24209__auto____$2;
}
})();
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
var and__24209__auto____$2 = (function (){var or__24221__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__24221__auto____$1)){
return or__24221__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__24209__auto____$2)){
var or__24221__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__24221__auto____$1){
return or__24221__auto____$1;
} else {
var and__24209__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__24209__auto____$3){
var and__24209__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__24209__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__24209__auto____$4;
}
} else {
return and__24209__auto____$3;
}
}
} else {
return and__24209__auto____$2;
}
}
} else {
return and__24209__auto____$1;
}
} else {
return and__24209__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__24221__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__24221__auto__){
return or__24221__auto__;
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
var vec__199422 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__24209__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__24209__auto__)){
return (arity > mfa);
} else {
return and__24209__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__199420,map__199420__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__199420,map__199420__$1,expr,f,args,env){
return (function (p1__199417_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__199417_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__199420,map__199420__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__199420,map__199420__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__199420,map__199420__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__199420,map__199420__$1,expr,f,args,env){
return (function (p1__199418_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__199418_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__199420,map__199420__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__199420,map__199420__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__199422,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__199422,(1),null);
var env__29027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_199423 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_199423,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_199424 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_199424,args)),(((mfa_199424 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_199424,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__24221__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
var or__24221__auto____$1 = js_QMARK_;
if(or__24221__auto____$1){
return or__24221__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__24209__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__24209__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__24209__auto__;
}
})())){
var fprop_199425 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_199425," ? ",f__$1,fprop_199425,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__199426){
var map__199427 = p__199426;
var map__199427__$1 = ((((!((map__199427 == null)))?((((map__199427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199427):map__199427);
var ctor = cljs.core.get.call(null,map__199427__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__199427__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__199427__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__199429){
var map__199430 = p__199429;
var map__199430__$1 = ((((!((map__199430 == null)))?((((map__199430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199430):map__199430);
var target = cljs.core.get.call(null,map__199430__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__199430__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__199430__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
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

var seq__199436_199440 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__199437_199441 = null;
var count__199438_199442 = (0);
var i__199439_199443 = (0);
while(true){
if((i__199439_199443 < count__199438_199442)){
var lib_199444 = cljs.core._nth.call(null,chunk__199437_199441,i__199439_199443);
if(cljs.core.truth_((function (){var or__24221__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_199444),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_199444),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24221__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_199444),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_199444),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_199444),"');");

}
}

var G__199445 = seq__199436_199440;
var G__199446 = chunk__199437_199441;
var G__199447 = count__199438_199442;
var G__199448 = (i__199439_199443 + (1));
seq__199436_199440 = G__199445;
chunk__199437_199441 = G__199446;
count__199438_199442 = G__199447;
i__199439_199443 = G__199448;
continue;
} else {
var temp__4425__auto___199449 = cljs.core.seq.call(null,seq__199436_199440);
if(temp__4425__auto___199449){
var seq__199436_199450__$1 = temp__4425__auto___199449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199436_199450__$1)){
var c__25024__auto___199451 = cljs.core.chunk_first.call(null,seq__199436_199450__$1);
var G__199452 = cljs.core.chunk_rest.call(null,seq__199436_199450__$1);
var G__199453 = c__25024__auto___199451;
var G__199454 = cljs.core.count.call(null,c__25024__auto___199451);
var G__199455 = (0);
seq__199436_199440 = G__199452;
chunk__199437_199441 = G__199453;
count__199438_199442 = G__199454;
i__199439_199443 = G__199455;
continue;
} else {
var lib_199456 = cljs.core.first.call(null,seq__199436_199450__$1);
if(cljs.core.truth_((function (){var or__24221__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_199456),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_199456),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__24221__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_199456),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_199456),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_199456),"');");

}
}

var G__199457 = cljs.core.next.call(null,seq__199436_199450__$1);
var G__199458 = null;
var G__199459 = (0);
var G__199460 = (0);
seq__199436_199440 = G__199457;
chunk__199437_199441 = G__199458;
count__199438_199442 = G__199459;
i__199439_199443 = G__199460;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__199461){
var map__199462 = p__199461;
var map__199462__$1 = ((((!((map__199462 == null)))?((((map__199462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199462):map__199462);
var name = cljs.core.get.call(null,map__199462__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__199462__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__199462__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__199462__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__199462__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__199462__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__199464){
var map__199465 = p__199464;
var map__199465__$1 = ((((!((map__199465 == null)))?((((map__199465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199465):map__199465);
var t = cljs.core.get.call(null,map__199465__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__199465__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__199465__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__199465__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__199465__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__199467_199481 = cljs.core.seq.call(null,protocols);
var chunk__199468_199482 = null;
var count__199469_199483 = (0);
var i__199470_199484 = (0);
while(true){
if((i__199470_199484 < count__199469_199483)){
var protocol_199485 = cljs.core._nth.call(null,chunk__199468_199482,i__199470_199484);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_199485)].join('')),"}");

var G__199486 = seq__199467_199481;
var G__199487 = chunk__199468_199482;
var G__199488 = count__199469_199483;
var G__199489 = (i__199470_199484 + (1));
seq__199467_199481 = G__199486;
chunk__199468_199482 = G__199487;
count__199469_199483 = G__199488;
i__199470_199484 = G__199489;
continue;
} else {
var temp__4425__auto___199490 = cljs.core.seq.call(null,seq__199467_199481);
if(temp__4425__auto___199490){
var seq__199467_199491__$1 = temp__4425__auto___199490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199467_199491__$1)){
var c__25024__auto___199492 = cljs.core.chunk_first.call(null,seq__199467_199491__$1);
var G__199493 = cljs.core.chunk_rest.call(null,seq__199467_199491__$1);
var G__199494 = c__25024__auto___199492;
var G__199495 = cljs.core.count.call(null,c__25024__auto___199492);
var G__199496 = (0);
seq__199467_199481 = G__199493;
chunk__199468_199482 = G__199494;
count__199469_199483 = G__199495;
i__199470_199484 = G__199496;
continue;
} else {
var protocol_199497 = cljs.core.first.call(null,seq__199467_199491__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_199497)].join('')),"}");

var G__199498 = cljs.core.next.call(null,seq__199467_199491__$1);
var G__199499 = null;
var G__199500 = (0);
var G__199501 = (0);
seq__199467_199481 = G__199498;
chunk__199468_199482 = G__199499;
count__199469_199483 = G__199500;
i__199470_199484 = G__199501;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__199471_199502 = cljs.core.seq.call(null,fields__$1);
var chunk__199472_199503 = null;
var count__199473_199504 = (0);
var i__199474_199505 = (0);
while(true){
if((i__199474_199505 < count__199473_199504)){
var fld_199506 = cljs.core._nth.call(null,chunk__199472_199503,i__199474_199505);
cljs.compiler.emitln.call(null,"this.",fld_199506," = ",fld_199506,";");

var G__199507 = seq__199471_199502;
var G__199508 = chunk__199472_199503;
var G__199509 = count__199473_199504;
var G__199510 = (i__199474_199505 + (1));
seq__199471_199502 = G__199507;
chunk__199472_199503 = G__199508;
count__199473_199504 = G__199509;
i__199474_199505 = G__199510;
continue;
} else {
var temp__4425__auto___199511 = cljs.core.seq.call(null,seq__199471_199502);
if(temp__4425__auto___199511){
var seq__199471_199512__$1 = temp__4425__auto___199511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199471_199512__$1)){
var c__25024__auto___199513 = cljs.core.chunk_first.call(null,seq__199471_199512__$1);
var G__199514 = cljs.core.chunk_rest.call(null,seq__199471_199512__$1);
var G__199515 = c__25024__auto___199513;
var G__199516 = cljs.core.count.call(null,c__25024__auto___199513);
var G__199517 = (0);
seq__199471_199502 = G__199514;
chunk__199472_199503 = G__199515;
count__199473_199504 = G__199516;
i__199474_199505 = G__199517;
continue;
} else {
var fld_199518 = cljs.core.first.call(null,seq__199471_199512__$1);
cljs.compiler.emitln.call(null,"this.",fld_199518," = ",fld_199518,";");

var G__199519 = cljs.core.next.call(null,seq__199471_199512__$1);
var G__199520 = null;
var G__199521 = (0);
var G__199522 = (0);
seq__199471_199502 = G__199519;
chunk__199472_199503 = G__199520;
count__199473_199504 = G__199521;
i__199474_199505 = G__199522;
continue;
}
} else {
}
}
break;
}

var seq__199475_199523 = cljs.core.seq.call(null,pmasks);
var chunk__199476_199524 = null;
var count__199477_199525 = (0);
var i__199478_199526 = (0);
while(true){
if((i__199478_199526 < count__199477_199525)){
var vec__199479_199527 = cljs.core._nth.call(null,chunk__199476_199524,i__199478_199526);
var pno_199528 = cljs.core.nth.call(null,vec__199479_199527,(0),null);
var pmask_199529 = cljs.core.nth.call(null,vec__199479_199527,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_199528,"$ = ",pmask_199529,";");

var G__199530 = seq__199475_199523;
var G__199531 = chunk__199476_199524;
var G__199532 = count__199477_199525;
var G__199533 = (i__199478_199526 + (1));
seq__199475_199523 = G__199530;
chunk__199476_199524 = G__199531;
count__199477_199525 = G__199532;
i__199478_199526 = G__199533;
continue;
} else {
var temp__4425__auto___199534 = cljs.core.seq.call(null,seq__199475_199523);
if(temp__4425__auto___199534){
var seq__199475_199535__$1 = temp__4425__auto___199534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199475_199535__$1)){
var c__25024__auto___199536 = cljs.core.chunk_first.call(null,seq__199475_199535__$1);
var G__199537 = cljs.core.chunk_rest.call(null,seq__199475_199535__$1);
var G__199538 = c__25024__auto___199536;
var G__199539 = cljs.core.count.call(null,c__25024__auto___199536);
var G__199540 = (0);
seq__199475_199523 = G__199537;
chunk__199476_199524 = G__199538;
count__199477_199525 = G__199539;
i__199478_199526 = G__199540;
continue;
} else {
var vec__199480_199541 = cljs.core.first.call(null,seq__199475_199535__$1);
var pno_199542 = cljs.core.nth.call(null,vec__199480_199541,(0),null);
var pmask_199543 = cljs.core.nth.call(null,vec__199480_199541,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_199542,"$ = ",pmask_199543,";");

var G__199544 = cljs.core.next.call(null,seq__199475_199535__$1);
var G__199545 = null;
var G__199546 = (0);
var G__199547 = (0);
seq__199475_199523 = G__199544;
chunk__199476_199524 = G__199545;
count__199477_199525 = G__199546;
i__199478_199526 = G__199547;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__199548){
var map__199549 = p__199548;
var map__199549__$1 = ((((!((map__199549 == null)))?((((map__199549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199549):map__199549);
var t = cljs.core.get.call(null,map__199549__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__199549__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__199549__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__199549__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__199549__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__199551_199565 = cljs.core.seq.call(null,protocols);
var chunk__199552_199566 = null;
var count__199553_199567 = (0);
var i__199554_199568 = (0);
while(true){
if((i__199554_199568 < count__199553_199567)){
var protocol_199569 = cljs.core._nth.call(null,chunk__199552_199566,i__199554_199568);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_199569)].join('')),"}");

var G__199570 = seq__199551_199565;
var G__199571 = chunk__199552_199566;
var G__199572 = count__199553_199567;
var G__199573 = (i__199554_199568 + (1));
seq__199551_199565 = G__199570;
chunk__199552_199566 = G__199571;
count__199553_199567 = G__199572;
i__199554_199568 = G__199573;
continue;
} else {
var temp__4425__auto___199574 = cljs.core.seq.call(null,seq__199551_199565);
if(temp__4425__auto___199574){
var seq__199551_199575__$1 = temp__4425__auto___199574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199551_199575__$1)){
var c__25024__auto___199576 = cljs.core.chunk_first.call(null,seq__199551_199575__$1);
var G__199577 = cljs.core.chunk_rest.call(null,seq__199551_199575__$1);
var G__199578 = c__25024__auto___199576;
var G__199579 = cljs.core.count.call(null,c__25024__auto___199576);
var G__199580 = (0);
seq__199551_199565 = G__199577;
chunk__199552_199566 = G__199578;
count__199553_199567 = G__199579;
i__199554_199568 = G__199580;
continue;
} else {
var protocol_199581 = cljs.core.first.call(null,seq__199551_199575__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_199581)].join('')),"}");

var G__199582 = cljs.core.next.call(null,seq__199551_199575__$1);
var G__199583 = null;
var G__199584 = (0);
var G__199585 = (0);
seq__199551_199565 = G__199582;
chunk__199552_199566 = G__199583;
count__199553_199567 = G__199584;
i__199554_199568 = G__199585;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__199555_199586 = cljs.core.seq.call(null,fields__$1);
var chunk__199556_199587 = null;
var count__199557_199588 = (0);
var i__199558_199589 = (0);
while(true){
if((i__199558_199589 < count__199557_199588)){
var fld_199590 = cljs.core._nth.call(null,chunk__199556_199587,i__199558_199589);
cljs.compiler.emitln.call(null,"this.",fld_199590," = ",fld_199590,";");

var G__199591 = seq__199555_199586;
var G__199592 = chunk__199556_199587;
var G__199593 = count__199557_199588;
var G__199594 = (i__199558_199589 + (1));
seq__199555_199586 = G__199591;
chunk__199556_199587 = G__199592;
count__199557_199588 = G__199593;
i__199558_199589 = G__199594;
continue;
} else {
var temp__4425__auto___199595 = cljs.core.seq.call(null,seq__199555_199586);
if(temp__4425__auto___199595){
var seq__199555_199596__$1 = temp__4425__auto___199595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199555_199596__$1)){
var c__25024__auto___199597 = cljs.core.chunk_first.call(null,seq__199555_199596__$1);
var G__199598 = cljs.core.chunk_rest.call(null,seq__199555_199596__$1);
var G__199599 = c__25024__auto___199597;
var G__199600 = cljs.core.count.call(null,c__25024__auto___199597);
var G__199601 = (0);
seq__199555_199586 = G__199598;
chunk__199556_199587 = G__199599;
count__199557_199588 = G__199600;
i__199558_199589 = G__199601;
continue;
} else {
var fld_199602 = cljs.core.first.call(null,seq__199555_199596__$1);
cljs.compiler.emitln.call(null,"this.",fld_199602," = ",fld_199602,";");

var G__199603 = cljs.core.next.call(null,seq__199555_199596__$1);
var G__199604 = null;
var G__199605 = (0);
var G__199606 = (0);
seq__199555_199586 = G__199603;
chunk__199556_199587 = G__199604;
count__199557_199588 = G__199605;
i__199558_199589 = G__199606;
continue;
}
} else {
}
}
break;
}

var seq__199559_199607 = cljs.core.seq.call(null,pmasks);
var chunk__199560_199608 = null;
var count__199561_199609 = (0);
var i__199562_199610 = (0);
while(true){
if((i__199562_199610 < count__199561_199609)){
var vec__199563_199611 = cljs.core._nth.call(null,chunk__199560_199608,i__199562_199610);
var pno_199612 = cljs.core.nth.call(null,vec__199563_199611,(0),null);
var pmask_199613 = cljs.core.nth.call(null,vec__199563_199611,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_199612,"$ = ",pmask_199613,";");

var G__199614 = seq__199559_199607;
var G__199615 = chunk__199560_199608;
var G__199616 = count__199561_199609;
var G__199617 = (i__199562_199610 + (1));
seq__199559_199607 = G__199614;
chunk__199560_199608 = G__199615;
count__199561_199609 = G__199616;
i__199562_199610 = G__199617;
continue;
} else {
var temp__4425__auto___199618 = cljs.core.seq.call(null,seq__199559_199607);
if(temp__4425__auto___199618){
var seq__199559_199619__$1 = temp__4425__auto___199618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199559_199619__$1)){
var c__25024__auto___199620 = cljs.core.chunk_first.call(null,seq__199559_199619__$1);
var G__199621 = cljs.core.chunk_rest.call(null,seq__199559_199619__$1);
var G__199622 = c__25024__auto___199620;
var G__199623 = cljs.core.count.call(null,c__25024__auto___199620);
var G__199624 = (0);
seq__199559_199607 = G__199621;
chunk__199560_199608 = G__199622;
count__199561_199609 = G__199623;
i__199562_199610 = G__199624;
continue;
} else {
var vec__199564_199625 = cljs.core.first.call(null,seq__199559_199619__$1);
var pno_199626 = cljs.core.nth.call(null,vec__199564_199625,(0),null);
var pmask_199627 = cljs.core.nth.call(null,vec__199564_199625,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_199626,"$ = ",pmask_199627,";");

var G__199628 = cljs.core.next.call(null,seq__199559_199619__$1);
var G__199629 = null;
var G__199630 = (0);
var G__199631 = (0);
seq__199559_199607 = G__199628;
chunk__199560_199608 = G__199629;
count__199561_199609 = G__199630;
i__199562_199610 = G__199631;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__199632){
var map__199633 = p__199632;
var map__199633__$1 = ((((!((map__199633 == null)))?((((map__199633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199633):map__199633);
var target = cljs.core.get.call(null,map__199633__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__199633__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__199633__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__199633__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__199633__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__199635){
var map__199636 = p__199635;
var map__199636__$1 = ((((!((map__199636 == null)))?((((map__199636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__199636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__199636):map__199636);
var op = cljs.core.get.call(null,map__199636__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__199636__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__199636__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__199636__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__199636__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__24209__auto__ = code;
if(cljs.core.truth_(and__24209__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__24209__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__29027__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29027__auto__))){
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
var seq__199646 = cljs.core.seq.call(null,table);
var chunk__199647 = null;
var count__199648 = (0);
var i__199649 = (0);
while(true){
if((i__199649 < count__199648)){
var vec__199650 = cljs.core._nth.call(null,chunk__199647,i__199649);
var sym = cljs.core.nth.call(null,vec__199650,(0),null);
var value = cljs.core.nth.call(null,vec__199650,(1),null);
var ns_199652 = cljs.core.namespace.call(null,sym);
var name_199653 = cljs.core.name.call(null,sym);
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

var G__199654 = seq__199646;
var G__199655 = chunk__199647;
var G__199656 = count__199648;
var G__199657 = (i__199649 + (1));
seq__199646 = G__199654;
chunk__199647 = G__199655;
count__199648 = G__199656;
i__199649 = G__199657;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__199646);
if(temp__4425__auto__){
var seq__199646__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__199646__$1)){
var c__25024__auto__ = cljs.core.chunk_first.call(null,seq__199646__$1);
var G__199658 = cljs.core.chunk_rest.call(null,seq__199646__$1);
var G__199659 = c__25024__auto__;
var G__199660 = cljs.core.count.call(null,c__25024__auto__);
var G__199661 = (0);
seq__199646 = G__199658;
chunk__199647 = G__199659;
count__199648 = G__199660;
i__199649 = G__199661;
continue;
} else {
var vec__199651 = cljs.core.first.call(null,seq__199646__$1);
var sym = cljs.core.nth.call(null,vec__199651,(0),null);
var value = cljs.core.nth.call(null,vec__199651,(1),null);
var ns_199662 = cljs.core.namespace.call(null,sym);
var name_199663 = cljs.core.name.call(null,sym);
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

var G__199664 = cljs.core.next.call(null,seq__199646__$1);
var G__199665 = null;
var G__199666 = (0);
var G__199667 = (0);
seq__199646 = G__199664;
chunk__199647 = G__199665;
count__199648 = G__199666;
i__199649 = G__199667;
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