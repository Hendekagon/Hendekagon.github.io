// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__201807_201821 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__201808_201822 = null;
var count__201809_201823 = (0);
var i__201810_201824 = (0);
while(true){
if((i__201810_201824 < count__201809_201823)){
var f_201825 = cljs.core._nth.call(null,chunk__201808_201822,i__201810_201824);
cljs.core.println.call(null,"  ",f_201825);

var G__201826 = seq__201807_201821;
var G__201827 = chunk__201808_201822;
var G__201828 = count__201809_201823;
var G__201829 = (i__201810_201824 + (1));
seq__201807_201821 = G__201826;
chunk__201808_201822 = G__201827;
count__201809_201823 = G__201828;
i__201810_201824 = G__201829;
continue;
} else {
var temp__4425__auto___201830 = cljs.core.seq.call(null,seq__201807_201821);
if(temp__4425__auto___201830){
var seq__201807_201831__$1 = temp__4425__auto___201830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__201807_201831__$1)){
var c__25024__auto___201832 = cljs.core.chunk_first.call(null,seq__201807_201831__$1);
var G__201833 = cljs.core.chunk_rest.call(null,seq__201807_201831__$1);
var G__201834 = c__25024__auto___201832;
var G__201835 = cljs.core.count.call(null,c__25024__auto___201832);
var G__201836 = (0);
seq__201807_201821 = G__201833;
chunk__201808_201822 = G__201834;
count__201809_201823 = G__201835;
i__201810_201824 = G__201836;
continue;
} else {
var f_201837 = cljs.core.first.call(null,seq__201807_201831__$1);
cljs.core.println.call(null,"  ",f_201837);

var G__201838 = cljs.core.next.call(null,seq__201807_201831__$1);
var G__201839 = null;
var G__201840 = (0);
var G__201841 = (0);
seq__201807_201821 = G__201838;
chunk__201808_201822 = G__201839;
count__201809_201823 = G__201840;
i__201810_201824 = G__201841;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_201842 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24221__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_201842);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_201842)))?cljs.core.second.call(null,arglists_201842):arglists_201842));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__201811 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__201812 = null;
var count__201813 = (0);
var i__201814 = (0);
while(true){
if((i__201814 < count__201813)){
var vec__201815 = cljs.core._nth.call(null,chunk__201812,i__201814);
var name = cljs.core.nth.call(null,vec__201815,(0),null);
var map__201816 = cljs.core.nth.call(null,vec__201815,(1),null);
var map__201816__$1 = ((((!((map__201816 == null)))?((((map__201816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__201816):map__201816);
var doc = cljs.core.get.call(null,map__201816__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__201816__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__201843 = seq__201811;
var G__201844 = chunk__201812;
var G__201845 = count__201813;
var G__201846 = (i__201814 + (1));
seq__201811 = G__201843;
chunk__201812 = G__201844;
count__201813 = G__201845;
i__201814 = G__201846;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__201811);
if(temp__4425__auto__){
var seq__201811__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__201811__$1)){
var c__25024__auto__ = cljs.core.chunk_first.call(null,seq__201811__$1);
var G__201847 = cljs.core.chunk_rest.call(null,seq__201811__$1);
var G__201848 = c__25024__auto__;
var G__201849 = cljs.core.count.call(null,c__25024__auto__);
var G__201850 = (0);
seq__201811 = G__201847;
chunk__201812 = G__201848;
count__201813 = G__201849;
i__201814 = G__201850;
continue;
} else {
var vec__201818 = cljs.core.first.call(null,seq__201811__$1);
var name = cljs.core.nth.call(null,vec__201818,(0),null);
var map__201819 = cljs.core.nth.call(null,vec__201818,(1),null);
var map__201819__$1 = ((((!((map__201819 == null)))?((((map__201819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__201819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__201819):map__201819);
var doc = cljs.core.get.call(null,map__201819__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__201819__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__201851 = cljs.core.next.call(null,seq__201811__$1);
var G__201852 = null;
var G__201853 = (0);
var G__201854 = (0);
seq__201811 = G__201851;
chunk__201812 = G__201852;
count__201813 = G__201853;
i__201814 = G__201854;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map