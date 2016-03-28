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
var seq__85702_85726 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__85703_85727 = null;
var count__85704_85728 = (0);
var i__85705_85729 = (0);
while(true){
if((i__85705_85729 < count__85704_85728)){
var f_85730 = cljs.core._nth.call(null,chunk__85703_85727,i__85705_85729);
cljs.core.println.call(null,"  ",f_85730);

var G__85731 = seq__85702_85726;
var G__85732 = chunk__85703_85727;
var G__85733 = count__85704_85728;
var G__85734 = (i__85705_85729 + (1));
seq__85702_85726 = G__85731;
chunk__85703_85727 = G__85732;
count__85704_85728 = G__85733;
i__85705_85729 = G__85734;
continue;
} else {
var temp__4657__auto___85735 = cljs.core.seq.call(null,seq__85702_85726);
if(temp__4657__auto___85735){
var seq__85702_85736__$1 = temp__4657__auto___85735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85702_85736__$1)){
var c__26638__auto___85737 = cljs.core.chunk_first.call(null,seq__85702_85736__$1);
var G__85738 = cljs.core.chunk_rest.call(null,seq__85702_85736__$1);
var G__85739 = c__26638__auto___85737;
var G__85740 = cljs.core.count.call(null,c__26638__auto___85737);
var G__85741 = (0);
seq__85702_85726 = G__85738;
chunk__85703_85727 = G__85739;
count__85704_85728 = G__85740;
i__85705_85729 = G__85741;
continue;
} else {
var f_85742 = cljs.core.first.call(null,seq__85702_85736__$1);
cljs.core.println.call(null,"  ",f_85742);

var G__85743 = cljs.core.next.call(null,seq__85702_85736__$1);
var G__85744 = null;
var G__85745 = (0);
var G__85746 = (0);
seq__85702_85726 = G__85743;
chunk__85703_85727 = G__85744;
count__85704_85728 = G__85745;
i__85705_85729 = G__85746;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_85747 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25827__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_85747);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_85747)))?cljs.core.second.call(null,arglists_85747):arglists_85747));
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
var seq__85712 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__85713 = null;
var count__85714 = (0);
var i__85715 = (0);
while(true){
if((i__85715 < count__85714)){
var vec__85716 = cljs.core._nth.call(null,chunk__85713,i__85715);
var name = cljs.core.nth.call(null,vec__85716,(0),null);
var map__85717 = cljs.core.nth.call(null,vec__85716,(1),null);
var map__85717__$1 = ((((!((map__85717 == null)))?((((map__85717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85717):map__85717);
var doc = cljs.core.get.call(null,map__85717__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__85717__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__85748 = seq__85712;
var G__85749 = chunk__85713;
var G__85750 = count__85714;
var G__85751 = (i__85715 + (1));
seq__85712 = G__85748;
chunk__85713 = G__85749;
count__85714 = G__85750;
i__85715 = G__85751;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__85712);
if(temp__4657__auto__){
var seq__85712__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85712__$1)){
var c__26638__auto__ = cljs.core.chunk_first.call(null,seq__85712__$1);
var G__85765 = cljs.core.chunk_rest.call(null,seq__85712__$1);
var G__85766 = c__26638__auto__;
var G__85767 = cljs.core.count.call(null,c__26638__auto__);
var G__85768 = (0);
seq__85712 = G__85765;
chunk__85713 = G__85766;
count__85714 = G__85767;
i__85715 = G__85768;
continue;
} else {
var vec__85723 = cljs.core.first.call(null,seq__85712__$1);
var name = cljs.core.nth.call(null,vec__85723,(0),null);
var map__85724 = cljs.core.nth.call(null,vec__85723,(1),null);
var map__85724__$1 = ((((!((map__85724 == null)))?((((map__85724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85724):map__85724);
var doc = cljs.core.get.call(null,map__85724__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__85724__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__85777 = cljs.core.next.call(null,seq__85712__$1);
var G__85778 = null;
var G__85779 = (0);
var G__85780 = (0);
seq__85712 = G__85777;
chunk__85713 = G__85778;
count__85714 = G__85779;
i__85715 = G__85780;
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
