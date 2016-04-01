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
var seq__66511_66525 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66512_66526 = null;
var count__66513_66527 = (0);
var i__66514_66528 = (0);
while(true){
if((i__66514_66528 < count__66513_66527)){
var f_66529 = cljs.core._nth.call(null,chunk__66512_66526,i__66514_66528);
cljs.core.println.call(null,"  ",f_66529);

var G__66530 = seq__66511_66525;
var G__66531 = chunk__66512_66526;
var G__66532 = count__66513_66527;
var G__66533 = (i__66514_66528 + (1));
seq__66511_66525 = G__66530;
chunk__66512_66526 = G__66531;
count__66513_66527 = G__66532;
i__66514_66528 = G__66533;
continue;
} else {
var temp__4657__auto___66534 = cljs.core.seq.call(null,seq__66511_66525);
if(temp__4657__auto___66534){
var seq__66511_66535__$1 = temp__4657__auto___66534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66511_66535__$1)){
var c__36233__auto___66536 = cljs.core.chunk_first.call(null,seq__66511_66535__$1);
var G__66537 = cljs.core.chunk_rest.call(null,seq__66511_66535__$1);
var G__66538 = c__36233__auto___66536;
var G__66539 = cljs.core.count.call(null,c__36233__auto___66536);
var G__66540 = (0);
seq__66511_66525 = G__66537;
chunk__66512_66526 = G__66538;
count__66513_66527 = G__66539;
i__66514_66528 = G__66540;
continue;
} else {
var f_66541 = cljs.core.first.call(null,seq__66511_66535__$1);
cljs.core.println.call(null,"  ",f_66541);

var G__66542 = cljs.core.next.call(null,seq__66511_66535__$1);
var G__66543 = null;
var G__66544 = (0);
var G__66545 = (0);
seq__66511_66525 = G__66542;
chunk__66512_66526 = G__66543;
count__66513_66527 = G__66544;
i__66514_66528 = G__66545;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_66546 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__35422__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_66546);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_66546)))?cljs.core.second.call(null,arglists_66546):arglists_66546));
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
var seq__66515 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66516 = null;
var count__66517 = (0);
var i__66518 = (0);
while(true){
if((i__66518 < count__66517)){
var vec__66519 = cljs.core._nth.call(null,chunk__66516,i__66518);
var name = cljs.core.nth.call(null,vec__66519,(0),null);
var map__66520 = cljs.core.nth.call(null,vec__66519,(1),null);
var map__66520__$1 = ((((!((map__66520 == null)))?((((map__66520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66520):map__66520);
var doc = cljs.core.get.call(null,map__66520__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__66520__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__66547 = seq__66515;
var G__66548 = chunk__66516;
var G__66549 = count__66517;
var G__66550 = (i__66518 + (1));
seq__66515 = G__66547;
chunk__66516 = G__66548;
count__66517 = G__66549;
i__66518 = G__66550;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__66515);
if(temp__4657__auto__){
var seq__66515__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66515__$1)){
var c__36233__auto__ = cljs.core.chunk_first.call(null,seq__66515__$1);
var G__66551 = cljs.core.chunk_rest.call(null,seq__66515__$1);
var G__66552 = c__36233__auto__;
var G__66553 = cljs.core.count.call(null,c__36233__auto__);
var G__66554 = (0);
seq__66515 = G__66551;
chunk__66516 = G__66552;
count__66517 = G__66553;
i__66518 = G__66554;
continue;
} else {
var vec__66522 = cljs.core.first.call(null,seq__66515__$1);
var name = cljs.core.nth.call(null,vec__66522,(0),null);
var map__66523 = cljs.core.nth.call(null,vec__66522,(1),null);
var map__66523__$1 = ((((!((map__66523 == null)))?((((map__66523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66523):map__66523);
var doc = cljs.core.get.call(null,map__66523__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__66523__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__66555 = cljs.core.next.call(null,seq__66515__$1);
var G__66556 = null;
var G__66557 = (0);
var G__66558 = (0);
seq__66515 = G__66555;
chunk__66516 = G__66556;
count__66517 = G__66557;
i__66518 = G__66558;
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

//# sourceMappingURL=repl.js.map?rel=1459533428285