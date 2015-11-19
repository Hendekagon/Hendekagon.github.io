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
var seq__374534_374548 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__374535_374549 = null;
var count__374536_374550 = (0);
var i__374537_374551 = (0);
while(true){
if((i__374537_374551 < count__374536_374550)){
var f_374552 = cljs.core._nth.call(null,chunk__374535_374549,i__374537_374551);
cljs.core.println.call(null,"  ",f_374552);

var G__374553 = seq__374534_374548;
var G__374554 = chunk__374535_374549;
var G__374555 = count__374536_374550;
var G__374556 = (i__374537_374551 + (1));
seq__374534_374548 = G__374553;
chunk__374535_374549 = G__374554;
count__374536_374550 = G__374555;
i__374537_374551 = G__374556;
continue;
} else {
var temp__4425__auto___374557 = cljs.core.seq.call(null,seq__374534_374548);
if(temp__4425__auto___374557){
var seq__374534_374558__$1 = temp__4425__auto___374557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__374534_374558__$1)){
var c__24964__auto___374559 = cljs.core.chunk_first.call(null,seq__374534_374558__$1);
var G__374560 = cljs.core.chunk_rest.call(null,seq__374534_374558__$1);
var G__374561 = c__24964__auto___374559;
var G__374562 = cljs.core.count.call(null,c__24964__auto___374559);
var G__374563 = (0);
seq__374534_374548 = G__374560;
chunk__374535_374549 = G__374561;
count__374536_374550 = G__374562;
i__374537_374551 = G__374563;
continue;
} else {
var f_374564 = cljs.core.first.call(null,seq__374534_374558__$1);
cljs.core.println.call(null,"  ",f_374564);

var G__374565 = cljs.core.next.call(null,seq__374534_374558__$1);
var G__374566 = null;
var G__374567 = (0);
var G__374568 = (0);
seq__374534_374548 = G__374565;
chunk__374535_374549 = G__374566;
count__374536_374550 = G__374567;
i__374537_374551 = G__374568;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_374569 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24161__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_374569);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_374569)))?cljs.core.second.call(null,arglists_374569):arglists_374569));
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
var seq__374538 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__374539 = null;
var count__374540 = (0);
var i__374541 = (0);
while(true){
if((i__374541 < count__374540)){
var vec__374542 = cljs.core._nth.call(null,chunk__374539,i__374541);
var name = cljs.core.nth.call(null,vec__374542,(0),null);
var map__374543 = cljs.core.nth.call(null,vec__374542,(1),null);
var map__374543__$1 = ((((!((map__374543 == null)))?((((map__374543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__374543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__374543):map__374543);
var doc = cljs.core.get.call(null,map__374543__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__374543__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__374570 = seq__374538;
var G__374571 = chunk__374539;
var G__374572 = count__374540;
var G__374573 = (i__374541 + (1));
seq__374538 = G__374570;
chunk__374539 = G__374571;
count__374540 = G__374572;
i__374541 = G__374573;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__374538);
if(temp__4425__auto__){
var seq__374538__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__374538__$1)){
var c__24964__auto__ = cljs.core.chunk_first.call(null,seq__374538__$1);
var G__374574 = cljs.core.chunk_rest.call(null,seq__374538__$1);
var G__374575 = c__24964__auto__;
var G__374576 = cljs.core.count.call(null,c__24964__auto__);
var G__374577 = (0);
seq__374538 = G__374574;
chunk__374539 = G__374575;
count__374540 = G__374576;
i__374541 = G__374577;
continue;
} else {
var vec__374545 = cljs.core.first.call(null,seq__374538__$1);
var name = cljs.core.nth.call(null,vec__374545,(0),null);
var map__374546 = cljs.core.nth.call(null,vec__374545,(1),null);
var map__374546__$1 = ((((!((map__374546 == null)))?((((map__374546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__374546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__374546):map__374546);
var doc = cljs.core.get.call(null,map__374546__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__374546__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__374578 = cljs.core.next.call(null,seq__374538__$1);
var G__374579 = null;
var G__374580 = (0);
var G__374581 = (0);
seq__374538 = G__374578;
chunk__374539 = G__374579;
count__374540 = G__374580;
i__374541 = G__374581;
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