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
var seq__1883273_1883287 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1883274_1883288 = null;
var count__1883275_1883289 = (0);
var i__1883276_1883290 = (0);
while(true){
if((i__1883276_1883290 < count__1883275_1883289)){
var f_1883291 = cljs.core._nth.call(null,chunk__1883274_1883288,i__1883276_1883290);
cljs.core.println.call(null,"  ",f_1883291);

var G__1883292 = seq__1883273_1883287;
var G__1883293 = chunk__1883274_1883288;
var G__1883294 = count__1883275_1883289;
var G__1883295 = (i__1883276_1883290 + (1));
seq__1883273_1883287 = G__1883292;
chunk__1883274_1883288 = G__1883293;
count__1883275_1883289 = G__1883294;
i__1883276_1883290 = G__1883295;
continue;
} else {
var temp__4425__auto___1883296 = cljs.core.seq.call(null,seq__1883273_1883287);
if(temp__4425__auto___1883296){
var seq__1883273_1883297__$1 = temp__4425__auto___1883296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1883273_1883297__$1)){
var c__24964__auto___1883298 = cljs.core.chunk_first.call(null,seq__1883273_1883297__$1);
var G__1883299 = cljs.core.chunk_rest.call(null,seq__1883273_1883297__$1);
var G__1883300 = c__24964__auto___1883298;
var G__1883301 = cljs.core.count.call(null,c__24964__auto___1883298);
var G__1883302 = (0);
seq__1883273_1883287 = G__1883299;
chunk__1883274_1883288 = G__1883300;
count__1883275_1883289 = G__1883301;
i__1883276_1883290 = G__1883302;
continue;
} else {
var f_1883303 = cljs.core.first.call(null,seq__1883273_1883297__$1);
cljs.core.println.call(null,"  ",f_1883303);

var G__1883304 = cljs.core.next.call(null,seq__1883273_1883297__$1);
var G__1883305 = null;
var G__1883306 = (0);
var G__1883307 = (0);
seq__1883273_1883287 = G__1883304;
chunk__1883274_1883288 = G__1883305;
count__1883275_1883289 = G__1883306;
i__1883276_1883290 = G__1883307;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1883308 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24161__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1883308);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1883308)))?cljs.core.second.call(null,arglists_1883308):arglists_1883308));
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
var seq__1883277 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1883278 = null;
var count__1883279 = (0);
var i__1883280 = (0);
while(true){
if((i__1883280 < count__1883279)){
var vec__1883281 = cljs.core._nth.call(null,chunk__1883278,i__1883280);
var name = cljs.core.nth.call(null,vec__1883281,(0),null);
var map__1883282 = cljs.core.nth.call(null,vec__1883281,(1),null);
var map__1883282__$1 = ((((!((map__1883282 == null)))?((((map__1883282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1883282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1883282):map__1883282);
var doc = cljs.core.get.call(null,map__1883282__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__1883282__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__1883309 = seq__1883277;
var G__1883310 = chunk__1883278;
var G__1883311 = count__1883279;
var G__1883312 = (i__1883280 + (1));
seq__1883277 = G__1883309;
chunk__1883278 = G__1883310;
count__1883279 = G__1883311;
i__1883280 = G__1883312;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__1883277);
if(temp__4425__auto__){
var seq__1883277__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1883277__$1)){
var c__24964__auto__ = cljs.core.chunk_first.call(null,seq__1883277__$1);
var G__1883313 = cljs.core.chunk_rest.call(null,seq__1883277__$1);
var G__1883314 = c__24964__auto__;
var G__1883315 = cljs.core.count.call(null,c__24964__auto__);
var G__1883316 = (0);
seq__1883277 = G__1883313;
chunk__1883278 = G__1883314;
count__1883279 = G__1883315;
i__1883280 = G__1883316;
continue;
} else {
var vec__1883284 = cljs.core.first.call(null,seq__1883277__$1);
var name = cljs.core.nth.call(null,vec__1883284,(0),null);
var map__1883285 = cljs.core.nth.call(null,vec__1883284,(1),null);
var map__1883285__$1 = ((((!((map__1883285 == null)))?((((map__1883285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1883285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1883285):map__1883285);
var doc = cljs.core.get.call(null,map__1883285__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__1883285__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__1883317 = cljs.core.next.call(null,seq__1883277__$1);
var G__1883318 = null;
var G__1883319 = (0);
var G__1883320 = (0);
seq__1883277 = G__1883317;
chunk__1883278 = G__1883318;
count__1883279 = G__1883319;
i__1883280 = G__1883320;
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