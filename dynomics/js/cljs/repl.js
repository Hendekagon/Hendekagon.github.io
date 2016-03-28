// Compiled by ClojureScript 1.8.34 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
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
var seq__369855_369873 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__369856_369874 = null;
var count__369857_369875 = (0);
var i__369858_369876 = (0);
while(true){
if((i__369858_369876 < count__369857_369875)){
var f_369877 = cljs.core._nth.call(null,chunk__369856_369874,i__369858_369876);
cljs.core.println.call(null,"  ",f_369877);

var G__369878 = seq__369855_369873;
var G__369879 = chunk__369856_369874;
var G__369880 = count__369857_369875;
var G__369881 = (i__369858_369876 + (1));
seq__369855_369873 = G__369878;
chunk__369856_369874 = G__369879;
count__369857_369875 = G__369880;
i__369858_369876 = G__369881;
continue;
} else {
var temp__4657__auto___369882 = cljs.core.seq.call(null,seq__369855_369873);
if(temp__4657__auto___369882){
var seq__369855_369883__$1 = temp__4657__auto___369882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__369855_369883__$1)){
var c__36002__auto___369884 = cljs.core.chunk_first.call(null,seq__369855_369883__$1);
var G__369885 = cljs.core.chunk_rest.call(null,seq__369855_369883__$1);
var G__369886 = c__36002__auto___369884;
var G__369887 = cljs.core.count.call(null,c__36002__auto___369884);
var G__369888 = (0);
seq__369855_369873 = G__369885;
chunk__369856_369874 = G__369886;
count__369857_369875 = G__369887;
i__369858_369876 = G__369888;
continue;
} else {
var f_369889 = cljs.core.first.call(null,seq__369855_369883__$1);
cljs.core.println.call(null,"  ",f_369889);

var G__369890 = cljs.core.next.call(null,seq__369855_369883__$1);
var G__369891 = null;
var G__369892 = (0);
var G__369893 = (0);
seq__369855_369873 = G__369890;
chunk__369856_369874 = G__369891;
count__369857_369875 = G__369892;
i__369858_369876 = G__369893;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_369894 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__35191__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_369894);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_369894)))?cljs.core.second.call(null,arglists_369894):arglists_369894));
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
var seq__369860 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__369861 = null;
var count__369862 = (0);
var i__369864 = (0);
while(true){
if((i__369864 < count__369862)){
var vec__369867 = cljs.core._nth.call(null,chunk__369861,i__369864);
var name = cljs.core.nth.call(null,vec__369867,(0),null);
var map__369868 = cljs.core.nth.call(null,vec__369867,(1),null);
var map__369868__$1 = ((((!((map__369868 == null)))?((((map__369868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__369868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__369868):map__369868);
var doc = cljs.core.get.call(null,map__369868__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__369868__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__369899 = seq__369860;
var G__369900 = chunk__369861;
var G__369901 = count__369862;
var G__369902 = (i__369864 + (1));
seq__369860 = G__369899;
chunk__369861 = G__369900;
count__369862 = G__369901;
i__369864 = G__369902;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__369860);
if(temp__4657__auto__){
var seq__369860__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__369860__$1)){
var c__36002__auto__ = cljs.core.chunk_first.call(null,seq__369860__$1);
var G__369903 = cljs.core.chunk_rest.call(null,seq__369860__$1);
var G__369904 = c__36002__auto__;
var G__369905 = cljs.core.count.call(null,c__36002__auto__);
var G__369906 = (0);
seq__369860 = G__369903;
chunk__369861 = G__369904;
count__369862 = G__369905;
i__369864 = G__369906;
continue;
} else {
var vec__369870 = cljs.core.first.call(null,seq__369860__$1);
var name = cljs.core.nth.call(null,vec__369870,(0),null);
var map__369871 = cljs.core.nth.call(null,vec__369870,(1),null);
var map__369871__$1 = ((((!((map__369871 == null)))?((((map__369871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__369871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__369871):map__369871);
var doc = cljs.core.get.call(null,map__369871__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__369871__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__369911 = cljs.core.next.call(null,seq__369860__$1);
var G__369912 = null;
var G__369913 = (0);
var G__369914 = (0);
seq__369860 = G__369911;
chunk__369861 = G__369912;
count__369862 = G__369913;
i__369864 = G__369914;
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
