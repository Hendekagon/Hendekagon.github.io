// Compiled by ClojureScript 1.8.34 {}
goog.provide('hipo.fast');
goog.require('cljs.core');
hipo.fast.emptyv_QMARK_ = (function hipo$fast$emptyv_QMARK_(v){
return (cljs.core.count.call(null,v) === (0));
});
hipo.fast.conjs_BANG_ = (function hipo$fast$conjs_BANG_(v,s){
while(true){
if(cljs.core.truth_(s)){
var G__448785 = cljs.core.conj_BANG_.call(null,v,cljs.core.first.call(null,s));
var G__448786 = cljs.core.next.call(null,s);
v = G__448785;
s = G__448786;
continue;
} else {
return v;
}
break;
}
});
