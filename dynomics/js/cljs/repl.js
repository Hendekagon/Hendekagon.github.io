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
var seq__449771_449787 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__449772_449788 = null;
var count__449773_449789 = (0);
var i__449774_449790 = (0);
while(true){
if((i__449774_449790 < count__449773_449789)){
var f_449792 = cljs.core._nth.call(null,chunk__449772_449788,i__449774_449790);
cljs.core.println.call(null,"  ",f_449792);

var G__449794 = seq__449771_449787;
var G__449795 = chunk__449772_449788;
var G__449796 = count__449773_449789;
var G__449797 = (i__449774_449790 + (1));
seq__449771_449787 = G__449794;
chunk__449772_449788 = G__449795;
count__449773_449789 = G__449796;
i__449774_449790 = G__449797;
continue;
} else {
var temp__4657__auto___449798 = cljs.core.seq.call(null,seq__449771_449787);
if(temp__4657__auto___449798){
var seq__449771_449799__$1 = temp__4657__auto___449798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__449771_449799__$1)){
var c__36002__auto___449800 = cljs.core.chunk_first.call(null,seq__449771_449799__$1);
var G__449801 = cljs.core.chunk_rest.call(null,seq__449771_449799__$1);
var G__449802 = c__36002__auto___449800;
var G__449803 = cljs.core.count.call(null,c__36002__auto___449800);
var G__449804 = (0);
seq__449771_449787 = G__449801;
chunk__449772_449788 = G__449802;
count__449773_449789 = G__449803;
i__449774_449790 = G__449804;
continue;
} else {
var f_449806 = cljs.core.first.call(null,seq__449771_449799__$1);
cljs.core.println.call(null,"  ",f_449806);

var G__449807 = cljs.core.next.call(null,seq__449771_449799__$1);
var G__449808 = null;
var G__449809 = (0);
var G__449810 = (0);
seq__449771_449787 = G__449807;
chunk__449772_449788 = G__449808;
count__449773_449789 = G__449809;
i__449774_449790 = G__449810;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_449811 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__35191__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_449811);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_449811)))?cljs.core.second.call(null,arglists_449811):arglists_449811));
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
var seq__449775 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__449776 = null;
var count__449777 = (0);
var i__449778 = (0);
while(true){
if((i__449778 < count__449777)){
var vec__449779 = cljs.core._nth.call(null,chunk__449776,i__449778);
var name = cljs.core.nth.call(null,vec__449779,(0),null);
var map__449780 = cljs.core.nth.call(null,vec__449779,(1),null);
var map__449780__$1 = ((((!((map__449780 == null)))?((((map__449780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__449780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__449780):map__449780);
var doc = cljs.core.get.call(null,map__449780__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__449780__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__449816 = seq__449775;
var G__449817 = chunk__449776;
var G__449818 = count__449777;
var G__449819 = (i__449778 + (1));
seq__449775 = G__449816;
chunk__449776 = G__449817;
count__449777 = G__449818;
i__449778 = G__449819;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__449775);
if(temp__4657__auto__){
var seq__449775__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__449775__$1)){
var c__36002__auto__ = cljs.core.chunk_first.call(null,seq__449775__$1);
var G__449822 = cljs.core.chunk_rest.call(null,seq__449775__$1);
var G__449823 = c__36002__auto__;
var G__449824 = cljs.core.count.call(null,c__36002__auto__);
var G__449825 = (0);
seq__449775 = G__449822;
chunk__449776 = G__449823;
count__449777 = G__449824;
i__449778 = G__449825;
continue;
} else {
var vec__449782 = cljs.core.first.call(null,seq__449775__$1);
var name = cljs.core.nth.call(null,vec__449782,(0),null);
var map__449783 = cljs.core.nth.call(null,vec__449782,(1),null);
var map__449783__$1 = ((((!((map__449783 == null)))?((((map__449783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__449783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__449783):map__449783);
var doc = cljs.core.get.call(null,map__449783__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__449783__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__449830 = cljs.core.next.call(null,seq__449775__$1);
var G__449831 = null;
var G__449832 = (0);
var G__449833 = (0);
seq__449775 = G__449830;
chunk__449776 = G__449831;
count__449777 = G__449832;
i__449778 = G__449833;
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
