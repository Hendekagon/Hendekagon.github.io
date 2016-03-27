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
var seq__282954_282982 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__282955_282983 = null;
var count__282956_282984 = (0);
var i__282957_282985 = (0);
while(true){
if((i__282957_282985 < count__282956_282984)){
var f_282986 = cljs.core._nth.call(null,chunk__282955_282983,i__282957_282985);
cljs.core.println.call(null,"  ",f_282986);

var G__282987 = seq__282954_282982;
var G__282988 = chunk__282955_282983;
var G__282989 = count__282956_282984;
var G__282990 = (i__282957_282985 + (1));
seq__282954_282982 = G__282987;
chunk__282955_282983 = G__282988;
count__282956_282984 = G__282989;
i__282957_282985 = G__282990;
continue;
} else {
var temp__4657__auto___282991 = cljs.core.seq.call(null,seq__282954_282982);
if(temp__4657__auto___282991){
var seq__282954_282992__$1 = temp__4657__auto___282991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__282954_282992__$1)){
var c__36002__auto___282993 = cljs.core.chunk_first.call(null,seq__282954_282992__$1);
var G__282994 = cljs.core.chunk_rest.call(null,seq__282954_282992__$1);
var G__282995 = c__36002__auto___282993;
var G__282996 = cljs.core.count.call(null,c__36002__auto___282993);
var G__282997 = (0);
seq__282954_282982 = G__282994;
chunk__282955_282983 = G__282995;
count__282956_282984 = G__282996;
i__282957_282985 = G__282997;
continue;
} else {
var f_282999 = cljs.core.first.call(null,seq__282954_282992__$1);
cljs.core.println.call(null,"  ",f_282999);

var G__283001 = cljs.core.next.call(null,seq__282954_282992__$1);
var G__283002 = null;
var G__283003 = (0);
var G__283004 = (0);
seq__282954_282982 = G__283001;
chunk__282955_282983 = G__283002;
count__282956_282984 = G__283003;
i__282957_282985 = G__283004;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_283007 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__35191__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_283007);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_283007)))?cljs.core.second.call(null,arglists_283007):arglists_283007));
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
var seq__282964 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__282965 = null;
var count__282966 = (0);
var i__282967 = (0);
while(true){
if((i__282967 < count__282966)){
var vec__282968 = cljs.core._nth.call(null,chunk__282965,i__282967);
var name = cljs.core.nth.call(null,vec__282968,(0),null);
var map__282969 = cljs.core.nth.call(null,vec__282968,(1),null);
var map__282969__$1 = ((((!((map__282969 == null)))?((((map__282969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__282969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__282969):map__282969);
var doc = cljs.core.get.call(null,map__282969__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__282969__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__283013 = seq__282964;
var G__283014 = chunk__282965;
var G__283015 = count__282966;
var G__283016 = (i__282967 + (1));
seq__282964 = G__283013;
chunk__282965 = G__283014;
count__282966 = G__283015;
i__282967 = G__283016;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__282964);
if(temp__4657__auto__){
var seq__282964__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__282964__$1)){
var c__36002__auto__ = cljs.core.chunk_first.call(null,seq__282964__$1);
var G__283017 = cljs.core.chunk_rest.call(null,seq__282964__$1);
var G__283018 = c__36002__auto__;
var G__283019 = cljs.core.count.call(null,c__36002__auto__);
var G__283020 = (0);
seq__282964 = G__283017;
chunk__282965 = G__283018;
count__282966 = G__283019;
i__282967 = G__283020;
continue;
} else {
var vec__282974 = cljs.core.first.call(null,seq__282964__$1);
var name = cljs.core.nth.call(null,vec__282974,(0),null);
var map__282975 = cljs.core.nth.call(null,vec__282974,(1),null);
var map__282975__$1 = ((((!((map__282975 == null)))?((((map__282975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__282975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__282975):map__282975);
var doc = cljs.core.get.call(null,map__282975__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__282975__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__283021 = cljs.core.next.call(null,seq__282964__$1);
var G__283022 = null;
var G__283023 = (0);
var G__283024 = (0);
seq__282964 = G__283021;
chunk__282965 = G__283022;
count__282966 = G__283023;
i__282967 = G__283024;
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
