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
var seq__655143_655157 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__655144_655158 = null;
var count__655145_655159 = (0);
var i__655146_655160 = (0);
while(true){
if((i__655146_655160 < count__655145_655159)){
var f_655161 = cljs.core._nth.call(null,chunk__655144_655158,i__655146_655160);
cljs.core.println.call(null,"  ",f_655161);

var G__655162 = seq__655143_655157;
var G__655163 = chunk__655144_655158;
var G__655164 = count__655145_655159;
var G__655165 = (i__655146_655160 + (1));
seq__655143_655157 = G__655162;
chunk__655144_655158 = G__655163;
count__655145_655159 = G__655164;
i__655146_655160 = G__655165;
continue;
} else {
var temp__4425__auto___655166 = cljs.core.seq.call(null,seq__655143_655157);
if(temp__4425__auto___655166){
var seq__655143_655167__$1 = temp__4425__auto___655166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__655143_655167__$1)){
var c__25014__auto___655168 = cljs.core.chunk_first.call(null,seq__655143_655167__$1);
var G__655169 = cljs.core.chunk_rest.call(null,seq__655143_655167__$1);
var G__655170 = c__25014__auto___655168;
var G__655171 = cljs.core.count.call(null,c__25014__auto___655168);
var G__655172 = (0);
seq__655143_655157 = G__655169;
chunk__655144_655158 = G__655170;
count__655145_655159 = G__655171;
i__655146_655160 = G__655172;
continue;
} else {
var f_655173 = cljs.core.first.call(null,seq__655143_655167__$1);
cljs.core.println.call(null,"  ",f_655173);

var G__655174 = cljs.core.next.call(null,seq__655143_655167__$1);
var G__655175 = null;
var G__655176 = (0);
var G__655177 = (0);
seq__655143_655157 = G__655174;
chunk__655144_655158 = G__655175;
count__655145_655159 = G__655176;
i__655146_655160 = G__655177;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_655178 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24211__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_655178);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_655178)))?cljs.core.second.call(null,arglists_655178):arglists_655178));
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
var seq__655147 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__655148 = null;
var count__655149 = (0);
var i__655150 = (0);
while(true){
if((i__655150 < count__655149)){
var vec__655151 = cljs.core._nth.call(null,chunk__655148,i__655150);
var name = cljs.core.nth.call(null,vec__655151,(0),null);
var map__655152 = cljs.core.nth.call(null,vec__655151,(1),null);
var map__655152__$1 = ((((!((map__655152 == null)))?((((map__655152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__655152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__655152):map__655152);
var doc = cljs.core.get.call(null,map__655152__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__655152__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__655179 = seq__655147;
var G__655180 = chunk__655148;
var G__655181 = count__655149;
var G__655182 = (i__655150 + (1));
seq__655147 = G__655179;
chunk__655148 = G__655180;
count__655149 = G__655181;
i__655150 = G__655182;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__655147);
if(temp__4425__auto__){
var seq__655147__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__655147__$1)){
var c__25014__auto__ = cljs.core.chunk_first.call(null,seq__655147__$1);
var G__655183 = cljs.core.chunk_rest.call(null,seq__655147__$1);
var G__655184 = c__25014__auto__;
var G__655185 = cljs.core.count.call(null,c__25014__auto__);
var G__655186 = (0);
seq__655147 = G__655183;
chunk__655148 = G__655184;
count__655149 = G__655185;
i__655150 = G__655186;
continue;
} else {
var vec__655154 = cljs.core.first.call(null,seq__655147__$1);
var name = cljs.core.nth.call(null,vec__655154,(0),null);
var map__655155 = cljs.core.nth.call(null,vec__655154,(1),null);
var map__655155__$1 = ((((!((map__655155 == null)))?((((map__655155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__655155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__655155):map__655155);
var doc = cljs.core.get.call(null,map__655155__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__655155__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__655187 = cljs.core.next.call(null,seq__655147__$1);
var G__655188 = null;
var G__655189 = (0);
var G__655190 = (0);
seq__655147 = G__655187;
chunk__655148 = G__655188;
count__655149 = G__655189;
i__655150 = G__655190;
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