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
var seq__292714_292734 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__292715_292735 = null;
var count__292716_292736 = (0);
var i__292717_292737 = (0);
while(true){
if((i__292717_292737 < count__292716_292736)){
var f_292739 = cljs.core._nth.call(null,chunk__292715_292735,i__292717_292737);
cljs.core.println.call(null,"  ",f_292739);

var G__292740 = seq__292714_292734;
var G__292741 = chunk__292715_292735;
var G__292742 = count__292716_292736;
var G__292743 = (i__292717_292737 + (1));
seq__292714_292734 = G__292740;
chunk__292715_292735 = G__292741;
count__292716_292736 = G__292742;
i__292717_292737 = G__292743;
continue;
} else {
var temp__4657__auto___292744 = cljs.core.seq.call(null,seq__292714_292734);
if(temp__4657__auto___292744){
var seq__292714_292746__$1 = temp__4657__auto___292744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292714_292746__$1)){
var c__36002__auto___292747 = cljs.core.chunk_first.call(null,seq__292714_292746__$1);
var G__292748 = cljs.core.chunk_rest.call(null,seq__292714_292746__$1);
var G__292749 = c__36002__auto___292747;
var G__292750 = cljs.core.count.call(null,c__36002__auto___292747);
var G__292751 = (0);
seq__292714_292734 = G__292748;
chunk__292715_292735 = G__292749;
count__292716_292736 = G__292750;
i__292717_292737 = G__292751;
continue;
} else {
var f_292752 = cljs.core.first.call(null,seq__292714_292746__$1);
cljs.core.println.call(null,"  ",f_292752);

var G__292753 = cljs.core.next.call(null,seq__292714_292746__$1);
var G__292754 = null;
var G__292755 = (0);
var G__292756 = (0);
seq__292714_292734 = G__292753;
chunk__292715_292735 = G__292754;
count__292716_292736 = G__292755;
i__292717_292737 = G__292756;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_292757 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__35191__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_292757);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_292757)))?cljs.core.second.call(null,arglists_292757):arglists_292757));
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
var seq__292718 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__292719 = null;
var count__292720 = (0);
var i__292721 = (0);
while(true){
if((i__292721 < count__292720)){
var vec__292722 = cljs.core._nth.call(null,chunk__292719,i__292721);
var name = cljs.core.nth.call(null,vec__292722,(0),null);
var map__292723 = cljs.core.nth.call(null,vec__292722,(1),null);
var map__292723__$1 = ((((!((map__292723 == null)))?((((map__292723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292723):map__292723);
var doc = cljs.core.get.call(null,map__292723__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__292723__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__292762 = seq__292718;
var G__292763 = chunk__292719;
var G__292764 = count__292720;
var G__292765 = (i__292721 + (1));
seq__292718 = G__292762;
chunk__292719 = G__292763;
count__292720 = G__292764;
i__292721 = G__292765;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__292718);
if(temp__4657__auto__){
var seq__292718__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292718__$1)){
var c__36002__auto__ = cljs.core.chunk_first.call(null,seq__292718__$1);
var G__292766 = cljs.core.chunk_rest.call(null,seq__292718__$1);
var G__292767 = c__36002__auto__;
var G__292768 = cljs.core.count.call(null,c__36002__auto__);
var G__292769 = (0);
seq__292718 = G__292766;
chunk__292719 = G__292767;
count__292720 = G__292768;
i__292721 = G__292769;
continue;
} else {
var vec__292728 = cljs.core.first.call(null,seq__292718__$1);
var name = cljs.core.nth.call(null,vec__292728,(0),null);
var map__292729 = cljs.core.nth.call(null,vec__292728,(1),null);
var map__292729__$1 = ((((!((map__292729 == null)))?((((map__292729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292729):map__292729);
var doc = cljs.core.get.call(null,map__292729__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__292729__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__292770 = cljs.core.next.call(null,seq__292718__$1);
var G__292771 = null;
var G__292772 = (0);
var G__292773 = (0);
seq__292718 = G__292770;
chunk__292719 = G__292771;
count__292720 = G__292772;
i__292721 = G__292773;
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

//# sourceMappingURL=repl.js.map?rel=1459068550983