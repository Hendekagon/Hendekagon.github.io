// Compiled by ClojureScript 1.7.170 {}
goog.provide('hipo.fast');
goog.require('cljs.core');
hipo.fast.emptyv_QMARK_ = (function hipo$fast$emptyv_QMARK_(v){
return (cljs.core.count.call(null,v) === (0));
});
hipo.fast.conjs_BANG_ = (function hipo$fast$conjs_BANG_(v,s){
while(true){
if(cljs.core.truth_(s)){
var G__372397 = cljs.core.conj_BANG_.call(null,v,cljs.core.first.call(null,s));
var G__372398 = cljs.core.next.call(null,s);
v = G__372397;
s = G__372398;
continue;
} else {
return v;
}
break;
}
});

//# sourceMappingURL=fast.js.map