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
var seq__96180_96200 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__96181_96201 = null;
var count__96182_96202 = (0);
var i__96183_96203 = (0);
while(true){
if((i__96183_96203 < count__96182_96202)){
var f_96204 = cljs.core._nth.call(null,chunk__96181_96201,i__96183_96203);
cljs.core.println.call(null,"  ",f_96204);

var G__96205 = seq__96180_96200;
var G__96206 = chunk__96181_96201;
var G__96207 = count__96182_96202;
var G__96208 = (i__96183_96203 + (1));
seq__96180_96200 = G__96205;
chunk__96181_96201 = G__96206;
count__96182_96202 = G__96207;
i__96183_96203 = G__96208;
continue;
} else {
var temp__4657__auto___96209 = cljs.core.seq.call(null,seq__96180_96200);
if(temp__4657__auto___96209){
var seq__96180_96210__$1 = temp__4657__auto___96209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__96180_96210__$1)){
var c__36203__auto___96213 = cljs.core.chunk_first.call(null,seq__96180_96210__$1);
var G__96214 = cljs.core.chunk_rest.call(null,seq__96180_96210__$1);
var G__96215 = c__36203__auto___96213;
var G__96216 = cljs.core.count.call(null,c__36203__auto___96213);
var G__96217 = (0);
seq__96180_96200 = G__96214;
chunk__96181_96201 = G__96215;
count__96182_96202 = G__96216;
i__96183_96203 = G__96217;
continue;
} else {
var f_96220 = cljs.core.first.call(null,seq__96180_96210__$1);
cljs.core.println.call(null,"  ",f_96220);

var G__96221 = cljs.core.next.call(null,seq__96180_96210__$1);
var G__96222 = null;
var G__96223 = (0);
var G__96224 = (0);
seq__96180_96200 = G__96221;
chunk__96181_96201 = G__96222;
count__96182_96202 = G__96223;
i__96183_96203 = G__96224;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_96225 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__35392__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_96225);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_96225)))?cljs.core.second.call(null,arglists_96225):arglists_96225));
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
var seq__96188 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__96189 = null;
var count__96190 = (0);
var i__96191 = (0);
while(true){
if((i__96191 < count__96190)){
var vec__96192 = cljs.core._nth.call(null,chunk__96189,i__96191);
var name = cljs.core.nth.call(null,vec__96192,(0),null);
var map__96193 = cljs.core.nth.call(null,vec__96192,(1),null);
var map__96193__$1 = ((((!((map__96193 == null)))?((((map__96193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96193):map__96193);
var doc = cljs.core.get.call(null,map__96193__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__96193__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__96226 = seq__96188;
var G__96227 = chunk__96189;
var G__96228 = count__96190;
var G__96229 = (i__96191 + (1));
seq__96188 = G__96226;
chunk__96189 = G__96227;
count__96190 = G__96228;
i__96191 = G__96229;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__96188);
if(temp__4657__auto__){
var seq__96188__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__96188__$1)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,seq__96188__$1);
var G__96233 = cljs.core.chunk_rest.call(null,seq__96188__$1);
var G__96234 = c__36203__auto__;
var G__96235 = cljs.core.count.call(null,c__36203__auto__);
var G__96236 = (0);
seq__96188 = G__96233;
chunk__96189 = G__96234;
count__96190 = G__96235;
i__96191 = G__96236;
continue;
} else {
var vec__96195 = cljs.core.first.call(null,seq__96188__$1);
var name = cljs.core.nth.call(null,vec__96195,(0),null);
var map__96196 = cljs.core.nth.call(null,vec__96195,(1),null);
var map__96196__$1 = ((((!((map__96196 == null)))?((((map__96196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96196):map__96196);
var doc = cljs.core.get.call(null,map__96196__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__96196__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__96239 = cljs.core.next.call(null,seq__96188__$1);
var G__96240 = null;
var G__96241 = (0);
var G__96242 = (0);
seq__96188 = G__96239;
chunk__96189 = G__96240;
count__96190 = G__96241;
i__96191 = G__96242;
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
