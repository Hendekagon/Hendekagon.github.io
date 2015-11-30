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
var seq__878354_878368 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__878355_878369 = null;
var count__878356_878370 = (0);
var i__878357_878371 = (0);
while(true){
if((i__878357_878371 < count__878356_878370)){
var f_878372 = cljs.core._nth.call(null,chunk__878355_878369,i__878357_878371);
cljs.core.println.call(null,"  ",f_878372);

var G__878373 = seq__878354_878368;
var G__878374 = chunk__878355_878369;
var G__878375 = count__878356_878370;
var G__878376 = (i__878357_878371 + (1));
seq__878354_878368 = G__878373;
chunk__878355_878369 = G__878374;
count__878356_878370 = G__878375;
i__878357_878371 = G__878376;
continue;
} else {
var temp__4425__auto___878377 = cljs.core.seq.call(null,seq__878354_878368);
if(temp__4425__auto___878377){
var seq__878354_878378__$1 = temp__4425__auto___878377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__878354_878378__$1)){
var c__25014__auto___878379 = cljs.core.chunk_first.call(null,seq__878354_878378__$1);
var G__878380 = cljs.core.chunk_rest.call(null,seq__878354_878378__$1);
var G__878381 = c__25014__auto___878379;
var G__878382 = cljs.core.count.call(null,c__25014__auto___878379);
var G__878383 = (0);
seq__878354_878368 = G__878380;
chunk__878355_878369 = G__878381;
count__878356_878370 = G__878382;
i__878357_878371 = G__878383;
continue;
} else {
var f_878384 = cljs.core.first.call(null,seq__878354_878378__$1);
cljs.core.println.call(null,"  ",f_878384);

var G__878385 = cljs.core.next.call(null,seq__878354_878378__$1);
var G__878386 = null;
var G__878387 = (0);
var G__878388 = (0);
seq__878354_878368 = G__878385;
chunk__878355_878369 = G__878386;
count__878356_878370 = G__878387;
i__878357_878371 = G__878388;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_878389 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24211__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_878389);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_878389)))?cljs.core.second.call(null,arglists_878389):arglists_878389));
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
var seq__878358 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__878359 = null;
var count__878360 = (0);
var i__878361 = (0);
while(true){
if((i__878361 < count__878360)){
var vec__878362 = cljs.core._nth.call(null,chunk__878359,i__878361);
var name = cljs.core.nth.call(null,vec__878362,(0),null);
var map__878363 = cljs.core.nth.call(null,vec__878362,(1),null);
var map__878363__$1 = ((((!((map__878363 == null)))?((((map__878363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__878363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__878363):map__878363);
var doc = cljs.core.get.call(null,map__878363__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__878363__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__878390 = seq__878358;
var G__878391 = chunk__878359;
var G__878392 = count__878360;
var G__878393 = (i__878361 + (1));
seq__878358 = G__878390;
chunk__878359 = G__878391;
count__878360 = G__878392;
i__878361 = G__878393;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__878358);
if(temp__4425__auto__){
var seq__878358__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__878358__$1)){
var c__25014__auto__ = cljs.core.chunk_first.call(null,seq__878358__$1);
var G__878394 = cljs.core.chunk_rest.call(null,seq__878358__$1);
var G__878395 = c__25014__auto__;
var G__878396 = cljs.core.count.call(null,c__25014__auto__);
var G__878397 = (0);
seq__878358 = G__878394;
chunk__878359 = G__878395;
count__878360 = G__878396;
i__878361 = G__878397;
continue;
} else {
var vec__878365 = cljs.core.first.call(null,seq__878358__$1);
var name = cljs.core.nth.call(null,vec__878365,(0),null);
var map__878366 = cljs.core.nth.call(null,vec__878365,(1),null);
var map__878366__$1 = ((((!((map__878366 == null)))?((((map__878366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__878366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__878366):map__878366);
var doc = cljs.core.get.call(null,map__878366__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__878366__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__878398 = cljs.core.next.call(null,seq__878358__$1);
var G__878399 = null;
var G__878400 = (0);
var G__878401 = (0);
seq__878358 = G__878398;
chunk__878359 = G__878399;
count__878360 = G__878400;
i__878361 = G__878401;
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