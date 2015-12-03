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
var seq__47937_47951 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47938_47952 = null;
var count__47939_47953 = (0);
var i__47940_47954 = (0);
while(true){
if((i__47940_47954 < count__47939_47953)){
var f_47955 = cljs.core._nth.call(null,chunk__47938_47952,i__47940_47954);
cljs.core.println.call(null,"  ",f_47955);

var G__47956 = seq__47937_47951;
var G__47957 = chunk__47938_47952;
var G__47958 = count__47939_47953;
var G__47959 = (i__47940_47954 + (1));
seq__47937_47951 = G__47956;
chunk__47938_47952 = G__47957;
count__47939_47953 = G__47958;
i__47940_47954 = G__47959;
continue;
} else {
var temp__4425__auto___47960 = cljs.core.seq.call(null,seq__47937_47951);
if(temp__4425__auto___47960){
var seq__47937_47961__$1 = temp__4425__auto___47960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47937_47961__$1)){
var c__24968__auto___47962 = cljs.core.chunk_first.call(null,seq__47937_47961__$1);
var G__47963 = cljs.core.chunk_rest.call(null,seq__47937_47961__$1);
var G__47964 = c__24968__auto___47962;
var G__47965 = cljs.core.count.call(null,c__24968__auto___47962);
var G__47966 = (0);
seq__47937_47951 = G__47963;
chunk__47938_47952 = G__47964;
count__47939_47953 = G__47965;
i__47940_47954 = G__47966;
continue;
} else {
var f_47967 = cljs.core.first.call(null,seq__47937_47961__$1);
cljs.core.println.call(null,"  ",f_47967);

var G__47968 = cljs.core.next.call(null,seq__47937_47961__$1);
var G__47969 = null;
var G__47970 = (0);
var G__47971 = (0);
seq__47937_47951 = G__47968;
chunk__47938_47952 = G__47969;
count__47939_47953 = G__47970;
i__47940_47954 = G__47971;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47972 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24165__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47972);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47972)))?cljs.core.second.call(null,arglists_47972):arglists_47972));
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
var seq__47941 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47942 = null;
var count__47943 = (0);
var i__47944 = (0);
while(true){
if((i__47944 < count__47943)){
var vec__47945 = cljs.core._nth.call(null,chunk__47942,i__47944);
var name = cljs.core.nth.call(null,vec__47945,(0),null);
var map__47946 = cljs.core.nth.call(null,vec__47945,(1),null);
var map__47946__$1 = ((((!((map__47946 == null)))?((((map__47946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47946):map__47946);
var doc = cljs.core.get.call(null,map__47946__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__47946__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__47973 = seq__47941;
var G__47974 = chunk__47942;
var G__47975 = count__47943;
var G__47976 = (i__47944 + (1));
seq__47941 = G__47973;
chunk__47942 = G__47974;
count__47943 = G__47975;
i__47944 = G__47976;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__47941);
if(temp__4425__auto__){
var seq__47941__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47941__$1)){
var c__24968__auto__ = cljs.core.chunk_first.call(null,seq__47941__$1);
var G__47977 = cljs.core.chunk_rest.call(null,seq__47941__$1);
var G__47978 = c__24968__auto__;
var G__47979 = cljs.core.count.call(null,c__24968__auto__);
var G__47980 = (0);
seq__47941 = G__47977;
chunk__47942 = G__47978;
count__47943 = G__47979;
i__47944 = G__47980;
continue;
} else {
var vec__47948 = cljs.core.first.call(null,seq__47941__$1);
var name = cljs.core.nth.call(null,vec__47948,(0),null);
var map__47949 = cljs.core.nth.call(null,vec__47948,(1),null);
var map__47949__$1 = ((((!((map__47949 == null)))?((((map__47949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47949):map__47949);
var doc = cljs.core.get.call(null,map__47949__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__47949__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__47981 = cljs.core.next.call(null,seq__47941__$1);
var G__47982 = null;
var G__47983 = (0);
var G__47984 = (0);
seq__47941 = G__47981;
chunk__47942 = G__47982;
count__47943 = G__47983;
i__47944 = G__47984;
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