// Compiled by ClojureScript 1.8.40 {}
goog.provide('hipo.fast');
goog.require('cljs.core');
hipo.fast.emptyv_QMARK_ = (function hipo$fast$emptyv_QMARK_(v){
return (cljs.core.count.call(null,v) === (0));
});
hipo.fast.conjs_BANG_ = (function hipo$fast$conjs_BANG_(v,s){
while(true){
if(cljs.core.truth_(s)){
var G__65447 = cljs.core.conj_BANG_.call(null,v,cljs.core.first.call(null,s));
var G__65448 = cljs.core.next.call(null,s);
v = G__65447;
s = G__65448;
continue;
} else {
return v;
}
break;
}
});

//# sourceMappingURL=fast.js.map?rel=1459533425383