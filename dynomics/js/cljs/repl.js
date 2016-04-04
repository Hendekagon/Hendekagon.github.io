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
var seq__284691_284709 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__284692_284710 = null;
var count__284693_284711 = (0);
var i__284694_284712 = (0);
while(true){
if((i__284694_284712 < count__284693_284711)){
var f_284713 = cljs.core._nth.call(null,chunk__284692_284710,i__284694_284712);
cljs.core.println.call(null,"  ",f_284713);

var G__284714 = seq__284691_284709;
var G__284715 = chunk__284692_284710;
var G__284716 = count__284693_284711;
var G__284717 = (i__284694_284712 + (1));
seq__284691_284709 = G__284714;
chunk__284692_284710 = G__284715;
count__284693_284711 = G__284716;
i__284694_284712 = G__284717;
continue;
} else {
var temp__4657__auto___284718 = cljs.core.seq.call(null,seq__284691_284709);
if(temp__4657__auto___284718){
var seq__284691_284719__$1 = temp__4657__auto___284718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__284691_284719__$1)){
var c__36203__auto___284720 = cljs.core.chunk_first.call(null,seq__284691_284719__$1);
var G__284721 = cljs.core.chunk_rest.call(null,seq__284691_284719__$1);
var G__284722 = c__36203__auto___284720;
var G__284723 = cljs.core.count.call(null,c__36203__auto___284720);
var G__284724 = (0);
seq__284691_284709 = G__284721;
chunk__284692_284710 = G__284722;
count__284693_284711 = G__284723;
i__284694_284712 = G__284724;
continue;
} else {
var f_284725 = cljs.core.first.call(null,seq__284691_284719__$1);
cljs.core.println.call(null,"  ",f_284725);

var G__284730 = cljs.core.next.call(null,seq__284691_284719__$1);
var G__284731 = null;
var G__284732 = (0);
var G__284733 = (0);
seq__284691_284709 = G__284730;
chunk__284692_284710 = G__284731;
count__284693_284711 = G__284732;
i__284694_284712 = G__284733;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_284735 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__35392__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_284735);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_284735)))?cljs.core.second.call(null,arglists_284735):arglists_284735));
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
var seq__284697 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__284698 = null;
var count__284699 = (0);
var i__284700 = (0);
while(true){
if((i__284700 < count__284699)){
var vec__284702 = cljs.core._nth.call(null,chunk__284698,i__284700);
var name = cljs.core.nth.call(null,vec__284702,(0),null);
var map__284703 = cljs.core.nth.call(null,vec__284702,(1),null);
var map__284703__$1 = ((((!((map__284703 == null)))?((((map__284703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284703):map__284703);
var doc = cljs.core.get.call(null,map__284703__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__284703__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__284745 = seq__284697;
var G__284746 = chunk__284698;
var G__284747 = count__284699;
var G__284748 = (i__284700 + (1));
seq__284697 = G__284745;
chunk__284698 = G__284746;
count__284699 = G__284747;
i__284700 = G__284748;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__284697);
if(temp__4657__auto__){
var seq__284697__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__284697__$1)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,seq__284697__$1);
var G__284749 = cljs.core.chunk_rest.call(null,seq__284697__$1);
var G__284750 = c__36203__auto__;
var G__284751 = cljs.core.count.call(null,c__36203__auto__);
var G__284752 = (0);
seq__284697 = G__284749;
chunk__284698 = G__284750;
count__284699 = G__284751;
i__284700 = G__284752;
continue;
} else {
var vec__284706 = cljs.core.first.call(null,seq__284697__$1);
var name = cljs.core.nth.call(null,vec__284706,(0),null);
var map__284707 = cljs.core.nth.call(null,vec__284706,(1),null);
var map__284707__$1 = ((((!((map__284707 == null)))?((((map__284707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284707):map__284707);
var doc = cljs.core.get.call(null,map__284707__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__284707__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__284755 = cljs.core.next.call(null,seq__284697__$1);
var G__284756 = null;
var G__284757 = (0);
var G__284758 = (0);
seq__284697 = G__284755;
chunk__284698 = G__284756;
count__284699 = G__284757;
i__284700 = G__284758;
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
