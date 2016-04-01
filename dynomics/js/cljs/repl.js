// Compiled by ClojureScript 1.8.40 {}
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
var seq__125955_125977 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__125956_125978 = null;
var count__125957_125979 = (0);
var i__125958_125980 = (0);
while(true){
if((i__125958_125980 < count__125957_125979)){
var f_125981 = cljs.core._nth.call(null,chunk__125956_125978,i__125958_125980);
cljs.core.println.call(null,"  ",f_125981);

var G__125985 = seq__125955_125977;
var G__125986 = chunk__125956_125978;
var G__125987 = count__125957_125979;
var G__125988 = (i__125958_125980 + (1));
seq__125955_125977 = G__125985;
chunk__125956_125978 = G__125986;
count__125957_125979 = G__125987;
i__125958_125980 = G__125988;
continue;
} else {
var temp__4657__auto___125990 = cljs.core.seq.call(null,seq__125955_125977);
if(temp__4657__auto___125990){
var seq__125955_125992__$1 = temp__4657__auto___125990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125955_125992__$1)){
var c__36236__auto___125993 = cljs.core.chunk_first.call(null,seq__125955_125992__$1);
var G__125994 = cljs.core.chunk_rest.call(null,seq__125955_125992__$1);
var G__125995 = c__36236__auto___125993;
var G__125996 = cljs.core.count.call(null,c__36236__auto___125993);
var G__125997 = (0);
seq__125955_125977 = G__125994;
chunk__125956_125978 = G__125995;
count__125957_125979 = G__125996;
i__125958_125980 = G__125997;
continue;
} else {
var f_125999 = cljs.core.first.call(null,seq__125955_125992__$1);
cljs.core.println.call(null,"  ",f_125999);

var G__126000 = cljs.core.next.call(null,seq__125955_125992__$1);
var G__126001 = null;
var G__126002 = (0);
var G__126003 = (0);
seq__125955_125977 = G__126000;
chunk__125956_125978 = G__126001;
count__125957_125979 = G__126002;
i__125958_125980 = G__126003;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_126004 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__35425__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_126004);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_126004)))?cljs.core.second.call(null,arglists_126004):arglists_126004));
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
var seq__125961 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__125962 = null;
var count__125963 = (0);
var i__125964 = (0);
while(true){
if((i__125964 < count__125963)){
var vec__125965 = cljs.core._nth.call(null,chunk__125962,i__125964);
var name = cljs.core.nth.call(null,vec__125965,(0),null);
var map__125966 = cljs.core.nth.call(null,vec__125965,(1),null);
var map__125966__$1 = ((((!((map__125966 == null)))?((((map__125966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__125966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__125966):map__125966);
var doc = cljs.core.get.call(null,map__125966__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__125966__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__126025 = seq__125961;
var G__126026 = chunk__125962;
var G__126027 = count__125963;
var G__126028 = (i__125964 + (1));
seq__125961 = G__126025;
chunk__125962 = G__126026;
count__125963 = G__126027;
i__125964 = G__126028;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__125961);
if(temp__4657__auto__){
var seq__125961__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125961__$1)){
var c__36236__auto__ = cljs.core.chunk_first.call(null,seq__125961__$1);
var G__126029 = cljs.core.chunk_rest.call(null,seq__125961__$1);
var G__126030 = c__36236__auto__;
var G__126031 = cljs.core.count.call(null,c__36236__auto__);
var G__126032 = (0);
seq__125961 = G__126029;
chunk__125962 = G__126030;
count__125963 = G__126031;
i__125964 = G__126032;
continue;
} else {
var vec__125970 = cljs.core.first.call(null,seq__125961__$1);
var name = cljs.core.nth.call(null,vec__125970,(0),null);
var map__125971 = cljs.core.nth.call(null,vec__125970,(1),null);
var map__125971__$1 = ((((!((map__125971 == null)))?((((map__125971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__125971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__125971):map__125971);
var doc = cljs.core.get.call(null,map__125971__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__125971__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__126036 = cljs.core.next.call(null,seq__125961__$1);
var G__126037 = null;
var G__126038 = (0);
var G__126039 = (0);
seq__125961 = G__126036;
chunk__125962 = G__126037;
count__125963 = G__126038;
i__125964 = G__126039;
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
