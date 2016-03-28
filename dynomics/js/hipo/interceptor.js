// Compiled by ClojureScript 1.8.40 {}
goog.provide('hipo.interceptor');
goog.require('cljs.core');

/**
 * @interface
 */
hipo.interceptor.Interceptor = function(){};

hipo.interceptor._intercept = (function hipo$interceptor$_intercept(this$,t,m){
if((!((this$ == null))) && (!((this$.hipo$interceptor$Interceptor$_intercept$arity$3 == null)))){
return this$.hipo$interceptor$Interceptor$_intercept$arity$3(this$,t,m);
} else {
var x__26490__auto__ = (((this$ == null))?null:this$);
var m__26491__auto__ = (hipo.interceptor._intercept[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,this$,t,m);
} else {
var m__26491__auto____$1 = (hipo.interceptor._intercept["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,this$,t,m);
} else {
throw cljs.core.missing_protocol.call(null,"Interceptor.-intercept",this$);
}
}
}
});


/**
* @constructor
 * @implements {hipo.interceptor.Interceptor}
*/
hipo.interceptor.TimeInterceptor = (function (s){
this.s = s;
})
hipo.interceptor.TimeInterceptor.prototype.hipo$interceptor$Interceptor$ = true;

hipo.interceptor.TimeInterceptor.prototype.hipo$interceptor$Interceptor$_intercept$arity$3 = (function (_,t,___$1){
var self__ = this;
var ___$2 = this;
return ((function (___$2){
return (function (f){
var label = [cljs.core.str(self__.s),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,t))].join('');
console.time(label);

f.call(null);

return console.timeEnd(label);
});
;})(___$2))
});

hipo.interceptor.TimeInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null);
});

hipo.interceptor.TimeInterceptor.cljs$lang$type = true;

hipo.interceptor.TimeInterceptor.cljs$lang$ctorStr = "hipo.interceptor/TimeInterceptor";

hipo.interceptor.TimeInterceptor.cljs$lang$ctorPrWriter = (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"hipo.interceptor/TimeInterceptor");
});

hipo.interceptor.__GT_TimeInterceptor = (function hipo$interceptor$__GT_TimeInterceptor(s){
return (new hipo.interceptor.TimeInterceptor(s));
});


/**
* @constructor
 * @implements {hipo.interceptor.Interceptor}
*/
hipo.interceptor.ProfileInterceptor = (function (label){
this.label = label;
})
hipo.interceptor.ProfileInterceptor.prototype.hipo$interceptor$Interceptor$ = true;

hipo.interceptor.ProfileInterceptor.prototype.hipo$interceptor$Interceptor$_intercept$arity$3 = (function (_,t,___$1){
var self__ = this;
var ___$2 = this;
return ((function (___$2){
return (function (f){
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"update","update",1045576396))){
console.profile(self__.label);

f.call(null);

return console.profileEnd(self__.label);
} else {
return f.call(null);
}
});
;})(___$2))
});

hipo.interceptor.ProfileInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"label","label",-936024965,null)], null);
});

hipo.interceptor.ProfileInterceptor.cljs$lang$type = true;

hipo.interceptor.ProfileInterceptor.cljs$lang$ctorStr = "hipo.interceptor/ProfileInterceptor";

hipo.interceptor.ProfileInterceptor.cljs$lang$ctorPrWriter = (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"hipo.interceptor/ProfileInterceptor");
});

hipo.interceptor.__GT_ProfileInterceptor = (function hipo$interceptor$__GT_ProfileInterceptor(label){
return (new hipo.interceptor.ProfileInterceptor(label));
});


/**
* @constructor
 * @implements {hipo.interceptor.Interceptor}
*/
hipo.interceptor.PerformanceInterceptor = (function (label){
this.label = label;
})
hipo.interceptor.PerformanceInterceptor.prototype.hipo$interceptor$Interceptor$ = true;

hipo.interceptor.PerformanceInterceptor.prototype.hipo$interceptor$Interceptor$_intercept$arity$3 = (function (_,t,___$1){
var self__ = this;
var ___$2 = this;
return ((function (___$2){
return (function (f){
var mark_begin = [cljs.core.str(self__.label),cljs.core.str(" begin "),cljs.core.str(t)].join('');
var mark_end = [cljs.core.str(self__.label),cljs.core.str(" end "),cljs.core.str(t)].join('');
performance.mark(mark_begin);

f.call(null);

performance.mark(mark_end);

return performance.measure([cljs.core.str(self__.label),cljs.core.str(" "),cljs.core.str(t)].join(''),mark_begin,mark_end);
});
;})(___$2))
});

hipo.interceptor.PerformanceInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"label","label",-936024965,null)], null);
});

hipo.interceptor.PerformanceInterceptor.cljs$lang$type = true;

hipo.interceptor.PerformanceInterceptor.cljs$lang$ctorStr = "hipo.interceptor/PerformanceInterceptor";

hipo.interceptor.PerformanceInterceptor.cljs$lang$ctorPrWriter = (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"hipo.interceptor/PerformanceInterceptor");
});

hipo.interceptor.__GT_PerformanceInterceptor = (function hipo$interceptor$__GT_PerformanceInterceptor(label){
return (new hipo.interceptor.PerformanceInterceptor(label));
});

