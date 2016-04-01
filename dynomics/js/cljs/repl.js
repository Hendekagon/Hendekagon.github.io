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
var seq__85454_85478 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__85455_85479 = null;
var count__85456_85480 = (0);
var i__85457_85481 = (0);
while(true){
if((i__85457_85481 < count__85456_85480)){
var f_85483 = cljs.core._nth.call(null,chunk__85455_85479,i__85457_85481);
cljs.core.println.call(null,"  ",f_85483);

var G__85484 = seq__85454_85478;
var G__85485 = chunk__85455_85479;
var G__85486 = count__85456_85480;
var G__85487 = (i__85457_85481 + (1));
seq__85454_85478 = G__85484;
chunk__85455_85479 = G__85485;
count__85456_85480 = G__85486;
i__85457_85481 = G__85487;
continue;
} else {
var temp__4657__auto___85489 = cljs.core.seq.call(null,seq__85454_85478);
if(temp__4657__auto___85489){
var seq__85454_85490__$1 = temp__4657__auto___85489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85454_85490__$1)){
var c__36233__auto___85491 = cljs.core.chunk_first.call(null,seq__85454_85490__$1);
var G__85492 = cljs.core.chunk_rest.call(null,seq__85454_85490__$1);
var G__85493 = c__36233__auto___85491;
var G__85494 = cljs.core.count.call(null,c__36233__auto___85491);
var G__85495 = (0);
seq__85454_85478 = G__85492;
chunk__85455_85479 = G__85493;
count__85456_85480 = G__85494;
i__85457_85481 = G__85495;
continue;
} else {
var f_85496 = cljs.core.first.call(null,seq__85454_85490__$1);
cljs.core.println.call(null,"  ",f_85496);

var G__85497 = cljs.core.next.call(null,seq__85454_85490__$1);
var G__85498 = null;
var G__85499 = (0);
var G__85500 = (0);
seq__85454_85478 = G__85497;
chunk__85455_85479 = G__85498;
count__85456_85480 = G__85499;
i__85457_85481 = G__85500;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_85501 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__35422__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_85501);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_85501)))?cljs.core.second.call(null,arglists_85501):arglists_85501));
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
var seq__85459 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__85460 = null;
var count__85461 = (0);
var i__85462 = (0);
while(true){
if((i__85462 < count__85461)){
var vec__85464 = cljs.core._nth.call(null,chunk__85460,i__85462);
var name = cljs.core.nth.call(null,vec__85464,(0),null);
var map__85465 = cljs.core.nth.call(null,vec__85464,(1),null);
var map__85465__$1 = ((((!((map__85465 == null)))?((((map__85465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85465):map__85465);
var doc = cljs.core.get.call(null,map__85465__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__85465__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__85513 = seq__85459;
var G__85514 = chunk__85460;
var G__85515 = count__85461;
var G__85516 = (i__85462 + (1));
seq__85459 = G__85513;
chunk__85460 = G__85514;
count__85461 = G__85515;
i__85462 = G__85516;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__85459);
if(temp__4657__auto__){
var seq__85459__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85459__$1)){
var c__36233__auto__ = cljs.core.chunk_first.call(null,seq__85459__$1);
var G__85517 = cljs.core.chunk_rest.call(null,seq__85459__$1);
var G__85518 = c__36233__auto__;
var G__85519 = cljs.core.count.call(null,c__36233__auto__);
var G__85520 = (0);
seq__85459 = G__85517;
chunk__85460 = G__85518;
count__85461 = G__85519;
i__85462 = G__85520;
continue;
} else {
var vec__85470 = cljs.core.first.call(null,seq__85459__$1);
var name = cljs.core.nth.call(null,vec__85470,(0),null);
var map__85471 = cljs.core.nth.call(null,vec__85470,(1),null);
var map__85471__$1 = ((((!((map__85471 == null)))?((((map__85471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85471):map__85471);
var doc = cljs.core.get.call(null,map__85471__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__85471__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__85523 = cljs.core.next.call(null,seq__85459__$1);
var G__85524 = null;
var G__85525 = (0);
var G__85526 = (0);
seq__85459 = G__85523;
chunk__85460 = G__85524;
count__85461 = G__85525;
i__85462 = G__85526;
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
