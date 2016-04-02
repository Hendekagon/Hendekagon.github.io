// Compiled by ClojureScript 1.8.40 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args97304 = [];
var len__36461__auto___97317 = arguments.length;
var i__36462__auto___97320 = (0);
while(true){
if((i__36462__auto___97320 < len__36461__auto___97317)){
args97304.push((arguments[i__36462__auto___97320]));

var G__97322 = (i__36462__auto___97320 + (1));
i__36462__auto___97320 = G__97322;
continue;
} else {
}
break;
}

var G__97311 = args97304.length;
switch (G__97311) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args97304.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async97312 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async97312 = (function (f,blockable,meta97313){
this.f = f;
this.blockable = blockable;
this.meta97313 = meta97313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async97312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_97314,meta97313__$1){
var self__ = this;
var _97314__$1 = this;
return (new cljs.core.async.t_cljs$core$async97312(self__.f,self__.blockable,meta97313__$1));
});

cljs.core.async.t_cljs$core$async97312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_97314){
var self__ = this;
var _97314__$1 = this;
return self__.meta97313;
});

cljs.core.async.t_cljs$core$async97312.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async97312.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async97312.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async97312.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async97312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta97313","meta97313",651836400,null)], null);
});

cljs.core.async.t_cljs$core$async97312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async97312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async97312";

cljs.core.async.t_cljs$core$async97312.cljs$lang$ctorPrWriter = (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async97312");
});

cljs.core.async.__GT_t_cljs$core$async97312 = (function cljs$core$async$__GT_t_cljs$core$async97312(f__$1,blockable__$1,meta97313){
return (new cljs.core.async.t_cljs$core$async97312(f__$1,blockable__$1,meta97313));
});

}

return (new cljs.core.async.t_cljs$core$async97312(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
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
var args97351 = [];
var len__36461__auto___97438 = arguments.length;
var i__36462__auto___97439 = (0);
while(true){
if((i__36462__auto___97439 < len__36461__auto___97438)){
args97351.push((arguments[i__36462__auto___97439]));

var G__97446 = (i__36462__auto___97439 + (1));
i__36462__auto___97439 = G__97446;
continue;
} else {
}
break;
}

var G__97359 = args97351.length;
switch (G__97359) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args97351.length)].join('')));

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
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args97464 = [];
var len__36461__auto___97478 = arguments.length;
var i__36462__auto___97479 = (0);
while(true){
if((i__36462__auto___97479 < len__36461__auto___97478)){
args97464.push((arguments[i__36462__auto___97479]));

var G__97480 = (i__36462__auto___97479 + (1));
i__36462__auto___97479 = G__97480;
continue;
} else {
}
break;
}

var G__97477 = args97464.length;
switch (G__97477) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args97464.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
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
var args97494 = [];
var len__36461__auto___97499 = arguments.length;
var i__36462__auto___97500 = (0);
while(true){
if((i__36462__auto___97500 < len__36461__auto___97499)){
args97494.push((arguments[i__36462__auto___97500]));

var G__97503 = (i__36462__auto___97500 + (1));
i__36462__auto___97500 = G__97503;
continue;
} else {
}
break;
}

var G__97496 = args97494.length;
switch (G__97496) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args97494.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_97506 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_97506);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_97506,ret){
return (function (){
return fn1.call(null,val_97506);
});})(val_97506,ret))
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
var args97515 = [];
var len__36461__auto___97555 = arguments.length;
var i__36462__auto___97556 = (0);
while(true){
if((i__36462__auto___97556 < len__36461__auto___97555)){
args97515.push((arguments[i__36462__auto___97556]));

var G__97563 = (i__36462__auto___97556 + (1));
i__36462__auto___97556 = G__97563;
continue;
} else {
}
break;
}

var G__97519 = args97515.length;
switch (G__97519) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args97515.length)].join('')));

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
var n__36306__auto___97577 = n;
var x_97578 = (0);
while(true){
if((x_97578 < n__36306__auto___97577)){
(a[x_97578] = (0));

var G__97579 = (x_97578 + (1));
x_97578 = G__97579;
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

var G__97580 = (i + (1));
i = G__97580;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async97584 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async97584 = (function (alt_flag,flag,meta97585){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta97585 = meta97585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async97584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_97586,meta97585__$1){
var self__ = this;
var _97586__$1 = this;
return (new cljs.core.async.t_cljs$core$async97584(self__.alt_flag,self__.flag,meta97585__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async97584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_97586){
var self__ = this;
var _97586__$1 = this;
return self__.meta97585;
});})(flag))
;

cljs.core.async.t_cljs$core$async97584.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async97584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async97584.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async97584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async97584.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta97585","meta97585",2136643001,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async97584.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async97584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async97584";

cljs.core.async.t_cljs$core$async97584.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async97584");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async97584 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async97584(alt_flag__$1,flag__$1,meta97585){
return (new cljs.core.async.t_cljs$core$async97584(alt_flag__$1,flag__$1,meta97585));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async97584(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async97606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async97606 = (function (alt_handler,flag,cb,meta97607){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta97607 = meta97607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async97606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_97608,meta97607__$1){
var self__ = this;
var _97608__$1 = this;
return (new cljs.core.async.t_cljs$core$async97606(self__.alt_handler,self__.flag,self__.cb,meta97607__$1));
});

cljs.core.async.t_cljs$core$async97606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_97608){
var self__ = this;
var _97608__$1 = this;
return self__.meta97607;
});

cljs.core.async.t_cljs$core$async97606.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async97606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async97606.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async97606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async97606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta97607","meta97607",-44803904,null)], null);
});

cljs.core.async.t_cljs$core$async97606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async97606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async97606";

cljs.core.async.t_cljs$core$async97606.cljs$lang$ctorPrWriter = (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async97606");
});

cljs.core.async.__GT_t_cljs$core$async97606 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async97606(alt_handler__$1,flag__$1,cb__$1,meta97607){
return (new cljs.core.async.t_cljs$core$async97606(alt_handler__$1,flag__$1,cb__$1,meta97607));
});

}

return (new cljs.core.async.t_cljs$core$async97606(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__97634_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__97634_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__97635_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__97635_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__35392__auto__ = wport;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return port;
}
})()], null));
} else {
var G__97664 = (i + (1));
i = G__97664;
continue;
}
} else {
return null;
}
break;
}
})();
var or__35392__auto__ = ret;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__35380__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__35380__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__35380__auto__;
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
var args__36468__auto__ = [];
var len__36461__auto___97679 = arguments.length;
var i__36462__auto___97680 = (0);
while(true){
if((i__36462__auto___97680 < len__36461__auto___97679)){
args__36468__auto__.push((arguments[i__36462__auto___97680]));

var G__97683 = (i__36462__auto___97680 + (1));
i__36462__auto___97680 = G__97683;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__97672){
var map__97673 = p__97672;
var map__97673__$1 = ((((!((map__97673 == null)))?((((map__97673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__97673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__97673):map__97673);
var opts = map__97673__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq97670){
var G__97671 = cljs.core.first.call(null,seq97670);
var seq97670__$1 = cljs.core.next.call(null,seq97670);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__97671,seq97670__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args97693 = [];
var len__36461__auto___97784 = arguments.length;
var i__36462__auto___97785 = (0);
while(true){
if((i__36462__auto___97785 < len__36461__auto___97784)){
args97693.push((arguments[i__36462__auto___97785]));

var G__97786 = (i__36462__auto___97785 + (1));
i__36462__auto___97785 = G__97786;
continue;
} else {
}
break;
}

var G__97697 = args97693.length;
switch (G__97697) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args97693.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40985__auto___97796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___97796){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___97796){
return (function (state_97741){
var state_val_97742 = (state_97741[(1)]);
if((state_val_97742 === (7))){
var inst_97736 = (state_97741[(2)]);
var state_97741__$1 = state_97741;
var statearr_97750_97799 = state_97741__$1;
(statearr_97750_97799[(2)] = inst_97736);

(statearr_97750_97799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97742 === (1))){
var state_97741__$1 = state_97741;
var statearr_97751_97800 = state_97741__$1;
(statearr_97751_97800[(2)] = null);

(statearr_97751_97800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97742 === (4))){
var inst_97719 = (state_97741[(7)]);
var inst_97719__$1 = (state_97741[(2)]);
var inst_97720 = (inst_97719__$1 == null);
var state_97741__$1 = (function (){var statearr_97753 = state_97741;
(statearr_97753[(7)] = inst_97719__$1);

return statearr_97753;
})();
if(cljs.core.truth_(inst_97720)){
var statearr_97754_97804 = state_97741__$1;
(statearr_97754_97804[(1)] = (5));

} else {
var statearr_97755_97805 = state_97741__$1;
(statearr_97755_97805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97742 === (13))){
var state_97741__$1 = state_97741;
var statearr_97756_97806 = state_97741__$1;
(statearr_97756_97806[(2)] = null);

(statearr_97756_97806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97742 === (6))){
var inst_97719 = (state_97741[(7)]);
var state_97741__$1 = state_97741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_97741__$1,(11),to,inst_97719);
} else {
if((state_val_97742 === (3))){
var inst_97738 = (state_97741[(2)]);
var state_97741__$1 = state_97741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_97741__$1,inst_97738);
} else {
if((state_val_97742 === (12))){
var state_97741__$1 = state_97741;
var statearr_97757_97807 = state_97741__$1;
(statearr_97757_97807[(2)] = null);

(statearr_97757_97807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97742 === (2))){
var state_97741__$1 = state_97741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_97741__$1,(4),from);
} else {
if((state_val_97742 === (11))){
var inst_97729 = (state_97741[(2)]);
var state_97741__$1 = state_97741;
if(cljs.core.truth_(inst_97729)){
var statearr_97760_97809 = state_97741__$1;
(statearr_97760_97809[(1)] = (12));

} else {
var statearr_97765_97810 = state_97741__$1;
(statearr_97765_97810[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97742 === (9))){
var state_97741__$1 = state_97741;
var statearr_97766_97846 = state_97741__$1;
(statearr_97766_97846[(2)] = null);

(statearr_97766_97846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97742 === (5))){
var state_97741__$1 = state_97741;
if(cljs.core.truth_(close_QMARK_)){
var statearr_97768_97848 = state_97741__$1;
(statearr_97768_97848[(1)] = (8));

} else {
var statearr_97769_97849 = state_97741__$1;
(statearr_97769_97849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97742 === (14))){
var inst_97734 = (state_97741[(2)]);
var state_97741__$1 = state_97741;
var statearr_97770_97850 = state_97741__$1;
(statearr_97770_97850[(2)] = inst_97734);

(statearr_97770_97850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97742 === (10))){
var inst_97726 = (state_97741[(2)]);
var state_97741__$1 = state_97741;
var statearr_97771_97851 = state_97741__$1;
(statearr_97771_97851[(2)] = inst_97726);

(statearr_97771_97851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97742 === (8))){
var inst_97723 = cljs.core.async.close_BANG_.call(null,to);
var state_97741__$1 = state_97741;
var statearr_97772_97852 = state_97741__$1;
(statearr_97772_97852[(2)] = inst_97723);

(statearr_97772_97852[(1)] = (10));


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
});})(c__40985__auto___97796))
;
return ((function (switch__40398__auto__,c__40985__auto___97796){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_97779 = [null,null,null,null,null,null,null,null];
(statearr_97779[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_97779[(1)] = (1));

return statearr_97779;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_97741){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_97741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e97780){if((e97780 instanceof Object)){
var ex__40402__auto__ = e97780;
var statearr_97781_97856 = state_97741;
(statearr_97781_97856[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e97780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__97857 = state_97741;
state_97741 = G__97857;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_97741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_97741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___97796))
})();
var state__40987__auto__ = (function (){var statearr_97783 = f__40986__auto__.call(null);
(statearr_97783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___97796);

return statearr_97783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___97796))
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
return (function (p__98129){
var vec__98130 = p__98129;
var v = cljs.core.nth.call(null,vec__98130,(0),null);
var p = cljs.core.nth.call(null,vec__98130,(1),null);
var job = vec__98130;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__40985__auto___98440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___98440,res,vec__98130,v,p,job,jobs,results){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___98440,res,vec__98130,v,p,job,jobs,results){
return (function (state_98188){
var state_val_98189 = (state_98188[(1)]);
if((state_val_98189 === (1))){
var state_98188__$1 = state_98188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_98188__$1,(2),res,v);
} else {
if((state_val_98189 === (2))){
var inst_98183 = (state_98188[(2)]);
var inst_98185 = cljs.core.async.close_BANG_.call(null,res);
var state_98188__$1 = (function (){var statearr_98191 = state_98188;
(statearr_98191[(7)] = inst_98183);

return statearr_98191;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98188__$1,inst_98185);
} else {
return null;
}
}
});})(c__40985__auto___98440,res,vec__98130,v,p,job,jobs,results))
;
return ((function (switch__40398__auto__,c__40985__auto___98440,res,vec__98130,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0 = (function (){
var statearr_98195 = [null,null,null,null,null,null,null,null];
(statearr_98195[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__);

(statearr_98195[(1)] = (1));

return statearr_98195;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1 = (function (state_98188){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_98188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e98196){if((e98196 instanceof Object)){
var ex__40402__auto__ = e98196;
var statearr_98197_98470 = state_98188;
(statearr_98197_98470[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e98196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98473 = state_98188;
state_98188 = G__98473;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = function(state_98188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1.call(this,state_98188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___98440,res,vec__98130,v,p,job,jobs,results))
})();
var state__40987__auto__ = (function (){var statearr_98198 = f__40986__auto__.call(null);
(statearr_98198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___98440);

return statearr_98198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___98440,res,vec__98130,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__98199){
var vec__98200 = p__98199;
var v = cljs.core.nth.call(null,vec__98200,(0),null);
var p = cljs.core.nth.call(null,vec__98200,(1),null);
var job = vec__98200;
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
var n__36306__auto___98483 = n;
var __98484 = (0);
while(true){
if((__98484 < n__36306__auto___98483)){
var G__98201_98487 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__98201_98487) {
case "compute":
var c__40985__auto___98489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__98484,c__40985__auto___98489,G__98201_98487,n__36306__auto___98483,jobs,results,process,async){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (__98484,c__40985__auto___98489,G__98201_98487,n__36306__auto___98483,jobs,results,process,async){
return (function (state_98214){
var state_val_98215 = (state_98214[(1)]);
if((state_val_98215 === (1))){
var state_98214__$1 = state_98214;
var statearr_98218_98493 = state_98214__$1;
(statearr_98218_98493[(2)] = null);

(statearr_98218_98493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98215 === (2))){
var state_98214__$1 = state_98214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_98214__$1,(4),jobs);
} else {
if((state_val_98215 === (3))){
var inst_98212 = (state_98214[(2)]);
var state_98214__$1 = state_98214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98214__$1,inst_98212);
} else {
if((state_val_98215 === (4))){
var inst_98204 = (state_98214[(2)]);
var inst_98205 = process.call(null,inst_98204);
var state_98214__$1 = state_98214;
if(cljs.core.truth_(inst_98205)){
var statearr_98219_98497 = state_98214__$1;
(statearr_98219_98497[(1)] = (5));

} else {
var statearr_98220_98498 = state_98214__$1;
(statearr_98220_98498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98215 === (5))){
var state_98214__$1 = state_98214;
var statearr_98221_98501 = state_98214__$1;
(statearr_98221_98501[(2)] = null);

(statearr_98221_98501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98215 === (6))){
var state_98214__$1 = state_98214;
var statearr_98223_98506 = state_98214__$1;
(statearr_98223_98506[(2)] = null);

(statearr_98223_98506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98215 === (7))){
var inst_98210 = (state_98214[(2)]);
var state_98214__$1 = state_98214;
var statearr_98224_98507 = state_98214__$1;
(statearr_98224_98507[(2)] = inst_98210);

(statearr_98224_98507[(1)] = (3));


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
});})(__98484,c__40985__auto___98489,G__98201_98487,n__36306__auto___98483,jobs,results,process,async))
;
return ((function (__98484,switch__40398__auto__,c__40985__auto___98489,G__98201_98487,n__36306__auto___98483,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0 = (function (){
var statearr_98228 = [null,null,null,null,null,null,null];
(statearr_98228[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__);

(statearr_98228[(1)] = (1));

return statearr_98228;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1 = (function (state_98214){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_98214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e98229){if((e98229 instanceof Object)){
var ex__40402__auto__ = e98229;
var statearr_98230_98512 = state_98214;
(statearr_98230_98512[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e98229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98513 = state_98214;
state_98214 = G__98513;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = function(state_98214){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1.call(this,state_98214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__;
})()
;})(__98484,switch__40398__auto__,c__40985__auto___98489,G__98201_98487,n__36306__auto___98483,jobs,results,process,async))
})();
var state__40987__auto__ = (function (){var statearr_98231 = f__40986__auto__.call(null);
(statearr_98231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___98489);

return statearr_98231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(__98484,c__40985__auto___98489,G__98201_98487,n__36306__auto___98483,jobs,results,process,async))
);


break;
case "async":
var c__40985__auto___98514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__98484,c__40985__auto___98514,G__98201_98487,n__36306__auto___98483,jobs,results,process,async){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (__98484,c__40985__auto___98514,G__98201_98487,n__36306__auto___98483,jobs,results,process,async){
return (function (state_98244){
var state_val_98245 = (state_98244[(1)]);
if((state_val_98245 === (1))){
var state_98244__$1 = state_98244;
var statearr_98246_98515 = state_98244__$1;
(statearr_98246_98515[(2)] = null);

(statearr_98246_98515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98245 === (2))){
var state_98244__$1 = state_98244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_98244__$1,(4),jobs);
} else {
if((state_val_98245 === (3))){
var inst_98242 = (state_98244[(2)]);
var state_98244__$1 = state_98244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98244__$1,inst_98242);
} else {
if((state_val_98245 === (4))){
var inst_98234 = (state_98244[(2)]);
var inst_98235 = async.call(null,inst_98234);
var state_98244__$1 = state_98244;
if(cljs.core.truth_(inst_98235)){
var statearr_98247_98516 = state_98244__$1;
(statearr_98247_98516[(1)] = (5));

} else {
var statearr_98248_98517 = state_98244__$1;
(statearr_98248_98517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98245 === (5))){
var state_98244__$1 = state_98244;
var statearr_98249_98518 = state_98244__$1;
(statearr_98249_98518[(2)] = null);

(statearr_98249_98518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98245 === (6))){
var state_98244__$1 = state_98244;
var statearr_98250_98519 = state_98244__$1;
(statearr_98250_98519[(2)] = null);

(statearr_98250_98519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98245 === (7))){
var inst_98240 = (state_98244[(2)]);
var state_98244__$1 = state_98244;
var statearr_98251_98520 = state_98244__$1;
(statearr_98251_98520[(2)] = inst_98240);

(statearr_98251_98520[(1)] = (3));


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
});})(__98484,c__40985__auto___98514,G__98201_98487,n__36306__auto___98483,jobs,results,process,async))
;
return ((function (__98484,switch__40398__auto__,c__40985__auto___98514,G__98201_98487,n__36306__auto___98483,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0 = (function (){
var statearr_98255 = [null,null,null,null,null,null,null];
(statearr_98255[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__);

(statearr_98255[(1)] = (1));

return statearr_98255;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1 = (function (state_98244){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_98244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e98256){if((e98256 instanceof Object)){
var ex__40402__auto__ = e98256;
var statearr_98257_98552 = state_98244;
(statearr_98257_98552[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e98256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98553 = state_98244;
state_98244 = G__98553;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = function(state_98244){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1.call(this,state_98244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__;
})()
;})(__98484,switch__40398__auto__,c__40985__auto___98514,G__98201_98487,n__36306__auto___98483,jobs,results,process,async))
})();
var state__40987__auto__ = (function (){var statearr_98258 = f__40986__auto__.call(null);
(statearr_98258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___98514);

return statearr_98258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(__98484,c__40985__auto___98514,G__98201_98487,n__36306__auto___98483,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__98554 = (__98484 + (1));
__98484 = G__98554;
continue;
} else {
}
break;
}

var c__40985__auto___98555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___98555,jobs,results,process,async){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___98555,jobs,results,process,async){
return (function (state_98280){
var state_val_98281 = (state_98280[(1)]);
if((state_val_98281 === (1))){
var state_98280__$1 = state_98280;
var statearr_98282_98557 = state_98280__$1;
(statearr_98282_98557[(2)] = null);

(statearr_98282_98557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98281 === (2))){
var state_98280__$1 = state_98280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_98280__$1,(4),from);
} else {
if((state_val_98281 === (3))){
var inst_98278 = (state_98280[(2)]);
var state_98280__$1 = state_98280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98280__$1,inst_98278);
} else {
if((state_val_98281 === (4))){
var inst_98261 = (state_98280[(7)]);
var inst_98261__$1 = (state_98280[(2)]);
var inst_98262 = (inst_98261__$1 == null);
var state_98280__$1 = (function (){var statearr_98283 = state_98280;
(statearr_98283[(7)] = inst_98261__$1);

return statearr_98283;
})();
if(cljs.core.truth_(inst_98262)){
var statearr_98284_98558 = state_98280__$1;
(statearr_98284_98558[(1)] = (5));

} else {
var statearr_98285_98559 = state_98280__$1;
(statearr_98285_98559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98281 === (5))){
var inst_98264 = cljs.core.async.close_BANG_.call(null,jobs);
var state_98280__$1 = state_98280;
var statearr_98286_98560 = state_98280__$1;
(statearr_98286_98560[(2)] = inst_98264);

(statearr_98286_98560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98281 === (6))){
var inst_98261 = (state_98280[(7)]);
var inst_98266 = (state_98280[(8)]);
var inst_98266__$1 = cljs.core.async.chan.call(null,(1));
var inst_98267 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_98268 = [inst_98261,inst_98266__$1];
var inst_98269 = (new cljs.core.PersistentVector(null,2,(5),inst_98267,inst_98268,null));
var state_98280__$1 = (function (){var statearr_98289 = state_98280;
(statearr_98289[(8)] = inst_98266__$1);

return statearr_98289;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_98280__$1,(8),jobs,inst_98269);
} else {
if((state_val_98281 === (7))){
var inst_98276 = (state_98280[(2)]);
var state_98280__$1 = state_98280;
var statearr_98291_98575 = state_98280__$1;
(statearr_98291_98575[(2)] = inst_98276);

(statearr_98291_98575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98281 === (8))){
var inst_98266 = (state_98280[(8)]);
var inst_98271 = (state_98280[(2)]);
var state_98280__$1 = (function (){var statearr_98292 = state_98280;
(statearr_98292[(9)] = inst_98271);

return statearr_98292;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_98280__$1,(9),results,inst_98266);
} else {
if((state_val_98281 === (9))){
var inst_98273 = (state_98280[(2)]);
var state_98280__$1 = (function (){var statearr_98293 = state_98280;
(statearr_98293[(10)] = inst_98273);

return statearr_98293;
})();
var statearr_98294_98576 = state_98280__$1;
(statearr_98294_98576[(2)] = null);

(statearr_98294_98576[(1)] = (2));


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
});})(c__40985__auto___98555,jobs,results,process,async))
;
return ((function (switch__40398__auto__,c__40985__auto___98555,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0 = (function (){
var statearr_98298 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_98298[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__);

(statearr_98298[(1)] = (1));

return statearr_98298;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1 = (function (state_98280){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_98280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e98299){if((e98299 instanceof Object)){
var ex__40402__auto__ = e98299;
var statearr_98300_98577 = state_98280;
(statearr_98300_98577[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e98299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98578 = state_98280;
state_98280 = G__98578;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = function(state_98280){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1.call(this,state_98280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___98555,jobs,results,process,async))
})();
var state__40987__auto__ = (function (){var statearr_98301 = f__40986__auto__.call(null);
(statearr_98301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___98555);

return statearr_98301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___98555,jobs,results,process,async))
);


var c__40985__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto__,jobs,results,process,async){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto__,jobs,results,process,async){
return (function (state_98342){
var state_val_98343 = (state_98342[(1)]);
if((state_val_98343 === (7))){
var inst_98338 = (state_98342[(2)]);
var state_98342__$1 = state_98342;
var statearr_98344_98579 = state_98342__$1;
(statearr_98344_98579[(2)] = inst_98338);

(statearr_98344_98579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98343 === (20))){
var state_98342__$1 = state_98342;
var statearr_98345_98580 = state_98342__$1;
(statearr_98345_98580[(2)] = null);

(statearr_98345_98580[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98343 === (1))){
var state_98342__$1 = state_98342;
var statearr_98346_98584 = state_98342__$1;
(statearr_98346_98584[(2)] = null);

(statearr_98346_98584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98343 === (4))){
var inst_98304 = (state_98342[(7)]);
var inst_98304__$1 = (state_98342[(2)]);
var inst_98305 = (inst_98304__$1 == null);
var state_98342__$1 = (function (){var statearr_98347 = state_98342;
(statearr_98347[(7)] = inst_98304__$1);

return statearr_98347;
})();
if(cljs.core.truth_(inst_98305)){
var statearr_98348_98585 = state_98342__$1;
(statearr_98348_98585[(1)] = (5));

} else {
var statearr_98349_98586 = state_98342__$1;
(statearr_98349_98586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98343 === (15))){
var inst_98319 = (state_98342[(8)]);
var state_98342__$1 = state_98342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_98342__$1,(18),to,inst_98319);
} else {
if((state_val_98343 === (21))){
var inst_98333 = (state_98342[(2)]);
var state_98342__$1 = state_98342;
var statearr_98350_98590 = state_98342__$1;
(statearr_98350_98590[(2)] = inst_98333);

(statearr_98350_98590[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98343 === (13))){
var inst_98335 = (state_98342[(2)]);
var state_98342__$1 = (function (){var statearr_98353 = state_98342;
(statearr_98353[(9)] = inst_98335);

return statearr_98353;
})();
var statearr_98354_98592 = state_98342__$1;
(statearr_98354_98592[(2)] = null);

(statearr_98354_98592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98343 === (6))){
var inst_98304 = (state_98342[(7)]);
var state_98342__$1 = state_98342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_98342__$1,(11),inst_98304);
} else {
if((state_val_98343 === (17))){
var inst_98328 = (state_98342[(2)]);
var state_98342__$1 = state_98342;
if(cljs.core.truth_(inst_98328)){
var statearr_98356_98611 = state_98342__$1;
(statearr_98356_98611[(1)] = (19));

} else {
var statearr_98357_98612 = state_98342__$1;
(statearr_98357_98612[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98343 === (3))){
var inst_98340 = (state_98342[(2)]);
var state_98342__$1 = state_98342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98342__$1,inst_98340);
} else {
if((state_val_98343 === (12))){
var inst_98314 = (state_98342[(10)]);
var state_98342__$1 = state_98342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_98342__$1,(14),inst_98314);
} else {
if((state_val_98343 === (2))){
var state_98342__$1 = state_98342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_98342__$1,(4),results);
} else {
if((state_val_98343 === (19))){
var state_98342__$1 = state_98342;
var statearr_98397_98616 = state_98342__$1;
(statearr_98397_98616[(2)] = null);

(statearr_98397_98616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98343 === (11))){
var inst_98314 = (state_98342[(2)]);
var state_98342__$1 = (function (){var statearr_98398 = state_98342;
(statearr_98398[(10)] = inst_98314);

return statearr_98398;
})();
var statearr_98401_98617 = state_98342__$1;
(statearr_98401_98617[(2)] = null);

(statearr_98401_98617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98343 === (9))){
var state_98342__$1 = state_98342;
var statearr_98404_98620 = state_98342__$1;
(statearr_98404_98620[(2)] = null);

(statearr_98404_98620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98343 === (5))){
var state_98342__$1 = state_98342;
if(cljs.core.truth_(close_QMARK_)){
var statearr_98406_98622 = state_98342__$1;
(statearr_98406_98622[(1)] = (8));

} else {
var statearr_98408_98623 = state_98342__$1;
(statearr_98408_98623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98343 === (14))){
var inst_98321 = (state_98342[(11)]);
var inst_98319 = (state_98342[(8)]);
var inst_98319__$1 = (state_98342[(2)]);
var inst_98320 = (inst_98319__$1 == null);
var inst_98321__$1 = cljs.core.not.call(null,inst_98320);
var state_98342__$1 = (function (){var statearr_98409 = state_98342;
(statearr_98409[(11)] = inst_98321__$1);

(statearr_98409[(8)] = inst_98319__$1);

return statearr_98409;
})();
if(inst_98321__$1){
var statearr_98410_98627 = state_98342__$1;
(statearr_98410_98627[(1)] = (15));

} else {
var statearr_98411_98630 = state_98342__$1;
(statearr_98411_98630[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98343 === (16))){
var inst_98321 = (state_98342[(11)]);
var state_98342__$1 = state_98342;
var statearr_98412_98675 = state_98342__$1;
(statearr_98412_98675[(2)] = inst_98321);

(statearr_98412_98675[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98343 === (10))){
var inst_98311 = (state_98342[(2)]);
var state_98342__$1 = state_98342;
var statearr_98413_98679 = state_98342__$1;
(statearr_98413_98679[(2)] = inst_98311);

(statearr_98413_98679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98343 === (18))){
var inst_98325 = (state_98342[(2)]);
var state_98342__$1 = state_98342;
var statearr_98414_98684 = state_98342__$1;
(statearr_98414_98684[(2)] = inst_98325);

(statearr_98414_98684[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98343 === (8))){
var inst_98308 = cljs.core.async.close_BANG_.call(null,to);
var state_98342__$1 = state_98342;
var statearr_98416_98686 = state_98342__$1;
(statearr_98416_98686[(2)] = inst_98308);

(statearr_98416_98686[(1)] = (10));


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
});})(c__40985__auto__,jobs,results,process,async))
;
return ((function (switch__40398__auto__,c__40985__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0 = (function (){
var statearr_98431 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_98431[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__);

(statearr_98431[(1)] = (1));

return statearr_98431;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1 = (function (state_98342){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_98342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e98432){if((e98432 instanceof Object)){
var ex__40402__auto__ = e98432;
var statearr_98434_98687 = state_98342;
(statearr_98434_98687[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e98432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98688 = state_98342;
state_98342 = G__98688;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = function(state_98342){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1.call(this,state_98342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto__,jobs,results,process,async))
})();
var state__40987__auto__ = (function (){var statearr_98435 = f__40986__auto__.call(null);
(statearr_98435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto__);

return statearr_98435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto__,jobs,results,process,async))
);

return c__40985__auto__;
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
var args98689 = [];
var len__36461__auto___98695 = arguments.length;
var i__36462__auto___98696 = (0);
while(true){
if((i__36462__auto___98696 < len__36461__auto___98695)){
args98689.push((arguments[i__36462__auto___98696]));

var G__98697 = (i__36462__auto___98696 + (1));
i__36462__auto___98696 = G__98697;
continue;
} else {
}
break;
}

var G__98694 = args98689.length;
switch (G__98694) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98689.length)].join('')));

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
var args98704 = [];
var len__36461__auto___98715 = arguments.length;
var i__36462__auto___98716 = (0);
while(true){
if((i__36462__auto___98716 < len__36461__auto___98715)){
args98704.push((arguments[i__36462__auto___98716]));

var G__98717 = (i__36462__auto___98716 + (1));
i__36462__auto___98716 = G__98717;
continue;
} else {
}
break;
}

var G__98709 = args98704.length;
switch (G__98709) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98704.length)].join('')));

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
var args98728 = [];
var len__36461__auto___98818 = arguments.length;
var i__36462__auto___98819 = (0);
while(true){
if((i__36462__auto___98819 < len__36461__auto___98818)){
args98728.push((arguments[i__36462__auto___98819]));

var G__98820 = (i__36462__auto___98819 + (1));
i__36462__auto___98819 = G__98820;
continue;
} else {
}
break;
}

var G__98744 = args98728.length;
switch (G__98744) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args98728.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__40985__auto___98822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___98822,tc,fc){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___98822,tc,fc){
return (function (state_98773){
var state_val_98774 = (state_98773[(1)]);
if((state_val_98774 === (7))){
var inst_98768 = (state_98773[(2)]);
var state_98773__$1 = state_98773;
var statearr_98781_98823 = state_98773__$1;
(statearr_98781_98823[(2)] = inst_98768);

(statearr_98781_98823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98774 === (1))){
var state_98773__$1 = state_98773;
var statearr_98784_98824 = state_98773__$1;
(statearr_98784_98824[(2)] = null);

(statearr_98784_98824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98774 === (4))){
var inst_98747 = (state_98773[(7)]);
var inst_98747__$1 = (state_98773[(2)]);
var inst_98748 = (inst_98747__$1 == null);
var state_98773__$1 = (function (){var statearr_98785 = state_98773;
(statearr_98785[(7)] = inst_98747__$1);

return statearr_98785;
})();
if(cljs.core.truth_(inst_98748)){
var statearr_98786_98838 = state_98773__$1;
(statearr_98786_98838[(1)] = (5));

} else {
var statearr_98787_98839 = state_98773__$1;
(statearr_98787_98839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98774 === (13))){
var state_98773__$1 = state_98773;
var statearr_98788_98840 = state_98773__$1;
(statearr_98788_98840[(2)] = null);

(statearr_98788_98840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98774 === (6))){
var inst_98747 = (state_98773[(7)]);
var inst_98755 = p.call(null,inst_98747);
var state_98773__$1 = state_98773;
if(cljs.core.truth_(inst_98755)){
var statearr_98789_98841 = state_98773__$1;
(statearr_98789_98841[(1)] = (9));

} else {
var statearr_98790_98842 = state_98773__$1;
(statearr_98790_98842[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98774 === (3))){
var inst_98770 = (state_98773[(2)]);
var state_98773__$1 = state_98773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98773__$1,inst_98770);
} else {
if((state_val_98774 === (12))){
var state_98773__$1 = state_98773;
var statearr_98791_98843 = state_98773__$1;
(statearr_98791_98843[(2)] = null);

(statearr_98791_98843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98774 === (2))){
var state_98773__$1 = state_98773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_98773__$1,(4),ch);
} else {
if((state_val_98774 === (11))){
var inst_98747 = (state_98773[(7)]);
var inst_98759 = (state_98773[(2)]);
var state_98773__$1 = state_98773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_98773__$1,(8),inst_98759,inst_98747);
} else {
if((state_val_98774 === (9))){
var state_98773__$1 = state_98773;
var statearr_98792_98845 = state_98773__$1;
(statearr_98792_98845[(2)] = tc);

(statearr_98792_98845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98774 === (5))){
var inst_98750 = cljs.core.async.close_BANG_.call(null,tc);
var inst_98751 = cljs.core.async.close_BANG_.call(null,fc);
var state_98773__$1 = (function (){var statearr_98793 = state_98773;
(statearr_98793[(8)] = inst_98750);

return statearr_98793;
})();
var statearr_98794_98848 = state_98773__$1;
(statearr_98794_98848[(2)] = inst_98751);

(statearr_98794_98848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98774 === (14))){
var inst_98766 = (state_98773[(2)]);
var state_98773__$1 = state_98773;
var statearr_98795_98849 = state_98773__$1;
(statearr_98795_98849[(2)] = inst_98766);

(statearr_98795_98849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98774 === (10))){
var state_98773__$1 = state_98773;
var statearr_98796_98850 = state_98773__$1;
(statearr_98796_98850[(2)] = fc);

(statearr_98796_98850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98774 === (8))){
var inst_98761 = (state_98773[(2)]);
var state_98773__$1 = state_98773;
if(cljs.core.truth_(inst_98761)){
var statearr_98797_98851 = state_98773__$1;
(statearr_98797_98851[(1)] = (12));

} else {
var statearr_98798_98853 = state_98773__$1;
(statearr_98798_98853[(1)] = (13));

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
});})(c__40985__auto___98822,tc,fc))
;
return ((function (switch__40398__auto__,c__40985__auto___98822,tc,fc){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_98802 = [null,null,null,null,null,null,null,null,null];
(statearr_98802[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_98802[(1)] = (1));

return statearr_98802;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_98773){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_98773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e98809){if((e98809 instanceof Object)){
var ex__40402__auto__ = e98809;
var statearr_98810_98858 = state_98773;
(statearr_98810_98858[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e98809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98859 = state_98773;
state_98773 = G__98859;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_98773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_98773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___98822,tc,fc))
})();
var state__40987__auto__ = (function (){var statearr_98811 = f__40986__auto__.call(null);
(statearr_98811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___98822);

return statearr_98811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___98822,tc,fc))
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
var c__40985__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto__){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto__){
return (function (state_98932){
var state_val_98933 = (state_98932[(1)]);
if((state_val_98933 === (7))){
var inst_98928 = (state_98932[(2)]);
var state_98932__$1 = state_98932;
var statearr_98934_98967 = state_98932__$1;
(statearr_98934_98967[(2)] = inst_98928);

(statearr_98934_98967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98933 === (1))){
var inst_98912 = init;
var state_98932__$1 = (function (){var statearr_98935 = state_98932;
(statearr_98935[(7)] = inst_98912);

return statearr_98935;
})();
var statearr_98936_98970 = state_98932__$1;
(statearr_98936_98970[(2)] = null);

(statearr_98936_98970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98933 === (4))){
var inst_98915 = (state_98932[(8)]);
var inst_98915__$1 = (state_98932[(2)]);
var inst_98916 = (inst_98915__$1 == null);
var state_98932__$1 = (function (){var statearr_98940 = state_98932;
(statearr_98940[(8)] = inst_98915__$1);

return statearr_98940;
})();
if(cljs.core.truth_(inst_98916)){
var statearr_98941_98972 = state_98932__$1;
(statearr_98941_98972[(1)] = (5));

} else {
var statearr_98942_98973 = state_98932__$1;
(statearr_98942_98973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98933 === (6))){
var inst_98915 = (state_98932[(8)]);
var inst_98912 = (state_98932[(7)]);
var inst_98919 = (state_98932[(9)]);
var inst_98919__$1 = f.call(null,inst_98912,inst_98915);
var inst_98920 = cljs.core.reduced_QMARK_.call(null,inst_98919__$1);
var state_98932__$1 = (function (){var statearr_98943 = state_98932;
(statearr_98943[(9)] = inst_98919__$1);

return statearr_98943;
})();
if(inst_98920){
var statearr_98944_98978 = state_98932__$1;
(statearr_98944_98978[(1)] = (8));

} else {
var statearr_98945_98980 = state_98932__$1;
(statearr_98945_98980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98933 === (3))){
var inst_98930 = (state_98932[(2)]);
var state_98932__$1 = state_98932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_98932__$1,inst_98930);
} else {
if((state_val_98933 === (2))){
var state_98932__$1 = state_98932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_98932__$1,(4),ch);
} else {
if((state_val_98933 === (9))){
var inst_98919 = (state_98932[(9)]);
var inst_98912 = inst_98919;
var state_98932__$1 = (function (){var statearr_98946 = state_98932;
(statearr_98946[(7)] = inst_98912);

return statearr_98946;
})();
var statearr_98949_98982 = state_98932__$1;
(statearr_98949_98982[(2)] = null);

(statearr_98949_98982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98933 === (5))){
var inst_98912 = (state_98932[(7)]);
var state_98932__$1 = state_98932;
var statearr_98950_98983 = state_98932__$1;
(statearr_98950_98983[(2)] = inst_98912);

(statearr_98950_98983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98933 === (10))){
var inst_98926 = (state_98932[(2)]);
var state_98932__$1 = state_98932;
var statearr_98952_98984 = state_98932__$1;
(statearr_98952_98984[(2)] = inst_98926);

(statearr_98952_98984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98933 === (8))){
var inst_98919 = (state_98932[(9)]);
var inst_98922 = cljs.core.deref.call(null,inst_98919);
var state_98932__$1 = state_98932;
var statearr_98953_98988 = state_98932__$1;
(statearr_98953_98988[(2)] = inst_98922);

(statearr_98953_98988[(1)] = (10));


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
});})(c__40985__auto__))
;
return ((function (switch__40398__auto__,c__40985__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__40399__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40399__auto____0 = (function (){
var statearr_98957 = [null,null,null,null,null,null,null,null,null,null];
(statearr_98957[(0)] = cljs$core$async$reduce_$_state_machine__40399__auto__);

(statearr_98957[(1)] = (1));

return statearr_98957;
});
var cljs$core$async$reduce_$_state_machine__40399__auto____1 = (function (state_98932){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_98932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e98958){if((e98958 instanceof Object)){
var ex__40402__auto__ = e98958;
var statearr_98959_99000 = state_98932;
(statearr_98959_99000[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_98932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e98958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__99002 = state_98932;
state_98932 = G__99002;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40399__auto__ = function(state_98932){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40399__auto____1.call(this,state_98932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40399__auto____0;
cljs$core$async$reduce_$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40399__auto____1;
return cljs$core$async$reduce_$_state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto__))
})();
var state__40987__auto__ = (function (){var statearr_98960 = f__40986__auto__.call(null);
(statearr_98960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto__);

return statearr_98960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto__))
);

return c__40985__auto__;
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
var args99005 = [];
var len__36461__auto___99080 = arguments.length;
var i__36462__auto___99081 = (0);
while(true){
if((i__36462__auto___99081 < len__36461__auto___99080)){
args99005.push((arguments[i__36462__auto___99081]));

var G__99082 = (i__36462__auto___99081 + (1));
i__36462__auto___99081 = G__99082;
continue;
} else {
}
break;
}

var G__99008 = args99005.length;
switch (G__99008) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args99005.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40985__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto__){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto__){
return (function (state_99036){
var state_val_99037 = (state_99036[(1)]);
if((state_val_99037 === (7))){
var inst_99018 = (state_99036[(2)]);
var state_99036__$1 = state_99036;
var statearr_99038_99091 = state_99036__$1;
(statearr_99038_99091[(2)] = inst_99018);

(statearr_99038_99091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99037 === (1))){
var inst_99012 = cljs.core.seq.call(null,coll);
var inst_99013 = inst_99012;
var state_99036__$1 = (function (){var statearr_99039 = state_99036;
(statearr_99039[(7)] = inst_99013);

return statearr_99039;
})();
var statearr_99040_99092 = state_99036__$1;
(statearr_99040_99092[(2)] = null);

(statearr_99040_99092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99037 === (4))){
var inst_99013 = (state_99036[(7)]);
var inst_99016 = cljs.core.first.call(null,inst_99013);
var state_99036__$1 = state_99036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_99036__$1,(7),ch,inst_99016);
} else {
if((state_val_99037 === (13))){
var inst_99030 = (state_99036[(2)]);
var state_99036__$1 = state_99036;
var statearr_99048_99095 = state_99036__$1;
(statearr_99048_99095[(2)] = inst_99030);

(statearr_99048_99095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99037 === (6))){
var inst_99021 = (state_99036[(2)]);
var state_99036__$1 = state_99036;
if(cljs.core.truth_(inst_99021)){
var statearr_99049_99096 = state_99036__$1;
(statearr_99049_99096[(1)] = (8));

} else {
var statearr_99050_99097 = state_99036__$1;
(statearr_99050_99097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99037 === (3))){
var inst_99034 = (state_99036[(2)]);
var state_99036__$1 = state_99036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_99036__$1,inst_99034);
} else {
if((state_val_99037 === (12))){
var state_99036__$1 = state_99036;
var statearr_99051_99098 = state_99036__$1;
(statearr_99051_99098[(2)] = null);

(statearr_99051_99098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99037 === (2))){
var inst_99013 = (state_99036[(7)]);
var state_99036__$1 = state_99036;
if(cljs.core.truth_(inst_99013)){
var statearr_99052_99101 = state_99036__$1;
(statearr_99052_99101[(1)] = (4));

} else {
var statearr_99053_99103 = state_99036__$1;
(statearr_99053_99103[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99037 === (11))){
var inst_99027 = cljs.core.async.close_BANG_.call(null,ch);
var state_99036__$1 = state_99036;
var statearr_99054_99104 = state_99036__$1;
(statearr_99054_99104[(2)] = inst_99027);

(statearr_99054_99104[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99037 === (9))){
var state_99036__$1 = state_99036;
if(cljs.core.truth_(close_QMARK_)){
var statearr_99055_99105 = state_99036__$1;
(statearr_99055_99105[(1)] = (11));

} else {
var statearr_99056_99106 = state_99036__$1;
(statearr_99056_99106[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99037 === (5))){
var inst_99013 = (state_99036[(7)]);
var state_99036__$1 = state_99036;
var statearr_99058_99109 = state_99036__$1;
(statearr_99058_99109[(2)] = inst_99013);

(statearr_99058_99109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99037 === (10))){
var inst_99032 = (state_99036[(2)]);
var state_99036__$1 = state_99036;
var statearr_99061_99111 = state_99036__$1;
(statearr_99061_99111[(2)] = inst_99032);

(statearr_99061_99111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99037 === (8))){
var inst_99013 = (state_99036[(7)]);
var inst_99023 = cljs.core.next.call(null,inst_99013);
var inst_99013__$1 = inst_99023;
var state_99036__$1 = (function (){var statearr_99062 = state_99036;
(statearr_99062[(7)] = inst_99013__$1);

return statearr_99062;
})();
var statearr_99063_99112 = state_99036__$1;
(statearr_99063_99112[(2)] = null);

(statearr_99063_99112[(1)] = (2));


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
});})(c__40985__auto__))
;
return ((function (switch__40398__auto__,c__40985__auto__){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_99068 = [null,null,null,null,null,null,null,null];
(statearr_99068[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_99068[(1)] = (1));

return statearr_99068;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_99036){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_99036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e99069){if((e99069 instanceof Object)){
var ex__40402__auto__ = e99069;
var statearr_99070_99121 = state_99036;
(statearr_99070_99121[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_99036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e99069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__99122 = state_99036;
state_99036 = G__99122;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_99036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_99036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto__))
})();
var state__40987__auto__ = (function (){var statearr_99071 = f__40986__auto__.call(null);
(statearr_99071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto__);

return statearr_99071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto__))
);

return c__40985__auto__;
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
var x__36055__auto__ = (((_ == null))?null:_);
var m__36056__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,_);
} else {
var m__36056__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,_);
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
var x__36055__auto__ = (((m == null))?null:m);
var m__36056__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__36056__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__36055__auto__ = (((m == null))?null:m);
var m__36056__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,m,ch);
} else {
var m__36056__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,m,ch);
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
var x__36055__auto__ = (((m == null))?null:m);
var m__36056__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,m);
} else {
var m__36056__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async99388 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async99388 = (function (mult,ch,cs,meta99389){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta99389 = meta99389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async99388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_99390,meta99389__$1){
var self__ = this;
var _99390__$1 = this;
return (new cljs.core.async.t_cljs$core$async99388(self__.mult,self__.ch,self__.cs,meta99389__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async99388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_99390){
var self__ = this;
var _99390__$1 = this;
return self__.meta99389;
});})(cs))
;

cljs.core.async.t_cljs$core$async99388.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async99388.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async99388.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async99388.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async99388.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async99388.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async99388.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta99389","meta99389",1058658081,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async99388.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async99388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async99388";

cljs.core.async.t_cljs$core$async99388.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async99388");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async99388 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async99388(mult__$1,ch__$1,cs__$1,meta99389){
return (new cljs.core.async.t_cljs$core$async99388(mult__$1,ch__$1,cs__$1,meta99389));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async99388(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__40985__auto___99629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___99629,cs,m,dchan,dctr,done){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___99629,cs,m,dchan,dctr,done){
return (function (state_99521){
var state_val_99522 = (state_99521[(1)]);
if((state_val_99522 === (7))){
var inst_99517 = (state_99521[(2)]);
var state_99521__$1 = state_99521;
var statearr_99523_99630 = state_99521__$1;
(statearr_99523_99630[(2)] = inst_99517);

(statearr_99523_99630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (20))){
var inst_99422 = (state_99521[(7)]);
var inst_99432 = cljs.core.first.call(null,inst_99422);
var inst_99433 = cljs.core.nth.call(null,inst_99432,(0),null);
var inst_99434 = cljs.core.nth.call(null,inst_99432,(1),null);
var state_99521__$1 = (function (){var statearr_99524 = state_99521;
(statearr_99524[(8)] = inst_99433);

return statearr_99524;
})();
if(cljs.core.truth_(inst_99434)){
var statearr_99525_99631 = state_99521__$1;
(statearr_99525_99631[(1)] = (22));

} else {
var statearr_99526_99632 = state_99521__$1;
(statearr_99526_99632[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (27))){
var inst_99469 = (state_99521[(9)]);
var inst_99462 = (state_99521[(10)]);
var inst_99464 = (state_99521[(11)]);
var inst_99393 = (state_99521[(12)]);
var inst_99469__$1 = cljs.core._nth.call(null,inst_99462,inst_99464);
var inst_99470 = cljs.core.async.put_BANG_.call(null,inst_99469__$1,inst_99393,done);
var state_99521__$1 = (function (){var statearr_99527 = state_99521;
(statearr_99527[(9)] = inst_99469__$1);

return statearr_99527;
})();
if(cljs.core.truth_(inst_99470)){
var statearr_99528_99633 = state_99521__$1;
(statearr_99528_99633[(1)] = (30));

} else {
var statearr_99529_99634 = state_99521__$1;
(statearr_99529_99634[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (1))){
var state_99521__$1 = state_99521;
var statearr_99530_99635 = state_99521__$1;
(statearr_99530_99635[(2)] = null);

(statearr_99530_99635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (24))){
var inst_99422 = (state_99521[(7)]);
var inst_99439 = (state_99521[(2)]);
var inst_99440 = cljs.core.next.call(null,inst_99422);
var inst_99402 = inst_99440;
var inst_99403 = null;
var inst_99404 = (0);
var inst_99405 = (0);
var state_99521__$1 = (function (){var statearr_99531 = state_99521;
(statearr_99531[(13)] = inst_99402);

(statearr_99531[(14)] = inst_99404);

(statearr_99531[(15)] = inst_99403);

(statearr_99531[(16)] = inst_99405);

(statearr_99531[(17)] = inst_99439);

return statearr_99531;
})();
var statearr_99532_99636 = state_99521__$1;
(statearr_99532_99636[(2)] = null);

(statearr_99532_99636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (39))){
var state_99521__$1 = state_99521;
var statearr_99536_99637 = state_99521__$1;
(statearr_99536_99637[(2)] = null);

(statearr_99536_99637[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (4))){
var inst_99393 = (state_99521[(12)]);
var inst_99393__$1 = (state_99521[(2)]);
var inst_99394 = (inst_99393__$1 == null);
var state_99521__$1 = (function (){var statearr_99537 = state_99521;
(statearr_99537[(12)] = inst_99393__$1);

return statearr_99537;
})();
if(cljs.core.truth_(inst_99394)){
var statearr_99538_99639 = state_99521__$1;
(statearr_99538_99639[(1)] = (5));

} else {
var statearr_99539_99640 = state_99521__$1;
(statearr_99539_99640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (15))){
var inst_99402 = (state_99521[(13)]);
var inst_99404 = (state_99521[(14)]);
var inst_99403 = (state_99521[(15)]);
var inst_99405 = (state_99521[(16)]);
var inst_99418 = (state_99521[(2)]);
var inst_99419 = (inst_99405 + (1));
var tmp99533 = inst_99402;
var tmp99534 = inst_99404;
var tmp99535 = inst_99403;
var inst_99402__$1 = tmp99533;
var inst_99403__$1 = tmp99535;
var inst_99404__$1 = tmp99534;
var inst_99405__$1 = inst_99419;
var state_99521__$1 = (function (){var statearr_99540 = state_99521;
(statearr_99540[(18)] = inst_99418);

(statearr_99540[(13)] = inst_99402__$1);

(statearr_99540[(14)] = inst_99404__$1);

(statearr_99540[(15)] = inst_99403__$1);

(statearr_99540[(16)] = inst_99405__$1);

return statearr_99540;
})();
var statearr_99541_99641 = state_99521__$1;
(statearr_99541_99641[(2)] = null);

(statearr_99541_99641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (21))){
var inst_99443 = (state_99521[(2)]);
var state_99521__$1 = state_99521;
var statearr_99545_99642 = state_99521__$1;
(statearr_99545_99642[(2)] = inst_99443);

(statearr_99545_99642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (31))){
var inst_99469 = (state_99521[(9)]);
var inst_99473 = done.call(null,null);
var inst_99474 = cljs.core.async.untap_STAR_.call(null,m,inst_99469);
var state_99521__$1 = (function (){var statearr_99546 = state_99521;
(statearr_99546[(19)] = inst_99473);

return statearr_99546;
})();
var statearr_99547_99643 = state_99521__$1;
(statearr_99547_99643[(2)] = inst_99474);

(statearr_99547_99643[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (32))){
var inst_99462 = (state_99521[(10)]);
var inst_99461 = (state_99521[(20)]);
var inst_99464 = (state_99521[(11)]);
var inst_99463 = (state_99521[(21)]);
var inst_99476 = (state_99521[(2)]);
var inst_99477 = (inst_99464 + (1));
var tmp99542 = inst_99462;
var tmp99543 = inst_99461;
var tmp99544 = inst_99463;
var inst_99461__$1 = tmp99543;
var inst_99462__$1 = tmp99542;
var inst_99463__$1 = tmp99544;
var inst_99464__$1 = inst_99477;
var state_99521__$1 = (function (){var statearr_99548 = state_99521;
(statearr_99548[(10)] = inst_99462__$1);

(statearr_99548[(22)] = inst_99476);

(statearr_99548[(20)] = inst_99461__$1);

(statearr_99548[(11)] = inst_99464__$1);

(statearr_99548[(21)] = inst_99463__$1);

return statearr_99548;
})();
var statearr_99549_99644 = state_99521__$1;
(statearr_99549_99644[(2)] = null);

(statearr_99549_99644[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (40))){
var inst_99489 = (state_99521[(23)]);
var inst_99493 = done.call(null,null);
var inst_99494 = cljs.core.async.untap_STAR_.call(null,m,inst_99489);
var state_99521__$1 = (function (){var statearr_99550 = state_99521;
(statearr_99550[(24)] = inst_99493);

return statearr_99550;
})();
var statearr_99551_99645 = state_99521__$1;
(statearr_99551_99645[(2)] = inst_99494);

(statearr_99551_99645[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (33))){
var inst_99480 = (state_99521[(25)]);
var inst_99482 = cljs.core.chunked_seq_QMARK_.call(null,inst_99480);
var state_99521__$1 = state_99521;
if(inst_99482){
var statearr_99552_99646 = state_99521__$1;
(statearr_99552_99646[(1)] = (36));

} else {
var statearr_99553_99647 = state_99521__$1;
(statearr_99553_99647[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (13))){
var inst_99412 = (state_99521[(26)]);
var inst_99415 = cljs.core.async.close_BANG_.call(null,inst_99412);
var state_99521__$1 = state_99521;
var statearr_99568_99648 = state_99521__$1;
(statearr_99568_99648[(2)] = inst_99415);

(statearr_99568_99648[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (22))){
var inst_99433 = (state_99521[(8)]);
var inst_99436 = cljs.core.async.close_BANG_.call(null,inst_99433);
var state_99521__$1 = state_99521;
var statearr_99569_99649 = state_99521__$1;
(statearr_99569_99649[(2)] = inst_99436);

(statearr_99569_99649[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (36))){
var inst_99480 = (state_99521[(25)]);
var inst_99484 = cljs.core.chunk_first.call(null,inst_99480);
var inst_99485 = cljs.core.chunk_rest.call(null,inst_99480);
var inst_99486 = cljs.core.count.call(null,inst_99484);
var inst_99461 = inst_99485;
var inst_99462 = inst_99484;
var inst_99463 = inst_99486;
var inst_99464 = (0);
var state_99521__$1 = (function (){var statearr_99570 = state_99521;
(statearr_99570[(10)] = inst_99462);

(statearr_99570[(20)] = inst_99461);

(statearr_99570[(11)] = inst_99464);

(statearr_99570[(21)] = inst_99463);

return statearr_99570;
})();
var statearr_99571_99650 = state_99521__$1;
(statearr_99571_99650[(2)] = null);

(statearr_99571_99650[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (41))){
var inst_99480 = (state_99521[(25)]);
var inst_99496 = (state_99521[(2)]);
var inst_99497 = cljs.core.next.call(null,inst_99480);
var inst_99461 = inst_99497;
var inst_99462 = null;
var inst_99463 = (0);
var inst_99464 = (0);
var state_99521__$1 = (function (){var statearr_99572 = state_99521;
(statearr_99572[(27)] = inst_99496);

(statearr_99572[(10)] = inst_99462);

(statearr_99572[(20)] = inst_99461);

(statearr_99572[(11)] = inst_99464);

(statearr_99572[(21)] = inst_99463);

return statearr_99572;
})();
var statearr_99573_99651 = state_99521__$1;
(statearr_99573_99651[(2)] = null);

(statearr_99573_99651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (43))){
var state_99521__$1 = state_99521;
var statearr_99574_99652 = state_99521__$1;
(statearr_99574_99652[(2)] = null);

(statearr_99574_99652[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (29))){
var inst_99505 = (state_99521[(2)]);
var state_99521__$1 = state_99521;
var statearr_99575_99655 = state_99521__$1;
(statearr_99575_99655[(2)] = inst_99505);

(statearr_99575_99655[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (44))){
var inst_99514 = (state_99521[(2)]);
var state_99521__$1 = (function (){var statearr_99576 = state_99521;
(statearr_99576[(28)] = inst_99514);

return statearr_99576;
})();
var statearr_99577_99657 = state_99521__$1;
(statearr_99577_99657[(2)] = null);

(statearr_99577_99657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (6))){
var inst_99453 = (state_99521[(29)]);
var inst_99452 = cljs.core.deref.call(null,cs);
var inst_99453__$1 = cljs.core.keys.call(null,inst_99452);
var inst_99454 = cljs.core.count.call(null,inst_99453__$1);
var inst_99455 = cljs.core.reset_BANG_.call(null,dctr,inst_99454);
var inst_99460 = cljs.core.seq.call(null,inst_99453__$1);
var inst_99461 = inst_99460;
var inst_99462 = null;
var inst_99463 = (0);
var inst_99464 = (0);
var state_99521__$1 = (function (){var statearr_99578 = state_99521;
(statearr_99578[(30)] = inst_99455);

(statearr_99578[(10)] = inst_99462);

(statearr_99578[(29)] = inst_99453__$1);

(statearr_99578[(20)] = inst_99461);

(statearr_99578[(11)] = inst_99464);

(statearr_99578[(21)] = inst_99463);

return statearr_99578;
})();
var statearr_99579_99664 = state_99521__$1;
(statearr_99579_99664[(2)] = null);

(statearr_99579_99664[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (28))){
var inst_99480 = (state_99521[(25)]);
var inst_99461 = (state_99521[(20)]);
var inst_99480__$1 = cljs.core.seq.call(null,inst_99461);
var state_99521__$1 = (function (){var statearr_99580 = state_99521;
(statearr_99580[(25)] = inst_99480__$1);

return statearr_99580;
})();
if(inst_99480__$1){
var statearr_99581_99665 = state_99521__$1;
(statearr_99581_99665[(1)] = (33));

} else {
var statearr_99582_99666 = state_99521__$1;
(statearr_99582_99666[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (25))){
var inst_99464 = (state_99521[(11)]);
var inst_99463 = (state_99521[(21)]);
var inst_99466 = (inst_99464 < inst_99463);
var inst_99467 = inst_99466;
var state_99521__$1 = state_99521;
if(cljs.core.truth_(inst_99467)){
var statearr_99583_99667 = state_99521__$1;
(statearr_99583_99667[(1)] = (27));

} else {
var statearr_99584_99668 = state_99521__$1;
(statearr_99584_99668[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (34))){
var state_99521__$1 = state_99521;
var statearr_99585_99669 = state_99521__$1;
(statearr_99585_99669[(2)] = null);

(statearr_99585_99669[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (17))){
var state_99521__$1 = state_99521;
var statearr_99586_99670 = state_99521__$1;
(statearr_99586_99670[(2)] = null);

(statearr_99586_99670[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (3))){
var inst_99519 = (state_99521[(2)]);
var state_99521__$1 = state_99521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_99521__$1,inst_99519);
} else {
if((state_val_99522 === (12))){
var inst_99448 = (state_99521[(2)]);
var state_99521__$1 = state_99521;
var statearr_99587_99671 = state_99521__$1;
(statearr_99587_99671[(2)] = inst_99448);

(statearr_99587_99671[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (2))){
var state_99521__$1 = state_99521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_99521__$1,(4),ch);
} else {
if((state_val_99522 === (23))){
var state_99521__$1 = state_99521;
var statearr_99588_99672 = state_99521__$1;
(statearr_99588_99672[(2)] = null);

(statearr_99588_99672[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (35))){
var inst_99503 = (state_99521[(2)]);
var state_99521__$1 = state_99521;
var statearr_99589_99673 = state_99521__$1;
(statearr_99589_99673[(2)] = inst_99503);

(statearr_99589_99673[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (19))){
var inst_99422 = (state_99521[(7)]);
var inst_99426 = cljs.core.chunk_first.call(null,inst_99422);
var inst_99427 = cljs.core.chunk_rest.call(null,inst_99422);
var inst_99428 = cljs.core.count.call(null,inst_99426);
var inst_99402 = inst_99427;
var inst_99403 = inst_99426;
var inst_99404 = inst_99428;
var inst_99405 = (0);
var state_99521__$1 = (function (){var statearr_99590 = state_99521;
(statearr_99590[(13)] = inst_99402);

(statearr_99590[(14)] = inst_99404);

(statearr_99590[(15)] = inst_99403);

(statearr_99590[(16)] = inst_99405);

return statearr_99590;
})();
var statearr_99591_99678 = state_99521__$1;
(statearr_99591_99678[(2)] = null);

(statearr_99591_99678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (11))){
var inst_99422 = (state_99521[(7)]);
var inst_99402 = (state_99521[(13)]);
var inst_99422__$1 = cljs.core.seq.call(null,inst_99402);
var state_99521__$1 = (function (){var statearr_99592 = state_99521;
(statearr_99592[(7)] = inst_99422__$1);

return statearr_99592;
})();
if(inst_99422__$1){
var statearr_99593_99679 = state_99521__$1;
(statearr_99593_99679[(1)] = (16));

} else {
var statearr_99594_99681 = state_99521__$1;
(statearr_99594_99681[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (9))){
var inst_99450 = (state_99521[(2)]);
var state_99521__$1 = state_99521;
var statearr_99595_99682 = state_99521__$1;
(statearr_99595_99682[(2)] = inst_99450);

(statearr_99595_99682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (5))){
var inst_99400 = cljs.core.deref.call(null,cs);
var inst_99401 = cljs.core.seq.call(null,inst_99400);
var inst_99402 = inst_99401;
var inst_99403 = null;
var inst_99404 = (0);
var inst_99405 = (0);
var state_99521__$1 = (function (){var statearr_99596 = state_99521;
(statearr_99596[(13)] = inst_99402);

(statearr_99596[(14)] = inst_99404);

(statearr_99596[(15)] = inst_99403);

(statearr_99596[(16)] = inst_99405);

return statearr_99596;
})();
var statearr_99597_99683 = state_99521__$1;
(statearr_99597_99683[(2)] = null);

(statearr_99597_99683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (14))){
var state_99521__$1 = state_99521;
var statearr_99598_99684 = state_99521__$1;
(statearr_99598_99684[(2)] = null);

(statearr_99598_99684[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (45))){
var inst_99511 = (state_99521[(2)]);
var state_99521__$1 = state_99521;
var statearr_99599_99685 = state_99521__$1;
(statearr_99599_99685[(2)] = inst_99511);

(statearr_99599_99685[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (26))){
var inst_99453 = (state_99521[(29)]);
var inst_99507 = (state_99521[(2)]);
var inst_99508 = cljs.core.seq.call(null,inst_99453);
var state_99521__$1 = (function (){var statearr_99600 = state_99521;
(statearr_99600[(31)] = inst_99507);

return statearr_99600;
})();
if(inst_99508){
var statearr_99601_99689 = state_99521__$1;
(statearr_99601_99689[(1)] = (42));

} else {
var statearr_99602_99690 = state_99521__$1;
(statearr_99602_99690[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (16))){
var inst_99422 = (state_99521[(7)]);
var inst_99424 = cljs.core.chunked_seq_QMARK_.call(null,inst_99422);
var state_99521__$1 = state_99521;
if(inst_99424){
var statearr_99603_99691 = state_99521__$1;
(statearr_99603_99691[(1)] = (19));

} else {
var statearr_99604_99692 = state_99521__$1;
(statearr_99604_99692[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (38))){
var inst_99500 = (state_99521[(2)]);
var state_99521__$1 = state_99521;
var statearr_99605_99693 = state_99521__$1;
(statearr_99605_99693[(2)] = inst_99500);

(statearr_99605_99693[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (30))){
var state_99521__$1 = state_99521;
var statearr_99606_99694 = state_99521__$1;
(statearr_99606_99694[(2)] = null);

(statearr_99606_99694[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (10))){
var inst_99403 = (state_99521[(15)]);
var inst_99405 = (state_99521[(16)]);
var inst_99411 = cljs.core._nth.call(null,inst_99403,inst_99405);
var inst_99412 = cljs.core.nth.call(null,inst_99411,(0),null);
var inst_99413 = cljs.core.nth.call(null,inst_99411,(1),null);
var state_99521__$1 = (function (){var statearr_99610 = state_99521;
(statearr_99610[(26)] = inst_99412);

return statearr_99610;
})();
if(cljs.core.truth_(inst_99413)){
var statearr_99611_99695 = state_99521__$1;
(statearr_99611_99695[(1)] = (13));

} else {
var statearr_99612_99696 = state_99521__$1;
(statearr_99612_99696[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (18))){
var inst_99446 = (state_99521[(2)]);
var state_99521__$1 = state_99521;
var statearr_99613_99697 = state_99521__$1;
(statearr_99613_99697[(2)] = inst_99446);

(statearr_99613_99697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (42))){
var state_99521__$1 = state_99521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_99521__$1,(45),dchan);
} else {
if((state_val_99522 === (37))){
var inst_99480 = (state_99521[(25)]);
var inst_99489 = (state_99521[(23)]);
var inst_99393 = (state_99521[(12)]);
var inst_99489__$1 = cljs.core.first.call(null,inst_99480);
var inst_99490 = cljs.core.async.put_BANG_.call(null,inst_99489__$1,inst_99393,done);
var state_99521__$1 = (function (){var statearr_99614 = state_99521;
(statearr_99614[(23)] = inst_99489__$1);

return statearr_99614;
})();
if(cljs.core.truth_(inst_99490)){
var statearr_99615_99698 = state_99521__$1;
(statearr_99615_99698[(1)] = (39));

} else {
var statearr_99616_99699 = state_99521__$1;
(statearr_99616_99699[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99522 === (8))){
var inst_99404 = (state_99521[(14)]);
var inst_99405 = (state_99521[(16)]);
var inst_99407 = (inst_99405 < inst_99404);
var inst_99408 = inst_99407;
var state_99521__$1 = state_99521;
if(cljs.core.truth_(inst_99408)){
var statearr_99617_99701 = state_99521__$1;
(statearr_99617_99701[(1)] = (10));

} else {
var statearr_99618_99702 = state_99521__$1;
(statearr_99618_99702[(1)] = (11));

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
});})(c__40985__auto___99629,cs,m,dchan,dctr,done))
;
return ((function (switch__40398__auto__,c__40985__auto___99629,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40399__auto__ = null;
var cljs$core$async$mult_$_state_machine__40399__auto____0 = (function (){
var statearr_99622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_99622[(0)] = cljs$core$async$mult_$_state_machine__40399__auto__);

(statearr_99622[(1)] = (1));

return statearr_99622;
});
var cljs$core$async$mult_$_state_machine__40399__auto____1 = (function (state_99521){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_99521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e99623){if((e99623 instanceof Object)){
var ex__40402__auto__ = e99623;
var statearr_99624_99704 = state_99521;
(statearr_99624_99704[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_99521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e99623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__99705 = state_99521;
state_99521 = G__99705;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40399__auto__ = function(state_99521){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40399__auto____1.call(this,state_99521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40399__auto____0;
cljs$core$async$mult_$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40399__auto____1;
return cljs$core$async$mult_$_state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___99629,cs,m,dchan,dctr,done))
})();
var state__40987__auto__ = (function (){var statearr_99625 = f__40986__auto__.call(null);
(statearr_99625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___99629);

return statearr_99625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___99629,cs,m,dchan,dctr,done))
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
var args99706 = [];
var len__36461__auto___99711 = arguments.length;
var i__36462__auto___99712 = (0);
while(true){
if((i__36462__auto___99712 < len__36461__auto___99711)){
args99706.push((arguments[i__36462__auto___99712]));

var G__99713 = (i__36462__auto___99712 + (1));
i__36462__auto___99712 = G__99713;
continue;
} else {
}
break;
}

var G__99708 = args99706.length;
switch (G__99708) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args99706.length)].join('')));

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
var x__36055__auto__ = (((m == null))?null:m);
var m__36056__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,m,ch);
} else {
var m__36056__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,m,ch);
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
var x__36055__auto__ = (((m == null))?null:m);
var m__36056__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,m,ch);
} else {
var m__36056__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,m,ch);
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
var x__36055__auto__ = (((m == null))?null:m);
var m__36056__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,m);
} else {
var m__36056__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,m);
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
var x__36055__auto__ = (((m == null))?null:m);
var m__36056__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,m,state_map);
} else {
var m__36056__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,m,state_map);
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
var x__36055__auto__ = (((m == null))?null:m);
var m__36056__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,m,mode);
} else {
var m__36056__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__36468__auto__ = [];
var len__36461__auto___99728 = arguments.length;
var i__36462__auto___99735 = (0);
while(true){
if((i__36462__auto___99735 < len__36461__auto___99728)){
args__36468__auto__.push((arguments[i__36462__auto___99735]));

var G__99736 = (i__36462__auto___99735 + (1));
i__36462__auto___99735 = G__99736;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((3) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36469__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__99722){
var map__99723 = p__99722;
var map__99723__$1 = ((((!((map__99723 == null)))?((((map__99723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__99723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__99723):map__99723);
var opts = map__99723__$1;
var statearr_99725_99737 = state;
(statearr_99725_99737[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__99723,map__99723__$1,opts){
return (function (val){
var statearr_99726_99738 = state;
(statearr_99726_99738[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__99723,map__99723__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_99727_99739 = state;
(statearr_99727_99739[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq99715){
var G__99716 = cljs.core.first.call(null,seq99715);
var seq99715__$1 = cljs.core.next.call(null,seq99715);
var G__99717 = cljs.core.first.call(null,seq99715__$1);
var seq99715__$2 = cljs.core.next.call(null,seq99715__$1);
var G__99718 = cljs.core.first.call(null,seq99715__$2);
var seq99715__$3 = cljs.core.next.call(null,seq99715__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__99716,G__99717,G__99718,seq99715__$3);
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
if(typeof cljs.core.async.t_cljs$core$async99914 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async99914 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta99915){
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
this.meta99915 = meta99915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async99914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_99916,meta99915__$1){
var self__ = this;
var _99916__$1 = this;
return (new cljs.core.async.t_cljs$core$async99914(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta99915__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async99914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_99916){
var self__ = this;
var _99916__$1 = this;
return self__.meta99915;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async99914.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async99914.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async99914.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async99914.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async99914.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async99914.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async99914.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async99914.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async99914.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta99915","meta99915",1972062901,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async99914.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async99914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async99914";

cljs.core.async.t_cljs$core$async99914.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async99914");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async99914 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async99914(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta99915){
return (new cljs.core.async.t_cljs$core$async99914(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta99915));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async99914(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40985__auto___100095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___100095,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___100095,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_100015){
var state_val_100016 = (state_100015[(1)]);
if((state_val_100016 === (7))){
var inst_99933 = (state_100015[(2)]);
var state_100015__$1 = state_100015;
var statearr_100017_100097 = state_100015__$1;
(statearr_100017_100097[(2)] = inst_99933);

(statearr_100017_100097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (20))){
var inst_99945 = (state_100015[(7)]);
var state_100015__$1 = state_100015;
var statearr_100018_100099 = state_100015__$1;
(statearr_100018_100099[(2)] = inst_99945);

(statearr_100018_100099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (27))){
var state_100015__$1 = state_100015;
var statearr_100019_100100 = state_100015__$1;
(statearr_100019_100100[(2)] = null);

(statearr_100019_100100[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (1))){
var inst_99921 = (state_100015[(8)]);
var inst_99921__$1 = calc_state.call(null);
var inst_99923 = (inst_99921__$1 == null);
var inst_99924 = cljs.core.not.call(null,inst_99923);
var state_100015__$1 = (function (){var statearr_100020 = state_100015;
(statearr_100020[(8)] = inst_99921__$1);

return statearr_100020;
})();
if(inst_99924){
var statearr_100021_100101 = state_100015__$1;
(statearr_100021_100101[(1)] = (2));

} else {
var statearr_100022_100102 = state_100015__$1;
(statearr_100022_100102[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (24))){
var inst_99989 = (state_100015[(9)]);
var inst_99975 = (state_100015[(10)]);
var inst_99968 = (state_100015[(11)]);
var inst_99989__$1 = inst_99968.call(null,inst_99975);
var state_100015__$1 = (function (){var statearr_100023 = state_100015;
(statearr_100023[(9)] = inst_99989__$1);

return statearr_100023;
})();
if(cljs.core.truth_(inst_99989__$1)){
var statearr_100024_100105 = state_100015__$1;
(statearr_100024_100105[(1)] = (29));

} else {
var statearr_100025_100106 = state_100015__$1;
(statearr_100025_100106[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (4))){
var inst_99936 = (state_100015[(2)]);
var state_100015__$1 = state_100015;
if(cljs.core.truth_(inst_99936)){
var statearr_100026_100107 = state_100015__$1;
(statearr_100026_100107[(1)] = (8));

} else {
var statearr_100027_100108 = state_100015__$1;
(statearr_100027_100108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (15))){
var inst_99962 = (state_100015[(2)]);
var state_100015__$1 = state_100015;
if(cljs.core.truth_(inst_99962)){
var statearr_100028_100109 = state_100015__$1;
(statearr_100028_100109[(1)] = (19));

} else {
var statearr_100029_100110 = state_100015__$1;
(statearr_100029_100110[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (21))){
var inst_99967 = (state_100015[(12)]);
var inst_99967__$1 = (state_100015[(2)]);
var inst_99968 = cljs.core.get.call(null,inst_99967__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_99969 = cljs.core.get.call(null,inst_99967__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_99970 = cljs.core.get.call(null,inst_99967__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_100015__$1 = (function (){var statearr_100030 = state_100015;
(statearr_100030[(12)] = inst_99967__$1);

(statearr_100030[(11)] = inst_99968);

(statearr_100030[(13)] = inst_99969);

return statearr_100030;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_100015__$1,(22),inst_99970);
} else {
if((state_val_100016 === (31))){
var inst_99997 = (state_100015[(2)]);
var state_100015__$1 = state_100015;
if(cljs.core.truth_(inst_99997)){
var statearr_100031_100111 = state_100015__$1;
(statearr_100031_100111[(1)] = (32));

} else {
var statearr_100032_100112 = state_100015__$1;
(statearr_100032_100112[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (32))){
var inst_99974 = (state_100015[(14)]);
var state_100015__$1 = state_100015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_100015__$1,(35),out,inst_99974);
} else {
if((state_val_100016 === (33))){
var inst_99967 = (state_100015[(12)]);
var inst_99945 = inst_99967;
var state_100015__$1 = (function (){var statearr_100033 = state_100015;
(statearr_100033[(7)] = inst_99945);

return statearr_100033;
})();
var statearr_100034_100113 = state_100015__$1;
(statearr_100034_100113[(2)] = null);

(statearr_100034_100113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (13))){
var inst_99945 = (state_100015[(7)]);
var inst_99952 = inst_99945.cljs$lang$protocol_mask$partition0$;
var inst_99953 = (inst_99952 & (64));
var inst_99954 = inst_99945.cljs$core$ISeq$;
var inst_99955 = (inst_99953) || (inst_99954);
var state_100015__$1 = state_100015;
if(cljs.core.truth_(inst_99955)){
var statearr_100035_100114 = state_100015__$1;
(statearr_100035_100114[(1)] = (16));

} else {
var statearr_100036_100115 = state_100015__$1;
(statearr_100036_100115[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (22))){
var inst_99974 = (state_100015[(14)]);
var inst_99975 = (state_100015[(10)]);
var inst_99973 = (state_100015[(2)]);
var inst_99974__$1 = cljs.core.nth.call(null,inst_99973,(0),null);
var inst_99975__$1 = cljs.core.nth.call(null,inst_99973,(1),null);
var inst_99976 = (inst_99974__$1 == null);
var inst_99977 = cljs.core._EQ_.call(null,inst_99975__$1,change);
var inst_99978 = (inst_99976) || (inst_99977);
var state_100015__$1 = (function (){var statearr_100037 = state_100015;
(statearr_100037[(14)] = inst_99974__$1);

(statearr_100037[(10)] = inst_99975__$1);

return statearr_100037;
})();
if(cljs.core.truth_(inst_99978)){
var statearr_100038_100116 = state_100015__$1;
(statearr_100038_100116[(1)] = (23));

} else {
var statearr_100039_100117 = state_100015__$1;
(statearr_100039_100117[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (36))){
var inst_99967 = (state_100015[(12)]);
var inst_99945 = inst_99967;
var state_100015__$1 = (function (){var statearr_100040 = state_100015;
(statearr_100040[(7)] = inst_99945);

return statearr_100040;
})();
var statearr_100041_100118 = state_100015__$1;
(statearr_100041_100118[(2)] = null);

(statearr_100041_100118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (29))){
var inst_99989 = (state_100015[(9)]);
var state_100015__$1 = state_100015;
var statearr_100042_100119 = state_100015__$1;
(statearr_100042_100119[(2)] = inst_99989);

(statearr_100042_100119[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (6))){
var state_100015__$1 = state_100015;
var statearr_100043_100120 = state_100015__$1;
(statearr_100043_100120[(2)] = false);

(statearr_100043_100120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (28))){
var inst_99985 = (state_100015[(2)]);
var inst_99986 = calc_state.call(null);
var inst_99945 = inst_99986;
var state_100015__$1 = (function (){var statearr_100044 = state_100015;
(statearr_100044[(15)] = inst_99985);

(statearr_100044[(7)] = inst_99945);

return statearr_100044;
})();
var statearr_100045_100121 = state_100015__$1;
(statearr_100045_100121[(2)] = null);

(statearr_100045_100121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (25))){
var inst_100011 = (state_100015[(2)]);
var state_100015__$1 = state_100015;
var statearr_100046_100122 = state_100015__$1;
(statearr_100046_100122[(2)] = inst_100011);

(statearr_100046_100122[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (34))){
var inst_100009 = (state_100015[(2)]);
var state_100015__$1 = state_100015;
var statearr_100047_100123 = state_100015__$1;
(statearr_100047_100123[(2)] = inst_100009);

(statearr_100047_100123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (17))){
var state_100015__$1 = state_100015;
var statearr_100048_100124 = state_100015__$1;
(statearr_100048_100124[(2)] = false);

(statearr_100048_100124[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (3))){
var state_100015__$1 = state_100015;
var statearr_100049_100125 = state_100015__$1;
(statearr_100049_100125[(2)] = false);

(statearr_100049_100125[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (12))){
var inst_100013 = (state_100015[(2)]);
var state_100015__$1 = state_100015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_100015__$1,inst_100013);
} else {
if((state_val_100016 === (2))){
var inst_99921 = (state_100015[(8)]);
var inst_99926 = inst_99921.cljs$lang$protocol_mask$partition0$;
var inst_99927 = (inst_99926 & (64));
var inst_99928 = inst_99921.cljs$core$ISeq$;
var inst_99929 = (inst_99927) || (inst_99928);
var state_100015__$1 = state_100015;
if(cljs.core.truth_(inst_99929)){
var statearr_100050_100126 = state_100015__$1;
(statearr_100050_100126[(1)] = (5));

} else {
var statearr_100051_100127 = state_100015__$1;
(statearr_100051_100127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (23))){
var inst_99974 = (state_100015[(14)]);
var inst_99980 = (inst_99974 == null);
var state_100015__$1 = state_100015;
if(cljs.core.truth_(inst_99980)){
var statearr_100052_100128 = state_100015__$1;
(statearr_100052_100128[(1)] = (26));

} else {
var statearr_100053_100129 = state_100015__$1;
(statearr_100053_100129[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (35))){
var inst_100000 = (state_100015[(2)]);
var state_100015__$1 = state_100015;
if(cljs.core.truth_(inst_100000)){
var statearr_100054_100130 = state_100015__$1;
(statearr_100054_100130[(1)] = (36));

} else {
var statearr_100055_100131 = state_100015__$1;
(statearr_100055_100131[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (19))){
var inst_99945 = (state_100015[(7)]);
var inst_99964 = cljs.core.apply.call(null,cljs.core.hash_map,inst_99945);
var state_100015__$1 = state_100015;
var statearr_100056_100132 = state_100015__$1;
(statearr_100056_100132[(2)] = inst_99964);

(statearr_100056_100132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (11))){
var inst_99945 = (state_100015[(7)]);
var inst_99949 = (inst_99945 == null);
var inst_99950 = cljs.core.not.call(null,inst_99949);
var state_100015__$1 = state_100015;
if(inst_99950){
var statearr_100057_100135 = state_100015__$1;
(statearr_100057_100135[(1)] = (13));

} else {
var statearr_100058_100136 = state_100015__$1;
(statearr_100058_100136[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (9))){
var inst_99921 = (state_100015[(8)]);
var state_100015__$1 = state_100015;
var statearr_100059_100137 = state_100015__$1;
(statearr_100059_100137[(2)] = inst_99921);

(statearr_100059_100137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (5))){
var state_100015__$1 = state_100015;
var statearr_100060_100141 = state_100015__$1;
(statearr_100060_100141[(2)] = true);

(statearr_100060_100141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (14))){
var state_100015__$1 = state_100015;
var statearr_100061_100142 = state_100015__$1;
(statearr_100061_100142[(2)] = false);

(statearr_100061_100142[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (26))){
var inst_99975 = (state_100015[(10)]);
var inst_99982 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_99975);
var state_100015__$1 = state_100015;
var statearr_100062_100143 = state_100015__$1;
(statearr_100062_100143[(2)] = inst_99982);

(statearr_100062_100143[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (16))){
var state_100015__$1 = state_100015;
var statearr_100063_100146 = state_100015__$1;
(statearr_100063_100146[(2)] = true);

(statearr_100063_100146[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (38))){
var inst_100005 = (state_100015[(2)]);
var state_100015__$1 = state_100015;
var statearr_100064_100147 = state_100015__$1;
(statearr_100064_100147[(2)] = inst_100005);

(statearr_100064_100147[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (30))){
var inst_99975 = (state_100015[(10)]);
var inst_99968 = (state_100015[(11)]);
var inst_99969 = (state_100015[(13)]);
var inst_99992 = cljs.core.empty_QMARK_.call(null,inst_99968);
var inst_99993 = inst_99969.call(null,inst_99975);
var inst_99994 = cljs.core.not.call(null,inst_99993);
var inst_99995 = (inst_99992) && (inst_99994);
var state_100015__$1 = state_100015;
var statearr_100065_100151 = state_100015__$1;
(statearr_100065_100151[(2)] = inst_99995);

(statearr_100065_100151[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (10))){
var inst_99921 = (state_100015[(8)]);
var inst_99941 = (state_100015[(2)]);
var inst_99942 = cljs.core.get.call(null,inst_99941,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_99943 = cljs.core.get.call(null,inst_99941,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_99944 = cljs.core.get.call(null,inst_99941,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_99945 = inst_99921;
var state_100015__$1 = (function (){var statearr_100066 = state_100015;
(statearr_100066[(16)] = inst_99942);

(statearr_100066[(17)] = inst_99943);

(statearr_100066[(7)] = inst_99945);

(statearr_100066[(18)] = inst_99944);

return statearr_100066;
})();
var statearr_100067_100153 = state_100015__$1;
(statearr_100067_100153[(2)] = null);

(statearr_100067_100153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (18))){
var inst_99959 = (state_100015[(2)]);
var state_100015__$1 = state_100015;
var statearr_100068_100155 = state_100015__$1;
(statearr_100068_100155[(2)] = inst_99959);

(statearr_100068_100155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (37))){
var state_100015__$1 = state_100015;
var statearr_100069_100156 = state_100015__$1;
(statearr_100069_100156[(2)] = null);

(statearr_100069_100156[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100016 === (8))){
var inst_99921 = (state_100015[(8)]);
var inst_99938 = cljs.core.apply.call(null,cljs.core.hash_map,inst_99921);
var state_100015__$1 = state_100015;
var statearr_100070_100159 = state_100015__$1;
(statearr_100070_100159[(2)] = inst_99938);

(statearr_100070_100159[(1)] = (10));


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
});})(c__40985__auto___100095,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40398__auto__,c__40985__auto___100095,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40399__auto__ = null;
var cljs$core$async$mix_$_state_machine__40399__auto____0 = (function (){
var statearr_100074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_100074[(0)] = cljs$core$async$mix_$_state_machine__40399__auto__);

(statearr_100074[(1)] = (1));

return statearr_100074;
});
var cljs$core$async$mix_$_state_machine__40399__auto____1 = (function (state_100015){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_100015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e100075){if((e100075 instanceof Object)){
var ex__40402__auto__ = e100075;
var statearr_100076_100162 = state_100015;
(statearr_100076_100162[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_100015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e100075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__100164 = state_100015;
state_100015 = G__100164;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40399__auto__ = function(state_100015){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40399__auto____1.call(this,state_100015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40399__auto____0;
cljs$core$async$mix_$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40399__auto____1;
return cljs$core$async$mix_$_state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___100095,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40987__auto__ = (function (){var statearr_100080 = f__40986__auto__.call(null);
(statearr_100080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___100095);

return statearr_100080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___100095,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__36055__auto__ = (((p == null))?null:p);
var m__36056__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__36056__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__36055__auto__ = (((p == null))?null:p);
var m__36056__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,p,v,ch);
} else {
var m__36056__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args100176 = [];
var len__36461__auto___100202 = arguments.length;
var i__36462__auto___100203 = (0);
while(true){
if((i__36462__auto___100203 < len__36461__auto___100202)){
args100176.push((arguments[i__36462__auto___100203]));

var G__100204 = (i__36462__auto___100203 + (1));
i__36462__auto___100203 = G__100204;
continue;
} else {
}
break;
}

var G__100184 = args100176.length;
switch (G__100184) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args100176.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__36055__auto__ = (((p == null))?null:p);
var m__36056__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,p);
} else {
var m__36056__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,p);
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
var x__36055__auto__ = (((p == null))?null:p);
var m__36056__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36055__auto__)]);
if(!((m__36056__auto__ == null))){
return m__36056__auto__.call(null,p,v);
} else {
var m__36056__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36056__auto____$1 == null))){
return m__36056__auto____$1.call(null,p,v);
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
var args100208 = [];
var len__36461__auto___100396 = arguments.length;
var i__36462__auto___100397 = (0);
while(true){
if((i__36462__auto___100397 < len__36461__auto___100396)){
args100208.push((arguments[i__36462__auto___100397]));

var G__100398 = (i__36462__auto___100397 + (1));
i__36462__auto___100397 = G__100398;
continue;
} else {
}
break;
}

var G__100215 = args100208.length;
switch (G__100215) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args100208.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__35392__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__35392__auto__,mults){
return (function (p1__100207_SHARP_){
if(cljs.core.truth_(p1__100207_SHARP_.call(null,topic))){
return p1__100207_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__100207_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35392__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async100218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async100218 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta100219){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta100219 = meta100219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async100218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_100220,meta100219__$1){
var self__ = this;
var _100220__$1 = this;
return (new cljs.core.async.t_cljs$core$async100218(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta100219__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async100218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_100220){
var self__ = this;
var _100220__$1 = this;
return self__.meta100219;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async100218.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async100218.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async100218.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async100218.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async100218.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async100218.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async100218.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async100218.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta100219","meta100219",-1693529413,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async100218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async100218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async100218";

cljs.core.async.t_cljs$core$async100218.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async100218");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async100218 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async100218(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta100219){
return (new cljs.core.async.t_cljs$core$async100218(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta100219));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async100218(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40985__auto___100409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___100409,mults,ensure_mult,p){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___100409,mults,ensure_mult,p){
return (function (state_100317){
var state_val_100318 = (state_100317[(1)]);
if((state_val_100318 === (7))){
var inst_100313 = (state_100317[(2)]);
var state_100317__$1 = state_100317;
var statearr_100319_100417 = state_100317__$1;
(statearr_100319_100417[(2)] = inst_100313);

(statearr_100319_100417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (20))){
var state_100317__$1 = state_100317;
var statearr_100320_100418 = state_100317__$1;
(statearr_100320_100418[(2)] = null);

(statearr_100320_100418[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (1))){
var state_100317__$1 = state_100317;
var statearr_100321_100421 = state_100317__$1;
(statearr_100321_100421[(2)] = null);

(statearr_100321_100421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (24))){
var inst_100296 = (state_100317[(7)]);
var inst_100305 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_100296);
var state_100317__$1 = state_100317;
var statearr_100322_100424 = state_100317__$1;
(statearr_100322_100424[(2)] = inst_100305);

(statearr_100322_100424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (4))){
var inst_100247 = (state_100317[(8)]);
var inst_100247__$1 = (state_100317[(2)]);
var inst_100248 = (inst_100247__$1 == null);
var state_100317__$1 = (function (){var statearr_100323 = state_100317;
(statearr_100323[(8)] = inst_100247__$1);

return statearr_100323;
})();
if(cljs.core.truth_(inst_100248)){
var statearr_100324_100426 = state_100317__$1;
(statearr_100324_100426[(1)] = (5));

} else {
var statearr_100325_100427 = state_100317__$1;
(statearr_100325_100427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (15))){
var inst_100290 = (state_100317[(2)]);
var state_100317__$1 = state_100317;
var statearr_100330_100429 = state_100317__$1;
(statearr_100330_100429[(2)] = inst_100290);

(statearr_100330_100429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (21))){
var inst_100310 = (state_100317[(2)]);
var state_100317__$1 = (function (){var statearr_100331 = state_100317;
(statearr_100331[(9)] = inst_100310);

return statearr_100331;
})();
var statearr_100332_100432 = state_100317__$1;
(statearr_100332_100432[(2)] = null);

(statearr_100332_100432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (13))){
var inst_100271 = (state_100317[(10)]);
var inst_100273 = cljs.core.chunked_seq_QMARK_.call(null,inst_100271);
var state_100317__$1 = state_100317;
if(inst_100273){
var statearr_100333_100434 = state_100317__$1;
(statearr_100333_100434[(1)] = (16));

} else {
var statearr_100334_100437 = state_100317__$1;
(statearr_100334_100437[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (22))){
var inst_100302 = (state_100317[(2)]);
var state_100317__$1 = state_100317;
if(cljs.core.truth_(inst_100302)){
var statearr_100335_100443 = state_100317__$1;
(statearr_100335_100443[(1)] = (23));

} else {
var statearr_100336_100444 = state_100317__$1;
(statearr_100336_100444[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (6))){
var inst_100298 = (state_100317[(11)]);
var inst_100296 = (state_100317[(7)]);
var inst_100247 = (state_100317[(8)]);
var inst_100296__$1 = topic_fn.call(null,inst_100247);
var inst_100297 = cljs.core.deref.call(null,mults);
var inst_100298__$1 = cljs.core.get.call(null,inst_100297,inst_100296__$1);
var state_100317__$1 = (function (){var statearr_100338 = state_100317;
(statearr_100338[(11)] = inst_100298__$1);

(statearr_100338[(7)] = inst_100296__$1);

return statearr_100338;
})();
if(cljs.core.truth_(inst_100298__$1)){
var statearr_100340_100445 = state_100317__$1;
(statearr_100340_100445[(1)] = (19));

} else {
var statearr_100341_100446 = state_100317__$1;
(statearr_100341_100446[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (25))){
var inst_100307 = (state_100317[(2)]);
var state_100317__$1 = state_100317;
var statearr_100342_100447 = state_100317__$1;
(statearr_100342_100447[(2)] = inst_100307);

(statearr_100342_100447[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (17))){
var inst_100271 = (state_100317[(10)]);
var inst_100280 = cljs.core.first.call(null,inst_100271);
var inst_100281 = cljs.core.async.muxch_STAR_.call(null,inst_100280);
var inst_100282 = cljs.core.async.close_BANG_.call(null,inst_100281);
var inst_100284 = cljs.core.next.call(null,inst_100271);
var inst_100257 = inst_100284;
var inst_100258 = null;
var inst_100259 = (0);
var inst_100260 = (0);
var state_100317__$1 = (function (){var statearr_100343 = state_100317;
(statearr_100343[(12)] = inst_100258);

(statearr_100343[(13)] = inst_100282);

(statearr_100343[(14)] = inst_100257);

(statearr_100343[(15)] = inst_100260);

(statearr_100343[(16)] = inst_100259);

return statearr_100343;
})();
var statearr_100345_100449 = state_100317__$1;
(statearr_100345_100449[(2)] = null);

(statearr_100345_100449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (3))){
var inst_100315 = (state_100317[(2)]);
var state_100317__$1 = state_100317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_100317__$1,inst_100315);
} else {
if((state_val_100318 === (12))){
var inst_100292 = (state_100317[(2)]);
var state_100317__$1 = state_100317;
var statearr_100347_100450 = state_100317__$1;
(statearr_100347_100450[(2)] = inst_100292);

(statearr_100347_100450[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (2))){
var state_100317__$1 = state_100317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_100317__$1,(4),ch);
} else {
if((state_val_100318 === (23))){
var state_100317__$1 = state_100317;
var statearr_100348_100454 = state_100317__$1;
(statearr_100348_100454[(2)] = null);

(statearr_100348_100454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (19))){
var inst_100298 = (state_100317[(11)]);
var inst_100247 = (state_100317[(8)]);
var inst_100300 = cljs.core.async.muxch_STAR_.call(null,inst_100298);
var state_100317__$1 = state_100317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_100317__$1,(22),inst_100300,inst_100247);
} else {
if((state_val_100318 === (11))){
var inst_100271 = (state_100317[(10)]);
var inst_100257 = (state_100317[(14)]);
var inst_100271__$1 = cljs.core.seq.call(null,inst_100257);
var state_100317__$1 = (function (){var statearr_100356 = state_100317;
(statearr_100356[(10)] = inst_100271__$1);

return statearr_100356;
})();
if(inst_100271__$1){
var statearr_100357_100455 = state_100317__$1;
(statearr_100357_100455[(1)] = (13));

} else {
var statearr_100359_100456 = state_100317__$1;
(statearr_100359_100456[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (9))){
var inst_100294 = (state_100317[(2)]);
var state_100317__$1 = state_100317;
var statearr_100360_100457 = state_100317__$1;
(statearr_100360_100457[(2)] = inst_100294);

(statearr_100360_100457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (5))){
var inst_100254 = cljs.core.deref.call(null,mults);
var inst_100255 = cljs.core.vals.call(null,inst_100254);
var inst_100256 = cljs.core.seq.call(null,inst_100255);
var inst_100257 = inst_100256;
var inst_100258 = null;
var inst_100259 = (0);
var inst_100260 = (0);
var state_100317__$1 = (function (){var statearr_100362 = state_100317;
(statearr_100362[(12)] = inst_100258);

(statearr_100362[(14)] = inst_100257);

(statearr_100362[(15)] = inst_100260);

(statearr_100362[(16)] = inst_100259);

return statearr_100362;
})();
var statearr_100363_100459 = state_100317__$1;
(statearr_100363_100459[(2)] = null);

(statearr_100363_100459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (14))){
var state_100317__$1 = state_100317;
var statearr_100367_100460 = state_100317__$1;
(statearr_100367_100460[(2)] = null);

(statearr_100367_100460[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (16))){
var inst_100271 = (state_100317[(10)]);
var inst_100275 = cljs.core.chunk_first.call(null,inst_100271);
var inst_100276 = cljs.core.chunk_rest.call(null,inst_100271);
var inst_100277 = cljs.core.count.call(null,inst_100275);
var inst_100257 = inst_100276;
var inst_100258 = inst_100275;
var inst_100259 = inst_100277;
var inst_100260 = (0);
var state_100317__$1 = (function (){var statearr_100368 = state_100317;
(statearr_100368[(12)] = inst_100258);

(statearr_100368[(14)] = inst_100257);

(statearr_100368[(15)] = inst_100260);

(statearr_100368[(16)] = inst_100259);

return statearr_100368;
})();
var statearr_100369_100461 = state_100317__$1;
(statearr_100369_100461[(2)] = null);

(statearr_100369_100461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (10))){
var inst_100258 = (state_100317[(12)]);
var inst_100257 = (state_100317[(14)]);
var inst_100260 = (state_100317[(15)]);
var inst_100259 = (state_100317[(16)]);
var inst_100265 = cljs.core._nth.call(null,inst_100258,inst_100260);
var inst_100266 = cljs.core.async.muxch_STAR_.call(null,inst_100265);
var inst_100267 = cljs.core.async.close_BANG_.call(null,inst_100266);
var inst_100268 = (inst_100260 + (1));
var tmp100364 = inst_100258;
var tmp100365 = inst_100257;
var tmp100366 = inst_100259;
var inst_100257__$1 = tmp100365;
var inst_100258__$1 = tmp100364;
var inst_100259__$1 = tmp100366;
var inst_100260__$1 = inst_100268;
var state_100317__$1 = (function (){var statearr_100371 = state_100317;
(statearr_100371[(12)] = inst_100258__$1);

(statearr_100371[(14)] = inst_100257__$1);

(statearr_100371[(17)] = inst_100267);

(statearr_100371[(15)] = inst_100260__$1);

(statearr_100371[(16)] = inst_100259__$1);

return statearr_100371;
})();
var statearr_100372_100462 = state_100317__$1;
(statearr_100372_100462[(2)] = null);

(statearr_100372_100462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (18))){
var inst_100287 = (state_100317[(2)]);
var state_100317__$1 = state_100317;
var statearr_100374_100463 = state_100317__$1;
(statearr_100374_100463[(2)] = inst_100287);

(statearr_100374_100463[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100318 === (8))){
var inst_100260 = (state_100317[(15)]);
var inst_100259 = (state_100317[(16)]);
var inst_100262 = (inst_100260 < inst_100259);
var inst_100263 = inst_100262;
var state_100317__$1 = state_100317;
if(cljs.core.truth_(inst_100263)){
var statearr_100375_100464 = state_100317__$1;
(statearr_100375_100464[(1)] = (10));

} else {
var statearr_100376_100465 = state_100317__$1;
(statearr_100376_100465[(1)] = (11));

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
});})(c__40985__auto___100409,mults,ensure_mult,p))
;
return ((function (switch__40398__auto__,c__40985__auto___100409,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_100382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_100382[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_100382[(1)] = (1));

return statearr_100382;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_100317){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_100317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e100384){if((e100384 instanceof Object)){
var ex__40402__auto__ = e100384;
var statearr_100385_100467 = state_100317;
(statearr_100385_100467[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_100317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e100384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__100468 = state_100317;
state_100317 = G__100468;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_100317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_100317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___100409,mults,ensure_mult,p))
})();
var state__40987__auto__ = (function (){var statearr_100387 = f__40986__auto__.call(null);
(statearr_100387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___100409);

return statearr_100387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___100409,mults,ensure_mult,p))
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
var args100470 = [];
var len__36461__auto___100473 = arguments.length;
var i__36462__auto___100474 = (0);
while(true){
if((i__36462__auto___100474 < len__36461__auto___100473)){
args100470.push((arguments[i__36462__auto___100474]));

var G__100475 = (i__36462__auto___100474 + (1));
i__36462__auto___100474 = G__100475;
continue;
} else {
}
break;
}

var G__100472 = args100470.length;
switch (G__100472) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args100470.length)].join('')));

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
var args100478 = [];
var len__36461__auto___100482 = arguments.length;
var i__36462__auto___100483 = (0);
while(true){
if((i__36462__auto___100483 < len__36461__auto___100482)){
args100478.push((arguments[i__36462__auto___100483]));

var G__100484 = (i__36462__auto___100483 + (1));
i__36462__auto___100483 = G__100484;
continue;
} else {
}
break;
}

var G__100481 = args100478.length;
switch (G__100481) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args100478.length)].join('')));

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
var args100487 = [];
var len__36461__auto___100567 = arguments.length;
var i__36462__auto___100569 = (0);
while(true){
if((i__36462__auto___100569 < len__36461__auto___100567)){
args100487.push((arguments[i__36462__auto___100569]));

var G__100571 = (i__36462__auto___100569 + (1));
i__36462__auto___100569 = G__100571;
continue;
} else {
}
break;
}

var G__100491 = args100487.length;
switch (G__100491) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args100487.length)].join('')));

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
var c__40985__auto___100577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___100577,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___100577,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_100532){
var state_val_100533 = (state_100532[(1)]);
if((state_val_100533 === (7))){
var state_100532__$1 = state_100532;
var statearr_100534_100578 = state_100532__$1;
(statearr_100534_100578[(2)] = null);

(statearr_100534_100578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100533 === (1))){
var state_100532__$1 = state_100532;
var statearr_100535_100580 = state_100532__$1;
(statearr_100535_100580[(2)] = null);

(statearr_100535_100580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100533 === (4))){
var inst_100495 = (state_100532[(7)]);
var inst_100497 = (inst_100495 < cnt);
var state_100532__$1 = state_100532;
if(cljs.core.truth_(inst_100497)){
var statearr_100536_100581 = state_100532__$1;
(statearr_100536_100581[(1)] = (6));

} else {
var statearr_100537_100582 = state_100532__$1;
(statearr_100537_100582[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100533 === (15))){
var inst_100528 = (state_100532[(2)]);
var state_100532__$1 = state_100532;
var statearr_100538_100583 = state_100532__$1;
(statearr_100538_100583[(2)] = inst_100528);

(statearr_100538_100583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100533 === (13))){
var inst_100520 = cljs.core.async.close_BANG_.call(null,out);
var state_100532__$1 = state_100532;
var statearr_100539_100584 = state_100532__$1;
(statearr_100539_100584[(2)] = inst_100520);

(statearr_100539_100584[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100533 === (6))){
var state_100532__$1 = state_100532;
var statearr_100540_100588 = state_100532__$1;
(statearr_100540_100588[(2)] = null);

(statearr_100540_100588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100533 === (3))){
var inst_100530 = (state_100532[(2)]);
var state_100532__$1 = state_100532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_100532__$1,inst_100530);
} else {
if((state_val_100533 === (12))){
var inst_100517 = (state_100532[(8)]);
var inst_100517__$1 = (state_100532[(2)]);
var inst_100518 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_100517__$1);
var state_100532__$1 = (function (){var statearr_100543 = state_100532;
(statearr_100543[(8)] = inst_100517__$1);

return statearr_100543;
})();
if(cljs.core.truth_(inst_100518)){
var statearr_100544_100592 = state_100532__$1;
(statearr_100544_100592[(1)] = (13));

} else {
var statearr_100545_100593 = state_100532__$1;
(statearr_100545_100593[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100533 === (2))){
var inst_100494 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_100495 = (0);
var state_100532__$1 = (function (){var statearr_100546 = state_100532;
(statearr_100546[(9)] = inst_100494);

(statearr_100546[(7)] = inst_100495);

return statearr_100546;
})();
var statearr_100548_100594 = state_100532__$1;
(statearr_100548_100594[(2)] = null);

(statearr_100548_100594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100533 === (11))){
var inst_100495 = (state_100532[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_100532,(10),Object,null,(9));
var inst_100504 = chs__$1.call(null,inst_100495);
var inst_100505 = done.call(null,inst_100495);
var inst_100506 = cljs.core.async.take_BANG_.call(null,inst_100504,inst_100505);
var state_100532__$1 = state_100532;
var statearr_100549_100595 = state_100532__$1;
(statearr_100549_100595[(2)] = inst_100506);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_100532__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100533 === (9))){
var inst_100495 = (state_100532[(7)]);
var inst_100508 = (state_100532[(2)]);
var inst_100509 = (inst_100495 + (1));
var inst_100495__$1 = inst_100509;
var state_100532__$1 = (function (){var statearr_100550 = state_100532;
(statearr_100550[(7)] = inst_100495__$1);

(statearr_100550[(10)] = inst_100508);

return statearr_100550;
})();
var statearr_100551_100596 = state_100532__$1;
(statearr_100551_100596[(2)] = null);

(statearr_100551_100596[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100533 === (5))){
var inst_100515 = (state_100532[(2)]);
var state_100532__$1 = (function (){var statearr_100552 = state_100532;
(statearr_100552[(11)] = inst_100515);

return statearr_100552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_100532__$1,(12),dchan);
} else {
if((state_val_100533 === (14))){
var inst_100517 = (state_100532[(8)]);
var inst_100523 = cljs.core.apply.call(null,f,inst_100517);
var state_100532__$1 = state_100532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_100532__$1,(16),out,inst_100523);
} else {
if((state_val_100533 === (16))){
var inst_100525 = (state_100532[(2)]);
var state_100532__$1 = (function (){var statearr_100553 = state_100532;
(statearr_100553[(12)] = inst_100525);

return statearr_100553;
})();
var statearr_100554_100597 = state_100532__$1;
(statearr_100554_100597[(2)] = null);

(statearr_100554_100597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100533 === (10))){
var inst_100499 = (state_100532[(2)]);
var inst_100500 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_100532__$1 = (function (){var statearr_100555 = state_100532;
(statearr_100555[(13)] = inst_100499);

return statearr_100555;
})();
var statearr_100556_100598 = state_100532__$1;
(statearr_100556_100598[(2)] = inst_100500);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_100532__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100533 === (8))){
var inst_100513 = (state_100532[(2)]);
var state_100532__$1 = state_100532;
var statearr_100557_100599 = state_100532__$1;
(statearr_100557_100599[(2)] = inst_100513);

(statearr_100557_100599[(1)] = (5));


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
});})(c__40985__auto___100577,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40398__auto__,c__40985__auto___100577,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_100562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_100562[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_100562[(1)] = (1));

return statearr_100562;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_100532){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_100532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e100563){if((e100563 instanceof Object)){
var ex__40402__auto__ = e100563;
var statearr_100564_100604 = state_100532;
(statearr_100564_100604[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_100532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e100563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__100607 = state_100532;
state_100532 = G__100607;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_100532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_100532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___100577,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40987__auto__ = (function (){var statearr_100565 = f__40986__auto__.call(null);
(statearr_100565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___100577);

return statearr_100565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___100577,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args100609 = [];
var len__36461__auto___100682 = arguments.length;
var i__36462__auto___100683 = (0);
while(true){
if((i__36462__auto___100683 < len__36461__auto___100682)){
args100609.push((arguments[i__36462__auto___100683]));

var G__100684 = (i__36462__auto___100683 + (1));
i__36462__auto___100683 = G__100684;
continue;
} else {
}
break;
}

var G__100613 = args100609.length;
switch (G__100613) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args100609.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40985__auto___100686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___100686,out){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___100686,out){
return (function (state_100644){
var state_val_100645 = (state_100644[(1)]);
if((state_val_100645 === (7))){
var inst_100623 = (state_100644[(7)]);
var inst_100624 = (state_100644[(8)]);
var inst_100623__$1 = (state_100644[(2)]);
var inst_100624__$1 = cljs.core.nth.call(null,inst_100623__$1,(0),null);
var inst_100625 = cljs.core.nth.call(null,inst_100623__$1,(1),null);
var inst_100626 = (inst_100624__$1 == null);
var state_100644__$1 = (function (){var statearr_100650 = state_100644;
(statearr_100650[(7)] = inst_100623__$1);

(statearr_100650[(8)] = inst_100624__$1);

(statearr_100650[(9)] = inst_100625);

return statearr_100650;
})();
if(cljs.core.truth_(inst_100626)){
var statearr_100651_100693 = state_100644__$1;
(statearr_100651_100693[(1)] = (8));

} else {
var statearr_100652_100694 = state_100644__$1;
(statearr_100652_100694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100645 === (1))){
var inst_100615 = cljs.core.vec.call(null,chs);
var inst_100616 = inst_100615;
var state_100644__$1 = (function (){var statearr_100653 = state_100644;
(statearr_100653[(10)] = inst_100616);

return statearr_100653;
})();
var statearr_100654_100697 = state_100644__$1;
(statearr_100654_100697[(2)] = null);

(statearr_100654_100697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100645 === (4))){
var inst_100616 = (state_100644[(10)]);
var state_100644__$1 = state_100644;
return cljs.core.async.ioc_alts_BANG_.call(null,state_100644__$1,(7),inst_100616);
} else {
if((state_val_100645 === (6))){
var inst_100640 = (state_100644[(2)]);
var state_100644__$1 = state_100644;
var statearr_100655_100700 = state_100644__$1;
(statearr_100655_100700[(2)] = inst_100640);

(statearr_100655_100700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100645 === (3))){
var inst_100642 = (state_100644[(2)]);
var state_100644__$1 = state_100644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_100644__$1,inst_100642);
} else {
if((state_val_100645 === (2))){
var inst_100616 = (state_100644[(10)]);
var inst_100618 = cljs.core.count.call(null,inst_100616);
var inst_100619 = (inst_100618 > (0));
var state_100644__$1 = state_100644;
if(cljs.core.truth_(inst_100619)){
var statearr_100658_100701 = state_100644__$1;
(statearr_100658_100701[(1)] = (4));

} else {
var statearr_100660_100703 = state_100644__$1;
(statearr_100660_100703[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100645 === (11))){
var inst_100616 = (state_100644[(10)]);
var inst_100633 = (state_100644[(2)]);
var tmp100656 = inst_100616;
var inst_100616__$1 = tmp100656;
var state_100644__$1 = (function (){var statearr_100661 = state_100644;
(statearr_100661[(10)] = inst_100616__$1);

(statearr_100661[(11)] = inst_100633);

return statearr_100661;
})();
var statearr_100662_100710 = state_100644__$1;
(statearr_100662_100710[(2)] = null);

(statearr_100662_100710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100645 === (9))){
var inst_100624 = (state_100644[(8)]);
var state_100644__$1 = state_100644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_100644__$1,(11),out,inst_100624);
} else {
if((state_val_100645 === (5))){
var inst_100638 = cljs.core.async.close_BANG_.call(null,out);
var state_100644__$1 = state_100644;
var statearr_100664_100715 = state_100644__$1;
(statearr_100664_100715[(2)] = inst_100638);

(statearr_100664_100715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100645 === (10))){
var inst_100636 = (state_100644[(2)]);
var state_100644__$1 = state_100644;
var statearr_100668_100716 = state_100644__$1;
(statearr_100668_100716[(2)] = inst_100636);

(statearr_100668_100716[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100645 === (8))){
var inst_100623 = (state_100644[(7)]);
var inst_100616 = (state_100644[(10)]);
var inst_100624 = (state_100644[(8)]);
var inst_100625 = (state_100644[(9)]);
var inst_100628 = (function (){var cs = inst_100616;
var vec__100621 = inst_100623;
var v = inst_100624;
var c = inst_100625;
return ((function (cs,vec__100621,v,c,inst_100623,inst_100616,inst_100624,inst_100625,state_val_100645,c__40985__auto___100686,out){
return (function (p1__100608_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__100608_SHARP_);
});
;})(cs,vec__100621,v,c,inst_100623,inst_100616,inst_100624,inst_100625,state_val_100645,c__40985__auto___100686,out))
})();
var inst_100629 = cljs.core.filterv.call(null,inst_100628,inst_100616);
var inst_100616__$1 = inst_100629;
var state_100644__$1 = (function (){var statearr_100669 = state_100644;
(statearr_100669[(10)] = inst_100616__$1);

return statearr_100669;
})();
var statearr_100670_100723 = state_100644__$1;
(statearr_100670_100723[(2)] = null);

(statearr_100670_100723[(1)] = (2));


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
});})(c__40985__auto___100686,out))
;
return ((function (switch__40398__auto__,c__40985__auto___100686,out){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_100677 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_100677[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_100677[(1)] = (1));

return statearr_100677;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_100644){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_100644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e100678){if((e100678 instanceof Object)){
var ex__40402__auto__ = e100678;
var statearr_100680_100728 = state_100644;
(statearr_100680_100728[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_100644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e100678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__100730 = state_100644;
state_100644 = G__100730;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_100644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_100644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___100686,out))
})();
var state__40987__auto__ = (function (){var statearr_100681 = f__40986__auto__.call(null);
(statearr_100681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___100686);

return statearr_100681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___100686,out))
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
var args100738 = [];
var len__36461__auto___100802 = arguments.length;
var i__36462__auto___100803 = (0);
while(true){
if((i__36462__auto___100803 < len__36461__auto___100802)){
args100738.push((arguments[i__36462__auto___100803]));

var G__100804 = (i__36462__auto___100803 + (1));
i__36462__auto___100803 = G__100804;
continue;
} else {
}
break;
}

var G__100744 = args100738.length;
switch (G__100744) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args100738.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40985__auto___100808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___100808,out){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___100808,out){
return (function (state_100768){
var state_val_100769 = (state_100768[(1)]);
if((state_val_100769 === (7))){
var inst_100750 = (state_100768[(7)]);
var inst_100750__$1 = (state_100768[(2)]);
var inst_100751 = (inst_100750__$1 == null);
var inst_100752 = cljs.core.not.call(null,inst_100751);
var state_100768__$1 = (function (){var statearr_100770 = state_100768;
(statearr_100770[(7)] = inst_100750__$1);

return statearr_100770;
})();
if(inst_100752){
var statearr_100771_100810 = state_100768__$1;
(statearr_100771_100810[(1)] = (8));

} else {
var statearr_100772_100811 = state_100768__$1;
(statearr_100772_100811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100769 === (1))){
var inst_100745 = (0);
var state_100768__$1 = (function (){var statearr_100773 = state_100768;
(statearr_100773[(8)] = inst_100745);

return statearr_100773;
})();
var statearr_100774_100812 = state_100768__$1;
(statearr_100774_100812[(2)] = null);

(statearr_100774_100812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100769 === (4))){
var state_100768__$1 = state_100768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_100768__$1,(7),ch);
} else {
if((state_val_100769 === (6))){
var inst_100763 = (state_100768[(2)]);
var state_100768__$1 = state_100768;
var statearr_100786_100813 = state_100768__$1;
(statearr_100786_100813[(2)] = inst_100763);

(statearr_100786_100813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100769 === (3))){
var inst_100765 = (state_100768[(2)]);
var inst_100766 = cljs.core.async.close_BANG_.call(null,out);
var state_100768__$1 = (function (){var statearr_100787 = state_100768;
(statearr_100787[(9)] = inst_100765);

return statearr_100787;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_100768__$1,inst_100766);
} else {
if((state_val_100769 === (2))){
var inst_100745 = (state_100768[(8)]);
var inst_100747 = (inst_100745 < n);
var state_100768__$1 = state_100768;
if(cljs.core.truth_(inst_100747)){
var statearr_100788_100821 = state_100768__$1;
(statearr_100788_100821[(1)] = (4));

} else {
var statearr_100789_100822 = state_100768__$1;
(statearr_100789_100822[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100769 === (11))){
var inst_100745 = (state_100768[(8)]);
var inst_100755 = (state_100768[(2)]);
var inst_100756 = (inst_100745 + (1));
var inst_100745__$1 = inst_100756;
var state_100768__$1 = (function (){var statearr_100790 = state_100768;
(statearr_100790[(10)] = inst_100755);

(statearr_100790[(8)] = inst_100745__$1);

return statearr_100790;
})();
var statearr_100791_100823 = state_100768__$1;
(statearr_100791_100823[(2)] = null);

(statearr_100791_100823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100769 === (9))){
var state_100768__$1 = state_100768;
var statearr_100792_100825 = state_100768__$1;
(statearr_100792_100825[(2)] = null);

(statearr_100792_100825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100769 === (5))){
var state_100768__$1 = state_100768;
var statearr_100793_100827 = state_100768__$1;
(statearr_100793_100827[(2)] = null);

(statearr_100793_100827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100769 === (10))){
var inst_100760 = (state_100768[(2)]);
var state_100768__$1 = state_100768;
var statearr_100794_100829 = state_100768__$1;
(statearr_100794_100829[(2)] = inst_100760);

(statearr_100794_100829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100769 === (8))){
var inst_100750 = (state_100768[(7)]);
var state_100768__$1 = state_100768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_100768__$1,(11),out,inst_100750);
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
});})(c__40985__auto___100808,out))
;
return ((function (switch__40398__auto__,c__40985__auto___100808,out){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_100798 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_100798[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_100798[(1)] = (1));

return statearr_100798;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_100768){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_100768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e100799){if((e100799 instanceof Object)){
var ex__40402__auto__ = e100799;
var statearr_100800_100834 = state_100768;
(statearr_100800_100834[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_100768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e100799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__100835 = state_100768;
state_100768 = G__100835;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_100768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_100768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___100808,out))
})();
var state__40987__auto__ = (function (){var statearr_100801 = f__40986__auto__.call(null);
(statearr_100801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___100808);

return statearr_100801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___100808,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async100854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async100854 = (function (map_LT_,f,ch,meta100855){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta100855 = meta100855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async100854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100856,meta100855__$1){
var self__ = this;
var _100856__$1 = this;
return (new cljs.core.async.t_cljs$core$async100854(self__.map_LT_,self__.f,self__.ch,meta100855__$1));
});

cljs.core.async.t_cljs$core$async100854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100856){
var self__ = this;
var _100856__$1 = this;
return self__.meta100855;
});

cljs.core.async.t_cljs$core$async100854.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async100854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async100854.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async100854.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async100854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async100859 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async100859 = (function (map_LT_,f,ch,meta100855,_,fn1,meta100860){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta100855 = meta100855;
this._ = _;
this.fn1 = fn1;
this.meta100860 = meta100860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async100859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_100861,meta100860__$1){
var self__ = this;
var _100861__$1 = this;
return (new cljs.core.async.t_cljs$core$async100859(self__.map_LT_,self__.f,self__.ch,self__.meta100855,self__._,self__.fn1,meta100860__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async100859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_100861){
var self__ = this;
var _100861__$1 = this;
return self__.meta100860;
});})(___$1))
;

cljs.core.async.t_cljs$core$async100859.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async100859.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async100859.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async100859.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__100836_SHARP_){
return f1.call(null,(((p1__100836_SHARP_ == null))?null:self__.f.call(null,p1__100836_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async100859.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta100855","meta100855",-1089410056,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async100854","cljs.core.async/t_cljs$core$async100854",570498969,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta100860","meta100860",195672874,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async100859.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async100859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async100859";

cljs.core.async.t_cljs$core$async100859.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async100859");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async100859 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async100859(map_LT___$1,f__$1,ch__$1,meta100855__$1,___$2,fn1__$1,meta100860){
return (new cljs.core.async.t_cljs$core$async100859(map_LT___$1,f__$1,ch__$1,meta100855__$1,___$2,fn1__$1,meta100860));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async100859(self__.map_LT_,self__.f,self__.ch,self__.meta100855,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__35380__auto__ = ret;
if(cljs.core.truth_(and__35380__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__35380__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async100854.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async100854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async100854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta100855","meta100855",-1089410056,null)], null);
});

cljs.core.async.t_cljs$core$async100854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async100854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async100854";

cljs.core.async.t_cljs$core$async100854.cljs$lang$ctorPrWriter = (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async100854");
});

cljs.core.async.__GT_t_cljs$core$async100854 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async100854(map_LT___$1,f__$1,ch__$1,meta100855){
return (new cljs.core.async.t_cljs$core$async100854(map_LT___$1,f__$1,ch__$1,meta100855));
});

}

return (new cljs.core.async.t_cljs$core$async100854(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async100882 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async100882 = (function (map_GT_,f,ch,meta100883){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta100883 = meta100883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async100882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100884,meta100883__$1){
var self__ = this;
var _100884__$1 = this;
return (new cljs.core.async.t_cljs$core$async100882(self__.map_GT_,self__.f,self__.ch,meta100883__$1));
});

cljs.core.async.t_cljs$core$async100882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100884){
var self__ = this;
var _100884__$1 = this;
return self__.meta100883;
});

cljs.core.async.t_cljs$core$async100882.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async100882.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async100882.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async100882.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async100882.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async100882.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async100882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta100883","meta100883",-5955276,null)], null);
});

cljs.core.async.t_cljs$core$async100882.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async100882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async100882";

cljs.core.async.t_cljs$core$async100882.cljs$lang$ctorPrWriter = (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async100882");
});

cljs.core.async.__GT_t_cljs$core$async100882 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async100882(map_GT___$1,f__$1,ch__$1,meta100883){
return (new cljs.core.async.t_cljs$core$async100882(map_GT___$1,f__$1,ch__$1,meta100883));
});

}

return (new cljs.core.async.t_cljs$core$async100882(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async100902 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async100902 = (function (filter_GT_,p,ch,meta100903){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta100903 = meta100903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async100902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100904,meta100903__$1){
var self__ = this;
var _100904__$1 = this;
return (new cljs.core.async.t_cljs$core$async100902(self__.filter_GT_,self__.p,self__.ch,meta100903__$1));
});

cljs.core.async.t_cljs$core$async100902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100904){
var self__ = this;
var _100904__$1 = this;
return self__.meta100903;
});

cljs.core.async.t_cljs$core$async100902.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async100902.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async100902.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async100902.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async100902.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async100902.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async100902.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async100902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta100903","meta100903",1482230929,null)], null);
});

cljs.core.async.t_cljs$core$async100902.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async100902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async100902";

cljs.core.async.t_cljs$core$async100902.cljs$lang$ctorPrWriter = (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async100902");
});

cljs.core.async.__GT_t_cljs$core$async100902 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async100902(filter_GT___$1,p__$1,ch__$1,meta100903){
return (new cljs.core.async.t_cljs$core$async100902(filter_GT___$1,p__$1,ch__$1,meta100903));
});

}

return (new cljs.core.async.t_cljs$core$async100902(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args100906 = [];
var len__36461__auto___100965 = arguments.length;
var i__36462__auto___100966 = (0);
while(true){
if((i__36462__auto___100966 < len__36461__auto___100965)){
args100906.push((arguments[i__36462__auto___100966]));

var G__100967 = (i__36462__auto___100966 + (1));
i__36462__auto___100966 = G__100967;
continue;
} else {
}
break;
}

var G__100908 = args100906.length;
switch (G__100908) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args100906.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40985__auto___100970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___100970,out){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___100970,out){
return (function (state_100932){
var state_val_100933 = (state_100932[(1)]);
if((state_val_100933 === (7))){
var inst_100926 = (state_100932[(2)]);
var state_100932__$1 = state_100932;
var statearr_100939_100972 = state_100932__$1;
(statearr_100939_100972[(2)] = inst_100926);

(statearr_100939_100972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100933 === (1))){
var state_100932__$1 = state_100932;
var statearr_100940_100976 = state_100932__$1;
(statearr_100940_100976[(2)] = null);

(statearr_100940_100976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100933 === (4))){
var inst_100912 = (state_100932[(7)]);
var inst_100912__$1 = (state_100932[(2)]);
var inst_100913 = (inst_100912__$1 == null);
var state_100932__$1 = (function (){var statearr_100948 = state_100932;
(statearr_100948[(7)] = inst_100912__$1);

return statearr_100948;
})();
if(cljs.core.truth_(inst_100913)){
var statearr_100949_100980 = state_100932__$1;
(statearr_100949_100980[(1)] = (5));

} else {
var statearr_100950_100981 = state_100932__$1;
(statearr_100950_100981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100933 === (6))){
var inst_100912 = (state_100932[(7)]);
var inst_100917 = p.call(null,inst_100912);
var state_100932__$1 = state_100932;
if(cljs.core.truth_(inst_100917)){
var statearr_100951_100982 = state_100932__$1;
(statearr_100951_100982[(1)] = (8));

} else {
var statearr_100952_100983 = state_100932__$1;
(statearr_100952_100983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100933 === (3))){
var inst_100928 = (state_100932[(2)]);
var state_100932__$1 = state_100932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_100932__$1,inst_100928);
} else {
if((state_val_100933 === (2))){
var state_100932__$1 = state_100932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_100932__$1,(4),ch);
} else {
if((state_val_100933 === (11))){
var inst_100920 = (state_100932[(2)]);
var state_100932__$1 = state_100932;
var statearr_100953_100986 = state_100932__$1;
(statearr_100953_100986[(2)] = inst_100920);

(statearr_100953_100986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100933 === (9))){
var state_100932__$1 = state_100932;
var statearr_100954_100987 = state_100932__$1;
(statearr_100954_100987[(2)] = null);

(statearr_100954_100987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100933 === (5))){
var inst_100915 = cljs.core.async.close_BANG_.call(null,out);
var state_100932__$1 = state_100932;
var statearr_100955_100988 = state_100932__$1;
(statearr_100955_100988[(2)] = inst_100915);

(statearr_100955_100988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100933 === (10))){
var inst_100923 = (state_100932[(2)]);
var state_100932__$1 = (function (){var statearr_100956 = state_100932;
(statearr_100956[(8)] = inst_100923);

return statearr_100956;
})();
var statearr_100957_100992 = state_100932__$1;
(statearr_100957_100992[(2)] = null);

(statearr_100957_100992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100933 === (8))){
var inst_100912 = (state_100932[(7)]);
var state_100932__$1 = state_100932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_100932__$1,(11),out,inst_100912);
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
});})(c__40985__auto___100970,out))
;
return ((function (switch__40398__auto__,c__40985__auto___100970,out){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_100961 = [null,null,null,null,null,null,null,null,null];
(statearr_100961[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_100961[(1)] = (1));

return statearr_100961;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_100932){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_100932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e100962){if((e100962 instanceof Object)){
var ex__40402__auto__ = e100962;
var statearr_100963_100996 = state_100932;
(statearr_100963_100996[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_100932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e100962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__100997 = state_100932;
state_100932 = G__100997;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_100932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_100932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___100970,out))
})();
var state__40987__auto__ = (function (){var statearr_100964 = f__40986__auto__.call(null);
(statearr_100964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___100970);

return statearr_100964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___100970,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args100998 = [];
var len__36461__auto___101003 = arguments.length;
var i__36462__auto___101004 = (0);
while(true){
if((i__36462__auto___101004 < len__36461__auto___101003)){
args100998.push((arguments[i__36462__auto___101004]));

var G__101005 = (i__36462__auto___101004 + (1));
i__36462__auto___101004 = G__101005;
continue;
} else {
}
break;
}

var G__101001 = args100998.length;
switch (G__101001) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args100998.length)].join('')));

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
var c__40985__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto__){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto__){
return (function (state_101209){
var state_val_101210 = (state_101209[(1)]);
if((state_val_101210 === (7))){
var inst_101201 = (state_101209[(2)]);
var state_101209__$1 = state_101209;
var statearr_101211_101263 = state_101209__$1;
(statearr_101211_101263[(2)] = inst_101201);

(statearr_101211_101263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101210 === (20))){
var inst_101171 = (state_101209[(7)]);
var inst_101182 = (state_101209[(2)]);
var inst_101183 = cljs.core.next.call(null,inst_101171);
var inst_101157 = inst_101183;
var inst_101158 = null;
var inst_101159 = (0);
var inst_101160 = (0);
var state_101209__$1 = (function (){var statearr_101212 = state_101209;
(statearr_101212[(8)] = inst_101182);

(statearr_101212[(9)] = inst_101158);

(statearr_101212[(10)] = inst_101157);

(statearr_101212[(11)] = inst_101160);

(statearr_101212[(12)] = inst_101159);

return statearr_101212;
})();
var statearr_101213_101266 = state_101209__$1;
(statearr_101213_101266[(2)] = null);

(statearr_101213_101266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101210 === (1))){
var state_101209__$1 = state_101209;
var statearr_101214_101269 = state_101209__$1;
(statearr_101214_101269[(2)] = null);

(statearr_101214_101269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101210 === (4))){
var inst_101146 = (state_101209[(13)]);
var inst_101146__$1 = (state_101209[(2)]);
var inst_101147 = (inst_101146__$1 == null);
var state_101209__$1 = (function (){var statearr_101215 = state_101209;
(statearr_101215[(13)] = inst_101146__$1);

return statearr_101215;
})();
if(cljs.core.truth_(inst_101147)){
var statearr_101216_101272 = state_101209__$1;
(statearr_101216_101272[(1)] = (5));

} else {
var statearr_101217_101275 = state_101209__$1;
(statearr_101217_101275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101210 === (15))){
var state_101209__$1 = state_101209;
var statearr_101221_101280 = state_101209__$1;
(statearr_101221_101280[(2)] = null);

(statearr_101221_101280[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101210 === (21))){
var state_101209__$1 = state_101209;
var statearr_101222_101281 = state_101209__$1;
(statearr_101222_101281[(2)] = null);

(statearr_101222_101281[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101210 === (13))){
var inst_101158 = (state_101209[(9)]);
var inst_101157 = (state_101209[(10)]);
var inst_101160 = (state_101209[(11)]);
var inst_101159 = (state_101209[(12)]);
var inst_101167 = (state_101209[(2)]);
var inst_101168 = (inst_101160 + (1));
var tmp101218 = inst_101158;
var tmp101219 = inst_101157;
var tmp101220 = inst_101159;
var inst_101157__$1 = tmp101219;
var inst_101158__$1 = tmp101218;
var inst_101159__$1 = tmp101220;
var inst_101160__$1 = inst_101168;
var state_101209__$1 = (function (){var statearr_101227 = state_101209;
(statearr_101227[(9)] = inst_101158__$1);

(statearr_101227[(10)] = inst_101157__$1);

(statearr_101227[(11)] = inst_101160__$1);

(statearr_101227[(12)] = inst_101159__$1);

(statearr_101227[(14)] = inst_101167);

return statearr_101227;
})();
var statearr_101228_101282 = state_101209__$1;
(statearr_101228_101282[(2)] = null);

(statearr_101228_101282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101210 === (22))){
var state_101209__$1 = state_101209;
var statearr_101229_101284 = state_101209__$1;
(statearr_101229_101284[(2)] = null);

(statearr_101229_101284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101210 === (6))){
var inst_101146 = (state_101209[(13)]);
var inst_101155 = f.call(null,inst_101146);
var inst_101156 = cljs.core.seq.call(null,inst_101155);
var inst_101157 = inst_101156;
var inst_101158 = null;
var inst_101159 = (0);
var inst_101160 = (0);
var state_101209__$1 = (function (){var statearr_101230 = state_101209;
(statearr_101230[(9)] = inst_101158);

(statearr_101230[(10)] = inst_101157);

(statearr_101230[(11)] = inst_101160);

(statearr_101230[(12)] = inst_101159);

return statearr_101230;
})();
var statearr_101231_101285 = state_101209__$1;
(statearr_101231_101285[(2)] = null);

(statearr_101231_101285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101210 === (17))){
var inst_101171 = (state_101209[(7)]);
var inst_101175 = cljs.core.chunk_first.call(null,inst_101171);
var inst_101176 = cljs.core.chunk_rest.call(null,inst_101171);
var inst_101177 = cljs.core.count.call(null,inst_101175);
var inst_101157 = inst_101176;
var inst_101158 = inst_101175;
var inst_101159 = inst_101177;
var inst_101160 = (0);
var state_101209__$1 = (function (){var statearr_101232 = state_101209;
(statearr_101232[(9)] = inst_101158);

(statearr_101232[(10)] = inst_101157);

(statearr_101232[(11)] = inst_101160);

(statearr_101232[(12)] = inst_101159);

return statearr_101232;
})();
var statearr_101233_101286 = state_101209__$1;
(statearr_101233_101286[(2)] = null);

(statearr_101233_101286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101210 === (3))){
var inst_101203 = (state_101209[(2)]);
var state_101209__$1 = state_101209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101209__$1,inst_101203);
} else {
if((state_val_101210 === (12))){
var inst_101191 = (state_101209[(2)]);
var state_101209__$1 = state_101209;
var statearr_101235_101288 = state_101209__$1;
(statearr_101235_101288[(2)] = inst_101191);

(statearr_101235_101288[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101210 === (2))){
var state_101209__$1 = state_101209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101209__$1,(4),in$);
} else {
if((state_val_101210 === (23))){
var inst_101199 = (state_101209[(2)]);
var state_101209__$1 = state_101209;
var statearr_101239_101289 = state_101209__$1;
(statearr_101239_101289[(2)] = inst_101199);

(statearr_101239_101289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101210 === (19))){
var inst_101186 = (state_101209[(2)]);
var state_101209__$1 = state_101209;
var statearr_101240_101290 = state_101209__$1;
(statearr_101240_101290[(2)] = inst_101186);

(statearr_101240_101290[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101210 === (11))){
var inst_101157 = (state_101209[(10)]);
var inst_101171 = (state_101209[(7)]);
var inst_101171__$1 = cljs.core.seq.call(null,inst_101157);
var state_101209__$1 = (function (){var statearr_101241 = state_101209;
(statearr_101241[(7)] = inst_101171__$1);

return statearr_101241;
})();
if(inst_101171__$1){
var statearr_101242_101291 = state_101209__$1;
(statearr_101242_101291[(1)] = (14));

} else {
var statearr_101243_101292 = state_101209__$1;
(statearr_101243_101292[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101210 === (9))){
var inst_101193 = (state_101209[(2)]);
var inst_101194 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_101209__$1 = (function (){var statearr_101244 = state_101209;
(statearr_101244[(15)] = inst_101193);

return statearr_101244;
})();
if(cljs.core.truth_(inst_101194)){
var statearr_101245_101293 = state_101209__$1;
(statearr_101245_101293[(1)] = (21));

} else {
var statearr_101246_101294 = state_101209__$1;
(statearr_101246_101294[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101210 === (5))){
var inst_101149 = cljs.core.async.close_BANG_.call(null,out);
var state_101209__$1 = state_101209;
var statearr_101247_101295 = state_101209__$1;
(statearr_101247_101295[(2)] = inst_101149);

(statearr_101247_101295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101210 === (14))){
var inst_101171 = (state_101209[(7)]);
var inst_101173 = cljs.core.chunked_seq_QMARK_.call(null,inst_101171);
var state_101209__$1 = state_101209;
if(inst_101173){
var statearr_101248_101296 = state_101209__$1;
(statearr_101248_101296[(1)] = (17));

} else {
var statearr_101249_101297 = state_101209__$1;
(statearr_101249_101297[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101210 === (16))){
var inst_101189 = (state_101209[(2)]);
var state_101209__$1 = state_101209;
var statearr_101250_101298 = state_101209__$1;
(statearr_101250_101298[(2)] = inst_101189);

(statearr_101250_101298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101210 === (10))){
var inst_101158 = (state_101209[(9)]);
var inst_101160 = (state_101209[(11)]);
var inst_101165 = cljs.core._nth.call(null,inst_101158,inst_101160);
var state_101209__$1 = state_101209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101209__$1,(13),out,inst_101165);
} else {
if((state_val_101210 === (18))){
var inst_101171 = (state_101209[(7)]);
var inst_101180 = cljs.core.first.call(null,inst_101171);
var state_101209__$1 = state_101209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101209__$1,(20),out,inst_101180);
} else {
if((state_val_101210 === (8))){
var inst_101160 = (state_101209[(11)]);
var inst_101159 = (state_101209[(12)]);
var inst_101162 = (inst_101160 < inst_101159);
var inst_101163 = inst_101162;
var state_101209__$1 = state_101209;
if(cljs.core.truth_(inst_101163)){
var statearr_101253_101306 = state_101209__$1;
(statearr_101253_101306[(1)] = (10));

} else {
var statearr_101254_101307 = state_101209__$1;
(statearr_101254_101307[(1)] = (11));

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
});})(c__40985__auto__))
;
return ((function (switch__40398__auto__,c__40985__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40399__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40399__auto____0 = (function (){
var statearr_101258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_101258[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40399__auto__);

(statearr_101258[(1)] = (1));

return statearr_101258;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40399__auto____1 = (function (state_101209){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_101209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e101259){if((e101259 instanceof Object)){
var ex__40402__auto__ = e101259;
var statearr_101260_101310 = state_101209;
(statearr_101260_101310[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101313 = state_101209;
state_101209 = G__101313;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40399__auto__ = function(state_101209){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40399__auto____1.call(this,state_101209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40399__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40399__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto__))
})();
var state__40987__auto__ = (function (){var statearr_101261 = f__40986__auto__.call(null);
(statearr_101261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto__);

return statearr_101261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto__))
);

return c__40985__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args101315 = [];
var len__36461__auto___101321 = arguments.length;
var i__36462__auto___101322 = (0);
while(true){
if((i__36462__auto___101322 < len__36461__auto___101321)){
args101315.push((arguments[i__36462__auto___101322]));

var G__101323 = (i__36462__auto___101322 + (1));
i__36462__auto___101322 = G__101323;
continue;
} else {
}
break;
}

var G__101320 = args101315.length;
switch (G__101320) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args101315.length)].join('')));

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
var args101326 = [];
var len__36461__auto___101329 = arguments.length;
var i__36462__auto___101330 = (0);
while(true){
if((i__36462__auto___101330 < len__36461__auto___101329)){
args101326.push((arguments[i__36462__auto___101330]));

var G__101331 = (i__36462__auto___101330 + (1));
i__36462__auto___101330 = G__101331;
continue;
} else {
}
break;
}

var G__101328 = args101326.length;
switch (G__101328) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args101326.length)].join('')));

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
var args101334 = [];
var len__36461__auto___101402 = arguments.length;
var i__36462__auto___101403 = (0);
while(true){
if((i__36462__auto___101403 < len__36461__auto___101402)){
args101334.push((arguments[i__36462__auto___101403]));

var G__101404 = (i__36462__auto___101403 + (1));
i__36462__auto___101403 = G__101404;
continue;
} else {
}
break;
}

var G__101338 = args101334.length;
switch (G__101338) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args101334.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40985__auto___101406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___101406,out){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___101406,out){
return (function (state_101365){
var state_val_101366 = (state_101365[(1)]);
if((state_val_101366 === (7))){
var inst_101360 = (state_101365[(2)]);
var state_101365__$1 = state_101365;
var statearr_101370_101407 = state_101365__$1;
(statearr_101370_101407[(2)] = inst_101360);

(statearr_101370_101407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101366 === (1))){
var inst_101341 = null;
var state_101365__$1 = (function (){var statearr_101371 = state_101365;
(statearr_101371[(7)] = inst_101341);

return statearr_101371;
})();
var statearr_101372_101413 = state_101365__$1;
(statearr_101372_101413[(2)] = null);

(statearr_101372_101413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101366 === (4))){
var inst_101344 = (state_101365[(8)]);
var inst_101344__$1 = (state_101365[(2)]);
var inst_101345 = (inst_101344__$1 == null);
var inst_101346 = cljs.core.not.call(null,inst_101345);
var state_101365__$1 = (function (){var statearr_101373 = state_101365;
(statearr_101373[(8)] = inst_101344__$1);

return statearr_101373;
})();
if(inst_101346){
var statearr_101374_101415 = state_101365__$1;
(statearr_101374_101415[(1)] = (5));

} else {
var statearr_101375_101416 = state_101365__$1;
(statearr_101375_101416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101366 === (6))){
var state_101365__$1 = state_101365;
var statearr_101377_101417 = state_101365__$1;
(statearr_101377_101417[(2)] = null);

(statearr_101377_101417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101366 === (3))){
var inst_101362 = (state_101365[(2)]);
var inst_101363 = cljs.core.async.close_BANG_.call(null,out);
var state_101365__$1 = (function (){var statearr_101379 = state_101365;
(statearr_101379[(9)] = inst_101362);

return statearr_101379;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101365__$1,inst_101363);
} else {
if((state_val_101366 === (2))){
var state_101365__$1 = state_101365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101365__$1,(4),ch);
} else {
if((state_val_101366 === (11))){
var inst_101344 = (state_101365[(8)]);
var inst_101354 = (state_101365[(2)]);
var inst_101341 = inst_101344;
var state_101365__$1 = (function (){var statearr_101382 = state_101365;
(statearr_101382[(7)] = inst_101341);

(statearr_101382[(10)] = inst_101354);

return statearr_101382;
})();
var statearr_101383_101421 = state_101365__$1;
(statearr_101383_101421[(2)] = null);

(statearr_101383_101421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101366 === (9))){
var inst_101344 = (state_101365[(8)]);
var state_101365__$1 = state_101365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101365__$1,(11),out,inst_101344);
} else {
if((state_val_101366 === (5))){
var inst_101341 = (state_101365[(7)]);
var inst_101344 = (state_101365[(8)]);
var inst_101348 = cljs.core._EQ_.call(null,inst_101344,inst_101341);
var state_101365__$1 = state_101365;
if(inst_101348){
var statearr_101385_101422 = state_101365__$1;
(statearr_101385_101422[(1)] = (8));

} else {
var statearr_101386_101423 = state_101365__$1;
(statearr_101386_101423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101366 === (10))){
var inst_101357 = (state_101365[(2)]);
var state_101365__$1 = state_101365;
var statearr_101387_101424 = state_101365__$1;
(statearr_101387_101424[(2)] = inst_101357);

(statearr_101387_101424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101366 === (8))){
var inst_101341 = (state_101365[(7)]);
var tmp101384 = inst_101341;
var inst_101341__$1 = tmp101384;
var state_101365__$1 = (function (){var statearr_101388 = state_101365;
(statearr_101388[(7)] = inst_101341__$1);

return statearr_101388;
})();
var statearr_101389_101429 = state_101365__$1;
(statearr_101389_101429[(2)] = null);

(statearr_101389_101429[(1)] = (2));


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
});})(c__40985__auto___101406,out))
;
return ((function (switch__40398__auto__,c__40985__auto___101406,out){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_101393 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_101393[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_101393[(1)] = (1));

return statearr_101393;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_101365){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_101365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e101399){if((e101399 instanceof Object)){
var ex__40402__auto__ = e101399;
var statearr_101400_101430 = state_101365;
(statearr_101400_101430[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101431 = state_101365;
state_101365 = G__101431;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_101365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_101365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___101406,out))
})();
var state__40987__auto__ = (function (){var statearr_101401 = f__40986__auto__.call(null);
(statearr_101401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___101406);

return statearr_101401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___101406,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args101434 = [];
var len__36461__auto___101523 = arguments.length;
var i__36462__auto___101524 = (0);
while(true){
if((i__36462__auto___101524 < len__36461__auto___101523)){
args101434.push((arguments[i__36462__auto___101524]));

var G__101525 = (i__36462__auto___101524 + (1));
i__36462__auto___101524 = G__101525;
continue;
} else {
}
break;
}

var G__101436 = args101434.length;
switch (G__101436) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args101434.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40985__auto___101529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___101529,out){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___101529,out){
return (function (state_101480){
var state_val_101481 = (state_101480[(1)]);
if((state_val_101481 === (7))){
var inst_101476 = (state_101480[(2)]);
var state_101480__$1 = state_101480;
var statearr_101486_101530 = state_101480__$1;
(statearr_101486_101530[(2)] = inst_101476);

(statearr_101486_101530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101481 === (1))){
var inst_101437 = (new Array(n));
var inst_101438 = inst_101437;
var inst_101439 = (0);
var state_101480__$1 = (function (){var statearr_101487 = state_101480;
(statearr_101487[(7)] = inst_101438);

(statearr_101487[(8)] = inst_101439);

return statearr_101487;
})();
var statearr_101488_101532 = state_101480__$1;
(statearr_101488_101532[(2)] = null);

(statearr_101488_101532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101481 === (4))){
var inst_101442 = (state_101480[(9)]);
var inst_101442__$1 = (state_101480[(2)]);
var inst_101443 = (inst_101442__$1 == null);
var inst_101444 = cljs.core.not.call(null,inst_101443);
var state_101480__$1 = (function (){var statearr_101489 = state_101480;
(statearr_101489[(9)] = inst_101442__$1);

return statearr_101489;
})();
if(inst_101444){
var statearr_101490_101533 = state_101480__$1;
(statearr_101490_101533[(1)] = (5));

} else {
var statearr_101491_101534 = state_101480__$1;
(statearr_101491_101534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101481 === (15))){
var inst_101470 = (state_101480[(2)]);
var state_101480__$1 = state_101480;
var statearr_101492_101535 = state_101480__$1;
(statearr_101492_101535[(2)] = inst_101470);

(statearr_101492_101535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101481 === (13))){
var state_101480__$1 = state_101480;
var statearr_101493_101540 = state_101480__$1;
(statearr_101493_101540[(2)] = null);

(statearr_101493_101540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101481 === (6))){
var inst_101439 = (state_101480[(8)]);
var inst_101466 = (inst_101439 > (0));
var state_101480__$1 = state_101480;
if(cljs.core.truth_(inst_101466)){
var statearr_101494_101541 = state_101480__$1;
(statearr_101494_101541[(1)] = (12));

} else {
var statearr_101495_101542 = state_101480__$1;
(statearr_101495_101542[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101481 === (3))){
var inst_101478 = (state_101480[(2)]);
var state_101480__$1 = state_101480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101480__$1,inst_101478);
} else {
if((state_val_101481 === (12))){
var inst_101438 = (state_101480[(7)]);
var inst_101468 = cljs.core.vec.call(null,inst_101438);
var state_101480__$1 = state_101480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101480__$1,(15),out,inst_101468);
} else {
if((state_val_101481 === (2))){
var state_101480__$1 = state_101480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101480__$1,(4),ch);
} else {
if((state_val_101481 === (11))){
var inst_101460 = (state_101480[(2)]);
var inst_101461 = (new Array(n));
var inst_101438 = inst_101461;
var inst_101439 = (0);
var state_101480__$1 = (function (){var statearr_101499 = state_101480;
(statearr_101499[(7)] = inst_101438);

(statearr_101499[(10)] = inst_101460);

(statearr_101499[(8)] = inst_101439);

return statearr_101499;
})();
var statearr_101501_101544 = state_101480__$1;
(statearr_101501_101544[(2)] = null);

(statearr_101501_101544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101481 === (9))){
var inst_101438 = (state_101480[(7)]);
var inst_101458 = cljs.core.vec.call(null,inst_101438);
var state_101480__$1 = state_101480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101480__$1,(11),out,inst_101458);
} else {
if((state_val_101481 === (5))){
var inst_101442 = (state_101480[(9)]);
var inst_101438 = (state_101480[(7)]);
var inst_101447 = (state_101480[(11)]);
var inst_101439 = (state_101480[(8)]);
var inst_101446 = (inst_101438[inst_101439] = inst_101442);
var inst_101447__$1 = (inst_101439 + (1));
var inst_101448 = (inst_101447__$1 < n);
var state_101480__$1 = (function (){var statearr_101504 = state_101480;
(statearr_101504[(11)] = inst_101447__$1);

(statearr_101504[(12)] = inst_101446);

return statearr_101504;
})();
if(cljs.core.truth_(inst_101448)){
var statearr_101505_101551 = state_101480__$1;
(statearr_101505_101551[(1)] = (8));

} else {
var statearr_101506_101552 = state_101480__$1;
(statearr_101506_101552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101481 === (14))){
var inst_101473 = (state_101480[(2)]);
var inst_101474 = cljs.core.async.close_BANG_.call(null,out);
var state_101480__$1 = (function (){var statearr_101508 = state_101480;
(statearr_101508[(13)] = inst_101473);

return statearr_101508;
})();
var statearr_101509_101553 = state_101480__$1;
(statearr_101509_101553[(2)] = inst_101474);

(statearr_101509_101553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101481 === (10))){
var inst_101464 = (state_101480[(2)]);
var state_101480__$1 = state_101480;
var statearr_101510_101559 = state_101480__$1;
(statearr_101510_101559[(2)] = inst_101464);

(statearr_101510_101559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101481 === (8))){
var inst_101438 = (state_101480[(7)]);
var inst_101447 = (state_101480[(11)]);
var tmp101507 = inst_101438;
var inst_101438__$1 = tmp101507;
var inst_101439 = inst_101447;
var state_101480__$1 = (function (){var statearr_101511 = state_101480;
(statearr_101511[(7)] = inst_101438__$1);

(statearr_101511[(8)] = inst_101439);

return statearr_101511;
})();
var statearr_101512_101565 = state_101480__$1;
(statearr_101512_101565[(2)] = null);

(statearr_101512_101565[(1)] = (2));


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
});})(c__40985__auto___101529,out))
;
return ((function (switch__40398__auto__,c__40985__auto___101529,out){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_101519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_101519[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_101519[(1)] = (1));

return statearr_101519;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_101480){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_101480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e101520){if((e101520 instanceof Object)){
var ex__40402__auto__ = e101520;
var statearr_101521_101571 = state_101480;
(statearr_101521_101571[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101572 = state_101480;
state_101480 = G__101572;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_101480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_101480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___101529,out))
})();
var state__40987__auto__ = (function (){var statearr_101522 = f__40986__auto__.call(null);
(statearr_101522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___101529);

return statearr_101522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___101529,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args101573 = [];
var len__36461__auto___101670 = arguments.length;
var i__36462__auto___101671 = (0);
while(true){
if((i__36462__auto___101671 < len__36461__auto___101670)){
args101573.push((arguments[i__36462__auto___101671]));

var G__101673 = (i__36462__auto___101671 + (1));
i__36462__auto___101671 = G__101673;
continue;
} else {
}
break;
}

var G__101580 = args101573.length;
switch (G__101580) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args101573.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40985__auto___101680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___101680,out){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___101680,out){
return (function (state_101632){
var state_val_101633 = (state_101632[(1)]);
if((state_val_101633 === (7))){
var inst_101628 = (state_101632[(2)]);
var state_101632__$1 = state_101632;
var statearr_101634_101684 = state_101632__$1;
(statearr_101634_101684[(2)] = inst_101628);

(statearr_101634_101684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101633 === (1))){
var inst_101587 = [];
var inst_101590 = inst_101587;
var inst_101591 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_101632__$1 = (function (){var statearr_101635 = state_101632;
(statearr_101635[(7)] = inst_101591);

(statearr_101635[(8)] = inst_101590);

return statearr_101635;
})();
var statearr_101637_101689 = state_101632__$1;
(statearr_101637_101689[(2)] = null);

(statearr_101637_101689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101633 === (4))){
var inst_101596 = (state_101632[(9)]);
var inst_101596__$1 = (state_101632[(2)]);
var inst_101597 = (inst_101596__$1 == null);
var inst_101598 = cljs.core.not.call(null,inst_101597);
var state_101632__$1 = (function (){var statearr_101641 = state_101632;
(statearr_101641[(9)] = inst_101596__$1);

return statearr_101641;
})();
if(inst_101598){
var statearr_101642_101690 = state_101632__$1;
(statearr_101642_101690[(1)] = (5));

} else {
var statearr_101643_101691 = state_101632__$1;
(statearr_101643_101691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101633 === (15))){
var inst_101622 = (state_101632[(2)]);
var state_101632__$1 = state_101632;
var statearr_101644_101692 = state_101632__$1;
(statearr_101644_101692[(2)] = inst_101622);

(statearr_101644_101692[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101633 === (13))){
var state_101632__$1 = state_101632;
var statearr_101645_101693 = state_101632__$1;
(statearr_101645_101693[(2)] = null);

(statearr_101645_101693[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101633 === (6))){
var inst_101590 = (state_101632[(8)]);
var inst_101617 = inst_101590.length;
var inst_101618 = (inst_101617 > (0));
var state_101632__$1 = state_101632;
if(cljs.core.truth_(inst_101618)){
var statearr_101650_101694 = state_101632__$1;
(statearr_101650_101694[(1)] = (12));

} else {
var statearr_101651_101695 = state_101632__$1;
(statearr_101651_101695[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101633 === (3))){
var inst_101630 = (state_101632[(2)]);
var state_101632__$1 = state_101632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101632__$1,inst_101630);
} else {
if((state_val_101633 === (12))){
var inst_101590 = (state_101632[(8)]);
var inst_101620 = cljs.core.vec.call(null,inst_101590);
var state_101632__$1 = state_101632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101632__$1,(15),out,inst_101620);
} else {
if((state_val_101633 === (2))){
var state_101632__$1 = state_101632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101632__$1,(4),ch);
} else {
if((state_val_101633 === (11))){
var inst_101600 = (state_101632[(10)]);
var inst_101596 = (state_101632[(9)]);
var inst_101610 = (state_101632[(2)]);
var inst_101611 = [];
var inst_101612 = inst_101611.push(inst_101596);
var inst_101590 = inst_101611;
var inst_101591 = inst_101600;
var state_101632__$1 = (function (){var statearr_101652 = state_101632;
(statearr_101652[(11)] = inst_101612);

(statearr_101652[(7)] = inst_101591);

(statearr_101652[(12)] = inst_101610);

(statearr_101652[(8)] = inst_101590);

return statearr_101652;
})();
var statearr_101653_101703 = state_101632__$1;
(statearr_101653_101703[(2)] = null);

(statearr_101653_101703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101633 === (9))){
var inst_101590 = (state_101632[(8)]);
var inst_101608 = cljs.core.vec.call(null,inst_101590);
var state_101632__$1 = state_101632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101632__$1,(11),out,inst_101608);
} else {
if((state_val_101633 === (5))){
var inst_101591 = (state_101632[(7)]);
var inst_101600 = (state_101632[(10)]);
var inst_101596 = (state_101632[(9)]);
var inst_101600__$1 = f.call(null,inst_101596);
var inst_101601 = cljs.core._EQ_.call(null,inst_101600__$1,inst_101591);
var inst_101602 = cljs.core.keyword_identical_QMARK_.call(null,inst_101591,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_101603 = (inst_101601) || (inst_101602);
var state_101632__$1 = (function (){var statearr_101654 = state_101632;
(statearr_101654[(10)] = inst_101600__$1);

return statearr_101654;
})();
if(cljs.core.truth_(inst_101603)){
var statearr_101655_101710 = state_101632__$1;
(statearr_101655_101710[(1)] = (8));

} else {
var statearr_101656_101711 = state_101632__$1;
(statearr_101656_101711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101633 === (14))){
var inst_101625 = (state_101632[(2)]);
var inst_101626 = cljs.core.async.close_BANG_.call(null,out);
var state_101632__$1 = (function (){var statearr_101658 = state_101632;
(statearr_101658[(13)] = inst_101625);

return statearr_101658;
})();
var statearr_101659_101712 = state_101632__$1;
(statearr_101659_101712[(2)] = inst_101626);

(statearr_101659_101712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101633 === (10))){
var inst_101615 = (state_101632[(2)]);
var state_101632__$1 = state_101632;
var statearr_101660_101713 = state_101632__$1;
(statearr_101660_101713[(2)] = inst_101615);

(statearr_101660_101713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101633 === (8))){
var inst_101600 = (state_101632[(10)]);
var inst_101596 = (state_101632[(9)]);
var inst_101590 = (state_101632[(8)]);
var inst_101605 = inst_101590.push(inst_101596);
var tmp101657 = inst_101590;
var inst_101590__$1 = tmp101657;
var inst_101591 = inst_101600;
var state_101632__$1 = (function (){var statearr_101661 = state_101632;
(statearr_101661[(7)] = inst_101591);

(statearr_101661[(14)] = inst_101605);

(statearr_101661[(8)] = inst_101590__$1);

return statearr_101661;
})();
var statearr_101662_101720 = state_101632__$1;
(statearr_101662_101720[(2)] = null);

(statearr_101662_101720[(1)] = (2));


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
});})(c__40985__auto___101680,out))
;
return ((function (switch__40398__auto__,c__40985__auto___101680,out){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_101666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_101666[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_101666[(1)] = (1));

return statearr_101666;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_101632){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_101632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e101667){if((e101667 instanceof Object)){
var ex__40402__auto__ = e101667;
var statearr_101668_101721 = state_101632;
(statearr_101668_101721[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101722 = state_101632;
state_101632 = G__101722;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_101632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_101632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___101680,out))
})();
var state__40987__auto__ = (function (){var statearr_101669 = f__40986__auto__.call(null);
(statearr_101669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___101680);

return statearr_101669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___101680,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
