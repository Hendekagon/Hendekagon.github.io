// Compiled by ClojureScript 1.8.40 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async86711 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async86711 = (function (fn_handler,f,meta86712){
this.fn_handler = fn_handler;
this.f = f;
this.meta86712 = meta86712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async86711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86713,meta86712__$1){
var self__ = this;
var _86713__$1 = this;
return (new cljs.core.async.t_cljs$core$async86711(self__.fn_handler,self__.f,meta86712__$1));
});

cljs.core.async.t_cljs$core$async86711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86713){
var self__ = this;
var _86713__$1 = this;
return self__.meta86712;
});

cljs.core.async.t_cljs$core$async86711.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async86711.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async86711.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async86711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta86712","meta86712",2046183621,null)], null);
});

cljs.core.async.t_cljs$core$async86711.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async86711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async86711";

cljs.core.async.t_cljs$core$async86711.cljs$lang$ctorPrWriter = (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"cljs.core.async/t_cljs$core$async86711");
});

cljs.core.async.__GT_t_cljs$core$async86711 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async86711(fn_handler__$1,f__$1,meta86712){
return (new cljs.core.async.t_cljs$core$async86711(fn_handler__$1,f__$1,meta86712));
});

}

return (new cljs.core.async.t_cljs$core$async86711(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args86736 = [];
var len__26896__auto___86747 = arguments.length;
var i__26897__auto___86749 = (0);
while(true){
if((i__26897__auto___86749 < len__26896__auto___86747)){
args86736.push((arguments[i__26897__auto___86749]));

var G__86751 = (i__26897__auto___86749 + (1));
i__26897__auto___86749 = G__86751;
continue;
} else {
}
break;
}

var G__86738 = args86736.length;
switch (G__86738) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86736.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args86759 = [];
var len__26896__auto___86766 = arguments.length;
var i__26897__auto___86767 = (0);
while(true){
if((i__26897__auto___86767 < len__26896__auto___86766)){
args86759.push((arguments[i__26897__auto___86767]));

var G__86770 = (i__26897__auto___86767 + (1));
i__26897__auto___86767 = G__86770;
continue;
} else {
}
break;
}

var G__86763 = args86759.length;
switch (G__86763) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86759.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_86774 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_86774);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_86774,ret){
return (function (){
return fn1.call(null,val_86774);
});})(val_86774,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args86782 = [];
var len__26896__auto___86792 = arguments.length;
var i__26897__auto___86793 = (0);
while(true){
if((i__26897__auto___86793 < len__26896__auto___86792)){
args86782.push((arguments[i__26897__auto___86793]));

var G__86797 = (i__26897__auto___86793 + (1));
i__26897__auto___86793 = G__86797;
continue;
} else {
}
break;
}

var G__86789 = args86782.length;
switch (G__86789) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86782.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26741__auto___86845 = n;
var x_86846 = (0);
while(true){
if((x_86846 < n__26741__auto___86845)){
(a[x_86846] = (0));

var G__86849 = (x_86846 + (1));
x_86846 = G__86849;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__86851 = (i + (1));
i = G__86851;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async86863 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async86863 = (function (alt_flag,flag,meta86864){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta86864 = meta86864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async86863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_86865,meta86864__$1){
var self__ = this;
var _86865__$1 = this;
return (new cljs.core.async.t_cljs$core$async86863(self__.alt_flag,self__.flag,meta86864__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async86863.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_86865){
var self__ = this;
var _86865__$1 = this;
return self__.meta86864;
});})(flag))
;

cljs.core.async.t_cljs$core$async86863.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async86863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async86863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async86863.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta86864","meta86864",97076980,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async86863.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async86863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async86863";

cljs.core.async.t_cljs$core$async86863.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"cljs.core.async/t_cljs$core$async86863");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async86863 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async86863(alt_flag__$1,flag__$1,meta86864){
return (new cljs.core.async.t_cljs$core$async86863(alt_flag__$1,flag__$1,meta86864));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async86863(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async86924 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async86924 = (function (alt_handler,flag,cb,meta86925){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta86925 = meta86925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async86924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86926,meta86925__$1){
var self__ = this;
var _86926__$1 = this;
return (new cljs.core.async.t_cljs$core$async86924(self__.alt_handler,self__.flag,self__.cb,meta86925__$1));
});

cljs.core.async.t_cljs$core$async86924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86926){
var self__ = this;
var _86926__$1 = this;
return self__.meta86925;
});

cljs.core.async.t_cljs$core$async86924.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async86924.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async86924.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async86924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta86925","meta86925",-1858981851,null)], null);
});

cljs.core.async.t_cljs$core$async86924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async86924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async86924";

cljs.core.async.t_cljs$core$async86924.cljs$lang$ctorPrWriter = (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"cljs.core.async/t_cljs$core$async86924");
});

cljs.core.async.__GT_t_cljs$core$async86924 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async86924(alt_handler__$1,flag__$1,cb__$1,meta86925){
return (new cljs.core.async.t_cljs$core$async86924(alt_handler__$1,flag__$1,cb__$1,meta86925));
});

}

return (new cljs.core.async.t_cljs$core$async86924(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__86978_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__86978_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__86979_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__86979_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25827__auto__ = wport;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return port;
}
})()], null));
} else {
var G__87019 = (i + (1));
i = G__87019;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25827__auto__ = ret;
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25815__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25815__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25815__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26903__auto__ = [];
var len__26896__auto___87033 = arguments.length;
var i__26897__auto___87034 = (0);
while(true){
if((i__26897__auto___87034 < len__26896__auto___87033)){
args__26903__auto__.push((arguments[i__26897__auto___87034]));

var G__87035 = (i__26897__auto___87034 + (1));
i__26897__auto___87034 = G__87035;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((1) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26904__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__87028){
var map__87029 = p__87028;
var map__87029__$1 = ((((!((map__87029 == null)))?((((map__87029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__87029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87029):map__87029);
var opts = map__87029__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq87020){
var G__87021 = cljs.core.first.call(null,seq87020);
var seq87020__$1 = cljs.core.next.call(null,seq87020);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__87021,seq87020__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args87057 = [];
var len__26896__auto___87125 = arguments.length;
var i__26897__auto___87126 = (0);
while(true){
if((i__26897__auto___87126 < len__26896__auto___87125)){
args87057.push((arguments[i__26897__auto___87126]));

var G__87127 = (i__26897__auto___87126 + (1));
i__26897__auto___87126 = G__87127;
continue;
} else {
}
break;
}

var G__87065 = args87057.length;
switch (G__87065) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87057.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32975__auto___87129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto___87129){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto___87129){
return (function (state_87097){
var state_val_87098 = (state_87097[(1)]);
if((state_val_87098 === (7))){
var inst_87093 = (state_87097[(2)]);
var state_87097__$1 = state_87097;
var statearr_87099_87130 = state_87097__$1;
(statearr_87099_87130[(2)] = inst_87093);

(statearr_87099_87130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87098 === (1))){
var state_87097__$1 = state_87097;
var statearr_87104_87147 = state_87097__$1;
(statearr_87104_87147[(2)] = null);

(statearr_87104_87147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87098 === (4))){
var inst_87076 = (state_87097[(7)]);
var inst_87076__$1 = (state_87097[(2)]);
var inst_87077 = (inst_87076__$1 == null);
var state_87097__$1 = (function (){var statearr_87105 = state_87097;
(statearr_87105[(7)] = inst_87076__$1);

return statearr_87105;
})();
if(cljs.core.truth_(inst_87077)){
var statearr_87106_87151 = state_87097__$1;
(statearr_87106_87151[(1)] = (5));

} else {
var statearr_87107_87152 = state_87097__$1;
(statearr_87107_87152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87098 === (13))){
var state_87097__$1 = state_87097;
var statearr_87108_87153 = state_87097__$1;
(statearr_87108_87153[(2)] = null);

(statearr_87108_87153[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87098 === (6))){
var inst_87076 = (state_87097[(7)]);
var state_87097__$1 = state_87097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87097__$1,(11),to,inst_87076);
} else {
if((state_val_87098 === (3))){
var inst_87095 = (state_87097[(2)]);
var state_87097__$1 = state_87097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87097__$1,inst_87095);
} else {
if((state_val_87098 === (12))){
var state_87097__$1 = state_87097;
var statearr_87109_87158 = state_87097__$1;
(statearr_87109_87158[(2)] = null);

(statearr_87109_87158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87098 === (2))){
var state_87097__$1 = state_87097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87097__$1,(4),from);
} else {
if((state_val_87098 === (11))){
var inst_87086 = (state_87097[(2)]);
var state_87097__$1 = state_87097;
if(cljs.core.truth_(inst_87086)){
var statearr_87110_87162 = state_87097__$1;
(statearr_87110_87162[(1)] = (12));

} else {
var statearr_87111_87163 = state_87097__$1;
(statearr_87111_87163[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87098 === (9))){
var state_87097__$1 = state_87097;
var statearr_87112_87164 = state_87097__$1;
(statearr_87112_87164[(2)] = null);

(statearr_87112_87164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87098 === (5))){
var state_87097__$1 = state_87097;
if(cljs.core.truth_(close_QMARK_)){
var statearr_87113_87165 = state_87097__$1;
(statearr_87113_87165[(1)] = (8));

} else {
var statearr_87114_87166 = state_87097__$1;
(statearr_87114_87166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87098 === (14))){
var inst_87091 = (state_87097[(2)]);
var state_87097__$1 = state_87097;
var statearr_87115_87169 = state_87097__$1;
(statearr_87115_87169[(2)] = inst_87091);

(statearr_87115_87169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87098 === (10))){
var inst_87083 = (state_87097[(2)]);
var state_87097__$1 = state_87097;
var statearr_87116_87170 = state_87097__$1;
(statearr_87116_87170[(2)] = inst_87083);

(statearr_87116_87170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87098 === (8))){
var inst_87080 = cljs.core.async.close_BANG_.call(null,to);
var state_87097__$1 = state_87097;
var statearr_87117_87183 = state_87097__$1;
(statearr_87117_87183[(2)] = inst_87080);

(statearr_87117_87183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32975__auto___87129))
;
return ((function (switch__32863__auto__,c__32975__auto___87129){
return (function() {
var cljs$core$async$state_machine__32864__auto__ = null;
var cljs$core$async$state_machine__32864__auto____0 = (function (){
var statearr_87121 = [null,null,null,null,null,null,null,null];
(statearr_87121[(0)] = cljs$core$async$state_machine__32864__auto__);

(statearr_87121[(1)] = (1));

return statearr_87121;
});
var cljs$core$async$state_machine__32864__auto____1 = (function (state_87097){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_87097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e87122){if((e87122 instanceof Object)){
var ex__32867__auto__ = e87122;
var statearr_87123_87188 = state_87097;
(statearr_87123_87188[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87189 = state_87097;
state_87097 = G__87189;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$state_machine__32864__auto__ = function(state_87097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32864__auto____1.call(this,state_87097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32864__auto____0;
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32864__auto____1;
return cljs$core$async$state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto___87129))
})();
var state__32977__auto__ = (function (){var statearr_87124 = f__32976__auto__.call(null);
(statearr_87124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto___87129);

return statearr_87124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto___87129))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__87470){
var vec__87471 = p__87470;
var v = cljs.core.nth.call(null,vec__87471,(0),null);
var p = cljs.core.nth.call(null,vec__87471,(1),null);
var job = vec__87471;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32975__auto___87750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto___87750,res,vec__87471,v,p,job,jobs,results){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto___87750,res,vec__87471,v,p,job,jobs,results){
return (function (state_87481){
var state_val_87482 = (state_87481[(1)]);
if((state_val_87482 === (1))){
var state_87481__$1 = state_87481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87481__$1,(2),res,v);
} else {
if((state_val_87482 === (2))){
var inst_87474 = (state_87481[(2)]);
var inst_87479 = cljs.core.async.close_BANG_.call(null,res);
var state_87481__$1 = (function (){var statearr_87483 = state_87481;
(statearr_87483[(7)] = inst_87474);

return statearr_87483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87481__$1,inst_87479);
} else {
return null;
}
}
});})(c__32975__auto___87750,res,vec__87471,v,p,job,jobs,results))
;
return ((function (switch__32863__auto__,c__32975__auto___87750,res,vec__87471,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____0 = (function (){
var statearr_87499 = [null,null,null,null,null,null,null,null];
(statearr_87499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__);

(statearr_87499[(1)] = (1));

return statearr_87499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____1 = (function (state_87481){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_87481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e87500){if((e87500 instanceof Object)){
var ex__32867__auto__ = e87500;
var statearr_87502_87773 = state_87481;
(statearr_87502_87773[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87775 = state_87481;
state_87481 = G__87775;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__ = function(state_87481){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____1.call(this,state_87481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto___87750,res,vec__87471,v,p,job,jobs,results))
})();
var state__32977__auto__ = (function (){var statearr_87505 = f__32976__auto__.call(null);
(statearr_87505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto___87750);

return statearr_87505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto___87750,res,vec__87471,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__87511){
var vec__87512 = p__87511;
var v = cljs.core.nth.call(null,vec__87512,(0),null);
var p = cljs.core.nth.call(null,vec__87512,(1),null);
var job = vec__87512;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26741__auto___87798 = n;
var __87800 = (0);
while(true){
if((__87800 < n__26741__auto___87798)){
var G__87513_87802 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__87513_87802) {
case "compute":
var c__32975__auto___87805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__87800,c__32975__auto___87805,G__87513_87802,n__26741__auto___87798,jobs,results,process,async){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (__87800,c__32975__auto___87805,G__87513_87802,n__26741__auto___87798,jobs,results,process,async){
return (function (state_87530){
var state_val_87531 = (state_87530[(1)]);
if((state_val_87531 === (1))){
var state_87530__$1 = state_87530;
var statearr_87532_87813 = state_87530__$1;
(statearr_87532_87813[(2)] = null);

(statearr_87532_87813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87531 === (2))){
var state_87530__$1 = state_87530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87530__$1,(4),jobs);
} else {
if((state_val_87531 === (3))){
var inst_87524 = (state_87530[(2)]);
var state_87530__$1 = state_87530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87530__$1,inst_87524);
} else {
if((state_val_87531 === (4))){
var inst_87516 = (state_87530[(2)]);
var inst_87517 = process.call(null,inst_87516);
var state_87530__$1 = state_87530;
if(cljs.core.truth_(inst_87517)){
var statearr_87533_87819 = state_87530__$1;
(statearr_87533_87819[(1)] = (5));

} else {
var statearr_87534_87822 = state_87530__$1;
(statearr_87534_87822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87531 === (5))){
var state_87530__$1 = state_87530;
var statearr_87535_87824 = state_87530__$1;
(statearr_87535_87824[(2)] = null);

(statearr_87535_87824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87531 === (6))){
var state_87530__$1 = state_87530;
var statearr_87536_87833 = state_87530__$1;
(statearr_87536_87833[(2)] = null);

(statearr_87536_87833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87531 === (7))){
var inst_87522 = (state_87530[(2)]);
var state_87530__$1 = state_87530;
var statearr_87537_87834 = state_87530__$1;
(statearr_87537_87834[(2)] = inst_87522);

(statearr_87537_87834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__87800,c__32975__auto___87805,G__87513_87802,n__26741__auto___87798,jobs,results,process,async))
;
return ((function (__87800,switch__32863__auto__,c__32975__auto___87805,G__87513_87802,n__26741__auto___87798,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____0 = (function (){
var statearr_87544 = [null,null,null,null,null,null,null];
(statearr_87544[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__);

(statearr_87544[(1)] = (1));

return statearr_87544;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____1 = (function (state_87530){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_87530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e87545){if((e87545 instanceof Object)){
var ex__32867__auto__ = e87545;
var statearr_87546_87838 = state_87530;
(statearr_87546_87838[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87839 = state_87530;
state_87530 = G__87839;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__ = function(state_87530){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____1.call(this,state_87530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__;
})()
;})(__87800,switch__32863__auto__,c__32975__auto___87805,G__87513_87802,n__26741__auto___87798,jobs,results,process,async))
})();
var state__32977__auto__ = (function (){var statearr_87547 = f__32976__auto__.call(null);
(statearr_87547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto___87805);

return statearr_87547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(__87800,c__32975__auto___87805,G__87513_87802,n__26741__auto___87798,jobs,results,process,async))
);


break;
case "async":
var c__32975__auto___87843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__87800,c__32975__auto___87843,G__87513_87802,n__26741__auto___87798,jobs,results,process,async){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (__87800,c__32975__auto___87843,G__87513_87802,n__26741__auto___87798,jobs,results,process,async){
return (function (state_87562){
var state_val_87563 = (state_87562[(1)]);
if((state_val_87563 === (1))){
var state_87562__$1 = state_87562;
var statearr_87565_87846 = state_87562__$1;
(statearr_87565_87846[(2)] = null);

(statearr_87565_87846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87563 === (2))){
var state_87562__$1 = state_87562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87562__$1,(4),jobs);
} else {
if((state_val_87563 === (3))){
var inst_87560 = (state_87562[(2)]);
var state_87562__$1 = state_87562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87562__$1,inst_87560);
} else {
if((state_val_87563 === (4))){
var inst_87552 = (state_87562[(2)]);
var inst_87553 = async.call(null,inst_87552);
var state_87562__$1 = state_87562;
if(cljs.core.truth_(inst_87553)){
var statearr_87566_87862 = state_87562__$1;
(statearr_87566_87862[(1)] = (5));

} else {
var statearr_87567_87863 = state_87562__$1;
(statearr_87567_87863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87563 === (5))){
var state_87562__$1 = state_87562;
var statearr_87568_87864 = state_87562__$1;
(statearr_87568_87864[(2)] = null);

(statearr_87568_87864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87563 === (6))){
var state_87562__$1 = state_87562;
var statearr_87569_87869 = state_87562__$1;
(statearr_87569_87869[(2)] = null);

(statearr_87569_87869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87563 === (7))){
var inst_87558 = (state_87562[(2)]);
var state_87562__$1 = state_87562;
var statearr_87571_87871 = state_87562__$1;
(statearr_87571_87871[(2)] = inst_87558);

(statearr_87571_87871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__87800,c__32975__auto___87843,G__87513_87802,n__26741__auto___87798,jobs,results,process,async))
;
return ((function (__87800,switch__32863__auto__,c__32975__auto___87843,G__87513_87802,n__26741__auto___87798,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____0 = (function (){
var statearr_87575 = [null,null,null,null,null,null,null];
(statearr_87575[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__);

(statearr_87575[(1)] = (1));

return statearr_87575;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____1 = (function (state_87562){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_87562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e87576){if((e87576 instanceof Object)){
var ex__32867__auto__ = e87576;
var statearr_87577_87878 = state_87562;
(statearr_87577_87878[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87884 = state_87562;
state_87562 = G__87884;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__ = function(state_87562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____1.call(this,state_87562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__;
})()
;})(__87800,switch__32863__auto__,c__32975__auto___87843,G__87513_87802,n__26741__auto___87798,jobs,results,process,async))
})();
var state__32977__auto__ = (function (){var statearr_87578 = f__32976__auto__.call(null);
(statearr_87578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto___87843);

return statearr_87578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(__87800,c__32975__auto___87843,G__87513_87802,n__26741__auto___87798,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__87885 = (__87800 + (1));
__87800 = G__87885;
continue;
} else {
}
break;
}

var c__32975__auto___87888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto___87888,jobs,results,process,async){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto___87888,jobs,results,process,async){
return (function (state_87607){
var state_val_87608 = (state_87607[(1)]);
if((state_val_87608 === (1))){
var state_87607__$1 = state_87607;
var statearr_87609_87892 = state_87607__$1;
(statearr_87609_87892[(2)] = null);

(statearr_87609_87892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87608 === (2))){
var state_87607__$1 = state_87607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87607__$1,(4),from);
} else {
if((state_val_87608 === (3))){
var inst_87605 = (state_87607[(2)]);
var state_87607__$1 = state_87607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87607__$1,inst_87605);
} else {
if((state_val_87608 === (4))){
var inst_87587 = (state_87607[(7)]);
var inst_87587__$1 = (state_87607[(2)]);
var inst_87588 = (inst_87587__$1 == null);
var state_87607__$1 = (function (){var statearr_87613 = state_87607;
(statearr_87613[(7)] = inst_87587__$1);

return statearr_87613;
})();
if(cljs.core.truth_(inst_87588)){
var statearr_87615_87902 = state_87607__$1;
(statearr_87615_87902[(1)] = (5));

} else {
var statearr_87617_87903 = state_87607__$1;
(statearr_87617_87903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87608 === (5))){
var inst_87590 = cljs.core.async.close_BANG_.call(null,jobs);
var state_87607__$1 = state_87607;
var statearr_87619_87904 = state_87607__$1;
(statearr_87619_87904[(2)] = inst_87590);

(statearr_87619_87904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87608 === (6))){
var inst_87587 = (state_87607[(7)]);
var inst_87592 = (state_87607[(8)]);
var inst_87592__$1 = cljs.core.async.chan.call(null,(1));
var inst_87594 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_87595 = [inst_87587,inst_87592__$1];
var inst_87596 = (new cljs.core.PersistentVector(null,2,(5),inst_87594,inst_87595,null));
var state_87607__$1 = (function (){var statearr_87621 = state_87607;
(statearr_87621[(8)] = inst_87592__$1);

return statearr_87621;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87607__$1,(8),jobs,inst_87596);
} else {
if((state_val_87608 === (7))){
var inst_87603 = (state_87607[(2)]);
var state_87607__$1 = state_87607;
var statearr_87622_87911 = state_87607__$1;
(statearr_87622_87911[(2)] = inst_87603);

(statearr_87622_87911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87608 === (8))){
var inst_87592 = (state_87607[(8)]);
var inst_87598 = (state_87607[(2)]);
var state_87607__$1 = (function (){var statearr_87623 = state_87607;
(statearr_87623[(9)] = inst_87598);

return statearr_87623;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87607__$1,(9),results,inst_87592);
} else {
if((state_val_87608 === (9))){
var inst_87600 = (state_87607[(2)]);
var state_87607__$1 = (function (){var statearr_87624 = state_87607;
(statearr_87624[(10)] = inst_87600);

return statearr_87624;
})();
var statearr_87625_87922 = state_87607__$1;
(statearr_87625_87922[(2)] = null);

(statearr_87625_87922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__32975__auto___87888,jobs,results,process,async))
;
return ((function (switch__32863__auto__,c__32975__auto___87888,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____0 = (function (){
var statearr_87629 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_87629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__);

(statearr_87629[(1)] = (1));

return statearr_87629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____1 = (function (state_87607){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_87607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e87630){if((e87630 instanceof Object)){
var ex__32867__auto__ = e87630;
var statearr_87631_87929 = state_87607;
(statearr_87631_87929[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87932 = state_87607;
state_87607 = G__87932;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__ = function(state_87607){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____1.call(this,state_87607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto___87888,jobs,results,process,async))
})();
var state__32977__auto__ = (function (){var statearr_87632 = f__32976__auto__.call(null);
(statearr_87632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto___87888);

return statearr_87632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto___87888,jobs,results,process,async))
);


var c__32975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto__,jobs,results,process,async){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto__,jobs,results,process,async){
return (function (state_87683){
var state_val_87684 = (state_87683[(1)]);
if((state_val_87684 === (7))){
var inst_87679 = (state_87683[(2)]);
var state_87683__$1 = state_87683;
var statearr_87687_87952 = state_87683__$1;
(statearr_87687_87952[(2)] = inst_87679);

(statearr_87687_87952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87684 === (20))){
var state_87683__$1 = state_87683;
var statearr_87696_87953 = state_87683__$1;
(statearr_87696_87953[(2)] = null);

(statearr_87696_87953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87684 === (1))){
var state_87683__$1 = state_87683;
var statearr_87697_87955 = state_87683__$1;
(statearr_87697_87955[(2)] = null);

(statearr_87697_87955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87684 === (4))){
var inst_87637 = (state_87683[(7)]);
var inst_87637__$1 = (state_87683[(2)]);
var inst_87638 = (inst_87637__$1 == null);
var state_87683__$1 = (function (){var statearr_87700 = state_87683;
(statearr_87700[(7)] = inst_87637__$1);

return statearr_87700;
})();
if(cljs.core.truth_(inst_87638)){
var statearr_87701_87960 = state_87683__$1;
(statearr_87701_87960[(1)] = (5));

} else {
var statearr_87702_87961 = state_87683__$1;
(statearr_87702_87961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87684 === (15))){
var inst_87653 = (state_87683[(8)]);
var state_87683__$1 = state_87683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87683__$1,(18),to,inst_87653);
} else {
if((state_val_87684 === (21))){
var inst_87674 = (state_87683[(2)]);
var state_87683__$1 = state_87683;
var statearr_87704_87963 = state_87683__$1;
(statearr_87704_87963[(2)] = inst_87674);

(statearr_87704_87963[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87684 === (13))){
var inst_87676 = (state_87683[(2)]);
var state_87683__$1 = (function (){var statearr_87705 = state_87683;
(statearr_87705[(9)] = inst_87676);

return statearr_87705;
})();
var statearr_87706_87970 = state_87683__$1;
(statearr_87706_87970[(2)] = null);

(statearr_87706_87970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87684 === (6))){
var inst_87637 = (state_87683[(7)]);
var state_87683__$1 = state_87683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87683__$1,(11),inst_87637);
} else {
if((state_val_87684 === (17))){
var inst_87669 = (state_87683[(2)]);
var state_87683__$1 = state_87683;
if(cljs.core.truth_(inst_87669)){
var statearr_87708_87971 = state_87683__$1;
(statearr_87708_87971[(1)] = (19));

} else {
var statearr_87710_87974 = state_87683__$1;
(statearr_87710_87974[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87684 === (3))){
var inst_87681 = (state_87683[(2)]);
var state_87683__$1 = state_87683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87683__$1,inst_87681);
} else {
if((state_val_87684 === (12))){
var inst_87650 = (state_87683[(10)]);
var state_87683__$1 = state_87683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87683__$1,(14),inst_87650);
} else {
if((state_val_87684 === (2))){
var state_87683__$1 = state_87683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87683__$1,(4),results);
} else {
if((state_val_87684 === (19))){
var state_87683__$1 = state_87683;
var statearr_87713_87981 = state_87683__$1;
(statearr_87713_87981[(2)] = null);

(statearr_87713_87981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87684 === (11))){
var inst_87650 = (state_87683[(2)]);
var state_87683__$1 = (function (){var statearr_87715 = state_87683;
(statearr_87715[(10)] = inst_87650);

return statearr_87715;
})();
var statearr_87716_87986 = state_87683__$1;
(statearr_87716_87986[(2)] = null);

(statearr_87716_87986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87684 === (9))){
var state_87683__$1 = state_87683;
var statearr_87719_87989 = state_87683__$1;
(statearr_87719_87989[(2)] = null);

(statearr_87719_87989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87684 === (5))){
var state_87683__$1 = state_87683;
if(cljs.core.truth_(close_QMARK_)){
var statearr_87720_87991 = state_87683__$1;
(statearr_87720_87991[(1)] = (8));

} else {
var statearr_87721_87992 = state_87683__$1;
(statearr_87721_87992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87684 === (14))){
var inst_87653 = (state_87683[(8)]);
var inst_87663 = (state_87683[(11)]);
var inst_87653__$1 = (state_87683[(2)]);
var inst_87662 = (inst_87653__$1 == null);
var inst_87663__$1 = cljs.core.not.call(null,inst_87662);
var state_87683__$1 = (function (){var statearr_87722 = state_87683;
(statearr_87722[(8)] = inst_87653__$1);

(statearr_87722[(11)] = inst_87663__$1);

return statearr_87722;
})();
if(inst_87663__$1){
var statearr_87725_87999 = state_87683__$1;
(statearr_87725_87999[(1)] = (15));

} else {
var statearr_87726_88001 = state_87683__$1;
(statearr_87726_88001[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87684 === (16))){
var inst_87663 = (state_87683[(11)]);
var state_87683__$1 = state_87683;
var statearr_87727_88002 = state_87683__$1;
(statearr_87727_88002[(2)] = inst_87663);

(statearr_87727_88002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87684 === (10))){
var inst_87644 = (state_87683[(2)]);
var state_87683__$1 = state_87683;
var statearr_87729_88010 = state_87683__$1;
(statearr_87729_88010[(2)] = inst_87644);

(statearr_87729_88010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87684 === (18))){
var inst_87666 = (state_87683[(2)]);
var state_87683__$1 = state_87683;
var statearr_87730_88011 = state_87683__$1;
(statearr_87730_88011[(2)] = inst_87666);

(statearr_87730_88011[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87684 === (8))){
var inst_87641 = cljs.core.async.close_BANG_.call(null,to);
var state_87683__$1 = state_87683;
var statearr_87731_88014 = state_87683__$1;
(statearr_87731_88014[(2)] = inst_87641);

(statearr_87731_88014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32975__auto__,jobs,results,process,async))
;
return ((function (switch__32863__auto__,c__32975__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____0 = (function (){
var statearr_87739 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_87739[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__);

(statearr_87739[(1)] = (1));

return statearr_87739;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____1 = (function (state_87683){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_87683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e87740){if((e87740 instanceof Object)){
var ex__32867__auto__ = e87740;
var statearr_87743_88019 = state_87683;
(statearr_87743_88019[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88022 = state_87683;
state_87683 = G__88022;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__ = function(state_87683){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____1.call(this,state_87683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32864__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto__,jobs,results,process,async))
})();
var state__32977__auto__ = (function (){var statearr_87744 = f__32976__auto__.call(null);
(statearr_87744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto__);

return statearr_87744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto__,jobs,results,process,async))
);

return c__32975__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args88033 = [];
var len__26896__auto___88043 = arguments.length;
var i__26897__auto___88044 = (0);
while(true){
if((i__26897__auto___88044 < len__26896__auto___88043)){
args88033.push((arguments[i__26897__auto___88044]));

var G__88046 = (i__26897__auto___88044 + (1));
i__26897__auto___88044 = G__88046;
continue;
} else {
}
break;
}

var G__88036 = args88033.length;
switch (G__88036) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88033.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args88062 = [];
var len__26896__auto___88067 = arguments.length;
var i__26897__auto___88068 = (0);
while(true){
if((i__26897__auto___88068 < len__26896__auto___88067)){
args88062.push((arguments[i__26897__auto___88068]));

var G__88071 = (i__26897__auto___88068 + (1));
i__26897__auto___88068 = G__88071;
continue;
} else {
}
break;
}

var G__88065 = args88062.length;
switch (G__88065) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88062.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args88088 = [];
var len__26896__auto___88168 = arguments.length;
var i__26897__auto___88169 = (0);
while(true){
if((i__26897__auto___88169 < len__26896__auto___88168)){
args88088.push((arguments[i__26897__auto___88169]));

var G__88171 = (i__26897__auto___88169 + (1));
i__26897__auto___88169 = G__88171;
continue;
} else {
}
break;
}

var G__88092 = args88088.length;
switch (G__88092) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88088.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32975__auto___88179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto___88179,tc,fc){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto___88179,tc,fc){
return (function (state_88124){
var state_val_88125 = (state_88124[(1)]);
if((state_val_88125 === (7))){
var inst_88120 = (state_88124[(2)]);
var state_88124__$1 = state_88124;
var statearr_88126_88182 = state_88124__$1;
(statearr_88126_88182[(2)] = inst_88120);

(statearr_88126_88182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88125 === (1))){
var state_88124__$1 = state_88124;
var statearr_88127_88185 = state_88124__$1;
(statearr_88127_88185[(2)] = null);

(statearr_88127_88185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88125 === (4))){
var inst_88101 = (state_88124[(7)]);
var inst_88101__$1 = (state_88124[(2)]);
var inst_88102 = (inst_88101__$1 == null);
var state_88124__$1 = (function (){var statearr_88128 = state_88124;
(statearr_88128[(7)] = inst_88101__$1);

return statearr_88128;
})();
if(cljs.core.truth_(inst_88102)){
var statearr_88129_88187 = state_88124__$1;
(statearr_88129_88187[(1)] = (5));

} else {
var statearr_88130_88188 = state_88124__$1;
(statearr_88130_88188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88125 === (13))){
var state_88124__$1 = state_88124;
var statearr_88132_88189 = state_88124__$1;
(statearr_88132_88189[(2)] = null);

(statearr_88132_88189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88125 === (6))){
var inst_88101 = (state_88124[(7)]);
var inst_88107 = p.call(null,inst_88101);
var state_88124__$1 = state_88124;
if(cljs.core.truth_(inst_88107)){
var statearr_88137_88193 = state_88124__$1;
(statearr_88137_88193[(1)] = (9));

} else {
var statearr_88138_88194 = state_88124__$1;
(statearr_88138_88194[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88125 === (3))){
var inst_88122 = (state_88124[(2)]);
var state_88124__$1 = state_88124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88124__$1,inst_88122);
} else {
if((state_val_88125 === (12))){
var state_88124__$1 = state_88124;
var statearr_88140_88197 = state_88124__$1;
(statearr_88140_88197[(2)] = null);

(statearr_88140_88197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88125 === (2))){
var state_88124__$1 = state_88124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88124__$1,(4),ch);
} else {
if((state_val_88125 === (11))){
var inst_88101 = (state_88124[(7)]);
var inst_88111 = (state_88124[(2)]);
var state_88124__$1 = state_88124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88124__$1,(8),inst_88111,inst_88101);
} else {
if((state_val_88125 === (9))){
var state_88124__$1 = state_88124;
var statearr_88143_88201 = state_88124__$1;
(statearr_88143_88201[(2)] = tc);

(statearr_88143_88201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88125 === (5))){
var inst_88104 = cljs.core.async.close_BANG_.call(null,tc);
var inst_88105 = cljs.core.async.close_BANG_.call(null,fc);
var state_88124__$1 = (function (){var statearr_88145 = state_88124;
(statearr_88145[(8)] = inst_88104);

return statearr_88145;
})();
var statearr_88147_88202 = state_88124__$1;
(statearr_88147_88202[(2)] = inst_88105);

(statearr_88147_88202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88125 === (14))){
var inst_88118 = (state_88124[(2)]);
var state_88124__$1 = state_88124;
var statearr_88148_88206 = state_88124__$1;
(statearr_88148_88206[(2)] = inst_88118);

(statearr_88148_88206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88125 === (10))){
var state_88124__$1 = state_88124;
var statearr_88149_88210 = state_88124__$1;
(statearr_88149_88210[(2)] = fc);

(statearr_88149_88210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88125 === (8))){
var inst_88113 = (state_88124[(2)]);
var state_88124__$1 = state_88124;
if(cljs.core.truth_(inst_88113)){
var statearr_88150_88212 = state_88124__$1;
(statearr_88150_88212[(1)] = (12));

} else {
var statearr_88151_88213 = state_88124__$1;
(statearr_88151_88213[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32975__auto___88179,tc,fc))
;
return ((function (switch__32863__auto__,c__32975__auto___88179,tc,fc){
return (function() {
var cljs$core$async$state_machine__32864__auto__ = null;
var cljs$core$async$state_machine__32864__auto____0 = (function (){
var statearr_88156 = [null,null,null,null,null,null,null,null,null];
(statearr_88156[(0)] = cljs$core$async$state_machine__32864__auto__);

(statearr_88156[(1)] = (1));

return statearr_88156;
});
var cljs$core$async$state_machine__32864__auto____1 = (function (state_88124){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_88124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e88158){if((e88158 instanceof Object)){
var ex__32867__auto__ = e88158;
var statearr_88160_88220 = state_88124;
(statearr_88160_88220[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88223 = state_88124;
state_88124 = G__88223;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$state_machine__32864__auto__ = function(state_88124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32864__auto____1.call(this,state_88124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32864__auto____0;
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32864__auto____1;
return cljs$core$async$state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto___88179,tc,fc))
})();
var state__32977__auto__ = (function (){var statearr_88163 = f__32976__auto__.call(null);
(statearr_88163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto___88179);

return statearr_88163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto___88179,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto__){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto__){
return (function (state_88288){
var state_val_88289 = (state_88288[(1)]);
if((state_val_88289 === (1))){
var inst_88274 = init;
var state_88288__$1 = (function (){var statearr_88290 = state_88288;
(statearr_88290[(7)] = inst_88274);

return statearr_88290;
})();
var statearr_88291_88325 = state_88288__$1;
(statearr_88291_88325[(2)] = null);

(statearr_88291_88325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88289 === (2))){
var state_88288__$1 = state_88288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88288__$1,(4),ch);
} else {
if((state_val_88289 === (3))){
var inst_88286 = (state_88288[(2)]);
var state_88288__$1 = state_88288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88288__$1,inst_88286);
} else {
if((state_val_88289 === (4))){
var inst_88277 = (state_88288[(8)]);
var inst_88277__$1 = (state_88288[(2)]);
var inst_88278 = (inst_88277__$1 == null);
var state_88288__$1 = (function (){var statearr_88296 = state_88288;
(statearr_88296[(8)] = inst_88277__$1);

return statearr_88296;
})();
if(cljs.core.truth_(inst_88278)){
var statearr_88297_88329 = state_88288__$1;
(statearr_88297_88329[(1)] = (5));

} else {
var statearr_88298_88330 = state_88288__$1;
(statearr_88298_88330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88289 === (5))){
var inst_88274 = (state_88288[(7)]);
var state_88288__$1 = state_88288;
var statearr_88299_88331 = state_88288__$1;
(statearr_88299_88331[(2)] = inst_88274);

(statearr_88299_88331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88289 === (6))){
var inst_88274 = (state_88288[(7)]);
var inst_88277 = (state_88288[(8)]);
var inst_88281 = f.call(null,inst_88274,inst_88277);
var inst_88274__$1 = inst_88281;
var state_88288__$1 = (function (){var statearr_88301 = state_88288;
(statearr_88301[(7)] = inst_88274__$1);

return statearr_88301;
})();
var statearr_88302_88332 = state_88288__$1;
(statearr_88302_88332[(2)] = null);

(statearr_88302_88332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88289 === (7))){
var inst_88284 = (state_88288[(2)]);
var state_88288__$1 = state_88288;
var statearr_88303_88336 = state_88288__$1;
(statearr_88303_88336[(2)] = inst_88284);

(statearr_88303_88336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__32975__auto__))
;
return ((function (switch__32863__auto__,c__32975__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32864__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32864__auto____0 = (function (){
var statearr_88312 = [null,null,null,null,null,null,null,null,null];
(statearr_88312[(0)] = cljs$core$async$reduce_$_state_machine__32864__auto__);

(statearr_88312[(1)] = (1));

return statearr_88312;
});
var cljs$core$async$reduce_$_state_machine__32864__auto____1 = (function (state_88288){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_88288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e88313){if((e88313 instanceof Object)){
var ex__32867__auto__ = e88313;
var statearr_88315_88342 = state_88288;
(statearr_88315_88342[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88344 = state_88288;
state_88288 = G__88344;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32864__auto__ = function(state_88288){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32864__auto____1.call(this,state_88288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32864__auto____0;
cljs$core$async$reduce_$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32864__auto____1;
return cljs$core$async$reduce_$_state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto__))
})();
var state__32977__auto__ = (function (){var statearr_88316 = f__32976__auto__.call(null);
(statearr_88316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto__);

return statearr_88316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto__))
);

return c__32975__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args88351 = [];
var len__26896__auto___88420 = arguments.length;
var i__26897__auto___88421 = (0);
while(true){
if((i__26897__auto___88421 < len__26896__auto___88420)){
args88351.push((arguments[i__26897__auto___88421]));

var G__88422 = (i__26897__auto___88421 + (1));
i__26897__auto___88421 = G__88422;
continue;
} else {
}
break;
}

var G__88356 = args88351.length;
switch (G__88356) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88351.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto__){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto__){
return (function (state_88381){
var state_val_88382 = (state_88381[(1)]);
if((state_val_88382 === (7))){
var inst_88363 = (state_88381[(2)]);
var state_88381__$1 = state_88381;
var statearr_88385_88432 = state_88381__$1;
(statearr_88385_88432[(2)] = inst_88363);

(statearr_88385_88432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88382 === (1))){
var inst_88357 = cljs.core.seq.call(null,coll);
var inst_88358 = inst_88357;
var state_88381__$1 = (function (){var statearr_88386 = state_88381;
(statearr_88386[(7)] = inst_88358);

return statearr_88386;
})();
var statearr_88388_88443 = state_88381__$1;
(statearr_88388_88443[(2)] = null);

(statearr_88388_88443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88382 === (4))){
var inst_88358 = (state_88381[(7)]);
var inst_88361 = cljs.core.first.call(null,inst_88358);
var state_88381__$1 = state_88381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88381__$1,(7),ch,inst_88361);
} else {
if((state_val_88382 === (13))){
var inst_88375 = (state_88381[(2)]);
var state_88381__$1 = state_88381;
var statearr_88389_88444 = state_88381__$1;
(statearr_88389_88444[(2)] = inst_88375);

(statearr_88389_88444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88382 === (6))){
var inst_88366 = (state_88381[(2)]);
var state_88381__$1 = state_88381;
if(cljs.core.truth_(inst_88366)){
var statearr_88390_88445 = state_88381__$1;
(statearr_88390_88445[(1)] = (8));

} else {
var statearr_88391_88448 = state_88381__$1;
(statearr_88391_88448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88382 === (3))){
var inst_88379 = (state_88381[(2)]);
var state_88381__$1 = state_88381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88381__$1,inst_88379);
} else {
if((state_val_88382 === (12))){
var state_88381__$1 = state_88381;
var statearr_88392_88449 = state_88381__$1;
(statearr_88392_88449[(2)] = null);

(statearr_88392_88449[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88382 === (2))){
var inst_88358 = (state_88381[(7)]);
var state_88381__$1 = state_88381;
if(cljs.core.truth_(inst_88358)){
var statearr_88393_88450 = state_88381__$1;
(statearr_88393_88450[(1)] = (4));

} else {
var statearr_88398_88451 = state_88381__$1;
(statearr_88398_88451[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88382 === (11))){
var inst_88372 = cljs.core.async.close_BANG_.call(null,ch);
var state_88381__$1 = state_88381;
var statearr_88399_88455 = state_88381__$1;
(statearr_88399_88455[(2)] = inst_88372);

(statearr_88399_88455[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88382 === (9))){
var state_88381__$1 = state_88381;
if(cljs.core.truth_(close_QMARK_)){
var statearr_88400_88456 = state_88381__$1;
(statearr_88400_88456[(1)] = (11));

} else {
var statearr_88401_88457 = state_88381__$1;
(statearr_88401_88457[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88382 === (5))){
var inst_88358 = (state_88381[(7)]);
var state_88381__$1 = state_88381;
var statearr_88404_88458 = state_88381__$1;
(statearr_88404_88458[(2)] = inst_88358);

(statearr_88404_88458[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88382 === (10))){
var inst_88377 = (state_88381[(2)]);
var state_88381__$1 = state_88381;
var statearr_88406_88462 = state_88381__$1;
(statearr_88406_88462[(2)] = inst_88377);

(statearr_88406_88462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88382 === (8))){
var inst_88358 = (state_88381[(7)]);
var inst_88368 = cljs.core.next.call(null,inst_88358);
var inst_88358__$1 = inst_88368;
var state_88381__$1 = (function (){var statearr_88407 = state_88381;
(statearr_88407[(7)] = inst_88358__$1);

return statearr_88407;
})();
var statearr_88408_88463 = state_88381__$1;
(statearr_88408_88463[(2)] = null);

(statearr_88408_88463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32975__auto__))
;
return ((function (switch__32863__auto__,c__32975__auto__){
return (function() {
var cljs$core$async$state_machine__32864__auto__ = null;
var cljs$core$async$state_machine__32864__auto____0 = (function (){
var statearr_88413 = [null,null,null,null,null,null,null,null];
(statearr_88413[(0)] = cljs$core$async$state_machine__32864__auto__);

(statearr_88413[(1)] = (1));

return statearr_88413;
});
var cljs$core$async$state_machine__32864__auto____1 = (function (state_88381){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_88381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e88416){if((e88416 instanceof Object)){
var ex__32867__auto__ = e88416;
var statearr_88417_88469 = state_88381;
(statearr_88417_88469[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88473 = state_88381;
state_88381 = G__88473;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$state_machine__32864__auto__ = function(state_88381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32864__auto____1.call(this,state_88381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32864__auto____0;
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32864__auto____1;
return cljs$core$async$state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto__))
})();
var state__32977__auto__ = (function (){var statearr_88419 = f__32976__auto__.call(null);
(statearr_88419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto__);

return statearr_88419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto__))
);

return c__32975__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26490__auto__ = (((_ == null))?null:_);
var m__26491__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,_);
} else {
var m__26491__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26490__auto__ = (((m == null))?null:m);
var m__26491__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26491__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26490__auto__ = (((m == null))?null:m);
var m__26491__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,m,ch);
} else {
var m__26491__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26490__auto__ = (((m == null))?null:m);
var m__26491__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,m);
} else {
var m__26491__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async88760 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async88760 = (function (mult,ch,cs,meta88761){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta88761 = meta88761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async88760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_88762,meta88761__$1){
var self__ = this;
var _88762__$1 = this;
return (new cljs.core.async.t_cljs$core$async88760(self__.mult,self__.ch,self__.cs,meta88761__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async88760.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_88762){
var self__ = this;
var _88762__$1 = this;
return self__.meta88761;
});})(cs))
;

cljs.core.async.t_cljs$core$async88760.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async88760.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async88760.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async88760.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async88760.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async88760.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async88760.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta88761","meta88761",-1965311749,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async88760.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async88760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async88760";

cljs.core.async.t_cljs$core$async88760.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"cljs.core.async/t_cljs$core$async88760");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async88760 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async88760(mult__$1,ch__$1,cs__$1,meta88761){
return (new cljs.core.async.t_cljs$core$async88760(mult__$1,ch__$1,cs__$1,meta88761));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async88760(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32975__auto___89039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto___89039,cs,m,dchan,dctr,done){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto___89039,cs,m,dchan,dctr,done){
return (function (state_88911){
var state_val_88912 = (state_88911[(1)]);
if((state_val_88912 === (7))){
var inst_88907 = (state_88911[(2)]);
var state_88911__$1 = state_88911;
var statearr_88913_89044 = state_88911__$1;
(statearr_88913_89044[(2)] = inst_88907);

(statearr_88913_89044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (20))){
var inst_88800 = (state_88911[(7)]);
var inst_88810 = cljs.core.first.call(null,inst_88800);
var inst_88811 = cljs.core.nth.call(null,inst_88810,(0),null);
var inst_88812 = cljs.core.nth.call(null,inst_88810,(1),null);
var state_88911__$1 = (function (){var statearr_88914 = state_88911;
(statearr_88914[(8)] = inst_88811);

return statearr_88914;
})();
if(cljs.core.truth_(inst_88812)){
var statearr_88915_89046 = state_88911__$1;
(statearr_88915_89046[(1)] = (22));

} else {
var statearr_88916_89047 = state_88911__$1;
(statearr_88916_89047[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (27))){
var inst_88840 = (state_88911[(9)]);
var inst_88770 = (state_88911[(10)]);
var inst_88847 = (state_88911[(11)]);
var inst_88842 = (state_88911[(12)]);
var inst_88847__$1 = cljs.core._nth.call(null,inst_88840,inst_88842);
var inst_88848 = cljs.core.async.put_BANG_.call(null,inst_88847__$1,inst_88770,done);
var state_88911__$1 = (function (){var statearr_88917 = state_88911;
(statearr_88917[(11)] = inst_88847__$1);

return statearr_88917;
})();
if(cljs.core.truth_(inst_88848)){
var statearr_88918_89051 = state_88911__$1;
(statearr_88918_89051[(1)] = (30));

} else {
var statearr_88919_89052 = state_88911__$1;
(statearr_88919_89052[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (1))){
var state_88911__$1 = state_88911;
var statearr_88920_89053 = state_88911__$1;
(statearr_88920_89053[(2)] = null);

(statearr_88920_89053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (24))){
var inst_88800 = (state_88911[(7)]);
var inst_88817 = (state_88911[(2)]);
var inst_88818 = cljs.core.next.call(null,inst_88800);
var inst_88780 = inst_88818;
var inst_88781 = null;
var inst_88782 = (0);
var inst_88783 = (0);
var state_88911__$1 = (function (){var statearr_88921 = state_88911;
(statearr_88921[(13)] = inst_88780);

(statearr_88921[(14)] = inst_88782);

(statearr_88921[(15)] = inst_88781);

(statearr_88921[(16)] = inst_88817);

(statearr_88921[(17)] = inst_88783);

return statearr_88921;
})();
var statearr_88922_89057 = state_88911__$1;
(statearr_88922_89057[(2)] = null);

(statearr_88922_89057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (39))){
var state_88911__$1 = state_88911;
var statearr_88926_89059 = state_88911__$1;
(statearr_88926_89059[(2)] = null);

(statearr_88926_89059[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (4))){
var inst_88770 = (state_88911[(10)]);
var inst_88770__$1 = (state_88911[(2)]);
var inst_88771 = (inst_88770__$1 == null);
var state_88911__$1 = (function (){var statearr_88929 = state_88911;
(statearr_88929[(10)] = inst_88770__$1);

return statearr_88929;
})();
if(cljs.core.truth_(inst_88771)){
var statearr_88930_89062 = state_88911__$1;
(statearr_88930_89062[(1)] = (5));

} else {
var statearr_88931_89063 = state_88911__$1;
(statearr_88931_89063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (15))){
var inst_88780 = (state_88911[(13)]);
var inst_88782 = (state_88911[(14)]);
var inst_88781 = (state_88911[(15)]);
var inst_88783 = (state_88911[(17)]);
var inst_88796 = (state_88911[(2)]);
var inst_88797 = (inst_88783 + (1));
var tmp88923 = inst_88780;
var tmp88924 = inst_88782;
var tmp88925 = inst_88781;
var inst_88780__$1 = tmp88923;
var inst_88781__$1 = tmp88925;
var inst_88782__$1 = tmp88924;
var inst_88783__$1 = inst_88797;
var state_88911__$1 = (function (){var statearr_88933 = state_88911;
(statearr_88933[(13)] = inst_88780__$1);

(statearr_88933[(14)] = inst_88782__$1);

(statearr_88933[(18)] = inst_88796);

(statearr_88933[(15)] = inst_88781__$1);

(statearr_88933[(17)] = inst_88783__$1);

return statearr_88933;
})();
var statearr_88934_89067 = state_88911__$1;
(statearr_88934_89067[(2)] = null);

(statearr_88934_89067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (21))){
var inst_88821 = (state_88911[(2)]);
var state_88911__$1 = state_88911;
var statearr_88938_89068 = state_88911__$1;
(statearr_88938_89068[(2)] = inst_88821);

(statearr_88938_89068[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (31))){
var inst_88847 = (state_88911[(11)]);
var inst_88851 = done.call(null,null);
var inst_88852 = cljs.core.async.untap_STAR_.call(null,m,inst_88847);
var state_88911__$1 = (function (){var statearr_88943 = state_88911;
(statearr_88943[(19)] = inst_88851);

return statearr_88943;
})();
var statearr_88944_89069 = state_88911__$1;
(statearr_88944_89069[(2)] = inst_88852);

(statearr_88944_89069[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (32))){
var inst_88840 = (state_88911[(9)]);
var inst_88841 = (state_88911[(20)]);
var inst_88839 = (state_88911[(21)]);
var inst_88842 = (state_88911[(12)]);
var inst_88854 = (state_88911[(2)]);
var inst_88855 = (inst_88842 + (1));
var tmp88935 = inst_88840;
var tmp88936 = inst_88841;
var tmp88937 = inst_88839;
var inst_88839__$1 = tmp88937;
var inst_88840__$1 = tmp88935;
var inst_88841__$1 = tmp88936;
var inst_88842__$1 = inst_88855;
var state_88911__$1 = (function (){var statearr_88945 = state_88911;
(statearr_88945[(9)] = inst_88840__$1);

(statearr_88945[(22)] = inst_88854);

(statearr_88945[(20)] = inst_88841__$1);

(statearr_88945[(21)] = inst_88839__$1);

(statearr_88945[(12)] = inst_88842__$1);

return statearr_88945;
})();
var statearr_88946_89070 = state_88911__$1;
(statearr_88946_89070[(2)] = null);

(statearr_88946_89070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (40))){
var inst_88871 = (state_88911[(23)]);
var inst_88877 = done.call(null,null);
var inst_88878 = cljs.core.async.untap_STAR_.call(null,m,inst_88871);
var state_88911__$1 = (function (){var statearr_88947 = state_88911;
(statearr_88947[(24)] = inst_88877);

return statearr_88947;
})();
var statearr_88950_89071 = state_88911__$1;
(statearr_88950_89071[(2)] = inst_88878);

(statearr_88950_89071[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (33))){
var inst_88858 = (state_88911[(25)]);
var inst_88864 = cljs.core.chunked_seq_QMARK_.call(null,inst_88858);
var state_88911__$1 = state_88911;
if(inst_88864){
var statearr_88951_89072 = state_88911__$1;
(statearr_88951_89072[(1)] = (36));

} else {
var statearr_88952_89073 = state_88911__$1;
(statearr_88952_89073[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (13))){
var inst_88790 = (state_88911[(26)]);
var inst_88793 = cljs.core.async.close_BANG_.call(null,inst_88790);
var state_88911__$1 = state_88911;
var statearr_88954_89074 = state_88911__$1;
(statearr_88954_89074[(2)] = inst_88793);

(statearr_88954_89074[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (22))){
var inst_88811 = (state_88911[(8)]);
var inst_88814 = cljs.core.async.close_BANG_.call(null,inst_88811);
var state_88911__$1 = state_88911;
var statearr_88955_89075 = state_88911__$1;
(statearr_88955_89075[(2)] = inst_88814);

(statearr_88955_89075[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (36))){
var inst_88858 = (state_88911[(25)]);
var inst_88866 = cljs.core.chunk_first.call(null,inst_88858);
var inst_88867 = cljs.core.chunk_rest.call(null,inst_88858);
var inst_88868 = cljs.core.count.call(null,inst_88866);
var inst_88839 = inst_88867;
var inst_88840 = inst_88866;
var inst_88841 = inst_88868;
var inst_88842 = (0);
var state_88911__$1 = (function (){var statearr_88956 = state_88911;
(statearr_88956[(9)] = inst_88840);

(statearr_88956[(20)] = inst_88841);

(statearr_88956[(21)] = inst_88839);

(statearr_88956[(12)] = inst_88842);

return statearr_88956;
})();
var statearr_88957_89079 = state_88911__$1;
(statearr_88957_89079[(2)] = null);

(statearr_88957_89079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (41))){
var inst_88858 = (state_88911[(25)]);
var inst_88880 = (state_88911[(2)]);
var inst_88881 = cljs.core.next.call(null,inst_88858);
var inst_88839 = inst_88881;
var inst_88840 = null;
var inst_88841 = (0);
var inst_88842 = (0);
var state_88911__$1 = (function (){var statearr_88958 = state_88911;
(statearr_88958[(9)] = inst_88840);

(statearr_88958[(20)] = inst_88841);

(statearr_88958[(21)] = inst_88839);

(statearr_88958[(12)] = inst_88842);

(statearr_88958[(27)] = inst_88880);

return statearr_88958;
})();
var statearr_88959_89086 = state_88911__$1;
(statearr_88959_89086[(2)] = null);

(statearr_88959_89086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (43))){
var state_88911__$1 = state_88911;
var statearr_88960_89087 = state_88911__$1;
(statearr_88960_89087[(2)] = null);

(statearr_88960_89087[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (29))){
var inst_88889 = (state_88911[(2)]);
var state_88911__$1 = state_88911;
var statearr_88961_89088 = state_88911__$1;
(statearr_88961_89088[(2)] = inst_88889);

(statearr_88961_89088[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (44))){
var inst_88904 = (state_88911[(2)]);
var state_88911__$1 = (function (){var statearr_88963 = state_88911;
(statearr_88963[(28)] = inst_88904);

return statearr_88963;
})();
var statearr_88964_89089 = state_88911__$1;
(statearr_88964_89089[(2)] = null);

(statearr_88964_89089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (6))){
var inst_88831 = (state_88911[(29)]);
var inst_88830 = cljs.core.deref.call(null,cs);
var inst_88831__$1 = cljs.core.keys.call(null,inst_88830);
var inst_88832 = cljs.core.count.call(null,inst_88831__$1);
var inst_88833 = cljs.core.reset_BANG_.call(null,dctr,inst_88832);
var inst_88838 = cljs.core.seq.call(null,inst_88831__$1);
var inst_88839 = inst_88838;
var inst_88840 = null;
var inst_88841 = (0);
var inst_88842 = (0);
var state_88911__$1 = (function (){var statearr_88968 = state_88911;
(statearr_88968[(9)] = inst_88840);

(statearr_88968[(30)] = inst_88833);

(statearr_88968[(29)] = inst_88831__$1);

(statearr_88968[(20)] = inst_88841);

(statearr_88968[(21)] = inst_88839);

(statearr_88968[(12)] = inst_88842);

return statearr_88968;
})();
var statearr_88969_89090 = state_88911__$1;
(statearr_88969_89090[(2)] = null);

(statearr_88969_89090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (28))){
var inst_88858 = (state_88911[(25)]);
var inst_88839 = (state_88911[(21)]);
var inst_88858__$1 = cljs.core.seq.call(null,inst_88839);
var state_88911__$1 = (function (){var statearr_88970 = state_88911;
(statearr_88970[(25)] = inst_88858__$1);

return statearr_88970;
})();
if(inst_88858__$1){
var statearr_88971_89095 = state_88911__$1;
(statearr_88971_89095[(1)] = (33));

} else {
var statearr_88972_89096 = state_88911__$1;
(statearr_88972_89096[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (25))){
var inst_88841 = (state_88911[(20)]);
var inst_88842 = (state_88911[(12)]);
var inst_88844 = (inst_88842 < inst_88841);
var inst_88845 = inst_88844;
var state_88911__$1 = state_88911;
if(cljs.core.truth_(inst_88845)){
var statearr_88973_89097 = state_88911__$1;
(statearr_88973_89097[(1)] = (27));

} else {
var statearr_88974_89098 = state_88911__$1;
(statearr_88974_89098[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (34))){
var state_88911__$1 = state_88911;
var statearr_88975_89099 = state_88911__$1;
(statearr_88975_89099[(2)] = null);

(statearr_88975_89099[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (17))){
var state_88911__$1 = state_88911;
var statearr_88976_89101 = state_88911__$1;
(statearr_88976_89101[(2)] = null);

(statearr_88976_89101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (3))){
var inst_88909 = (state_88911[(2)]);
var state_88911__$1 = state_88911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88911__$1,inst_88909);
} else {
if((state_val_88912 === (12))){
var inst_88826 = (state_88911[(2)]);
var state_88911__$1 = state_88911;
var statearr_88977_89102 = state_88911__$1;
(statearr_88977_89102[(2)] = inst_88826);

(statearr_88977_89102[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (2))){
var state_88911__$1 = state_88911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88911__$1,(4),ch);
} else {
if((state_val_88912 === (23))){
var state_88911__$1 = state_88911;
var statearr_88980_89103 = state_88911__$1;
(statearr_88980_89103[(2)] = null);

(statearr_88980_89103[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (35))){
var inst_88887 = (state_88911[(2)]);
var state_88911__$1 = state_88911;
var statearr_88982_89107 = state_88911__$1;
(statearr_88982_89107[(2)] = inst_88887);

(statearr_88982_89107[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (19))){
var inst_88800 = (state_88911[(7)]);
var inst_88804 = cljs.core.chunk_first.call(null,inst_88800);
var inst_88805 = cljs.core.chunk_rest.call(null,inst_88800);
var inst_88806 = cljs.core.count.call(null,inst_88804);
var inst_88780 = inst_88805;
var inst_88781 = inst_88804;
var inst_88782 = inst_88806;
var inst_88783 = (0);
var state_88911__$1 = (function (){var statearr_88983 = state_88911;
(statearr_88983[(13)] = inst_88780);

(statearr_88983[(14)] = inst_88782);

(statearr_88983[(15)] = inst_88781);

(statearr_88983[(17)] = inst_88783);

return statearr_88983;
})();
var statearr_88984_89108 = state_88911__$1;
(statearr_88984_89108[(2)] = null);

(statearr_88984_89108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (11))){
var inst_88780 = (state_88911[(13)]);
var inst_88800 = (state_88911[(7)]);
var inst_88800__$1 = cljs.core.seq.call(null,inst_88780);
var state_88911__$1 = (function (){var statearr_88985 = state_88911;
(statearr_88985[(7)] = inst_88800__$1);

return statearr_88985;
})();
if(inst_88800__$1){
var statearr_88986_89109 = state_88911__$1;
(statearr_88986_89109[(1)] = (16));

} else {
var statearr_88987_89110 = state_88911__$1;
(statearr_88987_89110[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (9))){
var inst_88828 = (state_88911[(2)]);
var state_88911__$1 = state_88911;
var statearr_88988_89111 = state_88911__$1;
(statearr_88988_89111[(2)] = inst_88828);

(statearr_88988_89111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (5))){
var inst_88778 = cljs.core.deref.call(null,cs);
var inst_88779 = cljs.core.seq.call(null,inst_88778);
var inst_88780 = inst_88779;
var inst_88781 = null;
var inst_88782 = (0);
var inst_88783 = (0);
var state_88911__$1 = (function (){var statearr_88992 = state_88911;
(statearr_88992[(13)] = inst_88780);

(statearr_88992[(14)] = inst_88782);

(statearr_88992[(15)] = inst_88781);

(statearr_88992[(17)] = inst_88783);

return statearr_88992;
})();
var statearr_88993_89112 = state_88911__$1;
(statearr_88993_89112[(2)] = null);

(statearr_88993_89112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (14))){
var state_88911__$1 = state_88911;
var statearr_88996_89113 = state_88911__$1;
(statearr_88996_89113[(2)] = null);

(statearr_88996_89113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (45))){
var inst_88901 = (state_88911[(2)]);
var state_88911__$1 = state_88911;
var statearr_88997_89114 = state_88911__$1;
(statearr_88997_89114[(2)] = inst_88901);

(statearr_88997_89114[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (26))){
var inst_88831 = (state_88911[(29)]);
var inst_88891 = (state_88911[(2)]);
var inst_88898 = cljs.core.seq.call(null,inst_88831);
var state_88911__$1 = (function (){var statearr_88999 = state_88911;
(statearr_88999[(31)] = inst_88891);

return statearr_88999;
})();
if(inst_88898){
var statearr_89000_89115 = state_88911__$1;
(statearr_89000_89115[(1)] = (42));

} else {
var statearr_89001_89116 = state_88911__$1;
(statearr_89001_89116[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (16))){
var inst_88800 = (state_88911[(7)]);
var inst_88802 = cljs.core.chunked_seq_QMARK_.call(null,inst_88800);
var state_88911__$1 = state_88911;
if(inst_88802){
var statearr_89002_89118 = state_88911__$1;
(statearr_89002_89118[(1)] = (19));

} else {
var statearr_89003_89119 = state_88911__$1;
(statearr_89003_89119[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (38))){
var inst_88884 = (state_88911[(2)]);
var state_88911__$1 = state_88911;
var statearr_89004_89120 = state_88911__$1;
(statearr_89004_89120[(2)] = inst_88884);

(statearr_89004_89120[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (30))){
var state_88911__$1 = state_88911;
var statearr_89005_89122 = state_88911__$1;
(statearr_89005_89122[(2)] = null);

(statearr_89005_89122[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (10))){
var inst_88781 = (state_88911[(15)]);
var inst_88783 = (state_88911[(17)]);
var inst_88789 = cljs.core._nth.call(null,inst_88781,inst_88783);
var inst_88790 = cljs.core.nth.call(null,inst_88789,(0),null);
var inst_88791 = cljs.core.nth.call(null,inst_88789,(1),null);
var state_88911__$1 = (function (){var statearr_89006 = state_88911;
(statearr_89006[(26)] = inst_88790);

return statearr_89006;
})();
if(cljs.core.truth_(inst_88791)){
var statearr_89007_89123 = state_88911__$1;
(statearr_89007_89123[(1)] = (13));

} else {
var statearr_89008_89124 = state_88911__$1;
(statearr_89008_89124[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (18))){
var inst_88824 = (state_88911[(2)]);
var state_88911__$1 = state_88911;
var statearr_89009_89125 = state_88911__$1;
(statearr_89009_89125[(2)] = inst_88824);

(statearr_89009_89125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (42))){
var state_88911__$1 = state_88911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88911__$1,(45),dchan);
} else {
if((state_val_88912 === (37))){
var inst_88858 = (state_88911[(25)]);
var inst_88871 = (state_88911[(23)]);
var inst_88770 = (state_88911[(10)]);
var inst_88871__$1 = cljs.core.first.call(null,inst_88858);
var inst_88873 = cljs.core.async.put_BANG_.call(null,inst_88871__$1,inst_88770,done);
var state_88911__$1 = (function (){var statearr_89013 = state_88911;
(statearr_89013[(23)] = inst_88871__$1);

return statearr_89013;
})();
if(cljs.core.truth_(inst_88873)){
var statearr_89014_89126 = state_88911__$1;
(statearr_89014_89126[(1)] = (39));

} else {
var statearr_89015_89128 = state_88911__$1;
(statearr_89015_89128[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88912 === (8))){
var inst_88782 = (state_88911[(14)]);
var inst_88783 = (state_88911[(17)]);
var inst_88785 = (inst_88783 < inst_88782);
var inst_88786 = inst_88785;
var state_88911__$1 = state_88911;
if(cljs.core.truth_(inst_88786)){
var statearr_89016_89129 = state_88911__$1;
(statearr_89016_89129[(1)] = (10));

} else {
var statearr_89017_89130 = state_88911__$1;
(statearr_89017_89130[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32975__auto___89039,cs,m,dchan,dctr,done))
;
return ((function (switch__32863__auto__,c__32975__auto___89039,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32864__auto__ = null;
var cljs$core$async$mult_$_state_machine__32864__auto____0 = (function (){
var statearr_89024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89024[(0)] = cljs$core$async$mult_$_state_machine__32864__auto__);

(statearr_89024[(1)] = (1));

return statearr_89024;
});
var cljs$core$async$mult_$_state_machine__32864__auto____1 = (function (state_88911){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_88911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e89025){if((e89025 instanceof Object)){
var ex__32867__auto__ = e89025;
var statearr_89026_89132 = state_88911;
(statearr_89026_89132[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89133 = state_88911;
state_88911 = G__89133;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32864__auto__ = function(state_88911){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32864__auto____1.call(this,state_88911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32864__auto____0;
cljs$core$async$mult_$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32864__auto____1;
return cljs$core$async$mult_$_state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto___89039,cs,m,dchan,dctr,done))
})();
var state__32977__auto__ = (function (){var statearr_89027 = f__32976__auto__.call(null);
(statearr_89027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto___89039);

return statearr_89027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto___89039,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args89134 = [];
var len__26896__auto___89137 = arguments.length;
var i__26897__auto___89138 = (0);
while(true){
if((i__26897__auto___89138 < len__26896__auto___89137)){
args89134.push((arguments[i__26897__auto___89138]));

var G__89139 = (i__26897__auto___89138 + (1));
i__26897__auto___89138 = G__89139;
continue;
} else {
}
break;
}

var G__89136 = args89134.length;
switch (G__89136) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args89134.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26490__auto__ = (((m == null))?null:m);
var m__26491__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,m,ch);
} else {
var m__26491__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26490__auto__ = (((m == null))?null:m);
var m__26491__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,m,ch);
} else {
var m__26491__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26490__auto__ = (((m == null))?null:m);
var m__26491__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,m);
} else {
var m__26491__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26490__auto__ = (((m == null))?null:m);
var m__26491__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,m,state_map);
} else {
var m__26491__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26490__auto__ = (((m == null))?null:m);
var m__26491__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,m,mode);
} else {
var m__26491__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26903__auto__ = [];
var len__26896__auto___89164 = arguments.length;
var i__26897__auto___89165 = (0);
while(true){
if((i__26897__auto___89165 < len__26896__auto___89164)){
args__26903__auto__.push((arguments[i__26897__auto___89165]));

var G__89167 = (i__26897__auto___89165 + (1));
i__26897__auto___89165 = G__89167;
continue;
} else {
}
break;
}

var argseq__26904__auto__ = ((((3) < args__26903__auto__.length))?(new cljs.core.IndexedSeq(args__26903__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26904__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__89158){
var map__89159 = p__89158;
var map__89159__$1 = ((((!((map__89159 == null)))?((((map__89159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__89159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89159):map__89159);
var opts = map__89159__$1;
var statearr_89161_89168 = state;
(statearr_89161_89168[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__89159,map__89159__$1,opts){
return (function (val){
var statearr_89162_89169 = state;
(statearr_89162_89169[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__89159,map__89159__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_89163_89170 = state;
(statearr_89163_89170[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq89150){
var G__89151 = cljs.core.first.call(null,seq89150);
var seq89150__$1 = cljs.core.next.call(null,seq89150);
var G__89152 = cljs.core.first.call(null,seq89150__$1);
var seq89150__$2 = cljs.core.next.call(null,seq89150__$1);
var G__89153 = cljs.core.first.call(null,seq89150__$2);
var seq89150__$3 = cljs.core.next.call(null,seq89150__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__89151,G__89152,G__89153,seq89150__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async89341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async89341 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta89342){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta89342 = meta89342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async89341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_89343,meta89342__$1){
var self__ = this;
var _89343__$1 = this;
return (new cljs.core.async.t_cljs$core$async89341(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta89342__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89341.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_89343){
var self__ = this;
var _89343__$1 = this;
return self__.meta89342;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89341.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async89341.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89341.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async89341.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89341.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89341.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89341.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89341.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89341.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta89342","meta89342",-1551319388,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89341.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async89341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async89341";

cljs.core.async.t_cljs$core$async89341.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"cljs.core.async/t_cljs$core$async89341");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async89341 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async89341(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta89342){
return (new cljs.core.async.t_cljs$core$async89341(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta89342));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async89341(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32975__auto___89523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto___89523,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto___89523,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_89441){
var state_val_89442 = (state_89441[(1)]);
if((state_val_89442 === (7))){
var inst_89359 = (state_89441[(2)]);
var state_89441__$1 = state_89441;
var statearr_89443_89524 = state_89441__$1;
(statearr_89443_89524[(2)] = inst_89359);

(statearr_89443_89524[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (20))){
var inst_89371 = (state_89441[(7)]);
var state_89441__$1 = state_89441;
var statearr_89444_89525 = state_89441__$1;
(statearr_89444_89525[(2)] = inst_89371);

(statearr_89444_89525[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (27))){
var state_89441__$1 = state_89441;
var statearr_89445_89526 = state_89441__$1;
(statearr_89445_89526[(2)] = null);

(statearr_89445_89526[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (1))){
var inst_89347 = (state_89441[(8)]);
var inst_89347__$1 = calc_state.call(null);
var inst_89349 = (inst_89347__$1 == null);
var inst_89350 = cljs.core.not.call(null,inst_89349);
var state_89441__$1 = (function (){var statearr_89446 = state_89441;
(statearr_89446[(8)] = inst_89347__$1);

return statearr_89446;
})();
if(inst_89350){
var statearr_89447_89528 = state_89441__$1;
(statearr_89447_89528[(1)] = (2));

} else {
var statearr_89448_89529 = state_89441__$1;
(statearr_89448_89529[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (24))){
var inst_89394 = (state_89441[(9)]);
var inst_89401 = (state_89441[(10)]);
var inst_89415 = (state_89441[(11)]);
var inst_89415__$1 = inst_89394.call(null,inst_89401);
var state_89441__$1 = (function (){var statearr_89449 = state_89441;
(statearr_89449[(11)] = inst_89415__$1);

return statearr_89449;
})();
if(cljs.core.truth_(inst_89415__$1)){
var statearr_89450_89530 = state_89441__$1;
(statearr_89450_89530[(1)] = (29));

} else {
var statearr_89451_89531 = state_89441__$1;
(statearr_89451_89531[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (4))){
var inst_89362 = (state_89441[(2)]);
var state_89441__$1 = state_89441;
if(cljs.core.truth_(inst_89362)){
var statearr_89452_89532 = state_89441__$1;
(statearr_89452_89532[(1)] = (8));

} else {
var statearr_89453_89533 = state_89441__$1;
(statearr_89453_89533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (15))){
var inst_89388 = (state_89441[(2)]);
var state_89441__$1 = state_89441;
if(cljs.core.truth_(inst_89388)){
var statearr_89454_89535 = state_89441__$1;
(statearr_89454_89535[(1)] = (19));

} else {
var statearr_89455_89536 = state_89441__$1;
(statearr_89455_89536[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (21))){
var inst_89393 = (state_89441[(12)]);
var inst_89393__$1 = (state_89441[(2)]);
var inst_89394 = cljs.core.get.call(null,inst_89393__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_89395 = cljs.core.get.call(null,inst_89393__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_89396 = cljs.core.get.call(null,inst_89393__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_89441__$1 = (function (){var statearr_89456 = state_89441;
(statearr_89456[(9)] = inst_89394);

(statearr_89456[(13)] = inst_89395);

(statearr_89456[(12)] = inst_89393__$1);

return statearr_89456;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_89441__$1,(22),inst_89396);
} else {
if((state_val_89442 === (31))){
var inst_89423 = (state_89441[(2)]);
var state_89441__$1 = state_89441;
if(cljs.core.truth_(inst_89423)){
var statearr_89457_89537 = state_89441__$1;
(statearr_89457_89537[(1)] = (32));

} else {
var statearr_89458_89538 = state_89441__$1;
(statearr_89458_89538[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (32))){
var inst_89400 = (state_89441[(14)]);
var state_89441__$1 = state_89441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89441__$1,(35),out,inst_89400);
} else {
if((state_val_89442 === (33))){
var inst_89393 = (state_89441[(12)]);
var inst_89371 = inst_89393;
var state_89441__$1 = (function (){var statearr_89459 = state_89441;
(statearr_89459[(7)] = inst_89371);

return statearr_89459;
})();
var statearr_89460_89539 = state_89441__$1;
(statearr_89460_89539[(2)] = null);

(statearr_89460_89539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (13))){
var inst_89371 = (state_89441[(7)]);
var inst_89378 = inst_89371.cljs$lang$protocol_mask$partition0$;
var inst_89379 = (inst_89378 & (64));
var inst_89380 = inst_89371.cljs$core$ISeq$;
var inst_89381 = (inst_89379) || (inst_89380);
var state_89441__$1 = state_89441;
if(cljs.core.truth_(inst_89381)){
var statearr_89461_89540 = state_89441__$1;
(statearr_89461_89540[(1)] = (16));

} else {
var statearr_89462_89541 = state_89441__$1;
(statearr_89462_89541[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (22))){
var inst_89400 = (state_89441[(14)]);
var inst_89401 = (state_89441[(10)]);
var inst_89399 = (state_89441[(2)]);
var inst_89400__$1 = cljs.core.nth.call(null,inst_89399,(0),null);
var inst_89401__$1 = cljs.core.nth.call(null,inst_89399,(1),null);
var inst_89402 = (inst_89400__$1 == null);
var inst_89403 = cljs.core._EQ_.call(null,inst_89401__$1,change);
var inst_89404 = (inst_89402) || (inst_89403);
var state_89441__$1 = (function (){var statearr_89463 = state_89441;
(statearr_89463[(14)] = inst_89400__$1);

(statearr_89463[(10)] = inst_89401__$1);

return statearr_89463;
})();
if(cljs.core.truth_(inst_89404)){
var statearr_89464_89542 = state_89441__$1;
(statearr_89464_89542[(1)] = (23));

} else {
var statearr_89465_89543 = state_89441__$1;
(statearr_89465_89543[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (36))){
var inst_89393 = (state_89441[(12)]);
var inst_89371 = inst_89393;
var state_89441__$1 = (function (){var statearr_89466 = state_89441;
(statearr_89466[(7)] = inst_89371);

return statearr_89466;
})();
var statearr_89467_89544 = state_89441__$1;
(statearr_89467_89544[(2)] = null);

(statearr_89467_89544[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (29))){
var inst_89415 = (state_89441[(11)]);
var state_89441__$1 = state_89441;
var statearr_89468_89545 = state_89441__$1;
(statearr_89468_89545[(2)] = inst_89415);

(statearr_89468_89545[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (6))){
var state_89441__$1 = state_89441;
var statearr_89471_89546 = state_89441__$1;
(statearr_89471_89546[(2)] = false);

(statearr_89471_89546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (28))){
var inst_89411 = (state_89441[(2)]);
var inst_89412 = calc_state.call(null);
var inst_89371 = inst_89412;
var state_89441__$1 = (function (){var statearr_89472 = state_89441;
(statearr_89472[(15)] = inst_89411);

(statearr_89472[(7)] = inst_89371);

return statearr_89472;
})();
var statearr_89474_89547 = state_89441__$1;
(statearr_89474_89547[(2)] = null);

(statearr_89474_89547[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (25))){
var inst_89437 = (state_89441[(2)]);
var state_89441__$1 = state_89441;
var statearr_89475_89548 = state_89441__$1;
(statearr_89475_89548[(2)] = inst_89437);

(statearr_89475_89548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (34))){
var inst_89435 = (state_89441[(2)]);
var state_89441__$1 = state_89441;
var statearr_89476_89549 = state_89441__$1;
(statearr_89476_89549[(2)] = inst_89435);

(statearr_89476_89549[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (17))){
var state_89441__$1 = state_89441;
var statearr_89477_89550 = state_89441__$1;
(statearr_89477_89550[(2)] = false);

(statearr_89477_89550[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (3))){
var state_89441__$1 = state_89441;
var statearr_89478_89551 = state_89441__$1;
(statearr_89478_89551[(2)] = false);

(statearr_89478_89551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (12))){
var inst_89439 = (state_89441[(2)]);
var state_89441__$1 = state_89441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89441__$1,inst_89439);
} else {
if((state_val_89442 === (2))){
var inst_89347 = (state_89441[(8)]);
var inst_89352 = inst_89347.cljs$lang$protocol_mask$partition0$;
var inst_89353 = (inst_89352 & (64));
var inst_89354 = inst_89347.cljs$core$ISeq$;
var inst_89355 = (inst_89353) || (inst_89354);
var state_89441__$1 = state_89441;
if(cljs.core.truth_(inst_89355)){
var statearr_89479_89552 = state_89441__$1;
(statearr_89479_89552[(1)] = (5));

} else {
var statearr_89480_89553 = state_89441__$1;
(statearr_89480_89553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (23))){
var inst_89400 = (state_89441[(14)]);
var inst_89406 = (inst_89400 == null);
var state_89441__$1 = state_89441;
if(cljs.core.truth_(inst_89406)){
var statearr_89487_89554 = state_89441__$1;
(statearr_89487_89554[(1)] = (26));

} else {
var statearr_89488_89555 = state_89441__$1;
(statearr_89488_89555[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (35))){
var inst_89426 = (state_89441[(2)]);
var state_89441__$1 = state_89441;
if(cljs.core.truth_(inst_89426)){
var statearr_89489_89556 = state_89441__$1;
(statearr_89489_89556[(1)] = (36));

} else {
var statearr_89490_89557 = state_89441__$1;
(statearr_89490_89557[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (19))){
var inst_89371 = (state_89441[(7)]);
var inst_89390 = cljs.core.apply.call(null,cljs.core.hash_map,inst_89371);
var state_89441__$1 = state_89441;
var statearr_89491_89558 = state_89441__$1;
(statearr_89491_89558[(2)] = inst_89390);

(statearr_89491_89558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (11))){
var inst_89371 = (state_89441[(7)]);
var inst_89375 = (inst_89371 == null);
var inst_89376 = cljs.core.not.call(null,inst_89375);
var state_89441__$1 = state_89441;
if(inst_89376){
var statearr_89492_89559 = state_89441__$1;
(statearr_89492_89559[(1)] = (13));

} else {
var statearr_89493_89560 = state_89441__$1;
(statearr_89493_89560[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (9))){
var inst_89347 = (state_89441[(8)]);
var state_89441__$1 = state_89441;
var statearr_89494_89561 = state_89441__$1;
(statearr_89494_89561[(2)] = inst_89347);

(statearr_89494_89561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (5))){
var state_89441__$1 = state_89441;
var statearr_89495_89562 = state_89441__$1;
(statearr_89495_89562[(2)] = true);

(statearr_89495_89562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (14))){
var state_89441__$1 = state_89441;
var statearr_89496_89563 = state_89441__$1;
(statearr_89496_89563[(2)] = false);

(statearr_89496_89563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (26))){
var inst_89401 = (state_89441[(10)]);
var inst_89408 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_89401);
var state_89441__$1 = state_89441;
var statearr_89497_89564 = state_89441__$1;
(statearr_89497_89564[(2)] = inst_89408);

(statearr_89497_89564[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (16))){
var state_89441__$1 = state_89441;
var statearr_89498_89565 = state_89441__$1;
(statearr_89498_89565[(2)] = true);

(statearr_89498_89565[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (38))){
var inst_89431 = (state_89441[(2)]);
var state_89441__$1 = state_89441;
var statearr_89499_89566 = state_89441__$1;
(statearr_89499_89566[(2)] = inst_89431);

(statearr_89499_89566[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (30))){
var inst_89394 = (state_89441[(9)]);
var inst_89395 = (state_89441[(13)]);
var inst_89401 = (state_89441[(10)]);
var inst_89418 = cljs.core.empty_QMARK_.call(null,inst_89394);
var inst_89419 = inst_89395.call(null,inst_89401);
var inst_89420 = cljs.core.not.call(null,inst_89419);
var inst_89421 = (inst_89418) && (inst_89420);
var state_89441__$1 = state_89441;
var statearr_89500_89569 = state_89441__$1;
(statearr_89500_89569[(2)] = inst_89421);

(statearr_89500_89569[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (10))){
var inst_89347 = (state_89441[(8)]);
var inst_89367 = (state_89441[(2)]);
var inst_89368 = cljs.core.get.call(null,inst_89367,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_89369 = cljs.core.get.call(null,inst_89367,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_89370 = cljs.core.get.call(null,inst_89367,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_89371 = inst_89347;
var state_89441__$1 = (function (){var statearr_89501 = state_89441;
(statearr_89501[(16)] = inst_89370);

(statearr_89501[(7)] = inst_89371);

(statearr_89501[(17)] = inst_89369);

(statearr_89501[(18)] = inst_89368);

return statearr_89501;
})();
var statearr_89502_89573 = state_89441__$1;
(statearr_89502_89573[(2)] = null);

(statearr_89502_89573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (18))){
var inst_89385 = (state_89441[(2)]);
var state_89441__$1 = state_89441;
var statearr_89503_89574 = state_89441__$1;
(statearr_89503_89574[(2)] = inst_89385);

(statearr_89503_89574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (37))){
var state_89441__$1 = state_89441;
var statearr_89504_89577 = state_89441__$1;
(statearr_89504_89577[(2)] = null);

(statearr_89504_89577[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89442 === (8))){
var inst_89347 = (state_89441[(8)]);
var inst_89364 = cljs.core.apply.call(null,cljs.core.hash_map,inst_89347);
var state_89441__$1 = state_89441;
var statearr_89505_89578 = state_89441__$1;
(statearr_89505_89578[(2)] = inst_89364);

(statearr_89505_89578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32975__auto___89523,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32863__auto__,c__32975__auto___89523,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32864__auto__ = null;
var cljs$core$async$mix_$_state_machine__32864__auto____0 = (function (){
var statearr_89509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89509[(0)] = cljs$core$async$mix_$_state_machine__32864__auto__);

(statearr_89509[(1)] = (1));

return statearr_89509;
});
var cljs$core$async$mix_$_state_machine__32864__auto____1 = (function (state_89441){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_89441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e89510){if((e89510 instanceof Object)){
var ex__32867__auto__ = e89510;
var statearr_89511_89582 = state_89441;
(statearr_89511_89582[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89583 = state_89441;
state_89441 = G__89583;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32864__auto__ = function(state_89441){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32864__auto____1.call(this,state_89441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32864__auto____0;
cljs$core$async$mix_$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32864__auto____1;
return cljs$core$async$mix_$_state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto___89523,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32977__auto__ = (function (){var statearr_89516 = f__32976__auto__.call(null);
(statearr_89516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto___89523);

return statearr_89516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto___89523,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26490__auto__ = (((p == null))?null:p);
var m__26491__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26491__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26490__auto__ = (((p == null))?null:p);
var m__26491__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,p,v,ch);
} else {
var m__26491__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args89594 = [];
var len__26896__auto___89617 = arguments.length;
var i__26897__auto___89619 = (0);
while(true){
if((i__26897__auto___89619 < len__26896__auto___89617)){
args89594.push((arguments[i__26897__auto___89619]));

var G__89620 = (i__26897__auto___89619 + (1));
i__26897__auto___89619 = G__89620;
continue;
} else {
}
break;
}

var G__89600 = args89594.length;
switch (G__89600) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args89594.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26490__auto__ = (((p == null))?null:p);
var m__26491__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,p);
} else {
var m__26491__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26490__auto__ = (((p == null))?null:p);
var m__26491__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26490__auto__)]);
if(!((m__26491__auto__ == null))){
return m__26491__auto__.call(null,p,v);
} else {
var m__26491__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26491__auto____$1 == null))){
return m__26491__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args89634 = [];
var len__26896__auto___89823 = arguments.length;
var i__26897__auto___89824 = (0);
while(true){
if((i__26897__auto___89824 < len__26896__auto___89823)){
args89634.push((arguments[i__26897__auto___89824]));

var G__89829 = (i__26897__auto___89824 + (1));
i__26897__auto___89824 = G__89829;
continue;
} else {
}
break;
}

var G__89636 = args89634.length;
switch (G__89636) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args89634.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25827__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25827__auto__)){
return or__25827__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25827__auto__,mults){
return (function (p1__89633_SHARP_){
if(cljs.core.truth_(p1__89633_SHARP_.call(null,topic))){
return p1__89633_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__89633_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25827__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async89642 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async89642 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta89643){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta89643 = meta89643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async89642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_89644,meta89643__$1){
var self__ = this;
var _89644__$1 = this;
return (new cljs.core.async.t_cljs$core$async89642(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta89643__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_89644){
var self__ = this;
var _89644__$1 = this;
return self__.meta89643;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89642.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async89642.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89642.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async89642.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89642.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89642.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89642.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89642.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta89643","meta89643",-1663491813,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async89642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async89642";

cljs.core.async.t_cljs$core$async89642.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"cljs.core.async/t_cljs$core$async89642");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async89642 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async89642(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta89643){
return (new cljs.core.async.t_cljs$core$async89642(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta89643));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async89642(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32975__auto___89858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto___89858,mults,ensure_mult,p){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto___89858,mults,ensure_mult,p){
return (function (state_89751){
var state_val_89752 = (state_89751[(1)]);
if((state_val_89752 === (7))){
var inst_89747 = (state_89751[(2)]);
var state_89751__$1 = state_89751;
var statearr_89760_89860 = state_89751__$1;
(statearr_89760_89860[(2)] = inst_89747);

(statearr_89760_89860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (20))){
var state_89751__$1 = state_89751;
var statearr_89761_89861 = state_89751__$1;
(statearr_89761_89861[(2)] = null);

(statearr_89761_89861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (1))){
var state_89751__$1 = state_89751;
var statearr_89762_89862 = state_89751__$1;
(statearr_89762_89862[(2)] = null);

(statearr_89762_89862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (24))){
var inst_89721 = (state_89751[(7)]);
var inst_89738 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_89721);
var state_89751__$1 = state_89751;
var statearr_89764_89863 = state_89751__$1;
(statearr_89764_89863[(2)] = inst_89738);

(statearr_89764_89863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (4))){
var inst_89657 = (state_89751[(8)]);
var inst_89657__$1 = (state_89751[(2)]);
var inst_89658 = (inst_89657__$1 == null);
var state_89751__$1 = (function (){var statearr_89766 = state_89751;
(statearr_89766[(8)] = inst_89657__$1);

return statearr_89766;
})();
if(cljs.core.truth_(inst_89658)){
var statearr_89767_89866 = state_89751__$1;
(statearr_89767_89866[(1)] = (5));

} else {
var statearr_89768_89867 = state_89751__$1;
(statearr_89768_89867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (15))){
var inst_89715 = (state_89751[(2)]);
var state_89751__$1 = state_89751;
var statearr_89769_89869 = state_89751__$1;
(statearr_89769_89869[(2)] = inst_89715);

(statearr_89769_89869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (21))){
var inst_89744 = (state_89751[(2)]);
var state_89751__$1 = (function (){var statearr_89771 = state_89751;
(statearr_89771[(9)] = inst_89744);

return statearr_89771;
})();
var statearr_89772_89870 = state_89751__$1;
(statearr_89772_89870[(2)] = null);

(statearr_89772_89870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (13))){
var inst_89683 = (state_89751[(10)]);
var inst_89685 = cljs.core.chunked_seq_QMARK_.call(null,inst_89683);
var state_89751__$1 = state_89751;
if(inst_89685){
var statearr_89774_89871 = state_89751__$1;
(statearr_89774_89871[(1)] = (16));

} else {
var statearr_89775_89872 = state_89751__$1;
(statearr_89775_89872[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (22))){
var inst_89734 = (state_89751[(2)]);
var state_89751__$1 = state_89751;
if(cljs.core.truth_(inst_89734)){
var statearr_89776_89873 = state_89751__$1;
(statearr_89776_89873[(1)] = (23));

} else {
var statearr_89777_89874 = state_89751__$1;
(statearr_89777_89874[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (6))){
var inst_89657 = (state_89751[(8)]);
var inst_89721 = (state_89751[(7)]);
var inst_89723 = (state_89751[(11)]);
var inst_89721__$1 = topic_fn.call(null,inst_89657);
var inst_89722 = cljs.core.deref.call(null,mults);
var inst_89723__$1 = cljs.core.get.call(null,inst_89722,inst_89721__$1);
var state_89751__$1 = (function (){var statearr_89779 = state_89751;
(statearr_89779[(7)] = inst_89721__$1);

(statearr_89779[(11)] = inst_89723__$1);

return statearr_89779;
})();
if(cljs.core.truth_(inst_89723__$1)){
var statearr_89780_89876 = state_89751__$1;
(statearr_89780_89876[(1)] = (19));

} else {
var statearr_89781_89877 = state_89751__$1;
(statearr_89781_89877[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (25))){
var inst_89741 = (state_89751[(2)]);
var state_89751__$1 = state_89751;
var statearr_89782_89878 = state_89751__$1;
(statearr_89782_89878[(2)] = inst_89741);

(statearr_89782_89878[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (17))){
var inst_89683 = (state_89751[(10)]);
var inst_89692 = cljs.core.first.call(null,inst_89683);
var inst_89694 = cljs.core.async.muxch_STAR_.call(null,inst_89692);
var inst_89695 = cljs.core.async.close_BANG_.call(null,inst_89694);
var inst_89696 = cljs.core.next.call(null,inst_89683);
var inst_89668 = inst_89696;
var inst_89669 = null;
var inst_89670 = (0);
var inst_89671 = (0);
var state_89751__$1 = (function (){var statearr_89784 = state_89751;
(statearr_89784[(12)] = inst_89670);

(statearr_89784[(13)] = inst_89671);

(statearr_89784[(14)] = inst_89668);

(statearr_89784[(15)] = inst_89669);

(statearr_89784[(16)] = inst_89695);

return statearr_89784;
})();
var statearr_89786_89879 = state_89751__$1;
(statearr_89786_89879[(2)] = null);

(statearr_89786_89879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (3))){
var inst_89749 = (state_89751[(2)]);
var state_89751__$1 = state_89751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89751__$1,inst_89749);
} else {
if((state_val_89752 === (12))){
var inst_89717 = (state_89751[(2)]);
var state_89751__$1 = state_89751;
var statearr_89787_89880 = state_89751__$1;
(statearr_89787_89880[(2)] = inst_89717);

(statearr_89787_89880[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (2))){
var state_89751__$1 = state_89751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89751__$1,(4),ch);
} else {
if((state_val_89752 === (23))){
var state_89751__$1 = state_89751;
var statearr_89789_89881 = state_89751__$1;
(statearr_89789_89881[(2)] = null);

(statearr_89789_89881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (19))){
var inst_89657 = (state_89751[(8)]);
var inst_89723 = (state_89751[(11)]);
var inst_89732 = cljs.core.async.muxch_STAR_.call(null,inst_89723);
var state_89751__$1 = state_89751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89751__$1,(22),inst_89732,inst_89657);
} else {
if((state_val_89752 === (11))){
var inst_89683 = (state_89751[(10)]);
var inst_89668 = (state_89751[(14)]);
var inst_89683__$1 = cljs.core.seq.call(null,inst_89668);
var state_89751__$1 = (function (){var statearr_89791 = state_89751;
(statearr_89791[(10)] = inst_89683__$1);

return statearr_89791;
})();
if(inst_89683__$1){
var statearr_89792_89883 = state_89751__$1;
(statearr_89792_89883[(1)] = (13));

} else {
var statearr_89799_89884 = state_89751__$1;
(statearr_89799_89884[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (9))){
var inst_89719 = (state_89751[(2)]);
var state_89751__$1 = state_89751;
var statearr_89800_89885 = state_89751__$1;
(statearr_89800_89885[(2)] = inst_89719);

(statearr_89800_89885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (5))){
var inst_89665 = cljs.core.deref.call(null,mults);
var inst_89666 = cljs.core.vals.call(null,inst_89665);
var inst_89667 = cljs.core.seq.call(null,inst_89666);
var inst_89668 = inst_89667;
var inst_89669 = null;
var inst_89670 = (0);
var inst_89671 = (0);
var state_89751__$1 = (function (){var statearr_89802 = state_89751;
(statearr_89802[(12)] = inst_89670);

(statearr_89802[(13)] = inst_89671);

(statearr_89802[(14)] = inst_89668);

(statearr_89802[(15)] = inst_89669);

return statearr_89802;
})();
var statearr_89803_89887 = state_89751__$1;
(statearr_89803_89887[(2)] = null);

(statearr_89803_89887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (14))){
var state_89751__$1 = state_89751;
var statearr_89807_89888 = state_89751__$1;
(statearr_89807_89888[(2)] = null);

(statearr_89807_89888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (16))){
var inst_89683 = (state_89751[(10)]);
var inst_89687 = cljs.core.chunk_first.call(null,inst_89683);
var inst_89688 = cljs.core.chunk_rest.call(null,inst_89683);
var inst_89689 = cljs.core.count.call(null,inst_89687);
var inst_89668 = inst_89688;
var inst_89669 = inst_89687;
var inst_89670 = inst_89689;
var inst_89671 = (0);
var state_89751__$1 = (function (){var statearr_89808 = state_89751;
(statearr_89808[(12)] = inst_89670);

(statearr_89808[(13)] = inst_89671);

(statearr_89808[(14)] = inst_89668);

(statearr_89808[(15)] = inst_89669);

return statearr_89808;
})();
var statearr_89809_89889 = state_89751__$1;
(statearr_89809_89889[(2)] = null);

(statearr_89809_89889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (10))){
var inst_89670 = (state_89751[(12)]);
var inst_89671 = (state_89751[(13)]);
var inst_89668 = (state_89751[(14)]);
var inst_89669 = (state_89751[(15)]);
var inst_89676 = cljs.core._nth.call(null,inst_89669,inst_89671);
var inst_89678 = cljs.core.async.muxch_STAR_.call(null,inst_89676);
var inst_89679 = cljs.core.async.close_BANG_.call(null,inst_89678);
var inst_89680 = (inst_89671 + (1));
var tmp89804 = inst_89670;
var tmp89805 = inst_89668;
var tmp89806 = inst_89669;
var inst_89668__$1 = tmp89805;
var inst_89669__$1 = tmp89806;
var inst_89670__$1 = tmp89804;
var inst_89671__$1 = inst_89680;
var state_89751__$1 = (function (){var statearr_89810 = state_89751;
(statearr_89810[(12)] = inst_89670__$1);

(statearr_89810[(17)] = inst_89679);

(statearr_89810[(13)] = inst_89671__$1);

(statearr_89810[(14)] = inst_89668__$1);

(statearr_89810[(15)] = inst_89669__$1);

return statearr_89810;
})();
var statearr_89811_89892 = state_89751__$1;
(statearr_89811_89892[(2)] = null);

(statearr_89811_89892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (18))){
var inst_89699 = (state_89751[(2)]);
var state_89751__$1 = state_89751;
var statearr_89812_89893 = state_89751__$1;
(statearr_89812_89893[(2)] = inst_89699);

(statearr_89812_89893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89752 === (8))){
var inst_89670 = (state_89751[(12)]);
var inst_89671 = (state_89751[(13)]);
var inst_89673 = (inst_89671 < inst_89670);
var inst_89674 = inst_89673;
var state_89751__$1 = state_89751;
if(cljs.core.truth_(inst_89674)){
var statearr_89814_89895 = state_89751__$1;
(statearr_89814_89895[(1)] = (10));

} else {
var statearr_89815_89896 = state_89751__$1;
(statearr_89815_89896[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32975__auto___89858,mults,ensure_mult,p))
;
return ((function (switch__32863__auto__,c__32975__auto___89858,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32864__auto__ = null;
var cljs$core$async$state_machine__32864__auto____0 = (function (){
var statearr_89819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89819[(0)] = cljs$core$async$state_machine__32864__auto__);

(statearr_89819[(1)] = (1));

return statearr_89819;
});
var cljs$core$async$state_machine__32864__auto____1 = (function (state_89751){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_89751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e89820){if((e89820 instanceof Object)){
var ex__32867__auto__ = e89820;
var statearr_89821_89900 = state_89751;
(statearr_89821_89900[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89901 = state_89751;
state_89751 = G__89901;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$state_machine__32864__auto__ = function(state_89751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32864__auto____1.call(this,state_89751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32864__auto____0;
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32864__auto____1;
return cljs$core$async$state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto___89858,mults,ensure_mult,p))
})();
var state__32977__auto__ = (function (){var statearr_89822 = f__32976__auto__.call(null);
(statearr_89822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto___89858);

return statearr_89822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto___89858,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args89903 = [];
var len__26896__auto___89909 = arguments.length;
var i__26897__auto___89910 = (0);
while(true){
if((i__26897__auto___89910 < len__26896__auto___89909)){
args89903.push((arguments[i__26897__auto___89910]));

var G__89911 = (i__26897__auto___89910 + (1));
i__26897__auto___89910 = G__89911;
continue;
} else {
}
break;
}

var G__89907 = args89903.length;
switch (G__89907) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args89903.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args89917 = [];
var len__26896__auto___89921 = arguments.length;
var i__26897__auto___89922 = (0);
while(true){
if((i__26897__auto___89922 < len__26896__auto___89921)){
args89917.push((arguments[i__26897__auto___89922]));

var G__89923 = (i__26897__auto___89922 + (1));
i__26897__auto___89922 = G__89923;
continue;
} else {
}
break;
}

var G__89920 = args89917.length;
switch (G__89920) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args89917.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args89928 = [];
var len__26896__auto___90006 = arguments.length;
var i__26897__auto___90007 = (0);
while(true){
if((i__26897__auto___90007 < len__26896__auto___90006)){
args89928.push((arguments[i__26897__auto___90007]));

var G__90008 = (i__26897__auto___90007 + (1));
i__26897__auto___90007 = G__90008;
continue;
} else {
}
break;
}

var G__89931 = args89928.length;
switch (G__89931) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args89928.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32975__auto___90010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto___90010,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto___90010,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_89976){
var state_val_89977 = (state_89976[(1)]);
if((state_val_89977 === (7))){
var state_89976__$1 = state_89976;
var statearr_89978_90017 = state_89976__$1;
(statearr_89978_90017[(2)] = null);

(statearr_89978_90017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89977 === (1))){
var state_89976__$1 = state_89976;
var statearr_89979_90018 = state_89976__$1;
(statearr_89979_90018[(2)] = null);

(statearr_89979_90018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89977 === (4))){
var inst_89937 = (state_89976[(7)]);
var inst_89939 = (inst_89937 < cnt);
var state_89976__$1 = state_89976;
if(cljs.core.truth_(inst_89939)){
var statearr_89980_90019 = state_89976__$1;
(statearr_89980_90019[(1)] = (6));

} else {
var statearr_89981_90020 = state_89976__$1;
(statearr_89981_90020[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89977 === (15))){
var inst_89972 = (state_89976[(2)]);
var state_89976__$1 = state_89976;
var statearr_89982_90021 = state_89976__$1;
(statearr_89982_90021[(2)] = inst_89972);

(statearr_89982_90021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89977 === (13))){
var inst_89965 = cljs.core.async.close_BANG_.call(null,out);
var state_89976__$1 = state_89976;
var statearr_89983_90023 = state_89976__$1;
(statearr_89983_90023[(2)] = inst_89965);

(statearr_89983_90023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89977 === (6))){
var state_89976__$1 = state_89976;
var statearr_89984_90025 = state_89976__$1;
(statearr_89984_90025[(2)] = null);

(statearr_89984_90025[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89977 === (3))){
var inst_89974 = (state_89976[(2)]);
var state_89976__$1 = state_89976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89976__$1,inst_89974);
} else {
if((state_val_89977 === (12))){
var inst_89962 = (state_89976[(8)]);
var inst_89962__$1 = (state_89976[(2)]);
var inst_89963 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_89962__$1);
var state_89976__$1 = (function (){var statearr_89985 = state_89976;
(statearr_89985[(8)] = inst_89962__$1);

return statearr_89985;
})();
if(cljs.core.truth_(inst_89963)){
var statearr_89986_90029 = state_89976__$1;
(statearr_89986_90029[(1)] = (13));

} else {
var statearr_89987_90031 = state_89976__$1;
(statearr_89987_90031[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89977 === (2))){
var inst_89936 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_89937 = (0);
var state_89976__$1 = (function (){var statearr_89988 = state_89976;
(statearr_89988[(9)] = inst_89936);

(statearr_89988[(7)] = inst_89937);

return statearr_89988;
})();
var statearr_89989_90033 = state_89976__$1;
(statearr_89989_90033[(2)] = null);

(statearr_89989_90033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89977 === (11))){
var inst_89937 = (state_89976[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_89976,(10),Object,null,(9));
var inst_89948 = chs__$1.call(null,inst_89937);
var inst_89949 = done.call(null,inst_89937);
var inst_89950 = cljs.core.async.take_BANG_.call(null,inst_89948,inst_89949);
var state_89976__$1 = state_89976;
var statearr_89990_90036 = state_89976__$1;
(statearr_89990_90036[(2)] = inst_89950);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89976__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89977 === (9))){
var inst_89937 = (state_89976[(7)]);
var inst_89952 = (state_89976[(2)]);
var inst_89953 = (inst_89937 + (1));
var inst_89937__$1 = inst_89953;
var state_89976__$1 = (function (){var statearr_89991 = state_89976;
(statearr_89991[(10)] = inst_89952);

(statearr_89991[(7)] = inst_89937__$1);

return statearr_89991;
})();
var statearr_89992_90041 = state_89976__$1;
(statearr_89992_90041[(2)] = null);

(statearr_89992_90041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89977 === (5))){
var inst_89959 = (state_89976[(2)]);
var state_89976__$1 = (function (){var statearr_89993 = state_89976;
(statearr_89993[(11)] = inst_89959);

return statearr_89993;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89976__$1,(12),dchan);
} else {
if((state_val_89977 === (14))){
var inst_89962 = (state_89976[(8)]);
var inst_89967 = cljs.core.apply.call(null,f,inst_89962);
var state_89976__$1 = state_89976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89976__$1,(16),out,inst_89967);
} else {
if((state_val_89977 === (16))){
var inst_89969 = (state_89976[(2)]);
var state_89976__$1 = (function (){var statearr_89994 = state_89976;
(statearr_89994[(12)] = inst_89969);

return statearr_89994;
})();
var statearr_89995_90046 = state_89976__$1;
(statearr_89995_90046[(2)] = null);

(statearr_89995_90046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89977 === (10))){
var inst_89941 = (state_89976[(2)]);
var inst_89942 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_89976__$1 = (function (){var statearr_89996 = state_89976;
(statearr_89996[(13)] = inst_89941);

return statearr_89996;
})();
var statearr_89997_90047 = state_89976__$1;
(statearr_89997_90047[(2)] = inst_89942);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89976__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89977 === (8))){
var inst_89957 = (state_89976[(2)]);
var state_89976__$1 = state_89976;
var statearr_89998_90048 = state_89976__$1;
(statearr_89998_90048[(2)] = inst_89957);

(statearr_89998_90048[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32975__auto___90010,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32863__auto__,c__32975__auto___90010,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32864__auto__ = null;
var cljs$core$async$state_machine__32864__auto____0 = (function (){
var statearr_90002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90002[(0)] = cljs$core$async$state_machine__32864__auto__);

(statearr_90002[(1)] = (1));

return statearr_90002;
});
var cljs$core$async$state_machine__32864__auto____1 = (function (state_89976){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_89976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e90003){if((e90003 instanceof Object)){
var ex__32867__auto__ = e90003;
var statearr_90004_90055 = state_89976;
(statearr_90004_90055[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90056 = state_89976;
state_89976 = G__90056;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$state_machine__32864__auto__ = function(state_89976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32864__auto____1.call(this,state_89976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32864__auto____0;
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32864__auto____1;
return cljs$core$async$state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto___90010,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32977__auto__ = (function (){var statearr_90005 = f__32976__auto__.call(null);
(statearr_90005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto___90010);

return statearr_90005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto___90010,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args90062 = [];
var len__26896__auto___90132 = arguments.length;
var i__26897__auto___90133 = (0);
while(true){
if((i__26897__auto___90133 < len__26896__auto___90132)){
args90062.push((arguments[i__26897__auto___90133]));

var G__90137 = (i__26897__auto___90133 + (1));
i__26897__auto___90133 = G__90137;
continue;
} else {
}
break;
}

var G__90064 = args90062.length;
switch (G__90064) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90062.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32975__auto___90143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto___90143,out){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto___90143,out){
return (function (state_90096){
var state_val_90097 = (state_90096[(1)]);
if((state_val_90097 === (7))){
var inst_90075 = (state_90096[(7)]);
var inst_90073 = (state_90096[(8)]);
var inst_90073__$1 = (state_90096[(2)]);
var inst_90075__$1 = cljs.core.nth.call(null,inst_90073__$1,(0),null);
var inst_90076 = cljs.core.nth.call(null,inst_90073__$1,(1),null);
var inst_90077 = (inst_90075__$1 == null);
var state_90096__$1 = (function (){var statearr_90099 = state_90096;
(statearr_90099[(9)] = inst_90076);

(statearr_90099[(7)] = inst_90075__$1);

(statearr_90099[(8)] = inst_90073__$1);

return statearr_90099;
})();
if(cljs.core.truth_(inst_90077)){
var statearr_90100_90152 = state_90096__$1;
(statearr_90100_90152[(1)] = (8));

} else {
var statearr_90102_90153 = state_90096__$1;
(statearr_90102_90153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90097 === (1))){
var inst_90065 = cljs.core.vec.call(null,chs);
var inst_90066 = inst_90065;
var state_90096__$1 = (function (){var statearr_90105 = state_90096;
(statearr_90105[(10)] = inst_90066);

return statearr_90105;
})();
var statearr_90107_90154 = state_90096__$1;
(statearr_90107_90154[(2)] = null);

(statearr_90107_90154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90097 === (4))){
var inst_90066 = (state_90096[(10)]);
var state_90096__$1 = state_90096;
return cljs.core.async.ioc_alts_BANG_.call(null,state_90096__$1,(7),inst_90066);
} else {
if((state_val_90097 === (6))){
var inst_90091 = (state_90096[(2)]);
var state_90096__$1 = state_90096;
var statearr_90108_90159 = state_90096__$1;
(statearr_90108_90159[(2)] = inst_90091);

(statearr_90108_90159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90097 === (3))){
var inst_90093 = (state_90096[(2)]);
var state_90096__$1 = state_90096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90096__$1,inst_90093);
} else {
if((state_val_90097 === (2))){
var inst_90066 = (state_90096[(10)]);
var inst_90068 = cljs.core.count.call(null,inst_90066);
var inst_90069 = (inst_90068 > (0));
var state_90096__$1 = state_90096;
if(cljs.core.truth_(inst_90069)){
var statearr_90111_90160 = state_90096__$1;
(statearr_90111_90160[(1)] = (4));

} else {
var statearr_90113_90161 = state_90096__$1;
(statearr_90113_90161[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90097 === (11))){
var inst_90066 = (state_90096[(10)]);
var inst_90084 = (state_90096[(2)]);
var tmp90109 = inst_90066;
var inst_90066__$1 = tmp90109;
var state_90096__$1 = (function (){var statearr_90114 = state_90096;
(statearr_90114[(11)] = inst_90084);

(statearr_90114[(10)] = inst_90066__$1);

return statearr_90114;
})();
var statearr_90116_90162 = state_90096__$1;
(statearr_90116_90162[(2)] = null);

(statearr_90116_90162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90097 === (9))){
var inst_90075 = (state_90096[(7)]);
var state_90096__$1 = state_90096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90096__$1,(11),out,inst_90075);
} else {
if((state_val_90097 === (5))){
var inst_90089 = cljs.core.async.close_BANG_.call(null,out);
var state_90096__$1 = state_90096;
var statearr_90118_90163 = state_90096__$1;
(statearr_90118_90163[(2)] = inst_90089);

(statearr_90118_90163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90097 === (10))){
var inst_90087 = (state_90096[(2)]);
var state_90096__$1 = state_90096;
var statearr_90119_90164 = state_90096__$1;
(statearr_90119_90164[(2)] = inst_90087);

(statearr_90119_90164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90097 === (8))){
var inst_90076 = (state_90096[(9)]);
var inst_90075 = (state_90096[(7)]);
var inst_90066 = (state_90096[(10)]);
var inst_90073 = (state_90096[(8)]);
var inst_90079 = (function (){var cs = inst_90066;
var vec__90071 = inst_90073;
var v = inst_90075;
var c = inst_90076;
return ((function (cs,vec__90071,v,c,inst_90076,inst_90075,inst_90066,inst_90073,state_val_90097,c__32975__auto___90143,out){
return (function (p1__90061_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__90061_SHARP_);
});
;})(cs,vec__90071,v,c,inst_90076,inst_90075,inst_90066,inst_90073,state_val_90097,c__32975__auto___90143,out))
})();
var inst_90080 = cljs.core.filterv.call(null,inst_90079,inst_90066);
var inst_90066__$1 = inst_90080;
var state_90096__$1 = (function (){var statearr_90120 = state_90096;
(statearr_90120[(10)] = inst_90066__$1);

return statearr_90120;
})();
var statearr_90121_90168 = state_90096__$1;
(statearr_90121_90168[(2)] = null);

(statearr_90121_90168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32975__auto___90143,out))
;
return ((function (switch__32863__auto__,c__32975__auto___90143,out){
return (function() {
var cljs$core$async$state_machine__32864__auto__ = null;
var cljs$core$async$state_machine__32864__auto____0 = (function (){
var statearr_90125 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90125[(0)] = cljs$core$async$state_machine__32864__auto__);

(statearr_90125[(1)] = (1));

return statearr_90125;
});
var cljs$core$async$state_machine__32864__auto____1 = (function (state_90096){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_90096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e90126){if((e90126 instanceof Object)){
var ex__32867__auto__ = e90126;
var statearr_90127_90173 = state_90096;
(statearr_90127_90173[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90174 = state_90096;
state_90096 = G__90174;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$state_machine__32864__auto__ = function(state_90096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32864__auto____1.call(this,state_90096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32864__auto____0;
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32864__auto____1;
return cljs$core$async$state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto___90143,out))
})();
var state__32977__auto__ = (function (){var statearr_90131 = f__32976__auto__.call(null);
(statearr_90131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto___90143);

return statearr_90131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto___90143,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args90179 = [];
var len__26896__auto___90234 = arguments.length;
var i__26897__auto___90235 = (0);
while(true){
if((i__26897__auto___90235 < len__26896__auto___90234)){
args90179.push((arguments[i__26897__auto___90235]));

var G__90236 = (i__26897__auto___90235 + (1));
i__26897__auto___90235 = G__90236;
continue;
} else {
}
break;
}

var G__90181 = args90179.length;
switch (G__90181) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90179.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32975__auto___90242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto___90242,out){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto___90242,out){
return (function (state_90208){
var state_val_90209 = (state_90208[(1)]);
if((state_val_90209 === (7))){
var inst_90190 = (state_90208[(7)]);
var inst_90190__$1 = (state_90208[(2)]);
var inst_90191 = (inst_90190__$1 == null);
var inst_90192 = cljs.core.not.call(null,inst_90191);
var state_90208__$1 = (function (){var statearr_90210 = state_90208;
(statearr_90210[(7)] = inst_90190__$1);

return statearr_90210;
})();
if(inst_90192){
var statearr_90211_90243 = state_90208__$1;
(statearr_90211_90243[(1)] = (8));

} else {
var statearr_90212_90244 = state_90208__$1;
(statearr_90212_90244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90209 === (1))){
var inst_90184 = (0);
var state_90208__$1 = (function (){var statearr_90213 = state_90208;
(statearr_90213[(8)] = inst_90184);

return statearr_90213;
})();
var statearr_90214_90246 = state_90208__$1;
(statearr_90214_90246[(2)] = null);

(statearr_90214_90246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90209 === (4))){
var state_90208__$1 = state_90208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90208__$1,(7),ch);
} else {
if((state_val_90209 === (6))){
var inst_90203 = (state_90208[(2)]);
var state_90208__$1 = state_90208;
var statearr_90215_90248 = state_90208__$1;
(statearr_90215_90248[(2)] = inst_90203);

(statearr_90215_90248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90209 === (3))){
var inst_90205 = (state_90208[(2)]);
var inst_90206 = cljs.core.async.close_BANG_.call(null,out);
var state_90208__$1 = (function (){var statearr_90216 = state_90208;
(statearr_90216[(9)] = inst_90205);

return statearr_90216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90208__$1,inst_90206);
} else {
if((state_val_90209 === (2))){
var inst_90184 = (state_90208[(8)]);
var inst_90187 = (inst_90184 < n);
var state_90208__$1 = state_90208;
if(cljs.core.truth_(inst_90187)){
var statearr_90217_90250 = state_90208__$1;
(statearr_90217_90250[(1)] = (4));

} else {
var statearr_90218_90252 = state_90208__$1;
(statearr_90218_90252[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90209 === (11))){
var inst_90184 = (state_90208[(8)]);
var inst_90195 = (state_90208[(2)]);
var inst_90196 = (inst_90184 + (1));
var inst_90184__$1 = inst_90196;
var state_90208__$1 = (function (){var statearr_90219 = state_90208;
(statearr_90219[(10)] = inst_90195);

(statearr_90219[(8)] = inst_90184__$1);

return statearr_90219;
})();
var statearr_90220_90256 = state_90208__$1;
(statearr_90220_90256[(2)] = null);

(statearr_90220_90256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90209 === (9))){
var state_90208__$1 = state_90208;
var statearr_90221_90257 = state_90208__$1;
(statearr_90221_90257[(2)] = null);

(statearr_90221_90257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90209 === (5))){
var state_90208__$1 = state_90208;
var statearr_90222_90258 = state_90208__$1;
(statearr_90222_90258[(2)] = null);

(statearr_90222_90258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90209 === (10))){
var inst_90200 = (state_90208[(2)]);
var state_90208__$1 = state_90208;
var statearr_90223_90259 = state_90208__$1;
(statearr_90223_90259[(2)] = inst_90200);

(statearr_90223_90259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90209 === (8))){
var inst_90190 = (state_90208[(7)]);
var state_90208__$1 = state_90208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90208__$1,(11),out,inst_90190);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32975__auto___90242,out))
;
return ((function (switch__32863__auto__,c__32975__auto___90242,out){
return (function() {
var cljs$core$async$state_machine__32864__auto__ = null;
var cljs$core$async$state_machine__32864__auto____0 = (function (){
var statearr_90228 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_90228[(0)] = cljs$core$async$state_machine__32864__auto__);

(statearr_90228[(1)] = (1));

return statearr_90228;
});
var cljs$core$async$state_machine__32864__auto____1 = (function (state_90208){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_90208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e90230){if((e90230 instanceof Object)){
var ex__32867__auto__ = e90230;
var statearr_90231_90263 = state_90208;
(statearr_90231_90263[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90268 = state_90208;
state_90208 = G__90268;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$state_machine__32864__auto__ = function(state_90208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32864__auto____1.call(this,state_90208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32864__auto____0;
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32864__auto____1;
return cljs$core$async$state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto___90242,out))
})();
var state__32977__auto__ = (function (){var statearr_90232 = f__32976__auto__.call(null);
(statearr_90232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto___90242);

return statearr_90232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto___90242,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async90282 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async90282 = (function (map_LT_,f,ch,meta90283){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta90283 = meta90283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async90282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_90284,meta90283__$1){
var self__ = this;
var _90284__$1 = this;
return (new cljs.core.async.t_cljs$core$async90282(self__.map_LT_,self__.f,self__.ch,meta90283__$1));
});

cljs.core.async.t_cljs$core$async90282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_90284){
var self__ = this;
var _90284__$1 = this;
return self__.meta90283;
});

cljs.core.async.t_cljs$core$async90282.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async90282.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async90282.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async90282.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async90282.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async90285 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async90285 = (function (map_LT_,f,ch,meta90283,_,fn1,meta90286){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta90283 = meta90283;
this._ = _;
this.fn1 = fn1;
this.meta90286 = meta90286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async90285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_90287,meta90286__$1){
var self__ = this;
var _90287__$1 = this;
return (new cljs.core.async.t_cljs$core$async90285(self__.map_LT_,self__.f,self__.ch,self__.meta90283,self__._,self__.fn1,meta90286__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async90285.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_90287){
var self__ = this;
var _90287__$1 = this;
return self__.meta90286;
});})(___$1))
;

cljs.core.async.t_cljs$core$async90285.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async90285.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async90285.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__90271_SHARP_){
return f1.call(null,(((p1__90271_SHARP_ == null))?null:self__.f.call(null,p1__90271_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async90285.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta90283","meta90283",-2022214856,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async90282","cljs.core.async/t_cljs$core$async90282",-643465570,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta90286","meta90286",-1063354370,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async90285.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async90285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async90285";

cljs.core.async.t_cljs$core$async90285.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"cljs.core.async/t_cljs$core$async90285");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async90285 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async90285(map_LT___$1,f__$1,ch__$1,meta90283__$1,___$2,fn1__$1,meta90286){
return (new cljs.core.async.t_cljs$core$async90285(map_LT___$1,f__$1,ch__$1,meta90283__$1,___$2,fn1__$1,meta90286));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async90285(self__.map_LT_,self__.f,self__.ch,self__.meta90283,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25815__auto__ = ret;
if(cljs.core.truth_(and__25815__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25815__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async90282.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async90282.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async90282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta90283","meta90283",-2022214856,null)], null);
});

cljs.core.async.t_cljs$core$async90282.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async90282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async90282";

cljs.core.async.t_cljs$core$async90282.cljs$lang$ctorPrWriter = (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"cljs.core.async/t_cljs$core$async90282");
});

cljs.core.async.__GT_t_cljs$core$async90282 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async90282(map_LT___$1,f__$1,ch__$1,meta90283){
return (new cljs.core.async.t_cljs$core$async90282(map_LT___$1,f__$1,ch__$1,meta90283));
});

}

return (new cljs.core.async.t_cljs$core$async90282(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async90308 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async90308 = (function (map_GT_,f,ch,meta90309){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta90309 = meta90309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async90308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_90310,meta90309__$1){
var self__ = this;
var _90310__$1 = this;
return (new cljs.core.async.t_cljs$core$async90308(self__.map_GT_,self__.f,self__.ch,meta90309__$1));
});

cljs.core.async.t_cljs$core$async90308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_90310){
var self__ = this;
var _90310__$1 = this;
return self__.meta90309;
});

cljs.core.async.t_cljs$core$async90308.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async90308.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async90308.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async90308.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async90308.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async90308.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async90308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta90309","meta90309",283737501,null)], null);
});

cljs.core.async.t_cljs$core$async90308.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async90308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async90308";

cljs.core.async.t_cljs$core$async90308.cljs$lang$ctorPrWriter = (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"cljs.core.async/t_cljs$core$async90308");
});

cljs.core.async.__GT_t_cljs$core$async90308 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async90308(map_GT___$1,f__$1,ch__$1,meta90309){
return (new cljs.core.async.t_cljs$core$async90308(map_GT___$1,f__$1,ch__$1,meta90309));
});

}

return (new cljs.core.async.t_cljs$core$async90308(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async90329 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async90329 = (function (filter_GT_,p,ch,meta90330){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta90330 = meta90330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async90329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_90331,meta90330__$1){
var self__ = this;
var _90331__$1 = this;
return (new cljs.core.async.t_cljs$core$async90329(self__.filter_GT_,self__.p,self__.ch,meta90330__$1));
});

cljs.core.async.t_cljs$core$async90329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_90331){
var self__ = this;
var _90331__$1 = this;
return self__.meta90330;
});

cljs.core.async.t_cljs$core$async90329.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async90329.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async90329.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async90329.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async90329.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async90329.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async90329.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async90329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta90330","meta90330",-520348121,null)], null);
});

cljs.core.async.t_cljs$core$async90329.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async90329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async90329";

cljs.core.async.t_cljs$core$async90329.cljs$lang$ctorPrWriter = (function (this__26433__auto__,writer__26434__auto__,opt__26435__auto__){
return cljs.core._write.call(null,writer__26434__auto__,"cljs.core.async/t_cljs$core$async90329");
});

cljs.core.async.__GT_t_cljs$core$async90329 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async90329(filter_GT___$1,p__$1,ch__$1,meta90330){
return (new cljs.core.async.t_cljs$core$async90329(filter_GT___$1,p__$1,ch__$1,meta90330));
});

}

return (new cljs.core.async.t_cljs$core$async90329(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args90332 = [];
var len__26896__auto___90384 = arguments.length;
var i__26897__auto___90385 = (0);
while(true){
if((i__26897__auto___90385 < len__26896__auto___90384)){
args90332.push((arguments[i__26897__auto___90385]));

var G__90391 = (i__26897__auto___90385 + (1));
i__26897__auto___90385 = G__90391;
continue;
} else {
}
break;
}

var G__90334 = args90332.length;
switch (G__90334) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90332.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32975__auto___90395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto___90395,out){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto___90395,out){
return (function (state_90355){
var state_val_90356 = (state_90355[(1)]);
if((state_val_90356 === (7))){
var inst_90351 = (state_90355[(2)]);
var state_90355__$1 = state_90355;
var statearr_90357_90396 = state_90355__$1;
(statearr_90357_90396[(2)] = inst_90351);

(statearr_90357_90396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90356 === (1))){
var state_90355__$1 = state_90355;
var statearr_90358_90397 = state_90355__$1;
(statearr_90358_90397[(2)] = null);

(statearr_90358_90397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90356 === (4))){
var inst_90337 = (state_90355[(7)]);
var inst_90337__$1 = (state_90355[(2)]);
var inst_90338 = (inst_90337__$1 == null);
var state_90355__$1 = (function (){var statearr_90359 = state_90355;
(statearr_90359[(7)] = inst_90337__$1);

return statearr_90359;
})();
if(cljs.core.truth_(inst_90338)){
var statearr_90360_90398 = state_90355__$1;
(statearr_90360_90398[(1)] = (5));

} else {
var statearr_90361_90399 = state_90355__$1;
(statearr_90361_90399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90356 === (6))){
var inst_90337 = (state_90355[(7)]);
var inst_90342 = p.call(null,inst_90337);
var state_90355__$1 = state_90355;
if(cljs.core.truth_(inst_90342)){
var statearr_90362_90400 = state_90355__$1;
(statearr_90362_90400[(1)] = (8));

} else {
var statearr_90363_90401 = state_90355__$1;
(statearr_90363_90401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90356 === (3))){
var inst_90353 = (state_90355[(2)]);
var state_90355__$1 = state_90355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90355__$1,inst_90353);
} else {
if((state_val_90356 === (2))){
var state_90355__$1 = state_90355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90355__$1,(4),ch);
} else {
if((state_val_90356 === (11))){
var inst_90345 = (state_90355[(2)]);
var state_90355__$1 = state_90355;
var statearr_90364_90404 = state_90355__$1;
(statearr_90364_90404[(2)] = inst_90345);

(statearr_90364_90404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90356 === (9))){
var state_90355__$1 = state_90355;
var statearr_90365_90405 = state_90355__$1;
(statearr_90365_90405[(2)] = null);

(statearr_90365_90405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90356 === (5))){
var inst_90340 = cljs.core.async.close_BANG_.call(null,out);
var state_90355__$1 = state_90355;
var statearr_90366_90409 = state_90355__$1;
(statearr_90366_90409[(2)] = inst_90340);

(statearr_90366_90409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90356 === (10))){
var inst_90348 = (state_90355[(2)]);
var state_90355__$1 = (function (){var statearr_90367 = state_90355;
(statearr_90367[(8)] = inst_90348);

return statearr_90367;
})();
var statearr_90368_90413 = state_90355__$1;
(statearr_90368_90413[(2)] = null);

(statearr_90368_90413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90356 === (8))){
var inst_90337 = (state_90355[(7)]);
var state_90355__$1 = state_90355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90355__$1,(11),out,inst_90337);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32975__auto___90395,out))
;
return ((function (switch__32863__auto__,c__32975__auto___90395,out){
return (function() {
var cljs$core$async$state_machine__32864__auto__ = null;
var cljs$core$async$state_machine__32864__auto____0 = (function (){
var statearr_90373 = [null,null,null,null,null,null,null,null,null];
(statearr_90373[(0)] = cljs$core$async$state_machine__32864__auto__);

(statearr_90373[(1)] = (1));

return statearr_90373;
});
var cljs$core$async$state_machine__32864__auto____1 = (function (state_90355){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_90355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e90376){if((e90376 instanceof Object)){
var ex__32867__auto__ = e90376;
var statearr_90377_90416 = state_90355;
(statearr_90377_90416[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90420 = state_90355;
state_90355 = G__90420;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$state_machine__32864__auto__ = function(state_90355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32864__auto____1.call(this,state_90355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32864__auto____0;
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32864__auto____1;
return cljs$core$async$state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto___90395,out))
})();
var state__32977__auto__ = (function (){var statearr_90383 = f__32976__auto__.call(null);
(statearr_90383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto___90395);

return statearr_90383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto___90395,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args90424 = [];
var len__26896__auto___90429 = arguments.length;
var i__26897__auto___90430 = (0);
while(true){
if((i__26897__auto___90430 < len__26896__auto___90429)){
args90424.push((arguments[i__26897__auto___90430]));

var G__90431 = (i__26897__auto___90430 + (1));
i__26897__auto___90430 = G__90431;
continue;
} else {
}
break;
}

var G__90426 = args90424.length;
switch (G__90426) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90424.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto__){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto__){
return (function (state_90619){
var state_val_90620 = (state_90619[(1)]);
if((state_val_90620 === (7))){
var inst_90615 = (state_90619[(2)]);
var state_90619__$1 = state_90619;
var statearr_90625_90682 = state_90619__$1;
(statearr_90625_90682[(2)] = inst_90615);

(statearr_90625_90682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90620 === (20))){
var inst_90585 = (state_90619[(7)]);
var inst_90596 = (state_90619[(2)]);
var inst_90597 = cljs.core.next.call(null,inst_90585);
var inst_90571 = inst_90597;
var inst_90572 = null;
var inst_90573 = (0);
var inst_90574 = (0);
var state_90619__$1 = (function (){var statearr_90626 = state_90619;
(statearr_90626[(8)] = inst_90574);

(statearr_90626[(9)] = inst_90571);

(statearr_90626[(10)] = inst_90596);

(statearr_90626[(11)] = inst_90572);

(statearr_90626[(12)] = inst_90573);

return statearr_90626;
})();
var statearr_90627_90687 = state_90619__$1;
(statearr_90627_90687[(2)] = null);

(statearr_90627_90687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90620 === (1))){
var state_90619__$1 = state_90619;
var statearr_90628_90688 = state_90619__$1;
(statearr_90628_90688[(2)] = null);

(statearr_90628_90688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90620 === (4))){
var inst_90560 = (state_90619[(13)]);
var inst_90560__$1 = (state_90619[(2)]);
var inst_90561 = (inst_90560__$1 == null);
var state_90619__$1 = (function (){var statearr_90629 = state_90619;
(statearr_90629[(13)] = inst_90560__$1);

return statearr_90629;
})();
if(cljs.core.truth_(inst_90561)){
var statearr_90630_90689 = state_90619__$1;
(statearr_90630_90689[(1)] = (5));

} else {
var statearr_90631_90690 = state_90619__$1;
(statearr_90631_90690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90620 === (15))){
var state_90619__$1 = state_90619;
var statearr_90635_90691 = state_90619__$1;
(statearr_90635_90691[(2)] = null);

(statearr_90635_90691[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90620 === (21))){
var state_90619__$1 = state_90619;
var statearr_90640_90692 = state_90619__$1;
(statearr_90640_90692[(2)] = null);

(statearr_90640_90692[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90620 === (13))){
var inst_90574 = (state_90619[(8)]);
var inst_90571 = (state_90619[(9)]);
var inst_90572 = (state_90619[(11)]);
var inst_90573 = (state_90619[(12)]);
var inst_90581 = (state_90619[(2)]);
var inst_90582 = (inst_90574 + (1));
var tmp90632 = inst_90571;
var tmp90633 = inst_90572;
var tmp90634 = inst_90573;
var inst_90571__$1 = tmp90632;
var inst_90572__$1 = tmp90633;
var inst_90573__$1 = tmp90634;
var inst_90574__$1 = inst_90582;
var state_90619__$1 = (function (){var statearr_90641 = state_90619;
(statearr_90641[(8)] = inst_90574__$1);

(statearr_90641[(9)] = inst_90571__$1);

(statearr_90641[(11)] = inst_90572__$1);

(statearr_90641[(14)] = inst_90581);

(statearr_90641[(12)] = inst_90573__$1);

return statearr_90641;
})();
var statearr_90642_90695 = state_90619__$1;
(statearr_90642_90695[(2)] = null);

(statearr_90642_90695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90620 === (22))){
var state_90619__$1 = state_90619;
var statearr_90643_90696 = state_90619__$1;
(statearr_90643_90696[(2)] = null);

(statearr_90643_90696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90620 === (6))){
var inst_90560 = (state_90619[(13)]);
var inst_90569 = f.call(null,inst_90560);
var inst_90570 = cljs.core.seq.call(null,inst_90569);
var inst_90571 = inst_90570;
var inst_90572 = null;
var inst_90573 = (0);
var inst_90574 = (0);
var state_90619__$1 = (function (){var statearr_90644 = state_90619;
(statearr_90644[(8)] = inst_90574);

(statearr_90644[(9)] = inst_90571);

(statearr_90644[(11)] = inst_90572);

(statearr_90644[(12)] = inst_90573);

return statearr_90644;
})();
var statearr_90645_90698 = state_90619__$1;
(statearr_90645_90698[(2)] = null);

(statearr_90645_90698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90620 === (17))){
var inst_90585 = (state_90619[(7)]);
var inst_90589 = cljs.core.chunk_first.call(null,inst_90585);
var inst_90590 = cljs.core.chunk_rest.call(null,inst_90585);
var inst_90591 = cljs.core.count.call(null,inst_90589);
var inst_90571 = inst_90590;
var inst_90572 = inst_90589;
var inst_90573 = inst_90591;
var inst_90574 = (0);
var state_90619__$1 = (function (){var statearr_90646 = state_90619;
(statearr_90646[(8)] = inst_90574);

(statearr_90646[(9)] = inst_90571);

(statearr_90646[(11)] = inst_90572);

(statearr_90646[(12)] = inst_90573);

return statearr_90646;
})();
var statearr_90647_90699 = state_90619__$1;
(statearr_90647_90699[(2)] = null);

(statearr_90647_90699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90620 === (3))){
var inst_90617 = (state_90619[(2)]);
var state_90619__$1 = state_90619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90619__$1,inst_90617);
} else {
if((state_val_90620 === (12))){
var inst_90605 = (state_90619[(2)]);
var state_90619__$1 = state_90619;
var statearr_90648_90704 = state_90619__$1;
(statearr_90648_90704[(2)] = inst_90605);

(statearr_90648_90704[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90620 === (2))){
var state_90619__$1 = state_90619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90619__$1,(4),in$);
} else {
if((state_val_90620 === (23))){
var inst_90613 = (state_90619[(2)]);
var state_90619__$1 = state_90619;
var statearr_90649_90709 = state_90619__$1;
(statearr_90649_90709[(2)] = inst_90613);

(statearr_90649_90709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90620 === (19))){
var inst_90600 = (state_90619[(2)]);
var state_90619__$1 = state_90619;
var statearr_90650_90714 = state_90619__$1;
(statearr_90650_90714[(2)] = inst_90600);

(statearr_90650_90714[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90620 === (11))){
var inst_90585 = (state_90619[(7)]);
var inst_90571 = (state_90619[(9)]);
var inst_90585__$1 = cljs.core.seq.call(null,inst_90571);
var state_90619__$1 = (function (){var statearr_90651 = state_90619;
(statearr_90651[(7)] = inst_90585__$1);

return statearr_90651;
})();
if(inst_90585__$1){
var statearr_90652_90715 = state_90619__$1;
(statearr_90652_90715[(1)] = (14));

} else {
var statearr_90653_90716 = state_90619__$1;
(statearr_90653_90716[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90620 === (9))){
var inst_90607 = (state_90619[(2)]);
var inst_90608 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_90619__$1 = (function (){var statearr_90658 = state_90619;
(statearr_90658[(15)] = inst_90607);

return statearr_90658;
})();
if(cljs.core.truth_(inst_90608)){
var statearr_90659_90717 = state_90619__$1;
(statearr_90659_90717[(1)] = (21));

} else {
var statearr_90660_90718 = state_90619__$1;
(statearr_90660_90718[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90620 === (5))){
var inst_90563 = cljs.core.async.close_BANG_.call(null,out);
var state_90619__$1 = state_90619;
var statearr_90661_90720 = state_90619__$1;
(statearr_90661_90720[(2)] = inst_90563);

(statearr_90661_90720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90620 === (14))){
var inst_90585 = (state_90619[(7)]);
var inst_90587 = cljs.core.chunked_seq_QMARK_.call(null,inst_90585);
var state_90619__$1 = state_90619;
if(inst_90587){
var statearr_90662_90721 = state_90619__$1;
(statearr_90662_90721[(1)] = (17));

} else {
var statearr_90663_90722 = state_90619__$1;
(statearr_90663_90722[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90620 === (16))){
var inst_90603 = (state_90619[(2)]);
var state_90619__$1 = state_90619;
var statearr_90664_90724 = state_90619__$1;
(statearr_90664_90724[(2)] = inst_90603);

(statearr_90664_90724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90620 === (10))){
var inst_90574 = (state_90619[(8)]);
var inst_90572 = (state_90619[(11)]);
var inst_90579 = cljs.core._nth.call(null,inst_90572,inst_90574);
var state_90619__$1 = state_90619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90619__$1,(13),out,inst_90579);
} else {
if((state_val_90620 === (18))){
var inst_90585 = (state_90619[(7)]);
var inst_90594 = cljs.core.first.call(null,inst_90585);
var state_90619__$1 = state_90619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90619__$1,(20),out,inst_90594);
} else {
if((state_val_90620 === (8))){
var inst_90574 = (state_90619[(8)]);
var inst_90573 = (state_90619[(12)]);
var inst_90576 = (inst_90574 < inst_90573);
var inst_90577 = inst_90576;
var state_90619__$1 = state_90619;
if(cljs.core.truth_(inst_90577)){
var statearr_90665_90725 = state_90619__$1;
(statearr_90665_90725[(1)] = (10));

} else {
var statearr_90666_90726 = state_90619__$1;
(statearr_90666_90726[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32975__auto__))
;
return ((function (switch__32863__auto__,c__32975__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32864__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32864__auto____0 = (function (){
var statearr_90674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90674[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32864__auto__);

(statearr_90674[(1)] = (1));

return statearr_90674;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32864__auto____1 = (function (state_90619){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_90619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e90675){if((e90675 instanceof Object)){
var ex__32867__auto__ = e90675;
var statearr_90676_90730 = state_90619;
(statearr_90676_90730[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90735 = state_90619;
state_90619 = G__90735;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32864__auto__ = function(state_90619){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32864__auto____1.call(this,state_90619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32864__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32864__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto__))
})();
var state__32977__auto__ = (function (){var statearr_90677 = f__32976__auto__.call(null);
(statearr_90677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto__);

return statearr_90677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto__))
);

return c__32975__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args90736 = [];
var len__26896__auto___90744 = arguments.length;
var i__26897__auto___90745 = (0);
while(true){
if((i__26897__auto___90745 < len__26896__auto___90744)){
args90736.push((arguments[i__26897__auto___90745]));

var G__90748 = (i__26897__auto___90745 + (1));
i__26897__auto___90745 = G__90748;
continue;
} else {
}
break;
}

var G__90741 = args90736.length;
switch (G__90741) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90736.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args90751 = [];
var len__26896__auto___90755 = arguments.length;
var i__26897__auto___90756 = (0);
while(true){
if((i__26897__auto___90756 < len__26896__auto___90755)){
args90751.push((arguments[i__26897__auto___90756]));

var G__90757 = (i__26897__auto___90756 + (1));
i__26897__auto___90756 = G__90757;
continue;
} else {
}
break;
}

var G__90754 = args90751.length;
switch (G__90754) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90751.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args90760 = [];
var len__26896__auto___90823 = arguments.length;
var i__26897__auto___90824 = (0);
while(true){
if((i__26897__auto___90824 < len__26896__auto___90823)){
args90760.push((arguments[i__26897__auto___90824]));

var G__90825 = (i__26897__auto___90824 + (1));
i__26897__auto___90824 = G__90825;
continue;
} else {
}
break;
}

var G__90765 = args90760.length;
switch (G__90765) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90760.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32975__auto___90832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto___90832,out){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto___90832,out){
return (function (state_90790){
var state_val_90791 = (state_90790[(1)]);
if((state_val_90791 === (7))){
var inst_90785 = (state_90790[(2)]);
var state_90790__$1 = state_90790;
var statearr_90793_90833 = state_90790__$1;
(statearr_90793_90833[(2)] = inst_90785);

(statearr_90793_90833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90791 === (1))){
var inst_90767 = null;
var state_90790__$1 = (function (){var statearr_90794 = state_90790;
(statearr_90794[(7)] = inst_90767);

return statearr_90794;
})();
var statearr_90795_90834 = state_90790__$1;
(statearr_90795_90834[(2)] = null);

(statearr_90795_90834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90791 === (4))){
var inst_90770 = (state_90790[(8)]);
var inst_90770__$1 = (state_90790[(2)]);
var inst_90771 = (inst_90770__$1 == null);
var inst_90772 = cljs.core.not.call(null,inst_90771);
var state_90790__$1 = (function (){var statearr_90796 = state_90790;
(statearr_90796[(8)] = inst_90770__$1);

return statearr_90796;
})();
if(inst_90772){
var statearr_90797_90840 = state_90790__$1;
(statearr_90797_90840[(1)] = (5));

} else {
var statearr_90798_90841 = state_90790__$1;
(statearr_90798_90841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90791 === (6))){
var state_90790__$1 = state_90790;
var statearr_90799_90842 = state_90790__$1;
(statearr_90799_90842[(2)] = null);

(statearr_90799_90842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90791 === (3))){
var inst_90787 = (state_90790[(2)]);
var inst_90788 = cljs.core.async.close_BANG_.call(null,out);
var state_90790__$1 = (function (){var statearr_90800 = state_90790;
(statearr_90800[(9)] = inst_90787);

return statearr_90800;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90790__$1,inst_90788);
} else {
if((state_val_90791 === (2))){
var state_90790__$1 = state_90790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90790__$1,(4),ch);
} else {
if((state_val_90791 === (11))){
var inst_90770 = (state_90790[(8)]);
var inst_90779 = (state_90790[(2)]);
var inst_90767 = inst_90770;
var state_90790__$1 = (function (){var statearr_90804 = state_90790;
(statearr_90804[(7)] = inst_90767);

(statearr_90804[(10)] = inst_90779);

return statearr_90804;
})();
var statearr_90805_90844 = state_90790__$1;
(statearr_90805_90844[(2)] = null);

(statearr_90805_90844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90791 === (9))){
var inst_90770 = (state_90790[(8)]);
var state_90790__$1 = state_90790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90790__$1,(11),out,inst_90770);
} else {
if((state_val_90791 === (5))){
var inst_90770 = (state_90790[(8)]);
var inst_90767 = (state_90790[(7)]);
var inst_90774 = cljs.core._EQ_.call(null,inst_90770,inst_90767);
var state_90790__$1 = state_90790;
if(inst_90774){
var statearr_90807_90848 = state_90790__$1;
(statearr_90807_90848[(1)] = (8));

} else {
var statearr_90808_90849 = state_90790__$1;
(statearr_90808_90849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90791 === (10))){
var inst_90782 = (state_90790[(2)]);
var state_90790__$1 = state_90790;
var statearr_90809_90850 = state_90790__$1;
(statearr_90809_90850[(2)] = inst_90782);

(statearr_90809_90850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90791 === (8))){
var inst_90767 = (state_90790[(7)]);
var tmp90806 = inst_90767;
var inst_90767__$1 = tmp90806;
var state_90790__$1 = (function (){var statearr_90810 = state_90790;
(statearr_90810[(7)] = inst_90767__$1);

return statearr_90810;
})();
var statearr_90811_90851 = state_90790__$1;
(statearr_90811_90851[(2)] = null);

(statearr_90811_90851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32975__auto___90832,out))
;
return ((function (switch__32863__auto__,c__32975__auto___90832,out){
return (function() {
var cljs$core$async$state_machine__32864__auto__ = null;
var cljs$core$async$state_machine__32864__auto____0 = (function (){
var statearr_90818 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_90818[(0)] = cljs$core$async$state_machine__32864__auto__);

(statearr_90818[(1)] = (1));

return statearr_90818;
});
var cljs$core$async$state_machine__32864__auto____1 = (function (state_90790){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_90790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e90820){if((e90820 instanceof Object)){
var ex__32867__auto__ = e90820;
var statearr_90821_90855 = state_90790;
(statearr_90821_90855[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90857 = state_90790;
state_90790 = G__90857;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$state_machine__32864__auto__ = function(state_90790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32864__auto____1.call(this,state_90790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32864__auto____0;
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32864__auto____1;
return cljs$core$async$state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto___90832,out))
})();
var state__32977__auto__ = (function (){var statearr_90822 = f__32976__auto__.call(null);
(statearr_90822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto___90832);

return statearr_90822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto___90832,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args90858 = [];
var len__26896__auto___90940 = arguments.length;
var i__26897__auto___90941 = (0);
while(true){
if((i__26897__auto___90941 < len__26896__auto___90940)){
args90858.push((arguments[i__26897__auto___90941]));

var G__90942 = (i__26897__auto___90941 + (1));
i__26897__auto___90941 = G__90942;
continue;
} else {
}
break;
}

var G__90860 = args90858.length;
switch (G__90860) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90858.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32975__auto___90948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto___90948,out){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto___90948,out){
return (function (state_90900){
var state_val_90901 = (state_90900[(1)]);
if((state_val_90901 === (7))){
var inst_90896 = (state_90900[(2)]);
var state_90900__$1 = state_90900;
var statearr_90902_90951 = state_90900__$1;
(statearr_90902_90951[(2)] = inst_90896);

(statearr_90902_90951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90901 === (1))){
var inst_90861 = (new Array(n));
var inst_90862 = inst_90861;
var inst_90863 = (0);
var state_90900__$1 = (function (){var statearr_90903 = state_90900;
(statearr_90903[(7)] = inst_90862);

(statearr_90903[(8)] = inst_90863);

return statearr_90903;
})();
var statearr_90904_90952 = state_90900__$1;
(statearr_90904_90952[(2)] = null);

(statearr_90904_90952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90901 === (4))){
var inst_90866 = (state_90900[(9)]);
var inst_90866__$1 = (state_90900[(2)]);
var inst_90867 = (inst_90866__$1 == null);
var inst_90868 = cljs.core.not.call(null,inst_90867);
var state_90900__$1 = (function (){var statearr_90905 = state_90900;
(statearr_90905[(9)] = inst_90866__$1);

return statearr_90905;
})();
if(inst_90868){
var statearr_90906_90956 = state_90900__$1;
(statearr_90906_90956[(1)] = (5));

} else {
var statearr_90907_90957 = state_90900__$1;
(statearr_90907_90957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90901 === (15))){
var inst_90890 = (state_90900[(2)]);
var state_90900__$1 = state_90900;
var statearr_90908_90958 = state_90900__$1;
(statearr_90908_90958[(2)] = inst_90890);

(statearr_90908_90958[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90901 === (13))){
var state_90900__$1 = state_90900;
var statearr_90909_90959 = state_90900__$1;
(statearr_90909_90959[(2)] = null);

(statearr_90909_90959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90901 === (6))){
var inst_90863 = (state_90900[(8)]);
var inst_90886 = (inst_90863 > (0));
var state_90900__$1 = state_90900;
if(cljs.core.truth_(inst_90886)){
var statearr_90910_90962 = state_90900__$1;
(statearr_90910_90962[(1)] = (12));

} else {
var statearr_90911_90963 = state_90900__$1;
(statearr_90911_90963[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90901 === (3))){
var inst_90898 = (state_90900[(2)]);
var state_90900__$1 = state_90900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90900__$1,inst_90898);
} else {
if((state_val_90901 === (12))){
var inst_90862 = (state_90900[(7)]);
var inst_90888 = cljs.core.vec.call(null,inst_90862);
var state_90900__$1 = state_90900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90900__$1,(15),out,inst_90888);
} else {
if((state_val_90901 === (2))){
var state_90900__$1 = state_90900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90900__$1,(4),ch);
} else {
if((state_val_90901 === (11))){
var inst_90880 = (state_90900[(2)]);
var inst_90881 = (new Array(n));
var inst_90862 = inst_90881;
var inst_90863 = (0);
var state_90900__$1 = (function (){var statearr_90918 = state_90900;
(statearr_90918[(10)] = inst_90880);

(statearr_90918[(7)] = inst_90862);

(statearr_90918[(8)] = inst_90863);

return statearr_90918;
})();
var statearr_90919_90965 = state_90900__$1;
(statearr_90919_90965[(2)] = null);

(statearr_90919_90965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90901 === (9))){
var inst_90862 = (state_90900[(7)]);
var inst_90878 = cljs.core.vec.call(null,inst_90862);
var state_90900__$1 = state_90900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90900__$1,(11),out,inst_90878);
} else {
if((state_val_90901 === (5))){
var inst_90871 = (state_90900[(11)]);
var inst_90862 = (state_90900[(7)]);
var inst_90863 = (state_90900[(8)]);
var inst_90866 = (state_90900[(9)]);
var inst_90870 = (inst_90862[inst_90863] = inst_90866);
var inst_90871__$1 = (inst_90863 + (1));
var inst_90874 = (inst_90871__$1 < n);
var state_90900__$1 = (function (){var statearr_90920 = state_90900;
(statearr_90920[(11)] = inst_90871__$1);

(statearr_90920[(12)] = inst_90870);

return statearr_90920;
})();
if(cljs.core.truth_(inst_90874)){
var statearr_90921_90966 = state_90900__$1;
(statearr_90921_90966[(1)] = (8));

} else {
var statearr_90922_90967 = state_90900__$1;
(statearr_90922_90967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90901 === (14))){
var inst_90893 = (state_90900[(2)]);
var inst_90894 = cljs.core.async.close_BANG_.call(null,out);
var state_90900__$1 = (function (){var statearr_90926 = state_90900;
(statearr_90926[(13)] = inst_90893);

return statearr_90926;
})();
var statearr_90927_90972 = state_90900__$1;
(statearr_90927_90972[(2)] = inst_90894);

(statearr_90927_90972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90901 === (10))){
var inst_90884 = (state_90900[(2)]);
var state_90900__$1 = state_90900;
var statearr_90928_90973 = state_90900__$1;
(statearr_90928_90973[(2)] = inst_90884);

(statearr_90928_90973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90901 === (8))){
var inst_90871 = (state_90900[(11)]);
var inst_90862 = (state_90900[(7)]);
var tmp90923 = inst_90862;
var inst_90862__$1 = tmp90923;
var inst_90863 = inst_90871;
var state_90900__$1 = (function (){var statearr_90931 = state_90900;
(statearr_90931[(7)] = inst_90862__$1);

(statearr_90931[(8)] = inst_90863);

return statearr_90931;
})();
var statearr_90932_90975 = state_90900__$1;
(statearr_90932_90975[(2)] = null);

(statearr_90932_90975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32975__auto___90948,out))
;
return ((function (switch__32863__auto__,c__32975__auto___90948,out){
return (function() {
var cljs$core$async$state_machine__32864__auto__ = null;
var cljs$core$async$state_machine__32864__auto____0 = (function (){
var statearr_90936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90936[(0)] = cljs$core$async$state_machine__32864__auto__);

(statearr_90936[(1)] = (1));

return statearr_90936;
});
var cljs$core$async$state_machine__32864__auto____1 = (function (state_90900){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_90900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e90937){if((e90937 instanceof Object)){
var ex__32867__auto__ = e90937;
var statearr_90938_90977 = state_90900;
(statearr_90938_90977[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90978 = state_90900;
state_90900 = G__90978;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$state_machine__32864__auto__ = function(state_90900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32864__auto____1.call(this,state_90900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32864__auto____0;
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32864__auto____1;
return cljs$core$async$state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto___90948,out))
})();
var state__32977__auto__ = (function (){var statearr_90939 = f__32976__auto__.call(null);
(statearr_90939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto___90948);

return statearr_90939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto___90948,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args90984 = [];
var len__26896__auto___91088 = arguments.length;
var i__26897__auto___91089 = (0);
while(true){
if((i__26897__auto___91089 < len__26896__auto___91088)){
args90984.push((arguments[i__26897__auto___91089]));

var G__91090 = (i__26897__auto___91089 + (1));
i__26897__auto___91089 = G__91090;
continue;
} else {
}
break;
}

var G__90986 = args90984.length;
switch (G__90986) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90984.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32975__auto___91092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto___91092,out){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto___91092,out){
return (function (state_91043){
var state_val_91044 = (state_91043[(1)]);
if((state_val_91044 === (7))){
var inst_91039 = (state_91043[(2)]);
var state_91043__$1 = state_91043;
var statearr_91045_91093 = state_91043__$1;
(statearr_91045_91093[(2)] = inst_91039);

(statearr_91045_91093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91044 === (1))){
var inst_90992 = [];
var inst_90993 = inst_90992;
var inst_90994 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_91043__$1 = (function (){var statearr_91046 = state_91043;
(statearr_91046[(7)] = inst_90993);

(statearr_91046[(8)] = inst_90994);

return statearr_91046;
})();
var statearr_91047_91098 = state_91043__$1;
(statearr_91047_91098[(2)] = null);

(statearr_91047_91098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91044 === (4))){
var inst_90997 = (state_91043[(9)]);
var inst_90997__$1 = (state_91043[(2)]);
var inst_90998 = (inst_90997__$1 == null);
var inst_90999 = cljs.core.not.call(null,inst_90998);
var state_91043__$1 = (function (){var statearr_91048 = state_91043;
(statearr_91048[(9)] = inst_90997__$1);

return statearr_91048;
})();
if(inst_90999){
var statearr_91049_91103 = state_91043__$1;
(statearr_91049_91103[(1)] = (5));

} else {
var statearr_91050_91104 = state_91043__$1;
(statearr_91050_91104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91044 === (15))){
var inst_91033 = (state_91043[(2)]);
var state_91043__$1 = state_91043;
var statearr_91051_91105 = state_91043__$1;
(statearr_91051_91105[(2)] = inst_91033);

(statearr_91051_91105[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91044 === (13))){
var state_91043__$1 = state_91043;
var statearr_91052_91106 = state_91043__$1;
(statearr_91052_91106[(2)] = null);

(statearr_91052_91106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91044 === (6))){
var inst_90993 = (state_91043[(7)]);
var inst_91028 = inst_90993.length;
var inst_91029 = (inst_91028 > (0));
var state_91043__$1 = state_91043;
if(cljs.core.truth_(inst_91029)){
var statearr_91053_91107 = state_91043__$1;
(statearr_91053_91107[(1)] = (12));

} else {
var statearr_91054_91108 = state_91043__$1;
(statearr_91054_91108[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91044 === (3))){
var inst_91041 = (state_91043[(2)]);
var state_91043__$1 = state_91043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91043__$1,inst_91041);
} else {
if((state_val_91044 === (12))){
var inst_90993 = (state_91043[(7)]);
var inst_91031 = cljs.core.vec.call(null,inst_90993);
var state_91043__$1 = state_91043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_91043__$1,(15),out,inst_91031);
} else {
if((state_val_91044 === (2))){
var state_91043__$1 = state_91043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91043__$1,(4),ch);
} else {
if((state_val_91044 === (11))){
var inst_91006 = (state_91043[(10)]);
var inst_90997 = (state_91043[(9)]);
var inst_91016 = (state_91043[(2)]);
var inst_91017 = [];
var inst_91018 = inst_91017.push(inst_90997);
var inst_90993 = inst_91017;
var inst_90994 = inst_91006;
var state_91043__$1 = (function (){var statearr_91055 = state_91043;
(statearr_91055[(11)] = inst_91016);

(statearr_91055[(12)] = inst_91018);

(statearr_91055[(7)] = inst_90993);

(statearr_91055[(8)] = inst_90994);

return statearr_91055;
})();
var statearr_91056_91109 = state_91043__$1;
(statearr_91056_91109[(2)] = null);

(statearr_91056_91109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91044 === (9))){
var inst_90993 = (state_91043[(7)]);
var inst_91014 = cljs.core.vec.call(null,inst_90993);
var state_91043__$1 = state_91043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_91043__$1,(11),out,inst_91014);
} else {
if((state_val_91044 === (5))){
var inst_91006 = (state_91043[(10)]);
var inst_90997 = (state_91043[(9)]);
var inst_90994 = (state_91043[(8)]);
var inst_91006__$1 = f.call(null,inst_90997);
var inst_91007 = cljs.core._EQ_.call(null,inst_91006__$1,inst_90994);
var inst_91008 = cljs.core.keyword_identical_QMARK_.call(null,inst_90994,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_91009 = (inst_91007) || (inst_91008);
var state_91043__$1 = (function (){var statearr_91057 = state_91043;
(statearr_91057[(10)] = inst_91006__$1);

return statearr_91057;
})();
if(cljs.core.truth_(inst_91009)){
var statearr_91058_91110 = state_91043__$1;
(statearr_91058_91110[(1)] = (8));

} else {
var statearr_91059_91111 = state_91043__$1;
(statearr_91059_91111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91044 === (14))){
var inst_91036 = (state_91043[(2)]);
var inst_91037 = cljs.core.async.close_BANG_.call(null,out);
var state_91043__$1 = (function (){var statearr_91062 = state_91043;
(statearr_91062[(13)] = inst_91036);

return statearr_91062;
})();
var statearr_91064_91113 = state_91043__$1;
(statearr_91064_91113[(2)] = inst_91037);

(statearr_91064_91113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91044 === (10))){
var inst_91021 = (state_91043[(2)]);
var state_91043__$1 = state_91043;
var statearr_91065_91115 = state_91043__$1;
(statearr_91065_91115[(2)] = inst_91021);

(statearr_91065_91115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91044 === (8))){
var inst_91006 = (state_91043[(10)]);
var inst_90993 = (state_91043[(7)]);
var inst_90997 = (state_91043[(9)]);
var inst_91011 = inst_90993.push(inst_90997);
var tmp91060 = inst_90993;
var inst_90993__$1 = tmp91060;
var inst_90994 = inst_91006;
var state_91043__$1 = (function (){var statearr_91066 = state_91043;
(statearr_91066[(7)] = inst_90993__$1);

(statearr_91066[(8)] = inst_90994);

(statearr_91066[(14)] = inst_91011);

return statearr_91066;
})();
var statearr_91067_91123 = state_91043__$1;
(statearr_91067_91123[(2)] = null);

(statearr_91067_91123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32975__auto___91092,out))
;
return ((function (switch__32863__auto__,c__32975__auto___91092,out){
return (function() {
var cljs$core$async$state_machine__32864__auto__ = null;
var cljs$core$async$state_machine__32864__auto____0 = (function (){
var statearr_91076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91076[(0)] = cljs$core$async$state_machine__32864__auto__);

(statearr_91076[(1)] = (1));

return statearr_91076;
});
var cljs$core$async$state_machine__32864__auto____1 = (function (state_91043){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_91043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e91077){if((e91077 instanceof Object)){
var ex__32867__auto__ = e91077;
var statearr_91078_91128 = state_91043;
(statearr_91078_91128[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91129 = state_91043;
state_91043 = G__91129;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
cljs$core$async$state_machine__32864__auto__ = function(state_91043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32864__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32864__auto____1.call(this,state_91043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32864__auto____0;
cljs$core$async$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32864__auto____1;
return cljs$core$async$state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto___91092,out))
})();
var state__32977__auto__ = (function (){var statearr_91083 = f__32976__auto__.call(null);
(statearr_91083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto___91092);

return statearr_91083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto___91092,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
